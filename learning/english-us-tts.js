/* ISLP 3.2.2 & 3.3: one-click US English pronunciation for English Bank only. */
(() => {
  'use strict';
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  const synth = window.speechSynthesis;
  const style = document.createElement('style');
  style.textContent = '.phrase .us-audio-btn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;margin:0 0 0 .55rem;padding:4px;border:1px solid #c9d5e2;border-radius:8px;background:#f3f7fb;color:#234b71;vertical-align:middle;cursor:pointer;touch-action:manipulation;box-shadow:none;line-height:1;white-space:nowrap}.phrase .us-audio-btn svg{display:block;width:17px;height:17px;pointer-events:none}.phrase .us-audio-btn:hover{background:#e6f0fa}.phrase .us-audio-btn:focus-visible{outline:2px solid #326a9b;outline-offset:3px}.phrase .us-audio-btn[data-playing="true"]{background:#dcecfb;border-color:#5d93bf;color:#174a79}@media print{.phrase .us-audio-btn{display:none}}';
  document.head.appendChild(style);
  let activeButton = null;
  let sequence = 0;
  const speakerSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  function finishButton() {
    if (!activeButton) return;
    activeButton.removeAttribute('data-playing');
    activeButton.setAttribute('aria-label', '播放美式英文');
    activeButton.title = '播放美式英文';
    activeButton = null;
  }
  function stop() {
    sequence++;
    synth.cancel();
    finishButton();
  }
  function usVoice() {
    const voices = synth.getVoices();
    return voices.find(v => String(v.lang).toLowerCase() === 'en-us') || null;
  }
  let inTargetSection = false;
  for (const page of document.querySelectorAll('section.page')) {
    for (const marker of page.querySelectorAll(':scope > .section-marker')) {
      if (['section-s322', 'section-s33', 'section-s331', 'section-s332', 'section-s333'].includes(marker.id)) {
        inTargetSection = true;
      } else if (marker.id === 'section-s34') {
        inTargetSection = false;
      }
    }
    if (!inTargetSection) continue;
    for (const line of page.querySelectorAll('details.phrases .phrase > p[lang="en"]')) {
      if (line.querySelector('.us-audio-btn')) continue;
      const spokenText = line.textContent.replace(/\s+/g, ' ').trim();
      if (!spokenText) continue;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'us-audio-btn';
      button.innerHTML = speakerSvg;
      button.setAttribute('aria-label', '播放美式英文');
      button.title = '播放美式英文';
      button.addEventListener('click', () => {
        const wasPlaying = activeButton === button;
        stop();
        if (wasPlaying) return;
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        utterance.pitch = 1;
        const voice = usVoice();
        if (voice) utterance.voice = voice;
        const mySequence = ++sequence;
        activeButton = button;
        button.dataset.playing = 'true';
        button.setAttribute('aria-label', '停止美式英文朗讀');
        button.title = '停止朗讀';
        utterance.onend = () => { if (sequence === mySequence) finishButton(); };
        utterance.onerror = () => { if (sequence === mySequence) finishButton(); };
        synth.speak(utterance);
      });
      line.append(' ', button);
    }
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
})();