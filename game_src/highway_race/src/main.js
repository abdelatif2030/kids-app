// «سباق الغروب» — Sunset Highway. Entry: window.SunsetHighway.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A red sports car on a palm-lined coastal highway at sunset: beat the clock, overtake the blue rival and keep the lead. Drag to
// steer between four lanes, weave through cars and trucks (a bump only slows you), tap NITRO on clear gaps. The road bends along
// the shore. Three stages (sunset, dusk, harbour night). three.js, art and sound made in code. No network, no ads, no tracking.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Race, STAGES, LANES, HALF, bend, bendSlope, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

// Voice clips generated for this game live in voice/<lang>/ (see cozy_kit/voice.js for the event banks).
const VOICE_CLIPS = { go: 2, nitro: 3, overtake: 3, overtaken: 2, near: 3, bump: 2, charge: 2, win: 2, lose: 2, count: 1 };
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadSprites, makeSpriteVehicle, loadGLBs, makeModelVehicle } from '../../cozy_kit/art.js';
import { makeRealCar } from '../../cozy_kit/real_car.js';

const CAR_PICS = ['car_blue', 'car_red', 'car_pink', 'car_orange', 'car_black', 'car_taxi', 'car_sedan_blue', 'car_sedan_green', 'car_police'];
const HEAVY_PICS = ['car_truck', 'car_van', 'car_bus'];
/** A painted car (drawn from behind) standing on the road; this game's cars face +z, so the picture is turned to face the camera behind them. */
function paintedCar(sp, width) { const v = makeSpriteVehicle(THREE, sp, width); v.body.rotation.y = Math.PI; const g = new THREE.Group(); g.add(v.root); return g; }

const S = {
  title: ['سباق الغروب', 'Sunset Highway'], stage: ['المرحلة', 'Stage'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'], again: ['تاني', 'Again'], next: ['المرحلة الجاية', 'Next stage'], how: ['اسحب يمين وشمال بين الحارات — نيترو في الطريق الفاضي', 'Drag between lanes — nitro on a clear road'],
  nitro: ['نيترو', 'NITRO'], first: ['الأول! 🏁', '1st! 🏁'], second: ['الثاني', '2nd'], won: ['كسبت السباق! 🏆', 'You won! 🏆'], lostRival: ['المنافس سبقك.. جرّب تاني!', 'The rival beat you.. try again!'],
  timeup: ['الوقت خلص.. جرّب تاني!', 'Time is up.. try again!'], locked: ['اكسب المرحلة اللي قبلها', 'Win the stage before'], go: ['انطلق!', 'GO!'], kmh: ['كم/س', 'km/h'],
  ahead: ['أنت في المقدمة', 'You lead'], behind: ['المنافس قدامك', 'Rival ahead'], behindN: ['برق قدامك', 'Barq is ahead'], taunt: ['برق بيقول: إلحقني لو تقدر! 😄', 'Barq says: catch me if you can! 😄'], rainbow: ['قوس قزح! 🌈', 'A rainbow! 🌈'], almost: ['قربت أوي! حاول تاني 💪', 'So close! Try again 💪'], stickers: ['ملصقاتي 🏅', 'My stickers 🏅'], carColor: ['لون العربية 🎨', 'Car colour 🎨'], rest: ['استراحة سريعة 🌴', 'A quick rest 🌴'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], overtake: ['عدّيته! 👍', 'Overtake! 👍'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], m: ['م', 'm'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  constructor() { super(); this.eng = null; }
  startEngine() {
    const c = this.ctx;
    if (!c || this.eng) return;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = c.createGain(); g.gain.value = 0.0001;
    o1.connect(lp); const g2 = c.createGain(); g2.gain.value = 0.4; o2.connect(g2).connect(lp);
    lp.connect(g).connect(this.sfx);
    o1.start(); o2.start();
    this.eng = { o1, o2, lp, g };
  }
  engine(speed, nitro, gear = 1, rpm = 0) {
    if (!this.eng || !this.ctx) return;
    const t = this.ctx.currentTime;
    // the note climbs inside each gear and drops at the shift — your ears feel the gearbox
    const f = 46 + gear * 7 + rpm * 62 + (nitro ? 24 : 0);
    this.eng.o1.frequency.setTargetAtTime(f, t, 0.05);
    this.eng.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    this.eng.lp.frequency.setTargetAtTime(420 + rpm * 620 + speed * 9 + (nitro ? 800 : 0), t, 0.1);
    this.eng.g.gain.setTargetAtTime(this.muted ? 0.0001 : 0.05 + Math.min(0.05, speed * 0.0012), t, 0.1);
  }
  stopEngine() { if (this.eng) { try { this.eng.o1.stop(); this.eng.o2.stop(); } catch (_) { /* fine */ } this.eng = null; } }
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'nitro': this.noise(t, 0.8, 0.14, 'bandpass', 600, 1, this.sfx, 2500); this.slide('sawtooth', 120, 400, t, 0.5, 0.06); break;
      case 'bump': // a gentle cartoon "boing" (never a crash): pitch bends up then settles, over a soft thud
        this.slide('sine', 150, 430, t, 0.10, 0.13); this.slide('sine', 430, 190, t + 0.10, 0.17, 0.11); this.noise(t, 0.06, 0.05, 'lowpass', 800); break;
      case 'beep': this.tone('square', 440, t, 0.15, 0.08); break;
      case 'go': this.tone('square', 880, t, 0.4, 0.1); break;
      case 'over': [0, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.07, 0.2, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'lose': [0, -3, -7].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      case 'squeal': this.noise(t, 0.16, 0.026, 'bandpass', 950, 3, this.sfx, 1500); break;
      case 'cheer': this.noise(t, 0.55, 0.05, 'bandpass', 700, 0.8); this.noise(t + 0.09, 0.45, 0.04, 'bandpass', 1050, 0.8); break;
      default: break;
    }
  }
  /** collecting a road star sings one note higher each time (a rising pentatonic scale) */
  pickup(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const scale = [0, 2, 4, 7, 9, 12, 14, 16];
    const t = c.currentTime;
    const s = scale[(Math.max(1, n) - 1) % scale.length];
    this.tone('triangle', hz(84 + s), t, 0.22, 0.12);
    this.tone('sine', hz(96 + s), t, 0.3, 0.05);
  }
  /** cute traffic voices: a friendly double-beep, or a soft wee-woo for police / ambulance */
  honk(pitch = 1, weewoo = false) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    if (weewoo) {
      for (let i = 0; i < 2; i++) { this.tone('sine', 660, t + i * 0.34, 0.16, 0.04); this.tone('sine', 520, t + i * 0.34 + 0.17, 0.16, 0.04); }
    } else {
      this.tone('square', 330 * pitch, t, 0.09, 0.045);
      this.tone('square', 330 * pitch, t + 0.15, 0.12, 0.045);
    }
  }
  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); this.stopEngine(); this._tier = -1; return; }
    this.startEngine();
    this.setBed('waves');
    // dynamic layered music: one cheerful C-major melody in four arrangements — calm at low
    // speed, bass joins as you hurry, full band at racing speed, and a sparkle lift on nitro.
    // Hysteresis in musicTick() keeps the arrangement from flapping at the thresholds.
    // (Named musicTick, NOT music: SynthBase.unlock() sets this.music to the music
    // gain node, which would shadow a music() method and crash _update — found
    // 2026-11-27 when the owner played the real click flow; headless tests that
    // start races programmatically never unlock audio, so they missed it.)
    const melody = [
      [0, 72, 1], [1, 76, 1], [2, 79, 1], [3, 76, 0.5], [3.5, 79, 0.5],
      [4, 81, 1], [5, 79, 1], [6, 76, 1], [7, 74, 1],
      [8, 72, 1], [9, 76, 1], [10, 79, 1], [11, 81, 0.5], [11.5, 79, 0.5],
      [12, 76, 1], [13, 74, 1], [14, 72, 2],
    ];
    const bass = [
      [0, 48, 1], [1, 55, 1], [2, 48, 1], [3, 55, 1], [4, 53, 1], [5, 57, 1], [6, 53, 1], [7, 57, 1],
      [8, 48, 1], [9, 55, 1], [10, 48, 1], [11, 55, 1], [12, 43, 1], [13, 50, 1], [14, 48, 1], [15, 48, 1],
    ];
    const sparkle = [];
    for (let b = 0; b < 16; b += 2) { sparkle.push([b + 0.5, 88 + ((b * 3) % 12), 0.25]); sparkle.push([b + 1.5, 91 + ((b * 5) % 9), 0.25]); }
    this.tunes = [
      { tempo: 132, beats: 16, wave: 'triangle', vol: 0.030, notes: melody.filter((n) => n[0] % 1 === 0) },
      { tempo: 140, beats: 16, wave: 'triangle', vol: 0.036, notes: [...melody, ...bass] },
      { tempo: 140, beats: 16, wave: 'square', vol: 0.038, notes: [...melody, ...bass] },
      { tempo: 148, beats: 16, wave: 'square', vol: 0.046, notes: [...melody, ...bass, ...sparkle] },
    ];
    this._tier = 0;
    this.setTune(this.tunes[0]);
  }
  /** follows the race: picks the music arrangement for the current speed / nitro state */
  musicTick(v, nitro) {
    if (!this.tunes) return;
    const cur = this._tier || 0;
    let want = 0;
    if (nitro) want = 3;
    else if (v >= (cur >= 2 ? 22 : 26)) want = 2;
    else if (v >= (cur >= 1 ? 9 : 12)) want = 1;
    if (want === cur) return;
    this._tier = want;
    this.setTune(this.tunes[want]);
  }
}

const geo = { sphere: new THREE.SphereGeometry(0.5, 12, 8), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), cone: new THREE.ConeGeometry(0.5, 1, 8) };
const scratchCol = new THREE.Color(); // reused by burst()/burstSky(): a fresh Color per burst was per-frame garbage during nitro

// garage: hero paint colours — red is free, the others are gifts for finishing stages 2, 4 and 6
const HERO_COLORS = [0xef3e4a, 0x2a9d8f, 0xb197fc, 0xffcf3f];
const STAGE_EMOJI = ['🌊', '🏔️', '🌙', '🏜️', '🗼', '🏝️'];

/** a hand-drawn golden star on a transparent canvas (pickups + bump stars share the look) */
function makeStarTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffd23a'; g.strokeStyle = '#e8a020'; g.lineWidth = 3;
  g.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5; const rad = i % 2 ? 11 : 26; const x = 32 + Math.cos(a) * rad; const y = 32 + Math.sin(a) * rad; if (i) g.lineTo(x, y); else g.moveTo(x, y); }
  g.closePath(); g.fill(); g.stroke();
  return new THREE.CanvasTexture(cv);
}
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }

function makeCar(color, sport) {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(color), 0, 0.5, 0, 1.7, 0.55, 4.1));
  g.add(mesh(geo.box, M(0x1a2a3a, 0x102030), 0, 1.0, -0.2, 1.4, 0.5, 1.8));
  g.add(mesh(geo.box, M(color), 0, 1.28, -0.2, 1.3, 0.1, 1.5));
  if (sport) g.add(mesh(geo.box, M(0x222222), 0, 1.0, -2.0, 1.9, 0.1, 0.4));
  for (const z of [1.3, -1.3]) for (const x of [-0.9, 0.9]) g.add(mesh(geo.cyl, M(0x111111), x, 0.35, z, 0.7, 0.4, 0.7).rotateZ(Math.PI / 2));
  g.add(mesh(geo.box, M(0xffffcc, 0xffffaa), -0.55, 0.55, 2.05, 0.3, 0.15, 0.05), mesh(geo.box, M(0xffffcc, 0xffffaa), 0.55, 0.55, 2.05, 0.3, 0.15, 0.05));
  g.add(mesh(geo.box, M(0xff2a2a, 0xff0000), -0.6, 0.6, -2.05, 0.35, 0.15, 0.05), mesh(geo.box, M(0xff2a2a, 0xff0000), 0.6, 0.6, -2.05, 0.35, 0.15, 0.05));
  return g;
}
function makeTruck(color) {
  const g = new THREE.Group();
  g.add(mesh(geo.box, M(0x3a3f4a), 0, 1.2, 2.4, 2.1, 2.2, 1.8));
  g.add(mesh(geo.box, M(color), 0, 1.7, -0.9, 2.3, 3.0, 5.4));
  for (const z of [2.6, -0.6, -2.4]) for (const x of [-1.1, 1.1]) g.add(mesh(geo.cyl, M(0x111111), x, 0.5, z, 1.0, 0.5, 1.0).rotateZ(Math.PI / 2));
  g.add(mesh(geo.box, M(0xff2a2a, 0xff0000), -0.7, 0.9, -3.65, 0.4, 0.2, 0.05), mesh(geo.box, M(0xff2a2a, 0xff0000), 0.7, 0.9, -3.65, 0.4, 0.2, 0.05));
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    // Lite mode (?lite=1 in the URL, or config.lite): for modest laptops — pixel ratio locked
    // to 1, shadow maps off, no birds/fireflies, static clouds and fans, throttled mascot
    // texture uploads. Rendering only: stages, sim, physics, voices, music, UI and scoring
    // are identical to normal mode.
    this.lite = !!config.lite;
    try { if (new URLSearchParams(window.location.search).get('lite') === '1') this.lite = true; } catch (_) { /* app webview: no query string */ }
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: VOICE_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this.shake = 0;
    if (!document.getElementById('sh-style')) document.head.append(h('style', { id: 'sh-style' }, css('sh', '#e8742a', '#8a2a3a', '#ffd23a') + '.sh-big{position:absolute;bottom:calc(var(--u)*5);right:calc(var(--u)*4);width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:50%;border:calc(var(--u)*.8) solid #fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#fff;background:linear-gradient(180deg,#5ab8ff,#2a6ae8);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}.sh-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*30);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*1) rgba(0,0,0,.6);paint-order:stroke fill;pointer-events:none}.sh-time{font-size:calc(var(--u)*6)}.sh-count.pop{animation:sh-cpop .45s ease-out}@keyframes sh-cpop{0%{transform:translate(-50%,-50%) scale(1.7)}60%{transform:translate(-50%,-50%) scale(.92)}100%{transform:translate(-50%,-50%) scale(1)}}.sh-trophy{font-size:calc(var(--u)*13);text-align:center;animation:sh-tbounce 1s ease-in-out infinite}@keyframes sh-tbounce{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(calc(var(--u)*-1.6)) rotate(4deg)}}.sh-stars span{display:inline-block;animation:sh-starpop .5s cubic-bezier(.2,2.2,.4,1) both}@keyframes sh-starpop{from{transform:scale(0) rotate(-40deg);opacity:0}to{transform:scale(1) rotate(0);opacity:1}}.sh-card{max-height:94dvh;overflow-y:auto}.sh-round{width:max(52px,calc(var(--u)*11));height:max(52px,calc(var(--u)*11))}.sh-btn{min-height:max(50px,calc(var(--u)*9))}'));
    this.root = h('div', { class: 'sh-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'sh-layer' });
    this.mode = 'menu'; this.clock = 0;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.sprites = {}; this.glbs = null;
    Promise.all([this._fonts(), loadGLBs(GLTFLoader, this.base, ['sedan', 'sedan-sports', 'hatchback-sports', 'taxi', 'suv', 'suv-luxury', 'van', 'truck', 'delivery', 'garbage-truck', 'police', 'ambulance', 'firetruck']).then((g) => { this.glbs = g; }), loadSprites(THREE, this.base, [...CAR_PICS, ...HEAVY_PICS]).then((sp) => { this.sprites = sp; })]).then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _three() {
    // powerPreference asks Windows/Chrome for the real GPU (not a low-power path), and the
    // game never uses the stencil buffer — dropping it saves depth/stencil bandwidth per frame
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', stencil: false });
    this.basePR = this.lite ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    this.renderer.setPixelRatio(this.basePR);
    if (this.lite) this.renderer.shadowMap.enabled = false; // the game uses no shadow maps; keep them off explicitly
    this.degradeLevel = 0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    // sunset sky as the environment map: car paint picks up warm glossy reflections (the NFS shine)
    {
      const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256;
      const g2 = cv.getContext('2d');
      const gr = g2.createLinearGradient(0, 0, 0, 256);
      gr.addColorStop(0, '#3a4a8a'); gr.addColorStop(0.42, '#b85a8a'); gr.addColorStop(0.55, '#ff8a4a'); gr.addColorStop(0.62, '#ffd9a0'); gr.addColorStop(0.68, '#7a4a3a'); gr.addColorStop(1, '#2a1a2a');
      g2.fillStyle = gr; g2.fillRect(0, 0, 512, 256);
      const rg = g2.createRadialGradient(256, 148, 4, 256, 148, 95);
      rg.addColorStop(0, 'rgba(255,242,205,1)'); rg.addColorStop(1, 'rgba(255,242,205,0)');
      g2.fillStyle = rg; g2.fillRect(0, 0, 512, 256);
      const envTex = new THREE.CanvasTexture(cv);
      envTex.mapping = THREE.EquirectangularReflectionMapping;
      envTex.colorSpace = THREE.SRGBColorSpace;
      this.scene.environment = envTex;
    }
    this.camera = new THREE.PerspectiveCamera(64, 1, 0.3, 700);
    this.hemi = new THREE.HemisphereLight(0xffd0a0, 0x6a3a2a, 1.5);
    this.sun = new THREE.DirectionalLight(0xffa060, 1.4);
    this.sun.position.set(-30, 30, 60);
    this.scene.add(this.hemi, this.sun);
    // the sun is a soft glow sprite, not a hard ball: a radial-gradient disc that melts into the sky
    {
      const cv = document.createElement('canvas'); cv.width = cv.height = 128;
      const g2 = cv.getContext('2d');
      const gr = g2.createRadialGradient(64, 64, 2, 64, 64, 63);
      gr.addColorStop(0, 'rgba(255,244,205,1)'); gr.addColorStop(0.4, 'rgba(255,214,150,.75)'); gr.addColorStop(1, 'rgba(255,190,120,0)');
      g2.fillStyle = gr; g2.fillRect(0, 0, 128, 128);
      this.sunDisc = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), color: 0xfff0c0, transparent: true, depthWrite: false, fog: false }));
      this.sunDisc.scale.set(150, 150, 1);
      this.sunDisc.position.set(0, 40, 600);
      this.scene.add(this.sunDisc);
    }
    this.sea = mesh(geo.box, M(0x2a7a9a), 0, -0.6, 0, 600, 0.2, 800);
    this.sand = mesh(geo.box, M(0xe8c888), 0, -0.3, 0, 600, 0.2, 800);
    this.scene.add(this.sea);
    // scenery is MERGED into vertex-coloured geometries (bake() = transform + paint in one
    // step): a road segment was 7 meshes, a palm 9 — merging is the big draw-call win.
    const bake = (g0, color, x, y, z, sx, sy, sz, ry = 0) => {
      const g2 = g0.clone();
      g2.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(sx, sy, sz)));
      const n = g2.attributes.position.count;
      const col = new Float32Array(n * 3);
      const c = new THREE.Color(color);
      for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
      g2.setAttribute('color', new THREE.BufferAttribute(col, 3));
      return g2;
    };
    const vcMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
    const segBase = [
      bake(geo.box, 0x3a3e46, 0, -0.1, 0, HALF * 2, 0.2, 6.4),
      bake(geo.box, 0xf4f4f4, -HALF + 0.2, 0.02, 0, 0.25, 0.04, 6.4),
      bake(geo.box, 0xf4f4f4, HALF - 0.2, 0.02, 0, 0.25, 0.04, 6.4),
      bake(geo.box, 0xe8c888, -HALF - 9, -0.15, 0, 16, 0.2, 6.4),
      bake(geo.box, 0xd8b878, HALF + 9, -0.15, 0, 16, 0.2, 6.4),
    ];
    const segDash = [...segBase];
    for (const x of [-3, 0, 3]) segDash.push(bake(geo.box, 0xf4e8a0, x, 0.02, 0, 0.18, 0.04, 2.6));
    const segGeoA = mergeGeometries(segDash);
    const segGeoB = mergeGeometries(segBase);
    this.road = [];
    for (let i = 0; i < 70; i++) {
      const seg = new THREE.Mesh(i % 2 === 0 ? segGeoA : segGeoB, vcMat);
      this.scene.add(seg);
      this.road.push(seg);
    }
    const palmParts = [bake(geo.cyl, 0xa9743f, 0, 2.2, 0, 0.5, 4.4, 0.5)];
    for (let k = 0; k < 6; k++) palmParts.push(bake(geo.sphere, k % 2 ? 0x35b84a : 0x5ed95e, Math.cos(k) * 1.4, 4.6, Math.sin(k) * 1.4, 0.55, 0.20, 2.6, -k));
    palmParts.push(bake(geo.sphere, 0x7a4a26, 0.28, 4.32, 0.1, 0.24, 0.24, 0.24));
    palmParts.push(bake(geo.sphere, 0x8a5a2e, -0.24, 4.28, -0.12, 0.20, 0.20, 0.20));
    const palmGeo = mergeGeometries(palmParts);
    this.palms = [];
    for (let i = 0; i < 36; i++) {
      const p = new THREE.Mesh(palmGeo, vcMat);
      this.scene.add(p);
      this.palms.push(p);
    }
    // stars for the night stage, white rocks for the desert stage (each stage its own world)
    {
      const N = 420;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const a = Math.random() * Math.PI * 2, e = 0.12 + Math.random() * 1.3, r = 520;
        pos[i * 3] = Math.cos(a) * Math.cos(e) * r;
        pos[i * 3 + 1] = Math.sin(e) * r * 0.6 + 12;
        pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      this.stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.9 }));
      this.stars.visible = false;
      this.scene.add(this.stars);
    }
    const rockGeo = mergeGeometries([
      bake(geo.sphere, 0xf2ead8, 0, 0.9, 0, 2.6, 1.9, 2.2),
      bake(geo.cone, 0xe6dcc4, 1.5, 1.1, 0.4, 1.7, 2.3, 1.7),
      bake(geo.sphere, 0xefe4cc, -1.4, 0.55, -0.3, 1.5, 1.1, 1.3),
    ]);
    this.rocks = [];
    for (let i = 0; i < 26; i++) {
      const r = new THREE.Mesh(rockGeo, vcMat);
      r.visible = false;
      this.scene.add(r);
      this.rocks.push(r);
    }
    // a living cartoon sky (owner 2026-11-27): puffy clouds drifting overhead and birds flapping in the distance
    const cloudGeo = mergeGeometries([
      bake(geo.sphere, 0xffffff, 0, 0, 0, 7, 2.2, 3.4),
      bake(geo.sphere, 0xf4f6ff, -3.4, -0.3, 0.4, 4.6, 1.7, 2.6),
      bake(geo.sphere, 0xfdfdff, 3.4, -0.2, -0.3, 5.2, 1.9, 2.9),
    ]);
    this.clouds = [];
    for (let i = 0; i < 7; i++) {
      const cl = new THREE.Mesh(cloudGeo, vcMat);
      cl.userData = { off: i * 85 + (i % 3) * 31, x: (i % 2 ? -1 : 1) * (55 + (i * 23) % 70), y: 25 + (i * 7) % 13, drift: 1.1 + (i % 3) * 0.35 };
      this.scene.add(cl);
      this.clouds.push(cl);
    }
    this.birds = [];
    for (let i = 0; i < (this.lite ? 0 : 3); i++) { // lite: no birds to spawn or flap
      const b = new THREE.Group();
      const bm = M(0x2a3242);
      const wl = mesh(geo.box, bm, -0.55, 0, 0, 1.1, 0.05, 0.34);
      const wr = mesh(geo.box, bm, 0.55, 0, 0, 1.1, 0.05, 0.34);
      const pl = new THREE.Group(); pl.add(wl); wl.position.x = -0.55;
      const pr = new THREE.Group(); pr.add(wr); wr.position.x = 0.55;
      b.add(pl); b.add(pr);
      b.userData = { pl, pr, ph: i * 2.1, r: 95 + i * 22, h: 19 + i * 2.5, sp: 0.045 + i * 0.008 };
      this.scene.add(b);
      this.birds.push(b);
    }
    // ---- a living world (ALIVE step 3): checkpoint arches with balloons and bunting, sailboats,
    // a lighthouse, cheering fans, friendly picture billboards, a sun glow and night fireflies.
    // Everything is merged vertex-coloured geometry, so the whole set costs a handful of calls.
    {
      const archParts = [
        bake(geo.box, 0x2a9d8f, -(HALF + 0.5), 2.6, 0, 0.55, 5.2, 0.55),
        bake(geo.box, 0x2a9d8f, HALF + 0.5, 2.6, 0, 0.55, 5.2, 0.55),
        bake(geo.box, 0xffffff, 0, 5.35, 0, (HALF + 0.5) * 2 + 0.55, 0.6, 0.6),
      ];
      const flagCols = [0xef3e4a, 0xffcf3f, 0x35a7e8, 0x6aff8a, 0xff8ac2, 0xff922b, 0xb197fc];
      for (let i = 0; i < 7; i++) archParts.push(bake(geo.box, flagCols[i], -HALF + 1 + i * ((HALF * 2 - 2) / 6), 4.85, 0, 0.5, 0.42, 0.08));
      const archGeo = mergeGeometries(archParts);
      const mkArch = () => {
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(archGeo, vcMat));
        grp.userData.balloons = [];
        const bCols = [0xef3e4a, 0xffcf3f, 0x35a7e8];
        for (let i = 0; i < 3; i++) {
          const bg = mergeGeometries([bake(geo.cyl, 0x888888, 0, -0.5, 0, 0.03, 1.0, 0.03), bake(geo.sphere, bCols[i], 0, 0.35, 0, 0.62, 0.78, 0.62)]);
          const b = new THREE.Mesh(bg, vcMat);
          b.position.set((i - 1) * (HALF + 0.5), 5.6, 0);
          grp.add(b);
          grp.userData.balloons.push(b);
        }
        this.scene.add(grp);
        return grp;
      };
      this.arch = mkArch();
      this.archGold = mkArch();
      const boatGeo = mergeGeometries([
        bake(geo.box, 0xef3e4a, 0, 0.3, 0, 1.6, 0.6, 4.2),
        bake(geo.cyl, 0x8a5a2e, 0, 1.6, 0.2, 0.09, 2.2, 0.09),
        bake(geo.cone, 0xffffff, 0, 2.2, 0.2, 2.6, 2.6, 0.12),
      ]);
      this.boats = [];
      for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(boatGeo, vcMat); b.userData = { off: i * 210 + 90 }; this.scene.add(b); this.boats.push(b); }
      const lightGeo = mergeGeometries([
        bake(geo.cyl, 0xffffff, 0, 1.5, 0, 2.2, 3, 2.2),
        bake(geo.cyl, 0xef3e4a, 0, 3.4, 0, 1.9, 0.9, 1.9),
        bake(geo.cyl, 0xffffff, 0, 4.9, 0, 1.6, 2.1, 1.6),
        bake(geo.cyl, 0x2a3242, 0, 6.6, 0, 1.7, 0.5, 1.7),
      ]);
      this.lighthouse = new THREE.Mesh(lightGeo, vcMat);
      this.lampMat = new THREE.MeshBasicMaterial({ color: 0xffe89a });
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), this.lampMat);
      lamp.position.y = 6.05;
      this.lighthouse.add(lamp);
      this.scene.add(this.lighthouse);
      const fanCols = [0xff8ac2, 0x35a7e8, 0xffcf3f, 0x6aff8a, 0xff922b, 0xb197fc];
      this.fans = [];
      for (let i = 0; i < 10; i++) {
        const fg = mergeGeometries([
          bake(geo.cone, fanCols[i % 6], 0, 0.55, 0, 0.85, 1.1, 0.85),
          bake(geo.sphere, 0xffd9b3, 0, 1.35, 0, 0.52, 0.52, 0.52),
        ]);
        const f = new THREE.Mesh(fg, vcMat);
        f.userData = { off: i * 130 + 40, side: i % 2 ? 1 : -1, ph: i * 1.31 };
        this.scene.add(f);
        this.fans.push(f);
      }
      const drawBoard = (fn) => { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 160; fn(cv.getContext('2d')); return new THREE.CanvasTexture(cv); };
      const boards = [
        drawBoard((g) => { g.fillStyle = '#fff3d6'; g.fillRect(0, 0, 256, 160); g.fillStyle = '#ffb020'; g.beginPath(); g.arc(128, 80, 42, 0, 7); g.fill(); g.strokeStyle = '#ff922b'; g.lineWidth = 9; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; g.beginPath(); g.moveTo(128 + Math.cos(a) * 54, 80 + Math.sin(a) * 54); g.lineTo(128 + Math.cos(a) * 72, 80 + Math.sin(a) * 72); g.stroke(); } g.fillStyle = '#2a2a3a'; g.beginPath(); g.arc(112, 72, 5, 0, 7); g.arc(144, 72, 5, 0, 7); g.fill(); g.strokeStyle = '#2a2a3a'; g.lineWidth = 5; g.beginPath(); g.arc(128, 84, 18, 0.3, Math.PI - 0.3); g.stroke(); }),
        drawBoard((g) => { g.fillStyle = '#e3f2ff'; g.fillRect(0, 0, 256, 160); g.fillStyle = '#ffd23a'; g.strokeStyle = '#e8a020'; g.lineWidth = 5; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5; const rad = i % 2 ? 26 : 58; const x = 128 + Math.cos(a) * rad; const y = 82 + Math.sin(a) * rad; if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.closePath(); g.fill(); g.stroke(); }),
        drawBoard((g) => { g.fillStyle = '#ffe9f2'; g.fillRect(0, 0, 256, 160); g.fillStyle = '#ef3e4a'; g.beginPath(); g.moveTo(128, 138); g.bezierCurveTo(30, 80, 52, 18, 96, 22); g.bezierCurveTo(116, 24, 128, 40, 128, 52); g.bezierCurveTo(128, 40, 140, 24, 160, 22); g.bezierCurveTo(204, 18, 226, 80, 128, 138); g.fill(); }),
        drawBoard((g) => { g.fillStyle = '#e6fbf0'; g.fillRect(0, 0, 256, 160); g.strokeStyle = '#a9743f'; g.lineWidth = 13; g.beginPath(); g.moveTo(128, 148); g.quadraticCurveTo(122, 90, 130, 52); g.stroke(); g.strokeStyle = '#35b84a'; g.lineWidth = 11; for (let i = 0; i < 5; i++) { const a = -0.4 - i * 0.5; g.beginPath(); g.moveTo(130, 52); g.quadraticCurveTo(130 + Math.cos(a) * 44, 52 + Math.sin(a) * 30 - 12, 130 + Math.cos(a) * 72, 52 + Math.sin(a) * 44 + 16); g.stroke(); } }),
      ];
      this.boards = [];
      boards.forEach((tex, i) => {
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(mergeGeometries([bake(geo.box, 0x8a5a2e, 0, 1.4, 0, 0.35, 2.8, 0.35)]), vcMat));
        const face = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.9, 0.18), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 }));
        face.position.y = 3.6;
        grp.add(face);
        grp.userData = { off: i * 640 + 260, side: i % 2 ? 1 : -1 };
        this.scene.add(grp);
        this.boards.push(grp);
      });
      {
        const cv = document.createElement('canvas'); cv.width = cv.height = 128;
        const g = cv.getContext('2d');
        const gr = g.createRadialGradient(64, 64, 4, 64, 64, 64);
        gr.addColorStop(0, 'rgba(255,230,160,0.55)'); gr.addColorStop(1, 'rgba(255,230,160,0)');
        g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
        this.sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false, fog: false }));
        this.sunGlow.scale.set(320, 320, 1);
        this.scene.add(this.sunGlow);
      }
      if (!this.lite) { // lite: no fireflies
        const pos = new Float32Array(26 * 3);
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        this.fireflies = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xd8ff9a, size: 0.35, transparent: true, opacity: 0.9, depthWrite: false }));
        this.fireflies.visible = false;
        this.fireflyPos = pos;
        this.scene.add(this.fireflies);
      }
      // road star pickups: a small pool of spinning sprites recycled over the sim's star list
      this.starTex = makeStarTexture();
      this.pickMeshes = [];
      for (let i = 0; i < 12; i++) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, transparent: true, depthWrite: false }));
        sp.scale.setScalar(1.05);
        sp.visible = false;
        this.scene.add(sp);
        this.pickMeshes.push(sp);
      }
      // a rainbow that arcs over the road as a milestone surprise
      {
        const cols = [0xef3e4a, 0xff922b, 0xffcf3f, 0x6aff8a, 0x35a7e8];
        const parts = cols.map((c, i) => bake(new THREE.TorusGeometry(10 - i * 0.62, 0.3, 6, 28, Math.PI), c, 0, 0.15, 0, 1, 1, 1));
        this.rainbow = new THREE.Mesh(mergeGeometries(parts), vcMat);
        this.rainbow.visible = false;
        this.scene.add(this.rainbow);
        this.rainbowT = 0;
      }
    }
    this.cars = new THREE.Group();
    this.scene.add(this.cars);
    // one pooled particle system: nitro flames, bump sparks, finish confetti
    const N = 260;
    this.pPos = new Float32Array(N * 3).fill(-99);
    this.pCol = new Float32Array(N * 3);
    this.parts = Array.from({ length: N }, () => ({ life: 0, x: 0, y: -99, z: 0, vx: 0, vy: 0, vz: 0 }));
    this.pGeo = new THREE.BufferGeometry();
    this.pGeo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    this.pGeo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3));
    // soft round particles (a radial alpha map) — plain points render as hard squares up close
    const pCv = document.createElement('canvas'); pCv.width = pCv.height = 64;
    const pG = pCv.getContext('2d');
    const pGr = pG.createRadialGradient(32, 32, 2, 32, 32, 31);
    pGr.addColorStop(0, 'rgba(255,255,255,1)'); pGr.addColorStop(0.5, 'rgba(255,255,255,.6)'); pGr.addColorStop(1, 'rgba(255,255,255,0)');
    pG.fillStyle = pGr; pG.fillRect(0, 0, 64, 64);
    this.points = new THREE.Points(this.pGeo, new THREE.PointsMaterial({ size: 0.55, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false, alphaMap: new THREE.CanvasTexture(pCv) }));
    this.points.frustumCulled = false;
    this.scene.add(this.points);
    this.pNext = 0;
  }

  /** Spawn n particles at the player's car. behind=true puts them at the exhaust (nitro flames). */
  burst(n, color, speed, behind = false) {
    if (!this.parts || !this.me) return;
    const col = scratchCol.set(color);
    const cx = this.me.position.x, cz = this.me.position.z;
    for (let i = 0; i < n; i++) {
      const idx = this.pNext; this.pNext = (this.pNext + 1) % this.parts.length;
      const p = this.parts[idx];
      p.life = 0.45 + Math.random() * 0.5;
      p.x = cx + (Math.random() - 0.5) * 0.7;
      p.y = behind ? 0.45 : 0.8;
      p.z = behind ? cz - 2.2 : cz + (Math.random() - 0.5) * 2;
      p.vx = (Math.random() - 0.5) * speed;
      p.vy = Math.random() * speed * (behind ? 0.25 : 0.9);
      p.vz = behind ? -speed * (1.5 + Math.random()) : (Math.random() - 0.5) * speed;
      this.pCol[idx * 3] = col.r; this.pCol[idx * 3 + 1] = col.g; this.pCol[idx * 3 + 2] = col.b;
    }
    this.pGeo.attributes.color.needsUpdate = true;
  }

  /** a firework shell: a ring of sparks high over the road ahead (finish celebration) */
  burstSky(color) {
    if (!this.parts || !this.me) return;
    const col = scratchCol.set(color);
    const cx = this.me.position.x + (Math.random() - 0.5) * 16;
    const cz = this.me.position.z + 34 + Math.random() * 10;
    for (let i = 0; i < 22; i++) {
      const idx = this.pNext; this.pNext = (this.pNext + 1) % this.parts.length;
      const p = this.parts[idx];
      p.life = 0.8 + Math.random() * 0.7;
      p.x = cx; p.y = 9 + Math.random() * 4; p.z = cz;
      const a = Math.random() * Math.PI * 2;
      const s = 1.5 + Math.random() * 2.6;
      p.vx = Math.cos(a) * s; p.vy = Math.sin(a) * s * 0.7; p.vz = (Math.random() - 0.5) * 1.5;
      this.pCol[idx * 3] = col.r; this.pCol[idx * 3 + 1] = col.g; this.pCol[idx * 3 + 2] = col.b;
    }
    this.pGeo.attributes.color.needsUpdate = true;
  }

  /** the big friendly "+1 NITRO" pop when the car passes a checkpoint arch */
  _nitroPop() {
    if (!this.popEl) return;
    this.popEl.classList.remove('go');
    void this.popEl.offsetWidth;
    this.popEl.classList.add('go');
  }

  _stepParticles(dt) {
    if (!this.parts) return;
    for (let i = 0; i < this.parts.length; i++) {
      const p = this.parts[i];
      if (p.life <= 0) { this.pPos[i * 3 + 1] = -99; continue; }
      p.life -= dt;
      p.vy -= 1.4 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0.05) p.y = 0.05;
      this.pPos[i * 3] = p.x; this.pPos[i * 3 + 1] = p.life > 0 ? p.y : -99; this.pPos[i * 3 + 2] = p.z;
    }
    this.pGeo.attributes.position.needsUpdate = true;
  }

  /** Drives the twin nitro jets from the REAL burn state (r.p.nitro counts down from 2.4 s):
   *  a fast ignition flare-up that overshoots then settles, a sustained burn that breathes with
   *  layered sine flicker (smooth amplitude play — never on/off strobing), and a sputtering
   *  shrink in the last half-second, then a short fade-out tail. Pure scale/opacity writes on
   *  pre-built meshes: zero allocations, zero rebuilds. */
  _nitroFlame(dt) {
    if (!this.flame) return;
    const r = this.race;
    const burning = !!(r && r.state === 'run' && r.p.nitro > 0);
    if (burning) {
      this._nitroAge = this._nitroAge < 0 ? 0 : this._nitroAge + dt;
      this._flameTail = 0.16;
      const left = r.p.nitro;
      this._flameSputter = left < 0.45 ? Math.max(0, left / 0.45) : 1;
    } else {
      this._nitroAge = -1;
      this._flameSputter = 0.3;
    }
    let target = 0;
    if (burning) target = Math.min(1, this._nitroAge / 0.09) * (0.3 + 0.7 * this._flameSputter);
    else if (this._flameTail > 0) { this._flameTail -= dt; target = Math.max(0, this._flameTail / 0.16) * 0.35; }
    this._flameI += (target - this._flameI) * Math.min(1, dt * 18);
    const I = this._flameI;
    const vis = I > 0.02;
    this.flame.visible = vis; this.nitroGlow.visible = vis;
    if (!vis) return;
    const t = this.tNow || 0;
    const age = Math.max(0, this._nitroAge);
    const flare = 1 + 0.38 * Math.exp(-age * 4.5) * Math.min(1, age / 0.04); // ignition overshoot
    const flick = 1 + 0.06 * Math.sin(t * 41) + 0.045 * Math.sin(t * 27 + 1.3) + 0.03 * Math.sin(t * 63 + 0.5);
    const sput = this._flameSputter;
    const sputFlick = sput < 1 ? 0.72 + 0.28 * Math.abs(Math.sin(t * 23 + Math.sin(t * 7) * 2)) : 1;
    const len = Math.max(0.05, 2.9 * I * flare * flick * sputFlick);
    const wid = (0.9 + 0.25 * I) * (1 - 0.05 * Math.sin(t * 41 + 0.7)) * (sput < 1 ? 0.8 + 0.2 * sput : 1);
    this.flame.scale.set(wid, wid, len);
    this.flame.material.opacity = Math.min(1, 0.25 + 0.75 * I);
    this.nitroGlow.material.opacity = 0.45 * I;
    const gs = 0.8 + 0.5 * I;
    this.nitroGlow.scale.set(gs, gs, 1);
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 76 : 60;
    this.camera.updateProjectionMatrix();
  }

  _bind() {
    const unlock = () => { this.sound.unlock(); this.voice.unlock(); this.voice.setMuted(this.sound.muted); };
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const move = (e) => { if (this.mode === 'play' && this.race && this.drag) this.race.steer(((e.clientX - this.root.getBoundingClientRect().left) / this.cw) * 2 - 1); };
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; this.drag = true; move(e); });
    this.root.addEventListener('pointermove', move);
    this.root.addEventListener('pointerup', () => { this.drag = false; });
    this.root.addEventListener('pointercancel', () => { this.drag = false; });
    this._onKey = (e) => {
      if (!this.race || this.mode !== 'play') return;
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (k === 'arrowleft' || k === 'a') this.race.targetX = this.race.p.x - 3;
        if (k === 'arrowright' || k === 'd') this.race.targetX = this.race.p.x + 3;
        if (k === ' ' || k === 'n') this._nitro();
      }
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _nitro() { if (this.race && this.race.useNitro()) { this.sound.play('nitro'); this.voice.say('nitro'); this.burst(8, 0xffa02a, 2.2, true); this.shake = Math.max(this.shake, 0.22); this.mascotSet('wow', 1.5); } }

  /** mascot face moods: smile (idle), cheer (overtake/win), oops (bump), wow (nitro) */
  mascotSet(mood, dur = 1.4) { if (!this.mascotCv) return; this.mascotMood = mood; this.mascotMoodT = dur; this._drawMascot(false); }
  _drawMascot(blink) {
    const g = this.mascotCv.getContext('2d');
    const mood = this.mascotMood || 'smile';
    g.clearRect(0, 0, 128, 128);
    g.fillStyle = '#ffc890';
    g.beginPath(); g.arc(64, 64, 58, 0, Math.PI * 2); g.fill();
    g.fillStyle = (this.save && this.save.stars && this.save.stars[5]) ? '#ffc21f' : '#35a7e8'; // cap: gold once Port Said is finished
    g.beginPath(); g.arc(64, 64, 58, Math.PI * 1.08, Math.PI * 1.92); g.fill();
    g.fillStyle = '#ff9d7a';
    g.beginPath(); g.arc(28, 80, 12, 0, Math.PI * 2); g.arc(100, 80, 12, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#2a2a3a';
    if (blink) {
      g.fillRect(38, 56, 16, 4); g.fillRect(74, 56, 16, 4);
    } else if (mood === 'oops') {
      g.font = '900 26px sans-serif'; g.fillText('×', 38, 66); g.fillText('×', 76, 66);
    } else if (mood === 'wow' || mood === 'cheer') {
      g.beginPath(); g.arc(46, 56, 10, 0, Math.PI * 2); g.arc(82, 56, 10, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffffff';
      g.beginPath(); g.arc(48, 53, 3, 0, Math.PI * 2); g.arc(84, 53, 3, 0, Math.PI * 2); g.fill();
    } else {
      g.beginPath(); g.arc(46, 56, 9, 0, Math.PI * 2); g.arc(82, 56, 9, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffffff';
      g.beginPath(); g.arc(48, 53, 2.4, 0, Math.PI * 2); g.arc(84, 53, 2.4, 0, Math.PI * 2); g.fill();
    }
    g.strokeStyle = '#2a2a3a'; g.lineWidth = 7; g.lineCap = 'round';
    g.beginPath();
    if (mood === 'oops') { g.arc(64, 92, 9, 0, Math.PI * 2); g.stroke(); }
    else if (mood === 'wow') { g.arc(64, 88, 11, 0, Math.PI * 2); g.fillStyle = '#7a3a2a'; g.fill(); }
    else if (mood === 'cheer') { g.arc(64, 76, 20, 0.15 * Math.PI, 0.85 * Math.PI); g.stroke(); g.beginPath(); g.arc(64, 84, 13, 0.1 * Math.PI, 0.9 * Math.PI); g.fillStyle = '#7a3a2a'; g.fill(); }
    else { g.arc(64, 74, 19, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke(); }
    if (this.mascotTex) {
      if (!this.lite) this.mascotTex.needsUpdate = true;
      else { // lite: upload the face texture at most every ~150 ms (trailing flush keeps the latest face)
        const t = performance.now(); const wait = 150 - (t - (this._mascotTexT || 0));
        if (wait <= 0) { this._mascotTexT = t; this.mascotTex.needsUpdate = true; }
        else if (!this._mascotTexTimer) this._mascotTexTimer = setTimeout(() => { this._mascotTexTimer = null; this._mascotTexT = performance.now(); if (this.mascotTex) this.mascotTex.needsUpdate = true; }, wait);
      }
    }
  }

  _clear() { this.layer.replaceChildren(); }

  /** the big always-reachable mute toggle: silences music, engine, effects and voice together */
  _toggleMute(btn) {
    this.sound.unlock();
    this.sound.setMuted(!this.sound.muted);
    this.voice.setMuted(this.sound.muted);
    this.save.muted = this.sound.muted;
    this.post({ type: 'save', save: this.save });
    if (btn) btn.textContent = this.sound.muted ? '🔇' : '🔊';
    if (!this.sound.muted) this.sound.play('tap');
  }

  _soundPill() {
    const pill = h('button', { class: 'sh-soundpill', onclick: () => this.sound.unlock() }, I.t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  /** The level's painted backdrop (art/pano<N>.webp): a mirrored ring that follows the camera. */
  _pano(stage) {
    if (this.panoMesh) { this.scene.remove(this.panoMesh); this.panoMesh.material.map.dispose(); this.panoMesh.material.dispose(); this.panoMesh = null; }
    const tex = new THREE.TextureLoader().load(`${this.base}art/pano${stage + 1}.webp`, () => { ring.visible = true; });
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.MirroredRepeatWrapping;
    tex.repeat.set(2, 0.66);
    tex.offset.set(0, 0.34);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(560, 560, 300, 48, 1, true), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    ring.visible = false;
    ring.renderOrder = -10;
    this.panoMesh = ring;
    this.scene.add(ring);
  }

  _look(stage) {
    this._pano(stage);
    // every stage is its own world (owner 2026-11-27): golden falls, red dusk mountains, a starry night,
    // the white desert at bright morning, purple harbour twilight, and turquoise lagoon finale
    const THEMES = [
      { sky: 0xff9a5a, fog: 0xffb888, sea: 0x2a7a9a, hemi: 0xffd0a0, hemiI: 1.5, sun: 0xffa060, disc: 0xfff0c0, discY: 45 },
      { sky: 0xe86a4a, fog: 0xe09a7a, sea: 0x2a6a8a, hemi: 0xffc098, hemiI: 1.35, sun: 0xff8a50, disc: 0xffdf9e, discY: 30 },
      { sky: 0x141a3a, fog: 0x141a3a, sea: 0x1a3a6a, hemi: 0x6a7ad8, hemiI: 1.1, sun: 0x8a9aff, disc: 0xe8f0ff, discY: 90, night: true },
      { sky: 0xbfd9e8, fog: 0xe8e0cc, sea: 0xe8dcc0, hemi: 0xfff2d8, hemiI: 1.6, sun: 0xffdf9e, disc: 0xfff6da, discY: 62, desert: true },
      { sky: 0x7a5a9a, fog: 0x9a7ab0, sea: 0x2a5a8a, hemi: 0xd8b0e8, hemiI: 1.3, sun: 0xd88ad8, disc: 0xffc8e8, discY: 26 },
      { sky: 0x6ad0c8, fog: 0xa8e0d0, sea: 0x1fa8b8, hemi: 0xffe0b0, hemiI: 1.55, sun: 0xffa060, disc: 0xfff0c0, discY: 40 },
    ];
    const t = THEMES[stage] || THEMES[0];
    this.scene.background = new THREE.Color(t.sky);
    this.scene.fog = new THREE.Fog(t.fog, 80, 380);
    this.hemi.color.set(t.hemi);
    this.hemi.intensity = t.hemiI;
    this.sun.color.set(t.sun);
    this.sunDisc.material.color.set(t.disc);
    this.sunDisc.position.y = t.discY;
    this.sea.material = M(t.sea);
    if (this.stars) this.stars.visible = !!t.night;
    this.rocksOn = !!t.desert;
    if (this.palms) for (const p of this.palms) p.visible = !this.rocksOn;
    if (this.rocks) for (const r of this.rocks) r.visible = this.rocksOn;
  }

  showMenu() {
    this.mode = 'menu'; this.race = null;
    this._clear(); this.sound.setMode(false);
    this._look(0);
    this.demoZ = 0;
    this._clearCars();
    const ar = I.getLang() !== 'en';
    const cards = h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%' }, STAGES.map((s, i) => {
      const lock = i + 1 > this.save.unlocked;
      const st = this.save.stars[i + 1] || 0;
      return h('button', { class: `sh-btn${lock ? ' dark' : ''}`, onclick: () => { if (lock) { this.hint(I.t('locked')); return; } this.sound.play('tap'); this.start(i); } }, `${lock ? '🔒' : '🏎️'} ${I.t('stage')} ${I.num(i + 1)} · ${ar ? s.ar : s.en} ${'⭐'.repeat(st)}`);
    }));
    const stickers = h('div', { style: 'display:flex;gap:calc(var(--u)*1.2);justify-content:center' }, STAGES.map((s, i) => h('span', { style: `font-size:calc(var(--u)*6);opacity:${this.save.stars[i + 1] ? 1 : 0.3}` }, STAGE_EMOJI[i])));
    const colorRow = h('div', { style: 'display:flex;gap:calc(var(--u)*1.6);justify-content:center' }, HERO_COLORS.map((c, i) => {
      const unlocked = i === 0 || !!this.save.stars[[0, 2, 4, 6][i]];
      return h('button', { 'aria-label': I.t('carColor'), style: `width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;border:${(this.save.color || 0) === i ? 'calc(var(--u)*.7) solid #fff' : 'calc(var(--u)*.3) solid rgba(255,255,255,.4)'};background:#${c.toString(16).padStart(6, '0')};opacity:${unlocked ? 1 : 0.4};cursor:pointer;font-size:calc(var(--u)*3.2);font-family:inherit`, onclick: () => { if (!unlocked) { this.hint(I.t('locked')); return; } this.save.color = i; this.post({ type: 'save', save: this.save }); this.sound.play('tap'); this.showMenu(); } }, unlocked ? '' : '🔒');
    }));
    this.layer.append(h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' },
      h('div', { class: 'sh-logo' }, '🌅 ', I.t('title')), h('div', { class: 'sh-small' }, I.t('how')), cards,
      h('div', { class: 'sh-small' }, I.t('stickers')), stickers,
      h('div', { class: 'sh-small' }, I.t('carColor')), colorRow,
      h('button', { class: 'sh-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.hintEl = h('div', { class: 'sh-hint' });
    this.layer.append(this.hintEl);
    this._soundPill();
    const mute = h('button', { class: 'sh-round', 'aria-label': 'mute', style: 'position:absolute;top:calc(var(--u)*3);inset-inline-end:calc(var(--u)*3);z-index:8', onclick: () => this._toggleMute(mute) }, this.sound.muted ? '🔇' : '🔊');
    this.layer.append(mute);
  }

  _clearCars() { for (const c of [...this.cars.children]) this.cars.remove(c); this.carMeshes = new Map(); this.carSpin = new Map(); this._rivalPrevZ = null; }

  start(i) {
    this.stageIdx = i;
    this.race = new Race({ stage: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this._look(i);
    this._clearCars();
    // hero and rival: procedurally modelled REAL-proportioned cars (owner 2026-11-27: not toy models —
    // real car silhouettes, glossy paint, spoked wheels that roll and steer). Pure code, no model files.
    this.meV = makeRealCar(THREE, { kind: 'sports', color: HERO_COLORS[this.save.color || 0], cartoon: true });
    this.rivalV = makeRealCar(THREE, { kind: 'sports', color: 0x35a7e8, cartoon: true });
    this.me = this.meV.root;
    this.rival = this.rivalV.root;
    // a bobblehead mascot friend on the rear shelf: blinks, smiles, and reacts to the race (ALIVE step 1)
    {
      const cv = document.createElement('canvas'); cv.width = cv.height = 128;
      this.mascotCv = cv;
      this.mascotTex = new THREE.CanvasTexture(cv);
      this.mascotMood = 'smile'; this.mascotMoodT = 0; this.blinkT = 2.5; this.blinking = 0;
      this._drawMascot(false);
      const face = new THREE.Mesh(new THREE.CircleGeometry(0.30, 24), new THREE.MeshBasicMaterial({ map: this.mascotTex, transparent: true }));
      face.position.set(0, 1.24, -1.08);
      face.rotation.y = Math.PI;
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 8), new THREE.MeshStandardMaterial({ color: 0x35a7e8, roughness: 0.5 }));
      body.position.set(0, 0.97, -1.02);
      body.scale.set(1, 0.75, 0.7);
      this.meV.lean.add(body); this.meV.lean.add(face);
      this.mascot = face;
    }
    // nitro speed-lines overlay (DOM streaks at the screen edges, gentle opacity, no strobing)
    if (!this.speedEl2 || !this.speedEl2.isConnected) {
      const wrap = h('div', { style: 'position:absolute;inset:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity .25s' });
      const mk = (left, top, delay, dur, rev) => {
        const s = h('i', { style: `position:absolute;left:${left}%;top:${top}%;width:16%;height:3px;border-radius:3px;background:linear-gradient(90deg,transparent,#ffffff,transparent);opacity:.7;animation:sh-dash ${dur}s linear ${delay}s infinite${rev ? ' reverse' : ''}` });
        wrap.append(s);
      };
      for (let i = 0; i < 6; i++) { mk(1 + (i % 3) * 2, 8 + i * 15, -i * 0.17, 0.55 + (i % 3) * 0.13, false); mk(81 - (i % 3) * 2, 12 + i * 14, -i * 0.21, 0.6 + (i % 2) * 0.17, true); }
      if (!document.getElementById('sh-dash-kf')) document.head.append(h('style', { id: 'sh-dash-kf' }, '@keyframes sh-dash{from{transform:translateX(46%)}to{transform:translateX(-120%)}}'));
      this.layer.append(wrap);
      this.speedEl2 = wrap;
    }
    // cartoon stars that circle the hero for a moment after a bump (a dizzy friend, never a crash)
    {
      const cv = document.createElement('canvas'); cv.width = cv.height = 64;
      const g = cv.getContext('2d');
      g.fillStyle = '#ffd23a'; g.strokeStyle = '#e8a020'; g.lineWidth = 3;
      g.beginPath();
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5; const rad = i % 2 ? 11 : 26; const x = 32 + Math.cos(a) * rad; const y = 32 + Math.sin(a) * rad; if (i) g.lineTo(x, y); else g.moveTo(x, y); }
      g.closePath(); g.fill(); g.stroke();
      const tex = new THREE.CanvasTexture(cv);
      const grp = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
        const a = (i / 5) * Math.PI * 2;
        sp.position.set(Math.cos(a) * 0.95, 0, Math.sin(a) * 0.95);
        sp.scale.setScalar(0.34);
        grp.add(sp);
      }
      grp.position.y = 1.42;
      grp.visible = false;
      this.me.add(grp);
      this.bumpStars = grp;
      this.starsT = 0;
    }
    // REAL nitro jets (owner 2026-11-27: «شكل النيترو وهو بيخرج مش حقيقي» — the rainbow sparkle
    // particles became twin blue-white exhaust flames, because real nitro burns blue): ONE merged
    // mesh of crossed additive planes per exhaust pipe, textured from a canvas (white-hot core,
    // azure body, shock diamonds — the bright beads a real jet shows), plus a soft blue glow the
    // flame throws on the road. Assets are cached on the instance and reused every stage; the mesh
    // costs 2 draw calls and exists only while nitro burns (driven by _nitroFlame, never rebuilt).
    {
      if (!this._flameTex) {
        const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128;
        const g = cv.getContext('2d');
        const cy = 64, maxH = 40;
        const half = (u) => maxH * (u < 0.10 ? 0.5 + 0.5 * (u / 0.10) : Math.pow(Math.max(0, 1 - (u - 0.10) / 0.90), 0.6));
        const layer = (s, uMax, stops) => {
          const gr = g.createLinearGradient(0, 0, 256 * uMax, 0);
          for (const [o, c] of stops) gr.addColorStop(o, c);
          g.fillStyle = gr;
          g.beginPath();
          const N = 28;
          for (let i = 0; i <= N; i++) { const u = (i / N) * uMax; const x = u * 256, y = cy - half(u) * s; i ? g.lineTo(x, y) : g.moveTo(x, y); }
          for (let i = N; i >= 0; i--) { const u = (i / N) * uMax; g.lineTo(u * 256, cy + half(u) * s); }
          g.closePath(); g.fill();
        };
        layer(1.0, 1.0, [[0, 'rgba(24,72,235,0.62)'], [0.35, 'rgba(38,102,255,0.44)'], [0.7, 'rgba(56,130,255,0.16)'], [1, 'rgba(64,140,255,0)']]);
        layer(0.62, 0.92, [[0, 'rgba(74,158,255,0.9)'], [0.45, 'rgba(96,178,255,0.55)'], [1, 'rgba(120,195,255,0)']]);
        layer(0.34, 0.78, [[0, 'rgba(214,240,255,0.95)'], [0.5, 'rgba(168,216,255,0.55)'], [1, 'rgba(168,216,255,0)']]);
        layer(0.17, 0.34, [[0, 'rgba(255,255,255,0.98)'], [1, 'rgba(230,246,255,0)']]);
        // shock diamonds: bright beads strung along the core, shrinking toward the tip
        g.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 4; i++) {
          const u = 0.13 + i * 0.115, x = u * 256, hh = half(u) * 0.42 * (1 - i * 0.16), ww = 13 - i * 2;
          const rg = g.createRadialGradient(x, cy, 0.5, x, cy, ww);
          rg.addColorStop(0, 'rgba(255,255,255,0.85)'); rg.addColorStop(1, 'rgba(160,210,255,0)');
          g.fillStyle = rg;
          g.beginPath(); g.ellipse(x, cy, ww, hh, 0, 0, Math.PI * 2); g.fill();
        }
        g.globalCompositeOperation = 'source-over';
        this._flameTex = new THREE.CanvasTexture(cv);
        // twin jets at the hero's exhaust tips (x = ±0.486), each two crossed unit planes from
        // z=0 (nozzle) to z=-1 (tip); per-frame scale does the rest — nothing is rebuilt per frame
        const pos = [], uv = [], idx = [];
        let vb = 0;
        for (const cx of [-0.486, 0.486]) {
          const hw = 0.24;
          const quads = [
            [cx, -hw, 0, cx, hw, 0, cx, hw, -1, cx, -hw, -1],
            [cx - hw, 0, 0, cx + hw, 0, 0, cx + hw, 0, -1, cx - hw, 0, -1],
          ];
          for (const q of quads) {
            pos.push(...q);
            uv.push(0, 0, 0, 1, 1, 1, 1, 0);
            idx.push(vb, vb + 1, vb + 2, vb, vb + 2, vb + 3);
            vb += 4;
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
        geo.setIndex(idx);
        this._flameGeo = geo;
        this._flameMat = new THREE.MeshBasicMaterial({ map: this._flameTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
        const gv = document.createElement('canvas'); gv.width = gv.height = 128;
        const gg = gv.getContext('2d');
        const rg2 = gg.createRadialGradient(64, 64, 2, 64, 64, 62);
        rg2.addColorStop(0, 'rgba(130,190,255,0.85)'); rg2.addColorStop(0.5, 'rgba(80,140,255,0.32)'); rg2.addColorStop(1, 'rgba(70,130,255,0)');
        gg.fillStyle = rg2; gg.fillRect(0, 0, 128, 128);
        this._glowTex = new THREE.CanvasTexture(gv);
        this._glowGeo = new THREE.PlaneGeometry(3.6, 4.8);
        this._glowMat = new THREE.MeshBasicMaterial({ map: this._glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      }
      this.flame = new THREE.Mesh(this._flameGeo, this._flameMat);
      this.flame.position.set(0, 0.21, -2.16);
      this.flame.rotation.x = -0.06; // exhausts angle a touch down: the jet rakes toward the road, so its length reads from the high chase camera
      this.flame.visible = false;
      this.flame.renderOrder = 6;
      this.flame.frustumCulled = false;
      this.meV.lean.add(this.flame);
      this.nitroGlow = new THREE.Mesh(this._glowGeo, this._glowMat);
      this.nitroGlow.rotation.x = -Math.PI / 2;
      this.nitroGlow.position.set(0, 0.06, -3.7);
      this.nitroGlow.visible = false;
      this.nitroGlow.renderOrder = 2;
      this.me.add(this.nitroGlow);
      this._nitroAge = -1; this._flameI = 0; this._flameTail = 0; this._flameSputter = 1;
    }
    this.cars.add(this.me, this.rival);
    this.mode = 'play'; this.paused = false; this.lastCount = 4;
    this._clear();
    this.sound.setMode(true);
    this.voice.say('count');
    this.timeEl = h('span', { class: 'sh-time' }, '');
    this.posEl = h('span', {}, '');
    this.speedEl = h('span', { style: 'font-weight:900;font-size:calc(var(--u)*3.6)' }, '');
    this.barEl = h('b', { style: 'width:0%' });
    this.rivalDot = h('i', { style: 'position:absolute;top:-30%;width:calc(var(--u)*2.6);height:calc(var(--u)*2.6);border-radius:50%;background:#2a6ae8;border:calc(var(--u)*.3) solid #fff;left:0' });
    const back = h('button', { class: 'sh-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'sh-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    const mute = h('button', { class: 'sh-round', 'aria-label': 'mute', onclick: () => this._toggleMute(mute) }, this.sound.muted ? '🔇' : '🔊');
    this.layer.append(h('div', { class: 'sh-top' }, back, h('div', { class: 'sh-pill' }, '⏱ ', this.timeEl), h('div', { class: 'sh-pill' }, this.posEl), mute, pause),
      h('div', { class: 'sh-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🏎️'), h('div', { class: 'sh-bar' }, this.barEl, this.rivalDot), h('span', {}, '🏁')));
    this.countEl = h('div', { class: 'sh-count' }, '3');
    this.hintEl = h('div', { class: 'sh-hint', style: 'top:calc(var(--u)*24)' });
    this.nitroOrbs = [0, 1, 2].map(() => h('span', { style: 'width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;background:#ffe89a;display:inline-block' }));
    this.nitroBtn = h('button', { class: 'sh-big', 'aria-label': I.t('nitro'), onclick: () => this._nitro() }, h('span', { style: 'font-size:calc(var(--u)*8)' }, '⚡'), I.t('nitro'), h('span', { style: 'display:flex;gap:calc(var(--u)*.9);justify-content:center' }, ...this.nitroOrbs));
    this.layer.append(this.countEl, this.hintEl, this.nitroBtn);
    this.gaugeEl = h('div', { style: 'position:absolute;left:calc(var(--u)*4);bottom:calc(var(--u)*5);width:calc(var(--u)*16);height:calc(var(--u)*16);border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(20,16,40,.55)' }, h('span', { style: 'background:#241f3d;border-radius:50%;width:76%;height:76%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;line-height:1.05' }, this.speedEl, h('span', { style: 'font-size:calc(var(--u)*2.1);opacity:.85' }, I.t('kmh'))));
    this.layer.append(this.gaugeEl);
    this._soundPill();
    if (!document.getElementById('sh-pop-kf')) document.head.append(h('style', { id: 'sh-pop-kf' }, '.sh-pop{position:absolute;top:15%;left:50%;transform:translateX(-50%);font-size:calc(var(--u)*9);font-weight:900;color:#ffd23a;text-shadow:0 2px 0 #b97e10,0 4px 14px rgba(0,0,0,.35);opacity:0;pointer-events:none;z-index:6}.sh-pop.go{animation:sh-pop 1.1s ease-out forwards}@keyframes sh-pop{0%{opacity:0;transform:translateX(-50%) scale(.4)}25%{opacity:1;transform:translateX(-50%) scale(1.25)}70%{opacity:1;transform:translateX(-50%) scale(1)}100%{opacity:0;transform:translateX(-50%) scale(1) translateY(-16px)}}'));
    this.popEl = h('div', { class: 'sh-pop' }, '+1 ⚡');
    this.layer.append(this.popEl);
    this.starEl = h('span', {}, '⭐ ٠');
    this.layer.append(h('div', { class: 'sh-pill', style: 'position:absolute;left:calc(var(--u)*4);bottom:calc(var(--u)*23)' }, this.starEl));
    this.hint(I.t('taunt'), 2300); // the rival introduces himself with a kind challenge
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' }, h('div', { class: 'sh-title' }, I.t('paused')),
        h('div', { class: 'sh-small' }, I.t('rest')),
        h('button', { class: 'sh-btn', onclick: () => this.togglePause() }, I.t('resume')),
        h('button', { class: 'sh-btn dark', onclick: () => this.start(this.stageIdx) }, I.t('again')),
        h('button', { class: 'sh-btn dark', onclick: () => this.showMenu() }, I.t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _end(ev) {
    const r = this.race;
    if (ev.type === 'finish' && ev.won) {
      this.save.stars[this.stageIdx + 1] = Math.max(this.save.stars[this.stageIdx + 1] || 0, r.stars);
      this.save.unlocked = Math.max(this.save.unlocked, Math.min(STAGES.length, this.stageIdx + 2));
    }
    this.post({ type: 'save', save: this.save });
    const won = ev.type === 'finish' && ev.won;
    this.sound.play(won ? 'win' : 'lose');
    this.voice.say(won ? 'win' : 'lose');
    if (won) { this.burst(60, 0xffd23a, 4.5); this.fwT = 1.8; this.fwAcc = 0; this.mascotSet('cheer', 2.5); this.sound.play('cheer'); }
    if (!won) this.mascotSet('cheer', 2.2); // the mascot cheers the child on either way
    const last = this.stageIdx >= STAGES.length - 1;
    this.layer.append(h('div', { class: 'sh-dim' }, h('div', { class: 'sh-card' },
      won ? h('div', { class: 'sh-trophy' }, '🏆') : null,
      h('div', { class: 'sh-title' }, won ? I.t('won') : ev.type === 'timeup' ? I.t('timeup') : I.t('lostRival')),
      won ? h('div', { class: 'sh-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= r.stars ? '' : 'off', style: `animation-delay:${0.25 + s * 0.22}s` }, '⭐'))) : null,
      !won ? h('div', { class: 'sh-pill' }, I.t('almost')) : null,
      h('div', { class: 'sh-pill' }, `${I.t('stage')} ${I.num(this.stageIdx + 1)}  ·  ${I.num(r.p.bumps)} 💥  ·  ⭐ ${I.num(r.starsGot)}`),
      won && !last ? h('button', { class: 'sh-btn', onclick: () => this.start(this.stageIdx + 1) }, I.t('next')) : null,
      h('button', { class: 'sh-btn alt', onclick: () => this.start(this.stageIdx) }, I.t('again')),
      h('button', { class: 'sh-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _frame() {
    const now = performance.now();
    const rawDt = (now - this.last) / 1000;
    const dt = Math.min(0.05, rawDt);
    this.last = now;
    this.clock += dt;
    // slow-device auto-degrade: if real frame time averages over 24 ms across a 2 s window
    // (after a warm-up), step quality down — pixel ratio first, then distant scenery.
    // It never steps back up mid-session, so it cannot oscillate.
    if (!this.lite && rawDt < 1) { // lite already sits at the quality floor — nothing left to shed
      this._ftAcc = (this._ftAcc || 0) + rawDt; this._ftN = (this._ftN || 0) + 1; this._ftWin = (this._ftWin || 0) + rawDt;
      if (this._ftWin >= 2) {
        const avg = this._ftAcc / Math.max(1, this._ftN);
        this._ftAcc = 0; this._ftN = 0; this._ftWin = 0;
        this._ftWindows = (this._ftWindows || 0) + 1;
        if (this._ftWindows > 2 && avg > 0.024 && (this.degradeLevel || 0) < 2) {
          this.degradeLevel = (this.degradeLevel || 0) + 1;
          this.renderer.setPixelRatio(this.degradeLevel >= 2 ? 1 : Math.min(this.basePR || 1.5, 1.2));
        }
      }
    }
    if (this.mode === 'play' && !this.paused && this.race) this._update(dt);
    this._render(dt);
  }

  _update(dt) {
    const r = this.race;
    const was = r.state;
    for (const e of r.step(dt)) {
      switch (e.type) {
        case 'go': this.sound.play('go'); this.voice.say('go'); this.countEl.textContent = I.t('go'); this.countEl.classList.remove('pop'); void this.countEl.offsetWidth; this.countEl.classList.add('pop'); setTimeout(() => this.countEl && (this.countEl.style.display = 'none'), 700); this.hint(I.t('how'), 3500); break;
        case 'bump': this.sound.play('bump'); this.voice.say('bump'); this.shake = 0.4; this.burst(12, 0xffcf5a, 2.6); this.suspV = 3.4; this.mascotSet('oops', 1.2); this.starsT = 0.9; if (this.bumpStars) this.bumpStars.visible = true; break;
        case 'overtake': this.sound.play('over'); this.voice.say('overtake'); this.hint(I.t('overtake'), 1800); this.mascotSet('cheer', 1.6); if (Math.random() < 0.4) this.sound.honk(1.15); break;
        case 'overtaken': this.voice.say('overtaken'); break;
        case 'near': this.voice.say('near'); break;
        case 'charge': this.voice.say('charge'); this.sound.play('over'); this.sound.play('cheer'); this._nitroPop(); if (this.nitroBtn && this.nitroBtn.animate) this.nitroBtn.animate([{ transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 280, easing: 'ease-out' }); break;
        case 'pickup': this.sound.pickup(e.n); this.burst(6, 0xffd23a, 1.6); if (this.starEl) { this.starEl.textContent = `⭐ ${I.num(r.starsGot)}`; if (this.starEl.animate) this.starEl.animate([{ transform: 'scale(1.6)' }, { transform: 'scale(1)' }], { duration: 300, easing: 'ease-out' }); } break;
        case 'milestone': this.rainbowT = 6; this.sound.play('over'); this.burstSky([0xff5a5a, 0xffcf3f, 0x6aff8a, 0x53b6ff][Math.floor(Math.random() * 4)]); this.hint(I.t('rainbow'), 2200); break;
        case 'finish': case 'timeup': this._end(e); break;
        default: break;
      }
    }
    if (was === 'count') { const c = Math.ceil(r.go); if (c !== this.lastCount && c > 0) { this.lastCount = c; this.countEl.textContent = I.num(c); this.sound.play('beep'); this.countEl.classList.remove('pop'); void this.countEl.offsetWidth; this.countEl.classList.add('pop'); } }
    // HUD writes were the second frame cost (found 2026-11-27): textContent and style writes
    // on every frame force the browser to restyle and repaint the overlay 60x/s — the circular
    // speedometer was the worst, repainting a fresh conic-gradient raster on nearly every
    // frame while accelerating. The HUD now refreshes at 10 Hz, each element is written only
    // when its displayed value actually changed, and the gauge arc moves in 4-degree steps.
    this._hudT = (this._hudT || 0) + dt;
    if (this._hudT >= 0.1 || !this._hudCache) {
      this._hudT = 0;
      const hc = this._hudCache || (this._hudCache = {});
      const left = Math.ceil(r.left);
      const timeTxt = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
      if (hc.time !== timeTxt) { hc.time = timeTxt; this.timeEl.textContent = timeTxt; }
      const posTxt = r.ahead ? `🥇 ${I.t('ahead')}` : `🥈 ${I.t('behindN')} ${I.num(Math.round(r.rival.z - r.p.z))}${I.t('m')}`;
      if (hc.pos !== posTxt) { hc.pos = posTxt; this.posEl.textContent = posTxt; }
      const spd = Math.round(r.p.v * 3.6);
      if (hc.spd !== spd) { hc.spd = spd; this.speedEl.textContent = I.num(spd); }
      const barPct = Math.round(Math.min(1, r.p.z / r.cfg.dist) * 100);
      if (hc.bar !== barPct) { hc.bar = barPct; this.barEl.style.width = `${barPct}%`; }
      const dotPct = Math.round(Math.min(1, r.rival.z / r.cfg.dist) * 96);
      if (hc.dot !== dotPct) { hc.dot = dotPct; this.rivalDot.style.left = `${dotPct}%`; }
      const dotCol = !r.ahead && (r.rival.z - r.p.z) < 60 ? '#ffd23a' : '#2a6ae8';
      if (hc.dotCol !== dotCol) { hc.dotCol = dotCol; this.rivalDot.style.background = dotCol; }
      if (this.nitroOrbs && hc.charges !== r.p.charges) {
        hc.charges = r.p.charges;
        this.nitroOrbs.forEach((o, i) => { const on = i < r.p.charges; o.style.opacity = on ? '1' : '0.25'; o.style.boxShadow = on ? '0 0 calc(var(--u)*1.6) #ffd23a' : 'none'; });
        this.nitroBtn.style.opacity = r.p.charges > 0 ? '1' : '0.6';
      }
      const deg = Math.round(Math.min(1, r.p.v / 55) * 360 / 4) * 4;
      if (hc.deg !== deg && this.gaugeEl) { hc.deg = deg; this.gaugeEl.style.background = `conic-gradient(rgba(255,210,58,.9) ${deg}deg, rgba(20,16,40,.55) ${deg}deg)`; }
    }
    this.sound.engine(r.p.v, r.p.nitro > 0, r.p.gear, r.p.rpm);
    this.sound.musicTick(r.p.v, r.p.nitro > 0);
    if (r.state === 'run' && Math.abs(r.p.vx) > 9 && r.p.v > 15 && this.clock > (this._squealAt || 0) + 0.55) { this._squealAt = this.clock; this.sound.play('squeal'); }
    if (r.p.nitro > 0) { // a few embers + hot sparks trailing the exhaust (the flame itself is the jet mesh now)
      if (Math.random() < 0.3) this.burst(1, Math.random() < 0.55 ? 0xffa02a : 0xcfe6ff, 1.6, true);
      if (Math.random() < 0.12) this.burst(1, 0x7db8ff, 1.2, true);
    }
    // soft exhaust puffs while the engine works, gold sparkle when swinging between lanes
    if (r.state === 'run' && r.p.v > 4 && Math.random() < (r.p.accel > 5 ? 0.55 : 0.28)) this.burst(1, 0xd8d8e0, 0.7, true);
    if (r.state === 'run' && Math.abs(r.p.vx) > 7 && Math.random() < 0.5) this.burst(1, 0xffe89a, 1.1);
    if (this.speedEl2) {
      if (!this.speedEl2.isConnected) this.layer.append(this.speedEl2);
      const so = r.p.nitro > 0 ? '0.55' : '0';
      if (this._speedOp !== so) { this._speedOp = so; this.speedEl2.style.opacity = so; } // write only on change: a style write per frame repaints the fullscreen overlay
    }
  }

  _carMesh(c) {
    let m = this.carMeshes.get(c.id);
    if (!m && c.cone) { // a traffic cone: orange, white band, tips over when clipped
      m = new THREE.Group();
      m.add(mesh(geo.cone, M(0xff7a2a), 0, 0.52, 0, 1.05, 1.05, 1.05));
      m.add(mesh(geo.cyl, M(0xffffff), 0, 0.55, 0, 0.52, 0.16, 0.52));
      m.add(mesh(geo.box, M(0xd8621e), 0, 0.04, 0, 0.95, 0.08, 0.95));
      this.cars.add(m);
      this.carMeshes.set(c.id, m);
      return m;
    }
    if (!m) {
      // meshes are only ever requested for cars inside the render window (see _render),
      // so this pool holds at most the window's worth of cars; the cap is a safety net
      if (this.carMeshes.size >= 64) {
        for (const [oldId, oldMesh] of this.carMeshes) {
          if (oldId === c.id) continue;
          this.cars.remove(oldMesh);
          this.carMeshes.delete(oldId);
          if (this.carSpin) this.carSpin.delete(oldId);
          if (oldMesh.userData.ownAssets) oldMesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((mm) => mm.dispose()); });
          break;
        }
      }
      const sp = this.sprites;
      const heavy = HEAVY_PICS.map((n) => sp[n]).filter(Boolean), light = ['car_pink', 'car_orange', 'car_black', 'car_taxi', 'car_sedan_blue', 'car_sedan_green', 'car_police'].map((n) => sp[n]).filter(Boolean);
      const pool = c.truck ? heavy : light;
      const G = this.glbs && this.glbs.sedan ? this.glbs : null;
      { // traffic: the same real-proportioned procedural cars, in street variety
        const carKinds = [
          { kind: 'sedan', color: 0xffcf3f, cartoon: true, simple: true }, { kind: 'sports', color: 0x4ad08a, cartoon: true, simple: true }, { kind: 'hatch', color: 0xff8ac2, cartoon: true, simple: true },
          { kind: 'suv', color: 0xf5f0e6, cartoon: true, simple: true }, { kind: 'sedan', color: 0xb197fc, cartoon: true, simple: true }, { kind: 'sedan', color: 0xffb020, taxi: true, cartoon: true, simple: true },
          { kind: 'sedan', color: 0xf0f0f0, police: true, cartoon: true, simple: true }, { kind: 'suv', color: 0x4dabf7, cartoon: true, simple: true },
        ];
        const truckKinds = [
          { kind: 'truck', color: 0xe8e8f0, cartoon: true, simple: true }, { kind: 'van', color: 0xff922b, cartoon: true, simple: true }, { kind: 'van', color: 0xdde4ea, cartoon: true, simple: true },
          { kind: 'truck', color: 0x51cf66, cartoon: true, simple: true }, { kind: 'truck', color: 0xef3e4a, cartoon: true, simple: true }, { kind: 'van', color: 0xffffff, ambulance: true, cartoon: true, simple: true },
        ];
        const spec = c.truck ? truckKinds[c.id % truckKinds.length] : carKinds[c.id % carKinds.length];
        const veh = makeRealCar(THREE, spec);
        veh.spec = spec;
        veh.root.userData.ownAssets = true; // every geometry/material is created per vehicle: safe to dispose when the car leaves the window
        { // a little amber indicator that blinks now and then, like the car is thinking of turning
          const bl = new THREE.Mesh(new THREE.CircleGeometry(0.075, 10), new THREE.MeshBasicMaterial({ color: 0xffb020 }));
          bl.position.set(-0.62, 0.68, c.truck ? -3.42 : -2.36);
          bl.rotation.y = Math.PI;
          bl.visible = false;
          veh.lean.add(bl);
          veh.blinker = bl;
        }
        m = veh.root;
        if (!this.carSpin) this.carSpin = new Map();
        this.carSpin.set(c.id, veh);
      }
      this.cars.add(m);
      this.carMeshes.set(c.id, m);
    }
    return m;
  }

  _render(dt) {
    const r = this.race;
    const zp = r ? r.p.z : (this.demoZ += dt * 20);
    // road window
    const base = Math.floor((zp - 12) / 6.4) * 6.4;
    this.road.forEach((seg, i) => {
      const z = base + i * 6.4;
      seg.position.set(-bend(z), 0, z);
      seg.rotation.y = -Math.atan(bendSlope(z));
    });
    this.tNow = (this.tNow || 0) + dt;
    this.palms.forEach((p, i) => {
      const z = Math.floor((zp - 10) / 18) * 18 + i * 18;
      const side = i % 3 === 0 ? -1 : 1;
      p.position.set(-bend(z) + side * (HALF + 5 + (i % 4) * 1.5), 0, z);
      // the palms sway in the sea breeze while you drive
      p.rotation.z = Math.sin(this.tNow * 1.35 + i * 1.93) * 0.05;
      p.rotation.x = Math.cos(this.tNow * 1.05 + i * 2.41) * 0.03;
    });
    if (this.clouds) for (const cl of this.clouds) {
      cl.visible = (this.degradeLevel || 0) < 2;
      const u = cl.userData;
      const off = ((u.off + (this.lite ? 0 : this.tNow * u.drift)) % 560 + 560) % 560 - 70; // lite: clouds hold still
      cl.position.set(-bend(zp + off) * 0.4 + u.x, u.y, zp + off);
    }
    if (this.birds) for (const b of this.birds) {
      b.visible = (this.degradeLevel || 0) < 1;
      const u = b.userData;
      const a = this.tNow * u.sp + u.ph;
      b.position.set(Math.sin(a) * u.r, u.h + Math.sin(this.tNow * 0.9 + u.ph) * 1.6, zp + 150 + Math.cos(a) * 42);
      b.rotation.y = a + Math.PI / 2;
      const flap = Math.sin(this.tNow * 9 + u.ph * 3) * 0.55;
      u.pl.rotation.z = flap; u.pr.rotation.z = -flap;
    }
    this.sea.position.set(-bend(zp) + 330, -0.6, zp);
    this.sunDisc.position.set(-bend(zp + 500) * 0.3, this.sunDisc.position.y, zp + 560);
    if (this.arch) { // the next checkpoint arch waits at the charge line; a golden twin marks the finish
      const az = r ? r.nextCharge : zp + 400;
      this.arch.position.set(-bend(az), 0, az);
      this.arch.rotation.y = -Math.atan(bendSlope(az));
      const fz = r ? r.cfg.dist : zp + 900;
      this.archGold.position.set(-bend(fz), 0, fz);
      this.archGold.rotation.y = -Math.atan(bendSlope(fz));
      this.archGold.visible = !r || fz - zp < 800;
      for (const a of [this.arch, this.archGold]) for (let i = 0; i < 3; i++) { const b = a.userData.balloons[i]; b.rotation.z = Math.sin(this.tNow * 1.8 + i * 2.1) * 0.14; b.rotation.x = Math.cos(this.tNow * 1.3 + i * 1.7) * 0.08; }
    }
    if (this.boats) for (const b of this.boats) {
      b.visible = !this.rocksOn;
      const off = ((b.userData.off - zp) % 700 + 700) % 700 - 60;
      const z = zp + off;
      b.position.set(-bend(z) + 58 + (b.userData.off % 3) * 9, Math.sin(this.tNow * 1.2 + b.userData.off) * 0.25, z);
      b.rotation.z = Math.sin(this.tNow * 1.1 + b.userData.off * 2) * 0.05;
    }
    if (this.lighthouse) {
      this.lighthouse.visible = !this.rocksOn;
      const rel = ((900 - zp) % 1600 + 1600) % 1600 - 80;
      const z = zp + rel;
      this.lighthouse.position.set(-bend(z) + HALF + 15, 0, z);
      if (this.lampMat) this.lampMat.color.setHex(Math.sin(this.tNow * 0.9) > -0.2 ? 0xffe89a : 0xbfa05e);
    }
    if (this.fans) for (const f of this.fans) {
      const rel = ((f.userData.off - zp) % 1300 + 1300) % 1300 - 40;
      const z = zp + rel;
      f.position.set(-bend(z) + f.userData.side * (HALF + 3.4), this.lite ? 0 : Math.abs(Math.sin(this.tNow * 5 + f.userData.ph)) * 0.16, z); // lite: fans stand still
    }
    if (this.boards) for (const b of this.boards) {
      const rel = ((b.userData.off - zp) % 2600 + 2600) % 2600 - 60;
      const z = zp + rel;
      b.position.set(-bend(z) + b.userData.side * (HALF + 6.5), 0, z);
      b.rotation.y = -Math.atan(bendSlope(z)) + (b.userData.side > 0 ? -0.45 : 0.45);
    }
    if (this.sunGlow && this.sunDisc) this.sunGlow.position.copy(this.sunDisc.position);
    if (this.fireflies) {
      const on = !!(this.stars && this.stars.visible) && !(this.degradeLevel || 0);
      this.fireflies.visible = on;
      if (on) {
        const pos = this.fireflyPos;
        for (let i = 0; i < 26; i++) {
          const dz = (i * 37) % 150;
          pos[i * 3] = -bend(zp + dz) + Math.sin(this.tNow * 0.6 + i * 2.4) * (HALF + 3);
          pos[i * 3 + 1] = 0.7 + Math.sin(this.tNow * 1.3 + i * 1.9) * 0.45;
          pos[i * 3 + 2] = zp + dz - 8 + Math.cos(this.tNow * 0.4 + i) * 2;
        }
        this.fireflies.geometry.attributes.position.needsUpdate = true;
      }
    }
    if (this.fwT > 0) { // finish fireworks: coloured shells bursting over the road
      this.fwT -= dt;
      this.fwAcc = (this.fwAcc || 0) + dt;
      if (this.fwAcc > 0.26) { this.fwAcc = 0; this.burstSky([0xff5a5a, 0xffcf3f, 0x6aff8a, 0x53b6ff, 0xff8ac2][Math.floor(Math.random() * 5)]); }
    }
    if (r && this.pickMeshes) { // spinning road stars waiting to be scooped up
      let pi = 0;
      for (const pk of r.pickups) {
        if (pk.got || pk.z < zp - 4 || pk.z > zp + 170) continue;
        if (pi >= this.pickMeshes.length) break;
        const sp = this.pickMeshes[pi++];
        sp.visible = true;
        sp.position.set(-(bend(pk.z) + LANES[pk.lane]), 1.05 + Math.sin(this.tNow * 3.4 + pk.z) * 0.16, pk.z);
        sp.material.rotation = this.tNow * 2.4 + pk.z;
        sp.scale.setScalar(1.0 + Math.sin(this.tNow * 5 + pk.z * 2) * 0.1);
      }
      for (; pi < this.pickMeshes.length; pi++) this.pickMeshes[pi].visible = false;
    }
    if (this.rainbow && this.rainbowT > 0) {
      this.rainbowT -= dt;
      this.rainbow.visible = this.rainbowT > 0;
      const rz = zp + 120;
      this.rainbow.position.set(-bend(rz), 0, rz);
    }
    if (r) {
      const place = (m, x, z, v) => { m.position.set(-(bend(z) + x), 0, z); m.rotation.y = -Math.atan(bendSlope(z)) + (v ? 0 : 0); };
      place(this.me, r.p.x, r.p.z);
      // body language: roll from lateral velocity, pitch from acceleration — the car has weight
      this.me.rotation.z = Math.max(-0.3, Math.min(0.3, -r.p.vx * 0.016));
      this.me.rotation.x = Math.max(-0.07, Math.min(0.06, -r.p.accel * 0.005));
      { // cartoon squash & stretch + a springy suspension the bumps kick (ALIVE step 1)
        const lean = this.meV.lean;
        const target = 1 + Math.max(-0.04, Math.min(0.07, r.p.accel * 0.0035)) + (r.p.nitro > 0 ? 0.045 : 0);
        this._stretch = this._stretch == null ? 1 : this._stretch + (target - this._stretch) * Math.min(1, dt * 8);
        lean.scale.set(1 / Math.sqrt(this._stretch), 1 / Math.sqrt(this._stretch), this._stretch);
        this.suspY = this.suspY || 0; this.suspV = this.suspV || 0;
        this.suspV += (-this.suspY * 90 - this.suspV * 9) * dt;
        this.suspY += this.suspV * dt;
        lean.position.y = Math.max(-0.05, this.suspY * 0.05) + Math.sin(this.tNow * 30) * 0.004 * Math.min(1, r.p.v / 37);
        if (this.bumpStars && this.starsT > 0) { // dizzy stars circle, then hide
          this.starsT -= dt;
          this.bumpStars.rotation.y += dt * 8;
          if (this.starsT <= 0) this.bumpStars.visible = false;
        }
        // the mascot bobbles along and blinks; moods fade back to a smile
        if (this.mascot) {
          this.mascot.rotation.z = Math.sin(this.tNow * 3.1) * 0.09;
          this.mascot.position.y = 1.24 + Math.abs(Math.sin(this.tNow * 5.2)) * 0.022 + Math.max(0, this.suspY) * 0.05;
          if (this.mascotMoodT > 0) { this.mascotMoodT -= dt; if (this.mascotMoodT <= 0 && this.mascotMood !== 'smile') { this.mascotMood = 'smile'; this._drawMascot(false); } }
          this.blinkT -= dt;
          if (this.blinkT <= 0 && this.blinking <= 0) { this.blinking = 0.13; this._drawMascot(true); }
          if (this.blinking > 0) { this.blinking -= dt; if (this.blinking <= 0) this._drawMascot(false); this.blinkT = 2.4 + Math.random() * 1.8; }
        }
      }
      this._nitroFlame(dt);
      place(this.rival, r.rival.x, r.rival.z);
      this.rival.rotation.z = Math.max(-0.25, Math.min(0.25, (LANES[r.rival.lane] - r.rival.x) * -0.04));
      // wheels that actually roll and steer (owner 2026-11-27: «العجل والكاوتش لازم يتحركوا»)
      if (this.meV) {
        this.meV.spin(r.p.v, dt, Math.max(-0.5, Math.min(0.5, r.p.vx * 0.028)));
        this.meV.setBrake(r.p.accel < -1 || r.p.bump > 0);
      }
      if (this.rivalV) {
        const rv = this._rivalPrevZ == null ? r.p.v : (r.rival.z - this._rivalPrevZ) / Math.max(dt, 0.001);
        this.rivalV.spin(Math.max(0, rv), dt, Math.max(-0.4, Math.min(0.4, (LANES[r.rival.lane] - r.rival.x) * -0.1)));
      }
      this._rivalPrevZ = r.rival.z;
      for (const c of r.traffic) {
        const near = c.z > r.p.z - 4 && c.z < r.p.z + 260; // a passed car vanishes just behind the player: below the chase camera its roof showed up huge and upside-down
        if (!near) {
          // Outside the render window a car needs NO mesh. Building one anyway was the great
          // frame thief (found 2026-11-27): the stage holds ~250 cars but the mesh pool caps
          // at 64, so calling _carMesh for every car on every frame made ~200 full procedural
          // makeRealCar() builds per frame, each evicting the previous car — seconds of JS
          // per frame on the owner's laptop while the GPU sat idle. Now: free the mesh of any
          // car that has left the window, and never build for a car outside it.
          const old = this.carMeshes.get(c.id);
          if (old) {
            this.cars.remove(old);
            this.carMeshes.delete(c.id);
            if (this.carSpin) this.carSpin.delete(c.id);
            if (old.userData.ownAssets) old.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((mm) => mm.dispose()); });
          }
          continue;
        }
        const m = this._carMesh(c);
        m.visible = true;
        {
          place(m, LANES[c.lane], c.z);
          if (c.cone) { m.rotation.x = c.hit ? -1.35 : 0; m.position.y = c.hit ? 0.18 : 0; }
          const veh = this.carSpin && this.carSpin.get(c.id);
          if (veh) {
            veh.spin(c.v, dt, 0);
            if (m.visible) { // traffic personality: a gentle suspension bob, pulsing service lights, a blinking indicator
              veh.lean.position.y = Math.abs(Math.sin(this.tNow * 6 + c.id * 2.3)) * 0.035;
              if (veh.pulseMats && veh.pulseMats.length) {
                const ph = Math.sin(this.tNow * 7 + c.id * 1.7) > 0 ? 1 : 0.12;
                veh.pulseMats[0].emissiveIntensity = 0.35 + 1.7 * ph;
                if (veh.pulseMats[1]) veh.pulseMats[1].emissiveIntensity = 0.35 + 1.7 * (1 - ph);
              }
              if (veh.blinker) veh.blinker.visible = ((this.tNow * 1.4 + c.id * 0.7) % 2.2) < 0.3;
              // a friendly beep (or soft wee-woo) when the child pulls up close behind
              if (r && r.state === 'run' && c.z - r.p.z > 3 && c.z - r.p.z < 10 && Math.abs(LANES[c.lane] - r.p.x) < 2 && this.clock > (this._honkAt || 0) + 2.4) {
                this._honkAt = this.clock;
                const sp = veh.spec || {};
                this.sound.honk(0.9 + (c.id % 5) * 0.07, !!(sp.police || sp.ambulance));
              }
            }
          }
        }
      }
      if (this.stars && this.stars.visible) this.stars.position.set(-bend(zp) * 0.3, 0, zp);
      if (this.rocksOn && this.rocks) this.rocks.forEach((rk, i) => {
        const z = Math.floor((zp - 10) / 26) * 26 + i * 26;
        const side = i % 3 === 0 ? -1 : 1;
        rk.position.set(-bend(z) + side * (HALF + 6 + (i % 4) * 2), 0, z);
      });
    }
    const bx = r ? -(bend(zp) + r.p.x * 0.6) : -bend(zp);
    this.camera.position.set(this.camera.position.x + (bx - this.camera.position.x) * Math.min(1, dt * 6), this.cw < this.ch ? 5.6 : 4.4, zp - (this.cw < this.ch ? 9.5 : 8));
    // speed you can SEE: the view widens as you fly, and kicks again on nitro
    const speed01 = r ? Math.min(1, r.p.v / 37) : 0.25;
    const targetFov = (this.cw < this.ch ? 76 : 60) + speed01 * 7 + (r && r.p.nitro > 0 ? 5 : 0);
    if (Math.abs(targetFov - this.camera.fov) > 0.02) { this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 3.2); this.camera.updateProjectionMatrix(); }
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt);
      const s = this.shake * 0.35;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
    }
    if (this.panoMesh) this.panoMesh.position.set(this.camera.position.x, 100, this.camera.position.z);
    const la = r ? -(bend(zp + 22) + r.p.x * 0.4) : -bend(zp + 22);
    this.camera.lookAt(la, 1.2, zp + 18);
    this._stepParticles(dt);
    this.renderer.render(this.scene, this.camera);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.sound.dispose();
    this.voice.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    this.root.remove();
  }
}

void LANES;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SunsetHighway = api;
export default api;
