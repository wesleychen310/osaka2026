/* Public presentation/controller only: all copyrighted Prompt bodies remain private in Google Drive. */
(()=>{'use strict';
const SCENE=new URLSearchParams(location.search).get('scene');
const SOURCES={"013":{"ja":["1QmwAp_dPG1_Rtrpxk-VJc5HBkvQ_ViTG","1Njhr4Ihmzw-AO2Y9TGC6VTFPJZr4TBEX","1lqx-LK8wQcjRIjqc9pVcL_Da9ZwWVgmk"],"zh":["1yRKwrX_QjXHhf6hXt3UQVNvpc7x8tVld","1LI4pzXqJ3FGlwA7lZcy7B0GvOPC9DkgR","1pxlcRibz8d7XMTUXmKgzFOLm3RR9uf3i"]},"014":{"ja":["1dEFwD1OF5t3uqx0e3ONLZK0ExU_D1vNu","18lOq8xM2tnUtFU0uT3Yt96UDL0WihjL6","1ts3Jq8uCdQVy7_yJQuuZ3FLyDicA482T"],"zh":["10Rs2GhdRpYCkZy6QaqvzQuqEp0dSEUCW","1Bf7zCrU8ti-goN04qz8NxgLNgWMW3_ET","1DkSlujsAsJn9eqqM0nhTRCLgBFjs2vw7"]},"015":{"ja":["1uKpmx37shvqwnGrzz50EUIQpXfKitiG9","1ycf-JDuPQHOQbTLerkrgm3LIFdOtXjmM","1l2fpxZYWYzcYZrFZNS3dN0d8odubKDJ-"],"zh":["1gab7AWp4gn_I5fea9xOjUt2npZakN5mQ","1UE7uSn2qd-Vc5DvNPhwedajnaO2mAtEd","1R--PGyd16BK-YYS6iao30uiOAaCuObU0"]},"016":{"ja":["1hbZHkO128mnH6i2lvFcq_yg2Rho36vRt","174Od5GEvOQINW7YoU8QEbrucGhZMF6Fl","1UdlhzAcwZ3uX6cbyFwF7iKnzC2Fy2EQ4"],"zh":["17uiwUnbqruV5tbs5zVm4eQSdZzpHrvfP","1TZw99iVAjcmWsaczVOHhvVjeTnHL5euQ","1vo-Wi7-zHz8XV3PBalTWNkEuCzq3tcaq"]},"017":{"ja":["1knG4Zlu8xIcboCzR8MT_x7X1pMVADP3y","10d1nxsOBsKG_6Pnz9cyCP9Uae5m28B9C","1JRT8nYqI_pF6LGjCRs1HwBV4258c2Hiy"],"zh":["1SVcb68e9gWJPeN9cD7b_1K19uMasoO1e","13lOrOSPReCVnWiajNFrFXFguoP_NQfTw","12KHUHCEWft0ZclKFF1jMPptSY0ZgPWHu"]},"018":{"ja":["1BS2YZ7h_M-iBK-SaX3O-Zke_wUsdED8g","1ipwNHw6_tUTjvviQx6d3RzzFQ5SdiOCt","1x52yrLA4kdnUt6MFaqC4FiHEe7QRQI0q"],"zh":["12gyCzFA7A86K_luz-0OFsspYGmaE_83V","1_ICImXtHA8uV_PGYPMZKd_Wzjy5cCrcu","1Qs4Re4jOqa8GRC5F3F10k3uF_IHUvhqh"]},"019":{"ja":["1NeOCgeaO_2ZMuJA5Fb7TM7iHkzZHjLTN","1IXxB1vZ4Ur_hNVcVsLmDT7hZjCENH1JW","1HL-dlPFosxo8y6Z57s-0SuFr-zVJbYSh"],"zh":["1bbmublP-oSMcqCw9BKOarbD4oX4sVeWU","1ZafhUr0XhSiebiulsx_NXtCpY5aj2AOs","1L1Nvsx9CWhwCgmwe0dyzoZ5k3MCPnJvx"]},"020":{"ja":["1TW7dCfC3W7Y424i4W3tezDwDWO0Coanh","1mF1O0iNSpYTopYJANTcqyyW6u6ckuSOo","1XGu45H2xP4VvpzdICQwYMrQr-yPXv_qF"],"zh":["1PWZvgLs8VC3qUlexZguDFe6RV3PHh9uj","1Kw5pVIGdzzNuoivkd_2VC-hLxDEWaKzK","1xAClGzcIo5EpJbi3KdfLTj6aA1ScR2bp"]},"021":{"ja":["13P78JdBM0oNUTA27vKyXwU3-tx5e4Bvy","1UDTWVl2vl68EgbkdAGTCYQLN0menc05G","17Kc5IccUVdVM_ka0UPK-Dh3w82F-pekr"],"zh":["1WE3RFwL499HNyDNqGwaMvr2abQRTM8rM","1yjhXQ14VjOFmcEj7HXt-kxem3Ph8fQaW","12evAcaFzWGZntcTOamj5y7-xCSDmQdyz"]},"022":{"ja":["1Mo9-vF-3qvC3quzRQpCdsmWJ-wo0lnuq","1WOkpHOdZv1OG7Q1zeWY69emK9HGa1jhQ","172XiL7RLlvSwTHEXLPjHVVByIpWjlHm8"],"zh":["1M3nQcOyx_X9B7FyB0d9F0t1GkPCnloVb","1sHIzv3hYj8d2D4pauIH7yqqlfpPVD9ko","1VawrBY_igvFqyLewp0XMb1m2l05JuHFl"]}};
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