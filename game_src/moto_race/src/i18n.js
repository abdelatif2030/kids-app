const S = {
  title: ['سباق الدراجات النارية', 'Motorcycle Racing'],
  round: ['الجولة', 'Round'],
  locked: ['اكسب ميدالية في الجولة اللي قبلها', 'Get a medal in the round before'],
  race: ['يلا نسابق!', 'Race!'],
  bike: ['لون الدراجة', 'Bike colour'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  lap: ['لفّة', 'Lap'],
  you: ['أنت', 'You'],
  how: ['اسحب يمين وشمال عشان تميل — فرامل قبل المنحنى — ⚡ نيترو', 'Drag left/right to lean — brake before corners — ⚡ nitro'],
  brake: ['فرامل', 'BRAKE'],
  nitro: ['نيترو', 'NITRO'],
  draft: ['🌬️ في الهوا! أسرع', '🌬️ Slipstream!'],
  boost: ['⚡ نيترو!', '⚡ NITRO!'],
  lastLap: ['آخر لفّة!', 'Final lap!'],
  overtake: ['عدّيته! 👍', 'Overtake! 👍'],
  go: ['انطلق!', 'GO!'],
  win_m: ['شطوووووور! المركز الأول 🏆', 'Well done! First place 🏆'],
  win_f: ['شطووووورة! المركز الأول 🏆', 'Well done! First place 🏆'],
  podium_m: ['برافو! على منصة التتويج 🥈', 'Great! On the podium 🥈'],
  podium_f: ['برافو! على منصة التتويج 🥈', 'Great! On the podium 🥈'],
  finish_m: ['خلّصت السباق! جرّب تاني تبقى الأول 💪', 'You finished! Try again for first 💪'],
  finish_f: ['خلّصتي السباق! جرّبي تاني تبقي الأولى 💪', 'You finished! Try again for first 💪'],
  place: ['المركز', 'Place'],
  time: ['الوقت', 'Time'],
  next: ['الجولة الجاية', 'Next round'],
  again: ['تاني', 'Again'],
  loading: ['بنجهّز الحلبة...', 'Getting the circuit ready...'],
  noWebgl: ['الجهاز ده مش بيشغّل اللعبة ثلاثية الأبعاد.', 'This device cannot run the 3D game.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  kmh: ['كم/س', 'km/h'],
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
