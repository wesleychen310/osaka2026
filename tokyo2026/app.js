import { hotel, flights, lights, days, tasks } from './trip-data.js?v=20261118-2';
import { categories, places } from './places.js?v=20261118-2';

const $ = (selector) => document.querySelector(selector);
const escape = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

function maps(query) {
  return 'https://www.google.com/maps/search/?' + new URLSearchParams({ api: '1', query });
}

function walkTo(query) {
  return 'https://www.google.com/maps/dir/?' + new URLSearchParams({
    api: '1', origin: hotel.query + ' ' + hotel.address, destination: query, travelmode: 'walking',
  });
}

function link(label, url, primary = false) {
  return `<a ${primary ? 'class="primary"' : ''} href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;
}

function badge(label) {
  const confirmed = ['已確認', '已預約'].includes(label);
  return `<span class="badge${confirmed ? ' confirmed' : ''}">${escape(label)}</span>`;
}

const dayButtons = $('#days');
dayButtons.innerHTML = days.map(({ date, weekday }, index) => `
  <button type="button" data-index="${index}" aria-pressed="false" aria-controls="day-detail">
    <strong>${date}</strong><small>${weekday}</small>
  </button>`).join('');

function showDay(index) {
  const day = days[index];
  for (const button of dayButtons.children) {
    button.setAttribute('aria-pressed', String(Number(button.dataset.index) === index));
  }
  $('#day-detail').innerHTML = `<p class="kicker">${day.date}（${day.weekday}）</p><h3>${escape(day.title)}</h3>
    <ol class="timeline">${day.stops.map((stop) => `<li>
      ${badge(stop.status)}<span class="muted">${escape(stop.time)}</span>
      <p><strong>${escape(stop.title)}</strong>　${escape(stop.note)}</p>
      ${stop.query ? `<div class="actions">${link('Google Maps', maps(stop.query))}</div>` : ''}
    </li>`).join('')}</ol>`;
}

dayButtons.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) showDay(Number(button.dataset.index));
});
showDay(0);

const categoryButtons = $('#categories');
const search = $('#search');
const area = $('#area');
const walkLimit = $('#walk-limit');
let category = '';
categoryButtons.innerHTML = ['', ...categories].map((value) => `
  <button type="button" data-category="${escape(value)}" aria-pressed="${value === ''}">
    ${escape(value || '全部')}
  </button>`).join('');
for (const name of new Set(places.map((place) => place.area))) {
  area.add(new Option(name, name));
}
const normalize = (value) => value.normalize('NFKC').toLocaleLowerCase();
const searchText = places.map((place) => normalize([
  place.name, place.japanese, place.area, place.address, place.note, place.kinds.join(' '),
].join(' ')));

function placeCard(place) {
  const query = place.mapQuery || place.japanese + ' ' + place.address;
  const { minutes, meters } = place.walk;
  const distance = meters >= 1000 ? (meters / 1000).toFixed(1) + ' 公里' : meters + ' 公尺';
  const routeLabel = place.routeLabel ? '至' + place.routeLabel : '自飯店出發';
  const details = [
    ['地址', place.address],
    ['適合時段', place.visit],
    ['餐點參考價', place.price],
  ].filter(([, value]) => value);
  return `<article class="card place">
    <p class="kicker">${escape(place.kinds.join('・'))} · ${escape(place.area)}</p>
    <h3>${escape(place.name)}</h3>
    <p class="jp" lang="ja">${escape(place.japanese)}</p>
    <p>${escape(place.note)}</p>
    <p class="muted">${escape(place.hours || '營業時間待確認，出發前請查官方頁。')}</p>
    <p class="muted">${escape(routeLabel + ' · 約 ' + minutes + ' 分／' + distance)}</p>
    <div class="actions">${link('Google Maps', maps(query), true)}${link('飯店出發步行', walkTo(place.routeQuery || query))}</div>
    <details><summary>地址、時段與官網</summary>
      <dl>${details.map(([label, value]) => `<dt>${label}</dt><dd>${escape(value)}</dd>`).join('')}</dl>
      <div class="actions">${link('官方網站', place.official)}${place.menu ? link('官方菜單', place.menu) : ''}</div>
    </details>
  </article>`;
}

function renderPlaces() {
  const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  const results = places.filter((place, index) => (!category || place.kinds.includes(category))
    && (!area.value || place.area === area.value)
    && (!walkLimit.value || place.walk.minutes <= Number(walkLimit.value))
    && words.every((word) => searchText[index].includes(word)));
  for (const button of categoryButtons.children) {
    button.setAttribute('aria-pressed', String(category === button.dataset.category));
  }
  $('#results-count').textContent = `顯示 ${results.length}／${places.length} 個地點`;
  $('#catalog').innerHTML = results.length ? results.map(placeCard).join('')
    : '<p class="card">找不到符合條件的地點。可換個關鍵字或清除篩選。</p>';
}

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
  category = '';
  search.value = '';
  area.value = '';
  walkLimit.value = '';
  renderPlaces();
  search.focus();
});
renderPlaces();

$('#light-cards').innerHTML = lights.map((light) => `<article class="card">
  <p class="kicker">${escape(light.area)} · 最後一天 ${escape(light.through)}</p>
  <h3>${escape(light.name)}</h3><p class="jp">${escape(light.japanese)}</p>
  <p><strong>${escape(light.dates)} · ${escape(light.hours)}</strong></p>
  <p>${escape(light.note)}</p>
  <div class="actions">${link('Google Maps', maps(light.query), true)}${link('官方公告', light.official)}
  ${light.extra ? link('園區燈飾與市集', light.extra) : ''}</div>
</article>`).join('');

$('#stay-cards').innerHTML = flights.map((flight) => `<article class="card">
  <p class="kicker">${flight.date} · 當地時間</p><h3>台灣虎航 ${flight.code}</h3>
  <p>${escape(flight.route)}</p>
  <div class="actions">${link('成田 T2 地圖', maps(flight.airport), true)}${link('桃園 T1 地圖', maps('Taiwan Taoyuan International Airport Terminal 1'))}</div>
</article>`).join('') + `<article class="card">
  <p class="kicker">12/23–12/29 · 6 晚</p>
  <h3>${escape(hotel.name)}</h3><p class="jp" lang="ja">${escape(hotel.japanese)}</p>
  <p>${escape(hotel.address)} · 15:00 後入住、11:00 前退房</p>
  <p>飯店官網列六本木站 5 號出口步行約 1 分。拖行李可先查車站電梯動線。</p>
  <div class="actions">${link('Google Maps', maps(hotel.query), true)}${link('飯店交通', hotel.access)}
    ${link('六本木站平面圖', 'https://www.tokyometro.jp/station/roppongi/yardmap/index_print.html')}</div>
</article>`;

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
