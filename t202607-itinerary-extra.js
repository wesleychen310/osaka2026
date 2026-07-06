const KYOTO_DAY5={
 id:'d5',day:'Day 5',date:'2026-07-13',shortDate:'7/13',dateText:'7月13日（一）',weekday:'一',title:'新風館 → 舊京都市役所 → 立誠小學校',summary:'把烏丸御池、河原町御池、木屋町的近代建築與舊校舍集中處理；不拉遠，適合旅程後段補京都市區建築線。',steps:[
  {time:'上午',title:'飯店 → 新風館',why:'從四条烏丸往烏丸御池上行，先看舊京都中央電話局改修的新風館。',route:[{label:'イビススタイルズ京都四条',map:'イビススタイルズ京都四条'},{label:'烏丸御池',map:'烏丸御池 京都'},{label:'新風館',map:'新風館 京都'}],dest:'新風館',map:'新風館 京都'},
  {time:'中午前後',title:'三條通近代建築線',why:'新風館後可接中京郵便局、京都文化博物館別館與三條通近代建築群。這段建築密度高，移動成本低。',route:[{label:'新風館',map:'新風館 京都'},{label:'中京郵便局',map:'中京郵便局 京都'},{label:'京都文化博物館 別館',map:'京都文化博物館 別館'},{label:'1928ビル',map:'1928ビル 京都'}],dest:'京都文化博物館 別館',map:'京都文化博物館 別館'},
  {time:'下午',title:'舊京都市役所、本能寺、寺町',why:'往河原町御池方向移動，看京都市役所本廳舍，再接本能寺與寺町。這段能銜接老舖與書店線。',route:[{label:'京都文化博物館 別館',map:'京都文化博物館 別館'},{label:'京都市役所 本廳舍',map:'京都市役所 本庁舎'},{label:'本能寺',map:'本能寺 京都'},{label:'寺町通',map:'寺町通 京都'}],dest:'京都市役所 本廳舍',map:'京都市役所 本庁舎'},
  {time:'傍晚',title:'立誠小學校、木屋町、高瀨川',why:'最後往木屋町與高瀨川，安排立誠ガーデン ヒューリック京都。適合接先斗町、河原町晚餐或散步回四条烏丸。',route:[{label:'寺町通',map:'寺町通 京都'},{label:'立誠ガーデン ヒューリック京都',map:'立誠ガーデン ヒューリック京都'},{label:'木屋町通',map:'木屋町通 京都'},{label:'高瀨川',map:'高瀬川 京都'},{label:'四条烏丸',map:'四条烏丸 京都'}],dest:'立誠ガーデン ヒューリック京都',map:'立誠ガーデン ヒューリック京都'}],backups:[
  {title:'近代建築追加',items:['京都府京都文化博物館','中京郵便局','1928ビル','東華菜館 本店']},
  {title:'晚餐接法',items:['牛たんの檸檬 京都店','弘 先斗町別邸','三嶋亭 本店','モリタ屋 木屋町店']}]
};
window.KYOTO_ITINERARY=window.KYOTO_ITINERARY||{days:[]};
window.KYOTO_ITINERARY.days=window.KYOTO_ITINERARY.days||[];
if(!window.KYOTO_ITINERARY.days.some(d=>d.id==='d5'))window.KYOTO_ITINERARY.days.push(KYOTO_DAY5);