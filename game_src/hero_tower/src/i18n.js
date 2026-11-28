const S = {
  title: ['برج القلعة', 'Citadel Tower'],
  play: ['يلا نلعب', 'Play'],
  chapter: ['الفصل', 'Chapter'],
  chapters: ['الفصول', 'Chapters'],
  floor: ['الدور', 'Floor'],
  roof: ['السطح', 'Roof'],
  tapGreen: ['دوس على العدو الأخضر', 'Tap a green foe'],
  tapGreen2: ['العدو الأخضر أضعف منك، هتاخد قوته!', 'A green foe is weaker: you take its power!'],
  redHint: ['الأحمر أقوى منك. خد القوة الأول!', 'Red is stronger. Get stronger first!'],
  crystalHint: ['العملة الدهب بتضاعف قوتك: خدها في الآخر!', 'The gold coin multiplies you: take it late!'],
  goalTroll: ['وصّل للغول الحجري', 'Reach the Stone Troll'],
  goalSorc: ['وصّل للساحر الشرير', 'Reach the Dark Sorcerer'],
  goalDragon: ['وصّل للتنين على السطح', 'Reach the Roof Dragon'],
  goalBoss: ['اهزم الزعيم', 'Beat the boss'],
  bossTag: ['زعيم!', 'Boss!'],
  defeatWeaker: ['اهزم الأعداء الأضعف', 'Defeat weaker foes'],
  absorb: ['خد قوتهم', 'Absorb their power'],
  stageClear: ['المرحلة خلصت!', 'Stage clear!'],
  victory: ['انتصار!', 'Victory!'],
  needKey: ['محتاج المفتاح الأول 🔑', 'You need the key first 🔑'],
  climb: ['اطلع السلم!', 'Climb the ladder!'],
  levelUp: ['زادت قوتك!', 'Power up!'],
  trollName: ['الغول الحجري', 'The Stone Troll'],
  sorcName: ['الساحر الشرير', 'The Dark Sorcerer'],
  dragonName: ['التنين على السطح', 'The Roof Dragon'],
  almost: ['قربت أوي!', 'Almost there!'],
  almostText: ['العدو ده كان أقوى منك. خد الأضعف الأول!', 'That foe was stronger than you. Take the weaker ones first!'],
  power: ['القوة', 'Power'],
  floors: ['الأدوار', 'Floors'],
  tryAgain: ['جرّب تاني', 'Try again'],
  startOver: ['ابدأ الفصل من الأول', 'Start the chapter again'],
  tooWeak: ['قوتك قليلة على الدور ده. ابدأ الفصل من الأول وخد الكنوز!', 'Not strong enough for this floor. Start again and grab the treasures!'],
  complete: ['الفصل خلص!', 'Chapter complete!'],
  replay: ['العب تاني', 'Replay'],
  next: ['الفصل الجاي', 'Next chapter'],
  reward: ['النجوم', 'Stars'],
  allDone: ['خلصت كل الفصول! 🎉', 'All chapters done! 🎉'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  win_m: ['شطوووووور! ⚔️', 'Well done! ⚔️'],
  win_f: ['شطووووورة! ⚔️', 'Well done! ⚔️'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  castle: ['القلعة', 'The Castle'],
  ice: ['برج الجليد', 'The Ice Tower'],
  fire: ['برج النار', 'The Fire Tower'],
  citadel: ['قلعة صلاح الدين', 'Salah El-Din Citadel'],
  catherine: ['أبراج سانت كاترين', 'Saint Catherine Towers'],
  pharos: ['منارة فاروس', 'Pharos Lighthouse'],
  nubia: ['حصن النوبة', 'The Nubian Fortress'],
  shali: ['قلعة شالي في سيوة', 'Shali Fortress, Siwa'],
  philae: ['برج جزيرة فيلة', 'Philae Island Tower'],
  qaitbey: ['قلعة قايتباي في إسكندرية', 'Qaitbey Citadel, Alexandria'],
  zweila: ['باب زويلة في القاهرة', 'Bab Zuweila, Cairo'],
  sea: ['برج البحر', 'The Sea Tower'],
  dawn: ['برج الفجر', 'The Dawn Tower'],
  locked: ['اكسب الفصل اللي قبله', 'Win the chapter before'],
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
