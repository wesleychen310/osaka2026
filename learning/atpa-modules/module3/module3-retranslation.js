/* Private translation overlay for SOA ATPA Module 3.
   No copyrighted original text or owner-only translations are stored in GitHub.
   Each private Google Doc is fetched with the same read-only OAuth token used by the book. */
(()=>{"use strict";
 const SOURCES=[
  {id:"1cgpK6EjNMrKs2roTLF0htk4RWfZiwuhNka2PtFMo1Gk",chapter:"1.1",part:0,expectedSections:10,expectedPairs:38}
 ];
 const EXPECTED={"s111":5,"s112":4,"s113":2,"s114":3,"s115":3,"s116":2,"s117":9,"s118":5,"s119":2,"s1110":3};
 const loaded=new Map();
 async function load(token){
  await Promise.all(SOURCES.map(async s=>{
   const url="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(s.id)+
     "/export?mimeType="+encodeURIComponent("text/plain");
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),25000);
   try{
    const res=await fetch(url,{headers:{Authorization:"Bearer "+token},cache:"no-store",signal:controller.signal});
    if(!res.ok)throw new Error("重譯檔 §"+s.chapter+" 下載失敗 (HTTP "+res.status+")");
    const raw=(await res.text()).replace(/^\uFEFF/,"").trim();
    const parsed=JSON.parse(raw);
    if(parsed.schema!==1||parsed.chapter!==s.chapter||!parsed.translations)
     throw new Error("重譯資料格式不符：§"+s.chapter);
    const ids=Object.keys(parsed.translations);
    if(ids.length!==s.expectedSections)throw new Error("重譯小節數不符：§"+s.chapter);
    let count=0;
    for(const [id,n] of Object.entries(EXPECTED)){
     const a=parsed.translations[id];
     if(!Array.isArray(a)||a.length!==n||a.some(v=>typeof v!=="string"||!v.trim()))
      throw new Error("重譯段落缺漏："+id);
     count+=a.length;
    }
    if(count!==s.expectedPairs)throw new Error("重譯段落總數不符");
    loaded.set(s.part,parsed.translations);
   }finally{clearTimeout(timer)}
  }));
 }
 function apply(parts){
  let sections=0,pairs=0;
  for(const [part,mapping] of loaded){
   if(!parts[part])throw new Error("原始教材分批索引失效");
   for(const lesson of parts[part]){
    const rewritten=mapping[lesson.id];
    if(!rewritten)continue;
    const nodes=[...lesson.querySelectorAll(".pair > .translation")];
    if(nodes.length!==rewritten.length)throw new Error("原始段落數和新譯文不一致："+lesson.id);
    rewritten.forEach((text,index)=>{
     const target=nodes[index];
     const blocks=text.split(/\n\s*\n/);
     target.replaceChildren(...blocks.map(block=>{
      const p=document.createElement("p");
      p.textContent=block;
      p.className="fresh-translation-text";
      return p;
     }));
     target.dataset.translationVersion="natural-v1";
     pairs++;
    });
    lesson.dataset.translationVersion="natural-v1";
    sections++;
   }
  }
  return {sections,pairs};
 }
 window.ATPAModule3Retranslation={load,apply,expectedSections:10};
})();