// «أطعم الحيوان» rules (pure): a hungry animal sits on the grass and the app asks "the rabbit is hungry! what will he
// eat?"; foods wait on plates on a picnic table and the child taps the right one; the animal eats happily and the app
// says what it likes ("the rabbit likes carrots"). A wrong food only makes the animal shake its head kindly; after two
// misses the right plate glows. Ages: 4 gets the familiar animals with three plates, 5 and 6 get more (age field), and a
// world shows its own animals (farm animals on the farm, jungle animals in the jungle...). Eight rounds; skill 'nature';
// one dashboard event per round.
import { rng } from '../maze/sim.js';

// Every animal: its picture (`thing`), the food it is asked about (`food`), foods it ALSO eats (`also`: never offered as a
// wrong plate, so a right answer is never marked wrong), the youngest age that gets it (`age`) and the worlds it lives in
// (`groups`). No pig (the app's families would not want it). All pictures are ones the app already has.
export const ANIMALS = [
  { id: 'rabbit', thing: 'bunny', the: 'الأرنب', fem: false, food: 'carrot', also: ['lettuce', 'grass'], age: 4, groups: ['meadow'] },
  { id: 'cat', thing: 'cat', the: 'القطة', fem: true, food: 'fish', also: [], age: 4, groups: ['meadow'] },
  { id: 'dog', thing: 'dog', the: 'الكلب', fem: false, food: 'bone', also: ['meat'], age: 4, groups: ['meadow'] },
  { id: 'monkey', thing: 'monkey', the: 'القرد', fem: false, food: 'banana', also: ['berries'], age: 4, groups: ['jungle'] },
  { id: 'cow', thing: 'cow', the: 'البقرة', fem: true, food: 'grass', also: ['f_haypile'], age: 4, groups: ['farm'] },
  { id: 'bear', thing: 'bear', the: 'الدب', fem: false, food: 'honey', also: ['fish', 'berries'], age: 4, groups: ['snow'] },
  { id: 'mouse', thing: 'mouse', the: 'الفار', fem: false, food: 'cheese', also: ['seeds', 'corn'], age: 5, groups: ['meadow'] },
  { id: 'chick', thing: 'chick', the: 'الكتكوت', fem: false, food: 'seeds', also: ['corn'], age: 4, groups: ['farm'] },
  { id: 'horse', thing: 'horse', the: 'الحصان', fem: false, food: 'f_haypile', also: ['grass', 'carrot'], age: 4, groups: ['farm', 'desert'] },
  { id: 'hen', thing: 'hen', the: 'الفرخة', fem: true, food: 'corn', also: ['seeds'], age: 4, groups: ['farm'] },
  { id: 'donkey', thing: 'f_donkey', the: 'الحمار', fem: false, food: 'carrot', also: ['grass', 'f_haypile', 'lettuce'], age: 5, groups: ['farm', 'desert'] },
  { id: 'goat', thing: 'f_goat', the: 'الماعز', fem: false, food: 'grass', also: ['f_haypile', 'lettuce', 'leaves'], age: 5, groups: ['farm'] },
  { id: 'parrot', thing: 'j_parrot', the: 'الببغاء', fem: false, food: 'seeds', also: ['berries', 'corn'], age: 5, groups: ['jungle'] },
  // new (2026-11-17)
  { id: 'sheep', thing: 'f_sheep', the: 'الخروف', fem: false, food: 'grass', also: ['f_haypile', 'lettuce'], age: 5, groups: ['farm'] },
  { id: 'rooster', thing: 'f_rooster', the: 'الديك', fem: false, food: 'seeds', also: ['corn'], age: 5, groups: ['farm'] },
  { id: 'lion', thing: 'j_lion', the: 'الأسد', fem: false, food: 'meat', also: [], age: 4, groups: ['jungle'] },
  { id: 'tiger', thing: 'j_tiger', the: 'النمر', fem: false, food: 'meat', also: [], age: 5, groups: ['jungle'] },
  { id: 'elephant', thing: 'j_elephant', the: 'الفيل', fem: false, food: 'leaves', also: ['grass', 'banana', 'carrot'], age: 4, groups: ['jungle'] },
  { id: 'giraffe', thing: 'j_giraffe', the: 'الزرافة', fem: true, food: 'leaves', also: ['grass'], age: 5, groups: ['jungle'] },
  { id: 'zebra', thing: 'j_zebra', the: 'الحمار الوحشي', fem: false, food: 'grass', also: ['f_haypile', 'leaves'], age: 5, groups: ['jungle'] },
  { id: 'gorilla', thing: 'j_gorilla', the: 'الغوريلا', fem: true, food: 'leaves', also: ['banana', 'berries'], age: 6, groups: ['jungle'] },
  { id: 'chameleon', thing: 'j_chameleon', the: 'الحرباية', fem: true, food: 'insect', also: ['worm'], age: 6, groups: ['jungle'] },
  { id: 'frog', thing: 'j_frog', the: 'الضفدع', fem: false, food: 'worm', also: ['insect'], age: 6, groups: ['jungle', 'meadow'] },
  { id: 'toucan', thing: 'j_toucan', the: 'التوكان', fem: false, food: 'berries', also: ['banana'], age: 6, groups: ['jungle'] },
  { id: 'penguin', thing: 'w_penguin', the: 'البطريق', fem: false, food: 'fish', also: [], age: 5, groups: ['snow', 'underwater'] },
  { id: 'seal', thing: 'w_seal', the: 'الفقمة', fem: true, food: 'fish', also: [], age: 5, groups: ['snow', 'underwater'] },
  { id: 'reindeer', thing: 'w_reindeer', the: 'الرنة', fem: true, food: 'grass', also: ['leaves', 'carrot'], age: 6, groups: ['snow'] },
  { id: 'fox', thing: 'w_fox', the: 'الثعلب', fem: false, food: 'meat', also: ['berries'], age: 5, groups: ['snow', 'desert'] },
  { id: 'camel', thing: 'd_camel', the: 'الجمل', fem: false, food: 'grass', also: ['leaves', 'f_haypile'], age: 5, groups: ['desert'] },
  { id: 'hawk', thing: 'd_hawk', the: 'الصقر', fem: false, food: 'meat', also: [], age: 6, groups: ['desert'] },
  { id: 'dolphin', thing: 'u_dolphin', the: 'الدلفين', fem: false, food: 'fish', also: [], age: 5, groups: ['underwater'] },
  { id: 'turtle', thing: 'u_turtle', the: 'السلحفاة', fem: true, food: 'lettuce', also: ['leaves', 'berries'], age: 5, groups: ['underwater', 'meadow'] },
  { id: 'bee', thing: 'bee', the: 'النحلة', fem: true, food: 'flower', also: ['honey'], age: 5, groups: ['meadow'] },
  { id: 'butterfly', thing: 'butterfly', the: 'الفراشة', fem: true, food: 'flower', also: [], age: 5, groups: ['meadow'] },
  // more, from pictures the app already had but no level used (2026-11-17)
  { id: 'goose', thing: 'goose', the: 'الوزة', fem: true, food: 'grass', also: ['seeds', 'corn', 'lettuce'], age: 4, groups: ['farm'] },
  { id: 'duck', thing: 'mallard', the: 'البطة', fem: true, food: 'seeds', also: ['corn', 'worm', 'lettuce'], age: 4, groups: ['farm', 'meadow'] },
  { id: 'pigeon', thing: 'pigeon', the: 'الحمامة', fem: true, food: 'seeds', also: ['corn'], age: 4, groups: ['meadow'] },
  { id: 'peacock', thing: 'peacock', the: 'الطاووس', fem: false, food: 'seeds', also: ['corn', 'berries', 'worm'], age: 5, groups: ['farm', 'jungle'] },
  { id: 'shark', thing: 'shark', the: 'القرش', fem: false, food: 'fish', also: ['meat'], age: 5, groups: ['underwater'] },
  { id: 'cheetah', thing: 'cheetah', the: 'الفهد', fem: false, food: 'meat', also: [], age: 5, groups: ['jungle'] },
  { id: 'croc', thing: 'croc', the: 'التمساح', fem: false, food: 'fish', also: ['meat'], age: 5, groups: ['jungle'] },
  { id: 'iguana', thing: 'iguana', the: 'السحلية الكبيرة', fem: true, food: 'leaves', also: ['insect', 'lettuce', 'berries'], age: 6, groups: ['jungle', 'desert'] },
  { id: 'mantis', thing: 'mantis', the: 'فرس النبي', fem: false, food: 'insect', also: ['worm'], age: 6, groups: ['meadow'] },
  { id: 'caterpillar', thing: 'caterpillar', the: 'اليرقة', fem: true, food: 'leaves', also: ['lettuce'], age: 5, groups: ['meadow'] },
  { id: 'trex', thing: 'trex', the: 'الديناصور المفترس', fem: false, food: 'meat', also: [], age: 5, groups: ['dino'] },
  { id: 'triceratops', thing: 'triceratops', the: 'الديناصور أبو قرون', fem: false, food: 'leaves', also: ['grass'], age: 5, groups: ['dino'] },
  { id: 'stego', thing: 'stego', the: 'الديناصور أبو شوك', fem: false, food: 'leaves', also: ['grass'], age: 6, groups: ['dino'] },
  { id: 'brachio', thing: 'brachio', the: 'الديناصور الطويل', fem: false, food: 'leaves', also: ['grass'], age: 6, groups: ['dino'] },
];
// `thing` is the picture a plate shows (an art name, or one of the things the 3D kit draws itself).
export const FOODS = {
  carrot: { the: 'الجزر', thing: 'carrot' },
  fish: { the: 'السمك', thing: 'fish' },
  bone: { the: 'العضمة', thing: 'bone' },
  banana: { the: 'الموز', thing: 'banana' },
  grass: { the: 'الحشيش', thing: 'grass' },
  honey: { the: 'العسل', thing: 'honey' },
  cheese: { the: 'الجبنة', thing: 'cheese' },
  seeds: { the: 'الحَب', thing: 'seeds' },
  f_haypile: { the: 'التبن', thing: 'f_haypile' },
  corn: { the: 'الدرة', thing: 'corn' },
  meat: { the: 'اللحمة', thing: 'o_chicken' },
  leaves: { the: 'ورق الشجر', thing: 'j_leaf' },
  lettuce: { the: 'الخس', thing: 'v_lettuce' },
  berries: { the: 'التوت', thing: 'q_berries' },
  worm: { the: 'الدودة', thing: 'i_worm' },
  insect: { the: 'الجندب', thing: 'grasshopper' },
  flower: { the: 'الزهرة', thing: 't_flower' },
};

// «مين بيقول ...؟» and «بيعيش فين؟»: what an animal says (the sentence is said by the narrator, not a recording of the animal) and where it lives.
// Animals that share a sound (sheep and goat) or have no clear home are left out of that question.
export const SOUNDS = {
  cow: { id: 'moo', say: 'موووو' }, cat: { id: 'meow', say: 'مياو' }, dog: { id: 'woof', say: 'هو هو' }, sheep: { id: 'baa', say: 'ماااع' },
  rooster: { id: 'crow', say: 'كوكو كوكوكو' }, hen: { id: 'cluck', say: 'كاك كاك' }, chick: { id: 'peep', say: 'بيو بيو' }, duck: { id: 'quack', say: 'واك واك' },
  donkey: { id: 'hee', say: 'هيييه' }, horse: { id: 'neigh', say: 'هيهيهيهي' }, lion: { id: 'roar', say: 'رووور' }, frog: { id: 'croak', say: 'نق نق' },
  bee: { id: 'buzz', say: 'زززز' }, mouse: { id: 'squeak', say: 'إيك إيك' }, elephant: { id: 'trumpet', say: 'بوووو' }, pigeon: { id: 'coo', say: 'غوغو' }, monkey: { id: 'ooh', say: 'أوو أوو' },
};
export const PLACES = {
  farm: { thing: 'barn_f', say: 'في المزرعة' }, jungle: { thing: 'j_tree', say: 'في الغابة' }, sea: { thing: 'u_arch', say: 'في البحر' },
  snow: { thing: 'w_igloo', say: 'في الثلج' }, desert: { thing: 'd_tent', say: 'في الصحرا' }, house: { thing: 'c_house', say: 'في البيت' },
};
export const HOMES = {
  cow: 'farm', chick: 'farm', horse: 'farm', hen: 'farm', donkey: 'farm', goat: 'farm', sheep: 'farm', rooster: 'farm', goose: 'farm', duck: 'farm',
  monkey: 'jungle', lion: 'jungle', tiger: 'jungle', elephant: 'jungle', giraffe: 'jungle', zebra: 'jungle', gorilla: 'jungle', chameleon: 'jungle', parrot: 'jungle',
  toucan: 'jungle', cheetah: 'jungle', iguana: 'jungle', frog: 'jungle', croc: 'jungle', bear: 'snow', penguin: 'snow', seal: 'snow', reindeer: 'snow', fox: 'snow',
  camel: 'desert', dolphin: 'sea', shark: 'sea', turtle: 'sea', cat: 'house', dog: 'house', rabbit: 'house', mouse: 'house',
};
const verb = (a) => (a.fem ? 'بتقول' : 'بيقول');
const liveVerb = (a) => (a.fem ? 'بتعيش' : 'بيعيش');
export const soundQ = (snd) => `مين بيقول ${snd.say}؟`;
export const soundSay = (a) => `${a.the} ${verb(a)} ${SOUNDS[a.id].say}`;
export const homeQ = (a) => `${a.the} ${liveVerb(a)} فين؟`;
export const homeSay = (a) => `${a.the} ${liveVerb(a)} ${PLACES[HOMES[a.id]].say}`;
export const hasSound = (id) => !!SOUNDS[id];
export const homeOf = (id) => HOMES[id] || null;
/** Every sentence of the two extra animal questions (for the voice list). */
export function allAnimalExtraSentences() {
  const out = [];
  for (const a of ANIMALS) {
    if (SOUNDS[a.id]) { out.push(soundQ(SOUNDS[a.id]), soundSay(a)); }
    if (HOMES[a.id]) { out.push(homeQ(a), homeSay(a)); }
  }
  return [...new Set(out)];
}

export const ROUNDS = 8;
export const MIN_GROUP = 8; // a world shows only its own animals when it has at least a full game (eight) of them for the age
/** The animals of this age; with a world, that world's own animals (when it has enough of them for the age). */
export function poolFor(age, world = null) {
  const ofAge = ANIMALS.filter((a) => a.age <= Math.max(4, age));
  if (!world) return ofAge;
  const own = ofAge.filter((a) => a.groups.includes(world));
  return own.length >= MIN_GROUP ? own : ofAge;
}
/** Age-free bank of the animals level: every animal, or the world's own animals when it has at least a full game (eight) of them. */
export function bankFor(world = null) {
  if (!world) return ANIMALS;
  const own = ANIMALS.filter((a) => a.groups.includes(world));
  return own.length >= MIN_GROUP ? own : ANIMALS;
}
/** Every food the animal may eat (the asked one first): a wrong plate is never one of them. */
export const edibleBy = (a) => [a.food, ...(a.also || [])];
export const platesFor = (age) => (age <= 5 ? 3 : 4);
export const animalById = (id) => ANIMALS.find((a) => a.id === id);
export const question = (a) => `${a.the} ${a.fem ? 'جعانة' : 'جعان'}! ${a.fem ? 'هتاكل' : 'هياكل'} إيه؟`;
export const reward = (a) => `${a.the} ${a.fem ? 'بتحب' : 'بيحب'} ${FOODS[a.food].the}`;

export function makeRounds(age, seed, world = null) {
  const r = rng(seed);
  const pool = poolFor(age, world).map((a) => a.id);
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

/** The plates of one round: the right food and other animals' foods (never one this animal also eats), shuffled. */
/** [used] (optional Map food -> times shown in this game): the wrong plates are the least shown foods, and the shown ones are counted. */
export function platesOf(age, animalId, seed, world = null, used = null) {
  const r = rng(seed);
  const a = animalById(animalId);
  const right = a.food;
  const bad = new Set(edibleBy(a));
  const others = poolFor(age, world).map((x) => x.food).filter((f) => !bad.has(f));
  // foods of animals outside the pool may fill in when the pool is small
  for (const x of ANIMALS) if (!bad.has(x.food) && !others.includes(x.food)) others.push(x.food);
  let list = [...new Set(others)].sort(() => r() - 0.5);
  if (used) list = list.sort((x, y) => (used.get(x) || 0) - (used.get(y) || 0));
  const take = list.slice(0, platesFor(age) - 1);
  if (used) for (const f of [right, ...take]) used.set(f, (used.get(f) || 0) + 1);
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
