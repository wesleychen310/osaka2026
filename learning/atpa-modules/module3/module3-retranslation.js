/* Private translation overlay for SOA ATPA Module 3.
   Owner-only originals and translations stay in restricted Google Drive.
   Multiple translation batches may target one source Part: merge by lesson ID, not Part. */
(()=>{"use strict";
 const SOURCES=[
  {id:"1cgpK6EjNMrKs2roTLF0htk4RWfZiwuhNka2PtFMo1Gk",sourceFileId:"1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb",chapter:"1.1",part:0,expected:{s111:5,s112:4,s113:2,s114:3,s115:3,s116:2,s117:9,s118:5,s119:2,s1110:3}},
  {id:"19JbZ6IsfTBdmwas1k0OZxVxC4nFfJ2vRSkUAYuk-fxA",sourceFileId:"1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP",chapter:"1.2",part:1,expected:{s121:6,s122:1,s123:3}},
  {id:"1c9m4Tq-LpvnkEG16dtuBpL9wcuUz5NtEZVf3GzC_LPw",sourceFileId:"1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP",chapter:"1.2",part:1,expected:{s124:2,s125:3,s126:2,s127:4,s128:5,s129:9}},
  {id:"1gGLNj-68ed4JOZpApIHvglkfFbOuqroYXyw2e2gu2Fg",sourceFileId:"1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP",chapter:"1.2",part:1,expected:{s1210:7,s1211:3,s1212:5,s1213:6,s1214:4,s1215:1,s1216:1,s1217:1,s1218:20,s1219:2,s1220:4,s1221:5}},
  {id:"1f0k3vQjoFJ53VMmo1lnRO3zsWx9LuIljdGkR7VA_A7Y",sourceFileId:"1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO",chapter:"1.3",part:2,expected:{s131:1,s132:1,s133:1,s134:1,s135:1,s136:1,s137:1,s138:1,s139:1}},
  {id:"1RMUzpYJeKhQBlunEqWmr5xoCnWeYEUq-Ini18kUquSY",sourceFileId:"1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO",chapter:"1.3",part:2,expected:{s1310:1}},
  {id:"194uH8Ia6tVtQJvzH9MUS5uoy5ck-GPd_VC55WTsGt0U",sourceFileId:"13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC",chapter:"1.3",part:3,expected:{s1311:2,s1312:2,s1313:2,s1314:2,s1315:2}}
 ];
 const expectedSections=SOURCES.reduce((n,s)=>n+Object.keys(s.expected).length,0);
 const expectedPairs=SOURCES.reduce((n,s)=>n+Object.values(s.expected).reduce((a,b)=>a+b,0),0);
 const loaded=new Map();
 async function load(token){
  loaded.clear();
  const results=await Promise.all(SOURCES.map(async s=>{
   const url="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(s.id)+
     "/export?mimeType="+encodeURIComponent("text/plain");
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),25000);
   try{
    const res=await fetch(url,{headers:{Authorization:"Bearer "+token},cache:"no-store",signal:controller.signal});
    if(!res.ok)throw new Error("重譯檔 §"+s.chapter+" 下載失敗 (HTTP "+res.status+")");
    const parsed=JSON.parse((await res.text()).replace(/^\uFEFF/,"").trim());
    if(parsed.schema!==1||parsed.chapter!==s.chapter||parsed.sourceFileId!==s.sourceFileId||
       !parsed.translations||typeof parsed.translations!=="object")
     throw new Error("重譯來源或資料格式不符：§"+s.chapter);
    const ids=Object.keys(parsed.translations);
    if(ids.length!==Object.keys(s.expected).length||ids.some(id=>!Object.hasOwn(s.expected,id)))
     throw new Error("重譯小節不符：§"+s.chapter);
    for(const [id,n] of Object.entries(s.expected)){
     const a=parsed.translations[id];
     if(!Array.isArray(a)||a.length!==n||a.some(v=>typeof v!=="string"||!v.trim()))
      throw new Error("重譯段落缺漏："+id);
    }
    return {s,mapping:parsed.translations};
   }finally{clearTimeout(timer)}
  }));
  // Commit only fully validated results, preventing partial-overlay states.
  const staged=new Map();
  for(const {s,mapping} of results){
   if(!staged.has(s.part))staged.set(s.part,new Map());
   const byId=staged.get(s.part);
   for(const [id,values] of Object.entries(mapping)){
    if(byId.has(id))throw new Error("重譯小節重複："+id);
    byId.set(id,values);
   }
  }
  for(const [part,byId] of staged)loaded.set(part,byId);
 }
 function apply(parts){
  const operations=[];
  for(const [part,byId] of loaded){
   if(!parts[part])throw new Error("原始教材分批索引失效："+part);
   const lessonMap=new Map(parts[part].map(lesson=>[lesson.id,lesson]));
   for(const [id,rewritten] of byId){
    const lesson=lessonMap.get(id);
    if(!lesson)throw new Error("無法找到原始小節："+id);
    const nodes=[...lesson.querySelectorAll(".pair > .translation")];
    if(nodes.length!==rewritten.length)throw new Error("原始段落與重譯不一致："+id);
    operations.push({lesson,nodes,rewritten});
   }
  }
  const pairCount=operations.reduce((n,op)=>n+op.rewritten.length,0);
  if(operations.length!==expectedSections||pairCount!==expectedPairs)
   throw new Error("自然校譯總數不符，未套用");
  for(const {lesson,nodes,rewritten} of operations){
   rewritten.forEach((value,i)=>{
    const blocks=value.split(/\n\s*\n/);
    nodes[i].replaceChildren(...blocks.map(block=>{
     const p=document.createElement("p");
     p.textContent=block;
     p.className="fresh-translation-text";
     return p;
    }));
    nodes[i].dataset.translationVersion="natural-v1";
   });
   lesson.dataset.translationVersion="natural-v1";
  }
  return {sections:operations.length,pairs:pairCount};
 }
 window.ATPAModule3Retranslation={load,apply,expectedSections,expectedPairs};
})();
