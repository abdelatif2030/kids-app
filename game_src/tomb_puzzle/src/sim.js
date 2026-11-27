import { LEVELS, TOMBS } from './levels.js';

// Pure, deterministic rules of «سليم وكنوز الفراعنة» (Salim and the Pharaohs' Treasure). No DOM, no three.js: used by the game and by node tests.
// Legend of a level (array of strings):
//   # wall, ' ' void, . floor, ~ carpet floor, @ start, E exit, X pushable block, K ankh key, L locked door (spends a key),
//   1-4 sun plates (open doors A-D when every plate of that number is pressed by a block or the explorer),
//   A-D doors, T unlit brazier (light it by walking into it), G gate (opens when every brazier is lit),
//   c crumbling floor (falls after you step off it), p pit (a pushed block fills it).
export const DIRS = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] };
export const DIR_KEYS = ['U', 'D', 'L', 'R'];
export const T = { FLOOR: 1, CRUMBLE: 2, CRACKED: 3, PIT: 4 };

export function parseLevel(def) {
  const rows = def.rows;
  const h = rows.length;
  const w = Math.max(...rows.map((r) => r.length));
  const n = w * h;
  const L = {
    id: def.id, tomb: def.tomb, par: def.par || 0, hint: def.hint, arrows: def.arrows || [], rows, w, h, n,
    wall: new Uint8Array(n).fill(1), carpet: new Uint8Array(n), terr0: new Uint8Array(n),
    plateAt: new Int8Array(n).fill(-1), doorAt: new Int8Array(n).fill(-1), keyAt: new Int8Array(n).fill(-1),
    lockAt: new Int8Array(n).fill(-1), torchAt: new Int8Array(n).fill(-1), gateAt: new Uint8Array(n),
    start: -1, exit: -1, platesByGrp: [[], [], [], []], doors: [], keyCells: [], lockCells: [], torchCells: [], gateCells: [],
    blocks0: [], dyn: [],
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ch = rows[y][x] || ' ';
      const i = y * w + x;
      if (ch === ' ' || ch === '#') continue;
      L.wall[i] = 0; L.terr0[i] = T.FLOOR;
      if (ch === '~') L.carpet[i] = 1;
      else if (ch === '@') L.start = i;
      else if (ch === 'E') L.exit = i;
      else if (ch === 'X') L.blocks0.push(i);
      else if (ch === 'K') { L.keyAt[i] = L.keyCells.length; L.keyCells.push(i); }
      else if (ch === 'L') { L.lockAt[i] = L.lockCells.length; L.lockCells.push(i); }
      else if (ch === 'T') { L.torchAt[i] = L.torchCells.length; L.torchCells.push(i); }
      else if (ch === 'G') { L.gateAt[i] = 1; L.gateCells.push(i); }
      else if (ch >= '1' && ch <= '4') { const g = ch.charCodeAt(0) - 49; L.plateAt[i] = g; L.platesByGrp[g].push(i); }
      else if (ch >= 'A' && ch <= 'D') { const g = ch.charCodeAt(0) - 65; L.doorAt[i] = g; L.doors.push(i); }
      else if (ch === 'c') { L.terr0[i] = T.CRUMBLE; L.dyn.push(i); }
      else if (ch === 'p') { L.terr0[i] = T.PIT; L.dyn.push(i); }
      else if (ch !== '.') throw new Error(`level ${def.id}: unknown char ${ch}`);
    }
  }
  L.torchFull = (1 << L.torchCells.length) - 1;
  L.keyFull = (1 << L.keyCells.length) - 1;
  return L;
}

export function initState(L) {
  return { p: L.start, blocks: L.blocks0.slice().sort((a, b) => a - b), terr: L.terr0.slice(), keys: 0, locks: 0, torches: 0, held: 0, moves: 0, falls: 0, won: false };
}
export function cloneState(s) { return { ...s, blocks: s.blocks.slice(), terr: s.terr.slice() }; }

export function groupPressed(L, s, g) {
  const ps = L.platesByGrp[g];
  if (!ps.length) return false;
  for (const c of ps) if (s.p !== c && !s.blocks.includes(c)) return false;
  return true;
}
export function pressedMask(L, s) { let m = 0; for (let g = 0; g < 4; g++) if (groupPressed(L, s, g)) m |= 1 << g; return m; }
/** A door is open while its plates are pressed, or while somebody stands in the doorway (it never crushes). */
export function doorOpen(L, s, c) {
  const g = L.doorAt[c];
  if (g < 0) return true;
  if (s.p === c || s.blocks.includes(c)) return true;
  return groupPressed(L, s, g);
}
export function gateOpen(L, s) { return L.torchCells.length > 0 && s.torches === L.torchFull; }
export function lockOpen(L, s, c) { const i = L.lockAt[c]; return i < 0 || ((s.locks >> i) & 1) === 1; }

function canPushTo(L, s, n) {
  if (L.wall[n]) return false;
  const tt = s.terr[n];
  if (tt !== T.FLOOR && tt !== T.PIT) return false;
  if (s.blocks.includes(n)) return false;
  if (L.torchAt[n] >= 0) return false;
  if (L.gateAt[n] && !gateOpen(L, s)) return false;
  if (L.doorAt[n] >= 0 && !doorOpen(L, s, n)) return false;
  if (L.lockAt[n] >= 0 && !lockOpen(L, s, n)) return false;
  if (L.keyAt[n] >= 0 && !((s.keys >> L.keyAt[n]) & 1)) return false;
  if (n === L.exit || n === s.p) return false;
  return true;
}

/** One move of the explorer. Returns { s, ev, changed, fell }. A fall resets the room (the explorer is back at the entrance). */
export function step(L, s0, dir) {
  const [dx, dy] = DIRS[dir];
  const w = L.w;
  const x = s0.p % w; const y = (s0.p / w) | 0;
  const tx = x + dx; const ty = y + dy;
  const bump = (why) => ({ s: s0, ev: [{ type: 'bump', why, dir }], changed: false, fell: false });
  if (s0.won) return bump('won');
  if (tx < 0 || ty < 0 || tx >= w || ty >= L.h) return bump('wall');
  const t = ty * w + tx;
  if (L.wall[t]) return bump('wall');
  if (s0.terr[t] === T.PIT) return bump('pit');
  const s = cloneState(s0);
  const ev = [];
  const mask0 = pressedMask(L, s0);
  let moved = false;
  const ti = L.torchAt[t];
  if (ti >= 0) {
    if ((s.torches >> ti) & 1) return bump('brazier');
    s.torches |= 1 << ti; ev.push({ type: 'light', cell: t, idx: ti, dir });
    if (s.torches === L.torchFull) ev.push({ type: 'gate', open: true });
  } else {
    if (L.gateAt[t] && !gateOpen(L, s0)) return bump('gate');
    if (!doorOpen(L, s0, t)) return bump('door');
    const li = L.lockAt[t];
    if (li >= 0 && !((s.locks >> li) & 1)) {
      if (s.held > 0) { s.locks |= 1 << li; s.held--; ev.push({ type: 'unlock', cell: t }); } else return bump('lock');
    }
    const bi = s.blocks.indexOf(t);
    if (bi >= 0) {
      const nx = tx + dx; const ny = ty + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= L.h) return bump('block');
      const n = ny * w + nx;
      if (!canPushTo(L, s0, n)) return bump('block');
      s.blocks.splice(bi, 1);
      if (s.terr[n] === T.PIT) { s.terr[n] = T.FLOOR; ev.push({ type: 'push', from: t, to: n, fill: true, dir }); } else {
        s.blocks.push(n); s.blocks.sort((a, b) => a - b); ev.push({ type: 'push', from: t, to: n, fill: false, dir });
      }
    }
    const from = s.p;
    s.p = t; moved = true;
    ev.push({ type: 'move', from, to: t, dir });
    const ki = L.keyAt[t];
    if (ki >= 0 && !((s.keys >> ki) & 1)) { s.keys |= 1 << ki; s.held++; ev.push({ type: 'key', cell: t, idx: ki }); }
    if (t === L.exit) {
      s.won = true; s.moves++; ev.push({ type: 'win' });
      return { s, ev, changed: true, fell: false };
    }
    // crumbling floor: leaving it cracks it; a cracked tile falls at the end of the NEXT move
    if (s.terr[from] === T.CRUMBLE) { s.terr[from] = T.CRACKED; ev.push({ type: 'crack', cell: from }); s._fresh = from; }
  }
  let fell = false;
  for (const c of L.dyn) {
    if (s.terr[c] === T.CRACKED && c !== s._fresh) { s.terr[c] = T.PIT; ev.push({ type: 'crumble', cell: c }); if (s.p === c) fell = true; }
  }
  delete s._fresh;
  if (fell) {
    const r = initState(L); r.falls = s0.falls + 1;
    ev.push({ type: 'fall' });
    return { s: r, ev, changed: true, fell: true };
  }
  s.moves++;
  const mask1 = pressedMask(L, s);
  for (let g = 0; g < 4; g++) if (((mask0 ^ mask1) >> g) & 1) ev.push({ type: 'plate', grp: g, on: !!((mask1 >> g) & 1) });
  return { s, ev, changed: true, fell: false };
}

export function stateKey(L, s) {
  let k = `${s.p}|${s.blocks.join(',')}|${s.keys}|${s.locks}|${s.torches}|`;
  for (const c of L.dyn) k += s.terr[c];
  return k;
}

/** Breadth-first search for the shortest solution. allKeys: must also pick up every ankh before the exit. */
export function solve(L, from = initState(L), opts = {}) {
  const { allKeys = false, maxStates = 2000000 } = opts;
  const states = [from]; const parent = [-1]; const mv = [''];
  const seen = new Set([stateKey(L, from)]);
  for (let i = 0; i < states.length; i++) {
    if (states.length > maxStates) return { found: false, states: states.length, capped: true };
    const s = states[i];
    for (const d of DIR_KEYS) {
      const r = step(L, s, d);
      if (!r.changed || r.fell) continue;
      const ns = r.s;
      if (ns.won) {
        if (allKeys && ns.keys !== L.keyFull) continue;
        let path = d; let j = i;
        while (parent[j] >= 0) { path = mv[j] + path; j = parent[j]; }
        return { found: true, path, length: path.length, states: states.length };
      }
      const k = stateKey(L, ns);
      if (seen.has(k)) continue;
      seen.add(k); states.push(ns); parent.push(i); mv.push(d);
    }
  }
  return { found: false, states: states.length };
}

/** The next move to suggest from here (prefers the all-keys route). null when the room is stuck. */
export function hintMove(L, s) {
  let r = solve(L, s, { allKeys: true, maxStates: 300000 });
  if (!r.found) r = solve(L, s, { allKeys: false, maxStates: 300000 });
  return r.found ? r.path[0] : null;
}

/** Stars are for completion + collection ONLY (house kind rule). The ankh keys are the room's collectible:
 *  1 star for reaching the exit, +1 for finding at least one ankh key on the way, +1 for finding EVERY key the
 *  room offers. Move count NEVER gates a star; `par` survives only as a best-moves sparkle hint in the UI. */
export function starsFor(L, s) {
  if (!s.won) return 0;
  if (s.keys === L.keyFull) return 3;
  return s.keys !== 0 ? 2 : 1;
}

/** Moves with undo / reset. A fall can be undone too. */
export class Puzzle {
  constructor(L) { this.L = L; this.s = initState(L); this.hist = []; }
  move(dir) {
    const r = step(this.L, this.s, dir);
    if (r.changed) { this.hist.push(this.s); if (this.hist.length > 500) this.hist.shift(); this.s = r.s; }
    return r;
  }
  undo() { if (!this.hist.length) return false; this.s = this.hist.pop(); return true; }
  reset() { if (!this.hist.length && this.s.moves === 0) return false; this.hist.push(this.s); this.s = initState(this.L); return true; }
}

export function normalizeSave(sv) {
  const o = sv && typeof sv === 'object' ? sv : {};
  const num = (v, d) => (Number.isFinite(v) ? v : d);
  const map = (m) => { const r = {}; if (m && typeof m === 'object') for (const k of Object.keys(m)) if (Number.isFinite(m[k])) r[k] = m[k]; return r; };
  // The cap is the room count (20 since Phase 2F). Old 3-tomb saves keep their unlocked value (<= 12) and their
  // per-room stars/keys/best maps untouched — room ids never moved, so they migrate cleanly.
  return { unlocked: Math.max(1, Math.min(20, num(o.unlocked, 1))), stars: map(o.stars), keys: map(o.keys), best: map(o.best), muted: !!o.muted };
}

/** Museum book entries for a save: one exhibit per tomb. An exhibit is OPEN once every room of its tomb has been
 * completed (stars > 0); it then shows the tomb's collected ankh keys and stars. Pure and derived entirely from the
 * existing save (stars/keys maps) — no new persistence, so old saves show their tombs exactly as completed. */
export function museumEntries(sv) {
  const s = normalizeSave(sv);
  return TOMBS.map((tomb, ti) => {
    const rooms = LEVELS.filter((l) => l.tomb === ti);
    const done = rooms.filter((l) => (s.stars[l.id] || 0) > 0).length;
    return {
      tomb, rooms: rooms.length, done, complete: rooms.length > 0 && done === rooms.length,
      keys: rooms.reduce((a, l) => a + (s.keys[l.id] || 0), 0), totalKeys: rooms.reduce((a, l) => a + parseLevel(l).keyCells.length, 0),
      stars: rooms.reduce((a, l) => a + (s.stars[l.id] || 0), 0),
    };
  });
}
