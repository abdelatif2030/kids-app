// «البقاء على الإيقاع» — the rules with no drawing. Twelve plush animals stand on a giant spinning record. Striped
// bars sweep round from the middle in time with the music: hop over the low ones, duck under the high ones. Gaps open
// in the vinyl, the record suddenly spins the other way, the tonearm swings across, and everybody bumps everybody.
// Whoever is still on the record when the track ends survives. Deterministic with a seed so a robot can play it.

export const R = 8; // record radius
const SPINDLE = 1.1;
const BODY = 0.38;
const SPEED = 4.6;
const JUMP_T = 0.62; // seconds in the air
const DUCK_T = 0.7;
const FRICTION = 5;

/** Five tracks of the world tour, each adding something new. bpm sets the beat everything follows. */
export const TRACKS = [
  { id: 1, ar: 'مطعم الجوكبوكس', en: 'Jukebox Diner', bpm: 112, len: 40, arms: [['low', 8]], high: false, gaps: false, flip: false, tonearm: false },
  { id: 2, ar: 'محل الأسطوانات', en: 'Record Shop', bpm: 116, len: 45, arms: [['low', 8], ['high', 12]], gaps: false, flip: false, tonearm: false },
  { id: 3, ar: 'علّية الأحد', en: 'Sunday Loft', bpm: 120, len: 50, arms: [['low', 8], ['high', 10]], gaps: true, flip: false, tonearm: false },
  { id: 4, ar: 'صالة المخمل', en: 'Velvet Lounge', bpm: 124, len: 55, arms: [['low', 6], ['high', 10]], gaps: true, flip: true, tonearm: false },
  { id: 5, ar: 'صندوق الموسيقى', en: 'Music Box', bpm: 128, len: 60, arms: [['low', 6], ['high', 8], ['low', 12]], gaps: true, flip: true, tonearm: true },
];

export const ANIMALS = ['bear', 'bunny', 'fox', 'cat', 'raccoon', 'panda', 'sheep', 'chick', 'frog', 'mouse', 'pig', 'koala'];

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const wrap = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };

export class Show {
  /** opts: { track (0..4), easy, seed } */
  constructor(opts = {}) {
    this.track = TRACKS[opts.track ?? 0];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 4);
    this.beat = 60 / this.track.bpm;
    this.time = 0;
    this.state = 'intro'; // intro (count-in) -> play -> won | out
    this.introT = this.beat * 4;
    this.spin = 0.45; // the record's turning speed (rad/s), may flip
    this.spinTarget = this.spin;
    this.phi = 0; // the record's angle
    this.events = [];
    this.lives = this.easy ? 3 : 1;
    // arms: one full turn every `period` beats, all coming round the same way; their angle says where they are
    this.arms = this.track.arms.map(([type, period], k) => ({ type, period, a: (k * Math.PI * 2) / this.track.arms.length + Math.PI, warn: 0 }));
    this.gaps = [];
    this.gapT = this.beat * 16;
    this.flipT = this.beat * 24;
    this.tonearm = { state: 'rest', t: this.beat * 20, a: 0 };
    this.animals = ANIMALS.map((kind, k) => {
      const a = (k / ANIMALS.length) * Math.PI * 2 + 0.2;
      const r = k === 0 ? 4.4 : 3 + (k % 3) * 1.4;
      return { id: k, kind, x: Math.cos(a) * r, z: Math.sin(a) * r, vx: 0, vz: 0, face: 0, air: 0, duck: 0, stun: 0, out: false, isPlayer: k === 0, skill: 0.72 + this.rand() * 0.25, think: 0, tx: 0, tz: 0, moving: 0 };
    });
    this.player = this.animals[0];
    this.bumps = 0; // times the child was hit by a bar or the tonearm
    this.outs = 0;
  }

  get left() { return this.animals.filter((a) => !a.out).length; }
  get progress() { return Math.min(1, Math.max(0, this.time) / this.track.len); }

  jump(a = this.player) {
    if (a.out || a.air > 0 || a.stun > 0 || this.state !== 'play') return false;
    a.air = JUMP_T;
    a.duck = 0;
    this.events.push({ type: 'jump', id: a.id });
    return true;
  }

  duck(a = this.player) {
    if (a.out || a.air > 0 || this.state !== 'play') return false;
    if (a.duck <= 0) this.events.push({ type: 'duck', id: a.id });
    a.duck = DUCK_T;
    return true;
  }

  step(dt, input = { x: 0, z: 0 }) {
    this.events = [];
    if (this.state === 'won' || this.state === 'out') return this.events;
    if (this.state === 'intro') {
      const b = Math.ceil(this.introT / this.beat);
      this.introT -= dt;
      if (Math.ceil(this.introT / this.beat) !== b && this.introT > 0) this.events.push({ type: 'count', n: Math.ceil(this.introT / this.beat) });
      this._spin(dt);
      if (this.introT <= 0) { this.state = 'play'; this.events.push({ type: 'go' }); }
      return this.events;
    }
    const beatBefore = Math.floor(this.time / this.beat);
    this.time += dt;
    if (Math.floor(this.time / this.beat) !== beatBefore) this.events.push({ type: 'beat', n: beatBefore + 1 });
    this._spin(dt);
    this._arms(dt);
    this._gapsStep(dt);
    this._tonearmStep(dt);
    for (const a of this.animals) {
      if (a.out) continue;
      const ctl = a.isPlayer ? input : this._ai(a, dt);
      this._move(a, ctl, dt);
    }
    this._bumps();
    this._hits();
    for (const a of this.animals) {
      if (a.out) continue;
      const r = Math.hypot(a.x, a.z);
      const inGap = a.air <= 0 && this.gaps.some((g) => g.open && this._inGap(g, a));
      if (r > R + BODY * 0.3 || inGap) this._fall(a, inGap ? 'gap' : 'edge');
    }
    if (this.time >= this.track.len && this.state === 'play') {
      this.state = 'won';
      this.events.push({ type: 'won', left: this.left });
    }
    return this.events;
  }

  // ---- the record ----------------------------------------------------------------------------------------------------

  _spin(dt) {
    if (this.track.flip && this.state === 'play') {
      this.flipT -= dt;
      if (this.flipT <= this.beat * 2 && !this.flipWarned) { this.flipWarned = true; this.events.push({ type: 'flipWarn' }); }
      if (this.flipT <= 0) {
        this.flipT = this.beat * (16 + Math.floor(this.rand() * 3) * 4);
        this.flipWarned = false;
        this.spinTarget = -this.spinTarget;
        this.events.push({ type: 'flip' });
      }
    }
    this.spin += (this.spinTarget - this.spin) * Math.min(1, dt * 6);
    this.phi += this.spin * dt;
  }

  _arms(dt) {
    for (const arm of this.arms) {
      const w = (Math.PI * 2) / (arm.period * this.beat);
      arm.a = wrap(arm.a + w * dt);
      arm.w = w;
    }
  }

  _gapsStep(dt) {
    if (!this.track.gaps) return;
    this.gapT -= dt;
    if (this.gapT <= 0) {
      this.gapT = this.beat * 12;
      // a ring sector of the vinyl warns for 2 beats, opens for 4 beats, then closes; it turns with the record
      const r0 = 2.2 + Math.floor(this.rand() * 3) * 1.8;
      const span = 0.7 + this.rand() * 0.5;
      const a0 = this.rand() * Math.PI * 2;
      this.gaps.push({ r0, r1: r0 + 1.7, a0, span, warn: this.beat * 2, openT: this.beat * 4, open: false, phi0: this.phi });
      this.events.push({ type: 'gapWarn' });
    }
    for (const g of this.gaps) {
      if (g.warn > 0) { g.warn -= dt; if (g.warn <= 0) { g.open = true; this.events.push({ type: 'gapOpen' }); } } else if (g.open) { g.openT -= dt; if (g.openT <= 0) { g.open = false; g.done = true; } }
    }
    this.gaps = this.gaps.filter((g) => !g.done);
  }

  /** Where a gap's start angle is now (it turns with the record). */
  gapAngle(g) { return g.a0 + (this.phi - g.phi0); }

  _inGap(g, a) {
    const r = Math.hypot(a.x, a.z);
    if (r < g.r0 || r > g.r1) return false;
    const d = wrap(Math.atan2(a.z, a.x) - this.gapAngle(g));
    const dd = d < 0 ? d + Math.PI * 2 : d;
    return dd < g.span;
  }

  _tonearmStep(dt) {
    if (!this.track.tonearm || this.state !== 'play') return;
    const tn = this.tonearm;
    tn.t -= dt;
    if (tn.state === 'rest' && tn.t <= 0) { tn.state = 'warn'; tn.t = this.beat * 3; this.events.push({ type: 'armWarn' }); } else if (tn.state === 'warn' && tn.t <= 0) { tn.state = 'sweep'; tn.t = this.beat * 4; tn.a = 0; this.events.push({ type: 'armSweep' }); } else if (tn.state === 'sweep') {
      tn.a = Math.min(1, tn.a + dt / (this.beat * 4));
      if (tn.t <= 0) { tn.state = 'rest'; tn.t = this.beat * 24; }
    }
  }

  /** The tonearm pivots outside the record at (R+2.5, -R+1) and swings across: its segment now. */
  tonearmSegment() {
    const px = R + 2.5;
    const pz = -R + 1;
    const ang = Math.PI * 0.62 + this.tonearm.a * 0.7; // swings in from the edge over the outer part of the record
    const len = 10;
    return { x0: px, z0: pz, x1: px + Math.cos(ang) * len, z1: pz + Math.sin(ang) * len };
  }

  // ---- moving ------------------------------------------------------------------------------------------------------

  _move(a, ctl, dt) {
    a.air = Math.max(0, a.air - dt);
    a.duck = Math.max(0, a.duck - dt);
    a.stun = Math.max(0, a.stun - dt);
    a.slip = Math.max(0, (a.slip ?? 0) - dt);
    a.imm = Math.max(0, (a.imm ?? 0) - dt);
    let { x, z } = ctl;
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    if (a.stun > 0) { x = 0; z = 0; }
    a.moving = Math.min(1, l);
    // the record carries you round; your feet push you where you want; in the air you keep your speed
    const surfX = -a.z * this.spin;
    const surfZ = a.x * this.spin;
    const sp = SPEED * (a.duck > 0 ? 0.5 : 1);
    const wantX = surfX + x * sp;
    const wantZ = surfZ + z * sp;
    if (a.air <= 0) {
      const f = a.slip > 0 ? 1.6 : FRICTION; // bumped: slides on for a moment
      a.vx += (wantX - a.vx) * Math.min(1, dt * f);
      a.vz += (wantZ - a.vz) * Math.min(1, dt * f);
    }
    a.x += a.vx * dt;
    a.z += a.vz * dt;
    if (l > 0.1) a.face = Math.atan2(x, z);
    // the spindle in the middle
    const r = Math.hypot(a.x, a.z);
    if (r < SPINDLE + BODY) { const k = (SPINDLE + BODY) / (r || 1); a.x *= k; a.z *= k; }
  }

  _bumps() {
    const as = this.animals;
    for (let i = 0; i < as.length; i++) {
      for (let j = i + 1; j < as.length; j++) {
        const p = as[i];
        const q = as[j];
        if (p.out || q.out) continue;
        const dx = q.x - p.x;
        const dz = q.z - p.z;
        const d = Math.hypot(dx, dz);
        if (d > BODY * 2 || d < 1e-4) continue;
        const nx = dx / d;
        const nz = dz / d;
        const push = (BODY * 2 - d) / 2;
        p.x -= nx * push; p.z -= nz * push;
        q.x += nx * push; q.z += nz * push;
        // a bump: whoever runs in harder sends the other one away
        const rel = (p.vx - q.vx) * nx + (p.vz - q.vz) * nz;
        if (rel > 0.5) {
          const k = rel * 0.9;
          q.vx += nx * k * 1.1; q.vz += nz * k * 1.1;
          q.slip = 0.35; // loses footing for a moment
          p.vx -= nx * k * 0.3; p.vz -= nz * k * 0.3;
          if (p.isPlayer || q.isPlayer) this.events.push({ type: 'bump', x: (p.x + q.x) / 2, z: (p.z + q.z) / 2 });
        }
      }
    }
  }

  _hits() {
    for (const a of this.animals) {
      if (a.out || a.imm > 0) continue;
      const r = Math.hypot(a.x, a.z);
      const ang = Math.atan2(a.z, a.x);
      for (const arm of this.arms) {
        if (r < SPINDLE) continue;
        const d = wrap(ang - arm.a);
        const arc = Math.abs(d) * r;
        if (arc > BODY + 0.18) continue;
        const safe = arm.type === 'low' ? a.air > 0.08 : a.duck > 0;
        if (safe) continue;
        // swept along and outwards
        const tx = -Math.sin(arm.a);
        const tz = Math.cos(arm.a);
        const sp = arm.w * r;
        this._hit(a, tx * sp * 1.6 + (a.x / r) * 3.2, tz * sp * 1.6 + (a.z / r) * 3.2, arm.type);
      }
      if (this.tonearm.state === 'sweep') {
        const s = this.tonearmSegment();
        const d = segDist(s.x0, s.z0, s.x1, s.z1, a.x, a.z);
        if (d < BODY + 0.3 && a.air < 0.1) {
          const nx = a.x - s.x0;
          const nz = a.z - s.z0;
          const l = Math.hypot(nx, nz) || 1;
          // pushed along the swing
          this._hit(a, (-nz / l) * 6 + (a.x / (r || 1)) * 3, (nx / l) * 6 + (a.z / (r || 1)) * 3, 'tonearm');
        }
      }
    }
  }

  _hit(a, vx, vz, by) {
    a.vx = vx;
    a.vz = vz;
    a.stun = 0.55;
    a.imm = 1.1; // one hit at a time: a bar never drags you along
    a.air = 0;
    a.duck = 0;
    if (a.isPlayer) this.bumps++;
    this.events.push({ type: 'hit', id: a.id, by, x: a.x, z: a.z });
  }

  _fall(a, why) {
    if (a.isPlayer && this.lives > 1) {
      // the youngest have extra lives: back in the middle
      this.lives--;
      Object.assign(a, { x: 3, z: 0, vx: 0, vz: 0, stun: 0.6, air: 0 });
      this.events.push({ type: 'saved', why, lives: this.lives });
      return;
    }
    a.out = true;
    this.outs++;
    this.events.push({ type: 'out', id: a.id, why, x: a.x, z: a.z, left: this.left });
    if (a.isPlayer) { this.state = 'out'; this.events.push({ type: 'lost' }); }
  }

  // ---- the animals' brains ---------------------------------------------------------------------------------------

  _ai(a, dt) {
    const r = Math.hypot(a.x, a.z) || 1;
    const ang = Math.atan2(a.z, a.x);
    // react to an arm coming: hop or duck (some miss, the music gets harder)
    for (const arm of this.arms) {
      const d = wrap(ang - arm.a);
      const ahead = d > 0 && d * r < (arm.type === 'low' ? 1.6 + arm.w * r * 0.15 : 0.75 + arm.w * r * 0.08);
      if (!ahead || a.reacted === arm) continue;
      a.reacted = arm;
      if (this.rand() < a.skill + (this.easy ? -0.1 : 0)) { if (arm.type === 'low') this.jump(a); else this.duck(a); }
    }
    for (const arm of this.arms) { const d = wrap(ang - arm.a); if (d < -0.3 && a.reacted === arm) a.reacted = null; }
    if (this.tonearm.state === 'sweep') {
      const s = this.tonearmSegment();
      if (segDist(s.x0, s.z0, s.x1, s.z1, a.x, a.z) < 1.1 && this.rand() < a.skill * 0.25) this.jump(a);
    }
    // wander to a safe spot on the middle rings, away from gaps and the edge
    a.think -= dt;
    if (a.think <= 0 || Math.hypot(a.tx - a.x, a.tz - a.z) < 0.4) {
      a.think = 1 + this.rand() * 2;
      let ok = false;
      for (let k = 0; k < 6 && !ok; k++) {
        const ta = this.rand() * Math.PI * 2;
        const tr = 2.6 + this.rand() * 3.6;
        a.tx = Math.cos(ta) * tr;
        a.tz = Math.sin(ta) * tr;
        ok = !this.gaps.some((g) => this._inGap(g, { x: a.tx, z: a.tz }));
      }
    }
    // step out of a gap that is about to open, keep clear of the edge and the tonearm
    let x = a.tx - a.x;
    let z = a.tz - a.z;
    for (const g of this.gaps) if (this._inGap(g, a)) { x = -a.x; z = -a.z; }
    if (r > R - 1.4) { x = -a.x; z = -a.z; }
    if (this.tonearm.state !== 'rest') { const s = this.tonearmSegment(); if (segDist(s.x0, s.z0, s.x1, s.z1, a.x, a.z) < 2.5) { x -= (s.x0 - a.x) * 0.2; z -= (s.z0 - a.z) * 0.2; } }
    const l = Math.hypot(x, z);
    return l > 0.3 ? { x: (x / l) * 0.8, z: (z / l) * 0.8 } : { x: 0, z: 0 };
  }

  /** Stars: survive 1, never hit by a bar or the arm +1, half the animals or more knocked off +1... kept simple: */
  get result() {
    if (this.state !== 'won') return { stars: 0, left: this.left };
    return { stars: 1 + (this.bumps <= 1 ? 1 : 0) + (this.left <= 6 ? 1 : 0), left: this.left, bumps: this.bumps };
  }
}

function segDist(ax, az, bx, bz, px, pz) {
  const vx = bx - ax;
  const vz = bz - az;
  const l2 = vx * vx + vz * vz;
  const t = l2 ? Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / l2)) : 0;
  return Math.hypot(ax + vx * t - px, az + vz * t - pz);
}

/** Save: { unlocked (1..5), stars, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const tk of TRACKS) { const v = Math.floor(Number(s.stars[tk.id])); if (v >= 1 && v <= 3) stars[tk.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(TRACKS.length, u)) : 1, stars, muted: s.muted === true };
}
