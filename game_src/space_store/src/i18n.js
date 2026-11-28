const S = {
  title: ['متجر النيل الفضائي', 'Nile Space Store'],
  sub: ['سوبرماركت محطة فضا فوق النيل!', 'A space-station supermarket above the Nile!'],
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
  rocket: ['وصل صاروخ توصيل من النيل! 🚀', 'A delivery rocket from the Nile! 🚀'],
  rocketMoon: ['وصل صاروخ إمداد من الأرض! 🌍', 'An Earth-supply rocket arrived! 🌍'],
  toMoon: ['للقمر 🌕', 'To the Moon 🌕'],
  toStation: ['للمحطة 🪐', 'To the Station 🪐'],
  moonHi: ['أهلًا بيك في قاعدة القمر! 🌕', 'Welcome to the Moon base! 🌕'],
  stationHi: ['رجعنا محطة النيل! 🪐', 'Back at the Nile station! 🪐'],
  doneMoon_m: ['شطوووووور! بنيت المحطة وقاعدة القمر 🌕🚀', 'Well done! You built the station AND the Moon base 🌕🚀'],
  doneMoon_f: ['شطوووووورة! بنيتي المحطة وقاعدة القمر 🌕🚀', 'Well done! You built the station AND the Moon base 🌕🚀'],
  moonNext: ['الفصل التاني مستنيك على القمر!', 'Chapter 2 is waiting on the Moon!'],
  bye: ['زبون مشي — الرف كان فاضي! عبّيه بسرعة 🧺', 'A shopper left — the rack was empty! Restock it 🧺'],
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
