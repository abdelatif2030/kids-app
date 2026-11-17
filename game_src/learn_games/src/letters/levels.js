// The levels of «عالم رحلتي التعليمي» (pure rules): ONE learning game with nine levels, each five rounds, unlocked one
// after another. The cartoon teacher (an owl) asks; Mama and Baba give the gentle instructions; the child answers by
// picking a picture, a letter, a number, a shape or a food.
//   1 letters  find the letter among the things                      skill letters_ar
//   2 words    "where is the rabbit?" pick the picture                 skill vocab
//   3 first    "what is the first letter of the word rabbit?"          skill letters_ar   (age 5-6)
//   4 numbers  "where is the number five?" (apples show the amount at four)  skill counting
//   5 counting "how many apples?" the apples are counted aloud         skill counting
//   6 order    "which letter comes after the letter ب?"                skill letters_ar   (age 5-6)
//   7 shapes   "where is the red circle?" shapes and colours           skill shapes
//   8 animals  "the rabbit is hungry! what will he eat?"               skill nature
//   9 habits   Mama and Baba: "let's brush our teeth" pick the right thing  skill listening
import { rng } from '../maze/sim.js';
import { ROUNDS, poolFor, fishCount, letterById, question, LETTERS } from './sim.js';
import { SHAPES_ALL, SHAPE_TIERS, SHAPE_COLORS, SIDES_ASKED, shapePlan, findShapeQ, shapeSay, sidesQ, shapeWithSides } from './shapes_all.js';
import { ANIMALS, platesOf, animalById, question as animalQuestion, reward as animalReward, bankFor as animalBank, poolFor as animalPool, FOODS } from '../animals/sim.js';
import { optionsFor, COUNT_Q } from '../counting/sim.js';
import { COLORS, COLOR_TIERS, COLOR_THINGS, colorPlan, colorChoices, findColorQ, findThingQ, colorOf } from './colors.js';
import { TIERS, COUNT_TIERS, numberPlan, countPlan, numberWord, findQ, afterQ, beforeQ, BIGGER_Q, SMALLER_Q } from './numbers.js';
const range0 = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
import MORE_WORDS from './more_words.json' with { type: 'json' };
// (FreshMemory, in fresh.js, is passed in by the game: it remembers what each child already met)

export const LEVELS = [
  { id: 'letters', mode: 'letter', ar: 'اصطاد الحرف', emoji: '🔤', skill: 'letters_ar' },
  { id: 'words', mode: 'word', ar: 'فين الصورة؟', emoji: '🖼️', skill: 'vocab' },
  { id: 'first', mode: 'first', ar: 'أول حرف', emoji: '🅰️', skill: 'letters_ar' },
  { id: 'numbers', mode: 'number', ar: 'الأرقام', emoji: '🔢', skill: 'counting' },
  { id: 'counting', mode: 'count', ar: 'عدّ معايا', emoji: '🍎', skill: 'counting' },
  { id: 'order', mode: 'next', ar: 'ترتيب الحروف', emoji: '🔠', skill: 'letters_ar' },
  { id: 'shapes', mode: 'shape', ar: 'الأشكال والألوان', emoji: '🔷', skill: 'shapes' },
  { id: 'animals', mode: 'animal', ar: 'أطعم الحيوان', emoji: '🐰', skill: 'nature' },
  { id: 'colors', mode: 'color', ar: 'الألوان', emoji: '🎨', skill: 'colors' },
  { id: 'fruits', mode: 'pick', table: 'fruits', ar: 'فواكه وخضار', emoji: '🍓', skill: 'vocab' },
  { id: 'vehicles', mode: 'pick', table: 'vehicles', ar: 'المواصلات', emoji: '🚌', skill: 'vocab' },
  { id: 'habits', mode: 'habit', ar: 'عاداتي اليومية', emoji: '🧼', skill: 'listening' },
];

/** The "find it" levels with a table of things: colours, fruit and vegetables, vehicles. */
export const PICKS = {
  fruits: {
    prompt: (it) => `فين ${it.the}؟`,
    items: [
      { id: 'apple', the: 'التفاحة', thing: 'apple' }, { id: 'banana', the: 'الموزة', thing: 'banana' }, { id: 'orange', the: 'البرتقالة', thing: 'orange' },
      { id: 'strawberry', the: 'الفراولة', thing: 'strawberry' }, { id: 'pear', the: 'الكمثرى', thing: 'pear' }, { id: 'grapes', the: 'العنب', thing: 'grapes' },
      { id: 'watermelon', the: 'البطيخ', thing: 'watermelon' }, { id: 'carrot', the: 'الجزرة', thing: 'carrot' }, { id: 'corn', the: 'الذرة', thing: 'corn' },
      { id: 'pineapple', the: 'الأناناس', thing: 'pineapple' }, { id: 'mango', the: 'المانجا', thing: 'mango' },
      { id: 'lemon', the: 'الليمونة', thing: 'lemon' }, { id: 'pomegranate', the: 'الرمانة', thing: 'pomegranate' },
    ],
  },
  vehicles: {
    prompt: (it) => `فين ${it.the}؟`,
    items: [
      { id: 'car', the: 'العربية', thing: 'car' }, { id: 'bus', the: 'الأتوبيس', thing: 'bus' }, { id: 'boat', the: 'المركب', thing: 'boat' },
      { id: 'plane', the: 'الطيارة', thing: 'plane' }, { id: 'train', the: 'القطر', thing: 'train' }, { id: 'rocket', the: 'الصاروخ', thing: 'rocket' },
      { id: 'firetruck', the: 'عربية المطافي', thing: 'firetruck' }, { id: 'ambulance', the: 'عربية الإسعاف', thing: 'ambulance' },
      { id: 'police', the: 'عربية الشرطة', thing: 'police' }, { id: 'helicopter', the: 'الهليكوبتر', thing: 'helicopter' },
      { id: 'schoolbus', the: 'الأتوبيس المدرسي', thing: 'c_schoolbus' }, { id: 'citybus', the: 'أتوبيس المدينة', thing: 'c_citybus' }, { id: 'taxi', the: 'التاكسي', thing: 'c_taxi' },
      { id: 'tram', the: 'الترام', thing: 'c_tram' }, { id: 'bulldozer', the: 'الجرافة', thing: 'c_bulldozer' }, { id: 'bike', the: 'العجلة', thing: 'h_bike' },
      { id: 'jeep', the: 'الجيب', thing: 'd_jeep' }, { id: 'hotballoon', the: 'المنطاد', thing: 'd_balloon' }, { id: 'felucca', the: 'الفلوكة', thing: 'd_boat' }, { id: 'donkeycart', the: 'عربة الحمار', thing: 'd_donkeycart' },
    ],
  },
};
// The fruit and vegetable level also asks every fruit and vegetable picture of the picture-words (their sentences «فين ...؟» are already recorded).
for (const w of MORE_WORDS) if (/^(q|v)_/.test(w.thing)) PICKS.fruits.items.push({ id: w.thing, the: w.the, thing: w.thing });
// More ways to travel, from pictures the app already has.
PICKS.vehicles.items.push(
  { id: 'tractor', the: 'الجرار', thing: 'tractor_f' }, { id: 'sled', the: 'الزحافة', thing: 'w_sled' },
  { id: 'rover', the: 'مركبة الفضاء', thing: 's_rover' }, { id: 'ufo', the: 'الطبق الطائر', thing: 's_ufo' },
);
/** The vowel marks asked in the letters level («فين حرف الباء اللي عليه فتحة؟»); the fourth (sukun) is only a distractor. */
export const HARAKAT = [
  { id: 'fatha', word: 'فتحة', mark: 'َ' }, { id: 'damma', word: 'ضمة', mark: 'ُ' }, { id: 'kasra', word: 'كسرة', mark: 'ِ' }, { id: 'sukun', word: 'سكون', mark: 'ْ' },
];
export const harakaQ = (l, h) => `فين حرف ${l.the} اللي عليه ${h.word}؟`;
export const allHarakaSentences = () => LETTERS.flatMap((l) => HARAKAT.slice(0, 3).map((h) => harakaQ(l, h)));
export const levelOf = (id) => LEVELS.find((l) => l.id === id);
/** The youngest (four) skip the two alphabet levels that need reading order. */
export const levelsFor = (_age) => LEVELS; // every level is open at every age: the age only picks what comes first (tiers)

/** The alphabet in its real order (the list in sim.js is ordered by how easy a letter is to hear). */
export const ALPHABET = ['alef', 'baa', 'taa', 'thaa', 'jeem', 'haa', 'khaa', 'dal', 'dhal', 'raa', 'zayn', 'seen', 'sheen', 'sad', 'dad', 'tah', 'zah', 'ayn', 'ghayn', 'faa', 'qaaf', 'kaaf', 'laam', 'meem', 'noon', 'haa2', 'waaw', 'yaa'];

/** Every picture-with-a-word of the "words" and "first letter" levels: the 28 letter words, then the extra words (more_words.json). */
export const WORD_ITEMS = [
  ...LETTERS.map((l, i) => ({ id: l.id, letter: l.id, thing: l.thing, word: l.word, the: null, age: i < 8 ? 3 : i < 16 ? 5 : 6 })),
  ...MORE_WORDS.map((w) => ({ id: `w_${w.id}`, letter: w.letter, thing: w.thing, word: w.word, the: w.the, age: w.age })),
];
export const wordItems = (age) => WORD_ITEMS.filter((w) => w.age <= age);
export const wordThe = (w) => w.the || WORD_THE[w.id];
export const wordQ = (w) => `فين ${wordThe(w)}؟`;
export const firstQ = (w) => `إيه الحرف الأول في كلمة ${w.word}؟`;
export const wordReward = (w) => `${letterById(w.letter).the} زي ${w.word}`;

/** The thing's name with "the" (for "where is the rabbit?"). */
export const WORD_THE = {
  alef: 'الأرنب', baa: 'البطة', meem: 'الموزة', kaaf: 'الكورة', taa: 'التفاحة', seen: 'السمكة', faa: 'الفراشة', qaaf: 'القطة', thaa: 'الثعلب', jeem: 'الجمل',
  haa: 'الحصان', khaa: 'الخروف', dal: 'الدجاجة', sheen: 'الشمس', noon: 'النحلة', waaw: 'الوردة', raa: 'الرمانة', zayn: 'الزرافة', dhal: 'الذرة', sad: 'الصاروخ',
  dad: 'الضفدع', tah: 'الطيارة', zah: 'الظرف', ayn: 'العنب', ghayn: 'الغراب', laam: 'الليمونة', haa2: 'الهلال', yaa: 'اليمامة',
};
export const wordQuestion = (l) => `فين ${WORD_THE[l.id]}؟`;
export const firstQuestion = (l) => `إيه الحرف الأول في كلمة ${l.word}؟`;
export const NUM_WORDS = Array.from({ length: 21 }, (_, i) => (i ? numberWord(i) : ''));
export const numberQuestion = findQ;
export const nextQuestion = (l) => `إيه الحرف اللي بعد ${l.the}؟`;
/** Letters used by the order level: the first eight of the alphabet at five, all at six. */
export const orderPool = (age) => ALPHABET.slice(0, age <= 5 ? 8 : 28);

/** Mama and Baba's small instructions; the right answer is the thing that goes with it. */
export const HABITS = [
  { text: 'يلا نغسل إيدينا', answer: 'soap' },
  { text: 'يلا نفطر', answer: 'bowl' },
  { text: 'يلا نغسل سناننا', answer: 'toothbrush' },
  { text: 'وقت الغدا', answer: 'pot' },
  { text: 'يلا نروح الحضانة', answer: 'backpack' },
  { text: 'وقت النوم يا بطل', answer: 'bed' },
  { text: 'يلا نستحمّى', answer: 'tub' },
  { text: 'يلا نتعشى', answer: 'plate' },
  { text: 'صاحبك عايز يلعب، نشاركه إيه؟', answer: 'teddy' },
  { text: 'نقول لصاحبنا كلمة حلوة ونحبه', answer: 'heart' },
  { text: 'يلا ننشف إيدينا', answer: 'h_towel' },
  { text: 'يلا نلبس الجزمة', answer: 'h_shoes' },
  { text: 'يلا نرتب لعبنا', answer: 'h_toybox' },
  { text: 'يلا نكنس الأوضة', answer: 'h_broom' },
  { text: 'يلا نرمي الزبالة في الصندوق', answer: 'h_bin' },
  { text: 'يلا نلبس هدومنا', answer: 'h_wardrobe' },
  { text: 'يلا نشوف الساعة كام', answer: 'h_clock' },
  { text: 'يلا نسقي الزرع', answer: 'h_wateringcan' },
  { text: 'يلا نلعب بالكورة', answer: 'h_ball' },
  { text: 'يلا نقعد ونرسم على الترابيزة', answer: 'h_table' },
];
// More everyday habits, each with a picture the app already has (2026-11-17).
HABITS.push(
  { text: 'يلا نكتب بالقلم', answer: 'e_pencil' },
  { text: 'يلا نقص بالمقص', answer: 'e_scissors' },
  { text: 'يلا نرسم بالألوان', answer: 'e_crayons' },
  { text: 'يلا نقرا كتاب', answer: 'e_book' },
  { text: 'يلا نمسح بالأستيكة', answer: 'e_eraser' },
  { text: 'يلا نقيس بالمسطرة', answer: 'e_ruler' },
  { text: 'يلا نلزق الورقة', answer: 'e_glue' },
  { text: 'يلا نشرب لبن', answer: 'o_milk' },
  { text: 'يلا نشرب مية', answer: 'o_water' },
  { text: 'يلا ناكل عيش', answer: 'o_bread' },
  { text: 'يلا نشرب عصير', answer: 'o_juice' },
  { text: 'يلا ناكل شوربة', answer: 'o_soup' },
  { text: 'يلا ناكل رز', answer: 'o_rice' },
  { text: 'يلا ناكل بيضة', answer: 'o_egg' },
  { text: 'يلا نلبس الجاكت عشان الجو برد', answer: 'l_jacket' },
  { text: 'يلا نلبس الكاب عشان الشمس حامية', answer: 'l_cap' },
  { text: 'يلا نلبس المعطف عشان بتمطر', answer: 'l_raincoat' },
  { text: 'يلا نلبس الشراب', answer: 'l_socks' },
  { text: 'يلا نلبس البيجامة عشان ننام', answer: 'l_pajamas' },
  { text: 'يلا نلبس الجوانتي عشان إيدينا متبردش', answer: 'l_gloves' },
  { text: 'يلا نلف الإيشارب حوالين رقبتنا', answer: 'l_scarf' },
  { text: 'يلا نشم الوردة', answer: 'rose' },
  { text: 'يلا نبعت جواب', answer: 'h_mailbox' },
  { text: 'يلا نسمع موسيقى', answer: 'm_headphones' },
  { text: 'يلا نعزف على الجيتار', answer: 'm_guitar' },
  { text: 'يلا نستنى الإشارة قبل ما نعدي الشارع', answer: 'c_light' },
  { text: 'يلا نركب العجلة', answer: 'h_bike' },
  { text: 'يلا نرجع الكلب بيته', answer: 'h_doghouse' },
  { text: 'يلا نلعب في المرجيحة', answer: 'h_swing' },
  { text: 'يلا نغسل وشنا في الحوض', answer: 'h_sink' },
  { text: 'يلا نروح للدكتور لما نتعب', answer: 'z_doctor' },
);
export const HABIT_ITEMS = [...new Set(HABITS.map((h) => h.answer))];

/** The short, simple sentences said after a right answer (never about time or points). */
export const CHEERS_M = ['أحسنت!', 'شاطر أوي!', 'ممتاز!', 'جميل أوي!', 'عظيم!', 'يا سلام عليك!', 'أنت بطل!', 'كمّل كده!', 'إجابة صحيحة!'];
export const CHEERS_F = ['أحسنتي!', 'حلوة أوي!', 'ممتازة!', 'جميلة أوي!', 'عظيمة!', 'يا سلام عليكي!', 'إنتي بطلة!', 'كمّلي كده!', 'إجابة صحيحة!'];
export const cheer = (girl, i) => (girl ? CHEERS_F : CHEERS_M)[i % CHEERS_M.length];


/** One game of a level: rounds of { prompt, answer, reward, show, options: [{id, kind, ...}] }. */
export class LevelPlay {
  /** @param mem optional FreshMemory: new things first, and nothing the previous level just showed */
  constructor(levelId, age, seed = Date.now(), mem = null, world = null) {
    this.mem = mem;
    this.world = world; // the place the level is in: «أطعم الحيوان» then shows that place's own animals
    this.level = levelOf(levelId);
    this.age = age;
    this.seed = seed;
    this.round = 0;
    this.misses = 0;
    this.rounds = this._make();
  }

  _make() {
    const r = rng(this.seed);
    const out = [];
    const mode = this.level.mode;
    const pool = poolFor(this.age).map((l) => l.id);
    const nOpt = fishCount(this.age);
    const mem = this.mem;
    const bag = (arr, keyOf = (x) => String(x)) => { let b = []; return () => { if (!b.length) b = mem ? mem.order(arr, keyOf, r) : [...arr].sort(() => r() - 0.5); return b.shift(); }; };
    const rew = (l) => `${l.the} زي ${l.word}`;
    // how often each thing was already on screen in THIS game (as the right answer or as a wrong choice): the wrong choices are
    // taken from the least shown, so one picture (a strawberry) does not come back again and again inside one level
    const used = new Map();
    const mark = (k) => used.set(k, (used.get(k) || 0) + 1);
    const keyOf = (x) => (x !== null && typeof x === 'object' && x.id != null ? x.id : x);
    const pickLow = (arr, n) => {
      const take = [...arr].sort(() => r() - 0.5).sort((a, b) => (used.get(keyOf(a)) || 0) - (used.get(keyOf(b)) || 0)).slice(0, n);
      take.forEach((x) => mark(keyOf(x)));
      return take;
    };
    // Tiers: a question is taken from the tier the age asks for; when that tier has nothing NEW left for this child (not seen before, not yet asked in this
    // game), the next tier supplies it (harder first), so a replay never shows the same things again while anything new is left in the level.
    const drawn = new Set();
    const pickTiered = (order, t0, poolOf, keyOf, qs, not = () => false) => {
      const undrawn = (x) => !drawn.has(keyOf(x));
      const fresh = (u) => poolOf(u).some((x) => undrawn(x) && (!mem || mem.score(keyOf(x)) <= 0));
      const unasked = (u) => poolOf(u).some(undrawn);
      const i = Math.max(0, order.indexOf(t0));
      const rot = (f) => { for (let d = 0; d < order.length; d++) { const u = order[(i + d) % order.length]; if (f(u)) return u; } return null; };
      let t = (mem ? rot(fresh) : null);
      if (mem && t === null) {
        // everything in the level has been seen once: a new cycle, the OLDEST first whatever its tier
        const all = order.flatMap((u) => poolOf(u));
        const ordered = mem.order(all, keyOf, r).filter(undrawn);
        const item = ordered.find((x) => !not(x)) || ordered[0];
        if (item !== undefined) {
          drawn.add(keyOf(item));
          return { item, tier: order.find((u) => poolOf(u).includes(item)) };
        }
      }
      if (t === null) t = rot(unasked);
      if (t === null) t = t0;
      if (!qs[t] || !qs[t].some(undrawn)) qs[t] = mem ? mem.order(poolOf(t), keyOf, r) : [...poolOf(t)].sort(() => r() - 0.5);
      let k = qs[t].findIndex((x) => undrawn(x) && !not(x));
      if (k < 0) k = qs[t].findIndex(undrawn);
      if (k < 0) k = 0;
      const item = qs[t].splice(k, 1)[0];
      drawn.add(keyOf(item));
      return { item, tier: t };
    };
    // three tiers (easy, middle, hard): the age picks how many questions come from each
    const TRI = this.age <= 3 ? [7, 1, 0] : this.age === 4 ? [5, 3, 0] : this.age === 5 ? [3, 3, 2] : [2, 2, 4];
    const tiered = (pools, keyOf) => {
      const plan = [];
      TRI.forEach((n, t) => { for (let k = 0; k < n; k++) plan.push(t); });
      for (let k = plan.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [plan[k], plan[j]] = [plan[j], plan[k]]; }
      const qs = [];
      let at = 0, last = null;
      return () => {
        const res = pickTiered([0, 1, 2], plan[at++ % plan.length], (u) => pools[u], keyOf, qs, (x) => x === last);
        last = res.item;
        return res;
      };
    };
    if (mode === 'number' || mode === 'count') {
      // every number 0-100 is possible at every age; the age only picks how many easy and how many harder ones (numbers.js)
      const plan = mode === 'count' ? countPlan(this.age, ROUNDS, r) : numberPlan(this.age, ROUNDS, r);
      const pools = mode === 'count' ? COUNT_TIERS : TIERS;
      const queues = {};
      const draw = (tier0, not) => pickTiered(Object.keys(pools), tier0, (u) => pools[u], (n) => `n:${n}`, queues, (n) => not.includes(n)).item;
      const tierOfNumber = (n) => Object.keys(pools).find((u) => pools[u].includes(n));
      const asOpts = (list) => list.map((x) => ({ id: `n${x}`, kind: 'number', n: x }));
      const shuffled = (list) => [...list].sort(() => r() - 0.5);
      const lastN = () => out.map((x) => x.n);
      for (let i = 0; i < ROUNDS; i++) {
        const { kind, tier } = plan[i];
        if (kind === 'count') {
          const n = draw(tier, lastN());
          mark(n);
          out.push({ prompt: COUNT_Q, answer: `n${n}`, n, key: `n:${n}`, show: { type: 'apples', n }, countAloud: n, options: asOpts(optionsFor(this.age, n, this.seed + i * 31, 20)) });
        } else if (kind === 'find') {
          const n = draw(tier, lastN());
          mark(n);
          const others = pickLow(pools[tier].filter((x) => x !== n), nOpt - 1);
          const small = this.age <= 4 && n >= 1 && n <= 10; // the youngest also SEE that many apples (they are counted aloud after the answer)
          out.push({ prompt: findQ(n), answer: `n${n}`, n, key: `n:${n}`, show: small ? { type: 'apples', n } : null, countAloud: small ? n : 0, options: asOpts(shuffled([n, ...others])) });
        } else if ((kind === 'after' || kind === 'before' || kind === 'bigger' || kind === 'smaller') && mem && !['A', 'B'].some((u) => pools[u].some((n) => !(`n:${n}` in mem.seen) && !drawn.has(`n:${n}`)))) {
          // nothing new is left among 0-20: ask a plain «فين رقم ...؟» from the next tier with new numbers instead
          const n = draw('C', lastN());
          mark(n);
          const others = pickLow(pools[tierOfNumber(n)].filter((x) => x !== n), nOpt - 1);
          out.push({ prompt: findQ(n), answer: `n${n}`, n, key: `n:${n}`, show: null, countAloud: 0, options: asOpts(shuffled([n, ...others])) });
        } else if (kind === 'after' || kind === 'before') {
          // "which number comes after / before ...": the ANSWER is the fresh number (0-20), the sentence is made from it
          const bad = kind === 'after' ? [0] : [20];
          const ans = pickTiered(['A', 'B'], tier === 'A' || tier === 'B' ? tier : 'A', (u) => pools[u], (n) => `n:${n}`, queues, (n) => lastN().includes(n) || bad.includes(n)).item;
          mark(ans);
          const base = kind === 'after' ? ans - 1 : ans + 1;
          const near = range0(0, 20).filter((x) => x !== ans && x !== base);
          const others = pickLow(near, nOpt - 1);
          out.push({ prompt: kind === 'after' ? afterQ(base) : beforeQ(base), answer: `n${ans}`, n: ans, key: `n:${ans}`, show: null, countAloud: 0, options: asOpts(shuffled([ans, ...others])) });
        } else {
          // bigger / smaller: the ANSWER is the fresh number; the others are smaller (bigger) numbers of the easy tiers (and the tens for the older)
          const order = this.age >= 5 ? ['A', 'B', 'C'] : ['A', 'B'];
          const src = order.flatMap((u) => pools[u]);
          const enough = (n) => (kind === 'bigger' ? src.filter((x) => x < n).length : src.filter((x) => x > n).length) >= nOpt - 1;
          const first = pickTiered(order, order.includes(tier) ? tier : 'A', (u) => pools[u], (n) => `n:${n}`, queues, (n) => lastN().includes(n) || !enough(n));
          const ans = first.item;
          mark(ans);
          const cands = src.filter((x) => (kind === 'bigger' ? x < ans : x > ans));
          const others = pickLow(cands, nOpt - 1);
          out.push({ prompt: kind === 'bigger' ? BIGGER_Q : SMALLER_Q, answer: `n${ans}`, n: ans, key: `n:${ans}`, show: null, countAloud: 0, options: asOpts(shuffled([ans, ...others])) });
        }
      }
    } else if (mode === 'next') {
      // «إيه الحرف اللي بعد ...؟» over the whole alphabet; the first eight letters are the easy tier
      const ab = ALPHABET;
      const idx = Array.from({ length: ab.length - 1 }, (_, i) => i);
      const nextK = tiered([idx.filter((k) => k < 8), idx.filter((k) => k >= 8 && k < 16), idx.filter((k) => k >= 16)], (k) => `l:${ab[k + 1]}`);
      for (let i = 0; i < ROUNDS; i++) {
        const { item: k, tier } = nextK();
        const cur = letterById(ab[k]);
        const ans = ab[k + 1];
        mark(ans);
        const reach = [8, 16, 28][tier];
        const others = pickLow(ab.slice(0, Math.max(reach, k + 2)).filter((x) => x !== ans && x !== ab[k]), nOpt - 1);
        out.push({ prompt: nextQuestion(cur), answer: ans, key: `l:${ans}`, from: ab[k], show: { type: 'letter', ch: cur.ch }, reward: rew(letterById(ans)), options: [ans, ...others].sort(() => r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) });
      }
    } else if (mode === 'shape') {
      // 20 shapes at every age (age picks the start): by name, by name and colour (shapes drawn in code), by number of sides (shapes.js)
      const plan = shapePlan(this.age, ROUNDS, r);
      const queues = {};
      const code = (x) => x.render === 'code';
      const queuesCode = {};
      const draw = (tier0, not, pred) => pickTiered(Object.keys(SHAPE_TIERS), tier0, (u) => SHAPE_TIERS[u].filter(pred), (x) => `s:${x.id}`, pred === code ? queuesCode : queues, (x) => not.includes(x.id)).item; // a queue of colourable shapes only must not be reused for a plain question
      const shuffledColors = () => [...SHAPE_COLORS].sort(() => r() - 0.5);
      /** One option for a shape: a coloured 3D shape (drawn in code) or the owner's own picture. */
      const optionOf = (sh, color) => (code(sh) ? { id: sh.id, kind: 'shape', shape: sh.id, color } : { id: sh.id, kind: 'thing', thing: sh.art });
      const nameOptions = (right, exclude = null) => {
        const others = pickLow(SHAPES_ALL.filter((x) => x.id !== right.id && (!exclude || exclude(x))), nOpt - 1);
        const cols = shuffledColors();
        return [right, ...others].map((x, k) => optionOf(x, cols[k].id)).sort(() => r() - 0.5);
      };
      for (let i = 0; i < ROUNDS; i++) {
        let { kind, tier } = plan[i];
        const lastIds = out.map((x) => x.shapeId);
        const newShape = (x) => !drawn.has(`s:${x.id}`) && mem.score(`s:${x.id}`) <= 0;
        // a colour or sides question needs a (colourable / counted) shape the child has not met yet; otherwise this round is a plain «فين ...؟»
        if (mem && kind === 'colour' && !SHAPES_ALL.some((x) => code(x) && newShape(x))) kind = 'name';
        if (mem && kind === 'sides' && !SIDES_ASKED.some((n) => newShape(shapeWithSides(n)))) kind = 'name';
        if (kind === 'sides') {
          const cands = SIDES_ASKED.filter((n) => !lastIds.includes(shapeWithSides(n).id));
          const n = (mem ? mem.order(cands, (x) => `s:${shapeWithSides(x).id}`, r) : [...cands].sort(() => r() - 0.5))[0];
          const sh = shapeWithSides(n);
          mark(sh.id);
          out.push({ prompt: sidesQ(n), answer: sh.id, shapeId: sh.id, key: `s:${sh.id}`, reward: shapeSay(sh), options: nameOptions(sh, (x) => x.sides !== n) });
        } else if (kind === 'colour') {
          const sh = draw(tier, lastIds, code);
          const col = shuffledColors()[0];
          mark(sh.id);
          const pickColor = (not) => shuffledColors().find((c) => !not.includes(c.id)).id;
          const tiles = [{ shape: sh, color: col.id }];
          const has = (a, b) => tiles.some((t) => t.shape.id === a && t.color === b);
          const sameShape = pickColor([col.id]);
          tiles.push({ shape: sh, color: sameShape });
          const sameColour = pickLow(SHAPES_ALL.filter((x) => code(x) && x.id !== sh.id), 1)[0];
          tiles.push({ shape: sameColour, color: col.id });
          while (tiles.length < nOpt) {
            const x = pickLow(SHAPES_ALL.filter((y) => code(y) && y.id !== sh.id && y.id !== sameColour.id), 1)[0];
            const c = pickColor([col.id, sameShape]);
            if (!has(x.id, c)) tiles.push({ shape: x, color: c });
          }
          out.push({ prompt: findShapeQ(sh, col), answer: `${sh.id}-${col.id}`, shapeId: sh.id, key: `s:${sh.id}`, reward: shapeSay(sh, col),
            options: tiles.sort(() => r() - 0.5).map((t) => ({ id: `${t.shape.id}-${t.color}`, kind: 'shape', shape: t.shape.id, color: t.color })) });
        } else {
          const sh = draw(tier, lastIds, () => true);
          mark(sh.id);
          out.push({ prompt: findShapeQ(sh), answer: sh.id, shapeId: sh.id, key: `s:${sh.id}`, reward: shapeSay(sh), options: nameOptions(sh) });
        }
      }
    } else if (mode === 'animal') {
      // every animal at every age: new ones first, the easy ones (age field) before the harder ones for the younger children
      let ids = animalBank(this.world).map((x) => x.id);
      const animalKey = (id) => `t:${animalById(id).thing}`;
      if (mem && ids.filter((id) => mem.score(animalKey(id)) <= 0).length < ROUNDS) {
        // the world's own animals are nearly all known: animals of other places that are still new join in (before any known one repeats)
        ids = [...ids, ...ANIMALS.map((x) => x.id).filter((id) => !ids.includes(id) && mem.score(animalKey(id)) <= 0)];
      }
      // a new cycle (everything seen once): the oldest animals of ALL places, whatever the world
      if (mem && ids.filter((id) => mem.score(animalKey(id)) <= 0).length === 0) ids = ANIMALS.map((x) => x.id);
      const easyFor = (id) => animalById(id).age <= Math.max(4, this.age);
      const rank = (id) => ((!mem || mem.score(animalKey(id)) <= 0) ? (easyFor(id) ? 0 : 1) : 2);
      const ordered = () => (mem ? mem.order(ids, animalKey, r) : [...ids].sort(() => r() - 0.5)).map((id, i) => [rank(id), i, id]).sort((x, y) => x[0] - y[0] || x[1] - y[1]).map((x) => x[2]);
      // new animals first, and a food is the right answer only once per game (many animals eat grass or seeds)
      let queue = ordered();
      const rightFoods = new Set();
      const chosen = new Set(); // animals already asked in THIS game
      for (let i = 0; i < ROUNDS; i++) {
        const notLast = (id) => !(i && out[i - 1].animal === id);
        const isNew = (id) => !mem || mem.score(animalKey(id)) <= 0;
        // new animals first (even when their food was already asked), then a food that was not asked yet, then anything
        let k = queue.findIndex((id) => notLast(id) && isNew(id) && !rightFoods.has(animalById(id).food));
        if (k < 0) k = queue.findIndex((id) => notLast(id) && isNew(id));
        if (k < 0) k = queue.findIndex((id) => notLast(id) && !rightFoods.has(animalById(id).food));
        if (k < 0) k = queue.findIndex(notLast); // an animal whose food was already asked, but not asked itself yet
        if (k < 0) { queue = ordered().filter((x) => !chosen.has(x)); if (!queue.length) queue = ordered(); rightFoods.clear(); k = Math.max(0, queue.findIndex(notLast)); }
        const id = queue.splice(k, 1)[0];
        chosen.add(id);
        rightFoods.add(animalById(id).food);
        const a = animalById(id);
        const plates = platesOf(this.age, id, this.seed + i * 41, this.world, used);
        out.push({ prompt: animalQuestion(a), answer: a.food, animal: id, key: `t:${a.thing}`, show: { type: 'thing', thing: a.thing }, reward: animalReward(a), options: plates.map((f) => ({ id: f, kind: 'thing', thing: FOODS[f].thing })) });
      }
    } else if (mode === 'color') {
      // 25 colours at every age (age picks the start); some rounds ask for a THING of the colour (pictures), never two shades of one family together
      const plan = colorPlan(this.age, ROUNDS, r);
      const queues = {};
      const draw = (tier0, not) => pickTiered(Object.keys(COLOR_TIERS), tier0, (u) => COLOR_TIERS[u], (c) => `c:${c.id}`, queues, (c) => not.includes(c.id)).item;
      const usedColor = new Map();
      for (let i = 0; i < ROUNDS; i++) {
        const { kind, tier } = plan[i];
        const lastIds = out.map((x) => x.colorId);
        const thingFresh = mem && Object.keys(COLOR_THINGS).some((id) => !lastIds.includes(id) && mem.score(`c:${id}`) <= 0 && !drawn.has(`c:${id}`));
        // a picture question needs a colour (of the ten that have pictures) the child has not met yet; otherwise this round asks a coloured ball instead
        if (kind === 'thing' && (!mem || thingFresh)) {
          // a colour that has pictures: the right picture among pictures of other colours
          const cs = Object.keys(COLOR_THINGS).filter((id) => !lastIds.includes(id));
          const pickable = (mem ? mem.order(cs, (id) => `c:${id}`, r) : [...cs].sort(() => r() - 0.5));
          const cid = ((mem ? pickable.find((id) => mem.score(`c:${id}`) <= 0 && !drawn.has(`c:${id}`)) : null) || pickable.find((id) => colorOf(id).tier === tier && !drawn.has(`c:${id}`)) || pickable.find((id) => !drawn.has(`c:${id}`)) || pickable[0]);
          drawn.add(`c:${cid}`);
          const c = colorOf(cid);
          const right = COLOR_THINGS[cid][Math.floor(r() * COLOR_THINGS[cid].length)];
          const otherColors = pickLow(Object.keys(COLOR_THINGS).filter((id) => id !== cid && colorOf(id).family !== c.family), nOpt - 1);
          const others = otherColors.map((id) => COLOR_THINGS[id][Math.floor(r() * COLOR_THINGS[id].length)]);
          mark(`c:${cid}`);
          out.push({ prompt: findThingQ(c), answer: right, colorId: cid, key: `c:${cid}`, options: [right, ...others].sort(() => r() - 0.5).map((t) => ({ id: t, kind: 'thing', thing: t })) });
        } else {
          const c = draw(tier, lastIds);
          mark(`c:${c.id}`);
          const opts = colorChoices(c, COLORS, nOpt, r, usedColor);
          opts.forEach((x) => usedColor.set(x.id, (usedColor.get(x.id) || 0) + 1));
          out.push({ prompt: findColorQ(c), answer: c.id, colorId: c.id, key: `c:${c.id}`, options: opts.sort(() => r() - 0.5).map((x) => ({ id: x.id, kind: 'color', hex: x.hex, metal: x.metal || 0 })) });
        }
      }
    } else if (mode === 'pick') {
      const tab = PICKS[this.level.table];
      const keyOfItem = (it) => (it.thing ? `t:${it.thing}` : `c:${it.id}`);
      const next = bag(tab.items.map((x) => x.id), (id) => keyOfItem(tab.items.find((x) => x.id === id)));
      for (let i = 0; i < ROUNDS; i++) {
        let id = next();
        if (i && out[i - 1].answer === id) id = next();
        const it = tab.items.find((x) => x.id === id);
        mark(id);
        const others = pickLow(tab.items.filter((x) => x.id !== id), nOpt - 1);
        out.push({ prompt: tab.prompt(it), answer: id, key: keyOfItem(it), options: [it, ...others].sort(() => r() - 0.5).map((x) => (x.hex != null ? { id: x.id, kind: 'color', hex: x.hex } : { id: x.id, kind: 'thing', thing: x.thing })) });
      }
    } else if (mode === 'habit') {
      const nextH = bag(HABITS, (h) => `t:${h.answer}`);
      const chosen = [];
      for (let tries = 0; chosen.length < ROUNDS && tries < 200; tries++) { const h = nextH(); if (!chosen.some((c) => c.answer === h.answer)) chosen.push(h); }
      for (const h of chosen) {
        mark(h.answer);
        const others = pickLow(HABIT_ITEMS.filter((x) => x !== h.answer), nOpt - 1);
        out.push({ prompt: h.text, answer: h.answer, key: `t:${h.answer}`, show: null, options: [h.answer, ...others].sort(() => r() - 0.5).map((x) => ({ id: x, kind: 'thing', thing: x })) });
      }
    } else if (mode === 'word' || mode === 'first') {
      // every picture-word at every age; the easy ones (age 3) come first for the youngest, the hardest (age 6) for the oldest
      const items = WORD_ITEMS;
      const tierW = (w) => (w.age <= 3 ? 0 : w.age <= 5 ? 1 : 2);
      const thingOf = new Map(items.map((x) => [x.id, x.thing]));
      const nextW = tiered([0, 1, 2].map((t) => items.filter((x) => tierW(x) === t).map((x) => x.id)), (id) => `t:${thingOf.get(id)}`);
      for (let i = 0; i < ROUNDS; i++) {
        const { item: id } = nextW();
        const w = items.find((x) => x.id === id);
        const t = tierW(w);
        const near = items.filter((x) => tierW(x) <= t); // wrong choices are never harder than the right one
        mark(mode === 'word' ? id : w.letter);
        if (mode === 'word') {
          const others = pickLow(near.filter((x) => x.id !== id && x.thing !== w.thing), nOpt - 1);
          out.push({ prompt: wordQ(w), answer: id, key: `t:${w.thing}`, reward: wordReward(w), options: [w, ...others].sort(() => r() - 0.5).map((x) => ({ id: x.id, kind: 'thing', thing: x.thing })) });
        } else {
          const letters = [...new Set(near.map((x) => x.letter))].filter((x) => x !== w.letter);
          const others = pickLow(letters, nOpt - 1);
          out.push({ prompt: firstQ(w), answer: w.letter, key: `t:${w.thing}`, reward: wordReward(w), show: { type: 'thing', thing: w.thing }, options: [w.letter, ...others].sort(() => r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) });
        }
      }
    } else {
      // «اصطاد الحرف»: all 28 letters at every age (easy ones first); one or two rounds ask a letter WITH a vowel mark (فتحة، ضمة، كسرة)
      const ids = LETTERS.map((l) => l.id);
      const tiers = [ids.slice(0, 8), ids.slice(8, 16), ids.slice(16)];
      const nextL = tiered(tiers, (id) => `t:${letterById(id).thing}`);
      const harakaAt = new Set();
      const nH = this.age < 4 ? 0 : this.age < 6 ? 1 : 2;
      while (harakaAt.size < nH) harakaAt.add(2 + Math.floor(r() * (ROUNDS - 2)));
      for (let i = 0; i < ROUNDS; i++) {
        const { item: t, tier } = nextL();
        const l = letterById(t);
        mark(t);
        const reachIds = tiers.slice(0, tier + 1).flat();
        if (harakaAt.has(i)) {
          const marks = nOpt >= 4 ? HARAKAT : HARAKAT.slice(0, 3);
          const right = marks[Math.floor(r() * 3)];
          out.push({ prompt: harakaQ(l, right), answer: `h${right.id}`, key: `t:${l.thing}`, options: marks.map((m) => ({ id: `h${m.id}`, kind: 'letter', ch: l.ch + m.mark })).sort(() => r() - 0.5) });
          continue;
        }
        const others = pickLow(reachIds.filter((x) => x !== t), nOpt - 1);
        const opts = [t, ...others].sort(() => r() - 0.5);
        out.push({ prompt: question(l), answer: t, key: `t:${l.thing}`, reward: rew(l), options: opts.map((x) => ({ id: x, kind: 'thing', thing: letterById(x).thing, plaque: letterById(x).ch })) });
      }
    }
    return out;
  }

  get finished() { return this.round >= this.rounds.length; }
  get cur() { return this.finished ? null : this.rounds[this.round]; }
  get hint() { return this.misses >= 2 ? this.cur.answer : null; }
  tap(id) {
    if (this.finished) return null;
    if (id !== this.cur.answer) { this.misses++; return { ok: false, firstMiss: this.misses === 1 }; }
    const ev = { ok: true, first: this.misses === 0, round: this.cur };
    this.round++;
    this.misses = 0;
    ev.finished = this.finished;
    return ev;
  }
}

// referenced so that tools can list every food word
export { LETTERS, ANIMALS, FOODS };
