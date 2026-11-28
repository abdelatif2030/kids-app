// «سكة الكورة» — Nutmeg Rush: pure, deterministic simulation (no DOM, no three.js).
// Pitch coordinates: x across the pitch (-17..17), z along it. You attack towards +z; the rival goal mouth is at z = L.
// You control the BALL by dragging (a joystick): it rolls with momentum. Red defenders chase and slide-tackle along a lane that is
// shown (telegraphed) before they move. Rolling the ball between a defender's legs is a nutmeg, running into the light-blue
// teammate is a one-two. Tricks heat the ball; a full meter makes it a flaming comet. In the box a target slides over the goal
// mouth and the keeper's reach is shown: tap when the target is outside his reach.

export const PITCH = { W: 34, L: 78, BOX_Z: 58, SHOOT_Z: 63, GOAL_W: 14, GOAL_H: 3.6, GOAL_D: 3.2 };
export const LIVES = 3; // the balls in the corner: a steal takes one; when the last one goes the kids fetch more — the match never ends on balls
export const BALL_SPEED = 9.5; // top speed with the stick fully out; it stops when you let go (the ball only moves while you drag)
export const DUMMY_R = 0.75;
export const COIN_R = 1.35;
export const HALF_W = 16.2;
export const BALL_R = 0.3;
export const LEG_OFF = 1.15; // a defender's legs stand this far to each side of his middle
export const LEG_R = 0.5;
export const HEAT_MAX = 100;
export const COMET_TIME = 9;
export const SLIDE_SPEED = 21;
export const SLIDE_TIME = 0.5;
export const LANE_LEN = SLIDE_SPEED * SLIDE_TIME;
export const LANE_W = 3.2;
export const TRIGGER_DIST = 8.5;
export const TRICKS = { nutmeg: { heat: 34, score: 200 }, onetwo: { heat: 28, score: 150 }, dodge: { heat: 16, score: 60 }, burn: { heat: 0, score: 100 } };

// Batch F: 12 levels = 4 venues x 3. The original 7 tunings are kept verbatim at
// slots 1, 2, 4, 6, 8, 10 and 12 (the old stadium final is now the Cup Final);
// the 5 new levels interpolate the same curves so difficulty rises smoothly.
export const VENUES = [
  { ar: 'الحارة', en: 'Hara' },
  { ar: 'المدرسة', en: 'School' },
  { ar: 'نادي الحي', en: 'Local Club' },
  { ar: 'استاد القاهرة', en: 'Cairo Stadium' },
];

export const LEVELS = [
  { id: 1, venue: 0, ar: 'ملعب الحارة', en: 'Hara Pitch', team: { ar: 'أولاد الحارة', en: 'Hara Kids' }, defenders: 2, mates: 0, chase: 3.6, windup: 1.1, cooldown: 3.4, aggro: 13, reach: 2.3, sway: 2.0, tspeed: 1.3, trickGoal: 2, par: 22 },
  { id: 2, venue: 0, ar: 'تحدي الحارة', en: 'Hara Challenge', team: { ar: 'صقور الحارة', en: 'Hara Falcons' }, defenders: 3, mates: 1, chase: 4.2, windup: 0.95, cooldown: 3.0, aggro: 15, reach: 2.6, sway: 2.4, tspeed: 1.6, trickGoal: 3, par: 26 },
  { id: 3, venue: 0, ar: 'نهائي الحارة', en: 'Hara Final', team: { ar: 'نجوم الحارة', en: 'Hara Stars' }, defenders: 4, mates: 1, chase: 4.5, windup: 0.9, cooldown: 2.8, aggro: 16, reach: 2.75, sway: 2.6, tspeed: 1.75, trickGoal: 3, par: 28 },
  { id: 4, venue: 1, ar: 'ملعب المدرسة', en: 'School Pitch', team: { ar: 'أبطال المدرسة', en: 'School Champs' }, defenders: 4, mates: 2, chase: 4.8, windup: 0.85, cooldown: 2.6, aggro: 17, reach: 2.9, sway: 2.8, tspeed: 1.9, trickGoal: 4, par: 30 },
  { id: 5, venue: 1, ar: 'ماتش المدرسة الكبير', en: 'School Big Match', team: { ar: 'أسود المدرسة', en: 'School Lions' }, defenders: 5, mates: 2, chase: 5.0, windup: 0.8, cooldown: 2.4, aggro: 17, reach: 3.05, sway: 3.0, tspeed: 2.1, trickGoal: 4, par: 32 },
  { id: 6, venue: 1, ar: 'بطولة المدارس', en: 'Schools Cup', team: { ar: 'فرسان المدارس', en: 'School Knights' }, defenders: 5, mates: 2, chase: 5.3, windup: 0.75, cooldown: 2.2, aggro: 18, reach: 3.2, sway: 3.2, tspeed: 2.3, trickGoal: 5, par: 34 },
  { id: 7, venue: 2, ar: 'اختبارات النادي', en: 'Club Trials', team: { ar: 'مواهب النادي', en: 'Club Talents' }, defenders: 6, mates: 3, chase: 5.5, windup: 0.72, cooldown: 2.05, aggro: 19, reach: 3.35, sway: 3.4, tspeed: 2.5, trickGoal: 5, par: 36 },
  { id: 8, venue: 2, ar: 'نادي الحي', en: 'Local Club', team: { ar: 'نجوم الحي', en: 'Local Stars' }, defenders: 6, mates: 3, chase: 5.8, windup: 0.68, cooldown: 1.9, aggro: 20, reach: 3.5, sway: 3.6, tspeed: 2.8, trickGoal: 6, par: 38 },
  { id: 9, venue: 2, ar: 'مشوار الكأس', en: 'Club Cup Run', team: { ar: 'ذئاب النادي', en: 'Club Wolves' }, defenders: 7, mates: 3, chase: 6.0, windup: 0.66, cooldown: 1.8, aggro: 20, reach: 3.6, sway: 3.75, tspeed: 2.95, trickGoal: 6, par: 40 },
  { id: 10, venue: 3, ar: 'نصف نهائي الكأس', en: 'Cup Semi-Final', team: { ar: 'نجوم الكأس', en: 'Cup Stars' }, defenders: 7, mates: 3, chase: 6.1, windup: 0.64, cooldown: 1.7, aggro: 21, reach: 3.7, sway: 3.9, tspeed: 3.1, trickGoal: 7, par: 42 },
  { id: 11, venue: 3, ar: 'استاد القاهرة الدولي', en: 'Cairo International Stadium', team: { ar: 'أبطال الاستاد', en: 'Stadium Champs' }, defenders: 8, mates: 4, chase: 6.3, windup: 0.62, cooldown: 1.6, aggro: 21, reach: 3.8, sway: 4.05, tspeed: 3.25, trickGoal: 7, par: 44 },
  { id: 12, venue: 3, ar: 'نهائي الكأس', en: 'Cup Final', team: { ar: 'فريق الأحلام', en: 'Dream Team' }, defenders: 8, mates: 4, chase: 6.4, windup: 0.6, cooldown: 1.55, aggro: 22, reach: 3.9, sway: 4.2, tspeed: 3.4, trickGoal: 8, par: 46 },
];

export const SKINS = [
  { id: 'classic', price: 0, ar: 'كلاسيك', en: 'Classic', base: 0xffffff, patch: 0x1e2230, emissive: 0x000000, trail: 0xffffff },
  { id: 'flame', price: 120, ar: 'جمر', en: 'Ember', base: 0xff7a1a, patch: 0xffd23a, emissive: 0x802a00, trail: 0xff7a1a },
  { id: 'ice', price: 200, ar: 'جليد', en: 'Frost', base: 0xd8f6ff, patch: 0x3a8ae8, emissive: 0x103a5a, trail: 0x9ae0ff },
  { id: 'gold', price: 320, ar: 'ذهب', en: 'Gold', base: 0xffd23a, patch: 0xb87a00, emissive: 0x7a5a00, trail: 0xffe88a },
];

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
function mkRand(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
  const owned = Array.isArray(o.owned) ? o.owned.filter((id) => SKINS.some((k) => k.id === id)) : [];
  if (!owned.includes('classic')) owned.unshift('classic');
  const stars = Array.isArray(o.stars) ? o.stars.slice(0, LEVELS.length).map((v) => clamp(Math.round(num(v)), 0, 3)) : [];
  while (stars.length < LEVELS.length) stars.push(0);
  const best = Array.isArray(o.best) ? o.best.slice(0, LEVELS.length).map((v) => Math.max(0, Math.round(num(v)))) : [];
  while (best.length < LEVELS.length) best.push(0);
  return {
    unlocked: clamp(Math.max(Math.round(num(o.unlocked, 1)), ...stars.map((v, i) => (v > 0 ? i + 2 : 1))), 1, LEVELS.length), stars, best,
    coins: Math.max(0, Math.round(num(o.coins))), owned,
    skin: owned.includes(o.skin) ? o.skin : 'classic',
    muted: !!o.muted, goals: Math.max(0, Math.round(num(o.goals))), tricks: Math.max(0, Math.round(num(o.tricks))),
  };
}

/** Buys a ball for coins (once). Returns true when it worked. Nothing is ever taken away. */
export function buySkin(save, id) {
  const k = SKINS.find((x) => x.id === id);
  if (!k || save.owned.includes(id) || save.coins < k.price) return false;
  save.coins -= k.price; save.owned.push(id); save.skin = id;
  return true;
}
export function selectSkin(save, id) { if (save.owned.includes(id)) { save.skin = id; return true; } return false; }

export class Match {
  constructor({ level = 0, seed = 1, easy = false } = {}) {
    this.level = clamp(Math.floor(level) || 0, 0, LEVELS.length - 1);
    const d = LEVELS[this.level];
    const e = easy ? { chase: 0.8, windup: 1.35, cooldown: 1.4, reach: 0.85, tspeed: 0.75 } : { chase: 1, windup: 1, cooldown: 1, reach: 1, tspeed: 1 };
    this.def = { ...d, chase: d.chase * e.chase, windup: d.windup * e.windup, cooldown: d.cooldown * e.cooldown, reach: d.reach * e.reach, tspeed: d.tspeed * e.tspeed };
    this.easy = easy;
    this.rand = mkRand(this.level * 977 + 31 + (seed % 7) * 13);
    this.mode = 'play'; this.modeT = 0; this.time = 0; this.clock = 0;
    this.input = { jx: 0, jy: 0 };
    this.ball = { x: 0, z: 4, vx: 0, vz: 0, inv: 1.0 };
    this.lives = LIVES; this.refills = 0; this.coins = 0; this.reason = null; this.hintMate = false;
    this.dummies = []; this.coinList = []; this.blockT = 0;
    this.pass = null; this.shot = null;
    this.heat = 0; this.cometT = 0; this.lastTrick = -9;
    this.score = 0; this.goals = 0;
    this.stats = { nutmegs: 0, onetwos: 0, dodges: 0, burns: 0, stolen: 0, saves: 0, tackles: 0, blocked: 0, coins: 0 };
    this.keeper = { x: 0, dir: 0, diveTo: null };
    this.target = { x: 0, p: 0 };
    this.defenders = []; this.mates = [];
    this._build();
    this.ev = null; this.log = [];
  }

  get tricks() { const s = this.stats; return s.nutmegs + s.onetwos + s.dodges + s.burns; }
  get comet() { return this.cometT > 0; }
  /** 0..1 along the way from the kick-off to the box (the red bar at the top). */
  get progress() { return this.mode === 'shoot' || this.mode === 'shot' || this.mode === 'goal' || this.mode === 'done' ? 1 : clamp(this.ball.z / PITCH.BOX_Z, 0, 1); }
  reachNow() { return this.def.reach * (this.comet ? 0.55 : 1); }

  _build() {
    const d = this.def, r = this.rand;
    const n = d.defenders, Z0 = 16, Z1 = PITCH.BOX_Z - 7;
    for (let i = 0; i < n; i++) {
      const z = Z0 + (i + 0.5) * ((Z1 - Z0) / n);
      const x = (i % 2 ? 1 : -1) * (1.5 + r() * 7);
      this.defenders.push({ id: i + 1, x, z, x0: x, hx: 0, hz: -1, state: 'idle', t: 0, cd: 0.8, lx: 0, lz: -1, near: 99, hit: false, nutmegged: false, pa: 0, pb: 0, wt: 0, warned: false, from: 'idle' });
    }
    for (let i = 0; i < d.mates; i++) {
      const z = 24 + (i + 0.5) * ((PITCH.BOX_Z - 30) / d.mates);
      let best = 0, bd = -1;
      for (const cx of [-10, -6, 6, 10, 0]) {
        const md = Math.min(...this.defenders.map((o) => Math.hypot(o.x - cx, o.z - z)));
        if (md > bd) { bd = md; best = cx; }
      }
      this.mates.push({ id: i + 1, x: best, z, state: 'wait', t: 0 });
    }
    // yellow training dummies: the ball bounces off them (BLOCKED!); they never move
    const nd = 2 + this.level;
    for (let i = 0; i < nd; i++) {
      for (let tries = 0; tries < 30; tries++) {
        const z = 11 + (i + r()) * ((PITCH.BOX_Z - 18) / nd), x = (r() * 2 - 1) * 12.5;
        if (this.defenders.some((o) => Math.hypot(o.x - x, o.z - z) < 4.5) || this.mates.some((o) => Math.hypot(o.x - x, o.z - z) < 4.5)) continue;
        this.dummies.push({ x, z }); break;
      }
    }
    // lines of gold coins: a gentle curve; the first line leads the way from the kick-off
    const lines = 3 + Math.min(2, this.level);
    for (let i = 0; i < lines; i++) {
      const z0 = i === 0 ? 8 : 14 + i * ((PITCH.BOX_Z - 24) / lines) + r() * 4, x0 = i === 0 ? 0 : (r() * 2 - 1) * 9, bend = (r() - 0.5) * 0.5;
      for (let k = 0; k < 6; k++) {
        const c = { x: clamp(x0 + bend * k * k * 0.3, -14, 14), z: z0 + k * 1.7, got: false };
        if (this.dummies.some((o) => Math.hypot(o.x - c.x, o.z - c.z) < 1.6)) continue;
        this.coinList.push(c);
      }
    }
  }

  setInput(jx, jy) { this.input.jx = clamp(jx || 0, -1, 1); this.input.jy = clamp(jy || 0, -1, 1); }

  emit(type, extra = {}) { const e = { type, ...extra }; if (this.ev) this.ev.push(e); this.log.push(e); if (this.log.length > 200) this.log.shift(); }

  step(dt) {
    const ev = []; this.ev = ev;
    let left = Math.min(Math.max(dt, 0), 0.1);
    while (left > 1e-6) { const h = Math.min(left, 1 / 60); this._sub(h); left -= h; }
    this.ev = null;
    return ev;
  }

  _sub(dt) {
    this.clock += dt; this.modeT += dt;
    switch (this.mode) {
      case 'play': this.time += dt; this._ball(dt); this._dummies(dt); this._coins(); this._defenders(dt); this._mates(dt); this._heatTick(dt); this._boxCheck(); break;
      case 'shoot': this.time += dt; this._ball(dt); this._shootTick(dt); this._heatPause(); break;
      case 'shot': this._shotTick(dt); break;
      case 'goal': if (this.modeT >= 2.6) { this.mode = 'done'; this.modeT = 0; this.emit('end', { result: this.result() }); } break;
      case 'lost': if (this.modeT >= (this.reason === 'saved' ? 2.2 : 1.6)) { this.mode = 'done'; this.modeT = 0; this.emit('end', { result: this.result() }); } break;
      default: break;
    }
  }

  // ---------- the ball ----------
  _ball(dt) {
    const b = this.ball;
    if (b.inv > 0) b.inv = Math.max(0, b.inv - dt);
    if (this.pass) {
      const p = this.pass; p.t += dt;
      const k = clamp(p.t / p.dur, 0, 1);
      b.x = p.x0 + (p.x1 - p.x0) * k; b.z = p.z0 + (p.z1 - p.z0) * k; b.vx = 0; b.vz = 0;
      if (k >= 1) { this.pass = null; b.vz = 8; b.vx = 0; b.inv = 0.35; }
      return;
    }
    const sp = this.comet ? 1.3 : 1;
    const shoot = this.mode === 'shoot';
    // the ball only moves while the stick is out: the further you drag, the faster it rolls; let go and it rolls to a stop
    let ix = this.input.jx, iz = this.input.jy; const mag = Math.hypot(ix, iz); if (mag > 1) { ix /= mag; iz /= mag; }
    let dx = ix * BALL_SPEED * sp, dz = iz * BALL_SPEED * sp * (iz < 0 ? 0.6 : 1);
    if (shoot) { dx = 0; dz = b.z < PITCH.SHOOT_Z ? 6 : 0; }
    const ax = dx - b.vx, az = dz - b.vz, al = Math.hypot(ax, az), still = Math.abs(dx) + Math.abs(dz) < 0.01, maxd = (still ? 34 : 30) * dt;
    if (al > maxd) { b.vx += (ax / al) * maxd; b.vz += (az / al) * maxd; } else { b.vx = dx; b.vz = dz; }
    b.x += b.vx * dt; b.z += b.vz * dt;
    if (b.x > HALF_W) { b.x = HALF_W; if (b.vx > 0) b.vx = 0; }
    if (b.x < -HALF_W) { b.x = -HALF_W; if (b.vx < 0) b.vx = 0; }
    if (b.z < 1.5) { b.z = 1.5; if (b.vz < 0) b.vz = 0; }
    if (shoot && b.z > PITCH.SHOOT_Z) { b.z = PITCH.SHOOT_Z; b.vz = 0; }
  }

  _dummies(dt) {
    const b = this.ball; this.blockT = Math.max(0, this.blockT - dt);
    if (this.pass) return;
    for (const o of this.dummies) {
      const dx = b.x - o.x, dz = b.z - o.z, d = Math.hypot(dx, dz), m = DUMMY_R + BALL_R;
      if (d >= m || d < 1e-6) continue;
      const nx = dx / d, nz = dz / d; b.x = o.x + nx * m; b.z = o.z + nz * m;
      const vn = b.vx * nx + b.vz * nz; if (vn < 0) { b.vx -= 1.6 * vn * nx; b.vz -= 1.6 * vn * nz; }
      if (this.blockT <= 0) { this.blockT = 0.9; this.stats.blocked++; this.emit('blocked', { x: o.x, z: o.z }); }
    }
  }

  _coins() {
    const b = this.ball;
    for (const c of this.coinList) {
      if (c.got) continue;
      if (Math.hypot(b.x - c.x, b.z - c.z) < COIN_R) { c.got = true; this.coins++; this.stats.coins++; this.score += 5; this.emit('coin', { x: c.x, z: c.z, n: this.coins }); }
    }
  }

  _boxCheck() {
    const b = this.ball;
    if (b.z >= PITCH.BOX_Z && !this.pass) {
      this.mode = 'shoot'; this.modeT = 0; this.target.p = 0;
      this.keeper.dir = 0; this.keeper.diveTo = null;
      for (const d of this.defenders) { d.from = d.state; d.state = 'watch'; d.t = 0; }
      this.emit('shootStart');
    }
  }

  // ---------- defenders ----------
  _local(d) {
    const b = this.ball, rx = b.x - d.x, rz = b.z - d.z;
    const px = d.hz, pz = -d.hx; // perpendicular to the heading (the line the two legs stand on)
    return { a: rx * px + rz * pz, b: rx * d.hx + rz * d.hz };
  }

  _defenders(dt) {
    const b = this.ball, D = this.def;
    for (const d of this.defenders) {
      const rx = b.x - d.x, rz = b.z - d.z, dist = Math.hypot(rx, rz) || 1e-6;
      d.t += dt;
      const turn = (tx, tz, rate) => {
        const ang = Math.atan2(d.hx, d.hz), want = Math.atan2(tx, tz);
        let df = want - ang; while (df > Math.PI) df -= 2 * Math.PI; while (df < -Math.PI) df += 2 * Math.PI;
        const na = ang + clamp(df, -rate * dt, rate * dt);
        d.hx = Math.sin(na); d.hz = Math.cos(na);
      };
      switch (d.state) {
        case 'idle': {
          const tx = d.x0 + Math.sin(this.clock * 0.9 + d.id) * 2.5;
          const mv = clamp(tx - d.x, -1.2 * dt, 1.2 * dt); d.x += mv;
          turn(rx, rz, 3);
          if (dist < D.aggro) { d.state = 'chase'; d.t = 0; }
          break;
        }
        case 'chase': {
          d.cd -= dt;
          turn(rx, rz, 3.2);
          d.x += d.hx * D.chase * dt; d.z += d.hz * D.chase * dt;
          d.x = clamp(d.x, -HALF_W, HALF_W); d.z = clamp(d.z, 2, PITCH.BOX_Z + 6);
          if (dist > D.aggro * 1.6) { d.state = 'idle'; d.x0 = d.x; d.t = 0; }
          else if (d.cd <= 0 && dist < TRIGGER_DIST && b.inv <= 0 && !this.pass) {
            d.state = 'windup'; d.t = 0; d.near = dist; d.hit = false; d.warned = true; d.wt = 0;
            d.lx = rx / dist; d.lz = rz / dist; d.hx = d.lx; d.hz = d.lz; // the lane is fixed now and shown on the grass
            this.emit('tackleWarn', { id: d.id });
          }
          break;
        }
        case 'windup':
          d.wt += dt; d.near = Math.min(d.near, dist);
          if (d.wt >= D.windup) { d.state = 'slide'; d.t = 0; d.sx = d.x; d.sz = d.z; this.emit('slide', { id: d.id, warned: d.wt }); }
          break;
        case 'slide':
          d.x = clamp(d.x + d.lx * SLIDE_SPEED * dt, -HALF_W, HALF_W); d.z += d.lz * SLIDE_SPEED * dt;
          d.near = Math.min(d.near, dist);
          if (!d.hit && b.inv <= 0 && !this.pass && dist < 1.6) {
            d.hit = true; this.stats.tackles++;
            if (this.comet) this._burn(d); else this._steal(d);
          }
          if (d.t >= SLIDE_TIME) {
            if (!d.hit && dist < 10) { this.emit('dodge', { id: d.id }); this.stats.dodges++; this._trick('dodge'); }
            d.state = 'recover'; d.t = 0; d.warned = false;
          }
          break;
        case 'recover': if (d.t >= 1.1) { d.state = 'chase'; d.t = 0; d.cd = D.cooldown; } break;
        case 'stun': if (d.t >= 1.9) { d.state = 'chase'; d.t = 0; d.cd = D.cooldown * 0.6; d.nutmegged = false; } break;
        case 'cheer': if (d.t >= 1.5) { d.state = 'chase'; d.t = 0; d.cd = D.cooldown; } break;
        default: break; // watch
      }
      // legs: touching the ball steals it; rolling through the gap is a nutmeg
      if (this.mode === 'play' && ['idle', 'chase', 'windup'].includes(d.state) && b.inv <= 0 && !this.pass) {
        const px = d.hz, pz = -d.hx;
        let touch = false;
        for (const s of [1, -1]) if (Math.hypot(b.x - (d.x + px * LEG_OFF * s), b.z - (d.z + pz * LEG_OFF * s)) < LEG_R + BALL_R) touch = true;
        if (touch) { if (this.comet) this._burn(d); else this._steal(d); continue; }
        const l = this._local(d);
        if (!d.nutmegged && d.pb > 0 && l.b <= 0 && Math.abs(l.a) < LEG_OFF - 0.1 && Math.abs(d.pb) < 3) {
          d.nutmegged = true; d.state = 'stun'; d.t = 0; this.stats.nutmegs++;
          this.emit('nutmeg', { id: d.id }); this._trick('nutmeg');
        }
        d.pa = l.a; d.pb = l.b;
      } else { const l = this._local(d); d.pa = l.a; d.pb = l.b; }
    }
  }

  _burn(d) {
    d.state = 'stun'; d.t = 0; d.nutmegged = true; this.stats.burns++;
    this.emit('burn', { id: d.id }); this._trick('burn');
  }

  _steal(d) {
    const b = this.ball;
    this.stats.stolen++; this.heat = 0; this.cometT = 0;
    d.state = 'cheer'; d.t = 0;
    // the ball comes back nearby, away from every defender; nothing permanent is lost
    let best = { x: 0, z: Math.max(3, b.z - 7) }, bd = -1;
    for (const ox of [0, -6, 6, -11, 11]) for (const dz of [7, 11, 4]) {
      const c = { x: clamp(b.x + ox, -HALF_W + 1, HALF_W - 1), z: Math.max(3, b.z - dz) };
      const md = Math.min(...this.defenders.map((o) => (o === d ? 99 : Math.hypot(o.x - c.x, o.z - c.z))), Math.hypot(d.x - c.x, d.z - c.z) * 0.9);
      if (md > bd) { bd = md; best = c; }
    }
    b.x = best.x; b.z = best.z; b.vx = 0; b.vz = 0; b.inv = 1.8;
    this.lives = Math.max(0, this.lives - 1);
    this.emit('stolen', { id: d.id, lives: this.lives });
    if (this.lives <= 0) {
      // Kind rule (owner decision): running out of balls NEVER ends the match
      // and is never a fail state. Street football: the kids fetch more balls
      // and play goes on — the HUD balls fill back up with a kind cheer.
      this.lives = LIVES; this.refills++;
      this.emit('refill', { stolen: this.stats.stolen });
    }
  }

  // ---------- teammates, one-two ----------
  _mates(dt) {
    const b = this.ball;
    for (const m of this.mates) {
      m.t += dt;
      if (m.state === 'pass' && m.t > 0.6) { m.state = 'done'; m.t = 0; }
      if (m.state === 'wait' && !this.hintMate && Math.hypot(b.x - m.x, b.z - m.z) < 15 && b.z < m.z) { this.hintMate = true; this.emit('mateHint', { id: m.id }); }
      if (m.state !== 'wait' || b.inv > 0 || this.pass) continue;
      if (Math.hypot(b.x - m.x, b.z - m.z) < 1.8) {
        let bx = clamp(m.x, -10, 10), bd = -1;
        for (const cx of [m.x - 7, m.x + 7, m.x * 0.3, 0]) {
          const px = clamp(cx, -HALF_W + 1.5, HALF_W - 1.5);
          const md = Math.min(...this.defenders.map((o) => Math.hypot(o.x - px, o.z - (m.z + 13))), 99);
          if (md > bd) { bd = md; bx = px; }
        }
        this.pass = { x0: b.x, z0: b.z, x1: bx, z1: Math.min(m.z + 13, PITCH.BOX_Z - 2), t: 0, dur: 0.6, mate: m.id };
        m.state = 'pass'; m.t = 0; b.inv = 0.01;
        this.stats.onetwos++; this.emit('onetwo', { id: m.id }); this._trick('onetwo');
      }
    }
  }

  // ---------- heat and comet ----------
  _trick(kind) {
    const T = TRICKS[kind];
    this.score += T.score * (this.comet ? 2 : 1); this.lastTrick = this.time;
    if (this.comet) { this.cometT = Math.min(COMET_TIME, this.cometT + 1.5); return; }
    this.heat = Math.min(HEAT_MAX, this.heat + T.heat);
    if (this.heat >= HEAT_MAX) { this.cometT = COMET_TIME; this.emit('cometOn'); }
  }

  _heatTick(dt) {
    if (this.cometT > 0) {
      this.cometT -= dt; this.heat = HEAT_MAX * Math.max(0, this.cometT) / COMET_TIME;
      if (this.cometT <= 0) { this.cometT = 0; this.heat = 0; this.emit('cometOff'); }
    } else if (this.time - this.lastTrick > 2.5) this.heat = Math.max(0, this.heat - 3 * dt);
  }
  _heatPause() { /* heat and comet wait while you aim */ }

  // ---------- the shot ----------
  _shootTick(dt) {
    const D = this.def, k = this.keeper, t = this.target;
    t.p += D.tspeed * dt; t.x = Math.sin(t.p) * 6.2;
    const want = clamp(this.ball.x * 0.35 + Math.sin(this.clock * 1.7) * D.sway, -4.6, 4.6);
    const mv = clamp(want - k.x, -3.6 * dt, 3.6 * dt); k.x += mv;
  }

  /** Is the target outside the keeper's reach right now (a shot would score)? */
  targetSafe(margin = 0) { return Math.abs(this.target.x - this.keeper.x) > this.reachNow() + margin; }

  tap() {
    if (this.mode !== 'shoot' || this.modeT < 0.3) return false;
    const k = this.keeper, tx = this.target.x, saved = Math.abs(tx - k.x) <= this.reachNow();
    k.dir = tx >= k.x ? 1 : -1;
    k.diveTo = saved ? tx : k.x + k.dir * this.reachNow();
    this.shot = { t: 0, dur: 0.5, x0: this.ball.x, z0: this.ball.z, tx, saved, comet: this.comet };
    this.mode = 'shot'; this.modeT = 0;
    this.emit('shoot', { comet: this.comet });
    return true;
  }

  _shotTick(dt) {
    const s = this.shot, k = this.keeper;
    s.t += dt;
    if (k.diveTo != null) k.x += clamp(k.diveTo - k.x, -16 * dt, 16 * dt);
    if (s.t < s.dur) return;
    const b = this.ball;
    if (s.saved) {
      this.stats.saves++; this.emit('save');
      this.shot = null; k.diveTo = null; k.dir = 0;
      this.reason = 'saved'; this.mode = 'lost'; this.modeT = 0; this.emit('lost', { reason: 'saved' });
    } else {
      this.goals++; this.score += 500 + (s.comet ? 250 : 0);
      b.x = s.tx; b.z = PITCH.L + 1; this.mode = 'goal'; this.modeT = 0;
      this.emit('goal', { x: s.tx, comet: s.comet });
    }
  }

  result() {
    const tricks = this.tricks, got = this.coins;
    if (this.goals === 0) return { goal: false, reason: this.reason || 'time', stars: 0, coins: got, tricks, time: this.time, score: Math.round(this.score), stats: { ...this.stats } };
    // Kind rules (Batch C): par time no longer grades. Stars = the goal itself,
    // the trick goal, and a clean run (no ball stolen). `par` stays in the data, unused.
    // The clean run reads stats.stolen, not lives: balls refill when they run
    // out, so lives alone can no longer tell a clean run from a refilled one.
    const stars = 1 + (tricks >= this.def.trickGoal ? 1 : 0) + (this.stats.stolen === 0 ? 1 : 0);
    const coins = got + 10 + tricks * 4 + stars * 8;
    return { goal: true, reason: null, stars, coins, tricks, time: this.time, score: Math.round(this.score), stats: { ...this.stats } };
  }
}
