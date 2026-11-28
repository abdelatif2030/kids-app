// «متجر النيل الفضائي» Nile Space Store — the rules with no drawing. A little astronaut runs a grocery store on a
// space station above the Nile: pick
// up floating hover-baskets at the dispenser, stack them on the entrance rack, serve shoppers (astronauts and aliens)
// at the checkout, and pick up the star coins they leave. Coins build a second rack, a bigger basket stack, robot
// cashiers, more shelves, a second shuttle, and at last the hyper checkout. Deterministic with a seed.

export const BOUNDS = { x0: -9.5, x1: 9.5, z0: -8.5, z1: 8.5 };
const SPEED = 5.2;
const RADIUS = 0.35;
const TICK = 0.14;
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export const DISPENSER = { x: -6.5, z: 4.5, r: 1.4, cap: 14, every: 0.7 };
export const RACKS = [
  { id: 'rack1', x: -2.5, z: 1.5, r: 1.3, cap: 12 },
  { id: 'rack2', x: -2.5, z: -2.5, r: 1.3, cap: 12, needs: 'rack2' },
];
export const SHELVES = [
  { x: 3, z: -6.2 }, { x: 5.5, z: -6.2 }, { x: 8, z: -6.2 },
  { x: 3, z: -3.8, needs: 'shelves2' }, { x: 5.5, z: -3.8, needs: 'shelves2' }, { x: 8, z: -3.8, needs: 'shelves2' },
];
/** Checkouts: the main one needs the child standing at the till; robots and the hyper checkout serve by themselves. */
export const CHECKOUTS = [
  { id: 'main', x: 3, z: 3, till: { x: 4.6, z: 3 }, coins: { x: 3, z: 5.2 }, serve: 1.0, robot: false },
  { id: 'robot1', x: 7.4, z: 3, till: { x: 9, z: 3 }, coins: { x: 7.4, z: 5.2 }, serve: 1.5, robot: true, needs: 'robot1' },
  { id: 'robot2', x: 7.4, z: -0.4, till: { x: 9, z: -0.4 }, coins: { x: 7.4, z: 1.4 }, serve: 1.5, robot: true, needs: 'robot2' },
  { id: 'hyper', x: -1, z: 6.4, till: { x: 0.6, z: 6.4 }, coins: { x: -3, z: 7.2 }, serve: 0.45, robot: true, needs: 'hyper' },
];
export const SHUTTLES = [{ x: -7.4, z: -6.4 }, { x: 0.5, z: -7.2, needs: 'shuttle2' }];

/** The station wings, paid by standing on their pad; the next two are shown. (Ids are save-stable; only the
 *  names changed when the store became the Nile Space Store.) */
export const STATION_PADS = [
  { id: 'rack2', cost: 25, x: -5.4, z: -2.5, icon: '🧺', ar: 'جناح السلال', en: 'Basket Wing' },
  { id: 'bigstack', cost: 35, x: -7, z: 1.2, icon: '🎒', ar: 'مخزن أكبر', en: 'Bigger Store-room' },
  { id: 'robot1', cost: 55, x: 7.4, z: 6.8, icon: '🤖', ar: 'روبوت كاشير', en: 'Robot Cashier' },
  { id: 'shelves2', cost: 65, x: 5.5, z: -1.6, icon: '🌴', ar: 'قبة الحديقة', en: 'Garden Dome' },
  { id: 'shuttle2', cost: 80, x: 0.5, z: -4.6, icon: '🚀', ar: 'مكوك النيل', en: 'Nile Shuttle' },
  { id: 'robot2', cost: 95, x: 9, z: -2.6, icon: '🤖', ar: 'روبوت كاشير تاني', en: 'Second Robot Cashier' },
  { id: 'hyper', cost: 140, x: -1, z: 4.3, icon: '⚡', ar: 'كاشير البرق', en: 'Lightning Checkout' },
];

/** Chapter 2 — the Moon base: the same store machinery on grey regolith, mirrored left↔right so it feels like a
 *  different place. Baskets arrive by Earth-supply rocket; the dome grows glowing moon melons. The pad ids are
 *  NEW and appended after the station's — old saves never had them, so nothing already earned can shift. */
export const MOON_DISPENSER = { x: 6.5, z: 4.5, r: 1.4, cap: 14, every: 0.7 };
export const MOON_RACKS = [
  { id: 'moonrack1', x: 2.5, z: 1.5, r: 1.3, cap: 12 },
  { id: 'moonrack2', x: 2.5, z: -2.5, r: 1.3, cap: 12, needs: 'moon_rack' },
];
export const MOON_SHELVES = [
  { x: -3, z: -6.2 }, { x: -5.5, z: -6.2 }, { x: -8, z: -6.2 },
  { x: -3, z: -3.8, needs: 'moon_dome' }, { x: -5.5, z: -3.8, needs: 'moon_dome' }, { x: -8, z: -3.8, needs: 'moon_dome' },
];
export const MOON_CHECKOUTS = [
  { id: 'moonmain', x: -3, z: 3, till: { x: -4.6, z: 3 }, coins: { x: -3, z: 5.2 }, serve: 1.0, robot: false },
  { id: 'moonrobot', x: -7.4, z: 3, till: { x: -9, z: 3 }, coins: { x: -7.4, z: 5.2 }, serve: 1.5, robot: true, needs: 'moon_robot' },
  { id: 'moonstar', x: 1, z: 6.4, till: { x: -0.6, z: 6.4 }, coins: { x: 3, z: 7.2 }, serve: 0.45, robot: true, needs: 'moon_checkout' },
];
export const MOON_SHUTTLES = [{ x: 7.4, z: -6.4 }, { x: -0.5, z: -7.2, needs: 'moon_dome' }];
export const MOON_PADS = [
  { id: 'moon_rack', cost: 150, x: 5.4, z: -2.5, icon: '🧺', ar: 'رف قمر تاني', en: 'Second Moon Rack' },
  { id: 'moon_dome', cost: 190, x: -5.5, z: -1.6, icon: '🍈', ar: 'قبة بطيخ القمر', en: 'Moon Melon Dome' },
  { id: 'moon_robot', cost: 240, x: -7.4, z: 6.8, icon: '🤖', ar: 'روبوت قمر', en: 'Moon Robot' },
  { id: 'moon_checkout', cost: 300, x: 1, z: 4.3, icon: '⚡', ar: 'كاشير النجوم', en: 'Star Checkout' },
];

/** Every pad in the game: chapter 1 first (order and ids unchanged), chapter 2 appended. */
export const PADS = [...STATION_PADS, ...MOON_PADS];

/** The two play areas. Each is a full store layout on the same BOUNDS; `fastPad` opens the second shuttle and
 *  quicker spawns, `bonusPad` adds +1 coin a sale, `coinBonus` is the area's flat sale bonus (moon tourists pay
 *  star prices for moon melons). */
export const AREAS = {
  station: {
    id: 'station', start: { x: -4, z: 4 }, dispenser: DISPENSER, racks: RACKS, shelves: SHELVES, checkouts: CHECKOUTS, shuttles: SHUTTLES, pads: STATION_PADS,
    spawn: 3.4, spawnFast: 2.2, fastPad: 'shuttle2', maxBase: 6, maxFast: 4, maxTop: 2, topPad: 'hyper', bonusPad: 'shelves2', coinBonus: 0,
  },
  moon: {
    id: 'moon', start: { x: 4, z: 4 }, dispenser: MOON_DISPENSER, racks: MOON_RACKS, shelves: MOON_SHELVES, checkouts: MOON_CHECKOUTS, shuttles: MOON_SHUTTLES, pads: MOON_PADS,
    spawn: 2.6, spawnFast: 1.9, fastPad: 'moon_dome', maxBase: 7, maxFast: 3, maxTop: 2, topPad: 'moon_checkout', bonusPad: 'moon_dome', coinBonus: 2,
  },
};

export const padsDone = (pads, unlocked) => pads.every((p) => unlocked.includes(p.id));
/** Chapter 1 finished (all seven station wings) — this is what unlocks the trip to the Moon. */
export const stationComplete = (save) => padsDone(STATION_PADS, save.unlocked || []);

/** Stars are EARNED by service, never given: finishing the station is one, a busy station earns more. */
export function starsFor(served) { return served >= 90 ? 3 : served >= 40 ? 2 : 1; }

export const SHOPPERS = ['astro', 'alien', 'astro2', 'blob', 'alien2', 'squid'];

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export class Store {
  /** `save` is a normalized save; it is changed in place. `area` picks the chapter's layout; asking for the
   *  Moon before the station is finished is refused kindly — the store stays on the station. */
  constructor(save, seed = 3, area) {
    this.save = save;
    this.rand = rng(seed);
    this.area = (area || save.area) === 'moon' && stationComplete(save) ? 'moon' : 'station';
    this.cfg = AREAS[this.area];
    this.p = { x: this.cfg.start.x, z: this.cfg.start.z, heading: Math.PI, moving: 0, stack: 0, tick: 0 };
    this.dispenser = 6;
    this.dispT = 0;
    this.racks = this.cfg.racks.map((r) => ({ ...r, n: 0 }));
    this.checkouts = this.cfg.checkouts.map((c) => ({ ...c, t: 0, cash: 0 }));
    this.shoppers = [];
    this.spawnT = 1;
    this.rocketT = 25; // the first Nile delivery rocket
    this.nextId = 1;
    this.events = [];
    this.time = 0;
  }

  has(id) { return this.save.unlocked.includes(id); }
  open(o) { return !o.needs || this.has(o.needs); }
  get capacity() { return this.has('bigstack') ? 10 : 6; }
  get pads() { return this.cfg.pads.filter((p) => !this.has(p.id)).slice(0, 2); }
  get stationComplete() { return stationComplete(this.save); }
  get moonComplete() { return padsDone(MOON_PADS, this.save.unlocked); }
  get allComplete() { return this.stationComplete && this.moonComplete; }
  /** The CURRENT chapter's completion (chapter 1 on the station, chapter 2 on the Moon). */
  get complete() { return this.area === 'moon' ? this.moonComplete : this.stationComplete; }

  step(dt, input = { x: 0, z: 0 }) {
    this.events = [];
    this.time += dt;
    this._move(this.p, input, dt);
    this._dispense(dt);
    this._rocket(dt);
    this._player(dt);
    this._shoppers(dt);
    this._checkouts(dt);
    return this.events;
  }

  // ---- the child ---------------------------------------------------------------------------------------------------

  _solids() {
    const s = [];
    for (const c of this.checkouts) if (this.open(c)) s.push([c.x - 1.1, c.z - 0.5, c.x + 1.1, c.z + 0.5]);
    for (const r of this.racks) if (this.open(r)) s.push([r.x - 0.8, r.z - 0.35, r.x + 0.8, r.z + 0.35]);
    for (const sh of this.cfg.shelves) if (this.open(sh)) s.push([sh.x - 0.7, sh.z - 0.5, sh.x + 0.7, sh.z + 0.5]);
    return s;
  }

  _move(a, input, dt, speed = SPEED, solids = this._solids()) {
    let { x, z } = input;
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    a.moving = Math.min(1, l);
    if (l < 0.08) { a.moving = 0; return; }
    a.heading = Math.atan2(x, z);
    a.x = Math.max(BOUNDS.x0 + RADIUS, Math.min(BOUNDS.x1 - RADIUS, a.x + x * speed * dt));
    a.z = Math.max(BOUNDS.z0 + RADIUS, Math.min(BOUNDS.z1 - RADIUS, a.z + z * speed * dt));
    for (const [x0, z0, x1, z1] of solids) {
      if (a.x > x0 - RADIUS && a.x < x1 + RADIUS && a.z > z0 - RADIUS && a.z < z1 + RADIUS) {
        const push = [[a.x - (x0 - RADIUS), 'x', x0 - RADIUS], [x1 + RADIUS - a.x, 'x', x1 + RADIUS], [a.z - (z0 - RADIUS), 'z', z0 - RADIUS], [z1 + RADIUS - a.z, 'z', z1 + RADIUS]];
        push.sort((p, q) => p[0] - q[0]);
        a[push[0][1]] = push[0][2];
      }
    }
  }

  /** A delivery rocket docks every so often and tops the dispenser up with fresh baskets — from the Nile at the
   *  station, an Earth-supply rocket at the Moon base. */
  _rocket(dt) {
    this.rocketT -= dt;
    if (this.rocketT > 0) return;
    this.rocketT = 40 + this.rand() * 15;
    const from = this.cfg.shuttles.filter((s) => this.open(s))[0] || this.cfg.shuttles[0];
    const add = Math.min(3, this.cfg.dispenser.cap - this.dispenser);
    this.dispenser += add;
    this.events.push({ type: 'rocket', x: from.x, z: from.z, add });
  }

  _dispense(dt) {
    this.dispT += dt;
    if (this.dispT >= this.cfg.dispenser.every && this.dispenser < this.cfg.dispenser.cap) { this.dispT = 0; this.dispenser++; this.events.push({ type: 'spawnBasket' }); }
  }

  _player(dt) {
    const p = this.p;
    p.tick -= dt;
    if (p.tick > 0) return;
    // pick hover-baskets at the dispenser
    if (dist(p, this.cfg.dispenser) < this.cfg.dispenser.r && this.dispenser > 0 && p.stack < this.capacity) {
      this.dispenser--;
      p.stack++;
      p.tick = TICK;
      this.events.push({ type: 'pick', n: p.stack });
      if (p.stack === this.capacity) this.events.push({ type: 'full' });
      return;
    }
    // stack them on a rack
    for (const r of this.racks) {
      if (this.open(r) && p.stack > 0 && r.n < r.cap && dist(p, r) < r.r + 0.4) {
        p.stack--;
        r.n++;
        p.tick = TICK;
        this.events.push({ type: 'rack', rack: r.id });
        return;
      }
    }
    // gather star coins
    for (const c of this.checkouts) {
      if (c.cash > 0 && dist(p, c.coins) < 1.2) {
        const n = Math.min(c.cash, Math.max(1, Math.ceil(c.cash / 6)));
        c.cash -= n;
        this.save.coins += n;
        p.tick = TICK * 0.7;
        this.events.push({ type: 'collect', n, at: c.id });
        return;
      }
    }
    // pay into a pad
    for (const pad of this.pads) {
      if (dist(p, pad) < 1.0 && this.save.coins > 0) {
        const paid = this.save.paid[pad.id] ?? 0;
        const n = Math.min(this.save.coins, pad.cost - paid, Math.max(1, Math.ceil(pad.cost / 18)));
        this.save.coins -= n;
        this.save.paid[pad.id] = paid + n;
        p.tick = TICK;
        this.events.push({ type: 'pay', pad: pad.id, paid: paid + n, cost: pad.cost });
        if (paid + n >= pad.cost) {
          delete this.save.paid[pad.id];
          this.save.unlocked.push(pad.id);
          this.events.push({ type: 'unlock', pad: pad.id });
          if (this.stationComplete && !this.save.complete) { this.save.complete = true; this.events.push({ type: 'complete' }); }
          if (this.moonComplete && !this.save.moonComplete) { this.save.moonComplete = true; this.events.push({ type: 'moonComplete' }); }
        }
        return;
      }
    }
  }

  // ---- shoppers ----------------------------------------------------------------------------------------------------

  _shoppers(dt) {
    const cfg = this.cfg;
    const shuttles = cfg.shuttles.filter((s) => this.open(s));
    this.spawnT -= dt;
    const max = cfg.maxBase + (this.has(cfg.fastPad) ? cfg.maxFast : 0) + (this.has(cfg.topPad) ? cfg.maxTop : 0);
    if (this.spawnT <= 0 && this.shoppers.length < max) {
      this.spawnT = (this.has(cfg.fastPad) ? cfg.spawnFast : cfg.spawn) * (0.8 + this.rand() * 0.4);
      const from = shuttles[Math.floor(this.rand() * shuttles.length)];
      this.shoppers.push({ id: this.nextId++, kind: SHOPPERS[Math.floor(this.rand() * SHOPPERS.length)], x: from.x, z: from.z, home: from, state: 'toRack', basket: false, goods: 0, t: 0, heading: 0, moving: 0, target: null, lane: null, happy: 0, patience: 0 });
      this.events.push({ type: 'arrive', x: from.x, z: from.z });
    }
    for (const s of this.shoppers) {
      s.t -= dt;
      if (s.state === 'toRack') {
        const rack = this.racks.filter((r) => this.open(r)).sort((a, b) => b.n - a.n)[0];
        s.target = { x: rack.x - 1.2, z: rack.z + (s.id % 3 - 1) * 0.5 };
        if (this._walk(s, s.target, dt) && rack.n > 0) {
          rack.n--;
          s.basket = true;
          s.state = 'shop';
          s.t = 2.5 + this.rand() * 2;
          s.target = null;
          this.events.push({ type: 'takeBasket', id: s.id });
        } else if (dist(s, s.target) < 0.3) s.waiting = rack.n === 0;
        // nobody waits forever at an empty rack: after a while the shopper waves and heads home, kindly
        if (s.waiting) {
          s.patience += dt;
          if (s.patience >= 18) { s.state = 'leave'; s.waiting = false; this.events.push({ type: 'giveUp', id: s.id }); }
        } else s.patience = 0;
      } else if (s.state === 'shop') {
        s.waiting = false;
        if (!s.target || this._walk(s, s.target, dt)) {
          const shelves = cfg.shelves.filter((x) => this.open(x));
          const sh = shelves[Math.floor(this.rand() * shelves.length)];
          s.target = { x: sh.x + (this.rand() - 0.5) * 1.2, z: sh.z + 0.9 };
          s.goods++;
        }
        if (s.t <= 0) { s.state = 'queue'; s.target = null; }
      } else if (s.state === 'queue') {
        // the shortest open queue
        if (!s.lane) {
          const lanes = this.checkouts.filter((c) => this.open(c));
          s.lane = lanes.sort((a, b) => this._queue(a).length - this._queue(b).length)[0].id;
        }
        const c = this.checkouts.find((x) => x.id === s.lane);
        const q = this._queue(c);
        const k = q.indexOf(s);
        const spot = { x: c.x - 1.4 - k * 0.9, z: c.z - 0.8 };
        this._walk(s, spot, dt);
        s.front = k === 0 && dist(s, spot) < 0.3;
      } else if (s.state === 'leave') {
        s.happy = Math.max(0, s.happy - dt);
        if (this._walk(s, s.home, dt)) s.gone = true;
      }
    }
    this.shoppers = this.shoppers.filter((s) => !s.gone);
  }

  _queue(c) { return this.shoppers.filter((s) => s.state === 'queue' && s.lane === c.id); }

  _walk(s, t, dt) {
    const dx = t.x - s.x;
    const dz = t.z - s.z;
    const l = Math.hypot(dx, dz);
    if (l < 0.15) { s.moving = 0; return true; }
    const st = Math.min(l, 2.6 * dt);
    s.x += (dx / l) * st;
    s.z += (dz / l) * st;
    s.heading = Math.atan2(dx, dz);
    s.moving = 1;
    return false;
  }

  _checkouts(dt) {
    for (const c of this.checkouts) {
      if (!this.open(c)) continue;
      const front = this._queue(c).find((s) => s.front);
      const staffed = c.robot || dist(this.p, c.till) < 1.3;
      c.busy = !!front && staffed;
      if (!front || !staffed) { c.t = 0; continue; }
      c.t += dt;
      if (c.t >= c.serve) {
        c.t = 0;
        const coins = 3 + Math.min(4, front.goods) + (this.has(this.cfg.bonusPad) ? 1 : 0) + this.cfg.coinBonus;
        c.cash += coins;
        this.save.served++;
        front.state = 'leave';
        front.happy = 1.4;
        front.lane = null;
        this.events.push({ type: 'sold', at: c.id, coins, x: c.x, z: c.z, by: c.robot ? 'robot' : 'child' });
      }
    }
  }
}

/** Save: { coins, unlocked, paid, served, complete, moonComplete, area, muted } made safe.
 *  `complete` keeps its chapter-1 meaning exactly (the station flag + all seven station wings), so an old
 *  finished save loads finished — with the Moon chapter newly available, never "incomplete again". The Moon
 *  fields default safely: area falls back to the station unless the station is finished, moonComplete is
 *  false until all four moon pads are really unlocked. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const ids = new Set(PADS.map((p) => p.id));
  const unlocked = Array.isArray(s.unlocked) ? [...new Set(s.unlocked.filter((id) => ids.has(id)))] : [];
  const paid = {};
  if (s.paid && typeof s.paid === 'object') for (const p of PADS) { const v = Math.floor(Number(s.paid[p.id])); if (v > 0 && v < p.cost && !unlocked.includes(p.id)) paid[p.id] = v; }
  const n = (v) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : 0);
  const stDone = padsDone(STATION_PADS, unlocked);
  return {
    coins: Math.min(n(s.coins), 999999),
    unlocked,
    paid,
    served: n(s.served),
    complete: s.complete === true && stDone,
    moonComplete: s.moonComplete === true && padsDone(MOON_PADS, unlocked),
    area: s.area === 'moon' && stDone ? 'moon' : 'station',
    muted: s.muted === true,
  };
}
