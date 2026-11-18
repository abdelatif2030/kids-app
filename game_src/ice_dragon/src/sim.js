// Ice Dragon with no drawing. A small hero walks a maze of ice blocks above turquoise water; a giant segmented dragon winds
// along the channels around it. The hero fires by itself at the nearest dragon segment, shrine or barrel in range. Numbered
// shrines (shoot them to zero) give an ally or the triple shot. Explosive barrels can be PUSHED (walk into them) toward the
// channel: when the dragon touches one, or a shot hits it, it blasts every segment nearby. Break all armored segments to win.
// The hero is never hurt: the dragon only roars. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const AREA = 8; // the ice area is [-8, 8]
export const LOOP = 10.8; // the dragon's channel is a square ring at this distance
export const SEG = 1.7;
export const RANGE = 10;

export const LEVELS = [
  { id: 1, ar: 'كهف الصقيع', en: 'Frost Cave', seg: 11, hp: 6, speed: 2.0, shrines: 3, barrels: 3 },
  { id: 2, ar: 'قناة الفيروز', en: 'Turquoise Channel', seg: 15, hp: 9, speed: 2.3, shrines: 4, barrels: 3 },
  { id: 3, ar: 'عرين التنين', en: 'Dragon Lair', seg: 20, hp: 13, speed: 2.6, shrines: 4, barrels: 4 },
];

/** Point on the square ring for arc length s (clockwise from the top-left corner). */
export function ringPoint(s) {
  const side = LOOP * 2;
  const per = side * 4;
  let d = ((s % per) + per) % per;
  const k = Math.floor(d / side);
  d -= k * side;
  switch (k) {
    case 0: return { x: -LOOP + d, z: -LOOP, a: 0 };
    case 1: return { x: LOOP, z: -LOOP + d, a: Math.PI / 2 };
    case 2: return { x: LOOP - d, z: LOOP, a: Math.PI };
    default: return { x: -LOOP, z: LOOP - d, a: -Math.PI / 2 };
  }
}

// ice blocks inside the area (centre x, z, half width, half depth): a small maze with open lanes
export const WALLS = [
  { x: -3.5, z: -3.5, hw: 2.2, hd: 0.5 }, { x: 3.5, z: -3.5, hw: 2.2, hd: 0.5 },
  { x: -3.5, z: 3.5, hw: 2.2, hd: 0.5 }, { x: 3.5, z: 3.5, hw: 2.2, hd: 0.5 },
  { x: 0, z: 0, hw: 0.5, hd: 2.2 }, { x: -6.2, z: 0, hw: 0.5, hd: 1.4 }, { x: 6.2, z: 0, hw: 0.5, hd: 1.4 },
];

function blocked(x, z, r = 0.45) {
  if (Math.abs(x) > AREA - 0.4 || Math.abs(z) > AREA - 0.4) return true;
  for (const w of WALLS) if (Math.abs(x - w.x) < w.hw + r && Math.abs(z - w.z) < w.hd + r) return true;
  return false;
}

export class Hunt {
  /** opts: { level (0..2), easy, seed } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, 2);
    this.cfg = LEVELS[this.level];
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 3) + 41);
    this.hero = { x: 0, z: 5.6, vx: 0, vz: 0, face: -Math.PI / 2 };
    this.trail = [];
    this.allies = 0;
    this.weapon = 1; // 1 single, 2 triple, 3 wide triple
    this.dmg = 1.6;
    this.fireT = 0.2;
    this.bullets = [];
    this.s = 0; // dragon head arc length
    this.segs = Array.from({ length: this.cfg.seg }, (_, i) => ({ i, hp: this.cfg.hp * (i === 0 ? 1.6 : 1), max: this.cfg.hp * (i === 0 ? 1.6 : 1), alive: true, x: 0, z: 0 }));
    this.shrines = [];
    const spots = [[-6.2, -6], [6.2, -6], [-6.2, 6.2], [6.2, 6.2], [0, -6.4], [0, 6.6]];
    const kinds = ['ally', 'triple', 'ally', 'ally'];
    for (let i = 0; i < this.cfg.shrines; i++) this.shrines.push({ id: i + 1, x: spots[i][0], z: spots[i][1], hp: 8 + i * 5 + this.level * 4, kind: kinds[i % 4], dead: false });
    this.barrels = [];
    const bs = [[-2, 2], [2, -2], [-5, 5.5], [5.2, 1.6]];
    for (let i = 0; i < this.cfg.barrels; i++) this.barrels.push({ id: i + 1, x: bs[i][0], z: bs[i][1], dead: false });
    this.blasts = [];
    this.time = 0;
    this.state = 'play';
    this.events = [];
    this.kills = 0;
    this._place();
  }

  get alive() { return this.segs.filter((s) => s.alive).length; }

  _place() {
    // each segment follows the head along the ring
    for (const sg of this.segs) { const p = ringPoint(this.s - sg.i * SEG); sg.x = p.x; sg.z = p.z; sg.a = p.a; }
  }

  /** input: { dx, dz } direction (length <= 1) */
  step(dt, input = { dx: 0, dz: 0 }) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt;
    const h = this.hero;
    // walk, blocked by ice; pushes a barrel when walking into it
    const len = Math.hypot(input.dx, input.dz);
    const sp = 5.4;
    if (len > 0.05) {
      const vx = (input.dx / Math.max(1, len)) * sp;
      const vz = (input.dz / Math.max(1, len)) * sp;
      h.face = Math.atan2(vz, vx);
      for (const [ax, az] of [[vx * dt, 0], [0, vz * dt]]) {
        const nx = h.x + ax;
        const nz = h.z + az;
        let free = !blocked(nx, nz, 0.4);
        for (const b of this.barrels) {
          if (b.dead) continue;
          if (Math.hypot(nx - b.x, nz - b.z) < 0.95) {
            const bx = b.x + ax * 1.0;
            const bz = b.z + az * 1.0;
            const clash = this.barrels.some((o) => o !== b && !o.dead && Math.hypot(o.x - bx, o.z - bz) < 0.9) || this.shrines.some((s) => !s.dead && Math.hypot(s.x - bx, s.z - bz) < 1.2);
            if (!clash && !blocked(bx, bz, 0.45)) { b.x = bx; b.z = bz; } else free = false;
          }
        }
        if (free) { h.x = nx; h.z = nz; }
      }
    }
    this.trail.unshift({ x: h.x, z: h.z });
    if (this.trail.length > 400) this.trail.pop();
    // the dragon winds along the channel
    this.s += this.cfg.speed * (this.easy ? 0.8 : 1) * dt;
    this._place();
    // the dragon's body triggers barrels it touches
    for (const b of this.barrels) {
      if (b.dead) continue;
      for (const sg of this.segs) {
        if (sg.alive && Math.hypot(sg.x - b.x, sg.z - b.z) < 2.0) { this._blast(b); break; }
      }
    }
    // shooting: nearest target in range; allies shoot too
    this.fireT -= dt;
    if (this.fireT <= 0) {
      this.fireT = 0.3;
      const shooters = [{ x: h.x, z: h.z }];
      for (let k = 1; k <= this.allies; k++) { const t = this.trail[Math.min(this.trail.length - 1, k * 14)]; if (t) shooters.push(t); }
      for (const sh of shooters) {
        const tg = this._target(sh);
        if (!tg) continue;
        const a0 = Math.atan2(tg.z - sh.z, tg.x - sh.x);
        const spread = this.weapon === 1 ? [0] : this.weapon === 2 ? [-0.18, 0, 0.18] : [-0.34, -0.17, 0, 0.17, 0.34];
        for (const sp2 of spread) this.bullets.push({ x: sh.x, z: sh.z, vx: Math.cos(a0 + sp2) * 24, vz: Math.sin(a0 + sp2) * 24, life: 0.8, d: this.dmg });
      }
      if (this.bullets.length) ev.push({ type: 'volley' });
    }
    for (const b of this.bullets) {
      const x0 = b.x;
      const z0 = b.z;
      b.x += b.vx * dt;
      b.z += b.vz * dt;
      b.life -= dt;
      if (b.life <= 0) continue;
      // hit things along the step
      for (const sg of this.segs) {
        if (!sg.alive || b.life <= 0) continue;
        if (this._near(x0, z0, b.x, b.z, sg.x, sg.z, 0.9)) { b.life = 0; sg.hp -= b.d; ev.push({ type: 'hit', x: sg.x, z: sg.z }); if (sg.hp <= 0) this._kill(sg, ev); }
      }
      for (const s of this.shrines) {
        if (s.dead || b.life <= 0) continue;
        if (this._near(x0, z0, b.x, b.z, s.x, s.z, 1.0)) {
          b.life = 0; s.hp -= b.d;
          if (s.hp <= 0) { s.dead = true; this._reward(s, ev); }
        }
      }
      for (const br of this.barrels) {
        if (br.dead || b.life <= 0) continue;
        if (this._near(x0, z0, b.x, b.z, br.x, br.z, 0.7)) { b.life = 0; this._blast(br); }
      }
      for (const w of WALLS) if (Math.abs(b.x - w.x) < w.hw && Math.abs(b.z - w.z) < w.hd) b.life = 0;
    }
    this.bullets = this.bullets.filter((b) => b.life > 0);
    for (const bl of this.blasts) bl.t += dt;
    this.blasts = this.blasts.filter((bl) => bl.t < 0.7);
    if (this.alive === 0) { this.state = 'won'; this.stars = this.time < 70 + this.level * 25 ? 3 : this.time < 130 + this.level * 40 ? 2 : 1; ev.push({ type: 'won', stars: this.stars }); }
    return ev;
  }

  _near(x0, z0, x1, z1, cx, cz, r) {
    const dx = x1 - x0; const dz = z1 - z0;
    const l2 = dx * dx + dz * dz || 1e-9;
    const t = clamp(((cx - x0) * dx + (cz - z0) * dz) / l2, 0, 1);
    return Math.hypot(x0 + dx * t - cx, z0 + dz * t - cz) < r;
  }

  _target(from) {
    let best = null;
    let bd = RANGE;
    const consider = (o, w = 1) => { const d = Math.hypot(o.x - from.x, o.z - from.z) / w; if (d < bd && this._clear(from, o)) { bd = d; best = o; } };
    for (const sg of this.segs) if (sg.alive) consider(sg, 1);
    for (const s of this.shrines) if (!s.dead) consider(s, 1.0);
    return best;
  }

  /** A straight shot is clear when no ice block lies between. */
  _clear(a, b) {
    for (let k = 1; k < 8; k++) { const t = k / 8; const x = a.x + (b.x - a.x) * t; const z = a.z + (b.z - a.z) * t; for (const w of WALLS) if (Math.abs(x - w.x) < w.hw && Math.abs(z - w.z) < w.hd) return false; }
    return true;
  }

  _kill(sg, ev) { sg.alive = false; this.kills += 1; ev.push({ type: 'break', x: sg.x, z: sg.z }); }

  _reward(s, ev) {
    if (s.kind === 'ally') { this.allies = Math.min(8, this.allies + 2); ev.push({ type: 'ally', x: s.x, z: s.z }); } else { this.weapon = Math.min(3, this.weapon + 1); ev.push({ type: 'triple', x: s.x, z: s.z }); }
    this.dmg += 0.2;
  }

  _blast(b) {
    b.dead = true;
    const ev = this.events;
    this.blasts.push({ x: b.x, z: b.z, t: 0 });
    let n = 0;
    for (const sg of this.segs) if (sg.alive && Math.hypot(sg.x - b.x, sg.z - b.z) < 5) { sg.hp -= 22 + this.level * 6; n += 1; if (sg.hp <= 0) this._kill(sg, ev); }
    ev.push({ type: 'blast', x: b.x, z: b.z, n });
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= 3; i++) { const v = o.stars && Number(o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(3, Math.floor(Number(o.unlocked)) || 1)), stars, muted: !!o.muted };
}
