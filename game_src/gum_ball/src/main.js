// «كرة العلكة العملاقة» — Gum Ball Roll. Entry: window.GumBall.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A small pink ball of sticky gum rolls through a colourful city: drag anywhere to roll. Things small enough stick to
// the ball and it grows: street clutter, then carts and umbrellas, cars, buses and buildings. Things still too big
// bounce the ball. Reach a gigantic size before the time runs out (no losing). No network, no links, no ads.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Roll, buildCity, THINGS, GOALS, STARS, PICK, HALF, normalizeSave } from './sim.js';
import { kindGeometry, vcMat, makeGum, tileTexture } from './models.js';
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
const fmtD = (d) => (d < 10 ? d.toFixed(1) : String(Math.round(d)));
const fmtT = (s) => { const m = Math.floor(s / 60); const r = Math.floor(s % 60); return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`; };

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

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
    if (!document.getElementById('gb-style')) document.head.append(h('style', { id: 'gb-style', text: CSS }));
    this.root = h('div', { class: 'gb-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'gb-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'gb-btn blue', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'gb-loading' }, t('title'), h('i'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.6);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'gb-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.3, 900);
    this.camPos = new THREE.Vector3(0, 6, 20);
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
    this.city = buildCity(11);
    this._fonts().then(() => {
      this._buildScene();
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
    this.land = this.cw > this.ch * 1.15;
    this.root.classList.toggle('gb-land', this.land);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.land ? 48 : 60;
    this.camera.updateProjectionMatrix();
  }

  // ---- the city ------------------------------------------------------------------------------------------------------

  _buildScene() {
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0x9ad4f5);
    s.fog = new THREE.Fog(0xb8e0f8, 80, 420);
    s.add(new THREE.HemisphereLight(0xffffff, 0x8a7a6a, 1.7));
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.5);
    sun.position.set(-60, 120, 40);
    s.add(sun);
    // ground: grey streets everywhere, pavements, and the terracotta plaza in the middle
    const road = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2 + 200, HALF * 2 + 200), new THREE.MeshLambertMaterial({ color: 0x55585e }));
    road.rotation.x = -Math.PI / 2;
    s.add(road);
    const BLOCK = 46;
    const ROAD = 14;
    const pave = tileTexture('#cfcac2', '#c4bfb6', '#a8a39a', 4);
    pave.repeat.set(8, 8);
    const paveMat = new THREE.MeshLambertMaterial({ map: pave });
    const blocks = [];
    for (let bx = -5; bx <= 4; bx++) for (let bz = -5; bz <= 4; bz++) {
      const g = new THREE.PlaneGeometry(BLOCK - ROAD, BLOCK - ROAD);
      g.rotateX(-Math.PI / 2);
      g.translate(bx * BLOCK + ROAD + (BLOCK - ROAD) / 2, 0.03, bz * BLOCK + ROAD + (BLOCK - ROAD) / 2);
      blocks.push(g);
    }
    // lane lines: yellow middle lines and white crossings
    const lines = [];
    for (let k = -5; k <= 5; k++) {
      const c = k * BLOCK + ROAD / 2;
      for (let v = -HALF; v < HALF; v += 6) {
        lines.push(new THREE.PlaneGeometry(0.35, 3).rotateX(-Math.PI / 2).translate(c, 0.02, v));
        lines.push(new THREE.PlaneGeometry(3, 0.35).rotateX(-Math.PI / 2).translate(v, 0.02, c));
      }
    }
    s.add(new THREE.Mesh(mergeGeometries(blocks), paveMat));
    s.add(new THREE.Mesh(mergeGeometries(lines), new THREE.MeshBasicMaterial({ color: 0xffd23a })));
    const plazaTex = tileTexture('#d8805a', '#cc7450', '#b8633f', 4);
    plazaTex.repeat.set(10, 32);
    const plaza = new THREE.Mesh(new THREE.PlaneGeometry(30, 96), new THREE.MeshLambertMaterial({ map: plazaTex }));
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.set(0, 0.05, -25);
    s.add(plaza);
    // red stairs at the end of the plaza (as in the video)
    for (let i = 0; i < 6; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(12, 0.4 * (i + 1), 1.2), new THREE.MeshLambertMaterial({ color: 0xd82a3a })); st.position.set(0, 0.2 * (i + 1), -72 - i * 1.2); s.add(st); }
    // the things: one instanced mesh per kind
    this.inst = new Map();
    const byKind = new Map();
    for (const th of this.city) { if (!byKind.has(th.kind)) byKind.set(th.kind, []); byKind.get(th.kind).push(th); }
    const M = new THREE.Matrix4();
    for (const [kind, list] of byKind) {
      const mesh = new THREE.InstancedMesh(kindGeometry(kind), vcMat, list.length);
      list.forEach((th, i) => {
        th.slot = i;
        const sc = THINGS[kind].g === 4 ? th.s : th.s;
        M.compose(new THREE.Vector3(th.x, 0, th.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, th.a, 0)), new THREE.Vector3(sc, THINGS[kind].g === 4 ? th.s : sc, sc));
        mesh.setMatrixAt(i, M);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
      s.add(mesh);
      this.inst.set(kind, mesh);
    }
    // tall colourful buildings with billboards around the plaza (the backdrop of the video)
    const bb = [0xff5ab8, 0x5ae8ff, 0xffd23a, 0x8a5aff, 0x5aff8a];
    for (let i = 0; i < 14; i++) {
      const side = i % 2 ? 1 : -1;
      const hgt = 26 + (i % 4) * 10;
      const b = new THREE.Mesh(new THREE.BoxGeometry(12, hgt, 12), new THREE.MeshLambertMaterial({ color: [0x3a7ad8, 0xe8c87a, 0xd86a8a, 0x6ac8e8][i % 4] }));
      b.position.set(side * 22, hgt / 2, -70 + Math.floor(i / 2) * 13);
      s.add(b);
      const board = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), new THREE.MeshBasicMaterial({ color: bb[i % 5] }));
      board.position.set(side * 15.9, hgt * 0.55, b.position.z);
      board.rotation.y = -side * Math.PI / 2;
      s.add(board);
      this.walls = this.walls || [];
      this.walls.push({ x: b.position.x, z: b.position.z, r: 6.5, s: hgt });
    }
    // the ball, the things stuck to it, and the pink trail
    this.gum = makeGum();
    s.add(this.gum.root);
    this.stuck = new THREE.Group();
    this.gum.root.add(this.stuck);
    this.trail = [];
    const tg = new THREE.CircleGeometry(0.5, 14);
    tg.rotateX(-Math.PI / 2);
    for (let i = 0; i < 60; i++) { const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xff6ab8, transparent: true, opacity: 0, depthWrite: false })); s.add(m); this.trail.push({ m, t: 9 }); }
    this.trailI = 0;
    this.sparks = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0xffe27a, size: 0.4, map: dotTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.spark = { pos: new Float32Array(150 * 3), vel: new Float32Array(150 * 3), life: new Float32Array(150), i: 0 };
    this.sparks.geometry.setAttribute('position', new THREE.BufferAttribute(this.spark.pos, 3));
    this.sparks.frustumCulled = false;
    s.add(this.sparks);
    this.q = new THREE.Quaternion();
  }

  _resetCity() {
    const M = new THREE.Matrix4();
    for (const th of this.city) {
      th.taken = false;
      const mesh = this.inst.get(th.kind);
      M.compose(new THREE.Vector3(th.x0 ?? th.x, 0, th.z0 ?? th.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, th.a, 0)), new THREE.Vector3(th.s, th.s, th.s));
      if (th.x0 !== undefined) { th.x = th.x0; th.z = th.z0; }
      mesh.setMatrixAt(th.slot, M);
    }
    for (const m of this.inst.values()) m.instanceMatrix.needsUpdate = true;
    this.stuck.clear();
    this.gum.root.quaternion.identity();
  }

  _burst(x, y, z, n, p) {
    const S = this.spark;
    for (let i = 0; i < n; i++) {
      const k = S.i++ % 150;
      const a = Math.random() * 6.28;
      S.pos.set([x, y, z], k * 3);
      S.vel.set([Math.cos(a) * p * Math.random(), Math.random() * p, Math.sin(a) * p * Math.random()], k * 3);
      S.life[k] = 0.6;
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.gb-dim')) return;
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
      const l = Math.hypot(dx, dy);
      if (l < this.u * 1.2) { this.input.mx = this.input.mz = 0; return; }
      const k = Math.min(1, l / (this.u * 8)) / l;
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
      if (e.type === 'keydown') { this.input.keys.add(k); if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause(); } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'gb-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none'; }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(cls) {
    const b = h('button', { class: `gb-pause ${cls}`, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() { this.toastEl = h('div', { class: 'gb-toast' }); return this.toastEl; }
  toast(text, secs = 2.4) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.g = null;
    this.sound.setMode('menu');
    this.sound.roll(0, 0, false);
    this._clear();
    this.layer.append(
      h('button', { class: 'gb-pause', style: 'top:max(calc(var(--u)*3),env(safe-area-inset-top));bottom:auto', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'gb-logo' }, t('title')),
      h('div', { class: 'gb-menu' },
        this.save.best ? h('div', { class: 'gb-sub', style: 'color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4)' }, `${t('best')}: ${num(fmtD(this.save.best))} ${t('m')}  ${'⭐'.repeat(this.save.stars)}`) : null,
        h('button', { class: 'gb-btn', onclick: () => this.start() }, '▶ ', t('play')),
        h('div', { class: 'gb-sub', style: 'color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4);font-size:calc(var(--u)*3.2)' }, t('starHelp'))),
      this._mute('gb-mute'),
      this._toastEl(),
    );
  }

  start() {
    this._resetCity();
    this.g = new Roll({ things: this.city, easy: this.age <= 4 });
    for (const th of this.city) { if (th.x0 === undefined) { th.x0 = th.x; th.z0 = th.z; } }
    this.mode = 'play';
    this.paused = false;
    this.moved = false;
    this.lastGoal = 0;
    this.sound.setMode('play');
    this._hud();
    this.camPos.set(0, 4, 18);
  }

  _hud() {
    this._clear();
    const pill = (label, b, extra) => h('div', { class: 'gb-pill' }, h('small', {}, label), b, extra);
    this.hud = {
      d: h('b', {}, h('i'), h('span')),
      goal: h('b', {}, h('i'), h('span')),
      goalBar: h('i', { style: 'width:0%' }),
      time: h('b', {}, '⏱ ', h('span')),
      bigger: h('div', { class: 'gb-bigger' }, h('b', {}, t('bigger')), h('span')),
      count: h('div', { class: 'gb-count' }),
    };
    this.hud.timePill = pill(t('timeLeft'), this.hud.time);
    this.layer.append(
      h('div', { class: 'gb-pills' }, pill(t('diameter'), this.hud.d), pill(t('nextGoal'), this.hud.goal, h('div', { class: 'bar' }, this.hud.goalBar)), this.hud.timePill),
      this.hud.bigger,
      this.hud.count,
      h('button', { class: 'gb-pause', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '❚❚'),
      this._mute('gb-mute'),
      this._toastEl(),
    );
    this._hc = {};
  }

  _count(text) {
    const c = this.hud.count;
    c.textContent = text;
    c.classList.remove('pop');
    void c.offsetWidth;
    c.classList.add('pop');
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.mx = this.input.mz = 0;
    this.sound.suspend();
    const dim = h('div', { class: 'gb-dim' }, h('div', { class: 'gb-card' },
      h('h2', {}, t('paused')),
      h('button', { class: 'gb-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this.clock.getDelta(); } }, '▶ ', t('resume')),
      h('button', { class: 'gb-btn blue', onclick: () => { this.sound.resume(); this.start(); } }, '↻ ', t('restart')),
      h('button', { class: 'gb-btn blue', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const g = this.g;
    const r = g.result;
    this.mode = 'results';
    this.sound.roll(0, 0, false);
    this.sound.setMode('menu');
    const isBest = r.d > this.save.best;
    this.save.best = Math.max(this.save.best, Math.round(r.d * 10) / 10);
    this.save.stars = Math.max(this.save.stars, r.stars);
    this.save.plays++;
    this._saveNow();
    this.sound.play('win');
    [0, 1, 2].forEach((k) => k < r.stars && setTimeout(() => this.sound.play('star', k), 700 + k * 280));
    this.layer.append(h('div', { class: 'gb-dim' }, h('div', { class: 'gb-card' },
      h('h2', {}, t('timeUp')),
      h('div', { class: 'gb-sub' }, t('finalSize')),
      h('div', { class: 'gb-big' }, `${num(fmtD(r.d))} ${t('m')}`),
      h('div', { class: 'gb-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'gb-sub' }, `${t('collected')} ${num(r.collected)} ${t('things')}`),
      isBest ? h('div', { class: 'gb-sub', style: 'color:#b81a6a' }, t('newBest')) : h('div', { class: 'gb-sub' }, `${t('best')}: ${num(fmtD(this.save.best))} ${t('m')}`),
      h('div', { class: 'gb-sub', style: 'color:#b81a6a' }, t('win')),
      h('button', { class: 'gb-btn', onclick: () => this.start() }, '↻ ', t('again')),
      h('button', { class: 'gb-btn blue', onclick: () => this.showMenu() }, t('menu')))));
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const g = this.g;
    const k = this.input.keys;
    let mx = this.input.mx;
    let mz = this.input.mz;
    if (k.has('arrowleft') || k.has('a')) mx -= 1;
    if (k.has('arrowright') || k.has('d')) mx += 1;
    if (k.has('arrowup') || k.has('w')) mz -= 1;
    if (k.has('arrowdown') || k.has('s')) mz += 1;
    g.setMove(mx, mz);
    const before = g.state;
    for (const e of g.step(dt)) this._event(e, g);
    // the backdrop buildings around the plaza are walls until the ball is huge
    for (const w of this.walls) {
      const dx = g.ball.x - w.x;
      const dz = g.ball.z - w.z;
      const d = Math.hypot(dx, dz);
      if (d < g.r + w.r && g.d < w.s * 1.2) { g.ball.x = w.x + (dx / d) * (g.r + w.r); g.ball.z = w.z + (dz / d) * (g.r + w.r); }
    }
    if (before === 'roll' && g.state === 'done') setTimeout(() => this.mode === 'play' && this.g === g && this._results(), 1600);
    this._sync(dt, time);
  }

  _event(e, g) {
    const S = this.sound;
    switch (e.type) {
      case 'count': S.play('count'); this._count(num(e.n)); break;
      case 'go': S.play('go'); this._count(t('go')); setTimeout(() => this.mode === 'play' && !this.moved && this.toast(t('hint'), 3), 1200); break;
      case 'tick': S.play('tick', e.n); break;
      case 'stick': {
        const th = this.city[e.id];
        const grp = THINGS[e.kind].g;
        const rel = Math.min(1, e.s / (e.from * PICK));
        if (grp === 4) { S.play('rumble'); this.shake = 0.6; } else if (e.kind === 'police') S.play('siren'); else if (grp === 2 && e.kind !== 'tree') S.play('honk'); else if (grp === 3) S.play('horn'); else if (e.kind === 'duck' || e.kind === 'teddy') S.play('squeak'); else if ((this._pickT ?? 0) <= 0) { S.play('pick', rel); this._pickT = 0.04; }
        // hide it on the ground and stick a copy onto the ball's surface
        const mesh = this.inst.get(e.kind);
        mesh.setMatrixAt(th.slot, new THREE.Matrix4().makeScale(0, 0, 0));
        mesh.instanceMatrix.needsUpdate = true;
        this._attach(e.kind, th);
        const q = this._proj(th.x, Math.max(1, e.s) + g.r, th.z);
        const pop = h('div', { class: 'gb-pop', style: `left:${q.x}px;top:${q.y}px` }, `+${name(THINGS[e.kind])}`);
        this.layer.append(pop);
        setTimeout(() => pop.remove(), 1100);
        this._burst(th.x, g.r, th.z, grp >= 2 ? 20 : 5, 2 + grp * 2);
        break;
      }
      case 'bump':
        S.play('bump');
        this.shake = 0.4;
        if ((this._tooBigT ?? 0) <= 0) { this.toast(t('tooBig'), 1.6); this._tooBigT = 6; }
        break;
      case 'nudge': {
        S.play('nudge');
        const th = this.city[e.id];
        const mesh = this.inst.get(th.kind);
        mesh.setMatrixAt(th.slot, new THREE.Matrix4().compose(new THREE.Vector3(th.x, 0, th.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, th.a, 0)), new THREE.Vector3(th.s, th.s, th.s)));
        mesh.instanceMatrix.needsUpdate = true;
        break;
      }
      case 'bigger': {
        S.play('bigger');
        const goal = GOALS[e.goal - 1];
        const next = GOALS[e.goal];
        this.hud.bigger.lastChild.textContent = next ? t('nowRoll', { x: getLang() === 'en' ? goal.en.toUpperCase() : goal.ar }) : name(goal);
        this.hud.bigger.classList.add('show');
        clearTimeout(this._bT);
        this._bT = setTimeout(() => this.hud && this.hud.bigger.classList.remove('show'), 2200);
        this._burst(g.ball.x, g.r * 2, g.ball.z, 60, 6);
        break;
      }
      case 'timeUp': S.play('timeUp'); this._count(t('timeUp')); break;
      default:
    }
  }

  /** A copy of the thing on the ball's surface (in the ball's turning frame). Small old ones are absorbed. */
  _attach(kind, th) {
    const g = this.g;
    const mesh = new THREE.Mesh(kindGeometry(kind), vcMat);
    const s = th.s / g.d; // the ball group is scaled by its diameter
    mesh.scale.setScalar(s);
    // where it touched, in the ball's local frame
    const dir = new THREE.Vector3(th.x - g.ball.x, 0.15 + Math.random() * 0.5, th.z - g.ball.z).normalize();
    dir.applyQuaternion(this.gum.root.quaternion.clone().invert());
    mesh.position.copy(dir.multiplyScalar(0.48));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    mesh.userData.s = th.s;
    this.stuck.add(mesh);
    // keep it light: tiny things get swallowed into the gum as the ball grows
    if (this.stuck.children.length > 70) {
      const sorted = [...this.stuck.children].sort((a, b) => a.userData.s - b.userData.s);
      for (let i = 0; i < 12; i++) this.stuck.remove(sorted[i]);
    }
  }

  _proj(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * this.cw, y: (-v.y * 0.5 + 0.5) * this.ch };
  }

  _sync(dt, time) {
    const g = this.g;
    const b = g.ball;
    const r = g.r;
    // the ball rolls: turn around the axis across the direction of travel
    const v = Math.hypot(b.vx, b.vz);
    if (v > 0.01) {
      const axis = new THREE.Vector3(b.vz, 0, -b.vx).normalize();
      this.q.setFromAxisAngle(axis, (v * dt) / r);
      this.gum.root.quaternion.premultiply(this.q);
    }
    this.gum.root.position.set(b.x, r, b.z);
    this.gum.root.scale.setScalar(g.d);
    // pink trail spots
    this._trailD = (this._trailD ?? 0) + v * dt;
    if (this._trailD > Math.max(0.6, g.d * 0.5)) {
      this._trailD = 0;
      const tr = this.trail[this.trailI++ % this.trail.length];
      tr.t = 0;
      tr.m.position.set(b.x + (Math.random() - 0.5) * r * 0.6, 0.06, b.z + (Math.random() - 0.5) * r * 0.6);
      tr.m.scale.setScalar(Math.max(0.3, g.d * 0.22) * (0.6 + Math.random() * 0.6));
    }
    for (const tr of this.trail) { if (tr.t > 6) continue; tr.t += dt; tr.m.material.opacity = Math.max(0, 0.75 - tr.t * 0.12); }
    this.sound.roll(v, g.d, g.state === 'roll');
    this._pickT = (this._pickT ?? 0) - dt;
    this._tooBigT = (this._tooBigT ?? 0) - dt;
    // camera: behind and above, looking up the street; pulls back as the ball grows
    const z = 1 + g.d * 0.9;
    const off = this.land ? new THREE.Vector3(0, 1.6 + z * 1.1, 3.8 + z * 2.4) : new THREE.Vector3(0, 1.9 + z * 1.3, 4.2 + z * 2.6); // low behind the ball, looking up the street (like the video)
    this.camLook.lerp(new THREE.Vector3(b.x, r * 0.9, b.z - 4 - g.d * 1.6), Math.min(1, dt * 5));
    this.camPos.lerp(new THREE.Vector3(b.x + off.x, off.y, b.z + off.z), Math.min(1, dt * 3));
    this.camera.position.copy(this.camPos);
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 1.6);
    if (this.shake > 0) this.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake * z * 0.3, 0, 0));
    this.camera.lookAt(this.camLook);
    this.camera.far = 500 + g.d * 10;
    this.camera.updateProjectionMatrix();
    this._fx(dt);
    this._hudSync(g);
  }

  _fx(dt) {
    const S = this.spark;
    for (let k = 0; k < 150; k++) {
      if (S.life[k] <= 0) continue;
      S.life[k] -= dt;
      S.vel[k * 3 + 1] -= 9 * dt;
      for (let a = 0; a < 3; a++) S.pos[k * 3 + a] += S.vel[k * 3 + a] * dt;
      if (S.life[k] <= 0) S.pos[k * 3 + 1] = -500;
    }
    this.sparks.geometry.attributes.position.needsUpdate = true;
  }

  _hudSync(g) {
    if (!this.hud) return;
    const hc = this._hc;
    const d = `${num(fmtD(g.d))} ${t('m')}`;
    if (hc.d !== d) { hc.d = d; this.hud.d.lastChild.textContent = d; }
    const gd = g.goalD;
    const goal = `${num(fmtD(gd))} ${t('m')}`;
    if (hc.goal !== goal) { hc.goal = goal; this.hud.goal.lastChild.textContent = goal; }
    const prev = g.goal > 0 ? GOALS[g.goal - 1].d : 0.5;
    const w = Math.round(Math.max(0, Math.min(1, (g.d - prev) / (gd - prev))) * 100);
    if (hc.w !== w) { hc.w = w; this.hud.goalBar.style.width = `${w}%`; }
    const tm = fmtT(Math.ceil(g.left));
    if (hc.tm !== tm) { hc.tm = tm; this.hud.time.lastChild.textContent = getLang() === 'en' ? tm : num(tm); this.hud.timePill.classList.toggle('low', g.left <= 10); }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && this.g && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'results' && this.g) { this._sync(dt, time); } else if (this.mode !== 'play') {
      // menu: the ball rolls slowly down the plaza
      const a = time * 0.4;
      this.gum.root.position.set(Math.sin(a) * 3, 0.5, 6 + Math.cos(a) * 3);
      this.gum.root.scale.setScalar(1);
      this.gum.root.rotation.set(time, time * 0.7, 0);
      const want = new THREE.Vector3(0, 4.5, 16);
      this.camPos.lerp(want, Math.min(1, dt * 2));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(0, 1, -6);
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
    clearTimeout(this._bT);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
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

void STARS;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.GumBall = api;
export default api;
