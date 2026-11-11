// «دفاع القلعة البحرية» — the rules with no drawing. A little clownfish on the coral fortress aims a stream of glowing
// bubbles up a reef corridor; grumpy fish, jellyfish and pufferfish swim towards the wall; beaten ones leave pearls
// (experience) and shells (coins). Each level up offers three powers: repair the fortress, a spinning shell that
// bounces off the coral walls, a whirlpool that pulls enemies together, a second stream, faster shots. The third wave
// of every level ends with the giant octopus. Deterministic with a seed so a robot test can play it.

export const HALF_W = 6; // corridor from x -6 to 6
export const TOP = -22; // where enemies come from
export const WALL_Z = 0; // the fortress wall
export const HERO = { x: 0, z: 1.2 };
const SHOT_SPEED = 19;

export const KINDS = {
  fish: { hp: 2, speed: 2.3, r: 0.5, dmg: 8, xp: 1, coin: 1 },
  fast: { hp: 1, speed: 3.4, r: 0.42, dmg: 6, xp: 1, coin: 1 },
  jelly: { hp: 3, speed: 1.5, r: 0.55, dmg: 10, xp: 2, coin: 2 },
  puffer: { hp: 9, speed: 1.05, r: 0.85, dmg: 20, xp: 4, coin: 4 },
  ink: { hp: 2, speed: 3.2, r: 0.35, dmg: 10, xp: 0, coin: 0 },
};

/** Five levels; each has three waves, the last one ends with the octopus. */
export const LEVELS = [
  { id: 1, ar: 'المياه الضحلة', en: 'Sunlit Shallows', boss: 40 },
  { id: 2, ar: 'غابة المرجان', en: 'Coral Forest', boss: 60 },
  { id: 3, ar: 'كهف اللؤلؤ', en: 'Pearl Cave', boss: 80 },
  { id: 4, ar: 'حديقة قناديل البحر', en: 'Jelly Garden', boss: 100 },
  { id: 5, ar: 'عرين الأخطبوط', en: "Octopus's Lair", boss: 130 },
];

export const POWERS = [
  { id: 'repair', icon: '🧱', ar: 'صلّح القلعة', en: 'Repair the fortress', sub: ['+٣٥ للسور', '+35 wall'] },
  { id: 'shell', icon: '🐚', ar: 'صدفة دوّارة', en: 'Spinning shell', sub: ['تخبط في الحيطان وتضرب', 'Bounces off the walls'] },
  { id: 'whirl', icon: '🌀', ar: 'دوّامة', en: 'Whirlpool', sub: ['تلم الأعداء وتضربهم', 'Pulls enemies together'] },
  { id: 'spread', icon: '✨', ar: 'فقاعات أكتر', en: 'More bubbles', sub: ['خط فقاعات زيادة', 'One more stream'] },
  { id: 'rapid', icon: '⚡', ar: 'أسرع', en: 'Faster', sub: ['ضرب أسرع', 'Shoots faster'] },
];

/** Shop upgrades bought with shells between levels (nothing is ever taken away). */
export const UPGRADES = [
  { id: 'power', icon: '💥', ar: 'فقاعة أقوى', en: 'Stronger bubbles' },
  { id: 'wall', icon: '🏰', ar: 'سور أقوى', en: 'Stronger wall' },
  { id: 'pearl', icon: '💎', ar: 'لؤلؤ أكتر', en: 'More pearls' },
];
export const MAX_UP = 5;
export const upCost = (lvl) => 15 + lvl * 15;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/** The spawns of a wave: [time, kind, x]. */
export function waveOf(level, wave, rand) {
  const out = [];
  const n = 7 + level * 3 + wave * 3;
  let t = 0.6;
  for (let i = 0; i < n; i++) {
    let kind = 'fish';
    const r = rand();
    if (level >= 1 && wave >= 1 && r < 0.25) kind = 'jelly';
    else if (level >= 2 && r < 0.38) kind = 'puffer';
    else if (level >= 3 && r < 0.55) kind = 'fast';
    else if (level === 0 && wave === 2 && r < 0.2) kind = 'jelly';
    out.push([t, kind, (rand() * 2 - 1) * (HALF_W - 1)]);
    t += Math.max(0.35, 1.05 - level * 0.1 - wave * 0.08) * (0.6 + rand() * 0.8);
    // little groups now and then
    if (rand() < 0.2) { out.push([t, 'fish', (rand() * 2 - 1) * (HALF_W - 1)]); out.push([t + 0.2, 'fish', (rand() * 2 - 1) * (HALF_W - 1)]); }
  }
  return out;
}

export class Defense {
  /** opts: { level (0..4), easy, up: {power, wall, pearl}, seed } */
  constructor(opts = {}) {
    this.levelIndex = opts.level ?? 0;
    this.level = LEVELS[this.levelIndex];
    this.easy = !!opts.easy;
    this.up = { power: 0, wall: 0, pearl: 0, ...(opts.up || {}) };
    this.rand = rng(opts.seed ?? 3);
    this.wallMax = 100 + this.up.wall * 20 + (this.easy ? 50 : 0);
    this.wall = this.wallMax;
    this.aim = 0; // radians from straight up (negative = left)
    this.fireT = 0;
    this.fireEvery = 0.17;
    this.streams = 1;
    this.damage = 1 + this.up.power * 0.3;
    this.shots = [];
    this.enemies = [];
    this.shells = [];
    this.whirlLevel = 0;
    this.whirlT = 3;
    this.whirls = [];
    this.wave = 0;
    this.waveT = 0;
    this.spawns = waveOf(this.levelIndex, 0, this.rand);
    this.boss = null;
    this.xp = 0;
    this.xpLevel = 1;
    this.xpNeed = 5;
    this.coins = 0;
    this.kills = 0;
    this.choosing = null; // three power ids while the child chooses
    this.picked = {};
    this.state = 'play'; // play -> won | lost
    this.events = [];
    this.nextId = 1;
    this.time = 0;
    this.gap = 0;
  }

  get speedMul() { return (this.easy ? 0.75 : 1) * (1 + this.levelIndex * 0.07); }

  setAim(a) { this.aim = Math.max(-1.25, Math.min(1.25, a)); }
  /** Aims at a point on the sea floor. */
  aimAt(x, z) { this.setAim(Math.atan2(x - HERO.x, HERO.z - z)); }

  choose(id) {
    if (!this.choosing || !this.choosing.includes(id)) return false;
    this.choosing = null;
    this.picked[id] = (this.picked[id] ?? 0) + 1;
    if (id === 'repair') this.wall = Math.min(this.wallMax, this.wall + 35);
    if (id === 'shell') this._addShell();
    if (id === 'whirl') { this.whirlLevel++; this.whirlT = Math.min(this.whirlT, 1); }
    if (id === 'spread') this.streams = Math.min(5, this.streams + 1);
    if (id === 'rapid') this.fireEvery = Math.max(0.07, this.fireEvery * 0.8);
    this.events.push({ type: 'power', id });
    return true;
  }

  _addShell() {
    const a = -Math.PI / 2 + (this.rand() - 0.5) * 1.2;
    this.shells.push({ x: HERO.x, z: HERO.z - 1.5, vx: Math.cos(a) * 9, vz: Math.sin(a) * 9, hit: new Map() });
  }

  step(dt) {
    this.events = [];
    if (this.state !== 'play' || this.choosing) return this.events;
    this.time += dt;
    this._fire(dt);
    this._spawn(dt);
    this._shots(dt);
    this._enemies(dt);
    this._shellsStep(dt);
    this._whirls(dt);
    if (this.boss) this._boss(dt);
    return this.events;
  }

  // ---- shooting ----------------------------------------------------------------------------------------------------

  _fire(dt) {
    this.fireT -= dt;
    if (this.fireT > 0) return;
    this.fireT = this.fireEvery;
    const n = this.streams;
    for (let i = 0; i < n; i++) {
      const a = this.aim + (i - (n - 1) / 2) * 0.13;
      this.shots.push({ x: HERO.x + Math.sin(a) * 0.8, z: HERO.z - Math.cos(a) * 0.8, vx: Math.sin(a) * SHOT_SPEED, vz: -Math.cos(a) * SHOT_SPEED, life: 1.6 });
    }
    this.events.push({ type: 'shoot' });
  }

  _shots(dt) {
    for (const s of this.shots) {
      // a gentle pull towards the nearest enemy just ahead helps small hands
      let best = null;
      let bd = 2.0;
      for (const e of this.enemies) {
        const dx = e.x - s.x;
        const dz = e.z - s.z;
        if (dz > 0.5) continue;
        const d = Math.hypot(dx, dz);
        if (d < bd) { bd = d; best = e; }
      }
      if (best) {
        const sp = Math.hypot(s.vx, s.vz);
        const tx = (best.x - s.x) / bd;
        const tz = (best.z - s.z) / bd;
        s.vx += (tx * sp - s.vx) * Math.min(1, dt * 2.5);
        s.vz += (tz * sp - s.vz) * Math.min(1, dt * 2.5);
        const l = Math.hypot(s.vx, s.vz);
        s.vx *= sp / l;
        s.vz *= sp / l;
      }
      s.x += s.vx * dt;
      s.z += s.vz * dt;
      s.life -= dt;
      if (Math.abs(s.x) > HALF_W || s.z < TOP - 2) s.life = 0;
      if (s.life <= 0) continue;
      for (const e of this.enemies) {
        if (e.hp <= 0) continue;
        if (Math.hypot(e.x - s.x, e.z - s.z) < KINDS[e.kind].r + 0.25) {
          s.life = 0;
          this._hurt(e, this.damage);
          break;
        }
      }
      const b = this.boss;
      if (s.life > 0 && b && b.hp > 0 && Math.hypot(b.x - s.x, (b.z - s.z) * 1.3) < 2.4) {
        s.life = 0;
        this._hurtBoss(this.damage);
      }
    }
    this.shots = this.shots.filter((s) => s.life > 0);
  }

  _hurt(e, n, by = 'shot') {
    if (e.hp <= 0) return;
    e.hp -= n;
    e.flash = 0.12;
    this.events.push({ type: 'hit', x: e.x, z: e.z, kind: e.kind, by });
    if (e.hp > 0) return;
    const k = KINDS[e.kind];
    this.kills++;
    this.coins += k.coin;
    this.events.push({ type: 'kill', x: e.x, z: e.z, kind: e.kind, coin: k.coin });
    if (k.xp) this._gainXp(k.xp * (1 + this.up.pearl * 0.15));
  }

  _gainXp(n) {
    this.xp += n;
    if (this.xp >= this.xpNeed) {
      this.xp -= this.xpNeed;
      this.xpLevel++;
      this.xpNeed = Math.round(5 + this.xpLevel * 3.5);
      // three different powers; repair always offered when the wall is hurt
      const pool = POWERS.map((p) => p.id).filter((id) => !(id === 'spread' && this.streams >= 5) && !(id === 'rapid' && this.fireEvery <= 0.07));
      const pick = [];
      if (this.wall < this.wallMax * 0.6) pick.push('repair');
      while (pick.length < 3) {
        const id = pool[Math.floor(this.rand() * pool.length)];
        if (!pick.includes(id) && !(id === 'repair' && this.wall >= this.wallMax - 5 && pool.length > 3)) pick.push(id);
      }
      this.choosing = pick;
      this.events.push({ type: 'levelUp', level: this.xpLevel, choices: pick });
    }
  }

  // ---- enemies -----------------------------------------------------------------------------------------------------

  _spawn(dt) {
    if (this.boss) return;
    this.waveT += dt;
    while (this.spawns.length && this.spawns[0][0] <= this.waveT) {
      const [, kind, x] = this.spawns.shift();
      this._enemy(kind, x, TOP);
    }
    if (!this.spawns.length && !this.enemies.length) {
      this.gap += dt;
      if (this.gap < 1.4) return;
      this.gap = 0;
      if (this.wave < 2) {
        this.wave++;
        this.waveT = 0;
        this.spawns = waveOf(this.levelIndex, this.wave, this.rand);
        this.events.push({ type: 'wave', n: this.wave + 1 });
      } else {
        const hp = this.level.boss * (this.easy ? 0.7 : 1);
        this.boss = { x: 0, z: TOP + 1, hp, max: hp, t: 0, inkT: 2.5, callT: 6, flash: 0, enter: 2.5 };
        this.events.push({ type: 'boss' });
      }
    }
  }

  _enemy(kind, x, z) {
    const e = { id: this.nextId++, kind, x, z, hp: kind === 'ink' ? KINDS.ink.hp : Math.round(KINDS[kind].hp * (1 + this.levelIndex * 0.18)), t: this.rand() * 6, flash: 0, base: x, pull: null };
    this.enemies.push(e);
    return e;
  }

  _enemies(dt) {
    const m = this.speedMul;
    for (const e of this.enemies) {
      const k = KINDS[e.kind];
      e.t += dt;
      e.flash = Math.max(0, e.flash - dt);
      e.z += k.speed * m * dt;
      if (e.kind === 'jelly') e.x = e.base + Math.sin(e.t * 1.6) * 1.3;
      else if (e.kind === 'fast') e.x = e.base + Math.sin(e.t * 3) * 0.5;
      if (e.pull) { e.x += e.pull.x * dt; e.base += e.pull.x * dt; e.z += e.pull.z * dt; e.pull = null; }
      e.x = Math.max(-HALF_W + k.r, Math.min(HALF_W - k.r, e.x));
      if (e.z >= WALL_Z - k.r) {
        e.hp = 0;
        this.wall = Math.max(0, this.wall - k.dmg);
        this.events.push({ type: 'wallHit', x: e.x, dmg: k.dmg, wall: this.wall });
        if (this.wall <= 0) { this.state = 'lost'; this.events.push({ type: 'lost' }); }
      }
    }
    this.enemies = this.enemies.filter((e) => e.hp > 0);
  }

  _shellsStep(dt) {
    for (const s of this.shells) {
      s.x += s.vx * dt;
      s.z += s.vz * dt;
      if (s.x < -HALF_W + 0.5) { s.x = -HALF_W + 0.5; s.vx = Math.abs(s.vx); this.events.push({ type: 'bounce', x: s.x, z: s.z }); }
      if (s.x > HALF_W - 0.5) { s.x = HALF_W - 0.5; s.vx = -Math.abs(s.vx); this.events.push({ type: 'bounce', x: s.x, z: s.z }); }
      if (s.z < TOP + 1) { s.z = TOP + 1; s.vz = Math.abs(s.vz); }
      if (s.z > WALL_Z - 1.2) { s.z = WALL_Z - 1.2; s.vz = -Math.abs(s.vz); this.events.push({ type: 'bounce', x: s.x, z: s.z }); }
      for (const [id, t] of s.hit) if (t - dt <= 0) s.hit.delete(id); else s.hit.set(id, t - dt);
      for (const e of this.enemies) {
        if (s.hit.has(e.id) || Math.hypot(e.x - s.x, e.z - s.z) > KINDS[e.kind].r + 0.6) continue;
        s.hit.set(e.id, 0.45);
        this._hurt(e, 2 * this.damage, 'shell');
      }
      const b = this.boss;
      if (b && b.hp > 0 && !s.hit.has('boss') && Math.hypot(b.x - s.x, (b.z - s.z) * 1.3) < 2.6) { s.hit.set('boss', 0.5); this._hurtBoss(2 * this.damage); }
    }
  }

  _whirls(dt) {
    if (this.whirlLevel > 0) {
      this.whirlT -= dt;
      if (this.whirlT <= 0 && (this.enemies.length || this.boss)) {
        this.whirlT = Math.max(2.5, 6.5 - this.whirlLevel);
        // where the enemies are thickest
        let best = null;
        let bn = -1;
        for (const e of this.enemies) {
          let n = 0;
          for (const o of this.enemies) if (Math.hypot(o.x - e.x, o.z - e.z) < 3) n++;
          if (n > bn) { bn = n; best = e; }
        }
        const x = best ? best.x : this.boss.x;
        const z = best ? Math.min(-2, best.z - 1) : this.boss.z + 2;
        this.whirls.push({ x, z, r: 2.4 + this.whirlLevel * 0.4, life: 3.2 });
        this.events.push({ type: 'whirl', x, z });
      }
    }
    for (const w of this.whirls) {
      w.life -= dt;
      for (const e of this.enemies) {
        const dx = w.x - e.x;
        const dz = w.z - e.z;
        const d = Math.hypot(dx, dz);
        if (d > w.r || d < 0.05) continue;
        e.pull = { x: (dx / d) * 3 - (dz / d) * 2, z: (dz / d) * 3 + (dx / d) * 2 - KINDS[e.kind].speed * this.speedMul * 0.8 };
        e.whirlDmg = (e.whirlDmg ?? 0) + dt * (1.2 + this.whirlLevel * 0.6);
        if (e.whirlDmg >= 1) { e.whirlDmg -= 1; this._hurt(e, 1, 'whirl'); }
      }
      const b = this.boss;
      if (b && b.hp > 0 && Math.hypot(b.x - w.x, b.z - w.z) < w.r + 1.5) {
        b.whirlDmg = (b.whirlDmg ?? 0) + dt * (1 + this.whirlLevel * 0.5);
        if (b.whirlDmg >= 1) { b.whirlDmg -= 1; this._hurtBoss(1); }
      }
    }
    this.whirls = this.whirls.filter((w) => w.life > 0);
  }

  // ---- the octopus -----------------------------------------------------------------------------------------------

  _boss(dt) {
    const b = this.boss;
    if (b.hp <= 0) return;
    b.t += dt;
    b.flash = Math.max(0, b.flash - dt);
    if (b.enter > 0) { b.enter -= dt; b.z = Math.min(TOP + 5, b.z + dt * 1.8); return; }
    b.x = Math.sin(b.t * 0.45) * (HALF_W - 2.6);
    b.z = TOP + 5 + Math.sin(b.t * 0.3) * 1.5 + Math.min(4, b.t * 0.05); // slowly closer
    b.inkT -= dt * this.speedMul;
    if (b.inkT <= 0) {
      b.inkT = Math.max(1.4, 2.6 - this.levelIndex * 0.2);
      this._enemy('ink', b.x + (this.rand() - 0.5) * 2, b.z + 2);
      this.events.push({ type: 'ink', x: b.x, z: b.z });
    }
    b.callT -= dt * this.speedMul;
    if (b.callT <= 0) {
      b.callT = 7;
      for (let i = 0; i < 2 + Math.floor(this.levelIndex / 2); i++) this._enemy(this.rand() < 0.3 ? 'jelly' : 'fish', b.x + (i - 1) * 1.6, b.z + 1.5);
      this.events.push({ type: 'call', x: b.x, z: b.z });
    }
  }

  _hurtBoss(n) {
    const b = this.boss;
    if (!b || b.hp <= 0 || b.enter > 0) return;
    b.hp = Math.max(0, b.hp - n);
    b.flash = 0.1;
    this.events.push({ type: 'bossHit', hp: b.hp, max: b.max });
    if (b.hp <= 0) {
      this.coins += 15 + this.levelIndex * 5;
      this.state = 'won';
      for (const e of this.enemies) { e.hp = 0; this.events.push({ type: 'kill', x: e.x, z: e.z, kind: e.kind, coin: 0 }); }
      this.enemies = [];
      this.events.push({ type: 'bossDown', x: b.x, z: b.z });
    }
  }

  /** Stars from the wall left: 3 (70%+), 2 (35%+), 1. */
  get result() {
    const f = this.wall / this.wallMax;
    return { stars: this.state === 'won' ? (f >= 0.7 ? 3 : f >= 0.35 ? 2 : 1) : 0, coins: this.coins, kills: this.kills, wall: f };
  }
}

/** Save: { unlocked (1..5), stars, coins, up: {power, wall, pearl}, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const up = {};
  for (const g of UPGRADES) { const v = Math.floor(Number(s.up && s.up[g.id])); up[g.id] = v >= 0 && v <= MAX_UP ? v : 0; }
  const c = Math.floor(Number(s.coins));
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, coins: Number.isFinite(c) && c > 0 ? Math.min(c, 99999) : 0, up, muted: s.muted === true };
}
