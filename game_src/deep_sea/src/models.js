// Every model of «أسماك الأعماق», built from shapes in code: the player's fish (a blue fusilier with a yellow stripe,
// like the video), shrimp, plankton, sardines, damselfish, striped butterflyfish, a round spotted pufferfish, the big
// grouper, mackerel, squid with tentacles, barracuda, glowing lanternfish, the anglerfish with its light, tuna and the
// shark; and the sea: sand with light ripples, rock arches, corals, sea fans, kelp, and the dark trench. Faces +z.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}
export function shiny(color) {
  const k = `p${color}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshPhongMaterial({ color, shininess: 70, specular: 0x88aacc }));
  return cache.get(k);
}
export const basic = (color, opts = {}) => new THREE.MeshBasicMaterial({ color, ...opts });
export function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 14) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  return o;
}
export function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  o.position.set(x, y, z);
  return o;
}
function fin(w, h, m) {
  const sh = new THREE.Shape();
  sh.moveTo(0, 0);
  sh.lineTo(w, h * 0.5);
  sh.lineTo(w * 0.8, 0);
  sh.lineTo(w, -h * 0.5);
  sh.closePath();
  const g = new THREE.ShapeGeometry(sh);
  return new THREE.Mesh(g, m);
}
function eyes(g, x, y, z, r) {
  for (const s of [-1, 1]) {
    g.add(ball(r, mat(0xffffff), s * x, y, z, 0.5, 1, 1, 10));
    g.add(ball(r * 0.6, mat(0x111111), s * (x + r * 0.15), y, z + r * 0.1, 0.5, 1, 1, 8));
  }
}

const LOOK = {
  player: { body: 0x2a7ad8, belly: 0xe8f4ff, stripe: 0xffd23a, tail: 0xffd23a },
  damsel: { body: 0x3ad8e8, belly: 0xc8f8ff, tail: 0x2a8ad8 },
  sardine: { body: 0x9ab8d0, belly: 0xffffff, tail: 0x8aa8c0 },
  mackerel: { body: 0x3a8a8a, belly: 0xe8f0f0, stripe: 0x1a4a5a, tail: 0x2a6a7a },
  grouper: { body: 0x6a6a4a, belly: 0xa8a080, spots: 0x3a3a2a, tail: 0x5a5a3a },
  barracuda: { body: 0xa8b8c8, belly: 0xf0f4f8, spots: 0x3a4a5a, tail: 0x8a9aaa },
  lantern: { body: 0x3a3a6a, belly: 0x6a6a9a, glow: 0x5ae8ff, tail: 0x2a2a5a },
  tuna: { body: 0x1a3a7a, belly: 0xd8e0e8, stripe: 0xffd23a, tail: 0x1a3a7a },
  shark: { body: 0x7a8a9a, belly: 0xf2f2f2, tail: 0x6a7a8a },
};

/** A fish of length 1 (z), with a wagging tail. */
export function makeFish(kind) {
  if (kind === 'puffer') return makePuffer();
  if (kind === 'butterfly') return makeButterfly();
  if (kind === 'squid') return makeSquid();
  if (kind === 'shrimp') return makeShrimp();
  if (kind === 'plankton') return makePlankton();
  if (kind === 'angler') return makeAngler();
  const L = LOOK[kind] || LOOK.damsel;
  const root = new THREE.Group();
  const long = kind === 'barracuda' ? 1.6 : kind === 'shark' ? 1.3 : 1;
  const tall = kind === 'grouper' ? 1.3 : kind === 'barracuda' ? 0.6 : 1;
  const body = ball(0.5, shiny(L.body), 0, 0, 0, 0.42, 0.42 * tall, long * 1.0, 18);
  root.add(body);
  root.add(ball(0.48, mat(L.belly), 0, -0.07 * tall, 0.02, 0.38, 0.3 * tall, long * 0.95, 16));
  if (L.stripe) root.add(ball(0.5, mat(L.stripe), 0, 0.04, 0, 0.43, 0.08 * tall, long * 0.85, 14));
  if (L.spots) for (let i = 0; i < 10; i++) root.add(ball(0.035, mat(L.spots), (i % 2 ? 1 : -1) * 0.2, (i % 3) * 0.06 - 0.03, (i / 10 - 0.5) * 0.7 * long));
  if (L.glow) for (let i = 0; i < 5; i++) root.add(ball(0.03, basic(L.glow), (i % 2 ? 1 : -1) * 0.2, -0.08, (i / 5 - 0.4) * 0.7));
  eyes(root, 0.13, 0.06 * tall, 0.33 * long, kind === 'shark' ? 0.04 : 0.07);
  const tail = new THREE.Group();
  tail.position.z = -0.48 * long;
  const tf = fin(0.38, 0.45 * tall, mat(L.tail));
  tf.rotation.y = Math.PI / 2;
  tf.material.side = THREE.DoubleSide;
  tail.add(tf);
  tf.rotation.set(0, Math.PI / 2, 0);
  tf.position.z = 0;
  root.add(tail);
  tail.rotation.y = 0;
  tail.children[0].rotation.set(0, -Math.PI / 2, 0);
  // dorsal fin (tall and pointed for the shark), side fins
  const dorsal = new THREE.Mesh(new THREE.ConeGeometry(kind === 'shark' ? 0.12 : 0.06, kind === 'shark' ? 0.35 : 0.18, 4), mat(L.tail));
  dorsal.position.set(0, 0.2 * tall + (kind === 'shark' ? 0.12 : 0.04), kind === 'shark' ? 0.05 : -0.05);
  dorsal.scale.z = kind === 'shark' ? 2 : 3;
  root.add(dorsal);
  for (const s of [-1, 1]) { const p = ball(0.1, mat(L.tail), s * 0.2, -0.08, 0.12, 0.2, 0.5, 1.2); p.rotation.z = s * 0.6; root.add(p); }
  if (kind === 'shark') {
    // a toothy (friendly cartoon) grin
    root.add(ball(0.12, mat(0x3a1a2a), 0, -0.1, 0.5 * long, 1, 0.35, 0.5));
    for (let i = 0; i < 6; i++) { const _m = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.05, 4), mat(0xffffff)); _m.position.set(-0.08 + i * 0.032, -0.07, 0.56 * long); root.add(_m); }
  }
  return { root, tail };
}

function makePuffer() {
  const root = new THREE.Group();
  root.add(ball(0.5, shiny(0xe8d07a), 0, 0, 0, 1, 0.9, 1, 16));
  for (let i = 0; i < 26; i++) {
    const a = Math.random() * 6.28;
    const b = Math.random() * 3.14;
    const sp = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 4), mat(0xb8a05a));
    const v = new THREE.Vector3(Math.sin(b) * Math.cos(a), Math.cos(b), Math.sin(b) * Math.sin(a)).multiplyScalar(0.5);
    sp.position.copy(v);
    sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize());
    root.add(sp);
  }
  for (let i = 0; i < 12; i++) root.add(ball(0.04, mat(0x6a5a2a), Math.sin(i) * 0.4, Math.cos(i * 1.3) * 0.3, Math.cos(i) * 0.3));
  eyes(root, 0.22, 0.12, 0.38, 0.1);
  const tail = new THREE.Group();
  tail.position.z = -0.5;
  const tf = fin(0.2, 0.25, mat(0xc8b06a));
  tf.material.side = THREE.DoubleSide;
  tf.rotation.y = -Math.PI / 2;
  tail.add(tf);
  root.add(tail);
  return { root, tail };
}

function makeButterfly() {
  const root = new THREE.Group();
  const body = ball(0.5, shiny(0xffe23a), 0, 0, 0, 0.18, 0.55, 0.6, 16);
  root.add(body);
  for (const z of [-0.12, 0.08, 0.26]) root.add(ball(0.5, mat(0x1a1a1a), 0, 0, z, 0.19, 0.56, 0.06, 12));
  { const _m = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.5, 4), mat(0xffe23a)); _m.position.set(0, 0.45, -0.1); root.add(_m); }
  eyes(root, 0.08, 0.06, 0.24, 0.05);
  const tail = new THREE.Group();
  tail.position.z = -0.3;
  const tf = fin(0.2, 0.3, mat(0xffd23a));
  tf.material.side = THREE.DoubleSide;
  tf.rotation.y = -Math.PI / 2;
  tail.add(tf);
  root.add(tail);
  return { root, tail };
}

function makeSquid() {
  const root = new THREE.Group();
  root.add(ball(0.5, shiny(0xff8a9a), 0, 0, 0.15, 0.3, 0.3, 0.7, 14));
  const fins = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.25, 4), mat(0xff6a8a));
  fins.rotation.x = Math.PI / 2;
  fins.scale.set(1, 1, 0.2);
  fins.position.z = 0.48;
  root.add(fins);
  eyes(root, 0.13, 0.04, -0.15, 0.07);
  const tail = new THREE.Group();
  tail.position.z = -0.25;
  for (let i = 0; i < 8; i++) {
    const t = cyl(0.025, 0.01, 0.55, mat(0xff7a8a), Math.cos(i) * 0.08, Math.sin(i) * 0.08, -0.25, 6);
    t.rotation.x = Math.PI / 2;
    tail.add(t);
  }
  root.add(tail);
  // the squid swims backwards (mantle first): turn it around
  root.children.forEach((c) => { c.position.z = -c.position.z; });
  tail.position.z = 0.25;
  return { root, tail };
}

function makeShrimp() {
  const root = new THREE.Group();
  for (let i = 0; i < 5; i++) root.add(ball(0.13 - i * 0.015, shiny(0xff9a7a), 0, Math.sin(i * 0.5) * 0.08, 0.25 - i * 0.12, 1, 0.9, 0.9, 10));
  for (const s of [-1, 1]) { const a = cyl(0.008, 0.008, 0.6, mat(0xff8a6a), s * 0.06, 0.08, 0.5, 4); a.rotation.x = 1.2; root.add(a); }
  eyes(root, 0.06, 0.06, 0.3, 0.03);
  const tail = new THREE.Group();
  tail.position.z = -0.38;
  tail.add(ball(0.1, mat(0xff8a6a), 0, 0, 0, 1, 0.3, 0.8));
  root.add(tail);
  return { root, tail };
}

function makePlankton() {
  const root = new THREE.Group();
  root.add(ball(0.5, basic(0x6aff8a, { transparent: true, opacity: 0.9 }), 0, 0, 0, 1, 1, 1, 10));
  root.add(ball(0.75, basic(0x6aff8a, { transparent: true, opacity: 0.25, depthWrite: false }), 0, 0, 0, 1, 1, 1, 10));
  return { root, tail: new THREE.Group() };
}

function makeAngler() {
  const f = makeFish('grouper');
  f.root.children[0].material = shiny(0x3a2a3a);
  const stalk = cyl(0.015, 0.015, 0.5, mat(0x3a2a3a), 0, 0.42, 0.35, 4);
  stalk.rotation.x = 0.6;
  f.root.add(stalk);
  f.root.add(ball(0.07, basic(0xfff27a), 0, 0.62, 0.52));
  for (let i = 0; i < 6; i++) { const _m = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.08, 4), mat(0xffffff)); _m.position.set(-0.1 + i * 0.04, -0.06, 0.5); f.root.add(_m); }
  return f;
}

// ---- the sea floor and around ------------------------------------------------------------------------------------

export function sandTexture(c1, c2) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = c1;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1600; i++) { g.fillStyle = Math.random() < 0.5 ? c2 : 'rgba(255,255,255,0.12)'; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  for (let i = 0; i < 18; i++) { g.strokeStyle = 'rgba(255,255,255,0.12)'; g.lineWidth = 3; g.beginPath(); const y = i * 14 + Math.random() * 6; g.moveTo(0, y); for (let x = 0; x <= 256; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 4); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function causticTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(200,240,255,0.55)';
  g.lineWidth = 3;
  for (let i = 0; i < 40; i++) { g.beginPath(); const x = Math.random() * 256; const y = Math.random() * 256; g.ellipse(x, y, 12 + Math.random() * 24, 8 + Math.random() * 16, Math.random() * 3, 0, Math.PI * 2); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function makeRock(r, color) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 1), mat(color));
  m.scale.set(1.3, 0.7, 1);
  m.position.y = r * 0.3;
  g.add(m);
  return g;
}

export function makeArch(color) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.TorusGeometry(4, 1.4, 8, 14, Math.PI), mat(color));
  m.scale.set(1, 1, 0.8);
  g.add(m);
  return g;
}

export function makeCoral(kind, color) {
  const g = new THREE.Group();
  const m = mat(color);
  if (kind === 0) for (let i = 0; i < 6; i++) { const b = cyl(0.12, 0.2, 1.2 + (i % 3) * 0.5, m, Math.cos(i) * 0.5, 0.6, Math.sin(i) * 0.5, 6); b.rotation.set(Math.sin(i) * 0.4, 0, Math.cos(i) * 0.4); g.add(b); }
  else if (kind === 1) { g.add(ball(1, m, 0, 0.6, 0, 1, 0.65, 1, 12)); }
  else { const fan = new THREE.Mesh(new THREE.CircleGeometry(1.4, 16, 0, Math.PI), new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide })); fan.position.y = 0.1; g.add(fan); }
  return g;
}

export function makeKelp(h) {
  const g = new THREE.Group();
  const segs = [];
  const n = Math.max(4, Math.round(h / 1.4));
  let parent = g;
  for (let i = 0; i < n; i++) {
    const s = new THREE.Group();
    s.position.y = i === 0 ? 0 : 1.4;
    s.add(cyl(0.06, 0.08, 1.4, mat(0x3a8a3a), 0, 0.7, 0, 5));
    const leaf = ball(0.5, mat(0x5aa83a), 0.3, 0.8, 0, 0.9, 0.2, 0.35);
    leaf.rotation.z = -0.5;
    s.add(leaf);
    parent.add(s);
    segs.push(s);
    parent = s;
  }
  return { root: g, segs };
}
