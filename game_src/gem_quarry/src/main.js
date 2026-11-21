// «محجر الجواهر» — Gemlode Quarry. Entry: window.GemQuarry.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// An idle logistics game: diggers fill a pile of purple-gem crates, you tap the pile to load the waiting truck, trucks drive the
// winding road to the depot and pay coins, coins buy upgrade pads. A full pile only pauses the diggers (red "!"), nothing is lost.
// 2.5D isometric canvas, all art and sound made in code. Rules live in sim.js.
import { Quarry, LEVELS, KINDS, MAXLV, normalizeSave, recordWin } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['محجر الجواهر', 'Gemlode Quarry'], play: ['يلا نبدأ', 'Play'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'],
  banner: ['فاض المحجر! تلحق؟', 'Quarry overflow! Can you keep up?'],
  how: ['دوس على الصناديق عشان تحمّلها على الشاحنة، والشاحنات توصّلها للمخزن وتجيب فلوس. اشتري التطويرات!', 'Tap the crates to load the truck. Trucks haul them to the depot for coins. Buy upgrades!'],
  levels: ['اختار مرحلة', 'Choose a level'], level: ['مرحلة', 'Level'], resume: ['كمّل', 'Resume'], restart: ['من الأول', 'Restart'], map: ['المراحل', 'Levels'],
  paused: ['استراحة', 'Paused'], won: ['شطوووووور!', 'Well done!'], won_f: ['شطووووورة!', 'Well done!'], next: ['المرحلة الجاية', 'Next level'], again: ['العب تاني', 'Play again'],
  shipped: ['صناديق اتشحنت', 'Crates shipped'], overflow: ['وقت الازدحام', 'Overflow time'], sec: ['ث', 's'],
  warn: ['المخزن مليان!', 'Pile is full!'], tapHint: ['دوس على الصناديق عشان تحمّلها', 'Tap the crates to load the truck'],
  goal: ['شحن', 'Ship'], max: ['أقصى', 'MAX'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], wait: ['استنى الشاحنة', 'Truck is on its way'],
  diggers: ['عمال حفر', 'Diggers'], trucks: ['شاحنة', 'Truck'], pile: ['مخزن أكبر', 'Bigger pile'], truckCap: ['حمولة أكبر', 'Bigger load'],
  road: ['طريق أسرع', 'Faster road'], loader: ['عامل تحميل', 'Loader'], polish: ['ورشة تلميع', 'Polish shop'], mine2: ['منجم ثاني', 'Second mine'],
};
const I = makeI18n(S);
const ICON = { diggers: '⛏️', trucks: '🚚', pile: '📦', truckCap: '🧰', road: '🛣️', loader: '🧑‍🏭', polish: '✨', mine2: '⛰️' };

// ---- world geometry (units; screen X = x - y, Y = (x + y) * B - z * C) -------------------------------------------------------
const B = 0.62; const C = 0.95;
const NODES = [[10, 10], [5, 10], [5, 5], [0, 5], [0, 0]];       // pad -> depot gate, 5 units per leg
const SEG = 5; const ROUTE_LEN = SEG * 4;
const PAD = NODES[0]; const GATE = NODES[4];
const BBOX = { x0: -15.5, x1: 11, y0: -12.5, y1: 19.5 };
const PILE_AT = [8.6, 12.4];
const DIG_POS = [[7.3, 13.6], [8.8, 15.0], [6.0, 12.6], [9.7, 16.2], [5.6, 14.8], [7.2, 16.6], [8.4, 17.6], [10.4, 14.6]];
const CRYSTALS = [[6.4, 15.8, 3.6, 1.0], [7.8, 17.4, 2.8, 0.8], [5.2, 17.0, 2.4, 0.7], [9.0, 18.4, 2.2, 0.7], [4.6, 14.0, 2.0, 0.6], [7.0, 14.4, 1.4, 0.5], [10.0, 17.2, 1.5, 0.5]];
const CRYSTALS2 = [[2.2, 12.2, 3.0, 0.9], [3.4, 13.4, 2.2, 0.7], [1.2, 13.6, 1.8, 0.6], [3.0, 11.0, 1.6, 0.55]];
const SHIRTS = ['#e8564a', '#3a8ae8', '#3ac88a', '#e89a3a', '#c05ae8', '#58c8e8', '#e8d23a', '#f06aa0'];

function routePos(d) {
  d = Math.max(0, Math.min(ROUTE_LEN, d));
  const i = Math.min(3, Math.floor(d / SEG));
  const f = d - i * SEG; const a = NODES[i]; const b = NODES[i + 1];
  const ax = a[0] === b[0] ? 'y' : 'x';
  const sign = Math.sign(b[0] - a[0] + b[1] - a[1]);
  return { x: a[0] + (b[0] - a[0]) * f / SEG, y: a[1] + (b[1] - a[1]) * f / SEG, ax, sign };
}
const slotPos = (k) => ({ x: PAD[0] + 1.7 * k, y: PAD[1], ax: 'x', sign: -1 });

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.easy = Number(config.age) > 0 && Number(config.age) <= 4;
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('gq-style')) document.head.append(h('style', { id: 'gq-style' }, css('gq', '#9a4be0', '#5a1fa8', '#ffe27a') + STYLE));
    this.root = h('div', { class: 'gq-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'gq-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.vis = new Map(); this.digSnd = 0; this.warnT = 0; this.hintT = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this.land = this.cw > this.ch * 1.15;
    this.root.classList.toggle('land', this.land);
    this.bg = null; this.needLayout = true;
  }

  _layout() {
    // the scene fits in the area not covered by the HUD and the pad panel
    const rr = this.root.getBoundingClientRect();
    let top = 0; let bottom = this.ch; let right = this.cw;
    if (this.hud) { const t = this.hud.getBoundingClientRect(); top = Math.max(0, t.bottom - rr.top); }
    if (this.panel) { const p = this.panel.getBoundingClientRect(); if (this.land) right = p.left - rr.left; else bottom = p.top - rr.top; }
    const aw = Math.max(50, right); const ah = Math.max(50, bottom - top);
    const bw = BBOX.x1 - BBOX.x0; const bh = BBOX.y1 - BBOX.y0;
    this.s = Math.min(aw / bw, ah / bh);
    this.ox = (aw - bw * this.s) / 2 - BBOX.x0 * this.s;
    this.oy = top + (ah - bh * this.s) / 2 - BBOX.y0 * this.s;
    this.needLayout = false; this.bg = null;
  }

  P(x, y, z = 0) { return [this.ox + (x - y) * this.s, this.oy + ((x + y) * B - z * C) * this.s]; }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', () => this._tap());
    this._onKey = (e) => { if (e.code === 'Space' || e.key === 'Enter') { if (this.mode === 'play') { e.preventDefault(); this._tap(); } } };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _tap() {
    if (this.mode !== 'play') return;
    const q = this.q; const f = q.front(); const n = q.tapLoad();
    if (n) { this.sound.play('drop'); const [x, y] = this.P(PAD[0], PAD[1], 2); this.fx.push({ kind: 'text', x, y: y - this.s, t: 0, text: `📦×${I.num(n)}`, col: '#fff' }); this.hintT = 99; }
    else if (!f) { this.sound.play('no'); this._hint(I.t('wait')); }
  }

  _hint(text) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), 2200); }

  _soundPill() {
    const pill = h('button', { class: 'gq-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  // ---- screens --------------------------------------------------------------------------------------------------
  _clear() { this.layer.replaceChildren(); this.hud = null; this.panel = null; this.hintEl = null; this.overlay = null; }

  showMenu() {
    this.mode = 'menu'; this._clear(); this.sound.setMode(false); this.q = new Quarry({ level: 1, easy: true }); this.needLayout = true; this.menuT = 0;
    this.layer.append(h('div', { class: 'gq-dim' }, h('div', { class: 'gq-card' },
      h('div', { class: 'gq-logo' }, '💎 ', I.t('title')),
      h('div', { class: 'gq-ribbon' }, `⚠️ ${I.t('banner')}`),
      h('div', { class: 'gq-small' }, I.t('how')),
      h('button', { class: 'gq-btn', onclick: () => { this.sound.play('tap'); this.showMap(); } }, I.t('play')),
      h('button', { class: 'gq-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  showMap() {
    this.mode = 'map'; this._clear(); this.sound.setMode(false);
    const grid = h('div', { class: 'gq-lvs' });
    for (const L of LEVELS) {
      const open = L.id <= this.save.unlocked; const st = this.save.stars[L.id] || 0;
      grid.append(h('button', { class: `gq-lv${open ? '' : ' lock'}`, disabled: !open, 'aria-label': `${I.t('level')} ${L.id}`, onclick: () => { this.sound.play('tap'); this.startLevel(L.id); } },
        h('i', {}, open ? I.num(L.id) : '🔒'), h('span', { class: 'gq-ln' }, I.getLang() === 'en' ? L.en : L.ar), h('span', { class: 'gq-st' }, open ? '★'.repeat(st) + '☆'.repeat(3 - st) : '')));
    }
    this.layer.append(h('div', { class: 'gq-dim' }, h('div', { class: 'gq-card' },
      h('div', { class: 'gq-title' }, I.t('levels')), grid, h('button', { class: 'gq-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
    this._soundPill();
  }

  startLevel(id) {
    this.level = id; this.q = new Quarry({ level: id, easy: this.easy });
    this.mode = 'play'; this.fx = []; this.vis = new Map(); this.hintT = 0; this.warnT = 0; this.endT = 0; this.needLayout = true;
    this._clear(); this.sound.setMode(true);
    this.coinEl = h('span', {}, ''); this.goalEl = h('span', {}, ''); this.barEl = h('b', { style: 'width:0%' });
    this.warnEl = h('div', { class: 'gq-warn' }, `❗ ${I.t('warn')}`);
    this.hintEl = h('div', { class: 'gq-hint' }, '');
    const menu = h('button', { class: 'gq-round', 'aria-label': I.t('menu'), onclick: () => this.pauseGame() }, '☰');
    this.hud = h('div', { class: 'gq-hud' },
      h('div', { class: 'gq-top2' }, menu, h('div', { class: 'gq-pill' }, '🪙 ', this.coinEl), h('div', { class: 'gq-pill' }, '📦 ', this.goalEl)),
      h('div', { class: 'gq-bar2' }, h('div', { class: 'gq-bar' }, this.barEl)));
    this.pads = {};
    this.panel = h('div', { class: 'gq-panel' });
    for (const k of KINDS) {
      if (!this.q.has(k) || (k === 'loader' && this.easy && !this.q.cfg.tools.includes('loader'))) continue;
      const cost = h('small', {}, ''); const pips = h('em', {}, '');
      const b = h('button', { class: 'gq-pad', onclick: () => { if (this.q.buy(k)) { this.sound.play('buy'); this._buyFx(k); } else this.sound.play('no'); } },
        h('i', {}, ICON[k]), h('span', {}, I.t(k)), pips, cost);
      this.pads[k] = { b, cost, pips, key: '' }; this.panel.append(b);
    }
    const banner = h('div', { class: 'gq-intro' }, h('div', { class: 'gq-ribbon' }, `⚠️ ${I.t('banner')}`), h('div', { class: 'gq-small' }, `${I.t('level')} ${I.num(id)} · ${I.t('goal')} ${I.num(this.q.goal)} 📦`));
    this.layer.append(this.hud, this.warnEl, this.hintEl, this.panel, banner);
    setTimeout(() => banner.remove(), 3600);
    this._soundPill();
    setTimeout(() => { if (this.mode === 'play' && !this.q.easy && this.hintT < 99) this._hint(I.t('tapHint')); }, 3800);
  }

  _buyFx(k) {
    const spots = { diggers: PILE_AT, trucks: PAD, pile: PILE_AT, truckCap: PAD, road: [5, 7.5], loader: PAD, polish: [9, 3], mine2: [2.2, 12.2] };
    const s = spots[k]; const [x, y] = this.P(s[0], s[1], 2);
    this.fx.push({ kind: 'text', x, y, t: 0, text: '⬆️', col: '#9dffb0' });
    for (let i = 0; i < 8; i++) this.fx.push({ kind: 'spark', x, y, t: 0, vx: (i - 3.5) * 14 * this.s / 20, vy: -30 - (i % 3) * 8, col: ['#ffe27a', '#d6a8ff', '#9dffb0'][i % 3] });
  }

  pauseGame() {
    if (this.mode !== 'play') return;
    this.mode = 'pause'; this.sound.suspend();
    this.overlay = h('div', { class: 'gq-dim' }, h('div', { class: 'gq-card' }, h('div', { class: 'gq-title' }, I.t('paused')),
      h('button', { class: 'gq-btn', onclick: () => { this.overlay.remove(); this.mode = 'play'; this.sound.resume(); } }, I.t('resume')),
      h('button', { class: 'gq-btn alt', onclick: () => this.startLevel(this.level) }, I.t('restart')),
      h('button', { class: 'gq-btn dark', onclick: () => this.showMap() }, I.t('map')),
      h('button', { class: 'gq-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit'))));
    this.layer.append(this.overlay);
  }

  _won() {
    const q = this.q; const stars = q.stars();
    this.save = recordWin(this.save, this.level, stars); this.post({ type: 'save', save: this.save });
    this.sound.play('win'); this.endT = 0.0001; this.confetti();
    this._pendingResult = { stars };
  }

  _showResult(stars) {
    this.mode = 'result'; const q = this.q;
    const starEl = h('div', { class: 'gq-stars' }, ...[0, 1, 2].map((i) => h('span', { class: i < stars ? '' : 'off' }, '⭐')));
    this.layer.append(h('div', { class: 'gq-dim' }, h('div', { class: 'gq-card' },
      h('div', { class: 'gq-title' }, I.t('won')), starEl,
      h('div', { class: 'gq-pill' }, `📦 ${I.t('shipped')}: ${I.num(q.shipped)}`),
      h('div', { class: 'gq-pill' }, `🪙 ${I.num(q.earned)}`),
      h('div', { class: 'gq-small' }, `${I.t('overflow')}: ${I.num(Math.round(q.overflowT))} ${I.t('sec')}`),
      this.level < LEVELS.length ? h('button', { class: 'gq-btn', onclick: () => this.startLevel(this.level + 1) }, I.t('next')) : null,
      h('button', { class: 'gq-btn alt', onclick: () => this.startLevel(this.level) }, I.t('again')),
      h('button', { class: 'gq-btn dark', onclick: () => this.showMap() }, I.t('map')))));
  }

  confetti() {
    const [cx, cy] = [this.cw / 2, this.ch * 0.35];
    for (let i = 0; i < 70; i++) this.fx.push({ kind: 'conf', x: cx, y: cy, t: 0, vx: (Math.sin(i * 12.9) * 170), vy: -120 - ((i * 37) % 120), col: ['#ffe27a', '#d6a8ff', '#9dffb0', '#ff8a6a', '#7ad0ff'][i % 5], r: 3 + (i % 3) });
  }

  // ---- loop -----------------------------------------------------------------------------------------------------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      else if (this.endT > 0) this._tickEnd(dt);
      for (const f of this.fx) f.t += dt;
      this.fx = this.fx.filter((f) => f.t < (f.kind === 'conf' ? 2.6 : 1.1));
      if (this.needLayout) this._layout();
      this._draw(dt);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _tickEnd(dt) { this.endT += dt; if (this.endT > 1.3 && this._pendingResult) { const r = this._pendingResult; this._pendingResult = null; this.endT = 0; this._showResult(r.stars); } }

  _update(dt) {
    const q = this.q;
    const prev = new Map(q.trucks.map((t) => [t.id, t.st]));
    for (const e of q.step(dt)) {
      switch (e.type) {
        case 'dig': if (this.clock - this.digSnd > 0.18) { this.digSnd = this.clock; this.sound.play('dig'); } this._sparkle(); break;
        case 'deliver': {
          this.sound.play('coin'); this.sound.play('horn');
          const [x, y] = this.P(GATE[0] - 1, GATE[1] - 1, 3.4); this.fx.push({ kind: 'text', x, y, t: 0, text: `+${I.num(e.pay)} 🪙`, col: '#ffe27a' }); break;
        }
        case 'overflow': this.sound.play('warn'); this.warnT = 0; break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    for (const t of q.trucks) if (prev.get(t.id) === 'wait' && t.st === 'go') this.sound.play('engine');
    if (q.isFull()) { this.warnT += dt; if (this.warnT > 6) { this.warnT = 0; this.sound.play('warn'); } }
    this.coinEl.textContent = I.num(q.coins);
    this.goalEl.textContent = `${I.num(q.shipped)}/${I.num(q.goal)}`;
    this.barEl.style.width = `${Math.min(100, (q.shipped / q.goal) * 100)}%`;
    this.warnEl.classList.toggle('show', q.isFull());
    for (const k of Object.keys(this.pads)) {
      const p = this.pads[k]; const c = q.cost(k); const can = q.canBuy(k);
      const key = `${c}|${can}|${q.up[k]}`;
      if (key === p.key) continue; p.key = key;
      p.cost.textContent = c === null ? I.t('max') : `🪙 ${I.num(c)}`;
      p.pips.textContent = k === 'mine2' ? (q.up[k] ? '✓' : '') : '●'.repeat(Math.min(q.up[k], 8)) + '○'.repeat(Math.max(0, Math.min(MAXLV[k], 6) - q.up[k]));
      p.b.classList.toggle('can', can); p.b.classList.toggle('done', c === null);
    }
    // visible trucks ease toward their slot so queues look smooth
    for (const t of q.trucks) {
      let v = this.vis.get(t.id);
      const tgt = t.st === 'wait' ? slotPos(t.slot) : null;
      if (!v) { v = { ...slotPos(t.slot) }; this.vis.set(t.id, v); }
      if (tgt) { v.x += (tgt.x - v.x) * Math.min(1, dt * 5); v.y += (tgt.y - v.y) * Math.min(1, dt * 5); v.ax = 'x'; v.sign = -1; }
    }
    if (!q.easy && this.hintT < 99) { this.hintT += dt; }
  }

  _sparkle() {
    const c = CRYSTALS[(Math.random() * CRYSTALS.length) | 0]; const [x, y] = this.P(c[0], c[1], c[2] * 0.6);
    this.fx.push({ kind: 'spark', x, y, t: 0.5, vx: (Math.random() - 0.5) * 40, vy: -30 - Math.random() * 20, col: Math.random() < 0.5 ? '#d6a8ff' : '#fff' });
  }

  // ---- drawing --------------------------------------------------------------------------------------------------
  _poly(g, pts, fill, stroke, lw) { g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw || 1; g.stroke(); } }

  /** Isometric box with its minimum corner at (x, y, z); size dx, dy, dz; colours top / left / right. */
  _box(g, x, y, z, dx, dy, dz, ct, cl, cr, line = 'rgba(40,10,70,.55)') {
    const P = (a, b, c) => this.P(a, b, c); const lw = Math.max(1, this.s * 0.07);
    this._poly(g, [P(x, y + dy, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z + dz), P(x, y + dy, z + dz)], cl, line, lw);
    this._poly(g, [P(x + dx, y, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z + dz), P(x + dx, y, z + dz)], cr, line, lw);
    this._poly(g, [P(x, y, z + dz), P(x + dx, y, z + dz), P(x + dx, y + dy, z + dz), P(x, y + dy, z + dz)], ct, line, lw);
  }

  _shadow(g, x, y, rx, ry) { const [sx, sy] = this.P(x, y, 0); g.fillStyle = 'rgba(70,40,10,.22)'; g.beginPath(); g.ellipse(sx, sy, rx * this.s, ry * this.s, 0, 0, 6.3); g.fill(); }

  _crystal(g, x, y, H, w, glow = 0) {
    const [bx, by] = this.P(x, y, 0); const s = this.s; const hh = H * C * s; const ww = w * s * 1.4;
    this._shadow(g, x + 0.3, y + 0.3, w * 1.2, w * 0.5);
    const T = [bx, by - hh]; const L = [bx - ww, by - hh * 0.38]; const R = [bx + ww, by - hh * 0.38];
    const BL = [bx - ww * 0.8, by]; const BR = [bx + ww * 0.8, by]; const BC = [bx, by + ww * 0.4];
    this._poly(g, [T, L, BL, BC], '#6a2bd0', '#2e0a66', Math.max(1, s * 0.07));
    this._poly(g, [T, R, BR, BC], '#a35cf5', '#2e0a66', Math.max(1, s * 0.07));
    this._poly(g, [T, [bx + ww * 0.25, by - hh * 0.55], [bx - ww * 0.15, by - hh * 0.4]], `rgba(255,255,255,${0.55 + glow * 0.3})`);
    if (glow) { g.fillStyle = `rgba(230,190,255,${0.25 * glow})`; g.beginPath(); g.arc(bx, by - hh * 0.5, ww * 1.8, 0, 6.3); g.fill(); }
  }

  _crate(g, x, y, z, k = 1) {
    const d = 0.62 * k;
    this._box(g, x, y, z, d, d, d * 0.8, '#e8b868', '#b47a2c', '#c8923f', 'rgba(70,35,5,.7)');
    const [ax, ay] = this.P(x + d / 2, y + d / 2, z + d * 0.8); g.fillStyle = '#8a5a1c'; g.fillRect(ax - this.s * 0.06, ay - this.s * 0.14, this.s * 0.12, this.s * 0.28);
  }

  _worker(g, x, y, i, busy, carry = 0) {
    const [bx, by] = this.P(x, y, 0); const s = this.s; const sw = busy ? Math.sin(this.clock * 7 + i * 1.7) : 0;
    this._shadow(g, x, y, 0.45, 0.18);
    g.fillStyle = '#34405c'; g.fillRect(bx - s * 0.32, by - s * 0.55, s * 0.26, s * 0.55); g.fillRect(bx + s * 0.06, by - s * 0.55, s * 0.26, s * 0.55);
    g.fillStyle = SHIRTS[i % 8]; g.beginPath(); g.roundRect(bx - s * 0.4, by - s * 1.35 + Math.abs(sw) * s * 0.06, s * 0.8, s * 0.9, s * 0.2); g.fill();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(bx, by - s * 1.6, s * 0.34, 0, 6.3); g.fill();
    g.fillStyle = '#ffc61a'; g.beginPath(); g.arc(bx, by - s * 1.68, s * 0.37, Math.PI, 0); g.fill(); g.fillRect(bx - s * 0.42, by - s * 1.7, s * 0.84, s * 0.1);
    if (busy) { // pickaxe
      g.save(); g.translate(bx + s * 0.4, by - s * 1.1); g.rotate(-0.9 + sw * 0.9); g.strokeStyle = '#7a4a1c'; g.lineWidth = s * 0.12; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -s * 0.9); g.stroke();
      g.strokeStyle = '#c8ccd8'; g.lineWidth = s * 0.14; g.beginPath(); g.moveTo(-s * 0.34, -s * 0.85); g.lineTo(s * 0.34, -s * 0.85); g.stroke(); g.restore();
    }
    for (let c = 0; c < carry; c++) this._crate(g, x - 0.3, y - 0.3, 1.3 + c * 0.5, 0.6);
  }

  _truck(g, x, y, ax, sign, load, cap, bob) {
    // lengths along the driving axis
    const L = 1.9; const Wd = 1.0; const dx = ax === 'x' ? L : Wd; const dy = ax === 'x' ? Wd : L;
    const x0 = x - dx / 2; const y0 = y - dy / 2;
    this._shadow(g, x, y, 1.1, 0.45);
    // wheels
    const wl = (px, py) => this._box(g, px, py, 0, ax === 'x' ? 0.5 : 0.22, ax === 'x' ? 0.22 : 0.5, 0.42, '#555a66', '#1c1e24', '#2a2c34', 'rgba(0,0,0,.8)');
    const wo = 0.22; const f1 = ax === 'x' ? x0 + 0.2 : y0 + 0.2; void f1;
    if (ax === 'x') { wl(x0 + 0.2, y0 - 0.02); wl(x0 + dx - 0.7, y0 - 0.02); wl(x0 + 0.2, y0 + dy - 0.2); wl(x0 + dx - 0.7, y0 + dy - 0.2); }
    else { wl(x0 - 0.02, y0 + 0.2); wl(x0 - 0.02, y0 + dy - 0.7); wl(x0 + dx - 0.2, y0 + 0.2); wl(x0 + dx - 0.2, y0 + dy - 0.7); }
    void wo;
    const lift = 0.28 + bob;
    // bed (rear) and cab (front)
    const front = sign > 0 ? 1 : 0; const cabL = 0.7;
    let bx0 = x0; let by0 = y0; let bdx = dx; let bdy = dy; let cx0 = x0; let cy0 = y0; let cdx = dx; let cdy = dy;
    if (ax === 'x') { bdx = L - cabL; cdx = cabL; if (front) cx0 = x0 + bdx; else bx0 = x0 + cabL; }
    else { bdy = L - cabL; cdy = cabL; if (front) cy0 = y0 + bdy; else by0 = y0 + cabL; }
    this._box(g, bx0, by0, lift, bdx, bdy, 0.55, '#c98f12', '#d9a017', '#f5b81c', 'rgba(70,40,0,.75)');
    const n = Math.min(4, Math.ceil((load / cap) * 4));
    for (let i = 0; i < n; i++) {
      const cx = bx0 + 0.12 + (ax === 'x' ? (i % 2) * 0.55 : (i >> 1) * 0.0); const cy = by0 + 0.12 + (ax === 'x' ? 0 : (i % 2) * 0.0);
      const ox = ax === 'x' ? bx0 + 0.1 + (i % 2) * 0.5 : bx0 + 0.18; const oy = ax === 'x' ? by0 + 0.18 : by0 + 0.1 + (i % 2) * 0.5; void cx; void cy;
      this._crate(g, ox, oy, lift + 0.55 + (i >> 1) * 0.45, 0.8);
    }
    this._box(g, cx0, cy0, lift, cdx, cdy, 1.0, '#ffd84a', '#e0a818', '#ffcb2e', 'rgba(70,40,0,.75)');
    // windscreen
    const wxs = ax === 'x' ? (front ? cx0 + cdx : cx0) : cx0; const wys = ax === 'x' ? cy0 : (front ? cy0 + cdy : cy0);
    const pw = this.P(wxs, wys + (ax === 'x' ? 0.12 : 0), lift + 0.55); void pw;
    const fa = ax === 'x' ? this.P(front ? cx0 + cdx : cx0, cy0 + dy, lift + 0.5) : this.P(cx0 + dx, front ? cy0 + cdy : cy0, lift + 0.5);
    g.fillStyle = '#9ad8ff'; g.beginPath(); g.ellipse(fa[0] - this.s * (ax === 'x' ? 0.3 : -0.3) * (front ? -1 : 1) * 0.0, fa[1] - this.s * 0.22, this.s * 0.36, this.s * 0.2, 0, 0, 6.3); g.fill();
  }

  _building(g, x, y, w, d, hgt, wall1, wall2, roof) {
    this._shadow(g, x + w / 2 + 0.3, y + d / 2 + 0.3, w * 0.8, d * 0.4);
    this._box(g, x, y, 0, w, d, hgt, roof, wall1, wall2);
    this._box(g, x - 0.25, y - 0.25, hgt, w + 0.5, d + 0.5, 0.35, roof, '#7a3a2a', '#9a4a34');
  }

  _bgRender() {
    const c = document.createElement('canvas'); c.width = this.cv.width; c.height = this.cv.height;
    const g = c.getContext('2d'); g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const s = this.s;
    const sky = g.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#f6dca0'); sky.addColorStop(0.5, '#ebce8c'); sky.addColorStop(1, '#d9b070'); g.fillStyle = sky; g.fillRect(0, 0, W, H);
    // dunes / hills behind the scene
    const hill = (cx, cy, rx, ry, col) => { g.fillStyle = col; g.beginPath(); g.ellipse(cx, cy, rx, ry, 0, Math.PI, 0); g.fill(); };
    const [tx, ty] = this.P(0, 0, 0);
    hill(tx - s * 9, ty - s * 2, s * 9, s * 5, '#dfc07a'); hill(tx + s * 8, ty - s * 3, s * 10, s * 6.5, '#d6b46e'); hill(tx, ty - s * 6, s * 13, s * 5.5, '#e8cd8e');
    hill(tx - s * 4, ty - s * 7.5, s * 8, s * 3.5, '#efd8a0');
    // sandy ground disc under the whole site
    const [mx, my] = this.P(5, 9, 0);
    const gr = g.createRadialGradient(mx, my, s * 2, mx, my, s * 16); gr.addColorStop(0, '#f0d99c'); gr.addColorStop(1, 'rgba(240,217,156,0)'); g.fillStyle = gr; g.beginPath(); g.ellipse(mx, my, s * 17, s * 12, 0, 0, 6.3); g.fill();
    // pebbles and dry tufts (fixed pattern)
    for (let i = 0; i < 70; i++) { const x = ((i * 7.31) % 22) - 3; const y = ((i * 11.7) % 22) - 3; const [px, py] = this.P(x, y, 0); g.fillStyle = i % 3 ? 'rgba(150,110,50,.35)' : 'rgba(255,245,210,.5)'; g.beginPath(); g.ellipse(px, py, s * (0.12 + (i % 4) * 0.05), s * 0.07, 0, 0, 6.3); g.fill(); }
    // the road (parallelogram strips on the ground)
    const lvl = this.q ? this.q.up.road : 0; const rw = 1.15;
    const strip = (a, b, ext = 0, col, w = rw) => {
      const ax = a[0] === b[0] ? 'y' : 'x'; let p = [...a]; let q2 = [...b];
      const dirx = Math.sign(b[0] - a[0]); const diry = Math.sign(b[1] - a[1]);
      p[0] -= dirx * ext; p[1] -= diry * ext; q2[0] += dirx * ext; q2[1] += diry * ext;
      const pts = ax === 'x' ? [[p[0], p[1] - w], [q2[0], q2[1] - w], [q2[0], q2[1] + w], [p[0], p[1] + w]] : [[p[0] - w, p[1]], [q2[0] - w, q2[1]], [q2[0] + w, q2[1]], [p[0] + w, p[1]]];
      this._poly(g, pts.map((v) => this.P(v[0], v[1], 0)), col);
    };
    const segs = [[[17, 10], PAD], ...NODES.slice(0, -1).map((n, i) => [n, NODES[i + 1]])];
    const edge = lvl >= 3 ? '#3a3a44' : lvl >= 1 ? '#8a7a64' : '#9a6a38'; const fill = lvl >= 3 ? '#5a5a68' : lvl >= 1 ? '#a8987e' : '#c08a4c';
    for (const [a, b] of segs) strip(a, b, rw, edge, rw + 0.22);
    for (const [a, b] of segs) strip(a, b, rw, fill);
    // centre dashes
    g.strokeStyle = lvl >= 3 ? '#ffe27a' : 'rgba(255,255,255,.35)'; g.lineWidth = Math.max(1, s * 0.1); g.setLineDash([s * 0.5, s * 0.5]);
    g.beginPath(); const r0 = this.P(17, 10, 0); g.moveTo(r0[0], r0[1]); for (const n of NODES) { const p = this.P(n[0], n[1], 0); g.lineTo(p[0], p[1]); } g.stroke(); g.setLineDash([]);
    // loading pad (hazard slab)
    const pad = [[PAD[0] - 1.1, PAD[1] - 1.1], [PAD[0] + 1.1, PAD[1] - 1.1], [PAD[0] + 1.1, PAD[1] + 1.1], [PAD[0] - 1.1, PAD[1] + 1.1]].map((v) => this.P(v[0], v[1], 0.02));
    this._poly(g, pad, '#ffd23a', '#3a2a00', Math.max(1.5, s * 0.1));
    g.save(); g.beginPath(); pad.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); g.clip();
    g.strokeStyle = '#2a2a30'; g.lineWidth = s * 0.28; for (let i = -6; i < 6; i++) { const a = this.P(PAD[0] - 1.2 + i * 0.5, PAD[1] - 1.2, 0.02); const b = this.P(PAD[0] - 0.2 + i * 0.5, PAD[1] + 1.2, 0.02); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
    g.restore();
    // mine floor (darker sand) and pile platform
    const floor = (cx, cy, r, col) => { const [fx, fy] = this.P(cx, cy, 0); g.fillStyle = col; g.beginPath(); g.ellipse(fx, fy, r * s * 1.5, r * s * 0.9, 0, 0, 6.3); g.fill(); };
    floor(7.6, 15.2, 4.4, 'rgba(120,80,40,.28)'); floor(PILE_AT[0], PILE_AT[1], 1.7, 'rgba(120,80,40,.3)');
    if (this.q && this.q.up.mine2) floor(2.4, 12.4, 3, 'rgba(120,80,40,.28)');
    return c;
  }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (!this.q || !this.s) return;
    const q = this.q;
    const bgKey = `${this.cw}x${this.ch}|${q.up.road}|${q.up.mine2}`;
    if (!this.bg || this.bgKey !== bgKey) { this.bg = this._bgRender(); this.bgKey = bgKey; }
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(this.bg, 0, 0); g.restore();
    const items = [];
    const add = (d, fn) => items.push({ d, fn });
    // depot
    add(-5, () => {
      this._building(g, -5.6, -5.6, 4, 4, 3.0, '#d0a060', '#e8c080', '#f0d8a0');
      const [dx, dy] = this.P(-1.55, -1.55 - 0.0, 1.0); g.fillStyle = '#5a3a1a'; g.beginPath(); g.roundRect(dx - this.s * 0.7, dy - this.s * 0.7, this.s * 1.0, this.s * 1.3, this.s * 0.15); g.fill();
      const [sx, sy] = this.P(-3.6, -3.6, 5.0); g.font = `${this.s * 1.5}px system-ui`; g.textAlign = 'center'; g.fillText('📦', sx, sy);
    });
    // workshop
    if (q.up.polish > 0) add(9 + 3, () => {
      this._building(g, 8.2, 2.2, 3.4, 3.2, 2.4, '#b88ad8', '#d8b0f0', '#e8d0ff');
      const [sx, sy] = this.P(9.9, 3.8, 4.8 + Math.sin(this.clock * 3) * 0.15); g.font = `${this.s * (1.1 + q.up.polish * 0.3)}px system-ui`; g.textAlign = 'center'; g.fillText('💎', sx, sy);
      if (q.up.polish > 1) { const [lx, ly] = this.P(8, 5.8, 2.5); g.font = `${this.s * 0.9}px system-ui`; g.fillText('✨', lx, ly + Math.sin(this.clock * 4) * this.s * 0.2); }
    });
    // crystals + diggers
    const glow = 0.5 + 0.5 * Math.sin(this.clock * 2.5);
    CRYSTALS.forEach((c, i) => add(c[0] + c[1], () => this._crystal(g, c[0], c[1], c[2], c[3], i === 0 ? glow : 0)));
    if (q.up.mine2) CRYSTALS2.forEach((c) => add(c[0] + c[1], () => this._crystal(g, c[0], c[1], c[2], c[3], glow)));
    const nd = Math.min(q.up.diggers, DIG_POS.length);
    for (let i = 0; i < nd; i++) add(DIG_POS[i][0] + DIG_POS[i][1] + 0.2, () => this._worker(g, DIG_POS[i][0], DIG_POS[i][1], i, true));
    if (q.up.mine2) { add(2.4 + 12.4 + 3, () => this._worker(g, 3.0, 12.4, 5, true)); add(2.4 + 13.6, () => this._worker(g, 1.6, 12.8, 6, true)); }
    // loader helper
    if (q.up.loader > 0) {
      const t = (Math.sin(this.clock * 1.6) + 1) / 2; const lx = PILE_AT[0] + 1.2 + (PAD[0] - PILE_AT[0] - 2.4) * t; const ly = PILE_AT[1] - 0.6 + (PAD[1] - PILE_AT[1] + 0.4) * t;
      add(lx + ly, () => this._worker(g, lx, ly, 3, false, q.pile > 0 ? 1 : 0));
    }
    // pile of crates
    add(PILE_AT[0] + PILE_AT[1] + 1, () => this._pile(g, q));
    // trucks
    for (const t of q.trucks) {
      const v = this.vis.get(t.id); if (!v) continue;
      let p;
      if (t.st === 'go') { p = routePos(t.prog * ROUTE_LEN); p.off = 0.5; }
      else if (t.st === 'back') { p = routePos(t.prog * ROUTE_LEN); p.sign = -p.sign; p.off = -0.5; }
      else p = { x: v.x, y: v.y, ax: 'x', sign: -1, off: 0 };
      let px = p.x; let py = p.y;
      if (t.st !== 'wait') { if (p.ax === 'x') py += p.off; else px += p.off; v.x = px; v.y = py; }
      const bob = t.st === 'wait' ? 0 : Math.abs(Math.sin(this.clock * 14 + t.id)) * 0.04;
      add(px + py + 0.6, () => this._truck(g, px, py, p.ax, p.sign, t.load, q.truckCap(), bob));
    }
    items.sort((a, b) => a.d - b.d);
    for (const it of items) it.fn();
    this._fxDraw(g);
  }

  _pile(g, q) {
    const shown = Math.ceil(24 * (q.pile / q.pileCap()));
    const [x0, y0] = PILE_AT; const full = q.isFull();
    const shake = full ? Math.sin(this.clock * 30) * 0.04 : 0;
    this._shadow(g, x0 + 0.7, y0 + 0.5, 1.7, 0.7);
    this._box(g, x0 - 0.2, y0 - 0.2, 0, 2.2, 1.6, 0.18, '#a07840', '#7a5a2a', '#8a6830');
    for (let i = 0; i < shown; i++) {
      const layer = Math.floor(i / 6); const k = i % 6; const cx = x0 + 0.05 + (k % 3) * 0.64 + shake; const cy = y0 + 0.05 + Math.floor(k / 3) * 0.64;
      this._crate(g, cx, cy, 0.18 + layer * 0.5);
    }
    if (full) {
      const [sx, sy] = this.P(x0 + 1, y0 + 0.8, 0.18 + Math.ceil(shown / 6) * 0.5 + 1.1 + Math.abs(Math.sin(this.clock * 6)) * 0.3);
      g.fillStyle = '#e8261a'; g.strokeStyle = '#fff'; g.lineWidth = this.s * 0.14; g.beginPath(); g.arc(sx, sy, this.s * 0.95, 0, 6.3); g.fill(); g.stroke();
      g.fillStyle = '#fff'; g.font = `900 ${this.s * 1.5}px Tajawal, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('!', sx, sy + this.s * 0.08); g.textBaseline = 'alphabetic';
    } else if (this.mode === 'play' && !q.easy && this.hintT < 99 && q.pile > 2 && q.front()) {
      const [sx, sy] = this.P(x0 + 1, y0 + 0.8, 3.2 + Math.abs(Math.sin(this.clock * 5)) * 0.4); g.font = `${this.s * 1.7}px system-ui`; g.textAlign = 'center'; g.fillText('👆', sx, sy);
    }
  }

  _fxDraw(g) {
    g.textAlign = 'center';
    for (const f of this.fx) {
      if (f.kind === 'text') {
        const a = 1 - f.t / 1.1; g.globalAlpha = Math.max(0, a); g.font = `900 ${this.s * 1.25}px Tajawal, system-ui`; g.lineWidth = this.s * 0.28; g.strokeStyle = 'rgba(60,20,90,.95)'; g.fillStyle = f.col;
        const y = f.y - f.t * this.s * 2.6; g.strokeText(f.text, f.x, y); g.fillText(f.text, f.x, y);
      } else if (f.kind === 'spark') {
        g.globalAlpha = Math.max(0, 1 - f.t / 1.1); g.fillStyle = f.col; const x = f.x + f.vx * f.t; const y = f.y + f.vy * f.t * 0.6 + 60 * f.t * f.t; const r = this.s * 0.16; g.beginPath(); g.moveTo(x, y - r * 1.6); g.lineTo(x + r, y); g.lineTo(x, y + r * 1.6); g.lineTo(x - r, y); g.fill();
      } else if (f.kind === 'conf') {
        g.globalAlpha = Math.max(0, 1 - f.t / 2.6); g.fillStyle = f.col; g.fillRect(f.x + f.vx * f.t, f.y + f.vy * f.t + 260 * f.t * f.t, f.r * 1.4, f.r);
      }
    }
    g.globalAlpha = 1;
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); }
  dispose() { cancelAnimationFrame(this.raf); clearTimeout(this._ht); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const STYLE = `
.gq-root{background:#e6c98a}
.gq-hint{top:calc(var(--u)*34)}
.gq-hud{position:absolute;left:0;right:0;top:0;padding-bottom:calc(var(--u)*1);pointer-events:none}
.gq-top2{display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:space-between;padding:max(calc(var(--u)*2.5),env(safe-area-inset-top)) calc(var(--u)*3) 0}
.gq-top2 .gq-round{pointer-events:auto;flex:none}
.gq-top2 .gq-pill{font-size:calc(var(--u)*4.2)}
.gq-bar2{padding:calc(var(--u)*1.6) calc(var(--u)*3) 0;direction:ltr}
.gq-warn{position:absolute;left:50%;top:calc(var(--u)*24);transform:translateX(-50%) scale(.8);background:#e8261a;border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*1) calc(var(--u)*4);opacity:0;transition:opacity .2s,transform .2s;white-space:nowrap;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,0,0,.4)}
.gq-warn.show{opacity:1;transform:translateX(-50%) scale(1);animation:gqwarn .7s infinite alternate}
@keyframes gqwarn{to{transform:translateX(-50%) scale(1.08)}}
.gq-panel{position:absolute;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.4);padding:calc(var(--u)*2) calc(var(--u)*2) max(calc(var(--u)*2.5),env(safe-area-inset-bottom));pointer-events:none;direction:ltr;background:linear-gradient(180deg,rgba(90,40,150,0),rgba(90,40,150,.28))}
.gq-pad{pointer-events:auto;font-family:inherit;font-weight:900;color:#fff;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#8a62b8,#58348a);padding:calc(var(--u)*1) calc(var(--u)*.6);min-height:calc(var(--u)*19);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.1);font-size:calc(var(--u)*3);box-shadow:0 calc(var(--u)*.7) 0 #2e1058,0 calc(var(--u)*1) calc(var(--u)*1.4) rgba(0,0,0,.35);line-height:1.1}
.gq-pad i{font-style:normal;font-size:calc(var(--u)*6)}.gq-pad em{font-style:normal;font-size:calc(var(--u)*2);letter-spacing:.1em;opacity:.9;min-height:1em}
.gq-pad small{font-size:calc(var(--u)*3.2);color:#ffe27a;background:rgba(0,0,0,.35);border-radius:99px;padding:0 calc(var(--u)*1.6)}
.gq-pad.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 0 calc(var(--u)*3) calc(var(--u)*.8) #b6ffc8,0 calc(var(--u)*.7) 0 #1a6a3a;animation:gqpulse 1s infinite}
.gq-pad.can small{background:rgba(0,0,0,.45)}
.gq-pad.done{opacity:.55;filter:grayscale(.6)}
.gq-pad:active{transform:translateY(calc(var(--u)*.5))}
@keyframes gqpulse{50%{transform:scale(1.06)}}
.gq-intro{position:absolute;left:0;right:0;top:calc(var(--u)*28);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.4);animation:gqfade 3.6s forwards;pointer-events:none}
@keyframes gqfade{0%{opacity:0;transform:translateY(-10px)}8%{opacity:1;transform:none}85%{opacity:1}100%{opacity:0}}
.gq-ribbon{background:linear-gradient(180deg,#ff5a3a,#c0200e);border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*2);color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);padding:calc(var(--u)*1.2) calc(var(--u)*3.4);text-align:center;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.4)}
.gq-intro .gq-small{background:rgba(40,10,70,.7);border-radius:99px;padding:calc(var(--u)*.8) calc(var(--u)*3)}
.gq-ln{font-size:calc(var(--u)*2.4)}.gq-st{color:#ffe27a;font-size:calc(var(--u)*3.4);letter-spacing:.05em}
.gq-lv{background:linear-gradient(180deg,#a870e8,#6a38b8);box-shadow:0 calc(var(--u)*.6) 0 #2e1058}
.gq-lv.lock{background:linear-gradient(180deg,#b8b0c4,#8a8498);box-shadow:0 calc(var(--u)*.6) 0 #5a5468}
.gq-lvs{grid-template-columns:repeat(5,1fr)}
@media (orientation:landscape){.gq-lvs{grid-template-columns:repeat(5,1fr)}.gq-root.land .gq-panel{left:auto;top:calc(var(--u)*14);bottom:0;width:calc(var(--u)*50);grid-template-columns:repeat(2,1fr);align-content:center;background:none}}
.gq-root.land .gq-hud{right:calc(var(--u)*50)}
.gq-root.land .gq-warn,.gq-root.land .gq-hint{left:35%}
.gq-card{background:linear-gradient(180deg,#9a4be0,#5a1fa8)}
.gq-btn{width:100%}.gq-title{font-size:calc(var(--u)*7)}
`;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.GemQuarry = api;
export default api;
