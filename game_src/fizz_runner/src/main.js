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
  city:     { sky: 0xaee8ff, fog: 0xd8f0ff, ground: 0x8d92a8, walk: 0xf6e8d0, grass: 0xa8e0a0, side: [0xffc8a8, 0xa8e0c8, 0xfff0b8, 0xc8d8ff], roof: [0xe86a5a, 0x5ab8e8, 0xe8a85a, 0x7ac88a], accent: 0xff8a5a, tree: 0x6ac88a },
  downtown: { sky: 0x9ad8f8, fog: 0xcce8f8, ground: 0x84889e, walk: 0xf0e0c8, grass: 0x98d890, side: [0xffd8b8, 0xb8c8f0, 0xf8c8d8, 0xc8e8e0], roof: [0xe87868, 0x6898d8, 0xd89858, 0x88b8a0], accent: 0xffd23a, tree: 0x5ac080 },
  shops:    { sky: 0xffd8ae, fog: 0xffe8ce, ground: 0x94889a, walk: 0xfae8c8, grass: 0xaae8a8, side: [0xff9ab8, 0xffe08a, 0x8ae8c8, 0xa8c8ff], roof: [0xe85a6a, 0x4aa8d8, 0xe8984a, 0x6ab87a], accent: 0xff4a8a, tree: 0x7ad898 },
  industry: { sky: 0xd8c8b0, fog: 0xe0d0ba, ground: 0x7e7a80, walk: 0xe8d8c0, grass: 0x98c888, side: [0xd8a888, 0xb8a898, 0xc8907a, 0xa8b0b8], roof: [0xb86848, 0x887868, 0xa05838, 0x78908a], accent: 0xe86a2a, tree: 0x68b078 },
  highway:  { sky: 0xffb87e, fog: 0xffd0a0, ground: 0x807a86, walk: 0xf0dcc0, grass: 0xb8d888, side: [0xe8c898, 0xd8b090, 0xc8d098, 0xb8c8b0], roof: [0xd87850, 0xb89858, 0xc06848, 0x98a868], accent: 0xffb82a, tree: 0x88c070 },
  bonus:    { sky: 0xc89af8, fog: 0xdcbef8, ground: 0x9a8ae8, walk: 0xffd8f0, grass: 0xa8f0e0, side: [0xff8ac8, 0x8ae8ff, 0xfff08a, 0xb89aff], roof: [0xff6aa8, 0x4ac8e8, 0xffc84a, 0x9a78f0], accent: 0xffffff, tree: 0xff9ad8 },
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
function makeBlock(envId, i, L, rich) {
  const g = new THREE.Group();
  const pick = (arr, k) => arr[(i * 3 + k) % arr.length];
  if (envId === 'city') {
    g.add(toyHouse(pick(L.side, 0), pick(L.roof, 1), 5.6 + (i % 3), 4.6 + (i % 2) * 1.4, 5.6));
    if (rich) { g.add(toyTree(L.tree, 0.9).translateX(4.6).translateZ(3.4)); g.add(fenceRow().translateZ(3.2)); if (i % 3 === 0) g.add(lampPost().translateX(-4.4).translateZ(3)); }
  } else if (envId === 'downtown') {
    g.add(toyTower(pick(L.side, 1), pick(L.roof, 2), 6.4, 9 + (i % 4) * 2.6, 6.4));
    if (rich) { if (i % 2 === 0) g.add(lampPost().translateX(4.2).translateZ(3.2)); if (i % 4 === 1) g.add(hydrant().translateX(-4).translateZ(3.4)); }
  } else if (envId === 'shops') {
    g.add(toyShop(pick(L.side, 0), pick(L.roof, 1)));
    if (rich) { if (i % 3 === 0) g.add(bench().translateX(4).translateZ(3.4)); if (i % 3 === 1) g.add(toyTree(L.tree, 0.7).translateX(4.4).translateZ(3.2)); }
  } else if (envId === 'industry') {
    g.add(toyFactory(pick(L.side, 2), pick(L.roof, 0)));
    if (rich && i % 3 === 0) g.add(lampPost().translateX(-4.6).translateZ(3.2));
  } else if (envId === 'highway') {
    if (i % 3 === 0) g.add(billboard(L.accent));
    else if (i % 3 === 1) g.add(toyTree(L.tree, 1.1));
    else g.add(bush(L.tree).translateY(0));
    if (rich && i % 2 === 0) g.add(lampPost().translateX(3.6).translateZ(3));
  } else { // bonus: fizzy candy land
    if (i % 3 === 0) g.add(giantCan());
    else if (i % 3 === 1) g.add(lollipop(pick(L.side, 2)));
    else g.add(toyHouse(pick(L.side, 1), pick(L.roof, 0), 5, 4, 5));
    if (rich && i % 2) g.add(lollipop(pick(L.roof, 0)).translateX(4.6).translateZ(3.2));
  }
  return g;
}

// ---------- Hero: the toy superhero (blue felt suit, silver panel, red scarf cape) ----------
function makeHero() {
  const g = new THREE.Group();
  const body = new THREE.Group();
  const blue = M(0x2a5ce8, 0x0a1a5a); const silver = M(0xe2e6f0, 0x2a2a38); const red = M(0xe83a3a, 0x501010);
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

function makeCan() { const g = new THREE.Group(); g.add(mesh(geo.cyl, MS(0x2a6ae8, 0x0a2a8a), 0, 0, 0, 0.58, 0.95, 0.58), mesh(geo.cyl, MS(0xe8ecf4), 0, 0.5, 0, 0.52, 0.08, 0.52), mesh(geo.cyl, M(0xffffff), 0, 0, 0.0, 0.6, 0.32, 0.6)); return g; }

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
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 420);
    this.hemi = new THREE.HemisphereLight(0xfff8ec, 0xc8b8d8, 1.45); this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xfff0d0, 1.35); sun.position.set(-12, 32, -8); this.scene.add(sun);
    this.sun = sun;
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.hero = makeHero(); this.scene.add(this.hero);
    this.fizz = new Fizz(this.scene, this.low ? 120 : 260);
    // road + sidewalks + grass + curbs (long strips that follow the hero)
    this.road = mesh(geo.rbox, M(0x8d92a8), 0, -0.1, 0, 8.4, 0.2, 440); this.scene.add(this.road);
    this.walkL = mesh(geo.rbox, M(0xf6e8d0), -5.6, -0.02, 0, 2.6, 0.26, 440); this.scene.add(this.walkL);
    this.walkR = mesh(geo.rbox, M(0xf6e8d0), 5.6, -0.02, 0, 2.6, 0.26, 440); this.scene.add(this.walkR);
    this.grassL = mesh(geo.rbox, M(0xa8e0a0), -11.5, -0.08, 0, 9, 0.16, 440); this.scene.add(this.grassL);
    this.grassR = mesh(geo.rbox, M(0xa8e0a0), 11.5, -0.08, 0, 9, 0.16, 440); this.scene.add(this.grassR);
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
  _followPano() { if (this.panoMesh) this.panoMesh.position.set(this.camera.position.x, this.camera.position.y + 60, this.camera.position.z); }

  _look(envId) {
    this._setPano((this.envIdx || 0) % 6 + 1);
    const L = LOOKS[envId];
    this.scene.background = new THREE.Color(L.sky); this.scene.fog = new THREE.Fog(L.fog, 55, 210);
    this.road.material = M(L.ground); this.walkL.material = this.walkR.material = M(L.walk); this.grassL.material = this.grassR.material = M(L.grass);
    for (const b of [...this.sideL, ...this.sideR]) this.scene.remove(b.m);
    this.sideL = []; this.sideR = [];
    const perSide = this.low ? 10 : 14;
    for (let side = 0; side < 2; side++) for (let i = 0; i < perSide; i++) {
      const g = makeBlock(envId, i + side * 7, L, !this.low);
      g.scale.setScalar(0.82);
      g.rotation.y = side ? -Math.PI / 2 : Math.PI / 2; // face the street
      this.scene.add(g); (side ? this.sideR : this.sideL).push({ m: g });
    }
    this.hemi.color.set(envId === 'bonus' ? 0xf0d8ff : 0xfff8ec);
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

  _left() { if (this.run && !this.paused) { const l = this.run.lane; this.run.left(); if (l !== this.run.lane) { this.sound.play('lane'); this.lean = 1; } } }
  _right() { if (this.run && !this.paused) { const l = this.run.lane; this.run.right(); if (l !== this.run.lane) { this.sound.play('lane'); this.lean = -1; } } }
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
    if (!m) { m = t.kind === 'can' ? makeCan() : makeObstacle(t.kind, t.id); this.world.add(m); this.meshes.set(t.id, m); }
    return m;
  }

  _render(dt) {
    const r = this.run; const play = !!r; const zr = play ? r.z : (this.demoZ += dt * 18);
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
    this.sideL.forEach((b, i) => { const z = Math.floor((zr - 20) / span) * span + i * span; b.m.position.set(-13.4 - (i % 3) * 1.6, 0, z); });
    this.sideR.forEach((b, i) => { const z = Math.floor((zr - 20) / span) * span + i * span + 8; b.m.position.set(13.4 + (i % 3) * 1.6, 0, z); });
    this.lanes.forEach((d, i) => { const row = Math.floor(i / 2); const z = Math.floor((zr - 6) / 6) * 6 + row * 6; d.position.set(i % 2 ? 1.3 : -1.3, 0.03, z); });
    this.cross.forEach((c, i) => { c.position.set(-3.3 + (i % 8) * 0.95, 0.03, Math.floor((zr - 10) / 90) * 90 + Math.floor(i / 8) * 90); });
    this.road.position.set(0, -0.1, zr + 150);
    this.walkL.position.set(-5.6, -0.02, zr + 150); this.walkR.position.set(5.6, -0.02, zr + 150);
    this.grassL.position.set(-11.5, -0.08, zr + 150); this.grassR.position.set(11.5, -0.08, zr + 150);
    for (const c of this.clouds) { if (c.position.z < zr - 40) c.position.z += 200; c.position.x += Math.sin(this.clock * 0.2 + c.position.y) * dt * 0.4; }
    this.fizz.update(dt);
    // chase camera: low and close, FOV widens with speed, gentle sway with the hero
    this.shake = Math.max(0, (this.shake || 0) - dt * 2);
    const sh = this.shake * 0.4;
    const portrait = this.cw < this.ch;
    const hx = play ? -r.x : 0;
    this.camX = (this.camX ?? hx * 0.55) + (hx * 0.55 - (this.camX ?? 0)) * Math.min(1, dt * 8);
    const kick = play ? Math.min(8, Math.max(0, r.speed - 14) * 0.5) : 0;
    const fovT = (this.baseFov || 62) + kick;
    if (Math.abs(this.camera.fov - fovT) > 0.1) { this.camera.fov += (fovT - this.camera.fov) * Math.min(1, dt * 5); this.camera.updateProjectionMatrix(); }
    this.camera.position.set(this.camX + (Math.random() - 0.5) * sh, (portrait ? 6.6 : 5.1) + (play ? r.y * 0.32 : 0), zr - (portrait ? 9.6 : 8));
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
