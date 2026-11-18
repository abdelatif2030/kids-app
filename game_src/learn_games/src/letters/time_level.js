// «الأيام والفصول»: the days of the week, the seasons and a few time facts (plaques with words, no pictures needed).
export const DAYS = ['السبت', 'الحد', 'الاتنين', 'التلات', 'الأربع', 'الخميس', 'الجمعة'];
export const SEASONS = [
  { id: 'summer', name: 'الصيف', q: 'إيه الفصل اللي بيبقى فيه حر؟' },
  { id: 'winter', name: 'الشتا', q: 'إيه الفصل اللي بتمطر فيه كتير؟' },
  { id: 'spring', name: 'الربيع', q: 'إيه الفصل اللي بتطلع فيه الزهور؟' },
  { id: 'autumn', name: 'الخريف', q: 'إيه الفصل اللي بتقع فيه ورق الشجر؟' },
];
export const dayAfterQ = (d) => `إيه اليوم اللي بعد ${d}؟`;
export const dayBeforeQ = (d) => `إيه اليوم اللي قبل ${d}؟`;
export const FIRST_DAY_Q = 'إيه أول يوم في الأسبوع؟';
export const WEEK_Q = 'كام يوم في الأسبوع؟';
export const YEAR_Q = 'كام فصل في السنة؟';
export const allTimeSentences = () => [
  ...DAYS.map(dayAfterQ), ...DAYS.map(dayBeforeQ), ...SEASONS.map((s) => s.q), FIRST_DAY_Q, WEEK_Q, YEAR_Q,
];
/** Every question as { key, prompt, answer: option id, options pool: [{id, kind, ch|n}] , tier } */
export function timeQuestions() {
  const day = (d) => ({ id: `d_${d}`, kind: 'letter', ch: d });
  const out = [];
  DAYS.forEach((d, i) => {
    out.push({ key: `time:after:${d}`, prompt: dayAfterQ(d), right: day(DAYS[(i + 1) % 7]), pool: DAYS.map(day), tier: 1 });
    out.push({ key: `time:before:${d}`, prompt: dayBeforeQ(d), right: day(DAYS[(i + 6) % 7]), pool: DAYS.map(day), tier: 2 });
  });
  for (const s of SEASONS) out.push({ key: `time:season:${s.id}`, prompt: s.q, right: { id: `s_${s.id}`, kind: 'letter', ch: s.name }, pool: SEASONS.map((x) => ({ id: `s_${x.id}`, kind: 'letter', ch: x.name })), tier: 0 });
  out.push({ key: 'time:first', prompt: FIRST_DAY_Q, right: day('السبت'), pool: DAYS.map(day), tier: 0 });
  const num = (n) => ({ id: `n_${n}`, kind: 'number', n });
  out.push({ key: 'time:week', prompt: WEEK_Q, right: num(7), pool: [5, 6, 7, 8, 9].map(num), tier: 0 });
  out.push({ key: 'time:year', prompt: YEAR_Q, right: num(4), pool: [2, 3, 4, 5, 6].map(num), tier: 0 });
  return out;
}
