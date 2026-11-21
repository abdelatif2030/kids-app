// «صالون الشعر والفيونكات» — a gentle hair-salon game for girls aged 2-4 (docs/GIRLS_SECTION_PLAN.md, game 2).
// A girl sits in the salon chair. Five big tools: brush, colour wand, bows, hair style, mirror. Every tap is rewarded (sparkle + voice),
// nothing is locked, nothing costs, no timer, no failing. After three DIFFERENT tools a big "Mirror!" button appears: she twirls and
// claps, and the child earns ONE star for finishing the makeover (never for time).
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const GIRLS = ['doll_light', 'doll_dark', 'doll_straight', 'doll_red'];
export const TOOLS = [
  { id: 'brush', ar: 'مشط', en: 'Brush', emoji: '🪮' },
  { id: 'dress', ar: 'فستان', en: 'Dress', emoji: '👗' },
  { id: 'bow', ar: 'فيونكة', en: 'Bows', emoji: '🎀' },
  { id: 'style', ar: 'تسريحة', en: 'Style', emoji: '💇‍♀️' },
  { id: 'polish', ar: 'أظافر', en: 'Nails', emoji: '💅' },
];
export const DRESSES = [1, 5, 9, 14]; // the dresses of the dress-up game that fit a sitting girl
export const STYLES = 4; // the four girls are the four hair styles: wavy, curly, straight, bun
export const BOWS = 12;
export const PLACES = [
  { ar: 'صالون وردي', en: 'Pink salon', emoji: '💖' }, { ar: 'صالون الأميرات', en: 'Princess salon', emoji: '👑' }, { ar: 'صالون الجنينة', en: 'Garden salon', emoji: '🌷' },
  { ar: 'صالون قوس قزح', en: 'Rainbow salon', emoji: '🌈' }, { ar: 'صالون الثلج', en: 'Ice salon', emoji: '❄️' }, { ar: 'صالون النجوم', en: 'Star salon', emoji: '⭐' },
];

/** The rules (no browser): she can look in the mirror after three DIFFERENT tools were used; one star per finished makeover. */
export class Makeover {
  constructor() { this.used = new Set(); this.style = 0; this.dress = 0; this.bow = 0; this.polish = 0; this.brushed = 0; this.stars = 0; }
  use(tool) { this.used.add(tool); }
  get ready() { return this.used.size >= 3; }
  mirror() { if (!this.ready) return false; this.stars += 1; return true; }
  reset() { this.used.clear(); this.style = 0; this.dress = 0; this.bow = 0; this.polish = 0; this.brushed = 0; }
}

const POLISH = ['#ff6ab0', '#6ab8ff', '#b06aff', '#ffd23a'];
const CSS = `
.sl-girl{position:absolute;left:32%;bottom:calc(var(--u)*2);height:calc(var(--u)*50);width:calc(var(--u)*50*var(--ar,.6));transform:translateX(-50%);z-index:2;cursor:pointer}
.sl-girl .base{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.sl-girl .dr{position:absolute;left:50%;top:40%;transform:translateX(-50%);width:72%;height:45%;object-fit:contain;pointer-events:none}
.sl-girl .bow{position:absolute;left:58%;top:-2%;width:30%;height:13%;object-fit:contain;pointer-events:none}
.sl-nail{position:absolute;bottom:34%;width:7%;aspect-ratio:1;border-radius:50%;pointer-events:none;box-shadow:0 0 6px rgba(255,255,255,.8)}
.sl-panel{position:absolute;right:calc(var(--u)*2);top:calc(var(--u)*14);width:calc(var(--u)*40);z-index:6;display:flex;flex-direction:column;gap:calc(var(--u)*2.2);align-items:center;background:rgba(255,255,255,.55);border-radius:calc(var(--u)*4);padding:calc(var(--u)*2);border:calc(var(--u)*.6) solid #fff;direction:ltr}
.sl-tools{display:flex;gap:calc(var(--u)*1.6);justify-content:center;flex-wrap:wrap}
.sl-tool{width:calc(var(--u)*10);min-width:52px;height:calc(var(--u)*10);min-height:52px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#fff0fa,#ffc8e8);font-size:calc(var(--u)*5.2);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) 0 rgba(160,40,120,.5);padding:0;font-family:inherit}
.sl-tool.on{background:linear-gradient(180deg,#ffe88a,#ffb030);outline:calc(var(--u)*.7) solid #fff}
.sl-opts{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*2)}
.sl-opt{width:calc(var(--u)*16);height:calc(var(--u)*16);min-width:64px;min-height:64px;border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.7) 0 rgba(160,40,120,.45);font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#a82a78}
.sl-opt img{max-width:100%;max-height:100%;object-fit:contain;pointer-events:none}
.sl-dot{width:70%;height:70%;border-radius:50%;border:2px solid #fff;pointer-events:none}
.sl-mirror{position:absolute;left:calc(var(--u)*3);bottom:calc(var(--u)*3);z-index:7;animation:gkb 1.2s infinite}
.sl-twirl{animation:sltw 1s ease-in-out 2}
@keyframes sltw{0%{transform:translateX(-50%) rotate(0)}50%{transform:translateX(-50%) rotate(7deg) scale(1.06)}100%{transform:translateX(-50%) rotate(0)}}
@media (max-aspect-ratio:1/1){.sl-girl{left:50%;height:calc(var(--u)*52);bottom:calc(var(--u)*52)}.sl-panel{left:50%;right:auto;transform:translateX(-50%);top:auto;bottom:calc(var(--u)*2);width:calc(var(--u)*92)}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './'; this.disposed = false;
    if (!document.getElementById('sl-style')) document.head.append(h('style', { id: 'sl-style' }, CSS));
    this.m = new Makeover(); this.girl = 0; this.tool = 'style'; this.busy = false;
    const names = [...GIRLS, ...DRESSES.map((n) => `dress_${String(n).padStart(2, '0')}`), ...Array.from({ length: BOWS }, (_, i) => `bow_${String(i + 1).padStart(2, '0')}`), 'bg_salon1', 'bg_salon2', 'bg_salon3'];
    loadAll(this.base, [...names, ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)]).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _build() {
    const A = this.art;
    const bgs = [A.bg_salon1, A.bg_salon2, A.bg_salon3, A.bg_salon1, A.bg_salon2, A.bg_salon3];
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => [n, this.art[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'Hair salon' : 'صالون الشعر', places: PLACES, bgs, onPlace: () => {} });
    this.girlEl = h('div', { class: 'sl-girl', onclick: () => { this.girl = (this.girl + 1) % GIRLS.length; this._girl(); this.stage.say(this.en ? 'A new friend!' : 'صاحبة جديدة!'); } });
    this.tools = h('div', { class: 'sl-tools' }, TOOLS.map((t) => h('button', { class: 'sl-tool', 'data-tool': t.id, 'aria-label': this.en ? t.en : t.ar, onclick: () => this._pickTool(t) }, t.emoji)));
    this.opts = h('div', { class: 'sl-opts' });
    this.stage.layer.append(this.girlEl, h('div', { class: 'sl-panel' }, this.tools, this.opts));
    this._girl(); this._pickTool(TOOLS[3], true);
    this.stage.say(this.en ? 'Make her hair beautiful!' : 'خلينا نعمل شعرها حلو!');
  }

  _girl() {
    const A = this.art; const im = A[GIRLS[this.m.style ? this.m.style - 1 : this.girl]];
    this.girlEl.replaceChildren();
    if (im) { this.girlEl.style.setProperty('--ar', String(im.naturalWidth / im.naturalHeight)); this.girlEl.append(h('img', { class: 'base', src: im.src, draggable: 'false', alt: '' })); }
    else this.girlEl.append(h('div', { style: 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*28)' }, '👧'));
    if (this.m.dress) { const di = A[`dress_${String(this.m.dress).padStart(2, '0')}`]; if (di) this.girlEl.append(h('img', { class: 'dr', src: di.src, draggable: 'false', alt: '' })); }
    if (this.m.bow) { const bi = A[`bow_${String(this.m.bow).padStart(2, '0')}`]; if (bi) this.girlEl.append(h('img', { class: 'bow', src: bi.src, draggable: 'false', alt: '' })); }
    if (this.m.polish) for (const x of [24, 36, 64, 76]) this.girlEl.append(h('div', { class: 'sl-nail', style: `left:${x}%;background:${POLISH[(this.m.polish - 1) % 4]}` }));
  }

  _pickTool(t, silent) {
    this.tool = t.id;
    this.tools.querySelectorAll('.sl-tool').forEach((b) => b.classList.toggle('on', b.dataset.tool === t.id));
    this.opts.replaceChildren();
    const mk = (content, fn, label) => h('button', { class: 'sl-opt', 'aria-label': label, onclick: (e) => fn(e) }, content);
    if (t.id === 'brush') this.opts.append(mk('🪮', (e) => this._apply('brush', 0, e), 'brush'));
    if (t.id === 'dress') DRESSES.forEach((n, i) => { const im = this.art[`dress_${String(n).padStart(2, '0')}`]; this.opts.append(mk(im ? h('img', { src: im.src, alt: '', draggable: 'false' }) : '👗', (e) => this._apply('dress', n, e), `dress ${i}`)); });
    if (t.id === 'bow') [1, 3, 6, 9].forEach((n, k) => { const im = this.art[`bow_${String(n).padStart(2, '0')}`]; this.opts.append(mk(im ? h('img', { src: im.src, alt: '', draggable: 'false' }) : '🎀', (e) => this._apply('bow', n, e), `bow ${k}`)); });
    if (t.id === 'style') GIRLS.forEach((g, i) => { const im = this.art[g]; this.opts.append(mk(im ? h('img', { src: im.src, alt: '', draggable: 'false' }) : '💇‍♀️', (e) => this._apply('style', i + 1, e), `style ${i + 1}`)); });
    if (t.id === 'polish') POLISH.forEach((c, i) => this.opts.append(mk(h('div', { class: 'sl-dot', style: `background:${c}` }), (e) => this._apply('polish', i + 1, e), `polish ${i}`)));
    if (!silent) this.stage.say(this.en ? t.en : t.ar);
  }

  _apply(kind, v, e) {
    if (this.busy) return;
    if (kind === 'brush') this.m.brushed++; else this.m[kind] = v;
    this.m.use(kind);
    this._girl();
    this.stage.sparkle(e.clientX, e.clientY, 8);
    this.stage.say(this.en ? ['So pretty!', 'Lovely!', 'Wow!'][Math.floor(Math.random() * 3)] : ['جميل أوي!', 'حلو حلو!', 'يا سلام!'][Math.floor(Math.random() * 3)]);
    this.girlEl.classList.remove('gk-bounce'); void this.girlEl.offsetWidth; this.girlEl.classList.add('gk-bounce');
    if (this.m.ready && !this.mirrorBtn) {
      this.mirrorBtn = h('button', { class: 'gk-btn go sl-mirror', onclick: () => this._mirror() }, this.en ? '🪞 Mirror!' : '🪞 المراية!');
      this.stage.layer.append(this.mirrorBtn);
      this.stage.say(this.en ? 'Press Mirror!' : 'دوسي على المراية!');
    }
  }

  _mirror() {
    if (!this.m.mirror()) return;
    this.busy = true;
    if (this.mirrorBtn) { this.mirrorBtn.remove(); this.mirrorBtn = null; }
    this.girlEl.classList.add('sl-twirl');
    const r = this.girlEl.getBoundingClientRect();
    for (let i = 0; i < 6; i++) setTimeout(() => this.stage.sparkle(r.left + Math.random() * r.width, r.top + Math.random() * r.height * 0.6, 8), i * 320);
    this.stage.say(this.en ? 'Look how beautiful!' : 'بصي إيه الجمال ده!');
    setTimeout(() => {
      if (this.disposed) return;
      this.girlEl.classList.remove('sl-twirl');
      this.stage.finish(() => { this.m.reset(); this.busy = false; this._girl(); this._pickTool(TOOLS[3], true); this.stage.say(this.en ? 'Another makeover!' : 'نعمل تسريحة جديدة!'); });
    }, 2400);
  }

  pause() { /* nothing runs by itself */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
