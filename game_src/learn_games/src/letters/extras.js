// More ways to ask inside the SAME twelve levels (2026-11-18), each from words and pictures the app already has:
//   counting      «كام فاكهة بالكل؟»  (apples and oranges together: adding, from age 4)
//   order         «إيه الحرف اللي قبل ...؟»  (the letter BEFORE, from age 5)
//   colours       «لو خلطنا الأحمر والأصفر، نطلع إيه؟»  (mixing colours, from age 5)
//   fruits        «فين الفاكهة؟» / «فين الخضار؟»  (fruit or vegetable, from age 4)
//   vehicles      «فين اللي بيطير؟» / «في البحر؟» / «في الشارع؟» / «على القضبان؟»  (where it goes, from age 3)
import { LETTERS } from './sim.js';

export const TOTAL_Q = 'كام فاكهة بالكل؟';
export const prevQ = (l) => `إيه الحرف اللي قبل ${l.the}؟`;
export const allPrevSentences = () => LETTERS.map(prevQ); // the first letter has nothing before it: the game never asks it (a sentence more is harmless)

// mixing: [a, b, result] colour ids of colors.js
export const MIXES = [['red', 'yellow', 'orange'], ['blue', 'yellow', 'green'], ['red', 'blue', 'purple'], ['red', 'white', 'pink']];
export const mixQ = (a, b) => `لو خلطنا ${a.the} و${b.the}، نطلع إيه؟`;
export const mixSay = (a, b, c) => `${a.the} و${b.the} بيعملوا اللون ${c.the}`;

export const FRUIT_Q = 'فين الفاكهة؟';
export const VEG_Q = 'فين الخضار؟';
/** Vegetables of the fruit-and-vegetable level (every other picture there is a fruit). */
export const isVegetable = (item) => /^v_/.test(item.id) || item.id === 'carrot' || item.id === 'corn';

export const VEHICLE_GROUPS = {
  fly: { q: 'فين اللي بيطير؟', ids: ['plane', 'helicopter', 'rocket', 'hotballoon', 'ufo'] },
  sea: { q: 'فين اللي بيمشي في البحر؟', ids: ['boat', 'felucca'] },
  road: { q: 'فين اللي بيمشي في الشارع؟', ids: ['car', 'bus', 'schoolbus', 'citybus', 'taxi', 'firetruck', 'ambulance', 'police', 'jeep', 'bike', 'donkeycart', 'bulldozer', 'tractor'] },
  rails: { q: 'فين اللي بيمشي على القضبان؟', ids: ['train', 'tram'] },
};

/** Every sentence of these extra questions (for the voice list); the colour mixes are filled in by the caller with the colour table. */
export function allExtraSentences(colorOf) {
  const out = [TOTAL_Q, FRUIT_Q, VEG_Q, ...Object.values(VEHICLE_GROUPS).map((g) => g.q), ...allPrevSentences()];
  for (const [a, b, c] of MIXES) out.push(mixQ(colorOf(a), colorOf(b)), mixSay(colorOf(a), colorOf(b), colorOf(c)));
  return [...new Set(out)];
}
