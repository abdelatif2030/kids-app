// «سباق الغروب» — Sunset Highway. Entry: window.SunsetHighway.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A red sports car on a palm-lined coastal highway at sunset: beat the clock, overtake the blue rival and keep the lead. Drag to
// steer between four lanes, weave through cars and trucks (a bump only slows you), tap NITRO on clear gaps. The road bends along
// the shore. Three stages (sunset, dusk, harbour night). three.js, art and sound made in code. No network, no ads, no tracking.
import * as THREE from 'three';
import { Race, STAGES, LANES, HALF, bend, bendSlope, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadSprites, makeSpriteVehicle, loadGLBs, makeModelVehicle } from '../../cozy_kit/art.js';

const CAR_PICS = ['car_blue', 'car_red', 'car_pink', 'car_orange', 'car_black', 'car_taxi', 'car_sedan_blue', 'car_sedan_green', 'car_police'];
const HEAVY_PICS = ['car_truck', 'car_van', 'car_bus'];
/** A painted car (drawn from behind) standing on the road; this game's cars face +z, so the picture is turned to face the camera behind them. */
function paintedCar(sp, width) { const v = makeSpriteVehicle(THREE, sp, width); v.body.rotation.y = Math.PI; const g = new THREE.Group(); g.add(v.root); return g; }

const S = {
  title: ['سباق الغروب', 'Sunset Highway'], stage: ['المرحلة', 'Stage'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'], next: ['المرحلة الجاية', 'Next stage'], how: ['اسحب يمين وشمال بين الحارات — نيترو في الطريق الفاضي', 'Drag between lanes — nitro on a clear road'],
  nitro: ['نيترو', 'NITRO'], first: ['الأول! 🏁', '1st! 🏁'], second: ['الثاني', '2nd'], won: ['كسبت السباق! 🏆', 'You won! 🏆'], lostRival: ['المنافس سبقك.. جرّب تاني!', 'The rival beat you.. try again!'],
  timeup: ['الوقت خلص.. جرّب تاني!', 'Time is up.. try again!'], locked: ['اكسب المرحلة اللي قبلها', 'Win the stage before'], go: ['انطلق!', 'GO!'], kmh: ['كم/س', 'km/h'],
  ahead: ['أنت في المقدمة', 'You lead'], behind: ['المنافس قدامك', 'Rival ahead'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], overtake: ['عدّيته! 👍', 'Overtake! 👍'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], m: ['م', 'm'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  constructor() { super(); this.eng = null; }
  startEngine() {
    const c = this.ctx;
    if (!c || this.eng) return;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = c.createGain(); g.gain.value = 0.0001;
    o1.connect(lp); const g2 = c.createGain(); g2.gain.value = 0.4; o2.connect(g2).connect(lp);
    lp.connect(g).connect(this.sfx);
    o1.start(); o2.start();
    this.eng = { o1, o2, lp, g };
  }
  engine(speed, nitro) {
    if (!this.eng || !this.ctx) return;
    const t = this.ctx.currentTime;
    const f = 55 + speed * 3.2 + (nitro ? 30 : 0);
    this.eng.o1.frequency.setTargetAtTime(f, t, 0.05);
    this.eng.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    this.eng.lp.frequency.setTargetAtTime(500 + speed * 25 + (nitro ? 800 : 0), t, 0.1);
    this.eng.g.gain.setTargetAtTime(this.muted ? 0.0001 : 0.05 + Math.min(0.05, speed * 0.0012), t, 0.1);
  }
  stopEngine() { if (this.eng) { try { this.eng.o1.stop(); this.eng.o2.stop(); } catch (_) { /* fine */ } this.eng = null; } }
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'nitro': this.noise(t, 0.8, 0.14, 'bandpass', 600, 1, this.sfx, 2500); this.slide('sawtooth', 120, 400, t, 0.5, 0.06); break;
      case 'bump': this.noise(t, 0.25, 0.16, 'lowpass', 500); this.tone('sine', 100, t, 0.3, 0.14); break;
      case 'beep': this.tone('square', 440, t, 0.15, 0.08); break;
      case 'go': this.tone('square', 880, t, 0.4, 0.1); break;
      case 'over': [0, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.07, 0.2, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [0, -3, -7].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); this.stopEngine(); return; }
    this.startEngine();
    this.setBed('waves');
    this.setTune({ tempo: 112, beats: 16, wave: 'triangle', vol: 0.07, notes: [[0, 57, 1], [1, 60, 1], [2, 64, 1], [3, 60, 1], [4, 55, 1], [5, 59, 1], [6, 62, 1], [7, 59, 1], [8, 53, 1], [9, 57, 1], [10, 60, 1], [11, 57, 1], [12, 55, 1], [13, 59, 1], [14, 64, 2], [0, 33, 2], [4, 31, 2], [8, 29, 2], [12, 31, 2]] });
  }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 12, 8), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

function makeCar(color, sport) {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(color), 0, 0.5, 0, 1.7, 0.55, 4.1));
  g.add(mesh(geo.box, M(0x1a2a3a, 0x102030), 0, 1.0, -0.2, 1.4, 0.5, 1.8));
  g.add(mesh(geo.box, M(color), 0, 1.28, -0.2, 1.3, 0.1, 1.5));
  if (sport) g.add(mesh(geo.box, M(0x222222), 0, 1.0, -2.0, 1.9, 0.1, 0.4));
  for (const z of [1.3, -1.3]) for (const x of [-0.9, 0.9]) g.add(mesh(geo.cyl, M(0x111111), x, 0.35, z, 0.7, 0.4, 0.7).rotateZ(Math.PI / 2));
  g.add(mesh(geo.box, M(0xffffcc, 0xffffaa), -0.55, 0.55, 2.05, 0.3, 0.15, 0.05), mesh(geo.box, M(0xffffcc, 0xffffaa), 0.55, 0.55, 2.05, 0.3, 0.15, 0.05));
  g.add(mesh(geo.box, M(0xff2a2a, 0xff0000), -0.6, 0.6, -2.05, 0.35, 0.15, 0.05), mesh(geo.box, M(0xff2a2a, 0xff0000), 0.6, 0.6, -2.05, 0.35, 0.15, 0.05));
  return g;
}
function makeTruck(color) {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(0x3a3f4a), 0, 1.2, 2.4, 2.1, 2.2, 1.8));
  g.add(mesh(geo.box, M(color), 0, 1.7, -0.9, 2.3, 3.0, 5.4));
  for (const z of [2.6, -0.6, -2.4]) for (const x of [-1.1, 1.1]) g.add(mesh(geo.cyl, M(0x111111), x, 0.5, z, 1.0, 0.5, 1.0).rotateZ(Math.PI / 2));
  g.add(mesh(geo.box, M(0xff2a2a, 0xff0000), -0.7, 0.9, -3.65, 0.4, 0.2, 0.05), mesh(geo.box, M(0xff2a2a, 0xff0000), 0.7, 0.9, -3.65, 0.4, 0.2, 0.05));
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
    if (!document.getElementById('sh-style')) document.head.append(h('style', { id: 'sh-style' }, css('sh', '#e8742a', '#8a2a3a', '#ffd23a') + '.sh-big{position:absolute;bottom:calc(var(--u)*5);right:calc(var(--u)*4);width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:50%;border:calc(var(--u)*.8) solid #fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#fff;background:linear-gradient(180deg,#5ab8ff,#2a6ae8);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}.sh-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*30);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*1) rgba(0,0,0,.6);paint-order:stroke fill;pointer-events:none}.sh-time{font-size:calc(var(--u)*6)}'));
    this.root = h('div', { class: 'sh-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'sh-layer' });
    this.mode = 'menu'; this.clock = 0;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.sprites = {}; this.glbs = null;
    Promise.all([this._fonts(), loadGLBs(GLTFLoader, this.base, ['sedan', 'sedan-sports', 'hatchback-sports', 'taxi', 'suv', 'suv-luxury', 'van', 'truck', 'delivery', 'garbage-truck', 'police', 'ambulance', 'firetruck']).then((g) => { this.glbs = g; }), loadSprites(THREE, this.base, [...CAR_PICS, ...HEAVY_PICS]).then((sp) => { this.sprites = sp; })]).then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(64, 1, 0.3, 700);
    this.hemi = new THREE.HemisphereLight(0xffd0a0, 0x6a3a2a, 1.5);
    this.sun = new THREE.DirectionalLight(0xffa060, 1.4);
    this.sun.position.set(-30, 30, 60);
    this.scene.add(this.hemi, this.sun);
    this.sunDisc = mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0xfff0c0, fog: false }), 0, 40, 600, 90, 90, 4);
    this.scene.add(this.sunDisc);
    this.sea = mesh(geo.box, M(0x2a7a9a), 0, -0.6, 0, 600, 0.2, 800);
    this.sand = mesh(geo.box, M(0xe8c888), 0, -0.3, 0, 600, 0.2, 800);
    this.scene.add(this.sea);
    this.road = [];
    for (let i = 0; i < 70; i++) {
      const seg = new THREE.Group();
      seg.add(mesh(geo.box, M(0x3a3e46), 0, -0.1, 0, HALF * 2, 0.2, 6.4));
      seg.add(mesh(geo.box, M(0xf4f4f4), -HALF + 0.2, 0.02, 0, 0.25, 0.04, 6.4));
      seg.add(mesh(geo.box, M(0xf4f4f4), HALF - 0.2, 0.02, 0, 0.25, 0.04, 6.4));
      if (i % 2 === 0) for (const x of [-3, 0, 3]) seg.add(mesh(geo.box, M(0xf4e8a0), x, 0.02, 0, 0.18, 0.04, 2.6));
      seg.add(mesh(geo.box, M(0xe8c888), -HALF - 9, -0.15, 0, 16, 0.2, 6.4));
      seg.add(mesh(geo.box, M(0xd8b878), HALF + 9, -0.15, 0, 16, 0.2, 6.4));
      this.scene.add(seg);
      this.road.push(seg);
    }
    this.palms = [];
    for (let i = 0; i < 36; i++) {
      const p = new THREE.Group();
      p.add(mesh(geo.cyl, M(0x9a6a3a), 0, 2.2, 0, 0.5, 4.4, 0.5));
      for (let k = 0; k < 6; k++) { const l = mesh(geo.sphere, M(k % 2 ? 0x3aa84a : 0x52c056), Math.cos(k) * 1.4, 4.6, Math.sin(k) * 1.4, 0.4, 0.12, 2.2); l.rotation.y = -k; p.add(l); }
      this.scene.add(p);
      this.palms.push(p);
    }
    this.cars = new THREE.Group();
    this.scene.add(this.cars);
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 76 : 60;
    this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.race && this.drag) this.race.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = true; move(e); });
    this.root.addEventListener('pointermove', move);
    this.root.addEventListener('pointerup', () => { this.drag = false; });
    this.root.addEventListener('pointercancel', () => { this.drag = false; });
    this._onKey = (e) => {
      if (!this.race || this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (k === 'arrowleft' || k === 'a') this.race.targetX = this.race.p.x - 3;
        if (k === 'arrowright' || k === 'd') this.race.targetX = this.race.p.x + 3;
        if (k === ' ' || k === 'n') this._nitro();
      }
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _nitro() { if (this.race && this.race.useNitro()) this.sound.play('nitro'); }

  _clear() { this.layer.replaceChildren(); }

  _soundPill() {
    const pill = h('button', { class: 'sh-soundpill', onclick: () => this.sound.unlock() }, I.t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  /** The level's painted backdrop (art/pano<N>.webp): a mirrored ring that follows the camera. */
  _pano(stage) {
    if (this.panoMesh) { this.scene.remove(this.panoMesh); this.panoMesh.material.map.dispose(); this.panoMesh.material.dispose(); this.panoMesh = null; }
    const tex = new THREE.TextureLoader().load(`${this.base}art/pano${stage + 1}.webp`, () => { ring.visible = true; });
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.MirroredRepeatWrapping;
    tex.repeat.set(2, 0.66);
    tex.offset.set(0, 0.34);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(560, 560, 300, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    ring.visible = false;
    ring.renderOrder = -10;
    this.panoMesh = ring;
    this.scene.add(ring);
  }

  _look(stage) {
    this._pano(stage);
    const night = stage === 2;
    const dusk = stage === 1;
    const sky = night ? 0x141a3a : dusk ? 0xc86a5a : 0xff9a5a;
    this.scene.background = new THREE.Color(sky);
    this.scene.fog = new THREE.Fog(night ? 0x141a3a : dusk ? 0xd89a8a : 0xffb888, 80, 380);
    this.hemi.color.set(night ? 0x6a7ad8 : 0xffd0a0);
    this.hemi.intensity = night ? 1.1 : 1.5;
    this.sun.color.set(night ? 0x8a9aff : 0xffa060);
    this.sunDisc.material.color.set(night ? 0xe8f0ff : 0xfff0c0);
    this.sunDisc.position.y = night ? 90 : dusk ? 30 : 45;
    this.sea.material = M(night ? 0x1a3a6a : 0x2a7a9a);
  }

  showMenu() {
    this.mode = 'menu'; this.race = null;
    this._clear(); this.sound.setMode(false);
    this._look(0);
    this.demoZ = 0;
    this._clearCars();
    const ar = I.getLang() !== 'en';
    const cards = h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%' }, STAGES.map((s, i) => {
      const lock = i + 1 > this.save.unlocked;
      const st = this.save.stars[i + 1] || 0;
      return h('button', { class: `sh-btn${lock ? ' dark' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, `${lock ? '🔒' : '🏎️'} ${I.t('stage')} ${I.num(i + 1)} · ${ar ? s.ar : s.en} ${'⭐'.repeat(st)}`);
    }));
    this.layer.append(h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' },
      h('div', { class: 'sh-logo' }, '🌅 ', I.t('title')), h('div', { class: 'sh-small' }, I.t('how')), cards,
      h('button', { class: 'sh-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'sh-hint' });
    this.layer.append(this.hintEl);
    this._soundPill();
  }

  _clearCars() { for (const c of [...this.cars.children]) this.cars.remove(c); this.carMeshes = new Map(); }

  start(i) {
    this.stageIdx = i;
    this.race = new Race({ stage: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this._look(i);
    this._clearCars();
    const sp = this.sprites;
    this.me = sp.car_red ? paintedCar(sp.car_red, 2.3) : makeCar(0xe8342a, true);
    this.rival = sp.car_blue ? paintedCar(sp.car_blue, 2.3) : makeCar(0x2a6ae8, true);
    this.cars.add(this.me, this.rival);
    this.mode = 'play'; this.paused = false; this.lastCount = 4;
    this._clear();
    this.sound.setMode(true);
    this.timeEl = h('span', { class: 'sh-time' }, '');
    this.posEl = h('span', {}, '');
    this.speedEl = h('span', {}, '');
    this.barEl = h('b', { style: 'width:0%' });
    this.rivalDot = h('i', { style: 'position:absolute;top:-30%;width:calc(var(--u)*2.6);height:calc(var(--u)*2.6);border-radius:50%;background:#2a6ae8;border:calc(var(--u)*.3) solid #fff;left:0' });
    const back = h('button', { class: 'sh-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'sh-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'sh-top' }, back, h('div', { class: 'sh-pill' }, '⏱ ', this.timeEl), h('div', { class: 'sh-pill' }, this.posEl), pause),
      h('div', { class: 'sh-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🏎️'), h('div', { class: 'sh-bar' }, this.barEl, this.rivalDot), h('span', {}, '🏁')));
    this.countEl = h('div', { class: 'sh-count' }, '3');
    this.hintEl = h('div', { class: 'sh-hint', style: 'top:calc(var(--u)*24)' });
    this.nitroBtn = h('button', { class: 'sh-big', 'aria-label': I.t('nitro'), onclick: () => this._nitro() }, h('span', { style: 'font-size:calc(var(--u)*8)' }, '⚡'), I.t('nitro'), h('span', {}, ''));
    this.layer.append(this.countEl, this.hintEl, this.nitroBtn, h('div', { class: 'sh-pill', style: 'position:absolute;left:calc(var(--u)*4);bottom:calc(var(--u)*6)' }, this.speedEl));
    this._soundPill();
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' }, h('div', { class: 'sh-title' }, I.t('paused')),
        h('button', { class: 'sh-btn', onclick: () => this.togglePause() }, I.t('resume')),
        h('button', { class: 'sh-btn dark', onclick: () => this.start(this.stageIdx) }, I.t('again')),
        h('button', { class: 'sh-btn dark', onclick: () => this.showMenu() }, I.t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _end(ev) {
    const r = this.race;
    if (ev.type === 'finish' && ev.won) {
      this.save.stars[this.stageIdx + 1] = Math.max(this.save.stars[this.stageIdx + 1] || 0, r.stars);
      this.save.unlocked = Math.max(this.save.unlocked, Math.min(3, this.stageIdx + 2));
    }
    this.post({ type: 'save', save: this.save });
    const won = ev.type === 'finish' && ev.won;
    this.sound.play(won ? 'win' : 'lose');
    const last = this.stageIdx >= 2;
    this.layer.append(h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' },
      h('div', { class: 'sh-title' }, won ? I.t('won') : ev.type === 'timeup' ? I.t('timeup') : I.t('lostRival')),
      won ? h('div', { class: 'sh-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'sh-pill' }, `${I.t('stage')} ${I.num(this.stageIdx + 1)}  ·  ${I.num(r.p.bumps)} 💥`),
      won && !last ? h('button', { class: 'sh-btn', onclick: () => this.start(this.stageIdx + 1) }, I.t('next')) : null,
      h('button', { class: 'sh-btn alt', onclick: () => this.start(this.stageIdx) }, I.t('again')),
      h('button', { class: 'sh-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _frame() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.clock += dt;
    if (this.mode === 'play' && !this.paused && this.race) this._update(dt);
    this._render(dt);
  }

  _update(dt) {
    const r = this.race;
    const was = r.state;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'go': this.sound.play('go'); this.countEl.textContent = I.t('go'); setTimeout(() => this.countEl && (this.countEl.style.display = 'none'), 700); this.hint(I.t('how'), 3500); break;
        case 'bump': this.sound.play('bump'); break;
        case 'overtake': this.sound.play('over'); this.hint(I.t('overtake'), 1800); break;
        case 'finish': case 'timeup': this._end(e); break;
        default: break;
      }
    }
    if (was === 'count') { const c = Math.ceil(r.go); if (c !== this.lastCount && c > 0) { this.lastCount = c; this.countEl.textContent = I.num(c); this.sound.play('beep'); } }
    const left = Math.ceil(r.left);
    this.timeEl.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    this.posEl.textContent = r.ahead ? `🥇 ${I.t('ahead')}` : `🥈 ${I.t('behind')} ${I.num(Math.round(r.rival.z - r.p.z))}${I.t('m')}`;
    this.speedEl.textContent = `${I.num(Math.round(r.p.v * 3.6))} ${I.t('kmh')}`;
    this.barEl.style.width = `${Math.round(Math.min(1, r.p.z / r.cfg.dist) * 100)}%`;
    this.rivalDot.style.left = `${Math.round(Math.min(1, r.rival.z / r.cfg.dist) * 96)}%`;
    this.nitroBtn.lastChild.textContent = ` ${I.num(r.p.charges)}`;
    this.nitroBtn.style.opacity = r.p.charges > 0 ? '1' : '0.5';
    this.sound.engine(r.p.v, r.p.nitro > 0);
  }

  _carMesh(c) {
    let m = this.carMeshes.get(c.id);
    if (!m) {
      const sp = this.sprites;
      const heavy = HEAVY_PICS.map((n) => sp[n]).filter(Boolean), light = ['car_pink', 'car_orange', 'car_black', 'car_taxi', 'car_sedan_blue', 'car_sedan_green', 'car_police'].map((n) => sp[n]).filter(Boolean);
      const pool = c.truck ? heavy : light;
      const G = this.glbs && this.glbs.sedan ? this.glbs : null;
      if (G) { // real 3D traffic (Kenney Car Kit, CC0)
        const keys = c.truck ? ['truck', 'van', 'delivery', 'garbage-truck', 'firetruck'] : ['sedan', 'sedan-sports', 'hatchback-sports', 'taxi', 'suv', 'suv-luxury', 'police', 'ambulance'];
        m = makeModelVehicle(THREE, G[keys[c.id % keys.length]] || G.sedan, { length: c.truck ? 5.2 : 3.8, yaw: Math.PI }).root;
      } else m = pool.length ? paintedCar(pool[c.id % pool.length], c.truck ? 3.0 : 2.3) : c.truck ? makeTruck([0xe8e8f0, 0xe8a82a, 0x3a8ae8][c.id % 3]) : makeCar([0xe8d83a, 0x3ae8a8, 0xe83ab8, 0xf4f4f4, 0x8a5ae8][c.id % 5], false);
      this.cars.add(m);
      this.carMeshes.set(c.id, m);
    }
    return m;
  }

  _render(dt) {
    const r = this.race;
    const zp = r ? r.p.z : (this.demoZ += dt * 20);
    // road window
    const base = Math.floor((zp - 12) / 6.4) * 6.4;
    this.road.forEach((seg, i) => {
      const z = base + i * 6.4;
      seg.position.set(-bend(z), 0, z);
      seg.rotation.y = -Math.atan(bendSlope(z));
    });
    this.palms.forEach((p, i) => {
      const z = Math.floor((zp - 10) / 18) * 18 + i * 18;
      const side = i % 3 === 0 ? -1 : 1;
      p.position.set(-bend(z) + side * (HALF + 5 + (i % 4) * 1.5), 0, z);
    });
    this.sea.position.set(-bend(zp) + 330, -0.6, zp);
    this.sunDisc.position.set(-bend(zp + 500) * 0.3, this.sunDisc.position.y, zp + 560);
    if (r) {
      const place = (m, x, z, v) => { m.position.set(-(bend(z) + x), 0, z); m.rotation.y = -Math.atan(bendSlope(z)) + (v ? 0 : 0); };
      place(this.me, r.p.x, r.p.z);
      this.me.rotation.z = (r.targetX - r.p.x) * -0.02;
      place(this.rival, r.rival.x, r.rival.z);
      for (const c of r.traffic) {
        const m = this._carMesh(c);
        const near = c.z > r.p.z - 4 && c.z < r.p.z + 260; // a passed car vanishes just behind the player: below the chase camera its roof showed up huge and upside-down
        m.visible = near;
        if (near) place(m, LANES[c.lane], c.z);
      }
    }
    const bx = r ? -(bend(zp) + r.p.x * 0.6) : -bend(zp);
    this.camera.position.set(this.camera.position.x + (bx - this.camera.position.x) * Math.min(1, dt * 6), this.cw < this.ch ? 5.6 : 4.4, zp - (this.cw < this.ch ? 9.5 : 8));
    if (this.panoMesh) this.panoMesh.position.set(this.camera.position.x, 100, this.camera.position.z);
    const la = r ? -(bend(zp + 22) + r.p.x * 0.4) : -bend(zp + 22);
    this.camera.lookAt(la, 1.2, zp + 18);
    this.renderer.render(this.scene, this.camera);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    this.root.remove();
  }
}

void LANES;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SunsetHighway = api;
export default api;
