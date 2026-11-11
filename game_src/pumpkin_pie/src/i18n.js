const S = {
  title: ['مخبز اليقطين', 'Pumpkin Pie Maker'],
  play: ['يلا نخبز!', "Let's bake!"],
  who: ['مين الشيف؟', 'Who is the chef?'],
  girl: ['نور', 'Nour'],
  boy: ['آدم', 'Adam'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  drag: ['حط صباعك واسحب عشان تمشي', 'Touch and drag to walk'],
  hPick: ['لمّ القرع من الحقل 🎃', 'Pick pumpkins in the patch 🎃'],
  hOven: ['ودّي القرع للفرن 🔥', 'Take the pumpkins to the oven 🔥'],
  hShelf: ['الفطاير استوت! خدها 🥧', 'Pies are ready! Pick them up 🥧'],
  hCounter: ['حط الفطاير على البنك 🏪', 'Put the pies on the counter 🏪'],
  hCash: ['لمّ الفلوس 🪙', 'Collect the coins 🪙'],
  hPad: ['قف على الدايرة عشان تفتح حاجة جديدة ✨', 'Stand on the circle to build something new ✨'],
  full: ['السلة اتملت!', 'Basket full!'],
  opened: ['اتفتح', 'New'],
  done_m: ['شطوووووور يا شيف! المخبز كمل 🎉', 'Well done, chef! The bakery is complete 🎉'],
  done_f: ['شطووووورة يا شيفة! المخبز كمل 🎉', 'Well done, chef! The bakery is complete 🎉'],
  served: ['زباين اتبسطوا', 'happy customers'],
  pies: ['فطيرة اتخبزت', 'pies baked'],
  keep: ['كمّل الخبيز', 'Keep baking'],
  loading: ['بنسخّن الفرن...', 'Warming up the oven...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
};

let lang = 'ar';
let girl = true;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const setChef = (kind) => { girl = kind !== 'boy'; };
export const getLang = () => lang;
export const t = (k) => {
  const key = S[`${k}_${girl ? 'f' : 'm'}`] ? `${k}_${girl ? 'f' : 'm'}` : k;
  return S[key] ? S[key][lang === 'en' ? 1 : 0] : k;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
