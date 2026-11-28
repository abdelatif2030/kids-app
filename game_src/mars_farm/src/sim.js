// Mars Farm Colony: pure game logic (no DOM, deterministic, testable).
// A 12x12 isometric grid split into 9 regions. The player plants and harvests wheat, carrots and corn, feeds goats for milk,
// runs a bakery (wheat -> bread), a dairy (milk -> cheese) and a juicer (carrots -> juice), sends drone orders for coins, and
// spends coins on homes, new regions and finally a spaceport. 16 levels with concrete tasks (levels 13-16 are the Olympus
// chapter); finishing level 16 lets the first shuttle land. Nothing is ever lost: crops wait ripe forever, goats stay
// hungry, orders never expire.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const GRID = 12;
export const MAX_LEVEL = 16;
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
// Stars (Phase 2F): 1 star for finishing the required tasks, +1 for the level's optional `bonus` task, +1 for its colony
// `milestone` task. Stars are NEVER about speed or time — only about doing more and growing the colony.
export const LEVELS = [
  { tasks: [{ k: 'harvest', item: 'wheat', n: 8 }, { k: 'have', b: 'field', n: 6 }, { k: 'deliver', n: 1 }], unlock: [], bonus: { k: 'harvest', item: 'wheat', n: 16 }, milestone: { k: 'have', b: 'field', n: 8 } },
  { tasks: [{ k: 'harvest', item: 'carrot', n: 6 }, { k: 'have', b: 'home', n: 1 }, { k: 'milk', n: 3 }], unlock: ['carrot', 'home', 'region:1'], bonus: { k: 'milk', n: 6 }, milestone: { k: 'colonists', n: 2 } },
  { tasks: [{ k: 'have', b: 'bakery', n: 1 }, { k: 'make', item: 'bread', n: 4 }, { k: 'deliver', n: 3 }], unlock: ['bakery', 'region:2'], bonus: { k: 'make', item: 'bread', n: 8 }, milestone: { k: 'goats', n: 2 } },
  { tasks: [{ k: 'harvest', item: 'corn', n: 8 }, { k: 'colonists', n: 2 }, { k: 'regions', n: 3 }], unlock: ['corn', 'region:3'], bonus: { k: 'harvest', item: 'corn', n: 16 }, milestone: { k: 'colonists', n: 4 } },
  { tasks: [{ k: 'have', b: 'dairy', n: 1 }, { k: 'make', item: 'cheese', n: 3 }, { k: 'have', b: 'pen', n: 2 }], unlock: ['dairy', 'region:4'], bonus: { k: 'make', item: 'cheese', n: 6 }, milestone: { k: 'goats', n: 3 } },
  { tasks: [{ k: 'have', b: 'juicer', n: 1 }, { k: 'make', item: 'juice', n: 4 }, { k: 'colonists', n: 4 }], unlock: ['juicer', 'region:5'], bonus: { k: 'make', item: 'juice', n: 8 }, milestone: { k: 'colonists', n: 6 } },
  { tasks: [{ k: 'deliver', n: 5 }, { k: 'have', b: 'home', n: 3 }, { k: 'earn', n: 250 }], unlock: ['region:6'], bonus: { k: 'deliver', n: 8 }, milestone: { k: 'earn', n: 400 } },
  { tasks: [{ k: 'regions', n: 5 }, { k: 'goats', n: 5 }, { k: 'make', item: 'bread', n: 8 }], unlock: ['region:7'], bonus: { k: 'make', item: 'bread', n: 12 }, milestone: { k: 'goats', n: 6 } },
  { tasks: [{ k: 'colonists', n: 8 }, { k: 'deliver', n: 6 }, { k: 'make', item: 'cheese', n: 5 }], unlock: ['region:8'], bonus: { k: 'deliver', n: 9 }, milestone: { k: 'colonists', n: 10 } },
  { tasks: [{ k: 'regions', n: 7 }, { k: 'make', item: 'juice', n: 8 }, { k: 'earn', n: 500 }], unlock: [], bonus: { k: 'make', item: 'juice', n: 12 }, milestone: { k: 'earn', n: 700 } },
  { tasks: [{ k: 'have', b: 'home', n: 5 }, { k: 'regions', n: 9 }, { k: 'earn', n: 700 }], unlock: [], bonus: { k: 'earn', n: 900 }, milestone: { k: 'colonists', n: 12 } },
  { tasks: [{ k: 'have', b: 'spaceport', n: 1 }, { k: 'colonists', n: 12 }, { k: 'deliver', n: 8 }], unlock: ['spaceport'], bonus: { k: 'deliver', n: 12 }, milestone: { k: 'colonists', n: 14 } },
  // Olympus chapter (levels 13-16): the colony moves up to Olympus Mons with the full toolkit already unlocked.
  { name: ['بوابة أوليمبوس', 'Olympus Gate'], tasks: [{ k: 'deliver', n: 10 }, { k: 'make', item: 'cheese', n: 8 }, { k: 'earn', n: 800 }], unlock: [], bonus: { k: 'make', item: 'cheese', n: 12 }, milestone: { k: 'colonists', n: 14 } },
  { name: ['مزارع أوليمبوس', 'Olympus Farms'], tasks: [{ k: 'goats', n: 8 }, { k: 'make', item: 'bread', n: 12 }, { k: 'deliver', n: 10 }], unlock: [], bonus: { k: 'harvest', item: 'corn', n: 24 }, milestone: { k: 'goats', n: 9 } },
  { name: ['مدينة أوليمبوس', 'Olympus Town'], tasks: [{ k: 'colonists', n: 14 }, { k: 'make', item: 'cheese', n: 10 }, { k: 'earn', n: 1000 }], unlock: [], bonus: { k: 'earn', n: 1300 }, milestone: { k: 'have', b: 'home', n: 8 } },
  { name: ['قمة أوليمبوس', 'Olympus Summit'], tasks: [{ k: 'deliver', n: 12 }, { k: 'colonists', n: 16 }, { k: 'earn', n: 1200 }], unlock: [], bonus: { k: 'make', item: 'juice', n: 16 }, milestone: { k: 'colonists', n: 16 } },
];

/** Per-level look (Certification Sweep A): the colony is one growing place, but every level is a new
 *  season on Mars — its own sky, dunes, planet tint and soil colours, all code-drawn. All 16 entries
 *  are distinct (pinned by a test); the renderer cycles through this table by level number. */
export const LEVEL_THEMES = [
  { name: 'Rust Dawn', sky: ['#1d1450', '#7b3a90', '#ff8f6e', '#ffc27a'], planet: '#4fa8ff', moon: '#d9c7b8', dune: ['#a8405e', '#c9505a'], open: ['#e2794b', '#da7045'], closed: ['#b5897e', '#ad8176'], pebble: '#b85a38' },
  { name: 'Teal Morning', sky: ['#0d2a4a', '#2a7a9a', '#7ad0c0', '#ffe9b0'], planet: '#6ac8ff', moon: '#e8e4da', dune: ['#7a4a5e', '#9a5a6a'], open: ['#e08a52', '#d67f4a'], closed: ['#a88a84', '#9e7f78'], pebble: '#a85a34' },
  { name: 'Violet Dusk', sky: ['#12082e', '#4a1a7a', '#a03a9a', '#ff7ab0'], planet: '#8ab8ff', moon: '#cfc4e8', dune: ['#5e2a52', '#7a3868'], open: ['#d9734a', '#cf6a42'], closed: ['#9e7f92', '#947388'], pebble: '#9e4a30' },
  { name: 'Golden Noon', sky: ['#2a2a6a', '#7a6ab0', '#ffb060', '#fff0b0'], planet: '#5ab0ff', moon: '#e8dcc0', dune: ['#b06a3a', '#c97e42'], open: ['#e8935a', '#e0864e'], closed: ['#bb9784', '#b08a76'], pebble: '#c06a34' },
  { name: 'Rose Canyon', sky: ['#3a0d2a', '#8a2a5a', '#e85a7a', '#ffb0a0'], planet: '#7ac4ff', moon: '#e8ccd4', dune: ['#8a3049', '#a83e57'], open: ['#e07a52', '#d87048'], closed: ['#b08a8c', '#a37d80'], pebble: '#a84a34' },
  { name: 'Aurora Verde', sky: ['#0a2a3a', '#1a6a6a', '#4ad0a0', '#e8ffb0'], planet: '#5ac8e8', moon: '#d8e8da', dune: ['#6a4a52', '#835862'], open: ['#dd8750', '#d47c46'], closed: ['#a3907e', '#97836f'], pebble: '#a85f36' },
  { name: 'Crimson Storm', sky: ['#2a0a12', '#7a1a2a', '#d84a3a', '#ff9a6a'], planet: '#e88a6a', moon: '#e0c8bc', dune: ['#7c2233', '#93303c'], open: ['#e07040', '#d86638'], closed: ['#a87a72', '#9c6e66'], pebble: '#96422c' },
  { name: 'Lavender Fields', sky: ['#241a4a', '#6a5ab0', '#b09ae8', '#ffe0f0'], planet: '#6ab8ff', moon: '#ddd4f0', dune: ['#7a4460', '#8f5272'], open: ['#e08256', '#d8784c'], closed: ['#ac8a96', '#a07e8a'], pebble: '#ac5a36' },
  { name: 'Amber Desert', sky: ['#331d08', '#8a5a1a', '#e89a3a', '#ffe9a8'], planet: '#ffd28a', moon: '#eadfc6', dune: ['#9c5a24', '#b06c2c'], open: ['#e89a58', '#e08e4e'], closed: ['#b59478', '#a9886a'], pebble: '#b06a30' },
  { name: 'Sapphire Night', sky: ['#060a2e', '#1a3a7a', '#4a8ad0', '#b0e0ff'], planet: '#3a9ad8', moon: '#e4ecf4', dune: ['#4a3a68', '#5d4a7d'], open: ['#cf7648', '#c66c40'], closed: ['#8f7d90', '#837184'], pebble: '#96502f' },
  { name: 'Peach Oasis', sky: ['#40203a', '#a05a7a', '#ffa88a', '#fff0d0'], planet: '#6ac0ff', moon: '#ead9d2', dune: ['#a04e52', '#b85f60'], open: ['#e68d5c', '#de8452'], closed: ['#b28e84', '#a68278'], pebble: '#b06038' },
  { name: 'Spaceport White-Gold', sky: ['#1a2440', '#5a7aa8', '#d8c88a', '#fff6d8'], planet: '#5aa8e8', moon: '#e8e6da', dune: ['#8a5a44', '#9e6c50'], open: ['#e08a54', '#d67f4a'], closed: ['#a89084', '#9c8478'], pebble: '#a85c34' },
  { name: 'Olympus Gate Gold', sky: ['#2e1a08', '#9a6a1a', '#ffc83a', '#fff2c0'], planet: '#ffb85a', moon: '#f0e6cc', dune: ['#96622a', '#ab7434'], open: ['#e2945a', '#da8a50'], closed: ['#b0906e', '#a48462'], pebble: '#b26c30' },
  { name: 'Olympus Farms Green-Gold', sky: ['#12300f', '#3f7a2a', '#a8d84a', '#f0ffc0'], planet: '#7ad0a8', moon: '#e2ecd4', dune: ['#7a5c2e', '#8c6c38'], open: ['#e09054', '#d8864a'], closed: ['#a89074', '#9c8468'], pebble: '#a86230' },
  { name: 'Olympus Town Royal', sky: ['#1d0f38', '#5a2a9a', '#c86ae8', '#ffd8ff'], planet: '#b08aff', moon: '#e6d8f2', dune: ['#6c3560', '#7f4270'], open: ['#dc7e50', '#d27446'], closed: ['#a4839c', '#98778e'], pebble: '#a05230' },
  { name: 'Olympus Summit Ice', sky: ['#0a1e33', '#33628f', '#9fd4ff', '#ffffff'], planet: '#a8dcff', moon: '#f2f6fa', dune: ['#5c6c8c', '#6d7d9e'], open: ['#e59a66', '#dd905c'], closed: ['#b09a94', '#a28c86'], pebble: '#b06a3c' },
];
export const themeForLevel = (level) => LEVEL_THEMES[(Math.max(1, level) - 1) % LEVEL_THEMES.length];

// Research tree (Phase 2F): bought with coins, gentle permanent bonuses, never required to finish any level.
// Tier 1: sprouts, ovens. Tier 2: drone (needs sprouts), bargain (needs ovens). Tier 3: welcome (needs drone), bigorders (needs bargain).
export const RESEARCH = [
  { id: 'sprouts', cost: 70, needs: [] },
  { id: 'ovens', cost: 110, needs: [] },
  { id: 'drone', cost: 160, needs: ['sprouts'] },
  { id: 'bargain', cost: 180, needs: ['ovens'] },
  { id: 'welcome', cost: 200, needs: ['drone'] },
  { id: 'bigorders', cost: 260, needs: ['bargain'] },
];
export const researchDef = (id) => RESEARCH.find((r) => r.id === id) || null;
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
    this.stars = {}; // level number -> 0..3 stars earned (never time-based)
    this.research = []; // owned research node ids
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
    // Research: keep only known node ids (old saves have none -> empty).
    this.research = Array.isArray(s.research) ? [...new Set(s.research.filter((id) => researchDef(id)))] : [];
    // Stars: clamp each entry; old saves (no stars field) get the completion star for every level already finished.
    this.stars = {};
    if (s.stars && typeof s.stars === 'object') {
      for (let l = 1; l <= MAX_LEVEL; l++) { const v = int(s.stars[l], 0, 3, 0); if (v > 0) this.stars[l] = v; }
    }
    const finished = s.won ? Math.max(this.level, 12) : this.level - 1; // pre-2F saves won at level 12
    for (let l = 1; l <= Math.min(finished, MAX_LEVEL); l++) this.stars[l] = Math.max(this.stars[l] || 0, 1);
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
      for (const o of s.orders.slice(0, this.maxOrders())) {
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
      stars: { ...this.stars },
      research: [...this.research],
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
  costOf(kind) { const d = BUILD[kind]; const base = d.cost + d.step * Math.max(0, this.count(kind) - (kind === 'pen' ? 1 : 0)); return this.hasResearch('bargain') ? Math.ceil(base * 0.85) : base; }

  // ---------- research ----------
  hasResearch(id) { return this.research.includes(id); }
  canResearch(id) {
    const def = researchDef(id);
    if (!def) return { ok: false, why: 'unknown' };
    if (this.hasResearch(id)) return { ok: false, why: 'owned' };
    if (!def.needs.every((n) => this.hasResearch(n))) return { ok: false, why: 'locked', needs: def.needs.filter((n) => !this.hasResearch(n)) };
    if (this.coins < def.cost) return { ok: false, why: 'coins', cost: def.cost };
    return { ok: true };
  }
  buyResearch(id) {
    const c = this.canResearch(id);
    if (!c.ok) return c;
    this.coins -= researchDef(id).cost;
    this.research.push(id);
    this.events.push({ type: 'research', id });
    this.fillOrders(); // the drone node may open a new order slot right away
    return { ok: true };
  }
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
  maxOrders() { return (this.level < 3 ? 2 : this.level < 7 ? 3 : 4) + (this.hasResearch('drone') ? 1 : 0); }
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
    const paid = o.reward + (this.hasResearch('bigorders') ? Math.round(o.reward * 0.25) : 0);
    this.coins += paid;
    this.lv.earn += paid;
    this.lv.deliver++;
    this.delivered++;
    this.events.push({ type: 'deliver', reward: paid, need: o.need });
    this.fillOrders();
    this._check();
    return { ok: true, reward: paid };
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
  /** The level's optional bonus task and colony milestone, with live progress (either may be null on old data). */
  bonusTask() { const t = LEVELS[this.level - 1].bonus; return t ? { ...t, v: Math.min(t.n, this.taskValue(t)), done: this.taskValue(t) >= t.n } : null; }
  milestoneTask() { const t = LEVELS[this.level - 1].milestone; return t ? { ...t, v: Math.min(t.n, this.taskValue(t)), done: this.taskValue(t) >= t.n } : null; }
  /** Stars the current level would earn if finished right now: completion + bonus + milestone. No time is ever an input. */
  currentStars() {
    const done = this.tasks().every((t) => t.done);
    if (!done && !this.levelReady) return 0;
    const b = this.bonusTask(); const m = this.milestoneTask();
    return 1 + (b && b.done ? 1 : 0) + (m && m.done ? 1 : 0);
  }
  starsFor(level) { return this.stars[level] || 0; }
  totalStars() { return Object.values(this.stars).reduce((a, b) => a + b, 0); }
  _check() {
    if (this.won || this.levelReady) return;
    if (this.tasks().every((t) => t.done)) { this.levelReady = true; this.events.push({ type: 'levelready', level: this.level }); }
  }
  /** Moves to the next level (or, after the final level, lets the shuttle land). */
  advance() {
    if (!this.levelReady) return false;
    this.levelReady = false;
    this.stars[this.level] = Math.max(this.stars[this.level] || 0, this.currentStars());
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
          b.t += dt * this.speed * (this.hasResearch('sprouts') ? 1.25 : 1);
          if (b.t >= CROPS[b.crop].time) { b.t = CROPS[b.crop].time; this.events.push({ type: 'ripe', x: b.x, y: b.y, crop: b.crop }); }
        }
      } else if (b.k === 'pen') {
        for (const g of b.goats) if (g.s === 'eat') { g.t += dt; if (g.t >= GOAT_TIME) { g.s = 'milk'; g.t = 0; this.events.push({ type: 'milkready', x: b.x, y: b.y }); } }
      } else if (b.q !== undefined && b.q > 0) {
        const good = this.goodOf(b);
        b.t += dt * (this.hasResearch('ovens') ? 1.3 : 1);
        if (b.t >= GOODS[good].time) { b.t -= GOODS[good].time; b.q--; b.out++; this.events.push({ type: 'done', x: b.x, y: b.y, good }); if (!b.q) b.t = 0; }
      }
    }
    if (this.colonists < this.capacity()) {
      this.arr += dt;
      if (this.arr >= ARRIVAL_TIME * (this.hasResearch('welcome') ? 0.7 : 1)) { this.arr = 0; this.colonists++; this.events.push({ type: 'colonist', n: this.colonists }); this._check(); }
    } else this.arr = 0;
    if (this.shuttle && !this.shuttle.done) this.shuttle.t += dt;
    this._check();
    return this.drain();
  }
  drain() { const e = this.events; this.events = []; return e; }
}

export function normalizeSave(raw) { return new Colony({ save: raw }).toSave(); }
export const isSave = (raw) => !!raw && typeof raw === 'object' && raw.v === 1;
