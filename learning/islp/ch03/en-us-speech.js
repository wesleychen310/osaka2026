/* ISLP Chapter 3 — US English playback for §3.2.2 and §3.3 only.
   The private HTML stays in Google Drive. No text or private data is uploaded. */
(() => {
  'use strict';

  const synth = window.speechSynthesis;
  const supported = Boolean(synth && window.SpeechSynthesisUtterance);
  let activeButton = null;
  let activeUtterance = null;

  const style = document.createElement('style');
  style.textContent = `
    .islp-us-read {
      display:inline-flex;align-items:center;gap:.32em;vertical-align:middle;
      margin:.38rem 0 0 .65rem;padding:.25rem .65rem;
      min-height:31px;border:1px solid #b9c8d8;border-radius:999px;
      background:#f8fbff;color:#254968;cursor:pointer;
      font:600 .84rem/1.3 -apple-system,BlinkMacSystemFont,"PingFang TC",sans-serif;
      white-space:nowrap;touch-action:manipulation;
    }
    .islp-us-read:hover {background:#edf4fb;}
    .islp-us-read:focus-visible {outline:2px solid #315b84;outline-offset:2px;}
    .islp-us-read[aria-pressed="true"] {background:#e8f2fa;border-color:#648ba9;}
    .islp-us-read:disabled {opacity:.55;cursor:not-allowed;}
  `;
  document.head.appendChild(style);

  function stopSpeaking() {
    if (supported) synth.cancel();
    if (activeButton) {
      activeButton.setAttribute('aria-pressed', 'false');
      activeButton.textContent = '🔊 美式朗讀';
    }
    activeButton = null;
    activeUtterance = null;
  }

  function speak(textToRead, button) {
    if (!supported) return;
    if (activeButton === button) {
      stopSpeaking();
      return;
    }
    stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    const voices = synth.getVoices();
    const usVoice = voices.find(v => /^en[-_]US$/i.test(v.lang) && v.localService)
      || voices.find(v => /^en[-_]US$/i.test(v.lang));
    if (usVoice) utterance.voice = usVoice;
    button.setAttribute('aria-pressed', 'true');
    button.textContent = '■ 停止朗讀';
    activeButton = button;
    activeUtterance = utterance;
    const finish = () => {
      if (activeUtterance !== utterance) return;
      button.setAttribute('aria-pressed', 'false');
      button.textContent = '🔊 美式朗讀';
      activeButton = null;
      activeUtterance = null;
    };
    utterance.onend = finish;
    utterance.onerror = finish;
    // Called in the user click handler: required by iPhone/iPad browser audio policy.
    synth.speak(utterance);
  }

  function attachReader(p) {
    if (p.querySelector('.islp-us-read')) return;
    const expression = p.textContent.trim();
    if (!expression) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'islp-us-read';
    button.lang = 'zh-Hant-TW';
    button.setAttribute('aria-label', '美式英文朗讀：' + expression);
    button.setAttribute('aria-pressed', 'false');
    button.textContent = '🔊 美式朗讀';
    if (!supported) {
      button.disabled = true;
      button.title = '此瀏覽器不支援語音朗讀';
    } else {
      button.addEventListener('click', () => speak(expression, button));
    }
    p.appendChild(button);
  }

  function init() {
    // Only the English Bank between §3.2.2 and §3.4, including §3.3.1–3.3.3.
    let withinTargetSections = false;
    for (const page of document.querySelectorAll('section.page')) {
      for (const marker of page.querySelectorAll('.section-marker[id^="section-s"]')) {
        if (marker.id === 'section-s322' || marker.id === 'section-s33'
          || /^section-s33[123]$/.test(marker.id)) withinTargetSections = true;
        else if (marker.id === 'section-s34') withinTargetSections = false;
      }
      if (!withinTargetSections) continue;
      page.querySelectorAll('details.phrases .phrase > p[lang="en"]').forEach(attachReader);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {once:true});
  } else {
    init();
  }
  window.addEventListener('pagehide', stopSpeaking, {once:true});
})();