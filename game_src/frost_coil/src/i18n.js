const S = {
  title: ['طريق التنين الجليدي', 'Frost Coil'],
  play: ['يلا نلعب', 'Play'],
  level: ['المرحلة', 'Level'],
  levels: ['المراحل', 'Levels'],
  build: ['ابني طريق للبوابة!', 'Build a path to the portal!'],
  tapHint: ['دوس على المربعات عشان تلفّها', 'Tap tiles to turn them'],
  frozen: ['المربع ده متجمّد، مش بيتلف', 'This tile is frozen'],
  outTitle: ['خلصت الحركات', 'Out of moves'],
  outText: ['التلج لسه ماسك. جرّب تاني!', 'The ice held. Try again!'],
  tryAgain: ['جرّب تاني', 'Try again'],
  winTitle: ['التنين وصل!', 'The dragon made it!'],
  next: ['المرحلة الجاية', 'Next level'],
  again: ['تاني', 'Again'],
  reward: ['المكافأة', 'Reward'],
  movesLeft: ['حركات باقية', 'Moves left'],
  starGot: ['جبت النجمة!', 'Star collected!'],
  allDone: ['خلصت كل المراحل! 🎉', 'All levels done! 🎉'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  win_m: ['شطوووووور! 🐉', 'Well done! 🐉'],
  win_f: ['شطووووورة! 🐉', 'Well done! 🐉'],
  loading: ['بنجهّز الجليد...', 'Getting the ice ready...'],
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
