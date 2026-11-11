const S = {
  title: ['مزرعتي السعيدة', 'Happy Farm'],
  farm: ['مزرعة', 'Farm'],
  pick: ['اختار المزرعة', 'Choose a farm'],
  shed: ['مخزن العدة', 'Tool shed'],
  exit: ['خروج', 'Exit'],
  back: ['رجوع', 'Back'],
  locked: ['خلّص المزرعة اللي قبلها', 'Finish the farm before'],
  drag: ['حط صباعك واسحب عشان تسوق', 'Touch and drag to drive'],
  full: ['المقطورة اتملت! فضّيها عند المخزن', 'Trailer full! Empty it at the barn'],
  emptied: ['فضّيتها! يلا نكمّل', 'Emptied! Back to work'],
  rock: ['حجر! لف حواليه', 'A rock! Go around it'],
  herd: ['ودّي الحيوانات الحظيرة', 'Guide the animals to their pen'],
  penned: ['رجع البيت!', 'Home safe!'],
  allPenned: ['كل الحيوانات في الحظيرة!', 'Every animal is home!'],
  done: ['خلّصت المزرعة!', 'Farm finished!'],
  coinsEarned: ['العملات', 'Coins'],
  made: ['اللي اتعمل', 'You made'],
  flour: ['دقيق', 'Flour'],
  hay: ['بالات قش', 'Hay bales'],
  corn: ['ذرة', 'Corn'],
  seeds: ['بذور', 'Seeds'],
  animals: ['الحيوانات', 'Animals'],
  next: ['المزرعة الجاية', 'Next farm'],
  again: ['تاني', 'Again'],
  map: ['الخريطة', 'Map'],
  newFarm: ['مزرعة جديدة اتفتحت!', 'New farm unlocked!'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  restart: ['من الأول', 'Restart'],
  max: ['الأقصى', 'Max'],
  needMore: ['محتاج عملات أكتر — احصد وبيع!', 'Need more coins — harvest and sell!'],
  bought: ['اتركّبت!', 'Installed!'],
  loading: ['بنجهّز المزرعة...', 'Getting the farm ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
};

let lang = 'ar';
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const getLang = () => lang;
export const t = (k) => (S[k] ? S[k][lang === 'en' ? 1 : 0] : k);
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
