// «شاحنة الكور» — Ball Scoop. Entry: window.BallScoop.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A yellow truck drives forward and scoops piles of colourful balls with its big front shovel. Steer through gates (+50, x3) to
// grow the pile, dodge walls that knock balls out, and at the end dump everything into a giant bank for coins (upgrades: start
// balls, shovel width, coin value). 12 levels with longer, crazier roads. The balls pile up in front of the shovel and spill
// over its sides (a simple spring pile, not a full physics engine). three.js, art and sound made in code. No network, no ads.
import * as THREE from 'three';
import { Run, LEVELS, UPG, HALF, upgradeCost, normalizeSave, MAX_BALLS } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['شاحنة الكور', 'Ball Scoop'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'Level'], how: ['اسحب يمين وشمال — جمّع الكور، اعدّي من البوابات، واتفادى الحيطان', 'Drag left and right: scoop balls, pass gates, dodge walls'],
  bank: ['البنك الكبير', 'The giant bank'], coins: ['عملات', 'coins'], shop: ['المتجر', 'Shop'], max: ['أقصى', 'Max'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], balls: ['كور', 'balls'], best: ['أحسن', 'Best'],
  hitWall: ['الحيطة وقّعت كور!', 'The wall knocked balls out!'],
};
const I = makeI18n(S);
const COLORS = [0xff4a6a, 0x4ab8ff, 0xffd23a, 0x5af08a, 0xb86aff, 0xff8a2a];

class Sound extends SynthBase {
  play(n, a) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'scoop': this.noise(t, 0.12, 0.08, 'bandpass', 1800, 2); this.tone('triangle', hz(84 + Math.min(12, Math.floor((a || 10) / 10))), t, 0.1, 0.06); break;
      case 'gate+': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.05, 0.2, 0.12)); break;
      case 'gatex': [0, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.25, 0.13)); break;
      case 'gate-': this.slide('sawtooth', 400, 120, t, 0.3, 0.08); break;
      case 'wall': this.noise(t, 0.3, 0.14, 'lowpass', 600); this.tone('sine', 90, t, 0.3, 0.14); break;
      case 'bank': for (let i = 0; i < 12; i++) this.tone('square', hz(84 + (i % 5) * 2), t + i * 0.07, 0.08, 0.05); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); this.stopEng(); return; } this._eng(); this.setTune({ tempo: 120, beats: 16, wave: 'square', vol: 0.045, notes: [[0, 60, 1], [1, 64, 1], [2, 67, 1], [3, 64, 1], [4, 62, 1], [5, 65, 1], [6, 69, 1], [7, 65, 1], [8, 60, 1], [9, 64, 1], [10, 67, 2], [12, 65, 1], [13, 62, 1], [14, 60, 2], [0, 36, 2], [4, 38, 2], [8, 36, 2], [12, 41, 2]] }); }
  _eng() { const c = this.ctx; if (!c || this.e) return; const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 55; const lp = c.createBiquadFilter(); lp.frequency.value = 300; const g = c.createGain(); g.gain.value = this.muted ? 0.0001 : 0.03; o.connect(lp).connect(g).connect(this.sfx); o.start(); this.e = { o, g }; }
  stopEng() { if (this.e) { try { this.e.o.stop(); } catch (_) { /* fine */ } this.e = null; } }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 10, 8), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const texCache = new Map();
function labelTex(text, bg, fg = '#fff') {
  const k = `${text}|${bg}|${fg}`;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.beginPath(); g.roundRect(6, 6, 244, 116, 28); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 7; g.stroke(); }
  g.fillStyle = fg; g.font = '900 78px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 9; g.strokeText(text, 128, 68); g.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texCache.set(k, t); return t;
}
function sprite(text, bg, sx, sy) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg), transparent: true, depthTest: false })); sp.scale.set(sx, sy, 1); sp.renderOrder = 10; return sp; }

function makeTruck() {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(0xffc82a), 0, 0.9, -0.6, 2.0, 1.0, 2.8));
  g.add(mesh(geo.box, M(0x2a3a4a, 0x102030), 0, 1.6, -0.9, 1.5, 0.9, 1.2));
  g.add(mesh(geo.box, M(0xffc82a), 0, 2.15, -0.9, 1.6, 0.15, 1.3));
  for (const sx of [-1.1, 1.1]) for (const z of [0.4, -1.5]) g.add(mesh(geo.cyl, M(0x1a1a1e), sx, 0.55, z, 1.1, 0.55, 1.1).rotateZ(Math.PI / 2));
  // the big front shovel
  g.add(mesh(geo.box, M(0xe8e8ee), 0, 0.7, 1.6, 3.6, 0.9, 0.4));
  g.add(mesh(geo.box, M(0xc8ccd4), -1.8, 0.9, 1.4, 0.2, 1.4, 1.0)); g.add(mesh(geo.box, M(0xc8ccd4), 1.8, 0.9, 1.4, 0.2, 1.4, 1.0));
  g.add(mesh(geo.box, M(0x6a6e78), 0, 0.7, 0.9, 0.3, 0.3, 1.2));
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('bs-style')) document.head.append(h('style', { id: 'bs-style' }, css('bs', '#ffa82a', '#a85a10', '#fff0a0')));
    this.root = h('div', { class: 'bs-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'bs-layer' });
    this.mode = 'menu'; this.clock = 0; this.fx = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
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
    this.scene.background = new THREE.Color(0xffe4a8);
    this.scene.fog = new THREE.Fog(0xffe4a8, 40, 130);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 300);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8a868, 1.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.1); sun.position.set(-10, 30, -10); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.truck = makeTruck(); this.scene.add(this.truck);
    // the pile in front of the shovel and the loose balls on the road: instanced spheres with per-ball colour
    this.pile = new THREE.InstancedMesh(geo.sphere, new THREE.MeshLambertMaterial({ color: 0xffffff }), 700);
    this.pile.frustumCulled = false; this.scene.add(this.pile);
    this.road = new THREE.InstancedMesh(geo.sphere, new THREE.MeshLambertMaterial({ color: 0xffffff }), 1600);
    this.road.frustumCulled = false; this.scene.add(this.road);
    const col = new THREE.Color();
    for (let i = 0; i < 700; i++) this.pile.setColorAt(i, col.setHex(COLORS[i % COLORS.length]));
    for (let i = 0; i < 1600; i++) this.road.setColorAt(i, col.setHex(COLORS[(i * 7) % COLORS.length]));
    this.slots = Array.from({ length: 700 }, (_, i) => { const a = i * 2.399; const r = Math.sqrt(i) * 0.19; return { x: Math.cos(a) * r * 1.5, z: Math.sin(a) * r * 0.9 + 0.6, y: 0.55 + Math.max(0, 1.2 - r * 0.35) }; });
    this.pp = Array.from({ length: 700 }, () => ({ x: 0, y: 0.5, z: 2, vx: 0, vy: 0, vz: 0 }));
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 72 : 56; this.camera.updateProjectionMatrix(); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.run && this.drag) this.run.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = true; move(e); });
    this.root.addEventListener('pointermove', move);
    this.root.addEventListener('pointerup', () => { this.drag = false; }); this.root.addEventListener('pointercancel', () => { this.drag = false; });
    this._onKey = (e) => { if (!this.run || this.mode !== 'play') return; const k = e.key.toLowerCase(); if (e.type === 'keydown') { if (k === 'arrowleft' || k === 'a') this.run.targetX = -(HALF - 0.6); if (k === 'arrowright' || k === 'd') this.run.targetX = HALF - 0.6; } else if (['arrowleft', 'arrowright', 'a', 'd'].includes(k)) this.run.targetX = 0; };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _clear() { this.layer.replaceChildren(); }
  _soundPill() { const pill = h('button', { class: 'bs-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  _buildWorld(run) {
    for (const c of [...this.world.children]) this.world.remove(c);
    this.objs = new Map();
    const L = run.L;
    this.world.add(mesh(geo.box, M(0xd8a868), 0, -0.15, L / 2, HALF * 2 + 0.6, 0.3, L + 80));
    for (let z = 0; z < L + 40; z += 4) this.world.add(mesh(geo.box, M(z % 8 ? 0xe0b878 : 0xc89a58), 0, 0.01, z, HALF * 2, 0.02, 3.8));
    for (const s of [-1, 1]) { this.world.add(mesh(geo.box, M(s > 0 ? 0xff5a6a : 0x4ab8ff), s * (HALF + 0.5), 0.35, L / 2, 0.7, 0.9, L + 80)); this.world.add(mesh(geo.box, M(0x7ad858), s * (HALF + 9), -0.4, L / 2, 14, 0.2, L + 80)); }
    const bank = new THREE.Group();
    bank.add(mesh(geo.box, M(0xffd23a, 0x6a4a00), 0, 4, 0, 9, 8, 6), mesh(geo.box, M(0xc89a1a), 0, 8.4, 0, 10, 0.9, 7), mesh(geo.box, M(0x2a1a0a), 0, 1.6, -3.05, 4, 3.2, 0.2));
    for (const x of [-3.5, -1.2, 1.2, 3.5]) bank.add(mesh(geo.cyl, M(0xfff0b0), x, 4, -3.2, 0.9, 7.4, 0.9));
    const lab = sprite(I.t('bank'), '#a87a0a', 8, 4); lab.position.set(0, 10.8, -3.3); bank.add(lab);
    bank.position.set(0, 0, L + 8); this.world.add(bank); this.bank = bank;
    this.world.add(mesh(geo.box, M(0xffffff, 0x8888ff), 0, 0.05, L, HALF * 2, 0.06, 1));
    const col = new THREE.Color();
    this.loose = [];
    let n = 0;
    for (const t of run.things) {
      if (t.kind === 'pile') { t.ids = []; for (let k = 0; k < Math.min(24, t.n); k++) { t.ids.push(n); this.loose.push({ i: n, x: t.x + (Math.random() - 0.5) * t.w, z: t.z + (Math.random() - 0.5) * 2.4, y: 0.45, t }); this.road.setColorAt(n, col.setHex(COLORS[(n * 5 + t.id) % COLORS.length])); n++; if (n >= 1600) break; } }
      else if (t.kind === 'gate') {
        const g = new THREE.Group();
        const pos = t.op === 'mul' || t.v >= 0;
        g.add(mesh(geo.box, new THREE.MeshBasicMaterial({ color: pos ? 0x3a8aff : 0xff3a4a, transparent: true, opacity: 0.45 }), 0, 1.8, 0, t.w, 3.4, 0.2), mesh(geo.box, M(pos ? 0x2a5ac8 : 0xc82a3a), -t.w / 2, 1.8, 0, 0.3, 3.6, 0.3), mesh(geo.box, M(pos ? 0x2a5ac8 : 0xc82a3a), t.w / 2, 1.8, 0, 0.3, 3.6, 0.3));
        const s = sprite(t.op === 'mul' ? `x${t.v}` : t.v >= 0 ? `+${t.v}` : `${t.v}`, pos ? '#2a6ae0' : '#e02a3a', 3, 1.5); s.position.y = 4.4; g.add(s);
        g.position.set(-t.x, 0, t.z); this.world.add(g); this.objs.set(t.id, g);
      } else if (t.kind === 'wall') { const g = new THREE.Group(); g.add(mesh(geo.box, M(0xc8452a), 0, 1.1, 0, t.w, 2.2, 0.9)); for (let k = 0; k < 4; k++) g.add(mesh(geo.box, M(0xe8e0d0), (k - 1.5) * t.w / 4, 1.1, 0.5, t.w / 4 - 0.08, 0.3, 0.05)); g.position.set(-t.x, 0, t.z); this.world.add(g); this.objs.set(t.id, g); }
    }
    for (let j = n; j < 1600; j++) { const m = new THREE.Matrix4().makeScale(0, 0, 0); this.road.setMatrixAt(j, m); }
    this.road.instanceColor.needsUpdate = true;
  }

  showMenu() {
    this.mode = 'menu'; this.run = null; this._clear(); this.sound.setMode(false);
    this.demo = new Run({ level: 0, seed: 2 }); this._buildWorld(this.demo);
    const ar = I.getLang() !== 'en';
    const lvs = h('div', { class: 'bs-lvs' }, Array.from({ length: LEVELS }, (_, i) => { const lock = i + 1 > this.save.unlocked; const b = this.save.best[i + 1]; return h('button', { class: `bs-lv${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('i', {}, lock ? '🔒' : '🚜'), h('span', {}, I.num(i + 1)), h('span', {}, b ? `🏆${I.num(b)}` : '·')); }));
    const shop = h('div', { style: 'display:flex;gap:calc(var(--u)*1.4);width:100%' }, UPG.map((u) => { const lv = this.save.up[u.id]; const c = upgradeCost(u.id, lv); return h('button', { class: `bs-bld${c !== null && this.save.coins >= c ? ' can' : ''}`, style: 'flex:1', onclick: () => { if (c === null || this.save.coins < c) return; this.save.coins -= c; this.save.up[u.id] += 1; this.post({ type: 'save', save: this.save }); this.sound.play('bank'); this.showMenu(); } }, h('span', {}, ar ? u.ar : u.en), h('small', {}, `${I.num(lv)}/${I.num(u.max)}`), h('small', {}, c === null ? I.t('max') : `🪙 ${I.num(c)}`)); }));
    this.layer.append(h('div', { class: 'bs-dim' }, h('div', { class: 'bs-card' }, h('div', { class: 'bs-logo' }, '🚜 ', I.t('title')), h('div', { class: 'bs-small' }, I.t('how')), h('div', { class: 'bs-pill' }, `🪙 ${I.num(this.save.coins)}`), shop, lvs, h('button', { class: 'bs-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'bs-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  start(i) {
    this.levelIdx = i;
    this.run = new Run({ level: i, seed: (Date.now() & 0xffff) + 1, up: this.save.up, easy: this.age <= 4 });
    this._buildWorld(this.run);
    this.mode = 'play'; this.paused = false; this.fx = [];
    this._clear(); this.sound.setMode(true);
    this.pp.forEach((p) => { p.x = 0; p.y = 0.5; p.z = 2; p.vx = p.vy = p.vz = 0; });
    this.cntEl = h('span', {}, ''); this.barEl = h('b', { style: 'width:0%' });
    const back = h('button', { class: 'bs-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'bs-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'bs-top' }, back, h('div', { class: 'bs-pill' }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: 'bs-pill' }, this.cntEl), pause), h('div', { class: 'bs-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🚜'), h('div', { class: 'bs-bar' }, this.barEl), h('span', {}, '🏦')));
    this.hintEl = h('div', { class: 'bs-hint', style: 'top:calc(var(--u)*24)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'bs-dim' }, h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, I.t('paused')), h('button', { class: 'bs-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'bs-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'bs-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _done() {
    const r = this.run; const lv = this.levelIdx + 1;
    this.save.coins += r.coins; this.save.best[lv] = Math.max(this.save.best[lv] || 0, r.balls);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1));
    this.post({ type: 'save', save: this.save }); this.sound.play('win');
    this.layer.append(h('div', { class: 'bs-dim' }, h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, '🏦 ', I.t('bank')), h('div', { class: 'bs-pill' }, `${I.num(r.balls)} ${I.t('balls')}  →  🪙 ${I.num(r.coins)}`),
      this.levelIdx < LEVELS - 1 ? h('button', { class: 'bs-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')) : null, h('button', { class: 'bs-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'bs-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _frame() { const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused && this.run) this._update(dt); this._render(dt); }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'scoop': this.sound.play('scoop', e.n); this.fx.push({ t: 0, life: 0.9, text: `+${e.n}` }); break;
        case 'gate': this.sound.play(e.op === 'mul' ? 'gatex' : e.v >= 0 ? 'gate+' : 'gate-', e.v); this.fx.push({ t: 0, life: 1, text: e.op === 'mul' ? `x${e.v}` : e.v >= 0 ? `+${e.v}` : `${e.v}` }); break;
        case 'wall': this.sound.play('wall'); this.fx.push({ t: 0, life: 1, text: `-${e.lost}` }); this.hint(I.t('hitWall'), 1500); for (let k = 0; k < 40; k++) { const p = this.pp[Math.floor(Math.random() * Math.min(700, r.balls))]; p.vx = (Math.random() - 0.5) * 14; p.vy = 4 + Math.random() * 5; p.vz = Math.random() * 3; } break;
        case 'bank': this.sound.play('bank'); break;
        case 'done': this._done(); break;
        default: break;
      }
    }
    this.cntEl.textContent = `🔴 ${I.num(r.balls)}`;
    this.barEl.style.width = `${Math.round(Math.min(1, r.z / r.L) * 100)}%`;
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _render(dt) {
    const r = this.run || this.demo;
    const play = !!this.run;
    const zr = play ? r.z : 0;
    const xr = play ? r.x : 0;
    this.truck.position.set(-xr, 0, zr);
    this.truck.rotation.y = play ? (r.targetX - r.x) * 0.05 : 0;
    const m = new THREE.Matrix4();
    // the balls in front of the shovel: springs toward heap slots, spilling over the sides when many
    const V = play ? Math.min(700, Math.round(r.balls > 700 ? 560 + (r.balls / MAX_BALLS) * 140 : r.balls)) : 0;
    const wid = play ? 1 + Math.min(1.3, r.balls / 500) : 1;
    for (let i = 0; i < 700; i++) {
      const p = this.pp[i];
      if (i >= V) { m.makeScale(0, 0, 0); this.pile.setMatrixAt(i, m); continue; }
      const s = this.slots[i];
      const tx = -xr + s.x * wid; const tz = zr + 1.9 + s.z * wid * 0.9; const ty = s.y;
      p.vx += (tx - p.x) * 38 * dt; p.vz += (tz - p.z) * 38 * dt; p.vy += (ty - p.y) * 38 * dt - 9 * dt * (p.y > ty ? 1 : 0);
      p.vx *= 0.86; p.vz *= 0.86; p.vy *= 0.86;
      p.x += p.vx * dt; p.y = Math.max(0.5, p.y + p.vy * dt); p.z += p.vz * dt;
      m.makeScale(0.8, 0.8, 0.8); m.setPosition(p.x, p.y, p.z); this.pile.setMatrixAt(i, m);
    }
    this.pile.instanceMatrix.needsUpdate = true;
    if (play) {
      for (const b of this.loose) { if (b.t.done) { m.makeScale(0, 0, 0); } else { m.makeScale(0.8, 0.8, 0.8); m.setPosition(-b.x, b.y + Math.abs(Math.sin(this.clock * 3 + b.i)) * 0.05, b.z); } this.road.setMatrixAt(b.i, m); }
      this.road.instanceMatrix.needsUpdate = true;
      for (const t of r.things) { const o = this.objs.get(t.id); if (o && t.done) o.visible = false; }
    } else {
      for (const b of this.loose) { m.makeScale(0.8, 0.8, 0.8); m.setPosition(-b.x, b.y, b.z); this.road.setMatrixAt(b.i, m); } this.road.instanceMatrix.needsUpdate = true;
    }
    this.camera.position.x += (-xr * 0.6 - this.camera.position.x) * Math.min(1, dt * 5);
    const zc = play ? Math.min(zr, r.L + 3) : 0;
    this.camera.position.set(this.camera.position.x, this.cw < this.ch ? 8.5 : 6.8, zc - (this.cw < this.ch ? 9.5 : 8));
    this.camera.lookAt(this.camera.position.x * 0.5, 1.2, zc + 16);
    if (this.bank && play && r.state !== 'run') this.bank.scale.setScalar(1 + Math.sin(this.clock * 12) * 0.01);
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

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.BallScoop = api;
export default api;
