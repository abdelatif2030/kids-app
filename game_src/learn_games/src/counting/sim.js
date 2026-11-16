// «الحساب والعدّ» rules (pure). A market stall with a tray of apples and a basket.
//  • "give" rounds: the app says "get me three apples"; each apple the child taps hops into the basket and is counted
//    out loud (one to one counting); at the number asked the round is done.
//  • "count" rounds (ages 5-6): some apples sit in the basket and the app asks "how many apples?"; the child taps the
//    number card. A wrong card only wobbles ("count with me": the apples are counted aloud); after two misses the right
//    card glows.
// Ages: 4 → numbers 1-3 (all give), 5 → up to 6, 6 → up to 10. Five rounds; skill 'counting'; one event per round.
import { rng } from '../maze/sim.js';

export const ROUNDS = 5;
export const maxFor = (age) => (age <= 4 ? 3 : age === 5 ? 6 : 10);
/** Counting what is in the basket goes higher: up to twenty for the oldest. */
export const maxCountFor = (age) => (age <= 4 ? 3 : age === 5 ? 6 : 20);
const COUNT_ROUNDS = (age) => (age <= 4 ? [] : age === 5 ? [1, 3] : [1, 3, 4]);

export function askText(n) {
  if (n === 1) return 'هات تفاحة واحدة';
  if (n === 2) return 'هات تفاحتين';
  return `هات ${NUM[n]} تفاحات`;
}
export const COUNT_Q = 'كام تفاحة؟';
export const NUM = ['', 'واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة', 'عشرة'];

export function makeRounds(age, seed) {
  const r = rng(seed);
  const out = [];
  const modes = COUNT_ROUNDS(age);
  for (let i = 0; i < ROUNDS; i++) {
    const max = modes.includes(i) ? maxCountFor(age) : maxFor(age);
    let n;
    let tries = 0;
    do { n = 1 + Math.floor(r() * max); tries++; } while (tries < 20 && (out.length && out[out.length - 1].n === n || (max > 1 && n === 1 && i > 0 && r() < 0.5)));
    out.push({ mode: modes.includes(i) ? 'count' : 'give', n });
  }
  return out;
}

export function optionsFor(age, n, seed) {
  const r = rng(seed);
  const max = maxCountFor(age);
  const pool = [];
  for (let d = -2; d <= 2; d++) if (d && n + d >= 1 && n + d <= Math.max(max, n + 1)) pool.push(n + d);
  pool.sort(() => r() - 0.5);
  return [n, pool[0], pool[1]].sort((a, b) => a - b);
}

export class CountPlay {
  constructor(age, seed = Date.now()) {
    this.age = age;
    this.seed = seed;
    this.rounds = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
    this.picked = 0;
  }
  get finished() { return this.round >= this.rounds.length; }
  get cur() { return this.finished ? null : this.rounds[this.round]; }
  get options() { return this.cur && this.cur.mode === 'count' ? optionsFor(this.age, this.cur.n, this.seed + this.round * 31) : []; }
  get hint() { return this.cur && this.cur.mode === 'count' && this.misses >= 2 ? this.cur.n : null; }

  /** One apple into the basket (give round): {k, done, finished}. */
  pick() {
    const c = this.cur;
    if (!c || c.mode !== 'give') return null;
    this.picked++;
    const ev = { k: this.picked, done: this.picked >= c.n, first: true, n: c.n };
    if (ev.done) this._next(ev);
    return ev;
  }
  /** A number card (count round). */
  choose(v) {
    const c = this.cur;
    if (!c || c.mode !== 'count') return null;
    if (v !== c.n) { this.misses++; return { ok: false, firstMiss: this.misses === 1 }; }
    const ev = { ok: true, first: this.misses === 0, n: c.n };
    this._next(ev);
    return ev;
  }
  _next(ev) {
    this.round++;
    this.misses = 0;
    this.picked = 0;
    ev.finished = this.finished;
  }
}
