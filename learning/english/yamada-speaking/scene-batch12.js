/* Public controller: protected Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const scene=new URLSearchParams(location.search).get('scene');
const S={
'092':{'3':'1IAs0DWpaGPI6PIdgcA37g2QbN7y9y_Dv'},
'093':{'2':'1YyeOsVj8JEItWzWbJMR7L9-afEpzEQj_','3':'1Dj_48SoUba3DrQCuhaj1bsLiMUbzok2B'},
'094':{'2':'1tHX7qlYNI_hnip_UxcJpdR5sY84qtT3y','3':'1Iz7yU9awaYybRtlWjirGZ1MH4Tf8hKdL'},
'095':{'2':'1Bwn9JGPBHqao73QxyAdVa270lVrgx8U7','3':'1d-kFYbcRVW22A9-6D6Jt0qi5MQeqVgd_'},
'096':{'2':'1-H41eC4voz9DHF9aoXwcrTScLkmefnvS','3':'1n5oYaVyO58Z_TJErIM2ztjDXjEwuHuiz'},
'097':{'2':'17iYv3u4mGMOctqol-GNhDuz07S6ygzpX','3':'1w48Yz7Fh1OwEU9U9mVGr-Wmrf78H3h1p'},
'098':{'2':'1VwmBwjRzhdQea0kE8jd_GtuOI4QQg5vL','3':'1tihZ8YHCgr5A3FF68LcV5FnBuqZz5ur1'},
'099':{'2':'1I4Ab0a2PJkCxd9Je-BMrpwOkXxqrXE5l','3':'1sdjx6hmaq5BI2NWrKRmX4oX3-f2qHVJY'},
'100':{'2':'1vhX7tYBJOSQY9qXq3h9RaTSLv7gYCrih','3':'1fJQIm6-hlyO2fPfE0uQoqBJvnX5_hemU'}
};
const ZH={'092':{'3':'17cy0qdTXWlvyIe2tNnCMjJazHZIcLUIM'},'093':{'2':'16Cuy3rGJDLzlL8VxMfb83rrjc5fLZohK','3':'15RWiljJDmekFyL_fatxtzOj__zjBU78V'},'099':{'2':'17PAAg1wfNd9_XGn0DWEHMP7p_z2nPO6B','3':'1Mb5tzLFHpolxeFqieHRZMdAZgfzlLYPm'},'097':{'2':'1cDw2GCEUuQ8jiCCaoNAQSFxTIrGWz9Gq','3':'11y6wXG3aec8PkCb8TM8EYk39mSg_5AUk'},'098':{'2':'1-oO0K0SaxCcwEgQZw4-xRn7BKfVsBtJf','3':'1OLzRrCDlKwvb74AO7JdUF7j4T7Zlp32W'},'100':{'2':'1_R-u8QSlL8lK41DhTZFSN5FzKb2OrHUH','3':'1K5_TxA8qoCl-nhDcdGOTJa_yDPU_kwkn'}};
if(!S[scene])return;
let complete=false;const elem=(t,txt,c)=>{let e=document.createElement(t);if(txt)e.textContent=txt;if(c)e.className=c;return e};
function token(){try{let t=JSON.parse(sessionStorage.getItem('hanami-kyoto-google-token-v3')||'null');return t?.access_token&&t.expires_at>Date.now()+60000?t.access_token:null}catch(_){return null}}
async function get(id){let tk=token();if(!tk)throw Error('請重新登入有權限的 Google 帳號。');let r=await fetch('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media',{headers:{Authorization:'Bearer '+tk},cache:'no-store'});if(!r.ok)throw Error('讀取失敗 HTTP '+r.status);return r.text()}
function init(){let s=document.getElementById('scene-'+scene),reader=document.getElementById('reader');if(complete||!s||!reader||reader.hidden)return;complete=true;
let box=elem('section',null,'source-prompt-panel');box.append(elem('h3','原始練習 Prompt（私人 Drive）'));box.append(elem('p','已有繁中譯稿的 STEP 可展開或複製；其餘 STEP 可檢視及複製日文原文。','source-prompt-hint'));
if(scene==='092')box.append(elem('p','本課缺原書第 212–213 頁和 STEP 1／2；現有 SCENE092-STEP2.txt 實為 SCENE 093。','source-prompt-alert'));
if(scene==='093')box.append(elem('p','來源命名異常：SCENE092-STEP2.txt 實為本課；SCENE093-STEP2.txt 誤植 SCENE 012 內容。此處已按內容校正。','source-prompt-alert'));
for(let step of ['1','2','3']){let row=elem('div',null,'source-prompt-step');row.append(elem('strong','STEP '+step));let id=S[scene][step];if(!id){row.append(elem('span','原始 Prompt 未取得；請參照上述原書閱讀素材。','source-missing'));box.append(row);continue;}
let b=elem('button','載入日文原稿');b.type='button';row.append(b);let a=elem('a','開啟 Google Drive 原始檔','source-drive-link');a.href='https://drive.google.com/file/d/'+id+'/view';a.target='_blank';a.rel='noopener noreferrer';row.append(a);
let pre=elem('pre',null,'source-prompt-body');pre.hidden=true;row.append(pre);
let c=elem('button','複製全文');c.hidden=true;c.type='button';row.append(c);
b.addEventListener('click',async()=>{if(!pre.hidden){pre.hidden=true;c.hidden=true;b.textContent='載入日文原稿';return}b.disabled=true;b.textContent='載入中…';try{if(!pre.dataset.loaded){pre.textContent=await get(id);pre.dataset.loaded='yes'}pre.hidden=false;c.hidden=false;b.textContent='收起原稿'}catch(e){pre.hidden=false;pre.textContent=e.message;b.textContent='重試'}finally{b.disabled=false}});
c.addEventListener('click',()=>navigator.clipboard.writeText(pre.textContent).then(()=>{c.textContent='已複製'},()=>{c.textContent='複製失敗'}));
if(ZH[scene]?.[step]){let z=ZH[scene][step],details=elem('details',null,'source-zh-details'),summ=elem('summary','完整繁中 STEP '+step+'（點此讀取）');details.append(summ);let body=elem('pre',null,'source-prompt-body');details.append(body);let copyzh=elem('button','複製完整繁中 Prompt');copyzh.type='button';details.append(copyzh);details.addEventListener('toggle',async()=>{if(details.open&&!body.dataset.loaded){body.textContent='正在讀取…';try{body.textContent=await get(z);body.dataset.loaded='yes'}catch(e){body.textContent=e.message}}});copyzh.addEventListener('click',()=>navigator.clipboard.writeText(body.textContent).then(()=>{copyzh.textContent='已複製'},()=>{copyzh.textContent='複製失敗'}));row.append(details)}box.append(row)}
s.append(box)}
const observer=new MutationObserver(init);observer.observe(document.documentElement,{childList:true,subtree:true});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();