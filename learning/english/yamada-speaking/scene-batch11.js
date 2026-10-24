/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"083":{"ja":["1iPB5NYPPmwiGcUonN2xoSFZASCHjiHmz","1W0c_tFaWG7a5AH6JE6YvzX2HxCebpRIB","1Im1lkIX2jRbx7jqqJfHsr7azytA3cFLJ"],"zh":["1S3TkkAReKgU7x887nqOkX5NLeAVPQLNt","1kOdGaYqO0Di0g-JrryZPw6nQjYr7qacO","1X02Rw4B6Uixdznq-vIODN-QsQM2DGgW6"]},"084":{"ja":["1U620l5DLUlfqVKAYbz6tweJ3DyhOZvr9","1tcCD9-1C3D6VCSrURLX66BxCQQiKGUvD","1YW-t6B7YLCIjbnZUccGQOovig8PNWYne"],"zh":["1Xqxrl-1Gv2pbxYHXi2k1JE7U9R4diNHj","1go1iJkKupb1lfdTIlCQl-4c5wnMTToZZ","1jum6aqj_D4fc1pfkIATiVykSQp1OQBRT"]},"085":{"ja":["16y4oJ_zFktqN_7RJZ3orIZOjyuLD5jAy","1FlVmA7JJWMCBklncL4_jFFAI_VHSzoLS","1a77wJF6R9W_zus3cOnthZBBdygLcDV4r"],"zh":["1glo_uZK7DUkJOxVEhdjFwgvez-PZGT4s","1z5QtAgW4Yh8hBougDlO3t4GGkVMuf2AM","1xUZog-aRTIF7ehlDRraO2jt7mhmi3oF8"]},"086":{"ja":["1Azg93vgjHCnshPjyNNaPkw0BZjZ6fV7a","1G4lv6kLGAtnUT6nKfbHAQMLfkhbSz6xI","1nkVKaDqxYR3XOni3Ns-ikrLGi_ML2oeY"],"zh":["1EaRFLNfFT9LXFL3R2-EFr1hXkDoEF_Vr","1rUtWsAKHo7xmYvEcHDjQs_Xg4UToxkEn","1sdQUkcpu_uLz_ruFpu7UAGmp4ub7fb7Y"]},"087":{"ja":["1CqsHlG2DfuBT_tQnr1nj6tEcZo_OPFgg","1adX90WmWiz5OyZEmA52-qEHD72eRFqgh","1wW2Z278IlrlI7ZPXpTQE--IE5a6BOtaf"],"zh":["13BJpnvup2u0J7JJnA7TrgXsDettoiIDv","1fJ5hO_S-i-vx35m2u0TaDKewGWa1W1wb","1xFhrJOcun16NwbIKA_PovMbal4pzU7ri"]},"088":{"ja":["1DXzKKD7emfj49y0KOOxVcet-e84MARqN","1Pi4pS03UXkJFnuFgTW45s4CmK_esPxVE","15d4zsA2_-TmZoOGcVX9ZpKePYOrmw63K"],"zh":["1w2OCHrNp7CTMam8OPDW2YstuiY2-DtI_","16HfXIKIigeSsCmxsVVejkYLKIzN8suw4","15xDTnjCa3gUvn5y1rXO4pH4kDSzk5uZz"]},"089":{"ja":["1P_nsxHya4S7aWCk82BYVDE3CiFjtid5E","1bbmcyvQAuGzs-Nd3d9nanyU6ZcSiTXu1","1tTdewRKhINj30M_LWcxeOrVIX2SqUwgX"],"zh":["1vlOZuTexkUpZieqWA0jIi0R2b0pbD0t_","1SQhyNegwTlfH_FMEryeCTVEosmJE2geX","1by43itNPrYomSt52Vd0zcE0pCPP4cRqy"]},"090":{"ja":["1bgZgMSqnRJPtwP8zXLdWbM3A_O_TfQgl","1uUsRMm1aGiLhl78I6CkzpUujnzpQamC0","1O8xjfqEs86v38Njd2rfM6oTRGBvB1Cyp"],"zh":["1tApM93u2A_GXeu1CqQZP4c_MG6tUZguN","1yN3rX9QvfiHHnh5YpogiQqUEW_6NVjIB","1_otm-lcWICwgdnRp235VyR4YhoefWPYm"]},"091":{"ja":["1qXx1orgfzCkY3c9qJP8WpPwn4R-qEwhw","1dmMrLJQOEuIYXgVEaYx6Z6nb2px863nI","1SqdtkkbR2YyPSkxpCIEWFfUqKA7QVjce"],"zh":["1ofl4TNPyx3WmLr1atWyUzCLPSdfk0x7Z","1jAW1D2hj-szigOnyM5S3tqNZ9WhNWurP","1lhNy44KWux2wCVEfUbxl1TrZ2Q3Xfo-o"]}};
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