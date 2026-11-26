// «النطاط» — Sky Jumper. Entry: window.SkyJumper.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// An endless climber with an ORIGINAL doodle creature on notebook paper: it bounces up by itself; drag left/right to steer (the
// screen wraps around), tap to shoot. Normal, moving and crumbling platforms, springs, propeller hat and jetpack, silly monsters.
// 2D canvas, art and sound made in code. No network, no ads, no tracking. Falling just starts a new climb.
import { Climb, W, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { View3D } from './view3d.js';
import { loadArt } from '../../cozy_kit/art.js';
// Optional generated pictures; a missing one stays null and the code-drawn version is used.
const ART = {};
const pic = (g, im, x, y, w) => { const hh = w * im.naturalHeight / im.naturalWidth; g.drawImage(im, x - w / 2, y - hh / 2, w, hh); };

const S = {
  title: ['النطاط', 'Sky Jumper'], play: ['يلا نطّ', 'Jump!'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['تاني', 'Again'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'],
  how: ['اسحب يمين وشمال عشان تتحرك — دوس عشان تضرب الوحوش', 'Drag left and right to steer, tap to shoot monsters'], over: ['وقعت! جرّب تاني', 'You fell! Try again'], score: ['الارتفاع', 'Height'], best: ['أعلى ارتفاع', 'Best'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], newBest: ['رقم قياسي جديد! 🏆', 'New record! 🏆'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'bounce': this.slide('sine', 300, 520, t, 0.12, 0.08); break;
      case 'spring': this.slide('triangle', 250, 900, t, 0.25, 0.1); break;
      case 'crumble': this.noise(t, 0.15, 0.08, 'bandpass', 600, 2); break;
      case 'power': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.2, 0.1)); break;
      case 'squash': this.tone('square', hz(60), t, 0.08, 0.06); this.noise(t, 0.1, 0.08, 'lowpass', 800); break;
      case 'shoot': this.tone('square', 900, t, 0.04, 0.04); break;
      case 'bonk': this.noise(t, 0.2, 0.1, 'lowpass', 400); break;
      case 'over': this.slide('sawtooth', 500, 70, t, 0.8, 0.09); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setTune(null); return; } this.setTune({ tempo: 116, beats: 16, wave: 'triangle', vol: 0.07, notes: [[0, 72, 1], [1, 76, 1], [2, 79, 1], [3, 76, 1], [4, 74, 1], [5, 77, 1], [6, 81, 1], [7, 77, 1], [8, 72, 1], [9, 76, 1], [10, 79, 2], [12, 77, 1], [13, 74, 1], [14, 72, 2], [0, 48, 2], [4, 50, 2], [8, 48, 2], [12, 53, 2]] }); }
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('sj-style')) document.head.append(h('style', { id: 'sj-style' }, css('sj', '#3aa8e8', '#1a5aa8', '#ffe04a')));
    this.root = h('div', { class: 'sj-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.view = new View3D(el); this.root.append(this.view.dom); this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'sj-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.c && this.drag) this.c.steer(this.view.fieldX(e.clientX, this.root.getBoundingClientRect().left)); };
    this.cv.addEventListener('pointerdown', (e) => { this.drag = { t: performance.now(), x: e.clientX, y: e.clientY }; move(e); });
    this.cv.addEventListener('pointermove', move);
    this.cv.addEventListener('pointerup', (e) => { if (this.drag && performance.now() - this.drag.t < 200 && Math.hypot(e.clientX - this.drag.x, e.clientY - this.drag.y) < 12 && this.c && this.mode === 'play' && this.c.shoot()) this.sound.play('shoot'); this.drag = null; });
    this._onKey = (e) => { if (this.mode !== 'play' || !this.c) return; const k = e.key.toLowerCase(); if (k === 'arrowleft' || k === 'a') this.c.targetX = this.c.p.x - 3; if (k === 'arrowright' || k === 'd') this.c.targetX = this.c.p.x + 3; if (k === ' ' && this.c.shoot()) this.sound.play('shoot'); };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.last = performance.now();
    Promise.all([this._fonts(), loadArt(this.base, ['hero', 'monster']).then((a) => Object.assign(ART, a))]).then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }
  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.view.setSize(this.cw, this.ch); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); }
  _soundPill() { const pill = h('button', { class: 'sj-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.c = new Climb({ seed: 1, easy: true }); this.layer.replaceChildren(); this.sound.setMode(false);
    this.layer.append(h('div', { class: 'sj-dim' }, h('div', { class: 'sj-card' }, h('div', { class: 'sj-logo' }, I.t('title')), h('div', { class: 'sj-small' }, I.t('how')), h('div', { class: 'sj-small' }, `🏆 ${I.t('best')}: ${I.num(this.save.best)}`), h('button', { class: 'sj-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, I.t('play')), h('button', { class: 'sj-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start() {
    this.c = new Climb({ seed: (Date.now() & 0xffff) + 1, easy: this.age <= 5 });
    this.mode = 'play'; this.paused = false; this.camY = 0;
    this.layer.replaceChildren(); this.sound.setMode(true);
    this.scoreEl = h('span', {}, '');
    const back = h('button', { class: 'sj-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'sj-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'sj-top' }, back, h('div', { class: 'sj-pill' }, this.scoreEl), pause));
    this._soundPill();
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'sj-dim' }, h('div', { class: 'sj-card' }, h('div', { class: 'sj-title' }, I.t('paused')), h('button', { class: 'sj-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'sj-btn dark', onclick: () => this.start() }, I.t('again')), h('button', { class: 'sj-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _over() {
    const sc = this.c.score; const rec = sc > this.save.best;
    if (rec) this.save.best = sc;
    this.post({ type: 'save', save: this.save }); this.sound.play('over');
    this.layer.append(h('div', { class: 'sj-dim' }, h('div', { class: 'sj-card' }, h('div', { class: 'sj-title' }, I.t('over')), h('div', { class: 'sj-pill' }, `${I.t('score')} ${I.num(sc)}`), rec ? h('div', { class: 'sj-small' }, I.t('newBest')) : null, h('button', { class: 'sj-btn', onclick: () => this.start() }, I.t('again')), h('button', { class: 'sj-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _loop() { const frame = (now) => { if (!this.root.isConnected) return; const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused) this._update(dt); this._draw(); this.raf = requestAnimationFrame(frame); }; this.raf = requestAnimationFrame(frame); }

  _update(dt) {
    const c = this.c;
    for (const e of c.step(dt)) {
      switch (e.type) { case 'bounce': this.sound.play('bounce'); this.view.burst(c.p.x, c.p.y - 0.3, 'bounce'); break; case 'spring': this.sound.play('spring'); break; case 'crumble': this.sound.play('crumble'); this.view.burst(c.p.x, c.p.y - 0.4, 'crumble'); break; case 'power': this.sound.play('power'); break; case 'squash': this.sound.play('squash'); this.view.burst(c.p.x, c.p.y, 'squash'); break; case 'bonk': this.sound.play('bonk'); break; case 'over': this._over(); break; default: break; }
    }
    this.scoreEl.textContent = `⬆ ${I.num(c.score)}`;
    this.camY = Math.max(this.camY, c.height);
  }

  _draw() {
    const g = this.g; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, this.cv.width, this.cv.height);
    const c = this.mode === 'play' ? this.c : null;
    this.view.render(c, this.camY, this.mode, this.clock, c ? c.p : null, this.clock);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { if (this.view) this.view.dispose(); cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SkyJumper = api;
export default api;

