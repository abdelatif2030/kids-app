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
import { tilesOf, makeRounds as shapeRounds, withColour, shapeById, colorById, question as shapeQuestion, reward as shapeReward } from '../shapes/sim.js';
import { ANIMALS, platesOf, animalById, question as animalQuestion, reward as animalReward, poolFor as animalPool, FOODS } from '../animals/sim.js';
import { optionsFor, maxCountFor, COUNT_Q } from '../counting/sim.js';
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
  { id: 'colors', mode: 'pick', table: 'colors', ar: 'الألوان', emoji: '🎨', skill: 'colors' },
  { id: 'fruits', mode: 'pick', table: 'fruits', ar: 'فواكه وخضار', emoji: '🍓', skill: 'vocab' },
  { id: 'vehicles', mode: 'pick', table: 'vehicles', ar: 'المواصلات', emoji: '🚌', skill: 'vocab' },
  { id: 'habits', mode: 'habit', ar: 'عاداتي اليومية', emoji: '🧼', skill: 'listening' },
];

/** The "find it" levels with a table of things: colours, fruit and vegetables, vehicles. */
export const PICKS = {
  colors: {
    prompt: (it) => `فين اللون ${it.the}؟`,
    items: [
      { id: 'red', the: 'الأحمر', hex: 0xe8302a }, { id: 'blue', the: 'الأزرق', hex: 0x2a8ae8 }, { id: 'yellow', the: 'الأصفر', hex: 0xffd21a },
      { id: 'green', the: 'الأخضر', hex: 0x2aa84a }, { id: 'orange', the: 'البرتقالي', hex: 0xff8a1a }, { id: 'purple', the: 'البنفسجي', hex: 0x9a4ad8 },
      { id: 'pink', the: 'الوردي', hex: 0xff7ab8 }, { id: 'black', the: 'الأسود', hex: 0x24242c }, { id: 'white', the: 'الأبيض', hex: 0xfafafa },
      { id: 'brown', the: 'البني', hex: 0x8a5a32 }, { id: 'gray', the: 'الرمادي', hex: 0x9a9aa8 },
    ],
  },
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
export const levelOf = (id) => LEVELS.find((l) => l.id === id);
/** The youngest (four) skip the two alphabet levels that need reading order. */
export const levelsFor = (age) => (age <= 4 ? LEVELS.filter((l) => l.id !== 'first' && l.id !== 'order') : LEVELS);

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
export const NUM_WORDS = ['', 'واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة', 'عشرة', 'حداشر', 'اتناشر', 'تلاتاشر', 'أربعتاشر', 'خمستاشر', 'ستاشر', 'سبعتاشر', 'تمنتاشر', 'تسعتاشر', 'عشرين'];
export const numberQuestion = (n) => `فين رقم ${NUM_WORDS[n]}؟`;
export const nextQuestion = (l) => `إيه الحرف اللي بعد ${l.the}؟`;
export const numberPool = (age) => (age <= 4 ? 5 : age === 5 ? 10 : 20);
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
    if (mode === 'number' || mode === 'count') {
      const max = mode === 'count' ? maxCountFor(this.age) : numberPool(this.age);
      const nums = Array.from({ length: max }, (_, i) => i + 1);
      const next = bag(nums, (n) => `n:${n}`);
      for (let i = 0; i < ROUNDS; i++) {
        let n = next();
        if (i && out[i - 1].n === n) n = next();
        mark(n);
        const opts = mode === 'count' ? optionsFor(this.age, n, this.seed + i * 31) : [n, ...pickLow(nums.filter((x) => x !== n), nOpt - 1)].sort(() => r() - 0.5);
        out.push({
          prompt: mode === 'count' ? COUNT_Q : numberQuestion(n), answer: `n${n}`, n, key: `n:${n}`,
          show: mode === 'count' || this.age <= 4 ? { type: 'apples', n } : null, countAloud: n,
          options: opts.map((x) => ({ id: `n${x}`, kind: 'number', n: x })),
        });
      }
    } else if (mode === 'next') {
      const ab = orderPool(this.age);
      const next = bag(Array.from({ length: ab.length - 1 }, (_, i) => i), (k) => `l:${ab[k + 1]}`);
      for (let i = 0; i < ROUNDS; i++) {
        const k = next();
        const cur = letterById(ab[k]);
        const ans = ab[k + 1];
        mark(ans);
        const others = pickLow(ab.filter((x) => x !== ans && x !== ab[k]), nOpt - 1);
        out.push({ prompt: nextQuestion(cur), answer: ans, key: `l:${ans}`, from: ab[k], show: { type: 'letter', ch: cur.ch }, reward: rew(letterById(ans)), options: [ans, ...others].sort(() => r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) });
      }
    } else if (mode === 'shape') {
      const targets = shapeRounds(this.age, this.seed);
      targets.forEach((t, i) => {
        const tiles = tilesOf(this.age, t, this.seed + i * 53);
        const ask = withColour(this.age);
        const ans = tiles.find((x) => x.shape === t.shape && (!ask || x.color === t.color));
        const s = shapeById(t.shape);
        const c = ask ? colorById(t.color) : null;
        out.push({ prompt: shapeQuestion(s, c), answer: ans.id, reward: shapeReward(s, c), options: tiles.map((x) => ({ id: x.id, kind: 'shape', shape: x.shape, color: x.color })) });
      });
    } else if (mode === 'animal') {
      const ids = animalPool(this.age, this.world).map((x) => x.id);
      const animalKey = (id) => `t:${animalById(id).thing}`;
      const ordered = () => (mem ? mem.order(ids, animalKey, r) : [...ids].sort(() => r() - 0.5));
      // new animals first, and a food is the right answer only once per game (many animals eat grass or seeds)
      let queue = ordered();
      const rightFoods = new Set();
      for (let i = 0; i < ROUNDS; i++) {
        let k = queue.findIndex((id) => !rightFoods.has(animalById(id).food) && !(i && out[i - 1].animal === id));
        if (k < 0) { queue = ordered(); rightFoods.clear(); k = Math.max(0, queue.findIndex((id) => !(i && out[i - 1].animal === id))); }
        const id = queue.splice(k, 1)[0];
        rightFoods.add(animalById(id).food);
        const a = animalById(id);
        const plates = platesOf(this.age, id, this.seed + i * 41, this.world, used);
        out.push({ prompt: animalQuestion(a), answer: a.food, animal: id, key: `t:${a.thing}`, show: { type: 'thing', thing: a.thing }, reward: animalReward(a), options: plates.map((f) => ({ id: f, kind: 'thing', thing: FOODS[f].thing })) });
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
      const items = wordItems(this.age);
      const thingOf = new Map(items.map((x) => [x.id, x.thing]));
      const next = bag(items.map((x) => x.id), (id) => `t:${thingOf.get(id)}`);
      let last = null;
      for (let i = 0; i < ROUNDS; i++) {
        let id = next();
        if (id === last) id = next();
        last = id;
        const w = items.find((x) => x.id === id);
        mark(mode === 'word' ? id : w.letter);
        if (mode === 'word') {
          const others = pickLow(items.filter((x) => x.id !== id && x.thing !== w.thing), nOpt - 1);
          out.push({ prompt: wordQ(w), answer: id, key: `t:${w.thing}`, reward: wordReward(w), options: [w, ...others].sort(() => r() - 0.5).map((x) => ({ id: x.id, kind: 'thing', thing: x.thing })) });
        } else {
          const letters = [...new Set(items.map((x) => x.letter))].filter((x) => x !== w.letter);
          const others = pickLow(letters, nOpt - 1);
          out.push({ prompt: firstQ(w), answer: w.letter, key: `t:${w.thing}`, reward: wordReward(w), show: { type: 'thing', thing: w.thing }, options: [w.letter, ...others].sort(() => r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) });
        }
      }
    } else {
      const next = bag(pool, (id) => `t:${letterById(id).thing}`);
      for (let i = 0; i < ROUNDS; i++) {
        let t = next();
        if (i && out[i - 1].answer === t) t = next();
        const l = letterById(t);
        mark(t);
        const others = pickLow(pool.filter((x) => x !== t), nOpt - 1);
        const ids = [t, ...others].sort(() => r() - 0.5);
        if (mode === 'letter') out.push({ prompt: question(l), answer: t, key: `t:${l.thing}`, reward: rew(l), options: ids.map((x) => ({ id: x, kind: 'thing', thing: letterById(x).thing, plaque: letterById(x).ch })) });
        else if (mode === 'word') out.push({ prompt: wordQuestion(l), answer: t, reward: rew(l), options: ids.map((x) => ({ id: x, kind: 'thing', thing: letterById(x).thing })) });
        else out.push({ prompt: firstQuestion(l), answer: t, reward: rew(l), show: { type: 'thing', thing: l.thing }, options: ids.map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) });
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
