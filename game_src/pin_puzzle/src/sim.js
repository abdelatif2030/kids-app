// Pin Puzzle with no drawing: candy balls rest on shelves held by pins; tap a pin to pull it and the balls above fall through
// the gap to the next shelf and finally into the jar at the bottom. Each shelf has TWO gaps (a left pin and a right pin): one
// leads on down toward the jar, the other drops into a lava pit (those balls are lost). Fill the jar to the target. Tiny circle
// physics (gravity, shelves, walls, ball-ball collisions). Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const W = 10;
export const H = 18;
export const R = 0.3;
export const LEVELS = 12;
const G = 22;

export function buildLevel(level, seed) {
  const r = rng(seed + level * 91 + 17);
  const shelves = 2 + Math.min(4, Math.floor(level / 2));
  const segs = []; // static segments {x1,y1,x2,y2}
  const pins = []; // {id, x1,y1,x2,y2, pulled, good, shelf}
  const balls = [];
  const colors = 6;
  let y = 3.2;
  let id = 1;
  const dy = (H - 7) / (shelves + 0.4);
  const openings = [];
  const goodLeft = r() < 0.5;
  for (let s = 0; s < shelves; s++) {
    const mid = W / 2;
    pins.push({ id: id++, x1: 0.05, y1: y, x2: mid - 0.12, y2: y, pulled: false, good: goodLeft, shelf: s });
    pins.push({ id: id++, x1: mid + 0.12, y1: y, x2: W - 0.05, y2: y, pulled: false, good: !goodLeft, shelf: s });
    segs.push({ x1: mid, y1: y - 0.1, x2: mid, y2: y + 0.1 });
    // the BAD half drops its balls onto a ramp that runs out through an opening in the side wall (into lava)
    const badLeft = goodLeft;
    openings.push({ left: badLeft, y0: y + 0.5, y1: y + 1.5 });
    if (badLeft) segs.push({ x1: mid - 0.12, y1: y + 0.7, x2: -2, y2: y + 1.7 }); else segs.push({ x1: mid + 0.12, y1: y + 0.7, x2: W + 2, y2: y + 1.7 });
    const n = 5 + Math.floor(r() * 3) + (s === 0 ? 2 : 0);
    for (let k = 0; k < n; k++) balls.push({ x: 0.7 + r() * (W - 1.4), y: y - 0.45 - Math.floor(k / 6) * 0.62, vx: 0, vy: 0, c: Math.floor(r() * colors), alive: true, jar: false, shelf: s });
    y += dy;
  }
  // the side walls, with openings for the lava ramps
  for (const side of [true, false]) {
    let y0 = 0;
    const xs = side ? 0 : W;
    for (const o of openings.filter((q) => q.left === side).sort((a1, b1) => a1.y0 - b1.y0)) { segs.push({ x1: xs, y1: y0, x2: xs, y2: o.y0 }); y0 = o.y1; }
    segs.push({ x1: xs, y1: y0, x2: xs, y2: H });
  }
  // the funnel to the jar
  const jx1 = W / 2 - 1.4; const jx2 = W / 2 + 1.4;
  segs.push({ x1: 0, y1: H - 5.2, x2: jx1, y2: H - 2.2 }, { x1: W, y1: H - 5.2, x2: jx2, y2: H - 2.2 });
  segs.push({ x1: jx1, y1: H - 2.2, x2: jx1, y2: H }, { x1: jx2, y1: H - 2.2, x2: jx2, y2: H });
  return { segs, pins, balls, jar: { x1: jx1, x2: jx2, y: H - 1.2 }, target: Math.max(4, Math.floor(balls.length * 0.5)), shelves };
}

export class Puzzle {
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    const lv = buildLevel(this.level, opts.seed ?? 5);
    this.segs = lv.segs; this.pins = lv.pins; this.balls = lv.balls; this.jar = lv.jar; this.target = lv.target;
    this.inJar = 0; this.lost = 0; this.time = 0; this.moves = 0; this.events = []; this.state = 'play';
  }

  /** Pull a pin by id. Returns true when it was pulled. */
  pull(id) {
    const p = this.pins.find((x) => x.id === id);
    if (!p || p.pulled || this.state !== 'play') return false;
    p.pulled = true; this.moves += 1; this.events.push({ type: 'pull', good: p.good });
    return true;
  }

  _solids() { return [...this.segs, ...this.pins.filter((p) => !p.pulled)]; }

  step(dt) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt;
    const sub = 4; const h = dt / sub;
    const solids = this._solids();
    for (let s = 0; s < sub; s++) {
      for (const b of this.balls) {
        if (!b.alive || b.jar) continue;
        b.vy += G * h; b.x += b.vx * h; b.y += b.vy * h;
        for (const sg of solids) {
          const dx = sg.x2 - sg.x1; const dy = sg.y2 - sg.y1; const l2 = dx * dx + dy * dy || 1e-9;
          const t = clamp(((b.x - sg.x1) * dx + (b.y - sg.y1) * dy) / l2, 0, 1);
          const cx = sg.x1 + dx * t; const cy = sg.y1 + dy * t;
          let ox = b.x - cx; let oy = b.y - cy; const d = Math.hypot(ox, oy);
          if (d < R && d > 1e-6) {
            ox /= d; oy /= d; b.x = cx + ox * R; b.y = cy + oy * R;
            const vn = b.vx * ox + b.vy * oy;
            if (vn < 0) { b.vx -= 1.2 * vn * ox; b.vy -= 1.2 * vn * oy; b.vx *= 0.995; }
            // gentle slope roll
          } else if (d <= 1e-6) b.y -= R;
        }
      }
      // ball-ball
      for (let i = 0; i < this.balls.length; i++) {
        const a = this.balls[i]; if (!a.alive) continue;
        for (let j = i + 1; j < this.balls.length; j++) {
          const b = this.balls[j]; if (!b.alive) continue;
          const dx = b.x - a.x; const dy = b.y - a.y; const d2 = dx * dx + dy * dy;
          if (d2 < 4 * R * R && d2 > 1e-8) { const d = Math.sqrt(d2); const o = (2 * R - d) / 2; const nx = dx / d; const ny = dy / d; a.x -= nx * o; a.y -= ny * o; b.x += nx * o; b.y += ny * o; const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny; if (rv < 0) { a.vx += rv * nx * 0.5; a.vy += rv * ny * 0.5; b.vx -= rv * nx * 0.5; b.vy -= rv * ny * 0.5; } }
        }
      }
    }
    for (const b of this.balls) {
      if (!b.alive || b.jar) continue;
      b.vx = clamp(b.vx, -9, 9); b.vy = clamp(b.vy, -14, 18);
      if (b.y > this.jar.y && b.x > this.jar.x1 && b.x < this.jar.x2) { b.jar = true; this.inJar += 1; ev.push({ type: 'jar', n: this.inJar }); }
      else if (b.y > H + 1) { b.alive = false; this.lost += 1; ev.push({ type: 'lost' }); }
    }
    const waiting = this.balls.filter((b) => b.alive && !b.jar).length;
    const moving = this.balls.some((b) => b.alive && !b.jar && Math.hypot(b.vx, b.vy) > 0.6 && b.y > 3);
    if (this.inJar >= this.target) { this.state = 'won'; const free = this.balls.length - this.inJar; this.stars = this.lost === 0 ? 3 : this.lost <= 2 ? 2 : 1; ev.push({ type: 'won', stars: this.stars }); void free; }
    else if (!moving && this.pins.every((p) => p.pulled) && waiting < this.target - this.inJar) { this.state = 'lost'; ev.push({ type: 'failed' }); }
    else if (!moving && this.time > 2 && this.balls.filter((b) => b.alive && !b.jar).length + this.inJar < this.target) { this.state = 'lost'; ev.push({ type: 'failed' }); }
    return ev;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.stars && o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), stars, muted: !!o.muted };
}
