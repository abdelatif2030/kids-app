// Every model of «سباق الطريق الساحلي», built from shapes in code: the four garage cars (Striker: a rounded blue
// coupe like the video; Arrow GT: an orange wedge with a spoiler; Nightfall: a dark-blue hypercar with a wing; Volt: a
// green roadster), the traffic (sedans, hatchbacks, white vans, pickups, white box trucks), the road with its lane
// lines, and the scenery of three worlds: palms, sand, sea, green hills, guard rail and street lamps on the coast;
// red mesas, rocks and cacti in the canyon; lit towers and neon strips in the city. Cars face -z (forward).
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}
export function shiny(color) {
  const k = `p${color}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshPhongMaterial({ color, shininess: 90, specular: 0x8899aa }));
  return cache.get(k);
}
export const basic = (color, opts = {}) => new THREE.MeshBasicMaterial({ color, ...opts });
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

/** A side profile (points along z = length, y = height) extruded across the width with soft bevels. */
function profile(points, width, m, bevel = 0.12) {
  const sh = new THREE.Shape();
  sh.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p.length === 4) sh.quadraticCurveTo(p[2], p[3], p[0], p[1]);
    else sh.lineTo(p[0], p[1]);
  }
  sh.closePath();
  const geo = new THREE.ExtrudeGeometry(sh, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 10 });
  geo.translate(0, 0, -(width - bevel * 2) / 2);
  geo.rotateY(-Math.PI / 2); // shape x (length) -> world z: negative x is the front (cars face -z)
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, m);
}

/** Rounds a car shape: sides lean in towards the roof and the nose and tail get narrower (like a real body). */
function round(mesh, hl, top = 1.3, ends = 0.3) {
  const pos = mesh.geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const k = Math.min(1, Math.abs(z) / (hl + 0.2));
    const f = (1 - Math.max(0, y - 0.45) * (0.42 / top)) * (1 - Math.pow(k, 3) * ends);
    pos.setX(i, x * f);
  }
  mesh.geometry.computeVertexNormals();
  return mesh;
}

function wheel(r, w, rim = 0x2a2a30) {
  const g = new THREE.Group();
  const tyre = cyl(r, r, w, mat(0x141418), 0, 0, 0, 18);
  tyre.rotation.z = Math.PI / 2;
  g.add(tyre);
  const hub = cyl(r * 0.62, r * 0.62, w + 0.02, shiny(rim), 0, 0, 0, 10);
  hub.rotation.z = Math.PI / 2;
  g.add(hub);
  for (let i = 0; i < 5; i++) {
    const sp = box(w + 0.04, r * 1.05, 0.06, shiny(0x9aa0aa));
    sp.rotation.x = (i / 5) * Math.PI;
    g.add(sp);
  }
  return g;
}

const STYLES = {
  // [body color, profile, cabin profile, wheel radius, spoiler]
  striker: { color: 0x1f4fd8, len: 4.5, wid: 1.95 },
  arrow: { color: 0xe8661a, len: 4.6, wid: 1.98 },
  nightfall: { color: 0x2433a8, len: 4.7, wid: 2.02 },
  volt: { color: 0x2fc85a, len: 4.4, wid: 1.92 },
};

/** A garage car. Returns { root, body, wheels, tail (tail-light material), flames, brake }. */
export function makeSportsCar(id) {
  const st = STYLES[id] || STYLES.striker;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const paint = shiny(st.color);
  const L = st.len;
  const hl = L / 2;
  let pts;
  let cab;
  if (id === 'arrow') {
    // a sharp wedge
    pts = [[-hl, 0.3], [-hl + 0.15, 0.5], [-hl + 1.3, 0.72], [0.4, 0.92], [hl - 0.2, 0.86], [hl, 0.7], [hl, 0.3], [hl - 0.4, 0.22], [-hl + 0.4, 0.22]];
    cab = [[-0.9, 0.86], [-0.1, 1.24, -0.6, 1.24], [0.9, 0.92, 0.6, 1.2]];
  } else if (id === 'nightfall') {
    pts = [[-hl, 0.3], [-hl + 0.05, 0.62], [-hl + 1.0, 0.68], [-0.2, 0.8], [hl - 0.6, 0.86], [hl, 0.74], [hl, 0.32], [hl - 0.4, 0.22], [-hl + 0.4, 0.22]];
    cab = [[-0.8, 0.78], [0.2, 1.16, -0.5, 1.2], [1.2, 0.86, 0.9, 1.1]];
  } else if (id === 'volt') {
    pts = [[-hl, 0.34], [-hl + 0.1, 0.7], [-hl + 1.3, 0.76], [0, 0.82], [hl - 0.5, 0.86], [hl, 0.7], [hl, 0.34], [hl - 0.4, 0.24], [-hl + 0.4, 0.24]];
    cab = [[-0.6, 0.8], [0.1, 1.12, -0.4, 1.14], [0.9, 0.86, 0.6, 1.08]];
  } else {
    // Striker: a rounded coupe with a long sloping roof (the blue car of the video)
    pts = [[-hl, 0.36], [-hl + 0.06, 0.66, -hl, 0.6], [-hl + 1.1, 0.78, -hl + 0.5, 0.74], [hl - 0.7, 0.9], [hl - 0.05, 0.76, hl - 0.2, 0.9], [hl, 0.36], [hl - 0.4, 0.24], [-hl + 0.4, 0.24]];
    cab = [[-1.0, 0.78], [-0.1, 1.28, -0.7, 1.26], [1.55, 0.88, 1.1, 1.22]];
  }
  const shell = round(profile(pts, st.wid, paint, 0.16), hl, 1.0, 0.3);
  body.add(shell);
  // cabin: tinted glass with a painted roof
  const glass = round(profile(cab, st.wid * 0.86, shiny(0x0e1620), 0.1), hl, 0.9, 0.2);
  body.add(glass);
  const roof = round(profile(cab, st.wid * 0.6, paint, 0.06), hl, 0.9, 0.2);
  roof.position.y = 0.035;
  roof.scale.set(1, 1, 0.8);
  body.add(roof);
  // tail lights: a red strip across the back (glows), headlights at the front
  const tail = new THREE.MeshLambertMaterial({ color: 0xff2a2a, emissive: 0xc01010, emissiveIntensity: 0.9 });
  const back = box(st.wid * 0.7, 0.07, 0.06, tail, 0, 0.64, hl + 0.14);
  body.add(back);
  for (const s of [-1, 1]) body.add(box(0.4, 0.12, 0.06, tail, s * st.wid * 0.3, 0.6, hl + 0.15));
  for (const s of [-1, 1]) {
    const head = box(0.42, 0.08, 0.08, mat(0xe8f6ff, 0xc8e8ff, 0.9), s * st.wid * 0.3, 0.56, -hl - 0.1);
    head.rotation.y = s * 0.2;
    body.add(head);
  }
  body.add(box(st.wid * 0.6, 0.12, 0.08, mat(0x14141a), 0, 0.36, hl + 0.14)); // diffuser
  for (const s of [-1, 1]) { const ex = cyl(0.06, 0.06, 0.14, shiny(0xb8bcc4), s * 0.35, 0.32, hl + 0.2, 8); ex.rotation.x = Math.PI / 2; body.add(ex); }
  if (id === 'arrow' || id === 'nightfall') {
    // a rear wing
    body.add(box(st.wid * 0.92, 0.05, 0.36, mat(0x18181e), 0, 1.06, hl - 0.25));
    for (const s of [-1, 1]) body.add(box(0.06, 0.24, 0.12, mat(0x18181e), s * 0.6, 0.92, hl - 0.25));
  }
  if (id === 'nightfall') for (const s of [-1, 1]) body.add(box(0.03, 0.03, 1.0, mat(0x8ad8ff, 0x8ad8ff, 1), s * st.wid * 0.48, 0.5, -0.4)); // light lines
  // mirrors
  for (const s of [-1, 1]) body.add(box(0.18, 0.1, 0.12, paint, s * (st.wid / 2 + 0.05), 0.92, -0.55));
  // wheels
  const wheels = [];
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const w = wheel(0.36, 0.3);
    w.position.set(x * (st.wid / 2 - 0.08), 0.36, z * (hl - 0.85));
    root.add(w);
    wheels.push(w);
  }
  // nitro flames
  const flames = [];
  for (const s of [-1, 1]) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.8, 10), basic(0x5ac8ff, { transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
    f.rotation.x = -Math.PI / 2;
    f.position.set(s * 0.35, 0.34, hl + 0.45);
    f.visible = false;
    root.add(f);
    flames.push(f);
  }
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(st.wid * 1.15, L * 1.05), basic(0x000000, { transparent: true, opacity: 0.35, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);
  return { root, body, wheels, tail, flames, len: L };
}

// ---- traffic --------------------------------------------------------------------------------------------------------

export const TRAFFIC_COLORS = [0xf2f2f2, 0xc8ccd2, 0x2a6ad8, 0xc8282a, 0x2a2e38, 0xe8e0c8];

/** Traffic: sedan, hatch, van (white), pickup, truck (white box). Faces -z. */
export function makeTrafficCar(kind, colorIndex) {
  const g = new THREE.Group();
  const color = kind === 'van' || kind === 'truck' ? 0xf4f4f2 : TRAFFIC_COLORS[colorIndex % TRAFFIC_COLORS.length];
  const paint = shiny(color);
  const glass = shiny(0x1a2430);
  let len = 4.4;
  let wid = 1.85;
  if (kind === 'truck') {
    len = 7.6;
    wid = 2.4;
    g.add(box(wid, 2.7, 5.4, mat(0xf6f6f4), 0, 1.95, 1.0)); // the white box
    g.add(box(wid * 0.98, 0.1, 5.42, mat(0xc8c8c8), 0, 0.62, 1.0));
    g.add(box(wid * 0.96, 1.9, 1.9, shiny(0xe8e8e8), 0, 1.45, -2.75)); // cab
    g.add(box(wid * 0.9, 0.7, 0.05, glass, 0, 1.95, -3.72));
    g.add(box(wid, 0.5, 0.3, mat(0x2a2a2a), 0, 0.55, -3.7));
  } else if (kind === 'van') {
    len = 5.0;
    wid = 2.0;
    const sh = profile([[-2.5, 0.4], [-2.45, 1.0], [-1.6, 1.6, -2.3, 1.5], [2.45, 2.05, 1.2, 2.1], [2.5, 0.4], [2.2, 0.3], [-2.2, 0.3]], wid, paint, 0.14);
    g.add(sh);
    g.add(box(wid * 0.9, 0.55, 0.9, glass, 0, 1.55, -1.75));
    for (const s of [-1, 1]) g.add(box(0.04, 0.5, 2.0, glass, s * (wid / 2 + 0.01), 1.55, -0.2));
  } else if (kind === 'pickup') {
    len = 5.2;
    wid = 2.0;
    g.add(box(wid, 0.75, len, paint, 0, 0.75, 0));
    g.add(box(wid * 0.96, 0.75, 1.9, paint, 0, 1.45, -0.55));
    g.add(box(wid * 0.9, 0.55, 0.05, glass, 0, 1.5, -1.52));
    g.add(box(wid * 0.9, 0.5, 2.0, mat(0x2a2a2a), 0, 1.05, 1.5)); // the open bed
  } else {
    const hatch = kind === 'hatch';
    len = hatch ? 3.9 : 4.4;
    wid = hatch ? 1.8 : 1.85;
    const hl = len / 2;
    g.add(profile(hatch
      ? [[-hl, 0.35], [-hl + 0.05, 0.75], [-hl + 0.9, 0.85], [hl - 0.15, 0.9], [hl, 0.35], [hl - 0.3, 0.26], [-hl + 0.3, 0.26]]
      : [[-hl, 0.35], [-hl + 0.05, 0.78], [-hl + 1.1, 0.86], [hl - 0.5, 0.88], [hl, 0.78], [hl, 0.35], [hl - 0.3, 0.26], [-hl + 0.3, 0.26]], wid, paint, 0.12));
    g.add(profile(hatch
      ? [[-hl + 1.0, 0.86], [-0.2, 1.42, -hl + 1.3, 1.4], [hl - 0.2, 1.38], [hl - 0.12, 0.9]]
      : [[-0.9, 0.86], [-0.3, 1.38, -0.8, 1.36], [0.9, 1.38], [1.5, 0.88, 1.3, 1.3]], wid * 0.86, glass, 0.08));
    g.add(box(wid * 0.72, 0.06, hatch ? 1.6 : 1.3, paint, 0, 1.42, hatch ? 0.35 : 0.3));
  }
  const tail = mat(0xe8302a, 0xa01010, 0.6);
  const hl = len / 2;
  for (const s of [-1, 1]) g.add(box(0.36, 0.16, 0.05, tail, s * (wid / 2 - 0.3), kind === 'truck' ? 0.8 : 0.72, hl + 0.01));
  // blinkers (shown when the car changes lane)
  const blinkMat = new THREE.MeshBasicMaterial({ color: 0xffb21a });
  const blinkers = [-1, 1].map((s) => { const b = box(0.14, 0.14, 0.06, blinkMat, s * (wid / 2 - 0.05), kind === 'truck' ? 0.8 : 0.72, hl + 0.02); b.visible = false; g.add(b); return b; });
  const wheels = [];
  const wz = kind === 'truck' ? [[-2.9], [-0.2], [2.6]] : [[-(hl - 0.85)], [hl - 0.85]];
  for (const [z] of wz) for (const s of [-1, 1]) { const w = wheel(kind === 'truck' ? 0.48 : 0.34, 0.28, 0x8a8e96); w.position.set(s * (wid / 2 - 0.1), kind === 'truck' ? 0.48 : 0.34, z); g.add(w); wheels.push(w); }
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(wid * 1.1, len * 1.05), basic(0x000000, { transparent: true, opacity: 0.3, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);
  return { root: g, wheels, blinkers };
}

// ---- road and scenery ----------------------------------------------------------------------------------------------

/** Asphalt with four lanes: dashed white lines between lanes, solid lines at the edges. One tile = 24 m. */
export function roadTexture(world) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = world === 'neon' ? '#2c2c34' : world === 'canyon' ? '#55504c' : '#4a4c52';
  g.fillRect(0, 0, 512, 512);
  // grain
  for (let i = 0; i < 4000; i++) {
    const v = Math.random() * 30 - 15;
    g.fillStyle = `rgba(${128 + v},${128 + v},${128 + v},0.08)`;
    g.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
  }
  // tyre tracks (darker) in each lane
  for (let l = 0; l < 4; l++) for (const o of [-0.22, 0.22]) { g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(((l + 0.5 + o) / 4) * 448 + 32 - 8, 0, 16, 512); }
  const X = (k) => 32 + (k / 4) * 448;
  g.fillStyle = '#f2f2ee';
  g.fillRect(X(0) - 5, 0, 8, 512);
  g.fillRect(X(4) - 3, 0, 8, 512);
  for (const k of [1, 2, 3]) for (let y = 0; y < 512; y += 128) g.fillRect(X(k) - 4, y + 10, 8, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function makePalm(h = 6) {
  const g = new THREE.Group();
  const trunk = mat(0x8a6a48);
  let x = 0;
  for (let i = 0; i < 6; i++) {
    const seg = cyl(0.16 - i * 0.012, 0.2 - i * 0.012, h / 6, trunk, x, (i + 0.5) * (h / 6), 0, 7);
    seg.rotation.z = -0.06;
    g.add(seg);
    x += 0.08;
  }
  const leaf = mat(0x3a9a3a);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const l = box(0.5, 0.05, 2.6, leaf, x + Math.sin(a) * 1.1, h + 0.1, Math.cos(a) * 1.1);
    l.rotation.y = a;
    l.rotation.x = 0.35;
    l.rotateX(0);
    g.add(l);
  }
  g.add(ball(0.22, mat(0x6a4a2a), x, h - 0.1, 0));
  return g;
}

export function makeLamp(side) {
  const g = new THREE.Group();
  const grey = mat(0x5a5e66);
  g.add(cyl(0.09, 0.12, 8, grey, 0, 4, 0, 8));
  const arm = box(2.6, 0.1, 0.1, grey, -side * 1.3, 8, 0);
  g.add(arm);
  g.add(box(0.7, 0.14, 0.3, grey, -side * 2.5, 7.95, 0));
  g.add(box(0.6, 0.04, 0.24, mat(0xfff4d0, 0xfff0c0, 0.8), -side * 2.5, 7.86, 0));
  return g;
}

export function makeRailSegment(len) {
  const g = new THREE.Group();
  const m = shiny(0xc8ccd4);
  g.add(box(0.08, 0.32, len, m, 0, 0.62, 0));
  for (let z = -len / 2 + 1; z < len / 2; z += 4) g.add(box(0.12, 0.7, 0.12, mat(0x8a8e96), 0.08, 0.35, z));
  return g;
}

export function makeHill(r, color) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat(color));
  m.scale.set(1, 0.55, 1.3);
  return m;
}

export function makeBush(color = 0x3a8a3a) {
  const g = new THREE.Group();
  g.add(ball(0.7, mat(color), 0, 0.4, 0, 1.2, 0.8, 1));
  g.add(ball(0.5, mat(color), 0.6, 0.3, 0.2));
  return g;
}

export function makeMesa(w, h, d) {
  const g = new THREE.Group();
  const cols = [0xc8603a, 0xb8502e, 0xd8784a];
  let y = 0;
  for (let i = 0; i < 4; i++) {
    const hh = h / 4;
    g.add(box(w * (1 - i * 0.05), hh, d * (1 - i * 0.05), mat(cols[i % 3]), 0, y + hh / 2, 0));
    y += hh;
  }
  return g;
}

export function makeCactus() {
  const g = new THREE.Group();
  const m = mat(0x4a8a3a);
  g.add(cyl(0.22, 0.25, 2.6, m, 0, 1.3, 0, 8));
  g.add(cyl(0.15, 0.15, 0.9, m, 0.45, 1.4, 0, 8));
  g.add(cyl(0.15, 0.15, 0.8, m, -0.45, 1.7, 0, 8));
  g.add(box(0.5, 0.14, 0.14, m, 0.25, 1.0, 0));
  g.add(box(0.5, 0.14, 0.14, m, -0.25, 1.3, 0));
  return g;
}

function windowTexture(lit) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#1a1830';
  g.fillRect(0, 0, 64, 128);
  for (let y = 4; y < 128; y += 12) for (let x = 4; x < 64; x += 12) {
    g.fillStyle = Math.random() < (lit ? 0.55 : 0.2) ? ['#ffe08a', '#8ae8ff', '#ff8ad8'][Math.floor(Math.random() * 3)] : '#2a2848';
    g.fillRect(x, y, 7, 8);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let _win;
export function makeTower(w, h, d, neonColor) {
  if (!_win) _win = windowTexture(true);
  const t = _win.clone();
  t.needsUpdate = true;
  t.repeat.set(w / 4, h / 8);
  const g = new THREE.Group();
  const m = new THREE.MeshBasicMaterial({ map: t });
  const tw = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  tw.position.y = h / 2;
  g.add(tw);
  g.add(box(w + 0.1, 0.25, d + 0.1, basic(neonColor), 0, h * 0.62, 0));
  g.add(box(w + 0.1, 0.25, d + 0.1, basic(neonColor), 0, h, 0));
  return g;
}

export function skyTexture(top, bottom) {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, top);
  grd.addColorStop(1, bottom);
  g.fillStyle = grd;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function coinMesh(n) {
  const geo = new THREE.CylinderGeometry(0.45, 0.45, 0.1, 18);
  geo.rotateZ(Math.PI / 2);
  const m = new THREE.InstancedMesh(geo, new THREE.MeshPhongMaterial({ color: 0xffc21a, emissive: 0x7a5000, shininess: 80 }), n);
  m.frustumCulled = false;
  m.count = 0;
  return m;
}
