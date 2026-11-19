// Pure logic of «تنظيف السجاد» (Rug Cleaning): no canvas, no DOM, so it runs under node tests.
// A rug is a grid of cells. Five layers live on the grid: dust, stain (coffee / mud), foam, wet and "dull" (the faded film
// that only the squeegee lifts). Each of the five tools changes some layers; cleanliness is read from the layers at the end.

export const STAGES = ['beat', 'foam', 'scrub', 'rinse', 'squeegee'];
/** upgrade id of the tool used in each stage, plus the water-saving nozzle */
export const STAGE_UPG = ['beat', 'foam', 'brush', 'jet', 'squeegee'];
export const UPGRADES = ['beat', 'foam', 'brush', 'jet', 'squeegee', 'nozzle'];
export const MAX_LEVEL = 3;
export const RADIUS_MULT = [1, 1.28, 1.58, 1.9];
export const NOZZLE_MULT = [1, 0.8, 0.62, 0.48];
export const READY = 0.8; // a stage is "done enough" at this progress
export const COLS = 144;
export const ROWS = 92;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const upgradeCost = (id, lvl) => Math.round(((id === 'nozzle' ? 90 : 60) * Math.pow(1.9, lvl)) / 5) * 5;

const NAMES = [
  ['سجادة الباب', 'Doorway Rug'], ['كليم مخطط', 'Striped Kilim'], ['سجادة الورود', 'Rose Rug'], ['سجادة الجدّة', "Grandma's Rug"],
  ['سجادة الصحراء', 'Desert Rug'], ['سجادة الفيروز', 'Turquoise Rug'], ['سجادة الحديقة', 'Garden Rug'], ['سجادة السوق', 'Bazaar Rug'],
  ['سجادة القصر', 'Palace Rug'], ['سجادة الليل', 'Midnight Rug'], ['سجادة الذهب', 'Golden Rug'], ['سجادة السلطان', "Sultan's Rug"],
];
const PATTERNS = ['stripes', 'kilim', 'floral', 'medallion', 'lattice', 'gul', 'floral', 'medallion', 'gul', 'lattice', 'rings', 'medallion'];
const PALETTE = [0, 1, 2, 3, 4, 5, 6, 0, 7, 3, 7, 6];
const COFFEE = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
const MUD = [0, 1, 0, 1, 2, 2, 2, 3, 3, 3, 4, 4];

const CLIENTS = [['روزا مارينو', 'Rosa Marino'], ['عم صالح', 'Mr. Saleh'], ['ست سلمى', 'Mrs. Salma'], ['ماريو', 'Mario'], ['ليلى', 'Layla'], ['يوسف', 'Youssef']];
const NOTES = [["دي سجادة ماما. من فضلك بالراحة على الأحمر.", "It was my mother's. Please be gentle with the reds."], ["الضيوف جايين بالليل، عايزها تلمع!", "Guests are coming tonight, make it shine!"], ["القطة شربت عليها قهوتي!", "The cat knocked my coffee onto it!"], ["لعب الأولاد بالطين عليها.", "The kids tracked mud all over it."]];
export const LEVELS = NAMES.map((n, i) => {
  const t = i / 11;
  return {
    id: i + 1, name: n, pattern: PATTERNS[i], palette: PALETTE[i], seed: 1000 + i * 97,
    dust: 0.45 + 0.4 * t, coffee: COFFEE[i], mud: MUD[i], strength: 0.72 + 0.28 * t,
    client: CLIENTS[i % CLIENTS.length], note: NOTES[i % NOTES.length], parTime: 110 + i * 8, parWater: 30 + i * 2, reward: Math.round(40 + 15 * i + i * i * 0.6),
  };
});

// ---------- save ----------

export function normalizeSave(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const int = (v, a, b, d) => { const x = Math.floor(Number(v)); return Number.isFinite(x) ? clamp(x, a, b) : d; };
  const stars = {};
  if (r.stars && typeof r.stars === 'object') for (const l of LEVELS) { const s = int(r.stars[l.id], 0, 3, 0); if (s) stars[l.id] = s; }
  const upg = {};
  for (const id of UPGRADES) upg[id] = int(r.upg && r.upg[id], 0, MAX_LEVEL, 0);
  let unlocked = int(r.unlocked, 1, LEVELS.length, 1);
  for (let i = 1; i < LEVELS.length; i++) if (stars[LEVELS[i - 1].id] && unlocked < i + 1) unlocked = i + 1; // finishing a rug opens the next
  return { coins: int(r.coins, 0, 999999, 0), unlocked, stars, upg, muted: !!r.muted, jobs: int(r.jobs, 0, 99999, 0) };
}

// ---------- scoring ----------

export const starsFor = (clean) => (clean >= 0.9 ? 3 : clean >= 0.75 ? 2 : clean >= 0.4 ? 1 : 0);

export function payout(def, clean, time, water) {
  const base = Math.round(def.reward * (0.3 + 0.7 * clean));
  const sf = clamp(1 - (time - def.parTime * 0.7) / def.parTime, 0, 1);
  const wf = clamp(1 - (water - def.parWater * 0.8) / def.parWater, 0, 1);
  const speed = Math.round(def.reward * 0.25 * sf * clean);
  const wat = Math.round(def.reward * 0.2 * wf * clean);
  return { base, speed, water: wat, total: base + speed + wat, stars: starsFor(clean) };
}

// ---------- gestures (pure so they can be tested) ----------

/** 0..1: how circular the recent path is (a scribble that cancels itself or a straight line scores ~0). pts = [{x,y}] */
export function circularity(pts) {
  let signed = 0; let abs = 0; let n = 0;
  for (let i = 2; i < pts.length; i++) {
    const ax = pts[i - 1].x - pts[i - 2].x; const ay = pts[i - 1].y - pts[i - 2].y;
    const bx = pts[i].x - pts[i - 1].x; const by = pts[i].y - pts[i - 1].y;
    const la = Math.hypot(ax, ay); const lb = Math.hypot(bx, by);
    if (la < 0.5 || lb < 0.5) continue;
    const ang = Math.atan2(ax * by - ay * bx, ax * bx + ay * by);
    signed += ang; abs += Math.abs(ang); n++;
  }
  if (n < 3 || abs < 1e-6) return 0;
  return clamp((Math.abs(signed) / abs) * Math.min(1, abs / 2.2), 0, 1);
}

/** 0..1: how straight the recent path is (1 = a ruler line). */
export function straightness(pts) {
  if (pts.length < 3) return 1;
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  if (len < 1e-6) return 1;
  const a = pts[0]; const b = pts[pts.length - 1];
  return clamp(Math.hypot(b.x - a.x, b.y - a.y) / len, 0, 1);
}

// ---------- noise ----------

function hash(ix, iy, seed) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed, 1442695041)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
function vnoise(x, y, seed) {
  const x0 = Math.floor(x); const y0 = Math.floor(y);
  const fx = x - x0; const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx); const sy = fy * fy * (3 - 2 * fy);
  const a = hash(x0, y0, seed); const b = hash(x0 + 1, y0, seed); const c = hash(x0, y0 + 1, seed); const d = hash(x0 + 1, y0 + 1, seed);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}
export function mulberry(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const sum = (a) => { let s = 0; for (let i = 0; i < a.length; i++) s += a[i]; return s; };

// ---------- the job (one rug being cleaned) ----------

export class Job {
  constructor(def, cols = COLS, rows = ROWS, upg = {}) {
    this.def = def; this.cols = cols; this.rows = rows;
    const n = cols * rows;
    this.n = n;
    this.sc = Math.min(cols, rows) / 72;
    this.upg = {}; for (const id of UPGRADES) this.upg[id] = clamp(Math.floor(upg[id] || 0), 0, MAX_LEVEL);
    this.dust = new Float32Array(n); this.stain = new Float32Array(n); this.kind = new Uint8Array(n);
    this.foam = new Float32Array(n); this.wet = new Float32Array(n); this.dull = new Float32Array(n).fill(1);
    this.scr = new Uint8Array(n); this.pile = new Uint8Array(n); this.noise = new Float32Array(n);
    this.time = 0; this.water = 0; this.hits = 0; this.strokeId = 0; this.stage = 0; this.ver = 1;
    this.foamStart = 1; this.wetStart = 1; this.foamCells0 = 1;
    this._generate();
    this.dust0 = sum(this.dust); this.stain0 = sum(this.stain);
  }

  _generate() {
    const { def, cols, rows, sc } = this;
    const rnd = mulberry(def.seed);
    const sd = def.seed & 0xffff;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = y * cols + x;
        const f = vnoise(x / 11, y / 11, sd) * 0.65 + vnoise(x / 4.5, y / 4.5, sd + 7) * 0.35;
        const ex = Math.min(x, cols - 1 - x) / cols; const ey = Math.min(y, rows - 1 - y) / rows;
        const edge = Math.max(0, 1 - Math.min(ex, ey) * 9) * 0.18; // dust gathers near the edges
        this.dust[i] = clamp(0.22 + def.dust * (0.45 + 1.1 * (f - 0.5)) + edge, 0, 1);
        this.noise[i] = hash(x, y, sd + 3);
      }
    }
    const margin = 10 * sc;
    for (let k = 0; k < def.coffee; k++) {
      const R = (5 + rnd() * 6) * sc;
      this._coffee(margin + R + rnd() * (cols - 2 * margin - 2 * R), margin + R + rnd() * (rows - 2 * margin - 2 * R), R, def.strength, rnd);
    }
    for (let k = 0; k < def.mud; k++) {
      const x = margin + 10 * sc + rnd() * (cols - 2 * margin - 20 * sc); const y = margin + 8 * sc + rnd() * (rows - 2 * margin - 16 * sc);
      const a = rnd() * Math.PI * 2; const L = (15 + rnd() * 4) * sc;
      // a short trail of two or three steps
      const steps = 2 + (rnd() < 0.5 ? 1 : 0);
      for (let s = 0; s < steps; s++) {
        const side = s % 2 ? 1 : -1;
        const px = x + Math.cos(a) * L * 1.15 * s + Math.cos(a + Math.PI / 2) * side * L * 0.22;
        const py = y + Math.sin(a) * L * 1.15 * s + Math.sin(a + Math.PI / 2) * side * L * 0.22;
        this._boot(px, py, a + (rnd() - 0.5) * 0.25, L, def.strength);
      }
    }
  }

  _put(i, v, kind) { if (v > this.stain[i]) { this.stain[i] = v; this.kind[i] = kind; } }

  _coffee(cx, cy, R, strength, rnd) {
    const p1 = rnd() * 6.28; const p2 = rnd() * 6.28;
    const box = Math.ceil(R * 1.6);
    for (let y = Math.max(0, Math.floor(cy - box)); y <= Math.min(this.rows - 1, Math.ceil(cy + box)); y++) {
      for (let x = Math.max(0, Math.floor(cx - box)); x <= Math.min(this.cols - 1, Math.ceil(cx + box)); x++) {
        const dx = x - cx; const dy = y - cy; const th = Math.atan2(dy, dx);
        const rad = R * (1 + 0.22 * Math.sin(3 * th + p1) + 0.12 * Math.sin(5 * th + p2));
        const d = Math.hypot(dx, dy) / rad;
        if (d > 1) continue;
        const ring = d > 0.82 ? 0.28 * ((d - 0.82) / 0.18) : 0; // darker rim, like a dried coffee ring
        this._put(y * this.cols + x, clamp((0.62 + ring + 0.2 * (1 - d)) * strength, 0, 1), 1);
      }
    }
    for (let k = 0; k < 5; k++) { // little splashes around
      const a = rnd() * 6.28; const dist = R * (1.15 + rnd() * 0.7); const r = (1 + rnd() * 1.4) * this.sc;
      const sx = cx + Math.cos(a) * dist; const sy = cy + Math.sin(a) * dist;
      for (let y = Math.floor(sy - r - 1); y <= Math.ceil(sy + r + 1); y++) for (let x = Math.floor(sx - r - 1); x <= Math.ceil(sx + r + 1); x++) {
        if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) continue;
        if (Math.hypot(x - sx, y - sy) <= r) this._put(y * this.cols + x, 0.7 * strength, 1);
      }
    }
  }

  /** a boot print: a fore-sole and a heel with chevron-ish tread lines, rotated by `a`, L cells long */
  _boot(cx, cy, a, L, strength) {
    const ca = Math.cos(a); const sa = Math.sin(a);
    const W = L * 0.42; const box = Math.ceil(L * 0.8);
    for (let y = Math.max(0, Math.floor(cy - box)); y <= Math.min(this.rows - 1, Math.ceil(cy + box)); y++) {
      for (let x = Math.max(0, Math.floor(cx - box)); x <= Math.min(this.cols - 1, Math.ceil(cx + box)); x++) {
        const dx = x - cx; const dy = y - cy;
        const u = dx * ca + dy * sa; const v = -dx * sa + dy * ca; // u along the foot, v across
        const fo = ((u - L * 0.2) / (L * 0.34)) ** 2 + (v / (W * 0.5)) ** 2; // fore-sole
        const he = ((u + L * 0.34) / (L * 0.16)) ** 2 + (v / (W * 0.4)) ** 2; // heel
        const inside = fo <= 1 ? 1 - fo : he <= 1 ? 1 - he : -1;
        if (inside < 0) continue;
        const tread = 0.62 + 0.38 * Math.cos((u + Math.abs(v) * 0.5) * 2.1); // lugs
        this._put(y * this.cols + x, clamp(strength * tread * (0.75 + 0.25 * Math.min(1, inside * 3)), 0, 1), 2);
      }
    }
  }

  // ----- tool radii (cells) -----
  radius(id) {
    const base = { beat: 8, foam: 6.5, brush: 6.5, jet: 5.5, squeegee: 15 }[id];
    return base * this.sc * RADIUS_MULT[this.upg[id]];
  }

  _disc(cx, cy, r, fn) {
    const x0 = Math.max(0, Math.floor(cx - r)); const x1 = Math.min(this.cols - 1, Math.ceil(cx + r));
    const y0 = Math.max(0, Math.floor(cy - r)); const y1 = Math.min(this.rows - 1, Math.ceil(cy + r));
    const rr = r * r;
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (d2 <= rr) fn(y * this.cols + x, 1 - d2 / rr);
    }
  }

  /** stamps along a segment, `spacing` cells apart (at least one) */
  _stamps(x0, y0, x1, y1, spacing, fn) {
    const len = Math.hypot(x1 - x0, y1 - y0);
    const n = Math.max(1, Math.ceil(len / spacing));
    for (let k = 1; k <= n; k++) { const t = k / n; fn(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t); }
  }

  // ----- the five tools -----

  /** a carpet-beater hit: knocks dust loose. returns dust removed */
  beat(cx, cy) {
    const r = this.radius('beat'); let removed = 0;
    this.hits++;
    this._disc(cx, cy, r, (i, fo) => {
      const k = Math.min(this.dust[i], 0.65 * Math.pow(fo, 0.8));
      if (k > 0) { this.dust[i] -= k; removed += k; }
      this.dull[i] = Math.max(0.7, this.dull[i] - 0.1 * fo);
    });
    this.ver++;
    return removed;
  }

  /** spray foam along a drag. returns foam added */
  spray(x0, y0, x1, y1) {
    const r = this.radius('foam'); let added = 0;
    this._stamps(x0, y0, x1, y1, r * 0.5, (cx, cy) => this._disc(cx, cy, r, (i, fo) => {
      const k = Math.min(1 - this.foam[i], 0.45 * (0.4 + 0.6 * fo));
      this.foam[i] += k; added += k;
    }));
    this.ver++;
    return added;
  }

  /** scrub with the rotary brush; eff 0..1 is how circular the motion is. returns stain+dust removed */
  scrub(x0, y0, x1, y1, eff) {
    const r = this.radius('brush'); let removed = 0; let dry = 0;
    this._stamps(x0, y0, x1, y1, r * 0.35, (cx, cy) => this._disc(cx, cy, r, (i, fo) => {
      const f = this.foam[i];
      if (f > 0.15) {
        if (this.stain[i] > 0) {
          const hard = this.kind[i] === 2 ? 0.8 : 1;
          const k = Math.min(this.stain[i], (0.18 * eff * fo * Math.min(1, f * 1.5)) / hard);
          this.stain[i] -= k; removed += k;
        }
        const dk = Math.min(this.dust[i], 0.3 * eff * fo); this.dust[i] -= dk; removed += dk * 0.3;
        this.dull[i] = Math.max(0.4, this.dull[i] - 0.1 * eff * fo);
        this.foam[i] = Math.min(1, f + 0.02 * eff);
        if (eff >= 0.3 && fo > 0.25) this.scr[i] = 1;
      } else if (this.stain[i] > 0) {
        this.stain[i] = Math.max(0, this.stain[i] - 0.02 * eff * fo); dry += 0.02;
      }
    }));
    this.ver++;
    return { removed, dry };
  }

  /** rinse with the jet for `dt` seconds along a path: removes foam, wets the rug, costs water. returns foam removed */
  jet(x0, y0, x1, y1, dt = 0) {
    const r = this.radius('jet'); let removed = 0;
    const cost = 0.02 * r * NOZZLE_MULT[this.upg.nozzle];
    const stamps = Math.hypot(x1 - x0, y1 - y0) / (r * 0.5);
    this._stamps(x0, y0, x1, y1, r * 0.5, (cx, cy) => {
      this._disc(cx, cy, r, (i, fo) => {
        const k = Math.min(this.foam[i], 0.5 * fo + 0.05);
        if (k > 0) { this.foam[i] -= k; removed += k; }
        this.wet[i] = Math.min(1, this.wet[i] + 0.6 * fo + 0.1);
        const dk = Math.min(this.dust[i], 0.12 * fo); this.dust[i] -= dk;
      });
    });
    // standing still still runs the tap: at least 12 stamps' worth of water per second
    this.water += Math.max(stamps, dt * 12) * cost;
    this.ver++;
    return removed;
  }

  /** push water off with the squeegee along a stroke; eff 0..1 = how straight the stroke is. returns wet removed */
  squeegee(x0, y0, x1, y1, eff) {
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (len < 0.01) return 0;
    const dx = (x1 - x0) / len; const dy = (y1 - y0) / len; const nx = -dy; const ny = dx;
    const hw = this.radius('squeegee'); let removed = 0;
    const id = this.strokeId;
    for (let s = 1; s <= Math.max(1, Math.ceil(len)); s++) {
      const t = Math.min(1, s / Math.max(1, Math.ceil(len)));
      const cx = x0 + (x1 - x0) * t; const cy = y0 + (y1 - y0) * t;
      for (let k = -hw; k <= hw; k += 0.8) {
        const x = Math.round(cx + nx * k); const y = Math.round(cy + ny * k);
        if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) continue;
        const i = y * this.cols + x;
        const w = this.wet[i];
        if (w > 0.02) {
          const rm = w * (0.35 + 0.6 * eff);
          this.wet[i] -= rm; removed += rm;
          this.dull[i] = this.foam[i] < 0.35 ? 0 : this.dull[i] * 0.5;
          this.pile[i] = 1 + (id & 1);
          this.foam[i] *= 0.7;
        }
      }
    }
    this.ver++;
    return removed;
  }

  newStroke() { this.strokeId++; }

  // ----- stages -----

  beginStage(i) {
    this.stage = i;
    // tools can be picked in any order: a baseline only ever grows, so a tool's ring never jumps backwards
    if (i === 2) { this.foamCells0 = Math.max(this.foamCells0 || 1, this._count(this.foam, 0.3)); }
    if (i === 3) this.foamStart = Math.max(this.foamStart || 1, sum(this.foam));
    if (i === 4) this.wetStart = Math.max(this.wetStart || 1, sum(this.wet));
  }

  _count(a, th) { let c = 0; for (let i = 0; i < a.length; i++) if (a[i] >= th) c++; return c; }

  progress(stage = this.stage) {
    switch (stage) {
      case 0: return this.dust0 > 0 ? clamp(1 - sum(this.dust) / this.dust0, 0, 1) : 1;
      case 1: return clamp(this._count(this.foam, 0.3) / this.n / 0.85, 0, 1);
      case 2: {
        const sf = this.stain0 > 0 ? 1 - sum(this.stain) / this.stain0 : 1;
        let sc = 0; for (let i = 0; i < this.n; i++) sc += this.scr[i];
        return clamp(0.6 * sf + 0.4 * Math.min(1, sc / this.foamCells0), 0, 1);
      }
      case 3: return clamp(1 - sum(this.foam) / this.foamStart, 0, 1);
      default: return clamp(1 - sum(this.wet) / this.wetStart, 0, 1);
    }
  }

  ready(stage = this.stage) { return this.progress(stage) >= READY; }

  /** 0..1 overall cleanliness from the layers: dust, stains, the dull film, leftover foam and water */
  cleanliness() {
    const n = this.n;
    const dustF = this.dust0 > 0 ? sum(this.dust) / this.dust0 : 0;
    const stainF = this.stain0 > 0 ? sum(this.stain) / this.stain0 : 0;
    const dullF = sum(this.dull) / n; const foamF = Math.min(1, sum(this.foam) / n); const wetF = Math.min(1, sum(this.wet) / n);
    return clamp(1 - (0.3 * dustF + 0.4 * stainF + 0.3 * dullF + 0.1 * foamF + 0.08 * wetF), 0, 1);
  }
}
