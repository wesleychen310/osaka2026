/* Private book shell. Only presentation code and a restricted index ID are public. */
(()=>{'use strict';
const CLIENT_ID='57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com';
const INDEX_ID='13_aCoPykrvmsFfAAyeY4sCC4RRQmQTuF';
const TOKEN_KEY='hanami-kyoto-google-token-v3';
const button=document.getElementById('sign-in'),switcher=document.getElementById('switch-account'),box=document.getElementById('gate-status');
let client=null,busy=false;
function status(s){box.textContent=s}
function saved(){try{const s=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||'null');if(s?.access_token&&s.expires_at>Date.now()+90000)return s.access_token}catch{}return null}
function forget(){try{sessionStorage.removeItem(TOKEN_KEY)}catch{}try{window.HanamiAuth?.forget?.()}catch{}}
async function drive(id,token){const r=await fetch('https://www.googleapis.com/drive/v3/files/'+encodeURIComponent(id)+'?alt=media',{headers:{Authorization:'Bearer '+token},cache:'no-store'});if(r.status===401){forget();throw Error('Google 授權已過期，請重新登入。')}if(r.status===403)throw Error('目前帳號沒有這份私人教材的讀取權限。');if(!r.ok)throw Error('教材讀取失敗（HTTP '+r.status+'）。');return r}
async function open(token){
 if(busy)return;busy=true;button.disabled=true;switcher.disabled=true;status('正在載入私人目錄…');
 try{
  const catalog=await (await drive(INDEX_ID,token)).json();
  if(catalog.schema!=='short-term-original.v1'||catalog.page_count!==738||catalog.units?.length!==59||catalog.pages?.length!==738)throw Error('私人目錄檢查未通過。');
  const params=new URLSearchParams(location.search);let unit=params.get('unit');
  if(!unit)try{unit=JSON.parse(localStorage.getItem('short-term-last-v1')||'null')?.unit}catch{}
  const item=catalog.units.find(u=>u.id===unit);
  const id=item?item.fileId:catalog.contents_file_id;
  if(!id)throw Error('找不到這個章節。');
  status('正在載入'+(item?item.label:'目錄')+'…');
  let html=await (await drive(id,token)).text();
  if(item&&!html.includes('data-original-book="short-term-v1"'))throw Error('教材檔案檢查未通過。');
  if(!item&&!html.includes('data-private-contents'))throw Error('目錄檔案檢查未通過。');
  window.ShortBookCatalog=catalog;
  document.open();document.write(html);document.close();
 }catch(e){busy=false;button.disabled=false;switcher.disabled=false;status(e.message||'教材載入失敗，請再試一次。')}
}
function init(){if(client)return true;if(!window.google?.accounts?.oauth2)return false;client=google.accounts.oauth2.initTokenClient({client_id:CLIENT_ID,scope:'https://www.googleapis.com/auth/drive.readonly',callback:async r=>{if(r.error){status('Google 授權未完成。');button.disabled=false;return}sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:r.access_token,expires_at:Date.now()+Number(r.expires_in||3500)*1000}));try{Promise.resolve(window.HanamiAuth?.remember?.(r.access_token)).catch(()=>{})}catch{}await open(r.access_token)},error_callback:()=>{button.disabled=false;status('請再點一次 Google 登入。')}});return true}
function login(change){if(!init()){status('Google 登入元件尚未就緒，請稍後再試。');return}button.disabled=true;status('正在等待 Google 授權…');try{if(window.HanamiAuth?.request)window.HanamiAuth.request(client,change);else client.requestAccessToken({prompt:change?'select_account':''})}catch{button.disabled=false;status('請重新點選登入按鈕。')}}
button.addEventListener('click',()=>login(false));switcher.addEventListener('click',()=>{forget();login(true)});
const token=saved();if(token)open(token);else status('請使用具有私人教材權限的 Google 帳號登入。');
})();
