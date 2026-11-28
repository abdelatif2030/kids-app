// Saved progress: levels opened, best relics and coins per level, total coins, sound on/off. Nothing is ever taken away.
import { LEVELS } from './levels.js';
import { DEFAULT_LOOK, HEROES, ITEM, lookOf } from './shop.js';

export function emptySave() {
  return { v: 1, unlocked: 1, coins: 0, best: {}, album: [], hero: 'girl', owned: [], looks: { boy: { ...DEFAULT_LOOK.boy }, girl: { ...DEFAULT_LOOK.girl } } };
}

/** The relic album: a level's named relic is earned by finding all 3 jade relics hidden in that map
 *  (in any single run — `best[id].relics` already keeps the best run's count). Exploration joy only:
 *  a relic is never needed to finish a map or open the next one. */
export function albumOf(best, rawAlbum) {
  const have = new Set(Array.isArray(rawAlbum) ? rawAlbum.filter((id) => typeof id === 'string') : []);
  return LEVELS.filter((l) => have.has(l.id) || (best[l.id]?.relics ?? 0) >= 3).map((l) => l.id);
}

export function normalizeSave(raw) {
  const s = emptySave();
  if (!raw || typeof raw !== 'object') return s;
  const n = (v, lo, hi, d) => (Number.isFinite(v) ? Math.max(lo, Math.min(hi, Math.floor(v))) : d);
  s.unlocked = n(raw.unlocked, 1, LEVELS.length, 1);
  s.coins = n(raw.coins, 0, 9999999, 0);
  if (raw.best && typeof raw.best === 'object') {
    for (const l of LEVELS) {
      const b = raw.best[l.id];
      if (b && typeof b === 'object') s.best[l.id] = { relics: n(b.relics, 0, 3, 0), coins: n(b.coins, 0, 99999, 0), done: !!b.done };
    }
  }
  s.album = albumOf(s.best, raw.album);
  if (raw.muted === true) s.muted = true;
  if (raw.hero && HEROES[raw.hero]) s.hero = raw.hero;
  if (Array.isArray(raw.owned)) s.owned = [...new Set(raw.owned.filter((id) => typeof id === 'string' && ITEM[id]))];
  if (raw.looks && typeof raw.looks === 'object') {
    for (const h of Object.keys(HEROES)) s.looks[h] = { ...s.looks[h], ...(raw.looks[h] && typeof raw.looks[h] === 'object' ? raw.looks[h] : {}) };
  }
  // anything not owned (or unknown) goes back to the free default
  for (const h of Object.keys(HEROES)) s.looks[h] = lookOf(s, h);
  return s;
}

/** Records a finished (or lost) level. Coins are always kept; a won level opens the next. */
export function applyLevel(save, index, result) {
  const id = LEVELS[index].id;
  const total = result.coins + (result.won ? result.bonus : 0);
  save.coins += total;
  const prev = save.best[id] ?? { relics: 0, coins: 0, done: false };
  save.best[id] = { relics: Math.max(prev.relics, result.relics), coins: Math.max(prev.coins, total), done: prev.done || !!result.won };
  if (!Array.isArray(save.album)) save.album = [];
  let albumNew = false;
  if (save.best[id].relics >= 3 && !save.album.includes(id)) {
    save.album.push(id);
    albumNew = true;
  }
  let unlockedNext = false;
  if (result.won && index + 1 < LEVELS.length && save.unlocked < index + 2) {
    save.unlocked = index + 2;
    unlockedNext = true;
  }
  return { total, unlockedNext, albumNew };
}
