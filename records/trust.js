/* Public renderer; sensitive holdings and snapshots only arrive from private Drive. */
(function(){
'use strict';
const fmt=new Intl.NumberFormat('zh-TW',{maximumFractionDigits:0});
const nf=x=>fmt.format(Math.round(Number(x)||0));
const tw=x=>'NT$'+nf(x);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sum=(xs,k)=>xs.reduce((n,x)=>n+(Number(x[k])||0),0);
const date=x=>String(x||'').replace(/-/g,'/');
function series(data){
 const src=Array.isArray(data.snapshots)&&data.snapshots.length?data.snapshots:[{asOf:data.asOf,referencePrice:data.referencePrice,accounts:data.accounts,statementDate:data.statementDate}];
 const seen=new Set();
 return src.filter(s=>s&&/^\d{4}-\d{2}-\d{2}$/.test(s.asOf)&&Array.isArray(s.accounts)&&!seen.has(s.asOf)&&seen.add(s.asOf)).sort((a,b)=>a.asOf.localeCompare(b.asOf));
}
function accounts(s){return s.accounts.map(a=>{const hs=a.holdings||[];return {...a,shares:sum(hs,'shares'),value:sum(hs,'statementValue'),principal:sum(hs,'principal')+sum(hs,'subscription'),cash:sum(hs,'cash')}})}
function totals(s){const a=accounts(s);return {shares:sum(a,'shares'),value:sum(a,'value'),principal:sum(a,'principal')}}
function render(target,data){
 if(!data||data.schemaVersion!==1)throw Error('SCHEMA_INVALID');
 const history=series(data);if(!history.length)throw Error('NO_STATEMENTS');
 const latest=history.at(-1);
 function view(selectedDate,metric){
 const now=history.find(x=>x.asOf===selectedDate)||latest,acc=accounts(now),tt=totals(now);
 const last=history[history.indexOf(now)-1];
 const before=last?totals(last):null;
 const heads='<div class="trust-header"><h2>信託股票</h2><label>對帳月份 <select id="trustMonth">'+history.map(s=>'<option value="'+esc(s.asOf)+'" '+(s.asOf===now.asOf?'selected':'')+'>'+esc(s.asOf.slice(0,7).replace('-',' / '))+'</option>').join('')+'</select></label></div>';
 const subtitle='<p class="trust-date">截至 '+esc(date(now.asOf))+'　·　'+esc(data.stock||'股票')+'　·　參考股價 NT$'+Number(now.referencePrice||data.referencePrice).toFixed(2)+'</p>';
 const cards='<div class="trust-account-grid">'+acc.map((a,i)=>{
 const old=last?accounts(last).find(x=>x.id===a.id):null;
 const change=old?'<span class="trust-diff">較上月：市值 '+(a.value-old.value>=0?'+':'')+tw(a.value-old.value)+'；股數 '+(a.shares-old.shares>=0?'+':'')+nf(a.shares-old.shares)+' 股</span>':'<span class="trust-diff">首筆建檔月份</span>';
 return '<section class="trust-account-card"><h3>'+esc(a.name)+'</h3><div class="trust-card-grid"><div><small>持有股數</small><strong>'+nf(a.shares)+' <i>股</i></strong></div><div><small>參考市值</small><strong>'+tw(a.value)+'</strong></div></div><div class="trust-support"><span>累計本金 <b>'+tw(a.principal)+'</b></span><span>剩餘現金 <b>'+tw(a.cash)+'</b></span></div>'+change+(a.holdings.length>1?'<details><summary>提存分類明細</summary><div class="trust-detail">'+a.holdings.map(h=>'<div><span>'+esc(h.category)+'</span><b>'+nf(h.shares)+' 股</b><b>'+tw(h.statementValue)+'</b></div>').join('')+'</div></details>':'')+'</section>'
 }).join('')+'</div>';
 const columns=history.map(s=>({s,total:totals(s),a:accounts(s)}));
 const options=[['value','市值'],['shares','股數'],['principal','本金']];
 const max=Math.max(1,...columns.flatMap(x=>x.a.map(a=>a[metric])));
 const colors=['#08796c','#587da0','#a47c50','#8e75a6'];
 const chart='<section class="trust-history"><div class="trust-section-head"><h3>歷月變化</h3><div class="trust-switch" role="group" aria-label="趨勢指標">'+options.map(([id,label])=>'<button type="button" data-metric="'+id+'" class="'+(metric===id?'active':'')+'">'+label+'</button>').join('')+'</div></div><div class="trust-legend">'+acc.map((a,i)=>'<span><i style="background:'+colors[i%4]+'"></i>'+esc(a.name)+'</span>').join('')+'</div>'+
 (history.length===1?'<div class="trust-empty">目前僅有 '+esc(date(now.asOf))+' 一期資料。收到下一份月底對帳單後，即可比較兩期變化。</div>':
 '<div class="trust-chart" role="img" aria-label="各信託帳戶依月份之'+(metric==='value'?'市值':metric==='shares'?'股數':'本金')+'比較">'+columns.map(c=>'<div class="trust-chart-col">'+c.a.map((a,i)=>'<div class="trust-chart-bar" title="'+esc(a.name)+': '+nf(a[metric])+'" style="height:'+Math.max(a[metric]?2:0,a[metric]/max*100)+'%;background:'+colors[i%4]+'"></div>').join('')+'<span>'+esc(c.s.asOf.slice(2,7).replace('-','/'))+'</span></div>').join('')+'</div>')+
 '<div class="trust-table-wrap"><table><thead><tr><th>月份</th>'+acc.map(a=>'<th>'+esc(a.name)+'</th>').join('')+'<th>合計</th></tr></thead><tbody>'+columns.map(c=>'<tr class="'+(c.s.asOf===now.asOf?'selected':'')+'"><td>'+esc(c.s.asOf.slice(0,7))+'</td>'+acc.map(a=>{const match=c.a.find(x=>x.id===a.id);return '<td>'+ (metric==='shares'?nf(match?.shares||0)+' 股':tw(match?.[metric]||0))+'</td>'}).join('')+'<td>'+(metric==='shares'?nf(c.total.shares)+' 股':tw(c.total[metric]))+'</td></tr>').join('')+'</tbody></table></div></section>';
 const tail='<details class="trust-foot"><summary>本期對帳與計算說明</summary><p>市值採對帳單所列參考市值，包含剩餘現金。累計本金包含不同提存來源；市值增減可能同時來自股價變動、當月投入與股數變化，不能直接視為投資績效。</p><p>資料來源：'+esc(data.source||'每月信託對帳單')+'</p></details>';
 target.innerHTML='<div class="trust-page">'+heads+subtitle+cards+chart+tail+'</div>';
 target.querySelector('#trustMonth').addEventListener('change',e=>view(e.target.value,metric));
 target.querySelectorAll('[data-metric]').forEach(b=>b.addEventListener('click',()=>view(now.asOf,b.dataset.metric)));
 }
 view(latest.asOf,'value');
}
window.TrustStocks=Object.freeze({render});
})();