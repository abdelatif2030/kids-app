// «اسحب الدبوس» — Pull the Pin. Entry: window.PinPuzzle.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A physics puzzle in a wooden cabinet: candies rest on golden pins. Tap or drag a pin out, the candies fall, and the jar at the
// bottom must be filled to the goal. Some pins let the candies fall into the lava, and some hold a ramp up. Undo, restart, hint,
// twelve levels with three stars. 2D canvas, all art and sound made in code.
import { Puzzle, LEVELS, W, H, R, JAR, slide, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['اسحب الدبوس', 'Pull the Pin'], play: ['يلا نلعب', 'Play'], levels: ['المراحل', 'Levels'], exit: ['خروج', 'Exit'],
  menu: ['القائمة', 'Menu'], resume: ['كمّل', 'Resume'], paused: ['استراحة', 'Paused'], again: ['من الأول', 'Try again'], next: ['المرحلة الجاية', 'Next level'],
  how: ['اسحب الدبوس الدهبي عشان الحلويات تنزل في البرطمان. خلي بالك من الحمم!', 'Pull the golden pins so the candies drop into the jar. Watch out for the lava!'],
  tip1: ['اضغط على الدبوس الدهبي واسحبه', 'Tap the golden pin and pull it out'], tip2: ['الحمم الحمرا تحرق الحلويات: متسحبش دبوسها!', 'Lava burns candies: leave its pin alone!'],
  level: ['مرحلة', 'Level'], goal: ['الهدف', 'Goal'], undo: ['ارجع', 'Undo'], hint: ['تلميح', 'Hint'], restart: ['من الأول', 'Restart'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], winText: ['البرطمان اتملى حلويات!', 'The jar is full of candies!'],
  fail: ['ماحصلش! الحلويات مش هتكفّي', 'Oh no! Not enough candies left'], failText: ['ارجع خطوة أو ابدأ من الأول', 'Undo a move or start again'],
  moves: ['سحبات', 'Moves'], lost: ['وقعت في الحمم', 'Lost in lava'],
};
const I = makeI18n(S);

const CANDY = [['#ff9ab0', '#e0345a'], ['#ffe27a', '#f0a010'], ['#8ef0a0', '#20a850'], ['#8ad4ff', '#2078e0'], ['#d0a0ff', '#8040d8'], ['#ffb27a', '#f06a1a']];
const VX0 = -0.9; const VX1 = 16.9; const VY0 = -1.5; const VY1 = 10.2;
const CSS = css('pp', '#ff9a3a', '#e0602a', '#ffd23a') + `
.pp-root{background:#bfe6ff}
.pp-tip{position:absolute;left:50%;bottom:calc(var(--u)*2);transform:translateX(-50%);background:rgba(60,30,10,.8);border:calc(var(--u)*.4) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);padding:calc(var(--u)*1) calc(var(--u)*4);max-width:92%;text-align:center;pointer-events:none;opacity:0;transition:opacity .4s}
.pp-tip.show{opacity:1}
.pp-sbtn{display:flex;gap:calc(var(--u)*1.4)}
.pp-round[disabled]{opacity:.4}
.pp-acts{display:flex;flex-direction:column;gap:calc(var(--u)*1.8);width:100%}
@media (orientation:landscape){.pp-lvs{grid-template-columns:repeat(6,1fr)}.pp-acts{flex-direction:row}.pp-acts .pp-btn{flex:1;width:auto;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1) calc(var(--u)*2);min-height:calc(var(--u)*9)}.pp-stars{font-size:calc(var(--u)*7)}.pp-title{font-size:calc(var(--u)*6)}.pp-card{gap:calc(var(--u)*1.2);padding:calc(var(--u)*2.4) calc(var(--u)*4)}.pp-logo{font-size:calc(var(--u)*7)}}
.pp-mid{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);flex:1;min-width:0;padding:0 calc(var(--u)*1.5)}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('pp-style')) document.head.append(h('style', { id: 'pp-style' }, CSS));
    this.root = h('div', { class: 'pp-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'pp-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.p = null; this.drag = null; this.hintId = 0; this.acc = 0; this.bg = null; this.sprites = null;
    this.puzzleLevel = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
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
    this.u = Math.min(this.cw, this.ch * 1.1) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this.s = Math.min(this.cw / (VX1 - VX0), this.ch / (VY1 - VY0));
    this.ox = (this.cw - (VX1 - VX0) * this.s) / 2 - VX0 * this.s;
    this.oy = (this.ch - (VY1 - VY0) * this.s) / 2 - VY0 * this.s;
    this.bg = null; this.sprites = null;
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => this._down(e));
    this.cv.addEventListener('pointermove', (e) => this._move(e));
    const up = (e) => this._up(e);
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', () => { if (this.drag) { this.drag = null; } });
    this._onKey = (e) => {
      if (this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      if (k === 'z') this.undo(); else if (k === 'r') this.restart(); else if (k === 'h') this.showHint();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _world(e) { const r = this.cv.getBoundingClientRect(); return [(e.clientX - r.left - this.ox) / this.s, (e.clientY - r.top - this.oy) / this.s]; }

  /** The picture of a pin: a handle ring outside, the rod, and the tip. Returns the segment a finger can grab. */
  _pinGeom(p) {
    const dx = p.bx - p.ax; const dy = p.by - p.ay; const len = Math.hypot(dx, dy);
    const ux = dx / len; const uy = dy / len;
    const off = p.pulled ? len * slide(p) + 0.01 : (p.drag || 0) * len;
    const hx = p.ax - ux * 0.6; const hy = p.ay - uy * 0.6; // the handle ring centre
    return { ux, uy, len, off, x1: hx - ux * off, y1: hy - uy * off, x2: p.bx - ux * off, y2: p.by - uy * off, hx: hx - ux * off, hy: hy - uy * off };
  }

  _down(e) {
    if (this.mode !== 'play' || !this.p || this.p.state !== 'play') return;
    const [x, y] = this._world(e);
    let best = null; let bd = 0.85;
    for (const p of this.p.pins) {
      if (p.pulled) continue;
      const g = this._pinGeom(p);
      const dx = g.x2 - g.x1; const dy = g.y2 - g.y1; const l2 = dx * dx + dy * dy;
      const t = Math.max(0, Math.min(1, ((x - g.x1) * dx + (y - g.y1) * dy) / l2));
      let d = Math.hypot(x - (g.x1 + dx * t), y - (g.y1 + dy * t));
      d = Math.min(d, Math.hypot(x - g.hx, y - g.hy) - 0.25);
      if (d < bd) { bd = d; best = p; }
    }
    if (!best) return;
    this.cv.setPointerCapture(e.pointerId);
    this.drag = { id: e.pointerId, pin: best, x0: x, y0: y, out: 0, moved: 0 };
  }

  _move(e) {
    if (!this.drag || this.drag.id !== e.pointerId) return;
    const [x, y] = this._world(e);
    const p = this.drag.pin; const g = this._pinGeom(p);
    const out = -((x - this.drag.x0) * g.ux + (y - this.drag.y0) * g.uy);
    this.drag.out = out; this.drag.moved = Math.max(this.drag.moved, Math.hypot(x - this.drag.x0, y - this.drag.y0));
    p.drag = Math.max(0, Math.min(0.6, out / g.len));
  }

  _up(e) {
    const d = this.drag;
    if (!d || d.id !== e.pointerId) return;
    this.drag = null;
    const go = d.moved < 0.3 || d.out > 0.5;
    if (go) this._pull(d.pin); else this._spring(d.pin);
  }

  _spring(pin) { const f = () => { pin.drag = (pin.drag || 0) * 0.75; if (pin.drag > 0.005 && !pin.pulled && this.root.isConnected) requestAnimationFrame(f); else pin.drag = 0; }; f(); }

  _pull(pin) {
    if (!this.p || !this.p.pull(pin.id)) { pin.drag = 0; return; }
    pin.drag = 0; this.hintId = 0;
    this.sound.play('pull'); this._buttons();
  }

  undo() { if (this.p && this.p.state === 'play' && this.p.undo()) { this.sound.play('undo'); this.fx = []; this.hintId = 0; this._buttons(); } else if (this.p && this.p.state === 'failed') { this.layer.querySelector('.pp-dim')?.remove(); this.p.state = 'play'; if (this.p.undo()) this.sound.play('undo'); this._buttons(); } }
  restart() { this.startLevel(this.puzzleLevel); }
  showHint() { if (!this.p || this.p.state !== 'play') return; this.hintId = this.p.hint(); this.hintT = this.clock; this.sound.play('hint'); }

  _soundPill() { const pill = h('button', { class: 'pp-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.p = null; this.layer.replaceChildren(); this.sound.setMode(false);
    this.demo = new Puzzle({ level: 0 });
    this.layer.append(h('div', { class: 'pp-dim' }, h('div', { class: 'pp-card' },
      h('div', { class: 'pp-logo' }, '📌 ', I.t('title')), h('div', { class: 'pp-small' }, I.t('how')),
      h('button', { class: 'pp-btn', onclick: () => { this.sound.play('tap'); this.startLevel(Math.min(this.save.unlocked, LEVELS) - 1); } }, I.t('play')),
      h('button', { class: 'pp-btn alt', onclick: () => this.showLevels() }, I.t('levels')),
      h('button', { class: 'pp-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  showLevels() {
    this.layer.replaceChildren();
    const grid = h('div', { class: 'pp-lvs' });
    for (let i = 1; i <= LEVELS; i++) {
      const open = i <= this.save.unlocked; const st = this.save.stars[i] || 0;
      grid.append(h('button', { class: `pp-lv${open ? '' : ' lock'}`, disabled: open ? null : true, 'aria-label': `${I.t('level')} ${I.num(i)}`, onclick: () => { this.sound.play('tap'); this.startLevel(i - 1); } },
        h('i', {}, open ? I.num(i) : '🔒'), h('span', {}, h('b', { style: 'color:#ffd23a;font-weight:900' }, '★'.repeat(st)), h('b', { style: 'opacity:.45;font-weight:900' }, '★'.repeat(open ? 3 - st : 0)))));
    }
    this.layer.append(h('div', { class: 'pp-dim' }, h('div', { class: 'pp-card' }, h('div', { class: 'pp-title' }, I.t('levels')), grid, h('button', { class: 'pp-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
    this._soundPill();
  }

  startLevel(i) {
    this.puzzleLevel = Math.max(0, Math.min(LEVELS - 1, i));
    this.p = new Puzzle({ level: this.puzzleLevel });
    this.mode = 'play'; this.fx = []; this.hintId = 0; this.acc = 0; this.bg = null; this.idle = 0; this.drag = null;
    this.layer.replaceChildren(); this.sound.setMode(true);
    this.cntEl = h('span', {}, ''); this.barEl = h('b', { style: 'width:0%' });
    const btn = (cls, label, txt, fn) => h('button', { class: `pp-round ${cls}`, 'aria-label': label, onclick: () => { fn(); } }, txt);
    this.undoBtn = btn('', I.t('undo'), '↶', () => this.undo());
    this.layer.append(h('div', { class: 'pp-top' },
      h('div', { class: 'pp-sbtn' }, btn('', I.t('menu'), '☰', () => this.showPause()), btn('', I.t('restart'), '↻', () => this.restart()), this.undoBtn),
      h('div', { class: 'pp-mid' }, h('div', { class: 'pp-pill' }, `${I.t('level')} ${I.num(this.puzzleLevel + 1)}`, ' · ', this.cntEl), h('div', { class: 'pp-bar', style: 'width:100%' }, this.barEl)),
      h('div', { class: 'pp-sbtn' }, btn('', I.t('hint'), '💡', () => this.showHint()), btn('', 'sound', this.sound.muted ? '🔇' : '🔊', () => { this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this.post({ type: 'save', save: this.save }); this.soundBtn.textContent = this.sound.muted ? '🔇' : '🔊'; }))));
    this.soundBtn = this.layer.querySelectorAll('.pp-sbtn')[1].lastChild;
    this.tipEl = h('div', { class: 'pp-tip' }, '');
    this.layer.append(this.tipEl);
    if (this.puzzleLevel === 0) this._tip(I.t('tip1')); else if (this.puzzleLevel === 1) this._tip(I.t('tip2'));
    this._buttons(); this._soundPill();
  }

  _tip(t) { this.tipEl.textContent = t; this.tipEl.classList.add('show'); clearTimeout(this._tipT); this._tipT = setTimeout(() => this.tipEl && this.tipEl.classList.remove('show'), 6000); }
  _buttons() { if (this.undoBtn && this.p) this.undoBtn.disabled = !this.p.canUndo(); }

  showPause() {
    if (this.mode !== 'play') return;
    this.mode = 'pause';
    this.layer.append(h('div', { class: 'pp-dim', id: 'pp-pause' }, h('div', { class: 'pp-card' },
      h('div', { class: 'pp-title' }, I.t('paused')),
      h('button', { class: 'pp-btn', onclick: () => { this.mode = 'play'; this.last = performance.now(); this.layer.querySelector('#pp-pause').remove(); } }, I.t('resume')),
      h('button', { class: 'pp-btn alt', onclick: () => this.restart() }, I.t('restart')),
      h('button', { class: 'pp-btn dark', onclick: () => { this.showLevels(); } }, I.t('levels')),
      h('button', { class: 'pp-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
  }

  _won() {
    const p = this.p; const lv = this.puzzleLevel + 1;
    this.sound.play('win');
    this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, p.stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1));
    this.post({ type: 'save', save: this.save });
    for (let i = 0; i < 40; i++) this.fx.push({ k: 'conf', x: 8 + (Math.random() - 0.5) * 10, y: -1 + Math.random() * 2, vx: (Math.random() - 0.5) * 3, vy: 1 + Math.random() * 3, c: Math.floor(Math.random() * 6), t: 0, life: 2.5 });
    const stars = h('div', { class: 'pp-stars' }, ...[1, 2, 3].map((n) => h('span', { class: n <= p.stars ? '' : 'off' }, '⭐')));
    const last = lv >= LEVELS;
    this.layer.append(h('div', { class: 'pp-dim' }, h('div', { class: 'pp-card' },
      h('div', { class: 'pp-title' }, I.t('win')), h('div', { class: 'pp-small' }, I.t('winText')), stars,
      h('div', { class: 'pp-small' }, `${I.t('moves')}: ${I.num(p.moves)}  ·  ${I.t('lost')}: ${I.num(p.lost)}`),
      h('div', { class: 'pp-acts' },
        last ? null : h('button', { class: 'pp-btn', onclick: () => this.startLevel(lv) }, I.t('next')),
        h('button', { class: 'pp-btn alt', onclick: () => this.restart() }, I.t('again')),
        h('button', { class: 'pp-btn dark', onclick: () => this.showLevels() }, I.t('levels'))))));
  }

  _failed() {
    this.sound.play('fail');
    this.layer.append(h('div', { class: 'pp-dim', id: 'pp-fail' }, h('div', { class: 'pp-card' },
      h('div', { class: 'pp-title' }, I.t('fail')), h('div', { class: 'pp-small' }, I.t('failText')),
      h('div', { class: 'pp-acts' },
        this.p.canUndo() ? h('button', { class: 'pp-btn', onclick: () => this.undo() }, `↶ ${I.t('undo')}`) : null,
        h('button', { class: 'pp-btn alt', onclick: () => this.restart() }, I.t('again')),
        h('button', { class: 'pp-btn dark', onclick: () => this.showLevels() }, I.t('levels'))))));
  }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      if (this.mode !== 'pause') this.clock += dt;
      if (this.mode === 'play' && this.p) this._update(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const p = this.p;
    this.acc += dt;
    let n = 0;
    while (this.acc >= 1 / 60 && n < 3) {
      this.acc -= 1 / 60; n += 1;
      for (const e of p.step(1 / 60)) {
        if (e.type === 'jar') { this.sound.play('plink', e.n % 11); this.fx.push({ k: 'spark', x: e.x, y: e.y, t: 0, life: 0.6 }); }
        else if (e.type === 'lost') { this.sound.play('lava'); this.fx.push({ k: 'puff', x: e.x, y: 9.3, t: 0, life: 0.8 }); }
        else if (e.type === 'goal') this.sound.play('goal');
        else if (e.type === 'hit') this.sound.play('hit', e.v);
        else if (e.type === 'won') this._won();
        else if (e.type === 'failed') this._failed();
      }
      if (p.state !== 'play') break;
    }
    if (this.acc > 0.1) this.acc = 0;
    this.cntEl.textContent = `🍬 ${I.num(Math.min(p.inJar, p.target))}/${I.num(p.target)}`;
    this.barEl.style.width = `${Math.min(100, (p.inJar / p.target) * 100)}%`;
    if (!this.hintId && this.puzzleLevel < 2 && p.moves === 0 && this.clock - (this.hintT || 0) > 8) { this.hintId = p.hint(); this.hintT = this.clock; }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  // ---------------------------------------------------------------- drawing
  _X(x) { return this.ox + x * this.s; }
  _Y(y) { return this.oy + y * this.s; }

  _makeBg() {
    const dpr = this.dpr; const c = document.createElement('canvas');
    c.width = Math.round(this.cw * dpr); c.height = Math.round(this.ch * dpr);
    const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const s = this.s; const X = (x) => this._X(x); const Y = (y) => this._Y(y);
    const sky = g.createLinearGradient(0, 0, 0, this.ch); sky.addColorStop(0, '#9fd8ff'); sky.addColorStop(1, '#ffe9c8');
    g.fillStyle = sky; g.fillRect(0, 0, this.cw, this.ch);
    g.fillStyle = 'rgba(255,255,255,.7)';
    for (const [cx, cy, r] of [[-0.3, -0.4, 0.5], [3, -0.9, 0.6], [12.5, -0.7, 0.7], [16.4, 0.5, 0.45]]) { for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(X(cx + k * r * 0.9), Y(cy), r * s, 0, 6.3); g.fill(); } }
    // cabinet
    const rr = (x, y, w, hh, r) => { g.beginPath(); g.roundRect(X(x), Y(y), w * s, hh * s, r * s); };
    rr(-0.35, -0.35, W + 0.7, H + 0.7, 0.4); const wood = g.createLinearGradient(0, Y(0), 0, Y(H)); wood.addColorStop(0, '#c8863c'); wood.addColorStop(1, '#a0602a'); g.fillStyle = wood; g.fill();
    g.strokeStyle = '#6a3a14'; g.lineWidth = s * 0.07; g.stroke();
    rr(0, 0, W, H, 0.2); const back = g.createLinearGradient(0, Y(0), 0, Y(H)); back.addColorStop(0, '#fff6df'); back.addColorStop(1, '#ffe4b8'); g.fillStyle = back; g.fill();
    g.save(); g.clip();
    g.strokeStyle = 'rgba(200,150,90,.18)'; g.lineWidth = s * 0.05;
    for (let x = 0.5; x < W; x += 1) { g.beginPath(); g.moveTo(X(x), Y(0)); g.lineTo(X(x), Y(H)); g.stroke(); }
    for (let y = 0.5; y < H; y += 1) { g.beginPath(); g.moveTo(X(0), Y(y)); g.lineTo(X(W), Y(y)); g.stroke(); }
    // tower glass panels
    for (const tw of this.p ? this.p.towers : []) {
      g.fillStyle = 'rgba(140,200,255,.28)'; g.fillRect(X(tw.x0), Y(tw.topY), (tw.x1 - tw.x0) * s, (tw.floor - tw.topY) * s);
      g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(X(tw.x0 + 0.15), Y(tw.topY + 0.1), 0.18 * s, (tw.floor - tw.topY - 0.3) * s);
    }
    // base under the jar
    g.fillStyle = '#b9814a'; g.beginPath(); g.moveTo(X(4.6), Y(7.2)); g.lineTo(X(JAR.x1), Y(JAR.top)); g.lineTo(X(JAR.x1), Y(H)); g.lineTo(X(4.6), Y(H)); g.fill();
    g.beginPath(); g.moveTo(X(11.4), Y(7.2)); g.lineTo(X(JAR.x2), Y(JAR.top)); g.lineTo(X(JAR.x2), Y(H)); g.lineTo(X(11.4), Y(H)); g.fill();
    // the jar back
    g.fillStyle = 'rgba(190,230,255,.55)'; g.fillRect(X(JAR.x1), Y(JAR.top - 0.4), (JAR.x2 - JAR.x1) * s, (H - JAR.top + 0.4) * s);
    g.restore();
    return c;
  }

  _plank(g, sg) {
    const s = this.s;
    g.lineCap = 'round';
    g.strokeStyle = '#6a3a14'; g.lineWidth = s * 0.24; g.beginPath(); g.moveTo(this._X(sg.x1), this._Y(sg.y1)); g.lineTo(this._X(sg.x2), this._Y(sg.y2)); g.stroke();
    g.strokeStyle = sg.k === 'ramp' ? '#d89a50' : '#c47c36'; g.lineWidth = s * 0.17; g.stroke();
    g.strokeStyle = 'rgba(255,230,170,.5)'; g.lineWidth = s * 0.04; g.beginPath(); g.moveTo(this._X(sg.x1), this._Y(sg.y1) - s * 0.04); g.lineTo(this._X(sg.x2), this._Y(sg.y2) - s * 0.04); g.stroke();
  }

  _sprite(c) {
    if (!this.sprites) {
      const d = Math.ceil(R * 2.2 * this.s * this.dpr) + 2; this.sprites = [];
      for (const [lt, dk] of CANDY) {
        const cv = document.createElement('canvas'); cv.width = cv.height = d; const g = cv.getContext('2d'); const r = d / 2 - 1;
        const gr = g.createRadialGradient(d * 0.38, d * 0.34, r * 0.1, d / 2, d / 2, r); gr.addColorStop(0, '#fff'); gr.addColorStop(0.25, lt); gr.addColorStop(1, dk);
        g.fillStyle = gr; g.beginPath(); g.arc(d / 2, d / 2, r, 0, 6.3); g.fill();
        g.strokeStyle = 'rgba(60,20,40,.55)'; g.lineWidth = Math.max(1, d * 0.06); g.stroke();
        g.fillStyle = 'rgba(255,255,255,.85)'; g.beginPath(); g.ellipse(d * 0.36, d * 0.3, r * 0.28, r * 0.16, -0.6, 0, 6.3); g.fill();
        this.sprites.push(cv);
      }
    }
    return this.sprites[c % this.sprites.length];
  }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (!this.bg || (this.p && this.bgLevel !== this.puzzleLevel)) { this.bg = this._makeBg(); this.bgLevel = this.puzzleLevel; }
    g.drawImage(this.bg, 0, 0, this.cw, this.ch);
    const p = this.p || this.demo; if (!p) return;
    const s = this.s;
    this._lava(g);
    for (const sg of p.segs) if (sg.k === 'wood' || sg.k === 'ramp') this._plank(g, sg);
    // balls
    const d = R * 2.2 * s;
    for (const b of p.balls) { if (!b.alive) continue; g.drawImage(this._sprite(b.c), this._X(b.x) - d / 2, this._Y(b.y) - d / 2, d, d); }
    // jar glass and counter
    g.fillStyle = 'rgba(255,255,255,.22)'; g.fillRect(this._X(JAR.x1), this._Y(JAR.top - 0.4), (JAR.x2 - JAR.x1) * s, (H - JAR.top + 0.4) * s);
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = s * 0.12; g.lineCap = 'round';
    g.beginPath(); g.moveTo(this._X(JAR.x1), this._Y(JAR.top - 0.4)); g.lineTo(this._X(JAR.x1), this._Y(H - 0.1)); g.lineTo(this._X(JAR.x2), this._Y(H - 0.1)); g.lineTo(this._X(JAR.x2), this._Y(JAR.top - 0.4)); g.stroke();
    g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = s * 0.08; g.beginPath(); g.moveTo(this._X(JAR.x1 + 0.3), this._Y(JAR.top + 0.2)); g.lineTo(this._X(JAR.x1 + 0.3), this._Y(H - 0.5)); g.stroke();
    // the jar's goal line
    const gy = this._jarLevel(p);
    g.setLineDash([s * 0.2, s * 0.2]); g.strokeStyle = '#fff'; g.lineWidth = s * 0.05; g.beginPath(); g.moveTo(this._X(JAR.x1), this._Y(gy)); g.lineTo(this._X(JAR.x2), this._Y(gy)); g.stroke(); g.setLineDash([]);
    // pins
    for (const pin of p.pins) this._pin(g, pin);
    this._fx(g);
  }

  _jarLevel(p) { const capacity = 36; const frac = Math.min(1, p.target / capacity); return Math.max(JAR.top - 0.4, H - 0.1 - frac * (H - 0.1 - (JAR.top - 0.4)) * 1.15); }

  _lava(g) {
    const s = this.s; const c = this.clock;
    for (const [x0, x1] of [[0, 4.6], [11.4, W]]) {
      const grad = g.createLinearGradient(0, this._Y(8.7), 0, this._Y(H)); grad.addColorStop(0, 'rgba(255,120,30,0)'); grad.addColorStop(0.5, '#ff6a1a'); grad.addColorStop(1, '#c81e0a');
      g.fillStyle = grad; g.beginPath(); g.moveTo(this._X(x0), this._Y(H));
      for (let x = x0; x <= x1 + 0.01; x += 0.2) g.lineTo(this._X(x), this._Y(9.35 + Math.sin(x * 2.2 + c * 2.5) * 0.08));
      g.lineTo(this._X(x1), this._Y(H)); g.fill();
      g.fillStyle = '#ffd23a';
      for (let k = 0; k < 5; k++) { const bx = x0 + ((k * 1.13 + 0.4) % (x1 - x0)); const by = 9.8 - ((c * 0.5 + k * 0.37) % 0.5); g.beginPath(); g.arc(this._X(bx), this._Y(by), s * 0.07, 0, 6.3); g.fill(); }
    }
  }

  _pin(g, pin) {
    if (pin.pulled && pin.t >= 1) return;
    const s = this.s; const q = this._pinGeom(pin);
    const alpha = pin.pulled ? 1 - slide(pin) * 0.8 : 1;
    g.globalAlpha = alpha; g.lineCap = 'round';
    const x1 = this._X(q.x1); const y1 = this._Y(q.y1); const x2 = this._X(q.x2); const y2 = this._Y(q.y2);
    g.strokeStyle = '#7a4a00'; g.lineWidth = s * 0.26; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
    const gr = g.createLinearGradient(x1, y1 - s * 0.1, x1, y1 + s * 0.1); gr.addColorStop(0, '#fff2a0'); gr.addColorStop(0.5, '#ffd23a'); gr.addColorStop(1, '#e09a10');
    g.strokeStyle = pin.role === 'trap' ? '#ffb0a0' : gr; g.lineWidth = s * 0.17; g.stroke();
    // the handle ring
    g.strokeStyle = '#7a4a00'; g.lineWidth = s * 0.3; g.beginPath(); g.arc(this._X(q.hx), this._Y(q.hy), s * 0.27, 0, 6.3); g.stroke();
    g.strokeStyle = '#ffd23a'; g.lineWidth = s * 0.17; g.stroke();
    g.fillStyle = 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(this._X(q.hx) - s * 0.1, this._Y(q.hy) - s * 0.1, s * 0.05, 0, 6.3); g.fill();
    g.globalAlpha = 1;
    if (this.hintId === pin.id && !pin.pulled) {
      const k = (Math.sin(this.clock * 6) + 1) / 2;
      g.strokeStyle = `rgba(255,255,255,${0.5 + k * 0.5})`; g.lineWidth = s * 0.14; g.beginPath(); g.arc(this._X(q.hx), this._Y(q.hy), s * (0.5 + k * 0.25), 0, 6.3); g.stroke();
      g.font = `${s * 1.0}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('👆', this._X(q.hx), this._Y(q.hy) + s * (0.9 + k * 0.2));
    }
  }

  _fx(g) {
    const s = this.s;
    for (const f of this.fx) {
      const k = f.t / f.life;
      if (f.k === 'spark') { g.globalAlpha = 1 - k; g.fillStyle = '#fff'; for (let i = 0; i < 4; i++) { const a = i * 1.57 + k * 2; g.beginPath(); g.arc(this._X(f.x) + Math.cos(a) * k * s * 0.9, this._Y(f.y) - 0.3 * s + Math.sin(a) * k * s * 0.9, s * 0.07, 0, 6.3); g.fill(); } g.globalAlpha = 1; }
      else if (f.k === 'puff') { g.globalAlpha = 0.6 * (1 - k); g.fillStyle = '#ff9a3a'; g.beginPath(); g.arc(this._X(f.x), this._Y(f.y) - k * s * 1.2, s * (0.2 + k * 0.4), 0, 6.3); g.fill(); g.globalAlpha = 1; }
      else if (f.k === 'conf') { const x = f.x + f.vx * f.t; const y = f.y + f.vy * f.t + 2 * f.t * f.t; g.globalAlpha = 1 - k * k; g.fillStyle = CANDY[f.c][1]; g.fillRect(this._X(x), this._Y(y), s * 0.22, s * 0.14); g.globalAlpha = 1; }
    }
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.PinPuzzle = api;
export default api;
