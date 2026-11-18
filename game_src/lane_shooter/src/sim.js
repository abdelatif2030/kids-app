// Lane shooter with no drawing (used by «فرقة الجنود» and «رماة الجسر»). A squad advances along a three-lane road and fires
// by itself; the child steers it left and right. Things stand on the road at fixed distances:
//   enemy    hp, walks toward the squad; touching it costs soldiers (never a game over for a child: the squad simply gets smaller)
//   gate     a pair of numbered gates (+5, -3, x2 ...): shooting a gate raises its number, then the squad passes through one
//   barricade/cage  a numbered block: shoot it to zero to free extra soldiers
//   crate    a weapon pickup: stronger shots (up to level 4)
// Coins come from defeated enemies; the shop (save.bow, save.rank) makes shots stronger. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const ROAD = 5; // half width
export const LANES = [-3.2, 0, 3.2];
export const THEMES = {
  squad: { id: 'squad', levels: 8 },
  archers: { id: 'archers', levels: 8 },
};

export const MAX_N = 80;

export function levelLen(level) { return 260 + level * 40; }

/** The road, as a list of things, from a seed and a level (0-based). */
export function buildRoad(level, seed) {
  const r = rng(seed + level * 977);
  const L = levelLen(level);
  const things = [];
  let id = 1;
  things.push({ id: id++, kind: 'gate', x: -2.5, z: 16, w: 4.6, val: 4, hits: 0 });
  things.push({ id: id++, kind: 'gate', x: 2.5, z: 16, w: 4.6, val: 7, hits: 0 });
  things.push({ id: id++, kind: 'cage', x: LANES[Math.floor(r() * 3)], z: 36, w: 2.8, hp: 4 + level, free: 4 });
  let z = 62;
  const hpBase = 2 + level * 1.5;
  while (z < L - 30) {
    const k = r();
    if (k < 0.34) {
      // a wave of enemies across the road
      const n = 2 + Math.floor(r() * 3) + (level > 3 ? 1 : 0);
      for (let i = 0; i < n; i++) things.push({ id: id++, kind: 'enemy', x: (r() - 0.5) * 8.4, z: z + r() * 8, hp: Math.ceil(hpBase * (0.7 + r() * 0.8)), w: 1.1, t: 0 });
      z += 26;
    } else if (k < 0.62) {
      // two number gates side by side
      const a = Math.floor(r() * 7) - 2;
      const b = r() < 0.5 ? -Math.ceil(r() * 4) : Math.ceil(r() * 6);
      things.push({ id: id++, kind: 'gate', x: -2.5, z, w: 4.6, val: a === 0 ? 3 : a, hits: 0 });
      things.push({ id: id++, kind: 'gate', x: 2.5, z, w: 4.6, val: b === 0 ? -2 : b, hits: 0 });
      z += 24;
    } else if (k < 0.82) {
      const x = LANES[Math.floor(r() * 3)];
      things.push({ id: id++, kind: 'cage', x, z, w: 2.8, hp: 6 + Math.floor(level * 2 + r() * 6), free: 3 + Math.floor(r() * 3) });
      z += 22;
    } else {
      things.push({ id: id++, kind: 'crate', x: LANES[Math.floor(r() * 3)], z, w: 1.8, hp: 3 + level, level: 1 });
      z += 20;
    }
  }
  // the boss wall at the end of every level
  things.push({ id: id++, kind: 'enemy', x: 0, z: L - 12, hp: Math.ceil(hpBase * 6), w: 3.2, t: 0, boss: true });
  return { L, things };
}

export class Run {
  /** opts: { level (0..7), easy, seed, bow (0..3), rank (0..4), start (soldiers) } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, 7);
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 7) + 31);
    const road = buildRoad(this.level, opts.seed ?? 7);
    this.L = road.L;
    this.things = road.things;
    this.n = (opts.start ?? 4) + (this.easy ? 3 : 0);
    this.peak = this.n;
    this.x = 0;
    this.targetX = 0;
    this.zs = 0;
    this.bow = opts.bow ?? 0;
    this.rank = opts.rank ?? 0;
    this.weapon = 1;
    this.fireT = 0.3;
    this.bullets = [];
    this.coins = 0;
    this.kills = 0;
    this.state = 'run'; // run -> done | lost
    this.time = 0;
    this.events = [];
    this.hurtT = 0;
  }

  get dmg() { return 1 + this.bow * 0.7 + this.rank * 0.4 + (this.weapon - 1) * 0.9 + Math.floor(this.n / 12) * 0.5; }
  get speed() { return this.easy ? 7 : 9; }

  /** x in -1..1 across the road */
  steer(v) { this.targetX = clamp(v, -1, 1) * (ROAD - 0.8); }

  step(dt) {
    const ev = (this.events = []);
    if (this.state !== 'run') return ev;
    this.time += dt;
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.x += (this.targetX - this.x) * Math.min(1, dt * 9);
    // the squad keeps walking; it slows a little at a blocked cage or crate in front of it
    let v = this.speed;
    for (const t of this.things) {
      if ((t.kind === 'cage' || t.kind === 'crate') && !t.dead && t.z - this.zs < 1.6 && t.z - this.zs > -0.5 && Math.abs(t.x - this.x) < t.w / 2 + 0.5) v = 0;
    }
    this.zs += v * dt;
    // volleys
    this.fireT -= dt;
    if (this.fireT <= 0) {
      this.fireT = 0.34;
      const k = Math.min(this.n, 9) + (this.weapon >= 3 ? 2 : 0);
      for (let i = 0; i < k; i++) {
        const off = (i - (k - 1) / 2) * 0.55;
        this.bullets.push({ x: this.x + off, z: this.zs + 1.2, vz: 42, vx: this.weapon >= 4 ? off * 0.5 : 0, life: 1.2, d: this.dmg });
      }
      ev.push({ type: 'volley', n: k });
    }
    // bullets
    for (const b of this.bullets) {
      const z0 = b.z;
      b.z += b.vz * dt;
      b.x += b.vx * dt;
      b.life -= dt;
      for (const t of this.things) {
        if (t.dead || b.life <= 0) continue;
        if (t.z + 0.6 < z0 || t.z - 0.6 > b.z || Math.abs(b.x - t.x) > t.w / 2 + 0.15) continue;
        b.life = 0;
        if (t.kind === 'enemy') {
          t.hp -= b.d;
          ev.push({ type: 'hit', x: b.x, z: b.z });
          if (t.hp <= 0) { t.dead = true; this.kills += 1; const c = t.boss ? 20 : 1 + Math.floor(this.level / 3); this.coins += c; ev.push({ type: 'kill', x: t.x, z: t.z, coins: c, boss: !!t.boss }); }
        } else if (t.kind === 'gate') {
          t.hits += 1;
          if (t.hits % 2 === 0 && t.val < 30) { t.val += 1; ev.push({ type: 'gateUp', id: t.id }); }
        } else if (t.kind === 'cage') {
          t.hp -= b.d;
          if (t.hp <= 0) { t.dead = true; this.n = Math.min(MAX_N, this.n + t.free); this.peak = Math.max(this.peak, this.n); ev.push({ type: 'free', n: t.free, x: t.x, z: t.z }); }
        } else if (t.kind === 'crate') {
          t.hp -= b.d;
          if (t.hp <= 0) { t.dead = true; this.weapon = Math.min(4, this.weapon + 1); ev.push({ type: 'weapon', level: this.weapon, x: t.x, z: t.z }); }
        }
      }
    }
    this.bullets = this.bullets.filter((b) => b.life > 0);
    // enemies walk toward the squad; touching one costs soldiers
    for (const t of this.things) {
      if (t.dead || t.kind !== 'enemy') continue;
      const rel = t.z - this.zs;
      if (rel < 46 && !t.boss) t.z -= (this.easy ? 2.2 : 3.2) * dt;
      if (rel < 1.4 && Math.abs(t.x - this.x) < t.w / 2 + 1.2) {
        const cost = t.boss ? Math.ceil(t.hp / 2) : Math.max(1, Math.ceil(t.hp / 4));
        t.dead = true;
        this.n -= cost;
        this.hurtT = 0.6;
        ev.push({ type: 'hurt', n: cost });
      }
    }
    // gates: the squad goes through the one it is standing in
    for (const t of this.things) {
      if (t.dead || t.kind !== 'gate' || t.z > this.zs) continue;
      if (t.used) continue;
      t.used = true;
      if (Math.abs(t.x - this.x) < t.w / 2) {
        this.n = clamp(this.n + t.val, 0, MAX_N);
        this.peak = Math.max(this.peak, this.n);
        ev.push({ type: 'gate', val: t.val });
        for (const o of this.things) if (o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01) o.dead = true;
      }
    }
    // end of the road
    if (this.n <= 0) { this.n = 0; this.state = 'lost'; ev.push({ type: 'lost' }); } else if (this.zs >= this.L) {
      this.state = 'done';
      const big = 8 + this.level * 2;
      this.stars = 1 + (this.n >= big ? 1 : 0) + (this.n >= big * 2 ? 1 : 0);
      ev.push({ type: 'done', stars: this.stars });
    }
    return ev;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= 8; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return {
    unlocked: Math.max(1, Math.min(8, Math.floor(Number(o.unlocked)) || 1)),
    stars,
    coins: Math.max(0, Math.floor(Number(o.coins)) || 0),
    bow: clamp(Math.floor(Number(o.bow)) || 0, 0, 3),
    rank: clamp(Math.floor(Number(o.rank)) || 0, 0, 4),
    muted: !!o.muted,
  };
}

export const BOW_COST = [30, 70, 140];
export const RANK_COST = [20, 50, 100, 180];
