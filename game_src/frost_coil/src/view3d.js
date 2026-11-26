// three.js renderer for «Frost Coil»: a snowy night valley with aurora, pine trees and a moon; a carved wooden board whose tiles hold glowing ice
// tubes that really turn, frozen tiles under ice blocks, a spinning 3D star, a swirling portal and a little 3D ice dragon (segmented body, wings,
// horns) that waits on a cloud and slides along the ice. An orthographic tilted camera keeps the board's screen layout, so taps are unchanged.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';

const TAU = Math.PI * 2, EL = (50 * Math.PI) / 180, SIN = Math.sin(EL), COS = Math.cos(EL);
const G = { box: new THREE.BoxGeometry(1, 1, 1), sph: new THREE.SphereGeometry(0.5, 18, 12), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 18), cone: new THREE.ConeGeometry(0.5, 1, 12), tor: new THREE.TorusGeometry(0.5, 0.06, 8, 40), disc: new THREE.CircleGeometry(0.5, 28) };
const mc = new Map();
function M(color, em = 0, ei = 1, o = {}) { const k = `${color}|${em}|${ei}|${o.r ?? 0.6}|${o.t ?? 1}|${o.m ?? 0}`; if (!mc.has(k)) mc.set(k, new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.6, metalness: o.m ?? 0, emissive: em, emissiveIntensity: em ? ei : 0, transparent: (o.t ?? 1) < 1, opacity: o.t ?? 1 })); return mc.get(k); }
function add(par, geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); par.add(m); return m; }
function grp(par, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); par.add(g); return g; }
const BITS = [[1, 0, -1], [2, 1, 0], [4, 0, 1], [8, -1, 0]]; // N E S W -> dx, dz

function woodTex() {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'); g.fillStyle = '#b87a3e'; g.fillRect(0, 0, 256, 256);
  let sd = 3; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  for (let i = 0; i < 46; i++) { const y = rnd() * 256; g.strokeStyle = `rgba(${70 + rnd() * 40},${35 + rnd() * 25},10,${0.12 + rnd() * 0.25})`; g.lineWidth = 1 + rnd() * 3; g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(80, y + rnd() * 16 - 8, 170, y + rnd() * 16 - 8, 256, y + rnd() * 10 - 5); g.stroke(); }
  g.strokeStyle = 'rgba(60,30,8,.55)'; g.lineWidth = 6; g.strokeRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function skyTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512; const g = c.getContext('2d');
  const s = g.createLinearGradient(0, 0, 0, 512); s.addColorStop(0, '#05103a'); s.addColorStop(0.55, '#123a6a'); s.addColorStop(1, '#2a6a9a'); g.fillStyle = s; g.fillRect(0, 0, 256, 512);
  const au = (y, col) => { const q = g.createLinearGradient(0, y - 60, 0, y + 60); q.addColorStop(0, 'rgba(0,0,0,0)'); q.addColorStop(0.5, col); q.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = q; g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= 256; x += 16) g.lineTo(x, y + Math.sin(x * 0.05) * 30); g.lineTo(256, y + 70); g.lineTo(0, y + 70); g.fill(); };
  au(130, 'rgba(70,255,170,.4)'); au(200, 'rgba(150,100,255,.3)');
  let sd = 5; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(255,255,255,${0.3 + rnd() * 0.7})`; g.beginPath(); g.arc(rnd() * 256, rnd() * 300, 0.4 + rnd() * 1.1, 0, TAU); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function pine(h = 14) { const g = new THREE.Group(); add(g, G.cyl, M(0x5a3a1a), 0, h * 0.08, 0, h * 0.1, h * 0.16, h * 0.1); for (let i = 0; i < 4; i++) { const k = 1 - i * 0.2; add(g, G.cone, M(0x1f6a4a, 0, 0, { r: 0.8 }), 0, h * (0.28 + i * 0.2), 0, h * 0.55 * k, h * 0.34, h * 0.55 * k); add(g, G.cone, M(0xf4faff, 0, 0, { r: 0.9 }), 0, h * (0.38 + i * 0.2), 0, h * 0.4 * k, h * 0.2, h * 0.4 * k); } return g; }
function star() { const sh = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU - Math.PI / 2, r = i % 2 ? 0.2 : 0.5; i ? sh.lineTo(Math.cos(a) * r, Math.sin(a) * r) : sh.moveTo(Math.cos(a) * r, Math.sin(a) * r); } const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.14, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 }); geo.translate(0, 0, -0.07); return new THREE.Mesh(geo, M(0xffd23a, 0xffc020, 1.0, { r: 0.25, m: 0.3 })); }

function makeDragon() {
  const g = new THREE.Group(), P = { segs: [] }; const sk = M(0x8ae8ff, 0x35c8ff, 0.25, { r: 0.3 }), belly = M(0xeaffff, 0xaaf0ff, 0.2, { r: 0.4 });
  for (let i = 0; i < 7; i++) { const r = i === 0 ? 0.62 : 0.5 - i * 0.04; const s = grp(g); add(s, G.sph, sk, 0, 0, 0, r * 2, r * 1.8, r * 2); add(s, G.cone, M(0xffffff, 0xaaf0ff, 0.4), 0, r * 0.95, 0, 0.22, 0.34, 0.22); P.segs.push(s); }
  const h = P.head = grp(P.segs[0]); add(h, G.sph, sk, 0, 0.1, 0.25, 0.95, 0.8, 0.9); add(h, G.sph, belly, 0, -0.06, 0.45, 0.6, 0.3, 0.55);
  [-1, 1].forEach((s) => { add(h, G.sph, M(0xffffff), s * 0.2, 0.28, 0.5, 0.26); add(h, G.sph, M(0x10204a), s * 0.2, 0.28, 0.62, 0.15); add(h, G.sph, M(0xffffff), s * 0.18, 0.32, 0.68, 0.06); add(h, G.cone, M(0xfff0c0, 0xffd060, 0.3), s * 0.3, 0.62, 0.05, 0.16, 0.5, 0.16).rotation.z = -s * 0.35; add(h, G.sph, M(0xff9ab0), s * 0.34, 0.12, 0.52, 0.16, 0.1, 0.06); add(h, G.sph, M(0x20405a), s * 0.07, 0.12, 0.76, 0.08); });
  add(h, G.sph, M(0xc8406a), 0, -0.06, 0.64, 0.25, 0.08, 0.1);
  P.wings = [-1, 1].map((s) => { const w = grp(P.segs[1], s * 0.4, 0.3, -0.05); add(w, G.sph, M(0xbff4ff, 0x60c8ff, 0.3, { t: 0.85, r: 0.2 }), s * 0.6, 0.35, 0, 1.4, 0.06, 0.8); return w; });
  return { g, P };
}
function snowPts() { const n = 180, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 140; pos[i * 3 + 1] = Math.random() * 60; pos[i * 3 + 2] = (Math.random() - 0.5) * 120; } const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); return new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.1, sizeAttenuation: true, transparent: true, opacity: 0.85 })); }

export class View3D {
  constructor() {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'fresh', tune: { bloom: [0.35, 0.5, 0.82] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.scene.background = skyTex(); 
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 800);
    this.scene.add(new THREE.HemisphereLight(0xdfeaff, 0x6a7aaa, 1.8)); const sun = new THREE.DirectionalLight(0xdfeaff, 1.7); sun.position.set(-20, 40, 30); this.scene.add(sun);
    this.W = 1; this.H = 1; this.u = 1; this.wood = woodTex(); this.tiles = new Map(); this.key = '';
    this.ground = add(this.scene, G.box, M(0xeaf4ff, 0, 0, { r: 0.95 }), 0, -1.2, 0, 400, 2, 400);
    for (let i = 0; i < 26; i++) { const a = i * 2.4, rr = 46 + (i % 5) * 9; const p = pine(10 + (i % 4) * 4); p.position.set(Math.cos(a) * rr * 1.5, 0, Math.sin(a) * rr * 0.9 - 30); this.scene.add(p); (this.pines = this.pines || []).push(p); }
    for (let i = 0; i < 14; i++) add(this.scene, G.sph, M(0xffffff, 0, 0, { r: 0.95 }), -90 + i * 14, 0, -48 + (i % 3) * 6, 22, 8, 14);
    this.moon = add(this.scene, G.sph, new THREE.MeshBasicMaterial({ color: 0xfff6d8 }), 60, 70, -150, 16); add(this.scene, G.sph, new THREE.MeshBasicMaterial({ color: 0xfff6d8, transparent: true, opacity: 0.18 }), 60, 70, -151, 28);
    this.snow = snowPts(); this.scene.add(this.snow);
    this.boardG = new THREE.Group(); this.scene.add(this.boardG);
    this.portal = grp(this.scene); this.rings = [0, 1, 2].map((i) => { const r = add(this.portal, G.tor, M(i % 2 ? 0xff7ad8 : 0x7affd8, i % 2 ? 0xff40c0 : 0x40ffc0, 1.6), 0, 0, 0, 1, 1, 1); r.userData.i = i; return r; }); this.pcore = add(this.portal, G.disc, new THREE.MeshBasicMaterial({ color: 0xc8f0ff, transparent: true, opacity: 0.7, side: THREE.DoubleSide }), 0, 0, 0, 1, 1, 1);
    this.stub = add(this.scene, G.cyl, M(0xcfe8f8, 0x4a98d8, 0.4, { t: 0.9, r: 0.2 }), 0, 0, 0, 1, 1, 1);
    this.cloud = new THREE.Group(); for (let k = 0; k < 5; k++) add(this.cloud, G.sph, M(0xffffff, 0xaad0ff, 0.2, { r: 0.9 }), (k - 2) * 3.4, 0.3 + (k % 2), 0, 5.2, 3, 4.2); this.scene.add(this.cloud);
    this.dragon = makeDragon(); this.scene.add(this.dragon.g); this.trailPts = [];
  }
  setSize(w, h, u) {
    this.W = w; this.H = h; this.u = u; this.renderer.setSize(w, h, false); const wd = w / u, hd = h / u;
    Object.assign(this.cam, { left: -wd / 2, right: wd / 2, top: hd / 2, bottom: -hd / 2 }); this.cam.updateProjectionMatrix();
    this.cam.position.set(0, 300 * SIN, 300 * COS); this.cam.lookAt(0, 0, 0); this.cam.updateMatrixWorld(true);
  }
  X(px) { return (px - this.W / 2) / this.u; } Z(py) { return (py - this.H / 2) / (this.u * SIN); }
  _board(L, tilesInfo, rows, cols) {
    const key = `${rows}x${cols}|${Math.round(L.s)}`; if (key === this.key) return; this.key = key;
    this.boardG.clear(); this.tiles.clear(); const s = L.s / this.u;
    const wBoard = cols * s, hBoard = rows * s;
    const cx = this.X(L.x + L.w / 2), cz = this.Z(L.y + L.h / 2);
    for (const p of this.pines || []) p.visible = !(Math.abs(p.position.x - cx) < wBoard / 2 + 14 && p.position.z > cz - hBoard / 2 - 30 && p.position.z < cz + hBoard / 2 + 40);
    const frame = add(this.boardG, G.box, M(0x9a6228, 0, 0, { r: 0.7 }), cx, 0.6, cz, wBoard + 3.6, 1.6, hBoard + 3.6);
    add(this.boardG, G.box, M(0x4a6a9a, 0, 0, { r: 0.8 }), cx, 1.45, cz, wBoard + 0.6, 0.3, hBoard + 0.6); void frame;
    add(this.boardG, G.box, M(0xffffff, 0, 0, { r: 0.9 }), cx, 1.0, cz - hBoard / 2 - 1.5, wBoard + 4, 1.2, 0.8); add(this.boardG, G.box, M(0xffffff, 0, 0, { r: 0.9 }), cx - wBoard / 2 - 1.5, 1.0, cz, 0.8, 1.2, hBoard + 4);
    for (const t of tilesInfo) {
      const g = grp(this.boardG, this.X(t.cx), 1.6, this.Z(t.cy)); const inner = grp(g);
      const tex = add(inner, G.box, new THREE.MeshStandardMaterial({ color: 0xc88a48, roughness: 0.6 }), 0, 0.35, 0, s * 0.96, 0.7, s * 0.96);
      add(inner, G.box, M(0x6fa0d8, 0x1a3a6a, 0.3, { r: 0.5 }), 0, 0.72, 0, s * 0.84, 0.08, s * 0.84); void tex;
      const tube = grp(inner, 0, 0.9, 0); const iceM = new THREE.MeshStandardMaterial({ color: 0xcfeaff, roughness: 0.1, metalness: 0.0, emissive: 0x2a78c8, emissiveIntensity: 0.25, transparent: true, opacity: 0.92 });
      const entry = { g, inner, tube, iceM, key: '', ice: null, star: null, frozen: null };
      this.tiles.set(`${t.r},${t.c}`, entry);
    }
  }
  _fill(e, t, s) {
    const k = `${t.mask}|${t.locked}|${t.star}`; if (e.key === k) return; e.key = k; e.tube.clear();
    for (const [bit, dx, dz] of BITS) if (t.mask & bit) { const m = add(e.tube, G.cyl, e.iceM, dx * s * 0.25, 0, dz * s * 0.25, s * 0.26, s * 0.5, s * 0.26); m.rotation.z = dx ? Math.PI / 2 : 0; m.rotation.x = dz ? Math.PI / 2 : 0; if (dx) m.rotation.x = 0; }
    add(e.tube, G.sph, e.iceM, 0, 0, 0, s * 0.3);
    if (e.star) { e.g.remove(e.star); e.star = null; } if (e.frozen) { e.inner.remove(e.frozen); e.frozen = null; }
    if (t.star) { e.star = star(); e.star.scale.setScalar(s * 0.62); e.star.position.set(0, 3.0, 0); e.g.add(e.star); }
    if (t.locked) { const f = grp(e.inner, 0, 0.9, 0); add(f, G.box, M(0xbfe8ff, 0x60b8f0, 0.5, { t: 0.62, r: 0.05 }), 0, s * 0.2, 0, s * 0.92, s * 0.4, s * 0.92); for (let i = 0; i < 5; i++) add(f, G.cone, M(0xffffff, 0xaad8ff, 0.5, { t: 0.85 }), (i - 2) * s * 0.18, -s * 0.05, s * 0.44, s * 0.08, s * 0.32, s * 0.08).rotation.x = Math.PI; add(f, G.sph, M(0xffffff, 0, 0, { r: 0.9 }), -s * 0.2, s * 0.42, -s * 0.15, s * 0.4, s * 0.16, s * 0.34); e.frozen = f; }
  }
  render(o) {
    const { L, tilesInfo, p, time, travel, dragonPx, trailPx, mode, litSet } = o; const U = this.u; const tm = time;
    if (L && p) {
      this._board(L, tilesInfo, p.level.rows, p.level.cols); this.boardG.visible = true; const s = L.s / U;
      for (const t of tilesInfo) { const e = this.tiles.get(`${t.r},${t.c}`); if (!e) continue; this._fill(e, t, s); e.g.position.x = this.X(t.cx); e.inner.rotation.y = -t.ang; const lit = litSet.has(`${t.r},${t.c}`); e.iceM.emissiveIntensity = lit ? 1.1 + Math.sin(tm * 4) * 0.2 : 0.25; e.iceM.emissive.set(lit ? 0x40e8ff : 0x2a78c8); e.iceM.color.set(lit ? 0xe8fbff : 0xcfeaff); if (e.star) e.star.rotation.y = tm * 2; if (e.star) e.star.position.y = 3.0 + Math.sin(tm * 3) * 0.3; }
      const px = this.X(L.portal[0]), pz = this.Z(L.portal[1]); this.portal.position.set(px, s * 0.9, pz); this.portal.scale.setScalar(s * 0.8);
      this.stub.visible = true; const sh = Math.max(0.1, (L.y - L.portal[1]) / (U * SIN)); this.stub.position.set(px, 2.5, pz + sh * 0.5 - 0.1); this.stub.scale.set(s * 0.26, 0.5, sh); this.stub.rotation.x = Math.PI / 2;
      this.cloud.position.set(this.X(L.dragon[0]), 0.5, this.Z(L.dragon[1]) + 3); this.cloud.scale.setScalar(s * 0.22); this.cloud.visible = true;
    } else {
      this.boardG.visible = false; this.stub.visible = false; const sS = U * 30 / U; this.portal.position.set(this.X(this.W * 0.68), sS * 0.7, this.Z(this.H * 0.2)); this.portal.scale.setScalar(sS * 0.8); this.cloud.position.set(this.X(this.W * 0.3), 0.5, this.Z(this.H * 0.82) + 3); this.cloud.scale.setScalar(sS * 0.2); this.cloud.visible = true;
    }
    this.rings.forEach((r, i) => { r.rotation.z = tm * (1.5 + i * 0.7) * (i % 2 ? -1 : 1); r.rotation.x = Math.sin(tm * 2 + i) * 0.25; const k = 1 - i * 0.22; r.scale.set(k * 1.6, k * 1.6, k * 1.6); });
    this.pcore.rotation.z = tm; this.pcore.scale.setScalar(1.3 + Math.sin(tm * 3) * 0.1);
    // dragon
    const D = this.dragon; const sc = (L ? L.s / U : 30) * 0.85; D.g.visible = !(travel && travel.t > 1.05);
    const segs = D.P.segs; const pts = trailPx && trailPx.length > 1 ? trailPx.map(([x, y]) => new THREE.Vector3(this.X(x), 3.2 * sc * 0.4, this.Z(y))) : null;
    if (pts) { const dist = sc * 0.9; segs.forEach((sg, i) => { const q = pts[Math.min(pts.length - 1, Math.floor(i * pts.length / 8))]; sg.position.copy(q); sg.scale.setScalar(sc); }); const a = pts[0], b = pts[Math.min(pts.length - 1, 2)]; segs[0].rotation.y = Math.atan2(a.x - b.x, a.z - b.z); void dist; }
    else { const bx = this.X(dragonPx[0]), bz = this.Z(dragonPx[1]); segs.forEach((sg, i) => { const a = -i * 0.55 + Math.sin(tm * 1.5) * 0.15; sg.position.set(bx - i * sc * 0.55 + Math.sin(tm * 2 + i) * 0.1 * sc, sc * 0.7 + Math.sin(tm * 2.4 - i * 0.6) * sc * 0.12, bz + 2 + Math.sin(a + i) * sc * 0.18); sg.scale.setScalar(sc); sg.rotation.y = 0; }); segs[0].rotation.y = -0.5 + Math.sin(tm) * 0.15; segs[0].position.y += sc * 0.25; }
    D.P.wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * (0.5 + Math.sin(tm * 6) * 0.5); });
    const pos = this.snow.geometry.attributes.position; for (let i = 0; i < pos.count; i++) { let y = pos.getY(i) - 0.12; if (y < 0) y = 60; pos.setY(i, y); pos.setX(i, pos.getX(i) + Math.sin(tm + i) * 0.03); } pos.needsUpdate = true;
    this.renderer.render(this.scene, this.cam);
  }
  dispose() { this.renderer.dispose(); }
}
