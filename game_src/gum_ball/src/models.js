// Every model of «كرة العلكة العملاقة», built from shapes in code and baked into one geometry per kind (vertex colours)
// so the whole city draws with a few instanced meshes: street clutter (candy, apples, rubber ducks, hot dogs, pretzels,
// bananas, balls, teddies, cones), street stuff (hydrants, bins, plant pots, bikes, food carts, umbrella tables), cars,
// taxis, police cars, trees, food trucks, red double-decker buses, fire trucks and buildings with windows and
// billboards; plus the pink gum ball. Sizes are in metres; each model is about 1 unit and scaled by the thing's size.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const C = (hex) => new THREE.Color(hex);
function part(geo, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  g.applyMatrix4(m);
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  const c = C(color);
  for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const S = (r, seg = 10) => new THREE.SphereGeometry(r, Math.min(seg, 8), 6);
const Cy = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, Math.min(seg, 8));
const Co = (r, h, seg = 10) => new THREE.ConeGeometry(r, h, seg);
const T = (r, t, seg = 12) => new THREE.TorusGeometry(r, t, 6, seg);

function wheels(out, len, wid, r, y = r) {
  for (const z of [-len * 0.32, len * 0.32]) for (const s of [-1, 1]) out.push(part(Cy(r, r, 0.12, 12), 0x1a1a1e, s * wid * 0.5, y, z, 0, 0, Math.PI / 2));
}

function car(body, roof = body, extra = []) {
  // a cute round car, 1 long (z), about 0.48 wide
  const o = [];
  o.push(part(B(0.46, 0.18, 1), body, 0, 0.17, 0));
  o.push(part(B(0.4, 0.16, 0.5), roof, 0, 0.33, 0.03));
  o.push(part(B(0.38, 0.12, 0.02), 0x2a3a4a, 0, 0.34, -0.23));
  o.push(part(B(0.38, 0.12, 0.02), 0x2a3a4a, 0, 0.34, 0.29));
  for (const s of [-1, 1]) { o.push(part(B(0.08, 0.04, 0.02), 0xfff4c8, s * 0.15, 0.2, -0.5)); o.push(part(B(0.08, 0.04, 0.02), 0xe8322a, s * 0.15, 0.2, 0.5)); }
  wheels(o, 1, 0.46, 0.09);
  return o.concat(extra);
}

/** Geometry for each kind (about 1 unit big, standing on y = 0). */
export const KIND_PARTS = {
  candy: () => [part(S(0.35), 0xff5ab8), part(Co(0.18, 0.3), 0xffe23a, 0.45, 0, 0, 0, 0, -Math.PI / 2), part(Co(0.18, 0.3), 0xffe23a, -0.45, 0, 0, 0, 0, Math.PI / 2)].map((g) => g.translate(0, 0.35, 0)),
  apple: () => [part(S(0.45, 12), 0xe8322a, 0, 0.45, 0), part(Cy(0.04, 0.04, 0.2), 0x6a4a22, 0, 0.95, 0), part(S(0.12), 0x4ab83a, 0.12, 0.95, 0, 0, 0, 0, 1.6, 0.4, 0.8)],
  duck: () => [part(S(0.4, 12), 0xffd23a, 0, 0.35, 0, 0, 0, 0, 1, 0.8, 1.2), part(S(0.25, 12), 0xffd23a, 0, 0.75, -0.25), part(Co(0.1, 0.2), 0xff8a1a, 0, 0.72, -0.5, -Math.PI / 2), part(S(0.05), 0x111111, 0.12, 0.82, -0.38), part(S(0.05), 0x111111, -0.12, 0.82, -0.38)],
  hotdog: () => [part(Cy(0.22, 0.22, 1, 10), 0xe8b06a, 0, 0.22, 0, Math.PI / 2, 0, 0, 1.4, 1, 0.5), part(Cy(0.13, 0.13, 1.15, 10), 0xc8502a, 0, 0.32, 0, Math.PI / 2), part(B(0.06, 0.04, 0.9), 0xffd23a, 0, 0.45, 0)],
  pretzel: () => [part(T(0.3, 0.1), 0xa8642a, -0.18, 0.12, 0, Math.PI / 2), part(T(0.3, 0.1), 0xa8642a, 0.18, 0.12, 0, Math.PI / 2), part(S(0.03), 0xffffff, 0.2, 0.25, 0.2), part(S(0.03), 0xffffff, -0.25, 0.25, -0.1)],
  banana: () => [part(T(0.4, 0.11, 10), 0xffd83a, 0, 0.12, 0, Math.PI / 2, 0, 0).scale(1, 1, 1), part(S(0.05), 0x5a3a1a, 0.4, 0.12, 0)].map((g) => g),
  ball: () => [part(S(0.5, 14), 0xffffff, 0, 0.5, 0), part(S(0.18), 0x111111, 0, 0.5, -0.42), part(S(0.18), 0x111111, 0.4, 0.62, 0), part(S(0.18), 0x111111, -0.3, 0.75, 0.2)],
  teddy: () => [part(S(0.32, 12), 0xb8763a, 0, 0.3, 0), part(S(0.24, 12), 0xb8763a, 0, 0.72, 0), part(S(0.09), 0xb8763a, 0.18, 0.9, 0), part(S(0.09), 0xb8763a, -0.18, 0.9, 0), part(S(0.08), 0xe8c8a0, 0, 0.68, -0.2), part(S(0.03), 0x111111, 0.08, 0.78, -0.2), part(S(0.03), 0x111111, -0.08, 0.78, -0.2), part(S(0.11), 0xb8763a, 0.3, 0.32, -0.1), part(S(0.11), 0xb8763a, -0.3, 0.32, -0.1)],
  cone: () => [part(Co(0.3, 0.9, 12), 0xff6a1a, 0, 0.5, 0), part(Cy(0.17, 0.22, 0.12, 12), 0xffffff, 0, 0.45, 0), part(B(0.7, 0.06, 0.7), 0xff6a1a, 0, 0.03, 0)],
  hydrant: () => [part(Cy(0.22, 0.25, 0.7, 12), 0xe8322a, 0, 0.35, 0), part(S(0.22), 0xe8322a, 0, 0.72, 0), part(Cy(0.08, 0.08, 0.7), 0xc8c8c8, 0, 0.5, 0, 0, 0, Math.PI / 2), part(Cy(0.3, 0.3, 0.06, 12), 0xb8202a, 0, 0.03, 0)],
  bin: () => [part(Cy(0.38, 0.32, 0.9, 12), 0x3a8a4a, 0, 0.45, 0), part(Cy(0.42, 0.42, 0.08, 12), 0x2a6a3a, 0, 0.92, 0), part(S(0.12), 0xffd23a, 0, 0.98, 0)],
  plant: () => [part(Cy(0.3, 0.22, 0.4, 12), 0xc8603a, 0, 0.2, 0), part(S(0.45, 12), 0x4aa83a, 0, 0.75, 0), part(S(0.3), 0x5ac84a, 0.2, 0.95, 0.1)],
  bike: () => [part(T(0.25, 0.04, 14), 0x1a1a1a, 0, 0.27, -0.33, 0, Math.PI / 2), part(T(0.25, 0.04, 14), 0x1a1a1a, 0, 0.27, 0.33, 0, Math.PI / 2), part(B(0.05, 0.05, 0.66), 0x2a8ae8, 0, 0.45, 0, 0.3), part(B(0.05, 0.4, 0.05), 0x2a8ae8, 0, 0.45, -0.25), part(B(0.3, 0.04, 0.04), 0x2a2a2a, 0, 0.66, -0.3), part(B(0.12, 0.05, 0.2), 0x2a2a2a, 0, 0.62, 0.18)],
  cart: () => [part(B(0.6, 0.45, 0.9), 0xf2f2f2, 0, 0.45, 0), part(B(0.62, 0.08, 0.92), 0xe8322a, 0, 0.7, 0), part(Cy(0.02, 0.02, 0.5), 0x8a8a8a, 0, 0.95, 0), part(Co(0.6, 0.3, 8), 0xffd23a, 0, 1.25, 0), part(Cy(0.12, 0.12, 0.06, 10), 0x2a2a2a, 0.32, 0.12, 0.3, 0, 0, Math.PI / 2), part(Cy(0.12, 0.12, 0.06, 10), 0x2a2a2a, -0.32, 0.12, 0.3, 0, 0, Math.PI / 2)],
  umbrella: () => {
    const o = [part(Cy(0.03, 0.03, 0.9), 0xc8c8c8, 0, 0.45, 0), part(Cy(0.3, 0.3, 0.04, 14), 0xf2f2f2, 0, 0.35, 0), part(Cy(0.03, 0.03, 0.35), 0x8a8a8a, 0, 0.17, 0)];
    for (let i = 0; i < 8; i++) o.push(part(new THREE.ConeGeometry(0.5, 0.2, 8, 1, true, (i / 8) * Math.PI * 2, Math.PI / 4), i % 2 ? 0xffffff : 0xe8322a, 0, 0.98, 0));
    return o;
  },
  car: () => car(0x3a7ae8),
  taxi: () => car(0xffc21a, 0xffc21a, [part(B(0.16, 0.06, 0.1), 0x2a2a2a, 0, 0.44, 0.03)]),
  police: () => car(0xffffff, 0x1a3a8a, [part(B(0.1, 0.05, 0.06), 0xe8322a, -0.06, 0.44, 0.03), part(B(0.1, 0.05, 0.06), 0x2a6ae8, 0.06, 0.44, 0.03), part(B(0.47, 0.06, 0.3), 0x1a3a8a, 0, 0.2, 0)]),
  tree: () => [part(Cy(0.06, 0.09, 0.5), 0x7a4a22, 0, 0.25, 0), part(S(0.35, 10), 0x3a9a3a, 0, 0.7, 0), part(S(0.25, 10), 0x4ab84a, 0.12, 0.9, 0.08), part(S(0.22, 10), 0x2f8a2f, -0.15, 0.85, -0.05)],
  truck: () => {
    const o = [part(B(0.42, 0.42, 0.66), 0xff6aa8, 0, 0.3, 0.12), part(B(0.42, 0.3, 0.3), 0xffffff, 0, 0.24, -0.35), part(B(0.36, 0.14, 0.02), 0x2a3a4a, 0, 0.32, -0.5), part(B(0.02, 0.18, 0.4), 0x2a2a2a, 0.22, 0.32, 0.12), part(Co(0.1, 0.18, 8), 0xffd8a0, 0, 0.6, 0.12)];
    wheels(o, 1, 0.42, 0.08);
    return o;
  },
  bus: () => {
    // a red double-decker (as in the video)
    const o = [part(B(0.3, 0.44, 1), 0xe8322a, 0, 0.27, 0), part(B(0.31, 0.06, 1.01), 0xffffff, 0, 0.27, 0)];
    for (const y of [0.18, 0.38]) for (const s of [-1, 1]) o.push(part(B(0.01, 0.08, 0.86), 0x2a3a4a, s * 0.155, y, 0));
    o.push(part(B(0.26, 0.14, 0.01), 0x2a3a4a, 0, 0.3, -0.5));
    wheels(o, 1, 0.3, 0.06);
    return o;
  },
  firetruck: () => {
    const o = [part(B(0.36, 0.26, 1), 0xd8202a, 0, 0.2, 0), part(B(0.34, 0.12, 0.3), 0xd8202a, 0, 0.38, -0.33), part(B(0.06, 0.06, 0.66), 0xc8c8c8, 0, 0.38, 0.15), part(B(0.3, 0.12, 0.01), 0x2a3a4a, 0, 0.38, -0.49), part(B(0.06, 0.05, 0.06), 0x3a6ae8, 0, 0.46, -0.33)];
    wheels(o, 1, 0.36, 0.07);
    return o;
  },
};

/** A building: a box with window rows, a roof cap and sometimes a big colourful billboard. size 1 = footprint 1. */
function building(color, h, bill, glass) {
  const o = [part(B(0.96, h, 0.96), color, 0, h / 2, 0), part(B(1, 0.04, 1), 0xd8d8d8, 0, h + 0.02, 0)];
  const rows = Math.max(2, Math.round(h * 7));
  for (let i = 0; i < rows; i++) {
    const y = (i + 0.6) * (h / rows);
    const w = glass ? 0x8ad8ff : 0xfff0b8;
    for (const [sx, sz, ry] of [[0, 0.485, 0], [0, -0.485, 0], [0.485, 0, Math.PI / 2], [-0.485, 0, Math.PI / 2]]) o.push(part(B(0.8, (h / rows) * 0.45, 0.01), i % 3 === 1 ? 0x4a5a6a : w, sx, y, sz, 0, ry));
  }
  if (bill) o.push(part(B(0.6, Math.min(0.5, h * 0.4), 0.02), bill, 0, h * 0.55, -0.5));
  o.push(part(B(0.2, 0.12, 0.2), 0x9a9a9a, 0.25, h + 0.1, 0.2));
  return o;
}
KIND_PARTS.shop = () => building(0xffb8d8, 0.8, 0x5ae8ff, false);
KIND_PARTS.house = () => building(0xf2d28a, 1.3, 0xff5ab8, false);
KIND_PARTS.office = () => building(0x6aa8e8, 1.9, 0xffd23a, true);
KIND_PARTS.tower = () => building(0x8a8ae8, 2.6, 0xff6a3a, true);

const cacheGeo = new Map();
/** One merged geometry per kind. */
export function kindGeometry(kind) {
  if (!cacheGeo.has(kind)) {
    const g = mergeGeometries(KIND_PARTS[kind]());
    g.computeBoundingSphere();
    cacheGeo.set(kind, g);
  }
  return cacheGeo.get(kind);
}

export const vcMat = new THREE.MeshLambertMaterial({ vertexColors: true });

/** The pink gum ball: a shiny pink sphere with a few darker swirls. */
export function makeGum() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#ff5aa8';
  x.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 40; i++) {
    x.fillStyle = i % 2 ? 'rgba(255,140,200,0.6)' : 'rgba(220,40,140,0.35)';
    x.beginPath();
    x.ellipse(Math.random() * 256, Math.random() * 128, 6 + Math.random() * 18, 3 + Math.random() * 8, Math.random() * 3, 0, Math.PI * 2);
    x.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 22), new THREE.MeshPhongMaterial({ map: tex, shininess: 90, specular: 0xffc8e8 }));
  g.add(core);
  return { root: g, core };
}

export function tileTexture(a, b, grout, n = 4) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = grout;
  g.fillRect(0, 0, 256, 256);
  const s = 256 / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { g.fillStyle = (i + j) % 2 ? a : b; g.fillRect(i * s + 2, j * s + 2, s - 4, s - 4); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
