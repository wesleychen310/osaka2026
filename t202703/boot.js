const KYOTO2027_CACHE_VERSION = '20260928-3';
const KYOTO2027_FILES = ['data.js', 'app.js'];
function loadKyoto2027(i){
  if(i >= KYOTO2027_FILES.length) return;
  const s = document.createElement('script');
  s.src = KYOTO2027_FILES[i] + '?v=' + KYOTO2027_CACHE_VERSION;
  s.onload = () => loadKyoto2027(i + 1);
  document.head.appendChild(s);
}
loadKyoto2027(0);
