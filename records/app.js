/* Private records: one Google sign-in, two lazy-loaded private Drive documents.
 * Never place documents, screenshots, or tokens in this public repository.
 */
(function(){
'use strict';
const FILES=Object.freeze({
  finance:'1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4',
  income:'12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl'
});
const CLIENT_ID='57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com';
const TOKEN_KEY='hanami-kyoto-google-token-v3';
const SCOPE='https://www.googleapis.com/auth/drive.readonly';
const tabButtons=[...document.querySelectorAll('[data-tab]')];
const frame=document.getElementById('privateFrame');
const viewer=document.getElementById('viewer');
const gate=document.getElementById('gate');
const status=document.getElementById('status');
const loginBtn=document.getElementById('loginBtn');
const switchBtn=document.getElementById('switchBtn');
const cache=new Map();
let client=null,token=null,expiry=0,loadVersion=0,observer=null;
function isTab(t){return Object.prototype.hasOwnProperty.call(FILES,t)}
const queryTab=new URLSearchParams(location.search).get('tab');
let current=isTab(queryTab)?queryTab:'finance';
function getSaved(){
  try{
    const x=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||'null');
    if(x && x.access_token && Date.now()<Number(x.expires_at)-120000)return x;
  }catch(_){}
  return null;
}
function save(resp){
  token=resp.access_token;
  expiry=Date.now()+Math.max(1,Number(resp.expires_in||3600))*1000;
  try{sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:token,expires_at:expiry}))}catch(_){}
}
function clearToken(){
  token=null;expiry=0;cache.clear();
  try{sessionStorage.removeItem(TOKEN_KEY)}catch(_){}
}
function valid(){return !!token && Date.now()<expiry-120000}
function setStatus(s){status.textContent=s||''}
function showGate(message){
  gate.hidden=false;viewer.hidden=true;
  loginBtn.hidden=false;loginBtn.disabled=false;
  setStatus(message||'請使用 Google 帳號登入。');
}
function displayTab(){
  tabButtons.forEach(b=>{const active=b.dataset.tab===current;b.classList.toggle('active',active);b.setAttribute('aria-selected',active?'true':'false')});
  const u=new URL(location.href);u.searchParams.set('tab',current);history.replaceState({},'',u.pathname+u.search+u.hash);
}
function cssForPrivate(tab){
  const common='header{display:none!important}.hero{padding:12px 0 6px!important}.hero .eyebrow,.hero-sub,.foot{display:none!important}main.wrap{width:100%!important;max-width:100%!important;padding:0 1px 28px!important}.heading{margin-top:21px!important}.panel,.metric{box-shadow:none!important;border-radius:12px!important}';
  const income='.row2>article:first-child{display:none!important}.row2{display:block!important;margin-top:6px!important}.hero-bottom>.pill:nth-child(2),.metric-unit,.panel-meta{display:none!important}.overview{grid-template-columns:repeat(2,minmax(0,1fr))!important}.metric{padding:15px!important}.metric-value{font-size:clamp(19px,4.8vw,29px)!important}.heading{font-size:17px!important}';
  return '<style data-simple-records>'+common+(tab==='income'?income:'')+'</style>';
}
function adjust(){
  try{
    const d=frame.contentDocument;if(!d)return;
    const body=d.body,root=d.documentElement;
    const h=Math.max(body?.scrollHeight||0,root?.scrollHeight||0,450);
    frame.style.height=(h+8)+'px';
  }catch(_){}
}
function attachFrame(){
  if(observer){observer.disconnect();observer=null}
  try{
    const d=frame.contentDocument;if(!d)return;
    d.addEventListener('click',e=>{
      const a=e.target.closest('a[href]');if(!a)return;
      let u;try{u=new URL(a.href,location.href)}catch(_){return}
      if(u.origin!==location.origin)return;
      if(u.pathname==='/osaka2026/records/finance/'||u.pathname==='/osaka2026/records/income/'){
        e.preventDefault();void openTab(u.pathname.includes('income')?'income':'finance');
      }else if(u.pathname==='/osaka2026/records/'){
        e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});
      }
    });
    if(typeof ResizeObserver!=='undefined'){
      observer=new ResizeObserver(adjust);
      observer.observe(d.body);
    }
  }catch(_){}
  adjust();requestAnimationFrame(adjust);
}
async function fetchPrivate(tab){
  if(cache.has(tab))return cache.get(tab);
  if(!valid())throw Error('EXPIRED');
  const res=await fetch('https://www.googleapis.com/drive/v3/files/'+encodeURIComponent(FILES[tab])+'?alt=media',{
    headers:{Authorization:'Bearer '+token},cache:'no-store'
  });
  if(res.status===401)throw Error('EXPIRED');
  if(res.status===403)throw Error('NO_PERMISSION');
  if(!res.ok)throw Error('HTTP_'+res.status);
  const html=await res.text();
  if(!html.toLowerCase().includes('</head>')||!html.includes('<html'))throw Error('INVALID_HTML');
  cache.set(tab,html);
  return html;
}
async function openTab(tab){
  if(!isTab(tab))return;
  current=tab;displayTab();const version=++loadVersion;
  if(!valid()){showGate('請登入以閱讀私人紀錄。');return}
  gate.hidden=true;viewer.hidden=false;
  frame.hidden=true;setStatus('正在載入'+(tab==='finance'?'財務記事':'所得記事')+'…');
  try{
    const html=await fetchPrivate(tab);
    if(version!==loadVersion)return;
    const withCss=html.replace(/<\/head>/i,cssForPrivate(tab)+'</head>');
    frame.srcdoc=withCss;
    frame.hidden=false;
    setStatus('');
  }catch(e){
    if(version!==loadVersion)return;
    if(e.message==='EXPIRED'){
      clearToken();showGate('登入已過期，請重新授權。');
    }else if(e.message==='NO_PERMISSION'){
      showGate('這個 Google 帳號沒有私人檔案存取權限，請切換帳號。');
    }else{
      frame.hidden=true;showGate('私人紀錄載入失敗，請重新登入後再試。');
    }
  }
}
function initClient(){
  if(client)return true;
  if(!window.google?.accounts?.oauth2)return false;
  client=google.accounts.oauth2.initTokenClient({
    client_id:CLIENT_ID,scope:SCOPE,
    callback:async resp=>{
      if(!resp?.access_token){showGate('請完成 Google 授權。');return}
      save(resp);
      void window.HanamiAuth?.remember(token);
      await openTab(current);
    },
    error_callback:()=>showGate('請按「登入」繼續。')
  });
  return true;
}
function requestAuth(switchAccount=false){
  if(!initClient()){showGate('Google 登入元件尚未載入，請稍後再試。');return}
  loginBtn.disabled=true;setStatus('正在確認 Google 帳號…');
  try{
    if(window.HanamiAuth)window.HanamiAuth.request(client,switchAccount);
    else client.requestAccessToken({prompt:switchAccount?'select_account':''});
  }catch(_){showGate('請重新按一下登入。')}
}
async function start(){
  displayTab();
  tabButtons.forEach(b=>b.addEventListener('click',()=>{void openTab(b.dataset.tab);window.scrollTo({top:0,behavior:'smooth'})}));
  frame.addEventListener('load',attachFrame);
  loginBtn.addEventListener('click',()=>requestAuth(false));
  switchBtn.addEventListener('click',()=>{
    clearToken();frame.srcdoc='';window.HanamiAuth?.forget();
    gate.hidden=false;viewer.hidden=true;requestAuth(true);
  });
  const saved=getSaved();
  if(saved){token=saved.access_token;expiry=saved.expires_at;void openTab(current);return}
  showGate('請使用 Google 帳號登入。');
  for(let i=0;i<50&&!window.google?.accounts?.oauth2;i++)await new Promise(resolve=>setTimeout(resolve,100));
  if(!initClient()){setStatus('Google 登入服務未載入，請重新整理。');return}
  // Attempt to re-use a recent Google session without forcing account selection.
  requestAuth(false);
  setTimeout(()=>{if(!valid()&&gate&&!gate.hidden)showGate('請按「登入」繼續。')},3500);
}
void start();
})();
