// Temple Army — pure deterministic simulation (no DOM, no three.js). The renderer reads the state and the events.
// World: x east, y south (row index), TILE units per map tile. The army is one number (`army`); the captain is one point.
import { LEVELS } from './levels.js';
export { LEVELS };

export const TILE = 3;
export const CAP_R = 0.7;
export const SPEED = 7;
export const DT = 1 / 60;
export const CAGE_VALUES = { k: 6, K: 12, j: 25 };
export const TRAP = { period: 3.6, warnAt: 1.6, upAt: 2.5, downAt: 3.3 }; // warning lasts 0.9 s before the spikes rise
export const CLASH = { k: 1.3, c: 1.5, trigger: 4.2 };
export const MAX_DMG_UNITS = 220;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// ---------- gates ----------
export function applyGate(n, op, v) {
  if (op === 'x') return n * v;
  if (op === '+') return n + v;
  if (op === '-') return Math.max(1, n - v);
  if (op === '/') return Math.max(1, Math.ceil(n / v));
  return n;
}
export const gateLabel = (op, v) => (op === 'x' ? `×${v}` : op === '+' ? `+${v}` : op === '-' ? `−${v}` : `÷${v}`);
export const gateGood = (op, v) => op === 'x' || op === '+';

// ---------- crowd vs crowd ----------
/** One step of a clash. Both sides lose members at a rate that grows with the other side's size (plus a small constant
 *  so that equal crowds still finish). Returns new {a, b}. */
export function clashStep(a, b, h = DT, pm = 1, em = 1) {
  return { a: a - (CLASH.k * b * em + CLASH.c) * h, b: b - (CLASH.k * a * pm + CLASH.c) * h };
}
/** Whole clash at once: survivors of side a (0 = a lost) and the time it took. Monotonic in a and b. */
export function resolveClash(a, b, pm = 1, em = 1) {
  let x = a; let y = b; let t = 0;
  while (x > 0 && y > 0 && t < 120) { const r = clashStep(x, y, DT, pm, em); x = r.a; y = r.b; t += DT; }
  return { a: x > 0 && y <= 0 ? Math.max(1, Math.round(x)) : 0, t };
}

// ---------- save, shop ----------
export const SKINS = [
  { id: 'sand', cost: 0, ar: 'الرمل', en: 'Sand', cape: 0x2a7ae8, tunic: 0x3a8af0, helm: 0xd8b060, plume: 0xff5a3a },
  { id: 'ember', cost: 40, ar: 'الجمر', en: 'Ember', cape: 0xe84a2a, tunic: 0xf06a3a, helm: 0xc8c8d0, plume: 0xffd23a },
  { id: 'jade', cost: 70, ar: 'اليشم', en: 'Jade', cape: 0x1aa868, tunic: 0x2ac888, helm: 0xe8d8a0, plume: 0xffffff },
  { id: 'royal', cost: 110, ar: 'الملكي', en: 'Royal', cape: 0x8a3ad8, tunic: 0xa05af0, helm: 0xffd23a, plume: 0xff4aa8 },
  { id: 'night', cost: 160, ar: 'الليل', en: 'Night', cape: 0x2a2a48, tunic: 0x4a4a78, helm: 0xe0e4f0, plume: 0x6af0ff },
];
export const UPS = {
  start: { max: 5, cost: [20, 40, 70, 110, 160] }, // +3 warriors at the start of every temple
  power: { max: 5, cost: [30, 55, 90, 140, 200] }, // +10 % fighting strength
  speed: { max: 3, cost: [25, 60, 120] }, // +5 % walking speed
};
export const defaultSave = () => ({ unlocked: 1, stars: LEVELS.map(() => 0), best: LEVELS.map(() => 0), coins: 0, skin: 'sand', skins: ['sand'], up: { start: 0, power: 0, speed: 0 }, muted: false });
export function normalizeSave(s) {
  const d = defaultSave();
  if (!s || typeof s !== 'object') return d;
  const n = LEVELS.length;
  const int = (v, lo, hi, def) => (Number.isFinite(Number(v)) ? clamp(Math.floor(Number(v)), lo, hi) : def);
  d.unlocked = int(s.unlocked, 1, n, 1);
  for (let i = 0; i < n; i++) {
    d.stars[i] = int(Array.isArray(s.stars) ? s.stars[i] : 0, 0, 3, 0);
    d.best[i] = int(Array.isArray(s.best) ? s.best[i] : 0, 0, 1e6, 0);
    if (d.stars[i] > 0) d.unlocked = Math.max(d.unlocked, Math.min(n, i + 2));
  }
  d.coins = int(s.coins, 0, 1e7, 0);
  const owned = new Set(['sand']);
  if (Array.isArray(s.skins)) for (const id of s.skins) if (SKINS.some((k) => k.id === id)) owned.add(id);
  d.skins = SKINS.map((k) => k.id).filter((id) => owned.has(id));
  d.skin = d.skins.includes(s.skin) ? s.skin : 'sand';
  for (const k of Object.keys(UPS)) d.up[k] = int(s.up && s.up[k], 0, UPS[k].max, 0);
  d.muted = !!s.muted;
  return d;
}
export function buySkin(save, id) {
  const k = SKINS.find((x) => x.id === id);
  if (!k) return false;
  if (save.skins.includes(id)) { save.skin = id; return true; }
  if (save.coins < k.cost) return false;
  save.coins -= k.cost; save.skins.push(id); save.skin = id; return true;
}
export function buyUp(save, key) {
  const u = UPS[key];
  if (!u) return false;
  const lv = save.up[key];
  if (lv >= u.max || save.coins < u.cost[lv]) return false;
  save.coins -= u.cost[lv]; save.up[key] = lv + 1; return true;
}
export function starsFor(levelIdx, survivors) {
  const p = LEVELS[levelIdx].par;
  return survivors >= p[1] ? 3 : survivors >= p[0] ? 2 : 1;
}

// ---------- level parsing ----------
export function parseLevel(def) {
  const rows = def.map; const H = rows.length; const W = rows[0].length;
  const solid = new Uint8Array(W * H);
  const lv = { W, H, solid, gates: [], groups: [], traps: [], levers: [], saws: [], cages: [], hordes: [], coins: [], boss: null, exit: null, start: null };
  const cx = (x) => (x + 0.5) * TILE;
  const gateAt = new Map();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const ch = rows[y][x]; const i = y * W + x;
    if (ch === '#') solid[i] = 1;
    else if (ch === 'S') lv.start = { x: cx(x), y: cx(y) };
    else if (ch === 'E') lv.exit = { tx: x, ty: y, x: cx(x), y: cx(y), open: !def.boss };
    else if (ch === '$') lv.coins.push({ id: lv.coins.length, x: cx(x), y: cx(y), got: false });
    else if (ch === '^') lv.traps.push({ id: lv.traps.length, tx: x, ty: y, x: cx(x), y: cx(y), off: ((x * 5 + y * 3) % 3) * 0.6, state: 'idle' });
    else if (ch >= '1' && ch <= '9') { const g = def.gates[ch]; const o = { id: lv.gates.length, tx: x, ty: y, x: cx(x), y: cx(y), op: g[0], v: g[1], group: -1, used: false }; lv.gates.push(o); gateAt.set(`${x},${y}`, o); }
    else if (CAGE_VALUES[ch]) lv.cages.push({ id: lv.cages.length, x: cx(x), y: cx(y), count: CAGE_VALUES[ch], open: false });
    else if (ch >= 'a' && ch <= 'c') lv.levers.push({ id: lv.levers.length, link: ch.toUpperCase(), x: cx(x), y: cx(y), pulled: false });
    else if (ch >= 'A' && ch <= 'C') { lv.saws.push({ id: lv.saws.length, key: ch, tx: x, ty: y, x: cx(x), y: cx(y), alive: true }); solid[i] = 1; }
    else if (ch === 'e' || ch === 'f' || ch === 'g') lv.hordes.push({ id: lv.hordes.length, x: cx(x), y: cx(y), count: (def.hordes || {})[ch] || 10, alive: true });
    else if (ch === 'X' || ch === 'Y') {
      const kind = ch === 'X' ? 'brute' : 'golem';
      const base = kind === 'brute'
        ? { hp: 150, atk: 7, melee: 5.4, r: 1.9, engage: 13, slamR: 4.2, dur: [1.15, 1.0], cd: [3.4, 2.6], dmg: 0.3 }
        : { hp: 650, atk: 17, melee: 6.6, r: 2.6, engage: 15, slamR: 4.4, sweepR: 7.5, sweepA: 0.95, dur: [1.35, 1.15], cd: [3.2, 2.3], dmg: 0.3 };
      lv.boss = { kind, x: cx(x), y: cx(y), ...base, ...(def.boss || {}), hpMax: (def.boss && def.boss.hp) || base.hp };
    }
  }
  // gate groups = connected gate tiles
  for (const g of lv.gates) {
    if (g.group >= 0) continue;
    const gi = lv.groups.length; const grp = { id: gi, gates: [], taken: -1 };
    const st = [g]; g.group = gi;
    while (st.length) {
      const c = st.pop(); grp.gates.push(c.id);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const o = gateAt.get(`${c.tx + dx},${c.ty + dy}`); if (o && o.group < 0) { o.group = gi; st.push(o); } }
    }
    grp.gates.sort((a, b) => a - b);
    lv.groups.push(grp);
  }
  if (lv.boss) lv.boss.hp = lv.boss.hpMax;
  return lv;
}

// ---------- the run ----------
export class Run {
  constructor(opts = {}) {
    this.levelIdx = opts.level || 0;
    this.def = LEVELS[this.levelIdx];
    this.lv = parseLevel(this.def);
    this.easy = !!opts.easy;
    this.up = { start: 0, power: 0, speed: 0, ...(opts.up || {}) };
    this.army = this.def.start + (this.easy ? 4 : 0) + this.up.start * 3;
    this.pm = 1 + 0.1 * this.up.power; // fighting strength
    this.em = this.easy ? 0.7 : 1; // enemy strength
    this.speed = SPEED * (1 + 0.05 * this.up.speed);
    this.cap = { x: this.lv.start.x, y: this.lv.start.y, fx: 0, fy: -1, moving: false };
    this.t = 0; this.acc = 0; this.state = 'play'; // play | over | won
    this.hitCd = 0; this.fight = null; this.coins = 0; this.lost = 0; this.maxArmy = this.army;
    this.bossState = this.lv.boss ? { phase: 'idle', tele: null, cd: 1.2, count: 0, flash: 0 } : null;
    this.events = [];
    this.result = null;
  }

  get n() { return Math.max(0, Math.ceil(this.army - 1e-6)); }
  emit(type, o = {}) { this.events.push({ type, t: this.t, ...o }); }
  setArmy(a) { this.army = Math.max(0, a); if (this.army > this.maxArmy) this.maxArmy = this.army; }
  hurt(k, why) { const before = this.army; this.setArmy(Math.max(0, this.army - k)); this.lost += before - this.army; this.emit('hurt', { why, amount: Math.round(before - this.army) }); if (this.army <= 0.0001) this.finish(false); }

  tileSolid(tx, ty) { const l = this.lv; return tx < 0 || ty < 0 || tx >= l.W || ty >= l.H || l.solid[ty * l.W + tx] === 1 || (this.lv.exit && !this.lv.exit.open && tx === this.lv.exit.tx && ty === this.lv.exit.ty && false); }
  /** circle (x,y,r) free of walls and of the boss? */
  free(x, y, r = CAP_R) {
    const tx0 = Math.floor((x - r) / TILE); const tx1 = Math.floor((x + r) / TILE); const ty0 = Math.floor((y - r) / TILE); const ty1 = Math.floor((y + r) / TILE);
    for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) {
      if (!this.tileSolid(tx, ty)) continue;
      const nx = clamp(x, tx * TILE, (tx + 1) * TILE); const ny = clamp(y, ty * TILE, (ty + 1) * TILE);
      if ((x - nx) ** 2 + (y - ny) ** 2 < r * r) return false;
    }
    return true;
  }
  tileOf(x, y) { return [Math.floor(x / TILE), Math.floor(y / TILE)]; }

  // spikes
  trapPhase(tr, t = this.t) { return (t + tr.off) % TRAP.period; }
  trapStateAt(tr, t) { const p = this.trapPhase(tr, t); return p < TRAP.warnAt ? 'idle' : p < TRAP.upAt ? 'warn' : p < TRAP.downAt ? 'up' : 'idle'; }
  /** will the spikes of `tr` be up at any moment in [t0, t1]? */
  trapUpDuring(tr, t0, t1, pad = 0.12) {
    for (let t = t0; t <= t1 + 1e-9; t += 0.05) if (this.trapStateAt(tr, t - pad) === 'up' || this.trapStateAt(tr, t + pad) === 'up') return true;
    return false;
  }

  step(dt, inp = { x: 0, y: 0 }) {
    this.acc += dt;
    this.events = [];
    let guard = 0;
    while (this.acc >= DT && guard++ < 20) { this.acc -= DT; this.tick(inp); }
    return this.events;
  }

  tick(inp) {
    if (this.state !== 'play') return;
    const h = DT; this.t += h; const lv = this.lv; const c = this.cap;
    this.hitCd = Math.max(0, this.hitCd - h);
    // spikes
    for (const tr of lv.traps) {
      const st = this.trapStateAt(tr, this.t);
      if (st !== tr.state) { if (st === 'warn') this.emit('trapWarn', { id: tr.id }); if (st === 'up') this.emit('trapUp', { id: tr.id }); tr.state = st; }
      if (st === 'up' && this.hitCd <= 0) {
        const [tx, ty] = this.tileOf(c.x, c.y);
        if (tx === tr.tx && ty === tr.ty) { this.hitCd = 1; this.hurt(Math.max(2, Math.ceil(this.army * (this.easy ? 0.12 : 0.22))), 'trap'); this.emit('trapHit', { id: tr.id }); }
      }
    }
    if (this.state !== 'play') return;
    // fights freeze the captain
    if (this.fight) { this.tickFight(h); return; }
    // movement
    let ix = inp.x || 0; let iy = inp.y || 0; const m = Math.hypot(ix, iy);
    if (m > 1) { ix /= m; iy /= m; }
    c.moving = m > 0.05;
    if (c.moving) {
      c.fx = ix / Math.max(m, 1e-6); c.fy = iy / Math.max(m, 1e-6);
      const nx = c.x + ix * this.speed * h; const ny = c.y + iy * this.speed * h;
      if (this.free(nx, c.y)) c.x = nx;
      if (this.free(c.x, ny)) c.y = ny;
    }
    const b = this.lv.boss;
    if (b && this.bossState.phase !== 'dead') { // soft push-out from the boss body
      const dx = c.x - b.x; const dy = c.y - b.y; const d = Math.hypot(dx, dy); const min = b.r + CAP_R;
      if (d < min && d > 1e-6) { c.x = b.x + (dx / d) * min; c.y = b.y + (dy / d) * min; }
    }
    this.interact(h);
    if (this.state === 'play' && b) this.tickBoss(h);
  }

  interact(h) {
    const lv = this.lv; const c = this.cap;
    const [tx, ty] = this.tileOf(c.x, c.y);
    for (const g of lv.gates) {
      if (g.tx !== tx || g.ty !== ty || g.used) continue;
      const grp = lv.groups[g.group];
      if (grp.taken >= 0) continue;
      grp.taken = g.id;
      for (const id of grp.gates) lv.gates[id].used = true;
      const from = this.n; const to = applyGate(from, g.op, g.v);
      this.setArmy(to);
      this.emit('gate', { id: g.id, op: g.op, v: g.v, from, to, good: to >= from });
    }
    for (const q of lv.coins) if (!q.got && Math.hypot(q.x - c.x, q.y - c.y) < 1.7) { q.got = true; this.coins++; this.emit('coin', { id: q.id }); }
    for (const q of lv.cages) if (!q.open && Math.hypot(q.x - c.x, q.y - c.y) < 1.9) { q.open = true; this.setArmy(this.army + q.count); this.emit('cage', { id: q.id, count: q.count }); }
    for (const q of lv.levers) if (!q.pulled && Math.hypot(q.x - c.x, q.y - c.y) < 1.8) {
      q.pulled = true; this.emit('lever', { id: q.id });
      for (const s of lv.saws) if (s.key === q.link && s.alive) { s.alive = false; lv.solid[s.ty * lv.W + s.tx] = 0; this.emit('sawBreak', { id: s.id }); }
    }
    for (const s of lv.saws) if (s.alive && this.hitCd <= 0 && Math.hypot(s.x - c.x, s.y - c.y) < TILE / 2 + CAP_R + 0.15) {
      this.hitCd = 1.2; this.hurt(Math.max(3, Math.ceil(this.army * 0.15)), 'saw'); this.emit('sawHit', { id: s.id });
      const dx = c.x - s.x; const dy = c.y - s.y; const d = Math.hypot(dx, dy) || 1;
      for (const k of [1.2, 0.8, 0.4]) { const nx = c.x + (dx / d) * k; const ny = c.y + (dy / d) * k; if (this.free(nx, ny)) { c.x = nx; c.y = ny; break; } }
    }
    for (const q of lv.hordes) if (q.alive && Math.hypot(q.x - c.x, q.y - c.y) < CLASH.trigger) {
      this.fight = { horde: q.id, a: this.army, b: q.count, a0: this.army, b0: q.count, time: 0 };
      this.emit('fightStart', { horde: q.id, a: this.army, b: q.count });
      return;
    }
    const e = lv.exit;
    if (e && e.open && Math.hypot(e.x - c.x, e.y - c.y) < 1.7) this.finish(true);
  }

  tickFight(h) {
    const f = this.fight; f.time += h;
    const r = clashStep(f.a, f.b, h, this.pm, this.em);
    f.a = r.a; f.b = r.b;
    const horde = this.lv.hordes[f.horde];
    this.setArmy(Math.max(0, f.a));
    if (f.a <= 0) { this.lost += f.a0; this.emit('fightEnd', { won: false }); this.fight = null; this.finish(false); return; }
    if (f.b <= 0) {
      horde.alive = false; this.setArmy(Math.max(1, Math.round(f.a))); this.lost += f.a0 - this.army;
      this.emit('fightEnd', { won: true, left: this.n }); this.fight = null;
    }
  }

  // ---- bosses ----
  inTele(tele, x, y) {
    if (tele.kind === 'slam') return Math.hypot(x - tele.x, y - tele.y) < tele.r + 0.3;
    const dx = x - tele.x; const dy = y - tele.y; const d = Math.hypot(dx, dy);
    if (d > tele.r + 0.3) return false;
    let da = Math.atan2(dy, dx) - tele.dir; da = Math.atan2(Math.sin(da), Math.cos(da));
    return Math.abs(da) < tele.half;
  }
  tickBoss(h) {
    const b = this.lv.boss; const bs = this.bossState; const c = this.cap;
    if (bs.phase === 'dead') return;
    bs.flash = Math.max(0, bs.flash - h);
    const d = Math.hypot(c.x - b.x, c.y - b.y);
    if (bs.phase === 'idle') { if (d < b.engage) { bs.phase = 'fight'; this.emit('bossStart', { kind: b.kind }); } return; }
    const frac = b.hp / b.hpMax; const p2 = frac < 0.5 ? 1 : 0;
    // telegraphed attack
    if (bs.tele) {
      const tl = bs.tele; tl.t += h;
      if (tl.t >= tl.dur) {
        const hit = this.inTele(tl, c.x, c.y);
        this.emit('impact', { kind: tl.kind, x: tl.x, y: tl.y, hit, teleAt: this.t - tl.dur });
        if (hit && this.hitCd <= 0) { this.hitCd = 0.8; this.hurt(Math.max(4, Math.ceil(this.army * b.dmg * (this.easy ? 0.6 : 1))), 'boss'); }
        bs.tele = null; bs.cd = b.cd[p2]; bs.count++;
      }
    } else {
      bs.cd -= h;
      if (bs.cd <= 0) {
        const extra = this.easy ? 0.3 : 0;
        const useSweep = b.kind === 'golem' && bs.count % 2 === 1;
        const dur = b.dur[p2] + extra;
        bs.tele = useSweep
          ? { kind: 'sweep', x: b.x, y: b.y, dir: Math.atan2(c.y - b.y, c.x - b.x), half: b.sweepA, r: b.sweepR, t: 0, dur }
          : { kind: 'slam', x: c.x, y: c.y, r: b.slamR, t: 0, dur };
        this.emit('tele', { kind: bs.tele.kind, dur, x: bs.tele.x, y: bs.tele.y });
      }
    }
    // melee: the army hits him, he hits the army
    if (d < b.melee) {
      const dps = Math.min(this.army, MAX_DMG_UNITS) * 0.9 * this.pm;
      b.hp = Math.max(0, b.hp - dps * h); bs.flash = 0.1;
      this.setArmy(this.army - b.atk * (this.easy ? 0.6 : 1) * h); this.lost += b.atk * h * (this.easy ? 0.6 : 1);
      if (this.army <= 0.0001) { this.finish(false); return; }
      if (b.hp <= 0) { bs.phase = 'dead'; bs.tele = null; this.lv.exit.open = true; this.emit('bossDown', { kind: b.kind }); this.emit('exitOpen'); }
    }
  }

  finish(won) {
    if (this.state !== 'play') return;
    this.state = won ? 'won' : 'over';
    const n = this.n;
    const stars = won ? starsFor(this.levelIdx, n) : 0;
    this.result = { won, survivors: n, stars, coins: won ? this.coins + stars * 5 + Math.floor(n / 20) : Math.floor(this.coins / 2), time: this.t };
    this.emit(won ? 'won' : 'over', this.result);
  }
}

// ---------- navigation helpers (used by the test robot and by the renderer's hints) ----------
export function bfs(run, from, goalFn, blockedFn) {
  const l = run.lv; const W = l.W;
  const key = (x, y) => y * W + x;
  const prev = new Map(); const q = [[from[0], from[1]]]; prev.set(key(from[0], from[1]), -1);
  let head = 0;
  while (head < q.length) {
    const [x, y] = q[head++];
    if (goalFn(x, y)) { const path = []; let k = key(x, y); while (k !== -1) { path.push([k % W, Math.floor(k / W)]); k = prev.get(k); } return path.reverse(); }
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx; const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= l.H || prev.has(key(nx, ny))) continue;
      if (l.solid[key(nx, ny)] || (blockedFn && blockedFn(nx, ny))) continue;
      prev.set(key(nx, ny), key(x, y)); q.push([nx, ny]);
    }
  }
  return null;
}
