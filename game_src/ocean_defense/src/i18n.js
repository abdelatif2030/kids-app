const S = {
  title: ['دفاع القلعة البحرية', 'Ocean Defense'],
  level: ['المرحلة', 'Level'],
  wave: ['الموجة', 'Wave'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  play: ['يلا ندافع!', "Let's defend!"],
  shop: ['دكان الشعاب', 'Reef shop'],
  exit: ['خروج', 'Exit'],
  back: ['رجوع', 'Back'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  aim: ['👆 اسحب عشان تصوّب', '👆 Drag to aim'],
  levelUp: ['كبرت! اختار قوة', 'Level up! Pick a power'],
  boss: ['الأخطبوط العملاق جه!', 'The giant octopus is here!'],
  octopus: ['الأخطبوط العملاق', 'Giant octopus'],
  wallHurt: ['السور اتخبط! صلّحه لما تكبر', 'The wall was hit! Repair it when you level up'],
  win_m: ['شطوووووور! القلعة في أمان 🎉', 'Well done! The fortress is safe 🎉'],
  win_f: ['شطووووورة! القلعة في أمان 🎉', 'Well done! The fortress is safe 🎉'],
  lose_m: ['ولا يهمك! جرّب تاني 💪', 'No worries! Try again 💪'],
  lose_f: ['ولا يهمك! جرّبي تاني 💪', 'No worries! Try again 💪'],
  next: ['المرحلة الجاية', 'Next level'],
  again: ['تاني', 'Again'],
  kills: ['سمكة', 'fish'],
  max: ['الأقصى', 'Max'],
  needMore: ['محتاج أصداف أكتر — دافع واجمع!', 'Need more shells — defend and collect!'],
  bought: ['اتركّب!', 'Done!'],
  loading: ['بنجهّز الشعاب...', 'Getting the reef ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
};

let lang = 'ar';
let girl = false;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const setGirl = (g) => { girl = !!g; };
export const getLang = () => lang;
export const t = (k) => {
  const g = `${k}_${girl ? 'f' : 'm'}`;
  const key = S[g] ? g : k;
  return S[key] ? S[key][lang === 'en' ? 1 : 0] : k;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
