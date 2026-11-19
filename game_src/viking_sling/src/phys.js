// A small 2D rigid-body engine for the Viking Slingshot game: circles and rotated boxes, impulse-based contacts with
// friction and restitution, warm starting, island sleeping and material damage (wood, stone, ice).
// Deterministic: fixed time step, no Math.random (a seeded generator lives in the world). y points UP, gravity is negative.
// All state is plain data (objects, arrays, Maps) so a whole world can be copied with structuredClone (used by the tests'
// robot to try shots on a copy).

export const DT = 1 / 120;
export const GRAVITY = -12;
const ITER = 12;
const SLOP = 0.01;
const BIAS = 0.2;
const MAX_BIAS = 2.2;
const REST_THRESHOLD = 1.2; // approach speed below which nothing bounces
const IMPACT_SPEED = 1.6; // approach speed below which nothing is damaged (a resting stack never gets hurt)
const SLEEP_TIME = 0.5;
const SLEEP_V = 0.16;
const SLEEP_W = 0.25;

/** Materials. thr = impact impulse a hit must exceed before it hurts, hp = how much hurt it takes to break. */
export const MATERIALS = {
  wood: { density: 0.6, friction: 0.55, rest: 0.1, hp: 9, thr: 2.4 },
  stone: { density: 1.5, friction: 0.7, rest: 0.04, hp: 46, thr: 9 },
  ice: { density: 0.5, friction: 0.28, rest: 0.05, hp: 4, thr: 1.3 },
  goblin: { density: 0.9, friction: 0.5, rest: 0.1, hp: 2, thr: 3.2 },
  viking: { density: 4, friction: 0.5, rest: 0.25, hp: 1e9, thr: 1e9 },
  ground: { density: 1, friction: 0.7, rest: 0.05, hp: 1e9, thr: 1e9 },
};

export function rngNext(w) {
  let s = w.rng >>> 0 || 1;
  s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0;
  w.rng = s;
  return s / 4294967296;
}

export class World {
  constructor(seed = 1) {
    this.bodies = [];
    this.arbs = new Map();
    this.events = [];
    this.nextId = 1;
    this.rng = seed >>> 0 || 1;
    this.time = 0;
    this.islandCounter = 1;
    this.sleeping = true; // false = never sleep (used by the stability test to be strict)
    this.dead = [];
  }

  add(b) {
    b.id = this.nextId++;
    this.bodies.push(b);
    return b;
  }

  _finish(b, mass, inertia) {
    if (b.static) { b.invMass = 0; b.invI = 0; b.mass = 0; } else { b.mass = mass; b.invMass = 1 / mass; b.invI = 1 / inertia; }
    b.vx = 0; b.vy = 0; b.w = 0; b.asleep = false; b.sleepT = 0; b.island = 0; b.touch = false; b.alive = true;
    b.maxHp = b.hp;
    b.lastHit = -10;
    return b;
  }

  addBox(o) {
    const m = MATERIALS[o.mat || 'wood'];
    const hw = o.w / 2; const hh = o.h / 2;
    const mass = o.mass || m.density * o.w * o.h;
    const b = {
      shape: 'box', kind: o.kind || 'block', mat: o.mat || 'wood', x: o.x, y: o.y, a: o.a || 0, hw, hh, r: Math.hypot(hw, hh),
      friction: o.friction ?? m.friction, rest: o.rest ?? m.rest, hp: o.hp ?? m.hp, thr: o.thr ?? m.thr, static: !!o.static,
      power: o.power || 1, tag: o.tag || null,
    };
    return this.add(this._finish(b, mass, mass * (o.w * o.w + o.h * o.h) / 12));
  }

  addCircle(o) {
    const m = MATERIALS[o.mat || 'goblin'];
    const mass = o.mass || m.density * Math.PI * o.r * o.r;
    const b = {
      shape: 'circle', kind: o.kind || 'goblin', mat: o.mat || 'goblin', x: o.x, y: o.y, a: o.a || 0, hw: o.r, hh: o.r, r: o.r,
      friction: o.friction ?? m.friction, rest: o.rest ?? m.rest, hp: o.hp ?? m.hp, thr: o.thr ?? m.thr, static: !!o.static,
      power: o.power || 1, tag: o.tag || null,
    };
    return this.add(this._finish(b, mass, 0.5 * mass * o.r * o.r * 1.4));
  }

  remove(b) {
    if (!b.alive) return;
    b.alive = false;
    this.dead.push(b);
  }

  wakeIsland(b) {
    if (!b.asleep) return;
    const id = b.island;
    for (const o of this.bodies) if (o.asleep && (o === b || (id && o.island === id))) { o.asleep = false; o.sleepT = 0; }
  }

  wakeNear(x, y, rad) {
    for (const o of this.bodies) if (o.asleep && Math.hypot(o.x - x, o.y - y) < rad + o.r) this.wakeIsland(o);
  }

  wakeAll() { for (const o of this.bodies) { o.asleep = false; o.sleepT = 0; } }

  impulse(b, ix, iy, px = b.x, py = b.y) {
    if (b.static) return;
    this.wakeIsland(b);
    b.vx += ix * b.invMass; b.vy += iy * b.invMass;
    b.w += b.invI * ((px - b.x) * iy - (py - b.y) * ix);
  }

  /** A radial blast: pushes and hurts everything within `radius`. */
  explode(x, y, radius, power, damage) {
    this.wakeNear(x, y, radius);
    for (const b of this.bodies) {
      if (b.static || !b.alive || b.kind === 'debris') continue;
      const dx = b.x - x; const dy = b.y - y;
      const d = Math.hypot(dx, dy);
      const reach = radius + b.r * 0.5;
      if (d > reach) continue;
      const f = 1 - d / reach;
      const nx = d > 1e-6 ? dx / d : 0; const ny = d > 1e-6 ? dy / d : 1;
      const k = power * f * Math.max(b.mass, 0.6) ;
      this.impulse(b, nx * k, (ny + 0.35) * k);
      if (b.kind === 'block' || b.kind === 'goblin') { b.hp -= damage * f * (b.mat === 'stone' ? 0.8 : 1); b.lastHit = this.time; }
    }
    this.events.push({ t: 'boom', x, y, radius });
  }

  // ---------------------------------------------------------------------------------------------------------------
  step() {
    const dt = DT;
    this.events.length = 0;
    this.time += dt;
    const bodies = this.bodies;
    for (const b of bodies) {
      b.touch = false;
      if (b.static || b.asleep) continue;
      b.vy += GRAVITY * dt;
    }
    this._collide();
    const act = [];
    for (const arb of this.arbs.values()) {
      if (!arb.contacts.length) continue;
      const A = arb.a; const B = arb.b;
      if ((A.static || A.asleep) && (B.static || B.asleep)) continue;
      arb.skip = false;
      act.push(arb);
    }
    for (const arb of act) this._pre(arb, dt);
    for (let i = 0; i < ITER; i++) for (const arb of act) if (!arb.skip) this._solve(arb);
    for (const b of bodies) {
      if (b.static || b.asleep) continue;
      b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.w * dt;
      b.w *= 1 / (1 + dt * 0.35);
    }
    this._reap();
    if (this.sleeping) this._sleep(act, dt);
  }

  _collide() {
    const bodies = this.bodies;
    const n = bodies.length;
    for (const b of bodies) {
      if (b.shape === 'box') {
        const c = Math.abs(Math.cos(b.a)); const s = Math.abs(Math.sin(b.a));
        b.ex = c * b.hw + s * b.hh; b.ey = s * b.hw + c * b.hh;
      } else { b.ex = b.r; b.ey = b.r; }
    }
    for (let i = 0; i < n; i++) {
      const A = bodies[i];
      if (!A.alive) continue;
      for (let j = i + 1; j < n; j++) {
        const B = bodies[j];
        if (!B.alive) continue;
        if (A.static && B.static) continue;
        const key = A.id * 8192 + B.id;
        const bothSleep = (A.static || A.asleep) && (B.static || B.asleep);
        if (bothSleep) continue;
        const overlap = Math.abs(A.x - B.x) < A.ex + B.ex + 0.02 && Math.abs(A.y - B.y) < A.ey + B.ey + 0.02;
        let arb = this.arbs.get(key);
        if (!overlap) { if (arb) this.arbs.delete(key); continue; }
        const fresh = A.shape === 'box' ? (B.shape === 'box' ? boxBox(A, B) : circleBox(B, A, true)) : (B.shape === 'box' ? circleBox(A, B, false) : circleCircle(A, B));
        if (!fresh.length) { if (arb) this.arbs.delete(key); continue; }
        if (!arb) { arb = { a: A, b: B, contacts: [], friction: 0, rest: 0, fresh: true, skip: false }; this.arbs.set(key, arb); }
        // keep accumulated impulses of contacts with the same feature
        for (const c of fresh) {
          c.pn = 0; c.pt = 0;
          for (const o of arb.contacts) if (o.fid === c.fid) { c.pn = o.pn; c.pt = o.pt; break; }
        }
        arb.contacts = fresh;
        arb.friction = Math.sqrt(A.friction * B.friction);
        arb.rest = Math.max(A.rest, B.rest);
        // waking: an awake body touching a sleeping one wakes its whole island
        if (A.asleep) this.wakeIsland(A); else if (B.asleep) this.wakeIsland(B);
        A.touch = true; B.touch = true;
      }
    }
  }

  _pre(arb, dt) {
    const A = arb.a; const B = arb.b;
    let impact = 0;
    let impactX = 0; let impactY = 0;
    for (const c of arb.contacts) {
      const nx = c.nx; const ny = c.ny;
      const r1x = c.x - A.x; const r1y = c.y - A.y; const r2x = c.x - B.x; const r2y = c.y - B.y;
      const rn1 = r1x * nx + r1y * ny; const rn2 = r2x * nx + r2y * ny;
      const kN = A.invMass + B.invMass + A.invI * (r1x * r1x + r1y * r1y - rn1 * rn1) + B.invI * (r2x * r2x + r2y * r2y - rn2 * rn2);
      c.mN = 1 / kN;
      const tx = ny; const ty = -nx;
      const rt1 = r1x * tx + r1y * ty; const rt2 = r2x * tx + r2y * ty;
      const kT = A.invMass + B.invMass + A.invI * (r1x * r1x + r1y * r1y - rt1 * rt1) + B.invI * (r2x * r2x + r2y * r2y - rt2 * rt2);
      c.mT = 1 / kT;
      let bias = (-BIAS / dt) * Math.min(0, c.sep + SLOP);
      if (bias > MAX_BIAS) bias = MAX_BIAS;
      c.bias = bias;
      const dvx = B.vx - B.w * r2y - A.vx + A.w * r1y;
      const dvy = B.vy + B.w * r2x - A.vy - A.w * r1x;
      const vn0 = dvx * nx + dvy * ny;
      c.bounce = vn0 < -REST_THRESHOLD ? -arb.rest * vn0 : 0;
      if (vn0 < -IMPACT_SPEED) { impact += -vn0 * c.mN; impactX = c.x; impactY = c.y; }
    }
    if (impact > 0) this._damage(arb, impact, impactX, impactY);
    if (arb.skip) return;
    for (const c of arb.contacts) {
      const nx = c.nx; const ny = c.ny; const tx = ny; const ty = -nx;
      const px = c.pn * nx + c.pt * tx; const py = c.pn * ny + c.pt * ty;
      const r1x = c.x - A.x; const r1y = c.y - A.y; const r2x = c.x - B.x; const r2y = c.y - B.y;
      A.vx -= A.invMass * px; A.vy -= A.invMass * py; A.w -= A.invI * (r1x * py - r1y * px);
      B.vx += B.invMass * px; B.vy += B.invMass * py; B.w += B.invI * (r2x * py - r2y * px);
    }
  }

  _damage(arb, J, x, y) {
    const A = arb.a; const B = arb.b;
    let loud = false;
    const hurt = (X, Y) => {
      if (X.kind !== 'block' && X.kind !== 'goblin') return;
      const e = J * Y.power - X.thr;
      if (e > 0) { X.hp -= e; X.lastHit = this.time; loud = true; }
    };
    hurt(A, B); hurt(B, A);
    // a "smasher" (the giant) goes straight through a block it is about to break
    for (const [X, Y] of [[A, B], [B, A]]) {
      if (Y.tag === 'smasher' && X.kind === 'block' && X.hp <= 0) {
        arb.skip = true;
        Y.vx *= 0.93; Y.vy *= 0.93;
      }
    }
    if (J > 0.8) this.events.push({ t: 'impact', x, y, J, mat: A.kind === 'block' ? A.mat : B.kind === 'block' ? B.mat : A.kind === 'goblin' || B.kind === 'goblin' ? 'goblin' : 'ground', loud });
  }

  _solve(arb) {
    const A = arb.a; const B = arb.b;
    for (const c of arb.contacts) {
      const nx = c.nx; const ny = c.ny;
      const r1x = c.x - A.x; const r1y = c.y - A.y; const r2x = c.x - B.x; const r2y = c.y - B.y;
      let dvx = B.vx - B.w * r2y - A.vx + A.w * r1y;
      let dvy = B.vy + B.w * r2x - A.vy - A.w * r1x;
      const vn = dvx * nx + dvy * ny;
      let dPn = c.mN * (-vn + (c.bias > c.bounce ? c.bias : c.bounce));
      const pn0 = c.pn;
      c.pn = Math.max(pn0 + dPn, 0);
      dPn = c.pn - pn0;
      let px = dPn * nx; let py = dPn * ny;
      A.vx -= A.invMass * px; A.vy -= A.invMass * py; A.w -= A.invI * (r1x * py - r1y * px);
      B.vx += B.invMass * px; B.vy += B.invMass * py; B.w += B.invI * (r2x * py - r2y * px);
      dvx = B.vx - B.w * r2y - A.vx + A.w * r1y;
      dvy = B.vy + B.w * r2x - A.vy - A.w * r1x;
      const tx = ny; const ty = -nx;
      const vt = dvx * tx + dvy * ty;
      let dPt = c.mT * -vt;
      const maxPt = arb.friction * c.pn;
      const pt0 = c.pt;
      c.pt = Math.max(-maxPt, Math.min(maxPt, pt0 + dPt));
      dPt = c.pt - pt0;
      px = dPt * tx; py = dPt * ty;
      A.vx -= A.invMass * px; A.vy -= A.invMass * py; A.w -= A.invI * (r1x * py - r1y * px);
      B.vx += B.invMass * px; B.vy += B.invMass * py; B.w += B.invI * (r2x * py - r2y * px);
    }
  }

  /** Remove everything that was broken this step (blocks, goblins) and wake what rested on it. */
  _reap() {
    for (const b of this.bodies) {
      if (!b.alive || b.static) continue;
      if ((b.kind === 'block' || b.kind === 'goblin') && b.hp <= 0) this.remove(b);
      else if (b.x > 90 || b.x < -30 || b.y < -12) this.remove(b);
    }
    if (!this.dead.length) return;
    for (const b of this.dead) {
      if (b.kind === 'block') this.events.push({ t: 'break', x: b.x, y: b.y, w: b.hw * 2, h: b.hh * 2, a: b.a, mat: b.mat });
      else if (b.kind === 'goblin' && b.hp <= 0) this.events.push({ t: 'goblin', x: b.x, y: b.y, r: b.r, tag: b.tag });
      else if (b.kind === 'goblin') this.events.push({ t: 'goblinLost', x: b.x, y: b.y, tag: b.tag });
      this.wakeNear(b.x, b.y, b.r + 1.2);
    }
    const deadSet = new Set(this.dead);
    this.bodies = this.bodies.filter((b) => !deadSet.has(b));
    for (const [k, arb] of this.arbs) if (deadSet.has(arb.a) || deadSet.has(arb.b)) this.arbs.delete(k);
    for (const b of this.dead) this.events.push({ t: 'gone', body: b });
    this.dead = [];
  }

  _sleep(act, dt) {
    const bodies = this.bodies;
    const parent = new Map();
    const find = (x) => { let r = x; while (parent.get(r) !== r) r = parent.get(r); let c = x; while (parent.get(c) !== r) { const nx = parent.get(c); parent.set(c, r); c = nx; } return r; };
    for (const b of bodies) {
      if (b.static || b.asleep) continue;
      parent.set(b, b);
      if (b.touch && b.vx * b.vx + b.vy * b.vy < SLEEP_V * SLEEP_V && Math.abs(b.w) < SLEEP_W) b.sleepT += dt; else b.sleepT = 0;
    }
    for (const arb of act) {
      const A = arb.a; const B = arb.b;
      if (A.static || B.static || A.asleep || B.asleep) continue;
      if (!parent.has(A) || !parent.has(B)) continue;
      const ra = find(A); const rb = find(B);
      if (ra !== rb) parent.set(ra, rb);
    }
    const minT = new Map();
    for (const b of parent.keys()) { const r = find(b); const m = minT.get(r); minT.set(r, m === undefined ? b.sleepT : Math.min(m, b.sleepT)); }
    const ids = new Map();
    for (const b of parent.keys()) {
      const r = find(b);
      if (minT.get(r) >= SLEEP_TIME) {
        if (!ids.has(r)) ids.set(r, this.islandCounter++);
        b.asleep = true; b.island = ids.get(r); b.vx = 0; b.vy = 0; b.w = 0;
      }
    }
  }

  /** True when nothing moves: every dynamic body is asleep. */
  calm() {
    for (const b of this.bodies) if (!b.static && !b.asleep && b.kind !== 'debris') return false;
    return true;
  }
}

// ----------------------------------------------------------------------------------------------------------------------
// Narrow phase. Every function returns an array of contacts { x, y, sep, nx, ny, fid }; the normal points from A to B.

function circleCircle(A, B) {
  const dx = B.x - A.x; const dy = B.y - A.y;
  const d = Math.hypot(dx, dy);
  const rr = A.r + B.r;
  if (d >= rr) return [];
  const nx = d > 1e-9 ? dx / d : 0; const ny = d > 1e-9 ? dy / d : 1;
  const sep = d - rr;
  return [{ x: A.x + nx * (A.r + sep * 0.5), y: A.y + ny * (A.r + sep * 0.5), sep, nx, ny, fid: 1 }];
}

/** circle C against box X. flip=true means the pair order is (box, circle) so the normal goes box -> circle. */
function circleBox(C, X, flip) {
  const c = Math.cos(X.a); const s = Math.sin(X.a);
  const dx = C.x - X.x; const dy = C.y - X.y;
  const lx = c * dx + s * dy; const ly = -s * dx + c * dy;
  const hw = X.hw; const hh = X.hh;
  const cx = lx < -hw ? -hw : lx > hw ? hw : lx;
  const cy = ly < -hh ? -hh : ly > hh ? hh : ly;
  let nlx; let nly; let sep; let pxl; let pyl;
  if (Math.abs(lx) < hw && Math.abs(ly) < hh) {
    const px = hw - Math.abs(lx); const py = hh - Math.abs(ly);
    if (px < py) { nlx = lx > 0 ? 1 : -1; nly = 0; pxl = nlx * hw; pyl = ly; sep = -px - C.r; } else { nlx = 0; nly = ly > 0 ? 1 : -1; pxl = lx; pyl = nly * hh; sep = -py - C.r; }
  } else {
    const ddx = lx - cx; const ddy = ly - cy;
    const d = Math.hypot(ddx, ddy);
    if (d >= C.r) return [];
    nlx = d > 1e-9 ? ddx / d : 1; nly = d > 1e-9 ? ddy / d : 0;
    sep = d - C.r; pxl = cx; pyl = cy;
  }
  // world: normal box -> circle
  let nx = c * nlx - s * nly; let ny = s * nlx + c * nly;
  const x = X.x + c * pxl - s * pyl; const y = X.y + s * pxl + c * pyl;
  if (!flip) { nx = -nx; ny = -ny; }
  return [{ x, y, sep, nx, ny, fid: 7 }];
}

const NO_EDGE = 0;
const pack = (i1, o1, i2, o2) => ((i1 * 5 + o1) * 5 + i2) * 5 + o2;
const flipFid = (f) => { const o2 = f % 5; const i2 = Math.floor(f / 5) % 5; const o1 = Math.floor(f / 25) % 5; const i1 = Math.floor(f / 125); return pack(i2, o2, i1, o1); };

function incidentEdge(hx, hy, px, py, c, s, nx, ny) {
  // n = -(RotT * normal)
  let lx = -(c * nx + s * ny); let ly = -(-s * nx + c * ny);
  const ax = Math.abs(lx); const ay = Math.abs(ly);
  let v0; let v1; let f0; let f1;
  if (ax > ay) {
    if (lx > 0) { v0 = [hx, -hy]; f0 = [3, 4]; v1 = [hx, hy]; f1 = [4, 1]; } else { v0 = [-hx, hy]; f0 = [1, 2]; v1 = [-hx, -hy]; f1 = [2, 3]; }
  } else if (ly > 0) { v0 = [hx, hy]; f0 = [4, 1]; v1 = [-hx, hy]; f1 = [1, 2]; } else { v0 = [-hx, -hy]; f0 = [2, 3]; v1 = [hx, -hy]; f1 = [3, 4]; }
  lx = 0; ly = 0;
  return [
    { x: px + c * v0[0] - s * v0[1], y: py + s * v0[0] + c * v0[1], i1: 0, o1: 0, i2: f0[0], o2: f0[1] },
    { x: px + c * v1[0] - s * v1[1], y: py + s * v1[0] + c * v1[1], i1: 0, o1: 0, i2: f1[0], o2: f1[1] },
  ];
}

function clip(vIn, nx, ny, offset, clipEdge) {
  const out = [];
  const d0 = nx * vIn[0].x + ny * vIn[0].y - offset;
  const d1 = nx * vIn[1].x + ny * vIn[1].y - offset;
  if (d0 <= 0) out.push(vIn[0]);
  if (d1 <= 0) out.push(vIn[1]);
  if (d0 * d1 < 0) {
    const t = d0 / (d0 - d1);
    const v = { x: vIn[0].x + t * (vIn[1].x - vIn[0].x), y: vIn[0].y + t * (vIn[1].y - vIn[0].y), i1: 0, o1: 0, i2: 0, o2: 0 };
    if (d0 > 0) { v.i1 = clipEdge; v.o1 = vIn[0].o1; v.i2 = NO_EDGE; v.o2 = vIn[0].o2; } else { v.i1 = vIn[1].i1; v.o1 = clipEdge; v.i2 = vIn[1].i2; v.o2 = NO_EDGE; }
    out.push(v);
  }
  return out;
}

function boxBox(A, B) {
  const hAx = A.hw; const hAy = A.hh; const hBx = B.hw; const hBy = B.hh;
  const cA = Math.cos(A.a); const sA = Math.sin(A.a); const cB = Math.cos(B.a); const sB = Math.sin(B.a);
  const dpx = B.x - A.x; const dpy = B.y - A.y;
  const dAx = cA * dpx + sA * dpy; const dAy = -sA * dpx + cA * dpy;
  const dBx = cB * dpx + sB * dpy; const dBy = -sB * dpx + cB * dpy;
  const d = B.a - A.a;
  const ac = Math.abs(Math.cos(d)); const as = Math.abs(Math.sin(d));
  const faceAx = Math.abs(dAx) - hAx - (ac * hBx + as * hBy);
  const faceAy = Math.abs(dAy) - hAy - (as * hBx + ac * hBy);
  if (faceAx > 0 || faceAy > 0) return [];
  const faceBx = Math.abs(dBx) - (ac * hAx + as * hAy) - hBx;
  const faceBy = Math.abs(dBy) - (as * hAx + ac * hAy) - hBy;
  if (faceBx > 0 || faceBy > 0) return [];
  // pick the axis of least penetration
  let axis = 0; let sepa = faceAx;
  let nx = dAx > 0 ? cA : -cA; let ny = dAx > 0 ? sA : -sA;
  const relTol = 0.95; const absTol = 0.01;
  if (faceAy > relTol * sepa + absTol * hAy) { axis = 1; sepa = faceAy; nx = dAy > 0 ? -sA : sA; ny = dAy > 0 ? cA : -cA; }
  if (faceBx > relTol * sepa + absTol * hBx) { axis = 2; sepa = faceBx; nx = dBx > 0 ? cB : -cB; ny = dBx > 0 ? sB : -sB; }
  if (faceBy > relTol * sepa + absTol * hBy) { axis = 3; sepa = faceBy; nx = dBy > 0 ? -sB : sB; ny = dBy > 0 ? cB : -cB; }
  let fnx; let fny; let front; let snx; let sny; let negSide; let posSide; let negEdge; let posEdge; let inc;
  if (axis === 0) {
    fnx = nx; fny = ny; front = A.x * fnx + A.y * fny + hAx;
    snx = -sA; sny = cA; const side = A.x * snx + A.y * sny;
    negSide = -side + hAy; posSide = side + hAy; negEdge = 3; posEdge = 1;
    inc = incidentEdge(hBx, hBy, B.x, B.y, cB, sB, fnx, fny);
  } else if (axis === 1) {
    fnx = nx; fny = ny; front = A.x * fnx + A.y * fny + hAy;
    snx = cA; sny = sA; const side = A.x * snx + A.y * sny;
    negSide = -side + hAx; posSide = side + hAx; negEdge = 2; posEdge = 4;
    inc = incidentEdge(hBx, hBy, B.x, B.y, cB, sB, fnx, fny);
  } else if (axis === 2) {
    fnx = -nx; fny = -ny; front = B.x * fnx + B.y * fny + hBx;
    snx = -sB; sny = cB; const side = B.x * snx + B.y * sny;
    negSide = -side + hBy; posSide = side + hBy; negEdge = 3; posEdge = 1;
    inc = incidentEdge(hAx, hAy, A.x, A.y, cA, sA, fnx, fny);
  } else {
    fnx = -nx; fny = -ny; front = B.x * fnx + B.y * fny + hBy;
    snx = cB; sny = sB; const side = B.x * snx + B.y * sny;
    negSide = -side + hBx; posSide = side + hBx; negEdge = 2; posEdge = 4;
    inc = incidentEdge(hAx, hAy, A.x, A.y, cA, sA, fnx, fny);
  }
  const c1 = clip(inc, -snx, -sny, negSide, negEdge);
  if (c1.length < 2) return [];
  const c2 = clip(c1, snx, sny, posSide, posEdge);
  if (c2.length < 2) return [];
  const out = [];
  for (const v of c2) {
    const sep = fnx * v.x + fny * v.y - front;
    if (sep <= 0) {
      let fid = pack(v.i1, v.o1, v.i2, v.o2);
      if (axis >= 2) fid = flipFid(fid);
      out.push({ x: v.x - sep * fnx, y: v.y - sep * fny, sep, nx, ny, fid });
    }
  }
  return out;
}
