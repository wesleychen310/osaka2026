export const hotel = {
  name: '相鐵 Fresa Inn 東京六本木',
  japanese: '相鉄フレッサイン東京六本木',
  address: '東京都港区六本木 3-10-1',
  query: 'Sotetsu Fresa Inn Tokyo Roppongi',
  official: 'https://sotetsu-hotels.com/fresa-inn/roppongi/',
  access: 'https://sotetsu-hotels.com/fresa-inn/roppongi/access/',
};
export const flights = [
  { date: '12/23（三）', code: 'IT200', route: '桃園 T1 06:10 → 成田 T2 10:35', airport: 'Narita International Airport Terminal 2' },
  { date: '12/29（二）', code: 'IT203', route: '成田 T2 20:25 → 桃園 T1 23:25', airport: 'Narita International Airport Terminal 2' },
];

export const lights = [
  {
    name: '六本木之丘櫸坂燈飾', japanese: 'けやき坂イルミネーション「SNOW＆BLUE」',
    area: '六本木 Hills', through: '2026/12/25', dates: '2026/11/5–12/25', hours: '17:00–22:00',
    query: '六本木けやき坂通り 東京都港区', official: 'https://www.roppongihills.com/sp/christmashills/102/',
    note: '約 400 公尺的銀藍燈海。從六本木站往 Hills，先到大屋根廣場，再沿櫸坂往麻布十番方向散步。拍攝熱門路段人多，留在行人道。',
  },
  {
    name: '東京中城聖誕燈飾', japanese: 'MIDTOWN CHRISTMAS 2026',
    area: '東京中城', through: '2026/12/25', dates: '2026/11/26–12/25', hours: '17:00–23:00',
    query: 'ミッドタウン・ガーデン 東京ミッドタウン', official: 'https://www.tokyo-midtown.com/jp/event/8187/',
    note: '從六本木站直通東京中城，前往 Midtown Garden 看主展演與聖誕樹。金色「光の散歩道」延續至 2027/2/23，17:00–23:00。',
  },
  {
    name: '表參道 Dior 燈飾', japanese: '表参道 ディオール イルミネーション 2026',
    area: '表參道', through: '2026/12/27', dates: '2026/12/1–12/27', hours: '日落–22:00',
    query: '表参道ヒルズ 東京都渋谷区', official: 'https://www.omotesandohills.com/press_release/pdf/press_release261104_2.pdf',
    note: '從表參道站沿櫸樹大道往明治神宮前站。主並木到 12/27，植栽帶低木延續至 2027/1/5。',
  },
  {
    name: '丸之內仲通燈飾', japanese: '丸の内イルミネーション 2026',
    area: '丸之內', through: '2027/2/14', dates: '2026/11/12–2027/2/14', hours: '12 月 16:00–24:00，其他期間 16:00–23:00',
    query: '丸の内仲通り 東京都千代田区', official: 'https://www.marunouchi.com/lp/brightholiday2026/illumination/marunouchi_illumination_2026.pdf',
    note: '東京站丸之內口出站，可沿仲通往有樂町。仲通香檳金燈飾跨年後仍可看，東京站前的行幸通點燈至 12/25。',
  },
  {
    name: '惠比壽花園廣場．巴卡拉吊燈', japanese: '恵比寿ガーデンプレイス Baccarat ETERNAL LIGHTS',
    area: '惠比壽', through: '2027/1/11', dates: '2026/11/14–2027/1/11', hours: '11:00–23:00',
    query: '恵比寿ガーデンプレイス センター広場', official: 'https://gardenplace.jp/event/detail/1095',
    note: '日比谷線到惠比壽站，經 JR 東口方向接 Sky Walk。中心廣場看水晶吊燈。聖誕樹與市集至 12/25，部分步道燈飾延續至 2027/2/28。',
    extra: 'https://event.gardenplace.jp/special/2026christmas/',
  },
];

const confirmed = (time, title, note, query) => ({ status: '已確認', time, title, note, query });
const pending = (time, title, note, query) => ({ status: '待安排', time, title, note, query });
const option = (time, title, note, query) => ({ status: '候選', time, title, note, query });
const lightStop = (index, time, note) => option(time, lights[index].name, note, lights[index].query);

export const days = [
  { date: '12/23', weekday: '三', title: '抵達東京・六本木夜景', stops: [
    pending('清晨', '桃園送機', '接送已預約並待派車，預約上的航班與 IT200 有出入，出發前需核對。'),
    confirmed('06:10 → 10:35', '台灣虎航 IT200', '桃園 T1 → 成田 T2。時間均為當地時間。', flights[0].airport),
    pending('抵達後', '成田 T2 → 六本木', '候選為京成 Skyliner 至京成上野，步行轉東京 Metro 上野站，搭日比谷線至六本木。班次與行李動線待確認。', '京成上野駅'),
    confirmed('15:00 後', hotel.name, '入住後可先在飯店附近用餐。', hotel.query),
    option('晚餐', '大戶屋 六本木店', '薑汁豬肉或烤魚定食，早到可先吃再出門。', '大戸屋ごはん処 六本木店'),
    lightStop(1, '17:00 後', '先看東京中城主展演；體力允許再前往櫸坂。'),
    lightStop(0, '22:00 前', '沿櫸坂看夜景，12/25 為最後一天。'),
  ]},
  { date: '12/24', weekday: '四', title: '平安夜・表參道', stops: [
    option('午後', '表參道之丘', '可由六本木搭大江戶線至青山一丁目，轉銀座線至表參道。展館暖身後再出門。', '表参道ヒルズ'),
    lightStop(2, '日落後', '由表參道往明治神宮前散步，假日人潮多，可縮短停留。'),
    option('晚餐', '鶴頓坦 六本木', '回飯店一帶吃熱烏龍麵。平安夜席位待確認。', 'TsuruTonTan UDON NOODLE Brasserie 六本木'),
  ]},
  { date: '12/25', weekday: '五', title: '聖誕夜・六本木或東京站', stops: [
    option('下午', '六本木蔦屋書店', '先逛書店暖身，再沿櫸坂散步。', '六本木 蔦屋書店'),
    lightStop(0, '17:00 後', '若抵達日未看，優先補上，這晚是最後一天。'),
    option('備案', '東京站行幸通燈飾', '這晚是行幸通最後一天。從六本木搭日比谷線到日比谷，沿丸之內仲通走向東京站。', '行幸通り 東京駅'),
    option('晚餐', '豚組食堂', '留在六本木可吃炸豬排，節慶可能排隊。', '豚組食堂 六本木'),
  ]},
  { date: '12/26', weekday: '六', title: '東京市區・惠比壽', stops: [
    option('上午', 'VERVE COFFEE 六本木店', '先喝咖啡、吃點輕食。', 'VERVE COFFEE ROASTERS 六本木'),
    lightStop(4, '入夜後', '六本木搭日比谷線至惠比壽。吊燈仍在展出，可順路看坡道燈飾。'),
    pending('晚餐', '惠比壽或六本木熟食', '惠比壽用餐待選，也可回飯店周邊找燒肉或定食。', '恵比寿駅'),
  ]},
  { date: '12/27', weekday: '日', title: '東京市區／近郊・表參道備案', stops: [
    option('白天', '六本木藝術散步', '市區候選為東京中城與檜町公園；21_21 DESIGN SIGHT 官網列自 12/27 起年末休館。', '檜町公園'),
    pending('備案', '近郊半日', '地點與交通待安排。'),
    lightStop(2, '日落後', '表參道並木最後一天，可補看。'),
  ]},
  { date: '12/28', weekday: '一', title: '丸之內・冬夜散步', stops: [
    option('傍晚', '東京站丸之內站舍', '可搭日比谷線到日比谷，沿仲通往東京站。回程可由附近地鐵站轉乘。', '東京駅 丸の内駅前広場'),
    lightStop(3, '16:00 後', '行幸通已結束；仲通仍亮燈，可走到有樂町。'),
    pending('晚餐', '丸之內或回六本木用餐', '可依當日體力和候位情況調整。', '丸の内仲通り'),
  ]},
  { date: '12/29', weekday: '二', title: '退房・返回台灣', stops: [
    confirmed('11:00 前', '飯店退房', '上午可在六本木短暫採買，寄放行李先問櫃台。', hotel.query),
    pending('午後', '六本木 → 成田 T2', '候選為日比谷線至上野轉京成 Skyliner，或前往東京站轉 JR Narita Express。預留轉乘、報到與安檢時間。', flights[1].airport),
    confirmed('20:25 → 23:25', '台灣虎航 IT203', '成田 T2 → 桃園 T1。時間均為當地時間。', flights[1].airport),
    confirmed('抵達後', '桃園接機', '已預約，待派車。領完行李後依司機指示候車。'),
  ]},
];

export const tasks = [
  ['outbound', '去程機票', '已確認', '12/23 IT200 · 桃園 T1 06:10 → 成田 T2 10:35'],
  ['inbound', '回程機票', '已確認', '12/29 IT203 · 成田 T2 20:25 → 桃園 T1 23:25'],
  ['hotel', '飯店', '已確認', '12/23–12/29 相鐵 Fresa Inn 東京六本木'],
  ['dropoff', '去程送機', '待核對', '已預約並待派車。請確認接送方的航班資料為 IT200。'],
  ['pickup', '回程接機', '已預約', '桃園 T1 接機，待派車。'],
  ['vjw', 'Visit Japan Web', '待處理', '兩位旅客填寫入境與海關資料，備妥 QR。', 'https://www.vjw.digital.go.jp/'],
  ['health', '東京海上日動｜海外旅遊健康險', '待處理', '確認兩位旅客的投保資格、期間與醫療保障。'],
  ['disruption', '旅遊不便險', '待處理', '獨立確認航班與行李延誤等保障。'],
  ['esim', 'eSIM／網路', '待處理', '確認安裝步驟與日本啟用設定。'],
  ['arrival-transit', '成田 → 六本木', '待安排', '確認成田 T2 至飯店交通，優先檢查行李與電梯動線。'],
  ['departure-transit', '六本木 → 成田', '待安排', '核對交通班次、行李與抵達機場時間。'],
  ['plans', '聖誕燈飾與晚餐', '待安排', '依點燈截止日調整，節慶晚餐確認座位。'],
];
