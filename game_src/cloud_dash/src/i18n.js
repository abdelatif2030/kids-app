const S = {
  title: ['ركضة فوق مصر', 'Dash Over Egypt'],
  play: ['يلا نجري', 'Run'],
  level: ['المرحلة', 'Level'],
  levels: ['المراحل', 'Levels'],
  tutL: ['اسحب لليسار!', 'Swipe left!'],
  tutR: ['اسحب لليمين!', 'Swipe right!'],
  tutUp: ['اسحب لفوق عشان تنط!', 'Swipe up to jump!'],
  tutDown: ['اسحب لتحت عشان تنزلق!', 'Swipe down to slide!'],
  dodge: ['اتفادى عوائق الحلوى', 'Dodge the candy blocks'],
  slide: ['انزلق تحت العوارض', 'Slide under the bars'],
  gaps: ['انط فوق الفجوات', 'Jump over the gaps'],
  spikes: ['انط فوق الأشواك', 'Jump the spikes'],
  wind: ['الريح هتزقك لجنب!', 'The wind will push you!'],
  wall: ['اجري على الحيطان! اسحب لبره', 'Run on the walls! Swipe outward'],
  perfect: ['هبوط تمام!', 'Perfect landing!'],
  shield: ['درع! 🛡️', 'Shield! 🛡️'],
  magnet: ['مغناطيس العملات! 🧲', 'Coin magnet! 🧲'],
  slow: ['حركة بطيئة! ⏳', 'Slow motion! ⏳'],
  shieldPop: ['الدرع حماك!', 'The shield saved you!'],
  ouch: ['أوبس!', 'Oops!'],
  fell: ['وقعت! كمّل!', 'You fell! Keep going!'],
  finish: ['وصلت! 🎉', 'You made it! 🎉'],
  tryAgain: ['جرّب تاني', 'Try again'],
  lostTitle: ['خلصت القلوب… ولا يهمك!', 'Out of hearts… no problem!'],
  lostText: ['قوم وجرّب تاني، هتعدّي!', 'Get up and try again, you can do it!'],
  next: ['المرحلة الجاية', 'Next level'],
  replay: ['العب تاني', 'Replay'],
  coins: ['عملات', 'Coins'],
  hearts: ['قلوب', 'Hearts'],
  complete: ['المرحلة خلصت!', 'Level complete!'],
  allDone: ['خلصت كل المراحل! 🎉', 'All levels done! 🎉'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  pause: ['وقفة', 'Paused'],
  resume: ['كمّل', 'Resume'],
  win_m: ['شطوووووور! 🏃', 'Well done! 🏃'],
  win_f: ['شطووووورة! 🏃', 'Well done! 🏃'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
};
let lang = 'ar';
let girl = false;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const setGirl = (g) => { girl = !!g; };
export const getLang = () => lang;
export const isGirl = () => girl;
export const t = (k) => {
  const g = `${k}_${girl ? 'f' : 'm'}`;
  const key = S[g] ? g : k;
  return S[key] ? S[key][lang === 'en' ? 1 : 0] : k;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
