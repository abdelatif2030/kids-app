// The sections of the «اتعلّم» (learn) mode: every basic thing a child learns, in Arabic, English, German and French.
// A section is a list of items; an item = what is shown (`show`, for Game._showStand), the label and what is said.
// Pure data (no DOM): tests/learn.test.js checks it.
import EN from '../english/words.json' with { type: 'json' };
import DE from '../german/words.json' with { type: 'json' };
import FR from '../french/words.json' with { type: 'json' };
import IT from '../italian/words.json' with { type: 'json' };
import { LETTERS } from '../letters/sim.js';
import { numberWord } from '../letters/numbers.js';
import { numberWords, numberSequence } from './numbers.js';
import { colorOf } from '../letters/colors.js';
import { EXTRA_DEFS } from './extra.js';

export const LANGS = ['ar', 'en', 'de', 'fr', 'it'];
const WORDS = { en: EN, de: DE, fr: FR, it: IT };
const engOf = (e) => (e.eng !== undefined ? e.eng : e.en); // the English word of a row (all languages share the pictures)
const S = (s) => new Set(s.split(',').map((x) => x.trim().toLowerCase()));

// animal groups, by the English word of the picture
const FARM = S('cow,hen,rooster,donkey,goat,sheep,horse,pig,duck,goose,chick,calf,lamb,puppy,kitten,cat,dog,bunny');
const PETS = S('cat,dog,bunny,hamster,parrot,kitten,puppy,fish,turtle,mouse');
const WILD = S('lion,tiger,elephant,giraffe,zebra,gorilla,monkey,bear,fox,camel,cheetah,panda,reindeer,deer,wolf,hippo,rhino,kangaroo,koala,polar bear,squirrel,hedgehog,raccoon,beaver,otter,leopard,chimpanzee,sloth,llama,meerkat,hamster,bat');
const BIRDS = S('parrot,hen,rooster,goose,duck,pigeon,peacock,hawk,owl,eagle,ostrich,swan,sparrow,crow,flamingo,toucan,dove,chick,pelican,stork,hummingbird,woodpecker,seagull,yellow bird,bluebird');
const SEA = S('fish,dolphin,shark,octopus,crab,whale,jellyfish,seahorse,starfish,turtle,clownfish,yellow fish,puffer fish,seal,walrus,lobster,shrimp,squid,clam,sea anemone,otter,tang fish');
const INSECTS = S('bee,butterfly,ant,fly,worm,caterpillar,ladybug,dragonfly,mantis,spider,snail,beetle,grasshopper,wasp,mosquito,insect');
const REPTILES = S('snake,lizard,iguana,chameleon,crocodile,turtle,tortoise,T. rex,triceratops,stegosaurus,brachiosaurus');
const ANIMAL_EXTRA = S('snake,pig,jellyfish,seahorse,dove,scorpion,lizard,starfish,clownfish,yellow fish,puffer fish,seagull,clam,sea anemone,baby camel,yellow bird');
const FEEL = S('happy,sad,angry,tired,hungry,thirsty,scared,surprised,sleepy,shy,proud,excited');
const BODYX = S('shoulder,neck,arm,leg,elbow,back,chin,cheek,eyebrow,tongue');
const FAMX = S('aunt,cousin,twins,neighbour');
const FRUIT = S('banana,apple,pear,watermelon,strawberry,grapes,orange,pineapple,mango,peach,grapefruit,tangerine,guava,lime,pomegranate,lemon,kiwi,melon,dates,fig,apricot,berries,plum,avocado,cherry,olives,coconut');
const VEG = S('carrot,corn,spinach,zucchini,cabbage,cauliflower,okra,green beans,radish,tomato,cucumber,potato,onion,eggplant,pepper,lettuce,broccoli,peas,pumpkin,garlic,mushroom');
const VEHICLES = S('car,bus,train,boat,plane,helicopter,rocket,bike,jeep,ambulance,police car,school bus,city bus,taxi,tram,bulldozer,felucca,donkey cart,tractor,sled,fire truck,space rover,flying saucer,small boat,surfboard,wooden cart,van,balloon,small rocket,space station');
const MEALS = S('pancake,popcorn,sausage,tuna,lentil soup,mango juice');

const inCats = (...c) => (e) => c.includes(e.cat);
const inSet = (set) => (e) => set.has(engOf(e).toLowerCase());
const animalCat = (e) => e.cat === 'animals' || e.cat === 'x:animals' || e.cat === 'picture pack: insects' || (e.cat === 'picture words' || e.cat === 'x:around' || e.cat === 'things of a colour' || e.cat === 'x:world') && ANIMAL_EXTRA.has(engOf(e).toLowerCase());

// id, emoji, names, how to pick the words (null = custom), kind
export const SECTION_DEFS = [
  { id: 'letters', emoji: '🔤', name: ['الحروف', 'Letters', 'Buchstaben', 'Les lettres', 'Le lettere'], kind: 'letters' },
  { id: 'numbers', emoji: '🔢', name: ['الأرقام', 'Numbers', 'Zahlen', 'Les chiffres', 'I numeri'], kind: 'numbers' },
  { id: 'animals', emoji: '🦁', name: ['كل الحيوانات', 'All animals', 'Alle Tiere', 'Tous les animaux', 'Tutti gli animali'], pick: animalCat },
  { id: 'farm', emoji: '🐄', name: ['حيوانات المزرعة', 'Farm animals', 'Bauernhoftiere', 'Les animaux de la ferme', 'Gli animali della fattoria'], pick: (e) => animalCat(e) && FARM.has(engOf(e).toLowerCase()) },
  { id: 'wild', emoji: '🐘', name: ['الحيوانات البرية', 'Wild animals', 'Wilde Tiere', 'Les animaux sauvages', 'Gli animali selvatici'], pick: (e) => animalCat(e) && WILD.has(engOf(e).toLowerCase()) },
  { id: 'birds', emoji: '🦜', name: ['الطيور', 'Birds', 'Vögel', 'Les oiseaux', 'Gli uccelli'], pick: (e) => animalCat(e) && BIRDS.has(engOf(e).toLowerCase()) },
  { id: 'sea', emoji: '🐠', name: ['حيوانات البحر', 'Sea animals', 'Meerestiere', 'Les animaux de la mer', 'Gli animali del mare'], pick: (e) => animalCat(e) && SEA.has(engOf(e).toLowerCase()) },
  { id: 'insects', emoji: '🐞', name: ['الحشرات', 'Insects', 'Insekten', 'Les insectes', 'Gli insetti'], pick: (e) => animalCat(e) && INSECTS.has(engOf(e).toLowerCase()) },
  { id: 'reptiles', emoji: '🦖', name: ['الزواحف والديناصورات', 'Reptiles and dinosaurs', 'Reptilien und Dinosaurier', 'Reptiles et dinosaures', 'Rettili e dinosauri'], pick: (e) => animalCat(e) && REPTILES.has(engOf(e).toLowerCase()) },
  { id: 'colours', emoji: '🎨', name: ['الألوان', 'Colours', 'Farben', 'Les couleurs', 'I colori'], pick: inCats('colours') },
  { id: 'shapes', emoji: '🔷', name: ['الأشكال', 'Shapes', 'Formen', 'Les formes', 'Le forme'], pick: inCats('shapes', 'picture pack: shapes') },
  { id: 'days', emoji: '📅', name: ['أيام الأسبوع', 'Days of the week', 'Wochentage', 'Les jours', 'I giorni della settimana'], pick: inCats('days') },
  { id: 'months', emoji: '🗓️', name: ['شهور السنة', 'Months', 'Monate', 'Les mois', 'I mesi'], pick: inCats('months') },
  { id: 'seasons', emoji: '🍂', name: ['الفصول وأوقات اليوم', 'Seasons and day', 'Jahreszeiten und Tag', 'Saisons et journée', 'Stagioni e momenti del giorno'], pick: inCats('seasons', 'parts of the day') },
  { id: 'body', emoji: '🧍', name: ['جسمي', 'My body', 'Mein Körper', 'Mon corps', 'Il mio corpo'], pick: (e) => e.cat === 'picture pack: body' || (e.cat === 'x:family' && BODYX.has(engOf(e).toLowerCase())) },
  { id: 'feelings', emoji: '😊', name: ['مشاعري', 'Feelings', 'Gefühle', 'Les émotions', 'Le emozioni'], pick: (e) => e.cat === 'x:family' && FEEL.has(engOf(e).toLowerCase()) },
  { id: 'clothes', emoji: '👕', name: ['هدومي', 'Clothes', 'Kleidung', 'Les vêtements', 'I vestiti'], pick: inCats('picture pack: clothes', 'x:school') },
  { id: 'family', emoji: '👪', name: ['عيلتي', 'Family', 'Familie', 'La famille', 'La famiglia'], pick: (e) => e.cat === 'picture pack: family' || (e.cat === 'x:family' && FAMX.has(engOf(e).toLowerCase())) },
  { id: 'food', emoji: '🍞', name: ['أكلي', 'Food', 'Essen', 'La nourriture', 'Il cibo'], pick: (e) => e.cat === 'picture pack: food' || (e.cat === 'x:food' && !FRUIT.has(engOf(e).toLowerCase()) && !VEG.has(engOf(e).toLowerCase())) || (e.cat === 'x:around' && MEALS.has(engOf(e).toLowerCase())) },
  { id: 'fruit', emoji: '🍎', name: ['الفاكهة', 'Fruit', 'Obst', 'Les fruits', 'La frutta'], pick: (e) => FRUIT.has(engOf(e).toLowerCase()) && !['x:world'].includes(e.cat) },
  { id: 'veg', emoji: '🥕', name: ['الخضار', 'Vegetables', 'Gemüse', 'Les légumes', 'La verdura'], pick: (e) => VEG.has(engOf(e).toLowerCase()) },
  { id: 'jobs', emoji: '👩‍⚕️', name: ['الوظايف', 'Jobs', 'Berufe', 'Les métiers', 'I mestieri'], pick: inCats('picture pack: jobs', 'x:world') },
  { id: 'school', emoji: '🎒', name: ['المدرسة', 'School', 'Schule', "L'école", 'La scuola'], pick: inCats('picture pack: school') },
  { id: 'music', emoji: '🎵', name: ['الموسيقى', 'Music', 'Musik', 'La musique', 'La musica'], pick: inCats('picture pack: music') },
  { id: 'weather', emoji: '⛅', name: ['الجو', 'Weather', 'Wetter', 'La météo', 'Il tempo'], pick: inCats('picture pack: weather') },
  { id: 'vehicles', emoji: '🚗', name: ['المواصلات', 'Vehicles', 'Fahrzeuge', 'Les véhicules', 'I veicoli'], pick: (e) => VEHICLES.has(engOf(e).toLowerCase()) },
  { id: 'home', emoji: '🏠', name: ['البيت', 'At home', 'Zuhause', 'À la maison', 'In casa'], pick: inCats('x:home') },
  { id: 'city', emoji: '🏙️', name: ['المدينة والأماكن', 'City and places', 'Stadt und Orte', 'La ville et les lieux', 'La città e i luoghi'], pick: inCats('x:city') },
  { id: 'routine', emoji: '🪥', name: ['يومي', 'My day', 'Mein Tag', 'Ma journée', 'La mia giornata'], pick: inCats('daily routine') },
  { id: 'around', emoji: '🌍', name: ['حواليّا', 'Around me', 'Um mich herum', 'Autour de moi', 'Intorno a me'], pick: (e) => e.cat === 'x:around' && !VEHICLES.has(engOf(e).toLowerCase()) && !animalCat(e) && !MEALS.has(engOf(e).toLowerCase()) },
  { id: 'things', emoji: '🧸', name: ['حاجات كتير', 'Many things', 'Viele Dinge', 'Plein de choses', 'Tante cose'], pick: inCats('picture words', 'toys and fruit (sorting)', 'things of a colour', 'animal foods') },
];
export const sectionName = (def, lang) => def.name[Math.max(0, LANGS.indexOf(lang))];

const ARABIC_ORDER = 'أبتثجحخدذرزسشصضطظعغفقكلمنهوي';

/** The `show` object Game._showStand draws for a word entry. */
export function showOf(e) {
  if (e.thing) return { type: 'thing', thing: e.thing };
  if (e.color) { const c = colorOf(e.color); return { type: 'row', items: [{ kind: 'color', hex: c.hex }] }; }
  if (e.shape) return { type: 'row', items: [{ kind: 'shape', shape: e.shape, color: 'red' }] };
  if (e.ch) return { type: 'letter', ch: e.ch, scale: 1.5 };
  if (e.n != null) return { type: 'letter', ch: String(e.n), scale: 1.5 };
  return null;
}

/** The items of a words section in one language; Arabic uses the Arabic name of the English row (rows without one are left out). */
const EN_AR = new Map(EN.map((e) => [engOf(e).toLowerCase(), e.ar]));
/** The Arabic name of a row as an optional clip (heard first in the English / German / French sections). */
function arOfRow(e) { const a = e.ar || EN_AR.get(engOf(e).toLowerCase()); return a ? [{ t: a, lang: 'ar', optional: true }] : []; }

function wordItems(def, lang) {
  const rows = (lang === 'ar' ? EN : WORDS[lang]).filter(def.pick);
  const out = [];
  const seen = new Set();
  for (const e of rows) {
    const show = showOf(e);
    if (!show) continue;
    const label = lang === 'ar' ? e.ar : e.en;
    if (!label) continue;
    const key = `${def.id}:${engOf(e)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (lang === 'ar') out.push({ key, show, label, lang: 'ar', say: [{ t: label, lang: 'ar' }], slow: [{ t: label, lang: 'ar' }], sentence: [] });
    else out.push({ key, arSay: arOfRow(e), show, label: e.cat.startsWith('letters') || e.cat === 'days' || e.cat === 'months' || e.n != null ? (e.ch || e.en) : e.en, lang, say: [{ t: e.w, lang }], slow: [{ t: e.w, lang, slow: true }], sentence: [{ t: e.s, lang }] });
  }
  return out;
}

function letterItems(lang) {
  if (lang === 'ar') {
    const rows = [...LETTERS].sort((a, b) => ARABIC_ORDER.indexOf(a.ch) - ARABIC_ORDER.indexOf(b.ch));
    return rows.map((l) => ({ key: `letters:${l.id}`, show: { type: 'letter', ch: l.ch, scale: 1.5 }, label: `${l.ch}  ${l.the}`, lang: 'ar', say: [{ t: l.the, lang: 'ar' }], slow: [{ t: l.the, lang: 'ar' }], sentence: [{ t: `${l.ch} زي ${l.word}`, lang: 'ar' }] }));
  }
  const rows = WORDS[lang].filter(inCats('letters A-Z (name)', 'letters (German only)', 'letters (French only)'));
  return rows.map((e) => ({ key: `letters:${e.en}`, show: { type: 'letter', ch: e.ch, scale: 1.5 }, label: e.ch, lang, say: [{ t: e.w, lang }], slow: [{ t: e.w, lang, slow: true }], sentence: [{ t: e.s, lang }] }));
}

/** The number items (every number to 100, then the hundreds, thousands and ten-thousands). */
export function numberItem(n, lang) {
  const text = lang === 'ar' && n <= 100 ? numberWord(n) : numberWords(n, lang).text;
  const digits = formatNumber(n, lang);
  const len = String(n).length;
  const scale = len <= 2 ? 1.6 : len === 3 ? 1.35 : len === 4 ? 1.1 : len === 5 ? 0.9 : 0.78;
  return { key: `numbers:${n}`, n, arSay: lang !== 'ar' && n <= 100 ? [{ t: numberWord(n), lang: 'ar', optional: true }] : [], show: { type: 'letter', ch: digits, scale }, label: digits, lang, say: [{ t: text, lang }], slow: [{ t: text, lang, slow: true }], sentence: [], parts: numberWords(n, lang).parts };
}
export function formatNumber(n, lang) {
  const sep = lang === 'de' || lang === 'it' ? '.' : lang === 'fr' ? ' ' : ',';
  let s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  if (lang === 'ar') s = s.replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]).replace(/,/g, '٬');
  return s;
}

/** All the sections of a language with at least [min] items. `numbers` has no list: it is a walk (see numberSequence). */
export function learnSections(lang, min = 4) {
  const out = [];
  // the order: the basics, then counting right after the numbers, and the newer kinds (sentences, stories, reading, sounds, marks) at the end
  const defs = [];
  for (const d of SECTION_DEFS) { defs.push(d); if (d.id === 'numbers') defs.push(...EXTRA_DEFS.filter((x) => x.after)); }
  defs.push(...EXTRA_DEFS.filter((x) => !x.after));
  for (const def of defs) {
    let items;
    if (def.build) items = def.build(lang);
    else if (def.kind === 'numbers') items = numberSequence(100000).map((n) => numberItem(n, lang));
    else if (def.kind === 'letters') items = letterItems(lang);
    else items = wordItems(def, lang);
    if (items.length >= min) out.push({ id: def.id, emoji: def.emoji, name: sectionName(def, lang), nameAr: def.name[0], kind: def.kind || 'words', items });
  }
  return out;
}
