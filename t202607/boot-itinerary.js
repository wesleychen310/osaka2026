const ITINERARY_CACHE_VERSION='flight2';
const ITINERARY_FILES=[
 '../t202607-itinerary-route4-data.js',
 '../t202607-itinerary-weather-data.js',
 '../t202607-itinerary-flight-data.js',
 'itinerary.js'
];
function loadItineraryFile(index){
 if(index>=ITINERARY_FILES.length)return;
 const script=document.createElement('script');
 script.src=ITINERARY_FILES[index]+'?v='+ITINERARY_CACHE_VERSION;
 script.onload=function(){loadItineraryFile(index+1);};
 script.onerror=function(){
  const main=document.querySelector('main');
  if(main)main.innerHTML='<section class="card"><h2>行程資料載入失敗</h2><p class="note">請重新整理頁面。</p></section>';
 };
 document.head.appendChild(script);
}
loadItineraryFile(0);
