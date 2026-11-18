// Obstacle course race with no drawing (used by «سباق السماء الغريبة» alien sky and «سباق الغيوم» rhino summit).
// The runner moves forward by itself; the child steers left/right, taps to jump and (alien) taps the jetpack to recover
// from a missed jump (3 bursts). Obstacles never end the game: a hit knocks the runner back a few metres, a fall puts it
// back on the ledge with a short pause. Rivals run beside. Three rounds: finish in the top K to qualify, win the final.
//   alien: gaps, rings (speed), doors that open and close, meteors, tube shortcuts, jetpack, rocket at the end
//   rhino: gaps, breakaway gates, spinning sweepers, swinging hammers, bounce pads, power-ups, golden gate at the end
import { rng, clamp } from '../../cozy_kit/ui.js';

export const HALF = 3.6;
export const ROUNDS = [
  { id: 1, len: 220, rivals: 5, qualify: 4 },
  { id: 2, len: 280, rivals: 5, qualify: 3 },
  { id: 3, len: 340, rivals: 5, qualify: 1 },
];
const G = 28;
const JUMP = 11;

export function buildCourse(theme, round, seed) {
  const r = rng(seed + round * 313 + (theme === 'alien' ? 5 : 11));
  const L = ROUNDS[round].len;
  const els = [];
  let id = 1;
  let z = 24;
  while (z < L - 24) {
    const k = r();
    const lane = (r() - 0.5) * 5.4;
    if (k < 0.2) { els.push({ id: id++, kind: 'gap', z, len: 4.8 + round * 0.7, x: 0, w: HALF * 2 + 2 }); z += 24; }
    else if (k < 0.36) {
      els.push(theme === 'alien'
        ? { id: id++, kind: 'door', z, x: 0, w: HALF * 2, phase: r() * 3, period: 3.2 }
        : { id: id++, kind: 'gate', z, x: 0, w: HALF * 2, hp: 1 });
      z += 18;
    } else if (k < 0.54) {
      els.push(theme === 'alien'
        ? { id: id++, kind: 'meteor', z, x: lane, phase: r() * 2, period: 2.6, rad: 1.7 }
        : { id: id++, kind: 'sweeper', z, x: 0, phase: r() * 6, speed: 1.6 + round * 0.3, radius: HALF + 0.3 });
      z += 18;
    } else if (k < 0.68) {
      els.push(theme === 'alien'
        ? { id: id++, kind: 'ring', z, x: lane, rad: 1.4 }
        : { id: id++, kind: 'hammer', z, x: lane, phase: r() * 6, speed: 2.2 });
      z += 16;
    } else if (k < 0.82) {
      els.push(theme === 'alien' ? { id: id++, kind: 'tube', z, x: lane, rad: 1.3, skip: 26 } : { id: id++, kind: 'pad', z, x: lane, rad: 1.4 });
      z += 20;
    } else {
      els.push({ id: id++, kind: 'boost', z, x: lane, rad: 1.3 });
      z += 14;
    }
  }
  return { L, els };
}

export class Race {
  /** opts: { theme: 'alien'|'rhino', round (0..2), easy, seed } */
  constructor(opts = {}) {
    this.theme = opts.theme || 'alien';
    this.round = clamp(opts.round ?? 0, 0, 2);
    this.cfg = ROUNDS[this.round];
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 3) + 77);
    const c = buildCourse(this.theme, this.round, opts.seed ?? 3);
    this.L = c.L;
    this.els = c.els;
    if (this.easy) for (const e of this.els) if (e.kind === 'gap') e.len = Math.max(3.4, e.len - 1.4);
    this.p = { x: 0, z: 0, y: 0, vy: 0, grounded: true, stun: 0, fall: 0, boost: 0, jets: 3, jet: 0, safeZ: 0, hits: 0, falls: 0, rings: 0, finished: false, place: 0 };
    this.rivals = Array.from({ length: this.cfg.rivals }, (_, i) => ({ id: i + 1, z: -2 - i * 1.4, x: -3 + i * 1.2, speed: 10.2 + this.rand() * 1.5 + this.round * 0.35, stumble: 0, nextS: 3 + this.rand() * 5, finished: false, t: 0 }));
    this.time = 0;
    this.go = 3; // countdown
    this.state = 'count'; // count -> run -> done
    this.finishCount = 0;
    this.events = [];
    this.targetX = 0;
    this.jumpReq = false;
  }

  steer(v) { this.targetX = clamp(v, -1, 1) * (HALF - 0.5); }
  jump() { this.jumpReq = true; }
  jetpack() {
    const p = this.p;
    if (this.theme !== 'alien' || p.jets <= 0 || p.stun > 0 || p.fall > 0) return false;
    p.jets -= 1;
    p.jet = 0.55;
    p.vy = Math.max(p.vy, 9);
    this.events.push({ type: 'jet' });
    return true;
  }

  get speed() { return (this.easy ? 10.5 : 12) * (this.p.boost > 0 ? 1.35 : 1); }

  _overGap(z) { for (const e of this.els) if (e.kind === 'gap' && z > e.z && z < e.z + e.len) return e; return null; }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'done') return ev;
    this.time += dt;
    const p = this.p;
    if (this.state === 'count') {
      this.go -= dt;
      if (this.go <= 0) { this.state = 'run'; ev.push({ type: 'go' }); }
      return ev;
    }
    // player
    p.boost = Math.max(0, p.boost - dt);
    p.stun = Math.max(0, p.stun - dt);
    p.x += (this.targetX - p.x) * Math.min(1, dt * 10);
    if (p.fall > 0) {
      p.fall -= dt;
      if (p.fall <= 0) { p.z = p.safeZ; p.y = 0; p.vy = 0; p.grounded = true; p.stun = 0.5; }
    } else {
      if (!p.finished) p.z += (p.stun > 0 ? this.speed * 0.25 : this.speed) * dt;
      if (this.jumpReq && p.grounded) { p.vy = JUMP; p.grounded = false; ev.push({ type: 'jump' }); }
      this.jumpReq = false;
      if (p.jet > 0) { p.jet -= dt; p.vy = Math.max(p.vy, 4); }
      const gap = this._overGap(p.z);
      const floorY = gap ? -99 : 0;
      p.vy -= G * dt;
      p.y += p.vy * dt;
      if (p.y <= floorY && p.vy <= 0) { if (!p.grounded) ev.push({ type: 'land' }); p.y = floorY; p.vy = 0; p.grounded = true; if (!gap) p.safeZ = Math.max(p.safeZ, p.z - 3 > 0 ? p.z - 3 : 0); } else if (p.y > 0.05 || gap) p.grounded = false;
      if (p.y < -4) { p.fall = 1.0; p.falls += 1; const g = this._overGap(p.z); p.safeZ = Math.max(0, (g ? g.z : p.z) - 3); ev.push({ type: 'fall' }); }
    }
    // obstacles
    for (const e of this.els) {
      if (e.hit && e.kind !== 'ring' && e.kind !== 'boost') continue;
      const dz = p.z - e.z;
      switch (e.kind) {
        case 'door': {
          const open = ((this.time + e.phase) % e.period) > e.period * 0.45;
          e.open = open;
          if (!open && dz > -0.4 && dz < 0.5 && p.y < 2.4 && p.stun <= 0 && !p.finished) { p.z = e.z - 1.2; p.stun = 0.5; p.hits += 1; ev.push({ type: 'hit', kind: 'door' }); }
          break;
        }
        case 'gate': if (!e.hit && dz > -0.4 && dz < 0.6 && !p.finished) { e.hit = true; p.boost = Math.max(p.boost, p.y > 0.8 ? 0 : 1.2); ev.push({ type: 'smash', kind: 'gate', diving: p.y <= 0.8 }); } break;
        case 'meteor': {
          const ph = (this.time + e.phase) % e.period;
          e.fall = ph / e.period; // 0..1 falling, impact at ~0.85-1
          if (ph > e.period * 0.85 && Math.abs(dz) < e.rad && Math.abs(p.x - e.x) < e.rad && p.y < 1.6 && p.stun <= 0 && !p.finished) { p.z -= 5; p.stun = 0.8; p.hits += 1; ev.push({ type: 'hit', kind: 'meteor' }); }
          break;
        }
        case 'sweeper': {
          const a = e.phase + this.time * e.speed;
          // the bar passes the runner's line when its angle is near +-pi/2 ... test the closest point on the bar
          const bx = Math.cos(a);
          const bz = Math.sin(a);
          const rx = p.x;
          const rz = dz;
          const tt = clamp(rx * bx + rz * bz, -e.radius, e.radius);
          const d = Math.hypot(rx - bx * tt, rz - bz * tt);
          if (d < 0.7 && p.y < 0.9 && p.stun <= 0 && !p.finished) { p.z = Math.max(0, p.z - 5); p.stun = 0.8; p.hits += 1; ev.push({ type: 'hit', kind: 'sweeper' }); }
          break;
        }
        case 'hammer': {
          const hx = e.x + Math.sin(this.time * e.speed + e.phase) * 2.4;
          e.hx = hx;
          if (Math.abs(dz) < 0.8 && Math.abs(p.x - hx) < 1.0 && p.y < 1.4 && p.stun <= 0 && !p.finished) { p.z = Math.max(0, p.z - 5); p.stun = 0.8; p.hits += 1; ev.push({ type: 'hit', kind: 'hammer' }); }
          break;
        }
        case 'ring': if (!e.hit && Math.abs(dz) < 1 && Math.abs(p.x - e.x) < e.rad && p.y < 3.4 && !p.finished) { e.hit = true; p.boost = 1.4; p.rings += 1; ev.push({ type: 'ring' }); } break;
        case 'boost': if (!e.hit && Math.abs(dz) < 1 && Math.abs(p.x - e.x) < e.rad && !p.finished) { e.hit = true; p.boost = 2; ev.push({ type: 'power' }); } break;
        case 'pad': if (!e.hit && Math.abs(dz) < 1 && Math.abs(p.x - e.x) < e.rad && !p.finished && p.grounded) { e.hit = true; p.vy = 16; p.grounded = false; ev.push({ type: 'bounce' }); setTimeout(() => {}, 0); } else if (e.hit && Math.abs(dz) > 3) e.hit = false; break;
        case 'tube': if (!e.hit && Math.abs(dz) < 1 && Math.abs(p.x - e.x) < e.rad && p.y < 1.2 && !p.finished) { e.hit = true; p.z += e.skip; p.stun = 0; ev.push({ type: 'tube' }); } break;
        default: break;
      }
    }
    // rivals
    for (const rv of this.rivals) {
      if (rv.finished) continue;
      rv.t += dt;
      if (rv.stumble > 0) rv.stumble -= dt; else { rv.nextS -= dt; if (rv.nextS <= 0) { rv.stumble = 0.8 + this.rand() * 0.6; rv.nextS = 4 + this.rand() * 6; } }
      const catchUp = rv.z < p.z - 30 ? 1.08 : rv.z > p.z + 30 ? 0.94 : 1;
      rv.z += (rv.stumble > 0 ? rv.speed * 0.15 : rv.speed) * catchUp * dt;
      if (rv.z >= this.L) { rv.finished = true; rv.place = ++this.finishCount; }
    }
    // finish
    if (!p.finished && p.z >= this.L) {
      p.finished = true;
      p.place = ++this.finishCount;
      // the others still on the course finish behind
      this.state = 'done';
      let ahead = 0;
      for (const rv of this.rivals) if (rv.finished) ahead += 1;
      p.place = ahead + 1;
      this.qualified = p.place <= this.cfg.qualify;
      this.won = this.round === 2 && p.place === 1;
      ev.push({ type: 'finish', place: p.place, qualified: this.qualified });
    }
    return ev;
  }

  /** Current position of the player among all runners (1 = first). */
  get place() {
    let n = 1;
    for (const rv of this.rivals) if (rv.z > this.p.z) n += 1;
    return n;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= 3; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(3, Math.floor(Number(o.unlocked)) || 1)), stars, wins: Math.max(0, Math.floor(Number(o.wins)) || 0), muted: !!o.muted };
}
