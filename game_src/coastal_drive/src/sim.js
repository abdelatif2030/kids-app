// «سباق الطريق الساحلي» — the rules with no drawing. A sports car speeds along a busy four-lane coastal highway (no
// brakes): steer between the lanes, pass close to cars, vans and trucks for near misses, chain them for a combo
// multiplier, collect coins, and fire the nitro for a burst of speed. A crash costs a heart and slows the car down;
// the cars only bump, nobody is hurt. A level is won by reaching its distance with enough near misses.
// Six levels in three worlds (Azure Coast, Red Canyon, Neon City), a garage with four cars and three upgrades.
// Distances are metres along the road (s); x is across the road. Deterministic with a seed for the robot tests.

export const LANE_W = 3.4;
export const LANES = [-1.5, -0.5, 0.5, 1.5].map((k) => k * LANE_W);
export const X_MAX = 6.0; // the car's centre stays on the road
const CAR_LEN = 4.4;
const CAR_WID = 1.9;

export const KINDS = {
  sedan: { len: 4.4, wid: 1.85 },
  hatch: { len: 3.9, wid: 1.8 },
  van: { len: 5.0, wid: 2.0 },
  pickup: { len: 5.2, wid: 2.0 },
  truck: { len: 7.6, wid: 2.4 },
};

/** Four cars in the garage (like the video: Striker, Arrow GT, Nightfall, and a fourth). Speeds in m/s. */
export const CARS = [
  { id: 'striker', ar: 'سترايكر', en: 'Striker', price: 0, top: 44.5, accel: 0.55, handling: 0.72, nitro: 0.5 },
  { id: 'arrow', ar: 'آرو جي تي', en: 'Arrow GT', price: 400, top: 47.3, accel: 0.62, handling: 0.82, nitro: 0.55 },
  { id: 'nightfall', ar: 'نايتفول', en: 'Nightfall', price: 900, top: 50, accel: 0.7, handling: 0.78, nitro: 0.62 },
  { id: 'volt', ar: 'فولت', en: 'Volt', price: 1500, top: 52.8, accel: 0.8, handling: 0.88, nitro: 0.75 },
];
export const carOf = (id) => CARS.find((c) => c.id === id) || CARS[0];

export const UPGRADES = [
  { id: 'engine', icon: '⚙', ar: 'المحرك', en: 'Engine', sub: ['سرعة وتسارع أعلى', 'Top speed and acceleration'] },
  { id: 'nitro', icon: '⚡', ar: 'النيترو', en: 'Nitro', sub: ['أطول وأقوى', 'Longer, stronger boost'] },
  { id: 'armor', icon: '🛡', ar: 'الدرع', en: 'Armor', sub: ['خبطات أخف، المستوى ٣: +قلب', 'Softer crashes, LV 3: +1 heart'] },
];
export const MAX_UP = 3;
export const upCost = (lvl) => 80 * (lvl + 1);

/** Three worlds, two levels each. km to reach, near misses needed, coin reward, traffic density. */
export const WORLDS = [
  { id: 'azure', ar: 'الساحل الأزرق', en: 'Azure Coast' },
  { id: 'canyon', ar: 'الوادي الأحمر', en: 'Red Canyon' },
  { id: 'neon', ar: 'مدينة النيون', en: 'Neon City' },
];
export const LEVELS = [
  { id: 1, world: 'azure', ar: 'سباق الساحل', en: 'Coast Sprint', km: 2.6, near: 12, reward: 300, density: 1.0, swerve: 0 },
  { id: 2, world: 'azure', ar: 'اندفاع النخيل', en: 'Palm Rush', km: 3.0, near: 15, reward: 350, density: 1.08, swerve: 0.15 },
  { id: 3, world: 'canyon', ar: 'مبارزة الصحراء', en: 'Desert Duel', km: 3.2, near: 16, reward: 450, density: 1.12, swerve: 0.2 },
  { id: 4, world: 'canyon', ar: 'طريق الوادي', en: 'Canyon Run', km: 3.6, near: 18, reward: 500, density: 1.16, swerve: 0.25 },
  { id: 5, world: 'neon', ar: 'مواجهة النيون', en: 'Neon Showdown', km: 3.8, near: 20, reward: 600, density: 1.2, swerve: 0.25 },
  { id: 6, world: 'neon', ar: 'اندفاع منتصف الليل', en: 'Midnight Rush', km: 4.2, near: 24, reward: 750, density: 1.25, swerve: 0.3 },
];

export const COUNTDOWN = 3.4;
const NITRO_MIN = 0.3;

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export class Race {
  /** opts: { level (0..5), car, up: {engine, nitro, armor}, easy, seed } */
  constructor(opts = {}) {
    this.levelIndex = Math.max(0, Math.min(LEVELS.length - 1, opts.level ?? 0));
    this.level = LEVELS[this.levelIndex];
    this.easy = !!opts.easy;
    this.car = carOf(opts.car);
    this.up = { engine: 0, nitro: 0, armor: 0, ...(opts.up || {}) };
    this.rand = rng(opts.seed ?? 5);
    this.need = this.easy ? Math.ceil(this.level.near * 0.5) : this.level.near;
    this.goal = this.level.km * 1000;
    this.top = this.car.top * (1 + this.up.engine * 0.04) * (this.easy ? 0.9 : 1);
    this.accel = 6 + this.car.accel * 8 + this.up.engine * 1.2;
    this.steerRate = 8 + this.car.handling * 8;
    this.nitroTime = 2.6 * (1 + this.up.nitro * 0.2) * (0.8 + this.car.nitro * 0.4);
    this.nitroBoost = 1.3 + this.up.nitro * 0.04;
    this.hearts = 3 + (this.up.armor >= 3 ? 1 : 0) + (this.easy ? 1 : 0);
    this.maxHearts = this.hearts;
    this.crashKeep = 0.45 + this.up.armor * 0.08; // how much speed is kept after a bump
    this.p = { x: LANES[1], tx: LANES[1], s: 0, speed: 0, vx: 0 };
    this.traffic = [];
    this.coinsOnRoad = [];
    this.nextId = 1;
    this.spawnS = 60;
    this.coinS = 90;
    this.state = 'count'; // count -> race -> done | wrecked
    this.t = 0;
    this.raceT = 0;
    this.nearMisses = 0;
    this.combo = 0;
    this.comboT = 0;
    this.bestCombo = 0;
    this.coins = 0;
    this.crashes = 0;
    this.topSpeed = 0;
    this.nitro = 0.5;
    this.nitroOn = 0;
    this.invul = 0;
    this.events = [];
    this.pending = [];
    this._said = {};
    // a few cars already on the road ahead
    for (let s = 70; s < 200; s += 26 + this.rand() * 14) this._spawnAt(s);
    this.spawnS = 200;
  }

  get kmh() { return Math.round(this.p.speed * 3.6); }
  get mult() { return Math.max(1, Math.min(5, this.combo)); }
  get progress() { return Math.min(1, this.p.s / this.goal); }

  /** Steer towards a road position (a finger dragging) */
  setTargetX(x) { this.p.tx = Math.max(-X_MAX, Math.min(X_MAX, x)); }
  /** One lane left (-1) or right (+1): a tap or an arrow key */
  shiftLane(d) {
    const cur = this._nearestLane(this.p.tx);
    const i = Math.max(0, Math.min(LANES.length - 1, cur + d));
    this.p.tx = LANES[i];
  }
  _nearestLane(x) { let b = 0; for (let i = 1; i < LANES.length; i++) if (Math.abs(LANES[i] - x) < Math.abs(LANES[b] - x)) b = i; return b; }

  useNitro() {
    if (this.state !== 'race' || this.nitroOn > 0 || this.nitro < NITRO_MIN) return false;
    this.nitroOn = this.nitroTime * Math.min(1, this.nitro / 1);
    this.nitroFull = this.nitroOn;
    this.pending.push({ type: 'nitro' });
    return true;
  }

  // ---- traffic ---------------------------------------------------------------------------------------------------------

  _kind() {
    const r = this.rand();
    return r < 0.42 ? 'sedan' : r < 0.58 ? 'hatch' : r < 0.74 ? 'van' : r < 0.86 ? 'pickup' : 'truck';
  }

  /** A car in a lane at s, unless that would block every lane near there (a gap is always left). */
  _spawnAt(s) {
    const kind = this._kind();
    const k = KINDS[kind];
    const lanes = [0, 1, 2, 3].sort(() => this.rand() - 0.5);
    for (const lane of lanes) {
      const near = this.traffic.filter((c) => Math.abs(c.s - s) < 34);
      if (near.some((c) => c.lane === lane)) continue;
      const blocked = new Set(near.map((c) => c.lane));
      blocked.add(lane);
      if (blocked.size >= 3) continue; // two lanes always stay open close together
      const speed = ([17, 19.5, 22, 24.5][lane] + this.rand() * 1.6) * (this.easy ? 0.95 : 1);
      this.traffic.push({ id: this.nextId++, kind, lane, x: LANES[lane], s, speed, len: k.len, wid: k.wid, passed: false, hit: 0, color: Math.floor(this.rand() * 6), blink: 0, toLane: lane, vx: 0 });
      return true;
    }
    return false;
  }

  _spawnCoins(s) {
    // a row of five coins in a lane, sometimes drifting to the next lane
    const lane = Math.floor(this.rand() * 4);
    const drift = this.rand() < 0.35 ? (lane < 2 ? 1 : -1) : 0;
    for (let i = 0; i < 5; i++) {
      const x = LANES[lane] + (drift * LANE_W * i) / 4;
      if (this.traffic.some((c) => Math.abs(c.s - (s + i * 7)) < c.len + 4 && Math.abs(c.x - x) < 2)) continue;
      this.coinsOnRoad.push({ x, s: s + i * 7, taken: false });
    }
  }

  // ---- the step --------------------------------------------------------------------------------------------------------

  step(dt) {
    this.events = this.pending;
    this.pending = [];
    this.t += dt;
    const p = this.p;
    if (this.state === 'count') {
      const before = Math.ceil(COUNTDOWN - (this.t - dt));
      const now = Math.ceil(COUNTDOWN - this.t);
      if (now !== before && now >= 1 && now <= 3) this.events.push({ type: 'count', n: now });
      if (this.t >= COUNTDOWN) { this.state = 'race'; this.events.push({ type: 'go' }); }
      this._moveTraffic(dt, true);
      return this.events;
    }
    if (this.state !== 'race') { p.speed = Math.max(0, p.speed - 12 * dt); p.s += p.speed * dt; this._moveTraffic(dt); return this.events; }
    this.raceT += dt;
    // speed: no brakes, it always speeds up towards the top (more with nitro)
    const want = this.nitroOn > 0 ? this.top * this.nitroBoost : this.top;
    if (p.speed < want) p.speed = Math.min(want, p.speed + this.accel * (p.speed < 20 ? 1.4 : 1) * dt * (this.nitroOn > 0 ? 2 : 1));
    else p.speed = Math.max(want, p.speed - 6 * dt);
    if (this.nitroOn > 0) {
      this.nitroOn -= dt;
      this.nitro = Math.max(0, this.nitro - dt / this.nitroTime);
      if (this.nitroOn <= 0) { this.nitroOn = 0; this.events.push({ type: 'nitroEnd' }); }
    } else this.nitro = Math.min(1, this.nitro + dt * 0.012);
    p.s += p.speed * dt;
    this.topSpeed = Math.max(this.topSpeed, this.kmh);
    // steering: slide towards the target position
    const dx = p.tx - p.x;
    const maxV = this.steerRate * Math.min(1, 0.4 + p.speed / 40);
    p.vx = Math.max(-maxV, Math.min(maxV, dx * 7));
    p.x = Math.max(-X_MAX, Math.min(X_MAX, p.x + p.vx * dt));
    this.invul = Math.max(0, this.invul - dt);
    this.comboT -= dt;
    if (this.comboT <= 0 && this.combo > 0) { this.combo = 0; this.events.push({ type: 'comboEnd' }); }

    this._moveTraffic(dt);
    // more cars ahead (denser further on; extra cars next to the player's lane when near misses are still missing)
    const dens = this.level.density * (1 + this.progress * 0.2) * (this.easy ? 0.85 : 1);
    while (this.spawnS < p.s + 230) {
      this._spawnAt(this.spawnS);
      if (this.rand() < 0.35 * dens) this._spawnAt(this.spawnS + 6);
      this.spawnS += (34 + this.rand() * 26) / dens;
      if (p.s >= this.goal && this.nearMisses < this.need) this.spawnS -= 8;
    }
    while (this.coinS < p.s + 230) { this._spawnCoins(this.coinS); this.coinS += 95 + this.rand() * 70; }
    // collisions, near misses
    for (const c of this.traffic) {
      const ds = c.s - p.s;
      const adx = Math.abs(c.x - p.x);
      const halfW = (c.wid + CAR_WID) / 2;
      const halfL = (c.len + CAR_LEN) / 2;
      if (!c.hit && this.invul <= 0 && adx < halfW * 0.92 && Math.abs(ds) < halfL * 0.92) {
        this._crash(c);
        continue;
      }
      if (!c.passed && ds < -halfL) {
        c.passed = true;
        const gap = adx - halfW;
        if (!c.hit && gap < (this.easy ? 2.1 : 1.65)) this._nearMiss(c, gap);
      }
    }
    // coins
    for (const k of this.coinsOnRoad) {
      if (k.taken) continue;
      if (Math.abs(k.s - p.s) < 2.4 && Math.abs(k.x - p.x) < 1.6) {
        k.taken = true;
        this.coins += this.mult;
        this.events.push({ type: 'coin', v: this.mult, x: k.x, s: k.s });
      }
    }
    this.coinsOnRoad = this.coinsOnRoad.filter((k) => !k.taken && k.s > p.s - 20);
    this.traffic = this.traffic.filter((c) => c.s > p.s - 40 && c.s < p.s + 400);
    // the goal
    if (p.s >= this.goal) {
      if (this.nearMisses >= this.need) {
        this.state = 'done';
        this.result = this._result(true);
        this.events.push({ type: 'finish' });
      } else if (!this._said.more) { this._said.more = true; this.events.push({ type: 'needMore', left: this.need - this.nearMisses }); }
    }
    return this.events;
  }

  _moveTraffic(dt, frozen = false) {
    // drivers never form a wall across three lanes: the last one of such a group falls back, the first pulls away
    for (const c of this.traffic) {
      if (c.hit > 0) continue;
      const group = this.traffic.filter((o) => o !== c && o.hit <= 0 && Math.abs(o.s - c.s) < 16 && o.lane !== c.lane);
      if (new Set(group.map((o) => o.lane)).size < 2) continue;
      const minS = Math.min(...group.map((o) => o.s));
      const maxS = Math.max(...group.map((o) => o.s));
      if (c.s <= minS) c.speed = Math.max(12, Math.min(c.speed, Math.min(...group.map((o) => o.speed)) - 3));
      else if (c.s >= maxS) c.speed = Math.max(c.speed, Math.max(...group.map((o) => o.speed)) + 3);
    }
    for (const c of this.traffic) {
      // a car coming up behind the player brakes (after a bump the player can be the slower one)
      if (c.hit <= 0 && c.s < this.p.s && c.s > this.p.s - 16 && Math.abs(c.x - this.p.x) < 2.6) c.speed = Math.min(c.speed, this.p.speed - 1.5);
      if (!frozen) c.s += c.speed * dt;
      // a bumped car is nudged aside and slows a little
      if (c.hit > 0) { c.hit -= dt; c.x += c.vx * dt; c.vx *= Math.pow(0.1, dt); c.x = Math.max(-X_MAX - 0.6, Math.min(X_MAX + 0.6, c.x)); continue; }
      // later levels: a car may change lane (blinker first)
      if (!frozen && this.state === 'race' && c.blink <= 0 && c.toLane === c.lane && this.rand() < this.level.swerve * dt * 0.25 && c.s > this.p.s + 60) {
        const to = c.lane + (this.rand() < 0.5 ? -1 : 1);
        if (to >= 0 && to <= 3 && !this.traffic.some((o) => o !== c && (o.lane === to || o.toLane === to) && Math.abs(o.s - c.s) < 20) && !(Math.abs(this.p.x - LANES[to]) < 2.6 && c.s - this.p.s < 80)) {
          c.toLane = to;
          c.blink = 1.1;
          this.events.push({ type: 'blink', id: c.id });
        }
      }
      if (c.blink > 0) { c.blink -= dt; if (c.blink <= 0) c.lane = c.toLane; }
      const tx = LANES[c.lane];
      c.x += Math.max(-2.2 * dt, Math.min(2.2 * dt, tx - c.x));
    }
  }

  _crash(c) {
    this.crashes++;
    this.hearts--;
    this.combo = 0;
    this.invul = 1.6;
    this.p.speed *= this.crashKeep;
    c.hit = 1.2;
    c.vx = (c.x >= this.p.x ? 1 : -1) * 3;
    c.speed = Math.max(c.speed, this.p.speed + 4);
    c.passed = true;
    this.p.tx = this.p.x + (this.p.x > c.x ? 1.2 : -1.2);
    this.events.push({ type: 'crash', x: (c.x + this.p.x) / 2, s: this.p.s + 2, hearts: this.hearts });
    if (this.hearts <= 0) {
      this.state = 'wrecked';
      this.result = this._result(false);
      this.events.push({ type: 'wrecked' });
    }
  }

  _nearMiss(c, gap) {
    this.nearMisses++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = 4;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    this.coins += this.mult;
    this.nitro = Math.min(1, this.nitro + 0.18);
    this.events.push({ type: 'nearMiss', combo: this.combo, gap, x: c.x, s: c.s, kind: c.kind, n: this.nearMisses });
  }

  _result(won) {
    const stars = won ? 1 + (this.crashes <= 1 ? 1 : 0) + (this.crashes === 0 ? 1 : 0) : 0;
    return { won, stars, coins: this.coins, nearMisses: this.nearMisses, topSpeed: this.topSpeed, crashes: this.crashes, reward: won ? this.level.reward : 0, km: this.p.s / 1000 };
  }
}

/** A careful driver for the tests: picks the lane with the most room, slides next to cars for near misses when
 * safe, uses the nitro on an empty road. Returns a target x (and maybe 'nitro'). */
export function robotDrive(r) {
  const p = r.p;
  const occupied = (lane, from, to) => r.traffic.some((c) => (Math.abs(c.x - LANES[lane]) < 2.6 || c.toLane === lane) && c.s - p.s > from && c.s - p.s < to);
  const room = (lane) => {
    let d = 999;
    for (const c of r.traffic) {
      if (!(Math.abs(c.x - LANES[lane]) < 2.6 || c.toLane === lane)) continue;
      const ds = c.s - p.s - (c.len + 4.4) / 2;
      if (ds > -3 && ds < d) d = ds;
    }
    return d;
  };
  const cur = r._nearestLane(p.x);
  let goal = r._robotLane ?? cur;
  const urgent = room(goal) < p.speed * 0.7;
  if (Math.abs(p.x - LANES[goal]) < 0.3 || urgent) {
    // in a lane: look for a better one
    const reach = (i) => { const step = i > cur ? 1 : -1; for (let l = cur + step; l !== i + step; l += step) if (occupied(l, urgent ? -4.6 : -6, urgent ? 4.6 : 6 + p.speed * 0.25)) return false; return true; };
    let best = cur;
    let bestScore = Math.min(room(cur), 120) + (urgent ? 0 : 12);
    const wantNear = r.nearMisses < r.need + 2;
    for (let i = 0; i < 4; i++) {
      if (i === cur || !reach(i)) continue;
      let sc = Math.min(room(i), 120) - Math.abs(i - cur) * 8;
      if (wantNear && r.traffic.some((c) => Math.abs(LANES[i] - c.x) > 3 && Math.abs(LANES[i] - c.x) < 3.8 && c.s - p.s > 10 && c.s - p.s < 40)) sc += 18;
      if (sc > bestScore) { bestScore = sc; best = i; }
    }
    goal = best;
  }
  // abort a lane change when a car appears beside the next lane
  if (goal !== cur) {
    const next = cur + (goal > cur ? 1 : -1);
    const nearX = Math.abs(p.x - LANES[cur]) < 1.2;
    if (nearX && occupied(next, -5.5, 5.5)) goal = cur;
  }
  r._robotLane = goal;
  return { x: LANES[goal], nitro: r.nitro > 0.6 && room(goal) > 90 };
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const up = {};
  for (const g of UPGRADES) { const v = Math.floor(Number(s.up && s.up[g.id])); up[g.id] = v >= 0 && v <= MAX_UP ? v : 0; }
  const c = Math.floor(Number(s.coins));
  const cars = ['striker'];
  if (Array.isArray(s.cars)) for (const k of CARS) if (k.id !== 'striker' && s.cars.includes(k.id)) cars.push(k.id);
  return {
    unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1,
    stars,
    coins: Number.isFinite(c) && c > 0 ? Math.min(c, 999999) : 0,
    up,
    cars,
    car: cars.includes(s.car) ? s.car : 'striker',
    muted: s.muted === true,
  };
}
