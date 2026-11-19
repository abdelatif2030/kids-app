// Hamster Warrior with no drawing — rebuilt to match the owner's original video (2026-11-19).
// A little hamster warrior runs along a forest path seen from behind, in three lanes. Rows come at him: cute sprout creatures that
// each show a POWER pill (green sword pill = weaker than him, red skull pill = stronger), blue +N sword cards (red -N spike cards),
// and arcs of coins. He can only beat creatures weaker than himself and absorbs their power; touching a stronger one costs one of
// his three hearts and bounces him back (no hearts left: gentle "try again"). Every chapter ends with a big boss; every other level
// ends at a wooden arch. Coins buy upgrades between levels. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const LANES = [-2.3, 0, 2.3];
export const HALF = 3.5;
export const CHAPTERS = [
  { id: 1, ar: 'غابة الصباح', en: 'Morning Forest', levels: 4 },
  { id: 2, ar: 'وادي الفطر', en: 'Mushroom Valley', levels: 4 },
  { id: 3, ar: 'جبل الحجارة', en: 'Stone Mountain', levels: 4 },
];
export const LEVELS = 12;
export const HEARTS = 3;
export const UPG = [
  { id: 'power', ar: 'قوة البداية', en: 'Start power', base: 30, grow: 1.6, max: 8 },
  { id: 'magnet', ar: 'مغناطيس العملات', en: 'Coin magnet', base: 40, grow: 1.7, max: 5 },
  { id: 'armor', ar: 'قلب زيادة', en: 'Extra heart', base: 60, grow: 2.0, max: 3 },
];
export const levelLen = (n) => 130 + n * 14;
export const isBossLevel = (n) => n % 4 === 3;

export function buildPath(level, seed) {
  const r = rng(seed + level * 173 + 9);
  const L = levelLen(level);
  const things = [];
  let id = 1;
  let z = 18;
  let est = 5 + level * 1.2; // a guess of the hero's power at this point, so that the numbers stay fair
  let rowNo = 0;
  const pick = (n) => Math.floor(r() * n);
  while (z < L - (isBossLevel(level) ? 40 : 26)) {
    rowNo++;
    const k = r();
    if (k < 0.5 || rowNo === 1) {
      // an enemy row: two or three sprout creatures, at least one weaker than the hero, the others sometimes stronger
      const lanes = [0, 1, 2].sort(() => r() - 0.5).slice(0, 2 + (r() < 0.5 ? 1 : 0));
      let gain = 0;
      lanes.forEach((ln, i) => {
        const weak = i === 0 || r() < 0.5;
        const p = weak ? Math.max(1, Math.min(rowNo === 1 ? 4 : 1e9, Math.round(est * (0.15 + r() * 0.5)))) : Math.max(est + 2, Math.round(est * (1.4 + r() * 1.1)));
        if (weak) gain += p;
        things.push({ id: id++, kind: 'enemy', x: LANES[ln], z, power: p, type: level >= 8 ? 2 : level >= 4 ? 1 : 0, seed: pick(1000) });
      });
      est += Math.round(gain * 0.55);
      z += 13;
    } else if (k < 0.78) {
      // a row of cards on little stone pedestals: blue +N (good) and sometimes a red -N (bad)
      const bad = r() < 0.4 ? pick(3) : -1;
      let best = 0;
      for (let ln = 0; ln < 3; ln++) {
        const good = ln !== bad;
        const v = good ? Math.max(2, Math.round(est * (0.12 + r() * 0.28))) : -Math.max(1, Math.round(est * 0.18));
        if (good) best = Math.max(best, v);
        things.push({ id: id++, kind: 'card', x: LANES[ln], z, v });
      }
      est += Math.round(best * 0.8);
      z += 12;
    } else {
      // an arc of coins down one lane
      const ln = pick(3);
      for (let k2 = 0; k2 < 7; k2++) things.push({ id: id++, kind: 'coin', x: LANES[ln] + Math.sin((k2 / 6) * Math.PI) * (ln === 1 ? 0.9 : -Math.sign(LANES[ln]) * 0.9), z: z + k2 * 1.6, v: 1 });
      z += 14;
    }
  }
  if (!things.some((t) => t.kind === 'coin')) for (let k2 = 0; k2 < 7; k2++) things.push({ id: id++, kind: 'coin', x: Math.sin((k2 / 6) * Math.PI) * 0.9, z: 40 + k2 * 1.6, v: 1 });
  if (isBossLevel(level)) {
    const bp = Math.max(8, Math.round(est * 0.5));
    // a row of three BIG blue cards right before the boss, so the hero can always become stronger than him
    for (let ln = 0; ln < 3; ln++) things.push({ id: id++, kind: 'card', x: LANES[ln], z: L - 40, v: Math.round(bp * (0.8 + ln * 0.1)) });
    things.push({ id: id++, kind: 'boss', x: 0, z: L - 22, power: bp });
  }
  const goals = [Math.round(est * 0.3), Math.round(est * 0.6), Math.round(est * 0.9)].map((v, i) => Math.max(v, 8 * (i + 1)));
  return { L, things, goals, est };
}

export class Run {
  /** opts: { level (0..11), seed, up: {power, magnet, armor}, easy } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.up = { power: 0, magnet: 0, armor: 0, ...(opts.up || {}) };
    const p = buildPath(this.level, opts.seed ?? 5);
    this.L = p.L; this.things = p.things; this.goals = p.goals;
    this.power = 5 + this.up.power * 4 + (opts.easy ? 6 : 0);
    this.peak = this.power;
    this.maxHearts = HEARTS + this.up.armor;
    this.hearts = this.maxHearts;
    this.x = 0; this.targetX = 0; this.z = 0;
    this.coins = 0; this.state = 'run'; this.time = 0; this.events = []; this.hit = 0; this.stars = 0;
  }

  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 0.6); }
  get speed() { return 7.5; }
  get reach() { return 1.1 + this.up.magnet * 0.5; }
  get starsNow() { return this.goals.filter((g) => this.power >= g).length; }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'won' || this.state === 'lost') return ev;
    this.time += dt;
    this.hit = Math.max(0, this.hit - dt);
    this.x += (this.targetX - this.x) * Math.min(1, dt * 10);
    this.z += (this.hit > 0.7 ? -3 : this.speed) * dt;
    if (this.z < 0) this.z = 0;
    const bs = this.things.find((t) => t.kind === 'boss' && !t.done); // the boss blocks the path until he is beaten
    if (bs && this.z > bs.z - 0.6) this.z = bs.z - 0.6;
    for (const t of this.things) {
      if (t.done) continue;
      // a stronger creature in my lane ahead: warn once
      if ((t.kind === 'enemy' || t.kind === 'boss') && !t.warned && t.power >= this.power && t.z - this.z < 11 && t.z - this.z > 3 && Math.abs(t.x - this.x) < 1.6) { t.warned = true; ev.push({ type: 'warn' }); }
      if (t.z > this.z + 0.7 || t.z < this.z - 0.7) continue;
      if (t.kind === 'coin') { if (Math.abs(t.x - this.x) < 0.6 + this.reach * 0.5) { t.done = true; this.coins += t.v; ev.push({ type: 'coin' }); } continue; }
      if (Math.abs(t.x - this.x) >= (t.kind === 'boss' ? 1.8 : 1.05)) continue;
      if (t.kind === 'card') {
        t.done = true; const before = this.power;
        this.power = Math.max(1, this.power + t.v);
        ev.push({ type: 'card', v: t.v, gained: this.power - before });
      } else if (t.kind === 'enemy' || t.kind === 'boss') {
        if (this.power > t.power) {
          t.done = true;
          const gain = Math.max(1, t.power);
          this.power += gain;
          ev.push({ type: 'absorb', gain, boss: t.kind === 'boss', id: t.id });
          if (t.kind === 'boss') this._win(ev);
        } else if (this.hit <= 0) {
          this.hearts -= 1; this.hit = 1.1;
          ev.push({ type: 'hurt', hearts: this.hearts, id: t.id });
          if (this.hearts <= 0) { this.state = 'lost'; ev.push({ type: 'lost' }); }
        }
      }
    }
    this.peak = Math.max(this.peak, this.power);
    if (this.state === 'run' && !this.things.some((t) => t.kind === 'boss') && this.z >= this.L) this._win(ev);
    return ev;
  }

  _win(ev) { if (this.state !== 'run') return; this.state = 'won'; this.stars = Math.max(1, this.starsNow); this.reward = this.coins + 20 + this.level * 5; ev.push({ type: 'won', stars: this.stars }); }
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

/** A simple player for tests: looks at the NEXT row only and steers to its best lane (a weaker creature, a good card, coins), never into a danger. */
export function robotSteer(run) {
  let rowZ = null;
  for (const t of run.things) if (!t.done && t.kind !== 'coin' && t.z >= run.z - 0.7 && (rowZ === null || t.z < rowZ)) rowZ = t.z;
  if (rowZ === null) { run.targetX = 0; return; }
  const row = run.things.filter((t) => !t.done && t.kind !== 'coin' && Math.abs(t.z - rowZ) < 0.1);
  let best = null, bestScore = 0;
  const bad = (t) => ((t.kind === 'enemy' || t.kind === 'boss') && run.power <= t.power) || (t.kind === 'card' && t.v < 0);
  for (const t of row) { const s = t.kind === 'card' ? 40 + t.v : bad(t) ? -1 : 50 + t.power; if (s > bestScore) { bestScore = s; best = t; } }
  let target = best ? best.x : 0;
  if (!best) { const free = LANES.filter((lx) => !row.some((t) => Math.abs(t.x - lx) < 1.2 && bad(t))); target = free.includes(0) ? 0 : free[0] ?? 0; }
  // coins in the lane we are heading to are a bonus only; the lane choice above decides
  run.targetX = clamp(target, -(HALF - 0.6), HALF - 0.6);
}
