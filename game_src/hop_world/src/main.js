// «عالم القفز» — Hop World. Entry: window.HopWorld.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A classic side-scrolling platformer with an original hero: run, jump over pits and pipes, bump question blocks, grab the
// power-up, stomp bugs, reach the flag. 8 levels in 4 worlds. Canvas 2D, all art and sound made in code.
import { World, LEVELS, WORLDS, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n, clamp } from '../../cozy_kit/ui.js';
import { PAL, makeSprites, drawBackground, drawHero, drawBug, drawMushroom, drawCoin, drawPipe, drawFlag, drawCastle } from './art.js';

const S = {
  title: ['عالم القفز', 'Hop World'], sub: ['اختار المستوى', 'Pick a level'], exit: ['خروج', 'Exit'], menu: ['المستويات', 'Levels'],
  again: ['من الأول', 'Try again'], next: ['المستوى الجاي', 'Next level'], resume: ['كمّل', 'Resume'], pausedT: ['استراحة', 'Paused'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], hint1: ['اجري يمين وانط فوق الحفر!', 'Run right and jump over the pits!'],
  hintMush: ['خد الفطرة! 💜', 'Grab the mushroom! 💜'], hintCp: ['علامة حفظ ✔', 'Checkpoint ✔'], hintBig: ['كبرت! 💪', 'You grew! 💪'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], wonText: ['وصلت للقلعة!', 'You reached the castle!'],
  lostT: ['حاول تاني!', 'Try again!'], lostText: ['خلصت المحاولات، بس مفيش مشكلة', 'Out of tries, but that is fine'],
  w0: ['التلال', 'Hills'], w1: ['الكهف', 'Cave'], w2: ['الصحراء', 'Desert'], w3: ['الثلج', 'Snow'],
  jump: ['قفز', 'Jump'], left: ['شمال', 'Left'], right: ['يمين', 'Right'], mute: ['الصوت', 'Sound'], coins: ['عملات', 'Coins'],
};
const I = makeI18n(S);
const WORLD_ICON = ['🌳', '🦇', '🏜️', '❄️'];

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.girl = config.gender === 'girl';
    this.easy = Number(config.age) > 0 && Number(config.age) <= 4;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('hw-style')) document.head.append(h('style', { id: 'hw-style' }, css('hw', '#ff9a3c', '#d9601a', '#ffe35a') + `
.hw-root{background:#5cc8ff;--c:80px}
.hw-pad{position:absolute;left:calc(var(--u)*2);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--c)*.14);direction:ltr;pointer-events:auto;touch-action:none;padding:calc(var(--c)*.1)}
.hw-cb{pointer-events:none;width:var(--c);height:var(--c);border-radius:50%;background:linear-gradient(180deg,#ffb050,#d9601a);border:calc(var(--u)*.6) solid #fff;color:#fff;font-size:calc(var(--c)*.45);display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.6) rgba(0,20,40,.4);opacity:.88;font-weight:900}
.hw-cb.on{transform:scale(.92);background:linear-gradient(180deg,#6ae08a,#2fa85a);opacity:1}
.hw-jump{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--c)*1.3);height:calc(var(--c)*1.3);border-radius:50%;background:linear-gradient(180deg,#6ab8ff,#2a6ad8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-size:calc(var(--c)*.42);font-weight:900;font-family:inherit;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,20,40,.45);touch-action:none;opacity:.9;padding:0;pointer-events:auto}
.hw-jump.on{transform:scale(.93);background:linear-gradient(180deg,#6ae08a,#2fa85a);opacity:1}
.hw-top{gap:calc(var(--u)*1)}
.hw-top .hw-pill{font-size:calc(var(--u)*3.6);padding:calc(var(--u)*.8) calc(var(--u)*2.2)}
.hw-lv.lock{opacity:.7}
.hw-flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
`));
    this.root = h('div', { class: 'hw-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'hw-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.acc = 0; this.fx = []; this.bumps = new Map(); this.keys = new Set();
    this.padDir = 0; this.jumpBtn = false; this.jumpKey = false; this.timers = []; this.level = 0;
    this.cam = { x: 0, y: 0 };
    this.sprites = {}; this.spriteKey = '';
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.demo = new World({ level: 0, seed: 5 });
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.portrait = this.ch > this.cw;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.ts = this.portrait ? this.cw / 9.5 : this.ch / 9.5;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this.root.style.setProperty('--c', `${clamp(Math.min(this.cw, this.ch) * 0.2, 62, 104)}px`);
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (['arrowleft', 'arrowright', 'arrowup', ' ', 'a', 'd', 'w'].includes(k)) e.preventDefault();
        if (!e.repeat && (k === 'escape' || k === 'p')) { if (this.mode === 'play') this.pauseGame(); else if (this.mode === 'pause') this.resumeGame(); }
        this.keys.add(k);
      } else this.keys.delete(k);
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    const k = this.keys;
    let dir = this.padDir;
    if (k.has('arrowleft') || k.has('a')) dir -= 1;
    if (k.has('arrowright') || k.has('d')) dir += 1;
    const jump = this.jumpBtn || k.has('arrowup') || k.has('w') || k.has(' ');
    return { dir: clamp(dir, -1, 1), jump };
  }

  _soundPill() { const pill = h('button', { class: 'hw-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  _toggleMute(btn) { this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; btn.textContent = this.sound.muted ? '🔇' : '🔊'; this.post({ type: 'save', save: this.save }); }
  _muteBtn() { const b = h('button', { class: 'hw-round', 'aria-label': I.t('mute') }, this.sound.muted ? '🔇' : '🔊'); b.onclick = () => this._toggleMute(b); return b; }

  stars(n) { return h('div', { class: 'hw-stars' }, [1, 2, 3].map((i) => h('span', { class: i <= n ? '' : 'off' }, '⭐'))); }

  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(null); this.timers = [];
    this.demo = new World({ level: 0, seed: 5 }); this.menuT = 0;
    const lvs = h('div', { class: 'hw-lvs' });
    for (let i = 0; i < LEVELS; i++) {
      const open = i + 1 <= this.save.unlocked;
      const st = this.save.stars[i + 1] || 0;
      const b = h('button', { class: `hw-lv${open ? '' : ' lock'}`, 'aria-label': `${I.t('title')} ${i + 1}`, onclick: () => { if (!open) return; this.sound.play('tap'); this.startLevel(i); } },
        h('i', {}, open ? WORLD_ICON[Math.floor(i / 2) % 4] : '🔒'), h('span', {}, I.num(i + 1)), h('span', {}, st ? '⭐'.repeat(st) : '·'));
      lvs.append(b);
    }
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' },
      h('div', { class: 'hw-logo' }, '🦊 ', I.t('title')), h('div', { class: 'hw-small' }, I.t('sub')), lvs,
      h('div', { style: 'display:flex;gap:8px;width:100%;align-items:center' }, this._muteBtn(), h('button', { class: 'hw-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit'))))));
    this._soundPill();
  }

  startLevel(i) {
    this.level = i;
    this.w = new World({ level: i, seed: 5, easy: this.easy });
    this.mode = 'play'; this.fx = []; this.bumps.clear(); this.timers = []; this.acc = 0; this.padDir = 0; this.jumpBtn = false;
    this._sprites(this.w.world);
    this.cam.x = 0; this.camSnap = true;
    this.layer.replaceChildren(); this.sound.setMode(this.w.world);
    this.coinEl = h('span', {}, ''); this.lifeEl = h('span', {}, '');
    this.flash = h('div', { class: 'hw-flash' });
    const pause = h('button', { class: 'hw-round', 'aria-label': I.t('pausedT'), onclick: () => this.pauseGame() }, '⏸');
    this.hint = h('div', { class: 'hw-hint' }, '');
    this.layer.append(this.flash,
      h('div', { class: 'hw-top' }, pause, h('div', { class: 'hw-pill' }, '🪙 ', this.coinEl), h('div', { class: 'hw-pill' }, '❤️ ', this.lifeEl), h('div', { class: 'hw-pill' }, `${WORLD_ICON[Math.floor(i / 2) % 4]} ${I.num(i + 1)}`), this._muteBtn()),
      this.hint, this._pad(), this._jump());
    this._soundPill();
    if (i === 0) this._say(I.t('hint1'), 4);
  }

  _pad() {
    const l = h('div', { class: 'hw-cb', 'aria-label': I.t('left') }, '◀'); const r = h('div', { class: 'hw-cb', 'aria-label': I.t('right') }, '▶');
    const pad = h('div', { class: 'hw-pad' }, l, r);
    let pid = null;
    const set = (e) => { const b = pad.getBoundingClientRect(); const d = e.clientX < b.left + b.width / 2 ? -1 : 1; this.padDir = d; l.classList.toggle('on', d < 0); r.classList.toggle('on', d > 0); };
    const clear = () => { pid = null; this.padDir = 0; l.classList.remove('on'); r.classList.remove('on'); };
    pad.addEventListener('pointerdown', (e) => { e.preventDefault(); pid = e.pointerId; try { pad.setPointerCapture(pid); } catch (_) { /* fine */ } set(e); });
    pad.addEventListener('pointermove', (e) => { if (e.pointerId === pid) set(e); });
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) pad.addEventListener(ev, (e) => { if (e.pointerId === pid || ev === 'lostpointercapture') clear(); });
    return pad;
  }

  _jump() {
    const b = h('button', { class: 'hw-jump', 'aria-label': I.t('jump') }, '⤒');
    let pid = null;
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); pid = e.pointerId; try { b.setPointerCapture(pid); } catch (_) { /* fine */ } this.jumpBtn = true; b.classList.add('on'); });
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(ev, (e) => { if (e.pointerId === pid || ev === 'lostpointercapture') { pid = null; this.jumpBtn = false; b.classList.remove('on'); } });
    return b;
  }

  _say(txt, sec = 2.4) { if (!this.hint) return; this.hint.textContent = txt; this.hint.classList.add('show'); clearTimeout(this._hintT); this._hintT = setTimeout(() => this.hint && this.hint.classList.remove('show'), sec * 1000); }
  _later(sec, fn) { this.timers.push({ t: sec, fn }); }

  pauseGame() {
    if (this.mode !== 'play') return;
    this.mode = 'pause'; this.padDir = 0; this.jumpBtn = false; this.sound.play('pause'); this.sound.suspend();
    this.pauseEl = h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('pausedT')),
      h('button', { class: 'hw-btn', onclick: () => this.resumeGame() }, I.t('resume')),
      h('button', { class: 'hw-btn alt', onclick: () => { this.pauseEl.remove(); this.sound.resume(); this.startLevel(this.level); } }, I.t('again')),
      h('button', { class: 'hw-btn dark', onclick: () => { this.sound.resume(); this.showMenu(); } }, I.t('menu'))));
    this.layer.append(this.pauseEl);
  }
  resumeGame() { if (this.mode !== 'pause') return; this.mode = 'play'; if (this.pauseEl) this.pauseEl.remove(); this.sound.resume(); this.last = performance.now(); }
  pause() { if (this.mode === 'play') this.pauseGame(); else this.sound.suspend(); }

  _sprites(world) { const px = Math.ceil(this.ts * this.dpr) + 1; const key = `${world}${px}`; if (key !== this.spriteKey) { this.sprites = makeSprites(px, world); this.spriteKey = key; } }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      else if (this.mode === 'menu') { this.menuT += dt; }
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _burst(x, y, n, cols, kind = 'spark', sp = 4) { for (let i = 0; i < n; i++) { const a = Math.random() * 6.283; this.fx.push({ kind, x, y, vx: Math.cos(a) * sp * (0.4 + Math.random()), vy: Math.sin(a) * sp * (0.4 + Math.random()) - 2, t: 0, life: 0.5 + Math.random() * 0.4, col: cols[i % cols.length], r: 0.06 + Math.random() * 0.06 }); } }

  _update(dt) {
    const w = this.w;
    this.acc += dt;
    let n = 0;
    while (this.acc >= 1 / 60 && n < 5) {
      this.acc -= 1 / 60; n++;
      const was = w.state;
      for (const e of w.step(1 / 60, this._input())) this._event(e);
      if (was === 'play' && w.state !== 'play') break;
    }
    this.coinEl.textContent = I.num(w.coins); this.lifeEl.textContent = I.num(w.lives);
    for (const f of this.fx) { f.t += dt; if (f.vx !== undefined) { f.x += f.vx * dt; f.y += f.vy * dt; f.vy += 14 * dt; } }
    this.fx = this.fx.filter((f) => f.t < (f.life || 0.7));
    for (const [k, v] of this.bumps) { if (this.clock - v > 0.25) this.bumps.delete(k); }
    for (const t of this.timers) t.t -= dt;
    const due = this.timers.filter((t) => t.t <= 0); this.timers = this.timers.filter((t) => t.t > 0); due.forEach((t) => t.fn());
    // camera
    const vw = this.cw / this.ts; const p = w.p;
    const tx = clamp(p.x + 0.4 + p.face * 1.2 - vw * (this.portrait ? 0.4 : 0.38), 0, Math.max(0, w.len - vw));
    this.cam.x = this.camSnap ? tx : this.cam.x + (tx - this.cam.x) * Math.min(1, dt * 7);
    this.camSnap = false;
  }

  _event(e) {
    const w = this.w; const p = w.p; const s = this.sound;
    switch (e.type) {
      case 'jump': s.play('jump'); this._burst(p.x + 0.4, p.y + p.h, 4, ['#fff', '#e8e0d0'], 'dust', 1.5); break;
      case 'coin': s.play('coin'); this._burst(p.x + 0.4, p.y + 0.4, 5, ['#ffe45a', '#fff'], 'spark', 3); break;
      case 'block': this.bumps.set(`${e.tx},${e.ty}`, this.clock); s.play('block'); this.fx.push({ kind: 'coin', x: e.tx + 0.5, y: e.ty - 0.2, t: 0, life: 0.6 }); if (e.mush) { s.play('appear'); this._say(I.t('hintMush'), 1.8); } break;
      case 'bump': this.bumps.set(`${e.tx},${e.ty}`, this.clock); s.play('bump'); break;
      case 'brick': s.play('brick'); this._burst(e.tx + 0.5, e.ty + 0.5, 10, [P(this.w).brick, P(this.w).brickD], 'chunk', 5); break;
      case 'stomp': s.play('stomp'); this._burst(e.x + 0.45, e.y + 0.6, 8, ['#ffe45a', '#fff', '#ff9ad8'], 'spark', 4); break;
      case 'power': s.play('power'); this._say(I.t('hintBig'), 2); this._burst(p.x + 0.4, p.y + 0.8, 14, ['#ffe45a', '#a05ae8', '#fff'], 'spark', 5); break;
      case 'shrink': s.play('shrink'); break;
      case 'lose': s.play('lose'); this.camSnap = true; this._flash(); break;
      case 'checkpoint': s.play('check'); this._say(I.t('hintCp'), 1.6); break;
      case 'lost': this._later(0.7, () => this._showLost()); break;
      case 'won': s.play('win'); s.setMode(null); this._burst(p.x + 0.4, p.y, 24, ['#ffe45a', '#ff6a8a', '#6ae0ff', '#fff'], 'spark', 6); this._later(1.1, () => this._showWon()); break;
      default: break;
    }
  }

  _flash() { if (!this.flash) return; this.flash.style.transition = 'none'; this.flash.style.opacity = '0.7'; requestAnimationFrame(() => { this.flash.style.transition = 'opacity .5s'; this.flash.style.opacity = '0'; }); }

  _showWon() {
    const w = this.w; const i = this.level;
    this.mode = 'won';
    this.save.stars[i + 1] = Math.max(this.save.stars[i + 1] || 0, w.stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, i + 2));
    this.save.coins += w.coins;
    this.post({ type: 'save', save: this.save });
    const kids = [h('div', { class: 'hw-title' }, I.t('win')), h('div', { class: 'hw-small' }, I.t('wonText')), this.stars(w.stars), h('div', { class: 'hw-pill' }, `🪙 ${I.num(w.coins)}`)];
    if (i < LEVELS - 1) kids.push(h('button', { class: 'hw-btn', onclick: () => this.startLevel(i + 1) }, I.t('next')));
    kids.push(h('button', { class: `hw-btn ${i < LEVELS - 1 ? 'alt' : ''}`, onclick: () => this.startLevel(i) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')));
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, kids)));
  }

  _showLost() {
    this.mode = 'lost'; this.sound.setMode(null);
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('lostT')), h('div', { class: 'hw-small' }, I.t('lostText')),
      h('button', { class: 'hw-btn', onclick: () => this.startLevel(this.level) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  // ---------- drawing ----------
  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const ts = this.ts;
    const inMenu = this.mode === 'menu';
    const w = inMenu ? this.demo : this.w;
    if (!w) return;
    const vw = W / ts; const vh = H / ts;
    const camX = inMenu ? (this.menuT * 1.6) % Math.max(1, w.len - vw - 2) : this.cam.x;
    const camY = w.H + (this.portrait ? 4.2 : 0.2) - vh;
    const sx = (x) => Math.round((x - camX) * ts); const sy = (y) => Math.round((y - camY) * ts);
    const world = w.world; const P = PAL[world];
    if (inMenu) this._sprites(world);
    const gy = sy(12);
    drawBackground(g, world, W, H, camX, ts, gy, this.clock);
    const grid = w.grid; const sp = this.sprites; const T = Math.ceil(ts) + 1;
    const x0 = Math.max(0, Math.floor(camX) - 1); const x1 = Math.min(w.len - 1, Math.ceil(camX + vw) + 1);
    const y0 = Math.max(0, Math.floor(camY)); const y1 = Math.min(w.H - 1, Math.ceil(camY + vh));
    const solid = (c) => c === '#' || c === 'B' || c === '?' || c === 'U' || c === 'P';
    // end of the level: castle and flag
    drawCastle(g, P, ts, sx(w.flagX + 1.7), sy(12), this.clock);
    drawFlag(g, ts, sx(w.flagX + 0.5), sy(5), sy(12), this.clock, '#ff5a8a');
    for (let ty = y0; ty <= y1; ty++) {
      for (let tx = x0; tx <= x1; tx++) {
        const c = grid[ty][tx];
        if (c === ' ' || c === 'F') continue;
        let bx = sx(tx); let by = sy(ty);
        if (c === '#') { const above = ty > 0 ? grid[ty - 1][tx] : ' '; g.drawImage(solid(above) ? sp.dirt : sp.top, bx, by, T, T); }
        else if (c === 'B' || c === '?' || c === 'U') { const bump = this.bumps.get(`${tx},${ty}`); if (bump !== undefined) by -= Math.sin(((this.clock - bump) / 0.25) * Math.PI) * ts * 0.3; g.drawImage(c === 'B' ? sp.brick : c === '?' ? sp.q : sp.used, bx, by, T, T); }
        else if (c === 'c') drawCoin(g, bx + ts / 2, by + ts / 2, ts, this.clock, tx * 0.7);
        else if (c === 'P') { if (tx > 0 && grid[ty][tx - 1] === 'P') continue; drawPipe(g, P, bx, by, ts, !(ty > 0 && grid[ty - 1][tx] === 'P')); }
      }
    }
    // earth under the level (tall screens)
    if (this.portrait) for (let tx = x0; tx <= x1; tx++) if (grid[w.H - 1][tx] === '#') for (let by = sy(w.H); by < H; by += T - 1) g.drawImage(sp.dirt, sx(tx), by, T, T);
    if (!inMenu) {
      for (const m of w.mush) if (!m.taken) drawMushroom(g, sx(m.x + 0.45), sy(m.y + 1), ts, this.clock);
      for (const e of w.enemies) {
        if (e.dead) { const age = w.time - (e.deadAt || 0); if (age > 0.6) continue; drawBug(g, { x: sx(e.x + 0.45), y: sy(e.y + 1), s: ts, t: this.clock, dir: Math.sign(e.vx) || 1, squash: 1 }); continue; }
        if (e.x < camX - 2 || e.x > camX + vw + 2) continue;
        drawBug(g, { x: sx(e.x + 0.45), y: sy(e.y + 1), s: ts, t: this.clock, dir: Math.sign(e.vx) || 1, squash: 0 });
      }
      const p = w.p;
      const hop = w.state === 'won' ? Math.abs(Math.sin(this.clock * 8)) * 0.3 : 0;
      drawHero(g, { x: sx(p.x + p.w / 2), y: sy(p.y + p.h) - hop * ts, s: ts, face: p.face, vx: w.state === 'won' ? 0 : p.vx, vy: p.vy, ground: p.ground, t: this.clock, h: p.h, girl: this.girl, inv: p.inv });
      for (const f of this.fx) {
        const k = f.t / (f.life || 0.7);
        g.globalAlpha = Math.max(0, 1 - k);
        if (f.kind === 'coin') drawCoin(g, sx(f.x), sy(f.y - k * 1.6), ts, this.clock * 2, 0);
        else { g.fillStyle = f.col; const r = ts * f.r * (f.kind === 'chunk' ? 1.6 : 1); g.fillRect(sx(f.x) - r, sy(f.y) - r, r * 2, r * 2); }
        g.globalAlpha = 1;
      }
    }
  }

  dispose() {
    cancelAnimationFrame(this.raf); clearTimeout(this._hintT); this.sound.dispose(); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey);
    this.root.remove();
  }
}

function P(w) { return PAL[w.world]; }
void WORLDS;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.HopWorld = api;
export default api;
