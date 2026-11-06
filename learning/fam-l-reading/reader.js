"use strict";
(()=> {
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com",TOKEN_KEY="hanami-kyoto-google-token-v3",SCOPE="https://www.googleapis.com/auth/drive.readonly";
const FILES={"preface":"12_U61PQK8LEgGUiP-FbKvpxoZeWQnYVm","lesson1":"1o2pVgn4ZS_cCdLxVRdhxE8dSwW_YMQDN","lesson2":"1-w566HefkfCGfsOjdqWdWfSjxngPweL8","lesson3":"1wcO0JA1jOT8kOu6J80aWCwcnzpPlitmb","lesson4":"10wUMicboDhQOBbJ8lwFdAKgUDeqKQ_T3","lesson5":"1PKw-1RrQMQeIOxPHwf8YkmckZhmOanU3"};
const chapter=document.body.dataset.chapter||"",fileId=FILES[chapter];
const btn=document.getElementById("loginBtn"),switchBtn=document.getElementById("switchBtn"),status=document.getElementById("status");
let tokenClient=null;
const setStatus=t=>{status.textContent=t};
function saved(){try{const t=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||"null");if(t?.access_token&&Date.now()<t.expires_at-120000)return t}catch(e){}return null}
function remember(r){const t={access_token:r.access_token,expires_at:Date.now()+Number(r.expires_in||3600)*1000};sessionStorage.setItem(TOKEN_KEY,JSON.stringify(t));return t}
async function load(token){setStatus("Loading private book…");
const r=await fetch("https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(fileId)+"?alt=media",{headers:{Authorization:"Bearer "+token},cache:"no-store"});
if(r.status===401)throw Error("SESSION");if(r.status===403)throw Error("FORBIDDEN");if(!r.ok)throw Error("DRIVE "+r.status);
const doc=await r.text();if(!doc.startsWith("<!doctype html>")||!doc.includes("ASM FAM-L"))throw Error("INVALID HTML");
const h=location.hash;document.open();document.write(doc);document.close();
if(h&&location.hash!==h)history.replaceState(null,"",location.pathname+location.search+h);
}
function showLogin(e){btn.disabled=false;btn.hidden=false;switchBtn.hidden=false;setStatus(e||"Sign in using the Google account with access to the book.")}
function initialize(){if(tokenClient)return true;if(!window.google?.accounts?.oauth2)return false;
tokenClient=google.accounts.oauth2.initTokenClient({client_id:CLIENT_ID,scope:SCOPE,callback:async r=>{
if(r.error){showLogin("Google sign-in was not completed.");return}
try{let token=remember(r);await window.HanamiAuth?.remember(token.access_token);await load(token.access_token)}
catch(e){showLogin(e.message==="FORBIDDEN"?"This account has no permission for the private text.":"Unable to read private HTML: "+e.message)}},
error_callback:()=>showLogin("Tap Google Sign in to authorize access.")});return true}
function request(switchAccount=false){if(!initialize()){showLogin("Google sign-in has not loaded yet.");return}
btn.disabled=true;setStatus("Opening Google authorization…");
try{if(window.HanamiAuth)window.HanamiAuth.request(tokenClient,switchAccount);else tokenClient.requestAccessToken({prompt:switchAccount?"select_account":""})}catch(e){showLogin("Tap Google Sign in again.")}}
btn.addEventListener("click",()=>request());
switchBtn.addEventListener("click",()=>{sessionStorage.removeItem(TOKEN_KEY);window.HanamiAuth?.forget();request(true)});
async function boot(){if(!fileId){setStatus("Unknown chapter.");return}
const t=saved();if(t){try{await window.HanamiAuth?.remember(t.access_token);await load(t.access_token);return}catch(e){sessionStorage.removeItem(TOKEN_KEY)}}
for(let i=0;i<30&&!window.google?.accounts?.oauth2;i++)await new Promise(r=>setTimeout(r,100));
if(!initialize()){showLogin("Google login unavailable. Refresh and retry.");return}
showLogin("Sign in to read this private ASM FAM-L chapter.");}
boot();
})();