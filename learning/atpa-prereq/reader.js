/* ATPA prerequisite reader: public presentation logic only.
   All English, Traditional Chinese, figures and phrase annotations are fetched
   from the authorized Google Drive chapter. No textbook material lives here. */
(()=>{"use strict";
  const root=document.documentElement;
  const chapter=new URLSearchParams(location.search).get("chapter");
  root.dataset.atpaPrereqChapter=chapter||"";
  const originalBar=document.getElementById("islp-reading-mode");
  const source=document.querySelector("main .pair");
  if(!source)return;
  // The common ISLP script prepares paired headings and language classes.
  // Keep both source languages in the DOM and let this independent reader
  // choose the visible three-layer presentation.
  root.dataset.islpReadingMode="bi";
  if(originalBar)originalBar.hidden=true;
  const modes=["en","stacked","triple"];
  const KEY="atpa-prereq-reading-mode-v2";
  const legacy="atpa-prereq-language-v1";
  function preferred(){
    try{
      const saved=localStorage.getItem(KEY);
      if(modes.includes(saved))return saved;
      if(localStorage.getItem(legacy)==="en")return "en";
    }catch(_){}
    return "stacked";
  }
  const normalize=s=>(s||"").replace(/\s+/g," ").trim();
  const sentence=(text,language)=>{
    const raw=normalize(text);
    if(!raw)return "";
    const end=language==="zh"
      ?raw.match(/^.*?[。！？](?=\s|$|[^。！？])/)
      :raw.match(/^.*?[.!?](?=\s|$)/);
    return end?end[0].trim():raw;
  };
  const plainOriginal=el=>{
    const clone=el.cloneNode(true);
    clone.querySelectorAll(".inline-gloss,.learning-gloss,[aria-hidden='true'].inline-gloss").forEach(n=>n.remove());
    return normalize(clone.textContent);
  };
  let enhanced=0;
  for(const pair of document.querySelectorAll(".pair")){
    const english=pair.querySelector(":scope > .original, :scope > .en-text");
    const chinese=pair.querySelector(":scope > .translation, :scope > .zh-text");
    if(!english||!chinese||pair.querySelector(":scope > .atpa-reading-summary"))continue;
    const summary=document.createElement("div");
    summary.className="atpa-reading-summary";
    summary.setAttribute("aria-label","原文摘錄式英中重點");
    const en=document.createElement("p");
    en.className="atpa-summary-en";
    en.lang="en";
    en.textContent=sentence(plainOriginal(english),"en");
    const zh=document.createElement("p");
    zh.className="atpa-summary-zh";
    zh.lang="zh-Hant-TW";
    zh.textContent=sentence(chinese.textContent,"zh");
    summary.append(en,zh);
    const annotated=english.cloneNode(true);
    annotated.classList.remove("original","en-text","islp-parallel-en","islp-mode-en");
    annotated.classList.add("atpa-reading-annotated");
    annotated.removeAttribute("style");
    annotated.removeAttribute("id");
    pair.append(summary,annotated);
    pair.classList.add("atpa-enhanced-pair");
    enhanced++;
  }
  if(!enhanced)return;
  const toolbar=document.createElement("nav");
  toolbar.id="atpa-prereq-modes";
  toolbar.setAttribute("aria-label","ATPA 精讀閱讀模式");
  toolbar.innerHTML='<div class="atpa-mode-inner"><span class="atpa-mode-title">閱讀模式</span><div class="atpa-mode-options" role="group" aria-label="閱讀模式"><button type="button" data-mode="en" aria-pressed="false" title="僅完整英文原文">全英文</button><button type="button" data-mode="stacked" aria-pressed="false" title="逐段：完整英文與語塊註解 → 完整繁體中文翻譯">二段式精讀</button><button type="button" data-mode="triple" aria-pressed="false" title="三欄同時顯示；可雙指放大、拖曳閱讀">三欄式精讀</button></div></div><p class="atpa-mode-hint">三欄同時顯示 · 可雙指放大，再拖曳閱讀。</p>';
  if(chapter==="8")toolbar.querySelector('[data-mode="stacked"]').title="逐段：完整繁體中文翻譯 → 完整英文與語塊註解";
  const insertAfter=originalBar||document.querySelector("body > .topbar")||document.querySelector("#atpa-prereq-bar");
  if(insertAfter)insertAfter.after(toolbar);else document.body.prepend(toolbar);
  root.classList.add("atpa-prereq-has-modes");
  const visiblePairs=[...document.querySelectorAll("main .atpa-enhanced-pair")];
  function captureAnchor(){
    if(window.scrollY<180)return null;
    const y=Math.max(toolbar.getBoundingClientRect().bottom+22,Math.round(innerHeight*.43));
    let chosen=null,dist=Infinity;
    for(const node of visiblePairs){
      const rect=node.getBoundingClientRect();
      if(rect.height<1)continue;
      const d=Math.max(0,rect.top-y,y-rect.bottom);
      if(d<dist){chosen=node;dist=d;if(d===0)break}
    }
    if(!chosen)return null;
    const rect=chosen.getBoundingClientRect();
    return {node:chosen,y,fraction:Math.max(0,Math.min(1,(y-rect.top)/rect.height))};
  }
  function restoreAnchor(saved){
    if(!saved||!saved.node.isConnected)return;
    const rect=saved.node.getBoundingClientRect();
    if(!rect.height)return;
    const target=rect.top+saved.fraction*rect.height-saved.y;
    if(Math.abs(target)>.5)window.scrollTo({top:Math.max(0,window.scrollY+target),behavior:"instant"});
  }
  let sequence=0;
  function apply(mode,preserve=true){
    if(!modes.includes(mode))return;
    if(root.dataset.atpaPrereqMode===mode)return;
    const saved=preserve?captureAnchor():null;
    const token=++sequence;
    const oldBehavior=root.style.scrollBehavior,oldAnchor=root.style.overflowAnchor;
    root.style.scrollBehavior="auto";root.style.overflowAnchor="none";
    root.dataset.islpReadingMode="bi";
    root.dataset.atpaPrereqMode=mode;
    toolbar.querySelectorAll("button[data-mode]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===mode)));
    toolbar.querySelector(".atpa-mode-hint").hidden=mode!=="triple";
    try{localStorage.setItem(KEY,mode)}catch(_){}
    if(saved){
      restoreAnchor(saved);
      requestAnimationFrame(()=>{if(token===sequence){restoreAnchor(saved);requestAnimationFrame(()=>{if(token===sequence)restoreAnchor(saved)})}});
      setTimeout(()=>{if(token===sequence){restoreAnchor(saved);root.style.scrollBehavior=oldBehavior;root.style.overflowAnchor=oldAnchor}},120);
    }else{root.style.scrollBehavior=oldBehavior;root.style.overflowAnchor=oldAnchor}
  }
  toolbar.addEventListener("click",e=>{
    const button=e.target.closest("button[data-mode]");
    if(button)apply(button.dataset.mode);
  });
  window.addEventListener("storage",e=>{if(e.key===KEY&&modes.includes(e.newValue))apply(e.newValue)});
  apply(preferred(),false);
})();
