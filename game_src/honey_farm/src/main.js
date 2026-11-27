// «مزرعة العسل» — Honey Farm. Entry: window.HoneyFarm.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Casual farm management: drag the farmer to collect honey jars from the beehives into a stack, drop them at the packing machine,
// carry the finished crates to the roadside counter before customers lose patience, pick up the cash and buy upgrades (more hives,
// bigger stack, a conveyor belt, a second machine). Grow the business to the goal. Top-down 2D canvas, art and sound in code.
import { Farm, SPOTS, SIZE, GOAL, HIVE_COST, BAG_COST, CONVEYOR_COST, MACHINE2_COST, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const HONEY_CLIPS = { go: 2, pickup: 2, trick: 2, charge: 2, bump: 2, win: 2 };

/** Money is Egyptian pounds, never dollars. */
const CUR = () => (I.getLang() === 'en' ? 'EGP' : 'ج.م');

const S = {
  title: ['مزرعة العسل', 'Honey Farm'], play: ['يلا نبدأ', 'Start'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['من الأول', 'Play again'],
  how: ['اسحب المزارع: خد البرطمانات من الخلايا للماكينة، وصّل الصناديق للزبون، وخد الفلوس', 'Drag the farmer: jars from hives to the machine, crates to customers, then pick up the cash'],
  hive: ['خلية جديدة', 'New hive'], bag: ['شنطة أكبر', 'Bigger stack'], conveyor: ['سير ناقل', 'Conveyor belt'], machine2: ['ماكينة ثانية', 'Second machine'],
  have: ['عندك', 'Owned'], won: ['كبّرت المشروع! 🍯', 'Business grown! 🍯'], wonText: ['بقيت أشهر مربّي نحل على الطريق.', 'You run the best honey stand on the road.'],
  goal: ['الهدف', 'Goal'], hintDrag: ['اقرب من الخلية تاخد العسل', 'Walk up to a hive to collect honey'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], served: ['زباين', 'Served'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'pick': this.tone('triangle', hz(79), t, 0.1, 0.08); break;
      case 'drop': this.noise(t, 0.12, 0.08, 'lowpass', 500); break;
      case 'crate': this.tone('square', hz(72), t, 0.08, 0.05); this.tone('square', hz(79), t + 0.08, 0.12, 0.05); break;
      case 'sale': [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.06, 0.18, 0.1)); break;
      case 'cash': this.tone('square', hz(88), t, 0.07, 0.05); this.tone('square', hz(95), t + 0.07, 0.12, 0.05); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'left': this.slide('sine', 400, 200, t, 0.3, 0.06); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setTune({ tempo: 104, beats: 16, wave: 'triangle', vol: 0.08, notes: [[0, 67, 1], [1, 71, 1], [2, 74, 2], [4, 72, 1], [5, 69, 1], [6, 67, 2], [8, 65, 1], [9, 69, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 62, 2], [0, 43, 2], [4, 48, 2], [8, 41, 2], [12, 43, 2]] }); }
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: HONEY_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('hf-style')) document.head.append(h('style', { id: 'hf-style' }, css('hf', '#f0b030', '#a85a10', '#fff0a0') + `
.hf-root{background:#8ad860}.hf-shop{position:absolute;left:0;right:0;bottom:0;display:flex;gap:calc(var(--u)*1.2);padding:calc(var(--u)*1.6);box-sizing:border-box;justify-content:center;pointer-events:none}
.hf-item{pointer-events:auto;font-family:inherit;border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#e8a830,#a85a10);padding:calc(var(--u)*1.2) calc(var(--u)*1.4);cursor:pointer;font-weight:900;font-size:calc(var(--u)*2.8);color:#fff;display:flex;flex-direction:column;align-items:center;flex:1;max-width:calc(var(--u)*26);gap:calc(var(--u)*.2)}
.hf-item i{font-style:normal;font-size:calc(var(--u)*6)}.hf-item small{font-size:calc(var(--u)*2.5);opacity:.95}.hf-item.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);animation:hfpulse 1s infinite}.hf-item.done{opacity:.5}
@keyframes hfpulse{50%{transform:scale(1.06)}}
` ));
    this.root = h('div', { class: 'hf-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'hf-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.keys = new Set(); this.joy = null;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.pm = Math.min(this.cw / 22, this.ch / 22); this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => { if (this.mode !== 'play') return; this.cv.setPointerCapture(e.pointerId); this.joy = { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY }; });
    this.cv.addEventListener('pointermove', (e) => { if (this.joy && this.joy.id === e.pointerId) { this.joy.x = e.clientX; this.joy.y = e.clientY; } });
    const up = (e) => { if (this.joy && this.joy.id === e.pointerId) this.joy = null; };
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.type === 'keydown') this.keys.add(e.key.toLowerCase()); else this.keys.delete(e.key.toLowerCase()); };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let dx = 0; let dy = 0;
    if (this.joy) { const R = this.u * 9; dx = (this.joy.x - this.joy.x0) / R; dy = (this.joy.y - this.joy.y0) / R; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; } }
    const k = this.keys;
    if (k.has('arrowleft') || k.has('a')) dx -= 1; if (k.has('arrowright') || k.has('d')) dx += 1; if (k.has('arrowup') || k.has('w')) dy -= 1; if (k.has('arrowdown') || k.has('s')) dy += 1;
    return { dx, dy };
  }

  _soundPill() { const pill = h('button', { class: 'hf-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  /** Persist the farm as it stands (money, goal progress, purchases). Only a live
   *  session farm is ever snapshotted — the menu's demo farm must not overwrite it. */
  _persistFarm() {
    if (this.mode === 'play' && this.f) this.save.farm = this.f.snapshot();
    this.post({ type: 'save', save: this.save });
  }

  showMenu() {
    this._persistFarm(); // bank the session farm before the menu replaces it with a demo
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false);
    this.f = new Farm({ seed: 1 }); this.cam = { x: 20, y: 14 };
    this.layer.append(h('div', { class: 'hf-dim' }, h('div', { class: 'hf-card' },
      h('div', { class: 'hf-logo' }, '🍯 ', I.t('title')), h('div', { class: 'hf-small' }, I.t('how')),
      h('button', { class: 'hf-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, I.t('play')),
      h('button', { class: 'hf-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start() {
    this.voice.say('go');
    this.f = new Farm({ seed: (Date.now() & 0xffff) + 1 });
    if (this.save.farm) this.f.applySnapshot(this.save.farm); // the farm you built is still there
    this.mode = 'play'; this.fx = [];
    this.layer.replaceChildren(); this.sound.setMode(true);
    this.cashEl = h('span', {}, ''); this.goalEl = h('span', {}, '');
    this.barEl = h('b', { style: 'width:0%' });
    const back = h('button', { class: 'hf-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    this.items = {};
    const mk = (kind, icon, name) => { const cost = h('small', {}, ''); const b = h('button', { class: 'hf-item', onclick: () => { if (this.f.buy(kind)) { this.sound.play('buy'); this._persistFarm(); } } }, h('i', {}, icon), h('span', {}, name), cost); this.items[kind] = { b, cost }; return b; };
    this.layer.append(h('div', { class: 'hf-top' }, back, h('div', { class: 'hf-pill' }, this.cashEl), h('div', { class: 'hf-pill' }, this.goalEl)),
      h('div', { class: 'hf-top', style: 'top:calc(var(--u)*15)' }, h('div', { class: 'hf-bar' }, this.barEl)),
      h('div', { class: 'hf-shop' }, mk('hive', '🐝', I.t('hive')), mk('bag', '🎒', I.t('bag')), mk('conveyor', '➡️', I.t('conveyor')), mk('machine2', '⚙️', I.t('machine2'))));
    this._soundPill();
  }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const f = this.f;
    for (const e of f.step(dt, this._input())) {
      switch (e.type) {
        case 'pick': this.sound.play('pick'); this.voice.say('pickup'); break;
        case 'drop': this.sound.play('drop'); break;
        case 'crate': this.sound.play('crate'); this.voice.say('trick'); break;
        case 'sale': this.sound.play('sale'); this.voice.say('charge'); this.fx.push({ x: SPOTS.counter.x, y: SPOTS.counter.y - 2, t: 0, text: `+${e.pay} ${CUR()}` }); this._persistFarm(); break;
        case 'cash': this.sound.play('cash'); this.voice.say('pickup'); break;
        case 'left': this.sound.play('left'); this.voice.say('bump'); break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    this.cashEl.textContent = `💵 ${I.num(f.cash)}`;
    this.goalEl.textContent = `🍯 ${I.num(f.earned)}/${I.num(GOAL)}`;
    this.barEl.style.width = `${Math.min(100, (f.earned / GOAL) * 100)}%`;
    const info = { hive: [f.hiveCost()], bag: [f.bagCost()], conveyor: [f.conveyor ? null : CONVEYOR_COST], machine2: [f.machine2.open ? null : MACHINE2_COST] };
    for (const k of Object.keys(this.items)) { const c = info[k][0]; const it = this.items[k]; it.cost.textContent = c === null ? '✓' : `💵 ${I.num(c)}`; it.b.classList.toggle('can', c !== null && f.cash >= c); it.b.classList.toggle('done', c === null); }
    this.cam.x += (f.me.x - this.cam.x) * Math.min(1, dt * 5); this.cam.y += (f.me.y - this.cam.y) * Math.min(1, dt * 5);
    for (const x of this.fx) x.t += dt;
    this.fx = this.fx.filter((x) => x.t < 1);
  }

  _won() {
    this.save.wins += 1; this.save.farm = null; // goal reached: the next game starts a fresh farm
    this.post({ type: 'save', save: this.save }); this.sound.play('win'); this.voice.say('win');
    this.layer.append(h('div', { class: 'hf-dim' }, h('div', { class: 'hf-card' },
      h('div', { class: 'hf-title' }, I.t('won')), h('div', { class: 'hf-small' }, I.t('wonText')),
      h('div', { class: 'hf-pill' }, `${I.t('served')}: ${I.num(this.f.served)}`),
      h('button', { class: 'hf-btn', onclick: () => this.start() }, I.t('again')),
      h('button', { class: 'hf-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _sx(x) { return this.cw / 2 + (x - this.cam.x) * this.pm; }
  _sy(y) { return this.ch / 2 + (y - this.cam.y) * this.pm; }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const pm = this.pm; const f = this.f;
    g.fillStyle = '#7ad050'; g.fillRect(0, 0, W, H);
    if (!f) return;
    const x0 = this._sx(0); const y0 = this._sy(0);
    g.fillStyle = '#92e060'; g.fillRect(x0, y0, SIZE.w * pm, SIZE.h * pm);
    // flowers
    for (let i = 0; i < 80; i++) { const x = (i * 7.3) % SIZE.w; const y = (i * 11.9) % SIZE.h; g.fillStyle = ['#ff6a8a', '#ffe04a', '#fff', '#c88aff'][i % 4]; g.beginPath(); g.arc(this._sx(x), this._sy(y), pm * 0.17, 0, 6.3); g.fill(); g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(this._sx(x), this._sy(y), pm * 0.06, 0, 6.3); g.fill(); }
    // road and shop counter
    g.fillStyle = '#6a6a74'; g.fillRect(this._sx(37), y0, pm * 3.2, SIZE.h * pm);
    g.fillStyle = '#e8d8a8'; for (let y = 0; y < SIZE.h; y += 3) g.fillRect(this._sx(38.5), this._sy(y), pm * 0.2, pm * 1.4);
    this._counter(g, f);
    // hives
    f.hives.forEach((hv) => { if (!hv.open) { g.fillStyle = 'rgba(0,0,0,.25)'; g.beginPath(); g.ellipse(this._sx(hv.x), this._sy(hv.y), pm * 1.2, pm * 0.9, 0, 0, 6.3); g.fill(); g.fillStyle = '#fff'; g.font = `900 ${pm}px system-ui`; g.textAlign = 'center'; g.fillText('🔒', this._sx(hv.x), this._sy(hv.y) + pm * 0.35); return; } this._hive(g, hv); });
    // machines
    this._machine(g, SPOTS.machine, f.machine, true);
    this._machine(g, SPOTS.machine2, f.machine2, f.machine2.open);
    if (f.conveyor) { g.fillStyle = '#4a4a56'; g.fillRect(this._sx(15.5), this._sy(8.7), pm * 7, pm * 0.7); g.fillStyle = '#ffd23a'; for (let k = 0; k < 7; k++) g.fillRect(this._sx(15.5) + ((k * pm + this.clock * pm * 2) % (pm * 7)), this._sy(8.7), pm * 0.3, pm * 0.7); }
    // customers
    f.customers.forEach((c, i) => this._customer(g, c, i));
    // the farmer
    this._farmer(g, f.me);
    // text
    g.textAlign = 'center'; g.font = `900 ${this.u * 4}px Tajawal, system-ui`;
    for (const x of this.fx) { g.globalAlpha = 1 - x.t; g.fillStyle = '#fff'; g.strokeStyle = 'rgba(80,40,0,.9)'; g.lineWidth = this.u * 0.8; const tx = this._sx(x.x); const ty = this._sy(x.y) - x.t * pm * 2; g.strokeText(x.text, tx, ty); g.fillText(x.text, tx, ty); }
    g.globalAlpha = 1;
    if (this.joy) { const r = this.cv.getBoundingClientRect(); g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = this.u * 0.6; g.beginPath(); g.arc(this.joy.x0 - r.left, this.joy.y0 - r.top, this.u * 9, 0, 6.3); g.stroke(); g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.arc(this.joy.x - r.left, this.joy.y - r.top, this.u * 3.2, 0, 6.3); g.fill(); }
  }

  _hive(g, hv) {
    const x = this._sx(hv.x); const y = this._sy(hv.y); const pm = this.pm;
    g.fillStyle = 'rgba(0,0,0,.18)'; g.beginPath(); g.ellipse(x, y + pm * 0.9, pm * 1.1, pm * 0.35, 0, 0, 6.3); g.fill();
    for (let i = 0; i < 3; i++) { g.fillStyle = i % 2 ? '#e8b030' : '#f4c848'; g.strokeStyle = '#8a5a10'; g.lineWidth = pm * 0.08; g.beginPath(); g.roundRect(x - pm * (0.9 - i * 0.1), y + pm * (0.5 - i * 0.55), pm * (1.8 - i * 0.2), pm * 0.55, pm * 0.2); g.fill(); g.stroke(); }
    g.fillStyle = '#8a5a10'; g.beginPath(); g.arc(x, y + pm * 0.25, pm * 0.14, 0, 6.3); g.fill();
    for (let k = 0; k < 3; k++) { const a = this.clock * 2 + k * 2 + hv.x; g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(x + Math.cos(a) * pm * 1.6, y - pm * 0.6 + Math.sin(a * 1.3) * pm * 0.5, pm * 0.12, 0, 6.3); g.fill(); g.fillStyle = '#222'; g.fillRect(x + Math.cos(a) * pm * 1.6 - pm * 0.05, y - pm * 0.65 + Math.sin(a * 1.3) * pm * 0.5, pm * 0.1, pm * 0.06); }
    for (let j = 0; j < hv.jars; j++) { g.fillStyle = '#ffb820'; g.strokeStyle = '#8a5a10'; g.lineWidth = pm * 0.06; g.beginPath(); g.roundRect(x + pm * 1.2, y + pm * 0.7 - j * pm * 0.32, pm * 0.5, pm * 0.3, pm * 0.08); g.fill(); g.stroke(); }
  }

  _machine(g, p, m, open) {
    const x = this._sx(p.x); const y = this._sy(p.y); const pm = this.pm;
    if (!open) { g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(x - pm * 1.6, y - pm * 1.2, pm * 3.2, pm * 2.4); g.font = `900 ${pm}px system-ui`; g.fillStyle = '#fff'; g.textAlign = 'center'; g.fillText('🔒', x, y + pm * 0.3); return; }
    g.fillStyle = '#8a98b8'; g.strokeStyle = '#4a5878'; g.lineWidth = pm * 0.1; g.beginPath(); g.roundRect(x - pm * 1.6, y - pm * 1.2, pm * 3.2, pm * 2.4, pm * 0.3); g.fill(); g.stroke();
    g.fillStyle = '#c8d4ec'; g.fillRect(x - pm * 1.2, y - pm * 0.9, pm * 2.4, pm * 0.9);
    g.fillStyle = m.jars >= 4 ? '#5af08a' : '#e8564a'; g.beginPath(); g.arc(x + pm * 1.1, y + pm * 0.6, pm * 0.2, 0, 6.3); g.fill();
    g.fillStyle = '#ffb820'; for (let j = 0; j < Math.min(m.jars, 6); j++) g.fillRect(x - pm * 1.2 + j * pm * 0.4, y - pm * 0.7, pm * 0.3, pm * 0.5);
    g.fillStyle = '#d8a050'; g.strokeStyle = '#7a4a10'; g.lineWidth = pm * 0.06; for (let c = 0; c < Math.min(m.crates, 3); c++) { g.fillRect(x + pm * 1.9, y + pm * 0.6 - c * pm * 0.55, pm * 0.9, pm * 0.5); g.strokeRect(x + pm * 1.9, y + pm * 0.6 - c * pm * 0.55, pm * 0.9, pm * 0.5); }
    if (m.jars >= 4) { g.fillStyle = 'rgba(255,255,255,.8)'; g.fillRect(x - pm * 1.2, y + pm * 0.95, pm * 2.4 * Math.min(1, m.t / 2.5), pm * 0.2); }
  }

  _counter(g, f) {
    const pm = this.pm; const x = this._sx(SPOTS.counter.x); const y = this._sy(SPOTS.counter.y);
    g.fillStyle = '#c8803a'; g.strokeStyle = '#6a3a10'; g.lineWidth = pm * 0.1; g.beginPath(); g.roundRect(x - pm * 1.2, y - pm * 2, pm * 2.4, pm * 4, pm * 0.3); g.fill(); g.stroke();
    g.fillStyle = '#e8564a'; for (let i = 0; i < 5; i++) { g.fillRect(x - pm * 1.2 + i * pm * 0.48, y - pm * 2.7, pm * 0.24, pm * 0.7); g.fillStyle = i % 2 ? '#e8564a' : '#fff'; }
    const cx = this._sx(SPOTS.cash.x); const cy = this._sy(SPOTS.cash.y);
    g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.arc(cx, cy, pm * 1.4, 0, 6.3); g.fill();
    g.font = `900 ${pm * 1.4}px system-ui`; g.textAlign = 'center'; g.fillText(f.cashPile > 0 ? '💰' : '', cx, cy + pm * 0.5);
    if (f.cashPile > 0) { g.font = `900 ${pm * 0.8}px Tajawal, system-ui`; g.fillStyle = '#6a3a10'; g.fillText(`${f.cashPile} ${CUR()}`, cx, cy + pm * 1.6); }
  }

  _customer(g, c, i) {
    const pm = this.pm; const x = this._sx(SPOTS.counter.x + 3.2); const y = this._sy(SPOTS.counter.y - 3 + i * 2.1);
    g.fillStyle = ['#e8564a', '#3a8ae8', '#8a5ae8', '#3ac88a', '#e89a3a'][c.hue]; g.beginPath(); g.roundRect(x - pm * 0.5, y - pm * 0.2, pm, pm * 1.1, pm * 0.3); g.fill();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(x, y - pm * 0.5, pm * 0.45, 0, 6.3); g.fill();
    const k = c.patience / c.max;
    g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(x - pm * 0.7, y - pm * 1.4, pm * 1.4, pm * 0.22); g.fillStyle = k > 0.5 ? '#5af08a' : k > 0.25 ? '#f0c02a' : '#e8564a'; g.fillRect(x - pm * 0.7, y - pm * 1.4, pm * 1.4 * k, pm * 0.22);
    g.font = `${pm * 0.8}px system-ui`; g.textAlign = 'center'; g.fillText(k > 0.5 ? '🙂' : k > 0.25 ? '😐' : '😠', x, y - pm * 1.7);
  }

  _farmer(g, me) {
    const pm = this.pm; const x = this._sx(me.x); const y = this._sy(me.y);
    const bob = Math.abs(Math.sin(this.clock * 10)) * (me.vx || me.vy ? pm * 0.1 : 0);
    g.save(); g.translate(x, y - bob); g.scale(me.face, 1);
    g.fillStyle = 'rgba(0,0,0,.2)'; g.beginPath(); g.ellipse(0, pm * 0.9, pm * 0.6, pm * 0.2, 0, 0, 6.3); g.fill();
    for (let j = 0; j < me.jars; j++) { g.fillStyle = '#ffb820'; g.strokeStyle = '#8a5a10'; g.lineWidth = pm * 0.05; g.beginPath(); g.roundRect(-pm * 1.0, -pm * 0.1 - j * pm * 0.3, pm * 0.45, pm * 0.27, pm * 0.06); g.fill(); g.stroke(); }
    for (let c = 0; c < me.crates; c++) { g.fillStyle = '#d8a050'; g.strokeStyle = '#7a4a10'; g.fillRect(-pm * 1.0, -pm * 1.5 - c * pm * 0.5, pm * 0.7, pm * 0.45); g.strokeRect(-pm * 1.0, -pm * 1.5 - c * pm * 0.5, pm * 0.7, pm * 0.45); }
    g.fillStyle = '#3a5a9a'; g.fillRect(-pm * 0.35, pm * 0.35, pm * 0.28, pm * 0.5); g.fillRect(pm * 0.07, pm * 0.35, pm * 0.28, pm * 0.5);
    g.fillStyle = '#5ab84a'; g.beginPath(); g.roundRect(-pm * 0.5, -pm * 0.45, pm, pm * 0.9, pm * 0.25); g.fill();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(0, -pm * 0.8, pm * 0.42, 0, 6.3); g.fill();
    g.fillStyle = '#2a1a0a'; g.beginPath(); g.arc(pm * 0.15, -pm * 0.82, pm * 0.05, 0, 6.3); g.fill();
    g.fillStyle = '#e8c868'; g.strokeStyle = '#a8883a'; g.lineWidth = pm * 0.05; g.beginPath(); g.ellipse(0, -pm * 1.08, pm * 0.75, pm * 0.2, 0, 0, 6.3); g.fill(); g.stroke(); g.beginPath(); g.ellipse(0, -pm * 1.22, pm * 0.38, pm * 0.28, 0, Math.PI, 0); g.fill(); g.stroke();
    g.restore();
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.root.remove(); }
}

void HIVE_COST; void BAG_COST;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.HoneyFarm = api;
export default api;
