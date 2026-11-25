// «English with Rehlaty» (pure rules): English levels in the same learning world. The child HEARS an English word (a recording from the
// owner's English voice pack) and taps the picture / number / letter / colour / shape / sign that matches. The teaching is the repeat:
//   * a word the child has not met yet is heard normally AND slowly (the slow clip), then once more when answered;
//   * a wrong tap only plays the slow clip again (no penalty);
//   * after the answer the short sentence of the pack is heard («This is a cat.») and shown;
//   * the last rounds of a level ask three of the same words again with different neighbours (the repeat), so a word is met three times.
// Every word needs a picture / sign the app already has (tools/make_english_data.py): nothing is invented.
import WORDS from './words.json' with { type: 'json' };
import { colorOf } from '../letters/colors.js';
import { numberWord } from '../letters/numbers.js';

const pack = (...cats) => (e) => cats.includes(e.cat);
export const EN_LEVELS = [
  { id: 'en_animals', mode: 'en', ar: 'Animals', emoji: '🐶', skill: 'vocab', pick: pack('animals'), kinds: ['thing'] },
  { id: 'en_first', mode: 'en', ar: 'My first words', emoji: '🍌', skill: 'vocab', pick: pack('picture words', 'toys and fruit (sorting)'), kinds: ['thing'] },
  { id: 'en_family', mode: 'en', ar: 'Me and my family', emoji: '🧒', skill: 'vocab', pick: pack('picture pack: body', 'picture pack: family'), kinds: ['thing'] },
  { id: 'en_food', mode: 'en', ar: 'Yummy food', emoji: '🥕', skill: 'vocab', pick: pack('picture pack: food', 'picture pack: veg', 'picture pack: fruit2'), kinds: ['thing'] },
  { id: 'en_school', mode: 'en', ar: 'Clothes and school', emoji: '🎒', skill: 'vocab', pick: pack('picture pack: clothes', 'picture pack: school'), kinds: ['thing'] },
  { id: 'en_world', mode: 'en', ar: 'Jobs, music and weather', emoji: '🌦️', skill: 'vocab', pick: pack('picture pack: jobs', 'picture pack: music', 'picture pack: weather', 'picture pack: insects', 'picture pack: shapes'), kinds: ['thing'] },
  { id: 'en_colorful', mode: 'en', ar: 'Colourful things', emoji: '🍓', skill: 'colors', pick: pack('things of a colour', 'animal foods'), kinds: ['thing'] },
  { id: 'en_routine', mode: 'en', ar: 'My day', emoji: '🪥', skill: 'vocab', pick: pack('daily routine'), kinds: ['thing'] },
  { id: 'en_numbers', mode: 'en', ar: 'Numbers', emoji: '🔢', skill: 'counting', pick: pack('numbers 0-20'), kinds: ['number'] },
  { id: 'en_letters', mode: 'en', ar: 'ABC', emoji: '🔤', skill: 'vocab', pick: pack('letters A-Z (name)'), kinds: ['letter'] },
  { id: 'en_colors', mode: 'en', ar: 'Colours', emoji: '🎨', skill: 'colors', pick: pack('colours'), kinds: ['color'] },
  { id: 'en_shapes', mode: 'en', ar: 'Shapes', emoji: '🔷', skill: 'shapes', pick: pack('shapes'), kinds: ['shape'] },
  { id: 'en_time', mode: 'en', ar: 'Days and months', emoji: '📅', skill: 'vocab', pick: pack('days', 'months', 'seasons', 'parts of the day'), kinds: ['letter'] },
  { id: 'en_tens', mode: 'en', ar: 'Big numbers', emoji: '🔟', skill: 'counting', pick: pack('tens to 100'), kinds: ['number'] },
];
export const isEnglishLevel = (id) => typeof id === 'string' && id.startsWith('en_');

const kindOf = (e) => (e.thing ? 'thing' : e.n != null ? 'number' : e.color ? 'color' : e.shape ? 'shape' : 'letter');
export const poolOfLevel = (lv) => WORDS.filter(lv.pick);
export const wordKey = (e) => `en:${e.cat}:${e.en}`;

/** How many of the pool a child of this age meets in one level: the youngest start with the first, easier part (the rest comes on later plays). */
export function limitFor(age, size) {
  const f = age <= 3 ? 0.4 : age === 4 ? 0.7 : 1;
  return Math.max(Math.min(size, 8), Math.ceil(size * f));
}

const SHAPE_PAINT = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];

/** The words as the voice says them. */
export const sayWord = (e) => ({ t: e.w, lang: 'en' });
export const saySlow = (e) => ({ t: e.w, lang: 'en', slow: true });
export const saySentence = (e) => ({ t: e.s, lang: 'en' });

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
      prompt: e.en.charAt(0).toUpperCase() + e.en.slice(1),
      answer: `${e.cat}|${e.en}`,
      key: keyOf(e),
      reward: e.s,
      // what he answered, in Arabic, said with the praise («شاطر! قطة») (letters have no Arabic word)
      arWord: e.ar || (e.n != null ? numberWord(e.n) : null),
      lang: 'en',
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
