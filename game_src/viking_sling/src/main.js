// «مقلاع الفايكنج» — Viking Slingshot. Entry: window.VikingSling.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Pull back the giant slingshot and launch chubby vikings at goblin forts built of wood, stone and ice. Real 2D physics (src/phys.js),
// ten levels with a boss fortress, special vikings (bomb, shield, giant) and a small gold shop. Art and sound are made in code.
import { Battle, ANCHOR, MAX_PULL, VIKINGS, GOBLINS, normalizeSave, recordResult, buyUpgrade, upgradeCost } from './sim.js';
import { LEVELS } from './levels.js';
import { Sound } from './audio.js';
import { loadArt } from '../../cozy_kit/art.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['مقلاع الفايكنج', 'Viking Slingshot'], play: ['يلا نلعب', 'Play'], levels: ['المراحل', 'Levels'], shop: ['المتجر', 'Shop'], exit: ['خروج', 'Exit'],
  menu: ['القائمة', 'Menu'], resume: ['كمّل', 'Resume'], again: ['من الأول', 'Try again'], next: ['المرحلة الجاية', 'Next level'], back: ['رجوع', 'Back'],
  how: ['اسحب الفايكنج لورا وسيب! اضغط في الهوا يشغّل القدرة الخاصة', 'Drag the viking back and let go! Tap in the air for his special move'],
  win: ['كسبت! 🎉', 'You won! 🎉'], lose: ['الغيلان نجوا! جرّب تاني', 'The goblins survived! Try again'], gold: ['ذهب', 'Gold'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], tapHint: ['اضغط للقدرة!', 'Tap for the special move!'], aimHint: ['اسحب الفايكنج لورا', 'Drag the viking back'],
  power: ['قوة أكبر', 'More power'], extra: ['فايكنج زيادة', 'Extra viking'], max: ['أقصى حد', 'Maxed'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  boss: ['حصن الزعيم', 'Boss fortress'], bonus: ['مكافأة الفايكنج الباقيين', 'Bonus for spare vikings'], lvl: ['مرحلة', 'Level'], restart: ['إعادة', 'Restart'],
  kb_axe: ['', ''], kb_bomb: ['قنبلة', 'BOMB'], kb_shield: ['ارتداد', 'BOUNCE'], kb_giant: ['عملاق', 'GIANT'], goblins: ['الغيلان', 'Goblins'], plunder: ['الغنيمة', 'Plunder'], unused: ['فايكنج باقي', 'Unused vikings'], first: ['أول غارة', 'First raid'], lvlName: ['المرحلة', 'LEVEL'],
  kind_axe: ['اضغط: ينطّ بسرعة', 'Tap: speed burst'], kind_bomb: ['اضغط: ينفجر', 'Tap: explode'], kind_shield: ['يرتد بقوة، اضغط: دفعة', 'Bounces, tap: dash'], kind_giant: ['يكسّر الحيطان، اضغط: ضربة للأرض', 'Smashes walls, tap: slam'],
};
const I = makeI18n(S);
let ART = {}; // optional generated pictures (assets/games/viking_sling/art/*.webp); a missing one stays null and that thing is drawn in code
const FARX = 38; // right edge of the playfield for the camera
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('vs-style')) document.head.append(h('style', { id: 'vs-style' }, css('vs', '#4a8ac8', '#244a80', '#ffd23a') + `
.vs-root{background:#79c6ee}
.vs-queue{position:absolute;left:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1);direction:ltr;pointer-events:none}
.vs-gob{background:linear-gradient(180deg,#9a52e0,#5a2aa0)!important;border:calc(var(--u)*.5) solid #fff!important;font-size:calc(var(--u)*7)!important;padding:calc(var(--u)*.4) calc(var(--u)*4)!important;border-radius:999px!important;color:#fff;font-weight:900}
.vs-lvl{position:absolute;left:calc(var(--u)*2);top:calc(var(--u)*14);background:rgba(20,100,120,.85);color:#fff;font-weight:900;font-size:calc(var(--u)*2.8);padding:calc(var(--u)*.5) calc(var(--u)*2.4);border-radius:999px;border:calc(var(--u)*.3) solid #fff;pointer-events:none}
.vs-queue{left:50%!important;transform:translateX(-50%);gap:calc(var(--u)*1.4)!important;align-items:flex-end}
.vs-qw{position:relative;display:flex;flex-direction:column;align-items:center}
.vs-qb{font-size:calc(var(--u)*2);font-weight:900;color:#fff;border-radius:calc(var(--u)*.8);padding:0 calc(var(--u)*1);margin-bottom:calc(var(--u)*.3);border:calc(var(--u)*.25) solid #fff;letter-spacing:.04em}
.vs-rows{display:flex;flex-direction:column;gap:calc(var(--u)*1);width:100%}.vs-rw{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.18);border-radius:calc(var(--u)*1.8);padding:calc(var(--u)*1) calc(var(--u)*2.4);font-weight:900;font-size:calc(var(--u)*3.4)}
.vs-q{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;background:rgba(10,30,60,.55);border:calc(var(--u)*.4) solid #fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*4.6);opacity:.75}
.vs-q.cur{background:#ffd23a;opacity:1;transform:scale(1.15)}
.vs-q.used{opacity:.25;filter:grayscale(1)}
.vs-shopitem{display:flex;align-items:center;gap:calc(var(--u)*2);width:100%}
.vs-shopitem .vs-btn{width:auto;flex:1;font-size:calc(var(--u)*4)}.vs-shopitem .vs-btn.off{opacity:.5;filter:grayscale(.6)}
.vs-lv.boss{background:linear-gradient(180deg,#e0603a,#a02a10);box-shadow:0 calc(var(--u)*.6) 0 #5a1000}
.vs-row{display:flex;gap:calc(var(--u)*2);width:100%}.vs-row .vs-btn{font-size:calc(var(--u)*4)}
.vs-kinds{display:flex;flex-direction:column;gap:calc(var(--u)*.6);font-size:calc(var(--u)*3);font-weight:700;opacity:.95;text-align:center}
`));
    this.root = h('div', { class: 'vs-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'vs-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.parts = []; this.floats = []; this.shake = 0;
    this.camX = 0; this.holdT = 0; this.manualCam = false;
    this.drag = null; this.pan = null;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    Promise.all([this._fonts(), loadArt(this.base, ['vik_axe', 'vik_bomb', 'vik_shield', 'vik_giant', 'gob', 'gob_helm', 'gob_boss', 'tex_wood', 'tex_stone', 'tex_ice', 'sky_meadow', 'tree_pine']).then((a) => { ART = a; })]).then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    const portrait = this.ch > this.cw * 1.1;
    this.s = portrait ? Math.max(8, this.cw / 17) : Math.max(8, Math.min(this.ch / 15, this.cw / 25));
    this.gy = portrait ? this.ch * 0.8 : this.ch - Math.min(this.ch * 0.1, 70);
    this.W = this.cw / this.s;
    this.sky = null;
  }

  _maxCam() { return Math.max(-2, FARX - this.W); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const wx = (cx) => this.camX + (cx - this.cv.getBoundingClientRect().left) / this.s;
    const wy = (cy) => (this.gy - (cy - this.cv.getBoundingClientRect().top)) / this.s;
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      const b = this.b;
      this.cv.setPointerCapture(e.pointerId);
      const x = wx(e.clientX); const y = wy(e.clientY);
      if (b.state === 'fly') { if (b.tap()) this.drag = null; return; }
      if (b.state === 'aim' && Math.hypot(x - ANCHOR.x, y - ANCHOR.y) < Math.max(3.2, 70 / this.s)) {
        this.drag = { id: e.pointerId, x, y }; this.stretchT = 0; return;
      }
      this.pan = { id: e.pointerId, x0: e.clientX, cam0: this.camX };
    });
    this.cv.addEventListener('pointermove', (e) => {
      if (this.drag && this.drag.id === e.pointerId) { this.drag.x = wx(e.clientX); this.drag.y = wy(e.clientY); }
      else if (this.pan && this.pan.id === e.pointerId) { this.camX = clamp(this.pan.cam0 - (e.clientX - this.pan.x0) / this.s, -2, this._maxCam()); this.manualCam = true; }
    });
    const up = (e) => {
      if (this.drag && this.drag.id === e.pointerId) {
        const d = this.drag; this.drag = null;
        const px = ANCHOR.x - d.x; const py = ANCHOR.y - d.y;
        if (this.b.launch(px, py)) { this.sound.play('twang'); this.manualCam = false; }
      }
      if (this.pan && this.pan.id === e.pointerId) this.pan = null;
    };
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.key === ' ' && this.mode === 'play') { e.preventDefault(); this.b.tap(); } };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _soundPill() { const pill = h('button', { class: 'vs-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  _persist() { this.save.muted = this.sound.muted; this.post({ type: 'save', save: this.save }); }

  // ----------------------------------------------------------------------------------------------------- screens
  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false);
    this.b = null; this.camX = 0;
    const stars = Object.values(this.save.stars).reduce((a, v) => a + v, 0);
    this.layer.append(h('div', { class: 'vs-dim' }, h('div', { class: 'vs-card' },
      h('div', { class: 'vs-logo' }, '🪓 ', I.t('title')), h('div', { class: 'vs-small' }, I.t('how')),
      h('div', { class: 'vs-row' }, h('div', { class: 'vs-pill' }, `🪙 ${I.num(this.save.gold)}`), h('div', { class: 'vs-pill' }, `⭐ ${I.num(stars)}`)),
      h('button', { class: 'vs-btn', onclick: () => { this.sound.play('tap'); this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1); } }, I.t('play')),
      h('div', { class: 'vs-row' }, h('button', { class: 'vs-btn dark', onclick: () => this.showLevels() }, I.t('levels')), h('button', { class: 'vs-btn dark', onclick: () => this.showShop() }, I.t('shop'))),
      h('button', { class: 'vs-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  showLevels() {
    this.layer.replaceChildren(); this.mode = 'menu';
    const grid = h('div', { class: 'vs-lvs' });
    LEVELS.forEach((lv, i) => {
      const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0;
      grid.append(h('button', { class: `vs-lv${lock ? ' lock' : ''}${i === LEVELS.length - 1 ? ' boss' : ''}`, 'aria-label': `${I.t('lvl')} ${i + 1}`, onclick: () => { if (!lock) this.startLevel(i); } },
        h('i', {}, lock ? '🔒' : i === LEVELS.length - 1 ? '👑' : I.num(i + 1)), h('span', {}, lock ? '' : '⭐'.repeat(st) + '☆'.repeat(3 - st))));
    });
    this.layer.append(h('div', { class: 'vs-dim' }, h('div', { class: 'vs-card' }, h('div', { class: 'vs-title' }, I.t('levels')), grid, h('button', { class: 'vs-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this._soundPill();
  }

  showShop() {
    this.layer.replaceChildren();
    const row = (kind, icon) => {
      const c = upgradeCost(this.save, kind);
      const can = c !== null && this.save.gold >= c;
      return h('div', { class: 'vs-shopitem' }, h('div', { class: 'vs-pill' }, `${icon} ${'●'.repeat(this.save.up[kind])}${'○'.repeat(3 - this.save.up[kind])}`),
        h('button', { class: `vs-btn${can ? '' : ' off'}`, onclick: () => { if (buyUpgrade(this.save, kind)) { this.sound.play('buy'); this._persist(); this.showShop(); } } }, `${I.t(kind)}  ${c === null ? I.t('max') : `🪙 ${I.num(c)}`}`));
    };
    this.layer.append(h('div', { class: 'vs-dim' }, h('div', { class: 'vs-card' }, h('div', { class: 'vs-title' }, I.t('shop')),
      h('div', { class: 'vs-pill' }, `🪙 ${I.num(this.save.gold)}`), row('power', '💪'), row('extra', '🪓'),
      h('button', { class: 'vs-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this._soundPill();
  }

  startLevel(i) {
    this.li = i;
    this.b = new Battle(i, { power: this.save.up.power, extra: this.save.up.extra, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.parts = []; this.floats = []; this.shown = false; this.drag = null; this.pan = null; this.manualCam = false;
    this.camX = this._maxCam(); this.holdT = 0.9; this.paused = false;
    this.layer.replaceChildren(); this.sound.setMode(true);
    this.goalEl = h('div', { class: 'vs-pill vs-gob' }, ''); this.goldEl = h('div', { class: 'vs-pill' }, '');
    this.queueEl = h('div', { class: 'vs-queue' });
    this.hintEl = h('div', { class: 'vs-hint' }, '');
    const back = h('button', { class: 'vs-round', 'aria-label': I.t('menu'), onclick: () => this.showPause() }, '☰');
    this.layer.append(h('div', { class: 'vs-top' }, back, this.goalEl, this.goldEl), h('div', { class: 'vs-lvl' }, `${i === LEVELS.length - 1 ? '\u{1F451} ' : ''}${I.t('lvlName')} ${I.num(i + 1)}`), this.hintEl, this.queueEl);
    this.firstRaid = !this.save.stars[i + 1];
    this._soundPill();
    this.lastQ = '';
  }

  showPause() {
    if (this.mode !== 'play') return;
    this.paused = true;
    const lv = LEVELS[this.li];
    const close = () => { this.paused = false; dim.remove(); };
    const dim = h('div', { class: 'vs-dim' }, h('div', { class: 'vs-card' }, h('div', { class: 'vs-title' }, I.getLang() === 'en' ? lv.en : lv.ar),
      h('button', { class: 'vs-btn', onclick: close }, I.t('resume')),
      h('div', { class: 'vs-row' }, h('button', { class: 'vs-btn alt', onclick: () => this.startLevel(this.li) }, I.t('restart')), h('button', { class: 'vs-btn dark', onclick: () => this.showLevels() }, I.t('levels')))));
    this.layer.append(dim);
  }

  _endCard(won) {
    this.shown = true;
    const b = this.b; const lv = LEVELS[this.li];
    const res = b.result();
    recordResult(this.save, this.li, res); if (won && this.firstRaid) this.save.gold += 45; // one-time bonus for the first win of a level
    this._persist();
    this.sound.play(won ? 'win' : 'lose');
    const hasNext = won && this.li + 1 < LEVELS.length;
    const kids = [h('div', { class: 'vs-title' }, won ? I.t('win') : I.t('lose'))];
    if (won) kids.push(h('div', { class: 'vs-small' }, I.t('win_m')), h('div', { class: 'vs-stars' }, ...[1, 2, 3].map((n) => h('span', { class: n <= b.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'vs-rows' },
        h('div', { class: 'vs-rw' }, h('span', {}, `\u{1F47A} ${I.t('goblins')}`), h('span', {}, `${I.num(b.goblinsTotal)}/${I.num(b.goblinsTotal)}`)),
        h('div', { class: 'vs-rw' }, h('span', {}, `\u{1FA99} ${I.t('plunder')}`), h('span', {}, `+${I.num(b.gold - (b.bonus || 0))}`)),
        h('div', { class: 'vs-rw' }, h('span', {}, `\u{1FA93} ${I.t('unused')}`), h('span', {}, `${I.num((b.bonus || 0) / 15)} \u00d7 ${I.num(15)}`)),
        this.firstRaid ? h('div', { class: 'vs-rw' }, h('span', {}, `\u{1F6A9} ${I.t('first')}`), h('span', {}, `+${I.num(45)}`)) : null));
    else kids.push(h('div', { class: 'vs-small' }, `${I.getLang() === 'en' ? lv.en : lv.ar}`), h('div', { class: 'vs-pill' }, `🪙 +${I.num(b.gold)}`));
    if (hasNext) kids.push(h('button', { class: 'vs-btn', onclick: () => this.startLevel(this.li + 1) }, I.t('next')));
    kids.push(h('div', { class: 'vs-row' }, h('button', { class: `vs-btn ${hasNext ? 'alt' : ''}`, onclick: () => this.startLevel(this.li) }, I.t('again')), h('button', { class: 'vs-btn dark', onclick: () => this.showLevels() }, I.t('levels'))));
    this.layer.append(h('div', { class: 'vs-dim' }, h('div', { class: 'vs-card' }, ...kids)));
  }

  // ----------------------------------------------------------------------------------------------------- loop
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play' && !this.paused) this._update(dt);
      else this._fx(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const b = this.b;
    for (const e of b.update(dt)) this._event(e);
    this._camera(dt);
    this._fx(dt);
    this.goalEl.textContent = `\u{1F47A} \u00d7 ${I.num(Math.max(0, b.goblinsLeft))}`;
    this.goldEl.textContent = `🪙 ${I.num(b.gold)}`;
    const q = `${b.cur}|${b.queue.join()}|${b.state}`;
    if (q !== this.lastQ) {
      this.lastQ = q;
      const BADGE = { bomb: '#d8402a', shield: '#2a78d8', giant: '#7a4a2a' };
      this.queueEl.replaceChildren(...b.queue.map((t, i) => h('div', { class: 'vs-qw' }, BADGE[t] && i >= b.cur ? h('div', { class: 'vs-qb', style: `background:${BADGE[t]}` }, I.t('kb_' + t)) : null, h('div', { class: `vs-q${i === b.cur && (b.state === 'aim') ? ' cur' : ''}${i < b.cur ? ' used' : ''}` }, VIKINGS[t].icon))));
      let hint = '';
      if (b.state === 'aim') hint = b.cur === 0 && b.shots === 0 ? I.t('aimHint') : I.t('kind_' + b.currentType);
      else if (b.state === 'fly') hint = I.t('tapHint');
      this.hintEl.textContent = hint; this.hintEl.classList.toggle('show', !!hint);
    }
    if (!this.shown && ((b.state === 'won' && b.winT > 1.4) || (b.state === 'lost' && b.settleT > 0.8))) this._endCard(b.state === 'won');
  }

  _camera(dt) {
    const b = this.b;
    if (this.holdT > 0) { this.holdT -= dt; if (this.pan || this.drag) this.holdT = 0; return; }
    if (this.drag || this.pan) return;
    let tx;
    const f = b.flight;
    if (b.state === 'fly' && f && f.body.alive) tx = f.body.x - this.W * 0.38;
    else if (b.state === 'settle' || b.state === 'won') {
      const gs = b.world.bodies.filter((o) => o.kind === 'goblin');
      const mx = gs.length ? gs.reduce((a, o) => a + o.x, 0) / gs.length : 18;
      tx = f && f.body.alive && f.t < 4 ? Math.max(f.body.x - this.W * 0.5, mx - this.W * 0.5) : mx - this.W * 0.55;
    } else tx = -1.5;
    if (this.manualCam && b.state === 'aim') return;
    tx = clamp(tx, -2, this._maxCam());
    this.camX += (tx - this.camX) * Math.min(1, dt * (b.state === 'fly' ? 6 : 2.4));
  }

  _event(e) {
    const P = (x, y, n, col, o = {}) => { for (let i = 0; i < n; i++) { if (this.parts.length > 320) break; const a = Math.random() * 6.283; const sp = (o.sp || 4) * (0.3 + Math.random()); this.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp + (o.up || 2), life: o.life || 0.9, max: o.life || 0.9, col: col[i % col.length], sz: (o.sz || 0.18) * (0.6 + Math.random() * 0.8), g: o.g ?? 14, kind: o.kind || 'sq', rot: Math.random() * 6 }); } };
    switch (e.t) {
      case 'break': {
        const cols = e.mat === 'wood' ? ['#b87a3a', '#8a5420', '#d49a58'] : e.mat === 'stone' ? ['#9aa0a8', '#6c727c', '#c4c8cc'] : ['#bff0ff', '#e8fbff', '#7ac8e8'];
        P(e.x, e.y, 10, cols, { sp: 5, sz: 0.22 }); this.sound.play(e.mat === 'wood' ? 'wood' : e.mat === 'stone' ? 'stone' : 'ice'); break;
      }
      case 'impact': {
        if (e.J > 3) { P(e.x, e.y, 3, ['#e8dcc0', '#c8b890'], { sp: 2.5, life: 0.5, sz: 0.14, g: 3, kind: 'dust' }); this.sound.impact(e.mat, e.J); }
        break;
      }
      case 'goblin': {
        P(e.x, e.y, 9, ['#ffe04a', '#fff', '#ffb02a'], { sp: 6, life: 1.1, sz: 0.3, g: 6, kind: 'star' });
        this.floats.push({ x: e.x, y: e.y + 0.6, t: 0, text: `+${I.num(e.gold)}` });
        this.sound.play('pop'); setTimeout(() => this.sound.play('coin'), 120); if (e.boss) this.shake = 0.6; break;
      }
      case 'boom': { this.sound.play('boom'); this.shake = 0.5; this.booms = (this.booms || []).concat([{ x: e.x, y: e.y, r: e.radius, t: 0 }]); P(e.x, e.y, 22, ['#ff8a2a', '#ffd23a', '#555', '#ff5a2a'], { sp: 9, life: 0.8, sz: 0.4, g: 2, kind: 'puff' }); break; }
      case 'vikingGone': P(e.x, e.y, 6, ['#fff'], { sp: 2, life: 0.5, sz: 0.3, g: -2, kind: 'puff' }); break;
      case 'ability': this.sound.play('dash'); P(e.x, e.y, 5, ['#fff', '#ffd23a'], { sp: 3, life: 0.4, sz: 0.2, g: 0, kind: 'puff' }); break;
      case 'launch': break;
      default: break;
    }
  }

  _fx(dt) {
    for (const p of this.parts) { p.life -= dt; p.vy -= p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += dt * 6; }
    this.parts = this.parts.filter((p) => p.life > 0 && p.y > -1);
    for (const f of this.floats) f.t += dt;
    this.floats = this.floats.filter((f) => f.t < 1.2);
    if (this.booms) { for (const o of this.booms) o.t += dt; this.booms = this.booms.filter((o) => o.t < 0.5); }
    this.shake = Math.max(0, this.shake - dt * 1.6);
  }

  // ----------------------------------------------------------------------------------------------------- drawing
  _sx(x) { return (x - this.camX) * this.s; }
  _sy(y) { return this.gy - y * this.s; }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const s = this.s;
    if (!this.sky) { const k = g.createLinearGradient(0, 0, 0, this.gy); k.addColorStop(0, '#5aaee8'); k.addColorStop(0.7, '#a8dcf6'); k.addColorStop(1, '#e8f6e0'); this.sky = k; }
    g.fillStyle = this.sky; g.fillRect(0, 0, W, H);
    const cam = this.camX;
    const skyP = ART.sky_meadow;
    if (skyP) { const k = Math.max(W * 1.12 / skyP.naturalWidth, this.gy / skyP.naturalHeight); const dw = skyP.naturalWidth * k; const dh = skyP.naturalHeight * k; const off = Math.min(W * 0.06, Math.max(0, cam * 0.04 * s)); g.drawImage(skyP, -(dw - W) / 2 - off, this.gy - dh, dw, dh); }
    // sun
    if (!skyP) { g.fillStyle = '#fff6b0'; g.beginPath(); g.arc(W * 0.8, H * 0.14, Math.min(W, H) * 0.07, 0, 6.3); g.fill(); }
    // clouds
    g.fillStyle = 'rgba(255,255,255,.85)';
    for (let i = 0; i < (skyP ? 0 : 6); i++) { const x = ((i * 9.3 - cam * 0.12 + this.clock * 0.15) % 60 + 60) % 60 - 6; const y = 2.8 + (i % 3) * 2.2; this._cloud(g, x * s, this.gy - (6 + y * 1.5) * s, s * (1.4 + (i % 2) * 0.5)); }
    // mountains and hills (parallax)
    if (!skyP) { this._ridge(g, cam * 0.2, '#8aa8c8', 7, 5.5, 0.35, 3.1); this._ridge(g, cam * 0.4, '#6c9a78', 5, 3.2, 0.55, 1.7); }
    this._ridge(g, cam * 0.7, '#58a050', 3, 1.6, 0.9, 0.9);
    const tp = ART.tree_pine;
    if (tp) for (let i = 0; i < 14; i++) { const wx = i * 5.3 + (i % 3) * 0.7; const px = (((wx - cam * 0.7) % 74) + 74) % 74 - 6; const th = (2.6 + (i % 4) * 0.5) * s; const tw = th * tp.naturalWidth / tp.naturalHeight; g.drawImage(tp, px * s - tw / 2, this.gy - th * 0.92, tw, th); }
    const sh = this.shake > 0 ? (Math.random() - 0.5) * this.shake * 10 : 0;
    g.save(); g.translate(sh, sh * 0.6);
    // ground
    const gy = this.gy;
    g.fillStyle = '#5ab048'; g.fillRect(-20, gy, W + 40, H - gy + 20);
    g.fillStyle = '#7ad060'; g.fillRect(-20, gy, W + 40, s * 0.35);
    g.fillStyle = '#7a5a3a'; g.fillRect(-20, gy + s * 0.9, W + 40, H);
    g.fillStyle = '#6a4a2a'; for (let i = 0; i < 40; i++) { const x = (((i * 7.7 - cam) % 60) + 60) % 60; g.fillRect(this._sx(x + cam - (cam % 60) * 0) % (W + 40), gy + s * (1.2 + (i % 3) * 0.5), s * 0.5, s * 0.18); }
    const b = this.b;
    if (b && this.mode === 'play') {
      this._sling(g, true);
      for (const o of b.world.bodies) if (o.kind === 'ground' && o.mat === 'stone') this._ledge(g, o);
      for (const o of b.world.bodies) if (o.kind === 'block') this._block(g, o);
      for (const o of b.world.bodies) if (o.kind === 'goblin') this._goblin(g, o);
      for (const o of b.world.bodies) if (o.kind === 'viking') this._viking(g, o.x, o.y, o.r, b.flight ? b.flight.type : 'axe', o.a, 1);
      this._aim(g);
      this._sling(g, false);
      for (const p of this.parts) this._part(g, p);
      if (this.booms) for (const o of this.booms) { g.strokeStyle = `rgba(255,200,80,${1 - o.t * 2})`; g.lineWidth = s * 0.3; g.beginPath(); g.arc(this._sx(o.x), this._sy(o.y), o.r * s * Math.min(1, o.t * 4), 0, 6.3); g.stroke(); }
      g.textAlign = 'center'; g.font = `900 ${Math.max(14, s * 0.9)}px Tajawal, system-ui`;
      for (const f of this.floats) { g.globalAlpha = 1 - f.t / 1.2; g.fillStyle = '#ffd23a'; g.strokeStyle = 'rgba(70,40,0,.9)'; g.lineWidth = s * 0.14; const tx = this._sx(f.x); const ty = this._sy(f.y) - f.t * s * 1.6; g.strokeText(f.text, tx, ty); g.fillText(f.text, tx, ty); }
      g.globalAlpha = 1;
    } else { this._sling(g, true); this._sling(g, false); this._viking(g, ANCHOR.x + 8, 0.5, 0.6, 'axe', 0, 1); }
    g.restore();
  }

  _cloud(g, x, y, r) { g.beginPath(); g.arc(x, y, r, 0, 6.3); g.arc(x + r * 1.1, y - r * 0.3, r * 1.2, 0, 6.3); g.arc(x + r * 2.3, y, r, 0, 6.3); g.rect(x, y, r * 2.3, r); g.fill(); }

  _ridge(g, off, col, period, hgt, par, base) {
    const s = this.s; g.fillStyle = col; g.beginPath(); g.moveTo(0, this.gy);
    for (let x = 0; x <= this.cw + 20; x += 20) { const wx = (x + off * s) / s; const y = base + hgt * 0.5 * (Math.sin(wx / period * 2.2) * 0.5 + Math.sin(wx / period * 5.1 + 1) * 0.25 + 0.75) * par; g.lineTo(x, this.gy - y * s); }
    g.lineTo(this.cw + 20, this.gy); g.closePath(); g.fill();
  }

  _ledge(g, o) { const s = this.s; g.fillStyle = '#8a8f98'; g.fillRect(this._sx(o.x - o.hw), this._sy(o.y + o.hh), o.hw * 2 * s, o.hh * 2 * s); }

  _sling(g, back) {
    const s = this.s; const ax = this._sx(ANCHOR.x); const ay = this._sy(ANCHOR.y);
    const post = (dx, col, w) => { g.strokeStyle = col; g.lineCap = 'round'; g.lineWidth = w; g.beginPath(); g.moveTo(ax, this.gy); g.lineTo(ax + dx * s * 0.2, ay + s * 0.9); g.lineTo(ax + dx * s * 0.62, ay - s * 0.15); g.stroke(); };
    const d = this.drag ? { x: this._sx(this._clampPull(this.drag).x), y: this._sy(this._clampPull(this.drag).y) } : { x: ax, y: ay };
    const queued = this.b && this.b.state === 'aim' && this.b.currentType;
    if (back) {
      post(1, '#6a4020', s * 0.55);
      g.strokeStyle = '#3a1a08'; g.lineWidth = s * 0.28; g.beginPath(); g.moveTo(ax + s * 0.62, ay - s * 0.15); g.lineTo(d.x, d.y); g.stroke();
    } else {
      post(-1, '#8a5a30', s * 0.62);
      if (queued) this._viking(g, this._clampPull(this.drag || { x: ANCHOR.x, y: ANCHOR.y }).x, this._clampPull(this.drag || { x: ANCHOR.x, y: ANCHOR.y }).y, VIKINGS[queued].r, queued, 0, 1);
      g.strokeStyle = '#3a1a08'; g.lineWidth = s * 0.28; g.beginPath(); g.moveTo(ax - s * 0.62, ay - s * 0.15); g.lineTo(d.x, d.y); g.stroke();
    }
  }

  _clampPull(d) {
    const dx = d.x - ANCHOR.x; const dy = d.y - ANCHOR.y; const l = Math.hypot(dx, dy);
    if (l <= MAX_PULL) return { x: d.x, y: Math.max(0.5, d.y) };
    return { x: ANCHOR.x + dx / l * MAX_PULL, y: Math.max(0.5, ANCHOR.y + dy / l * MAX_PULL) };
  }

  _aim(g) {
    if (!this.drag || !this.b || this.b.state !== 'aim') return;
    const p = this._clampPull(this.drag);
    const pts = this.b.trajectory(ANCHOR.x - p.x, ANCHOR.y - p.y, 16, 0.11);
    for (let i = 0; i < pts.length; i++) { if (pts[i].y < 0) break; g.fillStyle = `rgba(255,255,255,${0.9 - i * 0.045})`; g.beginPath(); g.arc(this._sx(pts[i].x), this._sy(pts[i].y), Math.max(2.5, this.s * 0.13 * (1 - i * 0.03)), 0, 6.3); g.fill(); }
  }

  _block(g, o) {
    const s = this.s; const x = this._sx(o.x); const y = this._sy(o.y); const w = o.hw * 2 * s; const hh = o.hh * 2 * s;
    g.save(); g.translate(x, y); g.rotate(-o.a);
    const hurt = 1 - Math.max(0, o.hp) / o.maxHp;
    if (o.mat === 'wood') {
      g.fillStyle = '#c88a48'; g.strokeStyle = '#6a3a14'; g.lineWidth = Math.max(1.5, s * 0.07); g.beginPath(); g.roundRect(-w / 2, -hh / 2, w, hh, s * 0.08); g.fill(); g.stroke();
      g.strokeStyle = 'rgba(100,55,20,.55)'; g.lineWidth = Math.max(1, s * 0.04);
      const horiz = w >= hh; const n = Math.max(1, Math.round((horiz ? hh : w) / (s * 0.22)));
      for (let i = 1; i < n; i++) { g.beginPath(); if (horiz) { const yy = -hh / 2 + hh * i / n; g.moveTo(-w / 2 + s * 0.1, yy); g.lineTo(w / 2 - s * 0.1, yy); } else { const xx = -w / 2 + w * i / n; g.moveTo(xx, -hh / 2 + s * 0.1); g.lineTo(xx, hh / 2 - s * 0.1); } g.stroke(); }
      g.fillStyle = '#4a2a10'; const nl = (px, py) => { g.beginPath(); g.arc(px, py, s * 0.05, 0, 6.3); g.fill(); };
      if (horiz) { nl(-w / 2 + s * 0.16, 0); nl(w / 2 - s * 0.16, 0); } else { nl(0, -hh / 2 + s * 0.16); nl(0, hh / 2 - s * 0.16); }
    } else if (o.mat === 'stone') {
      g.fillStyle = '#a4aab2'; g.strokeStyle = '#4e545e'; g.lineWidth = Math.max(1.5, s * 0.08); g.beginPath(); g.roundRect(-w / 2, -hh / 2, w, hh, s * 0.1); g.fill(); g.stroke();
      g.strokeStyle = 'rgba(70,76,86,.55)'; g.lineWidth = Math.max(1, s * 0.05);
      if (w > s * 1.1) { g.beginPath(); g.moveTo(0, -hh / 2); g.lineTo(0, 0); g.moveTo(-w / 4, 0); g.lineTo(-w / 4, hh / 2); g.moveTo(-w / 2, 0); g.lineTo(w / 2, 0); g.stroke(); }
      g.fillStyle = 'rgba(255,255,255,.28)'; g.fillRect(-w / 2 + s * 0.08, -hh / 2 + s * 0.08, w - s * 0.16, Math.min(s * 0.14, hh * 0.2));
    } else {
      g.fillStyle = 'rgba(150,224,250,.88)'; g.strokeStyle = '#4a9cc8'; g.lineWidth = Math.max(1.5, s * 0.07); g.beginPath(); g.roundRect(-w / 2, -hh / 2, w, hh, s * 0.1); g.fill(); g.stroke();
      g.fillStyle = 'rgba(255,255,255,.65)'; g.beginPath(); g.moveTo(-w / 2 + s * 0.12, -hh / 2 + s * 0.12); g.lineTo(-w / 2 + Math.min(w * 0.5, s * 0.7), -hh / 2 + s * 0.12); g.lineTo(-w / 2 + s * 0.12, -hh / 2 + Math.min(hh * 0.6, s * 0.7)); g.fill();
    }
    const tx = ART[o.mat === 'wood' ? 'tex_wood' : o.mat === 'stone' ? 'tex_stone' : 'tex_ice'];
    if (tx) {
      const tw = tx.naturalWidth; const th = tx.naturalHeight; const asp = w / hh; let cw = tw; let ch = cw / asp; if (ch > th) { ch = th; cw = ch * asp; }
      const ox = ((o.id || 0) * 97) % Math.max(1, tw - cw); const oy = ((o.id || 0) * 53) % Math.max(1, th - ch);
      g.save(); g.beginPath(); g.roundRect(-w / 2, -hh / 2, w, hh, s * 0.08); g.clip(); g.globalAlpha = o.mat === 'ice' ? 0.8 : 0.92; g.drawImage(tx, ox, oy, cw, ch, -w / 2, -hh / 2, w, hh); g.globalAlpha = 1; g.restore();
      g.strokeStyle = o.mat === 'wood' ? '#5a2e0e' : o.mat === 'stone' ? '#3e444e' : '#3a86b0'; g.lineWidth = Math.max(1.5, s * 0.07); g.beginPath(); g.roundRect(-w / 2, -hh / 2, w, hh, s * 0.08); g.stroke();
    }
    if (hurt > 0.25) {
      g.strokeStyle = 'rgba(30,20,10,.65)'; g.lineWidth = Math.max(1, s * 0.05); g.beginPath();
      const cr = hurt > 0.6 ? 3 : 2;
      for (let i = 0; i < cr; i++) { const px = (-0.3 + 0.3 * i) * w; g.moveTo(px, -hh / 2); g.lineTo(px + s * 0.1, -hh * 0.1); g.lineTo(px - s * 0.08, hh * 0.15); g.lineTo(px + s * 0.1, hh / 2); }
      g.stroke();
    }
    g.restore();
  }

  _goblin(g, o) {
    const s = this.s; const x = this._sx(o.x); const y = this._sy(o.y); const r = o.r * s; const k = o.tag || 'g';
    const hurt = this.b.world.time - o.lastHit < 0.5;
    g.save(); g.translate(x, y); g.rotate(-o.a * 0.6);
    const gp = k === 'boss' ? ART.gob_boss : k === 'h' ? ART.gob_helm : ART.gob;
    if (gp) {
      const w = r * (k === 'boss' ? 3.1 : 3.3); const hh = w * gp.naturalHeight / gp.naturalWidth;
      if (hurt) g.filter = 'brightness(1.45) saturate(.8)';
      g.drawImage(gp, -w / 2, -hh / 2, w, hh); g.filter = 'none';
      if (k === 'boss') { const hp = Math.max(0, o.hp) / o.maxHp; g.restore(); g.save(); g.translate(x, y - r * 1.9); g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect(-r * 0.9, 0, r * 1.8, s * 0.22); g.fillStyle = hp > 0.5 ? '#5af08a' : '#f0a02a'; g.fillRect(-r * 0.9, 0, r * 1.8 * hp, s * 0.22); }
      g.restore(); return;
    }
    // ears
    g.fillStyle = '#6cb83a'; g.strokeStyle = '#2a5a14'; g.lineWidth = Math.max(1.5, s * 0.07);
    for (const sx of [-1, 1]) { g.beginPath(); g.moveTo(sx * r * 0.7, -r * 0.2); g.lineTo(sx * r * 1.55, -r * 0.75); g.lineTo(sx * r * 0.95, r * 0.25); g.closePath(); g.fill(); g.stroke(); }
    g.fillStyle = k === 'boss' ? '#4aa04a' : '#7ccc42'; g.beginPath(); g.arc(0, 0, r, 0, 6.3); g.fill(); g.stroke();
    // eyes
    const bl = (Math.sin(this.clock * 2 + o.id) > 0.97);
    g.fillStyle = '#fff';
    for (const sx of [-1, 1]) { g.beginPath(); g.ellipse(sx * r * 0.36, -r * 0.15, r * 0.24, bl ? r * 0.04 : hurt ? r * 0.3 : r * 0.26, 0, 0, 6.3); g.fill(); }
    g.fillStyle = '#2a1a08';
    for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * r * 0.36 + r * 0.04, -r * 0.13, r * 0.11, 0, 6.3); g.fill(); }
    // mouth
    g.strokeStyle = '#2a5a14'; g.lineWidth = Math.max(1.5, s * 0.06); g.beginPath();
    if (hurt) g.arc(0, r * 0.45, r * 0.18, 0, 6.3); else g.arc(0, r * 0.18, r * 0.38, 0.2, Math.PI - 0.2);
    g.stroke();
    g.fillStyle = '#fff'; if (!hurt) { g.fillRect(-r * 0.2, r * 0.42, r * 0.12, r * 0.14); g.fillRect(r * 0.08, r * 0.42, r * 0.12, r * 0.14); }
    if (k === 'h') { g.fillStyle = '#8a8f98'; g.strokeStyle = '#3a3f48'; g.beginPath(); g.arc(0, -r * 0.25, r * 1.02, Math.PI * 1.08, Math.PI * 1.92); g.closePath(); g.fill(); g.stroke(); g.fillStyle = '#b8bcc4'; g.fillRect(-r * 0.12, -r * 1.25, r * 0.24, r * 0.4); }
    if (k === 'boss') {
      g.fillStyle = '#ffd23a'; g.strokeStyle = '#8a5a00'; g.beginPath(); g.moveTo(-r * 0.7, -r * 0.8); g.lineTo(-r * 0.7, -r * 1.5); g.lineTo(-r * 0.35, -r * 1.1); g.lineTo(0, -r * 1.65); g.lineTo(r * 0.35, -r * 1.1); g.lineTo(r * 0.7, -r * 1.5); g.lineTo(r * 0.7, -r * 0.8); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#e8404a'; g.beginPath(); g.arc(0, -r * 1.0, r * 0.1, 0, 6.3); g.fill();
      const hp = Math.max(0, o.hp) / o.maxHp; g.restore(); g.save(); g.translate(x, y - r * 1.9);
      g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect(-r * 0.9, 0, r * 1.8, s * 0.22); g.fillStyle = hp > 0.5 ? '#5af08a' : '#f0a02a'; g.fillRect(-r * 0.9, 0, r * 1.8 * hp, s * 0.22);
    }
    g.restore();
  }

  _viking(g, wx, wy, wr, type, ang, sc) {
    const s = this.s; const x = this._sx(wx); const y = this._sy(wy); const r = wr * s * sc;
    g.save(); g.translate(x, y); g.rotate(-ang * 0.35);
    const giant = type === 'giant';
    const vp = ART['vik_' + type] || (type === 'axe' ? null : ART.vik_axe);
    if (vp) { const w = r * 2.9; const hh = w * vp.naturalHeight / vp.naturalWidth; g.drawImage(vp, -w / 2, -hh / 2 - r * 0.1, w, hh); g.restore(); return; }
    g.lineWidth = Math.max(1.5, s * 0.07); g.strokeStyle = '#4a2a10';
    // face
    g.fillStyle = giant ? '#e8a878' : '#f6c898'; g.beginPath(); g.arc(0, 0, r, 0, 6.3); g.fill(); g.stroke();
    if (giant) { g.strokeStyle = '#3a7ad8'; g.lineWidth = s * 0.12; g.beginPath(); g.moveTo(-r * 0.6, -r * 0.1); g.lineTo(-r * 0.2, -r * 0.35); g.moveTo(r * 0.6, -r * 0.1); g.lineTo(r * 0.2, -r * 0.35); g.stroke(); g.strokeStyle = '#4a2a10'; g.lineWidth = Math.max(1.5, s * 0.07); }
    // beard
    const bc = type === 'bomb' ? '#3a3a44' : giant ? '#e0701a' : type === 'shield' ? '#d8b040' : '#d8501a';
    g.fillStyle = bc; g.beginPath(); g.moveTo(-r * 0.92, r * 0.1); g.quadraticCurveTo(-r * 0.7, r * 1.25, 0, r * 1.2); g.quadraticCurveTo(r * 0.7, r * 1.25, r * 0.92, r * 0.1); g.quadraticCurveTo(0, r * 0.45, -r * 0.92, r * 0.1); g.fill(); g.stroke();
    // eyes
    g.fillStyle = '#fff'; for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * r * 0.34, -r * 0.14, r * 0.2, 0, 6.3); g.fill(); }
    g.fillStyle = '#1a1208'; for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * r * 0.34 + r * 0.05, -r * 0.12, r * 0.1, 0, 6.3); g.fill(); }
    g.strokeStyle = '#4a2a10'; g.lineWidth = Math.max(1.5, s * 0.08); g.beginPath(); g.moveTo(-r * 0.6, -r * 0.45); g.lineTo(-r * 0.15, -r * 0.34); g.moveTo(r * 0.6, -r * 0.45); g.lineTo(r * 0.15, -r * 0.34); g.stroke();
    g.fillStyle = 'rgba(255,120,120,.5)'; for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * r * 0.62, r * 0.1, r * 0.16, 0, 6.3); g.fill(); }
    // helmet and horns
    g.lineWidth = Math.max(1.5, s * 0.07); g.strokeStyle = '#2a2a34';
    g.fillStyle = type === 'bomb' ? '#2a2a32' : giant ? '#7a8ab0' : '#a8b0c0'; g.beginPath(); g.arc(0, -r * 0.1, r * 1.03, Math.PI * 1.05, Math.PI * 1.95); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#f4ecd0'; g.strokeStyle = '#8a7a50';
    for (const sx of [-1, 1]) { g.beginPath(); g.moveTo(sx * r * 0.85, -r * 0.55); g.quadraticCurveTo(sx * r * 1.7, -r * 0.5, sx * r * 1.5, -r * 1.4); g.quadraticCurveTo(sx * r * 1.25, -r * 0.8, sx * r * 0.7, -r * 0.8); g.closePath(); g.fill(); g.stroke(); }
    g.fillStyle = '#d8d8e0'; g.fillRect(-r * 0.09, -r * 1.08, r * 0.18, r * 0.5);
    if (type === 'bomb') { g.strokeStyle = '#4a2a10'; g.lineWidth = s * 0.08; g.beginPath(); g.moveTo(0, -r * 1.05); g.quadraticCurveTo(r * 0.3, -r * 1.5, r * 0.5, -r * 1.35); g.stroke(); g.fillStyle = Math.sin(this.clock * 20) > 0 ? '#ffd23a' : '#ff6a1a'; g.beginPath(); g.arc(r * 0.5, -r * 1.38, r * 0.16, 0, 6.3); g.fill(); }
    if (type === 'shield') { g.fillStyle = '#b87a3a'; g.strokeStyle = '#6a3a14'; g.lineWidth = Math.max(1.5, s * 0.08); g.beginPath(); g.arc(r * 0.15, r * 0.5, r * 0.62, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#e8d870'; g.beginPath(); g.arc(r * 0.15, r * 0.5, r * 0.2, 0, 6.3); g.fill(); g.stroke(); }
    g.restore();
  }

  _part(g, p) {
    const s = this.s; const x = this._sx(p.x); const y = this._sy(p.y); const a = Math.max(0, p.life / p.max);
    g.globalAlpha = Math.min(1, a * 1.5); g.fillStyle = p.col;
    if (p.kind === 'star') { g.save(); g.translate(x, y); g.rotate(p.rot); g.beginPath(); for (let i = 0; i < 5; i++) { const an = i * 1.2566 - 1.57; g.lineTo(Math.cos(an) * p.sz * s, Math.sin(an) * p.sz * s); const an2 = an + 0.628; g.lineTo(Math.cos(an2) * p.sz * s * 0.42, Math.sin(an2) * p.sz * s * 0.42); } g.closePath(); g.fill(); g.restore(); }
    else if (p.kind === 'puff' || p.kind === 'dust') { g.beginPath(); g.arc(x, y, p.sz * s * (1.6 - a * 0.6), 0, 6.3); g.fill(); }
    else { g.save(); g.translate(x, y); g.rotate(p.rot); g.fillRect(-p.sz * s / 2, -p.sz * s / 2, p.sz * s, p.sz * s * 0.6); g.restore(); }
    g.globalAlpha = 1;
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

void GOBLINS;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.VikingSling = api;
export default api;

