// «مبدع الذكاء» — Creator Tycoon. Entry: window.CreatorTycoon.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Built from the owner's video: a CAREER window (level, rank, cash, star goal, client order), an office scene with the young creator,
// a desk and a trash can, a GENERATOR window with PHOTO / VIDEO / GAME buttons and a QUALITY bar whose needle always swings. Tap a
// button while the needle is in the green: the card says MASTERPIECE (+stars, cash, the green zone jumps); wrong timing = AI SLOP
// that is thrown in the trash. VIDEO unlocks at level 2, GAME at level 3. Promotion window, shop, orders, hot streak, trend.
// DOM only, art made from emoji and gradients, sound made in code. No network, nothing lost for good.
import { Studio, RANKS, KINDS, SHOP, UNLOCKS, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { loadArt } from '../../cozy_kit/art.js';

const S = {
  title: ['مبدع الذكاء', 'AI Creator'], play: ['يلا نبدأ', 'Start'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['من الأول', 'Play again'],
  tapGreen: ['دوس على الزرار لما المؤشر يبقى في الأخضر!', 'Tap a button when the needle is in the GREEN!'],
  master: ['تحفة!', 'MASTERPIECE!'], perfect: ['ممتاز!', 'PERFECT!'], ok: ['كويس', 'OK'], slop: ['زبالة!', 'SLOP'], bad: ['توقيت غلط', 'BAD TIMING'],
  slopMsg: ['أوه.. زبالة ذكاء اصطناعي!', 'Oops... slop!'],
  generating: ['بيصنع...', 'GENERATING...'], promoted: ['ترقية!', 'PROMOTED!'], youAre: ['بقيت', 'You are now'], level: ['مستوى', 'LEVEL'],
  shop: ['المتجر', 'SHOP'], goal: ['الهدف', 'GOAL'], career: ['مسيرتي', 'CAREER.EXE'], generator: ['المولّد', 'GENERATOR.EXE'], quality: ['الجودة', 'QUALITY'],
  ordersFrom: ['الطلبات من المستوى ٢', 'ORDERS FROM LEVEL 2'], waiting: ['بنستنى عميل...', 'WAITING FOR A CLIENT...'],
  client: ['عميل', 'CLIENT'], orderDone: ['الطلب خلص! +٣ نجوم', 'ORDER DONE! +3 STARS'], clientLeft: ['العميل مشي', 'CLIENT LEFT'],
  next: ['المستوى التالي', 'NEXT LEVEL'], close: ['إغلاق', 'Close'], locked: ['مستوى', 'LEVEL'], hot: ['سلسلة ×٢', 'HOT x2'],
  trend: ['ترند', 'TREND'], trendTxt: ['نجوم ×٢ لمدة ٨ ثواني', 'x2 stars for 8 s'], lag: ['السيرفر بطيء.. المؤشر أبطأ', 'Server lag.. the needle is slower'],
  newVideo: ['جديد: فيديو +٢ نجوم', 'NEW: VIDEO +2 STARS'], newGame: ['جديد: لعبة +٣ نجوم', 'NEW: GAME +3 STARS'],
  newOrders: ['جديد: طلبات العملاء', 'NEW: CLIENT ORDERS'], newHot: ['جديد: سلسلة ×٢', 'NEW: HOT STREAKS'], newEvents: ['جديد: ترند وسيرفر بطيء', 'NEW: TRENDS AND SERVER LAG'],
  levelDone: ['المستوى اتمّ', 'LEVEL COMPLETE'], more: ['نجوم كمان للترقية', 'more stars to level up'],
  won: ['وصلت لمجلس الإدارة! 🎉', 'You reached the board! 🎉'], wonText: ['بقيت أنجح مبدع في الشركة.', 'You are the top creator of the company.'],
  masters: ['تحف', 'Masterpieces'], trash: ['زبالة', 'Slop'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], max: ['أقصى', 'Max'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], stars: ['نجوم', 'STARS'], gpuHint: ['المولّد اشتغل لوحده', 'The GPU made one by itself'],
};
const I = makeI18n(S);
const PIC = { photo: ['🐱', '🏞️', '🌆', '🐶', '🌸', '🦊'], video: ['🐕‍🦺', '🌋', '🚀', '🏄', '🎆', '🐳'], game: ['🏰', '🧙', '🏎️', '🐉', '⚽', '🪐'] };
const SLOP = ['🤪', '👽', '🐙', '🦄', '🫠', '🧟'];
const SCENE = [
  'linear-gradient(180deg,#162a5e 0,#1b2f66 60%,#0e1b40 60%,#0a1430 100%)',
  'linear-gradient(180deg,#1c3a78 0,#274a8a 60%,#6a4a3a 60%,#3a2418 100%)',
  'linear-gradient(180deg,#a8d4ff 0,#cfe6ff 55%,#c98a52 55%,#8a5a2e 100%)',
  'linear-gradient(180deg,#7ab8ff 0,#c8e4ff 55%,#d49a5e 55%,#9a6a36 100%)',
  'linear-gradient(180deg,#ffb86a 0,#ffe0a8 55%,#b8864e 55%,#7a5028 100%)',
];
// Optional generated pictures (assets/games/creator_tycoon/art/*.webp). Each one is optional: a missing picture keeps the emoji/gradient look.
const ART_NAMES = ['office_dark', 'office_bright', 'office_sunset', 'creator', 'ceo', 'bin', 'desk_1', 'desk_2', 'desk_3', 'photo_a', 'photo_b', 'video_a', 'video_b', 'game_a', 'game_b', 'slop_a', 'slop_b'];
const ART_CARDS = { photo: ['photo_a', 'photo_b'], video: ['video_a', 'video_b'], game: ['game_a', 'game_b'], slop: ['slop_a', 'slop_b'] };
const DESK_ART = ['desk_1', 'desk_1', 'desk_1', 'desk_2', 'desk_3'];
const DESK = ['🖥️', '🖥️', '💻', '🖥️🖥️', '🖥️🖥️🖥️'];

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'master': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.06, 0.3, 0.13)); break;
      case 'perfect': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.3, 0.13)); break;
      case 'ok': this.tone('triangle', hz(72), t, 0.15, 0.1); break;
      case 'slop': this.slide('sawtooth', 300, 80, t, 0.4, 0.08); this.noise(t, 0.2, 0.06, 'lowpass', 400); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'coin': this.tone('square', hz(88), t, 0.08, 0.05); this.tone('square', hz(95), t + 0.07, 0.12, 0.05); break;
      case 'promote': [0, 4, 7, 12, 16, 19].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.09, 0.5, 0.13)); break;
      case 'event': this.tone('sine', hz(84), t, 0.2, 0.1); this.tone('sine', hz(79), t + 0.15, 0.25, 0.1); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setTune(null); return; } this.setTune({ tempo: 108, beats: 16, wave: 'triangle', vol: 0.06, notes: [[0, 64, 1], [1, 67, 1], [2, 71, 1], [3, 67, 1], [4, 62, 1], [5, 66, 1], [6, 69, 1], [7, 66, 1], [8, 60, 1], [9, 64, 1], [10, 67, 2], [12, 62, 1], [13, 65, 1], [14, 69, 2], [0, 40, 2], [4, 38, 2], [8, 36, 2], [12, 38, 2]] }); }
}

const money = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1)}K` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : `${Math.round(n)}`);

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.art = {}; this.artKey = '';
    this.artP = loadArt(this.base, ART_NAMES).then((a) => { this.art = a; this.artKey = ''; });
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('ct-style')) document.head.append(h('style', { id: 'ct-style' }, css('ct', '#2a3a9a', '#141c5a', '#ffe04a') + `
.ct-root{background:#0a1030;touch-action:manipulation}
.ct-app{position:absolute;top:0;bottom:0;left:50%;transform:translateX(-50%);width:min(100%,calc(var(--u)*66));display:flex;flex-direction:column;gap:calc(var(--u)*1);padding:calc(var(--u)*1.4);box-sizing:border-box}
.ct-land .ct-app{width:min(100%,calc(var(--u)*150));display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);grid-template-rows:auto minmax(0,1fr)}
.ct-land .ct-app>:nth-child(1){grid-column:1;grid-row:1}.ct-land .ct-app>:nth-child(2){grid-column:2;grid-row:1/3}.ct-land .ct-app>:nth-child(3){grid-column:1;grid-row:2;overflow:auto}
.ct-win{background:#d8dce8;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*1.2);box-shadow:0 0 0 calc(var(--u)*.3) #1a2a80,0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.4);overflow:hidden;color:#101850;flex:0 0 auto}
.ct-wt{background:linear-gradient(180deg,#2a3cc8,#14208a);color:#fff;font-weight:900;font-size:calc(var(--u)*2.4);padding:calc(var(--u)*.6) calc(var(--u)*1.4);display:flex;justify-content:space-between;align-items:center;letter-spacing:.06em}
.ct-wt button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*2.2);background:#e8ecff;color:#14208a;border:calc(var(--u)*.3) solid #fff;border-radius:calc(var(--u)*.6);padding:0 calc(var(--u)*1.2);cursor:pointer;margin-inline-start:calc(var(--u)*.6)}
.ct-wb{padding:calc(var(--u)*1);display:flex;flex-direction:column;gap:calc(var(--u)*.9)}
.ct-f{background:#fff;border:calc(var(--u)*.3) solid #8a90b8;border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.7) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*1);font-weight:900;font-size:calc(var(--u)*3.2);min-height:calc(var(--u)*5.2);box-sizing:border-box}
.ct-f b{flex:1}.ct-f .ct-lvl{background:#2a3cc8;color:#fff;border-radius:calc(var(--u)*.6);padding:0 calc(var(--u)*1);font-size:calc(var(--u)*2.4)}
.ct-f.dim{color:#7a80a8;font-size:calc(var(--u)*2.6)}.ct-f.on{background:#fff8b0}
.ct-st{filter:grayscale(1);opacity:.35;font-size:calc(var(--u)*2.3)}.ct-st.on{filter:none;opacity:1}
.ct-prog{flex:1;height:calc(var(--u)*2.2);background:#c8ccdc;border-radius:99px;overflow:hidden;border:calc(var(--u)*.25) solid #8a90b8}.ct-prog i{display:block;height:100%;background:#2ad05a}.ct-prog i.late{background:#e83a3a}
.ct-scene{flex:1 1 0;min-height:0;position:relative;border-radius:calc(var(--u)*1.6);overflow:hidden;border:calc(var(--u)*.4) solid #0a1030}
.ct-desk{position:absolute;left:12%;bottom:30%;font-size:calc(var(--u)*13);line-height:1;white-space:nowrap}
.ct-me{position:absolute;right:6%;bottom:6%;font-size:calc(var(--u)*24);line-height:1}
.ct-bin{position:absolute;left:4%;bottom:5%;font-size:calc(var(--u)*11);line-height:1}
.ct-desk.art{font-size:0;height:38%;left:9%;bottom:21%}.ct-me.art{font-size:0;height:64%;right:3%;bottom:2%}.ct-bin.art{font-size:0;height:27%;left:3%;bottom:3%}.ct-boss.art{font-size:0;height:62%;left:1%;bottom:2%}
.ct-desk img,.ct-me img,.ct-bin img,.ct-boss img{height:100%;width:auto;display:block;pointer-events:none;-webkit-user-drag:none}
.ct-scene.arted .ct-note{display:none}
.ct-gc.art .pic{position:absolute;inset:0;font-size:0}.ct-gc.art .pic img{width:100%;height:100%;object-fit:cover;display:block}
.ct-gc.art .tag{background:rgba(255,255,255,.88);border-radius:calc(var(--u)*1);padding:0 calc(var(--u)*1.4)}
.ct-boss{position:absolute;left:2%;bottom:4%;font-size:calc(var(--u)*22);line-height:1;opacity:0;transition:opacity .4s}.ct-boss.show{opacity:1}
.ct-note{position:absolute;width:calc(var(--u)*3);height:calc(var(--u)*3);transform:rotate(8deg);opacity:.85}
.ct-gc{position:absolute;left:50%;top:6%;transform:translateX(-50%);width:42%;aspect-ratio:3/4;background:#f4f4f8;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*1.6);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#2a2a50;font-weight:900;overflow:hidden;box-sizing:border-box;padding:0}
.ct-gc .pic{font-size:calc(var(--u)*17);line-height:1;filter:blur(calc(var(--u)*1.4));transition:filter .3s}.ct-gc.done .pic{filter:none}
.ct-gc .tag{position:absolute;bottom:calc(var(--u)*1.2);font-size:calc(var(--u)*3.2);letter-spacing:.04em}.ct-gc.master{border-color:#ffe04a}.ct-gc.slop .tag{color:#888}
.ct-gc .pls{position:absolute;top:calc(var(--u)*1.4);font-size:calc(var(--u)*3.6);color:#e8a000;-webkit-text-stroke:calc(var(--u)*.2) #5a3a00}
.ct-gc.trash{animation:cttrash .7s forwards}
@keyframes cttrash{to{transform:translate(-120%,calc(var(--u)*30)) rotate(-60deg) scale(.4);opacity:0}}
.ct-pop{position:absolute;left:50%;transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*5);letter-spacing:.05em;-webkit-text-stroke:calc(var(--u)*.35) #000;paint-order:stroke fill;animation:ctup 1.1s forwards;pointer-events:none;white-space:nowrap}
@keyframes ctup{0%{opacity:0;margin-top:calc(var(--u)*2)}15%{opacity:1}100%{opacity:0;margin-top:calc(var(--u)*-6)}}
.ct-banner{position:absolute;left:0;right:0;top:12%;text-align:center;font-weight:900;color:#ffe04a;-webkit-text-stroke:calc(var(--u)*.5) #000;paint-order:stroke fill;font-size:calc(var(--u)*8);line-height:1.1;pointer-events:none;animation:ctban 2.2s forwards}
.ct-banner small{display:block;font-size:calc(var(--u)*4.4);color:#fff}
@keyframes ctban{0%{opacity:0;transform:scale(.6)}15%{opacity:1;transform:scale(1)}80%{opacity:1}100%{opacity:0}}
.ct-gen .ct-wb{gap:calc(var(--u)*.8)}
.ct-btns{direction:ltr;display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*.9)}
.ct-mk{font-family:inherit;font-weight:900;color:#14208a;background:linear-gradient(180deg,#fff,#c8ccdc);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*.9);box-shadow:0 calc(var(--u)*.5) 0 #6a70a0;padding:calc(var(--u)*.8) 0;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.1);font-size:calc(var(--u)*3);min-height:calc(var(--u)*14);touch-action:manipulation}
.ct-mk i{font-style:normal;font-size:calc(var(--u)*6.4);line-height:1.1}.ct-mk small{font-size:calc(var(--u)*2.1);font-weight:800;color:#4a5090}
.ct-mk:active{transform:translateY(calc(var(--u)*.4))}.ct-mk.lock{background:#b8bccb;color:#7a7f98;box-shadow:0 calc(var(--u)*.5) 0 #8a8fa8;filter:grayscale(1)}.ct-mk.press{background:linear-gradient(180deg,#d8dcff,#9aa0e0)}
.ct-q{display:flex;align-items:center;gap:calc(var(--u)*1);font-weight:900;font-size:calc(var(--u)*2.2);color:#2a3cc8}
.ct-meter{direction:ltr;position:relative;flex:1;height:calc(var(--u)*3.6);background:#fff;border:calc(var(--u)*.35) solid #2a3cc8;border-radius:calc(var(--u)*.5);overflow:hidden}
.ct-seg{position:absolute;top:0;bottom:0}
.ct-needle{position:absolute;top:-10%;bottom:-10%;width:calc(var(--u)*.8);margin-left:calc(var(--u)*-.4);background:#101030;box-shadow:0 0 0 calc(var(--u)*.2) #fff}
.ct-hot{color:#e8302a}
.ct-tip{background:#fff;border:calc(var(--u)*.3) solid #8a90b8;border-radius:calc(var(--u)*.5);font-weight:800;font-size:calc(var(--u)*2.5);padding:calc(var(--u)*.6) calc(var(--u)*1.2);color:#404880;text-align:center;min-height:calc(var(--u)*4.4);display:flex;align-items:center;justify-content:center;box-sizing:border-box}
.ct-tip.y{background:#fffab8;color:#101850}
.ct-dim2{position:absolute;inset:0;background:rgba(5,10,40,.6);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;z-index:20}
.ct-prm{width:calc(var(--u)*54);max-width:100%;max-height:100%;overflow:auto}
.ct-prm h2{margin:0;text-align:center;font-size:calc(var(--u)*7);color:#14208a;-webkit-text-stroke:calc(var(--u)*.3) #fff;paint-order:stroke fill;letter-spacing:.04em}
.ct-big{font-size:calc(var(--u)*9);text-align:center;line-height:1}
.ct-row2{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1)}
.ct-b2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);border:calc(var(--u)*.3) solid #14208a;border-radius:calc(var(--u)*.8);padding:calc(var(--u)*1.2);cursor:pointer;background:#fffab8;color:#101850;box-shadow:0 calc(var(--u)*.5) 0 #6a70a0}
.ct-b2.go{background:#14208a;color:#fff}
.ct-shop{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1)}
.ct-item{font-family:inherit;border:calc(var(--u)*.3) solid #8a90b8;border-radius:calc(var(--u)*.9);background:#fff;padding:calc(var(--u)*1.2);cursor:pointer;display:flex;flex-direction:column;gap:calc(var(--u)*.3);align-items:flex-start;text-align:start;font-weight:900;font-size:calc(var(--u)*3);color:#101850}
.ct-item.can{background:#c8ffd8;border-color:#2ab85a}.ct-item small{font-size:calc(var(--u)*2.4);font-weight:700;opacity:.8}
.ct-menu{position:absolute;top:calc(var(--u)*1);left:calc(var(--u)*1)}
` ));
    this.root = h('div', { class: 'ct-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'ct-layer' });
    this.mode = 'menu';
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    Promise.all([this._fonts(), this.artP]).then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.classList.toggle('ct-land', this.cw > this.ch * 1.3); this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this._onKey = (e) => {
      if (this.mode !== 'play' || this.modal) return;
      const k = { '1': 'photo', '2': 'video', '3': 'game' }[e.key] || (e.key === ' ' ? this.lastKind || 'photo' : null);
      if (k) { e.preventDefault(); this._make(k); }
    };
    window.addEventListener('keydown', this._onKey);
  }

  _soundPill() { const pill = h('button', { class: 'ct-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.modal = null;
    this.layer.replaceChildren();
    this.sound.setMode(false);
    const bgp = this.art && this.art.office_sunset;
    this.layer.append(h('div', { class: 'ct-dim', style: bgp ? `background:linear-gradient(rgba(5,10,40,.45),rgba(5,10,40,.65)),url(${bgp.src}) center/cover no-repeat` : '' }, h('div', { class: 'ct-card2 ct-card' },
      h('div', { class: 'ct-logo' }, '💼 ', I.t('title')), h('div', { class: 'ct-small' }, I.t('tapGreen')),
      h('div', { class: 'ct-small' }, `🏆 ${I.t('masters')}: ${I.num(this.save.best)}`),
      h('button', { class: 'ct-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, I.t('play')),
      h('button', { class: 'ct-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start() {
    this.s = new Studio({ seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.modal = null; this.lastKind = 'photo'; this.cardT = 0; this.bossT = 0;
    this.layer.replaceChildren();
    this.sound.setMode(true);
    const ar = I.getLang() !== 'en';
    const E = (cls, ...k) => h('div', { class: cls }, ...k);
    this.e = {
      lv: h('span', { class: 'ct-lvl' }, ''), rank: h('b', {}, ''), cash: h('span', {}, ''), stars: h('span', {}, ''), cnt: h('span', {}, ''),
      order: E('ct-f dim', ''), scene: E('ct-scene'), hint: E('ct-tip y', I.t('tapGreen')), zone: [], needle: E('ct-needle'), hot: h('span', { class: 'ct-hot' }, ''),
    };
    this.e.starsRow = E('ct-f');
    this.e.meter = E('ct-meter', ...[0, 1, 2].map(() => { const x = E('ct-seg'); this.e.zone.push(x); return x; }), this.e.needle);
    const desk = E('ct-desk'); const me = E('ct-me', '🧑‍💻'); const boss = E('ct-boss', '👩‍💼'); const bin = E('ct-bin', '🗑️');
    this.e.desk = desk; this.e.boss = boss; this.e.me = me; this.e.bin = bin; this.artKey = '';
    for (let i = 0; i < 7; i++) { const n = E('ct-note'); n.style.cssText = `left:${8 + i * 13}%;top:${10 + (i * 37) % 30}%;background:${['#ffb0d0', '#ffe88a', '#8ad8ff', '#a8f0a0'][i % 4]}`; this.e.scene.append(n); }
    this.e.scene.append(desk, me, bin, boss);
    this.btns = Object.keys(KINDS).map((k) => {
      const kk = KINDS[k];
      const small = h('small', {}, '');
      const b = h('button', { class: 'ct-mk', 'data-kind': k, onpointerdown: () => this._make(k) }, h('i', {}, kk.icon), ar ? kk.ar : kk.en, small);
      b.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); this._make(k); } });
      return { k, b, small };
    });
    const shopBtn = h('button', { onclick: () => this._shop() }, I.t('shop'));
    const menuBtn = h('button', { 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    const app = E('ct-app',
      E('ct-win', E('ct-wt', h('span', {}, I.t('career')), h('span', {}, menuBtn)), E('ct-wb',
        E('ct-f', h('span', { style: 'display:flex;gap:.5em;align-items:center;flex:1' }, '✅', this.e.lv, this.e.rank), h('span', {}, '🪙 '), this.e.cash),
        this.e.starsRow, this.e.order)),
      this.e.scene,
      E('ct-win ct-gen', E('ct-wt', h('span', {}, I.t('generator')), h('span', {}, shopBtn)), E('ct-wb',
        E('ct-btns', ...this.btns.map((x) => x.b)),
        E('ct-q', h('span', {}, I.t('quality')), this.e.meter, this.e.hot), this.e.hint)));
    this.layer.append(app);
    this.app = app;
    this._soundPill();
    this._buildStars();
  }

  _buildStars() {
    const g = this.s.goal || 1;
    this.starEls = [];
    this.e.starsRow.replaceChildren(h('span', {}, I.t('goal')), h('b', { style: 'display:flex;flex-wrap:wrap;gap:0' }, ...Array.from({ length: g }, () => { const x = h('span', { class: 'ct-st' }, '⭐'); this.starEls.push(x); return x; })), this.e.cnt);
    this.starsFor = g;
  }

  _make(k) {
    if (this.mode !== 'play' || this.modal) return;
    const s = this.s;
    if (!s.unlocked(k)) return;
    const res = s.tap(k);
    if (!res) return;
    this.lastKind = k;
    this.sound.play(res);
    for (const x of this.btns) if (x.k === k) { x.b.classList.add('press'); setTimeout(() => x.b.classList.remove('press'), 160); }
    const ev = s.drain();
    this._card(k, res, ev);
    for (const e of ev) {
      if (e.type === 'orderDone') this._pop(I.t('orderDone'), '#ffe04a', 0);
      if (e.type === 'promote' && s.state === 'play') this._promote();
      if (e.type === 'won') this._won();
    }
  }

  _pop(text, color, y) { const p = h('div', { class: 'ct-pop', style: `color:${color};top:${28 + y}%` }, text); this.e.scene.append(p); setTimeout(() => p.remove(), 1200); }

  _card(k, res, ev) {
    const old = this.e.scene.querySelector('.ct-gc');
    if (old && !old.classList.contains('trash')) old.remove();
    const slop = res === 'slop';
    const pic = slop ? SLOP[Math.floor(Math.random() * SLOP.length)] : PIC[k][Math.floor(Math.random() * PIC[k].length)];
    const e0 = ev.find((e) => e.stars !== undefined);
    const tag = h('div', { class: 'tag' }, I.t('generating'));
    const names = ART_CARDS[slop ? 'slop' : k].filter((n) => this.art[n]);
    const picName = names.length ? names[Math.floor(Math.random() * names.length)] : null;
    const card = h('div', { class: picName ? 'ct-gc art' : 'ct-gc' }, h('div', { class: 'pic' }, picName ? h('img', { src: this.art[picName].src, alt: '', draggable: 'false' }) : pic), tag);
    this.e.scene.append(card);
    this.sound.play('tap');
    setTimeout(() => {
      if (!card.isConnected) return;
      card.classList.add('done', slop ? 'slop' : res === 'ok' ? 'ok' : 'master');
      tag.textContent = slop ? I.t('slop') : res === 'ok' ? I.t('ok') : I.t('master');
      if (e0) card.append(h('div', { class: 'pls' }, `+${I.num(e0.stars)} ${I.t('stars')}`));
      if (slop) { this._pop(I.t('bad'), '#ff4a3a', 40); setTimeout(() => card.classList.add('trash'), 500); setTimeout(() => card.remove(), 1250); } else { this._pop(res === 'perfect' ? I.t('perfect') : res === 'ok' ? I.t('ok') : I.t('master'), res === 'ok' ? '#fff' : '#ffe04a', 40); setTimeout(() => card.remove(), 1400); }
    }, 650);
  }

  _promote() {
    const s = this.s;
    const ar = I.getLang() !== 'en';
    const r = RANKS[s.rank];
    this.modal = 'promo';
    this.sound.play('promote');
    const ul = (UNLOCKS[s.rank] || []).map((u) => ({ video: I.t('newVideo'), game: I.t('newGame'), orders: I.t('newOrders'), hot: I.t('newHot'), events: I.t('newEvents') }[u]));
    const box = h('div', { class: 'ct-win ct-prm' }, h('div', { class: 'ct-wt' }, h('span', {}, `${I.t('levelDone')} ${I.num(s.rank)}`)), h('div', { class: 'ct-wb' },
      h('div', { class: 'ct-big' }, '✅'), h('h2', {}, I.t('promoted')),
      h('div', { class: 'ct-f', style: 'justify-content:center' }, `${I.t('youAre')} ${ar ? r.ar : r.en}`),
      ...ul.map((t) => h('div', { class: 'ct-f' }, t)),
      h('div', { class: 'ct-row2' }, h('button', { class: 'ct-b2', onclick: () => this._shop(true) }, '🛒 ' + I.t('shop')), h('button', { class: 'ct-b2 go', onclick: () => { s.next(); this._closeModal(); this._buildStars(); this._banner(s.rank); } }, I.t('next') + ' ›'))));
    this._modal(box);
  }

  _banner(rank) { const ar = I.getLang() !== 'en'; const b = h('div', { class: 'ct-banner' }, `${I.t('level')} ${I.num(rank + 1)}`, h('small', {}, ar ? RANKS[rank].ar : RANKS[rank].en)); this.e.scene.append(b); setTimeout(() => b.remove(), 2300); }

  _modal(box) { this.layer.append(this.dimEl = h('div', { class: 'ct-dim2' }, box)); }
  _closeModal() { if (this.dimEl) this.dimEl.remove(); this.dimEl = null; this.modal = null; }

  _shop(fromPromo) {
    const ar = I.getLang() !== 'en';
    const prevModal = this.modal;
    if (this.dimEl && fromPromo) this.dimEl.style.display = 'none';
    const hold = this.dimEl;
    this.modal = 'shop';
    const items = {};
    const grid = h('div', { class: 'ct-shop' }, SHOP.map((it) => {
      const lvl = h('span', {}, ''); const cost = h('small', {}, '');
      const b = h('button', { class: 'ct-item', onclick: () => { if (this.s.buy(it.id)) { this.sound.play('coin'); refresh(); } } }, h('span', {}, ar ? it.ar : it.en), h('small', {}, ar ? it.desc[0] : it.desc[1]), lvl, cost);
      items[it.id] = { b, lvl, cost };
      return b;
    }));
    const cashEl = h('div', { class: 'ct-f' }, '');
    const refresh = () => {
      cashEl.textContent = `🪙 ${money(this.s.cash)}`;
      for (const it of SHOP) { const c = this.s.upgradeCost(it.id); const x = items[it.id]; x.lvl.textContent = `${I.num(this.s.up[it.id])}/${I.num(it.max)}`; x.cost.textContent = c === null ? I.t('max') : `🪙 ${money(c)}`; x.b.classList.toggle('can', c !== null && this.s.cash >= c); }
    };
    refresh();
    const close = () => { dim.remove(); if (fromPromo && hold) { hold.style.display = ''; this.modal = prevModal; } else this.modal = null; };
    const dim = h('div', { class: 'ct-dim2' }, h('div', { class: 'ct-win ct-prm' }, h('div', { class: 'ct-wt' }, h('span', {}, I.t('shop')), h('button', { onclick: close }, '✕')), h('div', { class: 'ct-wb' }, cashEl, grid, h('button', { class: 'ct-b2 go', onclick: close }, I.t('close')))));
    this.layer.append(dim);
  }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      if (this.mode === 'play') this._update(dt);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const s = this.s;
    if (!this.modal) s.step(dt);
    const ar = I.getLang() !== 'en';
    for (const e of s.drain()) {
      switch (e.type) {
        case 'event': this.sound.play('event'); if (e.id === 'trend') this._banner2(`${I.t('trend')}!`, I.t('trendTxt')); break;
        case 'order': this.sound.play('event'); break;
        case 'orderLate': this._pop(I.t('clientLeft'), '#ff4a3a', -10); this.e.boss.classList.add('show'); this.bossT = 2.5; break;
        case 'auto': this.sound.play('coin'); this.e.hint.textContent = I.t('gpuHint'); break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    const el = this.e;
    el.lv.textContent = `LV${s.rank + 1}`;
    el.rank.textContent = ar ? RANKS[s.rank].ar : RANKS[s.rank].en;
    el.cash.textContent = money(s.cash);
    if (this.starsFor !== (s.goal || 1)) this._buildStars();
    this.starEls.forEach((x, i) => x.classList.toggle('on', i < s.stars));
    el.cnt.textContent = s.goal ? `${I.num(s.stars)}/${I.num(s.goal)}` : '👑';
    const o = s.order;
    if (o) {
      el.order.className = 'ct-f on';
      el.order.replaceChildren(h('span', {}, '📋'), h('span', {}, `${I.t('client')}: ${o.total} ${ar ? KINDS[o.kind].ar : KINDS[o.kind].en}`), h('div', { class: 'ct-prog' }, h('i', { class: o.time < 6 ? 'late' : '', style: `width:${Math.max(0, o.time / o.max * 100)}%` })), h('span', {}, `${I.num(o.total - o.left)}/${I.num(o.total)}`));
      el.hintOrder = true;
    } else { el.order.className = 'ct-f dim'; el.order.textContent = s.rank >= 1 ? '📋 ' + I.t('waiting') : '📋 ' + I.t('ordersFrom'); }
    const z = s.zone; const w = z.w;
    const segs = [[z.c - w * 1.0, z.c - w / 2, '#f0c020'], [z.c - w / 2, z.c + w / 2, '#2ac85a'], [z.c + w / 2, z.c + w * 1.0, '#f0c020']];
    el.meter.style.background = '#e03a3a';
    segs.forEach(([a, b2, col], i) => { const x = el.zone[i]; const aa = Math.max(0, a); const bb = Math.min(1, b2); x.style.left = `${aa * 100}%`; x.style.width = `${Math.max(0, bb - aa) * 100}%`; x.style.background = col; });
    el.needle.style.left = `${s.needle.pos * 100}%`;
    el.hot.textContent = s.hot ? I.t('hot') : '';
    for (const x of this.btns) {
      const un = s.unlocked(x.k);
      x.b.classList.toggle('lock', !un);
      const kk = KINDS[x.k];
      const icon = x.b.querySelector('i'); icon.textContent = un ? kk.icon : '🔒';
      x.small.textContent = un ? `+${I.num(s.starsFor(x.k))} ${I.t('stars')}${s.event && s.event.id === 'trend' && s.event.kind === x.k ? ' · ' + I.t('trend') : ''}` : `${I.t('locked')} ${I.num(kk.unlock + 1)}`;
    }
    const lag = s.event && s.event.id === 'lag';
    if (this.hintT > 0) this.hintT -= dt;
    if (this.bossT > 0) { this.bossT -= dt; if (this.bossT <= 0) this.e.boss.classList.remove('show'); }
    const ri = Math.min(s.rank, SCENE.length - 1);
    const key = `${ri}|${Object.values(this.art).filter(Boolean).length}`;
    if (key !== this.artKey) { this.artKey = key; this._dressScene(ri); }
    if (s.goal) el.hint.textContent = lag ? I.t('lag') : s.stars > 0 ? `${I.num(s.goal - s.stars)} ${I.t('more')}` : I.t('tapGreen');
  }

  /** Office look for a level: generated pictures when they loaded, otherwise the emoji and gradients. */
  _dressScene(ri) {
    const A = this.art; const el = this.e;
    const bg = ri <= 1 ? 'office_dark' : ri <= 3 ? 'office_bright' : 'office_sunset';
    el.scene.style.background = A[bg] ? `#0a1030 url(${A[bg].src}) center/cover no-repeat` : SCENE[ri];
    el.scene.classList.toggle('arted', !!A[bg]);
    const put = (node, name, emoji) => { if (A[name]) { node.classList.add('art'); node.replaceChildren(h('img', { src: A[name].src, alt: '', draggable: 'false' })); } else { node.classList.remove('art'); node.textContent = emoji; } };
    put(el.desk, DESK_ART[ri], DESK[ri]); put(el.me, 'creator', '🧑‍💻'); put(el.bin, 'bin', '🗑️'); put(el.boss, 'ceo', '👩‍💼');
  }

  _banner2(a, b) { const x = h('div', { class: 'ct-banner' }, a, h('small', {}, b)); this.e.scene.append(x); setTimeout(() => x.remove(), 2300); }

  _won() {
    if (this.wonShown) return;
    this.wonShown = true;
    const s = this.s;
    this.save.best = Math.max(this.save.best, s.masterpieces);
    this.save.wins += 1;
    this.post({ type: 'save', save: this.save });
    this.sound.play('promote');
    this.modal = 'won';
    this.layer.append(h('div', { class: 'ct-dim' }, h('div', { class: 'ct-card' },
      h('div', { class: 'ct-title' }, '👑 ', I.t('won')), h('div', { class: 'ct-small' }, I.t('wonText')),
      h('div', { class: 'ct-pill' }, `${I.t('masters')} ${I.num(s.masterpieces)} · ${I.t('trash')} ${I.num(s.slop)}`),
      h('button', { class: 'ct-btn', onclick: () => { this.wonShown = false; this.start(); } }, I.t('again')),
      h('button', { class: 'ct-btn dark', onclick: () => { this.wonShown = false; this.showMenu(); } }, I.t('menu')))));
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.CreatorTycoon = api;
export default api;
