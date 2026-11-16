const S = {
  title: ['لعبة الضفدع الجائع', 'Hungry Frog'],
  play: ['يلا نلعب', 'Play'],
  map: ['خريطة البركة', 'Pond map'],
  level: ['المرحلة', 'Level'],
  exit: ['خروج', 'Exit'],
  back: ['رجوع', 'Back'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Resume'],
  restart: ['من الأول', 'Restart'],
  retry: ['جرّب تاني', 'Retry'],
  next: ['المرحلة الجاية', 'Next level'],
  growTo: ['كبّر لحد {n} عشان تتطوّر!', 'Grow to {n} to evolve!'],
  growTo2: ['كبّر لحد {n}', 'Grow to {n}'],
  beat: ['اهزم {b}', 'Beat {b}'],
  dragHop: ['اسحب في أي مكان عشان تنط', 'Drag anywhere to hop'],
  tapLeap: ['دوس على الزرار الوردي عشان تقفز', 'Tap to LEAP'],
  redBigger: ['الأحمر أكبر منك - خليك بعيد!', 'RED is bigger - keep out of reach!'],
  evolved: ['اتطوّرت! 🌟', 'Evolved! 🌟'],
  airSnap: ['خطفة في الهوا!', 'Air snap!'],
  combo: ['كومبو', 'Combo'],
  bossIntro_bigbo: ['بيج بو هو كبير البركة. كبّر واهزمه!', 'Big Bo rules this pond. Grow bigger and gobble him!'],
  bossIntro_snake: ['الثعبان سلاي جه! خلي لسانك يضربه من بعيد.', 'Sly the Snake is here! Hit him with your tongue from a distance.'],
  bossIntro_heron: ['مالك الحزين العملاق نزل البركة! اقفز من ضربته واضربه!', 'The Grand Heron landed! Leap away from his beak and strike back!'],
  gulped: ['اتبلعت!', 'Gulped!'],
  gotYou_frog: ['الضفدع الكبير مسكك!', 'The bully frog got you!'],
  gotYou_snake: ['الثعبان مسكك!', 'The snake got you!'],
  gotYou_heron: ['مالك الحزين مسكك!', 'The heron got you!'],
  gotYou_bigbo: ['بيج بو مسكك!', 'Big Bo got you!'],
  power: ['قوتك وصلت: {n}', 'Power reached: {n}'],
  tipLine: ['نصيحة: الخط الأحمر المنقط معناه إن ضفدع كبير بيصوّب لسانه - انط بعيد!', 'Tip: a red dotted line means a big frog is aiming its tongue - hop away!'],
  won: ['أكلت {b}!', 'You gobbled {b}!'],
  win_m: ['شطوووووور! 🐸', 'Well done! 🐸'],
  win_f: ['شطووووورة! 🐸', 'Well done! 🐸'],
  eaten: ['أكلت', 'Eaten'],
  drops: ['قطرات', 'Drops'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  loading: ['بنجهّز البركة...', 'Getting the pond ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  leap: ['قفزة', 'Leap'],
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
