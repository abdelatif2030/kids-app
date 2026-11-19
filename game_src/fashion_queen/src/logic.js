// Fashion Queen: pure game logic (no DOM, no canvas): save normalisation, economy, events, world objectives, daily tasks,
// achievements, fashion score, pets, rooms. Everything here is covered by test/sim.test.js.
import { ITEMS, SLOTS, THEMES, WORLDS, ACHIEVEMENTS, DAILY, HAIRS, PETS, ROOMS, WALLS, FLOORS, HAIR_COLORS, SKINS, PET_OUTFITS, PET_BEDS } from './data.js';

export const EVENT_KEYS = ['equip', 'buy', 'fav', 'salon', 'makeup', 'petcare', 'petunlock', 'place', 'room', 'runway', 'runwayStars', 'daily', 'achieve', 'coins'];
export const ACCESSORY_SLOTS = ['bag', 'neck', 'ears', 'wrist', 'head', 'face'];
export const MAX_FAVS = 12;
export const FREE_HAIRS = 3;
export const GRID = { cols: 8, rows: 5 };
export const FURN_COLORS = [null, '#ff6aa8', '#a86aff', '#4a8aff', '#5ae8b8', '#ffd23a', '#ff8a3a'];
export const START_COINS = 250;
export const START_DIA = 5;

const byId = new Map(ITEMS.map((i) => [i.id, i]));
export const itemById = (id) => byId.get(id);
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const num = (v, d, a = 0, b = 1e9) => (typeof v === 'number' && Number.isFinite(v) ? clamp(Math.floor(v), a, b) : d);
const pickIn = (v, list, d) => (list.includes(v) ? v : d);

// ---- save -----------------------------------------------------------------------------------------------------------

export function defaultLook() {
  return { skin: SKINS[0], hairStyle: 'long', hairColor: HAIR_COLORS[0], eye: '#4a2a1a', lips: null, blush: null, shadow: null, lash: 'natural', nails: null, outfit: { dress: 'dress_gown_rose', shoes: 'shoes_heels_white' } };
}

export function cleanLook(raw) {
  const d = defaultLook();
  if (!raw || typeof raw !== 'object') return d;
  const col = (v, dv) => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v) ? v : dv);
  const out = {
    skin: col(raw.skin, d.skin), hairStyle: pickIn(raw.hairStyle, HAIRS, d.hairStyle), hairColor: col(raw.hairColor, d.hairColor), eye: col(raw.eye, d.eye),
    lips: col(raw.lips, null), blush: col(raw.blush, null), shadow: col(raw.shadow, null), lash: pickIn(raw.lash, ['natural', 'long', 'wing', 'glam'], 'natural'), nails: col(raw.nails, null), outfit: {},
  };
  const o = raw.outfit && typeof raw.outfit === 'object' ? raw.outfit : d.outfit;
  for (const slot of SLOTS) { const it = byId.get(o[slot]); if (it && it.slot === slot) out.outfit[slot] = it.id; }
  if (out.outfit.dress) { delete out.outfit.top; delete out.outfit.bottom; }
  return out;
}

export function newPet() { return { hunger: 80, clean: 80, fur: 80, fun: 80, outfit: 'none', bed: 0 }; }
export function newRoom() { return { wall: 0, floor: 0, items: [], saved: false, dirty: false }; }

export function normalizeSave(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const s = {
    v: 1, coins: num(r.coins, START_COINS), dia: num(r.dia, START_DIA), stars: num(r.stars, 0),
    music: typeof r.music === 'number' ? clamp(r.music, 0, 1) : 0.7, sfx: typeof r.sfx === 'number' ? clamp(r.sfx, 0, 1) : 0.8, muted: !!r.muted,
    lang: r.lang === 'en' || r.lang === 'ar' ? r.lang : null,
    own: {}, look: cleanLook(r.look), favs: [], events: {}, levels: {}, runway: {}, ach: {}, pets: {}, activePet: 'puppy', petsT: num(r.petsT, 0, 0, 1e15), rooms: {}, room: 'bedroom',
    daily: { day: '', base: {}, pick: [], claimed: {}, chest: false }, tutorial: !!r.tutorial,
  };
  if (r.own && typeof r.own === 'object') for (const k of Object.keys(r.own)) if (r.own[k] && priceOf(...k.split(/:(.*)/s).slice(0, 2))) s.own[k] = 1;
  for (const k of EVENT_KEYS) s.events[k] = num(r.events && r.events[k], 0);
  for (const w of WORLDS) s.levels[w.id] = num(r.levels && r.levels[w.id], 0, 0, w.levels.length);
  if (r.runway && typeof r.runway === 'object') for (const t of THEMES) s.runway[t.id] = num(r.runway[t.id], 0, 0, 3);
  if (r.ach && typeof r.ach === 'object') for (const a of ACHIEVEMENTS) if (r.ach[a.id]) s.ach[a.id] = 1;
  if (Array.isArray(r.favs)) for (const f of r.favs.slice(0, MAX_FAVS)) s.favs.push(cleanLook(f));
  for (const p of PETS) {
    const rp = r.pets && r.pets[p.id];
    const np = newPet();
    if (rp && typeof rp === 'object') { for (const k of ['hunger', 'clean', 'fur', 'fun']) np[k] = num(rp[k], np[k], 0, 100); np.outfit = pickIn(rp.outfit, PET_OUTFITS, 'none'); np.bed = num(rp.bed, 0, 0, PET_BEDS.length - 1); }
    s.pets[p.id] = np;
  }
  if (PETS.some((p) => p.id === r.activePet)) s.activePet = r.activePet;
  for (const ro of ROOMS) {
    const rr = r.rooms && r.rooms[ro.id];
    const nr = newRoom();
    if (rr && typeof rr === 'object') {
      nr.wall = num(rr.wall, 0, 0, WALLS.length - 1); nr.floor = num(rr.floor, 0, 0, FLOORS.length - 1); nr.saved = !!rr.saved;
      if (Array.isArray(rr.items)) for (const it of rr.items.slice(0, GRID.cols * GRID.rows)) {
        if (!it || typeof it.e !== 'string' || it.e.length > 8 || !ro.furn.includes(it.e)) continue;
        const x = it.x; const y = it.y;
        if (!inside(x, y) || nr.items.some((q) => q.x === x && q.y === y)) continue;
        nr.items.push({ x, y, e: it.e, c: FURN_COLORS.includes(it.c) ? it.c : null, f: !!it.f });
      }
    }
    s.rooms[ro.id] = nr;
  }
  if (ROOMS.some((q) => q.id === r.room)) s.room = r.room;
  const d = r.daily;
  if (d && typeof d === 'object') {
    s.daily.day = typeof d.day === 'string' ? d.day.slice(0, 10) : '';
    for (const k of EVENT_KEYS) s.daily.base[k] = num(d.base && d.base[k], 0);
    s.daily.pick = Array.isArray(d.pick) ? d.pick.filter((i) => Number.isInteger(i) && i >= 0 && i < DAILY.length).slice(0, 3) : [];
    if (d.claimed && typeof d.claimed === 'object') for (const k of Object.keys(d.claimed)) if (d.claimed[k]) s.daily.claimed[k] = 1;
    s.daily.chest = !!d.chest;
  }
  return s;
}

// ---- prices and ownership ---------------------------------------------------------------------------------------------

export const decoIds = () => {
  const out = [];
  WALLS.forEach((_, i) => out.push(`w:${i}`));
  FLOORS.forEach((_, i) => out.push(`f:${i}`));
  ROOMS.forEach((r) => r.furn.forEach((_, i) => out.push(`m:${r.id}:${i}`)));
  return out;
};

export function priceOf(kind, id) {
  if (kind === 'item') { const it = byId.get(id); return it ? { coins: it.price, dia: it.diamonds } : null; }
  if (kind === 'hair') { const i = HAIRS.indexOf(id); if (i < 0) return null; return { coins: i < FREE_HAIRS ? 0 : 60 + (i - FREE_HAIRS) * 20, dia: 0 }; }
  if (kind === 'pet') { const p = PETS.find((q) => q.id === id); return p ? { coins: p.cost, dia: p.dia } : null; }
  if (kind === 'deco') {
    const [t, a, b] = String(id).split(':');
    if (t === 'w') { const i = Number(a); return Number.isInteger(i) && i >= 0 && i < WALLS.length ? { coins: i < 2 ? 0 : 40 + (i - 2) * 15, dia: 0 } : null; }
    if (t === 'f') { const i = Number(a); return Number.isInteger(i) && i >= 0 && i < FLOORS.length ? { coins: i < 2 ? 0 : 40 + (i - 2) * 15, dia: 0 } : null; }
    if (t === 'm') { const ro = ROOMS.find((q) => q.id === a); const i = Number(b); return ro && Number.isInteger(i) && i >= 0 && i < ro.furn.length ? { coins: i < 5 ? 0 : 30 + (i - 5) * 10, dia: 0 } : null; }
  }
  return null;
}

export function isOwned(save, kind, id) {
  const p = priceOf(kind, id);
  return !!p && ((p.coins === 0 && p.dia === 0) || !!save.own[`${kind}:${id}`]);
}

export const canAfford = (save, p) => !!p && save.coins >= p.coins && save.dia >= p.dia;

export function spend(save, p) {
  if (!canAfford(save, p)) return false;
  save.coins -= p.coins; save.dia -= p.dia;
  return true;
}

/** Add rewards; coins also count toward the "coins earned" objective. */
export function earn(save, r) {
  const c = Math.max(0, Math.floor(r.coins || 0)); const d = Math.max(0, Math.floor(r.dia || 0)); const s = Math.max(0, Math.floor(r.stars || 0));
  save.coins = clamp(save.coins + c, 0, 99999999); save.dia = clamp(save.dia + d, 0, 999999); save.stars = clamp(save.stars + s, 0, 99999);
  save.events.coins += c;
}

/** Count something the player did. runwayStars is the best single show (so "3 stars in a show" means one show). */
export function addEvent(save, k, n = 1) {
  if (!(k in save.events)) return 0;
  if (k === 'runwayStars') save.events[k] = Math.max(save.events[k], n);
  else save.events[k] += n;
  return save.events[k];
}

export function buy(save, kind, id) {
  const p = priceOf(kind, id);
  if (!p) return { ok: false, reason: 'unknown' };
  if (isOwned(save, kind, id)) return { ok: false, reason: 'owned' };
  if (!spend(save, p)) return { ok: false, reason: 'poor' };
  save.own[`${kind}:${id}`] = 1;
  if (kind === 'pet') addEvent(save, 'petunlock'); else addEvent(save, 'buy');
  return { ok: true };
}

// ---- outfit -----------------------------------------------------------------------------------------------------------

/** Wear (or take off) an item; a dress replaces top and bottom and the other way round. Returns 'on' | 'off'. */
export function toggleItem(look, id) {
  const it = byId.get(id);
  if (!it) return null;
  if (look.outfit[it.slot] === id) { delete look.outfit[it.slot]; return 'off'; }
  look.outfit[it.slot] = id;
  if (it.slot === 'dress') { delete look.outfit.top; delete look.outfit.bottom; }
  if (it.slot === 'top' || it.slot === 'bottom') delete look.outfit.dress;
  return 'on';
}

export function saveFav(save, look) {
  if (save.favs.length >= MAX_FAVS) return false;
  save.favs.push(cleanLook(JSON.parse(JSON.stringify(look))));
  addEvent(save, 'fav');
  return true;
}
export function loadFav(save, i) {
  const f = save.favs[i];
  if (!f) return false;
  const c = cleanLook(JSON.parse(JSON.stringify(f)));
  // owned only: items that are no longer available are skipped
  for (const slot of Object.keys(c.outfit)) if (!isOwned(save, 'item', c.outfit[slot])) delete c.outfit[slot];
  if (!isOwned(save, 'hair', c.hairStyle)) c.hairStyle = save.look.hairStyle;
  save.look = c;
  return true;
}
export function deleteFav(save, i) { if (i >= 0 && i < save.favs.length) { save.favs.splice(i, 1); return true; } return false; }

// ---- fashion score ----------------------------------------------------------------------------------------------------

/** Score 0..100 for a look on a runway theme; stars 1..3. */
export function scoreOutfit(look, theme) {
  const o = look.outfit || {};
  const items = {};
  for (const s of SLOTS) if (o[s] && byId.get(o[s])) items[s] = byId.get(o[s]);
  const need = new Set(theme.need);
  const match = (it) => it.tags.some((t) => need.has(t));
  // basics: a dress, or top and bottom, plus shoes (max 30)
  let basics = 0;
  if (items.dress || (items.top && items.bottom)) basics += 20; else if (items.top || items.bottom) basics += 8;
  if (items.shoes) basics += 10;
  // style match (max 50): main pieces weigh double
  const main = ['dress', 'top', 'bottom', 'shoes'].filter((s) => items[s]);
  let w = 0; let m = 0;
  for (const s of main) { w += 2; if (match(items[s])) m += 2; }
  const accs = ACCESSORY_SLOTS.filter((s) => items[s]);
  for (const s of accs) { w += 1; if (match(items[s])) m += 1; }
  const style = w ? Math.round((50 * m) / w) : 0;
  // accessories (max 10): matching ones count 2.5, others 1
  let acc = 0;
  for (const s of accs) acc += match(items[s]) ? 2.5 : 1;
  acc = Math.min(10, acc);
  // makeup (max 10)
  const makeup = (look.lips ? 3 : 0) + (look.blush ? 2 : 0) + (look.shadow ? 3 : 0) + (look.lash && look.lash !== 'natural' ? 2 : 0);
  const total = clamp(Math.round(basics + style + acc + makeup), 0, 100);
  const stars = total >= 72 ? 3 : total >= 45 ? 2 : 1;
  const matched = Object.values(items).filter(match).length;
  return { total, stars, parts: { basics, style, acc, makeup }, matched, count: Object.keys(items).length };
}

/** Rewards for a show; stars to the global total only when this beats the best for that theme. */
export function runwayReward(save, themeId, stars) {
  const best = save.runway[themeId] || 0;
  const newStars = Math.max(0, stars - best);
  return { coins: 20 + stars * 25, dia: stars === 3 ? 1 : 0, stars: newStars };
}
export function finishRunway(save, themeId, stars) {
  const r = runwayReward(save, themeId, stars);
  earn(save, r);
  save.runway[themeId] = Math.max(save.runway[themeId] || 0, stars);
  addEvent(save, 'runway');
  addEvent(save, 'runwayStars', stars);
  return r;
}

// ---- worlds, daily tasks, achievements -------------------------------------------------------------------------------

export function worldState(save, w) {
  const unlocked = save.stars >= w.need;
  const idx = save.levels[w.id] || 0;
  const done = idx >= w.levels.length;
  const cur = done ? null : w.levels[idx];
  const have = cur ? save.events[cur.k] : 0;
  return { unlocked, idx, done, cur, have: cur ? Math.min(have, cur.n) : 0, ready: !!cur && have >= cur.n, last: idx === w.levels.length - 1 };
}

export function levelRewards(w, idx) {
  const wi = WORLDS.indexOf(w);
  const last = idx === w.levels.length - 1;
  return { level: { coins: 30 + idx * 20, stars: 1 + (last ? 1 : 0) }, chest: last ? { coins: 150 + wi * 50, dia: 2 } : null };
}

export function claimLevel(save, wid) {
  const w = WORLDS.find((q) => q.id === wid);
  if (!w) return { ok: false };
  const st = worldState(save, w);
  if (!st.unlocked || st.done || !st.ready) return { ok: false };
  const rw = levelRewards(w, st.idx);
  earn(save, rw.level);
  if (rw.chest) earn(save, rw.chest);
  save.levels[w.id] = st.idx + 1;
  return { ok: true, level: rw.level, chest: rw.chest };
}

export function dayKey(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
export function dayNumber(key) { const [y, m, d] = key.split('-').map(Number); return Math.floor(Date.UTC(y, m - 1, d) / 86400000); }

/** Start a new day of tasks when the date changed. Returns true when it reset. */
export function ensureDaily(save, key = dayKey()) {
  if (save.daily.day === key && save.daily.pick.length) return false;
  const n = dayNumber(key);
  save.daily = { day: key, base: { ...save.events }, pick: [0, 1, 2].map((i) => (n + i * 2) % DAILY.length), claimed: {}, chest: false };
  return true;
}
export const dailyProgress = (save, idx) => { const t = DAILY[idx]; return Math.max(0, save.events[t.k] - (save.daily.base[t.k] || 0)); };
export const dailyReady = (save, idx) => dailyProgress(save, idx) >= DAILY[idx].n && !save.daily.claimed[idx];
export function claimDaily(save, idx) {
  if (!save.daily.pick.includes(idx) || !dailyReady(save, idx)) return null;
  const t = DAILY[idx];
  save.daily.claimed[idx] = 1;
  earn(save, t.rw);
  addEvent(save, 'daily');
  return t.rw;
}
export const dailyClaimedCount = (save) => Object.keys(save.daily.claimed).length;
export const CHEST_REWARD = { coins: 60, dia: 1 };
export function claimDailyChest(save) {
  if (save.daily.chest || dailyClaimedCount(save) < save.daily.pick.length) return null;
  save.daily.chest = true;
  earn(save, CHEST_REWARD);
  return CHEST_REWARD;
}

export const achReady = (save, a) => !save.ach[a.id] && save.events[a.k] >= a.n;
export function claimAch(save, id) {
  const a = ACHIEVEMENTS.find((q) => q.id === id);
  if (!a || !achReady(save, a)) return null;
  save.ach[a.id] = 1;
  earn(save, a.rw);
  addEvent(save, 'achieve');
  return a.rw;
}
/** How many things are waiting to be collected (for the badge on the missions button). */
export function claimableCount(save) {
  let n = 0;
  for (const i of save.daily.pick) if (dailyReady(save, i)) n++;
  if (!save.daily.chest && save.daily.pick.length && dailyClaimedCount(save) >= save.daily.pick.length) n++;
  for (const a of ACHIEVEMENTS) if (achReady(save, a)) n++;
  return n;
}
export function levelsReady(save) { return WORLDS.filter((w) => { const s = worldState(save, w); return s.unlocked && s.ready; }).length; }

// ---- pets -------------------------------------------------------------------------------------------------------------

export const PET_RATES = { hunger: 1 / 40, clean: 1 / 70, fur: 1 / 90, fun: 1 / 60 };
export const PET_MIN = 8;
export function decayPet(p, dt) { for (const k of Object.keys(PET_RATES)) p[k] = clamp(p[k] - dt * PET_RATES[k], PET_MIN, 100); }
export function petMood(p) { const lo = Math.min(p.hunger, p.clean, p.fur, p.fun); return lo < 25 ? 'sad' : (p.hunger + p.clean + p.fur + p.fun) / 4 > 70 ? 'happy' : 'ok'; }
export function feedPet(p, amount = 30) { if (p.hunger >= 95) return false; p.hunger = clamp(p.hunger + amount, 0, 100); return true; }
export function carePet(p, stat, amount) { p[stat] = clamp(p[stat] + amount, 0, 100); }
/** Catch up on the time the game was closed (at most 20 minutes, so a pet is never left in a bad state). */
export function catchUpPets(save, nowMs) {
  if (save.petsT) { const dt = clamp((nowMs - save.petsT) / 1000, 0, 1200); for (const id of Object.keys(save.pets)) decayPet(save.pets[id], dt); }
  save.petsT = nowMs;
}

// ---- rooms ------------------------------------------------------------------------------------------------------------

const inside = (x, y) => Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0 && x < GRID.cols && y < GRID.rows;
export const furnAt = (room, x, y) => room.items.findIndex((q) => q.x === x && q.y === y);
export function placeFurn(room, x, y, e) {
  if (!inside(x, y) || furnAt(room, x, y) >= 0) return false;
  room.items.push({ x, y, e, c: null, f: false }); room.dirty = true;
  return true;
}
export function moveFurn(room, i, x, y) {
  if (!room.items[i] || !inside(x, y) || furnAt(room, x, y) >= 0) return false;
  room.items[i].x = x; room.items[i].y = y; room.dirty = true;
  return true;
}
export function flipFurn(room, i) { if (!room.items[i]) return false; room.items[i].f = !room.items[i].f; room.dirty = true; return true; }
export function recolorFurn(room, i) {
  if (!room.items[i]) return false;
  const k = FURN_COLORS.indexOf(room.items[i].c);
  room.items[i].c = FURN_COLORS[(k + 1) % FURN_COLORS.length]; room.dirty = true;
  return true;
}
export function removeFurn(room, i) { if (!room.items[i]) return false; room.items.splice(i, 1); room.dirty = true; return true; }
/** Save the design: counts a room event only when something changed since the last save. */
export function saveRoom(save, roomId) {
  const r = save.rooms[roomId];
  if (!r || (!r.dirty && r.saved)) return false;
  r.saved = true; r.dirty = false;
  addEvent(save, 'room');
  return true;
}
