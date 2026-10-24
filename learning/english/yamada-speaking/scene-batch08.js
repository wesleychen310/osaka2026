/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"053":{"ja":["1Yz_Sh1bnUHK8CD_JNImIvWIw7FvCbSDa","1TShetzro84VnAHRSeiUTSTAaMVYOp5FM","1sCADPcZqiirpio5X-fc5DoSqX1SU39hS"],"zh":["1yacF9eYUKWWADjSc6z7ugIjqF0ONt_e5","1PHo-zE1uB2OtxhOyRfeXFtaKye6q2tyj","1c2LHgXCvKiZmWBxTSqEsY5PdyWQuGeQA"]},"054":{"ja":["1daqpgqq8uaspUpjevN43LQLTY8Jb1ZNo","1vUOSB_zRQ3eZvvF-KcgyvMK2rmiaPzyJ","16VAfPgAyXP1rq6dWRvndSAlI9tv_XbIY"],"zh":["1Kng5W2zZa0lvEKZK4ejSckldZ94l0Ajd","1ndlLQRNZ3SZ7Z9riQZ_ozBLcKJZ6Znfo","1gp9OoG2Sb6S_Ba2j7yop8IbpmozCFjy3"]},"055":{"ja":["1ltnBr8yUalBfnJXU4M0Qbjq0rLeEhq6Y","1EvelL0iyxg7dh-p5JDflWF3lPlpUNZsO","1lndnXK2_k8y7KN3e8T1krceW12nJEEhO"],"zh":["16JIUpdpFQoGh4tHw0KcFNOqKtIoayLtj","1FnfnahVj0IoDN2qKDXy7LGWJH6Qrtr-_","15CD2moLBt7rrhvLpDGuHXTDus0uTalvh"]},"056":{"ja":["1rgVMoSIoZ7lzEjO35Qt3BuJLkMPme5cK","1hEH7xv95f8xIMT11bI506gJXfCAd-SZN","17URjaLXPsTpUvos3DDLwU957cWqeADs1"],"zh":["1i1POXNJTHcVMJusGBaH2gBeyBzuNVgus","1zF7aNRBEWz5DQWVT0d2RR2cmLDzz25cp","1MwydG2FdJnbr4b9R2DUm_SzsHaV1UHxx"]},"057":{"ja":["1AvP3hHG0rbUdZa5psL5ruPR6oRpzdp-f","1DErKp9nBRI4gUmPFiRwTBqcyIrObOoe8","1IjyFBSMiipl2BrnWPlNTI5QzBbuHPD5s"],"zh":["1q8XrZZyuuYS_3iajmWRKfHUk0lIP_WWH","1Olhsti8uA7iEclqfbtpPSI2VfZlCdzGN","1tmpnEhnWG2ebVq8WPXzNjOFK6k_PCSos"]},"058":{"ja":["1Yllmy0RYjDdIoilT-6eWLxeZ-WJeA79_","1rirhjJUTfKsBRntVDuFZd0CwPQYWwzyW","1IlTXaNHyK9PxhLCshQMERdDGi-da4DsD"],"zh":["1xQQXQ3kCpkWYmG2Rbu4Uc_YNOTyGCW6B","17hCv_0wv_Z2kLddM7LVu2Rcytl9ERy4G","1kImejBl6GbgY8jiMaRZ7LqolDC9z14Ir"]},"059":{"ja":["1jP3iDkhrOZ8v7eAMCP3hK-4doXpvw8uL","1-eoXdJzw2ZYyNtKR2MTmcYyoHadPwbNV","1AoJ0kBJ6nNtbU4bZBYPa9V9vFlbmS4Rc"],"zh":["1gJNWvAz_95MNOl0Jrk91gIO7JUR7PQVv","1paaRedxsqFmenaroVF2cnKULLxnr9uEX","1I7v4D9jh3BmjLTNRfw4VPon6B7SR8Qrm"]},"060":{"ja":["1jYQZ-_6hPpIIsf_ZQTE0svQE09VViDbI","1egZBYFCXtid9LHJds4liQrUQ9G4fTdmp","10tybjdyq20RVtLE_gzhwcneZmD9p03kn"],"zh":["1TEDhCu77VvM7YgRTVGRHaLzzoNSJBM3o","13kO9Q_Ofc_0xxbfn64YB6H1KcKQH4_hU","1VFdN9RhWsFji72tvSqh7onD2NKz68wyX"]},"061":{"ja":["1s4Dyoabzx2Ju7SgrTerTh853aC_qZYmB","1iuyBA3Lhbd8Qt3f5J3s7emJ8F0E4xDg3","1hx4BYoe1Au7w2qJpFsNES8OPrUBJlF9N"],"zh":["1DwlUIUF87J3wb3SXwTL1n-G5s2T-qsgv","1yv-QhnutcUWwf2IaFH2GceL5SKkxwrtO","1ouTrnyfH6TrCsQAfvlZCx5PZcWJ8flyn"]},"062":{"ja":["1e9eYe5U8K7GH4LZYzvNYvlgct-X48mE3","1Emd9CkvzH0Gg5KWaINFNZnj85f6z1ule","1zSsj5nGsUONh9ufp61uP8YW4GfGBSstp"],"zh":["1rC1qASVwf0SNq7D-J83l6-Dd2od-H1xF","1BaQkKalEAW6zGNRStsX9rOOyNxSmaHCW","130kUXm4oWCkGBbw3AcAsBuXwQ88I0C-2"]}};
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