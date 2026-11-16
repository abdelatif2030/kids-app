// «البقاء على قيد الحياة» — Zombie Rooftop Shooter. Entry: window.ZombieRooftop.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cartoon fighter on a city rooftop: swipe to run, the weapon aims and fires by itself. Goofy zombies climb over the
// parapet in waves; blue gas tanks blow up a crowd; crates give the bomb, rocket and fireworks launchers; each level up
// offers a perk for this roof; when every wave is cleared the pink launch pad lights up and the hero leaps across the
// gap to the next building. Eight roofs with their own look, then Endless. No network, no links, no ads, no blood.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rooftop, ROOFS, PERKS, UPGRADES, WEAPONS, MAX_UP, upCost, weaponOf, normalizeSave } from './sim.js';
import {
  mat, basic, box, LOOKS, makeHero, makeWeapon, makeZombie, makeVent, makeWaterTower, makeTanks, makePlanter, makeChimney,
  makePad, makeCrate, makeHeart, coinGeometry, makeRoof, makeBuilding, makeNeonSign, makeCrane, makeClockTower, skyTexture,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, isGirl, t, num, name } from './i18n.js';
import { CSS, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.5, 'rgba(255,255,255,0.75)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

/** Points with their own life (puffs, sparks, smoke, snow). */
class Glow {
  constructor(scene, n, size, color, normal = false, opacity = 1) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false, opacity: normal ? opacity * 0.85 : opacity, blending: normal ? THREE.NormalBlending : THREE.AdditiveBlending }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -500;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 14, power = 3, life = 0.6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.emit(x, y, z, Math.cos(a) * power * Math.random(), Math.random() * power, Math.sin(a) * power * Math.random(), life * (0.6 + Math.random() * 0.6));
    }
  }
  update(dt, rise = 0, drag = 0) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] += rise * dt;
      if (drag) for (let a = 0; a < 3; a++) this.vel[k * 3 + a] *= 1 - Math.min(1, drag * dt);
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -500;
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

// ---- baking: many small shapes become one mesh with vertex colours (fewer draw calls on phones) -------------------------

const vcMat = new THREE.MeshLambertMaterial({ vertexColors: true });
function bakeInto(group, skip = []) {
  group.updateMatrixWorld(true);
  const inv = group.matrixWorld.clone().invert();
  const geos = [];
  const remove = [];
  group.traverse((o) => {
    if (!o.isMesh || o === group) return;
    for (let p = o.parent; p && p !== group; p = p.parent) if (skip.includes(p)) return;
    const m = o.material;
    if (Array.isArray(m) || m.transparent || m.map || !m.color) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    g.applyMatrix4(inv.clone().multiply(o.matrixWorld));
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    const c = m.color.clone();
    if (m.emissive) c.add(m.emissive.clone().multiplyScalar((m.emissiveIntensity ?? 1) * 0.5));
    for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geos.push(g);
    remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  if (geos.length) group.add(new THREE.Mesh(mergeGeometries(geos), vcMat));
}

const zombieTemplates = new Map();
function zombieModel(kind, variant) {
  const key = `${kind}${variant}`;
  if (!zombieTemplates.has(key)) {
    const z = makeZombie(kind, variant);
    z.body.name = 'body';
    z.legs.forEach((l, i) => { l.name = `leg${i}`; bakeInto(l); });
    z.arms.forEach((a, i) => { a.name = `arm${i}`; bakeInto(a); });
    bakeInto(z.body, [...z.legs, ...z.arms]);
    zombieTemplates.set(key, z);
  }
  const tpl = zombieTemplates.get(key);
  const root = tpl.root.clone(true);
  const body = root.getObjectByName('body');
  return { root, body, legs: [0, 1].map((i) => root.getObjectByName(`leg${i}`)), arms: [0, 1].map((i) => root.getObjectByName(`arm${i}`)), s: tpl.s };
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
    if (!document.getElementById('zr-style')) document.head.append(h('style', { id: 'zr-style', text: CSS }));
    this.root = h('div', { class: 'zr-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'zr-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'zr-btn purple', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'zr-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.6);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'zr-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 260);
    this.camPos = new THREE.Vector3(0, 16, 10);
    this.camLook = new THREE.Vector3(0, 0, 0);
    this.input = { pointer: null, keys: new Set(), ox: 0, oy: 0, mx: 0, mz: 0 };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this._buildScene();
    this._fonts().then(() => {
      this.loading.remove();
      this._buildWorld(Math.min(this.save.unlocked, ROOFS.length) - 1);
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
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _unit() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.land = this.cw > this.ch * 1.15;
    this.root.classList.toggle('zr-land', this.land);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.land ? 44 : 56;
    this.camera.updateProjectionMatrix();
  }

  // ---- the scene: things that stay for every roof ------------------------------------------------------------------

  _buildScene() {
    const s = (this.scene = new THREE.Scene());
    this.hemi = new THREE.HemisphereLight(0xfff0e0, 0x9a5a48, 1.7);
    s.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffe2c0, 1.6);
    this.sun.position.set(-8, 20, 6);
    s.add(this.sun);
    this.hero = makeHero(isGirl());
    s.add(this.hero.root);
    this._setGun(this.save.weapon);
    this.muzzle = new THREE.PointLight(0xffe08a, 0, 5);
    s.add(this.muzzle);
    // instanced bits
    this.boltMesh = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.07, 0.5, 2, 6).rotateX(Math.PI / 2), basic(0xbff8ff), 160);
    this.bombMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.2, 10, 8), mat(0x2a2a34), 60);
    this.rocketMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.08, 0.12, 0.6, 8).rotateX(Math.PI / 2), mat(0xe8322a), 40);
    this.fwMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.18, 10, 8), mat(0xff4ab0, 0xff2a8a, 0.6), 80);
    this.coinMesh = new THREE.InstancedMesh(coinGeometry(), mat(0xffc21a, 0x7a5000, 0.35), 260);
    for (const m of [this.boltMesh, this.bombMesh, this.rocketMesh, this.fwMesh, this.coinMesh]) { m.frustumCulled = false; m.count = 0; s.add(m); }
    // particles
    this.puff = new Glow(s, 360, 1.3, 0xd8f8c0, true, 0.9); // green-white zombie puffs
    this.smoke = new Glow(s, 260, 2.4, 0x8a7a7a, true, 0.55);
    this.fire = new Glow(s, 320, 1.0, 0xffa83a);
    this.sparks = new Glow(s, 260, 0.35, 0xfff2a0);
    this.coinSpark = new Glow(s, 80, 0.4, 0xffe27a);
    this.snow = null;
    // explosions: a pool of balls and rings
    this.booms = [];
    for (let i = 0; i < 12; i++) {
      const ballM = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), basic(0xffb03a, { transparent: true, opacity: 0, depthWrite: false }));
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 32), basic(0xfff0b0, { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2;
      ballM.visible = ring.visible = false;
      s.add(ballM, ring);
      this.booms.push({ ball: ballM, ring, t: 9, r: 1 });
    }
    // green goo splats on the tiles (they fade)
    this.splats = [];
    const splatGeo = new THREE.CircleGeometry(0.5, 9);
    for (let i = 0; i < 40; i++) {
      const m = new THREE.Mesh(splatGeo, basic(0x8ae04a, { transparent: true, opacity: 0, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      s.add(m);
      this.splats.push({ m, t: 99 });
    }
    this.splatI = 0;
    this.models = new Map();
    this.tankModels = [];
    this.heartModels = [];
    this._dummy = new THREE.Object3D();
  }

  _setGun(id) {
    if (this.gun) this.hero.gunMount.remove(this.gun);
    this.gun = makeWeapon(id);
    this.gunId = id;
    this.hero.gunMount.add(this.gun);
  }

  /** The roof, its props and the city around it. Rebuilt for every roof. */
  _buildWorld(index, endless = false) {
    if (this.world) {
      this.scene.remove(this.world);
      this.world.traverse((o) => { if (o.geometry && !o.userData.keep) o.geometry.dispose(); });
    }
    const roof = endless ? { ...ROOFS[0], W: 8, D: 10.5, look: 'sunset', tanks: 4, vents: 3 } : ROOFS[index];
    const look = LOOKS[roof.look];
    this.look = look;
    const w = (this.world = new THREE.Group());
    this.scene.add(w);
    this.scene.background = skyTexture(look);
    this.scene.fog = new THREE.Fog(look.fog, 34, 120);
    this.hemi.color.setHex(look.hemi[0]);
    this.hemi.groundColor.setHex(look.hemi[1]);
    this.sun.color.setHex(look.sun);
    const W = roof.W;
    const D = roof.D;
    this.W = W;
    this.D = D;
    w.add(makeRoof(W, D, look));
    // the city around: neighbours lower and higher, roofs with water towers and tanks (like the video)
    const city = new THREE.Group();
    const rnd = (k) => ((Math.sin((index + 1) * 91.7 + k * 12.3) * 43758.5453) % 1 + 1) % 1;
    let k = 0;
    const add = (x, z, bw, bd, top, lit = false) => {
      const b = makeBuilding(bw, 80 + top, bd, look, index * 31 + k++, lit);
      b.position.set(x, top, z);
      city.add(b);
    };
    // the next building, across a small gap, where the leap lands
    this.landZ = -D - 3.2 - 7;
    add(0, this.landZ, W * 2 + 2, 14, 0.25);
    for (const s of [-1, 1]) {
      add(s * (W + 3 + 5), -D + 4, 10, 9, -3 - rnd(k) * 5);
      add(s * (W + 3 + 6), 5, 12, 10, -6 - rnd(k) * 6);
      add(s * (W + 2.5 + 5), D + 5, 10, 10, -2 - rnd(k) * 4);
      add(s * (W + 16), -D - 12, 12, 12, 2 + rnd(k) * 8, look.neon);
      add(s * (W + 20), 4, 12, 14, -12 - rnd(k) * 5);
      add(s * (W + 9), -D - 20, 10, 10, 4 + rnd(k) * 10);
    }
    add(0, D + 3 + 6, W * 2 + 4, 10, -9);
    add(-6, D + 22, 14, 12, -16);
    add(10, D + 24, 12, 12, -14);
    for (let i = 0; i < 6; i++) add((i - 2.5) * 13, -D - 34 - (i % 2) * 8, 11, 11, 6 + rnd(k) * 14, look.neon);
    const street = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), mat(look.street));
    street.rotation.x = -Math.PI / 2;
    street.position.y = -70;
    city.add(street);
    bakeInto(city);
    w.add(city);
    // special pieces for each look
    this.crane = null;
    this.clockTower = null;
    if (look.neon) {
      const a = makeNeonSign(getLang() === 'en' ? 'ZOMBIE PIZZA' : 'بيتزا الزومبي', '#ff5ab8');
      a.position.set(W + 6, -1, -D + 2);
      a.rotation.y = -Math.PI / 2;
      w.add(a);
      const b = makeNeonSign(getLang() === 'en' ? 'ROOF TOP' : 'السطوح', '#5ae8ff');
      b.position.set(-W - 7, -4, 2);
      b.rotation.y = Math.PI / 2;
      w.add(b);
    }
    if (look.crane) {
      this.crane = makeCrane();
      this.crane.root.position.set(W + 9, -18, -D - 4);
      w.add(this.crane.root);
    }
    if (look.clock) {
      this.clockTower = makeClockTower(look);
      this.clockTower.root.position.set(-W - 9, 0, -D - 18);
      w.add(this.clockTower.root);
    }
    if (this.snow) { this.scene.remove(this.snow.pts); this.snow = null; }
    if (look.snow) this.snow = new Glow(this.scene, 400, 0.35, 0xffffff, true, 0.95);
    // roof props from the same layout the rules use
    const sim = new Rooftop(endless ? { endless: true } : { roof: index });
    this.vents = [];
    for (const p of sim.props) {
      let m;
      if (p.kind === 'vent') { const v = makeVent(); this.vents.push(v.fan); m = v.root; } else if (p.kind === 'tower') m = makeWaterTower(1); else if (p.kind === 'planter') m = makePlanter(look); else m = makeChimney(look);
      m.position.set(p.x, 0, p.z);
      w.add(m);
    }
    this.tankModels = sim.tanks.map((tk) => { const m = makeTanks(); m.root.position.set(tk.x, 0, tk.z); m.root.rotation.y = tk.x; w.add(m.root); return m; });
    this.pad = makePad();
    this.pad.root.position.set(sim.pad.x, 0, sim.pad.z);
    w.add(this.pad.root);
    this.hero.root.position.set(0, 0, 1);
    this.hero.root.rotation.set(0, Math.PI, 0);
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'zr-joy' }, h('i'));
    root.append(this.joy);
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.zr-dim')) return;
      if (this.mode !== 'play' || this.paused) return;
      const r = root.getBoundingClientRect();
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX - r.left;
      this.input.oy = e.clientY - r.top;
      this.input.mx = this.input.mz = 0;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
      this.joy.style.left = `${this.input.ox}px`;
      this.joy.style.top = `${this.input.oy}px`;
      this.joy.style.display = 'block';
      this.joy.firstChild.style.transform = '';
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      const r = root.getBoundingClientRect();
      const dx = e.clientX - r.left - this.input.ox;
      const dy = e.clientY - r.top - this.input.oy;
      const R = this.u * 9;
      const l = Math.hypot(dx, dy);
      const k = l > R ? R / l : 1;
      this.input.mx = (dx * k) / R;
      this.input.mz = (dy * k) / R;
      if (l < this.u * 1.2) this.input.mx = this.input.mz = 0;
      this.joy.firstChild.style.transform = `translate(${dx * k}px,${dy * k}px)`;
    });
    const up = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      this.input.mx = this.input.mz = 0;
      this.joy.style.display = 'none';
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
        if (this.g && this.g.choosing && ['1', '2', '3'].includes(k)) this._choose(this.g.choosing[Number(k) - 1]);
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'zr-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _coins() {
    this.coinEl = h('span', {}, num(this.save.coins));
    return h('div', { class: 'zr-coins' }, h('i', { class: 'zr-hex' }), this.coinEl);
  }
  _mute(style) {
    const b = h('button', { class: 'zr-sq', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _topLeft() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*3)'; }
  _topRight() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));right:calc(var(--u)*3)'; }
  _back(fn) { return h('button', { class: 'zr-sq', style: this._topLeft(), 'aria-label': t('back'), onclick: fn }, getLang() === 'en' ? '←' : '→'); }
  _toastEl() {
    this.toastIc = h('span', { class: 'ic' }, '💡');
    this.toastTx = h('span');
    this.toastEl = h('div', { class: 'zr-toast' }, this.toastIc, this.toastTx);
    return this.toastEl;
  }
  toast(text, secs = 2.4, icon = '💡') {
    if (!this.toastEl) return;
    this.toastIc.textContent = icon;
    this.toastTx.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _face(kind) { return h('div', { class: 'zr-portrait' }, h('div', { class: `zr-face ${kind}` })); }
  _stars(n, big) { return h('div', { class: `zr-stars${big ? ' big' : ''}` }, [1, 2, 3].map((k) => (k <= n ? h('b', {}, '★') : h('span', {}, '★')))); }

  showMenu() {
    this._endRoof();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    const words = t('title').split(' ');
    const a = getLang() === 'en' ? 'ZOMBIE' : words.slice(0, 2).join(' ');
    const b = getLang() === 'en' ? 'ROOFTOP' : words.slice(2).join(' ');
    const endlessOpen = this.save.unlocked > ROOFS.length;
    this.layer.append(
      this._back(() => { this._saveNow(); this.post({ type: 'exit' }); }),
      h('div', { class: 'zr-top' }, this._coins()),
      this._mute(this._topRight()),
      h('div', { class: 'zr-logo' }, h('span', { class: 'a' }, a), h('span', { class: 'b' }, b)),
      h('div', { class: 'zr-menu' },
        h('button', { class: 'zr-btn big wide', onclick: () => this.showIntro(Math.min(this.save.unlocked, ROOFS.length) - 1) }, t('play')),
        h('button', { class: `zr-btn grey wide`, onclick: () => (endlessOpen ? this.showIntro(-1) : (this.sound.play('no'), this.toast(t('endlessLock'), 2, '🔒'))) }, endlessOpen ? '∞ ' : '🔒 ', t('endless')),
        endlessOpen ? (this.save.best ? h('div', { class: 'zr-small' }, `${t('best')}: ${num(this.save.best)} ${t('waves')}`) : null) : h('div', { class: 'zr-small' }, t('endlessLock')),
        h('div', { class: 'zr-row' },
          h('button', { class: 'zr-btn purple', onclick: () => this.showMap() }, t('map')),
          h('button', { class: 'zr-btn purple', onclick: () => this.showShop() }, t('shop')))),
      this._toastEl(),
    );
  }

  showMap() {
    this.mode = 'map';
    this._clear();
    const nodes = ROOFS.map((r, i) => {
      const locked = r.id > this.save.unlocked;
      const st = this.save.stars[r.id] ?? 0;
      return h('button', {
        class: `zr-node${locked ? ' lock' : ''}${r.id === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('roof')} ${r.id} ${name(r)}`,
        onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked'), 2, '🔒'); return; } this.showIntro(i); },
      }, h('span', { class: 'n' }, locked ? '🔒' : num(r.id)), h('span', { class: 'nm' }, name(r)), h('span', { class: 'st' }, locked ? '' : '★'.repeat(st) + '☆'.repeat(3 - st)));
    });
    const endlessOpen = this.save.unlocked > ROOFS.length;
    nodes.push(h('button', { class: `zr-node${endlessOpen ? '' : ' lock'}`, onclick: () => (endlessOpen ? this.showIntro(-1) : (this.sound.play('no'), this.toast(t('endlessLock'), 2, '🔒'))) }, h('span', { class: 'n' }, endlessOpen ? '∞' : '🔒'), h('span', { class: 'nm' }, t('endless')), h('span', { class: 'st' }, endlessOpen && this.save.best ? num(this.save.best) : '')));
    this.layer.append(
      this._back(() => this.showMenu()),
      h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' },
        h('div', { class: 'zr-ribbon zr-gold', style: 'margin-top:calc(var(--u)*-1)' }, t('map')),
        h('div', { class: 'zr-map' }, nodes))),
      this._toastEl(),
    );
  }

  showShop() {
    this.mode = 'shop';
    this._clear();
    const rows = UPGRADES.map((u) => {
      const lvl = this.save.up[u.id];
      const maxed = lvl >= MAX_UP;
      const cost = upCost(lvl);
      return h('div', { class: 'zr-up' },
        h('span', { class: 'ic' }, u.icon),
        h('div', { class: 'nm' }, name(u), h('div', { class: 'zr-pips' }, Array.from({ length: MAX_UP }, (_, i) => h('i', { class: i < lvl ? 'on' : '' })))),
        h('button', {
          class: 'zr-btn',
          disabled: maxed || this.save.coins < cost,
          onclick: () => {
            if (maxed || this.save.coins < cost) { this.sound.play('no'); this.toast(t('needMore'), 2, '🪙'); return; }
            this.save.coins -= cost;
            this.save.up[u.id]++;
            this.sound.play('buy');
            this._saveNow();
            this.showShop();
            this.toast(t('bought'), 1.2, '✅');
          },
        }, maxed ? t('max') : `🪙 ${num(cost)}`));
    });
    this.layer.append(
      this._back(() => this.showMenu()),
      h('div', { class: 'zr-top' }, this._coins()),
      h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' },
        h('div', { class: 'zr-ribbon zr-gold', style: 'margin-top:calc(var(--u)*-1)' }, t('shop')),
        h('div', { class: 'zr-shop' }, rows))),
      this._toastEl(),
    );
  }

  /** The card before a roof: name, the zombie of this roof, a tip, stars, the weapon (as in the video). */
  showIntro(i) {
    this.mode = 'intro';
    this._clear();
    const endless = i < 0;
    const r = endless ? null : ROOFS[i];
    if (!endless && r.id > this.save.unlocked) return this.showMenu();
    if (this.worldIndex !== i) { this._buildWorld(endless ? 0 : i, endless); this.worldIndex = i; }
    const face = endless ? 'brute' : r.face;
    const tip = endless ? 'tip_endless' : r.id === 1 ? 'tip_move' : `tip_${r.tip}`;
    const w = weaponOf(this.save.weapon);
    this.layer.append(
      this._back(() => this.showMenu()),
      h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' },
        h('h3', {}, endless ? t('endless').toUpperCase() : `${t('roof')} ${num(r.id)} · ${name(r)}`),
        this._face(face),
        h('div', { class: 'zr-small' }, t(face)),
        h('div', { class: 'zr-tip' }, t(tip)),
        endless ? (this.save.best ? h('div', { class: 'zr-small' }, `${t('best')}: ${num(this.save.best)} ${t('waves')}`) : null) : this._stars(this.save.stars[r.id] ?? 0),
        h('button', { class: 'zr-weapon', onclick: () => this.showWeapons(i) }, h('span', { class: 'ic' }, w.icon), name(w), h('span', { class: 'ch' }, t('change'))),
        h('div', { class: 'zr-row' },
          h('button', { class: 'zr-btn purple', onclick: () => this.showMenu() }, t('back')),
          h('button', { class: 'zr-btn', onclick: () => this.startRoof(i) }, t('start'))))),
      this._toastEl(),
    );
  }

  showWeapons(i) {
    this._clear();
    const list = WEAPONS.map((w) => {
      const have = this.save.weapons.includes(w.id);
      return h('button', {
        class: 'zr-weapon',
        style: this.save.weapon === w.id ? 'border-color:#ffd23a;background:rgba(255,210,58,.15)' : have ? '' : 'opacity:.5;border-color:#5a3a7a',
        onclick: () => {
          if (!have) { this.sound.play('no'); this.toast(t('lockedWeapon'), 2, '🔒'); return; }
          this.save.weapon = w.id;
          this._setGun(w.id);
          this._saveNow();
          this.showIntro(i);
        },
      }, h('span', { class: 'ic' }, have ? w.icon : '🔒'), name(w), h('span', { class: 'ch' }, this.save.weapon === w.id ? '✓' : ''));
    });
    this.layer.append(
      this._back(() => this.showIntro(i)),
      h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' }, h('h3', {}, t('weaponTitle')), list)),
      this._toastEl(),
    );
  }

  startRoof(i) {
    this._endRoof();
    const endless = i < 0;
    if (this.worldIndex !== i) { this._buildWorld(endless ? 0 : i, endless); this.worldIndex = i; }
    this.roofIndex = i;
    this.g = new Rooftop({ roof: endless ? 0 : i, endless, easy: this.age <= 4, up: this.save.up, weapon: this.save.weapon, seed: (Date.now() & 0xffff) + 1 });
    this._setGun(this.g.weapon);
    this.mode = 'play';
    this.paused = false;
    this.knockT = 0;
    this.landed = false;
    this.hero.root.position.set(this.g.hero.x, 0, this.g.hero.z);
    this.hero.root.rotation.set(0, Math.PI, 0);
    this.hero.body.rotation.set(0, 0, 0);
    this.hero.ring.visible = true;
    this.pad.glow.material.opacity = 0;
    this.sound.setMode('play');
    this._hud();
    this.waveKills = 0;
    this.waveSize = 1;
    const tip = endless ? 'tip_endless' : this.g.roof.id === 1 ? 'tip_move' : `tip_${this.g.roof.tip}`;
    setTimeout(() => this.mode === 'play' && this.toast(t(tip), 3.4, '💡'), 400);
    this.camPos.set(this.g.hero.x, 30, this.g.hero.z + 18);
  }

  _endRoof() {
    if (!this.g) return;
    for (const m of this.models.values()) this.scene.remove(m.root);
    this.models.clear();
    for (const m of this.heartModels) this.scene.remove(m);
    this.heartModels = [];
    if (this.crateModel) { this.scene.remove(this.crateModel.root); this.crateModel = null; }
    for (const m of [this.boltMesh, this.bombMesh, this.rocketMesh, this.fwMesh, this.coinMesh]) m.count = 0;
    this.g = null;
  }

  _hud() {
    this._clear();
    this.hud = {
      dots: h('div', { class: 'zr-dots' }),
      waveT: h('span', { class: 'zr-gold' }),
      bar: h('i', { style: 'width:0%' }),
      xp: h('i', { style: 'width:0%' }),
      lv: h('span'),
      hp: h('div', { class: 'zr-hp' }, h('i', { style: 'width:100%' })),
      boss: h('div', { class: 'zr-boss zr-gold' }, '👑 ', t('king'), h('div', {}, h('i', { style: 'width:100%' }))),
      banner: h('div', { class: 'zr-banner' }, h('div', { class: 'zr-rays' }), h('div', { class: 'zr-ribbon zr-gold' })),
      arrow: h('div', { class: 'zr-padarrow' }, '▼'),
    };
    this.layer.append(
      h('button', { class: 'zr-sq', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '❚❚'),
      h('div', { class: 'zr-top' }, this._coins()),
      h('div', { class: 'zr-hudl' },
        h('div', { class: 'zr-badge' }, h('i', {}, h('div', { class: 'zr-face' }))),
        h('div', { class: 'zr-bars', style: 'position:relative' },
          h('div', { class: 'zr-wavet' }, this.hud.waveT, this.hud.dots),
          h('div', { class: 'zr-bar' }, this.hud.bar),
          h('div', { class: 'zr-xp' }, this.hud.lv, h('div', {}, this.hud.xp)))),
      this.hud.hp,
      this.hud.boss,
      this.hud.arrow,
      this.hud.banner,
      this._mute(this._topRight()),
      this._toastEl(),
    );
    this._hc = {};
    this.coinsAtStart = this.save.coins;
  }

  _banner(text, secs = 1.6, teal = false) {
    if (!this.hud) return;
    const rb = this.hud.banner.lastChild;
    rb.textContent = text;
    rb.classList.toggle('teal', teal);
    this.hud.banner.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => this.hud && this.hud.banner.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.mx = this.input.mz = 0;
    this.joy.style.display = 'none';
    this.sound.suspend();
    const dim = h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' },
      h('div', { class: 'zr-ribbon zr-gold', style: 'margin-top:calc(var(--u)*-1)' }, t('paused')),
      h('button', { class: 'zr-btn wide', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('div', { class: 'zr-row' },
        h('button', { class: 'zr-btn purple', onclick: () => { this.sound.resume(); this.startRoof(this.roofIndex); } }, '↻ ', t('restart')),
        h('button', { class: 'zr-btn purple', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu')))));
    this.layer.append(dim);
  }

  _perkChoice(choices) {
    this.sound.play('levelUp');
    this.input.pointer = null;
    this.input.mx = this.input.mz = 0;
    this.joy.style.display = 'none';
    const dim = h('div', { class: 'zr-dim', style: 'background:rgba(30,10,40,.7)' }, h('div', { class: 'zr-panel', style: 'background:none;border:none;box-shadow:none' },
      h('div', { class: 'zr-ribbon teal zr-gold' }, t('levelUp')),
      h('div', { class: 'zr-small', style: 'font-size:calc(var(--u)*3.8)' }, t('pickOne')),
      h('div', { class: 'zr-perks' }, choices.map((id) => {
        const p = PERKS.find((x) => x.id === id);
        return h('button', { class: 'zr-perk', onclick: () => this._choose(id) }, h('span', { class: 'ic' }, p.icon), h('div', {}, h('b', {}, name(p)), h('span', {}, p.sub[getLang() === 'en' ? 1 : 0])));
      }))));
    this.choiceDim = dim;
    this.layer.append(dim);
  }

  _choose(id) {
    if (!this.g || !this.g.choose(id)) return;
    if (this.choiceDim) { this.choiceDim.remove(); this.choiceDim = null; }
    this.sound.play('perk');
    const hx = this.g.hero;
    this.sparks.burst(hx.x, 1, hx.z, 30, 4);
    if (id === 'vest') this.coinSpark.burst(hx.x, 1, hx.z, 20, 3);
  }

  _results() {
    const g = this.g;
    const r = g.result;
    const i = this.roofIndex;
    const endless = i < 0;
    this.mode = 'results';
    this.sound.setMode('menu');
    this.save.coins = Math.min(999999, this.save.coins + g.coins);
    if (g.unlocked && !this.save.weapons.includes(g.unlocked)) this.save.weapons.push(g.unlocked);
    if (g.unlocked) this.save.weapon = g.unlocked;
    let unlockedNext = false;
    if (endless) this.save.best = Math.max(this.save.best, g.wave);
    else if (r.won) {
      const id = ROOFS[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
      if (id + 1 > this.save.unlocked) { this.save.unlocked = id + 1; unlockedNext = true; }
    }
    this._saveNow();
    if (r.won) {
      this.sound.play('win');
      [0, 1, 2].forEach((k) => k < r.stars && setTimeout(() => this.sound.play('star', k), 500 + k * 280));
    }
    const hasNext = r.won && i + 1 < ROOFS.length;
    const title = endless ? `${t('waves')}: ${num(g.wave)}` : r.won ? t('roofCleared') : t('knockedBanner');
    const dim = h('div', { class: 'zr-dim' }, h('div', { class: 'zr-panel' },
      h('div', { class: 'zr-ribbon zr-gold', style: 'margin-top:calc(var(--u)*-1);font-size:calc(var(--u)*5)' }, title),
      r.won ? this._stars(r.stars, true) : h('div', { class: 'zr-tip' }, endless ? t('win') : t('knocked')),
      h('div', { class: 'zr-statrow' },
        h('div', { class: 'zr-stat' }, h('div', { class: 'zr-badge', style: 'width:calc(var(--u)*9);height:calc(var(--u)*10)' }, h('i', { style: 'width:calc(var(--u)*7.4);height:calc(var(--u)*8.4)' }, h('div', { class: 'zr-face', style: 'width:calc(var(--u)*5);height:calc(var(--u)*5)' }))), h('div', {}, h('b', {}, num(g.kills)), h('small', {}, t('zombies')))),
        h('div', { class: 'zr-stat' }, h('i', { class: 'zr-hex' }), h('div', {}, h('b', {}, `+${num(g.coins)}`), h('small', {}, t('coins'))))),
      g.unlocked ? h('div', { class: 'zr-small' }, `${t('newWeapon')} ${weaponOf(g.unlocked).icon} ${name(weaponOf(g.unlocked))}`) : null,
      r.won && !endless ? h('div', { class: 'zr-small', style: 'font-size:calc(var(--u)*3.8);color:#fff' }, i + 1 < ROOFS.length ? t('nextUnlocked') : `∞ ${t('endless')} ✓`) : null,
      r.won && !endless ? h('div', { class: 'zr-tip', style: 'padding:calc(var(--u)*1)' }, t('win')) : null,
      hasNext
        ? h('button', { class: 'zr-btn wide', onclick: () => this.showIntro(i + 1) }, t('nextRoof'))
        : h('button', { class: 'zr-btn wide', onclick: () => this.startRoof(i) }, '↻ ', t('again')),
      h('div', { class: 'zr-row' },
        h('button', { class: 'zr-btn purple', onclick: () => this.showMap() }, t('map')),
        h('button', { class: 'zr-btn purple', onclick: () => this.showShop() }, t('shop')))));
    void unlockedNext;
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const g = this.g;
    const k = this.input.keys;
    let mx = this.input.mx;
    let mz = this.input.mz;
    if (k.has('arrowleft') || k.has('a')) mx -= 1;
    if (k.has('arrowright') || k.has('d')) mx += 1;
    if (k.has('arrowup') || k.has('w')) mz -= 1;
    if (k.has('arrowdown') || k.has('s')) mz += 1;
    g.setMove(mx, mz);
    const before = g.state;
    const events = g.step(dt);
    for (const e of events) this._event(e, g);
    if (before !== 'won' && g.state === 'won') setTimeout(() => this.mode === 'play' && this.g === g && this._results(), 500);
    if (before !== 'lost' && g.state === 'lost') setTimeout(() => this.mode === 'play' && this.g === g && this._results(), 1900);
    this._sync(dt, time);
  }

  _event(e, g) {
    const S = this.sound;
    switch (e.type) {
      case 'shoot':
        if (e.weapon !== 'blaster' || (this._pew = (this._pew ?? 0) + 1) % 1 === 0) S.play(e.weapon);
        this.muzzleT = 0.06;
        break;
      case 'hit':
        if (Math.random() < 0.25) S.play('hit');
        this.sparks.burst(e.x, 1, e.z, 3, 2, 0.3);
        break;
      case 'pop': {
        S.play('pop');
        const big = e.kind === 'brute' || e.kind === 'king';
        this.puff.burst(e.x, 0.9, e.z, big ? 40 : 18, big ? 3.2 : 2.2, 0.8);
        this._splat(e.x, e.z, big ? 1.8 : 1);
        this.waveKills++;
        if (e.kind === 'king') { S.setMode('play'); this.hud.boss.style.display = 'none'; this.shake = 0.5; }
        break;
      }
      case 'spawn':
        if (e.kind === 'king') {
          S.play('king');
          S.setMode('king');
          this._banner(t('king'), 2.2);
          this.hud.boss.style.display = 'block';
          this.shake = 0.6;
        } else if ((this._groanT ?? 0) <= 0) { S.play('groan', e.kind); this._groanT = 1.4 + Math.random(); }
        break;
      case 'boom': {
        const big = e.by === 'tank';
        if (!big) S.play(e.by === 'spark' ? 'sparkle' : 'boom');
        this._boom(e.x, e.z, e.r, e.by);
        break;
      }
      case 'tank':
        S.play('tank');
        this.shake = 0.7;
        break;
      case 'tankHit': S.play('clink'); break;
      case 'tankBack': break;
      case 'coin':
        if ((this._coinT ?? 0) <= 0) { S.play('coin'); this._coinT = 0.06; }
        this.coinSpark.burst(g.hero.x, 1.4, g.hero.z, 3, 2, 0.3);
        break;
      case 'heal':
        S.play('heal');
        this.coinSpark.burst(g.hero.x, 1, g.hero.z, 24, 3);
        this.toast(t('heal'), 1, '❤');
        break;
      case 'ouch':
        S.play('ouch');
        this.hurtT = 0.25;
        break;
      case 'wave':
        S.play('wave');
        this._banner(`${t('wave')} ${num(e.n)}`, 1.6);
        this.waveKills = 0;
        this.waveSize = Math.max(1, g.queue.length);
        break;
      case 'waveClear':
        S.play('waveClear');
        if (g.state !== 'pad') this._banner(t('waveCleared'), 1.5);
        break;
      case 'crate':
        this.toast(t('tip_crate'), 2.6, '🎁');
        break;
      case 'weapon': {
        S.play('weapon');
        this._setGun(e.weapon);
        this.sparks.burst(e.x, 1, e.z, 40, 5);
        this._banner(`${t('newWeapon')} ${weaponOf(e.weapon).icon}`, 2, true);
        // found weapons are kept for later roofs straight away
        if (!this.save.weapons.includes(e.weapon)) { this.save.weapons.push(e.weapon); this.save.weapon = e.weapon; this._saveNow(); }
        break;
      }
      case 'levelUp': this._perkChoice(e.choices); break;
      case 'pad':
        S.play('pad');
        this._banner(t('roofCleared'), 2);
        setTimeout(() => this.mode === 'play' && this.toast(t('toPad'), 3, '⬆'), 1800);
        break;
      case 'leap':
        S.play('leap');
        if (this.toastEl) this.toastEl.classList.remove('show');
        this.hud.arrow.style.display = 'none';
        this.joy.style.display = 'none';
        this.input.pointer = null;
        break;
      case 'knocked':
        S.play('knocked');
        this._banner(t('knockedBanner'), 2.2);
        this.joy.style.display = 'none';
        this.input.pointer = null;
        break;
      default:
    }
  }

  _splat(x, z, s) {
    const sp = this.splats[this.splatI++ % this.splats.length];
    sp.m.position.set(x + (Math.random() - 0.5) * 0.4, 0.015 + Math.random() * 0.01, z + (Math.random() - 0.5) * 0.4);
    sp.m.scale.set(s * (0.8 + Math.random() * 0.6), s * (0.6 + Math.random() * 0.5), 1);
    sp.m.rotation.z = Math.random() * 6.28;
    sp.m.visible = true;
    sp.t = 0;
  }

  _boom(x, z, r, by) {
    const b = this.booms.find((o) => o.t > 0.6) || this.booms[0];
    b.t = 0;
    b.r = r;
    b.ball.position.set(x, 0.6, z);
    b.ring.position.set(x, 0.05, z);
    b.ball.material.color.setHex(by === 'spark' || by === 'firework' ? [0xff5ab8, 0x5ae8ff, 0xffe23a, 0x8aff5a][Math.floor(Math.random() * 4)] : 0xffb03a);
    b.ball.visible = b.ring.visible = true;
    const n = this.quality.low ? 0.6 : 1;
    this.fire.burst(x, 0.8, z, Math.round(26 * n * (r / 2)), r * 2.4, 0.5);
    this.smoke.burst(x, 0.8, z, Math.round(12 * n), r * 1.2, 1.2);
    if (by === 'spark' || by === 'firework') this.sparks.burst(x, 1.2, z, 30, 5, 0.7);
    if (by === 'tank') this.shake = Math.max(this.shake ?? 0, 0.6); else this.shake = Math.max(this.shake ?? 0, 0.2);
  }

  _sync(dt, time) {
    const g = this.g;
    const hx = g.hero;
    const hr = this.hero;
    // hero: runs, faces where it shoots, leaps or falls over
    const moving = Math.hypot(hx.vx, hx.vz) > 0.3;
    if (g.state === 'leap' || g.state === 'won') {
      const k = Math.min(1, g.leapT / 1.6);
      const z0 = g.pad.z;
      const z1 = this.landZ + 3;
      hr.root.position.set(g.pad.x, Math.sin(k * Math.PI) * 6 + k * 0.25, z0 + (z1 - z0) * k);
      hr.root.rotation.y = Math.PI;
      hr.body.rotation.x = Math.sin(k * Math.PI) * -0.4;
      hr.legs.forEach((l, i) => { l.rotation.x = (i ? 1 : -1) * 0.6 * Math.sin(k * Math.PI); });
      hr.ring.visible = false;
      if (k >= 1 && !this.landed) { this.landed = true; this.sound.play('land'); this.smoke.burst(g.pad.x, 0.4, z1, 16, 2.5, 0.8); }
      if (Math.random() < 0.6 && k < 1) this.sparks.emit(hr.root.position.x, hr.root.position.y, hr.root.position.z, 0, -1, 1, 0.5);
    } else if (g.state === 'lost') {
      this.knockT += dt;
      hr.body.rotation.x = -Math.min(1.45, this.knockT * 4);
      hr.root.position.set(hx.x, 0, hx.z);
      if (Math.random() < dt * 8) this.sparks.emit(hx.x + Math.sin(time * 6) * 0.4, 1.0, hx.z + Math.cos(time * 6) * 0.4, 0, 0.3, 0, 0.4); // dizzy stars
    } else {
      hr.root.position.set(hx.x, 0, hx.z);
      const face = hx.aimT > 0 ? hx.aim : hx.face;
      let d = face - hr.root.rotation.y;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      hr.root.rotation.y += d * Math.min(1, dt * 16);
      const run = moving ? time * 13 : 0;
      hr.legs.forEach((l, i) => { l.rotation.x = moving ? Math.sin(run + i * Math.PI) * 0.8 : 0; });
      hr.body.position.y = moving ? Math.abs(Math.sin(run)) * 0.08 : Math.sin(time * 3) * 0.015;
      hr.body.rotation.x = moving ? 0.12 : 0;
      hr.tails.forEach((tl, i) => { tl.rotation.x = 0.4 + Math.sin(time * 10 + i) * 0.25 + (moving ? 0.5 : 0); });
      hr.ring.material.opacity = 0.55 + Math.sin(time * 6) * 0.2;
      // a short red blink when bumped
      this.hurtT = Math.max(0, (this.hurtT ?? 0) - dt);
      hr.body.visible = !(this.hurtT > 0 && Math.floor(time * 30) % 2);
    }
    // muzzle flash
    this.muzzleT = Math.max(0, (this.muzzleT ?? 0) - dt);
    if (this.muzzleT > 0) {
      const a = hr.root.rotation.y;
      this.muzzle.position.set(hx.x + Math.sin(a) * 0.9, 1.1, hx.z + Math.cos(a) * 0.9);
      this.muzzle.intensity = 6;
    } else this.muzzle.intensity = 0;
    // zombies
    const seen = new Set();
    for (const z of g.zombies) {
      seen.add(z.id);
      let m = this.models.get(z.id);
      if (!m) { m = zombieModel(z.kind, z.id % 5); this.scene.add(m.root); this.models.set(z.id, m); }
      const climbing = z.climb > 0;
      const rise = climbing ? Math.min(1, z.climb / (z.kind === 'king' ? 1.2 : 0.7)) : 0;
      m.root.position.set(z.x, -rise * 1.6, z.z);
      const want = Math.atan2(g.hero.x - z.x, g.hero.z - z.z);
      let d = want - m.root.rotation.y;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      m.root.rotation.y += d * Math.min(1, dt * 6);
      const sp = z.kind === 'sprinter' ? 14 : z.kind === 'shambler' ? 6 : 4.5;
      const walk = z.t * sp;
      m.legs.forEach((l, i) => { l.rotation.x = climbing ? -0.6 : Math.sin(walk + i * Math.PI) * (z.touching ? 0.15 : 0.6); });
      m.arms.forEach((a, i) => { a.rotation.x = climbing ? -2.7 : -1.45 + Math.sin(walk * 0.5 + i * 1.7) * 0.18 + (z.touching ? Math.sin(z.t * 10 + i) * 0.35 : 0); });
      m.body.rotation.z = Math.sin(walk * 0.5) * (z.kind === 'sprinter' ? 0.05 : 0.12);
      m.body.rotation.x = z.kind === 'sprinter' ? 0.25 : 0.08;
      m.body.position.y = Math.abs(Math.sin(walk)) * 0.05;
      const pulse = z.flash > 0 ? 1.15 : 1;
      m.body.scale.setScalar(m.s * pulse);
    }
    for (const [id, m] of this.models) if (!seen.has(id)) { this.scene.remove(m.root); this.models.delete(id); }
    // shots
    const D = this._dummy;
    let nb = 0;
    let nm = 0;
    let nr = 0;
    let nf = 0;
    for (const s of g.shots) {
      if (s.kind === 'bolt' && nb < 160) {
        D.position.set(s.x, 1.05, s.z);
        D.rotation.set(0, Math.atan2(s.vx, s.vz), 0);
        D.scale.set(1, 1, 1);
        D.updateMatrix();
        this.boltMesh.setMatrixAt(nb++, D.matrix);
      } else if (s.kind === 'rocket' && nr < 40) {
        D.position.set(s.x, 1.1, s.z);
        D.rotation.set(0, Math.atan2(s.vx, s.vz), 0);
        D.updateMatrix();
        this.rocketMesh.setMatrixAt(nr++, D.matrix);
        if (Math.random() < 0.7) this.smoke.emit(s.x, 1.1, s.z, 0, 0.5, 0, 0.5);
      } else if (s.kind === 'bomb' && nm < 60) {
        D.position.set(s.x, s.y ?? 1, s.z);
        D.rotation.set(time * 8, 0, 0);
        D.updateMatrix();
        this.bombMesh.setMatrixAt(nm++, D.matrix);
        if (Math.random() < 0.5) this.sparks.emit(s.x, (s.y ?? 1) + 0.2, s.z, 0, 1, 0, 0.2);
      } else if ((s.kind === 'firework' || s.kind === 'spark') && nf < 80) {
        D.position.set(s.x, s.y ?? 1, s.z);
        D.rotation.set(0, 0, 0);
        D.scale.setScalar(s.kind === 'spark' ? 0.6 : 1);
        D.updateMatrix();
        D.scale.setScalar(1);
        this.fwMesh.setMatrixAt(nf++, D.matrix);
        this.sparks.emit(s.x, s.y ?? 1, s.z, 0, 0, 0, 0.25);
      }
    }
    for (const [m, n] of [[this.boltMesh, nb], [this.bombMesh, nm], [this.rocketMesh, nr], [this.fwMesh, nf]]) { m.count = n; m.instanceMatrix.needsUpdate = true; }
    // coins
    let nc = 0;
    for (const c of g.coinsOnRoof) {
      if (nc >= 260) break;
      D.position.set(c.x, 0.35 + Math.abs(Math.sin(c.t * 4)) * 0.15 + (c.t < 0.25 ? (0.25 - c.t) * 4 : 0), c.z);
      D.rotation.set(0, c.t * 4 + c.x, 0);
      D.updateMatrix();
      this.coinMesh.setMatrixAt(nc++, D.matrix);
    }
    this.coinMesh.count = nc;
    this.coinMesh.instanceMatrix.needsUpdate = true;
    // tanks, hearts, crate, pad
    g.tanks.forEach((tk, i) => { const m = this.tankModels[i]; if (m) m.root.visible = tk.alive; });
    while (this.heartModels.length < g.hearts.length) { const m = makeHeart(); this.scene.add(m); this.heartModels.push(m); }
    this.heartModels.forEach((m, i) => { const ht = g.hearts[i]; m.visible = !!ht; if (ht) { m.position.set(ht.x, 0.7 + Math.sin(time * 4) * 0.12, ht.z); m.rotation.y = time * 2; } });
    if (g.crate && !this.crateModel) { this.crateModel = makeCrate(g.crate.weapon); this.scene.add(this.crateModel.root); }
    if (!g.crate && this.crateModel) { this.scene.remove(this.crateModel.root); this.crateModel = null; }
    if (this.crateModel) {
      this.crateModel.root.position.set(g.crate.x, Math.max(0, 6 - g.crate.t * 14), g.crate.z);
      this.crateModel.weapon.rotation.y = time * 2;
      this.crateModel.weapon.position.y = 1.4 + Math.sin(time * 3) * 0.12;
    }
    const padOn = g.state === 'pad';
    this.pad.glow.material.opacity = padOn ? 0.25 + Math.sin(time * 5) * 0.12 : 0;
    this.pad.arrows.forEach((a, i) => { a.position.y = 0.25 + (padOn ? Math.max(0, Math.sin(time * 6 - i)) * 0.15 : 0); });
    this._ambient(dt, time);
    // camera follows the hero (high and steep, like the video)
    const far = this.land ? new THREE.Vector3(0, 10, 8.5) : new THREE.Vector3(0, 11.5, 9.5); // closer and lower, like the video
    const tx = Math.max(-Math.max(0, this.W - (this.land ? 6 : 4)), Math.min(Math.max(0, this.W - (this.land ? 6 : 4)), hr.root.position.x));
    const tz = g.state === 'leap' || g.state === 'won' ? hr.root.position.z : Math.max(-this.D + 3, Math.min(this.D - 3, hr.root.position.z));
    const ty = g.state === 'leap' || g.state === 'won' ? hr.root.position.y * 0.5 : 0;
    this.camLook.lerp(new THREE.Vector3(tx, ty, tz - (this.land ? 1.2 : 2.2)), Math.min(1, dt * 5));
    this.camPos.lerp(new THREE.Vector3(tx + far.x, ty + far.y, tz + far.z), Math.min(1, dt * 4));
    this.camera.position.copy(this.camPos);
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    if (this.shake > 0) this.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 0.6, (Math.random() - 0.5) * this.shake * 0.4, 0));
    this.camera.lookAt(this.camLook);
    this._groanT = (this._groanT ?? 0) - dt;
    this._coinT = (this._coinT ?? 0) - dt;
    this._hudSync(g);
  }

  _proj(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * this.cw, y: (-v.y * 0.5 + 0.5) * this.ch, behind: v.z > 1 };
  }

  _hudSync(g) {
    if (!this.hud) return;
    const hc = this._hc;
    const total = g.waveTotal;
    const wv = Math.min(total, g.wave + 1);
    const key = `${wv}/${total}/${g.wave}`;
    if (hc.wave !== key) {
      hc.wave = key;
      this.hud.waveT.textContent = `${t('wave')} ${num(Math.max(1, wv))}/${g.endless ? '∞' : num(total)}`;
      const n = g.endless ? Math.min(6, wv) : total;
      this.hud.dots.replaceChildren(...Array.from({ length: n }, (_, i) => h('b', { class: i < g.wave ? 'done' : i === g.wave ? 'now' : '' })));
    }
    const prog = g.state === 'pad' || g.state === 'leap' || g.state === 'won' ? 100 : Math.round(Math.min(1, this.waveKills / Math.max(1, this.waveSize)) * 100);
    if (hc.bar !== prog) { hc.bar = prog; this.hud.bar.style.width = `${prog}%`; this.hud.bar.classList.toggle('gold', prog >= 75); }
    const xpW = Math.round((g.xp / g.xpNeed) * 100);
    if (hc.xp !== xpW) { hc.xp = xpW; this.hud.xp.style.width = `${Math.min(100, xpW)}%`; }
    if (hc.lv !== g.xpLevel) { hc.lv = g.xpLevel; this.hud.lv.textContent = `${getLang() === 'en' ? 'LV' : 'مستوى'} ${num(g.xpLevel)}`; }
    const coins = this.coinsAtStart + g.coins;
    if (this.coinEl && hc.coins !== coins) { hc.coins = coins; this.coinEl.textContent = num(coins); }
    // the hero's health bar floats above the head (as in the video)
    const hr = this.hero.root.position;
    const p = this._proj(hr.x, hr.y + 2.2, hr.z);
    const hp = this.hud.hp;
    hp.style.display = g.state === 'leap' || g.state === 'won' ? 'none' : 'block';
    hp.style.left = `${p.x}px`;
    hp.style.top = `${p.y}px`;
    const f = Math.round((g.hero.hp / g.hero.maxHp) * 100);
    if (hc.hp !== f) { hc.hp = f; hp.firstChild.style.width = `${f}%`; hp.firstChild.classList.toggle('low', f < 35); }
    // the king's bar
    const king = g.zombies.find((z) => z.kind === 'king');
    if (king) this.hud.boss.querySelector('i').style.width = `${Math.max(0, (king.hp / king.max) * 100)}%`;
    // an arrow over the launch pad
    if (g.state === 'pad') {
      const q = this._proj(g.pad.x, 2.4 + Math.abs(Math.sin(this.clock.elapsedTime * 5)) * 0.6, g.pad.z);
      const a = this.hud.arrow;
      a.style.display = 'block';
      a.style.left = `${Math.max(this.u * 6, Math.min(this.cw - this.u * 6, q.x))}px`;
      a.style.top = `${Math.max(this.u * 30, Math.min(this.ch - this.u * 8, q.y))}px`;
    }
  }

  _ambient(dt, time) {
    for (const f of this.vents ?? []) f.rotation.y = time * 9;
    if (this.crane) this.crane.jib.rotation.y = Math.sin(time * 0.15) * 0.8;
    if (this.clockTower) { this.clockTower.hands[0].rotation.z = -time * 0.5; this.clockTower.hands[1].rotation.z = -time * 0.04; }
    if (this.snow) {
      const c = this.camLook;
      for (let i = 0; i < 3; i++) this.snow.emit(c.x + (Math.random() - 0.5) * 30, 12, c.z + (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 0.6, -2.2, 0, 6);
      this.snow.update(dt);
    }
    for (const b of this.booms) {
      if (b.t > 0.6) continue;
      b.t += dt;
      const k = Math.min(1, b.t / 0.45);
      b.ball.scale.setScalar(b.r * (0.35 + k * 0.75));
      b.ball.material.opacity = (1 - k) * 0.85;
      b.ring.scale.setScalar(b.r * (0.4 + k * 1.1));
      b.ring.material.opacity = (1 - k) * 0.9;
      if (b.t > 0.6) b.ball.visible = b.ring.visible = false;
    }
    for (const sp of this.splats) {
      if (sp.t > 9) continue;
      sp.t += dt;
      sp.m.material.opacity = Math.min(0.75, (9 - sp.t) * 0.5) * 0.9;
      if (sp.t > 9) sp.m.visible = false;
    }
    this.puff.update(dt, 1.2, 2.5);
    this.smoke.update(dt, 1.5, 2.2);
    this.fire.update(dt, 0.5, 3.5);
    this.sparks.update(dt, -4);
    this.coinSpark.update(dt, 2);
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && this.g && !this.paused && !this.g.choosing) this._playFrame(dt, time);
    else if (this.mode === 'play' && this.g) {
      this._ambient(0, time);
    } else if (this.mode !== 'play') {
      // menus: the hero stands on the roof and the camera slowly looks around
      this._ambient(dt, time);
      const hr = this.hero;
      hr.root.position.set(0, 0, 1);
      hr.body.rotation.set(0, 0, 0);
      hr.body.visible = true;
      hr.legs.forEach((l) => { l.rotation.x = 0; });
      hr.root.rotation.y = Math.PI + Math.sin(time * 0.7) * 0.6;
      hr.body.position.y = Math.sin(time * 3) * 0.02;
      const a = Math.sin(time * 0.12) * 0.5;
      const want = this.land ? new THREE.Vector3(Math.sin(a) * 12, 12, 13) : new THREE.Vector3(Math.sin(a) * 10, 15, 13);
      this.camPos.lerp(want, Math.min(1, dt * 1.5));
      this.camLook.lerp(new THREE.Vector3(0, 0, -1), Math.min(1, dt * 2));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(this.camLook);
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
    clearTimeout(this._tt);
    clearTimeout(this._bt);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
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

void box;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.ZombieRooftop = api;
export default api;
