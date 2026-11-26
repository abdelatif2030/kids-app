// «ركضة السحاب» — Cloud Dash. Entry: window.CloudDash.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cartoon kid runs by himself along a three-lane track of floating pastel tiles high in the clouds (like the owner's video, drawn
// from scratch). Swipe left / right to change lane, up to jump, down to slide; jump the candy barriers, spikes and gaps (crumbling
// tiles open as you come close), dodge the slime, slide under the bars, ride the wind gusts, run along the side walls and grab a
// shield, a coin magnet and slow motion. Reach the finish gate with your hearts. 3D (three.js), all models, textures and sound made
// in code. Ten levels. No network, no links.
import * as THREE from 'three';
import { Run, LEVELS, LANE_W, levelSpec, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { applyBackdrop } from '../../cozy_kit/art.js';
import { setLang, setGirl, getLang, isGirl, t, num } from './i18n.js';
import { polishRenderer } from './polish.js';
import { FX, outline } from './fx.js';

const CSS = `
.cd-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#4a2a6a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#b8a8f0}
.cd-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.cd-layer{position:absolute;inset:0;pointer-events:none}
.cd-layer button,.cd-layer .cd-card{pointer-events:auto}
.cd-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*2);direction:ltr;align-items:center}
.cd-round{width:calc(var(--u)*10);height:calc(var(--u)*10);flex:none;border-radius:50%;font-size:calc(var(--u)*4.6);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,#5ad0f8,#2a90e0);border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(60,30,110,.35);pointer-events:auto}
.cd-round:active{transform:scale(.94)}
.cd-prog{flex:1;height:calc(var(--u)*3.2);border-radius:99px;background:rgba(60,30,110,.55);border:calc(var(--u)*.4) solid #fff;position:relative;overflow:visible}
.cd-prog b{display:block;height:100%;border-radius:99px;background:linear-gradient(180deg,#ff7aa8,#e83a78);width:0}
.cd-prog i{position:absolute;right:calc(var(--u)*-2);top:50%;transform:translateY(-50%);font-style:normal;font-size:calc(var(--u)*6)}
.cd-lvl{position:absolute;left:50%;top:calc(max(calc(var(--u)*2.5),env(safe-area-inset-top)) + var(--u)*10.5);transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*2.6);color:#fff;text-shadow:0 1px 3px rgba(60,30,110,.8);letter-spacing:.05em}
.cd-row2{position:absolute;top:calc(max(calc(var(--u)*2.5),env(safe-area-inset-top)) + var(--u)*13);left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;justify-content:space-between;direction:ltr;align-items:center}
.cd-hearts{font-size:calc(var(--u)*5.4);letter-spacing:calc(var(--u)*.4);filter:drop-shadow(0 2px 2px rgba(60,30,110,.5))}
.cd-hearts .off{filter:grayscale(1);opacity:.35}
.cd-coins{background:rgba(60,30,110,.6);border:calc(var(--u)*.4) solid #fff;border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3);color:#fff;font-weight:900;font-size:calc(var(--u)*4.6);display:flex;align-items:center;gap:calc(var(--u)*1.4)}
.cd-coin{display:inline-block;width:calc(var(--u)*4.6);height:calc(var(--u)*4.6);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);box-shadow:inset 0 0 0 calc(var(--u)*.4) #c98a14}
.cd-say{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%) scale(.9);font-weight:900;font-size:calc(var(--u)*7);color:#fff;-webkit-text-stroke:calc(var(--u)*.6) #7a3aa8;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #5a2a88;white-space:nowrap;opacity:0;transition:opacity .25s,transform .25s;pointer-events:none;text-align:center;max-width:96%}
.cd-say.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.cd-say.gold{color:#ffd23a;-webkit-text-stroke-color:#a85a0a}
.cd-hand{position:absolute;left:50%;top:62%;font-size:calc(var(--u)*11);opacity:0;pointer-events:none;transform:translate(-50%,0)}
.cd-hand.show{opacity:1;animation:cdhand 1.1s ease-in-out infinite}
@keyframes cdhand{0%{transform:translate(-50%,0)}50%{transform:translate(calc(-50% + var(--hx,0px)),var(--hy,0px))}100%{transform:translate(-50%,0)}}
.cd-flash{position:absolute;inset:0;background:radial-gradient(circle,rgba(255,60,90,0) 40%,rgba(255,60,90,.55));opacity:0;pointer-events:none;transition:opacity .35s}
.cd-slowv{position:absolute;inset:0;background:radial-gradient(circle,rgba(120,160,255,0) 45%,rgba(120,160,255,.4));opacity:0;pointer-events:none;transition:opacity .4s}
.cd-pw{position:absolute;left:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.4);font-size:calc(var(--u)*6)}
.cd-pw span{background:rgba(60,30,110,.6);border:calc(var(--u)*.4) solid #fff;border-radius:99px;padding:0 calc(var(--u)*2);color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);display:flex;align-items:center;gap:calc(var(--u)*1)}
.cd-dim{position:absolute;inset:0;background:rgba(70,40,120,.5);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.cd-card{background:linear-gradient(180deg,#9a6af0,#6a3ad0);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*76);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(40,20,90,.5)}
.cd-logo{font-size:calc(var(--u)*11);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #e83a78;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #a81a58;text-align:center;line-height:1.1}
.cd-title{font-size:calc(var(--u)*7);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #a85a0a;paint-order:stroke fill;text-align:center}
.cd-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center}
.cd-stat{display:flex;gap:calc(var(--u)*2);width:100%}
.cd-stat div{flex:1;background:rgba(0,0,0,.28);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2);text-align:center;font-weight:900;font-size:calc(var(--u)*5)}
.cd-stat small{display:block;font-size:calc(var(--u)*2.6);opacity:.85}
.cd-stars{font-size:calc(var(--u)*11)}.cd-stars .off{filter:grayscale(1);opacity:.3}
.cd-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.2);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.8) calc(var(--u)*6);min-height:calc(var(--u)*12);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.cd-btn.alt{background:linear-gradient(180deg,#ffb84a,#f08a1a);box-shadow:0 calc(var(--u)*.9) 0 #a85a0a}
.cd-btn.dark{background:linear-gradient(180deg,#8a6ad8,#5a3aa8);box-shadow:0 calc(var(--u)*.9) 0 #2a1a6a;font-size:calc(var(--u)*4.2)}
.cd-btn:active{transform:translateY(calc(var(--u)*.5))}
.cd-btn:focus-visible,.cd-round:focus-visible,.cd-lv:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.cd-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:calc(var(--u)*1.6);width:100%}
.cd-lv{aspect-ratio:1;border-radius:calc(var(--u)*2.6);border:none;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;background:linear-gradient(180deg,#ff8ab8,#e83a78);box-shadow:0 calc(var(--u)*.7) 0 #a81a58;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}
.cd-lv small{font-size:calc(var(--u)*2.4)}
.cd-lv.lock{background:linear-gradient(180deg,#c8c8d8,#9a9aaa);box-shadow:0 calc(var(--u)*.7) 0 #6a6a7a}
@media (orientation:landscape){.cd-card{width:calc(var(--u)*110);max-width:94vw}.cd-logo{font-size:calc(var(--u)*9)}.cd-grid{grid-template-columns:repeat(5,1fr)}.cd-lv{aspect-ratio:auto;min-height:calc(var(--u)*9)}}
.cd-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;

function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

const PASTEL = ['#bff0dc', '#d9c8f6', '#fcd8b4', '#bfe0fa', '#f9c8de', '#fbeeb4'];
const ROW = 4;
const ROWS_AHEAD = 40;
const ROWS_BEHIND = 4;
const WALL_X = LANE_W * 1.5 + 0.55;
// the camera looks along +z, so screen-RIGHT is world -x: a lane to the right (lane +1) has a negative x (swipe right must go right)
const laneX = (l) => -(Math.abs(l) === 2 ? Math.sign(l) * (WALL_X - 0.2) : l * LANE_W);

function stripeTex(c1, c2, w = 128, h2 = 64, n = 6) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h2;
  const g = c.getContext('2d');
  for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? c2 : c1; g.fillRect((i * w) / n, 0, w / n + 1, h2); }
  const tx = new THREE.CanvasTexture(c);
  tx.colorSpace = THREE.SRGBColorSpace;
  return tx;
}
function checkerTex() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  for (let y = 0; y < 4; y++) for (let x = 0; x < 16; x++) { g.fillStyle = (x + y) % 2 ? '#ffffff' : '#2a1a4a'; g.fillRect(x * 16, y * 16, 16, 16); }
  const tx = new THREE.CanvasTexture(c);
  tx.colorSpace = THREE.SRGBColorSpace;
  return tx;
}
function skyTex() {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#8a98f0'); gr.addColorStop(0.5, '#e8b0ec'); gr.addColorStop(1, '#ffe0e8');
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const tx = new THREE.CanvasTexture(c);
  tx.colorSpace = THREE.SRGBColorSpace;
  return tx;
}
function puffTex() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.6, 'rgba(255,235,250,0.55)'); gr.addColorStop(1, 'rgba(255,230,250,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

/** The collectables are SPRITES (flat pictures that always face the camera), drawn once in code: a shiny coin with a star, a shield bubble, a candy-cane magnet and an hourglass. */
function iconTex(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.translate(128, 128);
  const glow = (col) => { const gr = g.createRadialGradient(0, 0, 40, 0, 0, 124); gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 124, 0, Math.PI * 2); g.fill(); };
  if (kind === 'coin') {
    glow('rgba(255,220,90,0.55)');
    const gr = g.createRadialGradient(-30, -30, 8, 0, 0, 86); gr.addColorStop(0, '#fff4a8'); gr.addColorStop(0.55, '#ffc82a'); gr.addColorStop(1, '#e8960a');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 84, 0, Math.PI * 2); g.fill();
    g.lineWidth = 10; g.strokeStyle = '#c87a08'; g.stroke();
    g.lineWidth = 6; g.strokeStyle = 'rgba(255,255,255,0.55)'; g.beginPath(); g.arc(0, 0, 66, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#fff2a0'; g.strokeStyle = '#c87a08'; g.lineWidth = 6; g.beginPath();
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const r = i % 2 ? 22 : 46; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    g.closePath(); g.fill(); g.stroke();
  } else if (kind === 'shield') {
    glow('rgba(90,208,255,0.6)');
    const gr = g.createRadialGradient(-20, -30, 10, 0, 0, 90); gr.addColorStop(0, '#d8f4ff'); gr.addColorStop(1, '#3a9aff');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 88, 0, Math.PI * 2); g.fill(); g.lineWidth = 8; g.strokeStyle = '#fff'; g.stroke();
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(0, -48); g.lineTo(40, -30); g.lineTo(34, 18); g.quadraticCurveTo(20, 44, 0, 56); g.quadraticCurveTo(-20, 44, -34, 18); g.lineTo(-40, -30); g.closePath(); g.fill();
    g.fillStyle = '#3a9aff'; g.beginPath(); g.moveTo(0, -34); g.lineTo(26, -22); g.lineTo(22, 12); g.quadraticCurveTo(12, 30, 0, 38); g.quadraticCurveTo(-12, 30, -22, 12); g.lineTo(-26, -22); g.closePath(); g.fill();
  } else if (kind === 'magnet') {
    glow('rgba(255,120,160,0.5)');
    g.lineCap = 'butt'; g.lineWidth = 46; g.strokeStyle = '#e83a4a'; g.beginPath(); g.arc(0, 8, 54, Math.PI, 0); g.lineTo(54, 60); g.moveTo(-54, 8); g.lineTo(-54, 60); g.stroke();
    g.lineWidth = 46; g.strokeStyle = '#fff'; g.setLineDash([22, 22]); g.beginPath(); g.arc(0, 8, 54, Math.PI, 0); g.lineTo(54, 60); g.moveTo(-54, 8); g.lineTo(-54, 60); g.stroke(); g.setLineDash([]);
    g.fillStyle = '#d8dde8'; g.fillRect(31, 44, 46, 26); g.fillRect(-77, 44, 46, 26);
    g.strokeStyle = '#7a1a3a'; g.lineWidth = 6; g.beginPath(); g.arc(0, 8, 77, Math.PI, 0); g.stroke(); g.beginPath(); g.arc(0, 8, 31, Math.PI, 0); g.stroke();
  } else { // slow motion: an hourglass
    glow('rgba(176,138,255,0.55)');
    g.fillStyle = '#d8c0ff'; g.strokeStyle = '#6a3ac8'; g.lineWidth = 8;
    g.beginPath(); g.moveTo(-44, -66); g.lineTo(44, -66); g.lineTo(6, 0); g.lineTo(44, 66); g.lineTo(-44, 66); g.lineTo(-6, 0); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#ffd23a'; g.beginPath(); g.moveTo(-30, -52); g.lineTo(30, -52); g.lineTo(4, -8); g.lineTo(-4, -8); g.closePath(); g.fill(); g.beginPath(); g.moveTo(-34, 60); g.lineTo(34, 60); g.lineTo(14, 30); g.lineTo(-14, 30); g.closePath(); g.fill();
    g.fillStyle = '#8a5ae8'; g.fillRect(-52, -78, 104, 14); g.fillRect(-52, 64, 104, 14);
  }
  const tx = new THREE.CanvasTexture(c);
  tx.colorSpace = THREE.SRGBColorSpace;
  return tx;
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.easy = this.age <= 4;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('cd-style')) document.head.append(h('style', { id: 'cd-style' }, CSS));
    this.root = h('div', { class: 'cd-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'cd-layer' });
    this.mode = 'menu';
    this.run = null;
    this._initGL();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.t0 = performance.now();
    this.last = this.t0;
    this.acc = 0;
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  // ---- the 3D world -------------------------------------------------------------------------------------------------

  _initGL() {
    const r = this.renderer = polishRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' }), { preset: 'fresh', tune: { bloom: [0.12, 0.4, 0.97], vig: 0.28 } });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.root.append(r.domElement);
    const sc = this.scene = new THREE.Scene();
    sc.background = skyTex();
    sc.fog = new THREE.Fog(0xf6c8ea, 55, 175);
    applyBackdrop(THREE, sc, this.base, 'bg_sky');
    this.cam = new THREE.PerspectiveCamera(62, 1, 0.1, 260);
    sc.add(new THREE.HemisphereLight(0xfff4ff, 0xc8a8f0, 1.25));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(-6, 14, 8);
    sc.add(sun);
    // shared geometry and materials
    this.geo = {
      tile: new THREE.BoxGeometry(LANE_W - 0.08, 0.5, ROW - 0.08),
      coin: new THREE.CylinderGeometry(0.34, 0.34, 0.09, 20),
      cone: new THREE.ConeGeometry(0.17, 0.6, 8),
      sphere: new THREE.SphereGeometry(1, 20, 14),
      box: new THREE.BoxGeometry(1, 1, 1),
      cyl: new THREE.CylinderGeometry(1, 1, 1, 14),
      torus: new THREE.TorusGeometry(0.34, 0.09, 8, 20, Math.PI * 1.1),
    };
    const M = (c, o = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
    this.mat = {
      tiles: PASTEL.map((c) => M(c)),
      coin: new THREE.MeshLambertMaterial({ color: 0xffd23a, emissive: 0x8a5a00 }),
      stripe: new THREE.MeshLambertMaterial({ map: stripeTex('#ffffff', '#e83a4a') }),
      slime: new THREE.MeshLambertMaterial({ color: 0x5ee05a, emissive: 0x1a6a1a }),
      white: M(0xffffff), black: M(0x2a1a3a),
      spike: M(0xff8ab8), pink: M(0xff5a98), post: new THREE.MeshLambertMaterial({ color: 0xff5a98 }),
      wall: M(0xe8d0f8), shield: new THREE.MeshLambertMaterial({ color: 0x5ad0ff, transparent: true, opacity: 0.45 }),
      gold: new THREE.MeshLambertMaterial({ color: 0xffd23a, emissive: 0x6a4a00 }),
      red: M(0xe83a4a), blue: M(0x4a8aff), skin: M(0xffd0a8), hair: M(0x6a3a22), orange: M(0xff8a2a), cloth: M(0x3a78e8), shoe: M(0xfff0d8),
      wind: new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false }),
    };
    this.spriteMat = {};
    for (const k of ['coin', 'shield', 'magnet', 'slow']) this.spriteMat[k] = new THREE.SpriteMaterial({ map: iconTex(k), transparent: true, depthWrite: false, fog: false });
    this.pops = []; // collected sprites flying up and fading
    // the finished track in rows
    this.rows = [];
    this.trackGroup = new THREE.Group();
    sc.add(this.trackGroup);
    for (let i = 0; i < ROWS_AHEAD + ROWS_BEHIND; i++) {
      const row = { meshes: [], idx: -999 };
      for (let l = -1; l <= 1; l++) { const m = new THREE.Mesh(this.geo.tile, this.mat.tiles[0]); m.position.set(l * LANE_W, -0.25, 0); this.trackGroup.add(m); row.meshes.push(m); }
      this.rows.push(row);
    }
    // soft clouds around and below
    const ptx = puffTex();
    this.puffs = [];
    for (let i = 0; i < 46; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ptx, transparent: true, depthWrite: false, fog: false, opacity: 0.9 }));
      const s = 14 + Math.random() * 26;
      sp.scale.set(s, s * 0.6, 1);
      sp.userData = { x: (Math.random() - 0.5) * 120, y: -7 - Math.random() * 16, k: Math.random() * 200 };
      sc.add(sp);
      this.puffs.push(sp);
    }
    // floating lollipops and balloons for the scenery
    this.deco = [];
    const cols = [0xffd84a, 0xff6aa8, 0x6ad0ff, 0xb08aff];
    for (let i = 0; i < 18; i++) {
      const g = new THREE.Group();
      const c = cols[i % 4];
      const ball = new THREE.Mesh(this.geo.sphere, new THREE.MeshLambertMaterial({ color: c }));
      ball.scale.setScalar(1.3 + Math.random());
      g.add(ball);
      const stick = new THREE.Mesh(this.geo.cyl, this.mat.white);
      stick.scale.set(0.07, 6, 0.07); stick.position.y = -4.5;
      g.add(stick);
      g.userData = { side: i % 2 ? 1 : -1, off: 9 + Math.random() * 18, y: 1 + Math.random() * 9, k: Math.random() * 180 };
      sc.add(g);
      this.deco.push(g);
    }
    this.objs = new Map(); // item index -> THREE.Object3D
    this.itemsGroup = new THREE.Group();
    sc.add(this.itemsGroup);
    this.kid = this._makeKid();
    outline(this.kid.root, 0x2a1a3a, 0.055);
    sc.add(this.kid.root);
    this.fx = new FX(sc);
    // sun glow and a giant rainbow far ahead (follow the runner)
    this.sky = new THREE.Group();
    const rc = [0xff4d6d, 0xff9a3c, 0xffe04a, 0x5ee07a, 0x4ab4ff, 0x7a5cff, 0xc76bff];
    rc.forEach((c, i) => { const t = new THREE.Mesh(new THREE.TorusGeometry(70 - i * 2.6, 1.4, 6, 64, Math.PI), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.85, fog: false, depthWrite: false })); this.sky.add(t); });
    this.sky.position.set(-20, -14, 0); this.sky.rotation.y = 0.15; sc.add(this.sky);
    const sunS = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex(), color: 0xfff2b0, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }));
    sunS.scale.set(60, 60, 1); sunS.material.opacity = 0.45; this.sunS = sunS; sc.add(sunS);
    // cape: flutters behind the kid
    const cape = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.95, 1, 4), new THREE.MeshLambertMaterial({ color: 0xff3a5c, side: THREE.DoubleSide }));
    cape.position.set(0, 1.25, -0.2); cape.geometry.translate(0, -0.45, 0); this.kid.body.add(cape); this.kid.cape = cape;
    outline(cape, 0x2a1a3a, 0.0);
    this.finish = this._makeFinish();
    sc.add(this.finish);
    this.shieldMesh = new THREE.Mesh(this.geo.sphere, this.mat.shield);
    this.shieldMesh.scale.setScalar(1.15);
    this.shieldMesh.visible = false;
    sc.add(this.shieldMesh);
  }

  _makeKid() {
    const m = this.mat;
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);
    const torso = new THREE.Mesh(this.geo.cyl, m.cloth); torso.scale.set(0.38, 0.55, 0.3); torso.position.y = 0.95; body.add(torso);
    const head = new THREE.Mesh(this.geo.sphere, m.skin); head.scale.setScalar(0.34); head.position.y = 1.55; body.add(head);
    const hair = new THREE.Mesh(this.geo.sphere, m.hair); hair.scale.set(0.355, 0.3, 0.36); hair.position.set(0, 1.62, -0.03); body.add(hair);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.05, 8, 20), m.orange); band.rotation.x = Math.PI / 2; band.position.y = 1.62; band.scale.set(1.04, 1.04, 1); body.add(band);
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(this.geo.sphere, m.black); e.scale.setScalar(0.05); e.position.set(sx * 0.12, 1.56, 0.31); body.add(e); }
    const pony = new THREE.Mesh(this.geo.sphere, m.hair); pony.scale.set(0.13, 0.22, 0.13); pony.position.set(0, 1.55, -0.38); pony.visible = isGirl(); body.add(pony);
    const limb = (x, y, len, mat) => { const g = new THREE.Group(); g.position.set(x, y, 0); const c = new THREE.Mesh(this.geo.cyl, mat); c.scale.set(0.11, len, 0.11); c.position.y = -len / 2; g.add(c); body.add(g); return g; };
    const armL = limb(-0.3, 1.18, 0.5, m.cloth), armR = limb(0.3, 1.18, 0.5, m.cloth);
    const legL = limb(-0.13, 0.7, 0.7, m.blue), legR = limb(0.13, 0.7, 0.7, m.blue);
    for (const lg of [legL, legR]) { const f = new THREE.Mesh(this.geo.sphere, m.shoe); f.scale.set(0.15, 0.1, 0.22); f.position.set(0, -0.7, 0.06); lg.add(f); }
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.45, 16), new THREE.MeshBasicMaterial({ color: 0x4a2a7a, transparent: true, opacity: 0.25, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
    root.add(shadow);
    return { root, body, armL, armR, legL, legR, shadow, head };
  }

  _makeFinish() {
    const g = new THREE.Group();
    const disc = new THREE.Mesh(this.geo.cyl, new THREE.MeshLambertMaterial({ color: 0xffc8e0 })); disc.scale.set(8, 0.3, 8); disc.position.set(0, -0.2, 3); g.add(disc);
    for (const sx of [-1, 1]) { const p = new THREE.Mesh(this.geo.cyl, this.mat.post); p.scale.set(0.2, 4.4, 0.2); p.position.set(sx * 3.6, 2.2, 0); g.add(p); const b = new THREE.Mesh(this.geo.sphere, new THREE.MeshLambertMaterial({ color: sx > 0 ? 0x6ad0ff : 0xffd84a })); b.scale.setScalar(0.5); b.position.set(sx * 3.6, 4.6, 0); g.add(b); }
    const banner = new THREE.Mesh(this.geo.box, new THREE.MeshLambertMaterial({ map: checkerTex() })); banner.scale.set(7.2, 0.9, 0.12); banner.position.set(0, 4.1, 0); g.add(banner);
    g.visible = false;
    return g;
  }

  /** The 3D thing for a level item (created when it comes near). */
  _makeItem(it) {
    const m = this.mat;
    const g = new THREE.Group();
    const x = laneX(it.lane);
    g.position.set(x, 0, it.z);
    if (it.type === 'coin') {
      const sp = new THREE.Sprite(this.spriteMat.coin);
      sp.scale.set(0.95, 0.95, 1);
      g.add(sp); g.userData.sprite = sp;
      g.position.y = (it.y ?? 0.8) + (Math.abs(it.lane) === 2 ? 0.7 : 0);
    } else if (it.type === 'barrier') {
      const b = new THREE.Mesh(this.geo.box, m.stripe); b.scale.set(1.85, 0.8, 0.55); b.position.y = 0.4; g.add(b);
      for (const sx of [-1, 1]) { const f = new THREE.Mesh(this.geo.box, m.white); f.scale.set(0.12, 0.8, 0.5); f.position.set(sx * 0.8, 0.4, 0); g.add(f); }
    } else if (it.type === 'slime') {
      const b = new THREE.Mesh(this.geo.sphere, m.slime); b.scale.set(0.62, 0.8, 0.55); b.position.y = 0.7; g.add(b); g.userData.blob = b;
      for (const sx of [-1, 1]) { const e = new THREE.Mesh(this.geo.sphere, m.white); e.scale.setScalar(0.16); e.position.set(sx * 0.2, 0.95, -0.42); g.add(e); const p = new THREE.Mesh(this.geo.sphere, m.black); p.scale.setScalar(0.08); p.position.set(sx * 0.2, 0.95, -0.55); g.add(p); }
    } else if (it.type === 'spike') {
      for (let k = -2; k <= 2; k++) { const c = new THREE.Mesh(this.geo.cone, k % 2 ? m.spike : m.white); c.position.set(k * 0.34, 0.3, (k % 2) * 0.2); g.add(c); }
    } else if (it.type === 'bar') {
      for (const sx of [-1, 1]) { const p = new THREE.Mesh(this.geo.cyl, m.post); p.scale.set(0.1, 1.5, 0.1); p.position.set(sx * 0.95, 0.75, 0); g.add(p); }
      const b = new THREE.Mesh(this.geo.box, m.stripe); b.scale.set(2.0, 0.28, 0.28); b.position.y = 1.35; g.add(b);
    } else if (it.type === 'crumble') {
      const tl = new THREE.Mesh(new THREE.BoxGeometry(LANE_W - 0.1, 0.5, it.len), new THREE.MeshLambertMaterial({ color: 0xe8c8b0 })); tl.position.set(0, -0.22, it.len / 2); g.add(tl); g.userData.tile = tl;
      const cr = new THREE.Mesh(this.geo.box, m.black); cr.scale.set(0.05, 0.02, it.len * 0.8); cr.position.set(0.3, 0.04, it.len / 2); g.add(cr);
    } else if (it.type === 'wind') {
      for (let k = 0; k < 3; k++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.55 + k * 0.3, 0.05, 6, 24), m.wind); r.rotation.x = Math.PI / 2; r.position.set(0, 0.5 + k * 0.45, it.len / 2); g.add(r); }
      const ar = new THREE.Mesh(this.geo.cone, m.wind); ar.scale.set(1.4, 1, 1.4); ar.rotation.z = it.dir * Math.PI / 2; ar.position.set(0, 0.15, it.len / 2); g.add(ar); g.userData.wind = g;
    } else if (it.type === 'shield') {
      const sp = new THREE.Sprite(this.spriteMat.shield); sp.scale.set(1.5, 1.5, 1); sp.position.y = 1.2; g.add(sp); g.userData.sprite = sp;
    } else if (it.type === 'magnet') {
      const sp = new THREE.Sprite(this.spriteMat.magnet); sp.scale.set(1.5, 1.5, 1); sp.position.y = 1.2; g.add(sp); g.userData.sprite = sp;
    } else if (it.type === 'slow') {
      const sp = new THREE.Sprite(this.spriteMat.slow); sp.scale.set(1.5, 1.5, 1); sp.position.y = 1.2; g.add(sp); g.userData.sprite = sp;
    }
    if (it.type !== 'coin' && it.type !== 'crumble' && it.type !== 'wind') outline(g, 0x2a1a3a, 0.07);
    return g;
  }

  _resetWorld() {
    for (const o of this.objs.values()) this.itemsGroup.remove(o);
    this.objs.clear();
    for (const r of this.rows) r.idx = -999;
    this.wallMeshes?.forEach((w) => this.scene.remove(w));
    this.wallMeshes = [];
    if (this.run) {
      for (const w of this.run.level.walls) for (const sx of [-1, 1]) {
        const len = w.z1 - w.z0;
        const wm = new THREE.Mesh(this.geo.box, new THREE.MeshLambertMaterial({ map: stripeTex('#f6e8ff', '#d8b8f4', 64, 64, 8), color: 0xffffff }));
        wm.scale.set(0.5, 3.2, len); wm.position.set(sx * (WALL_X + 0.25), 1.4, w.z0 + len / 2);
        this.scene.add(wm); this.wallMeshes.push(wm);
      }
      this.finish.position.set(0, 0, this.run.level.finishZ);
      this.finish.visible = true;
    }
  }

  // ---- layout and input ---------------------------------------------------------------------------------------------

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.renderer.setSize(this.cw, this.ch, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.cam.aspect = this.cw / (this.ch || 1);
    this.cam.fov = this.cw / (this.ch || 1) < 1 ? 70 : 58;
    this.cam.updateProjectionMatrix();
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
  }

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    let sx = 0, sy = 0, down = false, done = false, st = 0;
    root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; down = true; done = false; sx = e.clientX; sy = e.clientY; st = performance.now(); });
    root.addEventListener('pointermove', (e) => {
      if (!down || done) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      const th = Math.max(22, this.u * 5);
      if (Math.hypot(dx, dy) < th) return;
      done = true;
      if (Math.abs(dx) > Math.abs(dy)) this._input(dx < 0 ? 'left' : 'right'); else this._input(dy < 0 ? 'up' : 'down');
    });
    const up = (e) => {
      if (!down) return;
      down = false;
      if (!done && !e.target.closest('button') && performance.now() - st < 350) this._input('up'); // a tap jumps
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', () => { down = false; });
    this._onKey = (e) => {
      const k = e.key;
      if (k === 'ArrowLeft' || k === 'a' || k === 'A') this._input('left');
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') this._input('right');
      else if (k === 'ArrowUp' || k === 'w' || k === 'W' || k === ' ') this._input('up');
      else if (k === 'ArrowDown' || k === 's' || k === 'S') this._input('down');
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this._pause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'cd-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _input(dir) {
    if (this.mode !== 'play' || !this.run || this.run.state !== 'run') return;
    const r = this.run;
    this.seenInput = true;
    if (dir === 'left' || dir === 'right') { if (r.moveLane(dir === 'left' ? -1 : 1)) { this.sound.play('swipe'); this.laneTilt = dir === 'left' ? -1 : 1; } else this.sound.play('no'); }
    else if (dir === 'up') { if (r.jump()) { this.sound.play('jump'); this.jumpFrom = r.z; } }
    else if (dir === 'down') { if (r.doSlide()) this.sound.play('slide'); }
    this._hideHand();
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _say(text, secs = 1.6, gold = false) {
    if (!this.sayEl) return;
    this.sayEl.textContent = text;
    this.sayEl.className = `cd-say show${gold ? ' gold' : ''}`;
    clearTimeout(this._st);
    this._st = setTimeout(() => this.sayEl && this.sayEl.classList.remove('show'), secs * 1000);
  }
  _showHand(dx, dy) {
    if (!this.handEl) return;
    this.handEl.style.setProperty('--hx', `${dx * this.u}px`);
    this.handEl.style.setProperty('--hy', `${dy * this.u}px`);
    this.handEl.classList.add('show');
  }
  _hideHand() { if (this.handEl) this.handEl.classList.remove('show'); }
  _soundBtn() {
    const b = h('button', { class: 'cd-round', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }

  showMenu() {
    this.mode = 'menu';
    this.run = null;
    this.finish.visible = false;
    this._resetWorld();
    this.sound.setMode('menu');
    this._clear();
    const done = Object.keys(this.save.stars).length;
    this.layer.append(
      h('div', { class: 'cd-top' },
        h('button', { class: 'cd-round', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
        h('div', { style: 'flex:1' }), this._soundBtn()),
      h('div', { class: 'cd-dim', style: 'background:none' }, h('div', { class: 'cd-card' },
        h('div', { class: 'cd-logo' }, t('title')),
        h('div', { class: 'cd-small' }, '☁️ 🏃 🪙'),
        h('div', { class: 'cd-grid' }, Array.from({ length: LEVELS }, (_, i) => {
          const n = i + 1;
          const locked = n > this.save.unlocked;
          const st = this.save.stars[n] ?? 0;
          return h('button', { class: `cd-lv${locked ? ' lock' : ''}`, 'aria-label': `${t('level')} ${n}`, onclick: () => { if (locked) { this.sound.play('no'); return; } this.startLevel(n); } }, locked ? '🔒' : num(n), h('small', {}, locked ? '' : '⭐'.repeat(st) || '·'));
        })),
        h('button', { class: 'cd-btn', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS)) }, '▶ ', t('play')),
        done >= LEVELS ? h('div', { class: 'cd-small' }, t('allDone')) : null)),
    );
  }

  startLevel(n) {
    this.n = n;
    this.run = new Run(n, Math.floor(Math.random() * 1e9), this.easy);
    this.mode = 'play';
    this.acc = 0;
    this.laneTilt = 0;
    this.camX = 0;
    this.shake = 0;
    this.flash = 0;
    this.combo = 0;
    this.said = new Set();
    this.jumpFrom = null;
    this.seenInput = false;
    this.lastLandSay = -9;
    this._resetWorld();
    this.sound.setMode('play');
    this._buildHud();
    this._say(`${t('level')} ${num(n)}`, 1.8, true);
    const spec = this.run.spec;
    const tip = n === 1 ? t('dodge') : n === 2 ? t('slide') : n === 3 ? t('gaps') : n === 4 ? t('spikes') : n === 5 ? t('wind') : n === 6 ? t('wall') : '';
    if (tip) setTimeout(() => this.mode === 'play' && this._say(tip, 2.4), 1900);
    if (n === 1) setTimeout(() => this.mode === 'play' && !this.seenInput && (this._say(t('tutR'), 2.2), this._showHand(14, 0)), 3500);
    void spec;
  }

  _buildHud() {
    this._clear();
    this.hud = { bar: h('b'), hearts: h('div', { class: 'cd-hearts' }), coins: h('span', {}, '0'), pw: h('div', { class: 'cd-pw' }) };
    this.sayEl = h('div', { class: 'cd-say' });
    this.handEl = h('div', { class: 'cd-hand' }, '👆');
    this.flashEl = h('div', { class: 'cd-flash' });
    this.slowEl = h('div', { class: 'cd-slowv' });
    this.layer.append(
      this.flashEl, this.slowEl,
      h('div', { class: 'cd-top' },
        h('button', { class: 'cd-round', 'aria-label': t('pause'), onclick: () => this._pause() }, '⏸'),
        h('div', { class: 'cd-prog' }, this.hud.bar, h('i', {}, '🏆')),
        this._soundBtn()),
      h('div', { class: 'cd-lvl' }, `${t('level').toUpperCase()} ${num(this.n)}`),
      h('div', { class: 'cd-row2' }, this.hud.hearts, h('div', { class: 'cd-coins' }, h('i', { class: 'cd-coin' }), this.hud.coins)),
      this.hud.pw, this.sayEl, this.handEl,
    );
    this._hud();
  }

  _hud() {
    const r = this.run;
    if (!r || !this.hud) return;
    this.hud.bar.style.width = `${r.progress * 100}%`;
    this.hud.hearts.replaceChildren(...Array.from({ length: r.spec.hearts }, (_, i) => h('span', { class: i < r.hearts ? '' : 'off' }, '❤️')));
    this.hud.coins.textContent = num(r.coins);
    const pw = [];
    if (r.shield) pw.push(h('span', {}, '🛡️'));
    if (r.magnet > 0) pw.push(h('span', {}, '🧲', num(Math.ceil(r.magnet))));
    if (r.slow > 0) pw.push(h('span', {}, '⏳', num(Math.ceil(r.slow))));
    this.hud.pw.replaceChildren(...pw);
    if (this.slowEl) this.slowEl.style.opacity = r.slow > 0 ? '1' : '0';
  }

  _pause() {
    if (this.mode !== 'play') return;
    this.mode = 'paused';
    this.layer.append(h('div', { class: 'cd-dim', id: 'cd-pause' }, h('div', { class: 'cd-card' },
      h('div', { class: 'cd-title' }, t('pause')),
      h('button', { class: 'cd-btn', onclick: () => { document.getElementById('cd-pause')?.remove(); this.mode = 'play'; this.last = performance.now(); } }, '▶ ', t('resume')),
      h('button', { class: 'cd-btn alt', onclick: () => this.startLevel(this.n) }, '↻ ', t('replay')),
      h('button', { class: 'cd-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  _winCard() {
    const r = this.run;
    const stars = r.stars;
    this.save.stars[this.n] = Math.max(this.save.stars[this.n] ?? 0, stars);
    if (this.n + 1 > this.save.unlocked && this.n < LEVELS) this.save.unlocked = this.n + 1;
    this.save.coins = Math.min(999999, this.save.coins + r.coins);
    this._saveNow();
    this.sound.play('finish');
    this.mode = 'won';
    const last = this.n >= LEVELS;
    this.layer.append(h('div', { class: 'cd-dim' }, h('div', { class: 'cd-card' },
      h('div', { class: 'cd-title' }, t('complete')),
      h('div', { class: 'cd-small' }, `${t('level')} ${num(this.n)} · ${t('win')}`),
      h('div', { class: 'cd-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'cd-stat' }, h('div', {}, h('small', {}, t('coins')), `🪙 ${num(r.coins)}`), h('div', {}, h('small', {}, t('hearts')), '❤️'.repeat(Math.max(0, r.hearts)))),
      last ? h('div', { class: 'cd-small' }, t('allDone')) : h('button', { class: 'cd-btn', onclick: () => this.startLevel(this.n + 1) }, t('next'), ' ▶'),
      h('button', { class: 'cd-btn alt', onclick: () => this.startLevel(this.n) }, '↻ ', t('replay')),
      h('button', { class: 'cd-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  _loseCard() {
    this.mode = 'lost';
    this.layer.append(h('div', { class: 'cd-dim' }, h('div', { class: 'cd-card' },
      h('div', { class: 'cd-title' }, t('lostTitle')),
      h('div', { class: 'cd-small' }, t('lostText')),
      h('div', { class: 'cd-stat' }, h('div', {}, h('small', {}, t('coins')), `🪙 ${num(this.run.coins)}`), h('div', {}, h('small', {}, t('level')), num(this.n))),
      h('button', { class: 'cd-btn', onclick: () => this.startLevel(this.n) }, '↻ ', t('tryAgain')),
      h('button', { class: 'cd-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  // ---- the loop -----------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const time = (now - this.t0) / 1000;
    if (this.mode === 'play' && this.run) this._tick(dt, time);
    this._render(time, dt);
  }

  _tick(dt, time) {
    const r = this.run;
    this.acc += dt;
    let guard = 0;
    while (this.acc >= 1 / 60 && guard++ < 8) {
      this.acc -= 1 / 60;
      for (const e of r.step(1 / 60)) this._event(e, time);
      if (r.state !== 'run') break;
    }
    this._hud();
    // tutorial hints, once each
    if (r.state === 'run') {
      const nxt = r.level.items.find((i) => i.z > r.z && i.z - r.z < 22 && i.type !== 'coin' && i.lane === r.lane);
      if (nxt && !this.said.has(nxt.type)) {
        this.said.add(nxt.type);
        if (nxt.type === 'barrier' && this.n === 1) { this._say(t('tutUp'), 2); this._showHand(0, -10); }
        else if (nxt.type === 'bar') { this._say(t('tutDown'), 2); this._showHand(0, 10); }
        else if (nxt.type === 'gap' || nxt.type === 'crumble') this._say(t('gaps'), 1.8);
        else if (nxt.type === 'wind') { this._say(t('wind'), 1.8); this.sound.play('wind'); }
      }
    }
    if (r.state === 'won' && this.mode === 'play') { this.fx && this.fx.burst({ x: 0, y: 3, z: r.z + 2 }, { n: 120, colors: [0xff4d6d, 0xffe04a, 0x5ee07a, 0x4ab4ff, 0xc76bff, 0xffffff], speed: 8, size: 0.5, life: 2.2, gravity: 3, lift: 3 }); this.mode = 'finishing'; this.finT = 0; this._say(t('finish'), 2.4, true); this.sound.play('finish'); }
    else if (r.state === 'lost' && this.mode === 'play') { this.mode = 'lostwait'; this.finT = 0; }
  }

  _event(e, time) {
    const r = this.run;
    void time;
    switch (e.type) {
      case 'coin': this.fx && this.fx.burst({ x: laneX(r.lane), y: r.y + 1.2, z: r.z + 0.6 }, { n: 8, color: 0xffd23a, colors: [0xffd23a, 0xffb020, 0xffffff], speed: 3.2, size: 0.16, life: 0.55, gravity: 4 }); this.combo = Math.min(8, this.combo + 1); this.comboT = 0.6; this.sound.play('coin', this.combo); this._pop(e.i); break;
      case 'power': this.fx && this.fx.burst({ x: laneX(r.lane), y: r.y + 1.3, z: r.z + 0.6 }, { n: 28, colors: [0x6ad0ff, 0xff6aa8, 0xffd84a, 0xb08aff], speed: 6, size: 0.22, life: 0.9, gravity: 2 }); this.sound.play(e.kind === 'shield' ? 'shield' : 'power'); this._say(t(e.kind), 1.8, true); this._pop(e.i); break;
      case 'hit': this.fx && this.fx.burst({ x: laneX(r.lane), y: r.y + 1, z: r.z + 0.8 }, { n: 26, colors: [0xff4d6d, 0xffffff, 0xffe04a], speed: 7, size: 0.25, life: 0.7, gravity: 8 }); this.sound.play('hit'); this.flash = 1; this.shake = 0.35; this._say(t('ouch'), 1); break;
      case 'fall': this.sound.play('fall'); this.flash = 1; this.shake = 0.5; this._say(t('fell'), 1.3); break;
      case 'shieldpop': this.sound.play('shield'); this._say(t('shieldPop'), 1.4, true); break;
      case 'crack': this.sound.play('crack'); break;
      case 'gust': this.sound.play('wind'); break;
      case 'land': {
        this.fx && this.fx.burst({ x: laneX(r.lane), y: 0.15, z: r.z }, { n: 12, colors: [0xffffff, 0xf4e8ff], speed: 3, size: 0.3, life: 0.6, gravity: -0.5, flat: true, up: 0.1 });
        this.sound.play('land');
        if (this.jumpFrom != null) {
          const passed = r.level.items.some((i) => ['barrier', 'slime', 'spike', 'gap', 'crumble'].includes(i.type) && i.lane === r.lane && i.z > this.jumpFrom - 0.5 && i.z < r.z + 0.5);
          if (passed && r.time - this.lastLandSay > 4) { this.lastLandSay = r.time; this._say(t('perfect'), 1.2, true); this.sound.play('perfect'); }
          this.jumpFrom = null;
        }
        break;
      }
      default:
    }
  }

  /** A collected sprite flies up, grows and fades (the kid "takes" it). */
  _pop(i) {
    const o = this.objs.get(i);
    if (!o) return;
    this.objs.delete(i);
    const sp = o.userData.sprite;
    const mat = sp ? sp.material.clone() : null;
    if (sp) sp.material = mat;
    this.pops.push({ o, t: 0, mat });
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _render(time, dt) {
    const r = this.run;
    const z = r ? r.z : time * 6;
    const ground = Math.floor(z / ROW);
    // the track rows
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      const idx = ground - ROWS_BEHIND + ((i - (ground - ROWS_BEHIND)) % this.rows.length + this.rows.length) % this.rows.length;
      const want = idx;
      if (row.idx !== want) {
        row.idx = want;
        for (let l = 0; l < 3; l++) { row.meshes[l].material = this.mat.tiles[(((want + l * 2) % 6) + 6) % 6]; row.meshes[l].position.z = want * ROW + ROW / 2; }
      }
      // gaps hide a tile
      for (let l = 0; l < 3; l++) {
        let vis = true;
        if (r) {
          const z0 = row.idx * ROW, z1 = z0 + ROW;
          const lane = 1 - l; // mesh l sits at world x (l-1)*LANE_W = game lane (1-l)
          for (const it of r.level.items) {
            if (it.z > z1) break;
            if ((it.type === 'gap' || (it.type === 'crumble' && r.opened.has(r.level.items.indexOf(it)))) && it.lane === lane && it.z + it.len > z0 && it.z < z1) { vis = false; break; }
          }
          if (row.idx < 0 || row.idx * ROW > r.level.finishZ + 6) vis = false;
        }
        row.meshes[l].visible = vis;
      }
    }
    // scenery follows the runner
    for (const p of this.puffs) { const d = p.userData; p.position.set(d.x, d.y, z - 20 + ((d.k + z * 0.5) % 220)); }
    for (const g of this.deco) { const d = g.userData; g.position.set(d.side * d.off, d.y + Math.sin(time + d.k) * 0.4, z - 10 + ((d.k * 1.7 + z) % 170)); }
    for (const p of this.pops) {
      p.t += dt;
      const sp = p.o.userData.sprite;
      if (sp) { sp.position.y += dt * 3.2; sp.scale.multiplyScalar(1 + dt * 3); if (p.mat) p.mat.opacity = Math.max(0, 1 - p.t / 0.35); }
      if (p.t >= 0.35) { this.itemsGroup.remove(p.o); if (p.mat) p.mat.dispose(); }
    }
    this.pops = this.pops.filter((p) => p.t < 0.35);
    if (this.fx) { this.fx.update(dt); this.fx.setViewportScale(this.ch || 400); }
    if (this.sky) { this.sky.position.z = z + 150; this.sunS.position.set(40, 38, z + 170); }
    if (r) {
      this._items(r, time);
      this.stepT = (this.stepT || 0) + dt;
      if (this.fx && r.state === 'run' && r.grounded && this.stepT > 0.11) { this.stepT = 0; this.fx.burst({ x: laneX(r.lane) + (Math.random() - 0.5) * 0.3, y: 0.1, z: r.z - 0.2 }, { n: 2, colors: [0xffffff, 0xffe8ff], speed: 0.8, size: 0.22, life: 0.5, gravity: -0.3, up: 0.2, vz: -2 }); }
      if (this.fx && r.state === 'run') { const ci = Math.floor(time * 24) % 7; this.fx.burst({ x: this.kidX == null ? 0 : this.kidX, y: r.y + 0.9, z: r.z - 0.4 }, { n: 1, color: [0xff4d6d, 0xff9a3c, 0xffe04a, 0x5ee07a, 0x4ab4ff, 0x7a5cff, 0xc76bff][ci], speed: 0.15, size: 0.12, life: 0.45, gravity: 0, up: 0, vz: -3 }); }
      if (this.kid.cape) { const cp = this.kid.cape; cp.rotation.x = 0.55 + Math.sin(time * 16) * 0.12 + (r.grounded ? 0 : 0.35); cp.scale.y = 1 + Math.sin(time * 22) * 0.06; }
      const x = laneX(r.lane);
      const k = this.kid;
      const wall = Math.abs(r.lane) === 2;
      const targetX = x;
      this.kidX = this.kidX == null ? targetX : this.kidX + (targetX - this.kidX) * Math.min(1, dt * 14);
      const yy = wall ? 1.4 : r.y;
      k.root.position.set(this.kidX, yy, r.z);
      const flicker = r.inv > 0 && Math.floor(time * 14) % 2 === 0;
      k.root.visible = !flicker;
      const run = r.state === 'run' || this.mode === 'finishing';
      const ph = time * (r.slow > 0 ? 8 : 14);
      const air = !r.grounded;
      const sl = r.slide > 0;
      k.legL.rotation.x = air ? -0.6 : run ? Math.sin(ph) * 0.9 : 0;
      k.legR.rotation.x = air ? 0.5 : run ? -Math.sin(ph) * 0.9 : 0;
      k.armL.rotation.x = air ? -2.4 : run ? -Math.sin(ph) * 0.9 : 0;
      k.armR.rotation.x = air ? -2.4 : run ? Math.sin(ph) * 0.9 : 0;
      k.body.position.y = air ? 0 : run ? Math.abs(Math.sin(ph)) * 0.06 : 0;
      k.body.rotation.x = sl ? -1.1 : 0.12;
      k.body.position.y += sl ? -0.35 : 0;
      k.root.rotation.z = wall ? Math.sign(r.lane) * (Math.PI / 2.3) * -1 : this.laneTilt * 0.25;
      k.root.rotation.y = this.mode === 'finishing' ? time * 4 : 0;
      this.laneTilt *= 0.9;
      k.shadow.position.y = wall ? -1.3 : 0.02 - yy + 0.02;
      k.shadow.visible = !wall;
      this.shieldMesh.visible = r.shield;
      this.shieldMesh.position.set(this.kidX, yy + 1, r.z);
      this.shieldMesh.scale.setScalar(1.15 + Math.sin(time * 6) * 0.04);
      // the camera
      const wantX = wall ? x * 0.55 : x * 0.55;
      this.camX = (this.camX ?? 0) + (wantX - (this.camX ?? 0)) * Math.min(1, dt * 5);
      let sx = 0, sy = 0;
      if (this.shake > 0) { this.shake = Math.max(0, this.shake - dt); sx = (Math.random() - 0.5) * this.shake * 0.8; sy = (Math.random() - 0.5) * this.shake * 0.5; }
      const portrait = this.cw / this.ch < 1;
      this.cam.position.set(this.camX + sx, (portrait ? 4.8 : 3.9) + r.y * 0.4 + sy, r.z - (portrait ? 7.4 : 6.6));
      this.cam.lookAt(this.camX * 0.8, 1.4 + r.y * 0.3, r.z + 7);
      if (this.mode === 'finishing') { this.finT += dt; if (this.finT > 1.4 && r.state === 'won') { r.state = 'done'; this._winCard(); } }
      if (this.mode === 'lostwait') { this.finT += dt; if (this.finT > 0.7) { this.mode = 'lost'; this._loseCard(); } }
      if (this.comboT) { this.comboT -= dt; if (this.comboT <= 0) { this.combo = 0; this.comboT = 0; } }
      if (this.flash > 0) { this.flash = Math.max(0, this.flash - dt * 2.4); if (this.flashEl) this.flashEl.style.opacity = String(this.flash); }
    } else {
      // the menu: a gentle fly-through
      this.cam.position.set(Math.sin(time * 0.3) * 1.5, 4.2, z - 7);
      this.cam.lookAt(0, 1.4, z + 8);
      this.kid.root.position.set(0, 0, z);
      const ph = time * 12;
      this.kid.legL.rotation.x = Math.sin(ph) * 0.9; this.kid.legR.rotation.x = -Math.sin(ph) * 0.9;
      this.kid.armL.rotation.x = -Math.sin(ph) * 0.9; this.kid.armR.rotation.x = Math.sin(ph) * 0.9;
      this.kid.body.rotation.x = 0.12; this.kid.root.rotation.set(0, 0, 0); this.kid.root.visible = true;
      this.shieldMesh.visible = false;
    }
    this.renderer.render(this.scene, this.cam);
  }

  /** Create the objects of the items that come near, and remove the ones left behind. */
  _items(r, time) {
    const items = r.level.items;
    const zmin = r.z - 6;
    const zmax = r.z + 130;
    for (const [i, o] of this.objs) {
      const it = items[i];
      if (it.z + (it.len || 0) < zmin || r.got.has(i) && (it.type === 'coin' || it.type === 'shield' || it.type === 'magnet' || it.type === 'slow')) { this.itemsGroup.remove(o); this.objs.delete(i); }
    }
    // a binary-ish walk: items are sorted by z
    let lo = 0, hi = items.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (items[mid].z + (items[mid].len || 0) < zmin) lo = mid + 1; else hi = mid; }
    for (let i = lo; i < items.length; i++) {
      const it = items[i];
      if (it.z > zmax) break;
      if (this.objs.has(i)) continue;
      if (r.got.has(i) && (it.type === 'coin' || it.type === 'shield' || it.type === 'magnet' || it.type === 'slow')) continue;
      const o = this._makeItem(it);
      this.itemsGroup.add(o);
      this.objs.set(i, o);
    }
    for (const [i, o] of this.objs) {
      const it = items[i];
      const ud = o.userData;
      if (ud.sprite) {
        // a coin "spins" (its width breathes) and every sprite bobs; power-ups pulse
        if (it.type === 'coin') { const w = 0.62 + 0.38 * Math.abs(Math.cos(time * 3.5 + i)); ud.sprite.scale.set(0.95 * w, 0.95, 1); ud.sprite.position.y = Math.sin(time * 3 + i) * 0.06; }
        else { const k = 1.5 + Math.sin(time * 4) * 0.12; ud.sprite.scale.set(k, k, 1); ud.sprite.position.y = 1.2 + Math.sin(time * 3 + i) * 0.1; }
      }
      if (it.type === 'slime') { const k = 1 + Math.sin(time * 5 + i) * 0.07; ud.blob.scale.set(0.62 * (2 - k), 0.8 * k, 0.55 * (2 - k)); }
      if (it.type === 'wind') o.children.forEach((c, k) => { if (c.geometry && c.geometry.type === 'TorusGeometry') c.rotation.z = time * (2 + k); });
      if (it.type === 'crumble') {
        const open = r.opened.has(i);
        if (ud.tile) { ud.tile.visible = !open; ud.tile.position.y = -0.22 + (open ? 0 : Math.sin(time * 40 + i) * (it.z - r.z < 6 ? 0.04 : 0)); }
        if (open && ud.tile) { /* the tile is gone: a hole */ }
      }
      if (it.type === 'gap' || it.type === 'crumble') { /* the tile rows hide */ }
      if (r.got.has(i) && it.type !== 'coin' && it.type !== 'shield' && it.type !== 'magnet' && it.type !== 'slow' && it.type !== 'gap' && it.type !== 'crumble' && it.type !== 'wind') { o.visible = false; }
      else o.visible = true;
      if (it.type === 'coin' && r.magnet > 0 && Math.abs(it.z - r.z) < 6 && Math.abs(it.lane) < 2 && !r.got.has(i)) {
        o.position.x += (laneX(r.lane) - o.position.x) * 0.15;
      }
    }
    void time;
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this._pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill);
    clearTimeout(this._st);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    try { this.renderer.forceContextLoss(); } catch (_) { /* already gone */ } // free the GL context now (phones allow only a few)
    this.root.remove();
  }
}

void levelSpec;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.CloudDash = api;
export default api;
