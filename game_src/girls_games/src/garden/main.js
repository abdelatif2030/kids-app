// «حديقة الفراشات والزهور» — a gentle garden game for girls aged 2-4 (docs/GIRLS_SECTION_PLAN.md, game 5).
// Six empty pots. Tap a seed colour, tap a pot to plant it, tap the watering can, tap the pot: it sprouts, then blooms and a baby
// butterfly flies out; watering again makes the flower big. When all six pots have bloomed the butterflies make a heart and the child
// earns ONE star (never for time). No timers, scores, locks, coins or failing; a wrong tap only wiggles a leaf.
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const COLORS = [
  { id: 'red', ar: 'أحمر', en: 'red', css: '#ff4a4a', sprout: 'fl1_02', small: 'fl1_02', big: 'fl2_01' },
  { id: 'yellow', ar: 'أصفر', en: 'yellow', css: '#ffd23a', sprout: 'fl1_04', small: 'fl1_04', big: 'fl2_02' },
  { id: 'pink', ar: 'وردي', en: 'pink', css: '#ff7ac0', sprout: 'fl1_06', small: 'fl1_06', big: 'fl2_03' },
  { id: 'blue', ar: 'أزرق', en: 'blue', css: '#4aa8ff', sprout: 'fl1_08', small: 'fl1_08', big: 'fl2_04' },
  { id: 'purple', ar: 'بنفسجي', en: 'purple', css: '#b06aff', sprout: 'fl1_10', small: 'fl1_10', big: 'fl2_05' },
  { id: 'orange', ar: 'برتقالي', en: 'orange', css: '#ff9a3a', sprout: 'fl1_12', small: 'fl1_12', big: 'fl2_06' },
];
export const FEM = ['حمرا', 'صفرا', 'وردي', 'زرقا', 'بنفسجي', 'برتقالي']; // the colour word for «زهرة ...» (feminine)
export const POTS = 6;
export const PLACES = [
  { ar: 'مرج الربيع', en: 'Spring meadow', emoji: '🌼' }, { ar: 'حقل التوليب', en: 'Tulip field', emoji: '🌷' }, { ar: 'مزرعة دوّار الشمس', en: 'Sunflower farm', emoji: '🌻' },
  { ar: 'حديقة الورد', en: 'Rose garden', emoji: '🌹' }, { ar: 'حديقة الثلج', en: 'Winter garden', emoji: '❄️' }, { ar: 'حديقة الليل السحرية', en: 'Magic night garden', emoji: '🌙' },
];

/** The rules (no browser): a pot goes empty -> planted -> sprout (watered once) -> bloom (watered twice, a butterfly comes out) -> big (watered three times).
 *  The garden is complete when every pot has bloomed; one star per finished garden. */
export class Garden {
  constructor() { this.pots = Array.from({ length: POTS }, () => ({ color: -1, stage: 0 })); this.butterflies = 0; this.stars = 0; }
  plant(i, color) { const p = this.pots[i]; if (!p || p.stage !== 0) return false; p.color = color; p.stage = 1; return true; }
  water(i) { const p = this.pots[i]; if (!p || p.stage === 0 || p.stage >= 4) return null; p.stage += 1; if (p.stage === 3) this.butterflies += 1; return p.stage; }
  get bloomed() { return this.pots.every((p) => p.stage >= 3); }
  finish() { if (!this.bloomed) return false; this.stars += 1; this.pots.forEach((p) => { p.color = -1; p.stage = 0; }); this.butterflies = 0; return true; }
}

const CSS = `
.ga-pots{position:absolute;left:calc(var(--u)*4);right:calc(var(--u)*4);bottom:calc(var(--u)*17);display:flex;justify-content:space-around;align-items:flex-end;z-index:3;direction:ltr}
.ga-pot{position:relative;width:calc(var(--u)*14);height:calc(var(--u)*34);cursor:pointer;border:0;background:none;padding:0;display:flex;align-items:flex-end;justify-content:center}
.ga-pot .clay{position:absolute;bottom:0;left:10%;width:80%;height:30%;border-radius:10% 10% 30% 30%;background:linear-gradient(180deg,#e8845a,#b8582e);border:calc(var(--u)*.4) solid #fff;box-shadow:0 calc(var(--u)*.5) 0 rgba(120,50,20,.4)}
.ga-pot .clay:before{content:'';position:absolute;top:-14%;left:-6%;width:112%;height:30%;border-radius:40%;background:#f0a070;border:calc(var(--u)*.4) solid #fff}
.ga-pot img.fl{position:absolute;bottom:30%;left:50%;transform:translateX(-50%);max-width:130%;object-fit:contain;transition:height .5s;pointer-events:none}
.ga-pot .wig{animation:gawig .5s}
@keyframes gawig{0%,100%{transform:translateX(-50%) rotate(0)}30%{transform:translateX(-50%) rotate(-8deg)}70%{transform:translateX(-50%) rotate(8deg)}}
.ga-bar{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:calc(var(--u)*1.6);display:flex;gap:calc(var(--u)*2);justify-content:center;align-items:center;z-index:6;direction:ltr}
.ga-seed{width:calc(var(--u)*12);height:calc(var(--u)*12);min-width:56px;min-height:56px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) 0 rgba(120,40,100,.45);font-size:calc(var(--u)*6);padding:0}
.ga-seed.on{outline:calc(var(--u)*.8) solid #ffe06a}
.ga-can{width:calc(var(--u)*13);height:calc(var(--u)*13);min-width:60px;min-height:60px;border-radius:50%;border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#9ad8ff,#4aa8f0);font-size:calc(var(--u)*7.4);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.8) 0 #2a78b8;padding:0}
.ga-can.on{outline:calc(var(--u)*.8) solid #ffe06a;animation:gkb 1.2s infinite}
.ga-bf{position:absolute;z-index:8;font-size:calc(var(--u)*7);pointer-events:none;animation:gabf 6s ease-in-out infinite alternate}
.ga-bf img{height:calc(var(--u)*9);object-fit:contain}
@keyframes gabf{0%{transform:translate(0,0)}50%{transform:translate(calc(var(--u)*8),calc(var(--u)*-6)) rotate(8deg)}100%{transform:translate(calc(var(--u)*-6),calc(var(--u)*-3)) rotate(-6deg)}}
.ga-rain{position:absolute;pointer-events:none;font-size:calc(var(--u)*4);animation:gkspark .9s ease-in forwards;z-index:9}
@media (max-aspect-ratio:1/1){.ga-pots{flex-wrap:wrap;gap:calc(var(--u)*4);bottom:calc(var(--u)*22);align-items:flex-end}.ga-pot{width:calc(var(--u)*26)}}
@media (prefers-reduced-motion:reduce){.ga-bf,.ga-pot .wig{animation:none}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './'; this.disposed = false;
    if (!document.getElementById('ga-style')) document.head.append(h('style', { id: 'ga-style' }, CSS));
    this.g = new Garden(); this.seed = 0; this.can = false; this.busy = false; this.bfEls = [];
    const names = [...Array.from({ length: 12 }, (_, i) => `fl1_${String(i + 1).padStart(2, '0')}`), ...Array.from({ length: 6 }, (_, i) => `fl2_${String(i + 1).padStart(2, '0')}`), ...Array.from({ length: 12 }, (_, i) => `bf_${String(i + 1).padStart(2, '0')}`), 'bg_garden1', 'bg_garden2', 'bg_garden3', 'gi_01', 'gi_02', 'gi_03', 'gi_04', 'gi_05', 'gi_06', 'gi_09', 'gi_12'];
    loadAll(this.base, [...names, ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)]).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _t(p) { return this.en ? p[1] : p[0]; }

  _build() {
    const A = this.art;
    const bgs = [A.bg_garden1, A.bg_garden2, A.bg_garden3, A.bg_garden1, A.bg_garden2, A.bg_garden3];
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => [n, this.art[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'Butterfly garden' : 'حديقة الفراشات', places: PLACES, bgs, onPlace: () => this._reset() });
    this.potsEl = h('div', { class: 'ga-pots' }, Array.from({ length: POTS }, (_, i) => h('button', { class: 'ga-pot', 'data-pot': String(i), 'aria-label': `pot ${i + 1}`, onclick: (e) => this._tapPot(i, e) }, this._potPic())));
    const PACK = { 0: 'gi_02', 1: 'gi_03', 2: 'gi_04', 3: 'gi_06', 4: 'gi_05' }; // the painted seed packets (orange has none: a coloured square)
    this.seedsEl = COLORS.map((c, i) => { const pk = this.art[PACK[i]]; return h('button', { class: `ga-seed${i === 0 ? ' on' : ''}`, 'data-seed': String(i), 'aria-label': `seed ${c.en}`, style: pk ? `background:rgba(255,255,255,.85) url(${pk.src}) center/contain no-repeat` : `background:${c.css}`, onclick: () => this._pickSeed(i) }, pk ? '' : '🌱'); });
    this.canEl = h('button', { class: 'ga-can', 'aria-label': 'water', style: this.art.gi_01 ? `background:rgba(255,255,255,.9) url(${this.art.gi_01.src}) center/70% no-repeat;font-size:0` : '', onclick: () => { this.stage.say(this.en ? 'Tap a planted pot to water it!' : 'دوسي على الأصيص المزروع عشان تسقيه!'); } }, '🚿');
    this.stage.layer.append(this.potsEl, h('div', { class: 'ga-bar' }, this.seedsEl, this.canEl));
    this.stage.say(this.en ? 'Pick a seed and plant it in a pot!' : 'اختاري بذرة وازرعيها في أصيص!');
  }

  _potPic() {
    const im = this.art.gi_12;
    return im ? h('img', { class: 'potimg', src: im.src, alt: '', draggable: 'false', style: 'position:absolute;bottom:0;left:0;width:100%;height:40%;object-fit:contain;pointer-events:none' }) : h('div', { class: 'clay' });
  }

  _reset() { this.g = new Garden(); this._paint(); this.bfEls.forEach((b) => b.remove()); this.bfEls = []; this.busy = false; }

  _pickSeed(i) {
    this.seed = i;
    this.seedsEl.forEach((b, k) => b.classList.toggle('on', k === i));
    this.stage.say(this._t([COLORS[i].ar, COLORS[i].en]));
  }

  _flowerSrc(p) {
    const c = COLORS[p.color]; if (!c) return null;
    const get = (n) => (this.art[n] ? this.art[n].src : null);
    if (p.stage === 1) return get('fl1_01') || get('fl1_03');
    if (p.stage === 2) return get(c.small);
    if (p.stage === 3) return get(c.small);
    return get(c.big);
  }

  _paint() {
    this.potsEl.querySelectorAll('.ga-pot').forEach((b, i) => {
      b.querySelectorAll('.fl,.emo').forEach((e) => e.remove());
      const p = this.g.pots[i]; if (p.stage === 0) return;
      const src = this._flowerSrc(p);
      const hgt = [0, 34, 56, 72, 92][p.stage];
      if (src) b.append(h('img', { class: 'fl', src, alt: '', draggable: 'false', style: `height:calc(var(--u)*${hgt * 0.62})` }));
      else b.append(h('div', { class: 'fl emo', style: `position:absolute;bottom:22%;font-size:calc(var(--u)*${6 + p.stage * 3})` }, p.stage === 1 ? '🌱' : '🌸'));
    });
  }

  _tapPot(i, e) {
    if (this.busy) return;
    const pot = this.potsEl.children[i];
    if (this.g.pots[i].stage > 0) {
      const st = this.g.water(i);
      if (!st) { this._wiggle(pot); return; }
      for (let k = 0; k < 4; k++) { const d = h('div', { class: 'ga-rain', style: `left:${e.clientX - this.stage.root.getBoundingClientRect().left + (k - 2) * 12}px;top:${e.clientY - this.stage.root.getBoundingClientRect().top - 30}px` }, '💧'); this.stage.root.append(d); setTimeout(() => d.remove(), 900); }
      this._paint();
      this.stage.say(st === 2 ? (this.en ? 'It is sprouting!' : 'بتطلع!') : st === 3 ? (this.en ? `A ${COLORS[this.g.pots[i].color].en} flower! A butterfly!` : `زهرة ${FEM[this.g.pots[i].color]}! وفراشة!`) : (this.en ? 'A big flower!' : 'زهرة كبيرة!'));
      this.stage.sparkle(e.clientX, e.clientY, 6);
      if (st === 3) this._butterfly(pot);
      this._checkDone();
    } else {
      if (!this.g.plant(i, this.seed)) { this._wiggle(pot); return; }
      this._paint();
      this.stage.say(this.en ? 'Planted! Now water it.' : 'زرعناها! دلوقتي اسقيها.');
      this.stage.sparkle(e.clientX, e.clientY, 5);
      this.canEl.classList.add('on'); // the can pulses: a planted pot wants water (tap it)
    }
  }

  _wiggle(pot) { const f = pot.querySelector('.fl'); if (f) { f.classList.remove('wig'); void f.offsetWidth; f.classList.add('wig'); } else { pot.classList.remove('gk-bounce'); void pot.offsetWidth; pot.classList.add('gk-bounce'); } }

  _butterfly(pot) {
    const r = pot.getBoundingClientRect(); const rr = this.stage.root.getBoundingClientRect();
    const n = 1 + (this.g.butterflies % 4) * 3; const im = this.art[`bf_${String(n).padStart(2, '0')}`];
    const b = h('div', { class: 'ga-bf', style: `left:${r.left - rr.left}px;top:${r.top - rr.top - 40}px;animation-delay:${-this.g.butterflies}s` }, im ? h('img', { src: im.src, alt: '', draggable: 'false' }) : '🦋');
    this.stage.layer.append(b); this.bfEls.push(b);
  }

  _checkDone() {
    if (!this.g.bloomed || this.busy) return;
    this.busy = true;
    this.stage.say(this.en ? 'All the flowers bloomed! A rainbow!' : 'كل الزهور فتحت! وقوس قزح!');
    const rr = this.stage.root.getBoundingClientRect();
    for (let i = 0; i < 6; i++) setTimeout(() => this.stage.sparkle(rr.left + rr.width * (0.2 + 0.12 * i), rr.top + rr.height * 0.35, 8), i * 300);
    setTimeout(() => {
      if (this.disposed) return;
      this.g.finish();
      this.stage.finish(() => this._reset());
    }, 2400);
  }

  pause() { /* nothing runs by itself */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
