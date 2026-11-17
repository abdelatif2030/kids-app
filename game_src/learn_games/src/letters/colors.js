// The colours of «عالم رحلتي التعليمي» (pure): 25 colours, every one possible at every age (age only picks what comes first).
//   tier A  the six basic colours      tier B  pink black white brown gray      tier C  fourteen more (sky blue, navy, golds...)
// Questions: find the colour («فين اللون الأحمر؟», a coloured ball) and find the thing of that colour («فين الحاجة اللي لونها أحمر؟», pictures).
// A round never shows two colours of one FAMILY (blue / navy / sky blue; green / light / dark / olive...), so a right answer is never a guess
// between two shades: the shades are learnt by name, one at a time.

export const COLORS = [
  { id: 'red', the: 'الأحمر', name: 'أحمر', hex: 0xe8302a, tier: 'A', family: 'red' },
  { id: 'blue', the: 'الأزرق', name: 'أزرق', hex: 0x2a8ae8, tier: 'A', family: 'blue' },
  { id: 'yellow', the: 'الأصفر', name: 'أصفر', hex: 0xffd21a, tier: 'A', family: 'yellow' },
  { id: 'green', the: 'الأخضر', name: 'أخضر', hex: 0x2aa84a, tier: 'A', family: 'green' },
  { id: 'orange', the: 'البرتقالي', name: 'برتقالي', hex: 0xff8a1a, tier: 'A', family: 'orange' },
  { id: 'purple', the: 'البنفسجي', name: 'بنفسجي', hex: 0x9a4ad8, tier: 'A', family: 'purple' },
  { id: 'pink', the: 'الوردي', name: 'وردي', hex: 0xff7ab8, tier: 'B', family: 'pink' },
  { id: 'black', the: 'الأسود', name: 'أسود', hex: 0x24242c, tier: 'B', family: 'black' },
  { id: 'white', the: 'الأبيض', name: 'أبيض', hex: 0xfafafa, tier: 'B', family: 'white' },
  { id: 'brown', the: 'البني', name: 'بني', hex: 0x8a5a32, tier: 'B', family: 'brown' },
  { id: 'gray', the: 'الرمادي', name: 'رمادي', hex: 0x9a9aa8, tier: 'B', family: 'gray' },
  { id: 'skyblue', the: 'السماوي', name: 'سماوي', hex: 0x6ad0ff, tier: 'C', family: 'blue' },
  { id: 'navy', the: 'الكحلي', name: 'كحلي', hex: 0x1a2a7a, tier: 'C', family: 'blue' },
  { id: 'lightgreen', the: 'الأخضر الفاتح', name: 'أخضر فاتح', hex: 0x9ae070, tier: 'C', family: 'green' },
  { id: 'darkgreen', the: 'الأخضر الغامق', name: 'أخضر غامق', hex: 0x14602a, tier: 'C', family: 'green' },
  { id: 'turquoise', the: 'التركواز', name: 'تركواز', hex: 0x1ac8c0, tier: 'C', family: 'cyan' },
  { id: 'gold', the: 'الذهبي', name: 'ذهبي', hex: 0xd4af37, tier: 'C', family: 'yellow', metal: 0.85 },
  { id: 'silver', the: 'الفضي', name: 'فضي', hex: 0xc8ccd4, tier: 'C', family: 'gray', metal: 0.85 },
  { id: 'beige', the: 'البيج', name: 'بيج', hex: 0xe8d4a8, tier: 'C', family: 'white' },
  { id: 'maroon', the: 'العنابي', name: 'عنابي', hex: 0x8a1a3a, tier: 'C', family: 'red' },
  { id: 'lemon', the: 'الليموني', name: 'ليموني', hex: 0xe8f040, tier: 'C', family: 'yellow' },
  { id: 'peach', the: 'الخوخي', name: 'خوخي', hex: 0xffb090, tier: 'C', family: 'orange' },
  { id: 'lilac', the: 'الليلكي', name: 'ليلكي', hex: 0xc8a0f0, tier: 'C', family: 'purple' },
  { id: 'olive', the: 'الزيتي', name: 'زيتي', hex: 0x808020, tier: 'C', family: 'green' },
  { id: 'mustard', the: 'الخردلي', name: 'خردلي', hex: 0xd8a820, tier: 'C', family: 'yellow' },
];
export const colorOf = (id) => COLORS.find((c) => c.id === id);
export const COLOR_TIERS = { A: COLORS.filter((c) => c.tier === 'A'), B: COLORS.filter((c) => c.tier === 'B'), C: COLORS.filter((c) => c.tier === 'C') };

/** Pictures with ONE clear colour (the app's own art, looked at one by one). Black has a single picture, so it is only asked as a coloured ball. */
export const COLOR_THINGS = {
  red: ['apple', 'v_tomato', 'strawberry', 'q_cherry', 'firetruck'],
  yellow: ['banana', 'lemon', 'chick'],
  orange: ['orange', 'carrot', 'v_pumpkin'],
  green: ['j_leaf', 'v_lettuce', 'v_broccoli', 'v_cucumber'],
  blue: ['u_tang', 'q_berries'],
  purple: ['v_eggplant', 'q_plum', 'grapes'],
  pink: ['i_flamingo', 'r_cotton', 'r_candy'],
  brown: ['v_potato', 'o_cookie'],
  white: ['w_bear', 'r_cloud', 'o_milk'],
  gray: ['j_elephant', 'w_seal'],
};
export const THING_COLORS = Object.keys(COLOR_THINGS);
export const colorOfThing = (thing) => THING_COLORS.find((c) => COLOR_THINGS[c].includes(thing)) || null;

/** How many of the eight questions come from each tier (age picks the start; nothing is closed). */
export function colorTierCounts(age) {
  if (age <= 3) return { A: 6, B: 2, C: 0 };
  if (age === 4) return { A: 4, B: 3, C: 1 };
  if (age === 5) return { A: 3, B: 2, C: 3 };
  return { A: 2, B: 2, C: 4 };
}
/** Rounds that ask for a THING of a colour instead of a coloured ball (none for the very youngest). */
export const thingRounds = (age) => (age <= 2 ? 0 : age <= 4 ? 1 : 2);

/** The plan of a colour game: [{ kind: 'color' | 'thing', tier }], shuffled with the 0..1 generator [r]. */
export function colorPlan(age, rounds, r) {
  const list = [];
  for (const [tier, n] of Object.entries(colorTierCounts(age))) for (let i = 0; i < n; i++) list.push({ kind: 'color', tier });
  while (list.length > rounds) list.pop();
  let k = thingRounds(age);
  for (let i = 0; i < list.length && k > 0; i++) if (list[i].tier !== 'C') { list[i] = { kind: 'thing', tier: list[i].tier }; k--; }
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
  return list;
}

export const findColorQ = (c) => `فين اللون ${c.the}؟`;
export const findThingQ = (c) => `فين الحاجة اللي لونها ${c.name}؟`;
export function allColorSentences() {
  return [...COLORS.map(findColorQ), ...THING_COLORS.map((id) => findThingQ(colorOf(id)))];
}

/** [n] colours of DIFFERENT families, the right one first, taken from [pool] (least shown first when [used] is given). */
export function colorChoices(right, pool, n, r, used = null) {
  const list = pool.filter((c) => c.family !== right.family).sort(() => r() - 0.5);
  if (used) list.sort((a, b) => (used.get(a.id) || 0) - (used.get(b.id) || 0));
  const take = [];
  const fams = new Set([right.family]);
  for (const c of list) { if (take.length >= n - 1) break; if (!fams.has(c.family)) { take.push(c); fams.add(c.family); } }
  return [right, ...take];
}
