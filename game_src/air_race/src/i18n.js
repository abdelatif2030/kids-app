const S = {
  title: ['سباق الطائرات الجوي', 'Airplane Racing'],
  laps: ['دورتين', '2 LAPS'],
  lap: ['دورة', 'LAP'],
  locked: ['خلّص السباق اللي قبله', 'Finish the race before'],
  play: ['يلا نطير!', "Let's fly!"],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  steer: ['اسحب عشان توجّه الطيارة', 'Drag to steer'],
  rings: ['طير جوه الحلقات عشان تشحن التيربو', 'Fly through rings to charge boost'],
  boost: ['تيربو', 'BOOST'],
  boostNow: ['التيربو جاهز! دوس عليه', 'Boost ready! Tap it'],
  go: ['انطلق!', 'GO!'],
  lapNow: ['الدورة الأخيرة!', 'Final lap!'],
  bump: ['حاسب!', 'Watch out!'],
  under: ['انزل تحت الكوبري!', 'Fly under the bridge!'],
  great: ['ممتاز!', 'Great!'],
  kmh: ['كم/س', 'km/h'],
  finish: ['وصلت خط النهاية!', 'Finish!'],
  place: ['المركز', 'Place'],
  time: ['الوقت', 'Time'],
  ringsGot: ['حلقات', 'Rings'],
  s1: ['خلّصت السباق', 'Finish the race'],
  s2: ['أول أو تاني', 'Top two'],
  s3: ['المركز الأول', 'First place'],
  next: ['السباق الجاي', 'Next race'],
  again: ['تاني', 'Again'],
  best: ['أحسن وقت', 'Best time'],
  allDone_m: ['شطوووووور! كسبت كل السباقات 🏆', 'Well done! You flew every race 🏆'],
  allDone_f: ['شطووووورة! كسبتي كل السباقات 🏆', 'Well done! You flew every race 🏆'],
  playAgain: ['العب تاني', 'Play again'],
  loading: ['بنجهّز الطيارة...', 'Getting the plane ready...'],
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
export const clock = (secs) => {
  const m = Math.floor(secs / 60);
  const s = secs - m * 60;
  return num(`${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`);
};
