// Hamster Warrior with no drawing. A little hamster warrior walks a forest path; his POWER is a number. Before each fight he
// passes through cards/gates that add or multiply power (swords +, shields x, magic x), and he can only beat monsters weaker
// than himself: he absorbs their power. A stronger monster just bounces him back (he loses a little power, never the run).
// Every chapter ends with a big boss; coins collected on the path buy upgrades between levels. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 3.0;
export const CHAPTERS = [
  { id: 1, ar: 'غابة الصباح', en: 'Morning Forest', levels: 4 },
  { id: 2, ar: 'وادي الفطر', en: 'Mushroom Valley', levels: 4 },
  { id: 3, ar: 'جبل الحجارة', en: 'Stone Mountain', levels: 4 },
];
export const LEVELS = 12;
export const UPG = [
  { id: 'power', ar: 'قوة البداية', en: 'Start power', base: 30, grow: 1.6, max: 8 },
  { id: 'magnet', ar: 'مغناطيس العملات', en: 'Coin magnet', base: 40, grow: 1.7, max: 5 },
  { id: 'armor', ar: 'درع أقوى', en: 'Stronger armor', base: 50, grow: 1.8, max: 6 },
];
export const levelLen = (n) => 120 + n * 18;
export const bossPower = (n) => Math.round(40 * 1.55 ** n);

export function buildPath(level, seed) {
  const r = rng(seed + level * 173 + 9);
  const L = levelLen(level);
  const things = [];
  let id = 1;
  let z = 16;
  let est = 10 + level * 4; // a rough guess of the hero's power so that enemies are mostly beatable
  while (z < L - 24) {
    const k = r();
    if (k < 0.34) {
      const mk = () => { const m = r(); return m < 0.45 ? { op: 'add', v: 5 + Math.floor(r() * 6) * 5, icon: '⚔️' } : m < 0.75 ? { op: 'mul', v: 2, icon: '🛡️' } : m < 0.9 ? { op: 'mul', v: 3, icon: '✨' } : { op: 'add', v: -10, icon: '💣' }; };
      const a = mk(); const b = mk();
      things.push({ id: id++, kind: 'gate', x: -1.6, z, w: 2.9, ...a }, { id: id++, kind: 'gate', x: 1.6, z, w: 2.9, ...b });
      est = est * 1.4 + 6;
      z += 14;
    } else if (k < 0.7) {
      const strong = r() < 0.3;
      const p = Math.max(2, Math.round(est * (strong ? 1.5 : 0.35 + r() * 0.4)));
      const p2 = Math.max(2, Math.round(est * (strong ? 0.4 : 1.4)));
      things.push({ id: id++, kind: 'monster', x: -1.6, z, w: 2.2, power: p, kindId: id % 3 }, { id: id++, kind: 'monster', x: 1.6, z, w: 2.2, power: p2, kindId: (id + 1) % 3 });
      est += Math.min(p, p2) * 0.4;
      z += 14;
    } else { for (let k2 = 0; k2 < 4; k2++) things.push({ id: id++, kind: 'coin', x: (r() - 0.5) * 4.4, z: z + k2 * 2, v: 5 }); z += 10; }
  }
  things.push({ id: id++, kind: 'boss', x: 0, z: L - 10, w: 5, power: bossPower(level), boss: true });
  return { L, things };
}

export class Run {
  /** opts: { level (0..11), seed, up: {power, magnet, armor}, easy } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.up = { power: 0, magnet: 0, armor: 0, ...(opts.up || {}) };
    const p = buildPath(this.level, opts.seed ?? 5);
    this.L = p.L; this.things = p.things;
    this.power = 10 + this.up.power * 6 + (opts.easy ? 8 : 0);
    this.peak = this.power;
    this.x = 0; this.targetX = 0; this.z = 0;
    this.coins = 0; this.state = 'run'; this.time = 0; this.events = []; this.hit = 0;
  }

  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 0.5); }
  get speed() { return 8; }
  get reach() { return 1.2 + this.up.magnet * 0.6; }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'won' || this.state === 'lost') return ev;
    this.time += dt;
    this.hit = Math.max(0, this.hit - dt);
    this.x += (this.targetX - this.x) * Math.min(1, dt * 9);
    this.z += (this.hit > 0 ? this.speed * 0.4 : this.speed) * dt;
    for (const t of this.things) {
      if (t.done || t.z > this.z + 0.6 || t.z < this.z - 0.6) continue;
      if (t.kind === 'coin') { if (Math.abs(t.x - this.x) < 0.8 + this.reach * 0.5) { t.done = true; this.coins += t.v; ev.push({ type: 'coin' }); } continue; }
      if (Math.abs(t.x - this.x) >= t.w / 2 + (t.boss ? 0.6 : 0)) continue;
      if (t.kind === 'gate') {
        for (const o of this.things) if (o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01) o.done = true;
        const before = this.power;
        this.power = Math.max(1, Math.round(t.op === 'mul' ? this.power * t.v : this.power + t.v));
        ev.push({ type: 'gate', op: t.op, v: t.v, gained: this.power - before });
      } else if (t.kind === 'monster' || t.kind === 'boss') {
        if (this.power > t.power) {
          t.done = true;
          const gain = Math.max(1, Math.round(t.power * (t.boss ? 0.5 : 0.6)));
          this.power += gain;
          ev.push({ type: 'absorb', gain, boss: !!t.boss });
          if (t.boss) { this.state = 'won'; this.stars = this.power >= t.power * 2 ? 3 : this.power >= t.power * 1.4 ? 2 : 1; this.reward = this.coins + 20 + this.level * 5; ev.push({ type: 'won', stars: this.stars }); }
        } else {
          // too strong: a gentle bounce back, a little power lost, the monster stays
          const loss = Math.max(1, Math.round(this.power * (0.25 - this.up.armor * 0.03)));
          this.power = Math.max(1, this.power - loss);
          this.z = Math.max(0, t.z - 3);
          this.hit = 0.8;
          ev.push({ type: 'bounce', loss, boss: !!t.boss });
          if (t.boss) { this.bossBounces = (this.bossBounces || 0) + 1; }
        }
      }
    }
    this.peak = Math.max(this.peak, this.power);
    return ev;
  }
}

export const upgradeCost = (id, lv) => { const u = UPG.find((x) => x.id === id); return lv >= u.max ? null : Math.round(u.base * u.grow ** lv); };

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.stars && o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  const up = {};
  for (const u of UPG) up[u.id] = clamp(Math.floor(Number(o.up && o.up[u.id])) || 0, 0, u.max);
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), stars, coins: Math.max(0, Math.floor(Number(o.coins)) || 0), up, muted: !!o.muted };
}
