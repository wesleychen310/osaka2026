/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"033":{"ja":["1C1JuARt0xR4hVqGC-M5bpsuKlzgbZ2CR","1MFP9WbjtQJwwmpYA4k7ItL1UPRG-HAc1","10rFffNMWY86COH54BG79__k_GJBvPssO"],"zh":["1ahG3Zfm_gEVsM14XKwMH1FhWqxwrIEoK","1VHi6-KqLLeGkT8utMHTbkStjCpy2hFgu","1-dIqDmFxX26M3cJJuaqeGsiQIUqpYqjm"]},"034":{"ja":["1O0BYAJ_b_NjwiULW7Ik8f7Bl76dQvSl5","1iVytSg3CHLPm7mZvC1gw-0c9y_rFrbcm","17Op5jrFj4GWK5uFJTYxW8Ihqq4IHT4Fm"],"zh":["13pEJHJOFQYvwoF1K4Ie3btPqZHdbsavT","1RKnARImiEto32-sCkrxDqnQ-I9nsEw4u","1Dy2-GBsORkVcrcahv5HSzPv7_rSirTE7"]},"035":{"ja":["1F1a4f0cZya4OnVrGxEBmeA-M6kSvWUJl","1eb6NNxmDm97QIChu887Yjv6zgAglw9Wz","1eTQbfE6ihOc57GrnSf_9O9o_2EBtGSbR"],"zh":["1mHWP4XiDTcZtTDx_sfYax7kKQ3VsFN0U","1uAe13BZkG5hb2M0mOjWEhSfkWmxkG5du","1XqQmzL6kcHwGwbk8e20NlhYhrskhNiAg"]},"036":{"ja":["1-js_8NnmTHy-vEA9EBfa3W2TyxOlqGHW","1BXSYKlK34FHTxM3nG2abXUqGL7vQAgoT","1tHesifEXm1Ae-KD9rXm4jp9ObqMHM-xa"],"zh":["1E53w2CHUntG1o8aA1uZUxk1DIno-RM0e","1Y6vLUfG8fjnoPw87qbQbfZgM85lByt10","1l3sche5BQWrUxvAoJsOdZLX_Uh5R42OJ"]},"037":{"ja":["1MrYG9RQc5jswBiWREW45OaYm69oAldA-","1wI6HkLCIOAoYhVY1v_YfSVBNSbbFsCGZ","1qLatg--U6spYq250q1_XyOh4ESmuB5np"],"zh":["1NGvseW2x_jC4lrWwFRaP2hisbnsHObE4","12Yk18d3FPYsQquLvIJ1GovR1srLZxe1E","1_t9kWN8_pHnESPt1KGuYed82uzlMBBak"]},"038":{"ja":["1Lx6IpZc9GoOtQLjU5uOWiYo5_eg6DD-L","1J6bXUpFiSflKgj2cFyecIq6WywPrF9qQ","1qrGV1vJ5JVWuJ2mfJ16ciHqE2Nh6SUju"],"zh":["1oqRjsV-xKIsahGJAvAWHb1ugj0Dcbgk2","1qe_GsKCPISi3r5MA8WCa3Zx6zCnCr0Qa","1sSG_MbVLmuf7j5lt88dp58Xcx6-AWLnl"]},"039":{"ja":["1gwHsJ2OcErDHo-EU5WFVdp7kPL6t1O8s","18w-WL1gB7qgP-cua3R8PAyu15Sp2GfKP","1lUJoX-keWs0j1oVORAQ8pmCR61rp9-sL"],"zh":["1pY75jrSJ4uCxdTaz1klfPa4fIbYryw28","1WHoOxv9KgARyl30HAjFpk8cPpZZmVhqR","1ZJMczJQxC9RCm4Iev3_mV6GspUONpIMH"]},"040":{"ja":["19qCFXOlM-arCbaY0efifEpo__olshw2L","194DbbpV76Yt-klycGGIkfXb6Orc-apTE","1G0oHFow7EzccEK0mvI4GQHlRFedYkN7n"],"zh":["1_bQyZQDgRavuxjtBNSkbUY-MGiuZ3Xy2","1WHv3JjcROqIBkl6Yl22rfDa7GL6doNTf","1mbJd5oGNKhRtvOUCudgjm8tAenYINi1q"]},"041":{"ja":["1hx00PLzSGPPrDevnkQA0gOScEceUB9FS","16VFfNaEBv7FFLKmekC7oFiN4-uBfZlj-","1Wkh-kHyE1D1gzFvMcxtXdWlAcVssCw6_"],"zh":["1TyFYtBEbWDHv8Sow1IIErtT6-MP_4IYW","1uHPkhMPfWnJB0yiHX18USZYuz3n2YJ3x","1yPW8StCmOB1H0CKkpASh35A3IfDy5fSo"]},"042":{"ja":["1XiN3G_3zU1NrhM38GYPhozkXq5dKhaLx","1868myhuCZSNJqPn4ToAEUjldQKNHvtt2","1LR_QUALQRV2nVBJv4mcpK9ddTJ0Hs76m"],"zh":["1CRM83pbE2VPx5ZJWtSEegil4VX2_NOkP","1wXQDD563M1r9_7a3_ZR109mtMmn6_SiS","1see4BZ56MelyMGWONzPEhbkzB31iZo3c"]}};
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