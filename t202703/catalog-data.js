/* Shared catalogue: one place, independent type / geography / ARU walking metadata. */
(function(){
  const origin='HOTEL ARU KYOTO 三条木屋町通り';
  const geographies=[
    ['sanjo','三條河原町・飯店近旁'],['kiyamachi','木屋町・先斗町・高瀨川'],
    ['takashimaya','高島屋・T8'],['bal','BAL・丸善'],['teramachi','寺町・新京極'],
    ['nishiki','錦市場'],['daimaru','大丸百貨'],['karasuma','四條烏丸'],
    ['sanjo-karasuma','三條通・烏丸御池'],['teramachi-nijo','寺町二條・市役所'],
    ['shijo-kawaramachi','四條河原町・藤井大丸'],['west','烏丸西側・大宮']
  ].map(([id,label])=>({id,label}));
  const geoMap=Object.fromEntries(geographies.map(g=>[g.id,g]));
  const categories={food:'餐廳',drinks:'咖啡／茶／甜點',shops:'商店／百貨／伴手禮',books:'書店／古書店',sights:'景點／建築／散步',convenience:'便利商店',supermarket:'超市／補貨'};
  const aliases={
    'Starbucks 京都BAL店':'スターバックス カフェ & アートギャラリー 京都BAL',
    '伊諾田咖啡 本店':'イノダコーヒ 本店','Smart Coffee 京都':'スマート珈琲店',
    '一保堂茶舖 京都本店':'一保堂茶舗 京都本店','柳櫻園茶舗':'柳桜園茶舗',
    '福壽園 京都本店':'福寿園 京都本店','無碍山房 高島屋店':'無碍山房 Salon de Muge 京都髙島屋店',
    '祇園辻利 高島屋店':'祇園辻利 京都高島屋店','法蘭索瓦喫茶室':'フランソア喫茶室',
    '先斗町魯ビン':'先斗町 魯ビン','前田咖啡 明倫店':'前田珈琲 明倫店',
    'Starbucks 京都二寧坂ヤサカ茶屋店':'スターバックス コーヒー 京都二寧坂ヤサカ茶屋店',
    '% Arabica 東山':'% Arabica 京都東山','藍瓶咖啡 京都咖啡店':'ブルーボトルコーヒー 京都カフェ',
    '鍵善良房 四條本店':'鍵善良房 四条本店','頂法寺 六角堂':'六角堂 頂法寺',
    '紫雲山 頂法寺（六角堂）':'六角堂 頂法寺','京都芸術センター':'京都藝術中心',
    '舊京都市役所 本廳舍':'京都市役所 本廳舍','舊立誠小學校':'立誠ガーデン ヒューリック京都（元立誠小学校）'
  };
  Object.assign(aliases,{'哲学の道':'哲學之道','南禅寺':'南禪寺','鴨川河岸':'鴨川','平安神宮':'平安神宮 神苑'});
  (window.KYOTO2027_SAKURA?.places||[]).forEach(p=>{aliases[p.jp]=p.name;});
  const canonical=n=>aliases[String(n||'').trim()]||String(n||'').trim();
  function geoFor(p){
    if(p.sakura?.area==='center'&&p.aruWalkOutside)return [];
    if(p.explicitGeos?.length)return p.explicitGeos.filter(id=>geoMap[id]);
    const n=p.name||'',a=p.area||'',section=p.bookSection||'';
    // Named branches take precedence over legacy area assignments.
    const precise={
      '櫂 KAI':['nishiki'],'京都河原町站周邊':['shijo-kawaramachi'],
      '福寿園 京都本店':['shijo-kawaramachi'],'焼肉矢澤 京都':['karasuma'],
      '大垣書店 京都本店':['karasuma'],'レティシア書房':['sanjo-karasuma'],
      '三密堂書店':['shijo-kawaramachi','teramachi'],'甘党茶屋 梅園 河原町店':['sanjo'],
      'Fortune Garden Kyoto':['teramachi-nijo'],'とんかつ山本':['teramachi-nijo'],
      'アスタルテ書茶房':['sanjo-karasuma'],'京都ダイナー':['nishiki'],
      '錦天滿宮':['nishiki','teramachi'],'松榮堂 京都本店':['sanjo-karasuma']
    };
    if(precise[n])return precise[n];
    if(/Kurasu Kyoto Stand|京都駅|京都站|五条|五條|誠光社|南座|鍵善|祇園小石|祇園白川|天壇 四条本店/.test(n))return [];
    if(/藤井大丸/.test(n))return ['shijo-kawaramachi','teramachi'];
    if(/大丸/.test(n))return ['daimaru','karasuma'];
    if(/高島屋|髙島屋|タカシマヤ|T8|京都 蔦屋/.test(n))return ['takashimaya','shijo-kawaramachi'];
    if(/BAL|丸善 京都本店/.test(n))return ['bal','sanjo'];
    if(/木屋町|先斗町|高瀨川|高瀬川|瑞泉寺|立誠|鴨川|Kacto|FUNATSURU|ソワレ|フランソア|東華菜館|四條大橋/.test(n))return ['kiyamachi'];
    if(/錦|三木鶏卵|鮮魚木村|丸常蒲鉾|こんなもんじゃ/.test(n))return ['nishiki'];
    if(/一保堂|柳桜園|鳩居堂|竹苞|其中堂|赤尾|キクオ|寺町通老舖|市役所|本能寺$|御池ゼスト/.test(n))return ['teramachi-nijo'];
    if(/新京極|寺町|三嶋亭 本店|スマート珈琲|koe donuts|1928/.test(n))return ['teramachi'];
    if(/三条河原町|河原町三条|三条大橋|京阪三条|河原町姉小路|六曜社|葦島|河原町蛸薬師|松屋 河原町/.test(n))return ['sanjo'];
    if(/西洞院|四条西洞院|岸松園|御金神社|here 京都|くろちく/.test(n))return ['west'];
    if(/明倫|京都藝術中心|本能寺跡|杉本家|前田珈琲 本店|膳處漢|星月夜/.test(n))return ['karasuma'];
    if(/小川珈琲 堺町錦/.test(n))return ['nishiki'];
    if(n==='2050 coffee')return ['teramachi'];
    if(p.daily)return ['sanjo'];
    if(section==='teramachi-shijo')return ['teramachi'];
    if(section==='gosho')return [];
    if(section==='kawaramachi')return ['teramachi-nijo'];
    if(a==='karasuma')return ['karasuma'];
    if(a==='shijo-west')return ['west'];
    if(a==='sanjo')return ['sanjo-karasuma'];
    if(a==='pontocho')return ['kiyamachi'];
    if(a==='kawaramachi')return /四条河原町|四條河原町|豬一|築地|牛たんの檸檬|坂之上/.test(n)?['shijo-kawaramachi']:['sanjo'];
    return [];
  }
  const geoWalk={
    sanjo:[0.2,0.6,3,9],kiyamachi:[0.2,1.1,3,17],takashimaya:[0.8,1.0,12,15],
    bal:[0.2,0.4,3,6],teramachi:[0.3,0.9,5,14],nishiki:[0.6,1.2,9,18],
    daimaru:[1.1,1.4,17,21],karasuma:[1.3,1.8,20,28],
    'sanjo-karasuma':[0.9,1.5,14,23],'teramachi-nijo':[0.6,1.2,9,18],
    'shijo-kawaramachi':[0.7,1.1,11,17],west:[1.7,2.4,26,37]
  };
  const specificWalk=[
    [/モリタ屋 木屋町|豆水樓 木屋町|瑞泉寺/,[0.3,0.5,5,8]],
    [/LAQUE|ラクエ|四条烏丸 京都三井/,[1.5,1.7,23,26]],
    [/的矢かき|京都文化博物館/,[0.9,1.1,14,17]],
    [/Kurasu Kyoto Stand/,[3.4,3.8,50,58]],
    [/木屋町通$|鴨川$|鴨川河岸/,[0.1,0.4,2,6]],
    [/四條大橋|東華菜館|ソワレ|フランソア/,[0.7,0.9,11,14]]
  ];
  function walkFor(p){
    if(p.walkEstimate)return {...p.walkEstimate};
    const daily=String(p.walk||'').match(/(\d+)(?:[–−〜～-](\d+))?\s*分/);
    if(daily){const min=Number(daily[1]),max=Number(daily[2]||daily[1]);return {min,max,kmMin:Math.round(min*65/100)/10,kmMax:Math.round(max*75/100)/10,basis:'既有步行時間；距離依步速換算'};}
    const specific=specificWalk.find(([re])=>re.test(p.name));
    const range=specific?specific[1]:geoWalk[p.geos[0]];
    return range?{kmMin:range[0],kmMax:range[1],min:range[2],max:range[3],basis:specific?'位置概估':'街區概估'}:null;
  }
  function walkText(p){const w=p.walkMeta;return w?`約 ${w.kmMin===w.kmMax?w.kmMin:w.kmMin+'–'+w.kmMax} km・${w.min===w.max?w.min:w.min+'–'+w.max} 分（${w.basis}）`:p.aruWalkOutside?'ARU 步行 30 分鐘圈外':'距離／時間待確認・預設大眾運輸路線';}
  const walkLimit=window.KYOTO2027_SAKURA?.walkLimit||30;
  function routeMode(p){return !p.aruWalkOutside&&p.walkMeta&&Number.isFinite(p.walkMeta.max)&&p.walkMeta.max<=walkLimit?'walking':'transit';}
  function routeUrl(p){return 'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(origin)+'&destination='+encodeURIComponent(p.mapQuery||p.jp||p.name)+'&travelmode='+routeMode(p);}
  function routeLabel(p){return routeMode(p)==='walking'?'🚶 從 ARU 步行':'🚇 從 ARU 大眾運輸';}
  function kindFor(p){
    if(p.primaryKind)return p.primaryKind;
    const cats=p.categories||[],t=[p.name,...(p.typeLabels||[])].join(' ');
    if(cats.includes('convenience'))return '便利商店';
    if(cats.includes('supermarket'))return '超市／補貨';
    if(cats.includes('books'))return '書店／古書店';
    if(cats.includes('food')){
      const rules=[['牛舌',/牛舌|牛たん|牛タン/],['鰻魚',/鰻|うなぎ/],['燒肉',/燒肉|焼肉|ホルモン/],['壽喜燒／涮涮鍋',/壽喜燒|すき焼|すきやき|しゃぶ|涮涮/],['螃蟹',/かに|螃蟹/],['牡蠣',/牡蠣|的矢かき/],['湯豆腐／豆腐',/湯豆腐|豆腐|豆水樓/],['中華／餃子',/中華|餃子|四川|膳處漢|東華/],['咖哩烏龍麵',/咖哩烏龍|カレーうどん/],['天婦羅',/天婦羅|天ぷら/],['壽司',/壽司|寿司|鮨/],['海鮮／魚料理',/海鮮|魚料理|魚力/],['雞料理',/雞料理|鶏|鳥|八起庵/],['蕎麥',/蕎麥|蕎麦|そば|更科|尾張屋/],['烏龍麵',/烏龍|うどん/],['拉麵',/拉麵|ラーメン|一風堂|第一旭|天下一品/],['豬排／定食',/豬排|とんかつ|かつ田|定食|食堂|やよい軒|むなし/],['丼飯／牛丼／咖哩',/丼|すき家|なか卯|松屋|咖哩|CoCo/],['洋食／披薩／漢堡',/洋食|ピザ|PIZZA|Pizzeria|Burger|マクドナルド|モスバーガー/],['京料理／懷石',/京料理|懷石|懐石|会席|料亭/],['串燒',/串焼|串燒|焼鳥/],['和食',/和食/]];
      return rules.find(([,re])=>re.test(t))?.[0]||'其他餐廳';
    }
    if(cats.includes('drinks')){
      if(p.name==='スマート珈琲店')return '咖啡／喫茶';
      if(/抹茶|日本茶|茶舖|茶舗|茶寮|一保堂|辻利|福寿|柳桜|小山園/.test(t))return '日本茶／抹茶';
      if(/甘味|和菓子|甜點|蛋糕|HARBS|donuts|ショコラ|プリン/.test(t))return '甜點／甘味';
      return '咖啡／喫茶';
    }
    if(cats.includes('shops'))return '商店／百貨／伴手禮';
    return '景點／建築／散步';
  }
  const merged=new Map();
  function add(raw,extra={}){
    const name=canonical(raw.jp||raw.name);if(!name||/京都ことこと 四条店|ことこと 四条店/.test(name)||/HOTEL ARU/.test(name))return;
    const key=name.normalize('NFKC').replace(/\s+/g,'').toLowerCase();
    const cats=extra.categories||[raw.category||'sights'];
    const labels=[raw.typeLabel||raw.type||'',...(raw.typeLabels||[]),...(raw.tags||[])].filter(Boolean);
    const description=raw.description||raw.summary||raw.note||raw.intro||'';
    const p=merged.get(key)||{...raw,name,mapQuery:aliases[raw.name]?name:(raw.mapQuery||name),categories:[],typeLabels:[],description:'',dailyCategories:[],daily:false};
    p.categories=[...new Set([...p.categories,...cats])];p.typeLabels=[...new Set([...p.typeLabels,...labels])];
    p.themeIds=[...new Set([...(p.themeIds||[]),...(raw.themeIds||[])])];
    p.themeLabels=[...new Set([...(p.themeLabels||[]),...(raw.themeLabels||[])])];
    if(description.length>p.description.length)p.description=description;
    if(extra.daily){Object.assign(p,{walk:raw.walk,budget:raw.budget,hours:raw.hours,officialUrl:raw.officialUrl,status:raw.status,daily:true});p.dailyCategories=[...new Set([...p.dailyCategories,...raw.categories])];}
    if(extra.curated){Object.assign(p,{kiyamachiPick:true,description,primaryKind:raw.primaryKind,address:raw.address,officialUrl:raw.officialUrl,referenceUrl:raw.referenceUrl,sourceUrls:raw.sourceUrls,checkedAt:raw.checkedAt,explicitGeos:raw.explicitGeos,walkEstimate:raw.walkEstimate,hours:raw.hours});}
    if(extra.sakura){Object.assign(p,{sakura:raw.sakura,sakuraId:raw.id,jp:raw.jp,mapQuery:raw.mapQuery,aruWalkOutside:raw.aruWalkOutside});if(raw.walkEstimate)p.walkEstimate=raw.walkEstimate;}
    if(extra.locked){p.locked=true;p.description=description;}
    merged.set(key,p);
  }
  (window.KYOTO_PLACES?.places||[]).forEach(p=>add(p));
  (window.KYOTO2027_DATA?.places||[]).forEach(p=>add(p,{locked:true,categories:[p.type==='餐廳'?'food':'sights']}));
  (window.KYOTO2027_NEARBY?.places||[]).forEach(p=>add(p,{daily:true,categories:p.categories.includes('convenience')?['convenience']:p.categories.includes('supermarket')?['supermarket']:p.categories.includes('cafe')?['drinks']:['food']}));
  (window.KYOTO2027_KIYAMACHI?.places||[]).forEach(p=>add(p,{curated:true}));
  (window.KYOTO2027_SAKURA?.places||[]).forEach(p=>add(p,{sakura:true}));
  const cafeThemes=[
    {id:'heritage-cafe',label:'古蹟／老屋咖啡'},
    {id:'kyoto-cafe',label:'京都特色咖啡'},
    {id:'old-tea',label:'老舖茶寮／甘味'}
  ];
  const kyotoCafeNames=new Set((window.KYOTO_THEMES?.hotel_nearby?.sections||[]).filter(s=>s.id==='kyoto-cafe').flatMap(s=>s.items.map(p=>canonical(p.name))));
  function cafeThemesFor(p){
    if(!p.categories.includes('drinks')||['nara','nara_far'].includes(p.area))return [];
    const text=[p.name,...p.typeLabels].join(' '),old=p.themeIds.includes('old_coffee_tea');
    const tea=/茶舖|茶舗|茶寮|和菓子|甘味|日本茶|宇治茶|抹茶|一保堂|柳桜園|福寿園|辻利|小山園/.test(text);
    const cafe=!tea&&(/咖啡|珈琲|喫茶|coffee|cafe|カフェ|Arabica|長樂館|GOSPEL/i.test(text));
    const named=!/周邊|沿線|店群|茶屋群|內咖啡|內茶席/.test(p.name);
    const ordinaryChain=/タリーズ|ドトール|星乃咖啡|Starbucks|スターバックス/i.test(p.name)&&!/二寧坂|カフェ & アートギャラリー/.test(p.name);
    const ids=[];
    if(cafe&&/古蹟|老屋|町家|洋館|近代|明治|昭和|舊校|旧校|舊小學|老派|老咖啡|咖啡老店/.test(text))ids.push('heritage-cafe');
    if((cafe&&named&&!ordinaryChain)||kyotoCafeNames.has(p.name))ids.push('kyoto-cafe');
    if(!cafe&&(old||/老舖|老店|町家|老屋/.test(text)))ids.push('old-tea');
    return ids;
  }
  const cafeGeographies=[['gion','祇園・東山'],['okazaki','岡崎・南禪寺・銀閣寺'],['rakuhoku','洛北・下鴨'],['rakusai','嵐山・洛西'],['rakunan','京都站・伏見'],['uji','宇治']].map(([area,label])=>({id:'cafe-'+area,area,label:'延伸：'+label}));
  const items=[...merged.values()].map(p=>{
    if(p.sakura?.area==='center'&&p.aruWalkOutside){p.area='rakuchu';p.areaLabel='市中心・御苑・二條城';}
    if(p.name==='Kurasu Kyoto Stand'){p.area='rakunan';p.areaLabel='京都站・八條口';}
    if(/南座|鍵善|祇園小石|祇園白川|天壇 四条本店/.test(p.name)){p.area='gion';p.areaLabel='祇園・八坂・白川';}
    p.geos=geoFor(p);p.nearby=!!p.geos.length||p.daily;
    p.walkMeta=walkFor(p);p.kind=kindFor(p);
    p.cafeThemes=cafeThemesFor(p);p.cafeGeo=p.nearby?null:cafeGeographies.find(g=>g.area===p.area)?.id;
    p.mealTier=p.categories.includes('food')?(/定食|食堂|めし|拉麵|ラーメン|うどん|烏龍|蕎麥|蕎麦|そば|咖哩|カレー|餃子|一風堂|やよい軒|むなし|Burger|Pizzeria|ピザ|串焼|串燒|米福|すさび湯|まんてん/i.test(p.name+' '+p.typeLabels.join(' '))?'daily':'destination'):null;p.dining=p.categories.some(c=>c==='food'||c==='drinks');
    return p;
  });
  function introPrompt(p){
    const name=p.jp||p.name,kind=p.kind||p.primaryKind||p.type||'地點';
    return `請用台灣繁體中文深入介紹「${name}」（${kind}）。背景：2027/3/27–4/5 京都旅行，4人同行。請先查證最新公開資料，以介紹本身為主：核心特色、歷史或創立背景、空間與氛圍，以及值得造訪的理由。餐廳與咖啡廳請介紹料理風格、招牌品項與適合的用餐情境；商店請介紹選品、品牌與值得買的東西；景點請介紹歷史、建築、庭園與觀賞重點。${p.sakura?'另請介紹這裡的櫻花特色、品種與實際觀賞位置；花期請區分歷年參考和當年公告。':''}營業時間、價位與訂位資訊放在簡短補充。寫成容易閱讀的介紹，附資料來源，未確認的內容請明確標示。`;
  }
  window.KYOTO2027_CATALOG={canonical,routeMode,routeUrl,routeLabel,walkLimit,introPrompt,items,geographies,geoMap,categories,origin,walkText,kindFor,cafeThemes,cafeGeographies};
})();
