const S = {
  title: ['مغامرة الأدغال', 'Jungle Adventure'],
  pick: ['اختار المرحلة', 'Choose a level'],
  play: ['يلا بينا!', "Let's go!"],
  level: ['المرحلة', 'Level'],
  locked: ['خلّص اللي قبلها', 'Finish the one before'],
  coins: ['عملات', 'Coins'],
  relics: ['آثار', 'Relics'],
  time: ['الوقت', 'Time'],
  next: ['المرحلة الجاية', 'Next level'],
  retry: ['تاني', 'Try again'],
  menu: ['القائمة', 'Menu'],
  exit: ['خروج', 'Exit'],
  paused: ['استراحة', 'Paused'],
  resume: ['كمّل', 'Continue'],
  restart: ['من الأول', 'Restart'],
  win: ['شطووووورة!', 'Superstar!'],
  win_m: ['شطوووووور!', 'Superstar!'],
  winLast: ['وصلتِ لمذبح الشمس!', 'You reached the Sun Altar!'],
  winLast_m: ['وصلت لمذبح الشمس!', 'You reached the Sun Altar!'],
  almost: ['قربتِ خالص!', 'Almost there!'],
  almost_m: ['قربت خالص!', 'Almost there!'],
  almostSub: ['جرّبي تاني، إنتِ تقدري!', 'Try again, you can do it!'],
  almostSub_m: ['جرّب تاني، إنت تقدر!', 'Try again, you can do it!'],
  relicsSub: ['لقيتِ كل الآثار!', 'You found every relic!'],
  relicsSub_m: ['لقيت كل الآثار!', 'You found every relic!'],
  shop: ['المحل', 'Shop'],
  chooseHero: ['مين هيلعب؟', 'Who is playing?'],
  wear: ['البس', 'Wear'],
  wearing: ['لابسه ✓', 'Wearing ✓'],
  free: ['ببلاش', 'Free'],
  needMore: ['محتاج عملات أكتر — العب واجمع!', 'Need more coins — play and collect!'],
  bought: ['مبروك!', 'Yours now!'],
  someRelics: ['لسه في آثار مستخبية', 'Some relics are still hidden'],
  bonus: ['مكافأة الوقت', 'Time bonus'],
  reward: ['المكافأة', 'Reward'],
  newLevel: ['مرحلة جديدة اتفتحت!', 'New level unlocked!'],
  loading: ['بنجهّز الأدغال...', 'Getting the jungle ready...'],
  // in-game words
  relic: ['أثر!', 'Relic!'],
  allRelics: ['كل الآثار!', 'All relics!'],
  checkpoint: ['نقطة حفظ!', 'Checkpoint!'],
  shield: ['درع!', 'Shield!'],
  magnet: ['مغناطيس!', 'Coin magnet!'],
  boots: ['حذاء سريع!', 'Speed boots!'],
  hourglass: ['+١٠ ثواني', '+10 seconds'],
  ouch: ['آي!', 'Ouch!'],
  timeBonus: ['مكافأة الوقت!', 'Time bonus!'],
  // hints
  h_tap: ['دوسي عشان تنطي!', 'Tap to jump!'],
  h_tap_m: ['دوس عشان تنط!', 'Tap to jump!'],
  h_hold: ['دوسة طويلة = نطة أعلى', 'Hold = higher'],
  h_stomp: ['انطي عليها!', 'Jump on it!'],
  h_stomp_m: ['انط عليها!', 'Jump on it!'],
  h_wall: ['اتنططي على الحيطان لفوق!', 'Wall-kick up the shafts!'],
  h_wall_m: ['اتنطط على الحيطان لفوق!', 'Wall-kick up the shafts!'],
  h_totem: ['وصّلي للتوتم!', 'Reach the totem!'],
  h_totem_m: ['وصّل للتوتم!', 'Reach the totem!'],
  h_altar: ['وصّلي لمذبح الشمس!', 'Reach the sun altar!'],
  h_altar_m: ['وصّل لمذبح الشمس!', 'Reach the sun altar!'],
  h_go: ['يلا يا بطلة!', "Let's go!"],
  h_go_m: ['يلا يا بطل!', "Let's go!"],
};

let lang = 'ar';
let boy = false;
export const setLang = (l) => { lang = l === 'en' ? 'en' : 'ar'; };
export const getLang = () => lang;
/** Arabic speaks to a boy and a girl differently: the hero being played picks the words. */
export const setHero = (h) => { boy = h === 'boy'; };
export const t = (k) => {
  const v = (boy && S[`${k}_m`]) || S[k];
  return v ? v[lang === 'en' ? 1 : 0] : k;
};
export const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
export const name = (o) => (lang === 'en' ? o.en : o.ar);
