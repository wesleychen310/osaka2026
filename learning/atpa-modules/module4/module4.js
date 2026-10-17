/* SOA ATPA private bilingual reader. Public UI only; all source text remains in restricted Google Drive. */
(()=>{"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const SESSION_KEY="hanami-kyoto-google-token-v3";
const SOURCE={
 "4:1": {
  "part": "1",
  "label": "1.1.1–1.1.15",
  "sourcePages": "5–21",
  "fileId": "1BW2LhgPsVTYqtSJIAaOzfaYXzwQU3mj8",
  "module": "4",
  "kind": "raw"
 },
 "4:2": {
  "part": "2",
  "label": "1.2.1–1.2.5",
  "sourcePages": "22–27",
  "fileId": "1jlYcwhvTfTAqqLIzcXQNp0xDVU9HEaeu",
  "module": "4",
  "kind": "raw"
 },
 "4:3": {
  "part": "3",
  "label": "1.3.1–1.3.29",
  "sourcePages": "28–58",
  "fileId": "1q1QWg9EfQJS3R5qDVys_J6QbOHtTQHPL",
  "module": "4",
  "kind": "raw"
 },
 "4:4": {
  "part": "4",
  "label": "1.4.1–1.4.25",
  "sourcePages": "59–85",
  "fileId": "1RZd9x-zTHR5fFofWW9LNK6vSjka9R9tu",
  "module": "4",
  "kind": "raw"
 },
 "4:5": {
  "part": "5",
  "label": "1.5.1–1.5.21",
  "sourcePages": "86–107",
  "fileId": "1-6Avxq7gwDsCSJI_5zaBZnOFdy4zryBS",
  "module": "4",
  "kind": "raw"
 }
};
const $=id=>document.getElementById(id);
document.body.dataset.atpaModule="4";
const params=new URLSearchParams(location.search);
const requestedModule=params.get("module");
const selected=!requestedModule||requestedModule==="4";
const SOURCES=Object.values(SOURCE).sort((a,b)=>Number(a.part)-Number(b.part));
const CHAPTERS={"1.1": {"title": "Explainability – Definitions and Communication", "zh": "可解釋性：定義與溝通", "total": 15}, "1.2": {"title": "Explainability and Ethics", "zh": "可解釋性與倫理", "total": 5}, "1.3": {"title": "Techniques for Opaque Models", "zh": "不透明模型的解釋技術", "total": 29}, "1.4": {"title": "Reports", "zh": "報告撰寫", "total": 25}, "1.5": {"title": "Model Selection Case Study", "zh": "模型選擇案例", "total": 21}};
const EXPECTED_COUNTS=[15,5,29,25,21];
const FIRST_IDS=["s111","s121","s131","s141","s151"];
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
 if(!lessons.length)throw new Error("來源沒有可閱讀的小節。");
 for(const sec of lessons){
   if(!sec.dataset.num||!sec.id)throw new Error("來源缺少原書編號或小節識別碼。");
   const pairs=sec.querySelectorAll(".pair");
   if(!pairs.length)throw new Error("§"+sec.dataset.num+" 缺少雙語配對。");
   pairs.forEach(p=>{
     if(!p.querySelector(":scope>.original")||!p.querySelector(":scope>.translation"))
       throw new Error("§"+sec.dataset.num+" 有未配對的英文或中文段落。");
     // Authored English annotations already exist in the private source.
     // Expose them before deferred summaries or viewport observers run.
     const annotated=p.querySelector(":scope>.gpt-annotated");
     if(annotated){
       annotated.classList.add("reading-annotated","reading-view");
       annotated.removeAttribute("hidden");
     }
   });
 }
 return{main,lessons};
}
/* Tap-to-translate: English by default; touching one paragraph swaps only that paragraph. */
/* One-time private-source enhancement: bilingual source labels remain intact in all views. */
/* Derive display layers only from authenticated source nodes. */
function createViewEnhancer(){
 const article=$("study-content"),glossary=new Map();
 const add=(en,zh)=>{
  en=en.trim().replace(/[.!?]+$/,"");zh=zh.trim().replace(/^[（(—\s]+|[）)\s]+$/g,"");
  if(en.length>=8&&en.length<=110&&/[A-Za-z]/.test(en)&&/[\u3400-\u9fff]/.test(zh)&&!glossary.has(en.toLowerCase()))glossary.set(en.toLowerCase(),{en,zh});
 };
 let matcher=null,glossaryReady=false,glossaryQueued=false;
 const pendingAnnotations=[];
 const segmenters={};
 function ensureGlossary(){
  if(glossaryReady)return;
  glossaryReady=true;
 article.querySelectorAll(".gpt-phrase").forEach(term=>{
  const gloss=term.nextElementSibling;
  if(gloss?.classList.contains("gpt-gloss"))add(term.textContent,gloss.textContent);
 });
 article.querySelectorAll(".phrases li,.phrases p").forEach(node=>{
  const en=node.querySelector('[lang="en"]'),zh=node.querySelector('[lang^="zh"]');
  if(en)add(en.textContent,zh?.textContent||node.textContent.slice(en.textContent.length));
 });
 const terms=[...glossary.values()].sort((a,b)=>b.en.length-a.en.length);
 const escaped=terms.map(t=>t.en.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
 matcher=escaped.length?new RegExp("\\b(?:"+escaped.join("|")+")\\b","gi"):null;
 }
 function applyAnnotations(clone,original){
  if(clone.querySelector(".learning-mark,.gpt-phrase"))return clone;
  if(!matcher)return clone;
  const walker=document.createTreeWalker(clone,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode())if(!walker.currentNode.parentElement.closest("table,pre,code,math"))nodes.push(walker.currentNode);
  const used=new Set();let count=0;
  const max=Math.max(3,Math.min(12,Math.ceil(original.textContent.split(/\s+/).length/70)));
  for(const node of nodes){
   if(count>=max)break;
   matcher.lastIndex=0;const text=node.textContent,fragment=document.createDocumentFragment();let end=0,match;
   while((match=matcher.exec(text))){
    const key=match[0].toLowerCase();if(used.has(key)||count>=max)continue;
    fragment.append(document.createTextNode(text.slice(end,match.index)));
    const strong=document.createElement("strong");strong.className="learning-mark";strong.textContent=match[0];
    const gloss=document.createElement("span");gloss.className="learning-gloss";gloss.lang="zh-Hant";gloss.textContent="（"+glossary.get(key).zh+"）";
    fragment.append(strong,gloss);end=match.index+match[0].length;used.add(key);count++;
   }
   if(end){fragment.append(document.createTextNode(text.slice(end)));node.replaceWith(fragment)}
  }
  return clone;
 }
 function annotate(original){
  const clone=original.cloneNode(true);clone.className="reading-annotated reading-view";
  clone.removeAttribute("id");
  if(glossaryReady)return applyAnnotations(clone,original);
  pendingAnnotations.push({clone,original});
  if(!glossaryQueued){
   glossaryQueued=true;
   const work=()=>{
    ensureGlossary();
    const next=()=>{
     const batch=pendingAnnotations.splice(0,4);
     batch.forEach(({clone,original})=>applyAnnotations(clone,original));
     if(pendingAnnotations.length)setTimeout(next,0);
    };
    next();
   };
   // Let the first visible text paint before building optional vocabulary indexes.
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
    if(typeof requestIdleCallback==="function")requestIdleCallback(work,{timeout:1500});
    else setTimeout(work,0);
   }));
  }
  return clone;
 }
 function excerpt(text,lang){
  const cleaned=text.split(/\n+/).map(s=>s.trim()).filter(s=>s&&!/^(?:ATPA Module|Created:|Component Table\d*|Type|Panel|Title|Header|Footer|Panel Footer|Content|\d+ of \d+)$/i.test(s)).join(" ");
  if(!cleaned)return text.trim();
  if(typeof Intl.Segmenter==="function"){
   const segmenter=segmenters[lang]||(segmenters[lang]=new Intl.Segmenter(lang,{granularity:"sentence"}));
   const parts=[];
   for(const item of segmenter.segment(cleaned)){parts.push(item.segment);if(parts.length===2)break}
   return parts.join("").trim();
  }
  return cleaned;
 }
 return function enhanceLesson(lesson){
  if(lesson.dataset.viewsReady==="true")return;
  const pairs=[...lesson.querySelectorAll(".pair")];
  const actualSummary=lesson.querySelector(":scope>.gpt-summary");
  pairs.forEach((pair,index)=>{
   const original=pair.querySelector(":scope>.original"),translation=pair.querySelector(":scope>.translation");
   if(!original||!translation)return;
   let annotated=pair.querySelector(":scope>.gpt-annotated");
   if(annotated)annotated.classList.add("reading-annotated","reading-view");
   else{annotated=annotate(original);pair.append(annotated)}
   const summary=document.createElement("aside");summary.className="reading-summary reading-view";
   const en=document.createElement("p"),zh=document.createElement("p");
   en.className="summary-en";en.lang="en";zh.className="summary-zh";zh.lang="zh-Hant";
   if(actualSummary&&index===0){
    en.textContent=actualSummary.querySelector(".gpt-summary-en")?.textContent||"";
    zh.textContent=actualSummary.querySelector(".gpt-summary-zh")?.textContent||"";
    summary.dataset.kind="authored";
   }else{
    // Earlier bilingual sources have no authored summaries. Keep their provenance explicit.
    en.textContent=excerpt(original.textContent,"en");zh.textContent=excerpt(translation.textContent,"zh-Hant");
    summary.dataset.kind="excerpt";
   }
   summary.append(en,zh);pair.append(summary);
  });
  lesson.dataset.viewsReady="true";
 };
}
let enhanceLesson=null,viewObserver=null,viewPreparationStarted=false,resumeViewPreparation=null;
function prepareEnhancedViews(){
 if(!enhanceLesson)enhanceLesson=createViewEnhancer();
 // Prepare the opening and bookmarked lessons before the next paint.
 let target=null;
 target=document.getElementById($("toc")?.querySelector(".toc-link.active")?.dataset.id||"");
 if(!target)try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch(_){}
 if(!target&&params.get("part"))target=document.getElementById(FIRST_IDS[Number(params.get("part"))-1]);
 allLessons.slice(0,2).forEach(enhanceLesson);
 if(target?.classList.contains("lesson"))enhanceLesson(target);
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
    if(entry.isIntersecting){enhanceLesson(entry.target);viewObserver.unobserve(entry.target)}
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
    enhanceLesson(allLessons[index++]);
    resumeViewPreparation();
   },16);
  };
  resumeViewPreparation();
 }
}

const DISPLAY_MODES=["en","stacked","compare"];
const DISPLAY_KEY="atpa-module4-reading-mode-v4";
const LEGACY_DISPLAY_KEY="atpa-modules-reading-mode-v3";
function prepareBilingualLabels(){
 document.querySelectorAll("#study-content .source-tabs summary,#study-content .lesson h3").forEach(node=>{
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
  const migrated={en:"en",zh:"stacked",vertical:"stacked",parallel:"stacked",annotated:"stacked",tap:"stacked"}[saved]||saved;
  return DISPLAY_MODES.includes(migrated)?migrated:"stacked";
 }catch(_){return "stacked"}
}
/* Adaptive iPhone comparison: a full-width English or Chinese page,
   with one native-style segment and a stable same-paragraph anchor. */
const COMPARE_LANGUAGE_KEY="atpa-module4-compare-language-v1";
function preferredCompareLanguage(){
 try{return localStorage.getItem(COMPARE_LANGUAGE_KEY)==="zh"?"zh":"en"}
 catch(_){return "en"}
}
function setCompareLanguage(language,preservePosition=true){
 const selected=language==="zh"?"zh":"en";
 const root=document.documentElement;
 if(root.dataset.compareLang===selected)return;
 const saved=preservePosition&&loaded&&root.dataset.readingMode==="compare"
  ?captureReadingPosition():null;
 const oldBehavior=root.style.scrollBehavior;
 if(saved)root.style.scrollBehavior="auto";
 root.dataset.compareLang=selected;
 document.querySelectorAll(".compare-mobile-switch [data-compare-lang]").forEach(button=>{
  button.setAttribute("aria-pressed",String(button.dataset.compareLang===selected));
 });
 try{localStorage.setItem(COMPARE_LANGUAGE_KEY,selected)}catch(_){}
 if(saved){
  restoreReadingPosition(saved);
  requestAnimationFrame(()=>{
   restoreReadingPosition(saved);
   requestAnimationFrame(()=>{
    restoreReadingPosition(saved);
    root.style.scrollBehavior=oldBehavior;
   });
  });
 }
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
 // The same .pair exists in all four modes, even if either language is hidden.
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
 const saved=preservePosition?(anchorOverride||captureReadingPosition()):null;
 const root=document.documentElement;
 if(selected!=="en")prepareEnhancedViews();
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
 if(selected==="compare"&&!root.dataset.compareLang)setCompareLanguage(preferredCompareLanguage(),false);
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

/* The segmented control stays within the sticky reading toolbar.
   Horizontal swipes inside normal prose also change the comparison language;
   native table, code and image gestures remain untouched. */
document.querySelector(".compare-mobile-switch")?.addEventListener("click",event=>{
 const button=event.target.closest("button[data-compare-lang]");
 if(button)setCompareLanguage(button.dataset.compareLang);
});
let compareTouchStart=null;
$("study-content")?.addEventListener("touchstart",event=>{
 compareTouchStart=null;
 if(event.touches.length!==1||document.documentElement.dataset.readingMode!=="compare"
    ||!window.matchMedia("(max-width:800px)").matches)return;
 if(event.target.closest("a,button,input,textarea,select,summary,pre,code,table,.table-wrap,.source-table-wrap,.source-figure,.source-page-figure,.quiz-controls"))return;
 const touch=event.touches[0];
 if(touch.clientX<26||touch.clientX>window.innerWidth-26)return;
 compareTouchStart={x:touch.clientX,y:touch.clientY};
},{passive:true});
$("study-content")?.addEventListener("touchend",event=>{
 if(!compareTouchStart||event.changedTouches.length!==1)return;
 const dx=event.changedTouches[0].clientX-compareTouchStart.x;
 const dy=event.changedTouches[0].clientY-compareTouchStart.y;
 compareTouchStart=null;
 if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.7)
  setCompareLanguage(dx<0?"zh":"en");
},{passive:true});
$("study-content")?.addEventListener("touchcancel",()=>{compareTouchStart=null},{passive:true});

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
 const count=document.createElement("p");count.className="toc-summary";count.textContent="原文 95／95 節 · 完整雙語 95／95 節";toc.append(count);
 for(const [chapter,meta] of Object.entries(CHAPTERS)){
   const chapterLessons=lessons.filter(sec=>sec.dataset.num.startsWith(chapter+"."));
   const details=document.createElement("details");details.className="toc-group";
   details.open=chapterLessons.length>0;
   if(!chapterLessons.length)details.classList.add("toc-pending");
   const summary=document.createElement("summary");
   const num=document.createElement("span");num.className="group-num";num.textContent=chapter;
   const label=document.createElement("span");label.className="group-label";
   label.textContent=meta.zh;
   summary.append(num,label);
   if(!chapterLessons.length){
     const status=document.createElement("span");status.className="pending-label";
     status.textContent="待製作 · "+meta.total+" 小節";
     summary.append(status);
     const note=document.createElement("p");note.className="pending-detail";
     note.textContent="原書 "+meta.title+"（"+meta.total+" 個編號小節）將依章節順序補進同一頁面。";
     details.append(summary,note);
     toc.append(details);
     continue;
   }
   const links=document.createElement("div");links.className="toc-links";
   const sectionHead=document.createElement("a");sectionHead.className="toc-chapter-link";
   sectionHead.href="#chapter"+chapter.replace(".","");
   sectionHead.textContent="↳ "+meta.zh;
   links.append(sectionHead);
   chapterLessons.forEach(sec=>{
     const a=document.createElement("a");a.href="#"+sec.id;a.className="toc-link";a.dataset.id=sec.id;
     a.dataset.en=sec.querySelector("header h2")?.textContent||"";
     a.dataset.zh=sec.dataset.stage==="english-only"?a.dataset.en:(sec.querySelector(".zh-heading")?.textContent||a.dataset.en);
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
   if(a.dataset.id)activateSection(a.dataset.id);
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
function parseSourceLessons(text,index){
 const doc=new DOMParser().parseFromString(text.replace(/^\uFEFF/,""),"text/html");
 const parsed=cleanSource(doc);
 if(parsed.lessons.length!==EXPECTED_COUNTS[index]||parsed.lessons[0].id!==FIRST_IDS[index])
  throw new Error("教材 §"+SOURCES[index].label+" 的小節數量或順序不符，暫停顯示以避免漏頁。");
 return parsed.lessons;
}
function mountAll(parsedSources){
 const sections=parsedSources.flatMap(lessons=>lessons.map(s=>document.adoptNode(s)));
 if(sections.length!==95||new Set(sections.map(s=>s.id)).size!==95)
   throw new Error("95 個編號小節未完整載入，請重新整理後再試。");
 // All private lessons must be present before the reader is displayed.
 const englishOnly=sections.filter(s=>s.dataset.stage==="english-only");
 if(englishOnly.length!==0||englishOnly.some(s=>!s.querySelector(".original")||!s.querySelector(".source-page-figure img")))
   throw new Error("英文先行教材不完整（0 節／PDF 原頁影像），停止顯示。");
 const reviewed=sections.filter(s=>s.dataset.stage==="gpt-bilingual");
 if(reviewed.length!==95||reviewed.some(s=>!s.querySelector(".translation")||!s.querySelector(".gpt-summary-en")||!s.querySelector(".gpt-summary-zh")||!s.querySelector(".gpt-annotated")))
   throw new Error("95 個小節的雙語精讀組件未完整載入，請重新整理後再試。");
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
 allLessons=[...article.querySelectorAll("section.lesson")];
 makeNavigation(allLessons);
 show("gate",false);show("reader-wrap",true);
 loaded=true;
 prepareBilingualLabels();
 applyReadingMode(preferredReadingMode(),false);
 activateQuizzes();
 // Old bookmarked ?part= links remain valid. A hash always wins.
 const legacyPart=params.get("part");
 const targetId=location.hash?decodeURIComponent(location.hash.slice(1)):(FIRST_IDS[Number(legacyPart)-1]||"s111");
 if(targetId&&document.getElementById(targetId))
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
     document.getElementById(targetId)?.scrollIntoView({block:"start",behavior:"instant"});
     activateSection(targetId);
   }));
 else activateSection(allLessons[0].id);
}
async function fetchOneSource(source,token){
 const endpoint="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(source.fileId)+
   (source.kind==="raw"?"?alt=media":"/export?mimeType="+encodeURIComponent("text/plain"));
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),30000);
 try{
  const res=await fetch(endpoint,{headers:{"Authorization":"Bearer "+token},cache:"no-store",signal:controller.signal});
  if(res.status===401){clearToken();throw new Error("Google 授權已過期，請按「Google 登入」重新授權。")}
  if(res.status===403)throw new Error("目前帳號無法讀取 §"+source.label+"，請按「切換帳號」使用有教材權限的帳號。");
  if(!res.ok)throw new Error("讀取 §"+source.label+" 時 Google Drive 回應 HTTP "+res.status+"，請按「Google 登入」重試。");
  return await res.text();
 }catch(e){
  if(e?.name==="AbortError")throw new Error("下載 §"+source.label+" 超過 30 秒，請確認網路後按「Google 登入」重試。");
  if(e instanceof TypeError)throw new Error("下載 §"+source.label+" 時網路連線失敗，請確認網路後按「Google 登入」重試。");
  throw e;
 }finally{clearTimeout(timer)}
}
async function fetchPrivate(token){
 if(loaded||!selected)return;
 status("正在載入 Module 4：原文 95／95 節，已完成雙語 95／95 節…");
 const parsedSources=new Array(SOURCES.length);
 let nextIndex=0,complete=0,failed=false;
 async function worker(){
  while(!failed&&nextIndex<SOURCES.length){
   const index=nextIndex++;
   try{
    const text=await fetchOneSource(SOURCES[index],token);
    if(failed)return;
    parsedSources[index]=parseSourceLessons(text,index);
    status("已讀取私人教材 "+(++complete)+"／"+SOURCES.length+" 份…");
   }catch(e){failed=true;throw e}
  }
 }
 await Promise.all([window.ATPAReadingTerms.load(token),...Array.from({length:Math.min(4,SOURCES.length)},worker)]);
 mountAll(parsedSources);
}

function initClient(){
 if(tokenClient||!window.google?.accounts?.oauth2)return !!tokenClient;
 tokenClient=google.accounts.oauth2.initTokenClient({
   client_id:CLIENT_ID,scope:SCOPE,
   error_callback:error=>{
     status(error?.type==="popup_closed"?"Google 登入視窗已關閉，請按「Google 登入」重試。":
       "無法開啟 Google 登入視窗，請允許此網站開啟彈出式視窗後重試。");
   },
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
 if(!selected){status("請由 Module 4 的閱讀入口開啟本章。");return}
 const saved=loadSaved();
 if(saved){
  try{await fetchPrivate(saved);return}
  catch(e){status(e?.message||"已有 Google 授權，但教材無法載入；請重新登入。");return}
 }
 status("請使用擁有私人教材存取權的 Google 帳號登入。");
}

main();
})();


