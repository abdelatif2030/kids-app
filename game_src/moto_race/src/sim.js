// The race with no drawing. Six riders, two laps of the coastal circuit. The bikes accelerate by themselves (the child
// steers, brakes and fires nitro); grip limits how sharp a bike can turn at speed, so a corner taken too fast runs
// wide onto the grass (slow) or against the soft barriers (never a crash). Riding close behind someone fills the
// slipstream (more top speed and nitro); nitro is a short boost. The rivals follow a racing line, brake for corners
// and overtake. Deterministic with a seed, so a robot test can race.
import { buildTrack, nearest, lateral, pointAt, curvAhead, safeSpeed, HALF_W, WALL } from './track.js';

export const LAPS = 2;
const GRIP = 16; // m/s² of cornering
const PLAYER_VMAX = 61;
const ACCEL = 15;

export const ROUNDS = [
  { id: 1, ar: 'كورنيش الشمس', en: 'Sunny Corniche', reverse: false, rival: 52, sunset: false, skill: 0.9 },
  { id: 2, ar: 'طريق النخيل', en: 'Palm Road', reverse: true, rival: 55, sunset: false, skill: 0.97 },
  { id: 3, ar: 'غروب الخليج', en: 'Bay Sunset', reverse: false, rival: 57.5, sunset: true, skill: 1.03 },
  { id: 4, ar: 'الجائزة الكبرى', en: 'Grand Prix', reverse: true, rival: 59.5, sunset: true, skill: 1.08 },
];

export const RIDERS = [
  { kind: 'kid', ar: 'أنت', en: 'You', color: 0xe8342a, suit: 0xe8342a, helmet: 0xe8342a, num: 7 },
  { kind: 'rider', ar: 'سليم', en: 'Salim', color: 0x2a6ae8, suit: 0x1a3a8a, helmet: 0x2a6ae8, num: 12 },
  { kind: 'rider', ar: 'ليلى', en: 'Laila', color: 0xff6aa8, suit: 0xff6aa8, helmet: 0xffffff, num: 21 },
  { kind: 'rider', ar: 'عمر', en: 'Omar', color: 0x2ab85a, suit: 0x1a5a2a, helmet: 0xffd23a, num: 5 },
  { kind: 'rider', ar: 'مريم', en: 'Mariam', color: 0xf2b21a, suit: 0x2a2c34, helmet: 0xf2b21a, num: 33 },
  { kind: 'rider', ar: 'يوسف', en: 'Youssef', color: 0x8a3ae8, suit: 0xf4f4f4, helmet: 0x8a3ae8, num: 46 },
];

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const wrap = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export class Race {
  /** opts: { round (0..3), easy, assist (0..1), seed } */
  constructor(opts = {}) {
    this.round = ROUNDS[opts.round ?? 0];
    this.track = buildTrack(this.round.reverse);
    this.easy = !!opts.easy;
    this.assist = opts.assist ?? (this.easy ? 0.75 : 0.35);
    this.rand = rng(opts.seed ?? 11);
    this.state = 'lights'; // lights (5 red lights) -> race -> done
    this.lightsT = 4.2;
    this.time = 0;
    this.events = [];
    this.finished = 0;
    const tr = this.track;
    this.riders = RIDERS.map((r, k) => {
      // grid: two by two behind the line, the child starts last (like the video), rivals ahead
      const row = 5 - k;
      const back = 6 + Math.floor(row / 2) * 9;
      const i = (tr.N - Math.round(back / tr.step)) % tr.N;
      const side = row % 2 ? 2.4 : -2.4;
      const p = pointAt(tr, i, side);
      const vmax = k === 0 ? PLAYER_VMAX : this.round.rival * (this.easy ? 0.86 : 1) * (0.97 + this.rand() * 0.05);
      return {
        id: k, ...r, x: p.x, z: p.z, h: p.a, v: 0, i, lat: side, prog: -back, steer: 0, lean: 0, vmax,
        nitro: k === 0 ? 1 : 0.5, boost: 0, draft: 0, crashT: 0, off: false, place: k + 1, done: false, finishT: 0,
        lane: (this.rand() - 0.5) * 3, wallT: 0, isPlayer: k === 0, grip: k === 0 ? GRIP : GRIP * this.round.skill * (this.easy ? 0.9 : 1),
      };
    });
    this.player = this.riders[0];
    this._places();
  }

  get length() { return this.track.length; }

  /** Player input: steer -1..1 (right = +), brake, nitro (a press). */
  step(dt, input = {}) {
    this.events = [];
    if (this.state === 'lights') {
      const before = Math.ceil(this.lightsT);
      this.lightsT -= dt;
      const now = Math.ceil(this.lightsT);
      if (now !== before && this.lightsT > 0) this.events.push({ type: 'light', n: 5 - Math.min(5, now) });
      if (this.lightsT <= 0) { this.state = 'race'; this.events.push({ type: 'go' }); }
      return this.events;
    }
    if (this.state === 'done') return this.events;
    this.time += dt;
    for (const r of this.riders) {
      if (r.done) { this._coast(r, dt); continue; }
      const ctl = r.isPlayer ? this._playerControl(r, input) : this._ai(r);
      this._ride(r, ctl, dt);
    }
    this._contacts();
    this._places();
    if (this.player.done && this.state === 'race') {
      // once the child crosses the line the race is over for them; the others are placed by where they are
      this.state = 'done';
      this.events.push({ type: 'finish', place: this.player.place });
    }
    return this.events;
  }

  // ---- control ---------------------------------------------------------------------------------------------------

  _playerControl(r, input) {
    let steer = clamp(input.steer ?? 0, -1, 1);
    // a helping hand on the handlebars: lean towards the road direction and back to the road
    if (this.assist > 0) {
      const tr = this.track;
      const ahead = (r.i + Math.round((10 + r.v * 0.4) / tr.step)) % tr.N;
      const want = wrap(tr.ang[ahead] - r.h);
      const help = clamp(-want * 2.2 - r.lat * 0.09, -1, 1); // right = +, heading increases to the left
      const k = Math.abs(steer) > 0.1 ? this.assist * 0.4 : this.assist;
      steer = clamp(steer * (1 - k * 0.5) + help * k, -1, 1);
    }
    let brake = !!input.brake;
    if (this.easy && !brake) {
      // the youngest also get a gentle automatic brake before a corner
      if (r.v > safeSpeed(this.track, r.i, r.v, GRIP) * 1.05) brake = true;
    }
    if (input.nitro && r.nitro >= 0.3 && r.boost <= 0) {
      r.boost = 0.8 + r.nitro * 2;
      r.nitro = 0;
      this.events.push({ type: 'nitro', id: r.id });
    }
    return { steer, brake, gas: !brake };
  }

  _ai(r) {
    const tr = this.track;
    const look = (8 + r.v * 0.45) / tr.step;
    const ahead = Math.round(r.i + look) % tr.N;
    const c = curvAhead(tr, r.i, 25 + r.v * 1.3);
    // racing line: towards the inside of the coming corner, else its own lane
    const corner = clamp(c.abs * 160, 0, 1);
    let lane = r.lane * (1 - corner) - c.sign * 3.2 * corner;
    // someone right ahead in the same lane: go round them
    for (const o of this.riders) {
      if (o === r) continue;
      const gap = o.prog - r.prog;
      if (gap > 0 && gap < 12 && Math.abs(o.lat - lane) < 1.6) { lane = o.lat + (o.lat > 0 ? -2.8 : 2.8); break; }
    }
    lane = clamp(lane, -HALF_W + 1.2, HALF_W - 1.2);
    const p = pointAt(tr, ahead, lane);
    const want = Math.atan2(p.x - r.x, p.z - r.z);
    const steer = clamp(-wrap(want - r.h) * 2.6, -1, 1);
    // speed for the corner, a little rubber band so races stay close
    const lead = r.prog - this.player.prog;
    let vmax = r.vmax * (lead > 70 ? 0.92 : lead < -90 ? 1.06 : 1);
    vmax = Math.min(vmax, safeSpeed(tr, r.i, r.v, r.grip * 0.95));
    const brake = r.v > vmax + 1.5;
    // nitro on a straight now and then
    if (r.nitro >= 0.9 && c.abs < 0.003 && r.boost <= 0 && this.rand() < 0.01) { r.boost = 2; r.nitro = 0; this.events.push({ type: 'nitro', id: r.id }); }
    return { steer, brake, gas: !brake && r.v < vmax, vmax };
  }

  // ---- riding ----------------------------------------------------------------------------------------------------

  _ride(r, ctl, dt) {
    const tr = this.track;
    if (r.crashT > 0) {
      r.crashT -= dt;
      r.v = Math.max(0, r.v - 30 * dt);
      r.x += Math.sin(r.h) * r.v * dt;
      r.z += Math.cos(r.h) * r.v * dt;
      if (r.crashT <= 0) {
        // back on the bike, on the track, pointing the right way
        const side = Math.max(-HALF_W + 1.5, Math.min(HALF_W - 1.5, r.lat));
        const p = pointAt(tr, r.i, side);
        Object.assign(r, { x: p.x, z: p.z, h: tr.ang[r.i], lat: side, v: 6, steer: 0, off: false, boost: 0 });
        this.events.push({ type: 'recover', id: r.id });
      }
      return;
    }
    r.boost = Math.max(0, r.boost - dt);
    r.wallT = Math.max(0, r.wallT - dt);
    let vmax = r.vmax * (1 + 0.1 * r.draft) * (r.boost > 0 ? 1.3 : 1) * (r.off ? 0.5 : 1);
    if (ctl.vmax) vmax = Math.min(vmax, ctl.vmax * (1 + 0.1 * r.draft) * (r.boost > 0 ? 1.3 : 1));
    if (ctl.brake) r.v = Math.max(0, r.v - 30 * dt);
    else if (ctl.gas !== false) r.v += (r.boost > 0 ? ACCEL * 1.8 : ACCEL) * Math.max(0, 1 - r.v / vmax) * dt;
    if (r.v > vmax) r.v -= (r.v - vmax) * (r.off ? 2.5 : 1.2) * dt;
    // steering: grip limits the turn at speed (too fast = runs wide)
    r.steer += (ctl.steer - r.steer) * Math.min(1, dt * 8);
    const maxYaw = Math.min(1.5, r.grip / Math.max(6, r.v));
    const yaw = r.steer * maxYaw * Math.min(1, r.v / 4);
    r.h = wrap(r.h - yaw * dt);
    r.lean = clamp(-yaw * r.v / GRIP, -1, 1); // lean into the turn (visual)
    if (Math.abs(r.steer) > 0.85 && r.v > 30 && !r.off) r.skid = Math.min(1, (r.skid ?? 0) + dt * 3); else r.skid = Math.max(0, (r.skid ?? 0) - dt * 4);
    r.x += Math.sin(r.h) * r.v * dt;
    r.z += Math.cos(r.h) * r.v * dt;
    const before = r.i;
    r.i = nearest(tr, r.x, r.z, r.i);
    let di = r.i - before;
    if (di > tr.N / 2) di -= tr.N;
    if (di < -tr.N / 2) di += tr.N;
    const lapBefore = Math.floor(r.prog / tr.length);
    r.prog += di * tr.step;
    r.lat = lateral(tr, r.i, r.x, r.z);
    const wasOff = r.off;
    r.off = Math.abs(r.lat) > HALF_W + 0.3;
    if (r.off && !wasOff) this.events.push({ type: 'grass', id: r.id });
    // the soft barriers
    if (Math.abs(r.lat) > WALL - 0.5) {
      const side = Math.sign(r.lat);
      const p = pointAt(tr, r.i, side * (WALL - 0.6));
      r.x = p.x;
      r.z = p.z;
      r.lat = side * (WALL - 0.6);
      r.h = wrap(tr.ang[r.i] + wrap(r.h - tr.ang[r.i]) * 0.3);
      if (r.wallT <= 0) {
        if (r.v > 31) {
          r.crashT = 1.5;
          r.v *= 0.35;
          this.events.push({ type: 'crash', id: r.id, x: r.x, z: r.z });
        } else {
          r.v *= 0.5;
          this.events.push({ type: 'wall', id: r.id, x: r.x, z: r.z });
        }
        r.wallT = 0.5;
      }
    }
    // laps
    const lapNow = Math.floor(r.prog / tr.length);
    if (lapNow > lapBefore && r.prog > 0) {
      if (lapNow >= LAPS) {
        r.done = true;
        r.finishT = this.time;
        this.finished++;
        r.finishPlace = this.finished;
        this.events.push({ type: 'cross', id: r.id, place: this.finished });
      } else this.events.push({ type: 'lap', id: r.id, lap: lapNow + 1 });
    }
    // slipstream: close behind someone in the same line
    let inDraft = false;
    for (const o of this.riders) {
      if (o === r) continue;
      const gap = o.prog - r.prog;
      if (gap > 2.5 && gap < 16 && Math.abs(o.lat - r.lat) < 1.8) { inDraft = true; break; }
    }
    const was = r.draft;
    r.draft = clamp(r.draft + (inDraft ? dt * 0.9 : -dt * 0.7), 0, 1);
    if (r.isPlayer && was < 0.6 && r.draft >= 0.6) this.events.push({ type: 'draft' });
    r.nitro = Math.min(1, r.nitro + dt * (0.018 + (r.draft > 0.4 ? 0.1 : 0)));
  }

  _coast(r, dt) {
    // after the line: ease off and keep riding along
    const tr = this.track;
    r.v = Math.max(18, r.v - 8 * dt);
    const ctl = this._ai(r);
    r.steer += (ctl.steer - r.steer) * Math.min(1, dt * 8);
    const yaw = r.steer * Math.min(1.5, GRIP / Math.max(6, r.v));
    r.h = wrap(r.h - yaw * dt);
    r.x += Math.sin(r.h) * r.v * dt;
    r.z += Math.cos(r.h) * r.v * dt;
    r.i = nearest(tr, r.x, r.z, r.i);
    r.lat = lateral(tr, r.i, r.x, r.z);
  }

  _contacts() {
    const rs = this.riders;
    for (let a = 0; a < rs.length; a++) {
      for (let b = a + 1; b < rs.length; b++) {
        const p = rs[a];
        const q = rs[b];
        const dx = q.x - p.x;
        const dz = q.z - p.z;
        const d = Math.hypot(dx, dz);
        if (d > 1.3 || d < 0.001) continue;
        const push = (1.3 - d) / 2;
        p.x -= (dx / d) * push; p.z -= (dz / d) * push;
        q.x += (dx / d) * push; q.z += (dz / d) * push;
        const behind = p.prog < q.prog ? p : q;
        if (!behind.bumpT || this.time - behind.bumpT > 0.6) {
          behind.v *= p.isPlayer || q.isPlayer ? 0.93 : 0.985;
          behind.bumpT = this.time;
          if (p.isPlayer || q.isPlayer) this.events.push({ type: 'bump', x: (p.x + q.x) / 2, z: (p.z + q.z) / 2 });
        }
      }
    }
  }

  _places() {
    const order = [...this.riders].sort((a, b) => {
      if (a.done && b.done) return a.finishPlace - b.finishPlace;
      if (a.done) return -1;
      if (b.done) return 1;
      return b.prog - a.prog;
    });
    order.forEach((r, k) => {
      if (r.isPlayer && this.player.place && k + 1 < this.player.place && this.state === 'race') this.events.push({ type: 'overtake', place: k + 1 });
      r.place = k + 1;
    });
    this.order = order;
  }

  /** Lap shown to the child (1..LAPS). */
  get lap() { return clamp(Math.floor(Math.max(0, this.player.prog) / this.track.length) + 1, 1, LAPS); }

  /** 3 stars for winning, 2 for the podium, 1 for finishing. */
  get result() {
    const p = this.player.place;
    return { place: p, stars: p === 1 ? 3 : p <= 3 ? 2 : 1, time: this.player.finishT };
  }
}

/** Save: { unlocked (1..4), stars, best: {roundId: seconds}, color, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  const best = {};
  for (const r of ROUNDS) {
    const v = Math.floor(Number(s.stars && s.stars[r.id]));
    if (v >= 1 && v <= 3) stars[r.id] = v;
    const b = Number(s.best && s.best[r.id]);
    if (b > 10 && b < 3600) best[r.id] = b;
  }
  const u = Math.floor(Number(s.unlocked));
  const c = Math.floor(Number(s.color));
  return { unlocked: Number.isFinite(u) ? clamp(u, 1, ROUNDS.length) : 1, stars, best, color: c >= 0 && c < 4 ? c : 0, muted: s.muted === true };
}
