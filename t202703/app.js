(function(){
  const d = window.KYOTO2027_DATA;
  const app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const mapUrl = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.jp || p.name);
  const gptPrompt = p => `請用繁體中文介紹「${p.jp || p.name}」。背景：2027年3月27日至4月5日京都賞櫻旅行，4人同行，住宿基地在四條河原町。請先查證最新公開資料，再說明：1.核心特色 2.歷史/建築/庭園背景 3.賞櫻特色與適合時段（如適用）4.建議停留時間 5.周邊順遊 6.若為餐廳，招牌、價位、訂位方式與注意事項。`;
  const gptUrl = p => 'https://chatgpt.com/?q=' + encodeURIComponent(gptPrompt(p));
  const f = d.outboundFlight;

  app.innerHTML = `
    <header class="hero">
      <div class="eyebrow">KYOTO · SAKURA 2027</div>
      <h1>${esc(d.trip.title)}</h1>
      <p>${esc(d.trip.dates)} · 4 人 · 基地 ${esc(d.trip.base)}</p>
      <div class="pills"><span>🌸 賞櫻主線</span><span>🏨 ${esc(d.trip.hotelCandidates.join(' / '))}</span><span>🚶 哲學之道・木屋町・鴨川可多訪</span></div>
    </header>

    <section>
      <div class="section-title"><h2>去程航班</h2><small>已確認</small></div>
      <div class="flight-card">
        <div class="flight-head"><div><span class="flight-airline">${esc(f.airline)}</span><strong>${esc(f.flight)}</strong></div><span class="flight-date">${esc(f.date)}</span></div>
        <div class="flight-route">
          <div><b>${esc(f.departure)}</b><span>${esc(f.from)}</span></div>
          <div class="flight-arrow">✈︎</div>
          <div><b>${esc(f.arrival)}</b><span>${esc(f.to)}</span></div>
        </div>
        <div class="flight-meta">
          <span>${esc(f.fareFamily)}</span><span>${esc(String(f.passengers))} 人</span><span>託運 ${esc(f.checkedBaggage)}</span><span>座位 ${esc(f.seats)}</span><span>${esc(f.total)}</span><span>${esc(f.average)}</span>
        </div>
      </div>
    </section>

    <section><div class="section-title"><h2>每日骨架</h2><small>先保留彈性，之後依花況逐日填入</small></div><div class="days">${d.days.map((x,i)=>`<div class="day"><b>${x}</b><small>Day ${i+1} · 待排</small></div>`).join('')}</div></section>
    <section><div class="section-title"><h2>已鎖定地點</h2><small>站內簡介 + ChatGPT 延伸 + Google Maps</small></div><div class="grid">${d.places.map((p,i)=>`
      <article class="card">
        <div class="type">${esc(p.type)}</div><h3>${esc(p.jp || p.name)}</h3>
        <p class="note">${esc(p.note)}</p>
        <div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
        <div class="actions"><button class="gpt intro-toggle" data-i="${i}" aria-expanded="false">✨ GPT 簡介</button><a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div>
        <div class="intro-panel" id="intro-${i}" hidden>
          <div class="intro-title">${esc(p.jp || p.name)}｜行程簡介</div>
          <div class="intro-text">${esc(p.intro || p.note)}</div>
          <a class="ask-gpt" href="${gptUrl(p)}" target="_blank" rel="noopener">🤖 問 ChatGPT 更多</a>
        </div>
      </article>`).join('')}</div></section>
    <section><div class="section-title"><h2>待確認</h2></div>${d.pending.map(x=>`<div class="pending">${esc(x)}</div>`).join('')}</section>
  `;

  document.querySelectorAll('.intro-toggle').forEach(btn=>btn.addEventListener('click',()=>{
    const i = btn.dataset.i;
    const panel = document.getElementById('intro-'+i);
    const opening = panel.hidden;
    panel.hidden = !opening;
    btn.setAttribute('aria-expanded', opening ? 'true':'false');
    btn.textContent = opening ? '收起簡介' : '✨ GPT 簡介';
  }));
})();
