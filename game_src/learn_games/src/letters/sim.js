// «صيد الحروف» rules (pure): fish carry Arabic letters; the app asks "where is the letter ب?" and the child taps that
// fish. Right: the fish jumps into the bucket and the app says the letter with a word that starts with it ("الباء زي
// بطة") and a picture. A wrong fish only wiggles; after two misses the right fish glows. Five rounds, skill letters_ar,
// one dashboard event per round (first try right or not, the letter).
import { rng } from '../maze/sim.js';

export const LETTERS = [
  { id: 'alef', thing: 'bunny', ch: 'أ', the: 'الألف', word: 'أرنب', pic: '🐰' },
  { id: 'baa', thing: 'duck', ch: 'ب', the: 'الباء', word: 'بطة', pic: '🦆' },
  { id: 'meem', thing: 'banana', ch: 'م', the: 'الميم', word: 'موزة', pic: '🍌' },
  { id: 'kaaf', thing: 'ball', ch: 'ك', the: 'الكاف', word: 'كورة', pic: '⚽' },
  { id: 'taa', thing: 'apple', ch: 'ت', the: 'التاء', word: 'تفاحة', pic: '🍎' },
  { id: 'seen', thing: 'fish', ch: 'س', the: 'السين', word: 'سمكة', pic: '🐟' },
  { id: 'faa', thing: 'butterfly', ch: 'ف', the: 'الفاء', word: 'فراشة', pic: '🦋' },
  { id: 'qaaf', thing: 'cat', ch: 'ق', the: 'القاف', word: 'قطة', pic: '🐱' },
  { id: 'thaa', thing: 'fox', ch: 'ث', the: 'الثاء', word: 'ثعلب', pic: '🦊' },
  { id: 'jeem', thing: 'camel', ch: 'ج', the: 'الجيم', word: 'جمل', pic: '🐪' },
  { id: 'haa', thing: 'horse', ch: 'ح', the: 'الحاء', word: 'حصان', pic: '🐴' },
  { id: 'khaa', thing: 'sheep', ch: 'خ', the: 'الخاء', word: 'خروف', pic: '🐑' },
  { id: 'dal', thing: 'hen', ch: 'د', the: 'الدال', word: 'دجاجة', pic: '🐔' },
  { id: 'sheen', thing: 'sun', ch: 'ش', the: 'الشين', word: 'شمس', pic: '☀️' },
  { id: 'noon', thing: 'bee', ch: 'ن', the: 'النون', word: 'نحلة', pic: '🐝' },
  { id: 'waaw', thing: 'rose', ch: 'و', the: 'الواو', word: 'وردة', pic: '🌹' },
  { id: 'raa', thing: 'pomegranate', ch: 'ر', the: 'الراء', word: 'رمانة', pic: '🍎' },
  { id: 'zayn', thing: 'giraffe', ch: 'ز', the: 'الزاي', word: 'زرافة', pic: '🦒' },
  { id: 'dhal', thing: 'corn', ch: 'ذ', the: 'الذال', word: 'ذرة', pic: '🌽' },
  { id: 'sad', thing: 'rocket', ch: 'ص', the: 'الصاد', word: 'صاروخ', pic: '🚀' },
  { id: 'dad', thing: 'frog', ch: 'ض', the: 'الضاد', word: 'ضفدع', pic: '🐸' },
  { id: 'tah', thing: 'plane', ch: 'ط', the: 'الطاء', word: 'طيارة', pic: '✈️' },
  { id: 'zah', thing: 'envelope', ch: 'ظ', the: 'الظاء', word: 'ظرف', pic: '✉️' },
  { id: 'ayn', thing: 'grapes', ch: 'ع', the: 'العين', word: 'عنب', pic: '🍇' },
  { id: 'ghayn', thing: 'crow', ch: 'غ', the: 'الغين', word: 'غراب', pic: '🐦' },
  { id: 'laam', thing: 'lemon', ch: 'ل', the: 'اللام', word: 'ليمونة', pic: '🍋' },
  { id: 'haa2', thing: 'crescent', ch: 'ه', the: 'الهاء', word: 'هلال', pic: '🌙' },
  { id: 'yaa', thing: 'dove', ch: 'ي', the: 'الياء', word: 'يمامة', pic: '🕊️' },
];
export const ROUNDS = 5;
export const poolFor = (age) => LETTERS.slice(0, age <= 4 ? 4 : age === 5 ? 8 : LETTERS.length);
export const fishCount = (age) => (age <= 4 ? 3 : 4);
export const letterById = (id) => LETTERS.find((l) => l.id === id);
export const question = (l) => `فين حرف ${l.the}؟`;
export const reward = (l) => `${l.the} زي ${l.word}`;

export function makeRounds(age, seed) {
  const r = rng(seed);
  const pool = poolFor(age);
  const out = [];
  let bag = [];
  for (let i = 0; i < ROUNDS; i++) {
    if (!bag.length) bag = pool.map((l) => l.id).sort(() => r() - 0.5);
    let k = bag.findIndex((s) => s !== out[out.length - 1]);
    if (k < 0) k = 0;
    out.push(bag.splice(k, 1)[0]);
  }
  return out;
}

/** The fish of one round: the target plus other letters, shuffled. */
export function fishFor(age, target, seed) {
  const r = rng(seed);
  const others = poolFor(age).map((l) => l.id).filter((x) => x !== target).sort(() => r() - 0.5).slice(0, fishCount(age) - 1);
  return [target, ...others].sort(() => r() - 0.5);
}

export class LettersPlay {
  constructor(age, seed = Date.now()) {
    this.age = age;
    this.seed = seed;
    this.targets = makeRounds(age, seed);
    this.round = 0;
    this.misses = 0;
  }
  get finished() { return this.round >= this.targets.length; }
  get target() { return this.finished ? null : this.targets[this.round]; }
  get fish() { return this.finished ? [] : fishFor(this.age, this.target, this.seed + this.round * 77); }
  get hint() { return this.misses >= 2 ? this.target : null; }
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
