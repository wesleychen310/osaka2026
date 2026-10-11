(function(){
  function safe(x){return String(x == null ? '' : x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function maps(q){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);}
  function dateLabel(iso){var a=iso.split('-');return Number(a[1])+'/'+Number(a[2]);}
  function dateText(iso){return iso.replace(/-/g,'/');}
  function trainRow(pair,label,klass){
    return '<div class="plan-train-row '+(klass||'')+'"><span class="plan-train-name">'+safe(label)+'</span><b class="plan-train-clock">'+safe(pair[0])+' <span aria-hidden="true">→</span> '+safe(pair[1])+'</b></div>';
  }
  function trainGroup(g,i){
    var earlier=(g.earlier||[]).map(function(v,j){return trainRow(v,'可提早班次 '+(j+1),'plan-train-earlier');}).join('');
    var backups=(g.backups||[]).map(function(v,j){return trainRow(v,'延誤備案 '+(j+1),'plan-train-backup');}).join('');
    return '<details class="plan-train-group" '+(i===0?'open':'')+'>'+
      '<summary><span class="plan-train-summary-title">'+safe(g.title)+'</span><span class="plan-train-main">'+safe(g.main[0])+' → '+safe(g.main[1])+'</span><span class="plan-expand-hint">展開所有備案⌄</span></summary>'+
      '<div class="plan-train-content"><p><b>路線與方向：</b>'+safe(g.route)+'</p><p><b>上車站：</b>'+safe(g.from)+'　<b>下車站：</b>'+safe(g.to)+'</p>'+
      trainRow(g.main,'預定班次','plan-train-primary')+earlier+backups+
      '<p class="plan-train-note">'+safe(g.note)+'</p></div></details>';
  }
  window.KYOTO2027_RENDER_ITINERARY=function(days){
    var plans=window.KYOTO2027_ITINERARIES||[];
    var occupied={};plans.forEach(function(p){occupied[p.date]=p;});
    var dateStrip=days.map(function(s,i){
      var z=s.split('/'), iso='2027-'+String(z[0]).padStart(2,'0')+'-'+String(z[1]).padStart(2,'0'),p=occupied[iso];
      return p?'<a class="plan-day assigned" href="#itinerary-'+safe(p.id)+'"><strong>'+safe(s)+'</strong><small>Day '+(i+1)+'</small><em>已暫排・大津</em></a>':
        '<div class="plan-day"><strong>'+safe(s)+'</strong><small>Day '+(i+1)+'</small><em>待安排</em></div>';
    }).join('');
    var cards=plans.map(function(p){
      var tags=p.tags.map(function(t){return '<span>'+safe(t)+'</span>';}).join('');
      var stops=p.spots.map(function(x){
        return '<div class="plan-spot"><div class="plan-spot-time">'+safe(x.time)+'</div><div class="plan-spot-detail"><b>'+safe(x.name)+'</b><span class="plan-spot-kind">'+safe(x.type)+'</span><p>'+safe(x.desc)+'</p><a target="_blank" rel="noopener" href="'+maps(x.map)+'">📍 Google Maps</a></div></div>';
      }).join('');
      var timeline=p.timeline.map(function(x){
        return '<li><time>'+safe(x.time)+'</time><div><b>'+safe(x.title)+'</b><p>'+safe(x.detail)+'</p></div></li>';
      }).join('');
      var changes=p.adjustment.map(function(x){return '<div class="plan-rule"><b>'+safe(x.when)+'</b><span>'+safe(x.action)+'</span></div>';}).join('');
      var sources=p.sourceLinks.map(function(x){return '<a href="'+safe(x.url)+'" target="_blank" rel="noopener">'+safe(x.label)+' ↗</a>';}).join('');
      var choices=days.filter(function(v){return v!==dateLabel(p.date);}).map(function(v){return '<option value="'+safe(v)+'">'+safe(v)+'</option>';}).join('');
      return '<article class="plan-card" id="itinerary-'+safe(p.id)+'">'+
        '<div class="plan-card-top"><div><span class="plan-kicker">DAY '+safe(days.indexOf(dateLabel(p.date))+1)+' ・ '+dateText(p.date)+'（四）</span><h3>'+safe(p.title)+'</h3><p>'+safe(p.subtitle)+'</p></div><span class="plan-status">'+safe(p.state)+'</span></div>'+
        '<div class="plan-overview"><div><small>飯店出發</small><b>'+safe(p.leave)+'</b></div><div><small>回飯店</small><b>'+safe(p.return)+'</b></div><div><small>主要行程</small><b>石山寺 → 膳所 → 三井寺 → 疏水</b></div></div>'+
        '<div class="plan-tags">'+tags+'</div>'+
        '<div class="plan-warning"><b>班次版本與日期彈性</b><p>'+safe(p.notice)+'</p></div>'+
        '<nav class="plan-mini-nav" aria-label="當日行程快速跳轉"><a href="#plan-spots-'+safe(p.id)+'">賞櫻站點</a><a href="#plan-trains-'+safe(p.id)+'">指定班次與備案</a><a href="#plan-clock-'+safe(p.id)+'">全天時間軸</a><a href="#plan-flex-'+safe(p.id)+'">延誤／換日</a></nav>'+
        '<section class="plan-subsection" id="plan-spots-'+safe(p.id)+'"><h4>🌸 賞櫻順序與各站停留</h4><div class="plan-spots">'+stops+'</div></section>'+
        '<section class="plan-subsection" id="plan-trains-'+safe(p.id)+'"><h4>🚃 交通：預定列車＋錯過後三班</h4><p class="plan-subheading">點選每一段可展開上車站、方向、確切班次、到站時刻及延誤處理。下列時間為 2026 平日參考。</p><div class="plan-trains">'+p.trains.map(trainGroup).join('')+'</div></section>'+
        '<section class="plan-subsection" id="plan-clock-'+safe(p.id)+'"><details class="plan-timeline"><summary>🕒 展開全天逐時行程（含步行、午餐、轉乘）</summary><ol>'+timeline+'</ol></details></section>'+
        '<section class="plan-subsection" id="plan-flex-'+safe(p.id)+'"><h4>🔁 延誤與花況換日規則</h4>'+changes+
          '<div class="plan-swap"><label for="plan-swap-target-'+safe(p.id)+'">若花況需換到其他日期：</label><div class="plan-swap-controls"><select id="plan-swap-target-'+safe(p.id)+'" data-plan-swap-select="'+safe(p.id)+'"><option value="">選擇新日期</option>'+choices+'</select><button type="button" data-plan-swap-copy="'+safe(p.id)+'">複製換日指令</button></div><small>此功能會複製給 ChatGPT 的調整指令；尚未直接改動公開網站，也不會改動其他日子的行程。請在對話中貼上，由我重新核對新日期的班次。</small><p class="plan-copy-status" id="plan-copy-status-'+safe(p.id)+'" aria-live="polite"></p></div>'+
        '</section>'+
        '<details class="plan-sources"><summary>官方資訊與列車時刻資料來源</summary><div>'+sources+'</div></details>'+
      '</article>';
    }).join('');
    return '<section class="itinerary-section" id="itinerary"><div class="section-title"><h2>🗓️ 每日行程・賞櫻計畫</h2><small>首頁優先｜已排日可直接展開</small></div><p class="plan-section-lead">依花況安排的模組式行程；4/1 先暫排滋賀大津，未來可整日與其他日期交換。</p><div class="plan-days">'+dateStrip+'</div>'+cards+'</section>';
  };
  window.KYOTO2027_BIND_ITINERARY=function(){
    document.querySelectorAll('[data-plan-swap-copy]').forEach(function(button){
      button.addEventListener('click',function(){
        var id=button.getAttribute('data-plan-swap-copy');
        var select=document.querySelector('[data-plan-swap-select="'+id+'"]');
        var status=document.getElementById('plan-copy-status-'+id);
        if(!select || !select.value){if(status)status.textContent='請先選擇要改到哪一天。';return;}
        var plan=(window.KYOTO2027_ITINERARIES||[]).find(function(p){return p.id===id;});
        if(!plan)return;
        var message='請更新我的「花見京旅」GitHub 網站：把行程模組「'+plan.title+'」（ID: '+plan.id+'）由原暫定 '+dateText(plan.date)+' 整日改排到 2027/'+select.value+'。請保留原本所有景點、行程資訊及交通備案，並與該日原行程適當交換；重新核對新日期平日／假日時刻表及店家營業時間，更新網站後驗證手機版。';
        function done(){if(status)status.textContent='已複製換日指令；請貼回 ChatGPT 對話。';}
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(message).then(done).catch(function(){window.prompt('複製以下指令：',message);if(status)status.textContent='請複製顯示的指令。';});
        }else{window.prompt('複製以下指令：',message);if(status)status.textContent='請複製顯示的指令。';}
      });
    });
  };
})();
