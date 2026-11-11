// Everything is built from simple shapes in code (no model files): the planes, rings, islands, cliffs, palms,
// mountains, pines, bridges, rock pillars, stone arches, clouds and the sky.
import * as THREE from 'three';

export const mat = (color, emissive = 0, ei = 1) => new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei, flatShading: false });
const flat = (color) => new THREE.MeshLambertMaterial({ color, flatShading: true });
const mesh = (g, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); return o; };

// ---- planes (nose toward -z) ------------------------------------------------------------------------------------------

const PLANES = {
  player: { kind: 'racer', body: 0xe8322a, trim: 0xffffff, accent: 0xffc21a },
  racer: { kind: 'racer', body: 0xf4f4f4, trim: 0xd8262a, accent: 0x2a2a3a },
  jet: { kind: 'jet', body: 0x2a6ad8, trim: 0xffffff, accent: 0x14306a },
  biplane: { kind: 'biplane', body: 0xffc21a, trim: 0xe8322a, accent: 0x7a4a1a },
};

function propeller(m) {
  const prop = new THREE.Group();
  prop.add(mesh(new THREE.ConeGeometry(0.28, 0.5, 12).rotateX(-Math.PI / 2), m.spinner, 0, 0, -0.2));
  const blade = new THREE.BoxGeometry(0.16, 1.9, 0.05);
  for (let i = 0; i < 2; i++) { const b = mesh(blade, m.blade); b.rotation.z = i * Math.PI / 2 + 0.3; prop.add(b); }
  const disc = mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide }));
  prop.add(disc);
  prop.userData.disc = disc;
  return prop;
}

function pilot(helmet) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.SphereGeometry(0.26, 14, 10), mat(0xf2c39a), 0, 0, 0));
  g.add(mesh(new THREE.SphereGeometry(0.28, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(helmet), 0, 0.03, 0));
  const goggles = mesh(new THREE.TorusGeometry(0.2, 0.05, 6, 16), mat(0x2a2a3a));
  goggles.position.set(0, 0.08, -0.17);
  goggles.scale.set(1, 0.45, 1);
  g.add(goggles);
  return g;
}

export function makePlane(who) {
  const c = PLANES[who] || PLANES.player;
  const root = new THREE.Group(); // yaw/pitch follow the course
  const body = new THREE.Group(); // banking
  root.add(body);
  const m = { body: mat(c.body), trim: mat(c.trim), accent: mat(c.accent), glass: new THREE.MeshLambertMaterial({ color: 0x9adcff, transparent: true, opacity: 0.7, emissive: 0x2a6a9a, emissiveIntensity: 0.4 }), spinner: mat(c.trim), blade: mat(0x2a2a2a) };
  let prop = null;
  let flame = null;
  if (c.kind === 'jet') {
    body.add(mesh(new THREE.CylinderGeometry(0.45, 0.6, 3.6, 14).rotateX(Math.PI / 2), m.body, 0, 0, 0.2));
    body.add(mesh(new THREE.ConeGeometry(0.45, 1.6, 14).rotateX(-Math.PI / 2), m.body, 0, 0, -2.4));
    body.add(mesh(new THREE.SphereGeometry(0.42, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(0.9, 0.8, 2.2), m.glass, 0, 0.32, -1.1));
    const wing = new THREE.Shape();
    wing.moveTo(0, -0.8); wing.lineTo(2.9, 1.0); wing.lineTo(2.9, 1.5); wing.lineTo(0, 1.5);
    const wg = new THREE.ExtrudeGeometry(wing, { depth: 0.12, bevelEnabled: false }).rotateX(Math.PI / 2);
    const wl = mesh(wg, m.body, 0, 0.05, 0); body.add(wl);
    const wr = mesh(wg, m.body, 0, -0.07, 0); wr.scale.x = -1; body.add(wr);
    for (const s of [-1, 1]) { const fin = mesh(new THREE.BoxGeometry(0.08, 1.0, 0.9), m.accent, s * 0.35, 0.6, 1.6); fin.rotation.z = s * 0.25; fin.rotation.x = -0.3; body.add(fin); }
    for (const s of [-1, 1]) body.add(mesh(new THREE.BoxGeometry(1.0, 0.06, 0.6), m.body, s * 0.8, 0, 1.7));
    body.add(mesh(new THREE.BoxGeometry(5.2, 0.04, 0.16), m.trim, 0, 0.12, 0.85));
    flame = mesh(new THREE.ConeGeometry(0.42, 1.6, 12).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x7ad8ff, transparent: true, opacity: 0.8 }), 0, 0, 2.9);
    body.add(flame);
  } else {
    // a sporty propeller racer (or a biplane)
    body.add(mesh(new THREE.CylinderGeometry(0.55, 0.32, 3.4, 16).rotateX(Math.PI / 2), m.body, 0, 0, 0.3));
    body.add(mesh(new THREE.CylinderGeometry(0.62, 0.55, 0.9, 16).rotateX(Math.PI / 2), c.kind === 'biplane' ? m.accent : m.trim, 0, 0, -1.6));
    body.add(mesh(new THREE.SphereGeometry(0.42, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(0.85, 0.85, 1.6), m.glass, 0, 0.42, -0.25));
    const pl = pilot(c.kind === 'biplane' ? 0x7a4a1a : 0xe8322a);
    pl.position.set(0, 0.55, -0.15);
    pl.scale.setScalar(0.85);
    body.add(pl);
    // stripes
    body.add(mesh(new THREE.CylinderGeometry(0.565, 0.53, 0.22, 16).rotateX(Math.PI / 2), m.trim, 0, 0, -0.9));
    body.add(mesh(new THREE.CylinderGeometry(0.42, 0.4, 0.22, 16).rotateX(Math.PI / 2), m.trim, 0, 0, 1.0));
    const wingG = new THREE.BoxGeometry(5.6, 0.14, 1.2);
    const wings = mesh(wingG, m.body, 0, c.kind === 'biplane' ? -0.35 : -0.25, -0.5);
    body.add(wings);
    for (const s of [-1, 1]) { body.add(mesh(new THREE.BoxGeometry(0.5, 0.16, 1.22), m.trim, s * 2.2, wings.position.y, -0.5)); }
    if (c.kind === 'biplane') {
      body.add(mesh(wingG, m.body, 0, 0.95, -0.7));
      for (const s of [-1, 1]) for (const z of [-1.0, -0.2]) body.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.3, 6), m.accent, s * 1.9, 0.3, z));
      for (const s of [-1, 1]) body.add(mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.14, 12).rotateZ(Math.PI / 2), mat(0x2a2a2a), s * 0.6, -1.0, -0.8));
    } else {
      for (const s of [-1, 1]) {
        body.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 6), m.trim, s * 0.9, -0.5, -0.7));
        body.add(mesh(new THREE.SphereGeometry(0.22, 10, 8).scale(0.6, 1, 1.5), m.body, s * 0.9, -0.8, -0.7));
      }
    }
    body.add(mesh(new THREE.BoxGeometry(2.2, 0.1, 0.7), m.body, 0, 0.05, 1.8));
    const fin = mesh(new THREE.BoxGeometry(0.1, 1.0, 0.8), m.body, 0, 0.55, 1.75);
    fin.rotation.x = -0.25;
    body.add(fin);
    body.add(mesh(new THREE.BoxGeometry(0.12, 0.3, 0.5), m.trim, 0, 0.8, 1.85));
    prop = propeller(m);
    prop.position.z = -2.1;
    body.add(prop);
    // wing-tip lights
    body.add(mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0xff2a2a, 0xff2a2a, 1), -2.8, wings.position.y, -0.5));
    body.add(mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0x2aff6a, 0x2aff6a, 1), 2.8, wings.position.y, -0.5));
    flame = mesh(new THREE.ConeGeometry(0.3, 1.4, 12).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffb03a, transparent: true, opacity: 0.85 }), 0, 0, 2.6);
    body.add(flame);
  }
  flame.visible = false;
  // a soft vapour trail from both wing tips
  return { root, body, prop, flame, kind: c.kind };
}

// ---- rings ------------------------------------------------------------------------------------------------------------

const RING_COLORS = { lagoon: [0x8a3ae0, 0xffd21a], glacier: [0x5a6a9a, 0xffd21a], sunset: [0xff5a8a, 0xffe14a] };

export function ringGeometry(world, golden, R) {
  const g = new THREE.TorusGeometry(R + 0.55, 0.62, 8, 60);
  const [a, b] = golden ? [0xffc21a, 0xfff2a0] : RING_COLORS[world];
  const ca = new THREE.Color(a);
  const cb = new THREE.Color(b);
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const ang = Math.atan2(pos.getY(i), pos.getX(i)) + Math.PI;
    const seg = Math.floor(ang / (Math.PI * 2 / 14));
    (seg % 2 ? cb : ca).toArray(col, i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

export function makeRing(geo) {
  const g = new THREE.Group();
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.12 });
  g.add(new THREE.Mesh(geo, m));
  const glow = new THREE.Mesh(new THREE.TorusGeometry(geo.parameters.radius + 0.2, 1.1, 6, 40), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, depthWrite: false }));
  g.add(glow);
  g.userData = { m, glow };
  return g;
}

// ---- instanced scenery ------------------------------------------------------------------------------------------------

export class Instancer {
  constructor() { this.groups = new Map(); }
  add(key, geo, material, matrix, color) {
    if (!this.groups.has(key)) this.groups.set(key, { geo, material, items: [] });
    this.groups.get(key).items.push([matrix, color]);
  }
  build(scene) {
    for (const { geo, material, items } of this.groups.values()) {
      const im = new THREE.InstancedMesh(geo, material, items.length);
      items.forEach(([m, c], i) => { im.setMatrixAt(i, m); if (c !== undefined) im.setColorAt(i, new THREE.Color(c)); });
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.frustumCulled = false;
      scene.add(im);
    }
  }
}

const M4 = (x, y, z, sx = 1, sy = 1, sz = 1, ry = 0, rx = 0, rz = 0) => new THREE.Matrix4().compose(
  new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));

const G = {
  sphere: new THREE.SphereGeometry(1, 14, 10),
  lump: new THREE.IcosahedronGeometry(1, 1),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 10),
  rock: new THREE.CylinderGeometry(0.8, 1, 1, 7),
  cone: new THREE.ConeGeometry(1, 1, 9),
  pine: new THREE.ConeGeometry(1, 1, 7),
  disc: new THREE.CircleGeometry(1, 28).rotateX(-Math.PI / 2),
  leaf: new THREE.BoxGeometry(1, 0.08, 0.32),
  box: new THREE.BoxGeometry(1, 1, 1),
};
const WHITE = new THREE.MeshLambertMaterial({ color: 0xffffff });
const IM = {
  white: WHITE,
  flatWhite: new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }),
  cloud: new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.25 }),
  glow: new THREE.MeshBasicMaterial({ color: 0xffe07a }),
};

export function palm(I, x, y, z, s, rot) {
  const lean = 0.25;
  I.add('trunk', G.cyl, IM.white, M4(x, y + 3 * s, z, 0.22 * s, 6 * s, 0.22 * s, rot, 0, lean), 0x9a6a3a);
  const tx = x - Math.sin(lean) * 3 * s * 1.9;
  const ty = y + 6 * s;
  for (let k = 0; k < 6; k++) {
    const a = rot + (k / 6) * Math.PI * 2;
    I.add('leaf', G.leaf, IM.white, M4(tx + Math.cos(a) * 1.4 * s, ty - 0.3 * s, z - Math.sin(a) * 1.4 * s, 3 * s, 1, 3 * s, a, 0, -0.35), k % 2 ? 0x2a9a3a : 0x3ab84a);
  }
  I.add('cocos', G.sphere, IM.white, M4(tx, ty - 0.4 * s, z, 0.35 * s, 0.35 * s, 0.35 * s), 0x6a4a2a);
}

export function pine(I, x, y, z, s, snow) {
  I.add('trunk', G.cyl, IM.white, M4(x, y + 0.8 * s, z, 0.25 * s, 1.6 * s, 0.25 * s), 0x6a4a2a);
  for (let k = 0; k < 3; k++) I.add('pine', G.pine, IM.flatWhite, M4(x, y + (1.6 + k * 1.3) * s, z, (1.6 - k * 0.4) * s, 2.2 * s, (1.6 - k * 0.4) * s, k), snow && k === 2 ? 0xeef6ff : k % 2 ? 0x1f6a3a : 0x2a7a42);
}

export function island(I, x, z, r, h, world) {
  const sunset = world === 'sunset';
  I.add('disc', G.disc, IM.white, M4(x, 0.15, z, r * 1.9, 1, r * 1.9), sunset ? 0x4ad0d8 : 0x5fe6e0); // lagoon water
  I.add('disc', G.disc, IM.white, M4(x, 0.3, z, r * 1.2, 1, r * 1.2), 0xf2dc9a); // beach
  I.add('lump', G.lump, IM.flatWhite, M4(x, 0, z, r, h, r, x), sunset ? 0x5aa83a : 0x4cb84a);
}

export function cliff(I, x, z, r, h, world, rand) {
  const rock = world === 'sunset' ? 0xc07a5a : 0x9a8a72;
  I.add('disc', G.disc, IM.white, M4(x, 0.2, z, r * 1.8, 1, r * 1.8), 0x5fe6e0);
  I.add('rock', G.rock, IM.flatWhite, M4(x, h / 2, z, r, h, r, rand() * 6), rock);
  I.add('lump', G.lump, IM.flatWhite, M4(x, h, z, r * 1.08, r * 0.45, r * 1.08, rand() * 6), 0x3aa84a);
  if (rand() < 0.5) I.add('box', G.box, IM.white, M4(x + r * 0.95, h * 0.45, z, 0.3, h * 0.9, r * 0.5, 0), 0xdff6ff); // waterfall
  for (let k = 0; k < 3; k++) { const a = rand() * 6.28; palm(I, x + Math.cos(a) * r * 0.5, h + r * 0.2, z + Math.sin(a) * r * 0.5, 0.9 + rand() * 0.5, a); }
}

export function mountain(I, x, z, r, h, rand) {
  I.add('mtn', G.cone, IM.flatWhite, M4(x, h / 2, z, r, h, r, rand() * 6), [0x7a808c, 0x8a8f99, 0x6a707a][Math.floor(rand() * 3)]);
  I.add('mtn', G.cone, IM.flatWhite, M4(x, h * 0.83, z, r * 0.36, h * 0.36, r * 0.36, rand() * 6), 0xf4f8ff); // snow cap
}

export function cloud(I, x, y, z, s, rand) {
  for (let k = 0; k < 5; k++) I.add('cloud', G.sphere, IM.cloud, M4(x + (k - 2) * 2.4 * s, y + Math.sin(k * 2.1) * 0.8 * s, z + (rand() - 0.5) * 3 * s, (2.2 + rand() * 1.2) * s, (1.5 + rand() * 0.8) * s, (2 + rand()) * s), 0xffffff);
}

// ---- course pieces (built in the course's local frame: x right, y up, z = -forward) ---------------------------------

export function makeBridge(world, width, drop) {
  const g = new THREE.Group();
  const stone = world === 'glacier';
  const deck = mat(stone ? 0x8a8f99 : 0x9a6a3a);
  const post = flat(stone ? 0x6a707a : 0x7a5a3a);
  g.add(mesh(new THREE.BoxGeometry(width, 1.2, 5), deck, 0, 0.6, 0));
  for (let k = -width / 2 + 1; k < width / 2; k += 2.2) g.add(mesh(new THREE.BoxGeometry(0.2, 1.3, 5.2), mat(stone ? 0x7a808a : 0x7a4a2a), k, 0.62, 0));
  for (const z of [-2.4, 2.4]) {
    g.add(mesh(new THREE.BoxGeometry(width, 0.18, 0.18), mat(stone ? 0x6a707a : 0xe8d8a0), 0, 2.2, z));
    for (let k = -width / 2 + 2; k < width / 2; k += 4) g.add(mesh(new THREE.BoxGeometry(0.2, 1.6, 0.2), mat(stone ? 0x6a707a : 0x7a4a2a), k, 1.6, z));
  }
  for (const s of [-1, 1]) {
    g.add(mesh(new THREE.BoxGeometry(3.4, drop + 6, 6), post, s * (width / 2 - 1.5), -(drop + 6) / 2 + 3, 0));
    g.add(mesh(new THREE.ConeGeometry(2.4, 3, 4).rotateY(Math.PI / 4), mat(stone ? 0x5a606a : 0xe8322a), s * (width / 2 - 1.5), 4.5, 0));
  }
  return g;
}

export function makePillar(world, height) {
  const g = new THREE.Group();
  const rock = world === 'glacier' ? 0xa8acb4 : world === 'sunset' ? 0xc07a5a : 0x9a8a72;
  g.add(mesh(new THREE.CylinderGeometry(1.9, 2.6, height, 9), flat(rock), 0, height / 2, 0));
  g.add(mesh(new THREE.CylinderGeometry(2.1, 1.9, 1.2, 9), flat(0x8a8a8a), 0, height * 0.3, 0));
  if (world !== 'glacier') g.add(mesh(new THREE.IcosahedronGeometry(2.6, 1).scale(1, 0.5, 1), flat(0x3aa84a), 0, height, 0));
  return g;
}

export function makeArch(world, inner, ground) {
  const g = new THREE.Group();
  const rock = flat(world === 'glacier' ? 0x8a8f99 : world === 'sunset' ? 0xb86a4a : 0x9a8a72);
  const torus = mesh(new THREE.TorusGeometry(inner + 1.6, 1.8, 7, 22), rock);
  g.add(torus);
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    const b = mesh(new THREE.BoxGeometry(2.2, 1.6, 4.4), rock, Math.cos(a) * (inner + 1.6), Math.sin(a) * (inner + 1.6), 0);
    b.rotation.z = a;
    g.add(b);
  }
  g.add(mesh(new THREE.CylinderGeometry(3, 4.6, ground, 8), rock, 0, -inner - 1.6 - ground / 2 + 1, 0));
  if (world !== 'glacier') g.add(mesh(new THREE.IcosahedronGeometry(2.2, 1).scale(1.6, 0.5, 1.2), flat(0x3aa84a), 0, inner + 3, 0));
  return g;
}

export function makeSky(world) {
  const g = new THREE.SphereGeometry(900, 24, 16);
  const top = new THREE.Color(world === 'sunset' ? 0x4a5ac8 : 0x2a7ae8);
  const mid = new THREE.Color(world === 'sunset' ? 0xff9a6a : world === 'glacier' ? 0x9ac8f0 : 0x8ad0f8);
  const low = new THREE.Color(world === 'sunset' ? 0xffd08a : 0xe0f2ff);
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 900;
    if (y > 0.25) c.copy(mid).lerp(top, Math.min(1, (y - 0.25) / 0.6));
    else c.copy(low).lerp(mid, Math.max(0, (y + 0.05) / 0.3));
    c.toArray(col, i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
}

export function makeSun(world) {
  const s = new THREE.Mesh(new THREE.CircleGeometry(40, 32), new THREE.MeshBasicMaterial({ color: world === 'sunset' ? 0xffe0a0 : 0xfffbe8, fog: false, transparent: true, opacity: 0.95 }));
  return s;
}
