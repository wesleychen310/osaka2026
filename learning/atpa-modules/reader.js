/* SOA ATPA private bilingual reader. Public UI only; all source text remains in owner-only Google Drive. */
(()=>{"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const SESSION_KEY="hanami-kyoto-google-token-v3";
const MODE_KEY="atpa-official-module-language-v1";
const SOURCE={
 "1:1":{fileId:"1TTzOcWZ24Z0IpjcFcXrl723FC3gUUC-H6ATG0OoXuNA",module:"1",part:"1",label:"1.1.1–1.1.12",sourcePages:"4–18",kind:"native"},
 "1:2":{fileId:"1d9aE2vG8yqOohQvDM6dztCvNaXrqWdR2",module:"1",part:"2",label:"1.1.13–1.1.24",sourcePages:"19–30",kind:"raw"}
};
const $=id=>document.getElementById(id);
const params=new URLSearchParams(location.search);
const mod=params.get("module"),part=params.get("part")||"1";
const selected=SOURCE[mod+":"+part]||null;
let tokenClient=null,loaded=false;
const show=(id,yes)=>{const x=$(id);if(x)x.hidden=!yes};
function status(text){const node=$("gate-status");if(node)node.textContent=text}
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
 if(!main)throw new Error("找不到教材內容，請檢查私人 Google 文件格式。");
 main.querySelectorAll("script,style,iframe,object,embed,form,input,button").forEach(n=>n.remove());
 main.querySelectorAll("*").forEach(n=>{
   [...n.attributes].forEach(a=>{if(a.name.toLowerCase().startsWith("on"))n.removeAttribute(a.name)});
   if(n.tagName==="A"){
     const href=n.getAttribute("href")||"";
     if(!/^https:\/\/|^http:\/\//i.test(href))n.removeAttribute("href");
     else {n.setAttribute("target","_blank");n.setAttribute("rel","noopener noreferrer")}
   }
 });
 const lessons=[...main.querySelectorAll("section.lesson")];
 if(!lessons.length)throw new Error("這份來源目前沒有可閱讀的小節。");
 for(const s of lessons){
   if(s.querySelectorAll(".pair").length===0)throw new Error("小節 "+s.dataset.num+" 未找到原文與翻譯段落。");
   s.querySelectorAll(".pair").forEach(pair=>{
     if(!pair.querySelector(":scope>.original")||!pair.querySelector(":scope>.translation"))throw new Error("發現缺少雙語配對的段落。");
   });
 }
 return {main,lessons};
}
function localizeLabels(mode){
 const nodes=document.querySelectorAll("#study-content .source-tabs summary,#study-content .lesson h3");
 nodes.forEach(node=>{
   if(!node.dataset.origFull)node.dataset.origFull=node.textContent;
   const raw=node.dataset.origFull;
   const split=raw.includes("／")?"／":null;
   if(!split)return;
   const [a,b]=raw.split(split);
   node.textContent=mode==="en"?a.trim():mode==="zh"?(b||a).trim():raw;
 });
}
function applyMode(next){
 const allowed=["zh","en","parallel","swipe"];
 const mode=allowed.includes(next)?next:"zh";
 document.documentElement.dataset.readingMode=mode;
 $("mode-bar")?.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===mode)));
 show("mode-hint",mode==="swipe");
 document.querySelectorAll("#study-content .pair").forEach(p=>{
   if(mode==="swipe"){p.tabIndex=0;p.scrollLeft=0;p.setAttribute("aria-label","雙語內容：左右滑動切換英文與中文")}
   else{p.removeAttribute("tabindex");p.removeAttribute("aria-label")}
 });
 localizeLabels(mode);
 try{localStorage.setItem(MODE_KEY,mode)}catch(_){}
}
function preferredMode(){try{return localStorage.getItem(MODE_KEY)||"zh"}catch(_){return "zh"}}
$("mode-bar")?.addEventListener("click",e=>{
 const btn=e.target.closest("button[data-mode]");
 if(btn)applyMode(btn.dataset.mode);
});
function mount(text){
 const doc=new DOMParser().parseFromString(text.replace(/^\uFEFF/,""),"text/html");
 const parsed=cleanSource(doc);
 $("study-content").replaceChildren(...[...parsed.main.children].map(c=>document.importNode(c,true)));
 const nav=$("toc");nav.replaceChildren();
 const head=document.createElement("div");head.className="toc-head";head.textContent="Module 1｜"+parsed.lessons.length+" 個小節";nav.append(head);
 for(const section of parsed.lessons){
   const a=document.createElement("a");a.href="#"+section.id;
   const num=document.createElement("span");num.className="toc-num";num.textContent=section.dataset.num;
   const title=document.createElement("span");title.className="toc-label";title.textContent=section.querySelector(".zh-heading")?.textContent||section.querySelector("h2")?.textContent||"";
   a.append(num,title);nav.append(a);
 }
 const title=document.querySelector("#reader-wrap .reader-title>p:last-child");
 if(title)title.textContent="§"+selected.label+" · SOA 2023 原教材 p."+selected.sourcePages;
 const eyebrow=document.querySelector("#reader-wrap .reader-title .eyebrow");
 if(eyebrow)eyebrow.textContent="MODULE 1 · PART "+String(selected.part).padStart(2,"0");
 const footer=document.querySelector("#reader-wrap .reader-footer");
 if(footer){
   footer.querySelectorAll(".part-switch").forEach(n=>n.remove());
   const next=selected.part==="1"?{part:"2",text:"下一批：§1.1.13–1.1.24 →"}:{part:"1",text:"← 上一批：§1.1.1–1.1.12"};
   const a=document.createElement("a");a.className="part-switch";
   a.href="?module=1&part="+next.part+"#"+(next.part==="1"?"s111":"s1113");
   a.textContent=next.text;footer.prepend(a);
 }
 show("gate",false);show("reader-wrap",true);
 loaded=true;applyMode(preferredMode());
 if(location.hash){const node=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(node)requestAnimationFrame(()=>node.scrollIntoView({block:"start"}))}
}
async function fetchPrivate(token){
 if(loaded||!selected)return;
 status("正在從私人 Google Drive 載入雙語教材…");
 const url="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(selected.fileId)+(selected.kind==="raw"?"?alt=media":"/export?mimeType="+encodeURIComponent("text/plain"));
 let res;
 try{res=await fetch(url,{headers:{"Authorization":"Bearer "+token},cache:"no-store"})}
 catch(e){throw new Error("無法連線至 Google Drive："+(e.message||"網路錯誤"))}
 if(res.status===401){clearToken();throw new Error("Google 授權已過期，請重新登入。")}
 if(res.status===403)throw new Error("目前 Google 帳號沒有這份私人教材的讀取權限，請切換帳號。");
 if(!res.ok)throw new Error("Google Drive 回應 HTTP "+res.status);
 const html=await res.text();
 mount(html);
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
 if(!selected){show("catalog",true);show("gate",false);show("reader-wrap",false);return}
 show("catalog",false);show("reader-wrap",false);show("gate",true);
 const saved=loadSaved();
 if(saved){
  try{await fetchPrivate(saved);return}catch(e){status(e?.message||"現有授權無法讀取私人教材，請再按 Google 登入。")}
 }
 status("請使用擁有教材權限的 Google 帳號登入。");
}
main();
})();