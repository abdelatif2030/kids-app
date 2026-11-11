const S = {
  title: ['سباق الطريق الساحلي', 'Coastal Drive'],
  tagline: ['طريق سريع · زحمة · من غير فرامل', 'Highway · Traffic · No brakes'],
  play: ['يلا نسوق', 'Play'],
  garage: ['الجراج', 'Garage'],
  levels: ['المراحل', 'Levels'],
  race: ['سباق', 'Race'],
  exit: ['خروج', 'Exit'],
  back: ['رجوع', 'Back'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Resume'],
  restart: ['من الأول', 'Restart'],
  quit: ['اخرج من السباق', 'Quit race'],
  nearMisses: ['تفادي قريب', 'Near misses'],
  nearMiss: ['تفادي قريب', 'Near miss'],
  combo: ['كومبو', 'Combo'],
  go: ['انطلق!', 'GO!'],
  kmh: ['كم/س', 'KM/H'],
  nitro: ['نيترو', 'Nitro'],
  goal: ['اوصل {km} كم مع {n} تفادي قريب', 'Reach {km} km with {n} near misses'],
  needMore: ['لسه محتاج {n} تفادي قريب! عدّي جنب العربيات', 'Still {n} near misses to go! Pass close to cars'],
  finished: ['خلصت!', 'Finished!'],
  wrecked: ['العربية اتخبطت!', 'Wrecked'],
  finish: ['الوصول', 'Finish'],
  max1: ['خبطة واحدة بالكتير', 'Max 1 crash'],
  noCrash: ['من غير خبطات', 'No crashes'],
  coins: ['عملات', 'Coins'],
  topSpeed: ['أعلى سرعة', 'Top speed'],
  crashes: ['خبطات', 'Crashes'],
  reward: ['مكافأة', 'Reward'],
  total: ['المجموع', 'Total'],
  kept: ['العملات بتفضل معاك. الدرع بيخفف الخبطات، والمستوى ٣ بيزوّد قلب.', 'Coins kept. Armor upgrades soften crashes, and LV 3 adds a heart.'],
  next: ['المرحلة الجاية', 'Next level'],
  selected: ['مختارة', 'Selected'],
  select: ['اختارها', 'Select'],
  buy: ['اشتري', 'Buy'],
  needCoins: ['محتاج {n} كمان', 'Need {n} more'],
  upgrades: ['تطويرات', 'Upgrades'],
  stTop: ['أعلى سرعة', 'Top speed'],
  stAcc: ['تسارع', 'Acceleration'],
  stHand: ['تحكم', 'Handling'],
  stNitro: ['نيترو', 'Nitro'],
  max: ['الأقصى', 'Max'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  bought: ['اتشترت!', 'Bought!'],
  steer: ['👆 اسحب يمين وشمال عشان تغيّر الحارة', '👆 Drag left and right to change lanes'],
  loading: ['بنجهّز الطريق...', 'Getting the road ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  win_m: ['شطوووووور! 🏁', 'Well done! 🏁'],
  win_f: ['شطووووورة! 🏁', 'Well done! 🏁'],
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
