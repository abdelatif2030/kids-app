// The numbers of «عالم رحلتي التعليمي» (pure): EVERY number 0-100 can be asked at every age. Age only decides what comes first:
// the numbers are in four tiers (easy to hard) and a game takes a few from each tier, mostly the easy ones for the youngest.
//   A  1-10          B  0 and 11-20          C  the tens 30-100          D  21-99 that are not tens
// Question kinds: find («فين رقم خمسة؟»), after, before («فين الرقم اللي بعد/قبل ...؟»), bigger, smaller.
// Counting («كام تفاحة؟») uses the tiers  a 1-5, b 6-10, c 11-20  in the same way.

const UNITS = ['', 'واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة'];
const TEENS = ['عشرة', 'حداشر', 'اتناشر', 'تلاتاشر', 'أربعتاشر', 'خمستاشر', 'ستاشر', 'سبعتاشر', 'تمنتاشر', 'تسعتاشر'];
const TENS = ['', '', 'عشرين', 'تلاتين', 'أربعين', 'خمسين', 'ستين', 'سبعين', 'تمانين', 'تسعين'];

/** The number in Egyptian Arabic: 0 صفر, 1-19, 20, 21 «واحد وعشرين», 30..90, 100 «مية». */
export function numberWord(n) {
  if (!Number.isInteger(n) || n < 0 || n > 100) throw new RangeError(`number ${n}`);
  if (n === 0) return 'صفر';
  if (n === 100) return 'مية';
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  const t = Math.floor(n / 10), u = n % 10;
  return u ? `${UNITS[u]} و${TENS[t]}` : TENS[t];
}

const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
export const TIERS = {
  A: range(1, 10),
  B: [0, ...range(11, 20)],
  C: [30, 40, 50, 60, 70, 80, 90, 100],
  D: range(21, 99).filter((n) => n % 10 !== 0),
};
export const COUNT_TIERS = { a: range(1, 5), b: range(6, 10), c: range(11, 20) };
export const tierOf = (n) => Object.keys(TIERS).find((k) => TIERS[k].includes(n));

/** How many of the eight questions come from each tier (the age picks the start; nothing is ever closed). */
export function tierCounts(age) {
  if (age <= 3) return { A: 7, B: 1, C: 0, D: 0 };
  if (age === 4) return { A: 6, B: 2, C: 0, D: 0 };
  if (age === 5) return { A: 3, B: 3, C: 1, D: 1 };
  return { A: 1, B: 2, C: 2, D: 3 };
}
export function countTierCounts(age) {
  if (age <= 3) return { a: 7, b: 1, c: 0 };
  if (age === 4) return { a: 5, b: 3, c: 0 };
  if (age === 5) return { a: 3, b: 3, c: 2 };
  return { a: 2, b: 3, c: 3 };
}

/** The plan of one number game: a list of { kind, tier }, shuffled with [r] (a 0..1 generator). */
export function numberPlan(age, rounds, r) {
  const list = [];
  const counts = tierCounts(age);
  for (const [tier, n] of Object.entries(counts)) for (let i = 0; i < n; i++) list.push({ kind: 'find', tier });
  while (list.length > rounds) list.pop();
  // one "after/before" and, from age 4, one "bigger/smaller" instead of plain finds in the easy tiers
  const swap = (kind, from) => {
    const i = list.findIndex((x, k) => x.kind === 'find' && (!from || from.includes(x.tier)) && k >= 0);
    if (i >= 0) list[i] = { kind, tier: list[i].tier };
  };
  swap(r() < 0.5 ? 'after' : 'before', ['A', 'B']);
  if (age >= 4) swap(r() < 0.5 ? 'bigger' : 'smaller', ['A', 'B', 'C']);
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
  return list;
}
export function countPlan(age, rounds, r) {
  const list = [];
  for (const [tier, n] of Object.entries(countTierCounts(age))) for (let i = 0; i < n; i++) list.push({ kind: 'count', tier });
  while (list.length > rounds) list.pop();
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
  return list;
}

export const findQ = (n) => `فين رقم ${numberWord(n)}؟`;
export const afterQ = (n) => `فين الرقم اللي بعد ${numberWord(n)}؟`;
export const beforeQ = (n) => `فين الرقم اللي قبل ${numberWord(n)}؟`;
export const BIGGER_Q = 'فين الرقم الأكبر؟';
export const SMALLER_Q = 'فين الرقم الأصغر؟';

/** Every sentence this module can ask (for the voice list): finds 0-100, "after" 0-19, "before" 1-20, bigger, smaller. */
export function allNumberSentences() {
  const out = [];
  for (let n = 0; n <= 100; n++) out.push(findQ(n));
  for (let n = 0; n <= 19; n++) out.push(afterQ(n));
  for (let n = 1; n <= 20; n++) out.push(beforeQ(n));
  out.push(BIGGER_Q, SMALLER_Q);
  return out;
}
