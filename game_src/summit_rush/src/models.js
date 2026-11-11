// Every model of «سباق القمة», built from shapes in code (no files): the four runners in puffer jackets (the child in
// red with dark shoulders; a girl in teal with a white beanie; a bearded man in a mustard jacket; a girl in purple with
// a lilac beanie), the rolling boulders, snowballs and logs with snow on top, the red warning ladders, gold crystals,
// blue ice boost pads with chevrons, the tailwind and shield orbs, snowy pines, rocks, yellow pennant flags, the
// summit arch, far mountains and the snow-ground textures with ski tracks and footprints.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, opts = {}) {
  const k = `${color}|${JSON.stringify(opts)}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0, ...opts }));
  return cache.get(k);
}
export function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  o.castShadow = true;
  return o;
}
export function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 16) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  o.castShadow = true;
  return o;
}
export function capsule(r, len, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 6, 12), m);
  o.position.set(x, y, z);
  o.castShadow = true;
  return o;
}

/** The four racers, as in the owner's video. */
export const LOOKS = [
  { jacket: 0xd23a2a, shoulder: 0x3a3e48, pants: 0x22242c, skin: 0xe8b894, hair: 0x2a1c14, hat: null, beard: false, girl: false, card: ['#e85a3a', '#a8321e'] },
  { jacket: 0x1fa89a, shoulder: 0x167a70, pants: 0xeceef4, skin: 0xf0c8a8, hair: 0x5a3a22, hat: 0xf4f4f8, beard: false, girl: true, card: ['#2ab8a8', '#167a70'] },
  { jacket: 0xd8a02a, shoulder: 0xb07a14, pants: 0x3a3428, skin: 0xd8a47a, hair: 0x6a4424, hat: 0x5a3a24, beard: true, girl: false, card: ['#e8b83a', '#a87a14'] },
  { jacket: 0x7a4ad8, shoulder: 0x5a32a8, pants: 0x2a2440, skin: 0xf0c8a8, hair: 0x3a2214, hat: 0xc8a8f0, beard: false, girl: true, card: ['#8a5ae8', '#5a32a8'] },
];

/** A runner (about 1.75 m). Returns the parts the animation needs. */
export function makeRunner(look) {
  const root = new THREE.Group();
  const body = new THREE.Group(); // pivots at the hips for the wipeout fall
  body.position.y = 0.95;
  root.add(body);
  const jacket = mat(look.jacket, { roughness: 0.55 });
  const shoulder = mat(look.shoulder, { roughness: 0.6 });
  const pants = mat(look.pants, { roughness: 0.8 });
  const skin = mat(look.skin, { roughness: 0.7 });
  const hair = mat(look.hair, { roughness: 0.9 });
  const boot = mat(0x2a2a30, { roughness: 0.6 });
  const glove = mat(0x26262c, { roughness: 0.7 });
  // legs: hip -> knee -> boot
  const legs = [];
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(s * 0.12, 0, 0);
    hip.add(capsule(0.09, 0.32, pants, 0, -0.22, 0));
    const knee = new THREE.Group();
    knee.position.set(0, -0.44, 0);
    knee.add(capsule(0.08, 0.3, pants, 0, -0.2, 0));
    knee.add(box(0.15, 0.13, 0.28, boot, 0, -0.44, 0.05));
    knee.add(box(0.16, 0.035, 0.3, mat(0xd8dae0), 0, -0.51, 0.05));
    hip.add(knee);
    body.add(hip);
    legs.push({ hip, knee });
  }
  // torso: a puffer jacket with quilted bands and darker shoulders
  const torso = new THREE.Group();
  torso.position.y = 0.05;
  body.add(torso);
  const chest = capsule(0.22, 0.34, jacket, 0, 0.3, 0);
  chest.scale.set(1.05, 1, 0.78);
  torso.add(chest);
  for (const y of [0.16, 0.32]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.022, 6, 22), jacket);
    band.rotation.x = Math.PI / 2;
    band.scale.set(1.08, 0.82, 1);
    band.position.y = y;
    torso.add(band);
  }
  const yoke = capsule(0.2, 0.12, shoulder, 0, 0.5, 0);
  yoke.scale.set(1.15, 0.8, 0.82);
  torso.add(yoke);
  torso.add(box(0.025, 0.42, 0.02, mat(0x18181c), 0, 0.3, 0.175)); // zip
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 0.12, 14), shoulder);
  collar.position.y = 0.66;
  torso.add(collar);
  // head
  const head = new THREE.Group();
  head.position.set(0, 0.82, 0.01);
  torso.add(head);
  head.add(ball(0.13, skin, 0, 0, 0, 0.92, 1.05, 0.98));
  head.add(ball(0.135, hair, 0, 0.045, -0.02, 0.97, 0.9, 1)); // hair cap
  for (const s of [-1, 1]) {
    head.add(ball(0.022, mat(0x1a1410), s * 0.045, 0.02, 0.115));
    head.add(ball(0.03, skin, s * 0.125, 0, 0, 0.5, 1, 1)); // ears
  }
  head.add(ball(0.025, skin, 0, -0.02, 0.13, 1, 1, 0.9)); // nose
  if (look.beard) head.add(ball(0.12, hair, 0, -0.07, 0.03, 0.95, 0.75, 0.95));
  if (look.girl) {
    head.add(ball(0.12, hair, 0, -0.04, -0.07, 1.05, 1.25, 0.8)); // hair down the back
    const tail = ball(0.07, hair, 0, -0.02, -0.17, 0.8, 1.6, 0.8);
    tail.rotation.x = 0.4;
    head.add(tail);
  }
  if (look.hat) {
    const hat = ball(0.142, mat(look.hat, { roughness: 0.95 }), 0, 0.06, -0.01, 1, 0.82, 1.02);
    head.add(hat);
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.03, 8, 22), mat(look.hat, { roughness: 0.95 }));
    cuff.rotation.x = Math.PI / 2 - 0.1;
    cuff.position.y = 0.035;
    head.add(cuff);
  }
  // arms: shoulder -> elbow -> glove
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(s * 0.25, 0.55, 0);
    sh.add(capsule(0.075, 0.2, jacket, 0, -0.15, 0));
    const el = new THREE.Group();
    el.position.set(0, -0.3, 0);
    el.add(capsule(0.068, 0.18, jacket, 0, -0.13, 0));
    el.add(ball(0.06, glove, 0, -0.29, 0));
    sh.add(el);
    sh.rotation.z = s * 0.12;
    torso.add(sh);
    arms.push({ sh, el });
  }
  // soft shadow
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.42, 20), new THREE.MeshBasicMaterial({ color: 0x3a3a6a, transparent: true, opacity: 0.25, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);
  return { root, body, torso, head, legs, arms, shadow };
}

/** Running cycle (phase in radians); [k] 0..1 how much of it (0 = standing). */
export function poseRun(r, phase, k = 1) {
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  r.legs[0].hip.rotation.x = s * 0.9 * k;
  r.legs[1].hip.rotation.x = -s * 0.9 * k;
  r.legs[0].knee.rotation.x = Math.max(0, -c) * 1.3 * k + 0.1;
  r.legs[1].knee.rotation.x = Math.max(0, c) * 1.3 * k + 0.1;
  r.arms[0].sh.rotation.x = -s * 0.9 * k;
  r.arms[1].sh.rotation.x = s * 0.9 * k;
  r.arms[0].el.rotation.x = -1.2 * k - 0.2;
  r.arms[1].el.rotation.x = -1.2 * k - 0.2;
  r.torso.rotation.x = 0.18 * k; // leaning into the climb
  r.body.position.y = 0.95 + Math.abs(c) * 0.07 * k;
  r.body.rotation.x = 0;
  r.body.rotation.z = 0;
}

/** Lying on the back after a wipeout (f 0..1 falling), arms and legs out like the video. */
export function poseDown(r, f) {
  r.body.rotation.x = -Math.PI / 2 * Math.min(1, f * 1.6);
  r.body.position.y = 0.95 - 0.72 * Math.min(1, f * 1.6);
  r.legs[0].hip.rotation.x = -0.3;
  r.legs[1].hip.rotation.x = 0.4;
  r.legs[0].knee.rotation.x = 0.6;
  r.legs[1].knee.rotation.x = 0.2;
  r.arms[0].sh.rotation.x = -2.2;
  r.arms[1].sh.rotation.x = -1.6;
  r.arms[0].el.rotation.x = -0.3;
  r.arms[1].el.rotation.x = -0.6;
  r.torso.rotation.x = 0;
}

// ---- rolling things ---------------------------------------------------------------------------------------------------

function lumpy(geo, amount, seed) {
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = Math.sin(v.x * 7 + seed) * Math.sin(v.y * 6 + seed * 2) * Math.sin(v.z * 8 + seed * 3);
    v.multiplyScalar(1 + n * amount);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export function makeBoulder(r, seed = 1) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r, 2), 0.12, seed), mat(0x4a4f5c, { roughness: 0.95, flatShading: true }));
  m.castShadow = true;
  g.add(m);
  // a few frosty flecks
  for (let i = 0; i < 6; i++) {
    const a = i * 1.7 + seed;
    g.add(ball(r * 0.18, mat(0xdfe6f2), Math.cos(a) * r * 0.85, Math.sin(a * 1.3) * r * 0.6, Math.sin(a) * r * 0.85, 1, 0.5, 1, 8));
  }
  return { root: g, spin: m };
}

export function makeSnowball(r, seed = 2) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r, 3), 0.06, seed), mat(0xe6ecf8, { roughness: 1 }));
  m.castShadow = true;
  g.add(m);
  return { root: g, spin: m };
}

export function makeLog(half, r) {
  const g = new THREE.Group();
  const spin = new THREE.Group();
  g.add(spin);
  const bark = new THREE.Mesh(new THREE.CylinderGeometry(r, r, half * 2, 18, 1, true), new THREE.MeshStandardMaterial({ map: barkTexture(), roughness: 0.95 }));
  bark.rotation.z = Math.PI / 2;
  bark.castShadow = true;
  spin.add(bark);
  for (const s of [-1, 1]) {
    const end = new THREE.Mesh(new THREE.CircleGeometry(r, 18), new THREE.MeshStandardMaterial({ map: ringsTexture(), roughness: 0.9 }));
    end.rotation.y = s * Math.PI / 2;
    end.position.x = s * half;
    spin.add(end);
  }
  // snow lying on top: a few white patches that roll with it
  for (let i = 0; i < 5; i++) {
    const p = ball(r * 0.5, mat(0xf2f6fc, { roughness: 1 }), -half * 0.75 + i * half * 0.38, r * 0.82, (i % 2 ? 1 : -1) * r * 0.2, 1.4, 0.35, 0.9, 10);
    spin.add(p);
  }
  return { root: g, spin, axis: 'x' };
}

/** The red warning ladder painted on the snow along the path of a rolling thing (unit length, scaled in z). */
export function makeLadder(width) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(width, 1), new THREE.MeshBasicMaterial({ map: ladderTexture(), transparent: true, opacity: 0.85, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  return m;
}

// ---- pick-ups ---------------------------------------------------------------------------------------------------------

export function makeCrystal() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), mat(0xffc21a, { emissive: 0xc87a00, emissiveIntensity: 0.55, roughness: 0.25, metalness: 0.3, flatShading: true }));
  m.scale.set(0.8, 1.35, 0.5);
  g.add(m);
  return g;
}

export function makePad() {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.2), new THREE.MeshBasicMaterial({ map: padTexture(), transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  return m;
}

export function makeOrb(kind) {
  const g = new THREE.Group();
  const col = kind === 'tailwind' ? 0x5ad8ff : 0xf0f6ff;
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.26, 20, 14), new THREE.MeshBasicMaterial({ color: col }));
  const halo = new THREE.Mesh(new THREE.SphereGeometry(0.46, 20, 14), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.28, depthWrite: false }));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.03, 8, 30), new THREE.MeshBasicMaterial({ color: kind === 'tailwind' ? 0xbff0ff : 0x9ac8ff }));
  g.add(core, halo, ring);
  g.userData = { halo, ring };
  return g;
}

export function makeShieldBubble() {
  const m = new THREE.Mesh(new THREE.SphereGeometry(1.05, 24, 16), new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.32, depthWrite: false }));
  m.position.y = 0.95;
  return m;
}

// ---- scenery ----------------------------------------------------------------------------------------------------------

export function makePine(s = 1) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.16 * s, 0.7 * s, 8), mat(0x5a3a24));
  trunk.position.y = 0.35 * s;
  g.add(trunk);
  const green = mat(0x2f5a4a, { roughness: 0.9, flatShading: true });
  const snow = mat(0xf0f4fc, { roughness: 1, flatShading: true });
  for (let i = 0; i < 3; i++) {
    const r = (1.2 - i * 0.3) * s;
    const c = new THREE.Mesh(new THREE.ConeGeometry(r, 1.3 * s, 8), green);
    c.position.y = (0.95 + i * 0.75) * s;
    c.castShadow = true;
    g.add(c);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.72, 0.5 * s, 8), snow);
    cap.position.y = (1.38 + i * 0.75) * s;
    g.add(cap);
  }
  return g;
}

export function makeRock(s = 1, seed = 1) {
  const m = new THREE.Mesh(lumpy(new THREE.DodecahedronGeometry(s, 1), 0.15, seed), mat(0x5a5e6a, { roughness: 1, flatShading: true }));
  m.scale.y = 0.6;
  m.castShadow = true;
  const g = new THREE.Group();
  g.add(m);
  g.add(ball(s * 0.7, mat(0xeef2fa), 0, s * 0.45, 0, 1.1, 0.3, 1.1, 10));
  return g;
}

export function makeFlag(color = 0xe8b02a) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2, 6), mat(0x4a4a52));
  pole.position.y = 1;
  g.add(pole);
  const sh = new THREE.Shape();
  sh.moveTo(0, 0);
  sh.lineTo(0.7, -0.2);
  sh.lineTo(0, -0.42);
  sh.closePath();
  const flag = new THREE.Mesh(new THREE.ShapeGeometry(sh), new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, roughness: 0.7 }));
  flag.position.y = 1.95;
  g.add(flag);
  g.userData.flag = flag;
  return g;
}

export function makeArch(width) {
  const g = new THREE.Group();
  const red = mat(0xe8402a, { roughness: 0.5 });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 4.4, 12), red);
    p.position.set(s * width / 2, 2.2, 0);
    g.add(p);
  }
  const banner = new THREE.Mesh(new THREE.BoxGeometry(width + 0.6, 1, 0.2), new THREE.MeshStandardMaterial({ map: bannerTexture(), roughness: 0.6 }));
  banner.position.y = 4.2;
  g.add(banner);
  return g;
}

export function makeMountain(r, h, seed) {
  const g = new THREE.Group();
  const geo = lumpy(new THREE.ConeGeometry(r, h, 9, 3), 0.05, seed);
  const m = new THREE.Mesh(geo, mat(0x9aa4c4, { roughness: 1, flatShading: true }));
  m.position.y = h / 2;
  g.add(m);
  const cap = new THREE.Mesh(lumpy(new THREE.ConeGeometry(r * 0.45, h * 0.45, 9, 2), 0.05, seed + 1), mat(0xf4f6fc, { roughness: 1, flatShading: true }));
  cap.position.y = h * 0.78;
  g.add(cap);
  return g;
}

// ---- textures ---------------------------------------------------------------------------------------------------------

function tex(c, repeat) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

/** The trampled snow of the run: lavender-white, long ski/foot tracks and round footprints (as in the video). */
export function snowTexture() {
  const c = canvas(512, 512);
  const g = c.getContext('2d');
  g.fillStyle = '#e4e6f4';
  g.fillRect(0, 0, 512, 512);
  let seed = 9;
  const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  // soft blue shading blobs
  for (let i = 0; i < 40; i++) {
    const x = r() * 512, y = r() * 512, rad = 30 + r() * 80;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, 'rgba(170,176,214,0.25)');
    gr.addColorStop(1, 'rgba(170,176,214,0)');
    g.fillStyle = gr;
    g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  // long tracks running up the slope
  for (const x of [52, 150, 256, 362, 460]) {
    g.fillStyle = 'rgba(150,156,200,0.35)';
    g.fillRect(x - 9, 0, 18, 512);
    g.fillStyle = 'rgba(255,255,255,0.35)';
    g.fillRect(x + 9, 0, 3, 512);
  }
  // footprints (round dimples)
  for (let i = 0; i < 160; i++) {
    const x = r() * 512, y = r() * 512, rad = 6 + r() * 9;
    g.fillStyle = 'rgba(150,154,198,0.45)';
    g.beginPath();
    g.ellipse(x, y, rad, rad * 0.8, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.5)';
    g.beginPath();
    g.ellipse(x + rad * 0.25, y + rad * 0.3, rad * 0.6, rad * 0.35, 0, 0, Math.PI * 2);
    g.fill();
  }
  return tex(c, [1, 6]);
}

export function bankTexture() {
  const c = canvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#eef0f8';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 60; i++) {
    g.fillStyle = `rgba(160,166,210,${0.12 + Math.random() * 0.12})`;
    g.beginPath();
    g.ellipse(Math.random() * 256, Math.random() * 256, 10 + Math.random() * 30, 6 + Math.random() * 14, Math.random(), 0, Math.PI * 2);
    g.fill();
  }
  return tex(c, [2, 8]);
}

function ladderTexture() {
  const c = canvas(128, 512);
  const g = c.getContext('2d');
  g.strokeStyle = 'rgba(232,70,70,0.9)';
  g.lineWidth = 8;
  g.strokeRect(10, 0, 108, 512);
  g.lineWidth = 6;
  for (let y = 12; y < 512; y += 26) { g.beginPath(); g.moveTo(10, y); g.lineTo(118, y); g.stroke(); }
  g.fillStyle = 'rgba(232,90,90,0.18)';
  g.fillRect(10, 0, 108, 512);
  const t = tex(c);
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

function padTexture() {
  const c = canvas(256, 320);
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(90,150,200,0.55)';
  g.strokeStyle = 'rgba(150,230,255,0.95)';
  g.lineWidth = 10;
  g.beginPath();
  g.roundRect(8, 8, 240, 304, 18);
  g.fill();
  g.stroke();
  g.strokeStyle = 'rgba(200,245,255,0.95)';
  g.lineWidth = 16;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  for (const y of [80, 170]) { g.beginPath(); g.moveTo(52, y + 60); g.lineTo(128, y); g.lineTo(204, y + 60); g.stroke(); }
  return tex(c);
}

function barkTexture() {
  const c = canvas(256, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#6a4228';
  g.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 70; i++) {
    g.strokeStyle = `rgba(${40 + Math.random() * 30},${24 + Math.random() * 16},14,0.7)`;
    g.lineWidth = 2 + Math.random() * 3;
    const y = Math.random() * 128;
    g.beginPath();
    g.moveTo(Math.random() * 256, y);
    g.lineTo(Math.random() * 256, y + (Math.random() - 0.5) * 8);
    g.stroke();
  }
  return tex(c);
}

function ringsTexture() {
  const c = canvas(128, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#c8a070';
  g.fillRect(0, 0, 128, 128);
  for (let r = 6; r < 64; r += 7) { g.strokeStyle = 'rgba(140,96,56,0.6)'; g.lineWidth = 2; g.beginPath(); g.arc(64, 64, r, 0, Math.PI * 2); g.stroke(); }
  g.strokeStyle = '#6a4228';
  g.lineWidth = 8;
  g.beginPath();
  g.arc(64, 64, 60, 0, Math.PI * 2);
  g.stroke();
  return tex(c);
}

function bannerTexture() {
  const c = canvas(512, 96);
  const g = c.getContext('2d');
  for (let x = 0; x < 512; x += 32) for (let y = 0; y < 96; y += 32) { g.fillStyle = (x + y) / 32 % 2 ? '#ffffff' : '#1a1a22'; g.fillRect(x, y, 32, 32); }
  g.fillStyle = 'rgba(232,64,42,0.92)';
  g.fillRect(96, 12, 320, 72);
  g.fillStyle = '#fff';
  g.font = '900 52px sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('القمة  •  SUMMIT', 256, 52);
  return tex(c);
}

/** A white four-point star for the sparkle bursts. */
export function starTexture() {
  const c = canvas(64, 64);
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const rr = i % 2 ? 11 : 30;
    g.lineTo(32 + Math.cos(a) * rr, 32 + Math.sin(a) * rr);
  }
  g.closePath();
  g.fill();
  return tex(c);
}

export function puffTexture() {
  const c = canvas(64, 64);
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,0.95)');
  gr.addColorStop(0.6, 'rgba(240,248,255,0.6)');
  gr.addColorStop(1, 'rgba(240,248,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 64, 64);
  return tex(c);
}
