// Every model is built here from simple shapes: the combine harvester, trailer, barn, grate, crops, rocks, animals,
// fences, trees, house, pond and windmill. Original, cute, bright; Lambert materials keep phones fast.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}

function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  return o;
}
function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 14) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  o.position.set(x, y, z);
  return o;
}
function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 12) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  return o;
}

/** Bakes every mesh under `root` into one mesh per material (keeps named children apart). */
export function bake(root, keepNames = []) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const keep = [];
  root.traverse((o) => {
    if (keepNames.includes(o.name)) { keep.push(o); return; }
    if (!o.isMesh || keep.some((k) => isChild(o, k))) return;
    const g = o.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    for (const a of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(a)) g.deleteAttribute(a);
    if (!g.index) g.setIndex([...Array(g.attributes.position.count).keys()]);
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(g);
  });
  const out = new THREE.Group();
  for (const [m, gs] of buckets) out.add(new THREE.Mesh(mergeGeometries(gs, false), m));
  for (const k of keep) {
    const p = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    k.updateMatrixWorld(true);
    new THREE.Matrix4().multiplyMatrices(inv, k.matrixWorld).decompose(p, q, s);
    k.removeFromParent();
    k.position.copy(p);
    k.quaternion.copy(q);
    k.scale.copy(s);
    out.add(k);
  }
  return out;
}
function isChild(o, parent) {
  for (let p = o.parent; p; p = p.parent) if (p === parent) return true;
  return false;
}

// ---- combine harvester ----------------------------------------------------------------------------------------
// Faces +x (heading 0). Returns { root, reel, header, spout } — the header width follows the cutter upgrade.
export function makeCombine(cutter) {
  const g = new THREE.Group();
  const blue = mat(0x3d8bfd, 0x10306a, 0.25);
  const blueDark = mat(0x2a63c4);
  const yellow = mat(0xffcc33, 0x6a4a00, 0.2);
  const black = mat(0x2b2b33);
  const glass = mat(0xbfe8ff, 0x4aa6d8, 0.35);
  const chrome = mat(0xdfe3ea);
  // body
  g.add(box(2.6, 1.1, 1.7, blue, -0.2, 1.15, 0));
  g.add(box(2.2, 0.35, 1.75, blueDark, -0.3, 0.6, 0));
  g.add(box(1.4, 0.5, 1.5, blue, -0.6, 1.95, 0)); // grain tank
  g.add(box(1.3, 0.12, 1.4, yellow, -0.6, 2.25, 0));
  // cab with glass and the farmer inside
  g.add(box(0.95, 0.9, 1.1, glass, 0.75, 2.05, 0));
  g.add(box(1.1, 0.1, 1.25, blue, 0.75, 2.55, 0));
  g.add(ball(0.2, mat(0xf7cba9), 0.8, 2.05, 0));
  g.add(cyl(0.34, 0.34, 0.05, mat(0xe8c26a), 0.8, 2.24, 0, 16)); // straw hat brim
  g.add(cyl(0.18, 0.2, 0.18, mat(0xe8c26a), 0.8, 2.33, 0));
  g.add(box(0.3, 0.3, 0.42, mat(0xe8483f), 0.78, 1.78, 0)); // red shirt
  // wheels
  for (const sz of [-1, 1]) {
    const w = cyl(0.62, 0.62, 0.42, black, 0.45, 0.62, sz * 0.95, 18);
    w.rotation.x = Math.PI / 2;
    g.add(w);
    const hub = cyl(0.26, 0.26, 0.44, yellow, 0.45, 0.62, sz * 0.96, 12);
    hub.rotation.x = Math.PI / 2;
    g.add(hub);
    const w2 = cyl(0.4, 0.4, 0.34, black, -1.2, 0.42, sz * 0.88, 14);
    w2.rotation.x = Math.PI / 2;
    g.add(w2);
  }
  // exhaust pipe and the grain spout pointing back to the trailer
  g.add(cyl(0.07, 0.07, 0.8, chrome, -0.9, 2.5, -0.55, 8));
  const spout = new THREE.Group();
  spout.name = 'spout';
  const pipe = cyl(0.12, 0.12, 1.8, yellow, 0, 0, 0, 10);
  pipe.rotation.z = Math.PI / 2;
  pipe.position.x = -0.9;
  spout.add(pipe);
  spout.position.set(-0.8, 2.3, 0.5);
  spout.rotation.y = -0.35;
  g.add(spout);
  const root = bake(g, ['spout']);
  // the header (cutter) in front: wide yellow bar with a spinning reel
  const header = new THREE.Group();
  header.name = 'header';
  header.position.set(1.55, 0.45, 0);
  const hb = box(0.7, 0.35, 1, yellow, 0, 0, 0);
  header.add(hb);
  const teeth = box(0.12, 0.06, 1, mat(0xcfd4da), 0.38, -0.13, 0);
  header.add(teeth);
  for (const sz of [-0.5, 0.5]) header.add(box(0.75, 0.5, 0.06, yellow, 0, 0.12, sz));
  const reel = new THREE.Group();
  reel.position.set(0.25, 0.45, 0);
  const axle = cyl(0.05, 0.05, 1, mat(0xe8483f), 0, 0, 0, 8);
  axle.rotation.x = Math.PI / 2;
  reel.add(axle);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const bat = box(0.05, 0.05, 1, mat(0xe8483f), Math.cos(a) * 0.32, Math.sin(a) * 0.32, 0);
    reel.add(bat);
  }
  header.add(reel);
  root.add(header);
  const setWidth = (w) => {
    hb.scale.z = w;
    teeth.scale.z = w;
    header.children[2].position.z = -w / 2;
    header.children[3].position.z = w / 2;
    reel.scale.z = w * 0.95;
  };
  setWidth(cutter);
  return { root, reel, header, spout: root.children.find((c) => c.name === 'spout'), setWidth };
}

// ---- trailer --------------------------------------------------------------------------------------------------
export function makeTrailer() {
  const g = new THREE.Group();
  const orange = mat(0xff8a2a, 0x5a2a00, 0.2);
  const dark = mat(0xb5541a);
  const black = mat(0x2b2b33);
  g.add(box(2.2, 0.15, 1.5, dark, 0, 0.7, 0));
  for (const sz of [-0.72, 0.72]) g.add(box(2.2, 0.7, 0.08, orange, 0, 1.1, sz));
  for (const sx of [-1.08, 1.08]) g.add(box(0.08, 0.7, 1.5, orange, sx, 1.1, 0));
  g.add(box(1.2, 0.08, 0.1, mat(0x666a73), 1.7, 0.6, 0)); // tow bar
  for (const sz of [-0.85, 0.85]) {
    const w = cyl(0.42, 0.42, 0.28, black, -0.2, 0.42, sz, 14);
    w.rotation.x = Math.PI / 2;
    g.add(w);
  }
  const root = bake(g);
  // the grain heap inside: grows with the load
  const fill = new THREE.Mesh(new THREE.BoxGeometry(2.05, 1, 1.35), mat(0xf2c14e, 0x6a4a00, 0.25));
  fill.position.y = 0.78;
  fill.scale.y = 0.001;
  root.add(fill);
  const heap = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xf6cf60, 0x6a4a00, 0.25));
  heap.scale.set(1.0, 0.001, 0.66);
  root.add(heap);
  const setFill = (f) => {
    const h = 0.05 + f * 0.62;
    fill.scale.y = Math.max(0.001, h);
    fill.position.y = 0.78 + h / 2;
    heap.position.y = 0.78 + h;
    heap.scale.y = f > 0.02 ? 0.12 + f * 0.25 : 0.001;
  };
  return { root, setFill };
}

// ---- barn, grate, arrow, products -------------------------------------------------------------------------------
export function makeBarn() {
  const g = new THREE.Group();
  const red = mat(0xd9363e, 0x40080a, 0.25);
  const white = mat(0xffffff);
  const roof = mat(0x5a4a42);
  g.add(box(7, 4, 5, red, 0, 2, 0));
  // gable roof
  const shape = new THREE.Shape([new THREE.Vector2(-3.8, 0), new THREE.Vector2(3.8, 0), new THREE.Vector2(0, 2.4)]);
  const gable = new THREE.ExtrudeGeometry(shape, { depth: 5.4, bevelEnabled: false });
  gable.translate(0, 4, -2.7);
  g.add(new THREE.Mesh(gable, roof));
  const front = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-3.5, 0), new THREE.Vector2(3.5, 0), new THREE.Vector2(0, 2.1)]), { depth: 0.05, bevelEnabled: false });
  front.translate(0, 4, 2.5);
  g.add(new THREE.Mesh(front, red));
  // big door with the white X, white trim
  g.add(box(2.6, 2.8, 0.1, mat(0xb52a31), 0, 1.4, 2.53));
  const x1 = box(0.18, 3.6, 0.06, white, 0, 1.4, 2.6);
  x1.rotation.z = 0.75;
  const x2 = box(0.18, 3.6, 0.06, white, 0, 1.4, 2.6);
  x2.rotation.z = -0.75;
  g.add(x1, x2);
  g.add(box(2.9, 0.18, 0.1, white, 0, 2.85, 2.6), box(0.18, 2.9, 0.1, white, -1.36, 1.4, 2.6), box(0.18, 2.9, 0.1, white, 1.36, 1.4, 2.6));
  g.add(box(0.9, 0.9, 0.1, white, 0, 4.9, 2.58), box(0.7, 0.7, 0.1, mat(0x2b2b33), 0, 4.9, 2.62));
  return bake(g);
}

export function makeGrate(w, d) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#2f3540';
  x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#4a5260';
  for (let i = 8; i < 128; i += 14) x.fillRect(i, 10, 6, 108);
  for (let i = 0; i < 128; i += 16) {
    x.fillStyle = (i / 16) % 2 ? '#ffcc33' : '#222';
    x.fillRect(i, 0, 16, 8);
    x.fillRect(i, 120, 16, 8);
    x.fillRect(0, i, 8, 16);
    x.fillRect(120, i, 8, 16);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshLambertMaterial({ map: t }));
  p.rotation.x = -Math.PI / 2;
  p.position.y = 0.04;
  g.add(p);
  return g;
}

export function makeArrow() {
  const g = new THREE.Group();
  const y = mat(0xffcc33, 0xffaa00, 0.6);
  g.add(box(0.5, 1.0, 0.5, y, 0, 1.2, 0));
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.9, 4), y);
  head.rotation.x = Math.PI;
  head.rotation.y = Math.PI / 4;
  head.position.y = 0.3;
  g.add(head);
  return g;
}

export function makeHayBale() {
  const b = cyl(0.55, 0.55, 0.9, mat(0xe8c25a, 0x4a3500, 0.15), 0, 0.55, 0, 14);
  b.rotation.x = Math.PI / 2;
  const g = new THREE.Group();
  g.add(b);
  for (const z of [-0.2, 0.2]) {
    const band = cyl(0.56, 0.56, 0.06, mat(0xb5541a), 0, 0.55, z, 14);
    band.rotation.x = Math.PI / 2;
    g.add(band);
  }
  return bake(g);
}
export function makeSack(color = 0xfaf6ea) {
  const g = new THREE.Group();
  g.add(ball(0.38, mat(color), 0, 0.35, 0, 1, 1.1, 0.8));
  g.add(cyl(0.12, 0.18, 0.18, mat(color), 0, 0.78, 0));
  g.add(box(0.3, 0.04, 0.02, mat(0xd9363e), 0, 0.4, 0.31));
  return bake(g);
}

// ---- crops (one small model each, drawn many times with instancing) --------------------------------------------
function geoOf(group) {
  group.updateMatrixWorld(true);
  const parts = new Map();
  group.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    for (const a of Object.keys(g.attributes)) if (!['position', 'normal'].includes(a)) g.deleteAttribute(a);
    if (!g.index) g.setIndex([...Array(g.attributes.position.count).keys()]);
    // vertex colour from the material, so a crop is ONE draw
    const col = new THREE.Color(o.material.color);
    const n = g.attributes.position.count;
    const cols = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) cols.set([col.r, col.g, col.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    parts.set(parts.size, g);
  });
  return mergeGeometries([...parts.values()], false);
}

export function cropGeometry(kind) {
  const g = new THREE.Group();
  if (kind === 'wheat') {
    const stalk = mat(0xd9a63a);
    const ear = mat(0xf5c84c);
    for (const [x, z, h] of [[-0.1, -0.08, 0.95], [0.1, 0.05, 1.05], [0, 0.12, 0.85], [0.12, -0.12, 0.9], [-0.12, 0.12, 1.0]]) {
      g.add(cyl(0.018, 0.022, h, stalk, x, h / 2, z, 4));
      g.add(ball(0.05, ear, x, h + 0.1, z, 1, 2.6, 1, 5));
    }
  } else if (kind === 'corn') {
    const green = mat(0x5aa63a);
    const leaf = mat(0x6cbf45);
    g.add(cyl(0.04, 0.06, 1.6, green, 0, 0.8, 0, 5));
    for (let i = 0; i < 4; i++) {
      const l = box(0.55, 0.02, 0.12, leaf, 0.22, 0.45 + i * 0.3, 0);
      l.rotation.y = i * 1.6;
      l.rotation.z = -0.5;
      g.add(l);
    }
    g.add(ball(0.08, mat(0xf7d34a), 0.08, 1.0, 0, 1, 2.4, 1, 6));
    g.add(cyl(0.02, 0.04, 0.3, mat(0xe0c06a), 0, 1.75, 0, 4));
  } else {
    const green = mat(0x4f9a35);
    g.add(cyl(0.035, 0.05, 1.4, green, 0, 0.7, 0, 5));
    g.add(box(0.35, 0.02, 0.16, mat(0x63b544), 0.12, 0.6, 0));
    const head = new THREE.Group();
    head.position.set(0.05, 1.42, 0);
    head.rotation.z = -0.5;
    const disc = cyl(0.26, 0.26, 0.05, mat(0xffc928), 0, 0, 0, 12);
    head.add(disc);
    head.add(cyl(0.14, 0.14, 0.07, mat(0x6b3f1d), 0, 0.02, 0, 10));
    g.add(head);
  }
  return geoOf(g);
}

export function stubbleGeometry() {
  const g = new THREE.Group();
  const m = mat(0xc9a14a);
  for (const [x, z] of [[-0.12, -0.1], [0.1, 0.08], [0, 0.14], [0.13, -0.12], [-0.1, 0.12], [0.02, -0.02]]) g.add(cyl(0.02, 0.025, 0.14, m, x, 0.07, z, 4));
  return geoOf(g);
}

// ---- nature and animals ------------------------------------------------------------------------------------------
export function makeRock() {
  const g = new THREE.Group();
  const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.75, 0), mat(0x8d949e, 0x1a1d22, 0.2));
  r.scale.set(1, 0.65, 0.9);
  r.position.y = 0.35;
  r.rotation.y = 0.6;
  g.add(r);
  g.add(ball(0.32, mat(0x9aa2ad), 0.6, 0.2, 0.3, 1, 0.7, 1, 6));
  g.add(ball(0.35, mat(0x6fae3f), -0.1, 0.72, 0, 1.2, 0.25, 1, 6)); // moss
  return bake(g);
}

export function makeTree(s = 1) {
  const g = new THREE.Group();
  g.add(cyl(0.18 * s, 0.25 * s, 1.6 * s, mat(0x8a5530), 0, 0.8 * s, 0, 7));
  const leaf = mat(0x4caf50, 0x0a3a10, 0.2);
  g.add(ball(1.1 * s, leaf, 0, 2.2 * s, 0, 1, 0.9, 1, 9));
  g.add(ball(0.8 * s, mat(0x66c25a), 0.5 * s, 2.7 * s, 0.2 * s, 1, 0.9, 1, 8));
  return g;
}

export function makeAnimal(kind) {
  const g = new THREE.Group();
  if (kind === 'sheep') {
    const wool = mat(0xfaf8f2);
    for (const [x, y, z] of [[0, 0.62, 0], [0.25, 0.65, 0.12], [-0.25, 0.62, -0.1], [0.05, 0.75, -0.15], [-0.15, 0.72, 0.15]]) g.add(ball(0.32, wool, x, y, z, 1, 1, 1, 8));
    g.add(ball(0.2, mat(0x2b2b33), 0.5, 0.75, 0, 1.2, 1, 0.9, 8));
    for (const sz of [-1, 1]) g.add(ball(0.08, mat(0x2b2b33), 0.48, 0.88, sz * 0.18, 1, 0.5, 1.4, 6));
    for (const [x, z] of [[0.25, 0.15], [0.25, -0.15], [-0.25, 0.15], [-0.25, -0.15]]) g.add(cyl(0.05, 0.05, 0.4, mat(0x2b2b33), x, 0.2, z, 6));
  } else if (kind === 'cow') {
    const white = mat(0xffffff);
    const black = mat(0x2b2b33);
    g.add(box(1.4, 0.75, 0.8, white, 0, 0.95, 0));
    g.add(box(0.5, 0.45, 0.82, black, -0.25, 1.05, 0));
    g.add(box(0.3, 0.35, 0.82, black, 0.4, 0.9, 0));
    g.add(box(0.5, 0.5, 0.5, white, 0.85, 1.25, 0));
    g.add(box(0.2, 0.28, 0.46, mat(0xff9fb4), 1.15, 1.13, 0));
    for (const sz of [-1, 1]) g.add(box(0.1, 0.12, 0.18, mat(0xf5e6c8), 0.85, 1.58, sz * 0.22));
    for (const [x, z] of [[0.5, 0.28], [0.5, -0.28], [-0.5, 0.28], [-0.5, -0.28]]) g.add(box(0.16, 0.6, 0.16, white, x, 0.3, z));
  } else {
    g.add(ball(0.26, mat(0xffffff), 0, 0.35, 0, 1.2, 1, 1, 8));
    g.add(ball(0.15, mat(0xffffff), 0.25, 0.6, 0, 1, 1, 1, 8));
    g.add(box(0.1, 0.12, 0.04, mat(0xe8483f), 0.25, 0.78, 0));
    g.add(box(0.1, 0.05, 0.06, mat(0xffaa33), 0.42, 0.6, 0));
    for (const sz of [-1, 1]) g.add(cyl(0.02, 0.02, 0.2, mat(0xffaa33), 0, 0.1, sz * 0.1, 4));
  }
  return bake(g);
}

export function makeHouse() {
  const g = new THREE.Group();
  g.add(box(4.2, 2.6, 3.4, mat(0xfff3e0), 0, 1.3, 0));
  const shape = new THREE.Shape([new THREE.Vector2(-2.5, 0), new THREE.Vector2(2.5, 0), new THREE.Vector2(0, 1.8)]);
  const roof = new THREE.ExtrudeGeometry(shape, { depth: 3.8, bevelEnabled: false });
  roof.translate(0, 2.6, -1.9);
  g.add(new THREE.Mesh(roof, mat(0x3f6bc4)));
  g.add(box(0.9, 1.5, 0.08, mat(0xa0602d), 0, 0.75, 1.72));
  for (const sx of [-1.3, 1.3]) g.add(box(0.8, 0.7, 0.08, mat(0xbfe8ff, 0x4aa6d8, 0.3), sx, 1.6, 1.72));
  g.add(box(0.5, 1.1, 0.5, mat(0xb54a3a), 1.2, 4.0, -0.5));
  return bake(g);
}

export function makeWindmill() {
  const g = new THREE.Group();
  g.add(cyl(0.9, 1.4, 6, mat(0xfff3e0), 0, 3, 0, 10));
  g.add(new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.4, 10), mat(0xd9363e)).translateY(6.7));
  const body = bake(g);
  const blades = new THREE.Group();
  blades.position.set(0, 5.8, 1.15);
  for (let i = 0; i < 4; i++) {
    const b = box(0.5, 3.2, 0.06, mat(0xfaf6ea), 0, 1.6, 0);
    const holder = new THREE.Group();
    holder.rotation.z = (i * Math.PI) / 2;
    holder.add(b);
    blades.add(holder);
  }
  body.add(blades);
  body.userData.blades = blades;
  return body;
}
