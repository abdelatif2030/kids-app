// The shapes of «عالم رحلتي التعليمي» (pure): 20 shapes, every one possible at every age (age only picks what comes first).
//   tier A  circle, square, triangle        tier B  star, heart, rectangle, oval
//   tier C  diamond, pentagon, hexagon, octagon, crescent, plus, arrow, ring        tier D  the solids: cube, ball, cone, cylinder, pyramid
// Two ways to draw a shape: `code` shapes are 3D meshes drawn in code and can take any of the seven colours; `art` shapes are the owner's own glossy
// pictures (assets/games/art/g_*.webp), each with its own colour, so they are asked by name only.
// Questions: by name («فين المثلث؟»), by name and colour («فين الدايرة الحمرا؟»), and by the number of sides («فين الشكل اللي له تلات أضلاع؟»).
import { colorOf } from './colors.js';

export const SHAPES_ALL = [
  { id: 'circle', the: 'الدايرة', ar: 'دايرة', fem: true, tier: 'A', render: 'code' },
  { id: 'square', the: 'المربع', ar: 'مربع', fem: false, tier: 'A', render: 'code', sides: 4 },
  { id: 'triangle', the: 'المثلث', ar: 'مثلث', fem: false, tier: 'A', render: 'code', sides: 3 },
  { id: 'star', the: 'النجمة', ar: 'نجمة', fem: true, tier: 'B', render: 'code' },
  { id: 'heart', the: 'القلب', ar: 'قلب', fem: false, tier: 'B', render: 'code' },
  { id: 'rectangle', the: 'المستطيل', ar: 'مستطيل', fem: false, tier: 'B', render: 'art', art: 'g_rectangle', sides: 4 },
  { id: 'oval', the: 'البيضاوي', ar: 'شكل بيضاوي', fem: false, tier: 'B', render: 'art', art: 'g_oval' },
  { id: 'diamond', the: 'المعين', ar: 'معين', fem: false, tier: 'C', render: 'art', art: 'g_diamond', sides: 4 },
  { id: 'pentagon', the: 'الخماسي', ar: 'شكل خماسي', fem: false, tier: 'C', render: 'art', art: 'g_pentagon', sides: 5 },
  { id: 'hexagon', the: 'السداسي', ar: 'شكل سداسي', fem: false, tier: 'C', render: 'art', art: 'g_hexagon', sides: 6 },
  { id: 'octagon', the: 'المثمن', ar: 'مثمن', fem: false, tier: 'C', render: 'code', sides: 8 },
  { id: 'crescent', the: 'الهلال', ar: 'هلال', fem: false, tier: 'C', render: 'code' },
  { id: 'plus', the: 'علامة الجمع', ar: 'علامة جمع', fem: true, tier: 'C', render: 'code' },
  { id: 'arrow', the: 'السهم', ar: 'سهم', fem: false, tier: 'C', render: 'art', art: 'g_arrow' },
  { id: 'ring', the: 'الحلقة', ar: 'حلقة', fem: true, tier: 'C', render: 'art', art: 'g_ring' },
  { id: 'cube', the: 'المكعب', ar: 'مكعب', fem: false, tier: 'D', render: 'art', art: 'g_cube' },
  { id: 'ball', the: 'الكورة', ar: 'كورة', fem: true, tier: 'D', render: 'art', art: 'g_sphere' },
  { id: 'cone', the: 'المخروط', ar: 'مخروط', fem: false, tier: 'D', render: 'art', art: 'g_cone' },
  { id: 'cylinder', the: 'الأسطوانة', ar: 'أسطوانة', fem: true, tier: 'D', render: 'art', art: 'g_cylinder' },
  { id: 'pyramid', the: 'الهرم', ar: 'هرم', fem: false, tier: 'D', render: 'code' },
];
export const shapeOf = (id) => SHAPES_ALL.find((s) => s.id === id);
export const SHAPE_TIERS = Object.fromEntries(['A', 'B', 'C', 'D'].map((t) => [t, SHAPES_ALL.filter((s) => s.tier === t)]));
/** Shapes that can take a colour (the ones drawn in code). */
export const COLORABLE = SHAPES_ALL.filter((s) => s.render === 'code');

/** The seven colours a shape may have, with the masculine and feminine adjective (Egyptian Arabic). */
export const SHAPE_COLORS = [
  { id: 'red', m: 'أحمر', f: 'حمرا' }, { id: 'blue', m: 'أزرق', f: 'زرقا' }, { id: 'yellow', m: 'أصفر', f: 'صفرا' },
  { id: 'green', m: 'أخضر', f: 'خضرا' }, { id: 'orange', m: 'برتقالي', f: 'برتقالي' }, { id: 'purple', m: 'بنفسجي', f: 'بنفسجي' }, { id: 'pink', m: 'وردي', f: 'وردي' },
];
export const shapeColorOf = (id) => SHAPE_COLORS.find((c) => c.id === id);
export const shapeHex = (id) => colorOf(id).hex;

const adj = (s, c) => (s.fem ? c.f : c.m);
const adjThe = (s, c) => { const w = adj(s, c); return w === 'برتقالي' || w === 'بنفسجي' || w === 'وردي' ? `ال${w}` : `ال${w}`; };
const SIDE_WORDS = { 3: 'تلات', 5: 'خمس', 6: 'ست', 8: 'تمان' };
export const SIDES_ASKED = [3, 5, 6, 8]; // only counts that belong to ONE shape (4 is a square, a rectangle and a diamond)

/** «فين المثلث؟» or, with a colour, «فين الدايرة الحمرا؟». */
export const findShapeQ = (s, c = null) => (c ? `فين ${s.the} ${adjThe(s, c)}؟` : `فين ${s.the}؟`);
/** The sentence said after a right answer: «ده مثلث» / «دي دايرة حمرا». */
export const shapeSay = (s, c = null) => `${s.fem ? 'دي' : 'ده'} ${s.ar}${c ? ` ${adj(s, c)}` : ''}`;
export const BIG_Q = 'فين الشكل الكبير؟';
export const SMALL_Q = 'فين الشكل الصغير؟';
export const sizeRounds = (age) => (age <= 2 ? 0 : 1);
export const sidesQ = (n) => `فين الشكل اللي له ${SIDE_WORDS[n]} أضلاع؟`;
export const shapeWithSides = (n) => SHAPES_ALL.find((s) => s.sides === n && SIDES_ASKED.includes(n));

/** Every sentence the shapes level can say (questions and the words said after a right answer). */
export function allShapeSentences() {
  const out = [];
  for (const s of SHAPES_ALL) out.push(findShapeQ(s), shapeSay(s));
  for (const s of COLORABLE) for (const c of SHAPE_COLORS) out.push(findShapeQ(s, c), shapeSay(s, c));
  for (const n of SIDES_ASKED) out.push(sidesQ(n));
  out.push(BIG_Q, SMALL_Q);
  return [...new Set(out)];
}

/** How many of the eight questions come from each tier (the age picks the start; nothing is closed). */
export function shapeTierCounts(age) {
  if (age <= 3) return { A: 6, B: 2, C: 0, D: 0 };
  if (age === 4) return { A: 4, B: 3, C: 1, D: 0 };
  if (age === 5) return { A: 2, B: 2, C: 3, D: 1 };
  return { A: 1, B: 2, C: 3, D: 2 };
}
/** Rounds that ask for a colour (code shapes) and for the number of sides. */
export const colourRounds = (age) => (age <= 3 ? 0 : age === 4 ? 2 : 3);
export const sidesRounds = (age) => (age <= 4 ? 0 : 1);

/** The plan of a shapes game: [{ kind: 'name' | 'colour' | 'sides', tier }], shuffled with [r] (a 0..1 generator). */
export function shapePlan(age, rounds, r) {
  const list = [];
  for (const [tier, n] of Object.entries(shapeTierCounts(age))) for (let i = 0; i < n; i++) list.push({ kind: 'name', tier });
  while (list.length > rounds) list.pop();
  const shuffle = () => { for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; } };
  shuffle();
  // chosen at random among the plain name rounds, so no shape is always the one that turns into a colour or sides question
  const turn = (kind, count, ok) => { for (let i = 0; i < list.length && count > 0; i++) if (list[i].kind === 'name' && ok(list[i])) { list[i] = { kind, tier: list[i].tier }; count--; } };
  turn('sides', sidesRounds(age), (x) => x.tier === 'C' || x.tier === 'A'); // sides: triangle (A), pentagon / hexagon / octagon (C)
  turn('colour', colourRounds(age), () => true);
  turn('size', sizeRounds(age), () => true); // the same shape in three sizes: «فين الشكل الكبير؟»
  return list;
}
