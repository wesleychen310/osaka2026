"use strict";
(() => {
 const LANG_KEY="actex-pa-smart-lang-v1", POSITION_KEY="actex-pa-smart-position-v1";
 let language=localStorage.getItem(LANG_KEY)==="zh"?"zh":"en";
 const content=document.getElementById("content"), reader=document.getElementById("reader");
 const offset=()=>(document.querySelector(".toolbar")?.getBoundingClientRect().height||0)+12;
 function anchor(){
  const rows=Array.from(content.querySelectorAll(".pair:not(.filtered)"));
  let row=rows.find(p=>p.getBoundingClientRect().bottom>offset())||rows[rows.length-1];
  if(row){const b=row.getBoundingClientRect(),next=row.nextElementSibling;
   if(b.bottom<offset()+90&&next?.classList.contains("pair")&&next.getBoundingClientRect().top<window.innerHeight)row=next;
  }
  return row?.id?{id:row.id,top:row.getBoundingClientRect().top}:null;
 }
 function restore(a){
  if(!a?.id)return;const item=document.getElementById(a.id);if(!item)return;
  const dy=item.getBoundingClientRect().top-a.top;
  if(Math.abs(dy)>1)window.scrollBy({top:dy,behavior:"instant"});
 }
 function remember(){
  if(reader.hidden)return;const a=anchor();
  if(a)try{localStorage.setItem(POSITION_KEY,JSON.stringify(a))}catch{}
 }
 function updateButtons(){
  content.querySelectorAll(".peek-btn").forEach(b=>{
   const open=b.closest(".pair")?.dataset.peek==="true",other=language==="en"?"中文":"英文";
   b.textContent=open?"收起"+other:"看"+other;
   b.setAttribute("aria-expanded",String(open));
   b.setAttribute("aria-label",(open?"收起":"查看")+"這段的"+other);
  });
 }
 function setLanguage(lang,preserve=true){
  if(lang!=="en"&&lang!=="zh")lang="en";
  const a=preserve?anchor():null;
  language=lang;document.documentElement.dataset.readingLang=lang;
  document.documentElement.lang=lang==="zh"?"zh-Hant-TW":"en";
  localStorage.setItem(LANG_KEY,lang);
  document.querySelectorAll(".lang-btn").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));
  content.querySelectorAll(".pair[data-peek]").forEach(p=>delete p.dataset.peek);
  updateButtons();if(a){restore(a);requestAnimationFrame(()=>restore(a))}remember();
 }
 function addButtons(){
  content.querySelectorAll(".pair").forEach((p,i)=>{
   if(p.querySelector(":scope > .pair-actions"))return;
   if(!p.id)p.id="pa-smart-unit-"+i;
   if(!p.querySelector(":scope > .en")||!p.querySelector(":scope > .zh"))return;
   if(["h1","h2","h3","h4"].some(k=>p.classList.contains("kind-"+k)))return;
   const wrap=document.createElement("div");wrap.className="pair-actions";
   const b=document.createElement("button");b.type="button";b.className="peek-btn";b.setAttribute("aria-controls",p.id);
   b.addEventListener("click",()=>{
    const a=anchor();if(p.dataset.peek==="true")delete p.dataset.peek;else p.dataset.peek="true";
    updateButtons();if(a){restore(a);requestAnimationFrame(()=>restore(a))}remember();
   });
   wrap.append(b);p.append(wrap);
  });updateButtons();
 }
 let restored=false;
 function loaded(){
  if(!content.querySelector(".pair"))return;
  addButtons();setLanguage(language,false);
  if(!restored){
   restored=true;
   if(!location.hash){
    let last=null;try{last=JSON.parse(localStorage.getItem(POSITION_KEY)||"null")}catch{}
    if(last?.id&&document.getElementById(last.id))requestAnimationFrame(()=>requestAnimationFrame(()=>restore(last)));
   }
  }
 }
 document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
 new MutationObserver(loaded).observe(content,{childList:true});
 if(content.querySelector(".pair"))loaded();
 document.documentElement.dataset.readingLang=language;
 document.querySelectorAll(".lang-btn").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===language)));
 let pending=false;
 window.addEventListener("scroll",()=>{
  if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;remember()});
 },{passive:true});
 window.addEventListener("pagehide",remember);
})();