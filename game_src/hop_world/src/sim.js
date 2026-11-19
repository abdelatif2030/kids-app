// Hop World with no drawing: a classic side-scrolling platformer (in the spirit of the games kids remember, with an ORIGINAL hero).
// Run right, jump over pits and pipes, bump question blocks for coins and a power-up, stomp the walking bugs, grab coins and reach the
// flag. 8 levels over 4 worlds, each longer. Falling into a pit or touching a bug puts you back at the start of the level (3 lives
// per level, never a hard game over: when lives run out the level simply restarts). Tile grid, AABB physics. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const T = 1; // tile size in world units
export const LEVELS = 8;
export const WORLDS = ['hills', 'cave', 'desert', 'snow'];
const G = 38;
const RUN = 6.2;
const JUMP = 14.4;

export function buildLevel(level, seed) {
  const r = rng(seed + level * 59 + 7);
  const H = 14;
  const len = 90 + level * 18;
  const grid = Array.from({ length: H }, () => Array(len).fill(' '));
  const enemies = [];
  const cps = [{ x: 2 }];
  const set = (x, y, c) => { if (x >= 0 && x < len && y >= 0 && y < H) grid[y][x] = c; };
  const ground = H - 2;
  const flatTo = (x0, x1) => { for (let i = x0; i < x1; i++) { set(i, ground, '#'); set(i, ground + 1, '#'); } };
  const bug = (bx, dir) => enemies.push({ x: bx, y: ground - 1, dir, w: 0.9, dead: false, vx: 0 });
  let x = 12;
  let lastCp = 0;
  flatTo(0, 12);
  while (x < len - 14) {
    const k = r();
    if (x - lastCp >= 34) {
      // a calm stretch with a checkpoint: nothing dangerous, a few coins
      flatTo(x, x + 7);
      for (let i = 0; i < 4; i++) set(x + 2 + i, ground - 2, 'c');
      cps.push({ x: x + 1 });
      lastCp = x; x += 7;
    } else if (k < 0.22) {
      // a pit: 2 tiles wide in the first levels, at most 3 later (a plain tap jump clears 4)
      const gap = 2 + (level >= 2 && r() < 0.5 ? 1 : 0);
      x += gap; flatTo(x, x + 5); x += 5;
    } else if (k < 0.4) {
      // a pipe, 1 or 2 tiles high (never 2 in the very first level)
      flatTo(x, x + 7);
      const ph = level === 0 ? 1 : 1 + Math.floor(r() * 2);
      for (let q = 0; q < ph; q++) { set(x + 3, ground - 1 - q, 'P'); set(x + 4, ground - 1 - q, 'P'); }
      x += 7;
    } else if (k < 0.62) {
      // question blocks with a coin, and a bug walking underneath
      flatTo(x, x + 9);
      const by = ground - 5;
      for (let i = 2; i < 6; i++) set(x + i, by, i === 3 || i === 5 ? '?' : 'B');
      if (r() < 0.6) set(x + 4, by - 1, 'c');
      bug(x + 7, -1);
      x += 9;
    } else if (k < 0.8) {
      // three steps up
      flatTo(x, x + 9);
      for (let st = 0; st < 3; st++) for (let q = 0; q <= st; q++) set(x + 2 + st, ground - 1 - q, 'B');
      x += 9;
    } else {
      // coins in an arc, and (after the first level) one bug
      flatTo(x, x + 7);
      for (let i = 0; i < 4; i++) set(x + 1 + i, ground - 1 - (i % 2), 'c');
      if (level > 1) bug(x + 5, 1);
      x += 7;
    }
  }
  flatTo(x, len);
  if (!enemies.length) bug(Math.floor(len / 2) + 3, -1);
  // a bug somewhere on a long flat road is never inside a pit
  const flagX = len - 6;
  for (let q = 0; q < 8; q++) set(flagX, ground - 1 - q, 'F');
  return { grid, H, len, enemies, flagX, ground, cps, world: WORLDS[Math.floor(level / 2) % 4] };
}

export class World {
  /** opts: { level (0..7), seed, easy } */
  constructor(opts = {}) {
    this.level = clamp(opts.level ?? 0, 0, LEVELS - 1);
    this.easy = !!opts.easy;
    const lv = buildLevel(this.level, opts.seed ?? 5);
    this.grid = lv.grid; this.H = lv.H; this.len = lv.len; this.enemies = lv.enemies.map((e) => ({ ...e, vx: e.dir * 1.6 })); this.flagX = lv.flagX; this.world = lv.world; this.cps = lv.cps; this.cp = lv.cps[0]; this.maxLives = this.easy ? 5 : 3;
    this.lives = this.maxLives; this.coins = 0; this.state = 'play'; this.time = 0; this.events = []; this.big = false; this.mush = [];
    this.p = null; this._spawn();
    this.score = 0;
  }

  _spawn() { this.p = { x: this.cp.x, y: this.H - 4, vx: 0, vy: 0, w: 0.8, h: this.big ? 1.6 : 1.0, ground: false, face: 1, inv: 1.6 }; }

  clone() {
    const c = Object.create(World.prototype);
    Object.assign(c, this);
    c.grid = this.grid.map((row) => row.slice()); c.enemies = this.enemies.map((e) => ({ ...e })); c.mush = this.mush.map((m) => ({ ...m })); c.p = { ...this.p }; c.events = [];
    return c;
  }

  tile(x, y) { const tx = Math.floor(x); const ty = Math.floor(y); if (tx < 0) return '#'; if (tx >= this.len || ty < 0) return ' '; if (ty >= this.H) return ' '; return this.grid[ty][tx]; }
  solid(c) { return c === '#' || c === 'B' || c === '?' || c === 'P' || c === 'U'; }

  /** input: { dir: -1|0|1, jump: bool (held) } */
  step(dt, input = { dir: 0, jump: false }) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt;
    const p = this.p;
    p.inv = Math.max(0, p.inv - dt);
    const target = input.dir * RUN;
    p.vx += clamp(target - p.vx, -30 * dt, 30 * dt) * (input.dir === 0 ? 0.6 : 1);
    if (input.dir !== 0) p.face = input.dir;
    p.coy = p.ground ? 0.1 : Math.max(0, (p.coy || 0) - dt);
    if (input.jump && (p.ground || p.coy > 0) && p.vy >= 0) { p.vy = -JUMP; p.ground = false; p.coy = 0; ev.push({ type: 'jump' }); }
    p.vy += G * dt * (input.jump && p.vy < 0 ? 0.62 : 1);
    p.vy = Math.min(p.vy, 22);
    this._moveX(p, p.vx * dt);
    this._moveY(p, p.vy * dt, ev);
    // enemies
    for (const e of this.enemies) {
      if (e.dead) continue;
      const nx = e.x + e.vx * dt;
      const ahead = this.tile(nx + (e.vx > 0 ? 0.95 : 0), e.y + 0.5);
      const below = this.tile(nx + (e.vx > 0 ? 0.95 : 0), e.y + 1.5);
      if (this.solid(ahead) || !this.solid(below)) e.vx = -e.vx; else e.x = nx;
      // contact
      if (Math.abs(e.x + 0.45 - (p.x + 0.4)) < 0.75 && Math.abs((e.y + 0.5) - (p.y + p.h / 2)) < (p.h + 1) / 2 - 0.05) {
        if (p.vy > 1 && p.y + p.h - 0.3 < e.y + 0.7) { e.dead = true; e.deadAt = this.time; p.vy = -9; this.score += 100; ev.push({ type: 'stomp', x: e.x, y: e.y }); }
        else if (p.inv <= 0) { if (this.big) { this.big = false; p.h = 1.0; p.inv = 1.5; ev.push({ type: 'shrink' }); } else this._lose(ev); }
      }
    }
    // power-up mushrooms
    for (const m of this.mush) { if (m.taken) continue; m.x += m.dir * 1.8 * dt; if (this.solid(this.tile(m.x + (m.dir > 0 ? 0.9 : 0), m.y + 0.5))) m.dir = -m.dir; if (!this.solid(this.tile(m.x + 0.4, m.y + 1.1))) m.y += 6 * dt; if (Math.abs(m.x - p.x) < 0.8 && Math.abs(m.y - p.y) < 1) { m.taken = true; this.big = true; p.h = 1.6; p.y -= 0.6; this.score += 500; ev.push({ type: 'power' }); } }
    for (const c of this.cps) if (c.x > this.cp.x && p.x >= c.x) { this.cp = c; ev.push({ type: 'checkpoint', x: c.x }); }
    // coins
    const cx = Math.floor(p.x + p.w / 2); const cy = Math.floor(p.y + p.h / 2);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if (this.grid[cy + dy] && this.grid[cy + dy][cx + dx] === 'c') { this.grid[cy + dy][cx + dx] = ' '; this.coins += 1; this.score += 10; ev.push({ type: 'coin' }); }
    if (p.y > this.H + 2) this._lose(ev);
    if (p.x + p.w >= this.flagX) { this.state = 'won'; this.stars = this.lives >= (this.easy ? 4 : 3) ? 3 : this.lives >= 2 ? 2 : 1; ev.push({ type: 'won', stars: this.stars }); }
    return ev;
  }

  _lose(ev) {
    if (this.state !== 'play') return;
    this.lives -= 1; this.big = false; ev.push({ type: 'lose' });
    if (this.lives <= 0) { this.lives = 0; this.state = 'lost'; ev.push({ type: 'lost' }); return; }
    this._spawn();
  }

  _moveX(p, dx) {
    p.x += dx;
    for (let ty = Math.floor(p.y + 0.05); ty <= Math.floor(p.y + p.h - 0.05); ty++) {
      for (const tx of [Math.floor(p.x), Math.floor(p.x + p.w)]) {
        if (this.solid(this.tile(tx, ty))) { if (dx > 0) p.x = tx - p.w - 0.001; else if (dx < 0) p.x = tx + 1.001; p.vx = 0; }
      }
    }
    p.x = Math.max(0, p.x);
  }

  _moveY(p, dy, ev) {
    p.y += dy; p.ground = false;
    for (const tx of [Math.floor(p.x + 0.05), Math.floor(p.x + p.w - 0.05)]) {
      const ty = Math.floor(dy > 0 ? p.y + p.h : p.y);
      const c = this.tile(tx, ty);
      if (this.solid(c)) {
        if (dy > 0) { p.y = ty - p.h - 0.001; p.vy = 0; p.ground = true; } else {
          p.y = ty + 1.001; p.vy = 1;
          if (c === '?') {
            this.grid[ty][tx] = 'U'; this.coins += 1; this.score += 50;
            const mush = !this.big && this.mushNext(tx);
            if (mush) this.mush.push({ x: tx, y: ty - 1, dir: 1, taken: false });
            ev.push({ type: 'block', tx, ty, mush });
          } else if (c === 'B' && this.big) { this.grid[ty][tx] = ' '; ev.push({ type: 'brick', tx, ty }); } else ev.push({ type: 'bump', tx, ty });
        }
      }
    }
  }

  mushNext(tx) { return tx % 2 === 1; }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.stars && o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: clamp(Math.floor(Number(o.unlocked)) || 1, 1, LEVELS), stars, coins: Math.max(0, Math.floor(Number(o.coins)) || 0), muted: !!o.muted };
}
