(function(){
  const d = window.KYOTO2027_DATA;
  const app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const mapUrl = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.jp || p.name);
  const gptPrompt = p => `請用繁體中文介紹「${p.jp || p.name}」。背景：2027年3月27日至4月5日京都賞櫻旅行，4人同行，住宿基地在四條河原町。請先查證最新公開資料，再說明：1.核心特色 2.歷史/建築/庭園背景 3.賞櫻特色與適合時段（如適用）4.建議停留時間 5.周邊順遊 6.若為餐廳，招牌、價位、訂位方式與注意事項。`;

  const toast = msg => {
    let el = document.getElementById('toast');
    if(!el){ el = document.createElement('div'); el.id='toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(window.__kyotoToast); window.__kyotoToast=setTimeout(()=>el.classList.remove('show'),2200);
  };

  app.innerHTML = `
    <header class="hero">
      <div class="eyebrow">KYOTO · SAKURA 2027</div>
      <h1>${esc(d.trip.title)}</h1>
      <p>${esc(d.trip.dates)} · 4 人 · 基地 ${esc(d.trip.base)}</p>
      <div class="pills"><span>🌸 賞櫻主線</span><span>🏨 ${esc(d.trip.hotelCandidates.join(' / '))}</span><span>🚶 哲學之道・木屋町・鴨川可多訪</span></div>
    </header>
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
          <button class="ask-gpt" data-i="${i}">🤖 問 ChatGPT 更多</button>
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

  document.querySelectorAll('.ask-gpt').forEach(btn=>btn.addEventListener('click',()=>{
    const p = d.places[Number(btn.dataset.i)];
    const prompt = gptPrompt(p);
    window.open('https://chatgpt.com/', '_blank', 'noopener');
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(prompt).then(()=>toast('問題已複製；到 ChatGPT 直接貼上即可')).catch(()=>window.prompt('請複製這段問題到 ChatGPT：', prompt));
    }else{
      window.prompt('請複製這段問題到 ChatGPT：', prompt);
    }
  }));
})();
