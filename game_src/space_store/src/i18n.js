const S = {
  title: ['متجر الفضاء الذكي', 'Space Store Manager'],
  sub: ['اعمل أنشط سوبرماركت في المدار!', 'Run the busiest pantry in orbit!'],
  play: ['يلا نشتغل!', 'Play now!'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  drag: ['حط صباعك واسحب عشان تمشي', 'Touch and drag to walk'],
  oGrab: ['خد السلال الطايرة!', 'Grab hover-baskets!'],
  oStock: ['حط السلال على الرف!', 'Stock the basket rack!'],
  oServe: ['قف عند الكاشير وخدّم الزباين!', 'Serve shoppers at the checkout!'],
  oCoins: ['لمّ العملات النجمة!', 'Collect the star coins!'],
  oBuild: ['ابني:', 'Build:'],
  full: ['إيدك مليانة!', 'Hands full!'],
  opened: ['اتفتح', 'New'],
  robot: ['روبوت شغّال! 🤖', 'Robot at work! 🤖'],
  done_m: ['شطوووووور! بقيت سوبرماركت فضاء كبير 🚀', 'Well done! A busy space supermarket 🚀'],
  done_f: ['شطووووورة! بقيت سوبرماركت فضاء كبير 🚀', 'Well done! A busy space supermarket 🚀'],
  served: ['زبون اتبسط', 'happy shoppers'],
  keep: ['كمّل الشغل', 'Keep going'],
  loading: ['المكوك جاي...', 'The shuttle is coming...'],
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
