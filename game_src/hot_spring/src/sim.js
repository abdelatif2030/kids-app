// Hot Spring Village with no drawing. The caretaker walks a snowy valley (drag). At a slicing mill the ginger is cut into slices
// that wait on the mill tray; standing at the tray picks them up into a stack on the back. Standing at the spring drops the
// slices in: each one keeps the water hot. Frozen visitors arrive, wait for a seat in the spring and thaw faster the hotter the
// water is (never stops completely: nobody is ever sent away or lost). A thawed visitor leaves coins; the coins are picked up by
// walking over them and are spent on glowing pads: tea house, bigger stack, faster mill, a second mill, more seats, a helper.
// Every few thawed visitors light a lantern of the valley; all 10 lanterns lit = the valley is warm = the win.
// Positions in metres on a 56 x 40 field. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const SIZE = { w: 56, h: 40 };
export const SPRING = { x: 28, y: 19, r: 4.8 };
export const GATE = { x: 28, y: 39 };
export const MILL_SPOTS = [
  { x: 13, y: 17, pad: { x: 14.5, y: 21 } },
  { x: 16, y: 30, pad: { x: 17.5, y: 33.5 } },
];
export const TEAHOUSE = { x: 44, y: 14, door: { x: 41.5, y: 18 } };
export const LANTERNS = Array.from({ length: 10 }, (_, i) => {
  const a = Math.PI * 0.62 + (i / 10) * Math.PI * 2;
  return { x: SPRING.x + Math.cos(a) * 24, y: SPRING.y + Math.sin(a) * 17 };
});
export const LANTERN_AT = [2, 4, 7, 11, 16, 22, 29, 37, 46, 56]; // thawed visitors needed for each lantern
export const QUEUE = Array.from({ length: 6 }, (_, i) => ({ x: 23 + (i % 3) * 4.2, y: 28 + Math.floor(i / 3) * 2.6 }));
const SEAT_ANGLES = [-2.55, -0.6, 2.6, 0.55, -1.57, 1.57, 3.14, 0]; // order they open up in
export const STACK_MAX = [6, 10, 16];
export const MILL_PERIOD = [1.0, 0.6];
export const TRAY_MAX = 8;
export const SLICE_HEAT = 0.06;

/** The upgrades, in order. Each is a glowing pad in the valley; walk onto it with enough coins. */
export const UPGRADES = [
  { id: 'teahouse', cost: 12, x: 44, y: 20, ico: '🍵' },
  { id: 'stack', cost: 18, x: 22, y: 24.5, ico: '🎒' },
  { id: 'speed', cost: 28, x: 9.5, y: 23.5, ico: '⚙️' },
  { id: 'mill2', cost: 40, x: 21.5, y: 34, ico: '🪚' },
  { id: 'seats', cost: 55, x: 35, y: 25.5, ico: '♨️' },
  { id: 'stack2', cost: 75, x: 22, y: 24.5, ico: '🎒' },
  { id: 'helper', cost: 95, x: 35.5, y: 11, ico: '🦊' },
  { id: 'seats2', cost: 115, x: 35, y: 25.5, ico: '♨️' },
];

const PAD_R = 2.3;
const KINDS = ['person', 'monkey', 'bear', 'person', 'person', 'monkey'];

export class Village {
  /** opts: { easy, seed } */
  constructor(opts = {}) {
    this.rand = rng(opts.seed ?? 7);
    this.easy = !!opts.easy;
    this.me = { x: 24, y: 23, vx: 0, vy: 0, face: 1, stack: 0, near: null };
    this.stackMax = STACK_MAX[0];
    this.millPeriod = MILL_PERIOD[0];
    this.mills = [{ ...MILL_SPOTS[0], tray: 3, t: 0, work: 0 }];
    this.heat = 0.6;
    this.coins = 0;
    this.coinsTotal = 0;
    this.thawed = 0;
    this.lit = 0;
    this.up = 0; // index of the next upgrade
    this.teahouse = false;
    this.seatCount = 4;
    this.seats = SEAT_ANGLES.map((a) => ({ x: SPRING.x + Math.cos(a) * 3.3, y: SPRING.y + Math.sin(a) * 2.7, a, guest: null }));
    this.guests = [];
    this.piles = [];
    this.helper = null;
    this.nextId = 1;
    this.spawnT = 1.5;
    this.time = 0;
    this.pickT = 0;
    this.dropT = 0;
    this.state = 'play'; // play -> glow -> done
    this.glowT = 0;
    this.events = [];
  }

  get nextUpgrade() { return UPGRADES[this.up] || null; }
  get soaking() { return this.guests.filter((g) => g.state === 'soak').length; }
  get waiting() { return this.guests.filter((g) => g.state === 'wait' || g.state === 'in').length; }
  get gap() { return Math.max(2.6, 6.2 - 0.32 * this.lit); }

  _buy() {
    const u = this.nextUpgrade;
    if (!u || this.coins < u.cost) return false;
    this.coins -= u.cost;
    this.up += 1;
    switch (u.id) {
      case 'teahouse': this.teahouse = true; break;
      case 'stack': this.stackMax = STACK_MAX[1]; break;
      case 'stack2': this.stackMax = STACK_MAX[2]; break;
      case 'speed': this.millPeriod = MILL_PERIOD[1]; break;
      case 'mill2': this.mills.push({ ...MILL_SPOTS[1], tray: 2, t: 0, work: 0 }); break;
      case 'seats': this.seatCount = 6; break;
      case 'seats2': this.seatCount = 8; break;
      case 'helper': this.helper = { x: 30, y: 24, bag: 0, mode: 'seek', face: 1, mill: null, t: 0 }; break;
      default: break;
    }
    this.events.push({ type: 'buy', id: u.id, x: u.x, y: u.y });
    return true;
  }

  _pile(x, y, n) {
    const near = this.piles.find((p) => Math.hypot(p.x - x, p.y - y) < 1.2);
    if (near) near.n += n;
    else this.piles.push({ x, y, n, t: 0 });
  }

  /** input: { dx, dy } direction, length 0..1 */
  step(dt, input = { dx: 0, dy: 0 }) {
    this.events = [];
    if (this.state === 'done') return this.events;
    this.time += dt;
    const me = this.me;
    // walking: a full stack slows a little
    const len = Math.hypot(input.dx, input.dy);
    const sp = Math.max(4.4, 6.4 - me.stack * 0.12);
    if (len > 0.05) {
      me.vx = (input.dx / Math.max(1, len)) * sp;
      me.vy = (input.dy / Math.max(1, len)) * sp;
      if (Math.abs(input.dx) > 0.1) me.face = Math.sign(input.dx);
    } else { me.vx = 0; me.vy = 0; }
    me.x = clamp(me.x + me.vx * dt, 1.5, SIZE.w - 1.5);
    me.y = clamp(me.y + me.vy * dt, 1.5, SIZE.h - 1.5);
    // the water is a pool: walk around it, not through its middle
    const dsx = me.x - SPRING.x;
    const dsy = me.y - SPRING.y;
    const ds = Math.hypot(dsx, dsy);
    if (ds < SPRING.r - 0.6) { me.x = SPRING.x + (dsx / (ds || 1)) * (SPRING.r - 0.6); me.y = SPRING.y + (dsy / (ds || 1)) * (SPRING.r - 0.6); }

    this._mills(dt);
    this._drop(dt);
    this._heat(dt);
    this._guests(dt);
    this._coins(dt);
    this._helper(dt);
    // the glowing pad of the next upgrade
    const u = this.nextUpgrade;
    if (u && Math.hypot(me.x - u.x, me.y - u.y) < PAD_R) this._buy();
    // lanterns
    while (this.lit < LANTERN_AT.length && this.thawed >= LANTERN_AT[this.lit]) {
      this.lit += 1;
      this.events.push({ type: 'lantern', i: this.lit - 1 });
    }
    if (this.state === 'play' && this.lit >= LANTERN_AT.length) { this.state = 'glow'; this.glowT = 0; this.events.push({ type: 'glow' }); }
    if (this.state === 'glow') { this.glowT += dt; if (this.glowT > 3.5) { this.state = 'done'; this.events.push({ type: 'done' }); } }
    return this.events;
  }

  _mills(dt) {
    const me = this.me;
    me.near = null;
    for (const m of this.mills) {
      const d = Math.hypot(me.x - m.pad.x, me.y - m.pad.y);
      const here = d < 2.6;
      if (here) me.near = m;
      m.work = here ? 1 : 0;
      // the mill cuts by itself, quicker with the caretaker beside it
      if (m.tray < TRAY_MAX) {
        m.t += dt * (here ? 1.7 : 1);
        if (m.t >= this.millPeriod) { m.t = 0; m.tray += 1; this.events.push({ type: 'cut', x: m.x, y: m.y }); }
      } else m.t = 0;
      if (here && me.stack < this.stackMax && m.tray > 0) {
        this.pickT += dt;
        while (this.pickT >= 0.07 && m.tray > 0 && me.stack < this.stackMax) {
          this.pickT -= 0.07;
          m.tray -= 1;
          me.stack += 1;
          this.events.push({ type: 'pick', x: m.pad.x, y: m.pad.y });
        }
      }
    }
    if (!me.near) this.pickT = 0;
  }

  _drop(dt) {
    const me = this.me;
    const d = Math.hypot(me.x - SPRING.x, me.y - SPRING.y);
    if (d < SPRING.r + 1.5 && me.stack > 0) {
      this.dropT += dt;
      while (this.dropT >= 0.09 && me.stack > 0) {
        this.dropT -= 0.09;
        me.stack -= 1;
        this.heat = Math.min(1, this.heat + SLICE_HEAT);
        this.events.push({ type: 'drop', x: me.x, y: me.y });
      }
    } else this.dropT = 0;
  }

  _heat(dt) {
    const k = this.easy ? 0.6 : 1;
    this.heat = clamp(this.heat - (0.018 + 0.011 * this.soaking) * k * dt, 0, 1);
  }

  _guests(dt) {
    // new frozen visitors come down the trail; when the line is full they just wait outside the valley
    this.spawnT -= dt;
    if (this.spawnT <= 0 && this.state === 'play') {
      if (this.waiting < QUEUE.length) {
        const kind = KINDS[Math.floor(this.rand() * KINDS.length)];
        this.guests.push({ id: this.nextId++, kind, hue: Math.floor(this.rand() * 6), x: GATE.x + (this.rand() - 0.5) * 3, y: GATE.y + 1, frost: 1, state: 'in', seat: null, qi: 0, t: 0, face: 1, tx: 0, ty: 0 });
        this.events.push({ type: 'arrive' });
        this.spawnT = this.gap * (0.85 + this.rand() * 0.3);
      } else this.spawnT = 0.5;
    }
    const free = [];
    for (let i = 0; i < this.seatCount; i++) if (!this.seats[i].guest) free.push(this.seats[i]);
    const lineup = this.guests.filter((g) => g.state === 'in' || g.state === 'wait').sort((a, b) => a.id - b.id);
    lineup.forEach((g, i) => {
      if (free.length > 0) {
        const seat = free.shift();
        seat.guest = g.id;
        g.seat = seat;
        g.state = 'toSeat';
        g.tx = seat.x; g.ty = seat.y;
      } else { g.qi = i; g.tx = QUEUE[Math.min(i, QUEUE.length - 1)].x; g.ty = QUEUE[Math.min(i, QUEUE.length - 1)].y; }
    });
    const th = this.easy ? 1.25 : 1;
    for (const g of this.guests) {
      const walk = (tx, ty, sp = 3.4) => {
        const d = Math.hypot(tx - g.x, ty - g.y);
        if (d > 0.05) { const s = Math.min(d, sp * dt); g.x += ((tx - g.x) / d) * s; g.y += ((ty - g.y) / d) * s; if (Math.abs(tx - g.x) > 0.05) g.face = Math.sign(tx - g.x); }
        return d;
      };
      switch (g.state) {
        case 'in': case 'wait':
          if (walk(g.tx, g.ty) < 0.3) g.state = 'wait';
          break;
        case 'toSeat':
          if (walk(g.tx, g.ty, 3.6) < 0.25) { g.state = 'soak'; this.events.push({ type: 'splash', x: g.x, y: g.y }); }
          break;
        case 'soak': {
          g.frost -= dt * (0.04 + 0.26 * this.heat) * th;
          if (g.frost <= 0) {
            g.frost = 0;
            this.thawed += 1;
            const out = Math.atan2(g.seat.y - SPRING.y, g.seat.x - SPRING.x);
            this._pile(SPRING.x + Math.cos(out) * (SPRING.r + 1.7), SPRING.y + Math.sin(out) * (SPRING.r + 1.3), 3);
            this.events.push({ type: 'thaw', x: g.x, y: g.y });
            g.seat.guest = null;
            g.seat = null;
            g.state = this.teahouse ? 'toTea' : 'leave';
            g.tx = TEAHOUSE.door.x; g.ty = TEAHOUSE.door.y;
          }
          break;
        }
        case 'toTea':
          if (!this.teahouse) { g.state = 'leave'; break; }
          if (walk(g.tx, g.ty) < 0.3) { g.state = 'tea'; g.t = 0; }
          break;
        case 'tea':
          g.t += dt;
          if (g.t > 3) {
            this._pile(TEAHOUSE.door.x + 0.8, TEAHOUSE.door.y + 2.2, 3);
            this.events.push({ type: 'tea', x: g.x, y: g.y });
            g.state = 'leave';
          }
          break;
        case 'leave':
          if (walk(GATE.x, GATE.y + 1.2, 3.8) < 0.3) g.state = 'gone';
          break;
        default: break;
      }
    }
    this.guests = this.guests.filter((g) => g.state !== 'gone');
  }

  _coins(dt) {
    const me = this.me;
    for (const p of this.piles) p.t += dt;
    for (let i = this.piles.length - 1; i >= 0; i--) {
      const p = this.piles[i];
      if (Math.hypot(me.x - p.x, me.y - p.y) < 1.9) {
        this.coins += p.n;
        this.coinsTotal += p.n;
        this.events.push({ type: 'coin', n: p.n, x: p.x, y: p.y });
        this.piles.splice(i, 1);
      }
    }
  }

  _helper(dt) {
    const hp = this.helper;
    if (!hp) return;
    const go = (tx, ty) => {
      const d = Math.hypot(tx - hp.x, ty - hp.y);
      if (d > 0.01) { const s = Math.min(d, 4.6 * dt); hp.x += ((tx - hp.x) / d) * s; hp.y += ((ty - hp.y) / d) * s; if (Math.abs(tx - hp.x) > 0.05) hp.face = Math.sign(tx - hp.x); }
      return d;
    };
    if (hp.mode === 'carry') {
      if (go(SPRING.x + 0.5, SPRING.y + SPRING.r + 1.2) < 0.6) {
        hp.t += dt;
        while (hp.t >= 0.12 && hp.bag > 0) { hp.t -= 0.12; hp.bag -= 1; this.heat = Math.min(1, this.heat + SLICE_HEAT); this.events.push({ type: 'drop', x: hp.x, y: hp.y }); }
        if (hp.bag <= 0) { hp.mode = 'seek'; hp.mill = null; }
      }
      return;
    }
    // seek: the fullest tray that the caretaker is not standing at
    if (!hp.mill || hp.mill.tray < 1) {
      hp.mill = null;
      let best = 0;
      for (const m of this.mills) if (m !== this.me.near && m.tray > best) { best = m.tray; hp.mill = m; }
    }
    if (hp.mill) {
      if (go(hp.mill.pad.x + 0.8, hp.mill.pad.y) < 0.7) {
        hp.t += dt;
        while (hp.t >= 0.1 && hp.mill.tray > 0 && hp.bag < 4) { hp.t -= 0.1; hp.mill.tray -= 1; hp.bag += 1; }
        if (hp.bag >= 4 || hp.mill.tray <= 0) { if (hp.bag > 0) hp.mode = 'carry'; hp.t = 0; }
      }
    } else if (hp.bag > 0) hp.mode = 'carry';
    else go(26, 26);
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const bt = Number(o.bestTime);
  return {
    bestTime: Number.isFinite(bt) && bt > 0 ? Math.floor(bt) : 0,
    finished: Math.max(0, Math.floor(Number(o.finished)) || 0),
    guests: Math.max(0, Math.floor(Number(o.guests)) || 0),
    muted: !!o.muted,
  };
}
