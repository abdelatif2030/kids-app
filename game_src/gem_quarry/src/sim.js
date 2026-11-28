// Pure, deterministic rules of «محجر الجواهر» (Gemlode Quarry). No DOM, no randomness.
// A quarry digs crates of purple gems into a pile at the mine. The player loads the crates onto trucks (tap), the trucks
// drive the winding road to the depot and pay coins, and the coins buy upgrade pads. If the pile is full the diggers just
// wait a moment (production holds, nothing is lost, no coin is ever taken). Each level asks to ship N crates.

export const KINDS = ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader', 'polish', 'mine2'];
export const MAXLV = { diggers: 8, trucks: 6, truckCap: 5, pile: 5, road: 4, loader: 3, polish: 2, mine2: 1 };
// [first price, growth per level owned]; first price is the price of the first purchase.
const COST = { diggers: [150, 1.7], trucks: [300, 1.9], pile: [120, 1.6], truckCap: [250, 1.8], road: [300, 1.9], loader: [350, 2.0], polish: [600, 2.2], mine2: [1350, 1] };
const BASE = { diggers: 1, trucks: 1, pile: 0, truckCap: 0, road: 0, loader: 0, polish: 0, mine2: 0 };

export const TAP_LOAD = 3;          // crates moved by one tap on the pile
export const LOADER_RATE = 1.5;     // crates/s per auto-loader level
export const PILE_BASE = 12;
export const PILE_STEP = 8;
export const CAP_BASE = 6;
export const CAP_STEP = 3;
export const STAR_EXTRA_3 = 15;      // extra gems collected beyond the goal for 3 stars
export const STAR_EXTRA_2 = 6;       // ... for 2 stars

const RATEFIX = (r) => Math.round(r * 1.5 * 100) / 100;
const TRIPFIX = (t) => Math.round(t * 0.7 * 10) / 10;
const T_ALL = ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader', 'polish', 'mine2'];
export const LEVELS = [
  { id: 1, goal: 30, price: 10, rate: RATEFIX(0.45), trip: TRIPFIX(5.0), coins: 0, tools: ['diggers', 'trucks'], up: {}, ar: 'بوابة المحجر', en: 'Quarry Gate' },
  { id: 2, goal: 45, price: 11, rate: RATEFIX(0.46), trip: TRIPFIX(5.2), coins: 60, tools: ['diggers', 'trucks', 'pile'], up: {}, ar: 'تل الجرانيت الوردي', en: 'Pink Granite Hill' },
  { id: 3, goal: 60, price: 12, rate: RATEFIX(0.47), trip: TRIPFIX(5.5), coins: 80, tools: ['diggers', 'trucks', 'pile', 'truckCap'], up: {}, ar: 'صناديق الجرانيت', en: 'Granite Crates' },
  { id: 4, goal: 80, price: 13, rate: RATEFIX(0.48), trip: TRIPFIX(5.8), coins: 100, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road'], up: {}, ar: 'طريق النيل', en: 'Nile Road' },
  { id: 5, goal: 100, price: 14, rate: RATEFIX(0.49), trip: TRIPFIX(6.0), coins: 120, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader'], up: {}, ar: 'مساعد المحجر', en: 'Quarry Helper' },
  { id: 6, goal: 130, price: 15, rate: RATEFIX(0.5), trip: TRIPFIX(6.2), coins: 150, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader', 'polish'], up: { diggers: 2 }, ar: 'ورشة التلميع', en: 'Polish Shop' },
  { id: 7, goal: 160, price: 16, rate: RATEFIX(0.5), trip: TRIPFIX(6.4), coins: 200, tools: T_ALL, up: { diggers: 2, trucks: 2 }, ar: 'محجر المسلة', en: 'Obelisk Quarry' },
  { id: 8, goal: 200, price: 18, rate: RATEFIX(0.52), trip: TRIPFIX(6.6), coins: 250, tools: T_ALL, up: { diggers: 3, trucks: 2, pile: 1, truckCap: 1 }, ar: 'المحجر الكبير', en: 'The Great Quarry' },
  { id: 9, goal: 250, price: 20, rate: RATEFIX(0.54), trip: TRIPFIX(6.8), coins: 300, tools: T_ALL, up: { diggers: 3, trucks: 3, pile: 1, truckCap: 1, road: 1 }, ar: 'فيضان الجواهر', en: 'Gem Flood' },
  { id: 10, goal: 320, price: 22, rate: RATEFIX(0.56), trip: TRIPFIX(7.0), coins: 400, tools: T_ALL, up: { diggers: 4, trucks: 3, pile: 2, truckCap: 1, road: 1, loader: 1 }, ar: 'سيد محاجر أسوان', en: 'Master of Aswan Quarries' },
  // ---- Phase 2G: the second quarry — Tura (طرة), the famous white-limestone quarries south of Cairo whose
  // stone cased the Giza pyramids. Append-only: ids 11–15 come after Aswan; ids 1–10 are frozen. Same mechanics,
  // same tools, gently rising goals/prices/trips and slightly richer starting crews so the curve stays kind.
  { id: 11, goal: 360, price: 24, rate: RATEFIX(0.57), trip: TRIPFIX(7.2), coins: 450, tools: T_ALL, up: { diggers: 4, trucks: 3, pile: 2, truckCap: 1, road: 1, loader: 1 }, ar: 'بوابة طرة', en: 'Tura Gate', chapter: 'tura' },
  { id: 12, goal: 420, price: 26, rate: RATEFIX(0.58), trip: TRIPFIX(7.4), coins: 500, tools: T_ALL, up: { diggers: 4, trucks: 3, pile: 2, truckCap: 2, road: 1, loader: 1 }, ar: 'الحجر الأبيض', en: 'White Limestone', chapter: 'tura' },
  { id: 13, goal: 480, price: 28, rate: RATEFIX(0.59), trip: TRIPFIX(7.6), coins: 550, tools: T_ALL, up: { diggers: 5, trucks: 4, pile: 2, truckCap: 2, road: 2, loader: 1 }, ar: 'كسوة الأهرامات', en: 'Pyramid Casing', chapter: 'tura' },
  { id: 14, goal: 560, price: 30, rate: RATEFIX(0.60), trip: TRIPFIX(7.8), coins: 600, tools: T_ALL, up: { diggers: 5, trucks: 4, pile: 3, truckCap: 2, road: 2, loader: 2 }, ar: 'محجر طرة الكبير', en: 'Great Tura Quarry', chapter: 'tura' },
  { id: 15, goal: 650, price: 32, rate: RATEFIX(0.62), trip: TRIPFIX(8.0), coins: 700, tools: T_ALL, up: { diggers: 6, trucks: 4, pile: 3, truckCap: 3, road: 2, loader: 2, polish: 1 }, ar: 'سيد محاجر طرة', en: 'Master of Tura', chapter: 'tura' },
];
/** The quarry chapter a level belongs to ('aswan' for the original ten, 'tura' for the Phase 2G second quarry). */
export const chapterOf = (l) => l.chapter || 'aswan';

/** Museum exhibits: one per quarry site, each with a true one-line fact (ar+en). Display-only text — no voices. */
export const EXHIBITS = [
  { level: 1, icon: '💎', fact: ['محاجر الجرانيت في أسوان كانت تمدّ مصر القديمة بالحجر لبناء المعابد والتماثيل.', 'Aswan\u2019s granite quarries supplied ancient Egypt with stone for temples and statues.'] },
  { level: 2, icon: '🩷', fact: ['جرانيت أسوان وردي اللون لأن فيه كتير من معدن الفلسبار الوردي.', 'Aswan granite is pink because it holds lots of pink feldspar.'] },
  { level: 3, icon: '🪨', fact: ['العمال كانوا يشكّلوا كتل الجرانيت الصلبة بحجارة الدوليريت القوية.', 'Workers shaped hard granite blocks with strong dolerite pounding stones.'] },
  { level: 4, icon: '⛵', fact: ['كتل الحجر الثقيلة كانت تسافر من أسوان على النيل في مراكب خشبية كبيرة.', 'Heavy stone blocks travelled from Aswan down the Nile on big wooden boats.'] },
  { level: 5, icon: '🧑‍🏭', fact: ['عمال المحاجر كانوا يعيشوا في قرى قريبة من المحجر ويشتغلوا في فرق.', 'Quarry workers lived in villages near the quarries and worked in teams.'] },
  { level: 6, icon: '✨', fact: ['تلميع الجرانيت بالرمل والمية كان يخلي سطحه يلمع زي المراية.', 'Polishing granite with sand and water made its surface shine like a mirror.'] },
  { level: 7, icon: '🗿', fact: ['في محجر أسوان لسه فيه مسلة ضخمة لم تكتمل — كانت هتبقى أكبر مسلة في مصر.', 'A giant unfinished obelisk still lies in Aswan\u2019s quarry — it would have been Egypt\u2019s biggest.'] },
  { level: 8, icon: '🏛️', fact: ['الجرانيت من أصلب الحجارة، فنحته كان محتاج صبر ووقت طويل.', 'Granite is one of the hardest stones, so carving it took great patience.'] },
  { level: 9, icon: '💜', fact: ['المصريون القدماء كانوا يحبوا الحجارة الملونة زي الجمشت والعقيق لعمل الحُلي.', 'Ancient Egyptians loved colourful stones like amethyst and carnelian for jewellery.'] },
  { level: 10, icon: '👑', fact: ['تماثيل ملوك منحوتة من جرانيت أسوان لسه واقفة في متاحف العالم لحد النهاردة.', 'Statues of kings carved from Aswan granite still stand in museums today.'] },
  { level: 11, icon: '🏺', fact: ['طرة، جنوب القاهرة، كانت أشهر محاجر الحجر الجيري في مصر القديمة.', 'Tura, south of Cairo, was ancient Egypt\u2019s most famous limestone quarry.'] },
  { level: 12, icon: '🤍', fact: ['حجر طرة الجيري أبيض ناصع وحبيباته ناعمة، فبيتقطع بسلاسة.', 'Tura limestone is bright white and fine-grained, so it cuts smoothly.'] },
  { level: 13, icon: '🔺', fact: ['الهرم الأكبر كان مغطى بحجر طرة الأبيض الأملس وكان بيلمع في الشمس.', 'The Great Pyramid was once covered in smooth white Tura limestone that shone in the sun.'] },
  { level: 14, icon: '⛏️', fact: ['محاجر طرة عبارة عن صالات ضخمة محفورة جوه التلال تحت الأرض.', 'Tura\u2019s quarries are huge underground galleries carved into the hills.'] },
  { level: 15, icon: '⛴️', fact: ['المراكب كانت تنقل حجر طرة عبر النيل لبناء أهرامات الجيزة.', 'Boats carried Tura limestone across the Nile to build the pyramids at Giza.'] },
];

/** Museum book entries for a save: one exhibit per quarry site. An exhibit is OPEN once its level has been
 * completed (stars > 0); it then shows the site's name, its stars and its fact. Pure and derived entirely from
 * the existing save (stars map) — no new persistence, so old saves show their sites exactly as completed. */
export function museumEntries(save) {
  const s = normalizeSave(save);
  return EXHIBITS.map((ex) => {
    const L = levelCfg(ex.level);
    const stars = s.stars[ex.level] || 0;
    return { level: ex.level, icon: ex.icon, ar: L.ar, en: L.en, chapter: chapterOf(L), stars, complete: stars > 0, fact: ex.fact };
  });
}
export const levelCfg = (id) => LEVELS[Math.max(0, Math.min(LEVELS.length - 1, (id | 0) - 1))];

export class Quarry {
  constructor({ level = 1, easy = false } = {}) {
    const c = (this.cfg = levelCfg(level));
    this.level = c.id;
    this.easy = !!easy;
    this.up = {};
    for (const k of KINDS) this.up[k] = Math.max(BASE[k], c.up[k] || 0);
    if (this.easy) this.up.loader = Math.max(1, this.up.loader);
    this.coins = c.coins;
    this.pile = 0;
    this.prodAcc = 0;
    this.autoAcc = 0;
    this.produced = 0;
    this.shipped = 0;
    this.earned = 0;
    this.overflowT = 0;
    this.wasFull = false;
    this.t = 0;
    this.state = 'play';
    this.qCounter = 0;
    this.trucks = [];
    this.idleT = 0;
    this.nextId = 1;
    for (let i = 0; i < this.up.trucks; i++) this._addTruck();
    this._slots();
  }

  // ---- derived numbers ------------------------------------------------------------------------------------------
  get goal() { return this.cfg.goal; }
  has(kind) { return this.cfg.tools.includes(kind) || (kind === 'loader' && this.easy); }
  pileCap() { return Math.round((PILE_BASE + PILE_STEP * this.up.pile) * (this.easy ? 1.5 : 1)); }
  truckCap() { return CAP_BASE + CAP_STEP * this.up.truckCap; }
  crateValue() { return Math.round(this.cfg.price * (1 + 0.5 * this.up.polish)); }
  prodRate() { return this.cfg.rate * this.up.diggers * (this.up.mine2 ? 1.6 : 1); }
  tripT() { return this.cfg.trip / (1 + 0.3 * this.up.road); }
  loaderRate() { return LOADER_RATE * this.up.loader; }
  /** Rough crates/s the trucks can carry: a cycle is the trip out, the trip back and the loading time. */
  haulRate() {
    const cap = this.truckCap();
    const load = this.up.loader ? cap / this.loaderRate() : cap / 3 * 0.7;
    const cycle = this.tripT() * (1 + 1 / 1.2) + load;
    return (this.up.trucks * cap) / cycle;
  }
  costMul() { return this.cfg.price / 10; }
  cost(kind) {
    if (this.up[kind] >= MAXLV[kind]) return null;
    const [base, g] = COST[kind];
    return Math.round((base * Math.pow(g, this.up[kind] - BASE[kind]) * this.costMul()) / 5) * 5;
  }
  canBuy(kind) { const c = this.cost(kind); return this.state === 'play' && this.has(kind) && c !== null && this.coins >= c; }
  onTrucks() { return this.trucks.reduce((s, t) => s + t.load, 0); }
  isFull() { return this.pile >= this.pileCap(); }
  /** Every gem the quarry has collected: shipped + waiting in the pile + loaded on trucks. */
  collected() { return this.shipped + this.pile + this.onTrucks(); }
  stars() {
    if (this.state !== 'won') return 0;
    // Kind rules (Batch C): stars come from COLLECTION, never from efficiency or
    // time — how long the pile sat full (overflowT) no longer grades anything.
    const extra = this.collected() - this.goal;
    return extra >= STAR_EXTRA_3 ? 3 : extra >= STAR_EXTRA_2 ? 2 : 1;
  }

  // ---- actions ----------------------------------------------------------------------------------------------------
  buy(kind) {
    if (!this.canBuy(kind)) return false;
    this.coins -= this.cost(kind);
    this.up[kind] += 1;
    if (kind === 'trucks') this._addTruck();
    return true;
  }

  /** The player taps the crate pile: up to TAP_LOAD crates go onto the truck waiting at the pad. */
  tapLoad() {
    if (this.state !== 'play') return 0;
    const f = this.front();
    if (!f) return 0;
    let n = 0;
    while (n < TAP_LOAD && this.pile > 0 && f.load < this.truckCap()) { this.pile -= 1; f.load += 1; n += 1; }
    if (n) { this.idleT = 0; this._maybeDepart(f); }
    return n;
  }

  front() {
    let best = null;
    for (const t of this.trucks) if (t.st === 'wait' && (!best || t.q < best.q)) best = t;
    return best;
  }

  // ---- time -----------------------------------------------------------------------------------------------------
  step(dt) {
    const ev = [];
    if (this.state !== 'play') return ev;
    this.t += dt;
    const cap = this.pileCap();
    // digging: when the pile is full the diggers wait (production holds, a crate is ready) and nothing is lost
    this.prodAcc += this.prodRate() * dt;
    while (this.prodAcc >= 1 && this.pile < cap) { this.pile += 1; this.prodAcc -= 1; this.produced += 1; ev.push({ type: 'dig' }); }
    if (this.prodAcc > 1) this.prodAcc = 1;
    const full = this.pile >= cap;
    if (full) { this.overflowT += dt; if (!this.wasFull) ev.push({ type: 'overflow' }); }
    this.wasFull = full;
    // the helper loads automatically
    const f = this.front();
    if (f && this.up.loader > 0 && this.pile > 0 && f.load < this.truckCap()) {
      this.autoAcc += this.loaderRate() * dt;
      while (this.autoAcc >= 1 && this.pile > 0 && f.load < this.truckCap()) { this.autoAcc -= 1; this.pile -= 1; f.load += 1; this.idleT = 0; ev.push({ type: 'load' }); }
    } else this.autoAcc = Math.min(this.autoAcc, 1);
    if (f && f.load > 0) {
      if (this.pile === 0) this.idleT += dt; else this.idleT = 0;
      this._maybeDepart(f);
      if (f.st === 'wait' && this.idleT >= 1.2) { this._depart(f); }
    }
    // trucks
    const T = this.tripT();
    for (const t of this.trucks) {
      if (t.st === 'go') {
        t.prog += dt / T;
        if (t.prog >= 1) {
          t.prog = 1;
          const pay = t.load * this.crateValue();
          this.coins += pay; this.earned += pay; this.shipped += t.load;
          ev.push({ type: 'deliver', n: t.load, pay });
          t.load = 0; t.st = 'back';
        }
      } else if (t.st === 'back') {
        t.prog -= (dt / T) * 1.2;
        if (t.prog <= 0) { t.prog = 0; t.st = 'wait'; t.q = ++this.qCounter; }
      }
    }
    this._slots();
    if (this.shipped >= this.goal) { this.state = 'won'; ev.push({ type: 'won', stars: this.stars() }); }
    return ev;
  }

  // ---- internals ------------------------------------------------------------------------------------------------
  _addTruck() { this.trucks.push({ id: this.nextId++, st: 'wait', load: 0, prog: 0, q: ++this.qCounter, slot: 0 }); }
  _maybeDepart(f) { if (f.st === 'wait' && f.load >= this.truckCap()) this._depart(f); }
  _depart(f) { f.st = 'go'; f.prog = 0; this.idleT = 0; }
  _slots() {
    const w = this.trucks.filter((t) => t.st === 'wait').sort((a, b) => a.q - b.q);
    w.forEach((t, i) => { t.slot = i; });
  }
}

export function normalizeSave(raw) {
  const s = { unlocked: 1, stars: {}, muted: false };
  if (!raw || typeof raw !== 'object') return s;
  const u = Number(raw.unlocked);
  if (Number.isFinite(u)) s.unlocked = Math.max(1, Math.min(LEVELS.length, Math.floor(u)));
  if (raw.stars && typeof raw.stars === 'object') {
    for (const [k, v] of Object.entries(raw.stars)) {
      const id = Number(k); const n = Number(v);
      if (Number.isInteger(id) && id >= 1 && id <= LEVELS.length && Number.isFinite(n)) s.stars[id] = Math.max(0, Math.min(3, Math.floor(n)));
    }
  }
  s.muted = raw.muted === true;
  for (const id of Object.keys(s.stars)) if (Number(id) >= s.unlocked && s.stars[id] > 0) s.unlocked = Math.min(LEVELS.length, Number(id) + 1);
  return s;
}

/** Records a finished level: keeps the best stars and opens the next level. */
export function recordWin(save, level, stars) {
  const s = normalizeSave(save);
  s.stars[level] = Math.max(s.stars[level] || 0, stars);
  s.unlocked = Math.max(s.unlocked, Math.min(LEVELS.length, level + 1));
  return s;
}
