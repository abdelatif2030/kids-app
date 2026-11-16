// «المحل»: clothes for the two explorers, bought with the coins collected in the levels. Nothing costs real money,
// nothing bought is ever taken away, and every child starts with a full free outfit for each hero.

export const HEROES = {
  boy: { ar: 'آدم', en: 'Adam' },
  girl: { ar: 'نور', en: 'Nour' },
};

export const CATS = [
  { id: 'hat', ar: 'على الراس', en: 'Hats', icon: '🎩' },
  { id: 'top', ar: 'بلوزات', en: 'Tops', icon: '👕' },
  { id: 'bottom', ar: 'شورتات', en: 'Shorts', icon: '🩳' },
  { id: 'shoes', ar: 'جزم', en: 'Shoes', icon: '👟' },
];

export const SHOP = [
  { id: 'hat_none', cat: 'hat', ar: 'بدون', en: 'None', price: 0 },
  { id: 'hat_helmet', cat: 'hat', ar: 'خوذة المستكشف', en: 'Explorer helmet', price: 0, color: '#d9b97c', shade: '#b8955a', band: '#2f5fc4' },
  { id: 'hat_cap', cat: 'hat', ar: 'كاب أحمر', en: 'Red cap', price: 40, color: '#e8483f', shade: '#b52f28' },
  { id: 'hat_flower', cat: 'hat', ar: 'تاج ورد', en: 'Flower crown', price: 60 },
  { id: 'hat_crown', cat: 'hat', ar: 'تاج ذهب', en: 'Gold crown', price: 150, color: '#ffd43b', shade: '#e0a800' },

  { id: 'top_purple', cat: 'top', ar: 'بنفسجي بنجمة', en: 'Purple star', price: 0, color: '#7b4fd6', shade: '#5c37ae', star: true, hood: true },
  { id: 'top_pink', cat: 'top', ar: 'بمبي بنجمة', en: 'Pink star', price: 0, color: '#f06ab0', shade: '#c94a8e', star: true },
  { id: 'top_blue', cat: 'top', ar: 'أزرق المستكشف', en: 'Explorer blue', price: 30, color: '#2f6fd8', shade: '#2153a6', collar: true },
  { id: 'top_green', cat: 'top', ar: 'أخضر الأدغال', en: 'Jungle green', price: 30, color: '#3fa34d', shade: '#2c7a37', collar: true },
  { id: 'top_orange', cat: 'top', ar: 'برتقالي بنجمة', en: 'Orange star', price: 45, color: '#ff8a2a', shade: '#d9641a', star: true },
  { id: 'top_hero', cat: 'top', ar: 'بطل خارق', en: 'Super hero', price: 120, color: '#e8483f', shade: '#b52f28', bolt: true },

  { id: 'bot_khaki', cat: 'bottom', ar: 'كاكي', en: 'Khaki', price: 0, color: '#d9c08a', shade: '#b79c63' },
  { id: 'bot_jeans', cat: 'bottom', ar: 'جينز', en: 'Jeans', price: 20, color: '#3d5a9e', shade: '#2c4478' },
  { id: 'bot_purple', cat: 'bottom', ar: 'بنفسجي', en: 'Purple', price: 25, color: '#8f6ad8', shade: '#6f4cb8' },
  { id: 'bot_pink', cat: 'bottom', ar: 'بمبي', en: 'Pink', price: 25, color: '#ff8fc7', shade: '#e06aa6' },

  { id: 'shoe_boots', cat: 'shoes', ar: 'بوت بني', en: 'Brown boots', price: 0, color: '#8a4b22', shade: '#64341a' },
  { id: 'shoe_red', cat: 'shoes', ar: 'كوتشي أحمر', en: 'Red sneakers', price: 30, color: '#e03131', shade: '#a61e1e', sole: '#ffffff' },
  { id: 'shoe_white', cat: 'shoes', ar: 'كوتشي أبيض', en: 'White sneakers', price: 30, color: '#f1f3f5', shade: '#ced4da', sole: '#adb5bd' },
  { id: 'shoe_gold', cat: 'shoes', ar: 'بوت ذهب', en: 'Gold boots', price: 100, color: '#f5b72c', shade: '#c98a14' },
];

export const ITEM = Object.fromEntries(SHOP.map((i) => [i.id, i]));

export const DEFAULT_LOOK = {
  boy: { hat: 'hat_none', top: 'top_purple', bottom: 'bot_khaki', shoes: 'shoe_boots' },
  girl: { hat: 'hat_none', top: 'top_pink', bottom: 'bot_khaki', shoes: 'shoe_boots' },
};

export const isFree = (id) => (ITEM[id]?.price ?? 1) === 0;
export const owns = (save, id) => isFree(id) || save.owned.includes(id);

/** Buys an item with coins. Returns 'bought', 'owned', 'poor' or 'unknown'. */
export function buy(save, id) {
  const it = ITEM[id];
  if (!it) return 'unknown';
  if (owns(save, id)) return 'owned';
  if (save.coins < it.price) return 'poor';
  save.coins -= it.price;
  save.owned.push(id);
  return 'bought';
}

/** Puts an owned item on a hero. */
export function wear(save, hero, id) {
  const it = ITEM[id];
  if (!it || !owns(save, id) || !HEROES[hero]) return false;
  save.looks[hero][it.cat] = id;
  return true;
}

/** The hero's look, with anything unknown or not owned replaced by the free default. */
export function lookOf(save, hero) {
  const l = { ...DEFAULT_LOOK[hero] };
  const saved = save.looks?.[hero] ?? {};
  for (const c of CATS) {
    const id = saved[c.id];
    if (id && ITEM[id] && ITEM[id].cat === c.id && owns(save, id)) l[c.id] = id;
  }
  return l;
}
