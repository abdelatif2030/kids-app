// three.js renderer for «Chomp Maze»: the maze is a glossy neon-candy 3D board seen from a tilted camera. A real 3D chomper (hinged jaws,
// eyes, bow), four wobbling 3D ghosts whose eyes follow their direction, glowing dots, bobbing power cherries, lit neon walls.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';

const TAU = Math.PI * 2;
const geo = {
  sph: new THREE.SphereGeometry(0.5, 20, 14), hem: new THREE.SphereGeometry(0.5, 22, 10, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 20), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 12),
  disc: new THREE.CircleGeometry(0.5, 20),
};
const mats = new Map();
const M = (c, em = 0, o = {}) => { const k = `${c}|${em}|${JSON.stringify(o)}`; if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color: c, emissive: em, roughness: 0.45, metalness: 0.05, ...o })); return mats.get(k); };
const mesh = (g, m, x = 0, y = 0, z = 0, a = 1, b = 1, c = 1) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(a, b, c); return o; };
const DIR = { r: 0, d: -Math.PI / 2, l: Math.PI, u: Math.PI / 2 };

function turn(cur, want, k) { const d = ((want - cur + Math.PI * 3) % TAU) - Math.PI; return cur + d * Math.min(1, k); }
function makeChomper() {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const skin = M(0xffd92a, 0x6a5200, { side: THREE.DoubleSide, roughness: 0.35 }), inner = M(0xc0344a, 0x300010, { side: THREE.DoubleSide });
  const top = new THREE.Group(); top.add(mesh(geo.hem, skin, 0, 0, 0, 0.92, 0.92, 0.92)); top.add(mesh(geo.hem, inner, 0, 0, 0, 0.8, 0.8, 0.8));
  const bot = new THREE.Group(); const bh = mesh(geo.hem, skin, 0, 0, 0, 0.92, -0.92, 0.92); bot.add(bh); bot.add(mesh(geo.hem, inner, 0, 0, 0, 0.8, -0.8, 0.8));
  body.add(top, bot);
  for (const s of [-1, 1]) { top.add(mesh(geo.sph, M(0xffffff), 0.12, 0.34, s * 0.2, 0.2, 0.24, 0.2)); top.add(mesh(geo.sph, M(0x16161e), 0.17, 0.35, s * 0.2, 0.1, 0.13, 0.1)); }
  const tongue = mesh(geo.sph, M(0xff7a9a), 0.12, -0.02, 0, 0.3, 0.12, 0.28); body.add(tongue);
  const cap = mesh(geo.hem, M(0xe8402a, 0x300808), -0.1, 0.32, 0, 0.5, 0.34, 0.5); top.add(cap); top.add(mesh(geo.sph, M(0xffffff), -0.1, 0.5, 0, 0.12, 0.12, 0.12));
  g.userData = { body, top, bot };
  return g;
}
function makeGhost(color) {
  const g = new THREE.Group(); const sk = new THREE.Group(); g.add(sk);
  const bodyM = new THREE.MeshStandardMaterial({ color, emissive: new THREE.Color(color).multiplyScalar(0.25), roughness: 0.4 });
  sk.add(mesh(geo.hem, bodyM, 0, 0.1, 0, 0.9, 1.0, 0.9)); sk.add(mesh(geo.cyl, bodyM, 0, -0.18, 0, 0.9, 0.55, 0.9));
  const skirt = []; for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; const s = mesh(geo.sph, bodyM, Math.cos(a) * 0.33, -0.46, Math.sin(a) * 0.33, 0.3, 0.3, 0.3); sk.add(s); skirt.push(s); }
  const eyes = new THREE.Group(); eyes.position.y = 0.12; sk.add(eyes);
  const pupils = [];
  for (const s of [-1, 1]) { eyes.add(mesh(geo.sph, M(0xffffff), 0.3, 0, s * 0.17, 0.3, 0.36, 0.26)); const p = mesh(geo.sph, M(0x1a2aff, 0x0a1060), 0.42, 0, s * 0.17, 0.14, 0.2, 0.14); eyes.add(p); pupils.push(p); }
  const mouth = new THREE.Group(); mouth.position.set(0.42, -0.14, 0); mouth.visible = false; sk.add(mouth); for (let i = -2; i <= 2; i++) mouth.add(mesh(geo.sph, M(0xffffff, 0x888888), 0, (i % 2) * 0.05, i * 0.1, 0.07, 0.07, 0.07));
  g.userData = { sk, bodyM, skirt, eyes, pupils, mouth, color };
  return g;
}

export class View3D {
  constructor(el) {
    this.el = el;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'night', tune: { bloom: [0.35, 0.5, 0.8] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(40, 1, 0.5, 200);
    this.scene.background = new THREE.Color(0x0a0c2e); this.scene.fog = new THREE.Fog(0x0a0c2e, 40, 90);
    this.scene.add(new THREE.HemisphereLight(0xaab8ff, 0x302060, 1.0)); const sun = new THREE.DirectionalLight(0xffffff, 1.4); sun.position.set(-6, 14, 10); this.scene.add(sun);
    this.pm = makeChomper(); this.scene.add(this.pm); this.ghosts = []; this.w = 1; this.h = 1; this.key = null;
    this.dotM = null; this.bursts = []; this.stars = null;
    this.maze = null;
  }
  setSize(w, h) { this.w = w; this.h = h; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  dispose() { this.renderer.dispose(); }
  burst(x, y, color = 0xfff4c8) { for (let i = 0; i < 8; i++) { const m = mesh(geo.sph, M(color, color), x + 0.5, 0.5, y + 0.5, 0.14, 0.14, 0.14); m.userData = { vx: (Math.random() - 0.5) * 5, vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5) * 5, life: 0 }; this.scene.add(m); this.bursts.push(m); } }
  _build(g, wallColor) {
    if (this.maze) this.scene.remove(this.maze);
    const m = new THREE.Group(); this.maze = m;
    const cx = g.w / 2, cz = g.h / 2;
    const floor = mesh(geo.box, M(0x120e3a, 0x06041a, { roughness: 0.2, metalness: 0.4 }), cx, -0.3, cz, g.w + 1.4, 0.5, g.h + 1.4); m.add(floor);
    const rim = mesh(geo.box, M(wallColor, new THREE.Color(wallColor).multiplyScalar(0.5).getHex()), cx, -0.5, cz, g.w + 2.0, 0.3, g.h + 2.0); m.add(rim);
    const wm = M(wallColor, new THREE.Color(wallColor).multiplyScalar(0.35).getHex(), { roughness: 0.3 });
    const capM = M(0xffffff, new THREE.Color(wallColor).multiplyScalar(0.7).getHex(), { roughness: 0.25 });
    for (let y = 0; y < g.h; y++) for (let x = 0; x < g.w; x++) {
      const c = g.map[y][x];
      if (c === '#') { m.add(mesh(geo.box, wm, x + 0.5, 0.42, y + 0.5, 0.92, 0.9, 0.92)); m.add(mesh(geo.box, capM, x + 0.5, 0.9, y + 0.5, 0.74, 0.08, 0.74)); }
      else if (c === '-') m.add(mesh(geo.box, M(0xff9ad0, 0xff4aa0), x + 0.5, 0.35, y + 0.5, 1, 0.14, 0.2));
      else if (c !== ' ') { /* dots drawn per frame */ }
      if (c !== '#') m.add(mesh(geo.box, M(((x + y) & 1) ? 0x1a1450 : 0x161046), x + 0.5, -0.04, y + 0.5, 1, 0.05, 1));
    }
    this.scene.add(m);
    // dots (instanced) and power cherries
    if (this.dots) this.scene.remove(this.dots);
    this.dots = new THREE.InstancedMesh(geo.sph, M(0xfff4c8, 0xffd890), 400); this.dots.frustumCulled = false; this.scene.add(this.dots);
    this.cherries = []; for (let i = 0; i < 8; i++) { const c = new THREE.Group(); c.add(mesh(geo.sph, M(0xe8284a, 0x600010), -0.12, 0.18, 0, 0.34, 0.34, 0.34)); c.add(mesh(geo.sph, M(0xe8284a, 0x600010), 0.14, 0.14, 0.05, 0.3, 0.3, 0.3)); const st = mesh(geo.cyl, M(0x3a9a3a), 0, 0.46, 0, 0.04, 0.4, 0.04); st.rotation.z = 0.3; c.add(st); c.add(mesh(geo.sph, M(0x4ad060), 0.18, 0.64, 0, 0.26, 0.1, 0.16)); c.visible = false; this.scene.add(c); this.cherries.push(c); }
    this.cherry0 = this.cherries;
    // star dust backdrop
    if (this.stars) this.scene.remove(this.stars);
    const pos = []; for (let i = 0; i < 160; i++) pos.push((Math.random() - 0.5) * 90 + cx, -3 - Math.random() * 6, (Math.random() - 0.5) * 70 + cz);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0x9aa8ff, size: 0.5, sizeAttenuation: true })); this.scene.add(this.stars);
    this.maze.userData.cx = cx; this.maze.userData.cz = cz;
  }
  render(g, levelIdx, wallColor, clock, topPad = 0.1) {
    if (!g) { this.renderer.render(this.scene, this.camera); return; }
    const dt = Math.min(0.05, Math.max(0, clock - (this.lastClock ?? clock))); this.lastClock = clock;
    if (this.key !== g || this.wc !== wallColor) { this.key = g; this.wc = wallColor; this._build(g, new THREE.Color(wallColor).getHex()); }
    const cx = g.w / 2, cz = g.h / 2; const t = Math.tan((this.camera.fov * Math.PI) / 360); const asp = this.camera.aspect;
    const pitch = 1.08;
    const dFull = Math.max((g.h * 0.78) / (2 * t), (g.w * 0.62) / (2 * t * asp)) * 1.12; const d = Math.max(9, dFull * 0.55);
    const tx = g.pm.x + 0.5, tz = g.pm.y + 0.5; if (this.fx === undefined) { this.fx = tx; this.fz = tz; }
    const k = Math.min(1, dt * 5); this.fx += (tx - this.fx) * k; this.fz += (tz - this.fz) * k;
    const hx = Math.min(g.w, Math.max(0, this.fx)), hz = this.fz;
    this.camera.position.set(hx, Math.sin(pitch) * d, hz + Math.cos(pitch) * d + 0.3); this.camera.lookAt(hx, 0, hz - 0.6);
    // dots
    let n = 0; const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(); let ci = 0;
    for (let y = 0; y < g.h; y++) for (let x = 0; x < g.w; x++) {
      const c = g.map[y][x];
      if (c === '.') { if (n < 400) { m.compose(p.set(x + 0.5, 0.28 + Math.sin(clock * 4 + x + y) * 0.02, y + 0.5), q, s.set(0.2, 0.2, 0.2)); this.dots.setMatrixAt(n++, m); } }
      else if (c === 'o' && ci < 8) { const f = this.cherries[ci++]; f.visible = true; f.position.set(x + 0.5, 0.3 + Math.abs(Math.sin(clock * 3 + x)) * 0.12, y + 0.5); f.rotation.y = clock * 2; f.scale.setScalar(1.25); }
    }
    for (; ci < 8; ci++) this.cherries[ci].visible = false;
    this.dots.count = n; this.dots.instanceMatrix.needsUpdate = true;
    // chomper
    const pm = g.pm; const u = this.pm.userData; const open = (Math.abs(Math.sin(clock * 12)) * 0.5 + 0.05) * (pm.moving ? 1 : 0.35);
    this.pm.visible = !(g.invuln > 0 && Math.floor(clock * 10) % 2);
    this.pm.position.set(pm.x + 0.5, 0.48, pm.y + 0.5); this.pm.scale.setScalar(1.35);
    this.pm.rotation.y = turn(this.pm.rotation.y, DIR[pm.dir] ?? 0, dt * 16);
    u.top.rotation.z = open; u.bot.rotation.z = -open;
    u.body.position.y = Math.abs(Math.sin(clock * 12)) * 0.03 * (pm.moving ? 1 : 0);
    // ghosts
    while (this.ghosts.length < g.ghosts.length) { const gh = makeGhost(g.ghosts[this.ghosts.length].color); this.scene.add(gh); this.ghosts.push(gh); }
    g.ghosts.forEach((gh, i) => {
      const o = this.ghosts[i], u2 = o.userData; const scared = g.scared > 0 && !gh.eaten && gh.mode !== 'house'; const flash = scared && g.scared < 2 && Math.floor(clock * 8) % 2;
      o.position.set(gh.x + 0.5, 0.52 + Math.sin(clock * 5 + i) * 0.06 + (scared ? Math.abs(Math.sin(clock * 14)) * 0.05 : 0), gh.y + 0.5);
      const eyesOnly = gh.mode === 'eyes';
      u2.sk.children.forEach((c) => { if (c !== u2.eyes && c !== u2.mouth) c.visible = !eyesOnly; });
      const col = scared ? (flash ? 0xffffff : 0x2a4aff) : u2.color; u2.bodyM.color.set(col); u2.bodyM.emissive.set(scared ? (flash ? 0x888888 : 0x10208a) : new THREE.Color(u2.color).multiplyScalar(0.25));
      u2.mouth.visible = scared && !eyesOnly;
      if (DIR[gh.dir] !== undefined) o.rotation.y = turn(o.rotation.y, DIR[gh.dir], dt * 12);
      u2.skirt.forEach((sp, k) => { sp.position.y = -0.46 + Math.sin(clock * 10 + k * 1.5) * 0.05; });
      u2.pupils.forEach((pp) => { pp.material = M(scared ? 0xff4a4a : 0x1a2aff, scared ? 0x600000 : 0x0a1060); });
    });
    for (let i = this.bursts.length - 1; i >= 0; i--) { const b = this.bursts[i], u3 = b.userData; u3.life += dt; u3.vy -= 10 * dt; b.position.x += u3.vx * dt; b.position.y += u3.vy * dt; b.position.z += u3.vz * dt; b.scale.setScalar(Math.max(0.01, 0.14 * (1 - u3.life / 0.6))); if (u3.life > 0.6) { this.scene.remove(b); this.bursts.splice(i, 1); } }
    this.renderer.render(this.scene, this.camera);
  }
}
