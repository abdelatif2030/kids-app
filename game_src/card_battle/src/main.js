// «معركة الكروت النيون» — Neon Card Battle. Entry: window.CardBattle.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Drag a card from your hand onto your half of the glowing arena (spells can go anywhere). Robots fight on their own; the Alien
// Overlord answers with slimes, bugs and brutes. Destroy his UFO, or have more base health when 2:30 is up. Canvas 2D, art and
// sound made in code. All the rules live in sim.js (pure, tested); this file only draws and listens.
import { Battle, CARDS, UNITS, SPELLS, DIFFS, DT, L, HALF, CX, MATCH_TIME, ENERGY_MAX, BASE_R, arenaHalfW, normalizeSave, recordResult } from './sim.js';
import { drawUnit, drawPlayerBase, drawUFO, drawCardIcon, ground, bar, glow, blob, setArt } from './art.js';
import { loadArt } from '../../cozy_kit/art.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['معركة الكروت النيون', 'Neon Card Battle'], play: ['يلا نقاتل!', 'Battle!'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'],
  again: ['مرة تانية', 'Play again'], resume: ['كمّل', 'Resume'], paused: ['إيقاف مؤقت', 'Paused'], howBtn: ['إزاي ألعب؟', 'How to play'],
  diff: ['اختار الصعوبة', 'Choose difficulty'], easy: ['سهل', 'Easy'], normal: ['عادي', 'Normal'], hard: ['صعب', 'Hard'], expert: ['خبير', 'Expert'], legend: ['أسطورة', 'Legend'],
  next: ['التالي', 'NEXT'], hint: ['اسحب كارت على الساحة', 'DRAG A CARD ONTO THE FIELD'], hintTap: ['دوس على الساحة عشان تنزّله', 'Tap the field to drop it'],
  win: ['انتصرت! 🏆', 'Victory! 🏆'], lose: ['خسرنا المعركة', 'Defeat'], draw: ['تعادل', 'Draw'],
  winText: ['دمّرت الكائن الفضائي!', 'You beat the Alien Overlord!'], timeWin: ['القاعدة بتاعتك أقوى!', 'Your base was stronger!'], loseText: ['جرّب تاني بكروت مختلفة', 'Try again with different cards'], drawText: ['الاتنين متساويين!', 'Both bases were equal!'],
  baseLeft: ['صحة القاعدة', 'Base health'], time: ['الوقت', 'Time'], kills: ['أعداء دمّرتهم', 'Enemies destroyed'],
  double: ['الطاقة ×٢ !', 'Energy ×2 !'], go: ['قتال!', 'FIGHT!'], restart: ['من الأول', 'Restart'], soundOn: ['الصوت شغّال', 'Sound on'], soundOff: ['الصوت مقفول', 'Sound off'], tUnit: ['وحدة', 'UNIT'], tSpell: ['سحر', 'SPELL'], tBuild: ['مبنى', 'BUILDING'],
  d_spark: ['روبوت سريع بيضرب من قريب.', 'Fast little robot. Hits up close.'], d_blaster: ['رامي ليزر بيضرب من بعيد.', 'Laser shooter. Hits from afar.'], d_smash: ['مدرّع تقيل وقوي جدًا.', 'Heavy and very strong.'], d_swarm: ['٣ روبوتات صغيرة سريعة.', 'Three small fast robots.'], d_turret: ['برج بلازما بيضرب ويختفي بعد شوية.', 'Plasma turret. Fires, then fades away.'], d_plasma: ['موجة تضرب كل اللي في الدايرة.', 'A wave that hits everything in the circle.'], d_blackhole: ['ثقب بيشدّ الأعداء ويأذيهم.', 'Pulls enemies in and hurts them.'], d_repair: ['مجال بيعالج روبوتاتك.', 'A field that heals your robots.'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  how1: ['١) اسحب كارت من إيدك على نصفك من الساحة', '1) Drag a card onto your half of the arena'], how2: ['٢) الروبوتات بتقاتل لوحدها', '2) Robots fight by themselves'],
  how3: ['٣) الطاقة بتتشحن مع الوقت — الكروت بتكلّف طاقة', '3) Energy refills over time — cards cost energy'], how4: ['٤) الموجة والثقب والإصلاح تنزل في أي مكان', '4) Spells can go anywhere on the field'],
  how5: ['٥) في آخر دقيقة الطاقة بتتشحن ضعف السرعة!', '5) In the last minute energy flows twice as fast!'], how6: ['دمّر الطبق الطائر أو خلّي قاعدتك أقوى لما الوقت يخلص', 'Destroy the UFO, or keep a stronger base when time is up'],
  back: ['رجوع', 'Back'], low: ['طاقة ناقصة', 'Not enough energy'],
  spark: ['شرارة', 'Spark'], blaster: ['رامي', 'Blaster'], smash: ['مدرّع', 'Smasher'], swarm: ['سرب', 'Swarm'], turret: ['برج', 'Turret'],
  plasma: ['موجة بلازما', 'Plasma Wave'], blackhole: ['ثقب أسود', 'Black Hole'], repair: ['مجال إصلاح', 'Repair Field'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);
const TAU = Math.PI * 2;
const UNIT_SIDE_COL = { 0: '#35e0ff', 1: '#ff3fd0' };

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.diff = this.save.diff;
    if (!document.getElementById('cb-style')) document.head.append(h('style', { id: 'cb-style' }, css('cb', '#3a2a8a', '#12083a', '#35f0ff') + CSS));
    this.root = h('div', { class: 'cb-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'cb-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.parts = []; this.texts = []; this.beams = []; this.fxs = []; this.shake = 0; this.drag = null; this.sel = -1;
    this.battle = new Battle({ seed: 1, difficulty: this.diff });
    this.icons = {};
    for (const id of Object.keys(CARDS)) { const c = h('canvas'); c.width = c.height = 128; drawCardIcon(c.getContext('2d'), id, 128); this.icons[id] = c; }
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    Promise.all([this._fonts(), loadArt(this.base || config.base, ['unit_spark', 'unit_blaster', 'unit_brute', 'unit_bug', 'unit_slime', 'unit_smash', 'unit_spitter', 'unit_turret', 'base', 'ufo']).then(setArt)]).then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  // ---- layout and projection --------------------------------------------------------------------------------------------
  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch * 0.62) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this._proj();
  }

  _proj() {
    const cw = this.cw; const ch = this.ch;
    const topH = this.topEl ? this.topEl.offsetTop + this.topEl.offsetHeight : ch * 0.14;
    const botH = this.botEl ? this.botEl.offsetHeight : ch * 0.27;
    const rt = topH + 4; const rb = ch - botH - 2;
    const farY = rt + Math.max(36, (rb - rt) * 0.1);
    const nearY = rb - Math.max(10, (rb - rt) * 0.035);
    this.Zf = 1.85; this.cx = cw / 2;
    this.k = (nearY - farY) / (1 - 1 / this.Zf);
    this.hor = nearY - this.k;
    this.sNear = Math.min((cw / 2 - 4) / 5, ((nearY - farY) / 16) * 1.45);
    this.nearY = nearY; this.farY = farY;
    this._bakeBg();
  }
  _Z(y) { return 1 + (L - y) * (this.Zf - 1) / L; }
  sc(y) { return this.sNear / this._Z(y); }
  sy(y) { return this.hor + this.k / this._Z(y); }
  P(x, y, z = 0) { const s = this.sc(y); return [this.cx + (x - CX) * s, this.sy(y) - z * s]; }
  inv(px, py) {
    const Z = this.k / (py - this.hor);
    const y = L - (Z - 1) * L / (this.Zf - 1);
    return [CX + (px - this.cx) / (this.sNear / Z), y];
  }
  ell(x, y, r) { const [px, py] = this.P(x, y); const rx = r * this.sc(y); const ry = Math.abs(this.sy(y + r) - this.sy(y - r)) / 2; return [px, py, rx, ry]; }

  _poly(g, pts) { g.beginPath(); pts.forEach(([x, y], i) => { const [px, py] = this.P(x, y); if (i) g.lineTo(px, py); else g.moveTo(px, py); }); g.closePath(); }
  _hexPts() { return [[CX - 3.6, 0], [CX + 3.6, 0], [10, HALF], [CX + 3.6, L], [CX - 3.6, L], [0, HALF]]; }

  _bakeBg() {
    const cw = this.cw; const ch = this.ch; const d = this.dpr;
    const c = this.bg || (this.bg = document.createElement('canvas'));
    c.width = Math.round(cw * d); c.height = Math.round(ch * d);
    const g = c.getContext('2d'); g.setTransform(d, 0, 0, d, 0, 0);
    const sky = g.createLinearGradient(0, 0, 0, ch); sky.addColorStop(0, '#0a0430'); sky.addColorStop(0.5, '#1a0a4a'); sky.addColorStop(1, '#07041a');
    g.fillStyle = sky; g.fillRect(0, 0, cw, ch);
    glow(g, cw * 0.2, ch * 0.2, cw * 0.7, 'rgba(255,60,200,.28)'); glow(g, cw * 0.85, ch * 0.5, cw * 0.8, 'rgba(40,120,255,.25)');
    let sd = 7; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(255,255,255,${0.2 + rnd() * 0.7})`; const r = 0.4 + rnd() * 1.4; g.beginPath(); g.arc(rnd() * cw, rnd() * ch, r, 0, TAU); g.fill(); }
    // platform slab (the side of the floating hexagon)
    const th = Math.max(10, (this.nearY - this.farY) * 0.035);
    const pts = this._hexPts();
    g.save(); g.translate(0, th); this._poly(g, pts); g.fillStyle = '#0a0626'; g.fill(); g.restore();
    const sl = g.createLinearGradient(0, this.farY, 0, this.nearY + th);
    sl.addColorStop(0, '#5a1a7a'); sl.addColorStop(1, '#0e3a6a');
    g.save(); this._poly(g, pts); g.lineWidth = th * 2.2; g.lineJoin = 'round'; g.strokeStyle = 'rgba(0,0,0,.0)'; g.restore();
    // underside glow
    glow(g, this.cx, this.nearY + th * 2, cw * 0.5, 'rgba(60,200,255,.25)');
    // floor
    this._poly(g, pts);
    const fl = g.createLinearGradient(0, this.farY, 0, this.nearY);
    fl.addColorStop(0, '#34104e'); fl.addColorStop(0.49, '#1c1048'); fl.addColorStop(0.51, '#0c2050'); fl.addColorStop(1, '#0a3466');
    g.fillStyle = fl; g.fill();
    g.save(); this._poly(g, pts); g.clip();
    // honeycomb
    const hr = 0.95; g.lineWidth = 1;
    for (let row = -1; row < 20; row++) {
      for (let col = -1; col < 9; col++) {
        const x = col * hr * 1.732 + (row % 2 ? hr * 0.866 : 0) + 0.2; const y = row * hr * 1.5;
        if (y < -0.5 || y > L + 0.5 || Math.abs(x - CX) > arenaHalfW(Math.min(L, Math.max(0, y))) + 1) continue;
        g.beginPath();
        for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; const [px, py] = this.P(x + Math.cos(a) * hr * 0.97, y + Math.sin(a) * hr * 0.97); if (k) g.lineTo(px, py); else g.moveTo(px, py); }
        g.closePath();
        g.strokeStyle = y < HALF ? 'rgba(255,100,220,.16)' : 'rgba(80,220,255,.17)'; g.stroke();
        if (((row * 7 + col * 3) % 11) === 0) { g.fillStyle = y < HALF ? 'rgba(255,100,220,.07)' : 'rgba(80,220,255,.08)'; g.fill(); }
      }
    }
    // centre line
    const a = this.P(0, HALF); const b = this.P(10, HALF);
    g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 2; g.setLineDash([10, 8]); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); g.setLineDash([]);
    const [mx, my] = this.P(CX, HALF); glow(g, mx, my, cw * 0.18, 'rgba(255,255,255,.22)');
    g.restore();
    // neon rim
    const rim = g.createLinearGradient(0, this.farY, 0, this.nearY);
    rim.addColorStop(0, '#ff3fd0'); rim.addColorStop(0.5, '#b070ff'); rim.addColorStop(1, '#35e0ff');
    this._poly(g, pts); g.lineJoin = 'round';
    g.strokeStyle = rim; g.globalAlpha = 0.25; g.lineWidth = 9; g.stroke(); g.globalAlpha = 0.5; g.lineWidth = 5; g.stroke(); g.globalAlpha = 1; g.lineWidth = 2; g.stroke();
    for (const [x, y] of pts) { const [px, py] = this.P(x, y); glow(g, px, py, 14, y < HALF ? '#ff3fd0' : y > HALF ? '#35e0ff' : '#c090ff'); }
  }

  // ---- input -----------------------------------------------------------------------------------------------------------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play' || this.sel < 0) return;
      const [x, y] = this._world(e.clientX, e.clientY, 0);
      this._tryPlay(this.sel, x, y);
    });
    this._onKey = (e) => {
      if (e.key === 'Escape') { if (this.mode === 'play') this.pauseGame(); else if (this.mode === 'pause') this.resumeGame(); return; }
      if (this.mode === 'play' && /^[1-4]$/.test(e.key)) { const i = Number(e.key) - 1; this.sel = this.sel === i ? -1 : i; }
    };
    window.addEventListener('keydown', this._onKey);
    this._onMove = (e) => { this.pointer = [e.clientX, e.clientY]; };
    this.cv.addEventListener('pointermove', this._onMove);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _world(cx, cy, lift) { const r = this.cv.getBoundingClientRect(); return this.inv(cx - r.left, cy - r.top - lift); }

  _cardDown(e, slot) {
    if (this.mode !== 'play') return;
    e.preventDefault();
    const el = this.cardEls[slot].el;
    el.setPointerCapture(e.pointerId);
    this.drag = { slot, id: this.battle.deck.hand[slot], sx: e.clientX, sy: e.clientY, x: e.clientX, y: e.clientY, moved: false, touch: e.pointerType !== 'mouse' };
    this.sound.play('pick');
    this._info(this.drag.id);
  }
  _info(id) {
    if (!this.infoEl) return;
    if (!id) { this.infoEl.classList.remove('show'); return; }
    const c = CARDS[id]; const ty = c.type === 'spell' ? 'tSpell' : id === 'turret' ? 'tBuild' : 'tUnit';
    this.infoEl.replaceChildren(h('b', {}, I.t(id)), h('i', {}, I.t(ty)), h('span', {}, I.t('d_' + id)));
    this.infoEl.style.bottom = `${this.botEl.offsetHeight + 8}px`;
    this.infoEl.classList.add('show');
  }
  _cardMove(e) {
    const d = this.drag; if (!d) return;
    d.x = e.clientX; d.y = e.clientY;
    if (!d.moved && Math.hypot(d.x - d.sx, d.y - d.sy) > 9) d.moved = true;
    this._ghost();
  }
  _cardUp(e, cancel) {
    const d = this.drag; if (!d) return;
    this.drag = null; this.ghostEl.style.display = 'none'; this._info(null);
    if (cancel || this.mode !== 'play') return;
    if (!d.moved) { this.sel = this.sel === d.slot ? -1 : d.slot; return; }
    const r = this.cv.getBoundingClientRect();
    const over = e.clientY < this.botEl.getBoundingClientRect().top && e.clientY > r.top;
    if (!over) return;
    const [x, y] = this._world(e.clientX, e.clientY, d.touch ? 40 : 0);
    this._tryPlay(d.slot, x, y);
  }
  _ghost() {
    const d = this.drag; const gh = this.ghostEl;
    const over = d.moved && d.y < this.botEl.getBoundingClientRect().top;
    gh.style.display = d.moved && !over ? 'block' : 'none';
    const r = this.root.getBoundingClientRect();
    gh.style.left = `${d.x - r.left}px`; gh.style.top = `${d.y - r.top - 30}px`;
    if (gh.dataset.id !== d.id) { gh.dataset.id = d.id; const c = gh.firstChild; c.getContext('2d').clearRect(0, 0, 128, 128); c.getContext('2d').drawImage(this.icons[d.id], 0, 0); }
  }

  _tryPlay(slot, x, y) {
    const b = this.battle;
    const id = b.deck.hand[slot];
    const ok = b.play(slot, x, y);
    if (ok) {
      this.sel = -1;
      const ce = this.cardEls[slot].el; ce.classList.remove('pop'); void ce.offsetWidth; ce.classList.add('pop');
    } else {
      this.sound.play('nope');
      const ce = this.cardEls[slot].el; ce.classList.remove('shake'); void ce.offsetWidth; ce.classList.add('shake');
      if (id && b.energy < CARDS[id].cost) { this.engEl.classList.remove('flash'); void this.engEl.offsetWidth; this.engEl.classList.add('flash'); }
    }
    return ok;
  }

  // ---- screens ---------------------------------------------------------------------------------------------------------
  _soundPill() { const pill = h('button', { class: 'cb-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  _stars(n, big) { return h('div', { class: 'cb-stars' }, [0, 1, 2].map((i) => h('span', { class: i < n ? '' : 'off', style: big ? `animation:cbstar .5s ${0.3 + i * 0.35}s both` : '' }, '⭐'))); }

  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.topEl = this.botEl = null; this._proj();
    this.sound.setMode(false); this.drag = null; this.sel = -1;
    this.battle = new Battle({ seed: 1, difficulty: this.diff }); this.parts = []; this.texts = []; this.beams = []; this.fxs = [];
    const btns = ['easy', 'normal', 'hard', 'expert', 'legend'].map((d) => h('button', { class: `cb-diff${d === this.diff ? ' on' : ''}`, onclick: () => { this.diff = d; this.sound.play('tap'); this.showMenu(); } }, h('b', {}, I.t(d)), this._stars(this.save.stars[d])));
    this.layer.append(h('div', { class: 'cb-dim' }, h('div', { class: 'cb-card' },
      h('div', { class: 'cb-logo' }, '⚡ ', I.t('title')),
      h('div', { class: 'cb-small' }, I.t('diff')), h('div', { class: 'cb-diffs' }, btns),
      h('button', { class: 'cb-btn', onclick: () => { this.sound.unlock(); this.sound.play('tap'); this.start(); } }, I.t('play')),
      h('button', { class: 'cb-btn dark', onclick: () => this.showHow() }, I.t('howBtn')),
      h('button', { class: 'cb-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  showHow() {
    const back = this.mode === 'pause' ? () => this.showPause() : () => this.showMenu();
    this.layer.append(h('div', { class: 'cb-dim', style: 'background:rgba(5,2,20,.9)' }, h('div', { class: 'cb-card' },
      h('div', { class: 'cb-title' }, I.t('howBtn')),
      ['how1', 'how2', 'how3', 'how4', 'how5', 'how6'].map((k) => h('div', { class: 'cb-small', style: 'width:100%;text-align:start' }, I.t(k))),
      h('button', { class: 'cb-btn dark', onclick: () => { this.layer.lastChild.remove(); if (this.mode === 'menu') this.showMenu(); else void back; } }, I.t('back')))));
  }

  start() {
    this.mode = 'play'; this.layer.replaceChildren(); this.parts = []; this.texts = []; this.beams = []; this.fxs = []; this.sel = -1; this.endT = 0; this.shake = 0;
    this.battle = new Battle({ seed: (Date.now() & 0xffffff) + 1, difficulty: this.diff });
    this.sound.setMode(true); this.hintOn = !this.save.tutorial;
    const b = this.battle;
    this.timerEl = h('span', {}, '2:30'); this.x2El = h('span', { class: 'cb-x2' }, '×2');
    this.eHp = h('b', {}); this.eTx = h('span', {}); this.pHp = h('b', {}); this.pTx = h('span', {});
    this.infoEl = h('div', { class: 'cb-info' });
    this.pauseBtn = h('button', { class: 'cb-round cb-pausebtn', 'aria-label': I.t('paused'), onclick: () => this.pauseGame() }, '⏸');
    // top bar like the original: robot avatar + its vertical health bar, timer in the middle, alien avatar + its bar
    this.topEl = h('div', { class: 'cb-topw' },
      h('div', { class: 'cb-toprow' },
        h('div', { class: 'cb-av robot' }, '🤖'), h('div', { class: 'cb-vb robot' }, this.pHp),
        h('div', { class: 'cb-pill cb-timer' }, this.timerEl, this.x2El),
        h('div', { class: 'cb-vb alien' }, this.eHp), h('div', { class: 'cb-av alien' }, '👾')),
      h('div', { class: 'cb-hpnums' }, h('span', { class: 'robot' }, this.pTx), h('span', { class: 'alien' }, this.eTx)));
    this.cardEls = [0, 1, 2, 3].map((slot) => {
      const cv = h('canvas', { width: 128, height: 128 }); const cost = h('div', { class: 'cost' }); const nm = h('div', { class: 'nm' });
      const el = h('div', { class: 'cb-c', tabindex: 0, role: 'button', onpointerdown: (e) => this._cardDown(e, slot), onpointermove: (e) => this._cardMove(e), onpointerup: (e) => this._cardUp(e, false), onpointercancel: (e) => this._cardUp(e, true) }, cv, cost, nm);
      return { el, cv, cost, nm, id: null };
    });
    this.nextCv = h('canvas', { width: 128, height: 128 }); this.nextId = null;
    this.eFill = h('b', {}); this.eNum = h('div', { class: 'cb-enum' }, '5');
    this.engEl = h('div', { class: 'cb-energy' }, this.eFill, h('div', { class: 'seg' }));
    this.botEl = h('div', { class: 'cb-bot' },
      h('div', { class: 'cb-erow' }, h('div', { class: 'cb-next' }, h('div', { class: 'cb-nextl' }, I.t('next')), this.nextCv), this.eNum, this.engEl),
      h('div', { class: 'cb-hand' }, this.cardEls.map((c) => c.el)));
    this.ghostEl = h('div', { class: 'cb-ghost' }, h('canvas', { width: 128, height: 128 }));
    this.hintEl = h('div', { class: 'cb-hint show' }, h('span', { class: 'cb-finger' }, '👆'), h('span', {}, I.t('hint')));
    this.banner = h('div', { class: 'cb-banner' });
    this.layer.append(this.topEl, this.pauseBtn, this.botEl, this.infoEl, this.hintEl, this.banner);
    this.root.append(this.ghostEl);
    this._proj();
    this._say(I.t('go'));
    this._soundPill();
    this._hud(true);
  }

  _say(text) { this.banner.textContent = text; this.banner.classList.remove('go'); void this.banner.offsetWidth; this.banner.classList.add('go'); }
  _toggleSound() { this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; if (this.soundBtn) this.soundBtn.textContent = this.sound.muted ? '🔇 ' + I.t('soundOff') : '🔊 ' + I.t('soundOn'); this.post({ type: 'save', save: this.save }); }

  pauseGame() { if (this.mode !== 'play') return; this.mode = 'pause'; this.drag = null; if (this.ghostEl) this.ghostEl.style.display = 'none'; this.sound.suspend(); this.showPause(); }
  showPause() {
    this.pauseEl && this.pauseEl.remove();
    this.pauseEl = h('div', { class: 'cb-dim' }, h('div', { class: 'cb-card' },
      h('div', { class: 'cb-title' }, I.t('paused')),
      h('button', { class: 'cb-btn', onclick: () => this.resumeGame() }, I.t('resume')),
      h('button', { class: 'cb-btn dark', onclick: () => { this.pauseEl.remove(); this.start(); } }, I.t('restart')),
      h('button', { class: 'cb-btn dark', onclick: () => this.showHow() }, I.t('howBtn')),
      (this.soundBtn = h('button', { class: 'cb-btn dark', onclick: () => this._toggleSound() }, this.sound.muted ? '🔇 ' + I.t('soundOff') : '🔊 ' + I.t('soundOn'))),
      h('button', { class: 'cb-btn dark', onclick: () => { this.pauseEl.remove(); this.showMenu(); } }, I.t('menu'))));
    this.layer.append(this.pauseEl);
  }
  resumeGame() { if (this.mode !== 'pause') return; this.pauseEl && this.pauseEl.remove(); this.mode = 'play'; this.last = performance.now(); this.sound.resume(); }

  _result() {
    const b = this.battle; const o = b.over;
    this.save = recordResult(this.save, this.diff, o); this.post({ type: 'save', save: this.save });
    this.mode = 'result';
    const won = o.state === 'won';
    const title = won ? I.t('win') : o.state === 'lost' ? I.t('lose') : I.t('draw');
    const sub = won ? (b.base[1].hp <= 0 ? I.t('winText') : I.t('timeWin')) : o.state === 'lost' ? I.t('loseText') : I.t('drawText');
    const mm = `${Math.floor(o.time / 60)}:${String(Math.floor(o.time % 60)).padStart(2, '0')}`;
    this.sound.setMode(false); this.sound.play(won ? 'win' : 'lose');
    if (won) for (let i = 0; i < o.stars; i++) setTimeout(() => this.sound.play('star'), 300 + i * 350);
    this.layer.replaceChildren(h('div', { class: 'cb-dim' }, h('div', { class: 'cb-card' },
      h('div', { class: 'cb-title', style: won ? '' : 'color:#ff9ad8' }, title), h('div', { class: 'cb-small' }, sub),
      this._stars(o.stars, true),
      h('div', { class: 'cb-pill' }, `${I.t('baseLeft')}: ${I.num(Math.round(o.baseFrac * 100))}%`),
      h('div', { class: 'cb-small' }, `${I.t('time')} ${I.num(mm)} · ${I.t('kills')}: ${I.num(b.stats.kills)}`),
      won ? h('div', { class: 'cb-small' }, I.t('win_' + (this.girl ? 'f' : 'm'))) : null,
      h('button', { class: 'cb-btn', onclick: () => this.start() }, I.t('again')),
      h('button', { class: 'cb-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  // ---- update ----------------------------------------------------------------------------------------------------------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      else if (this.mode === 'menu') this._ambient(dt);
      if (this.mode !== 'pause') this._fx(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _ambient(dt) { if (Math.random() < dt * 3) { const x = 1 + Math.random() * 8; const y = 2 + Math.random() * 12; this._spark(x, y, 0.3, Math.random() < 0.5 ? '#35e0ff' : '#ff3fd0', 2, 0.6); } }

  _update(dt) {
    const b = this.battle;
    if (b.state === 'play') {
      const evs = b.step(dt);
      for (const e of evs) this._event(e);
      this._hud(false);
    } else {
      this.endT += dt;
      if (this.endT > 1.3) this._result();
    }
  }

  _hud(force) {
    const b = this.battle;
    const left = Math.ceil(b.timeLeft);
    const tx = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    if (tx !== this.lastTx || force) { this.timerEl.textContent = I.num(tx); this.lastTx = tx; this.timerEl.parentNode.classList.toggle('hurry', left <= 10); }
    this.x2El.style.display = b.doubled ? 'inline' : 'none';
    this.eHp.style.height = `${Math.max(0, (b.base[1].hp / b.base[1].max) * 100)}%`; this.eTx.textContent = I.num(Math.ceil(b.base[1].hp));
    this.pHp.style.height = `${Math.max(0, (b.base[0].hp / b.base[0].max) * 100)}%`; this.pTx.textContent = I.num(Math.ceil(b.base[0].hp));
    const e = b.energy;
    this.eFill.style.width = `${(e / ENERGY_MAX) * 100}%`; this.eNum.textContent = I.num(Math.floor(e));
    this.engEl.classList.toggle('x2', b.doubled); this.eNum.classList.toggle('x2', b.doubled); this.engEl.classList.toggle('full', e >= ENERGY_MAX - 0.01);
    b.deck.hand.forEach((id, i) => {
      const c = this.cardEls[i];
      if (c.id !== id) { c.id = id; const g = c.cv.getContext('2d'); g.clearRect(0, 0, 128, 128); g.drawImage(this.icons[id], 0, 0); c.cost.textContent = I.num(CARDS[id].cost); c.nm.textContent = I.t(id); c.el.setAttribute('aria-label', `${I.t(id)} ${CARDS[id].cost}`); }
      c.el.classList.toggle('low', e < CARDS[id].cost);
      c.el.classList.toggle('sel', this.sel === i);
      c.el.classList.toggle('drag', !!(this.drag && this.drag.slot === i && this.drag.moved));
    });
    if (this.nextId !== b.deck.next) { this.nextId = b.deck.next; const g = this.nextCv.getContext('2d'); g.clearRect(0, 0, 128, 128); g.drawImage(this.icons[this.nextId], 0, 0); }
    if (this.hintEl) {
      const show = this.hintOn || this.sel >= 0;
      this.hintEl.classList.toggle('show', show);
      this.hintEl.lastChild.textContent = this.sel >= 0 ? I.t('hintTap') : I.t('hint');
      this.hintEl.style.bottom = `${this.botEl.offsetHeight + 8}px`;
    }
  }

  _event(e) {
    const snd = this.sound;
    switch (e.type) {
      case 'deploy':
        snd.play('deploy'); this._ring(e.x, e.y, 1.1, UNIT_SIDE_COL[e.side]); this._burst(e.x, e.y, 10, [UNIT_SIDE_COL[e.side], '#fff'], 2.5);
        if (e.side === 0 && !this.save.tutorial) { this.save.tutorial = true; this.hintOn = false; this.post({ type: 'save', save: this.save }); }
        break;
      case 'shot': snd.play(e.proj === 'goo' ? 'goo' : 'laser'); this._spark(e.x, e.y, 0.9, e.proj === 'goo' ? '#9aff5a' : '#7af8ff', 3, 0.3); break;
      case 'hit': snd.play('hit'); this._burst(e.tx, e.ty, 4, ['#fff', UNIT_SIDE_COL[e.side]], 2); break;
      case 'impact': this._burst(e.x, e.y, 5, [e.proj === 'goo' ? '#9aff5a' : '#7af8ff', '#fff'], 2.2); break;
      case 'dmg': this._float(e); if (e.base) { snd.play('baseHit'); this.shake = Math.max(this.shake, e.side === 0 ? 5 : 2); } break;
      case 'die': {
        this._burst(e.x, e.y, e.silent ? 8 : 22, e.side === 0 ? ['#35e0ff', '#fff', '#8aa0ff'] : ['#ff3fd0', '#a0ff5a', '#fff'], 4.5);
        this._ring(e.x, e.y, 0.9, e.side === 0 ? '#35e0ff' : '#ff3fd0');
        snd.play('boom'); break;
      }
      case 'beam': this.beams.push({ x: e.x, y: e.y, tx: e.tx, ty: e.ty, t: 0, side: e.side }); snd.play('beam'); break;
      case 'spell': {
        this.fxs.push({ kind: e.kind, x: e.x, y: e.y, r: e.r, delay: e.delay, dur: e.dur, t: 0, n: 0 });
        snd.play(e.kind === 'blackhole' ? 'hole' : e.kind); break;
      }
      case 'plasma': this._burst(e.x, e.y, 36, ['#35f0ff', '#fff', '#a0f0ff'], 6); this.shake = Math.max(this.shake, 7); break;
      case 'heal': this.parts.push({ x: e.x + (Math.random() - 0.5) * 0.6, y: e.y, z: 0.3, vx: 0, vy: 0, vz: 1.4, life: 0.8, max: 0.8, col: '#7affa0', size: 0.2, kind: 'plus' }); break;
      case 'double': snd.play('double'); this._say(I.t('double')); snd.setMode(true, true); break;
      case 'win': case 'lose': case 'draw': this._endFx(e.type); break;
      default: break;
    }
  }

  _endFx(type) {
    const b = this.battle;
    const base = type === 'win' ? b.base[1] : type === 'lose' ? b.base[0] : null;
    if (base && base.hp <= 0) {
      for (let i = 0; i < 6; i++) setTimeout(() => { this._burst(base.x + (Math.random() - 0.5) * 2, base.y + (Math.random() - 0.5), 28, ['#ffd23a', '#ff6a3a', '#fff', base.side ? '#ff3fd0' : '#35e0ff'], 6); this.sound.play('boom'); }, i * 160);
      this.shake = 10;
    }
  }

  // ---- effects ---------------------------------------------------------------------------------------------------------
  _burst(x, y, n, cols, sp) {
    for (let i = 0; i < n && this.parts.length < 420; i++) {
      const a = Math.random() * TAU; const v = (0.4 + Math.random()) * sp;
      this.parts.push({ x, y, z: 0.4 + Math.random() * 0.5, vx: Math.cos(a) * v, vy: Math.sin(a) * v * 0.8, vz: 1 + Math.random() * 3, life: 0.5 + Math.random() * 0.5, max: 1, col: cols[i % cols.length], size: 0.07 + Math.random() * 0.1, kind: 'spark' });
    }
  }
  _spark(x, y, z, col, n, life) { for (let i = 0; i < n && this.parts.length < 420; i++) this.parts.push({ x, y, z, vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.5, vz: Math.random() * 1.2, life, max: life, col, size: 0.08, kind: 'spark' }); }
  _ring(x, y, r, col) { this.fxs.push({ kind: 'ring', x, y, r, delay: 0, dur: 0.45, t: 0, col }); }
  _float(e) {
    if (this.texts.length > 30) this.texts.shift();
    const hurt = e.side === 0;
    this.texts.push({ x: e.x + (Math.random() - 0.5) * 0.5, y: e.y, z: e.base ? 2.4 : 1.6, t: 0, text: String(e.n), col: hurt ? '#ff8aa8' : '#ffe86a', big: e.base || e.n >= 100 });
  }

  _fx(dt) {
    for (const p of this.parts) { p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; if (p.kind === 'spark') p.vz -= 9 * dt; if (p.z < 0 && p.kind === 'spark') { p.z = 0; p.vz *= -0.3; } }
    this.parts = this.parts.filter((p) => p.life > 0);
    for (const t of this.texts) { t.t += dt; t.z += dt * 1.1; }
    this.texts = this.texts.filter((t) => t.t < 0.9);
    for (const b of this.beams) b.t += dt;
    this.beams = this.beams.filter((b) => b.t < 0.22);
    for (const f of this.fxs) {
      const was = f.t; f.t += dt;
      if (f.kind === 'repair' && f.t > f.delay && Math.floor(f.t / 0.25) !== Math.floor(was / 0.25)) { const a = Math.random() * TAU; const rr = Math.random() * f.r * 0.9; this.parts.push({ x: f.x + Math.cos(a) * rr, y: f.y + Math.sin(a) * rr * 0.8, z: 0, vx: 0, vy: 0, vz: 1.3, life: 0.9, max: 0.9, col: '#7affa0', size: 0.22, kind: 'plus' }); }
      if (f.kind === 'blackhole' && f.t > f.delay && f.t < f.delay + f.dur - 0.3 && Math.random() < 0.6) { const a = Math.random() * TAU; this.parts.push({ x: f.x + Math.cos(a) * f.r, y: f.y + Math.sin(a) * f.r * 0.8, z: 0.2, vx: -Math.cos(a) * f.r * 1.3, vy: -Math.sin(a) * f.r * 1.0, vz: 0, life: 0.8, max: 0.8, col: '#c07aff', size: 0.09, kind: 'spark', noG: true }); }
      if (f.kind === 'blackhole' && was < f.delay + f.dur && f.t >= f.delay + f.dur) { this.sound.play('holeEnd'); this._burst(f.x, f.y, 14, ['#c07aff', '#fff'], 4); }
    }
    this.fxs = this.fxs.filter((f) => f.t < f.delay + f.dur + (f.kind === 'plasma' ? 0.6 : 0.3));
    this.shake = Math.max(0, this.shake - dt * 28);
  }

  // ---- drawing ---------------------------------------------------------------------------------------------------------
  _draw() {
    const g = this.g; const d = this.dpr;
    g.setTransform(d, 0, 0, d, 0, 0);
    g.drawImage(this.bg, 0, 0, this.cw, this.ch);
    if (this.shake > 0.1) g.translate((Math.random() - 0.5) * this.shake, (Math.random() - 0.5) * this.shake);
    const b = this.battle; const al = b.state === 'play' && this.mode === 'play' ? b.alpha : 0;
    this._zone(g);
    for (const f of this.fxs) this._drawField(g, f);
    // depth-sorted things
    const list = [];
    for (const bs of b.base) list.push({ y: bs.y, f: () => this._base(g, bs) });
    for (const u of b.units) { const ix = u.px + (u.x - u.px) * al; const iy = u.py + (u.y - u.py) * al; list.push({ y: iy, f: () => this._unit(g, u, ix, iy) }); }
    for (const p of b.projs) { const dx = p.t.x - p.x; const dy = p.t.y - p.y; const dl = Math.hypot(dx, dy) || 1; const ex = p.x + (dx / dl) * p.spd * DT * al; const ey = p.y + (dy / dl) * p.spd * DT * al; list.push({ y: ey + 0.5, f: () => this._proj2(g, p, ex, ey, dx / dl, dy / dl) }); }
    list.sort((a, c) => a.y - c.y);
    for (const it of list) it.f();
    this._ghostPreview(g);
    for (const bm of this.beams) this._drawBeam(g, bm);
    this._drawParts(g);
    g.textAlign = 'center';
    for (const t of this.texts) { const [px, py] = this.P(t.x, t.y, t.z); const s = this.sc(t.y); const fs = s * (t.big ? 0.95 : 0.62); g.font = `900 ${fs}px Tajawal, system-ui`; g.globalAlpha = Math.min(1, (0.9 - t.t) * 3); g.lineWidth = fs * 0.2; g.strokeStyle = 'rgba(10,0,40,.95)'; g.strokeText(t.text, px, py); g.fillStyle = t.col; g.fillText(t.text, px, py); }
    g.globalAlpha = 1;
  }

  _zone(g) {
    const dr = this.drag && this.drag.moved ? this.drag.id : this.sel >= 0 ? this.battle.deck.hand[this.sel] : null;
    if (!dr || this.mode !== 'play') return;
    const spell = CARDS[dr].type === 'spell';
    const pulse = 0.5 + 0.5 * Math.sin(this.clock * 6);
    g.save();
    if (spell) { this._poly(g, this._hexPts()); g.strokeStyle = `rgba(255,255,255,${0.35 + pulse * 0.4})`; g.lineWidth = 3; g.stroke(); g.fillStyle = 'rgba(160,120,255,.1)'; g.fill(); } else {
      this._poly(g, [[0, HALF], [10, HALF], [CX + 3.6, L], [CX - 3.6, L]]);
      g.fillStyle = `rgba(60,255,210,${0.14 + pulse * 0.1})`; g.fill(); g.setLineDash([10, 7]); g.strokeStyle = `rgba(120,255,230,${0.6 + pulse * 0.3})`; g.lineWidth = 3; g.stroke();
      this._poly(g, [[CX - 3.6, 0], [CX + 3.6, 0], [10, HALF], [0, HALF]]); g.fillStyle = 'rgba(255,40,100,.1)'; g.fill();
    }
    g.restore();
  }

  _ghostPreview(g) {
    const dr = this.drag && this.drag.moved ? this.drag : null;
    const id = dr ? dr.id : null;
    if (!id) return;
    const rect = this.cv.getBoundingClientRect();
    if (dr.y >= this.botEl.getBoundingClientRect().top || dr.y < rect.top) return;
    const [x, y] = this._world(dr.x, dr.y, dr.touch ? 40 : 0);
    const b = this.battle; const c = CARDS[id];
    const ok = b.zoneOk(id, x, y) && b.energy >= c.cost;
    const col = ok ? '60,255,200' : '255,70,90';
    const r = c.type === 'spell' ? SPELLS[c.spell].r : UNITS[c.unit].range > 2 ? 1.0 : 0.7;
    const [px, py, rx, ry] = this.ell(x, y, r);
    g.save(); g.fillStyle = `rgba(${col},.22)`; g.strokeStyle = `rgba(${col},.95)`; g.lineWidth = 3; g.setLineDash(c.type === 'spell' ? [] : [6, 5]);
    g.beginPath(); g.ellipse(px, py, rx, ry, 0, 0, TAU); g.fill(); g.stroke(); g.restore();
    if (c.type === 'unit') {
      g.save(); g.globalAlpha = ok ? 0.75 : 0.35;
      const offs = c.count === 3 ? [[-0.5, 0.2], [0.5, 0.2], [0, -0.35]] : [[0, 0]];
      for (const [ox, oy] of offs) { const [qx, qy] = this.P(x + ox, y + oy); drawUnit(g, c.unit, qx, qy, this.sc(y), UNITS[c.unit].r, { t: this.clock, side: 0, spawn: 1 }); }
      g.restore();
      if (UNITS[c.unit].range > 2) { const [, , rx2, ry2] = this.ell(x, y, UNITS[c.unit].range); g.save(); g.strokeStyle = `rgba(${col},.5)`; g.setLineDash([4, 6]); g.beginPath(); g.ellipse(px, py, rx2, ry2, 0, 0, TAU); g.stroke(); g.restore(); }
    }
  }

  _unit(g, u, x, y) {
    const d = UNITS[u.kind]; const [px, py] = this.P(x, y); const s = this.sc(y);
    const R = u.r * s;
    ground(g, px, py, R, u.side, d.building ? 1 : 0.8 + 0.2 * Math.sin(this.clock * 4 + u.id));
    const sp = u.spawn > 0 ? 1 - u.spawn / 0.45 : 1;
    drawUnit(g, u.kind, px, py, s, u.r, { t: u.age + this.clock * 0, side: u.side, moving: u.moving, atk: u.atk, flash: u.flash, spawn: sp, ang: u.ang });
    if (u.hp < u.max && u.spawn <= 0) { const frac = u.hp / u.max; bar(g, px, py - R * (d.building ? 3.0 : u.r > 0.5 ? 3.3 : 2.9), Math.max(R * 2.2, 18), Math.max(3, R * 0.28), frac, frac > 0.5 ? '#5aff9a' : frac > 0.25 ? '#ffd23a' : '#ff4a5a'); }
    if (d.building) { bar(g, px, py + R * 0.9, R * 1.6, Math.max(2, R * 0.14), u.life / UNITS.turret.life, '#35e0ff'); }
  }

  _base(g, bs) {
    const [px, py] = this.P(bs.x, bs.y); const s = this.sc(bs.y); const R = BASE_R * s;
    const o = { t: this.clock, flash: bs.flash, atk: bs.atk };
    if (bs.hp <= 0) { blob(g, px, py, R * 1.3, R * 0.55, '#3a2a40', '#0a0612', '#222'); glow(g, px, py - R * 0.3, R * 1.2, 'rgba(255,120,40,.6)'); return; }
    if (bs.side === 0) { drawPlayerBase(g, px, py, s, o); bar(g, px, py + R * 0.85, R * 2.6, Math.max(5, R * 0.24), bs.hp / bs.max, '#35e0ff'); } else { const hy = drawUFO(g, px, py, s, o); bar(g, px, hy - R * 1.9, R * 2.6, Math.max(5, R * 0.24), bs.hp / bs.max, '#ff3fd0'); }
  }

  _proj2(g, p, x, y, dx, dy) {
    const [px, py] = this.P(x, y, 0.9); const s = this.sc(y);
    const [qx, qy] = this.P(x - dx * 0.5, y - dy * 0.5, 0.9);
    if (p.kind === 'goo') { glow(g, px, py, s * 0.45, '#9aff5a'); blob(g, px, py, s * 0.16, s * 0.16, '#e8ffb0', '#58d82a'); return; }
    g.save(); g.lineCap = 'round'; g.globalCompositeOperation = 'lighter';
    g.strokeStyle = p.side === 0 ? '#35e0ff' : '#ff3fd0'; g.lineWidth = s * 0.2; g.beginPath(); g.moveTo(qx, qy); g.lineTo(px, py); g.stroke();
    g.strokeStyle = '#fff'; g.lineWidth = s * 0.07; g.stroke(); g.restore();
  }

  _drawBeam(g, bm) {
    const [ax, ay] = this.P(bm.x, bm.y, bm.side === 1 ? 1.4 : 2.0); const [bx, by] = this.P(bm.tx, bm.ty, 0.6);
    const k = 1 - bm.t / 0.22;
    g.save(); g.globalCompositeOperation = 'lighter'; g.lineCap = 'round'; g.globalAlpha = k;
    const col = bm.side === 0 ? '#35f0ff' : '#ff4ae0'; const w = this.sc(bm.y);
    if (bm.side === 1) { const gr = g.createLinearGradient(ax, ay, bx, by); gr.addColorStop(0, 'rgba(255,80,220,.55)'); gr.addColorStop(1, 'rgba(255,80,220,.1)'); g.fillStyle = gr; g.beginPath(); g.moveTo(ax - w * 0.3, ay); g.lineTo(ax + w * 0.3, ay); g.lineTo(bx + w * 0.55, by); g.lineTo(bx - w * 0.55, by); g.fill(); }
    g.strokeStyle = col; g.lineWidth = w * 0.3; g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke();
    g.strokeStyle = '#fff'; g.lineWidth = w * 0.1; g.stroke();
    glow(g, bx, by, w * 0.9, col, k); g.restore();
  }

  _drawField(g, f) {
    const [px, py, rx, ry] = this.ell(f.x, f.y, f.r);
    g.save();
    if (f.kind === 'ring') { const k = f.t / f.dur; g.globalAlpha = 1 - k; g.strokeStyle = f.col; g.lineWidth = 3; g.beginPath(); g.ellipse(px, py, rx * (0.3 + k * 0.9), ry * (0.3 + k * 0.9), 0, 0, TAU); g.stroke(); g.restore(); return; }
    if (f.kind === 'plasma') {
      if (f.t < f.delay) { const k = f.t / f.delay; g.strokeStyle = `rgba(120,250,255,${0.5 + 0.5 * Math.sin(f.t * 30)})`; g.lineWidth = 3; g.setLineDash([8, 6]); g.beginPath(); g.ellipse(px, py, rx, ry, 0, 0, TAU); g.stroke(); g.fillStyle = `rgba(80,220,255,${0.1 + k * 0.2})`; g.fill(); glow(g, px, py - rx * 0.5, rx * 0.6 * k, '#fff', k); } else {
        const k = (f.t - f.delay) / 0.6; const a = Math.max(0, 1 - k);
        g.globalCompositeOperation = 'lighter'; g.globalAlpha = a; g.fillStyle = 'rgba(60,200,255,.5)'; g.beginPath(); g.ellipse(px, py, rx * (0.3 + k * 0.8), ry * (0.3 + k * 0.8), 0, 0, TAU); g.fill();
        g.strokeStyle = '#d8ffff'; g.lineWidth = 5; g.stroke(); glow(g, px, py - rx * 0.3, rx * 1.3, '#35f0ff', a * 0.8);
        g.strokeStyle = '#fff'; g.lineWidth = 2;
        for (let i = 0; i < 5; i++) { const an = i * 1.26 + Math.floor(f.t * 25) * 0.7; g.beginPath(); let x0 = px; let y0 = py; g.moveTo(x0, y0); for (let j = 1; j <= 5; j++) { x0 = px + Math.cos(an) * rx * 1.0 * (j / 5) + (Math.sin(j * 37 + i + Math.floor(f.t * 25)) * rx * 0.1); y0 = py + Math.sin(an) * ry * 1.0 * (j / 5) + (Math.cos(j * 17 + i) * ry * 0.1); g.lineTo(x0, y0); } g.stroke(); }
      }
    } else if (f.kind === 'blackhole') {
      const act = f.t - f.delay; const grow = Math.min(1, f.t / (f.delay + 0.3)); const fade = Math.min(1, (f.delay + f.dur - f.t) / 0.3);
      const a = Math.max(0, Math.min(grow, fade));
      g.globalAlpha = a;
      const gr = g.createRadialGradient(px, py, 0, px, py, rx); gr.addColorStop(0, 'rgba(0,0,0,.95)'); gr.addColorStop(0.55, 'rgba(30,5,70,.75)'); gr.addColorStop(1, 'rgba(150,60,255,.18)');
      g.fillStyle = gr; g.beginPath(); g.ellipse(px, py, rx, ry, 0, 0, TAU); g.fill();
      g.strokeStyle = 'rgba(210,150,255,.9)'; g.lineWidth = 2.5;
      for (let arm = 0; arm < 4; arm++) { g.beginPath(); for (let i = 0; i <= 26; i++) { const k = i / 26; const an = arm * 1.57 + k * 5 - Math.max(0, act) * 4; const rr = (0.08 + 0.92 * k); const x = px + Math.cos(an) * rx * rr; const y = py + Math.sin(an) * ry * rr; if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); }
      glow(g, px, py, rx * 0.5, '#b070ff', a * 0.7);
    } else if (f.kind === 'repair') {
      const a = Math.max(0, Math.min(1, f.t / 0.3, (f.delay + f.dur - f.t) / 0.4));
      g.globalAlpha = a; const gr = g.createRadialGradient(px, py, 0, px, py, rx); gr.addColorStop(0, 'rgba(90,255,150,.35)'); gr.addColorStop(1, 'rgba(60,255,120,.08)');
      g.fillStyle = gr; g.beginPath(); g.ellipse(px, py, rx, ry, 0, 0, TAU); g.fill();
      g.strokeStyle = '#8affb0'; g.lineWidth = 3; const pr = 0.85 + 0.15 * Math.sin(f.t * 6); g.beginPath(); g.ellipse(px, py, rx * pr, ry * pr, 0, 0, TAU); g.stroke();
    }
    g.restore();
  }

  _drawParts(g) {
    g.save(); g.globalCompositeOperation = 'lighter';
    for (const p of this.parts) {
      const [px, py] = this.P(p.x, p.y, p.z); const s = this.sc(p.y); const k = Math.max(0, p.life / p.max);
      g.globalAlpha = Math.min(1, k * 1.6);
      if (p.kind === 'plus') { g.fillStyle = p.col; const w = s * p.size; g.fillRect(px - w * 0.18, py - w * 0.5, w * 0.36, w); g.fillRect(px - w * 0.5, py - w * 0.18, w, w * 0.36); } else { g.fillStyle = p.col; g.beginPath(); g.arc(px, py, Math.max(1, s * p.size * (0.5 + k * 0.7)), 0, TAU); g.fill(); }
    }
    g.restore();
  }

  pause() { if (this.mode === 'play') this.pauseGame(); else this.sound.suspend(); }
  dispose() {
    cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey);
    this.root.remove();
  }
}

const CSS = `
.cb-root{background:#07041a;font-weight:700}
.cb-topw{position:absolute;top:0;left:0;right:0;padding:max(env(safe-area-inset-top),calc(var(--u)*2)) calc(var(--u)*2.5) 0;display:flex;flex-direction:column;gap:calc(var(--u)*1.4);direction:ltr}
.cb-toprow{display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.2)}
.cb-av{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*7.5);background:radial-gradient(circle,#1a2a6a,#07041a);border:calc(var(--u)*.6) solid;box-shadow:0 0 14px currentColor}
.cb-av.robot{border-color:#35e0ff;color:#35e0ff}.cb-av.alien{border-color:#ff3fd0;color:#ff3fd0}
.cb-vb{width:calc(var(--u)*3.4);height:calc(var(--u)*11);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.45) solid;display:flex;align-items:flex-end;overflow:hidden}
.cb-vb.robot{border-color:#35e0ff}.cb-vb.alien{border-color:#ff3fd0}
.cb-vb b{display:block;width:100%;transition:height .15s}
.cb-vb.robot b{background:linear-gradient(90deg,#8af4ff,#1a8ad8)}.cb-vb.alien b{background:linear-gradient(90deg,#ff8ae8,#c0189a)}
.cb-hpnums{display:flex;justify-content:space-between;font-size:calc(var(--u)*3);font-weight:900;color:#fff;text-shadow:0 1px 3px #000;margin-top:calc(var(--u)*-1);padding:0 calc(var(--u)*3)}
.cb-hpnums .robot{color:#9af4ff}.cb-hpnums .alien{color:#ff9ae8}
.cb-pausebtn{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*24);pointer-events:auto;width:calc(var(--u)*10);height:calc(var(--u)*10);font-size:calc(var(--u)*4.4);z-index:3}
.cb-topw .cb-round{pointer-events:auto}
.cb-timer{font-size:calc(var(--u)*7);padding:calc(var(--u)*.6) calc(var(--u)*4);min-width:calc(var(--u)*26);justify-content:center;border-radius:calc(var(--u)*3.5)}
.cb-info{position:absolute;left:calc(var(--u)*3);right:calc(var(--u)*3);display:none;flex-wrap:wrap;gap:.3em .6em;align-items:baseline;background:rgba(10,24,60,.92);border:calc(var(--u)*.5) solid #35f0ff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*3);color:#fff;pointer-events:none;box-shadow:0 0 16px #35f0ff88;z-index:4}
.cb-info.show{display:flex}.cb-info b{font-size:calc(var(--u)*4.4);font-weight:900}.cb-info i{font-style:normal;font-size:calc(var(--u)*2.8);color:#8ab4ff;letter-spacing:.05em}.cb-info span{flex-basis:100%;font-size:calc(var(--u)*3.2)}
.cb-timer.hurry{animation:cbhurry .5s infinite;background:linear-gradient(180deg,#ff6a8a,#a01a3a)}
.cb-x2{display:none;color:#ffe04a;font-size:.8em;margin-inline-start:.3em;text-shadow:0 0 8px #ff9a2a}
.cb-hprow{display:flex;gap:calc(var(--u)*2)}
.cb-hpb{flex:1;position:relative;height:calc(var(--u)*5.2);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.45) solid;overflow:hidden}
.cb-hpb.alien{border-color:#ff3fd0}.cb-hpb.robot{border-color:#35e0ff}
.cb-hpb b{display:block;height:100%;transition:width .15s}
.cb-hpb.alien b{background:linear-gradient(180deg,#ff8ae8,#c0189a)}.cb-hpb.robot b{background:linear-gradient(180deg,#8af4ff,#1a8ad8)}
.cb-hpb span{position:absolute;inset:0;direction:ltr;display:flex;align-items:center;justify-content:center;gap:.3em;font-weight:900;font-size:calc(var(--u)*3.3);text-shadow:0 1px 3px #000,0 0 4px #000}
.cb-bot{position:absolute;left:0;right:0;bottom:0;padding:calc(var(--u)*2) calc(var(--u)*2) max(env(safe-area-inset-bottom),calc(var(--u)*2.5));background:linear-gradient(180deg,rgba(10,4,40,0),rgba(10,4,40,.92) 22%);border-top:calc(var(--u)*.3) solid rgba(120,150,255,.45);pointer-events:auto;direction:ltr;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:calc(var(--u)*1.6)}
.cb-erow{display:flex;align-items:center;gap:calc(var(--u)*2)}
.cb-next{position:relative;width:calc(var(--u)*10);aspect-ratio:.9;border-radius:calc(var(--u)*2);background:linear-gradient(180deg,#2a2070,#120a40);border:calc(var(--u)*.4) solid #5a6ac8;opacity:.9;overflow:hidden;flex:none}
.cb-next canvas{position:absolute;left:12%;top:24%;width:76%}
.cb-nextl{position:absolute;top:0;left:0;right:0;text-align:center;font-size:calc(var(--u)*2.2);font-weight:900;background:rgba(0,0,0,.5);z-index:2;line-height:1.4}
.cb-enum{flex:none;width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;background:radial-gradient(#e08aff,#8a2ad8);border:calc(var(--u)*.5) solid #fff;font-weight:900;font-size:calc(var(--u)*4.8);display:flex;align-items:center;justify-content:center;box-shadow:0 0 calc(var(--u)*2) #b84aff}
.cb-enum.x2{background:radial-gradient(#ffe88a,#e08a1a);box-shadow:0 0 calc(var(--u)*2.5) #ffb02a}
.cb-energy{position:relative;flex:1;height:calc(var(--u)*5.4);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.5) solid #c07aff;overflow:hidden}
.cb-energy b{display:block;height:100%;background:linear-gradient(180deg,#e08aff,#8a2ad8);transition:width .1s linear}
.cb-energy.x2{border-color:#ffd23a}.cb-energy.x2 b{background:linear-gradient(180deg,#fff08a,#e8901a)}
.cb-energy.full b{animation:cbfull .6s infinite alternate}
.cb-energy.flash{animation:cbflash .4s}
.cb-energy .seg{position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0,transparent calc(10% - 2px),rgba(0,0,0,.65) calc(10% - 2px),rgba(0,0,0,.65) 10%)}
.cb-hand{display:flex;justify-content:center;gap:calc(var(--u)*1.6)}
.cb-c{flex:0 1 min(24%,calc(var(--u)*30));position:relative;aspect-ratio:.82;min-width:0;border-radius:calc(var(--u)*2.6);background:linear-gradient(180deg,#3d2c92,#170c4c);border:calc(var(--u)*.55) solid #6a8aff;box-shadow:0 0 calc(var(--u)*2) rgba(80,120,255,.45);touch-action:none;cursor:grab;overflow:hidden;-webkit-user-select:none;user-select:none}
.cb-c canvas{position:absolute;left:6%;top:4%;width:88%;height:auto;pointer-events:none}
.cb-c .cost{position:absolute;top:calc(var(--u)*.5);left:calc(var(--u)*.5);width:calc(var(--u)*6.4);height:calc(var(--u)*6.4);border-radius:50%;background:radial-gradient(#e08aff,#8a2ad8);border:calc(var(--u)*.4) solid #fff;font-weight:900;font-size:calc(var(--u)*3.8);display:flex;align-items:center;justify-content:center;z-index:2;pointer-events:none}
.cb-c .nm{position:absolute;bottom:0;left:0;right:0;font-size:calc(var(--u)*2.7);font-weight:900;padding:calc(var(--u)*.5) 0;text-align:center;background:rgba(0,0,0,.55);z-index:2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.cb-c.low{filter:saturate(.3) brightness(.65)}.cb-c.low .cost{background:radial-gradient(#ff8a8a,#c02a2a)}
.cb-c.sel{transform:translateY(calc(var(--u)*-2));border-color:#fff;box-shadow:0 0 calc(var(--u)*3) #35f0ff}
.cb-c.drag{opacity:.35}.cb-c.pop{animation:cbpop .4s}.cb-c.shake{animation:cbshake .3s}.cb-c:focus-visible{outline:calc(var(--u)*.6) solid #fff}
.cb-ghost{position:absolute;width:calc(var(--u)*17);aspect-ratio:1;pointer-events:none;z-index:50;transform:translate(-50%,-50%);display:none;filter:drop-shadow(0 0 10px #35f0ff)}
.cb-ghost canvas{width:100%;height:100%}
.cb-hint{position:absolute;top:auto;right:auto;left:50%;transform:translateX(-50%);background:rgba(20,10,70,.85);border:calc(var(--u)*.4) solid #35f0ff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);padding:calc(var(--u)*1) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .3s;pointer-events:none;display:flex;gap:.5em;align-items:center;max-width:96%;direction:ltr;box-shadow:0 0 14px #35f0ff}
.cb-hint.show{opacity:1}
.cb-finger{display:inline-block;animation:cbfinger 1.3s infinite}
.cb-banner{position:absolute;left:0;right:0;top:38%;text-align:center;font-size:calc(var(--u)*14);font-weight:900;font-style:italic;color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #1a2a8a;paint-order:stroke fill;opacity:0;pointer-events:none;text-shadow:0 0 20px #ff3fd0}
.cb-banner.go{animation:cbbanner 1.3s}
.cb-diffs{display:flex;gap:calc(var(--u)*1.6);width:100%}
.cb-diff{flex:1;font-family:inherit;color:#fff;border:calc(var(--u)*.5) solid #5a6ac8;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#2a2080,#140a48);padding:calc(var(--u)*1.2) 0;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*4.4)}
.cb-diff.on{border-color:#35f0ff;box-shadow:0 0 calc(var(--u)*2.5) #35f0ff;background:linear-gradient(180deg,#3a38b0,#1a1068)}
.cb-diff .cb-stars{font-size:calc(var(--u)*4)}
.cb-stars{display:flex;justify-content:center;gap:.1em}
.cb-stars span.off{filter:grayscale(1);opacity:.3}
.cb-dim{background:rgba(5,2,20,.62)}
.cb-card{background:linear-gradient(180deg,#2a1c78,#0e0630)}
@keyframes cbpop{0%{transform:scale(.7);opacity:.3}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
@keyframes cbshake{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
@keyframes cbfull{to{filter:brightness(1.5)}}
@keyframes cbflash{30%{background:rgba(255,70,90,.8)}}
@keyframes cbhurry{50%{transform:scale(1.08)}}
@keyframes cbfinger{0%{transform:translateY(8px)}50%{transform:translateY(-10px)}100%{transform:translateY(8px)}}
@keyframes cbbanner{0%{opacity:0;transform:scale(.4)}20%{opacity:1;transform:scale(1.15)}70%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.3)}}
@keyframes cbstar{0%{transform:scale(0) rotate(-90deg);opacity:0}70%{transform:scale(1.4) rotate(10deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
`;

void MATCH_TIME; void DIFFS;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.CardBattle = api;
export default api;
