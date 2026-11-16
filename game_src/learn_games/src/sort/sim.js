// «رتّب في مجموعات» rules (pure): five rounds; each round the belt brings four things and the child puts each into the
// basket of its kind (fruit, toys, animals, vehicles). Two baskets for ages 3-4, three for ages 5-6 from round 3.
// A wrong basket only bounces the thing back (no loss); after two misses the right basket glows. One dashboard event
// per thing (skill 'vocab', first try right or not, the thing's word), like the old game.
import { rng } from '../maze/sim.js';

export const GROUPS = {
  fruit: { ar: 'فاكهة', en: 'Fruit', color: 0xff5a5a, items: ['apple', 'banana', 'orange', 'strawberry', 'pear', 'grapes', 'watermelon'] },
  toys: { ar: 'لعب', en: 'Toys', color: 0x4aa8ff, items: ['ball', 'teddy', 'blocks', 'drum', 'yoyo'] },
  animals: { ar: 'حيوانات', en: 'Animals', color: 0x3ec86a, items: ['cat', 'fish', 'chick', 'bunny', 'frog'] },
  vehicles: { ar: 'عربيات', en: 'Vehicles', color: 0xffc23a, items: ['car', 'bus', 'boat', 'plane', 'train'] },
};
export const GROUP_IDS = Object.keys(GROUPS);
export const ROUNDS = 5;
export const PER_ROUND = 4;

export function groupOf(item) { return GROUP_IDS.find((g) => GROUPS[g].items.includes(item)); }

/** How many baskets in round [i] (0-based) for [age]. */
export function basketsFor(age, i) { return age >= 5 && i >= 2 ? 3 : 2; }

export function makeSet(age, seed) {
  const r = rng(seed);
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const used = new Set();
  const rounds = [];
  for (let i = 0; i < ROUNDS; i++) {
    const groups = shuffle([...GROUP_IDS]).slice(0, basketsFor(age, i));
    const items = [];
    // every basket gets at least one thing; then the rest at random
    const slots = shuffle([...groups, ...Array.from({ length: PER_ROUND - groups.length }, () => pick(groups))]);
    for (const g of slots) {
      const fresh = GROUPS[g].items.filter((it) => !used.has(it) && !items.includes(it));
      const it = fresh.length ? pick(fresh) : pick(GROUPS[g].items.filter((x) => !items.includes(x)));
      used.add(it);
      items.push(it);
    }
    rounds.push({ groups, items });
  }
  return rounds;
}

export class SortPlay {
  constructor(age, seed = Date.now()) {
    this.rounds = makeSet(age, seed);
    this.round = 0;
    this.index = 0;
    this.misses = 0;
    this.log = [];
  }

  get finished() { return this.round >= this.rounds.length; }
  get current() { return this.finished ? null : this.rounds[this.round]; }
  get item() { return this.finished ? null : this.current.items[this.index]; }
  get rightBasket() { return this.current.groups.indexOf(groupOf(this.item)); }
  /** after two misses the right basket glows */
  get hint() { return this.misses >= 2 ? this.rightBasket : -1; }

  /** Puts the current thing into basket [b]: {ok, first, item, group, roundDone, finished}. */
  drop(b) {
    if (this.finished) return null;
    const item = this.item;
    const group = groupOf(item);
    const ok = this.current.groups[b] === group;
    if (!ok) { this.misses++; return { ok, item, group, wrong: this.current.groups[b] }; }
    const first = this.misses === 0;
    this.log.push({ item, first });
    this.misses = 0;
    this.index++;
    let roundDone = false;
    if (this.index >= this.current.items.length) { roundDone = true; this.index = 0; this.round++; }
    return { ok, first, item, group, roundDone, finished: this.finished };
  }
}
