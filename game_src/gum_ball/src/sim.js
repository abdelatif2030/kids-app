// «كرة العلكة العملاقة» — the rules with no drawing. A small pink ball of sticky gum rolls around a colourful city
// (drag anywhere to roll). Everything small enough (not bigger than about 60% of the ball) sticks to it and the ball
// grows; anything bigger is a wall: the ball bounces off and a little bit falls off. Street clutter first, then
// street stuff (carts, bikes, umbrellas), cars, buses and finally buildings. Reach a gigantic size before time runs
// out — there is no losing: the stars say how big the ball got. Deterministic with a seed for the robot tests.

/** What can be rolled up: size (m), group, label. */
export const THINGS = {
  candy: { s: 0.1, g: 0, ar: 'حلاوة', en: 'Candy' },
  apple: { s: 0.12, g: 0, ar: 'تفاحة', en: 'Apple' },
  duck: { s: 0.16, g: 0, ar: 'بطة لعبة', en: 'Rubber duck' },
  hotdog: { s: 0.22, g: 0, ar: 'هوت دوج', en: 'Hot Dog' },
  pretzel: { s: 0.22, g: 0, ar: 'بريتزل', en: 'Pretzel' },
  banana: { s: 0.22, g: 0, ar: 'موزة', en: 'Banana' },
  ball: { s: 0.24, g: 0, ar: 'كورة', en: 'Ball' },
  teddy: { s: 0.34, g: 0, ar: 'دبدوب', en: 'Teddy' },
  cone: { s: 0.4, g: 0, ar: 'قمع مرور', en: 'Cone' },
  hydrant: { s: 0.75, g: 1, ar: 'حنفية حريق', en: 'Hydrant' },
  bin: { s: 0.9, g: 1, ar: 'صندوق زبالة', en: 'Trash can' },
  plant: { s: 1.1, g: 1, ar: 'زرعة', en: 'Plant pot' },
  bike: { s: 1.7, g: 1, ar: 'عجلة', en: 'Bike' },
  cart: { s: 2.0, g: 1, ar: 'عربية أكل', en: 'Food cart' },
  umbrella: { s: 2.2, g: 1, ar: 'شمسية', en: 'Umbrella table' },
  car: { s: 4.2, g: 2, ar: 'عربية', en: 'Car' },
  taxi: { s: 4.4, g: 2, ar: 'تاكسي', en: 'Taxi' },
  police: { s: 4.6, g: 2, ar: 'عربية شرطة', en: 'Police Car' },
  tree: { s: 5.0, g: 2, ar: 'شجرة', en: 'Tree' },
  truck: { s: 6.5, g: 2, ar: 'عربية أكل كبيرة', en: 'Food Truck' },
  bus: { s: 11, g: 3, ar: 'أتوبيس', en: 'Bus' },
  firetruck: { s: 10, g: 3, ar: 'عربية مطافي', en: 'Fire truck' },
  shop: { s: 14, g: 4, ar: 'محل', en: 'Shop' },
  house: { s: 18, g: 4, ar: 'عمارة', en: 'Building' },
  office: { s: 24, g: 4, ar: 'برج', en: 'Tower' },
  tower: { s: 32, g: 4, ar: 'ناطحة سحاب', en: 'Skyscraper' },
};

/** Size goals and what can be rolled up next (the "BIGGER!" banner). */
export const GOALS = [
  { d: 1.3, next: 'street', ar: 'حاجات الشارع', en: 'street stuff' },
  { d: 3.2, next: 'carts', ar: 'العربيات الصغيرة والشماسي', en: 'carts and umbrellas' },
  { d: 6.6, next: 'cars', ar: 'العربيات', en: 'cars' },
  { d: 16, next: 'buses', ar: 'الأتوبيسات', en: 'buses' },
  { d: 22, next: 'buildings', ar: 'العمارات', en: 'buildings' },
  { d: 45, next: 'giant', ar: 'ناطحات السحاب', en: 'skyscrapers' },
  { d: 60, next: 'done', ar: 'كل المدينة', en: 'the whole city' },
];
export const STARS = [20, 40, 60]; // metres for one, two, three stars
export const PICK = 0.6; // a thing sticks when its size is at most this part of the ball
export const HALF = 230; // the city is from -HALF to HALF

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/** The city: a pedestrian plaza in the middle (clutter, umbrellas, carts), streets with cars and buses around it,
 * and blocks of buildings. Returns a list of things { kind, x, z, s, r, a, h }. Same every time (seeded). */
export function buildCity(seed = 11) {
  const rand = rng(seed);
  const things = [];
  const add = (kind, x, z, a = rand() * 6.28) => {
    const T = THINGS[kind];
    const s = T.s * (0.9 + rand() * 0.2);
    things.push({ kind, x, z, s, r: Math.max(0.12, s * 0.5), a, id: things.length });
  };
  const BLOCK = 46;
  const ROAD = 14;
  const onRoad = (v) => { const m = ((v % BLOCK) + BLOCK) % BLOCK; return m < ROAD; };
  // the plaza: x -14..14, z -70..20
  for (let i = 0; i < 520; i++) {
    const x = (rand() * 2 - 1) * 13;
    const z = -68 + rand() * 86;
    const r = rand();
    add(r < 0.13 ? 'candy' : r < 0.24 ? 'apple' : r < 0.34 ? 'duck' : r < 0.48 ? 'hotdog' : r < 0.6 ? 'pretzel' : r < 0.7 ? 'banana' : r < 0.8 ? 'ball' : r < 0.9 ? 'teddy' : 'cone', x, z);
  }
  for (let i = 0; i < 60; i++) {
    const x = (rand() < 0.5 ? -1 : 1) * (6 + rand() * 7);
    const z = -66 + rand() * 82;
    const r = rand();
    add(r < 0.2 ? 'hydrant' : r < 0.4 ? 'bin' : r < 0.6 ? 'plant' : r < 0.75 ? 'bike' : r < 0.88 ? 'umbrella' : 'cart', x, z);
  }
  // around the city: clutter and street stuff on the pavements, cars and buses on the roads, buildings on blocks
  for (let i = 0; i < 900; i++) {
    const x = (rand() * 2 - 1) * (HALF - 6);
    const z = (rand() * 2 - 1) * (HALF - 6);
    if (Math.abs(x) < 16 && z > -72 && z < 22) continue;
    const r = rand();
    if (r < 0.45) add(['hotdog', 'teddy', 'cone', 'ball', 'banana', 'duck'][Math.floor(rand() * 6)], x, z);
    else if (r < 0.75) add(['hydrant', 'bin', 'plant', 'bike', 'umbrella', 'cart'][Math.floor(rand() * 6)], x, z);
  }
  // roads run along x = k*BLOCK and z = k*BLOCK (each ROAD wide); cars and buses stand in lanes
  for (let k = -5; k <= 5; k++) {
    const c = k * BLOCK + ROAD / 2;
    for (let v = -HALF + 10; v < HALF - 10; v += 9 + rand() * 12) {
      const lane = rand() < 0.5 ? -3 : 3;
      const r = rand();
      const kind = r < 0.36 ? 'car' : r < 0.6 ? 'taxi' : r < 0.72 ? 'police' : r < 0.84 ? 'truck' : r < 0.94 ? 'bus' : 'firetruck';
      if (Math.abs(c) < 18 && v > -75 && v < 25) continue;
      if (rand() < 0.5) add(kind, c + lane, v, lane > 0 ? Math.PI : 0);
      else if (!(Math.abs(v) < 18 && c > -75 && c < 25)) add(kind, v, c + lane, lane > 0 ? -Math.PI / 2 : Math.PI / 2);
    }
  }
  for (let bx = -5; bx <= 4; bx++) {
    for (let bz = -5; bz <= 4; bz++) {
      const x0 = bx * BLOCK + ROAD;
      const z0 = bz * BLOCK + ROAD;
      const cx = x0 + (BLOCK - ROAD) / 2;
      const cz = z0 + (BLOCK - ROAD) / 2;
      if (Math.abs(cx) < 30 && cz > -90 && cz < 40) continue; // the plaza area
      const d = Math.hypot(cx, cz);
      // small shops near the middle, towers further out; a park with trees sometimes
      if (rand() < 0.15) { for (let i = 0; i < 6; i++) add('tree', cx + (rand() - 0.5) * 24, cz + (rand() - 0.5) * 24); continue; }
      const kind = d < 90 ? (rand() < 0.6 ? 'shop' : 'house') : d < 150 ? (rand() < 0.5 ? 'house' : 'office') : rand() < 0.5 ? 'office' : 'tower';
      if (kind === 'shop') { add('shop', cx - 7, cz - 7, 0); add('shop', cx + 7, cz + 7, 0); add('tree', cx + 8, cz - 8); } else add(kind, cx, cz, 0);
    }
  }
  for (const t of things) {
    // buildings keep their footprint as the wall (a bit smaller than their size)
    if (THINGS[t.kind].g === 4) t.r = t.s * 0.48;
    t.h = THINGS[t.kind].g === 4 ? t.s * (t.kind === 'tower' ? 2.6 : t.kind === 'office' ? 1.9 : t.kind === 'house' ? 1.3 : 0.8) : t.s;
  }
  return things;
}

export class Roll {
  /** opts: { easy, seed, time } */
  constructor(opts = {}) {
    this.easy = !!opts.easy;
    this.things = opts.things || buildCity(opts.city ?? 11);
    for (const t of this.things) t.taken = false;
    this.d = 0.5;
    this.ball = { x: 0, z: 12, vx: 0, vz: 0 };
    this.time = opts.time ?? (this.easy ? 150 : 120);
    this.left = this.time;
    this.state = 'count'; // count -> roll -> done
    this.countT = 3;
    this.goal = 0;
    this.move = { x: 0, z: 0 };
    this.events = [];
    this.collected = 0;
    this.byGroup = [0, 0, 0, 0, 0];
    this.bumpT = 0;
    // a coarse grid so collisions only look at nearby things
    this.cell = 12;
    this.grid = new Map();
    for (const t of this.things) {
      const k = this._key(Math.floor(t.x / this.cell), Math.floor(t.z / this.cell));
      if (!this.grid.has(k)) this.grid.set(k, []);
      this.grid.get(k).push(t);
    }
  }

  _key(i, j) { return i * 10007 + j; }
  get r() { return this.d / 2; }
  get goalD() { return GOALS[Math.min(this.goal, GOALS.length - 1)].d; }

  setMove(x, z) { const l = Math.hypot(x, z); this.move = l > 1 ? { x: x / l, z: z / l } : { x, z }; }

  _near(x, z, rad) {
    const out = [];
    const i0 = Math.floor((x - rad) / this.cell);
    const i1 = Math.floor((x + rad) / this.cell);
    const j0 = Math.floor((z - rad) / this.cell);
    const j1 = Math.floor((z + rad) / this.cell);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const l = this.grid.get(this._key(i, j)); if (l) for (const t of l) if (!t.taken) out.push(t); }
    return out;
  }

  step(dt) {
    this.events = [];
    if (this.state === 'count') {
      const before = Math.ceil(this.countT);
      this.countT -= dt;
      if (Math.ceil(this.countT) !== before && this.countT > 0) this.events.push({ type: 'count', n: Math.ceil(this.countT) });
      if (this.countT <= 0) { this.state = 'roll'; this.events.push({ type: 'go' }); }
      return this.events;
    }
    if (this.state !== 'roll') return this.events;
    const tick = Math.ceil(this.left);
    this.left -= dt;
    if (Math.ceil(this.left) !== tick && this.left <= 10 && this.left > 0) this.events.push({ type: 'tick', n: Math.ceil(this.left) });
    const b = this.ball;
    // rolling: speed grows with the ball, a soft push towards the finger
    const top = 3 + this.d * 1.5;
    const acc = 7 + this.d * 2.2;
    b.vx += (this.move.x * top - b.vx) * Math.min(1, (acc / top) * dt);
    b.vz += (this.move.z * top - b.vz) * Math.min(1, (acc / top) * dt);
    b.x += b.vx * dt;
    b.z += b.vz * dt;
    const lim = HALF - this.r;
    if (Math.abs(b.x) > lim) { b.x = Math.sign(b.x) * lim; b.vx *= -0.4; }
    if (Math.abs(b.z) > lim) { b.z = Math.sign(b.z) * lim; b.vz *= -0.4; }
    this.bumpT = Math.max(0, this.bumpT - dt);
    // touching things: stick or bounce
    const r = this.r;
    for (const t of this._near(b.x, b.z, r + 20)) {
      const dx = b.x - t.x;
      const dz = b.z - t.z;
      const dist = Math.hypot(dx, dz);
      if (dist > r + t.r) continue;
      if (t.s <= this.d * PICK) {
        t.taken = true;
        this.collected++;
        this.byGroup[THINGS[t.kind].g]++;
        const before = this.d;
        this.d += (t.s * 0.17 * (1 + 0.9 / this.d)) / (1 + this.d / 18);
        this.events.push({ type: 'stick', id: t.id, kind: t.kind, s: t.s, x: t.x, z: t.z, from: before });
        this._goalCheck();
      } else if (t.s <= this.d * 1.6 && THINGS[t.kind].g < 4) {
        // a little too big: it gets nudged out of the way (no bounce)
        const l = dist || 1;
        const push = r + t.r - dist;
        t.x -= (dx / l) * push;
        t.z -= (dz / l) * push;
        t.a += 0.3;
        if (this.bumpT <= 0) { this.bumpT = 0.25; this.events.push({ type: 'nudge', kind: t.kind, id: t.id }); }
      } else {
        // too big: bounce away, a little gum falls off
        const l = dist || 1;
        const push = r + t.r - dist;
        b.x += (dx / l) * push;
        b.z += (dz / l) * push;
        const vn = b.vx * (dx / l) + b.vz * (dz / l);
        if (vn < 0) { b.vx -= 1.7 * vn * (dx / l); b.vz -= 1.7 * vn * (dz / l); }
        if (this.bumpT <= 0 && Math.abs(vn) > 1.2) {
          this.bumpT = 0.6;
          const lose = Math.min(this.d * 0.02, 0.6);
          this.d = Math.max(0.5, this.d - lose);
          this.events.push({ type: 'bump', kind: t.kind, x: t.x, z: t.z, lose });
        }
      }
    }
    if (this.left <= 0) {
      this.left = 0;
      this.state = 'done';
      this.result = this._result();
      this.events.push({ type: 'timeUp' });
    }
    return this.events;
  }

  _goalCheck() {
    while (this.goal < GOALS.length && this.d >= GOALS[this.goal].d) {
      const g = GOALS[this.goal];
      this.goal++;
      this.events.push({ type: 'bigger', goal: this.goal, reached: g.d, next: g.next });
    }
  }

  _result() {
    const stars = STARS.filter((s) => this.d >= s * (this.easy ? 0.75 : 1)).length;
    return { d: this.d, stars, collected: this.collected, byGroup: this.byGroup.slice() };
  }
}

/** A robot child: rolls to the nearest thing it can pick up, preferring bigger ones, and around walls. */
export function robotRoll(g) {
  const b = g.ball;
  g._skip = g._skip || new Map();
  const now = g.time - g.left;
  // stuck against something? try another target for a while
  if (Math.hypot(b.vx, b.vz) < 0.8 && g.state === 'roll') g._stuckT = (g._stuckT ?? 0) + 1 / 30; else g._stuckT = 0;
  if (g._stuckT > 0.8 && g._target) { g._skip.set(g._target.id, now + 6); g._stuckT = 0; }
  let best = null;
  for (const t of g._near(b.x, b.z, 30 + g.d * 3)) {
    if (t.s > g.d * PICK || (g._skip.get(t.id) ?? -1) > now) continue;
    const d = Math.hypot(t.x - b.x, t.z - b.z);
    const sc = d / (0.4 + t.s / g.d);
    if (!best || sc < best.sc) best = { t, sc, d };
  }
  g._target = best && best.t;
  if (!best) { const l = Math.hypot(b.x, b.z) || 1; return { x: Math.sin(now * 0.3) - b.x / l, z: Math.cos(now * 0.3) - b.z / l }; }
  let x = (best.t.x - b.x) / (best.d || 1);
  let z = (best.t.z - b.z) / (best.d || 1);
  // slide around a wall in the way
  for (const t of g._near(b.x, b.z, g.r + 40)) {
    if (t.s <= g.d * 1.6 && THINGS[t.kind].g < 4) continue;
    const dx = t.x - b.x;
    const dz = t.z - b.z;
    const d = Math.hypot(dx, dz) || 1;
    if (d > g.r + t.r + 2.5) continue;
    if ((dx * x + dz * z) / d < 0.2) continue;
    let tx = -dz / d;
    let tz = dx / d;
    if (tx * x + tz * z < 0) { tx = -tx; tz = -tz; }
    x = x * 0.25 + tx - (dx / d) * 0.3;
    z = z * 0.25 + tz - (dz / d) * 0.3;
  }
  return { x, z };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const best = Number(s.best);
  const st = Math.floor(Number(s.stars));
  const plays = Math.floor(Number(s.plays));
  return {
    best: Number.isFinite(best) && best > 0 ? Math.min(Math.round(best * 10) / 10, 999) : 0,
    stars: st >= 0 && st <= 3 ? st : 0,
    plays: Number.isFinite(plays) && plays > 0 ? Math.min(plays, 99999) : 0,
    muted: s.muted === true,
  };
}
