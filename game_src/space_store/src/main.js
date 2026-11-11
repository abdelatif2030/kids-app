// «متجر الفضاء الذكي» — Space Store Manager. Entry: window.SpaceStore.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A kid astronaut runs a little grocery store on a space station above an orange planet: grab hover-baskets, stock
// the entrance rack, serve astronaut and alien shoppers at the checkout, gather star coins, build a second rack,
// robot cashiers and at last the hyper checkout. No network, no links, no ads, no tracking.
import * as THREE from 'three';
import { Store, PADS, DISPENSER, RACKS, SHELVES, CHECKOUTS, SHUTTLES, BOUNDS, normalizeSave } from './sim.js';
import {
  mat, makeAstronaut, makeAlien, makeBasket, makeDispenser, makeRack, makeShelf, makeCheckout, makeRobot, makeCoin,
  makeShuttlePad, makeDeck, makePlanet, makeStars,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, CSS2, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const easeBack = (x) => { const c = 1.7; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };

/** Objects shown by count, popping in. */
class Pool {
  constructor(parent, make, n, place) {
    this.items = [];
    for (let i = 0; i < n; i++) { const o = make(i); place(o, i); o.visible = false; parent.add(o); this.items.push(o); }
  }
  show(n) {
    this.items.forEach((o, i) => {
      const v = i < n;
      if (v && !o.visible) o.userData.pop = 0;
      o.visible = v;
      if (o.userData.pop !== undefined) {
        o.userData.pop = Math.min(1, o.userData.pop + 0.12);
        o.scale.setScalar(Math.max(0.01, easeBack(o.userData.pop)));
        if (o.userData.pop >= 1) delete o.userData.pop;
      }
    });
  }
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.girl = config.gender === 'girl';
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('ss-style')) document.head.append(h('style', { id: 'ss-style', text: CSS + CSS2 }));
    this.root = h('div', { class: 'ss-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'ss-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'ss-btn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'ss-loading', style: 'background:#1a1440;color:#3ad8c8' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'ss-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.5, 600);
    this.input = { x: 0, z: 0, pointer: null, ox: 0, oy: 0, keys: new Set() };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this.store = new Store(this.save, (Date.now() & 0xffff) + 1);
    this._buildWorld();
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
    this.root.style.setProperty('--u', `${Math.min(this.cw, this.ch) / 100}px`);
    this.root.classList.toggle('ss-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 56 : 42;
    this.camera.updateProjectionMatrix();
  }

  // ---- the station ---------------------------------------------------------------------------------------------------

  _buildWorld() {
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0x1a1440);
    s.add(new THREE.HemisphereLight(0xf0eaff, 0x3a2a8a, 1.9));
    const sun = new THREE.DirectionalLight(0xfff0e0, 1.3);
    sun.position.set(-8, 20, 10);
    s.add(sun);
    s.add(makeStars(this.quality.low ? 300 : 700));
    const planet = makePlanet();
    planet.position.set(4, -34, 26);
    s.add(planet);
    this.planet = planet;
    s.add(makeDeck(BOUNDS));
    const disp = makeDispenser();
    disp.position.set(DISPENSER.x, 0, DISPENSER.z);
    s.add(disp);
    this.dispBaskets = new Pool(s, () => makeBasket(0.9), DISPENSER.cap, (b, i) => b.position.set(DISPENSER.x - 0.5 + (i % 2) * 1.0, 0.15 + Math.floor(i / 2) * 0.32, DISPENSER.z));
    this.rackModels = RACKS.map((r) => {
      const g = new THREE.Group();
      const rack = makeRack();
      g.add(rack);
      g.position.set(r.x, 0, r.z);
      s.add(g);
      const pool = new Pool(g, () => makeBasket(0.55), r.cap, (b, i) => b.position.set(-0.55 + (i % 4) * 0.37, 0.24 + Math.floor(i / 4) * 0.55, 0));
      return { g, pool, id: r.id };
    });
    this.shelfModels = SHELVES.map((sh) => { const m = makeShelf(); m.position.set(sh.x, 0, sh.z); s.add(m); return { m, sh }; });
    this.checkoutModels = CHECKOUTS.map((c) => {
      const g = new THREE.Group();
      g.add(makeCheckout(c.id === 'hyper'));
      g.position.set(c.x, 0, c.z);
      s.add(g);
      let robot = null;
      if (c.robot) { robot = makeRobot(); robot.position.set(c.till.x, 0, c.till.z); robot.rotation.y = -Math.PI / 2; s.add(robot); }
      const coins = new Pool(s, () => makeCoin(), 24, (o, i) => o.position.set(c.coins.x - 0.5 + (i % 3) * 0.48, 0.02 + Math.floor(i / 6) * 0.07, c.coins.z - 0.2 + (Math.floor(i / 3) % 2) * 0.45));
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 28), new THREE.MeshBasicMaterial({ color: 0xffc83a, transparent: true, opacity: 0.7 }));
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(c.coins.x, 0.03, c.coins.z);
      s.add(ring);
      let till = null;
      if (!c.robot) { till = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 28), new THREE.MeshBasicMaterial({ color: 0x3ad8c8, transparent: true, opacity: 0.8 })); till.rotation.x = -Math.PI / 2; till.position.set(c.till.x, 0.03, c.till.z); s.add(till); }
      return { g, robot, coins, ring, till, c };
    });
    this.shuttles = SHUTTLES.map((sh) => { const m = makeShuttlePad(); m.position.set(sh.x, 0, sh.z); s.add(m); return { m, sh, land: 0 }; });
    // the child
    this.hero = makeAstronaut(0xf2f6fa, this.girl ? 0xff6aa8 : 0x3ad8c8, 0xf0c09a, this.girl ? 0x6a3a1a : 0x3a2414);
    if (this.girl) this.hero.head.add(new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat(0x6a3a1a)).translateY(-0.05).translateZ(-0.32));
    s.add(this.hero.root);
    this.heroStack = new Pool(this.hero.back, () => makeBasket(0.7), 10, (b, i) => b.position.set(0, -0.1 + i * 0.25, 0.1));
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.6, 28), new THREE.MeshBasicMaterial({ color: 0xffc83a, transparent: true, opacity: 0.9 }));
    this.ring.rotation.x = -Math.PI / 2;
    s.add(this.ring);
    this.arrow = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.9, 4), mat(0xffc83a, 0xff9a00, 0.7));
    this.arrow.rotation.x = Math.PI;
    s.add(this.arrow);
    this.padModels = new Map();
    for (const p of PADS) {
      const g = new THREE.Group();
      const disc = new THREE.Mesh(new THREE.CircleGeometry(0.85, 32), new THREE.MeshBasicMaterial({ color: 0x3a2a9a, transparent: true, opacity: 0.85 }));
      disc.rotation.x = -Math.PI / 2;
      disc.position.y = 0.03;
      g.add(disc);
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 0.98, 32), new THREE.MeshBasicMaterial({ color: 0x3ad8c8 }));
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.04;
      g.add(ring);
      const prog = new THREE.Mesh(new THREE.RingGeometry(0.82, 0.98, 32, 1, Math.PI / 2, 0.001), new THREE.MeshBasicMaterial({ color: 0xffc83a }));
      prog.rotation.x = -Math.PI / 2;
      prog.position.y = 0.05;
      g.add(prog);
      g.position.set(p.x, 0, p.z);
      g.visible = false;
      s.add(g);
      this.padModels.set(p.id, { g, prog, ring, f: -1 });
    }
    this.shopperModels = new Map();
    this.sparks = this._sparks(s);
    this.syncUnlocked(true);
  }

  _sparks(scene) {
    const n = 200;
    const pos = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe080, size: 0.25, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    pts.frustumCulled = false;
    scene.add(pts);
    for (let k = 0; k < n; k++) pos[k * 3 + 1] = -50;
    return { pos, vel: new Float32Array(n * 3), life: new Float32Array(n), g, i: 0, n };
  }

  _burst(x, y, z, n = 30) {
    const s = this.sparks;
    for (let k = 0; k < n; k++) {
      const i = s.i++ % s.n;
      const a = Math.random() * Math.PI * 2;
      s.pos.set([x, y, z], i * 3);
      s.vel.set([Math.cos(a) * 3 * Math.random(), 2 + Math.random() * 4, Math.sin(a) * 3 * Math.random()], i * 3);
      s.life[i] = 0.9;
    }
  }

  syncUnlocked(quiet = false) {
    const st = this.store;
    for (const r of this.rackModels) this._show(r.g, st.open(RACKS.find((x) => x.id === r.id)), quiet);
    for (const sm of this.shelfModels) this._show(sm.m, st.open(sm.sh), quiet);
    for (const cm of this.checkoutModels) { const on = st.open(cm.c); this._show(cm.g, on, quiet); if (cm.robot) this._show(cm.robot, on, quiet); cm.ring.visible = on; }
    for (const sh of this.shuttles) this._show(sh.m, st.open(sh.sh), quiet);
  }

  _show(o, on, quiet) {
    if (o.visible === on && o.userData.inited) return;
    o.userData.inited = true;
    o.visible = on;
    if (on && !quiet) { o.scale.setScalar(0.01); o.userData.grow = 0; }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'ss-joy' }, h('i'));
    root.append(this.joy);
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused || this.input.pointer !== null) return;
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX;
      this.input.oy = e.clientY;
      const r = root.getBoundingClientRect();
      this.joy.style.left = `${e.clientX - r.left}px`;
      this.joy.style.top = `${e.clientY - r.top}px`;
      this.joy.style.display = 'block';
      this.joy.firstChild.style.transform = 'translate(0,0)';
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      const unit = Math.min(this.cw, this.ch) / 100;
      const max = unit * 12;
      let dx = e.clientX - this.input.ox;
      let dy = e.clientY - this.input.oy;
      const l = Math.hypot(dx, dy);
      if (l > max) { dx = (dx / l) * max; dy = (dy / l) * max; }
      this.input.x = dx / max;
      this.input.z = dy / max;
      this.joy.firstChild.style.transform = `translate(${dx}px,${dy}px)`;
    });
    const up = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      this.input.x = 0;
      this.input.z = 0;
      this.joy.style.display = 'none';
    };
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
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this._saveNow(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'ss-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
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

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _coins() {
    this.coinEl = h('span', {}, num(this.save.coins));
    return h('div', { class: 'ss-pill' }, '⭐ ', this.coinEl);
  }
  _mute(style) {
    const b = h('button', { class: 'ss-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() { this.toastEl = h('div', { class: 'ss-toast' }); return this.toastEl; }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _topLeft() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)'; }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    this.layer.append(
      h('button', { class: 'ss-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'ss-top' }, this._coins()),
      h('div', { class: 'ss-dim', style: 'background:rgba(16,8,58,.35)' },
        h('div', { class: 'ss-panel' },
          h('div', { style: 'font-size:calc(var(--u)*14)' }, '🪐'),
          h('div', { class: 'ss-logo' }, t('title')),
          h('div', { style: 'font-weight:700;font-size:calc(var(--u)*4);opacity:.9' }, t('sub')),
          this.save.served ? h('div', { class: 'ss-stat' }, h('span', {}, '😊 ', num(this.save.served), ' ', t('served'))) : null,
          h('button', { class: 'ss-btn ss-big', onclick: () => this.play() }, t('play')))),
      this._mute(`bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
  }

  play() {
    this.mode = 'play';
    this.paused = false;
    this.sound.setMode('play');
    this._clear();
    this.hud = { obj: h('div', { class: 'ss-obj' }, h('i'), h('span', {}, '')), max: h('div', { class: 'ss-bubble', style: 'display:none;color:#2a1e6a' }, 'MAX') };
    this.padLbls = new Map();
    for (const p of PADS) {
      const lbl = h('div', { class: 'ss-padlbl', style: 'display:none' }, h('span', { class: 'ic' }, p.icon), h('span', { class: 'c' }, '⭐ ', h('b', {}, '')), h('span', { class: 'n' }, name(p)));
      this.padLbls.set(p.id, lbl);
      this.layer.append(lbl);
    }
    this.layer.append(
      h('button', { class: 'ss-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'ss-top', style: 'inset-inline-start:auto;inset-inline-end:calc(var(--u)*3)' }, this._coins()),
      this.hud.obj,
      this.hud.max,
      this._mute('top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*16)'),
      this._toastEl(),
    );
    this._hc = {};
    if (!this.save.served) setTimeout(() => this.mode === 'play' && this.toast(t('drag'), 3), 500);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.x = this.input.z = 0;
    this.joy.style.display = 'none';
    this._saveNow();
    this.sound.suspend();
    const dim = h('div', { class: 'ss-dim' }, h('div', { class: 'ss-panel' },
      h('div', { class: 'ss-title' }, t('paused')),
      h('button', { class: 'ss-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'ss-btn wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _complete() {
    this.sound.play('complete');
    this._burst(this.store.p.x, 2, this.store.p.z, 120);
    const dim = h('div', { class: 'ss-dim' }, h('div', { class: 'ss-panel' },
      h('div', { class: 'ss-title' }, t('done')),
      h('div', { class: 'ss-stars' }, '⭐⭐⭐'),
      h('div', { class: 'ss-stat' }, h('span', {}, '😊 ', num(this.save.served), ' ', t('served'))),
      h('button', { class: 'ss-btn', onclick: () => { dim.remove(); this.paused = false; } }, '▶ ', t('keep'))));
    this.paused = true;
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const st = this.store;
    const events = st.step(dt, this._readInput());
    for (const e of events) {
      switch (e.type) {
        case 'pick': this.sound.play('pick', e.n); break;
        case 'full': this.sound.play('full'); this.toast(t('full'), 1); break;
        case 'rack': this.sound.play('rack'); break;
        case 'arrive': if (Math.random() < 0.6) this.sound.play('arrive'); { const sh = this.shuttles.find((x) => Math.abs(x.sh.x - e.x) < 0.1); if (sh) sh.land = 1; } break;
        case 'sold': {
          this.sound.play(e.by === 'robot' && dist(st.p, e) > 6 ? 'beep' : 'sold');
          this._burst(e.x, 1.4, e.z, 10);
          break;
        }
        case 'collect': this.sound.play('coin', (this._run = (this._run ?? 0) + 1)); this._dirty = true; break;
        case 'pay': this.sound.play('pay', e.paid / e.cost); this._dirty = true; break;
        case 'unlock': {
          const pad = PADS.find((p) => p.id === e.pad);
          this.sound.play(e.pad.startsWith('robot') ? 'robot' : 'unlock');
          if (e.pad.startsWith('robot')) setTimeout(() => this.sound.play('unlock'), 350);
          this.syncUnlocked();
          this._burst(pad.x, 1, pad.z, 50);
          this.toast(`✨ ${t('opened')}: ${name(pad)} ${pad.icon}`, 2.4);
          this._saveNow();
          break;
        }
        case 'complete': setTimeout(() => this._complete(), 1200); break;
        default:
      }
    }
    if (!events.some((e) => e.type === 'collect')) this._run = 0;
    // a quiet scanner beep while the child serves at the till
    const main = st.checkouts[0];
    if (main.busy && main.t > 0 && main.t < dt * 1.5) this.sound.play('beep');
    if (this._dirty && (!this._lastSave || time - this._lastSave > 8)) { this._lastSave = time; this._dirty = false; this._saveNow(); }
    this._sync(dt, time);
    // camera: above and a little behind, following
    const portrait = this.cw < this.ch;
    const px = Math.max(-4, Math.min(4, st.p.x));
    const pz = Math.max(-5, Math.min(5, st.p.z));
    const want = new THREE.Vector3(px + 1.5, portrait ? 13.5 : 10.5, pz + (portrait ? 10 : 8));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 3));
    this.camera.position.copy(this.cam);
    this.camera.lookAt(this.cam.x - 1.5, 0, this.cam.z - (portrait ? 10 : 8) - 1);
    this._guide(time);
    this._labels();
  }

  _sync(dt, time) {
    const st = this.store;
    const p = st.p;
    this.dispBaskets.show(st.dispenser);
    this.dispBaskets.items.forEach((b, i) => { b.position.y = 0.15 + Math.floor(i / 2) * 0.32 + Math.sin(time * 3 + i) * 0.04; });
    st.racks.forEach((r, k) => this.rackModels[k].pool.show(r.n));
    st.checkouts.forEach((c, k) => {
      const cm = this.checkoutModels[k];
      cm.coins.show(Math.min(24, Math.ceil(c.cash / 2)));
      if (cm.robot && cm.robot.visible) { cm.robot.position.y = Math.abs(Math.sin(time * (c.busy ? 10 : 2))) * 0.08; cm.robot.userData.light.material.emissiveIntensity = c.busy ? 1 : 0.2; }
    });
    for (const o of [...this.rackModels.map((r) => r.g), ...this.shelfModels.map((s) => s.m), ...this.checkoutModels.flatMap((c) => [c.g, c.robot].filter(Boolean)), ...this.shuttles.map((s) => s.m)]) {
      if (o.userData.grow !== undefined) { o.userData.grow = Math.min(1, o.userData.grow + dt * 2); o.scale.setScalar(Math.max(0.01, easeBack(o.userData.grow))); if (o.userData.grow >= 1) delete o.userData.grow; }
    }
    for (const sh of this.shuttles) {
      sh.land = Math.max(0, sh.land - dt * 0.8);
      sh.m.userData.shuttle.position.y = 0.6 + sh.land * sh.land * 8;
      sh.m.userData.shuttle.rotation.y = time * 0.3;
    }
    // the child
    const hm = this.hero;
    hm.root.position.set(p.x, 0, p.z);
    let d = p.heading - hm.root.rotation.y;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    hm.root.rotation.y += d * Math.min(1, dt * 12);
    const sw = Math.sin(time * 13) * 0.6 * p.moving;
    hm.legs[0].rotation.x = sw;
    hm.legs[1].rotation.x = -sw;
    hm.arms.forEach((a) => { a.rotation.x = p.stack > 0 ? -1.3 : -sw * 0.8; });
    hm.body.position.y = Math.abs(Math.sin(time * 13)) * 0.05 * p.moving;
    this.heroStack.show(p.stack);
    this.ring.position.set(p.x, 0.03, p.z);
    // shoppers
    const seen = new Set();
    for (const s of st.shoppers) {
      seen.add(s.id);
      let m = this.shopperModels.get(s.id);
      if (!m) {
        m = s.kind.startsWith('astro') ? makeAstronaut(s.kind === 'astro' ? 0xffd8a8 : 0xd8e8ff, [0xff6a6a, 0x6a8aff, 0xffc83a, 0x8ae86a][s.id % 4], [0xf0c09a, 0xc8905a, 0x8a5a3a][s.id % 3], [0x2a1a10, 0xe8c070, 0x1a1010][s.id % 3], false) : makeAlien(s.kind);
        m.basket = makeBasket(0.6);
        m.basket.position.set(0, 0, 0.05);
        m.fruit = [];
        for (let i = 0; i < 4; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), mat([0xff4a4a, 0xffa020, 0x7ae05a, 0xffe04a][i])); f.position.set(-0.15 + i * 0.1, 0.25, 0); f.visible = false; m.basket.add(f); m.fruit.push(f); }
        m.back.add(m.basket);
        m.root.scale.setScalar(0.9);
        m.bubble = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), mat(0xffffff));
        m.bubble.position.y = 2;
        m.root.add(m.bubble);
        this.scene.add(m.root);
        this.shopperModels.set(s.id, m);
      }
      m.root.position.set(s.x, 0, s.z);
      let dd = s.heading - m.root.rotation.y;
      while (dd > Math.PI) dd -= Math.PI * 2;
      while (dd < -Math.PI) dd += Math.PI * 2;
      m.root.rotation.y += dd * Math.min(1, dt * 10);
      const ss = Math.sin(time * 12 + s.id) * 0.5 * s.moving;
      m.legs.forEach((l, i) => { if (l.rotation) l.rotation.x = i % 2 ? -ss : ss; });
      m.basket.visible = s.basket;
      m.fruit.forEach((f, i) => { f.visible = i < s.goods; });
      m.bubble.visible = !!s.waiting;
      m.body.position.y = s.happy > 0 ? Math.abs(Math.sin(time * 10)) * 0.25 : 0;
    }
    for (const [id, m] of this.shopperModels) if (!seen.has(id)) { this.scene.remove(m.root); this.shopperModels.delete(id); }
    // pads
    const shown = new Set(st.pads.map((x) => x.id));
    for (const [id, pm] of this.padModels) {
      const on = shown.has(id);
      pm.g.visible = on;
      if (!on) continue;
      const pad = PADS.find((x) => x.id === id);
      const f = (this.save.paid[id] ?? 0) / pad.cost;
      if (pm.f !== f) { pm.f = f; pm.prog.geometry.dispose(); pm.prog.geometry = new THREE.RingGeometry(0.8, 1.0, 32, 1, Math.PI / 2, Math.max(0.001, f * Math.PI * 2)); }
      pm.ring.scale.setScalar(1 + Math.sin(time * 4) * 0.04);
    }
    // sparks
    const s = this.sparks;
    for (let k = 0; k < s.n; k++) {
      if (s.life[k] <= 0) continue;
      s.life[k] -= dt;
      s.vel[k * 3 + 1] -= 8 * dt;
      for (let a = 0; a < 3; a++) s.pos[k * 3 + a] += s.vel[k * 3 + a] * dt;
      if (s.life[k] <= 0) s.pos[k * 3 + 1] = -50;
    }
    s.g.attributes.position.needsUpdate = true;
    this.planet.rotation.y += dt * 0.02;
  }

  /** The yellow arrow and the objective banner: what to do next (always shown, as in the video). */
  _guide(time) {
    const st = this.store;
    const p = st.p;
    const main = st.checkouts[0];
    const rack = st.racks.filter((r) => st.open(r)).sort((a, b) => a.n - b.n)[0];
    const pad = st.pads.find((pd) => this.save.coins >= Math.min(10, pd.cost - (this.save.paid[pd.id] ?? 0)));
    const cash = st.checkouts.filter((c) => c.cash >= 3).sort((a, b) => b.cash - a.cash)[0];
    const waiting = st._queue(main).some((s) => s.front) && !st.has('hyper');
    let target;
    let obj;
    if (p.stack > 0) { target = { x: rack.x, z: rack.z + 0.9 }; obj = t('oStock'); } else if (pad) { target = pad; obj = `${t('oBuild')} ${name(pad)}`; } else if (waiting && rack.n > 1) { target = main.till; obj = t('oServe'); } else if (cash) { target = cash.coins; obj = t('oCoins'); } else if (rack.n < 6) { target = DISPENSER; obj = t('oGrab'); } else { target = main.till; obj = t('oServe'); }
    const show = dist(target, p) > 1.1;
    this.arrow.visible = show;
    if (show) { this.arrow.position.set(target.x, 2.2 + Math.abs(Math.sin(time * 4)) * 0.5, target.z); this.arrow.rotation.y = time * 2; }
    if (this._hc.obj !== obj) { this._hc.obj = obj; this.hud.obj.lastChild.textContent = obj; }
  }

  _screen(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return [(v.x * 0.5 + 0.5) * this.cw, (-v.y * 0.5 + 0.5) * this.ch, v.z < 1];
  }

  _labels() {
    const st = this.store;
    const hc = this._hc;
    if (this.coinEl && hc.coins !== this.save.coins) { hc.coins = this.save.coins; this.coinEl.textContent = num(this.save.coins); }
    const shown = new Set(st.pads.map((x) => x.id));
    for (const [id, lbl] of this.padLbls) {
      if (!shown.has(id)) { lbl.style.display = 'none'; continue; }
      const pad = PADS.find((x) => x.id === id);
      const [sx, sy, ok] = this._screen(pad.x, 0.2, pad.z);
      lbl.style.display = ok ? 'flex' : 'none';
      lbl.style.left = `${sx}px`;
      lbl.style.top = `${sy}px`;
      const left = pad.cost - (this.save.paid[id] ?? 0);
      if (lbl.dataset.left !== String(left)) { lbl.dataset.left = String(left); lbl.querySelector('b').textContent = num(left); }
    }
    const full = st.p.stack >= st.capacity;
    this.hud.max.style.display = full ? 'block' : 'none';
    if (full) { const [sx, sy] = this._screen(st.p.x, 1.6 + st.capacity * 0.25, st.p.z); this.hud.max.style.left = `${sx}px`; this.hud.max.style.top = `${sy}px`; }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else {
      if (this.mode === 'menu') {
        // the shoppers keep coming while the menu shows; the camera drifts round
        this.store.step(dt, { x: 0, z: 0 });
        const a = time * 0.08;
        this.camera.position.set(Math.sin(a) * 6 + 2, 15, 13 + Math.cos(a) * 3);
        this.camera.lookAt(0, 0, 0);
        this.cam = null;
      }
      this._sync(dt, time);
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
    if (this.save) this._saveNow();
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
window.SpaceStore = api;
export default api;
