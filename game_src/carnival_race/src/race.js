// The race simulation. Pure logic (no drawing): cars, rivals, tickets, items, hazards, bumps, places.
// Kid rules: nobody crashes out, a hit only spins the car and slows it for a moment, every car finishes.
import { RACERS, TRAITS, LAPS } from './data.js';

const TAU = Math.PI * 2;
export const ITEMS = ['rocket', 'shield', 'blast'];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// A small seeded random so a race can be replayed in tests.
export function rng(seed) {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Car {
  constructor(id, racer, isPlayer) {
    this.id = id;
    this.racer = racer;
    this.isPlayer = isPlayer;
    this.s = 0; // metres along the lap
    this.x = 0; // metres sideways (+ right)
    this.h = 0; // height above the road (jumps)
    this.vh = 0;
    this.v = 0; // forward speed m/s
    this.vx = 0; // sideways speed
    this.lap = 0;
    this.progress = 0; // total metres driven along the track (laps included)
    this.finished = false;
    this.finishTime = 0;
    this.place = 0;
    this.item = null;
    this.shield = 0;
    this.boost = 0;
    this.boostPower = 0;
    this.spin = 0; // seconds left of a spin-out
    this.safe = 0; // seconds of protection after a spin, so one ride can't catch a car again and again
    this.spinAngle = 0; // visual yaw from spins and air tricks
    this.airSpin = 0; // radians spun while airborne (tricks)
    this.drift = 0; // seconds drifting
    this.driftDir = 0;
    this.yaw = 0; // visual yaw relative to the road (drift angle)
    this.bump = 0; // visual squash after a bump
    this.collected = 0;
    // stats filled by the race
    this.maxV = 24;
    this.accel = 9;
    this.grip = 1;
    this.turbo = 1;
    // AI
    this.skill = 1;
    this.lineNoise = 0;
    this.itemTimer = 0;
  }
  get airborne() { return this.h > 0.01; }
}

export class Race {
  /**
   * @param track TrackPath
   * @param opts { racerId, upgrades {engine,grip,turbo}, easy, difficulty 0..2, seed, laps }
   */
  constructor(track, opts) {
    this.track = track;
    this.opts = opts;
    this.rand = rng(opts.seed ?? 7);
    this.laps = opts.laps ?? LAPS;
    this.time = 0;
    this.phase = 'countdown';
    this.countdown = 3.2;
    this.events = [];
    this.easy = !!opts.easy;
    const L = track.length;
    const def = track.def;

    // Rivals: the other five animals.
    const player = RACERS.find((r) => r.id === opts.racerId) ?? RACERS[0];
    const rivals = RACERS.filter((r) => r.id !== player.id);
    this.cars = [];
    const grid = [player, ...rivals];
    // The player starts at the back like in a real race; rivals spread on the grid ahead.
    const order = [5, 0, 1, 2, 3, 4]; // grid slot of each car: the player (index 0) takes the last slot
    grid.forEach((racer, i) => {
      const c = new Car(i, racer, i === 0);
      const slot = order[i];
      const row = Math.floor(slot / 2); // row 0 is the front
      const col = slot % 2;
      c.s = track.wrap(-4 - row * 6);
      c.x = col === 0 ? -track.width * 0.2 : track.width * 0.2;
      c.lap = -1; // everyone starts just behind the line; crossing it starts lap 1
      this._stats(c, i === 0 ? opts.upgrades ?? {} : {});
      if (!c.isPlayer) {
        const diff = opts.difficulty ?? 0;
        // rivals get a little faster on later tracks; easy mode keeps them gentle
        const base = [0.86, 0.9, 0.94][diff] ?? 0.9;
        c.skill = (this.easy ? base - 0.1 : base) + (i / 5) * 0.06 + (this.rand() - 0.5) * 0.04;
        c.lineNoise = (this.rand() - 0.5) * 0.5;
        c.itemTimer = 1 + this.rand() * 3;
      }
      this.cars.push(c);
    });
    this.player = this.cars[0];
    // the start line is s = 0; progress counts from there
    for (const c of this.cars) {
      c.progress = c.s > L / 2 ? c.s - L : c.s;
    }

    // Pickups: item boxes in rows of three, ticket lines.
    this.boxes = [];
    for (const f of def.items) {
      for (const k of [-1, 0, 1]) this.boxes.push({ s: f * L, x: k * def.width * 0.3, live: true, t: 0 });
    }
    this.tickets = [];
    for (const [f, side] of def.tickets) {
      for (let k = 0; k < 5; k++) this.tickets.push({ s: f * L + k * 4, x: side * def.width * 0.4, live: true, lap: 0 });
    }
    this.ramps = def.ramps.map((f) => ({ s: f * L }));
    this.hazards = def.hazards.map((h, i) => ({ ...h, s: h.at * L, phase: i * 1.7, angle: 0 }));
    this.tunnels = def.tunnels.map(([a, b]) => [a * L, b * L]);
  }

  _stats(c, up) {
    const t = TRAITS[c.racer.trait] ?? TRAITS.balanced;
    const e = up.engine ?? 0;
    const g = up.grip ?? 0;
    const tb = up.turbo ?? 0;
    c.maxV = 23 + t.speed * 1.2 + e * 0.9;
    c.accel = 8.5 + e * 0.6 + t.speed * 0.4;
    c.grip = 1 + t.grip * 0.25 + g * 0.12;
    c.turbo = 1 + t.turbo * 0.25 + tb * 0.12;
  }

  emit(type, data) { this.events.push({ type, ...data }); }

  /**
   * Advances the race by dt seconds. input: { throttle 0..1, steer -1..1, item bool, trick -1..1 } for the player.
   * Runs in fixed small steps so a slow phone drives exactly like a fast one. Events of all steps are kept.
   */
  step(dt, input) {
    this.events.length = 0;
    dt = Math.min(dt, 0.1);
    const n = Math.max(1, Math.ceil(dt / (1 / 60) - 1e-6));
    for (let i = 0; i < n; i++) this._step(dt / n, i === 0 ? input : { ...input, item: false });
  }

  _step(dt, input) {
    if (this.phase === 'countdown') {
      const before = Math.ceil(this.countdown);
      this.countdown -= dt;
      const after = Math.ceil(this.countdown);
      if (after !== before && after > 0) this.emit('count', { n: after });
      if (this.countdown <= 0) {
        this.phase = 'race';
        this.emit('go', {});
      }
      // holding the pedal at "go" gives a small start boost, like a rocket start
      this._startCharge = input.throttle > 0.5 && this.countdown < 1 ? (this._startCharge ?? 0) + dt : 0;
      return;
    }
    if (this.phase === 'done') {
      // after the finish the cars keep cruising (the player on autopilot) for the podium camera
      for (const c of this.cars) this._drive(c, dt, this._ai(c, dt));
      return;
    }
    if (this._startCharge !== undefined) {
      if (this._startCharge > 0.4) this._giveBoost(this.player, 1.0, 0.8);
      this._startCharge = undefined;
    }
    this.time += dt;
    for (const h of this.hazards) h.angle = Math.sin(this.time * (h.type === 'boat' ? 0.9 : 1.35) + h.phase);

    for (const c of this.cars) {
      let ctl;
      if (c.isPlayer && !c.finished) {
        ctl = { ...input };
        if (this.easy) {
          // easy mode: the car drives itself; the child steers, and gentle help keeps it on the road
          ctl.throttle = 1;
          const k = this.track.curvature(c.s + 6);
          ctl.steer = clamp(ctl.steer + clamp(k * 18, -0.35, 0.35) - c.x / (this.track.width * 1.2), -1, 1);
        }
      } else {
        ctl = this._ai(c, dt);
      }
      this._drive(c, dt, ctl);
      if (ctl.item && c.item) this._useItem(c);
    }
    this._bumps();
    this._pickups();
    this._hazardHits();
    this._places();
    this._respawnBoxes(dt);
  }

  _ai(c, dt) {
    const tr = this.track;
    const look = 14;
    const k = tr.curvature(c.s + look);
    // racing line: hug the inside of the next bend, with a little personal wobble
    let target = clamp(k * 60, -0.38, 0.38) * tr.width + c.lineNoise * tr.width * 0.2;
    // steer around spinning teacups and swinging hazards ahead
    for (const h of this.hazards) {
      const d = tr.wrap(h.s - c.s);
      if (d > 0 && d < 30) {
        const hx = this._hazardX(h);
        if (Math.abs(hx - target) < 3) target = hx > 0 ? hx - 4 : hx + 4;
      }
    }
    // go for an item box when empty-handed
    if (!c.item) {
      for (const b of this.boxes) {
        const d = tr.wrap(b.s - c.s);
        if (b.live && d > 5 && d < 35) { target = b.x; break; }
      }
    }
    target = clamp(target, -tr.width * 0.42, tr.width * 0.42);
    const steer = clamp((target - c.x) * 0.35 - c.vx * 0.15, -1, 1);
    // gentle rubber band so the race stays close and exciting for a small child
    const gap = c.progress - this.player.progress;
    let throttle = c.skill;
    if (gap > 40) throttle -= Math.min(0.2, (gap - 40) / 300);
    if (gap < -40) throttle += Math.min(0.12, (-gap - 40) / 300);
    // slow a touch into sharp bends
    throttle -= Math.min(0.15, Math.abs(k) * 4);
    c.itemTimer -= dt;
    let item = false;
    if (c.item && c.itemTimer <= 0) {
      item = true;
      c.itemTimer = 2 + this.rand() * 4;
    }
    return { throttle: clamp(throttle, 0.4, 1.1), steer, item, trick: 0 };
  }

  _drive(c, dt, ctl) {
    const tr = this.track;
    const W = tr.width / 2 - 1.1;
    // spin-out: the car twirls and slows, the child cannot steer for a moment
    // it keeps rolling forward so it always gets out of a ride, and is safe for a moment afterwards
    if (c.spin > 0) {
      c.spin -= dt;
      c.spinAngle += dt * 14;
      c.v = Math.max(c.v * (1 - 1.6 * dt), 7);
      ctl = { throttle: 0, steer: 0, item: false, trick: 0 };
      if (c.spin <= 0) c.safe = 2;
    }
    if (c.safe > 0) c.safe -= dt;
    if (c.boost > 0) c.boost -= dt;
    if (c.shield > 0) c.shield -= dt;
    if (c.bump > 0) c.bump = Math.max(0, c.bump - dt * 3);

    const boostV = c.boost > 0 ? 7 * c.boostPower * c.turbo : 0;
    const top = c.maxV * (c.isPlayer ? 1 : c.skill) + boostV;
    if (ctl.throttle > 0.05) {
      const a = (c.boost > 0 ? 22 : c.accel) * ctl.throttle;
      c.v += a * dt * (1 - c.v / (top + 0.01) * 0.85);
      if (c.v > top) c.v += (top - c.v) * Math.min(1, dt * 2.5);
    } else {
      c.v -= (c.v > 0 ? 6 : 0) * dt; // let go: the car rolls to a stop
    }
    c.v = Math.max(0, c.v);

    // steering and drifting (on the ground)
    const k = tr.curvature(c.s);
    if (!c.airborne) {
      const steerRate = 9 * c.grip;
      const wantVx = ctl.steer * (6 + c.v * 0.35);
      c.vx += (wantVx - c.vx) * Math.min(1, dt * steerRate * 0.5);
      // the bend pushes the car outwards; grip holds it
      c.vx -= k * c.v * c.v * 0.55 * dt / c.grip;
      // drift: steering hard into a bend at speed builds a mini-turbo
      const into = Math.sign(ctl.steer) === Math.sign(k) && Math.abs(k) > 0.006;
      if (Math.abs(ctl.steer) > 0.55 && c.v > 14 && into) {
        c.drift += dt;
        c.driftDir = Math.sign(ctl.steer);
        const tier = c.drift > 2.4 ? 3 : c.drift > 1.4 ? 2 : c.drift > 0.7 ? 1 : 0;
        if (tier > (c._tier ?? 0)) this.emit('driftTier', { car: c.id, tier });
        c._tier = tier;
      } else if (c.drift > 0) {
        const tier = c._tier ?? 0;
        if (tier > 0) {
          this._giveBoost(c, [0, 0.6, 0.9, 1.2][tier], [0, 0.5, 0.75, 1.0][tier]);
          this.emit('driftBoost', { car: c.id, tier });
        }
        c.drift = 0;
        c._tier = 0;
      }
    } else {
      // air: steering spins the car for a trick
      c.airSpin += (ctl.trick || ctl.steer) * dt * 9;
      c.spinAngle += (ctl.trick || ctl.steer) * dt * 9;
    }
    const targetYaw = c.drift > 0 ? c.driftDir * 0.45 : clamp(c.vx * 0.03, -0.25, 0.25);
    c.yaw += (targetYaw - c.yaw) * Math.min(1, dt * 8);

    c.x += c.vx * dt;
    if (c.x > W || c.x < -W) {
      // soft cushion walls: a bounce, never a crash
      c.x = clamp(c.x, -W, W);
      if (Math.abs(c.vx) > 3) {
        this.emit('wall', { car: c.id });
        c.v *= 0.92;
      }
      c.vx = -c.vx * 0.4;
      c.drift = 0;
    }

    // jumps
    if (c.airborne || c.vh > 0) {
      c.vh -= 26 * dt;
      c.h += c.vh * dt;
      if (c.h <= 0) {
        c.h = 0;
        c.vh = 0;
        const turns = Math.floor(Math.abs(c.airSpin) / (TAU * 0.8));
        c.airSpin = 0;
        c.spinAngle = 0;
        this.emit('land', { car: c.id, turns });
        if (turns > 0) {
          this._giveBoost(c, 0.8 + 0.3 * Math.min(2, turns), 0.8 + 0.2 * turns);
          this.emit('trick', { car: c.id, turns });
        }
      }
    }
    const before = c.s;
    c.s = tr.wrap(c.s + c.v * dt);
    c.progress += c.v * dt;
    for (const r of this.ramps) {
      const crossed = tr.wrap(r.s - before) < c.v * dt + 0.001 && tr.wrap(r.s - before) >= 0;
      if (crossed && !c.airborne && c.v > 8) {
        c.vh = 5 + c.v * 0.32;
        c.h = 0.02;
        c.airSpin = 0;
        this.emit('jump', { car: c.id });
      }
    }
    // laps: crossing s = 0
    if (!c.finished && c.s < before - tr.length / 2) {
      c.lap++;
      if (c.isPlayer && c.lap >= 1 && c.lap < this.laps) this.emit('lap', { lap: c.lap + 1 });
      if (c.lap >= this.laps) {
        c.finished = true;
        c.finishTime = this.time;
        if (c.isPlayer) this._finish();
      }
      if (c.isPlayer) for (const t of this.tickets) t.live = true; // tickets come back every lap
    }
    if (c.spin <= 0 && !c.airborne) c.spinAngle *= Math.max(0, 1 - dt * 10);
  }

  _giveBoost(c, power, secs) {
    c.boost = Math.max(c.boost, secs * c.turbo);
    c.boostPower = Math.max(c.boost > 0 ? c.boostPower : 0, power);
    if (c.isPlayer) this.emit('boost', { power });
  }

  _useItem(c) {
    const it = c.item;
    c.item = null;
    if (it === 'rocket') {
      this._giveBoost(c, 1.6, 2.2);
      this.emit('rocket', { car: c.id });
    } else if (it === 'shield') {
      c.shield = 7;
      this.emit('shield', { car: c.id });
    } else if (it === 'blast') {
      this.emit('blast', { car: c.id });
      for (const o of this.cars) {
        if (o === c) continue;
        const d = Math.abs(o.progress - c.progress);
        if (d < 16 && Math.abs(o.x - c.x) < 9) this._hit(o, 'blast');
      }
    }
  }

  _hit(c, why, fromX) {
    if (c.spin > 0 || c.safe > 0) return;
    if (c.shield > 0) {
      c.shield = 0;
      c.safe = 1;
      this.emit('shieldPop', { car: c.id });
      return;
    }
    // pushed away from what hit it, towards open road
    if (fromX !== undefined) c.vx += (c.x >= fromX ? 1 : -1) * 6;
    c.spin = 0.9;
    c.drift = 0;
    c.boost = 0;
    this.emit('spin', { car: c.id, why });
  }

  _bumps() {
    const cs = this.cars;
    for (let i = 0; i < cs.length; i++) {
      for (let j = i + 1; j < cs.length; j++) {
        const a = cs[i];
        const b = cs[j];
        if (a.airborne !== b.airborne) continue;
        let ds = this.track.wrap(b.s - a.s);
        if (ds > this.track.length / 2) ds -= this.track.length;
        const dx = b.x - a.x;
        const R = 2.1;
        const d2 = ds * ds + dx * dx;
        if (d2 < R * R && d2 > 1e-6) {
          // bumper cars! push apart and trade a bit of speed
          const d = Math.sqrt(d2);
          const nx = dx / d;
          const ns = ds / d;
          const push = (R - d) * 0.5;
          a.x -= nx * push;
          b.x += nx * push;
          const sideKick = 4 + Math.abs(a.v - b.v) * 0.2;
          a.vx -= nx * sideKick;
          b.vx += nx * sideKick;
          if (ns > 0.3) { a.v *= 0.97; b.v += 0.6; } else if (ns < -0.3) { b.v *= 0.97; a.v += 0.6; }
          a.bump = b.bump = 1;
          if (a.isPlayer || b.isPlayer) this.emit('bump', { a: a.id, b: b.id });
        }
      }
    }
  }

  _pickups() {
    const tr = this.track;
    for (const c of this.cars) {
      if (c.airborne && c.h > 2.5) continue;
      for (const b of this.boxes) {
        if (!b.live) continue;
        let ds = tr.wrap(b.s - c.s);
        if (ds > tr.length / 2) ds -= tr.length;
        if (Math.abs(ds) < 1.6 && Math.abs(b.x - c.x) < 1.8) {
          b.live = false;
          b.t = 3;
          if (!c.item) {
            c.item = this._rollItem(c);
            if (c.isPlayer) this.emit('item', { item: c.item });
          }
        }
      }
      if (!c.isPlayer) continue;
      for (const t of this.tickets) {
        if (!t.live) continue;
        let ds = tr.wrap(t.s - c.s);
        if (ds > tr.length / 2) ds -= tr.length;
        if (Math.abs(ds) < 1.6 && Math.abs(t.x - c.x) < 1.9) {
          t.live = false;
          c.collected++;
          this.emit('ticket', { total: c.collected });
        }
      }
    }
  }

  _rollItem(c) {
    // further back = more rockets, so everyone can catch up
    const behind = this.cars.filter((o) => o.progress > c.progress).length;
    const r = this.rand();
    if (behind >= 3) return r < 0.6 ? 'rocket' : r < 0.8 ? 'blast' : 'shield';
    if (behind === 0) return r < 0.6 ? 'shield' : r < 0.85 ? 'blast' : 'rocket';
    return ITEMS[Math.floor(r * 3) % 3];
  }

  _respawnBoxes(dt) {
    for (const b of this.boxes) {
      if (!b.live) {
        b.t -= dt;
        if (b.t <= 0) b.live = true;
      }
    }
  }

  /** Sideways position of a hazard's dangerous part right now. */
  _hazardX(h) {
    const w = this.track.width;
    if (h.type === 'teacups') return 0;
    return Math.sin(h.angle * 1.1) * w * 0.48;
  }

  /** The three teacups of a teacup ride: positions in (s, x) around its centre. */
  teacups(h) {
    const out = [];
    for (let k = 0; k < 3; k++) {
      const a = this.time * 1.1 + h.phase + (k * TAU) / 3;
      out.push({ s: h.s + Math.cos(a) * 4.5, x: Math.sin(a) * this.track.width * 0.3 });
    }
    return out;
  }

  _hazardHits() {
    const tr = this.track;
    for (const c of this.cars) {
      if (c.h > 2) continue;
      for (const h of this.hazards) {
        let ds = tr.wrap(h.s - c.s);
        if (ds > tr.length / 2) ds -= tr.length;
        if (Math.abs(ds) > 8) continue;
        if (h.type === 'teacups') {
          for (const cup of this.teacups(h)) {
            let d = tr.wrap(cup.s - c.s);
            if (d > tr.length / 2) d -= tr.length;
            if (d * d + (cup.x - c.x) ** 2 < 2.4 * 2.4) this._hit(c, 'teacup', cup.x);
          }
        } else {
          // hammer / boat swing across the road; they only touch the road near the bottom of the swing
          const low = Math.abs(h.angle) < 0.55;
          const reach = h.type === 'boat' ? 3.2 : 1.6;
          if (low && Math.abs(ds) < reach && Math.abs(this._hazardX(h) - c.x) < 2.6) this._hit(c, h.type, this._hazardX(h));
        }
      }
    }
  }

  _places() {
    const sorted = [...this.cars].sort((a, b) => {
      if (a.finished && b.finished) return a.finishTime - b.finishTime;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.progress - a.progress;
    });
    sorted.forEach((c, i) => {
      if (c.isPlayer && c.place && i + 1 < c.place && i === 0) this.emit('lead', {});
      c.place = i + 1;
    });
  }

  _finish() {
    this.phase = 'done';
    // the player's place is fixed at the line; everybody still racing finishes behind in their current order
    this._places();
    this.result = { place: this.player.place, collected: this.player.collected, time: this.time };
    this.emit('finish', this.result);
  }

  inTunnel(s) {
    for (const [a, b] of this.tunnels) if (s >= a && s <= b) return true;
    return false;
  }
}
