const S = {
  title: ['حارس المعبد', 'Guardian of the Temple'],
  who: ['مين حارس المعبد؟', 'Who is the temple guardian?'],
  boy: ['آدم', 'Adam'],
  girl: ['نور', 'Nour'],
  stage: ['المرحلة', 'Stage'],
  s1: ['ساحة المعبد — الصبح', 'Temple courtyard — morning'],
  s2: ['قاعة الأعمدة — الغروب', 'Hypostyle hall — sunset'],
  s3: ['سطح المعبد — الفجر', 'Temple roof — dawn'],
  s4: ['ساحة المعبد — بالليل', 'Temple courtyard — night'],
  s5: ['قاعة الأعمدة — بالمشاعل', 'Hypostyle hall — torchlight'],
  s6: ['سطح المعبد — الشروق', 'Temple roof — sunrise'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the stage before'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  how: ['اسحب عشان تمشي — الخوبيش بيضرب لوحده — اسحب بسرعة واسيب عشان تندفع ⚡', 'Drag to move — the khopesh swings by itself — flick to dash ⚡'],
  wave: ['الموجة', 'Wave'],
  boss: ['التمثال العملاق صحي!', 'The giant statue woke up!'],
  oni: ['التمثال العملاق', 'The giant statue'],
  watch: ['ابعد عن الدايرة الحمرا!', 'Move out of the red circle!'],
  combo: ['كومبو', 'COMBO'],
  slice: ['قطعة!', 'SLICE!'],
  win_m: ['شطوووووور يا بطل! 🎉', 'Well done, hero! 🎉'],
  win_f: ['شطووووورة يا بطلة! 🎉', 'Well done, hero! 🎉'],
  down_m: ['ولا يهمك! جرّب تاني 💪', 'No worries! Try again 💪'],
  down_f: ['ولا يهمك! جرّبي تاني 💪', 'No worries! Try again 💪'],
  again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next stage'],
  kills: ['لصوص', 'raiders'],
  best: ['أحسن كومبو', 'Best combo'],
  loading: ['بنجهّز المعبد...', 'Getting the temple ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  play: ['يلا!', "Let's go!"],
};

let lang = 'ar';
let girl = false;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const setHero = (kind) => { girl = kind === 'girl'; };
export const getLang = () => lang;
export const t = (k) => {
  const g = `${k}_${girl ? 'f' : 'm'}`;
  const key = S[g] ? g : k;
  return S[key] ? S[key][lang === 'en' ? 1 : 0] : k;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
