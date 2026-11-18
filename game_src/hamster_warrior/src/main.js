// «الهامستر المحارب» — Hamster Warrior. Entry: window.HamsterWarrior.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cute hamster warrior walks a forest path; his POWER is a big number. Gates and cards add or multiply it (swords, shields,
// magic); he can only beat monsters weaker than him and absorbs their power; every chapter ends with a big boss; coins buy
// upgrades. 12 levels, 3 chapters. three.js, art and sound made in code. No network, no ads, no tracking, no gore (monsters pop).
import * as THREE from 'three';
import { Run, LEVELS, CHAPTERS, UPG, HALF, upgradeCost, bossPower, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['الهامستر المحارب', 'Hamster Warrior'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'Level'], how: ['اسحب يمين وشمال — اختار البوابة الأحسن وقاتل الأضعف بس!', 'Drag left and right: pick the better gate and fight only weaker monsters!'],
  won: ['كسبت المرحلة! 🏆', 'Level won! 🏆'], coins: ['عملات', 'coins'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'], bounce: ['الوحش أقوى منك! قوّي نفسك الأول', 'The monster is stronger! Power up first'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], boss: ['الزعيم!', 'BOSS!'], power: ['القوة', 'Power'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'gate+': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.05, 0.2, 0.12)); break;
      case 'gatex': [0, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.25, 0.13)); break;
      case 'gate-': this.slide('sawtooth', 400, 120, t, 0.3, 0.08); break;
      case 'absorb': this.slide('triangle', 300, 900, t, 0.2, 0.1); this.noise(t, 0.15, 0.08, 'bandpass', 1500, 2); break;
      case 'bounce': this.noise(t, 0.25, 0.12, 'lowpass', 500); this.tone('sine', 110, t, 0.25, 0.12); break;
      case 'coin': this.tone('square', hz(88), t, 0.06, 0.05); this.tone('square', hz(95), t + 0.06, 0.1, 0.05); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('wind'); this.setTune({ tempo: 112, beats: 16, wave: 'triangle', vol: 0.08, notes: [[0, 67, 1], [1, 71, 1], [2, 74, 2], [4, 72, 1], [5, 69, 1], [6, 67, 2], [8, 65, 1], [9, 69, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 62, 2], [0, 43, 2], [4, 48, 2], [8, 41, 2], [12, 43, 2]] }); }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 14, 10), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const texCache = new Map();
function labelTex(text, bg) {
  const k = `${text}|${bg}`;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.beginPath(); g.roundRect(6, 6, 244, 116, 28); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 7; g.stroke();
  g.fillStyle = '#fff'; g.font = '900 74px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 9; g.strokeText(text, 128, 68); g.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texCache.set(k, t); return t;
}
function sprite(text, bg, sx, sy) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg), transparent: true, depthTest: false })); sp.scale.set(sx, sy, 1); sp.renderOrder = 10; return sp; }
const fmt = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1)}K` : String(Math.round(n)));

function makeHamster() {
  const g = new THREE.Group();
  const body = new THREE.Group();
  body.add(mesh(geo.sphere, M(0xf0b060), 0, 0.85, 0, 1.5, 1.4, 1.5));
  body.add(mesh(geo.sphere, M(0xfff0d8), 0, 0.7, 0.45, 1.0, 0.9, 0.7));
  body.add(mesh(geo.sphere, M(0xf0b060), -0.5, 1.6, 0.1, 0.45, 0.5, 0.2), mesh(geo.sphere, M(0xf0b060), 0.5, 1.6, 0.1, 0.45, 0.5, 0.2));
  body.add(mesh(geo.sphere, M(0x111111), -0.25, 1.0, 0.7, 0.16, 0.2, 0.1), mesh(geo.sphere, M(0x111111), 0.25, 1.0, 0.7, 0.16, 0.2, 0.1), mesh(geo.sphere, M(0xff8aa0), 0, 0.82, 0.78, 0.18, 0.14, 0.1));
  body.add(mesh(geo.sphere, M(0xc8ccd4), 0, 1.5, 0.15, 1.1, 0.5, 1.1));
  body.add(mesh(geo.box, M(0xd8dce8), 0.85, 0.9, 0.3, 0.15, 1.4, 0.15), mesh(geo.box, M(0x8a5a2a), 0.85, 0.2, 0.3, 0.3, 0.3, 0.3));
  body.add(mesh(geo.cyl, M(0x3a6ae8), -0.85, 0.85, 0.3, 0.12, 0.9, 0.9).rotateZ(Math.PI / 2));
  g.add(body); g.userData.body = body;
  return g;
}
function makeMonster(kind, boss) {
  const g = new THREE.Group();
  if (kind === 0) { g.add(mesh(geo.sphere, M(0x5ad85a), 0, 0.6, 0, 1.6, 1.1, 1.6), mesh(geo.sphere, M(0xffffff), -0.3, 0.9, 0.6, 0.3, 0.3, 0.2), mesh(geo.sphere, M(0xffffff), 0.3, 0.9, 0.6, 0.3, 0.3, 0.2)); }
  else if (kind === 1) { g.add(mesh(geo.cyl, M(0xf4e8d0), 0, 0.6, 0, 0.7, 1.2, 0.7), mesh(geo.sphere, M(0xe8453a), 0, 1.4, 0, 1.8, 1.0, 1.8), mesh(geo.sphere, M(0xffffff), -0.4, 1.7, 0.5, 0.3, 0.3, 0.2), mesh(geo.sphere, M(0xffffff), 0.4, 1.7, 0.5, 0.3, 0.3, 0.2)); }
  else { g.add(mesh(geo.cyl, M(0x8a4ab8), 0, 0.8, 0, 1.0, 1.3, 0.8), mesh(geo.sphere, M(0x9a6ad8), 0, 1.8, 0, 0.9, 0.9, 0.9), mesh(geo.cone, M(0x9a6ad8), -0.4, 2.4, 0, 0.3, 0.6, 0.3), mesh(geo.cone, M(0x9a6ad8), 0.4, 2.4, 0, 0.3, 0.6, 0.3), mesh(geo.sphere, M(0xffe04a, 0xaa8800), -0.2, 1.9, 0.4, 0.2, 0.2, 0.1), mesh(geo.sphere, M(0xffe04a, 0xaa8800), 0.2, 1.9, 0.4, 0.2, 0.2, 0.1)); }
  g.scale.setScalar(boss ? 3.2 : 1);
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('hw-style')) document.head.append(h('style', { id: 'hw-style' }, css('hw', '#5aa83a', '#2a5a1a', '#ffe04a')));
    this.root = h('div', { class: 'hw-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'hw-layer' });
    this.mode = 'menu'; this.clock = 0; this.fx = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xa8e8ff);
    this.scene.fog = new THREE.Fog(0xcdf4ff, 40, 130);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 300);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x6ab850, 1.7));
    const sun = new THREE.DirectionalLight(0xfff4d0, 1.2); sun.position.set(-10, 30, -10); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.hero = makeHamster(); this.scene.add(this.hero);
    this.powerLabel = sprite('10', '#2a5ac8', 3, 1.5); this.scene.add(this.powerLabel);
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 72 : 56; this.camera.updateProjectionMatrix(); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.run && this.drag) this.run.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = true; move(e); });
    this.root.addEventListener('pointermove', move);
    this.root.addEventListener('pointerup', () => { this.drag = false; }); this.root.addEventListener('pointercancel', () => { this.drag = false; });
    this._onKey = (e) => { if (!this.run || this.mode !== 'play') return; const k = e.key.toLowerCase(); if (e.type === 'keydown') { if (k === 'arrowleft' || k === 'a') this.run.targetX = -(HALF - 0.5); if (k === 'arrowright' || k === 'd') this.run.targetX = HALF - 0.5; } else if (['arrowleft', 'arrowright', 'a', 'd'].includes(k)) this.run.targetX = 0; };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _clear() { this.layer.replaceChildren(); }
  _soundPill() { const pill = h('button', { class: 'hw-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  _buildWorld(run) {
    for (const c of [...this.world.children]) this.world.remove(c);
    this.objs = new Map();
    const L = run.L; const ch = Math.floor(run.level / 4);
    const grass = [0x7ad858, 0x9ac858, 0xa8a8a0][ch];
    this.world.add(mesh(geo.box, M(grass), 0, -0.6, L / 2, 120, 0.2, L + 100), mesh(geo.box, M(0xe8d098), 0, -0.1, L / 2, HALF * 2 + 0.6, 0.2, L + 80));
    for (const s of [-1, 1]) for (let z = 4; z < L + 40; z += 7) {
      const x = s * (HALF + 2 + ((z * 3) % 6));
      if (ch === 2) this.world.add(mesh(geo.cone, M(0x8a8a92), x, 1.5, z, 3, 3 + (z % 3), 3));
      else { this.world.add(mesh(geo.cyl, M(0x8a5a2a), x, 1, z, 0.5, 2, 0.5)); this.world.add(mesh(geo.sphere, M(ch === 1 ? 0xe86a8a : 0x3aa84a), x, 3, z, 2.4, 2.4, 2.4)); }
    }
    const fin = mesh(geo.box, M(0xffffff, 0x8888ff), 0, 0.05, L, HALF * 2, 0.06, 1); this.world.add(fin);
    for (const t of run.things) {
      const g = new THREE.Group();
      if (t.kind === 'gate') {
        const pos = t.op === 'mul' || t.v >= 0;
        g.add(mesh(geo.box, new THREE.MeshBasicMaterial({ color: pos ? 0x3a8aff : 0xff3a4a, transparent: true, opacity: 0.45 }), 0, 1.8, 0, t.w, 3.4, 0.2), mesh(geo.box, M(pos ? 0x2a5ac8 : 0xc82a3a), -t.w / 2, 1.8, 0, 0.3, 3.6, 0.3), mesh(geo.box, M(pos ? 0x2a5ac8 : 0xc82a3a), t.w / 2, 1.8, 0, 0.3, 3.6, 0.3));
        const s = sprite(`${t.icon} ${t.op === 'mul' ? `x${t.v}` : t.v >= 0 ? `+${t.v}` : t.v}`, pos ? '#2a6ae0' : '#e02a3a', 3.2, 1.6); s.position.y = 4.4; g.add(s);
      } else if (t.kind === 'monster' || t.kind === 'boss') {
        g.add(makeMonster(t.kindId || 0, t.boss));
        const s = sprite(fmt(t.power), t.boss ? '#8a1a6a' : '#8a1a1a', t.boss ? 4.4 : 2.4, t.boss ? 2.2 : 1.2); s.position.y = t.boss ? 9 : 3; g.add(s);
        g.userData.mon = g.children[0];
      } else if (t.kind === 'coin') { g.add(mesh(geo.cyl, M(0xffd23a, 0x886600), 0, 1, 0, 0.9, 0.15, 0.9).rotateX(Math.PI / 2)); }
      g.position.set(-t.x, 0, t.z); this.world.add(g); this.objs.set(t.id, g);
    }
  }

  showMenu() {
    this.mode = 'menu'; this.run = null; this._clear(); this.sound.setMode(false);
    this.demo = new Run({ level: 0, seed: 2 }); this._buildWorld(this.demo);
    const ar = I.getLang() !== 'en';
    const lvs = h('div', { class: 'hw-lvs' }, Array.from({ length: LEVELS }, (_, i) => { const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0; return h('button', { class: `hw-lv${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('i', {}, lock ? '🔒' : (i % 4 === 3 ? '👑' : '🐹')), h('span', {}, I.num(i + 1)), h('span', {}, '⭐'.repeat(st) || '·')); }));
    const shop = h('div', { style: 'display:flex;gap:calc(var(--u)*1.4);width:100%' }, UPG.map((u) => { const lv = this.save.up[u.id]; const c = upgradeCost(u.id, lv); return h('button', { class: `hw-bld${c !== null && this.save.coins >= c ? ' can' : ''}`, style: 'flex:1', onclick: () => { if (c === null || this.save.coins < c) return; this.save.coins -= c; this.save.up[u.id] += 1; this.post({ type: 'save', save: this.save }); this.sound.play('gate+'); this.showMenu(); } }, h('span', {}, ar ? u.ar : u.en), h('small', {}, `${I.num(lv)}/${I.num(u.max)}`), h('small', {}, c === null ? '✓' : `🪙 ${I.num(c)}`)); }));
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-logo' }, '🐹 ', I.t('title')), h('div', { class: 'hw-small' }, I.t('how')), h('div', { class: 'hw-pill' }, `🪙 ${I.num(this.save.coins)}`), shop, lvs, h('button', { class: 'hw-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'hw-hint' }); this.layer.append(this.hintEl); this._soundPill();
    void CHAPTERS;
  }

  start(i) {
    this.levelIdx = i;
    this.run = new Run({ level: i, seed: (Date.now() & 0xffff) + 1, up: this.save.up, easy: this.age <= 4 });
    this._buildWorld(this.run);
    this.mode = 'play'; this.paused = false; this.fx = [];
    this._clear(); this.sound.setMode(true);
    this.pwrEl = h('span', {}, ''); this.coinEl = h('span', {}, ''); this.barEl = h('b', { style: 'width:0%' });
    const back = h('button', { class: 'hw-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'hw-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'hw-top' }, back, h('div', { class: 'hw-pill' }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: 'hw-pill' }, this.pwrEl), h('div', { class: 'hw-pill' }, this.coinEl), pause), h('div', { class: 'hw-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🐹'), h('div', { class: 'hw-bar' }, this.barEl), h('span', {}, '👑')));
    this.hintEl = h('div', { class: 'hw-hint', style: 'top:calc(var(--u)*24)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('paused')), h('button', { class: 'hw-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'hw-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _won() {
    const r = this.run; const lv = this.levelIdx + 1;
    this.save.coins += r.reward; this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, r.stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1));
    this.post({ type: 'save', save: this.save }); this.sound.play('win');
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('won')), h('div', { class: 'hw-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off' }, '⭐'))), h('div', { class: 'hw-pill' }, `${I.t('power')} ${fmt(r.power)} · 🪙 +${I.num(r.reward)}`),
      this.levelIdx < LEVELS - 1 ? h('button', { class: 'hw-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')) : null, h('button', { class: 'hw-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _frame() { const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused && this.run) this._update(dt); this._render(dt); }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'gate': this.sound.play(e.op === 'mul' ? 'gatex' : e.v >= 0 ? 'gate+' : 'gate-'); this.fx.push({ t: 0, life: 1, text: e.op === 'mul' ? `x${e.v}` : e.v >= 0 ? `+${e.v}` : `${e.v}` }); break;
        case 'absorb': this.sound.play('absorb'); this.fx.push({ t: 0, life: 1, text: `+${fmt(e.gain)} 💥` }); break;
        case 'bounce': this.sound.play('bounce'); this.fx.push({ t: 0, life: 1, text: `-${fmt(e.loss)}` }); this.hint(I.t('bounce'), 2200); break;
        case 'coin': this.sound.play('coin'); break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    this.pwrEl.textContent = `💪 ${fmt(r.power)}`; this.coinEl.textContent = `🪙 ${I.num(r.coins)}`;
    this.barEl.style.width = `${Math.round(Math.min(1, r.z / r.L) * 100)}%`;
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _render(dt) {
    const r = this.run || this.demo; const play = !!this.run;
    const zr = play ? r.z : 0; const xr = play ? r.x : 0;
    this.hero.position.set(-xr, Math.abs(Math.sin(this.clock * 12)) * 0.15, zr);
    this.hero.userData.body.rotation.z = Math.sin(this.clock * 12) * 0.06;
    this.hero.scale.setScalar(Math.min(2.4, 1 + Math.log10(Math.max(1, play ? r.power : 10)) * 0.25));
    this.hero.visible = true;
    const key = play ? fmt(r.power) : '10';
    if (this._pk !== key) { this._pk = key; this.powerLabel.material.map = labelTex(key, '#2a5ac8'); this.powerLabel.material.needsUpdate = true; }
    this.powerLabel.position.set(-xr, 3.8 * this.hero.scale.x, zr);
    if (play) for (const t of r.things) { const o = this.objs.get(t.id); if (!o) continue; if (t.done) o.visible = false; else if (t.kind === 'coin') o.rotation.y = this.clock * 3; else if (t.kind === 'monster' || t.kind === 'boss') o.rotation.y = Math.PI + Math.sin(this.clock * 4 + t.id) * 0.15; }
    this.camera.position.x += (-xr * 0.6 - this.camera.position.x) * Math.min(1, dt * 5);
    const zc = play ? Math.min(zr, r.L + 2) : 0;
    this.camera.position.set(this.camera.position.x, this.cw < this.ch ? 8.2 : 6.6, zc - (this.cw < this.ch ? 10 : 8.5));
    this.camera.lookAt(this.camera.position.x * 0.5, 1.4, zc + 16);
    this.renderer.render(this.scene, this.camera);
    this._floaters();
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    this.fx.forEach((f, i) => {
      let el = this.fxEls[i];
      if (!el) { el = h('div', { style: 'position:absolute;left:50%;top:45%;font-weight:900;color:#fff;text-shadow:0 0 8px #000,0 0 3px #000;pointer-events:none;font-size:calc(var(--u)*8)' }); this.layer.append(el); this.fxEls[i] = el; }
      el.style.display = 'block'; el.style.opacity = String(1 - f.t / f.life); el.style.transform = `translate(-50%,${-f.t * 90}px)`; el.textContent = f.text;
    });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

void bossPower;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.HamsterWarrior = api;
export default api;
