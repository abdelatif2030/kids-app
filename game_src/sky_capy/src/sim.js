// «سكاي كابي» — SKY CAPY: the rules (pure, no browser). A calm capybara pilot flies a teal seaplane over floating islands and pops
// sky-pirate rats (in balloons, gyrocopters and gliders) with streams of bubbles. Rescued songbirds join as wings and shoot on their
// own, each with its own power; weapon capsules, pearls and a screen-clearing Bubble Storm spice up the fight. A run flies three stages
// back to back (a cloud village, a laundry-line ambush, a giant nest tree with the pirate captain's airship as the boss), then loops
// harder until the plane is shot down. HP bar, combo multipliers, stage ranks S-C, a top-10 table with arcade initials, and a hangar
// where collected feathers buy upgrades and paint jobs. The field is 100 wide and 160 tall (the picture scales it).

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export const W = 100;
export const H = 160;

export const ENEMY = {
  balloon: { hp: 3, r: 5.5, speed: 9, score: 100, fire: 4.5 },
  umbrella: { hp: 7, r: 6.5, speed: 8, score: 220, fire: 3.6 },
  gyro: { hp: 7, r: 6, speed: 16, score: 260, fire: 2.6 },
  glider: { hp: 4, r: 5, speed: 30, score: 160, fire: 0 },
  cage: { hp: 6, r: 6, speed: 9, score: 300, fire: 0 },
  thief: { hp: 5, r: 5.5, speed: 18, score: 240, fire: 0 },
  boss: { hp: 150, r: 17, speed: 6, score: 5000, fire: 1.3 },
};

export const BIRDS = ['robin', 'jay', 'canary'];
export const CAPSULES = ['spread', 'pierce', 'rapid'];

export const UPGRADES = [
  { id: 'engine', cost: [60, 120, 200] },
  { id: 'tank', cost: [50, 110, 190] },
  { id: 'power', cost: [80, 150, 240] },
  { id: 'armor', cost: [70, 140, 220] },
  { id: 'magnet', cost: [40, 90, 160] },
  { id: 'storm', cost: [90, 180, 300] },
];
export const PAINTS = [
  { id: 'lagoon', cost: 0 }, { id: 'royal', cost: 60 }, { id: 'grape', cost: 90 }, { id: 'clover', cost: 90 },
  { id: 'cherry', cost: 140 }, { id: 'snowbird', cost: 180 }, { id: 'midnight', cost: 220 }, { id: 'sunny', cost: 120 },
];

/** Events of a stage, sorted by time: { t, type, x, ... }. [loop] 0 = first time through, then harder. */
export function buildStage(n, loop = 0, seed = 1, easy = false) {
  const r = rng(seed * 7919 + n * 104729 + loop * 31);
  const ev = [];
  const add = (t, type, x, extra = {}) => ev.push({ t, type, x, ...extra });
  const line = (t0, type, n2, gap, x0, dx) => { for (let i = 0; i < n2; i++) add(t0 + i * gap, type, x0 + i * dx); };
  const more = easy ? 0 : loop;
  if (n === 1) { // the cloud village
    line(2, 'balloon', 3, 1.6, 25, 25);
    line(10, 'balloon', 4, 1.2, 15, 23);
    add(18, 'umbrella', 50);
    line(22, 'balloon', 2, 1.4, 30, 40);
    add(27, 'cage', 70, { bird: 'robin' });
    add(31, 'gyro', 30);
    line(36, 'glider', 3, 0.9, 20, 30);
    add(42, 'umbrella', 25); add(42.8, 'umbrella', 75);
    add(47, 'gyro', 70); add(49, 'balloon', 50);
    add(52, 'capsule', 50, { kind: pickOf(r, CAPSULES) });
    for (let i = 0; i < more; i++) { add(14 + i * 9, 'gyro', 20 + r() * 60); add(20 + i * 7, 'glider', 20 + r() * 60); }
  } else if (n === 2) { // the laundry-line ambush
    line(2, 'glider', 3, 0.8, 25, 25);
    add(7, 'umbrella', 50);
    line(10, 'balloon', 5, 1.0, 10, 20);
    add(17, 'cage', 30, { bird: 'jay' });
    add(21, 'gyro', 70); add(23, 'gyro', 30);
    add(27, 'thief', 20); add(28.5, 'thief', 80);
    line(32, 'balloon', 3, 1.3, 20, 30);
    add(38, 'capsule', 50, { kind: pickOf(r, CAPSULES) });
    line(40, 'glider', 4, 0.7, 15, 23);
    add(46, 'umbrella', 30); add(46, 'umbrella', 70);
    add(50, 'gyro', 50);
    for (let i = 0; i < more; i++) { add(12 + i * 8, 'gyro', 15 + r() * 70); add(25 + i * 6, 'umbrella', 15 + r() * 70); }
  } else { // the giant nest tree and the pirate captain's airship
    line(2, 'balloon', 4, 1.0, 15, 22);
    add(8, 'cage', 50, { bird: 'canary' });
    add(11, 'gyro', 25); add(11, 'gyro', 75);
    line(16, 'glider', 4, 0.7, 20, 20);
    add(22, 'umbrella', 50);
    add(26, 'capsule', 50, { kind: pickOf(r, CAPSULES) });
    line(28, 'balloon', 3, 1.2, 20, 30);
    add(34, 'thief', 50);
    add(40, 'boss', 50);
    add(52, 'glider', 20); add(53, 'glider', 80); add(60, 'gyro', 50);
    for (let i = 0; i < more; i++) add(30 + i * 10, 'gyro', 20 + r() * 60);
  }
  return ev.sort((a, b) => a.t - b.t);
}
const pickOf = (r, a) => a[Math.floor(r() * a.length)];

export function upgradeLevel(save, id) { return Math.max(0, Math.min(3, (save.up && save.up[id]) | 0)); }

/** The stats a save gives the plane. */
export function planeStats(save, easy = false) {
  const L = (id) => upgradeLevel(save, id);
  return {
    maxHp: (100 + 25 * L('armor')) * (easy ? 1.5 : 1),
    follow: 9 + 1.6 * L('engine'),
    interval: 0.24 / (1 + 0.14 * L('tank')),
    damage: 1 + 0.15 * L('power'),
    magnet: 9 + 6 * L('magnet'),
    storms: 1 + L('storm'),
    paint: save.paint || 'lagoon',
  };
}

export class Run {
  /** [save] = the hangar save (upgrades, paint). [easy] = younger children. */
  constructor(save, seed = 1, easy = false) {
    this.save = save || {};
    this.easy = easy;
    this.seed = seed;
    this.r = rng(seed);
    this.stats = planeStats(this.save, easy);
    this.stage = 1;
    this.loop = 0;
    this.px = W / 2; this.py = H - 30;
    this.hp = this.stats.maxHp;
    this.inv = 0;
    this.storms = this.stats.storms;
    this.score = 0;
    this.feathers = 0;
    this.pearls = 0;
    this.combo = 0; this.comboT = 0; this.mult = 1;
    this.weapon = null; this.weaponT = 0;
    this.wings = [];
    this.bullets = []; this.eb = []; this.enemies = []; this.pickups = [];
    this.tank = 1; // the bubble tank ring (hold FIRE drains it)
    this.fireT = 0;
    this.id = 0;
    this.state = 'play'; // 'play' | 'stageclear' | 'dead'
    this.ranks = [];
    this.sd = null;
    this._startStage(1);
  }

  _startStage(n) {
    this.stage = n;
    this.events = buildStage(n, this.loop, this.seed + this.loop * 17, this.easy);
    this.ei = 0;
    this.t = 0;
    this.sd = { spawned: 0, popped: 0, lost: 0, hp0: this.hp, name: n };
    this.bossAlive = false;
    this.clearT = 0;
    this.stageLen = Math.max(...this.events.map((e) => e.t)) + 4;
  }

  get stageCount() { return 3; }
  get progress() { return Math.min(1, this.t / this.stageLen); }
  /** The thief that grabbed the village feathers (the video's THIEF! bar): how far he has flown (0 = just arrived, 1 = got away), or null. */
  get thief() { const th = this.enemies.find((e) => e.type === 'thief' && !e.gone); return th ? { k: Math.max(0, Math.min(1, (th.y + 8) / (H + 18))), x: th.x, y: th.y } : null; }
  _id() { return ++this.id; }

  /** Spawn an enemy: hp grows with the loop. */
  _spawn(e) {
    const spec = ENEMY[e.type];
    const hpScale = (1 + 0.35 * this.loop) * (this.easy ? 0.7 : 1);
    const en = { id: this._id(), type: e.type, x: e.x, y: e.type === 'boss' ? -20 : -8, t: 0, hp: Math.ceil(spec.hp * hpScale), hp0: Math.ceil(spec.hp * hpScale), r: spec.r, fireT: 1 + this.r() * 1.5, bird: e.bird || null, dir: this.r() < 0.5 ? -1 : 1, x0: e.x };
    this.enemies.push(en);
    this.sd.spawned++;
  }

  /** Aimed enemy bullet. */
  _shootAt(en, speed = 28, spread = 0) {
    const dx = this.px - en.x, dy = this.py - en.y;
    const a = Math.atan2(dy, dx) + spread;
    const sp = speed * (1 + 0.1 * this.loop) * (this.easy ? 0.7 : 1);
    this.eb.push({ id: this._id(), x: en.x, y: en.y + en.r * 0.4, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: 1.6 });
  }

  /** Move the plane toward (tx, ty) (the finger). */
  step(dt, input = {}) {
    const ev = [];
    if (this.state !== 'play') return ev;
    this.t += dt;
    const tx = input.tx ?? this.px, ty = input.ty ?? this.py;
    // follow the finger smoothly
    const k = 1 - Math.exp(-this.stats.follow * dt);
    this.px += (Math.max(6, Math.min(W - 6, tx)) - this.px) * k;
    this.py += (Math.max(24, Math.min(H - 8, ty)) - this.py) * k;
    if (this.inv > 0) this.inv -= dt;
    // spawn
    while (this.ei < this.events.length && this.events[this.ei].t <= this.t) {
      const e = this.events[this.ei++];
      if (e.type === 'capsule') this.pickups.push({ id: this._id(), kind: 'capsule', cap: e.kind, x: e.x, y: -6, vy: 14 });
      else { this._spawn(e); if (e.type === 'boss') { this.bossAlive = true; ev.push({ type: 'boss' }); } else if (e.type === 'thief') ev.push({ type: 'thief' }); }
    }
    // firing: a baseline stream, faster while FIRE is held (and the tank has bubbles)
    const hold = !!input.fire && this.tank > 0.02;
    if (hold) this.tank = Math.max(0, this.tank - dt * 0.35); else this.tank = Math.min(1, this.tank + dt * 0.5);
    const rapid = this.weapon === 'rapid' ? 0.55 : 1;
    const interval = this.stats.interval * rapid * (hold ? 0.62 : 1);
    this.fireT -= dt;
    if (this.fireT <= 0) {
      this.fireT = interval;
      const dmg = this.stats.damage * (this.weapon === 'pierce' ? 1.6 : 1);
      const mk = (a, x0 = 0) => this.bullets.push({ id: this._id(), x: this.px + x0, y: this.py - 5, vx: Math.sin(a) * 90, vy: -Math.cos(a) * 90, dmg, pierce: this.weapon === 'pierce' ? 3 : 0, r: this.weapon === 'pierce' ? 2.6 : 1.7, hit: new Set(), kind: 'bubble' });
      if (this.weapon === 'spread') { mk(0); mk(0.22); mk(-0.22); } else { mk(0, -1.6); mk(0, 1.6); }
      ev.push({ type: 'shoot' });
    }
    if (this.weaponT > 0) { this.weaponT -= dt; if (this.weaponT <= 0) { this.weapon = null; } }
    // wings
    this.wings.forEach((w, i) => {
      const side = i === 0 ? -1 : 1;
      w.x = this.px + side * 10; w.y = this.py + 2 + Math.sin(this.t * 4 + i) * 0.8;
      w.t -= dt;
      const target = this._nearest(w.x, w.y);
      if (w.type === 'robin' && w.t <= 0 && target) { w.t = 0.9; this.bullets.push({ id: this._id(), x: w.x, y: w.y - 3, vx: 0, vy: -50, dmg: 1.4, pierce: 0, r: 1.6, hit: new Set(), kind: 'homing', home: true }); ev.push({ type: 'wingshot', bird: 'robin' }); }
      else if (w.type === 'jay' && w.t <= 0 && target) { w.t = 0.45; const a = Math.atan2(target.y - w.y, target.x - w.x); this.bullets.push({ id: this._id(), x: w.x, y: w.y, vx: Math.cos(a) * 95, vy: Math.sin(a) * 95, dmg: 0.9, pierce: 0, r: 1.3, hit: new Set(), kind: 'dart' }); ev.push({ type: 'wingshot', bird: 'jay' }); }
      else if (w.type === 'canary' && w.t <= 0) { w.t = 6; this.hp = Math.min(this.stats.maxHp, this.hp + 6); ev.push({ type: 'heal', x: this.px, y: this.py }); }
    });
    // bullets
    for (const b of this.bullets) {
      if (b.home) { const tg = this._nearest(b.x, b.y); if (tg) { const a = Math.atan2(tg.y - b.y, tg.x - b.x); const cur = Math.atan2(b.vy, b.vx); let d = a - cur; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; const na = cur + Math.max(-6 * dt, Math.min(6 * dt, d)); b.vx = Math.cos(na) * 60; b.vy = Math.sin(na) * 60; } }
      b.x += b.vx * dt; b.y += b.vy * dt;
    }
    this.bullets = this.bullets.filter((b) => b.y > -8 && b.y < H + 8 && b.x > -8 && b.x < W + 8);
    // enemies
    for (const en of this.enemies) this._moveEnemy(en, dt, ev);
    // hits: bullets on enemies
    for (const b of this.bullets) {
      for (const en of this.enemies) {
        if (en.hp <= 0 || b.dead || b.hit.has(en.id)) continue;
        if (Math.hypot(b.x - en.x, b.y - (en.y)) < b.r + en.r * 0.8) {
          b.hit.add(en.id);
          en.hp -= b.dmg; ev.push({ type: 'hit', x: en.x, y: en.y, dmg: b.dmg });
          if (en.type === 'umbrella' && b.y < en.y - en.r * 0.2 && en.hp > en.hp0 * 0.5) { en.hp += b.dmg * 0.5; } // the umbrella soaks up some bubbles from the front
          if (b.pierce > 0) b.pierce--; else b.dead = true;
          if (en.hp <= 0) this._pop(en, ev);
        }
      }
    }
    this.bullets = this.bullets.filter((b) => !b.dead);
    this.enemies = this.enemies.filter((en) => en.hp > 0 && en.y < H + 14 && !en.gone);
    // enemy bullets
    for (const b of this.eb) { b.x += b.vx * dt; b.y += b.vy * dt; }
    for (const b of this.eb) if (!b.dead && Math.hypot(b.x - this.px, b.y - this.py) < b.r + 3.6) { b.dead = true; this._hurt(this.easy ? 6 : 10, ev, b.x, b.y); }
    this.eb = this.eb.filter((b) => !b.dead && b.y < H + 6 && b.y > -8 && b.x > -8 && b.x < W + 8);
    // enemies touching the plane
    for (const en of this.enemies) if (en.hp > 0 && Math.hypot(en.x - this.px, en.y - this.py) < en.r * 0.8 + 3.2 && en.type !== 'cage') { if (en.type !== 'boss') en.hp = 0; this._hurt(this.easy ? 10 : 16, ev, en.x, en.y); if (en.type !== 'boss') this._pop(en, ev, true); }
    this.enemies = this.enemies.filter((en) => en.hp > 0);
    // pickups
    for (const p of this.pickups) {
      p.y += (p.vy ?? 16) * dt;
      const d = Math.hypot(p.x - this.px, p.y - this.py);
      if (d < this.stats.magnet && p.kind !== 'capsule' && p.kind !== 'cage') { p.x += (this.px - p.x) * Math.min(1, dt * 6); p.y += (this.py - p.y) * Math.min(1, dt * 6); }
      if (d < 6) this._collect(p, ev);
    }
    this.pickups = this.pickups.filter((p) => !p.got && p.y < H + 8);
    // the combo runs out
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) { this.combo = 0; this.mult = 1; ev.push({ type: 'combo', mult: 1 }); } }
    if (this.easy) this.hp = Math.min(this.stats.maxHp, this.hp + dt * 0.8);
    // stage end
    if (this.ei >= this.events.length && this.t > this.stageLen - 2 && this.enemies.length === 0 && !this.bossAlive) {
      this.clearT += dt;
      if (this.clearT > 1.5) { this._endStage(ev); }
    }
    if (this.hp <= 0 && this.state === 'play') { this.hp = 0; this.state = 'dead'; ev.push({ type: 'dead' }); }
    return ev;
  }

  _moveEnemy(en, dt, ev) {
    en.t += dt;
    const spec = ENEMY[en.type];
    const sp = spec.speed * (1 + 0.1 * this.loop) * (this.easy ? 0.75 : 1);
    if (en.type === 'balloon' || en.type === 'umbrella' || en.type === 'cage') {
      en.y += sp * dt; en.x = en.x0 + Math.sin(en.t * 1.4 + en.id) * 6;
      if (en.type !== 'cage') { en.fireT -= dt; if (en.fireT <= 0 && en.y > 4 && en.y < H - 40) { en.fireT = spec.fire * (1 + this.r()); this._shootAt(en, 24); ev.push({ type: 'eshoot' }); } }
    } else if (en.type === 'gyro') {
      en.y += (en.y < 38 ? sp : sp * 0.18) * dt; en.x += Math.sin(en.t * 1.8) * 22 * dt * en.dir;
      en.fireT -= dt; if (en.fireT <= 0 && en.y > 4) { en.fireT = spec.fire; this._shootAt(en, 30, -0.15); this._shootAt(en, 30, 0.15); ev.push({ type: 'eshoot' }); }
    } else if (en.type === 'glider') {
      en.y += sp * dt; en.x += Math.cos(en.t * 3) * 12 * dt * en.dir + (this.px - en.x) * 0.25 * dt;
    } else if (en.type === 'thief') {
      en.y += sp * 0.6 * dt; en.x += (this.px - en.x) * 0.9 * dt; // swoops at the pearls (it is just a fast pest)
    } else if (en.type === 'boss') {
      if (en.y < 30) en.y += sp * 3 * dt; else en.y = 30 + Math.sin(en.t * 0.6) * 3;
      en.x = W / 2 + Math.sin(en.t * 0.5) * 30;
      en.fireT -= dt;
      const phase = en.hp < en.hp0 * 0.34 ? 3 : en.hp < en.hp0 * 0.67 ? 2 : 1;
      if (en.fireT <= 0 && en.y > 20) {
        en.fireT = spec.fire / (phase === 3 ? 1.5 : 1);
        for (let i = -phase; i <= phase; i++) this._shootAt(en, 22, i * 0.22);
        ev.push({ type: 'eshoot' });
        if (phase >= 2 && Math.floor(en.t) % 7 === 0 && !en.summoned) { en.summoned = true; this._spawn({ type: 'glider', x: 20 }); this._spawn({ type: 'glider', x: 80 }); }
        if (Math.floor(en.t) % 7 !== 0) en.summoned = false;
      }
    }
    if (en.y > H + 10) en.gone = true;
  }

  _pop(en, ev, rammed = false) {
    this.sd.popped++;
    this.combo++; this.comboT = 3;
    const m = Math.min(5, 1 + Math.floor(this.combo / 5));
    if (m !== this.mult) { this.mult = m; ev.push({ type: 'combo', mult: m }); }
    const pts = ENEMY[en.type].score * this.mult;
    this.score += pts;
    ev.push({ type: 'pop', x: en.x, y: en.y, kind: en.type, pts });
    // pearls and feathers
    const n = en.type === 'boss' ? 12 : 1 + (this.r() < 0.4 ? 1 : 0);
    for (let i = 0; i < n; i++) this.pickups.push({ id: this._id(), kind: 'pearl', x: en.x + (this.r() - 0.5) * 8, y: en.y + (this.r() - 0.5) * 4, vy: 16 });
    if (this.r() < (en.type === 'boss' ? 1 : 0.3)) for (let i = 0; i < (en.type === 'boss' ? 20 : 1); i++) this.pickups.push({ id: this._id(), kind: 'feather', x: en.x + (this.r() - 0.5) * 12, y: en.y + (this.r() - 0.5) * 6, vy: 12 });
    if (en.type === 'thief') { for (let i = 0; i < 6; i++) this.pickups.push({ id: this._id(), kind: 'feather', x: en.x + (this.r() - 0.5) * 14, y: en.y + (this.r() - 0.5) * 6, vy: 12 }); ev.push({ type: 'loot', x: en.x, y: en.y }); } // popping the thief gives the village feathers back
        if (en.type === 'cage' && !rammed) this.pickups.push({ id: this._id(), kind: 'cage', bird: en.bird || 'robin', x: en.x, y: en.y, vy: 14 });
    if (en.type === 'boss') { this.bossAlive = false; ev.push({ type: 'bossdown' }); }
  }

  _collect(p, ev) {
    p.got = true;
    if (p.kind === 'pearl') { this.pearls++; this.score += 10 * this.mult; ev.push({ type: 'pearl', x: p.x, y: p.y }); }
    else if (p.kind === 'feather') { this.feathers++; ev.push({ type: 'feather', x: p.x, y: p.y }); }
    else if (p.kind === 'capsule') { this.weapon = p.cap; this.weaponT = 12; ev.push({ type: 'capsule', cap: p.cap }); }
    else if (p.kind === 'cage') {
      if (this.wings.length < 2) this.wings.push({ type: p.bird, t: 1, x: this.px, y: this.py });
      else { this.wings[0] = { type: p.bird, t: 1, x: this.px, y: this.py }; }
      this.score += 500;
      ev.push({ type: 'rescue', bird: p.bird });
    }
  }

  _hurt(dmg, ev, x, y) {
    if (this.inv > 0) return;
    this.hp -= dmg; this.inv = 1.0; this.sd.lost += dmg;
    this.combo = 0; this.mult = 1; this.comboT = 0;
    ev.push({ type: 'hurt', dmg, x: x ?? this.px, y: y ?? this.py });
  }

  /** The Bubble Storm: clears every enemy bullet and hits every pirate on the screen. */
  storm() {
    if (this.state !== 'play' || this.storms <= 0) return false;
    this.storms--;
    this.eb = [];
    this.inv = Math.max(this.inv, 1.2);
    const ev = [{ type: 'storm' }];
    for (const en of this.enemies) { if (en.hp > 0) { en.hp -= en.type === 'boss' ? 14 : 8; ev.push({ type: 'hit', x: en.x, y: en.y, dmg: 8 }); if (en.hp <= 0) this._pop(en, ev); } }
    this.enemies = this.enemies.filter((en) => en.hp > 0);
    this.pendingEvents = ev;
    return true;
  }
  takeEvents() { const e = this.pendingEvents || []; this.pendingEvents = null; return e; }

  _nearest(x, y) {
    let best = null; let bd = 1e9;
    for (const en of this.enemies) { if (en.hp <= 0 || en.y < 0 || en.type === 'cage' && false) continue; const d = Math.hypot(en.x - x, en.y - y); if (d < bd) { bd = d; best = en; } }
    return best;
  }

  /** The rank of the stage that just ended, S to C. */
  _rank() {
    const kill = this.sd.spawned ? this.sd.popped / this.sd.spawned : 1;
    const care = 1 - Math.min(1, this.sd.lost / this.stats.maxHp);
    const s = kill * 70 + care * 30;
    return s >= 92 ? 'S' : s >= 80 ? 'A' : s >= 65 ? 'B' : 'C';
  }

  _endStage(ev) {
    const rank = this._rank();
    this.ranks.push({ stage: this.stage, loop: this.loop, rank });
    this.score += { S: 2000, A: 1200, B: 600, C: 200 }[rank];
    this.state = 'stageclear';
    ev.push({ type: 'stageclear', rank, stage: this.stage });
  }

  /** After the stage card: the next stage (the loop makes it harder). */
  nextStage() {
    if (this.state !== 'stageclear') return;
    if (this.stage >= 3) { this.loop++; this._startStage(1); } else this._startStage(this.stage + 1);
    this.state = 'play';
    this.bullets = []; this.eb = [];
  }
}

// ---- the hangar and the top 10 -----------------------------------------------------------------------------------------------

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const up = {};
  for (const u of UPGRADES) up[u.id] = Math.max(0, Math.min(3, Math.floor(Number(o.up && o.up[u.id])) || 0));
  const owned = new Set(['lagoon', ...(Array.isArray(o.owned) ? o.owned.filter((id) => PAINTS.some((p) => p.id === id)) : [])]);
  const paint = owned.has(o.paint) ? o.paint : 'lagoon';
  const top = (Array.isArray(o.top) ? o.top : []).filter((e) => e && typeof e.name === 'string' && Number.isFinite(e.score)).map((e) => ({ name: e.name.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3) || 'AAA', score: Math.floor(e.score), stage: Math.floor(e.stage) || 1 })).sort((a, b) => b.score - a.score).slice(0, 10);
  return { feathers: Math.max(0, Math.min(99999, Math.floor(Number(o.feathers)) || 0)), up, owned: [...owned], paint, top, muted: !!o.muted, best: Math.max(0, Math.floor(Number(o.best)) || 0), badges: Array.isArray(o.badges) ? o.badges.filter((b) => typeof b === 'string').slice(0, 20) : [] };
}

/** Buy the next level of an upgrade: returns { ok, save } (the save is changed in place). */
export function buyUpgrade(save, id) {
  const u = UPGRADES.find((x) => x.id === id);
  if (!u) return { ok: false };
  const lv = upgradeLevel(save, id);
  if (lv >= 3) return { ok: false, why: 'max' };
  const cost = u.cost[lv];
  if (save.feathers < cost) return { ok: false, why: 'poor', cost };
  save.feathers -= cost;
  save.up = { ...(save.up || {}), [id]: lv + 1 };
  return { ok: true, cost };
}

export function buyPaint(save, id) {
  const p = PAINTS.find((x) => x.id === id);
  if (!p) return { ok: false };
  const owned = new Set(save.owned || []);
  if (owned.has(id) || p.cost === 0) { save.paint = id; return { ok: true, free: true }; }
  if (save.feathers < p.cost) return { ok: false, why: 'poor', cost: p.cost };
  save.feathers -= p.cost; owned.add(id); save.owned = [...owned]; save.paint = id;
  return { ok: true, cost: p.cost };
}

/** Would this score make the top 10? And the table after adding it. */
export function qualifies(top, score) { return score > 0 && (top.length < 10 || score > top[top.length - 1].score); }
export function addScore(top, entry) { return [...top, entry].sort((a, b) => b.score - a.score).slice(0, 10); }
