/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"023":{"ja":["1y64JT5tur4DFouBDa-USS7s_f_qoerhE","1RqhB-L03ziTUl5W73ws6bnkCX1xTsbuL","1i_MA2SHv5_moIFI2Bn5isUUKzelNTmJ9"],"zh":["1yQSj-3NXkp9VDgdot8Ihg4GRHo3q39UN","1e3VfiwGeKsiH9vevUGrBjOjWBRVED7bn","1vubFD9UNcFOkmd3xQba7oxyfcWmZcouj"]},"024":{"ja":["159UYg1F_9EStJ-N5CCEEzsX8xRwbfQqd","1CinEBiByN1JtOkY7XGKo6DqgLNiZ8scZ","1QpsH--eWy7gaUV8QDgMkO-DXDxzyeTKy"],"zh":["1ItxdMH5KrTa7pyUiTVtuMGNbU9iA-es7","1IBVhTAvQRfncl30kJ3L7Y2h-OZ8SyWkL","1y850P_l0nwpbA2_5hIB9XlMrjmWJGOju"]},"025":{"ja":["1_wefN78Bspaah_WxVfjLee2-4FjT0rIY","1Ktr0Q2xvgcKWHkhi1T-ZgtU1x6ID70Fp","1P7el07a-VGpMj5huWqPYByDcsGhqXPSY"],"zh":["1CP8C936bUmbcPGZCV_hIcDvwZkCCt78D","1VipEcc9pR8hmi7t_99ZR5PNu_16qgrzt","1Mvnw4wxrejKHFjHyWwBbR_9BDsVv2V4F"]},"026":{"ja":["1RnEnQDuMWHvNukDG3HIqegb3SsnppbW2","1bA7eMXtCt88zop7amZILwfYjajv5LX0X","1vtBM9WF1uKFraN346NBxCPhEAM9AGm2c"],"zh":["1yCSaXZBDI4mDQHJti8Ao6XQEOql5CRKC","1ZIP72M5rg-yQDNvHKH2gXK4ZxxiK2hDG","1PFPhg9KqsA45Db_jHl7wENWoU0c73yGy"]},"027":{"ja":["1eojLc2p-zf7_cXzmHEfMK8CTj-G8vsKa","1mkU-8Ow-n1p_nmkYpOqx9jipH6bcp6oV","11tbQpEfRlzfrqXQ-PH0bpapnHnlaOPD6"],"zh":["1jWC2LztdnR5MjD9qBGxBPbSo3upz1R5l","1ezwN9zOTiJ-SvjtR1Xym1G4P7RFFxA1g","1J9b48cXL0-nRpeb3JElfJTD-Su-FxVpZ"]},"028":{"ja":["1Qvf_imdqrbjmLdcpuaHYQzfBblj_cSVv","1nTfqwxKJLu3eGBheRozdXE3vwDCDTYCH","1rNSZOyshuDotUuodZ6jcExeaKShuT9y1"],"zh":["17A5S5rJcaPewy1BMd2bsQCSrEofRUbET","1_RJDZKaDpiJeDKcc6GfjgrSnab5VyGsm","1Um94-aALhw-c0N6MD6Izo_5eSyUBTWlQ"]},"029":{"ja":["12pjPF7NiJM8fiP2jigJcA3KmK3_9S_h5","1kZhuOOmpqMU93kHY-yF7HZHHroRNDHFc","1lKQSXqgl0AwdqEY95i_NuRyOAr2S-8Sn"],"zh":["1eFPNhSRqaJ0hzHW9hRv_sWhM1t4atyqJ","1JQe4L8Sf64czvNGLq5wYicwsgPNzrNjH","1u6SumJi345KlvFG33Z8OzmsFEXlKVNjl"]},"030":{"ja":["1zinNhMT3A07g4M50bASk_ItE-j7kqBXc","1yDnZd14M_ZnXQok_q-N62MWxaG3E2HwB","1Dc_KyZMA88WaMhzGzqyL1fIoVaC80bqb"],"zh":["1MxPKiKcxZGFXLIsOVhd-CsM2RmO9LiD6","1OoadDx58H80rwvsuPxmWmmejEWEHi2P0","1aYE_g9ZJx2puMDbevDZaziu9QfdxxvLM"]},"031":{"ja":["18elW9lje0OHaMG92h-OXEL03_xbhU2OQ","1IUeiu6u9UhTcLxMghvQMPtjQ3Cpv3rDW","1KQCYAjlvmM8xRQNcKGsmtwFSgfN8WoCW"],"zh":["1LB3zU1Ludex9xJJiJSBV1bwjQ88rNtAU","1wXwqLvG0xVDE9OC_Nx_pN1XB3D6S_djN","1a1LgfRch8WclU3HHtumlxuefaWs8Wfi-"]},"032":{"ja":["1eZ84elBg0qvnBhBowIxkS_ka6u0It4Gb","1CzVERKi3j3PYuhGZHUenPYCtovuWTITN","1Qf094FRjwC754be4WCUxPNIo7cACXe1z"],"zh":["18nfBBgttvgsZ0isVj2ZVvAc2s71deQ8j","1ws8hjgETn-vqCE_FgejUCQxezZ_vbdLb","12XMqjKgjb_HUaOkUv5EugV5Lqm5zDe6I"]}};
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
 const info=$('reader-mode-info');if(info)info.textContent='原書 p.'+String(24+(Number(SCENE)-1)*2).padStart(3,'0')+'–'+String(25+(Number(SCENE)-1)*2).padStart(3,'0')+' · 完整英日／英中教材 · STEP 1–3 原稿直譯';
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