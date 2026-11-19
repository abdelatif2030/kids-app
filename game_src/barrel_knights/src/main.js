// «فرسان البرميل» — Barrel Knights. Entry: window.BarrelKnights.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D (three.js, high 3/4 camera) tournament-arena team game: four knights against four rivals push a giant wooden barrel
// through the other team's gate. Dash to shove the barrel and knock rivals aside (they tumble with stars, nobody is hurt).
// Telegraphed hazards: trapdoors, mud, rolling boulders. Nine tournament rounds, stars, coins for armour colours and helmets.
// Original characters, art and sound made in code. No network, no ads, no tracking; the save stays on the device.
import * as THREE from 'three';
import { Match, ROUNDS, PITCH, BARREL_R, KNIGHT_R, COLORS, HELMETS, RIVAL_COLOR, MATCH_TIME, normalizeSave, applyResult, buy, equip } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['فرسان البرميل', 'BARREL KNIGHTS'], play: ['العب', 'PLAY'], rounds: ['الجولات', 'ROUNDS'], knights: ['الفرسان', 'KNIGHTS'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'],
  back: ['رجوع', 'Back'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], restart: ['إعادة', 'RESTART'], home: ['الرئيسية', 'HOME'], next: ['الجولة التالية', 'NEXT ROUND'],
  dash: ['اندفاع', 'DASH'], goal: ['هدف!', 'GOAL!'], go: ['يلا!', 'GO!'], round: ['الجولة', 'Round'], sound: ['الصوت', 'Sound'], diff: ['الصعوبة', 'Difficulty'],
  easy: ['سهل', 'Easy'], normal: ['عادي', 'Normal'], hard: ['صعب', 'Hard'], victory: ['فزتم! 🏆', 'YOU WIN! 🏆'], lose: ['حظ أوفر المرة الجاية', 'Good try!'], draw: ['تعادل', 'DRAW'],
  coins: ['عملات', 'Coins'], earned: ['كسبت', 'Earned'], locked: ['خلّص الجولة اللي قبلها', 'Finish the round before'], overtime: ['وقت إضافي!', 'OVERTIME!'],
  how: ['اسحب بإصبعك للحركة، واضغط اندفاع لدفع البرميل وإبعاد الخصوم', 'Drag to move, press DASH to shove the barrel and bump rivals'],
  how2: ['ادفع البرميل العملاق داخل بوابة الخصم! الأبواب المخفية والصخور والطين بتتنبّه قبل ما تشتغل.', 'Push the giant barrel through the rival gate! Trapdoors, boulders and mud always warn you first.'],
  colors: ['ألوان الدرع', 'Armour'], helmets: ['الخوذات', 'Helmets'], equipped: ['لابسه', 'On'], notEnough: ['العملات مش كفاية', 'Not enough coins'], tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  final: ['النهائي', 'FINAL'], yourTeam: ['فريقك', 'You'], rivals: ['الخصوم', 'Rivals'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);
const LOOKS = {
  day: { sky: 0x8ad0ff, fog: 0xcdeaff, sand: [0xe9d09a, 0xdfc488], hemi: 1.5, sun: 1.3, sunC: 0xfff4d8, torch: false },
  dusk: { sky: 0xffa070, fog: 0xffc8a0, sand: [0xe2b87a, 0xd6a86a], hemi: 1.25, sun: 1.1, sunC: 0xffc080, torch: true },
  night: { sky: 0x1c2858, fog: 0x2a3870, sand: [0xb89a74, 0xac8e68], hemi: 0.95, sun: 0.55, sunC: 0x9ab0ff, torch: true },
  royal: { sky: 0x7ac8ff, fog: 0xc8e8ff, sand: [0xf0d890, 0xe6cc80], hemi: 1.6, sun: 1.35, sunC: 0xfff0c0, torch: false },
};

const geo = { sphere: new THREE.SphereGeometry(0.5, 16, 12), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 16), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 12), torus: new THREE.TorusGeometry(0.5, 0.08, 8, 24), star: new THREE.OctahedronGeometry(0.5, 0) };
const mats = new Map();
const M = (c, em = 0, extra) => { const k = `${c}|${em}|${extra ? JSON.stringify(extra) : ''}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em, ...(extra || {}) })); return mats.get(k); };
function mesh(g, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

function canvasTex(w, hh, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = hh; draw(c.getContext('2d'), w, hh);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}
function woodTexture() {
  return canvasTex(256, 256, (g, w, hh) => {
    const cols = ['#b87a3c', '#a86c34', '#c48646', '#9c6230'];
    const n = 12;
    for (let i = 0; i < n; i++) { g.fillStyle = cols[i % 4]; g.fillRect(i * w / n, 0, w / n + 1, hh); g.fillStyle = 'rgba(60,30,10,.85)'; g.fillRect(i * w / n, 0, 3, hh); g.strokeStyle = 'rgba(70,35,10,.25)'; for (let k = 0; k < 6; k++) { g.beginPath(); const x = i * w / n + 6 + k * 3; g.moveTo(x, 0); g.lineTo(x + 2, hh); g.stroke(); } }
  });
}
function sandTexture(a, b) {
  const hex = (n) => `#${n.toString(16).padStart(6, '0')}`;
  return canvasTex(256, 256, (g, w, hh) => {
    g.fillStyle = hex(a); g.fillRect(0, 0, w, hh / 2); g.fillStyle = hex(b); g.fillRect(0, hh / 2, w, hh / 2);
    let s = 7; const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(${r() > 0.5 ? '255,245,210' : '120,90,50'},${0.08 + r() * 0.12})`; g.fillRect(r() * w, r() * hh, 1 + r() * 3, 1 + r() * 2); }
  }, [1, 1]);
}
function dotTex() { return canvasTex(32, 32, (g) => { const gr = g.createRadialGradient(16, 16, 1, 16, 16, 15); gr.addColorStop(0, '#fff'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); }); }
function chevTex(color) {
  return canvasTex(128, 64, (g, w, hh) => { g.clearRect(0, 0, w, hh); g.fillStyle = color; for (let i = 0; i < 2; i++) { const x = i * 64; g.beginPath(); g.moveTo(x + 8, 8); g.lineTo(x + 36, hh / 2); g.lineTo(x + 8, hh - 8); g.lineTo(x + 24, hh - 8); g.lineTo(x + 52, hh / 2); g.lineTo(x + 24, 8); g.fill(); } }, [8, 1]);
}
function netTex() { return canvasTex(128, 128, (g, w, hh) => { g.clearRect(0, 0, w, hh); g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 3; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * w / 8, 0); g.lineTo(i * w / 8, hh); g.stroke(); g.beginPath(); g.moveTo(0, i * hh / 8); g.lineTo(w, i * hh / 8); g.stroke(); } }, [3, 1]); }

// ---------------- models ----------------
function makeBarrel() {
  const g = new THREE.Group(); const yaw = new THREE.Group(); const roll = new THREE.Group(); g.add(yaw); yaw.add(roll);
  const tex = woodTexture(); const body = new THREE.Group(); body.rotation.z = Math.PI / 2; roll.add(body);
  const pts = []; const hh = 0.95;
  for (let i = 0; i <= 10; i++) { const y = -hh + (2 * hh * i) / 10; const t = y / hh; pts.push(new THREE.Vector2(BARREL_R * (1 - 0.16 * t * t), y)); }
  const wood = new THREE.MeshLambertMaterial({ map: tex });
  body.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 28), wood));
  const cap = new THREE.MeshLambertMaterial({ color: 0xa66a32 });
  for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.CircleGeometry(BARREL_R * 0.84, 24), cap); c.position.y = s * hh; c.rotation.x = s * -Math.PI / 2; body.add(c); const ring = mesh(geo.torus, M(0x555a64), 0, s * (hh - 0.02), 0, BARREL_R * 1.72, BARREL_R * 1.72, 1.4); ring.rotation.x = Math.PI / 2; body.add(ring); }
  for (const y of [-0.5, 0.5]) { const r = BARREL_R * (1 - 0.16 * (y / hh) ** 2) * 2.02; const ring = mesh(geo.torus, M(0x4a4e58), 0, y, 0, r, r, 1.8); ring.rotation.x = Math.PI / 2; body.add(ring); }
  // a painted star so the roll is easy to follow
  const star = mesh(geo.star, M(0xffd23a, 0x886600), BARREL_R * 0.98, 0, 0, 0.5, 0.5, 0.2); star.rotation.z = 0.7; body.add(star);
  const star2 = mesh(geo.star, M(0xffd23a, 0x886600), -BARREL_R * 0.98, 0, 0, 0.5, 0.5, 0.2); body.add(star2);
  g.userData = { yaw, roll, y: BARREL_R };
  return g;
}

function addHelmet(head, type, color) {
  const gold = M(0xffcf3a, 0x664400); const w = M(0xf6f2e8);
  if (type === 'plume') { const p = mesh(geo.sphere, M(color, 0x222222), 0, 0.5, -0.18, 0.2, 0.55, 0.5); p.rotation.x = -0.5; head.add(p); }
  else if (type === 'crest') { for (let i = 0; i < 5; i++) head.add(mesh(geo.box, M(color, 0x222222), 0, 0.44 + Math.sin(i / 4 * Math.PI) * 0.1, -0.3 + i * 0.15, 0.1, 0.22 + Math.sin(i / 4 * Math.PI) * 0.15, 0.14)); }
  else if (type === 'horns') { for (const s of [-1, 1]) { const hn = mesh(geo.cone, w, s * 0.5, 0.4, 0, 0.2, 0.6, 0.2); hn.rotation.z = -s * 0.7; head.add(hn); } }
  else if (type === 'jester') { for (const s of [-1, 1]) { const c1 = mesh(geo.cone, M(s > 0 ? 0xe83a8a : 0x6a3ae8), s * 0.34, 0.5, 0, 0.3, 0.75, 0.3); c1.rotation.z = -s * 0.9; head.add(c1); head.add(mesh(geo.sphere, gold, s * 0.72, 0.62, 0, 0.14, 0.14, 0.14)); } }
  else if (type === 'crown') { head.add(mesh(geo.cyl, gold, 0, 0.47, 0, 0.62, 0.16, 0.62)); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; head.add(mesh(geo.cone, gold, Math.cos(a) * 0.28, 0.65, Math.sin(a) * 0.28, 0.14, 0.28, 0.14)); } head.add(mesh(geo.sphere, M(0xe83a3a, 0x440000), 0, 0.5, 0.31, 0.1, 0.1, 0.1)); }
}

function makeKnight(color, helmet, isPlayer) {
  const g = new THREE.Group(); const inner = new THREE.Group(); inner.scale.setScalar(1.25); g.add(inner);
  const tunic = M(color, 0x000000); const steel = M(0xc4ccd8, 0x1a1e28); const dark = M(0x2a2e3a);
  inner.add(mesh(geo.sphere, tunic, 0, 1.0, 0, 0.95, 1.05, 0.75)); // chunky body
  inner.add(mesh(geo.cyl, M(0x6a4420), 0, 0.82, 0, 0.98, 0.13, 0.8)); // belt
  inner.add(mesh(geo.box, M(0xffcf3a, 0x664400), 0, 0.82, 0.4, 0.2, 0.18, 0.06));
  const legL = new THREE.Group(), legR = new THREE.Group();
  for (const [lg, x] of [[legL, -0.26], [legR, 0.26]]) { lg.position.set(x, 0.55, 0); lg.add(mesh(geo.cyl, steel, 0, -0.2, 0, 0.3, 0.45, 0.3), mesh(geo.box, dark, 0, -0.45, 0.1, 0.34, 0.18, 0.5)); inner.add(lg); }
  const armL = new THREE.Group(), armR = new THREE.Group();
  for (const [ar, x] of [[armL, -0.58], [armR, 0.58]]) { ar.position.set(x, 1.35, 0); ar.add(mesh(geo.cyl, steel, 0, -0.3, 0, 0.26, 0.6, 0.26), mesh(geo.sphere, steel, 0, -0.62, 0, 0.3, 0.3, 0.3)); inner.add(ar); }
  const shield = new THREE.Group(); shield.position.set(-0.24, -0.32, 0.12); shield.add(mesh(geo.cyl, tunic, 0, 0, 0, 0.62, 0.08, 0.62), mesh(geo.torus, M(0xf4f4f4), 0, 0, 0, 0.94, 0.94, 1.4), mesh(geo.cyl, M(0xffffff), 0, 0.05, 0, 0.22, 0.04, 0.22)); shield.children[0].rotation.z = Math.PI / 2; shield.children[1].rotation.y = Math.PI / 2; shield.children[2].rotation.z = Math.PI / 2; shield.children[2].position.set(-0.05, 0, 0); armL.add(shield);
  const head = new THREE.Group(); head.position.set(0, 1.95, 0); inner.add(head);
  head.add(mesh(geo.sphere, steel, 0, 0, 0, 0.82, 0.78, 0.8));
  head.add(mesh(geo.box, M(0x14181f), 0, 0.02, 0.36, 0.5, 0.12, 0.1));
  head.add(mesh(geo.box, M(0x14181f), 0, -0.1, 0.38, 0.06, 0.22, 0.08));
  addHelmet(head, helmet, color);
  const shadow = mesh(new THREE.CircleGeometry(0.85, 18), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.28, depthWrite: false }), 0, 0.03, 0); shadow.rotation.x = -Math.PI / 2; g.add(shadow);
  const stars = new THREE.Group(); stars.position.y = 2.75; for (let i = 0; i < 3; i++) stars.add(mesh(geo.star, M(0xffe04a, 0xaa8800), 0, 0, 0, 0.36, 0.36, 0.16)); stars.visible = false; g.add(stars);
  let marker = null;
  if (isPlayer) {
    marker = new THREE.Group(); const ring = mesh(new THREE.RingGeometry(1.0, 1.25, 28), new THREE.MeshBasicMaterial({ color: 0xffe04a, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }), 0, 0.05, 0); ring.rotation.x = -Math.PI / 2; marker.add(ring);
    const arrow = mesh(geo.cone, M(0xffe04a, 0xaa8800), 0, 3.5, 0, 0.7, 0.8, 0.7); arrow.rotation.x = Math.PI; marker.add(arrow); marker.userData.arrow = arrow; g.add(marker);
  }
  g.userData = { inner, legL, legR, armL, armR, head, stars, shadow, marker, phase: Math.random() * 6, sink: 0 };
  return g;
}

// ---------------- the game ----------------
class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('bk-style')) document.head.append(h('style', { id: 'bk-style' }, css('bk', '#8a5a2a', '#4a2a10', '#ffd23a') + EXTRA_CSS));
    this.root = h('div', { class: 'bk-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'bk-layer' });
    this.mode = 'menu'; this.clock = 0; this.paused = false; this.keys = new Set(); this.shakeT = 0; this.cheer = 0; this.puffs = [];
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  // ---- scene
  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 400);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x9a8a78, 1.5); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff4d8, 1.3); this.sun.position.set(-14, 30, 18); this.scene.add(this.sun);
    this.arena = new THREE.Group(); this.scene.add(this.arena);
    this.dyn = new THREE.Group(); this.scene.add(this.dyn);
    this.dotTex = dotTex();
    this._buildArena();
    this._buildParticles();
    this.camPos = new THREE.Vector3(0, 30, 30); this.camT = new THREE.Vector3(0, 0, 0);
    this._look('day');
    this.preview = null;
  }

  _look(id) {
    const L = LOOKS[id] || LOOKS.day; this.lookId = id;
    this.scene.background = new THREE.Color(L.sky); this.scene.fog = new THREE.Fog(L.fog, 70, 190);
    this.hemi.intensity = L.hemi; this.sun.intensity = L.sun; this.sun.color.set(L.sunC);
    const tex = sandTexture(L.sand[0], L.sand[1]); tex.repeat.set(1, 1);
    this.pitchMat.map = tex; this.pitchMat.needsUpdate = true;
    for (const t of this.torches) t.visible = L.torch;
    this.groundMat.color.set(id === 'night' ? 0x35402a : 0x6aa84a);
  }

  _buildArena() {
    const A = this.arena; const { hw, hl, gate, pocket } = PITCH;
    this.groundMat = new THREE.MeshLambertMaterial({ color: 0x6aa84a });
    const ground = mesh(new THREE.PlaneGeometry(300, 300), this.groundMat); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.05; A.add(ground);
    this.pitchMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const pitch = mesh(new THREE.PlaneGeometry(hw * 2 + 0.6, hl * 2 + 0.6), this.pitchMat); pitch.rotation.x = -Math.PI / 2; A.add(pitch);
    // stripes and lines on the sand
    const lineM = new THREE.MeshBasicMaterial({ color: 0xfff6dc, transparent: true, opacity: 0.55 });
    const stripeM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07, depthWrite: false });
    for (let i = -4; i < 4; i += 2) { const st = mesh(geo.box, stripeM, 0, 0.012, (i + 0.5) * 6.5, hw * 2, 0.01, 6.5); A.add(st); }
    A.add(mesh(geo.box, lineM, 0, 0.02, 0, hw * 2, 0.01, 0.22));
    const circ = mesh(new THREE.RingGeometry(4.6, 4.85, 40), lineM, 0, 0.02, 0); circ.rotation.x = -Math.PI / 2; A.add(circ);
    for (const s of [-1, 1]) { A.add(mesh(geo.box, lineM, 0, 0.02, s * (hl - 6), gate * 2 + 6, 0.01, 0.2)); for (const x of [-1, 1]) A.add(mesh(geo.box, lineM, x * (gate + 3), 0.02, s * (hl - 3), 0.2, 0.01, 6)); }
    // wooden fences
    const wood = M(0x8a5a2e), woodD = M(0x5a3a1a);
    const fenceRun = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0); const n = Math.max(1, Math.round(len / 3)); const ang = Math.atan2(x1 - x0, z1 - z0);
      const g = new THREE.Group(); g.position.set(x0, 0, z0); g.rotation.y = ang;
      for (let i = 0; i <= n; i++) g.add(mesh(geo.cyl, woodD, 0, 0.8, (i / n) * len, 0.34, 1.7, 0.34), mesh(geo.sphere, wood, 0, 1.7, (i / n) * len, 0.42, 0.42, 0.42));
      g.add(mesh(geo.box, wood, 0, 1.3, len / 2, 0.16, 0.22, len), mesh(geo.box, wood, 0, 0.7, len / 2, 0.16, 0.22, len));
      A.add(g);
    };
    fenceRun(-hw - 0.4, -hl - 0.4, -hw - 0.4, hl + 0.4); fenceRun(hw + 0.4, -hl - 0.4, hw + 0.4, hl + 0.4);
    for (const s of [-1, 1]) { fenceRun(-hw - 0.4, s * (hl + 0.4), -gate, s * (hl + 0.4)); fenceRun(gate, s * (hl + 0.4), hw + 0.4, s * (hl + 0.4)); }
    // gates (pockets with nets); the +z gate is the player's own, the -z gate the rivals'
    const nt = netTex();
    for (const s of [-1, 1]) {
      const col = s > 0 ? 0x2a6ae8 : RIVAL_COLOR;
      const gp = new THREE.Group(); gp.position.z = s * hl; A.add(gp);
      for (const x of [-gate, gate]) { gp.add(mesh(geo.cyl, M(0xf4f0e0), x, 1.9, 0, 0.7, 3.8, 0.7), mesh(geo.sphere, M(col), x, 3.9, 0, 0.9, 0.9, 0.9)); }
      gp.add(mesh(geo.box, M(0xf4f0e0), 0, 3.6, 0, gate * 2, 0.5, 0.5));
      const ban = mesh(geo.box, M(col, 0x111111), 0, 4.6, 0, gate * 2 - 0.4, 1.1, 0.12); gp.add(ban);
      const back = mesh(new THREE.PlaneGeometry(gate * 2, 3.4), new THREE.MeshBasicMaterial({ map: nt, transparent: true, side: THREE.DoubleSide, depthWrite: false }), 0, 1.7, s * pocket); gp.add(back);
      for (const x of [-gate, gate]) { const side = mesh(new THREE.PlaneGeometry(pocket, 3.4), new THREE.MeshBasicMaterial({ map: nt, transparent: true, side: THREE.DoubleSide, depthWrite: false }), x, 1.7, s * pocket / 2); side.rotation.y = Math.PI / 2; gp.add(side); }
      const floor = mesh(geo.box, M(col, 0x000000), 0, 0.02, s * pocket / 2, gate * 2, 0.02, pocket); floor.material = new THREE.MeshLambertMaterial({ color: col, transparent: true, opacity: 0.4 }); gp.add(floor);
    }
    // stands with a crowd, banners, castle
    this._buildStands();
    this._buildCastle();
    this.torches = [];
    for (const x of [-hw - 3, hw + 3]) for (const z of [-hl + 4, 0, hl - 4]) {
      const t = new THREE.Group(); t.position.set(x, 0, z); t.add(mesh(geo.cyl, M(0x4a3018), 0, 1.6, 0, 0.22, 3.2, 0.22)); const fl = mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xffa83a }), 0, 3.5, 0, 0.55, 1.1, 0.55); t.add(fl); t.userData.fl = fl; t.visible = false; A.add(t); this.torches.push(t);
    }
  }

  _buildStands() {
    const A = this.arena; const { hw, hl } = PITCH; const wood = M(0x7a4e28);
    const crowdN = [];
    const place = (x, z, rowsAlong, rows, along, face) => crowdN.push({ x, z, rowsAlong, rows, along, face });
    // side stands (x), far end (-z), near end (+z)
    place(-hw - 3.5, 0, 'z', 4, hl * 2, 1); place(hw + 3.5, 0, 'z', 4, hl * 2, -1);
    place(0, -hl - 3.5, 'x', 3, hw * 2 + 6, 1); place(0, hl + 3.5, 'x', 3, hw * 2 + 6, -1);
    const heads = []; const cols = [0xe84a4a, 0x4a8ae8, 0xf0c030, 0x4ac870, 0xe86ab8, 0xf2f2f2, 0x9a5ae8, 0xff8a2a];
    for (const st of crowdN) {
      for (let r = 0; r < st.rows; r++) {
        const off = 1.4 + r * 1.7; const hgt = 0.9 + r * 1.1;
        const horiz = st.rowsAlong === 'z'; const len = st.along;
        const tier = horiz ? mesh(geo.box, wood, st.x + st.face * -(-off + 1.4) * 0 + st.x * 0 + (st.x < 0 ? -1 : 1) * (off - 1.4), hgt / 2, 0, 1.7, hgt, len + 3) : mesh(geo.box, wood, 0, hgt / 2, st.z + (st.z < 0 ? -1 : 1) * (off - 1.4), len + 3, hgt, 1.7);
        A.add(tier);
        const n = Math.floor(len / 1.6);
        for (let i = 0; i < n; i++) {
          const a = -len / 2 + (i + (r % 2) * 0.5) * (len / n);
          const px = horiz ? st.x + (st.x < 0 ? -1 : 1) * (off - 1.4) : a; const pz = horiz ? a : st.z + (st.z < 0 ? -1 : 1) * (off - 1.4);
          heads.push({ x: px, y: hgt + 0.95, z: pz, c: cols[(i * 5 + r * 3 + (px > 0 ? 1 : 0)) % cols.length], ph: i * 1.7 + r });
        }
      }
    }
    const bodyG = geo.cone; const headG = geo.sphere;
    this.crowd = heads;
    this.crowdBody = new THREE.InstancedMesh(bodyG, new THREE.MeshLambertMaterial({ color: 0xffffff }), heads.length);
    this.crowdHead = new THREE.InstancedMesh(headG, new THREE.MeshLambertMaterial({ color: 0xf0c8a0 }), heads.length);
    const col = new THREE.Color(); heads.forEach((c, i) => { col.set(c.c); this.crowdBody.setColorAt(i, col); });
    A.add(this.crowdBody, this.crowdHead);
    this._crowdTick = 0; this._updateCrowd(0, 0);
    // banners on poles around the pitch
    const bcols = [0x2a6ae8, 0xd83a3a, 0xf0c030];
    for (const x of [-hw - 1, hw + 1]) for (let i = -2; i <= 2; i++) {
      const z = i * 10; A.add(mesh(geo.cyl, M(0x4a3018), x, 3.2, z, 0.18, 6.4, 0.18)); A.add(mesh(geo.box, M(bcols[(i + 2) % 3]), x + (x < 0 ? 0.7 : -0.7), 5.4, z, 1.3, 1.9, 0.08));
    }
  }

  _updateCrowd(t, cheer) {
    const m = new THREE.Matrix4(); const p = new THREE.Vector3(); const q = new THREE.Quaternion(); const sc = new THREE.Vector3(); const sc2 = new THREE.Vector3();
    this.crowd.forEach((c, i) => {
      const jump = Math.max(0, Math.sin(t * (cheer > 0 ? 9 : 2.2) + c.ph)) * (cheer > 0 ? 0.55 : 0.08);
      p.set(c.x, c.y - 0.45 + jump, c.z); sc.set(0.7, 1.0, 0.7); m.compose(p, q, sc); this.crowdBody.setMatrixAt(i, m);
      p.set(c.x, c.y + 0.28 + jump, c.z); sc2.set(0.5, 0.5, 0.5); m.compose(p, q, sc2); this.crowdHead.setMatrixAt(i, m);
    });
    this.crowdBody.instanceMatrix.needsUpdate = true; this.crowdHead.instanceMatrix.needsUpdate = true; if (this.crowdBody.instanceColor) this.crowdBody.instanceColor.needsUpdate = true;
  }

  _buildCastle() {
    const A = this.arena; const stone = M(0xb8b0a0), stoneD = M(0x9a9282), roof = M(0xc84a3a);
    for (const zs of [-1, 1]) {
      const z = zs * 62; const g = new THREE.Group(); g.position.z = z; A.add(g);
      g.add(mesh(geo.box, stone, 0, 6, 0, 70, 12, 4));
      for (let i = -17; i <= 17; i++) g.add(mesh(geo.box, stoneD, i * 2, 12.7, zs * 0, 1.2, 1.4, 4.2));
      for (const x of [-34, -14, 14, 34]) { g.add(mesh(geo.cyl, stone, x, 10, 0, 6, 20, 6), mesh(geo.cone, roof, x, 22.5, 0, 7.4, 6, 7.4), mesh(geo.cyl, M(0x4a3018), x, 28, 0, 0.14, 4, 0.14), mesh(geo.box, M(x < 0 ? 0x2a6ae8 : 0xd83a3a), x + 1.1, 28.6, 0, 2, 1.1, 0.06)); }
      g.add(mesh(geo.box, M(0x3a2a1a), 0, 3.5, zs * -2.05, 7, 7, 0.3), mesh(geo.cyl, M(0x3a2a1a), 0, 7, zs * -2.05, 7, 0.3, 0.3));
      g.add(mesh(geo.cyl, stone, 0, 14, 0, 9, 28, 9), mesh(geo.cone, roof, 0, 31, 0, 11, 8, 11));
    }
    // distant hills
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; A.add(mesh(geo.sphere, M(0x4a8a4a), Math.cos(a) * 110, 0, Math.sin(a) * 110, 60, 22, 60)); }
  }

  _buildParticles() {
    const N = 220; this.pN = N;
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    this.pGeo = new THREE.BufferGeometry(); this.pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); this.pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.pMat = new THREE.PointsMaterial({ size: 0.9, map: this.dotTex, vertexColors: true, transparent: true, depthWrite: false, sizeAttenuation: true });
    this.points = new THREE.Points(this.pGeo, this.pMat); this.points.frustumCulled = false; this.scene.add(this.points);
    this.parts = Array.from({ length: N }, () => ({ life: 0, x: 0, y: -50, z: 0, vx: 0, vy: 0, vz: 0, r: 1, g: 1, b: 1, grav: 0 })); this.pI = 0;
  }
  puff(x, y, z, n, color, spd = 3, grav = -2, up = 1.5) {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) { const p = this.parts[this.pI]; this.pI = (this.pI + 1) % this.pN; const a = Math.random() * Math.PI * 2; const s = (0.3 + Math.random()) * spd; Object.assign(p, { life: 0.5 + Math.random() * 0.7, x, y, z, vx: Math.cos(a) * s, vz: Math.sin(a) * s, vy: Math.random() * up * 2, r: c.r, g: c.g, b: c.b, grav }); }
  }
  _tickParticles(dt) {
    const pos = this.pGeo.attributes.position.array; const col = this.pGeo.attributes.color.array;
    this.parts.forEach((p, i) => {
      if (p.life > 0) { p.life -= dt; p.vy += p.grav * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; if (p.y < 0.05 && p.grav) { p.y = 0.05; p.vy *= -0.3; p.vx *= 0.8; p.vz *= 0.8; } }
      const a = p.life > 0 ? Math.min(1, p.life * 2) : 0;
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.life > 0 ? p.y : -50; pos[i * 3 + 2] = p.z; col[i * 3] = p.r * a; col[i * 3 + 1] = p.g * a; col[i * 3 + 2] = p.b * a;
    });
    this.pGeo.attributes.position.needsUpdate = true; this.pGeo.attributes.color.needsUpdate = true;
  }

  // ---- entities for a match
  _clearDyn() { for (const c of [...this.dyn.children]) this.dyn.remove(c); this.kMesh = []; this.barrelMesh = null; this.doorMesh = []; this.mudMesh = []; this.bouldMesh = new Map(); this.lastEvt = null; }

  _setupEntities() {
    this._clearDyn(); const m = this.m; const pc = (COLORS.find((c) => c.id === this.save.color) || COLORS[0]).hex;
    this.playerColor = pc;
    for (const k of m.knights) {
      const g = makeKnight(k.team === 0 ? pc : RIVAL_COLOR, k.human ? this.save.helmet : k.team === 0 ? 'bucket' : (k.slot === 0 ? 'horns' : k.slot === 1 ? 'crest' : 'bucket'), k.human && this.real);
      this.dyn.add(g); this.kMesh.push(g);
    }
    this.barrelMesh = makeBarrel(); this.dyn.add(this.barrelMesh);
    const shadow = mesh(new THREE.CircleGeometry(1.5, 20), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.03, 0); shadow.rotation.x = -Math.PI / 2; this.dyn.add(shadow); this.barrelShadow = shadow;
    const wood = M(0x6a4422), woodL = M(0x8a5a2e);
    for (const d of m.doors) {
      const g = new THREE.Group(); g.position.set(d.x, 0, d.z); const hf = d.half;
      g.add(mesh(geo.box, M(0x14100c), 0, 0.03, 0, hf * 2, 0.04, hf * 2)); // the pit
      g.add(mesh(geo.box, M(0x4a3018), 0, 0.06, -hf - 0.12, hf * 2 + 0.5, 0.14, 0.26), mesh(geo.box, M(0x4a3018), 0, 0.06, hf + 0.12, hf * 2 + 0.5, 0.14, 0.26), mesh(geo.box, M(0x4a3018), -hf - 0.12, 0.06, 0, 0.26, 0.14, hf * 2), mesh(geo.box, M(0x4a3018), hf + 0.12, 0.06, 0, 0.26, 0.14, hf * 2));
      const panels = [];
      for (const s of [-1, 1]) {
        const pv = new THREE.Group(); pv.position.set(s * hf, 0.1, 0); const pm = new THREE.Group(); pm.position.x = -s * hf / 2; pv.add(pm);
        pm.add(mesh(geo.box, wood, 0, 0, 0, hf, 0.12, hf * 2));
        for (let i = 0; i < 4; i++) pm.add(mesh(geo.box, woodL, 0, 0.07, (i - 1.5) * hf * 0.5, hf - 0.1, 0.02, 0.06));
        pm.add(mesh(geo.cyl, M(0x555a64), 0, 0.09, 0, 0.14, 0.04, 0.14));
        g.add(pv); panels.push(pv);
      }
      const tape = mesh(geo.box, new THREE.MeshBasicMaterial({ color: 0xff3a2a, transparent: true, opacity: 0 }), 0, 0.2, 0, hf * 2 + 0.7, 0.05, hf * 2 + 0.7); g.add(tape);
      this.dyn.add(g); this.doorMesh.push({ g, panels, tape, d });
    }
    for (const mu of m.muds) {
      const g = new THREE.Group(); g.position.set(mu.x, 0, mu.z);
      g.add(mesh(new THREE.CircleGeometry(mu.r, 28), new THREE.MeshLambertMaterial({ color: 0x5a3a20 }), 0, 0.03, 0)); g.children[0].rotation.x = -Math.PI / 2;
      const ring = mesh(new THREE.RingGeometry(mu.r - 0.4, mu.r, 28), new THREE.MeshLambertMaterial({ color: 0x3e2812 }), 0, 0.035, 0); ring.rotation.x = -Math.PI / 2; g.add(ring);
      for (let i = 0; i < 7; i++) { const a = i * 2.4; g.add(mesh(geo.sphere, M(0x7a5230), Math.cos(a) * mu.r * 0.6 * ((i % 3) / 3 + 0.4), 0.05, Math.sin(a) * mu.r * 0.6 * ((i % 3) / 3 + 0.4), 0.7, 0.18, 0.7)); }
      this.dyn.add(g);
    }
    this.chev = chevTex('#ffffff');
  }

  _boulderMesh(bo) {
    let o = this.bouldMesh.get(bo.id);
    if (!o) {
      const g = new THREE.Group(); const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), new THREE.MeshLambertMaterial({ color: 0x8a8478, flatShading: true })); g.add(rock);
      const lane = mesh(geo.box, new THREE.MeshBasicMaterial({ map: null, color: 0xff3a2a, transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.05, 0, PITCH.hw * 2 + 2, 0.02, 2.6);
      const ch = this.chev.clone(); ch.needsUpdate = true; ch.repeat.set(10, 1);
      const arrows = mesh(new THREE.PlaneGeometry(PITCH.hw * 2 + 2, 2.2), new THREE.MeshBasicMaterial({ map: ch, transparent: true, opacity: 0.8, color: 0xffe04a, depthWrite: false }), 0, 0.08, 0); arrows.rotation.x = -Math.PI / 2; if (bo.dir < 0) arrows.rotation.z = Math.PI;
      const wrap = new THREE.Group(); wrap.add(lane, arrows, g); this.dyn.add(wrap);
      o = { wrap, rock: g, lane, arrows, ch }; this.bouldMesh.set(bo.id, o);
    }
    return o;
  }

  // ---- layout, input
  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.fov = this.cw < this.ch ? 50 : 42; this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || this.mode !== 'play' || this.paused || this.stick) return;
      this.stick = { id: e.pointerId, ox: e.clientX, oy: e.clientY, x: 0, z: 0 }; this._stickUi(true, e);
    });
    this.root.addEventListener('pointermove', (e) => {
      const s = this.stick; if (!s || s.id !== e.pointerId) return;
      const R = this.u * 9; let dx = e.clientX - s.ox, dy = e.clientY - s.oy; const l = Math.hypot(dx, dy);
      if (l > R * 1.6) { s.ox += dx / l * (l - R * 1.6); s.oy += dy / l * (l - R * 1.6); dx = e.clientX - s.ox; dy = e.clientY - s.oy; }
      const m = Math.min(1, Math.hypot(dx, dy) / R); const dead = Math.hypot(dx, dy) < this.u * 1.2;
      const ll = Math.hypot(dx, dy) || 1; s.x = dead ? 0 : dx / ll * m; s.z = dead ? 0 : dy / ll * m; this._stickUi(true, e);
    });
    const end = (e) => { if (this.stick && this.stick.id === e.pointerId) { this.stick = null; this._stickUi(false); } };
    this.root.addEventListener('pointerup', end); this.root.addEventListener('pointercancel', end);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (this.mode !== 'play') return;
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', ' ', 'w', 'a', 's', 'd'].includes(k)) e.preventDefault();
      if (k === ' ' || k === 'shift') { if (!this.paused && this.m) this.m.pressDash(); return; }
      if (k === 'p' || k === 'escape') { this.togglePause(); return; }
      this.keys.add(k);
    };
    this._onKeyUp = (e) => this.keys.delete(e.key.toLowerCase());
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKeyUp);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _stickUi(on, e) {
    if (!this.stickEl) return;
    if (!on) { this.stickEl.style.display = 'none'; return; }
    const r = this.root.getBoundingClientRect(); const s = this.stick;
    this.stickEl.style.display = 'block'; this.stickEl.style.left = `${s.ox - r.left}px`; this.stickEl.style.top = `${s.oy - r.top}px`;
    const R = this.u * 9; this.knobEl.style.transform = `translate(${s.x * R}px,${s.z * R}px)`;
    void e;
  }

  _readInput() {
    const m = this.m; let x = 0, z = 0;
    const K = this.keys;
    if (K.has('arrowleft') || K.has('a')) x -= 1; if (K.has('arrowright') || K.has('d')) x += 1; if (K.has('arrowup') || K.has('w')) z -= 1; if (K.has('arrowdown') || K.has('s')) z += 1;
    if (x || z) { const l = Math.hypot(x, z); x /= l; z /= l; } else if (this.stick) { x = this.stick.x; z = this.stick.z; }
    m.input.x = x; m.input.z = z;
  }

  // ---- screens
  _clear() { this.layer.replaceChildren(); this.hudEls = null; this.stickEl = null; }
  _soundPill() { const pill = h('button', { class: 'bk-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 2200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }
  _persist() { this.post({ type: 'save', save: this.save }); }
  _tap(fn) { return () => { this.sound.play('tap'); fn(); }; }

  _demo() {
    this.real = false; this.m = new Match({ round: Math.floor(Math.random() * ROUNDS.length), diff: 'normal', seed: (Date.now() & 0xffff) + 1, autoPlayer: true, age: this.age });
    this.m.knights.forEach((k) => { k.human = false; });
    this._look(this.m.cfg.look); this._setupEntities();
  }

  showMenu() {
    this.mode = 'menu'; this.paused = false; this._clear(); this.sound.setMode('menu'); this.dyn.visible = true; if (this.preview) this.preview.visible = false;
    this._demo();
    const next = Math.min(this.save.unlocked - 1, ROUNDS.length - 1);
    this.layer.append(h('div', { class: 'bk-dim bk-clear' }, h('div', { class: 'bk-card' }, h('div', { class: 'bk-logo' }, '🛢️ ', I.t('title'), ' ⚔️'),
      h('div', { class: 'bk-coins' }, `🪙 ${I.num(this.save.coins)}`),
      h('div', { class: 'bk-menu' },
        h('button', { class: 'bk-btn', onclick: this._tap(() => this.start(next)) }, '▶ ', I.t('play')),
        h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showRounds()) }, '🏆 ', I.t('rounds')),
        h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showShop()) }, '🛡️ ', I.t('knights')),
        h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showSettings()) }, '⚙️ ', I.t('settings')),
        h('button', { class: 'bk-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('quit'))))));
    this._soundPill();
  }

  showRounds() {
    this._clear(); const ar = I.getLang() !== 'en';
    const cards = ROUNDS.map((r, i) => {
      const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i] || 0;
      return h('button', { class: `bk-lv${lock ? ' lock' : ''}${r.final ? ' fin' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } },
        h('i', {}, lock ? '🔒' : r.final ? '👑' : I.num(i + 1)), h('span', { class: 'bk-lvn' }, ar ? r.ar : r.en), h('span', {}, '★'.repeat(st) + '☆'.repeat(3 - st)));
    });
    this.layer.append(h('div', { class: 'bk-dim' }, h('div', { class: 'bk-card' }, h('div', { class: 'bk-title' }, '🏆 ', I.t('rounds')), h('div', { class: 'bk-lvs' }, cards), h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showMenu()) }, I.t('back')))));
    this.hintEl = h('div', { class: 'bk-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  showSettings() {
    this._clear();
    const snd = h('button', { class: 'bk-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this._persist(); snd.textContent = `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`);
    const dbtn = (id) => h('button', { class: `bk-seg${this.save.diff === id ? ' on' : ''}`, onclick: () => { this.save.diff = id; this._persist(); this.showSettings(); } }, I.t(id));
    this.layer.append(h('div', { class: 'bk-dim' }, h('div', { class: 'bk-card' }, h('div', { class: 'bk-title' }, '⚙️ ', I.t('settings')), snd,
      h('div', { class: 'bk-small' }, I.t('diff')), h('div', { class: 'bk-segs' }, dbtn('easy'), dbtn('normal'), dbtn('hard')),
      h('div', { class: 'bk-small' }, I.t('how')), h('div', { class: 'bk-small' }, I.t('how2')), h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showMenu()) }, I.t('back')))));
  }

  showShop(tab = 'color') {
    this.mode = 'shop'; this._clear(); this.dyn.visible = false; this._ensurePreview();
    const ar = I.getLang() !== 'en';
    const coins = h('div', { class: 'bk-coins' }, `🪙 ${I.num(this.save.coins)}`);
    const list = tab === 'color' ? COLORS : HELMETS; const owned = tab === 'color' ? this.save.owned.colors : this.save.owned.helmets; const cur = tab === 'color' ? this.save.color : this.save.helmet;
    const items = list.map((it) => {
      const own = owned.includes(it.id); const on = cur === it.id;
      const sw = tab === 'color' ? h('span', { class: 'bk-sw', style: `background:#${it.hex.toString(16).padStart(6, '0')}` }) : h('span', { class: 'bk-sw hm' }, { bucket: '🪖', plume: '🪶', crest: '🏛️', horns: '🐂', jester: '🤡', crown: '👑' }[it.id]);
      return h('button', { class: `bk-item${on ? ' on' : ''}${own ? '' : ' buy'}`, onclick: () => {
        if (own) { equip(this.save, tab, it.id); this.sound.play('tap'); } else { const r = buy(this.save, tab, it.id); if (!r.ok) { this.hint(I.t('notEnough')); this.sound.play('warn'); return; } equip(this.save, tab, it.id); this.sound.play('coin'); }
        this._persist(); this._previewRebuild(); this.showShop(tab);
      } }, sw, h('span', {}, tab === 'color' ? (ar ? it.ar : it.en) : (ar ? it.ar : it.en)), h('small', {}, on ? `✓ ${I.t('equipped')}` : own ? '' : `🪙 ${I.num(it.price)}`));
    });
    this.layer.append(h('div', { class: 'bk-dim bk-bottom' }, h('div', { class: 'bk-card wide' }, coins,
      h('div', { class: 'bk-segs' }, h('button', { class: `bk-seg${tab === 'color' ? ' on' : ''}`, onclick: () => this.showShop('color') }, I.t('colors')), h('button', { class: `bk-seg${tab === 'helmet' ? ' on' : ''}`, onclick: () => this.showShop('helmet') }, I.t('helmets'))),
      h('div', { class: 'bk-items' }, items), h('button', { class: 'bk-btn dark', onclick: this._tap(() => this.showMenu()) }, I.t('back')))));
    this.hintEl = h('div', { class: 'bk-hint', style: 'top:calc(var(--u)*12)' }); this.layer.append(this.hintEl); this._soundPill();
  }
  _ensurePreview() {
    if (!this.preview) { this.preview = new THREE.Group(); this.scene.add(this.preview); }
    this._previewRebuild(); this.preview.visible = true;
  }
  _previewRebuild() {
    for (const c of [...this.preview.children]) this.preview.remove(c);
    const pc = (COLORS.find((c) => c.id === this.save.color) || COLORS[0]).hex; const k = makeKnight(pc, this.save.helmet, false); k.scale.setScalar(1.1); this.preview.add(k); this.previewKnight = k;
    const pod = mesh(geo.cyl, M(0x8a5a2e), 0, -0.1, 0, 5, 0.3, 5); this.preview.add(pod);
  }

  start(i) {
    this.round = i; this.real = true;
    this.m = new Match({ round: i, diff: this.save.diff, seed: (Date.now() & 0xffff) + 1, age: this.age });
    this._look(this.m.cfg.look); this.dyn.visible = true; if (this.preview) this.preview.visible = false;
    this._setupEntities(); this.mode = 'play'; this.paused = false; this.over = false; this.overT = 0; this.stick = null; this.keys.clear(); this.cheer = 0; this.lastScore = [0, 0];
    this._clear(); this.sound.setMode('play');
    this._hud();
    this.camSnap = true;
    const ar = I.getLang() !== 'en'; const r = this.m.cfg;
    this._banner(`${I.t('round')} ${I.num(i + 1)}`, ar ? r.ar : r.en, 2400);
  }

  _hud() {
    const pause = h('button', { class: 'bk-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.scoreA = h('b', {}, '0'); this.scoreB = h('b', {}, '0'); this.timeEl = h('span', { class: 'bk-time' }, '2:00');
    const board = h('div', { class: 'bk-board' }, h('div', { class: 'bk-score' }, h('i', { class: 'bk-dot', style: `background:#${this.playerColor.toString(16).padStart(6, '0')}` }), this.scoreA, h('em', {}, '-'), this.scoreB, h('i', { class: 'bk-dot', style: `background:#${RIVAL_COLOR.toString(16).padStart(6, '0')}` })), this.timeEl);
    this.dashFill = h('div', { class: 'bk-dashfill' });
    this.dashBtn = h('button', { class: 'bk-dash', 'aria-label': I.t('dash'), onpointerdown: (e) => { e.preventDefault(); if (this.m && !this.paused) this.m.pressDash(); } }, this.dashFill, h('span', {}, '🛡️'), h('small', {}, I.t('dash')));
    this.knobEl = h('div', { class: 'bk-knob' }); this.stickEl = h('div', { class: 'bk-stick' }, this.knobEl);
    this.bannerEl = h('div', { class: 'bk-banner' }); this.hintEl = h('div', { class: 'bk-hint', style: 'top:calc(var(--u)*22)' });
    this.layer.append(h('div', { class: 'bk-top' }, pause, board, h('div', { style: 'width:calc(var(--u)*10.5)' })), this.stickEl, this.dashBtn, this.bannerEl, this.hintEl);
    this._soundPill(); this.hint(I.t('how'), 4200);
  }

  _banner(big, small, ms = 1800, color = '#ffd23a') {
    const b = this.bannerEl; if (!b) return; b.replaceChildren(...[h('div', { class: 'bk-bigtxt', style: `color:${color}` }, big), small ? h('div', { class: 'bk-subtxt' }, small) : null].filter(Boolean));
    b.classList.remove('show'); void b.offsetWidth; b.classList.add('show'); clearTimeout(this._bt); this._bt = setTimeout(() => b.classList.remove('show'), ms);
  }

  togglePause() {
    if (this.mode !== 'play' || this.over) return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'bk-dim' }, h('div', { class: 'bk-card' }, h('div', { class: 'bk-title' }, I.t('paused')),
        h('button', { class: 'bk-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')), h('button', { class: 'bk-btn dark', onclick: () => { this.sound.play('tap'); this.start(this.round); } }, '🔄 ', I.t('restart')), h('button', { class: 'bk-btn dark', onclick: () => { this.sound.play('tap'); this.showMenu(); } }, '🏠 ', I.t('home'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) { this.pauseEl.remove(); this.pauseEl = null; }
  }

  _results(res) {
    const ar = I.getLang() !== 'en'; this.over = true;
    const before = this.save.stars[this.round] || 0;
    applyResult(this.save, this.round, res); this._persist();
    this.sound.play(res.win ? 'win' : 'lose'); this.sound.setMode(null);
    const stars = h('div', { class: 'bk-stars' }, [1, 2, 3].map((n) => h('span', { class: n <= res.stars ? '' : 'off', style: `animation-delay:${n * 0.25}s` }, '⭐')));
    const final = this.round === ROUNDS.length - 1;
    void before; void ar;
    this.layer.append(h('div', { class: 'bk-dim' }, h('div', { class: 'bk-card res' },
      h('div', { class: 'bk-logo', style: `color:${res.win ? '#ffd23a' : res.draw ? '#bcd' : '#ff8a6a'}` }, res.win ? I.t('victory') : res.draw ? I.t('draw') : I.t('lose')),
      h('div', { class: 'bk-bigscore' }, `${I.num(res.goals[0])} - ${I.num(res.goals[1])}`), stars,
      h('div', { class: 'bk-small' }, `${I.t('earned')} 🪙 ${I.num(res.coins)}`, res.win ? ` · ${I.t(this.age && this.gender === 'girl' ? 'win_f' : 'win_m')}` : ''),
      res.win && !final ? h('button', { class: 'bk-btn', onclick: () => { this.sound.play('tap'); this.start(this.round + 1); } }, '▶ ', I.t('next')) : null,
      h('button', { class: res.win ? 'bk-btn alt' : 'bk-btn', onclick: () => { this.sound.play('tap'); this.start(this.round); } }, '🔄 ', I.t('restart')),
      h('button', { class: 'bk-btn dark', onclick: () => { this.sound.play('tap'); this.showRounds(); } }, '🏆 ', I.t('rounds')),
      h('button', { class: 'bk-btn dark', onclick: () => { this.sound.play('tap'); this.showMenu(); } }, '🏠 ', I.t('home')))));
    if (res.win) for (let i = 0; i < 40; i++) this.puff(this.camT.x + (Math.random() - 0.5) * 14, 8 + Math.random() * 5, this.camT.z - 6 + Math.random() * 6, 1, [0xffd23a, 0xff5a8a, 0x5ae8ff, 0x7af07a][i % 4], 2, -3, 0.5);
  }

  // ---- events, frame
  _events(evs) {
    const m = this.m; const live = this.real;
    for (const e of evs) {
      const k = e.id !== undefined && m.knights[e.id];
      switch (e.type) {
        case 'count': if (live) { this.sound.play('count'); this._banner(I.num(e.n), '', 900, '#fff'); } break;
        case 'go': if (live) { this.sound.play('go'); this.sound.play('whistle'); this._banner(I.t('go'), '', 900, '#7af07a'); } break;
        case 'dash': if (k) { this.puff(k.x, 0.3, k.z, 8, 0xe8d8b0, 2.5); if (live) this.sound.play('dash'); } break;
        case 'barrelHit': { const b = m.barrel; this.puff(b.x, 0.8, b.z, 5 + Math.round(e.power * 10), e.dash ? 0xffe9a0 : 0xe8d8b0, 3 + e.power * 4); if (live) { this.sound.play('thud', e.power); if (e.dash) this.sound.play('clang'); } if (e.power > 0.5) this.shakeT = Math.max(this.shakeT, 0.25 + e.power * 0.2); break; }
        case 'fence': if (live) this.sound.play('fence', e.power); break;
        case 'stun': if (k) { this.puff(k.x, 1.8, k.z, 14, 0xffe04a, 4, -4, 2); if (live) this.sound.play('stun'); } break;
        case 'clash': if (live) this.sound.play('clang'); break;
        case 'clang': if (live) this.sound.play('clang'); break;
        case 'doorWarn': if (live) this.sound.play('creak'); break;
        case 'doorOpen': if (live) this.sound.play('dooropen'); break;
        case 'fall': if (k) { this.puff(k.x, 0.4, k.z, 12, 0x6a4a2a, 3); if (live) this.sound.play('doorfall'); } break;
        case 'boulderWarn': if (live) this.sound.play('warn'); break;
        case 'boulderGo': if (live) this.sound.play('rumble'); break;
        case 'goal': {
          this.cheer = 3; this.goalTeam = e.team; this.shakeT = 0.5;
          if (live) { this.sound.play(e.team === 0 ? 'goal' : 'conceded'); if (e.team !== 0) this.sound.swell(0.07, 1.6); this._banner(I.t('goal'), `${I.num(e.score[0])} - ${I.num(e.score[1])}`, 2300, e.team === 0 ? '#ffd23a' : '#ff8a8a'); }
          const gz = e.team === 0 ? -PITCH.hl : PITCH.hl; for (let i = 0; i < 70; i++) this.puff((Math.random() - 0.5) * 10, 1 + Math.random() * 3, gz + (e.team === 0 ? 1 : -1) * Math.random() * 3, 1, [0xffd23a, 0xff5a8a, 0x5ae8ff, 0x7af07a, 0xffffff][i % 5], 5, -4, 3);
          break;
        }
        case 'overtime': if (live) { this._banner(I.t('overtime'), '', 2000, '#ff8a3a'); this.sound.play('whistle'); } break;
        case 'over': if (live) { this.over = true; this.overT = 1.2; this.resEv = e.result; this.sound.play('whistle'); } break;
        default: break;
      }
    }
  }

  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    const m = this.m;
    if (m && this.dyn.visible) {
      if (this.mode === 'play' && !this.paused) { if (!this.over || this.overT > 0) { this._readInput(); this._events(m.step(dt)); } }
      else if (this.mode === 'menu') { this._events(m.step(dt)); if (m.phase === 'over') this._demo(); }
      if (this.mode === 'play' && this.over && this.resEv && !this.resShown) { this.overT -= dt; if (this.overT <= 0) { this.resShown = true; this._results(this.resEv); } }
      if (this.mode === 'play' && !this.over) this.resShown = false;
      if (this.mode === 'play') this._hudUpdate();
    }
    this.cheer = Math.max(0, this.cheer - dt); this.shakeT = Math.max(0, this.shakeT - dt);
    this._crowdTick -= dt; if (this._crowdTick <= 0) { this._crowdTick = 1 / 20; this._updateCrowd(this.clock, this.cheer); }
    for (const t of this.torches) if (t.visible) t.userData.fl.scale.set(0.55 + Math.sin(this.clock * 12 + t.position.z) * 0.08, 1.1 + Math.sin(this.clock * 9 + t.position.x) * 0.2, 0.55);
    this._render(dt);
  }

  _hudUpdate() {
    const m = this.m;
    if (this.scoreA.textContent !== String(m.score[0])) this.scoreA.textContent = I.num(m.score[0]);
    if (this.scoreB.textContent !== String(m.score[1])) this.scoreB.textContent = I.num(m.score[1]);
    const tl = Math.ceil(Math.max(0, m.timeLeft)); const txt = `${Math.floor(tl / 60)}:${String(tl % 60).padStart(2, '0')}`;
    const full = m.overtime ? `⏱ ${txt}` : txt; if (this.timeEl.textContent !== (I.getLang() === 'en' ? full : full.replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]))) this.timeEl.textContent = I.getLang() === 'en' ? full : full.replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
    this.timeEl.classList.toggle('low', tl <= 15 && !m.overtime);
    const p = m.knights[0]; const f = clamp(1 - p.cd / (this.age <= 4 ? 1.1 : 1.5), 0, 1);
    this.dashFill.style.setProperty('--f', `${Math.round(f * 100)}%`); this.dashBtn.classList.toggle('ready', f >= 1);
  }

  _syncKnight(k, g, dt) {
    const u = g.userData; const sp = Math.hypot(k.vx, k.vz);
    g.position.set(k.x, 0, k.z);
    const faceA = Math.atan2(k.fx, k.fz); let d = faceA - g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); g.rotation.y += d * Math.min(1, dt * 14);
    u.phase += sp * dt * 1.7; const sw = Math.sin(u.phase) * Math.min(1, sp / 6);
    const stunned = k.stun > 0; const fell = !!k.fall && stunned;
    const celebrate = this.cheer > 0 && this.m.phase === 'goal'; const won = celebrate && k.team === this.goalTeam;
    let lean = k.dash > 0 ? 0.55 : Math.min(0.25, sp * 0.03);
    u.legL.rotation.x = sw * 0.9; u.legR.rotation.x = -sw * 0.9;
    u.armL.rotation.x = k.dash > 0 ? 0.9 : -sw * 0.8; u.armR.rotation.x = k.dash > 0 ? 0.9 : sw * 0.8;
    u.armL.rotation.z = 0; u.armR.rotation.z = 0;
    let by = Math.abs(sw) * 0.1 * Math.min(1, sp / 6); let rx = lean, rz = 0, sc = 1;
    if (won) { by = Math.abs(Math.sin(this.clock * 8 + k.id)) * 0.9; u.armL.rotation.x = u.armR.rotation.x = -2.8; u.armL.rotation.z = -0.3; u.armR.rotation.z = 0.3; rx = 0; }
    else if (celebrate) { rx = 0.35; u.armL.rotation.x = u.armR.rotation.x = 0.2; by = 0; }
    if (stunned && !fell) { const prog = 1 - k.stun / (k.stunDur || 1); const spin = Math.min(1, prog * 5); rx = -spin * 1.45 + Math.sin(this.clock * 20) * 0.04 * (1 - spin); rz = Math.sin(this.clock * 7) * 0.12 * spin; by = -0.15 * spin; u.legL.rotation.x = u.legR.rotation.x = 0.3; u.armL.rotation.x = u.armR.rotation.x = -1.6; if (prog < 0.2) rz = prog * 18; }
    if (fell) { const prog = 1 - k.stun / (k.stunDur || 1); sc = prog < 0.2 ? 1 - prog * 5 : prog > 0.85 ? (prog - 0.85) / 0.15 : 0.001; if (k.fall) g.position.set(k.fall.x + (k.x - k.fall.x), 0, k.z); }
    u.inner.rotation.x = rx; u.inner.rotation.z = rz; u.inner.position.y = by;
    g.scale.set(1, Math.max(0.001, sc), 1); u.shadow.scale.setScalar(Math.max(0.5, 1 - by * 0.4));
    u.stars.visible = stunned && !fell; if (u.stars.visible) u.stars.children.forEach((s, i) => { const a = this.clock * 5 + i * 2.1; s.position.set(Math.cos(a) * 0.7, Math.sin(this.clock * 8 + i) * 0.1, Math.sin(a) * 0.7); s.rotation.y = a * 2; });
    u.inner.visible = !(fell && sc < 0.01);
    if (u.marker) { u.marker.userData.arrow.position.y = 3.5 + Math.sin(this.clock * 6) * 0.2; u.marker.visible = !stunned; }
    if (k.mud && sp > 1 && Math.random() < dt * 8) this.puff(k.x, 0.2, k.z, 1, 0x6a4a2a, 1.2, -3);
  }

  _render(dt) {
    const m = this.m; const play = this.mode === 'play' || this.mode === 'menu';
    if (m && this.dyn.visible) {
      m.knights.forEach((k, i) => this._syncKnight(k, this.kMesh[i], dt));
      const b = m.barrel; const bm = this.barrelMesh; const u = bm.userData;
      bm.position.set(b.x, u.y, b.z); const sp = Math.hypot(b.vx, b.vz);
      if (sp > 0.8) { const ya = Math.atan2(b.vx, b.vz); let d = ya - u.yaw.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); u.yaw.rotation.y += d * Math.min(1, dt * 10); }
      u.roll.rotation.x += sp * dt / BARREL_R;
      this.barrelShadow.position.set(b.x, 0.03, b.z);
      if (sp > 7 && Math.random() < dt * 14) this.puff(b.x, 0.2, b.z, 1, 0xe8d8b0, 1.2, -1);
      for (const dm of this.doorMesh) {
        const d = dm.d; let open = d.state === 'open' ? 1 : 0; let shake = 0;
        if (d.state === 'open') open = Math.min(1, (2.4 - d.t) * 5) * Math.min(1, d.t * 3); // swing open, then close
        if (d.state === 'warn') { shake = Math.sin(this.clock * 40) * 0.04; open = 0; }
        dm.panels[0].rotation.z = open * 1.45 + shake; dm.panels[1].rotation.z = -open * 1.45 - shake;
        dm.tape.material.opacity = d.state === 'warn' ? 0.35 + Math.sin(this.clock * 16) * 0.3 : 0; dm.tape.scale.y = 1;
      }
      const seen = new Set();
      for (const bo of m.boulders) {
        const o = this._boulderMesh(bo); seen.add(bo.id);
        o.wrap.position.set(0, 0, bo.z);
        if (bo.state === 'warn') { o.lane.material.opacity = 0.18 + (Math.sin(this.clock * 14) * 0.5 + 0.5) * 0.3; o.arrows.visible = true; o.ch.offset.x = -this.clock * 0.8 * bo.dir; o.rock.position.set(-bo.dir * (PITCH.hw + 1.4), 1.1, 0); o.rock.rotation.z += dt; }
        else { o.lane.material.opacity = 0.1; o.arrows.visible = false; o.rock.position.set(bo.x, 1.1, 0); o.rock.rotation.z -= bo.dir * dt * 10; o.rock.rotation.x += dt * 2; if (Math.random() < dt * 20) this.puff(bo.x, 0.3, bo.z, 1, 0xb8a888, 1.5, -2); }
      }
      for (const [id, o] of this.bouldMesh) if (!seen.has(id)) { this.dyn.remove(o.wrap); this.bouldMesh.delete(id); }
    }
    this._tickParticles(dt);
    this._camera(dt, play);
    this.renderer.render(this.scene, this.camera);
  }

  _camera(dt, play) {
    const cam = this.camera; const asp = this.cw / this.ch; const portrait = asp < 1;
    if (this.mode === 'shop' && this.preview) {
      this.preview.rotation.y += dt * 0.8; cam.position.set(0, 3, 13); cam.lookAt(0, portrait ? -1.2 : -1.8, 0); return;
    }
    const m = this.m; if (!m) return;
    const vf = (cam.fov * Math.PI) / 180; const hf = 2 * Math.atan(Math.tan(vf / 2) * asp);
    const needW = portrait ? 20 : 34; const needD = portrait ? 27 : 32;
    const L = Math.max(needW / 2 / Math.tan(hf / 2), needD / 2 / Math.tan(vf / 2) * 0.95);
    const pitch = 0.95; // radians above the horizon
    const b = m.barrel; const p = m.knights[0];
    let tx = lerp(b.x, p.x, this.real ? 0.35 : 0), tz = lerp(b.z, p.z, this.real ? 0.35 : 0);
    const lim = Math.max(0, PITCH.hl - (portrait ? 14 : 8)); tz = clamp(tz, -lim, lim);
    const lx = Math.max(0, PITCH.hw - (portrait ? 3 : 5)); const slack = portrait ? 1 : 0.4; tx = clamp(tx * slack, -lx, lx);
    if (this.mode === 'menu') { tx = Math.sin(this.clock * 0.1) * 3; tz = Math.sin(this.clock * 0.15) * 8; }
    const k = this.camSnap ? 1 : Math.min(1, dt * 3.5); this.camSnap = false;
    this.camT.x = lerp(this.camT.x, tx, k); this.camT.z = lerp(this.camT.z, tz, k);
    const sh = this.shakeT > 0 ? this.shakeT * 0.35 : 0;
    cam.position.set(this.camT.x + (Math.random() - 0.5) * sh, Math.sin(pitch) * L, this.camT.z + Math.cos(pitch) * L + (Math.random() - 0.5) * sh);
    cam.lookAt(this.camT.x, 0, this.camT.z - 1);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() {
    this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKeyUp);
    this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove();
  }
}

const EXTRA_CSS = `
.bk-logo{font-size:calc(var(--u)*7.4)!important}
.bk-dim.bk-clear{background:rgba(30,15,5,.28)}
.bk-dim.bk-bottom{align-items:flex-end;background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(20,10,0,.45))}
.bk-card.wide{width:calc(var(--u)*115);max-width:100%}
.bk-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.bk-coins{font-weight:900;font-size:calc(var(--u)*4.4);background:rgba(0,0,0,.3);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*3.5)}
.bk-lv{border:calc(var(--u)*.45) solid #fff;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:linear-gradient(180deg,#e8a84a,#b8742a);box-shadow:0 calc(var(--u)*.6) 0 #6a3a10;min-height:calc(var(--u)*19);justify-content:center}
.bk-lv i{font-style:normal;font-size:calc(var(--u)*6)}.bk-lv .bk-lvn{font-size:calc(var(--u)*2.5);line-height:1.1;text-align:center}.bk-lv span:last-child{color:#ffe04a;font-size:calc(var(--u)*3)}
.bk-lv.fin{background:linear-gradient(180deg,#ffe04a,#d89a1a);color:#4a2a00}.bk-lv.fin span:last-child{color:#8a3a00}
.bk-lv.lock{filter:grayscale(1) brightness(.75)}
.bk-lvs{grid-template-columns:repeat(3,1fr)}
@media (orientation:landscape){.bk-lvs{grid-template-columns:repeat(5,1fr)}}
.bk-board{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);direction:ltr}
.bk-score{display:flex;align-items:center;gap:calc(var(--u)*1.6);background:linear-gradient(180deg,#5a3a1a,#2a1608);border:calc(var(--u)*.55) solid #ffd23a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*.7) calc(var(--u)*3);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,0,0,.45)}
.bk-score b{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;min-width:calc(var(--u)*5);text-align:center;line-height:1}.bk-score em{font-style:normal;color:#ffd23a;font-size:calc(var(--u)*6);font-weight:900}
.bk-dot{display:block;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;border:calc(var(--u)*.4) solid #fff}
.bk-time{background:rgba(20,10,0,.72);color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);border-radius:999px;padding:calc(var(--u)*.2) calc(var(--u)*3);border:calc(var(--u)*.3) solid #ffd23a}.bk-time.low{color:#ff8a6a;animation:bkpulse .6s infinite}
.bk-dash{position:absolute;right:max(calc(var(--u)*4),env(safe-area-inset-right));bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:calc(var(--u)*.9) solid #fff;font-family:inherit;color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#6a3a1a;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5);overflow:hidden;padding:0;pointer-events:auto;touch-action:none}
.bk-dashfill{position:absolute;inset:0;--f:100%;background:conic-gradient(#ffb02a var(--f),rgba(40,20,5,.85) 0)}
.bk-dash span,.bk-dash small{position:relative}.bk-dash span{font-size:calc(var(--u)*8)}.bk-dash small{font-size:calc(var(--u)*3.2)}
.bk-dash.ready{animation:bkpulse 1s infinite;box-shadow:0 0 calc(var(--u)*3) #ffd23a}
.bk-stick{position:absolute;display:none;width:0;height:0;pointer-events:none}.bk-stick:before{content:'';position:absolute;left:calc(var(--u)*-14.4);top:calc(var(--u)*-14.4);width:calc(var(--u)*28.8);height:calc(var(--u)*28.8);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.12)}
.bk-knob{position:absolute;left:calc(var(--u)*-5);top:calc(var(--u)*-5);width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;background:rgba(255,255,255,.7);box-shadow:0 0 calc(var(--u)*1.5) rgba(0,0,0,.4)}
.bk-banner{position:absolute;left:0;right:0;top:34%;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1);opacity:0;pointer-events:none;transform:scale(.6)}
.bk-banner.show{animation:bkpop 2s ease-out forwards}
.bk-bigtxt{font-size:calc(var(--u)*17);font-weight:900;-webkit-text-stroke:calc(var(--u)*1) rgba(40,15,0,.95);paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);line-height:1}
.bk-subtxt{font-size:calc(var(--u)*6);font-weight:900;color:#fff;background:rgba(30,15,0,.6);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*4)}
@keyframes bkpop{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1.12)}22%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(1)}}
@keyframes bkpulse{50%{transform:scale(1.07)}}
.bk-card.res{gap:calc(var(--u)*1.2)}.bk-stars{direction:ltr}
@media (orientation:landscape){.bk-card.res{display:grid;grid-template-columns:1fr 1fr;width:calc(var(--u)*130);align-items:center}.bk-card.res>.bk-logo,.bk-card.res>.bk-bigscore,.bk-card.res>.bk-stars,.bk-card.res>.bk-small{grid-column:1/3}.bk-card.res .bk-btn{min-height:calc(var(--u)*9);font-size:calc(var(--u)*4)}.bk-card.res .bk-bigscore{font-size:calc(var(--u)*8)}.bk-card.res .bk-stars{font-size:calc(var(--u)*7)}.bk-card.res .bk-logo{font-size:calc(var(--u)*6)!important}}
.bk-bigscore{font-size:calc(var(--u)*12);font-weight:900;color:#fff;direction:ltr}
.bk-stars{font-size:calc(var(--u)*11)}.bk-stars span{display:inline-block;animation:bkpop2 .5s both}.bk-stars .off{filter:grayscale(1);opacity:.3}
@keyframes bkpop2{from{transform:scale(0) rotate(-90deg)}to{transform:scale(1)}}
.bk-segs{display:flex;gap:calc(var(--u)*1.4);width:100%}.bk-seg{flex:1;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);color:#fff;border:calc(var(--u)*.4) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2);cursor:pointer;background:rgba(0,0,0,.3);min-height:calc(var(--u)*10)}.bk-seg.on{background:linear-gradient(180deg,#ffd23a,#e0951a);color:#4a2a00}
.bk-items{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.4);width:100%}
.bk-item{font-family:inherit;font-weight:900;color:#fff;border:calc(var(--u)*.4) solid rgba(255,255,255,.6);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*.4);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:rgba(0,0,0,.28);font-size:calc(var(--u)*2.7);min-height:calc(var(--u)*17)}
.bk-item.on{border-color:#ffd23a;background:rgba(255,210,58,.25)}.bk-item small{font-size:calc(var(--u)*2.6);color:#ffe04a}
.bk-sw{width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);border-radius:50%;border:calc(var(--u)*.5) solid #fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}.bk-sw.hm{background:rgba(255,255,255,.15)}
@media (orientation:landscape){.bk-items{grid-template-columns:repeat(8,1fr)}.bk-card.wide{width:calc(var(--u)*150)}}
`;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.BarrelKnights = api;
export default api;
void MATCH_TIME; void KNIGHT_R; void HELMETS;
