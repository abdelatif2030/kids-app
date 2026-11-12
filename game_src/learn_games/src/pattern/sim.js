// «كمّل النمط» rules (pure): a string of wooden beads repeats a pattern and the last bead is missing; the child picks
// which bead comes next among three. Ages 3-4: AB; age 5: AAB or ABB; age 6: ABC. Beads are colours and shapes
// (every bead differs clearly). A wrong bead only wobbles (no loss); after two misses the right one glows. Five rounds;
// one dashboard event per round (skill 'sequence', first try right or not), like the old game.
import { rng } from '../maze/sim.js';

export const BEADS = [
  { id: 'red_ball', color: 0xf0303a, shape: 'ball', ar: 'كورة حمرا', en: 'red ball' },
  { id: 'blue_cube', color: 0x2a7af0, shape: 'cube', ar: 'مكعب أزرق', en: 'blue cube' },
  { id: 'yellow_star', color: 0xffc81a, shape: 'star', ar: 'نجمة صفرا', en: 'yellow star' },
  { id: 'green_heart', color: 0x3ec86a, shape: 'heart', ar: 'قلب أخضر', en: 'green heart' },
  { id: 'purple_ring', color: 0xa86af0, shape: 'ring', ar: 'حلقة بنفسجي', en: 'purple ring' },
  { id: 'orange_drop', color: 0xff8a2a, shape: 'drop', ar: 'نقطة برتقالي', en: 'orange drop' },
];
export const ROUNDS = 5;

export function unitsFor(age, r) {
  if (age <= 4) return [[0, 1]];
  if (age === 5) return r() < 0.5 ? [[0, 0, 1]] : [[0, 1, 1]];
  return [[0, 1, 2]];
}

export function makeRounds(age, seed) {
  const r = rng(seed);
  const out = [];
  let last = '';
  for (let i = 0; i < ROUNDS; i++) {
    const pool = [0, 1, 2, 3, 4, 5].sort(() => r() - 0.5).slice(0, 4);
    const unit = unitsFor(age, r)[0];
    const len = unit.length * 2 + (unit.length - 1); // two full units, then all but the last of the third
    const seq = Array.from({ length: len + 1 }, (_, k) => pool[unit[k % unit.length]]);
    const answer = seq[seq.length - 1];
    const shown = seq.slice(0, -1);
    const wrong = pool.filter((b) => b !== answer).sort(() => r() - 0.5).slice(0, 2);
    const options = [answer, ...wrong].sort(() => r() - 0.5);
    const key = shown.join(',');
    if (key === last) { i--; continue; }
    last = key;
    out.push({ shown: shown.map((b) => BEADS[b].id), options: options.map((b) => BEADS[b].id), answer: BEADS[answer].id, unit: unit.join('') });
  }
  return out;
}

export class PatternPlay {
  constructor(age, seed = Date.now()) {
    this.rounds = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
  }

  get finished() { return this.round >= this.rounds.length; }
  get current() { return this.finished ? null : this.rounds[this.round]; }
  get hint() { return this.misses >= 2 && this.current ? this.current.answer : null; }

  tap(id) {
    if (this.finished) return null;
    const r = this.current;
    if (id !== r.answer) { this.misses++; return { ok: false, firstMiss: this.misses === 1, detail: r.unit }; }
    const ev = { ok: true, first: this.misses === 0, detail: r.unit };
    this.round++;
    this.misses = 0;
    ev.finished = this.finished;
    return ev;
  }
}
