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

const FUR = {
  fox: [0xf07a2a, 0xfff4e6], bear: [0xa86a3a, 0xe8c08a], bunny: [0xf6f2f0, 0xffdbe6], raccoon: [0x8f949c, 0xe8e8e8],
  cat: [0xd8d8e8, 0xffffff], panda: [0xffffff, 0xffffff],
};
const HELMET = { fox: 0x7a3ae8, bear: 0x2a5ac8, bunny: 0xff6aa8, raccoon: 0x2aa85a, cat: 0xf2a81a, panda: 0x6a2ac8 };

function wheel(r = 0.36) {
  const g = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.TorusGeometry(r, 0.11, 8, 18), mat(0x1a1a1e));
  tyre.rotation.y = Math.PI / 2;
  g.add(tyre);
  const rim = cyl(r * 0.72, r * 0.72, 0.1, mat(0x9aa0aa), 0, 0, 0, 14);
  rim.rotation.z = Math.PI / 2;
  g.add(rim);
  for (let i = 0; i < 5; i++) {
    const sp = box(0.06, r * 1.3, 0.05, mat(0x3a3a40));
    sp.rotation.x = (i / 5) * Math.PI;
    g.add(sp);
  }
  return g;
}

/** A sport bike (facing +z) with an animal rider tucked in. Returns parts that animate. */
export function makeBike(kind = 'fox', color = 0xe8342a) {
  const root = new THREE.Group(); // follows the track
  const lean = new THREE.Group(); // leans into turns (rotation.z)
  root.add(lean);
  const paint = mat(color);
  const dark = mat(0x22242a);
  const front = wheel();
  front.position.set(0, 0.47, 0.82);
  const back = wheel(0.38);
  back.position.set(0, 0.49, -0.78);
  lean.add(front, back);
  // fairing and tank
  lean.add(box(0.42, 0.42, 1.0, dark, 0, 0.72, 0)); // engine
  const fairing = box(0.5, 0.55, 0.9, paint, 0, 0.92, 0.5);
  fairing.rotation.x = -0.35;
  lean.add(fairing);
  lean.add(ball(0.32, paint, 0, 1.05, 0.15, 0.85, 0.7, 1.3, 12)); // tank
  lean.add(box(0.36, 0.14, 0.7, paint, 0, 1.02, -0.5)); // tail
  lean.add(cone(0.18, 0.4, paint, 0, 1.0, -0.95, 4).rotateX(-Math.PI / 2));
  lean.add(box(0.46, 0.06, 0.06, mat(0xffffff), 0, 1.2, -0.42)); // number stripe
  const screen = box(0.36, 0.3, 0.05, new THREE.MeshLambertMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.6 }), 0, 1.32, 0.78);
  screen.rotation.x = -0.6;
  lean.add(screen);
  lean.add(ball(0.09, mat(0xffffcc, 0xffffaa, 0.8), 0, 1.0, 0.98, 1.4, 1, 0.4, 10)); // headlight
  lean.add(cyl(0.05, 0.05, 0.6, mat(0x9aa0aa), 0, 0.72, 0.62, 6).rotateX(0.5)); // fork
  const exhaust = cyl(0.07, 0.09, 0.55, mat(0xb8bcc4), 0.22, 0.62, -0.7, 8);
  exhaust.rotation.x = Math.PI / 2 - 0.25;
  lean.add(exhaust);
  // nitro flames
  const flames = new THREE.Group();
  flames.position.set(0.22, 0.6, -1.0);
  const f1 = cone(0.1, 0.6, new THREE.MeshBasicMaterial({ color: 0x5ad8ff, transparent: true, opacity: 0.9 }), 0, 0, -0.25, 8);
  f1.rotation.x = -Math.PI / 2;
  const f2 = cone(0.06, 0.4, new THREE.MeshBasicMaterial({ color: 0xffffff }), 0, 0, -0.18, 8);
  f2.rotation.x = -Math.PI / 2;
  flames.add(f1, f2);
  flames.visible = false;
  lean.add(flames);
  // the rider, tucked low
  const fur = FUR[kind] ?? FUR.fox;
  const suit = mat(kind === 'fox' ? 0x7a3ae8 : color);
  const rider = new THREE.Group();
  rider.position.set(0, 1.12, -0.18);
  rider.rotation.x = 0.55;
  rider.add(ball(0.26, suit, 0, 0.22, 0, 1, 1.3, 0.9, 12)); // body
  for (const s of [-1, 1]) {
    const arm = cyl(0.07, 0.07, 0.62, suit, s * 0.22, 0.32, 0.32, 6);
    arm.rotation.x = 1.15;
    rider.add(arm);
    rider.add(ball(0.08, mat(0xffffff), s * 0.24, 0.12, 0.6, 1, 1, 1, 8)); // gloves on the bars
    const leg = cyl(0.08, 0.08, 0.55, suit, s * 0.2, -0.05, -0.12, 6);
    leg.rotation.x = -1.0;
    rider.add(leg);
    rider.add(ball(0.08, mat(0x1a1a1e), s * 0.22, -0.2, 0.15, 1, 0.8, 1.4, 8));
  }
  const head = new THREE.Group();
  head.position.set(0, 0.62, 0.22);
  head.rotation.x = -0.55;
  const helmetCol = HELMET[kind] ?? 0x7a3ae8;
  head.add(ball(0.27, mat(helmetCol), 0, 0, 0, 1, 1, 1.05, 14));
  head.add(box(0.36, 0.12, 0.1, new THREE.MeshLambertMaterial({ color: 0x1a2a3a, transparent: true, opacity: 0.75 }), 0, 0.0, 0.24)); // visor
  // the face peeking out of the open helmet
  head.add(ball(0.17, mat(fur[0]), 0, -0.07, 0.17, 1, 0.85, 0.7, 12));
  head.add(ball(0.08, mat(fur[1]), 0, -0.12, 0.27, 1.2, 0.8, 0.8, 8));
  head.add(ball(0.03, mat(0x1a1010), 0, -0.1, 0.33, 1, 1, 1, 6));
  if (kind === 'fox') {
    // the yellow star on the purple helmet, and the ears through the helmet
    const star = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 0.05 : 0.12;
      const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
      if (i === 0) star.moveTo(Math.cos(a) * r, Math.sin(a) * r); else star.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    for (const s of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.ShapeGeometry(star), mat(0xffd23a, 0xaa8800, 0.3));
      st.position.set(s * 0.272, 0.05, 0);
      st.rotation.y = s * Math.PI / 2;
      head.add(st);
    }
  }
  if (kind === 'bunny') for (const s of [-1, 1]) head.add(ball(0.06, mat(fur[0]), s * 0.1, 0.32, -0.05, 1, 3, 0.6, 8));
  else if (kind === 'fox' || kind === 'cat') for (const s of [-1, 1]) head.add(cone(0.09, 0.2, mat(fur[0]), s * 0.15, 0.3, -0.02, 4));
  else for (const s of [-1, 1]) head.add(ball(0.08, mat(kind === 'panda' ? 0x1a1a1e : fur[0]), s * 0.2, 0.22, 0, 1, 1, 0.6, 8));
  rider.add(head);
  if (kind === 'fox') {
    const tail = ball(0.14, mat(0xf07a2a), 0, 0.05, -0.38, 1, 1, 2.4, 10);
    tail.add(ball(0.08, mat(0xfff4e6), 0, 0, -0.95, 1, 1, 0.5, 8));
    tail.rotation.x = -0.6;
    rider.add(tail);
  }
  lean.add(rider);
  // a soft shadow
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.9, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(0.55, 1.4, 1);
  shadow.position.y = 0.03;
  root.add(shadow);
  return { root, lean, front, back, flames, rider };
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
