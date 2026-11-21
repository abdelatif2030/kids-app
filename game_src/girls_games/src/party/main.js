// «الحفلة الكبيرة» — the sixth level of Princess World (owner 2026-11-22: ONE deep game where the levels feed each other).
// Everything the child grew, baked, styled and cared for in the other five levels waits here in her BAG. She decorates a ballroom:
// flowers into the vases, cupcakes onto the plates, her animal friends come as guests, the princess shows her best look and hairdo.
// An empty place sends her to the level that makes it (a big button). When every place is full the party starts: music, confetti, ONE star,
// and the next party is bigger. No timers, no losing, nothing is ever taken away except what she places.
import { h } from '../../../cozy_kit/ui.js';
import { loadAll, makeStage } from '../kit/kit.js';

export const FLOWER_COLORS = ['#ff4a4a', '#ffd23a', '#ff7ac0', '#4aa8ff', '#b06aff', '#ff9a3a'];
export const FRIENDS = ['baby', 'kitten', 'bunny', 'puppy'];
export const PLACES = [{ ar: 'القاعة الكبيرة', en: 'The ballroom', emoji: '🏰' }, { ar: 'حفلة الجنينة', en: 'Garden party', emoji: '🌷' }, { ar: 'حفلة الثلج', en: 'Snow party', emoji: '❄️' },
  { ar: 'حفلة البحر', en: 'Beach party', emoji: '🏖️' }, { ar: 'حفلة النجوم', en: 'Star party', emoji: '⭐' }, { ar: 'حفلة قوس قزح', en: 'Rainbow party', emoji: '🌈' }];

/** The child's bag (kept in the save): what the other levels produced. Damaged data becomes an empty bag. */
export function normalizeBag(b) {
  const o = { flowers: [0, 0, 0, 0, 0, 0], cupcakes: 0, looks: 0, hairdos: 0, friends: {}, parties: 0 };
  if (!b || typeof b !== 'object') return o;
  const n = (v) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.min(99, Math.floor(Number(v))) : 0);
  for (let i = 0; i < 6; i++) o.flowers[i] = n(b.flowers && b.flowers[i]);
  o.cupcakes = n(b.cupcakes); o.looks = n(b.looks); o.hairdos = n(b.hairdos); o.parties = n(b.parties);
  for (const f of FRIENDS) o.friends[f] = n(b.friends && b.friends[f]);
  return o;
}

/** A level reports something it made. Returns the updated bag. */
export function addItem(bag, msg) {
  if (!msg) return bag;
  if (msg.kind === 'flower' && msg.color >= 0 && msg.color < 6) bag.flowers[msg.color] = Math.min(99, bag.flowers[msg.color] + 1);
  else if (msg.kind === 'cupcake') bag.cupcakes = Math.min(99, bag.cupcakes + 1);
  else if (msg.kind === 'look') bag.looks = Math.min(99, bag.looks + 1);
  else if (msg.kind === 'hairdo') bag.hairdos = Math.min(99, bag.hairdos + 1);
  else if (msg.kind === 'friend' && FRIENDS.includes(msg.char)) bag.friends[msg.char] = Math.min(99, (bag.friends[msg.char] || 0) + 1);
  return bag;
}

/** The party's places. The party grows: party 0 has 3 vases / 3 plates / 2 guests; later parties up to 6 / 6 / 4. */
export function sizeFor(parties) { const k = Math.min(3, parties); return { vases: 3 + k, plates: 3 + k, guests: Math.min(4, 2 + Math.ceil(k / 1.5)), show: 1 }; }

/** The rules (no browser): fill places from the bag; the party is ready when every place is full. Nothing is lost when a party ends. */
export class Party {
  constructor(bag) {
    this.bag = bag; this.size = sizeFor(bag.parties);
    this.vases = []; this.plates = 0; this.guests = []; this.look = false; this.hair = false;
  }
  placeFlower(color) { if (this.vases.length >= this.size.vases || this.bag.flowers[color] <= 0) return false; this.bag.flowers[color] -= 1; this.vases.push(color); return true; }
  placeCupcake() { if (this.plates >= this.size.plates || this.bag.cupcakes <= 0) return false; this.bag.cupcakes -= 1; this.plates += 1; return true; }
  invite(friend) { if (this.guests.length >= this.size.guests || !(this.bag.friends[friend] > 0) || this.guests.includes(friend)) return false; this.bag.friends[friend] -= 1; this.guests.push(friend); return true; }
  showLook() { if (this.look || this.bag.looks <= 0) return false; this.bag.looks -= 1; this.look = true; return true; }
  doHair() { if (this.hair || this.bag.hairdos <= 0) return false; this.bag.hairdos -= 1; this.hair = true; return true; }
  get filled() { return this.vases.length + this.plates + this.guests.length + (this.look ? 1 : 0) + (this.hair ? 1 : 0); }
  get total() { return this.size.vases + this.size.plates + this.size.guests + 2; }
  get ready() { return this.filled >= this.total; }
  /** The party: one star; the next one is bigger. */
  throwParty() { if (!this.ready) return false; this.bag.parties += 1; return true; }
  /** What is missing, as the level that makes it: for the "go and make some" button. */
  missing() {
    const need = [];
    if (this.vases.length < this.size.vases && this.bag.flowers.every((x) => x === 0)) need.push('garden');
    if (this.plates < this.size.plates && this.bag.cupcakes === 0) need.push('cupcake');
    if (this.guests.length < this.size.guests && FRIENDS.every((f) => !(this.bag.friends[f] > 0))) need.push('pet');
    if (!this.look && this.bag.looks === 0) need.push('dress');
    if (!this.hair && this.bag.hairdos === 0) need.push('salon');
    return need;
  }
}

const CSS = `
.pa-table{position:absolute;left:calc(var(--u)*30);right:calc(var(--u)*47);top:calc(var(--u)*32.5);display:flex;gap:calc(var(--u)*1.4);justify-content:center;flex-wrap:wrap;z-index:3;direction:ltr}
.pa-slot{width:calc(var(--u)*10);height:calc(var(--u)*10);min-width:48px;min-height:48px;border-radius:50%;border:calc(var(--u)*.6) dashed rgba(255,255,255,.95);background:rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:calc(var(--u)*5);color:#fff;padding:0;box-shadow:inset 0 0 calc(var(--u)*2) rgba(255,255,255,.5)}
.pa-slot.full{border-style:solid;background:rgba(255,255,255,.85);animation:gkb .5s}
.pa-slot img{max-width:90%;max-height:90%;object-fit:contain;pointer-events:none}
.pa-row{position:absolute;left:calc(var(--u)*30);right:calc(var(--u)*47);display:flex;gap:calc(var(--u)*1.4);justify-content:center;z-index:3;direction:ltr}
.pa-vases{top:calc(var(--u)*17)}.pa-guests{bottom:calc(var(--u)*2)}
.pa-label{position:absolute;left:calc(var(--u)*30);right:calc(var(--u)*47);text-align:center;font-weight:900;font-size:calc(var(--u)*3.2);color:#fff;text-shadow:0 2px 0 #b83a90,0 0 8px rgba(255,255,255,.7);z-index:3}
.pa-bag{position:absolute;right:calc(var(--u)*2);top:calc(var(--u)*17);bottom:calc(var(--u)*2);width:calc(var(--u)*45);z-index:6;padding:calc(var(--u)*2);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-content:start;gap:calc(var(--u)*1.2);direction:ltr;overflow-y:auto;overflow-x:hidden}
.pa-bag h4,.pa-bag .pa-go{grid-column:1/-1}
.pa-bag h4{margin:0;text-align:center;color:#b83a90;font-size:calc(var(--u)*3.8);font-weight:900}
.pa-item{display:flex;align-items:center;gap:calc(var(--u)*.8);background:#fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*1.2);border:calc(var(--u)*.4) solid #ffd0ea;cursor:pointer;font-weight:900;color:#a82a78;font-size:calc(var(--u)*3);font-family:inherit;min-height:48px}
.pa-item i{font-style:normal;font-size:calc(var(--u)*5);width:calc(var(--u)*5.6);text-align:center;flex:0 0 auto}
.pa-item{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.pa-item b{margin-inline-start:auto;flex:0 0 auto;background:#ffd23a;border-radius:99px;min-width:calc(var(--u)*5.6);text-align:center;padding:0 calc(var(--u)*1.2);color:#8a4a00}
.pa-item.zero{opacity:.45}
.pa-dot{width:calc(var(--u)*4);height:calc(var(--u)*4);border-radius:50%;border:2px solid #fff;flex:0 0 auto;margin:0 calc(var(--u)*1.4)}
.pa-go{margin-top:calc(var(--u)*1)}
.pa-princess{position:absolute;left:calc(var(--u)*14);bottom:calc(var(--u)*3);height:calc(var(--u)*46);transform:translateX(-50%);z-index:2;pointer-events:none}
.pa-princess img{height:100%;object-fit:contain}
.pa-start{position:absolute;left:calc(var(--u)*3);right:calc(var(--u)*47);bottom:calc(var(--u)*3);display:flex;justify-content:center;z-index:7}
@media (max-aspect-ratio:1/1){.pa-table,.pa-row,.pa-label,.pa-start{left:calc(var(--u)*3);right:calc(var(--u)*3)}.pa-bag{display:flex}.pa-bag{left:calc(var(--u)*3);right:calc(var(--u)*3);top:auto;bottom:calc(var(--u)*2);width:auto;height:calc(var(--u)*36);flex-direction:row;flex-wrap:wrap}.pa-vases{top:calc(var(--u)*15)}.pa-table{top:calc(var(--u)*30)}.pa-guests{bottom:calc(var(--u)*42)}.pa-princess{left:50%;bottom:calc(var(--u)*48);height:calc(var(--u)*24)}.pa-start{bottom:calc(var(--u)*40)}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = config.base || './'; this.disposed = false;
    this.bag = normalizeBag(config.bag);
    if (!document.getElementById('pa-style')) document.head.append(h('style', { id: 'pa-style' }, CSS));
    this.party = new Party(this.bag);
    const names = ['bg_garden', 'doll_light', 'pose_dance', 'pose_twirl', ...Array.from({ length: 12 }, (_, i) => `fl2_${String(i + 1).padStart(2, '0')}`).slice(0, 6), ...Array.from({ length: 12 }, (_, i) => `cup_${String(i + 1).padStart(2, '0')}`), 'gi_12', ...FRIENDS.map((f) => `${f}_happy`), ...Array.from({ length: 12 }, (_, i) => `fairy_${String(i + 1).padStart(2, '0')}`)];
    loadAll(this.base, names).then((art) => { this.art = art; if (!this.disposed) this._build(); });
  }

  _t(p) { return this.en ? p[1] : p[0]; }
  _src(n) { const i = this.art[n]; return i ? i.src : null; }

  _build() {
    const A = this.art;
    this.stage = makeStage(this.el, { post: this.post, lang: this.en ? 'en' : 'ar', base: this.base, fairy: Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => [n, A[`fairy_${String(n).padStart(2, '0')}`]])), title: this.en ? 'The big party' : 'الحفلة الكبيرة', places: PLACES, bgs: [A.bg_garden, A.bg_garden, A.bg_garden, A.bg_garden, A.bg_garden, A.bg_garden], onPlace: () => {} });
    this.draw();
    this.stage.say(this.en ? 'Decorate the party!' : 'جهّزي الحفلة!');
  }

  _full(cls, content, on) { return h('button', { class: `pa-slot${on ? ' full' : ''}`, onclick: this._tap }, content); }

  draw() {
    const P = this.party; const A = this.art; const L = this.stage.layer;
    L.replaceChildren();
    const dollSrc = this._src(P.look || P.hair ? 'pose_dance' : 'doll_light');
    L.append(h('div', { class: 'pa-princess gk-idle' }, dollSrc ? h('img', { src: dollSrc, alt: '', draggable: 'false' }) : h('div', { style: 'font-size:calc(var(--u)*20)' }, '👸')));
    const vaseImg = this._src('gi_12');
    const vases = h('div', { class: 'pa-row pa-vases' }, Array.from({ length: P.size.vases }, (_, i) => {
      const c = P.vases[i];
      const fl = c !== undefined ? this._src(`fl2_${String(c + 1).padStart(2, '0')}`) : null;
      return h('button', { class: `pa-slot${c !== undefined ? ' full' : ''}`, 'aria-label': 'vase', onclick: (e) => this._autoFlower(e) }, c !== undefined ? (fl ? h('img', { src: fl, alt: '', draggable: 'false' }) : '🌸') : (vaseImg ? h('img', { src: vaseImg, alt: '', draggable: 'false', style: 'opacity:.55' }) : '🌷'));
    }));
    const plates = h('div', { class: 'pa-row pa-table' }, Array.from({ length: P.size.plates }, (_, i) => {
      const full = i < P.plates;
      const cs = this._src(`cup_${String([3, 4, 7, 8, 11, 12][i % 6]).padStart(2, '0')}`);
      return h('button', { class: `pa-slot${full ? ' full' : ''}`, 'aria-label': 'plate', onclick: (e) => this._cupcake(e) }, full ? (cs ? h('img', { src: cs, alt: '', draggable: 'false' }) : '🧁') : '🍽️');
    }));
    const guests = h('div', { class: 'pa-row pa-guests' }, Array.from({ length: P.size.guests }, (_, i) => {
      const g = P.guests[i];
      const gs = g ? this._src(`${g}_happy`) : null;
      return h('button', { class: `pa-slot${g ? ' full' : ''}`, style: 'width:calc(var(--u)*13);height:calc(var(--u)*13)', 'aria-label': 'guest', onclick: (e) => this._guest(e) }, g ? (gs ? h('img', { src: gs, alt: '', draggable: 'false' }) : '🐻') : '🪑');
    }));
    L.append(h('div', { class: 'pa-label', style: 'top:calc(var(--u)*13)' }, this.en ? '🌷 Flowers' : '🌷 الزهور'), vases, h('div', { class: 'pa-label', style: 'top:calc(var(--u)*29)' }, this.en ? '🧁 Cupcakes' : '🧁 الكب كيك'), plates, guests);
    // the bag
    const bag = this.bag;
    const rows = [
      ...FLOWER_COLORS.map((c, i) => h('button', { class: `pa-item${bag.flowers[i] ? '' : ' zero'}`, onclick: (e) => this._flower(i, e) }, h('div', { class: 'pa-dot', style: `background:${c}` }), this.en ? 'Flower' : 'زهرة', h('b', {}, String(bag.flowers[i])))),
      h('button', { class: `pa-item${bag.cupcakes ? '' : ' zero'}`, onclick: (e) => this._cupcake(e) }, h('i', {}, '🧁'), this.en ? 'Cupcakes' : 'كب كيك', h('b', {}, String(bag.cupcakes))),
      ...FRIENDS.map((f) => h('button', { class: `pa-item${bag.friends[f] ? '' : ' zero'}`, onclick: (e) => this._invite(f, e) }, h('i', {}, { baby: '👶', kitten: '🐱', bunny: '🐰', puppy: '🐶' }[f]), { baby: this.en ? 'Baby' : 'بيبي', kitten: this.en ? 'Kitten' : 'القطة', bunny: this.en ? 'Bunny' : 'الأرنوبة', puppy: this.en ? 'Puppy' : 'الكلب' }[f], h('b', {}, String(bag.friends[f])))),
      h('button', { class: `pa-item${bag.looks && !P.look ? '' : ' zero'}${P.look ? ' done' : ''}`, onclick: (e) => this._look(e) }, h('i', {}, '👗'), this.en ? 'Best look' : 'الإطلالة', h('b', {}, P.look ? '✓' : String(bag.looks))),
      h('button', { class: `pa-item${bag.hairdos && !P.hair ? '' : ' zero'}${P.hair ? ' done' : ''}`, onclick: (e) => this._hair(e) }, h('i', {}, '💇‍♀️'), this.en ? 'Hairdo' : 'التسريحة', h('b', {}, P.hair ? '✓' : String(bag.hairdos))),
    ];
    const panel = h('div', { class: 'pa-bag gk-panel' }, h('h4', {}, this.en ? `🎒 My bag  ·  ${P.filled}/${P.total}` : `🎒 شنطتي  ·  ${P.filled}/${P.total}`), ...rows);
    const miss = P.missing();
    const GO = { garden: ['حديقة الفراشات', 'Butterfly garden', 4], cupcake: ['محل الكب كيك', 'Cupcake shop', 3], pet: ['بيبي وصاحبها', 'Baby & pet', 2], dress: ['ألبسي الأميرة', 'Dress up', 0], salon: ['صالون الشعر', 'Hair salon', 1] };
    for (const m of miss.slice(0, 2)) panel.append(h('button', { class: 'gk-btn go pa-go', style: 'font-size:calc(var(--u)*3.4);min-height:48px;padding:0 calc(var(--u)*3)', onclick: () => this.post({ type: 'goto', level: GO[m][2] }) }, this.en ? `Go: ${GO[m][1]}` : `روحي: ${GO[m][0]}`));
    L.append(panel);
    if (P.ready) L.append(h('div', { class: 'pa-start' }, h('button', { class: 'gk-btn go', style: 'animation:gkb 1.2s infinite', onclick: () => this._start() }, this.en ? '🎉 Start the party!' : '🎉 ابدأ الحفلة!')));
    this.stage.progress(0, 0);
    this.post({ type: 'bag', bag: this.bag });
  }

  _ok(e) { this.stage.sparkle(e.clientX, e.clientY, 7); this.stage.say('x'); }
  _flower(c, e) { if (this.party.placeFlower(c)) { this._ok(e); this.draw(); } else this._nope(e); }
  _autoFlower(e) { const c = this.bag.flowers.findIndex((x) => x > 0); if (c >= 0 && this.party.placeFlower(c)) { this._ok(e); this.draw(); } else this._nope(e); }
  _cupcake(e) { if (this.party.placeCupcake()) { this._ok(e); this.draw(); } else this._nope(e); }
  _invite(f, e) { if (this.party.invite(f)) { this._ok(e); this.draw(); } else this._nope(e); }
  _guest(e) { const f = FRIENDS.find((x) => this.bag.friends[x] > 0 && !this.party.guests.includes(x)); if (f && this.party.invite(f)) { this._ok(e); this.draw(); } else this._nope(e); }
  _look(e) { if (this.party.showLook()) { this._ok(e); this.draw(); } else this._nope(e); }
  _hair(e) { if (this.party.doHair()) { this._ok(e); this.draw(); } else this._nope(e); }
  _nope(e) { const el = e.currentTarget; if (el) { el.classList.remove('gk-bounce'); void el.offsetWidth; el.classList.add('gk-bounce'); } this.stage.say('x'); }

  _start() {
    if (!this.party.throwParty()) return;
    const rr = this.stage.root.getBoundingClientRect();
    for (let i = 0; i < 8; i++) setTimeout(() => this.stage.sparkle(rr.left + rr.width * (0.15 + 0.1 * i), rr.top + rr.height * (0.25 + 0.1 * (i % 3)), 8), i * 260);
    this.post({ type: 'bag', bag: this.bag });
    setTimeout(() => {
      if (this.disposed) return;
      this.stage.finish(() => { this.party = new Party(this.bag); this.draw(); });
    }, 2400);
  }

  pause() { /* nothing runs by itself */ }
  dispose() { this.disposed = true; if (this.stage) this.stage.dispose(); }
}

export function start(el, config, post) {
  const g = new Game(el, config || {}, post);
  return { dispose: () => g.dispose(), pause: () => g.pause() };
}
