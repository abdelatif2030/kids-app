const S = {
  title: ['سباق القمة', 'Summit Rush'],
  tagline: ['اطلع للقمة!', 'Race to the top'],
  drag: ['اسحب عشان تجري', 'Drag to run'],
  course: ['السباق', 'Race'],
  c1: ['منحدر الصنوبر', 'Pine Slope'],
  c2: ['حافة الجليد', 'Ice Ridge'],
  c3: ['القمة العالية', 'High Summit'],
  locked: ['اوصل للقمة في اللي قبله', 'Finish the race before'],
  go: ['انطلق!', 'GO!'],
  dodge: ['تفادي حلو!', 'NICE DODGE!'],
  overtake: ['سبقته!', 'OVERTAKE!'],
  wipeout: ['وقعة!', 'WIPEOUT'],
  tailwind: ['رياح دافعة!', 'TAILWIND!'],
  shield: ['درع!', 'SHIELD!'],
  blocked: ['الدرع حماك!', 'SHIELD SAVED YOU!'],
  boost: ['دفعة!', 'BOOST!'],
  you: ['أنت', 'YOU'],
  p1: ['الأول', '1ST'],
  p2: ['التاني', '2ND'],
  p3: ['التالت', '3RD'],
  p4: ['الرابع', '4TH'],
  summit_m: ['وصلت للقمة! 🏔️', 'You reached the summit! 🏔️'],
  summit_f: ['وصلتي للقمة! 🏔️', 'You reached the summit! 🏔️'],
  place: ['المركز', 'Place'],
  score: ['النقط', 'Score'],
  crystals: ['الكريستال', 'Crystals'],
  best: ['أحسن مركز', 'Best place'],
  next: ['السباق الجاي', 'Next race'],
  again: ['تاني', 'Race again'],
  courses: ['السباقات', 'Races'],
  outTitle: ['خلصت القلوب', 'Out of hearts'],
  outText_m: ['ولا يهمك! قوم وجرّب تاني', 'No problem! Get up and try again'],
  outText_f: ['ولا يهمك! قومي وجرّبي تاني', 'No problem! Get up and try again'],
  timeTitle: ['الوقت خلص', "Time's up"],
  timeText_m: ['قرّبت قوي من القمة! جرّب تاني', 'So close to the top! Try again'],
  timeText_f: ['قرّبتي قوي من القمة! جرّبي تاني', 'So close to the top! Try again'],
  win1_m: ['شطوووووور! الأول على القمة! 🥇', 'Champion! First to the top! 🥇'],
  win1_f: ['شطووووورة! الأولى على القمة! 🥇', 'Champion! First to the top! 🥇'],
  winN_m: ['شطوووووور! كمّل عشان تبقى الأول', 'Well done! Keep going to be first'],
  winN_f: ['شطووووورة! كمّلي عشان تبقي الأولى', 'Well done! Keep going to be first'],
  easy: ['سهل', 'Easy'],
  exit: ['خروج', 'Exit'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  loading: ['بنجهّز الجبل...', 'Getting the mountain ready...'],
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
