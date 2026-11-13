// The places of the learning world (owner 2026-11-12: "the start is in one place and after each level we move to another,
// different place", like the environment cards of the reference sheet). Each world is a THREE.Group built from shapes in
// code: sky, ground, scenery and the look of the floating pads the pictures stand on. `buildWorld(id)` returns
// { group, pad, update(dt, time) }. Nothing is downloaded.
import * as THREE from 'three';
import { addSky, addClouds, scatter, makeTree, makeFlower, makeRock } from './realism.js';
import { makeThing } from './things3d.js';
import { artProp, artTexture } from './actors.js';

const m = (c, r = 0.8, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: r, ...o });
const box = (w, h, d, mat, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; return o; };
const cyl = (rt, rb, h, mat, x, y, z, seg = 16) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const cone = (r, h, mat, x, y, z, seg = 16) => { const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const sph = (r, mat, x, y, z) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 14), mat); o.position.set(x, y, z); o.castShadow = true; return o; };

// ---- painted textures (made on a canvas, nothing downloaded): brick, planks, roof tiles, grass --------------------------------------
function canvasTex(w, h, draw, rep = [1, 1]) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rep[0], rep[1]);
  t.anisotropy = 4;
  return t;
}
const brickTex = (rep) => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#e6d8bb'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 5; x++) { g.fillStyle = ['#e0cfab', '#eee0c4', '#d8c59e', '#e8d9b8'][(x * 3 + y * 5) % 4]; g.fillRect(x * 64 - ((y % 2) * 32) + 2, y * 32 + 2, 60, 28); }
  g.strokeStyle = '#a8946a'; g.lineWidth = 3;
  for (let y = 0; y <= 8; y++) { g.beginPath(); g.moveTo(0, y * 32); g.lineTo(w, y * 32); g.stroke(); }
}, rep);
const plankTex = (rep) => canvasTex(256, 256, (g, w, h) => {
  for (let x = 0; x < 8; x++) { g.fillStyle = ['#d6a468', '#cd9a5c', '#dcae74', '#c8945a'][x % 4]; g.fillRect(x * 32, 0, 32, h); g.fillStyle = 'rgba(90,50,20,.45)'; g.fillRect(x * 32, 0, 3, h); }
  g.fillStyle = 'rgba(90,50,20,.18)'; for (let i = 0; i < 40; i++) g.fillRect(Math.random() * w, Math.random() * h, 2, 10 + Math.random() * 24);
}, rep);
const tileTex = (rep) => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#b02a24'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 9; x++) {
    g.fillStyle = ['#d8382c', '#e04a38', '#cc3026'][(x + y) % 3];
    g.beginPath(); g.arc(x * 32 - ((y % 2) * 16) + 16, y * 32 + 8, 17, 0, Math.PI); g.fill();
    g.strokeStyle = '#8a1e1a'; g.lineWidth = 2; g.beginPath(); g.arc(x * 32 - ((y % 2) * 16) + 16, y * 32 + 8, 17, 0, Math.PI); g.stroke();
  }
}, rep);
const grassTex = (rep) => canvasTex(512, 512, (g, w, h) => {
  // a cartoon lawn: bright green with soft wide mowing stripes and small darker "v" grass marks
  g.fillStyle = '#7fdc58'; g.fillRect(0, 0, w, h);
  for (let i = -4; i < 12; i++) { g.fillStyle = i % 2 ? 'rgba(255,255,160,.16)' : 'rgba(40,150,60,.12)'; g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64 + 64, 0); g.lineTo(i * 64 + 64 - 200, h); g.lineTo(i * 64 - 200, h); g.closePath(); g.fill(); }
  for (let i = 0; i < 160; i++) {
    const x = Math.random() * w, y = Math.random() * h, k = 6 + Math.random() * 6;
    g.strokeStyle = Math.random() < 0.6 ? 'rgba(50,160,60,.7)' : 'rgba(190,255,130,.8)'; g.lineWidth = 3; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x - k * 0.6, y); g.lineTo(x, y - k); g.lineTo(x + k * 0.6, y); g.stroke();
  }
}, rep);

function ground(g, color, stripColor, y = -0.2, tex = null) {
  const f = new THREE.Mesh(new THREE.PlaneGeometry(80, 44), tex ? new THREE.MeshStandardMaterial({ map: tex, roughness: 1 }) : m(color, 1));
  f.rotation.x = -Math.PI / 2; f.position.y = y; f.receiveShadow = true; g.add(f);
  const strip = box(70, 0.4, 3.4, tex && tex.userData && tex.userData.strip ? new THREE.MeshStandardMaterial({ map: tex.userData.strip, roughness: 1 }) : m(stripColor, 1), 0, -0.05, 3.2); // as wide as the floor: no visible ends while worlds slide past
  g.add(strip);
}

// ---- the pads the pictures float or stand on ------------------------------------------------------------------------
export const PADS = {
  float: { ring: [0xff8a3a, 0xff5a8a, 0x4ac8ff, 0xffc93a, 0x7ad86a], disc: 0xfff4d8 },
  wood: { ring: [0xb8763a, 0xc8864a, 0xa86a3a, 0xd8964a, 0xb8763a], disc: 0xe8c890 },
  cloud: { ring: [0xffffff, 0xf0f4ff, 0xffffff, 0xfff0f8, 0xf0fff8], disc: 0xe8f4ff },
  rock: { ring: [0x8a8aa0, 0x7a7a90, 0x9a9ab0, 0x8a8aa0, 0x7a7a90], disc: 0xc8c8d8 },
  ice: { ring: [0x8ad8ff, 0xa8e8ff, 0x7ac8f0, 0xb8f0ff, 0x8ad8ff], disc: 0xeafaff },
  stone: { ring: [0x9a9a9a, 0xaaaaaa, 0x8a8a8a, 0xb0b0b0, 0x9a9a9a], disc: 0xe0e0e0 },
};

/** A tiling water picture with light ripples; the world scrolls its offset so the water flows. */
function waterTex(rep = 3) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g2 = c.getContext('2d');
  const gr = g2.createLinearGradient(0, 0, 256, 256);
  gr.addColorStop(0, '#5ac8ff'); gr.addColorStop(0.5, '#2a9ae0'); gr.addColorStop(1, '#4ab8f0');
  g2.fillStyle = gr; g2.fillRect(0, 0, 256, 256);
  g2.strokeStyle = 'rgba(255,255,255,.4)'; g2.lineWidth = 3;
  for (let i = 0; i < 18; i++) { g2.beginPath(); g2.ellipse((i * 83) % 256, (i * 57) % 256, 26 + (i % 3) * 8, 6, 0, 0, Math.PI * 2); g2.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rep, rep);
  return t;
}

// ---- the worlds -----------------------------------------------------------------------------------------------------
// ---- cartoon trees and grass tufts (puffy two-tone crowns with a bright highlight, thick trunks with roots; chunky blades) --------------
function cartoonTree(h = 4.6, fruit = 0) {
  const g = new THREE.Group();
  const k = h / 4.6;
  const bark = m(0x8a5428, 0.95), bark2 = m(0xa87238, 0.95);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3 * k, 0.5 * k, h * 0.55, 12), bark); trunk.position.y = h * 0.27; trunk.castShadow = true; g.add(trunk);
  for (let r = 0; r < 4; r++) { const a = (r / 4) * Math.PI * 2 + 0.4; const root = new THREE.Mesh(new THREE.ConeGeometry(0.2 * k, 0.5 * k, 6), bark2); root.position.set(Math.cos(a) * 0.42 * k, 0.12, Math.sin(a) * 0.42 * k); root.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); g.add(root); }
  const crown = new THREE.Group(); crown.position.y = h * 0.5;
  const greens = [0x2c9a46, 0x3cb552, 0x56cf68, 0x86e87c].map((c) => m(c, 0.85));
  for (const [x, y, z, r, c] of [[0, 0.7, 0, 1.35, 0], [-1.0, 0.3, 0.1, 1.0, 1], [1.0, 0.35, -0.1, 1.05, 1], [0, 1.45, 0, 1.0, 2], [-0.55, 1.1, 0.6, 0.75, 2], [0.6, 1.15, 0.55, 0.7, 3], [0.0, 0.1, 0.9, 0.75, 1], [-0.2, 1.9, 0.1, 0.55, 3]]) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(r * k * 1.05, 18, 14), greens[c]); b.position.set(x * k, y * k, z * k); b.castShadow = true; crown.add(b);
  }
  // soft highlights on the sunny side
  for (const [x, y, z, r] of [[-0.5, 1.7, 0.7, 0.42], [-1.1, 0.9, 0.9, 0.34], [0.5, 1.9, 0.5, 0.3]]) { const hl = new THREE.Mesh(new THREE.SphereGeometry(r * k, 12, 10), m(0xb8f59a, 0.7, { emissive: 0x4a9a4a, emissiveIntensity: 0.25 })); hl.position.set(x * k, y * k, z * k); crown.add(hl); }
  for (let f = 0; f < fruit; f++) { const a = f * 2.4, fr = new THREE.Mesh(new THREE.SphereGeometry(0.14 * k, 10, 8), m(f % 3 ? 0xe83a30 : 0xffd23a, 0.4)); fr.position.set(Math.cos(a) * 1.25 * k, (0.5 + (f % 4) * 0.35) * k, Math.sin(a) * 1.0 * k + 0.5 * k); crown.add(fr); }
  crown.userData.sway = { amp: 0.014, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.4 };
  g.add(crown);
  return g;
}

function grassTuft(scale = 1) {
  const g = new THREE.Group();
  const cols = [0x2fa046, 0x45c05a, 0x6ede6a, 0x9af088];
  for (let i = 0; i < 7; i++) {
    const hh = (0.45 + Math.random() * 0.4) * scale;
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.07 * scale, hh, 4), m(cols[i % 4], 0.8));
    const a = (i / 7) * Math.PI * 2;
    blade.position.set(Math.cos(a) * 0.09 * scale, hh / 2, Math.sin(a) * 0.09 * scale);
    blade.rotation.set(Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3);
    g.add(blade);
  }
  g.userData.sway = { amp: 0.1 + Math.random() * 0.06, ph: Math.random() * 6.28, sp: 1.2 + Math.random() * 0.8 };
  return g;
}


// ---- worlds made of the owner's pictures (2026-11-13) ---------------------------------------------------------------
/** A picture standing on the ground. opt: y, flip, center (pivot at the middle, for spinning), anim = {bob, sp, r, wsp, tilt, spin, drive, smooth}. */
function scenery(g, list) {
  const prop = (file, h, x, z, opt = {}) => {
    const w = new THREE.Group();
    const pc = artProp(file, h);
    if (opt.flip) pc.scale.x = -1;
    if (opt.center) pc.position.y = -h / 2;
    w.add(pc);
    const y = (opt.y ?? -0.2) + (opt.center ? h / 2 : 0);
    w.position.set(x, y, z);
    w.userData.base = { x, y };
    w.userData.ph = Math.random() * 6.28;
    if (opt.anim) { w.userData.anim = opt.anim; list.push(w); }
    if (opt.sway) w.userData.sway = { amp: opt.sway, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.6 };
    g.add(w);
    return w;
  };
  return prop;
}
function tickScenery(list, t, dt) {
  for (const w of list) {
    const a = w.userData.anim, b = w.userData.base, ph = w.userData.ph;
    if (a.drive) { w.position.x += dt * a.drive; if (a.drive > 0 && w.position.x > 17) w.position.x = -17; if (a.drive < 0 && w.position.x < -17) w.position.x = 17; }
    else if (a.r) w.position.x = b.x + Math.sin(t * (a.wsp || 0.3) + ph) * a.r;
    if (a.bob) w.position.y = b.y + (a.smooth ? Math.sin(t * (a.sp || 2) + ph) : Math.abs(Math.sin(t * (a.sp || 2) + ph))) * a.bob;
    if (a.tilt) w.rotation.z = Math.sin(t * (a.tsp || a.sp || 2) + ph) * a.tilt;
    if (a.spin) w.rotation.z += dt * a.spin;
  }
}
/** Falling snow: small white flakes that drift down and start again at the top. */
function makeSnowfall(g, n = 110) {
  const flakes = [];
  const geo = new THREE.SphereGeometry(0.06, 6, 5), mat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  for (let i = 0; i < n; i++) { const f = new THREE.Mesh(geo, mat); f.position.set(-15 + Math.random() * 30, Math.random() * 11, -10 + Math.random() * 18); f.userData.v = 0.5 + Math.random() * 0.7; f.userData.ph = Math.random() * 6; f.scale.setScalar(0.7 + Math.random() * 1.1); g.add(f); flakes.push(f); }
  return (dt, t) => { for (const f of flakes) { f.position.y -= dt * f.userData.v; f.position.x += Math.sin(t + f.userData.ph) * dt * 0.25; if (f.position.y < -0.1) { f.position.y = 11; f.position.x = -15 + Math.random() * 30; } } };
}
function panoPlane(g, name, bottom) {
  const pano = new THREE.Mesh(new THREE.PlaneGeometry(52, 26), new THREE.MeshBasicMaterial({ map: artTexture(name), toneMapped: false, depthWrite: false }));
  pano.position.set(0, bottom, -14.5); pano.renderOrder = -1; g.add(pano);
}
function pictureGround(g, tex, rx, ry, c1, c2) {
  const t = artTexture(tex, rx, ry);
  t.userData.strip = artTexture(tex, rx - 1, 0.5);
  ground(g, c1, c2, -0.2, t);
}

const BUILD = {
  // 1. the sunny pond (the first place)
  meadow(g) {
    // The first place, developed after the owner's own design picture (2026-11-13): a windmill whose blades turn, a red-roofed barn
    // with hay, a wooden fence, rolling hills, a pond with a stone rim, lily pads with pink lotus flowers, stepping stones and
    // bright flowers. Everything is made of shapes in code.
    addSky(g, { top: '#3a9cf2', horizon: '#c4ecff' });
    const clouds = addClouds(g, 8, { y: 9.5, z: -18 });
    // rolling hills and far mountains behind everything (only their tops show)
    for (const [x, z, r, c, y] of [[-14, -17, 9, 0x6cc860, -5.5], [2, -20, 12, 0x7ad06a, -8], [16, -16, 9, 0x62c05a, -5.2], [-4, -24, 14, 0x9ad89a, -9.5]]) {
      const h = sph(r, m(c, 1), x, y, z); h.scale.y = 0.55; h.castShadow = false; g.add(h);
    }
    for (const [x, z, h, c] of [[-18, -30, 9, 0x9ab8e8], [-2, -32, 11, 0xa8c4ee], [14, -30, 8, 0x9ab8e8]]) g.add(cone(h * 0.85, h, m(c, 1), x, h / 2 - 1.5, z, 5));
    scatter(g, [
            { t: 'bush', x: -8, z: 3.8, s: 0.9 }, { t: 'bush', x: 8.6, z: 3.5, s: 0.8 }, { t: 'bush', x: -10.5, z: 0.5, s: 0.9 }, { t: 'bush', x: 11, z: 1, s: 0.85 }, { t: 'rock', x: -7.4, z: 4.8, s: 0.55 }, { t: 'rock', x: 7.2, z: 5.2, s: 0.5 },
      ...Array.from({ length: 30 }, (_, i) => ({ t: 'flower', x: -12.5 + i * 0.86 + Math.sin(i) * 0.4, z: 6 + (i % 4) * 0.6 + Math.cos(i * 2) * 0.5 })),
      ...Array.from({ length: 8 }, (_, i) => ({ t: 'flower', x: -12 + i * 0.9, z: 1.5 + Math.sin(i * 1.7) * 0.8 })),
      ...Array.from({ length: 8 }, (_, i) => ({ t: 'flower', x: 8.2 + i * 0.7, z: 2 + Math.cos(i * 1.3) * 0.8 })),
    ], -0.2);
    // the lawn is the owner's grass texture (assets/games/art/ground_grass.webp), and a dirt path with grass edges leads to the house
    const lawn = artTexture('ground_grass', 12, 7);
    lawn.userData.strip = artTexture('ground_grass', 11, 0.55);
    ground(g, 0x86d46a, 0x76c85c, -0.2, lawn);
    const pathMat = new THREE.MeshStandardMaterial({ map: artTexture('ground_path', 1, 4.2), roughness: 1, transparent: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const path = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 15.5), pathMat);
    path.rotation.x = -Math.PI / 2; path.rotation.z = 0.1; path.position.set(7.6, -0.18, -0.4); path.receiveShadow = true; g.add(path);
    // a scenery picture standing on the ground that sways a little (the owner's props sheet)
    const prop = (file, h, x, z, sway = 0.012, flip = false) => {
      const w = new THREE.Group();
      const pc = artProp(file, h);
      if (flip) pc.scale.x = -1;
      w.add(pc);
      w.position.set(x, -0.2, z);
      if (sway) w.userData.sway = { amp: sway, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.6 };
      g.add(w);
      return w;
    };
    // the trees: the owner's big oak and apple trees, in two rows behind and at the sides
    for (const [f, h, x, z, fl] of [['tree_oak', 7.0, -11.6, -3.4, false], ['tree_apple', 5.6, 11.8, -3.0, false], ['tree_apple', 5.0, -4.4, -11.5, true], ['tree_oak', 5.4, 4.2, -12.0, true], ['tree_oak', 6.2, -14.6, -9.0, true], ['tree_apple', 5.6, 15.2, -9.5, true], ['tree_oak', 5.0, 0.6, -14.0, false]]) prop(f, h, x, z, 0.01, fl);
    // tufts of grass, clumps of flowers and hay (pictures), swaying
    for (let i = 0; i < 46; i++) {
      const side = i % 3;
      const x = side === 0 ? -13 + Math.random() * 26 : side === 1 ? (Math.random() < 0.5 ? -1 : 1) * (7.8 + Math.random() * 5.5) : -12 + Math.random() * 24;
      const z = side === 0 ? 4.4 + Math.random() * 4 : side === 1 ? -3 + Math.random() * 6 : -5.9 + Math.random() * 1.0;
      prop(`tuft_${1 + (i % 3)}`, 0.9 + Math.random() * 0.7, x, z, 0.05, Math.random() < 0.5);
    }
    for (const [x, z, h] of [[-12, 4.8, 1.4], [-9.2, 6.8, 1.2], [-5.8, 7.4, 1.3], [-1.5, 7.6, 1.2], [3.2, 7.4, 1.4], [7.4, 6.9, 1.3], [11.5, 5.2, 1.4], [12.5, 0.8, 1.2], [-12.8, 0.4, 1.2]]) prop('flowers_p', h, x, z, 0.04, x > 0);
    prop('hay_p', 1.7, 12.4, -3.8, 0, false);
    // the windmill (left, behind), after the owner's picture: a tall round tower of cream stone bricks with a red tiled cone roof, an
    // arched wooden door with steps, a window, and four big wooden lattice blades that turn
    const wm = new THREE.Group();
    const wood = m(0x9a6232, 0.9);
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.7, 5.0, 28), new THREE.MeshStandardMaterial({ map: brickTex([4, 3]), roughness: 0.95 }));
    tower.position.y = 2.5; tower.castShadow = true; wm.add(tower);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.35, 1.7, 28), new THREE.MeshStandardMaterial({ map: tileTex([5, 2]), roughness: 0.7 }));
    cap.position.y = 5.8; cap.castShadow = true; wm.add(cap);
    wm.add(cyl(1.05, 1.05, 0.14, m(0xb02a24, 0.7), 0, 4.98, 0, 28));
    const arch = cyl(0.36, 0.36, 0.12, wood, 0, 1.2, 1.6, 20); arch.rotation.x = Math.PI / 2; wm.add(arch, box(0.72, 1.2, 0.12, wood, 0, 0.6, 1.6));
    wm.add(box(0.62, 0.7, 0.1, m(0x8ac8f0, 0.25), 0, 3.1, 1.28), box(0.78, 0.1, 0.12, wood, 0, 2.72, 1.3), box(0.78, 0.1, 0.12, wood, 0, 3.48, 1.3));
    for (let k = 0; k < 4; k++) wm.add(box(1.5 - k * 0.1, 0.16, 0.7, m(0xb7a98c, 0.95), 0, 0.08 + k * 0.16, 2.0 - k * 0.06));
    const blades = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const arm = new THREE.Group();
      arm.add(box(0.18, 4.8, 0.08, wood, 0, 2.5, 0));
      arm.add(box(1.0, 3.6, 0.04, m(0xf2e6cc, 0.9, { transparent: true, opacity: 0.55 }), 0.6, 2.7, 0));
      for (let j = 0; j < 8; j++) arm.add(box(1.05, 0.07, 0.07, wood, 0.55, 0.9 + j * 0.52, 0));
      for (let j = 0; j < 4; j++) arm.add(box(0.07, 3.6, 0.07, wood, 0.3 + j * 0.28, 2.7, 0));
      arm.rotation.z = (k * Math.PI) / 2 + 0.3;
      blades.add(arm);
    }
    blades.position.set(0, 4.5, 1.55);
    wm.add(blades, sph(0.3, wood, 0, 4.5, 1.6));
    wm.position.set(-7.0, 0, -9.5);
    wm.scale.setScalar(0.9);
    g.add(wm);
    // the house (right, behind): the owner's own picture of the wooden house with the red tiled roof
    prop('house_p', 4.6, 8.6, -9.0, 0, false);
    // the wooden fence behind the pond (the owner's pictures side by side)
    for (let i = 0; i < 6; i++) prop('fence_p', 1.5, -11.2 + i * 4.4, -4.9, 0, false);
    // the pond with a stone rim, lily pads and pink lotus flowers
    const bank = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6.7, 0.3, 48), m(0xb89a64, 1)); bank.scale.z = 0.62; bank.position.y = -0.12; g.add(bank);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(6.1, 6.1, 0.3, 48), new THREE.MeshStandardMaterial({ map: waterTex(), roughness: 0.2, metalness: 0.1 }));
    water.scale.z = 0.58; water.position.y = -0.08; g.add(water);
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      const rk = makeRock(0.3 + ((i * 7) % 5) * 0.05); rk.position.set(Math.cos(a) * 6.45, 0.02, Math.sin(a) * 3.95); rk.rotation.y = a; g.add(rk);
    }
    const lotus = [];
    for (const [x, z, r] of [[-5.1, -1.7, 0.5], [4.9, -1.9, 0.6], [-4.6, 1.2, 0.45], [5.2, 1.0, 0.5], [-1.6, -2.6, 0.5], [2.4, -2.5, 0.42], [-3.2, 2.5, 0.4], [3.4, 2.6, 0.45]]) {
      g.add(cyl(r, r, 0.04, m(0x3aa84a), x, 0.1, z, 20));
      if (r >= 0.45) { const lp = artProp('lotus_p', 0.9); const w = new THREE.Group(); w.add(lp); w.position.set(x, 0.1, z); g.add(w); lotus.push(w); }
    }
    for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 1.1 + Math.PI * 1.05; g.add(cyl(0.03, 0.05, 1.5, m(0x4a9a3a), Math.cos(a) * 6.5, 0.5, Math.sin(a) * 3.9, 6)); }
    // stepping stones in the front left
    for (const [x, z, r] of [[-9, 5.6, 0.5], [-7.7, 5.1, 0.45], [-6.4, 4.8, 0.5], [-5.2, 4.9, 0.42], [-9.8, 6.4, 0.4]]) { const st = cyl(r, r * 1.05, 0.1, m(0xc8c0b0, 0.95), x, -0.15, z, 14); st.scale.z = 0.8; g.add(st); }
    return {
      pad: 'float',
      water: water.material,
      update: (dt, t) => {
        clouds.userData.drift(dt);
        blades.rotation.z -= dt * 0.7; // the windmill turns
        lotus.forEach((f, i) => { f.rotation.z = Math.sin(t * 1.1 + i) * 0.05; f.position.y = 0.1 + Math.sin(t * 1.3 + i * 1.7) * 0.02; });
      },
    };
  },
  // 2. the farm: red barn, silo, fence, hay, cows
  farm(g) {
    // The farm, built from the owner's own pictures (2026-11-13): his farm panorama stands far behind, the lawn is his grass texture,
    // two ploughed field patches use his field texture, and the barn, silo, windmill pump, gate fence, hay, tractor, crates, scarecrow
    // and sunflowers are his props. Everything stands BEHIND the rows of choices (z <= -5.4) or far to the sides / in front, so a
    // choice is never hidden by a prop.
    addSky(g, { top: '#4aa8f0', horizon: '#bfe6ff' });
    const lawn = artTexture('ground_grass', 12, 7);
    lawn.userData.strip = artTexture('ground_grass', 11, 0.55);
    ground(g, 0x86d46a, 0x76c85c, -0.2, lawn);
    // the panorama: the horizon of the picture (fence, barn, hills) sits just beyond the far edge of the lawn
    const pano = new THREE.Mesh(new THREE.PlaneGeometry(52, 26), new THREE.MeshBasicMaterial({ map: artTexture('farm_pano'), toneMapped: false, depthWrite: false }));
    pano.position.set(0, -8.6, -14.5); pano.renderOrder = -1; g.add(pano);
    // ploughed field patches (the owner's field texture) behind, left and right
    for (const x of [-12.5, 13]) {
      const f = new THREE.Mesh(new THREE.PlaneGeometry(9, 5), new THREE.MeshStandardMaterial({ map: artTexture('ground_farm', 2.2, 1.2), roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
      f.rotation.x = -Math.PI / 2; f.position.set(x, -0.17, -10.5); f.receiveShadow = true; g.add(f);
    }
    const prop = (file, h, x, z, sway = 0, flip = false) => {
      const w = new THREE.Group();
      const pc = artProp(file, h);
      if (flip) pc.scale.x = -1;
      w.add(pc);
      w.position.set(x, -0.2, z);
      if (sway) w.userData.sway = { amp: sway, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.6 };
      g.add(w);
      return w;
    };
    // far row (z -9 .. -12): barn, silo, the windmill pump, trees
    prop('barn_f', 5.2, -3.2, -11.5); prop('silo_f', 6.4, -7.4, -12);
    const pump = prop('pump_f', 6.2, 4.6, -11);
    prop('tree_oak', 6.4, -13.8, -9.5, 0.01, true); prop('tree_apple', 5.6, 14.2, -9.8, 0.01);
    // the gate fence runs across behind the choices
    for (const x of [-11.6, -6.8, -2, 2.8, 7.6, 12.4]) prop('gate_f', 1.9, x, -6.2);
    // hay, tractor, trough, scarecrow: at the sides, outside the choices
    prop('haystack_f', 2.0, -9.6, -5, 0); prop('hayroll_f', 1.5, -11.8, -3.4, 0);
    prop('tractor_f', 2.8, 12.6, -2.2, 0, true); prop('trough_f', 1.5, -13, -1);
    prop('scarecrow_f', 3.6, 9.2, -4.6, 0.03);
    // crates and sunflowers in front (low, at the edges)
    prop('crate_apple', 1.1, -10.8, 5.4); prop('crate_carrot', 1.1, 10.6, 5.6, 0, true); prop('crate_corn', 1.1, 12.2, 4.4);
    for (const [f, h, x, z] of [['sunflower_1', 2.6, -12.4, 3.4], ['sunflower_2', 2.4, -8.4, 6.2], ['sunflower_1', 2.2, 8.2, 6.4], ['sunflower_2', 2.8, 13.6, 1.6], ['sunflower_2', 2.4, -13.8, 6]]) prop(f, h, x, z, 0.04);
    for (let i = 0; i < 30; i++) prop(`tuft_${1 + (i % 3)}`, 0.8 + Math.random() * 0.6, -13 + Math.random() * 26, 4.6 + Math.random() * 3.8, 0.05, Math.random() < 0.5);
    // the animals live here: they breathe, wander a little and peck
    prop('f_coop', 2.4, -6.2, -7.6); prop('f_milk', 1.1, -6.8, 0.6); prop('f_barrow', 1.3, 7.4, 4.6, 0, true);
    const animals = [
      { w: prop('f_cow', 3.4, -8.0, -2.6), x: -8.0, r: 0.5, sp: 0.18, b: 0.03 }, { w: prop('f_sheep', 2.0, -6.2, -4.3, 0, true), x: -6.2, r: 0.4, sp: 0.22, b: 0.03 },
      { w: prop('f_pig', 2.1, 7.4, -1.6, 0, true), x: 7.4, r: 0.4, sp: 0.25, b: 0.03 }, { w: prop('f_horse', 3.5, 9.4, -3.4, 0, true), x: 9.4, r: 0.3, sp: 0.12, b: 0.02 },
      { w: prop('f_hen', 1.5, 6.4, 3.0), x: 6.4, r: 0.7, sp: 0.4, b: 0.05 }, { w: prop('f_rooster', 1.9, -7.4, 2.4), x: -7.4, r: 0.4, sp: 0.3, b: 0.04 },
      { w: prop('f_goat', 2.2, -4.8, -4.8), x: -4.8, r: 0.4, sp: 0.2, b: 0.03 }, { w: prop('f_donkey', 2.4, 5.4, -5.0, 0, true), x: 5.4, r: 0.4, sp: 0.16, b: 0.03 },
    ];
    return { pad: 'wood', padPics: ['f_pad_stump', 'f_pad_hay', 'f_pad_nest', 'f_pad_plank'], update: (dt, t) => {
      pump.rotation.z = Math.sin(t * 0.6) * 0.01;
      animals.forEach((a, i) => { a.w.position.x = a.x + Math.sin(t * a.sp + i) * a.r; a.w.position.y = -0.2 + Math.abs(Math.sin(t * 2 + i * 1.7)) * a.b; a.w.rotation.z = Math.sin(t * 1.5 + i) * 0.02; });
    } };
  },
  // 3. the beach and the sea, built from the owner's pictures (2026-11-13), with moving water, flying gulls, a jumping dolphin,
  // a walking crab, a bobbing boat and a flashing lighthouse
  beach(g) {
    addSky(g, { top: '#2a9cf2', horizon: '#c8f0ff' });
    const clouds = addClouds(g, 7, { y: 9.5, z: -18 });
    // the far sea (the top of the owner's water picture, flowing) and the sand in front
    const seaTex = artTexture('ground_water', 5, 0.38); seaTex.offset.y = 0.6;
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(80, 26), new THREE.MeshBasicMaterial({ map: seaTex, toneMapped: false }));
    sea.rotation.x = -Math.PI / 2; sea.position.set(0, -0.14, -18); g.add(sea);
    const sand = artTexture('ground_sand', 11, 6);
    sand.userData.strip = artTexture('ground_sand', 10, 0.5);
    ground(g, 0xf2c14a, 0xe8b440, -0.2, sand);
    // the shore: water -> foam -> sand (the whole picture), lapping in and out
    const shoreTex = artTexture('ground_water', 5, 1);
    const shore = new THREE.Mesh(new THREE.PlaneGeometry(80, 7), new THREE.MeshBasicMaterial({ map: shoreTex, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    shore.rotation.x = -Math.PI / 2; shore.position.set(0, -0.11, -8.6); g.add(shore);
    const things = [];
    const prop = (file, h, x, z, opt = {}) => {
      const w = new THREE.Group();
      const pc = artProp(file, h);
      if (opt.flip) pc.scale.x = -1;
      w.add(pc);
      w.position.set(x, opt.y ?? -0.2, z);
      if (opt.sway) w.userData.sway = { amp: opt.sway, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.6 };
      g.add(w);
      return w;
    };
    // far: lighthouse on its rocks, palms at the sides, the boat on the water
    const lighthouse = prop('b_lighthouse', 7.5, 13.4, -12.5, { y: -0.4 });
    const beam = new THREE.Mesh(new THREE.CircleGeometry(1.1, 24), new THREE.MeshBasicMaterial({ color: 0xfff2a0, transparent: true, opacity: 0.0, depthWrite: false, toneMapped: false }));
    beam.position.set(13.4, 6.6, -12.3); g.add(beam);
    prop('b_palm1', 6.4, -12.6, -7.5, { sway: 0.018 }); prop('b_palm2', 5.4, 11.4, -7.2, { sway: 0.02, flip: true });
    prop('b_palm2', 4.6, -7.8, -11.5, { sway: 0.02 }); prop('b_palm1', 5.0, 8.2, -12, { sway: 0.016, flip: true });
    const boat = prop('b_boat', 2.2, 2.4, -12.8, { y: -0.4 });
    prop('b_dock', 1.8, -3.6, -8.4, { y: -0.15 });
    // behind the choices there is nothing tall; at the sides: umbrella, chair, castle, rocks, surfboards
    prop('b_umbrella', 3.6, -11.2, -2.6, { sway: 0.01 }); prop('b_chair', 1.9, -12.6, -0.4);
    prop('b_castle', 2.4, 11.6, -2.8); prop('b_rocks', 1.7, 12.8, -5);
    prop('b_surf', 2.8, 9.6, -4.6, { sway: 0.01 }); prop('b_weed', 1.3, -8.8, -6.2, { sway: 0.05 });
    prop('b_bucket', 1.0, 10.6, 4.8); prop('b_shell', 0.8, -11, 5.6); prop('b_starfish', 0.8, 11.8, 6.2); prop('b_spiral', 0.7, -9.4, 7); prop('b_shell', 0.7, 8.6, 7.4, { flip: true });
    prop('b_palm2', 4.4, -14, 4.2, { sway: 0.02 });
    // living things: the crab walks along the sand, the dolphin leaps, fish and a jellyfish swim, gulls fly across
    const crab = prop('b_crab_walk', 0.95, -9, 3.6);
    const turtle = prop('b_turtle', 1.0, 6.2, -6.9, { y: -0.12 });
    const dolphin = prop('b_dolphin', 2.2, -6, -10, { y: -0.4 });
    const fish = [prop('b_clown', 0.8, 5, -9.4, { y: -0.1 }), prop('b_tang', 0.8, -9.4, -9.6, { y: -0.1 }), prop('b_yellowfish', 0.7, 0, -10.8, { y: -0.1 })];
    const jelly = prop('b_jelly', 1.1, 8.8, -9.8, { y: -0.1 });
    const gulls = [0, 1, 2].map((i) => { const w = new THREE.Group(); w.add(artProp(i % 2 ? 'b_gull_fly2' : 'b_gull_fly', 1.0 + i * 0.12)); w.position.set(-14 + i * 11, 6.2 + i * 0.9, -9 - i); g.add(w); return w; });
    const standGull = prop('b_gull', 1.1, -3.6, -8.1, { y: -0.12 });
    return {
      pad: 'float',
      update: (dt, t) => {
        clouds.userData.drift(dt);
        seaTex.offset.x = (t * 0.012) % 1; seaTex.offset.y = 0.6 + Math.sin(t * 0.5) * 0.02;
        shoreTex.offset.x = (-t * 0.01) % 1;
        shore.position.z = -8.6 + Math.sin(t * 0.7) * 0.35; // the waves come in and go out
        boat.position.y = -0.4 + Math.sin(t * 1.1) * 0.12; boat.rotation.z = Math.sin(t * 0.9) * 0.05; boat.position.x = 2.4 + Math.sin(t * 0.12) * 1.4;
        lighthouse.rotation.z = Math.sin(t * 0.4) * 0.002; beam.material.opacity = Math.max(0, Math.sin(t * 1.6)) * 0.85;
        crab.position.x = -9 + Math.sin(t * 0.5) * 2.0; crab.rotation.z = Math.sin(t * 8) * 0.06;
        // the dolphin leaps out of the sea in an arc every few seconds
        const k = (t % 7) / 1.6; dolphin.visible = k < 1;
        if (k < 1) { dolphin.position.x = -8 + k * 5; dolphin.position.y = -0.4 + Math.sin(k * Math.PI) * 2.4; dolphin.rotation.z = (0.5 - k) * 1.2; }
        fish.forEach((f, i) => { f.position.y = -0.1 + Math.sin(t * 1.3 + i * 2) * 0.12; f.position.x += Math.sin(t * 0.6 + i) * dt * 0.6; });
        jelly.position.y = -0.1 + Math.abs(Math.sin(t * 1.2)) * 0.35;
        turtle.position.x = 6.2 + Math.sin(t * 0.25) * 1.2; turtle.position.y = -0.12 + Math.sin(t * 1.4) * 0.05;
        gulls.forEach((w, i) => { w.position.x += dt * (0.9 + i * 0.25); if (w.position.x > 16) w.position.x = -16; w.children[0].scale.y = 1 + Math.sin(t * 6 + i) * 0.14; w.position.y = 6.2 + i * 0.9 + Math.sin(t * 0.8 + i) * 0.25; });
        standGull.position.y = -0.12 + Math.max(0, Math.sin(t * 2.2)) * 0.04;
      },
    };
  },
  // 4. space, from the owner's pictures (2026-11-13): moon ground, panorama of planets and nebula, and things that move: twinkling stars,
  // a shooting star and a comet crossing, a hovering UFO, a floating robot and astronaut pets, a turning satellite station and dish
  space(g) {
    addSky(g, { top: '#0b0a3a', horizon: '#2b1a6a' });
    const moon = artTexture('ground_moon', 11, 6);
    moon.userData.strip = artTexture('ground_moon', 10, 0.5);
    ground(g, 0x9a90c8, 0x8a80b8, -0.2, moon);
    const pano = new THREE.Mesh(new THREE.PlaneGeometry(52, 26), new THREE.MeshBasicMaterial({ map: artTexture('space_pano'), toneMapped: false, depthWrite: false }));
    pano.position.set(0, -4.4, -15); pano.renderOrder = -1; g.add(pano);
    const stars = new THREE.Group();
    for (let i = 0; i < 70; i++) { const st = sph(0.05 + (i % 3) * 0.03, new THREE.MeshBasicMaterial({ color: 0xffffe0, toneMapped: false }), (Math.random() - 0.5) * 44, 4 + Math.random() * 12, -14.6); st.userData.ph = Math.random() * 6; stars.add(st); }
    g.add(stars);
    const prop = (file, h, x, z, y = -0.2, flip = false, sway = 0) => {
      const w = new THREE.Group();
      const pc = artProp(file, h);
      if (flip) pc.scale.x = -1;
      w.add(pc);
      w.position.set(x, y, z);
      if (sway) w.userData.sway = { amp: sway, ph: Math.random() * 6.28, sp: 0.7 + Math.random() * 0.6 };
      g.add(w);
      return w;
    };
    prop('s_launch', 5.2, -8.2, -9.5); prop('s_rock', 2.4, 9.8, -8); prop('s_crystal', 2.2, -12.2, -4.4); prop('s_crystal', 1.6, 12.4, -3.6, -0.2, true);
    prop('s_rock', 1.5, -5.4, -9.2, -0.2, true);     const dish = prop('s_dish', 3.0, 7.4, -9.8); const rover = prop('s_rover', 2.0, 11.4, -1.0, -0.2, true);
    const ufo = prop('s_ufo', 2.4, -8.0, 3.2, 3.6); const station = prop('s_station', 3.0, 3.2, -11, 5.2);
    const robot = prop('s_robot', 2.0, 8.6, 0.8, 0.6); const alien = prop('s_alien', 2.6, -9.6, -2.0); const cat = prop('s_cat', 2.0, -12.0, 1.4, 1.0); const dog = prop('s_dog', 2.0, 12.6, 3.0, 1.2, true);
    const ring = prop('s_ringplanet', 2.6, -11.8, 8.2, 3.0); const blue = prop('s_blueplanet', 1.9, 6.4, -12.5, 6.8); const pink = prop('s_pinkplanet', 1.6, 9.6, 6.6, 5.6);
    const rocket = prop('s_rocket', 2.4, -1.0, -12.4, 2.2);
    const shoot = prop('s_shoot', 1.4, 0, -14, 8.6); const comet = prop('s_comet', 1.8, 0, -14, 9.4);
    prop('s_moon', 1.3, -3.6, -13, 8.4, false, 0.03); prop('s_star', 0.9, 4.2, -13.6, 9.6, false, 0.06); prop('s_helmet', 1.2, 10.6, -4.8);
    return {
      pad: 'rock', padPics: ['s_pad_moon', 's_pad_energy', 's_pad_metal', 's_pad_crystal'],
      update: (dt, t) => {
        for (const st of stars.children) st.scale.setScalar(0.7 + Math.sin(t * 2 + st.userData.ph) * 0.45);
        ufo.position.y = 3.6 + Math.sin(t * 1.1) * 0.35; ufo.position.x = -8 + Math.sin(t * 0.3) * 2.4; ufo.rotation.z = Math.sin(t * 0.9) * 0.08;
        station.rotation.z = Math.sin(t * 0.35) * 0.12; station.position.y = 5.2 + Math.sin(t * 0.5) * 0.2;
        dish.rotation.z = Math.sin(t * 0.8) * 0.06;
        rover.position.x = 11.4 + Math.sin(t * 0.4) * 0.6; rover.position.y = -0.2 + Math.abs(Math.sin(t * 6)) * 0.03;
        robot.position.y = 0.6 + Math.sin(t * 1.6) * 0.25; alien.rotation.z = Math.sin(t * 2.4) * 0.05;
        cat.position.y = 1.0 + Math.sin(t * 1.2 + 1) * 0.3; cat.rotation.z = Math.sin(t * 0.9) * 0.1; dog.position.y = 1.2 + Math.sin(t * 1.3 + 2) * 0.3; dog.rotation.z = Math.sin(t * 1.0 + 1) * -0.1;
        ring.rotation.z = Math.sin(t * 0.3) * 0.08; ring.position.y = 3.0 + Math.sin(t * 0.5) * 0.25; blue.position.y = 6.8 + Math.sin(t * 0.4 + 1) * 0.2; pink.position.y = 5.6 + Math.sin(t * 0.6 + 2) * 0.22;
        rocket.position.y = 2.2 + Math.sin(t * 1.5) * 0.18; rocket.rotation.z = Math.sin(t * 0.7) * 0.04;
        // the shooting star and the comet cross the sky now and then
        const k1 = (t % 9) / 3.2; shoot.visible = k1 < 1; if (k1 < 1) { shoot.position.x = 12 - k1 * 26; shoot.position.y = 9.4 - k1 * 3.5; }
        const k2 = ((t + 4.5) % 14) / 4.5; comet.visible = k2 < 1; if (k2 < 1) { comet.position.x = -13 + k2 * 26; comet.position.y = 10 - k2 * 3; }
      },
    };
  },
  // 5. the rainbow playground, all from the owner's pictures
  rainbow(g) {
    addSky(g, { top: '#8ad0ff', horizon: '#ffe0f0' });
    const clouds = addClouds(g, 5, { y: 9, z: -18 });
    pictureGround(g, 'ground_rainbow', 11, 6, 0x9ae05a, 0x8ad04a);
    panoPlane(g, 'rainbow_pano', -6.4);
    const live = []; const P = scenery(g, live);
    P('r_lolli', 5.0, -11.4, -6.4, { sway: 0.012 }); P('r_lolli', 4.4, 10.8, -7.4, { sway: 0.012, flip: true }); P('r_cotton', 4.4, -7.6, -9.6, { sway: 0.012 });
    P('r_carousel', 3.6, 9.2, -9.4, { sway: 0.006 }); P('r_gingerhouse', 2.8, 4.4, -11.4); P('r_slide', 2.4, -9.6, -3.2); P('r_swing', 2.8, 8.8, -4.2); P('r_seesaw', 1.3, -6.2, -5.6, { anim: { tilt: 0.05, sp: 1.2 } });
    P('r_balloons', 3.2, -5.2, -7.2, { y: 0.4, anim: { bob: 0.5, sp: 0.9, tilt: 0.06, smooth: true } }); P('r_balloons', 3.0, 6.6, -6.6, { y: 0.6, anim: { bob: 0.45, sp: 0.8, tilt: 0.06, smooth: true } }); P('r_balloons', 2.6, -11.8, -1.4, { y: 0.8, anim: { bob: 0.4, sp: 1.0, tilt: 0.07, smooth: true } });
    P('r_icecream', 1.6, 11.6, 0.8); P('r_candy', 0.8, -8.4, 6.0); P('r_cupcake', 1.4, -12.2, 1.4);
    P('r_unicorn', 2.6, -8.4, -1.2, { anim: { bob: 0.12, sp: 3, r: 0.8, wsp: 0.25, tilt: 0.03 } });
    P('r_butterfly', 1.0, -3, 6, { y: 2.4, anim: { bob: 0.9, sp: 1.3, r: 5, wsp: 0.35, smooth: true, tilt: 0.1 } }); P('r_butterfly', 0.9, 4, 5, { y: 3, anim: { bob: 0.8, sp: 1.5, r: 4, wsp: 0.4, smooth: true, tilt: 0.12 } });
    P('r_ladybug', 0.7, 7.8, 5.6, { anim: { r: 1.6, wsp: 0.4, bob: 0.03, sp: 6 } });
    P('r_kite', 2.4, -10.6, 3.0, { y: 3.6, anim: { bob: 0.7, sp: 0.9, r: 0.8, wsp: 0.5, smooth: true, tilt: 0.12 } }); P('r_pinwheel', 1.6, 10.2, -1.6, { center: true, y: 0.1, anim: { spin: 3 } });
    P('r_sun', 2.4, 10.4, 7.6, { center: true, y: 3.2, anim: { spin: 0.4 } }); P('r_cloud', 1.8, -14, -8, { y: 6.8, anim: { drive: 0.5 } }); P('r_cloud', 1.4, 3, -9, { y: 7.8, anim: { drive: 0.35 } });
    return { pad: 'cloud', padPics: ['r_pad_candy', 'r_pad_cloud', 'r_pad_rainbow', 'r_pad_cookie'], update: (dt, t) => { clouds.userData.drift(dt); tickScenery(live, t, dt); } };
  },
  // 6. the city, all from the owner's pictures; vehicles drive past, a helicopter and a plane fly over
  city(g) {
    addSky(g, { top: '#4aa8f0', horizon: '#d8f0ff' });
    pictureGround(g, 'ground_city', 11, 6, 0x9a9aa8, 0x8a8a98);
    panoPlane(g, 'city_pano', -7.6);
    const live = []; const P = scenery(g, live);
    P('c_skyscraper', 6.4, -11.2, -9.6); P('c_skyscraper', 6.0, 10.6, -10.4, { flip: true }); P('c_school', 4.2, -6.2, -11.4); P('c_hospital', 4.6, 5.8, -11.8); P('c_firestation', 3.6, -1.4, -12.6); P('c_house', 3.2, 12.6, -4.8);
    P('c_fountain', 2.0, 0.6, -8.2); P('c_lamp', 3.4, -7.8, -5.8); P('c_lamp', 3.4, 7.6, -5.8); P('c_light', 3.2, 11.2, -2.2); P('c_busstop', 2.6, -10.2, -3.4); P('c_bench', 1.2, -12.4, -0.2);
    P('c_mailbox', 1.5, 9.8, 1.6); P('c_tree', 2.8, -12.8, -6.4, { sway: 0.01 }); P('c_tree', 2.6, 13.2, -7.2, { sway: 0.01 }); P('c_tree', 2.2, 8.6, -6.2, { sway: 0.01 });
    P('c_citybus', 1.7, -16, -7.6, { anim: { drive: 1.5, bob: 0.03, sp: 7 } }); P('c_taxi', 1.3, 6, -8.6, { flip: true, anim: { drive: -1.9, bob: 0.03, sp: 8 } }); P('c_police', 1.3, -4, -9, { anim: { drive: 2.2, bob: 0.03, sp: 9 } });
    P('c_firetruck', 1.7, 12, -7.4, { flip: true, anim: { drive: -1.2, bob: 0.03, sp: 6 } }); P('c_schoolbus', 1.8, 2, -7.0, { anim: { drive: 1.0, bob: 0.03, sp: 5 } }); P('c_ambulance', 1.5, -10, -8.4, { flip: true, anim: { drive: -1.6, bob: 0.03, sp: 7 } }); P('c_tram', 1.6, 14, -9.6, { flip: true, anim: { drive: -0.8 } });
    P('c_bike', 1.4, -15, 6.4, { anim: { drive: 1.3, bob: 0.05, sp: 6 } });
    P('c_heli', 1.8, -14, -8, { y: 7.2, anim: { drive: 1.6, bob: 0.25, sp: 2, smooth: true } }); P('c_plane', 1.5, 10, -9, { y: 9.2, flip: true, anim: { drive: -2.4 } });
    return { pad: 'stone', padPics: ['c_pad_manhole', 'c_pad_tire', 'c_pad_round', 'c_pad_cone'], update: (dt, t) => { tickScenery(live, t, dt); } };
  },
  // 7. the snowy mountains, all from the owner's pictures, with falling snow and moving animals
  snow(g) {
    addSky(g, { top: '#4a9cf0', horizon: '#f0e0ff' });
    pictureGround(g, 'ground_snow', 11, 6, 0xeef4ff, 0xe0ecff);
    panoPlane(g, 'snow_pano', -8.4);
    const live = []; const P = scenery(g, live);
    P('w_pine1', 5.6, -11.6, -6.6, { sway: 0.008 }); P('w_pine1', 5.2, 11, -7.4, { sway: 0.008, flip: true }); P('w_pine2', 4.2, -7.8, -9.8, { sway: 0.008 }); P('w_pine2', 4.0, 8.4, -10.2, { sway: 0.008, flip: true });
    P('w_cabin', 4.4, 5.2, -11.8); P('w_igloo', 2.8, -4.4, -11.6); P('w_snowman', 3.2, -8.8, -2.6, { anim: { tilt: 0.03, sp: 1.2 } }); P('w_sled', 1.3, 10.2, -1.4); P('w_snowballs', 1.0, -6.2, -5.2); P('w_iceblock', 1.5, 12.6, 0.8);
    P('w_crystal', 2.1, -12.6, -1.2); P('w_pond', 1.4, 8.4, -5.8, { y: -0.17 }); P('w_sign', 2.2, -10.6, 2.4); P('w_skis', 2.2, 11.6, 3.2);
    P('w_penguin', 1.9, -7.2, 0.6, { anim: { r: 0.9, wsp: 0.35, tilt: 0.1, sp: 5, bob: 0.03 } }); P('w_bear', 2.5, 7.8, -2.4, { anim: { bob: 0.04, sp: 1.6, r: 0.4, wsp: 0.2 } }); P('w_fox', 1.7, -11, 3.6, { anim: { r: 0.8, wsp: 0.4, bob: 0.04, sp: 3 } });
    P('w_rabbit', 1.3, 9.8, 4.6, { anim: { bob: 0.55, sp: 3.4, r: 1.2, wsp: 0.5 } }); P('w_owl', 1.7, -5.6, -6.4, { anim: { tilt: 0.05, sp: 0.8 } }); P('w_reindeer', 3.1, 4.6, -6.6, { anim: { bob: 0.04, sp: 1.2, r: 0.5, wsp: 0.15, tilt: 0.02 } });
    P('w_seal', 1.5, 6.4, 3.8, { anim: { bob: 0.1, sp: 1.4, tilt: 0.05, smooth: true } }); P('w_chick', 1.1, -9, 5.2, { anim: { r: 1.0, wsp: 0.6, bob: 0.1, sp: 6 } });
    const snowfall = makeSnowfall(g);
    return { pad: 'ice', padPics: ['w_pad_ice', 'w_pad_snow', 'w_pad_log', 'w_pad_crystal'], update: (dt, t) => { tickScenery(live, t, dt); snowfall(dt, t); } };
  },
  // 8. the castle, all from the owner's pictures; flags wave and the people and animals move about
  castle(g) {
    addSky(g, { top: '#3a9cf2', horizon: '#c8ecff' });
    const clouds = addClouds(g, 4, { y: 10, z: -18 });
    pictureGround(g, 'ground_castle', 10, 5.5, 0xb8aa88, 0xa89a78);
    panoPlane(g, 'castle_pano', -7.8);
    const live = []; const P = scenery(g, live);
    P('k_tower', 5.8, -11.8, -8.2); P('k_tower', 5.4, 11.4, -8.6, { flip: true }); P('k_gate', 4.6, -1.2, -12.4); P('k_wall', 2.8, -6.2, -9.8); P('k_wall', 2.8, 6.4, -10.2);
    P('k_stall', 3.0, 10.4, -4.2); P('k_well', 2.3, -9.8, -3.6); P('k_chest', 1.3, 11.8, 1.8); P('k_catapult', 2.5, -12.8, -0.8); P('k_cannon', 1.8, 12.8, -1.8); P('k_shield', 1.9, -8.2, 3.6); P('k_cottage', 3.2, -14, -5.8);
    P('k_banner', 3.6, -5.2, -6.6, { sway: 0.05 }); P('k_banner', 3.6, 5.6, -6.8, { sway: 0.05 }); P('k_torch', 2.4, -7.2, -7.0, { anim: { tilt: 0.03, sp: 6 } }); P('k_torch', 2.4, 8.2, -7.0, { anim: { tilt: 0.03, sp: 7 } });
    P('k_knight', 3.1, -8.8, -1.0, { anim: { bob: 0.05, sp: 2, tilt: 0.03 } }); P('k_princess', 3.0, 8.6, -1.6, { anim: { bob: 0.05, sp: 1.6, tilt: 0.03 } }); P('k_king', 3.3, -6.6, -4.4, { anim: { tilt: 0.03, sp: 1.2 } }); P('k_queen', 3.0, 6.8, -4.8, { anim: { tilt: 0.03, sp: 1.1 } });
    P('k_dragon', 3.0, 11.6, 3.4, { flip: true, anim: { bob: 0.08, sp: 2, tilt: 0.04 } }); P('k_horse', 3.0, -12, 2.2, { anim: { bob: 0.04, sp: 1.8, r: 0.5, wsp: 0.2 } }); P('k_jester', 2.6, 9.8, 5.0, { anim: { bob: 0.35, sp: 3.2 } }); P('k_wizard', 3.0, -9.8, 4.6, { anim: { tilt: 0.04, sp: 1.4 } });
    return { pad: 'stone', padPics: ['k_pad_stone', 'k_pad_velvet', 'k_pad_shield', 'k_pad_gold'], update: (dt, t) => { clouds.userData.drift(dt); tickScenery(live, t, dt); } };
  },
};

/** A little flock of birds flying across the sky (two flapping wings each). */
function makeBirds(n, y, z, spread) {
  const grp = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0x2a2a3a, side: THREE.DoubleSide, toneMapped: false });
  for (let i = 0; i < n; i++) {
    const b = new THREE.Group();
    for (const sgn of [-1, 1]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.18), mat);
      w.geometry.translate(sgn * 0.35, 0, 0);
      w.userData.sgn = sgn;
      b.add(w);
    }
    b.position.set(-spread + (i / n) * spread * 2, y + Math.sin(i * 2.1) * 1.4, z - (i % 3));
    b.userData = { v: 1.1 + (i % 3) * 0.35, ph: i * 1.3, y0: b.position.y };
    grp.add(b);
  }
  grp.userData.update = (dt, t) => {
    for (const b of grp.children) {
      b.position.x += b.userData.v * dt;
      if (b.position.x > spread + 2) b.position.x = -spread - 2;
      b.position.y = b.userData.y0 + Math.sin(t * 1.3 + b.userData.ph) * 0.35;
      for (const w of b.children) w.rotation.z = w.userData.sgn * Math.sin(t * 9 + b.userData.ph) * 0.7;
    }
  };
  return grp;
}

/** Butterflies fluttering over the flowers. */
function makeButterflies(n, x0, x1, z) {
  const grp = new THREE.Group();
  const cols = [0xff6ab8, 0xffc83a, 0x7ad8ff, 0xb87aff];
  for (let i = 0; i < n; i++) {
    const b = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: cols[i % 4], side: THREE.DoubleSide, toneMapped: false });
    for (const sgn of [-1, 1]) { const w = new THREE.Mesh(new THREE.CircleGeometry(0.16, 10), mat); w.position.x = sgn * 0.12; w.userData.sgn = sgn; b.add(w); }
    b.userData = { cx: x0 + (x1 - x0) * (i / Math.max(1, n - 1)), ph: i * 1.9, r: 1 + (i % 3) * 0.5 };
    b.position.z = z;
    grp.add(b);
  }
  grp.userData.update = (dt, t) => {
    for (const b of grp.children) {
      const u = b.userData;
      b.position.x = u.cx + Math.sin(t * 0.5 + u.ph) * u.r;
      b.position.y = 1.4 + Math.sin(t * 0.9 + u.ph * 2) * 0.5 + Math.sin(t * 2.3 + u.ph) * 0.1;
      for (const w of b.children) w.rotation.y = w.userData.sgn * (0.2 + Math.abs(Math.sin(t * 14 + u.ph)) * 1.1);
    }
  };
  return grp;
}

/** A fish that leaps out of the pond now and then, with a splash ring. */
function makeJumper() {
  const g = new THREE.Group();
  const fish = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), m(0xff8a3a, 0.4));
  fish.scale.set(1.6, 0.8, 0.8);
  const tail = cone(0.14, 0.3, m(0xff8a3a, 0.4), -0.34, 0, 0, 3); tail.rotation.z = Math.PI / 2;
  fish.add(tail);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 6, 24), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, toneMapped: false }));
  ring.rotation.x = Math.PI / 2;
  g.add(fish, ring);
  g.userData = { t: 6 * Math.random(), x: 0 };
  g.userData.update = (dt) => {
    const u = g.userData;
    u.t += dt;
    const cycle = 7, k = u.t % cycle;
    if (k < 1.2) {
      if (k < dt) u.x = (Math.random() - 0.5) * 6;
      const e = k / 1.2;
      fish.visible = true;
      fish.position.set(u.x + e * 1.6, Math.sin(e * Math.PI) * 1.5 - 0.1, -0.6);
      fish.rotation.z = Math.cos(e * Math.PI) * 0.9;
      ring.position.set(u.x, 0.02, -0.6);
      ring.scale.setScalar(0.5 + e * 2.2);
      ring.material.opacity = Math.max(0, 0.7 - e * 0.7);
    } else { fish.visible = false; ring.material.opacity = 0; }
  };
  return g;
}

/** Life for every world: swaying trees and flowers, and what suits the place (birds, butterflies, a leaping fish, moving water). */
function decorate(id, g, water) {
  const ups = [];
  const sways = [];
  g.traverse((o) => { if (o.userData && o.userData.sway) sways.push(o); });
  const add = (obj) => { g.add(obj); ups.push(obj.userData.update); };
  if (['meadow', 'farm', 'rainbow', 'castle', 'city', 'snow'].includes(id)) add(makeBirds(id === 'snow' ? 3 : 5, 6.5, -14, 18));
  if (['meadow', 'rainbow', 'farm', 'castle'].includes(id)) add(makeButterflies(4, -7, 7, 5.2));
  if (id === 'meadow') add(makeJumper());
  return (dt, t) => {
    for (const o of sways) { const w = o.userData.sway; o.rotation.z = Math.sin(t * w.sp + w.ph) * w.amp; }
    for (const u of ups) u(dt, t);
    if (water) { water.map.offset.x = (t * 0.02) % 1; water.map.offset.y = (t * 0.012) % 1; }
  };
}

export const WORLD_IDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle'];
export const WORLD_NAMES = { meadow: 'البركة', farm: 'المزرعة', beach: 'الشاطئ', space: 'الفضاء', rainbow: 'ملعب قوس قزح', city: 'المدينة', snow: 'جبال الثلج', castle: 'القلعة' };

export function buildWorld(id) {
  const group = new THREE.Group();
  const info = BUILD[id](group);
  group.visible = false;
  const life = decorate(id, group, info.water);
  // A seam for the walk between places: while two worlds slide past each other, each one is cut by a vertical plane that moves
  // with the scroll (the old world keeps what is left of it, the new one what is right of it), so the two floors never overlap
  // (no flicker where both are at the same height, no colour pop at the end). Off = nothing is cut. The sky (first child) is not cut.
  const clip = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 1e5);
  group.children.slice(1).forEach((c) => c.traverse((o) => {
    for (const mat of [].concat(o.material || [])) mat.clippingPlanes = [clip];
  }));
  const seam = (mode, x = 0) => {
    if (mode === 'old') { clip.normal.set(-1, 0, 0); clip.constant = x; } // keeps everything left of x
    else if (mode === 'new') { clip.normal.set(1, 0, 0); clip.constant = -x; } // keeps everything right of x
    else { clip.normal.set(-1, 0, 0); clip.constant = 1e5; }
  };
  return { id, group, pad: info.pad, padPics: info.padPics, seam, update: (dt, t) => { info.update(dt, t); life(dt, t); } };
}
export { makeTree };
