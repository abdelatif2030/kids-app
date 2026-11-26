// three.js renderer for «عالم القفز»: the tile platformer is drawn as a lit 3D diorama seen from the side with a slight tilt.
// Real 3D hero (jointed arms and legs that swing, cap or bow, face), 3D bugs, pipes, bricks, question blocks, castle, parallax scenery.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';
import { PAL } from './art.js';

const TAU = Math.PI * 2;
const GROUND = 12;
const geo = {
  sph: new THREE.SphereGeometry(0.5, 16, 12), hem: new THREE.SphereGeometry(0.5, 16, 8, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 16), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 12),
  coin: new THREE.CylinderGeometry(0.5, 0.5, 0.14, 18),
};
const mats = new Map();
const M = (c, em = 0, o = {}) => { const k = `${c}|${em}|${JSON.stringify(o)}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em, ...o })); return mats.get(k); };
const mesh = (g, m, x = 0, y = 0, z = 0, a = 1, b = 1, c = 1) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(a, b, c); return o; };
const col = (s) => new THREE.Color(s);
const Y = (y) => GROUND - y;

function qTex(label, bg, fg) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, 128, 128); g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = 6; g.strokeRect(3, 3, 122, 122);
  g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(6, 6, 116, 12);
  if (label) { g.fillStyle = fg; g.font = '900 86px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.strokeStyle = 'rgba(0,0,0,.4)'; g.lineWidth = 8; g.strokeText(label, 64, 70); g.fillText(label, 64, 70); }
  for (const [x, y] of [[14, 14], [114, 14], [14, 114], [114, 114]]) { g.fillStyle = 'rgba(0,0,0,.35)'; g.beginPath(); g.arc(x, y, 5, 0, TAU); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function brickTex(c1, c2) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.fillStyle = c2; g.fillRect(0, 0, 128, 128); g.fillStyle = c1;
  for (let r = 0; r < 4; r++) for (let k = -1; k < 2; k++) { const x = k * 64 + (r % 2 ? -32 : 0); g.fillRect(x + 3, r * 32 + 3, 58, 26); }
  g.fillStyle = 'rgba(255,255,255,.25)'; for (let r = 0; r < 4; r++) for (let k = -1; k < 2; k++) g.fillRect(k * 64 + (r % 2 ? -32 : 0) + 3, r * 32 + 3, 58, 5);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ---- characters -----------------------------------------------------------------------------------------------------------
function makeHero(girl) {
  const g = new THREE.Group(); const rig = new THREE.Group(); g.add(rig);
  const fur = M(0xff8a2a), cream = M(0xfff0d8), dark = M(0x3a1a0a), acc = M(girl ? 0xff4a8a : 0x2f7de8);
  const torso = new THREE.Group(); torso.position.y = 0.46; rig.add(torso);
  torso.add(mesh(geo.sph, fur, 0, 0.06, 0, 0.5, 0.5, 0.42)); torso.add(mesh(geo.sph, cream, 0, 0.04, 0.12, 0.34, 0.38, 0.26));
  torso.add(mesh(geo.cyl, acc, 0, 0.3, 0, 0.36, 0.1, 0.32)); // scarf
  const tail = new THREE.Group(); tail.position.set(0, 0.0, -0.22); torso.add(tail);
  const tb = mesh(geo.sph, fur, 0, 0.12, -0.12, 0.2, 0.2, 0.5); tb.rotation.x = -0.6; tail.add(tb); const tt = mesh(geo.sph, cream, 0, 0.3, -0.3, 0.2, 0.2, 0.22); tail.add(tt);
  const head = new THREE.Group(); head.position.y = 0.58; torso.add(head);
  head.add(mesh(geo.sph, fur, 0, 0, 0, 0.62, 0.52, 0.52));
  head.add(mesh(geo.sph, cream, 0, -0.1, 0.17, 0.34, 0.22, 0.28)); head.add(mesh(geo.sph, dark, 0, -0.03, 0.31, 0.1, 0.07, 0.07));
  for (const s of [-1, 1]) {
    const ear = mesh(geo.cone, fur, s * 0.2, 0.34, -0.02, 0.2, 0.34, 0.14); ear.rotation.z = -s * 0.25; head.add(ear);
    head.add(mesh(geo.cone, M(0xffb0a0), s * 0.2, 0.32, 0.03, 0.11, 0.2, 0.05)).children.at(-1).rotation.z = -s * 0.25;
    head.add(mesh(geo.sph, M(0xffffff), s * 0.13, 0.07, 0.21, 0.15, 0.18, 0.09)); head.add(mesh(geo.sph, M(0x16161e), s * 0.13, 0.065, 0.26, 0.08, 0.11, 0.05)); head.add(mesh(geo.sph, M(0xffffff), s * 0.12 + 0.02, 0.1, 0.29, 0.03, 0.03, 0.02));
    head.add(mesh(geo.sph, M(0xff8a8a), s * 0.24, -0.07, 0.17, 0.09, 0.06, 0.04));
  }
  if (girl) { head.add(mesh(geo.sph, M(0xff4a8a), 0.2, 0.3, 0.08, 0.12, 0.12, 0.1)); for (const s of [-1, 1]) { const w = mesh(geo.cone, M(0xff4a8a), 0.2 + s * 0.11, 0.3, 0.08, 0.14, 0.2, 0.08); w.rotation.z = -s * 1.57; head.add(w); } }
  else { head.add(mesh(geo.box, M(0xffd23a), 0, 0.24, 0.12, 0.5, 0.07, 0.14)); }
  const limb = (x, y, len, m, tip, foot) => { const p = new THREE.Group(); p.position.set(x, y, 0); p.add(mesh(geo.cyl, m, 0, -len / 2, 0, 0.15, len, 0.15)); p.add(foot ? mesh(geo.sph, tip, 0, -len, 0.05, 0.2, 0.13, 0.3) : mesh(geo.sph, tip, 0, -len, 0, 0.15, 0.15, 0.15)); return p; };
  const aL = limb(-0.3, 0.18, 0.28, fur, cream, false), aR = limb(0.3, 0.18, 0.28, fur, cream, false); torso.add(aL, aR);
  const lL = limb(-0.14, 0.46, 0.4, fur, dark, true), lR = limb(0.14, 0.46, 0.4, fur, dark, true); rig.add(lL, lR);
  g.userData = { rig, torso, head, aL, aR, lL, lR, tail };
  return g;
}
function makeBug() {
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.sph, M(0xb06a3a), 0, 0.42, 0, 0.9, 0.78, 0.78)); body.add(mesh(geo.hem, M(0xe8a85a), 0, 0.5, 0, 0.78, 0.5, 0.7));
  for (const s of [-1, 1]) {
    body.add(mesh(geo.sph, M(0xffffff), s * 0.18, 0.5, 0.3, 0.26, 0.3, 0.16)); body.add(mesh(geo.sph, M(0x16161e), s * 0.18, 0.48, 0.4, 0.12, 0.16, 0.08));
    const b = mesh(geo.box, M(0x3a1a0a), s * 0.2, 0.7, 0.36, 0.28, 0.06, 0.06); b.rotation.z = s * -0.5; body.add(b);
  }
  const f = [mesh(geo.sph, M(0x3a1a0a), -0.25, 0.08, 0.08, 0.3, 0.2, 0.4), mesh(geo.sph, M(0x3a1a0a), 0.25, 0.08, 0.08, 0.3, 0.2, 0.4)]; f.forEach((x) => g.add(x));
  g.userData = { body, f }; return g;
}
function makeMushroom() {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0xfff0d8), 0, 0.22, 0, 0.36, 0.44, 0.36)); g.add(mesh(geo.hem, M(0xa44ae8), 0, 0.38, 0, 0.9, 0.7, 0.9));
  for (const [x, y, z] of [[0.0, 0.86, 0.1], [-0.28, 0.66, 0.28], [0.3, 0.66, 0.24]]) g.add(mesh(geo.sph, M(0xffffff), x, y - 0.12, z, 0.2, 0.2, 0.12));
  for (const s of [-1, 1]) g.add(mesh(geo.sph, M(0x16161e), s * 0.1, 0.28, 0.17, 0.06, 0.1, 0.04));
  return g;
}
function makeCastle(P) {
  const g = new THREE.Group(); const w = M(col(P.castle).getHex()), roof = M(0xe8402a), dark = M(0x3a2a2a);
  g.add(mesh(geo.box, w, 0, 1.6, 0, 4.2, 3.2, 2.6));
  for (const s of [-1, 1]) { g.add(mesh(geo.cyl, w, s * 2.3, 2.2, 0, 1.5, 4.4, 1.5)); g.add(mesh(geo.cone, roof, s * 2.3, 5.2, 0, 1.9, 1.8, 1.9)); }
  g.add(mesh(geo.cyl, w, 0, 4.3, -0.2, 1.7, 2.2, 1.7)); g.add(mesh(geo.cone, roof, 0, 6.1, -0.2, 2.1, 1.8, 2.1));
  g.add(mesh(geo.box, dark, 0, 0.8, 1.31, 1.1, 1.6, 0.06));
  for (const [x, y] of [[-1.4, 2.2], [1.4, 2.2], [-2.3, 3.6], [2.3, 3.6]]) g.add(mesh(geo.box, M(0xffe58a, 0x806010), x, y, 1.3, 0.5, 0.7, 0.05));
  return g;
}

// ---- scenery -------------------------------------------------------------------------------------------------------------
function buildScenery(world) {
  const g = new THREE.Group(); const layers = [];
  const L = (z, par) => { const l = new THREE.Group(); l.position.z = z; g.add(l); layers.push({ l, par }); return l; };
  const hillC = world === 'hills' ? 0x58c05a : world === 'cave' ? 0x4a3a8a : world === 'desert' ? 0xe8b068 : 0xcfe6f6;
  const l1 = L(-26, 0.35), l2 = L(-12, 0.6);
  for (let i = 0; i < 40; i++) l1.add(mesh(geo.sph, M(hillC), i * 13 + Math.sin(i * 7) * 3, -1 + (i % 3), 0, 16 + (i % 4) * 4, 7 + (i % 3) * 2.5, 6));
  for (let i = 0; i < 60; i++) {
    const x = i * 8 + Math.sin(i * 3) * 2;
    if (world === 'hills' || world === 'snow') { const sn = world === 'snow'; l2.add(mesh(geo.cyl, M(0x6a4a2a), x, 1, 0, 0.5, 2, 0.5)); l2.add(mesh(geo.cone, M(sn ? 0xe8f4ff : 0x2a9a4a), x, 3.2 + (i % 2) * 0.3, 0, 2.2, 3.4, 2.2)); if (sn) l2.add(mesh(geo.cone, M(0x2a7a5a), x, 2.6, 0, 2.4, 2.2, 2.4)); }
    else if (world === 'desert') { if (i % 3 === 0) l2.add(mesh(geo.cone, M(0xe8b868), x, 3.0, 0, 6, 6, 6)); else { l2.add(mesh(geo.cyl, M(0x3aa05a), x, 1.1, 0, 0.55, 2.2, 0.55)); l2.add(mesh(geo.cyl, M(0x3aa05a), x + 0.5, 1.6, 0, 0.35, 1.0, 0.35)); } }
    else { const h = 1.5 + (i % 4) * 0.8; const cr = mesh(geo.cone, M(i % 2 ? 0x6ae8d8 : 0xe86ad8, i % 2 ? 0x104a44 : 0x4a1044), x, h / 2 + 3, 0, 0.9, h, 0.9); cr.rotation.z = Math.sin(i) * 0.25; l2.add(cr); }
  }
  if (world !== 'cave') { const l3 = L(-34, 0.18); for (let i = 0; i < 40; i++) { const x = i * 14 + (i % 3) * 3, y = 13 + (i % 4) * 2; for (const [dx, dy, r] of [[0, 0, 3], [2.4, -0.4, 2.4], [-2.4, -0.5, 2.2], [0.8, 0.8, 2.4]]) l3.add(mesh(geo.sph, M(0xffffff, 0x888888), x + dx, y + dy, 0, r * 1.4, r, r)); } }
  else { const l3 = L(-30, 0.1); for (let i = 0; i < 120; i++) l3.add(mesh(geo.sph, M(0xffffff, 0xffffff), (i * 37) % 600, 4 + ((i * 17) % 20), 0, 0.2, 0.2, 0.2)); }
  g.userData.layers = layers;
  return g;
}

export class View3D {
  constructor(el) {
    this.el = el;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'fresh', tune: { bloom: [0.14, 0.4, 0.92] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(36, 1, 0.5, 300);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a9ab0, 1.15));
    this.sun = new THREE.DirectionalLight(0xfff0d8, 1.35); this.sun.position.set(-8, 14, 12); this.scene.add(this.sun); this.scene.add(this.sun.target);
    this.cur = {}; this.bugs = []; this.mush = []; this.w = 1; this.h = 1;
    this.tex = { q: qTex('?', '#ffc83a', '#fff4c0'), u: qTex('', '#a0885a', '#fff') };
    this.shadow = mesh(geo.cyl, M(0x000000, 0, { transparent: true, opacity: 0.28 }), 0, 0, 0, 0.8, 0.02, 0.5); this.scene.add(this.shadow);
    this.heroes = {};
    const N = 700;
    const mk = (g, m) => { const o = new THREE.InstancedMesh(g, m, N); o.frustumCulled = false; o.count = 0; this.scene.add(o); return o; };
    this.inst = { top: mk(geo.box, M(0xffffff)), dirt: mk(geo.box, M(0xffffff)), brick: mk(geo.box, M(0xffffff)), q: mk(geo.box, M(0xffffff)), u: mk(geo.box, M(0xffffff)), pb: mk(geo.cyl, M(0xffffff)), pr: mk(geo.cyl, M(0xffffff)), coin: mk(geo.coin, M(0xffd23a, 0x6a4a00)), grass: mk(geo.box, M(0xffffff)) };
    this.chunks = []; this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(); this._v = new THREE.Vector3();
  }
  setSize(w, h) { this.w = w; this.h = h; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  project(x, y) { this._v.set(x, Y(y), 0).project(this.camera); return [(this._v.x * 0.5 + 0.5) * this.w, (-this._v.y * 0.5 + 0.5) * this.h]; }
  dispose() { this.renderer.dispose(); }
  _setWorld(world) {
    if (this.cur.world === world) return;
    this.cur = { world };
    if (this.scen) this.scene.remove(this.scen); this.scen = buildScenery(world); this.scene.add(this.scen);
    if (this.castle) this.scene.remove(this.castle); this.castle = makeCastle(PAL[world]); this.scene.add(this.castle);
    if (this.flagG) this.scene.remove(this.flagG);
    const f = new THREE.Group(); f.add(mesh(geo.cyl, M(0xf0f0f0), 0, 3.5, 0, 0.12, 7, 0.12)); f.add(mesh(geo.sph, M(0xffd23a, 0x604000), 0, 7.1, 0, 0.35, 0.35, 0.35));
    const cl = mesh(geo.box, M(0xff5a8a, 0x401020), 0.8, 6.2, 0, 1.5, 0.9, 0.05); f.add(cl); f.userData.cloth = cl; this.flagG = f; this.scene.add(f);
    const P = PAL[world]; const sky = new THREE.Color(P.sky[1]);
    const gc = document.createElement('canvas'); gc.width = 4; gc.height = 256; const gg = gc.getContext('2d'); const gr = gg.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, world === 'hills' ? '#2a8cff' : P.sky[0]); gr.addColorStop(0.7, world === 'hills' ? '#8fd6ff' : P.sky[1]); gr.addColorStop(1, P.sky[1]); gg.fillStyle = gr; gg.fillRect(0, 0, 4, 256);
    const bt = new THREE.CanvasTexture(gc); bt.colorSpace = THREE.SRGBColorSpace; this.scene.background = bt; this.scene.fog = new THREE.Fog(sky, 90, 200);
    const set = (k, c, tx) => { const m = this.inst[k]; m.material = new THREE.MeshLambertMaterial({ color: tx ? 0xffffff : c, map: tx || null }); };
    set('top', P.dirt); set('dirt', P.dirtD); set('grass', P.top); set('brick', 0xffffff, brickTex(P.brick, P.brickD)); set('q', 0xffffff, this.tex.q); set('u', 0xffffff, this.tex.u);
    set('pb', P.pipe); set('pr', P.pipeD);
  }
  burst(x, y, cols, n = 8) {
    for (let i = 0; i < n; i++) { const m = mesh(geo.box, M(col(cols[i % cols.length]).getHex()), x, Y(y), 0.4, 0.18, 0.18, 0.18); m.userData = { vx: (Math.random() - 0.5) * 7, vy: 3 + Math.random() * 5, vz: Math.random() * 2, life: 0 }; this.scene.add(m); this.chunks.push(m); }
  }
  render(w, world, camX, camY, vw, vh, clock, o) {
    this._setWorld(world);
    const dt = Math.min(0.05, Math.max(0, clock - (this.lastClock ?? clock))); this.lastClock = clock;
    const t = Math.tan((this.camera.fov * Math.PI) / 360);
    const vh3 = this.h > this.w ? vh : 8.6;
    const dist = Math.max(vh3 * 0.5, (vw * 0.5) / this.camera.aspect) / t * 0.97;
    const hy = o.inMenu ? 0 : Y(w.p.y + w.p.h);
    const cx = camX + vw / 2, cy = (this.h > this.w ? Y(camY + vh / 2) : 2.8 + Math.max(0, hy - 2.5) * 0.45);
    this.camera.position.set(cx, cy + dist * 0.12, dist); this.camera.lookAt(cx, cy - dist * 0.012, 0);
    this.sun.position.set(cx - 8, 16, 14); this.sun.target.position.set(cx, cy, 0);
    for (const { l, par } of this.scen.userData.layers) l.position.x = cx * (1 - par) - 8;
    this.scen.position.y = -0.5;
    const grid = w.grid; const x0 = Math.max(0, Math.floor(camX) - 2), x1 = Math.min(w.len - 1, Math.ceil(camX + vw) + 2);
    const cnt = { top: 0, dirt: 0, brick: 0, q: 0, u: 0, pb: 0, pr: 0, coin: 0, grass: 0 }; const m = this._m, q = this._q, p = this._p, s = this._s;
    const put = (k, x, y, z, a, b, c, rx = 0, ry = 0) => { const I = this.inst[k]; if (cnt[k] >= 700) return; q.setFromEuler(this._e.set(rx, ry, 0)); m.compose(p.set(x, y, z), q, s.set(a, b, c)); I.setMatrixAt(cnt[k]++, m); };
    const solid = (c) => c === '#' || c === 'B' || c === '?' || c === 'U' || c === 'P';
    for (let ty = 0; ty < w.H; ty++) for (let tx = x0; tx <= x1; tx++) {
      const c = grid[ty][tx]; if (c === ' ' || c === 'F') continue;
      let by = Y(ty + 0.5); const bx = tx + 0.5;
      const bump = (c === 'B' || c === '?' || c === 'U') ? o.bumps.get(`${tx},${ty}`) : undefined; if (bump !== undefined) by += Math.sin(((clock - bump) / 0.25) * Math.PI) * 0.3;
      if (c === '#') { const above = ty > 0 ? grid[ty - 1][tx] : ' '; const cap = !solid(above); put(cap ? 'top' : 'dirt', bx, by, -0.5, 1, 1, 3); if (cap) put('grass', bx, by + 0.4, -0.5, 1.02, 0.22, 3.04); }
      else if (c === 'B') put('brick', bx, by, 0, 0.98, 0.98, 1.4);
      else if (c === '?') put('q', bx, by, 0, 0.98, 0.98, 1.4);
      else if (c === 'U') put('u', bx, by, 0, 0.98, 0.98, 1.4);
      else if (c === 'c') put('coin', bx, by + Math.sin(clock * 3 + tx) * 0.05, 0, 0.62, 0.62, 0.62, Math.PI / 2, clock * 3 + tx * 0.7);
      else if (c === 'P') { if (tx > 0 && grid[ty][tx - 1] === 'P') continue; put('pb', tx + 1, by, 0, 1.8, 1, 1.8); if (!(ty > 0 && grid[ty - 1][tx] === 'P')) put('pr', tx + 1, by + 0.36, 0, 2.1, 0.32, 2.1); }
    }
    for (const k of Object.keys(this.inst)) { this.inst[k].count = cnt[k]; this.inst[k].instanceMatrix.needsUpdate = true; }
    this.castle.position.set(w.flagX + 1.7, GROUND, -1.2); this.flagG.position.set(w.flagX + 0.5, GROUND, 0.2);
    this.flagG.userData.cloth.rotation.y = Math.sin(clock * 4) * 0.25;
    for (const k of Object.keys(this.heroes)) this.heroes[k].visible = false;
    const keep = !o.inMenu;
    if (keep) {
      const key = o.girl ? 'g' : 'b'; if (!this.heroes[key]) { this.heroes[key] = makeHero(o.girl); this.scene.add(this.heroes[key]); }
      const hero = this.heroes[key], p0 = w.p, u = hero.userData, h = p0.h;
      hero.visible = !(p0.inv > 0 && Math.sin(clock * 40) < -0.2);
      const won = w.state === 'won'; const hop = won ? Math.abs(Math.sin(clock * 8)) * 0.3 : 0;
      hero.position.set(p0.x + p0.w / 2, Y(p0.y + p0.h) + hop, 0);
      hero.scale.setScalar(h > 1.2 ? 1.75 : 1.15); u.tail.rotation.y = Math.sin(clock * 6) * 0.35;
      const vx = won ? 0 : p0.vx, ground = p0.ground;
      const targetY = won ? 0.3 : p0.face > 0 ? 1.1 : -1.1;
      hero.rotation.y += (targetY - hero.rotation.y) * Math.min(1, dt * 14);
      const run = ground ? Math.min(1, Math.abs(vx) / 5) : 0; const ph = clock * 14;
      if (ground) {
        u.lL.rotation.x = Math.sin(ph) * 0.9 * run; u.lR.rotation.x = -Math.sin(ph) * 0.9 * run; u.aL.rotation.x = -Math.sin(ph) * 0.8 * run; u.aR.rotation.x = Math.sin(ph) * 0.8 * run;
        u.rig.position.y = Math.abs(Math.sin(ph)) * 0.07 * run; u.torso.rotation.x = 0.12 * run;
      } else { u.lL.rotation.x = -0.9; u.lR.rotation.x = 0.5; u.aL.rotation.x = 2.5; u.aR.rotation.x = 2.5; u.rig.position.y = 0; u.torso.rotation.x = p0.vy < 0 ? -0.1 : 0.1; }
      if (won) { u.aL.rotation.x = u.aR.rotation.x = 3.0 + Math.sin(clock * 12) * 0.3; }
      u.head.rotation.z = Math.sin(clock * 2) * 0.04;
      this.shadow.visible = true; this.shadow.position.set(hero.position.x, this._groundY(w, p0) + 0.02, 0.1);
    } else this.shadow.visible = false;
    const bugsN = keep ? w.enemies.length : 0;
    while (this.bugs.length < bugsN) { const b = makeBug(); this.scene.add(b); this.bugs.push(b); }
    this.bugs.forEach((b, i) => {
      const e = keep ? w.enemies[i] : null; if (!e) { b.visible = false; return; }
      const age = e.dead ? w.time - (e.deadAt || 0) : 0; b.visible = !(e.dead && age > 0.6) && e.x > camX - 3 && e.x < camX + vw + 3;
      b.position.set(e.x + 0.45, Y(e.y + 1), 0); b.rotation.y = (Math.sign(e.vx) || 1) * 1.2;
      const bu = b.userData; const wob = Math.sin(clock * 12 + i) * (e.dead ? 0 : 1);
      bu.body.scale.y = e.dead ? 0.22 : 1 + Math.abs(wob) * 0.04; bu.body.position.y = e.dead ? 0 : Math.abs(wob) * 0.05; bu.f[0].position.z = 0.08 + wob * 0.12; bu.f[1].position.z = 0.08 - wob * 0.12;
    });
    const ms = keep ? w.mush.filter((x) => !x.taken) : [];
    while (this.mush.length < ms.length) { const g = makeMushroom(); this.scene.add(g); this.mush.push(g); }
    this.mush.forEach((g, i) => { const mm = ms[i]; g.visible = !!mm; if (mm) { g.position.set(mm.x + 0.45, Y(mm.y + 1), 0); g.rotation.y = Math.sin(clock * 3) * 0.4; } });
    for (let i = this.chunks.length - 1; i >= 0; i--) { const c = this.chunks[i], u = c.userData; u.life += dt; u.vy -= 18 * dt; c.position.x += u.vx * dt; c.position.y += u.vy * dt; c.position.z += u.vz * dt; c.rotation.x += dt * 9; c.scale.setScalar(Math.max(0.01, 0.2 * (1 - u.life / 0.9))); if (u.life > 0.9) { this.scene.remove(c); this.chunks.splice(i, 1); } }
    this.renderer.render(this.scene, this.camera);
  }
  _groundY(w, p) { const tx = Math.floor(p.x + p.w / 2); for (let ty = Math.max(0, Math.floor(p.y + p.h - 0.01)); ty < w.H; ty++) { const c = w.grid[ty] && w.grid[ty][tx]; if (c && c !== ' ' && c !== 'c' && c !== 'F') return Y(ty); } return -50; }
}
