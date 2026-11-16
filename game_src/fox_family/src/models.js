// Models for «أم الثعلب ومغامرات العيور», built from shapes in code: the fox mother with a lavender bow (as on the owner's
// card) and her cubs, cars, tractors, pickup trucks with crates, vans, the log train, logs, ice floes, lily pads,
// seasonal trees (round green, orange autumn, snowy pines), bushes, berries, and the cozy tree-stump den.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}
export function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  return o;
}
export function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 14) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  o.position.set(x, y, z);
  return o;
}
export function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 14) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  return o;
}
export function cone(r, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m);
  o.position.set(x, y, z);
  return o;
}

/** A fox (facing -z, the way she hops). `cub` makes a small one. */
export function makeFox(cub = false) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const orange = mat(0xf07a2a);
  const white = mat(0xfff4e6);
  const dark = mat(0x3a2418);
  body.add(ball(0.32, orange, 0, 0.42, 0.05, 0.85, 0.85, 1.2, 14));
  body.add(ball(0.2, white, 0, 0.38, -0.2, 0.8, 0.8, 0.6, 12));
  const legs = [];
  for (const [x, z] of [[-0.14, -0.2], [0.14, -0.2], [-0.14, 0.25], [0.14, 0.25]]) {
    const l = cyl(0.06, 0.05, 0.28, dark, x, 0.14, z, 8);
    body.add(l);
    legs.push(l);
  }
  const head = new THREE.Group();
  head.position.set(0, 0.78, -0.32);
  head.add(ball(0.28, orange, 0, 0, 0, 1.05, 0.95, 1, 16));
  head.add(ball(0.14, white, 0, -0.08, -0.2, 1.1, 0.75, 1.3, 12)); // muzzle
  head.add(ball(0.05, dark, 0, -0.04, -0.4, 1, 0.8, 0.8, 8)); // nose
  for (const s of [-1, 1]) {
    head.add(ball(0.07, mat(0x1a1010), s * 0.11, 0.06, -0.22, 1, 1.2, 0.7, 10));
    head.add(ball(0.025, mat(0xffffff), s * 0.11 + 0.02, 0.09, -0.27, 1, 1, 0.5, 6));
    const ear = cone(0.1, 0.24, orange, s * 0.17, 0.27, 0.02, 4);
    ear.rotation.z = -s * 0.25;
    head.add(ear);
    head.add(cone(0.05, 0.12, dark, s * 0.19, 0.36, 0.02, 4).rotateZ(-s * 0.25));
    head.add(ball(0.05, mat(0xff9aa8), s * 0.17, -0.06, -0.18, 1, 0.6, 0.4, 8));
  }
  if (!cub) {
    // the lavender bow
    const bow = new THREE.Group();
    bow.position.set(0.14, 0.22, 0.02);
    for (const s of [-1, 1]) bow.add(ball(0.08, mat(0xb08af0), s * 0.08, 0, 0, 1, 0.7, 0.4, 8));
    bow.add(ball(0.04, mat(0x8a5ad8), 0, 0, 0, 1, 1, 1, 6));
    head.add(bow);
    body.add(cyl(0.2, 0.22, 0.08, mat(0xb08af0), 0, 0.6, -0.25, 12)); // little scarf
  }
  body.add(head);
  const tail = new THREE.Group();
  tail.position.set(0, 0.5, 0.38);
  tail.add(ball(0.16, orange, 0, 0.08, 0.18, 1, 1, 1.9, 10));
  tail.add(ball(0.1, white, 0, 0.12, 0.45, 1, 1, 1.1, 8));
  tail.rotation.x = 0.5;
  body.add(tail);
  root.scale.setScalar(cub ? 0.55 : 1);
  return { root, body, head, legs, tail };
}

export function makeVehicle(kind, color) {
  const g = new THREE.Group(); // along +x
  const wheel = (x, z, r = 0.22) => { const w = cyl(r, r, 0.16, mat(0x1e1e24), x, r, z, 12); w.rotation.x = Math.PI / 2; g.add(w); };
  if (kind === 'tractor') {
    g.add(box(1.0, 0.45, 0.7, mat(color), 0.15, 0.55, 0));
    g.add(box(0.5, 0.55, 0.62, mat(color), -0.3, 0.95, 0));
    g.add(box(0.46, 0.35, 0.64, new THREE.MeshLambertMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.6 }), -0.3, 1.0, 0));
    g.add(cyl(0.05, 0.05, 0.5, mat(0x3a3a3a), 0.45, 1.0, 0.15, 6));
    for (const z of [-0.42, 0.42]) { const w = cyl(0.38, 0.38, 0.2, mat(0x1e1e24), -0.3, 0.38, z, 14); w.rotation.x = Math.PI / 2; g.add(w); wheel(0.5, z, 0.22); }
  } else if (kind === 'truck') {
    g.add(box(0.7, 0.75, 0.8, mat(color), 0.75, 0.6, 0));
    g.add(box(0.5, 0.3, 0.82, new THREE.MeshLambertMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.7 }), 0.9, 0.85, 0));
    g.add(box(1.4, 0.35, 0.8, mat(color), -0.35, 0.45, 0));
    for (let i = 0; i < 3; i++) g.add(box(0.36, 0.32, 0.36, mat(0xc08040), -0.75 + i * 0.4, 0.8, (i % 2) * 0.2 - 0.1));
    for (let i = 0; i < 3; i++) g.add(ball(0.08, mat(0xe83a3a), -0.75 + i * 0.4, 1.0, 0.0, 1, 1, 1, 6));
    for (const z of [-0.4, 0.4]) { wheel(0.7, z); wheel(-0.6, z); }
  } else if (kind === 'van') {
    g.add(box(2.0, 1.1, 0.85, mat(0xf4f4f4), -0.2, 0.75, 0));
    g.add(box(0.5, 0.75, 0.85, mat(color), 0.95, 0.58, 0));
    g.add(box(0.1, 0.35, 0.8, new THREE.MeshLambertMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.7 }), 1.2, 0.8, 0));
    g.add(box(1.9, 0.1, 0.87, mat(color), -0.2, 0.9, 0));
    for (const z of [-0.4, 0.4]) { wheel(0.8, z); wheel(-0.8, z); }
  } else {
    // a little round car
    g.add(box(1.3, 0.4, 0.75, mat(color), 0, 0.42, 0));
    g.add(ball(0.42, mat(color), -0.05, 0.62, 0, 1.2, 0.7, 0.85, 14));
    g.add(ball(0.36, new THREE.MeshLambertMaterial({ color: 0x9ad8ff, transparent: true, opacity: 0.7 }), -0.05, 0.66, 0, 1.15, 0.6, 0.9, 12));
    for (const s of [-1, 1]) g.add(ball(0.06, mat(0xffffcc, 0xffffaa, 0.8), 0.66, 0.45, s * 0.25, 0.5, 1, 1, 8));
    for (const z of [-0.36, 0.36]) { wheel(0.42, z, 0.2); wheel(-0.42, z, 0.2); }
  }
  return g;
}

/** The log train: a little steam engine with flatcars stacked with logs (along +x). */
export function makeTrain() {
  const g = new THREE.Group();
  g.add(box(1.8, 0.6, 0.9, mat(0x2a6a3a), 0, 0.6, 0));
  g.add(cyl(0.38, 0.38, 1.3, mat(0x2a6a3a), 0.3, 1.1, 0, 14).rotateZ(Math.PI / 2));
  g.add(box(0.7, 0.9, 0.9, mat(0xc0302a), -0.6, 1.25, 0));
  g.add(cyl(0.12, 0.16, 0.55, mat(0x2a2a2a), 0.8, 1.55, 0, 10));
  g.add(cone(0.35, 0.4, mat(0xe8c040), 1.05, 0.5, 0, 4).rotateZ(-Math.PI / 2));
  for (let c = 1; c <= 3; c++) {
    g.add(box(2.0, 0.25, 0.9, mat(0x6a4a2a), -c * 2.2, 0.45, 0));
    for (let k = 0; k < 3; k++) g.add(cyl(0.18, 0.18, 1.8, mat(0x9a6a3a), -c * 2.2, 0.75 + (k % 2) * 0.28, (k - 1) * 0.28, 10).rotateZ(Math.PI / 2));
  }
  for (let i = 0; i < 8; i++) { const w = cyl(0.2, 0.2, 0.95, mat(0x1e1e24), 0.6 - i * 1.1, 0.22, 0, 12); w.rotation.x = Math.PI / 2; g.add(w); }
  return g;
}

export function makeLog(len, kind) {
  if (kind === 'floe') return box(len, 0.25, 0.9, mat(0xf2f8ff), 0, 0.05, 0);
  if (kind === 'lily') {
    const g = new THREE.Group();
    const pad = new THREE.Mesh(new THREE.CircleGeometry(0.48, 18, 0.3, Math.PI * 1.85), mat(0x4ab84a));
    pad.rotation.x = -Math.PI / 2;
    pad.position.y = 0.06;
    g.add(pad);
    g.add(ball(0.08, mat(0xff9ad8), 0.15, 0.12, 0.1, 1, 0.6, 1, 8));
    return g;
  }
  const g = new THREE.Group();
  const log = cyl(0.36, 0.36, len, mat(0x9a6a3a), 0, 0.1, 0, 12);
  log.rotation.z = Math.PI / 2;
  g.add(log);
  for (const s of [-1, 1]) { const end = cyl(0.3, 0.3, 0.02, mat(0xe8c890), s * (len / 2 + 0.005), 0.1, 0, 12); end.rotation.z = Math.PI / 2; g.add(end); }
  return g;
}

export function makeTree(season, s = 1) {
  const g = new THREE.Group();
  if (season === 'winter') {
    g.add(cyl(0.12 * s, 0.16 * s, 0.6 * s, mat(0x6a4426), 0, 0.3 * s, 0, 7));
    for (let k = 0; k < 3; k++) {
      g.add(cone((0.75 - k * 0.18) * s, 0.8 * s, mat(0x2a6a4a), 0, (0.8 + k * 0.45) * s, 0, 8));
      g.add(cone((0.55 - k * 0.14) * s, 0.35 * s, mat(0xf4f8ff), 0, (1.05 + k * 0.45) * s, 0, 8));
    }
    return g;
  }
  g.add(cyl(0.12 * s, 0.18 * s, 0.9 * s, mat(0x7a4a28), 0, 0.45 * s, 0, 7));
  const leaf = season === 'autumn' ? [0xe8742a, 0xd84a2a, 0xf2b02a] : [0x4aa84a, 0x5ac05a, 0x3a9a3a];
  g.add(ball(0.6 * s, mat(leaf[0]), 0, 1.25 * s, 0, 1, 0.9, 1, 10));
  g.add(ball(0.42 * s, mat(leaf[1]), 0.35 * s, 1.05 * s, 0.15 * s, 1, 0.9, 1, 9));
  g.add(ball(0.4 * s, mat(leaf[2]), -0.32 * s, 1.1 * s, -0.12 * s, 1, 0.9, 1, 9));
  return g;
}

export function makeBerry() {
  const g = new THREE.Group();
  g.add(ball(0.16, mat(0xe8203a, 0x6a0010, 0.25), 0, 0.2, 0, 1, 1.1, 1, 12));
  for (let i = 0; i < 6; i++) g.add(ball(0.025, mat(0xffe0a0), Math.cos(i) * 0.12, 0.22 + Math.sin(i * 2) * 0.06, Math.sin(i) * 0.12, 1, 1, 1, 5));
  g.add(cone(0.08, 0.08, mat(0x3a9a3a), 0, 0.38, 0, 5));
  return g;
}

/** The cozy den: a big tree stump with a round doorway, a little roof of leaves and a lantern. */
export function makeDen(season) {
  const g = new THREE.Group();
  g.add(cyl(1.4, 1.7, 1.8, mat(0x8a5a32), 0, 0.9, 0, 18));
  const top = cyl(1.4, 1.4, 0.08, mat(0xe8c890), 0, 1.82, 0, 18);
  g.add(top);
  for (let i = 1; i < 4; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(i * 0.32, 0.03, 4, 24), mat(0xb08050)); ring.rotation.x = Math.PI / 2; ring.position.y = 1.87; g.add(ring); }
  const door = new THREE.Mesh(new THREE.CircleGeometry(0.6, 20, 0, Math.PI), mat(0x2a1810));
  door.position.set(0, 0.25, 1.62);
  g.add(door);
  g.add(box(1.2, 0.5, 0.02, mat(0x2a1810), 0, 0.0, 1.62));
  g.add(ball(0.12, mat(0xffd27a, 0xffb040, 0.9), 0.85, 1.2, 1.4, 1, 1.2, 1, 8));
  const leaf = season === 'winter' ? 0xf4f8ff : season === 'autumn' ? 0xe8742a : 0x5ac05a;
  for (let i = 0; i < 6; i++) g.add(ball(0.5, mat(leaf), Math.cos(i) * 0.9, 2.1, Math.sin(i) * 0.9, 1, 0.5, 1, 8));
  return g;
}

/** A lane strip texture: grass (season), road with dashes, water, or a railway. */
export function laneTexture(type, season) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 32;
  const g = c.getContext('2d');
  if (type === 'road') {
    g.fillStyle = season === 'winter' ? '#4a4e58' : '#3a3d46';
    g.fillRect(0, 0, 256, 32);
    g.fillStyle = '#f4f4f4';
    g.fillRect(0, 1, 256, 1.5);
    g.fillRect(0, 29.5, 256, 1.5);
    for (let i = 0; i < 256; i += 32) g.fillRect(i + 4, 15, 16, 3);
    if (season === 'winter') { g.fillStyle = 'rgba(255,255,255,0.6)'; g.fillRect(0, 0, 256, 3); g.fillRect(0, 29, 256, 3); }
  } else if (type === 'river' || type === 'lily') {
    g.fillStyle = season === 'winter' ? '#5aa8c8' : '#3a9ab0';
    g.fillRect(0, 0, 256, 32);
    g.strokeStyle = 'rgba(255,255,255,0.4)';
    for (let i = 0; i < 12; i++) { g.beginPath(); g.moveTo((i * 41) % 256, (i * 7) % 32); g.lineTo((i * 41) % 256 + 14, (i * 7) % 32); g.stroke(); }
  } else if (type === 'rail') {
    g.fillStyle = '#9a8a7a';
    g.fillRect(0, 0, 256, 32);
    g.fillStyle = '#6a4a2a';
    for (let i = 0; i < 256; i += 12) g.fillRect(i, 4, 6, 24);
    g.fillStyle = '#c8ccd4';
    g.fillRect(0, 8, 256, 3);
    g.fillRect(0, 21, 256, 3);
  } else {
    const base = season === 'winter' ? '#f2f6fa' : season === 'autumn' ? '#7aa040' : '#5aaa3a';
    const alt = season === 'winter' ? '#e4ecf4' : season === 'autumn' ? '#6c9238' : '#4f9c34';
    g.fillStyle = base;
    g.fillRect(0, 0, 256, 32);
    g.fillStyle = alt;
    for (let i = 0; i < 256; i += 64) g.fillRect(i, 0, 32, 32);
    if (season === 'autumn') for (let i = 0; i < 30; i++) { g.fillStyle = ['#e8742a', '#d84a2a', '#f2b02a'][i % 3]; g.fillRect((i * 53) % 256, (i * 17) % 32, 3, 2); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
