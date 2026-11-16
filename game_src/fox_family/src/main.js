// «أم الثعلب ومغامرات العيور» — Fox Family Rescue. Entry: window.FoxFamily.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Guide a fox mother one hop at a time across roads, rivers and railway tracks to a tree-stump den; lost cubs join a
// parade that follows her exact path. Three short levels (summer meadow, autumn woods, winter hills). No network,
// no links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { Trip, LEVELS, COLS, normalizeSave } from './sim.js';
import { mat, makeFox, makeVehicle, makeTrain, makeLog, makeTree, makeBerry, makeDen, laneTexture } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, CSS2, h } from './ui.js';

const C = 1.2; // one square
const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const CAR_COLORS = [0xe8342a, 0x2a8ae8, 0xffc21a, 0x7ad0f0, 0xff7ab8, 0x3ab85a];
const SKY = { summer: 0xbfe8ff, autumn: 0xffe0b8, winter: 0xe4eef8 };

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
    if (!document.getElementById('fx-style')) document.head.append(h('style', { id: 'fx-style', text: CSS + CSS2 }));
    this.root = h('div', { class: 'fx-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'fx-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'fx-cbtn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'fx-loading', style: 'color:#f07a2a' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'fx-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 200);
    this.input = { pointer: null, ox: 0, oy: 0 };
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
    this.camera.fov = this.cw < this.ch ? 62 : 46;
    this.camera.updateProjectionMatrix();
  }

  // ---- a level -------------------------------------------------------------------------------------------------------

  _build(i) {
    if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.levelIndex = i;
    const lv = LEVELS[i];
    this.trip = new Trip({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.sound.setSeason(lv.season);
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(SKY[lv.season]);
    s.fog = new THREE.Fog(SKY[lv.season], 26, 60);
    s.add(new THREE.HemisphereLight(0xfffbf0, 0x6a7a4a, 1.9));
    const sun = new THREE.DirectionalLight(0xfff2d8, 1.4);
    sun.position.set(-8, 20, 6);
    s.add(sun);
    const tex = {};
    this.vehicleModels = [];
    this.platformModels = [];
    this.trains = [];
    this.trip.rows.forEach((row) => {
      const key = row.type === 'den' ? 'grass' : row.type;
      if (!tex[key]) { tex[key] = laneTexture(key, lv.season); tex[key].wrapS = THREE.RepeatWrapping; tex[key].repeat.set(5, 1); }
      const strip = new THREE.Mesh(new THREE.BoxGeometry(34, row.type === 'river' || row.type === 'lily' ? 0.1 : 0.3, C), new THREE.MeshLambertMaterial({ map: tex[key] }));
      strip.position.set(0, row.type === 'river' || row.type === 'lily' ? -0.2 : -0.15, -row.r * C);
      s.add(strip);
      // trees and bushes beside the board on grass rows
      if (row.type === 'grass' || row.type === 'den') {
        for (const side of [-1, 1]) {
          if ((row.r * 7 + side) % 3 === 0) continue;
          const tr = makeTree(lv.season, 0.8 + ((row.r * 13) % 5) * 0.12);
          tr.position.set(side * (COLS + 2 + ((row.r * 3) % 4)) * C, 0, -row.r * C);
          s.add(tr);
        }
        if (row.r > 1 && row.r < this.trip.den && row.r % 4 === 0) { const tr = makeTree(lv.season, 0.7); tr.position.set(((row.r * 5) % 7 - 3) * C, 0, -row.r * C); tr.userData.deco = true; s.add(tr); }
      }
      if (row.type === 'road') row.items.forEach((it, k) => { const m = makeVehicle(it.kind, it.kind === 'tractor' ? 0x2f9a3a : it.kind === 'truck' ? [0xd83a3a, 0x8ac0e8, 0x3a6ad8][(row.r + k) % 3] : CAR_COLORS[(row.r + k) % CAR_COLORS.length]); m.rotation.y = row.dir > 0 ? 0 : Math.PI; s.add(m); this.vehicleModels.push({ m, it, row }); });
      if (row.type === 'river' || row.type === 'lily') row.items.forEach((it) => { const m = makeLog(it.len * C, it.kind); s.add(m); this.platformModels.push({ m, it, row }); });
      if (row.type === 'rail') {
        const tr = makeTrain();
        tr.visible = false;
        if (row.train.dir < 0) tr.rotation.y = Math.PI;
        s.add(tr);
        const lights = [];
        for (const side of [-1, 1]) {
          const post = new THREE.Group();
          post.add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6), mat(0xeaeaea)).translateY(0.8));
          const l = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), new THREE.MeshLambertMaterial({ color: 0x5a1010, emissive: 0xff2020, emissiveIntensity: 0 }));
          l.position.y = 1.6;
          post.add(l);
          post.position.set(side * (COLS + 0.9) * C, 0, -row.r * C + 0.5);
          s.add(post);
          lights.push(l);
        }
        this.trains.push({ m: tr, row, lights });
      }
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 40), new THREE.MeshLambertMaterial({ color: { summer: 0x7cc85a, autumn: 0x9aa84a, winter: 0xeef3f8 }[lv.season] }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.31, 20 - C / 2);
    s.add(ground);
    const far = ground.clone();
    far.position.z = -this.trip.den * C - 20 - C / 2;
    s.add(far);
    const den = makeDen(lv.season);
    den.position.set(0, 0, -this.trip.den * C - 0.4);
    s.add(den);
    this.berryModels = this.trip.berries.map((b) => { const m = makeBerry(); m.position.set(b.x * C, 0, -b.r * C); s.add(m); return m; });
    this.cubModels = this.trip.cubs.map((c) => { const m = makeFox(true); m.root.position.set(c.x * C, 0, -c.r * C); s.add(m.root); m.call = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mat(0xffd23a, 0xffaa00, 0.6)); m.call.position.y = 1.2; m.root.add(m.call); return m; });
    this.fox = makeFox(false);
    s.add(this.fox.root);
    this.shadow = new THREE.Mesh(new THREE.CircleGeometry(0.4, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    s.add(this.shadow);
    this.splash = this._drops(s);
    this.cam = null;
  }

  _drops(scene) {
    const n = 80;
    const pos = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.22 }));
    pts.frustumCulled = false;
    scene.add(pts);
    for (let k = 0; k < n; k++) pos[k * 3 + 1] = -50;
    return { pos, vel: new Float32Array(n * 3), life: new Float32Array(n), g, i: 0, n };
  }

  _burst(x, z, n = 20, color) {
    const s = this.splash;
    if (color) s.g.userData.color = color;
    for (let k = 0; k < n; k++) {
      const i = s.i++ % s.n;
      const a = Math.random() * Math.PI * 2;
      s.pos.set([x, 0.3, z], i * 3);
      s.vel.set([Math.cos(a) * 2 * Math.random(), 2 + Math.random() * 3, Math.sin(a) * 2 * Math.random()], i * 3);
      s.life[i] = 0.7;
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused) return;
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX;
      this.input.oy = e.clientY;
    });
    root.addEventListener('pointerup', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      const dx = e.clientX - this.input.ox;
      const dy = e.clientY - this.input.oy;
      // a swipe hops that way, a tap hops forward
      if (Math.hypot(dx, dy) < this.u * 4) this._hop('up');
      else if (Math.abs(dx) > Math.abs(dy)) this._hop(dx > 0 ? 'right' : 'left');
      else this._hop(dy < 0 ? 'up' : 'down');
    });
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.fx-arrow')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      if (e.type !== 'keydown' || this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      const map = { arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down', arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right', ' ': 'up' };
      if (map[k]) { this._hop(map[k]); e.preventDefault(); }
      if (k === 'escape' || k === 'p') this.pause();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'fx-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _hop(dir) {
    if (this.mode !== 'play' || this.paused || !this.trip) return;
    this.trip.hop(dir);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute() {
    const b = h('button', { class: 'fx-chip', style: 'pointer-events:auto;border:none;cursor:pointer;font-family:inherit', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() { this.toastEl = h('div', { class: 'fx-toast' }); return this.toastEl; }
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
    this._build(Math.min(this.save.unlocked, LEVELS.length) - 1);
    this._clear();
    const icons = ['☀️', '🍂', '❄️'];
    const nodes = LEVELS.map((lv, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[lv.id] ?? 0;
      return h('button', {
        class: `fx-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`, 'aria-label': name(lv), title: name(lv),
        onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked')); return; } this.startLevel(i); },
      }, locked ? '🔒' : icons[i], h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    this.layer.append(
      h('button', { class: 'fx-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'fx-dim', style: 'background:rgba(30,60,40,.25)' },
        h('div', { class: 'fx-card' },
          h('div', { style: 'font-size:calc(var(--u)*12)' }, '🦊🦊🦊'),
          h('h2', {}, t('title')),
          h('div', { class: 'fx-map', style: 'grid-template-columns:repeat(3,calc(var(--u)*17));margin-bottom:calc(var(--u)*4)' }, nodes),
          h('button', { class: 'fx-cbtn', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1) }, '▶ ', t('play')))),
      this._toastEl(),
    );
  }

  startLevel(i) {
    this._build(i);
    this.mode = 'play';
    this.paused = false;
    this.sound.setMode('play');
    this._hud();
  }

  _hud() {
    this._clear();
    const tr = this.trip;
    this.hud = {
      cubs: h('div', { class: 'fx-chip' }, `🦊 ${num(0)}/${num(tr.cubs.length)}`),
      level: h('div', { class: 'fx-chip' }, `${t('level')} ${num(tr.level.id)}`),
      berries: h('div', { class: 'fx-chip' }, `🍓 ${num(0)}/${num(tr.berries.length)}`),
      goal: h('div', { class: 'fx-goal' }, t('goal')),
    };
    const arrow = (dir, glyph) => {
      const b = h('button', { class: `fx-arrow${dir === 'up' ? ' up' : ''}`, 'aria-label': dir }, glyph);
      b.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this._hop(dir); });
      return b;
    };
    this.layer.append(
      h('button', { class: 'fx-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'fx-bar' }, this.hud.level, this.hud.berries, this.hud.cubs, this._mute()),
      this.hud.goal,
      h('div', { class: 'fx-arrows' }, arrow('left', '←'), arrow('down', '↓'), arrow('up', '↑'), arrow('right', '→')),
      this._toastEl(),
    );
    this._hc = {};
    if (tr.level.id === 1) setTimeout(() => this.mode === 'play' && this.toast(t('how'), 3), 400);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.sound.suspend();
    const dim = h('div', { class: 'fx-dim' }, h('div', { class: 'fx-card' },
      h('h2', {}, t('paused')),
      h('button', { class: 'fx-cbtn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'fx-cbtn alt', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'fx-cbtn alt', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _complete() {
    const tr = this.trip;
    const r = tr.result;
    const i = this.levelIndex;
    this.mode = 'results';
    const id = LEVELS[i].id;
    this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
    this.save.berries += r.berries;
    if (i + 2 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = i + 2;
    this._saveNow();
    const got = [true, r.berries >= tr.berries.length, r.bumps === 0];
    got.forEach((g, k) => { if (g) setTimeout(() => this.sound.play('star', k), 300 + k * 250); });
    const last = i + 1 >= LEVELS.length;
    const dim = h('div', { class: 'fx-dim' }, h('div', { class: 'fx-card' },
      h('h2', {}, last ? t('allHome') : t('complete')),
      h('div', { class: 'fx-row3' }, ['s1', 's2', 's3'].map((k, n) => h('div', { class: got[n] ? '' : 'off' }, h('b', {}, '⭐'), t(k)))),
      h('div', { style: 'font-weight:900' }, `🍓 ${t('berries')}: ${num(r.berries)}/${num(tr.berries.length)}   🦊 ${num(r.cubs)}/${num(r.of)}`),
      last ? h('div', { style: 'font-size:calc(var(--u)*10)' }, '🏡🦊🦊🦊') : null,
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        !last ? h('button', { class: 'fx-cbtn', onclick: () => this.startLevel(i + 1) }, t('next'), ' ▶') : h('button', { class: 'fx-cbtn', onclick: () => this.startLevel(0) }, '▶ ', t('playAgain')),
        h('button', { class: 'fx-cbtn alt', onclick: () => this.startLevel(i) }, '↻ ', t('again')),
        h('button', { class: 'fx-cbtn alt', onclick: () => this.showMenu() }, t('menu')))));
    this.layer.append(dim);
  }

  _pop(text, x, r) {
    const v = new THREE.Vector3(x * C, 1.4, -r * C).project(this.camera);
    const tag = h('div', { class: 'fx-pop', style: `left:${(v.x * 0.5 + 0.5) * this.cw}px;top:${(-v.y * 0.5 + 0.5) * this.ch}px` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 1000);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const tr = this.trip;
    const events = tr.step(dt);
    for (const e of events) {
      switch (e.type) {
        case 'hop': this.sound.play('hop'); break;
        case 'plop': this.sound.play('plop'); break;
        case 'berry': this.sound.play('berry', e.n); break;
        case 'cub': this.sound.play('cub'); this.toast(t('cub'), 1.6); break;
        case 'stop': if (Math.abs(e.r - tr.fox.r) < 4) this.sound.play('stop'); break;
        case 'bump':
          this.sound.play(e.why === 'splash' ? 'splash' : 'bump');
          this._pop(e.why === 'splash' ? t('splash') : t('bump'), e.x, e.r);
          this._burst(e.x * C, -e.r * C, e.why === 'splash' ? 24 : 12);
          this.shake = 0.35;
          break;
        case 'trainWarn': if (Math.abs(e.r - tr.fox.r) < 5) this.sound.play('trainWarn'); break;
        case 'train': if (Math.abs(e.r - tr.fox.r) < 6) this.sound.play('train'); break;
        case 'den':
          this.sound.play('den');
          this.hud.goal.textContent = t('welcome');
          for (let k = 0; k < tr.parade.length; k++) setTimeout(() => this.sound.play('march'), 300 + k * 300);
          break;
        case 'done': setTimeout(() => this.mode === 'play' && this._complete(), 300); break;
        default:
      }
    }
    // a friendly honk now and then near the fox
    if (Math.random() < dt * 0.08 && tr.row(tr.fox.r + 1).type === 'road') this.sound.play('honk');
    this._sync(dt, time);
    const hc = this._hc;
    if (hc.c !== tr.parade.length) { hc.c = tr.parade.length; this.hud.cubs.textContent = `🦊 ${num(tr.parade.length)}/${num(tr.cubs.length)}`; }
    if (hc.b !== tr.picked) { hc.b = tr.picked; this.hud.berries.textContent = `🍓 ${num(tr.picked)}/${num(tr.berries.length)}`; }
  }

  _sync(dt, time) {
    const tr = this.trip;
    for (const v of this.vehicleModels) { v.m.position.set(v.it.x * C, 0, -v.row.r * C); v.m.position.y = v.it.v > 0.5 ? Math.abs(Math.sin(time * 14 + v.it.x)) * 0.03 : 0; }
    for (const p of this.platformModels) { p.m.position.set(p.it.x * C, p.row.type === 'lily' ? -0.1 : -0.12 + Math.sin(time * 2 + p.it.x) * 0.03, -p.row.r * C); }
    for (const t2 of this.trains) {
      const st = t2.row.train;
      t2.m.visible = st.state === 'pass';
      t2.m.position.set(st.x * C, 0, -t2.row.r * C);
      t2.lights.forEach((l, k) => { l.material.emissiveIntensity = st.state !== 'wait' && Math.floor(time * 4 + k) % 2 ? 1 : 0; });
    }
    tr.berries.forEach((b, k) => { const m = this.berryModels[k]; if (b.taken) { m.scale.multiplyScalar(0.85); if (m.scale.x < 0.05) m.visible = false; m.position.y += dt * 2; } else { m.rotation.y = time * 1.5; m.position.y = Math.abs(Math.sin(time * 3 + k)) * 0.1; } });
    tr.cubs.forEach((c, k) => {
      const m = this.cubModels[k];
      m.root.position.set(c.x * C, 0, -c.r * C);
      m.call.visible = !c.found;
      if (!c.found) { m.root.rotation.y = Math.sin(time * 2 + k) * 0.6; m.body.position.y = Math.abs(Math.sin(time * 4 + k)) * 0.12; } else {
        m.root.rotation.y = 0;
        m.body.position.y = Math.abs(Math.sin(time * 10 + k)) * 0.08;
        if (tr.state !== 'play') m.root.visible = c.r < tr.den - 0.3 || Math.random() < 0.99 ? m.root.visible : m.root.visible;
      }
    });
    // the fox: a little arc for each hop, a wobble when bumped
    const f = tr.fox;
    const k = f.hop > 0 ? 1 - f.hop / 0.16 : 1;
    const x = (f.fx + (f.x - f.fx) * k) * C;
    const z = -(f.fr + (f.r - f.fr) * k) * C;
    const y = f.hop > 0 ? Math.sin(k * Math.PI) * 0.5 : 0;
    this.fox.root.position.set(x, y, z);
    const face = { up: 0, down: Math.PI, left: Math.PI / 2, right: -Math.PI / 2 }[f.face] ?? 0;
    this.fox.root.rotation.y = face;
    this.fox.root.rotation.z = f.bump > 0 ? Math.sin(time * 30) * 0.4 : 0;
    this.fox.tail.rotation.y = Math.sin(time * 6) * 0.4;
    this.shadow.position.set(x, 0.02, z);
    this.shadow.scale.setScalar(1 - y * 0.6);
    // when home, the cubs march into the den
    if (tr.state !== 'play') tr.cubs.forEach((c, i2) => { if (c.found) { const m = this.cubModels[i2]; m.root.position.z -= dt * 0.8 * (i2 + 1); } });
    const s = this.splash;
    for (let k2 = 0; k2 < s.n; k2++) {
      if (s.life[k2] <= 0) continue;
      s.life[k2] -= dt;
      s.vel[k2 * 3 + 1] -= 9 * dt;
      for (let a = 0; a < 3; a++) s.pos[k2 * 3 + a] += s.vel[k2 * 3 + a] * dt;
      if (s.life[k2] <= 0) s.pos[k2 * 3 + 1] = -50;
    }
    s.g.attributes.position.needsUpdate = true;
    // camera follows the fox's row, looking up the board
    const portrait = this.cw < this.ch;
    // closer and tilted (like the video): big tractors and trucks near the fox, the lanes ahead shrinking away
    const want = new THREE.Vector3(x * 0.45, portrait ? 10 : 8.5, z + (portrait ? 6 : 6.5));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 4));
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    this.camera.position.set(this.cam.x + (Math.random() - 0.5) * this.shake * 0.3, this.cam.y, this.cam.z);
    this.camera.lookAt(this.cam.x, 0, this.cam.z - (portrait ? 6 : 6.5) - (portrait ? 2.2 : 1.6));
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (!this.trip) return;
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else if (this.mode !== 'play') { this.trip._traffic(dt); this.trip.events = []; this._sync(dt, time); }
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
window.FoxFamily = api;
export default api;
