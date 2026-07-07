const KYOTO_CACHE_VERSION='clean9';
const KYOTO_FILES=[
 '../t202607-data.js',
 '../t202607-books-data.js',
 '../t202607-books-map-data.js',
 '../t202607-themes-data.js',
 '../t202607-old-cafe-theme-data.js',
 '../t202607-architecture-data.js',
 '../t202607-must-go-theme-data.js',
 '../t202607-must-go-sanjo-data.js',
 '../t202607-must-go-sanjo-overview.js',
 '../t202607-beef-tongue-clean-data.js',
 '../t202607-places-data.js',
 '../t202607-places-book-map-build.js',
 'site-books9.js',
 'site-books9-start.js'
];
function loadKyotoFile(i){
 if(i>=KYOTO_FILES.length)return;
 const node=document.createElement('script');
 node.src=KYOTO_FILES[i]+'?v='+KYOTO_CACHE_VERSION;
 node.onload=function(){loadKyotoFile(i+1);};
 document.head.appendChild(node);
}
loadKyotoFile(0);
