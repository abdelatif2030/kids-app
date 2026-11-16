// «كنز الجزيرة» rules (pure): an island map of cols x cols sand squares with landmarks (palm, rock, hut, pond, flag)
// and one hidden treasure. The parrot gives clues that are ALL true and together leave exactly one square, so a clue
// never misleads and the answer can always be reasoned out (same rule as the old game). Ages 3-4: 3x3, one direct clue
// (above/below/left/right of a landmark). Age 5: 4x4, direct clues or "next to". Age 6: 4x4, any clue, sometimes two.
// Five maps a set. One dashboard event per map (skill 'spatial'): found it without a wrong dig.
import { rng } from '../maze/sim.js';

export const MARKS = ['palm', 'rock', 'hut', 'pond', 'flag'];
export const KINDS = ['above', 'below', 'left', 'right', 'next', 'row', 'col'];
const DIRECT = ['above', 'below', 'left', 'right'];

export function holds(kind, mark, cell, cols) {
  const x = cell % cols, y = Math.floor(cell / cols);
  const lx = mark.cell % cols, ly = Math.floor(mark.cell / cols);
  switch (kind) {
    case 'next': return Math.abs(x - lx) + Math.abs(y - ly) === 1;
    case 'row': return y === ly && x !== lx;
    case 'col': return x === lx && y !== ly;
    case 'above': return x === lx && y === ly - 1; // further up the screen
    case 'below': return x === lx && y === ly + 1;
    case 'left': return y === ly && x === lx - 1; // on the screen's left
    case 'right': return y === ly && x === lx + 1;
    default: return false;
  }
}

export function planFor(age) {
  if (age <= 4) return { cols: 3, marks: 2, kinds: DIRECT, maxClues: 1 };
  if (age === 5) return { cols: 4, marks: 3, kinds: [...DIRECT, 'next'], maxClues: 2 };
  return { cols: 4, marks: 3, kinds: KINDS, maxClues: 2 };
}

export function candidates(map) {
  const out = [];
  for (let c = 0; c < map.cols * map.cols; c++) {
    if (map.marks.some((m) => m.cell === c)) continue;
    if (map.clues.every((k) => holds(k.kind, k.mark, c, map.cols))) out.push(c);
  }
  return out;
}

export function makeMap(age, r) {
  const p = planFor(age);
  for (let attempt = 0; attempt < 800; attempt++) {
    const cells = Array.from({ length: p.cols * p.cols }, (_, i) => i);
    for (let i = cells.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [cells[i], cells[j]] = [cells[j], cells[i]]; }
    const ids = [...MARKS].sort(() => r() - 0.5).slice(0, p.marks);
    const marks = ids.map((id, i) => ({ id, cell: cells[i] }));
    const treasure = cells[p.marks];
    const all = [];
    for (const m of marks) for (const kind of p.kinds) if (holds(kind, m, treasure, p.cols)) all.push({ kind, mark: m });
    all.sort(() => r() - 0.5);
    // prefer one clue that says it all; otherwise build up to maxClues
    const single = all.find((c) => candidates({ cols: p.cols, marks, clues: [c] }).length === 1);
    if (single) return { cols: p.cols, marks, treasure, clues: [single] };
    if (p.maxClues > 1) {
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const clues = [all[i], all[j]];
          if (candidates({ cols: p.cols, marks, clues }).length === 1) return { cols: p.cols, marks, treasure, clues };
        }
      }
    }
  }
  const marks = [{ id: 'palm', cell: 0 }];
  return { cols: 3, marks, treasure: 1, clues: [{ kind: 'right', mark: marks[0] }] };
}

const NAME = { palm: ['النخلة', 'the palm tree'], rock: ['الصخرة', 'the rock'], hut: ['الكوخ', 'the hut'], pond: ['البركة', 'the pond'], flag: ['العلم', 'the flag'] };
const SAY = {
  above: ['فوق', 'above'], below: ['تحت', 'below'], left: ['شمال', 'left of'], right: ['يمين', 'right of'],
  next: ['جنب', 'next to'], row: ['في نفس صف', 'in the same row as'], col: ['في نفس عمود', 'in the same column as'],
};

/** The parrot's words for a clue (Egyptian Arabic or English). */
export function clueText(c, en) {
  const i = en ? 1 : 0;
  return en ? `The treasure is ${SAY[c.kind][1]} ${NAME[c.mark.id][1]}` : `الكنز ${SAY[c.kind][0]} ${NAME[c.mark.id][0]}`;
}

export class Hunt {
  constructor(age, seed = Date.now()) {
    this.age = age;
    this.r = rng(seed);
    this.round = 0;
    this.rounds = 5;
    this.map = makeMap(age, this.r);
    this.misses = 0;
    this.dug = new Set();
  }

  get finished() { return this.round >= this.rounds; }

  /** Digs at [cell]: {type:'mark'} (a landmark is there), {type:'empty'} or {type:'found', first}. */
  dig(cell) {
    if (this.finished) return null;
    if (this.map.marks.some((m) => m.cell === cell)) return { type: 'mark' };
    if (cell === this.map.treasure) return { type: 'found', first: this.misses === 0 };
    if (!this.dug.has(cell)) { this.dug.add(cell); this.misses++; }
    return { type: 'empty', misses: this.misses };
  }

  next() {
    this.round++;
    this.misses = 0;
    this.dug = new Set();
    if (!this.finished) this.map = makeMap(this.age, this.r);
    return !this.finished;
  }
}
