/* SOA ATPA private bilingual reader. Public UI only; all source text remains in restricted Google Drive. */
(()=>{"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const SESSION_KEY="hanami-kyoto-google-token-v3";
const SOURCE={
 "3:1":{fileId:"1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb",module:"3",part:"1",label:"1.1.1–1.1.10",sourcePages:"7–18",kind:"raw"},
 "3:2":{fileId:"1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP",module:"3",part:"2",label:"1.2.1–1.2.21",sourcePages:"19–40",kind:"raw"},
 "3:3":{fileId:"1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO",module:"3",part:"3",label:"1.3.1–1.3.10",sourcePages:"41–52",kind:"raw"},
 "3:4":{fileId:"13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC",module:"3",part:"4",label:"1.3.11–1.3.29",sourcePages:"53–71",kind:"raw"},
 "3:5":{fileId:"1ivOBsbEcwDaWBeUZsQGJ8Pl0UYx-4nI5",module:"3",part:"5",label:"1.4.1–1.4.12",sourcePages:"72–83",kind:"raw"},
 "3:6":{fileId:"1D11HFGZIPxHuSAq2qTgGEjiRwfC_1qIe",module:"3",part:"6",label:"1.4.13–1.4.24",sourcePages:"84–96",kind:"raw"},
 "3:7":{fileId:"1dzG8Ndybq0JKzsAVMA3GOJH2Nd2U0nRa",module:"3",part:"7",label:"1.4.25–1.4.36",sourcePages:"97–110",kind:"raw"},
 "3:8":{fileId:"1-XQSQF-XLMr0sR3Cmi3mg4-FW8yhSspq",module:"3",part:"8",label:"1.4.37–1.4.48",sourcePages:"111–126",kind:"raw"},
 "3:9":{fileId:"1RNzmcl2YMUCu7JaAgeTNHMpTB3ACtzyU",module:"3",part:"9",label:"1.5.1–1.5.11",sourcePages:"127–142",kind:"raw"},
 "3:10":{fileId:"104Eb1-JQIxGecEODTPMd9yhDjuZb1bun",module:"3",part:"10",label:"1.5.12–1.5.22",sourcePages:"143–153",kind:"raw"},
 "3:11":{fileId:"14FAhZ6zmZd4CcE9ucGxJFVLH5-zB-8YB",module:"3",part:"11",label:"1.5.23–1.5.33",sourcePages:"154–165",kind:"raw"},
 "3:12":{fileId:"11OF4uSZZgeEfY7t6zDVjztwxTI3bdvMb",module:"3",part:"12",label:"1.5.34–1.5.44",sourcePages:"166–176",kind:"raw"},
 "3:13":{fileId:"1HzJRMndryyd4JH2yszUiTGXnZTXVOTSC",module:"3",part:"13",label:"1.6.1–1.6.9",sourcePages:"177–185",kind:"raw"},
 "3:14":{fileId:"1A-hUmD0DgUfxxr4NMd-qnqIjMmjzO8MA",module:"3",part:"14",label:"1.7.1–1.7.13",sourcePages:"186–200",kind:"raw"},
 "3:15":{fileId:"19tp5PaNi4YUwpI2fUmYmsD7mcTHxBGod",module:"3",part:"15",label:"1.7.14–1.7.25",sourcePages:"201–212",kind:"raw"},
 "3:16":{fileId:"1MbOWCP5qCfZOxZQ6W0LoRvescQT0shXa",module:"3",part:"16",label:"1.7.26–1.7.37",sourcePages:"213–224",kind:"raw"},
 "3:17":{fileId:"1rn886abWZqdYJxk4QIMGklFVK57DcAwV",module:"3",part:"17",label:"1.7.38–1.7.50",sourcePages:"225–242",kind:"raw"}
};
const $=id=>document.getElementById(id);
const params=new URLSearchParams(location.search);
const requestedModule=params.get("module");
const selected=!requestedModule||requestedModule==="3";
const SOURCES=Object.values(SOURCE).sort((a,b)=>Number(a.part)-Number(b.part));
const CHAPTERS={"1.1":{title:"Model Accuracy",zh:"模型準確性",total:10},"1.2":{title:"Additive Models",zh:"加法模型",total:21},"1.3":{title:"Linear Mixed Models",zh:"線性混合模型",total:29},"1.4":{title:"Neural Networks",zh:"神經網路",total:48},"1.5":{title:"Bayesian Models and Analysis",zh:"貝氏模型與分析",total:44},"1.6":{title:"Stacking",zh:"模型堆疊",total:9},"1.7":{title:"Further Modeling Topics",zh:"其他進階建模主題",total:50}};
const EXPECTED_COUNTS=[10,21,10,19,12,12,12,12,11,11,11,11,9,13,12,12,13];
const FIRST_IDS=["s111","s121","s131","s1311","s141","s1413","s1425","s1437","s151","s1512","s1523","s1534","s161","s171","s1714","s1726","s1738"];
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
 sessionStorage.setItem(SESSION_KEY,JSON.stringify({access_token:t.access_token,expires_at:Date.now()+expiry*1000}));
 return t.access_token;
}
function clearToken(){sessionStorage.removeItem(SESSION_KEY);try{window.HanamiAuth?.forget?.()}catch(_){}}
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
   });
 }
 return{main,lessons};
}
/* Tap-to-translate: English by default; touching one paragraph swaps only that paragraph. */
/* One-time private-source enhancement: bilingual source labels remain intact in all views. */
const DISPLAY_MODES=["en","zh","vertical","parallel"];
const DISPLAY_KEY="atpa-modules-reading-mode-v3";
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
 try{const saved=localStorage.getItem(DISPLAY_KEY);return DISPLAY_MODES.includes(saved)?saved:"vertical"}
 catch(_){return "vertical"}
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
 const selected=DISPLAY_MODES.includes(mode)?mode:"vertical";
 if(preservePosition&&document.documentElement.dataset.readingMode===selected)return;
 const saved=preservePosition?(anchorOverride||captureReadingPosition()):null;
 const root=document.documentElement;
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
 const count=document.createElement("p");count.className="toc-summary";count.textContent="原文 211／211 節 · 完整雙語 108／211 節";toc.append(count);
 for(const [chapter,meta] of Object.entries(CHAPTERS)){
   const chapterLessons=lessons.filter(sec=>sec.dataset.num.startsWith(chapter+"."));
   const details=document.createElement("details");details.className="toc-group";
   details.open=chapterLessons.length>0;
   if(!chapterLessons.length)details.classList.add("toc-pending");
   const summary=document.createElement("summary");
   const num=document.createElement("span");num.className="group-num";num.textContent=chapter;
   const label=document.createElement("span");label.className="group-label";
   label.textContent=meta.zh;
   if(chapter==="1.4")label.textContent+=" · GPT 精讀 48 節完成";
   else if(["1.5","1.6","1.7"].includes(chapter))label.textContent+=" · 英文已完成";
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
function mountAll(texts){
 const sections=[];
 for(let i=0;i<texts.length;i++){
   const doc=new DOMParser().parseFromString(texts[i].replace(/^\uFEFF/,""),"text/html");
   const parsed=cleanSource(doc);
   if(parsed.lessons.length!==EXPECTED_COUNTS[i]||parsed.lessons[0].id!==FIRST_IDS[i])
     throw new Error("教材 §"+SOURCES[i].label+" 的小節數量或順序不符，暫停顯示以避免漏頁。");
   sections.push(...parsed.lessons.map(s=>document.importNode(s,true)));
 }
 if(sections.length!==211||new Set(sections.map(s=>s.id)).size!==211)
   throw new Error("211 個編號小節未完整載入，請重新整理後再試。");
 // Exactly the original 60 lessons are bilingual; all 151 newly added sections are English-only.
 const englishOnly=sections.filter(s=>s.dataset.stage==="english-only");
 if(englishOnly.length!==103||englishOnly.some(s=>!s.querySelector(".original")||!s.querySelector(".source-page-figure img")))
   throw new Error("英文先行教材不完整（103 節／PDF 原頁影像），停止顯示。");
 const reviewed=sections.filter(s=>s.dataset.stage==="gpt-bilingual");
 if(reviewed.length!==48||reviewed.some(s=>!s.querySelector(".translation p")||
    !s.querySelector(".gpt-summary-en")||!s.querySelector(".gpt-summary-zh")||
    !s.querySelector(".gpt-annotated")||!s.querySelector(".source-page-figure img")))
   throw new Error("§1.4.1–1.4.48 的 GPT 精讀組件不完整，停止顯示。");
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
 let res;
 try{res=await fetch(endpoint,{headers:{"Authorization":"Bearer "+token},cache:"no-store"})}
 catch(e){throw new Error("下載 §"+source.label+" 時網路連線失敗。")}
 if(res.status===401){clearToken();throw new Error("Google 授權已過期，請重新登入。")}
 if(res.status===403)throw new Error("目前帳號無法讀取 §"+source.label+"，請切換 Google 帳號。");
 if(!res.ok)throw new Error("讀取 §"+source.label+" 時 Google Drive 回應 HTTP "+res.status);
 return res.text();
}
async function fetchPrivate(token){
 if(loaded||!selected)return;
 status("正在載入 Module 3：原文 211／211 節，已完成雙語 108／211 節…");
 const texts=new Array(SOURCES.length);
 for(let i=0;i<SOURCES.length;i+=4){
   status("正在讀取私人教材 "+Math.min(i+4,SOURCES.length)+"／"+SOURCES.length+" 份…");
   const slice=await Promise.all(SOURCES.slice(i,i+4).map(source=>fetchOneSource(source,token)));
   slice.forEach((text,j)=>texts[i+j]=text);
 }
 mountAll(texts);
}

function initClient(){
 if(tokenClient||!window.google?.accounts?.oauth2)return !!tokenClient;
 tokenClient=google.accounts.oauth2.initTokenClient({
   client_id:CLIENT_ID,scope:SCOPE,
   callback:async response=>{
     if(response?.error){status("Google 授權未完成："+response.error);return}
     try{
       const t=remember(response);
       try{await window.HanamiAuth?.remember?.(t)}catch(_){}
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
 if(!selected){status("請由 Module 3 的閱讀入口開啟本章。");return}
 const saved=loadSaved();
 if(saved){
  try{await fetchPrivate(saved);return}
  catch(e){status(e?.message||"已有 Google 授權，但教材無法載入；請重新登入。");return}
 }
 status("請使用擁有私人教材存取權的 Google 帳號登入。");
}

main();
})();