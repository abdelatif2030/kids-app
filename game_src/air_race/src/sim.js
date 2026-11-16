// Pure race logic for «سباق الطائرات الجوي» (Air Race), no three.js, so node tests can fly it.
// The course is a closed spline through the sky. Every plane flies along it (progress `s`) and steers inside a wide
// "flight tube" around it (offset x = right, y = up). Floating rings sit on the course: flying through one charges the
// boost; golden rings charge more. Rock pillars, stone arches and bridges stand on the course: touching one is a soft
// bump (the plane slows, wobbles and is pushed clear; nothing is lost). Two laps; three rival planes.
export const LAPS = 2;
export const TUBE_X = 14; // how far left/right a plane may steer
export const TUBE_DOWN = 7;
export const TUBE_UP = 9;
export const RING_R = 4.6; // a ring's opening
export const BASE_SPEED = 60; // world units per second (shown as ~504 km/h)
export const KMH = 8.4;
const BOOST_MUL = 1.38;
const BOOST_SECS = 2.8; // a full charge lasts this long

function rng(seed) {
  let x = seed >>> 0 || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}

// Courses: shape numbers make the loop; obstacles are placed at ring numbers so the ring line always flies clear.
export const COURSES = [
  { id: 1, ar: 'جزر اللاجون', en: 'Lagoon Loop', world: 'lagoon', rx: 380, rz: 300, wob: [0.22, 3, 0.4], hy: [34, 10], rings: 26, golden: 4,
    bridges: [5, 14, 21], pillars: [3, 9, 17, 24], arches: [12] },
  { id: 2, ar: 'ممر الجبال', en: 'Glacier Pass', world: 'glacier', rx: 420, rz: 330, wob: [0.28, 2, 1.1], hy: [46, 14], rings: 28, golden: 4,
    bridges: [19], pillars: [4, 10, 15, 23, 26], arches: [7, 13, 21], canyon: [0.62, 0.74] },
  { id: 3, ar: 'منحدرات المرجان', en: 'Coral Cliffs', world: 'sunset', rx: 400, rz: 340, wob: [0.3, 4, 2.2], hy: [38, 12], rings: 30, golden: 5,
    bridges: [4, 11, 18, 26], pillars: [2, 8, 15, 22, 28], arches: [6, 20] },
];

// ---- the course as a closed Catmull-Rom spline with an arc-length table --------------------------------------------

export class Track {
  constructor(course) {
    const n = 18;
    const [amp, k, ph] = course.wob;
    const ctrl = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const r = 1 + amp * Math.sin(k * a + ph);
      ctrl.push([Math.cos(a) * course.rx * r, course.hy[0] + course.hy[1] * Math.sin(2 * a + ph), Math.sin(a) * course.rz * r]);
    }
    const SAMPLES = 1600;
    this.pts = [];
    for (let i = 0; i < SAMPLES; i++) {
      const u = (i / SAMPLES) * n;
      const j = Math.floor(u);
      const f = u - j;
      const p0 = ctrl[(j - 1 + n) % n];
      const p1 = ctrl[j % n];
      const p2 = ctrl[(j + 1) % n];
      const p3 = ctrl[(j + 2) % n];
      const c = (a, b, cc, d) => 0.5 * (2 * b + (-a + cc) * f + (2 * a - 5 * b + 4 * cc - d) * f * f + (-a + 3 * b - 3 * cc + d) * f * f * f);
      this.pts.push([c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1]), c(p0[2], p1[2], p2[2], p3[2])]);
    }
    this.cum = [0];
    for (let i = 1; i <= SAMPLES; i++) {
      const a = this.pts[i - 1];
      const b = this.pts[i % SAMPLES];
      this.cum.push(this.cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
    }
    this.length = this.cum[SAMPLES];
    this.n = SAMPLES;
  }

  _index(s) {
    s = ((s % this.length) + this.length) % this.length;
    let lo = 0;
    let hi = this.n;
    while (hi - lo > 1) {
      const m = (lo + hi) >> 1;
      if (this.cum[m] <= s) lo = m;
      else hi = m;
    }
    return [lo, (s - this.cum[lo]) / (this.cum[lo + 1] - this.cum[lo])];
  }

  /** Point, tangent, right and up of the course at distance s. */
  frame(s) {
    const [i, f] = this._index(s);
    const a = this.pts[i];
    const b = this.pts[(i + 1) % this.n];
    const p = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
    const [j] = this._index(s + 4);
    const [h] = this._index(s - 4);
    const q = this.pts[j];
    const o = this.pts[h];
    let t = [q[0] - o[0], q[1] - o[1], q[2] - o[2]];
    const tl = Math.hypot(...t) || 1;
    t = t.map((v) => v / tl);
    // right = t x up(0,1,0); up = right x t
    let r = [-t[2], 0, t[0]];
    const rl = Math.hypot(...r) || 1;
    r = r.map((v) => v / rl);
    const u = [r[1] * t[2] - r[2] * t[1], r[2] * t[0] - r[0] * t[2], r[0] * t[1] - r[1] * t[0]];
    return { p, t, r, u };
  }

  /** World position of a plane at s with offset (x right, y up). */
  pos(s, x, y) {
    const { p, r, u } = this.frame(s);
    return [p[0] + r[0] * x + u[0] * y, p[1] + r[1] * x + u[1] * y, p[2] + r[2] * x + u[2] * y];
  }

  /** How sharply the course turns at s (signed, + = to the right). */
  turn(s) {
    const a = this.frame(s - 10).t;
    const b = this.frame(s + 10).t;
    return a[2] * b[0] - a[0] * b[2];
  }
}

// ---- building a course ---------------------------------------------------------------------------------------------

export function buildCourse(course, seed = 7) {
  const rand = rng(seed + course.id * 31);
  const track = new Track(course);
  const L = track.length;
  const rings = [];
  const gap = L / course.rings;
  for (let k = 0; k < course.rings; k++) {
    let x = Math.sin(k * 1.27 + course.id) * 8.5;
    let y = Math.sin(k * 0.71 + course.id * 2) * 3.6 + 0.6;
    if (course.bridges.includes(k)) y = -3.6; // fly low under the bridge
    if (course.bridges.includes(k + 1)) y = Math.min(y, 0);
    if (course.canyon && k / course.rings > course.canyon[0] && k / course.rings < course.canyon[1]) x *= 0.45;
    rings.push({ k, s: gap * (k + 0.6), x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, golden: k % course.golden === course.golden - 1 });
  }
  const obstacles = [];
  for (const k of course.bridges) {
    const g = rings[k];
    obstacles.push({ kind: 'bridge', s: g.s, x: 0, y: g.y + 3.4, half: 1.4 }); // the deck sits just above the ring; under or over is fine
  }
  for (const k of course.pillars) {
    const a = rings[k % rings.length];
    const b = rings[(k + 1) % rings.length];
    const mid = (a.x + b.x) / 2;
    const side = mid > 0 ? -1 : 1;
    let x = mid + side * (7 + rand() * 2);
    x = Math.max(-TUBE_X + 1, Math.min(TUBE_X - 1, x));
    obstacles.push({ kind: 'pillar', s: ((a.s + (b.s < a.s ? b.s + L : b.s)) / 2) % L, x, y: 0, r: 2.2 });
  }
  for (const k of course.arches) {
    const g = rings[k];
    obstacles.push({ kind: 'arch', s: (g.s + 14) % L, x: g.x * 0.6, y: g.y * 0.6, inner: 10.5 });
  }
  const canyon = course.canyon ? [course.canyon[0] * L, course.canyon[1] * L] : null;
  return { course, track, rings, obstacles, canyon, length: L };
}

// ---- the race -----------------------------------------------------------------------------------------------------

const RIVALS = [
  { id: 'jet', skill: 0.985, bias: [2.2, 1.0], wob: 1.3 },
  { id: 'racer', skill: 0.97, bias: [-2.0, 0.5], wob: 1.7 },
  { id: 'biplane', skill: 0.955, bias: [0.8, -1.2], wob: 2.1 },
];

export class Race {
  constructor(opts = {}) {
    this.index = opts.course ?? 0;
    this.easy = !!opts.easy;
    const c = buildCourse(COURSES[this.index], opts.seed ?? 7);
    Object.assign(this, c);
    this.rand = rng((opts.seed ?? 7) * 7 + 3);
    this.player = this._plane('player', 0, 0);
    this.planes = [this.player];
    RIVALS.forEach((r, i) => {
      const p = this._plane(r.id, 8 + i * 8, r.bias[0]);
      p.y = r.bias[1];
      p.rival = r;
      p.skill = r.skill * (this.easy ? 0.92 : 1);
      p.phase = i * 1.7;
      this.planes.push(p);
    });
    this.steer = { x: 0, y: 0 }; // -1..1 from the child's drag or keys
    this.time = 0;
    this.count = 3.2; // countdown
    this.startT = 3.2;
    this.state = 'count'; // count -> race -> done
    this.events = [];
    this.pending = [];
    this.ringsHit = 0;
    this.bumps = 0;
    this.place = 4;
  }

  _plane(id, s, x) {
    return { id, s, lap: 0, x, y: 0, vx: 0, vy: 0, speed: 0, boost: 0, charge: 0, bump: 0, imm: 0, next: 0, nextObs: 0, done: false, finishT: 0, bank: 0 };
  }

  progress(p) { return p.lap * this.length + p.s; }

  /** The child's steering, each -1..1 (x right, y up). */
  setSteer(x, y) {
    this.steer.x = Math.max(-1, Math.min(1, x));
    this.steer.y = Math.max(-1, Math.min(1, y));
  }

  /** Spend the boost charge (needs at least a third). */
  boost() {
    const p = this.player;
    if (this.state !== 'race' || p.charge < 0.3 || p.boost > 0) return false;
    p.boost = p.charge * BOOST_SECS;
    p.charge = 0;
    this.pending.push({ type: 'boost' });
    return true;
  }

  nextRing(p = this.player) { return this.rings[p.next % this.rings.length]; }

  step(dt) {
    this.events = this.pending;
    this.pending = [];
    if (this.state === 'done') { this._fly(dt, false); return this.events; }
    this.time += dt;
    if (this.state === 'count') {
      const before = Math.ceil(this.count);
      this.count -= dt;
      if (Math.ceil(this.count) !== before && this.count > 0) this.events.push({ type: 'count', n: Math.ceil(this.count) });
      for (const p of this.planes) p.speed = 0;
      if (this.count <= 0) { this.state = 'race'; this.startT = this.time; this.events.push({ type: 'go' }); }
      return this.events;
    }
    this._fly(dt, true);
    return this.events;
  }

  _fly(dt, racing) {
    const L = this.length;
    for (const p of this.planes) {
      const player = p === this.player;
      // speed
      let want = BASE_SPEED;
      if (player) {
        if (p.boost > 0) { want *= BOOST_MUL; p.boost = Math.max(0, p.boost - dt); }
        if (this.state === 'done') want *= 0.7;
      } else {
        const lead = this.progress(p) - this.progress(this.player);
        const band = lead > 60 ? 0.93 : lead < -80 ? 1.08 : 1; // keep the race close
        want *= p.skill * band;
        if (Math.sin(this.time * 0.37 + p.phase * 3) > 0.93) { want *= 1.25; p.boost = 0.3; } else p.boost = Math.max(0, p.boost - dt);
      }
      if (p.bump > 0) { want *= 0.55; p.bump -= dt; }
      p.imm = Math.max(0, p.imm - dt);
      p.speed += (want - p.speed) * Math.min(1, dt * (p.speed < want ? 1.6 : 3));
      // steering
      let tx;
      let ty;
      if (player && !p.done) {
        let sx = this.steer.x;
        let sy = this.steer.y;
        // a helping hand toward the next ring (stronger for the youngest)
        const g = this.nextRing(p);
        const ahead = (g.s - p.s + L) % L;
        if (ahead < 160) {
          const help = this.easy ? 0.55 : 0.1;
          const quiet = 1 - Math.min(1, Math.hypot(sx, sy));
          sx += Math.max(-1, Math.min(1, (g.x - p.x) / 6)) * help * (0.4 + quiet);
          sy += Math.max(-1, Math.min(1, (g.y - p.y) / 6)) * help * (0.4 + quiet);
        }
        tx = Math.max(-1, Math.min(1, sx)) * 19;
        ty = Math.max(-1, Math.min(1, sy)) * 13;
      } else {
        // rivals (and the player after the finish) fly toward the next ring with their own wobble
        const g = this.nextRing(p);
        const b = p.rival ? p.rival.bias : [0, 0];
        const w = p.rival ? p.rival.wob : 1;
        const gx = g.x + b[0] * 0.4 + Math.sin(this.time * 0.8 + (p.phase ?? 0)) * w;
        const gy = g.y + b[1] * 0.3;
        tx = Math.max(-1, Math.min(1, (gx - p.x) / 5)) * 15;
        ty = Math.max(-1, Math.min(1, (gy - p.y) / 5)) * 10;
      }
      p.vx += (tx - p.vx) * Math.min(1, dt * 5);
      p.vy += (ty - p.vy) * Math.min(1, dt * 5);
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      let wx = TUBE_X;
      if (this.canyon && p.s > this.canyon[0] && p.s < this.canyon[1]) wx = 8; // canyon walls
      if (Math.abs(p.x) > wx) { p.x = Math.sign(p.x) * wx; p.vx *= -0.3; if (player && racing) this.events.push({ type: 'edge' }); }
      if (p.y < -TUBE_DOWN) { p.y = -TUBE_DOWN; p.vy = Math.abs(p.vy) * 0.3; if (player && racing) this.events.push({ type: 'edge' }); }
      if (p.y > TUBE_UP) { p.y = TUBE_UP; p.vy = -Math.abs(p.vy) * 0.3; }
      p.bank += (-p.vx / 19 * 1.0 + this.track.turn(p.s) * 6 - p.bank) * Math.min(1, dt * 4);
      // move along the course
      const s0 = p.s;
      p.s += p.speed * dt;
      if (p.s >= L) { p.s -= L; p.lap++; if (player && racing && p.lap < LAPS) this.events.push({ type: 'lap', lap: p.lap }); }
      this._rings(p, s0, player && racing);
      if (racing || player) this._obstacles(p, s0, player && racing);
      if (!p.done && p.lap >= LAPS) {
        p.done = true;
        p.finishT = this.time - this.startT;
        if (player && racing) this._finish();
      }
    }
    if (this.state === 'race') this.place = this._place();
  }

  _crossed(s0, s1, at) {
    if (s1 >= s0) return at > s0 && at <= s1;
    return at > s0 || at <= s1; // wrapped past the start line
  }

  _rings(p, s0, player) {
    const g = this.nextRing(p);
    if (!this._crossed(s0, p.s, g.s)) return;
    const d = Math.hypot(p.x - g.x, p.y - g.y);
    p.next++;
    if (d <= RING_R + (player ? 0.6 : 2)) {
      p.charge = Math.min(1, p.charge + (g.golden ? 0.45 : 0.17));
      if (!player) p.charge = 0;
      if (player) {
        this.ringsHit++;
        p.combo = (p.combo ?? 0) + 1;
        this.events.push({ type: 'ring', golden: g.golden, k: g.k, combo: p.combo, full: p.charge >= 1 });
      }
    } else if (player) {
      p.combo = 0;
      this.events.push({ type: 'miss', k: g.k });
    }
  }

  _obstacles(p, s0, player) {
    if (p.imm > 0) return;
    for (const o of this.obstacles) {
      const near = o.kind === 'bridge' ? 2.6 : o.kind === 'pillar' ? 2.6 : 1.5;
      const L = this.length;
      const ds = Math.min(Math.abs(p.s - o.s), L - Math.abs(p.s - o.s));
      if (ds > near) continue;
      let hit = false;
      let push = [0, 0];
      if (o.kind === 'bridge') {
        if (Math.abs(p.y - o.y) < o.half + 1) { hit = true; push = [0, p.y > o.y ? 1 : -1]; }
      } else if (o.kind === 'pillar') {
        if (Math.abs(p.x - o.x) < o.r + 1.1) { hit = true; push = [Math.sign(p.x - o.x) || 1, 0]; }
      } else if (o.kind === 'arch') {
        const dx = p.x - o.x;
        const dy = p.y - o.y;
        const d = Math.hypot(dx, dy);
        if (d > o.inner - 1.2) { hit = true; push = [-dx / (d || 1), -dy / (d || 1)]; }
      }
      if (!hit) continue;
      if (!player) { p.x += push[0] * 2; p.y += push[1] * 2; continue; } // rivals just slip by
      p.bump = 1.2;
      p.imm = 1.4;
      p.vx = push[0] * 16;
      p.vy = push[1] * 12;
      p.x += push[0] * 1.5;
      p.y += push[1] * 1.5;
      p.combo = 0;
      this.bumps++;
      this.events.push({ type: 'bump', kind: o.kind });
      return;
    }
  }

  _place() {
    const me = this.progress(this.player);
    let place = 1;
    for (const p of this.planes) {
      if (p === this.player) continue;
      if (p.done && (!this.player.done || p.finishT < this.player.finishT)) place++;
      else if (!p.done && !this.player.done && this.progress(p) > me) place++;
    }
    return place;
  }

  _finish() {
    this.place = this._place();
    this.state = 'done';
    this.events.push({ type: 'finish', result: this.result });
  }

  /** Stars: finish, top two, first place. */
  get result() {
    const done = this.player.done;
    return {
      done, place: this.place, time: this.player.finishT || this.time - this.startT, rings: this.ringsHit, of: this.rings.length * LAPS, bumps: this.bumps,
      stars: (done ? 1 : 0) + (done && this.place <= 2 ? 1 : 0) + (done && this.place === 1 ? 1 : 0),
    };
  }
}

/** Save: { unlocked (1..3), stars, best (seconds), muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  const best = {};
  for (const c of COURSES) {
    const v = Math.floor(Number(s.stars && s.stars[c.id]));
    if (v >= 1 && v <= 3) stars[c.id] = v;
    const b = Number(s.best && s.best[c.id]);
    if (Number.isFinite(b) && b > 5 && b < 3600) best[c.id] = Math.round(b * 100) / 100;
  }
  const u = Math.floor(Number(s.unlocked));
  return { unlocked: u >= 1 && u <= COURSES.length ? u : 1, stars, best, muted: s.muted === true };
}
