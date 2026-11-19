// Sky Jumper with no drawing (an endless-jumper in the spirit of the classic doodle games, with an ORIGINAL creature): the creature
// bounces up from platform to platform by itself; the child steers it left and right (the screen wraps around). Normal, moving and
// crumbling platforms, springs, a propeller hat and a jetpack, friendly monsters that can be bounced on or shot with a tap.
// Falling just restarts the climb (best height is kept). World units: x 0..10, y up. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const W = 10;
export const G = 24;
export const JUMP = 13.5;
export const SPRING = 21;

export class Climb {
  constructor(opts = {}) {
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 5) + 3);
    this.p = { x: W / 2, y: 1, vy: JUMP, face: 1, fly: 0, flyKind: null, shield: 0 };
    this.plats = [];
    this.mons = [];
    this.items = [];
    this.shots = [];
    this.top = 0; // highest generated y
    this.height = 0; this.best = 0; this.time = 0; this.state = 'play'; this.events = []; this.targetX = W / 2; this.id = 1;
    this.plats.push({ id: this.id++, x: W / 2, y: 0, w: 2.2, kind: 'normal', vx: 0, dead: false });
    this._gen(16);
  }

  steer(v) { this.targetX = clamp(v, 0, 1) * W; }
  shoot() { if (this.state !== 'play') return false; this.shots.push({ x: this.p.x, y: this.p.y + 0.6, vy: 18, life: 1.1 }); this.events.push({ type: 'shoot' }); return true; }

  _gen(upTo) {
    while (this.top < upTo) {
      const level = Math.floor(this.top / 60);
      const gap = (this.easy ? 1.6 : 1.9) + Math.min(1.8, level * 0.35) + this.rand() * 0.8;
      this.top += gap;
      const k = this.rand();
      const kind = k < 0.12 + level * 0.03 ? 'move' : k < 0.2 + level * 0.05 ? 'crumble' : k < 0.26 ? 'spring' : 'normal';
      const pl = { id: this.id++, x: 1 + this.rand() * (W - 2), y: this.top, w: kind === 'spring' ? 1.6 : 2.0 - Math.min(0.5, level * 0.1), kind, vx: kind === 'move' ? (this.rand() < 0.5 ? -1.6 : 1.6) : 0, dead: false };
      this.plats.push(pl);
      if (this.rand() < 0.05 && level >= 1 && !this.easy) this.mons.push({ id: this.id++, x: 1 + this.rand() * (W - 2), y: this.top + 1.5, hp: 1, dx: 1 });
      if (this.rand() < 0.04) this.items.push({ id: this.id++, kind: this.rand() < 0.6 ? 'propeller' : 'jetpack', x: pl.x, y: this.top + 0.8 });
    }
  }

  step(dt) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt;
    const p = this.p;
    // steering with a little smoothing; wraps at the sides
    let dx = this.targetX - p.x;
    if (dx > W / 2) dx -= W; else if (dx < -W / 2) dx += W;
    p.x += clamp(dx, -9 * dt, 9 * dt) * 1.0;
    if (Math.abs(dx) > 0.05) p.face = Math.sign(dx);
    if (p.x < 0) p.x += W; if (p.x > W) p.x -= W;
    p.shield = Math.max(0, p.shield - dt);
    if (p.fly > 0) { p.fly -= dt; p.vy = p.flyKind === 'jetpack' ? 15 : 11; if (p.fly <= 0) { p.flyKind = null; ev.push({ type: 'flyEnd' }); } }
    else p.vy -= G * dt;
    const prevY = p.y;
    p.y += p.vy * dt;
    // landing on platforms from above
    if (p.vy < 0 && p.fly <= 0) {
      for (const pl of this.plats) {
        if (pl.dead) continue;
        if (prevY >= pl.y + 0.05 && p.y <= pl.y + 0.05 && Math.abs(p.x - pl.x) < pl.w / 2 + 0.25) {
          if (pl.kind === 'crumble') { pl.dead = true; ev.push({ type: 'crumble' }); continue; }
          p.vy = pl.kind === 'spring' ? SPRING : JUMP; ev.push({ type: pl.kind === 'spring' ? 'spring' : 'bounce' }); break;
        }
      }
    }
    for (const pl of this.plats) if (pl.kind === 'move' && !pl.dead) { pl.x += pl.vx * dt; if (pl.x < 1 || pl.x > W - 1) pl.vx = -pl.vx; }
    // items, monsters, shots
    for (const it of this.items) { if (it.taken) continue; if (Math.hypot(it.x - p.x, it.y - p.y) < 0.8) { it.taken = true; p.fly = it.kind === 'jetpack' ? 2.6 : 3.2; p.flyKind = it.kind; ev.push({ type: 'power', kind: it.kind }); } }
    for (const m of this.mons) {
      if (m.dead) continue;
      m.x += m.dx * 1.2 * dt; if (m.x < 1 || m.x > W - 1) m.dx = -m.dx;
      if (Math.hypot(m.x - p.x, m.y - p.y) < 0.9) {
        if (p.vy < 0 || p.fly > 0) { m.dead = true; p.vy = JUMP; ev.push({ type: 'squash' }); } else if (p.shield <= 0) { p.vy = -4; p.shield = 1.2; ev.push({ type: 'bonk' }); }
      }
    }
    for (const s of this.shots) { s.y += s.vy * dt; s.life -= dt; for (const m of this.mons) if (!m.dead && Math.hypot(m.x - s.x, m.y - s.y) < 0.9) { m.dead = true; s.life = 0; ev.push({ type: 'squash' }); } }
    this.shots = this.shots.filter((s) => s.life > 0);
    this.height = Math.max(this.height, p.y); this.best = Math.max(this.best, this.height);
    this._gen(this.height + 18);
    // clean up far below
    this.plats = this.plats.filter((pl) => pl.y > this.height - 14);
    this.mons = this.mons.filter((m) => m.y > this.height - 14);
    this.items = this.items.filter((i) => i.y > this.height - 14 && !i.taken);
    if (p.y < this.height - 12) { this.state = 'over'; ev.push({ type: 'over', height: Math.round(this.height * 10) }); }
    return ev;
  }

  get score() { return Math.round(this.height * 10); }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { best: Math.max(0, Math.floor(Number(o.best)) || 0), muted: !!o.muted };
}
