// «سباق الطريق الساحلي» — Coastal Drive. Entry: window.CoastalDrive.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A sports car on a busy coastal highway (palms, beach and sea on one side, green hills, guard rail and street lamps
// on the other): drag or tap to change lanes, pass close to traffic for near misses, chain them for a combo, collect
// coins and fire the nitro. Six levels in three worlds, a garage with four cars and upgrades. No network, no links.
import * as THREE from 'three';
import { Race, LEVELS, WORLDS, CARS, UPGRADES, MAX_UP, upCost, carOf, LANES, LANE_W, X_MAX, COUNTDOWN, normalizeSave } from './sim.js';
import {
  mat, basic, box, makeSportsCar, makeTrafficCar, roadTexture, makePalm, makeLamp, makeRailSegment, makeHill, makeBush, makeMesa,
  makeCactus, makeTower, skyTexture, coinMesh,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, h, arc } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const GEARS = [0, 9, 17, 25, 33, 42, 70];

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.5, 'rgba(255,255,255,0.7)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Glow {
  constructor(scene, n, size, color, normal = false, opacity = 1) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false, opacity, blending: normal ? THREE.NormalBlending : THREE.AdditiveBlending }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -500;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 14, power = 3, life = 0.6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.emit(x, y, z, Math.cos(a) * power * Math.random(), Math.random() * power, Math.sin(a) * power * Math.random(), life * (0.6 + Math.random() * 0.6));
    }
  }
  update(dt, rise = 0) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] += rise * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -500;
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

const LOOK = {
  azure: { sky: ['#6aaee8', '#e8f2f8'], fog: 0xcfe2ee, fogNear: 60, fogFar: 300, hemi: [0xf4f8ff, 0x7a8a6a, 1.6], sun: [0xfff4e0, 1.7], left: 0xe8d4a0, right: 0x5aa04a, sea: 0x2a9ad8 },
  canyon: { sky: ['#ff8a4a', '#ffd8a0'], fog: 0xf0b888, fogNear: 50, fogFar: 260, hemi: [0xffe8d0, 0x8a5a3a, 1.5], sun: [0xffd8a8, 1.6], left: 0xd89a5a, right: 0xd08a50, sea: null },
  neon: { sky: ['#1a0e3a', '#6a2a8a'], fog: 0x3a1a5a, fogNear: 40, fogFar: 220, hemi: [0x9a8ae8, 0x2a1a4a, 1.2], sun: [0xc8b8ff, 0.7], left: 0x24242c, right: 0x24242c, sea: null },
};

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('cd-style')) document.head.append(h('style', { id: 'cd-style', text: CSS }));
    this.root = h('div', { class: 'cd-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'cd-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'cd-btn dark', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'cd-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.6);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'cd-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 600);
    this.camPos = new THREE.Vector3(0, 3, 8);
    this.input = { pointer: null, keys: new Set() };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this._buildScene();
    this._fonts().then(() => {
      this.loading.remove();
      this._buildWorld('azure');
      this._setCar(this.save.car);
      this.showMenu();
      this.renderer.setAnimationLoop(() => this._frame());
    });
  }

  async _fonts() {
    try {
      const faces = [
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }),
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' }),
      ];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _unit() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.land = this.cw > this.ch * 1.15;
    this.root.classList.toggle('cd-land', this.land);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.baseFov = this.land ? 55 : 66;
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
  }

  // ---- the scene -----------------------------------------------------------------------------------------------------

  _buildScene() {
    const s = (this.scene = new THREE.Scene());
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x777777, 1.5);
    s.add(this.hemi);
    this.sunL = new THREE.DirectionalLight(0xffffff, 1.6);
    this.sunL.position.set(-30, 50, 20);
    s.add(this.sunL);
    s.add(this.sunL.target);
    this.trafficModels = new Map();
    this.coins = coinMesh(80);
    s.add(this.coins);
    this.sparks = new Glow(s, 240, 0.3, 0xffd27a);
    this.smoke = new Glow(s, 160, 1.6, 0xb8b8c0, true, 0.6);
    this.coinFx = new Glow(s, 90, 0.5, 0xffe27a);
    this.streaks = new Glow(s, 160, 0.18, 0xffffff, false, 0.8);
    this._dummy = new THREE.Object3D();
  }

  _setCar(id) {
    if (this.car) this.scene.remove(this.car.root);
    this.car = makeSportsCar(id);
    this.carId = id;
    this.scene.add(this.car.root);
  }

  /** The road and the scenery of one world. Things are recycled as the car drives on. */
  _buildWorld(world) {
    if (this.world === world && this.worldGroup) return;
    if (this.worldGroup) {
      this.scene.remove(this.worldGroup);
      this.worldGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    }
    this.world = world;
    const L = LOOK[world];
    const g = (this.worldGroup = new THREE.Group());
    this.scene.add(g);
    this.scene.background = skyTexture(L.sky[0], L.sky[1]);
    this.scene.fog = new THREE.Fog(L.fog, L.fogNear, L.fogFar);
    this.hemi.color.setHex(L.hemi[0]);
    this.hemi.groundColor.setHex(L.hemi[1]);
    this.hemi.intensity = L.hemi[2];
    this.sunL.color.setHex(L.sun[0]);
    this.sunL.intensity = L.sun[1];
    // road and ground strips: moved in steps of 24 m so the texture never jumps
    const tex = roadTexture(world);
    tex.repeat.set(1, 600 / 24);
    this.road = new THREE.Mesh(new THREE.PlaneGeometry(LANE_W * 4 + 1.2, 600), new THREE.MeshLambertMaterial({ map: tex }));
    this.road.rotation.x = -Math.PI / 2;
    g.add(this.road);
    this.strips = new THREE.Group();
    const shoulder = mat(world === 'neon' ? 0x3a3a44 : 0x8a8a84);
    this.strips.add(box(1.4, 0.06, 600, shoulder, -(LANE_W * 2 + 1.3), 0.0, 0), box(1.4, 0.06, 600, shoulder, LANE_W * 2 + 1.3, 0.0, 0));
    if (L.sea) this.strips.add(box(13, 0.05, 600, mat(L.left), -(LANE_W * 2 + 2 + 6.5), -0.05, 0));
    else this.strips.add(box(60, 0.05, 600, mat(L.left), -(LANE_W * 2 + 2 + 30), -0.05, 0));
    this.strips.add(box(200, 0.05, 600, mat(L.right), LANE_W * 2 + 2 + 100, -0.05, 0));
    if (L.sea) {
      this.strips.add(box(400, 0.05, 600, mat(L.sea, 0x0a3a6a, 0.25), -(LANE_W * 2 + 15 + 200), -0.25, 0));
      this.strips.add(box(2.5, 0.06, 600, mat(0xf4f0e0), -(LANE_W * 2 + 15.5), -0.12, 0)); // the foam line
    }
    g.add(this.strips);
    // recycled scenery: [model, x, spacing, offset]
    this.props = [];
    const add = (make, x, spacing, count, yRand = 0) => {
      for (let i = 0; i < count; i++) {
        const m = make(i);
        const p = { m, x: typeof x === 'function' ? x(i) : x, s: i * spacing + (spacing * (i % 3)) * 0.13, span: spacing * count, y: yRand ? (Math.random() - 0.5) * yRand : 0 };
        m.position.set(p.x, p.y, -p.s);
        g.add(m);
        this.props.push(p);
      }
    };
    const edge = LANE_W * 2 + 1.9;
    if (world === 'azure') {
      add((i) => { const p = makePalm(5.5 + (i % 3)); p.rotation.y = i; return p; }, (i) => -(edge + 3 + (i % 3) * 1.6), 14, 22);
      add((i) => { const p = makePalm(6 + (i % 2)); p.rotation.y = i * 2; return p; }, (i) => -(edge + 7 + (i % 4) * 1.4), 21, 14);
      add(() => makeLamp(1), edge + 0.7, 45, 8);
      add(() => makeRailSegment(12), edge + 0.4, 12, 34);
      add(() => makeRailSegment(12), -(edge + 0.4), 12, 34);
      add((i) => makeHill(26 + (i % 3) * 10, [0x3a7a2a, 0x4a8a3a, 0x2f6a24][i % 3]), (i) => edge + 34 + (i % 2) * 18, 70, 8);
      add((i) => makeBush([0x3a8a3a, 0x4a9a3a][i % 2]), (i) => edge + 3 + (i % 4) * 2, 11, 30);
      add((i) => makePalm(6 + (i % 3)), (i) => edge + 6 + (i % 3) * 3, 37, 10);
    } else if (world === 'canyon') {
      add((i) => makeMesa(18 + (i % 3) * 8, 14 + (i % 4) * 6, 14), (i) => -(edge + 26 + (i % 3) * 14), 60, 9);
      add((i) => makeMesa(16 + (i % 2) * 10, 12 + (i % 3) * 7, 16), (i) => edge + 24 + (i % 3) * 16, 64, 9);
      add(() => makeCactus(), (i) => (i % 2 ? 1 : -1) * (edge + 3 + (i % 5) * 1.6), 17, 26);
      add((i) => { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(1 + (i % 3) * 0.6), mat(0xb8603a)); r.position.y = 0.4; const gg = new THREE.Group(); gg.add(r); return gg; }, (i) => (i % 2 ? 1 : -1) * (edge + 6 + (i % 4) * 2.5), 23, 20);
      add(() => makeLamp(1), edge + 0.7, 60, 6);
      add(() => makeRailSegment(12), edge + 0.4, 12, 34);
    } else {
      const neon = [0xff4ab8, 0x4ae8ff, 0xb84aff, 0xffd23a];
      add((i) => makeTower(10 + (i % 3) * 4, 22 + (i % 5) * 10, 10, neon[i % 4]), (i) => -(edge + 9 + (i % 3) * 5), 16, 24);
      add((i) => makeTower(10 + (i % 2) * 5, 20 + (i % 4) * 12, 10, neon[(i + 2) % 4]), (i) => edge + 9 + (i % 3) * 5, 17, 24);
      add(() => makeLamp(1), edge + 0.7, 30, 12);
      add(() => makeLamp(-1), -(edge + 0.7), 30, 12);
      add(() => makeRailSegment(12), edge + 0.4, 12, 34);
      add(() => makeRailSegment(12), -(edge + 0.4), 12, 34);
      // glowing lines on the shoulders
      for (const sx of [-1, 1]) this.strips.add(box(0.12, 0.05, 600, basic(sx > 0 ? 0xff4ab8 : 0x4ae8ff), sx * (LANE_W * 2 + 0.75), 0.06, 0));
    }
    this._placeRoad(0);
  }

  _placeRoad(s) {
    const z = -(Math.floor(s / 24) * 24) - 250;
    this.road.position.set(0, 0.01, z);
    this.strips.position.set(0, 0, -(Math.floor(s / 24) * 24) - 250 + 0);
    for (const p of this.props) {
      while (p.s < s - 30) p.s += p.span;
      while (p.s > s - 30 + p.span) p.s -= p.span;
      p.m.position.set(p.x, p.y, -p.s);
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.cd-dim')) return;
      if (this.mode !== 'race' || this.paused || !this.r) return;
      this.input.pointer = e.pointerId;
      this.input.x0 = e.clientX;
      this.input.t0 = performance.now();
      this.input.tx0 = this.r.p.tx;
      this.input.moved = false;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer || !this.r) return;
      const dx = e.clientX - this.input.x0;
      if (Math.abs(dx) > this.u * 2) this.input.moved = true;
      if (this.input.moved) {
        const k = getLang() === 'en' || true ? 1 : 1;
        this.r.setTargetX(this.input.tx0 + (dx / (this.u * 16)) * LANE_W * k);
        this._steered = true;
      }
    });
    const up = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      if (!this.r) return;
      if (!this.input.moved && performance.now() - this.input.t0 < 350) {
        const r = this.root.getBoundingClientRect();
        this.r.shiftLane(e.clientX - r.left < this.cw / 2 ? -1 : 1);
        this._steered = true;
      } else if (this.input.moved) {
        // let go between two lanes: settle in the nearest lane
        const x = this.r.p.tx;
        let b = 0;
        for (let i = 1; i < 4; i++) if (Math.abs(LANES[i] - x) < Math.abs(LANES[b] - x)) b = i;
        if (Math.abs(LANES[b] - x) > 0.25) this.r.setTargetX(LANES[b]);
      }
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (this.mode === 'race' && this.r && !this.paused) {
          if ((k === 'arrowleft' || k === 'a') && !e.repeat) { this.r.shiftLane(-1); this._steered = true; }
          if ((k === 'arrowright' || k === 'd') && !e.repeat) { this.r.shiftLane(1); this._steered = true; }
          if ((k === ' ' || k === 'n' || k === 'arrowup' || k === 'w') && !e.repeat) this._nitro();
        }
        if (this.mode === 'race' && (k === 'escape' || k === 'p')) this.pause();
      }
      if (this.mode === 'race' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'race') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'cd-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _starsTotal() { return Object.values(this.save.stars).reduce((a, b) => a + b, 0); }
  _coinPill() { this.coinEl = h('span', {}, num(this.save.coins)); return h('div', { class: 'cd-pill' }, h('i', { class: 'cd-coin' }), this.coinEl); }
  _starPill() { return h('div', { class: 'cd-pill' }, h('span', { style: 'color:#ffc21a' }, '★'), `${num(this._starsTotal())}/${num(LEVELS.length * 3)}`); }
  _mute(style) {
    const b = h('button', { class: 'cd-sq', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sound.unlock();
      this.sound.setMuted(!this.sound.muted);
      this.save.muted = this.sound.muted;
      this._saveNow();
      b.textContent = this.sound.muted ? '🔇' : '🔊';
    });
    return b;
  }
  _backBtn(fn) { return h('button', { class: 'cd-sq', 'aria-label': t('back'), onclick: fn }, '‹'); }
  _toastEl() { this.toastEl = h('div', { class: 'cd-toast' }); return this.toastEl; }
  toast(text, secs = 2.2) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  showMenu() {
    this._endRace();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this.sound.engines(false);
    this._clear();
    const c = carOf(this.save.car);
    if (this.carId !== c.id) this._setCar(c.id);
    this.layer.append(
      h('button', { class: 'cd-sq', style: 'top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*3)', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '‹' : '›'),
      h('div', { class: 'cd-topr' }, this._starPill(), this._coinPill()),
      h('div', { class: 'cd-logo' }, h('span', { class: 'a' }, t('title')), h('span', { class: 'tag' }, t('tagline'))),
      h('div', { class: 'cd-menu' },
        h('div', { class: 'cd-carname' }, h('b', {}, name(c)), h('span', {}, `${num(Math.round(c.top * 3.6))} ${t('kmh')}`)),
        h('button', { class: 'cd-btn', onclick: () => this.showLevels() }, t('play')),
        h('button', { class: 'cd-btn dark', onclick: () => this.showGarage() }, '🔧 ', t('garage'))),
      this._mute('right:calc(var(--u)*3);bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom))'),
      this._toastEl(),
    );
  }

  showLevels(sel) {
    this.mode = 'levels';
    this._clear();
    this.sound.play('whoosh');
    const pick = sel ?? Math.min(this.save.unlocked, LEVELS.length) - 1;
    const lv = LEVELS[pick];
    const worlds = WORLDS.map((w) => {
      const lvs = LEVELS.map((l, i) => [l, i]).filter(([l]) => l.world === w.id);
      const st = lvs.reduce((a, [l]) => a + (this.save.stars[l.id] ?? 0), 0);
      return h('div', {},
        h('div', { class: `cd-world ${w.id}` }, name(w), h('small', {}, `★ ${num(st)}/${num(lvs.length * 3)}`)),
        h('div', { class: 'cd-lvrow', style: 'margin-top:calc(var(--u)*1)' }, lvs.map(([l, i]) => {
          const locked = l.id > this.save.unlocked;
          const s = this.save.stars[l.id] ?? 0;
          return h('button', { class: `cd-level${i === pick ? ' on' : ''}${locked ? ' lock' : ''}`, onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked')); return; } this.showLevels(i); } },
            h('b', {}, locked ? '🔒' : num(l.id)), h('span', {}, name(l)), h('small', {}, '★'.repeat(s) + '☆'.repeat(3 - s)));
        })));
    });
    this.layer.append(
      h('div', { class: 'cd-dim', style: 'background:rgba(10,12,16,.75);align-items:stretch' }, h('div', { class: 'cd-panel', style: 'height:100%;background:none;border:none;box-shadow:none;padding:calc(var(--u)*2) 0' },
        h('div', { class: 'cd-head', style: 'position:static' }, this._backBtn(() => this.showMenu()), h('h3', {}, t('levels')), this._starPill(), this._coinPill()),
        h('div', { class: 'cd-worlds', style: 'flex:1;overflow:auto' }, worlds),
        h('div', { class: 'cd-detail' },
          h('b', {}, `${num(lv.id)}. ${name(lv)}`),
          h('div', { class: 'g' }, t('goal', { km: num(lv.km), n: num(this.age <= 4 ? Math.ceil(lv.near * 0.5) : lv.near) })),
          h('div', { class: 'r' }, h('span', { class: 'rw' }, h('i', { class: 'cd-coin', style: 'vertical-align:middle' }), ` +${num(lv.reward)}`), h('button', { class: 'cd-btn', onclick: () => this.startRace(pick) }, '🏁 ', t('race')))))),
      this._toastEl(),
    );
  }

  showGarage(index) {
    this.mode = 'garage';
    this._clear();
    const i = index ?? CARS.findIndex((c) => c.id === this.save.car);
    const c = CARS[i];
    this.garageIndex = i;
    if (this.carId !== c.id) this._setCar(c.id);
    const have = this.save.cars.includes(c.id);
    const sel = this.save.car === c.id;
    const stat = (k, v) => h('div', { class: 'cd-stat' }, t(k), h('i', { style: `--w:${Math.round(v * 100)}%` }));
    let action;
    if (sel) action = h('button', { class: 'cd-btn dark', disabled: true }, t('selected'));
    else if (have) action = h('button', { class: 'cd-btn', onclick: () => { this.save.car = c.id; this._saveNow(); this.showGarage(i); } }, t('select'));
    else if (this.save.coins >= c.price) action = h('button', { class: 'cd-btn', onclick: () => { this.save.coins -= c.price; this.save.cars.push(c.id); this.save.car = c.id; this.sound.play('buy'); this._saveNow(); this.showGarage(i); this.toast(t('bought'), 1.2); } }, `${t('buy')} `, h('i', { class: 'cd-coin', style: 'vertical-align:middle' }), ` ${num(c.price)}`);
    else action = h('button', { class: 'cd-btn brown', onclick: () => this.sound.play('no') }, t('needCoins', { n: num(c.price - this.save.coins) }), ' ', h('i', { class: 'cd-coin', style: 'vertical-align:middle' }));
    const ups = UPGRADES.map((u) => {
      const lvl = this.save.up[u.id];
      const maxed = lvl >= MAX_UP;
      const cost = upCost(lvl);
      return h('div', { class: 'cd-up' },
        h('span', { class: 'ic' }, u.icon),
        h('div', { class: 'nm' }, h('b', {}, name(u)), h('span', {}, u.sub[getLang() === 'en' ? 1 : 0]), h('div', { class: 'pips' }, Array.from({ length: MAX_UP }, (_, k) => h('i', { class: k < lvl ? 'on' : '' })))),
        h('button', {
          class: 'cd-btn dark',
          disabled: maxed,
          onclick: () => {
            if (this.save.coins < cost) { this.sound.play('no'); this.toast(t('needCoins', { n: num(cost - this.save.coins) })); return; }
            this.save.coins -= cost;
            this.save.up[u.id]++;
            this.sound.play('buy');
            this._saveNow();
            this.showGarage(i);
          },
        }, maxed ? t('max') : h('span', {}, h('i', { class: 'cd-coin', style: 'vertical-align:middle' }), ` ${num(cost)}`)));
    });
    const go = (d) => { this.sound.play('whoosh'); this.showGarage((i + d + CARS.length) % CARS.length); };
    this.layer.append(
      h('div', { class: 'cd-head' }, this._backBtn(() => this.showMenu()), h('h3', {}, t('garage')), this._coinPill()),
      h('div', { class: 'cd-carname', style: 'position:absolute;top:calc(var(--u)*15);left:0;right:0' }, h('b', {}, name(c)), h('span', {}, `${num(i + 1)} / ${num(CARS.length)}`)),
      h('button', { class: 'cd-arrow', style: 'left:calc(var(--u)*3)', onclick: () => go(-1), 'aria-label': 'previous' }, '‹'),
      h('button', { class: 'cd-arrow', style: 'right:calc(var(--u)*3)', onclick: () => go(1), 'aria-label': 'next' }, '›'),
      h('div', { class: 'cd-sheet' },
        stat('stTop', c.top / 55), stat('stAcc', c.accel), stat('stHand', c.handling), stat('stNitro', c.nitro),
        action,
        h('div', { class: 'cd-sub', style: 'text-align:start;color:#ffb347' }, t('upgrades')),
        ups),
      this._toastEl(),
    );
  }

  startRace(i) {
    this._endRace();
    const lv = LEVELS[i];
    this.levelIndex = i;
    this._buildWorld(lv.world);
    if (this.carId !== this.save.car) this._setCar(this.save.car);
    this.r = new Race({ level: i, car: this.save.car, up: this.save.up, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'race';
    this.paused = false;
    this._steered = false;
    this.lastGear = 1;
    this.shake = 0;
    this.coinsAtStart = this.save.coins;
    this.sound.setMode('race');
    this.sound.engines(true);
    this._hud();
    this.camPos.set(LANES[1], 6, 14);
  }

  _endRace() {
    for (const m of this.trafficModels.values()) this.scene.remove(m.root);
    this.trafficModels.clear();
    this.coins.count = 0;
    this.r = null;
    if (this.car) this.car.flames.forEach((f) => { f.visible = false; });
  }

  _hud() {
    this._clear();
    this.hud = {
      hearts: h('div', { class: 'cd-hearts' }),
      near: h('b', {}, ''),
      bar: h('i', { style: 'width:0%' }),
      km: h('div', { class: 'km' }),
      speed: h('div', { class: 'cd-gauge cd-speed' }),
      nitro: h('button', { class: 'cd-gauge cd-nitro', 'aria-label': t('nitro'), onclick: (e) => { e.stopPropagation(); this._nitro(); } }),
      count: h('div', { class: 'cd-count' }),
    };
    this.hud.speed.innerHTML = arc('#ff7a1a', 0);
    this.hud.speedN = h('b', {}, num(0));
    this.hud.speed.append(this.hud.speedN, h('span', {}, t('kmh')));
    this.hud.nitro.innerHTML = arc('#3ab8ff', 0.5);
    this.hud.nitro.append(h('i', {}, '🚀'), h('span', {}, t('nitro').toUpperCase()));
    this.layer.append(
      this.hud.hearts,
      h('div', { class: 'cd-topr' }, this._coinPill(), h('button', { class: 'cd-sq', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '❚❚')),
      h('div', { class: 'cd-near' }, h('div', { class: 'row' }, h('span', {}, '⚡ ', t('nearMisses')), this.hud.near), h('div', { class: 'bar' }, this.hud.bar), this.hud.km),
      this.hud.speed,
      this.hud.nitro,
      this.hud.count,
      this._toastEl(),
    );
    this._hc = {};
  }

  _pop(cls, text, extra = '') {
    const e = h('div', { class: `cd-pop ${cls}`, style: extra }, text);
    this.layer.append(e);
    setTimeout(() => e.remove(), 1000);
  }

  _count(text, white) {
    const c = this.hud.count;
    c.textContent = text;
    c.classList.toggle('white', !!white);
    c.classList.remove('pop');
    void c.offsetWidth;
    c.classList.add('pop');
  }

  _nitro() {
    if (!this.r) return;
    if (!this.r.useNitro()) this.sound.play('no');
  }

  pause() {
    if (this.mode !== 'race' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.sound.suspend();
    const dim = h('div', { class: 'cd-dim' }, h('div', { class: 'cd-panel', style: 'width:calc(var(--u)*62)' },
      h('h2', {}, t('paused')),
      h('button', { class: 'cd-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this.clock.getDelta(); } }, t('resume')),
      h('button', { class: 'cd-btn dark', onclick: () => { this.sound.resume(); this.startRace(this.levelIndex); } }, t('restart')),
      h('button', { class: 'cd-btn dark', onclick: () => { this.sound.resume(); this.showLevels(this.levelIndex); } }, t('quit')),
      h('div', { style: 'display:flex;justify-content:center' }, this._mute('position:static'))));
    this.layer.append(dim);
  }

  _results() {
    const r = this.r;
    const res = r.result;
    const i = this.levelIndex;
    const lv = LEVELS[i];
    this.mode = 'results';
    this.sound.engines(false);
    this.sound.setMode('menu');
    const total = res.coins + res.reward;
    this.save.coins = Math.min(999999, this.save.coins + total);
    if (res.won) {
      this.save.stars[lv.id] = Math.max(this.save.stars[lv.id] ?? 0, res.stars);
      if (lv.id + 1 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = lv.id + 1;
      [0, 1, 2].forEach((k) => k < res.stars && setTimeout(() => this.sound.play('star', k), 600 + k * 300));
    }
    this._saveNow();
    const star = (on, label) => h('div', {}, h('b', { class: on ? '' : 'off' }, '★'), label);
    const rows = [
      ['🪙', t('coins'), num(res.coins)],
      ['⚡', t('nearMisses'), num(res.nearMisses)],
      ['⏱', t('topSpeed'), `${num(res.topSpeed)} ${t('kmh')}`],
      ['💥', t('crashes'), num(res.crashes)],
    ];
    if (res.won) rows.push(['🏁', t('reward'), `+${num(res.reward)}`]);
    const hasNext = res.won && i + 1 < LEVELS.length;
    const dim = h('div', { class: 'cd-dim' }, h('div', { class: 'cd-panel' },
      h('h2', { class: res.won ? 'orange' : 'red' }, res.won ? t('finished') : t('wrecked')),
      h('div', { class: 'cd-sub' }, `${num(lv.id)}. ${name(lv)}`),
      h('div', { class: 'cd-stars3' }, star(res.won, t('finish')), star(res.won && res.crashes <= 1, t('max1')), star(res.won && res.crashes === 0, t('noCrash'))),
      h('div', { class: 'cd-rows' }, rows.map(([ic, a, b]) => h('div', {}, h('span', {}, ic, ' ', a), h('b', {}, b))), h('div', { class: 'tot' }, h('span', {}, t('total')), h('b', {}, `+${num(total)}`))),
      res.won ? h('div', { class: 'cd-sub', style: 'color:#ffb347' }, t('win')) : h('div', { class: 'cd-note' }, t('kept')),
      hasNext ? h('button', { class: 'cd-btn', onclick: () => this.startRace(i + 1) }, t('next')) : h('button', { class: 'cd-btn', onclick: () => this.startRace(i) }, t('restart')),
      h('button', { class: 'cd-btn dark', onclick: () => this.showLevels(hasNext ? i + 1 : i) }, t('levels'))));
    this.layer.append(dim);
  }

  // ---- racing -------------------------------------------------------------------------------------------------------

  _raceFrame(dt, time) {
    const r = this.r;
    const before = r.state;
    const events = r.step(dt);
    for (const e of events) this._event(e, r);
    if (before === 'race' && (r.state === 'done' || r.state === 'wrecked')) setTimeout(() => this.mode === 'race' && this.r === r && this._results(), r.state === 'done' ? 1600 : 1300);
    this._sync(dt, time);
  }

  _event(e, r) {
    const S = this.sound;
    switch (e.type) {
      case 'count': S.play('count'); this._count(num(e.n), true); break;
      case 'go':
        S.play('go');
        this._count(t('go'));
        setTimeout(() => this.mode === 'race' && !this._steered && this.toast(t('steer'), 3), 1500);
        break;
      case 'nearMiss':
        S.play('near', e.combo);
        this._pop('near', `${t('nearMiss').toUpperCase()} +${num(this.r.mult)}`);
        if (e.combo >= 2) { this._pop('combo', `${t('combo').toUpperCase()} ×${num(Math.min(5, e.combo))}`); if (e.combo % 3 === 0) S.play('combo'); }
        this.streakBurst = 0.3;
        if (e.gap < 0.6 && Math.random() < 0.5) setTimeout(() => S.play('honk', e.kind), 250);
        break;
      case 'coin':
        if ((this._coinT ?? 0) <= 0) { S.play('coin'); this._coinT = 0.05; }
        this.coinFx.burst(e.x, 1, -e.s, 6, 3, 0.4);
        break;
      case 'nitro': S.play('nitro'); this.shake = 0.25; break;
      case 'nitroEnd': S.play('nitroEnd'); break;
      case 'crash':
        S.play('crash');
        setTimeout(() => S.play('honk'), 300);
        this.shake = 0.8;
        this.sparks.burst(e.x, 0.8, -e.s, 40, 7, 0.6);
        this.smoke.burst(e.x, 0.6, -e.s, 14, 2.5, 1.2);
        break;
      case 'blink': if ((this.r.traffic.find((c) => c.id === e.id)?.s ?? 1e9) - this.r.p.s < 70) S.play('blink'); break;
      case 'needMore': S.play('needMore'); this.toast(t('needMore', { n: num(e.left) }), 3); break;
      case 'finish': S.play('finish'); this._count('🏁'); break;
      case 'wrecked': S.play('wrecked'); this._count(t('wrecked')); break;
      default:
    }
  }

  _sync(dt, time) {
    const r = this.r;
    const p = r.p;
    const car = this.car;
    // the player's car
    car.root.position.set(p.x, 0, -p.s);
    const steer = p.vx / 14;
    car.root.rotation.y = -steer * 0.18;
    car.body.rotation.z = steer * 0.05;
    const blink = r.invul > 0 && Math.floor(time * 14) % 2 === 0;
    car.body.visible = !blink;
    const spin = (p.speed * dt) / 0.36;
    car.wheels.forEach((w, i) => { w.rotation.x -= spin; if (i < 2) w.rotation.y = -steer * 0.4; });
    const boost = r.nitroOn > 0;
    car.flames.forEach((f) => { f.visible = boost; f.scale.set(1, 0.8 + Math.random() * 0.6, 1); });
    car.tail.emissiveIntensity = r.state === 'count' ? 1.2 : 0.9;
    // traffic
    const seen = new Set();
    for (const c of r.traffic) {
      if (c.s - p.s > 320) continue;
      seen.add(c.id);
      let m = this.trafficModels.get(c.id);
      if (!m) { m = makeTrafficCar(c.kind, c.color); this.scene.add(m.root); this.trafficModels.set(c.id, m); }
      m.root.position.set(c.x, 0, -c.s);
      m.root.rotation.y = c.hit > 0 ? Math.sin(c.hit * 9) * 0.25 : (c.x - LANES[c.lane]) * -0.05;
      const on = c.blink > 0 && Math.floor(time * 4) % 2 === 0;
      const dir = c.toLane > c.lane ? 1 : 0;
      m.blinkers.forEach((b, i) => { b.visible = on && i === dir; });
      const ws = (c.speed * dt) / 0.34;
      m.wheels.forEach((w) => { w.rotation.x -= ws; });
    }
    for (const [id, m] of this.trafficModels) if (!seen.has(id)) { this.scene.remove(m.root); this.trafficModels.delete(id); }
    // coins
    const D = this._dummy;
    let n = 0;
    for (const k of r.coinsOnRoad) {
      if (n >= 80 || k.s - p.s > 220) continue;
      D.position.set(k.x, 0.9 + Math.sin(time * 4 + k.s) * 0.12, -k.s);
      D.rotation.set(0, time * 3 + k.s, 0);
      D.updateMatrix();
      this.coins.setMatrixAt(n++, D.matrix);
    }
    this.coins.count = n;
    this.coins.instanceMatrix.needsUpdate = true;
    // scenery follows
    this._placeRoad(p.s);
    // speed streaks while fast (more with nitro)
    this.streakBurst = Math.max(0, (this.streakBurst ?? 0) - dt);
    const rate = boost ? 60 : this.streakBurst > 0 ? 25 : p.speed > 40 ? 6 : 0;
    for (let i = 0; i < rate * dt * 10; i++) {
      const a = Math.random() * Math.PI * 2;
      this.streaks.emit(p.x + Math.cos(a) * (3 + Math.random() * 3), 1.6 + Math.sin(a) * 2.2, -p.s - 30, 0, 0, p.speed * 1.6, 0.5);
    }
    if (boost && Math.random() < 0.6) this.sparks.emit(p.x, 0.4, -p.s + 2.6, (Math.random() - 0.5) * 2, 0.5, 6, 0.25);
    // engine sound: gears from the speed
    let gear = 1;
    while (gear < 6 && p.speed > GEARS[gear]) gear++;
    const lo = GEARS[gear - 1];
    const hi = GEARS[gear];
    const rpm = r.state === 'count' ? 1100 + Math.max(0, Math.sin(time * 3)) * (r.t > 1.5 ? 2600 : 900) : 1700 + Math.min(1, (p.speed - lo) / (hi - lo)) * 5000;
    if (gear !== this.lastGear && r.state === 'race') { if (gear > this.lastGear) this.sound.play('shift'); this.lastGear = gear; }
    let near = null;
    for (const c of r.traffic) { const d = Math.hypot(c.x - p.x, c.s - p.s); if (d < 14 && (!near || d < near.dist)) near = { dist: d, rpm: 2600 }; }
    this.sound.engineUpdate(rpm, r.state === 'race' ? 1 : 0.3, p.speed, boost, 0, near ? { dist: near.dist * 2.8, rpm: near.rpm } : null);
    // camera: behind and above, a bit wider and lower in the nitro
    const back = this.land ? 7.6 : 9.2;
    const up = this.land ? 3.1 : 3.9;
    const want = new THREE.Vector3(p.x * 0.75, up - (boost ? 0.3 : 0), -p.s + back + (boost ? 0.8 : 0));
    this.camPos.lerp(want, Math.min(1, dt * (r.state === 'count' ? 2.5 : 7)));
    this.camera.position.copy(this.camPos);
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 1.6);
    if (this.shake > 0) this.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 0.5, (Math.random() - 0.5) * this.shake * 0.3, 0));
    this.camera.lookAt(p.x * 0.85, 0.9, -p.s - 14);
    const fov = this.baseFov + (boost ? 10 : 0) + Math.max(0, p.speed - 30) * 0.12;
    if (Math.abs(this.camera.fov - fov) > 0.05) { this.camera.fov += (fov - this.camera.fov) * Math.min(1, dt * 4); this.camera.updateProjectionMatrix(); }
    this.sunL.position.set(p.x - 30, 50, -p.s + 20);
    this.sunL.target.position.set(p.x, 0, -p.s - 10);
    this._coinT = (this._coinT ?? 0) - dt;
    this._fx(dt);
    this._hudSync(r);
  }

  _fx(dt) {
    this.sparks.update(dt, -9);
    this.smoke.update(dt, 1.2);
    this.coinFx.update(dt, 2);
    this.streaks.update(dt);
  }

  _hudSync(r) {
    if (!this.hud) return;
    const hc = this._hc;
    if (hc.hearts !== r.hearts) {
      hc.hearts = r.hearts;
      this.hud.hearts.replaceChildren(...Array.from({ length: r.maxHearts }, (_, i) => h('b', { class: i < r.hearts ? '' : 'off' }, '♥')));
    }
    const nm = `${num(Math.min(r.nearMisses, r.need))}/${num(r.need)}`;
    if (hc.near !== nm) { hc.near = nm; this.hud.near.textContent = nm; this.hud.bar.style.width = `${Math.min(100, (r.nearMisses / r.need) * 100)}%`; }
    const km = `${num((r.p.s / 1000).toFixed(1))} / ${num(r.level.km)} km`;
    if (hc.km !== km) { hc.km = km; this.hud.km.textContent = km; }
    const sp = r.kmh;
    if (hc.sp !== sp) { hc.sp = sp; this.hud.speedN.textContent = num(sp); this.hud.speed.querySelectorAll('circle')[1].setAttribute('stroke-dasharray', `${2 * Math.PI * 44 * 0.75 * Math.min(1, sp / 240)} 999`); }
    const nv = Math.round(r.nitro * 100);
    if (hc.nv !== nv) { hc.nv = nv; this.hud.nitro.querySelectorAll('circle')[1].setAttribute('stroke-dasharray', `${2 * Math.PI * 44 * 0.75 * r.nitro} 999`); }
    const ready = r.nitro >= 0.3 && r.nitroOn <= 0 && r.state === 'race';
    if (hc.ready !== ready) { hc.ready = ready; this.hud.nitro.classList.toggle('ready', ready); }
    const on = r.nitroOn > 0;
    if (hc.on !== on) { hc.on = on; this.hud.nitro.classList.toggle('on', on); }
    const coins = this.coinsAtStart + r.coins;
    if (this.coinEl && hc.coins !== coins) { hc.coins = coins; this.coinEl.textContent = num(coins); }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'race' && this.r && !this.paused) this._raceFrame(dt, time);
    else if (this.mode === 'race' && this.r) { /* paused */ } else if (this.mode === 'results' && this.r) {
      // the car rolls to a stop behind the card
      this.r.step(dt);
      this._sync(dt, time);
    } else {
      // menus and garage: the car parked on the road, the camera slowly circles it (front three-quarter, like the video)
      const car = this.car;
      car.root.position.set(0, 0, 0);
      car.root.rotation.set(0, 0, 0);
      car.body.visible = true;
      car.flames.forEach((f) => { f.visible = false; });
      this._placeRoad(0);
      const garage = this.mode === 'garage';
      const a = garage ? time * 0.35 : -0.75 + Math.sin(time * 0.25) * 0.35;
      const d = garage ? 12 : 9.5;
      const want = new THREE.Vector3(Math.sin(a) * d, garage ? 2.6 : 2.3, -Math.cos(a) * d);
      this.camPos.lerp(want, Math.min(1, dt * 2));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(0, garage && !this.land ? -2.6 : 0.5, 0);
      if (Math.abs(this.camera.fov - this.baseFov) > 0.05) { this.camera.fov = this.baseFov; this.camera.updateProjectionMatrix(); }
      this.sunL.position.set(-30, 50, 20);
      this.sunL.target.position.set(0, 0, 0);
      this._fx(dt);
    }
    this.renderer.render(this.scene, this.camera);
  }

  _adapt(dt) {
    this.frames.push(dt);
    if (this.frames.length < 90) return;
    const avg = this.frames.reduce((a, b) => a + b, 0) / this.frames.length;
    this.frames.length = 0;
    if (avg > 1 / 40 && this.pr > 0.75) {
      this.pr = Math.max(0.75, this.pr - 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    } else if (avg < 1 / 57 && this.pr < this.maxPR && ++this.goodWin >= 4) {
      this.pr = Math.min(this.maxPR, this.pr + 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    }
  }

  dispose() {
    clearInterval(this._pill);
    clearTimeout(this._tt);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.renderer.dispose();
      try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    }
    if (this.ro) this.ro.disconnect();
    window.removeEventListener('keydown', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

void X_MAX;
void COUNTDOWN;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.CoastalDrive = api;
export default api;
