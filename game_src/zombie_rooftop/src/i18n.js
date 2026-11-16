const S = {
  title: ['البقاء على قيد الحياة', 'Zombie Rooftop Shooter'],
  roof: ['السطح', 'Roof'],
  wave: ['الموجة', 'Wave'],
  play: ['العب', 'Play'],
  endless: ['بلا نهاية', 'Endless'],
  endlessLock: ['يفتح بعد السطح ٨', 'Unlocks after roof 8'],
  map: ['الخريطة', 'Map'],
  shop: ['المحل', 'Shop'],
  start: ['ابدأ', 'Start'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  change: ['غيّر', 'Change'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  restart: ['من الأول', 'Restart'],
  menu: ['القائمة', 'Menu'],
  locked: ['نضّف السطح اللي قبله الأول', 'Clear the roof before first'],
  levelUp: ['كبرت!', 'Level up!'],
  pickOne: ['اختار واحدة للسطح ده', 'Pick one for this roof'],
  waveCleared: ['الموجة خلصت!', 'Wave cleared!'],
  roofCleared: ['السطح نضيف!', 'Roof cleared!'],
  toPad: ['روح على منصة القفز! ⬆', 'Go to the launch pad! ⬆'],
  knocked_m: ['اتخبطت! جرّب تاني 💪', 'Knocked out! Try again 💪'],
  knocked_f: ['اتخبطتي! جرّبي تاني 💪', 'Knocked out! Try again 💪'],
  knockedBanner: ['اتخبط!', 'Knocked out!'],
  win_m: ['شطوووووور! 🎉', 'Well done! 🎉'],
  win_f: ['شطووووورة! 🎉', 'Well done! 🎉'],
  nextUnlocked: ['السطح الجاي اتفتح.', 'Next roof unlocked.'],
  nextRoof: ['السطح الجاي', 'Next roof'],
  again: ['تاني', 'Again'],
  zombies: ['زومبي', 'Zombies'],
  coins: ['عملات', 'Coins'],
  waves: ['موجات', 'Waves'],
  best: ['أحسن نتيجة', 'Best'],
  got: ['معاك دلوقتي', 'You got'],
  heal: ['+ صحة', '+ Health'],
  max: ['الأقصى', 'Max'],
  needMore: ['محتاج عملات أكتر', 'Need more coins'],
  bought: ['اتشترى!', 'Done!'],
  newWeapon: ['سلاح جديد!', 'New weapon!'],
  loading: ['بنجهّز السطح...', 'Getting the roof ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  weaponTitle: ['اختار سلاحك', 'Choose your weapon'],
  lockedWeapon: ['هتلاقيه في صندوق على سطح', 'Find it in a crate on a roof'],
  tip_move_m: ['اسحب صباعك عشان تجري. بطلك بيصوّب ويضرب لوحده.', 'Swipe to run. Your hero aims and shoots by himself.'],
  tip_move_f: ['اسحبي صباعك عشان تجري. بطلتك بتصوّب وتضرب لوحدها.', 'Swipe to run. Your hero aims and shoots by herself.'],
  tip_tanks: ['اضرب الأنابيب الزرقا لما الزومبي يتلموا حواليها.', 'Shoot the blue tanks when zombies crowd around them.'],
  tip_brute: ['الزومبي الكبير بطيء بس تقيل. خليك بعيد عنه.', 'Big brutes are slow but tough. Keep your distance.'],
  tip_crate: ['دوّر على الصندوق البنفسجي: جواه سلاح جديد!', 'Look for the purple crate: a new weapon is inside!'],
  tip_level: ['كل ما تكبر اختار قوة تساعدك على السطح ده.', 'Each level up, pick a perk for this roof.'],
  tip_crowd: ['اجري في دواير عشان الزومبي ما يحاصروكش.', 'Run in circles so the zombies cannot surround you.'],
  tip_pad: ['لما الموجات تخلص، اقف على المنصة الوردي واقفز!', 'When the waves are done, stand on the pink pad and leap!'],
  tip_king: ['ملك الزومبي جه في الموجة الأخيرة!', 'The zombie king comes in the last wave!'],
  tip_endless: ['الموجات مش بتخلص. قد إيه تقدر تكمّل؟', 'The waves never end. How long can you last?'],
  shambler: ['زومبي بطيء', 'Shambler'],
  sprinter: ['زومبي سريع', 'Sprinter'],
  brute: ['زومبي كبير', 'Brute'],
  king: ['ملك الزومبي', 'Zombie king'],
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
export const name = (o) => (lang === 'en' ? o.en : o.ar);
