// Models for «متجر الفضاء الذكي», built from shapes in code: the kid astronaut with a headset (as on the owner's card),
// astronaut and alien shoppers, teal hover-baskets, the basket dispenser pad with hazard stripes, basket racks, glowing
// shelf pods with fruit, checkout counters with screens, robot cashiers, star coins, shuttle pads with a little
// shuttle, the hyper checkout, the lavender station deck with teal rails, a big orange planet and stars.
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

const SUIT = 0xf2f6fa;
const TEAL = 0x3ad8c8;

/** A kid in a space suit (facing +z). `back` holds the carried basket stack. */
export function makeAstronaut(suit = SUIT, trim = TEAL, skin = 0xf0c09a, hair = 0x3a2414, headset = true) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const s = mat(suit);
  const tr = mat(trim);
  const legs = [];
  for (const x of [-0.14, 0.14]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.42, 0);
    leg.add(cyl(0.11, 0.12, 0.36, s, 0, -0.18, 0, 10));
    leg.add(ball(0.13, tr, 0, -0.38, 0.04, 1, 0.65, 1.3, 10));
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.28, 0.32, 0.55, s, 0, 0.72, 0, 16));
  body.add(box(0.3, 0.2, 0.06, tr, 0, 0.8, 0.28)); // chest panel
  body.add(ball(0.04, mat(0xff5a5a, 0xff2020, 0.8), -0.07, 0.82, 0.31, 1, 1, 0.5, 8));
  body.add(ball(0.04, mat(0x5aff9a, 0x20ff60, 0.8), 0.07, 0.82, 0.31, 1, 1, 0.5, 8));
  body.add(box(0.5, 0.42, 0.22, s, 0, 0.78, -0.3)); // backpack
  const arms = [];
  for (const sx of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sx * 0.34, 0.92, 0);
    arm.add(cyl(0.09, 0.1, 0.36, s, 0, -0.17, 0, 8));
    arm.add(ball(0.1, tr, 0, -0.37, 0, 1, 1, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  const head = new THREE.Group();
  head.position.y = 1.3;
  head.add(ball(0.3, mat(skin)));
  head.add(ball(0.315, mat(hair), 0, 0.08, -0.06, 1, 0.85, 0.95));
  for (const sx of [-1, 1]) {
    head.add(ball(0.05, mat(0x2a1a10), sx * 0.11, 0.0, 0.27, 1, 1.3, 0.6, 8));
    head.add(ball(0.045, mat(0xff9a9a), sx * 0.18, -0.09, 0.23, 1, 0.6, 0.4, 8));
  }
  head.add(new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 5, 10, Math.PI), mat(0x8a3a2a)).translateY(-0.1).translateZ(0.28).rotateZ(Math.PI));
  head.add(cyl(0.33, 0.35, 0.1, s, 0, -0.27, 0, 16)); // suit collar
  if (headset) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.035, 6, 18, Math.PI), mat(0x2a2c3a));
    head.add(band);
    for (const sx of [-1, 1]) head.add(cyl(0.1, 0.1, 0.08, mat(trim), sx * 0.32, 0, 0, 12).rotateZ(Math.PI / 2));
    const mic = cyl(0.015, 0.015, 0.28, mat(0x2a2c3a), 0.24, -0.1, 0.16, 6);
    mic.rotation.x = Math.PI / 2.4;
    head.add(mic);
  }
  body.add(head);
  const back = new THREE.Group();
  back.position.set(0, 0.55, 0.42);
  body.add(back);
  return { root, body, legs, arms, head, back };
}

/** Alien shoppers: a green one with antennae, a purple one-eyed blob, a pink one with little tentacles. */
export function makeAlien(kind = 'alien') {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const col = kind === 'blob' ? 0xb06ae8 : kind === 'squid' ? 0xff8ab8 : kind === 'alien2' ? 0x5ad8f0 : 0x7ae05a;
  const m = mat(col);
  const legs = [];
  if (kind === 'squid') {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const leg = ball(0.08, m, Math.cos(a) * 0.22, 0.15, Math.sin(a) * 0.22, 1, 2.2, 1, 8);
      body.add(leg);
      legs.push(leg);
    }
  } else {
    for (const x of [-0.14, 0.14]) {
      const leg = new THREE.Group();
      leg.position.set(x, 0.35, 0);
      leg.add(cyl(0.08, 0.1, 0.32, m, 0, -0.16, 0, 8));
      body.add(leg);
      legs.push(leg);
    }
  }
  body.add(ball(0.36, m, 0, 0.72, 0, 1, 1.1, 0.95, 16));
  body.add(ball(0.24, mat(0xffffff), 0, 0.68, 0.2, 1, 1, 0.5, 12)); // belly
  const head = new THREE.Group();
  head.position.y = 1.25;
  head.add(ball(0.32, m, 0, 0, 0, 1.1, 1, 1, 16));
  if (kind === 'blob') {
    head.add(ball(0.15, mat(0xffffff), 0, 0.03, 0.26, 1, 1, 0.6, 12));
    head.add(ball(0.08, mat(0x1a1010), 0, 0.03, 0.33, 1, 1, 0.5, 10));
  } else {
    for (const sx of [-1, 1]) {
      head.add(ball(0.09, mat(0xffffff), sx * 0.12, 0.05, 0.26, 1, 1.2, 0.6, 10));
      head.add(ball(0.05, mat(0x1a1010), sx * 0.12, 0.04, 0.31, 1, 1.2, 0.5, 8));
    }
  }
  head.add(new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.018, 5, 10, Math.PI), mat(0x3a1a3a)).translateY(-0.12).translateZ(0.29).rotateZ(Math.PI));
  if (kind === 'alien' || kind === 'alien2') {
    for (const sx of [-1, 1]) {
      const ant = cyl(0.02, 0.02, 0.35, mat(col), sx * 0.12, 0.42, 0, 6);
      ant.rotation.z = -sx * 0.3;
      head.add(ant);
      head.add(ball(0.07, mat(0xffd23a, 0xffaa00, 0.6), sx * 0.18, 0.6, 0, 1, 1, 1, 8));
    }
  }
  body.add(head);
  const arms = [];
  for (const sx of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sx * 0.36, 0.85, 0);
    arm.add(ball(0.08, m, 0, -0.16, 0, 0.9, 2.2, 0.9, 8));
    body.add(arm);
    arms.push(arm);
  }
  const back = new THREE.Group();
  back.position.set(0, 0.7, 0.4);
  body.add(back);
  return { root, body, legs, arms, head, back };
}

/** A hover-basket: a teal see-through basket with a handle and a glowing underside. */
let _basketGeo;
export function makeBasket(s = 1) {
  const g = new THREE.Group();
  g.add(box(0.62 * s, 0.32 * s, 0.44 * s, new THREE.MeshLambertMaterial({ color: 0x8af0e8, transparent: true, opacity: 0.8 }), 0, 0.16 * s, 0));
  g.add(box(0.66 * s, 0.05 * s, 0.48 * s, mat(0x2ab8b0), 0, 0.33 * s, 0));
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.2 * s, 0.025 * s, 6, 12, Math.PI), mat(0x2ab8b0));
  handle.position.y = 0.35 * s;
  g.add(handle);
  g.add(cyl(0.18 * s, 0.18 * s, 0.03 * s, mat(0x9affff, 0x3affff, 0.9), 0, 0.0, 0, 12));
  void _basketGeo;
  return g;
}

/** The dispenser pad with yellow and navy hazard stripes. */
export function makeDispenser() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#2a2a5a';
  x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#ffc83a';
  for (let i = -128; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 16, 0); x.lineTo(i + 144, 128); x.lineTo(i + 128, 128); x.fill(); }
  const pad = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.12, 2.8), new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(c) }));
  pad.position.y = 0.06;
  g.add(pad);
  g.add(box(0.2, 0.5, 2.8, mat(0xd8d8f0), -1.5, 0.25, 0));
  g.add(box(2.8, 0.5, 0.2, mat(0xd8d8f0), 0, 0.25, -1.5));
  return g;
}

export function makeRack() {
  const g = new THREE.Group();
  const metal = mat(0xc8ccdc);
  for (const sx of [-0.75, 0.75]) g.add(box(0.08, 1.6, 0.08, metal, sx, 0.8, 0));
  for (let k = 0; k < 3; k++) g.add(box(1.6, 0.05, 0.6, mat(0xe8eaf4), 0, 0.2 + k * 0.55, 0));
  g.add(box(1.64, 0.14, 0.12, mat(TEAL, 0x2ab8b0, 0.4), 0, 1.65, 0));
  return g;
}

/** A glowing glass shelf pod with fruit and veg inside. */
export function makeShelf() {
  const g = new THREE.Group();
  g.add(box(1.4, 0.3, 1.0, mat(0xe8eaf4), 0, 0.15, 0));
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.3, 20, 1, false, 0, Math.PI), new THREE.MeshLambertMaterial({ color: 0xb8f4ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
  glass.position.y = 0.95;
  glass.rotation.y = -Math.PI / 2;
  glass.scale.z = 0.7;
  g.add(glass);
  g.add(box(1.4, 0.06, 1.0, mat(0xe8eaf4), 0, 1.62, 0));
  const fruit = [0xff4a4a, 0xffa020, 0x7ae05a, 0xffe04a, 0xb04ae8];
  for (let k = 0; k < 2; k++) {
    g.add(box(1.2, 0.04, 0.8, mat(0xd8dce8), 0, 0.55 + k * 0.5, 0));
    for (let i = 0; i < 5; i++) g.add(ball(0.11, mat(fruit[(i + k) % 5]), -0.45 + i * 0.22, 0.67 + k * 0.5, 0.15 + (i % 2) * 0.12, 1, 1, 1, 8));
  }
  g.add(box(1.42, 0.06, 0.06, mat(0x9affff, 0x3affff, 0.8), 0, 0.31, 0.5));
  return g;
}

export function makeCheckout(hyper = false) {
  const g = new THREE.Group();
  const w = 2.2;
  g.add(box(w, 1.0, 1.0, mat(0xf2f4fa), 0, 0.5, 0));
  g.add(box(w + 0.04, 0.12, 1.04, mat(hyper ? 0xffc83a : TEAL, hyper ? 0xaa7700 : 0x2ab8b0, 0.4), 0, 1.0, 0));
  g.add(box(w * 0.7, 0.06, 0.5, mat(0x2a2c3a), -0.2, 1.07, 0)); // conveyor
  const screen = box(0.6, 0.45, 0.06, mat(0x2a6ae8, 0x2a8aff, 0.7), 0.8, 1.45, 0);
  screen.rotation.y = -0.4;
  g.add(screen);
  g.add(cyl(0.04, 0.04, 0.4, mat(0x9aa0aa), 0.8, 1.2, 0, 6));
  if (hyper) {
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.14, 8, 32, Math.PI), mat(0xffc83a, 0xffaa00, 0.6));
    arch.position.y = 0.2;
    g.add(arch);
  }
  return g;
}

export function makeRobot() {
  const g = new THREE.Group();
  const white = mat(0xf2f6fa);
  g.add(cyl(0.3, 0.38, 0.6, white, 0, 0.4, 0, 16));
  g.add(ball(0.32, white, 0, 0.95, 0, 1.1, 0.9, 1, 16));
  g.add(box(0.46, 0.2, 0.1, mat(0x1a2a4a), 0, 0.98, 0.27));
  for (const sx of [-1, 1]) g.add(ball(0.05, mat(0x5affff, 0x3affff, 1), sx * 0.1, 0.98, 0.33, 1, 1, 0.5, 8));
  g.add(cyl(0.02, 0.02, 0.3, mat(0x9aa0aa), 0, 1.35, 0, 6));
  const light = ball(0.07, mat(0xff5a5a, 0xff2020, 1), 0, 1.52, 0, 1, 1, 1, 8);
  g.add(light);
  g.userData.light = light;
  return g;
}

export function makeCoin() {
  const g = new THREE.Group();
  g.add(cyl(0.22, 0.22, 0.06, mat(0xffc83a, 0xaa7700, 0.4), 0, 0.03, 0, 18));
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.06 : 0.14;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r); else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  const star = new THREE.Mesh(new THREE.ShapeGeometry(s), mat(0xfff0a0, 0xffd040, 0.5));
  star.rotation.x = -Math.PI / 2;
  star.position.y = 0.065;
  g.add(star);
  return g;
}

/** A shuttle pad (a purple circle with an atom and a star) with a small shuttle that lands on it. */
export function makeShuttlePad() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#3a2a9a';
  x.beginPath();
  x.arc(128, 128, 126, 0, Math.PI * 2);
  x.fill();
  x.strokeStyle = '#8a7aff';
  x.lineWidth = 8;
  for (const a of [0, Math.PI / 3, -Math.PI / 3]) { x.save(); x.translate(128, 128); x.rotate(a); x.beginPath(); x.ellipse(0, 0, 90, 34, 0, 0, Math.PI * 2); x.stroke(); x.restore(); }
  x.fillStyle = '#ffc83a';
  x.beginPath();
  for (let i = 0; i < 10; i++) { const r = i % 2 ? 14 : 32; const a = (i / 10) * Math.PI * 2 - Math.PI / 2; x.lineTo(128 + Math.cos(a) * r, 128 + Math.sin(a) * r); }
  x.fill();
  const pad = new THREE.Mesh(new THREE.CircleGeometry(1.6, 40), new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(c) }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.03;
  g.add(pad);
  const shuttle = new THREE.Group();
  shuttle.add(cyl(0.45, 0.6, 1.5, mat(0xf2f6fa), 0, 0, 0, 16).rotateX(Math.PI / 2));
  shuttle.add(cone(0.45, 0.7, mat(TEAL), 0, 0, 1.1, 16).rotateX(Math.PI / 2));
  shuttle.add(box(1.8, 0.06, 0.5, mat(TEAL), 0, -0.1, -0.4));
  shuttle.add(ball(0.18, mat(0x8ad8ff, 0x3a8aff, 0.5), 0, 0.3, 0.5, 1, 0.6, 1.4, 10));
  shuttle.position.y = 0.6;
  g.add(shuttle);
  g.userData.shuttle = shuttle;
  return g;
}

/** The station deck: lavender tiles, a teal glowing rail around it, a sign. */
export function makeDeck(b) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#b4acea';
  x.fillRect(0, 0, 256, 256);
  x.strokeStyle = '#9c94d8';
  x.lineWidth = 4;
  for (let i = 0; i <= 256; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 4.5);
  const w = b.x1 - b.x0 + 1;
  const d = b.z1 - b.z0 + 1;
  g.add(new THREE.Mesh(new THREE.BoxGeometry(w, 0.6, d), [mat(0x8a86c8), mat(0x8a86c8), new THREE.MeshLambertMaterial({ map: tex }), mat(0x6a66a8), mat(0x8a86c8), mat(0x8a86c8)]).translateY(-0.3));
  const rail = mat(TEAL, 0x2ab8b0, 0.5);
  for (const [cx, cz, lw, ld] of [[0, b.z0 - 0.5, w, 0.12], [0, b.z1 + 0.5, w, 0.12], [b.x0 - 0.5, 0, 0.12, d], [b.x1 + 0.5, 0, 0.12, d]]) {
    g.add(box(lw, 0.1, ld, rail, cx, 0.8, cz));
    const n = Math.round(Math.max(lw, ld) / 1.2);
    for (let i = 0; i <= n; i++) {
      const px = lw > ld ? -lw / 2 + (i * lw) / n : cx;
      const pz = lw > ld ? cz : -ld / 2 + (i * ld) / n;
      g.add(cyl(0.04, 0.04, 0.8, mat(0xe8eaf4), lw > ld ? px : cx, 0.4, lw > ld ? cz : pz, 6));
    }
  }
  // big dark-navy round pads with a glowing atom (the station logo of the video)
  for (const [px, pz, r] of [[-5.5, -4.5, 2.2], [5.5, 3.5, 2.4], [-1.5, 5.5, 1.8]]) {
    const pad = new THREE.Mesh(new THREE.CircleGeometry(r, 40), new THREE.MeshBasicMaterial({ map: atomTexture() }));
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(px, 0.012, pz);
    g.add(pad);
  }
  // the dashed walkway lines
  for (let i = 0; i < 16; i++) g.add(box(0.4, 0.02, 0.1, mat(0xffc83a), -4 + i * 0.6, 0.01, -0.5));
  return g;
}

export function makePlanet() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const x = c.getContext('2d');
  const grd = x.createLinearGradient(0, 0, 0, 128);
  grd.addColorStop(0, '#ffb08a');
  grd.addColorStop(0.5, '#ff7a5a');
  grd.addColorStop(1, '#e85a4a');
  x.fillStyle = grd;
  x.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 14; i++) { x.fillStyle = `rgba(255,${180 + (i % 3) * 20},140,0.35)`; x.fillRect(0, (i * 37) % 128, 256, 4 + (i % 4) * 3); }
  const planet = new THREE.Mesh(new THREE.SphereGeometry(30, 40, 28), new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(c), emissive: 0x6a2a1a, emissiveIntensity: 0.3 }));
  g.add(planet);
  const ring = new THREE.Mesh(new THREE.RingGeometry(38, 46, 64), new THREE.MeshBasicMaterial({ color: 0x9affff, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2.4;
  g.add(ring);
  return g;
}

export function makeStars(n) {
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const b = Math.random() * Math.PI;
    const r = 200 + Math.random() * 80;
    pos.set([Math.cos(a) * Math.sin(b) * r, Math.cos(b) * r, Math.sin(a) * Math.sin(b) * r], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: true, fog: false }));
}

let _atom;
function atomTexture() {
  if (_atom) return _atom;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#2a2470';
  x.beginPath(); x.arc(128, 128, 128, 0, Math.PI * 2); x.fill();
  x.strokeStyle = '#4a44a8'; x.lineWidth = 10;
  x.beginPath(); x.arc(128, 128, 112, 0, Math.PI * 2); x.stroke();
  x.strokeStyle = '#8a7aff'; x.lineWidth = 6;
  for (let i = 0; i < 3; i++) { x.save(); x.translate(128, 128); x.rotate((i * Math.PI) / 3); x.beginPath(); x.ellipse(0, 0, 70, 26, 0, 0, Math.PI * 2); x.stroke(); x.restore(); }
  x.fillStyle = '#ffd23a'; x.beginPath(); x.arc(128, 128, 14, 0, Math.PI * 2); x.fill();
  _atom = new THREE.CanvasTexture(c);
  _atom.colorSpace = THREE.SRGBColorSpace;
  return _atom;
}

/** Yellow and black hazard stripes on the floor (under the basket stand, like the video). */
export function makeHazard(w, d) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#1e1e28';
  x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#ffc83a';
  for (let i = -128; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 16, 0); x.lineTo(i + 16 + 128, 128); x.lineTo(i + 128, 128); x.closePath(); x.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(w / 1.2, d / 1.2);
  t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: t }));
  m.rotation.x = -Math.PI / 2;
  return m;
}
