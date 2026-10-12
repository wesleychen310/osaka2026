/* GitHub-hosted presentation only. Individual account data comes from
 * a private Google Drive document exported by the signed-in browser. */
(function(){
'use strict';
function esc(value){return String(value??'').replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]})}
const n=new Intl.NumberFormat('zh-TW',{maximumFractionDigits:0});
const d=new Intl.NumberFormat('zh-TW',{minimumFractionDigits:2,maximumFractionDigits:2});
function money(v){return 'NT$'+n.format(Math.round(v))}
function pct(v){return (v*100).toFixed(2)+'%'}
function sum(items,key){return items.reduce(function(t,x){return t+Number(x[key]||0)},0)}
function one(v){return n.format(v)}
function date(s){return String(s||'').replace(/-/g,'/')}
function render(target,data){
if(!data||data.schemaVersion!==1||!Array.isArray(data.accounts)||!Number.isFinite(data.referencePrice)||data.referencePrice<=0){throw Error('SCHEMA_INVALID')}
const rows=data.accounts.flatMap(function(a){return a.holdings.map(function(h){return Object.assign({accountName:a.name},h)})});
if(!rows.length||rows.some(function(h){return !Number.isFinite(h.shares)||!Number.isFinite(h.principal)||!Number.isFinite(h.cash)||!Number.isFinite(h.statementValue)||Math.abs(Math.round(h.shares*data.referencePrice+h.cash)-h.statementValue)>1})){throw Error('AMOUNT_MISMATCH')}
const principal=sum(rows,'principal')+sum(rows,'subscription'),shares=sum(rows,'shares'),cash=sum(rows,'cash'),value=sum(rows,'statementValue'),profit=value-principal;
const relative=principal?profit/principal:0;
let pieces=[];
pieces.push('<div class="trust-page">');
pieces.push('<div class="trust-hero"><div><div class="trust-kicker">EMPLOYEE SHARE TRUST</div><h2>'+esc(data.title||'信託股票')+'</h2><p class="caption">'+esc(data.institution)+'・'+esc(data.stock)+'・結算日 '+esc(date(data.asOf))+'</p></div><span class="trust-pill">報表參考股價 NT$'+d.format(data.referencePrice)+'</span></div>');
const metrics=[
['參考總市值',money(value),'含股票及剩餘現金','feature'],
['帳面增值',money(profit),'參考報酬率 '+pct(relative),''],
['持有股數',one(shares)+' 股','兩份信託對帳單合計',''],
['累計本金',money(principal),'含不同提存來源',''],
['剩餘現金',money(cash),'已計入參考市值','']
];
pieces.push('<div class="trust-stats">'+metrics.map(function(m){return '<article class="trust-stat '+m[3]+'"><p class="label">'+m[0]+'</p><div class="value">'+m[1]+'</div><p class="context">'+m[2]+'</p></article>'}).join('')+'</div>');
pieces.push('<section class="section"><div class="section-head"><h3>各信託帳戶</h3><span class="mini">截至 '+esc(date(data.asOf))+'｜按報表分類</span></div><div class="account-stack">');
pieces.push(data.accounts.map(function(a){
const aPrincipal=sum(a.holdings,'principal')+sum(a.holdings,'subscription'),aValue=sum(a.holdings,'statementValue'),aShares=sum(a.holdings,'shares');
return '<article class="trust-account"><div class="head"><h4>'+esc(a.name)+'</h4><span class="mini">'+esc(a.statement||'')+'</span></div>'+
'<div class="amount">'+money(aValue)+'</div><div class="mini">占總市值 '+pct(aValue/value)+'</div><div class="bar"><div class="fill" style="width:'+Math.min(100,aValue/value*100).toFixed(2)+'%"></div></div>'+
'<div class="pair"><span>本金</span><strong>'+money(aPrincipal)+'</strong></div><div class="pair"><span>股數</span><strong>'+one(aShares)+' 股</strong></div><div class="pair"><span>參考報酬率</span><strong class="positive">'+pct(aPrincipal?(aValue-aPrincipal)/aPrincipal:0)+'</strong></div></article>'}).join(''));
pieces.push('</div></section>');
pieces.push('<section class="section"><div class="section-head"><h3>信託持股明細</h3><span class="mini">表格可左右滑動</span></div><div class="table-scroll"><table><thead><tr><th>提存類型</th><th>累計本金</th><th>股數</th><th>剩餘現金</th><th>參考市值</th><th>參考報酬率</th></tr></thead><tbody>');
pieces.push(rows.map(function(h){const p=h.principal+Number(h.subscription||0);return '<tr><td>'+esc(h.category)+'</td><td>'+money(p)+'</td><td>'+one(h.shares)+'</td><td>'+money(h.cash)+'</td><td><strong>'+money(h.statementValue)+'</strong></td><td>'+pct(p?(h.statementValue-p)/p:0)+'</td></tr>'}).join(''));
pieces.push('</tbody><tfoot><tr><td>合計</td><td>'+money(principal)+'</td><td>'+one(shares)+'</td><td>'+money(cash)+'</td><td>'+money(value)+'</td><td>'+pct(relative)+'</td></tr></tfoot></table></div></section>');
pieces.push('<section class="section"><div class="section-head"><h3>股價情境試算</h3><span class="mini">只在本頁試算，不會改動私人資料</span></div><div class="trust-scenario"><div><label for="trustPrice">假設每股價格（元）</label><input id="trustPrice" inputmode="decimal" type="number" min="0.01" step="0.05" value="'+esc(data.referencePrice)+'"></div><button type="button" id="trustReset">還原報表股價</button></div><div class="trust-scenario-out" aria-live="polite"><div class="mini">假設總市值</div><div id="trustScenarioValue" class="answer">'+money(value)+'</div><div id="trustScenarioDelta" class="delta">相較報表：NT$0</div></div><p class="mini">公式：總股數 × 假設股價 ＋ 剩餘現金；未考慮費用、稅負及其他公司行動。</p></section>');
if(Array.isArray(data.activity)&&data.activity.length){
pieces.push('<section class="section"><div class="section-head"><h3>當期提存與買入</h3><span class="mini">資料以對帳單為準</span></div><div class="table-scroll"><table><thead><tr><th>日期／類別</th><th>提存</th><th>認購金額</th><th>股數</th><th>買入單價</th></tr></thead><tbody>');
pieces.push(data.activity.map(function(x){return '<tr><td>'+esc(date(x.date))+'　'+esc(x.category)+'</td><td>'+money(x.contribution)+'</td><td>'+money(x.subscriptionCost)+'</td><td>'+one(x.shares)+' 股</td><td>'+d.format(x.purchasePrice)+'</td></tr>'}).join(''));
pieces.push('</tbody></table></div>');
if(Array.isArray(data.fees)&&data.fees.length){pieces.push('<div class="fee">信託管理費：'+data.fees.map(function(f){return esc(f.category)+' '+money(f.amount)}).join('；')+'；合計 '+money(sum(data.fees,'amount'))+'。</div>')}
pieces.push('</section>');
}
pieces.push('<section class="section"><div class="section-head"><h3>計算基礎與來源</h3><span class="mini">報表製作日 '+esc(date(data.statementDate))+'</span></div><p class="mini">'+esc(data.source||'')+'</p><ul class="trust-notes">'+(data.notes||[]).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul><p class="mini">私人資料更新日期：'+esc(date(data.lastUpdated))+'</p></section>');
pieces.push('</div>');
target.innerHTML=pieces.join('');
const input=target.querySelector('#trustPrice'),output=target.querySelector('#trustScenarioValue'),delta=target.querySelector('#trustScenarioDelta');
function update(){const p=Number(input.value);if(!Number.isFinite(p)||p<=0){output.textContent='請輸入有效股價';delta.textContent='';return}const estimate=Math.round(shares*p+cash);output.textContent=money(estimate);const diff=estimate-value;delta.textContent='相較報表：'+(diff>0?'+':'')+money(diff)+'；假設帳面增值 '+money(estimate-principal)}
input.addEventListener('input',update);
target.querySelector('#trustReset').addEventListener('click',function(){input.value=String(data.referencePrice);update()});
}
window.TrustStocks=Object.freeze({render:render});
})();
