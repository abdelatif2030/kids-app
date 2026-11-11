const S = {
  title: ['البقاء على الإيقاع', 'Rhythm Survival'],
  tour: ['جولة حول العالم', 'World Tour'],
  track: ['أغنية', 'Track'],
  left: ['باقي', 'left'],
  locked: ['اكسب الأغنية اللي قبلها', 'Win the track before'],
  play: ['يلا نرقص!', "Let's dance!"],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  hintLow: ['اضغط ⬆ عشان تنط فوق العصاية الواطية', 'Tap ⬆ to hop the low bar'],
  hintHigh: ['اضغط ⬇ عشان توطّي تحت العصاية العالية', 'Tap ⬇ to duck the high bar'],
  hintGap: ['ابعد عن الحتة اللي بتنور!', 'Move off the flashing part!'],
  hintFlip: ['الأسطوانة هتلف بالعكس!', 'The record will spin the other way!'],
  hintArm: ['ذراع الأسطوانة جاي! ابعد أو نط', 'The tonearm is coming! Move or hop'],
  out: ['اتشال!', 'OUT!'],
  bump: ['دفعة!', 'BUMP!'],
  saved_m: ['اتنقذت! باقي لك', 'Saved! Lives left'],
  saved_f: ['اتنقذتي! باقي لك', 'Saved! Lives left'],
  knocked: ['وقعت من الأسطوانة!', 'Knocked off!'],
  win_m: ['شطوووووور! كملت الأغنية للآخر 🎉', 'Well done! You made it to the end 🎉'],
  win_f: ['شطووووورة! كملتي الأغنية للآخر 🎉', 'Well done! You made it to the end 🎉'],
  retry: ['تاني', 'Retry'],
  next: ['الأغنية الجاية', 'Next track'],
  place: ['المركز', 'Place'],
  loading: ['بنشغّل الأسطوانة...', 'Putting the record on...'],
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
