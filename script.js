// Данные отделены от отрисовки: координаты относятся к картинке 1511 × 850.
const events = [
  {
    "id": 1,
    "year": 1768,
    "x": null,
    "y": null,
    "title": "Объявление войны",
    "date": "25 сентября (6 октября) 1768",
    "text": "Османская империя объявила России войну после отказа вывести русские войска из Речи Посполитой. Конфликт охватил Причерноморье, дунайские княжества, Кавказ и Эгейское море.",
    "quiz": {
      "q": "Кто был султаном Османской империи в начале войны?",
      "options": [
        "Абдул-Хамид I",
        "Мустафа III",
        "Селим III",
        "Ахмед III"
      ],
      "correct": 1
    },
    "location": "Константинополь (Стамбул)",
    "kind": "peace",
    "source": "https://www.prlib.ru/node/619403"
  },
  {
    "id": 2,
    "year": 1769,
    "x": 375,
    "y": 164,
    "title": "Взятие Хотина",
    "date": "Сентябрь 1769",
    "text": "В ходе кампании 1769 года армия Александра Голицына вела бои у Хотина. После поражений османских войск и ухода гарнизона российская армия заняла крепость в сентябре. Гарнизон ушёл из крепости после неудач османской армии и нехватки снабжения.",
    "quiz": {
      "q": "На какой реке расположена крепость Хотин?",
      "options": [
        "Дунай",
        "Днестр",
        "Днепр",
        "Прут"
      ],
      "correct": 1
    },
    "location": "Хотин · Днестр",
    "kind": "land",
    "source": "https://rm.shm.ru/core/event/27",
    "lx": 165,
    "ly": 140,
    "lw": 190,
    "mapTitle": "Хотин",
    "mapDetail": "Занятие крепости · 1769"
  },
  {
    "id": 3,
    "year": 1770,
    "x": 408,
    "y": 330,
    "title": "Битва при Ларге",
    "date": "7 (18) июля 1770",
    "text": "Армия Петра Румянцева победила войска крымского хана Каплан-Гирея у реки Ларги. После этого российские войска продолжили наступление к нижнему Дунаю.",
    "quiz": {
      "q": "В каком году состоялась битва при Ларге?",
      "options": [
        "1768",
        "1769",
        "1770",
        "1774"
      ],
      "correct": 2
    },
    "location": "Река Ларга · приток Прута",
    "kind": "land",
    "source": "https://rm.shm.ru/core/event/28",
    "lx": 445,
    "ly": 310,
    "lw": 208,
    "mapTitle": "Ларга",
    "mapDetail": "Победа Румянцева · 1770"
  },
  {
    "id": 4,
    "year": 1770,
    "x": 391,
    "y": 359,
    "title": "Битва при Кагуле",
    "date": "21 июля (1 августа) 1770",
    "text": "Российская армия Петра Румянцева нанесла поражение османской армии на реке Кагул. Победа укрепила положение России в Нижнем Подунавье.",
    "quiz": {
      "q": "Кто командовал русской армией при Кагуле?",
      "options": [
        "А. Суворов",
        "П. Румянцев",
        "Г. Потёмкин",
        "А. Голицын"
      ],
      "correct": 1
    },
    "location": "Река Кагул · Нижнее Подунавье",
    "kind": "land",
    "source": "https://rm.shm.ru/core/event/29",
    "lx": 440,
    "ly": 365,
    "lw": 208,
    "mapTitle": "Кагул",
    "mapDetail": "Победа Румянцева · 1770"
  },
  {
    "id": 5,
    "year": 1770,
    "x": null,
    "y": null,
    "title": "Чесменское сражение",
    "date": "24–26 июня (5–7 июля) 1770",
    "text": "Русская эскадра, пришедшая из Балтики под общим командованием Алексея Орлова, разгромила османский флот. В бою действовали адмирал Григорий Спиридов и отряд Самуила Грейга. В ночь на 26 июня турецкие корабли были уничтожены огнём в Чесменской бухте.",
    "quiz": {
      "q": "Из какого моря пришла русская эскадра к Чесме?",
      "options": [
        "Азовского",
        "Каспийского",
        "Балтийского",
        "Средиземного"
      ],
      "correct": 2
    },
    "location": "Чесменская бухта · Эгейское море",
    "kind": "sea",
    "source": "https://navalmuseum.ru/news/memorable?id=747"
  },
  {
    "id": 6,
    "year": 1771,
    "x": 802,
    "y": 290,
    "title": "Крымская кампания",
    "date": "Лето 1771",
    "text": "В 1771 году армия Василия Долгорукова прорвала укрепления Перекопа и заняла Крым. Военная оккупация не означала включения всего полуострова в Российскую империю. Политический статус ханства изменился по договорам 1772 и 1774 годов.",
    "quiz": {
      "q": "Кто командовал русской армией при взятии Крыма?",
      "options": [
        "В. Долгоруков",
        "П. Румянцев",
        "А. Суворов",
        "И. Михельсон"
      ],
      "correct": 0
    },
    "location": "Перекоп · Крым",
    "kind": "land",
    "source": "https://krym.rusarchives.ru/razdely/sobytiya-russko-tureckoy-voyny-1767-1774-gg-na-territorii-kryma-krymskoe-hanstvo-i-rossiya-v",
    "lx": 650,
    "ly": 326,
    "lw": 224,
    "mapTitle": "Перекоп · Крым",
    "mapDetail": "Крымская кампания · 1771"
  },
  {
    "id": 7,
    "year": 1771,
    "x": null,
    "y": null,
    "title": "Чумной бунт в Москве",
    "date": "Сентябрь 1771",
    "text": "Во время эпидемии чумы в Москве в сентябре 1771 года вспыхнули волнения, вызванные в том числе недовольством карантинными мерами. Был убит архиепископ Амвросий. Это событие относится к жизни тыла, а не к сражениям войны.",
    "quiz": {
      "q": "Какое бедствие предшествовало московским волнениям 1771 года?",
      "options": [
        "Наводнение",
        "Эпидемия чумы",
        "Землетрясение",
        "Лесной пожар"
      ],
      "correct": 1
    },
    "location": "Москва · Российская империя",
    "kind": "civil",
    "source": "https://publishing.mpda.ru/index.php/the-church-historian/article/view/739/"
  },
  {
    "id": 8,
    "year": 1774,
    "x": 299,
    "y": 562,
    "title": "Битва при Козлудже",
    "date": "9 (20) июня 1774",
    "text": "У Козлуджи российские корпуса Александра Суворова и Михаила Каменского разбили османские войска. Победа стала одним из важнейших событий заключительной кампании перед подписанием мира.",
    "quiz": {
      "q": "Кто командовал российскими корпусами при Козлудже?",
      "options": [
        "Румянцев и Потёмкин",
        "Суворов и Каменский",
        "Спиридов и Грейг",
        "Голицын и Долгоруков"
      ],
      "correct": 1
    },
    "location": "Козлуджа · Балканы",
    "kind": "land",
    "source": "https://rm.shm.ru/core/event/30",
    "lx": 72,
    "ly": 585,
    "lw": 214,
    "mapTitle": "Козлуджа",
    "mapDetail": "Суворов и Каменский · 1774"
  },
  {
    "id": 9,
    "year": 1774,
    "x": 332,
    "y": 529,
    "title": "Кючук-Кайнарджийский мир",
    "date": "10 (21) июля 1774",
    "text": "Договор 10 (21) июля 1774 года завершил войну. За Россией были закреплены Азов, Керчь, Еникале и Кинбурн с прилегающими землями. Крымское ханство было признано независимым. Российские торговые суда получили право прохода через проливы. Весь Крым в состав России по этому договору не вошёл.",
    "quiz": {
      "q": "Какой статус получило Крымское ханство по договору 1774 года?",
      "options": [
        "Вошло целиком в Российскую империю",
        "Стало французской колонией",
        "Было признано независимым",
        "Стало частью Речи Посполитой"
      ],
      "correct": 2
    },
    "location": "Кючук-Кайнарджи · Балканы",
    "kind": "peace",
    "source": "https://www.vostlit.info/Texts/Dokumenty/Turk/XVIII/1760-1780/Kucuk_Kaynardji_Friede_1770/vetrag_KK_1774.htm",
    "lx": 78,
    "ly": 489,
    "lw": 236,
    "mapTitle": "Кючук-Кайнарджи",
    "mapDetail": "Мирный договор · 1774"
  }
];

const kinds = { all: 'Все типы', land: 'Сухопутные', sea: 'Морские', peace: 'Дипломатия', civil: 'В тылу' };
const yearNotes = {1768:'Начало войны',1769:'Днестровская кампания',1770:'Победы на суше и море',1771:'Крымская кампания',1772:'Мирные переговоры',1773:'Возобновление боевых действий',1774:'Козлуджа и мирный договор'};
const places = [
    {id:'khotin',name:'Хотин',x:375,y:164,dx:23,dy:-18,eventId:2,fort:true,text:'Крепость на Днестре. Здесь проходила кампания армии Александра Голицына в 1769 году.'},
    {id:'iasi',name:'Яссы',x:355,y:290,dx:-66,dy:22,text:'Один из главных городов Молдавского княжества. Дунайские княжества входили в зону боевых действий войны.'},
    {id:'bender',name:'Бендеры',x:488,y:280,dx:-45,dy:-25,fort:true,text:'Османская крепость на Днестре. Одно из укреплений, важных для понимания географии дунайско-днестровского театра войны.'},
    {id:'bucharest',name:'Бухарест',x:215,y:462,dx:-34,dy:-16,text:'Город в Валахии. Здесь проходили мирные переговоры, которые не завершили войну.'},
    {id:'izmail',name:'Измаил',x:389,y:410,dx:-84,dy:30,fort:true,text:'Крепость в районе нижнего Дуная. Не следует путать события этой войны со знаменитым штурмом Измаила 1790 года.'},
    {id:'ochakov',name:'Очаков',x:580,y:270,dx:-38,dy:-44,fort:true,text:'Крепость у Днепровско-Бугского лимана. Мирный договор 1774 года оставил Очаков с его округом за Османской империей.'},
    {id:'kinburn',name:'Кинбурн',x:595,y:282,dx:44,dy:-21,fort:true,gained:true,text:'Крепость у устья Днепра. В 1774 году закреплена за Россией с прилегающей территорией.',related:9},
    {id:'perekop',name:'Перекоп',x:802,y:290,dx:-22,dy:36,eventId:6,fort:true,text:'Укрепления на сухопутном входе в Крым. В 1771 году здесь наступала армия Василия Долгорукова.'},
    {id:'bakhchisarai',name:'Бахчисарай',x:732,y:411,dx:29,dy:29,text:'Город в Крыму, резиденция крымских ханов. Статус ханства описан в блоке «Политическая карта».'},
    {id:'kerch',name:'Керчь',x:932,y:380,dx:69,dy:24,fort:true,gained:true,text:'Город и крепость у Керченского пролива. По договору 1774 года закреплён за Россией.',related:9},
    {id:'yenikale',name:'Еникале',x:947,y:368,dx:62,dy:-24,fort:true,gained:true,text:'Крепость у Керченского пролива. Закреплена за Россией по мирному договору 1774 года.',related:9},
    {id:'azov',name:'Азов',x:1110,y:196,dx:33,dy:-21,fort:true,gained:true,text:'Крепость в районе устья Дона. Договор 1774 года закрепил её принадлежность России.',related:9},
    {id:'taganrog',name:'Таганрог',x:1072,y:186,dx:-74,dy:-45,text:'Порт на северном берегу Азовского моря. Показан как географический ориентир.'},
    {id:'kozludzha',name:'Козлуджа',x:299,y:562,dx:22,dy:20,eventId:8,text:'Место сражения российских корпусов Суворова и Каменского с османскими войсками в июне 1774 года.'},
    {id:'kaynardzha',name:'Кючук-Кайнарджи',x:332,y:529,dx:-198,dy:-14,eventId:9,text:'Деревня в районе Нижнего Дуная. Здесь в июле 1774 года подписан мирный договор, завершивший войну.'}
];
const countries = [
    {id:'russia',name:'Российская империя',lines:['РОССИЙСКАЯ','ИМПЕРИЯ'],x:1125,y:67,w:455,h:90,text:'Одна из двух основных сторон войны. При Екатерине II Россия добивалась укрепления позиций на Чёрном море. Условия мира смотри в событии № 9.'},
    {id:'ottoman',name:'Османская империя',lines:['ОСМАНСКАЯ ИМПЕРИЯ'],x:1020,y:796,w:480,h:55,className:'ottoman',text:'Одна из двух основных сторон войны. Владела землями в Анатолии и на Балканах; Молдавия и Валахия находились под её верховной властью.'},
    {id:'crimea',name:'Крымское ханство',lines:['КРЫМСКОЕ ХАНСТВО'],x:797,y:190,w:340,h:65,className:'crimean',text:'В начале войны ханство зависело от Османской империи. Договор 1772 года с Россией провозгласил его самостоятельность под российским покровительством. Мир 1774 года закрепил признание независимости обеими империями.'},
    {id:'poland',name:'Речь Посполитая',lines:['РЕЧЬ','ПОСПОЛИТАЯ'],x:285,y:66,w:230,h:80,className:'neighbor',text:'Соседнее государство. Присутствие русских войск в Речи Посполитой стало одним из поводов к войне. На этой обобщённой подложке изменения её границ после первого раздела 1772 года не показаны.'},
    {id:'habsburg',name:'Габсбургские владения',lines:['ГАБСБУРГСКИЕ','ВЛАДЕНИЯ'],x:132,y:291,w:255,h:75,className:'neighbor',text:'Соседние владения Габсбургской монархии к западу от дунайского театра войны. Подпись служит ориентиром; точные границы на исходной иллюстрации не выделены.'}
];
const $ = id => document.getElementById(id);
const ns = 'http://www.w3.org/2000/svg';
let selectedYear = 1768;
let selectedKind = 'all';
let allEvents = false;
let query = '';
let previousFocus = null;
let zoom = matchMedia('(max-width: 760px)').matches ? 2.2 : 1;
let storageAvailable = true;
let activeHighlight = null;
const eventNodes = new Map();
const cityNodes = new Map();
const normalize = value => value.toLocaleLowerCase('ru').replaceAll('ё','е').trim();
const completed = loadProgress();

function loadProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem('war_done') || '[]');
        return new Set(Array.isArray(saved) ? saved.filter(id => events.some(ev => ev.id === id)) : []);
    } catch {
        storageAvailable = false;
        return new Set();
    }
}
function svgElement(tag, attrs = {}, text) {
    const el = document.createElementNS(ns, tag);
    for (const [key,value] of Object.entries(attrs)) el.setAttribute(key,value);
    if (text !== undefined) el.textContent = text;
    return el;
}
function svgButton(group, label, action) {
    group.setAttribute('role','button');
    group.setAttribute('tabindex','0');
    group.setAttribute('aria-label',label);
    group.appendChild(svgElement('title',{},label));
    group.addEventListener('click',action);
    group.addEventListener('keydown',event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); action(); }
    });
}
function createGeography() {
    $('watersLayer').append(
        svgElement('text',{x:840,y:595,class:'water-label'},'Чёрное море'),
        svgElement('text',{x:961,y:290,class:'water-label small-water'},'Азовское море'),
        svgElement('text',{x:290,y:245,class:'region-label'},'МОЛДАВИЯ'),
        svgElement('text',{x:191,y:430,class:'region-label'},'ВАЛАХИЯ'),
        svgElement('text',{x:179,y:682,class:'region-label'},'БАЛКАНЫ')
    );
    countries.forEach(country => {
        const g = svgElement('g',{id:`country-${country.id}`,class:'country-group'});
        g.appendChild(svgElement('rect',{x:country.x-country.w/2,y:country.y-26,width:country.w,height:country.h,class:'country-hit'}));
        const text = svgElement('text',{x:country.x,y:country.y,class:`country-label ${country.className || ''}`});
        country.lines.forEach((line,index) => text.appendChild(svgElement('tspan',{x:country.x,dy:index ? 30 : 0},line)));
        if (country.id === 'crimea') text.appendChild(svgElement('tspan',{id:'crimeaSubtitle',x:country.x,dy:25,class:'country-subtitle'},''));
        g.appendChild(text);
        svgButton(g,country.name,() => showCountry(country));
        $('countriesLayer').appendChild(g);
    });
    places.forEach(place => {
        const g = svgElement('g',{id:`city-${place.id}`,class:'city-group','data-place':place.id});
        const tx = place.x + place.dx;
        const ty = place.y + place.dy;
        g.appendChild(svgElement('circle',{cx:place.x,cy:place.y,r:18,class:'city-hit'}));
        if (Math.abs(place.dx) > 35 || Math.abs(place.dy) > 25) g.appendChild(svgElement('path',{d:`M${place.x},${place.y} L${tx-4},${ty-5}`,class:'city-line'}));
        g.appendChild(place.fort
            ? svgElement('rect',{x:place.x-5,y:place.y-5,width:10,height:10,class:'city-dot'})
            : svgElement('circle',{cx:place.x,cy:place.y,r:5,class:'city-dot'}));
        g.appendChild(svgElement('text',{x:tx,y:ty,class:'city-label'},place.name));
        svgButton(g,`${place.name}, открыть справку`,() => showPlace(place));
        $('citiesLayer').appendChild(g);
        cityNodes.set(place.id,g);
    });
    events.filter(ev => ev.x !== null).forEach(ev => {
        const g = svgElement('g',{id:`event-${ev.id}`,class:`event-point ${ev.kind}`,'data-id':ev.id});
        g.appendChild(svgElement('circle',{cx:ev.x,cy:ev.y,r:24,class:'event-hit'}));
        // Анимация вынесена в отдельную группу, чтобы не сдвигать сам маркер.
        const ring = svgElement('g',{transform:`translate(${ev.x} ${ev.y})`});
        ring.appendChild(svgElement('circle',{r:20,class:'event-ring'}));
        g.appendChild(ring);
        const label = svgElement('g',{class:'event-caption'});
        const endX = ev.lx > ev.x ? ev.lx : ev.lx + ev.lw;
        label.appendChild(svgElement('path',{d:`M${ev.x},${ev.y} L${endX},${ev.ly+23}`,class:'event-line'}));
        label.appendChild(svgElement('rect',{x:ev.lx,y:ev.ly,width:ev.lw,height:49,class:'event-label-bg'}));
        label.appendChild(svgElement('text',{x:ev.lx+10,y:ev.ly+20,class:'event-label-title'},ev.mapTitle));
        label.appendChild(svgElement('text',{x:ev.lx+10,y:ev.ly+38,class:'event-label-detail'},ev.mapDetail));
        g.appendChild(label);
        g.appendChild(svgElement('circle',{cx:ev.x,cy:ev.y,r:15,class:'event-dot'}));
        g.appendChild(svgElement('text',{x:ev.x,y:ev.y+1,class:'event-number','aria-hidden':'true'},ev.id));
        svgButton(g,`${ev.location}: ${ev.title}, ${ev.year}`,() => showEvent(ev));
        $('eventsLayer').appendChild(g);
        eventNodes.set(ev.id,g);
    });
}
function eventVisible(ev) { return (allEvents || ev.year <= selectedYear) && (selectedKind === 'all' || ev.kind === selectedKind); }
function refreshMap() {
    const eventsOn = $('showEvents').checked;
    $('countriesLayer').hidden = !$('showCountries').checked;
    // hidden для SVG поддерживается не везде: явно меняем display и tabindex.
    $('countriesLayer').style.display = $('showCountries').checked ? '' : 'none';
    $('citiesLayer').style.display = $('showCities').checked ? '' : 'none';
    $('eventsLayer').style.display = eventsOn ? '' : 'none';
    document.querySelectorAll('.country-group').forEach(g => g.setAttribute('tabindex',$('showCountries').checked ? '0' : '-1'));
    events.forEach(ev => {
        const node = eventNodes.get(ev.id);
        if (!node) return;
        const visible = eventsOn && eventVisible(ev);
        node.classList.toggle('hidden',!visible);
        node.classList.toggle('current',ev.year === selectedYear);
        node.classList.toggle('completed',completed.has(ev.id));
        node.setAttribute('tabindex',visible ? '0' : '-1');
        node.setAttribute('aria-hidden',String(!visible));
        node.setAttribute('aria-label',`${ev.location}: ${ev.title}, ${ev.year}${completed.has(ev.id) ? ', вопрос пройден' : ''}`);
        node.querySelector('.event-caption').style.display = $('showEventLabels').checked ? '' : 'none';
    });
    places.forEach(place => {
        const event = events.find(ev => ev.id === place.eventId);
        const replaced = eventsOn && event && eventVisible(event);
        const visible = $('showCities').checked && !replaced;
        const node = cityNodes.get(place.id);
        node.classList.toggle('hidden',!visible);
        node.setAttribute('tabindex',visible ? '0' : '-1');
        node.setAttribute('aria-hidden',String(!visible));
        node.classList.toggle('acquired',Boolean(place.gained && selectedYear === 1774));
    });
    $('crimeaSubtitle').textContent = selectedYear === 1774 ? 'независимость признана миром' : selectedYear >= 1772 ? 'договор с Россией · 1772' : selectedYear === 1771 ? 'военная оккупация · 1771' : 'зависимость от Османской империи';
}
function createTimeline() {
    for (let year=1768;year<=1774;year++) {
        const b=document.createElement('button'); b.type='button'; b.className='year-button'; b.textContent=year; b.dataset.year=year;
        b.setAttribute('aria-label',`${year} год`); b.addEventListener('click',() => setYear(year)); $('years').appendChild(b);
    }
    $('timeSlider').addEventListener('input',event => setYear(Number(event.target.value)));
    $('prevYear').addEventListener('click',() => setYear(selectedYear-1));
    $('nextYear').addEventListener('click',() => setYear(selectedYear+1));
}
function setYear(year) {
    selectedYear=Math.max(1768,Math.min(1774,year));
    $('timeSlider').value=selectedYear;
    $('timeSlider').setAttribute('aria-valuetext',`${selectedYear} год`);
    $('selectedYear').textContent=selectedYear;
    $('yearSummary').textContent=yearNotes[selectedYear];
    $('prevYear').disabled=selectedYear===1768;
    $('nextYear').disabled=selectedYear===1774;
    document.querySelectorAll('.year-button').forEach(b => {const active=Number(b.dataset.year)===selectedYear; b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    const current=events.filter(ev => ev.year===selectedYear);
    $('currentEvent').textContent=current.length ? current.map(ev=>`${ev.title}${ev.x === null ? ' (вне карты)' : ''}`).join(' · ') : `${yearNotes[selectedYear]}. Отдельных карточек на этот год в подборке нет.`;
    const after=selectedYear===1774;
    $('mapImage').src=`./assets/images/black_sea_${after ? 1774 : 1768}.png`;
    $('mapImage').alt=`Схематическая карта Причерноморья ${after ? 'после войны, 1774' : 'до войны, 1768'}`;
    $('mapCaption').textContent=after ? 'После войны · 1774' : 'Подложка до войны · 1768';
    $('statusPeriod').textContent=after ? 'ПО УСЛОВИЯМ МИРА 1774 ГОДА' : `ВЫБРАННЫЙ ГОД · ${selectedYear}`;
    const crimea=after ? 'Независимость ханства признана обеими империями. Керчь и Еникале закреплены за Россией.' : selectedYear>=1772 ? 'Договор с Россией провозгласил самостоятельность ханства под её покровительством; война ещё продолжается.' : selectedYear===1771 ? 'Армия Долгорукова заняла полуостров. Военная оккупация не равна присоединению.' : 'Ханство зависит от Османской империи и участвует в войне на её стороне.';
    $('territoryStatus').replaceChildren(statusItem('Крымское ханство',crimea),statusItem(after ? 'Приобретения России' : 'Дунайские княжества',after ? 'Азов, Керчь, Еникале и Кинбурн с прилегающими землями. Нажми на город, чтобы прочитать справку.' : 'Молдавия и Валахия — под османской верховной властью; в ходе войны здесь действуют российские войска.'));
    refreshMap(); renderEventList(); renderOffmap();
}
function statusItem(title,text) {const div=document.createElement('div');div.className='status-item';const h=document.createElement('strong');h.textContent=title;const p=document.createElement('p');p.textContent=text;div.append(h,p);return div;}
function createFilters() {
    Object.entries(kinds).forEach(([key,label]) => {
        const b=document.createElement('button');b.type='button';b.className='filter-button';b.textContent=label;b.dataset.kind=key;b.setAttribute('aria-pressed',String(key==='all'));
        b.addEventListener('click',() => {selectedKind=key;document.querySelectorAll('.filter-button').forEach(item=>item.setAttribute('aria-pressed',String(item.dataset.kind===key)));refreshMap();renderEventList();renderOffmap();});
        $('eventFilters').appendChild(b);
    });
    $('eventSearch').addEventListener('input',event=>{query=normalize(event.target.value);$('clearSearch').hidden=!query;renderEventList();renderPlaceIndex();});
    $('clearSearch').addEventListener('click',()=>{$('eventSearch').value='';query='';$('clearSearch').hidden=true;renderEventList();renderPlaceIndex();$('eventSearch').focus();});
}
function renderEventList() {
    const filtered=events.filter(ev=>(selectedKind==='all'||ev.kind===selectedKind)&&normalize(`${ev.title} ${ev.location} ${ev.year}`).includes(query));
    $('eventList').replaceChildren();
    filtered.forEach(ev=>{
        const done=completed.has(ev.id);const future=ev.year>selectedYear;
        const b=document.createElement('button');b.type='button';b.className=`event-card ${ev.kind}${future?' future':''}${ev.year===selectedYear?' current':''}${done?' completed':''}`;b.dataset.id=ev.id;
        const badge=document.createElement('span');badge.className='badge';badge.textContent=done?'✓':ev.id;badge.setAttribute('aria-hidden','true');
        const content=document.createElement('span');const title=document.createElement('h3');title.textContent=`${ev.id}. ${ev.title}`;
        const date=document.createElement('span');date.className='event-meta';date.textContent=ev.date;
        const location=document.createElement('span');location.className='event-meta';location.textContent=ev.location;
        const action=document.createElement('span');action.className='event-action';action.textContent=future ? `Перейти к ${ev.year} году и открыть` : `${done?'Изучено · ':''}${ev.x===null?'Вне карты · ':''}Открыть событие`;
        content.append(title,date,location,action);b.append(badge,content);b.addEventListener('click',()=>showEvent(ev));
        // Связь легенды и географии видна при наведении мышью и фокусе с клавиатуры.
        b.addEventListener('mouseenter',()=>highlightEvent(ev.id,true));b.addEventListener('mouseleave',()=>highlightEvent(ev.id,false));
        b.addEventListener('focus',()=>highlightEvent(ev.id,true));b.addEventListener('blur',()=>highlightEvent(ev.id,false));
        $('eventList').appendChild(b);
    });
    $('eventCount').textContent=`Показано ${filtered.length} из ${events.length}. ${allEvents ? 'На карте — события всей войны.' : `На карте — события по ${selectedYear} год включительно.`}`;
    $('emptyState').hidden=filtered.length>0;
}
function renderOffmap() {
    $('offMapEvents').replaceChildren();
    events.filter(ev=>ev.x===null).forEach(ev=>{
        const b=document.createElement('button');b.type='button';b.className=`offmap-button ${ev.kind}`;
        const n=document.createElement('span');n.className='badge';n.textContent=completed.has(ev.id)?'✓':ev.id;
        const info=document.createElement('span');const title=document.createElement('strong');title.textContent=ev.location.split(' · ')[0];
        const sub=document.createElement('span');sub.className='small';sub.textContent=`${ev.year} · ${ev.title}`;
        info.append(title,sub);b.append(n,info);b.addEventListener('click',()=>showEvent(ev));$('offMapEvents').appendChild(b);
    });
}
function renderPlaceIndex() {
    $('placeIndex').replaceChildren();
    places.filter(place=>normalize(place.name).includes(query)).forEach(place=>{const b=document.createElement('button');b.type='button';b.textContent=place.name;b.addEventListener('click',()=>{focusPlace(place);showPlace(place);});$('placeIndex').appendChild(b);});
}
function highlightEvent(id,on) { const node=eventNodes.get(id);if(node)node.classList.toggle('highlighted',on); }
function beginModal(title,kind,date,text) {
    if ($('modalBg').hidden) previousFocus=document.activeElement;
    $('mTitle').textContent=title;$('mKind').textContent=kind;$('mDate').textContent=date;$('mText').textContent=text;
    $('mLinks').replaceChildren();$('mQuiz').replaceChildren();$('mQuiz').hidden=true;
    $('modalBg').hidden=false;document.body.classList.add('modal-open');$('mainContent').inert=true;document.querySelector('header').inert=true;
    document.querySelector('.modal').scrollTop=0;$('closeModal').focus();
}
function showEvent(ev) {
    // Сохраняем кнопку открытия до перерисовки легенды при переходе в другой год.
    const origin=$('modalBg').hidden ? document.activeElement : previousFocus;
    if(ev.year>selectedYear)setYear(ev.year);
    beginModal(ev.title,`${kinds[ev.kind].toUpperCase()} · СОБЫТИЕ № ${ev.id}`,`${ev.date} · ${ev.location}`,ev.text);
    previousFocus=origin;
    const source=document.createElement('a');source.href=ev.source;source.target='_blank';source.rel='noopener noreferrer';source.textContent='Источник';$('mLinks').appendChild(source);
    if(ev.x!==null)modalButton('Найти на карте',()=>{closeModal(false);revealEvent(ev);});
    $('mQuiz').hidden=false;renderQuiz(ev);
}
function showPlace(place) {
    let extra='';
    if(place.gained) extra=selectedYear===1774?'\nНа выбранный год: закреплено за Россией по условиям мира.':'\nУсловие о закреплении за Россией относится к миру 1774 года.';
    beginModal(place.name,place.fort?'ГОРОД / КРЕПОСТЬ':'НАСЕЛЁННЫЙ ПУНКТ','Приблизительное положение на учебной схеме',place.text+extra);
    modalButton('Показать на карте',()=>{closeModal(false);focusPlace(place);});
    const ev=events.find(ev=>ev.id===(place.eventId||place.related));
    if(ev)modalButton(`Событие № ${ev.id}: ${ev.title}`,()=>showEvent(ev));
}
function showCountry(country) {
    const detail=country.id==='crimea'?`\nНа карте выбран ${selectedYear} год. ${$('crimeaSubtitle').textContent}.`:'';
    beginModal(country.name,'ГОСУДАРСТВА И ВЛАДЕНИЯ',`${selectedYear} год`,country.text+detail);
    if(country.id==='crimea'||country.id==='russia'||country.id==='ottoman')modalButton('Условия мира 1774 года',()=>showEvent(events.find(ev=>ev.id===9)));
}
function modalButton(label,action) {const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',action);$('mLinks').appendChild(b);}
function renderQuiz(ev) {
    const quiz=$('mQuiz');quiz.replaceChildren();
    const heading=document.createElement('h3');heading.textContent='Проверь себя';
    const question=document.createElement('p');question.className='quiz-question';question.textContent=ev.quiz.q;
    const options=document.createElement('div');options.id='options';
    const feedback=document.createElement('p');feedback.id='feedback';feedback.className='quiz-feedback';feedback.setAttribute('role','status');
    if(completed.has(ev.id))feedback.textContent='Этот вопрос уже пройден. Можно повторить.';
    ev.quiz.options.forEach((text,index)=>{
        const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=text;
        b.addEventListener('click',()=>{
            const buttons=options.querySelectorAll('button');buttons.forEach(item=>{item.disabled=true;});buttons[ev.quiz.correct].classList.add('correct');
            if(index===ev.quiz.correct){feedback.className='quiz-feedback correct';feedback.textContent='✓ Верно! Событие изучено.';markCompleted(ev.id);}
            else{b.classList.add('wrong');feedback.className='quiz-feedback wrong';feedback.textContent=`Неверно. Правильный ответ: ${ev.quiz.options[ev.quiz.correct]}.`;const retry=document.createElement('button');retry.type='button';retry.className='retry-button';retry.textContent='Попробовать ещё раз';retry.addEventListener('click',()=>{renderQuiz(ev);quiz.querySelector('.quiz-option').focus();});quiz.appendChild(retry);retry.focus();}
        });options.appendChild(b);
    });quiz.append(heading,question,options,feedback);
}
function markCompleted(id) {
    completed.add(id);try{localStorage.setItem('war_done',JSON.stringify([...completed]));}catch{storageAvailable=false;}
    updateProgress();refreshMap();renderEventList();renderOffmap();
}
function updateProgress() {
    $('progress').textContent=completed.size;$('total').textContent=events.length;$('progressMeter').max=events.length;$('progressMeter').value=completed.size;
    $('storageNote').hidden=storageAvailable;$('saveStatus').textContent=storageAvailable?'Сохраняется в этом браузере':'До перезагрузки вкладки';
}
function closeModal(returnFocus=true) {
    if($('modalBg').hidden)return;
    $('modalBg').hidden=true;document.body.classList.remove('modal-open');$('mainContent').inert=false;document.querySelector('header').inert=false;
    if(returnFocus){if(previousFocus?.isConnected)previousFocus.focus();else $('timeSlider').focus();}
}
$('closeModal').addEventListener('click',()=>closeModal());
$('modalBg').addEventListener('click',event=>{if(event.target===$('modalBg'))closeModal();});
document.addEventListener('keydown',event=>{
    if($('modalBg').hidden)return;
    if(event.key==='Escape'){closeModal();return;}
    if(event.key==='Tab'){
        const items=[...document.querySelector('.modal').querySelectorAll('button:not(:disabled), a[href]')].filter(el=>el.getClientRects().length);
        const first=items[0],last=items[items.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
});
function setZoom(value,center=true) {
    const viewport=$('mapViewport');const old=zoom;zoom=Math.max(1,Math.min(3,Math.round(value*10)/10));
    const x=(viewport.scrollLeft+viewport.clientWidth/2)/old;const y=(viewport.scrollTop+viewport.clientHeight/2)/old;
    $('mapStage').style.width=`${zoom*100}%`;$('zoomValue').textContent=`${Math.round(zoom*100)}%`;
    viewport.classList.toggle('zoomed',zoom>1);$('zoomOut').disabled=zoom<=1;$('zoomIn').disabled=zoom>=3;
    if(center){viewport.scrollLeft=x*zoom-viewport.clientWidth/2;viewport.scrollTop=y*zoom-viewport.clientHeight/2;}
}
function focusAt(x,y,node) {
    if(zoom<1.7)setZoom(1.7,false);
    const vp=$('mapViewport');const factor=$('mapStage').clientWidth/1511;
    vp.scrollLeft=x*factor-vp.clientWidth/2;vp.scrollTop=y*factor-vp.clientHeight/2;
    if(activeHighlight)activeHighlight.classList.remove('highlighted');
    if(node){node.classList.add('highlighted');activeHighlight=node;node.focus({preventScroll:true});}
    vp.scrollIntoView({block:'center',inline:'nearest'});
}
function revealEvent(ev) {
    if(!eventVisible(ev)){selectedKind='all';document.querySelectorAll('.filter-button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.kind==='all')));setYear(Math.max(selectedYear,ev.year));}
    $('showEvents').checked=true;$('showEventLabels').checked=true;refreshMap();focusAt(ev.x,ev.y,eventNodes.get(ev.id));
    $('mapAnnounce').textContent=`На карте: ${ev.title}, ${ev.year} год.`;
}
function focusPlace(place) {
    $('showCities').checked=true;refreshMap();
    const associated=events.find(ev=>ev.id===place.eventId);
    const node=associated&&$('showEvents').checked&&eventVisible(associated)?eventNodes.get(associated.id):cityNodes.get(place.id);
    focusAt(place.x,place.y,node);$('mapAnnounce').textContent=`На карте: ${place.name}.`;
}
$('zoomIn').addEventListener('click',()=>setZoom(zoom+.5));$('zoomOut').addEventListener('click',()=>setZoom(zoom-.5));
$('resetMap').addEventListener('click',()=>{setZoom(1,false);$('mapViewport').scrollTo(0,0);});
for(const id of ['showCountries','showCities','showEvents','showEventLabels'])$(id).addEventListener('change',refreshMap);
$('showAll').addEventListener('click',()=>{allEvents=!allEvents;$('showAll').setAttribute('aria-pressed',String(allEvents));$('showAll').textContent=allEvents?'Вернуться к выбранному году':'Показать события всей войны';refreshMap();renderEventList();});
// На сенсорных экранах работает обычная прокрутка, мышью — перетаскивание фона.
let drag=null;
$('mapViewport').addEventListener('pointerdown',event=>{
    if(event.pointerType!=='mouse'||event.button!==0||zoom<=1||event.target.closest('[role="button"]'))return;
    const vp=$('mapViewport');drag={x:event.clientX,y:event.clientY,left:vp.scrollLeft,top:vp.scrollTop};vp.setPointerCapture(event.pointerId);vp.classList.add('dragging');event.preventDefault();
});
$('mapViewport').addEventListener('pointermove',event=>{if(!drag)return;const vp=$('mapViewport');vp.scrollLeft=drag.left-(event.clientX-drag.x);vp.scrollTop=drag.top-(event.clientY-drag.y);});
function finishDrag(){drag=null;$('mapViewport').classList.remove('dragging');}
$('mapViewport').addEventListener('pointerup',finishDrag);$('mapViewport').addEventListener('pointercancel',finishDrag);$('mapViewport').addEventListener('lostpointercapture',finishDrag);
createGeography();createTimeline();createFilters();renderPlaceIndex();setYear(1768);updateProgress();setZoom(zoom,false);
