/* ═══════════════════════════════════════════
   ALLOHA EDU — app.js
   ═══════════════════════════════════════════ */

'use strict';

/* ── Data ── */
const COURSES = [
  { id:1,  title:'Seus direitos contra o racismo',         cat:'direitos',   emoji:'⚖️',  bg:'#E1F5EE', cc:'#0F6E56', level:'Básico',        dur:'4h',   prog:0  },
  { id:2,  title:'Injúria racial e como denunciar',        cat:'direitos',   emoji:'📋',  bg:'#E1F5EE', cc:'#0F6E56', level:'Básico',        dur:'2h30', prog:0  },
  { id:3,  title:'Empreendedorismo e MEI',                 cat:'renda',      emoji:'💼',  bg:'#FAEEDA', cc:'#854F0B', level:'Intermediário', dur:'6h',   prog:35 },
  { id:4,  title:'Inclusão digital para todos',            cat:'tecnologia', emoji:'💻',  bg:'#EEEDFE', cc:'#534AB7', level:'Básico',        dur:'5h',   prog:0  },
  { id:5,  title:'História da África e diáspora',          cat:'cultura',    emoji:'🌍',  bg:'#FAECE7', cc:'#993C1D', level:'Básico',        dur:'8h',   prog:60 },
  { id:6,  title:'Saúde da população negra',               cat:'saude',      emoji:'❤️',  bg:'#E1F5EE', cc:'#0F6E56', level:'Básico',        dur:'3h',   prog:0  },
  { id:7,  title:'Construção de sites e apps',             cat:'tecnologia', emoji:'🖥️',  bg:'#EEEDFE', cc:'#534AB7', level:'Avançado',      dur:'20h',  prog:0  },
  { id:8,  title:'Cidadania e participação política',      cat:'direitos',   emoji:'🗳️',  bg:'#E1F5EE', cc:'#0F6E56', level:'Básico',        dur:'4h',   prog:0  },
  { id:9,  title:'Cultura afro-brasileira e ancestralidade',cat:'cultura',   emoji:'🥁',  bg:'#FAECE7', cc:'#993C1D', level:'Todos',         dur:'6h',   prog:20 },
  { id:10, title:'Qualificação profissional',              cat:'renda',      emoji:'📈',  bg:'#FAEEDA', cc:'#854F0B', level:'Intermediário', dur:'10h',  prog:0  },
  { id:11, title:'Saúde mental e cuidado emocional',       cat:'saude',      emoji:'🧠',  bg:'#E1F5EE', cc:'#0F6E56', level:'Básico',        dur:'4h',   prog:0  },
  { id:12, title:'Pensamento computacional',               cat:'tecnologia', emoji:'🔢',  bg:'#EEEDFE', cc:'#534AB7', level:'Básico',        dur:'6h',   prog:0  },
];

const EVENTS = [
  { day:14, month:5, year:2026, title:'Roda de Conversa: Combate ao Racismo',          time:'19h00', local:'Online — Zoom',                        type:'Online',     typeBg:'#E1F5EE', typeColor:'#0F6E56', cat:'direitos'   },
  { day:18, month:5, year:2026, title:'Oficina: MEI e Empreendedorismo Negro',         time:'14h00', local:'CRPIR Zona Leste — São Miguel Paulista', type:'Presencial', typeBg:'#FAEEDA', typeColor:'#854F0B', cat:'renda'      },
  { day:21, month:5, year:2026, title:'Webinar Revista Global: Diáspora e Educação',   time:'20h00', local:'YouTube Live @RevistaGlobal_BR',         type:'Live',       typeBg:'#FAECE7', typeColor:'#993C1D', cat:'educacao'   },
  { day:25, month:5, year:2026, title:'Formatura Turma Cidadania Digital',             time:'18h00', local:'Centro Cultural da Sé',                  type:'Presencial', typeBg:'#FAEEDA', typeColor:'#854F0B', cat:'tecnologia' },
  { day:28, month:5, year:2026, title:'Palestra: Saúde Mental e Racismo Estrutural',   time:'15h00', local:'Online — Google Meet',                   type:'Online',     typeBg:'#E1F5EE', typeColor:'#0F6E56', cat:'saude'      },
  { day:3,  month:6, year:2026, title:'Aula Aberta: História da África',               time:'10h00', local:'Biblioteca Mário de Andrade',            type:'Presencial', typeBg:'#FAEEDA', typeColor:'#854F0B', cat:'cultura'    },
  { day:10, month:6, year:2026, title:'Live Especial: Quilombos e Identidade',         time:'20h00', local:'YouTube Live @RevistaGlobal_BR',         type:'Live',       typeBg:'#FAECE7', typeColor:'#993C1D', cat:'cultura'    },
  { day:14, month:6, year:2026, title:'Oficina de Orientação Jurídica — CRPIR',        time:'13h00', local:'CRPIR Centro — Vila Itororó',            type:'Presencial', typeBg:'#FAEEDA', typeColor:'#854F0B', cat:'direitos'   },
  { day:20, month:6, year:2026, title:'Hackathon Alloha Edu: Tecnologia e Equidade',   time:'09h00', local:'Online — Discord Alloha',                type:'Online',     typeBg:'#E1F5EE', typeColor:'#0F6E56', cat:'tecnologia' },
];

/* Fallback videos (used if RSS fails due to CORS) */
const YT_FALLBACK = [
  { id:'dQw4w9WgXcQ', title:'Racismo no Brasil: O que mudou em 2025?',           views:'12 mil', date:'12/06/2026', dur:'18:34', tags:['brasil','direitos']    },
  { id:'9bZkp7q19f0', title:'África: Novas lideranças e o futuro do continente', views:'8,4 mil', date:'10/06/2026', dur:'24:10', tags:['africa']               },
  { id:'kJQP7kiw5Fk', title:'Educação antirracista nas escolas',                  views:'6,1 mil', date:'07/06/2026', dur:'31:05', tags:['educacao','brasil']    },
  { id:'RgKAFK5djSk', title:'Direitos humanos em debate — especial ONU 2025',    views:'15 mil', date:'05/06/2026', dur:'45:20', tags:['direitos']              },
  { id:'hT_nvWreIhg', title:'Diáspora africana no Brasil: Identidade e resistência',views:'9,8 mil',date:'02/06/2026',dur:'22:17',tags:['africa','brasil']      },
  { id:'JGwWNGJdvx8', title:'Lagos, Nairóbi, Acra: A nova África urbana',         views:'11 mil', date:'30/05/2026', dur:'28:44', tags:['africa']               },
];

/* ── State ── */
let user     = { name:'', email:'', initials:'' };
let cFilter  = 'todos';
let nFilter  = 'todos';
let ytItems  = null;          // real RSS items once loaded
let selMonth = new Date().getMonth();
let selYear  = new Date().getFullYear();
let selDay   = null;

const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

/* ─────────────────────────────────────────
   SCREEN NAVIGATION
───────────────────────────────────────── */
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}

function showRegister() { goTo('s-register'); }

/* ─────────────────────────────────────────
   AUTH
───────────────────────────────────────── */
function doLogin() {
  const email = (document.getElementById('l-email').value || 'aluno@alloha.edu').trim();
  const name  = emailToName(email);
  setUser(name, email);
  goTo('s-portal');
  initPortal();
}

function doRegister() {
  const name  = (document.getElementById('r-name').value  || 'Aluno Alloha').trim();
  const email = (document.getElementById('r-email').value || 'aluno@alloha.edu').trim();
  setUser(name, email);
  goTo('s-portal');
  initPortal();
}

function doLogout() {
  closeProfile();
  goTo('s-login');
}

function emailToName(email) {
  return email.split('@')[0]
    .replace(/[._]/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function setUser(name, email) {
  user = { name, email, initials: getInitials(name) };

  document.getElementById('av-initials').textContent  = user.initials;
  document.getElementById('pav-initials').textContent = user.initials;
  document.getElementById('pav-name').textContent     = name;
  document.getElementById('pav-email').textContent    = email;

  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
  document.getElementById('h-greeting').textContent = `${greet}, ${name.split(' ')[0]}!`;

  updateProgress();
}

function getInitials(name) {
  const parts = name.trim().split(' ').filter(Boolean);
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function updateProgress() {
  const started = COURSES.filter(c => c.prog > 0).length;
  const avg     = started ? Math.round(COURSES.filter(c => c.prog > 0).reduce((a,c) => a + c.prog, 0) / COURSES.length) : 0;
  document.getElementById('prog-pct').textContent  = avg + '%';
  document.getElementById('prog-fill').style.width = avg + '%';
  document.getElementById('prog-sub').textContent  =
    started ? `${started} de ${COURSES.length} cursos iniciados` : 'Nenhum curso iniciado';
}

/* ─────────────────────────────────────────
   PROFILE PANEL
───────────────────────────────────────── */
function toggleProfile() {
  const panel = document.getElementById('profile-panel');
  const btn   = document.getElementById('avatar-btn');
  const open  = panel.hasAttribute('hidden');
  if (open) {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    closeProfile();
  }
}

function closeProfile() {
  const panel = document.getElementById('profile-panel');
  const btn   = document.getElementById('avatar-btn');
  panel.setAttribute('hidden', '');
  btn.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', e => {
  const panel = document.getElementById('profile-panel');
  const btn   = document.getElementById('avatar-btn');
  if (panel && !panel.hasAttribute('hidden') && btn && !btn.contains(e.target) && !panel.contains(e.target)) {
    closeProfile();
  }
});

/* ─────────────────────────────────────────
   TAB SWITCHING
───────────────────────────────────────── */
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  document.getElementById('tab-' + tab).classList.add('on');
  closeProfile();
}

/* ─────────────────────────────────────────
   COURSES
───────────────────────────────────────── */
function setFilter(f, el) {
  cFilter = f;
  document.querySelectorAll('#cat-chips .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  renderCourses();
}

function renderCourses() {
  const q    = (document.getElementById('course-search') || { value:'' }).value.toLowerCase();
  const list = COURSES.filter(c =>
    (cFilter === 'todos' || c.cat === cFilter) &&
    (!q || c.title.toLowerCase().includes(q))
  );

  document.getElementById('course-count').textContent = `${list.length} cursos`;
  document.getElementById('courses-grid').innerHTML   = list.length
    ? list.map(courseCard).join('')
    : '<p class="empty-state"><i class="ti ti-search-off"></i>Nenhum curso encontrado.</p>';
}

function courseCard(c) {
  const progHtml = c.prog > 0
    ? `<div class="prog-bar"><div class="prog-bar-fill" style="width:${c.prog}%"></div></div>
       <p class="c-prog-txt">${c.prog}% concluído</p>`
    : '';
  return `
    <article class="c-card" onclick="openCourse(${c.id})" tabindex="0" role="button" aria-label="Abrir curso: ${c.title}">
      <div class="c-thumb" style="background:${c.bg}">${c.emoji}</div>
      <div class="c-body">
        <p class="c-cat" style="color:${c.cc}">${c.cat}</p>
        <h3>${c.title}</h3>
        <div class="c-meta">
          <span><i class="ti ti-clock"></i>${c.dur}</span>
          <span>${c.level}</span>
        </div>
        ${progHtml}
      </div>
    </article>`;
}

function openCourse(id) {
  const c = COURSES.find(x => x.id === id);
  if (c) alert(`Abrindo curso: ${c.title}\n\nEm breve este curso estará disponível na plataforma Alloha Edu!`);
}

/* ─────────────────────────────────────────
   YOUTUBE / REVISTA GLOBAL
───────────────────────────────────────── */
const YT_CHANNEL = 'UC_Zuou7cmvoqIj_n0g3hWFw';
const RSS_API    = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL}`;

function loadYT() {
  fetch(RSS_API)
    .then(r => r.json())
    .then(data => {
      if (data.status === 'ok' && data.items && data.items.length) {
        ytItems = data.items;
      }
      renderYT();
    })
    .catch(() => renderYT());
}

const NEWS_KEYWORDS = {
  africa:   ['africa','áfrica','nairóbi','lagos','acra','sudão','nigéria','ghana','etiópia'],
  brasil:   ['brasil','brasileiro','são paulo','rio','bolsa família','governo federal'],
  direitos: ['direito','racismo','discriminação','onu','humano','igualdade'],
  educacao: ['educação','escola','universidade','vestibular','enem','aluno'],
};

function setNewsFilter(f, el) {
  nFilter = f;
  document.querySelectorAll('#news-chips .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  renderYT();
}

function renderYT() {
  const el = document.getElementById('yt-feed');

  if (ytItems) {
    // Real RSS data
    const filtered = nFilter === 'todos' ? ytItems : ytItems.filter(item => {
      const txt = (item.title + ' ' + item.description).toLowerCase();
      return (NEWS_KEYWORDS[nFilter] || []).some(k => txt.includes(k));
    });

    const items = (filtered.length ? filtered : ytItems).slice(0, 6);
    el.innerHTML = `<div class="yt-grid">${items.map(ytCardReal).join('')}</div>`;
  } else {
    // Fallback static data
    const items = nFilter === 'todos'
      ? YT_FALLBACK
      : YT_FALLBACK.filter(v => v.tags.includes(nFilter));

    el.innerHTML = `<div class="yt-grid">${(items.length ? items : YT_FALLBACK).map(ytCardFallback).join('')}</div>`;
  }
}

function ytCardReal(v) {
  const vid   = (v.link.split('v=')[1] || '').split('&')[0];
  const thumb = `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
  const date  = new Date(v.pubDate).toLocaleDateString('pt-BR');
  return `
    <a class="yt-card" href="${v.link}" target="_blank" rel="noopener" aria-label="${v.title}">
      <div class="yt-thumb">
        <img src="${thumb}" alt="" loading="lazy" onerror="this.style.opacity='0'">
        <div class="yt-play-overlay"><i class="ti ti-player-play"></i></div>
      </div>
      <div class="yt-body">
        <h4>${v.title}</h4>
        <p class="yt-meta"><i class="ti ti-calendar"></i>${date}</p>
      </div>
    </a>`;
}

function ytCardFallback(v) {
  return `
    <a class="yt-card" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" aria-label="${v.title}">
      <div class="yt-thumb" style="background:#1a1a2e">
        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="" loading="lazy" onerror="this.style.opacity='0'">
        <div class="yt-play-overlay"><i class="ti ti-player-play"></i></div>
        <span class="yt-duration">${v.dur}</span>
      </div>
      <div class="yt-body">
        <h4>${v.title}</h4>
        <p class="yt-meta">${v.views} views · ${v.date}</p>
      </div>
    </a>`;
}

/* ─────────────────────────────────────────
   CALENDAR & EVENTS
───────────────────────────────────────── */
function renderCalendar() {
  document.getElementById('month-label').textContent = `${MONTHS[selMonth]} ${selYear}`;

  const firstDow = new Date(selYear, selMonth, 1).getDay();
  const daysInMonth = new Date(selYear, selMonth + 1, 0).getDate();
  const today = new Date();
  const eventDays = new Set(
    EVENTS.filter(e => e.month === selMonth && e.year === selYear).map(e => e.day)
  );

  const dows = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  let html = dows.map(d => `<div class="cal-dow">${d}</div>`).join('');

  for (let i = 0; i < firstDow; i++) html += `<div class="cal-day empty" role="gridcell" aria-hidden="true"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday   = d === today.getDate() && selMonth === today.getMonth() && selYear === today.getFullYear();
    const isSelected= d === selDay;
    const hasEvent  = eventDays.has(d);
    const classes   = ['cal-day', isToday ? 'today' : '', isSelected ? 'selected' : '', hasEvent ? 'has-event' : ''].filter(Boolean).join(' ');
    html += `<div class="${classes}" onclick="selectDay(${d})" role="gridcell" aria-label="${d} de ${MONTHS[selMonth]}${hasEvent?' - tem eventos':''}" tabindex="0">${d}</div>`;
  }

  document.getElementById('cal-grid').innerHTML = html;
}

function changeMonth(dir) {
  selMonth += dir;
  if (selMonth > 11) { selMonth = 0; selYear++; }
  if (selMonth < 0)  { selMonth = 11; selYear--; }
  selDay = null;
  renderCalendar();
  renderEvents();
}

function selectDay(d) {
  selDay = d;
  renderCalendar();
  const evs = EVENTS.filter(e => e.day === d && e.month === selMonth && e.year === selYear);
  document.getElementById('events-list-title').textContent = `Eventos — ${d} de ${MONTHS[selMonth]}`;
  document.getElementById('events-list').innerHTML = evs.length
    ? evs.map(eventCard).join('')
    : `<p class="empty-state"><i class="ti ti-calendar-off"></i>Nenhum evento neste dia.</p>`;
}

function renderEvents() {
  const evs = EVENTS.filter(e => e.month === selMonth && e.year === selYear);
  document.getElementById('events-list-title').textContent = `Eventos de ${MONTHS[selMonth]}`;
  document.getElementById('events-list').innerHTML = evs.length
    ? evs.map(eventCard).join('')
    : `<p class="empty-state"><i class="ti ti-calendar-off"></i>Nenhum evento este mês.</p>`;
}

function eventCard(e) {
  const monShort = MONTHS[e.month].substring(0, 3);
  return `
    <article class="event-item" tabindex="0" role="button" aria-label="${e.title}">
      <div class="event-date-badge" style="background:${e.typeBg}">
        <div class="eday" style="color:${e.typeColor}">${e.day}</div>
        <div class="emon" style="color:${e.typeColor}">${monShort}</div>
      </div>
      <div class="event-body">
        <h4>${e.title}</h4>
        <p class="emeta">
          <span><i class="ti ti-clock"></i>${e.time}</span>
          <span><i class="ti ti-map-pin"></i>${e.local}</span>
        </p>
      </div>
      <span class="event-type" style="background:${e.typeBg};color:${e.typeColor}">${e.type}</span>
    </article>`;
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
function initPortal() {
  renderCourses();
  loadYT();
  renderCalendar();
  renderEvents();
}

/* Keyboard: Enter / Space on card-like elements */
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.c-card, .event-item, .cal-day')) {
    e.preventDefault();
    e.target.click();
  }
});
