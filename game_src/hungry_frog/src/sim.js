// «لعبة الضفدع الجائع» — the rules with no drawing. A little frog on a lily pond: drag to hop, tap LEAP for a big
// jump (safe in the air). The long sticky tongue snaps by itself at the nearest critter whose number is not bigger
// than the frog's; eating it adds its number, and the frog grows. Critters with a bigger number cannot be eaten;
// big frogs, snakes and herons with a bigger number try to eat the frog (a red dotted line or a shadow warns first).
// Being caught costs a heart (nothing else). Each level: grow to evolve, grow more, then beat the boss.
// Three levels: Misty Dawn (Big Bo the bully frog), Lily Marsh (Sly the snake), Sunset Swamp (the Grand Heron).
// Deterministic with a seed for the robot tests.

export const W = 15; // the pond: x from -W to W
export const D = 22; // z from -D to D

/** Critters: value range, speed, how they move, and whether a bigger one is a danger. */
export const KINDS = {
  fly: { v: [1, 2], speed: 2.0, move: 'buzz', fly: true, r: 0.22 },
  mosquito: { v: [2, 4], speed: 2.8, move: 'zig', fly: true, r: 0.24 },
  beetle: { v: [3, 7], speed: 0.9, move: 'crawl', r: 0.32 },
  dragonfly: { v: [5, 14], speed: 4.2, move: 'dart', fly: true, r: 0.45 },
  fish: { v: [8, 22], speed: 1.6, move: 'fish', r: 0.5 },
  snake: { v: [12, 40], speed: 1.8, move: 'slither', danger: true, r: 0.55 },
  frog: { v: [6, 40], speed: 1.2, move: 'hop', danger: true, r: 0.6 },
};

export const LEVELS = [
  { id: 1, ar: 'فجر ضبابي', en: 'Misty Dawn', start: 4, evolve: 15, boss: 26, kinds: ['fly', 'fly', 'mosquito', 'beetle', 'dragonfly', 'frog'], heron: false, bossKind: 'bigbo', bossPower: 40, bossHp: 40 },
  { id: 2, ar: 'مستنقع الزنابق', en: 'Lily Marsh', start: 8, evolve: 30, boss: 50, kinds: ['fly', 'mosquito', 'beetle', 'dragonfly', 'dragonfly', 'fish', 'frog', 'snake'], heron: true, bossKind: 'snake', bossPower: 70, bossHp: 60 },
  { id: 3, ar: 'مستنقع الغروب', en: 'Sunset Swamp', start: 15, evolve: 60, boss: 90, kinds: ['mosquito', 'dragonfly', 'dragonfly', 'fish', 'fish', 'frog', 'snake', 'snake'], heron: true, bossKind: 'heron', bossPower: 130, bossHp: 90 },
];

export const BOSS = {
  bigbo: { ar: 'بيج بو', en: 'Big Bo', r: 1.6 },
  snake: { ar: 'الثعبان سلاي', en: 'Sly the Snake', r: 1.4 },
  heron: { ar: 'مالك الحزين العملاق', en: 'The Grand Heron', r: 2.0 },
};

const LEAP_CD = 3;
const LEAP_T = 0.55;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/** The frog's body radius for a power (grows slower than the number). */
/** How much a critter adds: small ones their whole number, big ones a part of it (so growing takes a while). */
export const gainOf = (v) => (v <= 3 ? v : Math.round(3 + (v - 3) * 0.28));

export const sizeOf = (p) => 0.45 * Math.pow(Math.max(1, p) / 4, 0.42);

export class Pond {
  /** opts: { level (0..2), easy, seed } */
  constructor(opts = {}) {
    this.levelIndex = Math.max(0, Math.min(LEVELS.length - 1, opts.level ?? 0));
    this.level = LEVELS[this.levelIndex];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 3);
    this.frog = { x: 0, z: 6, power: this.level.start, face: Math.PI, hopT: 0, leapT: 0, leapCd: 0, vx: 0, vz: 0, invul: 0, stage: 1 };
    this.hearts = this.easy ? 4 : 3;
    this.maxHearts = this.hearts;
    this.critters = [];
    this.tongue = null;
    this.herons = [];
    this.boss = null;
    this.phase = 'grow'; // grow -> grow2 -> boss -> won | lost
    this.state = 'play';
    this.t = 0;
    this.nextId = 1;
    this.eaten = 0;
    this.drops = 0;
    this.combo = 0;
    this.comboT = 0;
    this.tongueCd = 0;
    this.move = { x: 0, z: 0 };
    this.events = [];
    this.pending = [];
    this.heronT = 8;
    for (let i = 0; i < 11; i++) this._spawn(true);
  }

  get r() { return sizeOf(this.frog.power); }
  get goal() { return this.phase === 'grow' ? this.level.evolve : this.phase === 'grow2' ? this.level.boss : null; }
  get airborne() { return this.frog.leapT > 0; }

  setMove(x, z) { const l = Math.hypot(x, z); this.move = l > 1 ? { x: x / l, z: z / l } : { x, z }; }

  leap() {
    const f = this.frog;
    if (this.state !== 'play' || f.leapCd > 0 || f.leapT > 0) return false;
    let dx = this.move.x;
    let dz = this.move.z;
    if (Math.hypot(dx, dz) < 0.2) { dx = Math.sin(f.face); dz = Math.cos(f.face); }
    const l = Math.hypot(dx, dz) || 1;
    f.leapT = LEAP_T;
    f.leapCd = LEAP_CD;
    f.lx = (dx / l) * (6 + this.r * 2) / LEAP_T;
    f.lz = (dz / l) * (6 + this.r * 2) / LEAP_T;
    this.pending.push({ type: 'leap' });
    return true;
  }

  // ---- critters ------------------------------------------------------------------------------------------------------

  _value(kind) {
    const [a, b] = KINDS[kind].v;
    const p = this.frog.power;
    // most critters are smaller than the frog; some are bigger (the red ones)
    const big = this.rand() < (KINDS[kind].danger ? 0.45 : 0.22);
    let v = big ? Math.round(p * (1.2 + this.rand() * 0.9)) : Math.max(1, Math.round(p * (0.05 + this.rand() * 0.3)));
    if (kind === 'fly' || kind === 'mosquito') v = Math.round(a + this.rand() * (b - a)) + (big ? 0 : Math.floor(p * 0.05));
    return Math.max(a, Math.min(Math.max(b, Math.round(p * 2.2)), v));
  }

  _spawn(anywhere = false) {
    const kinds = this.level.kinds;
    const kind = kinds[Math.floor(this.rand() * kinds.length)];
    const k = KINDS[kind];
    let x;
    let z;
    for (let i = 0; i < 12; i++) {
      x = (this.rand() * 2 - 1) * (W - 1);
      z = (this.rand() * 2 - 1) * (D - 1);
      if (Math.hypot(x - this.frog.x, z - this.frog.z) > (anywhere ? 6 : 9)) break;
    }
    let v = this._value(kind);
    if (kind === 'frog' || kind === 'snake') v = Math.max(v, Math.round(this.frog.power * (this.rand() < 0.5 ? 0.6 : 1.4)));
    const c = { id: this.nextId++, kind, x, z, v, a: this.rand() * Math.PI * 2, t: this.rand() * 10, r: k.r * (0.8 + Math.min(1.8, v / 12) * 0.35), y: k.fly ? 0.9 : 0, air: 0, aim: 0, aimX: 0, aimZ: 0, lash: 0, cool: 2 + this.rand() * 3, hopT: 0 };
    if (kind === 'fish') c.jumpT = 1 + this.rand() * 3;
    this.critters.push(c);
    this.events.push({ type: 'spawn', id: c.id, kind });
  }

  _moveCritter(c, dt) {
    const k = KINDS[c.kind];
    const f = this.frog;
    c.t += dt;
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.hypot(dx, dz) || 1;
    const bigger = c.v > f.power;
    let sp = k.speed;
    switch (k.move) {
      case 'buzz': c.a += Math.sin(c.t * 1.7) * 2.2 * dt; c.y = 0.9 + Math.sin(c.t * 5) * 0.25; break;
      case 'zig': c.a += (Math.sin(c.t * 4) > 0 ? 3 : -3) * dt; c.y = 1.0 + Math.sin(c.t * 7) * 0.3; break;
      case 'crawl': c.a += Math.sin(c.t * 0.6) * 0.8 * dt; break;
      case 'dart': {
        // dart, hover, dart
        const ph = (c.t % 2.4) / 2.4;
        sp = ph < 0.3 ? k.speed * 1.6 : 0.3;
        if (ph < 0.02) c.a += (this.rand() - 0.5) * 3;
        c.y = 1.2;
        break;
      }
      case 'fish': {
        sp = c.air > 0 ? 3 : 1.1;
        c.a += Math.sin(c.t * 0.9) * dt;
        if (c.air > 0) { c.air -= dt; c.y = Math.sin((1 - c.air / 1.1) * Math.PI) * 1.8; if (c.air <= 0) { c.y = 0; this.events.push({ type: 'splash', x: c.x, z: c.z }); } } else {
          c.jumpT -= dt;
          if (c.jumpT <= 0) { c.air = 1.1; c.jumpT = 2 + this.rand() * 3; this.events.push({ type: 'splash', x: c.x, z: c.z }); }
        }
        break;
      }
      case 'slither': c.a += Math.sin(c.t * 2.2) * 2.4 * dt; break;
      case 'hop': default: {
        c.hopT -= dt;
        sp = c.hopT > 0 ? k.speed * 3 : 0;
        if (c.hopT <= -0.6) { c.hopT = 0.4; c.a += (this.rand() - 0.5) * 2; }
        break;
      }
    }
    // dangers that are bigger hunt the frog; smaller critters run away from it
    if (k.danger && bigger && d < 9 && this.state === 'play' && !this.airborne) c.a = turn(c.a, Math.atan2(dx, dz), 2 * dt);
    else if (!bigger && d < 4.5 + this.r && !k.danger) { c.a = turn(c.a, Math.atan2(-dx, -dz), 4 * dt); sp *= 1.5; }
    if (c.aim > 0 || c.lash > 0) sp = 0;
    c.x += Math.sin(c.a) * sp * dt;
    c.z += Math.cos(c.a) * sp * dt;
    if (Math.abs(c.x) > W - 0.5) { c.x = Math.sign(c.x) * (W - 0.5); c.a = -c.a; }
    if (Math.abs(c.z) > D - 0.5) { c.z = Math.sign(c.z) * (D - 0.5); c.a = Math.PI - c.a; }
    // a bigger frog or snake aims (red dotted line) and then lashes its tongue / strikes
    if (k.danger && bigger && this.state === 'play' && this.t > 8) this._attack(c, d, dt, c.kind === 'snake' ? 2.6 + c.r : 3.6 + c.r);
  }

  _attack(c, d, dt, reach) {
    const f = this.frog;
    c.cool -= dt;
    if (c.aim > 0) {
      c.aim -= dt;
      if (c.aim <= 0) {
        c.lash = 0.3;
        // hit if the frog is still close to the aimed line
        const lx = c.aimX - c.x;
        const lz = c.aimZ - c.z;
        const ll = Math.hypot(lx, lz) || 1;
        const px = f.x - c.x;
        const pz = f.z - c.z;
        const along = (px * lx + pz * lz) / ll;
        const off = Math.abs(px * lz - pz * lx) / ll;
        this.events.push({ type: 'lash', id: c.id, kind: c.kind });
        if (along > 0 && along < reach + 0.4 && off < this.r + 0.35) this._hurt(c);
        c.cool = 2.4 + this.rand() * 1.5;
      }
    } else if (c.lash > 0) c.lash -= dt;
    else if (c.cool <= 0 && d < reach && !this.airborne && f.invul <= 0) {
      c.aim = this.easy ? 1.3 : 0.9;
      const l = Math.hypot(f.x - c.x, f.z - c.z) || 1;
      c.aimX = c.x + ((f.x - c.x) / l) * reach;
      c.aimZ = c.z + ((f.z - c.z) / l) * reach;
      this.events.push({ type: 'aim', id: c.id });
    }
  }

  _hurt(by) {
    const f = this.frog;
    if (f.invul > 0 || this.airborne || this.state !== 'play') return;
    this.hearts--;
    f.invul = 2;
    this.combo = 0;
    // knocked back a little (the frog slips free)
    const dx = f.x - (by ? by.x : f.x);
    const dz = f.z - (by ? by.z : f.z + 1);
    const l = Math.hypot(dx, dz) || 1;
    f.kx = (dx / l) * 8;
    f.kz = (dz / l) * 8;
    this.events.push({ type: 'hurt', by: by ? by.kind : 'heron', hearts: this.hearts });
    if (this.hearts <= 0) {
      this.state = 'lost';
      this.result = this._result(false, by ? by.kind : 'heron');
      this.events.push({ type: 'gulped', by: this.result.by });
    }
  }

  // ---- tongue -------------------------------------------------------------------------------------------------------

  _tongueTarget() {
    const f = this.frog;
    const reach = 2.4 + this.r * 2.6;
    let best = null;
    for (const c of this.critters) {
      if (c.v > f.power || c.gone) continue;
      if (c.kind === 'fish' && c.air <= 0) continue; // fish only out of the water
      const d = Math.hypot(c.x - f.x, c.z - f.z) - c.r;
      if (d < reach && (!best || d < best.d)) best = { c, d };
    }
    if (this.boss && this.boss.hp > 0 && f.power >= this.level.boss) {
      const b = this.boss;
      const d = Math.hypot(b.x - f.x, b.z - f.z) - b.r;
      if (d < reach + 0.6 && (!best || d < best.d + 1)) best = { c: b, d, boss: true };
    }
    return best;
  }

  _tongueStep(dt) {
    const f = this.frog;
    const tg = this.tongue;
    if (!tg) {
      this.tongueCd -= dt;
      if (this.tongueCd > 0 || this.state !== 'play') return;
      const best = this._tongueTarget();
      if (!best) return;
      this.tongue = { id: best.c.id, boss: !!best.boss, phase: 'out', t: 0, len: 0, tx: best.c.x, tz: best.c.z, ty: best.c.y ?? 0, air: this.airborne };
      f.face = Math.atan2(best.c.x - f.x, best.c.z - f.z);
      this.events.push({ type: 'tongue' });
      return;
    }
    const target = tg.boss ? this.boss : this.critters.find((c) => c.id === tg.id);
    tg.t += dt;
    if (tg.phase === 'out') {
      if (target && !tg.caught) { tg.tx = target.x; tg.tz = target.z; tg.ty = target.y ?? 0; }
      const full = Math.hypot(tg.tx - f.x, tg.tz - f.z);
      tg.len = Math.min(full, tg.len + dt * 34);
      if (tg.len >= full - 0.05) {
        tg.phase = 'back';
        tg.t = 0;
        if (target && tg.boss) {
          const dmg = Math.max(2, Math.round(f.power * 0.14));
          target.hp = Math.max(0, target.hp - dmg);
          target.flash = 0.2;
          this.events.push({ type: 'bossHit', dmg, hp: target.hp });
          if (target.hp <= 0) this._bossDown();
        } else if (target && target.v <= f.power) { tg.caught = target; target.gone = true; this.events.push({ type: 'stick', kind: target.kind }); } else this.events.push({ type: 'miss' });
      }
    } else {
      tg.len = Math.max(0, tg.len - dt * (tg.caught ? 22 : 30));
      const l = Math.hypot(tg.tx - f.x, tg.tz - f.z) || 1;
      if (tg.caught) { tg.caught.x = f.x + ((tg.tx - f.x) / l) * tg.len; tg.caught.z = f.z + ((tg.tz - f.z) / l) * tg.len; }
      if (tg.len <= 0) {
        if (tg.caught) this._eat(tg.caught, tg.air);
        this.tongue = null;
        this.tongueCd = 0.4;
      }
    }
  }

  _eat(c, air) {
    const f = this.frog;
    this.critters = this.critters.filter((o) => o !== c);
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = 2.2;
    const bonus = (air ? 1 : 0) + (this.combo >= 3 ? 1 : 0);
    f.power += gainOf(c.v) + bonus;
    this.eaten++;
    this.drops += 1 + Math.floor(c.v / 5);
    this.events.push({ type: 'eat', kind: c.kind, v: c.v, bonus, air, combo: this.combo, power: f.power });
    if (this.phase === 'grow' && f.power >= this.level.evolve) { this.phase = 'grow2'; f.stage = 2; this.events.push({ type: 'evolve', stage: 2 }); }
    if (this.phase === 'grow2' && f.power >= this.level.boss) { this.phase = 'boss'; f.stage = 3; this._bossIn(); }
  }

  _bossIn() {
    const L = this.level;
    const bz = this.frog.z > 0 ? -D + 5 : D - 5;
    this.boss = { kind: L.bossKind, x: 0, z: bz, hp: L.bossHp * (this.easy ? 0.75 : 1), max: L.bossHp * (this.easy ? 0.75 : 1), v: L.bossPower, r: BOSS[L.bossKind].r, a: 0, t: 0, aim: 0, lash: 0, cool: 3, flash: 0, y: 0, id: -1 };
    this.boss.max = this.boss.hp;
    this.events.push({ type: 'boss', kind: L.bossKind });
  }

  _bossStep(dt) {
    const b = this.boss;
    const f = this.frog;
    b.t += dt;
    b.flash = Math.max(0, b.flash - dt);
    if (b.hp <= 0) return;
    const dx = f.x - b.x;
    const dz = f.z - b.z;
    const d = Math.hypot(dx, dz) || 1;
    const reach = b.r + 4.2;
    // the heron flies over; the snake slithers; Big Bo hops
    const sp = b.aim > 0 || b.lash > 0 ? 0 : b.kind === 'heron' ? 2.4 : b.kind === 'snake' ? 2.0 : (Math.sin(b.t * 4) > 0.2 ? 3.2 : 0);
    if (d > reach * 0.7) { b.x += (dx / d) * sp * dt; b.z += (dz / d) * sp * dt; }
    b.a = Math.atan2(dx, dz);
    b.cool -= dt;
    if (b.aim > 0) {
      b.aim -= dt;
      if (b.aim <= 0) {
        b.lash = 0.35;
        const lx = b.aimX - b.x;
        const lz = b.aimZ - b.z;
        const ll = Math.hypot(lx, lz) || 1;
        const along = (dx * lx + dz * lz) / ll;
        const off = Math.abs(dx * lz - dz * lx) / ll;
        this.events.push({ type: 'lash', id: -1, kind: b.kind });
        if (along > 0 && along < reach + 0.5 && off < this.r + 0.5) this._hurt(b);
        b.cool = (this.easy ? 2.6 : 1.9) + this.rand();
      }
    } else if (b.lash > 0) b.lash -= dt;
    else if (b.cool <= 0 && d < reach + 1) {
      b.aim = this.easy ? 1.4 : 1.0;
      b.aimX = b.x + (dx / d) * reach;
      b.aimZ = b.z + (dz / d) * reach;
      this.events.push({ type: 'aim', id: -1 });
    }
    b.x = Math.max(-W + 1, Math.min(W - 1, b.x));
    b.z = Math.max(-D + 1, Math.min(D - 1, b.z));
  }

  _bossDown() {
    this.state = 'won';
    this.result = this._result(true);
    this.events.push({ type: 'bossDown', kind: this.boss.kind });
  }

  _heronStep(dt) {
    if (!this.level.heron || this.phase === 'boss') return;
    this.heronT -= dt;
    if (this.heronT <= 0) {
      // a heron's shadow appears where the frog is heading; it strikes after a moment
      const f = this.frog;
      this.herons.push({ x: f.x + this.move.x * 2, z: f.z + this.move.z * 2, t: this.easy ? 1.8 : 1.3, r: 1.5 });
      this.heronT = (this.easy ? 12 : 8) + this.rand() * 4;
      this.events.push({ type: 'heron' });
    }
    for (const hr of this.herons) {
      hr.t -= dt;
      if (hr.t <= 0 && !hr.struck) {
        hr.struck = true;
        this.events.push({ type: 'strike', x: hr.x, z: hr.z });
        if (Math.hypot(this.frog.x - hr.x, this.frog.z - hr.z) < hr.r + this.r * 0.5) this._hurt(null);
      }
    }
    this.herons = this.herons.filter((hr) => hr.t > -0.6);
  }

  // ---- the step ------------------------------------------------------------------------------------------------------

  step(dt) {
    this.events = this.pending;
    this.pending = [];
    if (this.state !== 'play') return this.events;
    this.t += dt;
    const f = this.frog;
    f.invul = Math.max(0, f.invul - dt);
    f.leapCd = Math.max(0, f.leapCd - dt);
    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    // hop: the frog moves in little hops while the finger drags
    const sp = 3.4 + this.r * 1.4;
    if (f.leapT > 0) {
      f.leapT -= dt;
      f.x += f.lx * dt;
      f.z += f.lz * dt;
      if (f.leapT <= 0) { f.leapT = 0; this.events.push({ type: 'land' }); }
    } else {
      const m = Math.hypot(this.move.x, this.move.z);
      if (m > 0.1) {
        f.face = this.tongue ? f.face : Math.atan2(this.move.x, this.move.z);
        f.hopT += dt * (2.6 + m);
        if (f.hopT >= 1) { f.hopT -= 1; this.events.push({ type: 'hop' }); }
      } else f.hopT = Math.max(0, f.hopT - dt * 3);
      f.x += this.move.x * sp * dt + (f.kx ?? 0) * dt;
      f.z += this.move.z * sp * dt + (f.kz ?? 0) * dt;
    }
    f.kx = (f.kx ?? 0) * Math.pow(0.02, dt);
    f.kz = (f.kz ?? 0) * Math.pow(0.02, dt);
    f.x = Math.max(-W + 0.6, Math.min(W - 0.6, f.x));
    f.z = Math.max(-D + 0.6, Math.min(D - 0.6, f.z));
    for (const c of this.critters) this._moveCritter(c, dt);
    // a bigger danger that touches the frog (not by tongue) bumps it too
    for (const c of this.critters) if (KINDS[c.kind].danger && c.v > f.power && Math.hypot(c.x - f.x, c.z - f.z) < c.r + this.r * 0.8) this._hurt(c);
    if (this.boss) {
      this._bossStep(dt);
      if (this.boss.hp > 0 && Math.hypot(this.boss.x - f.x, this.boss.z - f.z) < this.boss.r + this.r * 0.6) this._hurt(this.boss);
    }
    this._heronStep(dt);
    this._tongueStep(dt);
    // keep the pond lively, with more food when the frog is stuck
    const want = this.phase === 'boss' ? 7 : 10;
    if (this.critters.length < want && this.rand() < dt * 0.45) this._spawn();
    // remove critters that are now far too small to matter
    this.critters = this.critters.filter((c) => c.gone || c.v >= f.power * 0.04 || c.kind === 'fly');
    return this.events;
  }

  _result(won, by) {
    const lost = this.maxHearts - this.hearts;
    return { won, stars: won ? 1 + (lost <= 1 ? 1 : 0) + (lost === 0 ? 1 : 0) : 0, power: this.frog.power, eaten: this.eaten, drops: this.drops, by };
  }
}

function turn(a, b, k) {
  let d = b - a;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  return a + Math.max(-k, Math.min(k, d));
}

/** A careful little player for the tests: runs from bigger dangers and red lines, chases food, fights the boss. */
export function robotPlay(p) {
  const f = p.frog;
  let ax = 0;
  let az = 0;
  let danger = false;
  const threats = p.critters.filter((c) => KINDS[c.kind].danger && c.v > f.power);
  if (p.boss && p.boss.hp > 0) threats.push(p.boss);
  for (const c of threats) {
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.max(0.3, Math.hypot(dx, dz));
    const warn = c.aim > 0 ? 8 : 6;
    if (d < warn + c.r) {
      const w = (c.aim > 0 ? 3 : 1) / d;
      // sideways out of an aimed line, otherwise straight away
      if (c.aim > 0) { ax += (-(c.aimZ - c.z) / d) * w * Math.sign(dx * (c.aimZ - c.z) - dz * (c.aimX - c.x) || 1) * -1 + (dx / d) * w; az += ((c.aimX - c.x) / d) * w * Math.sign(dx * (c.aimZ - c.z) - dz * (c.aimX - c.x) || 1) * -1 + (dz / d) * w; } else { ax += (dx / d) * w; az += (dz / d) * w; }
      if (c.aim > 0 && c.aim < 0.5 && d < 5 + c.r) danger = true;
    }
  }
  for (const hr of p.herons) if (!hr.struck && Math.hypot(f.x - hr.x, f.z - hr.z) < hr.r + 1.5) { ax += (f.x - hr.x) * 2; az += (f.z - hr.z) * 2; if (hr.t < 0.5) danger = true; }
  // food (or the boss when it is not aiming)
  let goal = null;
  if (p.boss && p.boss.hp > 0 && p.boss.aim <= 0 && p.boss.lash <= 0 && p.boss.cool > 0.4) goal = p.boss;
  else {
    let best = null;
    for (const c of p.critters) {
      if (c.v > f.power || (c.kind === 'fish' && c.air <= 0 && c.jumpT > 1.2)) continue;
      const d = Math.hypot(c.x - f.x, c.z - f.z);
      const safe = !threats.some((t) => Math.hypot(t.x - c.x, t.z - c.z) < 4 + t.r);
      const sc = d - c.v * 0.3 + (safe ? 0 : 20);
      if (!best || sc < best.sc) best = { c, sc };
    }
    goal = best && best.c;
  }
  if (goal) {
    const dx = goal.x - f.x;
    const dz = goal.z - f.z;
    const d = Math.hypot(dx, dz) || 1;
    const keep = goal === p.boss ? goal.r + 2.6 : 1.5;
    const k = d > keep ? 1 : -0.6;
    ax += (dx / d) * 0.9 * k;
    az += (dz / d) * 0.9 * k;
  }
  // away from the banks
  ax += (-f.x / W) * 0.3;
  az += (-f.z / D) * 0.3;
  return { x: ax, z: az, leap: danger };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const d = Math.floor(Number(s.drops));
  const b = {};
  if (s.best && typeof s.best === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.best[lv.id])); if (v > 0) b[lv.id] = Math.min(v, 99999); }
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, drops: Number.isFinite(d) && d > 0 ? Math.min(d, 999999) : 0, best: b, muted: s.muted === true };
}
