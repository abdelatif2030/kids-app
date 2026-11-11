// The bakery's rules, with no drawing: the chef walks, pumpkins are picked and regrow, ovens bake, customers queue and
// pay, expansion pads are paid by standing on them, helpers carry things. Deterministic with a seed, so a robot test
// can play it from the start until the whole bakery is built.
import {
  PRICE, TIP, BOUNDS, COUNTER, OVENS, COUNTER_ZONE, CASH_ZONE, CHUTE, ZONE_R, FIELDS, PLOT, REGROW, BAKE, OVEN_IN, OVEN_OUT,
  COUNTER_CAP, PADS, CUSTOMER_KINDS, capacityOf,
} from './data.js';

const TICK = 0.13; // seconds between two items moving
const SPEED = 4.8;
const RADIUS = 0.35;
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const QUEUE = [[0, -7.5], [-1.4, -8.3], [-2.8, -8.9], [-4.2, -9.4], [-5.6, -9.8]];
const SPAWN = { x: -13, z: -10.5 };
const LEAVE = { x: 13, z: -10.5 };

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export class Bakery {
  /** `save` is a normalized save (data.js); it is changed in place (coins, unlocked, paid, served, pies). */
  constructor(save, seed = 7) {
    this.save = save;
    this.rand = rng(seed);
    this.p = { x: 0, z: 1.5, heading: Math.PI, moving: 0, kind: null, stack: 0, tick: 0 };
    this.plots = [];
    for (const f of FIELDS) {
      for (let r = 0; r < f.rows; r++) {
        for (let c = 0; c < f.cols; c++) {
          this.plots.push({ field: f.id, x: f.x + (c - (f.cols - 1) / 2) * PLOT, z: f.z + (r - (f.rows - 1) / 2) * PLOT, ripe: true, t: 0 });
        }
      }
    }
    this.ovens = OVENS.map((o) => ({ ...o, in: 0, out: 0, t: 0 }));
    this.counter = 0;
    this.cash = 0;
    this.chute = []; // pumpkins rolling down the chute: seconds left
    this.customers = [];
    this.spawnT = 1;
    this.nextId = 1;
    this.events = [];
    this.waiter = { x: 4.2, z: 0.8, kind: null, stack: 0, tick: 0, heading: 0, moving: 0, target: null };
    this.farmer = { x: -1.8, z: 10.4, kind: null, stack: 0, tick: 0, heading: 0, moving: 0, target: null };
    this.time = 0;
  }

  has(id) { return this.save.unlocked.includes(id); }
  get capacity() { return capacityOf(this.save.unlocked); }
  fieldOpen(id) { const f = FIELDS.find((x) => x.id === id); return !f.needs || this.has(f.needs); }
  ovenOpen(o) { return !o.needs || this.has(o.needs); }
  /** The next two expansions not built yet. */
  get pads() { return PADS.filter((p) => !this.has(p.id)).slice(0, 2); }
  get complete() { return this.save.unlocked.length === PADS.length; }

  step(dt, input) {
    this.events = [];
    this.time += dt;
    this._move(this.p, input, dt);
    this._chef(dt);
    this._grow(dt);
    this._bake(dt);
    this._chuteStep(dt);
    this._customers(dt);
    if (this.has('waiter')) this._waiter(dt);
    if (this.has('farmer')) this._farmer(dt);
    return this.events;
  }

  // ---- moving ----------------------------------------------------------------------------------------------------

  _solids() {
    const s = [[COUNTER.x - COUNTER.w / 2, COUNTER.z - COUNTER.d / 2, COUNTER.x + COUNTER.w / 2, COUNTER.z + COUNTER.d / 2]];
    for (const o of this.ovens) if (this.ovenOpen(o)) s.push([o.x - 1.4, o.z - 1.1, o.x + 1.4, o.z + 1.1]);
    return s;
  }

  _move(a, input, dt, speed = SPEED) {
    let { x, z } = input;
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    a.moving = Math.min(1, l);
    if (l < 0.08) { a.moving = 0; return; }
    a.heading = Math.atan2(x, z);
    a.x += x * speed * dt;
    a.z += z * speed * dt;
    a.x = Math.max(BOUNDS.x0 + RADIUS, Math.min(BOUNDS.x1 - RADIUS, a.x));
    a.z = Math.max(-5.0, Math.min(BOUNDS.z1 - RADIUS, a.z));
    for (const [x0, z0, x1, z1] of this._solids()) {
      if (a.x > x0 - RADIUS && a.x < x1 + RADIUS && a.z > z0 - RADIUS && a.z < z1 + RADIUS) {
        const push = [[a.x - (x0 - RADIUS), 'x', x0 - RADIUS], [x1 + RADIUS - a.x, 'x', x1 + RADIUS], [a.z - (z0 - RADIUS), 'z', z0 - RADIUS], [z1 + RADIUS - a.z, 'z', z1 + RADIUS]];
        push.sort((p, q) => p[0] - q[0]);
        a[push[0][1]] = push[0][2];
      }
    }
  }

  /** Walks a helper towards a point; true when it is there. */
  _walkTo(a, t, dt, speed) {
    const dx = t.x - a.x;
    const dz = t.z - a.z;
    const l = Math.hypot(dx, dz);
    if (l < 0.25) { a.moving = 0; return true; }
    this._move(a, { x: dx / l, z: dz / l }, dt, speed);
    return false;
  }

  // ---- the chef ----------------------------------------------------------------------------------------------------

  _chef(dt) {
    const p = this.p;
    p.tick -= dt;
    if (p.tick > 0) return;
    if (this._act(p, this.capacity, 'chef')) p.tick = TICK;
  }

  /** One item moves for a carrier (the chef or a helper) where it stands; true if something happened. */
  _act(a, cap, who) {
    // pick a ripe pumpkin
    if ((a.kind === null || a.kind === 'pumpkin') && a.stack < cap && who !== 'waiter') {
      const plot = this.plots.find((pl) => pl.ripe && this.fieldOpen(pl.field) && dist(pl, a) < 0.95);
      if (plot) {
        plot.ripe = false;
        plot.t = REGROW;
        a.kind = 'pumpkin';
        a.stack++;
        this.events.push({ type: 'pick', who, plot: this.plots.indexOf(plot), n: a.stack });
        if (a.stack === cap && who === 'chef') this.events.push({ type: 'full' });
        return true;
      }
    }
    if (a.kind === 'pumpkin' && a.stack > 0) {
      if (this.has('chute') && dist(a, CHUTE) < ZONE_R && this.chute.length < 24) {
        a.stack--;
        this.chute.push({ t: 1.1 });
        this.events.push({ type: 'chute', who });
        if (!a.stack) a.kind = null;
        return true;
      }
      for (const o of this.ovens) {
        if (this.ovenOpen(o) && o.in < OVEN_IN && dist(a, o.input) < ZONE_R) {
          a.stack--;
          o.in++;
          this.events.push({ type: 'drop', who, oven: o.id });
          if (!a.stack) a.kind = null;
          return true;
        }
      }
    }
    if ((a.kind === null || a.kind === 'pie') && a.stack < cap && who !== 'farmer') {
      for (const o of this.ovens) {
        if (this.ovenOpen(o) && o.out > 0 && dist(a, o.shelf) < ZONE_R) {
          o.out--;
          a.kind = 'pie';
          a.stack++;
          this.events.push({ type: 'takePie', who, oven: o.id, n: a.stack });
          return true;
        }
      }
    }
    if (a.kind === 'pie' && a.stack > 0 && this.counter < COUNTER_CAP && dist(a, COUNTER_ZONE) < COUNTER_ZONE.r) {
      a.stack--;
      this.counter++;
      this.events.push({ type: 'serve', who });
      if (!a.stack) a.kind = null;
      return true;
    }
    if (who !== 'chef') return false;
    if (this.cash > 0 && dist(a, CASH_ZONE) < CASH_ZONE.r + 0.2) {
      const n = Math.min(this.cash, Math.max(1, Math.ceil(this.cash / 6)));
      this.cash -= n;
      this.save.coins += n;
      this.events.push({ type: 'collect', n, left: this.cash });
      return true;
    }
    for (const pad of this.pads) {
      if (dist(a, pad) < 1.0 && this.save.coins > 0) {
        const paid = this.save.paid[pad.id] ?? 0;
        const n = Math.min(this.save.coins, pad.cost - paid, Math.max(1, Math.ceil(pad.cost / 18)));
        this.save.coins -= n;
        this.save.paid[pad.id] = paid + n;
        this.events.push({ type: 'pay', pad: pad.id, n, paid: paid + n, cost: pad.cost });
        if (paid + n >= pad.cost) {
          delete this.save.paid[pad.id];
          this.save.unlocked.push(pad.id);
          this.events.push({ type: 'unlock', pad: pad.id });
          if (this.complete && !this.save.complete) {
            this.save.complete = true;
            this.events.push({ type: 'complete' });
          }
        }
        return true;
      }
    }
    return false;
  }

  // ---- the world -----------------------------------------------------------------------------------------------

  _grow(dt) {
    for (const pl of this.plots) {
      if (pl.ripe) continue;
      pl.t -= dt;
      if (pl.t <= 0) { pl.ripe = true; this.events.push({ type: 'ripe', plot: this.plots.indexOf(pl) }); }
    }
  }

  _bake(dt) {
    for (const o of this.ovens) {
      if (!this.ovenOpen(o)) continue;
      if (o.in > 0 && o.out < OVEN_OUT) {
        o.t += dt;
        if (o.t >= BAKE) {
          o.t = 0;
          o.in--;
          o.out++;
          this.save.pies++;
          this.events.push({ type: 'baked', oven: o.id });
        }
      } else if (!o.in) o.t = 0;
    }
  }

  _chuteStep(dt) {
    for (const c of this.chute) c.t -= dt;
    while (this.chute.length && this.chute[0].t <= 0) {
      const target = this.ovens.filter((o) => this.ovenOpen(o) && o.in < OVEN_IN).sort((a, b) => a.in - b.in)[0];
      if (!target) { this.chute[0].t = 0.3; break; }
      this.chute.shift();
      target.in++;
      this.events.push({ type: 'chuteIn', oven: target.id });
    }
  }

  _customers(dt) {
    this.spawnT -= dt;
    const every = this.has('tables') ? 2.4 : this.has('oven2') ? 2.9 : 4;
    if (this.spawnT <= 0 && this.customers.filter((c) => c.state !== 'leave').length < QUEUE.length) {
      this.spawnT = every * (0.8 + this.rand() * 0.4);
      const want = 1 + Math.floor(this.rand() * (this.has('oven2') ? 3 : 2));
      this.customers.push({ id: this.nextId++, kind: CUSTOMER_KINDS[Math.floor(this.rand() * CUSTOMER_KINDS.length)], x: SPAWN.x, z: SPAWN.z, heading: 0, moving: 0, state: 'come', want, got: 0, tick: 0, happy: 0 });
      this.events.push({ type: 'arrive' });
    }
    const line = this.customers.filter((c) => c.state !== 'leave');
    line.forEach((c, i) => {
      const [qx, qz] = QUEUE[i];
      const there = this._walkCustomer(c, { x: qx, z: qz }, dt);
      if (i === 0 && there) {
        c.state = 'front';
        c.tick -= dt;
        if (c.tick <= 0 && this.counter > 0 && c.got < c.want) {
          this.counter--;
          c.got++;
          c.tick = 0.35;
          this.events.push({ type: 'buy', id: c.id });
        }
        if (c.got >= c.want) {
          const coins = c.want * PRICE + (this.has('tables') ? TIP : 0);
          this.cash += coins;
          this.save.served++;
          c.state = 'leave';
          c.happy = 1.5;
          this.events.push({ type: 'sold', id: c.id, coins, kind: c.kind });
        }
      } else if (c.state === 'come' && there) c.state = 'wait';
    });
    for (const c of this.customers) {
      if (c.state !== 'leave') continue;
      c.happy = Math.max(0, c.happy - dt);
      if (this._walkCustomer(c, LEAVE, dt)) c.gone = true;
    }
    this.customers = this.customers.filter((c) => !c.gone);
  }

  _walkCustomer(c, t, dt) {
    const dx = t.x - c.x;
    const dz = t.z - c.z;
    const l = Math.hypot(dx, dz);
    if (l < 0.08) { c.moving = 0; return true; }
    const s = Math.min(l, 3.2 * dt);
    c.x += (dx / l) * s;
    c.z += (dz / l) * s;
    c.heading = Math.atan2(dx, dz);
    c.moving = 1;
    return false;
  }

  // ---- helpers ------------------------------------------------------------------------------------------------------

  _helperAct(a, cap, who, dt) {
    a.tick -= dt;
    if (a.tick > 0) return;
    if (this._act(a, cap, who)) a.tick = TICK * 1.4;
  }

  _waiter(dt) {
    const w = this.waiter;
    if (!w.stack) {
      const o = this.ovens.filter((x) => this.ovenOpen(x) && x.out > 0).sort((a, b) => b.out - a.out)[0];
      w.target = o ? o.shelf : { x: 4.2, z: 0.8 };
    } else if (w.stack >= 4 || !this.ovens.some((x) => this.ovenOpen(x) && x.out > 0 && dist(w, x.shelf) < ZONE_R)) {
      w.target = { x: COUNTER_ZONE.x + 0.6, z: COUNTER_ZONE.z };
    }
    if (this._walkTo(w, w.target, dt, 3.4) || dist(w, w.target) < 0.9) this._helperAct(w, 4, 'waiter', dt);
  }

  _farmer(dt) {
    const f = this.farmer;
    const drop = this.has('chute') ? CHUTE : this.ovens[0].input;
    if (f.stack >= 4 || (f.stack > 0 && !this.plots.some((pl) => pl.ripe && this.fieldOpen(pl.field)))) {
      f.target = drop;
    } else {
      // the ripe pumpkin closest to the farmer, preferring the farthest field from the chef
      let best = null;
      let bd = 1e9;
      for (const pl of this.plots) {
        if (!pl.ripe || !this.fieldOpen(pl.field)) continue;
        const d = dist(pl, f) - Math.min(4, dist(pl, this.p)) * 0.5;
        if (d < bd) { bd = d; best = pl; }
      }
      f.target = best ? { x: best.x, z: best.z } : { x: -1.8, z: 10.4 };
    }
    if (this._walkTo(f, f.target, dt, 3.2) || dist(f, f.target) < 0.8) this._helperAct(f, 4, 'farmer', dt);
  }
}
