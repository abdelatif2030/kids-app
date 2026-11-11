// Models for «سباق الدراجات النارية», built from shapes in code: sport bikes with animal riders (the fox in a purple
// star helmet on a red bike, as on the owner's card; bear, bunny, raccoon, cat and panda on their own colours), palm
// trees, grandstands with a cheering crowd, the start gantry with five lights, chevron signs, mountains, the sea and
// a lighthouse. Low-poly and bright; Lambert materials keep phones fast.
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

function wheel(r = 0.34, rimColor = 0xd8a830) {
  const g = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.TorusGeometry(r, 0.105, 10, 22), mat(0x16171b));
  tyre.rotation.y = Math.PI / 2;
  g.add(tyre);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r - 0.07, 0.025, 6, 22), mat(rimColor));
  rim.rotation.y = Math.PI / 2;
  g.add(rim);
  for (let i = 0; i < 5; i++) {
    const sp = box(0.035, r * 1.75, 0.035, mat(rimColor));
    sp.rotation.x = (i / 5) * Math.PI;
    g.add(sp);
  }
  g.add(cyl(0.07, 0.07, 0.14, mat(0x9aa0aa), 0, 0, 0, 10).rotateZ(Math.PI / 2));
  const disc = cyl(r * 0.62, r * 0.62, 0.02, mat(0xb8bcc4), 0.08, 0, 0, 18);
  disc.rotation.z = Math.PI / 2;
  g.add(disc);
  return g;
}

/** A sport bike (facing +z) with a rider in racing leathers and a full-face helmet, tucked in. `suit` and `helmet`
 * are the rider's colours; the child is the kid in the red helmet from the owner's card. */
export function makeBike(color = 0xe8342a, suit = 0xe8342a, helmet = 0xe8342a, number = 7) {
  const root = new THREE.Group(); // follows the track
  const lean = new THREE.Group(); // leans into turns (rotation.z)
  root.add(lean);
  const paint = mat(color);
  const white = mat(0xf4f4f4);
  const dark = mat(0x1e2026);
  const metal = mat(0x8a909a);
  const front = wheel(0.34);
  front.position.set(0, 0.45, 0.78);
  const back = wheel(0.35);
  back.position.set(0, 0.46, -0.72);
  lean.add(front, back);
  // frame, engine, swingarm, forks
  lean.add(box(0.3, 0.38, 0.62, dark, 0, 0.6, -0.02));
  const swing = box(0.08, 0.08, 0.7, metal, 0.12, 0.5, -0.4);
  swing.rotation.x = 0.12;
  lean.add(swing);
  for (const x of [-0.09, 0.09]) {
    const fork = cyl(0.03, 0.035, 0.75, mat(0xd8a830), x, 0.78, 0.66, 8);
    fork.rotation.x = 0.42;
    lean.add(fork);
  }
  // bodywork: nose cowl, side fairings, tank, seat, pointed tail
  const nose = ball(0.3, paint, 0, 0.92, 0.58, 0.85, 0.72, 1.35, 16);
  lean.add(nose);
  lean.add(ball(0.12, mat(0x2a2c34, 0x101010, 0.2), 0, 0.88, 0.95, 1.5, 0.6, 0.4, 10)); // air intake
  for (const sx of [-1, 1]) {
    const side = box(0.06, 0.42, 0.85, paint, sx * 0.21, 0.66, 0.22);
    side.rotation.x = -0.18;
    lean.add(side);
    // white race number circle on the side
    const plate = new THREE.Mesh(new THREE.CircleGeometry(0.13, 18), white);
    plate.position.set(sx * 0.245, 0.7, 0.3);
    plate.rotation.y = sx * Math.PI / 2;
    lean.add(plate);
    const stripe = box(0.065, 0.06, 0.8, white, sx * 0.215, 0.48, 0.2);
    lean.add(stripe);
  }
  lean.add(ball(0.27, paint, 0, 1.0, 0.08, 0.95, 0.6, 1.25, 14)); // tank
  lean.add(box(0.26, 0.08, 0.36, dark, 0, 0.98, -0.32)); // seat
  const tail = box(0.24, 0.16, 0.5, paint, 0, 1.0, -0.66);
  tail.rotation.x = -0.22;
  lean.add(tail);
  lean.add(cone(0.12, 0.26, paint, 0, 1.07, -0.98, 4).rotateX(-Math.PI / 2));
  lean.add(box(0.14, 0.04, 0.05, mat(0xff2a2a, 0xff0000, 0.6), 0, 1.03, -0.93)); // tail light
  const screen = box(0.3, 0.26, 0.04, new THREE.MeshLambertMaterial({ color: 0x3a4a5a, transparent: true, opacity: 0.7 }), 0, 1.16, 0.62);
  screen.rotation.x = -0.75;
  lean.add(screen);
  for (const sx of [-1, 1]) lean.add(ball(0.06, mat(0xffffee, 0xffffcc, 0.9), sx * 0.09, 0.95, 0.96, 1.3, 0.8, 0.3, 8)); // headlights
  const exhaust = cyl(0.07, 0.085, 0.5, mat(0xc8ccd4), 0.18, 0.72, -0.72, 10);
  exhaust.rotation.x = Math.PI / 2 - 0.35;
  lean.add(exhaust);
  // nitro flames
  const flames = new THREE.Group();
  flames.position.set(0.18, 0.82, -1.0);
  const f1 = cone(0.1, 0.6, new THREE.MeshBasicMaterial({ color: 0x5ad8ff, transparent: true, opacity: 0.9 }), 0, 0, -0.25, 8);
  f1.rotation.x = -Math.PI / 2;
  const f2 = cone(0.06, 0.4, new THREE.MeshBasicMaterial({ color: 0xffffff }), 0, 0, -0.18, 8);
  f2.rotation.x = -Math.PI / 2;
  flames.add(f1, f2);
  flames.visible = false;
  lean.add(flames);
  // the rider, tucked low over the tank
  const leather = mat(suit);
  const leather2 = mat(0xf4f4f4);
  const rider = new THREE.Group();
  rider.position.set(0, 1.08, -0.18);
  const torso = ball(0.25, leather, 0, 0.2, 0.08, 0.95, 0.8, 1.35, 14);
  torso.rotation.x = 0.55;
  rider.add(torso);
  rider.add(ball(0.17, leather2, 0, 0.32, -0.15, 0.9, 0.7, 1.0, 10)); // aero hump
  for (const sx of [-1, 1]) {
    const upper = cyl(0.075, 0.07, 0.42, sx > 0 ? leather : leather2, sx * 0.2, 0.25, 0.35, 8);
    upper.rotation.x = 1.25;
    rider.add(upper);
    rider.add(ball(0.075, dark, sx * 0.17, 0.12, 0.6, 1, 0.9, 1.2, 8)); // gloves on the clip-ons
    const thigh = cyl(0.09, 0.08, 0.45, leather, sx * 0.22, -0.02, -0.02, 8);
    thigh.rotation.x = -0.9;
    thigh.rotation.z = sx * 0.25;
    rider.add(thigh);
    const shin = cyl(0.075, 0.07, 0.42, leather2, sx * 0.27, -0.2, -0.24, 8);
    shin.rotation.x = 0.8;
    rider.add(shin);
    rider.add(ball(0.08, dark, sx * 0.27, -0.36, -0.36, 1, 0.8, 1.5, 8)); // boots
    rider.add(ball(0.06, mat(0xb8bcc4), sx * 0.31, -0.08, 0.08, 1, 1, 1, 6)); // knee slider
  }
  const head = new THREE.Group();
  head.position.set(0, 0.45, 0.36);
  head.add(ball(0.24, mat(helmet), 0, 0, 0, 1, 1, 1.1, 18)); // full-face helmet
  head.add(ball(0.2, mat(0x14161c, 0x203048, 0.3), 0, 0.0, 0.1, 1.05, 0.55, 1.05, 14)); // dark visor
  head.add(box(0.05, 0.06, 0.4, mat(0xffffff), 0, 0.2, -0.02)); // stripe
  head.add(box(0.22, 0.05, 0.12, mat(helmet), 0, 0.12, -0.24)); // spoiler
  rider.add(head);
  lean.add(rider);
  // a soft shadow
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.9, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(0.5, 1.45, 1);
  shadow.position.y = 0.03;
  root.add(shadow);
  void number;
  return { root, lean, front, back, flames, rider, shadow };
}

/** Clouds: soft white puffs in one instanced draw. */
export function makeClouds(n, cx, cz) {
  const m = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }), n * 4);
  const mtx = new THREE.Matrix4();
  let k = 0;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 380 + (i % 3) * 120;
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    const y = 90 + (i % 4) * 25;
    for (let j = 0; j < 4; j++) {
      const s = 22 + ((i + j) % 3) * 9;
      mtx.compose(new THREE.Vector3(x + j * 22 - 33, y + (j % 2) * 8, z + (j % 3) * 10), new THREE.Quaternion(), new THREE.Vector3(s * 1.4, s * 0.6, s));
      m.setMatrixAt(k++, mtx);
    }
  }
  return m;
}

/** A see-through wire mesh for the catch fences (repeats along the track). */
export function meshTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.strokeStyle = 'rgba(40,44,52,0.85)';
  g.lineWidth = 2;
  for (let i = -64; i < 128; i += 12) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 64, 64); g.stroke();
    g.beginPath(); g.moveTo(i + 64, 0); g.lineTo(i, 64); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function makePalm(s = 1) {
  const g = new THREE.Group();
  const trunkM = mat(0x9a6a3a);
  let y = 0;
  for (let i = 0; i < 7; i++) {
    const seg = cyl(0.2 - i * 0.012, 0.24 - i * 0.012, 0.75, i % 2 ? trunkM : mat(0x8a5a2a), Math.sin(i * 0.3) * 0.25 * s, y + 0.37, 0, 7);
    seg.scale.setScalar(s);
    seg.position.y = (y + 0.37) * s;
    g.add(seg);
    y += 0.72;
  }
  const top = new THREE.Vector3(Math.sin(2) * 0.25 * s, y * s, 0);
  const leaf = mat(0x3aa84a);
  const leaf2 = mat(0x52c056);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const l = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), i % 2 ? leaf : leaf2);
    l.scale.set(0.28 * s, 0.08 * s, 1.5 * s);
    l.position.set(top.x + Math.cos(a) * 1.1 * s, top.y - 0.35 * s, top.z + Math.sin(a) * 1.1 * s);
    l.rotation.y = -a + Math.PI / 2;
    l.rotation.x = 0.35;
    g.add(l);
  }
  g.add(ball(0.22 * s, mat(0x6a4a2a), top.x, top.y - 0.15 * s, top.z, 1, 1, 1, 8)); // coconuts
  return g;
}

/** A grandstand with a roof and a crowd of little coloured spectators (one instanced draw). */
export function makeStand(len = 40) {
  const g = new THREE.Group();
  const rows = 6;
  for (let r = 0; r < rows; r++) g.add(box(len, 0.5, 1.2, mat(r % 2 ? 0xd8dce4 : 0xc4c8d2), 0, 0.25 + r * 0.55, -r * 1.1));
  g.add(box(len, 0.2, 8, mat(0x2a6ad8), 0, rows * 0.55 + 2.8, -rows * 0.55));
  for (let i = 0; i <= 4; i++) g.add(cyl(0.12, 0.12, rows * 0.55 + 2.8, mat(0xb8bcc4), -len / 2 + (i * len) / 4, (rows * 0.55 + 2.8) / 2, -rows * 1.1 + 0.4, 6));
  const per = Math.floor(len / 0.8);
  const n = rows * per;
  const crowd = new THREE.InstancedMesh(new THREE.BoxGeometry(0.42, 0.7, 0.36), new THREE.MeshLambertMaterial({ color: 0xffffff }), n);
  const m = new THREE.Matrix4();
  const cols = [0xff4a4a, 0xffd23a, 0x4a9aff, 0x5ad86a, 0xff8ad8, 0xffffff, 0xff9a2a, 0xa86aff];
  let k = 0;
  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < per; i++) {
      m.makeTranslation(-len / 2 + 0.4 + i * 0.8 + (Math.random() - 0.5) * 0.2, 0.85 + r * 0.55, -r * 1.1);
      crowd.setMatrixAt(k, m);
      crowd.setColorAt(k, new THREE.Color(cols[(i * 7 + r * 3) % cols.length]));
      k++;
    }
  }
  g.add(crowd);
  g.userData.crowd = crowd;
  g.userData.base = [];
  for (let i = 0; i < n; i++) { crowd.getMatrixAt(i, m); g.userData.base.push(new THREE.Vector3().setFromMatrixPosition(m)); }
  return g;
}

/** The start gantry over the road with five lights; returns the light meshes. */
export function makeGantry(width) {
  const g = new THREE.Group();
  for (const s of [-1, 1]) g.add(box(0.6, 6.5, 0.6, mat(0x2a2c34), (s * width) / 2, 3.25, 0));
  g.add(box(width + 0.6, 1.1, 0.8, mat(0xff5a2a), 0, 6.3, 0));
  g.add(box(width * 0.5, 1.0, 0.3, mat(0x1a1a1e), 0, 4.9, 0.3));
  const lights = [];
  for (let i = 0; i < 5; i++) {
    const l = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), new THREE.MeshBasicMaterial({ color: 0x4a1010 }));
    l.position.set(-1.6 + i * 0.8, 4.9, 0.46);
    g.add(l);
    lights.push(l);
  }
  return { root: g, lights };
}

export function makeChevron() {
  const g = new THREE.Group();
  g.add(box(3, 1.4, 0.15, mat(0xffffff), 0, 1.6, 0));
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Shape();
    s.moveTo(-0.25, 0.5); s.lineTo(0.15, 0); s.lineTo(-0.25, -0.5); s.lineTo(0.05, -0.5); s.lineTo(0.45, 0); s.lineTo(0.05, 0.5); s.lineTo(-0.25, 0.5);
    const c = new THREE.Mesh(new THREE.ShapeGeometry(s), mat(0xe8342a));
    c.position.set(-0.85 + i * 0.75, 1.6, 0.09);
    g.add(c);
  }
  for (const x of [-1.2, 1.2]) g.add(cyl(0.06, 0.06, 1.0, mat(0x9aa0aa), x, 0.5, 0, 6));
  return g;
}

export function makeMountain(r, h, color) {
  const g = new THREE.Group();
  g.add(cone(r, h, mat(color), 0, h / 2, 0, 9));
  g.add(cone(r * 0.32, h * 0.3, mat(0xf4f4f0), 0, h * 0.85, 0, 9));
  return g;
}

export function makeLighthouse() {
  const g = new THREE.Group();
  for (let i = 0; i < 6; i++) g.add(cyl(1.6 - i * 0.12, 1.7 - i * 0.12, 2.5, mat(i % 2 ? 0xe8342a : 0xffffff), 0, 1.25 + i * 2.5, 0, 14));
  g.add(cyl(1.0, 1.0, 1.6, mat(0xfff2a0, 0xffd040, 0.6), 0, 15.8, 0, 12));
  g.add(cone(1.3, 1.6, mat(0xe8342a), 0, 17.4, 0, 12));
  return g;
}

/** Asphalt with white edge lines and a dashed centre line (repeats along the road). */
export function roadTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#3d4048';
  g.fillRect(0, 0, 256, 512);
  for (let i = 0; i < 2600; i++) {
    const v = 50 + ((i * 53) % 30);
    g.fillStyle = `rgb(${v},${v + 2},${v + 8})`;
    g.fillRect((i * 97) % 256, (i * 61) % 512, 2, 2);
  }
  g.fillStyle = '#f4f4f4';
  g.fillRect(10, 0, 8, 512);
  g.fillRect(238, 0, 8, 512);
  g.fillRect(124, 0, 8, 240);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
