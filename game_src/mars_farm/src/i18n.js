// Mars Farm strings (Arabic first, English second) and the small helpers that build task / unlock texts.
import { makeI18n } from '../../cozy_kit/ui.js';
import { REGIONS } from './sim.js';

const S = {
  title: ['مزرعة المريخ', 'Mars Farm'],
  play: ['يلا نبدأ', 'Start'], cont: ['كمّل اللعب', 'Continue'], newgame: ['ابدأ من الأول', 'New game'], sure: ['متأكد؟ دوس تاني', 'Sure? Tap again'],
  exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], close: ['تمام', 'OK'], back: ['رجوع', 'Back'],
  how: ['ازرع وحصّد، اعمل عيش وجبنة وعصير، ابعت طلبات بالدرون، وابني مستعمرة على المريخ!', 'Plant and harvest, bake bread, make cheese and juice, send drone orders and build a colony on Mars!'],
  how2: ['اضغط على أي حاجة عشان تشتغل بيها. اسحب الشاشة عشان تتحرك.', 'Tap things to work with them. Drag the screen to look around.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  wheat: ['قمح', 'Wheat'], carrot: ['جزر', 'Carrots'], corn: ['دره', 'Corn'], milk: ['لبن', 'Milk'], bread: ['عيش', 'Bread'], cheese: ['جبنة', 'Cheese'], juice: ['عصير', 'Juice'],
  field: ['حقل', 'Field'], pen: ['حظيرة', 'Goat pen'], home: ['بيت', 'Home'], bakery: ['مخبز', 'Bakery'], dairy: ['مصنع الجبنة', 'Dairy'], juicer: ['معصرة', 'Juicer'],
  spaceport: ['محطة الفضاء', 'Spaceport'], goat: ['معزة', 'Goat'], hq: ['المركز', 'HQ'],
  harvestAll: ['حصاد', 'Harvest'], plantAll: ['زرع', 'Plant'], build: ['بناء', 'Build'], orders: ['طلبات', 'Orders'], tasks: ['مهام', 'Tasks'],
  level: ['مستوى', 'Level'], colonists: ['مستعمرين', 'Colonists'], coins: ['فلوس', 'Coins'],
  buildTitle: ['إيه تبني؟', 'What to build?'], ordersTitle: ['طلبات الدرون', 'Drone orders'], tasksTitle: ['مهام المستوى', 'Level tasks'],
  send: ['ابعت الدرون 🚁', 'Send drone 🚁'], need: ['ناقص حاجات', 'Missing items'], reward: ['المكافأة', 'Reward'],
  owned: ['عندك', 'Owned'], lockedLevel: ['مستوى', 'Level'], placeHint: ['اضغط على مكان فاضي عشان تبني', 'Tap an empty spot to build'], done: ['خلاص', 'Done'], cancel: ['إلغاء', 'Cancel'],
  openRegion: ['افتح منطقة جديدة', 'Open a new area'], open: ['افتح', 'Open'], regionAt: ['المنطقة بتتفتح في مستوى', 'This area opens at level'],
  needCoins: ['محتاج فلوس أكتر', 'Not enough coins'], needSpot: ['المكان مش مناسب', 'Not a good spot'], needLevel: ['لسه بدري، محتاج مستوى', 'Not yet, needs level'],
  needPen: ['ابني حظيرة الأول', 'Build a goat pen first'], maxed: ['وصلت للحد الأقصى', 'You have the maximum'],
  noFood: ['الماعز عايزة قمح! 🌾', 'The goats need wheat! 🌾'], goatsBusy: ['الماعز بتاكل، استنى شوية', 'Goats are eating, wait a bit'],
  needItem: ['محتاج', 'Needs'], growing: ['لسه بيكبر...', 'Still growing...'], pickCrop: ['اختار محصول من تحت', 'Pick a crop below'],
  lockedCrop: ['بيتفتح في مستوى', 'Opens at level'], nothing: ['مفيش حاجة تتحصد', 'Nothing to harvest'], nofields: ['مفيش حقول فاضية', 'No empty fields'],
  levelDone: ['خلّصت المستوى', 'Level complete'], newIn: ['جديد في المستوى الجاي', 'New in the next level'], bonus: ['هدية', 'Bonus'], nextLevel: ['المستوى الجاي', 'Next level'],
  allDone: ['كل المهام خلصت! 🎉', 'All tasks done! 🎉'], shuttleBtn: ['🚀 استقبل المركبة الأولى', '🚀 Welcome the first shuttle'],
  finalTitle: ['المستعمرة جاهزة!', 'The colony is ready!'], finalText: ['محطة الفضاء خلصت والمركبة الأولى على وشك توصل.', 'The spaceport is built and the first shuttle is about to land.'],
  welcome: ['وصلت أول مركبة! 🚀', 'The first shuttle has landed! 🚀'], welcomeText: ['مستعمرة المريخ بقت بيت لناس كتير بفضلك.', 'Thanks to you, the Mars colony is now a home for many people.'],
  keep: ['كمّل العب', 'Keep playing'], hqTip: ['اضغط على المركز عشان تبعت الطلبات', 'Tap the HQ to send orders'],
  tutPlant: ['اضغط على حقل فاضي عشان تزرع قمح 🌾', 'Tap an empty field to plant wheat 🌾'], tutRipe: ['المحصول جاهز! اضغط عليه عشان تحصده', 'The crop is ripe! Tap it to harvest'],
  tutOrder: ['عندك طلب جاهز! اضغط على المركز 📦', 'An order is ready! Tap the HQ 📦'], tutGoat: ['اضغط على الحظيرة عشان تأكل الماعز', 'Tap the pen to feed the goats'],
  full: ['كامل', 'Full'], free: ['ببلاش', 'Free'], homeInfo: ['مستعمرين', 'colonists'],
  research: ['أبحاث', 'Research'], researchTitle: ['أبحاث المستعمرة 🔬', 'Colony research 🔬'],
  researchHint: ['اشتري تحسينات لطيفة بفلوس المستعمرة — بتفضل معاك على طول!', 'Buy gentle upgrades with colony coins — they stay with you forever!'],
  bonusTask: ['هدف إضافي ⭐', 'Bonus goal ⭐'], milestoneTask: ['هدف المستعمرة ⭐', 'Colony goal ⭐'],
  starsEarned: ['نجوم المستوى', 'Level stars'], totalStars: ['كل النجوم', 'Total stars'],
  needFirst: ['محتاج الأول', 'Needs first'], bought: ['عندك ✓', 'Owned ✓'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
  recenter: ['وسّط الشاشة', 'Center view'],
};
export const I = makeI18n(S);

export const LEVEL_TITLES = [
  ['أول حقل', 'First field'], ['جزر وبيوت', 'Carrots and homes'], ['المخبز', 'The bakery'], ['دره وجيران', 'Corn and neighbours'],
  ['الجبنة', 'Cheese'], ['العصير', 'Juice'], ['تجارة الدرون', 'Drone trade'], ['مزرعة أكبر', 'A bigger farm'],
  ['مدينة صغيرة', 'A small town'], ['كل المنتجات', 'All the products'], ['كل الأرض', 'All the land'], ['محطة الفضاء', 'The spaceport'],
  ['بوابة أوليمبوس', 'Olympus Gate'], ['مزارع أوليمبوس', 'Olympus Farms'], ['مدينة أوليمبوس', 'Olympus Town'], ['قمة أوليمبوس', 'Olympus Summit'],
];
// Research node names + what they do: [name ar, name en, desc ar, desc en]
export const RESEARCH_TEXT = {
  sprouts: ['بذور سريعة', 'Fast sprouts', 'المحاصيل بتكبر أسرع', 'Crops grow faster'],
  ovens: ['أفران سريعة', 'Fast ovens', 'المخبز والمصانع بيشتغلوا أسرع', 'The bakery and factories work faster'],
  drone: ['درون إضافي', 'Extra drone', 'طلب إضافي في نفس الوقت', 'One more order at the same time'],
  bargain: ['بناء أوفر', 'Cheaper building', 'كل المباني أرخص شوية', 'Every building costs a little less'],
  welcome: ['ترحيب سريع', 'Warm welcome', 'المستعمرين بيوصلوا أسرع', 'Colonists arrive sooner'],
  bigorders: ['طلبات أكبر', 'Bigger orders', 'الطلبات بتدفع فلوس أكتر', 'Orders pay more coins'],
};
export const REGION_NAMES = [['الوسط', 'Centre'], ['الشمال', 'North'], ['الغرب', 'West'], ['الشرق', 'East'], ['الجنوب', 'South'], ['شمال غرب', 'North-west'], ['شمال شرق', 'North-east'], ['جنوب غرب', 'South-west'], ['جنوب شرق', 'South-east']];
export const EMOJI = {
  wheat: '🌾', carrot: '🥕', corn: '🌽', milk: '🥛', bread: '🍞', cheese: '🧀', juice: '🧃',
  field: '🌱', pen: '🐐', home: '🏠', bakery: '🥖', dairy: '🧀', juicer: '🧃', spaceport: '🚀', goat: '🐐', hq: '📡',
};
export const nm = (k) => I.t(k);
export const lt = (a) => a[I.getLang() === 'en' ? 1 : 0];

export function taskText(t) {
  const en = I.getLang() === 'en';
  const n = I.num(t.n);
  switch (t.k) {
    case 'harvest': return en ? `Harvest ${n} ${nm(t.item)}` : `احصد ${n} ${nm(t.item)}`;
    case 'make': return en ? `Make ${n} ${nm(t.item)}` : `اعمل ${n} ${nm(t.item)}`;
    case 'deliver': return en ? `Deliver ${n} order${t.n > 1 ? 's' : ''}` : `سلّم ${n} ${t.n > 2 && t.n < 11 ? 'طلبات' : 'طلب'}`;
    case 'milk': return en ? `Collect ${n} milk` : `اجمع ${n} لبن`;
    case 'earn': return en ? `Earn ${n} 🪙 from orders` : `اكسب ${n} 🪙 من الطلبات`;
    case 'have': return en ? `Build: ${nm(t.b)} ×${n}` : `ابني: ${nm(t.b)} ×${n}`;
    case 'goats': return en ? `Have ${n} goats` : `خلّي عندك ${n} ماعز`;
    case 'colonists': return en ? `Welcome ${n} colonists` : `استقبل ${n} مستعمرين`;
    case 'regions': return en ? `Open ${n} areas` : `افتح ${n} مناطق`;
    default: return '';
  }
}
export function unlockText(u) {
  if (u.startsWith('region:')) return `🗺️ ${I.getLang() === 'en' ? 'New area' : 'منطقة جديدة'}: ${lt(REGION_NAMES[Number(u.slice(7))])}`;
  return `${EMOJI[u] || '✨'} ${nm(u)}`;
}
export { REGIONS };
