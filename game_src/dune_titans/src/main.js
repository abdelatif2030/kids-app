// «سباق الدراجات النارية» — Motorcycle Racing. Entry: window.MotoRace.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A sunny coastal circuit with palms, mountains and grandstands: two laps against five animal riders. The bike
// accelerates by itself; drag (or hold a side) to lean, brake before tight corners, ride in a slipstream and fire
// nitro to overtake. No crashes: barriers are soft. No network, no links, no ads, no tracking.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Race, ROUNDS, RIDERS, LAPS, normalizeSave } from './sim.js';
import { pointAt, HALF_W, WALL } from './track.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadSprites, makeBillboardVehicle, loadGLBs, makeModelVehicle } from '../../cozy_kit/art.js';
import { mat, makeTruck, makeRock, makeCactus, makeTent, makeHelicopter, makeStand, makeGantry, makeChevron, makeMountain, roadTexture, makeClouds, meshTexture } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, CSS2, CSS3, h } from './ui.js';
import { polishRenderer } from './polish.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const helmetDot = (c) => `<i style="display:inline-block;width:1em;height:1em;border-radius:50%;background:#${c.toString(16).padStart(6, '0')};border:2px solid #fff;vertical-align:middle"></i>`;
const COLORS = [0xff7a1a, 0x2a7ae8, 0x2ab85a, 0x8a3ae8];
const GEARS = [0, 13, 23, 32, 41, 50, 99];
const hex = (c) => `#${c.toString(16).padStart(6, '0')}`;

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Puffs {
  constructor(scene, n, size, color) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, opacity: 0.7, depthWrite: false }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -50;
  }
  emit(x, y, z, vx, vy, vz, life = 0.6) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  update(dt) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -50;
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('mr-style')) document.head.append(h('style', { id: 'mr-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'mr-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'mr-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'mr-btn2', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'mr-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' }), { preset: 'warm' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'mr-layer' });
    this.speedlines = h('div', { class: 'mr-speedlines' });
    this.root.append(this.speedlines, this.layer);
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 900);
    this.input = { pointer: null, ox: 0, x: 0, t0: 0, moved: false, steer: 0, brake: false, nitro: false, keys: new Set() };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this.pics = null; this.glbs = null;
    Promise.all([this._fonts(), loadGLBs(GLTFLoader, this.base, ['vehicle-truck-red', 'vehicle-truck-yellow', 'vehicle-truck-green', 'vehicle-truck-purple']).then((g) => { this.glbs = g; }), loadSprites(THREE, this.base, ['truck_01','truck_02','truck_03','truck_04','truck_05','truck_06','truck_07','truck_08','truck_09','truck_10','truck_11','truck_12']).then((sp) => { this.pics = sp; })]).then(() => {
      this.loading.remove();
      this.showMenu();
      this.renderer.setAnimationLoop(() => this._frame());
    });
  }

  async _fonts() {
    try {
      const faces = [
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }),
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' }),
      ];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  _unit() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.root.classList.toggle('mr-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.baseFov = this.cw < this.ch ? 72 : 58;
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
  }

  // ---- the circuit ----------------------------------------------------------------------------------------------

  /** The level's painted backdrop (art/pano<N>.webp, the owner's picture): a mirrored ring around the circuit. Null when the picture is missing. */
  _panorama(roundIndex, cx, cz) {
    this._panoTex = this._panoTex || {};
    let tex = this._panoTex[roundIndex];
    if (tex === undefined) {
      tex = this._panoTex[roundIndex] = new THREE.TextureLoader().load(`${this.base}art/pano${roundIndex + 1}.webp`, undefined, undefined, () => { this._panoTex[roundIndex] = null; });
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.MirroredRepeatWrapping;
      tex.repeat.set(2, 0.66);
      tex.offset.set(0, 0.34);
    }
    if (!tex) return null;
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(780, 780, 330, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    cyl.position.set(cx, 150, cz);
    cyl.renderOrder = -10;
    return cyl;
  }

  _buildWorld(roundIndex) {
    if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    const rd = ROUNDS[roundIndex];
    this.race = new Race({ round: roundIndex, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    const tr = this.race.track;
    const s = (this.scene = new THREE.Scene());
    const sky = rd.sunset ? 0xff9a6a : 0x9fd8ff;
    s.background = new THREE.Color(sky);
    s.fog = new THREE.Fog(rd.sunset ? 0xffc08a : 0xf0dcb0, 140, 560);
    s.add(new THREE.HemisphereLight(rd.sunset ? 0xffe0c0 : 0xf4fbff, 0xb08a5a, rd.sunset ? 1.6 : 1.9));
    const sun = new THREE.DirectionalLight(rd.sunset ? 0xffb070 : 0xfff4dc, rd.sunset ? 1.6 : 1.5);
    sun.position.set(-120, 200, 80);
    s.add(sun);
    // centre of the circuit, the land, the beach and the sea around it
    let cx = 0;
    let cz = 0;
    for (let i = 0; i < tr.N; i++) { cx += tr.xs[i]; cz += tr.zs[i]; }
    cx /= tr.N;
    cz /= tr.N;
    this.center = { x: cx, z: cz };
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), mat(rd.sunset ? 0xc8854a : 0xe0b872));
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(cx, -0.4, cz);
    s.add(sea);
    const beach = new THREE.Mesh(new THREE.CircleGeometry(380, 64), mat(0xe8c888));
    beach.rotation.x = -Math.PI / 2;
    beach.position.set(cx, -0.2, cz);
    s.add(beach);
    const grass = new THREE.Mesh(new THREE.CircleGeometry(350, 64), mat(rd.sunset ? 0xd9965a : 0xeec47e));
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(cx, -0.1, cz);
    s.add(grass);
    // the road
    const tex = roadTexture();
    const pos = [];
    const uv = [];
    const idx = [];
    for (let i = 0; i <= tr.N; i++) {
      const l = pointAt(tr, i, -HALF_W);
      const r = pointAt(tr, i, HALF_W);
      pos.push(l.x, 0.02, l.z, r.x, 0.02, r.z);
      const v = (i * tr.step) / 11;
      uv.push(0, v, 1, v);
      if (i < tr.N) { const k = i * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    rg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    rg.setIndex(idx);
    rg.computeVertexNormals();
    s.add(new THREE.Mesh(rg, new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide })));
    // red and white curbs, and soft barriers
    s.add(this._band(tr, HALF_W, HALF_W + 1.3, 0.04, [0xe8342a, 0xffffff], 2));
    s.add(this._band(tr, -HALF_W - 1.3, -HALF_W, 0.04, [0xe8342a, 0xffffff], 2));
    s.add(this._wall(tr, WALL));
    s.add(this._wall(tr, -WALL));
    // the start line, gantry and the stands along the main straight
    const sl = new THREE.Mesh(new THREE.PlaneGeometry(HALF_W * 2, 2.4), new THREE.MeshLambertMaterial({ map: this._checker() }));
    const p0 = pointAt(tr, 0, 0);
    sl.rotation.x = -Math.PI / 2;
    sl.rotation.z = p0.a;
    sl.position.set(p0.x, 0.05, p0.z);
    s.add(sl);
    const gantry = makeGantry(HALF_W * 2 + 2);
    gantry.root.position.set(p0.x, 0, p0.z);
    gantry.root.rotation.y = p0.a;
    s.add(gantry.root);
    this.lights = gantry.lights;
    // outside of the circuit on the straight = away from the centre
    const ps = pointAt(tr, 30, 1);
    const sideOut = Math.hypot(ps.x - cx, ps.z - cz) > Math.hypot(tr.xs[30] - cx, tr.zs[30] - cz) ? 1 : -1;
    this.stands = [];
    for (const [i0, len] of [[12, 44], [40, 44]]) {
      const st = makeStand(len);
      const p = pointAt(tr, i0, sideOut * (WALL + 3));
      st.position.set(p.x, 0, p.z);
      st.rotation.y = p.a + (sideOut > 0 ? -Math.PI / 2 : Math.PI / 2);
      s.add(st);
      this.stands.push(st);
    }
    this.standRange = [5, 60];
    // chevrons at the sharp corners, on the outside
    let last = -99;
    for (let i = 0; i < tr.N; i++) {
      const c = tr.curv[i];
      if (Math.abs(c) > 0.022 && i - last > 25) {
        last = i;
        const k = (i - 12 + tr.N) % tr.N;
        const out = c > 0 ? 1 : -1; // turning left: outside is right
        const p = pointAt(tr, k, out * (WALL + 1.2));
        const ch = makeChevron();
        ch.position.set(p.x, 0, p.z);
        ch.rotation.y = p.a + Math.PI;
        ch.scale.x = c > 0 ? -1 : 1;
        s.add(ch);
      }
    }
    // palms (two instanced draws), mountain islands, a lighthouse
    this._palms(tr, sideOut);
    const pano = this._panorama(roundIndex, cx, cz);
    if (pano) s.add(pano);
    for (let i = 0; i < 9 && !pano; i++) {
      const a = (i / 9) * Math.PI * 2 + 0.3;
      const m = makeMountain(60 + (i % 3) * 25, 80 + (i % 4) * 30, [0xb07a4a, 0xc08a52, 0x9a6a42][i % 3]);
      m.position.set(cx + Math.cos(a) * (520 + (i % 2) * 90), -0.4, cz + Math.sin(a) * (520 + (i % 2) * 90));
      s.add(m);
    }
    if (!pano) s.add(makeClouds(14, cx, cz));
    // see-through catch fences in front of the crowd and the trees
    const mt = meshTexture();
    for (const side of [-1, 1]) {
      const pos = [];
      const uv = [];
      for (let i = 0; i <= tr.N; i++) {
        const p = pointAt(tr, i, side * (WALL + 0.5));
        pos.push(p.x, 0.9, p.z, p.x, 3.4, p.z);
        uv.push((i * tr.step) / 2.5, 0, (i * tr.step) / 2.5, 1);
      }
      const idx = [];
      for (let i = 0; i < tr.N; i++) { const k = i * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
      const fg = new THREE.BufferGeometry();
      fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      fg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      fg.setIndex(idx);
      mt.repeat.set(1, 2.5);
      s.add(new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: mt, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })));
      for (let i = 0; i < tr.N; i += 6) {
        const p = pointAt(tr, i, side * (WALL + 0.5));
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 5), mat(0x6a6e78));
        post.position.set(p.x, 2.1, p.z);
        s.add(post);
      }
    }
    // the riders
    this.bikes = this.race.riders.map((r, k) => {
      const P = this.pics;
      let b;
      const G = this.glbs; const kn = ['vehicle-truck-red', 'vehicle-truck-yellow', 'vehicle-truck-green', 'vehicle-truck-purple'];
      if (G && G[kn[0]]) {
        // real 3D trucks (Kenney, CC0): they turn with the track like real cars. The player's colour picks the model, the rivals take the others.
        const key = k === 0 ? kn[this.save.color % 4] : kn[(k + 1) % 4];
        b = makeModelVehicle(THREE, G[key] || G[kn[0]], { length: 4.6, yaw: 0, tint: k === 0 ? null : [0xffffff, 0xffe8c8, 0xc8e8ff, 0xf0d0ff, 0xd8ffd8][k % 5] });
      } else if (P && P.truck_01) {
        const names = ['truck_01', 'truck_02', 'truck_03', 'truck_04'];
        const mine = P[names[this.save.color]] || P.truck_01;
        const rivalKey = ['truck_05', 'truck_06', 'truck_07', 'truck_08', 'truck_09', 'truck_10', 'truck_11', 'truck_12'][(k - 1 + 8) % 8];
        const set = k === 0 ? { c: mine, crash: mine } : { c: P[rivalKey] || P.truck_05, crash: P[rivalKey] || P.truck_05 };
        b = makeBillboardVehicle(THREE, set, 2.4);
      } else b = makeTruck(k === 0 ? COLORS[this.save.color] : r.color, r.suit, r.num);
      s.add(b.root);
      return b;
    });
    this.dust = new Puffs(s, 140, 0.9, 0xc8b48a);
    this.sparks = new Puffs(s, 80, 0.35, 0xffd060);
    this.cam = null;
    this._minimapPath();
  }

  /** A coloured band along the track between two side distances (curbs). */
  _band(tr, a, b, y, colors, every) {
    const pos = [];
    const col = [];
    const c = colors.map((x) => new THREE.Color(x));
    for (let i = 0; i < tr.N; i++) {
      const p1 = pointAt(tr, i, a);
      const p2 = pointAt(tr, i, b);
      const p3 = pointAt(tr, i + 1, a);
      const p4 = pointAt(tr, i + 1, b);
      pos.push(p1.x, y, p1.z, p3.x, y, p3.z, p2.x, y, p2.z, p2.x, y, p2.z, p3.x, y, p3.z, p4.x, y, p4.z);
      const cc = c[Math.floor(i / every) % c.length];
      for (let k = 0; k < 6; k++) col.push(cc.r, cc.g, cc.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    return new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  }

  _wall(tr, side) {
    const pos = [];
    const col = [];
    const red = new THREE.Color(0xe8342a);
    const white = new THREE.Color(0xf4f4f4);
    for (let i = 0; i < tr.N; i++) {
      const p = pointAt(tr, i, side);
      const q = pointAt(tr, i + 1, side);
      pos.push(p.x, 0, p.z, q.x, 0, q.z, p.x, 0.9, p.z, p.x, 0.9, p.z, q.x, 0, q.z, q.x, 0.9, q.z);
      const cc = Math.floor(i / 3) % 2 ? red : white;
      for (let k = 0; k < 6; k++) col.push(cc.r, cc.g, cc.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    return new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  }

  _checker() {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 48;
    const g = c.getContext('2d');
    for (let y = 0; y < 3; y++) for (let x = 0; x < 16; x++) { g.fillStyle = (x + y) % 2 ? '#111' : '#fff'; g.fillRect(x * 16, y * 16, 16, 16); }
    return new THREE.CanvasTexture(c);
  }

  _palms(tr, sideOut) {
    // desert dressing: cacti, rocks, tents with flags, oasis pools beside the road (instanced where it is cheap)
    const s = this.scene;
    const rockG = makeRock(1, 0x9a7a5a).geometry;
    const spots = [];
    for (let i = 0; i < tr.N; i += 7) {
      for (const side of [-1, 1]) {
        if (side === sideOut && i > 2 && i < 66) continue;
        const k = (i * 7 + side * 3) % 5;
        const p = pointAt(tr, i, side * (WALL + 3 + ((i * 13) % 9)));
        spots.push([p.x, p.z, 0.8 + ((i * 7) % 5) * 0.35, i * 1.7, k]);
      }
    }
    const rocks = spots.filter((q) => q[4] < 3);
    const iR = new THREE.InstancedMesh(rockG, mat(0x9a7a5a), rocks.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    rocks.forEach(([x, z, sc, r], k) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r);
      m.compose(new THREE.Vector3(x, sc * 0.4, z), q, new THREE.Vector3(sc * 1.2, sc * 0.8, sc));
      iR.setMatrixAt(k, m);
    });
    s.add(iR);
    spots.filter((q2) => q2[4] === 3).forEach(([x, z, sc, r]) => { const c = makeCactus(sc); c.position.set(x, 0, z); c.rotation.y = r; s.add(c); });
    spots.filter((q2) => q2[4] === 4 && Math.floor(q2[3]) % 3 === 0).forEach(([x, z, sc, r], n) => { const t2 = makeTent([0xe8342a, 0xffd23a, 0x2a7ae8][n % 3]); t2.position.set(x, 0, z); t2.rotation.y = r; s.add(t2); });
    // dune humps far off (soft, no collision) and a helicopter that circles the arena
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      const d = new THREE.Mesh(new THREE.SphereGeometry(40 + (i % 4) * 14, 12, 8), mat(i % 2 ? 0xe0ae6a : 0xd89a58));
      d.scale.y = 0.35;
      d.position.set(this.center.x + Math.cos(a) * (420 + (i % 3) * 40), -6, this.center.z + Math.sin(a) * (420 + (i % 3) * 40));
      s.add(d);
    }
    // oasis pools by the road (the video's water crossings, here only for looks)
    for (let i = 20; i < tr.N; i += 70) {
      const p = pointAt(tr, i, (i % 2 ? 1 : -1) * (WALL + 9));
      const pool = new THREE.Mesh(new THREE.CircleGeometry(8, 20), mat(0x3ab8d8, 0x104050, 0.5));
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(p.x, 0.03, p.z);
      s.add(pool);
    }
    this.heli = makeHelicopter();
    s.add(this.heli);
  }

  _minimapPath() {
    const tr = this.race.track;
    let x0 = Infinity; let x1 = -Infinity; let z0 = Infinity; let z1 = -Infinity;
    for (let i = 0; i < tr.N; i++) { x0 = Math.min(x0, tr.xs[i]); x1 = Math.max(x1, tr.xs[i]); z0 = Math.min(z0, tr.zs[i]); z1 = Math.max(z1, tr.zs[i]); }
    const S = 200;
    const sc = (S * 0.72) / Math.max(x1 - x0, z1 - z0);
    this.mm = { sc, ox: S / 2 - ((x0 + x1) / 2) * sc, oz: S / 2 - ((z0 + z1) / 2) * sc, S };
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d');
    g.strokeStyle = '#fff';
    g.lineWidth = 7;
    g.lineJoin = 'round';
    g.beginPath();
    for (let i = 0; i <= tr.N; i++) {
      const k = i % tr.N;
      const x = this.mm.ox + tr.xs[k] * sc;
      const y = this.mm.oz + tr.zs[k] * sc;
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
    this.mmPath = c;
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'race' || this.paused || this.input.pointer !== null) return;
      const inp = this.input;
      inp.pointer = e.pointerId;
      inp.ox = inp.x = e.clientX;
      inp.t0 = performance.now();
      inp.moved = false;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      const inp = this.input;
      if (e.pointerId !== inp.pointer) return;
      inp.x = e.clientX;
      if (Math.abs(inp.x - inp.ox) > this.u * 2) inp.moved = true;
    });
    const up = (e) => { if (e.pointerId === this.input.pointer) { this.input.pointer = null; this.input.steer = 0; } };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.mr-cbtn')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'race' && (k === 'escape' || k === 'p')) this.pause();
        if (this.mode === 'race' && (k === ' ' || k === 'n' || k === 'shift') && !e.repeat) { this.input.nitro = true; e.preventDefault(); }
      } else this.input.keys.delete(k);
      if (this.mode === 'race' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'race') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'mr-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _readInput() {
    const inp = this.input;
    const k = inp.keys;
    let steer = 0;
    if (inp.pointer !== null) {
      if (inp.moved) steer = (inp.x - inp.ox) / (this.u * 14);
      else if (performance.now() - inp.t0 > 120) steer = inp.ox < this.cw / 2 ? -0.85 : 0.85; // holding a side
    }
    if (k.has('arrowleft') || k.has('a')) steer = -1;
    if (k.has('arrowright') || k.has('d')) steer = 1;
    steer = Math.max(-1, Math.min(1, steer));
    inp.steer = steer;
    const brake = inp.brake || k.has('arrowdown') || k.has('s');
    const nitro = inp.nitro;
    inp.nitro = false;
    return { steer, brake, nitro };
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'mr-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sound.unlock();
      this.sound.setMuted(!this.sound.muted);
      this.save.muted = this.sound.muted;
      this._saveNow();
      b.textContent = this.sound.muted ? '🔇' : '🔊';
    });
    return b;
  }
  _toastEl() {
    this.toastEl = h('div', { class: 'mr-toast' });
    return this.toastEl;
  }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _topLeft() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)'; }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.sound.engines(false);
    this.sound.setMode('menu');
    this.speedlines.style.opacity = '0';
    if (!this.scene || this.roundIndex !== this.save.unlocked - 1) { this.roundIndex = this.save.unlocked - 1; this._buildWorld(this.roundIndex); }
    this._clear();
    const nodes = ROUNDS.map((rd, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[rd.id] ?? 0;
      return h('button', {
        class: `mr-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('round')} ${rd.id} ${name(rd)}`,
        title: name(rd),
        onclick: () => {
          if (locked) { this.sound.play('no'); this.toast(t('locked')); return; }
          this.startRace(i);
        },
      }, locked ? '🔒' : num(rd.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    const colors = COLORS.map((c, i) => h('button', {
      class: `mr-col${this.save.color === i ? ' on' : ''}`, style: `background:${hex(c)}`, 'aria-label': t('bike'),
      onclick: () => { this.save.color = i; this._saveNow(); this._buildWorld(this.roundIndex); this.showMenu(); },
    }));
    this.layer.append(
      h('button', { class: 'mr-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'mr-dim', style: 'background:none;align-items:flex-end' },
        h('div', { class: 'mr-panel' },
          h('div', { class: 'mr-logo' }, t('title')),
          h('div', { class: 'mr-map' }, nodes),
          h('div', { style: 'display:flex;align-items:center;gap:calc(var(--u)*2);font-weight:900' }, t('bike'), h('div', { class: 'mr-colors' }, colors)),
          h('button', { class: 'mr-btn2 mr-big', onclick: () => this.startRace(this.save.unlocked - 1) }, '▶ ', t('race')))),
      this._mute(`bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
  }

  startRace(i) {
    this.roundIndex = i;
    this._buildWorld(i);
    this.mode = 'race';
    this.paused = false;
    this.sound.setMode('race');
    this.sound.engines(true);
    this._hud();
    this.lastGear = 1;
    this.crowdLap = -1;
  }

  _hud() {
    this._clear();
    const mini = h('canvas', { class: 'mr-mini', width: 200, height: 200 });
    this.hud = {
      pos: h('div', { class: 'mr-pos' }, h('b', {}, num(6)), h('span', {}, `/${num(6)}`)),
      lap: h('div', { class: 'mr-lap' }, ''),
      board: h('div', { class: 'mr-board' }),
      time: h('div', { class: 'mr-time' }, '0:00.0'),
      mini,
      speedo: h('div', { class: 'mr-speedo' }, h('b', {}, num(0)), h('span', {}, t('kmh')), h('i', {}, num(1))),
      brake: h('button', { class: 'mr-cbtn mr-brake', 'aria-label': t('brake') }, h('b', {}, '✋'), h('span', {}, t('brake'))),
      nitro: h('button', { class: 'mr-cbtn mr-nitro', 'aria-label': t('nitro') }, h('b', {}, '⚡'), h('span', {}, t('nitro'))),
      steer: h('div', { class: 'mr-steer' }, h('i')),
      lights: h('div', { class: 'mr-lights' }, [0, 1, 2, 3, 4].map(() => h('i'))),
      tag: h('div', { class: 'mr-tag' }),
      title: h('div', { class: 'mr-titlecard' }, h('b', {}, name(ROUNDS[this.roundIndex])), h('span', {}, `${t('round')} ${num(ROUNDS[this.roundIndex].id)} · ${ROUNDS[this.roundIndex].sunset ? t('evening') : t('morning')}`), h('i')),
    };
    this.mmCtx = mini.getContext('2d');
    const b = this.hud.brake;
    b.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this.input.brake = true; b.classList.add('on'); try { b.setPointerCapture(e.pointerId); } catch (_) { /* fine */ } });
    const off = () => { this.input.brake = false; b.classList.remove('on'); };
    b.addEventListener('pointerup', off);
    b.addEventListener('pointercancel', off);
    this.hud.nitro.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this.input.nitro = true; });
    this.layer.append(
      h('button', { class: 'mr-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      this.hud.pos, this.hud.lap, this.hud.board, this.hud.time, this.hud.mini, this.hud.speedo,
      this.hud.steer, this.hud.brake, this.hud.nitro, this.hud.lights, this.hud.tag, this.hud.title,
      this._mute(`top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
    this._hc = {};
    setTimeout(() => this.mode === 'race' && this.toast(t('how'), 3.5), 300);
  }

  _tag(text, secs = 1.2, red = false) {
    this.hud.tag.textContent = text;
    this.hud.tag.style.color = red ? '#ff3a2a' : '#fff';
    this.hud.tag.classList.add('show');
    clearTimeout(this._tagT);
    this._tagT = setTimeout(() => this.hud && this.hud.tag.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'race' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.brake = false;
    this.sound.suspend();
    const dim = h('div', { class: 'mr-dim' }, h('div', { class: 'mr-panel' },
      h('div', { class: 'mr-title' }, t('paused')),
      h('button', { class: 'mr-btn2', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'mr-btn2 wood', onclick: () => { this.sound.resume(); this.startRace(this.roundIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'mr-btn2 wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const race = this.race;
    const r = race.result;
    const i = this.roundIndex;
    this.mode = 'results';
    this.sound.setMode('menu');
    const id = ROUNDS[i].id;
    this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
    if (r.place <= 3 && i + 2 > this.save.unlocked && i + 1 < ROUNDS.length) this.save.unlocked = i + 2;
    if (!this.save.best[id] || r.time < this.save.best[id]) this.save.best[id] = Math.round(r.time * 10) / 10;
    this._saveNow();
    this.sound.play(r.place === 1 ? 'win' : 'finish');
    const top = race.order.slice(0, 3);
    const podium = [top[1], top[0], top[2]].map((rr, k) => rr && h('div', {},
      (() => { const e = h('span', { class: 'f' }); e.innerHTML = helmetDot(rr.helmet); return e; })(),
      h('span', {}, rr.isPlayer ? t('you') : name(rr)),
      h('div', { class: 'st', style: `height:calc(var(--u)*${[9, 13, 6][k]});background:${['#c0c4cc', '#ffcf3a', '#d08a4a'][k]}` }, num([2, 1, 3][k]))));
    const hasNext = r.place <= 3 && i + 1 < ROUNDS.length;
    const dim = h('div', { class: 'mr-dim' }, h('div', { class: 'mr-panel' },
      h('div', { class: 'mr-title' }, r.place === 1 ? t('win') : r.place <= 3 ? t('podium') : t('finish')),
      h('div', { class: 'mr-podium' }, podium),
      h('div', { class: 'mr-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'mr-stat' }, h('span', {}, '🏁 ', t('place'), ' ', num(r.place)), h('span', {}, '⏱ ', this._fmt(r.time))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'mr-btn2', onclick: () => this.startRace(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: hasNext ? 'mr-btn2 wood' : 'mr-btn2', onclick: () => this.startRace(i) }, '↻ ', t('again')),
        h('button', { class: 'mr-btn2 wood', onclick: () => this.showMenu() }, t('menu')))));
    for (const k of ['brake', 'nitro', 'steer']) this.hud[k].remove();
    this.layer.append(dim);
  }

  _fmt(s) {
    const m = Math.floor(s / 60);
    const sec = (s % 60).toFixed(1).padStart(4, '0');
    return num(`${m}:${sec}`);
  }

  // ---- racing -------------------------------------------------------------------------------------------------------

  _raceFrame(dt, time) {
    const race = this.race;
    const input = this._readInput();
    const before = race.player.place;
    const events = race.step(dt, input);
    const p = race.player;
    for (const e of events) {
      switch (e.type) {
        case 'light': this.sound.play('light'); this.lights.forEach((l, k) => l.material.color.set(k < e.n ? 0xff2a2a : 0x4a1010)); [...this.hud.lights.children].forEach((l, k) => l.classList.toggle('on', k < e.n)); break;
        case 'go':
          this.sound.play('go');
          this.lights.forEach((l) => l.material.color.set(0x3aff6a));
          this.hud.lights.classList.add('go');
          [...this.hud.lights.children].forEach((l) => l.classList.add('on'));
          setTimeout(() => this.hud && this.hud.lights.remove(), 900);
          this.hud.title.remove();
          this._tag(t('go'), 0.8);
          break;
        case 'nitro': if (e.id === 0) { this.sound.play('nitro'); this._tag(t('boost'), 0.9); this.shake = Math.max(this.shake || 0, 0.25); const pp = this.race.player; for (let k = 0; k < 16; k++) this.sparks.emit(pp.x - Math.sin(pp.h) * 2.4, 0.6, pp.z - Math.cos(pp.h) * 2.4, (Math.random() - 0.5) * 3 - Math.sin(pp.h) * 6, Math.random() * 3, (Math.random() - 0.5) * 3 - Math.cos(pp.h) * 6, 0.5); } break;
        case 'draft': this.sound.play('draft'); this._tag(t('draft'), 1); break;
        case 'bump': this.sound.play('bump'); this.shake = 0.3; break;
        case 'wall': if (e.id === 0) { this.sound.play('wall'); this.shake = 0.45; for (let k = 0; k < 12; k++) this.sparks.emit(e.x, 0.6, e.z, (Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6, 0.5); } break;
        case 'grass': if (e.id === 0) this.sound.play('grass'); break;
        case 'crash':
          if (e.id === 0) { this.sound.play('crash'); this.shake = 0.8; this._tag(t('crash'), 1.4, true); }
          for (let k = 0; k < 18; k++) this.sparks.emit(e.x, 0.5, e.z, (Math.random() - 0.5) * 8, Math.random() * 5, (Math.random() - 0.5) * 8, 0.6);
          break;
        case 'recover': if (e.id === 0) this.sound.play('lap'); break;
        case 'lap': if (e.id === 0) { this.sound.play('lap'); this._tag(e.lap === LAPS ? t('lastLap') : `${t('lap')} ${num(e.lap)}`, 1.4); } break;
        case 'cross': if (e.id === 0) this.sound.play('crowd'); break;
        case 'overtake': if (e.place < before) { this.sound.play('overtake'); { const pp = this.race.player; for (let k = 0; k < 10; k++) this.sparks.emit(pp.x, 1.4, pp.z, (Math.random() - 0.5) * 5, 2 + Math.random() * 3, (Math.random() - 0.5) * 5, 0.7); } if (Math.random() < 0.5) this._tag(t('overtake'), 0.8); } break;
        case 'finish': setTimeout(() => this.mode === 'race' && this._results(), 1500); break;
        default:
      }
    }
    if (p.place > before && race.state === 'race') this.sound.play('lost');
    // the crowd cheers once a lap as you pass the stands
    const lapNow = Math.floor(Math.max(0, p.prog) / race.length);
    if (p.i > this.standRange[0] && p.i < this.standRange[1] && this.crowdLap !== lapNow && race.state === 'race' && p.prog > 30) { this.crowdLap = lapNow; this.sound.play('crowd'); }
    // engine: gear and rpm from the speed
    let gear = 1;
    while (gear < 6 && p.v > GEARS[gear]) gear++;
    const lo = GEARS[gear - 1];
    const hi = GEARS[gear];
    const throttle = race.state === 'lights' ? 0.25 + 0.25 * Math.max(0, Math.sin(time * 6)) : input.brake ? 0 : Math.max(0.2, 1 - p.v / (p.vmax * 1.05)) + (p.boost > 0 ? 0.4 : 0);
    const rpm = race.state === 'lights' ? 2500 + throttle * 6000 : 3500 + Math.min(1, (p.v - lo) / (hi - lo)) * 8500;
    if (gear !== this.lastGear && race.state === 'race') { if (gear > this.lastGear) this.sound.play('shift'); this.lastGear = gear; }
    let near = null;
    for (const r of race.riders) {
      if (r === p) continue;
      const d = Math.hypot(r.x - p.x, r.z - p.z);
      if (!near || d < near.dist) {
        let g = 1;
        while (g < 6 && r.v > GEARS[g]) g++;
        near = { dist: d, rpm: 3500 + Math.min(1, (r.v - GEARS[g - 1]) / (GEARS[g] - GEARS[g - 1])) * 8500 };
      }
    }
    this.sound.engineUpdate(rpm, Math.min(1, throttle), p.v, p.boost > 0, p.skid ?? 0, near);
    this.gear = gear;
    this._sync(dt, time);
  }

  _sync(dt, time) {
    const race = this.race;
    const tr = race.track;
    race.riders.forEach((r, k) => {
      const b = this.bikes[k];
      b.root.position.set(r.x, 0, r.z);
      b.root.rotation.y = r.h;
      const lean = r.crashT > 0 ? (k % 2 ? 1.45 : -1.45) : -r.lean * 0.7;
      b.lean.rotation.z += (lean - b.lean.rotation.z) * Math.min(1, dt * (r.crashT > 0 ? 6 : 8));
      b.rider.position.y = r.crashT > 0 ? 0.55 : 1.08;
      b.rider.rotation.z = r.crashT > 0 ? Math.sin(time * 9) * 0.6 : 0;
      const spin = r.v * dt / 0.36;
      b.front.rotation.x += spin;
      b.back.rotation.x += spin;
      b.flames.visible = r.boost > 0;
      if (r.boost > 0) b.flames.scale.setScalar(0.8 + Math.random() * 0.5);
      if (b.pic) b.setState(r.crashT > 0 ? 'crash' : 'c');
      if (r.off && r.v > 8 && Math.random() < 0.6) this.dust.emit(r.x - Math.sin(r.h) * 1, 0.4, r.z - Math.cos(r.h) * 1, (Math.random() - 0.5) * 2, 1.5, (Math.random() - 0.5) * 2, 0.6);
    });
    if (this.heli) {
      const a = time * 0.25;
      this.heli.position.set(this.center.x + Math.cos(a) * 160, 45, this.center.z + Math.sin(a) * 160);
      this.heli.rotation.y = -a;
      for (const r of this.heli.userData.rotors) r.rotation.y += dt * 30;
    }
    this.dust.update(dt);
    this.sparks.update(dt);
    // the crowd jumps
    for (const st of this.stands) {
      const c = st.userData.crowd;
      const base = st.userData.base;
      const m = new THREE.Matrix4();
      for (let i = 0; i < base.length; i += 1) {
        const b = base[i];
        m.makeTranslation(b.x, b.y + Math.max(0, Math.sin(time * 9 + i * 1.7)) * 0.25, b.z);
        c.setMatrixAt(i, m);
      }
      c.instanceMatrix.needsUpdate = true;
    }
    // chase camera
    const p = race.player;
    const fx = Math.sin(p.h);
    const fz = Math.cos(p.h);
    const portrait = this.cw < this.ch;
    const back = portrait ? 5.4 : 4.4;
    const up = portrait ? 2.5 : 1.9;
    const want = new THREE.Vector3(p.x - fx * back, up, p.z - fz * back);
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 6));
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    const sh = this.shake * 0.25;
    this.camera.position.set(this.cam.x + (Math.random() - 0.5) * sh, this.cam.y + (Math.random() - 0.5) * sh, this.cam.z);
    this.camera.lookAt(p.x + fx * 6, 1.1, p.z + fz * 6);
    this.camera.rotateZ(this.bikes[0].lean.rotation.z * 0.18);
    const fov = this.baseFov + Math.min(10, p.v * 0.12) + (p.boost > 0 ? 6 : 0);
    if (Math.abs(this.camera.fov - fov) > 0.1) { this.camera.fov += (fov - this.camera.fov) * Math.min(1, dt * 3); this.camera.updateProjectionMatrix(); }
    this.speedlines.style.opacity = p.boost > 0 ? '1' : p.draft > 0.5 ? '0.5' : '0';
    if (this.mode === 'race') this._hudSync();
    void tr;
  }

  _hudSync() {
    const race = this.race;
    const p = race.player;
    const hc = this._hc;
    if (hc.place !== p.place) {
      const up = hc.place && p.place < hc.place;
      hc.place = p.place;
      this.hud.pos.firstChild.textContent = num(p.place);
      this.hud.pos.classList.toggle('up', !!up);
    }
    const lap = race.lap;
    if (hc.lap !== lap) { hc.lap = lap; this.hud.lap.textContent = `${t('lap')} ${num(lap)}/${num(LAPS)}`; }
    const tt = Math.floor(race.time * 10);
    if (hc.t !== tt) { hc.t = tt; this.hud.time.textContent = this._fmt(race.time); }
    const kmh = Math.round(p.v * 3.6);
    if (hc.kmh !== kmh) { hc.kmh = kmh; this.hud.speedo.firstChild.textContent = num(kmh); }
    if (hc.gear !== this.gear) { hc.gear = this.gear; this.hud.speedo.lastChild.textContent = num(this.gear); }
    this.hud.speedo.classList.toggle('boost', p.boost > 0);
    const n = Math.round(p.nitro * 100);
    if (hc.n !== n) { hc.n = n; this.hud.nitro.style.setProperty('--n', `${n}%`); this.hud.nitro.classList.toggle('ready', p.nitro >= 0.3 && p.boost <= 0); }
    this.hud.steer.firstChild.style.transform = `translateX(${this.input.steer * this.u * 17}px)`;
    // the board: the rider ahead, you, the rider behind
    if (!hc.boardT || race.time - hc.boardT > 0.3) {
      hc.boardT = race.time;
      const o = race.order;
      const k = o.indexOf(p);
      const rows = [o[k - 1], p, o[k + 1]].filter(Boolean);
      this.hud.board.replaceChildren(...rows.map((r) => {
        const gap = r === p ? '' : `${r.prog > p.prog ? '-' : '+'}${num((Math.abs(r.prog - p.prog) / Math.max(15, p.v)).toFixed(1))}`;
        return h('div', { class: r === p ? 'me' : '' }, h('span', {}, num(r.place)), h('i', { style: `background:${hex(r === p ? COLORS[this.save.color] : r.color)}` }), (() => { const e = h('span', {}); e.innerHTML = `${helmetDot(r.helmet)} `; e.append(r === p ? t('you') : name(r)); return e; })(), h('em', {}, gap));
      }));
    }
    // minimap
    const g = this.mmCtx;
    const mm = this.mm;
    g.clearRect(0, 0, mm.S, mm.S);
    g.drawImage(this.mmPath, 0, 0);
    for (const r of [...race.riders].reverse()) {
      g.fillStyle = r === p ? '#ffd23a' : hex(r.color);
      g.beginPath();
      g.arc(mm.ox + r.x * mm.sc, mm.oz + r.z * mm.sc, r === p ? 9 : 6, 0, Math.PI * 2);
      g.fill();
      if (r === p) { g.strokeStyle = '#000'; g.lineWidth = 2; g.stroke(); }
    }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (!this.scene) return;
    if (this.mode === 'race' && !this.paused) this._raceFrame(dt, time);
    else if (this.mode === 'results') {
      for (const r of this.race.riders) this.race._coast(r, dt);
      this._sync(dt, time);
    } else if (this.mode === 'menu') {
      // a slow orbit around the bikes on the grid
      const p = this.race.player;
      this._sync(dt, time);
      const a = time * 0.25;
      this.camera.position.set(p.x + Math.sin(a) * 7, 2.6, p.z + Math.cos(a) * 7);
      this.camera.lookAt(p.x, 1, p.z);
    }
    this.renderer.render(this.scene, this.camera);
  }

  _adapt(dt) {
    this.frames.push(dt);
    if (this.frames.length < 90) return;
    const avg = this.frames.reduce((a, b) => a + b, 0) / this.frames.length;
    this.frames.length = 0;
    if (avg > 1 / 40 && this.pr > 0.75) {
      this.pr = Math.max(0.75, this.pr - 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    } else if (avg < 1 / 57 && this.pr < this.maxPR && ++this.goodWin >= 4) {
      this.pr = Math.min(this.maxPR, this.pr + 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    }
  }

  dispose() {
    clearInterval(this._pill);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.renderer.dispose();
      try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    }
    if (this.ro) this.ro.disconnect();
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

void RIDERS;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.DuneTitans = api;
export default api;
