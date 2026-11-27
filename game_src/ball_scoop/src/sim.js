// Ball Scoop rules (pure, no drawing). A truck drives a long, crazy road scooping piles of balls, passing gates (+N, xN, -N),
// dodging walls / moving walls / spinning bars, riding bumps, ramps and conveyor strips, along curves and narrowing roads, and
// finally tips everything into the giant bank. The number of balls (this.balls) is authoritative; the physical pile on screen
// (physics.js / pile.js) only shows min(count, cap) spheres and reports spilled spheres back here. 30 levels, 5 themes, a GOAL
// per level (3 stars at the goal, 2 at 60 %, 1 for finishing). Deterministic: every level has a fixed seeded layout.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 3.8;
export const LEVELS = 30;
export const MAX_BALLS = 99999;
export const FRONT = 3.9; // the shovel lip is this far ahead of the truck origin
export const THEMES = ['meadow', 'desert', 'snow', 'candy', 'space'];
export const themeOf = (lv) => THEMES[Math.min(4, Math.floor(lv / 6))];
/** Which shipped panorama (art/pano<N>.webp) belongs to each theme — matched by what the painting
    actually shows, NOT by rotation: meadow levels run the sea bridge (Alexandria/Qaitbay coast),
    desert runs the Old Cairo bazaar, candy is the funfair, space is the rainbow sky road.
    Snow has NO truthful painting (none of the six is a winter scene), so it keeps its code-drawn
    world with no ring (0). The treasure-vault painting (6) is the finale: the last level only. */
export const THEME_PANO = { meadow: 3, desert: 2, snow: 0, candy: 1, space: 5 };
export const panoOf = (lv) => (lv >= LEVELS - 1 ? 6 : THEME_PANO[themeOf(lv)] ?? 0);
export const UPG = [
  { id: 'start', ar: 'كور بداية', en: 'Start balls', icon: '🔴', base: 40, grow: 1.55, max: 8, per: 8 },
  { id: 'wide', ar: 'مجرفة أعرض', en: 'Wider shovel', icon: '↔️', base: 60, grow: 1.7, max: 6, per: 0.3 },
  { id: 'coin', ar: 'عملات أكتر', en: 'Coin value', icon: '🪙', base: 80, grow: 1.75, max: 8, per: 0.3 },
  { id: 'magnet', ar: 'مغناطيس', en: 'Magnet range', icon: '🧲', base: 70, grow: 1.7, max: 5, per: 0.5 },
  { id: 'armor', ar: 'درع للحيطان', en: 'Wall armour', icon: '🛡️', base: 90, grow: 1.8, max: 5, per: 0.15 },
];
export const levelLen = (n) => 230 + n * 26;
export const FIN = { ramp: 10, plat: 4, h: 2.4, pitHalf: 5.2, pitLen: 11, pitY: -1.4 };
export const shovelW = (wide) => 3.0 + 0.3 * wide;
export const goalRound = (v) => (v < 100 ? Math.max(20, Math.round(v / 10) * 10) : v < 1000 ? Math.round(v / 50) * 50 : Math.round(v / 500) * 500);

export function buildRoad(level, seedOverride) {
  const lv = clamp(level, 0, LEVELS - 1);
  const r = rng((seedOverride ?? lv * 7919 + 11) >>> 0);
  const ri = (a, b) => a + Math.floor(r() * (b - a + 1));
  const L = levelLen(lv);
  const things = [];
  const zones = { curves: [], narrows: [], bumps: [], ramps: [] };
  let id = 1;
  const d = lv / (LEVELS - 1);
  const unit = 10 * Math.round(1 + lv * 0.35);
  let mulBudget = 2 + Math.floor(lv / 10);
  const pileN = () => 14 + lv * 3 + ri(0, 20);
  const add = (t) => { things.push({ id: id++, ...t }); };

  // overlay zones first (curves, narrowing), then fill the road with set pieces
  const zoneSpan = (len, gap) => { const out = []; let z = 60 + ri(0, 40); while (z + len < L - 80) { out.push(z); z += len + gap + ri(0, 80); } return out; };
  if (lv >= 5) for (const z of zoneSpan(50, 160 - lv * 2)) zones.narrows.push({ z0: z, z1: z + 50, min: lv > 20 ? 1.9 : 2.4 });
  if (lv >= 9) for (const z of zoneSpan(80, 130 - lv)) zones.curves.push({ z0: z, z1: z + 80, A: 1.6 + d * 1.6, s: ri(0, 1) ? 1 : -1, kind: r() < 0.6 ? 's' : 'c' });
  const inNarrow = (z) => zones.narrows.some((q) => z > q.z0 - 6 && z < q.z1 + 6);

  const gateKinds = () => {
    const out = [];
    const mk = (kind) => {
      if (kind === 'mul' && mulBudget <= 0) kind = 'add';
      if (kind === 'mul') { mulBudget--; return { op: 'mul', v: lv >= 24 && r() < 0.2 ? 4 : lv >= 12 && r() < 0.4 ? 3 : 2 }; }
      if (kind === 'minus') return { op: 'add', v: -unit * ri(1, 3) };
      return { op: 'add', v: unit * ri(1, 4) };
    };
    const p = r();
    let pair;
    if (lv < 2) pair = p < 0.7 ? ['add', 'add'] : ['add', 'mul'];
    else if (lv < 6) pair = p < 0.35 ? ['add', 'add'] : p < 0.65 ? ['add', 'mul'] : ['add', 'minus'];
    else pair = p < 0.2 ? ['add', 'add'] : p < 0.45 ? ['add', 'mul'] : p < 0.7 ? ['mul', 'minus'] : p < 0.85 ? ['add', 'minus'] : ['mul', 'mul'];
    if (r() < 0.5) pair.reverse();
    out.push(mk(pair[0]), mk(pair[1]));
    return out;
  };

  const pieces = [
    { min: 0, w: 4, f: (z) => { add({ kind: 'pile', x: (r() - 0.5) * 5.2, z, n: pileN(), w: 1.8 }); return 9; } },
    { min: 0, w: 3, f: (z) => { const k = 4 + Math.floor(d * 2); const a = 1.6 + d; for (let i = 0; i < k; i++) add({ kind: 'pile', x: (i % 2 ? 1 : -1) * a, z: z + i * 6, n: Math.round(pileN() * 0.6), w: 1.6 }); return k * 6 + 4; } },
    { min: 0, w: 5, f: (z) => { const [a, b] = gateKinds(); add({ kind: 'gate', x: -1.95, z, w: 3.3, ...a }); add({ kind: 'gate', x: 1.95, z, w: 3.3, ...b }); return 15; } },
    { min: 8, w: 2, f: (z) => { const ks = [gateKinds(), gateKinds()]; const g = [ks[0][0], ks[0][1], ks[1][0]]; g.forEach((q, i) => add({ kind: 'gate', x: (i - 1) * 2.45, z, w: 2.3, ...q })); return 15; } },
    { min: 0, w: 3, f: (z, narrow) => { if (narrow) return 8; const w = 2.4 + d * 1.4; const x = (r() < 0.5 ? -1 : 1) * r() * (HALF - w / 2 - 1.8); add({ kind: 'wall', x, z, w, loss: 0.12 + Math.min(0.18, lv * 0.007) }); return 11; } },
    { min: 3, w: 2, f: (z, narrow) => { if (narrow) return 8; const gc = (r() - 0.5) * 3; const gw = 3.4 - d * 0.5; const l = gc - gw / 2 + HALF, rr = HALF - (gc + gw / 2); add({ kind: 'wall', x: -HALF + l / 2 - 0.0, z, w: l, loss: 0.14 }); add({ kind: 'wall', x: HALF - rr / 2, z, w: rr, loss: 0.14 }); return 13; } },
    { min: 4, w: 2, f: (z) => { zones.bumps.push({ z0: z, n: 4, len: 3, A: 0.38 }); add({ kind: 'bumpmark', z, len: 12 }); for (let i = 0; i < 3; i++) add({ kind: 'pile', x: (r() - 0.5) * 4, z: z + 14 + i * 5, n: Math.round(pileN() * 0.5), w: 1.6 }); return 32; } },
    { min: 6, w: 2, f: (z, narrow) => { if (narrow) return 8; add({ kind: 'mwall', x: 0, z, w: 2.6, amp: 1.5 + d, f: 1.1 + d * 0.8, ph: r() * 6, loss: 0.16 }); return 12; } },
    { min: 7, w: 2, f: (z, narrow) => { if (narrow) return 8; const H = 1.7; zones.ramps.push({ z0: z, len: 5, H }); add({ kind: 'ramp', z, len: 5, H }); for (let i = 0; i < 3; i++) add({ kind: 'pile', x: (r() - 0.5) * 4.4, z: z + 17 + i * 4, n: Math.round(pileN() * 0.6), w: 1.6 }); return 33; } },
    { min: 10, w: 2, f: (z, narrow) => { if (narrow) return 8; add({ kind: 'spinner', x: (r() - 0.5) * 2, z, len: 5.2, w0: (r() < 0.5 ? -1 : 1) * (1.8 + d * 1.2), ph: r() * 6, cool: 0 }); return 14; } },
    { min: 12, w: 2, f: (z, narrow) => { if (narrow) return 8; const dir = r() < 0.5 ? -1 : 1; add({ kind: 'conv', z, len: 16, dir }); add({ kind: 'pile', x: -dir * 2.4, z: z + 6, n: pileN(), w: 1.6 }); add({ kind: 'pile', x: -dir * 2.4, z: z + 12, n: pileN(), w: 1.6 }); return 26; } },
  ];
  let z = 24;
  while (z < L - 40) {
    const narrow = inNarrow(z);
    const ok = pieces.filter((p) => lv >= p.min);
    const tot = ok.reduce((s, p) => s + p.w, 0);
    let k = r() * tot, pick = ok[0];
    for (const p of ok) { k -= p.w; if (k <= 0) { pick = p; break; } }
    z += pick.f(z, narrow);
  }
  things.sort((a, b) => a.z - b.z);
  return { L, things, zones, lv, theme: themeOf(lv) };
}

function zoneFns(road) {
  const { zones, L } = road;
  const centerAt = (z) => { let c = 0; for (const q of zones.curves) if (z > q.z0 && z < q.z1) { const u = (z - q.z0) / (q.z1 - q.z0); c += q.s * q.A * (q.kind === 's' ? Math.sin(2 * Math.PI * u) : Math.sin(Math.PI * u)); } return c; };
  const halfAt = (z) => { let hw = HALF; for (const q of zones.narrows) if (z > q.z0 && z < q.z1) { const u = (z - q.z0) / (q.z1 - q.z0); const k = Math.min(1, Math.sin(Math.PI * u) * 3); hw = Math.min(hw, HALF - (HALF - q.min) * k); } return hw; };
  const groundAt = (z) => {
    if (z >= L) { const u = z - L; return u < FIN.ramp ? FIN.h * (u / FIN.ramp) : FIN.h; }
    for (const q of zones.bumps) if (z > q.z0 && z < q.z0 + q.n * q.len) { const u = ((z - q.z0) % q.len) / q.len; return q.A * Math.sin(Math.PI * u) ** 2; }
    for (const q of zones.ramps) if (z > q.z0 && z < q.z0 + q.len) return q.H * (z - q.z0) / q.len;
    return 0;
  };
  return { centerAt, halfAt, groundAt };
}

export class Run {
  /** opts: { level, seed, up: {start, wide, coin, magnet, armor}, easy } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.up = { start: 0, wide: 0, coin: 0, magnet: 0, armor: 0, ...(opts.up || {}) };
    const road = buildRoad(this.level, opts.seed);
    this.road = road;
    this.L = road.L; this.things = road.things; this.theme = road.theme;
    Object.assign(this, zoneFns(road));
    this.zEdge = this.L + FIN.ramp + FIN.plat;
    this.zStop = this.zEdge - 2.5;
    this.balls = 10 + this.up.start * 8;
    this.peak = this.balls;
    this.x = 0; this.targetX = 0; this.z = 0; this.y = 0; this.vy = 0; this.air = false; this.pitch = 0;
    this.time = 0; this.state = 'run'; this.events = []; this.easy = !!opts.easy;
    this.coins = 0; this.bankT = 0; this.tilt = 0; this.spilled = 0; this.lostWalls = 0;
    this.goal = opts.goal || 0;
    this.slow = 0;
  }

  get W() { return shovelW(this.up.wide); }
  get speed() { return (this.easy ? 9 : 12) * (this.slow > 0 ? 0.55 : 1); }
  get coinRate() { return 0.2 * (1 + this.up.coin * 0.3); }
  get gx() { return this.centerAt(this.z) + this.x; }
  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 1.2); }
  lose(n) { n = Math.min(this.balls, Math.max(0, Math.round(n))); this.balls -= n; this.spilled += n; return n; }
  starsFor(b = this.balls) { return b >= this.goal ? 3 : b >= this.goal * 0.6 ? 2 : 1; }

  spinnerHit(t) {
    const a = t.ph + this.time * t.w0;
    const cxp = t.x, hl = t.len / 2, dx = Math.cos(a) * hl, dz = Math.sin(a) * hl;
    const zf = this.z + FRONT, zr = [zf - 0.5, zf + 0.5], xr = [this.x - 1.3, this.x + 1.3];
    for (let s = -1; s <= 1.001; s += 0.1) { const px = cxp + dx * s, pz = t.z + dz * s; if (px > xr[0] && px < xr[1] && pz > zr[0] && pz < zr[1]) return true; }
    return false;
  }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'done') return ev;
    this.time += dt;
    if (this.slow > 0) this.slow -= dt;
    if (this.state === 'bank') return this._bank(dt, ev);
    const hw = this.halfAt(this.z) - 1.0;
    { const mx = 4.6 * dt; this.x += clamp((this.targetX - this.x) * Math.min(1, dt * 9), -mx, mx); }
    const prevZ = this.z;
    this.z += this.speed * dt;
    for (const t of this.things) {
      if (t.kind === 'conv' && this.z > t.z && this.z < t.z + t.len) this.x += t.dir * 3.4 * dt;
      if (t.kind === 'ramp' && !this.air && prevZ < t.z + t.len && this.z >= t.z + t.len) { this.air = true; this.vy = (t.H / t.len) * this.speed; this.y = t.H; ev.push({ type: 'jump' }); }
    }
    this.x = clamp(this.x, -hw, hw);
    // vertical motion
    const gy = this.groundAt(this.z);
    if (this.air) { this.vy -= 20 * dt; this.y += this.vy * dt; if (this.y <= gy) { this.y = gy; this.air = false; this.vy = 0; ev.push({ type: 'land' }); } }
    else { const py = this.y; this.y = gy; if (Math.abs(gy - py) > 0.0 && !this.bumped && gy > 0.2 && this.groundAt(this.z - 3) > 0.2 && this.groundAt(this.z - 3) < 0.45) { this.bumped = true; ev.push({ type: 'bump' }); } if (gy < 0.05) this.bumped = false; }
    const sl = (this.groundAt(this.z + 1.5) - this.groundAt(this.z - 1.5)) / 3;
    const tp = this.air ? -Math.atan2(this.vy, this.speed) * 0.7 : -Math.atan(sl);
    this.pitch += (tp - this.pitch) * Math.min(1, dt * 10);
    const grounded = this.y < 0.9;
    const reachW = this.W / 2 + 0.3 + this.up.magnet * 0.5;
    const lossK = (l) => l * (this.easy ? 0.5 : 1) * (1 - this.up.armor * 0.15);
    for (const t of this.things) {
      if (t.done) continue;
      if (t.kind === 'spinner') { if (t.cool > 0) t.cool -= dt; if (t.cool <= 0 && Math.abs(t.z - (this.z + FRONT)) < 3 && grounded && this.spinnerHit(t)) { t.cool = 1.2; const lost = Math.min(this.balls, Math.max(2, Math.round(this.balls * lossK(0.14)))); this.balls -= lost; this.lostWalls += lost; this.slow = 0.25; ev.push({ type: 'wall', lost, before: this.balls + lost, t }); } continue; }
      if (t.z - FRONT - (t.kind === 'pile' ? 1.4 : 0) > this.z || t.z < this.z - 2 || !['pile', 'gate', 'wall', 'mwall'].includes(t.kind)) continue;
      if (t.kind === 'pile') {
        if (grounded && Math.abs(t.x - this.x) < t.w / 2 + reachW) { t.done = true; const n = t.n; this.balls = Math.min(MAX_BALLS, this.balls + n); ev.push({ type: 'scoop', n, t }); }
      } else if (t.kind === 'gate') {
        if (Math.abs(t.x - this.x) < t.w / 2) {
          for (const o of this.things) if (o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01) o.done = true;
          const before = this.balls;
          this.balls = clamp(Math.round(t.op === 'mul' ? this.balls * t.v : this.balls + t.v), 0, MAX_BALLS);
          t.hit = true;
          ev.push({ type: 'gate', op: t.op, v: t.v, gained: this.balls - before, before, t });
        }
      } else {
        const wx = t.kind === 'mwall' ? t.x + t.amp * Math.sin(this.time * t.f + t.ph) : t.x;
        if (grounded && Math.abs(wx - this.x) < t.w / 2 + 1.35) {
          t.done = true;
          const lost = Math.min(this.balls, Math.max(2, Math.round(this.balls * lossK(t.loss))));
          this.balls -= lost; this.lostWalls += lost; this.slow = 0.3;
          ev.push({ type: 'wall', lost, before: this.balls + lost, t });
        }
      }
    }
    this.peak = Math.max(this.peak, this.balls);
    if (this.z >= this.L) { this.state = 'bank'; this.bankPhase = 'climb'; ev.push({ type: 'finish', balls: this.balls }); }
    return ev;
  }

  _bank(dt, ev) {
    this.x += (0 - this.x) * Math.min(1, dt * 4);
    this.y = this.groundAt(this.z);
    const sl = (this.groundAt(this.z + 1.5) - this.groundAt(this.z - 1.5)) / 3;
    this.pitch += (-Math.atan(sl) - this.pitch) * Math.min(1, dt * 10);
    if (this.z < this.zStop - 0.03) { this.z += Math.min(this.speed, Math.max(2.2, (this.zStop - this.z) * 1.6)) * dt; if (this.z > this.zStop) this.z = this.zStop; return ev; }
    if (this.bankT === 0) { this.bankPhase = 'tilt'; this.coins = Math.round(this.balls * this.coinRate); ev.push({ type: 'bank', balls: this.balls, coins: this.coins }); }
    this.bankT += dt;
    const k = clamp((this.bankT - 0.4) / 1.5, 0, 1);
    this.tilt = 1.42 * (k * k * (3 - 2 * k));
    if (this.bankT > 0.4 && !this.tilting) { this.tilting = true; ev.push({ type: 'tilt' }); }
    if (this.bankT >= 4.4) { this.state = 'done'; ev.push({ type: 'done', coins: this.coins, stars: this.starsFor() }); }
    return ev;
  }
}

/** A robot driver (also used by the tests and to compute each level's GOAL): heads for piles and the best gate, around walls. */
export function robotSteer(r) {
  let tx = 0, bd = 1e9;
  for (const t of r.things) {
    if (t.done || t.z < r.z + 1 || t.z - r.z - FRONT > 24) continue;
    const dd = t.z - r.z - FRONT;
    if (t.kind === 'gate') {
      const gs = r.things.filter((o) => o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01 && !o.done);
      const score = (g) => (g.op === 'mul' ? r.balls * (g.v - 1) : g.v);
      const best = gs.sort((a, b) => score(b) - score(a))[0];
      if (best && dd < bd) { bd = dd; tx = best.x; }
    } else if (t.kind === 'pile' && dd < bd) { bd = dd; tx = t.x; }
    else if ((t.kind === 'wall' || t.kind === 'mwall') && dd < 9) {
      const wx = t.kind === 'mwall' ? t.x : t.x;
      // find a free gap: try candidates across the road
      let best = 0, bs = -1e9;
      for (let c = -2.6; c <= 2.6; c += 0.2) {
        let ok = true;
        for (const o of r.things) if ((o.kind === 'wall' || o.kind === 'mwall') && Math.abs(o.z - t.z) < 0.5) { const ox = o.kind === 'mwall' ? 0 : o.x; const ow = o.kind === 'mwall' ? o.w + 2 * o.amp : o.w; if (Math.abs(ox - c) < ow / 2 + 1.55) ok = false; }
        const s = (ok ? 100 : 0) - Math.abs(c - r.x);
        if (s > bs) { bs = s; best = c; }
      }
      tx = best; bd = 0;
    } else if (t.kind === 'spinner' && dd < 10 && dd < bd) { bd = dd; tx = r.x > 0 ? -2.6 : 2.6; if (Math.abs(t.x - tx) < 1) tx = t.x + (tx > 0 ? 2.6 : -2.6); tx = clamp(tx, -2.6, 2.6); }
  }
  r.steer(tx / (HALF - 1.2));
}

// Balls the robot driver banked on each level WITH the real ball physics (goals.mjs); GOAL = 75 % of that, rounded.
export const ROBOT_PHYSICS = [231, 311, 275, 223, 126, 159, 231, 382, 457, 659, 650, 463, 367, 419, 355, 419, 169, 514, 567, 373, 751, 1069, 448, 1037, 781, 491, 808, 540, 530, 912];
const goalCache = new Map();
export function robotRun(level, up = {}, opts = {}) {
  const r = new Run({ level, up, ...opts });
  let t = 0;
  while (r.state !== 'done' && t < 400) { robotSteer(r); r.step(1 / 30); t += 1 / 30; }
  return r;
}
export function goalFor(level) {
  if (!goalCache.has(level)) goalCache.set(level, goalRound((ROBOT_PHYSICS[level] ?? robotRun(level).balls * 0.3) * 0.75));
  return goalCache.get(level);
}

export const upgradeCost = (id, lv) => { const u = UPG.find((x) => x.id === id); return lv >= u.max ? null : Math.round(u.base * u.grow ** lv); };

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const best = {}, stars = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.best && o.best[i]); if (v > 0) best[i] = Math.floor(v); const q = Number(o.stars && o.stars[i]); if (q >= 1) stars[i] = clamp(Math.floor(q), 1, 3); }
  const up = {};
  for (const u of UPG) up[u.id] = clamp(Math.floor(Number(o.up && o.up[u.id])) || 0, 0, u.max);
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), best, stars, coins: Math.max(0, Math.floor(Number(o.coins)) || 0), up, muted: !!o.muted };
}
