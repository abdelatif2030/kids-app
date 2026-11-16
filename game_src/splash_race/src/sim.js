// «سباق السباحة العجيب» — the rules with no drawing. Twelve swimmers race down a tropical water course between rainbow
// float ropes. Tap STROKE on the whistle's beat to build speed (perfect / good / off beat), hold DIVE to swim under the
// swinging pool noodles (it uses breath), a stroke on the beat just before a floating wall leaps over it, bumpers
// bounce you, waves carry you, side slides are shortcuts. Rounds: the first ones only need a qualifying place, the
// final needs first. Deterministic with a seed so a robot test can swim it.

export const HALF = 7; // course half width
const CRUISE = 2.3;
const VMAX = 10;
const STEER = 3.4;
const PERFECT = 0.1; // seconds from the beat
const GOOD = 0.2;
const LEAP_T = 0.9;

/** The rounds of the island tour: swimmers in, places that go on, course length and what is on it. */
export const ROUNDS = [
  { id: 1, ar: 'العوّامات', en: 'Floatstacles', swimmers: 12, qualify: 8, len: 250, bpm: 100, bumpers: 10, noodles: 1, walls: 1, waves: 1, slides: 1 },
  { id: 2, ar: 'المكرونة الدوّارة', en: 'Noodle Spin', swimmers: 10, qualify: 6, len: 280, bpm: 104, bumpers: 10, noodles: 3, walls: 2, waves: 1, slides: 1 },
  { id: 3, ar: 'جدار الموج', en: 'Wave Wall', swimmers: 8, qualify: 4, len: 300, bpm: 108, bumpers: 12, noodles: 3, walls: 3, waves: 2, slides: 2 },
  { id: 4, ar: 'النهائي', en: 'The Final', swimmers: 6, qualify: 1, len: 330, bpm: 112, bumpers: 14, noodles: 4, walls: 3, waves: 2, slides: 2 },
];

export const SWIMMERS = [
  { kind: 'otter', ar: 'أنت', en: 'You', cap: 0x2ab8c8 },
  { kind: 'penguin', ar: 'بطريق', en: 'Pingo', cap: 0xe8342a },
  { kind: 'beaver', ar: 'قندس', en: 'Benny', cap: 0xffd23a },
  { kind: 'seal', ar: 'فقمة', en: 'Sealy', cap: 0xff7ab8 },
  { kind: 'duck', ar: 'بطّوطة', en: 'Ducky', cap: 0x8a3ae8 },
  { kind: 'otter', ar: 'قضاعة', en: 'Ollie', cap: 0x3ac86a },
  { kind: 'penguin', ar: 'بنجو', en: 'Peppy', cap: 0xff8a2a },
  { kind: 'beaver', ar: 'بوبو', en: 'Bobo', cap: 0x2a6ae8 },
  { kind: 'seal', ar: 'سيلو', en: 'Silo', cap: 0xffffff },
  { kind: 'duck', ar: 'دودو', en: 'Dodo', cap: 0xe8342a },
  { kind: 'otter', ar: 'تيتو', en: 'Tito', cap: 0xffd23a },
  { kind: 'penguin', ar: 'بيبو', en: 'Bibo', cap: 0x2ab8c8 },
];

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/** Lays the obstacles out along the course (s = metres from the start). */
export function buildCourse(round, rand) {
  const L = round.len;
  const items = { bumpers: [], noodles: [], walls: [], waves: [], slides: [] };
  const used = [];
  const free = (s, gap = 9) => used.every((u) => Math.abs(u - s) > gap);
  const place = (fn, n, from = 18, to = L - 15) => {
    for (let k = 0, tries = 0; k < n && tries < 300; tries++) {
      const s = from + rand() * (to - from);
      if (!free(s)) continue;
      used.push(s);
      fn(s);
      k++;
    }
  };
  place((s) => items.walls.push({ s, x0: rand() < 0.5 ? -HALF : -HALF + 4, x1: rand() < 0.5 ? HALF : HALF - 4 }), round.walls, 30);
  place((s) => items.noodles.push({ s, x: (rand() * 2 - 1) * 3, len: 4.2, w: (rand() < 0.5 ? 1 : -1) * (1.2 + rand() * 0.5), a: rand() * 6 }), round.noodles, 25);
  place((s) => items.waves.push({ s, len: 14 }), round.waves, 20);
  place((s) => items.slides.push({ s, side: rand() < 0.5 ? -1 : 1, len: 26 }), round.slides, 25, L - 45);
  for (let k = 0; k < round.bumpers; k++) {
    const s = 14 + rand() * (L - 30);
    items.bumpers.push({ s, x: (rand() * 2 - 1) * (HALF - 1.5), r: 0.9 });
  }
  return items;
}

export class Swim {
  /** opts: { round (0..3), easy, seed } */
  constructor(opts = {}) {
    this.round = ROUNDS[opts.round ?? 0];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 6);
    this.course = buildCourse(this.round, this.rand);
    this.beat = 60 / this.round.bpm;
    this.time = 0;
    this.state = 'start'; // start (3-2-1) -> race -> done
    this.countT = 3;
    this.events = [];
    this.finished = 0;
    const n = this.round.swimmers;
    this.swimmers = SWIMMERS.slice(0, n).map((sw, k) => ({
      id: k, ...sw, x: (k - (n - 1) / 2) * ((HALF * 2 - 2) / n), s: 0, y: 0, v: 0, air: 0, dive: false, breath: 1,
      stun: 0, slide: null, done: false, place: 0, isPlayer: k === 0,
      skill: 0.45 + this.rand() * 0.38 + this.round.id * 0.015, next: 0, lane: 0, lastStroke: -9,
    }));
    this.player = this.swimmers[0];
    this.perfects = 0;
    this.bonks = 0;
  }

  /** Seconds to the nearest beat (negative = early). */
  beatOffset(t = this.time) {
    const ph = t / this.beat;
    return (ph - Math.round(ph)) * this.beat;
  }

  stroke(sw = this.player) {
    if (this.state !== 'race' || sw.done || sw.stun > 0 || sw.slide || sw.air > 0) return null;
    if (this.time - sw.lastStroke < this.beat * 0.45) return null; // one stroke per beat
    sw.lastStroke = this.time;
    const off = Math.abs(this.beatOffset());
    const grade = off <= PERFECT ? 'perfect' : off <= GOOD ? 'good' : 'off';
    sw.v = Math.min(VMAX, sw.v + (grade === 'perfect' ? 2.3 : grade === 'good' ? 1.5 : 0.45) * (sw.dive ? 0.7 : 1));
    if (sw.isPlayer && grade === 'perfect') this.perfects++;
    // a good stroke right in front of a floating wall leaps it
    if (grade !== 'off' && !sw.dive) {
      for (const w of this.course.walls) {
        const d = w.s - sw.s;
        if (d > 0 && d < 4.5 && sw.x > w.x0 - 0.5 && sw.x < w.x1 + 0.5) { sw.air = LEAP_T; sw.v = Math.max(sw.v, 5.5); this.events.push({ type: 'leap', id: sw.id }); break; }
      }
    }
    this.events.push({ type: 'stroke', id: sw.id, grade });
    return grade;
  }

  setDive(on, sw = this.player) {
    const can = !!on && sw.breath > 0.05 && sw.air <= 0 && !sw.slide && this.state === 'race';
    if (on && sw.dive && !can && sw.breath <= 0.05 && sw.isPlayer) this.events.push({ type: 'breath' });
    sw.dive = can;
  }

  step(dt, input = {}) {
    this.events = [];
    if (this.state === 'done') return this.events;
    if (this.state === 'start') {
      const b = Math.ceil(this.countT);
      this.countT -= dt;
      if (Math.ceil(this.countT) !== b && this.countT > 0) this.events.push({ type: 'count', n: Math.ceil(this.countT) });
      if (this.countT <= 0) { this.state = 'race'; this.events.push({ type: 'go' }); for (const s of this.swimmers) s.v = CRUISE; }
      return this.events;
    }
    const beatBefore = Math.floor(this.time / this.beat + 0.5);
    this.time += dt;
    if (Math.floor(this.time / this.beat + 0.5) !== beatBefore) this.events.push({ type: 'beat' });
    for (const n of this.course.noodles) n.a += n.w * dt;
    for (const sw of this.swimmers) {
      if (sw.done) { sw.s += sw.v * dt; sw.v = Math.max(1, sw.v - dt * 2); continue; }
      if (sw.isPlayer) {
        this.setDive(!!input.dive, sw);
        this._swim(sw, clamp(input.x ?? 0, -1, 1), dt);
      } else this._swim(sw, this._ai(sw, dt), dt);
    }
    this._contacts();
    this._places();
    return this.events;
  }

  _swim(sw, steer, dt) {
    sw.stun = Math.max(0, sw.stun - dt);
    // breath: under water it runs out, at the surface it comes back
    if (sw.dive) {
      sw.breath = Math.max(0, sw.breath - dt * 0.28);
      if (sw.breath <= 0) { sw.dive = false; if (sw.isPlayer) this.events.push({ type: 'breath' }); }
    } else sw.breath = Math.min(1, sw.breath + dt * 0.32);
    if (sw.slide) {
      // riding a slide shortcut: fast and fixed
      const sl = sw.slide;
      sl.t += dt;
      const f = Math.min(1, sl.t / 1.3);
      sw.s = sl.s0 + (sl.s1 - sl.s0) * f;
      sw.x = sl.side * (HALF + 1.5 - Math.sin(f * Math.PI) * 0.5);
      sw.y = 1.5 * (1 - f);
      if (f >= 1) { sw.slide = null; sw.x = sl.side * (HALF - 1); sw.y = 0; sw.v = 7; this.events.push({ type: 'splash', id: sw.id, x: sw.x, s: sw.s }); }
      return;
    }
    sw.air = Math.max(0, sw.air - dt);
    sw.y = sw.air > 0 ? Math.sin((1 - sw.air / LEAP_T) * Math.PI) * 1.4 : sw.dive ? -0.8 : 0;
    // speed eases back to a slow cruise; waves push you on
    const wave = !sw.dive && this.course.waves.some((w) => sw.s > w.s && sw.s < w.s + w.len);
    const target = CRUISE * (this.easy && sw.isPlayer ? 1.25 : 1) + (wave ? 3 : 0);
    sw.v += (target - sw.v) * Math.min(1, dt * (sw.v > target ? 0.5 : 1.2));
    if (sw.stun > 0) sw.v = Math.min(sw.v, 1.2);
    sw.s += sw.v * dt;
    sw.x = clamp(sw.x + steer * STEER * dt * (sw.stun > 0 ? 0.3 : 1), -HALF + 0.5, HALF - 0.5);
    this._obstacles(sw);
    if (sw.s >= this.round.len) this._finish(sw);
  }

  _bonk(sw, why, dir) {
    if (sw.stun > 0) return;
    sw.stun = 0.7;
    sw.v = 0.6;
    sw.x = clamp(sw.x + dir * 0.8, -HALF + 0.5, HALF - 0.5);
    if (sw.isPlayer) this.bonks++;
    this.events.push({ type: 'bonk', id: sw.id, why, x: sw.x, s: sw.s });
  }

  _obstacles(sw) {
    const c = this.course;
    for (const b of c.bumpers) {
      const d = Math.hypot(sw.x - b.x, sw.s - b.s);
      if (d < b.r + 0.45 && sw.air <= 0) this._bonk(sw, 'bumper', Math.sign(sw.x - b.x) || 1);
    }
    for (const n of c.noodles) {
      if (Math.abs(sw.s - n.s) > n.len + 1 || sw.dive || sw.air > 0) continue;
      // the noodle swings round its float: a segment from the centre
      const ex = n.x + Math.cos(n.a) * n.len;
      const es = n.s + Math.sin(n.a) * n.len;
      if (segDist(n.x, n.s, ex, es, sw.x, sw.s) < 0.55) this._bonk(sw, 'noodle', Math.sign(sw.x - n.x) || 1);
    }
    for (const w of c.walls) {
      if (sw.air > 0 || sw.s < w.s - 0.6 || sw.s > w.s + 0.2 || sw.x < w.x0 - 0.3 || sw.x > w.x1 + 0.3) continue;
      sw.s = w.s - 0.7;
      this._bonk(sw, 'wall', 0);
    }
    for (const sl of c.slides) {
      // the slide's mouth is at the side, just before s
      if (Math.abs(sw.s - sl.s) < 2.2 && sw.x * sl.side > HALF - 1.3 && !sw.slide && sw.air <= 0 && !sw.dive) {
        sw.slide = { s0: sw.s, s1: sw.s + sl.len, side: sl.side, t: 0 };
        this.events.push({ type: 'slide', id: sw.id });
      }
    }
  }

  _contacts() {
    const a = this.swimmers;
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        const p = a[i];
        const q = a[j];
        if (p.slide || q.slide || Math.abs(p.y - q.y) > 0.6) continue;
        const dx = q.x - p.x;
        const ds = q.s - p.s;
        const d = Math.hypot(dx, ds);
        if (d > 0.85 || d < 1e-4) continue;
        const push = (0.85 - d) / 2;
        p.x -= (dx / d) * push; p.s -= (ds / d) * push;
        q.x += (dx / d) * push; q.s += (ds / d) * push;
      }
    }
  }

  _finish(sw) {
    sw.done = true;
    this.finished++;
    sw.place = this.finished;
    sw.finishT = this.time;
    const q = sw.place <= this.round.qualify;
    this.events.push({ type: 'finish', id: sw.id, place: sw.place, qualified: q });
    if (sw.isPlayer) { this.state = 'done'; this.events.push({ type: 'over', place: sw.place, qualified: q }); } else if (this.finished >= this.round.qualify && !this.player.done) {
      // all the places are taken before the child arrives
      this.state = 'done';
      this.player.place = this.swimmers.filter((x) => !x.done).sort((a, b) => b.s - a.s).indexOf(this.player) + this.finished + 1;
      this.events.push({ type: 'over', place: this.player.place, qualified: false });
    }
  }

  _places() {
    const order = [...this.swimmers].sort((a, b) => (a.done && b.done ? a.place - b.place : a.done ? -1 : b.done ? 1 : b.s - a.s));
    order.forEach((sw, k) => { if (!sw.done) sw.rank = k + 1; else sw.rank = sw.place; });
    this.order = order;
  }

  get qualifiedCount() { return this.swimmers.filter((s) => s.done && s.place <= this.round.qualify).length; }

  // ---- the other swimmers ----------------------------------------------------------------------------------------

  _ai(sw, dt) {
    // strokes: on the beat, as good as their skill; the faster ones in later rounds
    sw.next -= dt;
    if (sw.next <= 0) {
      const err = (this.rand() - 0.5) * 2 * (1 - sw.skill) * 0.35;
      const off = this.beatOffset(this.time + err);
      if (Math.abs(off) < 0.03 || this.rand() < 0.05) {
        this.stroke(sw);
        sw.next = this.beat * (0.9 + this.rand() * 0.6 * (1.2 - sw.skill));
      }
    }
    // dive for a noodle close ahead, leap a wall
    const c = this.course;
    const noodle = c.noodles.find((n) => n.s - sw.s > -1 && n.s - sw.s < n.len + 2.5 && Math.abs(n.x - sw.x) < n.len + 1);
    this.setDive(noodle && this.rand() < 0.04 + sw.skill * 0.9 ? true : sw.dive && !!noodle, sw);
    // steer: away from bumpers ahead, towards its lane, sometimes towards a slide
    let want = sw.lane;
    const slide = c.slides.find((sl) => sl.s - sw.s > 2 && sl.s - sw.s < 18);
    if (slide && sw.skill > 0.7) want = slide.side * HALF;
    for (const b of c.bumpers) {
      const d = b.s - sw.s;
      if (d > 0 && d < 7 && Math.abs(b.x - sw.x) < 1.6) want = b.x + (sw.x > b.x ? 2.4 : -2.4);
    }
    const wall = c.walls.find((w) => w.s - sw.s > 0 && w.s - sw.s < 10);
    if (wall && sw.skill < 0.75) {
      // go round the wall if there is room
      if (wall.x0 > -HALF + 1) want = -HALF + 1; else if (wall.x1 < HALF - 1) want = HALF - 1;
    }
    if (this.rand() < dt * 0.3) sw.lane = (this.rand() * 2 - 1) * (HALF - 2);
    return clamp((want - sw.x) * 0.8, -1, 1);
  }

  /** Stars: 3 for first, 2 for qualifying / podium, 1 for finishing. */
  get result() {
    const p = this.player;
    const q = p.done && p.place <= this.round.qualify;
    const first = p.done && p.place === 1;
    return { place: p.place || p.rank, qualified: q, stars: !q ? 0 : first ? 3 : p.place <= Math.max(3, Math.ceil(this.round.qualify / 2)) ? 2 : 1 };
  }
}

function segDist(ax, az, bx, bz, px, pz) {
  const vx = bx - ax;
  const vz = bz - az;
  const l2 = vx * vx + vz * vz;
  const t = l2 ? Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / l2)) : 0;
  return Math.hypot(ax + vx * t - px, az + vz * t - pz);
}

/** Save: { unlocked (1..4), stars, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const r of ROUNDS) { const v = Math.floor(Number(s.stars[r.id])); if (v >= 1 && v <= 3) stars[r.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  return { unlocked: Number.isFinite(u) ? clamp(u, 1, ROUNDS.length) : 1, stars, muted: s.muted === true };
}
