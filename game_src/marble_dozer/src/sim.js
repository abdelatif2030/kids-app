// «جرّافة الكرات» — Marble Dozer: the rules and the physics (pure, no browser). A little yellow bulldozer in a small wooden arena full of
// coloured marbles: push each colour into the matching hole — at your own pace, there is no clock — using the walls, ramps and multiplier gates.
// Every level adds something: a second colour and a wall, multiplier gates, moving walls, bumpers, conveyor belts, ramps...
// Marbles bounce and roll (friction, bounces, marble-to-marble collisions); the bulldozer's blade pushes them.
// The arena is 60 wide and 90 tall (x to the right, y DOWN; the holes are at the top like in the picture).

export const AW = 60;
export const AH = 90;
export const MR = 1.2; // marble radius
export const COLORS = ['blue', 'red', 'yellow', 'green', 'purple'];
export const LEVELS = 10;
const MAX_MARBLES = 320;

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

/** The level definitions (data only). [easy] = younger children: fewer marbles to deliver. */
export function levelDef(n, easy = false) {
  const D = { n, name: '', holes: [], clusters: [], walls: [], bumpers: [], belts: [], ramps: [], gates: [], start: { x: AW / 2, y: AH - 12, a: -Math.PI / 2 } };
  const hole = (c, x, y, target, r = 5.2) => D.holes.push({ c, x, y, r, target });
  const cluster = (c, x, y, count) => D.clusters.push({ c, x, y, count });
  const wall = (x1, y1, x2, y2, move = null) => D.walls.push({ x1, y1, x2, y2, move });
  switch (n) {
    case 1: D.name = 'firstPush'; hole(0, 40, 8, 30); cluster(0, 27, 50, 30); break;
    case 2: D.name = 'twoColors'; hole(0, 18, 8, 30); hole(1, 44, 9, 30); cluster(0, 17, 55, 30); cluster(1, 43, 52, 30); wall(30, 6, 30, 40); break;
    case 3: D.name = 'doubleUp'; hole(2, 16, 8, 36); hole(0, 44, 8, 36); cluster(2, 17, 66, 18); cluster(0, 43, 66, 18);
      D.gates.push({ id: 1, x1: 8, y1: 44, x2: 26, y2: 44, mul: 2 }, { id: 2, x1: 34, y1: 44, x2: 52, y2: 44, mul: 2 }); wall(30, 40, 30, 56); break;
    case 4: D.name = 'movingWalls'; hole(0, 14, 8, 24); hole(1, 46, 8, 24); cluster(0, 17, 66, 24); cluster(1, 43, 66, 24);
      wall(8, 36, 24, 36, { ax: 14, ay: 0, per: 5, ph: 0 }); wall(36, 28, 52, 28, { ax: -14, ay: 0, per: 5, ph: 1.5 }); break;
    case 5: D.name = 'bumpIt'; hole(0, 30, 8, 28); hole(2, 12, 9, 20); cluster(0, 30, 66, 28); cluster(2, 46, 62, 20);
      D.bumpers.push({ x: 22, y: 38, r: 3.2 }, { x: 38, y: 38, r: 3.2 }, { x: 30, y: 26, r: 3.2 }); break;
    case 6: D.name = 'beltUp'; hole(1, 44, 8, 26); hole(0, 16, 8, 26); cluster(1, 20, 66, 26); cluster(0, 42, 66, 26);
      D.belts.push({ x: 6, y: 34, w: 24, h: 6, dx: 1, dy: 0, speed: 9 }, { x: 30, y: 24, w: 24, h: 6, dx: -1, dy: 0, speed: 9 }); break;
    case 7: D.name = 'rampUp'; hole(2, 46, 8, 26); hole(0, 14, 8, 26); cluster(2, 18, 68, 26); cluster(0, 42, 68, 26);
      D.ramps.push({ x: 8, y: 36, w: 14, h: 12, dx: 0, dy: -1, boost: 28 }, { x: 38, y: 36, w: 14, h: 12, dx: 0, dy: -1, boost: 28 }); wall(30, 34, 30, 58); break;
    case 8: D.name = 'tripleTrouble'; hole(0, 14, 8, 36); hole(1, 46, 8, 36); cluster(0, 17, 66, 12); cluster(1, 43, 66, 12);
      D.gates.push({ id: 1, x1: 6, y1: 46, x2: 26, y2: 46, mul: 3 }, { id: 2, x1: 34, y1: 46, x2: 54, y2: 46, mul: 3 }); D.bumpers.push({ x: 30, y: 30, r: 3.4 }); wall(30, 40, 30, 60); break;
    case 9: D.name = 'mixMaster'; hole(0, 12, 8, 24); hole(1, 30, 7, 24); hole(2, 48, 8, 24); cluster(0, 16, 66, 24); cluster(1, 30, 70, 24); cluster(2, 44, 66, 24);
      D.bumpers.push({ x: 20, y: 34, r: 3 }, { x: 40, y: 34, r: 3 }); wall(10, 24, 22, 24, { ax: 12, ay: 0, per: 6, ph: 0 }); wall(38, 24, 50, 24, { ax: -12, ay: 0, per: 6, ph: 2 }); break;
    default: D.name = 'marbleMaster'; hole(0, 12, 8, 30); hole(1, 30, 7, 30); hole(2, 48, 8, 30); cluster(0, 16, 62, 10); cluster(1, 30, 70, 30); cluster(2, 44, 62, 10);
      D.gates.push({ id: 1, x1: 6, y1: 52, x2: 24, y2: 52, mul: 3 }, { id: 2, x1: 36, y1: 52, x2: 54, y2: 52, mul: 3 });
      D.bumpers.push({ x: 30, y: 36, r: 3.2 }); D.belts.push({ x: 6, y: 26, w: 18, h: 5, dx: 1, dy: 0, speed: 8 }, { x: 36, y: 26, w: 18, h: 5, dx: -1, dy: 0, speed: 8 });
      D.ramps.push({ x: 24, y: 30, w: 12, h: 10, dx: 0, dy: -1, boost: 24 }); break;
  }
  // every hole sits at the point of a V-shaped funnel (the blue guide walls of the picture) that catches the marbles pushed up toward it
  for (const h of D.holes) {
    const gap = Math.min(...D.holes.filter((o) => o !== h).map((o) => Math.abs(o.x - h.x)), 40);
    const spread = Math.max(6, Math.min(12, gap / 2 - 1.2));
    const edge = (v) => Math.max(3, Math.min(AW - 3, v));
    D.walls.push({ x1: h.x - (h.r + 0.6), y1: h.y + 0.5, x2: edge(h.x - (h.r + 0.6) - spread), y2: h.y + spread + 3, move: null, funnel: true });
    D.walls.push({ x1: h.x + (h.r + 0.6), y1: h.y + 0.5, x2: edge(h.x + (h.r + 0.6) + spread), y2: h.y + spread + 3, move: null, funnel: true });
  }
  if (easy) { for (const h of D.holes) h.target = Math.max(8, Math.round(h.target * 0.75)); }
  return D;
}

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class Game {
  constructor(n, seed = 1, easy = false) {
    this.n = n;
    this.easy = easy;
    this.def = levelDef(n, easy);
    this.r = rng(seed * 7919 + n * 104729);
    this.t = 0;
    this.state = 'play'; // 'play' | 'won' — a level can only be finished, never lost
    this.marbles = [];
    this.counts = this.def.holes.map(() => 0);
    this.done = this.def.holes.map(() => false);
    this.holes = this.def.holes;
    this.walls = this.def.walls.map((w) => ({ ...w, ax1: w.x1, ay1: w.y1, ax2: w.x2, ay2: w.y2 }));
    this.dz = { x: this.def.start.x, y: this.def.start.y, a: this.def.start.a, vx: 0, vy: 0, speed: 0 };
    this.id = 0;
    this._spawnClusters();
    this.total0 = this.marbles.length;
  }

  _spawnClusters() {
    for (const c of this.def.clusters) {
      const side = Math.ceil(Math.sqrt(c.count));
      let k = 0;
      for (let i = 0; i < side && k < c.count; i++) for (let j = 0; j < side && k < c.count; j++, k++) {
        this.marbles.push({ id: ++this.id, c: c.c, x: c.x + (j - (side - 1) / 2) * MR * 2.02 + (i % 2) * MR * 0.9, y: c.y + (i - (side - 1) / 2) * MR * 1.8, vx: 0, vy: 0, gates: null, py: 0 });
      }
    }
    for (const m of this.marbles) m.py = m.y;
  }

  /** The current segment of a (possibly moving) wall. */
  _seg(w) {
    if (!w.move) return w;
    const k = Math.sin(((this.t + w.move.ph) / w.move.per) * Math.PI * 2);
    const ox = w.move.ax * k, oy = w.move.ay * k;
    return { x1: w.x1 + ox, y1: w.y1 + oy, x2: w.x2 + ox, y2: w.y2 + oy, vx: (w.move.ax * Math.cos(((this.t + w.move.ph) / w.move.per) * Math.PI * 2) * Math.PI * 2) / w.move.per, vy: 0 };
  }

  get needed() { return this.holes.map((h, i) => Math.max(0, h.target - this.counts[i])); }
  get stars() { return 3; } // stars are for finishing the level — never for beating a clock

  /** Advance dt seconds. input = { sx, sy } the stick (a world direction, length 0..1). Returns events. */
  step(dt, input = {}) {
    const ev = [];
    if (this.state !== 'play') return ev;
    // a few small steps keep fast marbles from passing through things
    const n = Math.max(1, Math.ceil(dt / (1 / 90)));
    const h = dt / n;
    for (let i = 0; i < n; i++) this._sub(h, input, ev);
    this.t += dt;
    if (this.state === 'play' && this.counts.every((c, i) => c >= this.holes[i].target)) { this.state = 'won'; ev.push({ type: 'won', stars: this.stars }); }
    return ev;
  }

  _sub(dt, input, ev) {
    const D = this.dz;
    // the bulldozer follows the stick: it turns toward it and drives forward
    const sx = input.sx || 0, sy = input.sy || 0;
    const mag = Math.min(1, Math.hypot(sx, sy));
    if (mag > 0.08) {
      const ta = Math.atan2(sy, sx);
      let d = ta - D.a;
      while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      const maxTurn = 7 * dt;
      D.a += Math.max(-maxTurn, Math.min(maxTurn, d));
      const align = Math.max(0, Math.cos(d));
      D.speed += ((22 * mag * (0.25 + 0.75 * align)) - D.speed) * Math.min(1, dt * 8);
    } else D.speed += (0 - D.speed) * Math.min(1, dt * 10);
    D.vx = Math.cos(D.a) * D.speed; D.vy = Math.sin(D.a) * D.speed;
    const px = D.x, py = D.y;
    D.x += D.vx * dt; D.y += D.vy * dt;
    // the bulldozer stays in the arena and out of the walls and bumpers
    D.x = clamp(D.x, 3.4, AW - 3.4); D.y = clamp(D.y, 3.4, AH - 3.4);
    const circles = this._dzCircles();
    for (const c of circles) {
      for (const wl of this.walls) { const s = this._seg(wl); this._pushCircleFromSeg(D, c, s, 1.1); }
      for (const b of this.def.bumpers) { const dx = c.x - b.x, dy = c.y - b.y, dist = Math.hypot(dx, dy), min = c.r + b.r; if (dist < min && dist > 1e-6) { D.x += (dx / dist) * (min - dist); D.y += (dy / dist) * (min - dist); } }
    }
    D.x = clamp(D.x, 3.4, AW - 3.4); D.y = clamp(D.y, 3.4, AH - 3.4);
    if (Math.hypot(D.x - px, D.y - py) > 1e-6) { D.vx = (D.x - px) / dt; D.vy = (D.y - py) / dt; }

    // marbles
    const ms = this.marbles;
    for (const m of ms) {
      m.py = m.y; m.px = m.x;
      // belts and ramps
      for (const b of this.def.belts) if (m.x > b.x && m.x < b.x + b.w && m.y > b.y && m.y < b.y + b.h) { m.vx += b.dx * b.speed * dt * 4; m.vy += b.dy * b.speed * dt * 4; const sp = Math.hypot(m.vx, m.vy); const cap = b.speed * 1.4; if (sp > cap) { m.vx *= cap / sp; m.vy *= cap / sp; } }
      for (const r of this.def.ramps) if (m.x > r.x && m.x < r.x + r.w && m.y > r.y && m.y < r.y + r.h) { m.vx += r.dx * r.boost * dt * 3; m.vy += r.dy * r.boost * dt * 3; }
      const f = Math.exp(-2.6 * dt);
      m.vx *= f; m.vy *= f;
      const sp = Math.hypot(m.vx, m.vy);
      if (sp > 34) { m.vx *= 34 / sp; m.vy *= 34 / sp; }
      m.x += m.vx * dt; m.y += m.vy * dt;
    }
    this._bulldozerPush(ms, D, ev);
    this._marblesCollide(ms);
    for (const m of ms) {
      // arena bounds
      if (m.x < MR) { m.x = MR; m.vx = Math.abs(m.vx) * 0.55; }
      if (m.x > AW - MR) { m.x = AW - MR; m.vx = -Math.abs(m.vx) * 0.55; }
      if (m.y < MR) { m.y = MR; m.vy = Math.abs(m.vy) * 0.55; }
      if (m.y > AH - MR) { m.y = AH - MR; m.vy = -Math.abs(m.vy) * 0.55; }
      for (const wl of this.walls) { const s = this._seg(wl); this._marbleVsSeg(m, s); }
      for (const b of this.def.bumpers) {
        const dx = m.x - b.x, dy = m.y - b.y, dist = Math.hypot(dx, dy), min = MR + b.r;
        if (dist < min && dist > 1e-6) {
          const nx = dx / dist, ny = dy / dist;
          m.x = b.x + nx * min; m.y = b.y + ny * min;
          const vn = m.vx * nx + m.vy * ny;
          if (vn < 0) { m.vx -= (1 + 1.25) * vn * nx; m.vy -= (1 + 1.25) * vn * ny; ev.push({ type: 'bump', x: m.x, y: m.y }); }
          else { m.vx += nx * 6; m.vy += ny * 6; }
        }
      }
      // holes: the matching colour drops in, the others bounce off the rim
      for (let i = 0; i < this.holes.length; i++) {
        const hl = this.holes[i];
        const dx = m.x - hl.x, dy = m.y - hl.y, dist = Math.hypot(dx, dy);
        if (m.c === hl.c) {
          if (dist < hl.r * 2.8 && dist > 1e-6) { const pull = 55 * (1 - dist / (hl.r * 2.8)); m.vx -= (dx / dist) * pull * dt; m.vy -= (dy / dist) * pull * dt; } // a gentle funnel toward the hole
          if (dist < hl.r * 0.85) { m.dead = true; this.counts[i]++; ev.push({ type: 'score', c: m.c, i, x: hl.x, y: hl.y }); if (this.counts[i] >= hl.target && !this.done[i]) { this.done[i] = true; ev.push({ type: 'done', c: m.c, i }); } break; }
        } else if (dist < hl.r + MR * 0.5 && dist > 1e-6) {
          const nx = dx / dist, ny = dy / dist; m.x = hl.x + nx * (hl.r + MR * 0.5); m.y = hl.y + ny * (hl.r + MR * 0.5);
          const vn = m.vx * nx + m.vy * ny; if (vn < 0) { m.vx -= 1.6 * vn * nx; m.vy -= 1.6 * vn * ny; }
        }
      }
    }
    // multiplier gates: a marble that crosses a gate line comes out as several
    for (const m of ms) {
      if (m.dead) continue;
      for (const g of this.def.gates) {
        if (m.gates && m.gates.has(g.id)) continue;
        if (segCross(m.px, m.py, m.x, m.y, g.x1, g.y1, g.x2, g.y2) && ms.length < MAX_MARBLES) {
          (m.gates = m.gates || new Set()).add(g.id);
          for (let k = 1; k < g.mul; k++) {
            const a = this.r() * Math.PI * 2;
            this.marbles.push({ id: ++this.id, c: m.c, x: m.x + Math.cos(a) * MR * 0.7, y: m.y + Math.sin(a) * MR * 0.7 - 0.5, vx: m.vx + Math.cos(a) * 4, vy: m.vy + Math.sin(a) * 4 - 2, gates: new Set([g.id]), py: m.y, px: m.x });
          }
          ev.push({ type: 'gate', x: m.x, y: m.y, mul: g.mul, c: m.c });
        }
      }
    }
    this.marbles = this.marbles.filter((m) => !m.dead);
  }

  /** The bulldozer as circles for the walls: the body and the blade ends. */
  _dzCircles() {
    const D = this.dz;
    const c = Math.cos(D.a), s = Math.sin(D.a);
    return [{ x: D.x + c * 2.6 - s * 2.4, y: D.y + s * 2.6 + c * 2.4, r: 1.1 }, { x: D.x + c * 2.6 + s * 2.4, y: D.y + s * 2.6 - c * 2.4, r: 1.1 }, { x: D.x, y: D.y, r: 2.2 }, { x: D.x - c * 1.6, y: D.y - s * 1.6, r: 1.9 }];
  }

  _pushCircleFromSeg(D, c, s, extra) {
    const { px, py, d } = closestOnSeg(c.x, c.y, s.x1, s.y1, s.x2, s.y2);
    const min = c.r + extra;
    if (d < min && d > 1e-6) { const nx = (c.x - px) / d, ny = (c.y - py) / d; D.x += nx * (min - d); D.y += ny * (min - d); c.x += nx * (min - d); c.y += ny * (min - d); }
  }

  _marbleVsSeg(m, s) {
    const { px, py, d } = closestOnSeg(m.x, m.y, s.x1, s.y1, s.x2, s.y2);
    const min = MR + 0.45;
    if (d < min && d > 1e-6) {
      const nx = (m.x - px) / d, ny = (m.y - py) / d;
      m.x = px + nx * min; m.y = py + ny * min;
      const rvx = m.vx - (s.vx || 0), rvy = m.vy - (s.vy || 0);
      const vn = rvx * nx + rvy * ny;
      if (vn < 0) { m.vx -= (1 + 0.6) * vn * nx; m.vy -= (1 + 0.6) * vn * ny; }
    }
  }

  /** The blade and the body push the marbles (an oriented box test). */
  _bulldozerPush(ms, D, ev) {
    const c = Math.cos(D.a), s = Math.sin(D.a);
    const boxes = [{ fx: 2.9, hw: 0.55, hh: 3.6, oy: 0 }, { fx: 4.3, hw: 1.5, hh: 0.55, oy: -3.7 }, { fx: 4.3, hw: 1.5, hh: 0.55, oy: 3.7 }, { fx: 0, hw: 2.0, hh: 1.9, oy: 0 }]; // blade, its two wings, body (forward offset, half length, half width, side offset)
    for (const m of ms) {
      for (const b of boxes) {
        const dx = m.x - D.x, dy = m.y - D.y;
        let lx = dx * c + dy * s - b.fx, ly = -dx * s + dy * c - b.oy;
        const qx = clamp(lx, -b.hw, b.hw), qy = clamp(ly, -b.hh, b.hh);
        let ex = lx - qx, ey = ly - qy;
        let d = Math.hypot(ex, ey);
        if (d < MR) {
          let nx, ny;
          if (d < 1e-6) { nx = lx >= 0 ? 1 : -1; ny = 0; d = 0; } else { nx = ex / d; ny = ey / d; }
          const wx = nx * c - ny * s, wy = nx * s + ny * c; // normal in world
          const push = MR - d;
          m.x += wx * push; m.y += wy * push;
          // the marble gets at least the bulldozer's speed along the normal, plus a little bounce
          const vn = m.vx * wx + m.vy * wy;
          const dn = D.vx * wx + D.vy * wy;
          if (vn < dn) { const add = dn - vn; m.vx += wx * add; m.vy += wy * add; }
          if (D.speed > 4) ev.push({ type: 'push' });
        }
      }
    }
  }

  _marblesCollide(ms) {
    const cell = MR * 2;
    const grid = new Map();
    for (let i = 0; i < ms.length; i++) { const k = `${Math.floor(ms[i].x / cell)},${Math.floor(ms[i].y / cell)}`; (grid.get(k) || grid.set(k, []).get(k)).push(i); }
    for (let i = 0; i < ms.length; i++) {
      const a = ms[i];
      const cx = Math.floor(a.x / cell), cy = Math.floor(a.y / cell);
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        const list = grid.get(`${cx + ox},${cy + oy}`);
        if (!list) continue;
        for (const j of list) {
          if (j <= i) continue;
          const b = ms[j];
          const dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy, min = MR * 2;
          if (d2 < min * min && d2 > 1e-8) {
            const d = Math.sqrt(d2), nx = dx / d, ny = dy / d, ov = (min - d) / 2;
            a.x -= nx * ov; a.y -= ny * ov; b.x += nx * ov; b.y += ny * ov;
            const rvn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            if (rvn < 0) { const j2 = -(1 + 0.0) * rvn / 2; a.vx -= j2 * nx; a.vy -= j2 * ny; b.vx += j2 * nx; b.vy += j2 * ny; }
          }
        }
      }
    }
  }
}

function closestOnSeg(x, y, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  const t = l2 ? clamp(((x - x1) * dx + (y - y1) * dy) / l2, 0, 1) : 0;
  const px = x1 + dx * t, py = y1 + dy * t;
  return { px, py, d: Math.hypot(x - px, y - py) };
}

function segCross(ax, ay, bx, by, cx, cy, dx, dy) {
  const d1x = bx - ax, d1y = by - ay, d2x = dx - cx, d2y = dy - cy;
  const den = d1x * d2y - d1y * d2x;
  if (Math.abs(den) < 1e-9) return false;
  const t = ((cx - ax) * d2y - (cy - ay) * d2x) / den;
  const u = ((cx - ax) * d1y - (cy - ay) * d1x) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let n = 1; n <= LEVELS; n++) { const v = o.stars && Number(o.stars[n]); if (v >= 1 && v <= 3) stars[n] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(LEVELS, Math.floor(Number(o.unlocked)) || 1)), stars, muted: !!o.muted };
}
