// «ألبسي الأميرة الصغيرة» — a gentle dress-up game for girls aged 2-4 (docs/GIRLS_SECTION_PLAN.md, game 1).
// One doll, three big categories (dress, shoes, crown), four big items at a time, tap to put on. Six places with their own dresses.
// No locks, coins, timers or failing. When she has a dress, shoes and a crown a big "Party!" button appears: she twirls, confetti,
// and ONE star for finishing the outfit (never for time). Pictures from the owner's sheets with a code-drawn fallback.
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const PLACES = [
  { ar: 'غرفة القلعة', en: 'Castle room', emoji: '🏰' },
  { ar: 'حفلة الشاي في الجنينة', en: 'Garden tea party', emoji: '🫖' },
  { ar: 'قلعة الثلج', en: 'Ice castle', emoji: '❄️' },
  { ar: 'حفلة البحر', en: 'Beach party', emoji: '🏖️' },
  { ar: 'الغابة السحرية', en: 'Magic forest', emoji: '🍄' },
  { ar: 'قاعة قوس قزح', en: 'Rainbow ballroom', emoji: '🌈' },
];
export const CATS = [
  { id: 'dress', ar: 'الفستان', en: 'Dress', emoji: '👗', pre: 'dress_', count: 24 },
  { id: 'shoes', ar: 'الحذاء', en: 'Shoes', emoji: '👠', pre: 'shoes_', count: 12 },
  { id: 'crown', ar: 'التاج', en: 'Crown', emoji: '👑', pre: 'crown_', count: 12 },
];
export const ITEMS_PER_PAGE = 4;
const DOLLS = ['doll_light', 'doll_dark', 'doll_straight', 'doll_red'];
const POSES = ['pose_stand', 'pose_wave', 'pose_twirl', 'pose_clap', 'pose_jump', 'pose_kiss', 'pose_dance'];
const PRAISE_AR = ['جميل أوي!', 'حلو حلو!', 'برافو!', 'شكلك زي الأميرات!', 'يا سلام!'];
const PRAISE_EN = ['So pretty!', 'Lovely!', 'Bravo!', 'Like a princess!', 'Wow!'];
const FALL = { dress: ['#ff9ac8', '#b86ae0', '#7ad8a8', '#ffd84a'], shoes: ['#ff8ac0', '#c8c8d8', '#e84a4a', '#6ab8f0'], crown: ['#ffd23a', '#c8c8f0', '#ff8ac8', '#e84a6a'] };

/** The items of a category shown in a place: four, always the same four for that place (so a child finds them again). */
export function itemsFor(cat, place) {
  const c = CATS.find((x) => x.id === cat);
  const out = [];
  for (let k = 0; k < ITEMS_PER_PAGE; k++) out.push(((place * ITEMS_PER_PAGE + k) % c.count) + 1);
  return out;
}
export const nameOf = (cat, n) => `${CATS.find((x) => x.id === cat).pre}${String(n).padStart(2, '0')}`;

/** The pure rules (tested without a browser): she can party once she has all three things; one star per finished outfit. */
export class Outfit {
  constructor() { this.worn = { dress: 0, shoes: 0, crown: 0 }; this.stars = 0; }
  wear(cat, n) { this.worn[cat] = this.worn[cat] === n ? 0 : n; }
  get complete() { return !!(this.worn.dress && this.worn.shoes && this.worn.crown); }
  party() { if (!this.complete) return false; this.stars += 1; return true; }
  reset() { this.worn = { dress: 0, shoes: 0, crown: 0 }; }
}

const CSS = `
.dr-doll{position:absolute;left:30%;bottom:calc(var(--u)*2);height:calc(var(--u)*50);transform:translateX(-50%);aspect-ratio:var(--ar,.55);cursor:pointer;z-index:2}
.dr-doll img.base{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.dr-doll .ov{position:absolute;left:50%;transform:translateX(-50%);object-fit:contain;pointer-events:none}
.dr-dress{top:40%;width:72%;height:45%}
.dr-shoes{bottom:1%;width:38%;height:8%}
.dr-crown{top:-1%;width:50%;height:14%}
.dr-panel{position:absolute;right:calc(var(--u)*2);top:calc(var(--u)*14);width:calc(var(--u)*40);z-index:6;display:flex;flex-direction:column;gap:calc(var(--u)*2.2);align-items:center;background:rgba(255,255,255,.55);border-radius:calc(var(--u)*4);padding:calc(var(--u)*2);border:calc(var(--u)*.6) solid #fff;direction:ltr}
.dr-cats{display:flex;gap:calc(var(--u)*2);justify-content:center}
.dr-cat{width:calc(var(--u)*12);min-width:56px;height:calc(var(--u)*12);min-height:56px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#fff0fa,#ffc8e8);font-size:calc(var(--u)*6.4);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) 0 rgba(160,40,120,.5);font-family:inherit;padding:0}
.dr-cat.on{background:linear-gradient(180deg,#ffe88a,#ffb030);outline:calc(var(--u)*.7) solid #fff}
.dr-tray{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*2)}
.dr-item{width:calc(var(--u)*16);height:calc(var(--u)*16);min-width:64px;min-height:64px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.7) 0 rgba(160,40,120,.45)}
.dr-item img{max-width:100%;max-height:100%;object-fit:contain;pointer-events:none}
.dr-item.on{background:#fff6c0;outline:calc(var(--u)*.7) solid #ffd23a}
.dr-item .fb{width:70%;height:70%;border-radius:30%;pointer-events:none}
.dr-party{position:absolute;left:calc(var(--u)*3);bottom:calc(var(--u)*3);z-index:7;animation:gkb 1.2s infinite}
.dr-twirl{animation:drtw 1.1s ease-in-out 2}
@keyframes drtw{0%{transform:translateX(-50%) rotate(0)}50%{transform:translateX(-50%) rotate(8deg) scale(1.06)}100%{transform:translateX(-50%) rotate(0)}}
@media (max-aspect-ratio:1/1){.dr-doll{left:50%;height:calc(var(--u)*55);bottom:calc(var(--u)*50)}.dr-panel{left:50%;right:auto;transform:translateX(-50%);top:auto;bottom:calc(var(--u)*2)}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './';
    if (!document.getElementById('dr-style')) document.head.append(h('style', { id: 'dr-style' }, CSS));
    this.outfit = new Outfit(); this.cat = 'dress'; this.doll = 0; this.party = false; this.disposed = false;
    const names = [...DOLLS, ...POSES, ...CATS.flatMap((c) => Array.from({ length: c.count }, (_, i) => nameOf(c.id, i + 1))), 'bg_bedroom', 'bg_garden_tea', 'bg_ice', 'bg_beach', 'bg_forest', 'bg_ballroom'];
    loadAll(this.base, [...names, ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)]).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _build() {
    const A = this.art;
    const bgs = ['bg_bedroom', 'bg_garden_tea', 'bg_ice', 'bg_beach', 'bg_forest', 'bg_ballroom'].map((n) => A[n]);
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => [n, this.art[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'Little princess' : 'ألبسي الأميرة', places: PLACES, bgs, onPlace: () => { this._tray(); } });
    this.layer = this.stage.layer;
    this.dollEl = h('div', { class: 'dr-doll', onclick: () => { this.doll = (this.doll + 1) % DOLLS.length; this._doll(); this.stage.say(this.en ? 'A new princess!' : 'أميرة جديدة!'); } });
    this.layer.append(this.dollEl);
    this.cats = h('div', { class: 'dr-cats' }, CATS.map((c) => h('button', { class: 'dr-cat', 'data-cat': c.id, 'aria-label': this.en ? c.en : c.ar, onclick: () => { this.cat = c.id; this.stage.say(this.en ? c.en : c.ar); this._tray(); } }, c.emoji)));
    this.trayEl = h('div', { class: 'dr-tray' });
    this.layer.append(h('div', { class: 'dr-panel' }, this.cats, this.trayEl));
    this._doll(); this._tray();
    this.stage.say(this.en ? 'Pick a dress for the princess!' : 'اختاري فستان للأميرة!');
  }

  _img(n) { const i = this.art[n]; return i ? i.src : null; }

  _doll(pose) {
    const key = pose || DOLLS[this.doll];
    const im = this.art[key] || this.art[DOLLS[this.doll]];
    this.dollEl.replaceChildren();
    if (im) { this.dollEl.style.setProperty('--ar', String(im.naturalWidth / im.naturalHeight)); this.dollEl.append(h('img', { class: 'base', src: im.src, draggable: 'false', alt: '' })); }
    else this.dollEl.append(h('div', { style: 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*30)' }, '👸'));
    // the clothes are only drawn on the standing doll (the other poses are short reactions)
    if (!pose || pose === 'pose_stand') {
      const w = this.outfit.worn;
      const put = (cat, n, cls) => { if (!n) return; const src = this._img(nameOf(cat, n)); if (src) this.dollEl.append(h('img', { class: `ov ${cls}`, src, draggable: 'false', alt: '' })); else this.dollEl.append(h('div', { class: `ov ${cls}`, style: `background:${FALL[cat][n % 4]};border-radius:30%;opacity:.9` })); };
      put('dress', w.dress, 'dr-dress'); put('shoes', w.shoes, 'dr-shoes'); put('crown', w.crown, 'dr-crown');
    }
  }

  _tray() {
    this.cats.querySelectorAll('.dr-cat').forEach((b) => b.classList.toggle('on', b.dataset.cat === this.cat));
    this.trayEl.replaceChildren();
    for (const n of itemsFor(this.cat, this.stage.place)) {
      const src = this._img(nameOf(this.cat, n));
      const on = this.outfit.worn[this.cat] === n;
      this.trayEl.append(h('button', { class: `dr-item${on ? ' on' : ''}`, 'aria-label': `${this.cat} ${n}`, onclick: (e) => this._wear(n, e) },
        src ? h('img', { src, alt: '', draggable: 'false' }) : h('div', { class: 'fb', style: `background:${FALL[this.cat][n % 4]}` })));
    }
    this._partyBtn();
  }

  _wear(n, e) {
    this.outfit.wear(this.cat, n);
    this._doll(); this._tray();
    this.stage.sparkle(e.clientX, e.clientY, 6);
    this.stage.say((this.en ? PRAISE_EN : PRAISE_AR)[Math.floor(Math.random() * 5)]);
    this.dollEl.classList.remove('gk-bounce'); void this.dollEl.offsetWidth; this.dollEl.classList.add('gk-bounce');
  }

  _partyBtn() {
    if (this.partyBtn) { this.partyBtn.remove(); this.partyBtn = null; }
    if (!this.outfit.complete || this.party) return;
    this.partyBtn = h('button', { class: 'gk-btn go dr-party', onclick: () => this._startParty() }, this.en ? '🎉 Party!' : '🎉 حفلة!');
    this.layer.append(this.partyBtn);
    this.stage.say(this.en ? 'Press Party!' : 'دوسي على حفلة!');
  }

  _startParty() {
    if (!this.outfit.party()) return;
    this.party = true;
    if (this.partyBtn) { this.partyBtn.remove(); this.partyBtn = null; }
    this._doll('pose_twirl');
    this.dollEl.classList.add('dr-twirl');
    const r = this.dollEl.getBoundingClientRect();
    for (let i = 0; i < 6; i++) setTimeout(() => this.stage.sparkle(r.left + Math.random() * r.width, r.top + Math.random() * r.height * 0.6, 8), i * 350);
    this.stage.say(this.en ? 'The princess is dancing!' : 'الأميرة بترقص!');
    setTimeout(() => {
      if (this.disposed) return;
      this.dollEl.classList.remove('dr-twirl');
      this._doll();
      this.stage.finish(() => { this.outfit.reset(); this.party = false; this._doll(); this._tray(); this.cat = 'dress'; this.stage.say(this.en ? 'Pick a new dress!' : 'اختاري فستان جديد!'); });
    }, 2600);
  }

  pause() { /* nothing runs on its own */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
