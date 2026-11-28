// «فيزمان» — Fizz Man. Entry: window.FizzRunner.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D endless runner in the spirit of the classic soda-hero arcade game, with an ORIGINAL blue-and-silver hero (no real brands).
// Run down 6 different streets: switch lanes, jump, slide, dodge cars and trucks, collect cans, grab magnets, shields and stars, do ramp
// stunts. Menu, level select with stars, high scores, missions and achievements, pause, sound switch, game over and restart.
// Keyboard (arrows/WASD/space) and touch (swipes). three.js, art and sound made in code. No network, no ads, no tracking.
import * as THREE from 'three';
import { Run, ENVS, LANES, MISSIONS, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const FIZZ_CLIPS = { pickup: 2, trick: 3, charge: 2, bump: 2, near: 1, win: 2, lose: 2, go: 2 };

const S = {
  title: ['فيزو في مصر', 'Fizzo in Egypt'], play: ['العب', 'PLAY'], levels: ['المراحل', 'LEVELS'], high: ['أعلى النقاط', 'HIGH SCORE'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'], missions: ['المهمات', 'MISSIONS'],
  score: ['النقاط', 'SCORE'], best: ['الأفضل', 'BEST'], restart: ['إعادة', 'RESTART'], home: ['الرئيسية', 'HOME'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], sound: ['الصوت', 'Sound'],
  over: ['انتهت اللعبة', 'GAME OVER'], won: ['وصلت للنهاية! 🏆', 'LEVEL COMPLETE! 🏆'], select: ['اختار المرحلة', 'SELECT LEVEL'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  how: ['اسحب يمين/شمال لتغيير الحارة، فوق للقفز، تحت للانزلاق', 'Swipe left/right to change lane, up to jump, down to slide'], m: ['م', 'm'], tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  done: ['تمت', 'Done'], total: ['العلب الكلية', 'Total cans'], dist: ['المسافة الكلية', 'Total distance'], back: ['رجوع', 'Back'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);
const LOOKS = {
  city: { sky: 0x8ad0ff, fog: 0xcdeaff, ground: 0x4a4e58, side: [0xc8d8e8, 0xe8c8a8, 0xa8c0d8], accent: 0x3a8ae8 },
  downtown: { sky: 0x7ac0f0, fog: 0xbfe0f8, ground: 0x3e424c, side: [0x8a98b0, 0xb8a8a0, 0x90a8c0], accent: 0xe8a82a },
  shops: { sky: 0xffd0a0, fog: 0xffe4c8, ground: 0x4a4650, side: [0xff9ab8, 0xffd23a, 0x8ae8c8], accent: 0xff4a8a },
  industry: { sky: 0xb8a898, fog: 0xc8b8a8, ground: 0x3a3a3e, side: [0x7a7a82, 0x9a6a4a, 0x6a7a8a], accent: 0xe86a2a },
  highway: { sky: 0xffa868, fog: 0xffc898, ground: 0x34363c, side: [0x7a8a6a, 0x9aa8b8, 0x8a7a6a], accent: 0xffd23a },
  bonus: { sky: 0x6a3ad8, fog: 0x9a6af0, ground: 0x2a6ae8, side: [0xff6aa8, 0x5ae8ff, 0xffe04a], accent: 0xffffff },
};

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'can': this.tone('square', hz(88), t, 0.05, 0.04); this.tone('square', hz(95), t + 0.05, 0.08, 0.04); break;
      case 'jump': this.slide('triangle', 250, 600, t, 0.18, 0.1); break;
      case 'slide': this.noise(t, 0.25, 0.08, 'bandpass', 900, 1, this.sfx, 400); break;
      case 'land': this.noise(t, 0.08, 0.08, 'lowpass', 400); break;
      case 'stunt': [0, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.2, 0.12)); break;
      case 'power': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.05, 0.25, 0.12)); break;
      case 'crash': this.noise(t, 0.5, 0.2, 'lowpass', 700); this.slide('sawtooth', 300, 50, t, 0.5, 0.1); break;
      case 'shield': this.noise(t, 0.2, 0.1, 'bandpass', 1500, 2); this.tone('triangle', hz(70), t, 0.2, 0.1); break;
      case 'over': [0, -3, -7, -12].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.2, 0.5, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 700, t, 0.06, 0.08); break;
      case 'lane': this.noise(t, 0.06, 0.05, 'highpass', 1500); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('wind'); this.setTune({ tempo: 140, beats: 16, wave: 'square', vol: 0.045, notes: [[0, 64, 1], [1, 67, 1], [2, 71, 1], [3, 67, 1], [4, 62, 1], [5, 66, 1], [6, 69, 1], [7, 66, 1], [8, 60, 1], [9, 64, 1], [10, 67, 1], [11, 72, 1], [12, 71, 1], [13, 67, 1], [14, 64, 2], [0, 40, 2], [4, 38, 2], [8, 36, 2], [12, 43, 2]] }); }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 14, 10), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 14), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 10) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

function makeHero() {
  const g = new THREE.Group();
  const body = new THREE.Group();
  const blue = M(0x1a4ae8, 0x0a1a6a); const silver = M(0xd8dce8, 0x303040);
  body.add(mesh(geo.sphere, blue, 0, 1.45, 0, 0.95, 1.15, 0.6)); // torso
  body.add(mesh(geo.sphere, silver, 0.0, 1.2, 0.2, 0.55, 0.9, 0.3)); // silver belly panel
  const emblem = mesh(geo.cyl, M(0xffffff, 0x666666), -0.2, 1.65, 0.3, 0.32, 0.05, 0.32); emblem.rotation.x = Math.PI / 2; body.add(emblem);
  const ring = mesh(geo.cyl, M(0xe8242a, 0x601010), -0.2, 1.65, 0.31, 0.26, 0.05, 0.26); ring.rotation.x = Math.PI / 2; body.add(ring);
  body.add(mesh(geo.sphere, silver, 0, 2.3, 0.05, 0.5, 0.62, 0.52)); // helmeted head
  body.add(mesh(geo.sphere, M(0x1a2a3a, 0x203050), 0, 2.28, 0.2, 0.34, 0.2, 0.18)); // visor
  g.userData.armL = new THREE.Group(); g.userData.armR = new THREE.Group(); g.userData.legL = new THREE.Group(); g.userData.legR = new THREE.Group();
  for (const [grp, x] of [[g.userData.armL, -0.62], [g.userData.armR, 0.62]]) { grp.position.set(x, 1.8, 0); grp.add(mesh(geo.cyl, blue, 0, -0.45, 0, 0.26, 0.9, 0.26), mesh(geo.sphere, silver, 0, -0.95, 0, 0.3, 0.3, 0.3)); body.add(grp); }
  for (const [grp, x] of [[g.userData.legL, -0.25], [g.userData.legR, 0.25]]) { grp.position.set(x, 0.95, 0); grp.add(mesh(geo.cyl, blue, 0, -0.45, 0, 0.3, 0.9, 0.3), mesh(geo.box, silver, 0, -0.95, 0.12, 0.34, 0.2, 0.5)); body.add(grp); }
  g.add(body); g.userData.body = body;
  g.userData.shadow = mesh(new THREE.CircleGeometry(0.8, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3 }), 0, 0.03, 0); g.userData.shadow.rotation.x = -Math.PI / 2; g.add(g.userData.shadow);
  g.userData.shield = mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0x6ad8ff, transparent: true, opacity: 0.35 }), 0, 1.5, 0, 3, 3, 3); g.userData.shield.visible = false; g.add(g.userData.shield);
  return g;
}

function makeCan() { const g = new THREE.Group(); g.add(mesh(geo.cyl, M(0x1a5ae8, 0x0a2a8a), 0, 0, 0, 0.55, 0.9, 0.55), mesh(geo.cyl, M(0xd8dce8), 0, 0.47, 0, 0.5, 0.06, 0.5), mesh(geo.cyl, M(0xffffff), 0, 0, 0.0, 0.57, 0.3, 0.57)); return g; }
const COLORS = [0xe8d83a, 0xe8452a, 0xf4f4f4, 0x3ae8a8, 0x8a5ae8, 0x3a8ae8];
function makeObstacle(kind, id) {
  const g = new THREE.Group();
  if (kind === 'barrier') { g.add(mesh(geo.box, M(0xf4f4f4), 0, 0.7, 0, 2.2, 0.6, 0.3)); for (let i = 0; i < 4; i++) g.add(mesh(geo.box, M(0xe8242a), -0.8 + i * 0.55, 0.7, 0.16, 0.28, 0.62, 0.05)); g.add(mesh(geo.box, M(0x555a66), -1, 0.35, 0, 0.14, 0.7, 0.14), mesh(geo.box, M(0x555a66), 1, 0.35, 0, 0.14, 0.7, 0.14)); }
  else if (kind === 'cone') { g.add(mesh(geo.cone, M(0xff7a1a), 0, 0.55, 0, 0.8, 1.1, 0.8), mesh(geo.box, M(0x3a3a3e), 0, 0.05, 0, 1, 0.1, 1), mesh(geo.cyl, M(0xffffff), 0, 0.55, 0, 0.5, 0.18, 0.5)); }
  else if (kind === 'car' || kind === 'movecar') { const c = COLORS[id % COLORS.length]; g.add(mesh(geo.box, M(c), 0, 0.55, 0, 1.9, 0.7, 3.6), mesh(geo.box, M(0x1a2a3a, 0x102030), 0, 1.1, -0.2, 1.6, 0.5, 1.8), mesh(geo.box, M(c), 0, 1.38, -0.2, 1.6, 0.08, 1.6)); for (const x of [-0.95, 0.95]) for (const z of [-1.1, 1.1]) g.add(mesh(geo.cyl, M(0x111111), x, 0.35, z, 0.7, 0.3, 0.7).rotateZ(Math.PI / 2)); g.add(mesh(geo.box, M(0xff2a2a, 0xff0000), -0.6, 0.65, 1.82, 0.4, 0.15, 0.05), mesh(geo.box, M(0xff2a2a, 0xff0000), 0.6, 0.65, 1.82, 0.4, 0.15, 0.05)); }
  else if (kind === 'truck') { g.add(mesh(geo.box, M(0x2a5ac8), 0, 1.8, 1.0, 2.3, 3.4, 5.6), mesh(geo.box, M(0x3a3f4a), 0, 1.2, -2.6, 2.2, 2.4, 1.8)); for (const x of [-1.2, 1.2]) for (const z of [-2.4, 0.5, 2.4]) g.add(mesh(geo.cyl, M(0x111111), x, 0.5, z, 1.0, 0.45, 1.0).rotateZ(Math.PI / 2)); g.add(mesh(geo.box, M(0xffffff), 0, 2.6, 3.8, 1.8, 0.8, 0.05)); }
  else if (kind === 'overhead') { g.add(mesh(geo.box, M(0x555a66), -4.2, 2, 0, 0.3, 4, 0.3), mesh(geo.box, M(0x555a66), 4.2, 2, 0, 0.3, 4, 0.3), mesh(geo.box, M(0xffd23a), 0, 2.3, 0, 8.6, 0.9, 0.4)); for (let i = 0; i < 8; i++) g.add(mesh(geo.box, M(0x222222), -3.6 + i, 2.3, 0.22, 0.45, 0.9, 0.05)); }
  else if (kind === 'ramp') { const r = mesh(geo.box, M(0xffb82a), 0, 0.35, 0, 2.2, 0.15, 3.2); r.rotation.x = -0.28; g.add(r, mesh(geo.box, M(0x555a66), 0, 0.15, -1.2, 2.2, 0.3, 0.2)); }
  else if (kind === 'magnet') { const m = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.18, 8, 16, Math.PI), M(0xe8242a, 0x601010)); m.rotation.z = Math.PI; m.position.y = 0.6; g.add(m, mesh(geo.box, M(0xd8dce8), -0.5, 0.2, 0, 0.36, 0.3, 0.36), mesh(geo.box, M(0xd8dce8), 0.5, 0.2, 0, 0.36, 0.3, 0.36)); }
  else if (kind === 'shield') { g.add(mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0x6ad8ff, transparent: true, opacity: 0.7 }), 0, 0.7, 0, 1.2, 1.4, 0.5), mesh(geo.sphere, M(0xffffff, 0x888888), 0, 0.7, 0, 0.5, 0.5, 0.5)); }
  else if (kind === 'star') { const s = mesh(geo.cone, M(0xffd23a, 0xaa8800), 0, 0.7, 0, 1, 1, 0.3); g.add(s, mesh(geo.sphere, M(0xffe86a, 0xaa8800), 0, 0.7, 0, 0.9, 0.9, 0.5)); }
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: FIZZ_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('fz-style')) document.head.append(h('style', { id: 'fz-style' }, css('fz', '#2a6ae8', '#0a2a98', '#ffe04a') + '.fz-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1.6);width:100%}.fz-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.6);min-height:calc(var(--u)*22);cursor:pointer;justify-content:flex-end}.fz-env.lock{filter:grayscale(1) brightness(.6)}.fz-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}.fz-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.2)}'));
    this.root = h('div', { class: 'fz-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'fz-layer' });
    this.mode = 'menu'; this.clock = 0; this.fx = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 400);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x8a98a8, 1.6); this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xfff4d8, 1.3); sun.position.set(-10, 30, -10); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.hero = makeHero(); this.scene.add(this.hero);
    this.road = mesh(geo.box, M(0x4a4e58), 0, -0.1, 0, 9.6, 0.2, 420); this.scene.add(this.road);
    this.lanes = []; for (let i = 0; i < 60; i++) { const d = mesh(geo.box, M(0xf4f4f4), 0, 0.02, 0, 0.18, 0.02, 2); this.scene.add(d); this.lanes.push(d); }
    this.sideL = []; this.sideR = [];
  }

  /** The owner's painted backdrop of the level (art/pano<N>.webp): a mirrored ring around the camera. n = 0 removes it. */
  _setPano(n) {
    if (this.panoMesh) { this.scene.remove(this.panoMesh); this.panoMesh.material.map.dispose(); this.panoMesh.material.dispose(); this.panoMesh = null; }
    if (!n) return;
    const tex = new THREE.TextureLoader().load(`${this.base}art/pano${n}.webp`, () => { if (this.panoMesh && this.panoMesh.material.map === tex) this.panoMesh.visible = true; });
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.MirroredRepeatWrapping; tex.repeat.set(2, 0.66); tex.offset.set(0, 0.34);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(300, 300, 240, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false }));
    ring.visible = false; ring.renderOrder = -10; this.panoMesh = ring; this.scene.add(ring);
  }
  _followPano() { if (this.panoMesh) this.panoMesh.position.set(this.camera.position.x, this.camera.position.y + 60, this.camera.position.z); }

  _look(envId) {
    this._setPano((this.envIdx || 0) % 6 + 1);
    const L = LOOKS[envId];
    this.scene.background = new THREE.Color(L.sky); this.scene.fog = new THREE.Fog(L.fog, 50, 190);
    this.road.material = M(L.ground);
    for (const b of [...this.sideL, ...this.sideR]) this.scene.remove(b.m);
    this.sideL = []; this.sideR = [];
    // the big boxes along the road hid the painted backdrop and filled the screen (owner 2026-11-26): only the low highway rails and lamps are kept
    for (let side = 0; side < 2; side++) for (let i = 0; i < (envId === 'highway' ? 26 : 0); i++) {
      const g = new THREE.Group();
      const col = L.side[(i + side) % 3];
      const hgt = 8 + ((i * 7 + side * 3) % 5) * 4;
      if (envId === 'bonus') { g.add(mesh(geo.cyl, M(col, col), 0, hgt / 2, 0, 3, hgt, 3), mesh(geo.cyl, M(0xffffff), 0, hgt, 0, 3.2, 0.3, 3.2)); }
      else if (envId === 'industry') { g.add(mesh(geo.box, M(col), 0, 3, 0, 8, 6, 8), mesh(geo.cyl, M(0x888890), 2, 9, 0, 1.6, 10, 1.6), mesh(geo.sphere, M(0xcccccc), 2, 15, 0, 2.5, 1.6, 2.5)); }
      else if (envId === 'shops') { g.add(mesh(geo.box, M(col), 0, 3.5, 0, 7, 7, 8), mesh(geo.box, M(L.accent), 0, 6.8, 4.1, 7.2, 0.8, 0.4), mesh(geo.box, M(0x9ad8ff, 0x203040), 0, 2, 4.05, 5.5, 2.5, 0.1)); }
      else if (envId === 'highway') { g.add(mesh(geo.box, M(0x8a8a92), 0, 0.7, 0, 0.3, 1.4, 14)); if (i % 3 === 0) g.add(mesh(geo.cyl, M(0x6a6a72), 0, 4, 0, 0.3, 8, 0.3), mesh(geo.box, M(0xffffcc, 0xffffaa), 0, 8, 0, 1.2, 0.3, 0.8)); }
      else { g.add(mesh(geo.box, M(col), 0, hgt / 2, 0, 8, hgt, 8)); for (let w = 0; w < 4; w++) g.add(mesh(geo.box, M(0x9ad8ff, 0x305070), 0, 2 + w * 3.2, 4.05, 6, 1.6, 0.1)); if (i % 4 === 0) g.add(mesh(geo.cyl, M(0x6a4a2a), 6, 1.5, 6, 0.5, 3, 0.5), mesh(geo.sphere, M(0x3aa84a), 6, 4, 6, 3, 3, 3)); }
      this.scene.add(g); (side ? this.sideR : this.sideL).push({ m: g });
    }
    this.hemi.color.set(envId === 'bonus' ? 0xc8a8ff : 0xffffff);
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 74 : 58; this.camera.updateProjectionMatrix(); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button') || this.mode !== 'play') return; this.sw = { x: e.clientX, y: e.clientY, done: false }; });
    this.root.addEventListener('pointermove', (e) => {
      if (!this.sw || this.sw.done || this.mode !== 'play' || this.paused) return;
      const dx = e.clientX - this.sw.x; const dy = e.clientY - this.sw.y; const T = this.u * 5;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < T) return;
      this.sw.done = true;
      if (Math.abs(dx) > Math.abs(dy)) { if (dx > 0) this._right(); else this._left(); } else if (dy < 0) this._jump(); else this._slide();
    });
    this.root.addEventListener('pointerup', (e) => { if (this.sw && !this.sw.done && this.mode === 'play' && !this.paused && Math.hypot(e.clientX - this.sw.x, e.clientY - this.sw.y) < this.u * 2) this._jump(); this.sw = null; });
    this._onKey = (e) => {
      if (this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      if (k === 'arrowleft' || k === 'a') this._left(); else if (k === 'arrowright' || k === 'd') this._right(); else if (k === 'arrowup' || k === 'w' || k === ' ') { e.preventDefault(); this._jump(); } else if (k === 'arrowdown' || k === 's') this._slide(); else if (k === 'p' || k === 'escape') this.togglePause();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _left() { if (this.run && !this.paused) { const l = this.run.lane; this.run.left(); if (l !== this.run.lane) this.sound.play('lane'); } }
  _right() { if (this.run && !this.paused) { const l = this.run.lane; this.run.right(); if (l !== this.run.lane) this.sound.play('lane'); } }
  _jump() { if (this.run && !this.paused) this.run.jump(); }
  _slide() { if (this.run && !this.paused) this.run.doSlide(); }

  _clear() { this.layer.replaceChildren(); }
  _soundPill() { const pill = h('button', { class: 'fz-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 2600) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  showMenu() {
    this.mode = 'menu'; this.run = null; this._clear(); this.sound.setMode(false);
    this._look('city'); this._clearThings(); this.demoZ = 0;
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-logo' }, '🥤 ', I.t('title')),
      h('div', { class: 'fz-menu' },
        h('button', { class: 'fz-btn', onclick: () => { this.sound.play('tap'); this.start(Math.min(this.save.unlocked - 1, 5)); } }, '▶ ', I.t('play')),
        h('button', { class: 'fz-btn dark', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, '👑 ', I.t('levels')),
        h('button', { class: 'fz-btn dark', onclick: () => { this.sound.play('tap'); this.showScores(); } }, '🏆 ', I.t('high')),
        h('button', { class: 'fz-btn dark', onclick: () => { this.sound.play('tap'); this.showSettings(); } }, '⚙️ ', I.t('settings')),
        h('button', { class: 'fz-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('quit'))))));
    this._soundPill();
  }

  showLevels() {
    this._clear(); const ar = I.getLang() !== 'en';
    const cards = ENVS.map((e, i) => { const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i] || 0; const L = LOOKS[e.id]; return h('button', { class: `fz-env${lock ? ' lock' : ''}`, style: `background:linear-gradient(180deg,rgba(0,0,0,0) 20%,rgba(0,0,0,.85)),url(${this.base}art/env_${e.id}.webp) center/cover,linear-gradient(180deg,#${L.sky.toString(16).padStart(6, '0')},#${L.side[0].toString(16).padStart(6, '0')});text-shadow:0 2px 4px #000a`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('span', {}, `${i + 1}`), h('span', {}, ar ? e.ar : e.en), h('span', {}, lock ? '🔒' : '⭐'.repeat(st) || '☆')); });
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, I.t('select')), h('div', { class: 'fz-grid' }, cards), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this.hintEl = h('div', { class: 'fz-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  showScores() {
    this._clear(); const ar = I.getLang() !== 'en';
    const rows = ENVS.map((e, i) => h('div', { class: 'fz-row' }, h('span', {}, ar ? e.ar : e.en), h('span', {}, this.save.best[i] ? I.num(this.save.best[i]) : '—')));
    const ms = MISSIONS.map((m) => h('div', { class: 'fz-row' }, h('span', {}, ar ? m.ar : m.en), h('span', {}, this.save.done[m.id] ? '✅' : '▫️')));
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, '🏆 ', I.t('high')), ...rows, h('div', { class: 'fz-title', style: 'font-size:calc(var(--u)*5)' }, I.t('missions')), ...ms, h('div', { class: 'fz-row' }, h('span', {}, I.t('total')), h('span', {}, I.num(this.save.totalCans))), h('div', { class: 'fz-row' }, h('span', {}, I.t('dist')), h('span', {}, `${I.num(this.save.totalDist)} ${I.t('m')}`)), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  showSettings() {
    this._clear();
    const b = h('button', { class: 'fz-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); b.textContent = `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`);
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, '⚙️ ', I.t('settings')), b, h('div', { class: 'fz-small' }, I.t('how')), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  _clearThings() { for (const m of this.meshes ? this.meshes.values() : []) this.world.remove(m); this.meshes = new Map(); }

  start(i) {
    this.voice.say('go');
    this.envIdx = i;
    this.run = new Run({ env: i, seed: (Date.now() & 0xffff) + 1, easy: this.age <= 4 });
    this._look(this.run.env.id); this._clearThings();
    this.mode = 'play'; this.paused = false; this.shake = 0; this.fx = [];
    this._clear(); this.sound.setMode(true);
    this.scoreEl = h('span', {}, ''); this.canEl = h('span', {}, ''); this.distEl = h('span', {}, ''); this.pwrEl = h('span', {}, ''); this.heartEl = h('span', {}, '❤️❤️❤️');
    const pause = h('button', { class: 'fz-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'fz-top' }, pause, h('div', { class: 'fz-pill' }, this.scoreEl), h('div', { class: 'fz-pill' }, this.heartEl), h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*.8);align-items:flex-end' }, h('div', { class: 'fz-pill' }, this.canEl), h('div', { class: 'fz-pill' }, this.distEl))), h('div', { class: 'fz-pill', style: 'position:absolute;left:50%;transform:translateX(-50%);top:calc(var(--u)*16)' }, this.pwrEl));
    this.hintEl = h('div', { class: 'fz-hint', style: 'top:calc(var(--u)*26)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) { this.pauseEl = h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, I.t('paused')), h('button', { class: 'fz-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')), h('button', { class: 'fz-btn dark', onclick: () => this.start(this.envIdx) }, '🔄 ', I.t('restart')), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove();
  }

  _finish(won) {
    this.voice.say(won ? 'win' : 'lose');
    const r = this.run; const sc = r.finalScore ?? Math.round(r.score);
    const best = this.save.best[this.envIdx] || 0; if (sc > best) this.save.best[this.envIdx] = sc;
    this.save.totalCans += r.cans; this.save.totalDist += Math.round(r.z);
    if (won) { this.save.stars[this.envIdx] = Math.max(this.save.stars[this.envIdx] || 0, r.cans > 80 ? 3 : r.cans > 40 ? 2 : 1); this.save.unlocked = Math.max(this.save.unlocked, Math.min(6, this.envIdx + 2)); }
    const have = { cans: r.cans, dist: r.z, stunts: r.stuntsDone, dodged: r.dodged, magnets: r.magnets };
    for (const m of MISSIONS) if (!this.save.done[m.id] && have[m.kind] >= m.goal) this.save.done[m.id] = true;
    if (!this.save.done.cans50 && this.save.totalCans >= 50) this.save.done.cans50 = true;
    this.post({ type: 'save', save: this.save });
    this.sound.play(won ? 'win' : 'over');
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-logo', style: 'color:#ff4a4a' }, won ? I.t('won') : I.t('over')), h('div', { class: 'fz-row' }, h('span', {}, I.t('score')), h('span', {}, I.num(sc))), h('div', { class: 'fz-row' }, h('span', {}, I.t('best')), h('span', {}, I.num(this.save.best[this.envIdx] || sc))), h('div', { class: 'fz-row' }, h('span', {}, '🥤'), h('span', {}, I.num(r.cans))),
      h('button', { class: 'fz-btn alt', onclick: () => this.start(this.envIdx) }, '🔄 ', I.t('restart')), won && this.envIdx < 5 ? h('button', { class: 'fz-btn', onclick: () => this.start(this.envIdx + 1) }, '▶ ', I.t('play')) : null, h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))));
  }

  _frame() { const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused && this.run) this._update(dt); this._render(dt); this._followPano(); }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'can': this.sound.play('can'); this.voice.say('pickup'); break; case 'jump': this.sound.play('jump'); break; case 'slide': this.sound.play('slide'); break; case 'land': this.sound.play('land'); break;
        case 'stunt': this.sound.play('stunt'); this.voice.say('trick'); this.fx.push({ t: 0, life: 1.1, text: '⭐ STUNT +300' }); break; case 'ramp': this.sound.play('jump'); break;
        case 'power': this.sound.play('power'); this.voice.say('charge'); this.fx.push({ t: 0, life: 1, text: { magnet: '🧲', shield: '🛡️', star: '⭐' }[e.kind] }); break;
        case 'shieldHit': this.sound.play('shield'); this.voice.say('near'); this.shake = 0.4; break; case 'smash': this.sound.play('crash'); this.voice.say('bump'); break;
        case 'stumble': this.sound.play('crash'); this.voice.say('bump'); this.shake = 0.5; this.fx.push({ t: 0, life: 1, text: '💪' }); break;
        case 'over': this.sound.play('crash'); this.shake = 0.8; this._finish(false); break; case 'won': this._finish(true); break;
        default: break;
      }
    }
    this.scoreEl.textContent = `${I.t('score')} ${I.num(Math.round(r.score))}`; this.canEl.textContent = `🥤 ${I.num(r.cans)}`; this.distEl.textContent = `🏃 ${I.num(Math.round(r.z))} ${I.t('m')}`; this.heartEl.textContent = '❤️'.repeat(Math.max(0, r.hearts));
    this.pwrEl.textContent = [r.magnet > 0 ? '🧲' : '', r.shield > 0 ? '🛡️' : '', r.starT > 0 ? '⭐' : ''].join(' ');
    this.pwrEl.parentElement.style.display = this.pwrEl.textContent.trim() ? 'flex' : 'none';
    for (const f of this.fx) f.t += dt; this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _mesh(t) {
    let m = this.meshes.get(t.id);
    if (!m) { m = t.kind === 'can' ? makeCan() : makeObstacle(t.kind, t.id); this.world.add(m); this.meshes.set(t.id, m); }
    return m;
  }

  _render(dt) {
    const r = this.run; const play = !!r; const zr = play ? r.z : (this.demoZ += dt * 18);
    if (play) {
      const live = new Set();
      for (const t of r.things) {
        if (t.done && t.kind !== 'ramp') continue;
        if (t.z - zr > 140) continue;
        const m = this._mesh(t); live.add(t.id);
        const x = t.lane === -1 ? 0 : LANES[t.lane];
        m.position.set(-x, t.kind === 'can' ? t.y - 0.4 : t.kind === 'magnet' || t.kind === 'shield' || t.kind === 'star' ? 0.5 + Math.sin(this.clock * 3) * 0.2 : 0, t.z);
        if (t.kind === 'can' || t.kind === 'magnet' || t.kind === 'star') m.rotation.y = this.clock * 3;
        if (t.kind === 'movecar') m.rotation.y = 0;
        m.visible = true;
      }
      for (const [id, m] of this.meshes) if (!live.has(id)) { this.world.remove(m); this.meshes.delete(id); }
      // the hero
      const hr = this.hero; const k = this.clock * 14 * (r.speed / 18);
      hr.position.set(-r.x, r.y, zr);
      const b = hr.userData.body; const run = r.y < 0.05;
      hr.userData.legL.rotation.x = run ? Math.sin(k) * 0.9 : -0.6; hr.userData.legR.rotation.x = run ? -Math.sin(k) * 0.9 : 0.5;
      hr.userData.armL.rotation.x = run ? -Math.sin(k) * 0.9 : -2.6 + (r.stunt ? Math.sin(this.clock * 20) * 0.3 : 0); hr.userData.armR.rotation.x = run ? Math.sin(k) * 0.9 : -2.6;
      b.rotation.x = r.slide > 0 ? -1.1 : 0.12; b.position.y = r.slide > 0 ? -0.5 : run ? Math.abs(Math.sin(k)) * 0.12 : 0;
      b.rotation.z = (LANES[r.lane] - r.x) * -0.06 * -1; b.rotation.y = r.stunt && !run ? this.clock * 14 : 0;
      hr.userData.shield.visible = r.shield > 0 || r.starT > 0;
      hr.userData.shadow.position.y = 0.03 - r.y; hr.userData.shadow.scale.setScalar(Math.max(0.4, 1 - r.y * 0.1));
    } else { this.hero.position.set(0, 0, zr + 4); this.hero.userData.legL.rotation.x = Math.sin(this.clock * 12) * 0.9; this.hero.userData.legR.rotation.x = -Math.sin(this.clock * 12) * 0.9; this.hero.userData.armL.rotation.x = Math.sin(this.clock * 12) * 0.9; this.hero.userData.armR.rotation.x = -Math.sin(this.clock * 12) * 0.9; }
    // scenery and road markings roll along with the hero
    const step = 16;
    this.sideL.forEach((b, i) => { const z = Math.floor((zr - 20) / (step * 1.8)) * (step * 1.8) + i * step * 1.8 / 1; b.m.position.set(-11 - (i % 3) * 0.6, 0, z); });
    this.sideR.forEach((b, i) => { const z = Math.floor((zr - 20) / (step * 1.8)) * (step * 1.8) + i * step * 1.8 / 1 + 7; b.m.position.set(11 + (i % 3) * 0.6, 0, z); });
    this.lanes.forEach((d, i) => { const row = Math.floor(i / 2); const z = Math.floor((zr - 6) / 6) * 6 + row * 6; d.position.set(i % 2 ? 1.3 : -1.3, 0.02, z); });
    this.road.position.set(0, -0.1, zr + 150);
    // camera follows, with a little shake on crashes and a wider view at speed
    this.shake = Math.max(0, (this.shake || 0) - dt * 2);
    const sh = this.shake * 0.4;
    const cx = play ? -r.x * 0.5 : 0;
    this.camera.position.set(cx + (Math.random() - 0.5) * sh, (this.cw < this.ch ? 7 : 5.6) + (play ? r.y * 0.3 : 0), zr - (this.cw < this.ch ? 10 : 8.5));
    this.camera.lookAt(cx * 0.6, 1.6, zr + 14);
    this.renderer.render(this.scene, this.camera);
    this._floaters();
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    this.fx.forEach((f, i) => { let el = this.fxEls[i]; if (!el) { el = h('div', { style: 'position:absolute;left:50%;top:38%;font-weight:900;color:#ffe04a;text-shadow:0 0 8px #000,0 0 3px #000;pointer-events:none;font-size:calc(var(--u)*6)' }); this.layer.append(el); this.fxEls[i] = el; } el.style.display = 'block'; el.style.opacity = String(1 - f.t / f.life); el.style.transform = `translate(-50%,${-f.t * 60}px)`; el.textContent = f.text; });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.FizzRunner = api;
export default api;
