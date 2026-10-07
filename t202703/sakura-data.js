/* Cherry viewing places: explicit, sourced selection; periods are historical, not a 2027 forecast. */
window.KYOTO2027_SAKURA = {
  "checkedAt": "2026-10-05",
  "walkLimit": 30,
  "areas": [
    {
      "id": "center",
      "label": "市中心・御苑・二條城"
    },
    {
      "id": "gion",
      "label": "祇園・清水・東山"
    },
    {
      "id": "east",
      "label": "岡崎・南禪寺・哲學之道"
    },
    {
      "id": "north",
      "label": "洛北・西陣・賀茂川"
    },
    {
      "id": "kitano",
      "label": "北野・御室・金閣寺一帶"
    },
    {
      "id": "arashiyama",
      "label": "嵐山・嵯峨"
    },
    {
      "id": "yamashina",
      "label": "山科・醍醐"
    },
    {
      "id": "south",
      "label": "京都站・伏見・淀"
    },
    {
      "id": "uji",
      "label": "宇治・八幡"
    },
    {
      "id": "west",
      "label": "西山・大原野"
    },
    {
      "id": "outer",
      "label": "大原・鞍馬・京北・龜岡"
    }
  ],
  "types": [
    {
      "id": "temple",
      "label": "寺院"
    },
    {
      "id": "shrine",
      "label": "神社"
    },
    {
      "id": "garden",
      "label": "庭園"
    },
    {
      "id": "park",
      "label": "公園"
    },
    {
      "id": "river",
      "label": "河岸・疏水"
    },
    {
      "id": "street",
      "label": "街道・步道"
    },
    {
      "id": "building",
      "label": "城郭・近代建築"
    },
    {
      "id": "rail",
      "label": "鐵道沿線"
    }
  ],
  "seasons": [
    {
      "id": "early",
      "label": "早櫻"
    },
    {
      "id": "main",
      "label": "一般春櫻"
    },
    {
      "id": "late",
      "label": "晚櫻"
    }
  ],
  "places": [
    {
      "id": "sakura-1",
      "name": "木屋町通",
      "jp": "木屋町・高瀬川",
      "mapQuery": "三条小橋 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "street",
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "三條到四條的高瀨川沿岸，櫻花與小橋、町家、流水一起看；飯店附近就能反覆探訪。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/kiyamachi.html"
      },
      "description": "三條到四條的高瀨川沿岸，櫻花與小橋、町家、流水一起看；飯店附近就能反覆探訪。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 2,
        "max": 12,
        "kmMin": 0.1,
        "kmMax": 0.9,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-2",
      "name": "鴨川",
      "jp": "鴨川河川敷 三条大橋",
      "mapQuery": "三条大橋 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "river"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬",
        "description": "三條大橋到五條大橋的河岸櫻花；河面與東山視野開闊，可挑喜歡的一段看。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/kamogawakasenjiki.html"
      },
      "description": "三條大橋到五條大橋的河岸櫻花；河面與東山視野開闊，可挑喜歡的一段看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 3,
        "max": 8,
        "kmMin": 0.2,
        "kmMax": 0.6,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-3",
      "name": "祇園白川",
      "jp": "祇園白川 巽橋",
      "mapQuery": "祇園白川 巽橋 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "street",
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "白川、巽橋與石板路旁的櫻花，搭配祇園町家風景；小範圍也很值得看。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/gionshirakawa.html"
      },
      "description": "白川、巽橋與石板路旁的櫻花，搭配祇園町家風景；小範圍也很值得看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 12,
        "max": 18,
        "kmMin": 0.8,
        "kmMax": 1.3,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-4",
      "name": "建仁寺",
      "jp": "建仁寺",
      "mapQuery": "建仁寺 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月中旬–4月上旬（品種不同）",
        "description": "境內南側浴室、法生池周邊有早開的阿龜櫻與垂櫻；不是只有禪院與雙龍圖，春天也值得留意花景。",
        "sourceUrl": "https://travel.jr-central.co.jp/plan/area/kyoto/guide/20250306.html"
      },
      "description": "境內南側浴室、法生池周邊有早開的阿龜櫻與垂櫻；不是只有禪院與雙龍圖，春天也值得留意花景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 20,
        "max": 28,
        "kmMin": 1.3,
        "kmMax": 2.1,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-5",
      "name": "六角堂 頂法寺",
      "jp": "六角堂 頂法寺",
      "mapQuery": "六角堂 頂法寺 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "本堂東側的御幸櫻是垂櫻，都市裡的小寺院也能看花；可與烏丸一帶同日安排。",
        "sourceUrl": "https://travel.jr-central.co.jp/plan/area/kyoto/guide/20210225.html"
      },
      "description": "本堂東側的御幸櫻是垂櫻，都市裡的小寺院也能看花；可與烏丸一帶同日安排。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 17,
        "max": 23,
        "kmMin": 1.1,
        "kmMax": 1.7,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-6",
      "name": "佛光寺",
      "jp": "佛光寺",
      "mapQuery": "佛光寺 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "大殿前的垂櫻是市中心賞花重點，寬敞境內與堂宇構成不同於河岸的花景。",
        "sourceUrl": "https://souda-kyoto.jp/guide/spot/bukkoji.html"
      },
      "description": "大殿前的垂櫻是市中心賞花重點，寬敞境內與堂宇構成不同於河岸的花景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 23,
        "max": 30,
        "kmMin": 1.5,
        "kmMax": 2.2,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-7",
      "name": "清水寺",
      "jp": "清水寺",
      "mapQuery": "清水寺 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "從奧之院一帶看清水舞台與櫻花，境內染井吉野、山櫻與京都市景一起入眼。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1112"
      },
      "description": "從奧之院一帶看清水舞台與櫻花，境內染井吉野、山櫻與京都市景一起入眼。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 40,
        "max": 50,
        "kmMin": 2.6,
        "kmMax": 3.8,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-8",
      "name": "高台寺",
      "jp": "高台寺",
      "mapQuery": "高台寺 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "波心庭的垂櫻是主角；白砂、方丈與花枝的組合，適合細看庭園構圖。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1111"
      },
      "description": "波心庭的垂櫻是主角；白砂、方丈與花枝的組合，適合細看庭園構圖。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 30,
        "max": 38,
        "kmMin": 2.0,
        "kmMax": 2.9,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-9",
      "name": "圓山公園",
      "jp": "円山公園",
      "mapQuery": "円山公園 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "park"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "以祇園垂櫻為中心，周圍還有其他櫻樹；公園花景與八坂神社一帶可一起看。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1110"
      },
      "description": "以祇園垂櫻為中心，周圍還有其他櫻樹；公園花景與八坂神社一帶可一起看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": false,
      "walkEstimate": {
        "min": 24,
        "max": 30,
        "kmMin": 1.6,
        "kmMax": 2.2,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-10",
      "name": "知恩院",
      "jp": "知恩院",
      "mapQuery": "知恩院 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬",
        "description": "三門周邊與庭園的春櫻，巨大的寺院建築帶出東山花景的尺度。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/chionin.html"
      },
      "description": "三門周邊與庭園的春櫻，巨大的寺院建築帶出東山花景的尺度。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 28,
        "max": 36,
        "kmMin": 1.8,
        "kmMax": 2.7,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-11",
      "name": "將軍塚青龍殿",
      "jp": "将軍塚青龍殿",
      "mapQuery": "将軍塚青龍殿 京都",
      "category": "sights",
      "area": "gion",
      "areaLabel": "祇園・清水・東山",
      "sakura": {
        "area": "gion",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月中旬–4月上旬",
        "description": "山上的櫻花與京都全景，可把賞花和眺望城市放在一起；出發前確認上山交通。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/seiryuden.html"
      },
      "description": "山上的櫻花與京都全景，可把賞花和眺望城市放在一起；出發前確認上山交通。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-12",
      "name": "南禪寺",
      "jp": "南禅寺",
      "mapQuery": "南禅寺 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "temple"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬為主",
        "description": "境內染井吉野與八重櫻，搭配三門、水路閣和禪寺空間；不只紅葉季值得來。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1107"
      },
      "description": "境內染井吉野與八重櫻，搭配三門、水路閣和禪寺空間；不只紅葉季值得來。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-13",
      "name": "平安神宮 神苑",
      "jp": "平安神宮 神苑",
      "mapQuery": "平安神宮 神苑 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "shrine",
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬",
        "description": "神苑的八重紅垂櫻是重點，池泉與橋廊帶出庭園春景；神苑與外苑開放範圍分開確認。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1108"
      },
      "description": "神苑的八重紅垂櫻是重點，池泉與橋廊帶出庭園春景；神苑與外苑開放範圍分開確認。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-14",
      "name": "岡崎疏水",
      "jp": "岡崎疏水",
      "mapQuery": "岡崎疏水 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月中旬",
        "description": "疏水沿線的櫻花映在水面，水岸、橋樑與春花構成岡崎的賞櫻主線。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1109"
      },
      "description": "疏水沿線的櫻花映在水面，水岸、橋樑與春花構成岡崎的賞櫻主線。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 28,
        "max": 36,
        "kmMin": 1.8,
        "kmMax": 2.7,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-15",
      "name": "岡崎公園",
      "jp": "岡崎公園",
      "mapQuery": "岡崎公園 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "park"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "平安神宮、美術館周邊的公園櫻花，視野開闊，適合與疏水花景一起看。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/okazaki.html"
      },
      "description": "平安神宮、美術館周邊的公園櫻花，視野開闊，適合與疏水花景一起看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 28,
        "max": 36,
        "kmMin": 1.8,
        "kmMax": 2.7,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-16",
      "name": "蹴上傾斜鐵道",
      "jp": "蹴上インクライン",
      "mapQuery": "蹴上インクライン 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "street"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "舊鐵道軌道兩側的櫻花形成長廊，是鐵道遺構與花景一起入鏡的代表位置。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/keageincline.html"
      },
      "description": "舊鐵道軌道兩側的櫻花形成長廊，是鐵道遺構與花景一起入鏡的代表位置。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-17",
      "name": "哲學之道",
      "jp": "哲学の道",
      "mapQuery": "哲学の道 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "street",
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "琵琶湖疏水分線旁的櫻花隧道，連續水岸風景與橋本關雪寄贈櫻花的故事。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1104"
      },
      "description": "琵琶湖疏水分線旁的櫻花隧道，連續水岸風景與橋本關雪寄贈櫻花的故事。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-18",
      "name": "真如堂",
      "jp": "真如堂",
      "mapQuery": "真如堂 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "temple"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬",
        "description": "本堂與三重塔周圍有春櫻，本堂旁的「たてかわ桜」也是名木，寺院氛圍較沉靜。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1105"
      },
      "description": "本堂與三重塔周圍有春櫻，本堂旁的「たてかわ桜」也是名木，寺院氛圍較沉靜。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-19",
      "name": "金戒光明寺",
      "jp": "金戒光明寺",
      "mapQuery": "金戒光明寺 京都",
      "category": "sights",
      "area": "okazaki",
      "areaLabel": "岡崎・南禪寺・哲學之道",
      "sakura": {
        "area": "east",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "染井吉野、大島櫻與垂櫻點綴境內，可把山門、石階與櫻花一起欣賞。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1106"
      },
      "description": "染井吉野、大島櫻與垂櫻點綴境內，可把山門、石階與櫻花一起欣賞。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-20",
      "name": "京都御苑",
      "jp": "京都御苑 近衛邸跡",
      "mapQuery": "京都御苑 近衛邸跡",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "park"
        ],
        "seasons": [
          "early",
          "main",
          "late"
        ],
        "period": "3月中旬–4月下旬（依品種）",
        "description": "近衛邸跡垂櫻是早春重點，苑內多種櫻花接力開放；園區很大，路線目的地先設近衛邸跡。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1114"
      },
      "description": "近衛邸跡垂櫻是早春重點，苑內多種櫻花接力開放；園區很大，路線目的地先設近衛邸跡。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 35,
        "max": 45,
        "kmMin": 2.3,
        "kmMax": 3.4,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-21",
      "name": "京都府廳舊本館",
      "jp": "京都府庁旧本館",
      "mapQuery": "京都府庁旧本館 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "garden",
          "building"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "舊本館中庭的垂櫻與近代洋式建築相映；庭院參觀時段與活動開放需另查。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1311"
      },
      "description": "舊本館中庭的垂櫻與近代洋式建築相映；庭院參觀時段與活動開放需另查。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true,
      "walkEstimate": {
        "min": 35,
        "max": 45,
        "kmMin": 2.3,
        "kmMax": 3.4,
        "basis": "位置概估；非即時導航"
      }
    },
    {
      "id": "sakura-22",
      "name": "二條城",
      "jp": "元離宮二条城",
      "mapQuery": "元離宮二条城 京都",
      "category": "sights",
      "area": "sanjo",
      "areaLabel": "市中心・御苑・二條城",
      "sakura": {
        "area": "center",
        "types": [
          "garden",
          "building"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬（依品種）",
        "description": "城內庭園有多種櫻花，花景可與城郭、御殿和庭園一併欣賞；特別活動以當年公告為準。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1115"
      },
      "description": "城內庭園有多種櫻花，花景可與城郭、御殿和庭園一併欣賞；特別活動以當年公告為準。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-23",
      "name": "渉成園",
      "jp": "渉成園",
      "mapQuery": "渉成園 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月末–4月中旬",
        "description": "東本願寺的飛地庭園，垂櫻配上池泉、橋與園景，是京都站一帶的賞櫻庭園。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1116"
      },
      "description": "東本願寺的飛地庭園，垂櫻配上池泉、橋與園景，是京都站一帶的賞櫻庭園。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-24",
      "name": "梅小路公園",
      "jp": "梅小路公園",
      "mapQuery": "梅小路公園 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "park"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬（依品種）",
        "description": "京都站西側的都市公園，種有多品種櫻花，可在寬敞綠地觀察不同花形。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1117"
      },
      "description": "京都站西側的都市公園，種有多品種櫻花，可在寬敞綠地觀察不同花形。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-25",
      "name": "東寺",
      "jp": "東寺",
      "mapQuery": "東寺 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月中旬–4月中旬",
        "description": "五重塔與春櫻同框，八重垂櫻「不二櫻」尤其醒目；夜間拝觀日期需確認當年公告。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1133"
      },
      "description": "五重塔與春櫻同框，八重垂櫻「不二櫻」尤其醒目；夜間拝觀日期需確認當年公告。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-26",
      "name": "上賀茂神社",
      "jp": "上賀茂神社",
      "mapQuery": "上賀茂神社 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "shrine"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬–中旬（依品種）",
        "description": "鳥居間草坪的御所櫻、齋王櫻各有姿態，境內其他櫻樹也值得一併觀賞。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1100"
      },
      "description": "鳥居間草坪的御所櫻、齋王櫻各有姿態，境內其他櫻樹也值得一併觀賞。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-27",
      "name": "京都府立植物園",
      "jp": "京都府立植物園",
      "mapQuery": "京都府立植物園 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "garden",
          "park"
        ],
        "seasons": [
          "early",
          "main",
          "late"
        ],
        "period": "3月中旬–4月下旬",
        "description": "多品種櫻花分批開放，適合觀察垂櫻、染井吉野與晚櫻差異，不用只押單一花期。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/syokubutsuen.html"
      },
      "description": "多品種櫻花分批開放，適合觀察垂櫻、染井吉野與晚櫻差異，不用只押單一花期。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-28",
      "name": "半木之道",
      "jp": "半木の道",
      "mapQuery": "半木の道 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "river",
          "street"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "植物園西側賀茂川岸的紅垂櫻步道，較偏晚櫻，可與植物園一併留意花況。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1103"
      },
      "description": "植物園西側賀茂川岸的紅垂櫻步道，較偏晚櫻，可與植物園一併留意花況。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-29",
      "name": "賀茂川堤",
      "jp": "賀茂川 北大路橋",
      "mapQuery": "賀茂川 北大路橋 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "北大路橋一帶的賀茂川岸櫻花，河面寬、視野開闊；與半木之道花型不同。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/kamogawatsutsumi.html"
      },
      "description": "北大路橋一帶的賀茂川岸櫻花，河面寬、視野開闊；與半木之道花型不同。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-30",
      "name": "高野川堤",
      "jp": "高野川 桜並木",
      "mapQuery": "高野川 桜並木 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "沿高野川延伸的染井吉野花景，可從出町柳往北看，呈現京都北側的河岸春色。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/kamogawatsutsumi.html"
      },
      "description": "沿高野川延伸的染井吉野花景，可從出町柳往北看，呈現京都北側的河岸春色。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-31",
      "name": "本滿寺",
      "jp": "本満寺",
      "mapQuery": "本満寺 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "境內大垂櫻是代表花景，樹冠展開的姿態與寺院空間一起看。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/honmanji.html"
      },
      "description": "境內大垂櫻是代表花景，樹冠展開的姿態與寺院空間一起看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-32",
      "name": "常照寺",
      "jp": "常照寺",
      "mapQuery": "常照寺 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月中旬",
        "description": "鷹峯寺院參道與境內有吉野櫻、山櫻與鬱金櫻，春花帶出不同於秋楓的風景。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1101"
      },
      "description": "鷹峯寺院參道與境內有吉野櫻、山櫻與鬱金櫻，春花帶出不同於秋楓的風景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-33",
      "name": "平野神社",
      "jp": "平野神社",
      "mapQuery": "平野神社 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "shrine"
        ],
        "seasons": [
          "early",
          "main",
          "late"
        ],
        "period": "3月中旬–4月下旬（依品種）",
        "description": "櫻花品種多、花期接力，是觀察不同花色花形的重點；珍稀品種與染井吉野都可留意。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/hiranojinzya.html"
      },
      "description": "櫻花品種多、花期接力，是觀察不同花色花形的重點；珍稀品種與染井吉野都可留意。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-34",
      "name": "龍安寺",
      "jp": "龍安寺",
      "mapQuery": "龍安寺 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "石庭旁的垂櫻替白砂與石組添色，鏡容池周邊也可看春日庭園花景。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1120"
      },
      "description": "石庭旁的垂櫻替白砂與石組添色，鏡容池周邊也可看春日庭園花景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-35",
      "name": "仁和寺",
      "jp": "仁和寺",
      "mapQuery": "仁和寺 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "temple"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬；御室櫻偏晚",
        "description": "低矮的御室櫻是代表，花與五重塔組成獨特景觀；旅程初段未必到御室櫻高峰。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1121"
      },
      "description": "低矮的御室櫻是代表，花與五重塔組成獨特景觀；旅程初段未必到御室櫻高峰。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-36",
      "name": "妙心寺 退藏院",
      "jp": "妙心寺 退蔵院",
      "mapQuery": "妙心寺 退蔵院 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬為主",
        "description": "入口附近醒目的紅垂櫻，搭配余香苑庭園；可專心看花枝、白砂與庭園構圖。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1126"
      },
      "description": "入口附近醒目的紅垂櫻，搭配余香苑庭園；可專心看花枝、白砂與庭園構圖。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-37",
      "name": "原谷苑",
      "jp": "原谷苑",
      "mapQuery": "原谷苑 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "以紅垂櫻等花木營造密集花景，像走進花園；季節開放、票價與交通請查當年資訊。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1119"
      },
      "description": "以紅垂櫻等花木營造密集花景，像走進花園；季節開放、票價與交通請查當年資訊。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-38",
      "name": "嵐電櫻花隧道",
      "jp": "嵐電 鳴滝駅",
      "mapQuery": "嵐電 鳴滝駅 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "rail"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "鳴瀧到宇多野間的櫻花隧道，可從嵐電車窗欣賞；目的地設鳴瀧站，現地搭乘北野線看花。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/randen.html"
      },
      "description": "鳴瀧到宇多野間的櫻花隧道，可從嵐電車窗欣賞；目的地設鳴瀧站，現地搭乘北野線看花。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-39",
      "name": "妙顯寺",
      "jp": "妙顕寺",
      "mapQuery": "妙顕寺 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "山門與方丈周邊的垂櫻、染井吉野，適合把西陣寺院群的賞櫻串在一起。",
        "sourceUrl": "https://souda-kyoto.jp/blog/00390.html"
      },
      "description": "山門與方丈周邊的垂櫻、染井吉野，適合把西陣寺院群的賞櫻串在一起。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-40",
      "name": "妙蓮寺",
      "jp": "妙蓮寺",
      "mapQuery": "妙蓮寺 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬（春季參考）",
        "description": "御會式櫻有獨特開花時序，境內春櫻也值得留意；可看近地面的花枝與寺院景致。",
        "sourceUrl": "https://souda-kyoto.jp/guide/spot/myorenji.html"
      },
      "description": "御會式櫻有獨特開花時序，境內春櫻也值得留意；可看近地面的花枝與寺院景致。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-41",
      "name": "雨寶院",
      "jp": "雨宝院",
      "mapQuery": "雨宝院 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "小小境內的歡喜櫻、觀音櫻與其他品種交織，花枝密集，是西陣晚櫻重點。",
        "sourceUrl": "https://souda-kyoto.jp/guide/spot/uhoin.html"
      },
      "description": "小小境內的歡喜櫻、觀音櫻與其他品種交織，花枝密集，是西陣晚櫻重點。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-42",
      "name": "本法寺",
      "jp": "本法寺",
      "mapQuery": "本法寺 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "西陣寺院境內的春櫻，可將堂宇與花景一起欣賞，作為北側寺院賞櫻的一站。",
        "sourceUrl": "https://souda-kyoto.jp/blog/00989.html"
      },
      "description": "西陣寺院境內的春櫻，可將堂宇與花景一起欣賞，作為北側寺院賞櫻的一站。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-43",
      "name": "水火天滿宮",
      "jp": "水火天満宮",
      "mapQuery": "水火天満宮 京都",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "洛北・西陣・賀茂川",
      "sakura": {
        "area": "north",
        "types": [
          "shrine"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "小神社的垂櫻是重點，短暫停留也能欣賞花枝，適合搭配西陣寺院花景。",
        "sourceUrl": "https://souda-kyoto.jp/blog/00989.html"
      },
      "description": "小神社的垂櫻是重點，短暫停留也能欣賞花枝，適合搭配西陣寺院花景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-44",
      "name": "千本釋迦堂",
      "jp": "千本釈迦堂 大報恩寺",
      "mapQuery": "千本釈迦堂 大報恩寺 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "北野・御室・金閣寺一帶",
      "sakura": {
        "area": "kitano",
        "types": [
          "temple"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "本堂前的阿龜垂櫻，與阿龜故事和國寶本堂一起欣賞；不是只有大型名所才值得看。",
        "sourceUrl": "https://souda-kyoto.jp/guide/spot/senbonshakado.html"
      },
      "description": "本堂前的阿龜垂櫻，與阿龜故事和國寶本堂一起欣賞；不是只有大型名所才值得看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-45",
      "name": "嵐山公園・渡月橋",
      "jp": "嵐山公園 渡月橋",
      "mapQuery": "嵐山公園 渡月橋 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "嵐山・嵯峨",
      "sakura": {
        "area": "arashiyama",
        "types": [
          "park",
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "桂川岸、公園與渡月橋附近的櫻花，配上嵐山山色；花景分布在不同河岸位置。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/arashiyama.html"
      },
      "description": "桂川岸、公園與渡月橋附近的櫻花，配上嵐山山色；花景分布在不同河岸位置。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-46",
      "name": "天龍寺",
      "jp": "天龍寺",
      "mapQuery": "天龍寺 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "嵐山・嵯峨",
      "sakura": {
        "area": "arashiyama",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "曹源池庭園深處的染井吉野、紅垂櫻等，寺院庭園與嵐山借景一起看。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1125"
      },
      "description": "曹源池庭園深處的染井吉野、紅垂櫻等，寺院庭園與嵐山借景一起看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-47",
      "name": "大覺寺・大澤池",
      "jp": "大覚寺 大沢池",
      "mapQuery": "大覚寺 大沢池 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "嵐山・嵯峨",
      "sakura": {
        "area": "arashiyama",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "大澤池周圍櫻花映在水面，開闊池景與古寺構成嵯峨野春色。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1123"
      },
      "description": "大澤池周圍櫻花映在水面，開闊池景與古寺構成嵯峨野春色。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-48",
      "name": "二尊院",
      "jp": "二尊院",
      "mapQuery": "二尊院 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "嵐山・嵯峨",
      "sakura": {
        "area": "arashiyama",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "4月上旬為主",
        "description": "春天參道也有櫻花，從「紅葉馬場」看春花，寺院氛圍與嵯峨野山色相接。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1124"
      },
      "description": "春天參道也有櫻花，從「紅葉馬場」看春花，寺院氛圍與嵯峨野山色相接。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-49",
      "name": "車折神社",
      "jp": "車折神社",
      "mapQuery": "車折神社 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "嵐山・嵯峨",
      "sakura": {
        "area": "arashiyama",
        "types": [
          "shrine"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月中旬–4月上旬（依品種）",
        "description": "境內多種櫻花接力，是嵐山線沿途可看的神社春景。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/kurumazakijinja.html"
      },
      "description": "境內多種櫻花接力，是嵐山線沿途可看的神社春景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-50",
      "name": "毘沙門堂",
      "jp": "毘沙門堂",
      "mapQuery": "毘沙門堂 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "山科・醍醐",
      "sakura": {
        "area": "yamashina",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "4月上旬為主",
        "description": "宸殿前的垂櫻與本堂周圍染井吉野是重點；山科寺院花景可與疏水同日看。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1129"
      },
      "description": "宸殿前的垂櫻與本堂周圍染井吉野是重點；山科寺院花景可與疏水同日看。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-51",
      "name": "山科疏水",
      "jp": "山科疏水",
      "mapQuery": "山科疏水 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "山科・醍醐",
      "sakura": {
        "area": "yamashina",
        "types": [
          "river",
          "street"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "疏水旁櫻花沿線延伸，水岸與春日植被一起看；可從山科一帶選一段賞花。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1130"
      },
      "description": "疏水旁櫻花沿線延伸，水岸與春日植被一起看；可從山科一帶選一段賞花。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-52",
      "name": "勸修寺",
      "jp": "勧修寺",
      "mapQuery": "勧修寺 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "山科・醍醐",
      "sakura": {
        "area": "yamashina",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "4月上旬為主",
        "description": "參道櫻花與池泉庭園春景，賞花時可細看池邊花枝與寺院空間。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1131"
      },
      "description": "參道櫻花與池泉庭園春景，賞花時可細看池邊花枝與寺院空間。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-53",
      "name": "醍醐寺",
      "jp": "醍醐寺",
      "mapQuery": "醍醐寺 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "山科・醍醐",
      "sakura": {
        "area": "yamashina",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "early",
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "「醍醐花見」的歷史名所，霊寶館垂櫻、三寶院與伽藍花景各有重點；範圍與票種另查。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1135"
      },
      "description": "「醍醐花見」的歷史名所，霊寶館垂櫻、三寶院與伽藍花景各有重點；範圍與票種另查。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-54",
      "name": "城南宮",
      "jp": "城南宮",
      "mapQuery": "城南宮 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "shrine",
          "garden"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "這次看的是神苑紅垂櫻，與較早的垂梅季不同；以春櫻花況判斷造訪時機。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1134"
      },
      "description": "這次看的是神苑紅垂櫻，與較早的垂梅季不同；以春櫻花況判斷造訪時機。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-55",
      "name": "伏見宇治川派流",
      "jp": "宇治川派流 伏見",
      "mapQuery": "宇治川派流 伏見 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "river"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "伏見酒藏一帶的水路春櫻，柳樹、櫻花與水岸建築組成不同於市中心的風景。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/fushimi.html"
      },
      "description": "伏見酒藏一帶的水路春櫻，柳樹、櫻花與水岸建築組成不同於市中心的風景。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-56",
      "name": "淀水路",
      "jp": "淀水路 河津桜",
      "mapQuery": "淀水路 河津桜 京都",
      "category": "sights",
      "area": "rakunan",
      "areaLabel": "京都站・伏見・淀",
      "sakura": {
        "area": "south",
        "types": [
          "river",
          "street"
        ],
        "seasons": [
          "early"
        ],
        "period": "2月中旬–3月下旬",
        "description": "河津櫻屬早櫻，通常比染井吉野早；本次3/27才到京都，可能已過高峰，先看花況再決定。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/yodosuiro.html"
      },
      "description": "河津櫻屬早櫻，通常比染井吉野早；本次3/27才到京都，可能已過高峰，先看花況再決定。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-57",
      "name": "平等院鳳凰堂",
      "jp": "平等院",
      "mapQuery": "平等院 京都",
      "category": "sights",
      "area": "uji",
      "areaLabel": "宇治・八幡",
      "sakura": {
        "area": "uji",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "鳳凰堂、阿字池與春櫻一起看，寺院庭園可與宇治河岸花景搭配。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/byodoin.html"
      },
      "description": "鳳凰堂、阿字池與春櫻一起看，寺院庭園可與宇治河岸花景搭配。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-58",
      "name": "宇治橋上流",
      "jp": "宇治橋 上流",
      "mapQuery": "宇治橋 上流 京都",
      "category": "sights",
      "area": "uji",
      "areaLabel": "宇治・八幡",
      "sakura": {
        "area": "uji",
        "types": [
          "river",
          "park"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "宇治川上游兩岸的櫻花與河中島公園春景，賞花範圍可與平等院分開選。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/ujibashi.html"
      },
      "description": "宇治川上游兩岸的櫻花與河中島公園春景，賞花範圍可與平等院分開選。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-59",
      "name": "背割堤",
      "jp": "淀川河川公園 背割堤地区",
      "mapQuery": "淀川河川公園 背割堤地区 京都",
      "category": "sights",
      "area": "uji",
      "areaLabel": "宇治・八幡",
      "sakura": {
        "area": "uji",
        "types": [
          "river",
          "park"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "堤上的長列染井吉野形成櫻花長廊，是八幡一帶的開闊河岸賞花重點。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/yodogawakasen.html"
      },
      "description": "堤上的長列染井吉野形成櫻花長廊，是八幡一帶的開闊河岸賞花重點。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-60",
      "name": "石清水八幡宮",
      "jp": "石清水八幡宮",
      "mapQuery": "石清水八幡宮 京都",
      "category": "sights",
      "area": "uji",
      "areaLabel": "宇治・八幡",
      "sakura": {
        "area": "uji",
        "types": [
          "shrine"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "3月下旬–4月下旬（依品種）",
        "description": "男山與神苑的春櫻，山櫻、染井吉野及垂櫻分布在不同位置；可與背割堤比較花況。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1138"
      },
      "description": "男山與神苑的春櫻，山櫻、染井吉野及垂櫻分布在不同位置；可與背割堤比較花況。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-61",
      "name": "三千院",
      "jp": "三千院",
      "mapQuery": "三千院",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "temple",
          "garden"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "大原寺院的山櫻與垂櫻，春花、苔地與往生極樂院一起看；山區進度可能較市區慢。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1097"
      },
      "description": "大原寺院的山櫻與垂櫻，春花、苔地與往生極樂院一起看；山區進度可能較市區慢。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-62",
      "name": "寂光院",
      "jp": "寂光院",
      "mapQuery": "寂光院",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "temple"
        ],
        "seasons": [
          "main"
        ],
        "period": "3月下旬–4月上旬",
        "description": "大原古寺的春櫻，與山村景致、寺院歷史一起欣賞，適合喜歡較小寺院的人。",
        "sourceUrl": "https://www.keihan.co.jp/sakura/kyoto/spot/jakkoin.html"
      },
      "description": "大原古寺的春櫻，與山村景致、寺院歷史一起欣賞，適合喜歡較小寺院的人。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-63",
      "name": "八瀨",
      "jp": "八瀬比叡山口駅",
      "mapQuery": "八瀬比叡山口駅",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "river",
          "rail"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–下旬（依海拔）",
        "description": "八瀨與比叡山沿線花期受海拔影響，從山腳到山上陸續開；先看當年交通與花況。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1098"
      },
      "description": "八瀨與比叡山沿線花期受海拔影響，從山腳到山上陸續開；先看當年交通與花況。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-64",
      "name": "鞍馬寺",
      "jp": "鞍馬寺",
      "mapQuery": "鞍馬寺",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "temple"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–下旬（依位置）",
        "description": "鞍馬山的雲珠櫻，本殿周邊可見山櫻、染井吉野、八重櫻；海拔與品種使時序不同。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1099"
      },
      "description": "鞍馬山的雲珠櫻，本殿周邊可見山櫻、染井吉野、八重櫻；海拔與品種使時序不同。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-65",
      "name": "常照皇寺",
      "jp": "常照皇寺",
      "mapQuery": "常照皇寺",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "temple"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "京北寺院的九重櫻、左近櫻與御車返櫻，名木與古寺風景是主角；需預留郊區交通。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1095"
      },
      "description": "京北寺院的九重櫻、左近櫻與御車返櫻，名木與古寺風景是主角；需預留郊區交通。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-66",
      "name": "寶泉寺（京北）",
      "jp": "宝泉寺 京北",
      "mapQuery": "宝泉寺 京北",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "temple"
        ],
        "seasons": [
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "京北的八重紅垂櫻與御室櫻；這是寶泉寺，不是大原寶泉院，地圖目的地請分清楚。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1244"
      },
      "description": "京北的八重紅垂櫻與御室櫻；這是寶泉寺，不是大原寶泉院，地圖目的地請分清楚。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-67",
      "name": "大原野神社",
      "jp": "大原野神社",
      "mapQuery": "大原野神社 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "西山・大原野",
      "sakura": {
        "area": "west",
        "types": [
          "shrine"
        ],
        "seasons": [
          "main"
        ],
        "period": "4月上旬",
        "description": "純白垂櫻「千眼櫻」是重點，滿開觀賞期短，出發前尤其要確認花況。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1127"
      },
      "description": "純白垂櫻「千眼櫻」是重點，滿開觀賞期短，出發前尤其要確認花況。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-68",
      "name": "善峯寺",
      "jp": "善峯寺",
      "mapQuery": "善峯寺 京都",
      "category": "sights",
      "area": "rakusai",
      "areaLabel": "西山・大原野",
      "sakura": {
        "area": "west",
        "types": [
          "temple"
        ],
        "seasons": [
          "main",
          "late"
        ],
        "period": "4月上旬–中旬",
        "description": "彼岸櫻、山櫻、垂櫻與牡丹櫻裝點西山寺院，山坡與眺望風景一起看；先確認末段交通。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1128"
      },
      "description": "彼岸櫻、山櫻、垂櫻與牡丹櫻裝點西山寺院，山坡與眺望風景一起看；先確認末段交通。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    },
    {
      "id": "sakura-69",
      "name": "出雲大神宮",
      "jp": "出雲大神宮",
      "mapQuery": "出雲大神宮",
      "category": "sights",
      "area": "rakuhoku",
      "areaLabel": "大原・鞍馬・京北・龜岡",
      "sakura": {
        "area": "outer",
        "types": [
          "shrine"
        ],
        "seasons": [
          "main"
        ],
        "period": "4月上旬",
        "description": "龜岡神社境內的山櫻與染井吉野，將京都市外的花景也納入收藏。",
        "sourceUrl": "https://ja.kyoto.travel/flower/sakura/single.php?flower_id=1137"
      },
      "description": "龜岡神社境內的山櫻與染井吉野，將京都市外的花景也納入收藏。",
      "typeLabel": "櫻花景點",
      "aruWalkOutside": true
    }
  ]
};
