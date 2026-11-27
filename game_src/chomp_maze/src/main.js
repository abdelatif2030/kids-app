// «الأكول» — Chomp Maze. Entry: window.ChompMaze.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A classic maze chase with ORIGINAL characters: Sunny the round chomper eats every dot while four ghost blobs wander and chase;
// power fruits make them scared so Sunny can eat them. Swipe (or arrows/WASD) to turn. 8 levels over 4 mazes, easy mode for the
// youngest. 2D canvas, art and sound made in code. No network, no ads, no tracking.
import { Game as Maze, LEVELS, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const CHOMP_CLIPS = { go: 2, trick: 3, charge: 2, bump: 2, win: 2, lose: 2 };

const S = {
  title: ['مطاردة الحلويات في خان الخليلي', 'Sweet Chase in Khan el-Khalili'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'Level'], how: ['اسحب إصبعك عشان تغيّر الاتجاه — كُل كل النقط! الفاكهة بتخوّف الأشباح', 'Swipe to turn: eat every dot! Fruits scare the ghosts'],
  won: ['خلّصت كل النقط! 🎉', 'All dots eaten! 🎉'], lost: ['خلصت المحاولات.. جرّب تاني!', 'Out of tries.. try again!'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], score: ['النقاط', 'Score'], ready: ['استعد!', 'Ready!'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  constructor() { super(); this.w = 0; }
  play(n, a) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'dot': this.w ^= 1; this.tone('square', this.w ? 420 : 330, t, 0.05, 0.035); break;
      case 'power': this.slide('sawtooth', 200, 800, t, 0.4, 0.08); break;
      case 'eatGhost': this.slide('square', 300, 1200, t, 0.25, 0.08); this.tone('triangle', hz(84 + (a || 1) * 2), t + 0.2, 0.2, 0.08); break;
      case 'caught': [0, -3, -6, -9, -12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.12, 0.2, 0.1)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [0, -3, -7, -12].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.2, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  /** Real code-generated music in the house pattern (SynthBase tunes): a bouncy chase loop while
      playing, a calm loop under the menu. (The old single line ran at vol 0.03 — effectively silent.) */
  setMode(mode) {
    if (mode === 'play') this.setTune({ tempo: 126, beats: 16, wave: 'triangle', vol: 0.06, notes: [
      [0, 72, 0.5], [0.5, 76, 0.5], [1, 79, 0.5], [1.5, 76, 0.5], [2, 81, 0.5], [2.5, 79, 0.5], [3, 76, 0.5], [3.5, 72, 0.5],
      [4, 74, 0.5], [4.5, 77, 0.5], [5, 81, 0.5], [5.5, 77, 0.5], [6, 79, 0.5], [6.5, 76, 0.5], [7, 74, 0.5], [7.5, 71, 0.5],
      [8, 72, 0.5], [8.5, 76, 0.5], [9, 79, 0.5], [9.5, 76, 0.5], [10, 81, 0.5], [10.5, 84, 0.5], [11, 81, 0.5], [11.5, 79, 0.5],
      [12, 77, 0.5], [12.5, 74, 0.5], [13, 76, 0.5], [13.5, 71, 0.5], [14, 72, 1], [15, 67, 1],
      [0, 48, 1], [2, 43, 1], [4, 45, 1], [6, 43, 1], [8, 48, 1], [10, 43, 1], [12, 41, 1], [14, 43, 1]] });
    else if (mode === 'menu') this.setTune({ tempo: 92, beats: 16, wave: 'triangle', vol: 0.05, notes: [
      [0, 72, 2], [2, 76, 2], [4, 79, 2], [6, 76, 2], [8, 74, 2], [10, 71, 2], [12, 72, 4],
      [0, 48, 4], [4, 45, 4], [8, 43, 4], [12, 48, 4]] });
    else { this.setBed(null); this.setTune(null); }
  }
}

const WALL_COLORS = ['#3a6ae8', '#e8564a', '#7a4ad8', '#2aa88a'];

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: CHOMP_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('cm-style')) document.head.append(h('style', { id: 'cm-style' }, css('cm', '#3a6ae8', '#101840', '#ffe04a')));
    this.root = h('div', { class: 'cm-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'cm-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.drag = null;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }
  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => { this.drag = { x: e.clientX, y: e.clientY }; this.cv.setPointerCapture(e.pointerId); });
    this.cv.addEventListener('pointermove', (e) => {
      if (!this.drag || this.mode !== 'play') return;
      const dx = e.clientX - this.drag.x; const dy = e.clientY - this.drag.y;
      if (Math.hypot(dx, dy) > this.u * 4) { this.game.setDir(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'r' : 'l') : (dy > 0 ? 'd' : 'u')); this.drag = { x: e.clientX, y: e.clientY }; }
    });
    this.cv.addEventListener('pointerup', () => { this.drag = null; });
    this._onKey = (e) => { if (this.mode !== 'play') return; const m = { arrowleft: 'l', a: 'l', arrowright: 'r', d: 'r', arrowup: 'u', w: 'u', arrowdown: 'd', s: 'd' }[e.key.toLowerCase()]; if (m) { e.preventDefault(); this.game.setDir(m); } };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _clear() { this.layer.replaceChildren(); }
  _soundPill() { const pill = h('button', { class: 'cm-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  showMenu() {
    this.mode = 'menu'; this.game = new Maze({ level: 0 }); this._clear(); this.sound.setMode('menu');
    const lvs = h('div', { class: 'cm-lvs' }, Array.from({ length: LEVELS }, (_, i) => { const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0; return h('button', { class: `cm-lv${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('i', {}, lock ? '🔒' : '🟡'), h('span', {}, I.num(i + 1)), h('span', {}, '⭐'.repeat(st) || '·')); }));
    this.layer.append(h('div', { class: 'cm-dim' }, h('div', { class: 'cm-card' }, h('div', { class: 'cm-logo' }, '🟡 ', I.t('title')), h('div', { class: 'cm-small' }, I.t('how')), h('div', { class: 'cm-small' }, `🏆 ${I.t('score')}: ${I.num(this.save.best)}`), lvs, h('button', { class: 'cm-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'cm-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  start(i) {
    this.voice.say('go');
    this.levelIdx = i;
    this.game = new Maze({ level: i, easy: this.age <= 5, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.paused = false; this.ready = 1.4;
    this._clear(); this.sound.setMode('play');
    this.scoreEl = h('span', {}, ''); this.livesEl = h('span', {}, '');
    const back = h('button', { class: 'cm-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'cm-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'cm-top' }, back, h('div', { class: 'cm-pill' }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: 'cm-pill' }, this.scoreEl), h('div', { class: 'cm-pill' }, this.livesEl), pause));
    this.hintEl = h('div', { class: 'cm-hint', style: 'top:calc(var(--u)*15)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'cm-dim' }, h('div', { class: 'cm-card' }, h('div', { class: 'cm-title' }, I.t('paused')), h('button', { class: 'cm-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'cm-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'cm-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _end(won) {
    const g = this.game; const lv = this.levelIdx + 1;
    if (won) { this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, g.stars); this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1)); }
    this.save.best = Math.max(this.save.best, g.score);
    this.post({ type: 'save', save: this.save }); this.sound.play(won ? 'win' : 'lose'); this.voice.say(won ? 'win' : 'lose');
    this.layer.append(h('div', { class: 'cm-dim' }, h('div', { class: 'cm-card' }, h('div', { class: 'cm-title' }, won ? I.t('won') : I.t('lost')), won ? h('div', { class: 'cm-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= g.stars ? '' : 'off' }, '⭐'))) : null, h('div', { class: 'cm-pill' }, `${I.t('score')} ${I.num(g.score)}`),
      won && this.levelIdx < LEVELS - 1 ? h('button', { class: 'cm-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')) : null, h('button', { class: 'cm-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'cm-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _loop() { const frame = (now) => { if (!this.root.isConnected) return; const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused) this._update(dt); this._draw(); this.raf = requestAnimationFrame(frame); }; this.raf = requestAnimationFrame(frame); }

  _update(dt) {
    const g = this.game;
    if (this.ready > 0) { this.ready -= dt; return; }
    for (const e of g.step(dt)) {
      switch (e.type) {
        case 'dot': this.sound.play('dot'); break;
        case 'power': this.sound.play('power'); this.voice.say('charge'); break;
        case 'eatGhost': this.sound.play('eatGhost', e.n); this.voice.say('trick'); break;
        case 'caught': this.sound.play('caught'); this.voice.say('bump'); this.ready = 1.2; break;
        case 'won': this._end(true); break;
        case 'lost': this._end(false); break;
        default: break;
      }
    }
    this.scoreEl.textContent = `⭐ ${I.num(g.score)}`; this.livesEl.textContent = '🍬'.repeat(Math.max(0, g.sweets));
  }

  _draw() {
    const c = this.g; c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch;
    const bg = c.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#0a1038'); bg.addColorStop(1, '#241060'); c.fillStyle = bg; c.fillRect(0, 0, W, H);
    const g = this.game; if (!g) return;
    const top = this.u * 18;
    const cell = Math.min(W / (g.w + 0.6), (H - top - this.u * 4) / g.h);
    const ox = (W - cell * g.w) / 2; const oy = top + ((H - top - this.u * 4) - cell * g.h) / 2;
    const col = WALL_COLORS[this.levelIdx % 4];
    // walls
    for (let y = 0; y < g.h; y++) for (let x = 0; x < g.w; x++) {
      const ch = g.map[y][x];
      if (ch === '#') { c.fillStyle = col; c.shadowColor = col; c.shadowBlur = cell * 0.25; c.beginPath(); c.roundRect(ox + x * cell + cell * 0.08, oy + y * cell + cell * 0.08, cell * 0.84, cell * 0.84, cell * 0.28); c.fill(); c.shadowBlur = 0; c.fillStyle = 'rgba(255,255,255,.18)'; c.beginPath(); c.roundRect(ox + x * cell + cell * 0.18, oy + y * cell + cell * 0.14, cell * 0.64, cell * 0.2, cell * 0.1); c.fill(); }
      else if (ch === '-') { c.fillStyle = '#ff9ad0'; c.fillRect(ox + x * cell, oy + y * cell + cell * 0.4, cell, cell * 0.2); }
      else if (ch === '.') { c.fillStyle = '#fff4c8'; c.beginPath(); c.arc(ox + (x + 0.5) * cell, oy + (y + 0.5) * cell, cell * 0.1, 0, 6.3); c.fill(); }
      else if (ch === 'o') { const k = 0.28 + Math.sin(this.clock * 6) * 0.04; c.font = `${cell * 0.9}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('🍒', ox + (x + 0.5) * cell, oy + (y + 0.55) * cell); void k; }
    }
    // ghosts
    for (const gh of g.ghosts) this._ghost(c, gh, ox, oy, cell, g);
    // the chomper
    const p = g.pm; const px = ox + (p.x + 0.5) * cell; const py = oy + (p.y + 0.5) * cell;
    const mouth = (Math.abs(Math.sin(this.clock * 12)) * 0.35 + 0.05) * (p.moving ? 1 : 0.4);
    const ang = { r: 0, l: Math.PI, u: -Math.PI / 2, d: Math.PI / 2 }[p.dir];
    const blink = g.invuln > 0 && Math.floor(this.clock * 10) % 2;
    if (!blink) {
      c.fillStyle = '#ffe04a'; c.shadowColor = '#ffe04a'; c.shadowBlur = cell * 0.4; c.beginPath(); c.moveTo(px, py); c.arc(px, py, cell * 0.46, ang + mouth * Math.PI, ang + (2 - mouth) * Math.PI); c.closePath(); c.fill(); c.shadowBlur = 0;
      c.fillStyle = '#1a1a1a'; const ex = px + Math.cos(ang - 1.2) * cell * 0.2; const ey = py + Math.sin(ang - 1.2) * cell * 0.2 - cell * 0.05; c.beginPath(); c.arc(ex, ey, cell * 0.06, 0, 6.3); c.fill();
    }
    if (this.ready > 0) { c.fillStyle = '#ffe04a'; c.font = `900 ${cell * 1.2}px Tajawal, system-ui`; c.textAlign = 'center'; c.fillText(I.t('ready'), W / 2, oy + g.h * cell * 0.55); }
  }

  _ghost(c, gh, ox, oy, cell, g) {
    if (gh.mode === 'house' && false) return;
    const x = ox + (gh.x + 0.5) * cell; const y = oy + (gh.y + 0.5) * cell; const r = cell * 0.44;
    const scared = g.scared > 0 && !gh.eaten && gh.mode !== 'house';
    const flash = scared && g.scared < 2 && Math.floor(this.clock * 8) % 2;
    if (gh.mode !== 'eyes') {
      c.fillStyle = scared ? (flash ? '#ffffff' : '#2a4aff') : gh.color;
      c.beginPath(); c.arc(x, y - r * 0.1, r, Math.PI, 0); c.lineTo(x + r, y + r * 0.8);
      for (let k = 0; k < 4; k++) c.lineTo(x + r - (k + 0.5) * (r / 2), y + r * 0.8 + (k % 2 ? 0 : -r * 0.25));
      c.lineTo(x - r, y + r * 0.8); c.closePath(); c.fill();
    }
    c.fillStyle = '#fff'; c.beginPath(); c.arc(x - r * 0.35, y - r * 0.15, r * 0.26, 0, 6.3); c.arc(x + r * 0.35, y - r * 0.15, r * 0.26, 0, 6.3); c.fill();
    c.fillStyle = scared ? '#ff4a4a' : '#1a1aaa'; const d = { l: [-1, 0], r: [1, 0], u: [0, -1], d: [0, 1] }[gh.dir] || [0, 0];
    c.beginPath(); c.arc(x - r * 0.35 + d[0] * r * 0.1, y - r * 0.15 + d[1] * r * 0.1, r * 0.12, 0, 6.3); c.arc(x + r * 0.35 + d[0] * r * 0.1, y - r * 0.15 + d[1] * r * 0.1, r * 0.12, 0, 6.3); c.fill();
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.ChompMaze = api;
export default api;
