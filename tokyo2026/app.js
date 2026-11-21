import { hotel, flights, lights, days, tasks } from './trip-data.js?v=20261121-revision2';
import { categories, places } from './places.js?v=20261118-3';

const $ = (selector) => document.querySelector(selector);
const escape = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

function maps(query) {
  return 'https://www.google.com/maps/search/?' + new URLSearchParams({ api: '1', query });
}

function directions(origin, destination, travelmode) {
  return 'https://www.google.com/maps/dir/?' + new URLSearchParams({
    api: '1', origin, destination, travelmode,
  });
}
const hotelQuery = hotel.query + ' ' + hotel.address;

function link(label, url, primary = false) {
  return `<a ${primary ? 'class="primary"' : ''} href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;
}

function badge(label) {
  const confirmed = ['已確認', '已預約'].includes(label);
  return `<span class="badge${confirmed ? ' confirmed' : ''}">${escape(label)}</span>`;
}

const dayButtons = $('#days');
dayButtons.innerHTML = days.map(({ date, weekday }, index) => `
  <button type="button" role="tab" id="date-${index}" data-index="${index}" aria-selected="false" aria-controls="day-detail" tabindex="-1" aria-label="${date}（${weekday}）">
    <strong>${date}</strong><small>${weekday}</small>
  </button>`).join('');
const tabs = [...dayButtons.children];

function showDay(index, focus = false) {
  const day = days[index];
  for (const button of tabs) {
    const selected = Number(button.dataset.index) === index;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  }
  const panel = $('#day-detail');
  panel.setAttribute('aria-labelledby', tabs[index].id);
  panel.innerHTML = `<p class="kicker">${day.date}（${day.weekday}）</p><h3>${escape(day.title)}</h3>
    <ol class="timeline">${day.stops.map((stop) => `<li>
      ${badge(stop.status)}<span class="muted">${escape(stop.time)}</span>
      <p><strong>${escape(stop.title)}</strong>　${escape(stop.note)}</p>
      ${stop.query ? `<div class="actions">${link('Google Maps', maps(stop.query))}</div>` : ''}
    </li>`).join('')}</ol>`;
  if (focus) tabs[index].focus();
}

dayButtons.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) showDay(Number(button.dataset.index));
});
dayButtons.addEventListener('keydown', (event) => {
  const index = tabs.indexOf(event.target);
  if (index < 0) return;
  let next;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = days.length - 1;
  if (event.key === 'ArrowLeft') next = (index - 1 + days.length) % days.length;
  if (event.key === 'ArrowRight') next = (index + 1) % days.length;
  if (next === undefined) return;
  event.preventDefault();
  showDay(next, true);
});
const tokyoDate = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tokyo', month: '2-digit', day: '2-digit', year: 'numeric' });
const date = Object.fromEntries(tokyoDate.formatToParts(new Date()).map(({ type, value }) => [type, value]));
const today = date.year === '2026' ? days.findIndex((day) => day.date === date.month + '/' + date.day) : -1;
showDay(Math.max(0, today));

const categoryButtons = $('#categories');
const quickButtons = $('#quick-categories');
const search = $('#search');
const area = $('#area');
const walkLimit = $('#walk-limit');
let category = '';
let quickCategory = '';
const quickGroups = {
  '熟食餐廳': ['定食', '拉麵', '烏龍麵', '燒肉', '炸豬排', '壽喜燒', '關東煮', '洋食', '中華熟食'],
  '咖啡・甜點': ['咖啡', '甜點'], '早餐與早午餐': ['早餐'],
  '日常採買': ['超市', '便利商店', '藥妝', '購物'],
  '書店・美術館': ['書店', '美術館'], '散步景點': ['散步'],
};
const filterButtons = (values, all) => ['', ...values].map((value) => `
  <button type="button" data-category="${escape(value)}" aria-pressed="${value === ''}">${escape(value || all)}</button>`).join('');
const showCategories = () => {
  categoryButtons.innerHTML = filterButtons(quickGroups[quickCategory] || categories, '全部細分類');
};
quickButtons.innerHTML = filterButtons(Object.keys(quickGroups), '全部');
showCategories();
for (const name of new Set(places.map((place) => place.area))) {
  area.add(new Option(name, name));
}
const normalize = (value) => value.normalize('NFKC').toLocaleLowerCase();
const searchText = places.map((place) => normalize([
  place.name, place.japanese, place.aliases, place.mapQuery, place.area, place.address, place.note, place.order, place.kinds.join(' '),
].join(' ')));

function placeCard(place) {
  const query = place.mapQuery || place.japanese + ' ' + place.address;
  const { minutes, meters } = place.walk;
  const distance = meters >= 1000 ? (meters / 1000).toFixed(1) + ' 公里' : meters + ' 公尺';
  const routeLabel = place.routeLabel ? '至' + place.routeLabel : '自飯店出發';
  const walk = place.insideHotel ? '飯店 1F' : routeLabel + ' · 約 ' + minutes + ' 分／' + distance;
  const details = [
    ['地址', place.address],
    ['適合時段', place.visit],
    ['餐點參考價', place.price || (place.order ? '以分店當日菜單為準' : '')],
    ['提醒', place.caution],
  ].filter(([, value]) => value);
  return `<article class="card place">
    <p class="kicker">${escape(place.kinds.join('・'))} · ${escape(place.area)}</p>
    <h3>${escape(place.name)}</h3>
    <p class="jp" lang="ja">${escape(place.japanese)}</p>
    <p class="walk-text">${escape(walk)}</p>
    <p>${escape(place.note)}</p>
    ${place.order ? `<p><strong>推薦</strong> ${escape(place.order)}</p>` : ''}
    <p class="muted">${escape(place.hours || '營業時間待確認，出發前請查官方頁。')}</p>
    <div class="actions">${link('Google Maps', maps(query), true)}
      ${place.insideHotel ? '' : link('飯店出發步行', directions(hotelQuery, place.routeQuery || query, 'walking'))}
      ${place.official ? link('官方網站', place.official) : ''}${place.menu ? link('官方菜單', place.menu) : ''}
      ${place.reference ? link('查證來源', place.reference) : ''}</div>
    <details><summary>地址、時段與提醒</summary>
      <dl>${details.map(([label, value]) => `<dt>${label}</dt><dd>${escape(value)}</dd>`).join('')}</dl>
    </details>
  </article>`;
}

function renderPlaces() {
  const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  const group = quickGroups[quickCategory];
  const results = places.filter((place, index) => (!category || place.kinds.includes(category))
    && (!group || place.kinds.some((kind) => group.includes(kind)))
    && (!area.value || place.area === area.value)
    && (!walkLimit.value || place.walk.minutes <= Number(walkLimit.value))
    && words.every((word) => searchText[index].includes(word)));
  for (const [container, value] of [[quickButtons, quickCategory], [categoryButtons, category]]) {
    for (const button of container.children) button.setAttribute('aria-pressed', String(value === button.dataset.category));
  }
  $('#results-count').textContent = `顯示 ${results.length}／${places.length} 個地點`;
  $('#catalog').innerHTML = results.length ? results.map(placeCard).join('')
    : '<p class="card">找不到符合條件的地點。可換個關鍵字或清除篩選。</p>';
}

quickButtons.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  quickCategory = button.dataset.category;
  category = '';
  showCategories();
  renderPlaces();
});
categoryButtons.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  category = button.dataset.category;
  renderPlaces();
});
search.addEventListener('input', renderPlaces);
area.addEventListener('change', renderPlaces);
walkLimit.addEventListener('change', renderPlaces);
$('#clear').addEventListener('click', () => {
  quickCategory = '';
  category = '';
  search.value = '';
  area.value = '';
  walkLimit.value = '';
  showCategories();
  renderPlaces();
  search.focus();
});
renderPlaces();

const lightCard = (light) => `<article class="card">
  <p class="kicker">${escape(light.area)} · 最後一天 ${escape(light.through)}</p>
  <h3>${escape(light.name)}</h3><p class="jp" lang="ja">${escape(light.japanese)}</p>
  <p><strong>${escape(light.dates)} · ${escape(light.hours)}</strong></p>
  <p>${escape(light.note)}</p>
  <p class="muted"><strong>交通</strong> ${escape(light.access)}</p>
  <div class="actions">${link('Google Maps', maps(light.query), true)}${link('官方公告', light.official)}</div>
</article>`;
const lightFilters = $('#light-filters');
const lightChoices = {
  '12/25 最後一天': (event) => event.lastDate === '2026-12-25',
  '12/26 還能看': (event) => event.firstDate <= '2026-12-26' && event.lastDate >= '2026-12-26',
  '12/28 還能看': (event) => event.firstDate <= '2026-12-28' && event.lastDate >= '2026-12-28',
};
function showLights(choice) {
  const matches = choice ? lights.filter(lightChoices[choice]) : lights;
  $('#light-cards').innerHTML = matches.map(lightCard).join('');
  for (const button of lightFilters.children) button.setAttribute('aria-pressed', String(choice === button.dataset.category));
}
lightFilters.innerHTML = filterButtons(Object.keys(lightChoices), '全部');
lightFilters.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) showLights(button.dataset.category);
});
showLights('');

$('#stay-cards').innerHTML = flights.map((flight) => `<article class="card">
  <p class="kicker">${flight.date} · 當地時間</p><h3>台灣虎航 ${flight.code}</h3>
  <p>${escape(flight.route)}</p>
  <p class="muted">${escape(flight.checkIn)}</p>
  <div class="actions">${link('成田 T2 地圖', maps(flight.airport), true)}${link('桃園 T1 地圖', maps('Taiwan Taoyuan International Airport Terminal 1'))}</div>
</article>`).join('') + `<article class="card">
  <p class="kicker">12/23–12/29 · 6 晚</p>
  <h3>${escape(hotel.name)}</h3><p class="jp" lang="ja">${escape(hotel.japanese)}</p>
  <p>${escape(hotel.address)} · 15:00 後入住、11:00 前退房</p>
  <p>六本木站 5 號出口步行約 1 分、3 號出口約 2 分（飯店官方）。拖行李可先查車站電梯動線。</p>
  <div class="actions">${link('Google Maps', maps(hotel.query), true)}${link('飯店交通', hotel.access)}
    ${link('六本木站電梯', 'https://www.tokyometro.jp/station/roppongi/accessibility/index.html')}</div>
</article>`;
const narita = flights[0].airport;
$('#transit-links').innerHTML =
  link('成田 T2 → 飯店', directions(narita, hotelQuery, 'transit'), true) +
  link('飯店 → 成田 T2', directions(hotelQuery, narita, 'transit'), true) +
  link('京成 Skyliner', 'https://www.keisei.co.jp/keisei/tetudou/skyliner/us/traffic/skyliner_1123.php');

const storageKey = 'tokyo2026.checklist.v2';
let saved = new Map();
try {
  const data = JSON.parse(localStorage.getItem(storageKey));
  if (data && typeof data === 'object') saved = new Map(Object.entries(data));
} catch {
  // The source statuses remain available with storage disabled.
}

const taskList = $('#tasks');
taskList.innerHTML = tasks.map(([id, title, status, note, url]) => `
  <label class="task">
    <input type="checkbox" data-task="${id}" ${(saved.get(id) ?? ['已確認', '已預約'].includes(status)) ? 'checked' : ''}>
    <span><strong>${escape(title)}</strong><small>${badge(status)}${escape(note)}
    ${url ? link('官方入口', url) : ''}</small></span>
  </label>`).join('');

function showProgress() {
  $('#task-progress').textContent = `已勾選 ${taskList.querySelectorAll('input:checked').length}／${tasks.length}`;
}

taskList.addEventListener('change', ({ target }) => {
  saved.set(target.dataset.task, target.checked);
  try {
    localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(saved)));
  } catch {
    $('#prepare .section-note').textContent = '目前瀏覽器無法保存勾選，重新整理後將還原。';
  }
  showProgress();
});
showProgress();
