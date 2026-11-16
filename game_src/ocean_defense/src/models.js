// Every model of «دفاع القلعة البحرية», built from shapes in code: the clownfish hero (orange with white stripes and a
// little gold crown, as on the owner's card), grumpy purple fish, yellow fast fish, pink jellyfish, a spiky
// pufferfish, the giant purple octopus, ink balls, the spinning shell, the coral fortress (wall, towers and the hero's
// tower) and the reef (corals, sea fans, seaweed, rocks, shells). Cartoon and round, never scary.
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

/** Eyes on a fish that faces +z... fish here swim along z, so their faces look along `dir` (+1 or -1). */
function fishEyes(g, x, y, z, r, angry) {
  for (const s of [-1, 1]) {
    g.add(ball(r, mat(0xffffff), s * x, y, z, 0.7, 1, 1, 12));
    g.add(ball(r * 0.55, mat(angry ? 0xd02020 : 0x1a1010), s * (x + r * 0.35), y, z + r * 0.15, 0.6, 1, 1, 10));
    if (angry) {
      const brow = box(r * 0.25, r * 0.22, r * 1.4, mat(0x2a1030), s * (x + r * 0.5), y + r * 0.85, z);
      brow.rotation.x = s * 0.5;
      g.add(brow);
    } else g.add(ball(r * 0.2, mat(0xffffff, 0xffffff, 0.6), s * (x + r * 0.55), y + r * 0.3, z + r * 0.35, 0.5, 1, 1, 6));
  }
}

/** The clownfish hero, facing up the corridor (-z). Fins and tail wiggle via `tail` and `fins`. */
export function makeClownfish() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const orange = mat(0xff7a1a);
  const white = mat(0xffffff);
  const black = mat(0x1a1010);
  body.add(ball(0.62, orange, 0, 0, 0, 0.78, 0.85, 1.15, 18));
  // white stripes with dark edges
  for (const [z, w] of [[-0.42, 0.11], [0.05, 0.13], [0.5, 0.09]]) {
    const r = 0.62 * Math.sqrt(Math.max(0.1, 1 - (z / (0.62 * 1.15)) ** 2));
    for (const [m, extra] of [[black, 0.012], [white, 0]]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 0.83, w / 2 + extra, 8, 24), m);
      ring.scale.set(0.95, 1.03, 1);
      ring.position.z = z;
      body.add(ring);
    }
  }
  // face looks forward (-z): big eyes and a smile
  for (const s of [-1, 1]) {
    body.add(ball(0.17, white, s * 0.24, 0.16, -0.5, 1, 1.1, 0.7, 12));
    body.add(ball(0.1, black, s * 0.25, 0.14, -0.6, 1, 1.1, 0.6, 10));
    body.add(ball(0.035, mat(0xffffff, 0xffffff, 0.6), s * 0.22, 0.2, -0.66, 1, 1, 0.6, 6));
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.025, 6, 12, Math.PI), black);
  smile.position.set(0, -0.08, -0.68);
  smile.rotation.set(0.3, 0, Math.PI);
  body.add(smile);
  // fins and tail
  const tail = new THREE.Group();
  tail.position.z = 0.68;
  const tf = ball(0.3, orange, 0, 0, 0.2, 0.15, 1, 0.8, 10);
  tail.add(tf);
  tail.add(ball(0.31, black, 0, 0, 0.28, 0.12, 1.02, 0.5, 10));
  body.add(tail);
  const fins = [];
  for (const s of [-1, 1]) {
    const f = new THREE.Group();
    f.position.set(s * 0.45, -0.12, -0.05);
    f.add(ball(0.2, orange, s * 0.12, 0, 0, 1, 0.18, 0.8, 10));
    body.add(f);
    fins.push(f);
  }
  body.add(ball(0.32, orange, 0, 0.5, 0.1, 0.18, 0.7, 1.1, 10)); // top fin
  // a little gold crown
  const crown = new THREE.Group();
  crown.position.set(0, 0.55, -0.15);
  const gold = mat(0xffcc33, 0xaa7700, 0.35);
  crown.add(cyl(0.2, 0.22, 0.12, gold, 0, 0, 0, 12));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    crown.add(cone(0.06, 0.16, gold, Math.cos(a) * 0.16, 0.13, Math.sin(a) * 0.16, 6));
    crown.add(ball(0.03, mat(0xff4a6a, 0xff0040, 0.4), Math.cos(a) * 0.16, 0.22, Math.sin(a) * 0.16, 1, 1, 1, 6));
  }
  body.add(crown);
  return { root, body, tail, fins };
}

/** An enemy fish swimming down the corridor (+z): purple grumpy fish or a yellow fast one. */
export function makeEnemyFish(kind = 'fish') {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const c = kind === 'fast' ? 0xffcf2a : 0x8a3ad0;
  const belly = kind === 'fast' ? 0xfff1a8 : 0xc89af0;
  const m = mat(c);
  body.add(ball(0.5, m, 0, 0, 0, 0.75, 0.9, 1.1, 16));
  body.add(ball(0.38, mat(belly), 0, -0.15, 0.1, 0.7, 0.6, 0.95, 12));
  fishEyes(body, 0.2, 0.15, 0.32, 0.13, true);
  // the grumpy mouth with two little teeth
  body.add(box(0.28, 0.06, 0.06, mat(0x2a1030), 0, -0.13, 0.52));
  for (const s of [-1, 1]) body.add(cone(0.035, 0.08, mat(0xffffff), s * 0.07, -0.18, 0.53, 4).rotateX(Math.PI));
  const tail = new THREE.Group();
  tail.position.z = -0.52;
  tail.add(ball(0.3, mat(kind === 'fast' ? 0xff9a1a : 0x6a2aa8), 0, 0, -0.15, 0.14, 1, 0.7, 10));
  body.add(tail);
  body.add(cone(0.18, 0.4, mat(kind === 'fast' ? 0xff9a1a : 0x6a2aa8), 0, 0.5, -0.05, 4).rotateX(-0.4));
  const fins = [];
  for (const s of [-1, 1]) { const f = ball(0.14, m, s * 0.38, -0.1, 0.05, 1, 0.2, 0.8, 8); body.add(f); fins.push(f); }
  return { root, body, tail, fins };
}

export function makeJelly() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const pink = new THREE.MeshLambertMaterial({ color: 0xff8ad8, emissive: 0xc040a0, emissiveIntensity: 0.35, transparent: true, opacity: 0.88 });
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), pink);
  bell.position.y = 0.3;
  body.add(bell);
  body.add(cyl(0.55, 0.5, 0.08, pink, 0, 0.3, 0, 18));
  fishEyes(body, 0.17, 0.5, 0.42, 0.11, true);
  const tentacles = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const t = new THREE.Group();
    t.position.set(Math.cos(a) * 0.32, 0.25, Math.sin(a) * 0.32);
    for (let k = 0; k < 4; k++) t.add(ball(0.06 - k * 0.008, pink, 0, -0.12 - k * 0.14, 0, 1, 1.6, 1, 6));
    body.add(t);
    tentacles.push(t);
  }
  return { root, body, tentacles, tail: null, fins: [] };
}

export function makePuffer() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const y = mat(0xf2d23a);
  body.add(ball(0.78, y, 0, 0, 0, 1, 0.95, 1, 18));
  body.add(ball(0.6, mat(0xfff4c0), 0, -0.25, 0.25, 0.95, 0.7, 0.85, 14));
  for (let i = 0; i < 26; i++) {
    const a = i * 2.39996;
    const zz = 1 - (i + 0.5) / 13;
    if (Math.abs(zz) > 1) continue;
    const r = Math.sqrt(1 - zz * zz);
    const dir = new THREE.Vector3(Math.cos(a) * r, zz, Math.sin(a) * r);
    const sp = cone(0.06, 0.24, mat(0xc8a020), dir.x * 0.8, dir.y * 0.76, dir.z * 0.8, 4);
    sp.lookAt(dir.clone().multiplyScalar(5));
    sp.rotateX(Math.PI / 2);
    body.add(sp);
  }
  fishEyes(body, 0.3, 0.2, 0.6, 0.17, true);
  body.add(ball(0.12, mat(0xe0604a), 0, -0.15, 0.76, 1.2, 0.8, 0.5, 10));
  const tail = new THREE.Group();
  tail.position.z = -0.8;
  tail.add(ball(0.28, mat(0xe0b020), 0, 0, -0.1, 0.14, 1, 0.6, 10));
  body.add(tail);
  return { root, body, tail, fins: [] };
}

export function makeInk() {
  const g = new THREE.Group();
  g.add(ball(0.35, mat(0x2a1a4a, 0x401a80, 0.3), 0, 0, 0, 1, 1, 1, 12));
  g.add(ball(0.1, mat(0x8a6ad8, 0x6040c0, 0.5), 0.12, 0.15, 0.15, 1, 1, 1, 8));
  return g;
}

/** The giant octopus: round purple head, angry brows, big eyes and eight waving tentacles. */
export function makeOctopus() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const purple = mat(0xb04ad8);
  const light = mat(0xe8a8ff);
  body.add(ball(1.7, purple, 0, 1.6, 0, 1, 1.05, 0.95, 22));
  for (let i = 0; i < 9; i++) body.add(ball(0.18 + (i % 3) * 0.06, light, Math.sin(i * 2.1) * 1.3, 2.3 + Math.cos(i * 1.7) * 0.6, -0.4 + Math.cos(i) * 0.8, 1, 1, 0.4, 8));
  for (const s of [-1, 1]) {
    body.add(ball(0.5, mat(0xffffff), s * 0.65, 1.3, 1.25, 1, 1.15, 0.6, 14));
    body.add(ball(0.26, mat(0xffd23a), s * 0.62, 1.25, 1.55, 1, 1, 0.5, 12));
    body.add(ball(0.15, mat(0x1a1010), s * 0.6, 1.22, 1.68, 1, 1.2, 0.5, 10));
    const brow = box(0.8, 0.16, 0.2, mat(0x6a1a8a), s * 0.62, 1.95, 1.4);
    brow.rotation.z = s * 0.4;
    body.add(brow);
  }
  // a big grumpy mouth with teeth
  body.add(box(1.1, 0.24, 0.3, mat(0x4a0a3a), 0, 0.55, 1.45));
  for (let i = 0; i < 4; i++) body.add(cone(0.08, 0.18, mat(0xffffff), -0.4 + i * 0.27, 0.62, 1.58, 4).rotateX(Math.PI));
  const tentacles = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    const t = new THREE.Group();
    t.position.set(Math.cos(a) * 1.25, 0.3, Math.sin(a) * 1.25);
    t.rotation.y = -a + Math.PI / 2;
    const segs = [];
    let parent = t;
    for (let k = 0; k < 6; k++) {
      const seg = new THREE.Group();
      seg.position.z = k === 0 ? 0 : 0.42;
      seg.add(ball(0.32 - k * 0.04, purple, 0, 0, 0.2, 1, 0.8, 1.4, 10));
      seg.add(ball(0.09, light, 0, -0.18, 0.2, 1, 0.5, 1, 6));
      parent.add(seg);
      parent = seg;
      segs.push(seg);
    }
    body.add(t);
    tentacles.push(segs);
  }
  return { root, body, tentacles };
}

/** The spinning shell (a scallop). */
export function makeShell() {
  const g = new THREE.Group();
  const m = mat(0xffb8a0, 0xff6040, 0.3);
  for (let i = 0; i < 7; i++) {
    const r = box(0.12, 0.08, 0.7, i % 2 ? m : mat(0xffe0d0, 0xff8060, 0.3), 0, 0, 0.3);
    const h = new THREE.Group();
    h.rotation.y = -0.9 + i * 0.3;
    h.add(r);
    g.add(h);
  }
  g.add(ball(0.18, mat(0xffd0c0), 0, 0, 0, 1, 0.5, 1, 8));
  return g;
}

// ---- the fortress and the reef -----------------------------------------------------------------------------------

const SAND = 0xf2d6a2;
const BRICK = 0xf2b98a;
const BRICK2 = 0xe8a070;

export function makeTower(r = 1.3, h = 2.4) {
  const g = new THREE.Group();
  for (let i = 0; i < Math.round(h / 0.4); i++) g.add(cyl(r, r * 1.04, 0.38, mat(i % 2 ? BRICK : BRICK2), 0, 0.2 + i * 0.4, 0, 16));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    g.add(box(0.35, 0.35, 0.35, mat(BRICK), Math.cos(a) * r * 0.9, h + 0.15, Math.sin(a) * r * 0.9));
    // shells on top
    if (i % 2 === 0) g.add(ball(0.18, mat(0xffd0e8), Math.cos(a) * r * 0.9, h + 0.4, Math.sin(a) * r * 0.9, 1, 0.5, 1, 8));
  }
  g.add(cyl(r * 0.92, r * 0.92, 0.1, mat(0xe8c890), 0, h - 0.02, 0, 16));
  for (const s of [0, 1]) g.add(ball(0.12, mat(0xff8ab0), Math.cos(s * 2.5) * r, 0.6 + s * 0.8, Math.sin(s * 2.5) * r, 1, 1, 0.6, 8));
  return g;
}

/** The fortress wall across the corridor at z = 0 (from -w/2 to w/2), with gaps-free bricks and shells. */
export function makeWall(w) {
  const g = new THREE.Group();
  const n = Math.round(w / 0.9);
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < n; i++) {
      const off = row % 2 ? 0.45 : 0;
      const x = -w / 2 + (i + 0.5) * (w / n) + off;
      if (x > w / 2) continue;
      g.add(box((w / n) * 0.94, 0.42, 0.8, mat((i + row) % 2 ? BRICK : BRICK2), x, 0.22 + row * 0.44, 0));
    }
  }
  for (let i = 0; i < n; i += 2) g.add(box(0.5, 0.35, 0.82, mat(BRICK), -w / 2 + (i + 0.5) * (w / n), 1.5, 0));
  return g;
}

export function makeCoral(kind, color) {
  const g = new THREE.Group();
  const m = mat(color);
  if (kind === 0) {
    // branching coral
    for (let i = 0; i < 6; i++) {
      const b = cyl(0.08, 0.12, 0.8 + (i % 3) * 0.3, m, Math.cos(i) * 0.25, 0.4, Math.sin(i * 1.7) * 0.25, 6);
      b.rotation.z = Math.cos(i * 2) * 0.5;
      b.rotation.x = Math.sin(i * 2) * 0.5;
      g.add(b);
      g.add(ball(0.12, m, b.position.x + Math.cos(i * 2) * -0.3, 0.85 + (i % 3) * 0.15, b.position.z + Math.sin(i * 2) * 0.3, 1, 1, 1, 6));
    }
  } else if (kind === 1) {
    // brain coral
    g.add(ball(0.55, m, 0, 0.3, 0, 1, 0.6, 1, 12));
  } else if (kind === 2) {
    // tube coral
    for (let i = 0; i < 5; i++) g.add(cyl(0.12, 0.1, 0.5 + i * 0.12, m, Math.cos(i * 1.3) * 0.25, 0.25 + i * 0.06, Math.sin(i * 1.3) * 0.25, 8));
  } else {
    // sea fan
    const fan = new THREE.Mesh(new THREE.CircleGeometry(0.75, 14, 0, Math.PI), new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide }));
    fan.position.y = 0.1;
    g.add(fan);
  }
  return g;
}

export function makeSeaweed(h = 2) {
  const g = new THREE.Group();
  const segs = [];
  let parent = g;
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Group();
    s.position.y = i === 0 ? 0 : h / 5;
    s.add(ball(0.12, mat(i % 2 ? 0x3aa84a : 0x4fc85a), 0, h / 10, 0, 0.8, 2.2, 0.4, 6));
    parent.add(s);
    parent = s;
    segs.push(s);
  }
  return { root: g, segs };
}

/** A sandy sea floor texture with soft ripples (caustics are a second, moving texture). */
export function sandTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#f0d6a0';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) {
    g.fillStyle = `rgba(${200 + (i % 40)},${170 + (i % 30)},${110 + (i % 20)},0.25)`;
    g.fillRect((i * 37) % 256, (i * 91) % 256, 2, 2);
  }
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
  g.strokeStyle = 'rgba(255,255,255,0.5)';
  g.lineWidth = 2;
  // a net of soft wavy cells
  for (let i = 0; i < 26; i++) {
    const x = (i * 97) % 256;
    const y = (i * 61) % 256;
    g.beginPath();
    for (let k = 0; k <= 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      const r = 22 + ((i * k) % 7) * 3;
      const px = x + Math.cos(a) * r;
      const py = y + Math.sin(a) * r;
      if (k === 0) g.moveTo(px, py); else g.quadraticCurveTo(x + Math.cos(a - 0.5) * r * 1.2, y + Math.sin(a - 0.5) * r * 1.2, px, py);
    }
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
