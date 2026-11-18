const S = {
  title: ['سكاي كابي', 'SKY CAPY'],
  play: ['يلا نطير', 'Play'],
  hangar: ['الحظيرة', 'Hangar'],
  top10: ['أحسن 10', 'Top 10'],
  upgrades: ['التطويرات', 'Upgrades'],
  paint: ['الألوان', 'Paint'],
  back: ['رجوع', 'Back'],
  exit: ['خروج', 'Exit'],
  fire: ['نار', 'FIRE'],
  storm: ['عاصفة', 'STORM'],
  engine: ['المحرك', 'Engine'], engineD: ['طيارة أسرع وأخف', 'A quicker, nimbler plane'],
  tank: ['خزان الفقاعات', 'Bubble Tank'], tankD: ['نار أسرع وتعبئة أسرع', 'Longer fire, faster refill'],
  power: ['قوة الفقاعات', 'Bubble Power'], powerD: ['ضرر أكتر مع كل مستوى', '+15% damage per level'],
  armor: ['الدرع', 'Armor'], armorD: ['صحة أكتر', '+25 HP per level'],
  magnet: ['المغناطيس', 'Magnet'], magnetD: ['بيجذب اللؤلؤ والريش من بعيد', 'Pulls pearls and feathers from afar'],
  stormUp: ['عاصفة فقاعات', 'Storm Stock'], stormUpD: ['عاصفة زيادة في كل مهمة', 'One more Bubble Storm per run'],
  lagoon: ['البحيرة', 'Lagoon'], royal: ['ملكي', 'Royal'], grape: ['عنب', 'Grape'], clover: ['برسيم', 'Clover'], cherry: ['كرز', 'Cherry'], snowbird: ['طائر الثلج', 'Snowbird'], midnight: ['منتصف الليل', 'Midnight'], sunny: ['مشمس', 'Sunny'],
  on: ['شغّال', 'ON'], max: ['الأقصى', 'MAX'],
  feathers: ['ريش', 'Feathers'],
  stage1: ['قرية السحاب', 'Cloud Village'], stage2: ['كمين حبل الغسيل', 'Laundry-Line Ambush'], stage3: ['شجرة العش العملاقة', 'The Giant Nest Tree'],
  loop: ['الدورة', 'Loop'],
  clear: ['المرحلة خلصت!', 'Stage clear!'],
  rank: ['التقييم', 'Rank'],
  cont: ['كمّل', 'Continue'],
  score: ['النتيجة', 'Score'],
  shot: ['اتضربت!', 'SHOT DOWN!'],
  newrec: ['رقم قياسي! اكتب حروفك', 'New record! Enter your initials'],
  save: ['احفظ', 'Save'],
  again: ['العب تاني', 'Play again'],
  hint1: ['القراصنة بيهاجموا القرية! فرقعهم!', 'Pirates are raiding the village! Pop them!'],
  hintUmb: ['المظلات بتمتص الفقاعات. كمّل ضرب!', 'Umbrellas soak up bubbles. Keep firing!'],
  hintCage: ['امسك القفص!', 'Catch the cage!'],
  hintBird: ['العصفور انضم ليك!', 'A songbird joined you!'],
  hintCap: ['كبسولة سلاح! اجمعها', 'A weapon capsule! Grab it'],
  hintBoss: ['قبطان القراصنة وصل!', 'The pirate captain is here!'],
  hintStorm: ['دوس عاصفة الفقاعات لو اتحاصرت', 'Hit STORM when you are swamped'],
  hintDrag: ['حرّك صباعك عشان تحرّك الطيارة', 'Drag your finger to fly'],
  ach: ['إنجاز', 'ACHIEVEMENT'], firstPop: ['أول فرقعة', 'FIRST POP'],
  spread: ['ثلاث فقاعات', 'Triple bubbles'], pierce: ['فقاعة كبيرة', 'Big bubble'], rapid: ['نار سريعة', 'Rapid fire'],
  robin: ['أبو الحناء', 'Robin'], jay: ['القيق', 'Jay'], canary: ['الكناري', 'Canary'],
  pause: ['وقفة', 'Paused'], resume: ['كمّل', 'Resume'],
  win_m: ['شطوووووور! ✈️', 'Well done! ✈️'], win_f: ['شطووووورة! ✈️', 'Well done! ✈️'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  empty: ['مفيش نتائج لسه، اطلع وفرقع!', 'No scores yet, go pop some pirates!'],
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
