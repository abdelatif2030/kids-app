// The farm rules, pure logic (no drawing): a combine harvester drives where the child steers, cuts the crop under
// its cutter row by row, fills the trailer, unloads at the grate by the barn for coins; rocks give a gentle bump,
// animals step out of the way and can be guided into their pen. Relaxing: there is no timer and nothing to lose.
import { CELL, CROPS, ANIMALS, barnSpot, statOf } from './data.js';

/** Around each rock a small rocky patch is left as it is: it never has to be cut. */
export const ROCK_PATCH = 1.9;
export const DONE_AT = 0.95;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angDiff = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a));

export class Farm {
  /** level: one of LEVELS; up: the upgrade levels { cutter, engine, trailer, barn } */
  constructor(level, up = {}) {
    this.level = level;
    this.events = [];
    this.time = 0;
    this.W = level.w;
    this.D = level.d;
    this.cutter = statOf('cutter', up.cutter ?? 0);
    this.maxSpeed = statOf('engine', up.engine ?? 0);
    this.capacity = statOf('trailer', up.trailer ?? 0);
    this.priceBonus = 1 + statOf('barn', up.barn ?? 0) / 100;
    const spot = barnSpot(level);
    this.barn = spot.barn;
    this.pad = spot.pad;
    this.rocks = level.rocks.map(([x, z]) => ({ x, z, r: 0.75 }));
    this.pen = level.pen ? { x: level.pen[0], z: level.pen[1], w: level.pen[2], d: level.pen[3] } : null;
    this.animals = level.animals.map(([kind, x, z], i) => ({ kind, x, z, r: ANIMALS[kind].r, vx: 0, vz: 0, wander: i * 1.7, penned: false, heading: 0 }));

    // crop cells
    this.cells = [];
    for (const [fx, fz, fw, fd, crop] of level.fields) {
      for (let i = 0; i < fw / CELL; i++) {
        for (let j = 0; j < fd / CELL; j++) {
          const x = fx + (i + 0.5) * CELL;
          const z = fz + (j + 0.5) * CELL;
          // the ground right around a rock is left alone (not needed to finish)
          const nearRock = this.rocks.some((r) => (r.x - x) ** 2 + (r.z - z) ** 2 < ROCK_PATCH * ROCK_PATCH);
          if (nearRock) continue;
          this.cells.push({ x, z, crop, cut: false });
        }
      }
    }
    this.total = this.cells.length;
    this.cutCount = 0;
    // a coarse grid of cells for quick lookups
    this.grid = new Map();
    this.cells.forEach((c, idx) => {
      const k = `${Math.floor(c.x / 2)},${Math.floor(c.z / 2)}`;
      if (!this.grid.has(k)) this.grid.set(k, []);
      this.grid.get(k).push(idx);
    });

    this.load = 0;
    this.loadMix = { wheat: 0, corn: 0, sunflower: 0 };
    this.coins = 0;
    this.sold = { flour: 0, hay: 0, corn: 0, seeds: 0 };
    this.bumps = 0;
    this.full = false;
    this.done = false;
    this.unloading = false;
    // the tractor starts on the grate, facing the fields
    this.t = { x: this.pad.x, z: this.pad.z - 2.5, heading: -Math.PI / 2, speed: 0, bump: 0 };
  }

  emit(type, data = {}) { this.events.push({ type, ...data }); }

  get progress() { return this.total ? this.cutCount / this.total : 1; }
  get penned() { return this.animals.filter((a) => a.penned).length; }

  /** input: { x, z } wanted direction on the ground (length 0..1 = how much gas) */
  step(dt, input) {
    this.events.length = 0;
    dt = Math.min(dt, 0.1);
    const n = Math.max(1, Math.ceil(dt / (1 / 60) - 1e-6));
    for (let i = 0; i < n; i++) this._step(dt / n, input);
  }

  _step(dt, input) {
    if (this.done) return;
    this.time += dt;
    const t = this.t;
    const mag = clamp(Math.hypot(input.x, input.z), 0, 1);
    if (t.bump > 0) t.bump -= dt;
    // steer towards the wanted direction, then drive
    if (mag > 0.15 && t.bump <= 0) {
      const want = Math.atan2(input.z, input.x);
      const d = angDiff(t.heading, want);
      t.heading += clamp(d, -2.6 * dt, 2.6 * dt);
      // slow down for sharp turns so the harvester never spins on the spot too fast
      const target = this.maxSpeed * mag * (Math.abs(d) > 1.6 ? 0.35 : 1);
      t.speed += (target - t.speed) * Math.min(1, dt * 3);
    } else t.speed += (0 - t.speed) * Math.min(1, dt * 4);
    const fx = Math.cos(t.heading);
    const fz = Math.sin(t.heading);
    let nx = t.x + fx * t.speed * dt;
    let nz = t.z + fz * t.speed * dt;
    // the fence
    const m = 1.4;
    nx = clamp(nx, -this.W / 2 + m, this.W / 2 - m);
    nz = clamp(nz, -this.D / 2 + m, this.D / 2 - m);
    // the barn is solid
    const b = this.barn;
    if (Math.abs(nx - b.x) < b.w / 2 + 1.2 && Math.abs(nz - b.z) < b.d / 2 + 1.2) { nx = t.x; nz = t.z; t.speed *= 0.5; }
    // rocks: a soft bump back, never damage
    // only the tractor's body bumps (a circle around its front half), so the wide cutter can sweep past a rock
    for (const r of this.rocks) {
      const d = Math.hypot(nx + fx * 1.0 - r.x, nz + fz * 1.0 - r.z);
      if (d < r.r + 0.75 && t.bump <= 0) {
        t.bump = 0.45;
        t.speed = -1.5;
        this.bumps++;
        this.emit('rock', { x: r.x, z: r.z });
        nx = t.x;
        nz = t.z;
      }
    }
    t.x = nx;
    t.z = nz;

    this._cut(dt);
    this._animals(dt);
    this._unload(dt);
  }

  /** The cutter at the front: a strip `cutter` metres wide, 0.8 m deep, 1.4-2.2 m ahead of the tractor's centre. */
  cutterBox() {
    const t = this.t;
    return { cx: t.x + Math.cos(t.heading) * 1.8, cz: t.z + Math.sin(t.heading) * 1.8, half: this.cutter / 2, depth: 0.45, heading: t.heading };
  }

  _cut() {
    if (this.load >= this.capacity - 1e-6) return;
    const t = this.t;
    if (Math.abs(t.speed) < 0.2) return;
    const box = this.cutterBox();
    const c = Math.cos(box.heading);
    const s = Math.sin(box.heading);
    const reach = box.half + 1;
    const cut = [];
    for (let gx = Math.floor((box.cx - reach) / 2); gx <= Math.floor((box.cx + reach) / 2); gx++) {
      for (let gz = Math.floor((box.cz - reach) / 2); gz <= Math.floor((box.cz + reach) / 2); gz++) {
        const list = this.grid.get(`${gx},${gz}`);
        if (!list) continue;
        for (const idx of list) {
          const cell = this.cells[idx];
          if (cell.cut) continue;
          const dx = cell.x - box.cx;
          const dz = cell.z - box.cz;
          const along = dx * c + dz * s; // forward
          const side = -dx * s + dz * c; // sideways
          if (Math.abs(along) <= box.depth && Math.abs(side) <= box.half) {
            if (this.load >= this.capacity) break;
            cell.cut = true;
            this.cutCount++;
            const y = CROPS[cell.crop].yield;
            this.load = Math.min(this.capacity, this.load + y);
            this.loadMix[cell.crop] += y;
            cut.push(idx);
          }
        }
      }
    }
    if (cut.length) this.emit('cut', { cells: cut });
    if (this.load >= this.capacity - 1e-6 && !this.full) {
      this.full = true;
      this.emit('full');
    }
  }

  _animals(dt) {
    const t = this.t;
    for (const a of this.animals) {
      if (a.penned) {
        // wander gently inside the pen
        a.wander += dt;
        const p = this.pen;
        a.x = clamp(a.x + Math.cos(a.wander * 0.6) * dt * 0.3, p.x + 0.8, p.x + p.w - 0.8);
        a.z = clamp(a.z + Math.sin(a.wander * 0.5) * dt * 0.3, p.z + 0.8, p.z + p.d - 0.8);
        continue;
      }
      // step away from the tractor (that's how they are herded), otherwise graze and stroll
      const dx = a.x - t.x;
      const dz = a.z - t.z;
      const d = Math.hypot(dx, dz) || 1;
      let vx = 0;
      let vz = 0;
      if (d < 4.5) {
        const push = (4.5 - d) / 4.5;
        vx = (dx / d) * 3.2 * push;
        vz = (dz / d) * 3.2 * push;
      } else {
        a.wander += dt;
        vx = Math.cos(a.wander * 0.4) * 0.25;
        vz = Math.sin(a.wander * 0.33) * 0.25;
      }
      a.vx += (vx - a.vx) * Math.min(1, dt * 4);
      a.vz += (vz - a.vz) * Math.min(1, dt * 4);
      a.x = clamp(a.x + a.vx * dt, -this.W / 2 + 1, this.W / 2 - 1);
      a.z = clamp(a.z + a.vz * dt, -this.D / 2 + 1, this.D / 2 - 1);
      if (Math.hypot(a.vx, a.vz) > 0.05) a.heading = Math.atan2(a.vz, a.vx);
      // inside the pen = home
      const p = this.pen;
      if (p && a.x > p.x && a.x < p.x + p.w && a.z > p.z && a.z < p.z + p.d) {
        a.penned = true;
        this.emit('penned', { kind: a.kind, n: this.penned, of: this.animals.length });
      }
    }
  }

  _unload(dt) {
    const t = this.t;
    const p = this.pad;
    // the trailer hangs behind the tractor; unloading starts when either is over the grate
    const tx = t.x - Math.cos(t.heading) * 3;
    const tz = t.z - Math.sin(t.heading) * 3;
    const over = (x, z) => Math.abs(x - p.x) < p.w / 2 + 0.6 && Math.abs(z - p.z) < p.d / 2 + 0.6;
    const onPad = over(t.x, t.z) || over(tx, tz);
    if (onPad && this.load > 0) {
      if (!this.unloading) {
        this.unloading = true;
        this.emit('unloadStart');
      }
      const amount = Math.min(this.load, 160 * dt);
      const total = this.load;
      let earned = 0;
      for (const crop of Object.keys(this.loadMix)) {
        const part = (this.loadMix[crop] / total) * amount;
        this.loadMix[crop] -= part;
        earned += part * CROPS[crop].price * this.priceBonus;
        const prod = CROPS[crop].product;
        if (prod === 'flour') { this.sold.flour += part * 0.5; this.sold.hay += part * 0.5; } else this.sold[prod] += part;
      }
      this.load -= amount;
      this._earned = (this._earned ?? 0) + earned;
      const whole = Math.floor(this._earned);
      if (whole > 0) {
        this._earned -= whole;
        this.coins += whole;
        this.emit('coins', { n: whole, total: this.coins });
      }
      if (this.load <= 1e-6) {
        this.load = 0;
        for (const k of Object.keys(this.loadMix)) this.loadMix[k] = 0;
        this.full = false;
        this.unloading = false;
        this.emit('unloaded');
      }
    } else if (this.unloading) {
      this.unloading = false;
    }
    // the farm is finished when (almost) every crop is in and the trailer is empty
    if (!this.done && this.progress >= DONE_AT && this.load === 0) {
      this.done = true;
      const herdAll = this.animals.length === 0 || this.penned === this.animals.length;
      const stars = 1 + (herdAll ? 1 : 0) + (this.bumps <= 2 ? 1 : 0);
      this.result = { stars, coins: this.coins, bumps: this.bumps, penned: this.penned, animals: this.animals.length, time: this.time };
      this.emit('done', this.result);
    }
  }
}
