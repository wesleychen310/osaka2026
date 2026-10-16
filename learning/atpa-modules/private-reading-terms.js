/* Presentation-only annotation engine. The glossary stays in restricted Drive. */
(()=>{"use strict";
const FILE_ID="1yt71lAEps93G4abIQBkivZ0DVy4K2-6a";
const article=document.getElementById("study-content");
let pending=null,matcher=null,definitions=new Map();
function annotate(node){
 if(!matcher||node.dataset.privateTermsReady||!node.closest(".pair"))return;
 // Keep the editor's existing semantic chunks and their chosen definitions.
 if(node.querySelector(".gpt-phrase,.learning-mark"))return;
 const words=node.textContent.trim().split(/\s+/).length;
 if(words<12)return;
 node.dataset.privateTermsReady="true";
 const used=new Set();let remaining=Math.max(3,Math.min(12,Math.ceil(words/65)));
 const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT),texts=[];
 while(walker.nextNode()){
  const text=walker.currentNode;
  if(!text.parentElement.closest("pre,code,math,svg,a,.learning-gloss,.gpt-gloss"))texts.push(text);
 }
 for(const textNode of texts){
  if(!remaining)break;
  const text=textNode.nodeValue,fragment=document.createDocumentFragment();
  let end=0,match;matcher.lastIndex=0;
  while(remaining&&(match=matcher.exec(text))){
   const key=match[0].toLowerCase(),start=match.index,stop=start+match[0].length;
   if(used.has(key)||(start&&/[A-Za-z]/.test(text[start-1]))||(stop<text.length&&/[A-Za-z]/.test(text[stop])))continue;
   fragment.append(document.createTextNode(text.slice(end,start)));
   const term=document.createElement("strong");term.className="learning-mark";term.textContent=match[0];
   const gloss=document.createElement("span");gloss.className="learning-gloss";gloss.lang="zh-Hant";
   gloss.textContent="（"+definitions.get(key)+"）";
   fragment.append(term,gloss);end=stop;used.add(key);remaining--;
  }
  if(end){fragment.append(document.createTextNode(text.slice(end)));textNode.replaceWith(fragment)}
 }
}
function scan(root){
 if(root.nodeType!==1)return;
 if(root.matches(".reading-annotated,.gpt-annotated"))annotate(root);
 root.querySelectorAll(".reading-annotated,.gpt-annotated").forEach(annotate);
}
if(article)new MutationObserver(records=>{
 if(!matcher)return;
 for(const record of records)for(const node of record.addedNodes)scan(node);
}).observe(article,{childList:true,subtree:true});
async function load(token){
 if(pending)return pending;
 pending=(async()=>{
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);
  let response;
  try{response=await fetch("https://www.googleapis.com/drive/v3/files/"+FILE_ID+"?alt=media",{
   headers:{Authorization:"Bearer "+token},cache:"no-store",signal:controller.signal
  })}finally{clearTimeout(timer)}
  if(!response.ok)throw new Error("私人語塊註解無法讀取（HTTP "+response.status+"），請確認 Google 帳號授權。");
  const data=await response.json();
  if(data?.schema!=="atpa.private-reading-terms.v1"||!Array.isArray(data.phrases))throw new Error("私人語塊資料格式不正確。");
  definitions=new Map(data.phrases.filter(p=>Array.isArray(p)&&typeof p[0]==="string"&&p[0].length>2&&typeof p[1]==="string")
   .map(([en,zh])=>[en.toLowerCase(),zh]));
  const escaped=[...definitions.keys()].sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  matcher=escaped.length?new RegExp(escaped.join("|"),"gi"):null;
  if(article)scan(article);
 })().catch(error=>{pending=null;throw error});
 return pending;
}
window.ATPAReadingTerms={load};
})();
