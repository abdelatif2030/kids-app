import { outline as _ol } from './fx.js';
// Temple Army art: every model is built from three.js primitives and canvas textures in code. No files.
import * as THREE from 'three';
import { TILE, SKINS } from './sim.js';

export const geo = {
  sphere: new THREE.SphereGeometry(0.5, 14, 10), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 14), box: new THREE.BoxGeometry(1, 1, 1),
  cone: new THREE.ConeGeometry(0.5, 1, 10), low: new THREE.SphereGeometry(0.5, 8, 6), hemi: new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2),
};
const mats = new Map();
export const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
export function mesh(g, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const rngf = (seed) => { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; };
const hex = (c) => `#${c.toString(16).padStart(6, '0')}`;
const mix = (a, b, k) => { const ca = new THREE.Color(a); ca.lerp(new THREE.Color(b), k); return ca; };

// ---------- textures ----------
export function floorTexture(def, W, H, solid) {
  const px = 40; const cv = document.createElement('canvas'); cv.width = W * px; cv.height = H * px; const g = cv.getContext('2d');
  const r = rngf(def.id * 977);
  g.fillStyle = hex(def.theme.sky); g.fillRect(0, 0, cv.width, cv.height);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (solid[y * W + x]) continue;
    const v = 0.85 + r() * 0.3; const c = new THREE.Color(def.theme.floor).multiplyScalar(v);
    g.fillStyle = `#${c.getHexString()}`; g.fillRect(x * px, y * px, px, px);
    // stone slabs
    g.strokeStyle = 'rgba(40,40,30,.45)'; g.lineWidth = 2;
    g.strokeRect(x * px + 1, y * px + 1, px - 2, px - 2);
    g.beginPath(); g.moveTo(x * px, y * px + px * (0.35 + r() * 0.3)); g.lineTo(x * px + px, y * px + px * (0.35 + r() * 0.3)); g.stroke();
    // cracks
    if (r() < 0.35) { g.strokeStyle = 'rgba(30,25,20,.5)'; g.lineWidth = 1.5; g.beginPath(); let cx = x * px + r() * px; let cy = y * px + r() * px; g.moveTo(cx, cy); for (let i = 0; i < 4; i++) { cx += (r() - 0.5) * 14; cy += (r() - 0.5) * 14; g.lineTo(cx, cy); } g.stroke(); }
    // moss, thicker near walls
    const wallNear = (solid[y * W + x - 1] ? 1 : 0) + (solid[y * W + x + 1] ? 1 : 0) + (solid[(y - 1) * W + x] ? 1 : 0) + (solid[(y + 1) * W + x] ? 1 : 0);
    const blobs = 1 + wallNear * 2;
    for (let i = 0; i < blobs; i++) {
      const mx = x * px + r() * px; const my = y * px + r() * px; const mr = 5 + r() * 10;
      const gr = g.createRadialGradient(mx, my, 1, mx, my, mr); gr.addColorStop(0, 'rgba(70,150,60,.55)'); gr.addColorStop(1, 'rgba(70,150,60,0)');
      g.fillStyle = gr; g.fillRect(mx - mr, my - mr, mr * 2, mr * 2);
    }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

const texCache = new Map();
export function labelTexture(text, color, bg) {
  const k = `${text}|${color}|${bg}`; if (texCache.has(k)) return texCache.get(k);
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128; const g = cv.getContext('2d');
  g.fillStyle = bg; g.beginPath(); g.roundRect(8, 14, 240, 100, 40); g.fill();
  g.lineWidth = 8; g.strokeStyle = '#fff'; g.stroke();
  g.font = '900 78px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = 'rgba(0,20,30,.85)'; g.strokeText(text, 128, 68); g.fillStyle = color; g.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; texCache.set(k, t); return t;
}
export function starTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d');
  g.translate(32, 33); g.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const r = i % 2 ? 11 : 28; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fillStyle = '#ffe04a'; g.fill(); g.lineWidth = 4; g.strokeStyle = '#fff'; g.stroke();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function glowTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,200,90,.95)'); gr.addColorStop(0.4, 'rgba(255,140,40,.4)'); gr.addColorStop(1, 'rgba(255,100,20,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(cv); return t;
}

// ---------- the soldiers (instanced) ----------
const SKIN_TONES = [0xf2c9a0, 0xd8a070, 0xb07a50, 0xe8b890];
export class Horde {
  /** team: 'me' | 'foe' ; capacity: most visible bodies */
  constructor(capacity, team, skin) {
    this.cap = capacity; this.team = team; this.group = new THREE.Group();
    const bodyG = new THREE.CylinderGeometry(0.15, 0.22, 0.55, 7); bodyG.translate(0, 0.3, 0);
    const headG = new THREE.SphereGeometry(0.19, 8, 6); headG.translate(0, 0.76, 0);
    const hatG = team === 'me' ? new THREE.SphereGeometry(0.215, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2) : new THREE.ConeGeometry(0.2, 0.34, 6);
    hatG.translate(0, team === 'me' ? 0.8 : 0.98, 0);
    const spearG = new THREE.CylinderGeometry(0.018, 0.018, 1.0, 4); spearG.translate(0.24, 0.65, 0.05);
    const shG = new THREE.CircleGeometry(0.28, 8); shG.rotateX(-Math.PI / 2); shG.translate(0, 0.02, 0);
    const mk = (g, m) => { const i = new THREE.InstancedMesh(g, m, capacity); i.count = 0; i.frustumCulled = false; this.group.add(i); return i; };
    const white = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.body = mk(bodyG, white); this.head = mk(headG, white); this.hat = mk(hatG, white); this.spear = mk(spearG, new THREE.MeshLambertMaterial({ color: 0x8a6a40 }));
    this.shadow = mk(shG, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
    this.tmp = new THREE.Object3D(); this.col = new THREE.Color();
    this.setSkin(skin || SKINS[0]);
  }
  setSkin(skin) {
    this.skin = skin;
    const tun = this.team === 'me' ? skin.tunic : 0xc8302a; const hel = this.team === 'me' ? skin.helm : 0x3a2020;
    for (let i = 0; i < this.cap; i++) {
      this.body.setColorAt(i, this.col.set(tun).offsetHSL(0, 0, ((i * 37) % 11) / 90 - 0.05));
      this.head.setColorAt(i, this.col.set(SKIN_TONES[i % 4]));
      this.hat.setColorAt(i, this.col.set(i % 3 === 0 ? tun : i % 3 === 1 ? skin.cape : hel).offsetHSL(0, 0, ((i * 13) % 7) / 80 - 0.04));
    }
    for (const m of [this.body, this.head, this.hat]) m.instanceColor.needsUpdate = true;
  }
  /** pts: [{x,y,ph}] in sim coordinates, face: heading angle; time seconds; moving: bool */
  update(pts, count, time, moving, heading = 0) {
    const n = Math.min(count, this.cap); const o = this.tmp;
    for (let i = 0; i < n; i++) {
      const p = pts[i]; const bob = moving ? Math.abs(Math.sin(time * 11 + p.ph)) * 0.14 : Math.sin(time * 3 + p.ph) * 0.02;
      o.position.set(p.x, bob, p.y); o.rotation.set(moving ? 0.18 : 0, -(p.face !== undefined ? p.face : heading) + Math.PI / 2, 0); o.scale.setScalar(1.5); o.updateMatrix();
      this.body.setMatrixAt(i, o.matrix); this.head.setMatrixAt(i, o.matrix); this.hat.setMatrixAt(i, o.matrix); this.spear.setMatrixAt(i, o.matrix);
      o.position.set(p.x, 0.02, p.y); o.rotation.set(0, 0, 0); o.updateMatrix(); this.shadow.setMatrixAt(i, o.matrix);
    }
    for (const m of [this.body, this.head, this.hat, this.spear, this.shadow]) { m.count = n; m.instanceMatrix.needsUpdate = true; }
    this.group.visible = n > 0;
  }
}

// ---------- the captain ----------
function _makeCaptain(skin) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const tun = M(skin.tunic); const cape = M(skin.cape); const helm = M(skin.helm, 0x222211); const skinM = M(0xf2c9a0); const dark = M(0x3a2a20);
  body.add(mesh(geo.cyl, tun, 0, 0.9, 0, 0.8, 1.0, 0.6)); // torso
  body.add(mesh(geo.box, M(0x8a5a2a), 0, 0.62, 0.02, 0.86, 0.14, 0.64)); // belt
  body.add(mesh(geo.sphere, skinM, 0, 1.65, 0, 0.62, 0.62, 0.62)); // head
  body.add(mesh(geo.hemi, helm, 0, 1.72, 0, 0.78, 0.7, 0.78)); // helmet
  body.add(mesh(geo.cone, M(skin.plume, skin.plume), 0, 2.28, -0.05, 0.28, 0.7, 0.28)); // plume
  body.add(mesh(geo.sphere, M(0x1a1a1a), -0.13, 1.68, 0.27, 0.1, 0.12, 0.08), mesh(geo.sphere, M(0x1a1a1a), 0.13, 1.68, 0.27, 0.1, 0.12, 0.08));
  const cp = mesh(geo.box, cape, 0, 1.0, -0.36, 0.78, 1.25, 0.08); cp.rotation.x = 0.18; body.add(cp); g.userData.cape = cp;
  g.userData.armL = new THREE.Group(); g.userData.armR = new THREE.Group(); g.userData.legL = new THREE.Group(); g.userData.legR = new THREE.Group();
  for (const [grp, x] of [[g.userData.armL, -0.52], [g.userData.armR, 0.52]]) { grp.position.set(x, 1.3, 0); grp.add(mesh(geo.cyl, tun, 0, -0.32, 0, 0.2, 0.7, 0.2), mesh(geo.sphere, skinM, 0, -0.7, 0, 0.24, 0.24, 0.24)); body.add(grp); }
  g.userData.armR.add(mesh(geo.box, M(0xd8dce8, 0x333340), 0.0, -0.7, 0.55, 0.08, 0.07, 1.2)); // sword
  g.userData.armR.add(mesh(geo.box, M(0xffd23a), 0, -0.7, 0.0, 0.3, 0.07, 0.07));
  g.userData.armL.add(mesh(geo.cyl, M(0xc87a2a), -0.15, -0.55, 0.0, 0.7, 0.08, 0.7)); g.userData.armL.children[g.userData.armL.children.length - 1].rotation.z = Math.PI / 2;
  for (const [grp, x] of [[g.userData.legL, -0.2], [g.userData.legR, 0.2]]) { grp.position.set(x, 0.55, 0); grp.add(mesh(geo.cyl, dark, 0, -0.25, 0, 0.22, 0.5, 0.22), mesh(geo.box, dark, 0, -0.52, 0.06, 0.26, 0.12, 0.38)); body.add(grp); }
  g.userData.body = body; body.scale.setScalar(1.6);
  const sh = mesh(new THREE.CircleGeometry(0.9, 14), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.03, 0); sh.rotation.x = -Math.PI / 2; g.add(sh);
  return g;
}
export function recolorCaptain(g, skin) { // rebuild instead (cheap): caller replaces the group
  return makeCaptain(skin);
}

// ---------- level things ----------
function _makeGate(op, v, good, label, vertical) {
  const g = new THREE.Group(); const stone = M(0x8a8a78); const col = good ? 0x3af08a : 0xff4a3a;
  g.add(mesh(geo.box, stone, -1.25, 1.3, 0, 0.5, 2.6, 0.6), mesh(geo.box, stone, 1.25, 1.3, 0, 0.5, 2.6, 0.6), mesh(geo.box, stone, 0, 2.7, 0, 3.0, 0.5, 0.7));
  g.add(mesh(geo.box, M(col, col), 0, 2.97, 0, 3.1, 0.12, 0.74));
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.4), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }));
  panel.position.y = 1.25; g.add(panel); g.userData.panel = panel;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(label, '#ffffff', good ? '#1a9a5a' : '#c8302a'), transparent: true, depthWrite: false }));
  sp.scale.set(3.4, 1.7, 1); sp.position.set(0, 4.1, 0.2); g.add(sp); g.userData.label = sp;
  if (vertical) g.rotation.y = Math.PI / 2;
  g.userData.vertical = vertical; return g;
}

function _makeTrap() {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(0x3a3a3a), 0, 0.05, 0, 2.5, 0.1, 2.5));
  const rim = mesh(geo.box, new THREE.MeshLambertMaterial({ color: 0x444444, emissive: 0x000000 }), 0, 0.12, 0, 2.3, 0.05, 2.3); g.add(rim); g.userData.rim = rim;
  const spikes = [];
  for (let i = 0; i < 9; i++) { const s = mesh(geo.cone, M(0xd0d4dc, 0x303038), -0.75 + (i % 3) * 0.75, 0.0, -0.75 + Math.floor(i / 3) * 0.75, 0.32, 1.3, 0.32); s.position.y = 0.1; g.add(s); spikes.push(s); }
  g.userData.spikes = spikes; return g;
}

function _makeLever() {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(0x6a6a60), 0, 0.2, 0, 1.4, 0.4, 1.0), mesh(geo.box, M(0x4a4a44), 0, 0.7, -0.3, 1.0, 1.0, 0.3));
  const arm = new THREE.Group(); arm.position.set(0, 0.45, 0.05); arm.add(mesh(geo.cyl, M(0x8a5a2a), 0, 0.7, 0, 0.14, 1.4, 0.14), mesh(geo.sphere, M(0xe83a3a, 0x801010), 0, 1.45, 0, 0.4, 0.4, 0.4));
  arm.rotation.z = 0.7; g.add(arm); g.userData.arm = arm;
  g.add(mesh(geo.sphere, M(0xffd23a, 0xaa7a00), 0, 2.4, 0, 0.45, 0.45, 0.45)); // a lamp so it is easy to find
  return g;
}

function _makeSaw() {
  const g = new THREE.Group(); const metal = M(0xc0c4cc, 0x202028);
  const disc = new THREE.Group(); disc.position.y = 1.5;
  const d = mesh(geo.cyl, metal, 0, 0, 0, 2.6, 0.14, 2.6); d.rotation.x = Math.PI / 2; disc.add(d);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; const t = mesh(geo.cone, M(0xe0e4ec), Math.cos(a) * 1.4, Math.sin(a) * 1.4, 0, 0.35, 0.5, 0.2); t.rotation.z = a - Math.PI / 2; disc.add(t); }
  disc.add(mesh(geo.cyl, M(0xe83a3a, 0x801010), 0, 0, 0.1, 0.6, 0.25, 0.6)); disc.children[disc.children.length - 1].rotation.x = Math.PI / 2;
  g.add(disc, mesh(geo.box, M(0x5a4a3a), -1.4, 1.0, 0, 0.3, 2.0, 0.3), mesh(geo.box, M(0x5a4a3a), 1.4, 1.0, 0, 0.3, 2.0, 0.3), mesh(geo.box, M(0xe8c82a), 0, 0.12, 0, 3.0, 0.1, 1.0));
  g.userData.disc = disc; return g;
}

function _makeCage() {
  const g = new THREE.Group(); const bars = new THREE.Group(); g.add(bars);
  g.add(mesh(geo.box, M(0x6a5a3a), 0, 0.08, 0, 2.2, 0.16, 2.2));
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; bars.add(mesh(geo.cyl, M(0x8a8a90), Math.cos(a) * 1.0, 0.9, Math.sin(a) * 1.0, 0.1, 1.7, 0.1)); }
  bars.add(mesh(geo.cyl, M(0x8a8a90), 0, 1.8, 0, 2.2, 0.1, 2.2));
  const pris = new THREE.Group(); g.add(pris);
  for (let i = 0; i < 3; i++) { const p = new THREE.Group(); p.position.set(-0.5 + i * 0.5, 0, (i % 2) * 0.3 - 0.1); p.add(mesh(geo.cyl, M(0x9a9aa8), 0, 0.5, 0, 0.4, 0.7, 0.4), mesh(geo.sphere, M(0xf2c9a0), 0, 1.0, 0, 0.36, 0.36, 0.36)); pris.add(p); }
  g.userData.bars = bars; g.userData.pris = pris; return g;
}

function _makeCoin() { const g = mesh(geo.cyl, M(0xffd23a, 0xaa7a00), 0, 1.0, 0, 0.8, 0.12, 0.8); g.rotation.x = Math.PI / 2; const w = new THREE.Group(); w.add(g); return w; }

function _makeTorch(glowTex) {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0x5a3a1a), 0, 1.3, 0, 0.14, 1.1, 0.14));
  const fl = mesh(geo.cone, M(0xffa020, 0xff8010), 0, 1.15, 0, 0.4, 0.8, 0.4); fl.position.y = 2.1; g.add(fl);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); sp.scale.set(3.4, 3.4, 1); sp.position.y = 2.2; g.add(sp);
  g.userData.fl = fl; g.userData.glow = sp; return g;
}

function _makeExit(open) {
  const g = new THREE.Group(); const stone = M(0x8a8678);
  g.add(mesh(geo.box, stone, -1.3, 1.6, 0, 0.7, 3.2, 0.9), mesh(geo.box, stone, 1.3, 1.6, 0, 0.7, 3.2, 0.9), mesh(geo.box, stone, 0, 3.4, 0, 3.3, 0.7, 1.0));
  const door = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 3.0), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }));
  door.position.y = 1.5; g.add(door); g.userData.door = door;
  const beam = mesh(geo.cyl, new THREE.MeshBasicMaterial({ color: 0xffe880, transparent: true, opacity: 0.18, depthWrite: false }), 0, 5, 0, 2.0, 10, 2.0); g.add(beam); g.userData.beam = beam;
  g.userData.set = (o) => { door.material.color.set(o ? 0xffd23a : 0x6a1a1a); door.material.opacity = o ? 0.6 : 0.85; beam.visible = o; };
  g.userData.set(open); return g;
}

// ---------- bosses ----------
function _makeBrute() {
  const g = new THREE.Group(); const green = M(0x6aa83a); const dark = M(0x4a7a2a);
  const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.sphere, green, 0, 2.3, 0, 3.4, 3.6, 2.6), mesh(geo.sphere, M(0x9ac860), 0, 2.0, 0.9, 2.4, 2.4, 1.6), mesh(geo.box, M(0x7a4a2a), 0, 1.2, 0.3, 2.8, 0.9, 2.2));
  body.add(mesh(geo.sphere, green, 0, 4.5, 0.2, 1.9, 1.7, 1.8));
  body.add(mesh(geo.sphere, M(0xffffff), -0.5, 4.7, 1.0, 0.55, 0.55, 0.4), mesh(geo.sphere, M(0xffffff), 0.5, 4.7, 1.0, 0.55, 0.55, 0.4), mesh(geo.sphere, M(0x1a1a1a), -0.5, 4.65, 1.25, 0.25, 0.25, 0.2), mesh(geo.sphere, M(0x1a1a1a), 0.5, 4.65, 1.25, 0.25, 0.25, 0.2));
  const br = mesh(geo.box, M(0x2a3a1a), 0, 5.0, 1.15, 1.6, 0.2, 0.3); body.add(br);
  body.add(mesh(geo.cone, M(0xf4ecd0), -0.55, 3.9, 1.1, 0.35, 0.8, 0.35), mesh(geo.cone, M(0xf4ecd0), 0.55, 3.9, 1.1, 0.35, 0.8, 0.35));
  body.add(mesh(geo.cone, M(0xe8e0c0), -1.1, 5.4, 0, 0.5, 1.2, 0.5), mesh(geo.cone, M(0xe8e0c0), 1.1, 5.4, 0, 0.5, 1.2, 0.5));
  const armL = new THREE.Group(); armL.position.set(-2.0, 3.4, 0); armL.add(mesh(geo.cyl, green, 0, -1.0, 0, 0.8, 2.2, 0.8), mesh(geo.sphere, dark, 0, -2.2, 0, 1.0, 1.0, 1.0)); body.add(armL);
  const armR = new THREE.Group(); armR.position.set(2.0, 3.4, 0); armR.add(mesh(geo.cyl, green, 0, -1.0, 0, 0.8, 2.2, 0.8), mesh(geo.sphere, dark, 0, -2.2, 0, 1.0, 1.0, 1.0));
  const club = new THREE.Group(); club.position.set(0, -2.2, 0.2); club.add(mesh(geo.cyl, M(0x7a4a22), 0, 1.4, 0, 0.5, 3.4, 0.5), mesh(geo.sphere, M(0x6a3a18), 0, 3.2, 0, 1.3, 1.3, 1.3)); club.rotation.x = 0; armR.add(club);
  body.add(armR);
  body.add(mesh(geo.cyl, dark, -0.9, 0.7, 0, 1.0, 1.4, 1.0), mesh(geo.cyl, dark, 0.9, 0.7, 0, 1.0, 1.4, 1.0));
  const sh = mesh(new THREE.CircleGeometry(2.8, 20), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.04, 0); sh.rotation.x = -Math.PI / 2; g.add(sh);
  g.userData = { body, armR, armL, kind: 'brute' }; return g;
}

function _makeGolem() {
  const g = new THREE.Group(); const rock = M(0x8a8478); const rock2 = M(0x6a665c); const moss = M(0x4a8a3a);
  const body = new THREE.Group(); g.add(body);
  const parts = [];
  const add = (m) => { body.add(m); parts.push(m); return m; };
  add(mesh(geo.box, rock2, -1.3, 1.3, 0, 1.8, 2.6, 1.8)); add(mesh(geo.box, rock2, 1.3, 1.3, 0, 1.8, 2.6, 1.8));
  add(mesh(geo.box, rock, 0, 4.0, 0, 4.4, 3.4, 3.0)); add(mesh(geo.sphere, moss, -1.0, 5.6, 0.2, 2.2, 0.9, 1.8));
  add(mesh(geo.sphere, rock, -2.7, 5.2, 0, 1.9, 1.9, 1.9)); add(mesh(geo.sphere, rock, 2.7, 5.2, 0, 1.9, 1.9, 1.9));
  add(mesh(geo.box, rock, 0, 6.3, 0.2, 2.2, 1.8, 2.0));
  add(mesh(geo.box, M(0xffe060, 0xffc020), -0.5, 6.5, 1.25, 0.5, 0.35, 0.2)); add(mesh(geo.box, M(0xffe060, 0xffc020), 0.5, 6.5, 1.25, 0.5, 0.35, 0.2));
  for (let i = 0; i < 4; i++) add(mesh(geo.cone, M(0x60e8ff, 0x20a0c0), -1.4 + i * 0.95, 6.1, -1.3, 0.7, 1.7, 0.7));
  const armL = new THREE.Group(); armL.position.set(-2.8, 5.0, 0); armL.add(mesh(geo.box, rock, 0, -1.5, 0, 1.2, 3.0, 1.2), mesh(geo.sphere, rock2, 0, -3.2, 0, 1.8, 1.8, 1.8)); body.add(armL); parts.push(armL);
  const armR = new THREE.Group(); armR.position.set(2.8, 5.0, 0); armR.add(mesh(geo.box, rock, 0, -1.5, 0, 1.2, 3.0, 1.2), mesh(geo.sphere, rock2, 0, -3.2, 0, 1.8, 1.8, 1.8)); body.add(armR); parts.push(armR);
  const sh = mesh(new THREE.CircleGeometry(3.4, 20), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.04, 0); sh.rotation.x = -Math.PI / 2; g.add(sh);
  g.userData = { body, armR, armL, parts, kind: 'golem' }; return g;
}

// ---------- scenery ----------
export function makeTrees(W, H, rand) {
  const g = new THREE.Group(); const trunk = new THREE.InstancedMesh(geo.cyl, M(0x5a3a1a), 70); const crown = new THREE.InstancedMesh(geo.low, M(0x3f9a4a), 70); const o = new THREE.Object3D(); let n = 0;
  const w = W * TILE; const h = H * TILE;
  while (n < 70) {
    const x = -14 + rand() * (w + 28); const z = -14 + rand() * (h + 28);
    if (x > -9 && x < w + 9 && z > -9 && z < h + 9) continue;
    const s = 0.6 + rand() * 0.6;
    o.position.set(x, 2 * s, z); o.scale.set(0.8 * s, 4 * s, 0.8 * s); o.rotation.set(0, 0, 0); o.updateMatrix(); trunk.setMatrixAt(n, o.matrix);
    o.position.set(x, 5 * s, z); o.scale.set(5 * s, 4 * s, 5 * s); o.updateMatrix(); crown.setMatrixAt(n, o.matrix);
    crown.setColorAt(n, new THREE.Color(0x3f9a4a).offsetHSL((rand() - 0.5) * 0.06, 0, (rand() - 0.5) * 0.1)); n++;
  }
  g.add(trunk, crown); return g;
}

export const makeCaptain = (...a) => _ol(_makeCaptain(...a), 0x1c1030, 0.04);
export const makeGate = (...a) => _ol(_makeGate(...a), 0x1c1030, 0.04);
export const makeTrap = (...a) => _ol(_makeTrap(...a), 0x1c1030, 0.04);
export const makeLever = (...a) => _ol(_makeLever(...a), 0x1c1030, 0.04);
export const makeSaw = (...a) => _ol(_makeSaw(...a), 0x1c1030, 0.04);
export const makeCage = (...a) => _ol(_makeCage(...a), 0x1c1030, 0.04);
export const makeCoin = (...a) => _ol(_makeCoin(...a), 0x1c1030, 0.04);
export const makeTorch = (...a) => _ol(_makeTorch(...a), 0x1c1030, 0.04);
export const makeExit = (...a) => _ol(_makeExit(...a), 0x1c1030, 0.04);
export const makeBrute = (...a) => _ol(_makeBrute(...a), 0x1c1030, 0.04);
export const makeGolem = (...a) => _ol(_makeGolem(...a), 0x1c1030, 0.04);
