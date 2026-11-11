// Every model of the bakery is built here from simple shapes: the chef (Nour or Adam in a chef's hat), pumpkins,
// pies, the brick oven, the striped counter, animal customers and helpers, autumn trees, fences, tables, lights and
// the pumpkin chute. Original, cute and bright; Lambert materials keep phones fast.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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
export function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 16) {
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
function cone(r, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m);
  o.position.set(x, y, z);
  return o;
}

// ---- pumpkins and pies ------------------------------------------------------------------------------------------

let _pumpkinGeo;
/** A ribbed pumpkin body (radius 1), made once and shared. */
function pumpkinGeo() {
  if (_pumpkinGeo) return _pumpkinGeo;
  const g = new THREE.SphereGeometry(1, 24, 14);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const a = Math.atan2(v.z, v.x);
    const rib = 1 - 0.09 * Math.pow(Math.abs(Math.cos(a * 4)), 0.6);
    v.x *= rib;
    v.z *= rib;
    v.y *= 0.72;
    if (v.y > 0.6) v.y -= (v.y - 0.6) * 0.6; // a dip at the top
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  _pumpkinGeo = g;
  return g;
}

// one material with vertex colours, so a pumpkin or a pie is a single draw (many of them stay fast on phones)
const vcMat = new THREE.MeshLambertMaterial({ vertexColors: true });
function paint(geo, color, m4) {
  const g = (geo.index ? geo : geo).clone();
  if (m4) g.applyMatrix4(m4);
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
const M = (x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) => new THREE.Matrix4().compose(
  new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, 0, rz)), new THREE.Vector3(sx, sy, sz));

let _pumpkin;
function pumpkinMerged() {
  if (_pumpkin) return _pumpkin;
  _pumpkin = mergeGeometries([
    paint(pumpkinGeo(), 0xff8a1f, M(0, 0.72, 0)),
    paint(new THREE.CylinderGeometry(0.12, 0.16, 0.45, 7), 0x6b4a1e, M(0, 1.55, 0)),
    paint(new THREE.SphereGeometry(0.28, 8, 6), 0x4caf50, M(0.25, 1.42, 0, 1, 0.25, 0.6, 0, -0.5)),
  ]);
  return _pumpkin;
}
export function makePumpkin(s = 0.3) {
  const m = new THREE.Mesh(pumpkinMerged(), vcMat);
  m.scale.setScalar(s);
  return m;
}

let _pie;
function pieMerged() {
  if (_pie) return _pie;
  _pie = mergeGeometries([
    paint(new THREE.CylinderGeometry(0.3, 0.25, 0.12, 18), 0xe9b86a, M(0, 0.06, 0)),
    paint(new THREE.CylinderGeometry(0.26, 0.26, 0.03, 18), 0xf0802a, M(0, 0.125, 0)),
    paint(new THREE.TorusGeometry(0.28, 0.035, 6, 20), 0xd9a052, M(0, 0.125, 0, 1, 1, 1, Math.PI / 2)),
    paint(new THREE.SphereGeometry(0.07, 8, 6), 0xfffaf0, M(0, 0.15, 0, 1, 0.5, 1)),
  ]);
  return _pie;
}
export function makePie(s = 1) {
  const m = new THREE.Mesh(pieMerged(), vcMat);
  m.scale.setScalar(s);
  return m;
}

export function makeSprout() {
  const g = new THREE.Group();
  const m = mat(0x5cbf4a);
  for (let i = 0; i < 3; i++) {
    const l = ball(0.12, m, Math.cos(i * 2.1) * 0.1, 0.12, Math.sin(i * 2.1) * 0.1, 1, 0.3, 0.6, 8);
    l.rotation.y = i * 2.1;
    g.add(l);
  }
  return g;
}

export function makeCoin() {
  const c = cyl(0.16, 0.16, 0.05, mat(0xffc93c, 0x8a5a00, 0.35), 0, 0.025, 0, 14);
  return c;
}

// ---- people and animals ------------------------------------------------------------------------------------------

/** Nour or Adam as a little chef. `back` is where the carried stack sits. */
export function makeChef(kind = 'girl') {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = mat(0xf6c9a0);
  const white = mat(0xffffff);
  const clothes = mat(kind === 'girl' ? 0xff8fb1 : 0x4f8fe8);
  const hair = mat(kind === 'girl' ? 0x7a3e1d : 0x3a2414);
  const legs = [];
  for (const x of [-0.13, 0.13]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.45, 0);
    leg.add(cyl(0.08, 0.08, 0.4, mat(0x5a4636), 0, -0.2, 0, 8));
    leg.add(ball(0.11, mat(0x7a4a2a), 0, -0.42, 0.04, 1, 0.6, 1.4, 8));
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.25, 0.32, 0.55, clothes, 0, 0.72, 0));
  body.add(cyl(0.24, 0.3, 0.45, white, 0, 0.69, 0.05)); // apron
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.3, 0.92, 0);
    arm.add(cyl(0.065, 0.065, 0.36, clothes, 0, -0.17, 0, 8));
    arm.add(ball(0.08, skin, 0, -0.37, 0, 1, 1, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  const head = new THREE.Group();
  head.position.y = 1.32;
  head.add(ball(0.32, skin));
  head.add(ball(0.335, hair, 0, 0.06, -0.06, 1, 0.92, 0.95));
  // the face looks forward (+z)
  for (const s of [-1, 1]) {
    head.add(ball(0.045, mat(0x2a1a10), s * 0.11, 0.02, 0.29, 1, 1.3, 0.6, 8));
    head.add(ball(0.045, mat(0xff9a9a), s * 0.19, -0.08, 0.25, 1, 0.6, 0.4, 8));
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 5, 10, Math.PI), mat(0x8a3a2a));
  smile.position.set(0, -0.1, 0.3);
  smile.rotation.z = Math.PI;
  head.add(smile);
  if (kind === 'girl') {
    head.add(ball(0.16, hair, 0, -0.08, -0.32, 1, 1.4, 1)); // ponytail
    head.add(ball(0.06, mat(0xff5c8a), 0, 0.12, -0.3, 1, 1, 1, 8));
  } else {
    head.add(ball(0.2, hair, 0, 0.18, 0.12, 1.4, 0.45, 1)); // fringe
  }
  // chef's hat
  head.add(cyl(0.24, 0.24, 0.18, white, 0, 0.32, 0));
  for (let i = 0; i < 5; i++) head.add(ball(0.15, white, Math.cos(i * 1.256) * 0.12, 0.5, Math.sin(i * 1.256) * 0.12, 1, 0.9, 1, 10));
  head.add(ball(0.17, white, 0, 0.56, 0, 1, 0.9, 1, 10));
  body.add(head);
  const back = new THREE.Group();
  back.position.set(0, 0.9, -0.42);
  body.add(back);
  return { root, body, legs, arms, head, back };
}

const ANIMALS = {
  bear: { fur: 0xb07a4a, belly: 0xe8c9a0 },
  fox: { fur: 0xf07a2a, belly: 0xfff1e0 },
  bunny: { fur: 0xf2eee8, belly: 0xffd6e2 },
  cat: { fur: 0x9a9aa8, belly: 0xf4f4f4 },
  raccoon: { fur: 0x8a8f96, belly: 0xdedede },
  owl: { fur: 0xa0703f, belly: 0xf2dcb8 },
};

/** A round, friendly animal standing on two feet (customers and helpers). */
export function makeAnimal(kind = 'bear', outfit = null) {
  const c = ANIMALS[kind] ?? ANIMALS.bear;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const fur = mat(c.fur);
  const belly = mat(c.belly);
  const legs = [];
  for (const x of [-0.13, 0.13]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.3, 0);
    leg.add(ball(0.12, fur, 0, -0.17, 0.03, 1, 1, 1.3, 8));
    body.add(leg);
    legs.push(leg);
  }
  body.add(ball(0.34, fur, 0, 0.52, 0, 1, 1.05, 0.95));
  body.add(ball(0.24, belly, 0, 0.48, 0.16, 1, 1.1, 0.6));
  if (outfit) body.add(cyl(0.3, 0.36, 0.3, mat(outfit), 0, 0.5, 0.02)); // apron / scarf
  const head = new THREE.Group();
  head.position.y = 1.0;
  head.add(ball(0.3, fur));
  head.add(ball(0.14, belly, 0, -0.07, 0.24, 1.2, 0.8, 0.7, 10));
  head.add(ball(0.05, mat(0x2a1a10), 0, -0.02, 0.36, 1, 0.8, 0.8, 8));
  for (const s of [-1, 1]) head.add(ball(0.045, mat(0x1a1a1a), s * 0.11, 0.07, 0.26, 1, 1.25, 0.6, 8));
  if (kind === 'bear') for (const s of [-1, 1]) head.add(ball(0.1, fur, s * 0.21, 0.24, 0, 1, 1, 0.6, 8));
  if (kind === 'fox' || kind === 'cat') {
    for (const s of [-1, 1]) {
      const e = cone(0.1, 0.24, fur, s * 0.17, 0.3, 0, 4);
      e.rotation.z = -s * 0.3;
      head.add(e);
    }
  }
  if (kind === 'bunny') {
    for (const s of [-1, 1]) {
      const e = ball(0.07, fur, s * 0.1, 0.42, -0.02, 1, 3.2, 0.6, 8);
      e.rotation.z = -s * 0.15;
      head.add(e);
    }
  }
  if (kind === 'raccoon') {
    head.add(ball(0.2, mat(0x3a3a40), 0, 0.07, 0.17, 1.35, 0.45, 0.6, 10));
    for (const s of [-1, 1]) head.add(ball(0.045, mat(0xffffff), s * 0.11, 0.08, 0.28, 1, 1, 0.5, 8));
    for (const s of [-1, 1]) head.add(ball(0.08, fur, s * 0.2, 0.25, 0, 1, 1, 0.6, 8));
  }
  if (kind === 'owl') {
    for (const s of [-1, 1]) {
      head.add(ball(0.1, mat(0xffffff), s * 0.11, 0.06, 0.22, 1, 1, 0.5, 10));
      head.add(ball(0.05, mat(0x1a1a1a), s * 0.11, 0.06, 0.28, 1, 1, 0.5, 8));
      const t = cone(0.06, 0.18, fur, s * 0.18, 0.3, 0, 4);
      t.rotation.z = -s * 0.4;
      head.add(t);
      body.add(ball(0.12, fur, s * 0.33, 0.55, 0, 0.5, 1.2, 1, 8));
    }
    head.add(cone(0.05, 0.1, mat(0xffb020), 0, -0.04, 0.33, 4).rotateX(Math.PI / 2));
  }
  if (kind === 'fox' || kind === 'cat' || kind === 'raccoon') {
    const tail = ball(0.12, kind === 'raccoon' ? mat(0x5a5a60) : fur, 0, 0.4, -0.38, 1, 1, 2.4, 8);
    tail.rotation.x = -0.6;
    body.add(tail);
  }
  body.add(head);
  const back = new THREE.Group();
  back.position.set(0, 0.7, -0.38);
  body.add(back);
  return { root, body, legs, arms: [], head, back };
}

// ---- the bakery -------------------------------------------------------------------------------------------------

export function makeOven() {
  const g = new THREE.Group();
  const brick = mat(0xc4552f);
  const dark = mat(0x8e3a20);
  g.add(box(2.6, 1.2, 2.0, brick, 0, 0.6, 0));
  for (let i = 0; i < 6; i++) g.add(box(2.62, 0.05, 2.02, dark, 0, 0.18 + i * 0.2, 0));
  const dome = ball(1.15, brick, 0, 1.2, 0, 1.05, 0.85, 0.85, 18);
  g.add(dome);
  g.add(cyl(0.22, 0.26, 1.1, dark, 0.55, 2.3, -0.35, 10)); // chimney
  // the glowing opening facing south
  const mouth = new THREE.Group();
  mouth.position.set(0, 0.95, 1.0);
  mouth.add(box(1.1, 0.55, 0.12, mat(0x2a1208), 0, 0, 0));
  mouth.add(cyl(0.55, 0.55, 0.12, mat(0x2a1208), 0, 0.27, 0, 18).rotateX(Math.PI / 2));
  const fire = new THREE.Group();
  fire.add(ball(0.32, mat(0xff7a1a, 0xff5a00, 1), -0.15, -0.1, 0.04, 1, 0.8, 0.3, 10));
  fire.add(ball(0.26, mat(0xffc23a, 0xffa000, 1), 0.18, -0.12, 0.06, 1, 0.9, 0.3, 10));
  mouth.add(fire);
  mouth.add(box(1.4, 0.12, 0.3, mat(0xe0d2c0), 0, -0.32, 0.12)); // stone lip
  g.add(mouth);
  return { root: g, fire };
}

/** The wooden crate in front of an oven where pumpkins are dropped. */
export function makeCrate() {
  const g = new THREE.Group();
  const wood = mat(0xb07a42);
  g.add(box(1.4, 0.12, 1.0, wood, 0, 0.06, 0));
  for (const [x, z, w, d] of [[0, -0.5, 1.4, 0.08], [0, 0.5, 1.4, 0.08], [-0.7, 0, 0.08, 1.0], [0.7, 0, 0.08, 1.0]]) g.add(box(w, 0.32, d, wood, x, 0.2, z));
  return g;
}

/** The wooden table next to an oven where baked pies wait. */
export function makeShelf() {
  const g = new THREE.Group();
  const wood = mat(0xd09a5a);
  g.add(box(1.3, 0.1, 1.1, wood, 0, 0.62, 0));
  for (const x of [-0.55, 0.55]) for (const z of [-0.45, 0.45]) g.add(box(0.1, 0.62, 0.1, mat(0x9a6a3a), x, 0.31, z));
  g.add(box(1.36, 0.04, 1.16, mat(0xfff3d6), 0, 0.68, 0)); // cloth
  return g;
}

export function makeCounter(w = 5) {
  const g = new THREE.Group();
  const n = 10;
  for (let i = 0; i < n; i++) g.add(box(w / n, 1.0, 1.1, mat(i % 2 ? 0xffffff : 0xe8473a), -w / 2 + (i + 0.5) * (w / n), 0.5, 0));
  g.add(box(w + 0.2, 0.12, 1.3, mat(0xc98a4a), 0, 1.06, 0));
  // a row of little bunting flags along the front
  for (let i = 0; i < 9; i++) {
    const f = cone(0.13, 0.26, mat([0xff8a1f, 0xffd23a, 0xe8473a][i % 3]), -w / 2 + 0.3 + i * ((w - 0.6) / 8), 0.75, 0.57, 3);
    f.rotation.x = Math.PI;
    g.add(f);
  }
  // a little cash register at the east end
  g.add(box(0.6, 0.4, 0.5, mat(0x4fb06a), w / 2 - 0.55, 1.32, 0));
  g.add(box(0.5, 0.2, 0.12, mat(0xf2f2f2), w / 2 - 0.55, 1.6, -0.12));
  return g;
}

export function makeChute() {
  // a wooden slide from the drop pad down towards the oven crate (pointing -x by default)
  const g = new THREE.Group();
  const wood = mat(0xc28a4a);
  g.add(box(1.4, 0.12, 1.4, mat(0x8a5a2a), 0, 0.9, 0));
  for (const [x, z] of [[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.6], [0.6, 0.6]]) g.add(box(0.12, 0.9, 0.12, wood, x, 0.45, z));
  const funnel = cyl(0.8, 0.45, 0.5, mat(0xe8a25a), 0, 1.2, 0, 12);
  g.add(funnel);
  return g;
}

export function makeTable(umbrella = 0xff8a1f) {
  const g = new THREE.Group();
  const wood = mat(0xc98a4a);
  g.add(cyl(0.6, 0.6, 0.08, wood, 0, 0.75, 0, 18));
  g.add(cyl(0.06, 0.08, 0.75, mat(0x8a5a2a), 0, 0.37, 0, 8));
  for (const s of [-1, 1]) {
    g.add(box(0.45, 0.06, 0.45, wood, s * 0.95, 0.42, 0));
    g.add(box(0.06, 0.5, 0.45, wood, s * 1.15, 0.67, 0));
    for (const z of [-0.18, 0.18]) g.add(box(0.05, 0.42, 0.05, mat(0x8a5a2a), s * 0.95, 0.21, z));
  }
  g.add(cyl(0.025, 0.025, 1.6, mat(0xeeeeee), 0, 1.5, 0, 6));
  g.add(cone(1.0, 0.45, mat(umbrella), 0, 2.35, 0, 8));
  g.add(makePie(0.8).translateY(0.79));
  return g;
}

export function makeTree(s = 1, color = 0xf28c28) {
  const g = new THREE.Group();
  g.add(cyl(0.16 * s, 0.24 * s, 1.4 * s, mat(0x7a4a28), 0, 0.7 * s, 0, 8));
  const leaves = mat(color);
  g.add(ball(0.9 * s, leaves, 0, 1.9 * s, 0, 1, 0.9, 1, 10));
  g.add(ball(0.6 * s, leaves, 0.55 * s, 1.6 * s, 0.2 * s, 1, 0.9, 1, 9));
  g.add(ball(0.55 * s, leaves, -0.5 * s, 1.7 * s, -0.2 * s, 1, 0.9, 1, 9));
  return g;
}

export function makeFence(len) {
  const g = new THREE.Group();
  const wood = mat(0xe8c48a);
  const n = Math.max(2, Math.round(len / 1.2));
  for (let i = 0; i <= n; i++) g.add(box(0.12, 0.7, 0.12, wood, -len / 2 + (i * len) / n, 0.35, 0));
  g.add(box(len, 0.08, 0.06, wood, 0, 0.5, 0));
  g.add(box(len, 0.08, 0.06, wood, 0, 0.25, 0));
  return g;
}

export function makeHay() {
  const g = new THREE.Group();
  const b = cyl(0.45, 0.45, 0.9, mat(0xeac15a), 0, 0.45, 0, 14);
  b.rotation.z = Math.PI / 2;
  b.position.y = 0.45;
  g.add(b);
  return g;
}

export function makeScarecrow() {
  const g = new THREE.Group();
  g.add(cyl(0.05, 0.05, 1.8, mat(0x8a5a2a), 0, 0.9, 0, 6));
  g.add(box(1.3, 0.06, 0.06, mat(0x8a5a2a), 0, 1.3, 0));
  g.add(cyl(0.25, 0.32, 0.6, mat(0x6aa0d8), 0, 1.2, 0, 8));
  g.add(makePumpkin(0.28).translateY(1.5));
  g.add(cone(0.35, 0.3, mat(0xd8b04a), 0, 2.05, 0, 10));
  return g;
}

/** Bulbs on posts (the "autumn lights"); returns the bulbs so they can twinkle. */
export function makeLights(points) {
  const g = new THREE.Group();
  const bulbs = [];
  const cols = [0xffd23a, 0xff7a3a, 0xff4f6a, 0x7adf6a];
  for (const [x, z] of points) g.add(cyl(0.06, 0.06, 2.6, mat(0x6b4a2a), x, 1.3, z, 6));
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[i + 1];
    for (let k = 1; k < 8; k++) {
      const t = k / 8;
      const sag = Math.sin(t * Math.PI) * 0.5;
      const m = new THREE.MeshLambertMaterial({ color: cols[(i * 8 + k) % 4], emissive: cols[(i * 8 + k) % 4], emissiveIntensity: 0.8 });
      const b = ball(0.09, m, x0 + (x1 - x0) * t, 2.5 - sag, z0 + (z1 - z0) * t, 1, 1.2, 1, 8);
      g.add(b);
      bulbs.push(b);
    }
  }
  return { root: g, bulbs };
}

/** A round pad on the ground: paid by standing on it. */
export function makePad() {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 0.98, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.04;
  g.add(ring);
  const fill = new THREE.Mesh(new THREE.CircleGeometry(0.82, 32), new THREE.MeshBasicMaterial({ color: 0x4fb06a, transparent: true, opacity: 0.55 }));
  fill.rotation.x = -Math.PI / 2;
  fill.position.y = 0.03;
  g.add(fill);
  const prog = new THREE.Mesh(new THREE.RingGeometry(0.82, 0.98, 32, 1, 0, 0.001), new THREE.MeshBasicMaterial({ color: 0xffd23a }));
  prog.rotation.x = -Math.PI / 2;
  prog.position.y = 0.05;
  g.add(prog);
  return {
    root: g,
    ring,
    setProgress(f) {
      prog.geometry.dispose();
      prog.geometry = new THREE.RingGeometry(0.8, 1.0, 32, 1, Math.PI / 2, Math.max(0.001, f * Math.PI * 2));
    },
  };
}

/** A soft leaf for the falling autumn leaves. */
export function leafGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.12);
  s.quadraticCurveTo(0.1, 0, 0, 0.12);
  s.quadraticCurveTo(-0.1, 0, 0, -0.12);
  return new THREE.ShapeGeometry(s, 4);
}
