// «ركضة السحاب» — Cloud Dash: the rules (pure, no browser). A cartoon kid runs by himself along a three-lane track of pastel tiles
// floating high in the clouds. Swipe left/right to change lane, up to jump, down to slide. Jump the candy barriers, spikes and
// gaps (crumbling tiles open as you come close), dodge the slime, slide under the bars, ride the wind gusts, run along the side
// walls for coins, and grab a shield, a coin magnet and slow motion. Reach the finish gate with your three hearts.

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export const LANE_W = 2.2;
export const JUMP_V = 9.2;
export const GRAVITY = 24;
export const LEVELS = 10;

// Dash Over Egypt: every level runs under a named Egyptian sky (display only —
// specs, generation and saves are unchanged).
export const SKIES = [
  { ar: 'سماء القاهرة', en: 'Cairo Sky' },
  { ar: 'سماء الجيزة', en: 'Giza Sky' },
  { ar: 'دلتا النيل', en: 'Nile Delta' },
  { ar: 'سماء الإسكندرية', en: 'Alexandria Sky' },
  { ar: 'ساحل البحر الأحمر', en: 'Red Sea Coast' },
  { ar: 'سماء سيناء', en: 'Sinai Sky' },
  { ar: 'واحة سيوة', en: 'Siwa Oasis' },
  { ar: 'واحات الصحراء الغربية', en: 'Western Desert Oases' },
  { ar: 'سماء الأقصر', en: 'Luxor Sky' },
  { ar: 'سماء أسوان', en: 'Aswan Sky' },
];
export const skyIndexOf = (n) => Math.max(0, Math.min(SKIES.length - 1, n - 1));
export const skyOf = (n) => SKIES[skyIndexOf(n)];

// Phase 2E (Batch F): every sky LOOKS like its place. One palette per sky, in
// the same order as SKIES (paletteOf clamps exactly like skyOf, so the name on
// the HUD and the colours on screen always agree — endless runs past level 10
// stay under the Aswan sky, just like the name does). Data only: main.js turns
// a palette into the sky gradient, the fog, the lights, the cloud tint, the
// track tint and a multiply tint over the painted backdrop. All colours are
// #rrggbb. One coherent pastel-cartoon family, ten different moods:
//   Cairo hazy gold · Giza desert amber · Delta fresh green-blue morning ·
//   Alexandria bright sea teal · Red Sea turquoise over coral · Sinai rose
//   dawn · Siwa emerald + gold · Western Desert pale chalk · Luxor deep gold
//   late afternoon · Aswan Nile blue + granite rose.
export const PALETTES = [
  { // 1 Cairo — warm hazy gold
    top: '#d9a860', mid: '#f2cd96', bottom: '#ffe9c2', fog: '#f0cd9c',
    hemiSky: '#fff3da', hemiGround: '#d9b384', hemiInt: 1.25,
    sun: '#ffd9a0', sunInt: 1.25, cloud: '#ffedd2', tint: '#ffe3b3', ground: '#fff1d6',
  },
  { // 2 Giza — desert amber, big sun
    top: '#dd943a', mid: '#f6ba60', bottom: '#ffe2ab', fog: '#eeb264',
    hemiSky: '#ffecc2', hemiGround: '#d99c52', hemiInt: 1.3,
    sun: '#ffcf7a', sunInt: 1.45, cloud: '#ffe8be', tint: '#ffdaa1', ground: '#ffedca',
  },
  { // 3 Nile Delta — fresh green-blue morning
    top: '#63b8e4', mid: '#a5ded2', bottom: '#e9ffd6', fog: '#b7e5c9',
    hemiSky: '#ecfcff', hemiGround: '#9bd3a2', hemiInt: 1.25,
    sun: '#fff3c2', sunInt: 1.2, cloud: '#eaffea', tint: '#d9f5dc', ground: '#eaffe0',
  },
  { // 4 Alexandria — sea teal, bright
    top: '#38b1d6', mid: '#8bdde6', bottom: '#e6faff', fog: '#a2dfe9',
    hemiSky: '#ecfcff', hemiGround: '#7cc2c6', hemiInt: 1.3,
    sun: '#ffffff', sunInt: 1.3, cloud: '#eefcff', tint: '#c9f1f4', ground: '#e6fbff',
  },
  { // 5 Red Sea Coast — turquoise over coral warmth
    top: '#2ab8ab', mid: '#79e0cb', bottom: '#ffe1bd', fog: '#9fe0c8',
    hemiSky: '#e8fff7', hemiGround: '#e3a87c', hemiInt: 1.3,
    sun: '#ffe9b8', sunInt: 1.3, cloud: '#fff0dc', tint: '#cdf0dc', ground: '#fff0d8',
  },
  { // 6 Sinai — rose dawn over mountains
    top: '#c284b4', mid: '#f0a5b4', bottom: '#ffd7bf', fog: '#eaafc0',
    hemiSky: '#ffe6ef', hemiGround: '#ac87a6', hemiInt: 1.2,
    sun: '#ffb894', sunInt: 1.15, cloud: '#ffe1e7', tint: '#ffd4de', ground: '#ffe6ea',
  },
  { // 7 Siwa — palm-oasis emerald + gold
    top: '#46a87a', mid: '#a4d996', bottom: '#ffecac', fog: '#b9e0a9',
    hemiSky: '#f2ffe8', hemiGround: '#86b464', hemiInt: 1.3,
    sun: '#ffd76e', sunInt: 1.3, cloud: '#f4ffde', tint: '#ddf2c1', ground: '#f0ffcf',
  },
  { // 8 Western Desert Oases — pale chalk white-gold
    top: '#ddd2a6', mid: '#f3ead0', bottom: '#fffbe9', fog: '#ece2c2',
    hemiSky: '#fffdf1', hemiGround: '#d5c89f', hemiInt: 1.3,
    sun: '#fff2c6', sunInt: 1.35, cloud: '#fffef5', tint: '#f8efcf', ground: '#fffbe9',
  },
  { // 9 Luxor — deep gold late afternoon
    top: '#d67f2c', mid: '#f0a54c', bottom: '#ffd68c', fog: '#eaa452',
    hemiSky: '#ffe4b2', hemiGround: '#b57a3c', hemiInt: 1.3,
    sun: '#ffbe62', sunInt: 1.4, cloud: '#ffdfae', tint: '#ffd08f', ground: '#ffe9bd',
  },
  { // 10 Aswan — Nile blue + granite rose
    top: '#468bd4', mid: '#8abfec', bottom: '#ffd6cd', fog: '#a5c9e9',
    hemiSky: '#ecf6ff', hemiGround: '#d2948b', hemiInt: 1.25,
    sun: '#ffe9cf', sunInt: 1.25, cloud: '#ffe9e3', tint: '#d4e8f7', ground: '#ffe9e2',
  },
];
export const paletteOf = (n) => PALETTES[skyIndexOf(n)];

/** What each level uses (a feature appears in a level and stays). */
export function levelSpec(n, easy = false) {
  const f = (k) => n >= k;
  return {
    n,
    length: 520 + 90 * (n - 1), // about a minute to a minute and a half of running
    speed: (8.5 + 0.75 * (n - 1)) * (easy ? 0.8 : 1),
    density: Math.min(0.85, 0.34 + 0.055 * n) * (easy ? 0.7 : 1),
    barrier: true, slime: f(2), bar: f(2), gap: f(3), spike: f(4), wind: f(5), wall: f(6),
    shield: f(3), magnet: f(4), slow: f(6),
    hearts: easy ? 5 : 3,
  };
}

/** A level: { spec, finishZ, items: [{ type, lane, z, len?, dir? }], walls: [{ z0, z1 }] } sorted by z. */
export function generateLevel(n, seed, easy = false) {
  const spec = levelSpec(n, easy);
  const r = rng(seed * 7919 + n * 104729);
  const items = [];
  const walls = [];
  const finishZ = spec.length;
  const pick = (a) => a[Math.floor(r() * a.length)];
  const kinds = ['barrier'];
  if (spec.slime) kinds.push('slime', 'slime');
  if (spec.bar) kinds.push('bar');
  if (spec.gap) kinds.push('gap', 'crumble');
  if (spec.spike) kinds.push('spike');
  let z = 34; // a calm start
  let wallEnd = 0;
  let lastPower = 0;
  while (z < finishZ - 30) {
    const inWall = z < wallEnd;
    const roll = r();
    if (!inWall && spec.wall && roll < 0.08 && z > 80) {
      // a stretch of side walls (coins along them)
      const len = 40 + Math.floor(r() * 20);
      walls.push({ z0: z, z1: z + len });
      const side = r() < 0.5 ? -1 : 1;
      for (let k = 0; k < len / 3; k++) items.push({ type: 'coin', lane: 2 * side, z: z + 4 + k * 3 });
      for (let k = 0; k < 4; k++) items.push({ type: 'coin', lane: 0, z: z + 8 + k * 8 });
      wallEnd = z + len;
      z += len + 10;
      continue;
    }
    if (r() < spec.density) {
      // an obstacle row: a hazard in one or two lanes; at least one lane stays free (a "bar" or "gap" in every lane would still be passable by sliding / jumping)
      const kind = pick(kinds);
      const lanes = [-1, 0, 1];
      const nHaz = kind === 'bar' || kind === 'gap' || kind === 'crumble' ? 1 + (r() < 0.3 ? 1 : 0) : 1 + (r() < 0.35 ? 1 : 0);
      const hz = [];
      while (hz.length < nHaz) { const l = pick(lanes); if (!hz.includes(l)) hz.push(l); }
      for (const l of hz) items.push({ type: kind, lane: l, z, len: kind === 'gap' || kind === 'crumble' ? 3.6 : kind === 'bar' ? 1 : 1 });
      // coins in a free lane, and above the hazards (a coin arc over a jumpable one)
      const free = lanes.filter((l) => !hz.includes(l));
      const cl = pick(free);
      for (let k = 0; k < 5; k++) items.push({ type: 'coin', lane: cl, z: z - 4 + k * 2.2 });
      if (kind !== 'bar') for (let k = 0; k < 3; k++) items.push({ type: 'coin', lane: hz[0], z: z - 1.5 + k * 1.5, y: 1.2 + (k === 1 ? 0.5 : 0) });
      // wind gusts sit before a hazard sometimes
      if (spec.wind && r() < 0.18) items.push({ type: 'wind', lane: pick(free), z: z - 14, len: 6, dir: r() < 0.5 ? -1 : 1 });
      z += 13 + Math.floor(r() * 6);
    } else {
      // a coin line
      const cl = pick([-1, 0, 1]);
      for (let k = 0; k < 6; k++) items.push({ type: 'coin', lane: cl, z: z + k * 2.2 });
      z += 12;
    }
    // power-ups: not too often
    if (z - lastPower > 70) {
      const ps = [];
      if (spec.shield) ps.push('shield');
      if (spec.magnet) ps.push('magnet');
      if (spec.slow) ps.push('slow');
      if (ps.length && r() < 0.6) { items.push({ type: pick(ps), lane: pick([-1, 0, 1]), z: z + 4 }); lastPower = z; }
    }
  }
  items.sort((a, b) => a.z - b.z);
  return { spec, finishZ, items, walls };
}

const HAZARDS = { barrier: 0.9, slime: 1.1, spike: 0.6 };

/** One run: the kid's state and every step. */
export class Run {
  constructor(n, seed, easy = false) {
    this.n = n;
    this.level = generateLevel(n, seed, easy);
    this.spec = this.level.spec;
    this.z = 0;
    this.lane = 0; // -2..2 (|2| = on a side wall)
    this.y = 0;
    this.vy = 0;
    this.slide = 0; // seconds left sliding
    this.hearts = this.spec.hearts;
    this.coins = 0;
    this.coinsTotal = this.level.items.filter((i) => i.type === 'coin').length;
    this.shield = false;
    this.magnet = 0;
    this.slow = 0;
    this.inv = 0; // invulnerable seconds after a hit
    this.state = 'run'; // 'run' | 'won' | 'lost'
    this.got = new Set();
    this.opened = new Set(); // crumbling tiles that have opened
    this.windT = 0;
    this.airUntil = 0;
    this.hitsTaken = 0;
    this.time = 0;
    this.i0 = 0; // items behind the kid are skipped
  }

  get speed() { return this.spec.speed * (this.slow > 0 ? 0.55 : 1); }
  get onWallSegment() { return this.level.walls.some((w) => this.z >= w.z0 && this.z <= w.z1); }
  get onWall() { return Math.abs(this.lane) === 2; }
  get grounded() { return this.y <= 0.001 && this.vy <= 0; }

  moveLane(dir) {
    const next = this.lane + dir;
    if (Math.abs(next) <= 1) { this.lane = next; return true; }
    if (Math.abs(next) === 2 && this.onWallSegment) { this.lane = next; return true; }
    return false;
  }
  jump() { if (this.grounded && !this.onWall) { this.vy = JUMP_V; this.y = 0.002; return true; } return false; }
  doSlide() { if (this.onWall) return false; if (!this.grounded) { this.vy = Math.min(this.vy, -12); } this.slide = 0.65; return true; }

  /** Advance dt seconds. Returns events: coin, hit, fall, power(type), finish, land, gust. */
  step(dt) {
    const ev = [];
    if (this.state !== 'run') return ev;
    this.time += dt;
    if (this.slow > 0) this.slow = Math.max(0, this.slow - dt);
    if (this.magnet > 0) this.magnet = Math.max(0, this.magnet - dt);
    if (this.inv > 0) this.inv = Math.max(0, this.inv - dt);
    if (this.slide > 0) this.slide = Math.max(0, this.slide - dt);
    const sp = this.speed;
    // vertical
    const wasAir = !this.grounded;
    if (!this.grounded) { this.vy -= GRAVITY * dt; this.y += this.vy * dt; if (this.y <= 0) { this.y = 0; this.vy = 0; } }
    if (wasAir && this.grounded) ev.push({ type: 'land' });
    const z0 = this.z;
    this.z += sp * dt;
    // off a side wall when the segment ends
    if (this.onWall && !this.onWallSegment) this.lane = Math.sign(this.lane);
    // items
    const all = this.level.items;
    while (this.i0 < all.length && all[this.i0].z + (all[this.i0].len || 0) < this.z - 4) this.i0++;
    for (let i = this.i0; i < all.length; i++) {
      const it = all[i];
      if (it.z > this.z + 3) break;
      const key = i;
      if (this.got.has(key)) continue;
      const lane = it.lane;
      const iy = it.y ?? (it.type === 'coin' ? 0.8 : 1.0);
      if (it.type === 'coin') {
        const near = Math.abs(it.z - this.z) < 0.9;
        const same = lane === this.lane;
        const pulled = this.magnet > 0 && Math.abs(it.z - this.z) < 5 && Math.abs(lane - this.lane) <= 2 && Math.abs(lane) < 2;
        if ((near && same && Math.abs(iy - (this.y + 0.8)) < 1.2) || (pulled && near) || (this.magnet > 0 && Math.abs(it.z - this.z) < 3 && Math.abs(lane - this.lane) <= 1 && Math.abs(lane) < 2 && Math.abs(this.lane) < 2)) {
          this.got.add(key); this.coins++; ev.push({ type: 'coin', it, i });
        }
        continue;
      }
      if (it.type === 'shield' || it.type === 'magnet' || it.type === 'slow') {
        if (Math.abs(it.z - this.z) < 1 && lane === this.lane) {
          this.got.add(key);
          if (it.type === 'shield') this.shield = true; else if (it.type === 'magnet') this.magnet = 7; else this.slow = 5;
          ev.push({ type: 'power', kind: it.type, i });
        }
        continue;
      }
      if (it.type === 'wind') {
        if (this.z >= it.z && this.z <= it.z + it.len && lane === this.lane && this.grounded && !this.onWall) {
          this.windT += dt;
          if (this.windT > 0.3) { this.windT = 0; if (this.moveLane(it.dir)) { ev.push({ type: 'gust', dir: it.dir }); } this.got.add(key); }
        }
        continue;
      }
      // crumbling tiles open when the kid is close
      if (it.type === 'crumble' && it.z - this.z < 6 && !this.opened.has(key)) { this.opened.add(key); ev.push({ type: 'crack', it }); }
      // hazards
      if (lane !== this.lane || this.onWall) continue;
      let hit = false;
      if (it.type in HAZARDS) hit = this.z > it.z - 0.4 && this.z < it.z + 0.5 && this.y < HAZARDS[it.type];
      else if (it.type === 'bar') hit = this.z > it.z - 0.3 && this.z < it.z + 0.4 && this.slide <= 0 && this.y < 1.7;
      else if (it.type === 'gap' || it.type === 'crumble') {
        const open = it.type === 'gap' || this.opened.has(key);
        if (open && this.z > it.z + 0.4 && this.z < it.z + it.len - 0.3 && this.y < 0.12) { this.got.add(key); this._fall(it, ev); continue; }
      }
      if (hit) { this.got.add(key); this._hurt(ev, it); }
    }
    if (this.z >= this.level.finishZ) { this.state = 'won'; ev.push({ type: 'finish' }); }
    void z0;
    return ev;
  }

  _hurt(ev, it) {
    if (this.inv > 0) return;
    if (this.shield) { this.shield = false; this.inv = 1.0; ev.push({ type: 'shieldpop', it }); return; }
    this.hearts--; this.hitsTaken++;
    this.inv = 1.6;
    ev.push({ type: 'hit', it });
    if (this.hearts <= 0) { this.state = 'lost'; ev.push({ type: 'lost' }); }
  }

  /** Falling through a gap: a heart, and the kid is put back on the tile after the gap. */
  _fall(it, ev) {
    if (this.inv > 0) { this.z = it.z + it.len; return; }
    if (this.shield) { this.shield = false; this.inv = 1.0; this.z = it.z + it.len; ev.push({ type: 'shieldpop', it }); return; }
    this.hearts--; this.hitsTaken++;
    this.inv = 1.6;
    this.z = it.z + it.len + 0.2;
    ev.push({ type: 'fall', it });
    if (this.hearts <= 0) { this.state = 'lost'; ev.push({ type: 'lost' }); }
  }

  get stars() { const f = this.coinsTotal ? this.coins / this.coinsTotal : 1; return this.hearts >= this.spec.hearts && f > 0.7 ? 3 : this.hearts >= 2 && f > 0.4 ? 2 : 1; }
  get progress() { return Math.min(1, this.z / this.level.finishZ); }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let n = 1; n <= LEVELS; n++) { const v = o.stars && Number(o.stars[n]); if (v >= 1 && v <= 3) stars[n] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(LEVELS, Math.floor(Number(o.unlocked)) || 1)), stars, coins: Math.max(0, Math.min(999999, Math.floor(Number(o.coins)) || 0)), muted: !!o.muted };
}
