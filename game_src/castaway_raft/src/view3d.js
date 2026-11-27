// three.js renderer for «Castaway Raft». The sim keeps its screen-fraction coordinates; an orthographic, tilted camera maps the sea plane
// to the screen linearly, so taps (screen fractions) land exactly where they did before. World unit = 1 "u" = min(W,H)/100 px.
// Real 3D: rolling water with glints, a plank raft with sail, hut and fishing rod, a castaway with limbs that throws the hook, floating
// planks/barrels/crates/golden bottles, a circling shark, and islands with palms, rocks, coral and a treasure chest rising from the top.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';

const TAU = Math.PI * 2, EL = (38 * Math.PI) / 180, SIN = Math.sin(EL), COS = Math.cos(EL);
const CELLS = [[1, 1], [0, 1], [1, 2], [0, 2], [1, 0], [0, 0], [2, 1], [2, 2], [2, 0]];
const G = {
  box: new THREE.BoxGeometry(1, 1, 1), sph: new THREE.SphereGeometry(0.5, 18, 12), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 16), cone: new THREE.ConeGeometry(0.5, 1, 14),
  tor: new THREE.TorusGeometry(0.5, 0.05, 6, 36), disc: new THREE.CircleGeometry(0.5, 28), hem: new THREE.SphereGeometry(0.5, 18, 8, 0, TAU, 0, Math.PI / 2),
};
const mc = new Map();
function M(color, em = 0, ei = 1, o = {}) {
  const k = `${color}|${em}|${ei}|${o.r ?? 0.6}|${o.t ?? 1}`;
  if (!mc.has(k)) mc.set(k, new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.6, metalness: o.m ?? 0, emissive: em, emissiveIntensity: em ? ei : 0, transparent: (o.t ?? 1) < 1, opacity: o.t ?? 1, side: o.d ? THREE.DoubleSide : THREE.FrontSide }));
  return mc.get(k);
}
function add(par, geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); par.add(m); return m; }
function grp(par, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); par.add(g); return g; }

const WOOD = M(0xc48a46, 0, 0, { r: 0.7 }), WOOD2 = M(0x8a5a2a, 0, 0, { r: 0.8 }), ROPE = M(0xe8d8a0), SKIN = M(0xf2c9a0, 0, 0, { r: 0.8 });

function makeHero() {
  const g = new THREE.Group(), P = {};
  P.legs = [-1, 1].map((s) => { const l = grp(g, s * 0.1, 0.4, 0); add(l, G.cyl, M(0x2a4a8a), 0, -0.2, 0, 0.17, 0.4, 0.17); add(l, G.box, M(0x5a3a1a), 0, -0.4, 0.04, 0.2, 0.08, 0.3); return l; });
  P.body = grp(g, 0, 0.4, 0);
  add(P.body, G.cyl, M(0xf4f4f4), 0, 0.3, 0, 0.5, 0.6, 0.4);
  for (let i = 0; i < 3; i++) add(P.body, G.cyl, M(0xd83a2a), 0, 0.14 + i * 0.17, 0, 0.51, 0.07, 0.41);
  P.arms = [-1, 1].map((s) => { const a = grp(P.body, s * 0.3, 0.52, 0); add(a, G.cyl, SKIN, 0, -0.17, 0, 0.12, 0.38, 0.12); add(a, G.sph, SKIN, 0, -0.38, 0, 0.14); return a; });
  P.head = grp(P.body, 0, 0.86, 0);
  add(P.head, G.sph, SKIN, 0, 0, 0, 0.6, 0.58, 0.55);
  [-1, 1].forEach((s) => { add(P.head, G.sph, M(0xffffff), s * 0.12, 0.04, 0.24, 0.14); add(P.head, G.sph, M(0x2a1a0a), s * 0.12, 0.04, 0.3, 0.075); add(P.head, G.sph, M(0xff9a8a), s * 0.2, -0.08, 0.22, 0.1, 0.07, 0.04); });
  add(P.head, G.sph, M(0xc8503a), 0, -0.13, 0.27, 0.12, 0.05, 0.04);
  add(P.head, G.cyl, M(0xe8c868), 0, 0.3, -0.1, 0.8, 0.04, 0.8); add(P.head, G.cyl, M(0xe8c868), 0, 0.38, -0.1, 0.46, 0.18, 0.46); add(P.head, G.cyl, M(0xd83a2a), 0, 0.33, -0.1, 0.47, 0.05, 0.47);
  return { g, P };
}
function makeShark() {
  const g = new THREE.Group(), P = {}; const sk = M(0x4a5a7a, 0, 0, { r: 0.4 });
  P.body = grp(g); add(P.body, G.sph, sk, 0, 0.4, 0, 1.6, 1.2, 4.4); add(P.body, G.sph, M(0xe8f0ff), 0, 0.1, 0.2, 1.2, 0.7, 3.4);
  add(P.body, G.cone, M(0x3a4a6a), 0, 1.4, -0.2, 1.0, 1.8, 0.5).rotation.x = -0.3;
  P.tail = grp(P.body, 0, 0.5, -2.1); add(P.tail, G.cone, M(0x3a4a6a), 0, 0.2, -0.6, 0.3, 1.8, 1.4).rotation.x = -1.4;
  [-1, 1].forEach((s) => { const f = add(P.body, G.cone, M(0x3a4a6a), s * 0.85, 0.2, 0.6, 0.15, 1.1, 0.8); f.rotation.z = -s * 1.1; add(P.body, G.sph, M(0xffffff), s * 0.34, 0.65, 1.6, 0.34); add(P.body, G.sph, M(0x10142c), s * 0.38, 0.66, 1.78, 0.18); });
  return { g, P };
}
function makeItem(kind) {
  const g = new THREE.Group(); const o = grp(g, 0, 0.3, 0);
  const ring = add(g, G.tor, M(0xffffff, 0xffffff, 0.5, { t: 0.7 }), 0, 0.06, 0, 10.8, 10.8, 6.8); ring.rotation.x = Math.PI / 2; ring.scale.set(10.8, 6.8, 10.8); ring.rotation.x = Math.PI / 2;
  if (kind === 'plank') { add(o, G.box, WOOD, 0, 0.5, 0, 8.8, 1.0, 2.2); add(o, G.box, WOOD2, 0, 1.05, 0, 8.4, 0.12, 0.2); add(o, G.box, ROPE, -2.6, 0.55, 0, 0.5, 1.05, 2.3); add(o, G.box, ROPE, 2.6, 0.55, 0, 0.5, 1.05, 2.3); }
  else if (kind === 'barrel') { add(o, G.cyl, M(0x9a5a2a, 0, 0, { r: 0.7 }), 0, 2, 0, 5.4, 4, 5.4); [0.7, 3.3].forEach((y) => add(o, G.cyl, M(0x4a4a58, 0, 0, { m: 0.5 }), 0, y, 0, 5.6, 0.5, 5.6)); add(o, G.cyl, M(0xc88a4a), 0, 4.02, 0, 4.6, 0.1, 4.6); }
  else if (kind === 'crate') { add(o, G.box, M(0xb8803a, 0, 0, { r: 0.7 }), 0, 2.4, 0, 5.4, 4.8, 5.4); for (const [x, z] of [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]]) add(o, G.box, WOOD2, x, 2.4, z, 0.6, 4.9, 0.6); add(o, G.box, WOOD2, 0, 4.85, 0, 5.6, 0.3, 0.8); add(o, G.box, WOOD2, 0, 4.85, 0, 0.8, 0.3, 5.6); }
  else { const gl = M(0xffd23a, 0xffc020, 0.9, { r: 0.15 }); add(o, G.sph, gl, 0, 2.2, 0, 3.4, 4.4, 3.4); add(o, G.cyl, gl, 0, 4.8, 0, 1.2, 2.4, 1.2); add(o, G.cyl, M(0xc8924a), 0, 6.2, 0, 1.6, 0.9, 1.6); add(o, G.sph, M(0xffffff, 0xffffff, 1, { t: 0.7 }), 0.8, 3.0, 1.4, 0.8); o.userData.glow = true; }
  return { g, o, kind };
}
function palm(h = 12) {
  const g = new THREE.Group(); const segs = 5; let x = 0, y = 0;
  for (let i = 0; i < segs; i++) { const nx = x + 0.5, ny = y + h / segs; const m = add(g, G.cyl, M(0x8a5a2a), (x + nx) / 2, (y + ny) / 2, 0, 1.4 - i * 0.12, h / segs + 0.3, 1.4 - i * 0.12); m.rotation.z = -Math.atan2(nx - x, ny - y); x = nx; y = ny; }
  const top = grp(g, x, y, 0);
  for (let i = 0; i < 7; i++) { const a = (i / 7) * TAU; const l = grp(top, 0, 0, 0); l.rotation.y = a; const leaf = add(l, G.sph, M(0x3aa84a, 0x0a4a10, 0.3, { r: 0.7 }), 3.2, -0.4, 0, 7, 0.4, 2.2); leaf.rotation.z = -0.35; }
  add(top, G.sph, M(0x6a3a1a), 0.4, -0.6, 0.4, 0.9); add(top, G.sph, M(0x6a3a1a), -0.4, -0.6, -0.2, 0.9);
  return g;
}
function chest() {
  const g = new THREE.Group(); add(g, G.box, M(0x8a4a1a, 0, 0, { r: 0.6 }), 0, 1.5, 0, 6, 3, 4); add(g, G.cyl, M(0x8a4a1a), 0, 3, 0, 4, 6, 4).rotation.z = Math.PI / 2;
  add(g, G.box, M(0xffd23a, 0xffc020, 0.7, { r: 0.3 }), 0, 1.6, 2.05, 1.2, 1.4, 0.3); [-2, 2].forEach((x) => add(g, G.box, M(0xffd23a, 0xffc020, 0.5), x, 2, 0, 0.5, 5, 4.2));
  for (let i = 0; i < 6; i++) add(g, G.sph, M(0xffe04a, 0xffc020, 1.2, { r: 0.2 }), -2 + i * 0.8, 4.4 + (i % 2) * 0.3, 0, 1.1);
  return g;
}
function waterTex() { return null; }

export class View3D {
  constructor() {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'warm', tune: { bloom: [0.08, 0.5, 0.95] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(0x2a9ae0);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 600);
    this.scene.add(new THREE.HemisphereLight(0xcfeaff, 0x2a5a98, 0.75)); const sun = new THREE.DirectionalLight(0xfff0d0, 2.2); sun.position.set(-30, 50, 10); this.scene.add(sun); const fill = new THREE.DirectionalLight(0xfff4e0, 1.6); fill.position.set(10, 40, 45); this.scene.add(fill);
    this.W = 1; this.H = 1; this.u = 1;
    // water
    const seg = 56; this.wg = new THREE.PlaneGeometry(1, 1, seg, seg); this.wg.rotateX(-Math.PI / 2);
    const col = new Float32Array(this.wg.attributes.position.count * 3); this.wg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.water = new THREE.Mesh(this.wg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.18, metalness: 0.1, flatShading: false })); this.scene.add(this.water);
    this.base0 = this.wg.attributes.position.array.slice();
    // foam sparkles
    this.sp = []; for (let i = 0; i < 48; i++) { const m = add(this.scene, G.disc, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false }), 0, 0.2, 0, 1, 1, 1); m.rotation.x = -Math.PI / 2; m.userData = { fx: (i * 0.37 + 0.13) % 1, fy: (i * 0.211) % 1, s: 1 + (i % 4) * 0.8 }; this.sp.push(m); }
    this.clouds = []; for (let i = 0; i < 4; i++) { const c = new THREE.Group(); for (let k = 0; k < 4; k++) add(c, G.sph, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }), (k - 1.5) * 4, 30 + (k % 2) * 1.5, 0, 7 - Math.abs(k - 1.5) * 1.5, 4, 5); const sh = add(c, G.disc, new THREE.MeshBasicMaterial({ color: 0x0a2a60, transparent: true, opacity: 0.18, depthWrite: false }), 0, 0.15, 0, 24, 14, 1); sh.rotation.x = -Math.PI / 2; c.userData = { fx: i * 0.29 + 0.1, fy: (i * 0.41 + 0.2) % 1, sp: 0.004 + i * 0.002 }; this.scene.add(c); this.clouds.push(c); }
    // raft
    this.raft = new THREE.Group(); this.scene.add(this.raft); this.tiles = []; this.rs = 14.5;
    this.hero = makeHero(); this.raft.add(this.hero.g);
    this.foam = add(this.raft, G.disc, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22, depthWrite: false }), 0, 0.12, 0, 1, 1, 1); this.foam.rotation.x = -Math.PI / 2;
    this.sail = null; this.hut = null; this.rod = null; this.nTiles = -1; this.flags = '';
    this.items = new Map(); this.shark = makeShark(); this.shark.g.visible = false; this.scene.add(this.shark.g);
    this.rope = new THREE.Mesh(new THREE.BufferGeometry(), M(0xf4e8c8)); this.rope.visible = false; this.scene.add(this.rope);
    this.hookM = grp(this.scene); add(this.hookM, G.tor, M(0xc8ccd4, 0, 0, { m: 0.7, r: 0.3 }), 0, 0, 0, 2.6, 2.6, 2.6).rotation.x = 0; this.hookM.visible = false;
    this.hring = add(this.scene, G.tor, M(0xffffff, 0xffffff, 0.6, { t: 0.7 }), 0, 0.3, 0, 6, 3.2, 6); this.hring.rotation.x = Math.PI / 2; this.hring.visible = false;
    this.isl = null; this.islKind = '';
  }
  setSize(w, h, u) {
    this.W = w; this.H = h; this.u = u; this.renderer.setSize(w, h, false);
    const wd = w / u, hd = h / u; Object.assign(this.cam, { left: -wd / 2, right: wd / 2, top: hd / 2, bottom: -hd / 2 }); this.cam.updateProjectionMatrix();
    const D = 200; this.cam.position.set(0, D * SIN, D * COS); this.cam.lookAt(0, 0, 0); this.cam.updateMatrixWorld(true);
    const wx = wd + 24, wz = hd / SIN + 40; this.wx = wx; this.wz = wz;
    this.water.scale.set(wx, 1, wz);
  }
  X(fx) { return (fx * this.W - this.W / 2) / this.u; }
  Z(fy) { return (fy * this.H - this.H / 2) / (this.u * SIN); }
  project(x, y, z) { const v = new THREE.Vector3(x, y, z).project(this.cam); return [(v.x + 1) / 2 * this.W, (1 - v.y) / 2 * this.H]; }
  _tiles(n) {
    for (const t of this.tiles) this.raft.remove(t); this.tiles = []; const s = this.rs;
    for (let i = 0; i < n; i++) {
      const [cx, cy] = CELLS[i]; const t = grp(this.raft, (cx - 1) * s, 0, (cy - 1) * s);
      add(t, G.box, WOOD, 0, 0.5, 0, s * 0.98, 1.0, s * 0.98);
      for (let k = 0; k < 4; k++) { add(t, G.box, k % 2 ? WOOD2 : M(0xd09a56, 0, 0, { r: 0.7 }), 0, 1.02, (k - 1.5) * s * 0.245, s * 0.96, 0.18, s * 0.2); }
      add(t, G.box, ROPE, -s * 0.2, 1.1, 0, 0.9, 0.25, s * 0.99); add(t, G.box, ROPE, s * 0.2, 1.1, 0, 0.9, 0.25, s * 0.99);
      this.tiles.push(t);
    }
  }
  _extras(b) {
    const s = this.rs;
    if (this.sail) this.raft.remove(this.sail); if (this.hut) this.raft.remove(this.hut); if (this.rod) this.raft.remove(this.rod);
    this.sail = this.hut = this.rod = null;
    if (b.sail) { const g = this.sail = grp(this.raft, -s * 0.9, 1, -s * 0.2); add(g, G.cyl, M(0x5a3a1a), 0, s * 0.95, 0, 0.9, s * 1.9, 0.9); this.sailCloth = add(g, G.sph, M(0xf4e8d0, 0, 0, { r: 0.9, d: 1 }), s * 0.45, s * 0.95, 0, s * 0.9, s * 1.35, 0.5); add(g, G.box, M(0xe86a5a), s * 0.35, s * 1.05, 0.4, s * 0.3, s * 0.34, 0.2); add(g, G.sph, M(0xffd23a, 0xffc020, 1), 0, s * 1.95, 0, 1.6); const fl = add(g, G.cone, M(0xe86a5a), 1.6, s * 1.9, 0, 1.2, 3.2, 0.3); fl.rotation.z = -Math.PI / 2; }
    if (b.hut) { const g = this.hut = grp(this.raft, s * 0.45, 1, -s * 0.55); add(g, G.box, M(0xd8b878, 0, 0, { r: 0.8 }), 0, s * 0.35, 0, s * 1.15, s * 0.7, s * 0.95); add(g, G.cone, M(0xb8453a), 0, s * 0.95, 0, s * 1.55, s * 0.6, s * 1.35).rotation.y = Math.PI / 4; add(g, G.box, M(0x5a3a1a), 0, s * 0.22, s * 0.48, s * 0.3, s * 0.44, 0.3); add(g, G.sph, M(0xffe08a, 0xffd060, 0.8), s * 0.3, s * 0.4, s * 0.48, 1.2); }
    if (b.fish) { const g = this.rod = grp(this.raft, s * 1.2, 1, s * 0.35); const r = add(g, G.cyl, M(0x6a4a2a), s * 0.5, s * 0.35, 0, 0.5, s * 1.1, 0.5); r.rotation.z = -1.0; add(g, G.cyl, M(0xffffff, 0xffffff, 0.3), s * 1.0, s * 0.02, 0, 0.12, s * 0.62, 0.12).position.y = -s * 0.1; this.bob = add(g, G.sph, M(0xd83a2a, 0xd83a2a, 0.6), s * 1.0, -0.5, 0, 1.8); add(g, G.sph, M(0xffffff), s * 1.0, -0.2, 0, 0.9); }
  }
  _island(approach, lift, kind, tm) {
    if (this.islKind !== kind) {
      if (this.isl) this.scene.remove(this.isl); const g = this.isl = new THREE.Group(); this.islKind = kind;
      const sand = M(kind === 'rock' ? 0xa89a8a : kind === 'gold' ? 0xffe08a : 0xf0d08a, 0, 0, { r: 0.9 }); const wx = this.wx;
      add(g, G.box, M(0x5adada, 0x20a8b0, 0.3, { t: 0.55, r: 0.2 }), 0, 0.2, -30, wx, 0.3, 70).position.z = 6 - 30 + 6 + 6;
      add(g, G.box, sand, 0, 0.6, -40, wx, 2.2, 80).position.z = -30 + 6 - 8;
      const foam = add(g, G.box, M(0xffffff, 0xffffff, 0.4, { t: 0.85 }), 0, 1.7, 8.5, wx, 0.3, 2.2); void foam;
      const cx = 0, cz = -14;
      const x = add(g, G.box, M(0xd83a2a, 0xd83a2a, 0.4), cx, 1.8, cz, 12, 0.3, 2.2); x.rotation.y = 0.78; const x2 = add(g, G.box, M(0xd83a2a, 0xd83a2a, 0.4), cx, 1.8, cz, 12, 0.3, 2.2); x2.rotation.y = -0.78;
      if (kind === 'palm' || kind === 'sand') { const p = palm(14); p.position.set(-this.wx * 0.32, 1.5, -22); g.add(p); const p2 = palm(10); p2.position.set(this.wx * 0.34, 1.5, -30); p2.rotation.y = 2; g.add(p2); const p3 = palm(12); p3.position.set(this.wx * 0.14, 1.5, -40); g.add(p3); }
      else if (kind === 'coral') { for (let i = 0; i < 9; i++) { const c = add(g, G.cone, M(i % 2 ? 0xff7aa8 : 0xff9a5a, 0, 0, { r: 0.5 }), (i - 4) * wx * 0.1, 3, -18 - (i % 3) * 8, 3, 6 + (i % 3) * 2, 3); c.rotation.z = (i % 3 - 1) * 0.2; } }
      else for (const [rx, rz, r] of [[-0.3, -16, 7], [0.32, -24, 9], [0.1, -34, 6], [-0.12, -44, 8]]) { const rk = add(g, G.sph, M(0x7a7a82, 0, 0, { r: 0.9 }), rx * wx, 2, rz, r * 1.5, r, r * 1.3); rk.rotation.y = rz; }
      if (kind === 'gold') { const c = chest(); c.position.set(wx * 0.18, 1.5, -20); g.add(c); this.chest = c; }
      this.scene.add(g);
    }
    const base = this.H * (0.62 * approach + lift * 0.25);
    this.isl.visible = approach > 0.001 || lift > 0; this.isl.position.set(0, 0, this.Z(base / this.H) - 6);
    if (this.chest) this.chest.rotation.y = tm;
  }
  render(o) {
    const { v, tm, raftFy, rs, drift } = o; this.rs !== rs && (this.rs = rs, this.nTiles = -1);
    // water
    const pos = this.wg.attributes.position, col = this.wg.attributes.color, b0 = this.base0; const wx = this.wx, wz = this.wz;
    const sc = drift * this.H / this.u / SIN; const cA = [0.08, 0.5, 0.95], cB = [0.03, 0.24, 0.66];
    for (let i = 0; i < pos.count; i++) {
      const x = b0[i * 3] * wx, z = b0[i * 3 + 2] * wz; const h = Math.sin(x * 0.28 + tm * 1.3) * 0.5 + Math.sin((z - sc) * 0.22 + tm * 1.1 + x * 0.1) * 0.6 + Math.sin((z - sc) * 0.5 - tm * 1.7) * 0.2;
      pos.setY(i, h * 0.8); const k = (h + 1.3) / 2.6; col.setXYZ(i, cB[0] + (cA[0] - cB[0]) * k, cB[1] + (cA[1] - cB[1]) * k, cB[2] + (cA[2] - cB[2]) * k);
    }
    pos.needsUpdate = true; col.needsUpdate = true; this.wg.computeVertexNormals(); this.water.position.set(0, -1, 0);
    // sparkles & clouds
    for (const m of this.sp) { const d = m.userData; const fy = ((d.fy + drift * 1.2) % 1.1) - 0.05; m.position.set(this.X(d.fx), 0.4, this.Z(fy)); const k = 0.6 + 0.4 * Math.sin(tm * 3 + d.fx * 20); m.scale.set(d.s * 3 * k, d.s * 1.2 * k, 1); }
    for (const c of this.clouds) { const d = c.userData; d.fx = (d.fx + d.sp * 0.016) % 1.3; c.position.set(this.X(d.fx - 0.15), 0, this.Z(d.fy)); }
    // raft
    const n = v.built.tile, fl = `${v.built.sail}${v.built.hut}${v.built.fish}`;
    if (n !== this.nTiles) { this.nTiles = n; this._tiles(n); }
    if (fl !== this.flags || this.exRs !== this.rs) { this.flags = fl; this.exRs = this.rs; this._extras(v.built); }
    const bob = Math.sin(tm * 1.6) * 0.5; this.raft.position.set(this.X(0.5), bob, this.Z(raftFy)); this.raft.rotation.z = Math.sin(tm * 1.1) * 0.02; this.raft.rotation.x = Math.sin(tm * 0.9) * 0.02;
    const s = this.rs; this.foam.scale.set(s * 3, s * 3, 1); this.foam.position.y = 0.1 - bob;
    const throwing = v.hook && v.hook.phase === 'out'; const H = this.hero; H.g.position.set(s * 0.1, 1.05, s * 0.4); H.g.scale.setScalar(s * 1.2); const hop = Math.abs(Math.sin(tm * 3));
    H.P.body.position.y = 0.4 + hop * 0.03; H.P.arms[0].rotation.x = Math.sin(tm * 2) * 0.25; H.P.arms[0].rotation.z = 0.15;
    H.P.arms[1].rotation.x = throwing ? -2.6 : 0.1; H.P.arms[1].rotation.z = throwing ? -0.4 : -0.15; H.P.head.rotation.z = Math.sin(tm * 1.5) * 0.05; H.P.legs.forEach((l, i) => { l.rotation.x = Math.sin(tm * 3 + i * Math.PI) * 0.06; });
    if (this.sailCloth) { this.sailCloth.scale.z = 0.5 + Math.sin(tm * 2) * 0.12; this.sailCloth.rotation.y = Math.sin(tm * 1.6) * 0.1; }
    if (this.bob && v.built.fish) this.bob.position.y = -0.5 + Math.sin(tm * 3) * 0.4;
    // items
    const seen = new Set();
    for (const it of v.items) { seen.add(it.id); let e = this.items.get(it.id); if (!e) { e = makeItem(it.kind); this.scene.add(e.g); this.items.set(it.id, e); } e.g.position.set(this.X(it.x), 0, this.Z(it.y)); e.o.position.y = 0.3 + Math.sin(tm * 2 + it.ph) * 0.5; e.o.rotation.y = Math.sin(tm * 1.3 + it.ph) * 0.4; e.o.rotation.z = Math.sin(tm * 1.7 + it.ph) * 0.1; if (e.o.userData.glow) e.o.scale.setScalar(1 + Math.sin(tm * 4) * 0.05); }
    for (const [id, e] of this.items) if (!seen.has(id)) { this.scene.remove(e.g); this.items.delete(id); }
    // shark
    const sh = v.shark; this.shark.g.visible = sh.state !== 'none';
    if (sh.state !== 'none') { const nx = this.X(sh.x), nz = this.Z(sh.y); const g = this.shark.g; const dx = nx - g.position.x, dz = nz - g.position.z; if (Math.hypot(dx, dz) > 0.02) g.rotation.y = Math.atan2(dx, dz); g.position.set(nx, -0.2 + (sh.state === 'bite' ? 0.9 : 0), nz); this.shark.P.tail.rotation.y = Math.sin(tm * 6) * 0.5; this.shark.P.body.rotation.z = Math.sin(tm * 3) * 0.05; g.scale.setScalar(1.6); }
    // hook
    const hk = v.hook; this.rope.visible = this.hookM.visible = this.hring.visible = hk.phase !== 'idle';
    if (hk.phase !== 'idle') {
      const hx = this.X(hk.hx), hz = this.Z(hk.hy); const a = new THREE.Vector3(this.raft.position.x + s * 0.35, 9 + bob, this.raft.position.z + s * 0.2), bpt = new THREE.Vector3(hx, 0.8, hz);
      const mid = a.clone().lerp(bpt, 0.5); mid.y += 2 + Math.sin(tm * 12) * 0.4; const curve = new THREE.QuadraticBezierCurve3(a, mid, bpt);
      this.rope.geometry.dispose(); this.rope.geometry = new THREE.TubeGeometry(curve, 14, 0.28, 5, false);
      this.hookM.position.copy(bpt); this.hookM.rotation.y = tm * 2; this.hring.position.set(hx, 0.4, hz); const kk = 1 + hk.t * 2; this.hring.scale.set(6 * kk, 3.2 * kk, 6 * kk); this.hring.visible = hk.phase === 'out' || (hk.phase === 'back' && hk.t < 0.1);
    }
    this._island(Math.max(0, (v.progress - 0.78) / 0.22), v.state === 'landing' ? Math.min(1, v.landT / 2) : 0, v.level.isl, tm);
    this.renderer.render(this.scene, this.cam);
  }
  dispose() { this.renderer.dispose(); }
}
void waterTex;
