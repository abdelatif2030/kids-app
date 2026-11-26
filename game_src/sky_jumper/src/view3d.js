// three.js renderer for «النطاط»: the endless climber is a lit 3D scene seen head-on. A real 3D green creature (squash and stretch,
// kicking legs, long snout, big eyes, propeller hat and jetpack with flame), floating grass islands, crystal movers, crumbling rocks,
// coil springs, purple horned monsters, a sky that deepens with height, clouds, balloons and far-away islands.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';
import { W } from './sim.js';

const TAU = Math.PI * 2;
const geo = {
  sph: new THREE.SphereGeometry(0.5, 18, 14), hem: new THREE.SphereGeometry(0.5, 16, 8, 0, TAU, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 16), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 14),
  tor: new THREE.TorusGeometry(0.5, 0.1, 8, 20), tcone: new THREE.CylinderGeometry(0.5, 0.25, 1, 14),
};
const mats = new Map();
const M = (c, em = 0, o = {}) => { const k = `${c}|${em}|${JSON.stringify(o)}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em, ...o })); return mats.get(k); };
const mesh = (g, m, x = 0, y = 0, z = 0, a = 1, b = 1, c = 1) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(a, b, c); return o; };

function makeHero() {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const skin = M(0xa6e03a), dark = M(0x5aa022), belly = M(0xeaf8a8), eyeW = M(0xffffff), pup = M(0x16161e);
  body.add(mesh(geo.sph, skin, 0, 0.62, 0, 1.3, 1.25, 1.1)); body.add(mesh(geo.sph, belly, 0, 0.5, 0.36, 0.9, 0.9, 0.55));
  for (const s of [-1, 1]) { // spots, ears
    body.add(mesh(geo.sph, dark, s * 0.32, 0.95, -0.1, 0.18, 0.14, 0.1));
    body.add(mesh(geo.sph, skin, s * 0.42, 1.34, -0.05, 0.42, 0.44, 0.2)); body.add(mesh(geo.sph, M(0xff8ab0), s * 0.42, 1.34, 0.04, 0.28, 0.3, 0.12));
  }
  const head = new THREE.Group(); head.position.set(0, 0.88, 0.2); body.add(head);
  const sn = mesh(geo.sph, M(0x8ed02e), 0, -0.1, 0.42, 0.6, 0.4, 0.55); head.add(sn); head.add(mesh(geo.sph, M(0x4a7a1a), 0.1, 0.02, 0.7, 0.1, 0.08, 0.08)); head.add(mesh(geo.sph, M(0x4a7a1a), -0.1, 0.02, 0.7, 0.1, 0.08, 0.08));
  const sm = mesh(geo.hem, M(0x7a1a2a), 0, -0.24, 0.55, 0.32, 0.14, 0.2); sm.rotation.x = Math.PI; head.add(sm);
  for (const s of [-1, 1]) {
    head.add(mesh(geo.sph, eyeW, s * 0.26, 0.22, 0.38, 0.44, 0.5, 0.22)); head.add(mesh(geo.sph, pup, s * 0.26, 0.2, 0.5, 0.22, 0.28, 0.1)); head.add(mesh(geo.sph, eyeW, s * 0.26 + 0.05, 0.28, 0.58, 0.08, 0.08, 0.04));
  }
  const tail = mesh(geo.tor, skin, 0.7, 0.4, -0.3, 0.9, 0.9, 0.9); tail.rotation.y = 1.2; body.add(tail);
  const legs = []; for (const s of [-1, 1]) { const l = new THREE.Group(); l.position.set(s * 0.28, 0.12, 0.05); l.add(mesh(geo.cyl, dark, 0, -0.1, 0, 0.2, 0.3, 0.2)); l.add(mesh(geo.sph, M(0xff8a3a), 0, -0.28, 0.1, 0.36, 0.18, 0.5)); body.add(l); legs.push(l); }
  const arms = []; for (const s of [-1, 1]) { const a = new THREE.Group(); a.position.set(s * 0.52, 0.65, 0.05); a.add(mesh(geo.cyl, dark, s * 0.1, 0, 0, 0.16, 0.34, 0.16)).children.at(-1).rotation.z = s * 1.0; a.add(mesh(geo.sph, skin, s * 0.26, -0.12, 0, 0.2, 0.2, 0.2)); body.add(a); arms.push(a); }
  // propeller hat
  const prop = new THREE.Group(); prop.position.set(0, 1.62, 0.1); prop.add(mesh(geo.hem, M(0xe8402a), 0, -0.12, 0, 0.6, 0.4, 0.6)); prop.add(mesh(geo.cyl, M(0x888899), 0, 0.12, 0, 0.06, 0.2, 0.06));
  const blades = new THREE.Group(); blades.position.y = 0.24; for (let i = 0; i < 2; i++) { const b = mesh(geo.box, M(0xffd23a), 0, 0, 0, 1.5, 0.04, 0.2); b.rotation.y = i * Math.PI / 2; blades.add(b); } prop.add(blades); prop.visible = false; body.add(prop);
  // jetpack
  const jet = new THREE.Group(); jet.position.set(0, 0.6, -0.55);
  for (const s of [-1, 1]) { jet.add(mesh(geo.cyl, M(0xcfd6e6), s * 0.22, 0, 0, 0.3, 0.8, 0.3)); jet.add(mesh(geo.cone, M(0xe8402a), s * 0.22, 0.5, 0, 0.3, 0.26, 0.3)); }
  const flames = []; for (const s of [-1, 1]) { const f = mesh(geo.cone, M(0xffb02a, 0xff5a10), s * 0.22, -0.7, 0, 0.3, 0.9, 0.3); f.rotation.x = Math.PI; jet.add(f); flames.push(f); } jet.visible = false; body.add(jet);
  const shield = mesh(geo.sph, new THREE.MeshBasicMaterial({ color: 0xaee8ff, transparent: true, opacity: 0.35 }), 0, 0.7, 0, 2.2, 2.3, 2.2); shield.visible = false; g.add(shield);
  g.userData = { body, head, legs, arms, prop, blades, jet, flames, shield };
  return g;
}
function makeMonster() {
  const g = new THREE.Group(); const sk = M(0x9a5ad8);
  g.add(mesh(geo.sph, sk, 0, 0, 0, 1.25, 1.1, 1.0)); g.add(mesh(geo.sph, M(0xc89af0), 0, -0.2, 0.3, 0.8, 0.6, 0.5));
  for (const s of [-1, 1]) {
    const h = mesh(geo.cone, M(0xfff0d0), s * 0.38, 0.6, 0, 0.2, 0.4, 0.2); h.rotation.z = -s * 0.35; g.add(h);
    g.add(mesh(geo.sph, M(0xffffff), s * 0.25, 0.12, 0.42, 0.36, 0.42, 0.2)); g.add(mesh(geo.sph, M(0x16161e), s * 0.25, 0.1, 0.52, 0.18, 0.22, 0.1));
    const b = mesh(geo.box, M(0x2a0a4a), s * 0.25, 0.4, 0.46, 0.34, 0.07, 0.06); b.rotation.z = -s * 0.4; g.add(b);
    g.add(mesh(geo.sph, sk, s * 0.7, -0.15, 0.05, 0.3, 0.3, 0.3)); g.add(mesh(geo.sph, sk, s * 0.3, -0.62, 0.05, 0.3, 0.26, 0.4));
  }
  const m = mesh(geo.hem, M(0x3a0a3a), 0, -0.2, 0.5, 0.5, 0.2, 0.2); m.rotation.x = Math.PI; g.add(m);
  for (const x of [-0.14, 0, 0.14]) g.add(mesh(geo.cone, M(0xffffff), x, -0.23, 0.56, 0.08, 0.1, 0.06)).children.at(-1).rotation.x = Math.PI;
  return g;
}
function makePlat(kind, w) {
  const g = new THREE.Group();
  if (kind === 'move') {
    g.add(mesh(geo.box, M(0x4a9ae8, 0x103060), 0, 0, 0, w, 0.36, 1.1)); g.add(mesh(geo.box, M(0xaee0ff, 0x204a80), 0, 0.2, 0, w * 0.96, 0.06, 1.0));
    for (const s of [-1, 1]) g.add(mesh(geo.cone, M(0x7ac8ff, 0x1a4a8a), s * (w / 2 + 0.1), 0, 0, 0.3, 0.5, 0.3)).children.at(-1).rotation.z = -s * 1.57;
  } else if (kind === 'crumble') {
    g.add(mesh(geo.box, M(0xb08850), 0, 0, 0, w * 0.98, 0.4, 1.1)); g.add(mesh(geo.box, M(0xc8a060), 0, 0.22, 0, w * 0.95, 0.08, 1.0));
    for (const x of [-0.3, 0.35]) g.add(mesh(geo.box, M(0x4a2a12), x * w, 0.05, 0.56, 0.05, 0.4, 0.02));
  } else {
    g.add(mesh(geo.tcone, M(0x8a5a32), 0, -0.4, 0, w * 0.96, 0.8, 1.1)); g.add(mesh(geo.cyl, M(0x5ac850), 0, 0.02, 0, w, 0.22, 1.2)); g.add(mesh(geo.cyl, M(0x7ae060), 0, 0.14, 0, w * 0.86, 0.06, 1.0));
    for (const x of [-0.35, 0.3]) g.add(mesh(geo.sph, M(0x3aa040), x * w, 0.2, 0.3, 0.3, 0.22, 0.3));
    if (kind === 'spring') {
      const sp = new THREE.Group(); sp.position.y = 0.15; for (let i = 0; i < 4; i++) sp.add(mesh(geo.tor, M(0xc8ccd8), 0, 0.08 + i * 0.16, 0, 0.6, 0.6, 0.6)).children.at(-1).rotation.x = Math.PI / 2;
      sp.add(mesh(geo.cyl, M(0xe8564a), 0, 0.72, 0, 0.8, 0.12, 0.8)); g.add(sp); g.userData.spring = sp;
    }
  }
  return g;
}
function makeProp() { const g = new THREE.Group(); g.add(mesh(geo.hem, M(0xe8402a), 0, 0, 0, 0.7, 0.5, 0.7)); g.add(mesh(geo.cyl, M(0x888899), 0, 0.25, 0, 0.06, 0.2, 0.06)); const b = new THREE.Group(); b.position.y = 0.36; for (let i = 0; i < 2; i++) { const x = mesh(geo.box, M(0xffd23a), 0, 0, 0, 1.2, 0.04, 0.18); x.rotation.y = i * 1.57; b.add(x); } g.add(b); g.userData.b = b; return g; }
function makeJet() { const g = new THREE.Group(); for (const s of [-1, 1]) { g.add(mesh(geo.cyl, M(0xcfd6e6), s * 0.2, 0, 0, 0.3, 0.8, 0.3)); g.add(mesh(geo.cone, M(0xe8402a), s * 0.2, 0.5, 0, 0.3, 0.26, 0.3)); } g.add(mesh(geo.box, M(0x6a7a9a), 0, 0.1, 0, 0.5, 0.2, 0.2)); return g; }
function cloud(s) { const g = new THREE.Group(); const m = M(0xffffff, 0x9aa4b4); for (const [x, y, r] of [[0, 0, 1.1], [1.0, -0.2, 0.9], [-1.0, -0.15, 0.85], [0.4, 0.45, 0.85], [-0.4, 0.35, 0.7]]) g.add(mesh(geo.sph, m, x, y, 0, r * 1.5, r, r)); g.scale.setScalar(s); return g; }

export class View3D {
  constructor(el) {
    this.el = el;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false }), { preset: 'fresh', tune: { bloom: [0.14, 0.4, 0.92] } });
    this.dom = this.renderer.domElement; this.dom.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(36, 1, 0.5, 300);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9ab0d0, 1.2)); const sun = new THREE.DirectionalLight(0xfff0d8, 1.3); sun.position.set(-6, 10, 14); this.scene.add(sun);
    this.w = 1; this.h = 1; this.dist = 30; this.heroes = [makeHero(), makeHero(), makeHero()]; this.heroes.forEach((x) => this.scene.add(x));
    this.pool = { plat: new Map(), mon: new Map(), item: new Map() }; this.shots = []; this.bursts = []; this.cl = [];
    for (let i = 0; i < 14; i++) { const c = cloud(1.3 + (i % 4) * 0.5); c.userData = { x: -26 + ((i * 53) % 52), z: -8 - (i % 5) * 7, y: (i * 9.7) % 60 }; this.cl.push(c); this.scene.add(c); }
    this.isl = []; for (let i = 0; i < 6; i++) { const g = new THREE.Group(); g.add(mesh(geo.tcone, M(0x7a6050), 0, -1.5, 0, 6, 3, 6)).children; g.add(mesh(geo.cyl, M(0x5ac850), 0, 0, 0, 6.4, 0.7, 6.4)); g.add(mesh(geo.cone, M(0x2a9a4a), 0.6, 1.6, 0, 2.2, 2.6, 2.2)); g.add(mesh(geo.cyl, M(0x6a4a2a), 0.6, 0.6, 0, 0.4, 1, 0.4)); g.userData = { x: (i % 2 ? 1 : -1) * (14 + (i * 3) % 7), z: -16 - (i % 3) * 8, y: i * 24 }; this.isl.push(g); this.scene.add(g); }
    this.sky = document.createElement('canvas'); this.sky.width = 4; this.sky.height = 256; this.skyT = new THREE.CanvasTexture(this.sky); this.skyT.colorSpace = THREE.SRGBColorSpace; this.scene.background = this.skyT; this.skyK = -1;
    this.shadows = [];
    this._v = new THREE.Vector3(); this.lastClock = null; this.last = { camY: 0 };
    this.sg = mesh(geo.sph, M(0xff9a2a, 0xff6a10), 0, 0, 0, 0.45, 0.45, 0.45);
  }
  setSize(w, h) { this.w = w; this.h = h; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  project(x, y) { this._v.set(x, y, 0).project(this.camera); return [(this._v.x * 0.5 + 0.5) * this.w, (-this._v.y * 0.5 + 0.5) * this.h]; }
  fieldX(cx, left) { const a = this.project(0, this.last.camY + 4)[0], b = this.project(W, this.last.camY + 4)[0]; return Math.max(0, Math.min(1, (cx - left - a) / (b - a))); }
  dispose() { this.renderer.dispose(); }
  burst(x, y, kind) {
    const cols = kind === 'squash' ? [0xc89af0, 0xffffff, 0xffd23a] : kind === 'crumble' ? [0xb08850, 0x8a6a3a] : [0xffffff, 0xffe58a, 0x9ae8ff];
    for (let i = 0; i < 10; i++) { const m = mesh(geo.sph, M(cols[i % cols.length], cols[i % cols.length] === 0xffffff ? 0x888888 : 0), x, y, 0.8, 0.22, 0.22, 0.22); m.userData = { vx: (Math.random() - 0.5) * 7, vy: 1 + Math.random() * 5, life: 0 }; this.scene.add(m); this.bursts.push(m); }
  }
  _get(map, key, make) { let o = map.get(key); if (!o) { o = make(); this.scene.add(o); map.set(key, o); } o.userData.seen = true; return o; }
  _sweep(map) { for (const [k, o] of map) { if (!o.userData.seen) { this.scene.remove(o); map.delete(k); } else o.userData.seen = false; } }
  render(c, camY, mode, clock, p, menuT) {
    const dt = Math.min(0.05, Math.max(0, clock - (this.lastClock ?? clock))); this.lastClock = clock;
    const t = Math.tan((this.camera.fov * Math.PI) / 360);
    const land = this.camera.aspect > 1; const visH = land ? 12.6 : 16.4, visW = W + 1.2;
    const dist = Math.max(visH / 2, visW / 2 / this.camera.aspect) / t;
    const cam = c ? Math.max(camY - 4, 0) : 0; const cy = cam + (land ? 4.9 : 6.5); this.last.camY = cam;
    this.camera.position.set(W / 2, cy, dist); this.camera.lookAt(W / 2, cy, 0);
    // sky deepens with height
    const k = Math.round(Math.min(1, cam / 400) * 20);
    if (k !== this.skyK) { this.skyK = k; const hg = k / 20; const g = this.sky.getContext('2d'); const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, `rgb(${Math.round(60 - 40 * hg)},${Math.round(150 - 70 * hg)},${Math.round(250 - 30 * hg)})`); gr.addColorStop(1, `rgb(${Math.round(200 - 60 * hg)},${Math.round(236 - 70 * hg)},255)`); g.fillStyle = gr; g.fillRect(0, 0, 4, 256); this.skyT.needsUpdate = true; }
    // far scenery with parallax
    for (const o of this.cl) { const u = o.userData; const par = 0.3 + (-u.z) * 0.02; let y = (u.y - cam * par) % 70; if (y < -12) y += 70; o.position.set(W / 2 + u.x + Math.sin(clock * 0.1 + u.y) * 1.5, cam + y - 5, u.z); }
    for (const o of this.isl) { const u = o.userData; let y = (u.y - cam * 0.35) % 150; if (y < -20) y += 150; o.position.set(W / 2 + u.x, cam + y - 8, u.z); o.rotation.y = Math.sin(clock * 0.2 + u.y) * 0.3; }
    if (!c) { this._menu(menuT || clock, clock); this.renderer.render(this.scene, this.camera); return; }
    // platforms
    for (const pl of c.plats) {
      if (pl.dead || pl.y < cam - 3 || pl.y > cam + 18) continue;
      const o = this._get(this.pool.plat, pl.id, () => makePlat(pl.kind, pl.w)); o.position.set(pl.x, pl.y - 0.1, 0);
      if (o.userData.spring) o.userData.spring.scale.y = p.vy > 14 && Math.abs(p.x - pl.x) < 1 && Math.abs(p.y - pl.y) < 2.2 ? 1.5 : 1;
      if (pl.kind === 'move') o.position.y += Math.sin(clock * 3 + pl.id) * 0.04;
    }
    this._sweep(this.pool.plat);
    for (const m of c.mons) { if (m.dead) continue; const o = this._get(this.pool.mon, m.id, makeMonster); o.position.set(m.x, m.y + Math.sin(clock * 4 + m.id) * 0.15, 0.2); o.rotation.y = Math.sin(clock * 2 + m.id) * 0.4; o.rotation.z = Math.sin(clock * 5 + m.id) * 0.08; }
    this._sweep(this.pool.mon);
    for (const it of c.items) { const o = this._get(this.pool.item, it.id, () => (it.kind === 'jetpack' ? makeJet() : makeProp())); o.position.set(it.x, it.y + Math.sin(clock * 3 + it.id) * 0.12, 0.2); o.rotation.y = clock * 2; if (o.userData.b) o.userData.b.rotation.y = clock * 30; }
    this._sweep(this.pool.item);
    while (this.shots.length < c.shots.length) { const m = this.sg.clone(); this.scene.add(m); this.shots.push(m); }
    this.shots.forEach((m, i) => { const s = c.shots[i]; m.visible = !!s; if (s) { m.position.set(s.x, s.y, 0.3); m.scale.setScalar(0.5 + Math.sin(clock * 30) * 0.06); } });
    // creature, drawn wrapped at both edges
    const offs = [0, -W, W];
    this.heroes.forEach((hero, i) => {
      const x = p.x + offs[i]; hero.visible = i === 0 || (x > -0.9 && x < W + 0.9); if (!hero.visible) return;
      const u = hero.userData, up = p.vy > 6, down = p.vy < -6;
      hero.position.set(x, p.y, 0.3); hero.scale.setScalar(1.35); hero.rotation.y = (p.face >= 0 ? 0.55 : -0.55);
      u.body.scale.set(up ? 0.88 : down ? 1.08 : 1, up ? 1.16 : down ? 0.9 : 1, up ? 0.9 : 1);
      u.legs[0].rotation.x = u.legs[1].rotation.x = up ? 0.7 : -0.4 + Math.sin(clock * 10) * 0.1; u.arms[0].rotation.z = up ? 1.2 : 0.2; u.arms[1].rotation.z = up ? -1.2 : -0.2;
      u.head.rotation.z = Math.sin(clock * 4) * 0.05;
      const fly = p.fly > 0; u.prop.visible = fly && p.flyKind === 'propeller'; u.jet.visible = fly && p.flyKind === 'jetpack';
      u.blades.rotation.y = clock * 40; u.flames.forEach((f, j) => { f.scale.y = 0.9 + Math.sin(clock * 50 + j) * 0.35; });
      u.shield.visible = p.shield > 0 && Math.floor(clock * 10) % 2 === 0;
    });
    for (let i = this.bursts.length - 1; i >= 0; i--) { const b = this.bursts[i], u = b.userData; u.life += dt; u.vy -= 14 * dt; b.position.x += u.vx * dt; b.position.y += u.vy * dt; b.scale.setScalar(Math.max(0.01, 0.22 * (1 - u.life / 0.7))); if (u.life > 0.7) { this.scene.remove(b); this.bursts.splice(i, 1); } }
    this.renderer.render(this.scene, this.camera);
  }
  _menu(t, clock) {
    // idle hero bouncing on a grass island in the menu
    const o = this._get(this.pool.plat, 'menu', () => makePlat('normal', 2.4)); o.position.set(W / 2, 2.2, 0);
    this._sweep(this.pool.plat);
    this.pool.plat.get('menu').userData.seen = true;
    const b = Math.abs(Math.sin(clock * 3)); const hero = this.heroes[0]; hero.visible = true; this.heroes[1].visible = this.heroes[2].visible = false;
    hero.position.set(W / 2, 2.35 + b * 2.0, 0.3); hero.scale.setScalar(1.35); hero.rotation.y = Math.sin(clock) * 0.6; const u = hero.userData; u.body.scale.set(1, 1 + (b < 0.15 ? -0.1 : 0.08), 1);
    u.legs.forEach((l) => { l.rotation.x = b > 0.2 ? 0.7 : -0.3; }); u.arms[0].rotation.z = 1.2; u.arms[1].rotation.z = -1.2; u.prop.visible = u.jet.visible = u.shield.visible = false;
  }
}
