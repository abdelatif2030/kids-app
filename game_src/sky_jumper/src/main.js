// «النطاط» — Sky Jumper. Entry: window.SkyJumper.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// An endless climber with an ORIGINAL doodle creature on notebook paper: it bounces up by itself; drag left/right to steer (the
// screen wraps around), tap to shoot. Normal, moving and crumbling platforms, springs, propeller hat and jetpack, silly monsters.
// 2D canvas, art and sound made in code. No network, no ads, no tracking. Falling just starts a new climb.
import { Climb, W, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
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
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'sj-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.c && this.drag) this.c.steer((e.clientX - this.root.getBoundingClientRect().left) / this.cw); };
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

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }
  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); }
  _soundPill() { const pill = h('button', { class: 'sj-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.c = new Climb({ seed: 1, easy: true }); this.layer.replaceChildren(); this.sound.setMode(false);
    this.layer.append(h('div', { class: 'sj-dim' }, h('div', { class: 'sj-card' }, h('div', { class: 'sj-logo' }, '🦘 ', I.t('title')), h('div', { class: 'sj-small' }, I.t('how')), h('div', { class: 'sj-small' }, `🏆 ${I.t('best')}: ${I.num(this.save.best)}`), h('button', { class: 'sj-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, I.t('play')), h('button', { class: 'sj-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
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
      switch (e.type) { case 'bounce': this.sound.play('bounce'); break; case 'spring': this.sound.play('spring'); break; case 'crumble': this.sound.play('crumble'); break; case 'power': this.sound.play('power'); break; case 'squash': this.sound.play('squash'); break; case 'bonk': this.sound.play('bonk'); break; case 'over': this._over(); break; default: break; }
    }
    this.scoreEl.textContent = `⬆ ${I.num(c.score)}`;
    this.camY = Math.max(this.camY, c.height);
  }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const Wd = this.cw; const H = this.ch; const c = this.c;
    // a bright cartoon sky that gets deeper blue the higher the climb (the old notebook paper did not match the painted creature)
    const sky = g.createLinearGradient(0, 0, 0, H);
    const hgt = Math.min(1, (this.mode === 'play' ? this.camY : 0) / 400);
    const top = [Math.round(120 - 70 * hgt), Math.round(200 - 80 * hgt), Math.round(255 - 40 * hgt)];
    sky.addColorStop(0, `rgb(${top[0]},${top[1]},${top[2]})`); sky.addColorStop(1, '#e4f6ff');
    g.fillStyle = sky; g.fillRect(0, 0, Wd, H);
    const sx = Wd / W; const sy = H / 16;
    const cam = this.mode === 'play' ? Math.max(this.camY - 4, 0) : 0;
    const Y = (y) => H - (y - cam) * sy - H * 0.1;
    // soft clouds drifting down slowly (parallax)
    g.fillStyle = 'rgba(255,255,255,.85)';
    for (let i = 0; i < 7; i++) {
      const cx = ((i * 211 + 60) % 1000) / 1000 * Wd, cyBase = (i * 137) % 600;
      const cy = ((cyBase + cam * sy * 0.25) % (H + 160)) - 80;
      const r = Math.min(Wd, H) * 0.045 * (1 + (i % 3) * 0.4);
      g.beginPath(); g.arc(cx, cy, r, 0, 6.3); g.arc(cx + r * 0.9, cy + r * 0.2, r * 0.75, 0, 6.3); g.arc(cx - r * 0.9, cy + r * 0.25, r * 0.7, 0, 6.3); g.arc(cx + r * 0.2, cy - r * 0.45, r * 0.7, 0, 6.3); g.fill();
    }
    if (!c) return;
    // platforms
    for (const pl of c.plats) {
      if (pl.dead) continue;
      const x = pl.x * sx; const y = Y(pl.y); const w = pl.w * sx;
      if (y < -30 || y > H + 30) continue;
      const col = { normal: '#5ac850', move: '#4a9ae8', crumble: '#b8844a', spring: '#5ac850' }[pl.kind];
      if (ART.platform_grass && (pl.kind === 'normal' || pl.kind === 'spring')) { g.drawImage(ART.platform_grass, x - w / 2 - 3, y - 11, w + 6, 26); }
      else {
        // a cartoon slab: earth body, bright grass top with a lighter rim, dark outline
        const earth = pl.kind === 'crumble' ? '#a07848' : pl.kind === 'move' ? '#5a78b8' : '#8a5a32';
        g.strokeStyle = '#3a2a18'; g.lineWidth = 2;
        g.fillStyle = earth; g.beginPath(); g.roundRect(x - w / 2, y - 3, w, 11, 5); g.fill(); g.stroke();
        g.fillStyle = col; g.beginPath(); g.roundRect(x - w / 2 - 1, y - 8, w + 2, 8, 5); g.fill(); g.stroke();
        g.fillStyle = 'rgba(255,255,255,.45)'; g.fillRect(x - w / 2 + 7, y - 6, w - 14, 2);
      }
      if (pl.kind === 'crumble') { g.strokeStyle = '#5a3a1a'; g.beginPath(); g.moveTo(x - 4, y - 5); g.lineTo(x, y + 7); g.moveTo(x + 8, y - 5); g.lineTo(x + 4, y + 7); g.stroke(); }
      if (pl.kind === 'spring') { g.strokeStyle = '#888'; g.lineWidth = 3; g.beginPath(); for (let k = 0; k < 5; k++) { g.lineTo(x + (k % 2 ? 6 : -6), y - 6 - k * 3); } g.stroke(); g.fillStyle = '#e8564a'; g.fillRect(x - 9, y - 24, 18, 5); }
    }
    for (const it of c.items) { const x = it.x * sx; const y = Y(it.y); const im = it.kind === 'jetpack' ? ART.jetpack : ART.propeller; if (im) { pic(g, im, x, y - sx * 0.35, sx * 1.0); continue; } g.font = `${sx * 1.1}px system-ui`; g.textAlign = 'center'; g.fillText(it.kind === 'jetpack' ? '🚀' : '🚁', x, y); }
    for (const m of c.mons) { if (m.dead) continue; const x = m.x * sx; const y = Y(m.y); if (ART.monster) { pic(g, ART.monster, x, y, sx * 1.35); continue; } g.fillStyle = '#9a5ad8'; g.strokeStyle = '#3a1a5a'; g.lineWidth = 2; g.beginPath(); g.ellipse(x, y, sx * 0.55, sx * 0.5, 0, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.beginPath(); g.arc(x - sx * 0.2, y - sx * 0.1, sx * 0.17, 0, 6.3); g.arc(x + sx * 0.2, y - sx * 0.1, sx * 0.17, 0, 6.3); g.fill(); g.fillStyle = '#111'; g.beginPath(); g.arc(x - sx * 0.2, y - sx * 0.1, sx * 0.07, 0, 6.3); g.arc(x + sx * 0.2, y - sx * 0.1, sx * 0.07, 0, 6.3); g.fill(); g.beginPath(); g.moveTo(x - sx * 0.3, y + sx * 0.18); g.lineTo(x + sx * 0.3, y + sx * 0.18); g.stroke(); }
    for (const s of c.shots) { g.fillStyle = '#ff8a2a'; g.beginPath(); g.arc(s.x * sx, Y(s.y), 6, 0, 6.3); g.fill(); }
    // the creature (drawn wrapped at both edges)
    for (const dx of [0, -W, W]) this._creature(g, (c.p.x + dx) * sx, Y(c.p.y), sx, c.p);
  }

  _creature(g, x, y, sx, p) {
    if (x < -sx || x > this.cw + sx) return;
    const s = sx * 0.55; const squash = p.vy > 6 ? 1.12 : p.vy < -6 ? 0.92 : 1;
    g.save(); g.translate(x, y); g.scale(p.face >= 0 ? 1 : -1, 1);
    if (ART.hero) { pic(g, ART.hero, s * 0.15, -s * 1.1 * (p.vy > 6 ? 0.98 : 1), s * 3.0 * (squash > 1 ? 0.97 : 1)); }
    else {
    g.fillStyle = '#b8e84a'; g.strokeStyle = '#3a5a1a'; g.lineWidth = 2.5;
    g.beginPath(); g.ellipse(0, -s * 1.1, s * 0.95, s * 1.05 * squash, 0, 0, 6.3); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(s * 0.15, -s * 1.45, s * 0.3, 0, 6.3); g.arc(s * 0.6, -s * 1.4, s * 0.26, 0, 6.3); g.fill(); g.stroke();
    g.fillStyle = '#111'; g.beginPath(); g.arc(s * 0.22, -s * 1.43, s * 0.12, 0, 6.3); g.arc(s * 0.66, -s * 1.38, s * 0.1, 0, 6.3); g.fill();
    g.fillStyle = '#7ac82a'; g.beginPath(); g.ellipse(s * 1.05, -s * 1.15, s * 0.55, s * 0.28, 0, 0, 6.3); g.fill(); g.stroke(); // long snout
    g.fillStyle = '#5a9a1a'; for (const fx of [-0.55, 0.45]) { g.beginPath(); g.ellipse(fx * s, -s * 0.1 + (p.vy > 0 ? -s * 0.2 : 0), s * 0.32, s * 0.22, 0, 0, 6.3); g.fill(); g.stroke(); }
    g.strokeStyle = '#3a5a1a'; g.lineWidth = 3; g.beginPath(); g.moveTo(-s * 0.9, -s * 1.5); g.lineTo(-s * 1.3, -s * 1.9); g.stroke();
    }
    if (p.fly > 0) { g.font = `${s * 1.8}px system-ui`; g.textAlign = 'center'; g.fillText(p.flyKind === 'jetpack' ? '🔥' : '🚁', 0, p.flyKind === 'jetpack' ? s * 0.6 : -s * 2.6); }
    if (p.shield > 0 && Math.floor(this.clock * 10) % 2) { g.globalAlpha = 0.4; g.fillStyle = '#fff'; g.beginPath(); g.arc(0, -s, s * 1.6, 0, 6.3); g.fill(); g.globalAlpha = 1; }
    g.restore();
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SkyJumper = api;
export default api;

