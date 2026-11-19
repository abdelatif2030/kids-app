// Mars Farm Colony: pure game logic (no DOM, deterministic, testable).
// A 12x12 isometric grid split into 9 regions. The player plants and harvests wheat, carrots and corn, feeds goats for milk,
// runs a bakery (wheat -> bread), a dairy (milk -> cheese) and a juicer (carrots -> juice), sends drone orders for coins, and
// spends coins on homes, new regions and finally a spaceport. 12 levels with concrete tasks; finishing level 12 lets the
// first shuttle land. Nothing is ever lost: crops wait ripe forever, goats stay hungry, orders never expire.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const GRID = 12;
export const MAX_LEVEL = 12;
export const CAP = 99;
export const CROP_YIELD = 2;
export const GOAT_TIME = 14;
export const GOATS_PER_PEN = 3;
export const HOME_CAPACITY = 2;
export const ARRIVAL_TIME = 10;
export const FACTORY_QUEUE = 4;

// Regions tile the whole 12x12 map: a 6x6 centre, four side strips and four corners.
export const REGIONS = [
  { id: 0, x: 3, y: 3, w: 6, h: 6, cost: 0, level: 1 },
  { id: 1, x: 3, y: 0, w: 6, h: 3, cost: 60, level: 2 },
  { id: 2, x: 0, y: 3, w: 3, h: 6, cost: 120, level: 3 },
  { id: 3, x: 9, y: 3, w: 3, h: 6, cost: 180, level: 4 },
  { id: 4, x: 3, y: 9, w: 6, h: 3, cost: 260, level: 5 },
  { id: 5, x: 0, y: 0, w: 3, h: 3, cost: 340, level: 6 },
  { id: 6, x: 9, y: 0, w: 3, h: 3, cost: 420, level: 7 },
  { id: 7, x: 0, y: 9, w: 3, h: 3, cost: 500, level: 8 },
  { id: 8, x: 9, y: 9, w: 3, h: 3, cost: 600, level: 9 },
];
const REGION_OF = new Int8Array(GRID * GRID).fill(-1);
for (const r of REGIONS) for (let y = r.y; y < r.y + r.h; y++) for (let x = r.x; x < r.x + r.w; x++) REGION_OF[y * GRID + x] = r.id;
export const regionOf = (x, y) => (x < 0 || y < 0 || x >= GRID || y >= GRID ? -1 : REGION_OF[y * GRID + x]);

export const CROPS = {
  wheat: { time: 10, level: 1 },
  carrot: { time: 15, level: 2 },
  corn: { time: 20, level: 4 },
};
export const GOODS = {
  bread: { bld: 'bakery', need: { wheat: 2 }, time: 12 },
  cheese: { bld: 'dairy', need: { milk: 2 }, time: 16 },
  juice: { bld: 'juicer', need: { carrot: 2 }, time: 14 },
};
export const ITEMS = ['wheat', 'carrot', 'corn', 'milk', 'bread', 'cheese', 'juice'];
export const ITEM_VALUE = { wheat: 3, carrot: 4, corn: 5, milk: 6, bread: 10, cheese: 16, juice: 12 };
export const ITEM_LEVEL = { wheat: 1, carrot: 2, corn: 4, milk: 1, bread: 3, cheese: 5, juice: 6 };

export const BUILD = {
  field: { cost: 8, step: 0, level: 1, w: 1, h: 1, max: 60 },
  pen: { cost: 45, step: 30, level: 1, w: 1, h: 1, max: 6 },
  home: { cost: 80, step: 40, level: 2, w: 1, h: 1, max: 8 },
  bakery: { cost: 120, step: 0, level: 3, w: 1, h: 1, max: 1 },
  dairy: { cost: 200, step: 0, level: 5, w: 1, h: 1, max: 1 },
  juicer: { cost: 200, step: 0, level: 6, w: 1, h: 1, max: 1 },
  spaceport: { cost: 900, step: 0, level: 12, w: 2, h: 2, max: 1 },
};
export const HQ = { x: 7, y: 7, w: 2, h: 2 };
export const GOAT_COST = 50;
export const GOAT_STEP = 25;

// Tasks. Per-level counters: harvest, make, deliver, milk, earn. State counters: have (a building kind), goats, colonists, regions.
export const LEVELS = [
  { tasks: [{ k: 'harvest', item: 'wheat', n: 8 }, { k: 'have', b: 'field', n: 6 }, { k: 'deliver', n: 1 }], unlock: [] },
  { tasks: [{ k: 'harvest', item: 'carrot', n: 6 }, { k: 'have', b: 'home', n: 1 }, { k: 'milk', n: 3 }], unlock: ['carrot', 'home', 'region:1'] },
  { tasks: [{ k: 'have', b: 'bakery', n: 1 }, { k: 'make', item: 'bread', n: 4 }, { k: 'deliver', n: 3 }], unlock: ['bakery', 'region:2'] },
  { tasks: [{ k: 'harvest', item: 'corn', n: 8 }, { k: 'colonists', n: 2 }, { k: 'regions', n: 3 }], unlock: ['corn', 'region:3'] },
  { tasks: [{ k: 'have', b: 'dairy', n: 1 }, { k: 'make', item: 'cheese', n: 3 }, { k: 'have', b: 'pen', n: 2 }], unlock: ['dairy', 'region:4'] },
  { tasks: [{ k: 'have', b: 'juicer', n: 1 }, { k: 'make', item: 'juice', n: 4 }, { k: 'colonists', n: 4 }], unlock: ['juicer', 'region:5'] },
  { tasks: [{ k: 'deliver', n: 5 }, { k: 'have', b: 'home', n: 3 }, { k: 'earn', n: 250 }], unlock: ['region:6'] },
  { tasks: [{ k: 'regions', n: 5 }, { k: 'goats', n: 5 }, { k: 'make', item: 'bread', n: 8 }], unlock: ['region:7'] },
  { tasks: [{ k: 'colonists', n: 8 }, { k: 'deliver', n: 6 }, { k: 'make', item: 'cheese', n: 5 }], unlock: ['region:8'] },
  { tasks: [{ k: 'regions', n: 7 }, { k: 'make', item: 'juice', n: 8 }, { k: 'earn', n: 500 }], unlock: [] },
  { tasks: [{ k: 'have', b: 'home', n: 5 }, { k: 'regions', n: 9 }, { k: 'earn', n: 700 }], unlock: [] },
  { tasks: [{ k: 'have', b: 'spaceport', n: 1 }, { k: 'colonists', n: 12 }, { k: 'deliver', n: 8 }], unlock: ['spaceport'] },
];
export const levelBonus = (level) => 30 + 20 * level;

const num = (v, lo, hi, d) => (typeof v === 'number' && Number.isFinite(v) ? clamp(v, lo, hi) : d);
const int = (v, lo, hi, d) => Math.round(num(v, lo, hi, d));
const zeros = () => Object.fromEntries(ITEMS.map((i) => [i, 0]));
const emptyLv = () => ({ harvest: zeros(), make: zeros(), deliver: 0, milk: 0, earn: 0 });

export class Colony {
  constructor(opts = {}) {
    this.seed = int(opts.seed, 1, 1e9, 7);
    this.speed = opts.speed || 1; // young children: crops grow a little faster
    this.level = 1;
    this.coins = 20;
    this.inv = Object.fromEntries(ITEMS.map((i) => [i, 0]));
    this.inv.wheat = 2;
    this.regions = REGIONS.map((r) => r.id === 0);
    this.blds = [];
    this.grid = new Int16Array(GRID * GRID); // building id (index + 1) or 0
    this.lv = emptyLv();
    this.levelReady = false;
    this.orders = [];
    this.orderSeq = 0;
    this.colonists = 0;
    this.arr = 0;
    this.time = 0;
    this.delivered = 0;
    this.won = false;
    this.shuttle = null;
    this.events = [];
    this.nextId = 1;
    if (opts.save && opts.save.v === 1) this._load(opts.save);
    else this._fresh();
    this.fillOrders();
    this._check();
  }

  static fromSave(save, opts = {}) { return new Colony({ ...opts, save }); }

  _fresh() {
    this._place({ k: 'hq', x: HQ.x, y: HQ.y, w: 2, h: 2 });
    for (const [x, y] of [[4, 4], [5, 4], [4, 5], [5, 5]]) this._place({ k: 'field', x, y, w: 1, h: 1, crop: null, t: 0 });
    this._place({ k: 'pen', x: 7, y: 4, w: 1, h: 1, goats: [{ s: 'hungry', t: 0 }] });
  }

  _place(b) {
    b.id = this.nextId++;
    this.blds.push(b);
    for (let y = b.y; y < b.y + b.h; y++) for (let x = b.x; x < b.x + b.w; x++) this.grid[y * GRID + x] = b.id;
    return b;
  }

  // ---------- save ----------
  _load(s) {
    this.level = int(s.level, 1, MAX_LEVEL, 1);
    this.coins = int(s.coins, 0, 1e7, 20);
    for (const i of ITEMS) this.inv[i] = int(s.inv && s.inv[i], 0, CAP, i === 'wheat' ? 2 : 0);
    this.regions = REGIONS.map((r) => r.id === 0 || (Array.isArray(s.regions) && s.regions.includes(r.id)));
    this.colonists = int(s.colonists, 0, 99, 0);
    this.orderSeq = int(s.orderSeq, 0, 1e9, 0);
    this.delivered = int(s.delivered, 0, 1e7, 0);
    this.won = !!s.won;
    this.levelReady = false;
    const lv = s.lv && typeof s.lv === 'object' ? s.lv : {};
    this.lv = emptyLv();
    for (const k of ['deliver', 'milk', 'earn']) this.lv[k] = int(lv[k], 0, 1e7, 0);
    for (const k of ['harvest', 'make']) if (lv[k] && typeof lv[k] === 'object') for (const i of ITEMS) this.lv[k][i] = int(lv[k][i], 0, 1e7, 0);
    // The map: a headquarters always exists at its fixed spot, everything else is validated tile by tile.
    this._place({ k: 'hq', x: HQ.x, y: HQ.y, w: 2, h: 2 });
    const seen = {};
    for (const raw of Array.isArray(s.blds) ? s.blds : []) {
      if (!raw || typeof raw !== 'object' || !BUILD[raw.k]) continue;
      const def = BUILD[raw.k];
      const x = int(raw.x, -1, GRID, -1);
      const y = int(raw.y, -1, GRID, -1);
      seen[raw.k] = (seen[raw.k] || 0) + 1;
      if (seen[raw.k] > def.max) continue;
      if (!this._footprintFree(x, y, def.w, def.h, true)) continue;
      const b = { k: raw.k, x, y, w: def.w, h: def.h };
      if (b.k === 'field') {
        b.crop = CROPS[raw.crop] ? raw.crop : null;
        b.t = b.crop ? num(raw.t, 0, 999, 0) : 0;
      } else if (b.k === 'pen') {
        b.goats = [];
        for (const g of (Array.isArray(raw.goats) ? raw.goats : []).slice(0, GOATS_PER_PEN)) {
          const st = g && ['hungry', 'eat', 'milk'].includes(g.s) ? g.s : 'hungry';
          b.goats.push({ s: st, t: st === 'eat' ? num(g.t, 0, GOAT_TIME, 0) : 0 });
        }
        if (!b.goats.length) b.goats.push({ s: 'hungry', t: 0 });
      } else if (b.k === 'bakery' || b.k === 'dairy' || b.k === 'juicer') {
        b.q = int(raw.q, 0, FACTORY_QUEUE, 0);
        b.t = num(raw.t, 0, 99, 0);
        b.out = int(raw.out, 0, CAP, 0);
      }
      this._place(b);
    }
    // Buildings only stand on open regions: open any region that holds a building (never lose a building to a bad save).
    for (const b of this.blds) for (let y = b.y; y < b.y + b.h; y++) for (let x = b.x; x < b.x + b.w; x++) this.regions[regionOf(x, y)] = true;
    if (this.blds.length === 1) this._fresh2();
    if (Array.isArray(s.orders)) {
      for (const o of s.orders.slice(0, 4)) {
        if (!o || typeof o.need !== 'object' || !o.need) continue;
        const need = {};
        for (const i of ITEMS) { const n = int(o.need[i], 0, 20, 0); if (n > 0 && this.orderable(i)) need[i] = n; }
        if (!Object.keys(need).length) continue;
        this.orders.push({ id: this.nextId++, need, reward: int(o.reward, 1, 99999, 10) });
      }
    }
    if (this.won) this.shuttle = { t: 0, done: true };
  }

  _fresh2() { // a save that held nothing usable: give the starting outpost back
    for (const [x, y] of [[4, 4], [5, 4], [4, 5], [5, 5]]) this._place({ k: 'field', x, y, w: 1, h: 1, crop: null, t: 0 });
    this._place({ k: 'pen', x: 7, y: 4, w: 1, h: 1, goats: [{ s: 'hungry', t: 0 }] });
  }

  toSave() {
    return {
      v: 1,
      level: this.level,
      coins: Math.floor(this.coins),
      inv: { ...this.inv },
      regions: REGIONS.filter((r) => this.regions[r.id]).map((r) => r.id),
      blds: this.blds.filter((b) => b.k !== 'hq').map((b) => {
        const o = { k: b.k, x: b.x, y: b.y };
        if (b.k === 'field') { o.crop = b.crop; o.t = Math.round(b.t * 10) / 10; }
        if (b.k === 'pen') o.goats = b.goats.map((g) => ({ s: g.s, t: Math.round(g.t * 10) / 10 }));
        if (b.q !== undefined) { o.q = b.q; o.t = Math.round(b.t * 10) / 10; o.out = b.out; }
        return o;
      }),
      lv: JSON.parse(JSON.stringify(this.lv)),
      orders: this.orders.map((o) => ({ need: { ...o.need }, reward: o.reward })),
      orderSeq: this.orderSeq,
      colonists: this.colonists,
      delivered: this.delivered,
      won: this.won,
    };
  }

  // ---------- map ----------
  bldAt(x, y) { const id = x >= 0 && y >= 0 && x < GRID && y < GRID ? this.grid[y * GRID + x] : 0; return id ? this.blds.find((b) => b.id === id) || null : null; }
  count(k) { return this.blds.reduce((n, b) => n + (b.k === k ? 1 : 0), 0); }
  goatCount() { return this.blds.reduce((n, b) => n + (b.k === 'pen' ? b.goats.length : 0), 0); }
  regionsOpen() { return this.regions.filter(Boolean).length; }
  capacity() { return this.count('home') * HOME_CAPACITY; }
  _footprintFree(x, y, w, h, ignoreOpen = false) {
    if (x < 0 || y < 0 || x + w > GRID || y + h > GRID) return false;
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) {
      if (this.grid[j * GRID + i]) return false;
      if (!ignoreOpen && !this.regions[regionOf(i, j)]) return false;
    }
    return true;
  }

  // ---------- building ----------
  costOf(kind) { const d = BUILD[kind]; return d.cost + d.step * Math.max(0, this.count(kind) - (kind === 'pen' ? 1 : 0)); }
  canBuild(kind, x, y) {
    const d = BUILD[kind];
    if (!d) return { ok: false, why: 'unknown' };
    if (this.level < d.level) return { ok: false, why: 'level', level: d.level };
    if (this.count(kind) >= d.max) return { ok: false, why: 'max' };
    if (!this._footprintFree(x, y, d.w, d.h)) return { ok: false, why: 'spot' };
    if (this.coins < this.costOf(kind)) return { ok: false, why: 'coins', cost: this.costOf(kind) };
    return { ok: true };
  }
  build(kind, x, y) {
    const c = this.canBuild(kind, x, y);
    if (!c.ok) return c;
    const d = BUILD[kind];
    this.coins -= this.costOf(kind);
    const b = { k: kind, x, y, w: d.w, h: d.h };
    if (kind === 'field') { b.crop = null; b.t = 0; }
    if (kind === 'pen') b.goats = [{ s: 'hungry', t: 0 }];
    if (kind === 'bakery' || kind === 'dairy' || kind === 'juicer') { b.q = 0; b.t = 0; b.out = 0; }
    this._place(b);
    this.events.push({ type: 'build', kind, x, y });
    this._check();
    return { ok: true, b };
  }
  /** All origins where `kind` could be placed right now, ignoring coins (used to highlight the map and by the robot). */
  spots(kind) {
    const d = BUILD[kind];
    const out = [];
    for (let y = 0; y < GRID; y++) for (let x = 0; x < GRID; x++) if (this._footprintFree(x, y, d.w, d.h)) out.push({ x, y });
    return out;
  }
  buyGoat() {
    const cost = GOAT_COST + GOAT_STEP * Math.max(0, this.goatCount() - 1);
    const pen = this.blds.find((b) => b.k === 'pen' && b.goats.length < GOATS_PER_PEN);
    if (!pen) return { ok: false, why: 'pen' };
    if (this.coins < cost) return { ok: false, why: 'coins', cost };
    this.coins -= cost;
    pen.goats.push({ s: 'hungry', t: 0 });
    this.events.push({ type: 'goat', x: pen.x, y: pen.y });
    this._check();
    return { ok: true };
  }
  goatCost() { return GOAT_COST + GOAT_STEP * Math.max(0, this.goatCount() - 1); }

  unlockRegion(id) {
    const r = REGIONS[id];
    if (!r || this.regions[id]) return { ok: false, why: 'open' };
    if (this.level < r.level) return { ok: false, why: 'level', level: r.level };
    if (this.coins < r.cost) return { ok: false, why: 'coins', cost: r.cost };
    this.coins -= r.cost;
    this.regions[id] = true;
    this.events.push({ type: 'region', id });
    this._check();
    return { ok: true };
  }

  // ---------- farming ----------
  cropReady(b) { return !!b.crop && b.t >= CROPS[b.crop].time; }
  plant(b, crop) {
    if (!b || b.k !== 'field' || b.crop || !CROPS[crop] || this.level < CROPS[crop].level) return false;
    b.crop = crop; b.t = 0;
    this.events.push({ type: 'plant', x: b.x, y: b.y, crop });
    return true;
  }
  harvest(b) {
    if (!b || b.k !== 'field' || !this.cropReady(b)) return 0;
    const crop = b.crop;
    const n = Math.min(CROP_YIELD, CAP - this.inv[crop]);
    if (n <= 0) return 0;
    this.inv[crop] += n;
    this.lv.harvest[crop] = (this.lv.harvest[crop] || 0) + n;
    b.crop = null; b.t = 0;
    this.events.push({ type: 'harvest', x: b.x, y: b.y, crop, n });
    this._check();
    return n;
  }
  plantAll(crop) { let n = 0; for (const b of this.blds) if (this.plant(b, crop)) n++; return n; }
  harvestAll() { let n = 0; for (const b of this.blds) if (this.harvest(b)) n++; return n; }

  tapPen(b) {
    const r = { milk: 0, fed: 0, hungryNoFood: false, busy: false };
    for (const g of b.goats) if (g.s === 'milk') { g.s = 'hungry'; g.t = 0; r.milk++; }
    if (r.milk) {
      this.inv.milk = Math.min(CAP, this.inv.milk + r.milk);
      this.lv.milk += r.milk;
      this.events.push({ type: 'milk', x: b.x, y: b.y, n: r.milk });
    }
    for (const g of b.goats) {
      if (g.s === 'hungry') {
        const food = this.inv.wheat > 0 ? 'wheat' : this.inv.corn > 0 ? 'corn' : null;
        if (!food) { r.hungryNoFood = true; continue; }
        this.inv[food]--; g.s = 'eat'; g.t = 0; r.fed++;
      } else if (g.s === 'eat') r.busy = true;
    }
    if (r.fed) this.events.push({ type: 'feed', x: b.x, y: b.y, n: r.fed });
    this._check();
    return r;
  }

  goodOf(b) { return b.k === 'bakery' ? 'bread' : b.k === 'dairy' ? 'cheese' : b.k === 'juicer' ? 'juice' : null; }
  tapFactory(b) {
    const good = this.goodOf(b);
    const r = { out: 0, loaded: 0, missing: null, full: false };
    if (!good) return r;
    if (b.out > 0) {
      const n = Math.min(b.out, CAP - this.inv[good]);
      this.inv[good] += n; b.out -= n; r.out = n;
      this.lv.make[good] = (this.lv.make[good] || 0) + n;
      if (n) this.events.push({ type: 'made', x: b.x, y: b.y, good, n });
    }
    const need = GOODS[good].need;
    while (b.q < FACTORY_QUEUE) {
      if (!Object.entries(need).every(([i, n]) => this.inv[i] >= n)) { r.missing = Object.keys(need).find((i) => this.inv[i] < need[i]); break; }
      for (const [i, n] of Object.entries(need)) this.inv[i] -= n;
      b.q++; r.loaded++;
    }
    if (!r.loaded && b.q >= FACTORY_QUEUE) r.full = true;
    if (r.loaded) this.events.push({ type: 'load', x: b.x, y: b.y, good, n: r.loaded });
    this._check();
    return r;
  }

  // ---------- orders ----------
  maxOrders() { return this.level < 3 ? 2 : this.level < 7 ? 3 : 4; }
  fillOrders() {
    while (this.orders.length < this.maxOrders()) this.orders.push(this._makeOrder());
  }
  _makeOrder() {
    const r = rng(this.seed * 977 + this.orderSeq * 7919 + 13);
    this.orderSeq++;
    const pool = ITEMS.filter((i) => this.orderable(i));
    const kinds = clamp(1 + (this.level >= 4 && r() < 0.5 ? 1 : 0) + (this.level >= 8 ? 1 : 0), 1, 3);
    const need = {};
    for (let k = 0; k < kinds && pool.length; k++) {
      const item = pool.splice(Math.floor(r() * pool.length), 1)[0];
      const raw = ITEM_VALUE[item] <= 6;
      need[item] = clamp(Math.floor(1 + r() * (1 + this.level / 3)), 1, 4) * (raw ? 2 : 1);
    }
    let sum = 0;
    for (const [i, n] of Object.entries(need)) sum += ITEM_VALUE[i] * n;
    return { id: this.nextId++, need, reward: Math.round(sum * (1.25 + 0.02 * this.level)) };
  }
  /** An order may only ask for what the player can already make: no deadlock when a factory is not built yet. */
  orderable(item) {
    if (ITEM_LEVEL[item] > this.level) return false;
    const g = GOODS[item];
    return !g || this.count(g.bld) > 0;
  }
  canSend(o) { return Object.entries(o.need).every(([i, n]) => this.inv[i] >= n); }
  sendOrder(id) {
    const idx = this.orders.findIndex((o) => o.id === id);
    if (idx < 0) return { ok: false, why: 'gone' };
    const o = this.orders[idx];
    if (!this.canSend(o)) return { ok: false, why: 'items' };
    for (const [i, n] of Object.entries(o.need)) this.inv[i] -= n;
    this.orders.splice(idx, 1);
    this.coins += o.reward;
    this.lv.earn += o.reward;
    this.lv.deliver++;
    this.delivered++;
    this.events.push({ type: 'deliver', reward: o.reward, need: o.need });
    this.fillOrders();
    this._check();
    return { ok: true, reward: o.reward };
  }

  // ---------- levels ----------
  taskValue(t) {
    switch (t.k) {
      case 'harvest': return this.lv.harvest[t.item] || 0;
      case 'make': return this.lv.make[t.item] || 0;
      case 'deliver': return this.lv.deliver;
      case 'milk': return this.lv.milk;
      case 'earn': return this.lv.earn;
      case 'have': return this.count(t.b);
      case 'goats': return this.goatCount();
      case 'colonists': return this.colonists;
      case 'regions': return this.regionsOpen();
      default: return 0;
    }
  }
  tasks() { return LEVELS[this.level - 1].tasks.map((t) => ({ ...t, v: Math.min(t.n, this.taskValue(t)), done: this.taskValue(t) >= t.n })); }
  _check() {
    if (this.won || this.levelReady) return;
    if (this.tasks().every((t) => t.done)) { this.levelReady = true; this.events.push({ type: 'levelready', level: this.level }); }
  }
  /** Moves to the next level (or, after level 12, lets the shuttle land). */
  advance() {
    if (!this.levelReady) return false;
    this.levelReady = false;
    this.coins += levelBonus(this.level);
    if (this.level >= MAX_LEVEL) {
      this.won = true;
      this.shuttle = { t: 0, done: false };
      this.events.push({ type: 'shuttle' });
      return true;
    }
    this.level++;
    this.lv = emptyLv();
    this.fillOrders();
    this.events.push({ type: 'level', level: this.level });
    this._check();
    return true;
  }

  // ---------- time ----------
  step(dt) {
    this.time += dt;
    for (const b of this.blds) {
      if (b.k === 'field') {
        if (b.crop && b.t < CROPS[b.crop].time) {
          b.t += dt * this.speed;
          if (b.t >= CROPS[b.crop].time) { b.t = CROPS[b.crop].time; this.events.push({ type: 'ripe', x: b.x, y: b.y, crop: b.crop }); }
        }
      } else if (b.k === 'pen') {
        for (const g of b.goats) if (g.s === 'eat') { g.t += dt; if (g.t >= GOAT_TIME) { g.s = 'milk'; g.t = 0; this.events.push({ type: 'milkready', x: b.x, y: b.y }); } }
      } else if (b.q !== undefined && b.q > 0) {
        const good = this.goodOf(b);
        b.t += dt;
        if (b.t >= GOODS[good].time) { b.t -= GOODS[good].time; b.q--; b.out++; this.events.push({ type: 'done', x: b.x, y: b.y, good }); if (!b.q) b.t = 0; }
      }
    }
    if (this.colonists < this.capacity()) {
      this.arr += dt;
      if (this.arr >= ARRIVAL_TIME) { this.arr = 0; this.colonists++; this.events.push({ type: 'colonist', n: this.colonists }); this._check(); }
    } else this.arr = 0;
    if (this.shuttle && !this.shuttle.done) this.shuttle.t += dt;
    this._check();
    return this.drain();
  }
  drain() { const e = this.events; this.events = []; return e; }
}

export function normalizeSave(raw) { return new Colony({ save: raw }).toSave(); }
export const isSave = (raw) => !!raw && typeof raw === 'object' && raw.v === 1;
