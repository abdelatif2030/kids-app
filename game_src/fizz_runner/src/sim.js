// Fizz Runner with no drawing: an endless-runner in the spirit of the classic soda-hero arcade game, with an ORIGINAL blue-and-silver
// hero «فيزمان» (Fizz Man) and generic fizzy cans (no real brands). The hero runs forward by himself down a three-lane street; the
// child switches lanes, jumps (barriers, cones, ramps for stunts) and slides (overhead bars), dodges cars and trucks, collects cans,
// magnets, shields and stars. Speed rises with distance. Six environments (city streets, downtown, shopping district, industrial
// area, highway with moving traffic, a fizzy bonus level), each ~1200 m, with missions and a high score. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const LANES = [-2.6, 0, 2.6];
export const ENVS = [
  { id: 'city', ar: 'شوارع المدينة', en: 'City Streets', len: 1200 },
  { id: 'downtown', ar: 'وسط البلد المزدحم', en: 'Busy Downtown', len: 1300 },
  { id: 'shops', ar: 'منطقة المحلات', en: 'Shopping District', len: 1400 },
  { id: 'industry', ar: 'المنطقة الصناعية', en: 'Industrial Area', len: 1500 },
  { id: 'highway', ar: 'الطريق السريع', en: 'Highway', len: 1600 },
  { id: 'bonus', ar: 'مرحلة الفيز السحرية', en: 'Fizzy Bonus', len: 1000 },
];
const G = 32;
const JUMP = 12.6;
export const MISSIONS = [
  { id: 'cans50', ar: 'اجمع ٥٠ علبة', en: 'Collect 50 cans', kind: 'cans', goal: 50 },
  { id: 'dist1000', ar: 'اجري ١٠٠٠ متر', en: 'Run 1000 m', kind: 'dist', goal: 1000 },
  { id: 'stunt5', ar: 'اعمل ٥ حركات استعراضية', en: 'Do 5 stunts', kind: 'stunts', goal: 5 },
  { id: 'dodge30', ar: 'اتفادى ٣٠ عائق', en: 'Dodge 30 obstacles', kind: 'dodged', goal: 30 },
  { id: 'magnet3', ar: 'خد ٣ مغناطيس', en: 'Grab 3 magnets', kind: 'magnets', goal: 3 },
];

export function chunk(env, idx, r, speedK) {
  const out = [];
  const z0 = 30 + idx * 16;
  const lane = () => Math.floor(r() * 3);
  const heavy = env === 'highway' || env === 'industry';
  const k = r();
  const hard = Math.min(0.6, speedK * 0.12);
  if (k < 0.3) { const l = lane(); out.push({ kind: r() < 0.5 ? 'barrier' : 'cone', lane: l, z: z0 }); for (let i = 0; i < 4; i++) out.push({ kind: 'can', lane: l, z: z0 + 3 + i * 1.6, y: 1.8 }); }
  else if (k < 0.5) { const l = lane(); out.push({ kind: heavy ? 'truck' : 'car', lane: l, z: z0 }); if (r() < 0.5 + hard) out.push({ kind: 'car', lane: (l + 1 + Math.floor(r() * 2)) % 3, z: z0 + 4 }); }
  else if (k < 0.62) out.push({ kind: 'overhead', lane: -1, z: z0 });
  else if (k < 0.72 && env !== 'highway') { const l = lane(); out.push({ kind: 'ramp', lane: l, z: z0 }); for (let i = 0; i < 4; i++) out.push({ kind: 'can', lane: l, z: z0 + 4 + i * 1.5, y: 4.2 }); }
  else if (k < 0.9) { const l = lane(); for (let i = 0; i < 6; i++) out.push({ kind: 'can', lane: l, z: z0 + i * 1.6, y: 0.9 }); }
  else { out.push({ kind: ['magnet', 'shield', 'star'][Math.floor(r() * 3)], lane: lane(), z: z0, y: 1.0 }); }
  if (env === 'highway' && r() < 0.5) out.push({ kind: 'movecar', lane: lane(), z: z0 + 8, v: 6 });
  return out;
}

export class Run {
  /** opts: { env (0..5), seed, easy } */
  constructor(opts = {}) {
    this.envIdx = clamp(opts.env ?? 0, 0, ENVS.length - 1);
    this.env = ENVS[this.envIdx];
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 5) + this.envIdx * 31);
    this.z = 0; this.lane = 1; this.x = 0; this.y = 0; this.vy = 0; this.slide = 0; this.stunt = 0;
    this.speed = this.easy ? 12 : 15;
    this.cans = 0; this.stars = 0; this.score = 0; this.stuntsDone = 0; this.dodged = 0; this.magnets = 0;
    this.magnet = 0; this.shield = 0; this.starT = 0; this.inv = 0; this.hit = 0;
    this.things = []; this.next = 0; this.state = 'run'; this.time = 0; this.events = [];
    this.fill();
  }

  fill() { while (this.next < Math.ceil((this.z + 130) / 16)) { for (const t of chunk(this.env.id, this.next, this.rand, (this.speed - 12) / 6)) this.things.push({ ...t, done: false, id: this.things.length + 1 }); this.next += 1; } }

  left() { this.lane = clamp(this.lane - 1, 0, 2); }
  right() { this.lane = clamp(this.lane + 1, 0, 2); }
  jump() { if (this.y <= 0.01 && this.state === 'run') { this.vy = JUMP; this.slide = 0; this.events.push({ type: 'jump' }); } }
  doSlide() { if (this.state !== 'run') return; if (this.y > 0.5) { this.vy = -14; } this.slide = 0.7; this.events.push({ type: 'slide' }); }

  step(dt) {
    const ev = (this.events = []);
    if (this.state !== 'run') return ev;
    this.time += dt;
    this.speed = Math.min(this.easy ? 22 : 30, (this.easy ? 12 : 15) + this.z / 90);
    this.z += this.speed * dt;
    this.x += (LANES[this.lane] - this.x) * Math.min(1, dt * 12);
    if (this.y > 0 || this.vy > 0) { this.vy -= G * dt; this.y = Math.max(0, this.y + this.vy * dt); if (this.y === 0) { this.vy = 0; if (this.stunt > 0) { this.stuntsDone += 1; this.score += 300; ev.push({ type: 'stunt' }); } this.stunt = 0; ev.push({ type: 'land' }); } }
    this.slide = Math.max(0, this.slide - dt); this.magnet = Math.max(0, this.magnet - dt); this.shield = Math.max(0, this.shield - dt); this.starT = Math.max(0, this.starT - dt); this.inv = Math.max(0, this.inv - dt);
    this.score += this.speed * dt * 0.5;
    this.fill();
    for (const t of this.things) {
      if (t.done) continue;
      if (t.kind === 'movecar') t.z += t.v * dt * (this.speed > 18 ? 1 : 0.6);
      const dz = t.z - this.z;
      if (dz < -4) { if (!t.passed) { t.passed = true; if (['barrier', 'cone', 'car', 'truck', 'overhead', 'movecar'].includes(t.kind)) { this.dodged += 1; } } continue; }
      const sameLane = t.lane === this.lane || (t.lane === -1) || Math.abs(LANES[t.lane] - this.x) < 1.3;
      if (t.kind === 'can') { if (Math.abs(dz) < 1.1 && (sameLane || (this.magnet > 0 && Math.abs(LANES[t.lane] - this.x) < 6)) && Math.abs(t.y - this.y - 1) < 2.6) { t.done = true; this.cans += 1; this.score += 10; ev.push({ type: 'can' }); } else if (this.magnet > 0 && dz < 14 && dz > 0) t.lane = this.lane; continue; }
      if (['magnet', 'shield', 'star'].includes(t.kind)) { if (Math.abs(dz) < 1.2 && sameLane) { t.done = true; if (t.kind === 'magnet') { this.magnet = 9; this.magnets += 1; } else if (t.kind === 'shield') this.shield = 10; else { this.starT = 6; this.score += 500; } ev.push({ type: 'power', kind: t.kind }); } continue; }
      if (t.kind === 'ramp') { if (Math.abs(dz) < 1.2 && sameLane && !t.used) { t.used = true; this.vy = 15; this.y = 0.1; this.stunt = 1; ev.push({ type: 'ramp' }); } continue; }
      // obstacles
      if (Math.abs(dz) > 1.2 || !sameLane) continue;
      let hits = false;
      if (t.kind === 'barrier' || t.kind === 'cone') hits = this.y < 1.1;
      else if (t.kind === 'overhead') hits = this.slide <= 0 && this.y < 2.4;
      else if (t.kind === 'car' || t.kind === 'truck' || t.kind === 'movecar') hits = this.y < (t.kind === 'truck' ? 3.2 : 1.6);
      if (hits && this.inv <= 0) {
        if (this.starT > 0) { t.done = true; this.score += 100; ev.push({ type: 'smash' }); }
        else if (this.shield > 0) { this.shield = 0; this.inv = 1.2; t.done = true; ev.push({ type: 'shieldHit' }); }
        else { this.state = 'over'; this.finalScore = Math.round(this.score); ev.push({ type: 'over' }); }
      }
    }
    this.things = this.things.filter((t) => t.z > this.z - 8 && !(t.done && t.kind !== 'ramp'));
    if (this.z >= this.env.len) { this.state = 'won'; this.finalScore = Math.round(this.score + 1000); ev.push({ type: 'won' }); }
    return ev;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const best = {};
  for (let i = 0; i < ENVS.length; i++) { const v = Number(o.best && o.best[i]); if (v > 0) best[i] = Math.floor(v); }
  const done = {}; for (const m of MISSIONS) if (o.done && o.done[m.id]) done[m.id] = true;
  const stars = {}; for (let i = 0; i < ENVS.length; i++) { const v = Number(o.stars && o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, ENVS.length), best, stars, done, totalCans: Math.max(0, Math.floor(Number(o.totalCans)) || 0), totalDist: Math.max(0, Math.floor(Number(o.totalDist)) || 0), muted: !!o.muted };
}
