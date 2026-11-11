// «الفأر والجبنة» rules (pure, no drawing): a perfect maze (every cell reachable, one way between any two cells),
// the mouse starts top-left and the cheese waits bottom-right. A swipe or an arrow runs the mouse along the corridor
// until a crossing or a corner, so small children need few moves. Bumping a wall is exploring, never a mistake.
export const N = 0, E = 1, S = 2, W = 3;
export const DX = [0, 1, 0, -1];
export const DY = [-1, 0, 1, 0];
const BIT = [1, 2, 4, 8];

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Five mazes a set, bigger with age (the old game had three: 3-4 / 4-5 / 5-7 cells a side). */
export function mazePlan(age) {
  if (age <= 3) return [3, 3, 4, 4, 4];
  if (age === 4) return [3, 4, 4, 5, 5];
  if (age === 5) return [4, 5, 5, 6, 6];
  return [5, 6, 6, 7, 7];
}

export class Maze {
  constructor(size, seed) {
    this.size = size;
    this.open = new Uint8Array(size * size); // bit per open side
    const r = rng(seed);
    const seen = new Uint8Array(size * size);
    const stack = [[0, 0]];
    seen[0] = 1;
    while (stack.length) {
      const [x, y] = stack[stack.length - 1];
      const dirs = [N, E, S, W].filter((d) => this.inside(x + DX[d], y + DY[d]) && !seen[this.idx(x + DX[d], y + DY[d])]);
      if (!dirs.length) { stack.pop(); continue; }
      const d = dirs[Math.floor(r() * dirs.length)];
      const nx = x + DX[d], ny = y + DY[d];
      this.open[this.idx(x, y)] |= BIT[d];
      this.open[this.idx(nx, ny)] |= BIT[(d + 2) % 4];
      seen[this.idx(nx, ny)] = 1;
      stack.push([nx, ny]);
    }
  }

  idx(x, y) { return y * this.size + x; }
  inside(x, y) { return x >= 0 && y >= 0 && x < this.size && y < this.size; }
  canMove(x, y, d) { return this.inside(x, y) && (this.open[this.idx(x, y)] & BIT[d]) !== 0; }
  exits(x, y) { return [N, E, S, W].filter((d) => this.canMove(x, y, d)); }
  get goal() { return [this.size - 1, this.size - 1]; }

  /** Cells the mouse runs through going [d] from (x,y): stops at a crossing, a corner, a dead end or the cheese. */
  run(x, y, d) {
    const cells = [];
    let cx = x, cy = y;
    const [gx, gy] = this.goal;
    while (this.canMove(cx, cy, d)) {
      cx += DX[d];
      cy += DY[d];
      cells.push([cx, cy]);
      if (cx === gx && cy === gy) break;
      const ex = this.exits(cx, cy);
      if (ex.length !== 2 || !ex.includes(d)) break; // a crossing, a corner or a dead end
    }
    return cells;
  }

  /** Shortest way from (x,y) to the cheese, including the start cell. */
  solve(x = 0, y = 0) {
    const n = this.size;
    const prev = new Int32Array(n * n).fill(-1);
    const start = this.idx(x, y);
    prev[start] = start;
    const q = [start];
    const goal = this.idx(...this.goal);
    while (q.length) {
      const i = q.shift();
      if (i === goal) break;
      const cx = i % n, cy = Math.floor(i / n);
      for (const d of this.exits(cx, cy)) {
        const j = this.idx(cx + DX[d], cy + DY[d]);
        if (prev[j] < 0) { prev[j] = i; q.push(j); }
      }
    }
    const path = [];
    for (let i = goal; ; i = prev[i]) { path.unshift([i % n, Math.floor(i / n)]); if (i === start) break; }
    return path;
  }
}

/** One set of five mazes. */
export class MazeSet {
  constructor(age, seed = Date.now()) {
    this.plan = mazePlan(age);
    this.seed = seed;
    this.round = 0;
    this.moves = 0;
    this.bumps = 0;
    this._new();
  }

  _new() {
    this.maze = new Maze(this.plan[this.round], this.seed + this.round * 7919);
    this.x = 0;
    this.y = 0;
    this.visited = new Set(['0,0']);
  }

  get finished() { return this.round >= this.plan.length; }
  get atCheese() { const [gx, gy] = this.maze.goal; return this.x === gx && this.y === gy; }

  /** Moves [d]: {type:'bump'} or {type:'move', cells, won}. */
  move(d) {
    if (this.finished || this.atCheese) return null;
    const cells = this.maze.run(this.x, this.y, d);
    if (!cells.length) { this.bumps++; return { type: 'bump', d }; }
    this.moves++;
    for (const [cx, cy] of cells) this.visited.add(`${cx},${cy}`);
    [this.x, this.y] = cells[cells.length - 1];
    return { type: 'move', d, cells, won: this.atCheese };
  }

  /** The next maze (after the cheese); returns false when the set is finished. */
  next() {
    this.round++;
    if (this.finished) return false;
    this._new();
    return true;
  }

  /** The next few cells towards the cheese (for the glowing hint). */
  hint(k = 3) { return this.maze.solve(this.x, this.y).slice(1, k + 1); }

  /** The direction of the first step towards the cheese. */
  hintDir() {
    const p = this.maze.solve(this.x, this.y);
    if (p.length < 2) return null;
    const [nx, ny] = p[1];
    return [N, E, S, W].find((d) => this.x + DX[d] === nx && this.y + DY[d] === ny);
  }
}
