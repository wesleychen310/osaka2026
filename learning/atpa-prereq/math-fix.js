/* ATPA formula polish: native MathML for validated Chapter 4 formulas, readable
   original SVG/PNG, and an accessible zoom control. No third-party libraries.
   Source formula markup is retained in the DOM in every case. */
(()=>{"use strict";
const NS="http://www.w3.org/1998/Math/MathML";
const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
const t=(tag,inner,attrs="")=>"<"+tag+attrs+">"+inner+"</"+tag+">";
const i=s=>t("mi",esc(s)), n=s=>t("mn",esc(s)), o=s=>t("mo",esc(s));
const row=(...a)=>t("mrow",a.join(""));
const sub=(a,b)=>t("msub",a,b), sup=(a,b)=>t("msup",a,b);
const frac=(a,b)=>t("mfrac",a,b);
const par=a=>row(o("("),a,o(")"));
const br=a=>row(o("["),a,o("]"));
const exp=a=>sup(i("e"),a);
const b=k=>sub(i("β"),n(k));
const bh=k=>t("mover",b(k),o("^"));
const X=i("X"), px=row(i("p"),par(X));
const lin=row(b(0),o("+"),b(1),X);
const linHat=row(bh(0),o("+"),bh(1),X);
const denom=a=>row(n(1),o("+"),a);
const logistic=a=>frac(exp(a),denom(exp(a)));
const dot=o("·");
const logr=a=>row(i("log"),par(a));
const od=frac(px,row(n(1),o("−"),px));
const pred=t("mover",i("p"),o("^"));
const lambda= sub(i("λ"),row(i("X"),sub(i("X"),n(1))));
const multi=row(b(0),o("+"),b(1),sub(X,n(1)),o("+"),o("⋯"),o("+"),sub(i("β"),i("p")),sub(X,i("p")));
const params=row(sub(X,n(1)),o(","),o("…"),o(","),sub(X,i("p")));
const lambdaOf=row(i("λ"),par(params));
const multiLogit=frac(px,row(n(1),o("−"),px));
const zStudents=zero=>row(n("−3.5041"),o("+"),n("0.4049"),o("×"),n(String(zero)));
const all={
 "4.1":row(px,o("="),lin),
 "4.2":row(px,o("="),logistic(lin)),
 "4.3":row(od,o("="),exp(lin)),
 "4.4":row(logr(od),o("="),lin),
 "4.5":row(i("ℓ"),par(row(b(0),o(","),b(1))),o("="),
   t("munder",o("∏"),row(i("i"),o(":"),sub(i("y"),i("i")),o("="),n("1"))),
   row(i("p"),par(sub(i("x"),i("i")))),dot,
   t("munder",o("∏"),row(sup(i("i"),o("′")),o(":"),sub(i("y"),sup(i("i"),o("′"))),o("="),n("0"))),
   br(row(n("1"),o("−"),i("p"),par(sub(i("x"),sup(i("i"),o("′"))))))),
 "4.6":row(logr(multiLogit),o("="),multi),
 "4.7":row(px,o("="),logistic(multi)),
 "4.8":row(t("mover",px,o("^")),o("="),logistic(row(n("−10.869"),o("+"),n("0.00574"),o("×"),n("1500"),o("+"),n("0.003"),o("×"),n("40"),o("−"),n("0.6468"),o("×"),n("1"))),o("="),n("0.058")),
 "4.9":row(t("mover",px,o("^")),o("="),logistic(row(n("−10.869"),o("+"),n("0.00574"),o("×"),n("1500"),o("+"),n("0.003"),o("×"),n("40"),o("−"),n("0.6468"),o("×"),n("0"))),o("="),n("0.105")),
 "4.35":row(i("Pr"),par(row(i("Y"),o("="),i("k"))),o("="),frac(row(exp(row(o("−"),i("λ"))),sup(i("λ"),i("k"))),row(i("k"),o("!"))),o(","),i("k"),o("="),n("0"),o(","),n("1"),o(","),o("…")),
 "4.36":row(logr(lambdaOf),o("="),multi),
 "4.37":row(lambdaOf,o("="),exp(multi))
};
const math=body=>'<math xmlns="'+NS+'" display="block" aria-label="數學公式"><mstyle displaystyle="true" scriptlevel="0">'+body+"</mstyle></math>";
function typesetSelected(){
  if(!document.createElementNS)return 0;
  let count=0;
  document.querySelectorAll(".equation").forEach(eq=>{
    const match=(eq.querySelector(".page-ref")?.textContent||eq.textContent||"").match(/\(4\.(1|2|3|4|5|6|7|8|9|35|36|37)\)/);
    if(!match)return;
    const key="4."+match[1], markup=all[key];
    if(!markup)return;
    const asXml=new DOMParser().parseFromString(math(markup),"application/xml");
    if(asXml.querySelector("parsererror"))return;
    const mathNode=document.importNode(asXml.documentElement,true);
    const polished=document.createElement("div");
    polished.className="atpa-math-polished";
    const number=document.createElement("span");
    number.className="atpa-math-number";
    number.textContent="("+key+")";
    polished.append(mathNode,number);
    // Preserve explanatory notes outside the collapsible original formula too.
    const context=eq.querySelector(".math-note");
    if(context){
      const visible=context.cloneNode(true);
      visible.classList.add("atpa-math-context");
      polished.append(visible);
    }
    // Original source stays intact (including its text and numbering).
    const wrapper=document.createElement("details");
    wrapper.className="atpa-original-equation";
    const summary=document.createElement("summary");
    summary.textContent="查看原始公式";
    const source=document.createElement("div");
    source.className="atpa-original-equation-content";
    while(eq.firstChild)source.appendChild(eq.firstChild);
    wrapper.append(summary,source);
    eq.append(polished,wrapper);
    eq.classList.add("atpa-math-enhanced");
    count++;
  });
  return count;
}
let modal;
function getModal(){
  if(modal)return modal;
  modal=document.createElement("div");
  modal.className="atpa-math-lightbox";
  modal.hidden=true;
  modal.setAttribute("role","dialog");
  modal.setAttribute("aria-modal","true");
  modal.setAttribute("aria-label","放大檢視原書公式");
  const pane=document.createElement("div");pane.className="atpa-math-lightbox-pane";
  const close=document.createElement("button");close.type="button";close.className="atpa-math-close";close.textContent="關閉 ×";
  const stage=document.createElement("div");stage.className="atpa-math-lightbox-stage";
  pane.append(close,stage);modal.append(pane);document.body.append(modal);
  const shut=()=>{modal.hidden=true;stage.replaceChildren();document.body.style.removeProperty("overflow");};
  close.addEventListener("click",shut);
  modal.addEventListener("click",e=>{if(e.target===modal)shut()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)shut()});
  modal._show=image=>{
    const clone=image.cloneNode(true);clone.removeAttribute("width");clone.removeAttribute("height");
    clone.removeAttribute("style");clone.classList.add("atpa-math-zoomed");
    const displayed=Number.parseFloat(image.style.width)||image.naturalWidth||400;
    const zoomWidth=Math.min(2400,Math.round(Math.max(displayed,image.naturalWidth||0)*1.35));
    clone.style.setProperty("width",zoomWidth+"px","important");
    stage.replaceChildren(clone);
    modal.hidden=false;document.body.style.overflow="hidden";close.focus();
  };
  return modal;
}
function enhanceImageEquations(){
  let count=0;
  document.querySelectorAll(".equation img").forEach(image=>{
    const equation=image.closest(".equation");
    if(!equation||equation.classList.contains("atpa-math-enhanced")||image.dataset.atpaMathZoom)return;
    image.dataset.atpaMathZoom="1";
    image.tabIndex=0;
    image.setAttribute("role","button");
    const alt=image.getAttribute("alt")||"原書數學公式";
    image.setAttribute("aria-label",alt+"，按一下放大");
    const configure=()=>{
      if(!image.naturalWidth||!image.naturalHeight)return;
      const svg=(image.src||"").startsWith("data:image/svg");
      const scale=svg?Math.max(1.25,Math.min(2.4,32/image.naturalHeight)):1;
      image.style.width=Math.min(1750,Math.round(image.naturalWidth*scale))+"px";
      image.style.maxWidth="none";
      image.style.height="auto";
      equation.classList.add("atpa-math-scrollable");
    };
    if(image.complete)configure();else image.addEventListener("load",configure,{once:true});
    const open=()=>getModal()._show(image);
    image.addEventListener("click",open);
    image.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
    if(!equation.querySelector(".atpa-math-zoom-hint")){
      const hint=document.createElement("span");hint.className="atpa-math-zoom-hint";
      hint.textContent="點公式放大 · 長公式可左右滑動";
      equation.append(hint);
    }
    count++;
  });
  return count;
}
function init(){
  const polished=typesetSelected();
  const images=enhanceImageEquations();
  document.documentElement.dataset.atpaMathPolished=String(polished);
  document.documentElement.dataset.atpaMathImages=String(images);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
