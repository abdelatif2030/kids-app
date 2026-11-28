// Game data for «سباق الملاهي» (Carnival race): racers, upgrades, tracks and the saved progress.
// Everything here is original (names, animals, numbers). Nothing is bought with money: tickets are only won by
// driving, and nothing a child has earned is ever taken away.

export const RACERS = [
  { id: 'raccoon', ar: 'رَكّون', en: 'Rocco', animal: 'raccoon', body: 0x4fd1c5, accent: 0xff5d8f, price: 0, trait: 'balanced' },
  { id: 'bunny', ar: 'أرنوبة', en: 'Bunny', animal: 'bunny', body: 0xff8fc7, accent: 0xffffff, price: 150, trait: 'grip' },
  { id: 'cat', ar: 'مِشمِش', en: 'Mishmish', animal: 'cat', body: 0xffa94d, accent: 0x7048e8, price: 250, trait: 'turbo' },
  { id: 'bear', ar: 'دُبدوب', en: 'Dubdub', animal: 'bear', body: 0x9775fa, accent: 0xffd43b, price: 350, trait: 'speed' },
  { id: 'fox', ar: 'ثعلوب', en: 'Foxy', animal: 'fox', body: 0xff6b6b, accent: 0xfff3bf, price: 500, trait: 'speed' },
  { id: 'panda', ar: 'بَندا', en: 'Panda', animal: 'panda', body: 0x69db7c, accent: 0x343a40, price: 650, trait: 'grip' },
];

export const TRAITS = {
  balanced: { ar: 'متوازن', en: 'Balanced', speed: 0.4, grip: 0.4, turbo: 0.4 },
  speed: { ar: 'سريع', en: 'Speedy', speed: 1.0, grip: 0.0, turbo: 0.2 },
  grip: { ar: 'ثابت', en: 'Steady', speed: 0.0, grip: 1.0, turbo: 0.2 },
  turbo: { ar: 'توربو', en: 'Turbo', speed: 0.2, grip: 0.2, turbo: 1.0 },
};

export const UPGRADES = [
  { id: 'engine', ar: 'المحرك', en: 'Engine', icon: '⚙️' },
  { id: 'grip', ar: 'الثبات', en: 'Grip', icon: '🛞' },
  { id: 'turbo', ar: 'التوربو', en: 'Turbo', icon: '🚀' },
];
export const MAX_LEVEL = 5;
/** Ticket cost of the next level (level is the current one, 0..4). */
export const upgradeCost = (level) => 40 + level * 20;

/** Tickets won at the finish by place (1st..6th). Every finish wins something. */
export const PLACE_TICKETS = [50, 40, 32, 26, 20, 15];
/** Stars by place: 3 for the winner, 2 for the podium, 1 for every other finish. */
export const placeStars = (place) => (place === 1 ? 3 : place <= 3 ? 2 : 1);

export const LAPS = 2;

export function emptySave() {
  return { v: 1, tickets: 0, upgrades: { engine: 0, grip: 0, turbo: 0 }, owned: ['raccoon'], selected: 'raccoon', unlocked: 1, best: {} };
}

/** Accepts whatever the host stored (maybe nothing, maybe damaged) and returns a valid save. */
export function normalizeSave(raw) {
  const s = emptySave();
  if (!raw || typeof raw !== 'object') return s;
  const n = (v, lo, hi, d) => (Number.isFinite(v) ? Math.max(lo, Math.min(hi, Math.floor(v))) : d);
  s.tickets = n(raw.tickets, 0, 999999, 0);
  if (raw.upgrades && typeof raw.upgrades === 'object') {
    for (const u of UPGRADES) s.upgrades[u.id] = n(raw.upgrades[u.id], 0, MAX_LEVEL, 0);
  }
  if (Array.isArray(raw.owned)) {
    const ids = new Set(RACERS.map((r) => r.id));
    s.owned = [...new Set(['raccoon', ...raw.owned.filter((id) => ids.has(id))])];
  }
  if (typeof raw.selected === 'string' && s.owned.includes(raw.selected)) s.selected = raw.selected;
  s.unlocked = n(raw.unlocked, 1, TRACK_COUNT, 1);
  if (raw.muted === true) s.muted = true;
  if (raw.best && typeof raw.best === 'object') {
    for (const [k, v] of Object.entries(raw.best)) if (Number.isFinite(v)) s.best[k] = n(v, 1, 6, 6);
  }
  return s;
}

/** Applies a finished race to the save. Returns what changed, for the results screen. */
export function applyResult(save, trackIndex, place, collected, easy) {
  const won = PLACE_TICKETS[place - 1] + collected;
  save.tickets += won;
  const id = TRACKS[trackIndex].id;
  save.best[id] = Math.min(save.best[id] ?? 6, place);
  let unlockedNext = false;
  // The next track opens with a podium finish; in easy mode (the youngest) any finish opens it.
  if ((place <= 3 || easy) && trackIndex + 1 < TRACK_COUNT && save.unlocked < trackIndex + 2) {
    save.unlocked = trackIndex + 2;
    unlockedNext = true;
  }
  return { won, stars: placeStars(place), unlockedNext };
}

export function buyUpgrade(save, id) {
  const lvl = save.upgrades[id];
  if (lvl >= MAX_LEVEL) return false;
  const cost = upgradeCost(lvl);
  if (save.tickets < cost) return false;
  save.tickets -= cost;
  save.upgrades[id] = lvl + 1;
  return true;
}

export function buyRacer(save, id) {
  const r = RACERS.find((x) => x.id === id);
  if (!r || save.owned.includes(id)) return false;
  if (save.tickets < r.price) return false;
  save.tickets -= r.price;
  save.owned.push(id);
  save.selected = id;
  return true;
}

// ---- Tracks --------------------------------------------------------------------------------------------------
// A track is a closed loop of control points (x, z in metres, y = height). Optional per point:
//   up: [x,y,z]  the road's up direction (loops lean the road around a circle)
// Features are placed by fraction of the lap (0..1): items, ticket lines, ramps, hazards, tunnels.

function loopPoints(start, dir, radius, shift) {
  // A vertical loop that starts at `start` heading `dir` (unit x,z) and drifts sideways by `shift` so the exit
  // passes beside the entry. Returns control points with the road's up pointing to the loop's centre.
  const pts = [];
  const side = [-dir[1], dir[0]];
  const steps = 10;
  for (let i = 1; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const f = Math.sin(a) * radius;
    const y = radius - Math.cos(a) * radius;
    const sd = (i / steps) * shift;
    const x = start[0] + dir[0] * f + side[0] * sd;
    const z = start[1] + dir[1] * f + side[1] * sd;
    const cx = start[0] + side[0] * sd;
    const cz = start[1] + side[1] * sd;
    // up points from the road to the loop centre (cx, radius, cz) along the loop plane
    const ux = cx - x;
    const uy = radius - y;
    const uz = cz - z;
    const l = Math.hypot(ux, uy, uz) || 1;
    pts.push({ p: [x, y, z], up: [ux / l, uy / l, uz / l] });
  }
  return pts;
}

export const TRACKS = [
  {
    id: 'pier',
    ar: 'ملاهي النيل',
    en: 'Nile Funfair',
    width: 13,
    difficulty: 0,
    points: [
      { p: [0, 0, 0] }, { p: [0, 0, 60] }, { p: [6, 0, 110] }, { p: [30, 2, 150] }, { p: [75, 3, 165] },
      { p: [120, 2, 150] }, { p: [140, 0, 110] }, { p: [135, 0, 70] }, { p: [110, 0, 40] }, { p: [118, 1, 0] },
      { p: [130, 2, -40] }, { p: [115, 1, -80] }, { p: [75, 0, -100] }, { p: [35, 0, -90] }, { p: [8, 0, -55] },
    ],
    items: [0.12, 0.42, 0.7],
    tickets: [[0.06, 0], [0.22, -0.5], [0.35, 0.45], [0.55, -0.4], [0.8, 0.4], [0.9, 0]],
    ramps: [0.52],
    hazards: [{ type: 'teacups', at: 0.3 }, { type: 'teacups', at: 0.76 }],
    tunnels: [],
    arches: [0.62],
  },
  {
    id: 'lanterns',
    ar: 'ملاهي الإسكندرية',
    en: 'Alexandria Pier',
    width: 12,
    difficulty: 1,
    points: [
      { p: [0, 0, 0] }, { p: [0, 0, 70] }, { p: [-20, 2, 120] }, { p: [-60, 5, 135] }, { p: [-95, 6, 110] },
      { p: [-100, 4, 70] }, { p: [-70, 2, 45] }, { p: [-55, 0, 10] }, { p: [-75, 0, -30] }, { p: [-110, 2, -55] },
      { p: [-100, 4, -100] }, { p: [-60, 3, -120] }, { p: [-20, 1, -100] }, { p: [-5, 0, -50] },
    ],
    items: [0.1, 0.36, 0.62, 0.85],
    tickets: [[0.05, 0], [0.18, 0.5], [0.3, -0.5], [0.47, 0], [0.58, 0.45], [0.74, -0.45], [0.92, 0.3]],
    ramps: [0.44, 0.9],
    hazards: [{ type: 'hammer', at: 0.25 }, { type: 'hammer', at: 0.68 }, { type: 'teacups', at: 0.8 }],
    tunnels: [[0.5, 0.6]],
    arches: [0.15],
  },
  {
    id: 'stars',
    ar: 'ليلة العيد',
    en: 'Eid Night',
    width: 12,
    difficulty: 2,
    points: [
      { p: [0, 0, 0] }, { p: [0, 0, 50] },
      ...loopPoints([0, 75], [0, 1], 16, 14),
      // the loop drifts to the left (-x), so the rest of the lap continues on that side
      { p: [-14, 0, 100] }, { p: [-20, 0, 140] }, { p: [-50, 4, 175] }, { p: [-95, 8, 170] }, { p: [-120, 8, 130] },
      { p: [-110, 5, 90] }, { p: [-130, 2, 50] }, { p: [-150, 0, 0] }, { p: [-130, 2, -50] }, { p: [-85, 4, -70] },
      { p: [-45, 2, -60] }, { p: [-10, 0, -40] },
    ],
    items: [0.08, 0.34, 0.58, 0.82],
    tickets: [[0.04, 0], [0.12, 0], [0.28, 0.5], [0.42, -0.4], [0.52, 0.4], [0.66, -0.5], [0.76, 0], [0.92, 0.45]],
    ramps: [0.48, 0.72],
    hazards: [{ type: 'boat', at: 0.31 }, { type: 'hammer', at: 0.55 }, { type: 'boat', at: 0.8 }, { type: 'teacups', at: 0.64 }],
    tunnels: [[0.36, 0.44], [0.86, 0.95]],
    arches: [0.25],
  },
];

// 2026-11-21: three more tracks, each one an existing track MIRRORED left-to-right with extra hazards (a new feel for the same family of places).
function mirrorTrack(src, id, ar, en, difficulty, extraHazards) {
  const flip = (v) => [-v[0], v[1], v[2]];
  return {
    ...src, id, ar, en, difficulty,
    points: src.points.map((q) => { const o = { ...q, p: flip(q.p) }; if (q.up) o.up = flip(q.up); return o; }),
    tickets: src.tickets.map(([a, b]) => [a, -b]),
    hazards: [...src.hazards, ...extraHazards],
  };
}
TRACKS.push(
  mirrorTrack(TRACKS[0], 'pier2', 'ملاهي باريس', 'Paris Fair', 1, [{ type: 'hammer', at: 0.18 }]),
  mirrorTrack(TRACKS[1], 'lanterns2', 'ملاهي السندباد', 'Sinbad Fair', 2, [{ type: 'teacups', at: 0.4 }]),
  mirrorTrack(TRACKS[2], 'stars2', 'ملاهي الثلج', 'Snow Fair', 3, [{ type: 'hammer', at: 0.18 }]),
);

// Certification Sweep A: tracks 4-6 began as exact left-right mirrors of tracks 1-3 — a child who
// learned one already knew the other, and the layout read as the same track. They are now authored
// variants: several corners moved by metres (point COUNTS unchanged, so the pinned identities and
// save behaviour hold), and their ramps/tunnels/arches/items/hazard placements re-authored so each
// drives differently from its source. Hazard counts are unchanged; hazard spots/types moved.
function varyTrack(t, moved, feats) {
  for (const [i, x, z] of moved) { t.points[i].p[0] = x; t.points[i].p[2] = z; }
  Object.assign(t, feats);
  return t;
}
varyTrack(TRACKS[3], // pier2 «Paris Fair»: wider north bend, tighter south return, a tunnel the pier never had
  [[3, -44, 158], [7, -122, 58], [11, -128, -66], [13, -24, -102]],
  {
    items: [0.18, 0.5, 0.82],
    ramps: [0.3, 0.78],
    hazards: [{ type: 'teacups', at: 0.22 }, { type: 'hammer', at: 0.55 }, { type: 'teacups', at: 0.84 }],
    tunnels: [[0.6, 0.68]],
    arches: [0.4],
  });
varyTrack(TRACKS[4], // lanterns2 «Sinbad Fair»: swung-out east loop (mirrored side), tunnel moved to the opening straight
  [[2, 34, 128], [5, 112, 62], [8, 88, -44], [11, 48, -128]],
  {
    items: [0.14, 0.44, 0.7, 0.9],
    ramps: [0.2, 0.66],
    hazards: [{ type: 'teacups', at: 0.18 }, { type: 'hammer', at: 0.47 }, { type: 'boat', at: 0.7 }, { type: 'teacups', at: 0.88 }],
    tunnels: [[0.14, 0.22]],
    arches: [0.5],
  });
varyTrack(TRACKS[5], // stars2 «Snow Fair»: only post-loop points move (indices 0-10 are the loop itself)
  [[12, 34, 152], [15, 132, 118], [18, 138, -28], [21, 58, -44]],
  {
    items: [0.14, 0.4, 0.66, 0.88],
    ramps: [0.6],
    hazards: [{ type: 'hammer', at: 0.18 }, { type: 'teacups', at: 0.38 }, { type: 'hammer', at: 0.55 }, { type: 'boat', at: 0.72 }, { type: 'teacups', at: 0.9 }],
    tunnels: [[0.55, 0.63]],
    arches: [0.45, 0.8],
  });

// Phase 2F: three NEW authored tracks (not mirrors), appended so existing ids/order never change.
// Each has its own layout identity: a pinched two-lobe "figure-eight" for the moulid crowds, a long
// riverside loop for Luxor, and a wide flowing beach loop for Matrouh. Only the hazard types the
// engine already supports (teacups / hammer / boat) are used.
TRACKS.push(
  {
    id: 'moulid',
    ar: 'ملاهي مولد القاهرة',
    en: 'Cairo Moulid Fair',
    width: 12,
    difficulty: 2,
    // Two lobes joined at a narrow waist near the start: the road pinches in, loops the east crowd
    // lobe, squeezes back through the waist and loops the west lobe — a figure-eight feel with no
    // self-crossing, so track space stays unambiguous.
    points: [
      { p: [0, 0, 0] }, { p: [10, 0, 35] }, { p: [35, 1, 70] }, { p: [70, 2, 85] }, { p: [100, 2, 70] },
      { p: [110, 1, 40] }, { p: [95, 0, 10] }, { p: [65, 0, -2] }, { p: [35, 0, 8] }, { p: [10, 0, 16] },
      { p: [-8, 0, -8] }, { p: [-30, 0, -32] }, { p: [-58, 1, -60] }, { p: [-88, 2, -72] }, { p: [-108, 1, -48] },
      { p: [-106, 0, -14] }, { p: [-82, 0, 6] }, { p: [-48, 0, 10] }, { p: [-22, 0, 4] },
    ],
    items: [0.08, 0.3, 0.52, 0.74, 0.9],
    tickets: [[0.05, 0], [0.16, 0.45], [0.28, -0.45], [0.42, 0], [0.58, -0.4], [0.7, 0.45], [0.84, 0], [0.95, -0.35]],
    ramps: [0.46, 0.86],
    hazards: [{ type: 'teacups', at: 0.18 }, { type: 'hammer', at: 0.4 }, { type: 'boat', at: 0.68 }, { type: 'teacups', at: 0.82 }],
    tunnels: [[0.54, 0.62]],
    arches: [0.25, 0.75],
  },
  {
    id: 'luxor',
    ar: 'ملاهي الأقصر',
    en: 'Luxor Fair',
    width: 13,
    difficulty: 3,
    // A long riverside loop: two long straights along the Nile joined by sweeping temple-end curves,
    // with a gentle climb over the middle of the lap.
    points: [
      { p: [0, 0, 0] }, { p: [0, 0, 80] }, { p: [5, 1, 150] }, { p: [20, 2, 210] }, { p: [45, 3, 245] },
      { p: [80, 3, 250] }, { p: [105, 2, 225] }, { p: [115, 1, 170] }, { p: [105, 0, 110] }, { p: [110, 0, 50] },
      { p: [125, 1, -10] }, { p: [110, 2, -60] }, { p: [70, 2, -85] }, { p: [30, 1, -80] }, { p: [5, 0, -45] },
    ],
    items: [0.07, 0.28, 0.5, 0.71, 0.9],
    tickets: [[0.04, 0], [0.14, -0.45], [0.24, 0.4], [0.38, 0], [0.55, -0.45], [0.66, 0.45], [0.8, 0], [0.93, -0.4]],
    ramps: [0.33, 0.66, 0.92],
    hazards: [{ type: 'hammer', at: 0.15 }, { type: 'boat', at: 0.42 }, { type: 'teacups', at: 0.58 }, { type: 'hammer', at: 0.78 }, { type: 'boat', at: 0.95 }],
    tunnels: [[0.2, 0.29], [0.82, 0.9]],
    arches: [0.12, 0.6],
  },
  {
    id: 'matrouh',
    ar: 'ملاهي شاطئ مطروح',
    en: 'Matrouh Beach Fair',
    width: 14,
    difficulty: 4,
    // The widest, most flowing loop: big sweepers around the bay, gentle heights, long sight-lines —
    // the fastest-feeling track, kept kind by its width.
    points: [
      { p: [0, 0, 0] }, { p: [-10, 0, 70] }, { p: [-35, 1, 130] }, { p: [-80, 2, 165] }, { p: [-130, 2, 160] },
      { p: [-165, 1, 115] }, { p: [-160, 0, 60] }, { p: [-120, 0, 25] }, { p: [-70, 1, -5] }, { p: [-40, 2, -50] },
      { p: [-30, 2, -105] }, { p: [-5, 1, -150] }, { p: [40, 0, -165] }, { p: [85, 0, -140] }, { p: [105, 1, -90] },
      { p: [95, 1, -40] }, { p: [55, 0, -15] }, { p: [20, 0, 5] },
    ],
    items: [0.06, 0.24, 0.44, 0.63, 0.82, 0.94],
    tickets: [[0.03, 0], [0.12, 0.45], [0.22, -0.4], [0.36, 0], [0.5, 0.45], [0.68, -0.45], [0.78, 0], [0.9, 0.4]],
    ramps: [0.3, 0.55, 0.8],
    hazards: [{ type: 'boat', at: 0.14 }, { type: 'hammer', at: 0.38 }, { type: 'teacups', at: 0.56 }, { type: 'boat', at: 0.74 }, { type: 'hammer', at: 0.9 }],
    tunnels: [[0.6, 0.68]],
    arches: [0.2, 0.66],
  },
);
export const TRACK_COUNT = TRACKS.length;
