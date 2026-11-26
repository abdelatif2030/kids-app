// «فرقة الدببة الجيلي» — Gummy Squad. Entry: window.GummySquad.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A casual 3D squad battle in a cosy night-time candy land. Drag anywhere to move three gummy bears (they fight the nearest sweet
// by themselves), dodge the telegraphed glaze rain and King Donut's rolling charge, tap SUPER for a giant jawbreaker. Candies buy
// upgrades between runs. Portrait and landscape. three.js, art and sound made in code. No network, no ads, no tracking.
import * as THREE from 'three';
import { Run, ARENA, BEARS, KINDS, UPGRADES, normalizeSave, buyUpgrade, upgradeCost, applyResult, STAGES } from './sim.js';
import { Sound } from './audio.js';
import { G, mesh, basic, clay, makeBear, makeEnemy, makeBoss, makeCandy, makeMint, makeJaw, shadowDisc, softDot, stripeTex, swirlTex } from './models.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { polishRenderer } from './polish.js';

const S = {
  title: ['فرقة الدببة الجيلي', 'GUMMY SQUAD'], play: ['العب', 'PLAY'], stage: ['المرحلة', 'Stage'], nextStage: ['المرحلة الجاية', 'Next stage'], upgrades: ['التطويرات', 'UPGRADES'], settings: ['الإعدادات', 'SETTINGS'], back: ['رجوع', 'Back'],
  sound: ['الصوت', 'Sound'], on: ['شغّال', 'On'], off: ['مقفول', 'Off'], language: ['اللغة', 'Language'], quit: ['خروج', 'Quit'],
  paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], restart: ['من الأول', 'RESTART'], home: ['الرئيسية', 'HOME'],
  wave: ['الموجة', 'WAVE'], boss: ['الملك دونات', 'KING DONUT'], bossIntro: ['الملك دونات وصل!', 'King Donut is here!'], super: ['سوبر', 'SUPER'],
  won: ['كسبتوا! الملك بقى فتافيت 🍩', 'You win! King Donut is crumbs 🍩'], lost: ['الدببة دابت 💧', 'The bears melted 💧'], again: ['العب تاني', 'Play again'],
  earned: ['حلويات جمعتها', 'Candies collected'], bonus: ['مكافأة الفوز', 'Win bonus'], total: ['معاك', 'You have'],
  dmg: ['قوة الضرب', 'Sweet Power'], dmgD: ['الدببة بتضرب أقوى', 'Bears hit harder'], hp: ['صحة الدببة', 'Bear Health'], hpD: ['الدببة تتحمل أكتر', 'Bears take more'], chg: ['شحن السوبر', 'Super Charge'], chgD: ['السوبر يتشحن أسرع', 'Super charges faster'],
  buy: ['اشتري', 'Buy'], max: ['أقصى مستوى', 'MAX'], how: ['اسحب في أي مكان لتحريك الفرقة. الدببة بتضرب لوحدها!', 'Drag anywhere to move the squad. The bears fight by themselves!'],
  tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], mintHint: ['خد النعناع لتصحّي دبدوب!', 'Grab the mint to wake a bear!'], dodge: ['اهرب من الدوائر الحمرا!', 'Dodge the red circles!'],
  b0: ['فراولة', 'Strawberry'], b1: ['ليمون', 'Lime'], b2: ['توتة', 'Blueberry'], stars: ['نجوم', 'stars'], best: ['أفضل نتيجة', 'Best'],
};
const I = makeI18n(S);
const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const BEAR_CSS = ['#ff4a62', '#7ae83a', '#4a8aff'];

const STYLE = css('gs', '#6a4ad0', '#2a1a78', '#ffd0f0') + `
.gs-root{background:#1d1645}
.gs-menu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:calc(var(--u)*5) calc(var(--u)*4) calc(var(--u)*6);box-sizing:border-box;pointer-events:none}
.gs-menu>*{pointer-events:auto}
.gs-menu .gs-logo{font-size:calc(var(--u)*11);margin-top:calc(var(--u)*3);filter:drop-shadow(0 calc(var(--u)*.8) 0 rgba(60,10,90,.8))}
.gs-stagebar{white-space:nowrap;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*3);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.gs-btns{display:flex;flex-direction:column;gap:calc(var(--u)*2);width:min(calc(var(--u)*70),90%)}
@media (orientation:landscape){.gs-btns{flex-direction:row;width:min(calc(var(--u)*150),94%)}.gs-menu .gs-logo{font-size:calc(var(--u)*8);margin-top:0}}
.gs-btn{background:linear-gradient(180deg,#ff9ad8,#e8509a);box-shadow:0 calc(var(--u)*.9) 0 #902a62,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.4)}
.gs-btn.dark{background:linear-gradient(180deg,#8a7aff,#5a44d0);box-shadow:0 calc(var(--u)*.9) 0 #2a1a80}
.gs-btn.go{background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.9) 0 #1a7a3a}
.gs-btn[disabled]{opacity:.5;filter:grayscale(.6)}
.gs-hud{position:absolute;inset:0;pointer-events:none}
.gs-portraits{position:absolute;left:calc(var(--u)*2.5);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.gs-por{width:calc(var(--u)*14);background:rgba(30,16,80,.72);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.7)}
.gs-por.down{filter:grayscale(1);opacity:.6}
.gs-face{position:relative;width:calc(var(--u)*7.4);height:calc(var(--u)*7);border-radius:50%;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i{position:absolute;top:calc(var(--u)*-1.1);width:calc(var(--u)*3);height:calc(var(--u)*3);border-radius:50%;background:inherit;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i:first-child{left:calc(var(--u)*-.5)}.gs-face i:nth-child(2){right:calc(var(--u)*-.5)}
.gs-face b{position:absolute;top:calc(var(--u)*2.6);width:calc(var(--u)*.9);height:calc(var(--u)*1.2);border-radius:50%;background:#1c1430}
.gs-face b:nth-child(3){left:calc(var(--u)*2)}.gs-face b:nth-child(4){right:calc(var(--u)*2)}
.gs-face u{position:absolute;left:50%;top:calc(var(--u)*4);width:calc(var(--u)*2.4);height:calc(var(--u)*1.8);transform:translateX(-50%);border-radius:50%;background:rgba(255,255,255,.7)}
.gs-hp{width:100%;height:calc(var(--u)*1.7);border-radius:99px;background:rgba(0,0,0,.5);overflow:hidden}
.gs-hp b{display:block;height:100%;background:linear-gradient(180deg,#8aff9a,#2fc86a);transition:width .12s}
.gs-hp.low b{background:linear-gradient(180deg,#ff9a8a,#e83a3a)}
.gs-super{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:none;padding:0;font-family:inherit;font-weight:900;cursor:pointer;pointer-events:auto;color:#fff;font-size:calc(var(--u)*4);display:flex;align-items:center;justify-content:center;background:conic-gradient(#ffd23a var(--p,0%),rgba(30,16,80,.8) 0);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5)}
.gs-super span{width:84%;height:84%;border-radius:50%;background:linear-gradient(180deg,#6a4ad0,#3a2490);display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;gap:calc(var(--u)*.4);border:calc(var(--u)*.4) solid rgba(255,255,255,.8);box-sizing:border-box}
.gs-super span i{font-style:normal;font-size:calc(var(--u)*7)}
.gs-super.ready{animation:gspulse .7s infinite}.gs-super.ready span{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
@keyframes gspulse{50%{transform:scale(1.1)}}
.gs-bossbar{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--u)*3.5);width:min(calc(var(--u)*60),44%);display:none;flex-direction:column;align-items:center;gap:calc(var(--u)*.5);font-weight:900;font-size:calc(var(--u)*3.4);text-shadow:0 0 calc(var(--u)*1) #000}
.gs-bossbar .gs-hp{height:calc(var(--u)*2.8);border:calc(var(--u)*.4) solid #fff}.gs-bossbar .gs-hp b{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
.gs-banner{position:absolute;left:0;right:0;top:34%;text-align:center;font-weight:900;font-size:calc(var(--u)*10);color:#ffe0f8;-webkit-text-stroke:calc(var(--u)*.7) rgba(60,10,90,.9);paint-order:stroke fill;opacity:0;transform:scale(.7);transition:opacity .3s,transform .3s;pointer-events:none}
.gs-banner.show{opacity:1;transform:scale(1)}
.gs-stick{position:absolute;width:calc(var(--u)*18);height:calc(var(--u)*18);margin:calc(var(--u)*-9) 0 0 calc(var(--u)*-9);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.1);display:none;pointer-events:none}
.gs-stick i{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:rgba(255,255,255,.55)}
.gs-up{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.gs-urow{display:flex;align-items:center;gap:calc(var(--u)*2);background:rgba(20,10,60,.55);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6)}
.gs-urow>div:nth-child(2){flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.6);font-weight:900;font-size:calc(var(--u)*3.6)}
.gs-urow small{font-size:calc(var(--u)*2.8);opacity:.85;font-weight:700}
.gs-uico{font-size:calc(var(--u)*8)}
.gs-pips{display:flex;gap:calc(var(--u)*.6)}.gs-pips i{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);border-radius:50%;background:rgba(255,255,255,.25)}.gs-pips i.on{background:#ffd23a}
.gs-buy{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.8);border:none;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*3);min-width:calc(var(--u)*16);cursor:pointer;color:#fff;background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.6) 0 #1a7a3a}
.gs-buy[disabled]{background:#7a7a9a;box-shadow:none;opacity:.7;cursor:default}
.gs-row{display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:900;font-size:calc(var(--u)*4)}
.gs-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}.gs-stars .off{filter:grayscale(1);opacity:.3}
.gs-soundpill{background:#ffd166}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    this.save = normalizeSave(config.save);
    I.setLang(this.save.lang || config.lang);
    this.age = Number(config.age) || 5;
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('gs-style')) document.head.append(h('style', { id: 'gs-style' }, STYLE));
    this.root = h('div', { class: 'gs-root' });
    el.append(this.root);
    this.layer = h('div', { class: 'gs-layer' });
    this.mode = 'menu'; this.clock = 0; this.keys = {}; this.stick = null; this.paused = false; this.run = null; this.shake = 0;
    this.maps = { enemies: new Map(), hazards: new Map(), projs: new Map(), picks: new Map(), jaws: new Map() };
    this.decals = []; this.camPos = new THREE.Vector3(); this.camTarget = new THREE.Vector3(); this.camInit = false;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }
  get dir() { return I.getLang() === 'en' ? 'ltr' : 'rtl'; }

  // ------------------------------------------------------------ the 3D world
  _three() {
    const r = (this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true }), { preset: 'warm' }));
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.25;
    this.root.prepend(r.domElement);
    const sc = (this.scene = new THREE.Scene());
    const sky = document.createElement('canvas'); sky.width = 8; sky.height = 256; const sx = sky.getContext('2d');
    const gr = sx.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#171040'); gr.addColorStop(0.6, '#3a2a80'); gr.addColorStop(1, '#6a4aa8'); sx.fillStyle = gr; sx.fillRect(0, 0, 8, 256);
    const skyT = new THREE.CanvasTexture(sky); skyT.colorSpace = THREE.SRGBColorSpace; sc.background = skyT;
    sc.fog = new THREE.Fog(0x3a2a80, 55, 140);
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 300);
    sc.add(new THREE.HemisphereLight(0xb8b0ff, 0x5a3a78, 1.5));
    const moon = new THREE.DirectionalLight(0xd8e4ff, 2.2); moon.position.set(-10, 24, 12); sc.add(moon);
    const rim = new THREE.DirectionalLight(0xff9ad8, 0.8); rim.position.set(12, 10, -14); sc.add(rim);
    this.glow = new THREE.PointLight(0xffc0f0, 55, 22, 1.6); this.glow.position.set(0, 5, 0); sc.add(this.glow);
    this._buildWorld();
    // bears (the same three models for the menu and the battle)
    this.bearVis = BEARS.map((d) => { const m = makeBear(d); sc.add(m); return m; });
    this.bossVis = makeBoss(); this.bossVis.visible = false; sc.add(this.bossVis);
    this.bossBar = null;
    this._particles3d();
  }

  _buildWorld() {
    const sc = this.scene;
    const gT = (() => { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); const n = 8; const sz = 512 / n; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { x.fillStyle = (i + j) % 2 ? '#7a62c8' : '#6c54ba'; x.fillRect(i * sz, j * sz, sz, sz); }
      let s = 3; const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
      const cols = ['#ff9ad0', '#ffe08a', '#8affd8', '#9ad0ff', '#ffffff'];
      for (let i = 0; i < 90; i++) { x.strokeStyle = cols[i % 5]; x.lineWidth = 5; x.lineCap = 'round'; const px = r() * 512; const py = r() * 512; const a = r() * TAU; x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * 12, py + Math.sin(a) * 12); x.stroke(); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); t.anisotropy = 4; return t; })();
    const floor = mesh(G.box, new THREE.MeshStandardMaterial({ map: gT, roughness: 0.75, bumpMap: clay(0).bumpMap, bumpScale: 0.4, emissive: 0x5a3aa0, emissiveIntensity: 0.18 }), 0, -0.4, 0, ARENA.hx * 2 + 1, 0.8, ARENA.hy * 2 + 1);
    sc.add(floor);
    const outer = mesh(G.box, new THREE.MeshStandardMaterial({ color: 0x3a2a80, roughness: 0.9, emissive: 0x2a1a60, emissiveIntensity: 0.3 }), 0, -0.9, 0, 220, 0.8, 220); sc.add(outer);
    // gumdrop rim around the arena
    const rimCols = [0xff7ab8, 0xffe04a, 0x7affc8, 0x8ab8ff, 0xc08aff];
    const hx = ARENA.hx + 0.75; const hy = ARENA.hy + 0.75;
    let k = 0;
    for (let i = -hx; i <= hx; i += 1.5) for (const [x, z] of [[i, -hy], [i, hy]]) sc.add(mesh(G.half, clay(rimCols[k++ % 5], { em: 0.25 }), x, 0, z, 0.8, 0.75, 0.8));
    for (let i = -hy + 1.5; i < hy; i += 1.5) for (const [x, z] of [[-hx, i], [hx, i]]) sc.add(mesh(G.half, clay(rimCols[k++ % 5], { em: 0.25 }), x, 0, z, 0.8, 0.75, 0.8));
    // lollipop trees, candy-cane posts and gumdrop hills outside
    let s = 21; const rn = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    const tcols = [['#ff7ab8', '#fff0a8'], ['#7affc8', '#ffffff'], ['#8ab8ff', '#ffd0f0'], ['#ffd23a', '#ff8ad0']];
    const swirls = tcols.map(([a, b]) => swirlTex(a, b));
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * TAU + rn() * 0.2; const d = 20 + rn() * 26;
      const x = Math.cos(a) * d * 1.15; const z = Math.sin(a) * d;
      if (Math.abs(x) < 14.5 && Math.abs(z) < 14.5) continue;
      const hgt = 4 + rn() * 5; const tr = new THREE.Group(); tr.position.set(x, 0, z);
      tr.add(mesh(G.cyl, clay(0xfff0f8, { em: 0.35 }), 0, hgt / 2, 0, 0.18, hgt, 0.18));
      const disc = mesh(G.cyl, clay(0xffffff, { em: 0.22, map: swirls[i % 4], fresh: true }), 0, hgt + 1.1, 0, 1.5 + rn(), 0.35, 1.5 + rn()); disc.scale.z = disc.scale.x; disc.rotation.x = Math.PI / 2 - 0.35; disc.rotation.y = rn() * TAU; tr.add(disc);
      sc.add(tr);
    }
    for (let i = 0; i < 22; i++) { const a = rn() * TAU; const d = 18 + rn() * 30; const x = Math.cos(a) * d; const z = Math.sin(a) * d; if (Math.abs(x) < 14.5 && Math.abs(z) < 14.5) continue; sc.add(mesh(G.half, clay(rimCols[i % 5], { em: 0.2 }), x, -0.2, z, 2 + rn() * 3, 1.5 + rn() * 2.5, 2 + rn() * 3)); }
    for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const p = new THREE.Group(); p.position.set(x * (ARENA.hx + 1.8), 0, z * (ARENA.hy + 1.8));
      const red = clay(0xe8243a, { em: 0.3 }); const white = clay(0xffffff, { em: 0.35 });
      for (let i = 0; i < 8; i++) p.add(mesh(G.cyl, i % 2 ? red : white, 0, 0.4 + i * 0.6, 0, 0.22, 0.6, 0.22));
      p.add(mesh(G.sph, basic(0xfff0a8), 0, 5.2, 0, 0.42)); const pl = new THREE.PointLight(0xffe0a0, 14, 12, 1.5); pl.position.y = 5.2; p.add(pl);
      sc.add(p);
    }
    // stars
    const n = 260; const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const a = rn() * TAU; const e = 0.15 + rn() * 1.1; const d = 140; pos[i * 3] = Math.cos(a) * Math.cos(e) * d; pos[i * 3 + 1] = Math.sin(e) * d * 0.7 + 10; pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * d; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.starPts = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xfff4d0, size: 2.2, map: softDot(), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }));
    sc.add(this.starPts);
    const moonM = new THREE.Mesh(G.sph, new THREE.MeshBasicMaterial({ color: 0xfff6d8, fog: false })); moonM.position.set(-60, 55, -110); moonM.scale.setScalar(9); sc.add(moonM);
  }

  _particles3d() {
    const sc = this.scene;
    this.bitMax = 320;
    this.bits = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.13, 0), clay(0xffffff, { em: 0.35, fresh: true }), this.bitMax);
    this.bits.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.bits.frustumCulled = false;
    this.bits.setColorAt(0, new THREE.Color(1, 1, 1));
    sc.add(this.bits);
    this.bitList = []; this._dummy = new THREE.Object3D();
    for (let i = 0; i < this.bitMax; i++) { this._dummy.scale.setScalar(0); this._dummy.updateMatrix(); this.bits.setMatrixAt(i, this._dummy.matrix); }
    this.sparkMax = 240; this.sparks = [];
    const g = new THREE.BufferGeometry();
    this.sparkPos = new Float32Array(this.sparkMax * 3).fill(-999); this.sparkCol = new Float32Array(this.sparkMax * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.sparkPos, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.sparkCol, 3));
    this.sparkPts = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.7, vertexColors: true, map: softDot(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.sparkPts.frustumCulled = false; sc.add(this.sparkPts);
    this.barGeo = new THREE.PlaneGeometry(1, 1);
    this.dotTex = softDot();
  }

  addBits(x, y, z, color, n, speed = 4, up = 4) {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) {
      if (this.bitList.length >= this.bitMax) this.bitList.shift();
      const a = Math.random() * TAU; const sp = speed * (0.4 + Math.random() * 0.8);
      const cc = c.clone().offsetHSL((Math.random() - 0.5) * 0.08, 0, (Math.random() - 0.5) * 0.15);
      this.bitList.push({ x, y, z, vx: Math.cos(a) * sp, vy: up * (0.5 + Math.random()), vz: Math.sin(a) * sp, life: 0.9 + Math.random() * 0.5, age: 0, s: 0.6 + Math.random() * 0.9, rx: Math.random() * 6, rv: (Math.random() - 0.5) * 12, c: cc });
    }
  }
  addSparks(x, y, z, color, n, speed = 3) {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) { if (this.sparks.length >= this.sparkMax) this.sparks.shift(); const a = Math.random() * TAU; const sp = speed * Math.random(); this.sparks.push({ x, y, z, vx: Math.cos(a) * sp, vy: 1 + Math.random() * speed, vz: Math.sin(a) * sp, life: 0.5 + Math.random() * 0.5, age: 0, c }); }
  }
  _tickParticles(dt) {
    const d = this._dummy; let i = 0;
    this.bitList = this.bitList.filter((b) => { b.age += dt; return b.age < b.life; });
    for (const b of this.bitList) {
      b.vy -= 14 * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt; if (b.y < 0.1) { b.y = 0.1; b.vy *= -0.3; b.vx *= 0.7; b.vz *= 0.7; }
      b.rx += b.rv * dt; d.position.set(b.x, b.y, b.z); d.rotation.set(b.rx, b.rx * 0.7, 0); d.scale.setScalar(b.s * Math.min(1, (b.life - b.age) * 3)); d.updateMatrix();
      this.bits.setMatrixAt(i, d.matrix); this.bits.setColorAt(i, b.c); i++;
    }
    for (; i < this.bitMax; i++) { d.scale.setScalar(0); d.updateMatrix(); this.bits.setMatrixAt(i, d.matrix); }
    this.bits.instanceMatrix.needsUpdate = true; if (this.bits.instanceColor) this.bits.instanceColor.needsUpdate = true;
    this.sparks = this.sparks.filter((s) => { s.age += dt; return s.age < s.life; });
    let k = 0;
    for (const s of this.sparks) { s.vy -= 4 * dt; s.x += s.vx * dt; s.y += s.vy * dt; s.z += s.vz * dt; const f = 1 - s.age / s.life; this.sparkPos[k * 3] = s.x; this.sparkPos[k * 3 + 1] = s.y; this.sparkPos[k * 3 + 2] = s.z; this.sparkCol[k * 3] = s.c.r * f; this.sparkCol[k * 3 + 1] = s.c.g * f; this.sparkCol[k * 3 + 2] = s.c.b * f; k++; }
    for (; k < this.sparkMax; k++) this.sparkPos[k * 3 + 1] = -999;
    this.sparkPts.geometry.attributes.position.needsUpdate = true; this.sparkPts.geometry.attributes.color.needsUpdate = true;
  }

  decal(x, z, r, color, life = 1.2, opacity = 0.6, ringOnly = false) {
    const m = new THREE.Mesh(ringOnly ? G.ring : G.disc, basic(color, opacity, { side: THREE.DoubleSide })); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.05, z); m.scale.setScalar(r); m.renderOrder = 2; this.scene.add(m);
    this.decals.push({ m, life, age: 0, r, o: opacity, grow: ringOnly });
  }

  // ------------------------------------------------------------ layout and input
  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch; this.camera.updateProjectionMatrix();
  }

  _camFit() {
    const a = this.camera.aspect; const portrait = a < 1;
    const vf = (this.camera.fov * Math.PI) / 360;
    const e = ((portrait ? 66 : 58) * Math.PI) / 180;
    const H = portrait ? 8.4 : 11.5 * Math.min(a, 1.9); // half-width (portrait) or ground half-height x aspect (landscape) shown around the squad
    const Vd = portrait ? 14 : 11.5;
    const dW = H / (Math.tan(vf) * a) + 12 * Math.cos(e) * 0.6;
    const dH = (2 * Vd * Math.sin(e) * 1.08) / (2 * Math.tan(vf));
    return { d: portrait ? dW : dH, e, H, Vd, portrait };
  }

  _bind() {
    const root = this.root;
    const unlock = () => { this.sound.unlock(); };
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || this.mode !== 'play' || this.paused) return;
      const r = root.getBoundingClientRect();
      this.stick = { id: e.pointerId, ox: e.clientX - r.left, oy: e.clientY - r.top, x: 0, y: 0 };
      this.stickEl.style.display = 'block'; this.stickEl.style.left = `${this.stick.ox}px`; this.stickEl.style.top = `${this.stick.oy}px`;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => { const s = this.stick; if (!s || s.id !== e.pointerId) return; const r = root.getBoundingClientRect(); s.x = e.clientX - r.left - s.ox; s.y = e.clientY - r.top - s.oy; const m = Math.hypot(s.x, s.y); const mx = this.u * 9; const k = m > mx ? mx / m : 1; this.knob.style.transform = `translate(${s.x * k}px,${s.y * k}px)`; });
    const end = (e) => { unlock(); if (this.stick && this.stick.id === e.pointerId) { this.stick = null; this.stickEl.style.display = 'none'; this.knob.style.transform = ''; } };
    root.addEventListener('pointerup', end); root.addEventListener('pointercancel', end);
    root.addEventListener('click', unlock);
    this._onKey = (e) => {
      const k = e.key.toLowerCase(); const down = e.type === 'keydown';
      this.keys[k] = down;
      if (down) { this.sound.unlock(); if (k === ' ' || k === 'enter') { if (this.mode === 'play' && !this.paused) this.superQ = true; } if ((k === 'escape' || k === 'p') && this.mode === 'play') this.togglePause(); }
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k) && this.mode === 'play') e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let x = 0; let y = 0;
    const s = this.stick;
    if (s) { const m = Math.hypot(s.x, s.y); const mx = this.u * 9; if (m > this.u * 1.2) { const k = Math.min(1, m / mx) / m; x = s.x * k; y = s.y * k; } }
    const K = this.keys;
    const kx = (K.arrowright || K.d ? 1 : 0) - (K.arrowleft || K.a ? 1 : 0); const ky = (K.arrowdown || K.s ? 1 : 0) - (K.arrowup || K.w ? 1 : 0);
    if (kx || ky) { const m = Math.hypot(kx, ky); x = kx / m; y = ky / m; }
    const sup = this.superQ; this.superQ = false;
    return { x, y, super: sup };
  }

  // ------------------------------------------------------------ screens
  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _persist() { this.post({ type: 'save', save: this.save }); }
  _soundPill() { const pill = h('button', { class: 'gs-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  _tap(fn) { return () => { this.sound.unlock(); this.sound.play('tap'); fn(); }; }

  showMenu() {
    this.selStage = Math.min(this.selStage ?? this.save.stage, this.save.stage);
    this.mode = 'menu'; this._clear(); this._endRunVisuals(); this.root.setAttribute('dir', this.dir);
    this.sound.mode('calm');
    const best = this.save.bestStars;
    this.layer.append(h('div', { class: 'gs-menu' },
      h('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1)' }, h('div', { class: 'gs-logo' }, I.t('title')), h('div', { class: 'gs-pill' }, '🍬 ', I.num(this.save.candies), best ? ` · ${'⭐'.repeat(best)}` : '')),
      h('div', { class: 'gs-btns' },
        h('div', { class: 'gs-stagebar' },
          h('button', { class: 'gs-round', 'aria-label': '-', onclick: this._tap(() => { this.selStage = Math.max(0, this.selStage - 1); this.showMenu(); }) }, '◀'),
          h('b', {}, I.t('stage'), ' ', I.num(this.selStage + 1), ' / ', I.num(STAGES)),
          h('button', { class: 'gs-round', 'aria-label': '+', onclick: this._tap(() => { this.selStage = Math.min(this.save.stage, this.selStage + 1); this.showMenu(); }) }, '▶')),
        h('button', { class: 'gs-btn go', onclick: this._tap(() => this.startRun()) }, '▶ ', I.t('play')),
        h('button', { class: 'gs-btn', onclick: this._tap(() => this.showUpgrades()) }, '🍭 ', I.t('upgrades')),
        h('button', { class: 'gs-btn dark', onclick: this._tap(() => this.showSettings()) }, '⚙ ', I.t('settings'))),
      h('button', { class: 'gs-round', style: 'position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);direction:ltr', 'aria-label': I.t('quit'), onclick: this._tap(() => this.post({ type: 'exit' })) }, '✕')));
    this._soundPill();
  }

  showUpgrades() {
    this.mode = 'menu'; this._clear();
    const rows = [['damage', '⚔️', 'dmg', 'dmgD'], ['health', '💖', 'hp', 'hpD'], ['charge', '⚡', 'chg', 'chgD']].map(([k, ico, n, d]) => {
      const lv = this.save.upgrades[k]; const cost = upgradeCost(this.save, k); const can = cost !== null && this.save.candies >= cost;
      const pips = h('div', { class: 'gs-pips' }, ...Array.from({ length: UPGRADES[k].max }, (_, i) => h('i', { class: i < lv ? 'on' : '' })));
      return h('div', { class: 'gs-urow' }, h('div', { class: 'gs-uico' }, ico), h('div', {}, h('div', {}, I.t(n)), h('small', {}, I.t(d)), pips),
        h('button', { class: 'gs-buy', disabled: !can, onclick: this._tap(() => { const s = buyUpgrade(this.save, k); if (s) { this.save = s; this._persist(); this.sound.play('mint'); this.showUpgrades(); } }) }, cost === null ? I.t('max') : `🍬 ${I.num(cost)}`));
    });
    this.layer.append(h('div', { class: 'gs-dim' }, h('div', { class: 'gs-card' }, h('div', { class: 'gs-title' }, I.t('upgrades')), h('div', { class: 'gs-row' }, h('span', {}, I.t('total')), h('span', {}, '🍬 ', I.num(this.save.candies))), h('div', { class: 'gs-up' }, ...rows), h('button', { class: 'gs-btn dark', onclick: this._tap(() => this.showMenu()) }, I.t('back')))));
  }

  showSettings() {
    this.mode = 'menu'; this._clear();
    const snd = h('button', { class: 'gs-btn dark', onclick: this._tap(() => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this._persist(); this.showSettings(); }) }, `🔊 ${I.t('sound')}: ${this.save.muted ? I.t('off') : I.t('on')}`);
    const lang = h('button', { class: 'gs-btn dark', onclick: this._tap(() => { this.save.lang = I.getLang() === 'ar' ? 'en' : 'ar'; I.setLang(this.save.lang); this._persist(); this.root.setAttribute('dir', this.dir); this.showSettings(); }) }, `🌐 ${I.t('language')}: ${I.getLang() === 'ar' ? 'العربية' : 'English'}`);
    this.layer.append(h('div', { class: 'gs-dim' }, h('div', { class: 'gs-card' }, h('div', { class: 'gs-title' }, I.t('settings')), snd, lang, h('div', { class: 'gs-small' }, I.t('how')), h('button', { class: 'gs-btn', onclick: this._tap(() => this.showMenu()) }, I.t('back')))));
  }

  startRun() {
    this._endRunVisuals();
    this.run = new Run({ seed: (Date.now() & 0xffffff) | 1, upgrades: this.save.upgrades, easy: this.age <= 3, stage: this.selStage ?? 0 });
    this.mode = 'play'; this.paused = false; this.shake = 0; this.endT = 0; this.bossDeadAt = null; this.camInit = false; this.hintShown = 0;
    this.sound.mode('calm');
    this._clear(); this._buildHud();
    this.banner(`${I.t('wave')} ${I.num(1)}`);
    this.hint(I.t('how'), 4200);
  }

  _endRunVisuals() {
    for (const m of Object.values(this.maps)) { for (const v of m.values()) this.scene.remove(v.g || v); m.clear(); }
    this.bossVis.visible = false; this.run = null;
    for (const d of this.decals) this.scene.remove(d.m); this.decals = []; this.bitList = []; this.sparks = [];
    this.bearVis.forEach((b) => { b.userData.ring.visible = false; });
  }

  _buildHud() {
    const por = BEARS.map((d, i) => {
      const hp = h('b'); const bar = h('div', { class: 'gs-hp' }, hp);
      const el = h('div', { class: 'gs-por' }, h('div', { class: 'gs-face', style: `background:${BEAR_CSS[i]}` }, h('i'), h('i'), h('b'), h('b'), h('u')), bar);
      return { el, hp, bar };
    });
    this.hud = { por, last: [] };
    this.candyEl = h('span', {}, '0'); this.waveEl = h('span', {});
    const pause = h('button', { class: 'gs-round', 'aria-label': I.t('paused'), onclick: this._tap(() => this.togglePause()) }, '⏸');
    this.superBtn = h('button', { class: 'gs-super', onclick: (e) => { e.stopPropagation(); this.superQ = true; } }, h('span', {}, h('i', {}, '🍬'), I.t('super')));
    this.bossHp = h('b'); this.bossBarEl = h('div', { class: 'gs-bossbar' }, h('div', {}, '🍩 ', I.t('boss')), h('div', { class: 'gs-hp', style: 'width:100%' }, this.bossHp));
    this.bannerEl = h('div', { class: 'gs-banner' });
    this.hintEl = h('div', { class: 'gs-hint', style: 'top:calc(var(--u)*24)' });
    this.knob = h('i'); this.stickEl = h('div', { class: 'gs-stick' }, this.knob);
    this.layer.append(this.stickEl,
      h('div', { class: 'gs-hud' },
        h('div', { class: 'gs-top' }, pause, h('div', { class: 'gs-pill' }, '🍬 ', this.candyEl), h('div', { class: 'gs-pill' }, this.waveEl)),
        this.bossBarEl, h('div', { class: 'gs-portraits' }, ...por.map((p) => p.el)), this.superBtn, this.bannerEl, this.hintEl));
    this._soundPill();
  }

  banner(t, ms = 1800) { if (!this.bannerEl) return; this.bannerEl.textContent = t; this.bannerEl.classList.add('show'); clearTimeout(this._bt); this._bt = setTimeout(() => this.bannerEl && this.bannerEl.classList.remove('show'), ms); }
  hint(t, ms = 3000) { if (!this.hintEl) return; this.hintEl.textContent = t; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }

  togglePause() {
    if (this.mode !== 'play' || (this.run && this.run.over)) return;
    this.paused = !this.paused;
    if (this.paused) {
      this.stick = null; if (this.stickEl) this.stickEl.style.display = 'none';
      this.pauseEl = h('div', { class: 'gs-dim' }, h('div', { class: 'gs-card' }, h('div', { class: 'gs-title' }, I.t('paused')),
        h('button', { class: 'gs-btn go', onclick: this._tap(() => this.togglePause()) }, '▶ ', I.t('resume')),
        h('button', { class: 'gs-btn dark', onclick: this._tap(() => { this.paused = false; this.startRun(); }) }, '🔄 ', I.t('restart')),
        h('button', { class: 'gs-btn dark', onclick: this._tap(() => { this.paused = false; this.showMenu(); }) }, '🏠 ', I.t('home'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _end() {
    const run = this.run; const res = run.result;
    this.endShown = true;
    this.save = applyResult(this.save, res); this._persist();
    this.sound.mode('calm');
    this.sound.play(res.win ? 'win' : 'lose');
    const stars = h('div', { class: 'gs-stars' }, ...[0, 1, 2].map((i) => h('span', { class: i < res.stars ? '' : 'off' }, '⭐')));
    this.layer.append(h('div', { class: 'gs-dim' }, h('div', { class: 'gs-card' }, h('div', { class: 'gs-title', style: 'font-size:calc(var(--u)*6.5)' }, I.t(res.win ? 'won' : 'lost')), res.win ? stars : null,
      h('div', { class: 'gs-row' }, h('span', {}, I.t('earned')), h('span', {}, '🍬 ', I.num(res.candies))), res.win ? h('div', { class: 'gs-row' }, h('span', {}, I.t('bonus')), h('span', {}, '🍬 ', I.num(res.bonus))) : null,
      h('div', { class: 'gs-row' }, h('span', {}, I.t('total')), h('span', {}, '🍬 ', I.num(this.save.candies))),
      res.win && this.selStage < this.save.stage ? h('button', { class: 'gs-btn go', onclick: this._tap(() => { this.endShown = false; this.selStage += 1; this.startRun(); }) }, '▶ ', I.t('nextStage')) : null,
      h('button', { class: 'gs-btn go', onclick: this._tap(() => { this.endShown = false; this.startRun(); }) }, '▶ ', I.t('again')),
      h('button', { class: 'gs-btn', onclick: this._tap(() => { this.endShown = false; this.showUpgrades(); }) }, '🍭 ', I.t('upgrades')),
      h('button', { class: 'gs-btn dark', onclick: this._tap(() => { this.endShown = false; this.showMenu(); }) }, '🏠 ', I.t('home')))));
    this.mode = 'result';
  }

  // ------------------------------------------------------------ frame
  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    const run = this.run;
    if (run && (this.mode === 'play') && !this.paused) {
      run.step(dt, run.over ? {} : this._input());
      this._events(run.drain());
      this._hudUpdate();
      if (run.over && !this.endShown) { this.endT += dt; if (this.endT > (run.state === 'won' ? 2.6 : 1.6)) this._end(); }
    }
    this._sync(dt);
    this._tickParticles(this.paused ? 0 : dt);
    this._camera(dt);
    this.starPts.material.opacity = 0.75 + Math.sin(this.clock * 1.7) * 0.2;
    this.renderer.render(this.scene, this.camera);
  }

  _hudUpdate() {
    const run = this.run; if (!this.hud) return;
    this.candyEl.textContent = I.num(run.candies);
    this.waveEl.textContent = run.bossFight || run.boss ? I.t('boss') : `${I.t('wave')} ${I.num(run.wave + 1)}/${I.num(2)}`;
    run.bears.forEach((b, i) => { const p = this.hud.por[i]; const f = b.hp / b.maxHp; const w = `${Math.round(f * 100)}%`; if (this.hud.last[i] !== w) { p.hp.style.width = w; this.hud.last[i] = w; p.bar.classList.toggle('low', f < 0.34); } p.el.classList.toggle('down', !b.alive); });
    const pct = Math.round(run.charge);
    if (this._pct !== pct) { this._pct = pct; this.superBtn.style.setProperty('--p', `${pct}%`); this.superBtn.classList.toggle('ready', pct >= 100); }
    if (run.boss) { this.bossBarEl.style.display = 'flex'; this.bossHp.style.width = `${Math.max(0, (run.boss.hp / run.boss.maxHp) * 100)}%`; }
  }

  _throttle(n, ms) { const t = performance.now(); this._th = this._th || {}; if (t - (this._th[n] || 0) < ms) return false; this._th[n] = t; return true; }

  _events(evs) {
    const S_ = this.sound;
    for (const e of evs) {
      switch (e.type) {
        case 'swing': S_.play('straw'); this.bearVis[0].userData.kick = 1; { const a = e.a; this.addSparks(e.x + Math.cos(a) * 2, 1, e.y + Math.sin(a) * 2, 0xff9ab8, 6, 2); } break;
        case 'shoot': S_.play(e.idx === 1 ? 'lime' : 'blue'); this.bearVis[e.idx].userData.kick = 1; break;
        case 'hit': if (this._throttle('hit', 70)) S_.play('hit'); this.addSparks(e.x, 1.2, e.y, 0xffffff, 2, 2); break;
        case 'impact': if (e.kind === 'magic') { S_.play('limeBoom'); this.addSparks(e.x, 1, e.y, 0xb0ff6a, 12, 4); this.decal(e.x, e.y, 1.7, 0xb0ff6a, 0.35, 0.4); } else if (e.kind === 'gum') { if (this._throttle('imp', 60)) S_.play('impact'); this.addSparks(e.x, 1, e.y, 0x8ab8ff, 3, 2); } else this.addSparks(e.x, 1, e.y, 0xc08aff, 5, 2); break;
        case 'crumble': { S_.play('crumble'); const c = e.kind === 'boss' ? 0xff6ab8 : KINDS[e.kind].color; this.addBits(e.x, 0.8, e.y, c, e.kind === 'tank' ? 22 : 12, 5, 5); this.addBits(e.x, 0.8, e.y, 0xffffff, 4, 4, 4); this.addSparks(e.x, 1, e.y, c, 14, 4); break; }
        case 'candy': if (this._throttle('candy', 50)) S_.play('candy'); break;
        case 'mintDrop': this.hint(I.t('mintHint'), 3500); S_.play('warn'); break;
        case 'revive': S_.play('revive'); this.addSparks(e.x, 1, e.y, 0x8affd8, 30, 5); this.decal(e.x, e.y, 2.4, 0x8affd8, 0.7, 0.6, true); break;
        case 'heal': S_.play('mint'); this.addSparks(this.squad().x, 1, this.squad().y, 0x8affd8, 20, 4); break;
        case 'bearHit': S_.play('bearHit'); this.shake = Math.max(this.shake, 0.25); this.addSparks(e.x, 1.2, e.y, 0xff5a6a, 6, 3); break;
        case 'bearDown': S_.play('bearDown'); this.addBits(e.x, 0.8, e.y, BEARS[e.idx].color, 14, 3, 4); this.shake = 0.5; break;
        case 'wave': if (e.n > 1) { this.banner(`${I.t('wave')} ${I.num(e.n)}`); S_.play('wave'); } break;
        case 'waveClear': S_.play('wave'); break;
        case 'spit': S_.play('spit'); break;
        case 'fuse': S_.play('warn'); break;
        case 'rainWarn': case 'chargeWarn': case 'summonWarn': S_.play('warn'); if (e.type === 'chargeWarn') { S_.play('roar'); this.hint(I.t('dodge'), 2200); } break;
        case 'rain': S_.play('warn'); break;
        case 'chargeGo': S_.play('charge'); break;
        case 'splat': S_.play('splat'); this.addBits(e.x, 0.5, e.y, 0xff6ab8, 14, 4, 4); this.decal(e.x, e.y, e.r, 0xff6ab8, 5, 0.38); this.shake = Math.max(this.shake, 0.15); break;
        case 'blast': S_.play('blast'); this.addBits(e.x, 0.5, e.y, 0xffa23a, 18, 6, 5); this.addSparks(e.x, 1, e.y, 0xffe04a, 24, 6); this.decal(e.x, e.y, e.r, 0x3a2a30, 6, 0.35); this.shake = Math.max(this.shake, 0.4); break;
        case 'bossSlam': S_.play('slam'); this.shake = 0.9; this.addBits(e.x, 0.8, e.y, 0xd89a5a, 16, 6, 6); break;
        case 'bossIntro': S_.mode('battle'); S_.play('roar'); this.banner(I.t('bossIntro'), 2400); break;
        case 'bossLand': S_.play('slam'); this.shake = 1.0; this.addBits(e.x, 0.8, e.y, 0xff6ab8, 24, 7, 6); break;
        case 'phase': S_.play('roar'); this.shake = 0.7; break;
        case 'summon': S_.play('roar'); this.addSparks(e.x, 2, e.y, 0xff6ab8, 24, 5); break;
        case 'super': S_.play('super'); this.banner(I.t('super'), 900); break;
        case 'jawLand': S_.play('superBoom'); this.shake = 1.4; this.addBits(e.x, 1, e.y, 0xff8ad0, 40, 9, 8); this.addBits(e.x, 1, e.y, 0x6aeaff, 24, 8, 8); this.addSparks(e.x, 1, e.y, 0xffffff, 40, 9); this.decal(e.x, e.y, e.r, 0xffffff, 0.6, 0.7, true); this.decal(e.x, e.y, e.r * 0.9, 0xff8ad0, 6, 0.3); break;
        case 'bossDown': this.bossDeadAt = this.clock; S_.play('roar'); this.shake = 1.2; this.addBits(e.x, 1.5, e.y, 0xff6ab8, 60, 8, 8); this.addBits(e.x, 1.5, e.y, 0xd89a5a, 40, 8, 8); this.addSparks(e.x, 2, e.y, 0xffe04a, 60, 8); this.bossBarEl.style.display = 'none'; break;
        case 'won': this.banner('🎉', 2400); break;
        default: break;
      }
    }
  }
  squad() { return this.run ? this.run.squad : { x: 0, y: 0 }; }

  // ------------------------------------------------------------ visuals follow the simulation
  _bar(parent, w, y) { const g = new THREE.Group(); const bg = mesh(this.barGeo, basic(0x1a0a40, 0.7), 0, 0, 0, w, 0.18); const fg = mesh(this.barGeo, basic(0xff6a8a), 0, 0, 0.01, w, 0.18); g.add(bg, fg); g.position.y = y; g.visible = false; parent.add(g); return { g, fg, w }; }
  _setBar(b, f) { b.g.visible = f < 0.999 && f > 0; b.fg.scale.x = Math.max(0.001, f * b.w); b.fg.position.x = -(b.w - f * b.w) / 2; b.g.quaternion.copy(this.camera.quaternion); }

  _sync(dt) {
    const run = this.run; const t = this.clock;
    if (!run) { this._showcase(t); return; }
    const sq = run.squad;
    // bears
    run.bears.forEach((b, i) => {
      const v = this.bearVis[i]; const u = v.userData;
      v.visible = true; v.position.x = b.x; v.position.z = b.y;
      v.rotation.y = Math.PI / 2 - (b.hasTarget || !sq.moving ? b.aim : sq.face);
      const moving = sq.moving && b.alive;
      const hop = moving ? Math.abs(Math.sin(t * 11 + i)) * 0.16 : Math.sin(t * 2.5 + i) * 0.025;
      u.kick = Math.max(0, u.kick - dt * 5);
      if (b.alive) {
        u.body.scale.set(1, 1, 1); u.body.position.y = hop; u.body.rotation.z = moving ? Math.sin(t * 11 + i) * 0.08 : 0;
        u.legs[0].rotation.x = moving ? Math.sin(t * 11 + i) * 0.7 : 0; u.legs[1].rotation.x = moving ? -Math.sin(t * 11 + i) * 0.7 : 0;
        u.arms[0].rotation.x = moving ? -Math.sin(t * 11 + i) * 0.5 : 0;
        const role = b.def.role;
        if (role === 'melee') u.arms[1].rotation.x = -1.2 + (b.swing > 0 ? (1 - b.swing / 0.28) * 2.3 : 0); else u.arms[1].rotation.x = -1.35 + u.kick * 0.3;
        u.weapon.position.z = (role === 'melee' ? 0.05 : 0.1) - u.kick * 0.15;
        if (u.weapon.userData.orb) u.weapon.userData.orb.scale.setScalar(0.2 + Math.sin(t * 6) * 0.03 + u.kick * 0.1);
        u.mat.emissiveIntensity = 0.2 + (b.flash > 0 ? 0.9 : 0) + (b.inv > 0 && b.inv < 1.4 && Math.floor(t * 14) % 2 ? 0.4 : 0);
        u.pale.emissiveIntensity = u.mat.emissiveIntensity; u.ring.visible = false; u.weapon.visible = true;
        v.scale.setScalar(1.15);
      } else { // melted into a puddle until a mint wakes it up
        u.body.scale.set(1.25, 0.22, 1.25); u.body.position.y = 0; u.body.rotation.z = 0; u.weapon.visible = false; u.arms.forEach((a) => (a.rotation.x = 0));
        u.mat.emissiveIntensity = 0.05; u.ring.visible = true; u.ring.scale.setScalar(1.1 + Math.sin(t * 4) * 0.25); v.scale.setScalar(1.15);
      }
    });
    this.glow.position.set(sq.x, 5, sq.y);
    // enemies
    const live = new Set();
    for (const e of run.enemies) {
      if (e.hp <= 0) continue; live.add(e.id);
      let v = this.maps.enemies.get(e.id);
      if (!v) { const g = makeEnemy(e.kind); g.userData.bar = this._bar(g, KINDS[e.kind].r * 1.8, KINDS[e.kind].r * 2.1 + 0.4); this.scene.add(g); v = { g }; this.maps.enemies.set(e.id, v); this.addSparks(e.x, 0.6, e.y, KINDS[e.kind].color, 8, 2); }
      const g = v.g; const u = g.userData; const sp = Math.min(1, e.age / 0.4); const pop = sp < 1 ? 1 - Math.pow(1 - sp, 3) * Math.cos(sp * 9) * 0.35 - (1 - sp) * 0.65 : 1;
      g.position.set(e.x, 0, e.y); g.rotation.y = Math.PI / 2 - e.aim;
      const hop = Math.abs(Math.sin(e.age * (e.kind === 'sour' ? 14 : 8))) * 0.18;
      u.body.position.y = hop; u.body.rotation.z = Math.sin(e.age * 8) * 0.1;
      let sc = Math.max(0.05, pop) * (e.flash > 0 ? 1.12 : 1);
      if (e.fuse > 0) sc *= 1 + Math.sin(e.age * 40) * 0.08; if (e.wind > 0) sc *= 1 + (0.55 - e.wind) * 0.3;
      g.scale.setScalar(sc);
      u.mat.emissiveIntensity = e.flash > 0 ? 1 : e.fuse > 0 ? 0.4 + Math.sin(e.age * 40) * 0.4 : e.wind > 0 ? 0.6 : 0.14;
      this._setBar(u.bar, e.hp / e.maxHp);
    }
    for (const [id, v] of this.maps.enemies) if (!live.has(id)) { this.scene.remove(v.g); this.maps.enemies.delete(id); }
    this._syncBoss(run, dt);
    // projectiles
    const pl = new Set();
    for (const p of run.projectiles) {
      pl.add(p); let v = this.maps.projs.get(p);
      if (!v) { const col = p.kind === 'gum' ? 0x8ab8ff : p.kind === 'magic' ? 0xb0ff6a : 0xc070ff; const g = new THREE.Group(); g.add(mesh(G.sph, basic(col), 0, 0, 0, p.kind === 'magic' ? 0.34 : 0.24)); g.add(mesh(G.sph, basic(col, 0.3, { blending: THREE.AdditiveBlending }), 0, 0, 0, p.kind === 'magic' ? 0.7 : 0.45)); this.scene.add(g); v = { g }; this.maps.projs.set(p, v); }
      v.g.position.set(p.x, 1.0, p.y);
      if (p.kind === 'magic' && Math.random() < 0.5) this.addSparks(p.x, 1, p.y, 0xd0ff8a, 1, 0.5);
    }
    for (const [p, v] of this.maps.projs) if (!pl.has(p)) { this.scene.remove(v.g); this.maps.projs.delete(p); }
    // hazards
    const hz = new Set();
    for (const hh of run.hazards) { if (hh.done) continue; hz.add(hh); let v = this.maps.hazards.get(hh); if (!v) { v = this._makeHazard(hh); this.maps.hazards.set(hh, v); } this._updHazard(hh, v, t); }
    for (const [hh, v] of this.maps.hazards) if (!hz.has(hh)) { this.scene.remove(v.g); this.maps.hazards.delete(hh); }
    // jawbreakers
    const jl = new Set();
    for (const j of run.jaws) {
      jl.add(j); let v = this.maps.jaws.get(j);
      if (!v) { const g = new THREE.Group(); const ball = makeJaw(); g.add(ball); const warn = new THREE.Mesh(G.ring, basic(0xffffff, 0.7, { side: THREE.DoubleSide })); warn.rotation.x = -Math.PI / 2; warn.position.y = 0.07; warn.scale.setScalar(j.r); g.add(warn); const fill = new THREE.Mesh(G.disc, basic(0xff8ad0, 0.3)); fill.rotation.x = -Math.PI / 2; fill.position.y = 0.06; g.add(fill); g.userData = { ball, fill }; this.scene.add(g); v = { g }; this.maps.jaws.set(j, v); }
      const f = clamp(j.t / j.delay, 0, 1); v.g.position.set(j.x, 0, j.y); v.g.userData.ball.position.y = 2.2 + (1 - f * f) * 24; v.g.userData.ball.rotation.x = t * 3; v.g.userData.fill.scale.setScalar(j.r * f);
    }
    for (const [j, v] of this.maps.jaws) if (!jl.has(j)) { this.scene.remove(v.g); this.maps.jaws.delete(j); }
    // pickups
    const pk = new Set();
    for (const p of run.pickups) {
      pk.add(p); let v = this.maps.picks.get(p);
      if (!v) { const g = p.type === 'mint' ? makeMint() : makeCandy(p.hue); this.scene.add(g); v = { g }; this.maps.picks.set(p, v); }
      const bob = Math.sin(t * 5 + p.x) * 0.12; v.g.position.set(p.x, (p.type === 'mint' ? 0.9 : 0.4) + bob + Math.max(0, 0.6 - p.t * 2) * 1.2, p.y);
      if (p.type === 'mint') { v.g.userData.disc.rotation.z = t * 2; v.g.userData.ground.scale.setScalar(0.9 + Math.sin(t * 5) * 0.15); v.g.userData.ground.position.y = -0.8 - bob; v.g.scale.setScalar(p.life < 5 && Math.floor(t * 8) % 2 ? 0.5 : 1); } else v.g.rotation.y = t * 4 + p.x;
    }
    for (const [p, v] of this.maps.picks) if (!pk.has(p)) { this.scene.remove(v.g); this.maps.picks.delete(p); }
    // decals fade
    this.decals = this.decals.filter((d) => { d.age += dt; const f = d.age / d.life; if (f >= 1) { this.scene.remove(d.m); return false; } d.m.material.opacity = d.o * (1 - f * f); if (d.grow) d.m.scale.setScalar(d.r * (0.6 + f * 0.6)); return true; });
  }

  _makeHazard(hh) {
    const g = new THREE.Group();
    if (hh.kind === 'path') {
      const tex = stripeTex('#ff2a5a', '#ffd0d8', 8); tex.repeat.set(1, Math.max(2, Math.round(hh.len / 3))); tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(hh.width, hh.len), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.45, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      const pivot = new THREE.Group(); pivot.position.set(hh.x + hh.dx * hh.len / 2, 0.07, hh.y + hh.dy * hh.len / 2); pivot.rotation.y = Math.atan2(-hh.dx, -hh.dy); pivot.add(m);
      g.add(pivot); g.userData = { path: m, tex };
    } else {
      const col = hh.kind === 'blast' ? 0xff8a2a : 0xff3a7a;
      const base = new THREE.Mesh(G.disc, basic(col, 0.28)); base.rotation.x = -Math.PI / 2; base.position.y = 0.06; base.scale.setScalar(hh.r);
      const fill = new THREE.Mesh(G.disc, basic(col, 0.5)); fill.rotation.x = -Math.PI / 2; fill.position.y = 0.07; fill.scale.setScalar(0.01);
      const edge = new THREE.Mesh(G.ring, basic(0xffffff, 0.9, { side: THREE.DoubleSide })); edge.rotation.x = -Math.PI / 2; edge.position.y = 0.08; edge.scale.setScalar(hh.r);
      g.add(base, fill, edge);
      let drop = null;
      if (hh.kind === 'circle') { drop = mesh(G.sph, clay(0xff6ab8, { rough: 0.3, em: 0.5 }), 0, 20, 0, 0.7, 0.95, 0.7); g.add(drop); }
      g.userData = { fill, edge, drop };
    }
    g.position.set(hh.kind === 'path' ? 0 : hh.x, 0, hh.kind === 'path' ? 0 : hh.y);
    this.scene.add(g);
    return { g };
  }

  _updHazard(hh, v, t) {
    const f = clamp(hh.t / hh.warn, 0, 1); const u = v.g.userData;
    if (hh.kind === 'path') { u.path.material.opacity = 0.3 + f * 0.35 + (Math.sin(t * 18) > 0 ? 0.08 : 0); u.tex.offset.y = -t * 1.5; return; }
    u.fill.scale.setScalar(Math.max(0.01, hh.r * f)); u.edge.material.opacity = 0.5 + (Math.sin(t * (10 + f * 14)) > 0 ? 0.4 : 0);
    if (u.drop) { u.drop.position.y = 0.6 + (1 - f * f * f) * 20; u.drop.scale.set(0.7, 0.95 + (1 - f) * 0.3, 0.7); }
  }

  _syncBoss(run, dt) {
    const b = run.boss; const bv = this.bossVis; const t = this.clock;
    if (!b) { bv.visible = false; return; }
    const u = bv.userData;
    if (b.state === 'dead') { const k = clamp((t - (this.bossDeadAt ?? t)) / 0.9, 0, 1); bv.visible = k < 1; bv.scale.setScalar(Math.max(0.01, 1 - k)); bv.rotation.y += dt * 10; bv.position.y = 0; return; }
    bv.visible = true; bv.scale.setScalar(1);
    if (!this.bossBar) this.bossBar = this._bar(bv, 4, 4.4);
    let y = 0; let tilt = -1.0; let yaw = 0; let spin = 0;
    const ph = b.phase;
    if (b.state === 'intro') { const f = clamp(b.t / 2.6, 0, 1); y = (1 - f * f) * 26; u.shadow.scale.setScalar(0.4 + f * 2.2); } else u.shadow.scale.setScalar(2.4);
    
    if (b.state === 'windCharge') { tilt = -1.0 * (1 - clamp(b.t / 0.5, 0, 1)); yaw = Math.PI / 2 - b.dir + Math.PI / 2; bv.position.x = b.x + Math.sin(t * 60) * 0.08; }
    if (b.state === 'charge') { tilt = 0; yaw = Math.PI / 2 - b.dir + Math.PI / 2; spin = 1; if (Math.random() < 0.6) this.addBits(b.x, 0.2, b.y, 0xd89a5a, 1, 2, 1.5); }
    if (b.state === 'rain') { y = Math.abs(Math.sin(clamp(b.t / 0.55, 0, 1) * Math.PI)) * 1.8; }
    if (b.state === 'summon') { tilt = -1.0 + Math.sin(b.t * 20) * 0.1; }
    if (b.state === 'idle') { y = Math.abs(Math.sin(t * 5)) * 0.35; yaw = Math.sin(t * 2) * 0.25; }
    u.lean.rotation.x += (tilt - u.lean.rotation.x) * Math.min(1, dt * 8);
    bv.rotation.y = yaw;
    if (spin) u.ring.rotation.z -= dt * 14; else u.ring.rotation.z *= 0.85;
    bv.position.set(b.state === 'windCharge' ? b.x + Math.sin(t * 60) * 0.08 : b.x, y + (u.lean.rotation.x > -0.5 ? 0 : 0), b.y);
    u.lean.position.y = 1.0 + (1 - Math.abs(u.lean.rotation.x)) * 0.9; // stands taller when upright
    const em = b.flash > 0 ? 0.9 : ph === 3 ? 0.28 + Math.sin(t * 12) * 0.12 : 0.1;
    u.dough.emissiveIntensity = em; u.glaze.emissiveIntensity = em + 0.12;
    u.stars.visible = b.state === 'stun'; if (u.stars.visible) u.stars.rotation.y = t * 4;
    this._setBar(this.bossBar, b.hp / b.maxHp); this.bossBar.g.visible = false;
  }

  _showcase(t) {
    this.bossVis.visible = false;
    const xs = [-2.9, 0, 2.9]; const zs = [0.6, -0.4, 0.6];
    this.bearVis.forEach((v, i) => {
      v.visible = true; v.position.set(xs[i], 0, zs[i]); v.scale.setScalar(1.55); v.rotation.y = Math.sin(t * 0.8 + i) * 0.25;
      const u = v.userData; u.body.scale.set(1, 1, 1); u.weapon.visible = true; u.ring.visible = false;
      u.body.position.y = Math.abs(Math.sin(t * 2.4 + i * 1.3)) * 0.18; u.arms[1].rotation.x = -1.2 + Math.sin(t * 3 + i) * 0.35; u.arms[0].rotation.x = Math.sin(t * 3 + i + 1) * 0.3;
      u.mat.emissiveIntensity = 0.2; u.pale.emissiveIntensity = 0.2;
    });
    this.glow.position.set(0, 5, 3);
  }

  _camera(dt) {
    const c = this.camera; const run = this.run;
    if (!run) { // menu: a slow orbit around the three bears
      const a = Math.sin(this.clock * 0.25) * 0.35; const portrait = c.aspect < 1;
      const d = portrait ? 18 : 11.5; c.position.set(Math.sin(a) * d, portrait ? 7.5 : 4.2, Math.cos(a) * d + 1);
      c.lookAt(0, portrait ? 0.2 : 1.1, 0.4); c.fov = 50; c.updateProjectionMatrix(); return;
    }
    const fit = this._camFit(); const sq = run.squad;
    if (c.fov !== 48) { c.fov = 48; c.updateProjectionMatrix(); }
    const lim = (v, half) => clamp(v, -Math.max(0, ARENA.hx + 1.4 - half), Math.max(0, ARENA.hx + 1.4 - half));
    const bs = run.boss && run.boss.state !== 'dead' ? run.boss : null; const fx = bs ? sq.x + (bs.x - sq.x) * 0.4 : sq.x; const fy = bs ? sq.y + (bs.y - sq.y) * 0.4 : sq.y;
    let tx = lim(fx, fit.H); let tz = fit.portrait ? clamp(fy * 0.5, -5, 5) : lim(fy, fit.Vd);
    if (!this.camInit) { this.camTarget.set(tx, 0, tz); this.camInit = true; }
    this.camTarget.x += (tx - this.camTarget.x) * Math.min(1, dt * 5); this.camTarget.z += (tz - this.camTarget.z) * Math.min(1, dt * 5);
    this.shake = Math.max(0, this.shake - dt * 2.2);
    const sh = this.shake * 0.45;
    const d = fit.d * 0.86;
    c.position.set(this.camTarget.x + (Math.random() - 0.5) * sh, Math.sin(fit.e) * d, this.camTarget.z + Math.cos(fit.e) * d + (Math.random() - 0.5) * sh);
    c.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() {
    this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey);
    this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove();
  }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.GummySquad = api;
export default api;
