// «سباق القمة» — Summit Rush rules (pure, no drawing, deterministic for the tests).
// Four runners race UP a snowy mountain slope to the summit before the clock (60 s) runs out: the child (red jacket)
// and three rivals (teal, yellow, purple). Drag left/right to change where you run. Boulders, snowballs and logs roll
// DOWN the slope along red warning ladders painted on the snow; a hit is a wipeout (the runner falls on their back,
// loses a heart and some ground, then gets up). Gold crystals give +10, a near miss "nice dodge" +5, passing a rival
// "overtake" +20. Blue ice boost pads and glowing orbs (tailwind = speed, shield = one free hit) help you pass.
// Three hearts; age 4 = easy mode (slower, fewer rolling things, a hit costs no heart). Three courses.
export const HALF = 4.6; // half the width of the run (metres)
export const LANES = [-3.6, -1.8, 0, 1.8, 3.6];

export const COURSES = [
  { id: 1, len: 520, time: 60, gap: [34, 46], speed: [4.5, 6], logs: 0.15, orbs: 3, pads: 5, rival: 0.92 },
  { id: 2, len: 555, time: 60, gap: [28, 40], speed: [5, 7], logs: 0.3, orbs: 3, pads: 5, rival: 0.97 },
  { id: 3, len: 585, time: 60, gap: [24, 34], speed: [6, 8], logs: 0.4, orbs: 4, pads: 6, rival: 1.02 },
];

export const RUN = 10.4; // m/s
export const BOOST = 1.6; // ice pad: x speed for 1.5 s
export const TAILWIND = 1.4; // orb: x speed for 4 s
export const DOWN_TIME = 1.3; // seconds on the ground after a wipeout
export const PUSH_BACK = 7; // ground lost on a wipeout

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const RACERS = [
  { id: 'you', name: ['أنت', 'You'] },
  { id: 'teal', name: ['ليلى', 'Lila'] },
  { id: 'yellow', name: ['عمّ صابر', 'Saber'] },
  { id: 'purple', name: ['مريم', 'Mariam'] },
];

/** The fixed things on a course: crystals (lines of 4-5), boost pads, orbs, checkpoint lines. */
export function layCourse(course, seed) {
  const r = rng(seed);
  const crystals = [];
  for (let s = 30; s < course.len - 30; s += 22 + r() * 18) {
    const lane = LANES[Math.floor(r() * LANES.length)];
    const n = 4 + Math.floor(r() * 2);
    const drift = r() < 0.4 ? (r() < 0.5 ? -0.45 : 0.45) : 0;
    for (let i = 0; i < n; i++) crystals.push({ s: s + i * 2.4, x: Math.max(-HALF + 0.6, Math.min(HALF - 0.6, lane + drift * i)), got: false });
  }
  const pads = [];
  for (let i = 0; i < course.pads; i++) pads.push({ s: 60 + ((course.len - 120) * (i + r() * 0.6)) / course.pads, x: LANES[Math.floor(r() * LANES.length)] });
  const orbs = [];
  for (let i = 0; i < course.orbs; i++) orbs.push({ s: 90 + ((course.len - 160) * (i + 0.3 + r() * 0.4)) / course.orbs, x: LANES[Math.floor(r() * LANES.length)], kind: i % 2 ? 'shield' : 'tailwind', got: false });
  const checks = [0.25, 0.5, 0.75].map((f) => f * course.len);
  return { crystals, pads, orbs, checks };
}

export class Race {
  constructor(courseIndex, opts = {}) {
    this.course = COURSES[courseIndex];
    this.easy = !!opts.easy;
    this.seed = opts.seed ?? 1;
    this.r = rng(this.seed * 977 + courseIndex);
    this.lay = layCourse(this.course, this.seed + courseIndex * 31);
    this.time = this.course.time + (this.easy ? 15 : 0);
    this.t = 0;
    this.state = 'count'; // count -> run -> won | out | timeup
    this.countdown = 3;
    this.events = [];
    this.runners = RACERS.map((rc, i) => ({
      id: rc.id,
      me: i === 0,
      s: 0,
      x: [0, -2.2, 2.2, -0.9][i],
      want: [0, -2.2, 2.2, -0.9][i],
      score: 0,
      lives: 3,
      down: 0,
      safe: 0,
      boost: 0,
      wind: 0,
      shield: 0,
      pace: i === 0 ? 1 : this.course.rival * [1, 0.99, 0.965, 0.98][i] * (this.easy ? 0.9 : 1),
      finished: 0,
      dodge: new Set(),
    }));
    this.me = this.runners[0];
    this.hazards = [];
    this.nextHazard = 50;
    this.hid = 0;
    this.lastRank = 1;
    this.place = 0;
  }

  get remaining() { return Math.max(0, this.time - this.t); }

  /** The child drags: [x] is where to run (metres, clamped to the run). */
  steer(x) { this.me.want = Math.max(-HALF + 0.4, Math.min(HALF - 0.4, x)); }

  rankOf(rn) {
    const sorted = [...this.runners].sort((a, b) => (b.finished && a.finished ? a.finished - b.finished : b.finished ? 1 : a.finished ? -1 : b.s - a.s));
    return sorted.indexOf(rn) + 1;
  }

  _emit(type, data = {}) { this.events.push({ type, ...data }); }

  step(dt) {
    this.events = [];
    if (this.state === 'count') {
      const before = Math.ceil(this.countdown);
      this.countdown -= dt;
      if (Math.ceil(this.countdown) !== before && this.countdown > 0) this._emit('count', { n: Math.ceil(this.countdown) });
      if (this.countdown <= 0) { this.state = 'run'; this._emit('go'); }
      return this.events;
    }
    if (this.state !== 'run') return this.events;
    this.t += dt;
    const c = this.course;
    // rolling things: spawned up the slope ahead of the leader of the child and the rivals near them
    if (this.me.s + 70 > this.nextHazard && this.nextHazard < c.len - 25) {
      const lane = this._hazardLane();
      const kind = this.r() < c.logs ? 'log' : this.r() < 0.5 ? 'boulder' : 'snowball';
      const v = (c.speed[0] + this.r() * (c.speed[1] - c.speed[0])) * (this.easy ? 0.7 : 1);
      const rad = kind === 'log' ? 0.55 : kind === 'boulder' ? 0.75 + this.r() * 0.25 : 0.6 + this.r() * 0.25;
      const x = kind === 'log' ? Math.max(-HALF + 1.4, Math.min(HALF - 1.4, lane)) : lane;
      this.hazards.push({ id: ++this.hid, kind, s: this.nextHazard, x, v, r: rad, half: kind === 'log' ? 1.35 : rad, roll: 0 });
      this.nextHazard += (c.gap[0] + this.r() * (c.gap[1] - c.gap[0])) * (this.easy ? 1.5 : 1);
      // sometimes two at once in different lanes (never closing every lane)
      if (!this.easy && this.r() < 0.3 && this.course.id > 1) {
        const other = LANES.filter((l) => Math.abs(l - x) > 2.5);
        const ox = other[Math.floor(this.r() * other.length)];
        this.hazards.push({ id: ++this.hid, kind: 'snowball', s: this.nextHazard - 8, x: ox, v: v * 0.9, r: 0.75, half: 0.75, roll: 0 });
      }
      this._emit('spawn');
    }
    for (const hz of this.hazards) { hz.s -= hz.v * dt; hz.roll += (hz.v * dt) / hz.r; }
    this.hazards = this.hazards.filter((hz) => hz.s > -20 && hz.s > this.runners.reduce((m, rn) => Math.min(m, rn.s), Infinity) - 25);
    for (const rn of this.runners) this._move(rn, dt);
    // overtakes (the child passing a rival)
    const rank = this.rankOf(this.me);
    if (rank < this.lastRank && this.me.s > 15 && !this.me.finished) { this.me.score += 20; this._emit('overtake', { rank }); }
    this.lastRank = rank;
    if (this.me.finished && this.state === 'run') { this.state = 'won'; this.place = this.rankOf(this.me); this._emit('finish', { place: this.place }); }
    else if (this.me.lives <= 0 && this.me.down <= 0) { this.state = 'out'; this._emit('out'); }
    else if (this.t >= this.time) { this.state = 'timeup'; this.place = this.rankOf(this.me); this._emit('timeup', { place: this.place }); }
    return this.events;
  }

  _hazardLane() {
    // aim at the lanes near the child half of the time (so dodging matters), otherwise anywhere
    if (this.r() < 0.55) {
      const near = LANES.filter((l) => Math.abs(l - this.me.x) < 2.2);
      return near[Math.floor(this.r() * near.length)];
    }
    return LANES[Math.floor(this.r() * LANES.length)];
  }

  _move(rn, dt) {
    if (rn.finished) { rn.s += RUN * 0.3 * dt; return; }
    rn.safe = Math.max(0, rn.safe - dt);
    rn.boost = Math.max(0, rn.boost - dt);
    rn.wind = Math.max(0, rn.wind - dt);
    rn.shield = Math.max(0, rn.shield - dt);
    if (rn.down > 0) {
      rn.down -= dt;
      if (rn.down <= 0) { rn.safe = 1.6; if (rn.me) this._emit('up'); }
      return;
    }
    if (!rn.me) this._ai(rn);
    // steering is quick but smooth
    const k = Math.min(1, dt * (rn.me ? 12 : 5));
    rn.x += (rn.want - rn.x) * k;
    const mult = (rn.boost > 0 ? BOOST : 1) * (rn.wind > 0 ? TAILWIND : 1);
    rn.s += RUN * rn.pace * mult * dt;
    if (rn.s >= this.course.len) { rn.s = this.course.len; rn.finished = this.t; if (rn.me) this._emit('summit'); return; }
    // pick-ups (rivals collect crystals too, for their score)
    for (const cr of this.lay.crystals) {
      if (Math.abs(cr.s - rn.s) < 0.9 && Math.abs(cr.x - rn.x) < 0.75) {
        if (rn.me && !cr.got) { cr.got = true; rn.score += 10; this._emit('crystal', { x: cr.x, s: cr.s }); }
        else if (!rn.me && !cr[`g_${rn.id}`]) { cr[`g_${rn.id}`] = true; rn.score += 10; }
      }
    }
    for (const p of this.lay.pads) {
      if (Math.abs(p.s - rn.s) < 1.1 && Math.abs(p.x - rn.x) < 0.95 && rn.boost < 1.3) { rn.boost = 1.5; if (rn.me) this._emit('boost'); }
    }
    for (const o of this.lay.orbs) {
      if (!o.got && Math.abs(o.s - rn.s) < 1 && Math.abs(o.x - rn.x) < 0.9 && rn.me) {
        o.got = true;
        if (o.kind === 'tailwind') rn.wind = 4;
        else rn.shield = 6;
        this._emit(o.kind);
      }
    }
    // rolling things
    for (const hz of this.hazards) {
      const ds = Math.abs(hz.s - rn.s);
      const dx = Math.abs(hz.x - rn.x);
      const reach = hz.half + 0.32;
      if (ds < hz.r * 0.8 + 0.3 && dx < reach) {
        if (rn.safe > 0 || hz[`hit_${rn.id}`]) continue;
        hz[`hit_${rn.id}`] = true;
        if (rn.shield > 0) { rn.shield = 0; rn.safe = 1; if (rn.me) this._emit('blocked', { kind: hz.kind }); continue; }
        rn.down = DOWN_TIME;
        rn.s = Math.max(0, rn.s - PUSH_BACK);
        rn.boost = 0;
        rn.wind = 0;
        if (rn.me) {
          if (!this.easy) rn.lives--;
          this._emit('wipeout', { kind: hz.kind, lives: rn.lives });
        }
      } else if (rn.me && ds < 1.2 && dx < reach + 1.1 && hz.s < rn.s && !rn.dodge.has(hz.id) && !hz[`hit_${rn.id}`]) {
        rn.dodge.add(hz.id);
        rn.score += 5;
        this._emit('dodge');
      }
    }
  }

  /** Rivals: run their lane, step aside from rolling things most of the time, drift to crystals and pads. */
  _ai(rn) {
    const threat = this.hazards.find((hz) => hz.s > rn.s && hz.s - rn.s < 16 && Math.abs(hz.x - rn.x) < hz.half + 0.9);
    if (threat) {
      if (rn.sees === undefined || rn.sees !== threat.id) {
        rn.sees = threat.id;
        rn.notice = this.r() < (this.easy ? 0.75 : 0.85); // they miss one now and then
      }
      if (rn.notice) {
        const left = threat.x - threat.half - 1;
        const right = threat.x + threat.half + 1;
        rn.want = Math.abs(left - rn.x) < Math.abs(right - rn.x) && left > -HALF + 0.4 ? left : right < HALF - 0.4 ? right : left;
      }
      return;
    }
    const goal = this.lay.crystals.find((cr) => cr.s > rn.s + 2 && cr.s < rn.s + 14 && !cr[`g_${rn.id}`]);
    if (goal) rn.want = goal.x;
  }
}

/** Progress kept per child: courses unlocked, best place per course, crystals in total, sound off/on. */
export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const best = {};
  if (o.best && typeof o.best === 'object') for (const [k, v] of Object.entries(o.best)) if (Number(v) >= 1 && Number(v) <= 4) best[k] = Math.round(Number(v));
  return {
    unlocked: Math.max(1, Math.min(COURSES.length, Math.round(Number(o.unlocked) || 1))),
    best,
    crystals: Math.max(0, Math.min(999999, Math.round(Number(o.crystals) || 0))),
    muted: !!o.muted,
  };
}
