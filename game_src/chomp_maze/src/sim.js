// Chomp Maze with no drawing (a classic maze-chase in the spirit of the arcade games kids remember, with ORIGINAL characters):
// a round yellow chomper eats every dot in a maze while four coloured ghosts wander and chase; power fruits make the ghosts
// scared for a few seconds so they can be eaten. Touching a ghost costs one of Sunny's sweets (never the game:
// the chomper simply restarts at home — there is no losing a maze, only finishing it).
// 8 levels over 4 different mazes, faster and busier each time. Easy mode for the youngest (slower, scared ghosts last longer).
// Deterministic with a seed.
import { rng } from '../../cozy_kit/ui.js';

// '#' wall, '.' dot, 'o' power fruit, ' ' empty path, 'P' chomper start, 'G' ghost house door area start, '-' ghost door
export const MAZES = [
  ['#####################', '#o........#........o#', '#.###.###.#.###.###.#', '#...................#', '#.###.#.#####.#.###.#', '#.....#...#...#.....#', '#####.### # ###.#####', '    #.#       #.#    ', '#####.# ##-## #.#####', '     .  #GGG#  .     ', '#####.# ##### #.#####', '    #.#       #.#    ', '#####.# ##### #.#####', '#........#........ .#', '#.###.###.#.###.###.#', '#o..#.....P.....#..o#', '###.#.#.#####.#.#.###', '#.....#...#...#.....#', '#.#######.#.#######.#', '#...................#', '#####################'],
  ['#####################', '#.........#.........#', '#o###.###.#.###.###o#', '#...................#', '#.###.#.#####.#.###.#', '#.....#...#...#.....#', '#####.### # ###.#####', '    #.#       #.#    ', '#####.# ##-## #.#####', '     .  #GGG#  .     ', '#####.# ##### #.#####', '    #.#       #.#    ', '#####.# ##### #.#####', '#........#..........#', '#.##.###.#.###.##...#', '#o...#...P...#....o.#', '#.##.#.#####.#.##.#.#', '#....#...#...#....#.#', '#.########.########.#', '#...................#', '#####################'],
  ['#####################', '#o.......#.#.......o.#', '#.#####.#.#.#.#####.#', '#...................#', '#.#.###.#####.###.#.#', '#.#.....#...#.....#.#', '#.#####.# # #.#####.#', '    #.......#.#    ', '#####.# ##-## #.#####', '     .  #GGG#  .     ', '#####.# ##### #.#####', '    #.#       #.#    ', '#####.# ##### #.#####', '#........#..........#', '#.###.##.#.##.###...#', '#o....#..P..#.....o.#', '#.###.#.#####.#.###.#', '#.....#...#...#.....#', '#.#######.#.#######.#', '#...................#', '#####################'],
  ['#####################', '#o.................o#', '#.##.####.#.####.##.#', '#...................#', '#.##.#.#######.#.##.#', '#....#....#....#....#', '####.#### # ####.####', '   #.#         #.#   ', '####.# ###-### #.####', '    .  #GGG#G #.    ', '####.# ####### #.####', '   #.#         #.#   ', '####.# ####### #.####', '#........#.........#', '#.##.###.#.###.##.#.#', '#o...#...P...#...o..#', '#.####.#####.#.####.#', '#......#...#...#....#', '#.######.#.########.#', '#...................#', '#####################'],
];
export const LEVELS = 8;
export const GHOSTS = [
  { id: 'rosa', color: '#ff6aa8', scatter: [1, 1] },
  { id: 'bolt', color: '#4ab8ff', scatter: [19, 1] },
  { id: 'sprout', color: '#5af08a', scatter: [1, 19] },
  { id: 'ember', color: '#ff9a3a', scatter: [19, 19] },
];
const DIRS = { l: [-1, 0], r: [1, 0], u: [0, -1], d: [0, 1] };
const OPP = { l: 'r', r: 'l', u: 'd', d: 'u' };

export class Game {
  /** opts: { level (0..7), easy, seed } */
  constructor(opts = {}) {
    this.level = Math.max(0, Math.min(LEVELS - 1, opts.level ?? 0));
    this.easy = !!opts.easy;
    this.rand = rng((opts.seed ?? 5) + 21);
    this.map = MAZES[this.level % MAZES.length].map((row) => row.padEnd(21, ' ').slice(0, 21).split(''));
    this.h = this.map.length; this.w = this.map[0].length;
    this.dots = 0;
    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) { const c = this.map[y][x]; if (c === 'P') { this.home = { x, y }; this.map[y][x] = ' '; } if (c === 'G') this.map[y][x] = ' '; if (c === '.' || c === 'o') this.dots += 1; }
    // drop any dot the chomper can never reach
    const seen = new Set([`${this.home.x},${this.home.y}`]); const qq = [[this.home.x, this.home.y]];
    while (qq.length) { const [x, y] = qq.shift(); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx; const ny = y + dy; if (nx < 0 || nx >= this.w || seen.has(`${nx},${ny}`) || !this.open(nx, ny)) continue; seen.add(`${nx},${ny}`); qq.push([nx, ny]); } }
    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) { const c = this.map[y][x]; if ((c === '.' || c === 'o') && !seen.has(`${x},${y}`)) { this.map[y][x] = ' '; this.dots -= 1; } }
    this.total = this.dots;
    this.sweets = this.easy ? 5 : 3; this.score = 0; this.state = 'play'; this.time = 0; this.scared = 0; this.events = []; this.eatChain = 0;
    this.speed = (this.easy ? 4.6 : 5.4) + this.level * 0.18;
    this.ghostSpeed = (this.easy ? 3.0 : 4.2) + this.level * 0.25;
    this.house = { x: 10, y: 9 };
    this._reset();
  }

  _reset() {
    this.pm = { tx: this.home.x, ty: this.home.y, x: this.home.x, y: this.home.y, s: 0, dir: 'l', want: 'l', moving: false };
    this.ghosts = GHOSTS.map((g, i) => ({ ...g, tx: 9 + (i % 3), ty: 9, x: 9 + (i % 3), y: 9, s: 0, moving: false, dir: 'u', mode: 'house', t: 1.5 + i * 2.2, eaten: false }));
    this.invuln = 1.5;
  }

  open(x, y, door = false) {
    if (x < 0 || x >= this.w) return y === 7 || y === 9 || y === 11 ? true : false; // tunnels
    if (y < 0 || y >= this.h) return false;
    const c = this.map[y][x];
    return c !== '#' && (door || c !== '-');
  }

  setDir(d) { this.pm.want = d; }

  _wrap(a) { if (a.x < -0.5) a.x = this.w - 0.5; if (a.x > this.w - 0.5) a.x = -0.5; }

  _tryMove(a, dir, dist, door = false) {
    // move a actor along its dir by dist (in tiles); turns happen at tile centres
    return [a, dir, dist, door];
  }

  step(dt) {
    const ev = (this.events = []);
    if (this.state !== 'play') return ev;
    this.time += dt; this.invuln = Math.max(0, this.invuln - dt);
    if (this.scared > 0) { this.scared -= dt; if (this.scared <= 0) this.eatChain = 0; }
    this._movePm(dt, ev);
    for (const g of this.ghosts) this._moveGhost(g, dt);
    // collisions
    for (const g of this.ghosts) {
      if (g.mode === 'house' || g.mode === 'eyes') continue;
      if (Math.hypot(g.x - this.pm.x, g.y - this.pm.y) < 0.6) {
        if (this.scared > 0 && !g.eaten) { g.eaten = true; g.mode = 'eyes'; this.eatChain += 1; this.score += 200 * this.eatChain; ev.push({ type: 'eatGhost', n: this.eatChain }); }
        else if (this.invuln <= 0 && g.mode !== 'eyes') { this.sweets = Math.max(0, this.sweets - 1); ev.push({ type: 'caught' }); this._reset(); break; }
      }
    }
    if (this.dots <= 0) { this.state = 'won'; this.stars = this.sweets >= (this.easy ? 4 : 3) ? 3 : this.sweets >= 2 ? 2 : 1; ev.push({ type: 'won', stars: this.stars }); }
    return ev;
  }

  // Actors live on tiles: (tx, ty) is the tile they stand on, `s` (0..1) is the progress toward the next tile in `dir`; x, y are
  // the drawn position (tile + dir * s).
  _pos(a) { const d = DIRS[a.dir]; a.x = a.tx + (a.moving ? d[0] * a.s : 0); a.y = a.ty + (a.moving ? d[1] * a.s : 0); }

  _movePm(dt, ev) {
    const p = this.pm;
    // reversing is allowed any time (like the arcade game)
    if (p.moving && p.want === OPP[p.dir]) { const d = DIRS[p.dir]; p.tx += d[0]; p.ty += d[1]; p.dir = p.want; p.s = 1 - p.s; }
    let dist = this.speed * dt;
    let guard = 6;
    while (dist > 1e-6 && guard-- > 0) {
      if (!p.moving) {
        this._eat(p, ev);
        const want = DIRS[p.want];
        if (this.open(p.tx + want[0], p.ty + want[1])) p.dir = p.want;
        const d = DIRS[p.dir];
        if (!this.open(p.tx + d[0], p.ty + d[1])) break;
        p.moving = true; p.s = 0;
      }
      const step = Math.min(dist, 1 - p.s);
      p.s += step; dist -= step;
      if (p.s >= 1 - 1e-9) {
        const d = DIRS[p.dir];
        p.tx += d[0]; p.ty += d[1]; p.s = 0; p.moving = false;
        if (p.tx < 0) p.tx = this.w - 1; else if (p.tx > this.w - 1) p.tx = 0;
      }
    }
    this._pos(p);
  }

  _eat(p, ev) {
    const c = this.map[p.ty] && this.map[p.ty][p.tx];
    if (c === '.') { this.map[p.ty][p.tx] = ' '; this.dots -= 1; this.score += 10; ev.push({ type: 'dot' }); } else if (c === 'o') { this.map[p.ty][p.tx] = ' '; this.dots -= 1; this.score += 50; this.scared = this.easy ? 10 : 7; this.eatChain = 0; ev.push({ type: 'power' }); }
  }

  _moveGhost(g, dt) {
    if (g.mode === 'house') { g.t -= dt; if (g.t <= 0) { g.mode = 'out'; g.tx = 10; g.ty = 8; g.s = 0; g.moving = false; g.dir = 'u'; this._pos(g); } return; }
    const frightened = this.scared > 0 && !g.eaten;
    const sp = g.mode === 'eyes' ? this.ghostSpeed * 2 : this.ghostSpeed * (frightened ? 0.6 : 1);
    let dist = sp * dt;
    let guard = 6;
    while (dist > 1e-6 && guard-- > 0) {
      if (!g.moving) {
        if (g.mode === 'eyes' && g.tx === 10 && g.ty === 9) { g.mode = 'house'; g.t = 1.2; g.eaten = false; this._pos(g); return; }
        const opts = ['l', 'r', 'u', 'd'].filter((d) => d !== OPP[g.dir] && this.open(g.tx + DIRS[d][0], g.ty + DIRS[d][1], g.mode === 'eyes'));
        const choices = opts.length ? opts : [OPP[g.dir]];
        let tgx; let tgy;
        if (g.mode === 'eyes') { tgx = 10; tgy = 9; } else if (frightened) { tgx = null; } else if (Math.floor(this.time / 9) % 2 === 0 && this.level < 7) { [tgx, tgy] = g.scatter; } else { tgx = this.pm.x; tgy = this.pm.y; if (g.id === 'bolt') { tgx += DIRS[this.pm.dir][0] * 3; tgy += DIRS[this.pm.dir][1] * 3; } if (g.id === 'sprout') { tgx = (tgx + 10) / 2; tgy = (tgy + 10) / 2; } }
        let best = choices[0];
        if (tgx === null) best = choices[Math.floor(this.rand() * choices.length)];
        else { let bd = 1e9; for (const d of choices) { const dd = (g.tx + DIRS[d][0] - tgx) ** 2 + (g.ty + DIRS[d][1] - tgy) ** 2 + (this.rand() < 0.15 ? 6 : 0); if (dd < bd) { bd = dd; best = d; } } }
        g.dir = best; g.moving = true; g.s = 0;
      }
      const step = Math.min(dist, 1 - g.s);
      g.s += step; dist -= step;
      if (g.s >= 1 - 1e-9) { const d = DIRS[g.dir]; g.tx += d[0]; g.ty += d[1]; g.s = 0; g.moving = false; if (g.tx < 0) g.tx = this.w - 1; else if (g.tx > this.w - 1) g.tx = 0; }
    }
    this._pos(g);
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (let i = 1; i <= LEVELS; i++) { const v = Number(o.stars && o.stars[i]); if (v >= 1 && v <= 3) stars[i] = Math.floor(v); }
  return { unlocked: Math.max(1, Math.min(LEVELS, Math.floor(Number(o.unlocked)) || 1)), stars, best: Math.max(0, Math.floor(Number(o.best)) || 0), muted: !!o.muted };
}
