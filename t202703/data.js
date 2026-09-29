window.KYOTO2027_DATA = {
  trip: {
    title: "京旅抄2027",
    dates: "2027/3/27–4/5",
    people: 4,
    base: "四條河原町",
    hotelCandidates: ["Kyoto Central Inn", "Super Hotel"]
  },
  outboundFlight: {
    airline: "台灣虎航",
    flight: "IT212",
    fareFamily: "tigersmart",
    date: "2027/03/27（六）",
    from: "TPE 桃園國際機場 T1",
    departure: "14:40",
    to: "KIX 關西國際機場 T1",
    arrival: "17:55",
    passengers: 4,
    checkedBaggage: "20 kg／人",
    seats: "8B・8C・8E・8D"
  },
  days: ["3/27","3/28","3/29","3/30","3/31","4/1","4/2","4/3","4/4","4/5"],
  places: [
    {name:"哲學之道", jp:"哲学の道", type:"賞櫻", tags:["可多訪","東山","晨間優先"], note:"本次核心賞櫻點之一。保留多次回訪彈性，依滿開、天氣與人潮決定實際日期。", intro:"沿琵琶湖疏水分線延伸的散步道，北接銀閣寺一帶、南往若王子與南禪寺方向。春季河道兩側櫻花形成連續花廊，是本次最值得依花況重複造訪的路線。"},
    {name:"木屋町通", jp:"木屋町通", type:"賞櫻", tags:["可多訪","河原町","夜間"], note:"住宿基地附近，可安排晚餐前後、夜櫻或臨時補拍。", intro:"木屋町通與高瀨川並行，櫻季時高瀨川沿線有成排櫻花，從四條河原町步行即可抵達，適合晚餐前後反覆造訪。"},
    {name:"鴨川", jp:"鴨川", type:"散步", tags:["可多訪","河原町","機動"], note:"距住宿區近，可作為每日機動散步與賞櫻段落。", intro:"貫穿京都市區的代表性河川。四條河原町附近可快速走到河岸，適合清晨、傍晚或餐後散步。"},
    {name:"かに道楽 京都本店", jp:"かに道楽 京都本店", type:"餐廳", tags:["必吃","螃蟹","河原町"], note:"本次指定必吃。正式排日時再確認 2027 年營業與訂位資訊。", intro:"以螃蟹料理為主的專門店，本次列為必吃店。"},
    {name:"南禅寺 順正", jp:"南禅寺 順正", type:"餐廳", tags:["必吃","湯豆腐","南禪寺"], note:"南禪寺周邊行程的主餐核心。", intro:"南禪寺門前一帶知名湯豆腐料理店，適合與南禪寺、無鄰菴與岡崎庭園行程串接。"},
    {name:"無鄰菴", jp:"無鄰菴", type:"庭園", tags:["小川治兵衛","庭園","南禪寺"], note:"小川治兵衛（七代目植治）代表性庭園之一。", intro:"山縣有朋別邸庭園，由七代目小川治兵衛作庭，是近代京都庭園的重要代表。"},
    {name:"南禪寺", jp:"南禅寺", type:"寺院", tags:["可再訪","東山","庭園周邊"], note:"南禪寺一帶庭園群與近代建築散步的核心節點。", intro:"京都東山重要禪寺，可串接水路閣、順正、無鄰菴與岡崎。"}
  ],
  catalogExtras: [
    {
      name:"岸松園老舗",
      mapQuery:"岸松園老舗 京都",
      category:"shops",
      area:"shijo-west",
      areaLabel:"四條烏丸西側・大宮",
      typeLabel:"宇治茶老舖／抹茶／茶道具",
      description:"蛸薬師通小川西入的宇治茶老舖，主力是抹茶、濃茶、薄茶與茶道相關商品。位置在四條烏丸往西、接近大宮方向，適合和四條烏丸西側、堀川一帶一起看。"
    },
    {
      name:"的矢かき 志摩半島",
      mapQuery:"的矢かき 志摩半島 京都",
      category:"food",
      area:"sanjo",
      areaLabel:"烏丸御池・三條通",
      typeLabel:"牡蠣專門／三條高倉",
      description:"三條高倉的牡蠣專門店，主打三重縣的的矢牡蠣。就在京都文化博物館別館（舊日本銀行京都支店）附近，適合和三條通近代建築線一起排。"
    }
  ],
  pending: ["上過電視的烤鮭魚定食：正式店名待確認後加入。"]
};

if (window.KYOTO_PLACES && Array.isArray(window.KYOTO_PLACES.places)) {
  (window.KYOTO2027_DATA.catalogExtras || []).forEach(function(p){
    if (!window.KYOTO_PLACES.places.some(function(x){ return x.name === p.name; })) {
      window.KYOTO_PLACES.places.push(p);
    }
  });
}
