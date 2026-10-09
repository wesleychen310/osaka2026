const KYOTO2027_CACHE_VERSION='20261009-rokudenya1';
const KYOTO2027_FILES=[
  '../t202607-data.js',
  '../t202607-books-data.js',
  '../t202607-themes-data.js',
  '../t202607-old-cafe-theme-data.js',
  '../t202607-must-go-theme-data.js',
  '../t202607-must-go-sanjo-data.js',
  '../t202607-beef-tongue-clean-data.js',
  '../t202607-places-data.js',
  'data.js',
  'nearby-data.js',
  'name-i18n.js',
  'kiyamachi-data.js',
  'sakura-data.js',
  'catalog-data.js',
  'gpt-actions.js',
  'app.js'
];
function loadKyoto2027(i){
  if(i>=KYOTO2027_FILES.length) return;
  const s=document.createElement('script');
  s.src=KYOTO2027_FILES[i]+'?v='+KYOTO2027_CACHE_VERSION;
  s.onload=()=>loadKyoto2027(i+1);
  s.onerror=()=>{console.error('Failed to load',KYOTO2027_FILES[i]);loadKyoto2027(i+1);};
  document.head.appendChild(s);
}
loadKyoto2027(0);
