// «البقاء على قيد الحياة» — the rules with no drawing. A cartoon fighter on a city rooftop runs around (swipe or keys)
// while the blaster aims and fires by itself at the nearest zombie. Goofy cartoon zombies climb over the parapet in
// waves; beaten ones pop into green puffs and drop coins and experience. Each level up offers three perks "for this
// roof". Blue gas tanks blow up a crowd. A weapon crate on some roofs gives the bomb launcher, then the rocket
// launcher, then the fireworks launcher (kept for later roofs). When every wave is cleared the pink launch pad lights
// up: stand on it to leap across the gap to the next building. Eight roofs, plus Endless after roof 8.
// Deterministic with a seed so a robot test can play it. Nobody is hurt: the hero is only "knocked out" and tries again.

export const KINDS = {
  shambler: { hp: 3, speed: 1.55, r: 0.42, dps: 13, xp: 1, coin: 4 },
  sprinter: { hp: 1.6, speed: 3.5, r: 0.38, dps: 9, xp: 1, coin: 3 },
  brute: { hp: 15, speed: 1.1, r: 0.75, dps: 22, xp: 4, coin: 12 },
  king: { hp: 110, speed: 0.85, r: 1.3, dps: 28, xp: 12, coin: 60 },
};

/** Weapons: the blaster is always there; the others come from crates and stay unlocked. */
export const WEAPONS = [
  { id: 'blaster', icon: '🔫', ar: 'البلاستر', en: 'Blaster', rate: 3.3, dmg: 1, range: 9.5 },
  { id: 'bomb', icon: '💣', ar: 'قاذف القنابل', en: 'Bomb launcher', rate: 1.05, dmg: 3.2, range: 9, radius: 2.2 },
  { id: 'rocket', icon: '🚀', ar: 'قاذف الصواريخ', en: 'Rocket launcher', rate: 1.5, dmg: 3.6, range: 10, radius: 2.4 },
  { id: 'fireworks', icon: '🎆', ar: 'قاذف الألعاب النارية', en: 'Fireworks launcher', rate: 0.95, dmg: 4.2, range: 9.5, radius: 2.6 },
];
export const weaponOf = (id) => WEAPONS.find((w) => w.id === id) || WEAPONS[0];

/** Eight roofs. waves: [shamblers, sprinters, brutes]; crate: a weapon that drops at the start of that wave. */
export const ROOFS = [
  { id: 1, ar: 'عمارات الغروب', en: 'Sunset Blocks', look: 'sunset', W: 6.5, D: 9, waves: [[8, 0, 0], [11, 0, 0], [14, 0, 0]], tanks: 2, vents: 3, tip: 'move', face: 'shambler' },
  { id: 2, ar: 'صف خزانات المياه', en: 'Water Tower Row', look: 'towers', W: 7, D: 9.5, waves: [[10, 0, 0], [10, 4, 0], [12, 6, 0]], tanks: 3, vents: 3, crate: { wave: 1, weapon: 'bomb' }, tip: 'tanks', face: 'sprinter' },
  { id: 3, ar: 'سطح الحديقة', en: 'Garden Roof', look: 'garden', W: 7.5, D: 10, waves: [[12, 3, 0], [12, 5, 1], [14, 6, 1], [16, 6, 2]], tanks: 3, vents: 2, crate: { wave: 0, weapon: 'bomb' }, tip: 'brute', face: 'brute' },
  { id: 4, ar: 'لافتات النيون', en: 'Neon Signs', look: 'neon', W: 7.5, D: 10, waves: [[14, 5, 1], [16, 6, 1], [16, 8, 2], [18, 8, 2]], tanks: 3, vents: 3, crate: { wave: 1, weapon: 'rocket' }, tip: 'crate', face: 'sprinter' },
  { id: 5, ar: 'موقع البناء', en: 'Crane Yard', look: 'crane', W: 8, D: 10.5, waves: [[16, 6, 1], [18, 8, 2], [18, 10, 2], [20, 10, 3]], tanks: 4, vents: 2, crate: { wave: 0, weapon: 'rocket' }, tip: 'level', face: 'shambler' },
  { id: 6, ar: 'أسطح الثلج', en: 'Snowy Tops', look: 'snow', W: 8, D: 10.5, waves: [[18, 8, 2], [20, 8, 2], [20, 10, 3], [22, 12, 3]], tanks: 4, vents: 3, crate: { wave: 1, weapon: 'fireworks' }, tip: 'crowd', face: 'brute' },
  { id: 7, ar: 'برج المهبط', en: 'Helipad Tower', look: 'helipad', W: 8.5, D: 11, waves: [[20, 10, 2], [22, 10, 3], [24, 12, 3], [26, 14, 4]], tanks: 4, vents: 2, crate: { wave: 0, weapon: 'fireworks' }, tip: 'pad', face: 'sprinter' },
  { id: 8, ar: 'برج الساعة', en: 'Clock Tower', look: 'clock', W: 8.5, D: 11, waves: [[20, 10, 2], [22, 12, 3], [24, 12, 4], [18, 10, 2, 1]], tanks: 4, vents: 2, crate: { wave: 0, weapon: 'fireworks' }, tip: 'king', face: 'king' },
];

/** Perks offered at a level up; they last for this roof only (like the video: "Pick one for this roof"). */
export const PERKS = [
  { id: 'rapid', icon: '»', ar: 'ضرب سريع', en: 'Rapid fire', sub: ['+٢٠٪ سرعة الضرب', '+20% fire rate'] },
  { id: 'vest', icon: '❤', ar: 'سترة سميكة', en: 'Thick vest', sub: ['+٢٥٪ صحة وعلاج', '+25% max health and heal'] },
  { id: 'bang', icon: '✹', ar: 'انفجار كبير', en: 'Big bang', sub: ['+٣٠٪ حجم الانفجار', '+30% blast radius'] },
  { id: 'pierce', icon: '➜', ar: 'طلقة خارقة', en: 'Piercing', sub: ['الطلقة تعدّي زومبي زيادة', 'Bolts hit one more zombie'] },
  { id: 'twin', icon: 'II', ar: 'طلقة مزدوجة', en: 'Twin shot', sub: ['طلقة أو قنبلة زيادة', 'One more bolt or bomb'] },
  { id: 'shoes', icon: '👟', ar: 'حذاء سريع', en: 'Swift shoes', sub: ['+١٥٪ سرعة الجري', '+15% run speed'] },
  { id: 'power', icon: '⚡', ar: 'ضربة أقوى', en: 'Power shot', sub: ['+٢٥٪ قوة', '+25% damage'] },
];

/** Shop upgrades bought with coins between roofs (nothing is ever taken away). */
export const UPGRADES = [
  { id: 'power', icon: '⚡', ar: 'سلاح أقوى', en: 'Stronger weapon' },
  { id: 'vest', icon: '🦺', ar: 'سترة أقوى', en: 'Stronger vest' },
  { id: 'magnet', icon: '🧲', ar: 'مغناطيس العملات', en: 'Coin magnet' },
];
export const MAX_UP = 5;
export const upCost = (lvl) => 60 + lvl * 50;

export const HERO_R = 0.45;
const BOLT_SPEED = 22;
const ROCKET_SPEED = 15;
const BOMB_TIME = 0.55;
const PAD_R = 1.3;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/** Where things stand on a roof (vents, water towers, tanks, the launch pad), from the roof's own seed. */
export function layoutOf(roof, index) {
  const rand = rng(1000 + index * 77);
  const props = [];
  const free = (x, z, r) => props.every((p) => Math.hypot(p.x - x, p.z - z) > p.r + r + 1.2) && Math.hypot(x, z - 1) > 2.6;
  const place = (kind, r, tries = 40) => {
    for (let i = 0; i < tries; i++) {
      const x = (rand() * 2 - 1) * (roof.W - r - 1.0);
      const z = (rand() * 2 - 1) * (roof.D - r - 1.0);
      if (free(x, z, r)) { props.push({ kind, x, z, r }); return; }
    }
  };
  for (let i = 0; i < roof.vents; i++) place('vent', 0.75);
  // a water tower stands in one corner of the roof (they are in the video too)
  const cx = index % 2 ? -1 : 1;
  props.push({ kind: 'tower', x: cx * (roof.W - 1.6), z: roof.D - 1.8, r: 1.15 });
  if (roof.look === 'garden' || roof.look === 'snow') { place('planter', 0.8); place('planter', 0.8); }
  if (roof.look === 'crane' || roof.look === 'neon' || roof.look === 'clock') place('chimney', 0.6);
  const tanks = [];
  for (let i = 0; i < roof.tanks; i++) {
    for (let k = 0; k < 40; k++) {
      const x = (rand() * 2 - 1) * (roof.W - 1.6);
      const z = (rand() * 2 - 1) * (roof.D - 1.6);
      if (free(x, z, 0.8) && tanks.every((t) => Math.hypot(t.x - x, t.z - z) > 4)) { tanks.push({ x, z }); props.push({ kind: 'tankspot', x, z, r: 0.8 }); break; }
    }
  }
  return { props: props.filter((p) => p.kind !== 'tankspot'), tanks, pad: { x: 0, z: -roof.D + 1.5 } };
}

/** Endless waves after roof 8: always a bit bigger. */
export function endlessWave(n) {
  return [10 + n * 3, Math.min(30, 2 + n * 2), Math.min(8, Math.floor(n / 2)), n > 0 && n % 5 === 4 ? 1 : 0];
}

export class Rooftop {
  /** opts: { roof (0..7) or endless: true, easy, up: {power, vest, magnet}, weapon, seed } */
  constructor(opts = {}) {
    this.endless = !!opts.endless;
    this.roofIndex = this.endless ? 0 : Math.max(0, Math.min(ROOFS.length - 1, opts.roof ?? 0));
    this.roof = ROOFS[this.roofIndex];
    if (this.endless) this.roof = { ...ROOFS[0], id: 0, ar: 'بلا نهاية', en: 'Endless', W: 8, D: 10.5, tanks: 4, vents: 3, look: 'sunset', waves: [] };
    this.W = this.roof.W;
    this.D = this.roof.D;
    this.easy = !!opts.easy;
    this.up = { power: 0, vest: 0, magnet: 0, ...(opts.up || {}) };
    this.rand = rng(opts.seed ?? 7);
    const lay = layoutOf(this.roof, this.endless ? 2 : this.roofIndex);
    this.props = lay.props;
    this.tanks = lay.tanks.map((t, i) => ({ id: i, x: t.x, z: t.z, r: 0.85, hp: 2, alive: true, respawn: 0 }));
    this.pad = lay.pad;
    this.hero = { x: 0, z: 1, vx: 0, vz: 0, face: Math.PI, hp: 0, maxHp: 0 };
    this.hero.maxHp = 100 + this.up.vest * 15;
    this.hero.hp = this.hero.maxHp;
    this.weapon = weaponOf(opts.weapon || 'blaster').id;
    this.perks = { rapid: 0, vest: 0, bang: 0, pierce: 0, twin: 0, shoes: 0, power: 0 };
    this.zombies = [];
    this.shots = [];
    this.coinsOnRoof = [];
    this.hearts = [];
    this.crate = null;
    this.nextId = 1;
    this.wave = 0;
    this.waveCount = this.endless ? Infinity : this.roof.waves.length;
    this.queue = [];
    this.spawnT = 0;
    this.gap = 1.2; // a short calm before wave 1
    this.state = 'play'; // play -> pad -> leap -> won | lost
    this.time = 0;
    this.kills = 0;
    this.coins = 0;
    this.xp = 0;
    this.xpLevel = 1;
    this.xpNeed = 6;
    this.choosing = null;
    this.cool = 0;
    this.lowest = 1;
    this.unlocked = null;
    this.move = { x: 0, z: 0 };
    this.leapT = 0;
    this.events = [];
    this.touchT = 0;
  }

  get W2() { return this.W; }
  get waveTotal() { return this.endless ? this.wave + 1 : this.roof.waves.length; }

  /** Direction the child wants to run (any length; above 1 is full speed). */
  setMove(x, z) {
    const l = Math.hypot(x, z);
    this.move = l > 1 ? { x: x / l, z: z / l } : { x, z };
  }

  choose(id) {
    if (!this.choosing || !this.choosing.includes(id)) return false;
    this.perks[id]++;
    if (id === 'vest') {
      const add = Math.round(this.hero.maxHp * 0.25);
      this.hero.maxHp += add;
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + add + this.hero.maxHp * 0.2);
    }
    this.choosing = null;
    return true;
  }

  // ---- numbers that follow the perks and the shop --------------------------------------------------------------------

  get speed() { return 5.2 * (1 + this.perks.shoes * 0.15); }
  get dmgMul() { return (1 + this.up.power * 0.15) * (1 + this.perks.power * 0.25); }
  get rateMul() { return 1 + this.perks.rapid * 0.2; }
  get radiusMul() { return 1 + this.perks.bang * 0.3; }
  get magnet() { return 2.4 + this.up.magnet * 0.7; }

  _perkChoices() {
    const explosive = this.weapon !== 'blaster';
    const pool = PERKS.map((p) => p.id).filter((id) => !(id === 'pierce' && explosive) && !(id === 'bang' && !explosive && this.tanks.every((t) => !t.alive)));
    const out = [];
    while (out.length < 3 && pool.length) out.push(pool.splice(Math.floor(this.rand() * pool.length), 1)[0]);
    return out;
  }

  _startWave() {
    const comp = this.endless ? endlessWave(this.wave) : this.roof.waves[this.wave];
    const list = [];
    const scale = this.easy ? 0.75 : 1;
    for (let i = 0; i < Math.round(comp[0] * scale); i++) list.push('shambler');
    for (let i = 0; i < Math.round(comp[1] * scale); i++) list.push('sprinter');
    for (let i = 0; i < Math.max(comp[2] ? 1 : 0, Math.round(comp[2] * scale)); i++) list.push('brute');
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(this.rand() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    // brutes come a bit later in the wave, the king last
    list.sort((a, b) => (a === 'brute' ? 1 : 0) - (b === 'brute' ? 1 : 0) || 0);
    for (let i = 0; i < list.length; i++) if (list[i] === 'brute' && this.rand() < 0.5) { const j = Math.floor(list.length * (0.3 + this.rand() * 0.5)); list.splice(j, 0, list.splice(i, 1)[0]); }
    if (comp[3]) list.push('king');
    this.queue = list;
    this.spawnT = 0.3;
    this.events.push({ type: 'wave', n: this.wave + 1, of: this.waveTotal });
    const crate = !this.endless && this.roof.crate;
    if (crate && crate.wave === this.wave) {
      const p = this._freeSpot(3.5);
      this.crate = { x: p.x, z: p.z, weapon: crate.weapon, t: 0 };
      this.events.push({ type: 'crate', weapon: crate.weapon, x: p.x, z: p.z });
    }
    // gas tanks come back for the next wave (a truck refills them, off screen)
    for (const t of this.tanks) if (!t.alive) { t.alive = true; t.hp = 2; this.events.push({ type: 'tankBack', id: t.id }); }
  }

  _freeSpot(minFromHero) {
    for (let i = 0; i < 60; i++) {
      const x = (this.rand() * 2 - 1) * (this.W - 1.4);
      const z = (this.rand() * 2 - 1) * (this.D - 1.4);
      if (Math.hypot(x - this.hero.x, z - this.hero.z) < minFromHero) continue;
      if (this.props.some((p) => Math.hypot(p.x - x, p.z - z) < p.r + 1)) continue;
      if (this.tanks.some((t) => Math.hypot(t.x - x, t.z - z) < 1.8)) continue;
      return { x, z };
    }
    return { x: 0, z: 0 };
  }

  _spawn(kind) {
    // climb over the parapet somewhere along the edge, not right next to the hero
    let best = null;
    for (let i = 0; i < 8; i++) {
      const side = Math.floor(this.rand() * 4);
      const u = this.rand() * 2 - 1;
      const p = side === 0 ? { x: u * (this.W - 0.6), z: -this.D + 0.5 } : side === 1 ? { x: u * (this.W - 0.6), z: this.D - 0.5 } : side === 2 ? { x: -this.W + 0.5, z: u * (this.D - 0.6) } : { x: this.W - 0.5, z: u * (this.D - 0.6) };
      if (this.props.some((q) => Math.hypot(q.x - p.x, q.z - p.z) < q.r + 0.8)) continue;
      const d = Math.hypot(p.x - this.hero.x, p.z - this.hero.z);
      if (d > 5.5) { best = p; break; }
      if (!best || d > best.d) best = { ...p, d };
    }
    const k = KINDS[kind];
    const hpMul = this.endless ? 1 + this.wave * 0.08 : 1 + this.roofIndex * 0.1;
    const z = { id: this.nextId++, kind, x: best.x, z: best.z, hp: k.hp * hpMul * (this.easy ? 0.8 : 1), max: 0, r: k.r, speed: k.speed * (0.9 + this.rand() * 0.2), climb: kind === 'king' ? 1.2 : 0.7, t: this.rand() * 10, flash: 0, kx: 0, kz: 0, touching: false };
    z.max = z.hp;
    this.zombies.push(z);
    this.events.push({ type: 'spawn', kind, x: z.x, z: z.z, id: z.id });
  }

  // ---- shooting ------------------------------------------------------------------------------------------------------

  _target(range) {
    const h = this.hero;
    // a gas tank with a crowd around it is the best target (like the video's tip)
    let tank = null;
    for (const t of this.tanks) {
      if (!t.alive) continue;
      const d = Math.hypot(t.x - h.x, t.z - h.z);
      if (d > range || d < 2.6) continue;
      const crowd = this.zombies.filter((z) => z.climb <= 0 && Math.hypot(z.x - t.x, z.z - t.z) < 3.2 * this.radiusMul).length;
      if (crowd >= 3) { tank = { x: t.x, z: t.z, tank: t }; break; }
    }
    if (tank) return [tank];
    const list = [];
    for (const z of this.zombies) {
      if (z.climb > 0.35) continue;
      const d = Math.hypot(z.x - h.x, z.z - h.z);
      if (d <= range) list.push({ z, d });
    }
    list.sort((a, b) => a.d - b.d);
    return list.slice(0, 3).map((o) => ({ x: o.z.x, z: o.z.z, zombie: o.z }));
  }

  _fire(dt) {
    const w = weaponOf(this.weapon);
    this.cool -= dt;
    if (this.cool > 0) return;
    const targets = this._target(w.range);
    if (!targets.length) return;
    this.cool = 1 / (w.rate * this.rateMul);
    const h = this.hero;
    const n = 1 + this.perks.twin;
    const first = targets[0];
    h.aim = Math.atan2(first.x - h.x, first.z - h.z);
    h.aimT = 0.4;
    const dmg = w.dmg * this.dmgMul;
    for (let i = 0; i < n; i++) {
      if (w.id === 'blaster') {
        const a = h.aim + (i - (n - 1) / 2) * 0.16;
        this.shots.push({ kind: 'bolt', x: h.x + Math.sin(a) * 0.5, z: h.z + Math.cos(a) * 0.5, vx: Math.sin(a) * BOLT_SPEED, vz: Math.cos(a) * BOLT_SPEED, life: w.range / BOLT_SPEED + 0.05, dmg, pierce: this.perks.pierce, hit: [] });
      } else if (w.id === 'rocket') {
        const a = h.aim + (i - (n - 1) / 2) * 0.22;
        this.shots.push({ kind: 'rocket', x: h.x + Math.sin(a) * 0.5, z: h.z + Math.cos(a) * 0.5, vx: Math.sin(a) * ROCKET_SPEED, vz: Math.cos(a) * ROCKET_SPEED, life: w.range / ROCKET_SPEED + 0.1, dmg, r: w.radius * this.radiusMul });
      } else {
        const tg = targets[Math.min(i, targets.length - 1)];
        const off = i >= targets.length ? 1.2 * i : 0;
        // lead the target a little so a running zombie is still caught
        const tz = tg.zombie;
        const lead = tz ? 0.4 : 0;
        const tx = tg.x + (tz ? (h.x - tz.x) * 0.0 : 0) + off + (tz ? tz.vx ?? 0 : 0) * lead;
        const tzz = tg.z + (tz ? tz.vz ?? 0 : 0) * lead;
        this.shots.push({ kind: w.id === 'fireworks' ? 'firework' : 'bomb', x: h.x, z: h.z, sx: h.x, sz: h.z, tx, tz: tzz, t: 0, T: BOMB_TIME, dmg, r: w.radius * this.radiusMul, mini: w.id === 'fireworks' });
      }
    }
    this.events.push({ type: 'shoot', weapon: w.id, n });
  }

  _boom(x, z, r, dmg, by) {
    this.events.push({ type: 'boom', x, z, r, by });
    for (const zb of this.zombies) {
      const d = Math.hypot(zb.x - x, zb.z - z);
      if (d > r + zb.r) continue;
      const f = d < r * 0.5 ? 1 : 0.7;
      this._hurt(zb, dmg * f, by);
      // push away from the blast
      const l = d || 1;
      const push = zb.kind === 'king' ? 0.6 : zb.kind === 'brute' ? 2 : 5;
      zb.kx += ((zb.x - x) / l) * push;
      zb.kz += ((zb.z - z) / l) * push;
    }
    for (const t of this.tanks) if (t.alive && Math.hypot(t.x - x, t.z - z) < r * 0.8) this._tankHit(t, 2);
  }

  _tankHit(t, dmg) {
    if (!t.alive) return;
    t.hp -= dmg;
    if (t.hp > 0) { this.events.push({ type: 'tankHit', id: t.id }); return; }
    t.alive = false;
    this.events.push({ type: 'tank', id: t.id, x: t.x, z: t.z });
    this._boom(t.x, t.z, 3.4 * this.radiusMul, 9 * this.dmgMul, 'tank');
  }

  _hurt(z, dmg, by) {
    if (z.hp <= 0) return;
    z.hp -= dmg;
    z.flash = 0.12;
    this.events.push({ type: 'hit', id: z.id, x: z.x, z: z.z, by });
    if (z.hp > 0) return;
    const k = KINDS[z.kind];
    this.kills++;
    const value = k.coin + Math.floor(this.rand() * 3) - 1;
    this.coinsOnRoof.push({ x: z.x + (this.rand() - 0.5) * 0.6, z: z.z + (this.rand() - 0.5) * 0.6, v: value, t: 0, fly: false });
    if (this.rand() < (this.easy ? 0.06 : 0.035)) this.hearts.push({ x: z.x, z: z.z, t: 0 });
    this.xp += k.xp;
    this.events.push({ type: 'pop', id: z.id, kind: z.kind, x: z.x, z: z.z });
  }

  // ---- the step ------------------------------------------------------------------------------------------------------

  step(dt) {
    this.events = [];
    if (this.choosing || this.state === 'won' || this.state === 'lost') return this.events;
    this.time += dt;
    const h = this.hero;
    if (this.state === 'leap') {
      this.leapT += dt;
      if (this.leapT >= 1.6) { this.state = 'won'; this.result = this._result(); this.events.push({ type: 'won' }); }
      return this.events;
    }
    // run
    const sp = this.speed;
    h.vx = this.move.x * sp;
    h.vz = this.move.z * sp;
    h.x += h.vx * dt;
    h.z += h.vz * dt;
    this._keepIn(h, HERO_R);
    if (Math.hypot(this.move.x, this.move.z) > 0.2) h.face = Math.atan2(this.move.x, this.move.z);
    h.aimT = Math.max(0, (h.aimT ?? 0) - dt);

    // waves
    if (this.state === 'play') {
      if (this.gap > 0) {
        this.gap -= dt;
        if (this.gap <= 0) this._startWave();
      } else {
        const cap = 22 + this.roofIndex * 3 + (this.endless ? 8 : 0);
        this.spawnT -= dt;
        if (this.queue.length && this.spawnT <= 0) {
          const alive = this.zombies.length;
          if (alive < cap) {
            const group = Math.min(this.queue.length, 1 + Math.floor(this.rand() * (this.roofIndex >= 3 ? 3 : 2)));
            for (let i = 0; i < group; i++) this._spawn(this.queue.shift());
          }
          const base = this.endless ? Math.max(0.35, 1.0 - this.wave * 0.05) : Math.max(0.4, 1.15 - this.roofIndex * 0.08 - this.wave * 0.05);
          this.spawnT = base * (this.easy ? 1.35 : 1) * (0.7 + this.rand() * 0.6);
        }
        if (!this.queue.length && !this.zombies.length) this._waveCleared();
      }
    }

    this.fieldT = (this.fieldT ?? 0) - dt;
    if (this.fieldT <= 0 && this.zombies.length) this._buildField();
    // zombies walk to the hero, keep a little apart, and get pushed out of props
    let touching = 0;
    for (const z of this.zombies) {
      z.t += dt;
      z.flash = Math.max(0, z.flash - dt);
      if (z.climb > 0) { z.climb -= dt; continue; }
      const dx = h.x - z.x;
      const dz = h.z - z.z;
      const d = Math.hypot(dx, dz) || 1;
      const reach = z.r + HERO_R + 0.12;
      let vx = 0;
      let vz = 0;
      z.touching = d < reach + 0.05;
      if (!z.touching) {
        vx = (dx / d) * z.speed;
        vz = (dz / d) * z.speed;
        // walk around vents, towers and tanks: follow the path field when something is in the way
        const dir = this._pathDir(z);
        if (dir) { vx = dir.x * z.speed; vz = dir.z * z.speed; }
      } else touching += z.kind === 'king' ? 3 : z.kind === 'brute' ? 2 : 1;
      z.vx = vx;
      z.vz = vz;
      z.x += (vx + z.kx) * dt;
      z.z += (vz + z.kz) * dt;
      z.kx *= Math.pow(0.02, dt);
      z.kz *= Math.pow(0.02, dt);
      if (z.touching) this._touchDmg = (this._touchDmg ?? 0) + KINDS[z.kind].dps * dt;
    }
    // separation (a crowd, not one blob)
    const zs = this.zombies;
    for (let i = 0; i < zs.length; i++) {
      const a = zs[i];
      if (a.climb > 0) continue;
      for (let j = i + 1; j < zs.length; j++) {
        const b = zs[j];
        if (b.climb > 0) continue;
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const m = a.r + b.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= m * m || d2 === 0) continue;
        const d = Math.sqrt(d2);
        const push = (m - d) * 0.5;
        const wa = a.kind === 'king' ? 0.1 : a.kind === 'brute' ? 0.35 : 0.5;
        const wb = b.kind === 'king' ? 0.1 : b.kind === 'brute' ? 0.35 : 0.5;
        a.x -= (dx / d) * push * (wa / (wa + wb)) * 2;
        a.z -= (dz / d) * push * (wa / (wa + wb)) * 2;
        b.x += (dx / d) * push * (wb / (wa + wb)) * 2;
        b.z += (dz / d) * push * (wb / (wa + wb)) * 2;
      }
      this._keepIn(a, a.r);
    }
    // a zombie never stands inside the hero
    for (const z of zs) {
      if (z.climb > 0) continue;
      const dx = z.x - h.x;
      const dz = z.z - h.z;
      const d = Math.hypot(dx, dz) || 1;
      const m = z.r + HERO_R;
      if (d < m) { z.x = h.x + (dx / d) * m; z.z = h.z + (dz / d) * m; }
    }

    // contact: the hero gets bumped (cartoon "ouch"), never more than three zombies at a time
    if (touching > 0) {
      const cap = Math.min(1, 3 / touching);
      const dmg = (this._touchDmg ?? 0) * cap * (this.easy ? 0.5 : 1);
      h.hp -= dmg;
      this.touchT += dt;
      if (this.touchT > 0.45) { this.touchT = 0; this.events.push({ type: 'ouch' }); }
      this.calm = 0;
    } else {
      this.touchT = 0.45;
      this.calm = (this.calm ?? 0) + dt;
      if (this.easy && this.calm > 2) h.hp = Math.min(h.maxHp, h.hp + 3 * dt);
    }
    this._touchDmg = 0;
    this.lowest = Math.min(this.lowest, Math.max(0, h.hp) / h.maxHp);
    if (h.hp <= 0) {
      h.hp = 0;
      this.state = 'lost';
      this.result = this._result();
      this.events.push({ type: 'knocked' });
      return this.events;
    }

    // shooting
    if (this.state === 'play') this._fire(dt);
    this._moveShots(dt);
    // remove beaten zombies
    if (this.zombies.some((z) => z.hp <= 0)) this.zombies = this.zombies.filter((z) => z.hp > 0);

    // coins, hearts, crate
    const mag = this.magnet;
    for (const c of this.coinsOnRoof) {
      c.t += dt;
      const dx = h.x - c.x;
      const dz = h.z - c.z;
      const d = Math.hypot(dx, dz);
      if (d < mag || c.fly) c.fly = true;
      if (c.fly && c.t > 0.25) {
        const s = Math.max(9, 18 - d);
        c.x += (dx / (d || 1)) * Math.min(d, s * dt);
        c.z += (dz / (d || 1)) * Math.min(d, s * dt);
      }
      if (d < 0.5 && c.t > 0.25) { c.done = true; this.coins += c.v; this.events.push({ type: 'coin', v: c.v }); }
    }
    if (this.coinsOnRoof.some((c) => c.done)) this.coinsOnRoof = this.coinsOnRoof.filter((c) => !c.done);
    for (const ht of this.hearts) {
      ht.t += dt;
      if (Math.hypot(h.x - ht.x, h.z - ht.z) < 0.9) { ht.done = true; h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.3); this.events.push({ type: 'heal' }); }
      if (ht.t > 14) ht.done = true;
    }
    if (this.hearts.some((x) => x.done)) this.hearts = this.hearts.filter((x) => !x.done);
    if (this.crate) {
      this.crate.t += dt;
      if (Math.hypot(h.x - this.crate.x, h.z - this.crate.z) < 1.05) {
        this.weapon = this.crate.weapon;
        this.unlocked = this.crate.weapon;
        this.events.push({ type: 'weapon', weapon: this.crate.weapon, x: this.crate.x, z: this.crate.z });
        this.crate = null;
        this.cool = 0.2;
      }
    }

    // level up (the game waits while the child picks)
    if (this.xp >= this.xpNeed && this.state === 'play') {
      this.xp -= this.xpNeed;
      this.xpLevel++;
      this.xpNeed = Math.round(this.xpNeed * 1.45 + 2);
      this.choosing = this._perkChoices();
      this.events.push({ type: 'levelUp', choices: this.choosing, level: this.xpLevel });
    }

    // the launch pad
    if (this.state === 'pad') {
      for (const c of this.coinsOnRoof) c.fly = true;
      if (Math.hypot(h.x - this.pad.x, h.z - this.pad.z) < PAD_R) {
        this.state = 'leap';
        this.leapT = 0;
        h.x = this.pad.x;
        h.z = this.pad.z;
        this.coins += this.coinsOnRoof.reduce((a, c) => a + c.v, 0);
        this.coinsOnRoof = [];
        this.events.push({ type: 'leap' });
      }
    }
    return this.events;
  }

  _waveCleared() {
    const h = this.hero;
    h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.25);
    for (const c of this.coinsOnRoof) c.fly = true;
    this.wave++;
    this.events.push({ type: 'waveClear', n: this.wave });
    if (!this.endless && this.wave >= this.roof.waves.length) {
      this.state = 'pad';
      this.events.push({ type: 'pad', x: this.pad.x, z: this.pad.z });
    } else this.gap = 2.2;
  }

  _moveShots(dt) {
    const keep = [];
    for (const s of this.shots) {
      if (s.kind === 'bolt' || s.kind === 'rocket') {
        s.x += s.vx * dt;
        s.z += s.vz * dt;
        s.life -= dt;
        let gone = s.life <= 0 || Math.abs(s.x) > this.W + 1 || Math.abs(s.z) > this.D + 1;
        for (const t of this.tanks) {
          if (gone || !t.alive) continue;
          if (Math.hypot(t.x - s.x, t.z - s.z) < t.r + 0.15) {
            if (s.kind === 'rocket') this._boom(s.x, s.z, s.r, s.dmg, 'rocket');
            this._tankHit(t, s.kind === 'rocket' ? 2 : 1);
            gone = true;
          }
        }
        if (!gone) {
          for (const z of this.zombies) {
            if (z.hp <= 0 || z.climb > 0.35) continue;
            if (s.hit && s.hit.includes(z.id)) continue;
            if (Math.hypot(z.x - s.x, z.z - s.z) < z.r + 0.22) {
              if (s.kind === 'rocket') { this._boom(s.x, s.z, s.r, s.dmg, 'rocket'); gone = true; break; }
              this._hurt(z, s.dmg, 'bolt');
              s.hit.push(z.id);
              const ln = Math.hypot(s.vx, s.vz) || 1;
              z.kx += (s.vx / ln) * (z.kind === 'shambler' || z.kind === 'sprinter' ? 1.6 : 0.3);
              z.kz += (s.vz / ln) * (z.kind === 'shambler' || z.kind === 'sprinter' ? 1.6 : 0.3);
              if (s.pierce-- <= 0) { gone = true; break; }
            }
          }
        }
        if (!gone) keep.push(s);
      } else {
        // lobbed bomb / firework: a straight path on the ground, the height is drawn
        s.t += dt;
        const k = Math.min(1, s.t / s.T);
        s.x = s.sx + (s.tx - s.sx) * k;
        s.z = s.sz + (s.tz - s.sz) * k;
        s.y = 0.9 + Math.sin(k * Math.PI) * 2.6;
        if (k >= 1) {
          this._boom(s.tx, s.tz, s.r, s.dmg, s.kind);
          if (s.mini) {
            // fireworks: four little bursts around the big one
            for (let i = 0; i < 4; i++) {
              const a = i * (Math.PI / 2) + 0.5;
              this.shots.push({ kind: 'spark', x: s.tx, z: s.tz, sx: s.tx, sz: s.tz, tx: s.tx + Math.cos(a) * s.r * 0.9, tz: s.tz + Math.sin(a) * s.r * 0.9, t: 0, T: 0.32, dmg: s.dmg * 0.45, r: s.r * 0.55, mini: false });
            }
          }
        } else keep.push(s);
      }
    }
    // fireworks sparks are added while looping; keep the new ones
    for (const s of this.shots) if (s.kind === 'spark' && s.t === 0 && !keep.includes(s)) keep.push(s);
    this.shots = keep;
  }

  // ---- a path field (a little grid) so zombies walk around things -----------------------------------------------------

  _grid() {
    const C = 0.5;
    const cols = Math.ceil((this.W * 2) / C);
    const rows = Math.ceil((this.D * 2) / C);
    if (!this.blocked || this.blocked.length !== cols * rows || this._tankSig !== this.tanks.map((t) => t.alive ? 1 : 0).join('')) {
      this._tankSig = this.tanks.map((t) => t.alive ? 1 : 0).join('');
      this.blocked = new Uint8Array(cols * rows);
      const things = this.props.concat(this.tanks.filter((t) => t.alive));
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const x = -this.W + (c + 0.5) * C;
        const z = -this.D + (r + 0.5) * C;
        if (things.some((p) => Math.hypot(p.x - x, p.z - z) < p.r + 0.35)) this.blocked[r * cols + c] = 1;
      }
    }
    return { C, cols, rows };
  }

  _buildField() {
    const { C, cols, rows } = this._grid();
    const dist = (this.field = new Float32Array(cols * rows).fill(1e9));
    this.fieldDim = { C, cols, rows };
    const cell = (x, z) => [Math.max(0, Math.min(cols - 1, Math.floor((x + this.W) / C))), Math.max(0, Math.min(rows - 1, Math.floor((z + this.D) / C)))];
    const [hc, hr] = cell(this.hero.x, this.hero.z);
    const q = [hr * cols + hc];
    dist[q[0]] = 0;
    // a small Dijkstra-like sweep (diagonals cost more), good enough on a grid this size
    for (let qi = 0; qi < q.length; qi++) {
      const i = q[qi];
      const c = i % cols;
      const r = (i - c) / cols;
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nc = c + dc;
        const nr = r + dr;
        if (nc < 0 || nr < 0 || nc >= cols || nr >= rows) continue;
        const j = nr * cols + nc;
        if (this.blocked[j]) continue;
        if (dr && dc && (this.blocked[r * cols + nc] || this.blocked[nr * cols + c])) continue;
        const nd = dist[i] + (dr && dc ? 1.414 : 1);
        if (nd < dist[j] - 0.01) { dist[j] = nd; q.push(j); }
      }
    }
    this.fieldT = 0.25;
  }

  _pathDir(z) {
    if (!this.field) return null;
    const { C, cols, rows } = this.fieldDim;
    const c = Math.max(0, Math.min(cols - 1, Math.floor((z.x + this.W) / C)));
    const r = Math.max(0, Math.min(rows - 1, Math.floor((z.z + this.D) / C)));
    const here = this.field[r * cols + c];
    // close to the hero with nothing in between: walk straight
    const dx = this.hero.x - z.x;
    const dz = this.hero.z - z.z;
    const d = Math.hypot(dx, dz) || 1;
    if (here < 4) return null;
    let best = here;
    let bx = 0;
    let bz = 0;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      const nc = c + dc;
      const nr = r + dr;
      if ((!dr && !dc) || nc < 0 || nr < 0 || nc >= cols || nr >= rows) continue;
      const v = this.field[nr * cols + nc];
      if (v < best) { best = v; bx = dc; bz = dr; }
    }
    if (best >= here) return { x: dx / d, z: dz / d };
    // aim at the middle of the better cell, mixed with the straight way so the crowd looks natural
    const tx = -this.W + (c + bx + 0.5) * C - z.x;
    const tz = -this.D + (r + bz + 0.5) * C - z.z;
    const tl = Math.hypot(tx, tz) || 1;
    const mx = (tx / tl) * 0.8 + (dx / d) * 0.2;
    const mz = (tz / tl) * 0.8 + (dz / d) * 0.2;
    const ml = Math.hypot(mx, mz) || 1;
    return { x: mx / ml, z: mz / ml };
  }

  _keepIn(o, r) {
    const W = this.W - 0.35 - r;
    const D = this.D - 0.35 - r;
    o.x = Math.max(-W, Math.min(W, o.x));
    o.z = Math.max(-D, Math.min(D, o.z));
    for (const p of this.props) this._pushOut(o, p.x, p.z, p.r + r);
    for (const t of this.tanks) if (t.alive) this._pushOut(o, t.x, t.z, t.r + r);
  }

  _pushOut(o, x, z, m) {
    const dx = o.x - x;
    const dz = o.z - z;
    const d2 = dx * dx + dz * dz;
    if (d2 >= m * m) return;
    const d = Math.sqrt(d2) || 0.001;
    o.x = x + (dx / d) * m;
    o.z = z + (dz / d) * m;
  }

  _result() {
    const won = this.state === 'won';
    const stars = won ? 1 + (this.lowest >= 0.4 ? 1 : 0) + (this.lowest >= 0.75 ? 1 : 0) : 0;
    return { won, stars, kills: this.kills, coins: this.coins, waves: this.wave, unlocked: this.unlocked };
  }
}

/** A helper that plays like a careful child: keeps away from crowds, picks up crates and coins, then goes to the pad.
 * Used by the tests (and could drive a demo). Returns a direction. */
export function robotMove(g) {
  const h = g.hero;
  if (g.state === 'pad') return { x: g.pad.x - h.x, z: g.pad.z - h.z };
  let ax = 0;
  let az = 0;
  let near = 0;
  for (const z of g.zombies) {
    if (z.climb > 0.5) continue;
    const dx = h.x - z.x;
    const dz = h.z - z.z;
    const d = Math.max(0.3, Math.hypot(dx, dz));
    if (d > 6) continue;
    const w = (z.kind === 'brute' || z.kind === 'king' ? 2.2 : 1) / (d * d);
    ax += (dx / d) * w;
    az += (dz / d) * w;
    if (d < 3) near++;
  }
  // stay away from the edges and the corners (where a crowd traps you)
  ax += (-h.x / g.W) * 0.18 * (Math.abs(h.x) > g.W * 0.55 ? 3 : 1);
  az += (-h.z / g.D) * 0.18 * (Math.abs(h.z) > g.D * 0.55 ? 3 : 1);
  const goal = g.crate || (near === 0 ? g.hearts[0] : null) || (near === 0 && g.hero.hp < g.hero.maxHp ? null : null);
  if (goal && near <= 1) { const dx = goal.x - h.x; const dz = goal.z - h.z; const d = Math.hypot(dx, dz) || 1; ax += (dx / d) * 1.4; az += (dz / d) * 1.4; }
  // nobody close: walk towards the nearest zombie until it is in range
  if (near === 0 && !g.crate) {
    let best = null;
    for (const z of g.zombies) { const d = Math.hypot(z.x - h.x, z.z - h.z); if (z.climb <= 0 && (!best || d < best.d)) best = { z, d }; }
    if (best && best.d > 7) { ax += ((best.z.x - h.x) / best.d) * 0.6; az += ((best.z.z - h.z) / best.d) * 0.6; }
  }
  // circle around a crowd instead of running straight into a wall
  const l = Math.hypot(ax, az);
  if (l < 0.02) return { x: 0, z: 0 };
  const side = 0.45;
  return { x: ax / l - (az / l) * side, z: az / l + (ax / l) * side };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const r of ROOFS) { const v = Math.floor(Number(s.stars[r.id])); if (v >= 1 && v <= 3) stars[r.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const up = {};
  for (const g of UPGRADES) { const v = Math.floor(Number(s.up && s.up[g.id])); up[g.id] = v >= 0 && v <= MAX_UP ? v : 0; }
  const c = Math.floor(Number(s.coins));
  const weapons = ['blaster'];
  if (Array.isArray(s.weapons)) for (const w of WEAPONS) if (w.id !== 'blaster' && s.weapons.includes(w.id)) weapons.push(w.id);
  const weapon = weapons.includes(s.weapon) ? s.weapon : 'blaster';
  const b = Math.floor(Number(s.best));
  return {
    unlocked: Number.isFinite(u) ? Math.max(1, Math.min(ROOFS.length + 1, u)) : 1,
    stars,
    coins: Number.isFinite(c) && c > 0 ? Math.min(c, 999999) : 0,
    up,
    weapons,
    weapon,
    best: Number.isFinite(b) && b > 0 ? Math.min(b, 999) : 0,
    muted: s.muted === true,
  };
}
