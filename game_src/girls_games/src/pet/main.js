// «بيبي وصاحبها الصغير» — a gentle care game for girls aged 2-4 (docs/GIRLS_SECTION_PLAN.md, game 3).
// Choose a baby, a kitten, a bunny or a puppy, then take care of it in four steps shown as four big buttons (feed, bath, brush, sleep).
// The character shows how it feels (hungry, muddy, towel, sleepy) and gets happy; nothing can go wrong, no timers, locks or coins.
// When all four steps are done it gives a big hug and the child earns ONE star for finishing the round (never for time).
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const CHARS = [
  { id: 'baby', ar: 'بيبي', en: 'Baby', emoji: '👶' },
  { id: 'kitten', ar: 'القطة', en: 'Kitten', emoji: '🐱' },
  { id: 'bunny', ar: 'الأرنوبة', en: 'Bunny', emoji: '🐰' },
  { id: 'puppy', ar: 'الكلب الصغير', en: 'Puppy', emoji: '🐶' },
];
export const STEPS = [
  { id: 'feed', ar: 'أكل', en: 'Feed', emoji: '🍼', pic: 'care_01', need: 'hungry', doing: 'eating', ask: ['جعانة! نأكلها؟', 'Hungry! Shall we feed?'], done: ['ممممم حلو!', 'Yummy!'] },
  { id: 'bath', ar: 'حمّام', en: 'Bath', emoji: '🛁', pic: 'care_05', need: 'muddy', doing: 'bath', ask: ['اتوسخت! نحممها؟', 'Muddy! Bath time?'], done: ['نضيفة وبتضحك!', 'Clean and giggling!'] },
  { id: 'brush', ar: 'تسريح', en: 'Brush', emoji: '🪮', pic: 'care_08', need: 'towel', doing: 'brush', ask: ['نسرّحها؟', 'Brush time?'], done: ['شكلها جميل!', 'So pretty!'] },
  { id: 'sleep', ar: 'نوم', en: 'Sleep', emoji: '🌙', pic: 'care_11', need: 'yawn', doing: 'sleep', ask: ['نعسانة! تنام؟', 'Sleepy! Time for bed?'], done: ['نامت. نوم هنيّ!', 'Sweet dreams!'] },
];
export const PLACES = [
  { ar: 'غرفة البيبي', en: 'Nursery', emoji: '🍼' }, { ar: 'الجنينة', en: 'Garden', emoji: '🌳' }, { ar: 'الحمّام', en: 'Bathroom', emoji: '🛁' },
  { ar: 'الحظيرة', en: 'Barn', emoji: '🐄' }, { ar: 'الكوخ الدافي', en: 'Cozy cabin', emoji: '🏔️' }, { ar: 'غرفة قوس قزح', en: 'Rainbow room', emoji: '🌈' },
];

/** A day of care: ALL FOUR friends in turn (the one the child picked first), each with the four steps; ONE star at the end (owner 2026-11-22: levels were too short). */
export class Journey {
  constructor(first = 0) { this.order = [first, ...[0, 1, 2, 3].filter((i) => i !== first)]; this.idx = 0; this.round = new Round(); this.stars = 0; this.friendsDone = 0; }
  get char() { return CHARS[this.order[this.idx]].id; }
  /** One step for the current friend. Returns 'no', 'step', 'friend' (this friend is done, the next arrives) or 'star' (the fourth friend is done). */
  step(id) {
    if (!this.round.do(id)) return 'no';
    if (!this.round.complete) return 'step';
    this.round.finish(); this.friendsDone += 1;
    if (this.friendsDone >= CHARS.length) { this.stars += 1; this.friendsDone = 0; this.idx = 0; return 'star'; }
    this.idx += 1; return 'friend';
  }
}

/** The rules (no browser needed): the steps can be done in any order, each once; a round is complete when all four are done; one star per round. */
export class Round {
  constructor() { this.done = new Set(); this.stars = 0; }
  do(step) { if (this.done.has(step)) return false; this.done.add(step); return true; }
  get complete() { return this.done.size === STEPS.length; }
  /** the step the character "needs" now: the first not done, in the story order */
  get next() { return STEPS.find((s) => !this.done.has(s.id)) || null; }
  finish() { if (!this.complete) return false; this.stars += 1; this.done.clear(); return true; }
}

const CSS = `
.pt-pick{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*3);z-index:3;padding:calc(var(--u)*14) calc(var(--u)*3) calc(var(--u)*3)}
.pt-card{width:calc(var(--u)*21);min-width:92px;height:calc(var(--u)*34);border-radius:calc(var(--u)*4);border:calc(var(--u)*.8) solid #fff;background:rgba(255,255,255,.88);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;cursor:pointer;padding:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.9) 0 rgba(160,40,120,.5);font-family:inherit;font-weight:900;color:#a82a78;font-size:calc(var(--u)*4)}
.pt-card img{width:100%;height:calc(var(--u)*26);object-fit:contain;pointer-events:none}
.pt-pet{position:absolute;left:34%;bottom:calc(var(--u)*2);height:calc(var(--u)*50);transform:translateX(-50%);z-index:2;display:flex;align-items:flex-end}
.pt-pet img{height:100%;max-width:calc(var(--u)*60);object-fit:contain;pointer-events:none}
.pt-pet .emo{font-size:calc(var(--u)*24)}
.pt-steps{position:absolute;right:calc(var(--u)*2);top:calc(var(--u)*19);display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*2);z-index:6;padding:calc(var(--u)*2.2)}
.pt-step{width:calc(var(--u)*19);min-width:84px;height:calc(var(--u)*17);min-height:64px;flex-direction:column;border-radius:calc(var(--u)*4);border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#fff0fa,#ffc8e8);font-size:calc(var(--u)*4.4);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.6);box-shadow:0 calc(var(--u)*.8) 0 rgba(160,40,120,.5);font-family:inherit;padding:0 calc(var(--u)*2);color:#a82a78;font-weight:900;direction:ltr}
.pt-step i{font-style:normal;font-size:calc(var(--u)*7)}
.pt-step.next{animation:gkb 1.2s infinite;background:linear-gradient(180deg,#ffe88a,#ffb030)}
.pt-step.done{background:linear-gradient(180deg,#bff5c8,#7ad88a);opacity:.85}
.pt-hint{position:absolute;left:34%;top:calc(var(--u)*15);transform:translateX(-50%);z-index:4;background:rgba(255,255,255,.92);border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.4) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*4.2);color:#a82a78;max-width:45%;text-align:center}
@media (max-aspect-ratio:1/1){.pt-pet{left:50%;height:calc(var(--u)*55);bottom:calc(var(--u)*40)}.pt-steps{left:50%;right:auto;transform:translateX(-50%);top:auto;bottom:calc(var(--u)*2);display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;width:calc(var(--u)*94)}.pt-step{width:calc(var(--u)*22)}.pt-hint{left:50%}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './'; this.disposed = false;
    if (!document.getElementById('pt-style')) document.head.append(h('style', { id: 'pt-style' }, CSS));
    this.round = new Round(); this.char = null; this.pose = 'happy'; this.busy = false; this.journey = null;
    const poses = ['happy', 'hungry', 'eating', 'bottle', 'muddy', 'bath', 'towel', 'brush', 'dressed', 'yawn', 'sleep', 'hug'];
    const names = [...CHARS.flatMap((c) => poses.map((p) => `${c.id}_${p}`)), 'care_01', 'care_05', 'care_08', 'care_11', 'bg_nursery', 'bg_garden'];
    loadAll(this.base, ['bgp_1', 'bgp_2', 'bgp_3', 'bgp_4', 'bgp_5', 'bgp_6', ...names, ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)]).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _t(pair) { return this.en ? pair[1] : pair[0]; }

  _build() {
    const A = this.art; const bgs = [1, 2, 3, 4, 5, 6].map((i) => A[`bgp_${i}`] || null);
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => [n, this.art[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'Baby & pet' : 'بيبي وصاحبها', places: PLACES, bgs, onPlace: () => {} });
    this._pick();
  }

  _pick() {
    this._clear();
    this.pickEl = h('div', { class: 'pt-pick' }, CHARS.map((c) => {
      const im = this.art[`${c.id}_happy`];
      return h('button', { class: 'pt-card', 'aria-label': this.en ? c.en : c.ar, onclick: () => { this.journey = new Journey(CHARS.indexOf(c)); this.char = this.journey.char; this.round = this.journey.round; this._play(); } },
        im ? h('img', { src: im.src, alt: '', draggable: 'false' }) : h('div', { style: 'font-size:calc(var(--u)*16)' }, c.emoji), this.en ? c.en : c.ar);
    }));
    this.stage.layer.append(this.pickEl);
    this.stage.say(this.en ? 'Pick a friend to take care of!' : 'اختاري صاحب تاخدي بالك منه!');
  }

  _clear() { this.stage.layer.replaceChildren(); }

  _img(pose) { const im = this.art[`${this.char}_${pose}`]; return im ? im.src : null; }

  _play() {
    this._clear();
    this.petEl = h('div', { class: 'pt-pet gk-idle' });
    this.hintEl = h('div', { class: 'pt-hint' });
    this.stepsEl = h('div', { class: 'pt-steps gk-panel' }, STEPS.map((s) => h('button', { class: 'pt-step', 'data-step': s.id, 'aria-label': this.en ? s.en : s.ar, onclick: (e) => this._doStep(s, e) }, this._stepIcon(s), this.en ? s.en : s.ar)));
    this.stage.layer.append(this.petEl, this.hintEl, this.stepsEl);
    this.stage.progress(0, CHARS.length);
    this._refresh();
  }

  _stepIcon(s) { const im = this.art[s.pic]; return im ? h('img', { src: im.src, alt: '', draggable: 'false', style: 'height:calc(var(--u)*8);width:calc(var(--u)*8);object-fit:contain;pointer-events:none' }) : h('i', {}, s.emoji); }

  _show(pose) {
    this.pose = pose;
    const src = this._img(pose);
    this.petEl.replaceChildren(h('div', { class: 'gk-shadow' }), src ? h('img', { src, alt: '', draggable: 'false' }) : h('div', { class: 'emo' }, CHARS.find((c) => c.id === this.char).emoji));
  }

  _refresh() {
    const nx = this.round.next;
    this._show(nx ? nx.need : 'happy');
    this.stepsEl.querySelectorAll('.pt-step').forEach((b) => { b.classList.toggle('done', this.round.done.has(b.dataset.step)); b.classList.toggle('next', !!nx && nx.id === b.dataset.step); });
    this.hintEl.textContent = nx ? this._t(nx.ask) : '';
    this.hintEl.style.display = nx ? '' : 'none';
    if (nx) this.stage.say(this._t(nx.ask));
  }

  _doStep(step, e) {
    if (this.busy || this.round.done.has(step.id)) return;
    this.busy = true;
    const res = this.journey.step(step.id);
    if (res === 'no') { this.busy = false; return; }
    if (res === 'friend' || res === 'star') this.post({ type: 'item', kind: 'friend', char: this.char });
    this._show(step.id === 'feed' && this.char === 'baby' ? 'bottle' : step.doing);
    this.stage.sparkle(e.clientX, e.clientY, 8);
    this.stage.say(this._t(step.done));
    setTimeout(() => {
      if (this.disposed) return;
      this.busy = false;
      if (res === 'friend' || res === 'star') this._hug(res); else this._refresh();
    }, 2000);
  }

  _hug(res) {
    this._show('hug');
    this.hintEl.style.display = 'none';
    const r = this.petEl.getBoundingClientRect();
    for (let i = 0; i < 5; i++) setTimeout(() => this.stage.sparkle(r.left + r.width / 2, r.top + r.height / 3, 8), i * 300);
    this.stage.say(this.en ? 'A big hug! Thank you!' : 'حضن كبير! شكراً!');
    this.stage.progress(res === 'star' ? CHARS.length : this.journey.friendsDone, CHARS.length);
    setTimeout(() => {
      if (this.disposed) return;
      if (res === 'star') { this.stage.finish(() => this._pick()); return; }
      // the next friend arrives with a fresh round of care
      this.char = this.journey.char; this.round = this.journey.round; this.busy = false; this._show(this.round.next.need); this._refresh();
      this.stage.say(this.en ? 'A new friend!' : 'صاحب جديد!');
    }, 2300);
  }

  pause() { /* nothing runs by itself */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
