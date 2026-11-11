// «طريق التنين الجليدي» — Frost Coil: the rules with no drawing. A grid of wooden tiles, each with an ice tube
// (straight or curved; crosses and frozen tiles later). Tap a tile to turn it a quarter turn. Build an unbroken ice
// path from the little ice dragon (it enters the bottom-left tile from the left) to the portal (it leaves the
// top-right tile from the top) before the moves run out. A star on the path is a bonus. Twelve levels, 3x3 to 5x5.
// Each level is made from a fixed seed: a real path is laid first, then the tiles are turned, so every level can be
// solved and the moves always leave room to spare.

export const N = 1;
export const E = 2;
export const S = 4;
export const W = 8;
const DIRS = [[N, -1, 0], [E, 0, 1], [S, 1, 0], [W, 0, -1]]; // [bit, dRow, dCol]
export const OPP = { [N]: S, [S]: N, [E]: W, [W]: E };

/** One quarter turn clockwise: N->E->S->W->N. */
export const turn = (m) => ((m << 1) | (m >> 3)) & 15;
export const turnN = (m, k) => { let x = m; for (let i = 0; i < ((k % 4) + 4) % 4; i++) x = turn(x); return x; };

export const LEVELS = [
  { id: 1, rows: 3, cols: 3, slack: 10, seed: 11 },
  { id: 2, rows: 3, cols: 3, slack: 9, seed: 23 },
  { id: 3, rows: 3, cols: 3, slack: 8, seed: 37 },
  { id: 4, rows: 4, cols: 4, slack: 9, seed: 41, frozen: 1 },
  { id: 5, rows: 4, cols: 4, slack: 8, seed: 53, frozen: 1 },
  { id: 6, rows: 4, cols: 4, slack: 8, seed: 67, frozen: 1, cross: 1 },
  { id: 7, rows: 5, cols: 4, slack: 9, seed: 71, frozen: 2, cross: 1 },
  { id: 8, rows: 5, cols: 4, slack: 8, seed: 83, frozen: 2, cross: 1 },
  { id: 9, rows: 5, cols: 4, slack: 8, seed: 97, frozen: 2, cross: 2 },
  { id: 10, rows: 5, cols: 5, slack: 9, seed: 101, frozen: 2, cross: 2 },
  { id: 11, rows: 5, cols: 5, slack: 8, seed: 113, frozen: 3, cross: 2 },
  { id: 12, rows: 5, cols: 5, slack: 8, seed: 127, frozen: 3, cross: 2 },
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

/** A self-avoiding path from the bottom-left cell to the top-right cell (a fair length, a few bends). */
function layPath(rows, cols, rand) {
  const start = [rows - 1, 0];
  const goal = [0, cols - 1];
  const want = Math.round(rows * cols * (0.55 + rand() * 0.25));
  for (let attempt = 0; attempt < 400; attempt++) {
    const path = [start];
    const seen = new Set([`${start[0]},${start[1]}`]);
    let ok = false;
    for (let step = 0; step < rows * cols * 2; step++) {
      const [r, c] = path[path.length - 1];
      if (r === goal[0] && c === goal[1]) { ok = path.length >= Math.min(want, rows + cols - 1); break; }
      const opts = DIRS.map(([, dr, dc]) => [r + dr, c + dc]).filter(([nr, nc]) => nr >= 0 && nc >= 0 && nr < rows && nc < cols && !seen.has(`${nr},${nc}`));
      if (!opts.length) break;
      // walk towards the goal once the path is long enough, wander before that
      opts.sort((a, b) => (Math.abs(a[0] - goal[0]) + Math.abs(a[1] - goal[1])) - (Math.abs(b[0] - goal[0]) + Math.abs(b[1] - goal[1])));
      const pick = path.length >= want || rand() < 0.35 ? opts[0] : opts[Math.floor(rand() * opts.length)];
      path.push(pick);
      seen.add(`${pick[0]},${pick[1]}`);
    }
    if (ok) return path;
  }
  // a plain L shape always works
  const p = [];
  for (let c = 0; c < cols; c++) p.push([rows - 1, c]);
  for (let r = rows - 2; r >= 0; r--) p.push([r, cols - 1]);
  return p;
}

const dirBetween = (a, b) => DIRS.find(([, dr, dc]) => a[0] + dr === b[0] && a[1] + dc === b[1])[0];

/** Makes a level: tiles { mask (the openings now), base (the shape), solved (a correct mask), locked, star }. */
export function makeLevel(index, easy = false) {
  const L = LEVELS[index];
  const rand = rng(L.seed * 7919 + 1);
  const { rows, cols } = L;
  const path = layPath(rows, cols, rand);
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    tiles.push([]);
    for (let c = 0; c < cols; c++) {
      // off the path: a random straight or curve (some crosses later)
      const base = rand() < 0.45 ? N | S : N | E;
      tiles[r].push({ r, c, base, mask: turnN(base, Math.floor(rand() * 4)), onPath: false, locked: false, star: false });
    }
  }
  path.forEach(([r, c], i) => {
    const inDir = i === 0 ? W : OPP[dirBetween(path[i - 1], path[i])];
    const outDir = i === path.length - 1 ? N : dirBetween(path[i], path[i + 1]);
    const need = inDir | outDir;
    const straight = need === (N | S) || need === (E | W);
    const t = tiles[r][c];
    t.base = straight ? N | S : N | E;
    t.solved = need;
    t.onPath = true;
    t.idx = i;
  });
  // crosses: a cross tile works both ways and never needs turning
  let crosses = L.cross ?? 0;
  for (const row of tiles) for (const t of row) if (!t.onPath && crosses > 0 && rand() < 0.3) { t.base = 15; t.mask = 15; t.cross = true; crosses--; }
  // the star sits on a path tile near the middle of the path
  const mid = path[Math.floor(path.length / 2)];
  tiles[mid[0]][mid[1]].star = true;
  // turn the path tiles away from their answer; a few frozen tiles stay right (they cannot be turned)
  const pathTiles = path.map(([r, c]) => tiles[r][c]);
  let frozen = L.frozen ?? 0;
  for (const t of pathTiles) {
    if (frozen > 0 && !t.star && t.idx > 0 && t.idx < path.length - 1 && rand() < 0.35) { t.mask = t.solved; t.locked = true; frozen--; continue; }
    let k = 1 + Math.floor(rand() * 3);
    t.mask = turnN(t.solved, k);
    if (t.mask === t.solved) t.mask = turn(t.mask); // straight tiles: two turns can land on the answer again
  }
  const min = pathTiles.reduce((a, t) => a + turnsTo(t), 0);
  const moves = min + L.slack + (easy ? Math.ceil(min * 0.5) + 4 : 0);
  return { id: L.id, rows, cols, tiles, path, min, moves };
}

/** Quarter turns needed to bring a tile to an answer (any mask that gives the same openings). */
export function turnsTo(t) {
  if (t.locked || t.cross) return 0;
  for (let k = 0; k < 4; k++) if (turnN(t.mask, k) === t.solved) return k;
  return 0;
}

/** Follows the ice from the dragon. Returns the cells it reaches in order and whether it gets to the portal. */
export function trace(level) {
  const { rows, cols, tiles } = level;
  let r = rows - 1;
  let c = 0;
  let inSide = W;
  const cells = [];
  const seen = new Set();
  for (let guard = 0; guard < rows * cols * 2; guard++) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return { cells, done: false };
    const t = tiles[r][c];
    if (!(t.mask & inSide)) return { cells, done: false };
    const key = `${r},${c},${inSide}`;
    if (seen.has(key)) return { cells, done: false };
    seen.add(key);
    // a cross passes straight on; others leave by their other opening
    const out = t.mask === 15 ? OPP[inSide] : t.mask & ~inSide;
    cells.push({ r, c, inSide, out });
    if (r === 0 && c === cols - 1 && out === N) return { cells, done: true };
    const d = DIRS.find(([b]) => b === out);
    if (!d) return { cells, done: false };
    r += d[1];
    c += d[2];
    inSide = OPP[out];
  }
  return { cells, done: false };
}

export class Puzzle {
  constructor(index, easy = false) {
    this.index = index;
    this.level = makeLevel(index, easy);
    this.movesLeft = this.level.moves;
    this.state = 'play'; // play -> won | out
    this.events = [];
    this.result = null;
    this.flow = trace(this.level);
  }

  /** Tap a tile: a quarter turn (frozen and cross tiles don't turn). */
  tap(r, c) {
    if (this.state !== 'play') return null;
    const t = this.level.tiles[r]?.[c];
    if (!t) return null;
    if (t.locked || t.cross) return { type: 'stuck', r, c };
    t.mask = turn(t.mask);
    this.movesLeft--;
    const before = this.flow.cells.length;
    this.flow = trace(this.level);
    const ev = { type: 'turn', r, c, reach: this.flow.cells.length, grew: this.flow.cells.length > before };
    if (this.flow.done) {
      this.state = 'won';
      const star = this.flow.cells.some((x) => this.level.tiles[x.r][x.c].star);
      const spare = this.movesLeft;
      const stars = 1 + (star ? 1 : 0) + (spare >= Math.ceil(this.level.moves * 0.3) ? 1 : 0);
      this.result = { won: true, stars, star, movesLeft: spare, coins: 10 + stars * 5 };
      ev.won = true;
    } else if (this.movesLeft <= 0) {
      this.state = 'out';
      this.result = { won: false, stars: 0, coins: 0 };
      ev.out = true;
    }
    return ev;
  }
}

/** A robot for the tests: turns each path tile straight to its answer (the shortest way). */
export function solve(p) {
  for (const [r, c] of p.level.path) {
    const t = p.level.tiles[r][c];
    let k = turnsTo(t);
    while (k-- > 0 && p.state === 'play') p.tap(r, c);
  }
  return p.state;
}

export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const c = Math.floor(Number(s.coins));
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, coins: Number.isFinite(c) && c > 0 ? Math.min(c, 99999) : 0, muted: s.muted === true };
}
