// Every model of «البقاء على قيد الحياة», built from shapes in code: the hero (a cartoon kid with a red headband and a
// red jacket, as on the owner's card; a ponytail for a girl), the four weapons, goofy cartoon zombies (shambler,
// sprinter, brute, the zombie king), the rooftop (tiles, parapet, brick walls with windows), water towers, air vents
// with spinning fans, blue gas tanks, planters, chimneys, the pink launch pad, the weapon crate, coins and hearts, and
// the city around (other buildings, their roofs, the street far below). Round and silly, never scary, no blood.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
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
export function cone(r, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m);
  o.position.set(x, y, z);
  return o;
}
function capsule(r, len, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 4, 10), m);
  o.position.set(x, y, z);
  return o;
}

// ---- looks of the eight roofs -----------------------------------------------------------------------------------------

export const LOOKS = {
  sunset: { tile: '#e19478', grout: '#c97a60', brick: '#cf6a48', mortar: '#e8a07e', win: '#ffd9a8', frame: '#8a3e2a', cap: 0xf0c8a8, sky: [0xffb08a, 0xffe0b8], fog: 0xf7b48e, sun: 0xffe2c0, hemi: [0xfff0e0, 0x9a5a48], street: 0x7a5a58 },
  towers: { tile: '#d8b48c', grout: '#bf9a72', brick: '#b95a3c', mortar: '#dca088', win: '#bfe4ff', frame: '#6a3020', cap: 0xeedcc0, sky: [0x8ccaf2, 0xffe6b8], fog: 0xbfd8e8, sun: 0xfff2d8, hemi: [0xf4f8ff, 0x8a6a50], street: 0x6a6a72 },
  garden: { tile: '#d49a78', grout: '#b9805e', brick: '#c0643f', mortar: '#e3a586', win: '#c8ecff', frame: '#6a3a22', cap: 0xf2d6b8, sky: [0x7cc8f5, 0xd8f2ff], fog: 0xc8e6f5, sun: 0xfffbe6, hemi: [0xf6fff0, 0x6a8a50], street: 0x5a6a5a, grass: true },
  neon: { tile: '#7a6a96', grout: '#5e4f7a', brick: '#5a4878', mortar: '#7a6898', win: '#ffe27a', frame: '#2a1f40', cap: 0xa898c8, sky: [0x3a2a6a, 0xff7aa8], fog: 0x6a4a8a, sun: 0xffc8e8, hemi: [0xd8c8ff, 0x3a2a5a], street: 0x2a2440, neon: true },
  crane: { tile: '#b8b4a8', grout: '#9a968c', brick: '#9a6a4a', mortar: '#c09a7a', win: '#cfe6f2', frame: '#4a3a2a', cap: 0xd8d4c8, sky: [0xa8c8e0, 0xf2e2c0], fog: 0xd8d0c0, sun: 0xfff0d0, hemi: [0xf8f4ec, 0x7a6a5a], street: 0x6a6460, crane: true },
  snow: { tile: '#eef3f8', grout: '#cfd9e4', brick: '#9a5a48', mortar: '#d0a898', win: '#ffe6a8', frame: '#4a2a22', cap: 0xffffff, sky: [0xb8d4ec, 0xf2f6fa], fog: 0xe0eaf2, sun: 0xffffff, hemi: [0xffffff, 0x8a9ab0], street: 0xd8e0e8, snow: true },
  helipad: { tile: '#6a7480', grout: '#58616c', brick: '#3f6c96', mortar: '#5a86ae', win: '#bfe8ff', frame: '#22384e', cap: 0xc8d4e0, sky: [0x5aaef0, 0xcfeaff], fog: 0xa8d0ee, sun: 0xffffff, hemi: [0xf0f8ff, 0x50607a], street: 0x50586a, helipad: true },
  clock: { tile: '#c48a66', grout: '#a8704e', brick: '#b0583a', mortar: '#d89a7a', win: '#ffe2a0', frame: '#5a2a1a', cap: 0xe8c8a8, sky: [0xd86a6a, 0xffc890], fog: 0xe8987a, sun: 0xffd8b0, hemi: [0xffe8d8, 0x7a4a48], street: 0x5a4048, clock: true },
};

// ---- canvas textures ------------------------------------------------------------------------------------------------

const texCache = new Map();
function cached(key, make) {
  if (!texCache.has(key)) texCache.set(key, make());
  const t = texCache.get(key).clone();
  t.needsUpdate = true;
  return t;
}
export const tileTexture = (look) => cached(`t${look.tile}`, () => tileTex(look));
export const brickTexture = (look, lit = false) => cached(`b${look.brick}${lit}`, () => brickTex(look, lit));
export function clearTextures() { for (const t of texCache.values()) t.dispose(); texCache.clear(); }

function tileTex(look) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = look.grout;
  g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
    const v = ((x * 7 + y * 13) % 5) * 4 - 8;
    g.fillStyle = shade(look.tile, v);
    g.fillRect(x * 64 + 3, y * 64 + 3, 58, 58);
    g.fillStyle = 'rgba(255,255,255,0.08)';
    g.fillRect(x * 64 + 3, y * 64 + 3, 58, 6);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Brick wall with rows of windows. */
function brickTex(look, lit = false) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = look.mortar;
  g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 32; y++) for (let x = -1; x < 9; x++) {
    const ox = (y % 2) * 16;
    g.fillStyle = shade(look.brick, ((x * 3 + y * 5) % 4) * 5 - 6);
    g.fillRect(x * 32 + ox + 1, y * 8 + 1, 30, 6);
  }
  // windows: 2 x 2 per tile
  for (let wy = 0; wy < 2; wy++) for (let wx = 0; wx < 2; wx++) {
    const x = 36 + wx * 128;
    const y = 30 + wy * 128;
    g.fillStyle = look.frame;
    g.fillRect(x - 4, y - 4, 64, 80);
    const on = lit || (wx + wy) % 3 === 0;
    g.fillStyle = on ? look.win : shade(look.win, -60);
    g.fillRect(x, y, 56, 72);
    g.fillStyle = look.frame;
    g.fillRect(x + 26, y, 4, 72);
    g.fillRect(x, y + 34, 56, 4);
    g.fillStyle = 'rgba(255,255,255,0.25)';
    g.fillRect(x + 4, y + 4, 8, 26);
    g.fillStyle = shade(look.mortar, 20);
    g.fillRect(x - 8, y + 76, 72, 8); // sill
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function skyTexture(look) {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, `#${look.sky[0].toString(16).padStart(6, '0')}`);
  grd.addColorStop(1, `#${look.sky[1].toString(16).padStart(6, '0')}`);
  g.fillStyle = grd;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function shade(hex, v) {
  const n = parseInt(hex.slice(1), 16);
  const f = (x) => Math.max(0, Math.min(255, x + v));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}

function textTexture(text, color, bg, w = 256, h = 96) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.font = `900 ${Math.round(h * 0.62)}px Tajawal, system-ui, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.shadowColor = color;
  g.shadowBlur = 12;
  g.fillStyle = color;
  g.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---- the hero -------------------------------------------------------------------------------------------------------

/** A cartoon kid about 1.5 units tall facing +z. Arms hold the weapon in front. */
export function makeHero(girl = false) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = mat(0xf2c09a);
  const jacket = mat(0xd8282a);
  const dark = mat(0x26222e);
  const pants = mat(0x3a4a7a);
  const hair = mat(girl ? 0x5a3018 : 0x3a2414);
  const band = mat(0xe82a2a);
  // legs
  const legs = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(s * 0.15, 0.55, 0);
    leg.add(capsule(0.11, 0.3, pants, 0, -0.22, 0));
    leg.add(box(0.2, 0.12, 0.3, mat(0xffd23a), 0, -0.5, 0.05)); // yellow sneakers
    leg.add(box(0.21, 0.04, 0.31, mat(0xffffff), 0, -0.56, 0.05));
    body.add(leg);
    legs.push(leg);
  }
  // body: red jacket with a dark stripe and a zip
  const torso = capsule(0.27, 0.28, jacket, 0, 0.86, 0);
  torso.scale.set(1, 1, 0.82);
  body.add(torso);
  body.add(box(0.56, 0.08, 0.46, dark, 0, 0.74, 0));
  body.add(box(0.04, 0.4, 0.02, mat(0xffd23a), 0, 0.9, 0.23));
  body.add(box(0.5, 0.1, 0.44, dark, 0, 1.1, 0)); // collar
  // head
  const head = new THREE.Group();
  head.position.set(0, 1.42, 0);
  body.add(head);
  head.add(ball(0.33, skin, 0, 0, 0, 1, 0.95, 0.95, 18));
  // spiky hair
  head.add(ball(0.34, hair, 0, 0.1, -0.04, 1.02, 0.78, 1, 16));
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const sp = cone(0.1, 0.28, hair, Math.sin(a) * 0.2, 0.3, Math.cos(a) * 0.18 - 0.04, 6);
    sp.rotation.set(Math.cos(a) * 0.7, 0, -Math.sin(a) * 0.7);
    head.add(sp);
  }
  if (girl) {
    const tail = ball(0.16, hair, 0, 0.05, -0.42, 0.8, 1.4, 0.9);
    head.add(tail);
    head.add(ball(0.06, band, 0, 0.18, -0.32));
  }
  // red headband with two tails at the back (as on the card)
  const hb = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.05, 6, 24), band);
  hb.rotation.x = Math.PI / 2 - 0.15;
  hb.position.set(0, 0.12, 0);
  head.add(hb);
  const tails = [];
  for (const s of [-1, 1]) {
    const tl = box(0.07, 0.03, 0.3, band, s * 0.06, 0.1, -0.42);
    tl.rotation.set(0.4, s * 0.3, 0);
    head.add(tl);
    tails.push(tl);
  }
  // face: big eyes, eyebrows, smile
  for (const s of [-1, 1]) {
    head.add(ball(0.075, mat(0xffffff), s * 0.12, 0.0, 0.28, 0.9, 1.15, 0.6, 12));
    head.add(ball(0.045, mat(0x2a1a10), s * 0.12, -0.005, 0.32, 0.9, 1.1, 0.5, 10));
    head.add(ball(0.015, mat(0xffffff), s * 0.12 + 0.015, 0.02, 0.345, 1, 1, 0.5, 6));
    const brow = box(0.1, 0.025, 0.02, hair, s * 0.12, 0.1, 0.3);
    brow.rotation.z = s * -0.25;
    head.add(brow);
  }
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.016, 6, 12, Math.PI), mat(0x8a2a1a));
  mouth.rotation.z = Math.PI;
  mouth.position.set(0, -0.12, 0.3);
  head.add(mouth);
  for (const s of [-1, 1]) head.add(ball(0.05, skin, s * 0.32, 0, 0, 0.6, 1, 1, 8)); // ears
  // arms reach forward to hold the weapon
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.3, 1.04, 0.02);
    const up = capsule(0.085, 0.22, jacket, 0, -0.12, 0);
    arm.add(up);
    arm.add(ball(0.08, skin, 0, -0.3, 0.02));
    arm.rotation.x = -1.2;
    arm.rotation.z = s * 0.2;
    body.add(arm);
    arms.push(arm);
  }
  const gunMount = new THREE.Group();
  gunMount.position.set(0.08, 0.98, 0.42);
  body.add(gunMount);
  // a soft shadow and the bright ring under the hero (as in the video)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.5, 20), basic(0x000000, { transparent: true, opacity: 0.22, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.74, 32), basic(0xffffff, { transparent: true, opacity: 0.75, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  root.add(ring);
  return { root, body, head, legs, arms, gunMount, ring, shadow, tails };
}

/** The four weapons (held at the hero's hands, pointing +z). */
export function makeWeapon(id) {
  const g = new THREE.Group();
  if (id === 'blaster') {
    // purple and yellow blaster (like the weapon icon in the video)
    g.add(box(0.16, 0.18, 0.5, mat(0x8a4ad8), 0, 0, 0.1));
    g.add(box(0.12, 0.22, 0.12, mat(0x5a2aa0), 0, -0.16, -0.04));
    { const _m = cyl(0.06, 0.06, 0.3, mat(0xffc21a), 0, 0.02, 0.45, 10); _m.rotation.x = Math.PI / 2; g.add(_m); }
    g.add(box(0.18, 0.06, 0.2, mat(0xffc21a), 0, 0.12, 0.05));
    const tip = ball(0.06, basic(0x8ff8ff), 0, 0.02, 0.62);
    g.add(tip);
  } else if (id === 'bomb') {
    // chunky green launcher with a round drum
    const tube = cyl(0.13, 0.13, 0.7, mat(0x4a9a3a), 0, 0.02, 0.2, 12);
    tube.rotation.x = Math.PI / 2;
    g.add(tube);
    const drum = cyl(0.2, 0.2, 0.2, mat(0x2a5a2a), 0, -0.04, -0.05, 12);
    drum.rotation.z = Math.PI / 2;
    g.add(drum);
    { const _m = cyl(0.15, 0.15, 0.06, mat(0xffc21a), 0, 0.02, 0.56, 12); _m.rotation.x = Math.PI / 2; g.add(_m); }
  } else if (id === 'rocket') {
    const tube = cyl(0.14, 0.14, 0.95, mat(0x6a7a4a), 0, 0.12, 0.1, 12);
    tube.rotation.x = Math.PI / 2;
    g.add(tube);
    const nose = cone(0.11, 0.2, mat(0xe8322a), 0, 0.12, 0.65, 10);
    nose.rotation.x = Math.PI / 2;
    g.add(nose);
    g.add(box(0.06, 0.2, 0.08, mat(0x3a3a3a), 0, -0.06, 0.05));
  } else {
    // fireworks launcher: a red tube with yellow stars
    const tube = cyl(0.15, 0.12, 0.8, mat(0xd8283a), 0, 0.06, 0.15, 12);
    tube.rotation.x = Math.PI / 2;
    g.add(tube);
    for (let i = 0; i < 3; i++) g.add(ball(0.05, mat(0xffe23a, 0xffc21a, 0.6), 0.15, 0.08, -0.1 + i * 0.22));
    { const _m = cyl(0.17, 0.17, 0.05, mat(0x3a8ae8), 0, 0.06, 0.55, 12); _m.rotation.x = Math.PI / 2; g.add(_m); }
  }
  return g;
}

// ---- zombies --------------------------------------------------------------------------------------------------------

const SHIRTS = [0x7a4ab0, 0x3a6ab0, 0x8a6a3a, 0x4a8a6a, 0xb04a6a];

/** A goofy cartoon zombie facing +z: big head, one big and one small eye, arms forward, torn clothes. */
export function makeZombie(kind, variant = 0) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const big = kind === 'brute' || kind === 'king';
  const skinC = kind === 'sprinter' ? 0x9ad86a : big ? 0x8ab07a : 0x7ac86a;
  const skin = mat(skinC);
  const shirt = mat(kind === 'sprinter' ? 0xf08a2a : big ? 0xf2f0e8 : SHIRTS[variant % SHIRTS.length]);
  const pants = mat(kind === 'king' ? 0x5a2a8a : kind === 'sprinter' ? 0x3a3a5a : 0x5a4a3a);
  const s = kind === 'king' ? 2.1 : kind === 'brute' ? 1.45 : kind === 'sprinter' ? 0.92 : 1;
  const legs = [];
  for (const sd of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(sd * 0.14, 0.5, 0);
    leg.add(capsule(big ? 0.13 : 0.09, 0.28, pants, 0, -0.2, 0));
    leg.add(box(0.16, 0.1, 0.24, mat(0x4a3a2a), 0, -0.46, 0.04));
    body.add(leg);
    legs.push(leg);
  }
  // body (a round belly for the big ones)
  const torso = big ? ball(0.42, shirt, 0, 0.88, 0, 1, 1, 0.9, 16) : capsule(0.22, 0.25, shirt, 0, 0.82, 0);
  body.add(torso);
  if (!big) {
    // a torn hem
    for (let i = 0; i < 4; i++) { const _m = cone(0.06, 0.12, shirt, -0.15 + i * 0.1, 0.56, 0.16, 4); _m.rotation.x = Math.PI; body.add(_m); }
  } else {
    body.add(ball(0.2, skin, 0, 0.72, 0.28, 1, 0.8, 0.5)); // belly peeking out
  }
  const head = new THREE.Group();
  head.position.set(0, big ? 1.42 : 1.3, 0.04);
  body.add(head);
  head.add(ball(0.3, skin, 0, 0, 0, 1, 1.02, 0.96, 16));
  // messy hair tufts
  const hair = mat(kind === 'sprinter' ? 0xe8b23a : 0x3a2e2a);
  for (let i = 0; i < 4; i++) { const _m = cone(0.06, 0.16, hair, -0.12 + i * 0.08, 0.28, -0.04 + (i % 2) * 0.06, 5); _m.rotation.z = (i - 1.5) * 0.3; head.add(_m); }
  // goofy eyes: one big, one small
  head.add(ball(0.1, mat(0xffffff), -0.11, 0.05, 0.24, 1, 1, 0.6, 12));
  head.add(ball(0.04, mat(0x1a1a1a), -0.1, 0.04, 0.3, 1, 1, 0.5, 8));
  head.add(ball(0.065, mat(0xffffff), 0.12, 0.04, 0.25, 1, 1, 0.6, 12));
  head.add(ball(0.03, mat(0x1a1a1a), 0.12, 0.03, 0.29, 1, 1, 0.5, 8));
  // silly open mouth with one tooth
  head.add(ball(0.08, mat(0x5a1a2a), 0, -0.13, 0.25, 1.2, 0.6, 0.5, 10));
  head.add(box(0.035, 0.04, 0.02, mat(0xffffff), 0.03, -0.1, 0.29));
  // stitches on the cheek
  head.add(box(0.1, 0.012, 0.01, mat(0x2a4a2a), 0.17, -0.06, 0.24));
  if (kind === 'king') {
    const crown = new THREE.Group();
    crown.add(cyl(0.2, 0.22, 0.12, mat(0xffc21a, 0x7a5a00, 0.4), 0, 0, 0, 10));
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; crown.add(cone(0.05, 0.14, mat(0xffc21a, 0x7a5a00, 0.4), Math.sin(a) * 0.18, 0.12, Math.cos(a) * 0.18, 5)); }
    crown.position.y = 0.32;
    head.add(crown);
    const cape = box(0.9, 0.9, 0.05, mat(0x7a2ab0), 0, 0.85, -0.42);
    cape.rotation.x = 0.15;
    body.add(cape);
  }
  // arms straight out in front (the classic cartoon zombie walk)
  const arms = [];
  for (const sd of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sd * (big ? 0.44 : 0.27), big ? 1.08 : 1.0, 0.02);
    arm.add(capsule(big ? 0.1 : 0.07, 0.34, shirt, 0, -0.17, 0));
    arm.add(ball(big ? 0.11 : 0.075, skin, 0, -0.42, 0));
    arm.rotation.x = -1.45;
    body.add(arm);
    arms.push(arm);
  }
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(big ? 0.55 : 0.36, 16), basic(0x000000, { transparent: true, opacity: 0.2, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);
  body.scale.setScalar(s);
  shadow.scale.setScalar(s);
  return { root, body, head, legs, arms, s };
}

// ---- roof props -----------------------------------------------------------------------------------------------------

/** Grey air vent box with a black fan on top (the fan spins). */
export function makeVent() {
  const g = new THREE.Group();
  g.add(box(1.2, 0.8, 1.2, mat(0xb8bcc4), 0, 0.4, 0));
  g.add(box(1.26, 0.08, 1.26, mat(0x9a9ea8), 0, 0.82, 0));
  g.add(cyl(0.44, 0.44, 0.06, mat(0x1e1e24), 0, 0.85, 0, 20));
  const fan = new THREE.Group();
  for (let i = 0; i < 4; i++) { const b = box(0.36, 0.02, 0.1, mat(0x4a4a52), 0, 0, 0); b.position.set(Math.cos((i * Math.PI) / 2) * 0.18, 0, Math.sin((i * Math.PI) / 2) * 0.18); b.rotation.y = (-i * Math.PI) / 2; fan.add(b); }
  fan.position.y = 0.88;
  g.add(fan);
  for (let i = 0; i < 4; i++) g.add(box(1.0, 0.03, 0.02, mat(0x8a8e98), 0, 0.2 + i * 0.13, 0.61));
  return { root: g, fan };
}

/** A wooden water tank on four legs with a cone roof (the city roofs in the video have them). */
export function makeWaterTower(scale = 1) {
  const g = new THREE.Group();
  const wood = mat(0xb07040);
  const metal = mat(0x3a3a40);
  for (const [x, z] of [[-0.75, -0.75], [0.75, -0.75], [-0.75, 0.75], [0.75, 0.75]]) g.add(cyl(0.07, 0.07, 1.6, metal, x, 0.8, z, 6));
  g.add(box(1.8, 0.08, 0.06, metal, 0, 0.9, 0.75));
  g.add(box(1.8, 0.08, 0.06, metal, 0, 0.9, -0.75));
  g.add(cyl(1.0, 1.0, 1.7, wood, 0, 2.45, 0, 18));
  for (const y of [1.85, 2.45, 3.05]) g.add(cyl(1.03, 1.03, 0.07, metal, 0, y, 0, 18));
  g.add(cone(1.12, 0.8, mat(0x6a4a3a), 0, 3.7, 0, 18));
  g.add(ball(0.08, metal, 0, 4.1, 0));
  g.scale.setScalar(scale);
  return g;
}

/** A cluster of blue gas tanks with red caps (shoot them when zombies crowd around). */
export function makeTanks() {
  const g = new THREE.Group();
  const blue = mat(0x2a5ad8);
  const parts = [];
  for (const [x, z, h] of [[0, 0, 0.95], [0.45, 0.2, 0.85], [-0.4, 0.25, 0.9], [0.1, -0.42, 0.8]]) {
    const t = new THREE.Group();
    t.add(cyl(0.22, 0.22, h, blue, 0, h / 2, 0, 14));
    t.add(ball(0.22, blue, 0, h, 0, 1, 0.6, 1, 12));
    t.add(cyl(0.07, 0.07, 0.14, mat(0xe8322a), 0, h + 0.15, 0, 8));
    t.add(cyl(0.225, 0.225, 0.06, mat(0xffffff), 0, h * 0.6, 0, 14));
    t.position.set(x, 0, z);
    g.add(t);
    parts.push(t);
  }
  return { root: g, parts };
}

export function makePlanter(look) {
  const g = new THREE.Group();
  g.add(box(1.5, 0.5, 1.0, mat(0x8a5a32), 0, 0.25, 0));
  const leaf = mat(look.snow ? 0xe8f0f5 : 0x4aa83a);
  for (let i = 0; i < 4; i++) g.add(ball(0.32, leaf, -0.5 + i * 0.33, 0.62, (i % 2) * 0.12 - 0.06, 1, 0.85, 1, 10));
  if (!look.snow) for (let i = 0; i < 3; i++) g.add(ball(0.07, mat(0xff6a8a), -0.35 + i * 0.35, 0.86, 0.2));
  return g;
}

export function makeChimney(look) {
  const g = new THREE.Group();
  g.add(box(0.9, 1.4, 0.9, mat(new THREE.Color(look.brick).getHex()), 0, 0.7, 0));
  g.add(box(1.0, 0.15, 1.0, mat(look.cap), 0, 1.45, 0));
  g.add(box(0.5, 0.1, 0.5, mat(0x2a2a2a), 0, 1.53, 0));
  return g;
}

/** The pink hexagon launch pad with white arrows (as at the roof edge in the video). */
export function makePad() {
  const g = new THREE.Group();
  const hex = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.2, 6), mat(0xff5a9a, 0xff2a7a, 0.25));
  hex.position.y = 0.1;
  g.add(hex);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.04, 6), mat(0xffa8cc, 0xff6aa8, 0.3));
  top.position.y = 0.22;
  g.add(top);
  const arrows = [];
  for (let i = 0; i < 3; i++) {
    const a = new THREE.Group();
    const l = box(0.44, 0.03, 0.12, basic(0xffffff), -0.15, 0, 0);
    l.rotation.y = -0.7;
    const r = box(0.44, 0.03, 0.12, basic(0xffffff), 0.15, 0, 0);
    r.rotation.y = 0.7;
    a.add(l, r);
    a.position.set(0, 0.25, 0.35 - i * 0.32);
    g.add(a);
    arrows.push(a);
  }
  const glow = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 3, 6, 1, true), basic(0xff6aa8, { transparent: true, opacity: 0.0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.position.y = 1.5;
  g.add(glow);
  return { root: g, arrows, glow };
}

/** A purple crate with gold corners; the new weapon floats above it. */
export function makeCrate(weapon) {
  const g = new THREE.Group();
  g.add(box(0.9, 0.7, 0.9, mat(0x7a3ac8), 0, 0.35, 0));
  for (const x of [-0.42, 0.42]) for (const z of [-0.42, 0.42]) g.add(box(0.1, 0.74, 0.1, mat(0xffc21a), x, 0.35, z));
  g.add(box(0.94, 0.08, 0.94, mat(0xffc21a), 0, 0.7, 0));
  const w = makeWeapon(weapon);
  w.scale.setScalar(1.5);
  w.position.y = 1.4;
  g.add(w);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 3, 16, 1, true), basic(0xc88aff, { transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  beam.position.y = 1.5;
  g.add(beam);
  return { root: g, weapon: w };
}

export function makeHeart() {
  const g = new THREE.Group();
  const m = mat(0xff3a6a, 0xff1a4a, 0.4);
  g.add(ball(0.18, m, -0.12, 0.08, 0));
  g.add(ball(0.18, m, 0.12, 0.08, 0));
  const c = cone(0.25, 0.32, m, 0, -0.14, 0, 12);
  c.rotation.z = Math.PI;
  g.add(c);
  g.add(cyl(0.3, 0.3, 0.05, basic(0xffffff, { transparent: true, opacity: 0.5 }), 0, -0.5, 0, 16));
  return g;
}

/** A gold hexagon coin (drawn many times with one instanced mesh). */
export function coinGeometry() {
  const geo = new THREE.CylinderGeometry(0.22, 0.22, 0.07, 6);
  geo.rotateZ(Math.PI / 2);
  return geo;
}

// ---- the roof and the city around -----------------------------------------------------------------------------------

/** The roof the fight happens on: tiles, a parapet and brick walls going down with windows. */
export function makeRoof(W, D, look) {
  const g = new THREE.Group();
  const tiles = tileTexture(look);
  tiles.repeat.set(W / 2, D / 2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W * 2, D * 2), new THREE.MeshLambertMaterial({ map: tiles }));
  floor.rotation.x = -Math.PI / 2;
  g.add(floor);
  if (look.grass) {
    for (const [x, z, w, d] of [[-W * 0.55, D * 0.35, 3, 2.4], [W * 0.5, -D * 0.4, 2.6, 2.2]]) {
      const p = box(w, 0.08, d, mat(0x6ac04a), x, 0.04, z);
      g.add(p);
    }
  }
  if (look.helipad) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(2.6, 3.0, 40), basic(0xffd23a));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.02, 2.5);
    g.add(ring);
    const hm = basic(0xffd23a);
    g.add(box(0.4, 0.02, 2.4, hm, -0.9, 0.02, 2.5), box(0.4, 0.02, 2.4, hm, 0.9, 0.02, 2.5), box(1.4, 0.02, 0.4, hm, 0, 0.02, 2.5));
  }
  if (look.snow) for (let i = 0; i < 14; i++) g.add(ball(0.5 + (i % 3) * 0.3, mat(0xffffff), Math.sin(i * 2.3) * (W - 1), 0, Math.cos(i * 1.7) * (D - 1), 1.6, 0.35, 1.2, 10));
  // parapet: a low wall around the roof with a light cap
  const brickTex = brickTexture(look);
  const wallMat = mat(new THREE.Color(look.brick).getHex());
  const capMat = mat(look.snow ? 0xffffff : look.cap);
  const H = 0.55;
  for (const [x, z, w, d] of [[0, -D - 0.25, W * 2 + 1, 0.5], [0, D + 0.25, W * 2 + 1, 0.5], [-W - 0.25, 0, 0.5, D * 2], [W + 0.25, 0, 0.5, D * 2]]) {
    g.add(box(w, H, d, wallMat, x, H / 2, z));
    g.add(box(w + 0.12, 0.12, d + 0.12, capMat, x, H + 0.06, z));
  }
  // the building going down (brick with windows)
  const depth = 60;
  const sideMat = new THREE.MeshLambertMaterial({ map: brickTex });
  const sides = [
    [W * 2 + 1, D + 0.5, 0, 0], [W * 2 + 1, -D - 0.5, Math.PI, 0],
  ];
  for (const [w, z, ry] of sides) {
    const t = brickTex.clone();
    t.needsUpdate = true;
    t.repeat.set(w / 4, depth / 4);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, depth), new THREE.MeshLambertMaterial({ map: t }));
    m.position.set(0, -depth / 2, z);
    m.rotation.y = ry;
    g.add(m);
  }
  for (const s of [-1, 1]) {
    const t = brickTex.clone();
    t.needsUpdate = true;
    t.repeat.set((D * 2 + 1) / 4, depth / 4);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(D * 2 + 1, depth), new THREE.MeshLambertMaterial({ map: t }));
    m.position.set(s * (W + 0.5), -depth / 2, 0);
    m.rotation.y = (s * Math.PI) / 2;
    g.add(m);
  }
  void sideMat;
  return g;
}

/** One city building: a brick box with windows and a few things on its roof. */
export function makeBuilding(w, h, d, look, seed = 0, lit = false) {
  const g = new THREE.Group();
  const tex = brickTexture(look, lit);
  const m = [];
  for (const [ww] of [[d], [d], [w], [w]]) {
    const t = tex.clone();
    t.needsUpdate = true;
    t.repeat.set(ww / 4, h / 4);
    m.push(new THREE.MeshLambertMaterial({ map: t }));
  }
  const tiles = tileTexture(look);
  tiles.repeat.set(w / 4, d / 4);
  const roofM = new THREE.MeshLambertMaterial({ map: tiles });
  const mats = [m[0], m[1], roofM, roofM, m[2], m[3]];
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats);
  b.position.y = -h / 2;
  g.add(b);
  const cap = mat(look.snow ? 0xffffff : look.cap);
  for (const [x, z, ww, dd] of [[0, -d / 2, w, 0.4], [0, d / 2, w, 0.4], [-w / 2, 0, 0.4, d], [w / 2, 0, 0.4, d]]) g.add(box(ww, 0.4, dd, cap, x, 0.2, z));
  const r = (k) => ((Math.sin(seed * 12.9898 + k * 78.233) * 43758.5453) % 1 + 1) % 1;
  if (r(1) < 0.55) { const t = makeWaterTower(0.8 + r(2) * 0.4); t.position.set((r(3) - 0.5) * (w - 3), 0, (r(4) - 0.5) * (d - 3)); g.add(t); }
  if (r(5) < 0.8) { const v = makeVent(); v.root.position.set((r(6) - 0.5) * (w - 2), 0, (r(7) - 0.5) * (d - 2)); g.add(v.root); }
  if (r(8) < 0.5) { const tk = makeTanks(); tk.root.position.set((r(9) - 0.5) * (w - 2), 0, (r(10) - 0.5) * (d - 2)); g.add(tk.root); }
  if (r(11) < 0.4) g.add(box(1.6, 1.4, 1.6, mat(0xd8c8b0), (r(12) - 0.5) * (w - 3), 0.7, (r(13) - 0.5) * (d - 3))); // stair hut
  if (look.snow) g.add(box(w - 0.6, 0.12, d - 0.6, mat(0xffffff), 0, 0.06, 0));
  return g;
}

/** Neon signs, a crane, or a clock tower around special roofs. */
export function makeNeonSign(text, color) {
  const t = textTexture(text, color, '#1a1030', 320, 110);
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.6), new THREE.MeshBasicMaterial({ map: t }));
  board.position.y = 2.2;
  g.add(board);
  g.add(box(4.8, 0.12, 0.12, mat(0x2a2a3a), 0, 1.35, 0));
  g.add(cyl(0.06, 0.06, 1.4, mat(0x2a2a3a), -1.8, 0.7, -0.05, 6), cyl(0.06, 0.06, 1.4, mat(0x2a2a3a), 1.8, 0.7, -0.05, 6));
  return g;
}

export function makeCrane() {
  const g = new THREE.Group();
  const y = mat(0xffc21a);
  for (let i = 0; i < 12; i++) {
    g.add(box(1.2, 0.1, 0.1, y, 0, i * 1.6, 0.55), box(1.2, 0.1, 0.1, y, 0, i * 1.6, -0.55));
    const d = box(0.08, 1.9, 0.08, y, 0, i * 1.6 + 0.8, 0.55);
    d.rotation.z = 0.6;
    g.add(d);
  }
  for (const x of [-0.55, 0.55]) for (const z of [-0.55, 0.55]) g.add(box(0.14, 19, 0.14, y, x, 9.5, z));
  const jib = new THREE.Group();
  jib.position.y = 19;
  jib.add(box(18, 0.5, 0.6, y, 5, 0, 0));
  jib.add(box(2, 1.6, 1.6, mat(0x3a3a3a), -3.5, -0.4, 0));
  jib.add(box(1.6, 1.4, 1.4, mat(0xe8e8e8), 0.4, -1.0, 0));
  jib.add(cyl(0.03, 0.03, 8, mat(0x2a2a2a), 11, -4, 0, 4));
  jib.add(box(0.8, 0.4, 0.8, mat(0xe8322a), 11, -8.1, 0));
  g.add(jib);
  return { root: g, jib };
}

export function makeClockTower(look) {
  const g = new THREE.Group();
  g.add(box(6, 30, 6, mat(new THREE.Color(look.brick).getHex()), 0, -6, 0));
  g.add(box(6.6, 0.6, 6.6, mat(look.cap), 0, 9.3, 0));
  const face = new THREE.Mesh(new THREE.CircleGeometry(2.2, 32), mat(0xfff4dc, 0xffe8b0, 0.5));
  face.position.set(0, 6, 3.02);
  g.add(face);
  const hands = [];
  for (const [len, w] of [[1.6, 0.16], [1.1, 0.22]]) {
    const hnd = box(w, len, 0.05, mat(0x2a1a10), 0, 0, 0);
    hnd.geometry.translate(0, len / 2, 0);
    hnd.position.set(0, 6, 3.08);
    g.add(hnd);
    hands.push(hnd);
  }
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; g.add(box(0.12, 0.3, 0.04, mat(0x2a1a10), Math.sin(a) * 1.9, 6 + Math.cos(a) * 1.9, 3.05)); }
  { const _m = cone(4.6, 6, mat(0x4a7a6a), 0, 12.6, 0, 4); _m.rotation.y = Math.PI / 4; g.add(_m); }
  return { root: g, hands };
}
