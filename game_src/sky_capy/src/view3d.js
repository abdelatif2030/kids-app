// three.js renderer for «سكاي كابي»: the sim (x 0..100, y 0..160, y grows toward the player) is drawn as a lit 3D sky scene seen from
// behind and above the plane: real 3D plane and capybara pilot, rat pirates in balloons / gyrocopters / gliders, floating
// islands with houses and windmills, soft cloud banks, bubble shots. Everything is built from shapes in code.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';
import { W, H } from './sim.js';
import { PAINT_COLORS } from './art.js';

const K = 0.4; // world units per sim unit
const TAU = Math.PI * 2;
const sx = (x) => (x - W / 2) * K;
const sz = (y) => (y - H * 0.5) * K;

const geo = {
  sph: new THREE.SphereGeometry(0.5, 14, 10),
  sphL: new THREE.SphereGeometry(0.5, 8, 6),
  hem: new THREE.SphereGeometry(0.5, 14, 8, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12),
  box: new THREE.BoxGeometry(1, 1, 1),
  cone: new THREE.ConeGeometry(0.5, 1, 10),
  tor: new THREE.TorusGeometry(0.5, 0.12, 8, 18),
};
const mats = new Map();
const M = (c, em = 0, o = {}) => { const k = `${c}|${em}|${JSON.stringify(o)}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em, ...o })); return mats.get(k); };
const mesh = (g, m, x = 0, y = 0, z = 0, a = 1, b = 1, c = 1) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(a, b, c); return o; };

function stripeTex(cols, n = 8) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
  for (let i = 0; i < n; i++) { g.fillStyle = cols[i % cols.length]; g.fillRect((i * 256) / n, 0, 256 / n + 1, 64); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t;
}
const texs = {};
const stripes = (k, cols, n) => texs[k] || (texs[k] = stripeTex(cols, n));

// ---- characters ----------------------------------------------------------------------------------------------------------

function ratHead(hat, patch, scale = 1) {
  const g = new THREE.Group();
  const fur = M(0x9a8e92);
  g.add(mesh(geo.sph, fur, 0, 0, 0, 0.62, 0.58, 0.66));
  g.add(mesh(geo.sph, M(0xb8aaae), 0, -0.1, -0.22, 0.34, 0.26, 0.36));
  g.add(mesh(geo.sph, M(0xff8aa0, 0x401020), 0, -0.07, -0.42, 0.12, 0.1, 0.1));
  for (const s of [-1, 1]) {
    g.add(mesh(geo.sph, fur, s * 0.27, 0.27, 0.02, 0.24, 0.28, 0.08));
    g.add(mesh(geo.sph, M(0xf4a8b4), s * 0.27, 0.27, -0.03, 0.15, 0.19, 0.05));
    g.add(mesh(geo.sph, M(0xffffff), s * 0.14, 0.07, -0.26, 0.17, 0.2, 0.1));
    g.add(mesh(geo.sph, M(0x111118), s * 0.14, 0.06, -0.31, 0.09, 0.12, 0.06));
    for (const k of [-1, 0, 1]) { const w = mesh(geo.cyl, M(0xdddddd), s * 0.28, -0.12 + k * 0.05, -0.34, 0.012, 0.26, 0.012); w.rotation.z = Math.PI / 2 + k * 0.2 * s; g.add(w); }
  }
  g.add(mesh(geo.box, M(0xffffff), 0, -0.2, -0.38, 0.08, 0.06, 0.04)); // buck tooth
  if (hat) { g.add(mesh(geo.cone, M(0x1d1d2a), 0, 0.46, 0, 0.62, 0.34, 0.62)); g.add(mesh(geo.cyl, M(0x1d1d2a), 0, 0.32, 0, 0.78, 0.07, 0.78)); g.add(mesh(geo.box, M(0xffd23a), 0, 0.34, -0.38, 0.14, 0.04, 0.03)); }
  if (patch) { g.add(mesh(geo.sph, M(0x111118), 0.14, 0.09, -0.32, 0.17, 0.17, 0.05)); const st = mesh(geo.box, M(0x111118), 0, 0.2, 0, 0.7, 0.03, 0.05); st.rotation.z = -0.4; g.add(st); }
  g.scale.setScalar(scale);
  return g;
}

function capyHead() {
  const g = new THREE.Group();
  const fur = M(0xa8714a);
  g.add(mesh(geo.sph, fur, 0, 0, 0, 0.7, 0.62, 0.74));
  g.add(mesh(geo.sph, M(0x8a5a38), 0, -0.12, -0.3, 0.46, 0.3, 0.36));
  g.add(mesh(geo.sph, M(0x3a2418), 0, -0.07, -0.47, 0.1, 0.08, 0.06));
  for (const s of [-1, 1]) {
    g.add(mesh(geo.sph, fur, s * 0.3, 0.34, 0.1, 0.14, 0.14, 0.1));
    g.add(mesh(geo.sph, M(0xffffff), s * 0.17, 0.1, -0.28, 0.2, 0.22, 0.1));
    g.add(mesh(geo.sph, M(0x111118), s * 0.17, 0.09, -0.34, 0.1, 0.13, 0.06));
    const gl = mesh(geo.tor, M(0xffd23a, 0x402800), s * 0.17, 0.1, -0.33, 0.34, 0.34, 0.34); g.add(gl); // goggles
    g.add(rot(mesh(geo.cyl, M(0x9ad8ff, 0, { transparent: true, opacity: 0.45 }), s * 0.17, 0.1, -0.34, 0.3, 0.02, 0.3),'x',Math.PI / 2));
  }
  g.add(mesh(geo.box, M(0xffd23a), 0, 0.12, -0.05, 0.9, 0.06, 0.06)); // strap
  g.add(mesh(geo.sph, M(0xe83a4a), 0, -0.42, 0.05, 0.5, 0.16, 0.5)); // scarf
  return g;
}

export function makePlane(paint = 'lagoon') {
  const [c1, c2, c3] = (PAINT_COLORS[paint] || PAINT_COLORS.lagoon).map((c) => new THREE.Color(c).getHex());
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);
  body.add(mesh(geo.sph, M(c1), 0, 0, 0.2, 0.9, 0.85, 3.4));          // fuselage
  body.add(mesh(geo.sph, M(c2), 0, -0.12, 0.35, 0.78, 0.5, 3.0));
  body.add(mesh(geo.sph, M(c3), 0, 0, -1.45, 0.5, 0.5, 0.5));          // spinner
  body.add(mesh(geo.box, M(c1), 0, 0.05, 0.3, 6.4, 0.16, 1.5));        // wings
  body.add(mesh(geo.box, M(c3), 0, 0.14, 0.3, 6.4, 0.03, 0.24));
  for (const s of [-1, 1]) { body.add(mesh(geo.sph, M(c3), s * 3.2, 0.05, 0.3, 0.36, 0.2, 1.5)); body.add(mesh(geo.cyl, M(0x555e70), s * 1.1, -0.45, 0.2, 0.08, 0.7, 0.08)); body.add(mesh(geo.sph, M(c2), s * 1.1, -0.85, 0.2, 0.34, 0.3, 2.4)); }
  body.add(mesh(geo.box, M(c1), 0, 0.1, 1.9, 2.2, 0.1, 0.7));           // tailplane
  body.add(mesh(geo.box, M(c2), 0, 0.5, 1.95, 0.1, 0.9, 0.7));         // fin
  const dome = mesh(geo.sph, M(0xbfe6ff, 0x203040, { transparent: true, opacity: 0.55 }), 0, 0.55, -0.05, 0.95, 0.8, 1.2); body.add(dome);
  const head = capyHead(); head.position.set(0, 0.55, 0.0); head.scale.setScalar(0.85); head.rotation.y = Math.PI; body.add(head);
  const prop = new THREE.Group(); prop.position.set(0, 0, -1.75); body.add(prop);
  for (const a of [0, Math.PI]) { const b = mesh(geo.box, M(0xeeeeee), 0, 0, 0, 0.28, 1.9, 0.05); b.rotation.z = a; prop.add(b); }
  prop.add(rot(mesh(geo.cyl, M(0xffffff, 0, { transparent: true, opacity: 0.22 }), 0, 0, 0, 2.0, 0.02, 2.0),'x',Math.PI / 2));
  g.userData = { body, prop };
  return g;
}

function balloonEnv(colors, rx = 1.3, ry = 1.5) {
  const t = stripes(colors.join(), colors, 8).clone(); t.needsUpdate = true;
  const m = new THREE.MeshLambertMaterial({ map: stripes(colors.join(), colors, 8) });
  return mesh(geo.sph, m, 0, 0, 0, rx * 2, ry * 2, rx * 2);
}
function basket(g, y) { g.add(mesh(geo.box, M(0xc8904a), 0, y, 0, 0.9, 0.55, 0.9)); for (const a of [-1, 1]) for (const b of [-1, 1]) { const r = mesh(geo.cyl, M(0x6a4a2a), a * 0.36, y + 0.55, b * 0.36, 0.04, 1.1, 0.04); r.rotation.z = -a * 0.35; r.rotation.x = b * 0.35; g.add(r); } }

export function makeEnemy(type) {
  const g = new THREE.Group();
  const u = {};
  if (type === 'balloon' || type === 'cage' || type === 'umbrella') {
    const cols = type === 'cage' ? ['#ffd23a', '#fff29a'] : type === 'umbrella' ? ['#e8504a', '#ffffff'] : ['#ff8a6a', '#ffd9b0', '#ff5a5a', '#fff0d0'];
    g.add(mesh(geo.sph, new THREE.MeshLambertMaterial({ map: stripes('b' + cols.join(), cols, 8) }), 0, 1.3, 0, 2.5, 2.9, 2.5));
    g.add(mesh(geo.sph, M(0xffffff, 0, { transparent: true, opacity: 0.35 }), -0.5, 1.9, -0.6, 0.6, 0.9, 0.4));
    basket(g, -0.4);
    const rat = ratHead(true, false, 1.05); rat.position.set(0, 0.35, 0); rat.rotation.y = 0; g.add(rat);
    if (type === 'umbrella') { const um = new THREE.Group(); um.position.y = 3.0; um.add(mesh(geo.hem, new THREE.MeshLambertMaterial({ map: stripes('um', ['#4a8ae8', '#fff'], 8), side: THREE.DoubleSide }), 0, 0, 0, 4.2, 3.2, 4.2)); um.add(mesh(geo.cyl, M(0x6a4a2a), 0, -1.0, 0, 0.1, 2.0, 0.1)); g.add(um); }
    if (type === 'cage') { g.add(mesh(geo.box, M(0xffffff, 0, { transparent: true, opacity: 0.3 }), 0, -1.35, 0, 0.9, 0.8, 0.9)); for (const k of [-0.3, 0, 0.3]) g.add(mesh(geo.cyl, M(0x444455), k, -1.35, -0.46, 0.04, 0.8, 0.04)); const b = makeBird('robin'); b.position.set(0, -1.35, 0); b.scale.setScalar(0.55); g.add(b); }
    u.bob = 0.25;
  } else if (type === 'gyro') {
    g.add(mesh(geo.sph, M(0x5a5a8a), 0, 0, 0, 1.5, 1.2, 2.6));
    g.add(mesh(geo.sph, M(0xcfe8ff, 0, { transparent: true, opacity: 0.6 }), 0, 0.5, -0.4, 1.1, 0.9, 1.2));
    const rat = ratHead(true, true, 0.9); rat.position.set(0, 0.55, -0.35); g.add(rat);
    g.add(mesh(geo.box, M(0x3a3a6a), 0, 0.1, 1.8, 0.15, 0.7, 1.4));
    g.add(mesh(geo.box, M(0x3a3a6a), 0, 0.15, 2.2, 1.4, 0.08, 0.5));
    for (const s of [-1, 1]) g.add(mesh(geo.cyl, M(0x555e70), s * 0.4, -0.7, 0, 0.06, 0.6, 0.06));
    const rot = new THREE.Group(); rot.position.y = 1.1; g.add(rot); g.add(mesh(geo.cyl, M(0x444455), 0, 0.8, 0, 0.12, 0.6, 0.12));
    for (let i = 0; i < 2; i++) { const b = mesh(geo.box, M(0x3a3a64), 0, 0, 0, 4.2, 0.06, 0.4); b.rotation.y = i * Math.PI / 2; rot.add(b); }
    u.rot = rot;
  } else if (type === 'glider') {
    const tri = new THREE.BufferGeometry();
    const v = new Float32Array([0, 0, -2, -3.2, 0, 1.4, -0.6, 0, 0.8, 0, 0, -2, -0.6, 0, 0.8, 0, 0, 2.4, 0, 0, -2, 0, 0, 2.4, 0.6, 0, 0.8, 0, 0, -2, 0.6, 0, 0.8, 3.2, 0, 1.4]);
    tri.setAttribute('position', new THREE.BufferAttribute(v, 3)); tri.computeVertexNormals();
    const wing = new THREE.Mesh(tri, new THREE.MeshLambertMaterial({ color: 0xffe0a0, side: THREE.DoubleSide })); g.add(wing);
    g.add(mesh(geo.box, M(0xe8b060), 0, 0.05, 0.4, 0.2, 0.1, 3.4));
    const rat = ratHead(false, true, 0.8); rat.position.set(0, 0.55, 0.1); g.add(rat);
    u.flap = wing;
  } else if (type === 'thief') {
    g.add(mesh(geo.sph, M(0x3a3a5a), 0, 0, 0, 1.6, 1.4, 1.9));
    const rat = ratHead(false, false, 0.85); rat.position.set(0, 0.35, -0.55); g.add(rat);
    g.add(mesh(geo.box, M(0x111118), 0, 0.42, -0.82, 0.62, 0.15, 0.06)); // bandit mask
    u.wings = [];
    for (const s of [-1, 1]) { const w = new THREE.Group(); w.add(mesh(geo.box, M(0x5a5a8a), s * 1.4, 0, 0, 2.8, 0.08, 1.2)); w.position.x = 0; w.userData.s = s; g.add(w); u.wings.push(w); }
    g.add(mesh(geo.box, M(0xe8b030), 0, -0.4, -0.2, 0.7, 0.5, 0.5)); // stolen sack
  }
  g.userData = u;
  return g;
}

export function makeBoss() {
  const g = new THREE.Group(); const u = {};
  g.add(mesh(geo.sph, new THREE.MeshLambertMaterial({ map: stripes('boss', ['#3a5ab8', '#2a4a98', '#4a6ad0', '#2a3a88'], 12) }), 0, 4.2, 0, 9, 6.2, 6.5));
  g.add(mesh(geo.sph, M(0xffffff, 0, { transparent: true, opacity: 0.3 }), -2, 5.8, -1.8, 2.6, 1.6, 1.0));
  g.add(mesh(geo.box, M(0x8a5a34), 0, -0.8, 0, 6.5, 1.8, 3.6));
  g.add(mesh(geo.box, M(0x5a3a1a), 0, -0.1, 0, 6.8, 0.25, 3.9));
  for (let i = -2; i <= 2; i++) g.add(mesh(geo.sph, M(0xffd23a, 0x604000), i * 1.2, -0.8, -1.82, 0.5, 0.5, 0.2));
  for (const s of [-1, 1]) { g.add(rot(mesh(geo.cyl, M(0x333340), s * 1.8, -0.6, -1.9, 0.5, 1.6, 0.5),'x',Math.PI / 2)); }
  const rat = ratHead(true, true, 1.9); rat.position.set(0, 1.1, -0.6); g.add(rat);
  g.add(mesh(geo.cyl, M(0x6a4a2a), 0, 8.4, 0, 0.14, 2.4, 0.14));
  const flag = mesh(geo.box, M(0x1d1d2a), 0.9, 9.0, 0, 1.8, 1.0, 0.05); g.add(flag); g.add(mesh(geo.sph, M(0xffffff), 0.9, 9.0, -0.05, 0.5, 0.5, 0.1));
  u.props = [];
  for (const s of [-1, 1]) { const p = new THREE.Group(); p.position.set(s * 4.1, -0.2, 0); g.add(p); for (let i = 0; i < 2; i++) { const b = mesh(geo.box, M(0xdddddd), 0, 0, 0, 0.3, 2.8, 0.06); b.rotation.z = i * Math.PI / 2; p.add(b); } p.rotation.x = Math.PI / 2; u.props.push(p); }
  u.flag = flag; g.userData = u;
  return g;
}

export function makeBird(type) {
  const col = type === 'robin' ? [0xe83a3a, 0xff8a6a] : type === 'jay' ? [0x3a78e8, 0x9ad0ff] : [0xffd23a, 0xfff29a];
  const g = new THREE.Group(); const u = { wings: [] };
  g.add(mesh(geo.sph, M(col[0]), 0, 0, 0, 1.1, 1.0, 1.5));
  g.add(mesh(geo.sph, M(col[1]), 0, -0.15, -0.1, 0.85, 0.6, 1.1));
  g.add(mesh(geo.sph, M(col[0]), 0, 0.35, -0.7, 0.8, 0.8, 0.8));
  g.add(rot(mesh(geo.cone, M(0xffb830), 0, 0.3, -1.2, 0.22, 0.5, 0.22),'x',-Math.PI / 2));
  for (const s of [-1, 1]) { g.add(mesh(geo.sph, M(0x111118), s * 0.22, 0.5, -1.02, 0.14, 0.16, 0.1)); const w = new THREE.Group(); w.add(mesh(geo.sph, M(col[0]), s * 0.9, 0, 0, 1.8, 0.14, 1.0)); w.userData.s = s; g.add(w); u.wings.push(w); }
  g.add(mesh(geo.box, M(col[0]), 0, 0, 0.95, 0.5, 0.06, 0.8));
  g.userData = u; return g;
}

function makePickup(kind, cap, bird) {
  const g = new THREE.Group();
  if (kind === 'pearl') g.add(mesh(geo.sph, M(0xffffff, 0x886a88), 0, 0, 0, 0.9, 0.9, 0.9));
  else if (kind === 'feather') { const f = mesh(geo.sph, M(0xffd23a, 0x805000), 0, 0, 0, 0.5, 0.1, 1.8); f.rotation.y = 0.5; g.add(f); g.add(rot(mesh(geo.cyl, M(0xffb000), 0, 0, 0, 0.06, 0.06, 1.9),'x',Math.PI / 2)); }
  else if (kind === 'capsule') {
    const c = cap === 'spread' ? 0xff9a3a : cap === 'pierce' ? 0x9a5aff : 0x3ad0ff;
    g.add(mesh(geo.sph, M(c, c, { transparent: true, opacity: 0.9 }), 0, 0, 0, 2.1, 2.1, 2.1));
    g.add(mesh(geo.sph, M(0xffffff, 0xffffff, { transparent: true, opacity: 0.35 }), 0, 0, 0, 2.8, 2.8, 2.8));
    g.add(rot(mesh(geo.tor, M(0xffffff, 0x888888), 0, 0, 0, 2.6, 2.6, 2.6),'x',Math.PI / 2));
  } else if (kind === 'cage') {
    g.add(mesh(geo.sph, M(0xffe58a, 0xffe58a, { transparent: true, opacity: 0.25 }), 0, 0, 0, 3.2, 3.2, 3.2));
    g.add(mesh(geo.box, M(0xffffff, 0, { transparent: true, opacity: 0.28 }), 0, 0, 0, 1.9, 1.9, 1.9));
    for (const k of [-0.6, 0, 0.6]) g.add(mesh(geo.cyl, M(0x444455), k, 0, -0.96, 0.07, 1.9, 0.07));
    const b = makeBird(bird || 'robin'); b.scale.setScalar(0.8); g.add(b); g.userData.bird = b;
  }
  return g;
}

// ---- world dressing --------------------------------------------------------------------------------------------------------

function makeCloud(s) {
  const g = new THREE.Group();
  const m = M(0xffffff, 0x9ab4d0, { transparent: true, opacity: 0.92 });
  for (const [x, y, z, r] of [[0, 0, 0, 1], [1.0, -0.15, 0.2, 0.8], [-1.0, -0.1, 0.1, 0.85], [0.4, 0.35, -0.2, 0.75], [-0.5, 0.3, 0.3, 0.7], [1.7, -0.3, 0, 0.55], [-1.7, -0.28, 0.1, 0.5]]) g.add(mesh(geo.sphL, m, x, y, z, r * 2, r * 1.5, r * 2));
  g.scale.setScalar(s); return g;
}

function rot(m, ax, v) { m.rotation[ax] = v; return m; }
function makeIsland(kind, stage) {
  const g = new THREE.Group();
  g.add(rot(mesh(geo.cone, M(0x7a6050), 0, -3.2, 0, 8, 7, 8),'x',Math.PI));
  g.add(mesh(geo.cyl, M(0x6a5444), 0, -0.4, 0, 8.4, 0.9, 8.4));
  g.add(mesh(geo.cyl, M(stage === 3 ? 0x5ac86a : 0x6ad05a), 0, 0.1, 0, 8.2, 0.5, 8.2));
  g.add(mesh(geo.cyl, M(0x8ae070), 0, 0.37, 0, 6, 0.1, 6));
  const house = (x, z, wall, roof, s = 1) => { g.add(mesh(geo.box, M(wall), x, 1.2 * s, z, 1.8 * s, 1.6 * s, 1.8 * s)); g.add(rot(mesh(geo.cone, M(roof), x, 2.5 * s, z, 2.8 * s, 1.3 * s, 2.8 * s),'y',Math.PI / 4)); g.add(mesh(geo.box, M(0x6a4a2a), x, 0.8 * s, z - 0.92 * s, 0.4 * s, 0.8 * s, 0.05)); g.add(mesh(geo.box, M(0xaee4ff, 0x2a4a6a), x + 0.5 * s, 1.4 * s, z - 0.92 * s, 0.4 * s, 0.4 * s, 0.05)); };
  const tree = (x, z, s = 1) => { g.add(mesh(geo.cyl, M(0x8a5a34), x, 0.9 * s, z, 0.35 * s, 1.4 * s, 0.35 * s)); g.add(mesh(geo.sph, M(0x3ab04a), x, 2.1 * s, z, 1.9 * s, 1.7 * s, 1.9 * s)); g.add(mesh(geo.sph, M(0x5ad06a), x - 0.3 * s, 2.4 * s, z - 0.3 * s, 1.1 * s, 1.0 * s, 1.1 * s)); };
  const u = {};
  if (kind === 0) {
    house(-1.8, 1.0, 0xfff0d8, 0xe8584a); house(1.8, 0.6, 0xffe0a0, 0x4a7ad8, 0.9); house(0.2, -1.8, 0xe8f4ff, 0xe8584a, 0.8); tree(-2.6, -1.8, 0.9);
    const mill = new THREE.Group(); mill.position.set(2.6, 0, -1.9); mill.add(mesh(geo.cyl, M(0xffffff), 0, 1.6, 0, 0.9, 3.2, 0.9)); mill.add(mesh(geo.cone, M(0xe8584a), 0, 3.6, 0, 1.3, 0.9, 1.3));
    const bl = new THREE.Group(); bl.position.set(0, 3.0, -0.6); for (let i = 0; i < 4; i++) { const b = mesh(geo.box, M(0xff7a6a), 0, 0.9, 0, 0.35, 1.8, 0.06); const p = new THREE.Group(); p.rotation.z = i * Math.PI / 2; p.add(b); bl.add(p); } mill.add(bl); g.add(mill); u.blades = bl;
  } else if (kind === 1) {
    tree(-2.6, 1, 0.9); tree(2.6, -0.5, 1.1); house(0, 0.6, 0xfff0d8, 0x9a5ad8);
    for (const x of [-2.4, 2.4]) g.add(mesh(geo.cyl, M(0x8a5a34), x, 1.5, -1.8, 0.2, 3, 0.2));
    ['#ff6a8a', '#ffd23a', '#6ad0ff', '#9a7aff'].forEach((c, i) => g.add(mesh(geo.box, M(new THREE.Color(c).getHex()), -1.8 + i * 1.2, 2.4 - Math.sin((i + 0.5) / 4 * Math.PI) * 0.3, -1.8, 0.9, 1.1, 0.05)));
  } else {
    tree(0, 0, 2.0); tree(-2.8, 1.4, 1.0); tree(2.8, 1.0, 0.9);
    g.add(mesh(geo.sph, M(0xc8905a), 0, 3.2, -1.0, 1.4, 0.5, 1.4)); g.add(mesh(geo.sph, M(0xffffff), 0.2, 3.5, -1.2, 0.35, 0.45, 0.35));
  }
  g.userData = u; return g;
}

function skyTexture(stage) {
  const T = [['#4aa0f0', '#a8d8ff', '#eaf6ff'], ['#5ab0f0', '#cfe8ff', '#fff2e0'], ['#3a90e0', '#9cd0f8', '#e0f4e8']][(stage - 1) % 3];
  const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, T[0]); gr.addColorStop(0.6, T[1]); gr.addColorStop(1, T[2]); g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ---- the view ---------------------------------------------------------------------------------------------------------------

export class View3D {
  constructor(el) {
    this.el = el;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'fresh', tune: { bloom: [0.15, 0.4, 0.92] } });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.dom = this.renderer.domElement;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xbfe4ff, 70, 190);
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 400);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8aaad0, 1.15));
    const sun = new THREE.DirectionalLight(0xfff0d0, 1.1); sun.position.set(-20, 40, 10); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.objs = new Map();
    this.wingObjs = [];
    this.stage = 0; this.clouds = []; this.islands = [];
    this.plane = null; this.paint = '';
    this.camPos = new THREE.Vector3(0, 30, 40); this.target = new THREE.Vector3();
    // shots as instanced bubbles
    this.bub = new THREE.InstancedMesh(geo.sphL, new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x2a6a9a, transparent: true, opacity: 0.85 }), 300);
    this.bub.frustumCulled = false; this.bub.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(900), 3); this.scene.add(this.bub);
    this.ebl = new THREE.InstancedMesh(geo.sphL, new THREE.MeshBasicMaterial({ color: 0xff5a6a }), 200); this.ebl.frustumCulled = false; this.scene.add(this.ebl);
    this.bursts = [];
    this.ray = new THREE.Raycaster(); this.gnd = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.shadowMat = new THREE.MeshBasicMaterial({ color: 0x20407a, transparent: true, opacity: 0.18, depthWrite: false });
    this.shadows = [];
    this._dummy = new THREE.Object3D(); this._col = new THREE.Color();
    this.setSize(1, 1);
    this._buildScenery(1);
  }

  setSize(w, h) { this.w = w; this.h = h; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }

  _buildScenery(stage) {
    for (const c of this.clouds) this.world.remove(c.o); for (const i of this.islands) this.world.remove(i.o);
    this.clouds = []; this.islands = [];
    this.stage = stage; this.scene.background = skyTexture(stage);
    for (let i = 0; i < 22; i++) { const o = makeCloud(2.2 + Math.random() * 3); const lay = i % 3; const c = { o, x: (Math.random() - 0.5) * 120, z: Math.random() * 190 - 120, y: -6 - lay * 3 - Math.random() * 2, v: 0.5 + lay * 0.3 }; o.position.set(c.x, c.y, c.z); this.world.add(o); this.clouds.push(c); }
    for (let i = 0; i < 9; i++) { const o = makeIsland(stage === 3 ? 2 : stage === 2 ? 1 : i % 2 === 0 ? 0 : 1, stage); const s = 0.8 + Math.random() * 0.8; o.scale.setScalar(s); const c = { o, x: (i % 2 ? 1 : -1) * (14 + Math.random() * 40), z: -110 + i * 24, y: -10 - Math.random() * 4, spin: Math.random() }; o.position.set(c.x, c.y, c.z); o.rotation.y = Math.random() * 6; this.world.add(o); this.islands.push(c); }
  }

  /** screen px -> sim coords (x, y) on the flight plane */
  pick(cx, cy, rect) {
    const nx = ((cx - rect.left) / rect.width) * 2 - 1, ny = -((cy - rect.top) / rect.height) * 2 + 1;
    this.ray.setFromCamera({ x: nx, y: ny }, this.camera);
    const p = new THREE.Vector3(); if (!this.ray.ray.intersectPlane(this.gnd, p)) return [W / 2, H - 30];
    return [p.x / K + W / 2, p.z / K + H * 0.5];
  }

  /** sim coords -> screen px (css) */
  project(x, y, wy = 0) {
    const v = new THREE.Vector3(sx(x), wy, sz(y)).project(this.camera);
    return [(v.x * 0.5 + 0.5) * this.w, (-v.y * 0.5 + 0.5) * this.h];
  }

  _get(key, make) { let o = this.objs.get(key); if (!o) { o = make(); o.userData.seen = 0; this.objs.set(key, o); this.world.add(o); } o.userData.seen = this.frame; return o; }

  _shadow(o, r) { let s = o.userData.sh; if (!s) { s = mesh(geo.cyl, this.shadowMat, 0, -5.5, 0, r, 0.05, r); this.world.add(s); o.userData.sh = s; } s.position.set(o.position.x + 1.2, -5.5, o.position.z + 2.5); s.visible = true; }

  burst(x, y, kind) {
    const n = kind === 'boss' ? 36 : 16; const cols = [0xff8a6a, 0xffd23a, 0x6ad0ff, 0xffffff];
    for (let i = 0; i < n; i++) { const m = mesh(geo.box, new THREE.MeshBasicMaterial({ color: cols[i % 4] }), sx(x), 0, sz(y), 0.35, 0.35, 0.35); const a = Math.random() * TAU; const v = 6 + Math.random() * 10; m.userData = { vx: Math.cos(a) * v, vy: 4 + Math.random() * 8, vz: Math.sin(a) * v, life: 0 }; this.scene.add(m); this.bursts.push(m); }
  }

  render(run, time, dt, tilt, paint) {
    this.frame = (this.frame || 0) + 1;
    const stage = run ? run.stage : 1;
    if (stage !== this.stage) this._buildScenery(stage);
    // scenery scroll (flying forward = scenery moves toward the camera)
    const sp = run ? (stage === 3 ? 22 : 18) : 10;
    for (const c of this.clouds) { c.z += dt * sp * c.v; if (c.z > 80) { c.z = -120; c.x = (Math.random() - 0.5) * 120; } c.o.position.set(c.x, c.y, c.z); }
    for (const i of this.islands) { i.z += dt * sp * 0.9; if (i.z > 90) { i.z = -130; i.x = (Math.random() < 0.5 ? -1 : 1) * (14 + Math.random() * 40); } i.o.position.set(i.x, i.y + Math.sin(time * 0.8 + i.spin * 6) * 0.4, i.z); if (i.o.userData.blades) i.o.userData.blades.rotation.z = time * 1.2; }

    let px = W / 2, py = H * 0.82;
    if (run) { px = run.px; py = run.py; }
    // plane
    if (this.paint !== paint || !this.plane) { if (this.plane) this.world.remove(this.plane); this.plane = makePlane(paint); this.paint = paint; this.world.add(this.plane); }
    const pl = this.plane;
    pl.visible = true; pl.scale.setScalar(1.0);
    const inv = run && run.inv > 0 && run.state === 'play';
    pl.position.set(sx(px), 0, sz(py));
    pl.rotation.z = -tilt * 0.5; pl.rotation.x = -0.08 + Math.sin(time * 2) * 0.03; pl.position.y = Math.sin(time * 2.4) * 0.25;
    pl.userData.prop.rotation.z = time * 60;
    pl.visible = !(inv && Math.sin(time * 40) < -0.3);
    this._shadow(pl, 4.5);

    if (run) {
      for (const [k, o] of this.objs) if (o.userData.seen !== this.frame) { this.world.remove(o); if (o.userData.sh) this.world.remove(o.userData.sh); this.objs.delete(k); }
      for (const en of run.enemies) {
        const o = this._get('e' + en.id, () => (en.type === 'boss' ? makeBoss() : makeEnemy(en.type)));
        const bob = Math.sin(time * 2.4 + en.id) * (o.userData.bob || 0);
        o.position.set(sx(en.x), 0.4 + bob, sz(en.y));
        const sc = en.type === 'boss' ? 1 : 1;
        o.scale.setScalar(sc); o.rotation.y = 0;
        o.rotation.z = Math.sin(time * 1.7 + en.id) * 0.06;
        const u = o.userData;
        if (u.rot) u.rot.rotation.y = time * 30;
        if (u.props) for (const p of u.props) p.rotation.z = time * 26;
        if (u.flag) u.flag.rotation.y = Math.sin(time * 5) * 0.3;
        if (u.wings) for (const w of u.wings) w.rotation.z = w.userData.s * Math.sin(time * 14) * 0.5;
        if (u.flap) u.flap.rotation.z = Math.sin(time * 3 + en.id) * 0.05;
        // hit flash
        const hr = en.hp / en.hp0; o.userData.hr = hr;
        this._shadow(o, en.type === 'boss' ? 7 : 3.2);
      }
      for (const p of run.pickups) {
        const o = this._get('p' + p.id, () => makePickup(p.kind, p.cap, p.bird));
        o.position.set(sx(p.x), 0.6 + Math.sin(time * 4 + p.id) * 0.3, sz(p.y)); o.rotation.y = time * 2;
        if (p.kind === 'cage' && o.userData.bird) for (const w of o.userData.bird.userData.wings) w.rotation.z = w.userData.s * Math.sin(time * 14) * 0.5;
      }
      // wings (rescued birds)
      run.wings.forEach((w, i) => {
        const o = this._get('w' + i + w.type, () => makeBird(w.type)); o.scale.setScalar(1.2);
        o.position.set(sx(w.x), 0.3, sz(w.y)); o.rotation.y = Math.PI; o.rotation.z = 0;
        for (const wg of o.userData.wings) wg.rotation.z = wg.userData.s * Math.sin(time * 18) * 0.6;
      });
      // bullets
      const d = this._dummy; let n = 0;
      for (const b of run.bullets) { if (n >= 300) break; d.position.set(sx(b.x), 0.2, sz(b.y)); d.scale.setScalar(Math.max(0.5, b.r * K * 2.4)); d.updateMatrix(); this.bub.setMatrixAt(n, d.matrix); this._col.set(b.kind === 'homing' ? 0xff9a9a : b.kind === 'dart' ? 0x6ab8ff : 0xb8e8ff); this.bub.setColorAt(n, this._col); n++; }
      this.bub.count = n; this.bub.instanceMatrix.needsUpdate = true; if (this.bub.instanceColor) this.bub.instanceColor.needsUpdate = true;
      let m = 0;
      for (const b of run.eb) { if (m >= 200) break; d.position.set(sx(b.x), 0.3, sz(b.y)); d.scale.setScalar(Math.max(0.6, b.r * K * 2.6)); d.updateMatrix(); this.ebl.setMatrixAt(m++, d.matrix); }
      this.ebl.count = m; this.ebl.instanceMatrix.needsUpdate = true;
    } else {
      for (const [k, o] of this.objs) { this.world.remove(o); if (o.userData.sh) this.world.remove(o.userData.sh); this.objs.delete(k); }
      this.bub.count = 0; this.ebl.count = 0;
    }
    // bursts
    for (let i = this.bursts.length - 1; i >= 0; i--) { const b = this.bursts[i], u = b.userData; u.life += dt; u.vy -= 18 * dt; b.position.x += u.vx * dt; b.position.y += u.vy * dt; b.position.z += u.vz * dt; b.rotation.x += dt * 8; b.scale.setScalar(Math.max(0.01, 0.35 * (1 - u.life / 0.8))); if (u.life > 0.8) { this.scene.remove(b); this.bursts.splice(i, 1); } }

    // camera: behind and above the plane, framing the whole field width
    const asp = this.w / this.h; const t = Math.tan((this.camera.fov * Math.PI) / 360);
    const dist = Math.max(20, (W * K * 0.32) / (t * Math.min(asp, 1.2)));
    const tx = sx(px) * 0.45, tz = sz(py) - 7;
    const want = new THREE.Vector3(tx, dist * 0.75, tz + dist * 0.75);
    this.camPos.lerp(want, Math.min(1, dt * 4)); this.target.set(tx * 0.9, -1, tz);
    this.camera.position.copy(this.camPos); this.camera.lookAt(this.target);
    this.renderer.render(this.scene, this.camera);
  }

  dispose() { try { this.renderer.dispose(); this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.dom.remove(); }
}
