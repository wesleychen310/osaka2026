"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const TOKEN_KEY="hanami-kyoto-google-token-v3",MODE_KEY="actex-pa-bilingual-mode";
const PARTS=[{id:"1KnmXkwNVVynwE9z8fG7rc2stbpm6O1y0",pages:"3–4"},{id:"1o2I893Hn9ExOcDQhT-wcumS4GvQjUcna",pages:"5–6"},{id:"1c1Byb0EHq7SHlUCgcyLaBMo1v8vNEjX2",pages:"7–8"},{id:"1Mo79NSDmCVTPxk4GUUiiLP4Tf7AaGVG-",pages:"9–10"},{id:"1ddz_DGWd5WjcbWl3tDQibSwrJpBTXOvi",pages:"11–14"},{id:"1KSqgozcWpiG4RyhtsH6gdSgaTD3EU0HC",pages:"15–17"},{id:"1wxTMIn8qszoTE5SprlDhFbUp5UjZAjSw",pages:"18–22"},{id:"1426dW78KmuTNaPFV7CrcFfgxpmiZPYpK",pages:"23–28"},{id:"1MklkHaW3ZMW36JvfoMok7oAg7V5HSqVp",pages:"29–33"},{id:"1cLnah1xyAPlDU_9Jasst1AUh5fFdeNil",pages:"34–39"},{id:"1Ucb0rFKyUI0vOpW_S6RZlK4V4aDsFaN4",pages:"40–42"},{id:"1FiW3KG2dlbMhZLnQolAp17sRCF4cF8aQ",pages:"43–46"},{id:"1mudH3IWqheTTYxyGvYrRQREvlVKNhB_O",pages:"47–52"},{id:"1WcC32Vm7U-zzu0hFNI6tx54Jbqkc31zJ",pages:"53–56"},{id:"1gM2hGKiTc_K1EMNLGKn0Te-_4TA6-maS",pages:"57–63"},{id:"1SVTB1vmJyYY_MnGM2e_CK1_wnrjeYT0J",pages:"64–70"},{id:"1qdtRnFPEg_L4UwJCE6V_G5bPN2ZyBRVR",pages:"71–78"},{id:"1XnVMLUSgD-lTi3Cg4C09US8IFHMU_DzG",pages:"79–88"},{id:"1ZtjP_FkAyW0kjx_cuX9XaUE8J_Hwi-RV",pages:"89–92"},{id:"1EMATho6SyW440roXP3xiijVfPEM4m8Py",pages:"93–102"},{id:"1yWXJZ7GEYmD44x_IPToWhftKWs0p1tr4",pages:"103–107"},{id:"1lLQLr6vCtU5XY8W7767Sndf-IqTc6SNQ",pages:"108–116"},{id:"15rQoQb3mbmliMuMF29SEXyPmqK6nzvGm",pages:"117–128"},{id:"1GVhPejVmtvmkgy8y4oivnD8Rlifo3t1v",pages:"129–136"},{id:"1JMzOUZrvexV3y6j7lPNnq8VACMNQM8gv",pages:"137–145"},{id:"1n1Wilrw-WnL9co7DgzOTW-gKSRRPVbHs",pages:"146–157"},{id:"1erL8oDoR-K4Id9uoXzL_LToIyh_Drfny",pages:"158–168"},{id:"1WQ_9tW-O7K8vGx5SMO_u_wYXNlyKhzgQ",pages:"169–176"},{id:"1CLn25X1-H819dbh-EDNtMnMo8lhoZYyx",pages:"177–190"},{id:"184Xx3PQHFcwd3DhMb2jk3_o5PuMH_bHy",pages:"191–199"},{id:"1hOkz2ggsaZkkY2JYBG9NcaY841Va5Ylo",pages:"200–209"},{id:"1TINrEVWXFOwairKNdK8T0jtJESWaT_Vs",pages:"210–215"},{id:"1NCmolCVFdJ5PiP-QMozRqp_crJoV6UsU",pages:"216–221"},{id:"17bEmLWh8vVaLs_zGYWggddanJqQJrJkQ",pages:"222–227"},{id:"1kmBk_-tb1UTTHxlbCqc7iqSWdWQjnY4l",pages:"228–233"},{id:"1VPK6XNv4Q4EcXXXZ2dL5Vq1NbjqRxFhb",pages:"234–239"},{id:"1lL2uBFmAdUlMRmauiL-_1wpu-uCzvZYA",pages:"240–245"},{id:"131FkPJ-pzjLfUfYL--dLy60YJOoUwYYm",pages:"246–251"},{id:"1cl3ZGvfIx4VsIgc_XsqEASEDtJgL9jpU",pages:"252–257"}];
const CHAPTERS=["1 · What is Predictive Analytics?","2 · Data Exploration and Visualization","3 · Linear Models","4 · Generalized Linear Models","5 · Tree-Based Models","6 · Unsupervised Learning","7 · Past PA Exams","8 · Practice Exams","Appendix A · Questions by Theme","Appendix R · Crash Course in R"];
const ANCHOR_PRINT_PAGE=Object.freeze({"s11":7,"s12":14,"stage1":15,"stage2":17,"b7-data-design":18,"b7-ex122":21,"b8-data-quality":23,"b8-other-data-issues":25,"b8-target-leakage":27,"b8-stage3":28,"b9-stage4":29,"b9-three-way-split":31,"b9-metrics":32,"b10-ex126":34,"b10-cv":36,"b10-best-model":38,"b10-stage5":39,"b11-validation-figures":40,"b11-stage6":41,"b11-s13":42,"b12-fig131":43,"b12-fig132":46,"b13-decomposition":47,"b13-ex131":51,"b13-practice":53,"b14-task2":58,"s14":60,"s141":61,"s142":65,"s15":71,"s21":76,"s211":77,"b15-ex211":78,"b15-histograms":78,"b15-skew":82,"b15-density":86,"b15-boxplots":87,"s212":89,"s22":93,"s221":93,"b16-ex221":94,"s222":98,"b16-ex222":100,"s223":103,"b17-epilogue":107,"ch02-graphs":108,"ch02-color":109,"s23":111,"s31":117,"s311":118,"s312":121,"ex311":123,"ch3-aicbic":124,"ex312":127,"b19-residual-fitted":130,"b19-qq":134,"b19-s313":135,"b19-polynomial":137,"b19-binning":138,"b19-piecewise":139,"b19-dummy":141,"b19-ex316":144,"b20-factor":146,"b20-interactions":148,"b20-ex3111":154,"b20-collinearity":156,"b20-selection":161,"b20-ex3117":164,"b20-regularization":168,"b21-regularization":169,"b21-standardize":170,"b21-cv":174,"b21-ex320":176,"b21-case":177,"b21-eda":179,"b21-scatter":183,"b21-simple":185,"b21-slr-tv":186,"b21-summary":188,"b21-predict":189,"b22-radio-newspaper":191,"b22-mlr":192,"b22-task3":192,"b22-task4":197,"b22-task5":201,"b22-task6":202,"b22-task7":206,"b22-test-rmse":209,"b23-p210-u1":210,"b23-p212-u1":212,"b23-p213-u1":213,"b23-p214-u1":214,"b23-p219-u1":219,"b23-p222-u1":222,"b23-p224-u2":224,"b23-p229-u1":229,"b24-p234-u1":234,"b24-p236-u1":236,"b24-p241-u1":241,"b24-p244-u1":244,"b24-p245-u1":245,"b24-p247-u1":247,"b24-p251-u1":251,"b24-p252-u1":252,"b24-p255-u1":255,"b24-p257-u1":257});
const el=id=>document.getElementById(id);let client=null;
function status(msg){el("gate-status").textContent=msg}
function saved(){try{const x=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||"null");if(x?.access_token&&Date.now()<x.expires_at-120000)return x.access_token}catch{}return null}
function store(r){sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:r.access_token,expires_at:Date.now()+Number(r.expires_in||3600)*1000}));return r.access_token}
function setMode(mode){if(!["en","stacked","compare"].includes(mode))mode="stacked";document.documentElement.dataset.mode=mode;localStorage.setItem(MODE_KEY,mode);document.querySelectorAll("[data-mode]").forEach(b=>{if(b.tagName==="BUTTON")b.setAttribute("aria-pressed",String(b.dataset.mode===mode))})}

const LAST_PART_KEY="actex-pa-last-part-v3";
let activePartIndex=0,activeToken=null,loadSequence=0;
function getPartIndex(page){return PARTS.findIndex(p=>{const n=p.pages.match(/\d+/g).map(Number);return page>=n[0]&&page<=n[1]})}
function restorePartIndex(){
 const hash=decodeURIComponent(location.hash.slice(1));
 const pg=Number(hash.match(/^print-p(\d+)$/)?.[1]||ANCHOR_PRINT_PAGE[hash]|| (hash==="ch2"?73:hash==="ch3"?117:0));
 const fromHash=getPartIndex(pg);if(fromHash>=0)return fromHash;
 const fromMemory=Number(localStorage.getItem(LAST_PART_KEY));
 return Number.isInteger(fromMemory)&&fromMemory>=0&&fromMemory<PARTS.length?fromMemory:0;
}
activePartIndex=restorePartIndex();
function loadInfo(message){const elState=el("load-state");if(elState)elState.textContent=message;if(!el("gate").hidden)status(message)}
function refreshPicker(){
 const picker=el("part-select");if(!picker)return;
 if(picker.options.length!==PARTS.length)picker.replaceChildren(...PARTS.map((part,i)=>{const o=document.createElement("option");o.value=String(i);o.textContent="原書 p."+part.pages;return o}));
 picker.value=String(activePartIndex);
 el("part-prev").disabled=activePartIndex===0;
 el("part-next").disabled=activePartIndex===PARTS.length-1;
}
async function readOne(part,token){
 let lastError;
 for(let attempt=0;attempt<3;attempt++){
  const control=new AbortController(), timer=setTimeout(()=>control.abort(),18000);
  try{
   const response=await fetch("https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(part.id)+"?alt=media",{headers:{Authorization:"Bearer "+token},cache:"no-store",signal:control.signal});
   if(response.status===401)throw Error("TOKEN_EXPIRED");
   if(response.status===403)throw Error("NO_ACCESS");
   if(!response.ok)throw Error("DRIVE_"+response.status);
   const doc=new DOMParser().parseFromString(await response.text(),"text/html"),node=doc.querySelector(".private-part");
   if(!node)throw Error("INVALID_HTML");
   const english=node.querySelectorAll(".pair .en").length, chinese=node.querySelectorAll(".pair .zh").length;
   if(!english||english!==chinese)throw Error("MISSING_TRANSLATION");
   return document.importNode(node,true);
  }catch(err){
   lastError=err;
   if(["TOKEN_EXPIRED","NO_ACCESS","INVALID_HTML","MISSING_TRANSLATION"].includes(err.message))break;
   if(attempt<2)loadInfo("載入 p."+part.pages+" 遇到網路問題，正在重試（"+(attempt+1)+"/2）…");
  }finally{clearTimeout(timer)}
 }
 throw lastError||Error("NETWORK_ERROR");
}

/* Organize available section links beneath their actual chapter, not below appendices. */
function organizeChapterNavigation(currentPart){
 const nav=el("chapters");
 const original=Array.from(nav.children);
 if(original.length<CHAPTERS.length)return;
 const chapterEntries=original.slice(0,CHAPTERS.length);
 const sectionEntries=original.slice(CHAPTERS.length);
 const groups=[
  {name:"第 1 章｜預測分析入門",start:3,end:72,home:3},
  {name:"第 2 章｜資料探索與視覺化",start:73,end:116,home:73},
  {name:"第 3 章｜線性模型",start:117,end:257,home:117}
 ];
 const currentPage=Number(currentPart.pages.match(/\d+/)?.[0]||3);
 const notes=document.createElement("p");
 notes.className="toc-coverage";
 notes.textContent="已建立雙語研讀稿：p.3–257（第 1–3 章）。第 4 章起尚未製作；現有研讀稿仍待逐字校對。";
 const result=[notes];
 const covered=new Set();
 groups.forEach((chapter,index)=>{
  const panel=document.createElement("details");
  panel.className="toc-chapter";
  panel.open=currentPage>=chapter.start&&currentPage<=chapter.end;
  const summary=document.createElement("summary");
  summary.className="toc-summary";
  const title=document.createElement("span");
  title.className="toc-name";
  title.textContent=chapter.name;
  const meta=document.createElement("span");
  meta.className="toc-pages";
  meta.textContent="已建立研讀稿 · p."+chapter.start+"–"+(index===1?"111":chapter.end);
  summary.append(title,meta);
  const links=document.createElement("div");
  links.className="toc-links";
  const homepage=chapterEntries[index];
  homepage.textContent="開啟本章首頁 · p."+chapter.home;
  homepage.className="toc-home";
  homepage.dataset.printedPage=String(chapter.home);
  links.append(homepage);
  for(const link of sectionEntries){
   const label=link.textContent||"";
   const page=Number(label.match(/\bp\.\s*(\d+)/)?.[1]);
   if(!page||page<chapter.start||page>chapter.end)continue;
   const indent=(label.match(/^\s*/)?.[0]||"").length;
   const depth=indent>=6?3:indent>=4?2:1;
   link.className="toc-section toc-depth-"+depth;
   link.dataset.printedPage=String(page);
   link.textContent=label.trim().replace(/^↳\s*/,"");
   links.append(link);
   covered.add(link);
  }
  if(index===1){
   const bridge=document.createElement("a");
   bridge.href="#print-p112";
   bridge.className="toc-section toc-depth-1";
   bridge.dataset.printedPage="112";
   bridge.textContent="章節銜接／Study Break · p.112–116";
   links.append(bridge);
  }
  panel.append(summary,links);
  result.push(panel);
 });
 const future=document.createElement("details");
 future.className="toc-upcoming";
 const label=document.createElement("summary");
 label.textContent="尚未製作：第 4–8 章及附錄";
 const notReady=document.createElement("div");
 notReady.className="toc-pending-links";
 const chinese=["廣義線性模型","樹狀模型","非監督式學習","歷屆 PA 考題","模擬考題","附錄 A：依主題分類的題目","附錄 R：R 語言速成"];
 chapterEntries.slice(3).forEach((entry,i)=>{
  entry.textContent=(i<5?"第 "+(i+4)+" 章｜":"")+chinese[i]+" · 尚未製作";
  entry.className="toc-pending";
  notReady.append(entry);
 });
 future.append(label,notReady);
 result.push(future);
 const unknown=sectionEntries.filter(e=>!covered.has(e));
 if(unknown.length){
  const missing=document.createElement("details");
  missing.className="toc-extra";
  const summary=document.createElement("summary");
  summary.textContent="其他目錄連結（"+unknown.length+"）";
  missing.append(summary,...unknown);
  result.push(missing);
 }
 nav.replaceChildren(...result);
}

async function load(token,index=activePartIndex){
 const serial=++loadSequence,part=PARTS[index];if(!part)throw Error("INVALID_PART");
 activeToken=token;
 loadInfo("正在從私人 Drive 載入原書 p."+part.pages+"…");
 if(el("part-retry"))el("part-retry").disabled=true;
 let node;
 try{node=await readOne(part,token)}
 catch(err){
  if(serial!==loadSequence)return;
  const message=err.message==="NO_ACCESS"?"目前登入的 Google 帳號無此教材權限。請按「切換帳號」。":err.message==="TOKEN_EXPIRED"?"Google 登入已過期，請重新登入。":"p."+part.pages+" 載入失敗（"+err.message+"）。請按「重新載入」或選擇其他頁碼。";
  loadInfo(message);
  if(el("part-retry"))el("part-retry").disabled=false;
  throw err;
 }
 if(serial!==loadSequence)return;
 activePartIndex=index;localStorage.setItem(LAST_PART_KEY,String(index));
 el("content").replaceChildren(node);el("chapters").replaceChildren();CHAPTERS.forEach((name,i)=>{const available=i<=2;const x=document.createElement(available?"a":"span");const suffix=i===0?" · 印刷 p.3–72 已上線":i===1?" · 印刷 p.73–111 已上線":i===2?" · 印刷 p.117–257 已上線":" · 待上線";x.textContent=name+suffix;if(i===0)x.href="#print-p3";if(i===1)x.href="#ch2";if(i===2)x.href="#ch3";el("chapters").append(x)});const sec=document.createElement("a");sec.href="#s11";sec.textContent="  ↳ 1.1 Basic Terminology · p.7–14";el("chapters").append(sec);const nextSection=document.createElement("a");nextSection.href="#s12";nextSection.textContent="  ↳ 1.2 The Model Building Process · p.14–42";el("chapters").append(nextSection);const stage1=document.createElement("a");stage1.href="#stage1";stage1.textContent="    ↳ Stage 1 Problem Definition · p.15–17";el("chapters").append(stage1);const stage2=document.createElement("a");stage2.href="#stage2";stage2.textContent="    ↳ Stage 2 Data Collection · p.17–28";el("chapters").append(stage2);const topic=document.createElement("a");topic.href="#b7-data-design";topic.textContent="      ↳ Data Design · p.18–22";el("chapters").append(topic);const sampling=document.createElement("a");sampling.href="#b7-ex122";sampling.textContent="      ↳ Exercise 1.2.2 · p.21–22";el("chapters").append(sampling);const dq=document.createElement("a");dq.href="#b8-data-quality";dq.textContent="      ↳ Data Quality · p.23–25";el("chapters").append(dq);const pii=document.createElement("a");pii.href="#b8-other-data-issues";pii.textContent="      ↳ Privacy / Ethics · p.25–27";el("chapters").append(pii);const leak=document.createElement("a");leak.href="#b8-target-leakage";leak.textContent="      ↳ Target Leakage · p.27–28";el("chapters").append(leak);const stage3=document.createElement("a");stage3.href="#b8-stage3";stage3.textContent="    ↳ Stage 3 EDA · p.28";el("chapters").append(stage3);const stage4=document.createElement("a");stage4.href="#b9-stage4";stage4.textContent="    ↳ Stage 4 Model Construction · p.29–39";el("chapters").append(stage4);const split=document.createElement("a");split.href="#b9-three-way-split";split.textContent="      ↳ Train / Validation / Test · p.31";el("chapters").append(split);const metric=document.createElement("a");metric.href="#b9-metrics";metric.textContent="      ↳ RMSE / MSE / MAE · p.32–33";el("chapters").append(metric);const ex126=document.createElement("a");ex126.href="#b10-ex126";ex126.textContent="      ↳ Exercise 1.2.6 RMSE/MAE · p.34";el("chapters").append(ex126);const cv=document.createElement("a");cv.href="#b10-cv";cv.textContent="      ↳ Cross-validation · p.36–38";el("chapters").append(cv);const select=document.createElement("a");select.href="#b10-best-model";select.textContent="      ↳ Model Selection · p.38–39";el("chapters").append(select);const st5=document.createElement("a");st5.href="#b10-stage5";st5.textContent="    ↳ Stage 5 Model Validation · p.39";el("chapters").append(st5);const diag=document.createElement("a");diag.href="#b11-validation-figures";diag.textContent="      ↳ Predicted vs Actual · p.40";el("chapters").append(diag);const st6=document.createElement("a");st6.href="#b11-stage6";st6.textContent="    ↳ Stage 6 Model Maintenance · p.41–42";el("chapters").append(st6);const bias=document.createElement("a");bias.href="#b11-s13";bias.textContent="  ↳ 1.3 Bias-Variance Trade-off · p.42";el("chapters").append(bias);const errors=document.createElement("a");errors.href="#b12-fig131";errors.textContent="      ↳ Train / Test Error · p.43";el("chapters").append(errors);const curves=document.createElement("a");curves.href="#b12-fig132";curves.textContent="      ↳ Underfit / Overfit Graphs · p.46";el("chapters").append(curves);const dec=document.createElement("a");dec.href="#b13-decomposition";dec.textContent="      ↳ Bias–Variance Decomposition · p.47–52";el("chapters").append(dec);const ex131=document.createElement("a");ex131.href="#b13-ex131";ex131.textContent="      ↳ Exercise 1.3.1 · p.51–52";el("chapters").append(ex131);const sim=document.createElement("a");sim.href="#b13-practice";sim.textContent="    ↳ 1.3.2 Polynomial Regression Simulation · p.53–60";el("chapters").append(sim);const task2=document.createElement("a");task2.href="#b14-task2";task2.textContent="      ↳ Task 2 / CHUNK 3 · p.58–60";el("chapters").append(task2);const sec14=document.createElement("a");sec14.href="#s14";sec14.textContent="  ↳ 1.4 Feature Generation and Selection · p.60–70";el("chapters").append(sec14);const gen=document.createElement("a");gen.href="#s141";gen.textContent="    ↳ 1.4.1 Feature Generation · p.61–64";el("chapters").append(gen);const featureSelect=document.createElement("a");featureSelect.href="#s142";featureSelect.textContent="    ↳ 1.4.2 Feature Selection · p.65–70";el("chapters").append(featureSelect);const review=document.createElement("a");review.href="#s15";review.textContent="  ↳ 1.5 Review Problems · p.71–72";el("chapters").append(review);const eda=document.createElement("a");eda.href="#s21";eda.textContent="  ↳ 2.1 Univariate Data Exploration · p.76–88";el("chapters").append(eda);const num=document.createElement("a");num.href="#s211";num.textContent="    ↳ 2.1.1 Numeric Variables · p.77–88";el("chapters").append(num);const ex211=document.createElement("a");ex211.href="#b15-ex211";ex211.textContent="      ↳ Exercise 2.1.1 · p.78";el("chapters").append(ex211);const hist=document.createElement("a");hist.href="#b15-histograms";hist.textContent="      ↳ Histograms · p.78–81";el("chapters").append(hist);const skew=document.createElement("a");skew.href="#b15-skew";skew.textContent="      ↳ Skewness / Transformations · p.82–85";el("chapters").append(skew);const density=document.createElement("a");density.href="#b15-density";density.textContent="      ↳ Density plots · p.86";el("chapters").append(density);const box=document.createElement("a");box.href="#b15-boxplots";box.textContent="      ↳ Boxplots · p.87–88";el("chapters").append(box);const cat=document.createElement("a");cat.href="#s212";cat.textContent="    ↳ 2.1.2 Categorical Variables · p.89–92";el("chapters").append(cat);const biv=document.createElement("a");biv.href="#s22";biv.textContent="  ↳ 2.2 Bivariate Data Exploration · p.93–102";el("chapters").append(biv);const num2=document.createElement("a");num2.href="#s221";num2.textContent="    ↳ 2.2.1 Numeric × Numeric · p.93–98";el("chapters").append(num2);const ex221=document.createElement("a");ex221.href="#b16-ex221";ex221.textContent="      ↳ Exercise 2.2.1 · p.94";el("chapters").append(ex221);const ncat=document.createElement("a");ncat.href="#s222";ncat.textContent="    ↳ 2.2.2 Numeric × Categorical · p.98–102";el("chapters").append(ncat);const ex222=document.createElement("a");ex222.href="#b16-ex222";ex222.textContent="      ↳ Exercise 2.2.2 · p.100–101";el("chapters").append(ex222);const catcat=document.createElement("a");catcat.href="#s223";catcat.textContent="    ↳ 2.2.3 Categorical × Categorical · p.103";el("chapters").append(catcat);const visual=document.createElement("a");visual.href="#b17-epilogue";visual.textContent="    ↳ Effective Graph Design · p.107";el("chapters").append(visual);const last2=document.createElement("a");last2.href="#ch02-graphs";last2.textContent="    ↳ 2.2 Pie vs Bar Chart · p.108";el("chapters").append(last2);const design=document.createElement("a");design.href="#ch02-color";design.textContent="    ↳ Colors and Chartjunk · p.109–110";el("chapters").append(design);const review2=document.createElement("a");review2.href="#s23";review2.textContent="  ↳ 2.3 Review Problems · p.111";el("chapters").append(review2);const linear=document.createElement("a");linear.href="#s31";linear.textContent="  ↳ 3.1 Linear Models Foundations · p.117–128";el("chapters").append(linear);const model=document.createElement("a");model.href="#s311";model.textContent="    ↳ 3.1.1 Model Formulation / OLS · p.118–121";el("chapters").append(model);const eval3=document.createElement("a");eval3.href="#s312";eval3.textContent="    ↳ 3.1.2 Evaluation / Validation · p.121–128";el("chapters").append(eval3);const exercise31=document.createElement("a");exercise31.href="#ex311";exercise31.textContent="      ↳ Exercise 3.1.1 — R² · p.123";el("chapters").append(exercise31);const ic=document.createElement("a");ic.href="#ch3-aicbic";ic.textContent="      ↳ t/F Tests · AIC / BIC · p.124–128";el("chapters").append(ic);const exercise32=document.createElement("a");exercise32.href="#ex312";exercise32.textContent="      ↳ Exercise 3.1.2 — AIC/BIC · p.127";el("chapters").append(exercise32);const resid=document.createElement("a");resid.href="#b19-residual-fitted";resid.textContent="    ↳ Residuals vs Fitted · p.130–133";el("chapters").append(resid);const qq19=document.createElement("a");qq19.href="#b19-qq";qq19.textContent="    ↳ Normal Q–Q · p.134";el("chapters").append(qq19);const feat=document.createElement("a");feat.href="#b19-s313";feat.textContent="    ↳ 3.1.3 Feature Generation · p.135–145";el("chapters").append(feat);const poly=document.createElement("a");poly.href="#b19-polynomial";poly.textContent="    ↳ Polynomial Regression · p.137–138";el("chapters").append(poly);const bins=document.createElement("a");bins.href="#b19-binning";bins.textContent="    ↳ Binning · p.138–139";el("chapters").append(bins);const piece=document.createElement("a");piece.href="#b19-piecewise";piece.textContent="    ↳ Piecewise Linear · p.139–141";el("chapters").append(piece);const dummy19=document.createElement("a");dummy19.href="#b19-dummy";dummy19.textContent="    ↳ Dummy Encoding · p.141–144";el("chapters").append(dummy19);const e316=document.createElement("a");e316.href="#b19-ex316";e316.textContent="    ↳ Exercise 3.1.6 · p.144–145";el("chapters").append(e316);const factor20=document.createElement("a");factor20.href="#b20-factor";factor20.textContent="    ↳ Numeric vs Factor · p.146–148";el("chapters").append(factor20);const inter20=document.createElement("a");inter20.href="#b20-interactions";inter20.textContent="    ↳ Interactions · p.148–156";el("chapters").append(inter20);const e3111=document.createElement("a");e3111.href="#b20-ex3111";e3111.textContent="    ↳ Exercise 3.1.11 · p.154–155";el("chapters").append(e3111);const coll20=document.createElement("a");coll20.href="#b20-collinearity";coll20.textContent="    ↳ Collinearity & VIF · p.156–160";el("chapters").append(coll20);const selection20=document.createElement("a");selection20.href="#b20-selection";selection20.textContent="    ↳ Best Subset / Stepwise · p.161–168";el("chapters").append(selection20);const e3117=document.createElement("a");e3117.href="#b20-ex3117";e3117.textContent="    ↳ Exercise 3.1.17 AIC · p.164–168";el("chapters").append(e3117);const reg20=document.createElement("a");reg20.href="#b20-regularization";reg20.textContent="    ↳ 3.1.5 Regularization · p.168";el("chapters").append(reg20);const reg21=document.createElement("a");reg21.href="#b21-regularization";reg21.textContent="    ↳ Ridge / Lasso / Elastic Net · p.169–176";el("chapters").append(reg21);const stand21=document.createElement("a");stand21.href="#b21-standardize";stand21.textContent="    ↳ Standardize predictors · p.170–171";el("chapters").append(stand21);const cv21=document.createElement("a");cv21.href="#b21-cv";cv21.textContent="    ↳ Regularization CV · p.174";el("chapters").append(cv21);const ex32021=document.createElement("a");ex32021.href="#b21-ex320";ex32021.textContent="    ↳ Exercise 3.1.20 · p.176";el("chapters").append(ex32021);const case21=document.createElement("a");case21.href="#b21-case";case21.textContent="    ↳ 3.2 Advertising Case Study · p.177–190";el("chapters").append(case21);const eda21=document.createElement("a");eda21.href="#b21-eda";eda21.textContent="    ↳ 3.2.1 EDA / Task 1 · p.179–184";el("chapters").append(eda21);const scatter21=document.createElement("a");scatter21.href="#b21-scatter";scatter21.textContent="    ↳ Figure 3.2.2 Scatterplots · p.183";el("chapters").append(scatter21);const simple21=document.createElement("a");simple21.href="#b21-simple";simple21.textContent="    ↳ 3.2.2 Simple Regression · p.185–190";el("chapters").append(simple21);const slr21=document.createElement("a");slr21.href="#b21-slr-tv";slr21.textContent="    ↳ TV Regression · p.186";el("chapters").append(slr21);const sum21=document.createElement("a");sum21.href="#b21-summary";sum21.textContent="    ↳ summary() / R² · p.188–189";el("chapters").append(sum21);const pred21=document.createElement("a");pred21.href="#b21-predict";pred21.textContent="    ↳ predict() / New Data · p.189–190";el("chapters").append(pred21);const b22_rad=document.createElement("a");b22_rad.href="#b22-radio-newspaper";b22_rad.textContent="    ↳ Radio / newspaper · p.191";el("chapters").append(b22_rad);const b22_mlr_nav=document.createElement("a");b22_mlr_nav.href="#b22-mlr";b22_mlr_nav.textContent="    ↳ 3.2.3 Multiple Regression · p.192–205";el("chapters").append(b22_mlr_nav);const b22_task3_nav=document.createElement("a");b22_task3_nav.href="#b22-task3";b22_task3_nav.textContent="    ↳ Task 3 — Partial effects · p.192–196";el("chapters").append(b22_task3_nav);const b22_task4_nav=document.createElement("a");b22_task4_nav.href="#b22-task4";b22_task4_nav.textContent="    ↳ Task 4 — Interaction · p.197–200";el("chapters").append(b22_task4_nav);const b22_task5_nav=document.createElement("a");b22_task5_nav.href="#b22-task5";b22_task5_nav.textContent="    ↳ Task 5 — Budget planning · p.201–202";el("chapters").append(b22_task5_nav);const b22_task6_nav=document.createElement("a");b22_task6_nav.href="#b22-task6";b22_task6_nav.textContent="    ↳ Task 6 — Nonlinearity · p.202–205";el("chapters").append(b22_task6_nav);const b22_task7_nav=document.createElement("a");b22_task7_nav.href="#b22-task7";b22_task7_nav.textContent="    ↳ 3.2.4 Model Evaluation · p.206–209";el("chapters").append(b22_task7_nav);const b22_rmse_nav=document.createElement("a");b22_rmse_nav.href="#b22-test-rmse";b22_rmse_nav.textContent="    ↳ Test RMSE Model 4 · p.209";el("chapters").append(b22_rmse_nav);const b23_s33=document.createElement("a");b23_s33.href="#b23-p210-u1";b23_s33.textContent="    ↳ 3.3 Feature Selection & Regularization · p.210";el("chapters").append(b23_s33);const b23_credit=document.createElement("a");b23_credit.href="#b23-p212-u1";b23_credit.textContent="    ↳ Credit Data Dictionary · p.212";el("chapters").append(b23_credit);const b23_ethics=document.createElement("a");b23_ethics.href="#b23-p213-u1";b23_ethics.textContent="    ↳ TASK 1 — Ethical Issue · p.213";el("chapters").append(b23_ethics);const b23_target=document.createElement("a");b23_target.href="#b23-p214-u1";b23_target.textContent="    ↳ TASK 2 — Numeric EDA · p.214–218";el("chapters").append(b23_target);const b23_factor=document.createElement("a");b23_factor.href="#b23-p219-u1";b23_factor.textContent="    ↳ TASK 3 — Factor EDA · p.219–221";el("chapters").append(b23_factor);const b23_graph=document.createElement("a");b23_graph.href="#b23-p222-u1";b23_graph.textContent="    ↳ TASK 4 — Interaction Graphs · p.222";el("chapters").append(b23_graph);const b23_train=document.createElement("a");b23_train.href="#b23-p224-u2";b23_train.textContent="    ↳ TASK 5 — Train/Test & Releveling · p.224";el("chapters").append(b23_train);const b23_dummy=document.createElement("a");b23_dummy.href="#b23-p229-u1";b23_dummy.textContent="    ↳ TASK 6 — dummyVars() · p.229–233";el("chapters").append(b23_dummy);const task7_24=document.createElement("a");task7_24.href="#b24-p234-u1";task7_24.textContent="    ↳ TASK 7 · Stepwise Selection · p.234–243";el("chapters").append(task7_24);const back24=document.createElement("a");back24.href="#b24-p236-u1";back24.textContent="    ↳ Backward AIC · p.236–240";el("chapters").append(back24);const forward24=document.createElement("a");forward24.href="#b24-p241-u1";forward24.textContent="    ↳ Forward BIC · p.241–243";el("chapters").append(forward24);const task8_24=document.createElement("a");task8_24.href="#b24-p244-u1";task8_24.textContent="    ↳ TASK 8 · Test RMSE · p.244–246";el("chapters").append(task8_24);const diagnostic24=document.createElement("a");diagnostic24.href="#b24-p245-u1";diagnostic24.textContent="    ↳ Figure 3.3.6 · Diagnostics · p.245";el("chapters").append(diagnostic24);const task9_24=document.createElement("a");task9_24.href="#b24-p247-u1";task9_24.textContent="    ↳ TASK 9 · glmnet() · p.247–251";el("chapters").append(task9_24);const task10_24=document.createElement("a");task10_24.href="#b24-p251-u1";task10_24.textContent="    ↳ TASK 10 · CV/Elastic Net · p.251–256";el("chapters").append(task10_24);const cvplot24=document.createElement("a");cvplot24.href="#b24-p252-u1";cvplot24.textContent="    ↳ Figure 3.3.7 · CV curve · p.252";el("chapters").append(cvplot24);const se24=document.createElement("a");se24.href="#b24-p255-u1";se24.textContent="    ↳ lambda.1se · p.255";el("chapters").append(se24);const review24=document.createElement("a");review24.href="#b24-p257-u1";review24.textContent="    ↳ 3.4 Review Problems · p.257";el("chapters").append(review24);organizeChapterNavigation(part);el("progress").textContent="目前載入原書 p."+part.pages+" · "+document.querySelectorAll(".pair").length+" 組中英段落；全書研讀稿進度 p.3–257";el("gate").hidden=true;el("reader").hidden=false;refreshPicker();el("part-retry").disabled=false;loadInfo("已載入原書 p."+part.pages+"，可選擇其他頁碼。");setMode(localStorage.getItem(MODE_KEY)||"stacked");if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target)setTimeout(()=>target.scrollIntoView(),30)}}
function init(){if(client)return true;if(!window.google?.accounts?.oauth2)return false;client=google.accounts.oauth2.initTokenClient({client_id:CLIENT_ID,scope:SCOPE,callback:async r=>{if(!r.access_token){status("未取得授權");return}try{const t=store(r);await window.HanamiAuth?.remember(t);await load(t)}catch(err){sessionStorage.removeItem(TOKEN_KEY);status(err.message==="NO_ACCESS"?"此帳號沒有教材閱讀權限。":"無法載入私人教材："+err.message)}},error_callback:()=>status("Google 登入尚未完成，請重新點選。")});return true}
function signIn(switchAccount){if(!init()){status("Google 登入程式未載入，請重新整理。");return}try{if(window.HanamiAuth)window.HanamiAuth.request(client,switchAccount);else client.requestAccessToken({prompt:switchAccount?"select_account":""})}catch(err){status("無法開啟登入："+err.message)}}

refreshPicker();
async function openPart(index,anchor){
 if(!activeToken)return;
 try{
  await load(activeToken,index);
  if(anchor){const target=document.getElementById(anchor);if(target)target.scrollIntoView({block:"start"});}
  else window.scrollTo({top:0,behavior:"instant"});
 }catch(err){if(err.message==="TOKEN_EXPIRED"){sessionStorage.removeItem(TOKEN_KEY);el("gate").hidden=false;el("reader").hidden=true;}}
}
el("part-select").addEventListener("change",()=>openPart(Number(el("part-select").value)));
el("part-prev").addEventListener("click",()=>openPart(activePartIndex-1));
el("part-next").addEventListener("click",()=>openPart(activePartIndex+1));
el("part-retry").addEventListener("click",()=>openPart(activePartIndex));
el("sign-in").addEventListener("click",()=>signIn(false));el("switch-account").addEventListener("click",()=>{sessionStorage.removeItem(TOKEN_KEY);window.HanamiAuth?.forget();el("reader").hidden=true;el("gate").hidden=false;signIn(true)});
document.querySelectorAll(".modes button").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
el("toc-toggle").addEventListener("click",()=>{el("toc").classList.toggle("open");el("toc-toggle").setAttribute("aria-expanded",String(el("toc").classList.contains("open")))});
el("chapters").addEventListener("click",e=>{
 const a=e.target.closest("a");if(!a)return;el("toc").classList.remove("open");
 const hash=a.getAttribute("href")?.slice(1);if(!hash)return;
 const pg=hash==="ch2"?73:hash==="ch3"?117:Number(a.textContent.match(/p\.(\d+)/)?.[1]);
 const i=getPartIndex(pg);if(i<0||i===activePartIndex)return;
 e.preventDefault();history.replaceState(null,"","#"+hash);openPart(i,hash);
});
el("search").addEventListener("input",e=>{const q=e.target.value.trim().toLocaleLowerCase();let count=0;document.querySelectorAll(".pair").forEach(p=>{const ok=!q||p.textContent.toLocaleLowerCase().includes(q);p.classList.toggle("filtered",!ok);if(ok)count++});el("search-count").textContent=q?"符合段落："+count:""});
(async()=>{const t=saved();if(t){try{await load(t);return}catch(e){sessionStorage.removeItem(TOKEN_KEY);status("需要重新登入："+e.message)}}setMode(localStorage.getItem(MODE_KEY)||"stacked");status("請以具有權限的 Google 帳號登入。")})();
