// «مغامرة الذيل الذهبي» — Golden Tail Chase. Entry: window.GoldenTail.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A plush dinosaur chases the animal wearing the golden tail through a treetop playground (decks, rope bridges,
// slides, bouncy mushrooms), grabs it and keeps it until the clock reaches zero. No network, no links, no ads, no
// tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { Chase } from './sim.js';
import { LEVELS, RIVALS, PLATFORMS, STRIPS, MUSHROOMS, GROUND_R, normalizeSave } from './data.js';
import { mat, cone, makeDino, makeAnimal, makeGoldenTail, makeDeck, makeStrip, makeMushroom, makeTree, makeBush } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
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
const FACE = { dino: '🦖', raccoon: '🦝', bear: '🐻', fox: '🦊', bunny: '🐰', cat: '🐱' };

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

class Sparkles {
  constructor(scene, n) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color: 0xffe066, size: 0.28, map: dotTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -50;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 30, power = 5) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = power * (0.4 + Math.random() * 0.6);
      this.emit(x, y, z, Math.cos(a) * s, 2 + Math.random() * power, Math.sin(a) * s, 0.9);
    }
  }
  update(dt) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] -= 7 * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -50;
    }
    this.g.attributes.position.needsUpdate = true;
  }
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
    if (!document.getElementById('gt-style')) document.head.append(h('style', { id: 'gt-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'gt-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'gt-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'gt-btn2', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'gt-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'gt-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.3, 160);
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
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.root.classList.toggle('gt-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 62 : 50;
    this.camera.updateProjectionMatrix();
  }

  // ---- the playground -----------------------------------------------------------------------------------------------

  _buildWorld() {
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0x9fd8ff);
    s.fog = new THREE.Fog(0xbfe6ff, 30, 70);
    s.add(new THREE.HemisphereLight(0xfffbe8, 0x4a7a3a, 1.9));
    const sun = new THREE.DirectionalLight(0xfff2d0, 1.5);
    sun.position.set(-10, 25, 12);
    s.add(sun);
    const grass = new THREE.Mesh(new THREE.CircleGeometry(GROUND_R + 30, 48), mat(0x7cc456));
    grass.rotation.x = -Math.PI / 2;
    s.add(grass);
    // soft dirt paths
    for (const [x, z, r] of [[0, 6, 3.6], [-6, -9, 3], [8, 1, 3.2], [-12, 1, 2.6], [12, -14, 2.4], [-14, -14, 2.6]]) {
      const d = new THREE.Mesh(new THREE.CircleGeometry(r, 24), mat(0xc8b078));
      d.rotation.x = -Math.PI / 2;
      d.position.set(x, 0.01, z);
      s.add(d);
    }
    for (const p of PLATFORMS) s.add(makeDeck(p, false));
    for (const st of STRIPS) s.add(makeStrip(st));
    this.mushrooms = MUSHROOMS.map((m) => {
      const mm = makeMushroom();
      mm.root.position.set(m.x, 0, m.z);
      s.add(mm.root);
      return mm;
    });
    // forest around the playground
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const r = GROUND_R + 1.5 + (i % 3) * 2.2;
      const tr = makeTree(1 + (i % 4) * 0.18);
      tr.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      s.add(tr);
    }
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + 0.2;
      const b = makeBush(0.8 + (i % 3) * 0.3);
      b.position.set(Math.cos(a) * (GROUND_R - 1.5), 0, Math.sin(a) * (GROUND_R - 1.5));
      s.add(b);
    }
    this.dino = makeDino();
    s.add(this.dino.root);
    this.tail = makeGoldenTail();
    s.add(this.tail.root);
    // a golden arrow bouncing over whoever wears the tail
    this.marker = cone(0.28, 0.55, mat(0xffd23a, 0xffa000, 0.7), 0, 0, 0, 4);
    this.marker.rotation.x = Math.PI;
    s.add(this.marker);
    // a ring under the dino
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.7, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthWrite: false }));
    this.ring.rotation.x = -Math.PI / 2;
    s.add(this.ring);
    // dizzy stars for whoever just lost the tail
    this.dizzy = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const st = cone(0.09, 0.18, mat(0xffe066, 0xffc000, 0.7), Math.cos((i / 3) * Math.PI * 2) * 0.35, 0, Math.sin((i / 3) * Math.PI * 2) * 0.35, 5);
      this.dizzy.add(st);
    }
    this.dizzy.visible = false;
    s.add(this.dizzy);
    this.sparkles = new Sparkles(s, 260);
    this.animals = [];
  }

  _setRivals(n) {
    for (const a of this.animals) this.scene.remove(a.root);
    this.animals = [];
    for (let i = 0; i < n; i++) {
      const a = makeAnimal(RIVALS[i].kind);
      this.scene.add(a.root);
      this.animals.push(a);
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'gt-joy' }, h('i'));
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
      const max = this.u * 12;
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
      this._joyHome();
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.gt-btn')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
        if (this.mode === 'play' && k === ' ' && !e.repeat) { this.chase && this.chase.jump(); e.preventDefault(); }
        if (this.mode === 'play' && (k === 'e' || k === 'enter' || k === 'shift') && !e.repeat) { this.chase && this.chase.grab(); e.preventDefault(); }
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'gt-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  /** The joystick waits in the bottom corner (as in the video) until a finger moves it. */
  _joyHome() {
    if (!this.joy) return;
    const show = this.mode === 'play';
    this.joy.style.display = show ? 'block' : 'none';
    this.joy.style.left = `${getLang() === 'en' ? this.u * 18 : this.cw - this.u * 18}px`;
    this.joy.style.top = `${this.ch - this.u * 18}px`;
    this.joy.firstChild.style.transform = 'translate(0,0)';
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
  _mute(style) {
    const b = h('button', { class: 'gt-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
    this.toastEl = h('div', { class: 'gt-toast' });
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
  _topEnd() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*3)'; }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.chase = null;
    if (this.joy) this.joy.style.display = 'none';
    this.sound.setMode('menu');
    this._setRivals(5);
    this._clear();
    const nodes = LEVELS.map((lv, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[lv.id] ?? 0;
      return h('button', {
        class: `gt-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('level')} ${lv.id} ${name(lv)}`,
        title: name(lv),
        onclick: () => {
          if (locked) { this.sound.play('no'); this.toast(t('locked')); return; }
          this.startLevel(i);
        },
      }, locked ? '🔒' : num(lv.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    this.layer.append(
      h('button', { class: 'gt-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'gt-dim', style: 'background:none' },
        h('div', { class: 'gt-panel' },
          h('div', { class: 'gt-logo' }, '🦖 ', t('title'), ' ✨'),
          h('div', { class: 'gt-map', style: 'margin-bottom:calc(var(--u)*4)' }, nodes),
          h('button', { class: 'gt-btn2 gt-big', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1) }, '▶ ', t('play')))),
      this._mute(`bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
  }

  startLevel(i) {
    this.levelIndex = i;
    this.chase = new Chase({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this._setRivals(this.chase.rivals.length);
    this.mode = 'play';
    this.paused = false;
    this.sound.setMode('play');
    this.sound.setTension(0);
    this.cam = null;
    this._hud();
    this._lastHolder = this.chase.holder;
    this._joyHome();
  }

  _hud() {
    this._clear();
    const lv = LEVELS[this.levelIndex];
    this.hud = {
      timer: h('div', { class: 'gt-timer' }, ''),
      holder: h('div', { class: 'gt-holder' }, h('span', { class: 'f' }, ''), h('span', {}, '')),
      you: h('div', { class: 'gt-you' }, t('you'), h('br'), '▼'),
      pointer: h('div', { class: 'gt-pointer' }, '✨', h('small', {}, '')),
      count: h('div', { class: 'gt-count' }, h('div', { class: 'n' }, num(3)), h('div', { class: 'r' }, t('ready')), h('div', { class: 's' }, `${t('level')} ${num(lv.id)} · ${name(lv)}`), h('div', { class: 's' }, t('goal'))),
      banner: h('div', { class: 'gt-banner' }),
      grab: h('button', { class: 'gt-btn gt-grab', 'aria-label': t('grab'), style: 'bottom:max(calc(var(--u)*20),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*4)' }, h('b', {}, '✋'), h('span', {}, t('grab'))),
      jump: h('button', { class: 'gt-btn gt-jump', 'aria-label': t('jump'), style: 'bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*6)' }, h('b', {}, '⬆'), h('span', {}, t('jump'))),
    };
    // the buttons act on the press, so a quick tap never misses
    for (const [b, fn] of [[this.hud.grab, () => this.chase && this.chase.grab()], [this.hud.jump, () => this.chase && this.chase.jump()]]) {
      b.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); fn(); });
    }
    this.layer.append(
      h('button', { class: 'gt-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      this._mute(this._topEnd()),
      this.hud.timer,
      this.hud.holder,
      this.hud.you,
      this.hud.pointer,
      this.hud.banner,
      this.hud.grab,
      this.hud.jump,
      this.hud.count,
      this._toastEl(),
    );
    this._hc = {};
  }

  _banner(text, secs = 1.4) {
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
    const dim = h('div', { class: 'gt-dim' }, h('div', { class: 'gt-panel' },
      h('div', { class: 'gt-title' }, t('paused')),
      h('button', { class: 'gt-btn2', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'gt-btn2 wood', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'gt-btn2 wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const c = this.chase;
    const r = c.result;
    const i = this.levelIndex;
    this.mode = 'results';
    this.sound.setMode('menu');
    this.sound.setTension(0);
    if (r.win) {
      const id = LEVELS[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
      if (i + 2 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = i + 2;
      this._saveNow();
      this.sound.play('win');
      this.sparkles.burst(c.player.x, c.player.y + 1.5, c.player.z, 80, 7);
    } else this.sound.play('lose');
    const hasNext = r.win && i + 1 < LEVELS.length;
    const dim = h('div', { class: 'gt-dim' }, h('div', { class: 'gt-panel' },
      h('div', { class: 'gt-title' }, r.win ? t('win') : t('lose')),
      r.win ? h('div', { class: 'gt-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'gt-stat' }, h('span', {}, '✨ ', t('held'), ' ', num(Math.round(r.held)), t('sec')), h('span', {}, '✋ ', t('grabs'), ' ', num(r.grabs))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'gt-btn2', onclick: () => this.startLevel(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: r.win ? 'gt-btn2 wood' : 'gt-btn2', onclick: () => this.startLevel(i) }, '↻ ', t('again')),
        h('button', { class: 'gt-btn2 wood', onclick: () => this.showMenu() }, t('menu')))));
    this.hud.grab.remove();
    this.hud.jump.remove();
    this.joy.style.display = 'none';
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const c = this.chase;
    const events = c.step(dt, this._readInput());
    for (const e of events) {
      switch (e.type) {
        case 'count': this.sound.play('count'); this.hud.count.querySelector('.n').textContent = num(e.n); break;
        case 'go':
          this.sound.play('go');
          this.hud.count.remove();
          this._banner(t('go'), 0.8);
          setTimeout(() => this.mode === 'play' && this.toast(t('hint'), 2.6), 900);
          break;
        case 'tick': this.sound.play('tick', e.n); break;
        case 'jump': this.sound.play('jump'); break;
        case 'land': if (e.who === 0) this.sound.play('land', e.hard); break;
        case 'bounce': {
          if (e.who === 0 || Math.hypot(e.x - c.player.x, e.z - c.player.z) < 10) this.sound.play('bounce');
          const m = this.mushrooms[MUSHROOMS.findIndex((mm) => mm.x === e.x && mm.z === e.z)];
          if (m) m.squash = 1;
          break;
        }
        case 'whiff': this.sound.play('whiff'); break;
        case 'fell':
          this.sound.play('stolen');
          this.toast(t('fell'), 1.8);
          this.sparkles.burst(c.player.x, c.player.y + 1, c.player.z, 30, 4);
          this.cam = null;
          break;
        case 'steal':
          this.sparkles.burst(e.x, e.y + 1, e.z, e.by === 0 ? 40 : 18, e.by === 0 ? 6 : 4);
          if (e.by === 0) { this.sound.play('grab'); this._banner(t('got')); } else if (e.from === 0) { this.sound.play('stolen'); this.toast(t('lost'), 1.6); } else this.sound.play('rivalGrab');
          break;
        case 'over':
          this.sound.play(e.win ? 'win' : 'lose');
          setTimeout(() => this.mode === 'play' && this._results(), 900);
          break;
        default:
      }
    }
    const p = c.player;
    if (p.sliding && !this._wasSliding) this.sound.play('slide');
    this._wasSliding = p.sliding;
    if (p.grounded && p.moving > 0.3 && c.state === 'play') {
      this._stepT = (this._stepT ?? 0) - dt;
      if (this._stepT <= 0) { this._stepT = 0.26; this.sound.play('step', p.y < 0.1); }
    }
    this.sound.setTension(c.timeLeft <= 10 && c.state === 'play' ? 1 : 0);
    this._sync(dt, time);
  }

  _pose(m, e, dt, time, isDino) {
    m.root.position.set(e.x, e.y, e.z);
    let d = e.face - m.root.rotation.y;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    m.root.rotation.y += d * Math.min(1, dt * 12);
    const run = e.grounded ? e.moving : 0;
    const sw = Math.sin(time * 15 + e.id) * 0.8 * run;
    m.legs[0].rotation.x = e.grounded ? sw : -0.6;
    m.legs[1].rotation.x = e.grounded ? -sw : 0.4;
    if (m.arms[0]) { m.arms[0].rotation.x = e.grounded ? -sw * 0.8 : -2.2; m.arms[1].rotation.x = e.grounded ? sw * 0.8 : -2.2; }
    m.body.position.y = e.grounded ? Math.abs(Math.sin(time * 15 + e.id)) * 0.08 * run : 0;
    // squash and stretch in the air, a lean on slides, a wobble when dizzy
    const air = !e.grounded ? Math.max(-1, Math.min(1, e.vy / 10)) : 0;
    m.body.scale.set(1 - air * 0.08, 1 + air * 0.12, 1 - air * 0.08);
    m.body.rotation.x = e.sliding ? -0.5 : 0;
    m.body.rotation.z = e.stun > 0 ? Math.sin(time * 18) * 0.2 : 0;
    if (isDino && m.tail) m.tail.rotation.y = Math.sin(time * 8) * 0.3 * (0.4 + run);
  }

  _sync(dt, time) {
    const c = this.chase;
    const p = c.player;
    this._pose(this.dino, p, dt, time, true);
    c.rivals.forEach((r, i) => this._pose(this.animals[i], r, dt, time, false));
    const holderModel = c.holder === p ? this.dino : this.animals[c.rivals.indexOf(c.holder)];
    // the golden tail hangs from the holder's back and wags
    const h = c.holder;
    if (this._lastHolder !== h) { this._lastHolder = h; this.tailPop = 0; }
    holderModel.back.updateWorldMatrix(true, false);
    const wp = new THREE.Vector3();
    holderModel.back.getWorldPosition(wp);
    this.tail.root.position.copy(wp);
    this.tail.root.rotation.y = holderModel.root.rotation.y;
    this.tailPop = Math.min(1, (this.tailPop ?? 1) + dt * 4);
    this.tail.root.scale.setScalar(1.45 * (0.4 + 0.6 * this.tailPop));
    this.tail.parts.forEach((s, i) => { s.position.x = Math.sin(time * 9 - i * 0.6) * 0.06 * i; });
    if (Math.random() < dt * 14) this.sparkles.emit(wp.x + (Math.random() - 0.5) * 0.5, wp.y, wp.z + (Math.random() - 0.5) * 0.5, 0, 0.6, 0, 0.6);
    this.marker.position.set(h.x, h.y + 2.35 + Math.abs(Math.sin(time * 5)) * 0.25, h.z);
    this.marker.rotation.y = time * 3;
    this.marker.visible = h !== p;
    this.ring.position.set(p.x, p.y + 0.04, p.z);
    this.ring.material.color.set(h === p ? 0xffd23a : 0xffffff);
    const dizzyOne = c.all.find((e) => e.stun > 0);
    this.dizzy.visible = !!dizzyOne;
    if (dizzyOne) { this.dizzy.position.set(dizzyOne.x, dizzyOne.y + 1.9, dizzyOne.z); this.dizzy.rotation.y = time * 8; }
    for (const m of this.mushrooms) {
      m.squash = Math.max(0, (m.squash ?? 0) - dt * 3);
      m.cap.scale.set(1 + m.squash * 0.25, 0.5 - m.squash * 0.2 + Math.sin(time * 3) * 0.02, 1 + m.squash * 0.25);
    }
    this.sparkles.update(dt);
    // camera: behind and above the dino
    const portrait = this.cw < this.ch;
    const want = new THREE.Vector3(p.x, p.y + (portrait ? 7.5 : 5.6), p.z + (portrait ? 8 : 6.6));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 4));
    this.camera.position.copy(this.cam);
    this.camera.lookAt(this.cam.x, this.cam.y - (portrait ? 7.5 : 5.6) + 1.0, this.cam.z - (portrait ? 8 : 6.6) - 1.5);
    // HUD
    const hc = this._hc;
    const secs = Math.ceil(c.timeLeft);
    if (hc.secs !== secs) {
      hc.secs = secs;
      this.hud.timer.textContent = `${num(Math.floor(secs / 60))}:${num(String(secs % 60).padStart(2, '0'))}`;
      this.hud.timer.classList.toggle('hot', secs <= 10 && c.state === 'play');
    }
    if (hc.holder !== h) {
      hc.holder = h;
      const me = h === p;
      this.hud.holder.classList.toggle('me', me);
      this.hud.holder.firstChild.textContent = FACE[h.kind] ?? '🦖';
      this.hud.holder.lastChild.textContent = me ? t('me') : name(h.name);
    }
    const sp = this._screen(p.x, p.y + 2.1, p.z);
    this.hud.you.style.left = `${sp[0]}px`;
    this.hud.you.style.top = `${sp[1]}px`;
    // a pointer at the screen edge when the tail is off screen
    const hp = this._screen(h.x, h.y + 1, h.z);
    const off = h !== p && (hp[0] < 0 || hp[0] > this.cw || hp[1] < 0 || hp[1] > this.ch || !hp[2]);
    this.hud.pointer.style.display = off ? 'flex' : 'none';
    if (off) {
      const cx = this.cw / 2;
      const cy = this.ch / 2;
      let dx = h.x - p.x;
      let dy = h.z - p.z;
      const l = Math.hypot(dx, dy) || 1;
      dx /= l;
      dy /= l;
      const m = this.u * 10;
      const k = Math.min((cx - m) / Math.abs(dx || 1e-6), (cy - m) / Math.abs(dy || 1e-6));
      this.hud.pointer.style.left = `${cx + dx * k}px`;
      this.hud.pointer.style.top = `${cy + dy * k}px`;
      this.hud.pointer.lastChild.textContent = `${num(Math.round(l))}م`;
    }
    const near = h !== p && h.immune <= 0 && Math.hypot(h.x - p.x, h.z - p.z) < 2.2 && Math.abs(h.y - p.y) < 1.4;
    this.hud.grab.classList.toggle('near', near);
  }

  _screen(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return [(v.x * 0.5 + 0.5) * this.cw, (-v.y * 0.5 + 0.5) * this.ch, v.z < 1];
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'results') { this.sparkles.update(dt); this._sync(0.0001, time); }
    else if (this.mode === 'menu') {
      // the dino and friends dance on the big deck while the camera circles
      const deck = PLATFORMS[0];
      const all = [this.dino, ...this.animals];
      all.forEach((m, i) => {
        const a = (i / all.length) * Math.PI * 2 + time * 0.4;
        const e = { id: i, x: deck.x + Math.cos(a) * 1.9, y: deck.y, z: deck.z + Math.sin(a) * 1.9, face: a + Math.PI, moving: 0.7, grounded: true, vy: 0, stun: 0, sliding: false };
        this._pose(m, e, dt, time, i === 0);
      });
      this.dino.back.updateWorldMatrix(true, false);
      const wp = new THREE.Vector3();
      this.dino.back.getWorldPosition(wp);
      this.tail.root.position.copy(wp);
      this.tail.root.rotation.y = this.dino.root.rotation.y;
      this.tail.root.scale.setScalar(1.45);
      this.marker.visible = false;
      this.dizzy.visible = false;
      this.ring.position.set(0, -5, 0);
      const portrait = this.cw < this.ch;
      const a = time * 0.1;
      const r = portrait ? 14 : 10;
      this.camera.position.set(Math.sin(a) * r, deck.y + (portrait ? 9 : 5), Math.cos(a) * r);
      this.camera.lookAt(0, deck.y + 0.8, 0);
      this.sparkles.update(dt);
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

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.GoldenTail = api;
export default api;
