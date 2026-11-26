// Shared 3D obstacle-course race for «سباق السماء الغريبة» (alien, floating islands, rings, doors, meteors, tubes, jetpack,
// rocket) and «سباق الغيوم» (helmeted rhino, breakaway gates, sweepers, hammers, bounce pads, golden gate). Entry: alien.js /
// rhino.js. Drag to steer, tap/JUMP to jump, JET (alien) to recover. Three rounds: qualify, then win the final. three.js, art and
// sound made in code. No network, no ads, no tracking. Nothing is lost: a hit pushes you back, a fall puts you back on the ledge.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';
import { Race, ROUNDS, HALF, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const THEME = {
  alien: { id: 'alien', glob: 'AlienSky', prefix: 'as', title: ['زومي في الفضا', 'Zoomi in Space'], icon: '👽', sky: 0x2a1060, fog: 0x4a2a90, panel: ['#7a3ad8', '#3a1a88'], accent: '#7affc8', end: ['الصاروخ', 'Rocket'], names: ['جزر الإقلاع', 'حقل النيازك', 'سباق الصاروخ', 'مدار الأقمار', 'عاصفة الشهب', 'قلب المجرة'] },
  rhino: { id: 'rhino', glob: 'RhinoSummit', prefix: 'rs', title: ['كركوز والغيوم', 'Karkoz in the Clouds'], icon: '🦏', sky: 0x7ac8ff, fog: 0xbfe8ff, panel: ['#4a9ad8', '#1a5aa8'], accent: '#ffd23a', end: ['البوابة الدهبية', 'Golden gate'], names: ['سحب الصباح', 'ممر المطارق', 'قمة البوابة الدهبية', 'جسر الغيوم', 'ريح الجبال', 'قمة العمالقة'] },
};

const S = {
  level: ['الجولة', 'Round'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'],
  again: ['تاني', 'Again'], next: ['الجولة الجاية', 'Next round'], drag: ['اسحب يمين وشمال — دوس للقفز', 'Drag to steer — tap to jump'],
  jump: ['قفز', 'JUMP'], jet: ['جيت', 'JET'], place: ['المركز', 'Place'], qualified: ['عدّيت للجولة الجاية!', 'You qualified!'],
  notq: ['قرّبت! لازم تبقى في أول ', 'So close! You need the top '], win: ['كسبت السباق! 🏆', 'You won the race! 🏆'], go: ['انطلق!', 'GO!'],
  locked: ['خلّص الجولة اللي قبلها', 'Finish the round before'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  jetHint: ['لو وقعت قريب من الحافة دوس جيت!', 'Missed a jump? Tap JET!'], win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  constructor(kind) { super(); this.kind = kind; }
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'jump': this.slide('triangle', 300, 700, t, 0.18, 0.1); break;
      case 'land': this.noise(t, 0.08, 0.08, 'lowpass', 400); break;
      case 'ring': [0, 4, 7].forEach((s, i) => this.tone('sine', hz(79 + s), t + i * 0.05, 0.2, 0.1)); break;
      case 'power': [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'hit': this.noise(t, 0.2, 0.14, 'lowpass', 500); this.tone('sine', 120, t, 0.25, 0.14); break;
      case 'jet': this.noise(t, 0.5, 0.12, 'bandpass', 900, 1, this.sfx, 300); break;
      case 'fall': this.slide('sine', 600, 100, t, 0.7, 0.1); break;
      case 'bounce': this.slide('sine', 200, 900, t, 0.25, 0.12); break;
      case 'tube': this.slide('sawtooth', 200, 1200, t, 0.4, 0.07); break;
      case 'smash': this.noise(t, 0.2, 0.15, 'bandpass', 800, 1); this.tone('square', 180, t, 0.1, 0.06); break;
      case 'beep': this.tone('square', 440, t, 0.15, 0.08); break;
      case 'go': this.tone('square', 880, t, 0.4, 0.1); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [0, -3, -7].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); return; }
    const al = this.kind === 'alien';
    const notes = al
      ? [[0, 64, 1], [1, 67, 1], [2, 71, 1], [3, 67, 1], [4, 62, 1], [5, 66, 1], [6, 69, 1], [7, 66, 1], [8, 64, 1], [9, 67, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 64, 2], [0, 40, 2], [4, 38, 2], [8, 40, 2], [12, 43, 2]]
      : [[0, 67, 1], [1, 72, 1], [2, 76, 1], [3, 72, 1], [4, 65, 1], [5, 69, 1], [6, 72, 1], [7, 69, 1], [8, 67, 1], [9, 71, 1], [10, 74, 2], [12, 72, 1], [13, 69, 1], [14, 67, 2], [0, 48, 2], [4, 53, 2], [8, 55, 2], [12, 48, 2]];
    this.setTune({ tempo: al ? 132 : 126, beats: 16, wave: 'square', vol: 0.05, notes });
  }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 14, 10), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 14), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 10), torus: new THREE.TorusGeometry(0.5, 0.08, 8, 20) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
const B = (c) => new THREE.MeshBasicMaterial({ color: c });
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

function makeRunner(kind, color) {
  const g = new THREE.Group();
  const al = kind === 'alien';
  const body = new THREE.Group();
  if (al) {
    body.add(mesh(geo.sphere, M(color), 0, 0.9, 0, 1.1, 1.2, 1.0));
    body.add(mesh(geo.sphere, M(0xffffff), -0.22, 1.1, 0.42, 0.32, 0.38, 0.2));
    body.add(mesh(geo.sphere, M(0xffffff), 0.22, 1.1, 0.42, 0.32, 0.38, 0.2));
    body.add(mesh(geo.sphere, M(0x111111), -0.22, 1.1, 0.52, 0.14, 0.18, 0.1));
    body.add(mesh(geo.sphere, M(0x111111), 0.22, 1.1, 0.52, 0.14, 0.18, 0.1));
    for (const s of [-1, 1]) { body.add(mesh(geo.cyl, M(color), s * 0.25, 1.75, 0, 0.06, 0.5, 0.06)); body.add(mesh(geo.sphere, M(0xffe04a, 0xffe04a), s * 0.25, 2.05, 0, 0.16, 0.16, 0.16)); }
    for (const sx of [-0.2, 0.2]) { body.add(mesh(geo.cyl, M(0xd6dbe8), sx, 0.95, -0.55, 0.26, 0.8, 0.26)); body.add(mesh(geo.sphere, M(0xff5a8a, 0xff2a5a), sx, 1.38, -0.55, 0.26, 0.2, 0.26)); body.add(mesh(geo.cyl, M(0x4a4f66), sx, 0.5, -0.55, 0.22, 0.14, 0.22)); }
    body.add(mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0xbff4ff, transparent: true, opacity: 0.16, depthWrite: false }), 0, 1.05, 0.05, 1.45, 1.55, 1.3));
    const limbs = [];
    for (const [sx, sy, ph] of [[-1, 0.72, 0], [1, 0.72, Math.PI]]) { const pv = new THREE.Group(); pv.position.set(sx * 0.62, sy + 0.2, 0); pv.add(mesh(geo.cyl, M(color), 0, -0.25, 0, 0.18, 0.55, 0.18)); pv.add(mesh(geo.sphere, M(0xffffff), 0, -0.55, 0, 0.26, 0.26, 0.26)); pv.userData.ph = ph; pv.userData.arm = true; body.add(pv); limbs.push(pv); }
    for (const [sx, ph] of [[-1, Math.PI], [1, 0]]) { const pv = new THREE.Group(); pv.position.set(sx * 0.3, 0.45, 0); pv.add(mesh(geo.cyl, M(color), 0, -0.2, 0, 0.2, 0.45, 0.2)); pv.add(mesh(geo.sphere, M(0x3a3f66), 0, -0.45, 0.1, 0.32, 0.2, 0.46)); pv.userData.ph = ph; body.add(pv); limbs.push(pv); }
    g.userData.limbs = limbs;
    const flame = mesh(geo.cone, B(0xffa02a), 0, 0.35, -0.55, 0.3, 0.7, 0.3);
    flame.rotation.x = Math.PI;
    flame.visible = false;
    g.userData.flame = flame;
    body.add(flame);
  } else {
    body.add(mesh(geo.sphere, M(color), 0, 0.85, 0, 1.0, 0.95, 1.5));
    body.add(mesh(geo.sphere, M(color), 0, 1.0, 0.75, 0.75, 0.7, 0.7));
    body.add(mesh(geo.cone, M(0xf4efe0), 0, 1.3, 1.15, 0.2, 0.5, 0.2));
    body.children[body.children.length - 1].rotation.x = Math.PI / 2.4;
    body.add(mesh(geo.sphere, M(0xe83a2a), 0, 1.35, 0.75, 0.82, 0.5, 0.78)); // helmet
    body.add(mesh(geo.sphere, M(0x111111), -0.28, 1.1, 1.05, 0.13, 0.13, 0.1));
    body.add(mesh(geo.sphere, M(0x111111), 0.28, 1.1, 1.05, 0.13, 0.13, 0.1));
    const limbs = [];
    for (const [sx, sz, ph] of [[-0.3, 0.45, 0], [0.3, 0.45, Math.PI], [-0.3, -0.45, Math.PI], [0.3, -0.45, 0]]) { const pv = new THREE.Group(); pv.position.set(sx, 0.5, sz); pv.add(mesh(geo.cyl, M(0x6a6a76), 0, -0.25, 0, 0.3, 0.5, 0.3)); pv.add(mesh(geo.sphere, M(0x3a3a46), 0, -0.5, 0.06, 0.34, 0.16, 0.4)); pv.userData.ph = ph; body.add(pv); limbs.push(pv); }
    for (const sx of [-1, 1]) { const ear = mesh(geo.cone, M(color), sx * 0.38, 1.62, 0.72, 0.18, 0.3, 0.12); body.add(ear); }
    const tail = new THREE.Group(); tail.position.set(0, 1.0, -0.78); tail.add(mesh(geo.cyl, M(color), 0, -0.2, -0.1, 0.1, 0.5, 0.1)); tail.add(mesh(geo.sphere, M(0xf4efe0), 0, -0.48, -0.14, 0.2, 0.2, 0.2)); tail.userData.tail = true; body.add(tail);
    g.userData.limbs = limbs; g.userData.tail = tail;
  }
  g.add(body);
  g.userData.body = body;
  g.add(new THREE.Mesh(new THREE.CircleGeometry(0.7, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3 })).rotateX(-Math.PI / 2));
  g.children[g.children.length - 1].position.y = 0.03;
  g.userData.shadow = g.children[g.children.length - 1];
  return g;
}

class Game {
  constructor(el, config, post, th) {
    this.th = th; this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(th.id);
    this.sound.muted = !!this.save.muted;
    const p = th.prefix;
    this.p = p;
    if (!document.getElementById(`${p}-style`)) document.head.append(h('style', { id: `${p}-style` }, css(p, th.panel[0], th.panel[1], th.accent) + `.${p}-big{position:absolute;bottom:calc(var(--u)*5);width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;border:calc(var(--u)*.8) solid #fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}.${p}-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*30);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*1) rgba(0,0,0,.6);paint-order:stroke fill;pointer-events:none}`));
    this.root = h('div', { class: `${p}-root`, dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: `${p}-layer` });
    this.mode = 'menu'; this.clock = 0; this.fx = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() {
    try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ }
  }

  _three() {
    const th = this.th;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true }), { preset: 'fresh' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(th.sky);
    this.scene.fog = new THREE.Fog(th.fog, 40, 150);
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.3, 500);
    this.scene.add(new THREE.HemisphereLight(0xffffff, th.id === 'alien' ? 0x4a2a8a : 0x7aa8d8, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.1);
    sun.position.set(-10, 30, -20);
    this.scene.add(sun);
    this.world = new THREE.Group();
    this.scene.add(this.world);
    this.actors = new THREE.Group();
    this.scene.add(this.actors);
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 74 : 58;
    this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.race && this.drag) this.race.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = { t: performance.now(), x: e.clientX, y: e.clientY }; move(e); });
    this.root.addEventListener('pointermove', move);
    const up = (e) => { if (this.drag && performance.now() - this.drag.t < 220 && Math.hypot(e.clientX - this.drag.x, e.clientY - this.drag.y) < 14 && this.race) this._jump(); this.drag = null; };
    this.root.addEventListener('pointerup', up);
    this.root.addEventListener('pointercancel', () => { this.drag = null; });
    this._onKey = (e) => {
      if (!this.race || this.mode !== 'play' || e.type !== 'keydown') return;
      const k = e.key.toLowerCase();
      if (k === 'arrowleft' || k === 'a') this.race.targetX = -(HALF - 0.5);
      if (k === 'arrowright' || k === 'd') this.race.targetX = HALF - 0.5;
      if (k === ' ' || k === 'arrowup' || k === 'w') this._jump();
      if (k === 'j' || k === 'shift') this.race.jetpack() && this.sound.play('jet');
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _jump() { if (this.race) this.race.jump(); }

  // ---- world --------------------------------------------------------------------------------------------------------

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

  _buildWorld(race) {
    this._setPano(race.theme === 'rhino' ? (race.round % 3) + 1 : 1);
    for (const c of [...this.world.children]) this.world.remove(c);
    for (const c of [...this.actors.children]) this.actors.remove(c);
    this.objs = new Map();
    const th = this.th;
    const al = th.id === 'alien';
    const L = race.L;
    // floor slabs between the gaps
    const gaps = race.els.filter((e) => e.kind === 'gap').sort((a, b) => a.z - b.z);
    let z0 = -20;
    const cols = al ? [0x8a5ae8, 0x5ab8e8, 0xe85ab8] : [0xffffff, 0xf4f8ff, 0xe8f0ff];
    let ci = 0;
    const slab = (a, b) => {
      const len = b - a;
      this.world.add(mesh(geo.box, M(cols[ci++ % cols.length]), 0, -0.6, (a + b) / 2, HALF * 2 + 1.2, 1.2, len));
      for (let z = a + 3; z < b; z += 6) this.world.add(mesh(geo.box, M(al ? 0xffffff : 0xd8e8ff), 0, 0.02, z, 0.15, 0.02, 2.4));
      this.world.add(mesh(geo.box, M(al ? 0x3a2a78 : 0xb8d0f0), -HALF - 0.9, 0.1, (a + b) / 2, 0.4, 0.5, len));
      this.world.add(mesh(geo.box, M(al ? 0x3a2a78 : 0xb8d0f0), HALF + 0.9, 0.1, (a + b) / 2, 0.4, 0.5, len));
    };
    for (const g of gaps) { slab(z0, g.z); z0 = g.z + g.len; }
    slab(z0, L + 40);
    // far scenery
    const n = 40;
    for (let i = 0; i < n; i++) {
      const z = (i / n) * (L + 120) - 30;
      const side = i % 2 ? 1 : -1;
      const x = side * (14 + ((i * 7) % 12));
      if (al) {
        const planet = mesh(geo.sphere, M([0xe85a5a, 0x5ae8a8, 0xe8c85a, 0x5a8ae8][i % 4]), x, -2 + ((i * 5) % 9), z, 6 + (i % 4) * 2, 6 + (i % 4) * 2, 6 + (i % 4) * 2);
        this.world.add(planet);
      } else {
        this.world.add(mesh(geo.sphere, M(0xffffff), x, -6 + ((i * 3) % 5), z, 14 + (i % 3) * 4, 5, 10));
      }
    }
    // end: rocket or golden gate
    if (al) {
      const rk = new THREE.Group();
      rk.add(mesh(geo.cyl, M(0xf4f4f8), 0, 5, 0, 3, 9, 3));
      rk.add(mesh(geo.cone, M(0xe83a3a), 0, 11.5, 0, 3, 4, 3));
      for (const s of [-1, 1]) rk.add(mesh(geo.box, M(0xe83a3a), s * 2.2, 1.6, 0, 0.5, 3.2, 2));
      rk.add(mesh(geo.sphere, M(0x5ab8ff), 0, 7, 1.5, 1.2, 1.2, 0.4));
      rk.position.set(0, 0, L + 10);
      this.world.add(rk);
    } else {
      const gg = new THREE.Group();
      gg.add(mesh(geo.box, M(0xffd23a, 0x6a4a00), -HALF - 0.6, 3, 0, 1, 6, 1));
      gg.add(mesh(geo.box, M(0xffd23a, 0x6a4a00), HALF + 0.6, 3, 0, 1, 6, 1));
      gg.add(mesh(geo.box, M(0xffd23a, 0x6a4a00), 0, 6.4, 0, HALF * 2 + 2.2, 1.2, 1));
      gg.add(mesh(geo.box, new THREE.MeshBasicMaterial({ color: 0xfff0a0, transparent: true, opacity: 0.55 }), 0, 3, 0, HALF * 2, 5.6, 0.3));
      gg.position.set(0, 0, L + 2);
      this.world.add(gg);
      this.goldGate = gg;
    }
    // elements
    for (const e of race.els) this._make(e, al);
    // runners
    this.rivalMeshes = race.rivals.map((rv, i) => { const m = makeRunner(th.id, [0xff7a3a, 0x3ac8e8, 0xe8e83a, 0xe83ae8, 0x7ae83a][i % 5]); this.actors.add(m); return m; });
    this.me = makeRunner(th.id, al ? 0x5af0a0 : 0x9aa0b0);
    this.actors.add(this.me);
  }

  _make(e, al) {
    const g = new THREE.Group();
    if (e.kind === 'door') {
      g.userData.l = mesh(geo.box, M(0xe8564a, 0x401010), -HALF / 2, 1.8, 0, HALF, 3.6, 0.5);
      g.userData.r = mesh(geo.box, M(0xe8564a, 0x401010), HALF / 2, 1.8, 0, HALF, 3.6, 0.5);
      g.add(g.userData.l, g.userData.r);
    } else if (e.kind === 'gate') {
      g.add(mesh(geo.box, M(0xff4a3a), -HALF, 1.5, 0, 0.6, 3, 0.6), mesh(geo.box, M(0xff4a3a), HALF, 1.5, 0, 0.6, 3, 0.6));
      g.userData.panel = mesh(geo.box, M(0xffd23a, 0x604000), 0, 1.3, 0, HALF * 2, 2.6, 0.35);
      g.add(g.userData.panel);
    } else if (e.kind === 'meteor') {
      g.userData.shadow = mesh(geo.cyl, new THREE.MeshBasicMaterial({ color: 0xff3a3a, transparent: true, opacity: 0.5 }), e.x, 0.05, 0, e.rad * 2, 0.02, e.rad * 2);
      g.userData.rock = mesh(geo.sphere, M(0x8a6a5a, 0x4a1a00), e.x, 20, 0, 2.2, 2.2, 2.2);
      g.add(g.userData.shadow, g.userData.rock);
    } else if (e.kind === 'sweeper') {
      g.add(mesh(geo.cyl, M(0x6a6a7a), 0, 0.8, 0, 0.8, 1.6, 0.8));
      g.userData.bar = new THREE.Group();
      g.userData.bar.add(mesh(geo.box, M(0xff5a3a), 0, 0.6, 0, e.radius * 2, 0.5, 0.5));
      g.userData.bar.position.y = 0.2;
      g.add(g.userData.bar);
    } else if (e.kind === 'hammer') {
      g.add(mesh(geo.box, M(0x6a6a7a), e.x - 3.4, 3.2, 0, 0.5, 6.4, 0.5), mesh(geo.box, M(0x6a6a7a), e.x + 3.4, 3.2, 0, 0.5, 6.4, 0.5), mesh(geo.box, M(0x6a6a7a), e.x, 6.2, 0, 7.2, 0.5, 0.5));
      g.userData.arm = new THREE.Group();
      g.userData.arm.add(mesh(geo.box, M(0x8a5a2a), 0, -1.6, 0, 0.25, 3.2, 0.25), mesh(geo.box, M(0xc8c8d4), 0, -3.4, 0, 1.6, 1.2, 1.2));
      g.userData.arm.position.set(e.x, 6.2, 0);
      g.add(g.userData.arm);
    } else if (e.kind === 'ring') {
      const t = mesh(geo.torus, B(0x7affc8), e.x, 2.2, 0, e.rad * 2.6, e.rad * 2.6, e.rad * 2.6);
      g.add(t);
    } else if (e.kind === 'boost') {
      g.add(mesh(geo.sphere, B(0xffe04a), e.x, 1.3, 0, 0.9, 0.9, 0.9), mesh(geo.torus, B(0xffffff), e.x, 1.3, 0, 1.5, 1.5, 1.5));
    } else if (e.kind === 'pad') {
      g.add(mesh(geo.cyl, M(0x3ac8ff, 0x1a88c0), e.x, 0.1, 0, e.rad * 2.2, 0.2, e.rad * 2.2), mesh(geo.cyl, M(0xffffff), e.x, 0.22, 0, e.rad * 1.2, 0.1, e.rad * 1.2));
    } else if (e.kind === 'tube') {
      g.add(mesh(geo.cyl, M(0x3ae85a), e.x, 0.9, 0, e.rad * 2.1, 1.8, e.rad * 2.1), mesh(geo.cyl, M(0x0a2a10), e.x, 1.82, 0, e.rad * 1.5, 0.05, e.rad * 1.5));
      g.add(mesh(geo.torus, M(0x2ac84a), e.x, 1.8, 0, e.rad * 2.1, e.rad * 2.1, e.rad * 2.1).rotateX(Math.PI / 2));
    } else if (e.kind === 'gap') {
      return;
    }
    g.position.z = e.z;
    this.world.add(g);
    this.objs.set(e.id, g);
    void al;
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }

  _soundPill() {
    const pill = h('button', { class: `${this.p}-soundpill`, onclick: () => this.sound.unlock() }, I.t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  showMenu() {
    const p = this.p; const th = this.th; const ar = I.getLang() !== 'en';
    this.mode = 'menu'; this.race = null;
    this._clear(); this.sound.setMode(false);
    const demo = new Race({ theme: th.id, round: 0, seed: 1 });
    this._buildWorld(demo);
    this.demo = demo;
    const cards = h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%' }, ROUNDS.map((r, i) => {
      const lock = i + 1 > this.save.unlocked;
      const st = this.save.stars[i + 1] || 0;
      return h('button', { class: `${p}-btn${lock ? ' dark' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } },
        `${lock ? '🔒' : th.icon} ${I.t('level')} ${I.num(i + 1)} · ${th.names[i]} ${'⭐'.repeat(st)}`);
    }));
    this.layer.append(h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` },
      h('div', { class: `${p}-logo` }, th.icon + ' ', th.title[ar ? 0 : 1]),
      h('div', { class: `${p}-small` }, I.t('drag')),
      cards,
      h('button', { class: `${p}-btn dark`, onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: `${p}-hint` });
    this.layer.append(this.hintEl);
    this._soundPill();
  }

  start(i) {
    const p = this.p; const th = this.th;
    this.round = i;
    this.race = new Race({ theme: th.id, round: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this._buildWorld(this.race);
    this.mode = 'play'; this.paused = false; this.fx = [];
    this._clear();
    this.sound.setMode(true);
    this.placeEl = h('span', {}, '');
    const back = h('button', { class: `${p}-round`, 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: `${p}-round`, 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.barEl = h('b', { style: 'width:0%' });
    this.layer.append(h('div', { class: `${p}-top` }, back, h('div', { class: `${p}-pill` }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: `${p}-pill` }, this.placeEl), pause),
      h('div', { class: `${p}-top`, style: 'top:calc(var(--u)*15)' }, h('span', {}, th.icon), h('div', { class: `${p}-bar` }, this.barEl), h('span', {}, th.id === 'alien' ? '🚀' : '🏁')));
    this.countEl = h('div', { class: `${p}-count` }, '3');
    this.hintEl = h('div', { class: `${p}-hint`, style: 'top:calc(var(--u)*24)' });
    const jumpBtn = h('button', { class: `${p}-big`, style: 'right:calc(var(--u)*4)', 'aria-label': I.t('jump'), onclick: () => this._jump() }, h('span', { style: 'font-size:calc(var(--u)*8)' }, '⤴'), I.t('jump'));
    this.layer.append(this.countEl, this.hintEl, jumpBtn);
    if (th.id === 'alien') {
      this.jetEl = h('span', {}, '3');
      this.layer.append(h('button', { class: `${p}-big`, style: 'left:calc(var(--u)*4);background:linear-gradient(180deg,#ffb84a,#f08a1a)', 'aria-label': I.t('jet'), onclick: () => { if (this.race && this.race.jetpack()) this.sound.play('jet'); } }, h('span', { style: 'font-size:calc(var(--u)*7)' }, '🚀'), h('span', {}, I.t('jet'), ' ', this.jetEl)));
    }
    this._soundPill();
    this.lastCount = 4;
  }

  togglePause() {
    if (this.mode !== 'play') return;
    const p = this.p;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` }, h('div', { class: `${p}-title` }, I.t('paused')),
        h('button', { class: `${p}-btn`, onclick: () => this.togglePause() }, I.t('resume')),
        h('button', { class: `${p}-btn dark`, onclick: () => this.start(this.round) }, I.t('again')),
        h('button', { class: `${p}-btn dark`, onclick: () => this.showMenu() }, I.t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _finish() {
    const p = this.p; const r = this.race; const ar = I.getLang() !== 'en';
    const q = r.qualified;
    const final = this.round === 2;
    if (q) {
      const st = r.p.place === 1 ? 3 : r.p.place <= 2 ? 2 : 1;
      this.save.stars[this.round + 1] = Math.max(this.save.stars[this.round + 1] || 0, st);
      this.save.unlocked = Math.max(this.save.unlocked, Math.min(3, this.round + 2));
      if (final && r.won) this.save.wins += 1;
    }
    this.post({ type: 'save', save: this.save });
    this.sound.play(q ? 'win' : 'lose');
    this.layer.append(h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` },
      h('div', { class: `${p}-title` }, final && r.won ? I.t('win') : q ? I.t('qualified') : `${I.t('notq')}${I.num(r.cfg.qualify)}`),
      h('div', { class: `${p}-pill` }, `${I.t('place')}: ${I.num(r.p.place)}/${I.num(r.cfg.rivals + 1)}`),
      q && !final ? h('button', { class: `${p}-btn`, onclick: () => this.start(this.round + 1) }, I.t('next')) : null,
      h('button', { class: `${p}-btn alt`, onclick: () => this.start(this.round) }, I.t('again')),
      h('button', { class: `${p}-btn dark`, onclick: () => this.showMenu() }, I.t('menu')))));
    void ar;
  }

  // ---- frame --------------------------------------------------------------------------------------------------------

  _frame() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.clock += dt;
    if (this.mode === 'play' && !this.paused && this.race) this._update(dt);
    this._render(dt);
    this._followPano();
  }

  _update(dt) {
    const r = this.race;
    const was = r.state;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'go': this.sound.play('go'); this.countEl.textContent = I.t('go'); setTimeout(() => this.countEl && (this.countEl.style.display = 'none'), 700); if (this.th.id === 'alien') this.hint(I.t('jetHint'), 3500); else this.hint(I.t('drag'), 3000); break;
        case 'jump': this.sound.play('jump'); break;
        case 'land': this.sound.play('land'); break;
        case 'ring': this.sound.play('ring'); this.fx.push({ t: 0, life: 0.8, text: '⚡' }); break;
        case 'power': this.sound.play('power'); this.fx.push({ t: 0, life: 0.8, text: '⭐' }); break;
        case 'hit': this.sound.play('hit'); this.fx.push({ t: 0, life: 0.9, text: '💥' }); break;
        case 'jet': this.sound.play('jet'); break;
        case 'fall': this.sound.play('fall'); break;
        case 'bounce': this.sound.play('bounce'); break;
        case 'tube': this.sound.play('tube'); this.fx.push({ t: 0, life: 0.8, text: '🌀' }); break;
        case 'smash': this.sound.play('smash'); { const o = this.objs.get(r.els.find((x) => x.kind === 'gate' && x.hit && !x.gone)?.id); const el = r.els.find((x) => x.kind === 'gate' && x.hit && !x.gone); if (el) el.gone = true; if (o && o.userData.panel) o.userData.panel.visible = false; } break;
        case 'finish': this._finish(); break;
        default: break;
      }
    }
    if (was === 'count') {
      const c = Math.ceil(r.go);
      if (c !== this.lastCount && c > 0) { this.lastCount = c; this.countEl.textContent = I.num(c); this.sound.play('beep'); }
    }
    this.placeEl.textContent = `${I.t('place')} ${I.num(r.place)}/${I.num(r.cfg.rivals + 1)}`;
    this.barEl.style.width = `${Math.round(Math.max(0, Math.min(1, r.p.z / r.L)) * 100)}%`;
    if (this.jetEl) this.jetEl.textContent = I.num(r.p.jets);
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _render(dt) {
    const r = this.race || this.demo;
    const play = !!this.race;
    const zr = play ? r.p.z : 0;
    if (play) {
      // elements
      for (const e of r.els) {
        const o = this.objs.get(e.id);
        if (!o) continue;
        o.visible = e.z > zr - 12 && e.z < zr + 110;
        if (!o.visible) continue;
        o.position.x = 0;
        if (e.kind === 'door') { const k = e.open ? 0.12 : 1; o.userData.l.position.x += ((-HALF / 2 - (1 - k) * HALF * 0.52) - o.userData.l.position.x) * Math.min(1, dt * 8); o.userData.r.position.x += ((HALF / 2 + (1 - k) * HALF * 0.52) - o.userData.r.position.x) * Math.min(1, dt * 8); }
        if (e.kind === 'meteor' && e.fall !== undefined) { const k = e.fall; o.userData.rock.position.set(-e.x, 1.2 + (1 - Math.min(1, k / 0.85)) * 22, 0); o.userData.shadow.position.x = -e.x; o.userData.shadow.scale.set(e.rad * 2 * (0.3 + k), 0.02, e.rad * 2 * (0.3 + k)); }
        else if (e.kind === 'meteor') { o.userData.rock.position.x = -e.x; o.userData.shadow.position.x = -e.x; }
        if (e.kind === 'sweeper') o.userData.bar.rotation.y = -(e.phase + r.time * e.speed);
        if (e.kind === 'hammer') { o.userData.arm.position.x = -(e.hx ?? e.x); o.userData.arm.rotation.z = Math.cos(r.time * e.speed + e.phase) * 0.6; }
        if (e.kind === 'ring' || e.kind === 'boost' || e.kind === 'pad' || e.kind === 'tube') { for (const c of o.children) c.position.x = -e.x; if (e.hit && e.kind !== 'pad') o.visible = false; if (e.kind === 'ring') o.children[0].rotation.y = this.clock * 2; }
        if (e.kind === 'door' || e.kind === 'gate') o.children.forEach((c) => { void c; });
      }
      const p = r.p;
      this._pose(this.me, -p.x, p.y, p.z, p.grounded, true, p);
      r.rivals.forEach((rv, i) => this._pose(this.rivalMeshes[i], -rv.x, 0, rv.z, true, false, null));
    }
    // camera
    const px = play ? -r.p.x : 0;
    const pz = play ? Math.min(r.p.z, r.L + 4) : -4 + Math.sin(this.clock * 0.4) * 2;
    this.camera.position.x += (px * 0.7 - this.camera.position.x) * Math.min(1, dt * 5);
    this.camera.position.set(this.camera.position.x, this.cw < this.ch ? 5.2 : 3.6, pz - (this.cw < this.ch ? 7.5 : 5.6));
    this.camera.lookAt(this.camera.position.x * 0.5, 1.2, pz + 10);
    if (this.goldGate && play && r.p.finished) this.goldGate.rotation.z = Math.sin(this.clock * 10) * 0.05;
    this.renderer.render(this.scene, this.camera);
  }

  _pose(m, x, y, z, grounded, me, p) {
    if (!m) return;
    m.position.set(x, Math.max(y, -6), z);
    const b = m.userData.body;
    const run = Math.abs(Math.sin(this.clock * 12 + (me ? 0 : x))) * (grounded ? 0.12 : 0);
    b.position.y = run;
    const lm = m.userData.limbs;
    if (lm) { const sw = grounded ? 0.9 : 0.25; const t = this.clock * 13 + (me ? 0 : x * 3); for (const l of lm) { l.rotation.x = Math.sin(t + l.userData.ph) * sw * (l.userData.arm ? 1.1 : 1); if (!grounded) l.rotation.z = (l.position.x > 0 ? -1 : 1) * 0.5; else l.rotation.z = 0; } if (m.userData.tail) m.userData.tail.rotation.z = Math.sin(this.clock * 9) * 0.5; }
    b.rotation.x = grounded ? 0 : -0.25;
    if (me && p) {
      m.visible = p.fall <= 0;
      if (m.userData.flame) m.userData.flame.visible = p.jet > 0;
      m.userData.shadow.visible = p.y > -1;
      m.userData.shadow.position.y = 0.03 - Math.max(0, p.y);
      m.rotation.y = 0;
    }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    this.root.remove();
  }
}

export function makeApi(key) {
  const th = THEME[key];
  const api = { start(el, config, post) { const g = new Game(el, config || {}, post, th); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
  window[th.glob] = api;
  return api;
}
