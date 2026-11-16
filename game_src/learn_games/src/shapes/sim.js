// «أين الشكل؟» rules (pure): a shape-sorter board with five outlines and a shelf of glossy shapes. The app says "where is
// the red circle?" and the child taps that shape; it flies into its outline on the board and fits there.
//  • age 4: only the shape name ("where is the circle?"), three shapes in different colours;
//  • age 5: shape + colour, four tiles that all differ in both;
//  • age 6: shape + colour, five tiles where some share the colour and some share the shape (so both must be known).
// A wrong tile only wobbles; after two misses the right one glows. Five rounds; skill 'shapes' (colour is in the
// detail); one dashboard event per round.
import { rng } from '../maze/sim.js';

export const SHAPES = [
  { id: 'circle', ar: 'دايرة', the: 'الدايرة', fem: true },
  { id: 'square', ar: 'مربع', the: 'المربع', fem: false },
  { id: 'triangle', ar: 'مثلث', the: 'المثلث', fem: false },
  { id: 'star', ar: 'نجمة', the: 'النجمة', fem: true },
  { id: 'heart', ar: 'قلب', the: 'القلب', fem: false },
];
export const COLORS = [
  { id: 'red', hex: 0xe8302a, m: 'أحمر', f: 'حمرا' },
  { id: 'blue', hex: 0x2a8ae8, m: 'أزرق', f: 'زرقا' },
  { id: 'yellow', hex: 0xffc81a, m: 'أصفر', f: 'صفرا' },
  { id: 'green', hex: 0x2aa84a, m: 'أخضر', f: 'خضرا' },
  { id: 'orange', hex: 0xff8a1a, m: 'برتقالي', f: 'برتقالي' },
];
export const ROUNDS = 5;
export const tilesFor = (age) => (age <= 4 ? 3 : age === 5 ? 4 : 5);
export const withColour = (age) => age >= 5;
export const shapeById = (id) => SHAPES.find((s) => s.id === id);
export const colorById = (id) => COLORS.find((c) => c.id === id);

const adj = (s, c) => (s.fem ? c.f : c.m);
const adjThe = (s, c) => { const w = adj(s, c); return w === 'برتقالي' ? 'البرتقالي' : `ال${w}`; };
/** "فين الدايرة الحمرا؟" (shape only when [c] is null). */
export function question(s, c) { return c ? `فين ${s.the} ${adjThe(s, c)}؟` : `فين ${s.the}؟`; }
/** "دي دايرة حمرا". */
export function reward(s, c) { return c ? `دي ${s.ar} ${adj(s, c)}` : `دي ${s.ar}`; }

export function makeRounds(age, seed) {
  const r = rng(seed);
  const out = [];
  for (let i = 0; i < ROUNDS; i++) {
    let s, c;
    let tries = 0;
    do {
      s = SHAPES[Math.floor(r() * (age <= 4 ? 3 : 5))].id;
      c = COLORS[Math.floor(r() * 5)].id;
      tries++;
    } while (tries < 30 && out.length && out[out.length - 1].shape === s);
    out.push({ shape: s, color: c });
  }
  return out;
}

/** The tiles of one round: [{id, shape, color}], exactly one of them is the answer. */
export function tilesOf(age, target, seed) {
  const r = rng(seed);
  const n = tilesFor(age);
  const shuffle = (a) => a.sort(() => r() - 0.5);
  const key = (t) => `${t.shape}-${t.color}`;
  const tiles = [{ shape: target.shape, color: target.color }];
  const used = new Set([key(tiles[0])]);
  const add = (shape, color) => {
    if (used.has(key({ shape, color }))) return false;
    used.add(key({ shape, color }));
    tiles.push({ shape, color });
    return true;
  };
  const oS = shuffle(SHAPES.map((s) => s.id).filter((x) => x !== target.shape));
  const oC = shuffle(COLORS.map((c) => c.id).filter((x) => x !== target.color));
  if (age <= 5) {
    // every other tile differs in shape AND colour: the asked word decides
    for (let i = 0; i < n - 1; i++) add(oS[i], oC[i]);
  } else {
    // one with the same colour, one with the same shape, the rest other mixes (never the same pair)
    add(oS[0], target.color);
    add(target.shape, oC[0]);
    for (let i = 1; tiles.length < n && i < 30; i++) add(oS[i % oS.length], oC[(i + 1) % oC.length]);
    for (let i = 0; tiles.length < n && i < 80; i++) {
      const s = SHAPES[Math.floor(r() * 5)].id;
      const c = COLORS[Math.floor(r() * 5)].id;
      if (s === target.shape || c === target.color) continue; // never a second answer
      add(s, c);
    }
  }
  return shuffle(tiles).map((t, i) => ({ id: `t${i}`, ...t }));
}

export class ShapesPlay {
  constructor(age, seed = Date.now()) {
    this.age = age;
    this.seed = seed;
    this.targets = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
  }
  get finished() { return this.round >= this.targets.length; }
  get target() { return this.finished ? null : this.targets[this.round]; }
  get askColor() { return withColour(this.age); }
  get tiles() { return this.finished ? [] : tilesOf(this.age, this.target, this.seed + this.round * 53); }
  isAnswer(t) { return t.shape === this.target.shape && (!this.askColor || t.color === this.target.color); }
  get hint() { return this.misses >= 2 ? this.tiles.find((t) => this.isAnswer(t)).id : null; }
  tap(id) {
    if (this.finished) return null;
    const t = this.tiles.find((x) => x.id === id);
    if (!t || !this.isAnswer(t)) { this.misses++; return { ok: false, firstMiss: this.misses === 1 }; }
    const ev = { ok: true, first: this.misses === 0, tile: t };
    this.round++;
    this.misses = 0;
    ev.finished = this.finished;
    return ev;
  }
}
