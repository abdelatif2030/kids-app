// Ball Scoop with no drawing. A yellow truck drives forward down a road and scoops piles of colourful balls with its big front
// shovel. Steer left and right through gates (+50, x3 ...) to grow the count, avoid walls that knock balls out (a hit only loses a
// share, never the run). At the end of each level everything is dumped into a giant bank for coins; coins buy upgrades (shovel
// width, start balls, coin value). Many levels with longer and crazier roads. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 3.2;
export const LEVELS = 12;
export const MAX_BALLS = 1500;
export const UPG = [
  { id: 'start', ar: 'كور بداية', en: 'Start balls', base: 30, grow: 1.6, max: 8 },
  { id: 'wide', ar: 'مجرفة أعرض', en: 'Wider shovel', base: 45, grow: 1.7, max: 6 },
  { id: 'coin', ar: 'عملات أكتر', en: 'Coin value', base: 60, grow: 1.8, max: 8 },
];
export const levelLen = (n) => 140 + n * 40;

export function buildRoad(level, seed) {
  const r = rng(seed + level * 211 + 3);
  const L = levelLen(level);
  const things = [];
  let id = 1;
  let z = 18;
  while (z < L - 20) {
    const k = r();
    if (k < 0.34) { things.push({ id: id++, kind: 'pile', x: (r() - 0.5) * 4.6, z, n: 12 + Math.floor(r() * 25) + level * 3, w: 1.6 }); z += 10; }
    else if (k < 0.6) {
      const mk = (x) => { const m = r(); return m < 0.5 ? { op: 'add', v: 10 + Math.floor(r() * 5) * 10 } : m < 0.72 ? { op: 'mul', v: 2 + (level > 5 && r() < 0.4 ? 1 : 0) } : m < 0.88 ? { op: 'add', v: -(10 + Math.floor(r() * 3) * 10) } : { op: 'mul', v: 2 }; };
      const a = mk(); const b = mk();
      things.push({ id: id++, kind: 'gate', x: -1.7, z, w: 3.1, ...a }, { id: id++, kind: 'gate', x: 1.7, z, w: 3.1, ...b });
      z += 16;
    } else if (k < 0.82) { things.push({ id: id++, kind: 'wall', x: (r() - 0.5) * 4, z, w: 2.2 + level * 0.12, loss: 0.15 + Math.min(0.2, level * 0.02) }); z += 12; }
    else { things.push({ id: id++, kind: 'pile', x: -2 + r() * 4, z, n: 20 + level * 4, w: 1.8 }, { id: id++, kind: 'pile', x: -1 + r() * 2, z: z + 4, n: 15 + level * 3, w: 1.8 }); z += 12; }
  }
  return { L, things };
}

export class Run {
  /** opts: { level (0..11), seed, up: {start, wide, coin}, easy } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.up = { start: 0, wide: 0, coin: 0, ...(opts.up || {}) };
    const road = buildRoad(this.level, opts.seed ?? 5);
    this.L = road.L;
    this.things = road.things;
    this.balls = 10 + this.up.start * 8;
    this.peak = this.balls;
    this.x = 0; this.targetX = 0; this.z = 0;
    this.time = 0;
    this.state = 'run'; // run -> bank -> done
    this.events = [];
    this.easy = !!opts.easy;
    this.coins = 0;
    this.bankT = 0;
  }

  get reach() { return 1.5 + this.up.wide * 0.35; }
  get speed() { return this.easy ? 9 : 12; }
  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 0.6); }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'done') return ev;
    this.time += dt;
    if (this.state === 'bank') {
      this.bankT += dt;
      if (this.bankT >= 2.2) { this.state = 'done'; ev.push({ type: 'done', coins: this.coins }); }
      return ev;
    }
    this.x += (this.targetX - this.x) * Math.min(1, dt * 9);
    this.z += this.speed * dt;
    for (const t of this.things) {
      if (t.done || t.z > this.z + 0.6 || t.z < this.z - 0.6) continue;
      if (t.kind === 'pile') {
        if (Math.abs(t.x - this.x) < t.w / 2 + this.reach * 0.6) { t.done = true; this.balls = Math.min(MAX_BALLS, this.balls + t.n); ev.push({ type: 'scoop', n: t.n }); }
      } else if (t.kind === 'gate') {
        if (Math.abs(t.x - this.x) < t.w / 2) {
          for (const o of this.things) if (o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01) o.done = true;
          const before = this.balls;
          this.balls = Math.min(MAX_BALLS, Math.max(0, Math.round(t.op === 'mul' ? this.balls * t.v : this.balls + t.v)));
          ev.push({ type: 'gate', op: t.op, v: t.v, gained: this.balls - before });
        }
      } else if (t.kind === 'wall') {
        if (Math.abs(t.x - this.x) < t.w / 2 + 0.4) {
          t.done = true;
          const lost = Math.min(this.balls, Math.max(3, Math.round(this.balls * t.loss)));
          this.balls -= lost;
          ev.push({ type: 'wall', lost });
        }
      }
    }
    this.peak = Math.max(this.peak, this.balls);
    if (this.z >= this.L) {
      this.state = 'bank';
      this.coins = Math.round(this.balls * (1 + this.up.coin * 0.3) * 0.5);
      ev.push({ type: 'bank', balls: this.balls, coins: this.coins });
    }
    return ev;
  }
}

export const upgradeCost = (id, lv) => { const u = UPG.find((x) => x.id === id); return lv >= u.max ? null : Math.round(u.base * u.grow ** lv); };

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const best = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.best && o.best[i]); if (v > 0) best[i] = Math.floor(v); }
  const up = {};
  for (const u of UPG) up[u.id] = clamp(Math.floor(Number(o.up && o.up[u.id])) || 0, 0, u.max);
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), best, coins: Math.max(0, Math.floor(Number(o.coins)) || 0), up, muted: !!o.muted };
}
