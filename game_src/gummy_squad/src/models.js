// Gummy Squad models: everything is built from rounded primitives with soft "plasticine" materials (low gloss, a fingerprint-like
// bump texture, gentle emissive glow so they read well at night). No files, no network.
import * as THREE from 'three';
import { KINDS } from './sim.js';

const TAU = Math.PI * 2;
export const G = {
  sph: new THREE.SphereGeometry(1, 22, 16),
  half: new THREE.SphereGeometry(1, 22, 10, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 16),
  cone: new THREE.ConeGeometry(1, 1, 12),
  box: new THREE.BoxGeometry(1, 1, 1),
  disc: new THREE.CircleGeometry(1, 40),
  ring: new THREE.RingGeometry(0.86, 1, 48),
};

// ---- textures made in code
function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  t.anisotropy = 4;
  return t;
}
let _bump;
export function clayBump() {
  if (_bump) return _bump;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#808080'; x.fillRect(0, 0, 128, 128);
  let s = 7; const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 260; i++) { const px = r() * 128; const py = r() * 128; const rad = 2 + r() * 7; const g = x.createRadialGradient(px, py, 0, px, py, rad); const v = r() > 0.5 ? 255 : 0; g.addColorStop(0, `rgba(${v},${v},${v},.22)`); g.addColorStop(1, `rgba(${v},${v},${v},0)`); x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2); }
  x.strokeStyle = 'rgba(255,255,255,.16)'; x.lineWidth = 1.3; // fingerprint swirls
  for (let k = 0; k < 4; k++) { const px = 20 + r() * 90; const py = 20 + r() * 90; for (let i = 1; i < 7; i++) { x.beginPath(); x.ellipse(px, py, i * 2.4, i * 1.9, r() * 0.4, 0.3, Math.PI * 1.7); x.stroke(); } }
  _bump = new THREE.CanvasTexture(c); _bump.wrapS = _bump.wrapT = THREE.RepeatWrapping; _bump.repeat.set(2, 2);
  return _bump;
}
export const swirlTex = (a, b) => canvasTex(128, 128, (x, w, h) => { x.fillStyle = a; x.fillRect(0, 0, w, h); x.strokeStyle = b; x.lineWidth = 14; x.lineCap = 'round'; x.beginPath(); for (let t = 0; t < 22; t += 0.15) { const rr = t * 2.7; const px = w / 2 + Math.cos(t) * rr; const py = h / 2 + Math.sin(t) * rr; if (t === 0) x.moveTo(px, py); else x.lineTo(px, py); } x.stroke(); });
export const stripeTex = (a, b, n = 8) => canvasTex(128, 128, (x, w, h) => { x.fillStyle = a; x.fillRect(0, 0, w, h); x.fillStyle = b; for (let i = 0; i < n; i += 2) { x.beginPath(); x.moveTo((i * w) / n - h, h); x.lineTo(((i + 1) * w) / n - h, h); x.lineTo(((i + 1) * w) / n, 0); x.lineTo((i * w) / n, 0); x.fill(); } });
export const softDot = () => canvasTex(64, 64, (x, w, h) => { const g = x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); });

// ---- materials
const cache = new Map();
export function clay(color, o = {}) {
  const k = `${color}|${o.rough ?? ''}|${o.em ?? ''}|${o.map ? 1 : 0}`;
  if (!o.fresh && cache.has(k)) return cache.get(k);
  const m = new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? 0.62, metalness: 0, bumpMap: clayBump(), bumpScale: o.bump ?? 0.5, emissive: color, emissiveIntensity: o.em ?? 0.12, map: o.map || null, transparent: !!o.transparent, opacity: o.opacity ?? 1 });
  if (!o.fresh) cache.set(k, m);
  return m;
}
export const basic = (color, opacity = 1, extra = {}) => new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthWrite: opacity >= 1, ...extra });
export function mesh(g, m, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const BLACK = () => clay(0x1c1430, { rough: 0.3, em: 0 });
const WHITE = () => clay(0xffffff, { rough: 0.3, em: 0.3 });

export function shadowDisc(r = 0.8) {
  const m = new THREE.Mesh(G.disc, new THREE.MeshBasicMaterial({ color: 0x0a0620, transparent: true, opacity: 0.38, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.04; m.scale.setScalar(r); m.renderOrder = 1;
  return m;
}

// ---- the gummy bears
export function makeBear(def) {
  const col = def.color;
  const mat = clay(col, { rough: 0.34, em: 0.2, fresh: true });
  const pale = clay(new THREE.Color(col).lerp(new THREE.Color(0xffffff), 0.5).getHex(), { rough: 0.5, em: 0.2, fresh: true });
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(mesh(G.sph, mat, 0, 0.78, 0, 0.5, 0.56, 0.45)); // tummy
  body.add(mesh(G.sph, pale, 0, 0.72, 0.28, 0.27, 0.3, 0.17));
  const head = new THREE.Group(); head.position.set(0, 1.5, 0.04); body.add(head);
  head.add(mesh(G.sph, mat, 0, 0, 0, 0.44, 0.4, 0.42));
  for (const sx of [-1, 1]) {
    head.add(mesh(G.sph, mat, sx * 0.31, 0.34, -0.02, 0.17, 0.17, 0.12));
    head.add(mesh(G.sph, pale, sx * 0.31, 0.34, 0.06, 0.09, 0.09, 0.05));
    head.add(mesh(G.sph, BLACK(), sx * 0.16, 0.07, 0.38, 0.065, 0.085, 0.05));
    head.add(mesh(G.sph, WHITE(), sx * 0.14, 0.1, 0.42, 0.022, 0.022, 0.02));
    head.add(mesh(G.sph, clay(0xff8aa8, { em: 0.2 }), sx * 0.27, -0.06, 0.34, 0.07, 0.045, 0.03)); // blush
  }
  head.add(mesh(G.sph, pale, 0, -0.1, 0.34, 0.19, 0.14, 0.12));
  head.add(mesh(G.sph, BLACK(), 0, -0.06, 0.45, 0.05, 0.035, 0.03));
  const arms = [];
  for (const sx of [-1, 1]) {
    const a = new THREE.Group(); a.position.set(sx * 0.52, 1.08, 0); a.add(mesh(G.sph, mat, 0, -0.18, 0, 0.15, 0.3, 0.15)); body.add(a); arms.push(a);
    body.add(mesh(G.sph, mat, sx * 0.22, 0.24, 0.02, 0.19, 0.26, 0.21));
  }
  const hand = new THREE.Group(); hand.position.set(0, -0.4, 0.05); arms[1].add(hand);
  let weapon;
  if (def.role === 'melee') { // candy-cane sword
    weapon = new THREE.Group();
    const red = clay(0xe8243a, { em: 0.25 }); const white = clay(0xffffff, { em: 0.3 });
    for (let i = 0; i < 6; i++) weapon.add(mesh(G.cyl, i % 2 ? red : white, 0, 0.15 + i * 0.2, 0, 0.065, 0.2, 0.065));
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.065, 8, 14, Math.PI), red); hook.position.set(0.2, 1.35, 0); weapon.add(hook);
    weapon.add(mesh(G.sph, white, 0, 0, 0, 0.1));
    weapon.rotation.x = Math.PI / 2 - 0.15; weapon.position.set(0, 0, 0.05);
  } else if (def.role === 'magic') { // lollipop staff
    weapon = new THREE.Group();
    weapon.add(mesh(G.cyl, clay(0xf0ffd8, { em: 0.3 }), 0, 0.7, 0, 0.05, 1.4, 0.05));
    const disc = mesh(G.cyl, clay(0xffffff, { em: 0.45, map: swirlTex('#ff8ad0', '#fff4a8') }), 0, 1.5, 0, 0.34, 0.09, 0.34); disc.rotation.x = Math.PI / 2; weapon.add(disc);
    const orb = mesh(G.sph, basic(0xd8ff8a, 0.8), 0, 1.5, 0.08, 0.2); weapon.add(orb); weapon.userData.orb = orb;
    weapon.rotation.x = 0.35; weapon.position.set(0, -0.1, 0.05);
  } else { // gumball blaster
    weapon = new THREE.Group();
    weapon.add(mesh(G.sph, clay(0x2a5ad8, { rough: 0.3, em: 0.25 }), 0, 0, 0.1, 0.22, 0.2, 0.3));
    const barrel = mesh(G.cyl, clay(0xd8e4ff, { em: 0.3 }), 0, 0, 0.5, 0.085, 0.5, 0.085); barrel.rotation.x = Math.PI / 2; weapon.add(barrel);
    weapon.add(mesh(G.sph, new THREE.MeshStandardMaterial({ color: 0xbfe0ff, transparent: true, opacity: 0.6, roughness: 0.1, emissive: 0x5a8aff, emissiveIntensity: 0.3 }), 0, 0.28, 0.05, 0.17));
    for (let i = 0; i < 3; i++) weapon.add(mesh(G.sph, clay([0xff5a7a, 0xffe04a, 0x7aff8a][i], { em: 0.4 }), -0.05 + i * 0.05, 0.26 + (i % 2) * 0.04, 0.05, 0.05));
    weapon.position.set(0, 0, 0.1);
  }
  hand.add(weapon);
  const legs = [];
  for (const sx of [-1, 1]) { const l = new THREE.Group(); l.position.set(sx * 0.2, 0.36, 0.02); l.add(mesh(G.sph, mat, 0, -0.1, 0.04, 0.2, 0.24, 0.24)); body.add(l); legs.push(l); }
  const sh = shadowDisc(0.75); g.add(sh);
  const ring = new THREE.Mesh(G.ring, basic(0xffffff, 0.8)); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06; ring.scale.setScalar(1); ring.visible = false; g.add(ring);
  g.userData = { body, head, arms, legs, weapon, mat, pale, ring, shadow: sh, kick: 0, def };
  return g;
}

// ---- gumdrop sweets (the sour enemies)
export function makeEnemy(kind) {
  const d = KINDS[kind]; const r = d.r;
  const mat = clay(d.color, { rough: 0.72, em: 0.14, bump: 0.9 });
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(mesh(G.half, mat, 0, 0.18 * r, 0, r, r * 1.05, r));
  body.add(mesh(G.cyl, mat, 0, 0.1 * r, 0, r * 0.98, r * 0.4, r * 0.98));
  const sugar = clay(0xffffff, { em: 0.5, rough: 0.9 });
  const rs = (() => { let s = kind.length * 13 + 5; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; })();
  for (let i = 0; i < 12; i++) { const a = rs() * TAU; const e = 0.2 + rs() * 1.1; body.add(mesh(G.sph, sugar, Math.cos(a) * Math.sin(e) * r * 0.97, 0.18 * r + Math.cos(e) * r * 1.0, Math.sin(a) * Math.sin(e) * r * 0.97, 0.05 * r + 0.015, 0.05 * r + 0.015, 0.05 * r + 0.015)); }
  const fz = r * 0.95; const ey = r * 0.62;
  for (const sx of [-1, 1]) {
    body.add(mesh(G.sph, WHITE(), sx * r * 0.34, ey, fz * 0.8, r * 0.2, r * 0.24, r * 0.12));
    body.add(mesh(G.sph, BLACK(), sx * r * 0.32, ey - r * 0.02, fz * 0.8 + r * 0.1, r * 0.1, r * 0.13, r * 0.06));
    const brow = mesh(G.box, BLACK(), sx * r * 0.36, ey + r * 0.28, fz * 0.8, r * 0.34, r * 0.07, r * 0.07); brow.rotation.z = sx * -0.45; body.add(brow);
  }
  if (kind === 'spitter') { body.add(mesh(G.sph, clay(0x2a0a3a, { em: 0, rough: 0.4 }), 0, r * 0.2, fz * 0.82, r * 0.28, r * 0.22, r * 0.14)); body.add(mesh(G.sph, clay(0xff7aa8, { em: 0.3 }), 0, r * 0.1, fz * 0.9, r * 0.16, r * 0.08, r * 0.08)); }
  else if (kind === 'tank') { for (let i = 0; i < 2; i++) { const b = new THREE.Mesh(new THREE.TorusGeometry(r * (0.95 - i * 0.28), r * 0.07, 8, 28), clay(0xff8a2a, { em: 0.25 })); b.rotation.x = Math.PI / 2; b.position.y = r * (0.35 + i * 0.5); body.add(b); } body.add(mesh(G.box, BLACK(), 0, r * 0.16, fz * 0.9, r * 0.45, r * 0.07, r * 0.07)); }
  else if (kind === 'bomber') { body.add(mesh(G.cyl, clay(0x6a4a2a), 0, r * 1.35, 0, 0.05, r * 0.5, 0.05)); const sp = mesh(G.sph, basic(0xffe04a), 0, r * 1.65, 0, 0.14); body.add(sp); g.userData.spark = sp; body.add(mesh(G.box, BLACK(), 0, r * 0.2, fz * 0.9, r * 0.4, r * 0.06, r * 0.06)); }
  else if (kind === 'sour') { for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU; body.add(mesh(G.cone, sugar, Math.cos(a) * r * 0.55, r * 1.0, Math.sin(a) * r * 0.55 - r * 0.1, 0.07, 0.2, 0.07)); } body.add(mesh(G.box, BLACK(), 0, r * 0.18, fz * 0.9, r * 0.36, r * 0.07, r * 0.07)); }
  else body.add(mesh(G.box, BLACK(), 0, r * 0.18, fz * 0.9, r * 0.36, r * 0.07, r * 0.07));
  const sh = shadowDisc(r * 1.1); g.add(sh);
  g.userData = { body, mat, r, kind };
  return g;
}

// ---- KING DONUT
export function makeBoss() {
  const g = new THREE.Group(); const lean = new THREE.Group(); const ring = new THREE.Group(); g.add(lean); lean.add(ring);
  const R = 1.25; const T = 0.75;
  const dough = clay(0xd89a5a, { rough: 0.8, em: 0.1, bump: 1 }); const glaze = clay(0xff6ab8, { rough: 0.38, em: 0.22 });
  const d = new THREE.Mesh(new THREE.TorusGeometry(R, T, 20, 40), dough); ring.add(d);
  const gl = new THREE.Mesh(new THREE.TorusGeometry(R, T + 0.04, 20, 40, Math.PI * 1.3), glaze); gl.rotation.z = Math.PI * 0.35 - Math.PI * 0.15; ring.add(gl);
  for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 1.3 + Math.PI * 0.2; ring.add(mesh(G.sph, glaze, Math.cos(a) * (R + 0.4), Math.sin(a) * (R + 0.4), 0.3 * ((i % 3) - 1), 0.2, 0.3, 0.18)); } // drips
  const cols = [0xffe04a, 0x6aeaff, 0xffffff, 0x7aff8a, 0xb08aff];
  let s = 11; const rr = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 22; i++) { const a = 0.2 + rr() * 2.6; const rad = R + (rr() - 0.5) * 0.8; const zz = Math.sqrt(Math.max(0.05, T * T - (rad - R) * (rad - R))) + 0.02; const sp = mesh(G.cyl, clay(cols[i % 5], { em: 0.4 }), Math.cos(a) * rad, Math.sin(a) * rad, zz, 0.045, 0.2, 0.045); sp.rotation.set(Math.PI / 2 + (rr() - 0.5), 0, rr() * TAU); ring.add(sp); }
  for (const sx of [-1, 1]) { // face on the front of the ring
    ring.add(mesh(G.sph, WHITE(), sx * 0.62, 0.55, 0.62, 0.2, 0.26, 0.1)); ring.add(mesh(G.sph, BLACK(), sx * 0.6, 0.52, 0.72, 0.1, 0.13, 0.06));
    const br = mesh(G.box, BLACK(), sx * 0.62, 0.92, 0.66, 0.36, 0.08, 0.08); br.rotation.z = sx * -0.5; ring.add(br);
  }
  ring.add(mesh(G.box, BLACK(), 0, -0.8, 0.62, 0.7, 0.1, 0.1));
  const gold = clay(0xffd23a, { rough: 0.3, em: 0.4 });
  const crown = new THREE.Group(); crown.position.set(0, R + T * 0.75, 0.35);
  crown.add(mesh(G.cyl, gold, 0, 0, 0, 0.55, 0.22, 0.55));
  for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU; crown.add(mesh(G.cone, gold, Math.cos(a) * 0.5, 0.33, Math.sin(a) * 0.5, 0.15, 0.4, 0.15)); crown.add(mesh(G.sph, clay([0xff4a6a, 0x4aff8a, 0x4a8aff][i % 3], { em: 0.6 }), Math.cos(a) * 0.5, 0.58, Math.sin(a) * 0.5, 0.07)); }
  crown.rotation.x = 0.35; ring.add(crown);
  const stars = new THREE.Group(); for (let i = 0; i < 4; i++) stars.add(mesh(G.sph, basic(0xffe04a), Math.cos((i / 4) * TAU) * 1.3, 0, Math.sin((i / 4) * TAU) * 1.3, 0.16)); stars.position.y = 3.3; stars.visible = false; g.add(stars);
  const sh = shadowDisc(2.3); g.add(sh);
  g.userData = { lean, ring, stars, dough, glaze, shadow: sh };
  return g;
}

// ---- pickups
export function makeCandy(hue) {
  const c = [0xff4a7a, 0x4aa8ff, 0xffd23a, 0x6aff8a, 0xb06aff, 0xff9a3a][hue % 6];
  const g = new THREE.Group();
  g.add(mesh(G.sph, clay(c, { rough: 0.4, em: 0.5 }), 0, 0, 0, 0.17, 0.14, 0.14));
  for (const sx of [-1, 1]) { const w = mesh(G.cone, clay(0xffffff, { em: 0.6 }), sx * 0.2, 0, 0, 0.1, 0.12, 0.1); w.rotation.z = sx * -Math.PI / 2; g.add(w); }
  return g;
}
export function makeMint() {
  const g = new THREE.Group();
  const m = mesh(G.cyl, clay(0xffffff, { rough: 0.3, em: 0.6, map: swirlTex('#ffffff', '#e8244a') }), 0, 0, 0, 0.5, 0.2, 0.5); m.rotation.x = Math.PI / 2; g.add(m);
  const beam = mesh(G.cyl, basic(0x8affd8, 0.22, { blending: THREE.AdditiveBlending }), 0, 2, 0, 0.45, 4, 0.45); g.add(beam);
  const gr = new THREE.Mesh(G.ring, basic(0x8affd8, 0.7)); gr.rotation.x = -Math.PI / 2; gr.position.y = -0.55; gr.scale.setScalar(0.9); g.add(gr);
  g.userData = { disc: m, ground: gr };
  return g;
}
export function makeJaw() {
  const g = new THREE.Group();
  const tex = canvasTex(256, 256, (x, w, h) => { const cols = ['#ff5a8a', '#ffe04a', '#6aeaff', '#b08aff', '#ffffff']; for (let i = 6; i >= 0; i--) { x.fillStyle = cols[i % 5]; x.beginPath(); x.arc(w / 2, h / 2, (i + 1) * 18, 0, TAU); x.fill(); } });
  const s = mesh(G.sph, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.25, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }), 0, 0, 0, 2.2);
  g.add(s); g.userData = { ball: s };
  return g;
}
