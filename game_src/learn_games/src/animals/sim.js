// «أطعم الحيوان» rules (pure): a hungry animal sits on the grass and the app asks "the rabbit is hungry! what will he
// eat?"; foods wait on plates on a picnic table and the child taps the right one; the animal eats happily and the app
// says what it likes ("the rabbit likes carrots"). A wrong food only makes the animal shake its head kindly; after two
// misses the right plate glows. Ages: 4 → rabbit, cat, dog with three plates; 5 → + monkey, cow; 6 → + bear, mouse,
// chick with four plates. Five rounds; skill 'nature'; one dashboard event per round.
import { rng } from '../maze/sim.js';

export const ANIMALS = [
  { id: 'rabbit', thing: 'bunny', the: 'الأرنب', fem: false, food: 'carrot' },
  { id: 'cat', thing: 'cat', the: 'القطة', fem: true, food: 'fish' },
  { id: 'dog', thing: 'dog', the: 'الكلب', fem: false, food: 'bone' },
  { id: 'monkey', thing: 'monkey', the: 'القرد', fem: false, food: 'banana' },
  { id: 'cow', thing: 'cow', the: 'البقرة', fem: true, food: 'grass' },
  { id: 'bear', thing: 'bear', the: 'الدب', fem: false, food: 'honey' },
  { id: 'mouse', thing: 'mouse', the: 'الفار', fem: false, food: 'cheese' },
  { id: 'chick', thing: 'chick', the: 'الكتكوت', fem: false, food: 'seeds' },
];
export const FOODS = {
  carrot: { the: 'الجزر' },
  fish: { the: 'السمك' },
  bone: { the: 'العضمة' },
  banana: { the: 'الموز' },
  grass: { the: 'الحشيش' },
  honey: { the: 'العسل' },
  cheese: { the: 'الجبنة' },
  seeds: { the: 'الحَب' },
};
export const ROUNDS = 5;
export const poolFor = (age) => ANIMALS.slice(0, age <= 4 ? 3 : age === 5 ? 5 : 8);
export const platesFor = (age) => (age <= 5 ? 3 : 4);
export const animalById = (id) => ANIMALS.find((a) => a.id === id);
export const question = (a) => `${a.the} ${a.fem ? 'جعانة' : 'جعان'}! ${a.fem ? 'هتاكل' : 'هياكل'} إيه؟`;
export const reward = (a) => `${a.the} ${a.fem ? 'بتحب' : 'بيحب'} ${FOODS[a.food].the}`;

export function makeRounds(age, seed) {
  const r = rng(seed);
  const pool = poolFor(age).map((a) => a.id);
  const out = [];
  let bag = [];
  for (let i = 0; i < ROUNDS; i++) {
    if (!bag.length) bag = [...pool].sort(() => r() - 0.5);
    let k = bag.findIndex((x) => x !== out[out.length - 1]);
    if (k < 0) k = 0;
    out.push(bag.splice(k, 1)[0]);
  }
  return out;
}

/** The plates of one round: the right food and other animals' foods, shuffled. */
export function platesOf(age, animalId, seed) {
  const r = rng(seed);
  const right = animalById(animalId).food;
  const others = poolFor(age).map((a) => a.food).filter((f) => f !== right);
  // foods of animals outside the pool may fill in when the pool is small
  for (const a of ANIMALS) if (!others.includes(a.food) && a.food !== right) others.push(a.food);
  const take = [...new Set(others)].sort(() => r() - 0.5).slice(0, platesFor(age) - 1);
  return [right, ...take].sort(() => r() - 0.5);
}

export class AnimalsPlay {
  constructor(age, seed = Date.now()) {
    this.age = age;
    this.seed = seed;
    this.targets = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
  }
  get finished() { return this.round >= this.targets.length; }
  get animal() { return this.finished ? null : animalById(this.targets[this.round]); }
  get plates() { return this.finished ? [] : platesOf(this.age, this.animal.id, this.seed + this.round * 41); }
  get hint() { return this.misses >= 2 ? this.animal.food : null; }
  tap(food) {
    if (this.finished) return null;
    if (food !== this.animal.food) { this.misses++; return { ok: false, firstMiss: this.misses === 1 }; }
    const ev = { ok: true, first: this.misses === 0, animal: this.animal.id };
    this.round++;
    this.misses = 0;
    ev.finished = this.finished;
    return ev;
  }
}
