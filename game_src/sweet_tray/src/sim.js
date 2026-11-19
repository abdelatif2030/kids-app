// «طبق الحلويات» — Sweet Tray: the pure game rules. No DOM, no time source, fully deterministic.
// A level is a pile of sweets in layers on a plate. Items have an id (bigger id = higher in the pile) and a board position (0..100).
// An item is FREE when no living item with a bigger id overlaps it. Tapping a free item moves it into the tray, which keeps
// equal kinds side by side; three of a kind vanish. A full tray (no match possible) loses.
// Solvability: every level's kinds are dealt in triples along the "top first" order (descending id), in windows of at most
// 3 kinds, so clearing the pile from the top never needs more than 6 tray slots. `solve()` proves it by search.

export const LEVELS = 36;
export const TRAY_CAP = 7;
export const MAX_CAP = 8;
export const KIND_COUNT = 12;
export const COMBO_TIME = 5;
export const BONUS_MAX = 100;
export const HELPERS = { undo: 1, shuffle: 2, slot: 1 };

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export function levelParams(n) {
  const lv = Math.max(1, Math.min(LEVELS, Math.floor(n) || 1));
  return {
    n: lv,
    seed: lv * 7919 + 13,
    triples: Math.min(34, 4 + lv),
    kinds: Math.min(KIND_COUNT, 3 + Math.floor(lv / 3)),
    window: lv < 5 ? 1 : lv < 12 ? 2 : 3,
    layers: Math.min(6, 2 + Math.floor(lv / 5)),
    size: Math.max(11, Math.min(15, 15 - lv * 0.12)),
  };
}

const OVERLAP = 0.7; // two sweets overlap when their centres are closer than size * OVERLAP

/** Builds a level: layered positions, then kinds dealt so that a perfect order exists. */
export function makeLevel(n) {
  const p = levelParams(n);
  const r = rng(p.seed);
  const total = p.triples * 3;
  const S = p.size;
  // how many sweets per layer: the bottom layer is the widest
  const w = []; let ws = 0;
  for (let l = 0; l < p.layers; l++) { const v = 1 + (p.layers - l) * 0.45; w.push(v); ws += v; }
  const counts = w.map((v) => Math.floor((v / ws) * total));
  let rest = total - counts.reduce((a, b) => a + b, 0);
  for (let l = 0; rest > 0; l = (l + 1) % p.layers, rest--) counts[l]++;
  const items = [];
  for (let l = 0; l < p.layers; l++) {
    const rx = 37 - l * 1.6; const ry = rx * 0.92;
    let minD = S * 0.84; let tries = 0; const placed = [];
    while (placed.length < counts[l]) {
      const a = r() * Math.PI * 2; const d = Math.sqrt(r());
      const x = 50 + Math.cos(a) * rx * d; const y = 50 + Math.sin(a) * ry * d;
      if (placed.every((q) => Math.hypot(q.x - x, q.y - y) >= minD)) placed.push({ x, y }); else if (++tries > 70) { minD *= 0.93; tries = 0; }
    }
    for (const q of placed) items.push({ id: items.length, x: Math.round(q.x * 10) / 10, y: Math.round(q.y * 10) / 10, layer: l, kind: 0 });
  }
  const over = items.map((a) => items.filter((b) => b.id > a.id && Math.hypot(a.x - b.x, a.y - b.y) < S * OVERLAP).map((b) => b.id));
  // deal kinds along the top-first order in windows of up to `window` kinds, three of each
  const order = items.map((i) => i.id).reverse();
  for (let at = 0; at < order.length; at += 3 * p.window) {
    const chunk = order.slice(at, at + 3 * p.window);
    const pool = Array.from({ length: p.kinds }, (_, k) => k);
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    const kinds = [];
    for (let m = 0; m < chunk.length / 3; m++) kinds.push(pool[m % pool.length], pool[m % pool.length], pool[m % pool.length]);
    for (let i = kinds.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [kinds[i], kinds[j]] = [kinds[j], kinds[i]]; }
    chunk.forEach((id, i) => { items[id].kind = kinds[i]; });
  }
  return { ...p, items, over };
}

// ---------- a search over (alive, tray) states ----------
function freeList(alive, over) {
  const out = [];
  for (let i = 0; i < alive.length; i++) {
    if (!alive[i]) continue;
    let ok = true;
    for (const j of over[i]) if (alive[j]) { ok = false; break; }
    if (ok) out.push(i);
  }
  return out;
}

/** Depth-first search with a greedy move order. Returns the list of ids to tap, or null. */
export function solveState(kinds, over, aliveIn, trayIn, cap = TRAY_CAP, maxNodes = 150000) {
  const alive = Uint8Array.from(aliveIn);
  const tray = trayIn.slice();
  const seen = new Set();
  const path = [];
  let nodes = 0;
  let left = 0; for (const a of alive) left += a;
  const rec = () => {
    if (left === 0) return tray.length === 0;
    if (++nodes > maxNodes) return false;
    const key = `${alive.join('')}|${tray.join(',')}`;
    if (seen.has(key)) return false;
    seen.add(key);
    const cand = freeList(alive, over).map((i) => {
      const k = kinds[i]; const c = tray.filter((t) => t === k).length;
      return { i, s: (c === 2 ? 100 : c * 40) - (c === 0 ? tray.length * 6 : 0) + i * 0.001 };
    }).sort((a, b) => b.s - a.s);
    for (const { i } of cand) {
      const k = kinds[i]; const saved = tray.slice();
      const at = tray.lastIndexOf(k);
      tray.splice(at >= 0 ? at + 1 : tray.length, 0, k);
      if (tray.filter((t) => t === k).length === 3) { for (let q = tray.length - 1; q >= 0; q--) if (tray[q] === k) tray.splice(q, 1); }
      if (tray.length < cap || (left - 1 === 0 && tray.length === 0)) {
        alive[i] = 0; left--; path.push(i);
        if (rec()) return true;
        path.pop(); left++; alive[i] = 1;
      }
      tray.length = 0; tray.push(...saved);
    }
    return false;
  };
  return rec() ? path.slice() : null;
}

/** Proof that a level can be cleared with the tray size. */
export function solve(level, cap = TRAY_CAP, maxNodes) {
  return solveState(level.items.map((i) => i.kind), level.over, level.items.map(() => 1), [], cap, maxNodes);
}

/** The constructive solution: clear from the top down. Always valid for generated levels. */
export function topFirst(level) { return level.items.map((i) => i.id).reverse(); }

// ---------- the game ----------
export class Game {
  constructor(level, helpers = HELPERS) {
    this.level = level;
    this.items = level.items.map((i) => ({ ...i }));
    this.over = level.over;
    this.alive = new Uint8Array(this.items.length).fill(1);
    this.tray = []; // { id, kind }
    this.cap = TRAY_CAP;
    this.score = 0; this.combo = 0; this.comboT = 0; this.maxCombo = 0; this.bonus = 0;
    this.moves = 0; this.matches = 0; this.used = 0;
    this.state = 'play';
    this.helpers = { ...helpers };
    this.snap = null;
  }

  isFree(i) { if (!this.alive[i]) return false; for (const j of this.over[i]) if (this.alive[j]) return false; return true; }
  freeIds() { return freeList(this.alive, this.over); }
  remaining() { let n = 0; for (const a of this.alive) n += a; return n; }
  trayCount(kind) { return this.tray.filter((t) => t.kind === kind).length; }

  _snapshot() {
    this.snap = { alive: this.alive.slice(), kinds: this.items.map((i) => i.kind), tray: this.tray.map((t) => ({ ...t })), score: this.score, combo: this.combo, comboT: this.comboT, maxCombo: this.maxCombo, bonus: this.bonus, moves: this.moves, matches: this.matches };
  }

  /** Tap a sweet. Returns events for the renderer: blocked, pick, match, wand, won, lost. */
  tap(id) {
    if (this.state !== 'play') return [];
    if (!this.isFree(id)) return [{ type: 'blocked', id }];
    this._snapshot();
    const ev = [];
    this.alive[id] = 0; this.moves++;
    const kind = this.items[id].kind;
    const at = this.tray.map((t) => t.kind).lastIndexOf(kind);
    const index = at >= 0 ? at + 1 : this.tray.length;
    this.tray.splice(index, 0, { id, kind });
    ev.push({ type: 'pick', id, index, tray: this.tray.map((t) => t.id) });
    if (this.trayCount(kind) === 3) {
      const ids = this.tray.filter((t) => t.kind === kind).map((t) => t.id);
      this.tray = this.tray.filter((t) => t.kind !== kind);
      this.matches++;
      this.combo = this.comboT > 0 ? this.combo + 1 : 1;
      this.comboT = COMBO_TIME;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      const points = 100 * this.combo;
      this.score += points;
      this.bonus += 18 + 6 * (this.combo - 1);
      ev.push({ type: 'match', kind, ids, combo: this.combo, points });
      if (this.bonus >= BONUS_MAX) { this.bonus = 0; ev.push(...this._wand()); }
    }
    this._check(ev);
    return ev;
  }

  /** The magic wand: finish one kind (tray sweets first, then the topmost ones of the pile). */
  _wand() {
    const left = new Map();
    for (const i of this.items) if (this.alive[i.id]) left.set(i.kind, (left.get(i.kind) || 0) + 1);
    let best = null;
    for (const [kind, n] of left) {
      const c = this.trayCount(kind);
      if (c + n < 3) continue;
      const free = this.freeIds().filter((i) => this.items[i].kind === kind).length;
      const s = c * 10 + free;
      if (!best || s > best.s) best = { kind, s };
    }
    if (!best) return [];
    const ids = []; const fromTray = [];
    for (const t of this.tray) if (t.kind === best.kind) { fromTray.push(t.id); ids.push(t.id); }
    this.tray = this.tray.filter((t) => t.kind !== best.kind);
    for (let i = this.items.length - 1; i >= 0 && ids.length < 3; i--) {
      if (this.alive[i] && this.items[i].kind === best.kind) { this.alive[i] = 0; ids.push(i); }
    }
    this.score += 150;
    return [{ type: 'wand', kind: best.kind, ids, fromTray, points: 150 }];
  }

  _check(ev) {
    if (this.state !== 'play') return;
    if (this.remaining() === 0 && this.tray.length === 0) { this.state = 'won'; ev.push({ type: 'won' }); return; }
    if (this.tray.length >= this.cap) { this.state = 'lost'; ev.push({ type: 'lost' }); }
  }

  tick(dt) {
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) { this.comboT = 0; this.combo = 0; } }
  }

  canUndo() { return !!this.snap && this.helpers.undo > 0 && this.state !== 'won'; }
  undo() {
    if (!this.canUndo()) return false;
    const s = this.snap;
    this.alive = s.alive.slice();
    s.kinds.forEach((k, i) => { this.items[i].kind = k; });
    this.tray = s.tray.map((t) => ({ ...t }));
    Object.assign(this, { score: s.score, combo: s.combo, comboT: s.comboT, maxCombo: s.maxCombo, bonus: s.bonus, moves: s.moves, matches: s.matches });
    this.helpers.undo--; this.used++; this.snap = null; this.state = 'play';
    return true;
  }

  canShuffle() { return this.helpers.shuffle > 0 && this.state === 'play' && this.remaining() > 3; }
  /** Mixes the kinds of the pile (counts stay the same). Prefers a mix that can still be cleared. */
  shuffle() {
    if (!this.canShuffle()) return false;
    const ids = this.items.filter((i) => this.alive[i.id]).map((i) => i.id);
    const base = ids.map((i) => this.items[i].kind);
    const r = rng(this.moves * 131 + this.score + 7);
    const trayKinds = this.tray.map((t) => t.kind);
    let pick = null;
    for (let a = 0; a < 25 && !pick; a++) {
      const ks = base.slice();
      for (let i = ks.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ks[i], ks[j]] = [ks[j], ks[i]]; }
      const all = this.items.map((i) => i.kind);
      ids.forEach((id, i) => { all[id] = ks[i]; });
      if (solveState(all, this.over, this.alive, trayKinds, this.cap, 20000)) pick = ks;
      else if (a === 24) pick = ks;
    }
    ids.forEach((id, i) => { this.items[id].kind = pick[i]; });
    this.helpers.shuffle--; this.used++; this.snap = null;
    return true;
  }

  canSlot() { return this.helpers.slot > 0 && this.cap < MAX_CAP && this.state !== 'won'; }
  extraSlot() {
    if (!this.canSlot()) return false;
    this.cap++; this.helpers.slot--; this.used++;
    if (this.state === 'lost' && this.tray.length < this.cap) this.state = 'play';
    return true;
  }

  stars() {
    if (this.state !== 'won') return 0;
    return 1 + (this.maxCombo >= 3 ? 1 : 0) + (this.maxCombo >= 5 && this.used === 0 ? 1 : 0);
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  if (o.stars && typeof o.stars === 'object') {
    for (const [k, v] of Object.entries(o.stars)) {
      const n = Number(k); const st = Number(v);
      if (Number.isInteger(n) && n >= 1 && n <= LEVELS && Number.isFinite(st)) stars[n] = Math.max(1, Math.min(3, Math.floor(st)));
    }
  }
  let unlocked = Number.isFinite(Number(o.unlocked)) ? Math.floor(Number(o.unlocked)) : 1;
  for (const k of Object.keys(stars)) unlocked = Math.max(unlocked, Number(k) + 1);
  unlocked = Math.max(1, Math.min(LEVELS, unlocked));
  return { unlocked, stars, muted: !!o.muted };
}
