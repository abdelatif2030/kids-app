const S = {
  title: ['أم الثعلب ومغامرات العيور', 'Fox Family Rescue'],
  level: ['المرحلة', 'Level'],
  locked: ['خلّص المرحلة اللي قبلها', 'Finish the level before'],
  play: ['يلا نروح البيت!', "Let's go home!"],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  goal: ['اوصل البيت بأمان', 'Hop home safely'],
  how: ['دوس على الأسهم أو اسحب عشان تنط', 'Tap the arrows or swipe to hop'],
  cub: ['لقيت عيّل! بيمشي وراك 🦊', 'Found a cub! It follows you 🦊'],
  splash: ['طرطشة!', 'SPLASH!'],
  bump: ['خبطة!', 'BUMP!'],
  welcome: ['أهلاً بالبيت!', 'Welcome home!'],
  complete: ['خلّصت المرحلة!', 'Level complete!'],
  s1: ['وصلت البيت', 'Reach the den'],
  s2: ['لمّيت كل التوت', 'Pick every berry'],
  s3: ['من غير خبطة', 'No bumps'],
  berries: ['توت', 'Berries'],
  next: ['المرحلة الجاية', 'Next'],
  again: ['تاني', 'Again'],
  allHome_m: ['شطوووووور! كل العيال في البيت 🏡', 'Well done! Every cub is home 🏡'],
  allHome_f: ['شطووووورة! كل العيال في البيت 🏡', 'Well done! Every cub is home 🏡'],
  playAgain: ['العب تاني', 'Play again'],
  loading: ['بنجهّز الطريق...', 'Getting the road ready...'],
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
