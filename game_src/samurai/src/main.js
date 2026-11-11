// «سيف الساموراي» — Samurai Action. Entry: window.SamuraiAction.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A little samurai (Adam or Nour) defends a cherry-blossom courtyard from cartoon ninjas, then a giant red oni.
// Drag to move, the sword swings by itself, flick (or the ⚡ button) to dash. No blood: beaten ninjas turn into a puff
// of petals. No network, no links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { Fight, STAGES, ARENA, normalizeSave } from './sim.js';
import {
  mat, makeSamurai, makeNinja, makeOni, makeShuriken, makeTorii, makeLantern, makeCherryTree, makeTemple,
  courtyardTexture, petalGeometry,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setHero, getLang, t, num } from './i18n.js';
import { CSS, CSS2, CSS3, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const MOODS = [
  { sky: 0xffd6e6, fog: 0xffe2ee, hemi: [0xfff4f8, 0x8a7a6a, 1.9], sun: [0xfff0e0, 1.5], night: false },
  { sky: 0xffb48a, fog: 0xffc8a0, hemi: [0xffe0c8, 0x7a5a4a, 1.7], sun: [0xffb070, 1.5], night: false },
  { sky: 0x2a2a5a, fog: 0x3a3a6a, hemi: [0xb8b8ff, 0x3a2a4a, 1.2], sun: [0xc8c8ff, 0.7], night: true },
];

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.9)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

/** Petal bursts: many little pink petal meshes in one instanced draw. */
class PetalBurst {
  constructor(scene, n) {
    this.n = n;
    this.mesh = new THREE.InstancedMesh(petalGeometry(), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), n);
    this.mesh.frustumCulled = false;
    const cols = [0xffb7d0, 0xff8fb8, 0xffd8e6, 0xffffff];
    this.p = [];
    for (let i = 0; i < n; i++) {
      this.mesh.setColorAt(i, new THREE.Color(cols[i % 4]));
      this.p.push({ x: 0, y: -50, z: 0, vx: 0, vy: 0, vz: 0, life: 0, r: Math.random() * 6, s: 1 });
    }
    this.i = 0;
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.e = new THREE.Euler();
    this.v = new THREE.Vector3();
    this.sv = new THREE.Vector3();
    scene.add(this.mesh);
  }
  burst(x, y, z, n = 24, power = 1) {
    for (let k = 0; k < n; k++) {
      const p = this.p[this.i++ % this.n];
      const a = Math.random() * Math.PI * 2;
      const s = (1.5 + Math.random() * 3.5) * power;
      Object.assign(p, { x, y, z, vx: Math.cos(a) * s, vy: 2 + Math.random() * 4 * power, vz: Math.sin(a) * s, life: 1.2 + Math.random() * 0.8, s: 1.4 + Math.random() * 1.6 });
    }
  }
  update(dt, time) {
    for (let i = 0; i < this.n; i++) {
      const p = this.p[i];
      if (p.life > 0) {
        p.life -= dt;
        p.vy -= 5 * dt;
        p.vx *= 1 - dt * 1.5;
        p.vz *= 1 - dt * 1.5;
        if (p.vy < -1.2) p.vy = -1.2; // petals float down
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        if (p.y < 0.03) { p.y = 0.03; p.vx = p.vz = 0; }
        if (p.life <= 0) p.y = -50;
      }
      this.e.set(time * 3 + p.r, p.r, time * 2 + p.r);
      this.q.setFromEuler(this.e);
      this.v.set(p.x, p.y, p.z);
      this.sv.setScalar(p.life > 0 ? p.s * Math.min(1, p.life * 2) : 0.0001);
      this.m.compose(this.v, this.q, this.sv);
      this.mesh.setMatrixAt(i, this.m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    if (!this.save.hero) this.save.hero = config.gender === 'girl' ? 'girl' : 'boy';
    setHero(this.save.hero);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('sa-style')) document.head.append(h('style', { id: 'sa-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'sa-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'sa-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'sa-btn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'sa-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'sa-layer' });
    this.root.append(this.layer);
    this.flash = h('div', { class: 'sa-flash' });
    this.bigcut = h('div', { class: 'sa-bigcut' });
    this.root.append(this.flash, this.bigcut);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.5, 200);
    this.input = { x: 0, z: 0, pointer: null, ox: 0, oy: 0, t0: 0, lx: 0, ly: 0, keys: new Set() };
    this.mode = 'menu';
    this.paused = false;
    this.timeScale = 1;
    this.slowT = 0;
    this.shake = 0;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this._buildScene(0);
    this._fonts().then(() => {
      this.loading.remove();
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
    this.root.classList.toggle('sa-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 60 : 44;
    this.camera.updateProjectionMatrix();
  }

  // ---- the courtyard ------------------------------------------------------------------------------------------------

  _buildScene(stageIndex) {
    if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    const mood = MOODS[stageIndex];
    this.stageIndex = stageIndex;
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(mood.sky);
    s.fog = new THREE.Fog(mood.fog, 26, 60);
    s.add(new THREE.HemisphereLight(mood.hemi[0], mood.hemi[1], mood.hemi[2]));
    const sun = new THREE.DirectionalLight(mood.sun[0], mood.sun[1]);
    sun.position.set(-8, 20, 10);
    s.add(sun);
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), mat(mood.night ? 0x3a4a3a : 0x9ac46a));
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.02;
    s.add(grass);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(ARENA + 0.4, 64), new THREE.MeshLambertMaterial({ map: courtyardTexture(mood.night) }));
    floor.rotation.x = -Math.PI / 2;
    s.add(floor);
    const rim = new THREE.Mesh(new THREE.RingGeometry(ARENA + 0.4, ARENA + 1.1, 64), mat(mood.night ? 0x5a5060 : 0x9a8a78));
    rim.rotation.x = -Math.PI / 2;
    rim.position.y = 0.01;
    s.add(rim);
    // torii gates where ninjas come in, the temple behind, trees and lanterns around
    for (const [x, z] of [[0, ARENA + 0.8], [ARENA + 0.8, 0], [-ARENA - 0.8, 0]]) {
      const g = makeTorii();
      g.position.set(x, 0, z);
      g.rotation.y = Math.atan2(x, z);
      s.add(g);
    }
    const temple = makeTemple();
    temple.position.set(0, 0, -ARENA - 4.5);
    s.add(temple);
    const trees = [[-12.5, -8], [12.5, -8], [-14, 4], [14, 4], [-10, 12], [10, 12], [-16, -2], [16, -2], [-6, 14.5], [6, 14.5], [-9, -12.5], [9, -12.5]];
    trees.forEach(([x, z], i) => {
      const tr = makeCherryTree(1 + (i % 3) * 0.2, mood.night ? 0xe89ac0 : 0xffa8c8);
      tr.position.set(x, 0, z);
      tr.rotation.y = i;
      s.add(tr);
    });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const l = makeLantern(mood.night);
      l.position.set(Math.sin(a) * (ARENA + 2), 0, Math.cos(a) * (ARENA + 2));
      s.add(l);
      if (mood.night && i % 2 === 0) {
        const pl = new THREE.PointLight(0xffb050, 8, 9, 1.6);
        pl.position.set(l.position.x, 1.5, l.position.z);
        s.add(pl);
      }
    }
    // the samurai
    this.hero = makeSamurai(this.save.hero);
    s.add(this.hero.root);
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.72, 32), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.85 }));
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.04;
    s.add(this.ring);
    // a white crescent for each swing
    this.arc = new THREE.Mesh(new THREE.RingGeometry(1.0, 2.1, 24, 1, -1.2, 2.4), new THREE.MeshBasicMaterial({ color: 0xeaf6ff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.arc.rotation.x = -Math.PI / 2;
    this.arc.position.y = 0.9;
    s.add(this.arc);
    // the dash trail: a few glowing ghosts
    this.trail = [];
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 1), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff9ac0 : 0xbfe6ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.position.y = 0.9;
      s.add(m);
      this.trail.push({ m, life: 0 });
    }
    this.petals = new PetalBurst(s, this.quality.low ? 220 : 400);
    this.sparks = this._sparks(s);
    // falling petals in the air
    this._ambient(s);
    // telegraphs (red circles on the floor)
    this.marks = [];
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(1, 40), new THREE.MeshBasicMaterial({ color: 0xff3a3a, transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.position.y = 0.05;
      s.add(m);
      this.marks.push(m);
    }
    this.chargeMark = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 16), new THREE.MeshBasicMaterial({ color: 0xff3a3a, transparent: true, opacity: 0, depthWrite: false }));
    this.chargeMark.rotation.x = -Math.PI / 2;
    this.chargeMark.position.y = 0.05;
    s.add(this.chargeMark);
    this.ninjaModels = new Map();
    this.starModels = [];
    this.oni = null;
  }

  _sparks(scene) {
    const n = 160;
    const pos = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xfff2b0, size: 0.25, map: dotTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    pts.frustumCulled = false;
    scene.add(pts);
    const s = { pos, vel: new Float32Array(n * 3), life: new Float32Array(n), g, i: 0, n };
    for (let k = 0; k < n; k++) pos[k * 3 + 1] = -50;
    return s;
  }

  _spark(x, y, z, n = 10, power = 6) {
    const s = this.sparks;
    for (let k = 0; k < n; k++) {
      const i = s.i++ % s.n;
      s.pos.set([x, y, z], i * 3);
      const a = Math.random() * Math.PI * 2;
      s.vel.set([Math.cos(a) * power * Math.random(), Math.random() * power * 0.6, Math.sin(a) * power * Math.random()], i * 3);
      s.life[i] = 0.35 + Math.random() * 0.25;
    }
  }

  _ambient(scene) {
    const n = this.quality.low ? 50 : 110;
    const inst = new THREE.InstancedMesh(petalGeometry(), new THREE.MeshBasicMaterial({ color: 0xffb7d0, side: THREE.DoubleSide }), n);
    inst.frustumCulled = false;
    this.air = { inst, d: [] };
    for (let i = 0; i < n; i++) this.air.d.push({ x: (Math.random() - 0.5) * 30, y: Math.random() * 10, z: (Math.random() - 0.5) * 30, r: Math.random() * 6, w: 0.5 + Math.random() });
    scene.add(inst);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3(1.6, 1.6, 1.6);
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'sa-joy' }, h('i'));
    root.append(this.joy);
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused || this.input.pointer !== null) return;
      const inp = this.input;
      inp.pointer = e.pointerId;
      inp.ox = inp.lx = e.clientX;
      inp.oy = inp.ly = e.clientY;
      inp.t0 = performance.now();
      inp.hist = [[e.clientX, e.clientY, inp.t0]];
      const r = root.getBoundingClientRect();
      this.joy.style.left = `${e.clientX - r.left}px`;
      this.joy.style.top = `${e.clientY - r.top}px`;
      this.joy.style.display = 'block';
      this.joy.firstChild.style.transform = 'translate(0,0)';
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      const inp = this.input;
      if (e.pointerId !== inp.pointer) return;
      const max = this.u * 12;
      let dx = e.clientX - inp.ox;
      let dy = e.clientY - inp.oy;
      const l = Math.hypot(dx, dy);
      if (l > max) { dx = (dx / l) * max; dy = (dy / l) * max; }
      inp.x = dx / max;
      inp.z = dy / max;
      this.joy.firstChild.style.transform = `translate(${dx}px,${dy}px)`;
      const now = performance.now();
      inp.hist.push([e.clientX, e.clientY, now]);
      while (inp.hist.length > 2 && now - inp.hist[0][2] > 120) inp.hist.shift();
    });
    const up = (e) => {
      const inp = this.input;
      if (e.pointerId !== inp.pointer) return;
      // a quick flick at the end of the touch is a dash in that direction
      const now = performance.now();
      const first = inp.hist && inp.hist.find((p) => now - p[2] <= 120);
      if (first && this.mode === 'play' && !this.paused) {
        const dx = e.clientX - first[0];
        const dy = e.clientY - first[1];
        const fast = Math.hypot(dx, dy) / Math.max(16, now - first[2]);
        if (Math.hypot(dx, dy) > this.u * 7 && fast > this.u * 0.09) this._dash(dx, dy);
      }
      inp.pointer = null;
      inp.x = 0;
      inp.z = 0;
      this.joy.style.display = 'none';
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
        if (this.mode === 'play' && (k === ' ' || k === 'shift') && !e.repeat) { const i = this._readInput(); this._dash(i.x, i.z); e.preventDefault(); }
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'sa-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _readInput() {
    const k = this.input.keys;
    let x = this.input.x;
    let z = this.input.z;
    if (k.has('arrowleft') || k.has('a')) x = -1;
    if (k.has('arrowright') || k.has('d')) x = 1;
    if (k.has('arrowup') || k.has('w')) z = -1;
    if (k.has('arrowdown') || k.has('s')) z = 1;
    return { x, z };
  }

  _dash(dx, dz) {
    if (!this.fight || this.paused) return;
    this.fight.dash(dx, dz);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'sa-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() {
    this.toastEl = h('div', { class: 'sa-toast' });
    return this.toastEl;
  }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _topLeft() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)'; }
  _bottomEnd() { return 'bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'; }

  showMenu() {
    this._endFight();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    const heroBtn = (kind, face) => h('button', {
      class: `sa-chef${this.save.hero === kind ? ' on' : ''}`,
      onclick: () => {
        this.save.hero = kind;
        setHero(kind);
        this._saveNow();
        this._buildScene(this.stageIndex);
        this.showMenu();
      },
    }, h('span', { class: 'f' }, face), t(kind));
    const nodes = STAGES.map((st, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[st.id] ?? 0;
      return h('button', {
        class: `sa-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('stage')} ${st.id} ${t('s' + st.id)}`,
        title: t('s' + st.id),
        onclick: () => {
          if (locked) { this.sound.play('no'); this.toast(t('locked')); return; }
          this.startStage(i);
        },
      }, locked ? '🔒' : num(st.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    this.layer.append(
      h('button', { class: 'sa-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'sa-dim', style: 'background:none' },
        h('div', { class: 'sa-panel' },
          h('div', { class: 'sa-logo' }, '⚔️ ', t('title')),
          h('div', { style: 'font-weight:900;font-size:calc(var(--u)*4)' }, t('who')),
          h('div', { class: 'sa-chefs' }, heroBtn('boy', '🥷'), heroBtn('girl', '🌸')),
          h('div', { class: 'sa-map', style: 'margin-bottom:calc(var(--u)*3)' }, nodes))),
      this._mute(this._bottomEnd()),
      this._toastEl(),
    );
  }

  startStage(i) {
    this._endFight();
    if (i !== this.stageIndex) this._buildScene(i);
    this.levelIndex = i;
    this.fight = new Fight({ stage: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.timeScale = 1;
    this.sound.setMode('fight');
    this._hud();
    this.cam = null;
    setTimeout(() => this.mode === 'play' && this.toast(t('how'), 3.5), 400);
  }

  _endFight() {
    if (!this.fight) return;
    for (const m of this.ninjaModels.values()) this.scene.remove(m.root);
    this.ninjaModels.clear();
    for (const s of this.starModels) this.scene.remove(s);
    this.starModels = [];
    if (this.oni) { this.scene.remove(this.oni.root); this.oni = null; }
    for (const m of this.marks) m.material.opacity = 0;
    this.chargeMark.material.opacity = 0;
    this.fight = null;
  }

  _hud() {
    this._clear();
    const f = this.fight;
    this.hud = {
      hearts: h('div', { class: 'sa-hearts' }),
      kills: h('b', {}, num(0)),
      combo: h('div', { class: 'sa-combo', style: 'opacity:0' }, h('b', {}, ''), h('span', {}, t('combo')), h('i', { style: 'width:100%' })),
      banner: h('div', { class: 'sa-banner' }),
      bossbar: h('div', { class: 'sa-bossbar' }, '👹 ', t('oni'), h('div', {}, h('i', { style: 'width:100%' }))),
      dash: h('button', { class: 'sa-dashbtn', 'aria-label': 'dash', onclick: (e) => { e.stopPropagation(); const i = this._readInput(); this._dash(i.x, i.z); } }, '⚡'),
    };
    this.hud.dash.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.layer.append(
      h('button', { class: 'sa-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      this.hud.hearts,
      h('div', { class: 'sa-kills' }, '✴️', this.hud.kills),
      this.hud.combo,
      this.hud.banner,
      this.hud.bossbar,
      this.hud.dash,
      this._mute(this._bottomEnd()),
      this._toastEl(),
    );
    this._hc = {};
    this._hearts(f.p.hp, f.maxHp);
  }

  _hearts(hp, max) {
    this.hud.hearts.replaceChildren(...Array.from({ length: max }, (_, i) => h('span', { class: i < hp ? '' : 'off' }, '❤️')));
  }

  _banner(text, secs = 1.6) {
    this.hud.banner.textContent = text;
    this.hud.banner.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => this.hud && this.hud.banner.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.x = this.input.z = 0;
    this.joy.style.display = 'none';
    this.sound.suspend();
    const dim = h('div', { class: 'sa-dim' }, h('div', { class: 'sa-panel' },
      h('div', { class: 'sa-title' }, t('paused')),
      h('button', { class: 'sa-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'sa-btn wood', onclick: () => { this.sound.resume(); this.startStage(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'sa-btn wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results(won) {
    const f = this.fight;
    const i = this.levelIndex;
    this.mode = 'results';
    this.sound.setMode('menu');
    let stars = 0;
    if (won) {
      const r = f.result;
      stars = r.stars;
      const id = STAGES[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, stars);
      if (i + 2 > this.save.unlocked && i + 1 < STAGES.length) this.save.unlocked = i + 2;
      this.save.best = Math.max(this.save.best, r.bestCombo);
      this._saveNow();
      this.sound.play('win');
    } else this.sound.play('down');
    const hasNext = won && i + 1 < STAGES.length;
    const dim = h('div', { class: 'sa-dim' }, h('div', { class: 'sa-panel' },
      h('div', { class: 'sa-title' }, won ? t('win') : t('down')),
      won ? h('div', { class: 'sa-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'sa-stat' }, h('span', {}, '✴️ ', num(f.kills), ' ', t('kills')), h('span', {}, '🔥 ', t('best'), ' ', num(f.bestCombo))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'sa-btn', onclick: () => this.startStage(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: won ? 'sa-btn wood' : 'sa-btn', onclick: () => this.startStage(i) }, '↻ ', t('again')),
        h('button', { class: 'sa-btn wood', onclick: () => this.showMenu() }, t('menu')))));
    this.hud.dash.remove();
    this.layer.append(dim);
  }

  // ---- the fight ----------------------------------------------------------------------------------------------------

  _screen(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return [(v.x * 0.5 + 0.5) * this.cw, (-v.y * 0.5 + 0.5) * this.ch];
  }

  _slice(text, x, z) {
    const [sx, sy] = this._screen(x, 2, z);
    const tag = h('div', { class: 'sa-slice', style: `left:${sx}px;top:${sy}px` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 800);
  }

  _slowmo(secs) {
    this.slowT = secs;
    this.flash.classList.remove('go');
    this.bigcut.classList.remove('go');
    void this.flash.offsetWidth;
    this.flash.classList.add('go');
    this.bigcut.classList.add('go');
    this.sound.play('finisher');
  }

  _fightFrame(rdt, time) {
    const f = this.fight;
    // slow motion for the finishing cut
    if (this.slowT > 0) { this.slowT -= rdt; this.timeScale = 0.22; } else this.timeScale = Math.min(1, this.timeScale + rdt * 3);
    const dt = rdt * this.timeScale;
    const before = f.state;
    const events = f.step(dt, this._readInput());
    for (const e of events) this._event(e, time);
    if (before !== 'won' && f.state === 'won') setTimeout(() => this.mode === 'play' && this._results(true), 2300);
    if (before !== 'down' && f.state === 'down') setTimeout(() => this.mode === 'play' && this._results(false), 900);
    this._sync(dt, rdt, time);
  }

  _event(e, time) {
    const f = this.fight;
    switch (e.type) {
      case 'slash': {
        this.sound.play('slash', e.hit);
        this.arc.material.opacity = 0.95;
        this.arc.position.set(f.p.x, 0.9, f.p.z);
        this.arc.rotation.z = e.a - Math.PI / 2;
        this.arcT = 0.18;
        break;
      }
      case 'dash':
        this.sound.play('dash');
        this.dashFrom = { x: e.x, z: e.z };
        break;
      case 'hit': this.sound.play('hit'); this._spark(e.x, 1, e.z, 8); this.shake = 0.12; break;
      case 'kill': {
        this.sound.play('poof', e.combo);
        this.petals.burst(e.x, 1, e.z, e.kind === 'big' ? 40 : 26, e.kind === 'big' ? 1.3 : 1);
        this._spark(e.x, 1, e.z, 12);
        this.shake = Math.max(this.shake, 0.1);
        if (e.combo >= 3 && e.combo % 3 === 0) this.sound.play('combo', Math.min(9, e.combo / 3));
        if (e.how === 'dash' || Math.random() < 0.3) this._slice(t('slice'), e.x, e.z);
        const m = this.ninjaModels.get(e.id);
        if (m) { this.scene.remove(m.root); this.ninjaModels.delete(e.id); }
        if (e.last) this._slowmo(0.7);
        break;
      }
      case 'deflect': this.sound.play('deflect'); this._spark(e.x, 1, e.z, 10, 8); break;
      case 'throw': this.sound.play('throw'); break;
      case 'wind': this.sound.play('wind'); break;
      case 'strike': this.sound.play('slash', 0); break;
      case 'hurt':
        this.sound.play('hurt');
        this.shake = 0.35;
        this._hearts(e.hp, f.maxHp);
        break;
      case 'wave':
        this.sound.play('gong');
        this._banner(`${t('wave')} ${num(e.n)}/${num(e.of)}`);
        break;
      case 'boss':
        this.sound.setMode('boss');
        this._banner(t('boss'), 2.2);
        this.hud.bossbar.style.display = 'block';
        this.oni = makeOni();
        this.oni.root.scale.setScalar(1.25);
        this.scene.add(this.oni.root);
        break;
      case 'roar': this.sound.play('roar'); this.shake = 0.5; break;
      case 'bossWind':
        this.sound.play('bossWind');
        if (e.kind === 'slam' && !this._warned) { this._warned = true; this.toast(t('watch'), 2); }
        break;
      case 'slam': this.sound.play('slam'); this.shake = 0.7; this._spark(e.x, 0.3, e.z, 30, 9); this.petals.burst(e.x, 0.3, e.z, 20, 1.5); break;
      case 'sweep': this.sound.play('sweep'); this.shake = 0.3; break;
      case 'charge': this.sound.play('roar'); break;
      case 'bossHit':
        this.sound.play('bossHit');
        this._spark(f.boss.x, 2, f.boss.z, e.how === 'dash' ? 20 : 8, 7);
        this.hud.bossbar.querySelector('i').style.width = `${(e.hp / e.max) * 100}%`;
        if (e.how === 'dash') this._slice(t('slice'), f.boss.x, f.boss.z);
        break;
      case 'bossDown':
        this._slowmo(1.2);
        this.petals.burst(e.x, 2.5, e.z, 160, 2.2);
        this._spark(e.x, 2.5, e.z, 60, 12);
        this.shake = 0.8;
        this.oniDown = 0;
        break;
      default:
    }
    void time;
  }

  _walk(m, x, z, face, moving, dt, time, speed = 13) {
    m.root.position.set(x, 0, z);
    let d = face - m.root.rotation.y;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    m.root.rotation.y += d * Math.min(1, dt * 14);
    const sw = Math.sin(time * speed) * 0.7 * moving;
    if (m.legs[0]) { m.legs[0].rotation.x = sw; m.legs[1].rotation.x = -sw; }
    m.body.position.y = Math.abs(Math.sin(time * speed)) * 0.06 * moving;
  }

  _sync(dt, rdt, time) {
    const f = this.fight;
    const p = f.p;
    // the samurai
    this._walk(this.hero, p.x, p.z, p.face, p.moving, rdt, time);
    const sw = p.slash > 0 ? 1 - p.slash / 0.18 : 0;
    this.hero.arms[1].rotation.x = p.slash > 0 ? -1.6 + sw * 2.4 : p.dash > 0 ? -1.4 : -0.5 + Math.sin(time * 13) * 0.3 * p.moving;
    this.hero.arms[1].rotation.z = p.slash > 0 ? -0.6 + sw * 1.4 : 0;
    this.hero.arms[0].rotation.x = Math.sin(time * 13) * -0.5 * p.moving;
    this.hero.root.visible = p.inv <= 0 || Math.floor(time * 16) % 2 === 0;
    this.hero.body.rotation.x = p.dash > 0 ? 0.35 : 0;
    this.ring.position.set(p.x, 0.04, p.z);
    this.ring.scale.setScalar(1 + Math.sin(time * 6) * 0.06);
    // swing crescent
    if (this.arcT > 0) { this.arcT -= rdt; this.arc.material.opacity = Math.max(0, this.arcT / 0.18) * 0.95; this.arc.position.set(p.x, 0.9, p.z); }
    // dash trail
    if (p.dash > 0) {
      const tr = this.trail[(this._ti = ((this._ti ?? 0) + 1) % this.trail.length)];
      tr.life = 0.3;
      tr.m.position.set(p.x - p.dx * 0.6, 0.9, p.z - p.dz * 0.6);
      tr.m.rotation.y = Math.atan2(p.dx, p.dz);
      tr.m.scale.set(1, 1, 2.2);
      this._spark(p.x, 0.9, p.z, 2, 2);
    }
    for (const tr of this.trail) { tr.life = Math.max(0, tr.life - rdt); tr.m.material.opacity = tr.life * 2.6; }
    // ninjas
    let mi = 0;
    for (const e of f.enemies) {
      let m = this.ninjaModels.get(e.id);
      if (!m) {
        m = makeNinja(e.kind);
        m.warn = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 4), mat(0xff3a3a, 0xff0000, 0.6));
        m.warn.rotation.x = Math.PI;
        m.warn.position.y = e.kind === 'big' ? 2.5 : 1.85;
        m.root.add(m.warn);
        this.scene.add(m.root);
        this.ninjaModels.set(e.id, m);
        this.petals.burst(e.x, 0.5, e.z, 6, 0.5); // a puff as they arrive
      }
      const moving = e.state === 'run' ? 1 : 0;
      this._walk(m, e.x, e.z, e.face, moving, dt, time, 15);
      const wind = e.state === 'wind';
      m.warn.visible = wind;
      m.warn.position.y = (e.kind === 'big' ? 2.5 : 1.85) + Math.abs(Math.sin(time * 12)) * 0.15;
      m.arms[1].rotation.x = wind ? -2.4 : e.state === 'rest' ? 0.6 : Math.sin(time * 15) * 0.5 * moving;
      m.body.scale.setScalar((e.kind === 'big' ? 1.4 : 1) * (e.flash > 0 ? 1.15 : 1));
      if (wind && e.kind !== 'thrower' && mi < this.marks.length - 3) {
        const mk = this.marks[mi++];
        mk.position.set(e.x + e.wx * 0.8, 0.05, e.z + e.wz * 0.8);
        mk.scale.setScalar(KINDR[e.kind]);
        mk.material.opacity = 0.18 + Math.abs(Math.sin(time * 10)) * 0.12;
      }
    }
    if (this.ninjaModels.size > f.enemies.length) {
      const alive = new Set(f.enemies.map((e) => e.id));
      for (const [id, m] of this.ninjaModels) if (!alive.has(id)) { this.scene.remove(m.root); this.ninjaModels.delete(id); }
    }
    // thrown stars
    while (this.starModels.length < f.stars.length) { const s = makeShuriken(); this.scene.add(s); this.starModels.push(s); }
    this.starModels.forEach((s, i) => {
      const st = f.stars[i];
      s.visible = !!st;
      if (st) { s.position.set(st.x, 1, st.z); s.rotation.y = time * 18; }
    });
    // the oni
    const b = f.boss;
    if (b && this.oni) {
      const o = this.oni;
      if (b.hp > 0) {
        this._walk(o, b.x, b.z, b.face, b.state === 'walk' || b.state === 'enter' || b.state === 'charge' ? 1 : 0, dt, time, b.state === 'charge' ? 16 : 7);
        const club = o.arms[1];
        if (b.state === 'slamWind') club.rotation.x = -2.6 - Math.sin(time * 20) * 0.05;
        else if (b.state === 'tired' && b.t > 1.0) club.rotation.x = 0.9;
        else if (b.state === 'sweepWind') { club.rotation.x = -1.4; o.body.rotation.y = 0.9; } else if (b.state === 'tired') { o.body.rotation.y *= 0.9; club.rotation.x = 0.4 + Math.sin(time * 3) * 0.1; o.head.rotation.z = Math.sin(time * 4) * 0.12; } else { club.rotation.x = -0.3 + Math.sin(time * 7) * 0.3; o.body.rotation.y = 0; o.head.rotation.z = 0; }
        o.body.scale.setScalar(b.flash > 0 ? 1.06 : 1);
        // telegraphs
        if (b.state === 'slamWind' || b.state === 'sweepWind') {
          const mk = this.marks[this.marks.length - 1];
          mk.position.set(b.state === 'slamWind' ? b.ax : b.x, 0.05, b.state === 'slamWind' ? b.az : b.z);
          mk.scale.setScalar(b.ar);
          mk.material.opacity = 0.25 + Math.abs(Math.sin(time * 9)) * 0.2;
          mi = Math.max(mi, 0);
        } else this.marks[this.marks.length - 1].material.opacity = 0;
        if (b.state === 'chargeWind') {
          this.chargeMark.material.opacity = 0.22 + Math.abs(Math.sin(time * 10)) * 0.15;
          this.chargeMark.position.set(b.x + b.ax * 8, 0.05, b.z + b.az * 8);
          this.chargeMark.rotation.z = -Math.atan2(b.ax, b.az);
        } else this.chargeMark.material.opacity = 0;
      } else {
        // the giant topples over and pops into petals
        this.oniDown = (this.oniDown ?? 0) + dt;
        o.root.rotation.x = Math.min(Math.PI / 2, this.oniDown * 1.6);
        o.root.scale.setScalar(Math.max(0.01, 1.25 * (1 - Math.max(0, this.oniDown - 0.8) * 1.5)));
        this.marks[this.marks.length - 1].material.opacity = 0;
        this.chargeMark.material.opacity = 0;
      }
    }
    for (let k = mi; k < this.marks.length - 1; k++) this.marks[k].material.opacity = 0;
    this.petals.update(dt, time);
    this._sparkStep(dt);
    this._airStep(rdt, time);
    // camera follows, with a little shake
    const portrait = this.cw < this.ch;
    const want = new THREE.Vector3(p.x * 0.6, portrait ? 16 : 11, p.z * 0.6 + (portrait ? 10 : 7.8));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, rdt * 4));
    this.shake = Math.max(0, this.shake - rdt * 2);
    const sh = this.shake * 0.4;
    this.camera.position.set(this.cam.x + (Math.random() - 0.5) * sh, this.cam.y + (Math.random() - 0.5) * sh, this.cam.z);
    this.camera.lookAt(this.cam.x, 0, this.cam.z - (portrait ? 10 : 7.8) - 1);
    // HUD
    const hc = this._hc;
    if (hc.kills !== f.kills) { hc.kills = f.kills; this.hud.kills.textContent = num(f.kills); }
    if (hc.combo !== f.combo) {
      hc.combo = f.combo;
      this.hud.combo.style.opacity = f.combo >= 2 ? '1' : '0';
      if (f.combo >= 2) {
        this.hud.combo.firstChild.textContent = num(f.combo);
        this.hud.combo.classList.remove('pop');
        void this.hud.combo.offsetWidth;
        this.hud.combo.classList.add('pop');
      }
    }
    this.hud.combo.lastChild.style.width = `${Math.max(0, f.comboT / 2.6) * 100}%`;
    this.hud.dash.classList.toggle('cd', p.dashCd > 0);
  }

  _sparkStep(dt) {
    const s = this.sparks;
    for (let k = 0; k < s.n; k++) {
      if (s.life[k] <= 0) continue;
      s.life[k] -= dt;
      s.vel[k * 3 + 1] -= 9 * dt;
      for (let a = 0; a < 3; a++) s.pos[k * 3 + a] += s.vel[k * 3 + a] * dt;
      if (s.life[k] <= 0) s.pos[k * 3 + 1] = -50;
    }
    s.g.attributes.position.needsUpdate = true;
  }

  _airStep(dt, time) {
    const a = this.air;
    for (let i = 0; i < a.d.length; i++) {
      const l = a.d[i];
      l.y -= dt * 0.6 * l.w;
      l.x += Math.sin(time * l.w + l.r) * dt * 0.8;
      if (l.y < 0.05) { l.y = 8 + Math.random() * 4; l.x = (Math.random() - 0.5) * 30; l.z = (Math.random() - 0.5) * 30; }
      this._e.set(Math.sin(time * 2 + l.r) * 1.2, l.r + time * 0.5, Math.cos(time * 1.7 + l.r));
      this._q.setFromEuler(this._e);
      this._v.set(l.x, l.y, l.z);
      this._m.compose(this._v, this._q, this._s);
      a.inst.setMatrixAt(i, this._m);
    }
    a.inst.instanceMatrix.needsUpdate = true;
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if ((this.mode === 'play' || this.mode === 'results') && this.fight) {
      if (this.mode === 'play' && !this.paused) this._fightFrame(dt, time);
      else if (this.mode === 'results') { this.petals.update(dt, time); this._airStep(dt, time); }
    } else {
      // menu: the samurai stands in the middle of the courtyard, the camera slowly circles
      this._airStep(dt, time);
      this.hero.root.position.set(0, 0, 0);
      this.hero.root.rotation.y = Math.sin(time * 0.6) * 0.4;
      this.hero.arms[1].rotation.x = -1.2 + Math.sin(time * 2) * 0.1;
      this.ring.position.set(0, 0.04, 0);
      const portrait = this.cw < this.ch;
      const a = time * 0.12;
      const r = portrait ? 13 : 9;
      this.camera.position.set(Math.sin(a) * r, portrait ? 9 : 5.5, Math.cos(a) * r);
      this.camera.lookAt(0, 1.4, 0);
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

const KINDR = { ninja: 1.1, big: 1.5, thrower: 1 };

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.SamuraiAction = api;
export default api;
