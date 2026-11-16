const S = {
  title: ['سباق السباحة العجيب', 'Splash Race'],
  round: ['الجولة', 'Round'],
  locked: ['اتأهل من الجولة اللي قبلها', 'Qualify in the round before'],
  swim: ['يلا نعوم!', 'Swim!'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  stroke: ['جدّف', 'STROKE'],
  dive: ['غطس', 'DIVE'],
  hint: ['اضغط «جدّف» مع الصفّارة', 'Tap STROKE on the whistle'],
  hintDive: ['اضغط «غطس» عشان تعدّي تحت المكرونة', 'Hold DIVE to go under the noodle'],
  hintLeap: ['جدّف على الإيقاع قدّام الحاجز عشان تنط', 'Stroke on the beat before the wall to leap'],
  perfect: ['ممتاز!', 'PERFECT!'],
  good: ['حلو', 'GOOD'],
  off: ['مش على الإيقاع', 'OFF BEAT'],
  breath: ['خد نفَس!', 'Need air!'],
  slide: ['زحليقة! 🛝', 'Slide! 🛝'],
  wave: ['موجة! 🌊', 'Wave! 🌊'],
  qualified: ['اتأهلت!', 'Qualified!'],
  final: ['النهائي', 'Final'],
  win_m: ['شطوووووور! الأول في النهائي 🏆', 'Well done! You won the final 🏆'],
  win_f: ['شطووووورة! الأولى في النهائي 🏆', 'Well done! You won the final 🏆'],
  qual_m: ['برافو! اتأهلت للجولة الجاية 🎉', 'Great! You qualified 🎉'],
  qual_f: ['برافو! اتأهلتي للجولة الجاية 🎉', 'Great! You qualified 🎉'],
  out_m: ['قرّبت! جرّب تاني 💪', 'So close! Try again 💪'],
  out_f: ['قرّبتي! جرّبي تاني 💪', 'So close! Try again 💪'],
  place: ['المركز', 'Place'],
  next: ['الجولة الجاية', 'Next round'],
  again: ['تاني', 'Again'],
  loading: ['بنملا الحمّام...', 'Filling the pool...'],
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
