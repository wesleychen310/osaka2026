const station = '六本木站周邊';
const midtown = '東京中城';
const hills = '六本木 Hills';
const south = '六本木南側・麻布十番';
const midtownAddress = '東京都港区赤坂 9-7-1';
const hillsAddress = '東京都港区六本木 6-10-1';
const midtownSite = 'https://www.tokyo-midtown.com/jp/';
const hillsSite = 'https://www.roppongihills.com/';

export const categories = ['定食', '拉麵', '烏龍麵', '燒肉', '炸豬排', '壽喜燒', '關東煮', '洋食', '咖啡', '早餐', '甜點', '超市', '便利商店', '藥妝', '購物', '書店', '美術館', '散步'];

export const places = [
  {
    name: '大戶屋 六本木店', japanese: '大戸屋ごはん処 六本木店', area: station, kinds: ['定食'],
    address: '東京都港区六本木 7-14-7 Trinity 大樓 2F', hours: '10:00–23:00（最後點餐 22:30）',
    note: '想吃完整日式定食時的首選。薑汁豬里肌和雞肉南蠻都是熟食。',
    visit: '午餐開店後或晚餐尖峰前', price: '薑汁豬里肌定食 ¥1,260',
    official: 'https://store.ootoya.com/detail/27254/', menu: 'https://www.ootoya.com/menu_list/index/27254',
  },
  {
    name: 'AFURI 六本木交叉口店', japanese: 'AFURI 六本木交差点', area: station, kinds: ['拉麵'],
    address: '東京都港区六本木 4-9-4', hours: '週日–四 11:00–23:00，週五、六及假日前 11:00–翌日 05:00',
    note: '清爽的柚子系湯頭。可點柚子鹽拉麵，想吃全熟蛋可先詢問。',
    visit: '午餐或看完燈飾後', official: 'https://www.afuri.com/findus/',
  },
  {
    name: '鶴頓坦 六本木', japanese: 'TsuruTonTan UDON NOODLE Brasserie 六本木',
    area: station, kinds: ['烏龍麵', '壽喜燒'],
    address: '東京都港区六本木 7-8-6 Axall 六本木 7F',
    hours: '週一–六及假日前 11:00–翌日 08:00，週日與假日 11:00–23:00（各提前一小時停止點餐）',
    note: '大碗熱烏龍麵適合冬夜。也有壽喜燒套餐，生蛋可請店家另放。已搬至 7 丁目，請依新址導航。',
    visit: '晚餐或夜間，節慶套餐先查預約',
    official: 'https://www.tsurutontan.co.jp/shop/roppongi/', menu: 'https://www.tsurutontan.co.jp/roppongi/',
  },
  {
    name: '敘敘苑 六本木本店', japanese: '叙々苑 六本木本店', area: station, kinds: ['燒肉'],
    address: '東京都港区六本木 7-14-4 REMM 六本木 2F',
    hours: '11:30 開門，週一–六最後點餐翌日 03:00，週日與假日 22:00',
    note: '有雙人座與桌席，可點烤牛舌、牛小排。想看燈前吃一餐，可先查午間套餐。',
    visit: '午餐 11:30–15:00 或提前訂晚餐',
    official: 'https://www.jojoen.co.jp/shop/jojoen/roppongi/', menu: 'https://www.jojoen.co.jp/shop/jojoen/roppongi/',
  },
  {
    name: '豚組食堂', japanese: 'とんかつ 豚組食堂', area: hills, kinds: ['炸豬排', '定食'],
    address: '東京都港区六本木 6-4-1 六本木 Hills Metro Hat B2F', hours: '11:00–16:00、17:30–22:00（最後點餐 15:15／21:30）',
    note: '吃完可直接往櫸坂。想吃油脂少一點選腰內肉，想吃香氣濃一點選里肌。',
    visit: '午餐開店時或看燈前', official: 'https://www.butagumi.com/shokudo/access/index.html',
  },
  {
    name: '田六關東煮', japanese: '六本木おでん でん六', area: station, kinds: ['關東煮'],
    address: '東京都港区六本木 3-9-4', hours: '官網列 18:00–翌日 03:00，營業日先確認',
    note: '飯店同在六本木三丁目，冬夜可吃蘿蔔與煮蛋。店內供酒，想單點熟食可先問座位及低消。',
    visit: '晚餐或宵夜', official: 'https://denroku.com/', menu: 'https://denroku.com/お食事/',
  },
  {
    name: 'Grill 滿天星 麻布本店', japanese: 'グリル満天星 麻布十番 本店',
    area: south, kinds: ['洋食'], address: '東京都港区麻布十番 1-3-1 Apolia 大樓 B1F',
    hours: '平日午餐 11:30–15:30、晚餐 17:30–22:00。週末及假日 11:30–16:00、17:00–22:00',
    note: '經典日式洋食，適合吃蛋包飯或多蜜醬漢堡排。經櫸坂往麻布十番方向可順路安排。',
    visit: '午餐，或在麻布十番吃完再回飯店', price: '多蜜醬漢堡排 ¥2,200',
    official: 'https://azabuhonten.manten-boshi.com/information/', menu: 'https://azabuhonten.manten-boshi.com/lunch/',
  },
  {
    name: '矢澤雞排', japanese: '矢澤チキン', area: midtown, kinds: ['定食'],
    address: midtownAddress + ' Galleria B1F', hours: '11:00–21:00（最後點餐 20:30）',
    note: '雞排專賣。矢澤拼盤可搭配雞菲力、雞腿或雞胸，逛中城下樓即可用餐。',
    visit: '下午較早用餐或看燈前', official: midtownSite + 'restaurants/SOP00250003/',
  },
  {
    name: 'VERVE COFFEE 六本木店', japanese: 'VERVE COFFEE ROASTERS 六本木店',
    area: south, kinds: ['咖啡', '早餐'], address: '東京都港区六本木 5-16-7', hours: '07:00–21:00',
    note: '地面入口，適合想坐下喝精品咖啡、吃輕食的早晨。想避人潮可早點去。',
    visit: '早餐或平日上午', official: 'https://vervecoffee.jp/pages/roppongi', menu: 'https://vervecoffee.jp/pages/roppongi',
  },
  {
    name: '藍瓶咖啡 六本木店', japanese: 'ブルーボトルコーヒー 六本木カフェ',
    area: station, kinds: ['咖啡', '早餐'], address: '東京都港区六本木 7-7-7', hours: '08:00–20:00',
    note: '精品咖啡與手沖。官方列 27 席、有 Wi-Fi，適合平日上午休息。',
    visit: '平日 08:00–10:00', official: 'https://store.bluebottlecoffee.jp/pages/roppongi',
  },
  {
    name: 'DEAN & DELUCA 咖啡 東京中城', japanese: 'DEAN & DELUCA CAFE 東京ミッドタウン',
    area: midtown, kinds: ['咖啡', '早餐', '甜點'], address: midtownAddress + ' Plaza B1F',
    note: '麵包、咖啡、輕食可外帶。位於地下樓層，偏好地面咖啡館可選 VERVE。',
    visit: '早餐或看燈前補給', official: midtownSite + 'restaurants/SOP0000038/',
  },
  {
    name: '虎屋 東京中城店', japanese: 'とらや 東京ミッドタウン店', area: midtown,
    kinds: ['甜點', '咖啡'], address: midtownAddress + ' Galleria B1F',
    hours: '官方列依館方營業，茶寮最後點餐時間依店舖公告',
    note: '可買羊羹當伴手禮，也可在茶寮吃季節和菓子。茶寮位於地下樓層。',
    visit: '午後茶點，或買伴手禮', official: midtownSite + 'sp/restaurants/SOP0000041/',
  },
  {
    name: 'Precce Premium 超市', japanese: 'プレッセ プレミアム 東京ミッドタウン店',
    area: midtown, kinds: ['超市'], address: midtownAddress + ' Galleria B1F',
    hours: '館方公告目前 08:00–23:00',
    note: '適合買水果、飲料和熟食。晚餐候位太長時，可挑熟食帶回飯店。',
    visit: '入住後補貨或看完中城燈飾', official: midtownSite + 'restaurants/SOP0000136/',
  },
  {
    name: '全家 六本木站前店', japanese: 'ファミリーマート 六本木駅前店', area: station,
    kinds: ['便利商店'], address: '東京都港区六本木 3-11-10 COCO 六本木大樓', hours: '24 小時',
    note: '與飯店同一街區，買水、熟食飯糰或早餐方便。',
    visit: '抵達後補給，也可提前買隔日早餐', official: 'https://store.family.co.jp/points/22380',
  },
  {
    name: '松本清 六本木店', japanese: '薬 マツモトキヨシ 六本木店', area: station,
    kinds: ['藥妝'], address: '東京都港区六本木 6-1-26', hours: '09:00–23:00',
    note: '六本木交叉口附近補買日用品、保養品或暖暖包。',
    visit: '出門前或回飯店前', official: 'https://www.matsukiyococokara-online.com/map/?kid=10000440',
  },
  {
    name: '唐吉訶德 六本木店', japanese: 'ドン・キホーテ 六本木店', area: station,
    kinds: ['購物'], address: '東京都港区六本木 3-14-10', hours: '24 小時',
    note: '飯店同在六本木三丁目，適合補買零食、日用品與伴手禮。',
    visit: '白天補貨或夜間回飯店前', official: 'https://www.donki.com/store/shop_detail.php?add=6&shop_id=31',
  },
  {
    name: '六本木蔦屋書店', japanese: '六本木 蔦屋書店', area: hills, kinds: ['書店', '咖啡'],
    address: '東京都港区六本木 6-11-1 櫸坂通 1F・2F', hours: '1F 09:00–23:00，2F Share Lounge 08:00–23:00',
    note: '設計、生活風格書與外文雜誌齊全，也有 BOOK & CAFÉ。位於櫸坂，適合與燈飾排同一天。',
    visit: '上午翻書，或看燈前暖身', official: 'https://www.roppongihills.com/gourmet_shops/0049.html',
  },
  {
    name: '21_21 設計視界', japanese: '21_21 DESIGN SIGHT', area: midtown, kinds: ['美術館'],
    address: '東京都港区赤坂 9-7-6 Midtown Garden', hours: '10:00–19:00（18:30 最後入館）',
    note: '安藤忠雄設計的展館，適合看設計展並散步到檜町公園。例行週二休館；官網列 12/27–1/3 為年末年始休館，建議安排 12/26 或更早。',
    visit: '12/23–12/26 白天，先查展期', official: 'https://www.2121designsight.jp/information/index.html',
  },
  {
    name: '森美術館', japanese: '森美術館', area: hills, kinds: ['美術館'],
    address: hillsAddress + ' 森大樓 53F', hours: '本次展期 10:00–22:00，週二至 17:00，最後入館為閉館前 30 分',
    note: '旅遊期間可看「森万里子：燦燦」。在六本木 Hills 內，逛完可接庭園或櫸坂。',
    visit: '下午看展或看燈前暖身', official: 'https://www.mori.art.museum/jp/exhibitions/marikomori/',
  },
  {
    name: '東京中城', japanese: '東京ミッドタウン', area: midtown, kinds: ['購物', '散步'],
    address: midtownAddress, hours: '商店通常 11:00–20:00，餐飲依店家',
    note: '室內可逛 Galleria、買食物與休息，室外可接 Midtown Garden 和檜町公園燈飾散步。',
    visit: '傍晚先逛館內，17:00 後出門看燈', official: midtownSite + 'townmap/',
  },
  {
    name: '毛利庭園', japanese: '毛利庭園', area: hills, kinds: ['散步'],
    address: hillsAddress + ' 六本木 Hills',
    note: '池畔庭園適合與櫸坂、大屋根廣場、蔦屋串走。燈飾期間先看六本木 Hills 公告。',
    visit: '有日光時看庭園，晚間順路看燈', official: hillsSite + 'sp/christmashills/',
  },
  {
    name: '檜町公園', japanese: '檜町公園', area: midtown, kinds: ['散步'],
    address: '東京都港区赤坂 9-7-9',
    note: '東京中城旁的公園，可從 Midtown Garden 繞到池畔走一圈。夜晚看燈後可依人潮選擇回程。',
    visit: '白天散步，或日落前到東京中城', official: 'https://www.city.minato.tokyo.jp/shisetsu/koen/akasaka/06.html',
  },
];
