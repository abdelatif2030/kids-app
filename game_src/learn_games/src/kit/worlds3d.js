// The places of the learning world (owner 2026-11-12: "the start is in one place and after each level we move to another,
// different place", like the environment cards of the reference sheet). Each world is a THREE.Group built from shapes in
// code: sky, ground, scenery and the look of the floating pads the pictures stand on. `buildWorld(id)` returns
// { group, pad, update(dt, time) }. Nothing is downloaded.
import * as THREE from 'three';
import { addSky, addClouds, scatter, makeTree, makeFlower, makeRock } from './realism.js';
import { makeThing } from './things3d.js';
import { artProp } from './actors.js';

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
  const strip = box(70, 0.4, 3.4, m(stripColor, 1), 0, -0.05, 3.2); // as wide as the floor: no visible ends while worlds slide past
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
    ground(g, 0x86d46a, 0x76c85c, -0.2, grassTex([10, 6]));
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
    wm.scale.setScalar(1.15);
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
    addSky(g, { top: '#4aa8f0', horizon: '#ffeec8' });
    const clouds = addClouds(g, 6, { y: 9, z: -18 });
    ground(g, 0x9ad060, 0x8ac050);
    const red = m(0xd8302a, 0.7), wh = m(0xffffff, 0.6);
    g.add(box(5, 3.2, 3.6, red, -7.5, 1.6, -6));
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 2.9, 1.6, 4, 1), m(0x6a3a2a, 0.8)); roof.rotation.y = Math.PI / 4; roof.scale.set(1.25, 1, 0.9); roof.position.set(-7.5, 4.0, -6); roof.castShadow = true; g.add(roof);
    g.add(box(1.6, 2.2, 0.1, wh, -7.5, 1.1, -4.15)); g.add(box(0.12, 2.2, 0.12, red, -7.5, 1.1, -4.1));
    g.add(cyl(1.0, 1.0, 5, m(0xc8c8d0, 0.5), -3.2, 2.5, -7.5)); g.add(sph(1.0, m(0xb8b8c0, 0.5), -3.2, 5.0, -7.5));
    for (let i = -8; i <= 8; i++) { g.add(box(0.2, 1.2, 0.15, wh, i * 1.1, 0.6, -3.4)); }
    g.add(box(19, 0.14, 0.1, wh, 0, 0.5, -3.4), box(19, 0.14, 0.1, wh, 0, 1.0, -3.4));
    for (const [x, z] of [[8, -4], [10, -6], [6, -7]]) { const b = cyl(0.8, 0.8, 1.0, m(0xe8c050, 0.9), x, 0.5, z, 20); b.rotation.z = Math.PI / 2; g.add(b); }
    const cow = makeThing('cow'); cow.scale.setScalar(1.8); cow.position.set(7.5, -0.2, -2.2); cow.rotation.y = -0.5; g.add(cow);
    const sheep = makeThing('sheep'); sheep.scale.setScalar(1.6); sheep.position.set(-3.5, -0.2, -2.6); sheep.rotation.y = 0.4; g.add(sheep);
    scatter(g, [{ t: 'tree', x: 11, z: -9, s: 5 }, { t: 'tree', x: -12, z: -9, s: 4.6 }, ...Array.from({ length: 16 }, (_, i) => ({ t: 'flower', x: -11 + i * 1.4, z: 6 + (i % 3) * 0.6 }))], -0.2);
    return { pad: 'wood', update: (dt, t) => { clouds.userData.drift(dt); cow.position.y = -0.2 + Math.abs(Math.sin(t * 1.2)) * 0.03; } };
  },
  // 3. the beach and the sea
  beach(g) {
    addSky(g, { top: '#3aa0f0', horizon: '#bfeaff' });
    const clouds = addClouds(g, 6, { y: 8, z: -18 });
    ground(g, 0xf0d8a0, 0xe8c888);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(80, 18), new THREE.MeshStandardMaterial({ map: waterTex(8), roughness: 0.15, metalness: 0.15 }));
    sea.rotation.x = -Math.PI / 2; sea.position.set(0, -0.15, -11); g.add(sea);
    for (const x of [-9, -5, 9, 12]) {
      const t = new THREE.Group();
      const trunk = cyl(0.18, 0.28, 4.2, m(0x8a5a2a), 0, 2.1, 0, 8); trunk.rotation.z = x > 0 ? -0.15 : 0.15; t.add(trunk);
      for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; const leaf = cone(0.35, 2.4, m(0x2aa84a), Math.cos(a) * 1.0, 4.3, Math.sin(a) * 1.0, 6); leaf.rotation.z = Math.cos(a) * 1.2; leaf.rotation.x = -Math.sin(a) * 1.2; t.add(leaf); }
      t.position.set(x, -0.2, -5); g.add(t);
    }
    const um = new THREE.Group(); um.add(cyl(0.05, 0.05, 2.2, m(0xffffff), 0, 1.1, 0, 6)); um.add(cone(1.5, 0.7, m(0xff4a4a), 0, 2.4, 0, 12)); um.position.set(-7, -0.2, 2.2); g.add(um);
    const boat = makeThing('boat'); boat.scale.setScalar(2.2); boat.position.set(4, -0.1, -9); g.add(boat);
    for (let i = 0; i < 10; i++) g.add(sph(0.12, m([0xff9ab8, 0xfff0e0, 0xffb870][i % 3]), -10 + i * 2.2, -0.05, 5.5 + (i % 3) * 0.5));
    return { pad: 'float', water: sea.material, update: (dt, t) => { clouds.userData.drift(dt); boat.position.y = -0.1 + Math.sin(t) * 0.12; boat.rotation.z = Math.sin(t * 0.8) * 0.05; } };
  },
  // 4. space: stars, planets, a rocket
  space(g) {
    addSky(g, { top: '#07072a', horizon: '#2a1a5a' });
    ground(g, 0x6a6a86, 0x5a5a76);
    const stars = new THREE.Group();
    for (let i = 0; i < 90; i++) { const s = sph(0.05 + (i % 3) * 0.03, new THREE.MeshBasicMaterial({ color: 0xffffe0, toneMapped: false }), (Math.random() - 0.5) * 60, 3 + Math.random() * 18, -20 - Math.random() * 10); s.userData.ph = Math.random() * 6; stars.add(s); }
    g.add(stars);
    const planet = (r, c, x, y, z, ring) => { const p = new THREE.Group(); p.add(sph(r, m(c, 0.5), 0, 0, 0)); if (ring) { const rg = new THREE.Mesh(new THREE.TorusGeometry(r * 1.6, r * 0.12, 6, 40), m(0xe8d0a0, 0.6)); rg.rotation.x = 1.2; p.add(rg); } p.position.set(x, y, z); g.add(p); return p; };
    const p1 = planet(2.2, 0xe8a05a, -9, 8, -16, true), p2 = planet(1.4, 0x5aa8e8, 8, 11, -18), p3 = planet(0.9, 0xe85a8a, 3, 6, -14);
    const rocket = makeThing('rocket'); rocket.scale.setScalar(3.2); rocket.position.set(9, -0.2, -3.5); g.add(rocket);
    for (const [x, z, r] of [[-8, -3, 1.2], [-5, -5, 0.8], [6, 4.4, 0.6]]) { const c = cyl(r, r * 1.1, 0.25, m(0x555570, 1), x, -0.1, z, 20); g.add(c); }
    return { pad: 'rock', update: (dt, t) => { for (const s of stars.children) s.scale.setScalar(0.7 + Math.sin(t * 2 + s.userData.ph) * 0.4); p1.rotation.y = t * 0.1; p2.position.y = 11 + Math.sin(t * 0.5) * 0.3; p3.position.y = 6 + Math.sin(t * 0.7) * 0.2; rocket.position.y = -0.2 + Math.sin(t * 1.5) * 0.04; } };
  },
  // 5. the rainbow playground
  rainbow(g) {
    addSky(g, { top: '#8ad0ff', horizon: '#ffe0f0' });
    const clouds = addClouds(g, 9, { y: 7, z: -14 });
    ground(g, 0xb8e890, 0xa8d880);
    const cols = [0xe8302a, 0xff8a1a, 0xffd21a, 0x2aa84a, 0x2a8ae8, 0x9a4ad8];
    cols.forEach((c, i) => { const arc = new THREE.Mesh(new THREE.TorusGeometry(7.5 - i * 0.55, 0.28, 10, 48, Math.PI), m(c, 0.5)); arc.position.set(0, -0.2, -8); g.add(arc); });
    for (let i = 0; i < 8; i++) { const s = cone(0.4, 0.8, m([0xffd21a, 0xff7ab8, 0x7ad8ff][i % 3], 0.4), -11 + i * 3.2, 1 + (i % 3) * 0.6, -5.5, 5); s.rotation.z = Math.PI; g.add(s); }
    scatter(g, Array.from({ length: 26 }, (_, i) => ({ t: 'flower', x: -12 + i * 0.95, z: 5.6 + (i % 4) * 0.5 })), -0.2);
    scatter(g, [{ t: 'tree', x: -10, z: -4, s: 4.4 }, { t: 'tree', x: 10, z: -4.5, s: 4.8, c: 0xff8ab8 }], -0.2);
    return { pad: 'cloud', update: (dt) => clouds.userData.drift(dt) };
  },
  // 6. the city street with a school bus
  city(g) {
    addSky(g, { top: '#6ab8f0', horizon: '#e0f0ff' });
    const clouds = addClouds(g, 5, { y: 10, z: -18 });
    ground(g, 0x7a7a86, 0x6a6a76);
    const cols = [0xe86a5a, 0xf0b84a, 0x5ab0e8, 0xa86ad8, 0x6ad8a0, 0xf08ab8];
    for (let i = 0; i < 9; i++) {
      const h = 4 + (i * 7) % 5, x = -13 + i * 3.3;
      g.add(box(2.8, h, 2.4, m(cols[i % 6], 0.7), x, h / 2 - 0.2, -8));
      for (let r = 0; r < Math.floor(h / 1.2); r++) for (let c = -1; c <= 1; c++) g.add(box(0.5, 0.6, 0.05, m(0xcfe8ff, 0.2), x + c * 0.8, 0.7 + r * 1.2, -6.78));
    }
    g.add(box(40, 0.05, 3, m(0x3a3a46, 0.9), 0, -0.17, -3.8));
    for (let i = 0; i < 12; i++) g.add(box(1.0, 0.06, 0.2, m(0xffe05a), -12 + i * 2.2, -0.13, -3.8));
    // Traffic: the car and bus pictures are SIDE views facing left, so they stay square to the camera (no turning: a turned
    // picture is seen edge-on and looks squashed) and drive to the left along the road, then come back in from the right.
    const traffic = [[makeThing('bus'), 2.5, 1.1, 4], [makeThing('car'), 1.7, 1.7, -7]];
    for (const [v, sc, , x0] of traffic) { v.scale.setScalar(sc); v.position.set(x0, -0.1, -3.7); g.add(v); }
    scatter(g, [{ t: 'tree', x: -11, z: -2, s: 3.4 }, { t: 'tree', x: 11, z: -1.5, s: 3.2 }], -0.2);
    return { pad: 'wood', update: (dt, t) => { clouds.userData.drift(dt); for (const [v, , sp] of traffic) { v.position.x -= sp * dt; if (v.position.x < -17) v.position.x = 17; } } };
  },
  // 7. the snowy mountains and pines
  snow(g) {
    addSky(g, { top: '#8ac0e8', horizon: '#f0f8ff' });
    const clouds = addClouds(g, 5, { y: 11, z: -18 });
    ground(g, 0xf4f8ff, 0xe8f0fa);
    for (const [x, s] of [[-9, 6], [-2, 7.5], [7, 6.5], [13, 5]]) { g.add(cone(s * 0.7, s, m(0x7a8ab0, 0.9), x, s / 2 - 0.2, -12, 6)); g.add(cone(s * 0.3, s * 0.38, m(0xffffff, 0.6), x, s * 0.82 - 0.2, -12, 6)); }
    for (const [x, z, s] of [[-8, -4, 3.6], [-6, -5, 3], [8, -4.5, 3.8], [10, -3.6, 3], [-11, -2, 3.2]]) {
      const t = new THREE.Group(); for (let i = 0; i < 3; i++) t.add(cone(1.1 - i * 0.25, 1.6, m(0x2a8a4a, 0.85), 0, 1.4 + i * 0.9, 0)); t.add(cyl(0.18, 0.2, 1, m(0x6a4a2a), 0, 0.5, 0)); t.scale.setScalar(s / 3.2); t.position.set(x, -0.2, z); g.add(t);
    }
    const snowman = new THREE.Group(); snowman.add(sph(0.7, m(0xffffff, 0.5), 0, 0.7, 0), sph(0.5, m(0xffffff, 0.5), 0, 1.6, 0), sph(0.35, m(0xffffff, 0.5), 0, 2.25, 0), cone(0.07, 0.4, m(0xff7a1a), 0, 2.25, 0.35, 8)); snowman.children[3].rotation.x = Math.PI / 2; snowman.position.set(7, -0.2, 2.6); g.add(snowman);
    const flakes = new THREE.Group();
    for (let i = 0; i < 80; i++) { const f = sph(0.06, new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), (Math.random() - 0.5) * 30, Math.random() * 12, -6 + Math.random() * 12); f.userData.v = 0.5 + Math.random(); flakes.add(f); }
    g.add(flakes);
    return { pad: 'ice', update: (dt, t) => { clouds.userData.drift(dt); for (const f of flakes.children) { f.position.y -= f.userData.v * dt; f.position.x += Math.sin(t + f.userData.v * 7) * dt * 0.3; if (f.position.y < 0) f.position.y = 12; } } };
  },
  // 8. the castle at sunset
  castle(g) {
    addSky(g, { top: '#ff9a6a', horizon: '#ffe8a0' });
    const clouds = addClouds(g, 6, { y: 9, z: -18 });
    ground(g, 0x7ac860, 0x6ab850);
    const stone = m(0xe8dcc8, 0.8), roofM = m(0xd8302a, 0.6);
    g.add(box(7, 4.2, 3, stone, 0, 2.1 - 0.2, -9));
    for (const x of [-4.2, 4.2]) { g.add(cyl(1.2, 1.2, 5.6, stone, x, 2.6, -9, 20)); g.add(cone(1.5, 2.2, roofM, x, 6.5, -9, 20)); }
    g.add(cyl(1.0, 1.0, 6.8, stone, 0, 3.2, -10, 20)); g.add(cone(1.3, 2.4, roofM, 0, 7.8, -10, 20));
    g.add(box(1.6, 2.4, 0.1, m(0x6a3a2a, 0.8), 0, 1.0, -7.45)); g.add(cyl(0.8, 0.8, 0.1, m(0x6a3a2a, 0.8), 0, 2.2, -7.45, 16));
    for (const x of [-4.2, 0, 4.2]) { const f = box(0.05, 0.9, 0.05, m(0x6a4a2a), x, 9.4, -9); g.add(f); g.add(box(0.7, 0.4, 0.04, m(0xff4a7a), x + 0.35, 9.6, -9)); }
    for (let i = 0; i < 6; i++) g.add(box(0.3, 0.9, 0.3, stone, -8 + i * 3.2, 0.3, -5.2));
    scatter(g, [{ t: 'tree', x: -10, z: -5, s: 4.6 }, { t: 'tree', x: 10.5, z: -5, s: 4.4 }, ...Array.from({ length: 18 }, (_, i) => ({ t: 'flower', x: -12 + i * 1.4, z: 6 + (i % 3) * 0.6 }))], -0.2);
    return { pad: 'stone', update: (dt) => clouds.userData.drift(dt) };
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
  if (['meadow', 'farm', 'beach', 'rainbow', 'castle', 'city', 'snow'].includes(id)) add(makeBirds(id === 'snow' ? 3 : 5, 6.5, -14, 18));
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
  return { id, group, pad: info.pad, seam, update: (dt, t) => { info.update(dt, t); life(dt, t); } };
}
export { makeTree };
