// «رتّب يومي» rules (pure): the steps of an ordinary day in order. Each round shows a run of consecutive steps,
// shuffled; the child hangs them on the clothesline in the order they happen. Ages 3-4: three steps; age 5: four;
// age 6: five. A wrong card only wiggles (no loss); after two misses the right card glows. Five rounds; one dashboard
// event per round (skill 'sequence', the whole day strip right with no wrong tap). Nothing here is a rule about how a
// family lives: it is the everyday order in most homes (as in the old game).
import { rng } from '../maze/sim.js';

// t = time of day 0 (dawn) .. 1 (night), for the sky in the window
export const STEPS = [
  { id: 'wake', emoji: '🛏️', ar: 'أصحى من النوم', en: 'Wake up', t: 0.05 },
  { id: 'wash', emoji: '🧼', ar: 'أغسل وشّي', en: 'Wash my face', t: 0.12 },
  { id: 'breakfast', emoji: '🥣', ar: 'أفطر', en: 'Eat breakfast', t: 0.2 },
  { id: 'school', emoji: '🎒', ar: 'أروح الحضانة', en: 'Go to school', t: 0.3 },
  { id: 'lunch', emoji: '🍲', ar: 'أتغدّى', en: 'Eat lunch', t: 0.48 },
  { id: 'play', emoji: '🧸', ar: 'ألعب', en: 'Play', t: 0.58 },
  { id: 'dinner', emoji: '🍽️', ar: 'أتعشّى', en: 'Eat dinner', t: 0.72 },
  { id: 'bath', emoji: '🛁', ar: 'آخد دُش', en: 'Have a bath', t: 0.8 },
  { id: 'teeth', emoji: '🪥', ar: 'أغسل سناني', en: 'Brush my teeth', t: 0.88 },
  { id: 'sleep', emoji: '😴', ar: 'أنام', en: 'Sleep', t: 0.97 },
];

export const ROUNDS = 5;
export const lengthFor = (age) => (age <= 4 ? 3 : age === 5 ? 4 : 5);

export function makeRounds(age, seed) {
  const r = rng(seed);
  const k = lengthFor(age);
  const out = [];
  let last = -1;
  for (let i = 0; i < ROUNDS; i++) {
    let start;
    do { start = Math.floor(r() * (STEPS.length - k + 1)); } while (start === last && STEPS.length - k > 0);
    last = start;
    const order = STEPS.slice(start, start + k).map((s) => s.id);
    const shuffled = [...order];
    do { for (let j = shuffled.length - 1; j > 0; j--) { const x = Math.floor(r() * (j + 1)); [shuffled[j], shuffled[x]] = [shuffled[x], shuffled[j]]; } } while (shuffled.every((s, j) => s === order[j]));
    out.push({ order, shuffled });
  }
  return out;
}

export const stepById = (id) => STEPS.find((s) => s.id === id);

export class DayPlay {
  constructor(age, seed = Date.now()) {
    this.rounds = makeRounds(age, seed);
    this.round = 0;
    this.placed = 0;
    this.misses = 0;
    this.roundMissed = false;
  }

  get finished() { return this.round >= this.rounds.length; }
  get current() { return this.rounds[this.round]; }
  get wanted() { return this.finished ? null : this.current.order[this.placed]; }
  get hint() { return this.misses >= 2 ? this.wanted : null; }

  /** Taps a card: {ok:false} or {ok:true, slot, roundDone, first, finished}. */
  tap(id) {
    if (this.finished) return null;
    if (id !== this.wanted) { this.misses++; this.roundMissed = true; return { ok: false }; }
    const slot = this.placed;
    this.placed++;
    this.misses = 0;
    if (this.placed < this.current.order.length) return { ok: true, slot };
    const first = !this.roundMissed;
    this.round++;
    this.placed = 0;
    this.roundMissed = false;
    return { ok: true, slot, roundDone: true, first, finished: this.finished };
  }
}
