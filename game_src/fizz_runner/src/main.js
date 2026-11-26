// «فيزمان» — Fizz Man, TOY TOWN overhaul (2026-11-26). Entry: window.FizzRunner.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D endless runner in the spirit of the classic soda-hero arcade game, with an ORIGINAL blue-and-silver hero (no real brands),
// now living in a cozy miniature TOY TOWN: felt-and-wood matte toy buildings, pastel pops, rounded shapes, tiny details.
// Overhaul: rebuilt world/hero/obstacles, squash-and-stretch movement, fizz particles, chase camera. The RULES (sim.js) are untouched.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Run, ENVS, LANES, MISSIONS, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['فيزو الشاطر', 'Fizzo the Brave'], play: ['العب', 'PLAY'], levels: ['المراحل', 'LEVELS'], high: ['أعلى النقاط', 'HIGH SCORE'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'], missions: ['المهمات', 'MISSIONS'],
  score: ['النقاط', 'SCORE'], best: ['الأفضل', 'BEST'], restart: ['إعادة', 'RESTART'], home: ['الرئيسية', 'HOME'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], sound: ['الصوت', 'Sound'],
  over: ['انتهت اللعبة', 'GAME OVER'], won: ['وصلت للنهاية! 🏆', 'LEVEL COMPLETE! 🏆'], select: ['اختار المرحلة', 'SELECT LEVEL'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  how: ['اسحب يمين/شمال لتغيير الحارة، فوق للقفز، تحت للانزلاق', 'Swipe left/right to change lane, up to jump, down to slide'], m: ['م', 'm'], tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  done: ['تمت', 'Done'], total: ['العلب الكلية', 'Total cans'], dist: ['المسافة الكلية', 'Total distance'], back: ['رجوع', 'Back'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);

// Toy Town palettes: matte felt/wood colours, pastel pops, warm light.
const LOOKS = {
  city:     { skyTop: 0x4f9be0, skyBot: 0xd8ecfa, sun: 0xfff2dc, sunI: 1.6, hemiSky: 0xbfdcf8, hemiGnd: 0x77695a, hemiI: 0.85, fog: 0xc2dcec, fogFar: 200, grass: 0x598246, wall: [0xc4ad90, 0xb2bac0, 0xd0b896, 0xa49c8e], win: 0x44525e, lit: 0xffe2a0, litR: 0.12, accent: 0xd83a2a, tree: 0x4a7c3a, skySil: 0x5a6f8a, sunUv: [0.72, 0.28] },
  downtown: { skyTop: 0x1e2c58, skyBot: 0xf8924c, sun: 0xffc890, sunI: 1.25, hemiSky: 0x8898c8, hemiGnd: 0x4a4038, hemiI: 0.75, fog: 0x9a7a68, fogFar: 180, grass: 0x4a6a40, wall: [0x8a7a6c, 0x6a7078, 0x9a8870, 0x5a6068], win: 0x1c2833, lit: 0xffd88a, litR: 0.45, accent: 0xffb82a, tree: 0x3f6a38, skySil: 0x2c3450, sunUv: [0.3, 0.42] },
  shops:    { skyTop: 0x101a3c, skyBot: 0x3c4a7c, sun: 0xaac8ff, sunI: 0.7, hemiSky: 0x5a6a9a, hemiGnd: 0x3a3440, hemiI: 0.7, fog: 0x2c3a5c, fogFar: 150, grass: 0x3c5638, wall: [0x7a7268, 0x5c6470, 0x8a7a6a, 0x646a74], win: 0x141c28, lit: 0xfff0b8, litR: 0.6, accent: 0x3ae0d0, tree: 0x3a6034, skySil: 0x1c2438, sunUv: [0.6, 0.2], neon: true },
  industry: { skyTop: 0x8a98a8, skyBot: 0xd8dcda, sun: 0xf0ead8, sunI: 1.1, hemiSky: 0xb8c0c8, hemiGnd: 0x5c564c, hemiI: 0.9, fog: 0xb8bcb8, fogFar: 170, grass: 0x5a7048, wall: [0xb09c84, 0x929498, 0xb8a488, 0x84888e], win: 0x3c4a56, lit: 0xd8e8f0, litR: 0.1, accent: 0xe8782a, tree: 0x4a6a3c, skySil: 0x5c646e, sunUv: [0.25, 0.3] },
  highway:  { skyTop: 0x7c3c9a, skyBot: 0xffb05c, sun: 0xffd8a0, sunI: 1.5, hemiSky: 0xc8a088, hemiGnd: 0x6a5240, hemiI: 0.8, fog: 0xd89a70, fogFar: 190, grass: 0x9a8a50, wall: [0xb89a78, 0xa08a6a, 0xc0a880, 0x94805e], win: 0x2c3038, lit: 0xffe2a0, litR: 0.2, accent: 0xffb82a, tree: 0x6a7a40, skySil: 0x6a4460, sunUv: [0.5, 0.4] },
  bonus:    { skyTop: 0x3a7cd8, skyBot: 0xbfe8fa, sun: 0xfff6e0, sunI: 1.55, hemiSky: 0xc0e0f8, hemiGnd: 0x6a5c78, hemiI: 0.9, fog: 0xa8d0e8, fogFar: 190, grass: 0x6a9a58, wall: [0xb8b0c0, 0x98a8b8, 0xc8b898, 0x8898a8], win: 0x24303c, lit: 0xfff0b0, litR: 0.25, accent: 0xe83a5a, tree: 0x4a8a4a, skySil: 0x4a5c88, sunUv: [0.68, 0.25] },
};

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'can': this.tone('square', hz(88), t, 0.05, 0.04); this.tone('square', hz(95), t + 0.05, 0.08, 0.04); this.noise(t, 0.12, 0.05, 'highpass', 3000, 1); break;
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

// Shared geometries and matte felt materials (rough, not shiny).
const geo = {
  sphere: new THREE.SphereGeometry(0.5, 18, 14),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 16),
  cone: new THREE.ConeGeometry(0.5, 1, 12),
  rbox: new RoundedBoxGeometry(1, 1, 1, 2, 0.12),
  box: new THREE.BoxGeometry(1, 1, 1),
  rboxS: new RoundedBoxGeometry(1, 1, 1, 2, 0.25),
};
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color: c, emissive: em, roughness: 0.94, metalness: 0.0 })); return mats.get(k); };
const MS = (c, em = 0) => { const k = `s${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color: c, emissive: em, roughness: 0.25, metalness: 0.35 })); return mats.get(k); }; // shiny bits (visor, can top)
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

// Soft round sprite for particles, drawn once on a canvas.
function dotTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d'); const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.7, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// One pool of fizz particles (bubbles, dust, sparkles).
class Fizz {
  constructor(scene, n = 260) {
    this.n = n; this.pos = new Float32Array(n * 3); this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.col = new Float32Array(n * 3);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ size: 0.45, map: dotTexture(), transparent: true, opacity: 0.9, vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.pts.frustumCulled = false; this.next = 0; this.c = new THREE.Color();
    scene.add(this.pts);
    for (let i = 0; i < n; i++) this.pos[i * 3 + 1] = -100;
  }
  burst(x, y, z, color, count = 10, speed = 3, up = 2.4) {
    this.c.set(color);
    for (let k = 0; k < count; k++) {
      const i = this.next = (this.next + 1) % this.n;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
      this.vel[i * 3] = (Math.random() - 0.5) * speed; this.vel[i * 3 + 1] = Math.random() * up + 0.6; this.vel[i * 3 + 2] = (Math.random() - 0.5) * speed;
      this.col[i * 3] = this.c.r; this.col[i * 3 + 1] = this.c.g; this.col[i * 3 + 2] = this.c.b;
      this.life[i] = 0.6 + Math.random() * 0.5;
    }
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.vel[i * 3 + 1] -= 2.2 * dt;
      if (this.life[i] <= 0) this.pos[i * 3 + 1] = -100;
    }
    this.g.attributes.position.needsUpdate = true; this.g.attributes.color.needsUpdate = true;
  }
}

// ---------- Toy Town scenery builders ----------
// Every prop is a small Group of matte rounded meshes; the street recycles them as the hero runs.

function toyHouse(body, roof, w = 6, hgt = 5, d = 6) {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(body), 0, hgt / 2, 0, w, hgt, d));
  const r = mesh(geo.cone, M(roof), 0, hgt + 1.1, 0, w * 0.86, 2.2, d * 0.86); r.rotation.y = Math.PI / 4; g.add(r); // pyramid toy roof
  g.add(mesh(geo.rbox, M(0xfff8ec, 0x554433), 0, 1.15, d / 2 + 0.05, 1.1, 2.3, 0.15)); // warm door
  for (const sx of [-1, 1]) for (const sy of [0, 1]) g.add(mesh(geo.rbox, M(0xfff2c8, 0x665522), sx * w * 0.28, 2.6 + sy * 1.9, d / 2 + 0.05, 0.95, 0.95, 0.12)); // lit windows
  for (const sx of [-1, 1]) g.add(mesh(geo.rbox, M(0xfff2c8, 0x665522), sx * (w / 2 + 0.05), 2.9, 0, 0.12, 0.9, 0.9)); // side windows (seen from the road)
  g.add(mesh(geo.cyl, M(0xd8b8a0), w * 0.3, hgt + 1.6, -d * 0.15, 0.36, 1.6, 0.36)); // chimney
  return g;
}
function toyShop(body, awn, w = 6.4, hgt = 4.2, d = 6) {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(body), 0, hgt / 2, 0, w, hgt, d));
  for (let i = 0; i < 5; i++) g.add(mesh(geo.rbox, M(i % 2 ? 0xffffff : awn), -w / 2 + 0.7 + i * (w - 1.4) / 4, hgt - 0.4, d / 2 + 0.75, (w - 1.4) / 4 - 0.08, 0.28, 1.6)); // striped awning
  g.add(mesh(geo.rbox, M(0xbfe8ff, 0x2a4a5a), 0, 1.7, d / 2 + 0.06, w * 0.68, 1.9, 0.12)); // shop window
  g.add(mesh(geo.cyl, M(awn, 0x333333), 0, hgt + 0.7, d / 2 - 0.4, 0.8, 0.24, 0.8).rotateX(Math.PI / 2)); // blank sign disc
  return g;
}
function toyTower(body, roof, w = 6.5, hgt = 12, d = 6.5) {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(body), 0, hgt / 2, 0, w, hgt, d));
  g.add(mesh(geo.rboxS, M(roof), 0, hgt + 0.35, 0, w * 1.04, 0.7, d * 1.04)); // roof lip
  const rows = Math.max(2, Math.floor(hgt / 3));
  for (let rI = 0; rI < rows; rI++) for (const sx of [-1, 0, 1]) g.add(mesh(geo.rbox, M(0xfff2c8, 0x665522), sx * w * 0.28, 2.2 + rI * 2.8, d / 2 + 0.05, 0.85, 1.1, 0.12));
  return g;
}
function toyFactory(body, roof) {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(body), 0, 3, 0, 8.5, 6, 7));
  g.add(mesh(geo.rboxS, M(roof), 0, 6.3, 0, 8.9, 0.7, 7.4));
  g.add(mesh(geo.cyl, M(0xc8b8a8), 2.4, 8.6, -1.4, 0.85, 5.4, 0.85), mesh(geo.cyl, M(0xc8b8a8), -2.2, 7.9, -1.6, 0.7, 4, 0.7)); // chimneys
  g.add(mesh(geo.sphere, M(0xf4f4f4), 2.4, 12, -1.4, 1.5, 1.1, 1.5), mesh(geo.sphere, M(0xeeeeee), 3.2, 12.8, -1.6, 1.1, 0.8, 1.1)); // smoke puffs
  for (const sx of [-1, 0, 1]) g.add(mesh(geo.rbox, M(0xffe8b0, 0x554411), sx * 2.4, 2.6, 3.56, 1.2, 1.2, 0.12));
  g.add(mesh(geo.cyl, M(0xb86848), -3.4, 0.8, 4.2, 0.8, 1.6, 0.8), mesh(geo.cyl, M(0x987858), -1.9, 0.7, 4.3, 0.7, 1.4, 0.7)); // barrels out front
  return g;
}
function toyTree(crown, s = 1) {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0xa87848), 0, 1.1 * s, 0, 0.42 * s, 2.2 * s, 0.42 * s));
  g.add(mesh(geo.sphere, M(crown), 0, 2.9 * s, 0, 2.4 * s, 2.2 * s, 2.4 * s), mesh(geo.sphere, M(crown), 0.8 * s, 2.2 * s, 0.3 * s, 1.4 * s, 1.3 * s, 1.4 * s));
  return g;
}
function lampPost() {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0x8a94a8), 0, 2.2, 0, 0.18, 4.4, 0.18));
  g.add(mesh(geo.sphere, M(0xfff0b8, 0xffd888), 0, 4.6, 0, 0.75, 0.75, 0.75)); // warm glow bulb
  return g;
}
function fenceRow(col = 0xffffff) {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) g.add(mesh(geo.rbox, M(col), -2 + i, 0.55, 0, 0.16, 1.1, 0.16));
  g.add(mesh(geo.rbox, M(col), 0, 0.8, 0, 4.4, 0.16, 0.14));
  return g;
}
function hydrant() { const g = new THREE.Group(); g.add(mesh(geo.cyl, M(0xe84a3a), 0, 0.5, 0, 0.4, 1, 0.4), mesh(geo.sphere, M(0xe84a3a), 0, 1.05, 0, 0.45, 0.4, 0.45), mesh(geo.cyl, M(0xffd23a), 0, 0.7, 0, 0.44, 0.14, 0.44)); return g; }
function bench() { const g = new THREE.Group(); g.add(mesh(geo.rbox, M(0xc89058), 0, 0.55, 0, 2.2, 0.18, 0.8), mesh(geo.rbox, M(0xc89058), 0, 1.05, -0.34, 2.2, 0.8, 0.14)); for (const x of [-0.9, 0.9]) g.add(mesh(geo.rbox, M(0x8a6848), x, 0.28, 0, 0.16, 0.55, 0.7)); return g; }
function bush(col = 0x6ac88a) { const g = new THREE.Group(); g.add(mesh(geo.sphere, M(col), 0, 0.6, 0, 1.3, 1, 1.3), mesh(geo.sphere, M(col), 0.7, 0.45, 0.3, 0.8, 0.7, 0.8)); return g; }
function billboard(accent) { const g = new THREE.Group(); g.add(mesh(geo.cyl, M(0x9aa4b8), 0, 2.6, 0, 0.22, 5.2, 0.22), mesh(geo.rbox, M(0xfff4dc), 0, 5.8, 0, 5.4, 2.6, 0.3), mesh(geo.rbox, M(accent), 0, 6.9, 0.18, 5, 0.5, 0.06), mesh(geo.cyl, M(accent, 0x444444), -1.2, 5.4, 0.2, 0.65, 0.14, 0.65).rotateX(Math.PI / 2)); return g; }
function giantCan() { const g = new THREE.Group(); g.add(mesh(geo.cyl, MS(0x2a6ae8, 0x0a2a6a), 0, 2.6, 0, 2.2, 5.2, 2.2), mesh(geo.cyl, MS(0xe8ecf4), 0, 5.25, 0, 2.0, 0.24, 2.0), mesh(geo.cyl, M(0xffffff), 0, 2.6, 0, 2.3, 1.4, 2.3)); return g; }
function lollipop(col) { const g = new THREE.Group(); g.add(mesh(geo.cyl, M(0xfff4ec), 0, 2, 0, 0.3, 4, 0.3), mesh(geo.sphere, M(col, 0x442244), 0, 4.6, 0, 2, 2, 2), mesh(geo.sphere, M(0xffffff, 0x555555), -0.5, 5.1, 0.9, 0.5, 0.5, 0.5)); return g; }
function toyCloud(s = 1) { const g = new THREE.Group(); g.add(mesh(geo.sphere, M(0xffffff), 0, 0, 0, 3.2 * s, 2 * s, 2.4 * s), mesh(geo.sphere, M(0xffffff), 2 * s, -0.3 * s, 0, 2 * s, 1.4 * s, 1.6 * s), mesh(geo.sphere, M(0xffffff), -2 * s, -0.35 * s, 0.2 * s, 1.8 * s, 1.3 * s, 1.5 * s)); return g; }

// One side-block of street, filled per environment.

// ---------- Procedural textures (canvas): asphalt, facades, storefronts, ads, sky ----------
const texCache = new Map();
let seedRnd = 987654321;
const srnd = () => (seedRnd = (seedRnd * 16807) % 2147483647) / 2147483647;
function texCanvas(key, w, hgt, fn, repX = 1, repY = 1) {
  const k = `${key}|${repX}|${repY}`;
  if (texCache.has(k)) return texCache.get(k);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = hgt;
  fn(cv.getContext('2d'), w, hgt);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repX, repY); t.anisotropy = 4;
  texCache.set(k, t); return t;
}
const hx = (c) => `#${c.toString(16).padStart(6, '0')}`;
function asphaltTex(repY) {
  return texCanvas('asphalt', 256, 256, (c, w, h) => {
    c.fillStyle = '#35383d'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2400; i++) { const v = 42 + srnd() * 46; c.fillStyle = `rgba(${v},${v},${v + 6},${0.15 + srnd() * 0.22})`; c.fillRect(srnd() * w, srnd() * h, 1.6, 1.6); }
    for (let i = 0; i < 6; i++) { c.strokeStyle = 'rgba(16,17,20,0.55)'; c.lineWidth = 0.8 + srnd(); c.beginPath(); let x = srnd() * w, y = srnd() * h; c.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (srnd() - 0.5) * 46; y += (srnd() - 0.5) * 46; c.lineTo(x, y); } c.stroke(); }
    for (let i = 0; i < 3; i++) { c.fillStyle = 'rgba(22,23,27,0.4)'; c.fillRect(srnd() * w, srnd() * h, 28 + srnd() * 44, 18 + srnd() * 30); }
  }, 1, repY);
}
function sidewalkTex(repY) {
  return texCanvas('sidewalk', 128, 128, (c, w, h) => {
    c.fillStyle = '#8d887d'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 700; i++) { const v = 105 + srnd() * 32; c.fillStyle = `rgba(${v},${v - 4},${v - 12},${0.12 + srnd() * 0.18})`; c.fillRect(srnd() * w, srnd() * h, 1.4, 1.4); }
    c.strokeStyle = 'rgba(60,56,50,0.7)'; c.lineWidth = 2;
    for (let x = 0; x <= w; x += 42) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h); c.stroke(); }
    c.strokeStyle = 'rgba(90,86,78,0.4)'; c.beginPath(); c.moveTo(0, 0); c.lineTo(w, 0); c.stroke();
  }, 1, repY);
}
function facadeTex(base, win, lit, floors, cols, litR) {
  const key = `facade|${base}|${floors}|${cols}|${litR}`;
  return texCanvas(key, 128, 64 * floors, (c, w, h) => {
    c.fillStyle = hx(base); c.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i++) { c.fillStyle = `rgba(0,0,0,${0.03 + srnd() * 0.06})`; c.fillRect(srnd() * w, srnd() * h, 2, 2); }
    const cw = w / cols, ch = h / floors;
    for (let f = 0; f < floors; f++) for (let x = 0; x < cols; x++) {
      const isLit = srnd() < litR;
      c.fillStyle = isLit ? hx(lit) : hx(win);
      c.fillRect(x * cw + cw * 0.2, f * ch + ch * 0.22, cw * 0.6, ch * 0.52);
      c.fillStyle = 'rgba(255,255,255,0.14)';
      c.fillRect(x * cw + cw * 0.2, f * ch + ch * 0.22, cw * 0.6, ch * 0.1);
      c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(x * cw + cw * 0.17, f * ch + ch * 0.19, cw * 0.66, 2);
    }
    const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.28)');
    c.fillStyle = gr; c.fillRect(0, 0, w, h);
  });
}
function storeTex(band, accent) {
  const key = `store|${band}|${accent}`;
  return texCanvas(key, 256, 64, (c, w, h) => {
    c.fillStyle = hx(band); c.fillRect(0, 0, w, h);
    c.fillStyle = hx(accent); c.fillRect(0, 0, w, 14); // sign band
    c.fillStyle = 'rgba(255,255,255,0.85)'; c.fillRect(6, 3, w - 12, 2);
    for (const [x, ww] of [[10, 70], [92, 70], [176, 70]]) { // glass shopfronts
      const g = c.createLinearGradient(x, 20, x, h - 6);
      g.addColorStop(0, '#2a3c4c'); g.addColorStop(0.5, '#3c5468'); g.addColorStop(1, '#1c2833');
      c.fillStyle = g; c.fillRect(x, 20, ww, h - 26);
      c.fillStyle = 'rgba(255,255,255,0.18)'; c.beginPath(); c.moveTo(x + 8, h - 6); c.lineTo(x + 26, 20); c.lineTo(x + 36, 20); c.lineTo(x + 18, h - 6); c.fill();
    }
    c.fillStyle = '#20262c'; c.fillRect(84, 20, 6, h - 20); // door split
  });
}
function adTex(style, accent) {
  const key = `ad|${style}|${accent}`;
  return texCanvas(key, 256, 128, (c, w, h) => {
    if (style === 0) { // soda globe ad
      c.fillStyle = '#12357c'; c.fillRect(0, 0, w, h);
      const g = c.createRadialGradient(w / 2, h / 2, 8, w / 2, h / 2, 60);
      g.addColorStop(0, '#2a5ce8'); g.addColorStop(1, '#0c2460');
      c.fillStyle = g; c.beginPath(); c.arc(w / 2, h / 2, 46, 0, 7); c.fill();
      c.fillStyle = '#e83a3a'; c.beginPath(); c.arc(w / 2, h / 2, 46, Math.PI * 1.05, Math.PI * 1.95); c.fill();
      c.fillStyle = '#fff'; c.beginPath(); c.ellipse(w / 2, h / 2, 46, 14, 0, 0, Math.PI); c.fill();
      c.fillStyle = '#fff'; c.font = 'bold 26px sans-serif'; c.textAlign = 'center'; c.fillText('FIZZ', w / 2, h - 14);
    } else if (style === 1) { // diagonal stripes
      c.fillStyle = '#f4f4f0'; c.fillRect(0, 0, w, h);
      c.fillStyle = hx(accent);
      for (let x = -h; x < w; x += 36) { c.beginPath(); c.moveTo(x, h); c.lineTo(x + h, 0); c.lineTo(x + h + 18, 0); c.lineTo(x + 18, h); c.fill(); }
      c.fillStyle = '#12357c'; c.fillRect(0, h - 24, w, 24);
      c.fillStyle = '#fff'; c.font = 'bold 16px sans-serif'; c.textAlign = 'center'; c.fillText('ICE COLD', w / 2, h - 7);
    } else { // big can silhouette
      c.fillStyle = '#e83a3a'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#f8f8f4'; c.fillRect(w / 2 - 22, 18, 44, 92);
      c.fillStyle = '#12357c'; c.fillRect(w / 2 - 22, 46, 44, 28);
      c.fillStyle = '#fff'; c.font = 'bold 20px sans-serif'; c.textAlign = 'center'; c.fillText('FIZZ', w / 2, 66);
      c.fillStyle = 'rgba(255,255,255,0.5)'; c.fillRect(w / 2 - 16, 22, 6, 84);
    }
  });
}
function skylineTex(col, seedKey) {
  const key = `skyline|${col}|${seedKey}`;
  return texCanvas(key, 1024, 160, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.fillStyle = hx(col);
    let x = 0;
    while (x < w) {
      const bw = 30 + srnd() * 70, bh = 40 + srnd() * 100;
      c.fillRect(x, h - bh, bw, bh);
      if (srnd() < 0.3) c.fillRect(x + bw * 0.3, h - bh - 14, bw * 0.2, 14); // rooftop box
      if (srnd() < 0.25) { c.fillRect(x + bw * 0.45, h - bh - 26, 3, 26); } // antenna
      x += bw + 4 + srnd() * 20;
    }
  });
}
function skyTex(top, bot, sunCol, sunU, sunV) {
  const key = `sky|${top}|${bot}|${sunCol}|${sunU}`;
  return texCanvas(key, 128, 512, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, hx(top)); g.addColorStop(0.62, hx(bot)); g.addColorStop(1, hx(bot));
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    const sx = w * sunU, sy = h * sunV;
    const sg = c.createRadialGradient(sx, sy, 2, sx, sy, 70);
    sg.addColorStop(0, hx(sunCol)); sg.addColorStop(0.25, `${hx(sunCol)}cc`); sg.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = sg; c.fillRect(0, 0, w, h);
    c.fillStyle = hx(sunCol); c.beginPath(); c.arc(sx, sy, 12, 0, 7); c.fill();
  });
}

// ---------- City builders: textured facades, storefronts, rooftop props ----------
function cityBlock(L, i, kind) {
  const g = new THREE.Group();
  const pick = (arr, k) => arr[(i * 3 + k) % arr.length];
  const w = 7 + (i % 3), d = 7 + ((i + 2) % 3);
  const hgt = kind === 'tower' ? 16 + (i % 4) * 4.5 : kind === 'low' ? 5.5 + (i % 3) * 1.4 : 8.5 + (i % 3) * 2.2;
  const base = pick(L.wall, 0);
  const fTex = facadeTex(base, L.win, L.lit, Math.max(2, Math.round(hgt / 3)), Math.max(2, Math.round(w / 2)), L.litR);
  g.add(mesh(geo.box, new THREE.MeshStandardMaterial({ map: fTex, roughness: 0.92 }), 0, hgt / 2, 0, w, hgt, d));
  const sTex = storeTex(0x3a3f46, L.accent);
  g.add(mesh(geo.box, new THREE.MeshStandardMaterial({ map: sTex, roughness: 0.7 }), 0, 1.5, d / 2 + 0.12, w * 0.98, 3, 0.24));
  g.add(mesh(geo.box, M(0x565a60), 0, hgt + 0.2, 0, w + 0.4, 0.4, d + 0.4)); // roof slab
  if (i % 2 === 0) { // water tank
    g.add(mesh(geo.cyl, M(0x8a6a4a), w * 0.22, hgt + 1.5, -d * 0.15, 1.7, 2.4, 1.7));
    g.add(mesh(geo.cone, M(0x6a4a34), w * 0.22, hgt + 3, -d * 0.15, 1.9, 0.9, 1.9));
    for (const lx of [-0.6, 0.6]) g.add(mesh(geo.box, M(0x5a4636), w * 0.22 + lx, hgt + 0.35, -d * 0.15, 0.16, 0.7, 0.16));
  } else { // AC units + ducts
    g.add(mesh(geo.box, M(0x9aa0a6), -w * 0.2, hgt + 0.7, 0, 1.6, 1, 1.4));
    g.add(mesh(geo.box, M(0x8a9096), w * 0.18, hgt + 0.55, d * 0.2, 1.2, 0.7, 1));
  }
  if (i % 4 === 0) { g.add(mesh(geo.cyl, M(0x444a52), 0, hgt + 2.4, 0, 0.08, 4, 0.08)); g.add(mesh(geo.sphere, M(0xe83a3a, 0x661111), 0, hgt + 4.5, 0, 0.22, 0.22, 0.22)); } // antenna + beacon
  if (L.neon) g.add(mesh(geo.box, M(L.accent, L.accent), 0, 3.4, d / 2 + 0.16, w * 0.5, 0.5, 0.1)); // neon strip
  return g;
}
function warehouse(L, i) {
  const g = new THREE.Group();
  const pick = (arr, k) => arr[(i * 3 + k) % arr.length];
  const w = 10 + (i % 3) * 2, d = 9, hgt = 6 + (i % 2) * 1.5;
  g.add(mesh(geo.box, new THREE.MeshStandardMaterial({ map: facadeTex(pick(L.wall, 2), L.win, L.lit, 2, 6, L.litR * 0.5), roughness: 0.95 }), 0, hgt / 2, 0, w, hgt, d));
  g.add(mesh(geo.box, M(0x606468), 0, hgt + 0.18, 0, w + 0.5, 0.36, d + 0.5));
  g.add(mesh(geo.box, M(0x4a4e54), 0, 2.2, d / 2 + 0.1, 3.6, 4.4, 0.2)); // roller door
  for (let k = 0; k < 6; k++) g.add(mesh(geo.box, M(0x3c4046), 0, 0.5 + k * 0.7, d / 2 + 0.22, 3.6, 0.12, 0.02));
  g.add(mesh(geo.cyl, M(0x8a8f96), -w * 0.3, hgt + 1, -d * 0.2, 0.9, 1.6, 0.9)); // vent stack
  g.add(mesh(geo.cyl, M(L.accent), w * 0.32, hgt + 0.8, 0, 0.5, 1.2, 0.5));
  return g;
}
function siloTank(col) {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, MS(0xd8dde4), 0, 3.4, 0, 2.6, 6.8, 2.6));
  g.add(mesh(geo.sphere, MS(0xc8ccd4), 0, 6.8, 0, 2.6, 1.3, 2.6));
  g.add(mesh(geo.cyl, M(col, 0x222222), 0, 3.4, 0, 2.72, 1.1, 2.72)); // painted band
  for (const x of [-0.9, 0.9]) g.add(mesh(geo.box, M(0x5a5e64), x, 0.4, 0, 0.24, 0.8, 0.24));
  g.add(mesh(geo.cyl, M(0x7a8088), 1.8, 1.4, 0.4, 0.3, 2.8, 0.3).rotateZ(0.5)); // pipe
  return g;
}
function powerPole() {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0x6a5644), 0, 3.4, 0, 0.2, 6.8, 0.2));
  g.add(mesh(geo.box, M(0x6a5644), 0, 6, 0, 2.6, 0.14, 0.14));
  for (const x of [-1.1, 0, 1.1]) g.add(mesh(geo.sphere, M(0x3a3f46), x, 5.86, 0, 0.14, 0.18, 0.14));
  return g;
}
function trafficLight() {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0x3c4046), 0, 2.4, 0, 0.14, 4.8, 0.14));
  g.add(mesh(geo.box, M(0x2c3036), 0, 4.6, 0.3, 0.5, 1.3, 0.4));
  g.add(mesh(geo.sphere, M(0xe83a3a, 0x881111), 0, 5, 0.44, 0.14, 0.14, 0.1));
  g.add(mesh(geo.sphere, M(0xffc83a, 0x665511), 0, 4.6, 0.44, 0.14, 0.14, 0.1));
  g.add(mesh(geo.sphere, M(0x3ac85a, 0x115522), 0, 4.2, 0.44, 0.14, 0.14, 0.1));
  return g;
}
const PARK_COLORS = [0xb8bcc0, 0x5a6a7a, 0x7a2a2a, 0x2a4a6a, 0xc8a83a, 0x3a3a3e];
function parkedCar(col) {
  const g = toyCar(col);
  g.rotation.y = Math.PI / 2;
  return g;
}
function billboardV2(L, i) {
  const g = new THREE.Group();
  const style = i % 3;
  g.add(mesh(geo.cyl, M(0x5a5e66), 0, 3, 0, 0.3, 6, 0.3));
  g.add(mesh(geo.box, M(0x3c4046), 0, 7, -0.2, 6.6, 3.4, 0.3));
  const panel = mesh(geo.box, new THREE.MeshStandardMaterial({ map: adTex(style, L.accent), roughness: 0.6 }), 0, 7, 0, 6.2, 3, 0.12);
  g.add(panel);
  g.add(mesh(geo.box, M(L.accent, L.accent), 0, 8.8, 0, 6.4, 0.24, 0.24)); // lit top strip
  return g;
}

function makeBlock(envId, i, L, rich) {
  const g = new THREE.Group();
  const pick = (arr, k) => arr[(i * 3 + k) % arr.length];
  if (envId === 'highway') {
    if (i % 3 === 0) g.add(billboardV2(L, i));
    else if (i % 3 === 1) g.add(powerPole());
    else g.add(bush(0x7a8a4a));
    if (rich && i % 2 === 0) g.add(lampPost().translateZ(3.6).translateX(2));
    return g;
  }
  if (envId === 'industry') {
    g.add(warehouse(L, i));
    if (rich && i % 3 === 0) g.add(lampPost().translateZ(4.6).translateX(-2.2));
    if (rich && i % 4 === 1) g.add(parkedCar(pick(PARK_COLORS, 1)).translateZ(4.4).translateX(1.6));
    return g;
  }
  if (envId === 'bonus') { // soda factory district: silos, giant cans, low office blocks
    if (i % 3 === 0) g.add(giantCan());
    else if (i % 3 === 1) g.add(siloTank(pick(L.wall, 2)));
    else g.add(cityBlock(L, i, 'low'));
    if (rich && i % 2) g.add(billboardV2(L, i + 1).translateZ(2.2).translateX(3));
    return g;
  }
  // city / downtown / shops: real street blocks
  const kind = envId === 'downtown' ? 'tower' : envId === 'shops' ? 'low' : 'mid';
  g.add(cityBlock(L, i, kind));
  if (rich) { // local +z faces the road after the street-facing rotation
    if (i % 3 === 0) g.add(lampPost().translateZ(4.4).translateX(-2.4));
    if (i % 3 === 1) g.add(parkedCar(pick(PARK_COLORS, i)).translateZ(4.3).translateX(1.2));
    if (i % 4 === 2) g.add(trafficLight().translateZ(4.2).translateX(-1.8));
    if (envId === 'city' && i % 3 === 2) g.add(toyTree(L.tree, 0.9).translateZ(4.2).translateX(2.6));
    if (envId !== 'city' && i % 4 === 1) g.add(hydrant().translateZ(4.3).translateX(-1.2));
  }
  return g;
}

// ---------- Hero: the toy superhero (blue felt suit, silver panel, red scarf cape) ----------
function makeHero() {
  const g = new THREE.Group();
  const body = new THREE.Group();
  const blue = new THREE.MeshStandardMaterial({ color: 0x1e4ee0, emissive: 0x081a55, emissiveIntensity: 0.5, metalness: 0.55, roughness: 0.38 });
  const silver = new THREE.MeshStandardMaterial({ color: 0xe8ecf4, emissive: 0x28283a, emissiveIntensity: 0.35, metalness: 0.85, roughness: 0.22 });
  const red = M(0xe83a3a, 0x501010);
  body.add(mesh(geo.rboxS, blue, 0, 1.5, 0, 1.1, 1.35, 0.72)); // rounded torso
  body.add(mesh(geo.rboxS, silver, 0, 1.42, 0.3, 0.66, 0.95, 0.22)); // silver belly panel
  const emblem = mesh(geo.cyl, M(0xffffff, 0x777777), -0.22, 1.78, 0.38, 0.34, 0.06, 0.34); emblem.rotation.x = Math.PI / 2; body.add(emblem);
  const ring = mesh(geo.cyl, M(0xe83a3a, 0x601010), -0.22, 1.78, 0.4, 0.26, 0.06, 0.26); ring.rotation.x = Math.PI / 2; body.add(ring);
  const head = mesh(geo.sphere, silver, 0, 2.52, 0.04, 1.05, 1.05, 1.02); body.add(head); // helmeted head
  body.add(mesh(geo.sphere, MS(0x1a2a44, 0x2a4a80), 0, 2.5, 0.34, 0.72, 0.4, 0.4)); // shiny visor
  body.add(mesh(geo.rbox, blue, 0, 2.86, 0.02, 0.3, 0.34, 0.9)); // helmet crest
  body.add(mesh(geo.sphere, red, 0, 2.14, 0, 1.0, 0.4, 0.9)); // scarf wrap
  // cape: a small cloth plane that flutters behind (waved in _render)
  const capeGeo = new THREE.PlaneGeometry(1.15, 1.5, 4, 5);
  const cape = new THREE.Mesh(capeGeo, new THREE.MeshStandardMaterial({ color: 0xe83a3a, emissive: 0x401010, roughness: 0.9, side: THREE.DoubleSide }));
  cape.position.set(0, 1.55, -0.44); cape.rotation.x = 0.32; body.add(cape);
  g.userData.cape = cape; g.userData.capeBase = capeGeo.attributes.position.array.slice();
  g.userData.armL = new THREE.Group(); g.userData.armR = new THREE.Group(); g.userData.legL = new THREE.Group(); g.userData.legR = new THREE.Group();
  for (const [grp, x] of [[g.userData.armL, -0.72], [g.userData.armR, 0.72]]) { grp.position.set(x, 2.02, 0); grp.add(mesh(geo.cyl, blue, 0, -0.42, 0, 0.3, 0.85, 0.3), mesh(geo.sphere, silver, 0, -0.92, 0, 0.36, 0.36, 0.36)); body.add(grp); }
  for (const [grp, x] of [[g.userData.legL, -0.3], [g.userData.legR, 0.3]]) { grp.position.set(x, 1.0, 0); grp.add(mesh(geo.cyl, blue, 0, -0.44, 0, 0.34, 0.88, 0.34), mesh(geo.rboxS, silver, 0, -0.95, 0.14, 0.4, 0.26, 0.6)); body.add(grp); }
  g.add(body); g.userData.body = body;
  g.userData.shadow = mesh(new THREE.CircleGeometry(0.85, 20), new THREE.MeshBasicMaterial({ color: 0x1a2030, transparent: true, opacity: 0.28 }), 0, 0.03, 0); g.userData.shadow.rotation.x = -Math.PI / 2; g.add(g.userData.shadow);
  g.userData.shield = mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0x7ae0ff, transparent: true, opacity: 0.32 }), 0, 1.6, 0, 3.2, 3.2, 3.2); g.userData.shield.visible = false; g.add(g.userData.shield);
  return g;
}

function makeCan() { const g = new THREE.Group(); g.add(mesh(geo.cyl, MS(0x2a6ae8, 0x0a2a8a), 0, 0, 0, 0.58, 0.95, 0.58), mesh(geo.cyl, MS(0xe8ecf4), 0, 0.5, 0, 0.52, 0.08, 0.52), mesh(geo.cyl, M(0xffffff), 0, -0.02, 0.0, 0.6, 0.2, 0.6)); return g; }

const CAR_COLORS = [0xf8d84a, 0xe86a5a, 0xf8f8f8, 0x5ae0b0, 0x9a7af0, 0x5aa8f0];
function toyCar(col) {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(col), 0, 0.62, 0, 2, 0.75, 3.6)); // chunky body
  g.add(mesh(geo.rbox, M(col), 0, 1.28, -0.3, 1.7, 0.7, 1.8)); // cabin
  g.add(mesh(geo.rbox, MS(0xbfe8ff, 0x2a4a5a), 0, 1.3, 0.62, 1.5, 0.5, 0.14)); // windshield
  for (const x of [-1, 1]) for (const z of [-1.15, 1.15]) { const w = mesh(geo.cyl, M(0x2a2a32), x, 0.4, z, 0.8, 0.34, 0.8); w.rotation.z = Math.PI / 2; g.add(w); g.add(mesh(geo.cyl, M(0xf0f0f0), x * 1.01, 0.4, z, 0.34, 0.36, 0.34).rotateZ(Math.PI / 2)); }
  g.add(mesh(geo.sphere, M(0xfff2b8, 0xffe888), -0.62, 0.62, 1.82, 0.26, 0.26, 0.12), mesh(geo.sphere, M(0xfff2b8, 0xffe888), 0.62, 0.62, 1.82, 0.26, 0.26, 0.12)); // headlamps
  g.add(mesh(geo.rbox, M(0xff3a3a, 0xff0000), -0.62, 0.66, -1.82, 0.4, 0.16, 0.06), mesh(geo.rbox, M(0xff3a3a, 0xff0000), 0.62, 0.66, -1.82, 0.4, 0.16, 0.06)); // tail lamps
  return g;
}
function toyTruck() {
  const g = new THREE.Group();
  g.add(mesh(geo.rbox, M(0x6aa8e8), 0, 2, 0.8, 2.4, 3.6, 5.2)); // cargo box
  g.add(mesh(geo.rbox, M(0x4a5462), 0, 1.3, -2.7, 2.3, 2.6, 2)); // cab
  g.add(mesh(geo.rbox, MS(0xbfe8ff, 0x2a4a5a), 0, 1.8, -3.62, 2, 0.9, 0.14));
  for (const x of [-1.25, 1.25]) for (const z of [-2.6, 0.4, 2.4]) { const w = mesh(geo.cyl, M(0x2a2a32), x, 0.55, z, 1.05, 0.5, 1.05); w.rotation.z = Math.PI / 2; g.add(w); }
  g.add(mesh(geo.rbox, M(0xfff4dc), 0, 3.1, 3.42, 1.9, 0.9, 0.08)); // blank back board
  return g;
}
function makeObstacle(kind, id) {
  const g = new THREE.Group();
  if (kind === 'barrier') { // wooden toy barrier: two posts + red/white striped plank
    g.add(mesh(geo.rbox, M(0xa87848), -1.05, 0.55, 0, 0.22, 1.1, 0.22), mesh(geo.rbox, M(0xa87848), 1.05, 0.55, 0, 0.22, 1.1, 0.22));
    for (let i = 0; i < 5; i++) g.add(mesh(geo.rbox, M(i % 2 ? 0xffffff : 0xe84a3a), -0.84 + i * 0.42, 0.95, 0, 0.4, 0.4, 0.14));
    g.add(mesh(geo.rbox, M(0xa87848), 0, 0.18, 0, 2.3, 0.14, 0.5));
  }
  else if (kind === 'cone') { g.add(mesh(geo.cone, M(0xff8a3a), 0, 0.6, 0, 0.85, 1.2, 0.85), mesh(geo.rboxS, M(0x4a4a52), 0, 0.07, 0, 1.05, 0.14, 1.05), mesh(geo.cyl, M(0xffffff), 0, 0.6, 0, 0.52, 0.2, 0.52)); }
  else if (kind === 'car' || kind === 'movecar') g.add(toyCar(CAR_COLORS[id % CAR_COLORS.length]));
  else if (kind === 'truck') g.add(toyTruck());
  else if (kind === 'overhead') { // candy-striped poles + rounded blank sign
    for (const sx of [-1, 1]) { g.add(mesh(geo.cyl, M(0xffffff), sx * 4.2, 2.1, 0, 0.26, 4.2, 0.26)); for (let i = 0; i < 4; i++) g.add(mesh(geo.cyl, M(0xe84a6a), sx * 4.2, 0.6 + i * 1, 0, 0.3, 0.4, 0.3)); }
    g.add(mesh(geo.rbox, M(0xffd23a, 0x6a520a), 0, 4.2, 0, 8.8, 1.1, 0.5));
    g.add(mesh(geo.cyl, M(0xe84a6a, 0x661022), 0, 4.2, 0.3, 0.5, 0.14, 0.5).rotateX(Math.PI / 2));
  }
  else if (kind === 'ramp') { // wooden stunt ramp
    const r = mesh(geo.rbox, M(0xd89a4a), 0, 0.4, 0, 2.3, 0.18, 3.4); r.rotation.x = -0.3; g.add(r);
    const s = mesh(geo.rbox, M(0xe84a3a), 0, 0.42, 0, 0.5, 0.19, 3.3); s.rotation.x = -0.3; g.add(s);
    g.add(mesh(geo.rbox, M(0xa87848), 0, 0.2, -1.4, 2.3, 0.4, 0.24));
  }
  else if (kind === 'magnet') { const m = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.2, 10, 20, Math.PI), M(0xe83a3a, 0x601010)); m.rotation.z = Math.PI; m.position.y = 0.65; g.add(m, mesh(geo.rboxS, M(0xe8ecf4), -0.55, 0.22, 0, 0.4, 0.34, 0.4), mesh(geo.rboxS, M(0xe8ecf4), 0.55, 0.22, 0, 0.4, 0.34, 0.4)); }
  else if (kind === 'shield') { g.add(mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0x7ae0ff, transparent: true, opacity: 0.65 }), 0, 0.75, 0, 1.25, 1.45, 0.55), mesh(geo.sphere, M(0xffffff, 0x888888), 0, 0.75, 0, 0.55, 0.55, 0.55)); }
  else if (kind === 'star') { const s = mesh(geo.cone, M(0xffd23a, 0xaa8800), 0, 0.75, 0, 1.05, 1.05, 0.34); g.add(s, mesh(geo.sphere, M(0xffe86a, 0xaa8800), 0, 0.75, 0, 0.92, 0.92, 0.5)); }
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
    this.low = (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
    if (!document.getElementById('fz-style')) document.head.append(h('style', { id: 'fz-style' }, css('fz', '#ff8a5a', '#e8562a', '#fff0c8') + '.fz-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1.6);width:100%}.fz-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.6);min-height:calc(var(--u)*22);cursor:pointer;justify-content:flex-end}.fz-env.lock{filter:grayscale(1) brightness(.6)}.fz-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}.fz-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.2)}'));
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
    this.recMode = new URLSearchParams(location.search).has('rec'); // headless capture: software GL cannot afford AA
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.recMode });
    this.renderer.setPixelRatio(this.recMode ? 1 : Math.min(window.devicePixelRatio || 1, this.low ? 1.2 : 1.6));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.12;
    this.root.prepend(this.renderer.domElement);
    // cinematic vignette over the 3D view (under the HUD layer)
    const vig = h('div', { style: 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center, transparent 50%, rgba(8,10,22,0.42) 100%)' });
    this.root.insertBefore(vig, this.root.children[1] || null);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 420);
    this.hemi = new THREE.HemisphereLight(0xbfdcf8, 0x77695a, 0.9); this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xfff2dc, 1.6); sun.position.set(-14, 30, -12); this.scene.add(sun); this.scene.add(sun.target);
    this.sun = sun;
    if (!this.low) { // real shadows on capable GPUs; blob shadow on low-end
      this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024); sun.shadow.bias = -0.002;
      const sc = sun.shadow.camera; sc.left = -22; sc.right = 22; sc.top = 26; sc.bottom = -14; sc.near = 2; sc.far = 100;
    }
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.hero = makeHero(); this.scene.add(this.hero);
    this.hero.traverse((o) => { if (o.isMesh && o !== this.hero.userData.shadow && o !== this.hero.userData.shield) o.castShadow = true; });
    this.heroLight = new THREE.PointLight(0xfff2e0, 9, 22, 1.5); this.scene.add(this.heroLight); // camera-side fill so the hero never goes muddy
    this.fizz = new Fizz(this.scene, this.low ? 120 : 260);
    // road + sidewalks + grass + curbs (long strips that follow the hero)
    this.asphaltMat = new THREE.MeshStandardMaterial({ map: asphaltTex(30), roughness: 0.97 });
    this.sidewalkMat = new THREE.MeshStandardMaterial({ map: sidewalkTex(46), roughness: 0.94 });
    this.road = mesh(geo.box, this.asphaltMat, 0, -0.1, 0, 8.4, 0.2, 440); this.road.receiveShadow = true; this.scene.add(this.road);
    this.walkL = mesh(geo.box, this.sidewalkMat, -5.6, -0.02, 0, 2.6, 0.26, 440); this.walkL.receiveShadow = true; this.scene.add(this.walkL);
    this.walkR = mesh(geo.box, this.sidewalkMat, 5.6, -0.02, 0, 2.6, 0.26, 440); this.walkR.receiveShadow = true; this.scene.add(this.walkR);
    this.grassL = mesh(geo.box, M(0x598246), -11.5, -0.08, 0, 9, 0.16, 440); this.scene.add(this.grassL);
    this.grassR = mesh(geo.box, M(0x598246), 11.5, -0.08, 0, 9, 0.16, 440); this.scene.add(this.grassR);
    // dashed lane lines
    this.lanes = []; for (let i = 0; i < 70; i++) { const d = mesh(geo.rbox, M(0xffffff), 0, 0.03, 0, 0.16, 0.03, 1.7); this.scene.add(d); this.lanes.push(d); }
    // crosswalk stripes, recycled every ~90 m
    this.cross = []; for (let i = 0; i < 16; i++) { const c = mesh(geo.rbox, M(0xfff8ec), 0, 0.03, 0, 0.7, 0.03, 2.6); this.scene.add(c); this.cross.push(c); }
    // puffy toy clouds drifting overhead
    this.clouds = []; const cn = this.low ? 3 : 6;
    for (let i = 0; i < cn; i++) { const c = toyCloud(0.9 + (i % 3) * 0.5); c.position.set((i % 2 ? -1 : 1) * (8 + i * 5), 22 + (i % 3) * 6, i * 30); this.scene.add(c); this.clouds.push(c); }
    // speed streaks (visible at high speed)
    this.streaks = [];
    for (let i = 0; i < 8; i++) { const s = mesh(geo.rbox, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }), 0, 0, 0, 0.05, 0.05, 5); this.scene.add(s); this.streaks.push(s); }
    this.sideL = []; this.sideR = [];
  }

  /** The painted backdrop of the level (art/pano<N>.webp): a mirrored ring around the camera. n = 0 removes it. */
  _setPano(n) {
    if (this.panoMesh) { this.scene.remove(this.panoMesh); this.panoMesh.material.map.dispose(); this.panoMesh.material.dispose(); this.panoMesh = null; }
    if (!n) return;
    const tex = new THREE.TextureLoader().load(`${this.base}art/pano${n}.webp`, () => { if (this.panoMesh && this.panoMesh.material.map === tex) this.panoMesh.visible = true; });
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.MirroredRepeatWrapping; tex.repeat.set(2, 0.66); tex.offset.set(0, 0.34);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(300, 300, 240, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false }));
    ring.visible = false; ring.renderOrder = -10; this.panoMesh = ring; this.scene.add(ring);
  }
  _followPano() { const c = this.camera.position; if (this.panoMesh) this.panoMesh.position.set(c.x, c.y + 60, c.z); if (this.skyDome) this.skyDome.position.set(c.x, c.y, c.z); if (this.skyRing) this.skyRing.position.set(c.x, 44, c.z); }

  /** Gradient sky dome + distant skyline silhouette ring (replaces the candy pano art). */
  _setSky(envId) {
    const L = LOOKS[envId];
    if (this.skyDome) { this.scene.remove(this.skyDome); this.scene.remove(this.skyRing); this.skyDome = this.skyRing = null; }
    this.skyDome = new THREE.Mesh(new THREE.SphereGeometry(360, 24, 14), new THREE.MeshBasicMaterial({ map: skyTex(L.skyTop, L.skyBot, L.sun, L.sunUv[0], L.sunUv[1]), side: THREE.BackSide, fog: false, depthWrite: false }));
    this.skyDome.renderOrder = -12; this.scene.add(this.skyDome);
    const silT = skylineTex(L.skySil, envId); silT.repeat.set(3, 1);
    this.skyRing = new THREE.Mesh(new THREE.CylinderGeometry(290, 290, 110, 48, 1, true), new THREE.MeshBasicMaterial({ map: silT, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    this.skyRing.renderOrder = -11; this.scene.add(this.skyRing);
  }

  _look(envId) {
    const L = LOOKS[envId];
    this._setSky(envId);
    this.scene.fog = new THREE.Fog(L.fog, 40, L.fogFar);
    this.road.material = this.asphaltMat; this.walkL.material = this.walkR.material = this.sidewalkMat; this.grassL.material = this.grassR.material = M(L.grass);
    for (const b of [...this.sideL, ...this.sideR]) this.scene.remove(b.m);
    this.sideL = []; this.sideR = [];
    const perSide = this.low ? 10 : 14;
    for (let side = 0; side < 2; side++) for (let i = 0; i < perSide; i++) {
      const g = makeBlock(envId, i + side * 7, L, !this.low);
      g.scale.setScalar(0.78);
      g.rotation.y = side ? -Math.PI / 2 : Math.PI / 2; // face the street
      this.scene.add(g); (side ? this.sideR : this.sideL).push({ m: g });
    }
    this.hemi.color.set(L.hemiSky); this.hemi.groundColor.set(L.hemiGnd); this.hemi.intensity = L.hemiI;
    this.sun.color.set(L.sun); this.sun.intensity = L.sunI;
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.baseFov = this.cw < this.ch ? 72 : 56; this.camera.fov = this.baseFov; this.camera.updateProjectionMatrix(); }

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

  _left() { if (this.run && !this.paused) { const l = this.run.lane; this.run.left(); if (l !== this.run.lane) { this.sound.play('lane'); this.lean = 1; this.fizz.burst(-this.run.x, 0.2, this.run.z + 0.4, 0xcbc4b2, this.low ? 3 : 6, 2.4, 1.2); } } }
  _right() { if (this.run && !this.paused) { const l = this.run.lane; this.run.right(); if (l !== this.run.lane) { this.sound.play('lane'); this.lean = -1; this.fizz.burst(-this.run.x, 0.2, this.run.z + 0.4, 0xcbc4b2, this.low ? 3 : 6, 2.4, 1.2); } } }
  _jump() { if (this.run && !this.paused && this.run.y <= 0.01) { this.run.jump(); this.stretch = 1; } }
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
    const b = h('button', { class: 'fz-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); b.textContent = `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`);
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, '⚙️ ', I.t('settings')), b, h('div', { class: 'fz-small' }, I.t('how')), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  _clearThings() { for (const m of this.meshes ? this.meshes.values() : []) this.world.remove(m); this.meshes = new Map(); }

  start(i) {
    this.envIdx = i;
    this.run = new Run({ env: i, seed: (Date.now() & 0xffff) + 1, easy: this.age <= 4 });
    this._look(this.run.env.id); this._clearThings();
    this.mode = 'play'; this.paused = false; this.shake = 0; this.fx = []; this.lean = 0; this.stretch = 0; this.squash = 0;
    this._clear(); this.sound.setMode(true);
    this.scoreEl = h('span', {}, ''); this.canEl = h('span', {}, ''); this.distEl = h('span', {}, ''); this.pwrEl = h('span', {}, '');
    const pause = h('button', { class: 'fz-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'fz-top' }, pause, h('div', { class: 'fz-pill' }, this.scoreEl), h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*.8);align-items:flex-end' }, h('div', { class: 'fz-pill' }, this.canEl), h('div', { class: 'fz-pill' }, this.distEl))), h('div', { class: 'fz-pill', style: 'position:absolute;left:50%;transform:translateX(-50%);top:calc(var(--u)*16)' }, this.pwrEl));
    this.hintEl = h('div', { class: 'fz-hint', style: 'top:calc(var(--u)*26)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) { this.pauseEl = h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-title' }, I.t('paused')), h('button', { class: 'fz-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')), h('button', { class: 'fz-btn dark', onclick: () => this.start(this.envIdx) }, '🔄 ', I.t('restart')), h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove();
  }

  _finish(won) {
    const r = this.run; const sc = r.finalScore ?? Math.round(r.score);
    const best = this.save.best[this.envIdx] || 0; if (sc > best) this.save.best[this.envIdx] = sc;
    this.save.totalCans += r.cans; this.save.totalDist += Math.round(r.z);
    if (won) { this.save.stars[this.envIdx] = Math.max(this.save.stars[this.envIdx] || 0, r.cans > 80 ? 3 : r.cans > 40 ? 2 : 1); this.save.unlocked = Math.max(this.save.unlocked, Math.min(6, this.envIdx + 2)); }
    const have = { cans: r.cans, dist: r.z, stunts: r.stuntsDone, dodged: r.dodged, magnets: r.magnets };
    for (const m of MISSIONS) if (!this.save.done[m.id] && have[m.kind] >= m.goal) this.save.done[m.id] = true;
    if (!this.save.done.cans50 && this.save.totalCans >= 50) this.save.done.cans50 = true;
    this.post({ type: 'save', save: this.save });
    this.sound.play(won ? 'win' : 'over');
    if (won) this.fizz.burst(-this.run.x, 2.5, this.run.z, 0xffd23a, 40, 6, 5);
    this.layer.append(h('div', { class: 'fz-dim' }, h('div', { class: 'fz-card' }, h('div', { class: 'fz-logo', style: 'color:#ff4a4a' }, won ? I.t('won') : I.t('over')), h('div', { class: 'fz-row' }, h('span', {}, I.t('score')), h('span', {}, I.num(sc))), h('div', { class: 'fz-row' }, h('span', {}, I.t('best')), h('span', {}, I.num(this.save.best[this.envIdx] || sc))), h('div', { class: 'fz-row' }, h('span', {}, '🥤'), h('span', {}, I.num(r.cans))),
      h('button', { class: 'fz-btn alt', onclick: () => this.start(this.envIdx) }, '🔄 ', I.t('restart')), won && this.envIdx < 5 ? h('button', { class: 'fz-btn', onclick: () => this.start(this.envIdx + 1) }, '▶ ', I.t('play')) : null, h('button', { class: 'fz-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))));
  }

  _frame() { const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused && this.run) this._update(dt); this._render(dt); this._followPano(); }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'can': this.sound.play('can'); this.fizz.burst(-r.x, 1.6 + r.y, r.z + 1, 0x9ad8ff, this.low ? 5 : 10, 2.6, 3); break;
        case 'jump': this.sound.play('jump'); break;
        case 'slide': this.sound.play('slide'); this.fizz.burst(-r.x, 0.3, r.z + 0.5, 0xd8c8b0, this.low ? 3 : 7, 2, 1.2); break;
        case 'land': this.sound.play('land'); this.squash = 1; this.fizz.burst(-r.x, 0.2, r.z + 0.5, 0xd8c8b0, this.low ? 4 : 8, 2.4, 1.4); break;
        case 'stunt': this.sound.play('stunt'); this.fx.push({ t: 0, life: 1.1, text: '⭐ STUNT +300' }); this.fizz.burst(-r.x, 2 + r.y, r.z, 0xffd23a, this.low ? 8 : 16, 4, 4); break;
        case 'ramp': this.sound.play('jump'); break;
        case 'power': this.sound.play('power'); this.fx.push({ t: 0, life: 1, text: { magnet: '🧲', shield: '🛡️', star: '⭐' }[e.kind] }); this.fizz.burst(-r.x, 1.8, r.z + 1, 0xffe86a, this.low ? 8 : 14, 3.4, 3.4); break;
        case 'shieldHit': this.sound.play('shield'); this.shake = 0.4; this.fizz.burst(-r.x, 1.5, r.z + 1, 0x7ae0ff, this.low ? 10 : 18, 5, 3); break;
        case 'smash': this.sound.play('crash'); this.fizz.burst(-r.x, 1.5, r.z + 1, 0xffe86a, this.low ? 10 : 20, 6, 4); break;
        case 'over': this.sound.play('crash'); this.shake = 0.8; this.fizz.burst(-r.x, 1.6, r.z + 1, 0xff8a5a, this.low ? 12 : 24, 6, 4); this._finish(false); break;
        case 'won': this._finish(true); break;
        default: break;
      }
    }
    this.scoreEl.textContent = `${I.t('score')} ${I.num(Math.round(r.score))}`; this.canEl.textContent = `🥤 ${I.num(r.cans)}`; this.distEl.textContent = `🏃 ${I.num(Math.round(r.z))} ${I.t('m')}`;
    this.pwrEl.textContent = [r.magnet > 0 ? '🧲' : '', r.shield > 0 ? '🛡️' : '', r.starT > 0 ? '⭐' : ''].join(' ');
    this.pwrEl.parentElement.style.display = this.pwrEl.textContent.trim() ? 'flex' : 'none';
    for (const f of this.fx) f.t += dt; this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _mesh(t) {
    let m = this.meshes.get(t.id);
    if (!m) { m = t.kind === 'can' ? makeCan() : makeObstacle(t.kind, t.id); m.traverse((o) => { if (o.isMesh) o.castShadow = true; }); this.world.add(m); this.meshes.set(t.id, m); }
    return m;
  }

  _render(dt) {
    const r = this.run; const play = !!r; const zr = play ? r.z : (this.demoZ += dt * 18); const hx0 = play ? -r.x : 0;
    if (play) {
      const live = new Set();
      for (const t of r.things) {
        if (t.done && t.kind !== 'ramp') continue;
        if (t.z - zr > 150) continue;
        const m = this._mesh(t); live.add(t.id);
        const x = t.lane === -1 ? 0 : LANES[t.lane];
        m.position.set(-x, t.kind === 'can' ? t.y - 0.4 : t.kind === 'magnet' || t.kind === 'shield' || t.kind === 'star' ? 0.55 + Math.sin(this.clock * 3) * 0.2 : 0, t.z);
        if (t.kind === 'can' || t.kind === 'magnet' || t.kind === 'star') m.rotation.y = this.clock * 3;
        m.visible = true;
      }
      for (const [id, m] of this.meshes) if (!live.has(id)) { this.world.remove(m); this.meshes.delete(id); }
      // ---- hero animation: run cycle + lean + squash & stretch + cape flutter ----
      const hr = this.hero; const k = this.clock * 14 * (r.speed / 18);
      hr.position.set(-r.x, r.y, zr);
      const b = hr.userData.body; const running = r.y < 0.05;
      hr.userData.legL.rotation.x = running ? Math.sin(k) * 0.95 : -0.7; hr.userData.legR.rotation.x = running ? -Math.sin(k) * 0.95 : 0.55;
      hr.userData.armL.rotation.x = running ? -Math.sin(k) * 0.95 : -2.6 + (r.stunt ? Math.sin(this.clock * 20) * 0.3 : 0); hr.userData.armR.rotation.x = running ? Math.sin(k) * 0.95 : -2.6;
      b.rotation.x = r.slide > 0 ? -1.1 : 0.14;
      b.position.y = r.slide > 0 ? -0.55 : running ? Math.abs(Math.sin(k)) * 0.14 : 0;
      // lean into the lane change, decaying
      this.lean = (this.lean || 0) * Math.max(0, 1 - dt * 4);
      const laneLean = (LANES[r.lane] - r.x) * 0.12;
      b.rotation.z = laneLean + this.lean * 0.35;
      b.rotation.y = r.stunt && !running ? this.clock * 14 : (LANES[r.lane] - r.x) * 0.1;
      // squash & stretch springs back to 1
      this.stretch = (this.stretch || 0) * Math.max(0, 1 - dt * 5);
      this.squash = (this.squash || 0) * Math.max(0, 1 - dt * 6);
      const sy = 1 + this.stretch * 0.16 - this.squash * 0.24;
      b.scale.set(1 - (sy - 1) * 0.6, sy, 1 - (sy - 1) * 0.6);
      // running dust puffs
      this.dustT = (this.dustT || 0) - dt;
      if (running && this.dustT <= 0) { this.dustT = 0.24; this.fizz.burst(-r.x, 0.16, zr - 0.4, 0xcbc4b2, this.low ? 1 : 3, 1.5, 0.9); }
      // cape flutter
      const cape = hr.userData.cape;
      if (cape) {
        const p = cape.geometry.attributes.position; const base = hr.userData.capeBase; const t2 = this.clock * 10;
        for (let vi = 0; vi < p.count; vi++) {
          const bx = base[vi * 3], by = base[vi * 3 + 1];
          const wave = Math.sin(t2 + bx * 2 + by * 3) * 0.12 * (0.5 - by) * (1 + r.speed / 24);
          p.setZ(vi, wave);
        }
        p.needsUpdate = true;
        cape.rotation.x = 0.32 + Math.min(0.5, r.speed / 40) + (running ? Math.abs(Math.sin(k)) * 0.05 : 0.3);
      }
      hr.userData.shield.visible = r.shield > 0 || r.starT > 0;
      hr.userData.shadow.position.y = 0.03 - r.y; hr.userData.shadow.scale.setScalar(Math.max(0.4, 1 - r.y * 0.1));
      // speed streaks at high speed
      const spd = r.speed;
      this.streaks.forEach((s, i) => {
        const on = spd > 20 && !this.low;
        s.material.opacity = on ? Math.min(0.4, (spd - 20) / 25) : 0;
        if (on) { const zz = zr + 10 + ((i * 13 + Math.floor(this.clock * spd * 2) * 7) % 60); s.position.set((i % 2 ? -1 : 1) * (3.4 + (i % 4)), 1 + (i % 3) * 1.6, zz); }
      });
    } else {
      this.hero.position.set(0, 0, zr + 4);
      this.hero.userData.legL.rotation.x = Math.sin(this.clock * 12) * 0.9; this.hero.userData.legR.rotation.x = -Math.sin(this.clock * 12) * 0.9;
      this.hero.userData.armL.rotation.x = Math.sin(this.clock * 12) * 0.9; this.hero.userData.armR.rotation.x = -Math.sin(this.clock * 12) * 0.9;
      this.streaks.forEach((s) => { s.material.opacity = 0; });
    }
    // scenery, road strips and markings roll along with the hero
    const step = 16;
    const span = step * 1.8;
    this.sideL.forEach((b, i) => { const z = Math.floor((zr - 20) / span) * span + i * span; b.m.position.set(-15.2 - (i % 3) * 1.8, 0, z); });
    this.sideR.forEach((b, i) => { const z = Math.floor((zr - 20) / span) * span + i * span + 8; b.m.position.set(13.4 + (i % 3) * 1.6, 0, z); });
    this.lanes.forEach((d, i) => { const row = Math.floor(i / 2); const z = Math.floor((zr - 6) / 6) * 6 + row * 6; d.position.set(i % 2 ? 1.3 : -1.3, 0.03, z); });
    this.cross.forEach((c, i) => { c.position.set(-3.3 + (i % 8) * 0.95, 0.03, Math.floor((zr - 10) / 90) * 90 + Math.floor(i / 8) * 90); });
    this.road.position.set(0, -0.1, zr + 150);
    this.walkL.position.set(-5.6, -0.02, zr + 150); this.walkR.position.set(5.6, -0.02, zr + 150);
    this.grassL.position.set(-11.5, -0.08, zr + 150); this.grassR.position.set(11.5, -0.08, zr + 150);
    for (const c of this.clouds) { if (c.position.z < zr - 40) c.position.z += 200; c.position.x += Math.sin(this.clock * 0.2 + c.position.y) * dt * 0.4; }
    this.fizz.update(dt);
    this.heroLight.position.set(hx0 + 2, 4.5, zr - 5);
    // sun shadow camera follows the hero
    this.sun.position.set(hx0 + -14, 30, zr - 12); this.sun.target.position.set(hx0, 0, zr + 6); this.sun.target.updateMatrixWorld();
    // chase camera: low and close, FOV widens with speed, gentle sway with the hero
    this.shake = Math.max(0, (this.shake || 0) - dt * 2);
    const sh = this.shake * 0.4;
    const portrait = this.cw < this.ch;
    const hx = play ? -r.x : 0;
    this.camX = (this.camX ?? hx * 0.55) + (hx * 0.55 - (this.camX ?? 0)) * Math.min(1, dt * 8);
    const kick = play ? Math.min(8, Math.max(0, r.speed - 14) * 0.5) : 0;
    const fovT = (this.baseFov || 62) + kick;
    if (Math.abs(this.camera.fov - fovT) > 0.1) { this.camera.fov += (fovT - this.camera.fov) * Math.min(1, dt * 5); this.camera.updateProjectionMatrix(); }
    const bob = play && r.y < 0.05 && r.slide <= 0 ? Math.abs(Math.sin(this.clock * 14 * (r.speed / 18))) * 0.13 : 0;
    this.camera.position.set(this.camX + (Math.random() - 0.5) * sh, (portrait ? 6.6 : 5.1) + (play ? r.y * 0.32 : 0) + bob, zr - (portrait ? 9.6 : 8));
    this.camera.lookAt(this.camX * 0.6, 1.9, zr + 13);
    this.renderer.render(this.scene, this.camera);
    this._floaters();
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    this.fx.forEach((f, i) => { let el = this.fxEls[i]; if (!el) { el = h('div', { style: 'position:absolute;left:50%;top:38%;font-weight:900;color:#ffe04a;text-shadow:0 0 8px #000,0 0 3px #000;pointer-events:none;font-size:calc(var(--u)*6)' }); this.layer.append(el); this.fxEls[i] = el; } el.style.display = 'block'; el.style.opacity = String(1 - f.t / f.life); el.style.transform = `translate(-50%,${-f.t * 60}px)`; el.textContent = f.text; });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.FizzRunner = api;
export default api;
