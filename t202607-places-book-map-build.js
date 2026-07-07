if(window.KYOTO_PLACES){
 const sourceByKey=new Map();
 (window.KYOTO_BOOKS?.sections||[]).forEach(section=>{
  (section.items||[]).forEach(item=>sourceByKey.set(`${section.id}|${item.name}`,item));
 });
 (window.KYOTO_PLACES.places||[]).forEach(place=>{
  if(place.category!=='books')return;
  const source=sourceByKey.get(`${place.bookSection||''}|${place.name}`);
  place.mapQuery=source?.map||window.KYOTO_BOOK_MAP_OVERRIDES?.[place.name]||`${place.name} 京都`;
 });
 window.KYOTO_PLACES.bookMapQueries=Object.fromEntries(
  (window.KYOTO_PLACES.places||[])
   .filter(place=>place.category==='books')
   .map(place=>[place.name,place.mapQuery])
 );
 window.KYOTO_PLACES.version='places-clean4-book-maps';
}
