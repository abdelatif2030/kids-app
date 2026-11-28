const S = {
  title: ['لفة إسكندرية الكبيرة', 'The Great Alex Roll'],
  play: ['يلا ندحرج', 'Play'],
  exit: ['خروج', 'Exit'],
  back: ['رجوع', 'Back'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Resume'],
  restart: ['من الأول', 'Restart'],
  menu: ['القائمة', 'Menu'],
  diameter: ['قطر الكرة', 'Ball diameter'],
  nextGoal: ['الهدف الجاي', 'Next size goal'],
  elapsed: ['وقت اللفة', 'Roll time'],
  m: ['م', 'm'],
  bigger: ['أكبر!', 'BIGGER!'],
  nowRoll: ['دلوقتي دحرج {x}!', 'Now roll up {x}!'],
  go: ['دحرج!', 'Roll!'],
  hint: ['👆 اسحب في أي مكان عشان تدحرج الكرة', '👆 Drag anywhere to roll the ball'],
  tooBig: ['لسه كبير عليك! كبّر الأول', 'Still too big! Grow first'],
  finished: ['لفّيت إسكندرية كلها! 🎉', 'You rolled up all of Alexandria! 🎉'],
  finalSize: ['كرتك وصلت', 'Your ball reached'],
  best: ['أحسن نتيجة', 'Best'],
  newBest: ['رقم جديد! 🎉', 'New best! 🎉'],
  collected: ['لميت', 'Rolled up'],
  things: ['حاجة', 'things'],
  again: ['تاني', 'Again'],
  starHelp: ['⭐ محطتين  ⭐⭐ ٤ محطات  ⭐⭐⭐ كل المحطات', '⭐ 2 stops  ⭐⭐ 4 stops  ⭐⭐⭐ all the stops'],
  win_m: ['شطوووووور! 🎉', 'Well done! 🎉'],
  win_f: ['شطووووورة! 🎉', 'Well done! 🎉'],
  loading: ['بنجهّز المدينة...', 'Getting the city ready...'],
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
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]).replace('.', '٫'));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
