// Models for «سباق السباحة العجيب», built from shapes in code: the otter in blue goggles and a swim cap (as on the
// owner's card) and other swimmers (penguin, beaver, seal, duck) in caps, inflatable bumper pillars, swinging pool
// noodles, floating walls, rainbow lane ropes, water slides, start platforms, the finish arch and tropical islands.
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

const FUR = {
  otter: { fur: 0x8a5a36, light: 0xd8b088 },
  penguin: { fur: 0x22242e, light: 0xf8f8f8 },
  beaver: { fur: 0x7a4a26, light: 0xc89a6a },
  seal: { fur: 0x8a96a8, light: 0xd8dee8 },
  duck: { fur: 0xffe04a, light: 0xfff4b8 },
};

/** A swimmer lying in the water (facing -z, the way the race goes). Arms paddle, the head turns to breathe. */
export function makeSwimmer(kind = 'otter', cap = 0x2ab8c8, goggles = true) {
  const c = FUR[kind] ?? FUR.otter;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const fur = mat(c.fur);
  const light = mat(c.light);
  body.add(ball(0.42, fur, 0, 0, 0.15, 0.85, 0.6, 1.25, 14)); // body lying flat
  body.add(ball(0.3, light, 0, -0.12, 0.05, 0.75, 0.4, 1.1, 12));
  // swimsuit band
  body.add(cyl(0.37, 0.37, 0.22, mat(kind === 'otter' ? 0x2a6ae8 : cap), 0, 0, 0.32, 14).rotateX(Math.PI / 2));
  const head = new THREE.Group();
  head.position.set(0, 0.15, -0.5);
  head.add(ball(0.32, fur, 0, 0, 0, 1.05, 0.95, 1, 16));
  head.add(ball(0.16, light, 0, -0.08, -0.25, 1.2, 0.8, 0.8, 12)); // muzzle
  head.add(ball(0.06, mat(kind === 'duck' ? 0xff8a1a : 0x2a1a10), 0, -0.02, -0.38, kind === 'duck' ? 2.4 : 1.2, kind === 'duck' ? 0.6 : 0.9, kind === 'duck' ? 1.6 : 0.8, 8));
  // swim cap
  head.add(ball(0.335, mat(cap), 0, 0.08, 0.04, 1.06, 0.8, 1.04, 16));
  if (goggles) {
    for (const s of [-1, 1]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.03, 6, 14), mat(0x1a5ad8));
      ring.position.set(s * 0.13, 0.05, -0.27);
      head.add(ring);
      head.add(ball(0.08, mat(0x8ad8ff, 0x3a8ad8, 0.35), s * 0.13, 0.05, -0.29, 1, 1, 0.5, 10));
    }
    head.add(box(0.5, 0.04, 0.05, mat(0x1a5ad8), 0, 0.05, -0.24));
  } else {
    for (const s of [-1, 1]) head.add(ball(0.05, mat(0x1a1010), s * 0.12, 0.05, -0.28, 1, 1.1, 0.6, 8));
  }
  head.add(new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 5, 10, Math.PI), mat(0x5a2a2a)).translateY(-0.15).translateZ(-0.31).rotateZ(Math.PI));
  if (kind === 'otter' || kind === 'beaver') for (const s of [-1, 1]) head.add(ball(0.07, fur, s * 0.24, 0.18, 0.02, 1, 1, 0.6, 8));
  body.add(head);
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.36, 0.05, -0.15);
    arm.add(ball(0.09, kind === 'penguin' ? fur : fur, 0, 0, -0.25, kind === 'penguin' ? 0.4 : 0.8, 0.6, 3.2, 8));
    body.add(arm);
    arms.push(arm);
  }
  const legs = [];
  for (const s of [-1, 1]) {
    const leg = ball(0.1, kind === 'duck' || kind === 'penguin' ? mat(0xff8a1a) : fur, s * 0.15, -0.02, 0.7, 0.9, 0.4, 1.8, 8);
    body.add(leg);
    legs.push(leg);
  }
  if (kind === 'otter' || kind === 'beaver') {
    const tail = ball(0.12, kind === 'beaver' ? mat(0x4a3020) : fur, 0, 0.02, 0.95, kind === 'beaver' ? 1.8 : 0.8, 0.35, 2.2, 8);
    body.add(tail);
  }
  return { root, body, head, arms, legs };
}

/** The otter standing (for the menu), waving. */
export function makeStandingOtter() {
  const g = new THREE.Group();
  const fur = mat(0x8a5a36);
  g.add(ball(0.45, fur, 0, 0.75, 0, 0.9, 1.15, 0.85, 14));
  g.add(ball(0.32, mat(0xd8b088), 0, 0.68, 0.18, 0.85, 1.1, 0.5, 12));
  g.add(cyl(0.4, 0.4, 0.3, mat(0xe8342a), 0, 0.45, 0, 14)); // swim shorts
  for (const s of [-1, 1]) g.add(ball(0.13, fur, s * 0.2, 0.12, 0.06, 1, 0.7, 1.4, 8));
  const head = makeSwimmer('otter', 0xe8342a).head;
  head.position.set(0, 1.45, 0);
  head.rotation.y = Math.PI;
  g.add(head);
  const wave = new THREE.Group();
  wave.position.set(0.42, 1.0, 0);
  wave.add(ball(0.1, fur, 0, 0.25, 0, 0.8, 2.6, 0.8, 8));
  g.add(wave);
  g.userData.wave = wave;
  return g;
}

export function makeBumper(color) {
  const g = new THREE.Group();
  g.add(cyl(0.85, 0.95, 2.2, mat(color), 0, 0.6, 0, 18));
  g.add(ball(0.85, mat(color), 0, 1.7, 0, 1, 0.5, 1, 18));
  g.add(new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.18, 8, 22), mat(0xffffff)).rotateX(Math.PI / 2).translateZ(0.2));
  return g;
}

/** A swinging pool noodle round a floating hub (the arm points along +x before turning). */
export function makeNoodle(len) {
  const g = new THREE.Group();
  g.add(cyl(0.7, 0.8, 0.5, mat(0xffd23a), 0, 0.15, 0, 16));
  g.add(ball(0.35, mat(0xe8342a), 0, 0.5, 0, 1, 1, 1, 12));
  const arm = new THREE.Group();
  const cols = [0xff4a8a, 0x2ab8c8, 0x8ad83a, 0xffa020];
  for (let i = 0; i < 6; i++) {
    const seg = cyl(0.22, 0.22, len / 6, mat(cols[i % 4]), (len / 6) * (i + 0.5), 0.35, 0, 12);
    seg.rotation.z = Math.PI / 2;
    arm.add(seg);
  }
  g.add(arm);
  g.userData.arm = arm;
  return g;
}

/** An inflatable floating wall across part of the course (along x from x0 to x1). */
export function makeFloatWall(x0, x1) {
  const g = new THREE.Group();
  const w = x1 - x0;
  const cols = [0xe8342a, 0x2a6ae8, 0xffd23a];
  for (let k = 0; k < 3; k++) {
    const tube = cyl(0.3, 0.3, w, mat(cols[k]), (x0 + x1) / 2, 0.25 + k * 0.32, 0, 14);
    tube.rotation.z = Math.PI / 2;
    tube.position.z = (k - 1) * 0.08;
    g.add(tube);
  }
  for (const x of [x0, x1]) g.add(ball(0.42, mat(0xffffff), x, 0.55, 0, 1, 1.4, 1, 12));
  return g;
}

/** Rainbow floats along a line (instanced) for the lane ropes. */
export function makeRope(points) {
  const n = points.length;
  const m = new THREE.InstancedMesh(new THREE.SphereGeometry(0.28, 8, 6), new THREE.MeshLambertMaterial({ color: 0xffffff }), n);
  const cols = [0xe8342a, 0xff9a2a, 0xffd23a, 0xffffff, 0x2ab8c8, 0x2a6ae8];
  const mtx = new THREE.Matrix4();
  points.forEach(([x, z], i) => {
    mtx.compose(new THREE.Vector3(x, 0.15, z), new THREE.Quaternion(), new THREE.Vector3(1, 0.8, 1.3));
    m.setMatrixAt(i, mtx);
    m.setColorAt(i, new THREE.Color(cols[Math.floor(i / 2) % cols.length]));
  });
  return m;
}

/** A twisting water slide coming down beside the course into the water. */
export function makeSlide(len, side) {
  const g = new THREE.Group();
  const tower = box(2.4, 6, 2.4, mat(0x2ab8c8), 0, 3, 0);
  g.add(tower);
  g.add(box(2.8, 0.3, 2.8, mat(0xffd23a), 0, 6.1, 0));
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const f = i / 20;
    pts.push(new THREE.Vector3(-side * Math.sin(f * Math.PI) * 2.2, 6 * (1 - f) + 0.2, -f * len));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.75, 10, false), new THREE.MeshLambertMaterial({ color: 0xff7a2a, side: THREE.DoubleSide })));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.5, 8, false), new THREE.MeshLambertMaterial({ color: 0x8ad8ff, transparent: true, opacity: 0.6 })));
  return g;
}

export function makeFinishArch(width) {
  const g = new THREE.Group();
  const cols = [0xe8342a, 0xffd23a, 0x2ab8c8, 0x8ad83a];
  for (let i = 0; i < 18; i++) {
    const a = (i / 17) * Math.PI;
    g.add(ball(0.7, mat(cols[i % 4]), Math.cos(a) * (width / 2), Math.sin(a) * 5.5, 0, 1, 1, 1, 10));
  }
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 32;
  const x = c.getContext('2d');
  for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) { x.fillStyle = (i + j) % 2 ? '#111' : '#fff'; x.fillRect(i * 16, j * 16, 16, 16); }
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.7, 1.1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), side: THREE.DoubleSide }));
  banner.position.y = 4.4;
  g.add(banner);
  return g;
}

export function makeStartBlock(color) {
  const g = new THREE.Group();
  g.add(box(1.0, 0.6, 1.4, mat(color), 0, 0.2, 0));
  g.add(box(1.04, 0.1, 1.44, mat(0xffffff), 0, 0.52, 0));
  return g;
}

export function makeIsland(r) {
  const g = new THREE.Group();
  g.add(cyl(r, r * 1.15, 1.2, mat(0xf0d8a0), 0, 0.1, 0, 20));
  g.add(cyl(r * 0.7, r * 0.8, 1.4, mat(0x6cc456), 0, 0.3, 0, 18));
  for (let i = 0; i < 3; i++) {
    const a = i * 2.1;
    const palm = new THREE.Group();
    palm.add(cyl(0.18, 0.25, 4, mat(0x9a6a3a), 0, 2, 0, 7));
    for (let k = 0; k < 6; k++) {
      const l = ball(1, mat(k % 2 ? 0x3aa84a : 0x52c056), Math.cos(k) * 1.1, 4, Math.sin(k) * 1.1, 0.3, 0.08, 1.5, 8);
      l.rotation.y = -k + Math.PI / 2;
      palm.add(l);
    }
    palm.position.set(Math.cos(a) * r * 0.4, 0.8, Math.sin(a) * r * 0.4);
    g.add(palm);
  }
  return g;
}

/** Bright pool water with moving light lines. */
export function waterTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#38c8e8';
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(255,255,255,0.55)';
  g.lineWidth = 3;
  for (let i = 0; i < 30; i++) {
    const x = (i * 97) % 256;
    const y = (i * 61) % 256;
    g.beginPath();
    for (let k = 0; k <= 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      const r = 18 + ((i * k) % 7) * 3;
      if (k === 0) g.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); else g.quadraticCurveTo(x + Math.cos(a - 0.5) * r * 1.2, y + Math.sin(a - 0.5) * r * 1.2, x + Math.cos(a) * r, y + Math.sin(a) * r);
    }
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
