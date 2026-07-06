window.KYOTO_ARCHITECTURE_EXTRA=[
 {area:'sanjo',kind:'spots',value:'新風館|近代建築・建築再生|烏丸御池附近的建築再生設施。適合接三條通近代建築線。'},
 {area:'kawaramachi',kind:'spots',value:'立誠ガーデン ヒューリック京都|舊小學・建築再生|木屋町、河原町一帶的舊小學校再生空間。適合接先斗町、木屋町、高瀨川散策。'},
 {area:'sanjo',kind:'spots',value:'京都市役所 本廳舍|昭和近代建築・公共建築|河原町御池一帶的昭和近代公共建築。適合排在新風館到寺町老舖線之間。'}
];
window.KYOTO_AREAS=window.KYOTO_AREAS||{};
window.KYOTO_ARCHITECTURE_EXTRA.forEach(x=>{
 const a=window.KYOTO_AREAS[x.area]=window.KYOTO_AREAS[x.area]||{};
 const list=a[x.kind]=a[x.kind]||[];
 const name=x.value.split('|')[0];
 if(!list.some(v=>String(v).split('|')[0]===name))list.push(x.value);
});