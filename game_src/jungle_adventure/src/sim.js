// The game rules: the explorer runs by herself, tap jumps (hold = higher), wall-kicks in shafts, beetles can be
// stomped, bats and spikes hurt, pits send her back to the last flag. Pure logic, no drawing (tested with a robot).
// Kid rules: a hurt is a heart and a short blink, never a scary moment; in easy mode (the youngest) nothing costs a heart.
import { ROWS } from './levels.js';

export const P = {
  RUN: 6.0, // tiles per second
  BOOTS: 1.35, // speed boots multiplier
  JUMP_V: 14.5,
  GRAVITY: 50,
  GRAVITY_HOLD: 20, // while the finger stays down at the start of a jump
  HOLD_MAX: 0.24,
  MAX_FALL: 18,
  WALL_SLIDE: 3.2,
  KICK_VY: 13.5,
  KICK_LOCK: 0.14,
  COYOTE: 0.1,
  BUFFER: 0.13,
  W: 0.7,
  H: 1.35,
};

const SOLID = new Set(['#']);

export class Sim {
  constructor(level, opts = {}) {
    this.level = level;
    this.easy = !!opts.easy;
    this.rows = level.rows;
    this.W = level.width;
    this.events = [];
    this.time = 0;
    this.timeLeft = level.time;
    this.phase = 'play'; // play | won | lost
    this.hearts = 3;
    this.coins = 0;
    this.relics = [];
    this.relicTotal = 0;
    this.items = []; // coins, relics, power-ups
    this.beetles = [];
    this.bats = [];
    this.flags = [];
    this.goal = null;
    const grid = level.rows.map((r) => r.split(''));
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < this.W; x++) {
        const c = grid[y][x];
        const at = { x: x + 0.5, y: y + 0.5 };
        if (c === 'o') this.items.push({ kind: 'coin', ...at, live: true });
        else if (c === 'R') { this.items.push({ kind: 'relic', ...at, live: true, id: this.relicTotal++ }); }
        else if ('SMFH'.includes(c)) this.items.push({ kind: { S: 'shield', M: 'magnet', F: 'boots', H: 'hourglass' }[c], ...at, live: true });
        else if (c === 'b') this.beetles.push({ x: x + 0.5, y: y + 1, vx: -1.3, vy: 0, alive: true, squash: 0 });
        else if (c === 'v') this.bats.push({ x0: x + 0.5, y0: y + 0.5, x: x + 0.5, y: y + 0.5, phase: x * 0.7 });
        else if (c === 'C') this.flags.push({ x: x + 0.5, y: y + 1, up: false });
        else if (c === 'T' || c === 'A') this.goal = { x: x + 0.5, y: y + 1, kind: c === 'A' ? 'altar' : 'totem' };
        if ('oRSMFHbvCTA'.includes(c)) grid[y][x] = ' ';
      }
    }
    this.grid = grid;
    this.endX = this.goal ? this.goal.x : this.W - 2;
    // start: feet on the ground of column 1
    this.spawn = { x: 1.5, y: this._groundBelow(1) };
    this.p = { x: this.spawn.x, y: this.spawn.y, vx: 0, vy: 0, dir: 1, onGround: true, wall: 0, holdT: 9, coyote: 0, buffer: 0, lock: 0, invuln: 0, shield: 0, magnet: 0, boots: 0, run: 0 };
  }

  tile(x, y) {
    if (x < 0) return '#';
    if (y < 0 || y >= ROWS || x >= this.W) return ' ';
    return this.grid[y][x];
  }
  solid(x, y) { return SOLID.has(this.tile(Math.floor(x), Math.floor(y))); }
  _groundBelow(x) {
    for (let y = 0; y < ROWS; y++) if (SOLID.has(this.tile(x, y))) return y;
    return ROWS - 1;
  }

  emit(type, data = {}) { this.events.push({ type, ...data }); }

  /** input: { down: finger/key held, pressed: went down since the last step } */
  step(dt, input) {
    this.events.length = 0;
    dt = Math.min(dt, 0.1);
    const n = Math.max(1, Math.ceil(dt / (1 / 120) - 1e-6));
    for (let i = 0; i < n; i++) this._step(dt / n, { down: input.down, pressed: i === 0 && input.pressed });
  }

  _step(dt, input) {
    if (this.phase !== 'play') return;
    this.time += dt;
    const was = Math.ceil(this.timeLeft);
    this.timeLeft = Math.max(0, this.timeLeft - dt);
    if (Math.ceil(this.timeLeft) !== was && this.timeLeft <= 10 && this.timeLeft > 0) this.emit('tick', { left: Math.ceil(this.timeLeft) });
    const p = this.p;
    for (const k of ['invuln', 'shield', 'magnet', 'boots']) if (p[k] > 0) p[k] = Math.max(0, p[k] - dt);
    if (p.lock > 0) p.lock -= dt;

    // jump / wall-kick with a little forgiveness (coyote time and a press buffer)
    if (input.pressed) p.buffer = P.BUFFER;
    else p.buffer = Math.max(0, p.buffer - dt);
    p.coyote = p.onGround ? P.COYOTE : Math.max(0, p.coyote - dt);
    if (p.buffer > 0) {
      if (p.coyote > 0) {
        p.vy = -P.JUMP_V;
        p.holdT = 0;
        p.onGround = false;
        p.coyote = 0;
        p.buffer = 0;
        this.emit('jump');
      } else if (p.wall !== 0) {
        p.vy = -P.KICK_VY;
        p.dir = -p.wall;
        p.holdT = 0;
        p.lock = P.KICK_LOCK;
        p.buffer = 0;
        this.emit('kick');
      }
    }
    // gravity: lighter while the finger is held at the start of a jump = a higher jump
    let g = P.GRAVITY;
    if (input.down && p.vy < 0 && p.holdT < P.HOLD_MAX) {
      g = P.GRAVITY_HOLD;
      p.holdT += dt;
    } else p.holdT = 9;
    p.vy = Math.min(P.MAX_FALL, p.vy + g * dt);
    if (p.wall !== 0 && !p.onGround && p.vy > P.WALL_SLIDE) p.vy = P.WALL_SLIDE;

    p.vx = p.dir * P.RUN * (p.boots > 0 ? P.BOOTS : 1);
    this._moveX(p, p.vx * dt);
    const wasGround = p.onGround;
    const vyBefore = p.vy;
    this._moveY(p, p.vy * dt);
    if (p.onGround) {
      if (!wasGround) this.emit('land', { hard: vyBefore > 12 });
      p.dir = 1; // back on the ground she always runs on to the right
    }
    p.run += Math.abs(p.vx) * dt;

    this._enemies(dt);
    this._items(dt);
    this._flags();
    if (p.y > ROWS + 1.5) this._fell();
    if (this.goal && p.x >= this.goal.x - 0.3) this._win();
  }

  // --- collisions with the tiles ---------------------------------------------------------------------------------
  _hits(x0, y0, x1, y1) {
    for (let ty = Math.floor(y0); ty <= Math.floor(y1 - 1e-6); ty++) {
      for (let tx = Math.floor(x0); tx <= Math.floor(x1 - 1e-6); tx++) if (SOLID.has(this.tile(tx, ty))) return { tx, ty };
    }
    return null;
  }

  _moveX(p, dx) {
    p.x += dx;
    const left = p.x - P.W / 2;
    const right = p.x + P.W / 2;
    const top = p.y - P.H;
    const bottom = p.y - 0.01;
    p.wall = 0;
    const h = this._hits(left, top, right, bottom);
    if (h) {
      if (dx > 0) { p.x = h.tx - P.W / 2 - 0.001; p.wall = 1; } else if (dx < 0) { p.x = h.tx + 1 + P.W / 2 + 0.001; p.wall = -1; }
    } else {
      // still touching a wall right next to her? (for sliding and kicks)
      const probe = dx >= 0 ? 0.04 : -0.04;
      if (this._hits(left + probe, top + 0.1, right + probe, bottom - 0.1)) p.wall = dx >= 0 ? 1 : -1;
    }
  }

  _moveY(p, dy) {
    const prevBottom = p.y;
    p.y += dy;
    p.onGround = false;
    const left = p.x - P.W / 2 + 0.02;
    const right = p.x + P.W / 2 - 0.02;
    if (dy > 0) {
      const h = this._hits(left, p.y - P.H, right, p.y);
      if (h) {
        p.y = h.ty;
        p.vy = 0;
        p.onGround = true;
        return;
      }
      // thin ledges: only from above
      for (let tx = Math.floor(left); tx <= Math.floor(right - 1e-6); tx++) {
        const ty = Math.floor(p.y);
        if (this.tile(tx, ty) === '=' && prevBottom <= ty + 0.02) {
          p.y = ty;
          p.vy = 0;
          p.onGround = true;
          return;
        }
      }
    } else if (dy < 0) {
      const h = this._hits(left, p.y - P.H, right, p.y - P.H + 0.05);
      if (h) {
        p.y = h.ty + 1 + P.H;
        p.vy = 0;
        this.emit('bonk');
      }
    }
    // standing still on the ground (dy == 0 after landing)
    if (!p.onGround && p.vy >= 0) {
      const below = this._hits(left, p.y, right, p.y + 0.02);
      let ledge = false;
      for (let tx = Math.floor(left); tx <= Math.floor(right - 1e-6); tx++) if (this.tile(tx, Math.floor(p.y + 0.01)) === '=' && Math.abs(p.y - Math.round(p.y)) < 0.02) ledge = true;
      if (below || ledge) p.onGround = true;
    }
  }

  // --- enemies, items, flags ---------------------------------------------------------------------------------------
  _hurt(why) {
    const p = this.p;
    if (p.invuln > 0) return;
    if (p.shield > 0) {
      p.shield = 0;
      p.invuln = 1;
      this.emit('shieldPop');
      return;
    }
    if (!this.easy) this.hearts--;
    p.invuln = 1.6;
    p.vy = Math.min(p.vy, -7);
    this.emit('hurt', { why });
    if (this.hearts <= 0) this._lose();
  }

  _enemies(dt) {
    const p = this.p;
    for (const b of this.beetles) {
      if (!b.alive) { b.squash += dt; continue; }
      // walk, fall, turn at walls and ledges
      b.vy = Math.min(P.MAX_FALL, b.vy + P.GRAVITY * dt);
      const nx = b.x + b.vx * dt;
      const ahead = nx + Math.sign(b.vx) * 0.4;
      if (this.solid(ahead, b.y - 0.3) || !this.solid(ahead, b.y + 0.1)) b.vx = -b.vx;
      else b.x = nx;
      b.y += b.vy * dt;
      if (this.solid(b.x, b.y)) { b.y = Math.floor(b.y); b.vy = 0; }
      if (b.y > ROWS + 2) b.alive = false;
      // meet the explorer
      if (Math.abs(b.x - p.x) < 0.75 && p.y > b.y - 0.75 && p.y - P.H < b.y) {
        if (p.vy > 0 && p.y < b.y - 0.25) {
          b.alive = false;
          b.squash = 0;
          p.vy = -10;
          p.holdT = 0;
          this.emit('stomp', { x: b.x, y: b.y });
        } else this._hurt('beetle');
      }
    }
    for (const bat of this.bats) {
      bat.x = bat.x0 + Math.sin(this.time * 0.9 + bat.phase) * 1.2;
      bat.y = bat.y0 + Math.sin(this.time * 2.6 + bat.phase) * 0.45;
      if (Math.abs(bat.x - p.x) < 0.7 && bat.y > p.y - P.H - 0.25 && bat.y < p.y + 0.15) this._hurt('bat');
    }
    // spikes (lower half of a '^' tile)
    const sy = Math.floor(p.y - 0.2);
    for (let tx = Math.floor(p.x - P.W / 2 + 0.1); tx <= Math.floor(p.x + P.W / 2 - 0.1); tx++) {
      if (this.tile(tx, sy) === '^' && p.y > sy + 0.5) this._hurt('spikes');
    }
  }

  _items(dt) {
    const p = this.p;
    const cx = p.x;
    const cy = p.y - P.H / 2;
    for (const it of this.items) {
      if (!it.live) continue;
      if (it.kind === 'coin' && p.magnet > 0) {
        const dx = cx - it.x;
        const dy = cy - it.y;
        const d = Math.hypot(dx, dy);
        if (d < 4.5) {
          it.x += (dx / d) * Math.min(d, 14 * dt);
          it.y += (dy / d) * Math.min(d, 14 * dt);
        }
      }
      if (Math.abs(it.x - cx) < 0.75 && Math.abs(it.y - cy) < 1.0) {
        it.live = false;
        if (it.kind === 'coin') { this.coins++; this.emit('coin', { total: this.coins, x: it.x, y: it.y }); }
        else if (it.kind === 'relic') { this.relics.push(it.id); this.emit('relic', { n: this.relics.length, all: this.relics.length === this.relicTotal, x: it.x, y: it.y }); }
        else if (it.kind === 'shield') { p.shield = 12; this.emit('shield'); }
        else if (it.kind === 'magnet') { p.magnet = 9; this.emit('magnet'); }
        else if (it.kind === 'boots') { p.boots = 6; this.emit('boots'); }
        else if (it.kind === 'hourglass') { this.timeLeft += 10; this.emit('hourglass'); }
      }
    }
  }

  _flags() {
    const p = this.p;
    for (const f of this.flags) {
      if (!f.up && p.x >= f.x) {
        f.up = true;
        this.spawn = { x: f.x, y: f.y };
        this.emit('checkpoint', { x: f.x, y: f.y });
      }
    }
  }

  _fell() {
    const p = this.p;
    this.emit('fall');
    if (!this.easy) {
      if (p.shield > 0) p.shield = 0;
      else this.hearts--;
    }
    if (this.hearts <= 0) return this._lose();
    Object.assign(p, { x: this.spawn.x, y: this.spawn.y, vx: 0, vy: 0, dir: 1, onGround: true, wall: 0, invuln: 1.6 });
    this.emit('respawn');
  }

  _win() {
    this.phase = 'won';
    const bonus = Math.ceil(this.timeLeft);
    this.result = { won: true, coins: this.coins, relics: this.relics.length, relicTotal: this.relicTotal, timeLeft: bonus, bonus };
    this.emit('win', this.result);
  }

  _lose() {
    this.phase = 'lost';
    this.result = { won: false, coins: this.coins, relics: this.relics.length, relicTotal: this.relicTotal, timeLeft: Math.ceil(this.timeLeft), bonus: 0 };
    this.emit('lose', this.result);
  }

  get progress() { return Math.max(0, Math.min(1, this.p.x / this.endX)); }
}
