// «أسماك الأعماق» — the rules with no drawing. A small fish swims (drag to steer) and eats sea creatures smaller than
// itself to grow; bigger predators chase it and, after a short "!" warning, lunge — a short DASH (button) catches prey
// or escapes. Each level is a timed challenge: grow to the goal size before the time runs out. Three levels: Sunlit
// Reef (bait balls), Kelp Forest (hunt the squid), Deep Trench (grow big enough to devour the shark). Sizes are in cm;
// one world unit is 10 cm. Losing all lives or the time only means "try again". Deterministic with a seed for tests.

export const SPECIES = {
  plankton: { cm: [2, 3], speed: 0.4, school: 0, color: 'g', ar: 'بلانكتون', en: 'Plankton' },
  shrimp: { cm: [3, 5], speed: 1.2, ar: 'جمبري', en: 'Shrimp' },
  sardine: { cm: [4, 7], speed: 3.0, school: 1, ar: 'سردين', en: 'Sardine' },
  damsel: { cm: [6, 10], speed: 2.2, ar: 'سمكة صغيرة', en: 'Damselfish' },
  butterfly: { cm: [11, 18], speed: 2.0, school: 1, ar: 'سمكة الفراشة', en: 'Butterflyfish' },
  puffer: { cm: [16, 24], speed: 1.3, ar: 'السمكة المنفوخة', en: 'Pufferfish' },
  grouper: { cm: [50, 70], speed: 2.4, predator: true, ar: 'الهامور', en: 'Grouper' },
  squid: { cm: [35, 70], speed: 3.4, squid: true, ar: 'حبار', en: 'Squid' },
  mackerel: { cm: [25, 40], speed: 3.2, school: 1, ar: 'ماكريل', en: 'Mackerel' },
  barracuda: { cm: [110, 140], speed: 3.6, predator: true, ar: 'باراكودا', en: 'Barracuda' },
  lantern: { cm: [30, 60], speed: 1.8, ar: 'سمكة الفانوس', en: 'Lanternfish' },
  angler: { cm: [90, 150], speed: 2.2, predator: true, ar: 'أبو الشص', en: 'Anglerfish' },
  tuna: { cm: [80, 130], speed: 3.4, school: 1, ar: 'تونة', en: 'Tuna' },
  shark: { cm: [240, 240], speed: 3.8, predator: true, boss: true, ar: 'القرش', en: 'Shark' },
};

export const LEVELS = [
  { id: 1, ar: 'الشعاب المشمسة', en: 'Sunlit Reef', biome: 'reef', start: 10, goal: 45, time: 110, star3: 60, star2: 85, half: 48,
    mix: [['plankton', 4], ['shrimp', 3], ['damsel', 4], ['butterfly', 3], ['puffer', 2], ['grouper', 1]], bait: 'sardine' },
  { id: 2, ar: 'غابة الأعشاب البحرية', en: 'Kelp Forest', biome: 'kelp', start: 30, goal: 110, time: 120, star3: 70, star2: 95, half: 75,
    mix: [['butterfly', 3], ['puffer', 2], ['mackerel', 4], ['squid', 4], ['barracuda', 1]], bait: 'mackerel', task: { kind: 'squid', n: 3 } },
  { id: 3, ar: 'أخدود الأعماق', en: 'Deep Trench', biome: 'trench', start: 70, goal: 250, time: 140, star3: 85, star2: 115, half: 120,
    mix: [['lantern', 4], ['squid', 3], ['tuna', 3], ['angler', 1], ['barracuda', 1]], bait: 'lantern', boss: 'shark' },
];

export const EAT = 0.9; // you can eat anything up to 90% of your size
export const DANGER = 1.15; // anything 15% bigger than you can bite you
const DASH_T = 0.45;
const DASH_CD = 2.2;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const U = (cm) => cm / 10; // world units

export class Sea {
  /** opts: { level (0..2), easy, seed } */
  constructor(opts = {}) {
    this.levelIndex = Math.max(0, Math.min(LEVELS.length - 1, opts.level ?? 0));
    this.level = LEVELS[this.levelIndex];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 5);
    this.half = this.level.half;
    this.fish = { x: 0, z: 0, cm: this.level.start, a: Math.PI, vx: 0, vz: 0, dashT: 0, dashCd: 0, invul: 0, y: 0 };
    this.lives = this.easy ? 4 : 3;
    this.maxLives = this.lives;
    this.left = this.level.time * (this.easy ? 1.25 : 1);
    this.t = 0;
    this.state = 'play'; // play -> boss -> won | lost
    this.creatures = [];
    this.nextId = 1;
    this.eaten = 0;
    this.squid = 0;
    this.combo = 0;
    this.comboT = 0;
    this.baitT = 18;
    this.move = { x: 0, z: 0 };
    this.events = [];
    this.pending = [];
    for (let i = 0; i < 32; i++) this._spawn(true);
  }

  get r() { return U(this.fish.cm) * 0.5; }
  get goalCm() { return this.level.goal; }
  setMove(x, z) { const l = Math.hypot(x, z); this.move = l > 1 ? { x: x / l, z: z / l } : { x, z }; }

  dash() {
    const f = this.fish;
    if (f.dashCd > 0 || this.state === 'won' || this.state === 'lost') return false;
    f.dashT = DASH_T;
    f.dashCd = DASH_CD;
    this.pending.push({ type: 'dash' });
    return true;
  }

  // ---- creatures ------------------------------------------------------------------------------------------------------

  _pickKind() {
    const mix = this.level.mix;
    const tot = mix.reduce((a, [, w]) => a + w, 0);
    let r = this.rand() * tot;
    for (const [k, w] of mix) { r -= w; if (r <= 0) return k; }
    return mix[0][0];
  }

  _spawn(anywhere = false, kind = this._pickKind(), near = null, cmOverride) {
    // never too many hunters at once (one on the reef, two later)
    const cap = this.levelIndex === 0 ? 1 : 2;
    if (SPECIES[kind].predator && !SPECIES[kind].boss && this.creatures.filter((c) => SPECIES[c.kind].predator).length >= cap) kind = this.level.mix[0][0];
    const sp = SPECIES[kind];
    const f = this.fish;
    let x;
    let z;
    for (let i = 0; i < 12; i++) {
      if (near) { x = near.x + (this.rand() - 0.5) * 6; z = near.z + (this.rand() - 0.5) * 6; break; }
      x = (this.rand() * 2 - 1) * (this.half - 4);
      z = (this.rand() * 2 - 1) * (this.half - 4);
      const d = Math.hypot(x - f.x, z - f.z);
      if (d > (anywhere ? 8 : 16) && d < 45) break;
    }
    // sizes follow the fish a little so there is always food and always something to fear
    let cm = cmOverride ?? sp.cm[0] + this.rand() * (sp.cm[1] - sp.cm[0]);
    if (!sp.predator && !cmOverride && kind !== 'plankton') cm = Math.max(cm, Math.min(cm * 2, f.cm * (0.2 + this.rand() * 0.45)));
    const c = { id: this.nextId++, kind, x, z, cm, a: this.rand() * 6.28, t: this.rand() * 10, y: (this.rand() - 0.5) * 2, warn: 0, lunge: 0, cool: 1 + this.rand() * 2, ink: 0 };
    this.creatures.push(c);
    return c;
  }

  _bait() {
    // a bait ball: a big swirling school of small fish arrives near the player
    const f = this.fish;
    const a = this.rand() * 6.28;
    const near = { x: f.x + Math.cos(a) * 14, z: f.z + Math.sin(a) * 14 };
    const kind = this.level.bait;
    for (let i = 0; i < 16; i++) { const c = this._spawn(false, kind, near, Math.max(SPECIES[kind].cm[0], f.cm * (0.3 + this.rand() * 0.25))); c.bait = near; c.ang = (i / 16) * 6.28; }
    this.events.push({ type: 'bait', x: near.x, z: near.z });
  }

  _moveCreature(c, dt) {
    const sp = SPECIES[c.kind];
    const f = this.fish;
    c.t += dt;
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.hypot(dx, dz) || 1;
    let speed = sp.speed * (0.7 + Math.min(1.5, U(c.cm) * 0.25));
    const bigger = c.cm > f.cm * DANGER;
    const edible = c.cm <= f.cm * EAT;
    if (c.bait) {
      // swirl around the ball's centre
      c.ang += dt * 1.4;
      const tx = c.bait.x + Math.cos(c.ang) * 3.5;
      const tz = c.bait.z + Math.sin(c.ang) * 3.5;
      c.a = Math.atan2(tx - c.x, tz - c.z);
      speed = 5;
      if (d < 6) { c.bait = null; c.a = Math.atan2(-dx, -dz); }
    } else if (sp.predator && bigger && this.state !== 'won') {
      // hunt the player: warn ("!") then lunge
      if (d < 18 && f.invul <= 0 && this.t > 8) c.a = turn(c.a, Math.atan2(dx, dz), 1.8 * dt);
      else c.a += Math.sin(c.t * 0.5) * 0.6 * dt;
      c.cool -= dt;
      if (c.warn > 0) { c.warn -= dt; speed *= 0.3; if (c.warn <= 0) { c.lunge = 0.7; this.events.push({ type: 'lunge', id: c.id, kind: c.kind }); } } else if (c.lunge > 0) { c.lunge -= dt; speed *= 2.6; } else if (c.cool <= 0 && this.t > 12 && d < 7 + U(c.cm) * 0.3 && f.invul <= 0) {
        c.warn = this.easy ? 1.0 : 0.7;
        c.cool = 4 + this.rand() * 2.5;
        this.events.push({ type: 'warn', id: c.id, kind: c.kind });
      } else speed *= d < 18 ? 0.75 : 0.5;
    } else if (edible && d < 7 + this.r) {
      // smaller ones flee (the squid jets away and leaves ink)
      c.a = turn(c.a, Math.atan2(-dx, -dz), 4 * dt);
      speed *= sp.squid ? 1.6 : 1.25;
      if (sp.squid && c.ink <= 0 && d < 5 + this.r) { c.ink = 3; this.events.push({ type: 'ink', x: c.x, z: c.z }); }
    } else c.a += Math.sin(c.t * 0.7 + c.id) * 0.8 * dt;
    c.ink = Math.max(0, c.ink - dt);
    c.x += Math.sin(c.a) * speed * dt;
    c.z += Math.cos(c.a) * speed * dt;
    const lim = this.half - 1;
    if (Math.abs(c.x) > lim) { c.x = Math.sign(c.x) * lim; c.a = -c.a; }
    if (Math.abs(c.z) > lim) { c.z = Math.sign(c.z) * lim; c.a = Math.PI - c.a; }
    c.y = Math.sin(c.t * 0.8 + c.id) * 0.6;
  }

  // ---- the step ------------------------------------------------------------------------------------------------------

  step(dt) {
    this.events = this.pending;
    this.pending = [];
    if (this.state === 'won' || this.state === 'lost') return this.events;
    this.t += dt;
    const f = this.fish;
    this.left -= dt;
    if (this.left <= 0) { this.left = 0; this._end(false, 'time'); return this.events; }
    f.invul = Math.max(0, f.invul - dt);
    f.dashCd = Math.max(0, f.dashCd - dt);
    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    // swimming: smooth turns, faster while dashing
    const L = U(f.cm);
    const top = (2.6 + L * 0.9) * (f.dashT > 0 ? 2.6 : 1);
    if (f.dashT > 0) f.dashT -= dt;
    const m = Math.hypot(this.move.x, this.move.z);
    const wantX = m > 0.1 ? this.move.x * top : f.dashT > 0 ? Math.sin(f.a) * top : 0;
    const wantZ = m > 0.1 ? this.move.z * top : f.dashT > 0 ? Math.cos(f.a) * top : 0;
    const k = Math.min(1, dt * (f.dashT > 0 ? 10 : 4));
    f.vx += (wantX - f.vx) * k;
    f.vz += (wantZ - f.vz) * k;
    f.x += f.vx * dt;
    f.z += f.vz * dt;
    if (Math.hypot(f.vx, f.vz) > 0.3) f.a = turn(f.a, Math.atan2(f.vx, f.vz), 8 * dt);
    const lim = this.half - this.r - 1;
    f.x = Math.max(-lim, Math.min(lim, f.x));
    f.z = Math.max(-lim, Math.min(lim, f.z));
    for (const c of this.creatures) this._moveCreature(c, dt);
    // eating and being bitten
    const mouthX = f.x + Math.sin(f.a) * this.r * 0.8;
    const mouthZ = f.z + Math.cos(f.a) * this.r * 0.8;
    for (const c of this.creatures) {
      const cr = U(c.cm) * 0.5;
      if (c.cm <= f.cm * EAT) {
        if (Math.hypot(c.x - mouthX, c.z - mouthZ) < cr + this.r * 0.75) this._eat(c);
      } else if (c.cm > f.cm * DANGER && SPECIES[c.kind].predator) {
        const bite = Math.hypot(f.x - (c.x + Math.sin(c.a) * cr * 0.8), f.z - (c.z + Math.cos(c.a) * cr * 0.8));
        if (bite < this.r + cr * 0.45 && f.invul <= 0 && f.dashT <= 0) this._bitten(c);
      }
    }
    if (this.creatures.some((c) => c.gone)) this.creatures = this.creatures.filter((c) => !c.gone);
    // more life in the sea; a bait ball now and then
    const want = this.state === 'boss' ? 22 : 32;
    if (this.creatures.length < want && this.rand() < dt * 2.5) this._spawn();
    this.creatures = this.creatures.filter((c) => SPECIES[c.kind].predator || c.cm >= f.cm * 0.08 || c.kind === 'plankton');
    this.baitT -= dt;
    if (this.baitT <= 0) { this.baitT = 24 + this.rand() * 10; this._bait(); }
    // the goal
    const taskDone = !this.level.task || this.squid >= this.level.task.n;
    if (this.state === 'play' && f.cm >= this.level.goal && taskDone) {
      if (this.level.boss) {
        this.state = 'boss';
        const s = this._spawn(false, 'shark', { x: f.x + 20, z: f.z - 20 }, SPECIES.shark.cm[0]);
        s.boss = true;
        this.events.push({ type: 'boss' });
      } else this._end(true);
    }
    return this.events;
  }

  _eat(c) {
    const f = this.fish;
    c.gone = true;
    this.eaten++;
    if (SPECIES[c.kind].squid) this.squid++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = 2;
    const gain = Math.min(c.cm * 0.2 * (1 + Math.min(4, this.combo - 1) * 0.08), this.level.goal * 1.2 - f.cm > 0 ? 999 : 0.2);
    f.cm = Math.round((f.cm + gain) * 10) / 10;
    this.events.push({ type: 'eat', kind: c.kind, cm: c.cm, gain, combo: this.combo, x: c.x, z: c.z, dash: f.dashT > 0 });
    if (c.boss) this._end(true);
  }

  _bitten(c) {
    const f = this.fish;
    this.lives--;
    f.invul = 2.2;
    this.combo = 0;
    // pushed away (the fish escapes, a little smaller)
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const l = Math.hypot(dx, dz) || 1;
    f.vx = (dx / l) * 10;
    f.vz = (dz / l) * 10;
    f.cm = Math.max(this.level.start, Math.round(f.cm * 0.94 * 10) / 10);
    c.lunge = 0;
    c.cool = 3;
    this.events.push({ type: 'bitten', kind: c.kind, lives: this.lives });
    if (this.lives <= 0) this._end(false, c.kind);
  }

  _end(won, by) {
    this.state = won ? 'won' : 'lost';
    const used = this.level.time * (this.easy ? 1.25 : 1) - this.left;
    const stars = won ? 1 + (used <= this.level.star2 * (this.easy ? 1.25 : 1) ? 1 : 0) + (used <= this.level.star3 * (this.easy ? 1.25 : 1) ? 1 : 0) : 0;
    this.result = { won, stars, cm: this.fish.cm, eaten: this.eaten, squid: this.squid, time: Math.round(used), by };
    this.events.push({ type: won ? 'won' : 'lost', by });
  }
}

function turn(a, b, k) {
  let d = b - a;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  return a + Math.max(-k, Math.min(k, d));
}

/** A robot child: flees predators (dash when one lunges), chases the best food, hunts the shark at the end. */
export function robotSwim(s) {
  const f = s.fish;
  let ax = 0;
  let az = 0;
  let dash = false;
  for (const c of s.creatures) {
    if (!(SPECIES[c.kind].predator && c.cm > f.cm * DANGER)) continue;
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.max(0.5, Math.hypot(dx, dz));
    if (d < 16 + U(c.cm) * 0.5) { const w = (c.warn > 0 || c.lunge > 0 ? 4 : 1.5) / d; ax += (dx / d) * w * 8; az += (dz / d) * w * 8; }
    if ((c.warn > 0 || c.lunge > 0) && d < 9 + U(c.cm) * 0.5) dash = true;
  }
  let best = null;
  for (const c of s.creatures) {
    if (c.cm > f.cm * EAT) continue;
    const d = Math.hypot(c.x - f.x, c.z - f.z);
    const danger = s.creatures.some((p) => SPECIES[p.kind].predator && p.cm > f.cm * DANGER && Math.hypot(p.x - c.x, p.z - c.z) < 10);
    const sc = d / (0.3 + c.cm / f.cm) + (danger ? 40 : 0) - (s.level.task && c.kind === s.level.task.kind && f.cm >= s.level.goal * 0.6 ? 25 : 0);
    if (!best || sc < best.sc) best = { c, sc, d };
  }
  if (best) { ax += ((best.c.x - f.x) / (best.d || 1)) * 1.2; az += ((best.c.z - f.z) / (best.d || 1)) * 1.2; if (best.d < 4 && best.c.cm > f.cm * 0.4) dash = dash || f.dashCd <= 0; }
  ax += (-f.x / s.half) * 0.4;
  az += (-f.z / s.half) * 0.4;
  return { x: ax, z: az, dash };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const b = {};
  if (s.best && typeof s.best === 'object') for (const lv of LEVELS) { const v = Number(s.best[lv.id]); if (v > 0) b[lv.id] = Math.min(Math.round(v), 9999); }
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, best: b, muted: s.muted === true };
}
