const S = {
  title: ['البنّاء الصغير', 'Little Builder'],
  play: ['يلا نلعب', 'Play'], level: ['المرحلة', 'Level'], levels: ['المراحل', 'Levels'],
  drag: ['اسحب عشان تسوق', 'DRAG TO DRIVE'],
  firstPush: ['أول دفعة', 'First Push'], twoColors: ['لونين', 'Two Colors'], doubleUp: ['ضعف الضعف', 'Double Up'], movingWalls: ['حيطان بتتحرك', 'Moving Walls'],
  bumpIt: ['اصطدام!', 'Bump It'], beltUp: ['سيور متحركة', 'Belt Up'], rampUp: ['منحدرات', 'Ramp Up'], tripleTrouble: ['تلات أضعاف', 'Triple Trouble'],
  mixMaster: ['خليط الألوان', 'Mix Master'], marbleMaster: ['سيد الكرات', 'Marble Master'],
  awesome: ['رائع!', 'AWESOME!'],
  blue: ['الأزرق', 'BLUE'], red: ['الأحمر', 'RED'], yellow: ['الأصفر', 'YELLOW'], green: ['الأخضر', 'GREEN'], purple: ['البنفسجي', 'PURPLE'],
  done: ['خلّص!', 'DONE!'],
  complete: ['المرحلة خلصت!', 'Level complete!'],

  tryAgain: ['جرّب تاني', 'Try again'], next: ['المرحلة الجاية', 'Next level'], replay: ['العب تاني', 'Replay'],
  allDone: ['خلصت كل المراحل! 🎉', 'All levels done! 🎉'],
  pause: ['وقفة', 'Paused'], resume: ['كمّل', 'Resume'], back: ['رجوع', 'Back'], exit: ['خروج', 'Exit'],
  win_m: ['شطوووووور! 🚜', 'Well done! 🚜'], win_f: ['شطووووورة! 🚜', 'Well done! 🚜'],
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
