const TRANSPORT_CACHE_VERSION='transport1';
const TRANSPORT_FILES=[
 '../t202607-itinerary-flight-data.js',
 '../t202607-itinerary-luggage-data.js',
 'transport.js'
];
function loadTransportFile(index){
 if(index>=TRANSPORT_FILES.length)return;
 const script=document.createElement('script');
 script.src=TRANSPORT_FILES[index]+'?v='+TRANSPORT_CACHE_VERSION;
 script.onload=function(){loadTransportFile(index+1);};
 script.onerror=function(){
  const main=document.querySelector('main');
  if(main)main.innerHTML='<section class="card"><h2>交通資料載入失敗</h2><p class="note">請重新整理頁面。</p></section>';
 };
 document.head.appendChild(script);
}
loadTransportFile(0);
