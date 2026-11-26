// three.js scene for «Gemlode Quarry». The game keeps its isometric screen layout: the camera uses the same affine map as main.js
//   screenX = ox + (x - y) * s,   screenY = oy + ((x + y) * B - z * C) * s
// so taps, floating text and HUD stay where they were, but everything in the world is real 3D (limbs, lights, shadows, depth).
// World axes: game (x, y, z) -> three (X = x, Y = z, Z = y). Nearer to the viewer = larger x + y.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';

const B = 0.62; const C = 0.95;
const TAU = Math.PI * 2;
const G = { box: new THREE.BoxGeometry(1, 1, 1), sph: new THREE.SphereGeometry(0.5, 20, 14), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 20), cone: new THREE.ConeGeometry(0.5, 1, 14), oct: new THREE.OctahedronGeometry(0.5, 0), cap: new THREE.CapsuleGeometry(0.5, 1, 6, 12) };
const mc = new Map();
function M(color, em = 0, ei = 1, o = {}) {
  const k = `${color}|${em}|${ei}|${o.r ?? 0.7}|${o.f ?? 0}|${o.m ?? 0}`;
  if (!mc.has(k)) mc.set(k, new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.7, metalness: o.m ?? 0, emissive: em, emissiveIntensity: em ? ei : 0, flatShading: !!o.f, side: THREE.DoubleSide }));
  return mc.get(k);
}
function add(par, geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; m.receiveShadow = true; par.add(m); return m; }
function grp(par, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); par.add(g); return g; }
const SHIRTS = [0xe8564a, 0x3a8ae8, 0x3ac88a, 0xe89a3a, 0xc05ae8, 0x58c8e8, 0xe8d23a, 0xf06aa0];

function sandTex() {
  const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d');
  g.fillStyle = '#f0c878'; g.fillRect(0, 0, 512, 512);
  let sd = 11; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(${150 + rnd() * 60},${110 + rnd() * 50},${50 + rnd() * 40},${0.06 + rnd() * 0.12})`; g.beginPath(); g.ellipse(rnd() * 512, rnd() * 512, 2 + rnd() * 14, 1 + rnd() * 5, rnd() * 3, 0, TAU); g.fill(); }
  for (let i = 0; i < 160; i++) { g.fillStyle = 'rgba(255,248,220,.5)'; g.beginPath(); g.arc(rnd() * 512, rnd() * 512, 0.6 + rnd() * 1.6, 0, TAU); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 10); t.anisotropy = 4; return t;
}
function skyTex() {
  const c = document.createElement('canvas'); c.width = 8; c.height = 256; const g = c.getContext('2d');
  const s = g.createLinearGradient(0, 0, 0, 256); s.addColorStop(0, '#6fc3ff'); s.addColorStop(0.6, '#bfe6ff'); s.addColorStop(1, '#ffe9b0'); g.fillStyle = s; g.fillRect(0, 0, 8, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function crystal(H, w, glowMat) {
  const g = new THREE.Group();
  const main = add(g, G.oct, glowMat, 0, H * 0.5, 0, w * 1.6, H, w * 1.6); main.rotation.y = 0.6;
  for (let i = 0; i < 3; i++) { const a = i * 2.1 + 0.4; add(g, G.oct, glowMat, Math.cos(a) * w * 0.9, H * 0.22, Math.sin(a) * w * 0.9, w * 0.8, H * 0.46, w * 0.8).rotation.z = Math.cos(a) * 0.25; }
  add(g, G.cyl, M(0x5a4a60, 0, 0, { r: 0.9 }), 0, 0.08, 0, w * 2.4, 0.18, w * 2.4);
  return g;
}

function crate(par, x, y, z, k = 1) {
  const g = grp(par, x, y, z); const d = 0.62 * k;
  add(g, G.box, M(0xd9a24e, 0, 0, { r: 0.8 }), 0, d * 0.4, 0, d, d * 0.8, d);
  add(g, G.box, M(0x8a5a1c, 0, 0, { r: 0.8 }), 0, d * 0.4, 0, d * 1.03, d * 0.16, d * 1.03); add(g, G.box, M(0x8a5a1c, 0, 0, { r: 0.8 }), 0, d * 0.4, 0, d * 0.16, d * 0.82, d * 1.03);
  add(g, G.oct, M(0xb36cff, 0x7a2be0, 0.9, { f: 1 }), 0, d * 0.88, 0, d * 0.34, d * 0.34, d * 0.34);
  return g;
}

function makeWorker(i) {
  const w = new THREE.Group(); const body = grp(w);
  add(body, G.cap, M(SHIRTS[i % 8]), 0, 1.05, 0, 0.62, 0.55, 0.45);
  add(body, G.box, M(0x2a3550), 0, 0.5, 0, 0.62, 0.12, 0.45);
  const lL = grp(body, -0.17, 0.62, 0); const lR = grp(body, 0.17, 0.62, 0);
  for (const l of [lL, lR]) { add(l, G.cyl, M(0x34405c), 0, -0.3, 0, 0.22, 0.62, 0.22); add(l, G.box, M(0x5a3a1a), 0, -0.64, 0.07, 0.26, 0.14, 0.4); }
  const head = grp(body, 0, 1.75, 0);
  add(head, G.sph, M(0xf2c9a0), 0, 0, 0, 0.62);
  add(head, G.sph, M(0xffc61a, 0, 0, { r: 0.4 }), 0, 0.12, -0.02, 0.7, 0.45, 0.7); add(head, G.cyl, M(0xffc61a, 0, 0, { r: 0.4 }), 0, 0.06, 0.02, 0.78, 0.07, 0.78);
  add(head, G.sph, M(0xffffcc, 0xffffaa, 1.5), 0, 0.2, 0.3, 0.12);
  for (const sx of [-1, 1]) { add(head, G.sph, M(0xffffff), sx * 0.13, 0.0, 0.27, 0.15); add(head, G.sph, M(0x1a1a2a), sx * 0.13, -0.005, 0.33, 0.085); }
  add(head, G.sph, M(0xe89080), 0, -0.1, 0.3, 0.09, 0.05, 0.05);
  const aL = grp(body, -0.42, 1.38, 0); const aR = grp(body, 0.42, 1.38, 0);
  for (const a of [aL, aR]) { add(a, G.cyl, M(SHIRTS[i % 8]), 0, -0.26, 0, 0.17, 0.5, 0.17); add(a, G.sph, M(0xf2c9a0), 0, -0.55, 0, 0.19); }
  const pick = grp(aR, 0, -0.55, 0.05); add(pick, G.cyl, M(0x7a4a1c), 0, 0.25, 0, 0.08, 1.1, 0.08); add(pick, G.box, M(0xcdd2e0, 0, 0, { r: 0.3, m: 0.6 }), 0, 0.8, 0, 0.7, 0.12, 0.12);
  const carry = grp(body, 0, 1.2, 0.5); carry.visible = false;
  w.userData = { body, lL, lR, aL, aR, pick, carry, head };
  return w;
}

function makeTruck() {
  const t = new THREE.Group(); const L = 1.9;
  const lift = grp(t); const wheels = [];
  for (const [px, pz] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) { const w = add(t, G.cyl, M(0x23252c, 0, 0, { r: 0.9 }), px, 0.28, pz, 0.58, 0.28, 0.58); w.rotation.x = Math.PI / 2; add(t, G.cyl, M(0xc8ccd8, 0, 0, { r: 0.3, m: 0.7 }), px, 0.28, pz * 1.0 + Math.sign(pz) * 0.15, 0.28, 0.06, 0.28).rotation.x = Math.PI / 2; wheels.push(w); }
  add(lift, G.box, M(0x3a3e4a), 0, 0.5, 0, L * 0.98, 0.16, 1.0);
  add(lift, G.box, M(0xe8a818, 0, 0, { r: 0.5 }), -0.28, 0.95, 0, L - 0.8, 0.7, 1.05);
  add(lift, G.box, M(0xc98f12, 0, 0, { r: 0.5 }), -0.28, 1.33, 0.5, L - 0.8, 0.1, 0.1); add(lift, G.box, M(0xc98f12, 0, 0, { r: 0.5 }), -0.28, 1.33, -0.5, L - 0.8, 0.1, 0.1);
  add(lift, G.box, M(0xffd84a, 0, 0, { r: 0.45 }), 0.68, 1.0, 0, 0.7, 1.0, 1.05);
  add(lift, G.box, M(0x9ad8ff, 0x4a98d8, 0.4, { r: 0.1 }), 0.9, 1.25, 0, 0.3, 0.42, 0.9);
  for (const sz of [-0.3, 0.3]) add(lift, G.sph, M(0xfff4a0, 0xffe070, 1.4), 1.05, 0.72, sz, 0.18);
  add(lift, G.box, M(0x8a8f9c, 0, 0, { r: 0.4, m: 0.6 }), 1.04, 0.5, 0, 0.1, 0.16, 0.9);
  const slots = []; for (let i = 0; i < 4; i++) { const c = crate(lift, -0.6 + (i % 2) * 0.6, 1.38 + (i >> 1) * 0.5, (i >> 1) ? -0.22 : 0.22, 0.8); c.visible = false; slots.push(c); }
  t.userData = { lift, slots, wheels };
  return t;
}

export class View3D {
  constructor(base = './') {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'warm', tune: { bloom: [0.28, 0.5, 0.88] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.scene.background = skyTex(); this.bgTex = null; new THREE.TextureLoader().load(`${base}poster.webp`, (t) => { t.colorSpace = THREE.SRGBColorSpace; this.bgTex = t; this.scene.background = t; this._cover(); });
    this.cam = new THREE.PerspectiveCamera(); this.cam.matrixAutoUpdate = false; this.cam.matrixWorldAutoUpdate = false;
    this.cam.matrixWorld.identity(); this.cam.matrixWorldInverse.identity();
    this.scene.add(new THREE.HemisphereLight(0xfff0d0, 0x9a7a50, 1.5));
    const sun = new THREE.DirectionalLight(0xfff0cc, 2.2); sun.position.set(14, 30, -6); sun.target.position.set(4, 0, 6); this.scene.add(sun, sun.target);
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 1; sc.far = 120; sun.shadow.bias = -0.0005; sun.position.set(24, 40, 4); sun.target.position.set(4, 0, 6);
    this.W = 1; this.H = 1; this.glow = M(0x8a3be8, 0x7a2be0, 1.0, { f: 1, r: 0.25 });
    const sandM = new THREE.MeshStandardMaterial({ map: sandTex(), roughness: 1 });
    this.ground = new THREE.Mesh(new THREE.BoxGeometry(31, 4, 37), [M(0x8a5a34, 0, 0, { r: 1 }), M(0x8a5a34, 0, 0, { r: 1 }), sandM, M(0x6a4024, 0, 0, { r: 1 }), M(0x8a5a34, 0, 0, { r: 1 }), M(0x8a5a34, 0, 0, { r: 1 })]); this.ground.position.set(2.5, -2.02, 6); this.ground.receiveShadow = true; this.scene.add(this.ground);
    for (const [w, d, x, z] of [[31.8, 0.8, 2.5, -12.4], [31.8, 0.8, 2.5, 24.4], [0.8, 37.8, -13.4, 6], [0.8, 37.8, 18.4, 6]]) { const r = add(this.scene, G.box, M(0x5aa83a, 0, 0, { r: 0.9 }), x, 0.1, z, w, 0.4, d); r.castShadow = false; }
    this.ground.material[2].map.repeat.set(4, 4);
    this._world();
    this.workers = []; for (let i = 0; i < 11; i++) { const w = makeWorker(i); w.visible = false; this.scene.add(w); this.workers.push(w); }
    this.trucks = new Map();
    this.pileG = grp(this.scene); this.pileCrates = []; for (let i = 0; i < 24; i++) { const k = i % 6; const c = crate(this.pileG, 0.05 + (k % 3) * 0.64 + 0.31, 0.18 + Math.floor(i / 6) * 0.5, 0.05 + Math.floor(k / 3) * 0.64 + 0.31, 1); c.visible = false; this.pileCrates.push(c); }
    add(this.pileG, G.box, M(0xa07840, 0, 0, { r: 0.8 }), 0.9, 0.09, 0.8, 2.2, 0.18, 1.6);
    this.roadKey = '';
  }

  _world() {
    const S = this.scene;
    this.roadG = grp(S); this.mineG = grp(S); this.mine2G = grp(S); this.shopG = grp(S);
    const d = grp(S, -3.6, 0, -3.6);
    add(d, G.box, M(0xe8c080, 0, 0, { r: 0.8 }), 0, 1.5, 0, 4, 3.0, 4); add(d, G.box, M(0xd0a060, 0, 0, { r: 0.8 }), 0, 0.2, 0, 4.2, 0.4, 4.2);
    add(d, G.box, M(0x9a4a34, 0, 0, { r: 0.7 }), 0, 3.15, 0, 4.7, 0.35, 4.7); const roof = add(d, G.cone, M(0xc8523a, 0, 0, { r: 0.6 }), 0, 4.0, 0, 6.2, 1.9, 6.2); roof.rotation.y = Math.PI / 4;
    add(d, G.box, M(0x5a3a1a), 2.02, 1.0, 1.2, 0.1, 1.9, 1.3); add(d, G.box, M(0x9ad8ff, 0x4a98d8, 0.4), 2.02, 2.0, -0.9, 0.1, 0.9, 0.9);
    this.depotGem = add(d, G.oct, M(0xb36cff, 0x7a2be0, 1.1, { f: 1 }), 0, 5.6, 0, 1.2, 1.6, 1.2);
    const w = this.shopG; w.position.set(9.8, 0, 3.8);
    add(w, G.box, M(0xd8b0f0, 0, 0, { r: 0.8 }), 0, 1.2, 0, 3.4, 2.4, 3.2); add(w, G.box, M(0x8a5ac0, 0, 0, { r: 0.7 }), 0, 2.55, 0, 3.9, 0.3, 3.7); this.shopGem = add(w, G.oct, M(0xff9ae0, 0xff5ac0, 1.2, { f: 1 }), 0, 4.1, 0, 1.1, 1.6, 1.1);
    add(this.mineG, G.cyl, M(0xc9a060, 0, 0, { r: 1 }), 7.6, 0.02, 15.2, 9.5, 0.04, 6.5);
    for (const c of [[6.4, 15.8, 3.6, 1.0], [7.8, 17.4, 2.8, 0.8], [5.2, 17.0, 2.4, 0.7], [9.0, 18.4, 2.2, 0.7], [4.6, 14.0, 2.0, 0.6], [7.0, 14.4, 1.4, 0.5], [10.0, 17.2, 1.5, 0.5]]) { const cr = crystal(c[2], c[3], this.glow); cr.position.set(c[0], 0, c[1]); this.mineG.add(cr); }
    for (const c of [[2.2, 12.2, 3.0, 0.9], [3.4, 13.4, 2.2, 0.7], [1.2, 13.6, 1.8, 0.6], [3.0, 11.0, 1.6, 0.55]]) { const cr = crystal(c[2], c[3], this.glow); cr.position.set(c[0], 0, c[1]); this.mine2G.add(cr); }
    add(this.mine2G, G.cyl, M(0xc9a060, 0, 0, { r: 1 }), 2.4, 0.02, 12.4, 6.5, 0.04, 4.5);
    add(S, G.box, M(0xffd23a, 0, 0, { r: 0.6 }), 10, 0.05, 10, 2.4, 0.1, 2.4);
    for (let i = -3; i <= 3; i++) add(S, G.box, M(0x2a2a30), 10 + i * 0.6, 0.11, 10, 0.26, 0.02, 2.4).rotation.y = 0.6;
    for (let i = 0; i < 34; i++) { const x = -16 + ((i * 7.7) % 32); const y = -12 + ((i * 13.3) % 34); if (this._near(x, y)) continue; const k = i % 3; if (k === 0) add(S, G.sph, M(0xb08a58, 0, 0, { r: 1, f: 1 }), x, 0.25, y, 0.9 + (i % 4) * 0.3, 0.6, 0.8); else if (k === 1) { const cg = grp(S, x, 0, y); add(cg, G.cyl, M(0x3a9a58), 0, 0.8, 0, 0.45, 1.6, 0.45); add(cg, G.sph, M(0x3a9a58), 0, 1.6, 0, 0.45); add(cg, G.cyl, M(0x3a9a58), 0.4, 1.0, 0, 0.28, 0.7, 0.28); } else add(S, G.cone, M(0xd8b878, 0, 0, { r: 1 }), x, 0.3, y, 1.6, 0.6, 1.6); }
    for (const [x, y] of [[-7, 3], [4, 0.5], [13, 6], [12, 13], [-2, 9], [2, 17.5], [-5, -1]]) { const p = grp(S, x, 0, y); const trunk = add(p, G.cyl, M(0x8a5a2c), 0, 1.6, 0, 0.35, 3.2, 0.35); trunk.rotation.z = 0.15; for (let k = 0; k < 6; k++) { const l = add(p, G.cone, M(0x2fa85a, 0, 0, { r: 0.6 }), Math.cos(k * 1.05) * 0.9 + 0.4, 3.3, Math.sin(k * 1.05) * 0.9, 0.5, 2.0, 0.5); l.rotation.z = -Math.cos(k * 1.05) * 1.2 - 0.3; l.rotation.x = Math.sin(k * 1.05) * 1.2; } add(p, G.sph, M(0x6a3a14), 0.3, 3.1, 0.2, 0.4); }
    for (const [x, y, r] of [[-19, -6, 1.6], [-10, -16, 1.8], [15, -13, 1.6], [16, 7, 1.3], [-14, 7, 1.2], [13, 19, 1.4], [-6, 13, 1.1]]) { const m = add(S, G.cyl, M(0xb9835a, 0, 0, { r: 1, f: 1 }), x, r * 0.5, y, r * 2, r, r * 2); m.rotation.y = x; add(S, G.cyl, M(0xd9a46a, 0, 0, { r: 1, f: 1 }), x, r * 1.02, y, r * 1.7, r * 0.1, r * 1.7); }
  }

  _near(x, y) { return (x > -8 && x < 12 && y > -8 && y < 12) || (x > 0 && x < 13 && y > 9 && y < 20) || (x > -3 && x < 5 && y > 9 && y < 16); }

  _road(level) {
    const key = `${level}`; if (key === this.roadKey) return; this.roadKey = key; this.roadG.clear();
    const edge = level >= 3 ? 0x3a3a44 : level >= 1 ? 0x8a7a64 : 0x9a6a38; const fill = level >= 3 ? 0x5a5a68 : level >= 1 ? 0xa8987e : 0xc08a4c;
    const NODES = [[17, 10], [10, 10], [5, 10], [5, 5], [0, 5], [0, 0]];
    for (let i = 0; i < NODES.length - 1; i++) {
      const a = NODES[i]; const b = NODES[i + 1]; const mx = (a[0] + b[0]) / 2; const my = (a[1] + b[1]) / 2; const lx = Math.abs(b[0] - a[0]); const ly = Math.abs(b[1] - a[1]);
      add(this.roadG, G.box, M(edge, 0, 0, { r: 0.9 }), mx, 0.03, my, lx + 2.7, 0.06, ly + 2.7);
      add(this.roadG, G.box, M(fill, 0, 0, { r: 0.9 }), mx, 0.07, my, lx + 2.3, 0.06, ly + 2.3);
    }
    for (let i = 0; i < NODES.length - 1; i++) { const a = NODES[i]; const b = NODES[i + 1]; const n = Math.round(Math.hypot(b[0] - a[0], b[1] - a[1])); for (let k = 0; k < n; k += 2) { const f = (k + 0.5) / n; add(this.roadG, G.box, M(level >= 3 ? 0xffe27a : 0xe8dcc0, 0, 0, { r: 0.9 }), a[0] + (b[0] - a[0]) * f, 0.11, a[1] + (b[1] - a[1]) * f, b[0] === a[0] ? 0.12 : 0.5, 0.02, b[0] === a[0] ? 0.5 : 0.12); } }
  }

  _cover() {
    const t = this.bgTex; if (!t || !t.image) return; const ta = t.image.width / t.image.height; const sa = this.W / this.H;
    t.repeat.set(1, 1); t.offset.set(0, 0);
    if (sa > ta) { t.repeat.y = ta / sa; t.offset.y = (1 - t.repeat.y) / 2; } else { t.repeat.x = sa / ta; t.offset.x = (1 - t.repeat.x) / 2; }
    t.needsUpdate = true;
  }
  setSize(w, h) { this.W = w; this.H = h; this.renderer.setSize(w, h, false); this._cover(); }

  setLayout(s, ox, oy) {
    const W = this.W; const H = this.H;
    this.cam.projectionMatrix.set(
      2 * s / W, 0, -2 * s / W, 2 * ox / W - 1,
      -2 * s * B / H, 2 * s * C / H, -2 * s * B / H, 1 - 2 * oy / H,
      -0.02, -0.014, -0.02, 0,
      0, 0, 0, 1);
    this.cam.projectionMatrixInverse.copy(this.cam.projectionMatrix).invert();
  }

  render(o) {
    const { q, clock, trucks, diggers, loader, glow } = o;
    this._road(q.up.road); this.mine2G.visible = !!q.up.mine2; this.shopG.visible = q.up.polish > 0;
    this.glow.emissiveIntensity = 0.7 + glow * 0.6; this.depotGem.rotation.y = clock * 1.2; this.depotGem.position.y = 5.6 + Math.sin(clock * 2) * 0.15;
    this.shopGem.rotation.y = -clock * 1.6; this.shopGem.scale.setScalar(1.0 + q.up.polish * 0.28);
    this.pileG.position.set(o.pileAt[0] + (q.isFull() ? Math.sin(clock * 30) * 0.04 : 0), 0, o.pileAt[1]);
    this.pileCrates.forEach((c, i) => { c.visible = i < o.pile; });
    let wi = 0;
    const place = (x, y, i, busy, carry) => {
      const w = this.workers[wi++]; w.visible = true; w.position.set(x, 0, y); w.rotation.y = Math.PI / 4; w.scale.setScalar(1.45);
      const u = w.userData; const sw = busy ? Math.sin(clock * 7 + i * 1.7) : Math.sin(clock * 8 + i) * 0.7;
      u.body.position.y = Math.abs(sw) * 0.06; u.aR.rotation.x = busy ? -1.6 + sw * 1.1 : Math.sin(clock * 8 + i) * 0.5; u.aL.rotation.x = busy ? -0.5 - sw * 0.3 : -Math.sin(clock * 8 + i) * 0.5;
      u.pick.visible = !!busy; u.lL.rotation.x = busy ? 0 : sw * 0.6; u.lR.rotation.x = busy ? 0 : -sw * 0.6; u.head.rotation.y = Math.sin(clock * 1.3 + i) * 0.25;
      u.carry.visible = carry > 0; if (carry > 0 && !u.carry.children.length) crate(u.carry, 0, 0, 0, 0.7);
    };
    for (const d of diggers) place(d.x, d.y, d.i, d.busy, d.carry || 0);
    if (loader) place(loader.x, loader.y, 3, false, loader.carry);
    for (; wi < this.workers.length;) this.workers[wi++].visible = false;
    const seen = new Set();
    for (const t of trucks) {
      seen.add(t.id); let tr = this.trucks.get(t.id);
      if (!tr) { tr = makeTruck(); this.scene.add(tr); this.trucks.set(t.id, tr); }
      tr.visible = true; tr.position.set(t.x, 0, t.y); tr.scale.setScalar(1.35);
      tr.rotation.y = t.ax === 'x' ? (t.sign > 0 ? 0 : Math.PI) : (t.sign > 0 ? -Math.PI / 2 : Math.PI / 2);
      const u = tr.userData; u.lift.position.y = t.bob * 1.2; u.wheels.forEach((wh) => { wh.rotation.y += t.moving ? 0.3 : 0; });
      const n = Math.min(4, Math.ceil((t.load / t.cap) * 4)); u.slots.forEach((c, i) => { c.visible = i < n; });
    }
    for (const [id, tr] of this.trucks) if (!seen.has(id)) tr.visible = false;
    this.renderer.render(this.scene, this.cam);
  }

  dispose() { this.renderer.dispose(); }
}
