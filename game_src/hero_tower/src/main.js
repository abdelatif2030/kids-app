// «برج الأبطال» — Hero Tower. Entry: window.HeroTower.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A casual tower-climbing power puzzle (like the owner's video, drawn from scratch): a little knight starts at the bottom of a tall
// tower and climbs floor by floor. Tap a GREEN foe (weaker than you) to defeat it and add its power to yours; a RED foe is stronger
// (it only bonks you gently and the floor is tried again). Swords, potions and chests add power; a crystal multiplies it, so the
// order matters. A troll waits halfway, a dark sorcerer at the top and a dragon on the roof. 2D canvas, all art and sound made in
// code. Three chapters. No network, no links, no scores to lose.
import { CHAPTERS, Tower, fmt, normalizeSave, TROLL_FLOOR, SORCERER_FLOOR } from './sim.js';
import { loadArt } from '../../cozy_kit/art.js';
import { setArt, paintSky, drawCloud, drawRoom, drawBase, poly, drawHero, drawFoe, drawBoss, drawItem, drawBubble, drawPoof, drawFire, THEMES } from './art.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';

const CSS = `
.ht-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#2b1b3d;user-select:none;-webkit-user-select:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;background:#3a2a78}
.ht-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ht-layer{position:absolute;inset:0;pointer-events:none}
.ht-layer button,.ht-layer .ht-card{pointer-events:auto}
.ht-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:center}
.ht-pill{background:linear-gradient(180deg,#7a4ad8,#5a2ab8);border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(20,10,50,.4)}
.ht-sep{display:block;width:calc(var(--u)*.5);align-self:stretch;margin:calc(var(--u)*.4) calc(var(--u)*.6);background:rgba(255,255,255,.35);border-radius:9px}
.ht-pill small{font-size:calc(var(--u)*3);opacity:.9}
.ht-pill .bar{display:block;width:calc(var(--u)*14);height:calc(var(--u)*1.6);border-radius:99px;background:rgba(0,0,0,.35);overflow:hidden}
.ht-pill .bar b{display:block;height:100%;background:#7af05a;border-radius:99px;transition:width .3s}
.ht-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:50%;font-size:calc(var(--u)*5.2);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,#8a5af0,#5a2ab8);border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(20,10,50,.4)}
.ht-round:active{transform:scale(.94)}
.ht-banner{position:absolute;left:50%;transform:translateX(-50%);background:linear-gradient(180deg,#ffd23a,#f0a020);border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.4);color:#5a2a00;white-space:nowrap;box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.6) rgba(20,10,50,.4);opacity:0;transition:opacity .35s;pointer-events:none}
.ht-banner.show{opacity:1}
.ht-goal{position:absolute;left:50%;bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));transform:translateX(-50%);background:linear-gradient(180deg,#7a4ad8,#5a2ab8);border:calc(var(--u)*.45) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.8) calc(var(--u)*3.6);white-space:nowrap;pointer-events:none;max-width:92%;overflow:hidden;text-overflow:ellipsis;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(20,10,50,.4)}
.ht-banner small{display:block;font-size:calc(var(--u)*2.8);opacity:.85}
.ht-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*11.5),env(safe-area-inset-bottom));transform:translateX(-50%);background:linear-gradient(180deg,#7a4ad8,#5a2ab8);border:calc(var(--u)*.45) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;max-width:92%;overflow:hidden;text-overflow:ellipsis}
.ht-hint.show{opacity:1}
.ht-dim{position:absolute;inset:0;background:rgba(30,15,60,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.ht-card{background:linear-gradient(180deg,#7a4ad8,#4a1aa8);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*76);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(10,5,30,.5)}
.ht-logo{font-size:calc(var(--u)*11);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.8) #7a1a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #4a0a2a;text-align:center;line-height:1.1}
.ht-title{font-size:calc(var(--u)*7.4);font-weight:900;color:#ff5a8a;-webkit-text-stroke:calc(var(--u)*.6) #fff;paint-order:stroke fill;text-align:center}
.ht-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;opacity:.95}
.ht-stat{display:flex;gap:calc(var(--u)*2);width:100%}
.ht-stat div{flex:1;background:rgba(0,0,0,.3);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2);text-align:center;font-weight:900;font-size:calc(var(--u)*5)}
.ht-stat small{display:block;font-size:calc(var(--u)*2.6);opacity:.8}
.ht-stars{font-size:calc(var(--u)*11)}.ht-stars .off{filter:grayscale(1);opacity:.3}
.ht-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.2);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.8) calc(var(--u)*6);min-height:calc(var(--u)*12);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.ht-btn.alt{background:linear-gradient(180deg,#ffb84a,#f08a1a);box-shadow:0 calc(var(--u)*.9) 0 #a85a0a}
.ht-btn.dark{background:linear-gradient(180deg,#8a6ad8,#5a3aa8);box-shadow:0 calc(var(--u)*.9) 0 #2a1a6a;font-size:calc(var(--u)*4.2)}
.ht-btn:active{transform:translateY(calc(var(--u)*.5))}
.ht-btn:focus-visible,.ht-round:focus-visible,.ht-ch:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.ht-chs{display:flex;gap:calc(var(--u)*2);width:100%}
.ht-ch{flex:1;border:none;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*1);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*3.6)}
.ht-ch i{font-style:normal;font-size:calc(var(--u)*8)}
.ht-ch.castle{background:linear-gradient(180deg,#c070a0,#7a3a90);box-shadow:0 calc(var(--u)*.7) 0 #3a1a60}
.ht-ch.ice{background:linear-gradient(180deg,#7ab8f0,#3a78c8);box-shadow:0 calc(var(--u)*.7) 0 #1a3a8a}
.ht-ch.fire{background:linear-gradient(180deg,#f08a4a,#c83a2a);box-shadow:0 calc(var(--u)*.7) 0 #7a1a1a}
.ht-ch.lock{background:linear-gradient(180deg,#b8b8c8,#8a8a9a);box-shadow:0 calc(var(--u)*.7) 0 #6a6a7a}
@media (orientation:landscape){.ht-card{width:calc(var(--u)*110);max-width:94vw;gap:calc(var(--u)*1.2);padding:calc(var(--u)*2) calc(var(--u)*4)}.ht-logo{font-size:calc(var(--u)*9)}.ht-stars{font-size:calc(var(--u)*7)}.ht-title{font-size:calc(var(--u)*6)}.ht-btn{min-height:calc(var(--u)*8.5);font-size:calc(var(--u)*4);padding:calc(var(--u)*.6) calc(var(--u)*4)}.ht-btn.dark{font-size:calc(var(--u)*3.6)}.ht-stat div{font-size:calc(var(--u)*4)}.ht-stat small{font-size:calc(var(--u)*2.4)}}
.ht-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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

const ICON = { castle: '🏰', ice: '❄️', fire: '🔥' };
const HOME_X = 0.1; // where the hero stands when he comes up on the left (the other side is 1 - HOME_X)
const exitRight = (i) => i % 2 === 0; // the ladders zig-zag: floor 1 exits on the right, floor 2 on the left ...
const ease = (k) => k * k * (3 - 2 * k);

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
    loadArt(this.base, ['hero', 'foe_slime', 'foe_goblin', 'foe_skeleton', 'foe_imp', 'foe_orc', 'boss_troll', 'boss_sorcerer', 'boss_dragon', 'sky_castle', 'sky_ice', 'sky_fire']).then((a) => { setArt(a); this.skyKey = ''; });
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('ht-style')) document.head.append(h('style', { id: 'ht-style' }, CSS));
    this.root = h('div', { class: 'ht-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'ht-layer' });
    this.root.append(this.layer);
    this.clouds = Array.from({ length: 8 }, (_, i) => ({ x: Math.random(), y: i / 8, s: 0.6 + Math.random() * 0.9, v: 0.004 + Math.random() * 0.01 }));
    this.mode = 'menu';
    this.tw = null;
    this.fx = []; // particles and floating numbers
    this.anim = new Map(); // thing id -> { hit, shake, open }
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.t0 = performance.now();
    this.last = this.t0;
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.skyKey = '';
  }

  _theme() { return this.tw ? this.tw.ch.theme : 'castle'; }

  _sky() {
    const th = this._theme();
    const key = `${th}${this.cv.width}x${this.cv.height}`;
    if (this.skyKey !== key) { this.sky = paintSky(this.cv.width, this.cv.height, th); this.skyKey = key; }
    return this.sky;
  }

  // ---- geometry -----------------------------------------------------------------------------------------------------

  _geo() {
    // a narrow tower like the owner's video: three floors fit the screen (the one below, the hero's, the one above) and you can see
    // the next floor's foes. The hero's floor sits in the lower half.
    const land = this.cw > this.ch;
    const fh = Math.min(this.ch / (land ? 3.5 : 4.3), (this.cw * 0.94) / 3.0);
    const W = Math.min(this.cw * 0.94, fh * 3.0);
    const x = (this.cw - W) / 2;
    const currTop = this.ch - fh * 2 - Math.max(this.u * 1.5, 4);
    return { fh, W, x, currTop };
  }
  _roomTop(G, i) { return G.currTop + (this.camIdx - i) * G.fh; }
  _homeX(G, i) { return G.x + G.W * (exitRight(i) ? HOME_X : 1 - HOME_X); }
  _ladderX(G, i) { return G.x + G.W * (exitRight(i) ? 0.93 : 0.07); }

  /** Things of floor [i] (default: the hero's) with their positions (a boss stands on the ladder side). */
  _spots(i) {
    const tw = this.tw;
    const idx = i ?? tw.index;
    const cur = idx === tw.index;
    const G = this._geo();
    const right = exitRight(idx);
    let things = tw.floors[idx].things.filter((x) => !cur || !tw.gone.has(x.id) || (this.anim.get(x.id) && this.anim.get(x.id).hit < 1)).sort((a, b) => (a.type === 'boss') - (b.type === 'boss'));
    if (!right) things = things.reverse();
    const n = things.length;
    const top = this._roomTop(G, idx);
    const gy = top + G.fh * 0.93;
    const wts = things.map((th) => (th.type === 'boss' ? 2.4 : 1));
    const tot = wts.reduce((a, b2) => a + b2, 0);
    const crowd = n >= 6 ? 0.82 : 1;
    let acc = 0;
    return things.map((th, k) => {
      const f = n === 1 ? 0.5 : (acc + wts[k] / 2) / tot;
      acc += wts[k];
      const px = G.x + G.W * (0.22 + 0.56 * f);
      const back = k % 2;
      const sc = (th.type === 'boss' ? 0.7 : th.type === 'enemy' ? 0.5 : 0.42) * crowd;
      const s = G.fh * sc * (back ? 0.93 : 1);
      return { th, x: px, y: gy - back * G.fh * 0.035, s, back, idx };
    });
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerup', (e) => {
      if (e.target.closest('button') || e.target.closest('.ht-dim')) return;
      if (this.mode !== 'play' || !this.tw || this.busy) return;
      const r = root.getBoundingClientRect();
      this._tapAt(e.clientX - r.left, e.clientY - r.top);
    });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'ht-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _tapAt(px, py) {
    let best = null;
    let bd = 1e9;
    for (const sp of this._spots()) {
      if (this.tw.gone.has(sp.th.id)) continue;
      const dx = px - sp.x;
      const dy = py - (sp.y - sp.s * 0.45);
      const rad = Math.max(sp.s * (sp.th.type === 'boss' ? 0.75 : 0.62), this.u * 5.5);
      const d = Math.hypot(dx, dy);
      if (d < rad && d < bd) { bd = d; best = sp; }
    }
    if (best) this._use(best);
  }

  _use(sp) {
    const tw = this.tw;
    const th = sp.th;
    this.busy = true;
    this.pendingHint = false;
    // the hero dashes to the thing, strikes, and the rule decides
    const side = this.hero.x <= sp.x ? -1 : 1;
    this.hero = { phase: 'dash', k: 0, from: this.hero.x, to: sp.x + side * sp.s * 0.45, sp, th, swing: 0, flip: side === 1 };
    this.sound.play('tap');
  }

  _resolve(h0) {
    const tw = this.tw;
    const th = h0.th;
    const sp = h0.sp;
    const before = tw.p;
    const res = tw.tap(th.id);
    const G = this._geo();
    if (res.type === 'locked') { this._float(sp.x, sp.y - sp.s * 0.9, '🔑?', '#ffd23a'); this.sound.play('no'); this._hint(t('needKey'), 2.2); this.anim.set(th.id, { hit: 0, shake: 0.4 }); return 'back'; }
    if (res.type === 'lose') {
      this.sound.play('lose');
      this.shakeHero = 0.5;
      this._float(sp.x, sp.y - sp.s * 1.1, t('almost'), '#ff8a8a');
      if (th.type === 'boss') this.sound.play('roar');
      this.loseAt = 0.9; // show the card after a moment
      return 'lose';
    }
    // a win
    this.anim.set(th.id, { hit: 0.001, open: th.type === 'chest' });
    const kind = th.type;
    if (kind === 'enemy' || kind === 'boss') {
      this.sound.play('hit', Math.min(10, Math.round(Math.log2(th.power + 1))));
      this.fx.push({ k: 0, kind: 'poof', x: sp.x, y: sp.y - sp.s * 0.45, s: sp.s });
      this._float(sp.x, sp.y - sp.s * 1.2, `+${fmt(res.gain)}`, '#7af05a');
    } else if (kind === 'sword') { this.sound.play('sword'); this._float(sp.x, sp.y - sp.s * 1.1, `+${fmt(res.gain)}`, '#ffd23a'); }
    else if (kind === 'potion') { this.sound.play('potion'); this._float(sp.x, sp.y - sp.s * 1.1, `+${fmt(res.gain)}`, '#ff98a8'); }
    else if (kind === 'crystal') { this.sound.play('crystal'); this._float(sp.x, sp.y - sp.s * 1.1, `+${fmt(res.gain)}`, '#e0a0ff'); }
    else if (kind === 'mult') { this.sound.play('crystal'); this._float(sp.x, sp.y - sp.s * 1.1, `×${th.mul}`, '#ffd23a'); this.sound.play('power'); }
    else if (kind === 'key') { this.sound.play('key'); this._float(sp.x, sp.y - sp.s * 1.1, '🔑', '#ffd23a'); }
    else if (kind === 'chest') { this.sound.play('chest'); this._float(sp.x, sp.y - sp.s * 1.1, `+${fmt(res.gain)}`, '#ffd23a'); }
    this.powerShown = this.powerShown ?? before;
    this.puff = 0.35;
    this.gainPulse = 1;
    if (res.cleared) {
      this.clearedAt = 0.6;
      if (th.type === 'boss' && tw.state === 'climb') this._banner(t('stageClear'), 2);
      else if (th.type === 'boss' && tw.state === 'done') this._banner(t('victory'), 2);
    }
    this._hud();
    return 'win';
  }

  _float(x, y, text, color) { this.fx.push({ k: 0, kind: 'text', x, y, text, color }); }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _hint(text, secs = 2.5) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), secs * 1000);
  }
  _banner(text, secs = 2.2, sub = '') {
    if (!this.bannerEl) return;
    this.bannerEl.replaceChildren(text, ...(sub ? [h('small', {}, sub)] : []));
    this.bannerEl.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => this.bannerEl && this.bannerEl.classList.remove('show'), secs * 1000);
  }
  _soundBtn(style) {
    const b = h('button', { class: 'ht-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }
  _backBtn() {
    return h('button', { class: 'ht-round', style: 'top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3)', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→');
  }

  showMenu() {
    this.mode = 'menu';
    this.tw = null;
    this.sound.setMode('menu');
    this._clear();
    const done = Object.keys(this.save.stars).length;
    this.layer.append(
      this._backBtn(),
      h('div', { class: 'ht-dim', style: 'background:none' }, h('div', { class: 'ht-card' },
        h('div', { class: 'ht-logo' }, t('title')),
        h('div', { class: 'ht-small' }, '🏰 ⚔️ 🐉'),
        h('div', { class: 'ht-chs' }, CHAPTERS.map((ch) => {
          const locked = ch.id > this.save.unlocked;
          const st = this.save.stars[ch.id] ?? 0;
          return h('button', { class: `ht-ch ${locked ? 'lock' : ch.theme}`, 'aria-label': `${t('chapter')} ${ch.id}`, onclick: () => { if (locked) { this.sound.play('no'); return; } this.startChapter(ch); } },
            h('i', {}, locked ? '🔒' : ICON[ch.theme]), t(ch.theme), h('span', {}, locked ? '' : '⭐'.repeat(st) || '·'));
        })),
        h('button', { class: 'ht-btn', onclick: () => this.startChapter(CHAPTERS[Math.min(this.save.unlocked, CHAPTERS.length) - 1]) }, '▶ ', t('play')),
        done >= CHAPTERS.length ? h('div', { class: 'ht-small' }, t('allDone')) : null)),
      this._soundBtn('top:max(calc(var(--u)*2.5),env(safe-area-inset-top));right:calc(var(--u)*3)'),
    );
  }

  startChapter(ch) {
    this.chapter = ch;
    this.tw = new Tower(ch, Math.floor(Math.random() * 1e9), this.easy);
    this.mode = 'play';
    this.busy = false;
    this.camIdx = 0;
    this.hero = { x: 0, phase: 'idle', k: 0, swing: 0, flip: false };
    this.anim.clear();
    this.fx = [];
    this.shakeHero = 0;
    this.sound.setMode('play');
    this.firstLoss = true;
    this.crystalSaid = false;
    this._build();
    this._arrive();
  }

  _build() {
    this._clear();
    this.hud = { p: h('span'), f: h('span'), bar: h('b') };
    this.hintEl = h('div', { class: 'ht-hint' });
    this.goalEl = h('div', { class: 'ht-goal' });
    this.bannerEl = h('div', { class: 'ht-banner', style: 'top:calc(max(calc(var(--u)*2.5),env(safe-area-inset-top)) + var(--u)*14)' });
    this.layer.append(
      this._backBtn(),
      h('div', { class: 'ht-top', style: 'pointer-events:none' },
        h('div', { class: 'ht-pill' }, h('span', {}, '⚔️'), this.hud.p, h('i', { class: 'ht-sep' }), this.hud.f, h('i', { class: 'bar' }, this.hud.bar))),
      h('button', { class: 'ht-round', style: 'top:max(calc(var(--u)*2.5),env(safe-area-inset-top));right:calc(var(--u)*15.5)', 'aria-label': t('tryAgain'), onclick: () => this.startChapter(this.chapter) }, '↻'),
      this._soundBtn('top:max(calc(var(--u)*2.5),env(safe-area-inset-top));right:calc(var(--u)*3)'),
      this.bannerEl,
      this.hintEl,
      this.goalEl,
    );
    this._hud();
  }

  _hud() {
    const tw = this.tw;
    if (!tw || !this.hud) return;
    this.hud.p.textContent = fmt(tw.p);
    const last = tw.index >= tw.total - 1;
    this.hud.f.textContent = last ? t('roof') : `${t('floor')} ${num(tw.index + 1)}/${num(tw.total - 1)}`;
    if (this.goalEl) this.goalEl.textContent = tw.floor.kind === 'normal' ? (tw.index < TROLL_FLOOR - 1 ? t('goalTroll') : tw.index < SORCERER_FLOOR - 1 ? t('goalSorc') : t('goalDragon')) : t('goalBoss');
    this.hud.bar.style.width = `${(tw.index / (tw.total - 1)) * 100}%`;
  }

  /** The hero stands on a new floor: boss announcements, hints, and the soft-lock check. */
  _arrive() {
    const tw = this.tw;
    const f = tw.floor;
    this.hero.x = this._homeX(this._geo(), tw.index);
    this.hero.flip = !exitRight(tw.index);
    this.hero.phase = 'idle';
    this.busy = false;
    this._hud();
    if (f.kind === 'troll') { this._banner(t('trollName'), 2.6, t('goalBoss')); this.sound.play('roar'); }
    else if (f.kind === 'sorcerer') { this._banner(t('sorcName'), 2.6, t('goalBoss')); this.sound.play('roar'); }
    else if (f.kind === 'dragon') { this._banner(t('dragonName'), 2.6, t('goalBoss')); this.sound.play('roar'); }
    else if (tw.index === 0) this._banner(t('defeatWeaker'), 3.2, t('absorb'));
    if (tw.index === 0) setTimeout(() => this.mode === 'play' && !this.busy && this._hint(t('tapGreen2'), 4), 900);
    else if (f.things.some((x) => x.type === 'mult') && !this.crystalSaid) { this.crystalSaid = true; setTimeout(() => this.mode === 'play' && !this.busy && this._hint(t('crystalHint'), 4), 900); }
    if (!tw.solvable()) setTimeout(() => this.mode === 'play' && this._weakCard(), 700);
  }

  _loseCard() {
    const tw = this.tw;
    this.mode = 'lose';
    this.layer.append(h('div', { class: 'ht-dim' }, h('div', { class: 'ht-card' },
      h('div', { class: 'ht-title' }, t('almost')),
      h('div', { class: 'ht-small' }, t('almostText')),
      h('div', { class: 'ht-stat' }, h('div', {}, h('small', {}, t('power')), fmt(tw.p0)), h('div', {}, h('small', {}, t('floors')), `${num(tw.index + 1)}/${num(tw.total - 1)}`)),
      h('button', { class: 'ht-btn', onclick: () => { this.layer.querySelector('.ht-dim:last-child')?.remove(); this.mode = 'play'; tw.retryFloor(); this.anim.clear(); this.hero.phase = 'idle'; this.busy = false; this._arrive2(); } }, '↻ ', t('tryAgain')),
      h('button', { class: 'ht-btn dark', onclick: () => this.startChapter(this.chapter) }, t('startOver')))));
  }

  _arrive2() {
    this._hud();
    this.hero.x = this._homeX(this._geo(), this.tw.index);
    this.hero.flip = !exitRight(this.tw.index);
    if (this.firstLoss) { this.firstLoss = false; setTimeout(() => this.mode === 'play' && this._hint(t('redHint'), 4), 500); }
    if (!this.tw.solvable()) setTimeout(() => this.mode === 'play' && this._weakCard(), 600);
  }

  _weakCard() {
    this.mode = 'lose';
    this.layer.append(h('div', { class: 'ht-dim' }, h('div', { class: 'ht-card' },
      h('div', { class: 'ht-title' }, t('almost')),
      h('div', { class: 'ht-small' }, t('tooWeak')),
      h('button', { class: 'ht-btn', onclick: () => this.startChapter(this.chapter) }, '↻ ', t('startOver')))));
  }

  _winCard() {
    const tw = this.tw;
    const ch = this.chapter;
    const stars = tw.stars;
    this.save.stars[ch.id] = Math.max(this.save.stars[ch.id] ?? 0, stars);
    if (ch.id + 1 > this.save.unlocked && ch.id < CHAPTERS.length) this.save.unlocked = ch.id + 1;
    this.save.plays++;
    this._saveNow();
    this.sound.play('win');
    this.mode = 'won';
    const last = ch.id >= CHAPTERS.length;
    this.layer.append(h('div', { class: 'ht-dim' }, h('div', { class: 'ht-card' },
      h('div', { class: 'ht-title' }, t('complete')),
      h('div', { class: 'ht-small' }, `${t(ch.theme)} · ${t('win')}`),
      h('div', { class: 'ht-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'ht-stat' }, h('div', {}, h('small', {}, t('power')), fmt(tw.p)), h('div', {}, h('small', {}, t('floors')), `${num(tw.total - 1)}/${num(tw.total - 1)}`)),
      last ? h('div', { class: 'ht-small' }, t('allDone')) : h('button', { class: 'ht-btn', onclick: () => this.startChapter(CHAPTERS[ch.id]) }, t('next'), ' ▶'),
      h('button', { class: 'ht-btn alt', onclick: () => this.startChapter(ch) }, '↻ ', t('replay')),
      h('button', { class: 'ht-btn dark', onclick: () => this.showMenu() }, t('chapters')))));
  }

  // ---- the loop -----------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const time = (now - this.t0) / 1000;
    const g = this.g;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(this._sky(), 0, 0);
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this._clouds(g, dt);
    if (this.tw) { this._step(dt); this._drawTower(g, time); } else this._drawMenuScene(g, time);
  }

  _clouds(g, dt) {
    const camShift = this.tw ? this.camIdx * 0.06 : 0;
    for (const c of this.clouds) {
      c.x += c.v * dt;
      if (c.x > 1.3) c.x = -0.3;
      const y = ((c.y + camShift) % 1.1) * this.ch;
      drawCloud(g, c.x * this.cw, y, this.u * 14 * c.s);
    }
  }

  _drawMenuScene(g, time) {
    const s = this.u * 40;
    drawHero(g, this.cw * 0.22, this.ch * 0.9, s * 0.7, time, { swing: 0.5 + 0.5 * Math.sin(time * 2) });
    drawBoss(g, 'dragon', this.cw * 0.8, this.ch * 0.88, s * 0.75, time);
  }

  /** Advance the hero's actions, the camera and the effects. */
  _step(dt) {
    const tw = this.tw;
    const G = this._geo();
    const homeX = this._homeX(G, tw.index);
    // the camera follows the floor
    if (this.hero.phase === 'climb') this.camIdx = tw.index + (this.climbK || 0);
    else { this.camIdx += (tw.index - this.camIdx) * Math.min(1, dt * 5); if (Math.abs(this.camIdx - tw.index) < 0.002) this.camIdx = tw.index; }
    // pulse timers
    if (this.puff) this.puff = Math.max(0, this.puff - dt);
    if (this.gainPulse) this.gainPulse = Math.max(0, this.gainPulse - dt * 2);
    if (this.shakeHero) this.shakeHero = Math.max(0, this.shakeHero - dt);
    for (const [id, a] of this.anim) { if (a.hit > 0 && a.hit < 1) a.hit = Math.min(1, a.hit + dt * 2.8); if (a.shake) a.shake = Math.max(0, a.shake - dt); if (a.hit >= 1 && !tw.gone.has(id)) a.hit = 0; }
    for (const f of this.fx) f.k += dt * (f.kind === 'text' ? 0.9 : 1.6);
    this.fx = this.fx.filter((f) => f.k < 1);
    // the hero's action machine
    const hr = this.hero;
    if (hr.phase === 'idle' && this.mode === 'play' && !this.busy) { // standing and waiting: look at the nearest foe or treasure, never turn the back to them
      let best = null; for (const sp of this._spots()) if (!best || Math.abs(sp.x - hr.x) < Math.abs(best.x - hr.x)) best = sp;
      if (best && Math.abs(best.x - hr.x) > 4) hr.flip = best.x < hr.x;
    }
    if (hr.phase === 'dash') {
      hr.k += dt * 5;
      hr.x = hr.from + (hr.to - hr.from) * ease(Math.min(1, hr.k));
      if (hr.k >= 1) { hr.phase = 'strike'; hr.k = 0; hr.out = this._resolve(hr); }
    } else if (hr.phase === 'strike') {
      hr.k += dt * 2.6; // slow enough to SEE the sword swing
      hr.swing = Math.sin(Math.min(1, hr.k) * Math.PI);
      if (hr.k >= 1) {
        hr.swing = 0; hr.k = 0;
        if (hr.out === 'lose') { hr.phase = 'back'; hr.from = hr.x; hr.to = homeX; hr.flip = hr.to < hr.from; } // bonked: back to where he came up
        else { // a win: he stays where he is and walks straight to the next target (like the video)
          hr.phase = 'idle';
          if (tw.state === 'climb') this._startClimb();
          else if (tw.state === 'done') { this.mode = 'won'; setTimeout(() => this._winCard(), 900); }
          else this.busy = false;
        }
      }
    } else if (hr.phase === 'back') {
      hr.k += dt * 4;
      hr.x = hr.from + (hr.to - hr.from) * ease(Math.min(1, hr.k));
      if (hr.k >= 1) { hr.phase = 'idle'; this._loseCard(); }
    } else if (hr.phase === 'run') { // to the ladder
      hr.k += dt * 2.2;
      hr.x = hr.from + (hr.to - hr.from) * ease(Math.min(1, hr.k));
      hr.flip = hr.to < hr.from;
      if (hr.k >= 1) { hr.phase = 'climb'; hr.k = 0; this.climbK = 0; this.sound.play('climb'); }
    } else if (hr.phase === 'climb') {
      hr.k += dt * 1.1;
      this.climbK = Math.min(1, hr.k);
      if (hr.k >= 1) {
        this.climbK = 0;
        tw.climb();
        this.camIdx = tw.index - 0.001 + 0.001;
        this.anim.clear();
        this._arrive();
      }
    }
  }

  _startClimb() {
    const G = this._geo();
    const hr = this.hero;
    hr.phase = 'run';
    hr.k = 0;
    hr.from = hr.x;
    hr.to = this._ladderX(G, this.tw.index);
    this.sound.play('power');
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _drawTower(g, time) {
    const tw = this.tw;
    const G = this._geo();
    const theme = tw.ch.theme;
    const T = THEMES[theme];
    const first = Math.max(0, Math.floor(tw.index - 2));
    const lastI = Math.min(tw.total - 1, tw.index + 5);
    // the ground: the stone base with the castle gate under floor 1, then grass
    const top0 = this._roomTop(G, 0);
    const baseH = G.fh * 0.5;
    if (top0 + G.fh < this.ch) {
      g.fillStyle = theme === 'ice' ? '#e8f4ff' : theme === 'fire' ? '#5a2a20' : '#58b848';
      g.fillRect(0, top0 + G.fh + baseH * 0.9, this.cw, this.ch - (top0 + G.fh));
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, top0 + G.fh + baseH * 0.9, this.cw, this.u * 0.8);
      drawBase(g, G.x, top0 + G.fh, G.W, baseH, theme);
    }
    for (let i = first; i <= lastI; i++) {
      const top = this._roomTop(G, i);
      if (top > this.ch || top + G.fh < 0) continue;
      const fl = tw.floors[i];
      if (fl.kind === 'dragon') this._drawRoof(g, G, top, T, time);
      else drawRoom(g, G.x, top, G.W, G.fh, theme, i + 1, time, exitRight(i) ? 'R' : 'L', i > 0 ? (exitRight(i) ? 'L' : 'R') : null);
      if (fl.kind === 'dragon') { const hx = G.x + G.W * (exitRight(i) ? 0.07 : 0.93); void hx; }
      // the floors above the hero's: the next one shows its foes, the one after it is only a dark shape (the unknown)
      if (i > tw.index && i <= tw.index + 2) {
        this._drawThings(g, time, this._spots(i), false);
        if (i === tw.index + 2) { g.fillStyle = 'rgba(35,18,70,0.74)'; g.fillRect(G.x - G.fh * 0.06, top, G.W + G.fh * 0.12, G.fh); }
      } else if (i > tw.index + 2) { g.fillStyle = 'rgba(35,18,70,0.74)'; g.fillRect(G.x - G.fh * 0.06, top, G.W + G.fh * 0.12, G.fh); }
    }
    // the things and the hero of the floor the camera is near
    const roomTop = this._roomTop(G, tw.index);
    const gy = roomTop + G.fh * 0.93;
    const hr = this.hero;
    this._drawThings(g, time, this._spots(), true);
    // an arrow on the ladder once the floor is clear
    if (tw.state === 'climb' || (hr.phase === 'run' || hr.phase === 'climb')) {
      const ax = this._ladderX(G, tw.index);
      const ay = roomTop + G.fh * 0.5 + Math.sin(time * 6) * G.fh * 0.03;
      poly(g, [[ax, ay - G.fh * 0.12], [ax + G.fh * 0.1, ay], [ax + G.fh * 0.04, ay], [ax + G.fh * 0.04, ay + G.fh * 0.1], [ax - G.fh * 0.04, ay + G.fh * 0.1], [ax - G.fh * 0.04, ay], [ax - G.fh * 0.1, ay]], '#ffb030', G.fh * 0.02);
    }
    // the hero
    const hs = G.fh * 0.52;
    const hy = hr.phase === 'climb' ? this._roomTop(G, tw.index + (this.climbK || 0)) + G.fh * 0.93 : gy;
    const sh = this.shakeHero ? Math.sin(this.shakeHero * 60) * hs * 0.05 : 0;
    const puffS = 1 + (this.puff ? 0.12 * Math.sin((this.puff / 0.35) * Math.PI) : 0);
    g.save(); g.translate(hr.x + sh, hy); g.scale(puffS, puffS); g.translate(-(hr.x + sh), -hy);
    drawHero(g, hr.x + sh, hy, hs, time, { swing: hr.swing, k: hr.phase === 'strike' ? hr.k : -1, sad: this.shakeHero > 0, flip: !!hr.flip });
    g.restore();
    // the slash: a bright crescent where the hero strikes
    if (hr.phase === 'strike' && hr.sp) {
      const k = Math.min(1, hr.k);
      const dir = hr.flip ? -1 : 1;
      g.save(); g.translate(hr.x + dir * hs * 0.45, hy - hs * 0.45); g.scale(dir, 1);
      g.strokeStyle = `rgba(190,235,255,${0.95 * (1 - k * 0.6)})`; g.lineWidth = hs * 0.09; g.lineCap = 'round';
      g.beginPath(); g.arc(0, 0, hs * 0.38, -1.2 + k * 0.5, 1.2 + k * 0.5); g.stroke();
      g.restore();
    }
    // the hero's own power above his head
    if (this.mode === 'play' || this.mode === 'lose' || hr.phase !== 'climb') drawBubble(g, fmt(tw.p), hr.x, hy - hs * 1.28, hs * (0.95 + 0.12 * (this.gainPulse || 0)), 'purple', true);
    // effects
    for (const f of this.fx) {
      if (f.kind === 'poof') drawPoof(g, f.x, f.y, f.s, f.k);
      else {
        g.save(); g.globalAlpha = 1 - f.k * f.k; g.font = `900 ${this.u * 5.4}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.lineWidth = this.u * 1.1; g.strokeStyle = 'rgba(30,10,60,0.85)'; g.fillStyle = f.color;
        g.strokeText(f.text, f.x, f.y - f.k * this.u * 10); g.fillText(f.text, f.x, f.y - f.k * this.u * 10); g.restore();
      }
    }
    // a dragon breath when the roof fight is lost
    if (this.shakeHero > 0 && tw.floor.kind === 'dragon') drawFire(g, this.cw * 0.7, gy - G.fh * 0.3, G.fh * 0.35, 1 - this.shakeHero / 0.5, -1);
  }

  /** Foes, bosses and treasures of one floor with their power labels. [live] = the hero's floor (glow, hit animations). */
  _drawThings(g, time, sps, live) {
    const tw = this.tw;
    const hx = this.hero ? this.hero.x : 0;
    for (const [si, sp] of sps.entries()) {
      const a = live ? this.anim.get(sp.th.id) : null;
      const hit = a && a.hit ? a.hit : 0;
      const shx = a && a.shake ? Math.sin(a.shake * 50) * sp.s * 0.05 : 0;
      const x = sp.x + shx;
      const th = sp.th;
      const face = live ? (hx < sp.x ? 1 : -1) : (exitRight(sp.idx) ? 1 : -1);
      if (th.type === 'enemy') drawFoe(g, th.sprite, x, sp.y, sp.s, time, face, hit);
      else if (th.type === 'boss') drawBoss(g, th.sprite, x, sp.y, sp.s, time, hit);
      else if (!(hit > 0.6)) drawItem(g, th.type, x, sp.y, sp.s, time, !!(a && a.open) || (live && th.type === 'chest' && tw.gone.has(th.id)), th.type === 'mult' ? `×${th.mul}` : '');
      const gone = live && tw.gone.has(th.id);
      if (!gone) {
        const ly = sp.y - sp.s * (th.type === 'boss' ? 1.45 : th.type === 'enemy' ? 1.0 : 0.95) - sp.s * 0.12 - (si % 2) * sp.s * 0.3;
        const bs = sp.s * (live ? 1.0 : 0.72);
        if (th.type === 'enemy' || th.type === 'boss') drawBubble(g, fmt(th.power), x, ly, bs * (th.type === 'boss' ? 0.9 : 1.0), tw.isGreen(th) ? 'green' : 'red', true);
        else if (th.type === 'sword' || th.type === 'potion' || th.type === 'chest' || th.type === 'crystal') drawBubble(g, `+${fmt(th.add)}`, x, ly, bs, 'gold', false);
        else if (th.type === 'mult') drawBubble(g, `×${th.mul}`, x, ly, bs, 'purple', false);
        else if (th.type === 'key') drawBubble(g, '🔑', x, ly, bs, 'blue', false);
        // a green glow around beatable foes
        if (live && (th.type === 'enemy' || th.type === 'boss') && tw.isGreen(th) && this.mode === 'play') {
          g.strokeStyle = `rgba(90,255,110,${0.35 + 0.25 * Math.sin(time * 5)})`; g.lineWidth = sp.s * 0.05;
          g.beginPath(); g.ellipse(x, sp.y - sp.s * 0.02, sp.s * (th.type === 'boss' ? 0.5 : 0.32), sp.s * 0.07, 0, 0, Math.PI * 2); g.stroke();
        }
      }
    }
  }

  _drawRoof(g, G, top, T, time) {
    // the open roof: stone floor with battlements, the sky behind
    const y = top + G.fh * 0.9;
    g.fillStyle = T.brick; g.fillRect(G.x - G.fh * 0.06, y, G.W + G.fh * 0.12, G.fh * 0.1);
    g.fillStyle = T.brick2;
    for (let bx = G.x - G.fh * 0.06; bx < G.x + G.W; bx += G.fh * 0.3) g.fillRect(bx, y - G.fh * 0.16, G.fh * 0.16, G.fh * 0.16);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(G.x - G.fh * 0.06, y, G.W + G.fh * 0.12, G.fh * 0.015);
    void time;
  }

  pause() { this.sound.suspend(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill);
    clearTimeout(this._ht);
    clearTimeout(this._bt);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

void TROLL_FLOOR; void SORCERER_FLOOR;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.HeroTower = api;
export default api;
