// Sunset highway race with no drawing. A red sports car drives a palm-lined coastal highway (4 lanes, busy traffic, bends).
// Goal: reach the finish line before the clock runs out AND ahead of the rival. Steer between lanes, weave through cars and
// trucks (a bump only slows you for a moment: no crashes), use nitro bursts on clear gaps. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 6;
export const LANES = [-4.5, -1.5, 1.5, 4.5];
// Owner 2026-11-27: stages were over in a minute or two — each stage now runs up to ~5 minutes, every stage
// looks different, and each one is harder than the last (denser traffic, more trucks, a faster rival, and
// traffic cones joining the road from stage 3 as a brand-new thing to dodge).
export const STAGES = [
  { id: 1, ar: 'شلالات الريان', en: 'Rayan Waterfalls', dist: 4800, time: 225, traffic: 1.0, rival: 35.7, trucks: 0.28, cones: 0, gentle: 6 },
  { id: 2, ar: 'جبال السخنة', en: 'Sokhna Mountains', dist: 5800, time: 262, traffic: 1.2, rival: 36.3, trucks: 0.32, cones: 0, gentle: 11 },
  { id: 3, ar: 'ليل العلمين', en: 'Alamein Night', dist: 6800, time: 300, traffic: 1.4, rival: 36.9, trucks: 0.36, cones: 0.5, gentle: 18 },
  { id: 4, ar: 'الصحرا البيضا', en: 'White Desert', dist: 7800, time: 335, traffic: 1.55, rival: 37.4, trucks: 0.40, cones: 0.8, gentle: 34 },
  { id: 5, ar: 'فنار بورسعيد', en: 'Port Said Light', dist: 8800, time: 372, traffic: 1.6, rival: 37.8, trucks: 0.42, cones: 1, gentle: 52 },
  { id: 6, ar: 'بحيرات الجونة', en: 'Gouna Lagoons', dist: 9800, time: 408, traffic: 1.7, rival: 38.2, trucks: 0.44, cones: 1, gentle: 58 },
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
    this.p = { x: 1.5, z: 0, v: 0, vx: 0, gear: 1, rpm: 0, accel: 0, nitro: 0, charges: 3, bump: 0, inv: 0, bumps: 0, carBumps: 0, lead: 0 };
    this.rival = { x: -1.5, z: 55, v: 0, lane: 1, laneT: 2 };
    this.traffic = [];
    let z = 60;
    let id = 1;
    while (z < this.cfg.dist + 100) {
      const truck = this.rand() < this.cfg.trucks;
      this.traffic.push({ id: id++, lane: Math.floor(this.rand() * 4), z, v: truck ? 8 + this.rand() * 4 : 12 + this.rand() * 6, truck });
      if (this.cfg.cones && this.rand() < this.cfg.cones * 0.10) this.traffic.push({ id: id++, cone: true, lane: Math.floor(this.rand() * 4), z: z + 8, v: 0, truck: false });
      z += (this.easy ? 26 : 18) / this.cfg.traffic * (0.6 + this.rand() * 0.9);
    }
    // road collectibles: friendly stars to scoop up (pure joy — each one sings a higher note)
    this.pickups = [];
    for (let pz = 170; pz < this.cfg.dist - 120; pz += 150 + this.rand() * 90) this.pickups.push({ z: pz, lane: Math.floor(this.rand() * 4), got: false });
    this.starsGot = 0;
    // milestone surprises at a quarter, half and three quarters of the stage
    this.miles = [0.25, 0.5, 0.75].map((f) => ({ at: Math.round(this.cfg.dist * f), hit: false }));
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
    // Lateral dynamics: a spring-damper pulls the car toward the finger. It has weight now — the car
    // leans into a lane change, overshoots a hair, then settles — instead of gliding on rails.
    this.targetX = clamp(this.targetX, -(HALF - 1.1), HALF - 1.1);
    const latK = 30 * (1 - 0.22 * Math.min(1, p.v / 40)); // a touch looser at speed: fast changes feel big
    p.vx += ((this.targetX - p.x) * latK - p.vx * 10.5) * dt;
    p.vx = clamp(p.vx, -16, 16);
    p.x += p.vx * dt;
    if (p.x < -HALF + 0.9 || p.x > HALF - 0.9) { p.x = clamp(p.x, -HALF + 0.9, HALF - 0.9); p.vx = 0; }
    // Longitudinal dynamics: five gears. Pull is strong low in a gear and fades near the shift point,
    // so the car surges, breathes, and surges again — and the engine note (gear + rpm) follows.
    const cruise = this.easy ? 32 : 37; // about 115 / 133 km/h (owner 2026-11-26: the race felt slow)
    const top = cruise * (p.nitro > 0 ? 1.4 : 1);
    // a bump scrubs speed briefly, then the target rises back as the bump timer fades — a stumble, not a wall
    const target = p.bump > 0 ? cruise * (0.5 + 0.5 * (1 - p.bump)) : top;
    p.bump = Math.max(0, p.bump - dt);
    const GEARS = [0.24, 0.45, 0.65, 0.83, 1.01];
    let gi = 0;
    while (gi < GEARS.length - 1 && p.v > GEARS[gi] * cruise) gi++;
    const bandLo = gi === 0 ? 0 : GEARS[gi - 1] * cruise;
    const bandHi = GEARS[gi] * cruise;
    p.gear = gi + 1;
    p.rpm = clamp((p.v - bandLo) / Math.max(1, bandHi - bandLo), 0, 1);
    const vPrev = p.v;
    if (p.v < target) {
      const force = 15 * (1 - 0.18 * p.rpm) * (p.nitro > 0 ? 1.45 : 1);
      const drag = 0.9 + p.v * 0.012;
      p.v = Math.min(target, p.v + Math.max(0.6, force - drag) * dt);
    } else {
      p.v = Math.max(target, p.v - 7 * dt); // engine braking / bump slowdown bites firmly
    }
    p.accel = dt > 0 ? (p.v - vPrev) / dt : 0;
    p.z += p.v * dt;
    // traffic
    for (const c of this.traffic) {
      c.z += c.v * dt;
      const dz = c.z - p.z;
      const cx = LANES[c.lane];
      if (c.cone) { // a cone only tips over: a small stumble, never a crash
        if (!c.hit && p.inv <= 0 && Math.abs(dz) < 2.0 && Math.abs(cx - p.x) < 0.95) {
          c.hit = true; p.bump = Math.max(p.bump, 0.55); p.inv = Math.max(p.inv, 0.5); p.bumps += 1;
          ev.push({ type: 'bump', cone: true });
        }
        continue;
      }
      // a clean pass with little room to spare is a near miss — the crowd-pleaser moment
      if (!c.counted && dz < -2.5) {
        c.counted = true;
        const gap = Math.abs(cx - p.x);
        if (p.inv <= 0 && gap >= (c.truck ? 2.0 : 1.7) && gap < 3.4 && p.v > 18) ev.push({ type: 'near', truck: c.truck });
      }
      if (p.inv > 0) continue;
      if (Math.abs(dz) < (c.truck ? 4.2 : 3.0) && Math.abs(cx - p.x) < (c.truck ? 2.0 : 1.7)) {
        p.bump = 1.0; p.inv = 1.4; p.bumps += 1; p.carBumps += 1;
        p.x += cx > p.x ? -0.8 : 0.8;
        p.vx += cx > p.x ? -3.5 : 3.5; // the shove has weight now
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
    // rubber-banding: the rival is a kind sparring partner — the further ahead he gets, the
    // more he eases off, so the child is always in a close race and can always catch up.
    // He never speeds past his stage pace. Easy mode (age 3) is slower still: nearly unlosable.
    const gap = p.z - rv.z;
    let rb = 1;
    if (gap < -40) rb = Math.max(this.easy ? 0.78 : 0.86, 1 + (gap + 40) * 0.0011);
    const rvTarget = this.cfg.rival * (this.easy ? 0.84 : 1) * rb * (blocked ? 0.72 : 1);
    rv.v += (rvTarget - rv.v) * Math.min(1, dt * 2);
    rv.z += rv.v * dt;
    p.lead = p.z - rv.z;
    if (p.z > this.nextCharge) { this.nextCharge += 500; p.charges = Math.min(3, p.charges + 1); ev.push({ type: 'charge' }); }
    // scooping up road stars + milestone surprises
    for (const pk of this.pickups) {
      if (pk.got) continue;
      if (pk.z < p.z - 6) continue;
      if (pk.z > p.z + 4) break;
      if (Math.abs(pk.z - p.z) < 3.2 && Math.abs(LANES[pk.lane] - p.x) < 1.7) { pk.got = true; this.starsGot++; ev.push({ type: 'pickup', n: this.starsGot }); }
    }
    for (const m of this.miles) if (!m.hit && p.z >= m.at) { m.hit = true; ev.push({ type: 'milestone', at: m.at }); }
    // lead changes
    const nowAhead = p.z > rv.z;
    if (this.wasAhead !== undefined && nowAhead !== this.wasAhead) ev.push({ type: nowAhead ? 'overtake' : 'overtaken' });
    this.wasAhead = nowAhead;
    // end
    if (p.z >= this.cfg.dist) {
      this.state = 'done';
      this.won = p.z > rv.z;
      // the third star rewards gentle driving: only CAR bumps count (cone taps are just
      // stumbles), and the allowance grows with each stage's length and traffic — tuned so a
      // good driver earns it everywhere and a child can earn it on the early stages.
      this.stars = this.won ? 2 + (p.carBumps <= this.cfg.gentle ? 1 : 0) : 1;
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
  for (let i = 1; i <= STAGES.length; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  const color = Math.max(0, Math.min(3, Math.floor(Number(o.color)) || 0));
  return { unlocked: Math.max(1, Math.min(STAGES.length, Math.max(Math.floor(Number(o.unlocked)) || 1, ...Object.keys(stars).map((k) => Number(k) + 1)))), stars, muted: !!o.muted, color };
}
