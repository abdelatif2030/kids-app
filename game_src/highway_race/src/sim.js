// Sunset highway race with no drawing. A red sports car drives a palm-lined coastal highway (4 lanes, busy traffic, bends).
// Goal: reach the finish line before the clock runs out AND ahead of the rival. Steer between lanes, weave through cars and
// trucks (a bump only slows you for a moment: no crashes), use nitro bursts on clear gaps. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 6;
export const LANES = [-4.5, -1.5, 1.5, 4.5];
export const STAGES = [
  { id: 1, ar: 'شلالات الريان', en: 'Rayan Waterfalls', dist: 2200, time: 105, traffic: 1.0, rival: 35.7 },
  { id: 2, ar: 'جبال السخنة', en: 'Sokhna Mountains', dist: 2600, time: 112, traffic: 1.25, rival: 37.4 },
  { id: 3, ar: 'ليل العلمين', en: 'Alamein Night', dist: 3000, time: 118, traffic: 1.5, rival: 38.0 },
  { id: 4, ar: 'الصحرا البيضا', en: 'White Desert', dist: 3200, time: 126, traffic: 1.6, rival: 36.3 },
  { id: 5, ar: 'فنار بورسعيد', en: 'Port Said Light', dist: 3400, time: 130, traffic: 1.7, rival: 36.9 },
  { id: 6, ar: 'بحيرات الجونة', en: 'Gouna Lagoons', dist: 3600, time: 134, traffic: 1.8, rival: 37.4 },
];

/** The road bends: lateral offset (m) of the road centre at distance z. */
export function bend(z) { return Math.sin(z * 0.006) * 26 + Math.sin(z * 0.0133 + 1) * 11; }
export function bendSlope(z) { return Math.cos(z * 0.006) * 26 * 0.006 + Math.cos(z * 0.0133 + 1) * 11 * 0.0133; }

export class Race {
  /** opts: { stage (0..2), easy, seed } */
  constructor(opts = {}) {
    this.stage = clamp(opts.stage ?? 0, 0, STAGES.length - 1);
    this.cfg = STAGES[this.stage];
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 5) + 99);
    this.p = { x: 1.5, z: 0, v: 0, nitro: 0, charges: 3, bump: 0, inv: 0, bumps: 0, lead: 0 };
    this.rival = { x: -1.5, z: 55, v: 0, lane: 1, laneT: 2 };
    this.traffic = [];
    let z = 60;
    let id = 1;
    while (z < this.cfg.dist + 100) {
      const truck = this.rand() < 0.28;
      this.traffic.push({ id: id++, lane: Math.floor(this.rand() * 4), z, v: truck ? 8 + this.rand() * 4 : 12 + this.rand() * 6, truck });
      z += (this.easy ? 26 : 18) / this.cfg.traffic * (0.6 + this.rand() * 0.9);
    }
    this.time = 0;
    this.state = 'count';
    this.go = 3;
    this.events = [];
    this.targetX = this.p.x;
    this.nextCharge = 400;
  }

  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 1.1); }
  useNitro() { const p = this.p; if (this.state !== 'run' || p.charges <= 0 || p.nitro > 0) return false; p.charges -= 1; p.nitro = 2.4; this.events.push({ type: 'nitro' }); return true; }
  get left() { return Math.max(0, this.cfg.time - this.time); }
  get ahead() { return this.p.z > this.rival.z; }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'done') return ev;
    const p = this.p;
    if (this.state === 'count') { this.go -= dt; if (this.go <= 0) { this.state = 'run'; ev.push({ type: 'go' }); } return ev; }
    this.time += dt;
    p.inv = Math.max(0, p.inv - dt);
    p.nitro = Math.max(0, p.nitro - dt);
    // the bend pushes the car to the outside; steering holds it (the child's finger does the work)
    const slope = bendSlope(p.z);
    this.targetX = clamp(this.targetX, -(HALF - 1.1), HALF - 1.1);
    p.x += (this.targetX - p.x) * Math.min(1, dt * 7);
    p.x = clamp(p.x, -HALF + 0.9, HALF - 0.9);
    void slope;
    const cruise = this.easy ? 31 : 36; // faster (owner 2026-11-26: «سباق الغروب سرعتها بطيئة شوية»): about 112 / 130 km/h
    const top = cruise * (p.nitro > 0 ? 1.4 : 1);
    const target = p.bump > 0 ? top * 0.45 : top;
    p.bump = Math.max(0, p.bump - dt);
    p.v += (target - p.v) * Math.min(1, dt * (target > p.v ? 2.2 : 4));
    p.z += p.v * dt;
    // traffic
    for (const c of this.traffic) {
      c.z += c.v * dt;
      if (p.inv > 0) continue;
      const dz = c.z - p.z;
      const cx = LANES[c.lane];
      if (Math.abs(dz) < (c.truck ? 4.2 : 3.0) && Math.abs(cx - p.x) < (c.truck ? 2.0 : 1.7)) {
        p.bump = 1.0; p.inv = 1.4; p.bumps += 1;
        p.x += cx > p.x ? -0.8 : 0.8;
        this.targetX = p.x;
        ev.push({ type: 'bump', truck: c.truck });
      }
    }
    // the rival weaves through traffic at a steady pace
    const rv = this.rival;
    rv.laneT -= dt;
    if (rv.laneT <= 0) { rv.lane = clamp(rv.lane + (this.rand() < 0.5 ? -1 : 1), 0, 3); rv.laneT = 2 + this.rand() * 3; }
    rv.x += (LANES[rv.lane] - rv.x) * Math.min(1, dt * 3);
    let blocked = false;
    for (const c of this.traffic) { const dz = c.z - rv.z; if (dz > 0 && dz < 14 && Math.abs(LANES[c.lane] - rv.x) < 2) blocked = true; }
    const rvTarget = this.cfg.rival * (blocked ? 0.72 : 1);
    rv.v += (rvTarget - rv.v) * Math.min(1, dt * 2);
    rv.z += rv.v * dt;
    p.lead = p.z - rv.z;
    if (p.z > this.nextCharge) { this.nextCharge += 500; p.charges = Math.min(3, p.charges + 1); ev.push({ type: 'charge' }); }
    // lead changes
    const nowAhead = p.z > rv.z;
    if (this.wasAhead !== undefined && nowAhead !== this.wasAhead) ev.push({ type: nowAhead ? 'overtake' : 'overtaken' });
    this.wasAhead = nowAhead;
    // end
    if (p.z >= this.cfg.dist) {
      this.state = 'done';
      this.won = p.z > rv.z;
      this.stars = this.won ? 2 + (p.bumps <= 2 ? 1 : 0) : 1;
      ev.push({ type: 'finish', won: this.won, stars: this.stars });
    } else if (this.time >= this.cfg.time) {
      this.state = 'done';
      this.won = false;
      this.stars = 0;
      ev.push({ type: 'timeup' });
    }
    return ev;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= 3; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(STAGES.length, Math.max(Math.floor(Number(o.unlocked)) || 1, ...Object.keys(stars).map((k) => Number(k) + 1)))), stars, muted: !!o.muted };
}
