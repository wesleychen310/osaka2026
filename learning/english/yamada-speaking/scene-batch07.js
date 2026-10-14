/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"043":{"ja":["1fvWgzN54GQegYBTBZOO8kiXTvRa0_EuW","1-nZjzCa2bzg7vcXht_8sL87tbEKHl9x1","1qXrH9N06NMrZBuFzoQxROtUTAxYQtH3W"],"zh":["1Kuj4kRw1Zv6Ynqpa_7scpIs2LqkpQWx9","135W26LaNJ_SagjVxaltjD0teI3MMDYJV","1lR4QTI0uCk1uGvSeP2FoUqVmLuCNHZvk"]},"044":{"ja":["1_Vt0HOa6EvK9R4wtci8996Esx0-lLo-1","1rMksaGOqAn_YckfAv2VqaVhRT6ujJsL3","1YSN03Z-NOvYeS7kQ1h4HJdIJPTxI-eey"],"zh":["1yThyeMyZG_Z5Ri_n2WLkaqgbqKjfj8rj","1x61NPy9Fgddh7svxQ1kmCYZwJDr3WrHC","1T1Vc58YCCDnUDmBX5SjLl3bc0zRULSWN"]},"045":{"ja":["19K2Z-mB3QXT2ZJuXs261hn3TqRM5qvZG","1VI7sp35Uu-IIbzXev2cpvsy3PiQu20Q7","1U0kE3hLmyRyZx43vhTM-Oi_qT8COY00-"],"zh":["1C0pePWeLr4BKFIhjA_0cPAjFjBnQKN7m","12x-8sina1WHK_dywH6Pu5BuEHh9kBdw2","1tZ8z2oz_wm6EDkE5QpUig5Vf8nXVafMN"]},"046":{"ja":["1YaVhdGAfJjdGdcD7_STGFPMKG5PxNYud","1G0qchlTFJx3ED_q4GHKe9gYl9KN4Q5aF","12ULsCyjsg59gBENFv7sqVaVD5XPidXdJ"],"zh":["16uila1V76T6AXeYBhf6rQaQkbMSto43E","1IFThcxCXY8JQ3-9pJWGJwQ2JCBXVxhGV","1tQ3ZUUs-G0qE1zSjlDzH44BkT2Y70aC3"]},"047":{"ja":["1fGtnfPIhFcfWfYqV79n-JGFpSz0p6MWB","1iGRfknot5x6B0dQQrDGo_wP86Osp0tS2","1EPprT3M1Y2GqOZW0FlGDi1fravF9vqT2"],"zh":["1d71Jamj2KJFYoFp1csYRxWYi95GaB0NJ","1M4beW4Dt0S3CD2Racbnb0P2vOo3GoGlc","1I0SS5kX17dLtRH2C-_oicp-ammLQiww-"]},"048":{"ja":["1PiH5TutAfQlvc_S_Oqe8rcYVyqt69wXo","1cOj2sXdX9g3zpZc7nr7jowQyELit5_-G","1QGWuwdiy1hMtZ-LEReaIABcNTe9Vhs6R"],"zh":["13gkKcUOpvqG4KE3yUoMoQmU9iuqPTQqd","1ijLjC_qRPPY8BS93Xq5ptBjQ-6aJDWnW","1iuMfJcvEZhRikWGl6UdijYplaSj3F99M"]},"049":{"ja":["12HpLF5AgtYrnEawvxEQgGGCfHJLyVSBs","1REyAz2n6B76kJhfEcXz42G9RLAosMQj8","1lro1CvQyiAgTwu_yR8jPRn4yUdfFT3sV"],"zh":["1K_MCAL-JIEuB_qIJCvjPC9enRKItICRh","1bj4GlVt5LGogjGbVpmSOYxPYDlrksS53","1Co60sIAQdFvZ0vp1MRX5PwYRaNIbb5GU"]},"050":{"ja":["1IfoN6d1-PGLJ4ZtU8bYaQcr7HiI8CGnm","1v42-X4c_feNEluqsNbifzKfpFjEWkBCT","1eggew4P7B2fXA7RmF-2a1JkE6wmvZk1E"],"zh":["1F1XdZKcbEawwW3aBIk-TGpFNSDXLHaaY","1FoCujVpf1BlGTnxIWv_PuhITeCeNLj_0","19K7TQvI2IO_J19I98XkCA5n0r3Eutf9_"]},"051":{"ja":["14BMp6V1qfAqYJgI5Ts5WJ8WVN3tS03Lu","1Y231Dk3kpF3GT6QRnQvyMTBwlKTaILPr","1DvP9iDngsBGRBBlssgUc6pc-dlgZtB1l"],"zh":["1FdG13CxjC0CZ5-s788VVPupBwpGCoH-B","1zRRxrPs8lb-hiToMqz7KHcvC9s95H9UY","1rryAc1BdPDA2shbcer26TMLP6D9u2OPM"]},"052":{"ja":["1TjONGL3986_Yhjbvrvz1_jPDWfb8ZWHI","1a024-hSKgnaej0RTc7UtLBt3ZHVOFjXH","1wMoEZ2T6W1qwPzn4UDcp7ezvrHLBiiuH"],"zh":["1S9C4JzqmuN5twoko12sPIJYH5y9wO0Xy","1kTig9kK-ieYanjUBQKTdOKqDpIipSWrS","1DH9G7u1aWoAWjnNQ7hkY2IXb-XPJ2NPh"]}};
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