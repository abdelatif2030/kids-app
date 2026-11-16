// «مخبز اليقطين» — layout, prices, the expansion pads and the save format. Pure data, no DOM, no three.js.
// Coordinates: x to the right, z towards the camera (south). The shop (counter, ovens) is north, the fields south.

export const PRICE = 3; // coins for one pie
export const TIP = 1; // extra per customer once the tables are built

export const BOUNDS = { x0: -12, x1: 12, z0: -6.4, z1: 12 };

// solid things the chef walks around: [x0, z0, x1, z1]
export const COUNTER = { x: 0, z: -6, w: 5, d: 1.2 };
export const OVENS = [
  { id: 'oven1', x: -6, z: -3.4, input: { x: -6, z: -1.3 }, shelf: { x: -3.7, z: -3.4 } },
  { id: 'oven2', x: 6, z: -3.4, input: { x: 6, z: -1.3 }, shelf: { x: 3.7, z: -3.4 }, needs: 'oven2' },
];
export const COUNTER_ZONE = { x: -0.9, z: -4.5, r: 1.3 };
export const CASH_ZONE = { x: 1.9, z: -4.5, r: 1.0 };
export const CHUTE = { x: -3.2, z: 2.4, r: 1.1 };
export const ZONE_R = 1.25;

export const FIELDS = [
  { id: 'field1', x: 0, z: 6.4, cols: 4, rows: 3 },
  { id: 'field2', x: -7.2, z: 6.8, cols: 3, rows: 4, needs: 'field2' },
  { id: 'field3', x: 7.2, z: 6.8, cols: 3, rows: 4, needs: 'field3' },
];
export const PLOT = 1.45; // spacing between pumpkins
export const REGROW = 6; // seconds until a picked pumpkin is ripe again
export const BAKE = 2.4; // seconds per pie
export const OVEN_IN = 10; // pumpkins waiting in an oven
export const OVEN_OUT = 10; // pies on an oven shelf
export const COUNTER_CAP = 16;

/** The expansions, paid by standing on their pad. Only the next two are shown at a time. */
export const PADS = [
  { id: 'basket', cost: 15, x: 2.8, z: 2.0, icon: '🧺', ar: 'سلة أكبر', en: 'Bigger basket' },
  { id: 'field2', cost: 30, x: -7.2, z: 2.6, icon: '🎃', ar: 'حقل قرع جديد', en: 'New pumpkin patch' },
  { id: 'chute', cost: 40, x: -3.2, z: 2.4, icon: '🛝', ar: 'زحليقة القرع', en: 'Pumpkin chute' },
  { id: 'oven2', cost: 60, x: 6, z: -0.2, icon: '🔥', ar: 'فرن تاني', en: 'Second oven' },
  { id: 'waiter', cost: 80, x: 4.2, z: 0.8, icon: '🐻', ar: 'دبدوب المساعد', en: 'Teddy the helper' },
  { id: 'tables', cost: 90, x: -9.4, z: -2.6, icon: '🪑', ar: 'ترابيزات للضيوف', en: 'Tables for guests' },
  { id: 'farmer', cost: 110, x: -1.8, z: 10.4, icon: '🐰', ar: 'أرنوب الفلاح', en: 'Bunny the farmer' },
  { id: 'field3', cost: 130, x: 7.2, z: 2.6, icon: '🎃', ar: 'حقل كبير', en: 'Big pumpkin patch' },
  { id: 'basket2', cost: 120, x: 1.6, z: 10.4, icon: '🧺', ar: 'سلة عملاقة', en: 'Giant basket' },
  { id: 'lights', cost: 160, x: 9.4, z: -2.6, icon: '🏮', ar: 'زينة الخريف', en: 'Autumn lights' },
];

export const CUSTOMER_KINDS = ['bear', 'fox', 'bunny', 'cat', 'raccoon', 'owl'];

export const capacityOf = (unlocked) => 5 + (unlocked.includes('basket') ? 4 : 0) + (unlocked.includes('basket2') ? 6 : 0);

/** A save from the app (or from an old version, or damaged) made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const ids = new Set(PADS.map((p) => p.id));
  const unlocked = Array.isArray(s.unlocked) ? [...new Set(s.unlocked.filter((id) => ids.has(id)))] : [];
  const paid = {};
  if (s.paid && typeof s.paid === 'object') {
    for (const p of PADS) {
      const v = Math.floor(Number(s.paid[p.id]));
      if (v > 0 && v < p.cost && !unlocked.includes(p.id)) paid[p.id] = v;
    }
  }
  const n = (v) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : 0);
  return {
    coins: Math.min(n(s.coins), 999999),
    unlocked,
    paid,
    served: n(s.served),
    pies: n(s.pies),
    complete: s.complete === true && unlocked.length === PADS.length,
    muted: s.muted === true,
    chef: s.chef === 'boy' || s.chef === 'girl' ? s.chef : null,
  };
}
