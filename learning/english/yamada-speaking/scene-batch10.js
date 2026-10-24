/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"073":{"ja":["10Gs_W8shAWriBeCwG0_uqHo9fbnA7m3_","17830XS7xk-G5yBXAm0Gmq5sFB-nHDx1B","1IP1l-71KhM9WQGhKtNNf0WE_sia4qQzT"],"zh":["1c-UUNtaCbWyyN7B_BgG56QL5RGjvo0CM","1CSFwbvGJm2hjVm3FK02wEhSMwaN-j39T","1e8mSXVBhHDVNpRqXdFP0YNVGBUp3rADd"]},"074":{"ja":["1CDm5EkhlbiHkJaItswov5-nyNSz5LnVp","1yFYmhfSlyVhiHXyH_b0P9_0WU39s5mfK","1g7f3MMCZTAPA6BS4dOC9AbaR8jeAG06J"],"zh":["151xOkiWigYAF198TSAYveqkg8oukCIfV","1Zkzw4JSE5ZmQkGI2RZ87eS1RHgoa3NJx","1PLtz6Klun_O--KH3AYLYpeeVv02vTMEN"]},"075":{"ja":["1xWHYIwmjJgzafdtfC33a3A5ZJ0w9zXhv","1ikSmJQMcH22BypHIrEfw0M7VQI0g8G0I","1S8cS1Ohyc4oJnMyQZwAxFZ0WMowMvyTi"],"zh":["1hzs7ctmgga8L9Dzk9jHpUgg4SzxyZ8B2","1_yHQg54Dig1UZZjolQtBQKGq5oVQZhSx","1VAOrEYya-o1r4MeS0S24fcU7J5MD-9jc"]},"076":{"ja":["1qJdg2765mEYcr2tYjZ-cgfm956CsZ-GC","1fhIV_TtZq9zoDJmteD_hTS-dfMHjt7fX","1wLJN1ji3RY0drMEfsw909-CFJ637Dwg9"],"zh":["1SKfHfawqEacvfRQgblIxicOw5jo9zsWF","1XsbSjO3ocJx1O7AZwVv_Sq_l-jBfjObG","1fcSm2SxmWUspFgz_gABsW-qvtL_StsL5"]},"077":{"ja":["1du1WI17UdHH6O7GN4jKhckPSHJnOjWcR","1cV4giyGWpgQFMpFPkr798zupWXzwybxY","1rZ2lsZZAA5gWeTpg2Cnx-lWA1GeT_a1_"],"zh":["1HfyaRoB576sD-GE73U6sRviNvHOeeAc4","1aQiF2jSZ54UUFl92W_arJ70sf4VAEp35","118Ys_VJoIpb8JOR-ZtODD0FKhPaYgTys"]},"078":{"ja":["1tmI6iUIb0CKjxvXWexcdBQCWfziWVlA9","1ZDmZNlkycjPzoL17YDNdN91MpMKtoQ8C","1js3lyr_oHoSJW56HVJ8J2G9V4dO3eOmt"],"zh":["1NCtkgG3_sJ2Sg4NtbMFrqHAGDj7hOxTU","1hgnhJIQKKbulYPh-L8V0_LoSRT_VQml4","1QkS_OkOUOyS04DXvJqQ952I6Qa4z4CPM"]},"079":{"ja":["1V74Y1NrDWuC3W6BRpTrIy142mlp4ZijZ","1ymu6VIwUU4ZeqISceVym8DCrbeDN2oxT","1_WALfJM0hQuTYUwp1ViRa8e2n7U8Sqb-"],"zh":["1XzEXO9ZYPNdDQ5Ex30zgS6EEUWGP5NlU","1tc5fSVfAjM5DiFkpqavToCLs2r50U5rV","1bIv5zlnY2_JfOMRddADT43rsRQMQYvV1"]},"080":{"ja":["1fSue4HzvhE2M_HSp8-n43ThaetDcBNR6","15ClGo4WTQfzYmhkBmDDE-VSkbplvfew6","10YmFBOF5loNVYJiP1y7-AJLJm0Axu4ja"],"zh":["18S-opiUTOilic2w-dQoDaJlWiarJJLs3","1Jjf6plEfq2oJVhcrpY6_5k8AcmByOZrm","1C_z6NKHN65cLtCAU2vSICzvMHDwmB_v8"]},"081":{"ja":["1gHK_6QyvdFliqOD2DamtpZhSdFzSfxmt","1CLenFZ4JHjuuXtX5uqN9cax8aviAuIYz","10IqOmrcpwsHO3x_UAqOwtt0Pnhn5rXMp"],"zh":["1-YkLAONgdRbbtXcRhblgUbdH7HAdruqF","1g468JReRUjmmd91cbiTJYjFVN9PKtWeB","1H8lpw0m2AWlQXufZqmtyVeohGG3XgpoL"]},"082":{"ja":["14mHWRzT1o3DuKP1B0uqmUY1Nv5MpPCl1","1Rq_7x5VZIbDk4sUAQBEen82Wv_dym6CZ","1ExMxiT9n_WZfDZiqG2K53BChmtd-9ywC"],"zh":["1m8bOt4nQsUJfrXhjakNtc70mFAHlnC9K","1syoXlWDpengVygsjrjhcgfCh7igTTfQ2","1u04McMjxQdKUFPM8tluW2cx6NbighhUl"]}};
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