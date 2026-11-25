// «شاحنة الكور» — Ball Scoop. Entry: window.BallScoop.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A yellow truck drives a long, crazy road scooping piles of colourful balls with its big shovel. The balls on screen are a REAL
// physics pile (physics.js: gravity, a moving shovel, side rails, ball-to-ball collisions) that spills over the sides and flies
// out when a wall is hit; the ball COUNT stays authoritative in sim.js and follows the pile (pile.js). 30 levels, 5 themes,
// a GOAL per level (stars), a bank finale where the shovel tips everything into the giant bank, and a coin shop.
// three.js, art and sound made in code. No network, no ads.
import * as THREE from 'three';
import { Run, LEVELS, UPG, HALF, FIN, THEMES, themeOf, upgradeCost, normalizeSave, goalFor, robotSteer, shovelW } from './sim.js';
import { Pile, heapPoints, DECOR_MAX } from './pile.js';
import { R, TUB, tubBoxes } from './physics.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['شاحنة عمورة', "Amoora's Truck"], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'LEVEL'], goal: ['الهدف', 'GOAL'], play: ['يلا نلعب', 'Play'], levels: ['المراحل', 'Levels'],
  how: ['اسحب يمين وشمال — جمّع الكور، اعدّي من البوابات، واتفادى الحيطان', 'Drag left and right: scoop balls, pass gates, dodge walls'],
  bank: ['البنك الكبير', 'The giant bank'], coins: ['عملات', 'coins'], shop: ['المتجر', 'Shop'], max: ['أقصى', 'MAX'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], balls: ['كور', 'balls'], best: ['أحسن', 'Best'],
  hitWall: ['الحيطة وقّعت كور!', 'The wall knocked balls out!'], buy: ['اشتري', 'Buy'], back: ['رجوع', 'Back'], banked: ['في البنك', 'In the bank'],
  meadow: ['المرج', 'Meadow'], desert: ['الصحراء', 'Desert'], snow: ['الثلج', 'Snow'], candy: ['الحلوى', 'Candy'], space: ['الفضاء', 'Space'],
  start: ['كور بداية', 'Start balls'], wide: ['مجرفة أعرض', 'Wider shovel'], coin: ['عملات أكتر', 'Coin value'], magnet: ['مغناطيس', 'Magnet range'], armor: ['درع للحيطان', 'Wall armour'],
};
const I = makeI18n(S);
const COLORS = [0xff4a6a, 0x4ab8ff, 0xffd23a, 0x5af08a, 0xb86aff, 0xff8a2a];
const THEME = {
  meadow: { sky: 0x6fd8c8, ground: 0x4fc8bc, road: 0xe0a05c, stripe: 0xc88a48, ra: 0xff4a4a, rb: 0xfff0f0, icon: '🌊', prop: 'tree', c1: 0xeaf8f6, c2: 0xffffff },
  desert: { sky: 0xffd9a0, ground: 0xe8c070, road: 0xb8895a, stripe: 0xc89a68, ra: 0xff8a2a, rb: 0xfff0c0, icon: '🌵', prop: 'cactus', c1: 0x3a9a4a, c2: 0x4ab85a },
  snow: { sky: 0xd8ecff, ground: 0xf4faff, road: 0x9ab0c8, stripe: 0xaec2d8, ra: 0x4ab8ff, rb: 0xffffff, icon: '❄️', prop: 'pine', c1: 0x6a4a2a, c2: 0x2a8a5a },
  candy: { sky: 0xffc8e8, ground: 0xff9ad0, road: 0xc890ff, stripe: 0xd8a8ff, ra: 0xff4a9a, rb: 0x7affd0, icon: '🍭', prop: 'lolli', c1: 0xffffff, c2: 0xff4a8a },
  space: { sky: 0x140a38, ground: 0x1c1a4a, road: 0x3a3a78, stripe: 0x4c4c9c, ra: 0x3affff, rb: 0xff4aff, icon: '🚀', prop: 'crystal', c1: 0x6a4aff, c2: 0x4affd0 },
};

const geo = { sphere: new THREE.SphereGeometry(1, 8, 6), low: new THREE.SphereGeometry(1, 6, 4), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const texCache = new Map();
function labelTex(text, bg, fg = '#fff') {
  const k = `${text}|${bg}|${fg}`;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.beginPath(); if (g.roundRect) g.roundRect(6, 6, 244, 116, 28); else g.rect(6, 6, 244, 116); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 7; g.stroke(); }
  g.fillStyle = fg; g.font = '900 78px Tajawal, system-ui, sans-serif'; const mw = g.measureText(text).width; if (mw > 220) g.font = `900 ${Math.floor(78 * 220 / mw)}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 9; g.strokeText(text, 128, 68); g.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texCache.set(k, t); return t;
}
function sprite(text, bg, sx, sy) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg), transparent: true, depthTest: false })); sp.scale.set(sx, sy, 1); sp.renderOrder = 10; return sp; }
function chevTex() {
  if (texCache.has('chev')) return texCache.get('chev');
  const c = document.createElement('canvas'); c.width = 64; c.height = 64; const g = c.getContext('2d');
  g.fillStyle = '#3a3a48'; g.fillRect(0, 0, 64, 64); g.strokeStyle = '#ffd23a'; g.lineWidth = 8; g.beginPath(); g.moveTo(8, 50); g.lineTo(32, 24); g.lineTo(56, 50); g.stroke();
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; texCache.set('chev', t); return t;
}

/** The truck: body, wheels and the shovel built from the SAME boxes the physics uses. */
function makeTruck(W) {
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.box, M(0xffc82a), 0, 0.85, -0.6, 2.0, 1.2, 2.6));
  body.add(mesh(geo.box, M(0x2a3a4a, 0x102030), 0, 1.75, -1.0, 1.6, 0.8, 1.3));
  body.add(mesh(geo.box, M(0xffc82a), 0, 2.2, -1.0, 1.7, 0.12, 1.4));
  for (const sx of [-1.1, 1.1]) for (const z of [0.2, -1.5]) body.add(mesh(geo.cyl, M(0x1a1a1e), sx, 0.5, z, 1.0, 0.55, 1.0).rotateZ(Math.PI / 2));
  body.add(mesh(geo.box, M(0xff4a4a), 0.7, 0.95, 0.72, 0.3, 0.2, 0.05), mesh(geo.box, M(0xff4a4a), -0.7, 0.95, 0.72, 0.3, 0.2, 0.05));
  const tilt = new THREE.Group(); tilt.position.set(0, TUB.pivotY, TUB.pivotZ); g.add(tilt);
  const inner = new THREE.Group(); inner.position.set(0, -TUB.pivotY, -TUB.pivotZ); tilt.add(inner);
  for (const b of tubBoxes(W)) {
    if (!b.grp) continue;
    const glass = b.n === 'back';
    const m = glass ? new THREE.MeshLambertMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.25, depthWrite: false }) : M(b.n === 'lip' ? 0xffc82a : b.n === 'floor' ? 0x8a8e98 : 0xe8e8ee);
    const o = mesh(geo.box, m, b.c[0], b.c[1], b.c[2], b.h[0] * 2, b.h[1] * 2, b.h[2] * 2); o.rotation.x = b.pitch; inner.add(o);
  }
  g.userData = { tilt, body };
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('bs-style')) document.head.append(h('style', { id: 'bs-style' }, css('bs', '#ffa82a', '#a85a10', '#fff0a0') + EXTRA_CSS));
    this.root = h('div', { class: 'bs-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'bs-layer' });
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.page = 0; this.dispCount = 0;
    this.perfT = []; this.robot = false;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.pile = new Pile();
    this._fonts().then(() => { this.page = Math.min(4, Math.floor((this.save.unlocked - 1) / 6)); this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9fe0ff);
    this.scene.fog = new THREE.Fog(0x9fe0ff, 45, 140);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 420);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0xd8a868, 1.7); this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xffffff, 1.1); sun.position.set(-10, 30, -10); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.balls = new THREE.InstancedMesh(geo.sphere, new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 70, specular: 0x555555 }), 900);
    this.balls.frustumCulled = false; this.balls.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.scene.add(this.balls);
    this.colSeen = new Int8Array(900).fill(-1);
    const col = new THREE.Color();
    for (let i = 0; i < 900; i++) this.balls.setColorAt(i, col.setHex(COLORS[i % 6]));
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 74 : 56; this.camera.updateProjectionMatrix(); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.run && this.drag && !this.robot) this.run.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = true; move(e); });
    this.root.addEventListener('pointermove', move);
    this.root.addEventListener('pointerup', () => { this.drag = false; }); this.root.addEventListener('pointercancel', () => { this.drag = false; });
    this._onKey = (e) => { if (!this.run || this.mode !== 'play') return; const k = e.key.toLowerCase(); if (e.type === 'keydown') { if (k === 'arrowleft' || k === 'a') this.run.targetX = -(HALF - 1.2); if (k === 'arrowright' || k === 'd') this.run.targetX = HALF - 1.2; } else if (['arrowleft', 'arrowright', 'a', 'd'].includes(k)) this.run.targetX = 0; };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _clear() { this.layer.replaceChildren(); this.fxEls = []; }
  _soundPill() { const pill = h('button', { class: 'bs-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  // ---------------------------------------------------------------- world
  /** The owner's painted backdrop of the level (art/pano<N>.webp): a mirrored ring around the camera. n = 0 removes it. */
  _setPano(n) {
    if (this.panoMesh) { this.scene.remove(this.panoMesh); this.panoMesh.material.map.dispose(); this.panoMesh.material.dispose(); this.panoMesh = null; }
    if (!n) return;
    const tex = new THREE.TextureLoader().load(`${this.base}art/pano${n}.webp`, () => { if (this.panoMesh && this.panoMesh.material.map === tex) this.panoMesh.visible = true; });
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.MirroredRepeatWrapping; tex.repeat.set(2, 0.66); tex.offset.set(0, 0.34);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(300, 300, 240, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false }));
    ring.visible = false; ring.renderOrder = -10; this.panoMesh = ring; this.scene.add(ring);
  }
  _followPano() { if (this.panoMesh) this.panoMesh.position.set(this.camera.position.x, this.camera.position.y + 60, this.camera.position.z); }

  _buildWorld(run) {
    this._setPano(Math.min(6, Math.floor(run.level / 5) + 1));
    for (const c of [...this.world.children]) { this.world.remove(c); c.traverse?.((o) => { if (o.isInstancedMesh) o.dispose(); }); }
    if (this.truck) this.scene.remove(this.truck);
    const th = THEME[run.theme];
    this.th = th;
    this.scene.background.setHex(th.sky); this.scene.fog.color.setHex(th.sky);
    this.hemi.color.setHex(run.theme === 'space' ? 0x8a8aff : 0xffffff); this.hemi.groundColor.setHex(run.theme === 'space' ? 0x303060 : 0xd8a868); this.hemi.intensity = run.theme === 'space' ? 1.3 : 1.7;
    this.built = new Map(); this.things = run.things;
    const L = run.L, ze = run.zEdge, m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    const tiles = Math.ceil(ze / 2) + 2;
    const road = new THREE.InstancedMesh(geo.box, M(th.road), tiles), stripe = new THREE.InstancedMesh(geo.box, M(th.stripe), tiles);
    const railL = new THREE.InstancedMesh(geo.box, new THREE.MeshLambertMaterial({ color: 0xffffff }), tiles), railR = new THREE.InstancedMesh(geo.box, new THREE.MeshLambertMaterial({ color: 0xffffff }), tiles);
    const cA = new THREE.Color(th.ra), cB = new THREE.Color(th.rb);
    for (let i = 0; i < tiles; i++) {
      const z = i * 2 + 1;
      const hw = run.halfAt(z), cx = run.centerAt(z), gy = run.groundAt(z);
      const sl = (run.groundAt(z + 1) - run.groundAt(z - 1)) / 2, pitch = Math.atan(sl);
      const yaw = Math.atan2(-(run.centerAt(z + 1) - run.centerAt(z - 1)) / 2, 1);
      e.set(-pitch, yaw, 0, 'YXZ'); q.setFromEuler(e);
      const put = (mesh_, px, py, pz, sx, sy, sz) => { v.set(px, py, pz); sc.set(sx, sy, sz); m4.compose(v, q, sc); mesh_.setMatrixAt(i, m4); };
      const c = Math.cos(yaw);
      put(road, -cx, gy - 0.15, z, hw * 2, 0.3, 2.1);
      put(stripe, -cx, gy + 0.01 + (i % 2 ? 0.02 : 0), z, hw * 2 - 0.6, 0.02, i % 2 ? 1.4 : 0.0001);
      put(railL, -cx + (hw + 0.4) * c, gy + 0.35, z, 0.7, 0.9, 2.1);
      put(railR, -cx - (hw + 0.4) * c, gy + 0.35, z, 0.7, 0.9, 2.1);
      railL.setColorAt(i, i % 2 ? cA : cB); railR.setColorAt(i, i % 2 ? cB : cA);
    }
    for (const o of [road, stripe, railL, railR]) { o.frustumCulled = false; this.world.add(o); }
    // ground, with the bank pit cut out
    const gm = M(th.ground), Wd = 240;
    this.world.add(mesh(geo.box, gm, 0, -0.5, (ze - 80) / 2 + 5, Wd, 0.6, ze + 80 - 0.1 + 0));
    const ph = FIN.pitHalf, pl = FIN.pitLen;
    for (const s of [-1, 1]) this.world.add(mesh(geo.box, gm, s * (ph + 1.2 + (Wd / 2 - ph - 1.2) / 2), -0.5, ze + pl / 2 + 0.6, Wd / 2 - ph - 1.2, 0.6, pl + 1.2));
    this.world.add(mesh(geo.box, gm, 0, -0.5, ze + pl + 1.2 + 60, Wd, 0.6, 120));
    this.world.add(mesh(geo.box, M(0x8a6a3a), 0, FIN.h / 2 - 0.3, (L + FIN.ramp + ze) / 2, HALF * 2 + 1.2, FIN.h - 0.3 > 0 ? FIN.h - 0.4 : 0.1, ze - L - FIN.ramp));
    // the giant bank
    const bank = new THREE.Group(), gold = M(0xffd23a, 0x6a4a00), gold2 = M(0xc89a1a);
    const pitY = FIN.pitY;
    bank.add(mesh(geo.box, M(0xffb81a, 0x4a3000), 0, pitY - 0.2, ze + pl / 2, ph * 2, 0.4, pl));
    for (const s of [-1, 1]) bank.add(mesh(geo.box, gold, s * (ph + 0.6), (pitY + 6) / 2 + 0.5, ze + pl / 2 + 0.6, 1.2, 8 + 1, pl + 1.2));
    bank.add(mesh(geo.box, gold, 0, (pitY + 6) / 2 + 0.5, ze + pl + 0.6, ph * 2 + 2.4, 9, 1.2));
    bank.add(mesh(geo.box, gold2, 0, 8.6, ze + pl + 0.6, ph * 2 + 3.4, 1.0, 2.2));
    for (const x of [-3.8, -1.3, 1.3, 3.8]) bank.add(mesh(geo.cyl, M(0xfff0b0), x, 3.5, ze + pl - 0.1, 0.9, 8, 0.9));
    const lab = sprite(I.t('bank'), '#a87a0a', 9, 4.5); lab.position.set(0, 11.6, ze + pl - 0.5); bank.add(lab);
    this.world.add(bank); this.bank = bank;
    // scenery props on both sides
    this._props(run, th);
    // decor ball piles (static instanced spheres; vanish when scooped)
    let total = 0; const sizes = [];
    for (const t of run.things) if (t.kind === 'pile') { const n = Math.min(t.n, DECOR_MAX); sizes.push(n); total += n; }
    this.decor = new THREE.InstancedMesh(geo.low, new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 60, specular: 0x444444 }), Math.max(1, total));
    this.decor.frustumCulled = false; this.world.add(this.decor);
    let n = 0; const col = new THREE.Color();
    for (const t of run.things) if (t.kind === 'pile') {
      t.decor = [];
      const cx = run.centerAt(t.z) + t.x;
      for (const p of heapPoints(Math.min(t.n, DECOR_MAX))) {
        m4.compose(v.set(-(cx + p.dx), run.groundAt(t.z + p.dz) + p.y, t.z + p.dz), q.identity(), sc.set(R, R, R)); this.decor.setMatrixAt(n, m4); this.decor.setColorAt(n, col.setHex(COLORS[(t.id + t.decor.length) % 6])); t.decor.push(n); n++;
      }
    }
    this.decor.instanceMatrix.needsUpdate = true; if (this.decor.instanceColor) this.decor.instanceColor.needsUpdate = true;
    // truck
    this.truckW = run.W; this.truck = makeTruck(run.W); this.scene.add(this.truck);
  }

  _props(run, th) {
    const r = (() => { let s = 12345 + run.level * 77; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; })();
    const items = [];
    for (let z = 6; z < run.zEdge + 40; z += 7 + r() * 6) for (const sd of [-1, 1]) items.push({ x: sd * (HALF + 3 + r() * 12), z: z + r() * 4, s: 0.8 + r() * 1.2 });
    const stem = new THREE.InstancedMesh(geo.cyl, M(th.c1), items.length), top = new THREE.InstancedMesh(th.prop === 'pine' || th.prop === 'crystal' ? geo.cone : geo.sphere, M(th.c2), items.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    items.forEach((it, i) => {
      const cx = run.centerAt(it.z); const x = -(cx) + it.x;
      const p = th.prop; const s = it.s;
      const sh = p === 'cactus' ? 2.6 * s : p === 'crystal' ? 0.3 : p === 'lolli' ? 2.2 * s : 1.6 * s;
      m4.compose(v.set(x, sh / 2 - 0.2, it.z), q.identity(), sc.set(p === 'cactus' ? 0.7 * s : 0.5 * s, sh, p === 'cactus' ? 0.7 * s : 0.5 * s)); stem.setMatrixAt(i, m4);
      const ty = p === 'cactus' ? sh * 0.5 : p === 'pine' ? sh + 1.2 * s : p === 'crystal' ? 1.8 * s : sh + 0.6 * s;
      const ts = p === 'pine' ? [2.4 * s, 3.4 * s, 2.4 * s] : p === 'crystal' ? [1.4 * s, 3.6 * s, 1.4 * s] : p === 'cactus' ? [0.01, 0.01, 0.01] : [2.2 * s, 2.0 * s, 2.2 * s];
      m4.compose(v.set(x, ty, it.z), q.identity(), sc.set(...ts)); top.setMatrixAt(i, m4);
    });
    stem.frustumCulled = top.frustumCulled = false; this.world.add(stem, top);
    if (run.theme === 'space') {
      const pts = []; for (let i = 0; i < 400; i++) pts.push((r() - 0.5) * 300, 20 + r() * 80, r() * (run.zEdge + 200));
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      this.world.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, fog: false })));
      this.world.add(mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0xff8acd, fog: false }), -60, 40, run.zEdge * 0.6, 18, 18, 18));
    }
  }

  /** Build a thing's 3D object when the truck gets near. */
  _ensure(t, run) {
    if (this.built.has(t.id) || ['pile', 'bumpmark'].includes(t.kind)) return;
    const g = new THREE.Group(); const cx = run.centerAt(t.z); g.position.set(-(cx + (t.x || 0)), run.groundAt(t.z), t.z);
    if (t.kind === 'gate') {
      const pos = t.op === 'mul' || t.v >= 0;
      const colr = t.op === 'mul' ? 0x2ab05a : pos ? 0x2a6ae0 : 0xe02a3a;
      g.add(mesh(geo.box, new THREE.MeshBasicMaterial({ color: colr, transparent: true, opacity: 0.4, depthWrite: false }), 0, 1.8, 0, t.w, 3.4, 0.2), mesh(geo.box, M(colr), -t.w / 2, 1.8, 0, 0.3, 3.6, 0.3), mesh(geo.box, M(colr), t.w / 2, 1.8, 0, 0.3, 3.6, 0.3), mesh(geo.box, M(colr), 0, 3.6, 0, t.w + 0.3, 0.3, 0.3));
      const s = sprite(t.op === 'mul' ? `x${t.v}` : t.v >= 0 ? `+${t.v}` : `${t.v}`, t.op === 'mul' ? '#1f9a4a' : pos ? '#2a6ae0' : '#e02a3a', 3, 1.5); s.position.y = 4.6; g.add(s);
    } else if (t.kind === 'wall' || t.kind === 'mwall') {
      g.add(mesh(geo.box, M(t.kind === 'mwall' ? 0xffb81a : 0xc8452a), 0, 1.1, 0, t.w, 2.2, 0.9));
      for (let k = 0; k < 4; k++) g.add(mesh(geo.box, M(0xe8e0d0), (k - 1.5) * t.w / 4, 1.1, -0.47, t.w / 4 - 0.08, 0.3, 0.05));
      g.add(mesh(geo.box, M(0xe8e0d0), 0, 2.0, -0.47, t.w, 0.16, 0.05));
    } else if (t.kind === 'spinner') {
      g.add(mesh(geo.cyl, M(0x6a6e78), 0, 0.8, 0, 0.5, 1.6, 0.5));
      const bar = new THREE.Group(); bar.add(mesh(geo.box, M(0xff4a3a), 0, 0, 0, t.len, 0.45, 0.45), mesh(geo.box, M(0xffffff), t.len * 0.25, 0, 0, t.len * 0.12, 0.47, 0.47), mesh(geo.box, M(0xffffff), -t.len * 0.25, 0, 0, t.len * 0.12, 0.47, 0.47)); bar.position.y = 0.9; g.add(bar); g.userData.bar = bar;
    } else if (t.kind === 'conv') {
      const tx = chevTex().clone(); tx.needsUpdate = true; tx.repeat.set(Math.round(HALF * 2), t.len / 2);
      const m = new THREE.Mesh(geo.box, new THREE.MeshLambertMaterial({ map: tx })); m.scale.set(HALF * 2 - 0.4, 0.06, t.len); m.position.set(0, 0.05, t.len / 2); g.add(m); g.userData.tex = tx;
      g.position.x = -cx;
    } else if (t.kind === 'ramp') {
      g.add(mesh(geo.box, M(0xffd23a), 0, 0.06, 0, HALF * 2, 0.05, 0.4));
    } else return;
    this.world.add(g); this.built.set(t.id, g);
  }

  _syncThings(run, zt, dt) {
    for (const t of run.things) {
      if (t.kind === 'pile' || t.kind === 'bumpmark') { if (t.done && t.decor && !t.hidden) { t.hidden = true; const m = new THREE.Matrix4().makeScale(0, 0, 0); for (const i of t.decor) this.decor.setMatrixAt(i, m); this.decor.instanceMatrix.needsUpdate = true; } continue; }
      const near = t.z > zt - 14 && t.z < zt + 150;
      if (near) this._ensure(t, run);
      const g = this.built.get(t.id);
      if (!g) continue;
      if (!near) { this.world.remove(g); this.built.delete(t.id); continue; }
      const cx = run.centerAt(t.z);
      if (t.kind === 'mwall') g.position.x = -(cx + t.x + t.amp * Math.sin(run.time * t.f + t.ph));
      if (t.kind === 'spinner') g.userData.bar.rotation.y = -(t.ph + run.time * t.w0);
      if (t.kind === 'conv') g.userData.tex.offset.y -= t.dir * dt * 1.6;
      if (t.done && (t.kind === 'wall' || t.kind === 'mwall')) { t.fall = (t.fall || 0) + dt; g.rotation.x = Math.min(1.4, t.fall * 3); g.position.y = run.groundAt(t.z) - t.fall * 3; if (t.fall > 0.8) g.visible = false; }
      if (t.kind === 'gate' && t.hit) { g.scale.y = Math.max(0.01, 1 - (t.fl = (t.fl || 0) + dt * 2)); if (t.fl > 1) g.visible = false; }
      if (t.kind === 'gate' && t.done && !t.hit) g.visible = false;
    }
  }

  // ---------------------------------------------------------------- screens
  _demoStart() {
    const run = new Run({ level: 0, up: this.save.up, goal: 0 });
    run.balls = 80; this.demo = run; this.run = null;
    this._buildWorld(run); this.pile.begin(run);
    this.camAng = 0;
  }

  showMenu(screen = 'main') {
    this.mode = 'menu'; this.run = null; this._clear(); this.sound.setMode(false);
    if (!this.demo || this.mode !== 'menu' || !this.built || this._needDemo !== false) { this._demoStart(); this._needDemo = false; }
    const ar = I.getLang() !== 'en';
    const coins = h('div', { class: 'bs-pill' }, `🪙 ${I.num(this.save.coins)}`);
    let card;
    if (screen === 'main') {
      const next = Math.min(LEVELS, this.save.unlocked);
      card = h('div', { class: 'bs-card' }, h('div', { class: 'bs-logo' }, '🚜 ', I.t('title')), coins, h('div', { class: 'bs-small' }, I.t('how')),
        h('button', { class: 'bs-btn', onclick: () => { this.sound.play('tap'); this.start(next - 1); } }, `▶ ${I.t('play')} — ${I.t('level')} ${I.num(next)}`),
        h('button', { class: 'bs-btn dark', onclick: () => { this.sound.play('tap'); this.showMenu('levels'); } }, `🗺️ ${I.t('levels')}`),
        h('button', { class: 'bs-btn dark', onclick: () => { this.sound.play('tap'); this.showMenu('shop'); } }, `🛒 ${I.t('shop')}`),
        h('button', { class: 'bs-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')));
    } else if (screen === 'levels') {
      const th = THEMES[this.page];
      const grid = h('div', { class: 'bs-lvs bs-lvs6' }, Array.from({ length: 6 }, (_, k) => {
        const i = this.page * 6 + k; const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0;
        return h('button', { class: `bs-lv${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } },
          h('i', {}, lock ? '🔒' : THEME[th].icon), h('span', {}, I.num(i + 1)), h('span', { class: 'bs-st' }, lock ? '·' : '★'.repeat(st) + '☆'.repeat(3 - st)), h('span', { class: 'bs-tiny' }, st ? `🏆${I.num(this.save.best[i + 1] || 0)}` : ''));
      }));
      const nav = h('div', { class: 'bs-nav' },
        h('button', { class: 'bs-round', onclick: () => { this.page = (this.page + 4) % 5; this.showMenu('levels'); } }, ar ? '▶' : '◀'),
        h('div', { class: 'bs-pill' }, `${THEME[th].icon} ${I.t(th)}`),
        h('button', { class: 'bs-round', onclick: () => { this.page = (this.page + 1) % 5; this.showMenu('levels'); } }, ar ? '◀' : '▶'));
      const dots = h('div', { class: 'bs-dots' }, THEMES.map((_, i) => h('b', { class: i === this.page ? 'on' : '' })));
      card = h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, `🗺️ ${I.t('levels')}`), nav, grid, dots, h('button', { class: 'bs-btn dark', onclick: () => this.showMenu() }, I.t('back')));
    } else {
      const eff = (u, lv) => {
        if (u.id === 'start') return `${10 + lv * 8}`; if (u.id === 'wide') return `${shovelW(lv).toFixed(1)} m`; if (u.id === 'coin') return `${Math.round(100 + lv * 30)}%`;
        if (u.id === 'magnet') return `${(lv * 0.5).toFixed(1)} m`; return `-${Math.round(lv * 15)}%`;
      };
      const cards = UPG.map((u) => {
        const lv = this.save.up[u.id]; const c = upgradeCost(u.id, lv); const can = c !== null && this.save.coins >= c;
        const pips = h('div', { class: 'bs-pips' }, Array.from({ length: u.max }, (_, k) => h('b', { class: k < lv ? 'on' : '' })));
        return h('div', { class: `bs-shopc${can ? ' can' : ''}` }, h('i', {}, u.icon), h('div', { class: 'bs-sn' }, ar ? u.ar : u.en), pips,
          h('div', { class: 'bs-tiny', style: 'direction:ltr' }, c === null ? eff(u, lv) : `${eff(u, lv)} → ${eff(u, lv + 1)}`),
          h('button', { class: `bs-buy${can ? ' go' : ''}`, onclick: () => { if (!can) return; this.save.coins -= c; this.save.up[u.id] += 1; this.post({ type: 'save', save: this.save }); this.sound.play('bank'); this.showMenu('shop'); } }, c === null ? I.t('max') : `🪙 ${I.num(c)}`));
      });
      card = h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, `🛒 ${I.t('shop')}`), coins, h('div', { class: 'bs-shop' }, cards), h('button', { class: 'bs-btn dark', onclick: () => this.showMenu() }, I.t('back')));
    }
    this.layer.append(h('div', { class: 'bs-dim' }, card));
    this.hintEl = h('div', { class: 'bs-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  start(i) {
    this.levelIdx = i;
    const goal = goalFor(i);
    this.run = new Run({ level: i, up: this.save.up, easy: this.age <= 4, goal });
    this.demo = null; this._buildWorld(this.run); this.pile.begin(this.run);
    this.mode = 'play'; this.paused = false; this.fx = []; this.dispCount = this.run.balls; this.coinShown = 0; this.poured = 0; this.finished = false; this._tiltSnd = false;
    this._clear(); this.sound.setMode(true);
    this.cntEl = h('div', { class: 'bs-bubble' }, ''); this.barEl = h('b', { style: 'width:0%' }); this.carEl = h('span', { class: 'bs-car' }, '🚜');
    this.coinEl = h('div', { class: 'bs-coinbig' }, ''); this.coinEl.style.display = 'none';
    const back = h('button', { class: 'bs-round', 'aria-label': I.t('menu'), onclick: () => { this._needDemo = true; this.showMenu(); } }, '☰');
    const pause = h('button', { class: 'bs-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'bs-top' }, back, h('div', { class: 'bs-pill' }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: 'bs-pill bs-goal' }, `🎯 ${I.t('goal')} ${I.num(goal)}`), pause),
      h('div', { class: 'bs-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🏁'), h('div', { class: 'bs-bar' }, this.barEl, this.carEl), h('span', {}, '🏦')), this.cntEl, this.coinEl);
    this.banner = h('div', { class: 'bs-banner' }, h('div', {}, `${I.t('level')} ${I.num(i + 1)}`), h('small', {}, `${I.t('goal')} ${I.num(goal)}`));
    this.layer.append(this.banner); this.bannerT = 2.6;
    this.hintEl = h('div', { class: 'bs-hint', style: 'top:calc(var(--u)*24)' }); this.layer.append(this.hintEl); this._soundPill(); this.hint(I.t('how'), 3500);
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'bs-dim' }, h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, I.t('paused')), h('button', { class: 'bs-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'bs-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'bs-btn dark', onclick: () => { this._needDemo = true; this.showMenu(); } }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _done(stars) {
    const r = this.run; const lv = this.levelIdx + 1;
    this.save.coins += r.coins; this.save.best[lv] = Math.max(this.save.best[lv] || 0, r.balls);
    this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1));
    this.post({ type: 'save', save: this.save }); this.sound.play('win');
    const st = h('div', { class: 'bs-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= stars ? 'on' : 'off', style: `animation-delay:${k * 0.25}s` }, '★')));
    this.layer.append(h('div', { class: 'bs-dim' }, h('div', { class: 'bs-card' }, h('div', { class: 'bs-title' }, I.t('win')), st,
      h('div', { class: 'bs-pill' }, `🏦 ${I.num(r.balls)} / 🎯 ${I.num(r.goal)}`), h('div', { class: 'bs-pill' }, `🪙 +${I.num(r.coins)}`),
      this.levelIdx < LEVELS - 1 ? h('button', { class: 'bs-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')) : null, h('div', { class: 'bs-row' }, h('button', { class: 'bs-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'bs-btn dark', onclick: () => { this._needDemo = true; this.showMenu('levels'); } }, I.t('menu'))))));
  }

  // ---------------------------------------------------------------- loop
  _frame() {
    const now = performance.now(); const raw = now - this.last; const dt = Math.min(0.033, raw / 1000); this.last = now; this.clock += dt;
    if (this.perfT.length < 600) this.perfT.push(raw);
    if (this.mode === 'play' && !this.paused && this.run) this._update(dt);
    else if (this.demo) { this.pile.updateTruck(dt); this.pile.update(dt, []); }
    this._render(dt);
  }

  _fx(text, big) { this.fx.push({ t: 0, life: 1, text, big }); }

  _update(dt) {
    const r = this.run;
    if (this.robot) robotSteer(r);
    const ev = r.step(dt);
    this.pile.update(dt, ev);
    for (const e of ev) {
      switch (e.type) {
        case 'scoop': this.sound.play('scoop', e.n); this._fx(`+${e.n}`); break;
        case 'gate': this.sound.play(e.op === 'mul' ? 'gatex' : e.v >= 0 ? 'gate+' : 'gate-', e.v); this._fx(e.op === 'mul' ? `x${e.v}` : e.v >= 0 ? `+${e.v}` : `${e.v}`, true); break;
        case 'wall': this.sound.play('wall'); this._fx(`-${e.lost}`); this.hint(I.t('hitWall'), 1500); this.shake = 0.5; break;
        case 'jump': this.sound.play('jump'); break;
        case 'land': this.sound.play('land'); this.shake = 0.25; break;
        case 'bump': this.sound.play('land'); break;
        case 'finish': this.sound.play('bank'); this.coinEl.style.display = 'block'; break;
        case 'tilt': this.sound.play('tilt'); break;
        case 'done': this.finished = true; this._done(e.stars); break;
        default: break;
      }
    }
    if (this.pile.spillRecent >= 3) { this.sound.play('pour'); this.pile.spillRecent = 0; }
    if (r.state === 'bank' && r.tilt > 0.6 && Math.random() < 0.5) this.sound.play('pour');
    this.dispCount += (r.balls - this.dispCount) * Math.min(1, dt * 10);
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
    if (this.bannerT > 0) { this.bannerT -= dt; this.banner.style.opacity = String(Math.min(1, this.bannerT)); if (this.bannerT <= 0) this.banner.style.display = 'none'; }
    this.carEl.style.left = `${Math.round(Math.min(1, r.z / r.L) * 100)}%`;
    this.barEl.style.width = `${Math.round(Math.min(1, r.z / r.L) * 100)}%`;
    if (r.state !== 'run') {
      const f = this.pile.bankStart ? Math.min(1, this.pile.banked / this.pile.bankStart) : 0;
      const tf = Math.min(1, Math.max(0, (r.bankT - 1.2) / 2.8));
      this.coinShown = Math.max(this.coinShown, r.state === 'done' ? 1 : Math.max(f, tf * 0.0 + f));
      this.coinEl.textContent = `🪙 ${I.num(Math.round(r.coins * (r.state === 'done' ? 1 : Math.min(1, this.coinShown))))}`;
    }
  }

  _setBalls() {
    const w = this.pile.w, ia = this.balls.instanceMatrix.array, ic = this.balls.instanceColor;
    let hi = 0; let colDirty = false;
    for (let i = 0; i < w.max; i++) {
      const o = i * 16;
      if (!w.state[i]) { ia[o] = ia[o + 5] = ia[o + 10] = 0; continue; }
      hi = i + 1;
      let s = R;
      if (w.state[i] === 2) s = R * Math.max(0, 1 - Math.max(0, w.life[i] - 1.0) / 0.6);
      ia[o] = s; ia[o + 1] = 0; ia[o + 2] = 0; ia[o + 3] = 0; ia[o + 4] = 0; ia[o + 5] = s; ia[o + 6] = 0; ia[o + 7] = 0; ia[o + 8] = 0; ia[o + 9] = 0; ia[o + 10] = s; ia[o + 11] = 0;
      ia[o + 12] = w.x[i]; ia[o + 13] = w.y[i]; ia[o + 14] = w.z[i]; ia[o + 15] = 1;
      if (this.colSeen[i] !== w.col[i]) { this.colSeen[i] = w.col[i]; const c = COLORS[w.col[i] % 6]; ic.array[i * 3] = ((c >> 16) & 255) / 255; ic.array[i * 3 + 1] = ((c >> 8) & 255) / 255; ic.array[i * 3 + 2] = (c & 255) / 255; colDirty = true; }
    }
    this.balls.count = Math.max(1, hi);
    this.balls.instanceMatrix.needsUpdate = true;
    if (colDirty) ic.needsUpdate = true;
  }

  _render(dt) {
    const run = this.run || this.demo;
    const play = !!this.run;
    const t0 = performance.now();
    const T = this.pile.w.T;
    if (run) {
      this._syncThings(run, run.z, dt);
      if (this.truckW !== run.W) { this.scene.remove(this.truck); this.truckW = run.W; this.truck = makeTruck(run.W); this.scene.add(this.truck); }
      this.truck.position.set(T.x, T.y, T.z);
      this.truck.rotation.set(T.pitch, T.yaw, 0, 'YXZ');
      this.truck.userData.tilt.rotation.x = run.tilt || 0;
      this._setBalls();
    }
    // camera
    const port = this.cw < this.ch;
    let zc = T.z, tx = T.x * 0.6;
    this.camX = (this.camX ?? tx) + (tx - (this.camX ?? tx)) * Math.min(1, dt * 5);
    let cy = port ? 10.6 : 8.0, cz = port ? 9.6 : 8.2, ly = 1.2, lz = zc + 16;
    if (!play) { this.camAng += dt * 0.3; const a = Math.sin(this.camAng) * 0.5; this.camera.position.set(Math.sin(a) * 12, 5.5, -11 + Math.cos(a) * 0); this.camera.lookAt(0, 1.4, 2); }
    else {
      let k = 0;
      if (run.state !== 'run') k = Math.min(1, (run.z - run.L) / 6);
      cy += k * 5; cz += k * 3; lz = zc + 16 + k * 6; ly = 1.2 + k * 1.5;
      const sh = this.shake > 0 ? (this.shake -= dt, (Math.random() - 0.5) * 0.4 * Math.min(1, this.shake * 3)) : 0;
      this.camera.position.set(this.camX + sh, T.y * 0.6 + cy, zc - cz);
      this.camera.lookAt(this.camX * 0.5, ly, lz);
    }
    this._followPano();
    this.renderer.render(this.scene, this.camera);
    this.cpuMs = (this.cpuMs || 0) * 0.95 + (performance.now() - t0) * 0.05;
    if (play) this._hud();
  }

  _hud() {
    const r = this.run; const T = this.pile.w.T;
    const v = new THREE.Vector3(T.x, T.y + 3.6, T.z + 2.2).project(this.camera);
    const x = (v.x * 0.5 + 0.5) * this.cw, y = (-v.y * 0.5 + 0.5) * this.ch;
    this.cntEl.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    this.cntEl.textContent = `${Math.round(this.dispCount)}`.replace(/[0-9]/g, (d) => (I.getLang() === 'en' ? d : '٠١٢٣٤٥٦٧٨٩'[d]));
    this.cntEl.classList.toggle('gold', r.balls >= r.goal);
    this.cntEl.style.display = r.state === 'run' ? 'block' : 'none';
    this.fxEls = this.fxEls || [];
    this.fx.forEach((f, i) => {
      let el = this.fxEls[i];
      if (!el) { el = h('div', { class: 'bs-float' }); this.layer.append(el); this.fxEls[i] = el; }
      el.style.display = 'block'; el.style.opacity = String(1 - f.t / f.life); el.style.fontSize = `calc(var(--u)*${f.big ? 9 : 7})`;
      el.style.transform = `translate(${x}px,${y - 20 - f.t * 90}px) translate(-50%,-100%)`; el.textContent = f.text;
    });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  /** Measure frame rate over n frames (autoplay robot optional). Resolves { fps, avgMs, worstMs, physMs, cpuMs }. */
  bench(n = 300) {
    this.perfT = []; const p0 = { ms: this.pile.stats.ms, f: this.pile.stats.frames };
    return new Promise((res) => { const tick = () => { if (this.perfT.length >= n) { const a = this.perfT.slice(0, n), avg = a.reduce((s, q) => s + q, 0) / n; res({ fps: +(1000 / avg).toFixed(1), avgMs: +avg.toFixed(2), worstMs: +Math.max(...a).toFixed(1), physMs: +((this.pile.stats.ms - p0.ms) / Math.max(1, this.pile.stats.frames - p0.f)).toFixed(2), cpuRenderMs: +this.cpuMs.toFixed(2), balls: this.pile.live }); } else requestAnimationFrame(tick); }; tick(); });
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const EXTRA_CSS = `
.bs-row{display:flex;gap:calc(var(--u)*1.6);width:100%}.bs-row .bs-btn{flex:1;padding-left:calc(var(--u)*2);padding-right:calc(var(--u)*2)}
.bs-lvs6{grid-template-columns:repeat(3,1fr)!important}
.bs-lvs6 .bs-lv{min-height:calc(var(--u)*22)!important}
.bs-st{color:#ffe36a;letter-spacing:.1em;font-size:calc(var(--u)*3.2)}
.bs-tiny{font-size:calc(var(--u)*2.6);opacity:.95;font-weight:700}
.bs-nav{display:flex;align-items:center;justify-content:space-between;width:100%;gap:calc(var(--u)*2)}
.bs-dots{display:flex;gap:calc(var(--u)*1.4)}.bs-dots b{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2);border-radius:50%;background:rgba(255,255,255,.35)}.bs-dots b.on{background:#fff}
.bs-shop{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.bs-shop{grid-template-columns:repeat(5,1fr)}.bs-lvs6{grid-template-columns:repeat(6,1fr)!important}}
.bs-shopc{background:rgba(0,0,0,.28);border:calc(var(--u)*.4) solid rgba(255,255,255,.7);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.bs-shopc.can{border-color:#6ae08a;box-shadow:0 0 calc(var(--u)*2) #6ae08a}
.bs-shopc i{font-style:normal;font-size:calc(var(--u)*7)}.bs-sn{font-weight:900;font-size:calc(var(--u)*3.2)}
.bs-pips{display:flex;gap:calc(var(--u)*.5);flex-wrap:wrap;justify-content:center}.bs-pips b{width:calc(var(--u)*1.7);height:calc(var(--u)*1.7);border-radius:50%;background:rgba(255,255,255,.3)}.bs-pips b.on{background:#ffe36a}
.bs-buy{font-family:inherit;font-weight:900;border:none;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-size:calc(var(--u)*3.4);background:#7a8896;color:#fff;cursor:pointer;width:100%}
.bs-buy.go{background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a}
.bs-bubble{position:absolute;left:0;top:0;pointer-events:none;background:#fff;border:calc(var(--u)*.6) solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);border-radius:999px;color:#222;font-weight:900;font-size:calc(var(--u)*6);padding:calc(var(--u)*.4) calc(var(--u)*3.5);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*1.6) rgba(0,0,0,.4);white-space:nowrap}
.bs-bubble.gold{background:linear-gradient(180deg,#ffe36a,#e0a010)}
.bs-float{position:absolute;left:0;top:0;font-weight:900;color:#fff;text-shadow:0 0 8px #000,0 0 3px #000;pointer-events:none;display:none;white-space:nowrap}
.bs-banner{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);text-align:center;font-weight:900;font-size:calc(var(--u)*11);color:#ffe36a;-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;pointer-events:none;line-height:1.1}
.bs-banner small{display:block;font-size:calc(var(--u)*7);color:#fff}
.bs-car{position:absolute;top:50%;transform:translate(-50%,-50%);font-size:calc(var(--u)*4.5)}
.bs-coinbig{position:absolute;left:50%;top:26%;transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*11);color:#ffe36a;-webkit-text-stroke:calc(var(--u)*.8) rgba(60,30,0,.9);paint-order:stroke fill;pointer-events:none}
.bs-stars{font-size:calc(var(--u)*13);display:flex;gap:calc(var(--u)*1)}.bs-stars span{display:inline-block;animation:bspop .5s backwards}.bs-stars .on{color:#ffd23a;text-shadow:0 0 calc(var(--u)*2) #ff9a00}.bs-stars .off{color:rgba(255,255,255,.3)}
@keyframes bspop{0%{transform:scale(0)}70%{transform:scale(1.3)}100%{transform:scale(1)}}
`;
S.win = ['خلصت!', 'Level complete!'];

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.BallScoop = api;
export default api;
