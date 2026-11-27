// Honey Farm with no drawing. The farmer walks (drag) around a sunny farm: standing at a beehive collects its honey jars into
// a stack on the back; standing at the packing machine drops them and turns every 4 jars into a crate; carrying crates to the
// roadside counter serves waiting customers before their patience runs out (a customer who leaves just goes, nothing is lost);
// cash piles up on the counter and is picked up by standing there. Cash buys new hives, a bigger stack, a conveyor belt that moves
// jars to the machine for you and a second machine. Goal: grow the business to the target. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const SIZE = { w: 40, h: 28 };
export const SPOTS = {
  hives: [{ x: 8, y: 6 }, { x: 14, y: 6 }, { x: 8, y: 12 }, { x: 14, y: 12 }, { x: 8, y: 18 }, { x: 14, y: 18 }],
  machine: { x: 24, y: 9 },
  machine2: { x: 24, y: 17 },
  counter: { x: 34, y: 14 },
  cash: { x: 34, y: 19 },
};
export const GOAL = 1500;
export const HIVE_COST = [0, 0, 40, 90, 180, 320];
export const BAG_COST = [30, 80, 180];
export const CONVEYOR_COST = 120;
export const MACHINE2_COST = 220;

export class Farm {
  constructor(opts = {}) {
    this.rand = rng((opts.seed ?? 3) + 13);
    this.me = { x: 20, y: 14, jars: 0, crates: 0, vx: 0, vy: 0, face: 1 };
    this.bag = 4;
    this.hives = SPOTS.hives.map((p, i) => ({ ...p, open: i < 2, jars: 0, t: 0 }));
    this.machine = { jars: 0, crates: 0, t: 0 };
    this.machine2 = { open: false, jars: 0, crates: 0, t: 0 };
    this.conveyor = false;
    this.customers = [];
    this.nextC = 3;
    this.cashPile = 0;
    this.cash = 0;
    this.earned = 0;
    this.served = 0;
    this.left = 0;
    this.time = 0;
    this.events = [];
    this.state = 'play';
  }

  get bagMax() { return this.bag; }
  hiveCost() { const n = this.hives.filter((h) => h.open).length; return n >= this.hives.length ? null : HIVE_COST[n]; }
  bagCost() { const n = (this.bag - 4) / 2; return n >= BAG_COST.length ? null : BAG_COST[n]; }
  buy(kind) {
    let c = null;
    if (kind === 'hive') c = this.hiveCost(); else if (kind === 'bag') c = this.bagCost(); else if (kind === 'conveyor') c = this.conveyor ? null : CONVEYOR_COST; else if (kind === 'machine2') c = this.machine2.open ? null : MACHINE2_COST;
    if (c === null || this.cash < c) return false;
    this.cash -= c;
    if (kind === 'hive') this.hives.find((h) => !h.open).open = true; else if (kind === 'bag') this.bag += 2; else if (kind === 'conveyor') this.conveyor = true; else this.machine2.open = true;
    this.events.push({ type: 'buy', kind });
    return true;
  }

  _near(a, b, r) { return Math.hypot(a.x - b.x, a.y - b.y) < r; }

  step(dt, input = { dx: 0, dy: 0 }) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt;
    const me = this.me;
    const len = Math.hypot(input.dx, input.dy);
    const sp = 7;
    if (len > 0.05) { me.vx = (input.dx / Math.max(1, len)) * sp; me.vy = (input.dy / Math.max(1, len)) * sp; if (Math.abs(input.dx) > 0.1) me.face = Math.sign(input.dx); } else { me.vx = 0; me.vy = 0; }
    me.x = clamp(me.x + me.vx * dt, 1, SIZE.w - 1);
    me.y = clamp(me.y + me.vy * dt, 1, SIZE.h - 1);
    // hives make jars; standing close picks them up
    for (const hv of this.hives) {
      if (!hv.open) continue;
      hv.t += dt;
      if (hv.t >= 2.2 && hv.jars < 6) { hv.t = 0; hv.jars += 1; }
      if (this._near(me, hv, 2.4) && hv.jars > 0 && me.jars < this.bag) { const n = Math.min(hv.jars, this.bag - me.jars); hv.jars -= n; me.jars += n; ev.push({ type: 'pick', n }); }
      // the conveyor belt carries jars to the machine by itself
      if (this.conveyor && hv.jars > 0 && this.time % 1.5 < dt) { hv.jars -= 1; this.machine.jars += 1; ev.push({ type: 'belt' }); }
    }
    // packing machines
    for (const m of [this.machine, this.machine2]) {
      if (m === this.machine2 && !m.open) continue;
      const pos = m === this.machine ? SPOTS.machine : SPOTS.machine2;
      if (this._near(me, pos, 2.6) && me.jars > 0) { m.jars += me.jars; ev.push({ type: 'drop', n: me.jars }); me.jars = 0; }
      if (m.jars >= 4) { m.t += dt; if (m.t >= 2.5) { m.t = 0; m.jars -= 4; m.crates += 1; ev.push({ type: 'crate' }); } }
      if (this._near(me, pos, 2.6) && m.crates > 0 && me.crates < 3) { const n = Math.min(m.crates, 3 - me.crates); m.crates -= n; me.crates += n; ev.push({ type: 'takeCrate', n }); }
    }
    // customers
    this.nextC -= dt;
    if (this.nextC <= 0 && this.customers.length < 4) { this.customers.push({ id: this.time, patience: 38, max: 38, hue: Math.floor(this.rand() * 5) }); this.nextC = 5 + this.rand() * 4; ev.push({ type: 'customer' }); }
    for (const c of this.customers) c.patience -= dt;
    const gone = this.customers.filter((c) => c.patience <= 0);
    if (gone.length) { this.left += gone.length; this.customers = this.customers.filter((c) => c.patience > 0); ev.push({ type: 'left' }); }
    if (this._near(me, SPOTS.counter, 2.8) && me.crates > 0 && this.customers.length > 0) {
      const c = this.customers.shift();
      me.crates -= 1;
      const pay = 24 + Math.round((c.patience / c.max) * 14);
      this.cashPile += pay;
      this.served += 1;
      ev.push({ type: 'sale', pay });
    }
    if (this._near(me, SPOTS.cash, 2.4) && this.cashPile > 0) { this.cash += this.cashPile; this.earned += this.cashPile; ev.push({ type: 'cash', n: this.cashPile }); this.cashPile = 0; }
    if (this.earned >= GOAL) { this.state = 'won'; ev.push({ type: 'won' }); }
    return ev;
  }

  /** The durable farm: money, goal progress and everything the player bought.
   *  Jars in flight, waiting customers and timers are one morning's work — they restart fresh. */
  snapshot() {
    return {
      cash: Math.floor(this.cash), earned: Math.floor(this.earned),
      served: Math.floor(this.served), left: Math.floor(this.left),
      bag: this.bag, hives: this.hives.map((h) => !!h.open),
      machine2: !!this.machine2.open, conveyor: !!this.conveyor,
      cashPile: Math.floor(this.cashPile),
    };
  }

  /** Restore a farm snapshot (already validated by normalizeSave). */
  applySnapshot(s) {
    if (!s) return;
    this.cash = s.cash; this.earned = s.earned; this.served = s.served; this.left = s.left;
    this.bag = s.bag; this.cashPile = s.cashPile;
    this.hives.forEach((h, i) => { h.open = !!s.hives[i]; });
    this.machine2.open = !!s.machine2; this.conveyor = !!s.conveyor;
  }
}

function validFarm(f) {
  if (!f || typeof f !== 'object') return null;
  const num = (v, max) => Math.max(0, Math.min(max, Math.floor(Number(v)) || 0));
  const hives = SPOTS.hives.map((_, i) => !!(Array.isArray(f.hives) && f.hives[i]));
  hives[0] = true; hives[1] = true; // the two starter hives are always open
  return {
    // earned is capped below GOAL: reaching the goal clears the snapshot (see _won in main.js),
    // so a restored farm must never re-trigger the win on its first step.
    cash: num(f.cash, 1e9), earned: num(f.earned, GOAL - 1), served: num(f.served, 1e6), left: num(f.left, 1e6),
    bag: [4, 6, 8, 10].includes(f.bag) ? f.bag : 4,
    hives, machine2: !!f.machine2, conveyor: !!f.conveyor, cashPile: num(f.cashPile, 1e9),
  };
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { wins: Math.max(0, Math.floor(Number(o.wins)) || 0), best: Math.max(0, Math.floor(Number(o.best)) || 0), muted: !!o.muted, farm: validFarm(o.farm) };
}
