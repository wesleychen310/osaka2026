/* Presentation only: repeat English inside each original/translation reading version.
   The original Japanese, Chinese translations and English remain in private Drive. */
(() => {
  'use strict';
  const $ = (tag, cls = '', text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const sceneNumber = id => /^scene-0(?:0[1-9]|[1234567][0-9]|8[0-2])$/.test(id || '');
  const headingTranslations = {
    '場面設定':'情境設定',
    '練習のポイント':'練習重點',
    'STEP 1｜キーフレーズ':'STEP 1｜關鍵句型',
    'STEP 2｜モデル会話':'STEP 2｜示範對話',
    'STEP 3｜入国カード':'STEP 3｜入境卡',
    'STEP 3｜説明準備メモ':'STEP 3｜說明準備筆記',
    'STEP 3｜実践トレーニング':'STEP 3｜實戰練習'
  };
  function twoLabels(el, ja, zh) {
    if (!ja || !zh) return;
    el.classList.add('reading-bilingual-title');
    const left = $('span','reading-title-ja',ja), right = $('span','reading-title-zh',zh);
    left.lang = 'ja'; right.lang = 'zh-Hant-TW';
    el.replaceChildren(left,right);
  }
  function splitLabel(raw) {
    const text = raw.trim();
    const step = text.match(/^(STEP\s*[123]｜[^｜]+)｜(STEP\s*[123]｜.+)$/);
    if (step) return [step[1], step[2]];
    const pos = text.indexOf('｜');
    if (pos >= 0) return [text.slice(0,pos).trim(),text.slice(pos+1).trim()];
    return [text, headingTranslations[text] || ''];
  }
  function localizeHeadings(scene) {
    const title = scene.querySelector(':scope > .chapter-title h2');
    if (title) {
      const match = title.textContent.trim().match(/^(SCENE\s*\d{3}｜)([^｜]+)｜(.+)$/);
      if (match) twoLabels(title,match[1]+match[2],match[1]+match[3]);
    }
    const part = scene.querySelector(':scope > .chapter-title > span');
    if (part && part.textContent.includes('日常')) {
      const src = part.textContent;
      const ja = src.replace('日常會話篇','日常会話編');
      const zh = src.replace('日常会話編','日常會話篇');
      twoLabels(part,ja,zh);
    }
    scene.querySelectorAll(':scope > h3').forEach(el => {
      const jp=el.querySelector('.heading-ja'), cn=el.querySelector('.heading-zh');
      const labels=jp&&cn?[jp.textContent,cn.textContent]:splitLabel(el.textContent);
      twoLabels(el,...labels);
    });
    scene.querySelectorAll('.feedback > strong').forEach(el=>{
      let labels=splitLabel(el.textContent);
      if(!labels[1]&&labels[0].includes('振り返り'))labels=[labels[0],labels[0].replace('振り返り','與 AI 回顧')];
      const step=labels[0].match(/^(STEP\s*[123]\s*·\s*)/);
      if(step&&labels[1]&&!labels[1].startsWith('STEP'))labels[1]=step[1]+labels[1];
      twoLabels(el,...labels);
    });
    const caption=scene.querySelector(':scope > .source-caption');
    if(caption && scene.id==='scene-001'){
      twoLabels(caption,'原書 p.025「機内食のメニュー」','原書 p.025「機內餐菜單」（英文照原書保留）');
    }
  }
  function setPanelLabel(block, lang) {
    // These captions were added by the electronic editor in Chinese; keep them in the Chinese version only.
    if(lang==='ja'){
      const caption=block.querySelector(':scope > .caption');
      if(caption)caption.hidden=true;
      const concourse=block.querySelector('.station-concourse');
      if(concourse)concourse.textContent=concourse.textContent.split(' · ')[0];
    }
    const head=block.querySelector(':scope > header');
    if(!head) return;
    const raw=head.textContent.trim();
    const parts=splitLabel(raw);
    if(parts[0]!==raw && parts[1]){head.textContent=lang==='ja'?parts[0]:parts[1];return;}
    if(/^ENGLISH\b/.test(raw)){head.textContent=lang==='ja'?'ENGLISH · モデル会話':'ENGLISH · 原書英文';return;}
    const prefix=raw.match(/^([A-Z][A-Z ]{2,})\s*·/);
    if(prefix){head.textContent=prefix[1].trim();return;}
    if(raw.includes('駅構内の俯瞰図'))head.textContent=lang==='ja'?'駅構内の俯瞰図':'車站配置圖';
    else if(raw.includes('電光掲示板'))head.textContent=lang==='ja'?'電光掲示板':'電子看板';
  }
  function twinPanels(element, customized) {
    const wrap=$('div','reading-twins');
    for(const lang of ['ja','zh']){
      const panel=element.cloneNode(true);
      panel.classList.add('reading-version');
      panel.dataset.readingLang=lang;
      panel.lang=lang==='ja'?'ja':'zh-Hant-TW';
      if(panel.hasAttribute('id'))panel.removeAttribute('id');
      if(customized)customized(panel,lang);
      wrap.append(panel);
    }
    element.replaceWith(wrap);
  }
  function keyphrases(scene) {
    scene.querySelectorAll('.keyphrase').forEach(key=>{
      const english=key.querySelector(':scope > p[lang="en"]');
      const gloss=key.querySelector(':scope > .pair');
      if(!english||!gloss)return;
      const ja=gloss.querySelector('.original'),zh=gloss.querySelector('.translation');
      if(!ja||!zh)return;
      const wrap=$('div','reading-twins reading-keyphrase-twins');
      for(const lang of ['ja','zh']){
        const panel=$('div','reading-version reading-keyphrase');
        panel.dataset.readingLang=lang;
        panel.append(english.cloneNode(true));
        const copy=(lang==='ja'?ja:zh).cloneNode(true);
        copy.className='reading-gloss';
        panel.append(copy);
        wrap.append(panel);
      }
      key.replaceChildren(wrap);
    });
  }
  function preserveSourceEnglish(scene) {
    scene.querySelectorAll('.pair').forEach(pair=>{
      const original=pair.querySelector(':scope > .original');
      const translated=pair.querySelector(':scope > .translation');
      if(!original||!translated)return;
      if(original.textContent.startsWith('Task：')&&translated.textContent.startsWith('任務：')){
        translated.textContent='Task：'+translated.textContent.slice('任務：'.length);
      }
      // A pre-existing SCENE 005 gloss lost the source's parenthesized English term.
      // Restore the exact English without modifying the private Google Drive original.
      if(scene.id==='scene-005'&&original.textContent.includes('（city center）')&&
         translated.textContent.includes('市中心')&&!translated.textContent.includes('city center')){
        translated.textContent=translated.textContent.replace('市中心','市中心（city center）');
      }
    });
  }
  function localize(scene) {
    if(scene.dataset.readingTwins==='ready')return;
    preserveSourceEnglish(scene);
    localizeHeadings(scene);
    keyphrases(scene);
    scene.querySelectorAll('.english-block').forEach(block=>twinPanels(block,(panel,lang)=>setPanelLabel(panel,lang)));
    scene.querySelectorAll('.sim-plans').forEach(block=>{
      // SIM plan grids already copied with their enclosing English block must not be cloned again.
      if(!block.closest('.reading-twins'))twinPanels(block);
    });
    scene.querySelectorAll('.appendix-line').forEach(block=>twinPanels(block));
    scene.dataset.readingTwins='ready';
  }
  window.YamadaLocalize = root => {
    root.querySelectorAll('section.chapter[data-kind="scene"]').forEach(scene=>{
      if(sceneNumber(scene.id))localize(scene);
    });
  };
})();