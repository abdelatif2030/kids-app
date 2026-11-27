// «سبينو الصغير» — Little Spino. Entry: window.DinoGrow.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D (three.js, top-down 3/4 camera) eat-and-grow game starring a baby Spinosaurus — Egypt's own dinosaur. Eat what is weaker than you
// (green/white numbers), run from what is stronger (red numbers), evolve through real Spinosaurus growth stages across real fossil places
// (Bahariya Oasis, Wadi El Hitan, the Black Desert), and in the Black Desert outgrow the giant boss. Original cartoon dinos built from
// primitives in code, no gore (eaten creatures vanish in sparkles and leaves), sound synthesised in code. No network, no ads, no tracking.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Dino, LEVELS, STAGES, SPECIES, stageOf, zoomFor, toneOf, normalizeSave, rng } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const DINO_CLIPS = { pickup: 3, charge: 2, bump: 2, near: 1, trick: 3, win: 2, count: 1 };

const S = {
  title: ['سبينو الصغير', 'LITTLE SPINO'], play: ['العب', 'PLAY'], levels: ['المراحل', 'LEVELS'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'],
  back: ['رجوع', 'Back'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], restart: ['إعادة', 'RESTART'], home: ['الرئيسية', 'HOME'], sound: ['الصوت', 'Sound'],
  tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], select: ['اختار المرحلة', 'SELECT LEVEL'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  how: ['اسحب بإصبعك عشان تتحرك، وزرار الانقضاض عشان تمسك الهربان', 'Drag to move, and tap POUNCE to catch fast prey'],
  complete: ['المرحلة خلصت! 🏆', 'LEVEL COMPLETE! 🏆'], time: ['الوقت', 'Time'], power: ['القوة', 'Power'], eaten: ['اللي أكلته', 'Eaten'], bumps: ['خبطات', 'Bumps'],
  next: ['المرحلة الجاية', 'NEXT LEVEL'], again: ['العب تاني', 'PLAY AGAIN'], all: ['خلّصت كل المراحل! أنت أقوى سبينو 🦖', 'You beat every level! Strongest Spino! 🦖'],
  album: ['من ألبوم سبينو', 'From the Spino album'],
  pounce: ['انقضّ', 'POUNCE'], boss: ['الزعيم', 'BOSS'], goal: ['الهدف', 'Goal'], next_stage: ['التطور الجاي', 'Next'], max: ['أقوى شكل!', 'Max form!'],
  h_eat: ['كُل الأخضر والأبيض عشان تكبر!', 'Eat GREEN and WHITE to grow!'], h_red: ['الأحمر أكبر منك - اجري!', 'RED IS BIGGER - RUN!'],
  h_pounce: ['اضغط انقضّ عشان تمسك الهربان!', 'Tap POUNCE to catch fast prey!'], h_evolve: ['تطوّرت! بقيت', 'You evolved! Now a'],
  h_bossNeed: ['الزعيم قوته ١٠٠ - كبّر الأول!', 'The boss has 100 power - grow first!'], h_bossReady: ['بقيت أقوى منه - عضّه!', 'Stronger now - BITE the boss!'],
  h_stomp: ['اطلع بره الدايرة الحمرا!', 'Get out of the red circle!'], h_fire: ['اتفادى كور النار!', 'Dodge the fireballs!'], h_bump: ['آه! ده أقوى منك', 'Ouch! Too strong for you!'],
  h_goal: ['كبّر لحد ما توصل للهدف', 'Grow until you reach the goal'], h_bossHit: ['برافو! كمان مرة!', 'Great! Again!'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
  beat: ['اهزم الزعيم', 'BEAT THE ALPHA'], beatBoss: ['اهزم العملاق', 'BEAT THE GIANT'], evolved: ['تطوّرت!', 'EVOLVED!'], defeated: ['هزمته!', 'DEFEATED!'], dragMove: ['اسحب عشان تتحرك', 'DRAG TO MOVE'],
  h_alpha: ['الزعيم ظهر! كبّر عشان تهزمه', 'THE ALPHA IS HERE! Grow to beat it'], h_alphaWeak: ['بقيت أقوى منه - امسكه!', 'You are stronger - catch it!'],
};
const I = makeI18n(S);
const LOOK = {
  // Bahariya Oasis: palm-oasis green with sandy patches.
  jungle: { sky: 0x9fe8ff, fog: 0xd8ecc0, ground: 0x55a83e, patch: 0xd9c078, sun: 0xfff2c8, hemi: [0xffffff, 0x8a9a58] },
  // Wadi El Hitan: sandy whale-bone desert; the ground patches are the wetland pools (teal, see buildScenery).
  swamp: { sky: 0xd8e8e8, fog: 0xd8cba0, ground: 0xc2a061, patch: 0xa8894f, sun: 0xfff0c0, hemi: [0xfff8e0, 0x9a8a5a] },
  // Black Desert: dark volcanic ground and hills.
  volcano: { sky: 0x6a2e2a, fog: 0x5a3230, ground: 0x2e2426, patch: 0x1e1618, sun: 0xffb070, hemi: [0xffd0a8, 0x40302e] },
};
const FM = { beetle: 1.7, egg: 1.5, frog: 1.5, biped: 0.95, quad: 0.8 };

// ---- primitives -------------------------------------------------------------------------------------------------------
const geo = { sphere: new THREE.SphereGeometry(0.5, 12, 9), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 10), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
const BM = (c, op = 1) => { const k = `b${c}|${op}`; if (!mats.has(k)) mats.set(k, new THREE.MeshBasicMaterial({ color: c, transparent: op < 1, opacity: op, depthWrite: op >= 1 })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const tint = (c, k) => { const col = new THREE.Color(c); col.multiplyScalar(k); return col.getHex(); };

// ---- dino builders ----------------------------------------------------------------------------------------------------
function eyes(head, o, y, z, sx) {
  const es = o.eyeS || 1;
  for (const s of [-1, 1]) {
    head.add(mesh(geo.sphere, M(0xffffff, 0x333333), s * sx, y, z, 0.34 * es, 0.4 * es, 0.3 * es));
    head.add(mesh(geo.sphere, M(o.eye || 0x111111, o.eyeGlow || 0), s * sx, y - 0.01, z + 0.1 * es, 0.17 * es, 0.22 * es, 0.14 * es));
  }
}
function teethRow(parent, y, z, w, n, size) { for (let i = 0; i < n; i++) { const t = mesh(geo.cone, M(0xffffff), -w / 2 + (w / (n - 1)) * i, y, z, size, size * 1.3, size); t.rotation.x = Math.PI; parent.add(t); } }
function tailChain(root, o, y, z, len, n) {
  const tail = []; let parent = root; let w = 0.8; let zz = z; let yy = y;
  for (let i = 0; i < n; i++) {
    const g = new THREE.Group(); g.position.set(0, i ? 0 : yy, i ? -len : zz); parent.add(g);
    g.add(mesh(geo.sphere, M(i % 2 ? (o.b2 || o.c) : o.c), 0, 0, -len * 0.45, w, w * 0.8, len * 1.3)); tail.push(g); parent = g; w *= 0.68;
  }
  if (o.club) { const k = new THREE.Group(); k.position.set(0, 0, -len); parent.add(k); k.add(mesh(geo.sphere, M(o.s || 0x8a8a8a), 0, 0, -0.3, 0.8, 0.7, 0.8)); for (const s of [-1, 1]) k.add(mesh(geo.cone, M(0xdddddd), s * 0.4, 0, -0.3, 0.2, 0.4, 0.2).rotateZ(-s * Math.PI / 2)); }
  return tail;
}
function makeBiped(o) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const c = M(o.c); const b = M(o.b || o.c);
  body.add(mesh(geo.sphere, c, 0, 1.2, 0, 1.1, 1.0, 1.6));
  body.add(mesh(geo.sphere, b, 0, 1.05, 0.18, 0.9, 0.7, 1.3));
  const head = new THREE.Group(); head.position.set(0, 1.78, 0.82); head.scale.setScalar(o.big || 1); body.add(head);
  head.add(mesh(geo.sphere, c, 0, 0, 0, 0.95, 0.85, 1.0));
  const sn = o.snout || 1; // Spinosaurus has a long crocodile-like snout (snout > 1 stretches the muzzle and jaw)
  head.add(mesh(geo.sphere, c, 0, -0.1, 0.5 + (sn - 1) * 0.25, 0.65, 0.5, 0.75 * sn));
  head.add(mesh(geo.sphere, M(tint(o.c, 0.7)), 0, 0.05, 0.85 * sn, 0.12, 0.08, 0.08));
  const jaw = new THREE.Group(); jaw.position.set(0, -0.2, 0.2); head.add(jaw);
  jaw.add(mesh(geo.sphere, b, 0, -0.03, 0.32 + (sn - 1) * 0.2, 0.55, 0.2, 0.72 * sn));
  if (o.teeth) { teethRow(jaw, 0.08, 0.5, 0.4, 4, 0.1); }
  eyes(head, o, 0.2, 0.3, 0.3);
  if (o.crest) for (let i = 0; i < 4; i++) head.add(mesh(geo.cone, M(o.s || 0xffd23a), 0, 0.5 - i * 0.08, -0.15 - i * 0.18, 0.18, 0.5 - i * 0.07, 0.18));
  if (o.horns) for (const s of [-1, 1]) { const hn = mesh(geo.cone, M(0xf4ecd0), s * 0.35, 0.5, 0.05, 0.22, 0.7, 0.22); hn.rotation.z = -s * 0.35; head.add(hn); }
  if (o.sail) for (let i = 0; i < 6; i++) body.add(mesh(geo.box, M(o.s || 0xff9a3a), 0, 1.75 + Math.sin(i * 0.5) * 0.4, 0.5 - i * 0.32, 0.12, 0.8 + Math.sin(i * 0.5) * 0.5, 0.3));
  // The hero's Spinosaurus sail: one low rounded plate along the back, built once with the model; sailK grows it per evolution stage.
  if (o.sailRound) { const k = o.sailK || 1; body.add(mesh(geo.sphere, M(o.s || 0xff9a3a), 0, 1.5 + 0.35 * k, -0.05, 0.16, 1.5 * k, 1.75)); }
  if (o.spikes) for (let i = 0; i < 5; i++) body.add(mesh(geo.cone, M(o.s || 0xffd23a, o.glow || 0), 0, 1.75 - i * 0.04, 0.5 - i * 0.3, 0.28, 0.5, 0.28));
  const tail = tailChain(body, o, 1.15, -0.65, 0.65, 3);
  const legs = [];
  for (const s of [-1, 1]) {
    const lg = new THREE.Group(); lg.position.set(s * 0.42, 0.95, -0.05); body.parent === g && g.add(lg);
    lg.add(mesh(geo.sphere, c, 0, -0.2, 0, 0.55, 0.75, 0.65), mesh(geo.cyl, c, 0, -0.55, 0.05, 0.3, 0.5, 0.3), mesh(geo.box, M(tint(o.c, 0.8)), 0, -0.82, 0.18, 0.4, 0.2, 0.6));
    legs.push(lg);
    const arm = mesh(geo.cyl, c, s * 0.55, 1.2, 0.8, 0.14, 0.4, 0.14); arm.rotation.x = 0.9; body.add(arm);
  }
  return Object.assign(g, { userData: { m: 'biped', body, head, jaw, tail, legs, ph: Math.random() * 6, o, top: 3.0 * (o.big ? 0.95 + o.big * 0.1 : 1) } });
}
function makeQuad(o) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const c = M(o.c); const b = M(o.b || o.c); const low = o.low ? 0.55 : 1;
  body.add(mesh(geo.sphere, c, 0, 1.0 * low + 0.2, 0, 1.2, 1.0 * low + 0.1, 2.0));
  body.add(mesh(geo.sphere, b, 0, 0.85 * low + 0.2, 0.1, 1.0, 0.7 * low + 0.1, 1.7));
  const head = new THREE.Group(); head.position.set(0, o.neck ? 2.7 : 1.1 * low + 0.3, o.neck ? 1.5 : 1.35); body.add(head);
  if (o.neck) { const nk = mesh(geo.cyl, c, 0, 1.75, 1.25, 0.5, 1.9, 0.5); nk.rotation.x = 0.5; body.add(nk); }
  head.add(mesh(geo.sphere, c, 0, 0, 0, 0.8, 0.7, 0.85));
  const sn = o.longSnout ? 1.5 : 0.7;
  head.add(mesh(geo.sphere, c, 0, -0.1, 0.4 + (sn - 0.7) * 0.3, 0.55, 0.38, sn));
  const jaw = new THREE.Group(); jaw.position.set(0, -0.2, 0.1); head.add(jaw); jaw.add(mesh(geo.sphere, b, 0, -0.02, 0.3 + (sn - 0.7) * 0.3, 0.5, 0.16, sn * 0.9));
  if (o.teeth) teethRow(jaw, 0.08, 0.4 + (sn - 0.7) * 0.3, 0.35, 4, 0.08);
  eyes(head, o, 0.18, 0.28, 0.28);
  if (o.horns) { for (const s of [-1, 1]) { const hn = mesh(geo.cone, M(0xf4ecd0), s * 0.3, 0.3, 0.45, 0.16, 0.9, 0.16); hn.rotation.x = 0.9; head.add(hn); } head.add(mesh(geo.cone, M(0xf4ecd0), 0, 0.0, 0.85, 0.2, 0.4, 0.2).rotateX(1.2)); const fr = mesh(geo.cyl, M(o.s || 0xff9a3a), 0, 0.35, -0.3, 1.5, 0.12, 1.3); fr.rotation.x = -0.9; head.add(fr); }
  if (o.plates) for (let i = 0; i < 7; i++) body.add(mesh(geo.cone, M(o.s || 0xff9a3a), (i % 2 ? 0.08 : -0.08), 1.75 - Math.abs(i - 3) * 0.12, 0.8 - i * 0.27, 0.34, 0.75 - Math.abs(i - 3) * 0.05, 0.1));
  if (o.armor) for (let i = 0; i < 5; i++) for (const s of [-1, 1]) body.add(mesh(geo.sphere, M(i % 2 ? o.s : tint(o.s, 0.8)), s * 0.42, 1.4 - Math.abs(i - 2) * 0.05, 0.7 - i * 0.4, 0.62, 0.4, 0.5));
  const tail = tailChain(body, o, 1.0 * low + 0.2, -0.9, 0.7, 3);
  const legs = [];
  for (const [x, z] of [[-1, 1], [1, -1], [1, 1], [-1, -1]]) {
    const lg = new THREE.Group(); lg.position.set(x * 0.55, 0.7 * low + 0.1, z * 0.7); g.add(lg);
    lg.add(mesh(geo.cyl, c, 0, -0.3 * low, 0, 0.42, 0.7 * low + 0.1, 0.42), mesh(geo.box, M(tint(o.c, 0.8)), 0, -0.62 * low, 0.1, 0.46, 0.18, 0.56)); legs.push(lg);
  }
  return Object.assign(g, { userData: { m: 'quad', body, head, jaw, tail, legs, ph: Math.random() * 6, o, top: o.neck ? 4.0 : 2.3 } });
}
function makeBeetle(o) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.sphere, M(o.c, o.glow || 0), 0, 0.4, 0, 0.9, 0.6, 1.1), mesh(geo.sphere, M(tint(o.c, 0.6)), 0, 0.35, 0.55, 0.5, 0.4, 0.4));
  for (const s of [-1, 1]) { body.add(mesh(geo.sphere, M(0xffffff), s * 0.14, 0.5, 0.75, 0.16, 0.16, 0.16)); for (const [i, z] of [[0, 0.25], [1, 0], [2, -0.25]]) body.add(mesh(geo.sphere, M(o.s || 0x222222), s * 0.2, 0.62, z, 0.18, 0.1, 0.18)); }
  const legs = [];
  for (let i = 0; i < 6; i++) { const lg = new THREE.Group(); const s = i % 2 ? 1 : -1; lg.position.set(s * 0.4, 0.25, -0.3 + Math.floor(i / 2) * 0.3); lg.add(mesh(geo.cyl, M(0x222222), s * 0.2, 0, 0, 0.45, 0.06, 0.06).rotateZ(0.0)); g.add(lg); legs.push(lg); }
  return Object.assign(g, { userData: { m: 'beetle', body, legs, tail: [], ph: Math.random() * 6, o, top: 0.9 } });
}
function makeEgg(o) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.sphere, M(o.c, o.glow || 0), 0, 0.7, 0, 1.0, 1.35, 1.0));
  for (let i = 0; i < 7; i++) { const a = i * 2.4; const y = 0.35 + (i % 4) * 0.28; const rr = 0.46 * Math.sqrt(1 - Math.pow((y - 0.7) / 0.68, 2)); { const sp = mesh(geo.sphere, M(o.s, o.glow || 0), Math.sin(a) * rr, y, Math.cos(a) * rr, 0.22, 0.22, 0.12); sp.lookAt(Math.sin(a) * 3, y, Math.cos(a) * 3); body.add(sp); } }
  return Object.assign(g, { userData: { m: 'egg', body, legs: [], tail: [], ph: Math.random() * 6, o, top: 1.9 } });
}
function makeFrog(o) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(mesh(geo.sphere, M(o.c), 0, 0.55, 0, 1.2, 0.9, 1.3), mesh(geo.sphere, M(o.b), 0, 0.42, 0.12, 0.95, 0.6, 1.0));
  const head = new THREE.Group(); head.position.set(0, 0.7, 0.55); body.add(head); eyes(head, { eyeS: 1.5 }, 0.42, 0.1, 0.3);
  const legs = [];
  for (const s of [-1, 1]) { const lg = new THREE.Group(); lg.position.set(s * 0.55, 0.4, -0.3); lg.add(mesh(geo.sphere, M(o.c), 0, 0, -0.2, 0.5, 0.45, 0.9)); g.add(lg); legs.push(lg); }
  return Object.assign(g, { userData: { m: 'frog', body, head, legs, tail: [], ph: Math.random() * 6, o, top: 1.9 } });
}
const LOOKS = {
  beetle: { m: 'beetle', c: 0x3aa83a }, mudbug: { m: 'beetle', c: 0x7a5a3a, s: 0x3a2a1a }, emberbug: { m: 'beetle', c: 0xe85a1a, glow: 0x802000, s: 0xffd23a },
  egg: { m: 'egg', c: 0xf4ecd0, s: 0x58b858 }, swampEgg: { m: 'egg', c: 0xcfe8d0, s: 0x3a8a6a }, lavaEgg: { m: 'egg', c: 0x3a2a2a, s: 0xff6a1a, glow: 0x501800 },
  compy: { m: 'biped', c: 0xf2d23a, b: 0xfff4c0, big: 1.3, eyeS: 1.3 }, dodo: { m: 'biped', c: 0xb08a5a, b: 0xe8d0a8, big: 1.25, eyeS: 1.3 },
  stego: { m: 'quad', c: 0x9ac84a, b: 0xe0f0a8, plates: true, s: 0xff9a3a, eyeS: 1.2 }, trike: { m: 'quad', c: 0x6aa8d8, b: 0xd8ecff, horns: true, s: 0xff9a3a },
  raptorRed: { m: 'biped', c: 0xd83a3a, b: 0xffd0a0, teeth: true, eye: 0x111111, big: 1.1, crest: true, s: 0x802020 }, rexJr: { m: 'biped', c: 0xc8742a, b: 0xffd8a0, teeth: true, big: 1.3 },
  frog: { m: 'frog', c: 0x4ac86a, b: 0xe0ffc0 }, gator: { m: 'quad', c: 0x3a7a4a, b: 0xd8e8a0, low: true, longSnout: true, teeth: true },
  ankylo: { m: 'quad', c: 0x8a7a5a, b: 0xd8c898, armor: true, s: 0xb8a070, club: true, low: true }, calf: { m: 'quad', c: 0x7ab0a0, b: 0xe0f4e0, neck: true, eyeS: 1.2 },
  swampRex: { m: 'biped', c: 0x3a6a5a, b: 0xbfe0c0, teeth: true, big: 1.3 }, lizard: { m: 'quad', c: 0xe8a83a, b: 0xfff0b0, low: true, longSnout: true },
  ankyloRed: { m: 'quad', c: 0x8a3a2a, b: 0xd8a080, armor: true, s: 0xe85a2a, club: true, low: true }, trikeRed: { m: 'quad', c: 0xc85a3a, b: 0xffd0b0, horns: true, s: 0xffd23a },
  spino: { m: 'biped', c: 0x2a5ac0, b: 0xc0d8ff, teeth: true, sail: true, s: 0xff9a3a, big: 1.2 }, rex: { m: 'biped', c: 0x9a2a2a, b: 0xffb888, teeth: true, big: 1.35, spikes: true, s: 0xe8c860 },
  boss: { m: 'biped', c: 0x5a1a1a, b: 0xff8a3a, teeth: true, big: 1.25, horns: true, spikes: true, s: 0xffa020, glow: 0x803000, eye: 0xffe04a, eyeGlow: 0xffa000, eyeS: 1.2 },
};
// The hero is a baby Spinosaurus at every stage: long snout + the signature back sail, which grows with each evolution (sailK).
const PLAYER_LOOK = [
  { m: 'biped', c: 0x62d84c, b: 0xeaffb0, big: 1.45, eyeS: 1.45, snout: 1.3, sailRound: true, sailK: 0.45, s: 0xffd23a },
  { m: 'biped', c: 0x24b8a8, b: 0xd8fff0, big: 1.25, eyeS: 1.25, crest: true, teeth: true, snout: 1.35, sailRound: true, sailK: 0.7, s: 0xffd23a },
  { m: 'biped', c: 0xff8a2a, b: 0xffe6a8, big: 1.2, eyeS: 1.15, teeth: true, snout: 1.4, sailRound: true, sailK: 1.0, s: 0xffe04a },
  { m: 'biped', c: 0x7a50e0, b: 0xffd8f0, big: 1.15, eyeS: 1.1, teeth: true, horns: true, snout: 1.45, sailRound: true, sailK: 1.3, s: 0xffe04a, glow: 0x806000 },
];
const BUILD = { biped: makeBiped, quad: makeQuad, beetle: makeBeetle, egg: makeEgg, frog: makeFrog };
const makeModel = (look) => BUILD[look.m](look);

/** Walk / idle / bite animation. Returns true when a foot hit the ground this frame (heavy step). */
function animate(g, dt, speed, clock) {
  const u = g.userData; const k = Math.min(1, speed / 3); const prev = Math.sin(u.ph);
  u.ph += dt * (3 + speed * 1.15); const s = Math.sin(u.ph);
  let step = false; if (k > 0.15 && prev * s < 0 && u.m !== 'beetle') step = true;
  const legs = u.legs;
  if (u.m === 'biped') { legs[0].rotation.x = s * 0.85 * k; legs[1].rotation.x = -s * 0.85 * k; }
  else if (u.m === 'quad') { legs[0].rotation.x = s * 0.7 * k; legs[1].rotation.x = s * 0.7 * k; legs[2].rotation.x = -s * 0.7 * k; legs[3].rotation.x = -s * 0.7 * k; }
  else if (u.m === 'beetle') legs.forEach((l, i) => { l.rotation.y = Math.sin(u.ph * 2 + i * 1.6) * 0.5 * (0.2 + k); });
  else if (u.m === 'frog') { const hop = Math.abs(Math.sin(u.ph * 0.7)) * k; u.body.position.y = hop * 0.5; legs.forEach((l) => { l.rotation.x = -hop * 0.8; }); }
  if (u.m === 'egg') { u.body.rotation.z = Math.sin(clock * 2.2 + u.ph) * 0.08; u.body.rotation.x = Math.cos(clock * 1.7 + u.ph) * 0.05; }
  else if (u.m !== 'frog') { u.body.position.y = Math.abs(s) * 0.09 * k + Math.sin(clock * 2 + u.ph) * 0.02; }
  u.tail.forEach((t, i) => { t.rotation.y = Math.sin(clock * 3 - i * 0.9 + u.ph) * (0.2 + 0.25 * k); });
  if (u.head) {
    u.head.rotation.x = Math.sin(clock * 1.5 + u.ph) * 0.04 + (u.lift || 0) * -0.5 + (u.bite > 0 ? Math.sin(u.bite * 9) * 0.25 : 0);
    u.head.position.z += 0;
  }
  if (u.jaw) { const op = u.bite > 0 ? Math.sin(Math.min(1, u.bite / 0.35) * Math.PI) * 0.9 : (u.open || 0) * 0.7; u.jaw.rotation.x = op; }
  if (u.bite > 0) u.bite -= dt;
  return step;
}

// ---- sprites ----------------------------------------------------------------------------------------------------------
const texCache = new Map();
function canvasTex(w, hh, draw) { const c = document.createElement('canvas'); c.width = w; c.height = hh; draw(c.getContext('2d'), w, hh); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
const PILL = { green: ['#9dff7a', '#0a3a10'], white: ['#ffffff', '#1a2a3a'], red: ['#ff5a4a', '#3a0606'], gold: ['#ffe04a', '#3a2a00'], boss: ['#ffb08a', '#3a0606'] };
function numMat(text, tone) {
  const k = `${text}|${tone}`; if (texCache.has(k)) return texCache.get(k);
  const tex = canvasTex(160, 80, (g, w, hh) => {
    const [fg, line] = PILL[tone]; g.font = '900 60px Tajawal, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const label = tone === 'red' ? `${text}!` : text; g.lineJoin = 'round'; g.lineWidth = 12; g.strokeStyle = line; g.strokeText(label, w / 2, hh / 2 + 2); g.fillStyle = fg; g.fillText(label, w / 2, hh / 2 + 2);
  });
  const m = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }); texCache.set(k, m); return m;
}
const PART = {};
function partTex(kind) {
  if (PART[kind]) return PART[kind];
  PART[kind] = canvasTex(64, 64, (g) => {
    g.fillStyle = '#fff';
    if (kind === 'dot') { const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30); gr.addColorStop(0, '#fff'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }
    else if (kind === 'star') { g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 11 : 29; const a = (i * Math.PI) / 5 - Math.PI / 2; g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r); } g.closePath(); g.fill(); }
    else if (kind === 'leaf') { g.beginPath(); g.ellipse(32, 32, 26, 13, 0.6, 0, 7); g.fill(); }
    else { g.beginPath(); g.arc(32, 32, 24, 0, 7); g.fill(); }
  });
  return PART[kind];
}

// ---- static scenery in merged batches ---------------------------------------------------------------------------------
class Batch {
  constructor() { this.list = []; this.o = new THREE.Object3D(); }
  add(g, color, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    const o = this.o; o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.rotation.set(rx, ry, rz); o.updateMatrix();
    const gg = g.clone(); gg.applyMatrix4(o.matrix);
    const n = gg.attributes.position.count; const col = new THREE.Color(color); const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; }
    gg.setAttribute('color', new THREE.BufferAttribute(arr, 3)); this.list.push(gg);
  }
  build(material) { if (!this.list.length) return null; const m = new THREE.Mesh(mergeGeometries(this.list), material); this.list.forEach((g) => g.dispose()); this.list = []; return m; }
}
const VCOL = new THREE.MeshLambertMaterial({ vertexColors: true });
const VGLOW = new THREE.MeshBasicMaterial({ vertexColors: true });

function tree(b, x, z, s, look) {
  const dead = look === 'swamp'; const fol = look === 'jungle' ? [0x2f9a3a, 0x3cb44a, 0x57c85a] : [0x4a6a3a, 0x5a7a44, 0x3a5a34];
  b.add(geo.cyl, 0x6a4a2a, x, 1.6 * s, z, 0.7 * s, 3.2 * s, 0.7 * s);
  if (dead) { b.add(geo.cyl, 0x5a4a38, x + 0.5 * s, 3.2 * s, z, 0.25 * s, 2 * s, 0.25 * s, 0, 0, -0.8); b.add(geo.sphere, 0x6a8a4a, x, 3.4 * s, z, 2.4 * s, 1.2 * s, 2.4 * s); return; }
  for (let i = 0; i < 3; i++) b.add(geo.sphere, fol[i], x + (i - 1) * 0.5 * s, (3.4 + i * 0.9) * s, z + (i === 1 ? 0.4 : -0.2) * s, (3.2 - i * 0.6) * s, (2.2 - i * 0.2) * s, (3.2 - i * 0.6) * s);
}
function rockAt(b, x, z, r, col) { b.add(geo.sphere, col, x, r * 0.5, z, r * 2.2, r * 1.3, r * 1.9, 0, x); b.add(geo.sphere, tint(col, 1.15), x + r * 0.4, r * 0.8, z - r * 0.2, r * 1.2, r * 0.9, r * 1.1); }

function buildScenery(level, sim) {
  const id = LEVELS[level].id; const half = LEVELS[level].half; const R = rng(level * 977 + 5); const L = LOOK[LEVELS[level].look || id];
  const g = new THREE.Group(); const sol = new Batch(); const glow = new Batch();
  for (let i = 0; i < 26; i++) { const x = (R() * 2 - 1) * half; const z = (R() * 2 - 1) * half; const r = 2 + R() * 3.5; sol.add(geo.cyl, id === 'swamp' && i % 2 ? 0x2f7a78 : L.patch, x, 0.02 + i * 0.0006, z, r * 2, 0.04, r * 2); }
  for (const o of sim.obstacles) {
    if (o.kind === 'tree' || (o.kind === 'stump' && id === 'swamp')) { if (o.kind === 'tree') tree(sol, o.x, o.z, o.r * 0.9, id); else { sol.add(geo.cyl, 0x5a4636, o.x, 0.9, o.z, o.r * 2, 1.8, o.r * 2); sol.add(geo.cyl, 0x8a6a46, o.x, 1.82, o.z, o.r * 1.8, 0.1, o.r * 1.8); for (let i = 0; i < 3; i++) sol.add(geo.sphere, [0xe84a4a, 0xffd23a, 0xff8ab8][i], o.x + Math.sin(i * 2.1) * o.r * 0.6, 1.95, o.z + Math.cos(i * 2.1) * o.r * 0.6, 0.5, 0.35, 0.5); } }
    else if (o.kind === 'pillar') { sol.add(geo.cyl, 0x3a2a2c, o.x, 2.2, o.z, o.r * 1.8, 4.4, o.r * 1.8); sol.add(geo.cone, 0x2a1e20, o.x, 5, o.z, o.r * 1.8, 1.8, o.r * 1.8); glow.add(geo.cyl, 0xff7a1a, o.x, 1.4, o.z, o.r * 1.9, 0.25, o.r * 1.9); }
    else rockAt(sol, o.x, o.z, o.r, id === 'volcano' ? 0x4a3a3a : 0x8a8a84);
  }
  // decor
  for (let i = 0; i < 110; i++) {
    const x = (R() * 2 - 1) * (half - 1); const z = (R() * 2 - 1) * (half - 1);
    if (Math.hypot(x, z) < 2 || sim.obstacles.some((o) => Math.hypot(o.x - x, o.z - z) < o.r + 0.6)) continue;
    if (id === 'jungle') { if (i % 4 === 0) { sol.add(geo.cone, 0x2f8a30, x, 0.4, z, 0.5, 0.9, 0.5); sol.add(geo.cone, 0x3a9a38, x + 0.3, 0.3, z, 0.4, 0.7, 0.4); } else if (i % 4 === 1) { sol.add(geo.cyl, 0x2f8a30, x, 0.3, z, 0.06, 0.6, 0.06); sol.add(geo.sphere, [0xff6a9a, 0xffe04a, 0xffffff, 0xb08aff][i % 4 + (i % 3)] || 0xffe04a, x, 0.65, z, 0.3, 0.3, 0.3); } else sol.add(geo.sphere, 0x6a9a50, x, 0.12, z, 0.7, 0.3, 0.6); }
    else if (id === 'swamp') { if (i % 3 === 0) { sol.add(geo.cyl, 0x6a8a3a, x, 0.9, z, 0.08, 1.8, 0.08); sol.add(geo.cyl, 0x6a4a2a, x, 1.7, z, 0.2, 0.5, 0.2); sol.add(geo.cyl, 0x6a8a3a, x + 0.3, 0.7, z, 0.07, 1.4, 0.07); } else if (i % 3 === 1) sol.add(geo.cyl, 0x4aa85a, x, 0.07, z, 1.2, 0.05, 1.2); else sol.add(geo.sphere, 0x6a8a5a, x, 0.15, z, 0.8, 0.3, 0.7); }
    else if (i % 3 === 0) glow.add(geo.cyl, 0xff6a1a, x, 0.04, z, 2 + R() * 3, 0.05, 1.6 + R() * 2.4, 0, R() * 3);
    else if (i % 3 === 1) rockAt(sol, x, z, 0.3 + R() * 0.4, 0x4a3a3a); else sol.add(geo.cone, 0x2a1e20, x, 0.35, z, 0.4, 0.7, 0.4);
  }
  if (id === 'volcano') for (let i = 0; i < 5; i++) { const a = i * 1.4 + 0.5; glow.add(geo.cyl, 0xff8a2a, Math.sin(a) * (half - 6), 0.05, Math.cos(a) * (half - 6), 5 + R() * 2, 0.06, 4 + R() * 2); }
  // border ring + distant scenery
  for (let side = 0; side < 4; side++) for (let i = -half - 2; i <= half + 2; i += 3.2) {
    const j = (R() - 0.5) * 1.6; const out = half + 2 + R() * 1.5; const x = side < 2 ? (side ? out : -out) : i + j; const z = side < 2 ? i + j : (side === 2 ? out : -out);
    if (id === 'jungle') tree(sol, x, z, 1.5 + R() * 0.8, id); else if (id === 'swamp') { if (R() < 0.5) tree(sol, x, z, 1.4 + R() * 0.6, id); else { sol.add(geo.cyl, 0x6a8a3a, x, 1.6, z, 0.12, 3.2, 0.12); sol.add(geo.cyl, 0x6a4a2a, x, 3.1, z, 0.3, 0.8, 0.3); } }
    else { const hh = 3 + R() * 5; sol.add(geo.cone, 0x2e2224, x, hh / 2, z, 3 + R() * 2, hh, 3 + R() * 2); if (R() < 0.5) glow.add(geo.cone, 0xff8a2a, x, hh * 0.9, z, 0.9, 0.7, 0.9); }
  }
  for (let i = 0; i < 14; i++) { const a = (i / 14) * 6.283; const d = half + 24 + R() * 10; const hh = 8 + R() * 14; const col = id === 'jungle' ? 0x5a9a7a : id === 'swamp' ? 0x5a7a62 : 0x3a2428; sol.add(geo.cone, col, Math.sin(a) * d, hh / 2 - 1, Math.cos(a) * d, 14 + R() * 8, hh, 14 + R() * 8); if (id === 'volcano' && i % 3 === 0) glow.add(geo.cone, 0xff7a2a, Math.sin(a) * d, hh - 1.5, Math.cos(a) * d, 5, 3, 5); }
  const a = sol.build(VCOL); if (a) g.add(a); const b = glow.build(VGLOW); if (b) g.add(b);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), M(L.ground)); ground.rotation.x = -Math.PI / 2; g.add(ground);
  return g;
}

// ---- the game ---------------------------------------------------------------------------------------------------------
class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5; this.girl = config.gender === 'girl'; this.save = normalizeSave(config.save); this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: this.girl, clips: DINO_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('dg-style')) document.head.append(h('style', { id: 'dg-style' }, css('dg', '#3fae4a', '#17692e', '#ffe04a') + `
.dg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1.6);width:100%}.dg-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*3);min-height:calc(var(--u)*24);cursor:pointer;justify-content:flex-end;text-shadow:0 1px 3px #000}.dg-env i{font-style:normal;font-size:calc(var(--u)*9)}.dg-env.lock{filter:grayscale(1) brightness(.6)}
.dg-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}.dg-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.6)}
.dg-stats{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.7);align-items:stretch;margin:0 auto;min-width:0;max-width:calc(var(--u)*62)}.dg-stats .dg-pill{font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.4) calc(var(--u)*2.4);justify-content:center}
.dg-stick{position:absolute;width:calc(var(--u)*20);height:calc(var(--u)*20);margin:calc(var(--u)*-10) 0 0 calc(var(--u)*-10);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.7);background:rgba(255,255,255,.14);display:none;pointer-events:none}.dg-stick b{position:absolute;left:50%;top:50%;width:calc(var(--u)*9);height:calc(var(--u)*9);margin:calc(var(--u)*-4.5) 0 0 calc(var(--u)*-4.5);border-radius:50%;background:rgba(255,255,255,.75)}
.dg-pounce{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:calc(var(--u)*.8) solid #fff;background:#d8502a;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.45);touch-action:none}.dg-pounce i{font-style:normal;font-size:calc(var(--u)*8)}
.dg-bossbar{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);display:none;gap:calc(var(--u)*1.2);align-items:center;background:rgba(40,0,0,.7);border:calc(var(--u)*.4) solid #ffa020;border-radius:99px;padding:calc(var(--u)*.8) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap}
.dg-float{position:absolute;left:0;top:0;font-weight:900;font-size:calc(var(--u)*5.5);text-shadow:0 0 6px #000,0 0 3px #000;pointer-events:none;white-space:nowrap}
.dg-stars span{display:inline-block;animation:dgpop .5s both}@keyframes dgpop{0%{transform:scale(0) rotate(-90deg)}70%{transform:scale(1.3)}100%{transform:scale(1)}}
.dg-hint{top:calc(var(--u)*26);font-size:calc(var(--u)*4.2)}
.dg-top{align-items:flex-start!important}
.dg-badge{background:linear-gradient(180deg,#fff8e8,#f0e0c0);color:#4a3a1a;border:calc(var(--u)*.45) solid #5a3a1a;border-radius:99px;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.7) calc(var(--u)*2.4);display:flex;gap:calc(var(--u)*1);align-items:center;box-shadow:0 calc(var(--u)*.5) 0 #5a3a1a}
.dg-power{display:flex;align-items:center;gap:calc(var(--u)*.8);background:linear-gradient(180deg,#ffb23a,#e8801a);border:calc(var(--u)*.5) solid #fff2d8;border-radius:99px;padding:calc(var(--u)*.3) calc(var(--u)*3);font-weight:900;color:#fff;box-shadow:0 calc(var(--u)*.5) 0 #8a4a0a;direction:ltr}.dg-power i{font-style:normal;font-size:calc(var(--u)*5)}.dg-power b{font-size:calc(var(--u)*7.5);color:#17323a;-webkit-text-stroke:calc(var(--u)*.4) #fff;paint-order:stroke fill;line-height:1.1}
.dg-eat{background:linear-gradient(180deg,#fff8e8,#f0e0c0);color:#17323a;border:calc(var(--u)*.45) solid #5a3a1a;border-radius:99px;font-weight:900;font-size:calc(var(--u)*5);padding:calc(var(--u)*.6) calc(var(--u)*2.6);min-width:calc(var(--u)*7);text-align:center}
.dg-mid{flex:1;display:flex;justify-content:center;gap:calc(var(--u)*.6);min-width:0;direction:ltr}
.dg-prog{position:absolute;left:calc(var(--u)*8);right:calc(var(--u)*8);top:calc(var(--u)*15);display:flex;gap:calc(var(--u)*1.2);align-items:center;pointer-events:none;direction:ltr}.dg-prog .bar{flex:1;height:calc(var(--u)*2.8);border-radius:99px;background:rgba(10,30,20,.65);border:calc(var(--u)*.35) solid rgba(255,255,255,.7);overflow:hidden}.dg-prog .bar b{display:block;height:100%;width:0;background:linear-gradient(180deg,#7af0ff,#2ab8d8)}
.dg-goalpill{background:linear-gradient(180deg,#ff7a4a,#d8401a);border:calc(var(--u)*.4) solid #fff;border-radius:99px;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*.4) calc(var(--u)*2.2);color:#fff;display:flex;gap:calc(var(--u)*.8);align-items:center}
.dg-beat{position:absolute;left:0;right:0;top:calc(var(--u)*20);text-align:center;font-weight:900;font-size:calc(var(--u)*2.8);color:#fff;text-shadow:0 0 4px #000,0 0 2px #000;pointer-events:none;letter-spacing:.04em}
.dg-pounce{background:radial-gradient(circle at 40% 30%,#6af0e0,#1a9a9a)!important;border:calc(var(--u)*.9) solid #0e4a4a!important;box-shadow:0 0 0 calc(var(--u)*.5) #cfeee8,0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.45)!important;width:calc(var(--u)*19)!important;height:calc(var(--u)*19)!important;color:#0e3a3a!important}.dg-pounce i{font-size:calc(var(--u)*9)!important;color:#fff;text-shadow:0 0 4px #0e4a4a}.dg-pounce span{position:absolute;bottom:calc(var(--u)*-4.6);left:0;right:0;font-size:calc(var(--u)*2.8);color:#fff;text-shadow:0 0 4px #000,0 0 2px #000}
.dg-lvtitle{position:absolute;left:0;right:0;top:calc(var(--u)*24);text-align:center;pointer-events:none;opacity:0;transition:opacity .5s}.dg-lvtitle.show{opacity:1}.dg-lvtitle b{display:block;font-weight:900;font-size:calc(var(--u)*10);color:#fff;font-style:italic;-webkit-text-stroke:calc(var(--u)*.9) #1a3a1a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #1a3a1a}.dg-lvtitle span{display:block;font-weight:900;font-size:calc(var(--u)*3.8);color:#ffe9a8;text-shadow:0 0 4px #000,0 0 2px #000}
.dg-ban{position:absolute;left:0;right:0;top:calc(var(--u)*30);text-align:center;pointer-events:none;opacity:0}.dg-ban.show{animation:dgban 2.2s ease-out forwards}.dg-ban b{display:inline-block;background:linear-gradient(180deg,#5ae8e0,#1a9aa8);border:calc(var(--u)*.6) solid #0e3a42;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*5);font-weight:900;font-style:italic;font-size:calc(var(--u)*8);color:#fff;text-shadow:0 calc(var(--u)*.5) 0 #0e3a42}.dg-ban span{display:block;font-weight:900;font-size:calc(var(--u)*3.8);color:#ffe9a8;margin-top:calc(var(--u)*.6);text-shadow:0 0 4px #000,0 0 2px #000}@keyframes dgban{0%{opacity:0;transform:scale(.4)}15%{opacity:1;transform:scale(1.1)}30%{transform:scale(1)}80%{opacity:1}100%{opacity:0}}
.dg-alphabar{position:absolute;left:calc(var(--u)*8);right:calc(var(--u)*8);top:calc(var(--u)*14);display:none;flex-direction:column;gap:calc(var(--u)*.6);background:rgba(10,40,20,.82);border:calc(var(--u)*.6) solid #3ad86a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1) calc(var(--u)*2.6);font-weight:900;color:#fff;pointer-events:none}.dg-alphabar.red{border-color:#e83a2a;background:rgba(50,10,10,.82)}.dg-alphabar .t{display:flex;justify-content:space-between;font-size:calc(var(--u)*3);letter-spacing:.03em}.dg-alphabar .t em{font-style:normal;font-size:calc(var(--u)*4.6);color:#7aff9a}.dg-alphabar.red .t em{color:#ff8a7a}.dg-alphabar .bar{height:calc(var(--u)*1.8);border-radius:99px;background:rgba(0,0,0,.5);overflow:hidden}.dg-alphabar .bar b{display:block;height:100%;width:0;background:linear-gradient(180deg,#7aff9a,#2ab84a)}.dg-alphabar.red .bar b{background:linear-gradient(180deg,#ff8a6a,#d82a1a)}
.dg-arrow{position:absolute;left:0;top:0;width:calc(var(--u)*7);height:calc(var(--u)*7);margin:calc(var(--u)*-3.5) 0 0 calc(var(--u)*-3.5);display:none;pointer-events:none;font-size:calc(var(--u)*7);line-height:1;color:#ffb21a;text-shadow:0 0 6px #000,0 0 3px #000}
@media (orientation:landscape){.dg-hint{top:calc(var(--u)*22)}.dg-bossbar{top:calc(var(--u)*15)}.dg-card{padding:calc(var(--u)*2.4) calc(var(--u)*5);gap:calc(var(--u)*1.4)}.dg-btn{min-height:calc(var(--u)*9)}.dg-title{font-size:calc(var(--u)*6.5)}.dg-logo{font-size:calc(var(--u)*7)}.dg-stars{font-size:calc(var(--u)*8)}}`));
    this.root = h('div', { class: 'dg-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'dg-layer' });
    this.mode = 'menu'; this.clock = 0; this.shake = 0; this.pops = []; this.floats = []; this.vanish = []; this.recs = new Map(); this.parts = [];
    this.camDist = 15; this.keys = new Set(); this.shown = new Set();
    this._three();
    this.root.append(this.layer);
    this._resize(); this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind(); this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 600);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x6a9a58, 1.9); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2c8, 1.5); this.sun.position.set(-12, 30, 10); this.scene.add(this.sun);
    this.stage = new THREE.Group(); this.scene.add(this.stage);
    this.things = new THREE.Group(); this.scene.add(this.things);
    this.teleDisc = new THREE.Mesh(new THREE.CircleGeometry(1, 40), new THREE.MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.3, depthWrite: false })); this.teleDisc.rotation.x = -Math.PI / 2; this.teleDisc.position.y = 0.08; this.teleDisc.visible = false;
    this.teleFill = new THREE.Mesh(new THREE.CircleGeometry(1, 40), new THREE.MeshBasicMaterial({ color: 0xff5a2a, transparent: true, opacity: 0.45, depthWrite: false })); this.teleFill.rotation.x = -Math.PI / 2; this.teleFill.position.y = 0.1; this.teleFill.visible = false;
    this.teleLine = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff3a1a, transparent: true, opacity: 0.35, depthWrite: false })); this.teleLine.position.y = 0.09; this.teleLine.visible = false;
    this.shock = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 48), new THREE.MeshBasicMaterial({ color: 0xffd080, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })); this.shock.rotation.x = -Math.PI / 2; this.shock.position.y = 0.15; this.shock.visible = false; this.shockT = 0;
    this.scene.add(this.teleDisc, this.teleFill, this.teleLine, this.shock);
    this.projMeshes = new Map();
    this.pool = []; for (let i = 0; i < 220; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: partTex('dot'), transparent: true, depthWrite: false })); sp.visible = false; this.scene.add(sp); this.pool.push({ sp, life: 0 }); }
  }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`); this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.updateProjectionMatrix(); }

  // ---- input ----
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || this.mode !== 'play' || this.paused || this.stick) return;
      const r = this.root.getBoundingClientRect(); this.stick = { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: 0, z: 0 };
      this.stickEl.style.display = 'block'; this.stickEl.style.left = `${e.clientX - r.left}px`; this.stickEl.style.top = `${e.clientY - r.top}px`;
    });
    this.root.addEventListener('pointermove', (e) => {
      const s = this.stick; if (!s || s.id !== e.pointerId) return;
      const R = this.u * 9; let dx = e.clientX - s.x0; let dy = e.clientY - s.y0; const m = Math.hypot(dx, dy);
      if (m > R) { dx = (dx / m) * R; dy = (dy / m) * R; }
      s.x = dx / R; s.z = dy / R;
      if (Math.hypot(s.x, s.z) < 0.12) { s.x = 0; s.z = 0; }
      this.knobEl.style.transform = `translate(${dx}px,${dy}px)`;
    });
    const up = (e) => { if (this.stick && this.stick.id === e.pointerId) { this.stick = null; if (this.stickEl) { this.stickEl.style.display = 'none'; this.knobEl.style.transform = ''; } } };
    this.root.addEventListener('pointerup', up); this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (this.mode !== 'play') return;
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's'].includes(k)) { this.keys.add(k); e.preventDefault(); }
      else if (k === ' ') { e.preventDefault(); this.pounceQ = true; } else if (k === 'p' || k === 'escape') this.togglePause();
    };
    this._onKeyUp = (e) => this.keys.delete(e.key.toLowerCase());
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKeyUp);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let x = 0; let z = 0; const K = this.keys;
    if (K.has('arrowleft') || K.has('a')) x -= 1; if (K.has('arrowright') || K.has('d')) x += 1; if (K.has('arrowup') || K.has('w')) z -= 1; if (K.has('arrowdown') || K.has('s')) z += 1;
    if (!x && !z && this.stick) { x = this.stick.x; z = this.stick.z; }
    const out = { x, z, pounce: !!this.pounceQ }; this.pounceQ = false; return out;
  }

  // ---- ui ----
  _clear() { this.layer.replaceChildren(); this.hudReady = false; }
  _soundPill() { const pill = h('button', { class: 'dg-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(key, ms = 3200, extra = '') {
    if (!this.hintEl) return; if (key !== 'evolve' && this.shown.has(key)) return; this.shown.add(key);
    this.hintEl.textContent = `${I.t(`h_${key}`)}${extra}`; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms);
  }
  plainHint(text, ms = 2200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  showMenu() {
    this.mode = 'menu'; this.paused = false; this._clear(); this.sound.setMode(null);
    this._loadLevel(0, true);
    this.layer.append(h('div', { class: 'dg-dim', style: 'background:rgba(5,25,10,.25)' }, h('div', { class: 'dg-card' }, h('div', { class: 'dg-logo' }, '🦖 ', I.t('title')),
      h('div', { class: 'dg-menu' },
        h('button', { class: 'dg-btn', onclick: () => { this.sound.play('tap'); this.start(Math.min(this.save.unlocked - 1, 2)); } }, '▶ ', I.t('play')),
        h('button', { class: 'dg-btn dark', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, '🗺️ ', I.t('levels')),
        h('button', { class: 'dg-btn dark', onclick: () => { this.sound.play('tap'); this.showSettings(); } }, '⚙️ ', I.t('settings')),
        h('button', { class: 'dg-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('quit'))))));
    this._soundPill();
  }

  showLevels() {
    this._clear(); const ar = I.getLang() !== 'en'; const ic = ['🌴', '🐋', '🌋', '🌴', '🐋', '🌋'];
    const bg = ['#7ac74f,#3a7a2a', '#d9b96a,#5a8a7a', '#5a4038,#1e1416', '#5aa844,#2a6626', '#c8a452,#4a7a6e', '#4a3436,#140c0e'];
    const cards = LEVELS.map((l, i) => { const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i] || 0; return h('button', { class: `dg-env${lock ? ' lock' : ''}`, style: `background:linear-gradient(180deg,${bg[i].split(',')[0]},${bg[i].split(',')[1]})`, onclick: () => { if (lock) { this.plainHint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, h('i', {}, ic[i]), h('span', {}, `${I.num(i + 1)}. ${ar ? l.ar : l.en}`), h('span', {}, lock ? '🔒' : '⭐'.repeat(st) + '☆'.repeat(3 - st))); });
    this.layer.append(h('div', { class: 'dg-dim', style: 'background:rgba(5,25,10,.25)' }, h('div', { class: 'dg-card' }, h('div', { class: 'dg-title' }, I.t('select')), h('div', { class: 'dg-grid' }, cards), h('button', { class: 'dg-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this.hintEl = h('div', { class: 'dg-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  showSettings() {
    this._clear();
    const b = h('button', { class: 'dg-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); b.textContent = `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`);
    this.layer.append(h('div', { class: 'dg-dim', style: 'background:rgba(5,25,10,.25)' }, h('div', { class: 'dg-card' }, h('div', { class: 'dg-title' }, '⚙️ ', I.t('settings')), b, h('div', { class: 'dg-small' }, I.t('how')), h('button', { class: 'dg-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  _hud() {
    const lv = this.sim.L; const ar = I.getLang() !== 'en'; const boss = this.sim.boss; const al = lv.alpha;
    const pause = h('button', { class: 'dg-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.iconEl = h('i', {}, '🥚'); this.pwrEl = h('b', {}, ''); this.eatEl = h('div', { class: 'dg-eat' }, '0'); this.barEl = h('b', { style: 'width:0%' });
    this.layer.append(h('div', { class: 'dg-top' }, h('div', { class: 'dg-badge' }, '🌿', I.num(this.level + 1)), h('div', { class: 'dg-mid' }, h('div', { class: 'dg-power' }, this.iconEl, this.pwrEl), this.eatEl), pause));
    const bossPower = boss ? boss.power : al ? SPECIES[al.kind].power : 0; const goalNum = boss ? boss.power : lv.goal;
    this.layer.append(h('div', { class: 'dg-prog' }, h('span', {}, '🥚'), h('div', { class: 'bar' }, this.barEl), h('div', { class: 'dg-goalpill' }, boss ? '👑' : '🦖', I.num(goalNum))));
    this.beatEl = h('div', { class: 'dg-beat' }, `${I.t(boss ? 'beatBoss' : 'beat')} ${I.num(bossPower)}`.toUpperCase()); this.layer.append(this.beatEl);
    this.heartsEl = h('span', {}, ''); this.bossBar = h('div', { class: 'dg-bossbar' }, '👑 ', I.t('boss'), ' ', I.num(boss ? boss.power : 0), ' ', this.heartsEl); this.layer.append(this.bossBar);
    this.alphaBar = h('div', { class: 'dg-alphabar' }, h('div', { class: 't' }, h('span', { class: 'nm' }, ''), h('em', {}, '')), h('div', { class: 'bar' }, h('b'))); this.layer.append(this.alphaBar);
    this.arrowEl = h('div', { class: 'dg-arrow' }, '➤'); this.layer.append(this.arrowEl);
    this.titleEl = h('div', { class: 'dg-lvtitle show' }, h('b', {}, ar ? lv.ar : lv.en), h('span', {}, lv.sub ? lv.sub[ar ? 0 : 1] : '')); this.layer.append(this.titleEl); setTimeout(() => this.titleEl && this.titleEl.classList.remove('show'), 3400);
    this.banEl = h('div', { class: 'dg-ban' }, h('b', {}, ''), h('span', {}, '')); this.layer.append(this.banEl);
    this.hintEl = h('div', { class: 'dg-hint' }); this.layer.append(this.hintEl);
    this.stickEl = h('div', { class: 'dg-stick' }, this.knobEl = h('b')); this.layer.append(this.stickEl);
    this.cdEl = h('i', {}, '🐾'); this.pounceBtn = h('button', { class: 'dg-pounce', 'aria-label': I.t('pounce'), onpointerdown: (e) => { e.stopPropagation(); this.pounceQ = true; }, onclick: (e) => e.preventDefault() }, this.cdEl, h('span', {}, I.t('pounce').toUpperCase()));
    this.layer.append(this.pounceBtn); this._soundPill(); this.hudReady = true;
    this._lastHud = '';
  }

  banner(title, sub = '') { if (!this.banEl) return; this.banEl.firstChild.textContent = title; this.banEl.lastChild.textContent = sub; this.banEl.classList.remove('show'); void this.banEl.offsetWidth; this.banEl.classList.add('show'); }

  _updateHud() {
    const sim = this.sim; const p = sim.player; const ar = I.getLang() !== 'en'; const st = p.stage; const nx = STAGES[st + 1];
    const key = `${p.P}|${st}|${sim.boss ? sim.boss.hp : 0}|${sim.stats.eaten}|${sim.alpha ? 1 : 0}`;
    if (key !== this._lastHud) {
      this._lastHud = key; this.pwrEl.textContent = I.num(Math.round(p.P)); this.iconEl.textContent = st === 0 ? '🥚' : '🐾'; this.eatEl.textContent = I.num(sim.stats.eaten);
      const f = nx ? (p.P - STAGES[st].at) / (nx.at - STAGES[st].at) : 1; this.barEl.style.width = `${Math.max(2, Math.min(100, f * 100))}%`;
      if (sim.boss) { this.bossBar.style.display = 'flex'; this.heartsEl.textContent = '❤️'.repeat(sim.boss.hp) + '🖤'.repeat(sim.boss.maxHp - sim.boss.hp); this.beatEl.style.display = 'none'; }
      if (sim.alpha) { const a = sim.alpha, sp = SPECIES[a.kind]; this.beatEl.style.display = 'none'; this.alphaBar.style.display = 'flex'; this.alphaBar.classList.toggle('red', p.P <= a.power); this.alphaBar.querySelector('.nm').textContent = (ar ? sp.ar : sp.en).toUpperCase(); this.alphaBar.querySelector('em').textContent = I.num(a.power); this.alphaBar.querySelector('.bar b').style.width = `${Math.max(4, Math.min(100, (p.P / a.power) * 100))}%`; }
      else if (sim.alphaDown) this.alphaBar.style.display = 'none';
    }
    const cd = Math.max(0, p.pounceCd / 1.5); this.pounceBtn.style.opacity = cd > 0 ? '.75' : '1'; this.pounceBtn.style.filter = cd > 0 ? `grayscale(${cd})` : ''; this.cdEl.textContent = cd > 0 ? Math.ceil(cd * 1.5 * 10) / 10 + '' : '🐾';
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) { this.stick = null; if (this.stickEl) this.stickEl.style.display = 'none'; this.pauseEl = h('div', { class: 'dg-dim' }, h('div', { class: 'dg-card' }, h('div', { class: 'dg-title' }, I.t('paused')), h('button', { class: 'dg-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')), h('button', { class: 'dg-btn dark', onclick: () => this.start(this.level) }, '🔄 ', I.t('restart')), h('button', { class: 'dg-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove();
  }

  // ---- level and entities ----
  _loadLevel(i, demo) {
    this.level = i; this.sim = new Dino({ level: i, seed: demo ? 3 : (Date.now() & 0xffff) + 1, easy: this.age <= 4 });
    if (demo) this.sim.player.inv = 1e9;
    for (const r of this.recs.values()) this.things.remove(r.W, r.spr); this.recs.clear();
    for (const v of this.vanish) this.things.remove(v.W); this.vanish = [];
    for (const m of this.projMeshes.values()) this.things.remove(m); this.projMeshes.clear();
    this.stage.clear(); const id = LEVELS[i].look || LEVELS[i].id; const L = LOOK[id];
    this.stage.add(buildScenery(i, this.sim));
    this.scene.background = new THREE.Color(L.sky); this.scene.fog = new THREE.Fog(L.fog, 38, id === 'volcano' ? 120 : 150);
    this.hemi.color.set(L.hemi[0]); this.hemi.groundColor.set(L.hemi[1]); this.sun.color.set(L.sun);
    if (this.playerRec) { this.things.remove(this.playerRec.W, this.playerRec.spr); }
    this._makePlayer(this.sim.player.stage);
    this.boss = null;
    if (this.sim.boss) {
      const m = makeModel(LOOKS.boss); const W = new THREE.Group(); W.add(m); const sh = mesh(new THREE.CircleGeometry(1, 20), BM(0x000000, 0.3), 0, 0.04, 0); sh.rotation.x = -Math.PI / 2; sh.scale.setScalar(this.sim.boss.r * 1.3); W.add(sh); m.scale.setScalar(this.sim.boss.r * FM.biped); this.things.add(W);
      const spr = new THREE.Sprite(numMat(I.num(this.sim.boss.power), 'boss')); spr.renderOrder = 10; this.things.add(spr); this.boss = { W, m, spr, pose: 0, fall: 0 };
    }
    this.camDist = zoomFor(this.sim.player.P); this.stats = { cd: 0 };
  }

  _makePlayer(stage) {
    if (this.playerRec) this.things.remove(this.playerRec.W, this.playerRec.spr);
    const m = makeModel(PLAYER_LOOK[stage]); const W = new THREE.Group(); W.add(m);
    const sh = mesh(new THREE.CircleGeometry(1, 20), BM(0x000000, 0.3), 0, 0.04, 0); sh.rotation.x = -Math.PI / 2; W.add(sh);
    const spr = new THREE.Sprite(numMat('0', 'gold')); spr.renderOrder = 10; this.things.add(W, spr);
    this.playerRec = { W, m, sh, spr, key: '' };
  }

  _creatureRec(c) {
    const sp = SPECIES[c.kind]; const m = makeModel(LOOKS[sp.look]); const W = new THREE.Group(); W.add(m);
    const sh = mesh(new THREE.CircleGeometry(1, 16), BM(0x000000, 0.28), 0, 0.04, 0); sh.rotation.x = -Math.PI / 2; sh.scale.setScalar(c.r * 1.2); W.add(sh);
    const spr = new THREE.Sprite(numMat(String(c.power), 'white')); spr.renderOrder = 9; this.things.add(W, spr);
    const rec = { W, m, spr, key: '', age: 0, sc: c.r * FM[LOOKS[sp.look].m] }; this.recs.set(c.id, rec); return rec;
  }

  start(i) {
    this.voice.say('count');
    this._clear(); this.sound.unlock();
    this._loadLevel(i, false); this.mode = 'play'; this.paused = false; this.shake = 0; this.shown = new Set(); this.pounceQ = false; this.stick = null;
    this.sound.setMode(i);
    this._hud(); this.hint('eat', 4200); this.plainHint('☝ ' + I.t('dragMove'), 2600);
    this.t0 = performance.now();
    setTimeout(() => { if (this.mode === 'play' && this.level === i && this.sim.player.P < 6) this.hint('pounce', 3600); }, 9000);
    if (this.sim.boss) setTimeout(() => this.mode === 'play' && this.hint('bossNeed', 4200), 4600);
  }

  _finish(r) {
    const i = this.level; const s = this.save; const won = r.stars;
    s.stars[i] = Math.max(s.stars[i] || 0, won); s.unlocked = Math.max(s.unlocked, Math.min(LEVELS.length, i + 2)); s.eaten += r.eaten;
    const sc = Math.round(r.time); if (!s.best[i] || sc < s.best[i]) s.best[i] = sc;
    this.post({ type: 'save', save: s }); this.sound.play('win'); this.voice.say('win'); this.mode = 'over';
    const last = i === LEVELS.length - 1; const ar = I.getLang() !== 'en'; const mm = Math.floor(r.time / 60); const ss = Math.round(r.time % 60);
    const stars = h('div', { class: 'dg-stars' }); for (let k = 0; k < 3; k++) { const sp = h('span', { class: k < won ? '' : 'off', style: `animation-delay:${0.3 + k * 0.35}s` }, '⭐'); stars.append(sp); if (k < won) setTimeout(() => this.sound.play('star'), 300 + k * 350); }
    this.layer.append(h('div', { class: 'dg-dim' }, h('div', { class: 'dg-card' }, h('div', { class: 'dg-logo', style: 'color:#7dff9a' }, I.t('complete')), h('div', { class: 'dg-small' }, I.t(this.girl ? 'win_f' : 'win_m')), stars,
      h('div', { class: 'dg-row' }, h('span', {}, `⏱ ${I.t('time')}`), h('span', {}, `${I.num(mm)}:${I.num(String(ss).padStart(2, '0'))}`)), h('div', { class: 'dg-row' }, h('span', {}, `⚡ ${I.t('power')}`), h('span', {}, I.num(Math.round(r.power)))),
      h('div', { class: 'dg-row' }, h('span', {}, `🍖 ${I.t('eaten')}`), h('span', {}, I.num(r.eaten))), h('div', { class: 'dg-row' }, h('span', {}, `💥 ${I.t('bumps')}`), h('span', {}, I.num(r.hits))),
      h('div', { class: 'dg-small' }, `🦖 ${I.t('album')}: ${STAGES[r.stage].fact[ar ? 0 : 1]}`),
      last ? h('div', { class: 'dg-small' }, I.t('all')) : h('button', { class: 'dg-btn', onclick: () => this.start(i + 1) }, '▶ ', I.t('next')),
      h('button', { class: 'dg-btn alt', onclick: () => this.start(i) }, '🔄 ', I.t('again')), h('button', { class: 'dg-btn dark', onclick: () => this.showMenu() }, '🏠 ', I.t('home')))));
  }

  // ---- fx ----
  emit(type, x, y, z, vx, vy, vz, life, size, color, grav = 0, grow = 0) {
    const p = this.pool.find((q) => q.life <= 0); if (!p) return;
    const m = p.sp.material; m.map = partTex(type); m.color.set(color); m.opacity = 1; m.rotation = Math.random() * 6; m.needsUpdate = true;
    p.sp.position.set(x, y, z); p.sp.scale.setScalar(size); p.sp.visible = true; Object.assign(p, { life, max: life, vx, vy, vz, size, grav, grow });
  }
  burst(type, x, y, z, n, speed, life, size, colors, grav = 6) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283; const e = Math.random() * 0.8 + 0.2; this.emit(type, x, y, z, Math.sin(a) * speed * e, speed * (0.4 + Math.random() * 0.8), Math.cos(a) * speed * e, life * (0.7 + Math.random() * 0.6), size * (0.7 + Math.random() * 0.6), colors[i % colors.length], grav); }
  }
  _parts(dt) {
    for (const p of this.pool) {
      if (p.life <= 0) continue; p.life -= dt;
      if (p.life <= 0) { p.sp.visible = false; continue; }
      p.vy -= p.grav * dt; p.sp.position.x += p.vx * dt; p.sp.position.y = Math.max(0.05, p.sp.position.y + p.vy * dt); p.sp.position.z += p.vz * dt;
      const k = p.life / p.max; p.sp.material.opacity = Math.min(1, k * 1.6); p.sp.scale.setScalar(p.size * (1 + p.grow * (1 - k)));
    }
  }
  floatText(text, x, y, z, color = '#ffe04a', life = 1.1) {
    const el = h('div', { class: 'dg-float', style: `color:${color}` }, text); this.layer.append(el); this.floats.push({ el, x, y, z, t: 0, life });
  }
  _floats(dt) {
    const v = new THREE.Vector3();
    for (const f of this.floats) {
      f.t += dt; v.set(f.x, f.y + f.t * 2.2, f.z).project(this.camera);
      const sx = (v.x * 0.5 + 0.5) * this.cw; const sy = (-v.y * 0.5 + 0.5) * this.ch;
      f.el.style.transform = `translate(${sx}px,${sy}px) translate(-50%,-50%)`; f.el.style.opacity = String(Math.max(0, 1 - f.t / f.life)); if (v.z > 1) f.el.style.display = 'none';
    }
    this.floats = this.floats.filter((f) => { if (f.t >= f.life) { f.el.remove(); return false; } return true; });
  }

  _events(evs) {
    const p = this.sim.player; const pr = this.playerRec;
    for (const e of evs) {
      switch (e.type) {
        case 'eat': {
          this.sound.play('chomp'); this.voice.say('pickup'); pr.m.userData.bite = 0.35;
          this.burst('star', e.x, 1.2, e.z, 10, 5, 0.7, 0.7, [0xffe04a, 0xffffff, 0xffb0e0], 4);
          this.burst('leaf', e.x, 0.8, e.z, 8, 4, 1, 0.6, [0x6adb5a, 0x3aa83a, 0x9aff7a], 5);
          this.floatText(`+${I.num(e.gain)}`, e.x, 2.5, e.z, '#9dff7a');
          const r = this.recs.get(e.id); if (r) { this.recs.delete(e.id); this.things.remove(r.spr); this.vanish.push({ W: r.W, t: 0, x: e.x, z: e.z, sc: r.W.scale.x }); }
          this.shake += 0.08 + p.r * 0.03;
          break;
        }
        case 'evolve': {
          this._makePlayer(e.stage); this.pop = 1.7; this.sound.play('evolve'); this.voice.say('charge'); this.shake += 0.6;
          this.burst('star', p.x, 2, p.z, 36, 9, 1.2, 0.9, [0xffe04a, 0xffffff, 0x8affea, 0xff9ae0], 2);
          this.burst('dot', p.x, 1, p.z, 16, 6, 0.8, 2.2, [0xffffff], 0); const ar = I.getLang() !== 'en';
          const stg = STAGES[e.stage]; this.banner(I.t('evolved'), `${ar ? stg.ar : stg.en} — ${stg.fact[ar ? 0 : 1]}`);
          break;
        }
        case 'bump': {
          this.sound.play('bump'); this.voice.say('bump'); this.shake += 0.7; this.burst('star', p.x, 1.5, p.z, 12, 6, 0.6, 0.6, [0xff4a4a, 0xffa040], 6);
          if (e.lost) this.floatText(`-${I.num(e.lost)}`, p.x, 2.8, p.z, '#ff6a6a'); if (e.src !== 'fire' && e.src !== 'stomp') this.hint('bump', 2200);
          break;
        }
        case 'pounce': this.sound.play('pounce'); this.burst('puff', p.x, 0.3, p.z, 6, 3, 0.5, 1.2, [0xd8c8a0], 0); break;
        case 'alert': { if (!this.alertT || this.clock - this.alertT > 2) { this.alertT = this.clock; this.sound.play('alert'); this.voice.say('near'); this.hint('red', 3000); } this.floatText('❗', e.x, 4.5, e.z, '#ff4a4a', 0.9); break; }
        case 'telegraph': this.sound.play('telegraph'); this.hint(e.kind === 'stomp' ? 'stomp' : 'fire', 2400); break;
        case 'stomp': this.sound.play('stomp', 1); this.sound.play('roar'); this.shake += 1.6; this.shockT = 0.55; this.shock.position.set(e.x, 0.15, e.z); this.shockR = e.radius;
          this.burst('puff', e.x, 0.5, e.z, 26, 11, 0.9, 3.2, [0xcbb68a, 0x9a8a6a], 0); break;
        case 'fire': this.sound.play('fire'); this.burst('dot', e.x, 3, e.z, 12, 7, 0.6, 2.2, [0xff9a2a, 0xffd23a], 0); break;
        case 'bossBite': this.sound.play('bossHit'); this.voice.say('trick'); this.sound.play('roar'); this.shake += 1.2; this.burst('star', e.x, 3, e.z, 28, 9, 1, 1, [0xffe04a, 0xff7a2a, 0xffffff], 3); this.hint('bossHit', 2000); this.floatText(`💥 ${'❤️'.repeat(e.hp)}`, e.x, 8, e.z, '#ffffff', 1.4); break;
        case 'bossDown': this.sound.play('roar'); this.voice.say('win'); this.shake += 2; this.burst('star', e.x, 3, e.z, 60, 12, 1.8, 1.3, [0xffe04a, 0xffffff, 0xff9ae0, 0x8affea], 2); break;
        case 'alpha': { this.sound.play('roar'); this.sound.play('alert'); this.hint('alpha', 3600); break; }
        case 'alphaDown': { const sp = SPECIES[e.kind]; const ar = I.getLang() !== 'en'; this.sound.play('roar'); this.voice.say('trick'); this.shake += 1; this.banner(I.t('defeated'), ar ? sp.ar : sp.en); this.burst('star', e.x, 3, e.z, 40, 10, 1.4, 1.1, [0xffe04a, 0xffffff, 0xff9ae0, 0x8affea], 2); break; }
        case 'complete': this._finish(e); break;
        default: break;
      }
    }
  }

  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    const sim = this.sim; const live = this.mode === 'play' && !this.paused;
    if (this.mode === 'menu' || live) {
      const inp = live ? this._input() : { x: 0, z: 0, pounce: false };
      const ev = sim.step(dt, inp); if (live) this._events(ev);
    }
    if (live && !this.hudReady) { /* hud built in start */ }
    this._render(dt);
    if (live && this.hudReady) this._updateHud();
  }

  _render(dt) {
    const sim = this.sim; const p = sim.player; const clock = this.clock; const camPrev = this.camDist;
    this.camDist += (zoomFor(p.P) - this.camDist) * Math.min(1, dt * 1.6);
    const zf = this.camDist / 24; void camPrev;
    // player
    const pr = this.playerRec; this.pop = Math.max(1, (this.pop || 1) - dt * 1.4);
    pr.W.position.set(p.x, 0, p.z); pr.m.rotation.y = p.face;
    const pm = pr.m; const sc = p.r * FM.biped * this.pop; pm.scale.setScalar(sc); pr.sh.scale.setScalar(p.r * 1.25);
    pm.userData.open = p.pounceT > 0 ? 1 : 0;
    const stepped = animate(pm, dt, p.speedNow * (p.pounceT > 0 ? 0.5 : 1), clock);
    pm.position.y = p.pounceT > 0 ? Math.sin((1 - p.pounceT / 0.32) * Math.PI) * 0.9 : 0; pm.rotation.x = p.pounceT > 0 ? -0.35 : 0;
    pm.visible = p.inv <= 0 || Math.floor(clock * 18) % 2 === 0 || p.inv > 1e8;
    if (stepped && this.mode === 'play' && !this.paused) {
      const heavy = Math.min(1, p.r / 3); this.shake += (0.012 + 0.05 * heavy * heavy) * (p.stage >= 1 ? 1 : 0.5); if (p.stage >= 1) this.sound.play('stomp', heavy);
      this.burst('puff', p.x - Math.sin(p.face) * p.r * 0.5, 0.2, p.z - Math.cos(p.face) * p.r * 0.5, 2 + p.stage, 1.5 + p.r * 0.4, 0.5, 0.8 + p.r * 0.5, [0xcbb68a], 0);
    }
    pr.spr.position.set(p.x, pm.userData.top * sc + 0.4 * zf, p.z); pr.spr.scale.set(3.2 * zf, 1.6 * zf, 1);
    const pk = String(Math.round(p.P)); if (pr.key !== pk) { pr.key = pk; pr.spr.material = numMat(I.num(Math.round(p.P)), 'gold'); }
    // creatures
    const seen = new Set();
    for (const c of sim.creatures) {
      seen.add(c.id); const rec = this.recs.get(c.id) || this._creatureRec(c);
      const far = Math.hypot(c.x - p.x, c.z - p.z) > this.camDist * 1.5 + 8; rec.W.visible = !far; rec.spr.visible = !far; if (far) continue;
      rec.age = Math.min(1, rec.age + dt * 2.5); const pop = 1 - Math.pow(1 - rec.age, 3);
      rec.W.position.set(c.x, 0, c.z); rec.m.rotation.y = c.face; rec.m.scale.setScalar(rec.sc * pop);
      rec.m.userData.lift = 0; rec.m.userData.open = c.chase ? 1 : 0; animate(rec.m, dt, c.speed, clock);
      const tone = toneOf(c.power, p.P); const key = `${tone}`; if (rec.key !== key) { rec.key = key; rec.spr.material = numMat(I.num(c.power), tone); }
      rec.spr.position.set(c.x, rec.m.userData.top * rec.sc + 0.4 * zf, c.z); rec.spr.scale.set(2.6 * zf, 1.3 * zf, 1);
    }
    for (const [id, r] of this.recs) if (!seen.has(id)) { this.things.remove(r.W, r.spr); this.recs.delete(id); }
    // vanishing creatures: swirl into sparkles toward the player's mouth
    for (const v of this.vanish) { v.t += dt * 3.5; const k = Math.min(1, v.t); v.W.scale.setScalar(Math.max(0.001, 1 - k)); v.W.position.set(v.x + (p.x - v.x) * k * 0.6, k * 1.4, v.z + (p.z - v.z) * k * 0.6); v.W.rotation.y += dt * 12; }
    this.vanish = this.vanish.filter((v) => { if (v.t >= 1) { this.things.remove(v.W); return false; } return true; });
    // boss
    const b = sim.boss; const br = this.boss;
    if (b && br) {
      br.W.position.set(b.x, 0, b.z); br.m.rotation.y = b.face;
      const tele = b.tele; const target = tele ? (tele.type === 'stomp' ? 1 : 2) : 0; br.pose += (target - br.pose) * Math.min(1, dt * 6);
      const rise = Math.min(1, br.pose); const lift = Math.max(0, br.pose - 1);
      br.m.userData.body.rotation.x = b.down ? 0 : -0.45 * rise; br.m.userData.lift = lift; br.m.userData.open = tele && tele.type === 'fire' ? 1 : 0;
      if (b.down) { br.fall = Math.min(1, br.fall + dt * 0.8); br.m.rotation.z = br.fall * 1.5; br.m.position.y = -br.fall * 1.5; }
      if (b.stagger > 0) br.m.rotation.z = Math.sin(clock * 30) * 0.08;
      const st = animate(br.m, dt, b.speedNow * 2.2, clock);
      if (st && this.mode === 'play' && !this.paused) { const d = Math.hypot(b.x - p.x, b.z - p.z); this.shake += Math.max(0, 0.25 - d * 0.004); if (d < 40) this.sound.play('stomp', 1); }
      br.spr.visible = !b.down; br.spr.position.set(b.x, 12.5 * zf * 0.4 + b.r * 3.1, b.z); br.spr.scale.set(4 * zf, 2 * zf, 1);
      const ready = p.P > b.power; if (ready && !this.shown.has('bossReady') && this.mode === 'play') this.hint('bossReady', 3600);
      this._tele(b, dt);
    } else this._tele(null, dt);
    // fireballs
    const liveP = new Set();
    for (const q of sim.projectiles) { liveP.add(q.id); let m = this.projMeshes.get(q.id); if (!m) { m = mesh(geo.sphere, BM(0xff7a1a), 0, 1, 0, 1.5, 1.5, 1.5); m.add(mesh(geo.sphere, BM(0xffe08a), 0, 0, 0, 0.55, 0.55, 0.55)); this.things.add(m); this.projMeshes.set(q.id, m); } m.position.set(q.x, 1.1, q.z); if (Math.random() < 0.5) this.emit('dot', q.x, 1.1, q.z, 0, 0.5, 0, 0.5, 1.4, 0xff9a2a, 0); }
    for (const [id, m] of this.projMeshes) if (!liveP.has(id)) { this.things.remove(m); this.projMeshes.delete(id); }
    // shock ring
    if (this.shockT > 0) { this.shockT -= dt; const k = 1 - this.shockT / 0.55; this.shock.visible = true; this.shock.scale.setScalar(Math.max(0.1, this.shockR * k)); this.shock.material.opacity = 0.8 * (1 - k); } else this.shock.visible = false;
    // ambience particles
    this._amb = (this._amb || 0) - dt; if (this._amb <= 0) { this._amb = 0.12; const id = sim.L.look || sim.L.id; const x = p.x + (Math.random() - 0.5) * this.camDist * 1.8; const z = p.z + (Math.random() - 0.5) * this.camDist * 1.4;
      if (id === 'volcano') this.emit('dot', x, 14, z, -0.8, -3, 0.4, 4, 0.5, Math.random() < 0.5 ? 0xff9a3a : 0x6a5a5a, 0);
      else if (id === 'swamp') this.emit('dot', x, 0.2, z, 0, 1.2, 0, 2.2, 0.6, 0xcfe8d0, 0, 0.5);
      else this.emit('leaf', x, 12, z, 0.6, -2.2, 0.3, 5, 0.6, 0x6adb5a, 0); }
    this._parts(dt);
    // camera
    this.shake = Math.max(0, this.shake - dt * 3); const sh = Math.min(1.5, this.shake) * 0.25 * zf * (0.4 + Math.min(1, p.r / 3) * 0.6);
    const portrait = this.cw < this.ch; const d = this.camDist * (portrait ? 1.05 : 1);
    if (this.mode === 'menu') { const a = clock * 0.25; this.camera.position.set(p.x + Math.sin(a) * 10, 6.5, p.z + Math.cos(a) * 10); this.camera.lookAt(p.x, 1.5, p.z); }
    else { this.camera.position.set(p.x + (Math.random() - 0.5) * sh, d * 0.88, p.z + d * 0.46 + (Math.random() - 0.5) * sh); this.camera.lookAt(p.x, 0, p.z - d * 0.03); }
    this.sun.position.set(p.x - 12, 30, p.z + 10); this.sun.target.position.set(p.x, 0, p.z); this.sun.target.updateMatrixWorld();
    this.renderer.render(this.scene, this.camera);
    if (this.arrowEl) {
      const A = sim.alpha;
      if (A && this.mode === 'play') {
        const v = new THREE.Vector3(A.x, 1, A.z).project(this.camera); let sx = (v.x * 0.5 + 0.5) * this.cw, sy = (-v.y * 0.5 + 0.5) * this.ch; if (v.z > 1) { sx = this.cw - sx; sy = this.ch - sy; }
        const m = this.u * 6, off = sx < m || sx > this.cw - m || sy < m * 2.4 || sy > this.ch - m * 2.4 || v.z > 1;
        if (off) { const cx = this.cw / 2, cy = this.ch / 2, ang = Math.atan2(sy - cy, sx - cx); const k = Math.min((cx - m) / Math.abs(Math.cos(ang) || 1e-6), (cy - m * 2.4) / Math.abs(Math.sin(ang) || 1e-6)); this.arrowEl.style.display = 'block'; this.arrowEl.style.transform = `translate(${cx + Math.cos(ang) * k}px,${cy + Math.sin(ang) * k}px) rotate(${ang}rad)`; } else this.arrowEl.style.display = 'none';
      } else this.arrowEl.style.display = 'none';
    }
    this._floats(dt);
  }

  _tele(b, dt) {
    void dt; const t = b && b.tele;
    this.teleDisc.visible = this.teleFill.visible = this.teleLine.visible = false;
    if (!t) return; const k = Math.min(1, t.t / t.dur); const pulse = 0.25 + 0.2 * Math.sin(this.clock * 14);
    if (t.type === 'stomp') { this.teleDisc.visible = this.teleFill.visible = true; this.teleDisc.position.set(b.x, 0.08, b.z); this.teleDisc.scale.setScalar(t.radius); this.teleDisc.material.opacity = 0.18 + pulse * 0.5; this.teleFill.position.set(b.x, 0.1, b.z); this.teleFill.scale.setScalar(Math.max(0.1, t.radius * k)); }
    else { this.teleLine.visible = true; const len = 26; this.teleLine.scale.set(3.4, 1, len); this.teleLine.rotation.set(0, t.ang, 0); this.teleLine.position.set(b.x + Math.sin(t.ang) * len / 2, 0.09, b.z + Math.cos(t.ang) * len / 2); this.teleLine.material.opacity = (t.locked ? 0.35 : 0.2) + pulse * 0.6; }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKeyUp); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.DinoGrow = api;
export default api;
