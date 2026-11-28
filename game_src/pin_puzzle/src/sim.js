// «اسحب الدبوس» — Pull the Pin: the rules and the physics, with no drawing (so node can test it).
// A wooden cabinet 16 x 10 units. Up to three towers (left, centre, right) hold candy balls on golden pins, one pin per chamber.
// Pull a pin out and the balls above it fall. The centre tower drops straight into the jar. The left and right towers sit above
// either lava (falling in loses the candies), a wooden ramp that rolls the candies into the jar, or a "trap" ramp: a pin that
// holds the ramp up, so pulling the ramp pin sends the candies into the lava. Fill the jar to the goal.
// Tiny circle physics: gravity, segments, ball-ball, damping and sleeping. Deterministic (seeded colours only).
import { clamp, rng } from '../../cozy_kit/ui.js';
import { SPECS } from './levels.js';

export const W = 16;
export const H = 10;
export const R = 0.25;
export const TH = 0.07; // half thickness of walls and pins
export const LEVELS = SPECS.length;
export const COLORS = 6;
const G = 20;
const SUB = 4;
const PIN_TIME = 0.32;
const LAVA_Y = 9.3;
const JAR = { x1: 6.0, x2: 10.0, top: 8.0 };
export { JAR };

export const TOWERS = {
  L: { x0: 0.95, x1: 3.95, floors: [4.8, 2.9, 1.0], side: 'l' },
  C: { x0: 6.5, x1: 9.5, floors: [6.2, 4.3, 2.4], side: 'c' },
  R: { x0: 12.05, x1: 15.05, floors: [4.8, 2.9, 1.0], side: 'r' },
};
export const CHAMBER_H = 1.55;

/** How far a pin has slid out (0..1 eased). */
export const slide = (p) => { const t = clamp(p.t, 0, 1); return 1 - (1 - t) * (1 - t); };

/** Build the geometry, pins and balls (before they settle). */
export function layout(level, seed = 5) {
  const spec = SPECS[clamp(level, 0, SPECS.length - 1)];
  const r = rng(seed * 131 + level * 17 + 3);
  const segs = [];
  const pins = [];
  const balls = [];
  const towers = [];
  let pid = 1;
  const wall = (x1, y1, x2, y2, k = 'wood') => segs.push({ x1, y1, x2, y2, k });
  wall(0, -3, 0, H, 'frame'); wall(W, -3, W, H, 'frame'); wall(0, H, W, H, 'floor');
  // the jar and its funnels
  wall(4.6, 7.2, JAR.x1, JAR.top, 'ramp'); wall(11.4, 7.2, JAR.x2, JAR.top, 'ramp');
  wall(JAR.x1, JAR.top, JAR.x1, H, 'jar'); wall(JAR.x2, JAR.top, JAR.x2, H, 'jar');

  spec.t.forEach((tw, ti) => {
    const T = TOWERS[tw.s];
    const dest = tw.s === 'C' ? 'jar' : tw.d || 'jar';
    const n = tw.c.length;
    const floorOf = (i) => T.floors[n - 1 - i]; // chambers are listed from the top
    const topY = floorOf(0) - CHAMBER_H;
    const info = { slot: tw.s, dest, x0: T.x0, x1: T.x1, topY, floor: floorOf(n - 1), pinIds: [], trapId: 0, ti };
    towers.push(info);
    wall(T.x0, topY, T.x0, floorOf(n - 1) + TH, 'wood');
    wall(T.x1, topY, T.x1, floorOf(n - 1) + TH, 'wood');
    // chamber pins, anchored on the outer side (left tower: left; right tower: right; centre: alternating)
    tw.c.forEach((cnt, i) => {
      const y = floorOf(i);
      const side = T.side === 'c' ? ((i + (tw.flip ? 1 : 0)) % 2 === 0 ? 'l' : 'r') : T.side;
      const pin = side === 'l'
        ? { ax: T.x0, ay: y, bx: T.x1 + 0.04, by: y }
        : { ax: T.x1, ay: y, bx: T.x0 - 0.04, by: y };
      Object.assign(pin, { id: pid++, t: 0, pulled: false, tower: ti, role: dest === 'lava' ? 'lava' : 'jar', side, kind: 'floor', chamber: i });
      pins.push(pin);
      info.pinIds.push(pin.id);
      // the candies of this chamber, in rows from the floor up
      let left = cnt;
      for (let row = 0; left > 0; row++) {
        const per = row % 2 === 0 ? 5 : 4;
        const k = Math.min(per, left);
        const x0 = T.x0 + 0.5 + (row % 2 === 0 ? 0 : 0.26) + (per - k) * 0.26;
        for (let j = 0; j < k; j++) {
          balls.push({ x: x0 + j * 0.52, y: y - TH - R - 0.02 - row * 0.46, vx: 0, vy: 0, c: Math.floor(r() * COLORS), alive: true, jar: false, sl: false, rest: 0, tw: ti, id: balls.length });
        }
        left -= k;
      }
    });
    // what is under the tower
    if (tw.s !== 'C' && dest !== 'lava') {
      const left = tw.s === 'L';
      const xe = left ? 4.6 : 11.4;
      const xs = left ? T.x0 : T.x1;
      if (dest === 'jar') wall(xs, 5.75, xe, 7.2, 'ramp');
      else {
        // the trap: a tilted pin from the outer edge
        const ax = left ? 0.3 : W - 0.3;
        const pin = { id: pid++, ax, ay: 5.6, bx: xe, by: 7.2, t: 0, pulled: false, tower: ti, role: 'trap', side: left ? 'l' : 'r', kind: 'ramp', chamber: -1 };
        pins.push(pin);
        info.trapId = pin.id;
      }
    }
  });
  const jarBalls = balls.filter((b) => towers[b.tw].dest !== 'lava').length;
  const target = Math.max(1, jarBalls - (spec.slack || 0));
  const solution = [];
  for (const tw of towers) if (tw.dest !== 'lava') solution.push(...tw.pinIds);
  return { spec, segs, pins, balls, towers, target, solution, jarBalls, par: solution.length };
}

export class Puzzle {
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.seed = opts.seed ?? 5;
    const lv = layout(this.level, this.seed);
    Object.assign(this, { spec: lv.spec, segs: lv.segs, pins: lv.pins, balls: lv.balls, towers: lv.towers, target: lv.target, solution: lv.solution, jarBalls: lv.jarBalls, par: lv.par });
    this.inJar = 0; this.lost = 0; this.time = 0; this.moves = 0; this.events = []; this.state = 'play'; this.stars = 0;
    this.reachedAt = -1; this.failAt = -1; this.undoStack = [];
    this._preroll();
  }

  _preroll() {
    for (let i = 0; i < 240; i++) this._physics(1 / 60);
    for (const b of this.balls) { b.vx = 0; b.vy = 0; b.sl = true; b.rest = 1; }
    this.inJar = 0; this.lost = 0; this.time = 0; this.events = [];
  }

  _snap() {
    return {
      balls: this.balls.map((b) => ({ x: b.x, y: b.y, vx: b.vx, vy: b.vy, alive: b.alive, jar: b.jar, sl: b.sl, rest: b.rest })),
      pins: this.pins.map((p) => ({ t: p.t, pulled: p.pulled })),
      inJar: this.inJar, lost: this.lost, moves: this.moves, time: this.time,
    };
  }

  _restore(s) {
    s.balls.forEach((o, i) => Object.assign(this.balls[i], o));
    s.pins.forEach((o, i) => Object.assign(this.pins[i], o));
    this.inJar = s.inJar; this.lost = s.lost; this.moves = s.moves; this.time = s.time;
    this.state = 'play'; this.reachedAt = -1; this.failAt = -1; this.stars = 0;
  }

  /** Pull a pin by id. Returns true when it was pulled. */
  pull(id) {
    const p = this.pins.find((x) => x.id === id);
    if (!p || p.pulled || this.state !== 'play') return false;
    this.undoStack.push(this._snap());
    p.pulled = true; p.t = 0; this.moves += 1;
    for (const b of this.balls) { b.sl = false; b.rest = 0; }
    this.events.push({ type: 'pull', id: p.id, role: p.role });
    return true;
  }

  canUndo() { return this.undoStack.length > 0; }

  undo() {
    if (!this.undoStack.length) return false;
    this._restore(this.undoStack.pop());
    return true;
  }

  /** The id of the next pin a good player pulls (for the hint). */
  hint() {
    if (this.state !== 'play') return 0;
    for (const id of this.solution) { const p = this.pins.find((x) => x.id === id); if (p && !p.pulled) return id; }
    return 0;
  }

  _solids() {
    const out = this.segs.slice();
    for (const p of this.pins) {
      if (p.pulled && p.t >= 1) continue;
      const dx = p.bx - p.ax; const dy = p.by - p.ay; const len = Math.hypot(dx, dy);
      const keep = p.pulled ? len * (1 - slide(p)) : len;
      if (keep < 0.02) continue;
      out.push({ x1: p.ax, y1: p.ay, x2: p.ax + (dx / len) * keep, y2: p.ay + (dy / len) * keep, k: 'pin' });
    }
    return out;
  }

  _wake(b) {
    const stack = [b];
    b.sl = false; b.rest = 0;
    while (stack.length) {
      const a = stack.pop();
      for (const o of this.balls) {
        if (!o.sl || !o.alive) continue;
        const dx = o.x - a.x; const dy = o.y - a.y;
        if (dx * dx + dy * dy < 9 * R * R) { o.sl = false; o.rest = 0; stack.push(o); }
      }
    }
  }

  _physics(dt) {
    const solids = this._solids();
    const h = dt / SUB;
    const balls = this.balls;
    const rad = R + TH;
    for (const p of this.pins) if (p.pulled && p.t < 1) p.t = Math.min(1, p.t + dt / PIN_TIME);
    for (let s = 0; s < SUB; s++) {
      for (const b of balls) {
        if (!b.alive || b.sl) continue;
        b.vy += G * h; b.x += b.vx * h; b.y += b.vy * h;
        for (const sg of solids) {
          const dx = sg.x2 - sg.x1; const dy = sg.y2 - sg.y1; const l2 = dx * dx + dy * dy;
          const t = l2 > 1e-9 ? clamp(((b.x - sg.x1) * dx + (b.y - sg.y1) * dy) / l2, 0, 1) : 0;
          const cx = sg.x1 + dx * t; const cy = sg.y1 + dy * t;
          let ox = b.x - cx; let oy = b.y - cy;
          const d2 = ox * ox + oy * oy;
          if (d2 >= rad * rad) continue;
          let d = Math.sqrt(d2);
          if (d < 1e-6) { const l = Math.sqrt(l2) || 1; ox = dy / l; oy = -dx / l; if (oy > 0) { ox = -ox; oy = -oy; } d = 0; } else { ox /= d; oy /= d; }
          b.x += ox * (rad - d); b.y += oy * (rad - d);
          const vn = b.vx * ox + b.vy * oy;
          if (vn < 0) {
            const e = vn < -3 ? 0.28 : 0;
            b.vx -= (1 + e) * vn * ox; b.vy -= (1 + e) * vn * oy;
            if (vn < -3 && this._hits < 4) { this._hits += 1; this.events.push({ type: 'hit', v: -vn }); }
            const tx = -oy; const ty = ox; const vt = b.vx * tx + b.vy * ty;
            b.vx -= vt * 3 * h * tx; b.vy -= vt * 3 * h * ty;
          }
        }
      }
      for (let it = 0; it < 2; it++) this._pairs(it === 0);
    }
    for (const b of balls) {
      if (!b.alive) continue;
      b.vx = clamp(b.vx, -12, 12); b.vy = clamp(b.vy, -14, 18);
      if (b.sl) continue;
      if (b.vx * b.vx + b.vy * b.vy < 0.04) { b.rest += dt; if (b.rest > 0.45) { b.sl = true; b.vx = 0; b.vy = 0; } } else b.rest = 0;
    }
  }

  _pairs(first) {
    const balls = this.balls;
    const dmin = 2 * R;
    for (let i = 0; i < balls.length; i++) {
      const a = balls[i]; if (!a.alive) continue;
      for (let j = i + 1; j < balls.length; j++) {
        const b = balls[j]; if (!b.alive) continue;
        if (a.sl && b.sl) continue;
        const dx = b.x - a.x; const dy = b.y - a.y;
        if (dx > dmin || dx < -dmin || dy > dmin || dy < -dmin) continue;
        const d2 = dx * dx + dy * dy;
        if (d2 >= dmin * dmin) continue;
        let d = Math.sqrt(d2); let nx; let ny;
        if (d < 1e-6) { nx = 0; ny = -1; d = 0; } else { nx = dx / d; ny = dy / d; }
        const o = dmin - d;
        const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (a.sl || b.sl) {
          const mover = a.sl ? b : a; const still = a.sl ? a : b;
          const sgn = a.sl ? 1 : -1; // direction from the sleeper to the mover
          mover.x += nx * sgn * o; mover.y += ny * sgn * o;
          const closing = Math.abs(rv);
          if (first && rv * sgn < 0 && closing > 0.9) this._wake(still);
          else if (first && o > 0.12) this._wake(still);
          if (rv * sgn < 0) { mover.vx -= rv * sgn * nx * sgn * 0 ; }
          // kill the approach speed of the mover along the normal
          const vn = mover.vx * nx * sgn + mover.vy * ny * sgn;
          if (vn < 0) { mover.vx -= vn * nx * sgn; mover.vy -= vn * ny * sgn; }
          continue;
        }
        a.x -= nx * o / 2; a.y -= ny * o / 2; b.x += nx * o / 2; b.y += ny * o / 2;
        if (rv < 0) {
          const e = rv < -3 ? 0.25 : 0;
          const j2 = -(1 + e) * rv / 2;
          a.vx -= j2 * nx; a.vy -= j2 * ny; b.vx += j2 * nx; b.vy += j2 * ny;
        }
      }
    }
  }

  settled() { return this.balls.every((b) => !b.alive || b.sl || b.vx * b.vx + b.vy * b.vy < 0.02) && !this.pins.some((p) => p.pulled && p.t < 1); }

  _potential() {
    let n = this.inJar;
    for (const b of this.balls) {
      if (!b.alive || b.jar) continue;
      const tw = this.towers[b.tw];
      if (tw.dest === 'lava') continue;
      if (tw.dest === 'trap' && this.pins.find((p) => p.id === tw.trapId).pulled) continue;
      n += 1;
    }
    return n;
  }

  step(dt) {
    const ev = (this.events = this.events.filter((e) => e.type === 'pull'));
    if (this.state !== 'play') return ev;
    this._hits = 0;
    this.time += dt;
    this._physics(dt);
    for (const b of this.balls) {
      if (!b.alive) continue;
      if (!b.jar && b.y > JAR.top - 0.4 && b.x > JAR.x1 && b.x < JAR.x2) { b.jar = true; this.inJar += 1; ev.push({ type: 'jar', n: this.inJar, x: b.x, y: b.y }); }
      else if (!b.jar && b.y > LAVA_Y) { b.alive = false; this.lost += 1; ev.push({ type: 'lost', x: b.x, y: b.y }); }
    }
    const calm = this.settled();
    if (this.inJar >= this.target) {
      if (this.reachedAt < 0) { this.reachedAt = this.time; ev.push({ type: 'goal' }); }
      if (calm || this.time - this.reachedAt > 3) {
        this.state = 'won';
        // Kind rules (Batch C): move-par no longer grades. Stars = solved, plus a
        // no-loss star, plus the SPARKLE star for landing every single ball in the jar.
        this.stars = 1 + (this.lost === 0 ? 1 : 0) + (this.inJar >= this.balls.length ? 1 : 0);
        ev.push({ type: 'won', stars: this.stars });
      }
    } else if (calm) {
      if (this.pins.every((p) => p.pulled) || this._potential() < this.target) {
        if (this.failAt < 0) this.failAt = this.time;
        if (this.time - this.failAt > 0.5) { this.state = 'failed'; ev.push({ type: 'failed' }); }
      }
    } else this.failAt = -1;
    return ev;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  const src = o.stars && typeof o.stars === 'object' ? o.stars : {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(src[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), stars, muted: !!o.muted };
}
