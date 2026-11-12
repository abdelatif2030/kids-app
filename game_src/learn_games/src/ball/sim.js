// «فين الكورة؟» rules (pure): the puppy hides the ball on, under, next to or inside something; the app says where and
// the child taps that place. Ages 3-4: three places; age 5: four; age 6: five. A wrong place only wobbles (no loss);
// after two misses the right place glows brighter. Five rounds; one dashboard event per round (skill 'spatial', first
// try right or not, the place word), like the old game.
import { rng } from '../maze/sim.js';

export const SPOTS = [
  { id: 'on_table', ar: 'فوق الترابيزة', en: 'on the table' },
  { id: 'under_table', ar: 'تحت الترابيزة', en: 'under the table' },
  { id: 'in_box', ar: 'جوه الصندوق', en: 'inside the box' },
  { id: 'beside_box', ar: 'جنب الصندوق', en: 'next to the box' },
  { id: 'beside_table', ar: 'جنب الترابيزة', en: 'next to the table' },
];
export const ROUNDS = 5;
export const spotsFor = (age) => SPOTS.slice(0, age <= 4 ? 3 : age === 5 ? 4 : 5).map((s) => s.id);
export const spotById = (id) => SPOTS.find((s) => s.id === id);

export function sentence(id, en) {
  const s = spotById(id);
  return en ? `The ball is ${s.en}` : `الكورة ${s.ar}`;
}

export function makeRounds(age, seed) {
  const r = rng(seed);
  const spots = spotsFor(age);
  const out = [];
  let bag = [];
  for (let i = 0; i < ROUNDS; i++) {
    if (!bag.length) bag = [...spots].sort(() => r() - 0.5);
    let k = bag.findIndex((s) => s !== out[out.length - 1]);
    if (k < 0) k = 0;
    out.push(bag.splice(k, 1)[0]);
  }
  return out;
}

export class BallPlay {
  constructor(age, seed = Date.now()) {
    this.spots = spotsFor(age);
    this.targets = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
  }

  get finished() { return this.round >= this.targets.length; }
  get target() { return this.finished ? null : this.targets[this.round]; }
  get hint() { return this.misses >= 2 ? this.target : null; }

  /** Taps place [id]: {ok:false} or {ok:true, first, target, finished}. */
  tap(id) {
    if (this.finished) return null;
    if (id !== this.target) { this.misses++; return { ok: false, firstMiss: this.misses === 1 }; }
    const ev = { ok: true, first: this.misses === 0, target: id };
    this.round++;
    this.misses = 0;
    ev.finished = this.finished;
    return ev;
  }
}
