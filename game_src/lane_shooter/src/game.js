// Shared 3D lane-shooter game for «فرقة الجنود» (squad, night industrial road) and «رماة الجسر» (archers, stone bridge over
// lava). Entry through squad.js / archers.js. A squad advances by itself and shoots by itself; drag to steer left and right.
// Break cages (+soldiers), shoot number gates before passing through, grab weapon crates, defeat the enemies, win coins and
// buy stronger bows/ranks. three.js, everything drawn from shapes in code, sound made live. No network, no ads, no tracking.
import * as THREE from 'three';
import { polishRenderer } from './polish.js';
import { Run, ROAD, LANES, normalizeSave, BOW_COST, RANK_COST } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const THEME = {
  squad: {
    id: 'squad', glob: 'SquadShooter', prefix: 'sq', title: ['فرقة الجنود', 'Squad Shooter'], icon: '🪖', unit: ['جندي', 'soldier'],
    sky: 0x6aa8f0, fog: 0xa8d0ff, road: 0x6a7080, ground: 0x3a9a50, panel: ['#3a6ad8', '#1a2a78'], accent: '#7affc8',
    names: ['الطريق الصناعي', 'الميناء', 'المصنع', 'الأنابيب', 'المستودع', 'الجسر', 'المحطة', 'القاعدة الأخيرة'],
    enemy: 'thug', weapon: ['🔫', '🔫', '🔫', '🔫'], bow: ['بندقية', 'Rifle'], rank: ['رتبة', 'Rank'], tune: 'squad',
  },
  archers: {
    id: 'archers', glob: 'ArcherBridge', prefix: 'ab', title: ['رماة الجسر', 'Archer Bridge'], icon: '👥', unit: ['رامي', 'archer'],
    sky: 0x5a1a10, fog: 0x7a2a14, road: 0x8a8274, ground: 0xff6a1a, panel: ['#d8742a', '#7a2a0a'], accent: '#ffd23a',
    names: ['بوابة الجسر', 'وادي النار', 'برج العظام', 'الهاوية', 'ممر الجمر', 'قلعة اللهب', 'جسر التنين', 'عرش الهيكل'],
    enemy: 'skeleton', weapon: ['🎯', '🎯', '🎯', '🎯'], bow: ['قوس', 'Bow'], rank: ['رتبة', 'Rank'], tune: 'archers',
  },
};

const S = {
  play: ['يلا نلعب', 'Play'], level: ['المرحلة', 'Level'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'], next: ['المرحلة الجاية', 'Next level'], drag: ['اسحب يمين وشمال عشان تحرّك الفرقة', 'Drag left and right to steer the squad'],
  win: ['كسبنا المرحلة!', 'Level cleared!'], lost: ['الفرقة اتهدّت.. جرّب تاني!', 'The squad fell.. try again!'], shop: ['المتجر', 'Shop'],
  coins: ['عملات', 'coins'], buy: ['اشتري', 'Buy'], max: ['أقصى مستوى', 'Max'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], squad: ['الفرقة', 'Squad'], gateHint: ['اضرب الأرقام عشان تكبر قبل ما تعدّي!', 'Shoot the numbers to grow before you pass!'],
  cageHint: ['اكسر القفص عشان تحرّر أبطال', 'Break the cage to free more heroes'], boss: ['الزعيم!', 'Boss!'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  constructor(tune) { super(); this.kind = tune; }
  play(name, a) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (name) {
      case 'shoot': this.noise(t, 0.05, 0.05, 'highpass', 2500); this.tone('square', this.kind === 'squad' ? 220 : 520, t, 0.05, 0.03); break;
      case 'hit': this.tone('triangle', 300, t, 0.05, 0.05); break;
      case 'kill': this.noise(t, 0.18, 0.1, 'bandpass', 700, 2); this.slide('triangle', 400, 120, t, 0.18, 0.08); break;
      case 'gate': (a > 0 ? [0, 4, 7] : [0, -3, -6]).forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.2, 0.12)); break;
      case 'free': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.07, 0.3, 0.12)); break;
      case 'weapon': this.slide('sawtooth', 200, 900, t, 0.3, 0.07); this.tone('triangle', hz(88), t + 0.3, 0.2, 0.1); break;
      case 'hurt': this.noise(t, 0.2, 0.12, 'lowpass', 500); this.tone('sine', 110, t, 0.25, 0.14); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [0, -3, -7].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }

  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); return; }
    this.setBed('wind');
    const sq = this.kind === 'squad';
    const notes = sq
      ? [[0, 45, 1], [1, 45, 1], [2, 48, 1], [3, 45, 1], [4, 43, 1], [5, 43, 1], [6, 47, 1], [7, 43, 1], [8, 45, 1], [9, 45, 1], [10, 52, 1], [11, 50, 1], [12, 48, 1], [13, 47, 1], [14, 45, 2], [0, 69, 2], [8, 72, 2], [12, 69, 2]]
      : [[0, 57, 2], [2, 60, 1], [3, 64, 1], [4, 62, 2], [6, 60, 1], [7, 57, 1], [8, 55, 2], [10, 59, 1], [11, 62, 1], [12, 60, 2], [14, 57, 2], [0, 40, 4], [8, 43, 4]];
    this.setTune({ tempo: sq ? 124 : 96, beats: 16, wave: sq ? 'sawtooth' : 'triangle', vol: sq ? 0.07 : 0.11, notes });
  }
}

const geo = {
  sphere: new THREE.SphereGeometry(0.5, 12, 8),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 10),
  box: new THREE.BoxGeometry(1, 1, 1),
  cone: new THREE.ConeGeometry(0.5, 1, 8),
};
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

const texCache = new Map();
function labelTex(text, bg, fg = '#fff', w = 256, hh = 128) {
  const k = `${text}|${bg}|${fg}`;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas');
  c.width = w; c.height = hh;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.beginPath(); g.roundRect(4, 4, w - 8, hh - 8, 24); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 6; g.stroke(); }
  g.fillStyle = fg; g.font = `900 ${hh * 0.62}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.strokeStyle = 'rgba(0,0,0,.7)'; g.lineWidth = 8; g.strokeText(text, w / 2, hh / 2 + 4); g.fillText(text, w / 2, hh / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(k, t);
  return t;
}
function sprite(text, bg, sx, sy, fg) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex(text, bg, fg), transparent: true, depthTest: false })); s.scale.set(sx, sy, 1); s.renderOrder = 10; return s; }

const HEM = new THREE.SphereGeometry(0.5, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2);
function limb(par, x, y, mat, len, w, tip, tipMat) {
  const p = new THREE.Group(); p.position.set(x, y, 0);
  p.add(mesh(geo.cyl, mat, 0, -len / 2, 0, w, len, w));
  p.add(mesh(geo.sphere, mat, 0, 0, 0, w * 1.15, w * 1.15, w * 1.15));
  if (tip) p.add(mesh(geo.box, tipMat, 0, -len, 0.05, tip[0], tip[1], tip[2]));
  par.add(p); return p;
}
function face(g, y, z, r, mad) {
  for (const sx of [-1, 1]) {
    g.add(mesh(geo.sphere, M(0xffffff), sx * 0.12 * r, y, z, 0.15 * r, 0.17 * r, 0.1 * r));
    g.add(mesh(geo.sphere, M(mad ? 0x330000 : 0x15151f, mad ? 0xff2a1a : 0), sx * 0.12 * r, y - 0.005, z + 0.04 * r, 0.08 * r, 0.1 * r, 0.06 * r));
    if (mad) { const br = mesh(geo.box, M(0x201020), sx * 0.13 * r, y + 0.13 * r, z + 0.03, 0.2 * r, 0.05 * r, 0.06); br.rotation.z = -sx * 0.45; g.add(br); }
  }
  g.add(mesh(geo.box, M(mad ? 0x200808 : 0xa04030), 0, y - 0.17 * r, z - 0.005, (mad ? 0.26 : 0.18) * r, 0.045 * r, 0.05));
  if (!mad) for (const sx of [-1, 1]) g.add(mesh(geo.sphere, M(0xf08a7a), sx * 0.2 * r, y - 0.1 * r, z - 0.03, 0.1 * r, 0.07 * r, 0.04));
}
function makeUnit(th) {
  const g = new THREE.Group();
  const sq = th.id === 'squad';
  const vest = M(sq ? 0x2a7af0 : 0x2a9a6a), pants = M(sq ? 0x25324f : 0x5a3a22), skin = M(0xf2c9a0), boot = M(0x1a1a22);
  g.add(mesh(geo.cyl, vest, 0, 1.15, 0, 0.62, 0.72, 0.42));
  g.add(mesh(geo.box, M(0x4a3a22), 0, 0.8, 0, 0.66, 0.1, 0.46));
  g.add(mesh(geo.box, M(0xffc82a), 0, 0.8, 0.235, 0.12, 0.1, 0.03));
  if (sq) { g.add(mesh(geo.box, M(0x3a5a30), 0, 1.2, -0.3, 0.46, 0.56, 0.26)); g.add(mesh(geo.box, M(0xffffff), 0, 1.42, 0.22, 0.5, 0.06, 0.04)); }
  else { const q = mesh(geo.cyl, M(0x6a4a2a), 0.12, 1.25, -0.3, 0.22, 0.7, 0.22); q.rotation.z = 0.25; g.add(q); for (let i = 0; i < 3; i++) g.add(mesh(geo.cone, M(0xe8e0d0), 0.2 + i * 0.03, 1.66, -0.3 + (i - 1) * 0.06, 0.07, 0.2, 0.07)); }
  g.add(mesh(geo.sphere, skin, 0, 1.78, 0, 0.5, 0.52, 0.5));
  face(g, 1.8, 0.23, 1, false);
  if (sq) {
    g.add(mesh(HEM, M(0xffc82a), 0, 1.84, 0, 0.64, 0.6, 0.64));
    g.add(mesh(geo.cyl, M(0xe0a010), 0, 1.86, 0.12, 0.62, 0.05, 0.68));
    g.add(mesh(geo.box, M(0xe0a010), 0, 2.02, 0, 0.06, 0.05, 0.64));
  } else {
    g.add(mesh(geo.cone, M(0xc83a2a), 0, 2.15, -0.02, 0.62, 0.55, 0.62));
    g.add(mesh(geo.cyl, M(0x8a2418), 0, 1.92, 0, 0.7, 0.07, 0.7));
    g.add(mesh(geo.box, M(0xfff0c0), 0.2, 2.28, -0.05, 0.05, 0.38, 0.14));
  }
  const ud = g.userData;
  ud.legL = limb(g, -0.16, 0.8, pants, 0.55, 0.2, [0.24, 0.16, 0.36], boot);
  ud.legR = limb(g, 0.16, 0.8, pants, 0.55, 0.2, [0.24, 0.16, 0.36], boot);
  ud.armL = limb(g, -0.4, 1.4, vest, 0.5, 0.17); ud.armR = limb(g, 0.4, 1.4, vest, 0.5, 0.17);
  ud.armL.rotation.x = ud.armR.rotation.x = -1.3;
  for (const a of [ud.armL, ud.armR]) a.add(mesh(geo.sphere, skin, 0, -0.5, 0, 0.2, 0.2, 0.2));
  if (sq) {
    const gun = new THREE.Group(); gun.position.set(0.18, 1.12, 0.35);
    gun.add(mesh(geo.box, M(0x2a2e36), 0, 0, 0, 0.12, 0.16, 0.7));
    gun.add(mesh(geo.cyl, M(0x555a66), 0, 0.02, 0.5, 0.06, 0.5, 0.06)).rotation.x = 0;
    gun.children[1].rotation.x = Math.PI / 2;
    gun.add(mesh(geo.box, M(0x6a4a2a), 0, -0.05, -0.38, 0.1, 0.2, 0.3));
    g.add(gun); ud.gun = gun;
  } else {
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.045, 6, 16, Math.PI), M(0x8a5a2a));
    bow.position.set(0.42, 1.2, 0.4); bow.rotation.set(0, 0, Math.PI / 2); g.add(bow);
    g.add(mesh(geo.box, M(0xeeeeee), 0.42, 1.2, 0.4, 0.015, 1.0, 0.015));
  }
  return g;
}
function animUnit(u, t, i) {
  const d = u.userData; if (!d.legL) return;
  const ph = t * 10 + i * 1.7;
  d.legL.rotation.x = Math.sin(ph) * 0.8; d.legR.rotation.x = -Math.sin(ph) * 0.8;
  if (d.gun) d.gun.rotation.x = Math.sin(ph * 0.5) * 0.02;
  d.armL.rotation.x = -1.3 + Math.sin(ph) * 0.08; d.armR.rotation.x = -1.3 - Math.sin(ph) * 0.08;
}

function makeEnemy(th, boss) {
  const g = new THREE.Group();
  const sk = th.enemy === 'skeleton';
  const body = M(sk ? 0xe8e4d4 : 0x7a2a9a), pants = M(sk ? 0xcfc8b4 : 0x3a2a4a);
  g.add(mesh(geo.cyl, body, 0, 1.0, 0, 0.85, 0.95, 0.6));
  if (sk) for (let i = 0; i < 3; i++) g.add(mesh(geo.box, M(0x40382a), 0, 0.85 + i * 0.2, 0.3, 0.7, 0.06, 0.04));
  else { g.add(mesh(geo.box, M(0x2a1a3a), 0, 0.6, 0, 0.9, 0.14, 0.64)); g.add(mesh(geo.box, M(0xd8b020), 0, 0.6, 0.33, 0.2, 0.14, 0.03)); }
  g.add(mesh(geo.sphere, M(sk ? 0xf4f0e0 : 0xb86ab8), 0, 1.75, 0, 0.7, 0.66, 0.64));
  face(g, 1.78, 0.31, 1.3, true);
  if (sk) { g.add(mesh(geo.box, M(0xe0d8c0), 0, 1.5, 0.28, 0.4, 0.14, 0.12)); }
  else for (const sx of [-1, 1]) { const h2 = mesh(geo.cone, M(0xf0e8d0), sx * 0.3, 2.2, 0, 0.16, 0.4, 0.16); h2.rotation.z = -sx * 0.35; g.add(h2); }
  const ud = g.userData;
  ud.legL = limb(g, -0.22, 0.6, pants, 0.55, 0.26, [0.3, 0.2, 0.42], M(0x2a2a30));
  ud.legR = limb(g, 0.22, 0.6, pants, 0.55, 0.26, [0.3, 0.2, 0.42], M(0x2a2a30));
  ud.armL = limb(g, -0.55, 1.35, body, 0.6, 0.22); ud.armR = limb(g, 0.55, 1.35, body, 0.6, 0.22);
  ud.armL.rotation.x = -0.5; ud.armR.rotation.x = -1.1;
  const wp = new THREE.Group(); wp.position.set(0, -0.6, 0.1); ud.armR.add(wp);
  if (sk) { wp.add(mesh(geo.box, M(0xb8c0cc), 0, 0, 0.5, 0.08, 0.14, 1.1)); wp.add(mesh(geo.box, M(0x6a4a2a), 0, 0, -0.1, 0.1, 0.2, 0.25)); }
  else { wp.add(mesh(geo.cyl, M(0x6a4a2a), 0, 0.3, 0, 0.14, 1.0, 0.14)); wp.add(mesh(geo.sphere, M(0x555a66), 0, 0.85, 0, 0.4, 0.4, 0.4)); wp.rotation.x = -0.6; }
  g.scale.setScalar(boss ? 2.6 : 1.05);
  return g;
}

class Game {
  constructor(el, config, post, th) {
    this.th = th;
    this.el = el;
    this.post = post || (() => {});
    I.setLang(config.lang);
    I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(th.id);
    this.sound.muted = !!this.save.muted;
    const p = th.prefix;
    this.p = p;
    if (!document.getElementById(`${p}-style`)) document.head.append(h('style', { id: `${p}-style` }, css(p, th.panel[0], th.panel[1], th.accent)));
    this.root = h('div', { class: `${p}-root`, dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: `${p}-layer` });
    this.mode = 'menu';
    this.clock = 0;
    this.objs = new Map();
    this.units = [];
    this.fx = [];
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
    try {
      const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' });
      await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  _three() {
    const th = this.th;
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true }), { preset: 'warm' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(th.sky);
    this.scene.fog = new THREE.Fog(th.fog, 30, 120);
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 400);
    this.scene.add(new THREE.HemisphereLight(th.id === 'squad' ? 0xffffff : 0xffd8a0, th.id === 'squad' ? 0x6a8a58 : 0x802010, th.id === 'squad' ? 1.3 : 1.6));
    const sun = new THREE.DirectionalLight(th.id === 'squad' ? 0xaab8ff : 0xffb070, 1.2);
    sun.position.set(-20, 40, -10);
    this.scene.add(sun);
    this.world = new THREE.Group();
    this.scene.add(this.world);
    this.squadG = new THREE.Group();
    this.scene.add(this.squadG);
    this.cntSprite = null;
    const bg = new THREE.InstancedMesh(new THREE.SphereGeometry(0.18, 6, 4), new THREE.MeshBasicMaterial({ color: th.id === 'squad' ? 0xffe27a : 0xfff2c0 }), 240);
    bg.frustumCulled = false;
    this.bulletMesh = bg;
    this.scene.add(bg);
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 70 : 56;
    this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.run && this.dragging) this.run.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.dragging = true; move(e); });
    this.root.addEventListener('pointermove', move);
    const up = () => { this.dragging = false; };
    this.root.addEventListener('pointerup', up);
    this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      if (!this.run || this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') { if (k === 'arrowleft' || k === 'a') this.run.targetX = -(ROAD - 0.8); if (k === 'arrowright' || k === 'd') this.run.targetX = ROAD - 0.8; } else if (['arrowleft', 'arrowright', 'a', 'd'].includes(k)) this.run.targetX = 0;
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  // ---- world --------------------------------------------------------------------------------------------------------

  _buildWorld(L) {
    for (const c of [...this.world.children]) this.world.remove(c);
    this.objs.clear();
    const th = this.th;
    const sq = th.id === 'squad';
    this.world.add(mesh(geo.box, M(th.ground, sq ? 0 : 0x401000), 0, -0.6, L / 2, 120, 0.2, L + 160));
    this.world.add(mesh(geo.box, M(th.road), 0, -0.1, L / 2, ROAD * 2 + 0.6, 0.2, L + 80));
    for (let z = 4; z < L + 60; z += 6) { for (const x of [-1.6, 1.6]) this.world.add(mesh(geo.box, M(sq ? 0xe8d84a : 0x6a6458), x, 0.02, z, 0.15, 0.02, 2.6)); }
    for (const side of [-1, 1]) {
      this.world.add(mesh(geo.box, M(sq ? 0x6a707c : 0x5a5448), side * (ROAD + 0.5), 0.45, L / 2, 0.7, 0.9, L + 80));
      for (let z = 10; z < L + 60; z += 14) {
        if (sq) {
          this.world.add(mesh(geo.cyl, M(0x555a66), side * (ROAD + 1.6), 2.5, z, 0.2, 5, 0.2));
          this.world.add(mesh(geo.sphere, M(0xfff0b0, 0xfff0b0), side * (ROAD + 1.6), 5.2, z, 0.7, 0.7, 0.7));
          const k = (z / 14) | 0;
          { const tx = side * (ROAD + 9 + (k % 3) * 2.5); this.world.add(mesh(geo.cyl, M(0x6a4a2a), tx, 1, z + 6, 0.5, 2, 0.5)); this.world.add(mesh(geo.cone, M(0x2a8a3a), tx, 3.2, z + 6, 3, 3.2, 3)); this.world.add(mesh(geo.cone, M(0x3aa04a), tx, 4.9, z + 6, 2.2, 2.6, 2.2)); }
          if (k % 3 === 0) { const c = mesh(geo.cone, M(0xff7a1a), side * (ROAD - 0.6), 0.45, z + 5, 0.5, 0.9, 0.5); this.world.add(c); this.world.add(mesh(geo.box, M(0xffffff), side * (ROAD - 0.6), 0.5, z + 5, 0.34, 0.12, 0.34)); }
          if (k % 2) for (let wy = 0; wy < 2; wy++) for (let wz = -1; wz <= 1; wz++) this.world.add(mesh(geo.box, M(0x9ad8ff, 0x3a6a9a), side * (ROAD + 3.2), 1.0 + wy * 1.2, z + 3 + wz * 1.6, 0.05, 0.7, 0.9));
          if (k % 2) this.world.add(mesh(geo.box, M(0x8a4a3a), side * (ROAD + 4.5), 3.0, z + 3, 2.9, 0.3, 5.9));
          if (k % 2) this.world.add(mesh(geo.box, M([0xc84a2a, 0x2a6ac8, 0xd8a82a][k % 3]), side * (ROAD + 4.5), 1.4, z + 3, 2.6, 2.8, 5.5));
          else this.world.add(mesh(geo.cyl, M(0x8a6a2a), side * (ROAD + 3.2), 0.8, z, 1.1, 1.6, 1.1));
        } else {
          this.world.add(mesh(geo.box, M(0x6a6458), side * (ROAD + 0.5), 1.1, z, 0.9, 0.7, 1.2));
          this.world.add(mesh(geo.cone, M(0xff8a2a, 0xff5a10), side * (ROAD + 3.5), 0.5, z + 4, 1.4, 2.2 + ((z / 14) % 3), 1.4));
        }
      }
    }
    if (!sq) { const lava = mesh(geo.box, new THREE.MeshBasicMaterial({ color: 0xff7a1a }), 0, -4, L / 2, 300, 0.2, L + 200); this.world.add(lava); }
    // finish line
    this.world.add(mesh(geo.box, M(0xffffff, 0x8888ff), 0, 0.05, L + 6, ROAD * 2, 0.06, 1.2));
  }

  _thing(t) {
    let o = this.objs.get(t.id);
    if (o) return o;
    const th = this.th;
    const g = new THREE.Group();
    if (t.kind === 'enemy') {
      g.add(makeEnemy(th, t.boss));
      g.userData.label = sprite(String(Math.ceil(t.hp)), '#8a1a1a', t.boss ? 3.4 : 1.7, t.boss ? 1.7 : 0.85);
      g.userData.label.position.y = t.boss ? 5.6 : 2.6;
      g.add(g.userData.label);
    } else if (t.kind === 'gate') {
      const pos = t.val >= 0;
      const fr = M(pos ? 0x2a5ac8 : 0xc82a3a), lamp = M(pos ? 0x9ad0ff : 0xffb0a0, pos ? 0x4a9aff : 0xff4a3a);
      const panel = mesh(geo.box, new THREE.MeshBasicMaterial({ color: pos ? 0x3a8aff : 0xff3a4a, transparent: true, opacity: 0.32, depthWrite: false }), 0, 1.95, 0, t.w, 3.3, 0.1);
      g.add(panel);
      for (const sx of [-1, 1]) {
        g.add(mesh(geo.cyl, fr, sx * t.w / 2, 2.2, 0, 0.38, 4.4, 0.38));
        g.add(mesh(geo.cyl, M(0xdddddd), sx * t.w / 2, 0.15, 0, 0.62, 0.3, 0.62));
        g.add(mesh(geo.sphere, lamp, sx * t.w / 2, 4.55, 0, 0.6, 0.6, 0.6));
      }
      g.add(mesh(geo.box, fr, 0, 4.2, 0, t.w + 0.5, 0.5, 0.5));
      for (let i = 0; i < 6; i++) { const st = mesh(geo.box, M(0xffffff), -t.w / 2 + (i + 0.5) * t.w / 6, 4.2, -0.27, t.w / 14, 0.5, 0.02); st.rotation.z = 0.5; g.add(st); }
      g.userData.panel = panel;
      g.userData.last = null;
    } else if (t.kind === 'cage') {
      g.add(mesh(geo.box, M(0x9a9aa4), 0, 1.3, 0, t.w, 0.2, 2));
      for (let i = -3; i <= 3; i++) g.add(mesh(geo.cyl, M(0x6a6a78), (i * t.w) / 7, 1.3, 1, 0.1, 2.6, 0.1));
      g.add(mesh(geo.box, M(0x9a9aa4), 0, 2.6, 0, t.w, 0.2, 2));
      for (let i = 0; i < 2; i++) { const u = makeUnit(th); u.position.set(-0.6 + i * 1.2, 0, 0); g.add(u); }
      g.userData.label = sprite(String(Math.ceil(t.hp)), '#3a3a58', 1.5, 0.75);
      g.userData.label.position.y = 3.5;
      g.add(g.userData.label);
    } else if (t.kind === 'crate') {
      g.add(mesh(geo.box, M(0x8a6a3a), 0, 0.8, 0, 1.6, 1.6, 1.6));
      g.add(mesh(geo.box, M(0xc8a05a), 0, 1.65, 0, 1.7, 0.12, 1.7));
      const s = sprite(th.weapon[0], null, 1.6, 1.6);
      s.position.y = 3.1;
      g.add(s);
      g.userData.label = sprite(String(Math.ceil(t.hp)), '#3a3a58', 1.2, 0.6);
      g.userData.label.position.y = 2.2;
      g.add(g.userData.label);
    }
    this.world.add(g);
    this.objs.set(t.id, g);
    return g;
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }

  _soundPill() {
    const pill = h('button', { class: `${this.p}-soundpill`, onclick: () => this.sound.unlock() }, I.t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3000) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms);
  }

  showMenu() {
    const p = this.p;
    const th = this.th;
    this.mode = 'menu';
    this.run = null;
    this._clear();
    this.sound.setMode(false);
    this._buildWorld(300);
    this._clearUnits();
    const ar = I.getLang() !== 'en';
    const lvs = h('div', { class: `${p}-lvs` }, th.names.map((nm, i) => {
      const lock = i + 1 > this.save.unlocked;
      const st = this.save.stars[i + 1] || 0;
      return h('button', { class: `${p}-lv${lock ? ' lock' : ''}`, 'aria-label': `${I.t('level')} ${i + 1}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } },
        h('i', {}, lock ? '🔒' : th.icon), h('span', {}, I.num(i + 1)), h('span', {}, '⭐'.repeat(st) || '·'));
    }));
    const shop = h('div', { style: 'display:flex;gap:calc(var(--u)*2);width:100%' },
      this._shopBtn('bow', th.bow, BOW_COST, 3), this._shopBtn('rank', th.rank, RANK_COST, 4));
    this.layer.append(h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` },
      h('div', { class: `${p}-logo` }, th.title[ar ? 0 : 1]),
      h('div', { class: `${p}-small` }, I.t('drag')),
      h('div', { class: `${p}-pill` }, `🪙 ${I.num(this.save.coins)}`),
      shop, lvs,
      h('button', { class: `${p}-btn dark`, onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: `${p}-hint` });
    this.layer.append(this.hintEl);
    this._soundPill();
  }

  _shopBtn(key, names, costs, max) {
    const ar = I.getLang() !== 'en';
    const lv = this.save[key];
    const cost = lv >= max ? null : costs[lv];
    return h('button', { class: `${this.p}-bld${cost !== null && this.save.coins >= cost ? ' can' : ''}`, style: 'flex:1', onclick: () => {
      if (cost === null || this.save.coins < cost) return;
      this.save.coins -= cost; this.save[key] += 1; this.post({ type: 'save', save: this.save }); this.sound.play('weapon'); this.showMenu();
    } }, h('i', {}, key === 'bow' ? this.th.weapon[0] : '🎖️'), h('span', {}, `${names[ar ? 0 : 1]} ${I.num(lv)}/${I.num(max)}`), h('small', {}, cost === null ? I.t('max') : `🪙 ${I.num(cost)}`));
  }

  start(i) {
    const p = this.p;
    this.levelIndex = i;
    this.run = new Run({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1, bow: this.save.bow, rank: this.save.rank });
    this._buildWorld(this.run.L);
    this._clearUnits();
    this.mode = 'play';
    this.paused = false;
    this._clear();
    this.sound.setMode(true);
    this.coinEl = h('span', {}, '🪙 0');
    this.cntEl = h('span', {}, '');
    const back = h('button', { class: `${p}-round`, 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: `${p}-round`, 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.barEl = h('b', { style: 'width:0%' });
    this.layer.append(h('div', { class: `${p}-top` }, back, h('div', { class: `${p}-pill` }, this.cntEl), h('div', { class: `${p}-pill` }, this.coinEl), pause),
      h('div', { class: `${p}-top`, style: 'top:calc(var(--u)*15)' }, h('span', {}, this.th.icon), h('div', { class: `${p}-bar` }, this.barEl), h('span', {}, '🏁')));
    this.hintEl = h('div', { class: `${p}-hint`, style: 'top:calc(var(--u)*24)' });
    this.layer.append(this.hintEl);
    this._soundPill();
    this.hint(I.t('drag'), 3500);
    this.said = {};
  }

  togglePause() {
    if (this.mode !== 'play') return;
    const p = this.p;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` }, h('div', { class: `${p}-title` }, I.t('paused')),
        h('button', { class: `${p}-btn`, onclick: () => this.togglePause() }, I.t('resume')),
        h('button', { class: `${p}-btn dark`, onclick: () => this.start(this.levelIndex) }, I.t('again')),
        h('button', { class: `${p}-btn dark`, onclick: () => this.showMenu() }, I.t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _end(won) {
    const p = this.p;
    const r = this.run;
    this.save.coins += r.coins;
    if (won) {
      const lv = this.levelIndex + 1;
      this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, r.stars);
      this.save.unlocked = Math.max(this.save.unlocked, Math.min(8, lv + 1));
    }
    this.post({ type: 'save', save: this.save });
    this.sound.play(won ? 'win' : 'lose');
    const last = this.levelIndex >= 7;
    this.layer.append(h('div', { class: `${p}-dim` }, h('div', { class: `${p}-card` },
      h('div', { class: `${p}-title` }, won ? I.t('win') : I.t('lost')),
      won ? h('div', { class: `${p}-stars` }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: `${p}-pill` }, `${I.t('squad')}: ${I.num(r.n)}  ·  🪙 +${I.num(r.coins)}`),
      won && !last ? h('button', { class: `${p}-btn`, onclick: () => this.start(this.levelIndex + 1) }, I.t('next')) : null,
      h('button', { class: `${p}-btn alt`, onclick: () => this.start(this.levelIndex) }, I.t('again')),
      h('button', { class: `${p}-btn dark`, onclick: () => this.showMenu() }, I.t('menu')))));
  }

  // ---- frame --------------------------------------------------------------------------------------------------------

  _clearUnits() { for (const u of this.units) this.squadG.remove(u); this.units = []; if (this.cntSprite) { this.squadG.remove(this.cntSprite); this.cntSprite = null; } }

  _frame() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.clock += dt;
    if (this.mode === 'play' && !this.paused && this.run) this._update(dt);
    this._render(dt);
  }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'volley': if (Math.random() < 0.5) this.sound.play('shoot'); break;
        case 'hit': break;
        case 'kill': this.sound.play('kill'); this.fx.push({ x: e.x, z: e.z, t: 0, life: 0.7, text: `+${e.coins}🪙` }); break;
        case 'gate': this.sound.play('gate', e.val); this.fx.push({ x: r.x, z: r.zs + 3, t: 0, life: 1, text: e.val >= 0 ? `+${e.val}` : `${e.val}` }); break;
        case 'free': this.sound.play('free'); this.fx.push({ x: e.x, z: e.z, t: 0, life: 1, text: `+${e.n}` }); break;
        case 'weapon': this.sound.play('weapon'); this.fx.push({ x: e.x, z: e.z, t: 0, life: 1, text: `${this.th.weapon[0]}↑` }); break;
        case 'hurt': this.sound.play('hurt'); this.fx.push({ x: r.x, z: r.zs + 2, t: 0, life: 1, text: `-${e.n}` }); break;
        case 'done': this._end(true); break;
        case 'lost': this._end(false); break;
        default: break;
      }
    }
    this.cntEl.textContent = `${this.th.icon} ${I.num(r.n)}`;
    this.coinEl.textContent = `🪙 ${I.num(r.coins)}`;
    this.barEl.style.width = `${Math.round(Math.min(1, r.zs / r.L) * 100)}%`;
    if (!this.said.gate && r.things.some((t) => t.kind === 'gate' && !t.dead && t.z - r.zs < 12 && t.z > r.zs)) { this.said.gate = 1; this.hint(I.t('gateHint'), 3500); }
    if (!this.said.cage && r.things.some((t) => t.kind === 'cage' && !t.dead && t.z - r.zs < 16 && t.z > r.zs)) { this.said.cage = 1; this.hint(I.t('cageHint'), 3500); }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _render(dt) {
    const r = this.run;
    const camX = r ? -r.x * 0.5 : 0;
    const zs = r ? r.zs : 0;
    if (r) {
      // things
      for (const t of r.things) {
        const o = this.objs.get(t.id);
        if (t.dead || t.z < zs - 6 || t.z - zs > 90) { if (o) o.visible = false; continue; }
        const g = this._thing(t);
        g.visible = true;
        g.position.set(-t.x, 0, t.z);
        if (t.kind === 'gate') {
          const key = `${t.val}`;
          if (g.userData.last !== key) {
            g.userData.last = key;
            if (g.userData.num) g.remove(g.userData.num);
            const s = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ map: labelTex(t.val >= 0 ? `+${t.val}` : `${t.val}`, t.val >= 0 ? '#2a6ae0' : '#e02a3a'), transparent: true, depthWrite: false }));
            s.rotation.y = Math.PI; s.position.set(0, 2.1, -0.12);
            g.add(s);
            g.userData.num = s;
          }
        } else if (g.userData.label && t.hp !== undefined) {
          const key = `${Math.ceil(t.hp)}`;
          if (g.userData.last !== key) { g.userData.last = key; g.userData.label.material.map = labelTex(key, t.kind === 'enemy' ? '#8a1a1a' : '#3a3a58'); g.userData.label.material.needsUpdate = true; }
        }
        if (t.kind === 'enemy') { g.rotation.y = Math.PI + Math.sin(this.clock * 6 + t.id) * 0.1; const eg = g.children[0]; if (eg && eg.userData.legL) { const ph = this.clock * 7 + t.id; eg.userData.legL.rotation.x = Math.sin(ph) * 0.6; eg.userData.legR.rotation.x = -Math.sin(ph) * 0.6; eg.userData.armR.rotation.x = -1.1 + Math.sin(ph * 1.3) * 0.5; eg.position.y = Math.abs(Math.sin(ph)) * 0.08; } }
        if (t.kind === 'crate') g.rotation.y = this.clock;
      }
      // squad formation
      while (this.units.length < r.n) { const u = makeUnit(this.th); this.squadG.add(u); this.units.push(u); }
      while (this.units.length > r.n) this.squadG.remove(this.units.pop());
      const cols = Math.min(6, Math.max(2, Math.ceil(Math.sqrt(r.n * 1.6))));
      this.units.forEach((u, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const rowN = Math.min(cols, r.n - row * cols);
        const px = (col - (rowN - 1) / 2) * 0.95;
        u.position.set(-r.x - px, Math.abs(Math.sin(this.clock * 9 + i)) * 0.12, zs - row * 1.0);
        u.rotation.y = 0;
        animUnit(u, this.clock, i);
      });
      if (!this.cntSprite || this.cntKey !== r.n) {
        if (this.cntSprite) this.squadG.remove(this.cntSprite);
        this.cntKey = r.n;
        this.cntSprite = sprite(String(r.n), '#1a4a8a', 1.7, 0.85);
        this.squadG.add(this.cntSprite);
      }
      this.cntSprite.position.set(-r.x, 3.0, zs);
      // bullets
      const m = new THREE.Matrix4();
      let k = 0;
      for (const b of r.bullets) { if (k >= 240) break; m.makeTranslation(-b.x, 1.1, b.z); this.bulletMesh.setMatrixAt(k++, m); }
      m.makeScale(0, 0, 0);
      for (let j = k; j < Math.max(k, this.lastBullets || 0); j++) this.bulletMesh.setMatrixAt(j, m);
      this.lastBullets = k;
      this.bulletMesh.instanceMatrix.needsUpdate = true;
      this.bulletMesh.count = Math.max(k, 1);
    }
    // camera
    const tx = camX;
    this.camera.position.x += (tx - this.camera.position.x) * Math.min(1, dt * 4);
    this.camera.position.set(this.camera.position.x, this.cw < this.ch ? 6.4 : 5.5, zs - (this.cw < this.ch ? 9 : 8.6));
    this.camera.lookAt(this.camera.position.x * 0.6, 1.3, zs + 12);
    // floating text
    this._floaters();
    this.renderer.render(this.scene, this.camera);
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    const v = new THREE.Vector3();
    this.fx.forEach((f, i) => {
      let el = this.fxEls[i];
      if (!el) { el = h('div', { style: 'position:absolute;font-weight:900;color:#fff;text-shadow:0 0 6px #000,0 0 3px #000;pointer-events:none;font-size:calc(var(--u)*5)' }); this.layer.append(el); this.fxEls[i] = el; }
      v.set(-f.x, 2.2 + f.t * 2, f.z).project(this.camera);
      el.style.display = 'block';
      el.style.left = `${(v.x * 0.5 + 0.5) * this.cw}px`;
      el.style.top = `${(-v.y * 0.5 + 0.5) * this.ch}px`;
      el.style.opacity = String(1 - f.t / f.life);
      el.style.transform = 'translate(-50%,-50%)';
      el.textContent = f.text;
    });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    this.root.remove();
  }
}

export function makeApi(key) {
  const th = THEME[key];
  const api = {
    start(el, config, post) {
      const g = new Game(el, config || {}, post, th);
      api.last = g;
      return { dispose: () => g.dispose(), pause: () => g.pause() };
    },
  };
  window[th.glob] = api;
  return api;
}
