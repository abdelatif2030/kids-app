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
// More time questions (2026-11-19): tomorrow / yesterday, the day between, the order of the days, the months, the parts of the day, seasons by what we do.
export const MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
export const ORDINALS = ['الأول', 'التاني', 'التالت', 'الرابع', 'الخامس', 'السادس', 'السابع'];
export const tomorrowQ = (d) => `النهارده ${d}، بكره إيه؟`;
export const yesterdayQ = (d) => `النهارده ${d}، إمبارح كان إيه؟`;
export const afterTomorrowQ = (d) => `النهارده ${d}، وبعد بكره إيه؟`;
export const betweenQ = (a, c) => `إيه اليوم اللي بين ${a} و${c}؟`;
export const ordinalDayQ = (i) => `إيه اليوم ${ORDINALS[i]} في الأسبوع؟`;
export const LAST_DAY_Q = 'إيه آخر يوم في الأسبوع؟';
export const monthAfterQ = (m) => `إيه الشهر اللي بعد ${m}؟`;
export const monthBeforeQ = (m) => `إيه الشهر اللي قبل ${m}؟`;
export const FIRST_MONTH_Q = 'إيه أول شهر في السنة؟';
export const LAST_MONTH_Q = 'إيه آخر شهر في السنة؟';
export const MONTHS_Q = 'كام شهر في السنة؟';
export const PARTS = [
  { id: 'morning', name: 'الصبح' }, { id: 'noon', name: 'الضهر' }, { id: 'evening', name: 'المسا' }, { id: 'night', name: 'بالليل' },
];
/** [question, right part of the day] */
export const PART_QUESTIONS = [
  ['بنفطر إمتى؟', 'morning'], ['الشمس بتطلع إمتى؟', 'morning'], ['بنصحى من النوم إمتى؟', 'morning'], ['بنروح الحضانة إمتى؟', 'morning'], ['الديك بيصيح إمتى؟', 'morning'],
  ['بنتغدى إمتى؟', 'noon'], ['الشمس بتبقى فوق راسنا إمتى؟', 'noon'], ['الدنيا بتبقى حر أوي إمتى؟', 'noon'],
  ['بنتعشى إمتى؟', 'evening'], ['الشمس بتغيب إمتى؟', 'evening'], ['الدنيا بتبدأ تضلم إمتى؟', 'evening'],
  ['بننام إمتى؟', 'night'], ['القمر بيطلع إمتى؟', 'night'], ['النجوم بتظهر إمتى؟', 'night'], ['بنلبس البيجامة إمتى؟', 'night'], ['الدنيا بتبقى ضلمة خالص إمتى؟', 'night'],
];
/** [question, right season id] */
export const SEASON_QUESTIONS = [
  ['بنروح البحر ونلعب في الرمل في فصل إيه؟', 'summer'], ['بنلبس الكاب عشان الشمس حامية في فصل إيه؟', 'summer'],
  ['بنلبس الجاكت التقيل والوشاح في فصل إيه؟', 'winter'], ['المطر بينزل كتير والجو برد في فصل إيه؟', 'winter'],
  ['الزهور بتفتح والجو لطيف في فصل إيه؟', 'spring'], ['الفراشات بتطير بين الزهور في فصل إيه؟', 'spring'],
  ['الشجر بيغير لونه والجو بيبقى معتدل في فصل إيه؟', 'autumn'], ['الورق الأصفر بيقع على الأرض في فصل إيه؟', 'autumn'],
];
const MORE_TIME_SENTENCES = () => [
  ...DAYS.flatMap((d) => [tomorrowQ(d), yesterdayQ(d), afterTomorrowQ(d)]), ...DAYS.map((d, i) => betweenQ(d, DAYS[(i + 2) % 7])),
  ...ORDINALS.slice(1).map((_, i) => ordinalDayQ(i + 1)), LAST_DAY_Q,
  ...MONTHS.flatMap((m) => [monthAfterQ(m), monthBeforeQ(m)]), FIRST_MONTH_Q, LAST_MONTH_Q, MONTHS_Q,
  ...PART_QUESTIONS.map((q) => q[0]), ...SEASON_QUESTIONS.map((q) => q[0]),
];
export const allTimeSentences = () => [
  ...DAYS.map(dayAfterQ), ...DAYS.map(dayBeforeQ), ...SEASONS.map((s) => s.q), FIRST_DAY_Q, WEEK_Q, YEAR_Q, ...MORE_TIME_SENTENCES(),
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
  // more (2026-11-19): every question below has a recorded sentence; the game asks it only when its clip exists
  const month = (m) => ({ id: `m_${m}`, kind: 'letter', ch: m });
  const part = (p) => ({ id: `p_${p.id}`, kind: 'letter', ch: p.name });
  DAYS.forEach((d, i) => {
    out.push({ key: `time:tomorrow:${d}`, prompt: tomorrowQ(d), right: day(DAYS[(i + 1) % 7]), pool: DAYS.map(day), tier: 1 });
    out.push({ key: `time:yesterday:${d}`, prompt: yesterdayQ(d), right: day(DAYS[(i + 6) % 7]), pool: DAYS.map(day), tier: 1 });
    out.push({ key: `time:aftertomorrow:${d}`, prompt: afterTomorrowQ(d), right: day(DAYS[(i + 2) % 7]), pool: DAYS.map(day), tier: 2 });
    out.push({ key: `time:between:${d}`, prompt: betweenQ(d, DAYS[(i + 2) % 7]), right: day(DAYS[(i + 1) % 7]), pool: DAYS.map(day), tier: 2 });
  });
  for (let i = 1; i < 7; i++) out.push({ key: `time:ordinal:${i}`, prompt: ordinalDayQ(i), right: day(DAYS[i]), pool: DAYS.map(day), tier: 1 });
  out.push({ key: 'time:lastday', prompt: LAST_DAY_Q, right: day('الجمعة'), pool: DAYS.map(day), tier: 1 });
  MONTHS.forEach((m, i) => {
    out.push({ key: `time:mafter:${m}`, prompt: monthAfterQ(m), right: month(MONTHS[(i + 1) % 12]), pool: MONTHS.map(month), tier: 2 });
    out.push({ key: `time:mbefore:${m}`, prompt: monthBeforeQ(m), right: month(MONTHS[(i + 11) % 12]), pool: MONTHS.map(month), tier: 2 });
  });
  out.push({ key: 'time:firstmonth', prompt: FIRST_MONTH_Q, right: month('يناير'), pool: MONTHS.map(month), tier: 1 });
  out.push({ key: 'time:lastmonth', prompt: LAST_MONTH_Q, right: month('ديسمبر'), pool: MONTHS.map(month), tier: 2 });
  out.push({ key: 'time:months', prompt: MONTHS_Q, right: num(12), pool: [10, 11, 12, 13, 14].map(num), tier: 1 });
  PART_QUESTIONS.forEach(([q, p], i) => out.push({ key: `time:part:${i}`, prompt: q, right: part(PARTS.find((x) => x.id === p)), pool: PARTS.map(part), tier: 0 }));
  SEASON_QUESTIONS.forEach(([q, s], i) => out.push({ key: `time:sq:${i}`, prompt: q, right: { id: `s_${s}`, kind: 'letter', ch: SEASONS.find((x) => x.id === s).name }, pool: SEASONS.map((x) => ({ id: `s_${x.id}`, kind: 'letter', ch: x.name })), tier: i < 4 ? 0 : 1 }));
  return out;
}
