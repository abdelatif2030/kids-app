import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import * as L from '../src/logic.js';
import { ITEMS, SLOTS, THEMES, WORLDS, ACHIEVEMENTS, DAILY, PETS, ROOMS } from '../src/data.js';
import { S } from '../src/i18n.js';

const fresh = () => L.normalizeSave(null);

test('data sizes: 100+ items, 8 themes, 7 pets, 6 rooms, 6 worlds', () => {
  assert.ok(ITEMS.length >= 100);
  assert.equal(THEMES.length, 8); assert.equal(PETS.length, 7); assert.equal(ROOMS.length, 6); assert.equal(WORLDS.length, 6);
  assert.ok(SLOTS.every((s) => ITEMS.some((i) => i.slot === s)));
});

test('save normalisation survives garbage and keeps valid data', () => {
  for (const bad of [null, 5, 'x', [], { coins: 'a', look: 7, pets: 3, rooms: [1], favs: 'z', own: { 'item:nope': 1, 'item:dress_gown_rose': 1 } }]) {
    const s = L.normalizeSave(bad);
    assert.equal(s.coins, L.START_COINS);
    assert.ok(Object.keys(s.pets).length === 7 && Object.keys(s.rooms).length === 6);
    assert.ok(!('item:nope' in s.own));
  }
  const s = fresh(); s.coins = 77; s.look.hairStyle = 'bob'; s.rooms.kitchen.items.push({ x: 1, y: 1, e: '🍳', c: null, f: false });
  const r = L.normalizeSave(JSON.parse(JSON.stringify(s)));
  assert.equal(r.coins, 77); assert.equal(r.look.hairStyle, 'bob'); assert.equal(r.rooms.kitchen.items.length, 1);
  const b = L.normalizeSave({ rooms: { kitchen: { items: [{ x: 99, y: 1, e: '🍳' }, { x: 1, y: 1, e: 'zzz' }] } }, look: { outfit: { dress: 'nope', shoes: 'dress_gown_rose' } } });
  assert.equal(b.rooms.kitchen.items.length, 0); assert.deepEqual(b.look.outfit, {});
});

test('nothing is locked: every item, hair, pet and decoration is owned from the start and costs nothing', () => {
  const s = fresh();
  for (const it of ITEMS) { assert.ok(L.isOwned(s, 'item', it.id), it.id); assert.deepEqual(L.priceOf('item', it.id), { coins: 0, dia: 0 }); }
  assert.equal(L.priceOf('item', 'nope'), null); // unknown ids are still unknown
  assert.equal(L.buy(s, 'item', ITEMS[0].id).reason, 'owned'); // nothing to buy
});

test('earn counts coins earned; events count; runwayStars is the best single show', () => {
  const s = fresh(); L.earn(s, { coins: 30, dia: 1, stars: 2 });
  assert.equal(s.coins, L.START_COINS + 30); assert.equal(s.stars, 2); assert.equal(s.events.coins, 30);
  L.addEvent(s, 'equip', 3); L.addEvent(s, 'equip'); assert.equal(s.events.equip, 4);
  L.addEvent(s, 'runwayStars', 2); L.addEvent(s, 'runwayStars', 1); assert.equal(s.events.runwayStars, 2);
  assert.equal(L.addEvent(s, 'bogus'), 0);
});

test('wearing: a dress replaces top and bottom and vice versa; toggling removes', () => {
  const s = fresh(); const top = ITEMS.find((i) => i.slot === 'top'); const bot = ITEMS.find((i) => i.slot === 'bottom'); const dress = ITEMS.find((i) => i.slot === 'dress');
  L.toggleItem(s.look, top.id); L.toggleItem(s.look, bot.id);
  assert.ok(!s.look.outfit.dress && s.look.outfit.top && s.look.outfit.bottom);
  assert.equal(L.toggleItem(s.look, dress.id), 'on'); assert.ok(!s.look.outfit.top && !s.look.outfit.bottom);
  assert.equal(L.toggleItem(s.look, dress.id), 'off'); assert.ok(!s.look.outfit.dress);
});

test('favourite looks: save (counts), limit, load only owned items, delete', () => {
  const s = fresh();
  assert.ok(L.saveFav(s, s.look)); assert.equal(s.events.fav, 1);
  const paid = ITEMS.find((i) => i.slot === 'top' && i.price > 0);
  s.favs[0].outfit.top = paid.id; delete s.favs[0].outfit.dress;
  assert.ok(L.loadFav(s, 0)); assert.equal(s.look.outfit.top, paid.id); // everything is owned now, so a saved look loads fully
  for (let i = 0; i < 20; i++) L.saveFav(s, s.look);
  assert.equal(s.favs.length, L.MAX_FAVS);
  assert.ok(L.deleteFav(s, 0)); assert.equal(s.favs.length, L.MAX_FAVS - 1);
});

test('fashion score: matching, complete outfit with makeup beats mismatch and nothing; 1..3 stars', () => {
  const th = THEMES.find((t) => t.id === 'beach');
  const pick = (slot, tag) => ITEMS.find((i) => i.slot === slot && i.tags.includes(tag)).id;
  const good = { outfit: { dress: pick('dress', 'beach'), shoes: pick('shoes', 'beach'), bag: pick('bag', 'beach'), head: pick('head', 'beach'), face: pick('face', 'beach') }, lips: '#ff0000', blush: '#ff00ff', shadow: '#0000ff', lash: 'glam' };
  const bad = { outfit: { dress: pick('dress', 'wedding'), shoes: pick('shoes', 'winter') } };
  const none = { outfit: {} };
  const a = L.scoreOutfit(good, th); const b = L.scoreOutfit(bad, th); const c = L.scoreOutfit(none, th);
  assert.equal(a.stars, 3); assert.ok(a.total > b.total && b.total > c.total); assert.equal(c.stars, 1); assert.ok(a.total <= 100 && c.total >= 0);
  for (const t of THEMES) { const r = L.scoreOutfit(good, t); assert.ok(r.stars >= 1 && r.stars <= 3); }
});

test('runway: rewards by stars, stars added only when beating best, events counted', () => {
  const s = fresh();
  const r1 = L.finishRunway(s, 'beach', 2); assert.equal(r1.stars, 2); assert.equal(s.stars, 2); assert.equal(s.events.runway, 1);
  const r2 = L.finishRunway(s, 'beach', 3); assert.equal(r2.stars, 1); assert.equal(r2.dia, 1); assert.equal(s.stars, 3);
  const r3 = L.finishRunway(s, 'beach', 1); assert.equal(r3.stars, 0); assert.equal(s.events.runwayStars, 3); assert.equal(s.runway.beach, 3);
});

test('worlds: locked by stars, level needs its objective, claim gives rewards, chest at the end', () => {
  const s = fresh(); const city = WORLDS[0]; const beauty = WORLDS[1];
  assert.equal(L.worldState(s, beauty).unlocked, false);
  assert.equal(L.claimLevel(s, 'city').ok, false);
  let guard = 0;
  while (!L.worldState(s, city).done && guard++ < 10) {
    const st = L.worldState(s, city); s.events[st.cur.k] = Math.max(s.events[st.cur.k], st.cur.n);
    const before = s.stars; const r = L.claimLevel(s, 'city'); assert.ok(r.ok); assert.ok(s.stars > before);
    if (st.last) assert.ok(r.chest && r.chest.dia === 2); else assert.equal(r.chest, null);
  }
  assert.equal(s.levels.city, 5); assert.ok(s.stars >= beauty.need); assert.ok(L.worldState(s, beauty).unlocked);
  assert.equal(L.claimLevel(s, 'beauty').ok, false);
});

test('every objective uses a real event key', () => {
  for (const w of WORLDS) for (const l of w.levels) assert.ok(L.EVENT_KEYS.includes(l.k), `${w.id}:${l.k}`);
  for (const a of ACHIEVEMENTS) assert.ok(L.EVENT_KEYS.includes(a.k));
  for (const d of DAILY) assert.ok(L.EVENT_KEYS.includes(d.k));
});

test('daily tasks reset per day, count only new events, pay once, chest after all', () => {
  const s = fresh(); L.addEvent(s, 'equip', 50); L.addEvent(s, 'salon', 50);
  assert.ok(L.ensureDaily(s, '2026-11-19')); assert.equal(s.daily.pick.length, 3);
  assert.equal(L.ensureDaily(s, '2026-11-19'), false);
  const idx = s.daily.pick[0]; assert.equal(L.dailyProgress(s, idx), 0);
  L.addEvent(s, DAILY[idx].k, DAILY[idx].n);
  assert.ok(L.dailyReady(s, idx)); assert.ok(L.claimDaily(s, idx)); assert.equal(L.claimDaily(s, idx), null); assert.equal(s.events.daily, 1);
  assert.equal(L.claimDailyChest(s), null);
  for (const i of s.daily.pick) { L.addEvent(s, DAILY[i].k, DAILY[i].n); L.claimDaily(s, i); }
  assert.ok(L.claimDailyChest(s)); assert.equal(L.claimDailyChest(s), null);
  assert.ok(L.ensureDaily(s, '2026-11-20')); assert.deepEqual(s.daily.claimed, {});
  assert.equal(L.dayKey(new Date(2026, 10, 9)), '2026-11-09');
});

test('achievements: claim once, pay, count', () => {
  const s = fresh(); const a = ACHIEVEMENTS[0];
  assert.equal(L.claimAch(s, a.id), null);
  s.events[a.k] = a.n; assert.ok(L.claimableCount(s) >= 1);
  const c = s.coins; assert.ok(L.claimAch(s, a.id)); assert.ok(s.coins > c); assert.equal(L.claimAch(s, a.id), null); assert.equal(s.events.achieve, 1);
});

test('pets: slow decay with a floor, full pet refuses food, catch-up is capped', () => {
  const p = L.newPet(); L.decayPet(p, 10); assert.ok(p.hunger > 70 && p.hunger < 80);
  L.decayPet(p, 1e6); assert.ok(Object.keys(L.PET_RATES).every((k) => p[k] === L.PET_MIN)); assert.equal(L.petMood(p), 'sad');
  p.hunger = 96; assert.equal(L.feedPet(p), false); p.hunger = 50; assert.ok(L.feedPet(p)); assert.equal(p.hunger, 80);
  L.carePet(p, 'clean', 500); assert.equal(p.clean, 100);
  const s = fresh(); s.petsT = 1000; L.catchUpPets(s, 1000 + 3 * 3600 * 1000); assert.ok(s.pets.puppy.hunger > 40);
});

test('rooms: place, no overlap, move, flip, recolour, remove, save counts only on change', () => {
  const s = fresh(); const r = s.rooms.bedroom;
  assert.ok(L.placeFurn(r, 1, 1, '🛏️')); assert.equal(L.placeFurn(r, 1, 1, '🪞'), false); assert.equal(L.placeFurn(r, 9, 1, '🪞'), false);
  assert.ok(L.moveFurn(r, 0, 2, 2)); assert.equal(L.furnAt(r, 2, 2), 0);
  L.flipFurn(r, 0); assert.equal(r.items[0].f, true); L.recolorFurn(r, 0); assert.ok(r.items[0].c);
  assert.ok(L.saveRoom(s, 'bedroom')); assert.equal(L.saveRoom(s, 'bedroom'), false); assert.equal(s.events.room, 1);
  L.removeFurn(r, 0); assert.equal(r.items.length, 0); assert.ok(L.saveRoom(s, 'bedroom')); assert.equal(s.events.room, 2);
});

test('a robot player can finish every world with only normal actions', () => {
  const s = fresh(); L.ensureDaily(s);
  for (let round = 0; round < 80; round++) {
    L.addEvent(s, 'equip', 3); L.addEvent(s, 'buy'); L.addEvent(s, 'fav'); L.addEvent(s, 'salon', 2); L.addEvent(s, 'makeup'); L.addEvent(s, 'petcare', 2);
    L.addEvent(s, 'place', 2); L.addEvent(s, 'room'); L.finishRunway(s, THEMES[round % 8].id, 3);
    for (const i of s.daily.pick) L.claimDaily(s, i);
    for (const a of ACHIEVEMENTS) L.claimAch(s, a.id);
    s.events.petunlock = Math.max(s.events.petunlock, 3);
    for (const w of WORLDS) L.claimLevel(s, w.id);
  }
  for (const w of WORLDS) assert.ok(L.worldState(s, w).done, w.id);
});

test('every text key used in the source exists in both languages', () => {
  const dir = new URL('../src/', import.meta.url);
  const used = new Set();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'i18n.js') continue;
    const src = readFileSync(new URL(f, dir), 'utf8');
    for (const m of src.matchAll(/\bt\('([a-zA-Z0-9_]+)'\)/g)) used.add(m[1]);
    for (const m of src.matchAll(/\bt\(`([a-zA-Z_]+)\$\{/g)) used.add(`prefix:${m[1]}`);
    for (const m of src.matchAll(/\bt\([^()]*\?\s*'([a-zA-Z0-9_]+)'\s*:\s*'([a-zA-Z0-9_]+)'/g)) { used.add(m[1]); used.add(m[2]); }
  }
  assert.ok(used.size > 60);
  for (const k of used) {
    if (k.startsWith('prefix:')) { assert.ok(Object.keys(S).some((x) => x.startsWith(k.slice(7))), k); continue; }
    assert.ok(S[k], `missing text: ${k}`); assert.ok(S[k][0] && S[k][1], `both languages: ${k}`);
  }
  for (const th of THEMES) for (const tag of th.need) assert.ok(S[`tag_${tag}`], tag);
  for (const k of ['wash', 'dry', 'style', 'color', 'makeup', 'jewel']) assert.ok(S[`act_${k}`]);
  for (const k of ['feed', 'wash', 'brush', 'play', 'outfit', 'bed']) assert.ok(S[`pact_${k}`]);
  for (const k of ['shadow', 'lips', 'blush', 'skin', 'lash', 'nails']) assert.ok(S[`mk_${k}`]);
  for (const k of ['clothes', 'hair', 'pets', 'decor']) assert.ok(S[`shop_${k}`]);
  for (const k of ['natural', 'long', 'wing', 'glam']) assert.ok(S[`lash_${k}`]);
});
