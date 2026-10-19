/* SOA ATPA private bilingual reader. Public UI only; all source text remains in restricted Google Drive. */
(()=>{"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const SESSION_KEY="hanami-kyoto-google-token-v3";
/* Public reader shell: SOA source file identifiers live in a private Drive index. */
const PRIVATE_INDEX_FILE_ID="1tqQmZxUU99EWeKBHiRw9NOTfKf_V7ZRGJrJigvNoi0A";
let SOURCES=[];
let GPT_READINGS=Object.create(null);
let CONCEPT_MAPS=[];
const CONCEPT_BY_LESSON=new Map();
let lastConceptLessonId=null;
const sourcePairsByLesson=new Map();
const $=id=>document.getElementById(id);
document.body.dataset.atpaModule="2";
const params=new URLSearchParams(location.search);
const requestedModule=params.get("module");
const selected=!requestedModule||requestedModule==="2";
const CHAPTERS={"1.1":{title:"Data Pipeline",zh:"資料管線"},"1.2":{title:"Reading and Writing Data",zh:"讀取與寫入資料"},"1.3":{title:"Data Transformation and Cleaning",zh:"資料轉換與清理"},"1.4":{title:"Relational Databases",zh:"關聯式資料庫"},"1.5":{title:"Data Validation",zh:"資料驗證"},"1.6":{title:"Missing and Extreme Values",zh:"缺失值與極端值"},"1.7":{title:"Case Studies",zh:"案例研究"}};
const EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16,21,29,13];
const FIRST_IDS=["s111","s1113","s1132","s121","s1215","s1229","s131","s1321","s1341","s141","s151","s161","s171"];
const SESSION_PREFIX="hanami-kyoto-google-token-v3";
let tokenClient=null,loaded=false,allLessons=[],scrollScheduled=false;
const show=(id,visible)=>{const n=$(id);if(n)n.hidden=!visible};
function status(message){const n=$("gate-status");if(n)n.textContent=message}
function loadSaved(){
 try{const o=JSON.parse(sessionStorage.getItem(SESSION_KEY)||"null");
 if(o?.access_token&&Number(o.expires_at)>Date.now()+90000)return o.access_token;
 }catch(_){}
 return null;
}
function remember(t){
 const expiry=Number(t.expires_in)||3500;
 try{sessionStorage.setItem(SESSION_KEY,JSON.stringify({access_token:t.access_token,expires_at:Date.now()+expiry*1000}))}catch(_){}
 return t.access_token;
}
function clearToken(){try{sessionStorage.removeItem(SESSION_KEY)}catch(_){}try{window.HanamiAuth?.forget?.()}catch(_){}}
function cleanSource(doc){
 const main=doc.querySelector("#atpa-source");
 if(!main)throw new Error("找不到私人教材內容，請檢查原始檔。");
 main.querySelectorAll("script,style,iframe,object,embed,form,input,button").forEach(n=>n.remove());
 main.querySelectorAll("*").forEach(n=>{
   [...n.attributes].forEach(a=>{if(a.name.toLowerCase().startsWith("on")||a.name.toLowerCase()==="style")n.removeAttribute(a.name)});
   if(n.tagName==="A"){
     const url=n.getAttribute("href")||"";
     if(!/^https:\/\//i.test(url))n.removeAttribute("href");
     else{n.setAttribute("target","_blank");n.setAttribute("rel","noopener noreferrer")}
   }
 });
 const lessons=[...main.querySelectorAll("section.lesson")];
 const lessonPairs=new Map();let pairCount=0;
 if(!lessons.length)throw new Error("來源沒有可閱讀的小節。");
 for(const sec of lessons){
   if(!sec.dataset.num||!sec.id)throw new Error("來源缺少原書編號或小節識別碼。");
   const pairs=sec.querySelectorAll(".pair");
   lessonPairs.set(sec.id,pairs);pairCount+=pairs.length;
   if(!pairs.length)throw new Error("§"+sec.dataset.num+" 缺少雙語配對。");
   pairs.forEach(p=>{
     if(!p.querySelector(":scope>.original")||!p.querySelector(":scope>.translation"))
       throw new Error("§"+sec.dataset.num+" 有未配對的英文或中文段落。");
   });
 }
 return{main,lessons,lessonPairs,pairCount};
}
/* Tap-to-translate: English by default; touching one paragraph swaps only that paragraph. */
/* One-time private-source enhancement: bilingual source labels remain intact in all views. */
const DISPLAY_MODES=["en","stacked","compare","map"];
const DISPLAY_KEY="atpa-module2-reading-mode-v4";
const LEGACY_DISPLAY_KEY="atpa-modules-reading-mode-v3";

/* PRIVATE-SOURCE READING LAYERS: All English and translated Chinese remain
   in the original Google Drive HTML. These are display-only, reversible
   derivatives generated after the existing source-pair QA succeeds. */
/* GPT-curated phrases come from a private index; no terminology map is public. */
function annotateCuratedTextInto(node,text,phrases){
 if(!text)return;
 if(!Array.isArray(phrases)||!phrases.length){node.appendChild(document.createTextNode(text));return}
 const dict=new Map(phrases.filter(v=>Array.isArray(v)&&typeof v[0]==="string"&&typeof v[1]==="string"&&v[0].trim()&&v[1].trim())
   .map(([phrase,gloss])=>[phrase.toLowerCase(),gloss]));
 const list=[...dict.keys()].sort((a,b)=>b.length-a.length);
 if(!list.length){node.appendChild(document.createTextNode(text));return}
 const escaped=list.map(v=>v.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"));
 const re=new RegExp(escaped.join("|"),"gi");
 let start=0,m,used=0;
 while((m=re.exec(text))&&used<40){
   const a=m.index,b=a+m[0].length;
   if((a>0&&/[A-Za-z]/.test(text[a-1]))||(b<text.length&&/[A-Za-z]/.test(text[b])))continue;
   node.appendChild(document.createTextNode(text.slice(start,a)));
   const bold=document.createElement("strong");bold.className="learning-mark";bold.textContent=m[0];node.appendChild(bold);
   const zh=document.createElement("span");zh.className="learning-gloss";zh.lang="zh-Hant";zh.textContent="（"+dict.get(m[0].toLowerCase())+"）";node.appendChild(zh);
   start=b;used++;
 }
 node.appendChild(document.createTextNode(text.slice(start)));
}
function annotatedClone(original,curatedPhrases){
 const clone=original.cloneNode(true);
 clone.className="reading-view reading-annotated"+(original.classList.contains("pdf-source-original")?" pdf-source-original":"");
 clone.removeAttribute("id");
 clone.setAttribute("lang","en");
 if(!Array.isArray(curatedPhrases)||!curatedPhrases.length)return clone;
 const walker=document.createTreeWalker(clone,NodeFilter.SHOW_TEXT),nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 for(const textNode of nodes){
   const p=textNode.parentElement;
   if(!p||p.closest("pre,code,a,script,style,svg,math,textarea"))continue;
   if(!textNode.nodeValue.trim())continue;
   const before=textNode.nodeValue,frag=document.createDocumentFragment();
   annotateCuratedTextInto(frag,before,curatedPhrases);
   textNode.replaceWith(frag);
 }
 return clone;
}
function extractSentence(text,limit=210,lang="en"){
 let raw=text.replace(/\r/g,"");
 // SOA PDF source sometimes contains printer-layer component labels. Strip
 // these only from the derived summary, never from the original manuscript.
 if(lang==="en"){
   raw=raw.replace(/\bComponent Table\d+\b/gi," ")
     .replace(/^\s*(?:Type|Title|Header|Footer)\s+(?:Panel|Callout|Panel Footer|Module \d+ Learning Objectives)?\s*$/gmi," ")
     .replace(/^\s*Content\s*$/gmi," ")
     .replace(/^\s*(?:Section\s+\d+(?:\.\d+)?\s+Learning Objective|Case Studies)\s*$/gmi," ")
     .replace(/^\s*\[BEGIN LINK[^\n]*/gmi," ")
     .replace(/^\s*\[END LINK\]\s*$/gmi," ")
     .replace(/[●•]/g," ");
 }
 const cleaned=raw.replace(/\s+/g," ").trim();
 if(!cleaned)return "";
 const segments=cleaned.split(/(?<=[.!?。！？])\s+/);
 const good=segments.map((value,index)=>({value:value.trim(),index}))
   .filter(x=>x.value.length>=12&&!/^(?:[\[<]|(?:Content|Footer|Header|Title|Type)\b|[=#{}])/i.test(x.value));
 const score=x=>{
   const v=x.value;
   let pts=0;
   if(v.length>35&&v.length<limit+75)pts+=4;
   if(v.length>limit+120)pts-=5;
   if(/\b(?:data|dataset|model|variable|predict|database|record|join|missing|imput|table|file|quality|validation|value|sample|coding|structure|workflow|filter)\b/i.test(v))pts+=3;
   if(/\b(?:is|are|can|should|could|allows|need|used|using|contains|provide|requires|define|applied|identify|calculate|helps)\b/i.test(v))pts+=2;
   if(/\b(?:Component Table|Panel|CHUNK \d+|BEGIN LINK|END LINK|Footer|Header)\b/i.test(v))pts-=12;
   if(/(?:https?:\/\/|\.csv\b|www\.|\{|\}|\[\[)/i.test(v))pts-=3;
   if(/^\d+(?:\.\d+){1,3}\s/.test(v))pts-=3;
   pts-=Math.min(4,x.index*.2);
   return pts;
 };
 good.sort((a,b)=>score(b)-score(a)||a.index-b.index);
 const chosen=(good[0]?.value||segments.find(x=>x.trim())||"").trim();
 if(chosen.length<=limit)return chosen;
 const breaker=lang==="zh"?/[。！？；]/:/[.!?;]/;
 const ix=chosen.slice(0,limit+35).search(breaker);
 if(ix>=35)return chosen.slice(0,ix+1);
 const end=chosen.slice(0,limit+10).lastIndexOf(lang==="zh"?"，":" ");
 return chosen.slice(0,end>70?end:limit).trim()+"…";
}
function makeSummary(original,translation,section,record){
 const reviewed=Array.isArray(record)&&typeof record[0]==="string"&&typeof record[1]==="string";
 const pane=document.createElement("aside");pane.className="reading-view reading-summary";
 pane.setAttribute("aria-label",reviewed?"GPT 精讀英中摘要":"來源自動摘錄，尚待 GPT 校訂");
 pane.dataset.method=reviewed?"gpt-reviewed":"source-extractive-pending";
 const en=document.createElement("p");en.className="summary-en";en.lang="en";
 const zh=document.createElement("p");zh.className="summary-zh";zh.lang="zh-Hant";
 if(reviewed){en.textContent=record[0];zh.textContent=record[1]}
 else{
   en.textContent=extractSentence(original.textContent,240,"en")||section.querySelector("header h2")?.textContent||"";
   zh.textContent=extractSentence(translation.textContent,130,"zh")||section.querySelector("header .zh-heading")?.textContent||"";
 }
 pane.append(en,zh);return pane;
}
function prepareLessonViews(lesson){
 if(lesson.dataset.viewsReady==="true")return;
 const article=lesson;
 const pairs=[...(sourcePairsByLesson.get(lesson.id)||lesson.querySelectorAll(".pair"))];
 if(!pairs.length)throw new Error("無法建立精讀檢視：找不到雙語段落。");
 let enhanced=0;
 const pairOrder=new Map();
 for(const pair of pairs){
   const lesson=pair.closest(".lesson");
   const lessonId=lesson?.id||"";
   const ordinal=pairOrder.get(lessonId)||0;
   pairOrder.set(lessonId,ordinal+1);
   const record=GPT_READINGS[lessonId]?.[ordinal]||null;
   pair.dataset.gptReviewed=record?"true":"false";
   const original=pair.querySelector(":scope>.original"),
         translation=pair.querySelector(":scope>.translation");
   if(!original||!translation)throw new Error("原文或 Work 譯文缺失。");
   if(pair.querySelector(":scope>.reading-annotated"))continue;
   const anot=annotatedClone(original,record?.[2]||[]);
   const summary=makeSummary(original,translation,lesson,record);
   // Test unaltered source text, preserving all whitespace and original punctuation.
   const withoutGloss=el=>{
     const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let text="";
     while(walker.nextNode())if(!walker.currentNode.parentElement.closest(".learning-gloss"))text+=walker.currentNode.nodeValue;
     return text;
   };
   if(withoutGloss(anot)!==original.textContent)
     throw new Error("英文完整性驗證失敗："+(pair.closest(".lesson")?.dataset.num||"未知"));
   pair.append(anot,summary);enhanced++;
 }
 for(const section of [lesson]){
   const header=section.querySelector(":scope>header");
   const h2=header?.querySelector(":scope>h2");
   if(h2&&!header.querySelector(".reading-heading")){
     const heading=document.createElement("h2");
     heading.className="reading-view reading-heading";heading.lang="en";
     heading.textContent=h2.textContent;
     h2.after(heading);h2.classList.add("replaced-by-reading");
   }
 }
 for(const heading of article.querySelectorAll("h3,h4")){
   if(heading.classList.contains("reading-view")||
      heading.closest(".translation,.original,.reading-annotated,.reading-diagonal,.reading-summary"))continue;
   if(heading.nextElementSibling?.classList.contains("reading-heading"))continue;
   if(!heading.textContent.includes("／"))continue;
   const clone=document.createElement(heading.tagName.toLowerCase());
   clone.className="reading-view reading-heading";clone.lang="en";
   clone.textContent=heading.textContent.split("／")[0].trim();
   heading.after(clone);heading.classList.add("replaced-by-reading");
 }
 // Enrich source tab summaries without altering their original content.
 for(const summary of article.querySelectorAll(".source-tabs > details > summary")){
   if(summary.querySelector(".reading-tab-label"))continue;
   const base=document.createElement("span");base.className="source-tab-base";
   while(summary.firstChild)base.appendChild(summary.firstChild);
   const english=document.createElement("span");english.className="reading-view reading-tab-label";
   english.lang="en";english.textContent=base.textContent.split("／")[0].trim();
   summary.append(base,english);
 }
 // Only derivatives are unhidden; original pair data are never rewritten.
 article.querySelectorAll(".reading-view").forEach(el=>el.removeAttribute("hidden"));
 article.dataset.enhancedPairs=String(pairs.length);
 lesson.dataset.viewsReady="true";
}

let viewObserver=null,viewPreparationStarted=false,resumeViewPreparation=null;
function prepareEnhancedViews(){
 // Prepare the opening and bookmarked lessons before the next paint.
 let target=null;
 target=document.getElementById($("toc")?.querySelector(".toc-link.active")?.dataset.id||"");
 if(!target)try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch(_){}
 if(!target&&params.get("part"))target=document.getElementById(FIRST_IDS[Number(params.get("part"))-1]);
 allLessons.slice(0,2).forEach(prepareLessonViews);
 if(target?.classList.contains("lesson"))prepareLessonViews(target);
 if(viewPreparationStarted){
  if(viewObserver){
   viewObserver.disconnect();
   allLessons.filter(lesson=>lesson.dataset.viewsReady!=="true").forEach(lesson=>viewObserver.observe(lesson));
  }else resumeViewPreparation?.();
  return;
 }
 viewPreparationStarted=true;
 if(typeof IntersectionObserver==="function"){
  viewObserver=new IntersectionObserver(entries=>{
   if(document.documentElement.dataset.readingMode==="en")return;
   entries.forEach(entry=>{
    if(entry.isIntersecting){prepareLessonViews(entry.target);viewObserver.unobserve(entry.target)}
   });
  },{rootMargin:"1000px 0px"});
  allLessons.forEach(lesson=>viewObserver.observe(lesson));
 }else{
  // Older browsers: spread the work across event-loop turns to keep the UI responsive.
  let index=2,timer=null;
  resumeViewPreparation=()=>{
   if(timer!==null||index>=allLessons.length)return;
   timer=setTimeout(()=>{
    timer=null;
    if(document.documentElement.dataset.readingMode==="en")return;
    prepareLessonViews(allLessons[index++]);
    resumeViewPreparation();
   },16);
  };
  resumeViewPreparation();
 }
}


function prepareBilingualLabels(){
 document.querySelectorAll("#study-content .source-tabs summary,#study-content .lesson h3").forEach(node=>{
   if(node.classList.contains("reading-view")||node.querySelector(".reading-tab-label"))return;
   const original=node.dataset.origFull||node.textContent;
   if(!node.dataset.origFull)node.dataset.origFull=original;
   if(node.classList.contains("stacked-bilingual-label")||!original.includes("／"))return;
   const parts=original.split("／");
   if(parts.length<2)return;
   const en=parts.shift().trim(),zh=parts.join("／").trim();
   if(!en||!zh)return;
   const chinese=document.createElement("span");
   chinese.lang="zh-Hant";chinese.className="bilingual-label-zh";chinese.textContent=zh;
   const english=document.createElement("span");
   english.lang="en";english.className="bilingual-label-en";english.textContent=en;
   node.replaceChildren(chinese,english);
   node.classList.add("stacked-bilingual-label");
 });
}
function preferredReadingMode(){
 try{
   const saved=localStorage.getItem(DISPLAY_KEY)||localStorage.getItem(LEGACY_DISPLAY_KEY);
   const legacy={zh:"stacked",parallel:"stacked",tap:"stacked",vertical:"stacked",annotated:"stacked"};
   const next=legacy[saved]||saved;
   return DISPLAY_MODES.includes(next)?next:"stacked";
 }catch(_){return "stacked"}
}
/* Keep the SAME source paragraph in view when a reading mode changes page height.
   Store the anchor on pointerdown (before iOS/Safari focuses the toolbar),
   and anchor to stable bilingual pairs rather than notes hidden in English-only. */
let readingSwitchRevision=0;
let readingScrollStyles=null;
let pendingModeAnchor=null;
function captureReadingPosition(){
 const article=$("study-content");
 if(!loaded||!article)return null;
 const viewport=window.innerHeight;
 const barBottom=Math.max(0,$("mode-bar")?.getBoundingClientRect().bottom||0);
 const page=article.getBoundingClientRect();
 if(page.bottom<=barBottom||page.top>=viewport)return null;
 const y=Math.min(viewport-24,Math.max(barBottom+32,viewport*.43));
 const x=Math.max(8,Math.min(window.innerWidth-8,page.left+page.width*.5));
 const stable=".pair,.lesson header,.chapter-heading,.source-figure,.source-page-figure";
 const unstable="details.tutor,details.phrases,.teacher-answer";
 let node=null;
 // The same .pair exists in both modes, even if either language is hidden.
 for(const dy of [0,-30,30,-75,75,-120,120]){
   const py=Math.max(barBottom+8,Math.min(viewport-8,y+dy));
   const hit=document.elementFromPoint(x,py);
   const candidate=hit?.closest(stable);
   if(!candidate||!article.contains(candidate)||candidate.closest(unstable))continue;
   const rect=candidate.getBoundingClientRect();
   if(rect.width&&rect.height){node=candidate;break}
 }
 if(!node){
   // When the reader is inside a Chinese-only tutor note, choose the closest
   // surviving paragraph, not the chapter heading hundreds of lines away.
   let best=Infinity;
   article.querySelectorAll(stable).forEach(candidate=>{
     if(candidate.closest(unstable))return;
     const rect=candidate.getBoundingClientRect();
     if(!rect.width||!rect.height)return;
     const distance=Math.max(0,rect.top-y,y-rect.bottom);
     if(distance<best){best=distance;node=candidate}
   });
 }
 if(!node)return null;
 const rect=node.getBoundingClientRect();
 return {
   node,
   y,
   fraction:Math.max(0,Math.min(1,(y-rect.top)/Math.max(1,rect.height)))
 };
}
function restoreReadingPosition(saved){
 if(!saved?.node?.isConnected)return;
 const rect=saved.node.getBoundingClientRect();
 if(!rect.height)return;
 const delta=rect.top+saved.fraction*rect.height-saved.y;
 if(Math.abs(delta)>.6){
   const root=document.scrollingElement||document.documentElement;
   const limit=Math.max(0,root.scrollHeight-window.innerHeight);
   window.scrollTo({top:Math.min(limit,Math.max(0,window.scrollY+delta)),behavior:"auto"});
 }
}
function applyReadingMode(mode,preservePosition=true,anchorOverride=null){
 const selected=DISPLAY_MODES.includes(mode)?mode:"stacked";
 if(preservePosition&&document.documentElement.dataset.readingMode===selected)return;
 const previous=document.documentElement.dataset.readingMode;
 const isMapTransition=selected==="map"||previous==="map";
 const activeId=document.querySelector("#toc .toc-link.active")?.dataset.id||allLessons[0]?.id;
 if(isMapTransition&&activeId)lastConceptLessonId=activeId;
 const saved=preservePosition&&!isMapTransition?(anchorOverride||captureReadingPosition()):null;
 const root=document.documentElement;
 if(selected==="stacked"||selected==="compare")prepareEnhancedViews();
 const revision=++readingSwitchRevision;
 if(saved){
   if(!readingScrollStyles)readingScrollStyles={
     behavior:root.style.scrollBehavior,
     rootAnchor:root.style.overflowAnchor,
     bodyAnchor:document.body.style.overflowAnchor
   };
   root.style.scrollBehavior="auto";
   root.style.overflowAnchor="none";
   document.body.style.overflowAnchor="none";
 }
 root.dataset.readingMode=selected;
 $("mode-bar")?.querySelectorAll("button[data-mode]").forEach(button=>{
   button.setAttribute("aria-pressed",String(button.dataset.mode===selected));
 });
 document.querySelectorAll("#toc .toc-link").forEach(link=>{
   const title=link.querySelector(".toc-label");
   if(title)title.textContent=selected==="en"?(link.dataset.en||link.dataset.zh||""):(link.dataset.zh||link.dataset.en||"");
 });
 try{localStorage.setItem(DISPLAY_KEY,selected)}catch(_){}
 function finish(){
   if(revision!==readingSwitchRevision)return;
   if(saved)restoreReadingPosition(saved);
   if(readingScrollStyles){
     root.style.scrollBehavior=readingScrollStyles.behavior;
     root.style.overflowAnchor=readingScrollStyles.rootAnchor;
     document.body.style.overflowAnchor=readingScrollStyles.bodyAnchor;
     readingScrollStyles=null;
   }
 }
 if(saved){
   // One correction before painting, two after reflow, and a delayed Safari
   // correction after toolbar focus / dynamic viewport settles.
   restoreReadingPosition(saved);
   requestAnimationFrame(()=>{
     if(revision!==readingSwitchRevision)return;
     restoreReadingPosition(saved);
     requestAnimationFrame(()=>{
       if(revision!==readingSwitchRevision)return;
       restoreReadingPosition(saved);
     });
   });
   setTimeout(finish,110);
 }else{
   finish();
 }
 if(isMapTransition&&preservePosition){
   requestAnimationFrame(()=>{
     const id=lastConceptLessonId||allLessons[0]?.id;
     const dest=selected==="map" ? (document.getElementById("concept-"+CONCEPT_BY_LESSON.get(id)?.id)||document.querySelector(".concept-map-pending")||document.querySelector(".concept-map-intro")) : $(id);
     if(dest)dest.scrollIntoView({block:"start",behavior:"instant"});
     if(id)activateSection(id);
   });
 }
}
$("mode-bar")?.addEventListener("pointerdown",event=>{
 const button=event.target.closest("button[data-mode]");
 if(button)pendingModeAnchor={
   mode:button.dataset.mode,
   anchor:captureReadingPosition(),
   time:Date.now()
 };
},{passive:true});
$("mode-bar")?.addEventListener("click",event=>{
 const button=event.target.closest("button[data-mode]");
 if(!button)return;
 const captured=pendingModeAnchor;
 pendingModeAnchor=null;
 const anchor=captured&&captured.mode===button.dataset.mode&&Date.now()-captured.time<2500
   ?captured.anchor:null;
 applyReadingMode(button.dataset.mode,true,anchor);
});

function toggleMenu(open){
 document.body.classList.toggle("toc-open",open);
 $("toc-trigger")?.setAttribute("aria-expanded",String(open));
 show("toc-backdrop",open);
 if(!open)$("toc-trigger")?.blur();
}
$("toc-trigger")?.addEventListener("click",()=>toggleMenu(!document.body.classList.contains("toc-open")));
$("toc-close")?.addEventListener("click",()=>toggleMenu(false));
$("toc-backdrop")?.addEventListener("click",()=>toggleMenu(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.body.classList.contains("toc-open")){toggleMenu(false);$("toc-trigger")?.focus()}});
window.addEventListener("resize",()=>{if(window.innerWidth>800&&document.body.classList.contains("toc-open"))toggleMenu(false)});

/* Knowledge Check UI is created after sanitization; no questions/answers live in the public repository. */
function activateQuizzes(){
 const isEnglish=()=>document.documentElement.dataset.readingMode==="en";
 document.querySelectorAll("#study-content .knowledge-check").forEach((quiz,qIndex)=>{
   if(quiz.dataset.enhanced==="true")return;
   quiz.dataset.enhanced="true";
   const multi=quiz.dataset.multiple==="true";
   const key=(quiz.dataset.correct||"").split(",").map(Number).filter(Number.isInteger).sort((a,b)=>a-b);
   const options=[...quiz.querySelectorAll(".quiz-option")];
   const controls=quiz.querySelector(".quiz-controls");
   const feedback=quiz.querySelector(".quiz-feedback");
   const solution=quiz.querySelector(".teacher-answer");
   if(!controls||!feedback||!solution||!options.length||!key.length)return;
   const inputs=[];
   options.forEach((opt,index)=>{
     const id="atpa-q"+qIndex+"-o"+index;
     const label=document.createElement("label");
     label.className="choice-row";
     const input=document.createElement("input");
     input.type=multi?"checkbox":"radio";
     input.name="atpa-quiz-"+qIndex;
     input.value=String(index+1);
     input.id=id;
     input.setAttribute("aria-label",(multi?"複選選項 ":"單選選項 ")+(index+1));
     const mark=document.createElement("span");mark.className="choice-indicator";mark.textContent=multi?"□":"○";
     const body=document.createElement("div");body.className="choice-body";
     while(opt.firstChild)body.appendChild(opt.firstChild);
     label.append(input,mark,body);opt.append(label);
     inputs.push(input);
   });
   const check=document.createElement("button");check.type="button";check.className="quiz-check";check.textContent="檢查答案／Check answers";
   const clear=document.createElement("button");clear.type="button";clear.className="quiz-reset";clear.textContent="重新作答／Reset";
   controls.append(check,clear);
   check.addEventListener("click",()=>{
     const selected=inputs.filter(i=>i.checked).map(i=>Number(i.value)).sort((a,b)=>a-b);
     if(!selected.length){
       feedback.textContent=isEnglish()?"Select at least one option.":"請先選擇至少一個選項。";
       feedback.dataset.status="hint";return;
     }
     const correct=selected.length===key.length&&selected.every((x,i)=>x===key[i]);
     feedback.textContent=correct?(isEnglish()?"Correct. The teacher's explanations are displayed below.":"答對了。下方已展開逐選項解析。"):
       (isEnglish()?"Review your selection and the teacher's explanations below.":"本次選答與教師推導答案不同，請參考下方逐選項解析。");
     feedback.dataset.status=correct?"correct":"review";
     options.forEach((opt,i)=>{
       opt.classList.toggle("answer-key",key.includes(i+1));
       opt.classList.toggle("answer-wrong",selected.includes(i+1)&&!key.includes(i+1));
     });
     solution.hidden=false;solution.open=true;
   });
   clear.addEventListener("click",()=>{
     inputs.forEach(i=>i.checked=false);
     feedback.textContent="";delete feedback.dataset.status;
     options.forEach(opt=>opt.classList.remove("answer-key","answer-wrong"));
     solution.hidden=true;solution.open=false;
   });
 });
}


/* The public renderer owns only layout logic; conceptual statements remain in
   the permission-gated Google Doc alongside the private bilingual source index. */

/* Mathematics stays in the access-controlled Drive data, and is rendered on
   the client only after OAuth. The KaTeX asset is loaded lazily and receives
   no source content over the network. */
function addConceptCopy(target,raw){
 const re=/\\\(([\s\S]*?)\\\)/g;
 let last=0,m;
 while((m=re.exec(raw))){
  if(m.index>last)target.appendChild(document.createTextNode(raw.slice(last,m.index)));
  const el=document.createElement("span");el.className="concept-math";
  el.dataset.tex=m[1];
  el.setAttribute("role","math");
  el.setAttribute("aria-label",m[1]);
  const fallback=m[1].replace(/\\mathrm\{([^{}]+)\}/g,"$1")
   .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,"($1 / $2)")
   .replace(/\\times/g," × ").replace(/\\_/g,"_");
  el.textContent=fallback;target.appendChild(el);
  last=re.lastIndex;
 }
 if(last<raw.length)target.appendChild(document.createTextNode(raw.slice(last)));
}
let mapMathLoading=false;
function renderConceptMath(){
 const items=[...document.querySelectorAll("#study-content .concept-math[data-tex]")];
 if(!items.length)return;
 const render=()=>{
  if(!window.katex)return;
  items.forEach(el=>{
   try{window.katex.render(el.dataset.tex,el,{throwOnError:false,strict:"ignore",output:"htmlAndMathml"})}
   catch(_){}
  });
 };
 if(window.katex){render();return}
 if(mapMathLoading)return;
 mapMathLoading=true;
 const link=document.createElement("link");
 link.rel="stylesheet";link.href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css";
 document.head.append(link);
 const script=document.createElement("script");
 script.src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js";
 script.async=true;
 script.onload=render;
 script.onerror=()=>{mapMathLoading=false};
 document.head.append(script);
}

function createConceptMap(map){
 const card=document.createElement("section");card.className="concept-map-card";
 card.id="concept-"+map.id;card.dataset.from=map.from;card.dataset.to=map.to;
 const head=document.createElement("header");head.className="concept-map-top";
 const range=document.createElement("span");range.className="map-range";range.textContent="§"+map.from.slice(1,2)+"."+map.from.slice(2,3)+"."+map.from.slice(3)+" – §"+map.to.slice(1,2)+"."+map.to.slice(2,3)+"."+map.to.slice(3);
 const title=document.createElement("h3");title.textContent=map.title;
 const subtitle=document.createElement("div");subtitle.className="map-subtitle";subtitle.textContent=map.subtitle||"";
 if(map.subtitle?.startsWith("【已按原書核對")){
  card.dataset.reviewed="true";
  const audit=document.createElement("span");audit.className="map-review-status";
  audit.textContent="已依原始教材重新核對";
  head.append(audit);
 }
 head.append(range,title,subtitle);card.append(head);
 const nodes=document.createElement("div");nodes.className="concept-map-nodes";
 let branch=null,branchIndex=0;
 for(const item of map.nodes){
  if(item.d===0){
   branch=document.createElement("details");branch.className="concept-map-branch";branch.open=(branchIndex++===0);
   const heading=document.createElement("summary");heading.className="concept-node concept-branch-heading";
   heading.dataset.depth="0";
   const copy=document.createElement("span");copy.className="node-copy";addConceptCopy(copy,item.t);
   heading.append(copy);branch.append(heading);nodes.append(branch);continue;
  }
  const node=document.createElement("div");node.className="concept-node";
  node.dataset.depth=String(item.d);node.dataset.arrow=item.a||"";
  const arrow=document.createElement("span");arrow.className="node-arrow";arrow.setAttribute("aria-hidden","true");arrow.textContent=item.a||"";
  const copy=document.createElement("span");copy.className="node-copy";addConceptCopy(copy,item.t);
  node.append(arrow,copy);(branch||nodes).append(node);
 }
 card.append(nodes);
 const actions=document.createElement("div");actions.className="concept-map-actions";
 const read=document.createElement("button");read.type="button";read.textContent="查看對應原文與譯文";
 read.addEventListener("click",()=>{
  const target=CONCEPT_BY_LESSON.get(lastConceptLessonId)?.id===map.id?lastConceptLessonId:map.from;
  lastConceptLessonId=target;
  applyReadingMode("stacked",false);
  history.replaceState(null,"","#"+target);
  requestAnimationFrame(()=>{ $(target)?.scrollIntoView({block:"start",behavior:"instant"});activateSection(target)});
 });
 const foot=document.createElement("small");foot.textContent="【補充】題型辨識、快速驗算及 SOP 是學習整理；非 SOA 官方標準答案";
 actions.append(read,foot);card.append(actions);
 return card;
}
function createConceptMapIntro(){
 const section=document.createElement("section");section.className="concept-map-intro";
 const h=document.createElement("h2");h.textContent="Module 2｜思考工具";
 const p=document.createElement("p");p.textContent="Module 2 全部 223 個小節已建有思考工具，共 "+CONCEPT_MAPS.length+" 張。每張預設展開核心段落；其餘段落按標題展開。";
 const audited=CONCEPT_MAPS.filter(m=>m.subtitle?.startsWith("【已按原書核對")).length;
 const progress=document.createElement("p");progress.className="concept-audit-progress";
 progress.textContent="Pass-First 新版逐章原書核對："+audited+"/"+CONCEPT_MAPS.length+" 張已完成（目前 §1.1）；尚未核對的圖保留既有稿，勿視為已驗收。";
 const note=document.createElement("p");note.className="concept-map-source-note";
 note.append(document.createTextNode("【教材】ATPA Module 2（原文件標示 2023-04-06）；【官方】"));
 const syll=document.createElement("a");syll.href="https://www.soa.org/globalassets/assets/files/edu/2022/2022-01-atpa-learning-objectives.pdf";
 syll.target="_blank";syll.rel="noopener noreferrer";syll.textContent="SOA ATPA Learning Objectives";
 note.append(syll,document.createTextNode("（目前 SOA ATPA 網站連結的版本）；【補充】本網站自行整理的題型、SOP 及驗算技巧，不視為官方出題頻率或標準答案。"));
 const legend=document.createElement("div");legend.className="concept-map-legend";
 for(const [symbol,label] of [["★","核心考點"],["？","變題與陷阱"],["→","概念分層"],["⇢","細節例題"],["⇒","條件性推論"],["↔","概念或模型比較"],["⟶","標準解題 SOP"],["✅","練習與複習行動"]]){
  const s=document.createElement("span"),b=document.createElement("b");b.textContent=symbol;s.append(b,document.createTextNode(label));legend.append(s);
 }
 const jump=document.createElement("details");jump.className="concept-map-jump-list";
 const jumpTitle=document.createElement("summary");jumpTitle.textContent="選擇概念圖（共 "+CONCEPT_MAPS.length+" 張）";
 const index=document.createElement("nav");index.className="concept-map-index";index.setAttribute("aria-label","概念圖快速跳轉");
 for(const map of CONCEPT_MAPS){
  const link=document.createElement("a");link.href="#concept-"+map.id;
  link.textContent=(map.subtitle?.startsWith("【已按原書核對")?"✓ ":"")+map.title;
  link.addEventListener("click",e=>{
   e.preventDefault();document.getElementById("concept-"+map.id)?.scrollIntoView({block:"start",behavior:"smooth"});
  });
  index.append(link);
 }
 jump.append(jumpTitle,index);
 const controls=document.createElement("div");controls.className="concept-map-bulk";
 for(const [label,open] of [["全部展開",true],["全部收合",false]]){
  const button=document.createElement("button");button.type="button";button.textContent=label;
  button.addEventListener("click",()=>document.querySelectorAll("#study-content .concept-map-branch").forEach(d=>d.open=open));
  controls.append(button);
 }
 section.append(h,p,progress,note,legend,jump,controls);return section;
}
function mountConceptMaps(lessons){
 CONCEPT_BY_LESSON.clear();
 if(!CONCEPT_MAPS.length)return;
 const article=$("study-content");
 const positions=new Map(lessons.map((s,i)=>[s.id,i]));
 let last=-1;
 for(const map of CONCEPT_MAPS){
  const start=positions.get(map.from),end=positions.get(map.to);
  if(start===undefined||end===undefined||end<start||start<=last)
   throw new Error("私人心智圖小節範圍不正確："+map.id);
  for(let i=start;i<=end;i++)CONCEPT_BY_LESSON.set(lessons[i].id,map);
  article.insertBefore(createConceptMap(map),lessons[start]);
  last=end;
 }
 article.insertBefore(createConceptMapIntro(),article.firstChild);
 renderConceptMath();
 if(last<lessons.length-1){
  const pending=document.createElement("section");pending.className="concept-map-pending";
  const next=lessons[last+1];
  const latest=lessons[last].dataset.num;
  const title=document.createElement("strong");title.textContent="§"+next.dataset.num+" 以後尚未加入思考工具";
  const explain=document.createElement("p");explain.textContent="目前已完成 §"+lessons[0].dataset.num+"–"+latest+"（共 "+CONCEPT_MAPS.length+" 張），其餘小節可先使用原有三種完整閱讀模式。";
  const btn=document.createElement("button");btn.type="button";btn.textContent="前往 §"+next.dataset.num+" 完整教材";
  btn.addEventListener("click",()=>{
    const dest=next;
    lastConceptLessonId=dest.id;applyReadingMode("stacked",false);
    history.replaceState(null,"","#"+dest.id);
    requestAnimationFrame(()=>{dest.scrollIntoView({block:"start",behavior:"instant"});activateSection(dest.id)});
  });
  pending.append(title,explain,btn);article.append(pending);
 }
}

function makeChapter(id,key){
 const chapter=CHAPTERS[key],block=document.createElement("div");
 block.id=id;block.className="chapter-heading";
 const tag=document.createElement("span");tag.className="chapter-code";tag.textContent="SECTION "+key;
 const zh=document.createElement("h2");zh.className="chapter-heading-zh";zh.textContent=chapter.zh;
 const en=document.createElement("div");en.className="chapter-heading-en";en.textContent=chapter.title;
 block.append(tag,zh,en);return block;
}
function makeNavigation(lessons){
 const toc=$("toc");toc.replaceChildren();
 const count=document.createElement("p");count.className="toc-summary";count.textContent="按原書順序 · 已完成 223 小節";toc.append(count);
 for(const [chapter,meta] of Object.entries(CHAPTERS)){
   const details=document.createElement("details");details.className="toc-group";details.open=true;
   const summary=document.createElement("summary");
   const num=document.createElement("span");num.className="group-num";num.textContent=chapter;
   const label=document.createElement("span");label.className="group-label";label.textContent=meta.zh;
   summary.append(num,label);
   const links=document.createElement("div");links.className="toc-links";
   const sectionHead=document.createElement("a");sectionHead.className="toc-chapter-link";
   sectionHead.href="#chapter"+chapter.replace(".","");
   sectionHead.textContent="↳ "+meta.zh;
   links.append(sectionHead);
   lessons.filter(s=>s.dataset.num.startsWith(chapter+".")).forEach(sec=>{
     const a=document.createElement("a");a.href="#"+sec.id;a.className="toc-link";a.dataset.id=sec.id;
     a.dataset.en=sec.querySelector("header h2")?.textContent||"";
     a.dataset.zh=sec.querySelector(".zh-heading")?.textContent||a.dataset.en;
     const n=document.createElement("span");n.className="toc-num";n.textContent=sec.dataset.num;
     const title=document.createElement("span");title.className="toc-label";title.textContent=a.dataset.zh;
     a.append(n,title);links.append(a);
   });
   details.append(summary,links);toc.append(details);
 }
 toc.addEventListener("click",e=>{
   const a=e.target.closest("a[href^='#']");
   if(!a)return;
   toggleMenu(false);
   if(a.dataset.id&&document.documentElement.dataset.readingMode==="map"){
     e.preventDefault();
     lastConceptLessonId=a.dataset.id;
     const map=CONCEPT_BY_LESSON.get(a.dataset.id);
     if(map){
       document.getElementById("concept-"+map.id)?.scrollIntoView({block:"start",behavior:"instant"});
       history.replaceState(null,"","#"+a.dataset.id);
       activateSection(a.dataset.id);
     }else{
       applyReadingMode("stacked",false);
       history.replaceState(null,"","#"+a.dataset.id);
       requestAnimationFrame(()=>{$(a.dataset.id)?.scrollIntoView({block:"start",behavior:"instant"});activateSection(a.dataset.id)});
     }
   }else if(a.dataset.id)activateSection(a.dataset.id);
 });
}
function activateSection(id){
 const section=allLessons.find(x=>x.id===id);
 if(!section)return;
 $("toc")?.querySelectorAll(".toc-link").forEach(a=>{
   const active=a.dataset.id===id;
   a.classList.toggle("active",active);
   if(active)a.setAttribute("aria-current","location");
   else a.removeAttribute("aria-current");
 });
 const current=$("current-section");
 if(current)current.textContent="§"+section.dataset.num;
 const sidebar=$("chapter-sidebar"),link=$("toc")?.querySelector('.toc-link[data-id="'+id+'"]');
 if(link&&sidebar&&window.innerWidth>800){
   const b=link.getBoundingClientRect(),p=sidebar.getBoundingClientRect();
   if(b.top<p.top+65||b.bottom>p.bottom-25)sidebar.scrollTop+=b.top-p.top-sidebar.clientHeight/2;
 }
}
function syncCurrentSection(){
 scrollScheduled=false;
 if(!loaded||document.body.classList.contains("toc-open"))return;
 if(document.documentElement.dataset.readingMode==="map"){
   let active=CONCEPT_MAPS[0];
   for(const m of CONCEPT_MAPS){
     const card=document.getElementById("concept-"+m.id);
     if(card&&card.getBoundingClientRect().top<=185)active=m;
     else break;
   }
   if(active){
     const remembered=lastConceptLessonId;
     const target=remembered&&CONCEPT_BY_LESSON.get(remembered)?.id===active.id?remembered:active.from;
     if(target!==document.querySelector("#toc .toc-link.active")?.dataset.id)activateSection(target);
   }
   return;
 }
 let target=allLessons[0];
 for(const sec of allLessons){
   if(sec.getBoundingClientRect().top<=185)target=sec;
   else break;
 }
 if(target&&target.id!==document.querySelector("#toc .toc-link.active")?.dataset.id)activateSection(target.id);
}
window.addEventListener("scroll",()=>{
 if(loaded&&!scrollScheduled){scrollScheduled=true;requestAnimationFrame(syncCurrentSection)}
},{passive:true});
function parseSource(text,index){
 const doc=new DOMParser().parseFromString(text.replace(/^\uFEFF/,""),"text/html");
 const parsed=cleanSource(doc);
 if(parsed.lessons.length!==EXPECTED_COUNTS[index]||parsed.lessons[0].id!==FIRST_IDS[index])
  throw new Error("教材 §"+SOURCES[index].label+" 的小節數量或順序不符，暫停顯示以避免漏頁。");
 for(const [id,pairs] of parsed.lessonPairs){
  sourcePairsByLesson.set(id,pairs);
  const records=GPT_READINGS[id];
  if(records&&records.length!==pairs.length)throw new Error("GPT 精讀與原始教材段落數不符："+id);
 }
 return parsed;
}
function mountAll(parsedSources){
 // Adopt the already validated nodes instead of cloning the entire chapter.
 const sections=parsedSources.flatMap(parsed=>parsed.lessons.map(section=>document.adoptNode(section)));
 for(const id of Object.keys(GPT_READINGS)){
  if(!sourcePairsByLesson.has(id))throw new Error("GPT 精讀對應小節不存在："+id);
 }
 if(sections.length!==223||new Set(sections.map(s=>s.id)).size!==223)
   throw new Error("223 個小節未完整載入，請重新整理後再試。");
 const article=$("study-content"),frag=document.createDocumentFragment();let lastChapter="";
 for(const sec of sections){
   const group=sec.dataset.num.split(".").slice(0,2).join(".");
   if(group!==lastChapter){
     frag.appendChild(makeChapter("chapter"+group.replace(".",""),group));
     lastChapter=group;
   }
   frag.appendChild(sec);
 }
 article.replaceChildren(frag);
 mountConceptMaps(sections);
 allLessons=[...article.querySelectorAll("section.lesson")];
 prepareBilingualLabels();
 makeNavigation(allLessons);
 show("gate",false);show("reader-wrap",true);
 loaded=true;
 
 applyReadingMode(preferredReadingMode(),false);
 activateQuizzes();
 // Old bookmarked ?part= links remain valid. A hash always wins.
 const legacyPart=params.get("part");
 const targetId=location.hash?decodeURIComponent(location.hash.slice(1)):(FIRST_IDS[Number(legacyPart)-1]||"s111");
 if(targetId&&document.getElementById(targetId))
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
     if(document.documentElement.dataset.readingMode==="map"){
       lastConceptLessonId=targetId;
       const map=CONCEPT_BY_LESSON.get(targetId);
       (map?document.getElementById("concept-"+map.id):document.querySelector(".concept-map-pending")||document.querySelector(".concept-map-intro"))?.scrollIntoView({block:"start",behavior:"instant"});
     }else document.getElementById(targetId)?.scrollIntoView({block:"start",behavior:"instant"});
     activateSection(targetId);
   }));
 else activateSection(allLessons[0].id);
}
async function fetchOneSource(source,token){
 const endpoint="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(source.fileId)+
   (source.kind==="raw"?"?alt=media":"/export?mimeType="+encodeURIComponent("text/plain"));
 let res;
 try{res=await fetch(endpoint,{headers:{"Authorization":"Bearer "+token},cache:"no-store"})}
 catch(e){throw new Error("下載 §"+source.label+" 時網路連線失敗。")}
 if(res.status===401){clearToken();throw new Error("Google 授權已過期，請重新登入。")}
 if(res.status===403)throw new Error("目前帳號無法讀取 §"+source.label+"，請切換 Google 帳號。");
 if(!res.ok)throw new Error("讀取 §"+source.label+" 時 Google Drive 回應 HTTP "+res.status);
 return res.text();
}
async function fetchPrivateIndex(token){
 const url="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(PRIVATE_INDEX_FILE_ID)+
   "/export?mimeType="+encodeURIComponent("text/plain");
 let result;
 try{result=await fetch(url,{headers:{Authorization:"Bearer "+token},cache:"no-store"})}
 catch(_){throw new Error("無法連線私人教材索引，請檢查網路後重試。")}
 if(result.status===401){clearToken();throw new Error("Google 授權已過期，請重新登入。")}
 if(result.status===403)throw new Error("目前帳號沒有私人教材索引的讀取權限，請聯絡教材擁有者授權。");
 if(!result.ok)throw new Error("無法載入私人教材索引：HTTP "+result.status);
 let payload;
 try{payload=JSON.parse((await result.text()).replace(/^\uFEFF/,"").trim())}
 catch(_){throw new Error("私人教材索引格式錯誤，已停止載入以保護教材完整性。")}
 if(payload?.schema!=="atpa.private-index.v1"||payload.module!==2||
    !Array.isArray(payload.sources)||payload.sources.length!==13||
    new Set(payload.sources.map(s=>s.fileId)).size!==13)
   throw new Error("私人教材索引缺少 13 份來源，已停止載入。");
 SOURCES=payload.sources.slice().sort((a,b)=>Number(a.part)-Number(b.part));
 if(!SOURCES.every((s,i)=>String(s.part)===String(i+1)&&s.kind==="raw"&&
     typeof s.fileId==="string"&&/^[A-Za-z0-9_-]{20,}$/.test(s.fileId)))
   throw new Error("私人教材索引順序或來源類型不正確。");
 GPT_READINGS=payload.gpt||Object.create(null);
 CONCEPT_MAPS=Array.isArray(payload.maps)?payload.maps:[];
 const ids=new Set();
 for(const m of CONCEPT_MAPS){
  if(!m||typeof m.id!=="string"||!/^[a-z0-9-]+$/.test(m.id)||ids.has(m.id)||
     !/^s\d+$/.test(m.from)||!/^s\d+$/.test(m.to)||
     typeof m.title!=="string"||!Array.isArray(m.nodes)||!m.nodes.length||
     !m.nodes.every(n=>Number.isInteger(n.d)&&n.d>=0&&n.d<=3&&typeof n.t==="string"&&
       n.t.length>0&&(!n.a||["→","⇢","⇒","↔","⟶","？","✅"].includes(n.a))))
   throw new Error("私人概念圖資料格式不符，請檢查："+(m?.id||"未知"));
  ids.add(m.id);
 }
 for(const [key,records] of Object.entries(GPT_READINGS)){
   if(!/^s\d+$/.test(key)||!Array.isArray(records)||!records.length||
      !records.every(r=>Array.isArray(r)&&r.length===3&&typeof r[0]==="string"&&
      typeof r[1]==="string"&&Array.isArray(r[2])))
      throw new Error("GPT 私人精讀資料不符合驗收格式："+key);
 }
}
async function fetchPrivate(token){
 if(loaded||!selected)return;
 status("正在驗證私人索引及載入 Module 2 全部 223 個小節…");
 await Promise.all([fetchPrivateIndex(token),window.ATPAReadingTerms.load(token)]);
 let complete=0;
 const parsedSources=await Promise.all(SOURCES.map(async(source,index)=>{
  const parsed=parseSource(await fetchOneSource(source,token),index);
  status("已讀取私人教材 "+(++complete)+"／"+SOURCES.length+" 份…");
  return parsed;
 }));
 mountAll(parsedSources);
}

function initClient(){
 if(tokenClient||!window.google?.accounts?.oauth2)return !!tokenClient;
 tokenClient=google.accounts.oauth2.initTokenClient({
   client_id:CLIENT_ID,scope:SCOPE,
   callback:async response=>{
     if(response?.error){status("Google 授權未完成："+response.error);return}
     try{
       const t=remember(response);
       try{Promise.resolve(window.HanamiAuth?.remember?.(t)).catch(()=>{})}catch(_){}
       await fetchPrivate(t)
     }catch(e){status(e?.message||"教材載入失敗，請再試一次。")}
   }
 });
 return true;
}
function requestLogin(switchAccount=false){
 if(!initClient()){status("Google 登入元件尚未就緒，請稍候重試。");return}
 status("正在等待 Google 帳號授權…");
 try{
  if(window.HanamiAuth?.request){window.HanamiAuth.request(tokenClient,switchAccount)}
  else tokenClient.requestAccessToken({prompt:switchAccount?"select_account":"consent"});
 }catch(e){status("無法開啟 Google 授權視窗，請重新整理網頁。")}
}
$("sign-in")?.addEventListener("click",()=>requestLogin(false));
$("switch-account")?.addEventListener("click",()=>{clearToken();requestLogin(true)});
async function main(){
 show("reader-wrap",false);show("gate",true);
 if(!selected){status("請由 Module 2 的閱讀入口開啟本章。");return}
 const saved=loadSaved();
 if(saved){
  try{await fetchPrivate(saved);return}
  catch(e){status(e?.message||"已有 Google 授權，但教材無法載入；請重新登入。");return}
 }
 status("請使用擁有私人教材存取權的 Google 帳號登入。");
}

main();
})();
