// «السلالم والزلاجات» rules (pure): a 1-30 board in a playground, ladders up and soft slides down (no snakes), the child
// and a friendly bear take turns with a giant die. Ages 3-4 roll 1-3 (smaller numbers to count), older children 1-6.
// Passing 30 is fine (no exact landing). A slide is a fun ride, never a loss. Dice luck: nothing is recorded for the
// dashboard (as in the old game); finishing the race gives the learning star the first time.
import { rng } from '../maze/sim.js';

export const LAST = 30;
export const LADDERS = { 3: 11, 8: 17, 14: 23, 19: 27 };
export const SLIDES = { 16: 6, 22: 13, 26: 18, 29: 21 };

/** Board square [n] (1..30) as column/row on a 5-wide board that zig-zags upwards. */
export function cellXY(n, cols = 5) {
  const i = n - 1;
  const row = Math.floor(i / cols);
  const k = i % cols;
  return { col: row % 2 ? cols - 1 - k : k, row };
}

export class Race {
  constructor(age, seed = Date.now()) {
    this.r = rng(seed);
    this.faces = age <= 4 ? 3 : 6;
    this.pos = [0, 0]; // 0 = the child, 1 = the bear; 0 means at the start, before square 1
    this.turn = 0;
    this.winner = -1;
  }

  roll() { return 1 + Math.floor(this.r() * this.faces); }

  /** Plays [n] for whoever's turn it is: the squares hopped, then a ladder or slide, and whether they won. */
  move(n) {
    if (this.winner >= 0) return null;
    const who = this.turn;
    const from = this.pos[who];
    const hops = [];
    for (let k = 1; k <= n; k++) {
      const sq = Math.min(LAST, from + k);
      hops.push(sq);
      if (sq === LAST) break;
    }
    let at = hops[hops.length - 1];
    let ride = null;
    if (LADDERS[at]) { ride = { kind: 'ladder', from: at, to: LADDERS[at] }; at = LADDERS[at]; }
    else if (SLIDES[at]) { ride = { kind: 'slide', from: at, to: SLIDES[at] }; at = SLIDES[at]; }
    this.pos[who] = at;
    const won = at >= LAST;
    if (won) this.winner = who;
    else this.turn = 1 - who;
    return { who, n, hops, ride, at, won };
  }
}
