// «بُوري في البحر الأحمر» — the rules with no drawing. Bouri the grey mullet swims (drag to steer) and eats sea
// creatures smaller than itself to grow; bigger predators chase it and, after a short "!" warning, lunge — a short
// DASH (button) catches prey or escapes. There is NO timer and NO lives (kind rules): the child swims at their own
// pace until Bouri reaches the level goal, and a predator bite is only a bump plus a small growth cost — never a
// fail state, never progress loss. Eight Red Sea stops: Hurghada Reef (bait balls), Ras Mohammed (hunt the squid),
// the Blue Hole (grow big enough to devour the reef shark), Dolphin House, the Great Wreck, Elphinstone,
// Wadi El Gemal (a calm seagrass-lagoon breather: no task, no boss, only the grouper hunts) and the Hamata Islands
// (the finale: a squid hunt AND the reef-shark boss in one stop — the only stop that combines both). Sizes are
// in cm; one world unit is 10 cm. Finishing fast still earns bonus stars, but slowly finishing always wins too.
// Deterministic with a seed for tests.

export const SPECIES = {
  plankton: { cm: [2, 3], speed: 0.4, school: 0, color: 'g', ar: 'بلانكتون', en: 'Plankton' },
  shrimp: { cm: [3, 5], speed: 1.2, ar: 'جمبري', en: 'Shrimp' },
  jelly: { cm: [8, 16], speed: 0.5, ar: 'قنديل البحر', en: 'Jellyfish' },
  sardine: { cm: [4, 7], speed: 3.0, school: 1, ar: 'سردين', en: 'Sardine' },
  damsel: { cm: [6, 10], speed: 2.2, ar: 'سمكة الأنثياس', en: 'Anthias' },
  butterfly: { cm: [11, 18], speed: 2.0, school: 1, ar: 'فراشة البحر الأحمر', en: 'Red Sea Butterflyfish' },
  puffer: { cm: [16, 24], speed: 1.3, ar: 'السمكة المنفوخة', en: 'Pufferfish' },
  grouper: { cm: [50, 70], speed: 2.4, predator: true, ar: 'الهامور', en: 'Grouper' },
  squid: { cm: [35, 70], speed: 3.4, squid: true, ar: 'حبار', en: 'Squid' },
  mackerel: { cm: [25, 40], speed: 3.2, school: 1, ar: 'ماكريل', en: 'Mackerel' },
  barracuda: { cm: [110, 140], speed: 3.6, predator: true, ar: 'باراكودا', en: 'Barracuda' },
  lantern: { cm: [30, 60], speed: 1.8, ar: 'سمكة الفانوس', en: 'Lanternfish' },
  angler: { cm: [90, 150], speed: 2.2, predator: true, ar: 'أبو الشص', en: 'Anglerfish' },
  tuna: { cm: [80, 130], speed: 3.4, school: 1, ar: 'تونة البحر الأحمر', en: 'Red Sea Tuna' },
  shark: { cm: [240, 240], speed: 3.8, predator: true, boss: true, ar: 'قرش الشعاب', en: 'Reef Shark' },
};

// Red Sea stops in sailing order. `star3`/`star2` are now only fast-finish BONUS thresholds (seconds): finishing
// slower still wins with 1 star — there is no countdown and no fail. `look` picks the colours/art plate, `biome`
// the scenery. The wreck plate (bg_wreck) already sails at stop 5, so the trench dive (stop 3) is the Blue Hole.
// `species` + `fish` + `fact` feed the reef album: each stop features one species Bouri actually meets there
// (in its mix, or its boss), with one true, simple fact in both languages. Stops 7–8 (Phase 2F) are APPENDED —
// ids 1–6 are save data and never renumber. Only six bg plates ship, wired 1-to-1 to stops 1–6, so stops 7–8
// shared a plate by biome in 2F; Certification Sweep A gave each its own `look` palette + code-drawn dressing
// (lagoon seagrass meadows / islands coral gardens in main.js' BIOME table), so no two stops share a background.
export const LEVELS = [
  { id: 1, ar: 'شعاب الغردقة', en: 'Hurghada Reef', biome: 'reef', start: 10, goal: 45, star3: 90, star2: 120, half: 48, halfY: 9,
    mix: [['plankton', 4], ['shrimp', 3], ['damsel', 4], ['jelly', 2], ['butterfly', 3], ['puffer', 2], ['grouper', 1]], bait: 'sardine',
    species: 'damsel', fish: '🐠', fact: { ar: 'الأنثياس بتعوم مع بعضها في سحابة وردية وبرتقالية كبيرة فوق الشعاب المرجانية.', en: 'Anthias swim together in one big pink-and-orange cloud above the coral reef.' } },
  { id: 2, ar: 'رأس محمد', en: 'Ras Mohammed', biome: 'kelp', start: 30, goal: 110, star3: 70, star2: 95, half: 75, halfY: 13,
    mix: [['butterfly', 3], ['puffer', 2], ['mackerel', 4], ['squid', 4], ['barracuda', 1]], bait: 'mackerel', task: { kind: 'squid', n: 3 },
    species: 'squid', fish: '🦑', fact: { ar: 'الحبار بيطلّع سحابة حبر غامقة عشان يختفي، وبعدين يهرب لورا بسرعة!', en: 'A squid squirts a cloud of dark ink to hide, then jets away backwards!' } },
  { id: 3, ar: 'الثقب الأزرق', en: 'The Blue Hole', biome: 'trench', start: 70, goal: 250, star3: 85, star2: 115, half: 120, halfY: 20,
    mix: [['lantern', 4], ['squid', 3], ['tuna', 3], ['angler', 1], ['barracuda', 1]], bait: 'lantern', boss: 'shark',
    species: 'shark', fish: '🦈', fact: { ar: 'قرش الشعاب خجول وهادي، بيعوم بهدوء حوالين الشعاب ومش بيقرب من الناس.', en: 'Reef sharks are shy and calm — they cruise slowly around the reef and stay away from people.' } },
  { id: 4, ar: 'بيت الدلافين', en: 'Dolphin House', biome: 'reef', look: 'night', start: 60, goal: 180, star3: 80, star2: 105, half: 60, halfY: 11,
    mix: [['butterfly', 3], ['jelly', 3], ['mackerel', 3], ['squid', 3], ['barracuda', 2], ['grouper', 1]], bait: 'mackerel',
    species: 'jelly', fish: '🪼', fact: { ar: 'قنديل البحر معندوش مخ ولا قلب، وبيعوم مع الميه زي مظلة صغيرة.', en: 'A jellyfish has no brain and no heart — it drifts with the water like a tiny umbrella.' } },
  { id: 5, ar: 'السفينة الغارقة', en: 'The Great Wreck', biome: 'kelp', look: 'wreck', start: 90, goal: 300, star3: 75, star2: 100, half: 85, halfY: 15,
    mix: [['mackerel', 3], ['squid', 4], ['tuna', 3], ['barracuda', 2]], bait: 'mackerel', task: { kind: 'squid', n: 5 },
    species: 'tuna', fish: '🐟', fact: { ar: 'التونة بتعوم بسرعة كبيرة ومش بتقف أبدًا، حتى وهي نايمة بتفضل تتحرك!', en: 'Tuna swim very fast and never stop moving — they even keep swimming while they sleep!' } },
  { id: 6, ar: 'إلفينستون', en: 'Elphinstone', biome: 'trench', look: 'abyss', start: 130, goal: 450, star3: 95, star2: 125, half: 130, halfY: 22,
    mix: [['lantern', 3], ['tuna', 3], ['squid', 3], ['angler', 2], ['barracuda', 2]], bait: 'tuna', boss: 'shark',
    species: 'angler', fish: '💡', fact: { ar: 'سمكة أبو الشص شايلة لمبة صغيرة بتنوّر في الضلمة عشان تجذب الأكل لعندها.', en: 'The anglerfish carries a tiny lamp that glows in the dark to lure its food closer.' } },
  { id: 7, ar: 'محمية وادي الجمال', en: 'Wadi El Gemal', biome: 'reef', look: 'lagoon', start: 160, goal: 540, star3: 100, star2: 135, half: 140, halfY: 23,
    mix: [['plankton', 3], ['shrimp', 4], ['jelly', 2], ['damsel', 3], ['butterfly', 2], ['puffer', 2], ['grouper', 1]], bait: 'sardine',
    species: 'shrimp', fish: '🦐', fact: { ar: 'قلب الجمبري موجود في راسه!', en: "A shrimp's heart is in its head!" } },
  { id: 8, ar: 'جزر حماطة', en: 'Hamata Islands', biome: 'kelp', look: 'islands', start: 200, goal: 650, star3: 110, star2: 145, half: 150, halfY: 24,
    mix: [['butterfly', 2], ['mackerel', 3], ['squid', 4], ['tuna', 4], ['barracuda', 2], ['grouper', 1]], bait: 'tuna', task: { kind: 'squid', n: 4 }, boss: 'shark',
    species: 'barracuda', fish: '⚡', fact: { ar: 'الباراكودا جسمها طويل زي السهم، وبتندفع في الميه بسرعة كبيرة.', en: 'The barracuda is long like an arrow, and it darts through the water super fast.' } },
];

export const EAT = 0.9; // you can eat anything up to 90% of your size
export const DANGER = 1.15; // anything 15% bigger than you can bite you
const DASH_T = 0.45;
const DASH_CD = 2.2;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const U = (cm) => cm / 10; // world units

export class Sea {
  /** opts: { level (0..2), easy, seed } */
  constructor(opts = {}) {
    this.levelIndex = Math.max(0, Math.min(LEVELS.length - 1, opts.level ?? 0));
    this.level = LEVELS[this.levelIndex];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 5);
    this.half = this.level.half;
    this.halfY = this.level.halfY;
    this.seen = new Set();
    // age-4 easy mode is gentler without any clock: Bouri starts a little bigger and a bite costs less growth
    this.startCm = this.easy ? Math.round(this.level.start * 1.25) : this.level.start;
    this.fish = { x: 0, z: 0, cm: this.startCm, a: Math.PI, vx: 0, vz: 0, dashT: 0, dashCd: 0, invul: 0, y: 0 };
    this.bites = 0;
    this.t = 0;
    this.state = 'play'; // play -> boss -> won (there is no lost state: no timer, no lives)
    this.creatures = [];
    this.nextId = 1;
    this.eaten = 0;
    this.squid = 0;
    this.combo = 0;
    this.comboT = 0;
    this.baitT = 18;
    this.move = { x: 0, z: 0 };
    this.events = [];
    this.pending = [];
    for (let i = 0; i < 22; i++) this._spawn(true);
  }

  get r() { return U(this.fish.cm) * 0.5; }
  get goalCm() { return this.level.goal; }
  setMove(x, z) { const l = Math.hypot(x, z); this.move = l > 1 ? { x: x / l, z: z / l } : { x, z }; }

  dash() {
    const f = this.fish;
    if (f.dashCd > 0 || this.state === 'won') return false;
    f.dashT = DASH_T;
    f.dashCd = DASH_CD;
    this.pending.push({ type: 'dash' });
    return true;
  }

  // ---- creatures ------------------------------------------------------------------------------------------------------

  _pickKind() {
    const mix = this.level.mix;
    const tot = mix.reduce((a, [, w]) => a + w, 0);
    let r = this.rand() * tot;
    for (const [k, w] of mix) { r -= w; if (r <= 0) return k; }
    return mix[0][0];
  }

  _spawn(anywhere = false, kind = this._pickKind(), near = null, cmOverride) {
    // never too many hunters at once (one on the reef, two later)
    const cap = this.levelIndex === 0 ? 1 : 2;
    if (SPECIES[kind].predator && !SPECIES[kind].boss && this.creatures.filter((c) => SPECIES[c.kind].predator).length >= cap) kind = this.level.mix[0][0];
    const sp = SPECIES[kind];
    const f = this.fish;
    let x;
    let z;
    for (let i = 0; i < 12; i++) {
      if (near) { x = near.x + (this.rand() - 0.5) * 6; z = Math.max(-this.halfY + 1, Math.min(this.halfY - 1, near.z + (this.rand() - 0.5) * 6)); break; }
      x = (this.rand() * 2 - 1) * (this.half - 4);
      z = (this.rand() * 2 - 1) * (this.halfY - 2);
      const d = Math.hypot(x - f.x, z - f.z);
      if (d > (anywhere ? 6 : 12) && d < 28) break;
    }
    // sizes follow the fish a little so there is always food and always something to fear
    let cm = cmOverride ?? sp.cm[0] + this.rand() * (sp.cm[1] - sp.cm[0]);
    if (!sp.predator && !cmOverride && kind !== 'plankton') cm = Math.max(cm, Math.min(cm * 2, f.cm * (0.18 + this.rand() * 0.4)));
    const c = { id: this.nextId++, kind, x, z, cm, a: this.rand() * 6.28, t: this.rand() * 10, y: (this.rand() - 0.5) * 2, warn: 0, lunge: 0, cool: 1 + this.rand() * 2, ink: 0 };
    this.creatures.push(c);
    return c;
  }

  _bait() {
    // a bait ball: a big swirling school of small fish arrives near the player
    const f = this.fish;
    const a = this.rand() * 6.28;
    const near = { x: f.x + Math.cos(a) * 14, z: f.z + Math.sin(a) * 14 };
    const kind = this.level.bait;
    for (let i = 0; i < 16; i++) { const c = this._spawn(false, kind, near, Math.max(SPECIES[kind].cm[0], f.cm * (0.3 + this.rand() * 0.25))); c.bait = near; c.ang = (i / 16) * 6.28; }
    this.events.push({ type: 'bait', x: near.x, z: near.z });
  }

  _moveCreature(c, dt) {
    const sp = SPECIES[c.kind];
    const f = this.fish;
    c.t += dt;
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.hypot(dx, dz) || 1;
    let speed = sp.speed * (0.7 + Math.min(1.5, U(c.cm) * 0.25));
    const bigger = c.cm > f.cm * DANGER;
    const edible = c.cm <= f.cm * EAT;
    if (c.bait) {
      // swirl around the ball's centre
      c.ang += dt * 1.4;
      const tx = c.bait.x + Math.cos(c.ang) * 3.5;
      const tz = c.bait.z + Math.sin(c.ang) * 3.5;
      c.a = Math.atan2(tx - c.x, tz - c.z);
      speed = 5;
      if (d < 6) { c.bait = null; c.a = Math.atan2(-dx, -dz); }
    } else if (sp.predator && bigger && this.state !== 'won') {
      // hunt the player: warn ("!") then lunge
      if (d < 18 && f.invul <= 0 && this.t > 8) c.a = turn(c.a, Math.atan2(dx, dz), 1.8 * dt);
      else c.a += Math.sin(c.t * 0.5) * 0.6 * dt;
      c.cool -= dt;
      if (c.warn > 0) { c.warn -= dt; speed *= 0.3; if (c.warn <= 0) { c.lunge = 0.7; this.events.push({ type: 'lunge', id: c.id, kind: c.kind }); } } else if (c.lunge > 0) { c.lunge -= dt; speed *= 2.2; } else if (c.cool <= 0 && this.t > 12 && d < 7 + U(c.cm) * 0.3 && f.invul <= 0) {
        c.warn = this.easy ? 1.2 : 0.95;
        c.cool = 4 + this.rand() * 2.5;
        this.events.push({ type: 'warn', id: c.id, kind: c.kind });
      } else speed *= d < 18 ? 0.75 : 0.5;
    } else if (edible && d < 7 + this.r) {
      // smaller ones flee (the squid jets away and leaves ink)
      c.a = turn(c.a, Math.atan2(-dx, -dz), 4 * dt);
      speed *= sp.squid ? 1.6 : 1.25;
      if (sp.squid && c.ink <= 0 && d < 5 + this.r) { c.ink = 3; this.events.push({ type: 'ink', x: c.x, z: c.z }); }
    } else c.a += Math.sin(c.t * 0.7 + c.id) * 0.8 * dt;
    c.ink = Math.max(0, c.ink - dt);
    c.x += Math.sin(c.a) * speed * dt;
    c.z += Math.cos(c.a) * speed * dt;
    const lim = this.half - 1;
    const limY = this.halfY - Math.min(this.halfY * 0.5, U(c.cm) * 0.4) - 0.5;
    if (Math.abs(c.x) > lim) { c.x = Math.sign(c.x) * lim; c.a = -c.a; }
    if (Math.abs(c.z) > limY) { c.z = Math.sign(c.z) * limY; c.a = Math.PI - c.a; }
    // most fish swim mostly sideways (a side view): steer back towards level swimming
    if (!c.bait && !(SPECIES[c.kind].predator && c.lunge > 0)) { const side = Math.sin(c.a) >= 0 ? Math.PI / 2 : -Math.PI / 2; c.a = turn(c.a, side, (c.kind === 'jelly' ? 0 : 0.6) * dt); }
    c.y = Math.sin(c.t * 0.8 + c.id) * 0.6;
  }

  // ---- the step ------------------------------------------------------------------------------------------------------

  step(dt) {
    this.events = this.pending;
    this.pending = [];
    if (this.state === 'won') return this.events;
    this.t += dt;
    const f = this.fish;
    f.invul = Math.max(0, f.invul - dt);
    f.dashCd = Math.max(0, f.dashCd - dt);
    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    // swimming: smooth turns, faster while dashing
    const L = U(f.cm);
    const top = (2.6 + L * 0.9) * (f.dashT > 0 ? 2.6 : 1);
    if (f.dashT > 0) f.dashT -= dt;
    const m = Math.hypot(this.move.x, this.move.z);
    const wantX = m > 0.1 ? this.move.x * top : f.dashT > 0 ? Math.sin(f.a) * top : 0;
    const wantZ = m > 0.1 ? this.move.z * top : f.dashT > 0 ? Math.cos(f.a) * top : 0;
    const k = Math.min(1, dt * (f.dashT > 0 ? 10 : 4));
    f.vx += (wantX - f.vx) * k;
    f.vz += (wantZ - f.vz) * k;
    f.x += f.vx * dt;
    f.z += f.vz * dt;
    if (Math.hypot(f.vx, f.vz) > 0.3) f.a = turn(f.a, Math.atan2(f.vx, f.vz), 8 * dt);
    const lim = this.half - this.r - 1;
    const limY = this.halfY - Math.min(this.halfY * 0.6, this.r) - 0.3;
    f.x = Math.max(-lim, Math.min(lim, f.x));
    f.z = Math.max(-limY, Math.min(limY, f.z));
    for (const c of this.creatures) this._moveCreature(c, dt);
    // eating and being bitten
    const mouthX = f.x + Math.sin(f.a) * this.r * 0.8;
    const mouthZ = f.z + Math.cos(f.a) * this.r * 0.8;
    for (const c of this.creatures) {
      const cr = U(c.cm) * 0.5;
      if (c.cm <= f.cm * EAT) {
        if (Math.hypot(c.x - mouthX, c.z - mouthZ) < cr + this.r * 0.75) this._eat(c);
      } else if (c.cm > f.cm * DANGER && SPECIES[c.kind].predator) {
        const bite = Math.hypot(f.x - (c.x + Math.sin(c.a) * cr * 0.8), f.z - (c.z + Math.cos(c.a) * cr * 0.8));
        if (c.lunge > 0 && bite < this.r + cr * 0.45 && f.invul <= 0 && f.dashT <= 0) this._bitten(c);
      }
    }
    if (this.creatures.some((c) => c.gone)) this.creatures = this.creatures.filter((c) => !c.gone);
    for (const [k] of this.level.mix) {
      const sp = SPECIES[k];
      if (sp.predator || this.seen.has(k)) continue;
      if (sp.cm[0] <= f.cm * EAT) { this.seen.add(k); if (this.t > 1) this.events.push({ type: 'canEat', kind: k }); }
    }
    // more life in the sea; a bait ball now and then
    const want = this.state === 'boss' ? 14 : 22;
    if (this.creatures.length < want && this.rand() < dt * 1.2) this._spawn();
    this.creatures = this.creatures.filter((c) => SPECIES[c.kind].predator || c.cm >= f.cm * 0.08 || c.kind === 'plankton');
    this.baitT -= dt;
    if (this.baitT <= 0) { this.baitT = 24 + this.rand() * 10; this._bait(); }
    // the goal
    const taskDone = !this.level.task || this.squid >= this.level.task.n;
    if (this.state === 'play' && f.cm >= this.level.goal && taskDone) {
      if (this.level.boss) {
        this.state = 'boss';
        const s = this._spawn(false, 'shark', { x: f.x + (f.x > 0 ? -30 : 30), z: 0 }, SPECIES.shark.cm[0]);
        s.boss = true;
        this.events.push({ type: 'boss' });
      } else this._end();
    }
    return this.events;
  }

  _eat(c) {
    const f = this.fish;
    c.gone = true;
    this.eaten++;
    if (SPECIES[c.kind].squid) this.squid++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = 2;
    const gain = Math.min(c.cm * 0.1 * (1 + Math.min(4, this.combo - 1) * 0.08), this.level.goal * 1.2 - f.cm > 0 ? 999 : 0.2);
    f.cm = Math.round((f.cm + gain) * 10) / 10;
    this.events.push({ type: 'eat', kind: c.kind, cm: c.cm, gain, combo: this.combo, x: c.x, z: c.z, dash: f.dashT > 0 });
    if (c.boss) this._end();
  }

  _bitten(c) {
    const f = this.fish;
    this.bites++;
    f.invul = 2.2;
    this.combo = 0;
    // a bump, never a fail: Bouri is pushed away and loses a little growth (less on easy), never below the start size
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const l = Math.hypot(dx, dz) || 1;
    f.vx = (dx / l) * 10;
    f.vz = (dz / l) * 10;
    f.cm = Math.max(this.startCm, Math.round(f.cm * (this.easy ? 0.97 : 0.94) * 10) / 10);
    c.lunge = 0;
    c.cool = 5;
    c.a += Math.PI; // the hunter swims off after a bite
    this.events.push({ type: 'bitten', kind: c.kind, bites: this.bites });
  }

  _end() {
    this.state = 'won';
    const used = this.t;
    // stars reward a fast finish only — a slow, careful swim still wins with 1 star
    const stars = 1 + (used <= this.level.star2 ? 1 : 0) + (used <= this.level.star3 ? 1 : 0);
    this.result = { won: true, stars, cm: this.fish.cm, eaten: this.eaten, squid: this.squid, time: Math.round(used), bites: this.bites };
    this.events.push({ type: 'won' });
  }
}

function turn(a, b, k) {
  let d = b - a;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  return a + Math.max(-k, Math.min(k, d));
}

/** A robot child: flees predators (dash when one lunges), chases the best food, hunts the shark at the end. */
export function robotSwim(s) {
  const f = s.fish;
  let ax = 0;
  let az = 0;
  let dash = false;
  for (const c of s.creatures) {
    if (!(SPECIES[c.kind].predator && c.cm > f.cm * DANGER)) continue;
    const dx = f.x - c.x;
    const dz = f.z - c.z;
    const d = Math.max(0.5, Math.hypot(dx, dz));
    if (d < 16 + U(c.cm) * 0.5) { const w = (c.warn > 0 || c.lunge > 0 ? 4 : 1.5) / d; ax += (dx / d) * w * 8; az += (dz / d) * w * 8; }
    if ((c.warn > 0 || c.lunge > 0) && d < 9 + U(c.cm) * 0.5) dash = true;
  }
  let best = null;
  for (const c of s.creatures) {
    if (c.cm > f.cm * EAT) continue;
    const d = Math.hypot(c.x - f.x, c.z - f.z);
    const danger = s.creatures.some((p) => SPECIES[p.kind].predator && p.cm > f.cm * DANGER && Math.hypot(p.x - c.x, p.z - c.z) < 10);
    const sc = d / (0.3 + c.cm / f.cm) + (danger ? 40 : 0) - (s.level.task && c.kind === s.level.task.kind && f.cm >= s.level.goal * 0.6 ? 25 : 0);
    if (!best || sc < best.sc) best = { c, sc, d };
  }
  if (best) { ax += ((best.c.x - f.x) / (best.d || 1)) * 1.2; az += ((best.c.z - f.z) / (best.d || 1)) * 1.2; if (best.d < 4 && best.c.cm > f.cm * 0.4) dash = dash || f.dashCd <= 0; }
  ax += (-f.x / s.half) * 0.4;
  az += (-f.z / s.half) * 0.4;
  return { x: ax, z: az, dash };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const b = {};
  if (s.best && typeof s.best === 'object') for (const lv of LEVELS) { const v = Number(s.best[lv.id]); if (v > 0) b[lv.id] = Math.min(Math.round(v), 9999); }
  return { unlocked: Math.min(LEVELS.length, Math.max(Number.isFinite(u) ? Math.max(1, u) : 1, ...Object.keys(stars).map((k) => Number(k) + 1))), stars, best: b, muted: s.muted === true };
}

/** Reef album entries for a save: a stop's card is unlocked once the stop has been completed (stars > 0).
 * Stop-completion unlocks, not per-run species encounters: the sim's `seen` set lives only inside a run and is
 * never persisted, while stars ARE the save — so the album derives purely from existing save fields and old
 * saves migrate for free (a finished 6-stop save shows stops 1–6 open, 7–8 locked). Pure, so it is testable. */
export function albumEntries(save) {
  const s = normalizeSave(save);
  return LEVELS.map((level) => ({ level, unlocked: (s.stars[level.id] ?? 0) > 0 }));
}

/** Voice clip file stem (no extension) narrating a stop's album fact:
 * voice/<lang>/fact<id>_1.mp3 under the game's assets. Pure, so the
 * naming contract with the Instinct recordings is testable. */
export function factClipName(level) { return `fact${level.id}_1`; }
