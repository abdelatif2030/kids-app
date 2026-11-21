// «محل الكب كيك» — a gentle bakery game for girls aged 2-4 (docs/GIRLS_SECTION_PLAN.md, game 4).
// Five big steps in a ribbon: pick a cup, fill it, frost it, sprinkle, cherry on top. Then she carries it to the tea party: the guests
// (1 to 6 depending on the bakery) each take a cupcake and say thank you. No money, timers, locks or failing; a wrong tap does nothing bad.
// ONE star when the order is served (never for time).
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const STEPS = [
  { id: 'liner', ar: 'اختاري كوب', en: 'Pick a cup', emoji: '🧁' },
  { id: 'batter', ar: 'املي العجينة', en: 'Fill it', emoji: '🥄' },
  { id: 'frost', ar: 'الكريمة', en: 'Cream', emoji: '🍦' },
  { id: 'sprinkle', ar: 'الرشّ', en: 'Sprinkles', emoji: '✨' },
  { id: 'cherry', ar: 'كرزة', en: 'Cherry', emoji: '🍒' },
];
export const PLACES = [
  { ar: 'مخبز الجنينة', en: 'Garden bakery', emoji: '🌷' }, { ar: 'مخبز قوس قزح', en: 'Rainbow bakery', emoji: '🌈' }, { ar: 'مخبز الثلج', en: 'Snow bakery', emoji: '❄️' },
  { ar: 'مخبز البحر', en: 'Beach bakery', emoji: '🏖️' }, { ar: 'مخبز القلعة', en: 'Castle bakery', emoji: '🏰' }, { ar: 'مخبز النجوم', en: 'Star bakery', emoji: '⭐' },
];
export const GUESTS = [1, 2, 3, 4, 5, 6]; // guests per bakery: it quietly teaches counting
export const LINERS = [1, 2, 5, 6]; // empty cups of the sheet
export const FINISHED = { 1: 3, 2: 4, 5: 7, 6: 8, 9: 11, 10: 12 }; // the finished cupcake that matches each cup
export const COLORS = ['#ff8ac8', '#6ab8ff', '#ffd84a', '#7ae8a0', '#c8a0ff', '#ff6a6a'];

/** The rules (no browser): the five steps in order; after the last one she serves [guests]; one star per served order. */
export class Order {
  constructor(guests) { this.guests = guests; this.step = 0; this.served = 0; this.stars = 0; this.color = 0; this.sprinkle = 0; }
  get cupcakeDone() { return this.step >= STEPS.length; }
  get current() { return STEPS[this.step] || null; }
  do(id) { if (this.cupcakeDone || STEPS[this.step].id !== id) return false; this.step += 1; return true; }
  serve() { if (!this.cupcakeDone || this.served >= this.guests) return false; this.served += 1; return true; }
  get complete() { return this.cupcakeDone && this.served >= this.guests; }
  finish() { if (!this.complete) return false; this.stars += 1; this.step = 0; this.served = 0; return true; }
}

const CSS = `
.cu-baker{position:absolute;left:14%;bottom:calc(var(--u)*2);height:calc(var(--u)*50);width:calc(var(--u)*50*var(--ar,.6));transform:translateX(-50%);z-index:2}
.cu-baker img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.cu-table{position:absolute;left:36%;bottom:calc(var(--u)*6);width:calc(var(--u)*34);height:calc(var(--u)*34);z-index:3;display:flex;align-items:center;justify-content:center}
.cu-table img{max-width:100%;max-height:100%;object-fit:contain;pointer-events:none}
.cu-table .em{font-size:calc(var(--u)*20)}
.cu-guests{position:absolute;left:54%;right:calc(var(--u)*2);top:calc(var(--u)*15);display:flex;flex-wrap:wrap;gap:calc(var(--u)*1.6);justify-content:center;z-index:4}
.cu-guest{width:calc(var(--u)*13);height:calc(var(--u)*15);cursor:pointer;border:0;background:none;padding:0}
.cu-guest img{width:100%;height:100%;object-fit:contain;pointer-events:none}
.cu-ribbon{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:calc(var(--u)*1.6);display:flex;gap:calc(var(--u)*2);justify-content:center;z-index:6;direction:ltr}
.cu-step{min-width:64px;min-height:56px;height:calc(var(--u)*13);padding:0 calc(var(--u)*3);border-radius:calc(var(--u)*4);border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#fff0fa,#ffc8e8);font-size:calc(var(--u)*4);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.8) 0 rgba(160,40,120,.5);font-family:inherit;color:#a82a78;font-weight:900;opacity:.7}
.cu-step i{font-style:normal;font-size:calc(var(--u)*6.4)}
.cu-step.now{opacity:1;animation:gkb 1.2s infinite;background:linear-gradient(180deg,#ffe88a,#ffb030)}
.cu-step.done{background:linear-gradient(180deg,#bff5c8,#7ad88a);opacity:.9}
.cu-opts{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:calc(var(--u)*17);display:flex;gap:calc(var(--u)*2);justify-content:center;z-index:6;direction:ltr}
.cu-opt{width:calc(var(--u)*15);height:calc(var(--u)*15);min-width:60px;min-height:60px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.7) 0 rgba(160,40,120,.45);font-size:calc(var(--u)*7)}
.cu-opt img{max-width:100%;max-height:100%;object-fit:contain;pointer-events:none}
.cu-dot{width:70%;height:70%;border-radius:50%;border:2px solid #fff;pointer-events:none}
@media (max-aspect-ratio:1/1){.cu-baker{left:22%;height:calc(var(--u)*40);bottom:calc(var(--u)*34)}.cu-table{left:60%;bottom:calc(var(--u)*34)}.cu-guests{left:calc(var(--u)*2);top:calc(var(--u)*14)}.cu-ribbon{flex-wrap:wrap}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './'; this.disposed = false;
    if (!document.getElementById('cu-style')) document.head.append(h('style', { id: 'cu-style' }, CSS));
    this.order = new Order(1); this.busy = false;
    const names = ['baker_01', 'baker_08', 'baker_12', ...Array.from({ length: 12 }, (_, i) => `cup_${String(i + 1).padStart(2, '0')}`), ...Array.from({ length: 12 }, (_, i) => `top_${String(i + 1).padStart(2, '0')}`), ...Array.from({ length: 12 }, (_, i) => `guest_${String(i + 1).padStart(2, '0')}`), 'bg_bakery1', 'bg_bakery2', 'bg_bakery3'];
    loadAll(this.base, [...names, ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)]).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _t(p) { return this.en ? p[1] : p[0]; }
  _img(n) { const i = this.art[n]; return i ? i.src : null; }

  _build() {
    const A = this.art;
    const bgs = [A.bg_bakery1, A.bg_bakery2, A.bg_bakery3, A.bg_bakery1, A.bg_bakery2, A.bg_bakery3];
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => [n, this.art[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'Cupcake shop' : 'محل الكب كيك', places: PLACES, bgs, onPlace: (i) => { this._newOrder(i); } });
    this.bakerEl = h('div', { class: 'cu-baker' });
    const b = A.baker_01; if (b) { this.bakerEl.style.setProperty('--ar', String(b.naturalWidth / b.naturalHeight)); this.bakerEl.append(h('img', { src: b.src, alt: '', draggable: 'false' })); } else this.bakerEl.append(h('div', { style: 'font-size:calc(var(--u)*24)' }, '👩‍🍳'));
    this.tableEl = h('div', { class: 'cu-table' });
    this.guestsEl = h('div', { class: 'cu-guests' });
    this.optsEl = h('div', { class: 'cu-opts' });
    this.ribbon = h('div', { class: 'cu-ribbon' }, STEPS.map((s) => h('div', { class: 'cu-step', 'data-step': s.id }, h('i', {}, s.emoji), this._t([s.ar, s.en]))));
    this.stage.layer.append(this.bakerEl, this.tableEl, this.guestsEl, this.optsEl, this.ribbon);
    this._newOrder(0);
  }

  _newOrder(place) {
    this.order = new Order(GUESTS[place % GUESTS.length]);
    this.cup = 0; this.top = 0; this.busy = false;
    this.guestsEl.replaceChildren();
    for (let i = 0; i < this.order.guests; i++) this.guestsEl.append(h('button', { class: 'cu-guest', 'data-g': String(i), 'aria-label': `guest ${i + 1}`, onclick: () => this._serve(i) }, this._guestImg(i, 'wait')));
    this._refresh();
    this.stage.say(this.en ? `${this.order.guests} friends are waiting for cupcakes!` : this.order.guests === 1 ? 'صاحبتك مستنية كب كيك!' : `${['', '', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة'][this.order.guests]} أصحاب مستنيين كب كيك!`);
  }

  _guestImg(i, mood) {
    const n = (i % 6) * 2 + (mood === 'wait' ? 1 : 2);
    const src = this._img(`guest_${String(n).padStart(2, '0')}`);
    return src ? h('img', { src, alt: '', draggable: 'false' }) : h('span', { style: 'font-size:calc(var(--u)*9)' }, ['🐻', '🐰', '🐱', '🐶', '🐼', '🐵'][i % 6]);
  }

  _refresh() {
    const o = this.order;
    this.ribbon.querySelectorAll('.cu-step').forEach((b) => { const idx = STEPS.findIndex((s) => s.id === b.dataset.step); b.classList.toggle('done', idx < o.step); b.classList.toggle('now', idx === o.step); });
    // the cupcake on the table
    this.tableEl.replaceChildren();
    const cakeN = this.cakeImage();
    if (cakeN) this.tableEl.append(h('img', { src: cakeN, alt: '', draggable: 'false' }));
    else if (o.step > 0) this.tableEl.append(h('div', { class: 'em' }, o.step >= 3 ? '🧁' : '🥣'));
    // the options for the current step
    this.optsEl.replaceChildren();
    const mk = (content, fn, label) => h('button', { class: 'cu-opt', 'aria-label': label, onclick: (e) => fn(e) }, content);
    const cur = o.current;
    if (!cur) { this.optsEl.append(h('div', { class: 'gk-title', style: 'color:#b83a90;text-shadow:none' }, this.en ? 'Serve your friends!' : 'قدّمي لأصحابك!')); return; }
    if (cur.id === 'liner') LINERS.forEach((n) => this.optsEl.append(mk(this._pic(`cup_${String(n).padStart(2, '0')}`, '🧁'), (e) => this._act('liner', n, e), `cup ${n}`)));
    if (cur.id === 'batter') this.optsEl.append(mk('🥄', (e) => this._act('batter', 0, e), 'batter'));
    if (cur.id === 'frost') COLORS.slice(0, 4).forEach((c, i) => this.optsEl.append(mk(h('div', { class: 'cu-dot', style: `background:${c}` }), (e) => this._act('frost', i + 1, e), `cream ${i}`)));
    if (cur.id === 'sprinkle') [6, 7, 8, 9].forEach((n) => this.optsEl.append(mk(this._pic(`top_${String(n).padStart(2, '0')}`, '✨'), (e) => this._act('sprinkle', n, e), `sprinkle ${n}`)));
    if (cur.id === 'cherry') [9, 10, 11, 12].forEach((n) => this.optsEl.append(mk(this._pic(`top_${String(n).padStart(2, '0')}`, '🍒'), (e) => this._act('cherry', n, e), `cherry ${n}`)));
  }

  _pic(n, fb) { const s = this._img(n); return s ? h('img', { src: s, alt: '', draggable: 'false' }) : fb; }

  cakeImage() {
    // the finished cupcakes of the sheet (cup_07..cup_12 are six finished cupcakes in different colours); earlier steps show the empty cup
    const o = this.order;
    if (o.step === 0) return null;
    if (o.step >= 3) return this._img(`cup_${String(FINISHED[this.cup] || 3).padStart(2, '0')}`);
    return this._img(`cup_${String(this.cup || 1).padStart(2, '0')}`);
  }

  _act(id, v, e) {
    if (this.busy || !this.order.do(id)) return;
    if (id === 'liner') this.cup = v; else if (id === 'frost') this.top = v; else if (id === 'sprinkle') this.order.sprinkle = v;
    this.stage.sparkle(e.clientX, e.clientY, 7);
    const say = { liner: ['كوب جميل!', 'A pretty cup!'], batter: ['املينا الكوب!', 'Filled!'], frost: ['كريمة لذيذة!', 'Yummy cream!'], sprinkle: ['رشّ حلو!', 'Sprinkles!'], cherry: ['كرزة فوقها! الكب كيك جاهز!', 'A cherry on top! Ready!'] }[id];
    this.stage.say(this._t(say));
    this._refresh();
    if (this.order.cupcakeDone) this.stage.say(this.en ? 'Now serve your friends!' : 'دلوقتي قدّمي لأصحابك!');
  }

  _serve(i) {
    const btn = this.guestsEl.querySelector(`[data-g="${i}"]`);
    if (!this.order.cupcakeDone || !btn || btn.dataset.done) return;
    if (!this.order.serve()) return;
    btn.dataset.done = '1'; btn.replaceChildren(this._guestImg(i, 'eat'));
    const r = btn.getBoundingClientRect(); this.stage.sparkle(r.left + r.width / 2, r.top + r.height / 3, 8);
    this.stage.say(this.en ? ['Thank you!', 'Yummy!', 'Delicious!'][i % 3] : ['شكراً!', 'ممممم حلو!', 'لذيذ أوي!'][i % 3]);
    if (this.order.complete) {
      this.busy = true;
      setTimeout(() => { if (this.disposed) return; this.order.finish(); this.stage.finish(() => this._newOrder((this.stage.place + 1) % 6)); }, 1800);
    }
  }

  pause() { /* nothing runs by itself */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
