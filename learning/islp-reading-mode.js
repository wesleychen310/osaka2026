/* Shared reading modes for the ISLP directory and private chapter documents. */
(() => {
  'use strict';
  if (document.getElementById('islp-reading-mode')) return;
  const KEY = 'islp-reading-language-v1';
  const valid = value => ['zh', 'en', 'bi'].includes(value);
  let mode = 'bi';
  try { const saved = localStorage.getItem(KEY); if (valid(saved)) mode = saved; } catch (_) {}
  const root = document.documentElement;
  const isChapter = !!document.querySelector('.pair .original,.pair .en-text');
  const mark = (el, language) => { if (el) el.classList.add('islp-mode-' + language); };
  const hasChinese = text => /[\u3400-\u9fff]/.test(text);
  const chapter = new URLSearchParams(location.search).get('chapter');

  // Mark outer language units only. An English term inside a Chinese translation
  // remains part of that translation; original graphs, equations and code stay.
  if (isChapter) {
    for (const el of document.querySelectorAll('body [lang]')) {
      if (el.parentElement.closest('[lang]:not(html)')) continue;
      const lang = el.getAttribute('lang').toLowerCase();
      if (lang.startsWith('en')) mark(el, 'en');
      if (lang.startsWith('zh')) mark(el, 'zh');
    }
    document.querySelectorAll('.original,.en-text,.caption-en,.source-en').forEach(el => mark(el, 'en'));
    document.querySelectorAll('.translation,.zh-text,.caption-zh,.heading-translation,.table-translation,.inline-gloss,.phrase-use').forEach(el => mark(el, 'zh'));
    document.querySelectorAll('.langtag,.pair > .label').forEach(el => {
      mark(el, el.classList.contains('zh') || hasChinese(el.textContent) ? 'zh' : 'en');
      el.classList.add('islp-mode-label');
    });

    const sectionNumber = heading => {
      const english = heading.querySelector('.islp-heading-en,.source-en');
      return (english || heading).textContent.trim().match(/^\d+(?:\.\d+)*(?:[–—-]\d+(?:\.\d+)*)?/)?.[0] || '';
    };
    function splitHeading(heading, translation, separate) {
      const nodes = [...heading.childNodes].filter(n => n !== translation);
      if (!nodes.length || heading.querySelector(':scope > .islp-heading-en')) return;
      const english = document.createElement('span');
      english.className = 'islp-heading-en islp-mode-en';
      english.lang = 'en';
      nodes.forEach(n => english.appendChild(n));
      // Some Chapter 3 headings mark the whole bilingual container as English.
      // Put that language on the original span so Chinese headings remain visible.
      heading.classList.remove('islp-mode-en', 'islp-mode-zh');
      heading.removeAttribute('lang');
      heading.prepend(english);
      heading.classList.add('islp-readable-heading');
      const number = sectionNumber(heading);
      if (number.includes('.')) heading.classList.add('islp-heading-depth-' + (number.split(/[–—-]/)[0].split('.').length - 1));
      if (separate) {
        const chinese = document.createElement('span');
        chinese.className = 'islp-mode-zh islp-heading-only-zh';
        chinese.lang = 'zh-Hant-TW';
        const text = translation.textContent.trim();
        chinese.textContent = (number && !text.startsWith(number) ? number + ' ' : '') + text;
        heading.appendChild(chinese);
        translation.classList.add('islp-paired-heading-sub');
        mark(translation, 'zh');
      } else {
        const prefix = heading.tagName === 'H1' && /^\d+$/.test(chapter || '') ? '第' + chapter + '章 · ' : number && !translation.textContent.trim().startsWith(number) ? number + ' ' : '';
        if (prefix) {
          const label = document.createElement('span');
          label.className = 'islp-heading-number islp-heading-only-zh';
          label.textContent = prefix;
          translation.prepend(label);
        }
      }
    }
    for (const heading of document.querySelectorAll('h1,h2,h3,h4')) {
      const inside = heading.querySelector(':scope > .heading-translation');
      const sibling = heading.nextElementSibling;
      if (inside) splitHeading(heading, inside, false);
      else if (sibling?.matches('.subcn,.section-head > .sub[lang]') && !hasChinese(heading.textContent)) splitHeading(heading, sibling, true);
      else if (hasChinese(heading.textContent) && !heading.querySelector('[lang]')) mark(heading, 'zh');
    }
    const practiceTitle = title => {
      const original = document.createElement('span');
      original.className = 'islp-mode-en';
      while (title.firstChild) original.appendChild(title.firstChild);
      const translated = document.createElement('span');
      translated.className = 'islp-mode-zh islp-heading-only-zh';
      translated.textContent = '實用英文語塊';
      title.append(original, translated);
    };
    const practiceTitles = new Set(document.querySelectorAll('.reusable-english > h2,details.phrases > summary'));
    document.querySelectorAll('h2,h3').forEach(title => {
      if (/^(?:Reusable English|English Bank)/.test(title.textContent.trim())) practiceTitles.add(title);
    });
    practiceTitles.forEach(practiceTitle);

    // Earlier chapters keep Chinese study notes outside the bilingual paragraphs.
    document.querySelectorAll('.note,.figure-reading,.summary,.checklist,.hero-cn,.lead').forEach(el => {
      if (hasChinese(el.textContent)) mark(el, 'zh');
    });
    document.querySelectorAll('.reading-notes > p:not([lang]),p.reading-notes').forEach(el => mark(el, 'zh'));
    document.querySelectorAll('.hero .kicker,.section-head > .eyebrow').forEach(el => mark(el, 'en'));
    document.querySelectorAll('table.phrases').forEach(table => {
      if (!/English Bank/.test(table.previousElementSibling?.textContent || '')) {
        if (hasChinese(table.textContent)) mark(table, 'zh');
        return;
      }
      for (const row of table.rows) {
        [...row.cells].forEach(cell => mark(cell, hasChinese(cell.textContent) ? 'zh' : 'en'));
      }
    });
    if (chapter === '3') {
      const label = document.querySelector('.chapter-label');
      if (label) {
        const en = document.createElement('span'); en.className = 'islp-mode-en'; en.textContent = 'Chapter 3 · Linear Regression';
        const zh = document.createElement('span'); zh.className = 'islp-mode-zh'; zh.textContent = '第三章 · 線性迴歸';
        label.replaceChildren(en, document.createTextNode(' · '), zh);
        label.classList.add('islp-chapter-label');
      }
    }
    // Both the horizontal contents and sidebar show section numbers and names.
    // Keep the original labels for the English and bilingual reading modes.
    for (const link of document.querySelectorAll('.side-link[href^="#"],.topbar .inner > a[href^="#"]')) {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      const heading = target?.matches('h1,h2,h3,h4') ? target : target?.querySelector('h1,h2,h3,h4');
      const translated = heading?.querySelector('.heading-translation,.islp-heading-only-zh') || (heading?.classList.contains('islp-mode-zh') ? heading : null);
      if (!translated) continue;
      const en = document.createElement('span'); en.className = 'islp-mode-en';
      while (link.firstChild) en.appendChild(link.firstChild);
      const zh = document.createElement('span'); zh.className = 'islp-mode-zh islp-heading-only-zh'; zh.textContent = translated.textContent;
      link.append(en, zh);
    }
  }

  const style = document.createElement('style');
  style.id = 'islp-reading-mode-style';
  style.textContent = `
    html[data-islp-reading-mode="zh"] .islp-mode-en,
    html[data-islp-reading-mode="en"] .islp-mode-zh,
    html:not([data-islp-reading-mode="zh"]) .islp-heading-only-zh,
    html[data-islp-reading-mode="zh"] .islp-paired-heading-sub,
    html:not([data-islp-reading-mode="bi"]) .islp-mode-label {display:none!important}
    html:not([data-islp-reading-mode="bi"]) .hero > .lead,
    html:not([data-islp-reading-mode="bi"]) .hero > .meta,
    html:not([data-islp-reading-mode="bi"]) .hero > .hero-meta {display:none!important}
    html[data-islp-reading-mode="zh"] .heading-translation,
    html[data-islp-reading-mode="en"] .islp-heading-en {margin-top:0!important}
    html[data-islp-reading-mode="zh"] .islp-readable-heading {
      color:#173f52!important;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC",sans-serif!important;font-weight:750!important;line-height:1.4!important;letter-spacing:0!important
    }
    html[data-islp-reading-mode="zh"] .islp-readable-heading > .heading-translation,
    html[data-islp-reading-mode="zh"] .islp-readable-heading > .islp-heading-only-zh {
      display:block;font:inherit!important;color:inherit!important;line-height:inherit!important;margin:0!important
    }
    html[data-islp-reading-mode="zh"] h2.islp-readable-heading {font-size:clamp(25px,4.6vw,32px)!important}
    html[data-islp-reading-mode="zh"] h3.islp-readable-heading {font-size:clamp(21px,3.8vw,25px)!important}
    html[data-islp-reading-mode="zh"] h4.islp-readable-heading {font-size:20px!important}
    html[data-islp-reading-mode="zh"] .islp-readable-heading.islp-heading-depth-2,
    html[data-islp-reading-mode="zh"] .islp-readable-heading.islp-heading-depth-3 {font-size:clamp(21px,3.8vw,25px)!important}
    .islp-heading-number {font-variant-numeric:tabular-nums}
    html:not([data-islp-reading-mode="bi"]) .pair > .translation,
    html:not([data-islp-reading-mode="bi"]) .pair > .zh-text,
    html:not([data-islp-reading-mode="bi"]) .caption-zh {margin-top:0!important;padding-top:0!important;border-top:0!important}
    html:not([data-islp-reading-mode="bi"]) .islp-chapter-label {font-size:0}
    html:not([data-islp-reading-mode="bi"]) .islp-chapter-label > span {font-size:16px}
    #islp-reading-mode {position:sticky;top:var(--islp-mode-top,0px);z-index:35;background:rgba(255,253,248,.97);border-bottom:1px solid #dedbd1;box-shadow:none;color:#53636c;font:13px/1.4 -apple-system,BlinkMacSystemFont,"PingFang TC",sans-serif}
    #islp-reading-mode .islp-mode-inner {max-width:980px;margin:auto;padding:8px 18px;display:flex;align-items:center;gap:12px}
    #islp-reading-mode .islp-mode-caption {font-size:12px;white-space:nowrap}
    #islp-reading-mode .islp-mode-options {display:inline-flex;gap:3px;padding:3px;border:1px solid #dedbd1;border-radius:9px;background:#f6f5f1}
    #islp-reading-mode button {display:block;width:auto;min-height:34px;min-width:64px;margin:0;padding:6px 12px;border:0;border-radius:6px;box-shadow:none;background:transparent;color:#617078;font:inherit;font-weight:600;line-height:1.4;cursor:pointer;touch-action:manipulation}
    #islp-reading-mode button[aria-pressed="true"] {background:#fff;color:#184d66;box-shadow:0 1px 3px rgba(30,45,55,.1)}
    #islp-reading-mode button:focus-visible {outline:2px solid #326a9b;outline-offset:2px}
    html.islp-has-reading-mode {scroll-padding-top:calc(var(--islp-mode-top,0px) + 64px)}
    html.islp-has-reading-mode .sidebar {min-width:0;top:calc(var(--islp-mode-top,0px) + 70px)}
    html.islp-has-reading-mode .side-card .side-link {flex-shrink:0}
    #islp-reading-mode.islp-directory-mode {position:static;border:0;background:transparent;margin:14px 0 24px}
    #islp-reading-mode.islp-directory-mode .islp-mode-inner {padding:0}
    @media(max-width:420px) {#islp-reading-mode .islp-mode-inner {gap:9px;padding:7px 14px}#islp-reading-mode button {min-width:60px;padding:7px 10px}}
    @media print {#islp-reading-mode {display:none!important}}
  `;
  document.head.appendChild(style);
  const bar = document.createElement('div');
  bar.id = 'islp-reading-mode';
  bar.innerHTML = '<div class="islp-mode-inner"><span class="islp-mode-caption">閱讀模式</span><div class="islp-mode-options" role="group" aria-label="閱讀語言"><button type="button" data-mode="zh" aria-pressed="false">中文</button><button type="button" data-mode="en" aria-pressed="false">English</button><button type="button" data-mode="bi" aria-pressed="false">雙語</button></div></div>';
  const topbar = document.querySelector('body > .topbar');
  if (isChapter) {
    if (topbar) topbar.after(bar); else document.body.prepend(bar);
    root.classList.add('islp-has-reading-mode');
  } else {
    const slot = document.getElementById('islp-reading-mode-slot');
    if (!slot) return;
    bar.classList.add('islp-directory-mode'); slot.appendChild(bar);
  }
  function updateTop() {
    const css = topbar && getComputedStyle(topbar);
    const height = css && ['sticky','fixed'].includes(css.position) && css.display !== 'none' ? topbar.getBoundingClientRect().height : 0;
    root.style.setProperty('--islp-mode-top', height + 'px');
  }
  updateTop();
  if (topbar && 'ResizeObserver' in window) new ResizeObserver(updateTop).observe(topbar);
  window.addEventListener('resize', updateTop, {passive:true});
  function readingAnchor() {
    const y = bar.getBoundingClientRect().bottom + 16;
    for (const el of document.querySelectorAll('main .pair,main .equation,main figure,main .source-heading,main .section-head')) {
      const rect = el.getBoundingClientRect();
      if (rect.height && rect.bottom > y) return {el, top:rect.top};
    }
    return null;
  }
  function apply(value, persist, preservePosition) {
    if (!valid(value)) return;
    const anchor = preservePosition && isChapter && window.scrollY > 200 ? readingAnchor() : null;
    mode = value; root.dataset.islpReadingMode = value;
    bar.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === value)));
    if (persist) { try { localStorage.setItem(KEY, value); } catch (_) {} }
    if (value === 'zh' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    if (anchor) requestAnimationFrame(() => {
      if (anchor.el.isConnected && anchor.el.getBoundingClientRect().height) window.scrollBy({top:anchor.el.getBoundingClientRect().top - anchor.top, behavior:'instant'});
    });
  }
  bar.addEventListener('click', event => {
    const button = event.target.closest('button[data-mode]');
    if (button && mode !== button.dataset.mode) apply(button.dataset.mode, true, true);
  });
  window.addEventListener('storage', event => { if (event.key === KEY && valid(event.newValue)) apply(event.newValue, false, true); });
  apply(mode, false, false);
})();

