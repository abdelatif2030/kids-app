const S = {
  title: ['مغامرة الذيل الذهبي', 'Golden Tail Chase'],
  level: ['المرحلة', 'Level'],
  locked: ['اكسب المرحلة اللي قبلها', 'Win the level before'],
  play: ['يلا نلعب!', "Let's play!"],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  menu: ['القائمة', 'Menu'],
  restart: ['من الأول', 'Restart'],
  ready: ['استعد!', 'Get ready!'],
  goal: ['🦖 خلّي الذيل الذهبي معاك لما الوقت يخلص!', '🦖 Wear the golden tail when the clock hits 0:00!'],
  go: ['يلا!', 'Go!'],
  you: ['أنا', 'YOU'],
  me: ['معاك الذيل!', 'You have it!'],
  grab: ['امسك', 'GRAB'],
  jump: ['نط', 'JUMP'],
  got: ['مسكت الذيل! اجري! 🏃', 'Got it! Run! 🏃'],
  lost: ['خدوه منك! امسكه تاني!', 'They took it! Grab it back!'],
  fell: ['وقعت! ارجع من البداية 🦖', 'You fell! Back to the start 🦖'],
  hint: ['اجري ورا اللي معاه الذيل وادوس «امسك»', 'Chase whoever has the tail and press GRAB'],
  win_m: ['شطوووووور! الذيل معاك! 🎉', 'Well done! The tail is yours! 🎉'],
  win_f: ['شطووووورة! الذيل معاكي! 🎉', 'Well done! The tail is yours! 🎉'],
  lose_m: ['قرّبت! جرّب تاني 💪', 'So close! Try again 💪'],
  lose_f: ['قرّبتي! جرّبي تاني 💪', 'So close! Try again 💪'],
  held: ['معاك الذيل', 'Tail time'],
  grabs: ['مسكات', 'Grabs'],
  sec: ['ث', 's'],
  next: ['المرحلة الجاية', 'Next level'],
  again: ['تاني', 'Again'],
  loading: ['بنجهّز الغابة...', 'Getting the forest ready...'],
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
