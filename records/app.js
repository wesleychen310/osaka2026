/* Private notes loader: this PUBLIC file contains no personal financial data.
   All four chapters reside inside one Google Drive private HTML (OAuth gated). */
(function(){
'use strict';
const FILE_ID='1Va1OoRS1-gC6Qu5SA6_q3vfd82W7HDhA';
const CLIENT_ID='57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com';
const TOKEN_KEY='hanami-kyoto-google-token-v3';
const SCOPE='https://www.googleapis.com/auth/drive.readonly';
const gate=document.getElementById('gate'),viewer=document.getElementById('viewer'),
 frame=document.getElementById('privateFrame'),status=document.getElementById('status'),
 loginBtn=document.getElementById('loginBtn'),switchBtn=document.getElementById('switchBtn');
let token=null,expiry=0,oauth=null,obs=null,loading=false;
const allowed=['finance','income','trust','contacts'];
function wanted(){const x=new URLSearchParams(location.search).get('tab');return allowed.includes(x)?x:'finance'}
function tell(msg){status.textContent=msg||''}
function restore(){try{const t=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||'null');if(t?.access_token&&Date.now()<Number(t.expires_at)-120000){token=t.access_token;expiry=t.expires_at}}catch(e){}}
function clear(){token=null;expiry=0;try{sessionStorage.removeItem(TOKEN_KEY)}catch(e){}}
function valid(){return !!token&&Date.now()<expiry-120000}
function showGate(msg){gate.hidden=false;viewer.hidden=true;loginBtn.disabled=false;tell(msg||'請使用 Google 帳號登入。')}
function onSize(){try{const d=frame.contentDocument;if(!d)return;frame.style.height=Math.max(700,d.body?.scrollHeight||0,d.documentElement?.scrollHeight||0)+'px'}catch(e){}}
frame.addEventListener('load',()=>{
 if(obs){obs.disconnect();obs=null}
 try{const d=frame.contentDocument;if(d?.body&&window.ResizeObserver){obs=new ResizeObserver(onSize);obs.observe(d.body)}}catch(e){}
 onSize();requestAnimationFrame(onSize);setTimeout(onSize,350);setTimeout(onSize,1200);
});
async function readPrivate(){
 if(loading||!valid()){if(!valid())showGate('請登入以查看私人小記事。');return}
 loading=true;gate.hidden=true;viewer.hidden=false;frame.hidden=true;tell('正在讀取 Google Drive 私人小記事…');
 try{
  const u='https://www.googleapis.com/drive/v3/files/'+encodeURIComponent(FILE_ID)+'?alt=media';
  const resp=await fetch(u,{headers:{Authorization:'Bearer '+token},cache:'no-store'});
  if(resp.status===401){clear();showGate('授權已過期，請重新登入。');return}
  if(resp.status===403){showGate('這個 Google 帳號沒有小記事檔案的存取權限。');return}
  if(!resp.ok)throw Error('HTTP '+resp.status);
  const raw=await resp.text();
  if(!/<html/i.test(raw)||!raw.includes('id="bundle"'))throw Error('資料格式不符');
  const init='<script>window.PRIVATE_RECORD_START_TAB='+JSON.stringify(wanted())+';</'+'script>';
  frame.srcdoc=raw.replace(/<head[^>]*>/i,m=>m+init);
  frame.hidden=false;tell('');
 }catch(e){frame.hidden=true;showGate('私人記事讀取失敗：'+String(e.message||e))}
 finally{loading=false}
}
function initOAuth(){
 if(oauth)return true;
 if(!window.google?.accounts?.oauth2)return false;
 oauth=google.accounts.oauth2.initTokenClient({
  client_id:CLIENT_ID,scope:SCOPE,
  callback:async r=>{
   if(!r?.access_token){showGate('未完成 Google 授權。');return}
   token=r.access_token;expiry=Date.now()+Math.max(1,Number(r.expires_in||3600))*1000;
   try{sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:token,expires_at:expiry}))}catch(e){}
   void window.HanamiAuth?.remember(token);
   await readPrivate();
  },
  error_callback:()=>showGate('Google 登入未完成。')
 });
 return true;
}
function login(switchAccount){
 if(!initOAuth()){showGate('Google 登入元件未完成載入，請再試一次。');return}
 loginBtn.disabled=true;tell('正在取得 Google 帳號授權…');
 try{if(window.HanamiAuth)window.HanamiAuth.request(oauth,switchAccount);
 else oauth.requestAccessToken({prompt:switchAccount?'select_account':''})}
 catch(e){showGate('請重新按「使用 Google 登入」。')}
}
loginBtn.addEventListener('click',()=>login(false));
switchBtn.addEventListener('click',()=>{
 clear();frame.srcdoc='';frame.hidden=true;gate.hidden=false;viewer.hidden=true;
 window.HanamiAuth?.forget();login(true);
});
restore();
if(valid()){void readPrivate()}else{showGate('請使用 Google 帳號登入。')}
})();