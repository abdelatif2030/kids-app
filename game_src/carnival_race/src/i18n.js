// Arabic first (Egyptian-friendly wording), English second.
const S = {
  title: ['سباق ملاهي الأبطال', 'Glowfair Rally'],
  pickTrack: ['اختار الحلبة', 'Pick a track'],
  garage: ['الجراج', 'Garage'],
  race: ['يلا نتسابق!', "Let's race!"],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  locked: ['مقفولة', 'Locked'],
  unlockHint: ['خلّص السباق اللي قبلها في أول ٣ عشان تفتحها', 'Finish the track before in the top 3 to open it'],
  unlockHintEasy: ['خلّص السباق اللي قبلها عشان تفتحها', 'Finish the track before to open it'],
  best: ['أحسن مركز', 'Best place'],
  hold: ['دوس واسحب يمين وشمال', 'Hold to drive, drag to steer'],
  holdEasy: ['اسحب يمين وشمال عشان تلف', 'Drag left and right to steer'],
  go: ['انطلق!', 'GO!'],
  lap: ['اللفة', 'Lap'],
  lastLap: ['اللفة الأخيرة!', 'Final lap!'],
  lead: ['إنت الأول!', 'In the lead!'],
  oops: ['أوبس!', 'Oops!'],
  bump: ['بووم!', 'Bump!'],
  trick: ['حركة جامدة!', 'Cool trick!'],
  drift: ['انطلاقة!', 'Boost!'],
  shielded: ['الدرع حماك!', 'Shield saved you!'],
  finish: ['خط النهاية!', 'Finish!'],
  place: ['المركز', 'Place'],
  places: [['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'], ['1st', '2nd', '3rd', '4th', '5th', '6th']],
  greatRace: ['سباق حلو!', 'Great race!'],
  ticketsWon: ['تذاكر كسبتها', 'Tickets won'],
  nextRace: ['السباق الجاي', 'Next race'],
  retry: ['تاني', 'Again'],
  menu: ['القائمة', 'Menu'],
  newTrack: ['حلبة جديدة اتفتحت!', 'New track unlocked!'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  restart: ['من الأول', 'Restart'],
  quit: ['اخرج من السباق', 'Leave race'],
  engine: ['المحرك', 'Engine'],
  grip: ['الثبات', 'Grip'],
  turbo: ['التوربو', 'Turbo'],
  max: ['الأقصى', 'Max'],
  owned: ['معاك', 'Yours'],
  choose: ['اختار', 'Choose'],
  chosen: ['مختار', 'Chosen'],
  buy: ['افتح', 'Unlock'],
  needMore: ['محتاج تذاكر أكتر', 'Need more tickets'],
  rocket: ['صاروخ', 'Rocket'],
  shield: ['درع', 'Shield'],
  blast: ['دفعة', 'Blast'],
  tapItem: ['دوس هنا!', 'Tap!'],
  loading: ['بنجهّز الملاهي...', 'Setting up the carnival...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
};

let lang = 'ar';
export function setLang(l) { lang = l === 'en' ? 'en' : 'ar'; }
export function getLang() { return lang; }
export function t(key) {
  const v = S[key];
  if (!v) return key;
  return lang === 'en' ? v[1] : v[0];
}
export function ordinal(n) {
  return S.places[lang === 'en' ? 1 : 0][n - 1] ?? String(n);
}
/** Numbers in Arabic-Indic digits for Arabic, as children learn them at school. */
export function num(n) {
  const s = String(n);
  return lang === 'en' ? s : s.replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
}
export function name(obj) { return lang === 'en' ? obj.en : obj.ar; }
