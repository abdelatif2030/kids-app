// «سباق الطائرات الجوي» — Airplane Racing. Entry: window.AirRace.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Two laps of an aerial course above tropical islands, lagoons and green cliffs (and a mountain pass), through
// floating rings, under bridges and around rock pillars, against three rival planes. Drag to steer, rings charge the
// boost. No network, no links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { Race, COURSES, LAPS, KMH, TUBE_X, normalizeSave } from './sim.js';
import { makePlane, makeRing, ringGeometry, Instancer, palm, pine, island, cliff, mountain, cloud, makeBridge, makePillar, makeArch, makeSky, makeSun } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name, clock } from './i18n.js';
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
const rng = (seed) => { let x = seed >>> 0 || 1; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; }; };
const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);
const FOG = { lagoon: 0xbfe6fa, glacier: 0xc8dcf0, sunset: 0xffc8a0 };
const RIVAL_COLORS = { jet: '#2a6ad8', racer: '#ffffff', biplane: '#ffc21a' };

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
    if (!document.getElementById('ar-style')) document.head.append(h('style', { id: 'ar-style', text: CSS }));
    this.root = h('div', { class: 'ar-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'ar-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'ar-cbtn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'ar-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'ar-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(66, 1, 0.5, 2000);
    this.drag = null;
    this.keys = new Set();
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
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
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.baseFov = this.cw < this.ch ? 74 : 62;
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
  }

  // ---- a course -----------------------------------------------------------------------------------------------------

  _basis(f) {
    // object x = right, y = up, z = backwards (so its nose, -z, points along the course)
    return new THREE.Matrix4().makeBasis(V(f.r), V(f.u), V(f.t).negate());
  }

  _build(i) {
    if (this.scene) this.scene.traverse((o) => { if (o.geometry && !o.userData.keep) o.geometry.dispose(); });
    this.courseIndex = i;
    const c = COURSES[i];
    const race = (this.race = new Race({ course: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 3 }));
    const tr = race.track;
    const world = c.world;
    this.sound.setWorld(world);
    const s = (this.scene = new THREE.Scene());
    s.fog = new THREE.Fog(FOG[world], 160, 760);
    s.add(makeSky(world));
    this.sun = makeSun(world);
    s.add(this.sun);
    s.add(new THREE.HemisphereLight(0xffffff, world === 'glacier' ? 0x4a6a3a : 0x2a8ab0, 1.6));
    const light = new THREE.DirectionalLight(world === 'sunset' ? 0xffd2a0 : 0xfff6e0, 1.9);
    light.position.set(-300, 400, 200);
    s.add(light);
    // the ground: sea for the islands, green valleys for the mountain pass
    const ground = new THREE.Mesh(new THREE.CircleGeometry(1400, 48).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ color: world === 'glacier' ? 0x4f8f3f : world === 'sunset' ? 0x2a86b8 : 0x18a6d6 }));
    s.add(ground);
    this.water = world !== 'glacier' ? ground : null;
    // scenery around the course (instanced so phones stay smooth)
    const I = new Instancer();
    const rand = rng(c.id * 97 + 5);
    const samples = [];
    for (let d = 0; d < race.length; d += 16) samples.push(tr.frame(d).p);
    const clear = (x, z, r, top) => {
      for (const p of samples) {
        if (top < p[1] - 12) continue; // well below the flight path
        if (Math.hypot(p[0] - x, p[2] - z) < r + TUBE_X + 8) return false;
      }
      return true;
    };
    const sides = Math.ceil(race.length / 26);
    for (let k = 0; k < sides; k++) {
      const d = (k / sides) * race.length;
      const f = tr.frame(d);
      for (const side of [-1, 1]) {
        const off = 30 + rand() * 110;
        const x = f.p[0] + f.r[0] * off * side;
        const z = f.p[2] + f.r[2] * off * side;
        if (world === 'glacier') {
          const r = 25 + rand() * 45;
          const hgt = 60 + rand() * 120;
          if (clear(x, z, r * 0.7, hgt)) mountain(I, x, z, r, hgt, rand);
          else if (clear(x, z, 3, 12)) for (let n = 0; n < 4; n++) pine(I, x + (rand() - 0.5) * 20, 0, z + (rand() - 0.5) * 20, 2 + rand() * 1.5, rand() < 0.3);
        } else {
          const tall = rand() < 0.45;
          const r = tall ? 9 + rand() * 9 : 14 + rand() * 22;
          const hgt = tall ? 30 + rand() * 45 : 5 + rand() * 9;
          if (clear(x, z, r, hgt)) {
            if (tall) cliff(I, x, z, r, hgt, world, rand);
            else {
              island(I, x, z, r, hgt, world);
              for (let n = 0; n < 3 + rand() * 4; n++) { const a = rand() * 6.28; palm(I, x + Math.cos(a) * r * 0.6, hgt * 0.6, z + Math.sin(a) * r * 0.6, 1.4 + rand(), a); }
            }
          }
        }
      }
      // islands or pines right under the course too
      if (k % 2 === 0) {
        const x = f.p[0] + (rand() - 0.5) * 30;
        const z = f.p[2] + (rand() - 0.5) * 30;
        if (world === 'glacier') for (let n = 0; n < 3; n++) pine(I, x + (rand() - 0.5) * 16, 0, z + (rand() - 0.5) * 16, 2 + rand(), false);
        else if (rand() < 0.6) { island(I, x, z, 10 + rand() * 12, 3 + rand() * 4, world); palm(I, x, 3, z, 1.6, rand() * 6); }
      }
    }
    // far ring of mountains / islands on the horizon
    for (let k = 0; k < 40; k++) {
      const a = (k / 40) * Math.PI * 2 + rand() * 0.1;
      const d = 900 + rand() * 250;
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d;
      if (world === 'glacier') mountain(I, x, z, 80 + rand() * 80, 160 + rand() * 180, rand);
      else cliff(I, x, z, 30 + rand() * 30, 40 + rand() * 60, world, rand);
    }
    for (let k = 0; k < 60; k++) {
      const f = tr.frame(rand() * race.length);
      const side = rand() < 0.5 ? -1 : 1;
      const off = 40 + rand() * 160;
      cloud(I, f.p[0] + f.r[0] * off * side, f.p[1] + 10 + rand() * 60, f.p[2] + f.r[2] * off * side, 2 + rand() * 3, rand);
    }
    if (world === 'glacier') {
      // a canyon of rock walls with dashed lights, like the video
      if (race.canyon) {
        const wallG = new THREE.CylinderGeometry(0.85, 1, 1, 7);
        const wallM = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
        const dashG = new THREE.BoxGeometry(0.4, 0.4, 2.4);
        const dashM = new THREE.MeshBasicMaterial({ color: 0xffffff });
        for (let d = race.canyon[0]; d < race.canyon[1]; d += 7) {
          const f = tr.frame(d);
          for (const side of [-1, 1]) {
            const x = f.p[0] + f.r[0] * side * 16;
            const z = f.p[2] + f.r[2] * side * 16;
            I.add('wall', wallG, wallM, new THREE.Matrix4().compose(new THREE.Vector3(x, (f.p[1] + 26) / 2, z), new THREE.Quaternion(), new THREE.Vector3(9, f.p[1] + 26, 9)), 0x6a707c);
            const lx = f.p[0] + f.r[0] * side * 8.6;
            const lz = f.p[2] + f.r[2] * side * 8.6;
            I.add('dash', dashG, dashM, new THREE.Matrix4().compose(new THREE.Vector3(lx, f.p[1] + 1, lz), new THREE.Quaternion().setFromRotationMatrix(this._basis(f)), new THREE.Vector3(1, 1, 1)), 0xffe07a);
          }
        }
      }
    }
    I.build(s);
    // the course pieces
    for (const o of race.obstacles) {
      const f = tr.frame(o.s);
      if (o.kind === 'bridge') {
        const bottom = o.y - o.half;
        const p = tr.pos(o.s, 0, bottom);
        const g = makeBridge(world, (TUBE_X + 6) * 2, p[1]);
        g.position.set(p[0], p[1], p[2]);
        g.quaternion.setFromRotationMatrix(this._basis(f));
        s.add(g);
      } else if (o.kind === 'pillar') {
        const p = tr.pos(o.s, o.x, 0);
        const g = makePillar(world, p[1] + 22 + (o.s % 7) * 2);
        g.position.set(p[0], 0, p[2]);
        s.add(g);
      } else {
        const p = tr.pos(o.s, o.x, o.y);
        const g = makeArch(world, o.inner, p[1]);
        g.position.set(p[0], p[1], p[2]);
        g.quaternion.setFromRotationMatrix(this._basis(f));
        s.add(g);
      }
    }
    // rings
    const geoN = ringGeometry(world, false, 4.6);
    const geoG = ringGeometry(world, true, 4.6);
    this.ringModels = race.rings.map((g) => {
      const m = makeRing(g.golden ? geoG : geoN);
      const p = tr.pos(g.s, g.x, g.y);
      m.position.set(p[0], p[1], p[2]);
      m.quaternion.setFromRotationMatrix(this._basis(tr.frame(g.s)));
      s.add(m);
      return m;
    });
    // the dashed guide to the next ring
    this.guide = [];
    const dashG = new THREE.BoxGeometry(0.22, 0.22, 1.6);
    const dashM = new THREE.MeshBasicMaterial({ color: 0xffe07a, transparent: true, opacity: 0.9 });
    for (let k = 0; k < 14; k++) { const d = new THREE.Mesh(dashG, dashM); s.add(d); this.guide.push(d); }
    // planes
    this.planeModels = race.planes.map((p) => {
      const m = makePlane(p.id);
      s.add(m.root);
      return m;
    });
    this.flyby = race.planes.map(() => 0);
    this.cam = null;
    this.camUp = new THREE.Vector3(0, 1, 0);
    this._mapPath();
  }

  _mapPath() {
    const tr = this.race.track;
    const pts = [];
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (let d = 0; d < this.race.length; d += 20) { const p = tr.frame(d).p; pts.push(p); minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]); }
    const sc = 74 / Math.max(maxX - minX, maxZ - minZ);
    const cx = (minX + maxX) / 2;
    const cz = (minZ + maxZ) / 2;
    this.map = { to: (p) => [50 + (p[0] - cx) * sc, 50 + (p[2] - cz) * sc], pts };
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused) return;
      this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0 };
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      this.drag.dx = e.clientX - this.drag.x;
      this.drag.dy = e.clientY - this.drag.y;
    });
    const up = (e) => { if (this.drag && e.pointerId === this.drag.id) this.drag = null; };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.ar-boost')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (this.mode === 'play' && (k === ' ' || k === 'shift' || k === 'b')) { this._boost(); e.preventDefault(); }
        if (k === 'escape' || k === 'p') this.pause();
        if (k.startsWith('arrow') || 'wasd'.includes(k)) { this.keys.add(k); e.preventDefault(); }
      } else this.keys.delete(k);
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'ar-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _steer() {
    let x = 0;
    let y = 0;
    if (this.drag) {
      const k = this.u * 13;
      x = this.drag.dx / k;
      y = -this.drag.dy / k;
    }
    const K = this.keys;
    if (K.has('arrowleft') || K.has('a')) x -= 1;
    if (K.has('arrowright') || K.has('d')) x += 1;
    if (K.has('arrowup') || K.has('w')) y += 1;
    if (K.has('arrowdown') || K.has('s')) y -= 1;
    this.race.setSteer(x, y);
  }

  _boost() {
    if (this.mode !== 'play' || this.paused || !this.race) return;
    if (!this.race.boost()) { if (this.race.state === 'race' && this.race.player.boost <= 0) this.sound.play('no'); }
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'ar-round ar-mute', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() { this.toastEl = h('div', { class: 'ar-toast' }); return this.toastEl; }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _corner() { return 'top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)'; }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._build(Math.min(this.save.unlocked, COURSES.length) - 1);
    this._clear();
    const list = COURSES.map((c, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[c.id] ?? 0;
      return h('button', {
        class: `ar-course${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`, 'aria-label': name(c),
        onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked')); return; } this.startCourse(i); },
      },
      h('span', { class: 'no' }, `0${c.id}`),
      h('span', { class: 'nm' }, h('b', {}, name(c)), h('span', {}, locked ? '🔒' : '★'.repeat(stars) + '☆'.repeat(3 - stars))),
      this.save.best[c.id] ? h('span', { class: 'lp' }, `⏱ ${clock(this.save.best[c.id])}`) : null,
      h('span', { class: 'lp' }, t('laps')));
    });
    this.layer.append(
      h('button', { class: 'ar-round', style: this._corner(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'ar-dim', style: 'background:rgba(8,14,30,.25)' },
        h('div', { class: 'ar-card' },
          h('h2', { class: 'ar-big' }, '✈️ ', t('title')),
          h('div', { class: 'ar-courses' }, list),
          h('button', { class: 'ar-cbtn', onclick: () => this.startCourse(Math.min(this.save.unlocked, COURSES.length) - 1) }, '▶ ', t('play')))),
      this._toastEl(),
    );
  }

  startCourse(i) {
    this._build(i);
    this.mode = 'play';
    this.paused = false;
    this.drag = null;
    this.sound.setMode('play');
    this._hud();
  }

  _hud() {
    this._clear();
    const mapCanvas = h('canvas', { width: 200, height: 200 });
    this.hud = {
      pos: h('div', { class: 'n' }),
      lap: h('div', { class: 'ar-chip' }),
      timer: h('div', { class: 'ar-timer' }, clock(0)),
      speed: h('b', {}, num(0)),
      boost: h('button', { class: 'ar-boost', 'aria-label': t('boost') }, h('i', {}, '»'), t('boost')),
      hint: h('div', { class: 'ar-hint' }, t('steer')),
      count: h('div', { class: 'ar-count ar-big' }),
      map: mapCanvas,
      mapCtx: mapCanvas.getContext('2d'),
    };
    this.hud.boost.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this._boost(); });
    this.layer.append(
      h('button', { class: 'ar-round', style: 'top:max(calc(var(--u)*2),env(safe-area-inset-top));right:calc(var(--u)*3)', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, 'II'),
      h('div', { class: 'ar-pos ar-big' }, this.hud.pos, this.hud.lap),
      this.hud.timer,
      this._mute(),
      h('div', { class: 'ar-mapwrap' }, mapCanvas),
      h('div', { class: 'ar-speed ar-big' }, this.hud.speed, h('span', {}, t('kmh'))),
      this.hud.boost,
      this.hud.hint,
      this.hud.count,
      this._toastEl(),
    );
    this._hc = {};
    this.hintT = 6;
    this.mapT = 0;
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.drag = null;
    this.sound.suspend();
    const dim = h('div', { class: 'ar-dim' }, h('div', { class: 'ar-card' },
      h('h2', {}, t('paused')),
      h('button', { class: 'ar-cbtn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'ar-cbtn alt', onclick: () => { this.sound.resume(); this.startCourse(this.courseIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'ar-cbtn alt', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const r = this.race.result;
    const i = this.courseIndex;
    const c = COURSES[i];
    this.mode = 'results';
    this.save.stars[c.id] = Math.max(this.save.stars[c.id] ?? 0, r.stars);
    if (!this.save.best[c.id] || r.time < this.save.best[c.id]) this.save.best[c.id] = Math.round(r.time * 100) / 100;
    if (i + 2 > this.save.unlocked && i + 1 < COURSES.length) this.save.unlocked = i + 2;
    this._saveNow();
    const got = [r.stars >= 1, r.place <= 2, r.place === 1];
    got.forEach((g, k) => { if (g) setTimeout(() => this.sound.play('star', k), 300 + k * 250); });
    const last = i + 1 >= COURSES.length;
    const dim = h('div', { class: 'ar-dim' }, h('div', { class: 'ar-card' },
      h('div', { class: 'ar-medal' }, ['🥇', '🥈', '🥉', '🏅'][r.place - 1]),
      h('h2', {}, last ? t('allDone') : t('finish')),
      h('div', { style: 'font-weight:900;font-size:calc(var(--u)*3.6);text-align:center' }, `${t('place')} ${num(r.place)}   ⏱ ${clock(r.time)}   ⭕ ${num(r.rings)}/${num(r.of)}`),
      h('div', { class: 'ar-row3' }, ['s1', 's2', 's3'].map((k, n) => h('div', { class: got[n] ? '' : 'off' }, h('b', {}, '⭐'), t(k)))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        !last ? h('button', { class: 'ar-cbtn', onclick: () => this.startCourse(i + 1) }, t('next'), ' ▶') : h('button', { class: 'ar-cbtn', onclick: () => this.startCourse(0) }, '▶ ', t('playAgain')),
        h('button', { class: 'ar-cbtn alt', onclick: () => this.startCourse(i) }, '↻ ', t('again')),
        h('button', { class: 'ar-cbtn alt', onclick: () => this.showMenu() }, t('menu')))));
    this.layer.append(dim);
  }

  _pop(text) {
    const tag = h('div', { class: 'ar-pop', style: `left:50%;top:44%` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 900);
  }

  _count(text) {
    const c = this.hud.count;
    c.textContent = text;
    c.classList.remove('pop');
    void c.offsetWidth;
    c.classList.add('pop');
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const race = this.race;
    this._steer();
    const events = race.step(dt);
    for (const e of events) {
      switch (e.type) {
        case 'count': this.sound.play('count'); this._count(num(e.n)); break;
        case 'go': this.sound.play('go'); this._count(t('go')); break;
        case 'ring':
          this.sound.play('ring', e);
          if (e.full) this.sound.play('full');
          this.ringModels[e.k].userData.flash = 0.45;
          if (e.golden) this._pop('+ ⚡');
          if (e.full && !this.toldBoost) { this.toldBoost = true; this.toast(t('boostNow'), 2.4); }
          break;
        case 'miss': this.sound.play('miss'); break;
        case 'boost': this.sound.play('boost'); break;
        case 'bump': this.sound.play('bump'); this.shake = 0.6; this._pop(t('bump')); break;
        case 'edge': if (!this._edgeT || time - this._edgeT > 0.6) { this.sound.play('edge'); this._edgeT = time; } break;
        case 'lap': this.sound.play('lap'); this.toast(t('lapNow'), 2); break;
        case 'finish':
          this.sound.play('finish');
          this._count('🏁');
          setTimeout(() => this.mode === 'play' && this._results(), 2200);
          break;
        default:
      }
    }
    // a rival zooming past makes a fly-by
    const me = race.progress(race.player);
    race.planes.forEach((p, k) => {
      if (k === 0) return;
      const d = race.progress(p) - me;
      const side = Math.sign(d);
      if (this.flyby[k] && side !== this.flyby[k] && Math.abs(d) < 15 && race.state === 'race') this.sound.play('flyby');
      this.flyby[k] = side;
    });
    // the first tips fade after a while
    if (race.state === 'race') {
      this.hintT -= dt;
      if (this.hintT < 0 && this.hintT > -dt * 1.5) this.hud.hint.textContent = t('rings');
      this.hud.hint.style.opacity = this.hintT > -6 ? 1 : 0;
    }
    this._sync(dt, time);
    this._hudUpdate(dt);
  }

  _hudUpdate(dt) {
    const race = this.race;
    const p = race.player;
    const hc = this._hc;
    const place = race.place;
    if (hc.place !== place) { hc.place = place; this.hud.pos.innerHTML = ''; this.hud.pos.append(num(place), h('small', {}, `/${num(race.planes.length)}`)); }
    const lap = Math.min(LAPS, p.lap + 1);
    if (hc.lap !== lap) { hc.lap = lap; this.hud.lap.textContent = `${t('lap')} ${num(lap)}/${num(LAPS)}`; }
    if (race.state !== 'done') this.hud.timer.textContent = clock(race.state === 'count' ? 0 : race.time - race.startT);
    const kmh = Math.round(p.speed * KMH);
    if (hc.kmh !== kmh) { hc.kmh = kmh; this.hud.speed.textContent = num(kmh); }
    const pct = Math.round(p.charge * 100);
    const cls = p.boost > 0 ? 'ar-boost on' : p.charge >= 0.3 ? 'ar-boost ready' : 'ar-boost';
    if (hc.pct !== pct || hc.cls !== cls) { hc.pct = pct; hc.cls = cls; this.hud.boost.style.setProperty('--p', pct); this.hud.boost.className = cls; }
    this.mapT -= dt;
    if (this.mapT <= 0) { this.mapT = 0.1; this._drawMap(); }
  }

  _drawMap() {
    const g = this.hud.mapCtx;
    const { to, pts } = this.map;
    g.clearRect(0, 0, 200, 200);
    g.save();
    g.scale(2, 2);
    g.lineWidth = 3.4;
    g.strokeStyle = 'rgba(255,255,255,.9)';
    g.beginPath();
    pts.forEach((p, i) => { const [x, y] = to(p); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
    g.closePath();
    g.stroke();
    const dot = (p, color, r) => { const [x, y] = to(this.race.track.frame(p.s).p); g.fillStyle = color; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.strokeStyle = '#1c2a4a'; g.lineWidth = 1; g.stroke(); };
    this.race.planes.forEach((p, k) => { if (k) dot(p, RIVAL_COLORS[p.id], 3.4); });
    dot(this.race.player, '#e8322a', 4.6);
    g.restore();
  }

  _sync(dt, time) {
    const race = this.race;
    const tr = race.track;
    race.planes.forEach((p, k) => {
      const m = this.planeModels[k];
      const pos = tr.pos(p.s, p.x, p.y);
      m.root.position.set(pos[0], pos[1], pos[2]);
      m.root.quaternion.setFromRotationMatrix(this._basis(tr.frame(p.s)));
      const wob = p.bump > 0 ? Math.sin(time * 28) * 0.35 : 0;
      m.body.rotation.set(Math.max(-0.5, Math.min(0.5, p.vy * 0.035)), -p.vx * 0.02, p.bank * 1.1 + wob);
      if (m.prop) { m.prop.rotation.z += dt * (20 + p.speed * 0.9); m.prop.userData.disc.material.opacity = p.speed > 5 ? 0.22 : 0.05; }
      m.flame.visible = p.boost > 0;
      if (m.flame.visible) m.flame.scale.set(1, 1, 0.8 + Math.random() * 0.5);
    });
    // rings: the next one glows; a ring just flown through pops
    const next = race.nextRing().k;
    this.ringModels.forEach((m, k) => {
      const ud = m.userData;
      const isNext = k === next && race.state !== 'done';
      ud.glow.visible = isNext || ud.flash > 0;
      ud.m.emissiveIntensity = isNext ? 0.35 + Math.sin(time * 6) * 0.15 : 0.12;
      if (ud.flash > 0) { ud.flash = Math.max(0, ud.flash - dt); m.scale.setScalar(1 + (0.45 - ud.flash) * 0.8); ud.glow.material.opacity = ud.flash; } else { m.scale.setScalar(1); ud.glow.material.opacity = 0.25; }
    });
    // dashed guide from the plane to the next ring (and on to the one after)
    const pl = race.player;
    const g1 = race.nextRing();
    const g2 = race.rings[(g1.k + 1) % race.rings.length];
    const L = race.length;
    const d1 = (g1.s - pl.s + L) % L;
    const show = race.state !== 'done';
    this.guide.forEach((d, k) => {
      const f = (k + 1) / (this.guide.length + 1);
      const along = f * (d1 + 40);
      let s;
      let x;
      let y;
      if (along < d1) { const a = along / d1; s = pl.s + along; x = pl.x + (g1.x - pl.x) * a; y = pl.y + (g1.y - pl.y) * a; } else { const a = (along - d1) / ((g2.s - g1.s + L) % L || 1); s = pl.s + along; x = g1.x + (g2.x - g1.x) * a; y = g1.y + (g2.y - g1.y) * a; }
      const pos = tr.pos(s, x, y - 1.6);
      d.position.set(pos[0], pos[1], pos[2]);
      d.quaternion.setFromRotationMatrix(this._basis(tr.frame(s)));
      d.visible = show && along > 6;
    });
    // camera: behind and above the player's plane, leaning a little into turns
    const portrait = this.cw < this.ch;
    const back = portrait ? 15 : 12.5;
    const lift = portrait ? 4.6 : 3.8;
    const want = V(tr.pos(pl.s - back, pl.x * 0.8, pl.y * 0.8 + lift));
    const look = V(tr.pos(pl.s + 16, pl.x * 0.9, pl.y * 0.9 + 0.8));
    if (this.mode === 'menu') {
      const a = time * 0.25;
      const f = tr.frame(pl.s);
      want.copy(V(tr.pos(pl.s, Math.sin(a) * 9 - 6, 9 + Math.sin(a * 0.7) * 2))).addScaledVector(V(f.t), -15 - Math.cos(a) * 4); // behind the start, never inside a parked rival
      look.copy(V(tr.pos(pl.s + 10, 0, 0)));
    }
    if (!this.cam) { this.cam = want.clone(); this.look = look.clone(); }
    this.cam.lerp(want, Math.min(1, dt * 6));
    this.look.lerp(look, Math.min(1, dt * 8));
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 1.5);
    const sh = this.shake * 0.6;
    this.camera.position.set(this.cam.x + (Math.random() - 0.5) * sh, this.cam.y + (Math.random() - 0.5) * sh, this.cam.z);
    const f = tr.frame(pl.s);
    const upv = V(f.u).applyAxisAngle(V(f.t), -pl.bank * 0.25);
    this.camUp.lerp(upv, Math.min(1, dt * 4));
    this.camera.up.copy(this.camUp);
    this.camera.lookAt(this.look);
    const fov = this.baseFov + (pl.boost > 0 ? 10 : 0) + Math.min(6, pl.speed / 20);
    if (Math.abs(this.camera.fov - fov) > 0.05) { this.camera.fov += (fov - this.camera.fov) * Math.min(1, dt * 3); this.camera.updateProjectionMatrix(); }
    // the sun stays far away in the sky behind the course
    this.sun.position.copy(this.camera.position).add(new THREE.Vector3(-0.5, 0.45, -0.6).normalize().multiplyScalar(820));
    this.sun.lookAt(this.camera.position);
    // engine sound follows the speed
    this.sound.engine(pl.speed * KMH, pl.boost > 0, true);
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (!this.race) return;
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'results') { this.race.step(dt); this._sync(dt, time); } else if (this.mode === 'menu') {
      // parked in the menu: idle engines, slow orbit
      this.race.player.speed = 0;
      this._sync(dt, time);
      this.sound.engine(120, false, true);
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

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.AirRace = api;
export default api;
