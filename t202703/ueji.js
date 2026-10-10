(function uejiPage(){
const D=window.KYOTO2027_UEJI,app=document.getElementById('uejiApp');if(!D||!app){if(app)app.textContent='庭園資料載入失敗，請重新整理。';return;}
const e=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tabs=[['all','全部庭園'],['ticket','付費／免費參觀'],['eat','用餐／住宿'],['limited','限定開放'],['research','歸屬待考'],['sakura','櫻花串遊']];
const walk='HOTEL ARU KYOTO 三条木屋町通り';
const map=(jp)=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(jp+' 京都');
const transit=(jp)=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(walk)+'&destination='+encodeURIComponent(jp+' 京都')+'&travelmode=transit';
const gpt=(p)=>'https://chatgpt.com/?q='+encodeURIComponent('以台灣繁體中文深入介紹京都「'+p[0]+'（'+p[1]+'）」，重點是七代小川治兵衛與此庭園的歷史、作庭歸屬、建築、庭園流派、可欣賞的池泉石組、日式與西式元素、現今參觀／餐飲／訂位、從 HOTEL ARU KYOTO 三条木屋町通り 前往的動線，以及2027/3/27–4/5四人旅遊櫻花品種與觀賞位置；優先染井吉野櫻，確認資料來源，並提供圖片。');
app.innerHTML=`
<header class="ueji-hero">
<a class="ueji-back" href="index.html">← 花見京旅首頁</a>
<div class="eyebrow">KYOTO · OG AWA JIHEI VII · GARDEN WALK</div>
<h1>第七代小川治兵衛<br>京都庭園專區</h1>
<div class="ueji-jp" lang="ja">七代目 小川治兵衞（おがわ じへえ） · 1860–1933</div>
<p>循著京都明治造園家的足跡，從琵琶湖疏水、東山借景與水聲，走進近代政要的別墅、今日開放的名勝庭園，以及能預約用餐的歷史宅邸。特別為 2027/3/27–4/5 四人賞櫻旅行整理。</p>
<div class="ueji-pills"><span>🌿 明治造園</span><span>🌸 染井吉野・枝垂櫻</span><span>🏛️ 幕末・近代史</span><span>🍵 庭園料理</span><span>📍 地圖導航</span></div>
<nav class="ueji-nav"><a href="#ueji-list">全部庭園清單</a><a href="#ueji-route">2027 參觀動線</a><a href="#ueji-sources">資料來源</a></nav>
</header>
<section class="ueji-section"><h2>先認識小川治兵衛：屋號與襲名</h2>
<div class="ueji-note"><strong>「植治（うえじ）」是小川造園世家的屋號；「小川治兵衛」則是歷代家主襲用的名字。</strong>第七代原名源之助（1860–1933），迎娶第六代長女後承繼家業。他在明治時代以活水、草坪與東山借景改變日本庭園。依家族官方資料，截至 2026 年 10 月正式襲名已傳至第十一代。</div>
<div class="ueji-three">
<article><b>寶曆年間｜1751–1763</b><h3>小川家的起點</h3><p>初代由武士轉而從事庭園營造，「小川治兵衛」成為世代繼承的名跡。</p></article>
<article><b>明治時代｜1868–1912</b><h3>琵琶湖疏水的革命</h3><p>疏水工程將充沛水源帶到岡崎、南禪寺；七代用自然溪流、池與瀑布取代封閉的觀賞框架。</p></article>
<article><b>今天｜公開與保存</b><h3>從私家別墅到公共名園</h3><p>部分成為京都市文化財、公園、博物館或餐飲飯店；另一些僅能預約或特殊公開。</p></article>
</div>
<h2 style="margin-top:24px">觀察庭園的三個關鍵</h2>
<div class="ueji-three">
<article><b>🌊 活水</b><p>看瀑布、池泉與淺溪如何模仿真正的自然水系；無鄰菴尤其典型。</p></article>
<article><b>⛰️ 借景</b><p>從屋內緣側看出去，遠處東山與庭園融成同一個畫面。</p></article>
<article><b>🌱 草坪與開放感</b><p>明亮草坪搭配溪流，讓日本近代庭園呈現不同於傳統枯山水的新視覺語言。</p></article>
</div>
</section>
<section class="ueji-section" id="ueji-route"><h2>2027 賞櫻，這樣走最合理</h2>
<div class="ueji-routes">
<article><h3>🌿 南禪寺・岡崎｜半天至一天</h3><p>蹴上傾斜鐵道（染井吉野）→ 無鄰菴 → 對龍山莊 → 南禪寺 → 白河院、櫻鶴苑或八千代午餐 → 平安神宮神苑。最後一站以紅枝垂櫻著名。<br><a href="https://www.google.com/maps/dir/?api=1&origin=蹴上インクライン&destination=平安神宮&waypoints=無鄰菴%7C對龍山莊%7C南禅寺&travelmode=walking" target="_blank" rel="noopener noreferrer">開啟步行地圖 ↗</a></p></article>
<article><h3>🌸 祇園・東山｜下午＋夜櫻</h3><p>並河靖之七寶紀念館 → 青蓮院 → 八坂神社 → 圓山公園。既能看七代早期庭園，也有染井吉野櫻與祇園枝垂櫻；晚間燈光依 2027 年公告。<br><a href="https://www.google.com/maps/dir/?api=1&origin=並河靖之七宝記念館&destination=円山公園&waypoints=青蓮院%7C八坂神社&travelmode=walking" target="_blank" rel="noopener noreferrer">開啟步行地圖 ↗</a></p></article>
<article><h3>🏯 御室｜寺院庭園與晚開櫻</h3><p>仁和寺御所庭園 → 御室櫻 → 龍安寺。御室櫻偏晚開；能否在旅行期間欣賞盛開，仍須等 2027 年花況。</p></article>
<article><h3>🔎 選擇規則</h3><p>喜歡染井吉野櫻，優先把疏水沿岸、蹴上傾斜鐵道與圓山公園加入行程。無鄰菴和對龍山莊是造園史重點；平安神宮神苑是紅枝垂櫻重點。</p></article>
</div>
<div class="ueji-note">2027 年詳細開花、夜櫻活動、公開日、票價與座席預約尚未公布；卡片內如有金額均註明 2026 年參考。店家提供消費服務，不代表所有庭園區域都可自由進入。</div>
</section>
<section class="ueji-section" id="ueji-list">
<h2>庭園實地巡禮名單</h2><p>${D.places.length} 處，按參觀、餐飲、特殊公開與史料確定性區分。每筆附日文正式名稱、歷史、2027賞櫻參考、官方資訊、Google Maps、從 HOTEL ARU 出發的交通與 GPT 深度介紹。</p>
<div class="ueji-tools"><label class="sr-only" for="uejiSearch">搜尋庭園</label><input id="uejiSearch" type="search" placeholder="搜尋庭園、人物、櫻花、京料理、地區…" autocomplete="off">
<div class="ueji-buttons">${tabs.map(t=>`<button type="button" data-filter="${t[0]}" aria-pressed="false">${t[1]}</button>`).join('')}</div></div>
<div id="uejiCount" class="ueji-count" aria-live="polite"></div><div class="ueji-grid" id="uejiGrid"></div>
</section>
<section class="ueji-section"><h2>那些暫時無法自由參觀的七代作品</h2><p>清風莊（西園寺公望舊邸）、何有莊（稻畑勝太郎舊邸）、住友家有芳園等，具有七代作庭歷史，但尚無可確認的常態一般公開管道。南禪寺周邊「碧雲莊」「清流亭」常被混算為七代作品；小川家官方將兩者列在<strong>第八代小川保太郎</strong>的作品紀錄中。</p></section>
<section class="ueji-section" id="ueji-sources"><h2>主要資料來源</h2>
<div class="ueji-sources">
<a href="https://www.ogawajihei.jp/pages/rekidai_garden.htm" target="_blank" rel="noopener noreferrer">小川家造園植治・歷代作庭錄</a> ／
<a href="https://ueji.jp/" target="_blank" rel="noopener noreferrer">御庭植治・歷代人物</a> ／
<a href="https://www.kyobunka.or.jp/learn/learn_garden/1910.php" target="_blank" rel="noopener noreferrer">京都市文化觀光資源保護財團・神苑史</a> ／
<a href="https://kunishitei.bunka.go.jp/bsys/maindetails/401/00004124" target="_blank" rel="noopener noreferrer">文化廳・仁和寺御所庭園</a> ／
<a href="https://tairyu-sanso.jp/" target="_blank" rel="noopener noreferrer">對龍山莊</a> ／
<a href="https://www.kyoto-kankou.or.jp/info_search/8203" target="_blank" rel="noopener noreferrer">京都府觀光聯盟・白河院</a> ／
<a href="https://kyoto-maruyama-park.jp/" target="_blank" rel="noopener noreferrer">圓山公園</a>。
</div>
<p class="ueji-end">查證基準：2026 年 10 月 10 日。本頁為公開旅遊指南，不包含私人訂單、PNR、座位、付款等資訊。</p>
</section>`;
function item(p){
const [name,jp,area,kind,relation,year,history,point,bloom,official,source]=p;
const cautious=/據稱|有爭議|待考|待核|相關|宣稱/.test(relation);
return `<article class="ueji-card"><div class="ueji-cardhead"><div><div class="ueji-area">${e(area)}</div><h3>${e(name)}</h3><div class="ueji-jp" lang="ja">${e(jp)}</div></div><span class="ueji-status ${cautious?'caution':''}">${e(relation)}</span></div>
<p>${e(history)}</p><div class="ueji-meta"><span>${{free:'免費公園',ticket:'付費／開放',eat:'餐飲／住宿',limited:'限定／洽詢',research:'歸屬待考'}[kind]}</span><span>${e(year)}</span></div>
<div class="ueji-bottom"><p><b>細看：</b>${e(point)}</p><p><b>櫻花：</b>${e(bloom)}</p></div>
<div class="ueji-actions"><a class="maps" href="${map(jp)}" target="_blank" rel="noopener noreferrer">📍 Google Maps</a><a class="route" href="${transit(jp)}" target="_blank" rel="noopener noreferrer">🚆 從 ARU 前往</a><a class="official" href="${e(official)}" target="_blank" rel="noopener noreferrer">🌐 官方網站</a><a href="${gpt(p)}" target="_blank" rel="noopener noreferrer">✨ GPT 圖文介紹</a>${source!==official?`<a class="official" href="${e(source)}" target="_blank" rel="noopener noreferrer">📜 歷史來源</a>`:''}</div>
</article>`;
}
const q=new URLSearchParams(location.search).get('filter');let selected=tabs.some(t=>t[0]===q)?q:'all';
const input=document.getElementById('uejiSearch'),buttons=[...document.querySelectorAll('[data-filter]')];
function render(){
const search=input.value.trim().toLowerCase();
const list=D.places.filter(p=>{
let matching=selected==='all'||(selected==='ticket'?(p[3]==='ticket'||p[3]==='free'):selected==='sakura'?/染井吉野|枝垂櫻|御室櫻/.test(p[8]):p[3]===selected);
return matching&&(!search||p.join(' ').toLowerCase().includes(search));
});
document.getElementById('uejiCount').textContent=`顯示 ${list.length} / ${D.places.length} 處・資料更新：${D.asOf}`;
document.getElementById('uejiGrid').innerHTML=list.length?list.map(item).join(''):'<div class="ueji-empty">沒有符合條件的資料。請換分類或搜尋詞。</div>';
buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===selected)));
}
buttons.forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.filter;history.replaceState(null,'',location.pathname+(selected==='all'?'':'?filter='+encodeURIComponent(selected))+'#ueji-list');render();}));
input.addEventListener('input',render);render();
})();
