// «لعبة الضفدع الجائع» — Hungry Frog. Entry: window.HungryFrog.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A funny little frog on a lily pond: drag to hop, tap the pink button to LEAP. The sticky tongue snaps by itself at
// critters whose number is not bigger; eating makes the frog grow. Red numbers are bigger: big frogs and snakes aim
// (a red dotted line) and herons swoop (a shadow) — hop away. Three levels from misty dawn to the sunset swamp, each
// with a boss. No network, no links, no ads.
import * as THREE from 'three';
import { Pond, LEVELS, BOSS, KINDS, W, D, sizeOf, normalizeSave } from './sim.js';
import { mat, basic, makeFrog, makeBully, makeSnake, makeHeron, makeFly, makePad, makeLotus, makeCattail, waterTexture } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};

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

/** Misty dawn, a bright marsh, the sunset swamp. */
const LOOKS = [
  { bg: 0xb8bcd8, fog: 0xc8c8e0, near: 18, far: 70, water: ['#8a96b0', '#c8d0e8'], hemi: [0xf0f0ff, 0x6a7a8a, 1.6], sun: [0xffe8f0, 1.0], pad: [0x6ac84a, 0x5ab83a, 0x7ad85a], sound: 'dawn' },
  { bg: 0x9ad8f0, fog: 0xbfe8e8, near: 26, far: 90, water: ['#5aa8b8', '#a8e0e8'], hemi: [0xffffff, 0x6a8a5a, 1.7], sun: [0xfff8e0, 1.4], pad: [0x5ac83a, 0x4ab82a, 0x8ae05a], sound: 'day' },
  { bg: 0xf0a07a, fog: 0xe8a088, near: 20, far: 75, water: ['#8a6a7a', '#f0b890'], hemi: [0xffe0c8, 0x5a3a4a, 1.5], sun: [0xffb07a, 1.3], pad: [0x7ab83a, 0x6aa82a, 0x9ac84a], sound: 'sunset' },
];

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
    if (!document.getElementById('hf-style')) document.head.append(h('style', { id: 'hf-style', text: CSS }));
    this.root = h('div', { class: 'hf-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'hf-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'hf-btn brown', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'hf-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.6);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'hf-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.3, 200);
    this.camPos = new THREE.Vector3(0, 14, 16);
    this.camLook = new THREE.Vector3(0, 0, 0);
    this.input = { pointer: null, keys: new Set(), mx: 0, mz: 0 };
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
      this._buildPond(Math.min(this.save.unlocked, LEVELS.length) - 1);
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
    this.root.classList.toggle('hf-land', this.land);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.land ? 42 : 54;
    this.camera.updateProjectionMatrix();
  }

  // ---- the scene -----------------------------------------------------------------------------------------------------

  _buildScene() {
    const s = (this.scene = new THREE.Scene());
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x777777, 1.6);
    s.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.2);
    this.sun.position.set(-10, 25, 12);
    s.add(this.sun);
    this.frog = makeFrog();
    s.add(this.frog.root);
    // the tongue: a pink tube rebuilt while it is out, with a sticky ball at the tip
    this.tongueMat = new THREE.MeshLambertMaterial({ color: 0xff5a8a, emissive: 0x5a0a2a, emissiveIntensity: 0.3 });
    this.tongueMesh = new THREE.Mesh(new THREE.BufferGeometry(), this.tongueMat);
    this.tongueMesh.frustumCulled = false;
    s.add(this.tongueMesh);
    this.tongueTip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), this.tongueMat);
    s.add(this.tongueTip);
    this.tongueWob = { v: 0, x: 0 };
    // warning dots (red dotted lines) and heron shadows
    this.dots = [];
    const dg = new THREE.SphereGeometry(0.09, 8, 6);
    for (let i = 0; i < 60; i++) { const m = new THREE.Mesh(dg, basic(0xff2a3a)); m.visible = false; s.add(m); this.dots.push(m); }
    this.shadows = [];
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(1, 28), basic(0x1a1a2a, { transparent: true, opacity: 0.35, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      s.add(m);
      this.shadows.push(m);
    }
    this.heronModel = makeHeron();
    this.heronModel.root.visible = false;
    s.add(this.heronModel.root);
    this.ripples = [];
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 28), basic(0xffffff, { transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      s.add(m);
      this.ripples.push({ m, t: 9 });
    }
    this.sparkle = new Glow(s, 200, 0.35, 0xfff2a0);
    this.drops = new Glow(s, 160, 0.3, 0xd8f0ff, true, 0.9);
    this.mist = new Glow(s, 80, 5, 0xffffff, true, 0.18);
    this.models = new Map();
    this.tags = new Map();
  }

  _buildPond(index) {
    if (this.pondIndex === index && this.pond) return;
    if (this.pond) { this.scene.remove(this.pond); this.pond.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    this.pondIndex = index;
    const L = LOOKS[index];
    this.look = L;
    const g = (this.pond = new THREE.Group());
    this.scene.add(g);
    this.scene.background = new THREE.Color(L.bg);
    this.scene.fog = new THREE.Fog(L.fog, L.near, L.far);
    this.hemi.color.setHex(L.hemi[0]);
    this.hemi.groundColor.setHex(L.hemi[1]);
    this.hemi.intensity = L.hemi[2];
    this.sun.color.setHex(L.sun[0]);
    this.sun.intensity = L.sun[1];
    this.sound.setWorld(L.sound);
    this.waterTex = waterTexture(L.water[0], L.water[1]);
    this.waterTex.repeat.set(10, 14);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(W * 2 + 60, D * 2 + 60), new THREE.MeshLambertMaterial({ map: this.waterTex }));
    water.rotation.x = -Math.PI / 2;
    g.add(water);
    // muddy banks with reeds and cattails all around
    const bank = mat(index === 2 ? 0x7a5a3a : 0x6a7a3a);
    for (const [x, z, w, d] of [[0, -D - 4, W * 2 + 16, 8], [0, D + 4, W * 2 + 16, 8], [-W - 4, 0, 8, D * 2], [W + 4, 0, 8, D * 2]]) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.6, d), bank);
      b.position.set(x, 0.05, z);
      g.add(b);
    }
    const rand = (k) => ((Math.sin(k * 91.7 + index * 13) * 43758.5453) % 1 + 1) % 1;
    for (let i = 0; i < 70; i++) {
      const side = i % 4;
      const u = rand(i) * 2 - 1;
      const x = side < 2 ? u * (W + 2) : (side === 2 ? -1 : 1) * (W + 0.6 + rand(i + 50) * 2.5);
      const z = side < 2 ? (side === 0 ? -1 : 1) * (D + 0.6 + rand(i + 50) * 2.5) : u * (D + 2);
      const c = makeCattail(1.8 + rand(i + 9) * 1.6);
      c.position.set(x, 0, z);
      c.rotation.z = (rand(i + 3) - 0.5) * 0.2;
      g.add(c);
    }
    // lily pads and lotus flowers (decoration; the frog hops over them)
    for (let i = 0; i < 46; i++) {
      const r = 0.8 + rand(i + 200) * 1.7;
      const p = makePad(r, L.pad[i % 3]);
      p.position.set((rand(i + 300) * 2 - 1) * (W - 0.5), 0.03 + i * 0.0006, (rand(i + 400) * 2 - 1) * (D - 0.5));
      p.rotation.y = rand(i + 500) * 6.28;
      g.add(p);
      if (i % 5 === 0) { const l = makeLotus(); l.position.set(p.position.x + r * 0.3, 0.05, p.position.z); g.add(l); }
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.hf-dim')) return;
      if (this.mode !== 'play' || this.paused) return;
      const r = root.getBoundingClientRect();
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX - r.left;
      this.input.oy = e.clientY - r.top;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      const r = root.getBoundingClientRect();
      const dx = e.clientX - r.left - this.input.ox;
      const dy = e.clientY - r.top - this.input.oy;
      const R = this.u * 8;
      const l = Math.hypot(dx, dy);
      if (l < this.u * 1.2) { this.input.mx = this.input.mz = 0; return; }
      const k = Math.min(1, l / R) / l;
      this.input.mx = dx * k;
      this.input.mz = dy * k;
      this.moved = true;
    });
    const up = (e) => { if (e.pointerId === this.input.pointer) { this.input.pointer = null; this.input.mx = this.input.mz = 0; } };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === ' ' || k === 'shift') && !e.repeat) this._leap();
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'hf-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; this.tags.clear(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'hf-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _tl() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*3)'; }
  _tr() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));right:calc(var(--u)*3)'; }
  _hintEl() { this.hintEl = h('div', { class: 'hf-hint' }); return this.hintEl; }
  hint(text, secs = 2.6) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), secs * 1000);
  }
  _dropsPill() { this.dropEl = h('span', {}, num(this.save.drops)); return h('div', { class: 'hf-pill' }, '🐸', h('span', { class: 'w' }, '💧', this.dropEl)); }

  showMenu() {
    this._endLevel();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    this.layer.append(
      h('button', { class: 'hf-round', style: this._tl(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'hf-top' }, this._dropsPill()),
      this._mute(this._tr()),
      h('div', { class: 'hf-logo' }, '🐸 ', t('title')),
      h('div', { class: 'hf-menu' },
        h('button', { class: 'hf-btn', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1) }, '▶ ', t('play')),
        h('button', { class: 'hf-btn brown', onclick: () => this.showMap() }, '🗺 ', t('map'))),
      this._hintEl(),
    );
  }

  showMap() {
    this.mode = 'map';
    this._clear();
    const cls = ['dawn', 'marsh', 'sunset'];
    const nodes = LEVELS.map((lv, i) => {
      const locked = lv.id > this.save.unlocked;
      const st = this.save.stars[lv.id] ?? 0;
      return h('button', { class: `hf-node ${cls[i]}${locked ? ' lock' : ''}`, onclick: () => { if (locked) { this.sound.play('no'); this.hint(t('locked')); return; } this.startLevel(i); } },
        h('span', { class: 'n' }, locked ? '🔒' : num(lv.id)),
        h('span', { class: 'nm' }, name(lv), h('small', {}, `👑 ${name(BOSS[lv.bossKind])}`)),
        h('span', { class: 'st' }, '⭐'.repeat(st) + '☆'.repeat(3 - st)));
    });
    this.layer.append(
      h('button', { class: 'hf-round', style: this._tl(), 'aria-label': t('back'), onclick: () => this.showMenu() }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'hf-dim' }, h('div', { class: 'hf-card' }, h('div', { class: 'hf-ribbon green' }, t('map')), h('div', { class: 'hf-map' }, nodes))),
      this._hintEl(),
    );
  }

  startLevel(i) {
    this._endLevel();
    this._buildPond(i);
    this.levelIndex = i;
    this.p = new Pond({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.moved = false;
    this.redWarned = false;
    this.frog.root.visible = true;
    this.frog.spots.visible = false;
    this.frog.crown.visible = false;
    this.sound.setMode('play');
    this._hud();
    this._big(`${t('level')} ${num(i + 1)}`, getLang() === 'en' ? `Grow and gobble ${name(BOSS[LEVELS[i].bossKind])}!` : `كبّر وكُل ${name(BOSS[LEVELS[i].bossKind])}!`, 2.4);
    if (i === 0) setTimeout(() => this.mode === 'play' && !this.moved && this.hint(t('dragHop'), 4), 2400);
    this.camPos.set(0, 18, 20);
  }

  _endLevel() {
    for (const m of this.models.values()) this.scene.remove(m.root);
    this.models.clear();
    if (this.bossModel) { this.scene.remove(this.bossModel.root); this.bossModel = null; }
    this.tongueMesh.visible = this.tongueTip.visible = false;
    this.dots.forEach((d) => { d.visible = false; });
    this.shadows.forEach((s) => { s.visible = false; });
    this.heronModel.root.visible = false;
    this.p = null;
  }

  _hud() {
    this._clear();
    this.hud = {
      lv: h('button', { class: 'hf-round lv', style: this._tl(), 'aria-label': t('level') }, num((this.levelIndex ?? 0) + 1)),
      hearts: h('div', { class: 'hf-hearts' }),
      bar: h('i', { style: 'width:0%' }),
      barT: h('span'),
      leap: h('button', { class: 'hf-leap', 'aria-label': t('leap'), onclick: (e) => { e.stopPropagation(); this._leap(); } }, '🐸'),
      big: h('div', { class: 'hf-big' }, h('b'), h('span')),
      boss: h('div', { class: 'hf-bossbar' }, '👑 ', h('span'), h('div', {}, h('i', { style: 'width:100%' }))),
    };
    this.hud.barWrap = h('div', { class: 'hf-bar' }, this.hud.bar, this.hud.barT);
    this.layer.append(
      this.hud.lv,
      h('div', { class: 'hf-top' }, this._dropsPill()),
      h('button', { class: 'hf-round', style: this._tr(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '❚❚'),
      h('div', { class: 'hf-goal' }, this.hud.hearts, this.hud.barWrap, h('span', { class: 'hf-frogicon' }, '🐸')),
      this.hud.boss,
      this.hud.leap,
      this.hud.big,
      this._hintEl(),
    );
    this._hc = {};
    this.dropsAtStart = this.save.drops;
  }

  _big(a, b, secs = 2) {
    if (!this.hud) return;
    this.hud.big.firstChild.textContent = a;
    this.hud.big.lastChild.textContent = b;
    this.hud.big.classList.add('show');
    clearTimeout(this._bgT);
    this._bgT = setTimeout(() => this.hud && this.hud.big.classList.remove('show'), secs * 1000);
  }

  _leap() {
    if (!this.p) return;
    if (this.p.leap()) { this.hintedLeap = true; } else this.sound.play('no');
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.mx = this.input.mz = 0;
    this.sound.suspend();
    const dim = h('div', { class: 'hf-dim' }, h('div', { class: 'hf-card' },
      h('div', { class: 'hf-ribbon green' }, t('paused')),
      h('button', { class: 'hf-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this.clock.getDelta(); } }, '▶ ', t('resume')),
      h('button', { class: 'hf-btn brown', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'hf-btn brown', onclick: () => { this.sound.resume(); this.showMap(); } }, t('map')),
      this._mute('position:static')));
    this.layer.append(dim);
  }

  _results() {
    const p = this.p;
    const r = p.result;
    const i = this.levelIndex;
    const lv = LEVELS[i];
    this.mode = 'results';
    this.sound.setMode('menu');
    this.save.drops = Math.min(999999, this.save.drops + r.drops);
    this.save.best[lv.id] = Math.max(this.save.best[lv.id] ?? 0, r.power);
    if (r.won) {
      this.save.stars[lv.id] = Math.max(this.save.stars[lv.id] ?? 0, r.stars);
      if (lv.id + 1 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = lv.id + 1;
      this.sound.play('win');
      [0, 1, 2].forEach((k) => k < r.stars && setTimeout(() => this.sound.play('star', k), 700 + k * 280));
    } else this.sound.play('gulped');
    this._saveNow();
    const hasNext = r.won && i + 1 < LEVELS.length;
    const card = r.won
      ? h('div', { class: 'hf-card' },
        h('div', { class: 'hf-ribbon green' }, t('won', { b: name(BOSS[lv.bossKind]) })),
        h('div', { class: 'hf-face' }, '🐸'),
        h('div', { class: 'hf-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))),
        h('div', { class: 'hf-stats' }, h('span', {}, `🐸 ${num(r.power)}`), h('span', {}, `🪰 ${num(r.eaten)}`), h('span', {}, `💧 +${num(r.drops)}`)),
        h('div', { class: 'hf-note', style: 'background:#e8f8e0' }, t('win')),
        hasNext ? h('button', { class: 'hf-btn', onclick: () => this.startLevel(i + 1) }, t('next'), ' ▶') : h('button', { class: 'hf-btn', onclick: () => this.startLevel(i) }, '↻ ', t('retry')),
        h('button', { class: 'hf-btn brown', onclick: () => this.showMap() }, t('map')))
      : h('div', { class: 'hf-card' },
        h('div', { class: 'hf-ribbon' }, t('gulped')),
        h('div', { class: 'hf-face' }, r.by === 'heron' ? '🦩' : r.by === 'snake' ? '🐍' : '🐸'),
        h('div', { class: 'hf-note' }, t(`gotYou_${r.by === 'bigbo' || r.by === 'heron' || r.by === 'snake' ? r.by : 'frog'}`), h('br'), t('power', { n: num(r.power) })),
        h('div', { class: 'hf-small' }, t('tipLine')),
        h('button', { class: 'hf-btn', onclick: () => this.startLevel(i) }, t('retry')),
        h('button', { class: 'hf-btn brown', onclick: () => this.showMap() }, t('map')));
    this.layer.append(h('div', { class: 'hf-dim' }, card));
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const p = this.p;
    const k = this.input.keys;
    let mx = this.input.mx;
    let mz = this.input.mz;
    if (k.has('arrowleft') || k.has('a')) mx -= 1;
    if (k.has('arrowright') || k.has('d')) mx += 1;
    if (k.has('arrowup') || k.has('w')) mz -= 1;
    if (k.has('arrowdown') || k.has('s')) mz += 1;
    if (mx || mz) this.moved = true;
    p.setMove(mx, mz);
    const before = p.state;
    for (const e of p.step(dt)) this._event(e, p);
    if (before === 'play' && p.state !== 'play') setTimeout(() => this.mode === 'play' && this.p === p && this._results(), p.state === 'won' ? 2200 : 1400);
    this._sync(dt, time);
  }

  _event(e, p) {
    const S = this.sound;
    const f = p.frog;
    switch (e.type) {
      case 'tongue': S.play('tongue'); this.tongueWob.v = 0; break;
      case 'stick': S.play('stick'); this.tongueWob.v = 6; break;
      case 'miss': S.play('miss'); break;
      case 'eat': {
        S.play('gulp', e.kind);
        setTimeout(() => S.play('grow', e.combo), 160);
        this.gulpT = 0.35;
        const q = this._proj(f.x, sizeOf(f.power) * 2.2, f.z);
        this._pop(q, `+${num(e.v + e.bonus)}`);
        if (e.air) { this._pop({ x: q.x, y: q.y - this.u * 6 }, t('airSnap').toUpperCase(), 'air'); S.play('airsnap'); }
        if (e.combo >= 3) this._pop({ x: q.x, y: q.y - this.u * 11 }, `${t('combo').toUpperCase()} ×${num(e.combo)}`, 'combo');
        this.sparkle.burst(f.x, 0.6, f.z, 8, 2, 0.5);
        if (this.levelIndex === 0 && p.eaten === 3 && !this.hintedLeap) this.hint(t('tapLeap'), 3);
        if (this.levelIndex === 0 && p.eaten === 6) this.hint(t('growTo', { n: num(p.level.evolve) }), 3);
        break;
      }
      case 'hop': if (Math.random() < 0.5) S.play('hop'); this._ripple(f.x, f.z, sizeOf(f.power) * 1.2); break;
      case 'leap': S.play('leap'); this._ripple(f.x, f.z, 1.5); break;
      case 'land': S.play('land'); this._ripple(f.x, f.z, 2.2); this.drops.burst(f.x, 0.2, f.z, 16, 3, 0.6); break;
      case 'splash': S.play('splash'); this._ripple(e.x, e.z, 1.2); this.drops.burst(e.x, 0.2, e.z, 10, 2.5, 0.5); break;
      case 'aim':
        S.play('aim');
        if (!this.redWarned) { this.redWarned = true; this.hint(t('redBigger'), 3); }
        break;
      case 'lash': S.play('lash'); break;
      case 'hurt': S.play('hurt'); this.shake = 0.5; break;
      case 'heron': S.play('heron'); break;
      case 'strike': S.play('strike'); this.drops.burst(e.x, 0.3, e.z, 24, 4, 0.7); this._ripple(e.x, e.z, 2.5); break;
      case 'evolve':
        S.play('evolve');
        this.sparkle.burst(f.x, 1, f.z, 60, 5, 1);
        this._big(t('evolved'), t('growTo2', { n: num(p.level.boss) }), 2.2);
        break;
      case 'boss': {
        S.play('boss', e.kind);
        S.setMode('boss');
        const b = p.boss;
        this.bossModel = e.kind === 'heron' ? makeHeron() : e.kind === 'snake' ? makeSnake(0x6aa82a) : makeBully(true);
        this.bossModel.root.scale.setScalar(e.kind === 'heron' ? 1.6 : e.kind === 'snake' ? 3.2 : sizeOf(b.v) * 2);
        this.scene.add(this.bossModel.root);
        this.hud.boss.style.display = 'flex';
        this.hud.boss.querySelector('span').textContent = name(BOSS[e.kind]);
        this._big(name(BOSS[e.kind]), '', 2.2);
        setTimeout(() => this.mode === 'play' && this.hint(t(`bossIntro_${e.kind}`), 3.6), 1200);
        this.shake = 0.6;
        break;
      }
      case 'bossHit':
        S.play('bossHit');
        this.sparkle.burst(p.boss.x, 1, p.boss.z, 16, 4, 0.5);
        this.hud.boss.querySelector('i').style.width = `${(e.hp / p.boss.max) * 100}%`;
        break;
      case 'bossDown':
        S.play('bossDown');
        this.sparkle.burst(p.boss.x, 1.5, p.boss.z, 120, 7, 1.2);
        this.bossDownT = 0;
        break;
      case 'gulped': this.frog.root.visible = true; break;
      default:
    }
  }

  _ripple(x, z, r) {
    const rp = this.ripples.find((o) => o.t > 1) || this.ripples[0];
    rp.t = 0;
    rp.r = r;
    rp.m.position.set(x, 0.06, z);
    rp.m.visible = true;
  }

  _pop(q, text, cls = '') {
    const e = h('div', { class: `hf-pop ${cls}`, style: `left:${q.x}px;top:${q.y}px` }, text);
    this.layer.append(e);
    setTimeout(() => e.remove(), 1000);
  }

  _proj(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * this.cw, y: (-v.y * 0.5 + 0.5) * this.ch, behind: v.z > 1 };
  }

  _model(c) {
    if (c.kind === 'frog') return makeBully(false);
    if (c.kind === 'snake') return makeSnake();
    return makeFly(c.kind);
  }

  _sync(dt, time) {
    const p = this.p;
    const f = p.frog;
    const fr = this.frog;
    const R = sizeOf(f.power);
    // the frog: squash and stretch hops, a high leap, blinking, a puffing throat, a bulge after a gulp
    const s = R / 0.45;
    const air = f.leapT > 0 ? Math.sin((1 - f.leapT / 0.55) * Math.PI) : 0;
    const hop = Math.sin(f.hopT * Math.PI);
    fr.root.position.set(f.x, air * (2.2 + R) + hop * 0.35 * s, f.z);
    fr.root.scale.setScalar(s);
    let d = f.face - fr.root.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    fr.root.rotation.y += d * Math.min(1, dt * 14);
    const squash = air > 0 ? 1.15 : 1 - Math.max(0, Math.cos(f.hopT * Math.PI * 2)) * 0.08;
    fr.body.scale.set(1 / Math.sqrt(squash), squash, 1 / Math.sqrt(squash));
    fr.legs.forEach((l, i) => { l.rotation.x = (air > 0 || hop > 0.3) && i % 2 === 0 ? -0.9 : 0; });
    this.gulpT = Math.max(0, (this.gulpT ?? 0) - dt);
    fr.throat.scale.setScalar(1 + Math.sin(time * 3) * 0.06 + this.gulpT * 1.4);
    const blink = (time % 3.4) < 0.12;
    fr.eyes.forEach((e) => { e.lid.scale.y = blink ? 1 : 0.05; });
    fr.spots.visible = f.stage >= 2;
    fr.crown.visible = f.stage >= 3;
    fr.shadow.position.y = 0.02 - fr.root.position.y / s;
    fr.body.visible = !(f.invul > 0 && Math.floor(time * 12) % 2 === 0);
    // the tongue: out fast, wobbly on the way back (a damped spring), the critter stuck to the tip
    const tg = p.tongue;
    if (tg) {
      const mouth = new THREE.Vector3(f.x + Math.sin(fr.root.rotation.y) * R * 1.05, fr.root.position.y + R * 1.05, f.z + Math.cos(fr.root.rotation.y) * R * 1.05);
      const dx = tg.tx - f.x;
      const dz = tg.tz - f.z;
      const l = Math.hypot(dx, dz) || 1;
      const tip = new THREE.Vector3(f.x + (dx / l) * tg.len, Math.max(0.2, (tg.ty || 0) * Math.min(1, tg.len / l) + 0.3), f.z + (dz / l) * tg.len);
      this.tongueWob.v += (-this.tongueWob.x * 160 - this.tongueWob.v * 9) * dt;
      this.tongueWob.x += this.tongueWob.v * dt;
      const mid = mouth.clone().lerp(tip, 0.5);
      mid.y += tg.len * 0.12 + this.tongueWob.x * 0.4;
      mid.x += (-dz / l) * this.tongueWob.x * 0.5;
      mid.z += (dx / l) * this.tongueWob.x * 0.5;
      const curve = new THREE.QuadraticBezierCurve3(mouth, mid, tip);
      this.tongueMesh.geometry.dispose();
      this.tongueMesh.geometry = new THREE.TubeGeometry(curve, 14, 0.07 * Math.min(2.2, s * 0.7), 6, false);
      this.tongueMesh.visible = this.tongueTip.visible = tg.len > 0.05;
      this.tongueTip.position.copy(tip);
      this.tongueTip.scale.setScalar(Math.min(2.2, s * 0.7));
      if (tg.caught) { const m = this.models.get(tg.caught.id); if (m) { m.root.position.copy(tip); m.root.rotation.y += dt * 12; } }
    } else this.tongueMesh.visible = this.tongueTip.visible = false;
    // critters
    const seen = new Set();
    for (const c of p.critters) {
      seen.add(c.id);
      let m = this.models.get(c.id);
      if (!m) { m = this._model(c); this.scene.add(m.root); this.models.set(c.id, m); }
      if (!(tg && tg.caught === c)) {
        const sc = c.kind === 'frog' ? sizeOf(c.v) / 0.45 : c.kind === 'snake' ? 0.7 + Math.min(2.4, c.v / 25) : Math.max(0.8, c.r / KINDS[c.kind].r);
        m.root.scale.setScalar(sc);
        const hopY = c.kind === 'frog' && c.hopT > 0 ? Math.sin((c.hopT / 0.4) * Math.PI) * 0.5 : 0;
        m.root.position.set(c.x, (c.y || 0) + hopY + (c.kind === 'fish' && c.air <= 0 ? -0.25 : 0), c.z);
        m.root.rotation.y = c.a;
        if (c.kind === 'fish') m.root.rotation.x = c.air > 0 ? Math.cos((1 - c.air / 1.1) * Math.PI) * 0.8 : 0;
      }
      if (m.wings) m.wings.forEach((w, i) => { w.rotation.z = Math.sin(time * 50 + i) * 0.6; });
      if (m.segs) m.segs.forEach((sg, i) => { sg.position.x = Math.sin(time * 5 - i * 0.7) * 0.18; });
      if (m.eyes) { m.eyes.forEach((e) => { e.lid.scale.y = (time + c.id) % 3 < 0.12 ? 1 : 0.05; }); m.throat.scale.setScalar(1 + Math.sin(time * 3 + c.id) * 0.08); }
      if (c.kind === 'fish' && c.air <= 0) m.root.visible = Math.sin(c.t * 2) > -0.2; else m.root.visible = true;
    }
    for (const [id, m] of this.models) if (!seen.has(id)) { this.scene.remove(m.root); this.models.delete(id); }
    // warning lines: red dots from the attacker to where it aims
    let di = 0;
    const attackers = p.critters.filter((c) => c.aim > 0);
    if (p.boss && p.boss.aim > 0) attackers.push(p.boss);
    for (const c of attackers) {
      const n = 12;
      for (let k = 1; k <= n && di < this.dots.length; k++) {
        const dd = this.dots[di++];
        dd.visible = true;
        dd.position.set(c.x + ((c.aimX - c.x) * k) / n, 0.25, c.z + ((c.aimZ - c.z) * k) / n);
        dd.scale.setScalar(1 + Math.sin(time * 14 - k) * 0.3);
      }
    }
    for (; di < this.dots.length; di++) this.dots[di].visible = false;
    // heron shadows, then the beak comes down
    this.shadows.forEach((sh, i) => {
      const hr = p.herons[i];
      sh.visible = !!hr;
      if (!hr) return;
      const k = hr.struck ? 1 : 1 - Math.max(0, hr.t) / 1.8;
      sh.position.set(hr.x, 0.07, hr.z);
      sh.scale.setScalar(hr.r * (0.5 + k * 0.6));
      sh.material.opacity = 0.2 + k * 0.3;
    });
    const striking = p.herons.find((hr) => hr.struck);
    this.heronModel.root.visible = !!striking || p.herons.some((hr) => hr.t < 0.6);
    if (this.heronModel.root.visible) {
      const hr = striking || p.herons.find((o) => o.t < 0.6);
      this.heronModel.root.position.set(hr.x, 0, hr.z - 1.2);
      this.heronModel.neck.rotation.x = striking ? 1.2 : 0.3;
    }
    // the boss
    const b = p.boss;
    if (b && this.bossModel) {
      const bm = this.bossModel;
      if (b.hp > 0) {
        const hopY = b.kind === 'bigbo' && Math.sin(b.t * 4) > 0.2 ? Math.abs(Math.sin(b.t * 8)) * 0.6 : 0;
        bm.root.position.set(b.x, hopY, b.z);
        bm.root.rotation.y = b.a;
        if (bm.segs) bm.segs.forEach((sg, i) => { sg.position.x = Math.sin(b.t * 4 - i * 0.7) * 0.2; });
        if (bm.neck) bm.neck.rotation.x = b.lash > 0 ? 1.2 : b.aim > 0 ? -0.3 : 0.2 + Math.sin(b.t * 2) * 0.1;
        if (bm.throat) bm.throat.scale.setScalar(1 + Math.sin(b.t * 4) * 0.15);
        bm.root.visible = !(b.flash > 0 && Math.floor(time * 30) % 2);
      } else {
        // gobbled: the boss shrinks and spins into the frog's mouth
        this.bossDownT = (this.bossDownT ?? 0) + dt;
        const k = Math.min(1, this.bossDownT / 1.2);
        bm.root.position.lerp(new THREE.Vector3(f.x, 0.5, f.z), k * 0.2);
        bm.root.scale.multiplyScalar(1 - dt * 2.2);
        bm.root.rotation.y += dt * 10;
        if (k >= 1) bm.root.visible = false;
      }
    }
    this._ambient(dt, time);
    // camera: high and steep like the video; zooms out as the frog grows
    const zoom = 1 + Math.min(1.6, (R - 0.45) * 1.1);
    const off = this.land ? new THREE.Vector3(0, 11 * zoom, 7.5 * zoom) : new THREE.Vector3(0, 13 * zoom, 7.5 * zoom);
    const cx = Math.max(-W + 4, Math.min(W - 4, f.x));
    const cz = Math.max(-D + 4, Math.min(D - 2, f.z));
    this.camLook.lerp(new THREE.Vector3(cx, 0, cz - 1), Math.min(1, dt * 4));
    this.camPos.lerp(new THREE.Vector3(cx + off.x, off.y, cz + off.z), Math.min(1, dt * 3));
    this.camera.position.copy(this.camPos);
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    if (this.shake > 0) this.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake, 0, (Math.random() - 0.5) * this.shake));
    this.camera.lookAt(this.camLook);
    this._hudSync(p);
  }

  _ambient(dt, time) {
    if (this.waterTex) this.waterTex.offset.set(Math.sin(time * 0.1) * 0.05, time * 0.01);
    for (const rp of this.ripples) {
      if (rp.t > 1) continue;
      rp.t += dt;
      rp.m.scale.setScalar(rp.r * (0.4 + rp.t * 1.4));
      rp.m.material.opacity = (1 - rp.t) * 0.6;
      if (rp.t > 1) rp.m.visible = false;
    }
    if (this.pondIndex === 0 && Math.random() < dt * 3) this.mist.emit((Math.random() - 0.5) * W * 2, 0.6, (Math.random() - 0.5) * D * 2, 0.3, 0.05, 0, 6);
    this.sparkle.update(dt, 1);
    this.drops.update(dt, -9);
    this.mist.update(dt);
  }

  _hudSync(p) {
    if (!this.hud) return;
    const hc = this._hc;
    const f = p.frog;
    if (hc.hearts !== p.hearts) { hc.hearts = p.hearts; this.hud.hearts.replaceChildren(...Array.from({ length: p.maxHearts }, (_, i) => h('b', { class: i < p.hearts ? '' : 'off' }, '♥'))); }
    let goalText;
    let w;
    if (p.phase === 'grow') { goalText = t('growTo', { n: num(p.level.evolve) }); w = (f.power - p.level.start) / (p.level.evolve - p.level.start); } else if (p.phase === 'grow2') { goalText = t('growTo2', { n: num(p.level.boss) }); w = (f.power - p.level.evolve) / (p.level.boss - p.level.evolve); } else { goalText = t('beat', { b: name(BOSS[p.level.bossKind]) }); w = p.boss ? p.boss.hp / p.boss.max : 0; }
    const key = `${goalText}|${Math.round(w * 100)}`;
    if (hc.goal !== key) { hc.goal = key; this.hud.barT.textContent = goalText; this.hud.bar.style.width = `${Math.max(0, Math.min(100, w * 100))}%`; this.hud.barWrap.classList.toggle('boss', p.phase === 'boss'); }
    const cd = Math.round((f.leapCd / 3) * 100);
    if (hc.cd !== cd) { hc.cd = cd; this.hud.leap.style.setProperty('--cd', cd); }
    const drops = this.dropsAtStart + p.drops;
    if (this.dropEl && hc.drops !== drops) { hc.drops = drops; this.dropEl.textContent = num(drops); }
    // number tags over the frog and the critters (red = bigger)
    const used = new Set();
    const tag = (key, x, y, z, text, cls) => {
      const q = this._proj(x, y, z);
      if (q.behind || q.x < -40 || q.x > this.cw + 40 || q.y < 0 || q.y > this.ch) return;
      let e = this.tags.get(key);
      if (!e) { e = h('div', { class: 'hf-tag' }); this.layer.insertBefore(e, this.hud.big); this.tags.set(key, e); }
      if (e._t !== text) { e._t = text; e.textContent = text; }
      if (e._c !== cls) { e._c = cls; e.className = `hf-tag ${cls}`; }
      e.style.left = `${q.x}px`;
      e.style.top = `${q.y}px`;
      used.add(key);
    };
    const R = sizeOf(f.power);
    tag('me', f.x, this.frog.root.position.y + R * 2.4, f.z, `🐸 ${num(f.power)}`, 'me');
    for (const c of p.critters) {
      if (p.tongue && p.tongue.caught === c) continue;
      if (Math.hypot(c.x - f.x, c.z - f.z) > 16) continue;
      const big = c.v > f.power;
      tag(c.id, c.x, (c.y || 0) + (c.kind === 'frog' ? sizeOf(c.v) * 2.4 : 0.8), c.z, num(c.v), big ? 'red' : '');
    }
    if (p.boss && p.boss.hp > 0) tag('boss', p.boss.x, p.boss.kind === 'heron' ? 6 : 3.4, p.boss.z, `👑 ${num(p.boss.v)}`, 'red boss');
    for (const [k, e] of this.tags) if (!used.has(k)) { e.remove(); this.tags.delete(k); }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && this.p && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'results' && this.p) { this._ambient(dt, time); } else if (this.mode !== 'play') {
      // menus: the frog sits on a pad, blinking and puffing its throat; the camera drifts
      this._ambient(dt, time);
      const fr = this.frog;
      fr.root.visible = true;
      fr.root.position.set(0, Math.max(0, Math.sin(time * 2.2)) * 0.25, 0);
      fr.root.scale.setScalar(1.6);
      fr.root.rotation.y = Math.sin(time * 0.5) * 0.4;
      fr.throat.scale.setScalar(1 + Math.max(0, Math.sin(time * 3)) * 0.5);
      fr.eyes.forEach((e) => { e.lid.scale.y = (time % 3) < 0.12 ? 1 : 0.05; });
      if (Math.random() < dt * 0.25) this.sound.play('croak');
      const want = new THREE.Vector3(Math.sin(time * 0.15) * 3, 9, 9);
      this.camPos.lerp(want, Math.min(1, dt * 1.5));
      this.camLook.lerp(new THREE.Vector3(0, 0.5, 0), Math.min(1, dt * 2));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(this.camLook);
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
    clearTimeout(this._ht);
    clearTimeout(this._bgT);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.renderer.dispose();
      try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    }
    if (this.ro) this.ro.disconnect();
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.HungryFrog = api;
export default api;
