// Fashion Queen data: 100+ clothing items generated from styles x colours, hair, makeup, pets, rooms, runway themes, worlds.
export const COLS = {
  rose: '#ff6aa8', white: '#ffffff', red: '#e8344a', purple: '#a86aff', blue: '#4a8aff', mint: '#5ae8b8', gold: '#ffd23a', black: '#2a2a3a',
  pink: '#ffa8d0', sky: '#8ad8ff', orange: '#ff8a3a', green: '#4ac86a', cream: '#fff0d0', silver: '#d0d8e8', denim: '#4a6aa8', brown: '#8a5a3a',
};
const mk = (cat, slot, style, color, base, tags, i) => ({ id: `${cat}_${style}_${color}`, cat, slot, style, color: COLS[color], colorName: color, tags, price: i === 0 ? 0 : base + i * 20, diamonds: 0 });

const list = [];
const addAll = (cat, slot, styles, colors, base, tagsOf) => styles.forEach((st, si) => colors.forEach((c, ci) => list.push(mk(cat, slot, st, c, base, tagsOf(st), si === 0 && ci === 0 ? 0 : ci + si))));
addAll('dress', 'dress', ['gown', 'mermaid', 'mini', 'aline', 'ball', 'wrap'], ['rose', 'white', 'purple', 'blue', 'red'], 60, (s) => ({ gown: ['wedding', 'royal', 'party', 'princess'], mermaid: ['beach', 'party', 'fantasy'], mini: ['school', 'casual', 'summer'], aline: ['casual', 'school', 'summer'], ball: ['royal', 'princess', 'fantasy'], wrap: ['casual', 'winter'] }[s]));
addAll('top', 'top', ['tee', 'blouse', 'hoodie', 'sweater', 'crop'], ['white', 'pink', 'sky'], 30, (s) => ({ tee: ['casual', 'summer', 'school'], blouse: ['school', 'party', 'casual'], hoodie: ['winter', 'casual'], sweater: ['winter', 'school'], crop: ['summer', 'beach'] }[s]));
addAll('bottom', 'bottom', ['skirt', 'longskirt', 'pleat', 'jeans', 'leggings', 'shorts'], ['black', 'denim', 'cream'], 30, (s) => ({ skirt: ['party', 'school'], longskirt: ['winter', 'wedding'], pleat: ['school', 'casual'], jeans: ['casual', 'winter'], leggings: ['winter', 'school'], shorts: ['summer', 'beach'] }[s]));
addAll('shoes', 'shoes', ['heels', 'flats', 'boots', 'sandals', 'sneakers', 'crystal'], ['white', 'rose', 'gold'], 25, (s) => ({ heels: ['party', 'wedding', 'royal'], flats: ['school', 'casual'], boots: ['winter'], sandals: ['beach', 'summer'], sneakers: ['casual', 'school'], crystal: ['princess', 'royal', 'fantasy', 'wedding'] }[s]));
addAll('bag', 'bag', ['clutch', 'tote', 'mini', 'backpack', 'crossbody'], ['rose', 'gold'], 25, (s) => ({ clutch: ['party', 'wedding', 'royal'], tote: ['casual', 'summer', 'beach'], mini: ['party', 'princess'], backpack: ['school'], crossbody: ['casual', 'school'] }[s]));
addAll('neck', 'neck', ['pearls', 'heart', 'star', 'choker'], ['white', 'gold'], 30, (s) => ({ pearls: ['wedding', 'royal', 'party'], heart: ['casual', 'school'], star: ['party', 'fantasy'], choker: ['party', 'princess'] }[s]));
addAll('ears', 'ears', ['studs', 'hoops', 'drops'], ['gold', 'silver'], 25, () => ['party', 'wedding', 'royal', 'casual']);
addAll('wrist', 'wrist', ['bracelet', 'watch', 'bangles'], ['gold', 'rose'], 25, () => ['party', 'casual', 'wedding']);
addAll('head', 'head', ['crown', 'tiara', 'bow', 'sunhat', 'flowers', 'veil', 'beanie'], ['gold', 'rose'], 40, (s) => ({ crown: ['royal', 'princess', 'fantasy'], tiara: ['princess', 'wedding', 'party'], bow: ['school', 'casual', 'party'], sunhat: ['beach', 'summer'], flowers: ['summer', 'fantasy', 'wedding'], veil: ['wedding'], beanie: ['winter'] }[s]));
addAll('face', 'face', ['sunglasses', 'heartglasses'], ['black', 'rose'], 25, () => ['beach', 'summer', 'casual']);
for (const it of list) if (['crown', 'veil', 'crystal', 'ball'].includes(it.style) && it.price > 0) { it.diamonds = 3 + (it.price > 90 ? 2 : 0); it.price = 0; }
export const ITEMS = list;
export const SLOTS = ['dress', 'top', 'bottom', 'shoes', 'bag', 'neck', 'ears', 'wrist', 'head', 'face'];
export const CAT_ICON = { dress: '👗', top: '👚', bottom: '👖', shoes: '👠', bag: '👜', neck: '📿', ears: '✨', wrist: '⌚', head: '👑', face: '🕶️' };
export const CAT_NAME = { dress: ['فساتين', 'Dresses'], top: ['بلوزات', 'Tops'], bottom: ['تنانير وبناطيل', 'Skirts & Pants'], shoes: ['أحذية', 'Shoes'], bag: ['شنط', 'Bags'], neck: ['عقود', 'Necklaces'], ears: ['حلق', 'Earrings'], wrist: ['أساور', 'Bracelets'], head: ['تيجان', 'Crowns'], face: ['نظارات', 'Glasses'] };
export const STYLE_NAME = {
  gown: ['فستان سهرة', 'Gown'], mermaid: ['فستان حورية', 'Mermaid'], mini: ['فستان قصير', 'Mini dress'], aline: ['فستان واسع', 'A-line'], ball: ['فستان الحفلة الملكية', 'Ball gown'], wrap: ['فستان لف', 'Wrap dress'],
  tee: ['تيشيرت', 'T-shirt'], blouse: ['بلوزة', 'Blouse'], hoodie: ['هودي', 'Hoodie'], sweater: ['سويتر', 'Sweater'], crop: ['توب قصير', 'Crop top'],
  skirt: ['تنورة', 'Skirt'], longskirt: ['تنورة طويلة', 'Long skirt'], pleat: ['تنورة مدرسة', 'Pleated skirt'], jeans: ['جينز', 'Jeans'], leggings: ['ليجن', 'Leggings'], shorts: ['شورت', 'Shorts'],
  heels: ['كعب', 'Heels'], flats: ['حذاء مسطح', 'Flats'], boots: ['بوت', 'Boots'], sandals: ['صندل', 'Sandals'], sneakers: ['كوتشي', 'Sneakers'], crystal: ['حذاء كريستال', 'Crystal shoes'],
  clutch: ['كلتش', 'Clutch'], tote: ['شنطة كبيرة', 'Tote'], backpack: ['شنطة ضهر', 'Backpack'], crossbody: ['شنطة كتف', 'Crossbody'],
  pearls: ['عقد لؤلؤ', 'Pearls'], heart: ['عقد قلب', 'Heart necklace'], star: ['عقد نجمة', 'Star necklace'], choker: ['تشوكر', 'Choker'],
  studs: ['حلق صغير', 'Studs'], hoops: ['حلق دائري', 'Hoops'], drops: ['حلق طويل', 'Drops'], bracelet: ['إسورة', 'Bracelet'], watch: ['ساعة', 'Watch'], bangles: ['أساور', 'Bangles'],
  crown: ['تاج', 'Crown'], tiara: ['تاج صغير', 'Tiara'], bow: ['فيونكة', 'Bow'], sunhat: ['قبعة صيفية', 'Sun hat'], flowers: ['تاج ورد', 'Flower crown'], veil: ['طرحة', 'Veil'], beanie: ['طاقية شتوي', 'Beanie'],
  sunglasses: ['نظارة شمس', 'Sunglasses'], heartglasses: ['نظارة قلب', 'Heart glasses'],
};
export const COLOR_NAME = { rose: ['وردي', 'Rose'], white: ['أبيض', 'White'], red: ['أحمر', 'Red'], purple: ['بنفسجي', 'Purple'], blue: ['أزرق', 'Blue'], mint: ['نعناعي', 'Mint'], gold: ['دهبي', 'Gold'], black: ['أسود', 'Black'], pink: ['بينك', 'Pink'], sky: ['سماوي', 'Sky'], orange: ['برتقالي', 'Orange'], green: ['أخضر', 'Green'], cream: ['كريمي', 'Cream'], silver: ['فضي', 'Silver'], denim: ['جينز', 'Denim'], brown: ['بني', 'Brown'] };

export const HAIRS = ['long', 'curly', 'bun', 'pony', 'braid', 'bob', 'wavy', 'pigtails'];
export const HAIR_NAME = { long: ['شعر طويل', 'Long'], curly: ['كيرلي', 'Curly'], bun: ['كعكة', 'Bun'], pony: ['ذيل حصان', 'Ponytail'], braid: ['ضفيرة', 'Braid'], bob: ['كاريه', 'Bob'], wavy: ['مموّج', 'Wavy'], pigtails: ['ضفيرتين', 'Pigtails'] };
export const HAIR_COLORS = ['#7a4a2a', '#2a1a1a', '#f0d060', '#e8452a', '#ff8ac8', '#b86aff', '#5ab8ff', '#c88a4a', '#f4f4f4', '#3ae8a8'];
export const SKINS = ['#ffe0c8', '#f0c8a0', '#d8a070', '#a87048', '#7a4a30'];
export const EYE_COLORS = ['#4a2a1a', '#2a6ae8', '#2aa86a', '#8a5ae8', '#e86aa8', '#2a2a3a', '#c88a2a', '#5ad8e8'];
export const LIPS = ['#ff4a7a', '#e83a3a', '#ff8ab8', '#b8386a', '#ff7a5a', '#8a2a5a', '#d84a9a', '#ffa8a8'];
export const BLUSH = ['#ff9ab8', '#ff7a8a', '#ffb88a', '#e86a9a', '#ffc8d8'];
export const SHADOW = ['#b86aff', '#5ab8ff', '#ff8ab8', '#5af0a0', '#ffd23a', '#2a2a3a', '#ff8a3a', '#a8e8ff'];
export const NAILS = ['#ff4a7a', '#ffffff', '#b86aff', '#5ab8ff', '#ffd23a', '#e8344a', '#5ae8b8', '#2a2a3a'];
export const LASHES = ['natural', 'long', 'wing', 'glam'];

export const PETS = [
  { id: 'puppy', ar: 'جرو', en: 'Puppy', base: '#e8b878', ear: 'floppy', cost: 0, dia: 0 },
  { id: 'kitten', ar: 'قطة', en: 'Kitten', base: '#ffffff', ear: 'point', cost: 0, dia: 0 },
  { id: 'rabbit', ar: 'أرنب', en: 'Rabbit', base: '#f4e8f0', ear: 'long', cost: 150, dia: 0 },
  { id: 'panda', ar: 'باندا', en: 'Panda', base: '#f4f4f4', ear: 'round', cost: 0, dia: 5 },
  { id: 'pony', ar: 'حصان صغير', en: 'Pony', base: '#d8a8e8', ear: 'point', cost: 0, dia: 8 },
  { id: 'fluffy', ar: 'قطة فلافي', en: 'Fluffy kitten', base: '#ffd8e8', ear: 'point', cost: 300, dia: 0 },
  { id: 'babydog', ar: 'كلب صغير', en: 'Baby dog', base: '#c8a878', ear: 'floppy', cost: 200, dia: 0 },
];
export const PET_OUTFITS = ['none', 'bow', 'hat', 'scarf', 'crown', 'glasses'];
export const PET_BEDS = ['#ffa8d0', '#a8d8ff', '#d8c8ff', '#ffe8a8', '#a8ffd8', '#ffc8a8'];
export const FOODS = [['🍖', 'bone'], ['🥕', 'carrot'], ['🐟', 'fish'], ['🍎', 'apple']];

export const ROOMS = [
  { id: 'bedroom', ar: 'غرفة الأميرة', en: 'Princess Bedroom', furn: ['🛏️', '🪞', '🧸', '🪑', '💡', '🖼️', '🪴', '🎀'] },
  { id: 'living', ar: 'غرفة المعيشة', en: 'Living Room', furn: ['🛋️', '📺', '🪴', '🖼️', '💡', '🎹', '🧸', '📚'] },
  { id: 'kitchen', ar: 'المطبخ', en: 'Kitchen', furn: ['🍳', '🧊', '🍰', '🪑', '☕', '🍎', '🥞', '💡'] },
  { id: 'bath', ar: 'الحمام', en: 'Bathroom', furn: ['🛁', '🚿', '🪞', '🧴', '🧼', '🪴', '🕯️', '🧸'] },
  { id: 'dress', ar: 'غرفة الملابس', en: 'Dressing Room', furn: ['👗', '👠', '👜', '🪞', '💄', '👑', '💍', '🛍️'] },
  { id: 'garden', ar: 'الحديقة', en: 'Garden', furn: ['🌳', '🌷', '🪑', '⛲', '🦋', '🌻', '🏡', '🎠'] },
];
export const WALLS = ['#ffd8ec', '#d8e8ff', '#e8d8ff', '#fff0c8', '#d8ffe8', '#ffe0d0'];
export const FLOORS = ['#e8c898', '#c8a878', '#e8e8f0', '#a8d8a8', '#d8b8d8'];

export const THEMES = [
  { id: 'princess', ar: 'ليلة الأميرات', en: 'Princess Night', need: ['princess', 'royal', 'party'], icon: '👸' },
  { id: 'beach', ar: 'شاطئ الصيف', en: 'Summer Beach', need: ['beach', 'summer'], icon: '🏖️' },
  { id: 'wedding', ar: 'حفلة الزفاف', en: 'Wedding Party', need: ['wedding', 'party', 'royal'], icon: '💍' },
  { id: 'winter', ar: 'موضة الشتاء', en: 'Winter Fashion', need: ['winter'], icon: '❄️' },
  { id: 'school', ar: 'إطلالة المدرسة', en: 'School Style', need: ['school', 'casual'], icon: '🎒' },
  { id: 'royal', ar: 'الحفلة الملكية', en: 'Royal Ball', need: ['royal', 'princess', 'party'], icon: '👑' },
  { id: 'casual', ar: 'يوم عادي', en: 'Casual Day', need: ['casual', 'summer'], icon: '☀️' },
  { id: 'fantasy', ar: 'موضة الخيال', en: 'Fantasy Fashion', need: ['fantasy', 'princess'], icon: '🦄' },
];

export const WORLDS = [
  { id: 'city', ar: 'مدينة الموضة', en: 'Fashion City', icon: '🏙️', need: 0, levels: [{ k: 'equip', n: 3, ar: 'البسي ٣ قطع', en: 'Wear 3 items' }, { k: 'buy', n: 1, ar: 'اشتري قطعة', en: 'Buy 1 item' }, { k: 'fav', n: 1, ar: 'احفظي إطلالة', en: 'Save a look' }, { k: 'equip', n: 8, ar: 'البسي ٨ قطع', en: 'Wear 8 items' }, { k: 'buy', n: 3, ar: 'اشتري ٣ قطع', en: 'Buy 3 items' }] },
  { id: 'beauty', ar: 'قصر الجمال', en: 'Beauty Palace', icon: '💄', need: 3, levels: [{ k: 'salon', n: 1, ar: 'خلّصي نشاط صالون', en: 'Finish a salon task' }, { k: 'salon', n: 3, ar: '٣ أنشطة صالون', en: '3 salon tasks' }, { k: 'makeup', n: 3, ar: 'ميك آب ٣ مرات', en: 'Makeup 3 times' }, { k: 'salon', n: 6, ar: '٦ أنشطة', en: '6 salon tasks' }, { k: 'salon', n: 10, ar: '١٠ أنشطة', en: '10 salon tasks' }] },
  { id: 'pets', ar: 'جنة الحيوانات', en: 'Pet Paradise', icon: '🐶', need: 8, levels: [{ k: 'petcare', n: 2, ar: 'اعتني بحيوان ٢ مرة', en: 'Care for a pet 2 times' }, { k: 'petcare', n: 6, ar: '٦ مرات', en: '6 times' }, { k: 'petunlock', n: 1, ar: 'افتحي حيوان جديد', en: 'Unlock a new pet' }, { k: 'petcare', n: 12, ar: '١٢ مرة', en: '12 times' }, { k: 'petunlock', n: 3, ar: 'افتحي ٣ حيوانات', en: 'Unlock 3 pets' }] },
  { id: 'house', ar: 'البيت الحلو', en: 'Dream House', icon: '🏠', need: 14, levels: [{ k: 'place', n: 3, ar: 'ضعي ٣ قطع أثاث', en: 'Place 3 furniture' }, { k: 'place', n: 8, ar: '٨ قطع', en: '8 pieces' }, { k: 'room', n: 1, ar: 'احفظي تصميم غرفة', en: 'Save a room' }, { k: 'place', n: 16, ar: '١٦ قطعة', en: '16 pieces' }, { k: 'room', n: 4, ar: 'احفظي ٤ غرف', en: 'Save 4 rooms' }] },
  { id: 'runway', ar: 'المنصة الملكية', en: 'Royal Runway', icon: '🌟', need: 20, levels: [{ k: 'runway', n: 1, ar: 'اشتركي في عرض', en: 'Join a show' }, { k: 'runwayStars', n: 2, ar: 'ريحي نجمتين في عرض', en: 'Win 2 stars' }, { k: 'runway', n: 4, ar: '٤ عروض', en: '4 shows' }, { k: 'runwayStars', n: 3, ar: '٣ نجوم في عرض', en: '3 stars' }, { k: 'runway', n: 8, ar: '٨ عروض', en: '8 shows' }] },
  { id: 'island', ar: 'جزيرة الموضة السحرية', en: 'Magical Island', icon: '🏝️', need: 28, levels: [{ k: 'daily', n: 3, ar: 'خلّصي ٣ مهام يومية', en: '3 daily tasks' }, { k: 'runwayStars', n: 3, ar: '٣ نجوم تاني', en: '3 stars again' }, { k: 'achieve', n: 3, ar: '٣ إنجازات', en: '3 achievements' }, { k: 'coins', n: 800, ar: 'اجمعي ٨٠٠ عملة', en: 'Earn 800 coins' }, { k: 'achieve', n: 6, ar: '٦ إنجازات', en: '6 achievements' }] },
];

export const ACHIEVEMENTS = [
  { id: 'a1', k: 'equip', n: 10, ar: 'عاشقة الموضة', en: 'Fashion lover', rw: { coins: 50 } }, { id: 'a2', k: 'buy', n: 5, ar: 'متسوّقة', en: 'Shopper', rw: { coins: 80 } },
  { id: 'a3', k: 'salon', n: 5, ar: 'خبيرة جمال', en: 'Beauty expert', rw: { coins: 80 } }, { id: 'a4', k: 'petcare', n: 10, ar: 'صديقة الحيوانات', en: 'Pet friend', rw: { dia: 2 } },
  { id: 'a5', k: 'place', n: 10, ar: 'مصمّمة ديكور', en: 'Decorator', rw: { coins: 80 } }, { id: 'a6', k: 'runway', n: 3, ar: 'عارضة', en: 'Model', rw: { dia: 2 } },
  { id: 'a7', k: 'runwayStars', n: 3, ar: 'ملكة المنصة', en: 'Runway queen', rw: { dia: 3 } }, { id: 'a8', k: 'fav', n: 3, ar: 'مجموعة إطلالات', en: 'Look collection', rw: { coins: 60 } },
  { id: 'a9', k: 'daily', n: 3, ar: 'منظّمة', en: 'Organised', rw: { dia: 2 } }, { id: 'a10', k: 'coins', n: 1000, ar: 'غنية', en: 'Rich', rw: { dia: 4 } },
];

export const DAILY = [
  { k: 'equip', n: 3, ar: 'البسي ٣ قطع', en: 'Wear 3 items', rw: { coins: 40 } }, { k: 'salon', n: 1, ar: 'نشاط صالون', en: 'A salon task', rw: { coins: 40 } },
  { k: 'petcare', n: 2, ar: 'اعتني بحيوانك', en: 'Care for a pet', rw: { coins: 40 } }, { k: 'place', n: 2, ar: 'ديكور غرفة', en: 'Decorate', rw: { coins: 40 } }, { k: 'runway', n: 1, ar: 'عرض أزياء', en: 'A runway show', rw: { dia: 1 } },
];

export const IDLE = 0;
