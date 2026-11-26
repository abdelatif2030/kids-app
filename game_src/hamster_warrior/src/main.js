// «الهامستر المحارب» — Hamster Warrior. Entry: window.HamsterWarrior.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Rebuilt (2026-11-19) to match the owner's original video: a hamster warrior with a nut-shell helmet runs along a dirt forest path seen
// from behind (golden ring under his feet, a yellow power pill above him), three lanes, sprout creatures with green sword / red skull
// power pills, blue +N and red -N cards on stone pedestals, coin arcs, three hearts, a bottom power pill with three stars, a wooden
// arch with flags at the end and a big boss at the end of each chapter. three.js, everything drawn in code (pictures optional).
import * as THREE from 'three';
import { Run, LEVELS, UPG, HALF, LANES, upgradeCost, normalizeSave, isBossLevel } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n, rng } from '../../cozy_kit/ui.js';
import { loadArt, loadSprites } from '../../cozy_kit/art.js';
import { polishRenderer } from './polish.js';

const S = {
  title: ['هامي الشجاع', 'Hammy the Brave'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'], resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next level'], level: ['المرحلة', 'LEVEL'], how: ['اسحب لتحريك البطل', 'Drag to steer'],
  won: ['خلصت المرحلة! 🏆', 'Level complete! 🏆'], lost: ['البطل محتاج راحة 😴', 'The hero needs a rest 😴'], lost2: ['خد قلوبك تاني وجرّب من جديد', 'Take your hearts back and try again'],
  locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'], stronger: ['أقوى منك! لف حواليه', 'STRONGER. GO AROUND'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], power: ['القوة', 'Power'], coins: ['عملات', 'coins'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'card': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.05, 0.2, 0.12)); break;
      case 'bad': this.slide('sawtooth', 400, 120, t, 0.3, 0.08); break;
      case 'absorb': this.slide('triangle', 300, 900, t, 0.2, 0.1); this.noise(t, 0.15, 0.08, 'bandpass', 1500, 2); break;
      case 'hurt': this.noise(t, 0.25, 0.12, 'lowpass', 500); this.tone('sine', 110, t, 0.25, 0.12); break;
      case 'coin': this.tone('square', hz(88), t, 0.06, 0.05); this.tone('square', hz(95), t + 0.06, 0.1, 0.05); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [7, 4, 0].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.16, 0.4, 0.1)); break;
      case 'warn': this.tone('square', 440, t, 0.08, 0.05); this.tone('square', 440, t + 0.14, 0.08, 0.05); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('wind'); this.setTune({ tempo: 116, beats: 16, wave: 'triangle', vol: 0.07, notes: [[0, 67, 1], [1, 71, 1], [2, 74, 2], [4, 72, 1], [5, 69, 1], [6, 67, 2], [8, 65, 1], [9, 69, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 62, 2], [0, 43, 2], [4, 48, 2], [8, 41, 2], [12, 43, 2]] }); }
}

// ---------------------------------------------------------------------------------------------------------- drawing helpers
const geo = { sphere: new THREE.SphereGeometry(0.5, 16, 12), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 14), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 10), torus: new THREE.TorusGeometry(0.5, 0.08, 8, 20), dode: new THREE.DodecahedronGeometry(0.5) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const canvasTex = (w, hh, draw, repeat) => { const c = document.createElement('canvas'); c.width = w; c.height = hh; draw(c.getContext('2d'), w, hh); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; } t.anisotropy = 4; return t; };
const texCache = new Map();
const cached = (k, mk) => { if (!texCache.has(k)) texCache.set(k, mk()); return texCache.get(k); };
const fmt = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1)}K` : String(Math.round(n)));

function roundRect(g, x, y, w, hh, r) { g.beginPath(); g.roundRect(x, y, w, hh, r); }
function drawPaw(g, x, y, s, col) { g.fillStyle = col; g.beginPath(); g.ellipse(x, y + s * 0.18, s * 0.42, s * 0.34, 0, 0, 7); g.fill(); for (const [dx, dy] of [[-0.5, -0.2], [-0.18, -0.5], [0.18, -0.5], [0.5, -0.2]]) { g.beginPath(); g.ellipse(x + dx * s, y + dy * s, s * 0.17, s * 0.2, 0, 0, 7); g.fill(); } }
function drawSword(g, x, y, s, col) { g.save(); g.translate(x, y); g.rotate(-Math.PI / 4); g.fillStyle = col; roundRect(g, -s * 0.09, -s * 0.55, s * 0.18, s * 0.8, s * 0.06); g.fill(); g.fillRect(-s * 0.3, s * 0.2, s * 0.6, s * 0.1); g.fillRect(-s * 0.06, s * 0.3, s * 0.12, s * 0.22); g.restore(); }
function drawSkull(g, x, y, s, col, eye) { g.fillStyle = col; g.beginPath(); g.arc(x, y - s * 0.08, s * 0.4, 0, 7); g.fill(); roundRect(g, x - s * 0.24, y + s * 0.1, s * 0.48, s * 0.32, s * 0.08); g.fill(); g.fillStyle = eye; g.beginPath(); g.arc(x - s * 0.16, y - s * 0.1, s * 0.11, 0, 7); g.arc(x + s * 0.16, y - s * 0.1, s * 0.11, 0, 7); g.fill(); }
function pillTex(kind, text) {
  return cached(`pill|${kind}|${text}`, () => canvasTex(256, 112, (g) => {
    const pal = { power: ['#ffd23a', '#f0a010', '#7a4a10'], weak: ['#7be04a', '#3ea82a', '#164a10'], strong: ['#ff5a5a', '#c82a3a', '#5a0a14'], boss: ['#b050e0', '#7a1a9a', '#2a0a40'] }[kind];
    const grad = g.createLinearGradient(0, 8, 0, 104); grad.addColorStop(0, pal[0]); grad.addColorStop(1, pal[1]);
    g.fillStyle = grad; roundRect(g, 6, 8, 244, 96, 48); g.fill(); g.lineWidth = 8; g.strokeStyle = pal[2]; g.stroke();
    if (kind === 'power') drawPaw(g, 58, 56, 40, '#fff'); else if (kind === 'weak') drawSword(g, 58, 58, 52, '#fff'); else drawSkull(g, 58, 58, 52, '#fff', pal[2]);
    g.fillStyle = '#fff'; g.font = '900 62px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineWidth = 9; g.strokeStyle = pal[2]; g.strokeText(text, 158, 60); g.fillText(text, 158, 60);
  }));
}
function cardTex(v) {
  return cached(`card|${v}`, () => canvasTex(128, 176, (g) => {
    const good = v > 0;
    const grad = g.createLinearGradient(0, 0, 0, 176); grad.addColorStop(0, good ? '#6ab4ff' : '#ff6a7a'); grad.addColorStop(1, good ? '#2a62d8' : '#c01a3a');
    g.fillStyle = grad; roundRect(g, 4, 4, 120, 168, 18); g.fill(); g.lineWidth = 6; g.strokeStyle = good ? '#e8f4ff' : '#ffe0e4'; g.stroke();
    if (good) drawSword(g, 64, 62, 78, '#fff'); else { g.fillStyle = '#fff'; g.translate(64, 62); for (let i = 0; i < 8; i++) { g.rotate(Math.PI / 4); g.beginPath(); g.moveTo(-8, 0); g.lineTo(0, -40); g.lineTo(8, 0); g.fill(); } g.beginPath(); g.arc(0, 0, 16, 0, 7); g.fill(); g.setTransform(1, 0, 0, 1, 0, 0); }
    g.fillStyle = '#fff'; g.font = '900 40px Tajawal, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineWidth = 6; g.strokeStyle = 'rgba(0,0,0,.45)'; const tx = `${v > 0 ? '+' : '−'}${Math.abs(v)}`; g.strokeText(tx, 64, 142); g.fillText(tx, 64, 142);
  }));
}
const coinTex = () => cached('coin', () => canvasTex(64, 64, (g) => { g.fillStyle = '#ffc928'; g.fillRect(0, 0, 64, 64); g.fillStyle = '#b87a08'; g.beginPath(); g.arc(32, 32, 22, 0, 7); g.fill(); g.fillStyle = '#ffe680'; g.font = '900 34px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('B', 32, 35); }));
const dirtTex = () => cached('dirt', () => canvasTex(256, 256, (g, w, hh) => {
  g.fillStyle = '#c98f55'; g.fillRect(0, 0, w, hh); const r = rng(11);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${90 + r() * 60},${50 + r() * 40},${20 + r() * 20},${0.12 + r() * 0.15})`; g.beginPath(); g.arc(r() * w, r() * hh, 1 + r() * 4, 0, 7); g.fill(); }
  for (let i = 0; i < 40; i++) { const x = r() * w, y = r() * hh; g.fillStyle = `rgba(${150 + r() * 50},${120 + r() * 40},${90 + r() * 30},.9)`; g.beginPath(); g.ellipse(x, y, 3 + r() * 5, 2 + r() * 3, r() * 3, 0, 7); g.fill(); }
}, true));
const grassTex = () => cached('grass', () => canvasTex(256, 256, (g, w, hh) => { g.fillStyle = '#58b43a'; g.fillRect(0, 0, w, hh); const r = rng(5); for (let i = 0; i < 1400; i++) { g.strokeStyle = `rgba(${40 + r() * 50},${130 + r() * 70},${30 + r() * 30},.35)`; g.lineWidth = 1 + r() * 2; const x = r() * w, y = r() * hh; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 6, y - 4 - r() * 8); g.stroke(); } }, true));

function sprite(tex, sx, sy) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })); sp.scale.set(sx, sy, 1); sp.renderOrder = 10; return sp; }

function makeHero() {
  // seen from behind: round orange body in a green tunic, a brown nut-shell helmet with ridges, ears, a wooden stick; feet swing
  const g = new THREE.Group(); const body = new THREE.Group();
  body.add(mesh(geo.sphere, M(0xf0a050), 0, 0.85, 0, 1.15, 1.1, 1.0));
  body.add(mesh(geo.sphere, M(0x4a9a3a), 0, 0.55, 0, 1.2, 0.8, 1.05), mesh(geo.cyl, M(0x7a4a22), 0, 0.72, 0, 1.22, 0.1, 1.07));
  body.add(mesh(geo.sphere, M(0xf0a050), 0, 1.55, 0, 0.95, 0.85, 0.9));
  body.add(mesh(geo.sphere, M(0x8a5a2e), 0, 1.78, -0.04, 1.08, 0.82, 1.04));
  for (const a of [-0.35, 0, 0.35]) { const rib = mesh(geo.torus, M(0x5a3a1a), 0, 1.78, -0.04, 1.02, 0.78, 0.98); rib.rotation.y = a * 1.4; rib.rotation.x = Math.PI / 2 - 0.2; body.add(rib); }
  body.add(mesh(geo.sphere, M(0xf0a050), -0.52, 1.82, 0.05, 0.28, 0.3, 0.14), mesh(geo.sphere, M(0xf0a050), 0.52, 1.82, 0.05, 0.28, 0.3, 0.14));
  body.add(mesh(geo.sphere, M(0xff9fb0), 0, 0.38, -0.55, 0.16, 0.16, 0.14));
  const stick = new THREE.Group(); stick.add(mesh(geo.cyl, M(0x8a5a2a), 0, 0.5, 0, 0.1, 1.5, 0.1), mesh(geo.sphere, M(0x6a3a14), 0, 1.28, 0, 0.22, 0.22, 0.22));
  stick.position.set(0.72, 0.75, 0.1); stick.rotation.z = -0.45; body.add(stick);
  body.add(mesh(geo.sphere, M(0xf0a050), 0.68, 0.9, 0.1, 0.28, 0.3, 0.28), mesh(geo.sphere, M(0xf0a050), -0.68, 0.9, 0.05, 0.28, 0.3, 0.28));
  const feet = [mesh(geo.sphere, M(0xfff0d8), -0.28, 0.12, 0, 0.36, 0.22, 0.52), mesh(geo.sphere, M(0xfff0d8), 0.28, 0.12, 0, 0.36, 0.22, 0.52)]; feet.forEach((f) => body.add(f));
  g.add(body); g.userData.body = body; g.userData.feet = feet; g.userData.stick = stick;
  const ring = mesh(new THREE.RingGeometry(0.7, 1.15, 32), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }), 0, 0.04, 0, 1, 1, 1);
  ring.rotation.x = -Math.PI / 2; g.add(ring); g.userData.ring = ring;
  const glow = mesh(new THREE.CircleGeometry(1.2, 28), new THREE.MeshBasicMaterial({ color: 0xffe680, transparent: true, opacity: 0.35, depthWrite: false }), 0, 0.03, 0, 1, 1, 1); glow.rotation.x = -Math.PI / 2; g.add(glow);
  return g;
}
const _artTex = new Map();
function artTex(img) { let t = _artTex.get(img); if (!t) { t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; _artTex.set(img, t); } return t; }
function makeCreature(type, seed, img) {
  const g = new THREE.Group(); const b = new THREE.Group();
  if (img) { // generated picture (optional); same size and place as the code-drawn creature, which stays as the fallback
    const h = 2.3, sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: artTex(img), transparent: true })); sp.scale.set(h * (img.naturalWidth / img.naturalHeight), h, 1); sp.center.set(0.5, 0.04); sp.position.y = 0.05; b.add(sp);
    g.add(b); g.userData.body = b; g.userData.seed = seed; return g;
  }
  const eye = (x, y, z) => { b.add(mesh(geo.sphere, M(0xffffff), x, y, z, 0.3, 0.32, 0.2), mesh(geo.sphere, M(0x1a1a2a), x * 1.05, y - 0.02, z + 0.1, 0.14, 0.18, 0.1)); };
  if (type === 0) { // sprout creature: green bulb with a leaf, as in the video
    b.add(mesh(geo.sphere, M(0x7ad04a), 0, 0.55, 0, 1.3, 1.0, 1.2), mesh(geo.sphere, M(0x9ae06a), 0, 0.45, 0.15, 0.9, 0.6, 0.8));
    const leaf = mesh(geo.sphere, M(0x4ab83a), 0.18, 1.3, 0, 0.35, 0.8, 0.12); leaf.rotation.z = -0.5; b.add(leaf);
    const leaf2 = mesh(geo.sphere, M(0x5ac84a), -0.2, 1.2, 0, 0.3, 0.6, 0.1); leaf2.rotation.z = 0.6; b.add(leaf2);
    eye(-0.25, 0.75, 0.52); eye(0.25, 0.75, 0.52); b.add(mesh(geo.sphere, M(0x3a6a2a), 0, 0.5, 0.58, 0.28, 0.1, 0.1));
  } else if (type === 1) { // mushroom
    b.add(mesh(geo.cyl, M(0xf4e8d0), 0, 0.45, 0, 0.7, 0.9, 0.7), mesh(geo.sphere, M(0xe8453a), 0, 1.0, 0, 1.5, 0.85, 1.5));
    for (const [x, z] of [[-0.35, 0.3], [0.3, 0.4], [0, -0.3]]) b.add(mesh(geo.sphere, M(0xffffff), x, 1.28, z, 0.28, 0.12, 0.28));
    eye(-0.2, 0.55, 0.32); eye(0.2, 0.55, 0.32);
  } else { // stone imp
    b.add(mesh(geo.sphere, M(0x8a78b8), 0, 0.7, 0, 1.25, 1.2, 1.1), mesh(geo.cone, M(0x6a5a98), -0.38, 1.45, 0, 0.3, 0.55, 0.3), mesh(geo.cone, M(0x6a5a98), 0.38, 1.45, 0, 0.3, 0.55, 0.3));
    b.add(mesh(geo.sphere, M(0xffe04a, 0x886600), -0.25, 0.85, 0.5, 0.28, 0.2, 0.12), mesh(geo.sphere, M(0xffe04a, 0x886600), 0.25, 0.85, 0.5, 0.28, 0.2, 0.12));
  }
  g.add(b); g.userData.body = b; g.userData.seed = seed;
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.girl = config.gender === 'girl';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('hw-style')) document.head.append(h('style', { id: 'hw-style' }, css('hw', '#5aa83a', '#2a5a1a', '#ffe04a') + HUD_CSS));
    this.root = h('div', { class: 'hw-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'hw-layer' });
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.parts = []; this.art = {}; this.shake = 0;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.heroPics = null;
    loadSprites(THREE, this.base, ['hero_run1', 'hero_run2', 'hero_run3', 'hero_swing', 'hero_hit', 'hero_win', 'hero_jump']).then((sp) => { this.heroPics = sp; if (sp.hero_run1) this._paintHero(); });
    loadArt(this.base, ['sky_1', 'sky_2', 'sky_3', 'boss_1', 'boss_2', 'boss_3', 'monster_1', 'monster_2', 'monster_3']).then((a) => { this.art = a; if (this.mode === 'menu' && this.demo) this._buildWorld(this.demo); });
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true }), { preset: 'warm' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xbfe8ff);
    this.scene.fog = new THREE.Fog(0xcfeedd, 38, 120);
    this.camera = new THREE.PerspectiveCamera(58, 1, 0.3, 260);
    this.scene.add(new THREE.HemisphereLight(0xfff6dc, 0x4a9a3a, 1.55));
    const sun = new THREE.DirectionalLight(0xfff0c0, 1.3); sun.position.set(-12, 30, -14); this.scene.add(sun);
    this.world = new THREE.Group(); this.scene.add(this.world);
    this.hero = makeHero(); this.scene.add(this.hero);
    this.heroPill = sprite(pillTex('power', '5'), 3.0, 1.3); this.scene.add(this.heroPill);
    this.flash = sprite(canvasTex(64, 64, (g) => { const r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(255,255,230,1)'); r.addColorStop(0.5, 'rgba(255,230,120,.6)'); r.addColorStop(1, 'rgba(255,200,60,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); }), 1, 1);
    this.flash.material.blending = THREE.AdditiveBlending; this.flash.visible = false; this.scene.add(this.flash); this.flashT = 0;
    const pm = canvasTex(32, 32, (g) => { g.fillStyle = '#fff'; g.beginPath(); g.arc(16, 16, 14, 0, 7); g.fill(); });
    for (let i = 0; i < 70; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: pm, transparent: true, depthWrite: false })); s.visible = false; s.userData = { life: 0 }; this.scene.add(s); this.parts.push(s); }
  }

  _burst(x, y, z, colors, n, speed = 4, size = 0.35) {
    let k = 0;
    for (const p of this.parts) { if (p.userData.life > 0) continue; p.userData = { life: 0.6 + Math.random() * 0.4, vx: (Math.random() - 0.5) * speed, vy: 1 + Math.random() * speed, vz: (Math.random() - 0.3) * speed }; p.position.set(x, y, z); p.material.color.set(colors[k % colors.length]); p.scale.setScalar(size * (0.6 + Math.random() * 0.8)); p.visible = true; if (++k >= n) break; }
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 66 : 50; this.camera.updateProjectionMatrix(); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = { x: e.clientX, t: this.run ? this.run.targetX : 0 }; });
    this.root.addEventListener('pointermove', (e) => {
      if (!this.drag || this.mode !== 'play' || !this.run) return;
      const span = Math.min(this.cw, this.ch * 0.62); // a swipe across the (portrait) width moves about two lanes
      this.run.targetX = Math.max(-(HALF - 0.6), Math.min(HALF - 0.6, this.drag.t + ((e.clientX - this.drag.x) / span) * 2 * HALF * 1.1));
      if (this.tut) { this.tut.remove(); this.tut = null; }
    });
    const up = () => { this.drag = null; };
    this.root.addEventListener('pointerup', up); this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      if (!this.run || this.mode !== 'play') return;
      const k = e.key.toLowerCase(); const cur = LANES.reduce((bi, lx, i) => (Math.abs(lx - this.run.targetX) < Math.abs(LANES[bi] - this.run.targetX) ? i : bi), 0);
      if (k === 'arrowleft' || k === 'a') this.run.targetX = LANES[Math.max(0, cur - 1)];
      if (k === 'arrowright' || k === 'd') this.run.targetX = LANES[Math.min(2, cur + 1)];
      if (this.tut) { this.tut.remove(); this.tut = null; }
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _clear() { this.layer.replaceChildren(); this.fxEls = []; }
  _soundPill() { const pill = h('button', { class: 'hw-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 2200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  // ------------------------------------------------------------------------------------------------------------------- world
  _buildWorld(run) {
    for (const c of [...this.world.children]) this.world.remove(c);
    this.objs = new Map(); this.pills = [];
    const L = run.L; const ch = Math.floor(run.level / 4); const r = rng(run.level * 7 + 3);
    const grass = grassTex().clone(); grass.repeat.set(30, (L + 200) / 8); grass.needsUpdate = true;
    const tint = [0xffffff, 0xf0e8d0, 0xd8d8e0][ch];
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, L + 260), new THREE.MeshLambertMaterial({ map: grass, color: tint })); ground.rotation.x = -Math.PI / 2; ground.position.set(0, -0.03, L / 2 + 30); this.world.add(ground);
    const dirt = dirtTex().clone(); dirt.repeat.set(2.4, (L + 80) / 7); dirt.needsUpdate = true;
    const path = new THREE.Mesh(new THREE.PlaneGeometry(8.4, L + 90), new THREE.MeshLambertMaterial({ map: dirt })); path.rotation.x = -Math.PI / 2; path.position.set(0, 0, L / 2 + 20); this.world.add(path);
    for (const s of [-1, 1]) this.world.add(mesh(geo.box, M(0x9aa83a), s * 4.35, 0.01, L / 2 + 20, 0.5, 0.03, L + 90));
    // wooden fences along both sides
    const posts = new THREE.InstancedMesh(geo.box, M(0x8a5a2a), Math.ceil((L + 80) / 3.5) * 2); let pi = 0; const dm = new THREE.Object3D();
    for (const s of [-1, 1]) for (let z = -6; z < L + 70; z += 3.5) { dm.position.set(s * 4.9, 0.6, z); dm.scale.set(0.22, 1.2, 0.22); dm.rotation.set(0, 0, 0); dm.updateMatrix(); posts.setMatrixAt(pi++, dm.matrix); }
    posts.count = pi; this.world.add(posts);
    for (const s of [-1, 1]) for (const y of [0.45, 0.95]) this.world.add(mesh(geo.box, M(0xa8703a), s * 4.9, y, L / 2 + 30, 0.12, 0.12, L + 90));
    // bushes, trees, rocks (instanced)
    const nB = 260, nT = 110;
    const bush = new THREE.InstancedMesh(geo.sphere, new THREE.MeshLambertMaterial({ color: 0xffffff }), nB); const trunk = new THREE.InstancedMesh(geo.cyl, M(0x7a4a22), nT); const canopy = new THREE.InstancedMesh(geo.sphere, new THREE.MeshLambertMaterial({ color: 0xffffff }), nT * 2);
    const greens = ch === 1 ? [0xe87aa0, 0x7ac848, 0xf0a0c0] : ch === 2 ? [0x8a9a78, 0x6a8a68, 0x9aa890] : [0x3aa83a, 0x58c040, 0x2f9a48, 0x70d048];
    const col = new THREE.Color();
    for (let i = 0; i < nB; i++) { const s = r() < 0.5 ? -1 : 1; const x = s * (6 + r() * 12); const z = r() * (L + 90) - 10; const k = 1.2 + r() * 2.2; dm.position.set(x, k * 0.35, z); dm.scale.set(k * 1.3, k * 0.85, k * 1.2); dm.updateMatrix(); bush.setMatrixAt(i, dm.matrix); bush.setColorAt(i, col.setHex(greens[Math.floor(r() * greens.length)])); }
    for (let i = 0; i < nT; i++) {
      const s = r() < 0.5 ? -1 : 1; const x = s * (8 + r() * 16); const z = r() * (L + 90) - 10; const k = 2.5 + r() * 2.5;
      dm.position.set(x, k * 0.55, z); dm.scale.set(0.7, k * 1.1, 0.7); dm.updateMatrix(); trunk.setMatrixAt(i, dm.matrix);
      for (let j = 0; j < 2; j++) { dm.position.set(x + (j ? 0.8 : -0.4), k * 1.25 + j * 0.9, z); const cs = k * (1.5 - j * 0.3); dm.scale.set(cs, cs * 0.9, cs); dm.updateMatrix(); canopy.setMatrixAt(i * 2 + j, dm.matrix); canopy.setColorAt(i * 2 + j, col.setHex(greens[Math.floor(r() * greens.length)])); }
    }
    this.world.add(bush, trunk, canopy);
    for (let i = 0; i < 40; i++) { const s = r() < 0.5 ? -1 : 1; this.world.add(mesh(geo.dode, M(0x9a9aa4), s * (5.4 + r() * 2.5), 0.25, r() * (L + 60), 0.5 + r() * 0.5, 0.4 + r() * 0.3, 0.5 + r() * 0.5)); }
    for (let i = 0; i < 90; i++) { const s = r() < 0.5 ? -1 : 1; this.world.add(mesh(geo.sphere, M([0xffe04a, 0xff7aa8, 0xffffff][i % 3]), s * (5.4 + r() * 4), 0.15, r() * (L + 60), 0.22, 0.22, 0.22)); }
    // wooden arch with flags at the end
    const arch = new THREE.Group();
    for (const s of [-1, 1]) { arch.add(mesh(geo.cyl, M(0x8a5028), s * 4.2, 3.4, 0, 1.1, 6.8, 1.1)); for (const y of [1.4, 2.4, 3.4]) { const ring = mesh(geo.torus, M(0xd8b878), s * 4.2, y, 0, 2.5, 2.5, 6); ring.rotation.x = Math.PI / 2; arch.add(ring); } }
    arch.add(mesh(geo.box, M(0x9a5a2e), 0, 7, 0, 10.4, 1.0, 1.1));
    const flagCols = [0xe8453a, 0xffd23a, 0x3a8aff, 0x5ac84a];
    for (let i = 0; i < 14; i++) { const x = -4.3 + i * 0.66; const f = mesh(geo.cone, M(flagCols[i % 4]), x, 6.2 - Math.sin((i / 13) * Math.PI) * 0.3, 0.1, 0.5, 0.8, 0.1); f.rotation.z = Math.PI; arch.add(f); }
    arch.position.set(0, 0, L); this.world.add(arch);
    // things
    const bossArt = this.art['boss_' + (ch + 1)];
    for (const t of run.things) {
      const g = new THREE.Group();
      if (t.kind === 'enemy') {
        g.add(makeCreature(t.type, t.seed, this.art['monster_' + (((t.type | 0) % 3) + 1)]));
        const p = sprite(pillTex('weak', fmt(t.power)), 2.2, 0.96); p.position.y = 2.5; g.add(p); this.pills.push({ t, sp: p, state: 'weak' });
      } else if (t.kind === 'boss') {
        if (bossArt) { const tx = new THREE.Texture(bossArt); tx.colorSpace = THREE.SRGBColorSpace; tx.needsUpdate = true; const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, transparent: true })); sp.scale.set(7 * (bossArt.naturalWidth / bossArt.naturalHeight), 7, 1); sp.center.set(0.5, 0.04); sp.position.y = 0.9; g.add(sp); }
        else { const c = makeCreature(ch === 1 ? 1 : ch === 2 ? 2 : 0, 3); c.scale.setScalar(3.4); g.add(c); }
        const p = sprite(pillTex('boss', fmt(t.power)), 3.4, 1.5); p.position.y = 8.2; g.add(p); this.pills.push({ t, sp: p, state: 'boss' });
      } else if (t.kind === 'card') {
        g.add(mesh(geo.cyl, M(0x9a9aa4), 0, 0.3, 0, 1.5, 0.6, 1.5), mesh(geo.cyl, M(0xb8b8c4), 0, 0.62, 0, 1.2, 0.08, 1.2));
        const c = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 1.7), new THREE.MeshBasicMaterial({ map: cardTex(t.v), transparent: true, side: THREE.DoubleSide })); c.position.y = 1.7; g.add(c); g.userData.card = c;
      } else if (t.kind === 'coin') {
        const c = mesh(geo.cyl, new THREE.MeshLambertMaterial({ map: coinTex(), emissive: 0x6a4a00 }), 0, 0.9, 0, 0.8, 0.14, 0.8); c.rotation.x = Math.PI / 2; g.add(c); g.userData.coin = c;
      }
      g.position.set(-t.x, 0, t.z); this.world.add(g); this.objs.set(t.id, g);
    }
    // sky picture behind the forest, if one exists
    const skyImg = this.art['sky_' + (ch + 1)] || this.art.sky_1;
    if (!this.sky) { this.sky = new THREE.Mesh(new THREE.PlaneGeometry(420, 210), new THREE.MeshBasicMaterial({ transparent: true, fog: false, depthWrite: false, side: THREE.DoubleSide })); this.sky.renderOrder = -5; this.scene.add(this.sky); }
    if (skyImg) { const tx = new THREE.Texture(skyImg); tx.colorSpace = THREE.SRGBColorSpace; tx.needsUpdate = true; this.sky.material.map = tx; this.sky.material.needsUpdate = true; this.sky.visible = true; } else this.sky.visible = false;
    this.scene.fog.color.setHex([0xcfeedd, 0xf6dce8, 0xd8dce8][ch]);
    this.scene.background.setHex([0xbfe8ff, 0xf6d8ec, 0xc8d4e8][ch]);
  }

  // ------------------------------------------------------------------------------------------------------------------- screens
  showMenu() {
    this.mode = 'menu'; this.run = null; this._clear(); this.sound.setMode(false);
    this.demo = new Run({ level: 0, seed: 2 }); this._buildWorld(this.demo);
    const ar = I.getLang() !== 'en';
    const lvs = h('div', { class: 'hw-lvs' }, Array.from({ length: LEVELS }, (_, i) => { const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i + 1] || 0; return h('button', { class: `hw-lv${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('i', {}, lock ? '🔒' : (isBossLevel(i) ? '👑' : '🐹')), h('span', {}, I.num(i + 1)), h('span', {}, '⭐'.repeat(st) || '·')); }));
    const shop = h('div', { style: 'display:flex;gap:calc(var(--u)*1.4);width:100%' }, UPG.map((u) => { const lv = this.save.up[u.id]; const c = upgradeCost(u.id, lv); return h('button', { class: `hw-bld${c !== null && this.save.coins >= c ? ' can' : ''}`, style: 'flex:1', onclick: () => { if (c === null || this.save.coins < c) return; this.save.coins -= c; this.save.up[u.id] += 1; this.post({ type: 'save', save: this.save }); this.sound.play('card'); this.showMenu(); } }, h('span', {}, ar ? u.ar : u.en), h('small', {}, `${I.num(lv)}/${I.num(u.max)}`), h('small', {}, c === null ? '✓' : `🪙 ${I.num(c)}`)); }));
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-logo' }, '🐹 ', I.t('title')), h('div', { class: 'hw-pill' }, `🪙 ${I.num(this.save.coins)}`), shop, lvs, h('button', { class: 'hw-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'hw-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  start(i) {
    this.levelIdx = i;
    this.run = new Run({ level: i, seed: (Date.now() & 0xffff) + 1, up: this.save.up, easy: this.age <= 4 });
    this._buildWorld(this.run);
    this.mode = 'play'; this.paused = false; this.fx = []; this._pk = null;
    this._clear(); this.sound.setMode(true);
    const heart = '<svg viewBox="0 0 32 30"><path d="M16 29 3 15C-2 9 2 1 9 1c3 0 5 1 7 4 2-3 4-4 7-4 7 0 11 8 6 14z" fill="currentColor" stroke="#7a0a20" stroke-width="2"/></svg>';
    this.heartsEl = h('div', { class: 'hw2-hearts' });
    for (let k = 0; k < this.run.maxHearts; k++) { const sp = document.createElement('span'); sp.innerHTML = heart; this.heartsEl.append(sp); }
    this.barEl = h('b', { style: 'width:0%' }); this.paw = h('i', {}, '🐾'); this.paw.style.left = '0%';
    this.coinEl = h('span', {}, '0'); this.powEl = h('span', {}, ''); this.starEls = [0, 1, 2].map(() => h('em', {}, '★'));
    const pause = h('button', { class: 'hw2-pause', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, h('b', {}), h('b', {}));
    this.layer.append(
      h('div', { class: 'hw2-top' }, pause, h('div', { class: 'hw2-lvl' }, h('div', { class: 'hw2-lvtxt' }, `${I.t('level')} ${I.num(i + 1)}`), h('div', { class: 'hw2-bar' }, this.barEl, this.paw)), h('div', { class: 'hw2-coin' }, h('i', {}, 'B'), this.coinEl)),
      this.heartsEl,
      h('div', { class: 'hw2-bottom' }, h('i', {}, '🐾'), this.powEl, h('div', { class: 'hw2-stars' }, this.starEls)));
    this.hintEl = h('div', { class: 'hw-hint', style: 'top:calc(var(--u)*34)' }); this.layer.append(this.hintEl); this._soundPill();
    if (i === 0 && !this.save.stars[1]) { this.tut = h('div', { class: 'hw2-tut' }, h('span', {}, I.t('how')), h('i', {}, '👆')); this.layer.append(this.tut); setTimeout(() => { if (this.tut) { this.tut.remove(); this.tut = null; } }, 6000); }
  }

  togglePause() { if (this.mode !== 'play') return; this.paused = !this.paused; if (this.paused) { this.pauseEl = h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('paused')), h('button', { class: 'hw-btn', onclick: () => this.togglePause() }, I.t('resume')), h('button', { class: 'hw-btn dark', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove(); }

  _confetti() { const cols = ['#ffd23a', '#ff5a7a', '#3aa8ff', '#5ae05a', '#ff9a3a']; for (let i = 0; i < 36; i++) this.layer.append(h('span', { class: 'hw2-conf', style: `left:${Math.random() * 100}%;background:${cols[i % 5]};animation-delay:${Math.random() * 0.6}s;animation-duration:${1.6 + Math.random() * 1.4}s` })); }

  _won() {
    const r = this.run; const lv = this.levelIdx + 1;
    this.save.coins += r.reward; this.save.stars[lv] = Math.max(this.save.stars[lv] || 0, r.stars);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS, lv + 1));
    this.post({ type: 'save', save: this.save }); this.sound.play('win'); this.fx = [];
    this._confetti();
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('won')), h('div', { class: 'hw-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off' }, '⭐'))), h('div', { class: 'hw-pill' }, `${I.t('power')} ${fmt(r.power)} · 🪙 +${I.num(r.reward)}`), h('div', { class: 'hw-small' }, I.t(this.girl ? 'win_f' : 'win_m')),
      this.levelIdx < LEVELS - 1 ? h('button', { class: 'hw-btn', onclick: () => this.start(this.levelIdx + 1) }, I.t('next')) : null, h('button', { class: 'hw-btn alt', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _lost() {
    this.sound.play('lose'); this.fx = [];
    this.layer.append(h('div', { class: 'hw-dim' }, h('div', { class: 'hw-card' }, h('div', { class: 'hw-title' }, I.t('lost')), h('div', { class: 'hw-small' }, I.t('lost2')), h('button', { class: 'hw-btn', onclick: () => this.start(this.levelIdx) }, I.t('again')), h('button', { class: 'hw-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  // ------------------------------------------------------------------------------------------------------------------- loop
  _frame() { const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; if (this.mode === 'play' && !this.paused && this.run) this._update(dt); this._render(dt); }

  _update(dt) {
    const r = this.run;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'card': this.sound.play(e.v > 0 ? 'card' : 'bad'); this.fx.push({ t: 0, life: 1, text: `${e.v > 0 ? '+' : '−'}${Math.abs(e.v)}`, good: e.v > 0 }); this._burst(-r.x, 1.6, r.z + 0.5, e.v > 0 ? ['#6ab4ff', '#ffffff'] : ['#ff6a7a', '#ffffff'], 10); break;
        case 'absorb': this.sound.play('absorb'); this.fx.push({ t: 0, life: 1, text: `+${fmt(e.gain)}`, good: true }); this._burst(-r.x, 1.4, r.z + 0.8, ['#7be04a', '#ffe04a', '#ffffff'], 16, 5); this.flashT = 0.28; this.pop = 0.35; break;
        case 'hurt': this.sound.play('hurt'); this.shake = 0.5; this._burst(-r.x, 1.4, r.z, ['#ff5a5a', '#ffd23a'], 10); this._updateHearts(); this.hint(I.t('stronger'), 1600); break;
        case 'warn': this.sound.play('warn'); this.hint(I.t('stronger'), 1800); break;
        case 'coin': this.sound.play('coin'); break;
        case 'won': this._won(); break;
        case 'lost': this._lost(); break;
        default: break;
      }
    }
    this.coinEl.textContent = I.num(r.coins); this.powEl.textContent = fmt(r.power);
    this.barEl.style.width = `${Math.round(Math.min(1, r.z / r.L) * 100)}%`; this.paw.style.left = `${Math.round(Math.min(1, r.z / r.L) * 92)}%`;
    const sn = r.starsNow; this.starEls.forEach((s, i) => s.classList.toggle('on', i < sn));
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  _updateHearts() { const sp = this.heartsEl ? [...this.heartsEl.children] : []; sp.forEach((s, i) => s.classList.toggle('gone', i >= this.run.hearts)); }

  /** The painted hamster (owner's sheet, seen from behind): a camera-facing picture replaces the 3D body, the golden ring stays. */
  _paintHero() {
    const P = this.heroPics; if (!P || !P.hero_run1 || this.hero.userData.pic) return;
    const mat = new THREE.SpriteMaterial({ map: P.hero_run1.tex, transparent: true, alphaTest: 0.05, toneMapped: false, fog: false, depthWrite: false });
    const sp = new THREE.Sprite(mat); sp.center.set(0.5, 0.04); sp.renderOrder = 3;
    this.hero.add(sp); this.hero.userData.pic = sp; this.hero.userData.body.visible = false;
  }

  _heroPic(play, r) {
    const P = this.heroPics, sp = this.hero.userData.pic; if (!P || !sp) return;
    let key;
    if (this.run && this.run.hit > 0.2) key = 'hero_hit';
    else if (this.pop > 0.08) key = 'hero_swing';
    else key = ['hero_run1', 'hero_run2', 'hero_run3', 'hero_run2'][Math.floor(this.clock * (play ? 9 : 3)) % 4];
    const pic = P[key] || P.hero_run1;
    if (sp.material.map !== pic.tex) { sp.material.map = pic.tex; sp.material.needsUpdate = true; }
    sp.scale.set(2.7 * pic.aspect, 2.7, 1);
  }

  _render(dt) {
    const r = this.run || this.demo; const play = !!this.run;
    const zr = play ? r.z : 0; const xr = play ? r.x : 0;
    this.hero.position.set(-xr, Math.abs(Math.sin(this.clock * 13)) * 0.12, zr);
    const body = this.hero.userData.body; body.rotation.z = Math.sin(this.clock * 13) * 0.07;
    const k = play ? 15 : 3; const f = this.hero.userData.feet; f[0].position.z = Math.sin(this.clock * k) * 0.4; f[1].position.z = -Math.sin(this.clock * k) * 0.4; f[0].position.y = 0.12 + Math.max(0, Math.sin(this.clock * k)) * 0.22; f[1].position.y = 0.12 + Math.max(0, -Math.sin(this.clock * k)) * 0.22;
    this.hero.userData.stick.rotation.z = -0.45 + Math.sin(this.clock * 8) * 0.1;
    this.pop = Math.max(0, (this.pop || 0) - dt); this.hero.scale.setScalar(1 + this.pop * 0.5);
    this.hero.visible = !(this.run && this.run.hit > 0.2 && Math.floor(this.clock * 14) % 2 === 1);
    const ringS = 1 + Math.sin(this.clock * 4) * 0.08; this.hero.userData.ring.scale.set(ringS, ringS, 1);
    this._heroPic(play, r);
    const key = play ? fmt(r.power) : '5'; if (this._pk !== key) { this._pk = key; this.heroPill.material.map = pillTex('power', key); this.heroPill.material.needsUpdate = true; }
    this.heroPill.position.set(-xr, 3.5, zr);
    if (play) {
      for (const t of r.things) {
        const o = this.objs.get(t.id); if (!o) continue; if (t.done) { o.visible = false; continue; }
        if (o.userData.coin) o.userData.coin.rotation.z = this.clock * 3;
        else if (o.userData.card) { o.userData.card.position.y = 1.7 + Math.sin(this.clock * 2.4 + t.id) * 0.1; o.userData.card.rotation.y = Math.sin(this.clock * 1.4 + t.id) * 0.25; }
        else if (t.kind === 'enemy' || t.kind === 'boss') { const b = o.children[0]; if (b && b.userData.body) { b.userData.body.position.y = Math.abs(Math.sin(this.clock * 3 + t.id)) * 0.12; b.userData.body.rotation.z = Math.sin(this.clock * 2.4 + t.id) * 0.06; } }
      }
      for (const p of this.pills) { if (p.state === 'boss' || p.t.done) continue; const want = r.power > p.t.power ? 'weak' : 'strong'; if (want !== p.state) { p.state = want; p.sp.material.map = pillTex(want, fmt(p.t.power)); p.sp.material.needsUpdate = true; } }
    }
    for (const q of this.parts) { const d = q.userData; if (d.life > 0) { d.life -= dt; q.position.x += d.vx * dt; q.position.y += d.vy * dt; q.position.z += d.vz * dt; d.vy -= 9 * dt; q.material.opacity = Math.max(0, d.life * 2); if (d.life <= 0) q.visible = false; } }
    if (this.flashT > 0) { this.flashT -= dt; this.flash.visible = true; this.flash.position.set(-xr, 1.6, zr + 0.8); this.flash.scale.setScalar(5 * (1 - this.flashT / 0.28) + 1); this.flash.material.opacity = Math.max(0, this.flashT / 0.28); } else this.flash.visible = false;
    this.shake = Math.max(0, this.shake - dt * 2.2);
    const portrait = this.cw < this.ch; const camX = -xr * 0.55;
    const zc = play ? Math.min(zr, r.L + 3) : 0;
    this.camera.position.set(camX + (Math.random() - 0.5) * this.shake, (portrait ? 7.4 : 5.9) + (Math.random() - 0.5) * this.shake * 0.5, zc - (portrait ? 9.6 : 8.2));
    this.camera.lookAt(camX * 0.6, 1.2, zc + (portrait ? 9 : 10));
    if (this.sky) this.sky.position.set(camX, 52, zc + 120);
    this.renderer.render(this.scene, this.camera);
    this._floaters();
  }

  _floaters() {
    if (!this.fxEls) this.fxEls = [];
    const v = new THREE.Vector3(); const hz2 = this.run ? this.run.z : 0; const hx = this.run ? -this.run.x : 0;
    v.set(hx, 3.9, hz2).project(this.camera); const sx = (v.x * 0.5 + 0.5) * this.cw, sy = (-v.y * 0.5 + 0.5) * this.ch;
    this.fx.forEach((f, i) => {
      let el = this.fxEls[i];
      if (!el) { el = h('div', { dir: 'ltr', class: 'hw2-float' }); this.layer.append(el); this.fxEls[i] = el; }
      el.style.display = 'block'; el.style.opacity = String(1 - f.t / f.life); el.style.left = `${sx}px`; el.style.top = `${sy}px`; el.style.transform = `translate(-50%,${-f.t * 70}px)`; el.className = `hw2-float ${f.good ? 'good' : 'bad'}`; el.textContent = `${f.good ? '⚔ ' : ''}${f.text}`;
    });
    for (let i = this.fx.length; i < this.fxEls.length; i++) this.fxEls[i].style.display = 'none';
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.disposed = true; this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const HUD_CSS = `
.hw2-top{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*2.5);right:calc(var(--u)*2.5);display:flex;align-items:center;gap:calc(var(--u)*2);direction:ltr}
.hw2-pause{pointer-events:auto;width:calc(var(--u)*11);height:calc(var(--u)*11);flex:none;border-radius:50%;border:calc(var(--u)*.7) solid #7a3a08;background:linear-gradient(180deg,#ffb23a,#f07a10);display:flex;gap:calc(var(--u)*1.2);align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) 0 #8a4a08;cursor:pointer;padding:0}
.hw2-pause b{display:block;width:calc(var(--u)*1.7);height:calc(var(--u)*4.6);background:#fff;border-radius:calc(var(--u)*.5)}
.hw2-lvl{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.6);min-width:0}
.hw2-lvtxt{font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;-webkit-text-stroke:calc(var(--u)*.9) #4a2a08;paint-order:stroke fill;letter-spacing:.04em;text-align:left;padding-left:calc(var(--u)*3)}
.hw2-bar{position:relative;height:calc(var(--u)*3.4);border-radius:99px;background:#3a2a1a;border:calc(var(--u)*.6) solid #2a1a0a;overflow:visible}
.hw2-bar b{display:block;height:100%;border-radius:99px;background:linear-gradient(180deg,#9af060,#3eb82a)}
.hw2-bar i{position:absolute;top:50%;transform:translate(-50%,-50%);font-style:normal;font-size:calc(var(--u)*5);filter:drop-shadow(0 0 calc(var(--u)*.4) #fff)}
.hw2-coin{flex:none;display:flex;align-items:center;gap:calc(var(--u)*1.4);background:rgba(40,28,16,.82);border:calc(var(--u)*.5) solid #1a0e04;border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3.2) calc(var(--u)*.6) calc(var(--u)*.8);font-weight:900;font-size:calc(var(--u)*4.6);color:#fff;min-width:calc(var(--u)*17)}
.hw2-coin i{font-style:normal;display:flex;align-items:center;justify-content:center;width:calc(var(--u)*6.6);height:calc(var(--u)*6.6);border-radius:50%;background:radial-gradient(#ffe680,#f0b010);border:calc(var(--u)*.5) solid #b87a08;color:#9a5a00;font-size:calc(var(--u)*4)}
.hw2-hearts{position:absolute;top:calc(var(--u)*17);left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*1.2)}
.hw2-hearts span{width:calc(var(--u)*6.6);height:calc(var(--u)*6.2);color:#ff3a4a;filter:drop-shadow(0 calc(var(--u)*.4) 0 rgba(0,0,0,.35));transition:transform .2s,opacity .3s}
.hw2-hearts span.gone{color:#6a5a5a;opacity:.55;transform:scale(.8)}
.hw2-hearts svg{width:100%;height:100%;display:block}
.hw2-bottom{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*3);min-width:calc(var(--u)*62);justify-content:center;background:linear-gradient(180deg,#ffd23a,#f0a010);border:calc(var(--u)*.9) solid #5a3410;border-radius:99px;padding:calc(var(--u)*1.2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) 0 #8a5a10,0 calc(var(--u)*2) calc(var(--u)*3) rgba(0,0,0,.3);direction:ltr}
.hw2-bottom i{font-style:normal;font-size:calc(var(--u)*7.5)}
.hw2-bottom span{font-weight:900;font-size:calc(var(--u)*9);color:#fff;-webkit-text-stroke:calc(var(--u)*1.1) #5a3410;paint-order:stroke fill;min-width:calc(var(--u)*10);text-align:center}
.hw2-stars{display:flex;gap:calc(var(--u)*.6)}
.hw2-stars em{font-style:normal;font-size:calc(var(--u)*6.4);color:#a8742a;text-shadow:0 0 calc(var(--u)*.4) #5a3410;transition:color .2s,transform .2s}
.hw2-stars em.on{color:#fff6a0;transform:scale(1.15);text-shadow:0 0 calc(var(--u)*1.2) #ffd23a}
.hw2-float{position:absolute;pointer-events:none;font-weight:900;font-size:calc(var(--u)*6);padding:calc(var(--u)*.4) calc(var(--u)*2.4);border-radius:99px;border:calc(var(--u)*.5) solid #164a10;white-space:nowrap}
.hw2-float.good{background:linear-gradient(180deg,#7be04a,#3ea82a);color:#fff}
.hw2-float.bad{background:linear-gradient(180deg,#ff6a7a,#c01a3a);color:#fff;border-color:#5a0a14}
.hw2-tut{position:absolute;left:50%;top:44%;transform:translateX(-50%);text-align:center;font-weight:900;font-size:calc(var(--u)*7);color:#fff;-webkit-text-stroke:calc(var(--u)*1) #3a2208;paint-order:stroke fill;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1)}
.hw2-tut i{font-style:normal;font-size:calc(var(--u)*14);animation:hw2sw 1.4s ease-in-out infinite}
@keyframes hw2sw{0%,100%{transform:translateX(calc(var(--u)*-8))}50%{transform:translateX(calc(var(--u)*8))}}
.hw2-conf{position:absolute;top:-4%;width:calc(var(--u)*1.8);height:calc(var(--u)*2.6);opacity:.95;animation:hw2fall linear forwards;pointer-events:none}
@keyframes hw2fall{to{transform:translateY(115vh) rotate(720deg)}}
`;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.HamsterWarrior = api;
export default api;
