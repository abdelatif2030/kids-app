// «سيف الساموراي» — the rules with no drawing. A little samurai defends a cherry-blossom courtyard from waves of
// cartoon ninjas, then a giant oni with a spiked club. Drag to move, the sword swings by itself at a ninja in reach,
// a swipe dashes (a fast glowing cut that also dodges). No blood: a beaten ninja turns into a puff of petals.
// Deterministic with a seed, so a robot test can play every stage.

export const ARENA = 10.5; // courtyard radius
const SPEED = 5.4;
const DASH_SPEED = 24;
const DASH_TIME = 0.2;
const DASH_CD = 0.45;
const SLASH_RANGE = 2.0;
const SLASH_CD = 0.3;
const COMBO_TIME = 2.6;
const GATES = [[0, -ARENA], [ARENA, 0], [0, ARENA], [-ARENA, 0], [-7.4, -7.4], [7.4, -7.4]];

/** Three stages: day, sunset, lantern night. Each wave is a list of [kind, count]. */
export const STAGES = [
  { id: 1, waves: [[['ninja', 3]], [['ninja', 5]], [['ninja', 4], ['thrower', 1]], [['ninja', 5], ['big', 1]]], boss: 40 },
  { id: 2, waves: [[['ninja', 5]], [['ninja', 4], ['thrower', 2]], [['ninja', 5], ['big', 2]], [['ninja', 6], ['big', 1], ['thrower', 2]]], boss: 52 },
  { id: 3, waves: [[['ninja', 6], ['thrower', 1]], [['ninja', 5], ['big', 2], ['thrower', 1]], [['ninja', 7], ['thrower', 3]], [['ninja', 6], ['big', 3], ['thrower', 2]]], boss: 64 },
];

const KIND = {
  ninja: { hp: 1, speed: 2.7, reach: 1.45, wind: 0.75, r: 0.45 },
  big: { hp: 3, speed: 2.0, reach: 1.8, wind: 0.95, r: 0.65 },
  thrower: { hp: 1, speed: 2.4, reach: 6.5, wind: 0.9, r: 0.45 },
};

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const ang = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };

export class Fight {
  /** opts: { stage (0..2), easy (younger children: slower ninjas, more hearts), seed } */
  constructor(opts = {}) {
    this.stage = STAGES[opts.stage ?? 0];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 5);
    this.maxHp = this.easy ? 8 : 5;
    this.p = { x: 0, z: 2, face: Math.PI, hp: this.maxHp, inv: 0, dash: 0, dx: 0, dz: 0, dashCd: 0, slashCd: 0, slash: 0, moving: 0, hitIds: new Set() };
    this.enemies = [];
    this.stars = [];
    this.queue = [];
    this.wave = -1;
    this.boss = null;
    this.combo = 0;
    this.comboT = 0;
    this.bestCombo = 0;
    this.kills = 0;
    this.hurts = 0;
    this.nextId = 1;
    this.time = 0;
    this.state = 'fight'; // fight -> bossIntro -> boss -> won
    this.events = [];
    this.waveGap = 1.2;
  }

  get speedMul() { return this.easy ? 0.7 : 1; }

  step(dt, input = { x: 0, z: 0 }) {
    this.events = [];
    if (this.state === 'won' || this.state === 'down') return this.events;
    this.time += dt;
    this._player(dt, input);
    this._spawn(dt);
    this._enemies(dt);
    this._stars(dt);
    if (this.boss) this._boss(dt);
    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    this._autoSlash();
    return this.events;
  }

  /** A swipe: a fast dash in that direction (also dodges: no damage while dashing). */
  dash(dx, dz) {
    const p = this.p;
    if (p.dashCd > 0 || this.state === 'won' || this.state === 'down') return false;
    const l = Math.hypot(dx, dz);
    if (l < 0.01) { dx = Math.sin(p.face); dz = Math.cos(p.face); } else { dx /= l; dz /= l; }
    p.dash = DASH_TIME;
    p.dashCd = DASH_CD;
    p.dx = dx;
    p.dz = dz;
    p.face = Math.atan2(dx, dz);
    p.hitIds = new Set();
    this.events.push({ type: 'dash', x: p.x, z: p.z, dx, dz });
    return true;
  }

  // ---- the samurai --------------------------------------------------------------------------------------------------

  _player(dt, input) {
    const p = this.p;
    p.inv = Math.max(0, p.inv - dt);
    p.dashCd = Math.max(0, p.dashCd - dt);
    p.slashCd = Math.max(0, p.slashCd - dt);
    p.slash = Math.max(0, p.slash - dt);
    if (p.dash > 0) {
      p.dash -= dt;
      const ox = p.x;
      const oz = p.z;
      p.x += p.dx * DASH_SPEED * dt;
      p.z += p.dz * DASH_SPEED * dt;
      this._clamp(p);
      // everything along the path is cut
      for (const e of this.enemies) {
        if (p.hitIds.has(e.id)) continue;
        if (segDist(ox, oz, p.x, p.z, e.x, e.z) < 1.1 + KIND[e.kind].r) { p.hitIds.add(e.id); this._hurtEnemy(e, 2, 'dash'); }
      }
      for (const s of this.stars) if (!s.gone && segDist(ox, oz, p.x, p.z, s.x, s.z) < 1) { s.gone = true; this.events.push({ type: 'deflect', x: s.x, z: s.z }); }
      const b = this.boss;
      if (b && b.hp > 0 && !p.hitIds.has('boss') && segDist(ox, oz, p.x, p.z, b.x, b.z) < 1.9) { p.hitIds.add('boss'); this._hurtBoss(b.state === 'tired' ? 4 : 2, 'dash'); }
      p.moving = 1;
      return;
    }
    let { x, z } = input;
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    p.moving = Math.min(1, l);
    if (l > 0.08) {
      p.x += x * SPEED * dt;
      p.z += z * SPEED * dt;
      if (p.slash <= 0) p.face = Math.atan2(x, z);
      this._clamp(p);
    }
  }

  _clamp(a, r = ARENA - 0.6) {
    const d = Math.hypot(a.x, a.z);
    if (d > r) { a.x *= r / d; a.z *= r / d; }
  }

  _autoSlash() {
    const p = this.p;
    if (p.slashCd > 0 || p.dash > 0) return;
    let target = null;
    let bd = 1e9;
    for (const e of this.enemies) {
      const d = Math.hypot(e.x - p.x, e.z - p.z) - KIND[e.kind].r;
      if (d < SLASH_RANGE && d < bd) { bd = d; target = e; }
    }
    const b = this.boss;
    const bossNear = b && b.hp > 0 && Math.hypot(b.x - p.x, b.z - p.z) - 1.3 < SLASH_RANGE;
    const starNear = this.stars.find((s) => !s.gone && Math.hypot(s.x - p.x, s.z - p.z) < 1.6);
    if (!target && !bossNear && !starNear) return;
    const tx = target ? target.x : bossNear ? b.x : starNear.x;
    const tz = target ? target.z : bossNear ? b.z : starNear.z;
    const a = Math.atan2(tx - p.x, tz - p.z);
    p.face = a;
    p.slashCd = SLASH_CD;
    p.slash = 0.18;
    let hit = 0;
    for (const e of [...this.enemies]) {
      const d = Math.hypot(e.x - p.x, e.z - p.z) - KIND[e.kind].r;
      if (d < SLASH_RANGE && Math.abs(ang(Math.atan2(e.x - p.x, e.z - p.z) - a)) < 1.25) { this._hurtEnemy(e, 1, 'slash'); hit++; }
    }
    for (const s of this.stars) if (!s.gone && Math.hypot(s.x - p.x, s.z - p.z) < 1.8) { s.gone = true; hit++; this.events.push({ type: 'deflect', x: s.x, z: s.z }); }
    if (bossNear) { this._hurtBoss(1, 'slash'); hit++; }
    this.events.push({ type: 'slash', x: p.x, z: p.z, a, hit });
  }

  _hurtPlayer(fromX, fromZ) {
    const p = this.p;
    if (p.inv > 0 || p.dash > 0) return false;
    p.hp--;
    this.hurts++;
    p.inv = 1.3;
    const l = Math.hypot(p.x - fromX, p.z - fromZ) || 1;
    p.x += ((p.x - fromX) / l) * 1.2;
    p.z += ((p.z - fromZ) / l) * 1.2;
    this._clamp(p);
    this.combo = 0;
    this.events.push({ type: 'hurt', hp: p.hp });
    if (p.hp <= 0) { this.state = 'down'; this.events.push({ type: 'down' }); }
    return true;
  }

  // ---- ninjas -------------------------------------------------------------------------------------------------------

  _spawn(dt) {
    if (this.state !== 'fight') return;
    if (this.queue.length) {
      this.spawnT -= dt;
      if (this.spawnT <= 0 && this.enemies.length < 7) {
        const kind = this.queue.shift();
        const [gx, gz] = GATES[Math.floor(this.rand() * GATES.length)];
        this.enemies.push({ id: this.nextId++, kind, x: gx, z: gz, hp: KIND[kind].hp, state: 'run', t: 0, face: 0, wx: 0, wz: 0, flash: 0, side: this.rand() < 0.5 ? -1 : 1 });
        this.spawnT = 0.55;
      }
      return;
    }
    if (this.enemies.length) return;
    this.waveGap -= dt;
    if (this.waveGap > 0) return;
    this.wave++;
    if (this.wave >= this.stage.waves.length) {
      this.state = 'boss';
      this.boss = { x: 0, z: -ARENA + 1.5, hp: this.stage.boss, max: this.stage.boss, state: 'enter', t: 1.6, face: 0, ax: 0, az: 0, flash: 0, n: 0 };
      this.events.push({ type: 'boss' });
      return;
    }
    for (const [kind, n] of this.stage.waves[this.wave]) for (let i = 0; i < n; i++) this.queue.push(kind);
    for (let i = this.queue.length - 1; i > 0; i--) { const j = Math.floor(this.rand() * (i + 1)); [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]]; }
    this.spawnT = 0.3;
    this.waveGap = 1.6;
    this.events.push({ type: 'wave', n: this.wave + 1, of: this.stage.waves.length });
  }

  _enemies(dt) {
    const p = this.p;
    const m = this.speedMul;
    for (const e of this.enemies) {
      const k = KIND[e.kind];
      e.flash = Math.max(0, e.flash - dt);
      const dx = p.x - e.x;
      const dz = p.z - e.z;
      const d = Math.hypot(dx, dz) || 1;
      e.t -= dt;
      if (e.state === 'run') {
        e.face = Math.atan2(dx, dz);
        const want = e.kind === 'thrower' ? 5.5 : k.reach * 0.85;
        if (d > want) {
          // a little sideways, so they come from different sides
          const sx = -dz / d * 0.35 * e.side;
          const sz = dx / d * 0.35 * e.side;
          e.x += (dx / d + sx) * k.speed * m * dt;
          e.z += (dz / d + sz) * k.speed * m * dt;
        } else if (e.t <= 0) {
          e.state = 'wind';
          e.t = k.wind / m;
          e.wx = dx / d;
          e.wz = dz / d;
          this.events.push({ type: 'wind', id: e.id, kind: e.kind });
        }
      } else if (e.state === 'wind' && e.t <= 0) {
        if (e.kind === 'thrower') {
          this.stars.push({ x: e.x, z: e.z, vx: e.wx * 7 * m, vz: e.wz * 7 * m, life: 2.2 });
          this.events.push({ type: 'throw', x: e.x, z: e.z });
        } else {
          this.events.push({ type: 'strike', id: e.id, x: e.x, z: e.z });
          const hx = p.x - e.x;
          const hz = p.z - e.z;
          const hd = Math.hypot(hx, hz);
          if (hd < k.reach + 0.3 && (hx * e.wx + hz * e.wz) / (hd || 1) > 0.25) this._hurtPlayer(e.x, e.z);
          // the lunge
          e.x += e.wx * 0.5;
          e.z += e.wz * 0.5;
        }
        e.state = 'rest';
        e.t = 0.9 + this.rand() * 0.5;
      } else if (e.state === 'rest' && e.t <= 0) {
        e.state = 'run';
        e.t = 0.3 + this.rand() * 0.6;
      }
      this._clamp(e, ARENA);
    }
    // ninjas do not stand inside each other
    for (let i = 0; i < this.enemies.length; i++) {
      for (let j = i + 1; j < this.enemies.length; j++) {
        const a = this.enemies[i];
        const b = this.enemies[j];
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const d = Math.hypot(dx, dz) || 0.01;
        const min = KIND[a.kind].r + KIND[b.kind].r;
        if (d < min) {
          const push = (min - d) / 2;
          a.x -= (dx / d) * push; a.z -= (dz / d) * push;
          b.x += (dx / d) * push; b.z += (dz / d) * push;
        }
      }
    }
    this.enemies = this.enemies.filter((e) => e.hp > 0);
  }

  _hurtEnemy(e, n, how) {
    if (e.hp <= 0) return;
    e.hp -= n;
    e.flash = 0.15;
    if (e.state === 'wind') { e.state = 'rest'; e.t = 0.8; } // a cut stops the swing
    const l = Math.hypot(e.x - this.p.x, e.z - this.p.z) || 1;
    e.x += ((e.x - this.p.x) / l) * 0.6;
    e.z += ((e.z - this.p.z) / l) * 0.6;
    if (e.hp > 0) { this.events.push({ type: 'hit', id: e.id, x: e.x, z: e.z }); return; }
    this.kills++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = COMBO_TIME;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    const last = this.state === 'fight' && !this.queue.length && this.enemies.filter((x) => x.hp > 0).length === 0 && this.wave === this.stage.waves.length - 1;
    this.events.push({ type: 'kill', id: e.id, kind: e.kind, x: e.x, z: e.z, how, combo: this.combo, last });
  }

  _stars(dt) {
    const p = this.p;
    for (const s of this.stars) {
      if (s.gone) continue;
      s.x += s.vx * dt;
      s.z += s.vz * dt;
      s.life -= dt;
      if (s.life <= 0) s.gone = true;
      else if (Math.hypot(s.x - p.x, s.z - p.z) < 0.55 && this._hurtPlayer(s.x - s.vx, s.z - s.vz)) s.gone = true;
    }
    this.stars = this.stars.filter((s) => !s.gone);
  }

  // ---- the oni ------------------------------------------------------------------------------------------------------

  _boss(dt) {
    const b = this.boss;
    const p = this.p;
    if (b.hp <= 0) return;
    const m = this.speedMul;
    b.flash = Math.max(0, b.flash - dt);
    b.t -= dt;
    const dx = p.x - b.x;
    const dz = p.z - b.z;
    const d = Math.hypot(dx, dz) || 1;
    switch (b.state) {
      case 'enter':
        b.z += dt * 2.2;
        if (b.t <= 0) { b.state = 'walk'; b.t = 1.2; this.events.push({ type: 'roar' }); }
        break;
      case 'walk':
        b.face = Math.atan2(dx, dz);
        if (d > 2.6) { b.x += (dx / d) * 1.7 * m * dt; b.z += (dz / d) * 1.7 * m * dt; }
        if (b.t <= 0) {
          const pick = ['slam', 'sweep', 'charge'][b.n++ % 3];
          if (pick === 'slam') { b.state = 'slamWind'; b.t = 1.15 / m; b.ax = p.x; b.az = p.z; b.ar = 2.3; } else if (pick === 'sweep') { b.state = 'sweepWind'; b.t = 0.95 / m; b.ar = 3.4; } else { b.state = 'chargeWind'; b.t = 0.9 / m; b.ax = dx / d; b.az = dz / d; }
          this.events.push({ type: 'bossWind', kind: pick, x: b.state === 'slamWind' ? b.ax : b.x, z: b.state === 'slamWind' ? b.az : b.z, r: b.ar });
        }
        break;
      case 'slamWind':
        // the oni steps towards where the club will land
        { const sx = b.ax - b.x; const sz = b.az - b.z; const sd = Math.hypot(sx, sz); b.face = Math.atan2(sx, sz); if (sd > 2.2) { b.x += (sx / sd) * 1.4 * dt; b.z += (sz / sd) * 1.4 * dt; } }
        if (b.t <= 0) {
          this.events.push({ type: 'slam', x: b.ax, z: b.az });
          if (Math.hypot(p.x - b.ax, p.z - b.az) < b.ar) this._hurtPlayer(b.ax, b.az);
          b.state = 'tired'; b.t = 1.3;
        }
        break;
      case 'sweepWind':
        if (b.t <= 0) {
          this.events.push({ type: 'sweep', x: b.x, z: b.z });
          if (d < b.ar) this._hurtPlayer(b.x, b.z);
          b.state = 'tired'; b.t = 1.1;
        }
        break;
      case 'chargeWind':
        b.face = Math.atan2(b.ax, b.az);
        if (b.t <= 0) { b.state = 'charge'; b.t = 0.75; this.events.push({ type: 'charge' }); }
        break;
      case 'charge':
        b.x += b.ax * 11 * m * dt;
        b.z += b.az * 11 * m * dt;
        this._clamp(b, ARENA - 1.2);
        if (d < 1.6) this._hurtPlayer(b.x, b.z);
        if (b.t <= 0) { b.state = 'tired'; b.t = 1.4; }
        break;
      case 'tired':
        if (b.t <= 0) { b.state = 'walk'; b.t = 1.3 + this.rand() * 0.8; }
        break;
      default:
    }
    // the samurai cannot stand inside the oni
    if (d < 1.6 && p.dash <= 0) { p.x = b.x + (dx / d) * 1.6; p.z = b.z + (dz / d) * 1.6; this._clamp(p); }
  }

  _hurtBoss(n, how) {
    const b = this.boss;
    if (!b || b.hp <= 0 || b.state === 'enter') return;
    b.hp = Math.max(0, b.hp - n);
    b.flash = 0.15;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = COMBO_TIME;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    this.events.push({ type: 'bossHit', hp: b.hp, max: b.max, how });
    if (b.hp <= 0) {
      this.state = 'won';
      this.events.push({ type: 'bossDown', x: b.x, z: b.z, how });
    }
  }

  /** 1 star for winning, +1 for losing at most 2 hearts, +1 for a combo of 8 or more. */
  get result() {
    return { stars: 1 + (this.hurts <= 2 ? 1 : 0) + (this.bestCombo >= 8 ? 1 : 0), kills: this.kills, bestCombo: this.bestCombo, hurts: this.hurts };
  }
}

function segDist(ax, az, bx, bz, px, pz) {
  const vx = bx - ax;
  const vz = bz - az;
  const l2 = vx * vx + vz * vz;
  const t = l2 ? Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / l2)) : 0;
  return Math.hypot(ax + vx * t - px, az + vz * t - pz);
}

/** Save: { unlocked (1..3), stars: {stageId: n}, best: kills, muted, hero } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const st of STAGES) { const v = Math.floor(Number(s.stars[st.id])); if (v >= 1 && v <= 3) stars[st.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  return {
    unlocked: Number.isFinite(u) ? Math.max(1, Math.min(STAGES.length, u)) : 1,
    stars,
    best: Number.isFinite(Number(s.best)) && Number(s.best) > 0 ? Math.floor(Number(s.best)) : 0,
    muted: s.muted === true,
    hero: s.hero === 'boy' || s.hero === 'girl' ? s.hero : null,
  };
}
