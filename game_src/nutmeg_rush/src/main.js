// «سكة الكورة» — Nutmeg Rush. Entry: window.NutmegRush.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D night-stadium football game where YOU ARE THE BALL: drag to roll it past red defenders (their slide-tackle lanes flash red
// first), roll between their legs for a nutmeg, run into a light-blue friend for a one-two. Tricks heat the ball until it is a flaming
// comet. In the box a target slides over the goal: tap when it is outside the keeper's (shown) reach. All characters are original
// cartoon figures built from shapes in code; no clubs, brands or real players. Nothing leaves the device.
import * as THREE from 'three';
import { Match, LEVELS, PITCH, SKINS, LEG_OFF, LANE_LEN, LANE_W, LIVES, DUMMY_R, normalizeSave, buySkin, selectSkin } from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['سكة الكورة', 'NUTMEG RUSH'], play: ['العب', 'PLAY'], levels: ['المراحل', 'LEVELS'], balls: ['الكور', 'BALLS'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'],
  back: ['رجوع', 'Back'], sound: ['الصوت', 'Sound'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], restart: ['إعادة', 'RETRY'], home: ['الرئيسية', 'HOME'], next: ['التالي', 'NEXT'],
  select: ['اختار المرحلة', 'SELECT LEVEL'], locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'], start: ['يلا!', "LET'S GO!"], level: ['المرحلة', 'LEVEL'],
  tip1: ['ابعد عن الممرات الحمرا الوامضة', 'Dodge the flashing RED lanes'], tip2: ['مرّر الكورة بين رجلين المدافع!', "Roll the ball between a defender's legs!"],
  tip3: ['اخبط في صاحبك الأزرق لتمريرة وراجعة', 'Run into your BLUE friend for a one-two'], tip4: ['كل حركة تسخّن الكورة... وتتحول لكرة نار!', 'Tricks heat the ball... until it is a FLAMING COMET!'],
  tip5: ['في الشباك دوس لما الدايرة تبقى خضرا', 'At the goal, TAP when the ring is GREEN'],
  how: ['اسحب صباعك عشان تحرّك الكورة', 'Drag your finger to roll the ball'],
  nutmeg: ['بين الرجلين!', 'NUTMEG!'], onetwo: ['تمريرة وراجعة!', 'ONE-TWO!'], stolen: ['اتسرقت!', 'STOLEN!'], dodge: ['فلتّ منه!', 'DODGE!'],
  comet: ['🔥 كرة نار!! 🔥', '🔥 FLAMING COMET! 🔥'], burn: ['حرقتو!', 'BURNED THROUGH!'], goal: ['جووووول!', 'GOOOAL!'], save: ['الحارس صدّها! جرّب تاني', 'SAVED! Try again'],
  shootHint: ['دوس لما الدايرة تبقى خضرا!', 'TAP when the ring is GREEN!'], shootGo: ['اضرب!', 'SHOOT!'], shootWait: ['استنى...', 'WAIT...'],
  tricks: ['حركات', 'Tricks'], time: ['الوقت', 'Time'], coins: ['العملات', 'Coins'], score: ['النقاط', 'Score'], won: ['جووووول! 🏆', 'GOAL! 🏆'],
  nut: ['بين الرجلين', 'Nutmegs'], one: ['تمريرة وراجعة', 'One-twos'], dod: ['فلتّ', 'Dodges'], buy: ['اشترِ', 'Buy'], owned: ['عندك', 'Owned'], on: ['مختارة ✓', 'Selected ✓'],
  poor: ['محتاج عملات أكتر', 'Need more coins'], tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], s: ['ث', 's'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
  lv: ['م', 'LV'], youAre: ['إنت الكورة', 'YOU ARE THE BALL'], blocked: ['صدّ!', 'BLOCKED!'], tapShoot: ['دوس واضرب!', 'TAP TO SHOOT!'], mate: ['مرّر لصاحبك!', 'PASS TO YOUR MATE!'],
  fullTime: ['انتهى الوقت', 'FULL TIME'], fullTimeSub: ['خدوا كل الكور. نجرّب تاني؟', 'They took every ball. Again?'], savedT: ['صدّها!', 'SAVED!'], savedSub: ['الحارس صدّ الكورة. العب المرحلة تاني!', 'The keeper stopped it. Play the level again!'],
  tryAgain: ['حاول تاني', 'TRY AGAIN'], menu: ['القائمة', 'MENU'], dragMove: ['اسحب عشان تحرّك الكورة', 'DRAG TO MOVE'], through: ['مرّرها بين الرجلين!', 'THROUGH THE LEGS!'], levelN: ['المرحلة', 'LEVEL'],
  nutmegT: ['بين الرجلين!', 'NUTMEG!'],
};
const I = makeI18n(S);
const tx = (k) => I.t(k);
const U = (n) => `calc(var(--u)*${n})`;

const geo = { sphere: new THREE.SphereGeometry(0.5, 14, 10), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12), box: new THREE.BoxGeometry(1, 1, 1), plane: new THREE.PlaneGeometry(1, 1), circle: new THREE.CircleGeometry(0.5, 16), ring: new THREE.RingGeometry(0.62, 0.9, 28) };
const mats = new Map();
const M = (c, em = 0) => { const k = `${c}|${em}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em })); return mats.get(k); };
const BM = (c, op = 1, add = false) => new THREE.MeshBasicMaterial({ color: c, transparent: op < 1 || add, opacity: op, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending, side: THREE.DoubleSide });
function mesh(g, m, x, y, z, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const WX = (x) => -x; // the camera looks along +z, so screen-right is world -x

function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, inner); g.addColorStop(0.4, 'rgba(255,255,255,0.55)'); g.addColorStop(1, outer);
  x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
}
function chevronTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d');
  x.strokeStyle = '#fff'; x.lineWidth = 9; x.lineCap = 'round'; x.lineJoin = 'round';
  for (let i = 0; i < 3; i++) { const y = 20 + i * 38; x.beginPath(); x.moveTo(14, y + 22); x.lineTo(32, y); x.lineTo(50, y + 22); x.stroke(); }
  return new THREE.CanvasTexture(c);
}
function markTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#e8242a'; x.beginPath(); x.moveTo(32, 4); x.lineTo(62, 58); x.lineTo(2, 58); x.closePath(); x.fill(); x.lineWidth = 5; x.strokeStyle = '#fff'; x.stroke();
  x.fillStyle = '#fff'; x.font = 'bold 40px sans-serif'; x.textAlign = 'center'; x.fillText('!', 32, 52); return new THREE.CanvasTexture(c);
}

function makePlayer(shirt, shorts, skin, hair, keeper = false) {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body); const u = g.userData; u.body = body;
  const white = M(0xffffff, 0x444444);
  for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(s * LEG_OFF, 1.75, 0);
    leg.add(mesh(geo.sphere, M(shorts), 0, 0.05, 0, 1.25, 1.05, 1.25), mesh(geo.cyl, M(white.color.getHex()), 0, -0.6, 0, 0.8, 1.1, 0.8), mesh(geo.sphere, M(0x1c1c24), 0, -1.2, 0.25, 0.95, 0.6, 1.4));
    body.add(leg); (s < 0 ? (u.legR = leg) : (u.legL = leg));
    const arm = new THREE.Group(); arm.position.set(s * 1.55, 3.25, 0);
    arm.add(mesh(geo.cyl, M(shirt), 0, -0.5, 0, 0.62, 1.1, 0.62), mesh(geo.sphere, keeper ? M(0x7aff7a, 0x1a601a) : M(skin), 0, -1.15, 0, keeper ? 0.95 : 0.62, keeper ? 0.95 : 0.62, keeper ? 0.95 : 0.62));
    body.add(arm); (s < 0 ? (u.armR = arm) : (u.armL = arm));
  }
  body.add(mesh(geo.sphere, M(shirt), 0, 2.75, 0, 2.7, 2.3, 1.75), mesh(geo.box, white, 0, 2.75, 0.86, 1.1, 0.28, 0.06));
  const head = new THREE.Group(); head.position.set(0, 4.35, 0.05); body.add(head); u.head = head;
  head.add(mesh(geo.sphere, M(skin), 0, 0, 0, 1.55, 1.5, 1.5), mesh(geo.sphere, M(hair), 0, 0.42, -0.12, 1.6, 0.95, 1.55));
  for (const s of [-1, 1]) head.add(mesh(geo.sphere, white, s * 0.36, 0.05, 0.66, 0.4, 0.46, 0.2), mesh(geo.sphere, M(0x101018), s * 0.36, 0.03, 0.78, 0.2, 0.24, 0.1), mesh(geo.sphere, M(skin), s * 0.78, 0, 0, 0.3, 0.4, 0.2));
  head.add(mesh(geo.box, M(0x6a2a2a), 0, -0.38, 0.72, 0.5, 0.1, 0.06));
  u.stars = new THREE.Group(); for (let i = 0; i < 3; i++) u.stars.add(mesh(geo.sphere, new THREE.MeshBasicMaterial({ color: 0xffe04a }), Math.cos(i * 2.1) * 1.0, 0, Math.sin(i * 2.1) * 1.0, 0.4, 0.4, 0.4));
  u.stars.position.y = 5.7; u.stars.visible = false; g.add(u.stars);
  u.shadow = mesh(geo.circle, new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.35 }), 0, 0.04, 0, 4, 4, 4); u.shadow.rotation.x = -Math.PI / 2; g.add(u.shadow);
  return g;
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5; this.base = config.base || './';
    this.save = normalizeSave(config.save);
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('nm-style')) document.head.append(h('style', { id: 'nm-style' }, css('nm', '#1f6ae0', '#0a2470', '#ffe04a') + `
.nm-menu{display:flex;flex-direction:column;gap:${U(1.6)};width:100%}.nm-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:${U(3.6)}}
.nm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:${U(1.6)};width:100%}.nm-lvl{border:${U(.5)} solid #fff;border-radius:${U(3)};font-family:inherit;color:#fff;font-weight:900;padding:${U(1.2)};display:flex;flex-direction:column;align-items:center;gap:${U(.4)};font-size:${U(3)};min-height:${U(22)};cursor:pointer;justify-content:center;background:linear-gradient(180deg,#2fa84a,#12662a)}.nm-lvl.lock{filter:grayscale(1) brightness(.6)}
.nm-ball{border:${U(.5)} solid #fff;border-radius:${U(3)};font-family:inherit;color:#fff;font-weight:900;padding:${U(1.4)};display:flex;flex-direction:column;align-items:center;gap:${U(.6)};font-size:${U(2.8)};cursor:pointer;background:linear-gradient(180deg,#1f6ae0,#0a2470)}.nm-ball.sel{border-color:#ffe04a;box-shadow:0 0 ${U(3)} #ffe04a}.nm-ball i{width:${U(13)};height:${U(13)};border-radius:50%;display:block;border:${U(.4)} solid #fff}
.nm-banner{position:absolute;left:0;right:0;top:${U(26)};text-align:center;font-weight:900;font-size:${U(9)};color:#ffe04a;-webkit-text-stroke:${U(.8)} #0a1a40;paint-order:stroke fill;pointer-events:none;opacity:0;transform:scale(.4)}
.nm-banner.show{animation:nmpop 1.5s ease-out forwards}@keyframes nmpop{0%{opacity:0;transform:scale(.3)}15%{opacity:1;transform:scale(1.15)}30%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(1) translateY(${U(-4)})}}
.nm-heat{position:absolute;left:${U(3)};right:${U(3)};top:${U(15.5)};height:${U(3.2)};border-radius:99px;background:rgba(0,0,0,.5);border:${U(.4)} solid #fff;overflow:hidden;direction:ltr}.nm-heat b{display:block;height:100%;width:0;background:linear-gradient(90deg,#ffd23a,#ff5a1a);border-radius:99px}.nm-heat.comet b{background:linear-gradient(90deg,#ff5a1a,#ff2a8a,#ffd23a);animation:nmflick .25s infinite alternate}@keyframes nmflick{to{filter:brightness(1.5)}}
.nm-shoot{position:absolute;left:50%;transform:translateX(-50%);bottom:max(${U(6)},env(safe-area-inset-bottom));font-family:inherit;font-weight:900;font-size:${U(8)};color:#fff;border:${U(.8)} solid #fff;border-radius:999px;padding:${U(2.4)} ${U(10)};pointer-events:auto;cursor:pointer;box-shadow:0 ${U(1)} 0 rgba(0,0,0,.4)}
.nm-shoot.go{background:linear-gradient(180deg,#5ae88a,#17a847)}.nm-shoot.wait{background:linear-gradient(180deg,#ff6a5a,#c8281a)}
.nm-joy{position:absolute;width:${U(24)};height:${U(24)};margin:${U(-12)} 0 0 ${U(-12)};border-radius:50%;border:${U(.7)} solid rgba(255,255,255,.7);background:rgba(255,255,255,.12);pointer-events:none;display:none}.nm-joy b{position:absolute;left:50%;top:50%;width:${U(10)};height:${U(10)};margin:${U(-5)} 0 0 ${U(-5)};border-radius:50%;background:rgba(255,255,255,.85)}
.nm-big{font-size:${U(5.5)};font-weight:900;text-align:center}
.nm-lives{gap:${U(.8)};padding:${U(1)} ${U(2.4)}}.nm-lives i{font-style:normal;width:${U(5)};height:${U(5)};border-radius:50%;background:radial-gradient(circle at 50% 50%,#1e2230 0 22%,transparent 24%),#fff;display:block;box-shadow:inset 0 0 0 ${U(.3)} #1e2230}.nm-lives i.off{opacity:.25}
.nm-prog{position:absolute;left:${U(5)};right:${U(5)};top:${U(17)};height:${U(1.6)};border-radius:99px;background:rgba(0,0,0,.45);direction:ltr;pointer-events:none}.nm-prog b{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:99px;background:linear-gradient(90deg,#ff2a3a,#ff9a2a)}.nm-prog i{position:absolute;top:50%;width:${U(3.6)};height:${U(3.6)};margin:${U(-1.8)} 0 0 ${U(-1.8)};left:0;border-radius:50%;background:#fff;border:${U(.6)} solid #e8242a;box-shadow:0 0 ${U(1)} rgba(0,0,0,.5)}.nm-prog span{position:absolute;right:${U(-1.5)};top:50%;transform:translate(100%,-50%);font-size:${U(4.2)};line-height:1}
.nm-heat{top:${U(21.5)};height:${U(1.8)};border-width:${U(.3)};opacity:.0;transition:opacity .3s}.nm-heat.on{opacity:1}
.nm-banner.red{color:#ff3a4a;-webkit-text-stroke:${U(.8)} #fff}.nm-banner.cyan{color:#5ad8ff;-webkit-text-stroke:${U(.8)} #0a2a50}.nm-banner.white{color:#fff;-webkit-text-stroke:${U(.8)} #0a1a40}.nm-banner{font-size:${U(8.4)};transform:rotate(-4deg)}
.nm-tip{position:absolute;left:0;right:0;bottom:${U(30)};text-align:center;font-weight:900;font-size:${U(5.4)};color:#fff;-webkit-text-stroke:${U(.7)} #0a1a40;paint-order:stroke fill;pointer-events:none;opacity:0;transition:opacity .35s}.nm-tip.show{opacity:1}.nm-tip em{display:block;font-style:normal;font-size:${U(11)};animation:nmhand .7s infinite alternate}@keyframes nmhand{to{transform:translateY(${U(-2)})}}
.nm-menu2{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${U(2.2)};padding:${U(4)};box-sizing:border-box;pointer-events:none;background:linear-gradient(180deg,rgba(5,8,25,.55),rgba(5,8,25,.2) 40%,rgba(5,8,25,.65))}
.nm-title2{font-weight:900;text-align:center;line-height:.95;font-size:${U(15)};color:#fff;-webkit-text-stroke:${U(1.4)} #0a1230;paint-order:stroke fill;text-shadow:0 ${U(1.2)} 0 #0a1230;letter-spacing:.02em}.nm-title2 b{display:block;color:#ffb21a;font-size:${U(19)}}
.nm-ribbon{background:linear-gradient(180deg,#ff3a5a,#c8102e);color:#fff;font-weight:900;font-size:${U(3.6)};padding:${U(.8)} ${U(4)};border-radius:${U(2)};transform:rotate(-3deg);box-shadow:0 ${U(.6)} 0 #6a0a1a;border:${U(.4)} solid #fff;margin-top:${U(-1)}}
.nm-lvname{font-weight:900;font-size:${U(4)};text-align:center;line-height:1.2;text-shadow:0 ${U(.4)} 0 #000}.nm-lvname small{display:block;font-size:${U(2.8)};color:#7ad8ff}
.nm-play{pointer-events:auto;font-family:inherit;font-weight:900;font-size:${U(8)};color:#fff;border:none;border-radius:${U(2.6)};padding:${U(2.2)} ${U(10)};min-width:${U(62)};background:linear-gradient(180deg,#ff3a52,#d0102c);box-shadow:0 ${U(1.2)} 0 #7a0a1a,inset 0 ${U(.6)} 0 rgba(255,255,255,.3);cursor:pointer}.nm-play:active{transform:translateY(${U(.6)})}
.nm-tiles{display:flex;gap:${U(2)};pointer-events:auto;width:100%;max-width:${U(94)};justify-content:center;margin-top:${U(1)}}.nm-tile{flex:1;font-family:inherit;font-weight:900;color:#fff;border:${U(.4)} solid rgba(255,255,255,.25);border-radius:${U(2.4)};padding:${U(2)} ${U(1)};background:linear-gradient(180deg,#1e2a5a,#0e1638);display:flex;flex-direction:column;align-items:center;gap:${U(.6)};font-size:${U(3)};cursor:pointer;box-shadow:0 ${U(.8)} 0 #060a1e}.nm-tile i{font-style:normal;font-size:${U(7)}}
.nm-coinpill{position:absolute;top:max(${U(2.5)},env(safe-area-inset-top));right:${U(3)};background:rgba(8,12,34,.8);border-radius:999px;padding:${U(1)} ${U(3)};font-weight:900;font-size:${U(4)};display:flex;gap:${U(1.2)};align-items:center;border:${U(.3)} solid rgba(255,255,255,.25);pointer-events:none;direction:ltr}
.nm-white{background:#fff;color:#1a2040;border-radius:${U(2.4)};padding:${U(4)} ${U(5)};width:${U(78)};max-width:100%;display:flex;flex-direction:column;gap:${U(2.2)};align-items:stretch;text-align:center;box-shadow:0 ${U(2)} ${U(6)} rgba(0,0,0,.5);pointer-events:auto}.nm-white h2{margin:0;font-size:${U(10)};color:#e8102e;-webkit-text-stroke:${U(.5)} #7a0a1a;text-shadow:0 ${U(.5)} 0 #7a0a1a;line-height:1}.nm-white p{margin:0;font-weight:900;font-size:${U(3.8)};color:#3a4060;line-height:1.35}
.nm-red{font-family:inherit;font-weight:900;font-size:${U(5)};color:#fff;border:none;border-radius:${U(1.8)};padding:${U(2.2)};background:linear-gradient(180deg,#ff3a52,#d0102c);box-shadow:0 ${U(.9)} 0 #7a0a1a;cursor:pointer}.nm-navy{font-family:inherit;font-weight:900;font-size:${U(4.6)};color:#fff;border:none;border-radius:${U(1.8)};padding:${U(2.2)};background:linear-gradient(180deg,#1e2a5a,#0e1638);box-shadow:0 ${U(.9)} 0 #060a1e;cursor:pointer}
.nm-white .nm-row{color:#1a2040;justify-content:space-between}`));
    this.root = h('div', { class: 'nm-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'nm-layer' });
    if (typeof location !== 'undefined' && /[?&]debug/.test(location.search)) window.__nm = this; // test hook
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.keys = {};
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { if (this.dead) return; this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  // ---------- the 3D world ----------
  _three() {
    const L = PITCH.L, HW = PITCH.W / 2;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    const sc = (this.scene = new THREE.Scene());
    sc.background = new THREE.Color(0x070d26); sc.fog = new THREE.Fog(0x070d26, 70, 240);
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.3, 500);
    sc.add(new THREE.HemisphereLight(0x9ab4ff, 0x1d3a22, 1.45));
    const sun = new THREE.DirectionalLight(0xfff2dc, 1.15); sun.position.set(25, 60, -15); sc.add(sun);
    this.ballLight = new THREE.PointLight(0xffffff, 0, 28, 1.6); sc.add(this.ballLight);
    // grass: dark surround + 17 stripes
    sc.add(mesh(geo.box, M(0x14341c), 0, -0.3, L / 2, 220, 0.2, 260));
    for (let i = 0; i < Math.ceil((L + 8) / 6.4); i++) sc.add(mesh(geo.box, M(i % 2 ? 0x2c8a3c : 0x35a048), 0, -0.05, -3 + i * 6.4 + 3.2, PITCH.W + 4, 0.1, 6.4));
    // white lines
    const line = (x, z, w, d) => sc.add(mesh(geo.box, BM(0xffffff, 0.9), x, 0.03, z, w, 0.02, d));
    line(-HW, L / 2, 0.3, L); line(HW, L / 2, 0.3, L); line(0, 0, PITCH.W, 0.3); line(0, L, PITCH.W, 0.3); line(0, L / 2, PITCH.W, 0.3);
    line(-12, (L + PITCH.BOX_Z) / 2, 0.3, L - PITCH.BOX_Z); line(12, (L + PITCH.BOX_Z) / 2, 0.3, L - PITCH.BOX_Z); line(0, PITCH.BOX_Z, 24.3, 0.3);
    const cc = mesh(geo.ring, BM(0xffffff, 0.9), 0, 0.03, L / 2, 6, 6, 6); cc.rotation.x = -Math.PI / 2; sc.add(cc);
    this._goal(); this._stands(); this._lights();
    // the ball
    this.ball = new THREE.Group(); this.ballMesh = new THREE.Group(); this.ball.add(this.ballMesh); sc.add(this.ball);
    this.ballBase = mesh(geo.sphere, M(0xffffff), 0, 0, 0, 1.1, 1.1, 1.1); this.ballMesh.add(this.ballBase);
    this.patchMat = M(0x1e2230); this.patches = [];
    const dirs = []; const p = (1 + Math.sqrt(5)) / 2;
    for (const [a, b] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) { dirs.push([0, a, b * p], [a, b * p, 0], [b * p, 0, a]); }
    for (const d of dirs) { const v = new THREE.Vector3(...d).normalize(); const pt = new THREE.Mesh(geo.circle, this.patchMat); pt.scale.set(0.5, 0.5, 1); pt.position.copy(v).multiplyScalar(0.553); pt.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), v); this.ballMesh.add(pt); this.patches.push(pt); }
    this.glowTex = glowTexture();
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, color: 0xffa030, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.ball.add(this.glow);
    this.ballShadow = mesh(geo.circle, new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.4 }), 0, 0.05, 0, 1.4, 1.4, 1.4); this.ballShadow.rotation.x = -Math.PI / 2; sc.add(this.ballShadow);
    // particles
    this.parts = []; for (let i = 0; i < 160; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); s.visible = false; sc.add(s); this.parts.push({ s, life: 0, t: 0, v: new THREE.Vector3(), a: 1, z0: 1, z1: 1 }); }
    this.partI = 0;
    // players
    this.keeperG = makePlayer(0xffd23a, 0x1a1a2a, 0xf0b890, 0x3a2a1a, true); this.keeperG.position.set(0, 0, L - 0.9); this.keeperG.rotation.y = Math.PI; sc.add(this.keeperG); this.keeperG.scale.setScalar(0.8);
    this.defMeshes = []; this.mateMeshes = []; this.dummyMeshes = []; this.coinMeshes = [];
    this.markTex = markTexture(); this.chevTex = chevronTexture();
    // goal-mouth aiming helpers: keeper's reach (red wall) and the target ring
    this.reachWall = mesh(geo.plane, BM(0xff2a2a, 0.32), 0, 1.8, L - 0.35, 1, PITCH.GOAL_H, 1); this.reachWall.visible = false; sc.add(this.reachWall);
    this.safeWall = mesh(geo.plane, BM(0x30e070, 0.2), 0, 1.8, L - 0.3, PITCH.GOAL_W, PITCH.GOAL_H, 1); this.safeWall.visible = false; sc.add(this.safeWall);
    this.reachFloor = mesh(geo.box, BM(0xff2a2a, 0.55), 0, 0.06, L - 1, 1, 0.04, 2); this.reachFloor.visible = false; sc.add(this.reachFloor);
    this.targetRing = new THREE.Group(); this.targetRing.add(mesh(geo.ring, BM(0xffffff, 1), 0, 0, 0, 1.6, 1.6, 1.6), mesh(geo.circle, BM(0xffffff, 0.9), 0, 0, 0.01, 0.6, 0.6, 1)); this.targetRing.position.set(0, 1.8, L - 0.4); this.targetRing.visible = false; sc.add(this.targetRing);
    this.confetti = [];
    this.skinApply();
  }

  _goal() {
    const sc = this.scene, L = PITCH.L, gw = PITCH.GOAL_W / 2, gh = PITCH.GOAL_H, gd = PITCH.GOAL_D, white = M(0xffffff, 0x888888);
    for (const s of [-1, 1]) { sc.add(mesh(geo.cyl, white, s * gw, gh / 2, L, 0.4, gh, 0.4)); const back = mesh(geo.cyl, white, s * gw, gh / 2, L + gd, 0.2, gh, 0.2); sc.add(back); }
    sc.add(mesh(geo.cyl, white, 0, gh, L, 0.4, PITCH.GOAL_W + 0.4, 0.4).rotateZ(Math.PI / 2));
    const net = BM(0xffffff, 0.35);
    this.netBack = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.GOAL_W, gh, 14, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.55 }));
    this.netBack.position.set(0, gh / 2, L + gd); sc.add(this.netBack); this.netBase = Float32Array.from(this.netBack.geometry.attributes.position.array);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.GOAL_W, gd, 14, 4), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.4 })); top.rotation.x = Math.PI / 2; top.position.set(0, gh, L + gd / 2); sc.add(top);
    for (const s of [-1, 1]) { const sd = new THREE.Mesh(new THREE.PlaneGeometry(gd, gh, 4, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.4 })); sd.rotation.y = Math.PI / 2; sd.position.set(s * gw, gh / 2, L + gd / 2); sc.add(sd); }
    sc.add(mesh(geo.plane, net, 0, gh / 2, L + gd + 0.05, PITCH.GOAL_W, gh, 1));
    this.netT = 99;
  }

  _stands() {
    const sc = this.scene, L = PITCH.L, HW = PITCH.W / 2, people = [];
    const steps = (x0, z0, len, dirX, dirZ, rows) => { // tiered concrete + people; dirX/dirZ point away from the pitch
      for (let r = 0; r < rows; r++) {
        const off = 4 + r * 2.2, y = 1 + r * 1.8, ax = dirX ? x0 + dirX * off : 0, az = dirZ ? z0 + dirZ * off : 0;
        if (dirX) sc.add(mesh(geo.box, M(0x2a3350), ax, y / 2, z0 + len / 2, 2.2, y, len)); else sc.add(mesh(geo.box, M(0x2a3350), x0 + len / 2, y / 2, az, len, y, 2.2));
        for (let i = 0; i < len / 1.4; i++) {
          const along = 0.7 + i * 1.4;
          if (dirX) people.push([ax, y + 0.5, z0 + along]); else people.push([x0 + along, y + 0.5, az]);
        }
      }
    };
    steps(HW + 3, -10, L + 20, 1, 0, 5); steps(-HW - 3, -10, L + 20, -1, 0, 5);
    steps(-HW - 3, L + 9, PITCH.W + 6, 0, 1, 4); steps(-HW - 3, -9, PITCH.W + 6, 0, -1, 3);
    const cols = [0xff5a5a, 0x5aa8ff, 0xffd23a, 0xffffff, 0x6aeaa0, 0xff8ac8, 0xff9a3a];
    this.crowd = new THREE.InstancedMesh(geo.sphere, new THREE.MeshLambertMaterial({ color: 0xffffff }), people.length);
    const col = new THREE.Color(); this.people = people.map((p, i) => ({ x: p[0], y: p[1], z: p[2], ph: (i * 7.31) % 6.28 }));
    people.forEach((p, i) => { col.setHex(cols[(i * 5 + (i >> 3)) % cols.length]); this.crowd.setColorAt(i, col); });
    this.crowd.instanceColor.needsUpdate = true; sc.add(this.crowd); this._crowdMat(0);
    // ad boards (plain colour panels, no brands)
    const pan = [0xe83a5a, 0x3a8ae8, 0xffd23a, 0x3ae8a8];
    for (let i = 0; i < Math.ceil((L + 6) / 5.5); i++) for (const s of [-1, 1]) sc.add(mesh(geo.box, M(pan[i % 4], pan[i % 4] & 0x555555), s * (HW + 1.4), 0.6, i * 5.5 - 3, 0.4, 1.2, 5.2));
    for (let i = 0; i < 7; i++) sc.add(mesh(geo.box, M(pan[i % 4], pan[i % 4] & 0x555555), -HW + 2.5 + i * 5, 0.6, L + 7.5, 5.2, 1.2, 0.4));
  }
  _crowdMat(t, amp = 0) {
    const d = this._dummy || (this._dummy = new THREE.Object3D());
    this.people.forEach((p, i) => { const j = amp ? Math.abs(Math.sin(t * 7 + p.ph)) * amp : 0; d.position.set(WX(p.x), p.y + j, p.z); d.scale.set(0.9, 1.2, 0.9); d.updateMatrix(); this.crowd.setMatrixAt(i, d.matrix); });
    this.crowd.instanceMatrix.needsUpdate = true;
  }

  _lights() {
    const sc = this.scene, L = PITCH.L, tex = glowTexture('rgba(255,255,240,1)');
    for (const [x, z] of [[-27, 8], [27, 8], [-27, L - 8], [27, L - 8], [-27, L / 2], [27, L / 2]]) {
      sc.add(mesh(geo.cyl, M(0x555a6a), x, 15, z, 0.9, 30, 0.9));
      const head = new THREE.Group(); head.position.set(x, 31, z);
      for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) head.add(mesh(geo.box, new THREE.MeshBasicMaterial({ color: 0xfffff0 }), (i - 1) * 2.2, j * 2.2, 0, 2, 2, 0.4));
      head.add(mesh(geo.box, M(0x3a3f4a), 0, 1, -0.3, 7, 5, 0.3));
      head.lookAt(0, 0, z); sc.add(head);
      const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xfffadc, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); gl.scale.set(26, 26, 1); gl.position.set(x + (x < 0 ? 1 : -1) * 2, 32, z); sc.add(gl);
    }
  }

  skinApply() {
    const k = SKINS.find((s) => s.id === this.save.skin) || SKINS[0];
    this.skinDef = k; this.ballBase.material = M(k.base, k.emissive); this.patchMat.color.setHex(k.patch);
    this.patchMat.emissive.setHex(k.id === 'galaxy' || k.id === 'flame' ? k.patch & 0x555555 : 0);
  }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch;
    this.portrait = this.cw < this.ch; this.camera.fov = this.portrait ? 62 : 50; this.camera.updateProjectionMatrix();
  }

  // ---------- input ----------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.joy = h('div', { class: 'nm-joy' }, h('b')); this.root.append(this.joy);
    this.root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || !this.m) return;
      if (this.mode === 'play' && !this.paused && this.m.mode === 'shoot') { this._tap(); return; }
      if (this.mode !== 'play' || this.paused) return;
      const r = this.root.getBoundingClientRect();
      this.dr = { id: e.pointerId, x: e.clientX, y: e.clientY }; this.joy.style.display = 'block'; this.joy.style.left = `${e.clientX - r.left}px`; this.joy.style.top = `${e.clientY - r.top}px`;
      try { this.root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    this.root.addEventListener('pointermove', (e) => {
      if (!this.dr || e.pointerId !== this.dr.id || !this.m) return;
      const R = this.u * 14; let dx = e.clientX - this.dr.x, dy = e.clientY - this.dr.y; const l = Math.hypot(dx, dy);
      if (l > R) { dx *= R / l; dy *= R / l; }
      this.pointerIn = [dx / R, -dy / R]; // dragging right moves the ball to the screen's right: the ball sits at world x = -sim x, so sim +x is screen-right (it was the other way round: owner report 2026-11-26)
      this.joy.firstChild.style.transform = `translate(${dx * 0.8}px,${dy * 0.8}px)`;
    });
    const up = (e) => { if (this.dr && e.pointerId === this.dr.id) { this.dr = null; this.pointerIn = null; this.joy.style.display = 'none'; this.joy.firstChild.style.transform = ''; } };
    this.root.addEventListener('pointerup', up); this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      this.keys[k] = e.type === 'keydown';
      if (e.type === 'keydown') {
        if (k === 'p' || k === 'escape') this.togglePause();
        if ((k === ' ' || k === 'enter') && this.m && this.m.mode === 'shoot' && this.mode === 'play') { e.preventDefault(); this._tap(); }
        if (k.startsWith('arrow') || k === ' ') e.preventDefault();
      }
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    if (!this.m) return;
    let jx = 0, jy = 0;
    if (this.pointerIn) { jx = this.pointerIn[0]; jy = this.pointerIn[1]; }
    const k = this.keys; // sim +x is screen-right
    if (k.arrowleft || k.a) jx -= 1; if (k.arrowright || k.d) jx += 1; if (k.arrowup || k.w) jy += 1; if (k.arrowdown || k.s) jy -= 1;
    this.m.setInput(jx, jy);
  }
  _tap() { if (this.m && this.m.tap()) { this.sound.play('shot'); this.hideTip(); if (this.shootBtn) { this.shootBtn.remove(); this.shootBtn = null; } } }

  // ---------- screens ----------
  _clear() { this.layer.replaceChildren(); this.hintEl = null; }
  _soundPill() { const pill = h('button', { class: 'nm-soundpill', onclick: () => this.sound.unlock() }, tx('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 2200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }
  _card(...kids) { this.layer.append(h('div', { class: 'nm-dim' }, h('div', { class: 'nm-card' }, ...kids))); }
  _coinsPill() { return h('div', { class: 'nm-row' }, h('span', {}, '🪙 ', tx('coins')), h('span', {}, I.num(this.save.coins))); }

  showMenu() {
    this.mode = 'menu'; this.m = null; this._clear(); this.sound.crowd(true); this.sound.excite(0.2); this.menuT = 0;
    const ar = I.getLang() !== 'en', i = Math.min(this.save.unlocked - 1, 4), d = LEVELS[i];
    const lv = h('div', { class: 'nm-lvname' }, `${tx('levelN')} ${I.num(i + 1)} - ${ar ? d.ar : d.en}`.toUpperCase());
    this.layer.append(h('div', { class: 'nm-coinpill' }, '🪙', h('span', {}, I.num(this.save.coins))));
    this.layer.append(h('div', { class: 'nm-menu2' },
      h('div', { class: 'nm-title2' }, ar ? h('b', {}, tx('title')) : [document.createTextNode('NUTMEG'), h('b', {}, 'RUSH')]), h('div', { class: 'nm-ribbon' }, tx('youAre')), lv,
      h('button', { class: 'nm-play', onclick: () => { this.sound.play('whistle'); this.showBrief(i); } }, '▶ ', tx('play')),
      h('div', { class: 'nm-tiles' },
        h('button', { class: 'nm-tile', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, h('i', {}, '▦'), tx('levels')),
        h('button', { class: 'nm-tile', onclick: () => { this.sound.play('tap'); this.showShop(); } }, h('i', {}, '⚽'), tx('balls')),
        h('button', { class: 'nm-tile', onclick: () => { this.sound.play('tap'); this.showSettings(); } }, h('i', {}, '⚙'), tx('settings')))));
    this._soundPill();
  }

  showLevels() {
    this._clear(); const ar = I.getLang() !== 'en';
    const cards = LEVELS.map((d, i) => { const lock = i + 1 > this.save.unlocked, st = this.save.stars[i] || 0; return h('button', { class: `nm-lvl${lock ? ' lock' : ''}`, onclick: () => { if (lock) { this.hint(tx('locked')); return; } this.sound.play('tap'); this.showBrief(i); } }, h('span', { style: `font-size:${U(7)}` }, I.num(i + 1)), h('span', {}, ar ? d.ar : d.en), h('span', {}, lock ? '🔒' : '⭐'.repeat(st) || '☆')); });
    this._card(h('div', { class: 'nm-title' }, tx('select')), h('div', { class: 'nm-grid' }, cards), h('button', { class: 'nm-btn dark', onclick: () => this.showMenu() }, tx('back')));
    this.hintEl = h('div', { class: 'nm-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  showShop() {
    this._clear(); const ar = I.getLang() !== 'en';
    const render = () => {
      this._clear();
      const cards = SKINS.map((k) => {
        const own = this.save.owned.includes(k.id), sel = this.save.skin === k.id, hex = (n) => `#${n.toString(16).padStart(6, '0')}`;
        return h('button', { class: `nm-ball${sel ? ' sel' : ''}`, onclick: () => {
          if (own) { selectSkin(this.save, k.id); this.sound.play('tap'); } else if (buySkin(this.save, k.id)) this.sound.play('coin'); else { this.hint(tx('poor')); return; }
          this.skinApply(); this.post({ type: 'save', save: this.save }); render();
        } }, h('i', { style: `background:radial-gradient(circle at 35% 30%,#fff3 0,transparent 30%),radial-gradient(circle at 70% 70%,${hex(k.patch)} 0 16%,transparent 17%),radial-gradient(circle at 25% 65%,${hex(k.patch)} 0 14%,transparent 15%),${hex(k.base)}` }), h('span', {}, ar ? k.ar : k.en), h('span', {}, sel ? tx('on') : own ? tx('owned') : `🪙 ${I.num(k.price)}`));
      });
      this._card(h('div', { class: 'nm-title' }, '⚽ ', tx('balls')), this._coinsPill(), h('div', { class: 'nm-grid' }, cards), h('button', { class: 'nm-btn dark', onclick: () => this.showMenu() }, tx('back')));
      this.hintEl = h('div', { class: 'nm-hint' }); this.layer.append(this.hintEl); this._soundPill();
    };
    render();
  }

  showSettings() {
    this._clear();
    const b = h('button', { class: 'nm-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); b.textContent = `${this.save.muted ? '🔇' : '🔊'} ${tx('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${tx('sound')}`);
    this._card(h('div', { class: 'nm-title' }, '⚙️ ', tx('settings')), b, h('div', { class: 'nm-small' }, tx('how')), h('button', { class: 'nm-btn dark', onclick: () => this.showMenu() }, tx('back')));
    this._soundPill();
  }

  showBrief(i) { // no tips screen: the level starts at once, like the original (the first coins lead the way)
    this.levelIdx = i; this._newMatch(i); this.startLevel();
  }

  _newMatch(i) {
    this.m = new Match({ level: i, seed: (Date.now() & 0xff) + 1, easy: this.age <= 4 });
    this._clearActors(); this._buildActors(); this.fx = []; this.shake = 0; this.camInit = false; this.celebrate = 0;
  }

  startLevel() {
    this._clear(); this.mode = 'play'; this.paused = false; this.sound.crowd(true); this.sound.excite(0.3);
    this.hudCoins = h('span', {}, '0'); this.hudLevel = h('span'); this.livesEl = h('div', { class: 'nm-pill nm-lives' }, ...[0, 1, 2].map(() => h('i'))); this.lastLives = -1; this.lastCoins = -1;
    const pause = h('button', { class: 'nm-round', 'aria-label': tx('paused'), onclick: () => this.togglePause() }, '⏸');
    this.layer.append(h('div', { class: 'nm-top' }, pause, h('div', { class: 'nm-pill', style: `font-size:${U(3.3)}` }, this.hudLevel), this.livesEl, h('div', { class: 'nm-pill', style: `font-size:${U(3.6)};padding:${U(1)} ${U(2.2)}` }, '🪙', this.hudCoins)));
    this.progEl = h('div', { class: 'nm-prog' }, h('b'), h('i'), h('span', {}, '🥅')); this.layer.append(this.progEl);
    this.heatEl = h('div', { class: 'nm-heat' }, h('b')); this.layer.append(this.heatEl);
    this.tipEl = h('div', { class: 'nm-tip' }); this.layer.append(this.tipEl); this.shownTips = {};
    this.banner = h('div', { class: 'nm-banner' }); this.layer.append(this.banner);
    this.hintEl = h('div', { class: 'nm-hint', style: `top:${U(25)}` }); this.layer.append(this.hintEl);
    this.shootBtn = null; this._soundPill(); this.say('levelN', 'yellow', `${tx('levelN')} ${I.num(this.levelIdx + 1)}`); this.tip('dragMove', 4200, '👆');
  }

  say(key, color = 'yellow', text = null) { if (!this.banner) return; this.banner.textContent = text || tx(key); this.banner.className = `nm-banner ${color}`; void this.banner.offsetWidth; this.banner.classList.add('show'); }
  tip(key, ms = 3000, hand = '') { if (!this.tipEl) return; this.tipEl.replaceChildren(...(hand ? [h('em', {}, hand)] : []), document.createTextNode(tx(key))); this.tipEl.classList.add('show'); clearTimeout(this._tt); this._tt = setTimeout(() => this.tipEl && this.tipEl.classList.remove('show'), ms); }
  hideTip() { if (this.tipEl) this.tipEl.classList.remove('show'); clearTimeout(this._tt); }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) { this.pauseEl = h('div', { class: 'nm-dim' }, h('div', { class: 'nm-card' }, h('div', { class: 'nm-title' }, tx('paused')), h('button', { class: 'nm-btn', onclick: () => this.togglePause() }, '▶ ', tx('resume')), h('button', { class: 'nm-btn dark', onclick: () => { this.showBrief(this.levelIdx); } }, '🔄 ', tx('restart')), h('button', { class: 'nm-btn dark', onclick: () => this.showMenu() }, '🏠 ', tx('home')))); this.layer.append(this.pauseEl); } else if (this.pauseEl) this.pauseEl.remove();
  }

  _finish(r) {
    const i = this.levelIdx, sv = this.save;
    sv.stars[i] = Math.max(sv.stars[i], r.stars); sv.unlocked = Math.max(sv.unlocked, Math.min(5, i + 2)); sv.coins += r.coins; sv.goals += 1; sv.tricks += r.tricks; sv.best[i] = Math.max(sv.best[i], r.score);
    this.post({ type: 'save', save: sv });
    this.sound.play('win'); this.mode = 'result';
    if (this.shootBtn) { this.shootBtn.remove(); this.shootBtn = null; }
    const row = (a, b) => h('div', { class: 'nm-row' }, h('span', {}, a), h('span', {}, b));
    const stars = h('div', { class: 'nm-stars' }, ...[1, 2, 3].map((n) => h('span', { class: n <= r.stars ? '' : 'off' }, '⭐')));
    this.layer.append(h('div', { class: 'nm-dim', style: 'background:rgba(5,8,25,.45)' }, h('div', { class: 'nm-white' }, h('h2', {}, tx('goal')), stars, h('p', {}, tx('win')),
      row(tx('score'), I.num(r.score)), row(`🦵 ${tx('nut')}`, I.num(r.stats.nutmegs)), row(`🔵 ${tx('one')}`, I.num(r.stats.onetwos)), row(`💨 ${tx('dod')}`, I.num(r.stats.dodges)), row(`🪙 ${tx('coins')}`, `+${I.num(r.coins)}`),
      i < 4 ? h('button', { class: 'nm-red', onclick: () => this.showBrief(i + 1) }, '▶ ', tx('next')) : h('button', { class: 'nm-red', onclick: () => this.showBrief(i) }, '↻ ', tx('tryAgain')),
      h('button', { class: 'nm-navy', onclick: () => this.showMenu() }, '⌂ ', tx('menu')))));
  }

  _fail(r) {
    const i = this.levelIdx, sv = this.save; sv.coins += r.coins; this.post({ type: 'save', save: sv });
    this.mode = 'result'; if (this.shootBtn) { this.shootBtn.remove(); this.shootBtn = null; } this.hideTip();
    const saved = r.reason === 'saved';
    this.layer.append(h('div', { class: 'nm-dim', style: 'background:rgba(5,8,25,.45)' }, h('div', { class: 'nm-white' }, h('h2', {}, tx(saved ? 'savedT' : 'fullTime')), h('p', {}, tx(saved ? 'savedSub' : 'fullTimeSub')),
      r.coins ? h('div', { class: 'nm-row' }, h('span', {}, '🪙'), h('span', {}, `+${I.num(r.coins)}`)) : null,
      h('button', { class: 'nm-red', onclick: () => { this.sound.play('tap'); this.showBrief(i); } }, '↻ ', tx('tryAgain')), h('button', { class: 'nm-navy', onclick: () => this.showMenu() }, '⌂ ', tx('menu')))));
  }

  // ---------- actors ----------
  _clearActors() { for (const g of [...this.defMeshes, ...this.mateMeshes]) { this.scene.remove(g.g); if (g.lane) this.scene.remove(g.lane); if (g.lane2) this.scene.remove(g.lane2); } for (const g of this.dummyMeshes || []) this.scene.remove(g); for (const o of this.coinMeshes || []) this.scene.remove(o.g); this.defMeshes = []; this.mateMeshes = []; this.dummyMeshes = []; this.coinMeshes = []; }
  _buildActors() {
    const kits = [[0xe0242a, 0x7a0a10, 0xf0b890, 0x2a1a10], [0xd01a3a, 0x5a0a20, 0xc88a60, 0x111111], [0xe8481a, 0x6a1a0a, 0xe8a880, 0x6a3a1a], [0xc81a5a, 0x4a0a2a, 0x8a5a3a, 0x1a1a1a]];
    for (const d of this.m.defenders) {
      const k = kits[d.id % kits.length], g = makePlayer(k[0], k[1], k[2], k[3]); g.scale.setScalar(0.85); this.scene.add(g);
      const lane = mesh(geo.plane, BM(0xff1a1a, 0.4), 0, 0.09, 0, LANE_W, LANE_LEN, 1); lane.rotation.x = -Math.PI / 2; lane.visible = false; this.scene.add(lane);
      const lane2 = mesh(geo.plane, new THREE.MeshBasicMaterial({ map: this.chevTex, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide }), 0, 0.1, 0, LANE_W * 0.8, LANE_LEN, 1); lane2.rotation.x = -Math.PI / 2; lane2.visible = false; this.scene.add(lane2);
      const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.markTex, transparent: true, depthTest: false })); mark.scale.set(2.2, 2.2, 1); mark.position.y = 8; mark.visible = false; g.add(mark);
      const gap = mesh(geo.circle, BM(0xffd21a, 0.85), 0, 0.06, 0.6, 1.5, 1.5, 1.5); gap.rotation.x = -Math.PI / 2; g.add(gap);
      this.defMeshes.push({ g, lane, lane2, mark, gap, d, ph: d.id * 1.7 });
    }
    for (const mt of this.m.mates) { const g = makePlayer(0x5ac8ff, 0x1a5a9a, 0xf0b890, 0x2a3a5a); g.scale.setScalar(0.85); this.scene.add(g); const ring = mesh(geo.ring, BM(0x5ac8ff, 0.7), 0, 0.1, 0, 3.2, 3.2, 3.2); ring.rotation.x = -Math.PI / 2; g.add(ring); this.mateMeshes.push({ g, mt, ring }); }
    for (const d of this.m.dummies) {
      const g = new THREE.Group(), yel = M(0xffc61a, 0x4a3600);
      g.add(mesh(geo.cyl, M(0x3a3f4a), 0, 0.15, 0, 1.5, 0.3, 1.5), mesh(geo.cyl, yel, 0, 1.9, 0, 0.55, 3.2, 0.55), mesh(geo.sphere, yel, 0, 1.95, 0, 1.45, 1.9, 0.75), mesh(geo.sphere, yel, 0, 3.55, 0, 0.8, 0.8, 0.8));
      g.position.set(WX(d.x), 0, d.z); this.scene.add(g); this.dummyMeshes.push(g);
    }
    const coinMat = new THREE.MeshBasicMaterial({ color: 0xffc21a }), coinRim = new THREE.MeshBasicMaterial({ color: 0xffe880 });
    for (const c of this.m.coinList) {
      const g = new THREE.Group(); const disc = mesh(geo.cyl, coinMat, 0, 0, 0, 0.9, 0.16, 0.9); disc.rotation.x = Math.PI / 2; const star = mesh(geo.cyl, coinRim, 0, 0, 0.09, 0.5, 0.05, 0.5); star.rotation.x = Math.PI / 2; g.add(disc, star);
      g.position.set(WX(c.x), 0.95, c.z); this.scene.add(g); this.coinMeshes.push({ g, c });
    }
  }

  // ---------- loop ----------
  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    if (this.mode === 'play' && !this.paused && this.m) { this._input(); this._update(dt); }
    this._render(dt);
  }

  _update(dt) {
    const m = this.m;
    for (const e of m.step(dt)) {
      switch (e.type) {
        case 'tackleWarn': this.sound.play('warn'); break;
        case 'slide': this.sound.play('slide'); break;
        case 'nutmeg': this.sound.play('nutmeg'); this.say('nutmeg', 'yellow'); this._burst(this.ball.position, 0xffe04a, 14); this.sound.excite(0.6); break;
        case 'onetwo': this.sound.play('onetwo'); this.sound.play('kick'); this.say('onetwo', 'cyan'); this._burst(this.ball.position, 0x5ac8ff, 14); this.hideTip(); break;
        case 'dodge': this.sound.play('dodge'); this.say('dodge', 'cyan'); break;
        case 'stolen': this.sound.play('stolen'); this.say('stolen', 'red'); this.shake = 0.7; this.sound.excite(0.15); break;
        case 'burn': this.sound.play('burn'); this.say('burn', 'yellow'); this._burst(this.ball.position, 0xff6a1a, 24); break;
        case 'cometOn': this.sound.play('comet'); this.say('comet'); this.sound.excite(0.9); break;
        case 'cometOff': this.sound.excite(0.3); break;
        case 'shootStart': this._shootUI(); this.sound.play('whistle'); break;
        case 'coin': this.sound.play('coin'); this._burst(this.ball.position, 0xffd23a, 5); break;
        case 'blocked': this.sound.play('tap'); this.say('blocked', 'red'); this.shake = 0.3; break;
        case 'mateHint': this.tip('mate', 3600); break;
        case 'lost': this.sound.play('stolen'); break;
        case 'shoot': this.sound.play('shot'); this.hideTip(); if (this.shootBtn) { this.shootBtn.remove(); this.shootBtn = null; } break;
        case 'save': this.sound.play('save'); this.say('savedT', 'cyan'); this.shake = 0.6; break;
        case 'goal': this.sound.play('goal'); this.say('goal'); this.celebrate = 3; this.netT = 0; this.netX = e.x; this._confettiBurst(); break;
        case 'end': if (e.result.goal) this._finish(e.result); else this._fail(e.result); break;
        default: break;
      }
    }
    if (this.mode === 'play') {
      const ar = I.getLang() !== 'en'; this.hudLevel.textContent = `${tx('lv')} ${I.num(this.levelIdx + 1)}  ${ar ? LEVELS[this.levelIdx].ar : LEVELS[this.levelIdx].en}`.toUpperCase();
      if (this.lastLives !== m.lives) { this.lastLives = m.lives; [...this.livesEl.children].forEach((el, i) => el.classList.toggle('off', i >= m.lives)); }
      if (this.lastCoins !== m.coins + this.save.coins) { this.lastCoins = m.coins + this.save.coins; this.hudCoins.textContent = I.num(this.save.coins + m.coins); }
      const pr = m.progress * 100; this.progEl.firstChild.style.width = `${pr}%`; this.progEl.children[1].style.left = `${pr}%`;
      this.heatEl.firstChild.style.width = `${m.heat}%`; this.heatEl.classList.toggle('comet', m.comet); this.heatEl.classList.toggle('on', m.heat > 1);
      if (!this.shownTips.through && this.levelIdx === 0 && m.defenders.some((d) => d.state === 'chase' && Math.hypot(d.x - m.ball.x, d.z - m.ball.z) < 10)) { this.shownTips.through = true; this.tip('through', 3200); }
      if (this.shootBtn) { const ok = m.targetSafe(); if (ok !== this._ok) { this._ok = ok; this.shootBtn.className = `nm-shoot ${ok ? 'go' : 'wait'}`; this.shootBtn.textContent = ok ? tx('shootGo') : tx('shootWait'); } }
    }
  }

  _shootUI() {
    this.shootBtn = h('button', { class: 'nm-shoot wait', onclick: () => this._tap() }, tx('shootWait')); this._ok = null; this.layer.append(this.shootBtn); this.tip('tapShoot', 60000, '👆');
  }

  _spawn(pos, vx, vy, vz, life, s0, s1, color, a = 1) {
    const p = this.parts[this.partI++ % this.parts.length]; p.s.visible = true; p.s.position.copy(pos); p.v.set(vx, vy, vz); p.life = life; p.t = 0; p.z0 = s0; p.z1 = s1; p.a = a; p.s.material.color.setHex(color);
  }
  _burst(pos, color, n) { for (let i = 0; i < n; i++) { const a = Math.random() * 6.28; this._spawn(pos, Math.cos(a) * 6, 2 + Math.random() * 5, Math.sin(a) * 6, 0.7, 1.2, 0.2, color); } }
  _confettiBurst() { const cols = [0xff4a4a, 0xffe04a, 0x4aff8a, 0x4ab8ff, 0xff8aff]; const p = new THREE.Vector3(WX(this.netX || 0), 3, PITCH.L); for (let i = 0; i < 70; i++) { const a = Math.random() * 6.28; this._spawn(p, Math.cos(a) * 7, 4 + Math.random() * 8, -Math.abs(Math.sin(a)) * 7 - 2, 2.2, 0.9, 0.5, cols[i % 5]); } }

  _anim(g, st, t, moving, ph) {
    const u = g.userData; const k = t * 12 + ph;
    let lx = 0, rx = 0, la = 0, ra = 0, by = 0, brx = 0, bry = 0, sy = g.userData.sy || 0;
    g.userData.stars.visible = false; u.body.position.y = 0; u.body.position.z = 0;
    switch (st) {
      case 'chase': case 'idle': lx = moving ? Math.sin(k) * 0.9 : 0; rx = -lx; la = -lx; ra = lx; by = moving ? Math.abs(Math.sin(k)) * 0.15 : 0; brx = moving ? 0.15 : 0; break;
      case 'windup': by = -0.5; brx = -0.25; la = -2.6; ra = 1.2; lx = -0.9 + Math.sin(t * 25) * 0.15; rx = 0.4; break;
      case 'slide': brx = -1.15; by = -0.6; lx = -1.6; rx = -1.3; la = -2.4; ra = 1.5; break;
      case 'recover': brx = -0.5; by = -1.2; lx = -1.4; rx = -1.4; la = 1; ra = 1; u.stars.visible = true; break;
      case 'stun': by = Math.abs(Math.sin(t * 6)) * 0.2; bry = t * 10; la = 2.8 * 0.2; u.stars.visible = true; break;
      case 'cheer': by = Math.abs(Math.sin(t * 9)) * 0.9; la = -3; ra = -3; break;
      case 'watch': la = -0.3; ra = 0.3; break;
      case 'wait': la = -2.9 + Math.sin(t * 8) * 0.4; ra = 0.2; by = Math.abs(Math.sin(t * 3)) * 0.1; break;
      case 'pass': lx = -1.2; la = 0.4; ra = -0.4; brx = 0.1; break;
      default: break;
    }
    u.legL.rotation.x = lx; u.legR.rotation.x = rx; u.armL.rotation.x = la; u.armR.rotation.x = ra; u.body.rotation.x = brx; u.body.rotation.y = bry; u.body.position.y = by; u.stars.rotation.y = t * 6;
    void sy;
  }

  _render(dt) {
    const m = this.m, sc = this.scene, L = PITCH.L, t = this.clock;
    if (m) {
      const b = m.ball, bx = WX(b.x);
      // the ball (a short arc during a pass or a shot)
      let by = 0.55, px = bx, pz = b.z;
      if (m.pass) by += Math.sin(clamp(m.pass.t / m.pass.dur, 0, 1) * Math.PI) * 2.6;
      if (m.mode === 'shot' && m.shot) { const k = clamp(m.shot.t / m.shot.dur, 0, 1); px = WX(m.shot.x0 + (m.shot.tx - m.shot.x0) * k); pz = m.shot.z0 + (L + (m.shot.saved ? -0.6 : 1.8) - m.shot.z0) * k; by += Math.sin(k * Math.PI) * 1.1 + k * (m.shot.saved ? 0.6 : 0.9); }
      if (m.mode === 'goal') { px = WX(m.ball.x); pz = L + 1.8; by = 0.55; }
      this.ball.position.set(px, by, pz); this.ballShadow.position.set(px, 0.05, pz); this.ballShadow.scale.setScalar(1.4 - (by - 0.55) * 0.2);
      const spd = Math.hypot(b.vx, b.vz) + (m.mode === 'shot' ? 22 : 0), ax = Math.hypot(b.vx, b.vz) > 0.2 || m.mode === 'shot' ? new THREE.Vector3(b.vz || 1, 0, b.vx).normalize() : null;
      if (ax) this.ballMesh.rotateOnWorldAxis(ax, spd * dt / 0.55);
      if (!m.mode.startsWith('done') && this.mode === 'play') this.ball.visible = true;
      // heat glow, comet flames, trail
      const heat = m.heat / 100, glowing = heat > 0.05;
      this.glow.material.opacity = glowing ? 0.25 + heat * 0.65 : 0; this.glow.scale.setScalar(2.2 + heat * 3.4 + (m.comet ? 1.4 + Math.sin(t * 30) * 0.3 : 0));
      this.glow.material.color.setHex(m.comet ? 0xff5a1a : 0xffc040);
      this.ballLight.position.set(px, 2.5, pz); this.ballLight.intensity = 0.4 + heat * 3 + (m.comet ? 2 : 0); this.ballLight.color.setHex(m.comet ? 0xff7a30 : glowing ? 0xffc060 : this.skinDef.trail);
      const pp = this.ball.position;
      if (this.mode === 'play' && !this.paused) {
        if (m.comet) for (let i = 0; i < 3; i++) this._spawn(pp, (Math.random() - 0.5) * 2, 1.5 + Math.random() * 2, -b.vz * 0.15 - Math.random() * 2, 0.55, 1.8, 0.2, i % 2 ? 0xff5a1a : 0xffd23a, 0.9);
        else if (spd > 3 && (this.partI & 1) === 0) this._spawn(pp, 0, 0.2, 0, 0.45, 0.9 + heat, 0.1, this.skinDef.trail, 0.6);
        else this.partI++;
      }
      // defenders
      for (const o of this.defMeshes) {
        const d = o.d, g = o.g; g.position.set(WX(d.x), 0, d.z); g.rotation.y = Math.atan2(-d.hx, d.hz);
        const lane = d.state === 'windup' || d.state === 'slide';
        o.lane.visible = o.lane2.visible = lane;
        if (lane) {
          const mx = d.state === 'slide' ? d.sx : d.x, mz = d.state === 'slide' ? d.sz : d.z;
          const cx = mx + d.lx * LANE_LEN / 2, cz = mz + d.lz * LANE_LEN / 2;
          for (const l of [o.lane, o.lane2]) { l.position.x = WX(cx); l.position.z = cz; l.rotation.z = Math.atan2(d.lx, d.lz); }
          const ramp = d.state === 'windup' ? clamp(d.wt / m.def.windup, 0, 1) : 0.4;
          o.lane.material.opacity = (0.2 + 0.4 * Math.abs(Math.sin(t * (10 + ramp * 22)))) * (d.state === 'slide' ? 0.6 : 1);
          o.lane2.material.opacity = 0.25 + 0.5 * ramp * Math.abs(Math.sin(t * 20));
        }
        o.gap.visible = d.state !== 'slide' && d.state !== 'stun' && !d.nutmegged; o.gap.material.opacity = 0.55 + 0.3 * Math.sin(t * 5 + o.ph);
        o.mark.visible = d.state === 'windup'; o.mark.position.y = 8 + Math.abs(Math.sin(t * 14)) * 0.6;
        if (d.state === 'slide') { g.rotation.y = Math.atan2(-d.lx, d.lz); g.position.y = 0.3; }
        const moving = d.state === 'chase';
        this._anim(g, d.state, t, moving, o.ph);
        g.userData.shadow.visible = d.state !== 'slide';
      }
      for (const o of this.coinMeshes) { o.g.visible = !o.c.got; o.g.rotation.y = t * 3 + o.c.z; o.g.position.y = 0.95 + Math.sin(t * 4 + o.c.z) * 0.12; }
      for (const o of this.mateMeshes) { const q = o.mt; o.g.position.set(WX(q.x), 0, q.z); o.g.rotation.y = Math.atan2(WX(b.x) - WX(q.x), b.z - q.z); this._anim(o.g, q.state, t, false, 0); o.ring.visible = q.state === 'wait'; o.ring.scale.setScalar(3.2 + Math.sin(t * 5) * 0.3); }
      // keeper, target, reach
      const shootish = m.mode === 'shoot' || m.mode === 'shot';
      this.keeperG.position.x = WX(m.keeper.x);
      this.keeperG.rotation.z = m.mode === 'shot' ? -WXdir(m.keeper.dir) * 1.15 * clamp(m.shot ? m.shot.t / 0.25 : 0, 0, 1) : 0;
      this.keeperG.position.y = m.mode === 'shot' ? Math.sin(clamp((m.shot ? m.shot.t : 0) / 0.5, 0, 1) * Math.PI) * 1.2 : 0;
      this._anim(this.keeperG, m.mode === 'goal' ? 'wait' : 'watch', t, false, 0);
      this.keeperG.userData.armL.rotation.x = this.keeperG.userData.armR.rotation.x = -1.2 + Math.sin(t * 6) * 0.2; this.keeperG.userData.armL.rotation.z = -0.8; this.keeperG.userData.armR.rotation.z = 0.8;
      const show = m.mode === 'shoot';
      this.reachWall.visible = this.reachFloor.visible = this.targetRing.visible = this.safeWall.visible = show;
      if (show) {
        const r = m.reachNow(); this.reachWall.scale.x = r * 2; this.reachWall.position.x = WX(m.keeper.x); this.reachFloor.scale.x = r * 2; this.reachFloor.position.x = WX(m.keeper.x);
        this.reachWall.material.opacity = 0.22 + 0.12 * Math.sin(t * 8);
        const safe = m.targetSafe(); this.targetRing.position.x = WX(m.target.x); this.targetRing.position.y = 1.8 + Math.sin(t * 3) * 0.1;
        for (const c of this.targetRing.children) c.material.color.setHex(safe ? 0x40ff70 : 0xff7a3a);
        this.targetRing.scale.setScalar(1 + (safe ? 0.15 * Math.sin(t * 12) : 0));
      }
      void shootish;
      this._camera(dt, m);
      this._net(dt);
    } else {
      // menu: slow flyover of the pitch
      this.menuT = (this.menuT || 0) + dt; const a = this.menuT * 0.25;
      this.ball.position.set(0, 0.55, 6); this.ballShadow.position.set(0, 0.05, 6); this.ballMesh.rotation.y += dt; this.glow.material.opacity = 0;
      this.camera.position.set(Math.sin(a) * 22, 12 + Math.sin(a * 0.7) * 2, 6 - Math.cos(a) * 26); this.camera.lookAt(0, 3, 14); this.ballLight.intensity = 0;
      if (this._crowdWas) { this._crowdMat(t, 0); this._crowdWas = false; }
    }
    // particles
    for (const p of this.parts) {
      if (!p.s.visible) continue;
      p.t += dt; if (p.t >= p.life) { p.s.visible = false; continue; }
      const k = p.t / p.life; p.s.position.addScaledVector(p.v, dt); p.v.y -= (p.a === 1 ? 6 : 0) * dt;
      p.s.scale.setScalar(p.z0 + (p.z1 - p.z0) * k); p.s.material.opacity = (1 - k) * Math.min(1, p.a);
    }
    if (this.celebrate > 0) { this.celebrate -= dt; this._crowdMat(t, 0.9); this._crowdWas = true; } else if (this._crowdWas && this.m) { this._crowdMat(t, 0); this._crowdWas = false; }
    this.renderer.render(sc, this.camera);
  }

  _camera(dt, m) {
    const b = this.ball.position, c = this.camera, L = PITCH.L, pt = this.portrait;
    let px, py, pz, lx, ly, lz;
    if (m.mode === 'goal') { const k = clamp(this.celebrate, 0, 3); px = b.x * 0.3 + Math.sin(this.clock * 0.9) * 8; py = 6 + (3 - k) * 0.8; pz = L - 15; lx = b.x * 0.4; ly = 2; lz = L; }
    else if (m.mode === 'shoot' || m.mode === 'shot') { px = b.x * 0.3; py = pt ? 10 : 7; pz = L - (pt ? 23 : 17); lx = 0; ly = 1.2; lz = L; }
    else { px = b.x * 0.75; py = pt ? 17 : 14; pz = b.z - (pt ? 10.5 : 10); lx = b.x * 0.8; ly = 0; lz = b.z + (pt ? 9 : 8); }
    if (!this.camInit) { this.cp = new THREE.Vector3(px, py, pz); this.cl = new THREE.Vector3(lx, ly, lz); this.camInit = true; }
    const k = 1 - Math.exp(-dt * (m.mode === 'play' ? 7 : 3.5));
    this.cp.x += (px - this.cp.x) * k; this.cp.y += (py - this.cp.y) * k; this.cp.z += (pz - this.cp.z) * k;
    this.cl.x += (lx - this.cl.x) * k; this.cl.y += (ly - this.cl.y) * k; this.cl.z += (lz - this.cl.z) * k;
    this.shake = Math.max(0, (this.shake || 0) - dt * 2); const sh = this.shake * 0.6;
    c.position.set(this.cp.x + (Math.random() - 0.5) * sh, this.cp.y + (Math.random() - 0.5) * sh, this.cp.z); c.lookAt(this.cl);
  }

  _net(dt) {
    if (this.netT > 2) return;
    this.netT += dt; const pos = this.netBack.geometry.attributes.position, base = this.netBase, cx = WX(this.netX || 0), cy = PITCH.GOAL_H / 2;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3], y = base[i * 3 + 1], d = Math.hypot(x - cx, y);
      pos.setZ(i, Math.sin(d * 2.2 - this.netT * 14) * Math.exp(-this.netT * 2.4) * 1.1 * Math.exp(-d * 0.15));
    }
    void cy; pos.needsUpdate = true;
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.dead = true; this.renderer.setAnimationLoop(null); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}
const WXdir = (d) => -d;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.NutmegRush = api;
export default api;
