// Lists the English target words the learning games need, from the games' own data (not from memory).
//   node tools/game_voice/english_wordlist.mjs   ->  docs/ENGLISH_WORDLIST.csv (+ prints the counts)
// Each word gets 3 clips: the word at normal speed, the word slowly, and a short sentence ("This is a cat.").
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SRC = join(ROOT, 'game_src', 'learn_games', 'src');
const imp = (p) => import(pathToFileURL(join(SRC, p)).href);
const { clipId } = await imp('kit/voice.js');
const clean = (s) => String(s).replace(/^[a-z]_/, '').replace(/_\d+$/, '').replace(/_/g, ' ').toLowerCase().trim();
const FIX = { trex: 'T. rex', stego: 'stegosaurus', brachio: 'brachiosaurus', croc: 'crocodile', mallard: 'duck', tang: 'tang fish', haypile: 'hay', skyblue: 'sky blue', lightgreen: 'light green', darkgreen: 'dark green', mama: 'mom', baba: 'dad', flake: 'snowflake', mic: 'microphone', note: 'music note', sphere: 'sphere', 'bird blue': 'bluebird', blueplanet: 'blue planet', pinkplanet: 'pink planet', ringplanet: 'ringed planet', pinktube: '', tang: 'tang fish', cotton: 'cotton candy', jelly: 'jellyfish', crocodile: 'crocodile', 'tang fish': 'blue tang', firetruck: 'fire truck', sunflower: 'sunflower' };
const fix = (w) => FIX[w] || w;
const cats = new Map(); const seen = new Map(); // english -> first category (a word is recorded once)
const add = (cat, en, ar = '') => {
  // (cat may be reassigned below)
  const w = fix(clean(en)); if (!w || /^\d/.test(w) || w === 'pinktube') return;
  if (w === 'flamingo' && cat.includes('insects')) { cat = 'animals'; }
  if (seen.has(w)) return; seen.set(w, cat);
  if (!cats.has(cat)) cats.set(cat, []); cats.get(cat).push({ en: w, ar });
};

// numbers, letters, colours, shapes, time first (they have real English names)
const NUM = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(' ');
NUM.forEach((n, i) => add('numbers 0-20', n, String(i)));
for (const [n, v] of [['thirty', 30], ['forty', 40], ['fifty', 50], ['sixty', 60], ['seventy', 70], ['eighty', 80], ['ninety', 90], ['one hundred', 100]]) add('tens to 100', n, String(v));
for (const L of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') add('letters A-Z (name)', 'letter ' + L, L);
const col = await imp('letters/colors.js'); for (const c of col.COLORS) add('colours', c.id, c.name);
const sh = await imp('letters/shapes_all.js'); for (const s of sh.SHAPES_ALL) add('shapes', s.id, s.ar);
for (const d of 'Saturday Sunday Monday Tuesday Wednesday Thursday Friday'.split(' ')) add('days', d);
for (const m of 'January February March April May June July August September October November December'.split(' ')) add('months', m);
for (const s of 'summer winter spring autumn'.split(' ')) add('seasons', s);
for (const p of 'morning noon evening night'.split(' ')) add('parts of the day', p);
const dayg = await imp('day/sim.js'); for (const s of dayg.STEPS) add('daily routine', s.en.toLowerCase(), s.ar);
const ball = await imp('ball/sim.js'); for (const s of ball.SPOTS) add('places (where is the ball)', s.en, s.ar);
const pat = await imp('pattern/sim.js'); for (const b of pat.BEADS) add('pattern beads', b.en, b.ar);
// things
const an = await imp('animals/sim.js'); for (const a of an.ANIMALS) add('animals', a.thing, a.the);
const packs = join(ROOT, 'tools', 'game_voice', 'packs');
for (const f of readdirSync(packs).sort()) { const p = JSON.parse(readFileSync(join(packs, f), 'utf8')); for (const it of p.items) add('picture pack: ' + p.pack, it.thing || it.id, it.word); }
const lv = await imp('letters/levels.js'); for (const w of lv.WORD_ITEMS) add('picture words', w.thing, w.word);
for (const a of an.ANIMALS) { if (a.food) add('animal foods', a.food); for (const f of a.also || []) add('animal foods', f); }
const ct = col.COLOR_THINGS; for (const arr of Object.values(ct)) for (const t of arr) add('things of a colour', t);
const { ITEM_WORDS } = await imp('kit/words.js'); for (const [k, v] of Object.entries(ITEM_WORDS)) add('toys and fruit (sorting)', v[1], v[0]);

const MASS = new Set('rice milk water bread honey cheese juice soup corn grass hay meat fish hair candy'.split(' '));
const PLURAL = /s$/; const PLUR_OK = new Set('grapes berries socks shoes gloves glasses pajamas trousers friends blocks balloons dates olives peas'.split(' '));
const ADJ = new Set(['hot', 'cold']);
const sentence = (cat, w) => {
  if (cat.startsWith('letters')) return `${w[0].toUpperCase()}${w.slice(1)}.`;
  if (cat.startsWith('numbers') || cat.startsWith('tens')) return `${w[0].toUpperCase()}${w.slice(1)}!`;
  if (['days', 'months', 'seasons', 'parts of the day'].includes(cat)) return `${w[0].toUpperCase()}${w.slice(1)}.`;
  if (cat === 'daily routine') return `Let's ${w.replace(/^./, (c) => c.toLowerCase())}!`;
  if (cat.startsWith('places')) return `The ball is ${w}.`;
  if (cat === 'colours') return `This is ${w}.`;
  if (cat === 'picture pack: family' && !['friends', 'family'].includes(w)) return `This is my ${w}.`;
  if (w === 'cotton candy') return 'This is cotton candy.';
  if (ADJ.has(w)) return `It is ${w}.`;
  if (MASS.has(w) || PLUR_OK.has(w)) return `These are ${w}.`.replace('These are', MASS.has(w) ? 'This is' : 'These are');
  return `This is ${/^[aeiou]/.test(w) ? 'an' : 'a'} ${w}.`;
};
const rows = ['category,english_word,arabic_hint,clip1_word_normal,clip2_same_word_READ_SLOWLY,clip3_sentence,file1_word,file2_slow,file3_sentence'];
let total = 0;
for (const [cat, list] of cats) for (const x of list) { total++; rows.push([cat, x.en, x.ar, x.en, x.en, sentence(cat, x.en), clipId(x.en, 'en') + '.mp3', clipId(x.en, 'en') + '_slow.mp3', clipId(sentence(cat, x.en), 'en') + '.mp3'].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')); }
writeFileSync(join(ROOT, 'docs', 'ENGLISH_WORDLIST.csv'), '﻿' + rows.join('\n') + '\n');
for (const [cat, list] of cats) console.log(String(list.length).padStart(4), cat);
console.log(`TOTAL ${total} words -> ${total * 3} clips`);
