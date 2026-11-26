// «تنين الجليد» — Ice Dragon. Entry: window.IceDragon.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A small hero explores an icy maze above turquoise water while a giant segmented dragon winds through the channels around it.
// Drag to walk; the hero fires by itself at nearby targets. Break numbered shrines for allies or the triple shot, push explosive
// barrels into the dragon's path to blast many segments at once, and break every armored segment to win. three.js, art and sound
// made in code. The hero is never hurt. No network, no ads, no tracking.
import * as THREE from 'three';
import { Hunt, LEVELS, WALLS, AREA, LOOP, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { polishRenderer } from './polish.js';
import { FX, outline } from './fx.js';

const S = {
  title: ['تنين الجليد', 'Ice Dragon'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'],
  again: ['تاني', 'Again'], next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'Level'], how: ['اسحب عشان تمشي — النار أوتوماتيك. ادفع البراميل ناحية التنين!', 'Drag to walk: it fires by itself. Push barrels toward the dragon!'],
  won: ['كسرت التنين! 🐉', 'Dragon defeated! 🐉'], left: ['أجزاء باقية', 'Segments left'], allies: ['حلفاء', 'Allies'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  shrine: ['اكسر المعبد المرقّم عشان حليف أو ثلاثية!', 'Break a numbered shrine for an ally or triple shot!'], barrel: ['ادفع البرميل في طريق التنين!', 'Push the barrel into the dragon\'s path!'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], time: ['الوقت', 'Time'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'shoot': this.tone('triangle', 700, t, 0.04, 0.03); break;
      case 'hit': this.tone('square', 220, t, 0.05, 0.04); break;
      case 'break': this.noise(t, 0.2, 0.12, 'bandpass', 900, 2); this.slide('triangle', 500, 150, t, 0.2, 0.08); break;
      case 'blast': this.noise(t, 0.6, 0.2, 'lowpass', 700); this.slide('sawtooth', 160, 40, t, 0.5, 0.12); break;
      case 'ally': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.07, 0.3, 0.12)); break;
      case 'triple': this.slide('sawtooth', 200, 900, t, 0.3, 0.07); [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(79 + s), t + 0.3 + i * 0.06, 0.2, 0.1)); break;
      case 'roar': this.slide('sawtooth', 110, 70, t, 0.6, 0.08); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('wind'); this.setTune({ tempo: 92, beats: 16, wave: 'triangle', vol: 0.09, notes: [[0, 62, 2], [2, 65, 1], [3, 69, 1], [4, 67, 2], [6, 65, 1], [7, 62, 1], [8, 60, 2], [10, 64, 1], [11, 67, 1], [12, 65, 2], [14, 62, 2], [0, 38, 4], [8, 36, 4]] }); }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 12, 8), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const texCache = new Map();
function labelTex(text, bg) {
  const k = `${text}|${bg}`;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = 192; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.beginPath(); g.roundRect(4, 4, 184, 88, 22); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 6; g.stroke();
  g.fillStyle = '#fff'; g.font = '900 58px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 96, 52);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texCache.set(k, t); return t;
}
function sprite(text, bg, s) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg), transparent: true, depthTest: false })); sp.scale.set(2 * s, s, 1); sp.renderOrder = 10; return sp; }

function makeHero(color) {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(color), 0, 0.7, 0, 0.7, 1.0, 0.5));
  g.add(mesh(geo.sphere, M(0xf2c9a0), 0, 1.5, 0, 0.6, 0.6, 0.6));
  g.add(mesh(geo.cone, M(0x3a6ae8), 0, 2.0, 0, 0.7, 0.8, 0.7));
  g.add(mesh(geo.cyl, M(0x8a5a2a), 0.5, 0.9, 0.2, 0.08, 1.6, 0.08));
  g.add(mesh(geo.sphere, M(0x7affff, 0x30a0ff), 0.5, 1.8, 0.2, 0.25, 0.25, 0.25));
  outline(g, 0x0a2a48, 0.05);
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
    if (!document.getElementById('id-style')) document.head.append(h('style', { id: 'id-style' }, css('id', '#4ab8e8', '#1a4a98', '#bfffff')));
    this.root = h('div', { class: 'id-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'id-layer' });
    this.mode = 'menu'; this.clock = 0; this.keys = new Set(); this.joy = null; this.fx = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true }), { preset: 'fresh' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9ae8f8);
    this.scene.fog = new THREE.Fog(0xbff4ff, 40, 120);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.3, 300);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x5ab8c8, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(-10, 30, 10); this.scene.add(sun);
    // turquoise water and the ice island
    this.scene.add(mesh(geo.box, M(0x28c8d0, 0x08484a), 0, -0.6, 0, 120, 0.2, 120));
    this.scene.add(mesh(geo.box, M(0xe8fbff), 0, -0.1, 0, AREA * 2 + 1, 0.8, AREA * 2 + 1));
    this.scene.add(mesh(geo.box, M(0xbfeaff), 0, 0.31, 0, AREA * 2, 0.04, AREA * 2));
    for (const w of WALLS) { this.scene.add(mesh(geo.box, M(0xa8e8ff, 0x104858), w.x, 0.9, w.z, w.hw * 2, 1.6, w.hd * 2)); this.scene.add(mesh(geo.box, M(0xffffff), w.x, 1.75, w.z, w.hw * 2 + 0.1, 0.15, w.hd * 2 + 0.1)); }
    for (let i = 0; i < 18; i++) { const a = (i / 18) * 6.28; this.scene.add(mesh(geo.cone, M(0xd8f4ff), Math.cos(a) * 24, 1.5, Math.sin(a) * 24, 3, 4 + (i % 3), 3)); }
    this.dynamic = new THREE.Group(); this.scene.add(this.dynamic);
    this.bulletMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.18, 6, 4), new THREE.MeshBasicMaterial({ color: 0x7affff }), 200);
    this.bulletMesh.frustumCulled = false;
    this.scene.add(this.bulletMesh);
    this.pfx = new FX(this.scene);
  }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 62 : 46; this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button') || this.mode !== 'play') return; this.root.setPointerCapture(e.pointerId); this.joy = { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY }; });
    this.root.addEventListener('pointermove', (e) => { if (this.joy && this.joy.id === e.pointerId) { this.joy.x = e.clientX; this.joy.y = e.clientY; } });
    const up = (e) => { if (this.joy && this.joy.id === e.pointerId) this.joy = null; };
    this.root.addEventListener('pointerup', up); this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.type === 'keydown') this.keys.add(e.key.toLowerCase()); else this.keys.delete(e.key.toLowerCase()); };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let dx = 0; let dz = 0;
    if (this.joy) { const R = this.u * 9; dx = (this.joy.x - this.joy.x0) / R; dz = (this.joy.y - this.joy.y0) / R; const l = Math.hypot(dx, dz); if (l > 1) { dx /= l; dz /= l; } }
    const k = this.keys;
    if (k.has('arrowleft') || k.has('a')) dx -= 1; if (k.has('arrowright') || k.has('d')) dx += 1; if (k.has('arrowup') || k.has('w')) dz -= 1; if (k.has('arrowdown') || k.has('s')) dz += 1;
    return { dx, dz };
  }

  _soundPill() { const pill = h('button', { class: 'id-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 3200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  showMenu() {
    this.mode = 'menu'; this.run = null;
    this.layer.replaceChildren(); this.sound.setMode(false);
    this._clearDyn();
    const ar = I.getLang() !== 'en';
    const cards = h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%' }, LEVELS.map((l, i) => {
      const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0;
      return h('button', { class: `id-btn${lock ? ' dark' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, `${lock ? '🔒' : '🐉'} ${I.t('level')} ${I.num(i + 1)} · ${ar ? l.ar : l.en} ${'⭐'.repeat(st)}`);
    }));
    this.layer.append(h('div', { class: 'id-dim' }, h('div', { class: 'id-card' }, h('div', { class: 'id-logo' }, '🐉 ', I.t('title')), h('div', { class: 'id-small' }, I.t('how')), cards, h('button', { class: 'id-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'id-hint' }); this.layer.append(this.hintEl);
    this._soundPill();
  }

  _clearDyn() { for (const c of [...this.dynamic.children]) this.dynamic.remove(c); this.segM = []; this.shrineM = new Map(); this.barrelM = new Map(); this.blastM = []; this.heroM = null; this.allyM = []; }

  start(i) {
    this.levelIdx = i;
    this.run = new Hunt({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.paused = false;
    this.layer.replaceChildren(); this.sound.setMode(true);
    this._clearDyn();
    const r = this.run;
    this.heroM = makeHero(0x2a8ae8); this.heroM.scale.setScalar(1.6); this.dynamic.add(this.heroM);
    this.segM = r.segs.map((sg, k) => {
      const g = new THREE.Group();
      const sz = k === 0 ? 2.2 : 1.7;
      g.add(mesh(geo.sphere, M(k === 0 ? 0x2a8ae8 : 0x3ad8c8, 0x0a3a4a), 0, 0.9, 0, sz, sz * 0.9, sz));
      g.add(mesh(geo.sphere, M(0xe8fbff), 0, 1.5, 0, sz * 0.7, sz * 0.4, sz * 0.7));
      if (k === 0) { g.add(mesh(geo.cone, M(0xffd23a), -0.5, 2.1, 0, 0.4, 1.0, 0.4), mesh(geo.cone, M(0xffd23a), 0.5, 2.1, 0, 0.4, 1.0, 0.4), mesh(geo.sphere, M(0xff2a2a, 0xff0000), -0.5, 1.3, 1.0, 0.3, 0.3, 0.3), mesh(geo.sphere, M(0xff2a2a, 0xff0000), 0.5, 1.3, 1.0, 0.3, 0.3, 0.3)); } else g.add(mesh(geo.cone, M(0xe8fbff), 0, 2.0, 0, 0.5, 0.9, 0.5));
      g.userData.label = sprite(String(Math.ceil(sg.hp)), '#1a5a88', 0.9); g.userData.label.position.y = 3.2; g.add(g.userData.label); g.userData.hp = Math.ceil(sg.hp);
      this.dynamic.add(g); return g;
    });
    for (const sh of r.shrines) {
      const g = new THREE.Group();
      g.add(mesh(geo.box, M(0x9aa8c8), 0, 0.5, 0, 1.6, 1.0, 1.6), mesh(geo.box, M(0xc8d4f0), 0, 1.5, 0, 1.1, 1.4, 1.1), mesh(geo.sphere, M(sh.kind === 'ally' ? 0x5af08a : 0xffd23a, sh.kind === 'ally' ? 0x1a8a3a : 0x8a6a00), 0, 2.5, 0, 0.7, 0.7, 0.7));
      g.userData.label = sprite(String(Math.ceil(sh.hp)), '#3a3a98', 0.9); g.userData.label.position.y = 3.6; g.add(g.userData.label); g.userData.hp = Math.ceil(sh.hp);
      g.position.set(sh.x, 0.3, sh.z); this.dynamic.add(g); this.shrineM.set(sh.id, g);
    }
    for (const b of r.barrels) { const g = new THREE.Group(); g.add(mesh(geo.cyl, M(0xe8452a, 0x601000), 0, 0.7, 0, 0.9, 1.1, 0.9), mesh(geo.box, M(0xffd23a), 0, 0.7, 0.46, 0.5, 0.5, 0.04)); this.dynamic.add(g); this.barrelM.set(b.id, g); }
    this.timeEl = h('span', {}, ''); this.leftEl = h('span', {}, ''); this.allyEl = h('span', {}, '');
    this.barEl = h('b', { style: 'width:100%' });
    const back = h('button', { class: 'id-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'id-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'id-top' }, back, h('div', { class: 'id-pill' }, this.leftEl), h('div', { class: 'id-pill' }, this.allyEl), pause), h('div', { class: 'id-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🐉'), h('div', { class: 'id-bar' }, this.barEl)));
    this.hintEl = h('div', { class: 'id-hint', style: 'top:calc(var(--u)*24)' }); this.layer.append(this.hintEl);
    this._soundPill();
    this.hint(I.t('shrine'), 3500); this.said = {};
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) { this.pauseEl = h('div', { class: 'id-dim' }, h('div', { class: 'id-card' }, h('div', { class: 'id-title' }, I.t('paused')), h('button', { class: 'id-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'id-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'id-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove();
  }

  _won() {
    const r = this.run; const lv = this.levelIdx + 1;
    this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, r.stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(3, lv + 1));
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    const last = this.levelIdx >= LEVELS.length - 1;
    this.layer.append(h('div', { class: 'id-dim' }, h('div', { class: 'id-card' }, h('div', { class: 'id-title' }, I.t('won')),
      h('div', { class: 'id-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'id-pill' }, `${I.t('time')} ${I.num(Math.round(r.time))}s`),
      last ? null : h('button', { class: 'id-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')),
      h('button', { class: 'id-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'id-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    if (this.mode === 'play' && !this.paused && this.run) this._update(dt);
    this._render(dt);
  }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt, this._input())) {
      switch (e.type) {
        case 'volley': if (Math.random() < 0.4) this.sound.play('shoot'); break;
        case 'hit': break;
        case 'break': this.sound.play('break'); this.pfx.burst(new THREE.Vector3(e.x, 1, e.z), { n: 30, colors: [0xbff4ff, 0xffffff, 0x7affff, 0xffd23a], speed: 8, size: 0.9, life: 0.8, gravity: 7 }); this.fx.push({ x: e.x, z: e.z, t: 0, life: 0.6, text: '💥' }); break;
        case 'blast': this.sound.play('blast'); this.pfx.burst(new THREE.Vector3(e.x, 1, e.z), { n: 50, colors: [0xffa02a, 0xffe04a, 0xff5a2a], speed: 11, size: 1.1, life: 0.9, gravity: 3 }); this.blastM.push({ x: e.x, z: e.z, t: 0 }); if (e.n > 0) this.fx.push({ x: e.x, z: e.z, t: 0, life: 1, text: `×${e.n}` }); break;
        case 'ally': this.sound.play('ally'); this.pfx.burst(new THREE.Vector3(e.x, 1, e.z), { n: 36, colors: [0x5af08a, 0xffffff, 0xffe04a], speed: 7, size: 0.9, life: 1, gravity: 2 }); this.fx.push({ x: e.x, z: e.z, t: 0, life: 1, text: '+2 🧙' }); break;
        case 'triple': this.sound.play('triple'); this.fx.push({ x: e.x, z: e.z, t: 0, life: 1, text: '🔱' }); break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    this.leftEl.textContent = `🐉 ${I.num(r.alive)}`;
    this.allyEl.textContent = `🧙 ${I.num(1 + r.allies)}${r.weapon > 1 ? ' 🔱' : ''}`;
    this.barEl.style.width = `${Math.round((r.alive / r.cfg.seg) * 100)}%`;
    if (!this.said.barrel && r.barrels.some((b) => !b.dead) && r.time > 12) { this.said.barrel = 1; this.hint(I.t('barrel'), 3500); }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _render(dt) {
    const r = this.run;
    if (r) {
      this.segM.forEach((g, k) => {
        const sg = r.segs[k];
        g.visible = sg.alive;
        if (!sg.alive) return;
        g.position.set(sg.x, 0, sg.z); g.rotation.y = -sg.a + Math.PI / 2;
        const hp = Math.ceil(sg.hp);
        if (g.userData.hp !== hp) { g.userData.hp = hp; g.userData.label.material.map = labelTex(String(hp), '#1a5a88'); g.userData.label.material.needsUpdate = true; }
        g.position.y = Math.sin(this.clock * 3 + k * 0.7) * 0.15;
      });
      for (const sh of r.shrines) { const g = this.shrineM.get(sh.id); g.visible = !sh.dead; if (!sh.dead) { const hp = Math.ceil(sh.hp); if (g.userData.hp !== hp) { g.userData.hp = hp; g.userData.label.material.map = labelTex(String(hp), '#3a3a98'); g.userData.label.material.needsUpdate = true; } } }
      for (const b of r.barrels) { const g = this.barrelM.get(b.id); g.visible = !b.dead; g.position.set(b.x, 0.3, b.z); }
      this.heroM.position.set(r.hero.x, 0.3, r.hero.z); this.heroM.rotation.y = -r.hero.face + Math.PI / 2;
      while (this.allyM.length < r.allies) { const a = makeHero(0x5af08a); a.scale.setScalar(1.2); this.dynamic.add(a); this.allyM.push(a); }
      this.allyM.forEach((a, k) => { const t = r.trail[Math.min(r.trail.length - 1, (k + 1) * 14)]; if (t) a.position.set(t.x, 0.3, t.z); });
      const m = new THREE.Matrix4(); let n = 0;
      for (const b of r.bullets) { if (n >= 200) break; m.makeTranslation(b.x, 1.2, b.z); this.bulletMesh.setMatrixAt(n++, m); }
      m.makeScale(0, 0, 0); for (let j = n; j < Math.max(n, this.lastB || 0); j++) this.bulletMesh.setMatrixAt(j, m);
      this.lastB = n; this.bulletMesh.instanceMatrix.needsUpdate = true; this.bulletMesh.count = Math.max(1, n);
      // blasts as growing orange spheres
      for (const bl of this.blastM) { if (!bl.m) { bl.m = mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0xffa02a, transparent: true, opacity: 0.8 }), bl.x, 1, bl.z, 1, 1, 1); this.dynamic.add(bl.m); } bl.t += dt; const k = bl.t / 0.5; bl.m.scale.setScalar(1 + k * 9); bl.m.material.opacity = Math.max(0, 0.8 - k); }
      this.blastM = this.blastM.filter((bl) => { if (bl.t > 0.5) { this.dynamic.remove(bl.m); return false; } return true; });
    }
    // camera looks down at the island at a slant
    const k = this.cw < this.ch ? 1.35 : 1;
    this.pfx.update(dt); if (r && r.hero && Math.random() < 0.6) this.pfx.burst(new THREE.Vector3(r.hero.x, 0.5, r.hero.z), { n: 1, colors: [0xffffff, 0xbff4ff], speed: 1.2, size: 0.7, life: 0.6, gravity: 0, lift: 0.5 });
    this.camera.position.set(0, 22 * k, 15.5 * k); this.camera.lookAt(0, 0, 1.5);
    this.renderer.render(this.scene, this.camera);
    this._floaters();
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    const v = new THREE.Vector3();
    this.fx.forEach((f, i) => {
      let el = this.fxEls[i];
      if (!el) { el = h('div', { style: 'position:absolute;font-weight:900;color:#fff;text-shadow:0 0 6px #000;pointer-events:none;font-size:calc(var(--u)*5)' }); this.layer.append(el); this.fxEls[i] = el; }
      v.set(f.x, 2 + f.t * 2, f.z).project(this.camera);
      el.style.display = 'block'; el.style.left = `${(v.x * 0.5 + 0.5) * this.cw}px`; el.style.top = `${(-v.y * 0.5 + 0.5) * this.ch}px`; el.style.opacity = String(1 - f.t / f.life); el.style.transform = 'translate(-50%,-50%)'; el.textContent = f.text;
    });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

void LOOP;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.IceDragon = api;
export default api;
