const S = {
  title: ['أسماك الأعماق', 'Deep Sea Fish'],
  tagline: ['كُل · كبّر · واجه القرش', 'Eat · Grow · Conquer'],
  play: ['العب', 'Play'],
  level: ['المرحلة', 'Level'],
  start: ['ابدأ الغطس', 'Start dive'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Resume'],
  restart: ['من الأول', 'Restart'],
  levels: ['المراحل', 'Levels'],
  growTo: ['كبّر لحد {n} سم', 'Grow to {n} cm'],
  eatSquid: ['وكُل {n} حبار', 'and eat {n} squid'],
  eatShark: ['وبعدها كُل القرش!', 'then devour the shark!'],
  seconds: ['{n} ثانية', '{n} s'],
  stars3: ['٣ نجوم: خلّص في {n} ثانية أو أقل', '3 stars: finish in {n} s or less'],
  cm: ['سم', 'cm'],
  hint: ['👆 اسحب عشان تعوم، ودوس الزرار الأحمر عشان تندفع', '👆 Drag to swim, tap the red button to dash'],
  bait: ['سرب سمك جاي!', 'Bait ball incoming'],
  combo: ['كومبو', 'Combo'],
  warn: ['انتبه! سمكة كبيرة!', 'Watch out! A big fish!'],
  bitten: ['آه! اهرب بسرعة', 'Ouch! Swim away'],
  boss: ['القرش وصل! كله!', 'The shark is here! Devour it!'],
  squidLeft: ['حبار: {a}/{b}', 'Squid: {a}/{b}'],
  won: ['كبرت جدًا! 🐟', 'You grew huge! 🐟'],
  lostTime: ['الوقت خلص! جرّب تاني', "Time's up! Try again"],
  lostBit: ['اتعضيت كتير! جرّب تاني', 'Bitten too often! Try again'],
  eatenTitle: ['اتاكلت!', 'You Were Eaten'],
  canEat: ['دلوقتي تقدر تاكل: {x}', 'Now you can eat: {x}'],
  timeLeft: ['الوقت الباقي', 'Time left'],
  fishEaten: ['أكلت', 'Fish eaten'],
  finalSize: ['الحجم', 'Final size'],
  retry: ['جرّب تاني', 'Retry'],
  win_m: ['شطوووووور! 🎉', 'Well done! 🎉'],
  win_f: ['شطووووورة! 🎉', 'Well done! 🎉'],
  next: ['المرحلة الجاية', 'Next level'],
  again: ['تاني', 'Again'],
  eaten: ['أكلت', 'Eaten'],
  time: ['الوقت', 'Time'],
  size: ['الحجم', 'Size'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  loading: ['بنجهّز البحر...', 'Getting the sea ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
};

let lang = 'ar';
let girl = false;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const setGirl = (g) => { girl = !!g; };
export const getLang = () => lang;
export const t = (k, vars) => {
  const g = `${k}_${girl ? 'f' : 'm'}`;
  const key = S[g] ? g : k;
  let s = S[key] ? S[key][lang === 'en' ? 1 : 0] : k;
  if (vars) for (const [a, b] of Object.entries(vars)) s = s.replace(`{${a}}`, b);
  return s;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
