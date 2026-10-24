/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"063":{"ja":["1j39snlAPJp__8ftp9Ul62PNlelhPYcLu","1hZNBYTaqrjOsnlLgU7TlgklxSqrP780o","1cY2QOHy98TCpCpB1UqicGIvboTNCMn-f"],"zh":["1yvmVGohADXGZO1A1nSWq9KAFY3W7fcfS","1VO9YKjQ9fzkG9JlxchkoDirDWUO_DF7l","1VHv-SMwf91wkfJT9yoyvzbnVQVOZxlv5"]},"064":{"ja":["1luXdfuOOowVJBYin0qhM22re8UPyaBIQ","1k25Fbu6YT3QKIS7mN6ij_4bleQxN-rT-","1lzjFcHJ5RdvpXHcCyLRzH3rguzPDEQVK"],"zh":["1Qn9WLgCPPhaRPSYZD3_0m3GFMIOGuOyz","1ennNVbbEneGXVvNBSDb2cLEZKMWPG_sI","1y2tdS8r_PBRhvY_SdhrGyQ3yPYts8D65"]},"065":{"ja":["1nXRjuJX7HCJYCxoLklpBo2KDE6sZPHJK","14Y6vfjRuPrlmdtyHhyPVbxHp-E7LjP6S","1T-cODRBmqbiEC70O8mfJ1krTPNUUj_aQ"],"zh":["1v5H0GdDEMw8GOjoNyj40HgzYg9n0kAR9","12txEzsZZrNlkbSUEm4LwegPKvsKm2ylS","1fPn-ydPGcgQmGE5jNeMLqvehv0s71tIB"]},"066":{"ja":["15fliVzgSmHDWHFV1eCOkOvw0BA6zuYHv","1Unlpi0uhYL4LlzBdz3a-Oynb-_eCjf57","1fDAH-xhEzYR4ISOpDop7DmNd5HYZ0lOm"],"zh":["1za7l-Su9tNyOVDw2F2MESATt2lCGaBSm","1uANx5VHbi2Ct6aAjrSijMH7KcRLoxwnl","1iLNtRT6afOZwFhMxnnDwfEAn5YtNGmbw"]},"067":{"ja":["1mTNwNFjkb8udyrSmTzl3ZBrvY-ISPeDx","1zrnIKkvmUPXJlPZmlikGn6L4kbjOWMhA","1RVOoObndu9jjMBSdDwF_QaVI9KQ2nWF_"],"zh":["1TCdJ0mq_WGgJYtfyPYG7_FfGKbm83z0p","1nGrXA5a88UEjXrIva7_kwzvO2sg9cBb0","1BsSmqDDUbSgiHBjIsFU3MzsHngQR0CXb"]},"068":{"ja":["13rOBPZw-4dILDmqI9xCxb7vTVGqFU1j7","1aCtuPmdifL8TqUMauPeFrJigyAalW7aE","15tXeeEuwwVmbQiRHWUEk7etZPstLzO-y"],"zh":["1KY2MNDFuNkt1uKrDeRc5F6s8SBlp4VfM","1vgoluQL0PomP3YQ7VGoIuA2GMqg-BlT_","1JzK3rdGS2yGFcZ21IfB-GcwFxNDVI3md"]},"069":{"ja":["18uzYPm7zrTLnhlxhnCq_xfk2XiJPiMdH","13ILGt0RJcGT2B3m0S7WnnF5n_EDiStfH","1Au9F0MFXjo2ZUQXBHxsZot6JCK_KQD5P"],"zh":["1cPzWWNeRyFeE_X7Kuc39QLVgetgzWR94","1__piAS9IFcEzEFrwGjPbtgdguqcIt_qf","1vsBdBas50xpuenmZJh5_i3T_7ciyjdY9"]},"070":{"ja":["1uOkKs-OXiQ226uY9dOo6IU_UecUhG32u","1f-wdgamMeL17LHxk_MWirxFN5don25ny","11Nkn6-UvXCC6mgD3s9xcuh2v0w-uL0Nn"],"zh":["1fe_PH-Ir1MCHe8wEXRR5xDqFrsnXz0mr","1fWTlHrAu9QuoN_HZxgZQfNhaIJjJvTD5","14V2QLK8pJhwcW68lrjjj-vFfX2LC08CH"]},"071":{"ja":["1VLvBjxBZY2Mrd_074HRSaIil7bh__tcJ","1oATLMwdf2VywORdE-v8eDVoN2x3AG8-j","10w8l6TRpCWZhUd2S2zmwoTlQIu6X9-Eg"],"zh":["1ht_LLEqONbZHDTwWxOr24ASszjyDV-dw","1uAoci8j4AyuTCbp5P6KUaOsIsjh0gYIy","1vsee9F4Tc8AaZmaL9A1A6LkSHhkN9nNn"]},"072":{"ja":["14xw2_T5IDda9fo2oveNdCXwh4V8OD-Bt","1WM_8sO1mjYsfzD9JQgp__0q0Z7mS1IO6","1zsflzqNB5h1DW9HYA6P-nWav_9x1diGB"],"zh":["1yLMYQsbu9Ri3auH-0xGn7s_k2rNKvv0T","1UJMcxu_ivsX7krMqmOwDCnngTR1KZxhz","1CE4_A7pXPzWbL-H-t7ylKRb1cTdawm5e"]}};
if(!Object.prototype.hasOwnProperty.call(SOURCES,SCENE))return;
const ids=SOURCES[SCENE],tokenKey='hanami-kyoto-google-token-v3';
const $=id=>document.getElementById(id);
const el=(tag,cls,content)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=content;return e;};
let initialized=false,active='1',originals={},translations={};
function tab(k){
 document.documentElement.dataset.yamadaTab=k;
 document.querySelectorAll('[data-main-tab]').forEach(b=>{const on=b.dataset.mainTab===k;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
 for(const t of ['read','speak','audit']){const pane=$('scene-panel-'+t);if(pane)pane.hidden=t!==k;}
 document.querySelectorAll('.scene-read-toolbar').forEach(e=>{e.hidden=k!=='read';});
 if(k==='audit')compare();
}
function step(k){
 active=k;document.querySelectorAll('[data-scene-step]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sceneStep===k)));
 document.querySelectorAll('[data-training-step]').forEach(e=>{e.hidden=e.dataset.trainingStep!==k;});
 compare();
}
function splitLines(s){return s.replace(/\r\n/g,'\n').trimEnd().split('\n');}
function compare(){
 const pane=$('audit-comparison'),status=$('audit-status');if(!pane||!status)return;
 pane.replaceChildren();const link=$('audit-link');if(link)link.href='https://drive.google.com/file/d/'+ids.ja[Number(active)-1]+'/view';
 const a=originals[active],b=translations[active];
 if(!a||!b){status.textContent='STEP '+active+'：等待 Google Drive 原文及譯稿載入。';return;}
 const ja=splitLines(a),zh=splitLines(b);status.textContent='STEP '+active+'｜日文 '+ja.length+' 行｜中文 '+zh.length+' 行';
 if(ja.length!==zh.length){status.textContent+='｜行數不符，暫停逐行對照。';return;}
 const f=document.createDocumentFragment();for(let i=0;i<ja.length;i++){
  const row=el('div','audit-line'),j=el('div','audit-ja',ja[i]||' '),c=el('div','audit-zh',zh[i]||' ');
  j.lang='ja';c.lang='zh-Hant-TW';row.append(j,c);f.append(row);
 }pane.append(f);
}
async function getText(id,token){
 const r=await fetch('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media',{headers:{Authorization:'Bearer '+token},cache:'no-store'});
 if(!r.ok)throw Error('HTTP '+r.status);return r.text();
}
async function copy(s){
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(s);return true;}}catch(_){}
 const box=el('textarea');box.value=s;box.readOnly=true;box.style.cssText='position:fixed;left:-9999px;top:0;opacity:0';
 document.body.append(box);box.select();let ok=false;try{ok=document.execCommand('copy');}catch(_){}box.remove();return ok;
}
function makePractice(practice){
 const controls=el('div','scene-step-tabs');practice.append(controls);
 for(let i=1;i<=3;i++){
  const k=String(i),t=el('button','scene-step-tab','STEP '+k);t.type='button';t.dataset.sceneStep=k;t.addEventListener('click',()=>step(k));controls.append(t);
  const section=el('section','scene-training-card');section.dataset.trainingStep=k;section.hidden=true;section.id='scene-practice-step-'+k;
  const detail=el('details','prompt-step'),summary=el('summary','prompt-summary','STEP '+k+'｜完整繁體中文直譯（展開全文）');
  detail.append(summary);const body=el('pre','prompt-body','正在讀取私人原稿直譯…');body.dataset.promptBody=k;
  const actions=el('div','prompt-step-actions');
  const btnCopy=el('button','prompt-copy','複製完整 Prompt'),btnLaunch=el('button','prompt-launch','複製並開啟 ChatGPT ↗');
  const stat=el('span','prompt-action-status');stat.setAttribute('role','status');
  btnCopy.type=btnLaunch.type='button';btnCopy.disabled=btnLaunch.disabled=true;
  btnCopy.addEventListener('click',async()=>{if(!translations[k])return;stat.textContent=(await copy(translations[k]))?'已複製完整 STEP '+k+' Prompt':'複製失敗，請選取文字複製。';});
  btnLaunch.addEventListener('click',()=>{if(!translations[k])return;const task=copy(translations[k]);const opened=window.open('https://chatgpt.com/','_blank','noopener,noreferrer');Promise.resolve(task).then(ok=>{stat.textContent=ok?'已複製 Prompt，請貼到 ChatGPT。':'請手動複製 Prompt 並貼到 ChatGPT。';});if(!opened)stat.textContent='瀏覽器可能封鎖新視窗；請自行開啟 chatgpt.com。';});
  actions.append(btnCopy,btnLaunch,stat);detail.append(body,actions);section.append(detail);practice.append(section);
 }
}
async function load(){
 const status=$('practice-load-status');let auth;try{auth=JSON.parse(sessionStorage.getItem(tokenKey)||'null');}catch(_){}
 if(!auth?.access_token||Number(auth.expires_at)<Date.now()+30000){status.textContent='登入已過期，請重新使用 Google 帳號閱讀。';return;}
 const queue=[];for(let i=0;i<3;i++){queue.push(getText(ids.ja[i],auth.access_token),getText(ids.zh[i],auth.access_token));}
 const result=await Promise.allSettled(queue);const problems=[];
 for(let i=0;i<3;i++){
  const k=String(i+1),j=result[2*i],z=result[2*i+1],card=$('scene-practice-step-'+k);
  if(j.status==='fulfilled')originals[k]=j.value;else problems.push('STEP '+k+' 原文：'+j.reason.message);
  if(z.status==='fulfilled'){
   translations[k]=z.value;const body=card?.querySelector('[data-prompt-body]');if(body)body.textContent=z.value;
   card?.querySelectorAll('button').forEach(b=>b.disabled=false);
  }else problems.push('STEP '+k+' 中文：'+z.reason.message);
 }
 status.textContent=problems.length?'載入部分失敗：'+problems.join('；'):'三份完整直譯已載入，可展開、複製及進行練習。';compare();
}
function init(){
 const scene=$('scene-'+SCENE),reader=$('reader'),main=document.querySelector('.content-pane'),book=$('book-content');
 if(initialized||!scene||!reader||reader.hidden||!main||!book)return;
 initialized=true;const nav=el('nav','scene-main-tabs');nav.setAttribute('role','tablist');
 for(const [k,label] of [['read','課文閱讀'],['speak','AI 口說練習'],['audit','日文／繁體中文對照']]){
  const btn=el('button','scene-main-tab',label);btn.dataset.mainTab=k;btn.type='button';btn.setAttribute('role','tab');btn.addEventListener('click',()=>tab(k));nav.append(btn);
 }
 const toolbar=$('toolbar');toolbar.before(nav);toolbar.classList.add('scene-read-toolbar');
 const reading=el('section','scene-read-panel');reading.id='scene-panel-read';book.before(reading);reading.append(book);
 const practice=el('section','scene-workspace');practice.id='scene-panel-speak';main.append(practice);
 const audit=el('section','scene-workspace');audit.id='scene-panel-audit';main.append(audit);
 document.querySelectorAll('.reader-status,.scene-review-nav,.reader-jumps,.lookup,.results').forEach(e=>e.classList.add('scene-read-toolbar'));
 const info=$('reader-mode-info');if(info){const printed=scene.querySelector('.chapter-title small')?.textContent.trim();const page=24+(Number(SCENE)-1)*2+(Number(SCENE)>=31?2:0);info.textContent=(printed||('原書 p.'+page+'–'+(page+1)))+' · 完整英日／英中教材 · STEP 1–3 原稿直譯';}
 practice.append(el('h2','workspace-title','AI 口說練習'),el('p','workspace-lead','完整保留日文原始 Prompt 的英文及操作規則；僅翻譯日文。'));
 makePractice(practice);const practiceStatus=el('p','source-status','正在載入私人 Google Drive Prompt…');practiceStatus.id='practice-load-status';practiceStatus.setAttribute('role','status');practice.append(practiceStatus);
 audit.append(el('h2','workspace-title','日文原稿／繁體中文逐行對照'),el('p','workspace-lead','每一原稿行對應一譯文行；所有英文、IPA 和規則保留。'));
 const auditTabs=el('div','scene-step-tabs');audit.append(auditTabs);for(let i=1;i<=3;i++){const k=String(i),b=el('button','scene-step-tab','STEP '+k);b.type='button';b.dataset.sceneStep=k;b.addEventListener('click',()=>step(k));auditTabs.append(b);}
 const state=el('p','source-status');state.id='audit-status';state.setAttribute('role','status');audit.append(state);
 const head=el('div','audit-line audit-line-header');head.append(el('strong','audit-ja','日文原稿'),el('strong','audit-zh','繁體中文直譯'));audit.append(head);
 const comparison=el('div','audit-comparison');comparison.id='audit-comparison';audit.append(comparison);
 const link=el('a','audit-origin','開啟原始日文 TXT（Google Drive） ↗');link.id='audit-link';link.target='_blank';link.rel='noopener noreferrer';audit.append(link);
 step('1');tab('read');load();
}
const observer=new MutationObserver(init);observer.observe(document.documentElement,{subtree:true,childList:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();