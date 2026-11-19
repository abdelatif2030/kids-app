// «ينابيع القرية» — Hot Spring Village. Entry: window.HotSpring.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cozy management game: restore the hot spring of a snowy mountain village. Walk (drag) to the slicing mill, pick up ginger
// slices from its tray into a stack on your back, carry them to the spring to keep the water hot, and help frozen visitors thaw.
// Grateful guests leave coins; coins buy a tea house, a bigger pack, a faster mill, a second mill, more seats and a helper fox.
// Every few warmed guests light a lantern; all ten lanterns lit = the valley is warm. 2D canvas, art and sound made in code.
// No network, no links, nothing is lost for good.
import { Village, SIZE, SPRING, GATE, TEAHOUSE, LANTERNS, LANTERN_AT, UPGRADES, MILL_SPOTS, TRAY_MAX, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';
import { h, css } from '../../cozy_kit/ui.js';

const CSS = css('hs', '#e0803a', '#a8431f', '#ffe08a') + `
.hs-slice{display:inline-block;width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);border-radius:50%;background:radial-gradient(circle at 40% 35%,#fff3b8,#f2c250 65%,#c98a2a);border:calc(var(--u)*.35) solid #fff}
.hs-heat{justify-content:center!important;display:flex;gap:calc(var(--u)*1.2);align-items:center;font-size:calc(var(--u)*4.6);direction:ltr}
.hs-heat .hs-bar{max-width:calc(var(--u)*34);flex:0 1 calc(var(--u)*34)}
.hs-heat .hs-bar b{background:linear-gradient(90deg,#6ad8ff,#ffd070,#ff7a3a)}
.hs-root{background:#9fc6e8}
`;

const SCARF = ['#e0503a', '#3a8ae0', '#e0a83a', '#9a4ad0', '#3ab87a', '#e06aa8'];
const UP_KEY = { teahouse: 'teahouse', stack: 'stack1', stack2: 'stack2', speed: 'speed', mill2: 'mill2', seats: 'seats', seats2: 'seats2', helper: 'helper' };

const cache = {};
function rgb(hex) {
  if (!cache[hex]) { const n = parseInt(hex.slice(1), 16); cache[hex] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  return cache[hex];
}
function mix(a, b, k) {
  const A = rgb(a); const B = rgb(b);
  const f = Math.max(0, Math.min(1, k));
  return `rgb(${Math.round(A[0] + (B[0] - A[0]) * f)},${Math.round(A[1] + (B[1] - A[1]) * f)},${Math.round(A[2] + (B[2] - A[2]) * f)})`;
}
const fmtTime = (s) => `${'‎'}${num(Math.floor(s / 60))}:${num(String(Math.floor(s % 60)).padStart(2, '0'))}`;

// static decoration: pines around the valley, rocks and little drifts; made once from a fixed seed
function makeDecor() {
  let s = 12345;
  const r = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const pines = [];
  const W = SIZE.w;
  const H = SIZE.h;
  for (let i = 0; i < 130; i++) {
    const x = -10 + r() * (W + 20);
    const y = -3 + r() * (H + 14);
    const inside = x > 2.5 && x < W - 2.5 && y > 2 && y < H - 1;
    if (inside) continue;
    if (Math.abs(x - GATE.x) < 3 && y > H - 6) continue;
    pines.push({ x, y, s: 0.9 + r() * 0.7 });
  }
  const drifts = Array.from({ length: 36 }, () => ({ x: r() * W, y: r() * H, w: 1.6 + r() * 2.2 }));
  const rocks = Array.from({ length: 9 }, (_, i) => ({ x: [4.5, 51.5, 7, 49, 33, 39, 4, 52, 20][i], y: [10, 28, 36, 5, 33, 3.5, 22, 20, 5][i], s: 0.5 + r() * 0.5 }));
  const stones = Array.from({ length: 16 }, (_, i) => ({ a: (i / 16) * Math.PI * 2 + r() * 0.2, s: 0.55 + r() * 0.3 }));
  return { pines, drifts, rocks, stones };
}
const DECOR = makeDecor();
const PEAKS = [[-6, 9, 8], [2, 12, 10], [11, 8, 7], [19, 13, 11], [29, 9, 8], [37, 12, 10], [46, 9, 8], [55, 13, 11], [63, 8, 7]];

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('hs-style')) document.head.append(h('style', { id: 'hs-style' }, CSS));
    this.root = h('div', { class: 'hs-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'hs-layer' });
    this.root.append(this.layer);
    this.mode = 'menu';
    this.clock = 0;
    this.keys = new Set();
    this.joy = null;
    this.flakes = Array.from({ length: 60 }, () => ({ x: Math.random(), y: Math.random(), s: 0.5 + Math.random() }));
    this.steam = [];
    this.sparks = [];
    this.fx = [];
    this.c = null;
    this._demo();
    this.cam = { x: SPRING.x, y: SPRING.y };
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { if (!this.root.isConnected) return; this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' });
      await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _demo() {
    this.demo = new Village({ seed: 21 });
    this.demo.lit = 5;
    this.demo.thawed = 0;
    this.demo.teahouse = true;
    this.demo.up = UPGRADES.length;
    this.demo.me.x = 8; this.demo.me.y = 36;
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.pm = Math.min(this.cw, this.ch) / 21; // pixels per metre
    this.root.style.setProperty('--u', `${this.u}px`);
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      this.cv.setPointerCapture(e.pointerId);
      this.joy = { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY };
    });
    this.cv.addEventListener('pointermove', (e) => { if (this.joy && this.joy.id === e.pointerId) { this.joy.x = e.clientX; this.joy.y = e.clientY; } });
    const up = (e) => { if (this.joy && this.joy.id === e.pointerId) this.joy = null; };
    this.cv.addEventListener('pointerup', up);
    this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.type === 'keydown') this.keys.add(e.key.toLowerCase()); else this.keys.delete(e.key.toLowerCase()); };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let dx = 0;
    let dy = 0;
    if (this.joy) {
      const R = this.u * 9;
      dx = (this.joy.x - this.joy.x0) / R;
      dy = (this.joy.y - this.joy.y0) / R;
      const l = Math.hypot(dx, dy);
      if (l > 1) { dx /= l; dy /= l; }
    }
    const k = this.keys;
    if (k.has('arrowleft') || k.has('a')) dx -= 1;
    if (k.has('arrowright') || k.has('d')) dx += 1;
    if (k.has('arrowup') || k.has('w')) dy -= 1;
    if (k.has('arrowdown') || k.has('s')) dy += 1;
    return { dx, dy };
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }

  _soundPill() {
    const pill = h('button', { class: 'hs-soundpill', onclick: () => this.sound.unlock() }, t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3200) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms);
  }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.c = null;
    this._clear();
    this._demo();
    this.sound.setMode('menu');
    const best = this.save.bestTime ? `🏆 ${t('best')}: ${fmtTime(this.save.bestTime)}` : '';
    this.layer.append(h('div', { class: 'hs-dim' }, h('div', { class: 'hs-card' },
      h('div', { class: 'hs-logo' }, '♨️ ', t('title')),
      h('div', { class: 'hs-small' }, t('goal')),
      h('div', { class: 'hs-small' }, t('how')),
      best ? h('div', { class: 'hs-small' }, best) : null,
      h('button', { class: 'hs-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, t('play')),
      h('button', { class: 'hs-btn dark', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
    this._soundPill();
  }

  start() {
    this.c = new Village({ easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.fx = [];
    this.steam = [];
    this.sparks = [];
    this.cam = { x: this.c.me.x, y: this.c.me.y };
    this._clear();
    this.sound.setMode('play');
    this.coinEl = h('span', {}, '🪙 0');
    this.stackEl = h('span', {}, '');
    this.lampEl = h('span', {}, '🏮 0/10');
    this.heatBar = h('b', { style: 'width:60%' });
    const back = h('button', { class: 'hs-round', 'aria-label': t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'hs-round', 'aria-label': t('paused'), onclick: () => this.togglePause() }, '⏸');
    const sl = h('span', { class: 'hs-slice' });
    const top = h('div', { class: 'hs-top' }, back, h('div', { class: 'hs-pill' }, this.coinEl), h('div', { class: 'hs-pill' }, sl, this.stackEl), h('div', { class: 'hs-pill' }, this.lampEl), pause);
    const top2 = h('div', { class: 'hs-top hs-heat', style: 'top:calc(var(--u)*15.5)' }, h('span', {}, '❄️'), h('div', { class: 'hs-bar' }, this.heatBar), h('span', {}, '♨️'));
    this.hintEl = h('div', { class: 'hs-hint', style: 'top:calc(var(--u)*23)' });
    this.layer.append(top, top2, this.hintEl);
    this._soundPill();
    this.hint(t('mill'), 5000);
    this.said = {};
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'hs-dim' }, h('div', { class: 'hs-card' },
        h('div', { class: 'hs-title' }, t('paused')),
        h('button', { class: 'hs-btn', onclick: () => this.togglePause() }, t('resume')),
        h('button', { class: 'hs-btn dark', onclick: () => this.showMenu() }, t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _result() {
    const c = this.c;
    const secs = Math.round(c.time);
    this.save.bestTime = this.save.bestTime ? Math.min(this.save.bestTime, secs) : secs;
    this.save.finished += 1;
    this.save.guests += c.thawed;
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    this.layer.append(h('div', { class: 'hs-dim' }, h('div', { class: 'hs-card' },
      h('div', { class: 'hs-title' }, '🏮 ', t('done')),
      h('div', { class: 'hs-small' }, t('doneText')),
      h('div', { class: 'hs-pill' }, `😊 ${t('guests')}: ${num(c.thawed)}`),
      h('div', { class: 'hs-pill' }, `⏱️ ${t('time')}: ${fmtTime(secs)}`),
      h('div', { class: 'hs-small' }, t('win')),
      h('button', { class: 'hs-btn', onclick: () => { this._clear(); this.start(); } }, t('again')),
      h('button', { class: 'hs-btn dark', onclick: () => this.showMenu() }, t('menu')))));
  }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.clock += dt;
      if (this.mode === 'play' && !this.paused) this._update(dt);
      else if (this.mode === 'menu') { this.demo.heat = 0.85; this.demo.step(dt); this._particles(this.demo, dt); this._camTo(this.demo, dt, true); }
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _camTo(c, dt, menu) {
    const hw = this.cw / 2 / this.pm;
    const hh = this.ch / 2 / this.pm;
    let tx = menu ? SPRING.x + 2 : c.me.x;
    let ty = menu ? SPRING.y + 3 : c.me.y;
    const m = 2.5;
    if (SIZE.w + 2 * m <= hw * 2) tx = SIZE.w / 2; else tx = Math.max(hw - m, Math.min(SIZE.w - hw + m, tx));
    if (SIZE.h + 2 * m <= hh * 2) ty = SIZE.h / 2; else ty = Math.max(hh - m, Math.min(SIZE.h - hh + m, ty));
    const k = Math.min(1, dt * 5);
    this.cam.x += (tx - this.cam.x) * k;
    this.cam.y += (ty - this.cam.y) * k;
  }

  _target(c) {
    const u = c.nextUpgrade;
    if (u && c.coins >= u.cost) return { x: u.x, y: u.y };
    const me = c.me;
    if (me.stack >= Math.min(c.stackMax, 4) || (me.stack > 0 && c.heat < 0.5)) return { x: SPRING.x, y: SPRING.y + SPRING.r + 1 };
    if (c.piles.length) {
      let best = null; let bd = 1e9;
      for (const p of c.piles) { const d = Math.hypot(p.x - me.x, p.y - me.y); if (d < bd) { bd = d; best = p; } }
      if (bd < 14 && (me.stack >= 1 || c.heat > 0.5)) return best;
    }
    if (me.stack < c.stackMax) {
      let best = c.mills[0]; let bt = -9;
      for (const m of c.mills) { const sc = m.tray - Math.hypot(m.pad.x - me.x, m.pad.y - me.y) * 0.12; if (sc > bt) { bt = sc; best = m; } }
      return best.pad;
    }
    return { x: SPRING.x, y: SPRING.y + SPRING.r + 1 };
  }

  _update(dt) {
    const c = this.c;
    for (const e of c.step(dt, this._input())) {
      switch (e.type) {
        case 'cut': if (Math.hypot(e.x - c.me.x, e.y - c.me.y) < 14) this.sound.play('cut'); break;
        case 'pick': this.sound.play('pick'); break;
        case 'drop': this.sound.play('drop'); this.fx.push({ x: e.x, y: e.y - 1.2, text: '♨️', t: 0, life: 0.8 }); this._burst(SPRING.x, SPRING.y, 2); break;
        case 'splash': this.sound.play('splash'); break;
        case 'arrive': this.sound.play('arrive'); if (!this.said.guest) { this.said.guest = 1; this.hint(t('guestIn'), 3000); } break;
        case 'thaw': this.sound.play('thaw'); this.fx.push({ x: e.x, y: e.y - 1.8, text: '😊', t: 0, life: 1.2 }); this._burst(e.x, e.y, 6); break;
        case 'coin': this.sound.play('coin'); this.fx.push({ x: e.x, y: e.y - 1, text: `+${num(e.n)}`, t: 0, life: 1 }); break;
        case 'tea': this.sound.play('tea'); this.fx.push({ x: e.x, y: e.y - 1.6, text: '🍵', t: 0, life: 1 }); break;
        case 'buy': this.sound.play('buy'); this.hint(`${t('bought')}: ${t(UP_KEY[e.id])}`, 3200); this.fx.push({ x: e.x, y: e.y - 1.5, text: '✨', t: 0, life: 1.2 }); this._burst(e.x, e.y, 10); break;
        case 'lantern': this.sound.play('lantern'); this.hint(t('lantern'), 3200); this._burst(LANTERNS[e.i].x, LANTERNS[e.i].y, 8); break;
        case 'glow': this.sound.play('glow'); this.hint(t('glow'), 4000); break;
        case 'done': this._result(); break;
        default: break;
      }
    }
    this._particles(c, dt);
    const u = c.nextUpgrade;
    this.coinEl.textContent = `🪙 ${num(c.coins)}`;
    this.stackEl.textContent = `${num(c.me.stack)}/${num(c.stackMax)}`;
    this.lampEl.textContent = `🏮 ${num(c.lit)}/${num(LANTERN_AT.length)}`;
    this.heatBar.style.width = `${Math.round(c.heat * 100)}%`;
    if (c.heat < 0.28 && c.me.stack === 0 && !this.said.cool) { this.said.cool = 1; this.hint(t('cooling'), 3500); setTimeout(() => { this.said.cool = 0; }, 30000); }
    if (c.me.stack >= Math.min(c.stackMax, 4) && !this.said.spring && c.heat < 0.9) { this.said.spring = 1; this.hint(t('toSpring'), 3500); setTimeout(() => { this.said.spring = 0; }, 20000); }
    if (c.piles.length && c.piles[0].t > 4 && !this.said.coins && c.coinsTotal === 0) { this.said.coins = 1; this.hint(t('coins'), 3500); }
    if (u && c.coins >= u.cost && !this.said['pad' + c.up]) { this.said['pad' + c.up] = 1; this.hint(`${u.ico} ${t('pad')}`, 3500); }
    this._camTo(c, dt, false);
  }

  _burst(x, y, n) {
    for (let i = 0; i < n; i++) this.sparks.push({ x: x + (Math.random() - 0.5) * 1.5, y: y - 0.6, vx: (Math.random() - 0.5) * 3, vy: -1.5 - Math.random() * 2, t: 0, life: 0.7 + Math.random() * 0.5, c: ['#ffe08a', '#fff', '#ffb36a'][i % 3] });
  }

  _particles(c, dt) {
    // steam over the spring grows with its heat
    if (Math.random() < dt * (3 + c.heat * 26)) this.steam.push({ x: SPRING.x + (Math.random() - 0.5) * SPRING.r * 1.6, y: SPRING.y + (Math.random() - 0.5) * SPRING.r * 1.2, t: 0, life: 1.6 + Math.random() * 1.4, s: 0.5 + Math.random() * 0.7, vx: (Math.random() - 0.5) * 0.4 });
    if (this.steam.length > 90) this.steam.splice(0, 20);
    for (const s of this.steam) s.t += dt;
    this.steam = this.steam.filter((s) => s.t < s.life);
    for (const p of this.sparks) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 4 * dt; }
    this.sparks = this.sparks.filter((p) => p.t < p.life);
    if (c.state !== 'play' && Math.random() < dt * 14) this.sparks.push({ x: 4 + Math.random() * 48, y: 36, vx: (Math.random() - 0.5) * 0.6, vy: -2.2 - Math.random() * 1.5, t: 0, life: 3.4, c: '#ffcf70', lift: 1 });
    for (const p of this.sparks) if (p.lift) p.vy -= 3.9 * dt;
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _sx(x) { return this.cw / 2 + (x - this.cam.x) * this.pm; }
  _sy(y) { return this.ch / 2 + (y - this.cam.y) * this.pm; }

  _txt(text, x, y, size, fill = '#fff', stroke = 'rgba(60,30,10,.9)') {
    const g = this.g;
    g.font = `900 ${size}px Tajawal, system-ui, sans-serif`;
    g.textAlign = 'center';
    g.lineWidth = size * 0.2; g.strokeStyle = stroke; g.lineJoin = 'round';
    g.strokeText(text, x, y); g.fillStyle = fill; g.fillText(text, x, y);
  }

  _draw() {
    const g = this.g;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const c = this.mode === 'menu' || !this.c ? this.demo : this.c;
    const W = this.cw;
    const H = this.ch;
    const pm = this.pm;
    // sky
    const sky = g.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#8fb2dc'); sky.addColorStop(1, '#cfe4f6');
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    this._mountains(g);
    // snow ground, the outskirts a little bluer
    const gy0 = this._sy(0);
    g.fillStyle = '#e0ecf7';
    g.fillRect(0, Math.max(0, gy0 - pm * 0.5), W, H);
    g.fillStyle = '#f4f9fd';
    g.beginPath(); g.roundRect(this._sx(0), this._sy(0), SIZE.w * pm, SIZE.h * pm, pm * 1.5); g.fill();
    g.fillStyle = 'rgba(170,200,228,.4)';
    for (const d of DECOR.drifts) { g.beginPath(); g.ellipse(this._sx(d.x), this._sy(d.y), pm * d.w, pm * d.w * 0.34, 0, 0, 6.3); g.fill(); }
    this._paths(g);
    this._spring(g, c);
    this._pad(g, c);
    this._teahouseSpot(g, c);
    // things sorted by y so they overlap properly
    const things = [];
    for (const p of DECOR.pines) things.push({ y: p.y, f: () => this._pine(g, p.x, p.y, p.s) });
    for (const r of DECOR.rocks) things.push({ y: r.y, f: () => this._rock(g, r) });
    LANTERNS.forEach((l, i) => things.push({ y: l.y, f: () => this._lantern(g, l, i < c.lit, i) }));
    for (const m of c.mills) things.push({ y: m.y + 1.5, f: () => this._mill(g, m, c) });
    if (c.teahouse) things.push({ y: TEAHOUSE.y + 2, f: () => this._tea(g) });
    for (const p of c.piles) things.push({ y: p.y, f: () => this._coinPile(g, p) });
    for (const q of c.guests) things.push({ y: q.y, f: () => this._guest(g, q, c) });
    if (c.helper) things.push({ y: c.helper.y, f: () => this._fox(g, c.helper) });
    if (this.mode !== 'menu') things.push({ y: c.me.y + 0.01, f: () => this._person(g, c) });
    things.sort((a, b) => a.y - b.y);
    for (const th of things) th.f();
    this._steam(g);
    // arrow toward what to do next
    if (this.mode === 'play' && !this.paused && c.state === 'play') this._arrow(g, c);
    // floating text, sparks
    for (const f of this.fx) {
      const k = f.t / f.life;
      g.globalAlpha = 1 - k * k;
      this._txt(f.text, this._sx(f.x), this._sy(f.y) - k * pm * 2, this.u * 4.4);
    }
    g.globalAlpha = 1;
    for (const p of this.sparks) {
      g.globalAlpha = Math.max(0, 1 - p.t / p.life);
      g.fillStyle = p.c;
      g.beginPath(); g.arc(this._sx(p.x), this._sy(p.y), this.u * (p.lift ? 0.9 : 0.55), 0, 6.3); g.fill();
    }
    g.globalAlpha = 1;
    // the valley is dusky and cold until the lanterns are lit
    const lit = c.lit / LANTERN_AT.length;
    const dusk = 0.24 * (1 - lit) + 0.0;
    g.fillStyle = `rgba(38,58,130,${dusk})`;
    g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = 'source-over';
    LANTERNS.forEach((l, i) => {
      if (i >= c.lit) return;
      const x = this._sx(l.x); const y = this._sy(l.y - 1.4);
      if (x < -pm * 8 || x > W + pm * 8 || y < -pm * 8 || y > H + pm * 8) return;
      const r = pm * (5.5 + Math.sin(this.clock * 3 + i) * 0.3);
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,160,60,.30)'); gr.addColorStop(1, 'rgba(255,170,70,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill();
    });
    g.globalCompositeOperation = 'source-over';
    if (c.state !== 'play') { g.fillStyle = `rgba(255,214,120,${Math.min(0.28, (c.glowT || 0) * 0.1)})`; g.fillRect(0, 0, W, H); }
    // snow falling
    g.fillStyle = 'rgba(255,255,255,.75)';
    for (const f of this.flakes) {
      f.y = (f.y + (0.045 + f.s * 0.04) * 0.016) % 1;
      f.x = (f.x + 0.0003 * f.s + 1) % 1;
      g.beginPath(); g.arc(f.x * W, f.y * H, this.u * (0.25 + f.s * 0.25), 0, 6.3); g.fill();
    }
    if (this.joy && this.mode === 'play') {
      const r = this.cv.getBoundingClientRect();
      g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = this.u * 0.6;
      g.beginPath(); g.arc(this.joy.x0 - r.left, this.joy.y0 - r.top, this.u * 9, 0, 6.3); g.stroke();
      g.fillStyle = 'rgba(255,255,255,.5)';
      g.beginPath(); g.arc(this.joy.x - r.left, this.joy.y - r.top, this.u * 3.2, 0, 6.3); g.fill();
    }
  }

  _mountains(g) {
    const pm = this.pm;
    const base = this._sy(0) + pm * 0.3;
    if (base < -pm * 2) return;
    const par = 0.55;
    const ox = this.cw / 2 - this.cam.x * pm * par;
    for (let layer = 0; layer < 2; layer++) {
      const k = layer === 0 ? 1 : 0.7;
      g.fillStyle = layer === 0 ? '#9fb8da' : '#b6cde8';
      for (const [px, ph, pw] of PEAKS) {
        const x = (layer === 0 ? ox : this.cw / 2 - this.cam.x * pm * 0.4) + (px + (layer ? 4 : 0)) * pm * par * 1.4;
        const hh = ph * pm * k * 1.1;
        const w = pw * pm * 0.9;
        g.beginPath(); g.moveTo(x - w, base); g.lineTo(x, base - hh); g.lineTo(x + w, base); g.closePath(); g.fill();
        g.fillStyle = '#fff';
        g.beginPath(); g.moveTo(x - w * 0.38, base - hh * 0.62); g.lineTo(x, base - hh); g.lineTo(x + w * 0.38, base - hh * 0.62); g.lineTo(x + w * 0.14, base - hh * 0.7); g.lineTo(x, base - hh * 0.6); g.lineTo(x - w * 0.14, base - hh * 0.7); g.closePath(); g.fill();
        g.fillStyle = layer === 0 ? '#9fb8da' : '#b6cde8';
      }
    }
  }

  _paths(g) {
    const pm = this.pm;
    g.lineCap = 'round'; g.lineJoin = 'round';
    const line = (pts, w, col) => {
      g.strokeStyle = col; g.lineWidth = w * pm;
      g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(this._sx(x), this._sy(y)) : g.moveTo(this._sx(x), this._sy(y)))); g.stroke();
    };
    const sets = [
      [[GATE.x, GATE.y + 1], [GATE.x, 31], [26, 26], [23, 22]],
      [[23, 22], [18, 21.5], [14.5, 21]],
      [[24, 29], [19, 32], [17.5, 33.5]],
      [[34, 21], [38, 19], [41.5, 18]],
    ];
    for (const s of sets) line(s, 3.0, '#d9d3c4');
    for (const s of sets) line(s, 2.4, '#ece7da');
  }

  _spring(g, c) {
    const pm = this.pm;
    const x = this._sx(SPRING.x);
    const y = this._sy(SPRING.y);
    const R = SPRING.r * pm;
    if (x < -R * 2 || x > this.cw + R * 2 || y < -R * 2 || y > this.ch + R * 2) return;
    const k = c.heat;
    // warm glow on the snow around hot water
    const glow = g.createRadialGradient(x, y, R * 0.8, x, y, R * (1.5 + k * 0.7));
    glow.addColorStop(0, `rgba(255,190,120,${0.08 + k * 0.28})`); glow.addColorStop(1, 'rgba(255,190,120,0)');
    g.fillStyle = glow; g.beginPath(); g.arc(x, y, R * 2.4, 0, 6.3); g.fill();
    // stone rim
    g.fillStyle = '#7e8da0'; g.beginPath(); g.arc(x, y, R * 1.12, 0, 6.3); g.fill();
    for (const s of DECOR.stones) {
      const sx = x + Math.cos(s.a) * R * 1.02; const sy = y + Math.sin(s.a) * R * 1.02;
      g.fillStyle = '#a6b4c4'; g.beginPath(); g.ellipse(sx, sy, pm * s.s * 0.95, pm * s.s * 0.7, s.a, 0, 6.3); g.fill();
      g.fillStyle = '#fff'; g.beginPath(); g.ellipse(sx, sy - pm * 0.18, pm * s.s * 0.6, pm * s.s * 0.25, 0, 0, 6.3); g.fill();
    }
    // the water: grey-blue when cold, bright turquoise when hot
    const water = g.createRadialGradient(x, y - R * 0.2, R * 0.1, x, y, R);
    water.addColorStop(0, mix('#a9c4d8', '#9ff3e6', k)); water.addColorStop(1, mix('#6f93b4', '#2fb9cf', k));
    g.fillStyle = water; g.beginPath(); g.arc(x, y, R, 0, 6.3); g.fill();
    g.strokeStyle = `rgba(255,255,255,${0.3 + k * 0.3})`; g.lineWidth = pm * 0.12;
    for (let i = 0; i < 3; i++) {
      const ph = (this.clock * 0.35 + i / 3) % 1;
      g.globalAlpha = (1 - ph) * 0.8;
      g.beginPath(); g.ellipse(x, y, R * (0.25 + ph * 0.7), R * (0.25 + ph * 0.7) * 0.9, 0, 0, 6.3); g.stroke();
    }
    g.globalAlpha = 1;
    // ice floes on a cold spring melt away as it warms up
    if (k < 0.45) {
      g.fillStyle = `rgba(235,248,255,${(0.45 - k) * 1.6})`;
      for (let i = 0; i < 5; i++) { const a = i * 1.3 + 0.4; g.beginPath(); g.ellipse(x + Math.cos(a) * R * 0.55, y + Math.sin(a) * R * 0.5, pm * 0.7, pm * 0.38, a, 0, 6.3); g.fill(); }
    }
    // the heat ring around the water
    g.lineCap = 'round';
    g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = pm * 0.35;
    g.beginPath(); g.arc(x, y, R * 1.2, 0, 6.3); g.stroke();
    g.strokeStyle = mix('#7fd0ff', '#ff8a3a', k); g.lineWidth = pm * 0.3;
    g.beginPath(); g.arc(x, y, R * 1.2, -Math.PI / 2, -Math.PI / 2 + k * 6.283); g.stroke();
    // little sign with the spring symbol
    if (this.mode === 'play') this._txt('♨️', x, y + R * 1.55 + pm * 0.4, pm * 1.1, '#fff', 'rgba(30,60,90,.7)');
  }

  _pad(g, c) {
    const u = c.nextUpgrade;
    if (!u || c.state !== 'play') return;
    const pm = this.pm;
    const x = this._sx(u.x); const y = this._sy(u.y);
    const can = c.coins >= u.cost;
    const pulse = 0.5 + 0.5 * Math.sin(this.clock * 4);
    g.fillStyle = can ? `rgba(120,255,160,${0.28 + pulse * 0.2})` : `rgba(255,230,120,${0.2 + pulse * 0.12})`;
    g.beginPath(); g.arc(x, y, 2.3 * pm, 0, 6.3); g.fill();
    g.setLineDash([pm * 0.5, pm * 0.4]); g.strokeStyle = can ? '#3ad070' : '#ffd23a'; g.lineWidth = pm * 0.18;
    g.beginPath(); g.arc(x, y, 2.3 * pm, 0, 6.3); g.stroke(); g.setLineDash([]);
    this._txt(u.ico, x, y + pm * 0.5, pm * 1.8, '#fff', 'rgba(40,20,0,.6)');
    this._txt(t(UP_KEY[u.id]), x, y - pm * 2.7, pm * 0.9);
    this._txt(`🪙 ${num(u.cost)}`, x, y + pm * 2.15 + 0.4 * pm, pm * 1.0, can ? '#c8ffd8' : '#ffe9a0');
  }

  _teahouseSpot(g, c) {
    if (c.teahouse) return;
    const pm = this.pm;
    const x = this._sx(TEAHOUSE.x); const y = this._sy(TEAHOUSE.y);
    g.save(); g.globalAlpha = 0.28; this._teaBody(g, x, y, pm); g.restore();
  }

  _tea(g) {
    this._teaBody(g, this._sx(TEAHOUSE.x), this._sy(TEAHOUSE.y), this.pm);
    const x = this._sx(TEAHOUSE.x);
    const y = this._sy(TEAHOUSE.y);
    const pm = this.pm;
    // little tables with cups on the terrace
    for (const dx of [-3.2, 3.4]) {
      g.fillStyle = '#9a6a3a'; g.beginPath(); g.ellipse(x + dx * pm, y + pm * 4.2, pm * 0.9, pm * 0.4, 0, 0, 6.3); g.fill();
      g.fillStyle = '#fff'; g.beginPath(); g.arc(x + dx * pm, y + pm * 3.95, pm * 0.22, 0, 6.3); g.fill();
    }
  }

  _teaBody(g, x, y, pm) {
    g.fillStyle = '#f1e4cc'; g.strokeStyle = '#6a4222'; g.lineWidth = pm * 0.12;
    g.fillRect(x - pm * 3.4, y - pm * 1.4, pm * 6.8, pm * 3.6); g.strokeRect(x - pm * 3.4, y - pm * 1.4, pm * 6.8, pm * 3.6);
    g.fillStyle = '#7a4a26';
    for (const dx of [-3.4, -1.1, 1.1, 3.4]) g.fillRect(x + dx * pm - pm * 0.14, y - pm * 1.4, pm * 0.28, pm * 3.6);
    // the door curtain
    g.fillStyle = '#3a6ab0'; g.fillRect(x - pm * 1.0, y - pm * 0.4, pm * 2.0, pm * 1.1);
    g.fillStyle = '#fff'; g.fillRect(x - pm * 0.12, y - pm * 0.4, pm * 0.24, pm * 1.1);
    g.fillStyle = '#c8453a';
    g.beginPath(); g.moveTo(x - pm * 4.6, y - pm * 1.2); g.quadraticCurveTo(x - pm * 2.4, y - pm * 1.9, x - pm * 1.8, y - pm * 3.4); g.lineTo(x + pm * 1.8, y - pm * 3.4); g.quadraticCurveTo(x + pm * 2.4, y - pm * 1.9, x + pm * 4.6, y - pm * 1.2); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#fff';
    g.beginPath(); g.moveTo(x - pm * 1.8, y - pm * 3.4); g.lineTo(x + pm * 1.8, y - pm * 3.4); g.lineTo(x + pm * 2.6, y - pm * 2.4); g.quadraticCurveTo(x, y - pm * 2.9, x - pm * 2.6, y - pm * 2.4); g.closePath(); g.fill();
    // hanging paper lantern and a steaming cup sign
    g.fillStyle = '#ffb347'; g.beginPath(); g.ellipse(x + pm * 2.7, y + pm * 0.3, pm * 0.35, pm * 0.5, 0, 0, 6.3); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x - pm * 2.3, y - pm * 0.4, pm * 0.55, 0, 6.3); g.fill();
    g.fillStyle = '#7a4a26'; g.fillRect(x - pm * 2.55, y - pm * 0.4, pm * 0.5, pm * 0.35);
  }

  _pine(g, wx, wy, k) {
    const x = this._sx(wx); const y = this._sy(wy);
    if (x < -90 || y < -90 || x > this.cw + 90 || y > this.ch + 90) return;
    const s = this.pm * 2.6 * k;
    g.fillStyle = 'rgba(40,70,110,.16)'; g.beginPath(); g.ellipse(x, y + s * 0.05, s * 0.5, s * 0.15, 0, 0, 6.3); g.fill();
    g.fillStyle = '#6a4a2a'; g.fillRect(x - s * 0.04, y - s * 0.2, s * 0.08, s * 0.25);
    const cols = ['#2f7a5a', '#3a8a62', '#46a06c'];
    for (let i = 0; i < 3; i++) {
      const w = s * (0.45 - i * 0.1); const yy = y - s * 0.15 - i * s * 0.3;
      g.fillStyle = cols[i];
      g.beginPath(); g.moveTo(x - w, yy); g.lineTo(x, yy - s * 0.45); g.lineTo(x + w, yy); g.closePath(); g.fill();
      g.fillStyle = '#fff';
      g.beginPath(); g.moveTo(x - w * 0.55, yy - s * 0.2); g.lineTo(x, yy - s * 0.45); g.lineTo(x + w * 0.55, yy - s * 0.2); g.quadraticCurveTo(x, yy - s * 0.1, x - w * 0.55, yy - s * 0.2); g.fill();
    }
  }

  _rock(g, r) {
    const x = this._sx(r.x); const y = this._sy(r.y); const s = this.pm * r.s * 1.6;
    if (x < -60 || y < -60 || x > this.cw + 60 || y > this.ch + 60) return;
    g.fillStyle = '#8a98aa'; g.beginPath(); g.ellipse(x, y - s * 0.2, s * 0.6, s * 0.4, 0, 0, 6.3); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.ellipse(x, y - s * 0.4, s * 0.45, s * 0.2, 0, 0, 6.3); g.fill();
  }

  _lantern(g, l, lit, i) {
    const x = this._sx(l.x); const y = this._sy(l.y);
    const pm = this.pm;
    if (x < -60 || y < -100 || x > this.cw + 60 || y > this.ch + 100) return;
    g.fillStyle = 'rgba(40,70,110,.16)'; g.beginPath(); g.ellipse(x, y, pm * 0.5, pm * 0.16, 0, 0, 6.3); g.fill();
    g.fillStyle = '#6a4222'; g.fillRect(x - pm * 0.08, y - pm * 2.2, pm * 0.16, pm * 2.2);
    g.fillRect(x - pm * 0.5, y - pm * 2.2, pm * 0.9, pm * 0.12);
    const sway = Math.sin(this.clock * 1.6 + i) * pm * 0.06;
    const lx = x + pm * 0.35 + sway; const ly = y - pm * 1.7;
    g.strokeStyle = '#4a2a10'; g.lineWidth = pm * 0.05;
    g.beginPath(); g.moveTo(x + pm * 0.35, y - pm * 2.14); g.lineTo(lx, ly - pm * 0.36); g.stroke();
    g.fillStyle = lit ? '#ffc25a' : '#b9a98e'; g.strokeStyle = lit ? '#a8541a' : '#6a5a46'; g.lineWidth = pm * 0.07;
    g.beginPath(); g.ellipse(lx, ly, pm * 0.36, pm * 0.5, 0, 0, 6.3); g.fill(); g.stroke();
    if (lit) { g.fillStyle = '#fff2b0'; g.beginPath(); g.ellipse(lx, ly, pm * 0.17, pm * 0.28, 0, 0, 6.3); g.fill(); }
    g.fillStyle = '#4a2a10'; g.fillRect(lx - pm * 0.2, ly - pm * 0.56, pm * 0.4, pm * 0.1); g.fillRect(lx - pm * 0.2, ly + pm * 0.46, pm * 0.4, pm * 0.1);
    if (!lit) { g.fillStyle = '#fff'; g.beginPath(); g.ellipse(lx, ly - pm * 0.52, pm * 0.24, pm * 0.1, 0, 0, 6.3); g.fill(); }
  }

  _mill(g, m, c) {
    const pm = this.pm;
    const x = this._sx(m.x); const y = this._sy(m.y);
    if (x < -pm * 8 || y < -pm * 8 || x > this.cw + pm * 8 || y > this.ch + pm * 8) return;
    // shed
    g.fillStyle = 'rgba(40,70,110,.18)'; g.beginPath(); g.ellipse(x, y + pm * 1.9, pm * 3.2, pm * 0.7, 0, 0, 6.3); g.fill();
    g.fillStyle = '#b98650'; g.strokeStyle = '#6a4222'; g.lineWidth = pm * 0.12;
    g.fillRect(x - pm * 2.4, y - pm * 1.2, pm * 4.8, pm * 3.1); g.strokeRect(x - pm * 2.4, y - pm * 1.2, pm * 4.8, pm * 3.1);
    for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(x - pm * 2.4, y - pm * 1.2 + i * pm * 0.78); g.lineTo(x + pm * 2.4, y - pm * 1.2 + i * pm * 0.78); g.stroke(); }
    g.fillStyle = '#4a6a9a';
    g.beginPath(); g.moveTo(x - pm * 3.0, y - pm * 1.1); g.lineTo(x - pm * 1.6, y - pm * 2.8); g.lineTo(x + pm * 1.6, y - pm * 2.8); g.lineTo(x + pm * 3.0, y - pm * 1.1); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x - pm * 1.6, y - pm * 2.8); g.lineTo(x + pm * 1.6, y - pm * 2.8); g.lineTo(x + pm * 2.2, y - pm * 2.1); g.quadraticCurveTo(x, y - pm * 2.4, x - pm * 2.2, y - pm * 2.1); g.fill();
    // the circular blade, spinning faster while the caretaker helps
    const spin = this.clock * (m.work ? 14 : 4) + m.x;
    const bx = x; const by = y + pm * 0.4;
    g.fillStyle = '#dfe5ec'; g.strokeStyle = '#7a8694'; g.lineWidth = pm * 0.1;
    g.beginPath(); g.arc(bx, by, pm * 0.95, 0, 6.3); g.fill(); g.stroke();
    g.strokeStyle = '#98a4b2';
    for (let i = 0; i < 8; i++) { const a = spin + (i * Math.PI) / 4; g.beginPath(); g.moveTo(bx, by); g.lineTo(bx + Math.cos(a) * pm * 0.95, by + Math.sin(a) * pm * 0.95); g.stroke(); }
    g.fillStyle = '#7a8694'; g.beginPath(); g.arc(bx, by, pm * 0.18, 0, 6.3); g.fill();
    // the ginger basket
    const gx = x - pm * 3.4; const gy = y + pm * 1.2;
    g.fillStyle = '#c8a05a'; g.beginPath(); g.ellipse(gx, gy + pm * 0.4, pm * 0.9, pm * 0.5, 0, 0, 6.3); g.fill();
    g.fillStyle = '#e8c07a';
    for (let i = 0; i < 5; i++) { g.beginPath(); g.ellipse(gx + (i - 2) * pm * 0.28, gy + Math.sin(i * 2) * pm * 0.12, pm * 0.28, pm * 0.17, i, 0, 6.3); g.fill(); }
    g.strokeStyle = '#a07a3a'; g.lineWidth = pm * 0.06;
    for (let i = 0; i < 5; i++) { g.beginPath(); g.ellipse(gx + (i - 2) * pm * 0.28, gy + Math.sin(i * 2) * pm * 0.12, pm * 0.28, pm * 0.17, i, 0, 6.3); g.stroke(); }
    // the tray where the slices wait, with the pick-up spot around it
    const tx = this._sx(m.pad.x); const ty = this._sy(m.pad.y);
    const near = c.me && c.me.near === m;
    g.setLineDash([pm * 0.4, pm * 0.35]); g.strokeStyle = near ? '#3ad070' : 'rgba(255,200,90,.9)'; g.lineWidth = pm * 0.14;
    g.beginPath(); g.arc(tx, ty, 2.2 * pm, 0, 6.3); g.stroke(); g.setLineDash([]);
    g.fillStyle = '#9a6a3a'; g.strokeStyle = '#5a3a18'; g.lineWidth = pm * 0.1;
    g.beginPath(); g.roundRect(tx - pm * 1.5, ty - pm * 0.75, pm * 3.0, pm * 1.5, pm * 0.25); g.fill(); g.stroke();
    for (let i = 0; i < m.tray; i++) {
      const col = i % 4; const row = Math.floor(i / 4);
      this._slice(g, tx - pm * 1.0 + col * pm * 0.66, ty - pm * 0.28 + row * pm * 0.5, pm * 0.3);
    }
    if (m.tray >= TRAY_MAX) this._txt('✓', tx, ty - pm * 1.2, pm * 0.9, '#fff', 'rgba(20,90,40,.9)');
  }

  _slice(g, x, y, r) {
    g.fillStyle = '#f4d27a'; g.strokeStyle = '#c4862a'; g.lineWidth = r * 0.28;
    g.beginPath(); g.ellipse(x, y, r * 1.1, r * 0.82, 0, 0, 6.3); g.fill(); g.stroke();
    g.fillStyle = '#fff0b8'; g.beginPath(); g.ellipse(x - r * 0.2, y - r * 0.1, r * 0.4, r * 0.28, 0, 0, 6.3); g.fill();
  }

  _coinPile(g, p) {
    const x = this._sx(p.x); const y = this._sy(p.y);
    const pm = this.pm;
    if (x < -40 || y < -40 || x > this.cw + 40 || y > this.ch + 40) return;
    const bob = Math.sin(this.clock * 4 + p.x) * pm * 0.08;
    const n = Math.min(4, 1 + Math.floor(p.n / 3));
    g.fillStyle = 'rgba(40,70,110,.2)'; g.beginPath(); g.ellipse(x, y + pm * 0.1, pm * 0.55, pm * 0.2, 0, 0, 6.3); g.fill();
    for (let i = 0; i < n; i++) {
      const cx = x + (i % 2 ? pm * 0.22 : -pm * 0.18); const cy = y - i * pm * 0.2 + bob;
      g.fillStyle = '#ffd23a'; g.strokeStyle = '#b8820a'; g.lineWidth = pm * 0.06;
      g.beginPath(); g.ellipse(cx, cy, pm * 0.42, pm * 0.24, 0, 0, 6.3); g.fill(); g.stroke();
      g.fillStyle = '#fff3a8'; g.beginPath(); g.ellipse(cx - pm * 0.08, cy - pm * 0.03, pm * 0.17, pm * 0.08, 0, 0, 6.3); g.fill();
    }
    const tw = 0.5 + 0.5 * Math.sin(this.clock * 6 + p.y);
    g.fillStyle = `rgba(255,255,255,${tw})`; g.beginPath(); g.arc(x + pm * 0.35, y - pm * 0.7 + bob, pm * 0.07, 0, 6.3); g.fill();
  }

  _steam(g) {
    const pm = this.pm;
    for (const s of this.steam) {
      const k = s.t / s.life;
      const x = this._sx(s.x + s.vx * s.t * 2);
      const y = this._sy(s.y) - k * pm * 4.2;
      g.fillStyle = `rgba(255,255,255,${(1 - k) * 0.32})`;
      g.beginPath(); g.arc(x, y, pm * s.s * (0.5 + k * 0.9), 0, 6.3); g.fill();
    }
  }

  _arrow(g, c) {
    const tg = this._target(c);
    const me = c.me;
    const d = Math.hypot(tg.x - me.x, tg.y - me.y);
    if (d < 5) return;
    const a = Math.atan2(tg.y - me.y, tg.x - me.x);
    const pm = this.pm;
    const x = this._sx(me.x) + Math.cos(a) * pm * 3.1;
    const y = this._sy(me.y) - pm * 0.9 + Math.sin(a) * pm * 3.1 + Math.sin(this.clock * 6) * pm * 0.1;
    g.save(); g.translate(x, y); g.rotate(a);
    g.fillStyle = 'rgba(255,255,255,.9)'; g.strokeStyle = 'rgba(40,70,120,.85)'; g.lineWidth = pm * 0.1;
    g.beginPath(); g.moveTo(pm * 0.55, 0); g.lineTo(-pm * 0.3, -pm * 0.42); g.lineTo(-pm * 0.1, 0); g.lineTo(-pm * 0.3, pm * 0.42); g.closePath(); g.fill(); g.stroke();
    g.restore();
  }

  // ---- characters ---------------------------------------------------------------------------------------------------

  _person(g, c) {
    const p = c.me;
    const x = this._sx(p.x); const y = this._sy(p.y);
    const s = this.pm;
    const moving = p.vx || p.vy;
    const bob = Math.abs(Math.sin(this.clock * 10)) * (moving ? s * 0.1 : 0);
    g.save(); g.translate(x, y - bob); g.scale(p.face || 1, 1);
    g.fillStyle = 'rgba(40,70,110,.22)'; g.beginPath(); g.ellipse(0, bob, s * 0.55, s * 0.18, 0, 0, 6.3); g.fill();
    // the stack of ginger slices on the back
    const step = Math.min(0.16, 1.5 / c.stackMax);
    for (let i = 0; i < p.stack; i++) {
      const sy = -s * 0.5 - i * s * step;
      g.fillStyle = i % 2 ? '#f0cc6a' : '#f6da86'; g.strokeStyle = '#c4862a'; g.lineWidth = s * 0.05;
      g.beginPath(); g.ellipse(-s * 0.66, sy, s * 0.36, s * 0.13, 0, 0, 6.3); g.fill(); g.stroke();
    }
    if (p.stack > 0) { g.strokeStyle = '#8a5a2a'; g.lineWidth = s * 0.06; g.beginPath(); g.moveTo(-s * 0.4, -s * 0.9); g.lineTo(-s * 0.55, -s * 0.5); g.moveTo(-s * 0.4, -s * 0.5); g.lineTo(-s * 0.2, -s * 0.4); g.stroke(); }
    g.fillStyle = '#2a4a6a'; g.fillRect(-s * 0.3, -s * 0.3, s * 0.22, s * 0.35); g.fillRect(s * 0.08, -s * 0.3, s * 0.22, s * 0.35);
    g.fillStyle = '#e9a23a'; g.beginPath(); g.roundRect(-s * 0.45, -s * 1.0, s * 0.9, s * 0.8, s * 0.2); g.fill();
    g.fillStyle = '#fff'; g.fillRect(-s * 0.45, -s * 0.62, s * 0.9, s * 0.08);
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(0, -s * 1.3, s * 0.38, 0, 6.3); g.fill();
    g.fillStyle = '#2a1a0a'; g.beginPath(); g.arc(s * 0.12, -s * 1.3, s * 0.05, 0, 6.3); g.fill();
    g.fillStyle = 'rgba(255,120,120,.5)'; g.beginPath(); g.arc(s * 0.24, -s * 1.2, s * 0.08, 0, 6.3); g.fill();
    // knitted hat with a pompom
    g.fillStyle = '#3a9a8a'; g.beginPath(); g.arc(0, -s * 1.5, s * 0.42, Math.PI, 0); g.fill();
    g.fillStyle = '#fff'; g.fillRect(-s * 0.42, -s * 1.52, s * 0.84, s * 0.13);
    g.beginPath(); g.arc(0, -s * 1.96, s * 0.11, 0, 6.3); g.fill();
    g.restore();
  }

  _fox(g, hp) {
    const x = this._sx(hp.x); const y = this._sy(hp.y);
    const s = this.pm * 0.9;
    g.save(); g.translate(x, y); g.scale(hp.face || 1, 1);
    g.fillStyle = 'rgba(40,70,110,.2)'; g.beginPath(); g.ellipse(0, 0, s * 0.55, s * 0.17, 0, 0, 6.3); g.fill();
    g.fillStyle = '#e8863a';
    g.beginPath(); g.ellipse(-s * 0.55, -s * 0.5, s * 0.5, s * 0.2, -0.5, 0, 6.3); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.ellipse(-s * 0.9, -s * 0.72, s * 0.17, s * 0.12, -0.5, 0, 6.3); g.fill();
    g.fillStyle = '#e8863a'; g.beginPath(); g.ellipse(0, -s * 0.45, s * 0.42, s * 0.3, 0, 0, 6.3); g.fill();
    g.beginPath(); g.arc(s * 0.35, -s * 0.8, s * 0.3, 0, 6.3); g.fill();
    g.beginPath(); g.moveTo(s * 0.18, -s * 1.0); g.lineTo(s * 0.2, -s * 1.38); g.lineTo(s * 0.4, -s * 1.05); g.fill();
    g.beginPath(); g.moveTo(s * 0.4, -s * 1.05); g.lineTo(s * 0.55, -s * 1.38); g.lineTo(s * 0.6, -s * 0.95); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.ellipse(s * 0.5, -s * 0.72, s * 0.17, s * 0.12, 0, 0, 6.3); g.fill();
    g.fillStyle = '#2a1a0a'; g.beginPath(); g.arc(s * 0.42, -s * 0.85, s * 0.04, 0, 6.3); g.fill(); g.beginPath(); g.arc(s * 0.62, -s * 0.74, s * 0.05, 0, 6.3); g.fill();
    for (let i = 0; i < hp.bag; i++) { g.fillStyle = '#f4d27a'; g.strokeStyle = '#c4862a'; g.lineWidth = s * 0.05; g.beginPath(); g.ellipse(-s * 0.05, -s * 0.78 - i * s * 0.1, s * 0.28, s * 0.1, 0, 0, 6.3); g.fill(); g.stroke(); }
    g.restore();
  }

  _guest(g, q, c) {
    const pm = this.pm;
    const x = this._sx(q.x); const y = this._sy(q.y);
    if (x < -pm * 3 || y < -pm * 4 || x > this.cw + pm * 3 || y > this.ch + pm * 4) return;
    const s = pm * 0.95;
    const soak = q.state === 'soak';
    const walking = q.state === 'in' || q.state === 'toSeat' || q.state === 'toTea' || q.state === 'leave';
    const fr = q.frost;
    const shiver = !walking && !soak && fr > 0.2 ? Math.sin(this.clock * 34 + q.id) * s * 0.035 * fr : 0;
    const bob = walking ? Math.abs(Math.sin(this.clock * 9 + q.id)) * s * 0.09 : 0;
    g.save(); g.translate(x + shiver, y - bob); g.scale(q.face || 1, 1);
    if (!soak) { g.fillStyle = 'rgba(40,70,110,.2)'; g.beginPath(); g.ellipse(0, bob, s * 0.5, s * 0.16, 0, 0, 6.3); g.fill(); }
    if (soak) { g.save(); g.beginPath(); g.rect(-s, -s * 3, s * 2, s * 2.4); g.clip(); }
    const ice = '#bfe6ff';
    const cold = (col) => mix(col, ice, fr * 0.7);
    const happy = fr < 0.35;
    const coat = SCARF[q.hue % SCARF.length];
    if (q.kind === 'monkey') {
      g.strokeStyle = cold('#8a5a3a'); g.lineWidth = s * 0.14; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-s * 0.3, -s * 0.4); g.quadraticCurveTo(-s * 0.95, -s * 0.5, -s * 0.8, -s * 1.1); g.stroke();
      g.fillStyle = cold('#8a5a3a'); g.beginPath(); g.ellipse(0, -s * 0.6, s * 0.4, s * 0.45, 0, 0, 6.3); g.fill();
      g.beginPath(); g.arc(-s * 0.36, -s * 1.3, s * 0.18, 0, 6.3); g.arc(s * 0.36, -s * 1.3, s * 0.18, 0, 6.3); g.fill();
      g.beginPath(); g.arc(0, -s * 1.22, s * 0.38, 0, 6.3); g.fill();
      g.fillStyle = cold('#f0c8a8'); g.beginPath(); g.ellipse(0, -s * 1.12, s * 0.26, s * 0.22, 0, 0, 6.3); g.fill();
      g.fillStyle = '#e8908a'; g.beginPath(); g.arc(-s * 0.36, -s * 1.3, s * 0.09, 0, 6.3); g.arc(s * 0.36, -s * 1.3, s * 0.09, 0, 6.3); g.fill();
    } else if (q.kind === 'bear') {
      g.fillStyle = cold('#c8935a'); g.beginPath(); g.ellipse(0, -s * 0.6, s * 0.45, s * 0.46, 0, 0, 6.3); g.fill();
      g.beginPath(); g.arc(-s * 0.32, -s * 1.5, s * 0.15, 0, 6.3); g.arc(s * 0.32, -s * 1.5, s * 0.15, 0, 6.3); g.fill();
      g.beginPath(); g.arc(0, -s * 1.25, s * 0.4, 0, 6.3); g.fill();
      g.fillStyle = cold('#f0d8b0'); g.beginPath(); g.ellipse(0, -s * 1.1, s * 0.2, s * 0.15, 0, 0, 6.3); g.fill();
      g.fillStyle = '#3a2210'; g.beginPath(); g.ellipse(0, -s * 1.17, s * 0.07, s * 0.045, 0, 0, 6.3); g.fill();
    } else {
      g.fillStyle = cold('#2a4a6a'); g.fillRect(-s * 0.28, -s * 0.3, s * 0.2, s * 0.32); g.fillRect(s * 0.08, -s * 0.3, s * 0.2, s * 0.32);
      g.fillStyle = cold(coat); g.beginPath(); g.roundRect(-s * 0.42, -s * 1.0, s * 0.84, s * 0.78, s * 0.2); g.fill();
      g.fillStyle = cold('#f2c9a0'); g.beginPath(); g.arc(0, -s * 1.3, s * 0.36, 0, 6.3); g.fill();
      g.fillStyle = cold('#4a2f1a'); g.beginPath(); g.arc(0, -s * 1.4, s * 0.38, Math.PI, 0); g.fill();
      if (q.id % 2) { g.beginPath(); g.arc(0, -s * 1.8, s * 0.14, 0, 6.3); g.fill(); }
      g.fillStyle = cold('#fff'); g.fillRect(-s * 0.4, -s * 1.02, s * 0.8, s * 0.13);
    }
    // eyes and mouth: shut and sleepy when frozen, smiling and rosy when warm
    const ey = q.kind === 'person' ? -s * 1.3 : q.kind === 'monkey' ? -s * 1.25 : -s * 1.28;
    g.strokeStyle = '#2a1a0a'; g.fillStyle = '#2a1a0a'; g.lineWidth = s * 0.05; g.lineCap = 'round';
    if (soak || fr > 0.6) { g.beginPath(); g.arc(s * 0.13, ey, s * 0.06, 0.1, Math.PI - 0.1); g.stroke(); g.beginPath(); g.arc(-s * 0.13, ey, s * 0.06, 0.1, Math.PI - 0.1); g.stroke(); } else { g.beginPath(); g.arc(s * 0.13, ey, s * 0.05, 0, 6.3); g.arc(-s * 0.13, ey, s * 0.05, 0, 6.3); g.fill(); }
    g.beginPath(); g.arc(0, ey + s * 0.16, s * 0.08, 0.2, Math.PI - 0.2, !happy); g.stroke();
    if (happy) { g.fillStyle = 'rgba(255,110,120,.55)'; g.beginPath(); g.arc(s * 0.24, ey + s * 0.1, s * 0.07, 0, 6.3); g.arc(-s * 0.24, ey + s * 0.1, s * 0.07, 0, 6.3); g.fill(); }
    if (soak && q.kind === 'person') { g.fillStyle = '#fff'; g.beginPath(); g.roundRect(-s * 0.3, -s * 1.78, s * 0.6, s * 0.2, s * 0.08); g.fill(); }
    // frost: snow cap and ice crystals
    if (fr > 0.25) {
      g.fillStyle = `rgba(255,255,255,${Math.min(1, fr * 1.3)})`;
      g.beginPath(); g.ellipse(0, -s * 1.62, s * 0.34, s * 0.12, 0, 0, 6.3); g.fill();
      g.fillStyle = `rgba(190,235,255,${Math.min(0.95, fr * 1.2)})`; g.strokeStyle = '#7ab8e0'; g.lineWidth = s * 0.03;
      for (const [dx, dy, sz] of [[-0.45, -1.1, 0.16], [0.45, -0.8, 0.14], [0.3, -1.65, 0.12], [-0.3, -0.6, 0.12]]) {
        g.beginPath(); g.moveTo(s * dx, s * (dy - sz)); g.lineTo(s * (dx + sz * 0.7), s * dy); g.lineTo(s * dx, s * (dy + sz)); g.lineTo(s * (dx - sz * 0.7), s * dy); g.closePath(); g.fill(); g.stroke();
      }
    }
    if (q.state === 'tea') { g.fillStyle = '#fff'; g.strokeStyle = '#6a4222'; g.lineWidth = s * 0.05; g.beginPath(); g.arc(s * 0.4, -s * 0.55, s * 0.14, 0, Math.PI); g.fill(); g.stroke(); }
    if (soak) {
      g.restore();
      // the water line over the body, with soft ripples
      const wc = mix('#7fa8c8', '#35bdd0', c.heat);
      g.fillStyle = wc; g.globalAlpha = 0.92;
      g.beginPath(); g.ellipse(0, -s * 0.58, s * 0.72, s * 0.22, 0, 0, 6.3); g.fill(); g.globalAlpha = 1;
      g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = s * 0.04;
      g.beginPath(); g.ellipse(0, -s * 0.58, s * (0.72 + 0.1 * Math.sin(this.clock * 3 + q.id)), s * 0.22, 0, 0, 6.3); g.stroke();
    }
    g.restore();
    if (q.state === 'wait' && fr > 0.5) this._txt('❄️', x, y - pm * 2.4 + Math.sin(this.clock * 3 + q.id) * pm * 0.1, pm * 0.7, '#fff', 'rgba(40,90,150,.8)');
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    cancelAnimationFrame(this.raf);
    clearTimeout(this._ht);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    this.root.remove();
  }
}

void MILL_SPOTS;
void UPGRADES;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.HotSpring = api;
export default api;
