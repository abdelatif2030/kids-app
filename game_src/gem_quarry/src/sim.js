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
export const STAR_FLAT = 6;         // overflow seconds allowed for 3 stars
export const STAR_OK = 20;          // ... for 2 stars

const RATEFIX = (r) => Math.round(r * 1.5 * 100) / 100;
const TRIPFIX = (t) => Math.round(t * 0.7 * 10) / 10;
const T_ALL = ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader', 'polish', 'mine2'];
export const LEVELS = [
  { id: 1, goal: 30, price: 10, rate: RATEFIX(0.45), trip: TRIPFIX(5.0), coins: 0, tools: ['diggers', 'trucks'], up: {}, ar: 'المدخل', en: 'The Gate' },
  { id: 2, goal: 45, price: 11, rate: RATEFIX(0.46), trip: TRIPFIX(5.2), coins: 60, tools: ['diggers', 'trucks', 'pile'], up: {}, ar: 'التل الرملي', en: 'Sandy Hill' },
  { id: 3, goal: 60, price: 12, rate: RATEFIX(0.47), trip: TRIPFIX(5.5), coins: 80, tools: ['diggers', 'trucks', 'pile', 'truckCap'], up: {}, ar: 'الصناديق الكبيرة', en: 'Big Crates' },
  { id: 4, goal: 80, price: 13, rate: RATEFIX(0.48), trip: TRIPFIX(5.8), coins: 100, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road'], up: {}, ar: 'الطريق الطويل', en: 'Long Road' },
  { id: 5, goal: 100, price: 14, rate: RATEFIX(0.49), trip: TRIPFIX(6.0), coins: 120, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader'], up: {}, ar: 'العامل المساعد', en: 'The Helper' },
  { id: 6, goal: 130, price: 15, rate: RATEFIX(0.5), trip: TRIPFIX(6.2), coins: 150, tools: ['diggers', 'trucks', 'pile', 'truckCap', 'road', 'loader', 'polish'], up: { diggers: 2 }, ar: 'ورشة التلميع', en: 'Polish Shop' },
  { id: 7, goal: 160, price: 16, rate: RATEFIX(0.5), trip: TRIPFIX(6.4), coins: 200, tools: T_ALL, up: { diggers: 2, trucks: 2 }, ar: 'المنجم الثاني', en: 'Second Mine' },
  { id: 8, goal: 200, price: 18, rate: RATEFIX(0.52), trip: TRIPFIX(6.6), coins: 250, tools: T_ALL, up: { diggers: 3, trucks: 2, pile: 1, truckCap: 1 }, ar: 'ساعة الذروة', en: 'Rush Hour' },
  { id: 9, goal: 250, price: 20, rate: RATEFIX(0.54), trip: TRIPFIX(6.8), coins: 300, tools: T_ALL, up: { diggers: 3, trucks: 3, pile: 1, truckCap: 1, road: 1 }, ar: 'فيضان الجواهر', en: 'Gem Flood' },
  { id: 10, goal: 320, price: 22, rate: RATEFIX(0.56), trip: TRIPFIX(7.0), coins: 400, tools: T_ALL, up: { diggers: 4, trucks: 3, pile: 2, truckCap: 1, road: 1, loader: 1 }, ar: 'ملك المحجر', en: 'Quarry King' },
];
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
  stars() {
    if (this.state !== 'won') return 0;
    return this.overflowT <= STAR_FLAT ? 3 : this.overflowT <= STAR_OK ? 2 : 1;
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
