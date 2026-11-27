// three.js renderer for «Neon Card Battle»: a floating neon hexagon arena in space, a robot tower vs an alien UFO, and real 3D robots and
// aliens with legs, arms and heads that walk, lunge and flash. The sim and the 2D overlay (bars, texts, sparks) are unchanged; this view
// also supplies the camera projection (project/unproject) so the overlay and the drag-drop stay locked to the 3D world.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';

const TAU = Math.PI * 2;
const CX = 5, L = 16, HALF = 8;
const G = {
  sph: new THREE.SphereGeometry(0.5, 20, 14), hem: new THREE.SphereGeometry(0.5, 22, 10, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 18), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 14),
  disc: new THREE.CircleGeometry(0.5, 24), tor: new THREE.TorusGeometry(0.5, 0.06, 8, 32), ico: new THREE.IcosahedronGeometry(0.5, 0),
};
const mc = new Map();
function M(color, em = 0, ei = 0.8, o = {}) {
  const k = `${color}|${em}|${ei}|${o.r ?? 0.45}|${o.m ?? 0.1}|${o.t ?? 1}`;
  if (!mc.has(k)) mc.set(k, new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.45, metalness: o.m ?? 0.1, emissive: em, emissiveIntensity: em ? ei : 0, transparent: (o.t ?? 1) < 1, opacity: o.t ?? 1 }));
  return mc.get(k);
}
function add(par, geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); par.add(m); return m; }
function grp(par, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); par.add(g); return g; }

// ---------- characters (built at height ~1, scaled per unit) ----------
const EYE = M(0xffffff, 0xffffff, 0.6), DARK = M(0x10142c, 0, 0, { r: 0.2, m: 0.5 });
function robot(c, kind) {
  const g = new THREE.Group(); const P = { kind };
  const body = M(c.body, 0, 0, { m: 0.35, r: 0.3 }), trim = M(c.trim, c.trim, 0.9), joint = M(0x2a2f55, 0, 0, { m: 0.5, r: 0.4 });
  const big = kind === 'smash';
  const w = big ? 0.56 : kind === 'swarm' ? 0.4 : 0.42;
  P.root = grp(g); const R = P.root;
  P.legs = [-1, 1].map((s) => { const l = grp(R, s * w * 0.42, 0.3, 0); add(l, G.cyl, body, 0, -0.14, 0, 0.17, 0.3, 0.17); add(l, G.box, joint, 0, -0.3, 0.05, 0.22, 0.08, 0.3); return l; });
  P.torso = grp(R, 0, 0.3, 0);
  add(P.torso, G.sph, body, 0, 0.17, 0, w * 1.15, 0.5, w * 0.95);
  add(P.torso, G.cyl, trim, 0, 0.26, w * 0.34, 0.18, 0.02, 0.18).rotation.x = Math.PI / 2;
  add(P.torso, G.cyl, trim, 0, 0.08, 0, w * 1.18, 0.04, w * 0.98);
  if (big) { [-1, 1].forEach((s) => add(P.torso, G.sph, trim, s * w * 0.66, 0.38, 0, 0.3, 0.2, 0.3)); }
  P.head = grp(P.torso, 0, 0.5, 0.02);
  add(P.head, G.sph, body, 0, 0.1, 0, big ? 0.5 : 0.52, 0.4, 0.46);
  add(P.head, G.box, DARK, 0, 0.1, 0.17, 0.4, 0.2, 0.18);
  P.eyes = [-1, 1].map((s) => add(P.head, G.sph, M(c.eye, c.eye, 1.4), s * 0.09, 0.11, 0.255, 0.1, 0.1, 0.05));
  add(P.head, G.cyl, joint, 0, 0.34, 0, 0.03, 0.14, 0.03); add(P.head, G.sph, trim, 0, 0.43, 0, 0.09);
  P.arms = [-1, 1].map((s) => {
    const a = grp(P.torso, s * (w * 0.62 + 0.05), 0.32, 0);
    add(a, G.cyl, joint, 0, -0.14, 0, 0.1, 0.3, 0.1);
    if (kind === 'blaster' && s === 1) { const cn = add(a, G.cyl, M(0x39407a, c.trim, 0.5, { m: 0.6 }), 0, -0.28, 0.2, 0.15, 0.5, 0.15); cn.rotation.x = Math.PI / 2; add(a, G.sph, trim, 0, -0.28, 0.46, 0.14); P.muzzle = a; }
    else add(a, G.sph, big ? trim : body, 0, -0.3, 0, big ? 0.3 : 0.17);
    return a;
  });
  P.shine = [];
  g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
function drone(c) {
  const g = new THREE.Group(); const P = { kind: 'swarm', fly: true }; const R = P.root = grp(g, 0, 0.5, 0);
  add(R, G.sph, M(c.body, 0, 0, { m: 0.4, r: 0.3 }), 0, 0, 0, 0.7, 0.55, 0.7); add(R, G.sph, DARK, 0, 0.02, 0.26, 0.38, 0.3, 0.2);
  add(R, G.sph, M(c.eye, c.eye, 1.6), 0, 0.02, 0.34, 0.2, 0.2, 0.1);
  add(R, G.cyl, M(0x2a2f55), 0, 0.3, 0, 0.05, 0.12, 0.05);
  P.rotor = grp(R, 0, 0.38, 0); add(P.rotor, G.box, M(c.trim, c.trim, 0.8), 0, 0, 0, 0.9, 0.03, 0.1); add(P.rotor, G.box, M(c.trim, c.trim, 0.8), 0, 0, 0, 0.1, 0.03, 0.9);
  P.arms = [-1, 1].map((s) => { const a = grp(R, s * 0.36, -0.05, 0.05); add(a, G.sph, M(c.trim, c.trim, 0.8), 0, 0, 0, 0.14); return a; });
  P.legs = []; P.torso = R; P.head = R; P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
function turret(c) {
  const g = new THREE.Group(); const P = { kind: 'turret' };
  add(g, G.cyl, M(0x2a2f55, 0, 0, { m: 0.5 }), 0, 0.12, 0, 1.0, 0.24, 1.0); add(g, G.cyl, M(c.trim, c.trim, 1.0), 0, 0.26, 0, 0.94, 0.04, 0.94);
  P.root = grp(g); P.turn = grp(g, 0, 0.5, 0);
  add(P.turn, G.sph, M(c.body, 0, 0, { m: 0.4, r: 0.3 }), 0, 0, 0, 0.8, 0.7, 0.8);
  P.barrel = grp(P.turn, 0, 0.05, 0.3); const b = add(P.barrel, G.cyl, M(0x39407a, 0, 0, { m: 0.6 }), 0, 0, 0.25, 0.16, 0.7, 0.16); b.rotation.x = Math.PI / 2;
  add(P.barrel, G.sph, M(c.trim, c.trim, 1.6), 0, 0, 0.62, 0.17);
  add(P.turn, G.sph, M(c.eye, c.eye, 1.4), 0, 0.12, 0.26, 0.14, 0.14, 0.08);
  P.legs = []; P.arms = []; P.torso = P.turn; P.head = P.turn; P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
const AL = { body: 0x6ee03a, dark: 0x3aa81c, bug: 0xff7a3a, brute: 0x8a4aff, spit: 0x23d6c0 };
function eyeBall(par, x, y, z, s = 0.16) { add(par, G.sph, EYE, x, y, z, s); add(par, G.sph, DARK, x, y, z + s * 0.38, s * 0.52); }
function slime() {
  const g = new THREE.Group(); const P = { kind: 'slime' }; P.root = grp(g);
  const jm = M(AL.body, 0x28ff30, 0.25, { r: 0.12, t: 0.92 });
  P.body = grp(P.root, 0, 0, 0); add(P.body, G.hem, jm, 0, 0, 0, 1.05, 1.0, 1.05); add(P.body, G.cyl, jm, 0, 0.02, 0, 1.05, 0.06, 1.05);
  add(P.body, G.sph, M(0xc8ff90, 0xc8ff90, 0.4, { t: 0.7 }), -0.2, 0.34, 0.2, 0.16, 0.1, 0.1);
  eyeBall(P.body, -0.14, 0.28, 0.4); eyeBall(P.body, 0.16, 0.3, 0.38); add(P.body, G.sph, DARK, 0, 0.14, 0.46, 0.2, 0.07, 0.06);
  P.legs = []; P.arms = []; P.torso = P.body; P.head = P.body; P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
function bug() {
  const g = new THREE.Group(); const P = { kind: 'bug' }; const R = P.root = grp(g);
  const sh = M(AL.bug, 0xff5a10, 0.15, { m: 0.3, r: 0.25 }), dk = M(0x4a2008);
  P.torso = grp(R, 0, 0.3, -0.05); add(P.torso, G.sph, sh, 0, 0, -0.1, 0.78, 0.55, 1.0); add(P.torso, G.cyl, dk, 0, 0.27, -0.1, 0.03, 0.02, 0.9).rotation.x = Math.PI / 2;
  P.head = grp(P.torso, 0, 0.0, 0.42); add(P.head, G.sph, sh, 0, 0, 0, 0.48, 0.4, 0.42);
  eyeBall(P.head, -0.14, 0.1, 0.17, 0.2); eyeBall(P.head, 0.14, 0.1, 0.17, 0.2);
  [-1, 1].forEach((s) => { const m = add(P.head, G.cone, EYE, s * 0.12, -0.12, 0.24, 0.07, 0.22, 0.07); m.rotation.x = Math.PI / 2; m.rotation.z = s * 0.4; });
  [-1, 1].forEach((s) => { const a = add(P.head, G.cyl, dk, s * 0.1, 0.28, 0.1, 0.02, 0.3, 0.02); a.rotation.z = -s * 0.5; a.rotation.x = -0.3; });
  P.legs = [];
  for (const s of [-1, 1]) for (const z of [-0.22, 0, 0.22]) { const l = grp(R, s * 0.3, 0.25, z * 0.9 - 0.05); const seg = add(l, G.cyl, dk, s * 0.14, -0.04, 0, 0.05, 0.34, 0.05); seg.rotation.z = s * 1.0; l.userData.s = s; l.userData.p = z * 9; P.legs.push(l); }
  P.arms = []; P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
function brute() {
  const g = new THREE.Group(); const P = { kind: 'brute' }; const R = P.root = grp(g);
  const sk = M(AL.brute, 0x5a20ff, 0.12, { r: 0.5 }), dk = M(0x3a1a8a, 0, 0, { r: 0.6 }), belly = M(0xc8a8ff, 0x8a6aff, 0.2);
  P.legs = [-1, 1].map((s) => { const l = grp(R, s * 0.22, 0.34, 0); add(l, G.cyl, dk, 0, -0.16, 0, 0.26, 0.34, 0.26); add(l, G.sph, dk, 0, -0.34, 0.08, 0.3, 0.14, 0.4); return l; });
  P.torso = grp(R, 0, 0.34, 0); add(P.torso, G.sph, sk, 0, 0.26, 0, 0.82, 0.78, 0.7); add(P.torso, G.sph, belly, 0, 0.22, 0.2, 0.46, 0.44, 0.3);
  P.head = grp(P.torso, 0, 0.62, 0.1); add(P.head, G.sph, sk, 0, 0, 0, 0.5, 0.4, 0.46);
  add(P.head, G.sph, DARK, 0, -0.1, 0.18, 0.34, 0.14, 0.12); [-0.1, 0, 0.1].forEach((x) => add(P.head, G.cone, EYE, x, -0.06, 0.22, 0.05, 0.1, 0.05).rotation.z = Math.PI);
  eyeBall(P.head, -0.12, 0.07, 0.19, 0.16); eyeBall(P.head, 0.12, 0.07, 0.19, 0.16);
  [-1, 1].forEach((s) => { const h = add(P.head, G.cone, M(0xfff0c0, 0, 0, { r: 0.4 }), s * 0.2, 0.22, 0, 0.12, 0.32, 0.12); h.rotation.z = -s * 0.5; });
  P.arms = [-1, 1].map((s) => { const a = grp(P.torso, s * 0.5, 0.5, 0); add(a, G.cyl, sk, 0, -0.18, 0, 0.2, 0.4, 0.2); add(a, G.sph, dk, 0, -0.42, 0.04, 0.36); return a; });
  P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
function spitter() {
  const g = new THREE.Group(); const P = { kind: 'spitter' }; const R = P.root = grp(g);
  const sk = M(AL.spit, 0x10c8b0, 0.15, { r: 0.3 }), dk = M(0x0c7a74);
  P.legs = [-1, 1].map((s) => { const l = grp(R, s * 0.14, 0.34, 0); add(l, G.cyl, dk, 0, -0.17, 0, 0.1, 0.36, 0.1); add(l, G.sph, dk, 0, -0.34, 0.06, 0.18, 0.08, 0.28); return l; });
  P.torso = grp(R, 0, 0.34, 0); add(P.torso, G.sph, sk, 0, 0.26, 0, 0.5, 0.7, 0.44);
  P.sac = add(P.torso, G.sph, M(0xb8ff60, 0xb8ff60, 0.9, { t: 0.9 }), 0, 0.36, 0.2, 0.3, 0.3, 0.22);
  P.head = grp(P.torso, 0, 0.74, 0.04); add(P.head, G.sph, sk, 0, 0, 0, 0.52, 0.42, 0.46);
  eyeBall(P.head, 0, 0.08, 0.2, 0.3); add(P.head, G.sph, DARK, 0, -0.12, 0.2, 0.22, 0.1, 0.1);
  [-1, 1].forEach((s) => { const a = add(P.head, G.cyl, dk, s * 0.16, 0.26, 0, 0.02, 0.28, 0.02); a.rotation.z = -s * 0.5; add(P.head, G.sph, M(0xb8ff60, 0xb8ff60, 1.2), s * 0.27, 0.37, 0, 0.08); });
  P.arms = [-1, 1].map((s) => { const a = grp(P.torso, s * 0.3, 0.46, 0); add(a, G.cyl, dk, 0, -0.14, 0, 0.07, 0.3, 0.07); add(a, G.sph, sk, 0, -0.3, 0, 0.14); return a; });
  P.shine = []; g.traverse((o) => { if (o.isMesh) P.shine.push(o); });
  return { g, P };
}
const ROBO = { body: 0xdfe8ff, trim: 0x35e0ff, eye: 0x35e0ff };
const BUILD = {
  spark: () => robot({ ...ROBO, body: 0xf0f4ff }, 'spark'), blaster: () => robot({ ...ROBO, body: 0xb8c8ff, trim: 0x6ab0ff, eye: 0x9ae8ff }, 'blaster'),
  smash: () => robot({ ...ROBO, body: 0xffd36a, trim: 0xff8a2a, eye: 0xffe86a }, 'smash'), swarm: () => drone({ ...ROBO, body: 0xd8fff4, trim: 0x5aff9a, eye: 0x5aff9a }),
  turret: () => turret({ ...ROBO, body: 0xc8d8ff }), slime, bug, brute, spitter,
};
const HEIGHT = { spark: 1.25, blaster: 1.35, smash: 1.7, swarm: 0.95, turret: 1.4, slime: 1.0, bug: 0.9, brute: 1.9, spitter: 1.6 };

function makeShadow(r) { const m = new THREE.Mesh(G.disc, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.position.y = 0.02; m.scale.set(r * 2.3, r * 2.3, 1); return m; }

// ---------- arena ----------
function hexPts() { return [[CX - 3.6, 0], [CX + 3.6, 0], [10, HALF], [CX + 3.6, L], [CX - 3.6, L], [0, HALF]]; }
function floorTex() {
  const W = 640, H = 1024, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#4a1470'); gr.addColorStop(0.48, '#24135a'); gr.addColorStop(0.52, '#0d2a64'); gr.addColorStop(1, '#0e4a86');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  const sx = W / 10, sy = H / 16; // far (z=0) at the top of the canvas in this mapping is flipped below
  g.lineWidth = 2; const hr = 0.95;
  for (let row = -1; row < 20; row++) for (let col = -1; col < 9; col++) {
    const x = col * hr * 1.732 + (row % 2 ? hr * 0.866 : 0) + 0.2, y = row * hr * 1.5;
    g.beginPath(); for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU + TAU / 12; const px = (x + Math.cos(a) * hr * 0.94) * sx, py = (y + Math.sin(a) * hr * 0.94) * sy; i ? g.lineTo(px, py) : g.moveTo(px, py); } g.closePath();
    g.strokeStyle = y < HALF ? 'rgba(255,90,210,.38)' : 'rgba(80,230,255,.38)'; g.stroke();
    if (((row * 7 + col * 3) % 5) === 0) { g.fillStyle = y < HALF ? 'rgba(255,90,210,.12)' : 'rgba(80,230,255,.12)'; g.fill(); }
  }
  g.shadowBlur = 18; g.shadowColor = '#fff'; g.strokeStyle = '#fff'; g.lineWidth = 5; g.beginPath(); g.moveTo(0, HALF * sy); g.lineTo(W, HALF * sy); g.stroke();
  g.shadowBlur = 0; g.strokeStyle = 'rgba(255,255,255,.35)'; g.setLineDash([14, 14]); g.lineWidth = 3; g.beginPath(); g.moveTo(0, HALF * sy); g.lineTo(W, HALF * sy); g.stroke();
  // canvas row r maps to z = r/H*16; texture v is flipped, so flip the canvas
  const o = document.createElement('canvas'); o.width = W; o.height = H; const og = o.getContext('2d'); og.translate(0, H); og.scale(1, -1); og.drawImage(c, 0, 0);
  const t = new THREE.CanvasTexture(o); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.repeat.set(1 / 10, 1 / 16); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
function skyTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512; const g = c.getContext('2d');
  const s = g.createLinearGradient(0, 0, 0, 512); s.addColorStop(0, '#12062e'); s.addColorStop(0.5, '#2a0f5e'); s.addColorStop(1, '#0a1a4a'); g.fillStyle = s; g.fillRect(0, 0, 256, 512);
  const gl = (x, y, r, col) => { const q = g.createRadialGradient(x, y, 0, x, y, r); q.addColorStop(0, col); q.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = q; g.fillRect(0, 0, 256, 512); };
  gl(50, 110, 200, 'rgba(255,60,200,.35)'); gl(220, 260, 220, 'rgba(40,120,255,.3)');
  let sd = 5; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  for (let i = 0; i < 120; i++) { g.fillStyle = `rgba(255,255,255,${0.25 + rnd() * 0.7})`; g.beginPath(); g.arc(rnd() * 256, rnd() * 512, 0.4 + rnd() * 1.1, 0, TAU); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class View3D {
  constructor(el) {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'night', tune: { bloom: [0.28, 0.5, 0.9] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.scene.background = skyTex();
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.5, 300);
    this.scene.add(new THREE.HemisphereLight(0xb8c8ff, 0x4a2a8a, 1.15)); const sun = new THREE.DirectionalLight(0xffffff, 1.5); sun.position.set(-4, 14, 22); this.scene.add(sun);
    const rim = new THREE.DirectionalLight(0xff6ad8, 0.7); rim.position.set(8, 6, -10); this.scene.add(rim);
    this.pool = new Map(); this.projs = new Map(); this.w = 1; this.h = 1; this.t = 0; this.shakeV = 0;
    this._arena(); this._base0(); this._ufo(); this._deco();
  }
  _arena() {
    const sh = new THREE.Shape(); hexPts().forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y))); sh.closePath();
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.9, bevelEnabled: false }); geo.rotateX(Math.PI / 2);
    const top = new THREE.MeshStandardMaterial({ map: floorTex(), roughness: 0.28, metalness: 0.25, emissive: 0x201060, emissiveIntensity: 0.22 });
    const side = new THREE.MeshStandardMaterial({ color: 0x3a1a7a, roughness: 0.5, metalness: 0.3, emissive: 0x2a50ff, emissiveIntensity: 0.25 });
    const slab = new THREE.Mesh(geo, [top, side]); this.scene.add(slab);
    const pts = hexPts();
    pts.forEach(([x, y], i) => {
      const [x2, y2] = pts[(i + 1) % 6]; const dx = x2 - x, dy = y2 - y, len = Math.hypot(dx, dy);
      const m = add(this.scene, G.box, M(y < HALF && y2 < HALF ? 0xff4ad0 : 0x35e0ff, y < HALF && y2 < HALF ? 0xff4ad0 : 0x35e0ff, 1.6), (x + x2) / 2, 0.05, (y + y2) / 2, len + 0.08, 0.14, 0.16); m.rotation.y = -Math.atan2(dy, dx);
      const p = add(this.scene, G.cyl, M(0x2a2f55, 0, 0, { m: 0.5 }), x, 0.2, y, 0.34, 0.5, 0.34); add(this.scene, G.sph, M(i < 2 ? 0xff4ad0 : 0x35e0ff, i < 2 ? 0xff4ad0 : 0x35e0ff, 2), x, 0.6, y, 0.3);
      void p;
    });
    const g = add(this.scene, G.disc, new THREE.MeshBasicMaterial({ color: 0x35c8ff, transparent: true, opacity: 0.1, depthWrite: false }), CX, -2.5, HALF, 13, 13, 1); g.rotation.x = -Math.PI / 2;
  }
  _base0() {
    const g = this.pbase = new THREE.Group(); g.position.set(CX, 0, 14.4); g.scale.setScalar(1.25); this.scene.add(g);
    const st = M(0xdfe8ff, 0, 0, { m: 0.35, r: 0.3 }), cy = M(0x35e0ff, 0x35e0ff, 1.4);
    add(g, G.cyl, M(0x2a2f55, 0, 0, { m: 0.5 }), 0, 0.15, 0, 2.7, 0.3, 2.7); add(g, G.cyl, cy, 0, 0.32, 0, 2.5, 0.04, 2.5);
    add(g, G.cyl, st, 0, 0.9, 0, 1.8, 1.2, 1.8); add(g, G.cyl, cy, 0, 0.8, 0, 1.86, 0.1, 1.86); add(g, G.cyl, cy, 0, 1.3, 0, 1.86, 0.06, 1.86);
    add(g, G.cyl, st, 0, 1.7, 0, 1.4, 0.3, 1.4); add(g, G.hem, M(0x9fe8ff, 0x35e0ff, 0.5, { t: 0.7, r: 0.1 }), 0, 1.85, 0, 1.3, 1.2, 1.3);
    this.pcore = add(g, G.sph, M(0xffffff, 0x35e0ff, 2.4), 0, 2.15, 0, 0.5);
    this.pcan = [-1, 1].map((s) => { const a = grp(g, s * 0.85, 1.2, -0.3); const b = add(a, G.cyl, M(0x39407a, 0, 0, { m: 0.6 }), 0, 0, 0.35, 0.2, 0.8, 0.2); b.rotation.x = Math.PI / 2; add(a, G.sph, cy, 0, 0, 0.78, 0.2); return a; });
    add(g, G.cyl, M(0x2a2f55), 0, 2.8, 0, 0.05, 0.9, 0.05); add(g, G.sph, M(0xff4ad0, 0xff4ad0, 2), 0, 3.3, 0, 0.14);
    this.pshadow = makeShadow(1.6); this.pshadow.position.set(CX, 0.02, 14.7); this.scene.add(this.pshadow); this.pmeshes = []; g.traverse((o) => { if (o.isMesh) this.pmeshes.push(o); });
    this.pbaseLight = new THREE.PointLight(0x35e0ff, 1.2, 8); this.pbaseLight.position.set(CX, 2, 14.7); this.scene.add(this.pbaseLight);
  }
  _ufo() {
    const g = this.ufo = new THREE.Group(); g.position.set(CX, 0, 1.3); this.scene.add(g);
    const hull = M(0x9a8ac0, 0x4a2a8a, 0.15, { m: 0.6, r: 0.25 });
    this.uBody = grp(g, 0, 1.5, 0); const B = this.uBody;
    add(B, G.sph, hull, 0, 0, 0, 3.0, 0.7, 3.0); add(B, G.tor, M(0xff4ad0, 0xff4ad0, 1.4), 0, 0, 0, 3.4, 3.4, 3.4).rotation.x = Math.PI / 2;
    add(B, G.hem, M(0x9aff8a, 0x4aff3a, 0.35, { t: 0.55, r: 0.05 }), 0, 0.2, 0, 1.7, 1.5, 1.7);
    const al = grp(B, 0, 0.35, 0); add(al, G.sph, M(AL.body, 0x28ff30, 0.4), 0, 0.25, 0, 0.55, 0.5, 0.5); eyeBall(al, -0.12, 0.32, 0.22, 0.2); eyeBall(al, 0.12, 0.32, 0.22, 0.2);
    [-1, 1].forEach((s) => { add(al, G.cyl, M(AL.dark), s * 0.14, 0.6, 0, 0.03, 0.2, 0.03).rotation.z = -s * 0.4; add(al, G.sph, M(0xff4ad0, 0xff4ad0, 2), s * 0.22, 0.7, 0, 0.07); });
    this.uLights = []; for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; this.uLights.push(add(B, G.sph, M(0xffe86a, 0xffe86a, 2), Math.cos(a) * 1.45, -0.05, Math.sin(a) * 1.45, 0.2)); }
    this.uBeam = add(g, G.cone, new THREE.MeshBasicMaterial({ color: 0xff6adf, transparent: true, opacity: 0.16, depthWrite: false }), 0, 0.75, 0, 2.6, 1.5, 2.6); this.uBeam.rotation.x = Math.PI;
    this.ushadow = makeShadow(1.7); this.ushadow.position.set(CX, 0.02, 1.3); this.scene.add(this.ushadow);
    this.umeshes = []; g.traverse((o) => { if (o.isMesh) this.umeshes.push(o); });
    this.ulight = new THREE.PointLight(0xff4ad0, 1.4, 9); this.ulight.position.set(CX, 2.8, 1.3); this.scene.add(this.ulight);
  }
  _deco() {
    this.rocks = []; let sd = 11; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    for (let i = 0; i < 16; i++) {
      const left = i % 2 ? 1 : -1; const col = i % 3 ? 0x35e0ff : 0xff4ad0;
      const m = add(this.scene, G.ico, M(0x4a3a9a, col, 0.45, { r: 0.3, m: 0.3 }), CX + left * (7 + rnd() * 9), -1 - rnd() * 6, -3 + rnd() * 24, 0.8 + rnd() * 1.8, 1 + rnd() * 2, 0.8 + rnd() * 1.5);
      m.userData = { sp: 0.1 + rnd() * 0.3, ph: rnd() * TAU, y0: m.position.y }; this.rocks.push(m);
    }
    const pl = add(this.scene, G.sph, M(0xff8ad8, 0xff3ab0, 0.4, { r: 0.8 }), CX - 22, 14, -30, 18); add(this.scene, G.tor, M(0x9ad8ff, 0x58b8ff, 0.8), CX - 22, 14, -30, 34, 34, 34).rotation.x = 1.2; void pl;
    add(this.scene, G.sph, M(0x6ad8ff, 0x28a0ff, 0.5, { r: 0.8 }), CX + 26, 10, -34, 8);
  }
  setSize(w, h) { this.w = w; this.h = h; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  /** frame the arena inside the vertical band [rt, rb] (CSS px) */
  fit(rt, rb) {
    const cam = this.camera, w = this.w, h = this.h; const land = w > h * 1.3; const pitch = land ? 0.7 : 0.86; const yaw = land ? Math.PI / 2 : 0; this.sinP = Math.sin(pitch); this.yaw = yaw;
    const tgt = new THREE.Vector3(CX, 0, land ? HALF : HALF + 0.4);
    const place = (d) => { cam.position.set(tgt.x + Math.sin(yaw) * Math.cos(pitch) * d, tgt.y + Math.sin(pitch) * d, tgt.z + Math.cos(yaw) * Math.cos(pitch) * d); cam.lookAt(tgt); cam.clearViewOffset(); cam.updateProjectionMatrix(); cam.updateMatrixWorld(true); };
    const span = () => (land ? Math.abs(this.project(10, HALF, 0)[1] - this.project(0, HALF, 0)[1]) : this.project(CX, L, 0)[1] - this.project(CX, 0, 0)[1]);
    const wid = () => (land ? Math.abs(this.project(CX, L, 0)[0] - this.project(CX, 0, 0)[0]) : this.project(10, HALF, 0)[0] - this.project(0, HALF, 0)[0]);
    const wantS = (rb - rt) * (land ? 0.8 : 0.94), wantW = w - (land ? 40 : 12); let lo = 6, hi = 200;
    for (let i = 0; i < 28; i++) { const d = (lo + hi) / 2; place(d); (span() > wantS || wid() > wantW ? (lo = d) : (hi = d)); }
    place(hi); const p0 = this.project(CX, HALF, 0); const c = (rt + rb) / 2; cam.setViewOffset(w, h, 0, p0[1] - c, w, h); cam.updateMatrixWorld(true);
    this.base = cam.position.clone();
  }
  project(x, y, z = 0) { const v = new THREE.Vector3(x, z, y).project(this.camera); return [(v.x + 1) / 2 * this.w, (1 - v.y) / 2 * this.h]; }
  unproject(px, py) {
    const cam = this.camera; const v = new THREE.Vector3((px / this.w) * 2 - 1, 1 - (py / this.h) * 2, 0.5).unproject(cam); const o = cam.position; const d = v.sub(o);
    const t = -o.y / d.y; return [o.x + d.x * t, o.z + d.z * t];
  }
  burst() { /* sparks are drawn by the 2D overlay */ }
  _unitObj(u) {
    let e = this.pool.get(u.id);
    if (!e) { const b = BUILD[u.kind](); const h = HEIGHT[u.kind]; b.g.scale.setScalar(h * (this.w > this.h * 1.3 ? 2.4 : 2.0)); const o = new THREE.Group(); o.add(b.g); const sd = makeShadow(u.r * 1.3); this.scene.add(sd); this.scene.add(o); e = { o, b, sd, h, ph: u.id * 1.7 }; this.pool.set(u.id, e); }
    return e;
  }
  render(snap, clock, shake = 0) {
    const dt = Math.min(0.05, Math.max(0, clock - (this.lc ?? clock))); this.lc = clock; this.t = clock;
    // camera shake
    if (this.base) { const k = shake * 0.012; this.camera.position.set(this.base.x + (Math.random() - 0.5) * k, this.base.y + (Math.random() - 0.5) * k, this.base.z); }
    for (const r of this.rocks) { r.rotation.y += r.userData.sp * dt; r.rotation.x += r.userData.sp * 0.5 * dt; r.position.y = r.userData.y0 + Math.sin(clock * 0.6 + r.userData.ph) * 0.4; }
    // bases
    const [pb, ub] = snap.bases;
    const pf = pb.flash > 0 ? 1 : 0, uf = ub.flash > 0 ? 1 : 0;
    this.pbase.visible = pb.hp > 0; this.pshadow.visible = pb.hp > 0; this.ufo.visible = ub.hp > 0; this.ushadow.visible = ub.hp > 0;
    this.pbase.scale.setScalar(1 + (pb.flash > 0 ? 0.03 : 0)); this.pcore.scale.setScalar(0.5 + Math.sin(clock * 4) * 0.06);
    for (const m of this.pmeshes) if (m.material.emissive) { /* shared mats: flash via light */ }
    this.pbaseLight.intensity = 1.2 + pf * 2 + Math.sin(clock * 3) * 0.2; this.ulight.intensity = 1.4 + uf * 3;
    this.pcan.forEach((a, i) => { a.rotation.y = Math.sin(clock * 0.8 + i) * 0.3; a.position.z = -0.3 + (pb.atk > 0 ? -0.12 : 0); });
    this.uBody.position.y = 1.5 + Math.sin(clock * 1.7) * 0.18; this.uBody.rotation.y = clock * 0.5; this.uBody.rotation.z = Math.sin(clock * 1.3) * 0.05;
    this.uBeam.material.opacity = 0.12 + Math.sin(clock * 5) * 0.04; this.ufo.position.x = CX + (ub.hp > 0 ? Math.sin(clock * 0.7) * 0.25 : 0); this.ushadow.position.x = this.ufo.position.x;
    this.uLights.forEach((l, i) => { const on = Math.floor(clock * 6 + i) % 3 === 0; l.scale.setScalar(on ? 0.3 : 0.17); });
    // units
    const seen = new Set();
    for (const { u, x, y } of snap.units) {
      seen.add(u.id); const e = this._unitObj(u); const P = e.b.P; const sp = u.spawn > 0 ? 1 - u.spawn / 0.45 : 1; const ease = sp < 1 ? 1 - Math.pow(1 - sp, 3) : 1;
      const t = clock * 10 + e.ph; const mv = u.moving ? 1 : 0;
      e.o.position.set(x, sp < 1 ? (1 - ease) * 3 : 0, y); e.o.rotation.y = Math.PI / 2 - u.ang; e.o.scale.setScalar(ease * (1 + (sp < 1 ? 0.2 * Math.sin(sp * Math.PI) : 0)));
      e.sd.position.set(x, 0.02, y); e.sd.scale.setScalar(u.r * 2.3 * (0.6 + ease * 0.4)); e.sd.material.opacity = 0.4 * ease;
      const lunge = Math.min(1, u.atk / 0.2);
      if (P.legs.length) P.legs.forEach((l, i) => { if (l.userData.p !== undefined) { l.rotation.x = Math.sin(t * 1.6 + l.userData.p) * 0.5 * (mv + 0.1); l.rotation.z = 0; } else l.rotation.x = Math.sin(t + i * Math.PI) * 0.7 * mv; });
      if (P.root && !P.fly && P.kind !== 'slime') P.root.position.y = Math.abs(Math.sin(t)) * 0.05 * mv + (P.kind === 'bug' ? 0 : 0);
      if (P.fly) { P.root.position.y = 0.5 + Math.sin(clock * 5 + e.ph) * 0.08; P.rotor.rotation.y = clock * 40; P.root.rotation.z = Math.sin(clock * 3 + e.ph) * 0.08; }
      if (P.arms.length) P.arms.forEach((a, i) => { const sw = Math.sin(t + i * Math.PI + Math.PI / 2) * 0.7 * mv; a.rotation.x = P.kind === 'blaster' && i === 1 ? -0.4 - lunge * 0.4 : sw - lunge * 2.2; });
      if (P.kind === 'slime') { const sq = 1 + Math.sin(clock * 7 + e.ph) * 0.07 * (0.4 + mv); P.body.scale.set(1 / sq, sq - lunge * 0.25, 1 / sq); }
      if (P.kind === 'bug' || P.kind === 'brute' || P.kind === 'spitter') P.torso.rotation.x = lunge * 0.4 + (P.kind === 'brute' ? 0.12 : 0);
      if (P.kind === 'turret') { P.turn.rotation.y = 0; P.barrel.position.z = 0.3 - lunge * 0.15; }
      if (P.kind === 'spitter') P.sac.scale.setScalar(0.3 * (1 + 0.15 * Math.sin(clock * 6) + lunge * 0.4));
      if (P.head && P.head !== P.torso) P.head.rotation.z = Math.sin(clock * 3 + e.ph) * 0.05;
      // hit flash: toggle emissive white by scaling the whole unit slightly and lifting light
      const f = u.flash > 0 ? 1 : 0; if (e.f !== f) { e.f = f; P.shine.forEach((m) => { if (f) { if (!m.userData.om) m.userData.om = m.material; const c = m.material.clone(); c.emissive = new THREE.Color(0xffffff); c.emissiveIntensity = 0.9; m.material = c; } else if (m.userData.om) { m.material.dispose(); m.material = m.userData.om; } }); }
    }
    for (const [id, e] of this.pool) if (!seen.has(id)) { this.scene.remove(e.o); this.scene.remove(e.sd); this.pool.delete(id); }
    // projectiles
    const ps = new Set();
    for (const p of snap.projs) {
      ps.add(p.p); let m = this.projs.get(p.p);
      if (!m) { const goo = p.p.kind === 'goo'; m = new THREE.Group(); if (goo) { add(m, G.sph, M(0xb8ff60, 0x7aff30, 1.4), 0, 0, 0, 0.36); add(m, G.sph, M(0xe8ffb0, 0xe8ffb0, 1.4, { t: 0.8 }), 0.05, 0.07, 0.05, 0.14); } else { const col = p.p.side === 0 ? 0x35e0ff : 0xff3fd0; add(m, G.sph, M(0xffffff, col, 2.2), 0, 0, 0, 0.22, 0.22, 0.55); add(m, G.sph, M(col, col, 1.6, { t: 0.5 }), 0, 0, 0, 0.4, 0.4, 0.95); } this.scene.add(m); this.projs.set(p.p, m); }
      m.position.set(p.x, 0.9, p.y); m.rotation.y = Math.atan2(p.dx, p.dy);
    }
    for (const [k, m] of this.projs) if (!ps.has(k)) { this.scene.remove(m); this.projs.delete(k); }
    this.renderer.render(this.scene, this.camera);
  }
  dispose() { this.renderer.dispose(); }
}
