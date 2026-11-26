// «سكاي كابي» — SKY CAPY. Entry: window.SkyCapy.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A top-down bubble shoot-'em-up (like the owner's video, drawn from scratch): a calm capybara pilot flies a teal seaplane over floating
// islands and pops sky-pirate rats in balloons, gyrocopters and gliders with streams of bubbles. Rescued songbirds join as wings and shoot
// on their own; capsules, pearls and a screen-clearing Bubble Storm; three stages then a harder loop; HP bar, combo multipliers, stage
// ranks, a top-10 table with initials, and a hangar where feathers buy upgrades and paint. 2D canvas, all art and sound made in code.
import { Run, W, H, UPGRADES, PAINTS, ENEMY, normalizeSave, upgradeLevel, buyUpgrade, buyPaint, qualifies, addScore } from './sim.js';
import { paintSky, drawCloud, drawIsland, drawPlane, drawEnemy, drawBoss, drawBird, drawCageItem, drawPickup, drawBubble, drawEnemyBullet, drawPopBurst, PAINT_COLORS, ART } from './art.js';
import { loadArt } from '../../cozy_kit/art.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';

const CSS = `
.sc-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#1d2a4a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#8ac8ff}
.sc-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sc-layer{position:absolute;inset:0;pointer-events:none}
.sc-layer button,.sc-layer .sc-card,.sc-layer .sc-btnrow{pointer-events:auto}
.sc-hud{position:absolute;left:0;right:0;top:max(calc(var(--u)*1.5),env(safe-area-inset-top));padding:0 calc(var(--u)*2);display:flex;gap:calc(var(--u)*2);align-items:center;direction:ltr}
.sc-hp{flex:1;display:flex;align-items:center;gap:calc(var(--u)*1.2);max-width:calc(var(--u)*60)}
.sc-hp i{font-style:normal;font-size:calc(var(--u)*5);filter:drop-shadow(0 2px 2px rgba(0,0,0,.3))}
.sc-bar{flex:1;height:calc(var(--u)*3.4);border-radius:99px;background:rgba(29,42,74,.55);border:calc(var(--u)*.4) solid #fff;overflow:hidden;position:relative}
.sc-bar b{display:block;height:100%;background:linear-gradient(180deg,#8af06a,#3fb82a);border-radius:99px;transition:width .15s}
.sc-bar b.low{background:linear-gradient(180deg,#ffb06a,#e8503a)}
.sc-bar span{position:absolute;right:calc(var(--u)*1.2);top:50%;transform:translateY(-50%);font-weight:900;font-size:calc(var(--u)*2.4);color:#fff;text-shadow:0 1px 2px #000}
.sc-score{font-weight:900;font-size:calc(var(--u)*6);color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #1d2a4a;paint-order:stroke fill;min-width:calc(var(--u)*24);text-align:right}
.sc-mult{position:absolute;right:calc(var(--u)*2);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*11.6);font-weight:900;font-size:calc(var(--u)*5);color:#ff5a4a;-webkit-text-stroke:calc(var(--u)*.4) #fff;paint-order:stroke fill;opacity:0;transition:opacity .2s}
.sc-mult.show{opacity:1}
.sc-prog{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*10.4);height:calc(var(--u)*.9);border-radius:9px;background:rgba(255,255,255,.4)}
.sc-prog b{display:block;height:100%;border-radius:9px;background:#ffd23a;width:0}
.sc-round{width:calc(var(--u)*9);height:calc(var(--u)*9);flex:none;border-radius:50%;font-size:calc(var(--u)*4.2);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,#fff,#cfe0f8);border:calc(var(--u)*.5) solid #1d2a4a;color:#1d2a4a;box-shadow:0 calc(var(--u)*.5) 0 #1d2a4a;pointer-events:auto}
.sc-round:active{transform:translateY(calc(var(--u)*.4))}
.sc-fire,.sc-storm{position:absolute;bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;cursor:pointer;padding:0;border:calc(var(--u)*.7) solid #fff;box-shadow:0 calc(var(--u)*.7) 0 rgba(29,42,74,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:none;pointer-events:auto}
.sc-fire{right:calc(var(--u)*4);background:radial-gradient(circle at 35% 30%,#ff8a7a,#e8323a)}
.sc-storm{right:calc(var(--u)*24);background:radial-gradient(circle at 35% 30%,#8ad8ff,#2a7ae8)}
.sc-storm.off{filter:grayscale(1);opacity:.55}
.sc-storm small{font-size:calc(var(--u)*2.6)}
.sc-ring{position:absolute;inset:calc(var(--u)*-1.6);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.9);clip-path:inset(0 0 calc((1 - var(--fill,1)) * 100%) 0)}
.sc-toast{position:absolute;left:calc(var(--u)*3);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*13);max-width:calc(var(--u)*70);background:#fff;border:calc(var(--u)*.5) solid #1d2a4a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.4) calc(var(--u)*2.4);font-weight:800;font-size:calc(var(--u)*3.4);box-shadow:0 calc(var(--u)*.6) 0 rgba(29,42,74,.5);opacity:0;transform:translateY(calc(var(--u)*-2));transition:opacity .3s,transform .3s;pointer-events:none}
.sc-toast.show{opacity:1;transform:none}
.sc-banner{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%) scale(.9);font-weight:900;font-size:calc(var(--u)*8);color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #1d2a4a;text-align:center;white-space:nowrap;opacity:0;transition:opacity .3s,transform .3s;pointer-events:none}
.sc-banner.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.sc-banner small{display:block;font-size:calc(var(--u)*4);color:#ffd23a}
.sc-dim{position:absolute;inset:0;background:rgba(20,40,90,.5);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.sc-card{background:linear-gradient(180deg,#fdf6e4,#f2e4c4);border:calc(var(--u)*.7) solid #1d2a4a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*74);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*1.6) calc(var(--u)*5) rgba(10,20,60,.5);color:#1d2a4a}
.sc-logo{font-size:calc(var(--u)*11);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.9) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #1d2a4a;text-align:center;line-height:1}
.sc-title{font-size:calc(var(--u)*6.4);font-weight:900;color:#e8503a;text-align:center}
.sc-small{font-size:calc(var(--u)*3.6);font-weight:700;text-align:center}
.sc-rank{font-size:calc(var(--u)*26);font-weight:900;line-height:1;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*1) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1d2a4a}
.sc-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:calc(var(--u)*.6) solid #1d2a4a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#ff8a7a,#e8323a);box-shadow:0 calc(var(--u)*.8) 0 #1d2a4a;width:100%}
.sc-btn.blue{background:linear-gradient(180deg,#6ac8ff,#2a7ae8)}
.sc-btn.green{background:linear-gradient(180deg,#7ae88a,#2fb85a)}
.sc-btn:active{transform:translateY(calc(var(--u)*.5))}
.sc-btn:focus-visible,.sc-round:focus-visible,.sc-tab:focus-visible,.sc-item button:focus-visible{outline:calc(var(--u)*.7) solid #3a8ae8;outline-offset:calc(var(--u)*.5)}
.sc-ribbon{background:linear-gradient(180deg,#ff8a7a,#e8323a);border:calc(var(--u)*.6) solid #1d2a4a;color:#fff;font-weight:900;font-size:calc(var(--u)*5);padding:calc(var(--u)*.8) calc(var(--u)*6);border-radius:calc(var(--u)*1.4);text-shadow:0 2px 0 #1d2a4a}
.sc-tabs{display:flex;width:100%;gap:calc(var(--u)*1);background:#e0cfa8;border-radius:99px;padding:calc(var(--u)*.6)}
.sc-tab{flex:1;border:none;border-radius:99px;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1.2);background:transparent;color:#7a6a4a;cursor:pointer}
.sc-tab.on{background:linear-gradient(180deg,#ff8a7a,#e8323a);color:#fff;box-shadow:0 calc(var(--u)*.4) 0 #1d2a4a}
.sc-list{display:flex;flex-direction:column;gap:calc(var(--u)*1.2);width:100%;max-height:calc(var(--u)*50);overflow:auto}
.sc-item{display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.4) solid #d8c8a0;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2) calc(var(--u)*2)}
.sc-item .ic{width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:50%;background:#e0f4ff;border:calc(var(--u)*.4) solid #1d2a4a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);flex:none}
.sc-item .tx{flex:1;min-width:0;font-weight:800;font-size:calc(var(--u)*3.4)}
.sc-item .tx small{display:block;font-weight:600;font-size:calc(var(--u)*2.8);color:#6a5a3a}
.sc-pips{display:flex;gap:calc(var(--u)*.6);margin-top:calc(var(--u)*.4)}
.sc-pips i{width:calc(var(--u)*3);height:calc(var(--u)*1.3);border-radius:9px;background:#d8c8a0}.sc-pips i.on{background:#3fb82a}
.sc-item button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:calc(var(--u)*.4) solid #1d2a4a;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2.4);background:linear-gradient(180deg,#4adcc0,#1aa890);cursor:pointer;min-width:calc(var(--u)*13)}
.sc-item button.no{filter:grayscale(1);opacity:.6}
.sc-paints{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.6);width:100%}
.sc-paint{background:#fff;border:calc(var(--u)*.4) solid #d8c8a0;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);font-family:inherit;font-weight:800;font-size:calc(var(--u)*2.6);cursor:pointer;color:#1d2a4a}
.sc-paint i{width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:50%;border:calc(var(--u)*.5) solid #1d2a4a}
.sc-paint.on{border-color:#3fb82a;background:#eaffea}
.sc-table{width:100%;border-collapse:collapse;font-weight:800;font-size:calc(var(--u)*3.6)}
.sc-table td{padding:calc(var(--u)*.7) calc(var(--u)*1.4);border-bottom:calc(var(--u)*.3) dashed #d8c8a0}
.sc-table td:first-child{color:#e8503a;width:calc(var(--u)*7)}
.sc-table td:nth-child(3){text-align:right}
.sc-init{display:flex;gap:calc(var(--u)*2);direction:ltr}
.sc-init div{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6)}
.sc-init button{font-family:inherit;font-weight:900;border:calc(var(--u)*.5) solid #1d2a4a;background:#fff;border-radius:calc(var(--u)*1.6);width:calc(var(--u)*10);height:calc(var(--u)*7);font-size:calc(var(--u)*3.4);cursor:pointer}
.sc-init span{font-weight:900;font-size:calc(var(--u)*10);color:#e8503a;-webkit-text-stroke:calc(var(--u)*.5) #1d2a4a;paint-order:stroke fill}
.sc-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*26);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.sc-toast{display:flex;align-items:center;gap:calc(var(--u)*2)}
.sc-toast .pip{flex:none;width:calc(var(--u)*8.5);height:calc(var(--u)*8.5);border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8a7a,#c8222a);border:calc(var(--u)*.5) solid #1d2a4a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*4.6)}
.sc-ach{position:absolute;left:50%;top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*13);transform:translateX(-50%) translateY(calc(var(--u)*-2));background:linear-gradient(180deg,#3a4a7a,#1d2a4a);border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*3.4);color:#ffd23a;font-weight:900;font-size:calc(var(--u)*3);text-align:center;opacity:0;transition:opacity .3s,transform .3s;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.sc-ach small{display:block;color:#fff;font-size:calc(var(--u)*3.4)}
.sc-ach.show{opacity:1;transform:translateX(-50%)}
.sc-prog b{position:relative}
.sc-prog b::after{content:'';position:absolute;right:calc(var(--u)*-1.3);top:50%;transform:translateY(-50%);width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:50%;background:#ff5a4a;border:calc(var(--u)*.4) solid #fff}
.sc-thief{position:absolute;left:50%;top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*12.6);transform:translateX(-50%);width:calc(var(--u)*46);display:none;pointer-events:none}
.sc-thief.show{display:block}
.sc-thief span{display:block;text-align:center;font-weight:900;font-size:calc(var(--u)*3.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #1d2a4a;paint-order:stroke fill}
.sc-thief i{display:block;height:calc(var(--u)*2);border-radius:9px;background:rgba(29,42,74,.55);border:calc(var(--u)*.3) solid #fff;overflow:hidden}
.sc-thief b{display:block;height:100%;background:linear-gradient(180deg,#6af0d0,#1aa890)}
.sc-toast.low{top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*19.5)}
.sc-fire.empty{background:radial-gradient(circle at 35% 30%,#b8c0cc,#7a8494);opacity:.85}
.sc-menu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*2.4);pointer-events:none;padding-bottom:calc(var(--u)*14)}
.sc-menu>*{pointer-events:auto}
.sc-biglogo{font-size:calc(var(--u)*17);font-weight:900;line-height:.95;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*1.3) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.4) 0 #1d2a4a,0 calc(var(--u)*2.4) calc(var(--u)*1.2) rgba(0,0,0,.25);text-align:center}
.sc-bestpill{background:linear-gradient(180deg,#e8323a,#b8222a);border:calc(var(--u)*.5) solid #fff;color:#fff;font-weight:900;font-size:calc(var(--u)*3.4);border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*4);box-shadow:0 calc(var(--u)*.5) 0 #1d2a4a}
.sc-playbtn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*9);color:#fff;border:calc(var(--u)*.9) solid #1d2a4a;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*1.6) calc(var(--u)*16);cursor:pointer;background:linear-gradient(180deg,#ff8a7a,#e8323a);box-shadow:0 calc(var(--u)*1.1) 0 #1d2a4a;text-shadow:0 calc(var(--u)*.5) 0 #1d2a4a}
.sc-playbtn:active{transform:translateY(calc(var(--u)*.6))}
.sc-icons{display:flex;gap:calc(var(--u)*4)}
.sc-icon{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);background:none;border:none;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);color:#fff;text-shadow:0 1px 3px #1d2a4a;cursor:pointer;padding:0}
.sc-icon i{font-style:normal;width:calc(var(--u)*12);height:calc(var(--u)*12);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*6);background:linear-gradient(180deg,#6ac8ff,#2a7ae8);border:calc(var(--u)*.6) solid #fff;box-shadow:0 calc(var(--u)*.6) 0 #1d2a4a}
.sc-icon:focus-visible i{outline:calc(var(--u)*.7) solid #ffd23a}
.sc-dots{display:flex;gap:calc(var(--u)*1.4);justify-content:center}
.sc-dots i{width:calc(var(--u)*2);height:calc(var(--u)*2);border-radius:50%;background:#d8c8a0}.sc-dots i.on{background:#e8503a}
.sc-row{display:flex;gap:calc(var(--u)*2);width:100%}.sc-row .sc-btn{flex:1;padding-left:calc(var(--u)*1);padding-right:calc(var(--u)*1);font-size:calc(var(--u)*4)}
.sc-bigscore{font-size:calc(var(--u)*14);font-weight:900;color:#e8503a;-webkit-text-stroke:calc(var(--u)*.7) #1d2a4a;paint-order:stroke fill;line-height:1}
.sc-pill{background:#1d2a4a;color:#ffd23a;font-weight:900;font-size:calc(var(--u)*3.4);border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3)}
.sc-table td:nth-child(3){text-align:right;color:#6a5a3a;font-size:calc(var(--u)*3)}
@media (orientation:landscape){.sc-card{width:calc(var(--u)*110);max-width:94vw}.sc-list{max-height:calc(var(--u)*38)}.sc-logo{font-size:calc(var(--u)*9)}}
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

const UP_ICON = { engine: '✈️', tank: '🫧', power: '💥', armor: '🛡️', magnet: '🧲', storm: '🌪️' };
const UP_NAME = { engine: ['engine', 'engineD'], tank: ['tank', 'tankD'], power: ['power', 'powerD'], armor: ['armor', 'armorD'], magnet: ['magnet', 'magnetD'], storm: ['stormUp', 'stormUpD'] };

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
    if (!document.getElementById('sc-style')) document.head.append(h('style', { id: 'sc-style' }, CSS));
    this.root = h('div', { class: 'sc-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'sc-layer' });
    this.root.append(this.layer);
    this.mode = 'menu';
    this.run = null;
    this.fx = []; this.texts = []; this.pops = new Map();
    this.scroll = 0;
    this.clouds = Array.from({ length: 12 }, () => ({ x: Math.random(), y: Math.random(), s: 0.7 + Math.random() * 1.3, v: 0.2 + Math.random() * 0.5 }));
    this.islands = Array.from({ length: 6 }, (_, i) => ({ x: Math.random(), y: i / 6, s: 0.12 + Math.random() * 0.1, k: i % 3 }));
    this.input = { tx: W / 2, ty: H - 30, fire: false };
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.t0 = performance.now();
    this.last = this.t0;
    Promise.all([this._fonts(), loadArt(this.base, ['clouds', 'balloon']).then((a) => Object.assign(ART, a))]).then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch * 0.62) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.sc = Math.min(this.cw / W, this.ch / H);
    this.fx0 = (this.cw - W * this.sc) / 2;
    this.fy0 = (this.ch - H * this.sc) / 2;
    this.skyKey = '';
  }

  _sky() {
    const st = this.run ? this.run.stage : 1;
    const key = `${st}${this.cv.width}x${this.cv.height}`;
    if (this.skyKey !== key) { this.sky = paintSky(this.cv.width, this.cv.height, st); this.skyKey = key; }
    return this.sky;
  }

  X(x) { return this.fx0 + x * this.sc; }
  Y(y) { return this.fy0 + y * this.sc; }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    const toWorld = (e) => { const r = root.getBoundingClientRect(); return [((e.clientX - r.left) - this.fx0) / this.sc, ((e.clientY - r.top) - this.fy0) / this.sc]; };
    let drag = false;
    root.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; if (this.mode !== 'play') return; drag = true; const [x, y] = toWorld(e); this.input.tx = x; this.input.ty = y - 14; this._hideHint(); });
    root.addEventListener('pointermove', (e) => { if (this.mode !== 'play') return; if (!drag && e.pointerType === 'touch') return; const [x, y] = toWorld(e); this.input.tx = x; this.input.ty = y - (e.pointerType === 'touch' ? 14 : 0); });
    const up = () => { drag = false; };
    root.addEventListener('pointerup', up); root.addEventListener('pointercancel', up);
    this.keys = new Set();
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's', ' ', 'z', 'x'].includes(k)) { e.preventDefault(); if (e.type === 'keydown') this.keys.add(k); else this.keys.delete(k); }
      if (e.type === 'keydown' && (k === 'x' || k === 'b')) this._storm();
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this._pause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'sc-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _keyMove(dt) {
    const k = this.keys;
    if (!k.size) return;
    const sp = 70 * dt;
    if (k.has('arrowleft') || k.has('a')) this.input.tx -= sp;
    if (k.has('arrowright') || k.has('d')) this.input.tx += sp;
    if (k.has('arrowup') || k.has('w')) this.input.ty -= sp;
    if (k.has('arrowdown') || k.has('s')) this.input.ty += sp;
    this.input.tx = Math.max(6, Math.min(W - 6, this.input.tx)); this.input.ty = Math.max(24, Math.min(H - 8, this.input.ty));
    this.input.fire = this.input.fire || k.has(' ') || k.has('z');
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _soundBtn() {
    const b = h('button', { class: 'sc-round', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }
  _exitBtn() { return h('button', { class: 'sc-round', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'); }
  _topRow() { return h('div', { class: 'sc-hud', style: 'justify-content:space-between' }, this._exitBtn(), h('div', { class: 'sc-score' }, `🪶 ${num(this.save.feathers)}`), this._soundBtn()); }

  showMenu() {
    this.mode = 'menu';
    this.run = null;
    this.sound.setMode('menu');
    this._clear();
    this.layer.append(this._topRow(),
      h('div', { class: 'sc-menu' },
        h('div', { class: 'sc-biglogo' }, t('title')),
        h('div', { class: 'sc-bestpill' }, `🏆 ${t('best')} ${num(this.save.best)}`),
        h('button', { class: 'sc-playbtn', onclick: () => this.startRun() }, t('play')),
        h('div', { class: 'sc-icons' },
          h('button', { class: 'sc-icon', onclick: () => this.showHangar() }, h('i', {}, '🔧'), t('hangar')),
          h('button', { class: 'sc-icon', onclick: () => this.showTop() }, h('i', {}, '🏆'), t('top10')))));
  }

  showTop() {
    this._clear();
    const top = this.save.top;
    this.layer.append(this._topRow(), h('div', { class: 'sc-dim', style: 'background:none' }, h('div', { class: 'sc-card' },
      h('div', { class: 'sc-ribbon' }, t('top10')),
      top.length ? h('table', { class: 'sc-table' }, top.map((e, i) => h('tr', {}, h('td', {}, num(i + 1)), h('td', {}, e.name), h('td', {}, num(e.score)), h('td', {}, `${t('stageWord')} ${num(e.stage || 1)}`)))) : h('div', { class: 'sc-small' }, t('empty')),
      h('div', { class: 'sc-row' }, h('button', { class: 'sc-btn blue', onclick: () => this.showMenu() }, t('back')), h('button', { class: 'sc-btn', onclick: () => this.showHangar() }, t('hangar')), h('button', { class: 'sc-btn green', onclick: () => this.startRun() }, t('again'))))));
  }

  showHangar(tab = 'up') {
    this._clear();
    const items = tab === 'up'
      ? h('div', { class: 'sc-list' }, UPGRADES.map((u) => {
        const lv = upgradeLevel(this.save, u.id);
        const cost = u.cost[lv];
        const [n, d] = UP_NAME[u.id];
        const can = lv < 3 && this.save.feathers >= cost;
        return h('div', { class: 'sc-item' }, h('div', { class: 'ic' }, UP_ICON[u.id]),
          h('div', { class: 'tx' }, t(n), h('small', {}, t(d)), h('div', { class: 'sc-pips' }, [0, 1, 2].map((k) => h('i', { class: k < lv ? 'on' : '' })))),
          h('button', { class: can ? '' : 'no', onclick: () => { if (lv >= 3) return; const r = buyUpgrade(this.save, u.id); if (r.ok) { this.sound.play('capsule'); this._saveNow(); } else this.sound.play('no'); this.showHangar('up'); } }, lv >= 3 ? t('max') : `🪶 ${num(cost)}`));
      }))
      : h('div', { class: 'sc-paints' }, PAINTS.map((p) => {
        const owned = p.cost === 0 || this.save.owned.includes(p.id);
        return h('button', { class: `sc-paint${this.save.paint === p.id ? ' on' : ''}`, onclick: () => { const r = buyPaint(this.save, p.id); if (r.ok) { this.sound.play('pearl'); this._saveNow(); } else this.sound.play('no'); this.showHangar('paint'); } },
          h('i', { style: `background:${PAINT_COLORS[p.id][0]}` }), t(p.id), h('span', {}, this.save.paint === p.id ? t('on') : owned ? '' : `🪶 ${num(p.cost)}`));
      }));
    this.layer.append(this._topRow(), h('div', { class: 'sc-dim', style: 'background:none' }, h('div', { class: 'sc-card' },
      h('div', { class: 'sc-ribbon' }, t('hangar')),
      h('div', { class: 'sc-tabs' }, h('button', { class: `sc-tab${tab === 'up' ? ' on' : ''}`, onclick: () => this.showHangar('up') }, t('upgrades')), h('button', { class: `sc-tab${tab === 'paint' ? ' on' : ''}`, onclick: () => this.showHangar('paint') }, t('paint'))),
      items,
      h('button', { class: 'sc-btn blue', onclick: () => this.showMenu() }, t('back')))));
  }

  startRun() {
    this.run = new Run(this.save, Math.floor(Math.random() * 1e9), this.easy);
    this.mode = 'play';
    this.fx = []; this.texts = []; this.pops.clear();
    this.input = { tx: W / 2, ty: H - 30, fire: false };
    this.shown = new Set();
    this._buildHud();
    this.sound.setMode('play');
    this.tilt = 0;
    this._story(() => { this.mode = 'play'; this.last = performance.now(); this._stageIntro(); });
  }

  /** The little story cards before stage 1 (SKIP / NEXT, like the video). */
  _story(done) {
    const slides = [['stage1', 'story1'], ['pirates', 'story2'], ['meetPip', 'story3']];
    let i = 0;
    this.mode = 'story';
    const card = h('div', { class: 'sc-dim', style: 'background:rgba(20,40,90,.55)' });
    const show = () => {
      const [ti, tx] = slides[i];
      const last = i === slides.length - 1;
      card.replaceChildren(h('div', { class: 'sc-card' },
        h('div', { class: 'sc-ribbon' }, t(ti)),
        h('div', { class: 'sc-small' }, t(tx)),
        h('div', { class: 'sc-dots' }, slides.map((_, k) => h('i', { class: k === i ? 'on' : '' }))),
        h('div', { class: 'sc-row' },
          h('button', { class: 'sc-btn blue', onclick: () => { card.remove(); done(); } }, t('skip')),
          h('button', { class: 'sc-btn', onclick: () => { if (last) { card.remove(); done(); } else { i++; show(); } } }, last ? t('go') : t('next')))));
    };
    show();
    this.layer.append(card);
  }

  _buildHud() {
    this._clear();
    this.hud = { hp: h('b'), hpT: h('span'), score: h('div', { class: 'sc-score' }, '0'), mult: h('div', { class: 'sc-mult' }), prog: h('b'), ring: h('i', { class: 'sc-ring' }), storm: h('button', { class: 'sc-storm' }), toast: h('div', { class: 'sc-toast' }), ach: h('div', { class: 'sc-ach' }), banner: h('div', { class: 'sc-banner' }), thiefBar: h('b'), thiefBox: h('div', { class: 'sc-thief' }), fire: null };
    const fire = h('button', { class: 'sc-fire', 'aria-label': t('fire') }, this.hud.ring, t('fire'));
    this.hud.fire = fire;
    this.hud.thiefBox.append(h('span', {}, t('thief')), h('i', {}, this.hud.thiefBar));
    const down = (e) => { e.preventDefault(); this.input.fire = true; fire.setPointerCapture?.(e.pointerId); };
    const up = () => { this.input.fire = false; };
    fire.addEventListener('pointerdown', down); fire.addEventListener('pointerup', up); fire.addEventListener('pointercancel', up); fire.addEventListener('pointerleave', up);
    this.hud.storm.addEventListener('click', (e) => { e.stopPropagation(); this._storm(); });
    this.layer.append(
      h('div', { class: 'sc-hud' },
        h('div', { class: 'sc-hp' }, h('i', {}, '❤️'), h('div', { class: 'sc-bar' }, this.hud.hp, this.hud.hpT)),
        this.hud.score, h('button', { class: 'sc-round', 'aria-label': t('pause'), onclick: () => this._pause() }, '⏸')),
      h('div', { class: 'sc-prog' }, this.hud.prog), this.hud.mult, this.hud.thiefBox, this.hud.toast, this.hud.ach, this.hud.banner, fire, this.hud.storm);
    this._hudUpdate();
  }

  _hudUpdate() {
    const r = this.run;
    if (!r || !this.hud) return;
    const f = Math.max(0, r.hp / r.stats.maxHp);
    this.hud.hp.style.width = `${f * 100}%`;
    this.hud.hp.classList.toggle('low', f < 0.35);
    this.hud.hpT.textContent = `${Math.round(f * 100)}%`;
    this.hud.score.textContent = num(r.score);
    this.hud.prog.style.width = `${r.progress * 100}%`;
    this.hud.mult.textContent = `X${r.mult}`;
    this.hud.mult.classList.toggle('show', r.mult > 1);
    this.hud.ring.style.setProperty('--fill', String(r.tank));
    this.hud.fire.classList.toggle('empty', r.tank < 0.05);
    const th = r.thief;
    this.hud.thiefBox.classList.toggle('show', !!th);
    this.hud.toast.classList.toggle('low', !!th);
    if (th) this.hud.thiefBar.style.width = `${(1 - th.k) * 100}%`;
    this.hud.storm.className = `sc-storm${r.storms > 0 ? '' : ' off'}`;
    this.hud.storm.replaceChildren(h('span', {}, '🌪️'), h('small', {}, `${t('storm')} ${num(r.storms)}`));
  }

  _toast(text, secs = 2.8) {
    if (!this.hud) return;
    this.hud.toast.replaceChildren(h('span', { class: 'pip' }, '🐦'), h('span', {}, text)); // Pip, the red songbird, talks (like the video)
    this.hud.toast.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.hud && this.hud.toast.classList.remove('show'), secs * 1000);
  }
  _ach(title, secs = 2.8) {
    if (!this.hud) return;
    this.hud.ach.replaceChildren(t('ach'), h('small', {}, title));
    this.hud.ach.classList.add('show');
    clearTimeout(this._at);
    this._at = setTimeout(() => this.hud && this.hud.ach.classList.remove('show'), secs * 1000);
  }
  _hideHint() { if (this.hud && this._dragHint) { this.hud.toast.classList.remove('show'); this._dragHint = false; } }
  _banner(text, sub = '', secs = 2.2) {
    if (!this.hud) return;
    this.hud.banner.replaceChildren(text, sub ? h('small', {}, sub) : '');
    this.hud.banner.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => this.hud && this.hud.banner.classList.remove('show'), secs * 1000);
  }

  _stageIntro() {
    const r = this.run;
    this._banner(t(`stage${r.stage}`), r.loop ? `${t('loop')} ${num(r.loop + 1)}` : '', 2.4);
    if (r.stage === 1 && r.loop === 0) { this._dragHint = true; setTimeout(() => this.mode === 'play' && this._toast(t('hintDrag'), 3), 600); setTimeout(() => this.mode === 'play' && this._toast(t('hint1'), 3), 4200); }
    this.sound.setMode('play');
  }

  _pause() {
    if (this.mode !== 'play') return;
    this.mode = 'paused';
    this.layer.append(h('div', { class: 'sc-dim', id: 'sc-pause' }, h('div', { class: 'sc-card' },
      h('div', { class: 'sc-title' }, t('pause')),
      h('button', { class: 'sc-btn green', onclick: () => { document.getElementById('sc-pause')?.remove(); this.mode = 'play'; this.last = performance.now(); } }, '▶ ', t('resume')),
      h('button', { class: 'sc-btn', onclick: () => this.startRun() }, '↻ ', t('again')),
      h('button', { class: 'sc-btn blue', onclick: () => this.showMenu() }, t('back')))));
  }

  _storm() {
    const r = this.run;
    if (this.mode !== 'play' || !r) return;
    if (r.storm()) { this.stormFx = 1; this.shake = 0.3; }
    else this.sound.play('no');
  }

  _stageCard(rank) {
    const r = this.run;
    this.mode = 'card';
    this.sound.play('rank');
    this.layer.append(h('div', { class: 'sc-dim' }, h('div', { class: 'sc-card' },
      h('div', { class: 'sc-title' }, t('clear')),
      h('div', { class: 'sc-small' }, t(`stage${r.stage}`)),
      h('div', { class: 'sc-rank' }, rank),
      h('div', { class: 'sc-small' }, `${t('score')}: ${num(r.score)}`),
      h('div', { class: 'sc-small' }, `🪶 ${num(r.feathers)}  ·  🫧 ${num(r.pearls)}`),
      h('button', { class: 'sc-btn green', onclick: () => { this.layer.querySelector('.sc-dim:last-child')?.remove(); r.nextStage(); this.mode = 'play'; this.last = performance.now(); this._stageIntro(); } }, t('cont'), ' ▶'))));
  }

  _gameOver() {
    const r = this.run;
    this.mode = 'over';
    this.sound.play('dead');
    this.save.feathers = Math.min(99999, this.save.feathers + r.feathers);
    this.save.best = Math.max(this.save.best, r.score);
    this._saveNow();
    const ranks = r.ranks.map((x) => x.rank).join(' ') || '-';
    const finish = (name) => {
      if (name) { this.save.top = addScore(this.save.top, { name, score: r.score, stage: r.stage + r.loop * 3 }); this._saveNow(); }
      this.layer.append(h('div', { class: 'sc-dim' }, h('div', { class: 'sc-card' },
        h('div', { class: 'sc-ribbon' }, t('gameOver')),
        h('div', { class: 'sc-small' }, `${t('stageWord')} ${num(r.stage + r.loop * 3)}`),
        h('div', { class: 'sc-bigscore' }, num(r.score)),
        h('div', { class: 'sc-small' }, `${t('hiScore')} ${num(this.save.best)}`),
        h('div', { class: 'sc-pill' }, `🪶 +${num(r.feathers)}`),
        h('div', { class: 'sc-small' }, `${t('rank')}: ${ranks}`),
        h('div', { class: 'sc-row' },
          h('button', { class: 'sc-btn blue', onclick: () => this.showMenu() }, t('back')),
          h('button', { class: 'sc-btn', style: 'background:linear-gradient(180deg,#ffd86a,#f0a020)', onclick: () => this.showHangar() }, t('hangar')),
          h('button', { class: 'sc-btn green', onclick: () => this.startRun() }, t('again'))))));
    };
    if (qualifies(this.save.top, r.score)) {
      const letters = ['A', 'A', 'A'];
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const cols = letters.map((_, i) => {
        const span = h('span', {}, letters[i]);
        const set = (d) => { letters[i] = abc[(abc.indexOf(letters[i]) + d + abc.length) % abc.length]; span.textContent = letters[i]; this.sound.play('tap'); };
        return h('div', {}, h('button', { onclick: () => set(1) }, '▲'), span, h('button', { onclick: () => set(-1) }, '▼'));
      });
      const card = h('div', { class: 'sc-dim' }, h('div', { class: 'sc-card' },
        h('div', { class: 'sc-title' }, t('newrec')), h('div', { class: 'sc-small' }, num(r.score)),
        h('div', { class: 'sc-init' }, cols),
        h('button', { class: 'sc-btn green', onclick: () => { card.remove(); finish(letters.join('')); } }, t('save'))));
      this.layer.append(card);
    } else finish(null);
  }

  // ---- the loop -----------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const time = (now - this.t0) / 1000;
    if (this.mode === 'play' && this.run) this._tick(dt);
    this._draw(time, dt);
  }

  _tick(dt) {
    const r = this.run;
    this._keyMove(dt);
    const prev = r.px;
    const events = [...r.step(dt, this.input), ...r.takeEvents()];
    this.tilt = (r.px - prev) * 1.2;
    this.scroll += dt * (r.stage === 3 ? 22 : 18);
    for (const e of events) this._event(e);
    if (r.state === 'stageclear' && this.mode === 'play') { const rank = r.ranks.at(-1).rank; setTimeout(() => this._stageCard(rank), 500); this.mode = 'wait'; }
    else if (r.state === 'dead' && this.mode === 'play') { this.mode = 'wait'; setTimeout(() => this._gameOver(), 900); }
    if (r.bossAlive && !this.bossMode) { this.bossMode = true; this.sound.setMode('boss'); } else if (!r.bossAlive && this.bossMode) { this.bossMode = false; this.sound.setMode('play'); }
    this._hudUpdate();
  }

  _event(e) {
    const r = this.run;
    switch (e.type) {
      case 'shoot': if (!this._shootGate || performance.now() - this._shootGate > 120) { this._shootGate = performance.now(); this.sound.play('shoot'); } break;
      case 'hit': this.sound.play('hit'); if (e.dmg) this.texts.push({ x: e.x, y: e.y - 4, text: `-${Math.round(e.dmg * 10) / 10 >= 1 ? Math.round(e.dmg) : e.dmg.toFixed(1)}`, c: '#fff', k: 0 }); break;
      case 'pop':
        this.sound.play('pop', r.combo);
        this.fx.push({ k: 0, kind: 'pop', x: e.x, y: e.y, s: ENEMY[e.kind].r * 2, e: e.kind });
        this.texts.push({ x: e.x, y: e.y - 6, text: `+${num(e.pts)}`, c: '#ffd23a', k: 0 });
        if (!this.save.badges.includes('firstpop')) { this.save.badges.push('firstpop'); this._saveNow(); this._ach(t('firstPop')); }
        break;
      case 'pearl': this.sound.play('pearl', Math.min(8, r.pearls % 9)); break;
      case 'feather': this.sound.play('feather'); break;
      case 'capsule': this.sound.play('capsule'); this._toast(`💊 ${t(e.cap)}`, 1.8); break;
      case 'rescue': this.sound.play('rescue'); this._toast(`🐦 ${t('hintBird')} (${t(e.bird)})`, 2.6); break;
      case 'wingshot': if (Math.random() < 0.35) this.sound.play('chirp'); break;
      case 'heal': this.texts.push({ x: e.x, y: e.y - 8, text: '+6', c: '#7af05a', k: 0 }); break;
      case 'hurt': this.sound.play('hurt'); this.shake = 0.35; this.texts.push({ x: e.x, y: e.y - 6, text: `-${e.dmg}`, c: '#ff6a6a', k: 0 }); break;
      case 'storm': this.sound.play('storm'); break;
      case 'combo': if (e.mult > 1) this.sound.play('combo', e.mult); break;
      case 'thief': this._banner(t('thief'), t('thiefSub'), 2.4); this.sound.play('boss'); break;
      case 'loot': this.texts.push({ x: e.x, y: e.y - 8, text: '🪶 +6', c: '#ffd23a', k: 0 }); this.sound.play('feather'); break;
      case 'boss': this.sound.play('boss'); this._banner('⚓', t('hintBoss'), 2.4); break;
      case 'bossdown': this.sound.play('rank'); this.shake = 0.6; break;
      default:
    }
    // contextual hints, once each
    const first = (k, text) => { if (!this.shown.has(k)) { this.shown.add(k); this._toast(text, 3); } };
    for (const en of r.enemies) { if (en.type === 'umbrella' && en.y > 4) first('umb', t('hintUmb')); if (en.type === 'cage' && en.y > 4) first('cage', t('hintCage')); }
    if (r.pickups.some((p) => p.kind === 'capsule' && p.y > 2)) first('cap', t('hintCap'));
    if (r.tank < 0.03 && this.input.fire) first('tank', t('hintTank'));
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _trail(g, x, y, S, time) {
    // exhaust puffs streaming behind the plane, fading as they drift down
    for (let i = 0; i < 9; i++) {
      const k = i / 9; const wob = Math.sin(time * 14 + i * 1.7) * S * 0.6 * k;
      g.globalAlpha = 0.5 * (1 - k); g.fillStyle = i % 2 ? '#ffffff' : '#bfe9ff';
      g.beginPath(); g.arc(x + wob, y + S * (9 + i * 3.2), S * (1.8 - k * 0.9), 0, Math.PI * 2); g.fill();
    }
    g.globalAlpha = 1;
  }

  _draw(time, dt) {
    const g = this.g;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(this._sky(), 0, 0);
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (ART.clouds) { // mirrored tiles scroll down so the seam never shows
      const im = ART.clouds; const cw = this.cw, ch = this.ch; const k = Math.max(cw / im.naturalWidth, ch / im.naturalHeight) * 1.1; const iw = im.naturalWidth * k, ih = im.naturalHeight * k;
      const off = (time * this.sc * 6) % (2 * ih); g.globalAlpha = 0.5;
      for (let n = -1; n * ih - ih + off < ch; n++) { const y0 = n * ih + off - ih; g.save(); if (((n % 2) + 2) % 2) { g.translate(0, y0 + ih); g.scale(1, -1); g.drawImage(im, (cw - iw) / 2, 0, iw, ih); } else g.drawImage(im, (cw - iw) / 2, y0, iw, ih); g.restore(); }
      g.globalAlpha = 1;
    }
    // islands and clouds scroll down (the plane flies up)
    const stage = this.run ? this.run.stage : 1;
    for (const c of this.clouds) { c.y += c.v * dt * 0.06; if (c.y > 1.1) { c.y = -0.1; c.x = Math.random(); } drawCloud(g, c.x * this.cw, c.y * this.ch, this.sc * 10 * c.s, 0.55); }
    for (const [i, isl] of this.islands.entries()) {
      const cy = ((isl.y * this.ch + this.scroll * this.sc * 0.5 * (0.6 + i * 0.06)) % (this.ch * 1.3)) - this.ch * 0.15;
      const kind = stage === 3 ? 2 : stage === 2 ? 1 : isl.k === 2 ? 0 : isl.k;
      drawIsland(g, isl.x * this.cw, cy, this.sc * 100 * isl.s * 1.1, stage === 1 ? 0 : kind, time);
    }
    for (const c of this.clouds) if (c.s > 1.5) drawCloud(g, (c.x * 1.2 % 1.2) * this.cw, ((c.y + 0.4) % 1.1) * this.ch, this.sc * 12 * c.s, 0.9);
    const r = this.run;
    if (!r) {
      drawPlane(g, this.cw / 2, this.ch * 0.7, this.sc * 22, time, this.save.paint, Math.sin(time) * 0.3);
      return;
    }
    let sx = 0, sy = 0;
    if (this.shake > 0) { this.shake = Math.max(0, this.shake - dt); sx = (Math.random() - 0.5) * this.shake * 14; sy = (Math.random() - 0.5) * this.shake * 14; }
    g.save(); g.translate(sx, sy);
    const S = this.sc;
    // pickups
    for (const p of r.pickups) {
      if (p.kind === 'cage') drawCageItem(g, p.bird, this.X(p.x), this.Y(p.y), S * 6, time);
      else drawPickup(g, p.kind, this.X(p.x), this.Y(p.y), S * (p.kind === 'capsule' ? 8 : 5.8), time, p.cap);
    }
    // enemies
    for (const en of r.enemies) {
      if (en.type === 'boss') drawBoss(g, this.X(en.x), this.Y(en.y), S * en.r * 1.7, time, en.hp / en.hp0);
      else drawEnemy(g, en.type, this.X(en.x), this.Y(en.y), S * en.r * 2.9, time, en.hp / en.hp0);
      if (en.type === 'boss') { // the captain's HP bar
        const bw = S * 50, bx = this.cw / 2 - bw / 2, by = this.Y(2);
        g.fillStyle = 'rgba(29,42,74,0.6)'; g.fillRect(bx, by, bw, S * 2.2); g.fillStyle = '#ff5a4a'; g.fillRect(bx, by, bw * Math.max(0, en.hp / en.hp0), S * 2.2);
        g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(bx, by, bw, S * 2.2);
      }
    }
    for (const en of r.enemies) if (en.type === 'cage' && en.y > 4 && !this.run.pickups.some((p) => p.kind === 'cage')) this._tag(g, t('hintFree'), this.X(en.x), this.Y(en.y) + S * 14);
    for (const p of r.pickups) if (p.kind === 'cage') this._tag(g, t('hintCage'), this.X(p.x), this.Y(p.y) - S * 9, true, time);
    for (const b of r.eb) drawEnemyBullet(g, this.X(b.x), this.Y(b.y), S * b.r);
    // wings
    for (const w of r.wings) drawBird(g, w.type, this.X(w.x), this.Y(w.y), S * 7, time);
    // the plane
    this._trail(g, this.X(r.px), this.Y(r.py), S, time);
    drawPlane(g, this.X(r.px), this.Y(r.py), S * 13, time, r.stats.paint, this.tilt, r.inv > 0 && r.state === 'play');
    if (r.inv > 0.3 && r.state === 'play') { g.strokeStyle = 'rgba(120,210,255,0.8)'; g.lineWidth = S * 0.6; g.beginPath(); g.arc(this.X(r.px), this.Y(r.py), S * 15 + Math.sin(time * 12) * S * 0.6, 0, Math.PI * 2); g.stroke(); }
    // bullets
    for (const b of r.bullets) drawBubble(g, this.X(b.x), this.Y(b.y), S * b.r * 2.0, b.kind);
    // effects
    for (const f of this.fx) { f.k += dt * 2.2; if (f.kind === 'pop') drawPopBurst(g, this.X(f.x), this.Y(f.y), S * f.s, Math.min(1, f.k), f.e); }
    this.fx = this.fx.filter((f) => f.k < 1);
    g.textAlign = 'center'; g.font = `900 ${Math.max(11, S * 4)}px Tajawal, system-ui, sans-serif`; g.lineWidth = 3; g.strokeStyle = 'rgba(29,42,74,0.9)';
    for (const tx of this.texts) { tx.k += dt * 1.1; g.globalAlpha = Math.max(0, 1 - tx.k); g.fillStyle = tx.c; const yy = this.Y(tx.y) - tx.k * S * 8; g.strokeText(tx.text, this.X(tx.x), yy); g.fillText(tx.text, this.X(tx.x), yy); }
    g.globalAlpha = 1;
    this.texts = this.texts.filter((x) => x.k < 1);
    g.restore();
    // the lower the plane's health, the redder the edges of the screen (like the video)
    const hpF = r.hp / r.stats.maxHp;
    if (hpF < 0.8 && r.state === 'play') {
      const a = Math.min(0.6, (0.8 - hpF) * 1.5) * (hpF < 0.35 ? 0.8 + 0.2 * Math.sin(time * 6) : 1);
      const gr = g.createRadialGradient(this.cw / 2, this.ch / 2, Math.min(this.cw, this.ch) * 0.3, this.cw / 2, this.ch / 2, Math.max(this.cw, this.ch) * 0.72);
      gr.addColorStop(0, 'rgba(255,80,120,0)'); gr.addColorStop(1, `rgba(255,70,110,${a})`);
      g.fillStyle = gr; g.fillRect(0, 0, this.cw, this.ch);
    }
    if (this.stormFx > 0) { this.stormFx = Math.max(0, this.stormFx - dt * 1.4); g.fillStyle = `rgba(190,235,255,${this.stormFx * 0.7})`; g.fillRect(0, 0, this.cw, this.ch); for (let i = 0; i < 18; i++) { const a = i * 0.7 + time * 3; drawBubble(g, this.cw * ((i * 0.137 + this.stormFx) % 1), this.ch * (1 - ((this.stormFx * 1.5 + i * 0.09) % 1)), S * (2 + (i % 4)), 'bubble'); } }
  }

  /** A little pill sign (like "FREE THE BIRD!" in the video). [arrow] adds a bouncing red arrow below. */
  _tag(g, text, x, y, arrow = false, time = 0) {
    const fs = Math.max(11, this.sc * 3.6);
    g.save(); g.font = `900 ${fs}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    const w = g.measureText(text).width + fs * 1.4, h2 = fs * 1.9;
    const cx = Math.max(w / 2 + 4, Math.min(this.cw - w / 2 - 4, x));
    g.fillStyle = '#fdf6e4'; g.strokeStyle = '#1d2a4a'; g.lineWidth = Math.max(2, fs * 0.14);
    g.beginPath(); g.roundRect(cx - w / 2, y - h2 / 2, w, h2, h2 / 2); g.fill(); g.stroke();
    g.fillStyle = '#1d2a4a'; g.fillText(text, cx, y + fs * 0.05);
    if (arrow) { const ay = y + h2 / 2 + fs * 0.6 + Math.sin(time * 8) * fs * 0.25; g.fillStyle = '#e8323a'; g.beginPath(); g.moveTo(x, ay + fs * 0.7); g.lineTo(x - fs * 0.6, ay - fs * 0.2); g.lineTo(x + fs * 0.6, ay - fs * 0.2); g.closePath(); g.fill(); g.stroke(); }
    g.restore();
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this._pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill); clearTimeout(this._tt); clearTimeout(this._bt);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.SkyCapy = api;
export default api;
