// One lane engine, two genuinely different games (theme comes in with the Run):
//   squad   → «فرقة الإنقاذ / Rescue Squad»: a lifeboat crew on the Nile. The river CURRENT pushes the boat
//             sideways; swimmers in the water need life rings — ring one enough times (or reach them) and they
//             climb aboard (+1 crew); floating logs are the danger (they bump a rescuer off). Cages are nets
//             with trapped ducklings, gates are numbered buoys, the boss is a sunken wreck blocking the river.
//   archers → «رماة جسر قصر النيل / Qasr El Nil Archers»: a target-shooting squad on a great bridge. Arrows
//             ARC (gravity) and the level's WIND bends them sideways; the targets stand still on the far bank
//             and never advance; the grand target at the end blocks the bridge until it is shot down.
// In both: the squad advances and fires by itself; the child steers. Losing all crew ends the level gently
// (try again — never a harsh game over). Coins buy shop upgrades (save.bow, save.rank). Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const ROAD = 5; // half width
export const LANES = [-3.2, 0, 3.2];
export const THEMES = {
  squad: { id: 'squad', levels: 16 },
  archers: { id: 'archers', levels: 8 },
};

export const MAX_N = 80;

export function levelLen(level) { return 260 + level * 40; }

/** The road, as a list of things, from a seed, a level (0-based) and a theme. */
export function buildRoad(level, seed, theme = 'squad') {
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
      // a wave across the road: swimmers and logs on the river, target dummies on the bridge
      const n = theme === 'archers' ? 2 + Math.floor(r() * 2) : 2 + Math.floor(r() * 3) + (level > 3 ? 1 : 0);
      for (let i = 0; i < n; i++) {
        if (theme === 'squad') {
          if (r() < 0.68) things.push({ id: id++, kind: 'enemy', trait: 'swim', x: (r() - 0.5) * 8.4, z: z + r() * 8, hp: 1 + Math.floor(r() * 3), w: 1.1, t: 0 });
          else things.push({ id: id++, kind: 'enemy', trait: 'log', x: (r() - 0.5) * 8.4, z: z + r() * 8, hp: Math.ceil(hpBase * (0.7 + r() * 0.8)), w: 1.6, t: 0 });
        } else {
          things.push({ id: id++, kind: 'enemy', trait: 'target', x: (r() - 0.5) * 8.8, z: z + r() * 8, hp: Math.ceil(hpBase * (0.7 + r() * 0.8)), w: 1.1, t: 0 });
        }
      }
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
  // the finale at the end of every level: a sunken wreck on the river, the grand target on the bridge
  things.push({ id: id++, kind: 'enemy', trait: theme === 'squad' ? 'wreck' : 'grand', x: 0, z: L - 12, hp: Math.ceil(hpBase * 6), w: 3.2, t: 0, boss: true });
  return { L, things };
}

export class Run {
  /** opts: { level, easy, seed, bow (0..3), rank (0..4), start (crew), theme ('squad'|'archers') } */
  constructor(opts = {}) {
    this.theme = opts.theme ?? 'squad';
    this.level = clamp(opts.level ?? 0, 0, THEMES[this.theme].levels - 1);
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 7) + 31);
    const road = buildRoad(this.level, opts.seed ?? 7, this.theme);
    this.wind = this.theme === 'archers' ? ((this.level * 29) % 5 - 2) * 0.7 : 0; // the bridge wind, bends arrows
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
      if ((t.kind === 'cage' || t.kind === 'crate' || t.trait === 'grand') && !t.dead && t.z - this.zs < 1.6 && t.z - this.zs > -0.5 && Math.abs(t.x - this.x) < t.w / 2 + 0.5) v = 0;
    }
    // the Nile current pushes the rescue boat sideways; the crew rows against it by steering
    if (this.theme === 'squad') {
      const drift = Math.sin(this.zs * 0.045) * 0.85 * dt;
      this.targetX = clamp(this.targetX + drift, -(ROAD - 0.8), ROAD - 0.8); // the current carries where the boat is heading
      this.x = clamp(this.x + drift, -(ROAD - 0.6), ROAD - 0.6);
    }
    this.zs += v * dt;
    // volleys
    this.fireT -= dt;
    if (this.fireT <= 0) {
      this.fireT = this.theme === 'squad' ? 0.42 : 0.3; // rings are thrown slower than arrows fly
      const k = Math.min(this.n, 9) + (this.weapon >= 3 ? 2 : 0);
      for (let i = 0; i < k; i++) {
        const off = (i - (k - 1) / 2) * (this.theme === 'squad' ? 0.7 : 0.55);
        this.bullets.push({ x: this.x + off, z: this.zs + 1.2, y: 1.1, vy: this.theme === 'archers' ? 5.5 : 0, vz: this.theme === 'squad' ? 34 : 46, vx: this.weapon >= 4 ? off * 0.5 : 0, life: 1.5, d: this.dmg });
      }
      ev.push({ type: 'volley', n: k });
    }
    // bullets
    for (const b of this.bullets) {
      const z0 = b.z;
      b.z += b.vz * dt;
      b.x += (b.vx + this.wind) * dt; // the bridge wind bends every arrow
      if (this.theme === 'archers') { b.vy -= 14 * dt; b.y += b.vy * dt; if (b.y < 0.05) b.life = 0; } // arrows arc and fall
      b.life -= dt;
      for (const t of this.things) {
        if (t.dead || b.life <= 0) continue;
        if (t.z + 0.6 < z0 || t.z - 0.6 > b.z || Math.abs(b.x - t.x) > t.w / 2 + 0.15) continue;
        b.life = 0;
        if (t.kind === 'enemy') {
          t.hp -= b.d;
          ev.push({ type: 'hit', x: b.x, z: b.z });
          if (t.hp <= 0) {
            t.dead = true;
            if (this.theme === 'squad' && t.trait === 'swim') {
              // ringed enough times: the swimmer climbs aboard and joins the crew
              this.n = Math.min(MAX_N, this.n + 1); this.peak = Math.max(this.peak, this.n); this.coins += 1;
              ev.push({ type: 'rescue', n: 1, x: t.x, z: t.z });
            } else { this.kills += 1; const c = t.boss ? 20 : 1 + Math.floor(this.level / 3); this.coins += c; ev.push({ type: 'kill', x: t.x, z: t.z, coins: c, boss: !!t.boss }); }
          }
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
    // what floats or walks toward the squad: swimmers swim to the boat (and bob), logs drift, targets stand still
    for (const t of this.things) {
      if (t.dead || t.kind !== 'enemy') continue;
      const rel = t.z - this.zs;
      if (t.trait === 'swim') {
        if (rel < 46) t.z -= (this.easy ? 2.6 : 3.8) * dt;
        t.x += Math.sin(this.time * 2 + t.id * 1.7) * dt * 0.5;
      } else if (t.trait !== 'target' && t.trait !== 'grand' && rel < 46 && !t.boss) t.z -= (this.easy ? 2.2 : 3.2) * dt;
      if (rel < 1.4 && Math.abs(t.x - this.x) < t.w / 2 + 1.2) {
        if (this.theme === 'squad' && t.trait === 'swim') {
          // reached the boat: the swimmer climbs aboard
          t.dead = true;
          this.n = Math.min(MAX_N, this.n + 1); this.peak = Math.max(this.peak, this.n);
          ev.push({ type: 'rescue', n: 1, x: t.x, z: t.z });
        } else if (t.trait === 'target' || t.trait === 'grand') {
          // targets stand on the far bank: the squad simply passes them, nothing is lost
        } else {
          const cost = t.boss ? Math.ceil(t.hp / 2) : Math.max(1, Math.ceil(t.hp / 4));
          t.dead = true;
          this.n -= cost;
          this.hurtT = 0.6;
          ev.push({ type: 'hurt', n: cost });
        }
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
  for (let i = 1; i <= 16; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return {
    unlocked: Math.max(1, Math.min(16, Math.floor(Number(o.unlocked)) || 1)),
    stars,
    coins: Math.max(0, Math.floor(Number(o.coins)) || 0),
    bow: clamp(Math.floor(Number(o.bow)) || 0, 0, 3),
    rank: clamp(Math.floor(Number(o.rank)) || 0, 0, 4),
    muted: !!o.muted,
  };
}

export const BOW_COST = [30, 70, 140];
export const RANK_COST = [20, 50, 100, 180];
