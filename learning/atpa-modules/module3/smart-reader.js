/* Single-column bilingual controls; source HTML and translations remain private. */
(()=>{"use strict";
 const article=document.getElementById("study-content");
 const search=document.getElementById("smart-search-input");
 const findButton=document.getElementById("smart-find");
 const searchStatus=document.getElementById("smart-search-status");
 const POSITION_KEY="atpa-module3-smart-position-v1";
 let mounted=false,pairs=[],searchMatches=[],searchIndex=-1,query="",saveTimer=0;
 function mode(){return document.documentElement.dataset.readingMode==="en"?"en":"zh"}
 function refreshPeek(){
  const lang=mode();
  for(const pair of pairs){
   pair.dataset.peek="false";
   const button=document.querySelector('[data-smart-pair="'+pair.id+'"]');
   if(!button)continue;
   button.textContent=lang==="en"?"看中文":"看英文";
   button.setAttribute("aria-label",lang==="en"?"展開此段繁體中文翻譯":"展開此段英文原文");
   button.setAttribute("aria-expanded","false");
   const other=pair.querySelector(lang==="en"?":scope > .translation":":scope > .original");
   if(other?.id)button.setAttribute("aria-controls",other.id);
  }
 }
 function mount(){
  if(mounted||!article.querySelector("section.lesson"))return;
  mounted=true;
  const lessons=[...article.querySelectorAll("section.lesson")];
  for(const lesson of lessons){
   let ordinal=0;
   for(const pair of lesson.querySelectorAll(".pair")){
    if(pair.closest(".smart-guide"))continue;
    const en=pair.querySelector(":scope > .original");
    const zh=pair.querySelector(":scope > .translation");
    if(!en||!zh)continue;
    ordinal++;
    if(!pair.id)pair.id=lesson.id+"-pair-"+String(ordinal).padStart(3,"0");
    if(!en.id)en.id=pair.id+"-en";
    if(!zh.id)zh.id=pair.id+"-zh";
    pair.dataset.bilingual="true";
    pair.dataset.peek="false";
    const button=document.createElement("button");
    button.type="button";button.className="smart-peek";
    button.dataset.smartPair=pair.id;
    button.setAttribute("aria-expanded","false");
    const quizOption=pair.closest(".quiz-option");
    if(quizOption)quizOption.append(button);else pair.append(button);
    pairs.push(pair);
   }
   const summary=lesson.querySelector(":scope > .gpt-summary");
   if(summary){
    const details=document.createElement("details");
    details.className="smart-summary";
    const trigger=document.createElement("summary");
    trigger.textContent="本節學習摘要";
    details.append(trigger,summary);lesson.append(details);
   }
  }
  refreshPeek();
  article.addEventListener("click",e=>{
   const button=e.target.closest("button.smart-peek");
   if(!button)return;
   e.preventDefault();e.stopPropagation();
   const pair=document.getElementById(button.dataset.smartPair);
   if(!pair)return;
   const show=pair.dataset.peek!=="true";
   pair.dataset.peek=String(show);
   button.setAttribute("aria-expanded",String(show));
   button.textContent=show?"收起"+(mode()==="en"?"中文":"英文"):(mode()==="en"?"看中文":"看英文");
  });
 }
 function onLanguageChange(){if(mounted)refreshPeek()}
 function readSaved(){
  try{const data=JSON.parse(localStorage.getItem(POSITION_KEY)||"null");
   if(data&&typeof data.id==="string"&&data.id.length<100&&Number.isFinite(data.top))return data;
  }catch(_){}
  return null;
 }
 function getResumeId(){return readSaved()?.id||null}
 function getResumeOffset(id){const data=readSaved();return data?.id===id?data.top:null}
 function savePosition(){
  saveTimer=0;if(!mounted||document.getElementById("reader-wrap")?.hidden)return;
  const y=Math.min(window.innerHeight-20,Math.max(90,(document.getElementById("mode-bar")?.getBoundingClientRect().bottom||0)+35));
  let target=null;
  for(const x of [Math.floor(innerWidth*.55),Math.floor(innerWidth*.75),Math.floor(innerWidth*.3)]){
   const hit=document.elementFromPoint(x,y);
   const found=hit?.closest(".pair[data-bilingual],.lesson");
   if(found&&article.contains(found)){target=found.closest(".pair[data-bilingual]")||found;break}
  }
  if(!target){
   const active=article.querySelector(".lesson:target")||article.querySelector(".lesson");
   target=active;
  }
  if(!target?.id)return;
  try{localStorage.setItem(POSITION_KEY,JSON.stringify({id:target.id,top:target.getBoundingClientRect().top,at:Date.now()}))}catch(_){}
 }
 window.addEventListener("scroll",()=>{if(!mounted)return;clearTimeout(saveTimer);saveTimer=setTimeout(savePosition,450)},{passive:true});
 window.addEventListener("pagehide",savePosition);
 function restoreOffset(id){
  const offset=getResumeOffset(id);
  const node=document.getElementById(id);
  if(offset===null||!node)return;
  const delta=node.getBoundingClientRect().top-offset;
  if(Number.isFinite(delta)&&Math.abs(delta)>1)window.scrollBy({top:delta,behavior:"instant"});
 }
 function findNext(){
  if(!mounted)return;
  const needle=(search?.value||"").trim().toLocaleLowerCase();
  if(!needle){searchStatus.textContent="請輸入英文或中文關鍵字。";return}
  if(needle!==query){
   query=needle;searchIndex=-1;
   searchMatches=pairs.filter(p=>{
    const en=p.querySelector(":scope > .original")?.textContent||"";
    const zh=p.querySelector(":scope > .translation")?.textContent||"";
    return(en+"\n"+zh).toLocaleLowerCase().includes(query);
   });
  }
  article.querySelectorAll(".smart-search-hit").forEach(p=>p.classList.remove("smart-search-hit"));
  if(!searchMatches.length){searchStatus.textContent="沒有找到符合的英中段落。";return}
  searchIndex=(searchIndex+1)%searchMatches.length;
  const match=searchMatches[searchIndex];
  match.classList.add("smart-search-hit");
  match.scrollIntoView({block:"center",behavior:"smooth"});
  searchStatus.textContent="第 "+(searchIndex+1)+"／"+searchMatches.length+" 筆（同步搜尋英文與繁體中文）";
 }
 findButton?.addEventListener("click",findNext);
 search?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();findNext()}});
 window.ATPASmartReader={mount,onLanguageChange,getResumeId,getResumeOffset,restoreOffset};
})();
