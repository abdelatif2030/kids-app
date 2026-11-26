// «English with Rehlaty» (pure rules): English levels in the same learning world. The child HEARS an English word (a recording from the
// owner's English voice pack) and taps the picture / number / letter / colour / shape / sign that matches. The teaching is the repeat:
//   * a word the child has not met yet is heard normally AND slowly (the slow clip), then once more when answered;
//   * a wrong tap only plays the slow clip again (no penalty);
//   * after the answer the short sentence of the pack is heard («This is a cat.») and shown;
//   * the last rounds of a level ask three of the same words again with different neighbours (the repeat), so a word is met three times.
// Every word needs a picture / sign the app already has (tools/make_english_data.py): nothing is invented.
import WORDS from './words.json' with { type: 'json' };
import DE_WORDS from '../german/words.json' with { type: 'json' };
import FR_WORDS from '../french/words.json' with { type: 'json' };
import { colorOf } from '../letters/colors.js';
import { numberWord } from '../letters/numbers.js';

const pack = (...cats) => (e) => cats.includes(e.cat);
export const EN_LEVELS = [
  { id: 'en_animals', mode: 'en', ar: 'Animals', emoji: '🐶', skill: 'vocab', pick: pack('animals', 'x:animals'), kinds: ['thing'] },
  { id: 'en_first', mode: 'en', ar: 'My first words', emoji: '🍌', skill: 'vocab', pick: pack('picture words', 'toys and fruit (sorting)'), kinds: ['thing'] },
  { id: 'en_family', mode: 'en', ar: 'Me and my family', emoji: '🧒', skill: 'vocab', pick: pack('picture pack: body', 'picture pack: family', 'x:family'), kinds: ['thing'] },
  { id: 'en_food', mode: 'en', ar: 'Yummy food', emoji: '🥕', skill: 'vocab', pick: pack('picture pack: food', 'picture pack: veg', 'picture pack: fruit2', 'x:food'), kinds: ['thing'] },
  { id: 'en_school', mode: 'en', ar: 'Clothes and school', emoji: '🎒', skill: 'vocab', pick: pack('picture pack: clothes', 'picture pack: school', 'x:school'), kinds: ['thing'] },
  { id: 'en_world', mode: 'en', ar: 'Jobs, music and weather', emoji: '🌦️', skill: 'vocab', pick: pack('picture pack: jobs', 'picture pack: music', 'picture pack: weather', 'picture pack: insects', 'picture pack: shapes', 'x:world'), kinds: ['thing'] },
  { id: 'en_colorful', mode: 'en', ar: 'Colourful things', emoji: '🍓', skill: 'colors', pick: pack('things of a colour', 'animal foods'), kinds: ['thing'] },
  { id: 'en_routine', mode: 'en', ar: 'My day', emoji: '🪥', skill: 'vocab', pick: pack('daily routine'), kinds: ['thing'] },
  { id: 'en_numbers', mode: 'en', ar: 'Numbers', emoji: '🔢', skill: 'counting', pick: pack('numbers 0-20'), kinds: ['number'] },
  { id: 'en_letters', mode: 'en', ar: 'ABC', emoji: '🔤', skill: 'vocab', pick: pack('letters A-Z (name)'), kinds: ['letter'] },
  { id: 'en_colors', mode: 'en', ar: 'Colours', emoji: '🎨', skill: 'colors', pick: pack('colours'), kinds: ['color'] },
  { id: 'en_shapes', mode: 'en', ar: 'Shapes', emoji: '🔷', skill: 'shapes', pick: pack('shapes'), kinds: ['shape'] },
  { id: 'en_time', mode: 'en', ar: 'Days and months', emoji: '📅', skill: 'vocab', pick: pack('days', 'months', 'seasons', 'parts of the day'), kinds: ['letter'] },
  { id: 'en_around', mode: 'en', ar: 'Around me', emoji: '🚗', skill: 'vocab', pick: pack('x:around'), kinds: ['thing'] },
  { id: 'en_home', mode: 'en', ar: 'My home', emoji: '🏠', skill: 'vocab', pick: pack('x:home'), kinds: ['thing'] },
  { id: 'en_city', mode: 'en', ar: 'My city and places', emoji: '🏙️', skill: 'vocab', pick: pack('x:city'), kinds: ['thing'] },
  { id: 'en_where', mode: 'en', ar: 'Where is the ball?', emoji: '⚽', skill: 'vocab', pick: pack('places (where is the ball)'), kinds: ['thing'] },
  { id: 'en_beads', mode: 'en', ar: 'Beads', emoji: '🔴', skill: 'shapes', pick: pack('pattern beads'), kinds: ['thing'] },
  { id: 'en_tens', mode: 'en', ar: 'Big numbers', emoji: '🔟', skill: 'counting', pick: pack('tens to 100'), kinds: ['number'] },
];
// The owner's pictures of the English / German worlds (assets/games/learn_letters/art): a painted backdrop for each level (en_l01.. / de_l01..)
// and a round badge (en_i0.. / de_i0..). Several levels of the same topic share one.
const EN_ART = { animals: [1, 0], first: [9, 7], family: [7, 6], food: [5, 4], school: [6, 5], world: [8, 7], colorful: [2, 1], routine: [7, 7], numbers: [3, 2], letters: [9, 8], colors: [2, 1], shapes: [4, 3], time: [8, 7], tens: [3, 2], around: [9, 7], home: [7, 6], city: [8, 7], where: [4, 3], beads: [2, 1] };
const DE_ART = { animals: [1, 0], first: [9, 8], family: [7, 6], food: [5, 4], school: [6, 5], world: [8, 7], colorful: [2, 1], routine: [7, 6], numbers: [3, 2], letters: [9, 8], colors: [2, 1], shapes: [4, 3], time: [10, 9], tens: [3, 2], around: [9, 8], home: [7, 6], city: [8, 7], where: [4, 3], beads: [2, 1] };
for (const l of EN_LEVELS) { const [b, i] = EN_ART[l.id.slice(3)]; l.art = { lang: 'en', bg: `en_l${String(b).padStart(2, '0')}`, icon: `en_i${i}`, map: 'en_map', win: 'en_win' }; }
// German with Rehlaty: the same levels (same pictures), the German words of docs/GERMAN_WORDLIST.csv. Ids de_*; level names in German.
const DE_NAMES = { animals: 'Tiere', first: 'Meine ersten Wörter', family: 'Ich und meine Familie', food: 'Lecker essen', school: 'Kleidung und Schule', world: 'Berufe, Musik und Wetter',
  colorful: 'Bunte Dinge', routine: 'Mein Tag', numbers: 'Zahlen', letters: 'ABC', colors: 'Farben', shapes: 'Formen', time: 'Tage und Monate', tens: 'Große Zahlen', around: 'Um mich herum', home: 'Mein Zuhause', city: 'Meine Stadt', where: 'Wo ist der Ball?', beads: 'Perlen' };
export const DE_LEVELS = EN_LEVELS.filter((l) => DE_WORDS.some(l.pick)).map((l) => {
  const k = l.id.slice(3);
  const [b, i] = DE_ART[k];
  const d = { ...l, id: `de_${k}`, mode: 'en', lang: 'de', ar: DE_NAMES[k], words: DE_WORDS, art: { lang: 'de', bg: `de_l${String(b).padStart(2, '0')}`, icon: `de_i${i}`, map: 'de_map', win: 'de_win' } };
  if (k === 'letters') d.pick = pack('letters A-Z (name)', 'letters (German only)');
  return d;
});
// French with Rehlaty: the same levels and pictures, the French words of docs/FRENCH_WORDLIST.csv. Ids fr_*. The map / badges / win picture are the English
// world's until the owner's French pictures arrive (docs/FRENCH_IMAGE_PROMPTS.md).
const FR_NAMES = { animals: 'Les animaux', first: 'Mes premiers mots', family: 'Moi et ma famille', food: 'Miam miam', school: 'Vêtements et école', world: 'Métiers, musique et météo',
  colorful: 'Choses de couleur', routine: 'Ma journée', numbers: 'Les chiffres', letters: "L'alphabet", colors: 'Les couleurs', shapes: 'Les formes', time: 'Jours et mois', tens: 'Grands nombres', where: 'Où est la balle ?', beads: 'Les perles' };
export const FR_LEVELS = EN_LEVELS.filter((l) => FR_WORDS.some(l.pick)).map((l) => {
  const k = l.id.slice(3);
  const f = { ...l, id: `fr_${k}`, mode: 'en', lang: 'fr', ar: FR_NAMES[k], words: FR_WORDS, art: { ...l.art, lang: 'fr' } };
  if (k === 'letters') f.pick = pack('letters A-Z (name)', 'letters (French only)');
  return f;
});
export const isEnglishLevel = (id) => typeof id === 'string' && id.startsWith('en_');
export const isFrenchLevel = (id) => typeof id === 'string' && id.startsWith('fr_');
export const isGermanLevel = (id) => typeof id === 'string' && id.startsWith('de_');

const kindOf = (e) => (e.thing ? 'thing' : e.n != null ? 'number' : e.color ? 'color' : e.shape ? 'shape' : 'letter');
const langOf = (e) => e.lang || (e.eng !== undefined ? 'de' : 'en');
export const poolOfLevel = (lv) => (lv.words || WORDS).filter(lv.pick);
export const wordKey = (e) => `${langOf(e)}:${e.cat}:${e.en}`;

/** How many of the pool a child of this age meets in one level: the youngest start with the first, easier part (the rest comes on later plays). */
export function limitFor(age, size) {
  const f = age <= 3 ? 0.4 : age === 4 ? 0.7 : 1;
  return Math.max(Math.min(size, 8), Math.ceil(size * f));
}

const SHAPE_PAINT = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];

/** The words as the voice says them. */

export const sayWord = (e) => ({ t: e.w, lang: langOf(e) });
export const saySlow = (e) => ({ t: e.w, lang: langOf(e), slow: true });
export const saySentence = (e) => ({ t: e.s, lang: langOf(e) });

function optionOf(e, i, r) {
  const id = `${e.cat}|${e.en}`;
  switch (kindOf(e)) {
    case 'thing': return { id, kind: 'thing', thing: e.thing };
    case 'number': return { id, kind: 'number', n: e.n, latin: true };
    case 'color': { const c = colorOf(e.color); return { id, kind: 'color', hex: c.hex, metal: c.metal || 0 }; }
    case 'shape': return { id, kind: 'shape', shape: e.shape, color: SHAPE_PAINT[Math.floor(r() * SHAPE_PAINT.length)] };
    default: return { id, kind: 'letter', ch: e.ch };
  }
}

/**
 * The rounds of one English level: [rounds] questions. The first ones are NEW words (never met first, then the oldest), the last ones
 * repeat three of them with other neighbours.
 * @param mem FreshMemory (optional)  @param nOpt choices per round  @param r random function
 */
export function englishRounds(level, age, r, mem, nOpt, rounds) {
  const all = poolOfLevel(level);
  const keyOf = wordKey;
  const ordered = mem ? mem.order(all, keyOf, r) : [...all].sort(() => r() - 0.5);
  const cut = limitFor(age, all.length);
  // the youngest see the first part of the list (it is in teaching order: easy first); a word the child already met still wins nothing: `mem.order` puts the new ones first
  const allowed = new Set(all.slice(0, cut).map(keyOf));
  let targets = ordered.filter((e) => allowed.has(keyOf(e)));
  if (targets.length < Math.min(rounds, all.length)) targets = ordered;
  const nNew = Math.min(targets.length, Math.max(1, rounds - 3));
  const firsts = targets.slice(0, nNew);
  const plan = [...firsts];
  const again = [...firsts].sort(() => r() - 0.5);
  while (plan.length < rounds) plan.push(again[(plan.length - nNew) % again.length]);
  const out = [];
  plan.forEach((e, i) => {
    const review = i >= nNew;
    const sameKind = all.filter((x) => keyOf(x) !== keyOf(e) && kindOf(x) === kindOf(e) && x.w.toLowerCase() !== e.w.toLowerCase());
    // neighbours that look alike in a picture level (animals with animals): the same pack first, anything of the level otherwise
    const samePack = sameKind.filter((x) => x.cat === e.cat);
    const pool = (samePack.length >= nOpt - 1 ? samePack : sameKind).sort(() => r() - 0.5);
    const others = pool.slice(0, nOpt - 1);
    const opts = [e, ...others].sort(() => r() - 0.5).map((x, k) => optionOf(x, k, r));
    const fresh = !review && (!mem || mem.score(keyOf(e)) <= 0);
    out.push({
      prompt: e.en.charAt(0).toUpperCase() + e.en.slice(1), // (German nouns already start with a capital)
      answer: `${e.cat}|${e.en}`,
      key: keyOf(e),
      reward: e.s,
      // what he answered, in Arabic, said with the praise («شاطر! قطة») (letters have no Arabic word)
      arWord: e.ar || (e.n != null ? numberWord(e.n) : null),
      lang: langOf(e),
      // heard: the word (a new word also slowly); retry after a wrong tap: slowly; right: the sentence of the pack
      say: fresh ? [sayWord(e), saySlow(e)] : [sayWord(e)],
      retry: [saySlow(e)],
      rewardSay: [saySentence(e)],
      review,
      options: opts,
    });
  });
  return out;
}
