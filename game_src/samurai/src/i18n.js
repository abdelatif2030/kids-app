const S = {
  title: ['سيف الساموراي', 'Samurai Action'],
  who: ['مين الساموراي؟', 'Who is the samurai?'],
  boy: ['آدم', 'Adam'],
  girl: ['نور', 'Nour'],
  stage: ['المرحلة', 'Stage'],
  s1: ['ساحة الصباح', 'Morning courtyard'],
  s2: ['ساحة الغروب', 'Sunset courtyard'],
  s3: ['ساحة الفوانيس', 'Lantern night'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the stage before'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  how: ['اسحب عشان تمشي — السيف بيضرب لوحده — اسحب بسرعة واسيب عشان تندفع ⚡', 'Drag to move — the sword swings by itself — flick to dash ⚡'],
  wave: ['الموجة', 'Wave'],
  boss: ['العملاق الأحمر جه!', 'The red giant is here!'],
  oni: ['العملاق الأحمر', 'The red giant'],
  watch: ['ابعد عن الدايرة الحمرا!', 'Move out of the red circle!'],
  combo: ['كومبو', 'COMBO'],
  slice: ['قطعة!', 'SLICE!'],
  win_m: ['شطوووووور يا بطل! 🎉', 'Well done, hero! 🎉'],
  win_f: ['شطووووورة يا بطلة! 🎉', 'Well done, hero! 🎉'],
  down_m: ['ولا يهمك! جرّب تاني 💪', 'No worries! Try again 💪'],
  down_f: ['ولا يهمك! جرّبي تاني 💪', 'No worries! Try again 💪'],
  again: ['تاني', 'Again'],
  next: ['المرحلة الجاية', 'Next stage'],
  kills: ['نينجا', 'ninjas'],
  best: ['أحسن كومبو', 'Best combo'],
  loading: ['بنجهّز الساحة...', 'Getting the courtyard ready...'],
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
