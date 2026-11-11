// «مزرعتي السعيدة» data: crops, the eight farms, the tool-shed upgrades and the saved progress.
// World units are metres: x to the right, z towards the bottom of the screen. The barn and its unloading grate sit at
// the bottom of every farm; fields lie above them.

export const CELL = 0.5; // one crop cell, metres

export const CROPS = {
  wheat: { ar: 'قمح', en: 'Wheat', yield: 1, price: 0.16, color: 0xf2c14e, product: 'flour' },
  corn: { ar: 'ذرة', en: 'Corn', yield: 1.4, price: 0.15, color: 0xf7d34a, product: 'corn' },
  sunflower: { ar: 'عباد الشمس', en: 'Sunflowers', yield: 1.2, price: 0.18, color: 0xffc928, product: 'seeds' },
};

export const ANIMALS = {
  sheep: { ar: 'خرفان', en: 'Sheep', r: 0.55 },
  cow: { ar: 'بقر', en: 'Cows', r: 0.8 },
  chicken: { ar: 'فراخ', en: 'Chickens', r: 0.35 },
};

// Each farm: a size (w x d metres inside the fence), fields [x, z, w, d, crop], rocks [x, z], animals [kind, x, z]
// and a pen [x, z, w, d] where animals can be guided. Original layouts.
export const LEVELS = [
  { id: 1, ar: 'الوادي الذهبي', en: 'Golden Valley', w: 30, d: 34, fields: [[-8, -12, 16, 12, 'wheat']], rocks: [], animals: [], pen: null },
  { id: 2, ar: 'تلة البرسيم', en: 'Clover Hill', w: 34, d: 36, fields: [[-10, -14, 20, 14, 'wheat']], rocks: [[-4, -9], [5, -5]], animals: [], pen: null },
  { id: 3, ar: 'بستان الذرة', en: 'Corn Corner', w: 38, d: 38, fields: [[-14, -15, 14, 14, 'corn'], [2, -13, 10, 10, 'wheat']], rocks: [[-8, -9], [6, -8], [-2, -3]], animals: [['sheep', 10, 2], ['sheep', 12, 4]], pen: [8, 6, 7, 5] },
  { id: 4, ar: 'حقول الشمس', en: 'Sunny Fields', w: 40, d: 40, fields: [[-12, -16, 22, 16, 'sunflower']], rocks: [[-6, -11], [4, -9], [-2, -5], [7, -3]], animals: [['sheep', -10, 4], ['sheep', -12, 2], ['sheep', -8, 6]], pen: [-16, 8, 7, 5] },
  { id: 5, ar: 'مزرعة الطاحونة', en: 'Windmill Farm', w: 44, d: 44, fields: [[-18, -18, 12, 14, 'wheat'], [-4, -18, 12, 12, 'corn'], [10, -16, 10, 12, 'sunflower']], rocks: [[-13, -12], [0, -10], [14, -8], [-8, -2], [5, -1]], animals: [['cow', 12, 4], ['cow', 15, 6], ['cow', 10, 8]], pen: [13, 10, 8, 6] },
  { id: 6, ar: 'السهل الكبير', en: 'Big Plains', w: 48, d: 46, fields: [[-16, -20, 30, 20, 'wheat']], rocks: [[-10, -15], [-2, -12], [6, -16], [9, -6], [-6, -5], [2, -3]], animals: [['sheep', -18, 6], ['sheep', -14, 8], ['chicken', -16, 4], ['chicken', -12, 6]], pen: [-20, 10, 8, 6] },
  { id: 7, ar: 'وادي النهر', en: 'River Valley', w: 50, d: 48, fields: [[-20, -21, 18, 16, 'corn'], [2, -21, 18, 16, 'sunflower']], rocks: [[-14, -15], [-6, -9], [-17, -7], [8, -16], [14, -10], [5, -7], [18, -14], [-1, -2]], animals: [['cow', 14, 6], ['sheep', 18, 4], ['sheep', 16, 8], ['chicken', 12, 4]], pen: [16, 11, 9, 6] },
  { id: 8, ar: 'المزرعة الكبيرة', en: 'Grand Farm', w: 54, d: 52, fields: [[-22, -23, 14, 14, 'wheat'], [-6, -23, 12, 18, 'corn'], [8, -23, 14, 14, 'sunflower'], [8, -7, 14, 8, 'wheat']], rocks: [[-17, -18], [-11, -12], [-2, -17], [2, -9], [12, -18], [18, -13], [-15, -6], [13, -3], [-4, -3], [19, -4]], animals: [['cow', -18, 6], ['cow', -14, 8], ['sheep', -20, 4], ['sheep', -16, 2], ['chicken', -12, 4]], pen: [-22, 11, 10, 6] },
];

// The barn and unloading grate: bottom centre of every farm.
export function barnSpot(level) {
  const z = level.d / 2 - 6;
  return { barn: { x: -6, z: z + 1, w: 7, d: 5 }, pad: { x: 2.5, z, w: 4, d: 4 } };
}

export const UPGRADES = [
  { id: 'cutter', ar: 'السكينة', en: 'Cutter', sub: ['أعرض', 'Wider'], icon: '🌾', base: 1.8, step: 0.45, unit: 'm' },
  { id: 'engine', ar: 'الموتور', en: 'Engine', sub: ['أسرع', 'Faster'], icon: '⚙️', base: 3.2, step: 0.4, unit: 'm/s' },
  { id: 'trailer', ar: 'المقطورة', en: 'Trailer', sub: ['أكبر', 'Bigger'], icon: '🛒', base: 400, step: 200, unit: '' },
  { id: 'barn', ar: 'المخزن', en: 'Barn', sub: ['أسعار أحسن', 'Better prices'], icon: '🏠', base: 0, step: 10, unit: '%' },
];
export const MAX_LEVEL = 6;
export const upgradeCost = (id, lvl) => ({ cutter: 120, engine: 150, trailer: 100, barn: 200 }[id] + lvl * ({ cutter: 100, engine: 90, trailer: 90, barn: 120 }[id]));
export const statOf = (id, lvl) => {
  const u = UPGRADES.find((x) => x.id === id);
  return u.base + u.step * lvl;
};

export function emptySave() {
  return { v: 1, coins: 0, unlocked: 1, stars: {}, up: { cutter: 0, engine: 0, trailer: 0, barn: 0 }, store: { flour: 0, hay: 0, corn: 0, seeds: 0 } };
}

export function normalizeSave(raw) {
  const s = emptySave();
  if (!raw || typeof raw !== 'object') return s;
  const n = (v, lo, hi, d) => (Number.isFinite(v) ? Math.max(lo, Math.min(hi, Math.floor(v))) : d);
  s.coins = n(raw.coins, 0, 9999999, 0);
  s.unlocked = n(raw.unlocked, 1, LEVELS.length, 1);
  if (raw.stars && typeof raw.stars === 'object') for (const l of LEVELS) if (raw.stars[l.id] !== undefined) s.stars[l.id] = n(raw.stars[l.id], 0, 3, 0);
  if (raw.up && typeof raw.up === 'object') for (const u of UPGRADES) s.up[u.id] = n(raw.up[u.id], 0, MAX_LEVEL, 0);
  if (raw.store && typeof raw.store === 'object') for (const k of Object.keys(s.store)) s.store[k] = n(raw.store[k], 0, 9999999, 0);
  if (raw.muted === true) s.muted = true;
  return s;
}

export function buyUpgrade(save, id) {
  const lvl = save.up[id];
  if (lvl >= MAX_LEVEL) return 'max';
  const cost = upgradeCost(id, lvl);
  if (save.coins < cost) return 'poor';
  save.coins -= cost;
  save.up[id] = lvl + 1;
  return 'bought';
}

/** A finished farm: coins were already added while selling; this opens the next farm and keeps the best stars. */
export function finishLevel(save, index, stars) {
  const id = LEVELS[index].id;
  save.stars[id] = Math.max(save.stars[id] ?? 0, stars);
  let opened = false;
  if (index + 1 < LEVELS.length && save.unlocked < index + 2) {
    save.unlocked = index + 2;
    opened = true;
  }
  return { opened };
}
