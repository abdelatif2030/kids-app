// «متجر الفضاء الذكي» — the rules with no drawing. A little astronaut runs a grocery store on a space station: pick
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

/** The expansions, paid by standing on their pad; the next two are shown. */
export const PADS = [
  { id: 'rack2', cost: 25, x: -5.4, z: -2.5, icon: '🧺', ar: 'رف سلال تاني', en: 'Second basket rack' },
  { id: 'bigstack', cost: 35, x: -7, z: 1.2, icon: '🎒', ar: 'تشيل سلال أكتر', en: 'Carry more baskets' },
  { id: 'robot1', cost: 55, x: 7.4, z: 6.8, icon: '🤖', ar: 'روبوت كاشير', en: 'Robot cashier' },
  { id: 'shelves2', cost: 65, x: 5.5, z: -1.6, icon: '🍎', ar: 'رفوف أكتر', en: 'More shelves' },
  { id: 'shuttle2', cost: 80, x: 0.5, z: -4.6, icon: '🚀', ar: 'مكوك تاني', en: 'Second shuttle' },
  { id: 'robot2', cost: 95, x: 9, z: -2.6, icon: '🤖', ar: 'روبوت كاشير تاني', en: 'Second robot cashier' },
  { id: 'hyper', cost: 140, x: -1, z: 4.3, icon: '⚡', ar: 'الكاشير الخارق', en: 'Hyper checkout' },
];

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
  /** `save` is a normalized save; it is changed in place. */
  constructor(save, seed = 3) {
    this.save = save;
    this.rand = rng(seed);
    this.p = { x: -4, z: 4, heading: Math.PI, moving: 0, stack: 0, tick: 0 };
    this.dispenser = 6;
    this.dispT = 0;
    this.racks = RACKS.map((r) => ({ ...r, n: 0 }));
    this.checkouts = CHECKOUTS.map((c) => ({ ...c, t: 0, cash: 0 }));
    this.shoppers = [];
    this.spawnT = 1;
    this.nextId = 1;
    this.events = [];
    this.time = 0;
  }

  has(id) { return this.save.unlocked.includes(id); }
  open(o) { return !o.needs || this.has(o.needs); }
  get capacity() { return this.has('bigstack') ? 10 : 6; }
  get pads() { return PADS.filter((p) => !this.has(p.id)).slice(0, 2); }
  get complete() { return this.save.unlocked.length === PADS.length; }

  step(dt, input = { x: 0, z: 0 }) {
    this.events = [];
    this.time += dt;
    this._move(this.p, input, dt);
    this._dispense(dt);
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
    for (const sh of SHELVES) if (this.open(sh)) s.push([sh.x - 0.7, sh.z - 0.5, sh.x + 0.7, sh.z + 0.5]);
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

  _dispense(dt) {
    this.dispT += dt;
    if (this.dispT >= DISPENSER.every && this.dispenser < DISPENSER.cap) { this.dispT = 0; this.dispenser++; this.events.push({ type: 'spawnBasket' }); }
  }

  _player(dt) {
    const p = this.p;
    p.tick -= dt;
    if (p.tick > 0) return;
    // pick hover-baskets at the dispenser
    if (dist(p, DISPENSER) < DISPENSER.r && this.dispenser > 0 && p.stack < this.capacity) {
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
          if (this.complete && !this.save.complete) { this.save.complete = true; this.events.push({ type: 'complete' }); }
        }
        return;
      }
    }
  }

  // ---- shoppers ----------------------------------------------------------------------------------------------------

  _shoppers(dt) {
    const shuttles = SHUTTLES.filter((s) => this.open(s));
    this.spawnT -= dt;
    const max = 6 + (this.has('shuttle2') ? 4 : 0) + (this.has('hyper') ? 2 : 0);
    if (this.spawnT <= 0 && this.shoppers.length < max) {
      this.spawnT = (this.has('shuttle2') ? 2.2 : 3.4) * (0.8 + this.rand() * 0.4);
      const from = shuttles[Math.floor(this.rand() * shuttles.length)];
      this.shoppers.push({ id: this.nextId++, kind: SHOPPERS[Math.floor(this.rand() * SHOPPERS.length)], x: from.x, z: from.z, home: from, state: 'toRack', basket: false, goods: 0, t: 0, heading: 0, moving: 0, target: null, lane: null, happy: 0 });
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
      } else if (s.state === 'shop') {
        s.waiting = false;
        if (!s.target || this._walk(s, s.target, dt)) {
          const shelves = SHELVES.filter((x) => this.open(x));
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
        const coins = 3 + Math.min(4, front.goods) + (this.has('shelves2') ? 1 : 0);
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

/** Save: { coins, unlocked, paid, served, complete, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const ids = new Set(PADS.map((p) => p.id));
  const unlocked = Array.isArray(s.unlocked) ? [...new Set(s.unlocked.filter((id) => ids.has(id)))] : [];
  const paid = {};
  if (s.paid && typeof s.paid === 'object') for (const p of PADS) { const v = Math.floor(Number(s.paid[p.id])); if (v > 0 && v < p.cost && !unlocked.includes(p.id)) paid[p.id] = v; }
  const n = (v) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : 0);
  return { coins: Math.min(n(s.coins), 999999), unlocked, paid, served: n(s.served), complete: s.complete === true && unlocked.length === PADS.length, muted: s.muted === true };
}
