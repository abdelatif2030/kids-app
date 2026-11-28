import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Quarry, LEVELS, KINDS, normalizeSave, recordWin, museumEntries, chapterOf, EXHIBITS } from '../src/sim.js';

/** A robot player: taps the pile, then buys whatever makes the weaker side (digging or hauling) stronger. */
export function robotStep(q, tick) {
  if (tick % 12 === 0) q.tapLoad();
  const dig = q.prodRate();
  const haul = q.haulRate();
  const order = haul < dig * 1.05
    ? ['trucks', 'truckCap', 'road', 'loader', 'pile', 'polish', 'mine2', 'diggers']
    : ['diggers', 'mine2', 'polish', 'pile', 'trucks', 'truckCap', 'road', 'loader'];
  for (const k of order) if (q.canBuy(k)) { q.buy(k); break; }
}

function play(level, easy = false, limit = 900) {
  const q = new Quarry({ level, easy });
  let tick = 0;
  while (q.state === 'play' && q.t < limit) { robotStep(q, tick++); q.step(1 / 30); }
  return q;
}

test('a robot completes all 15 levels', () => {
  const times = [];
  for (const l of LEVELS) {
    const q = play(l.id);
    assert.equal(q.state, 'won', `level ${l.id} not won, shipped ${q.shipped}/${q.goal}`);
    assert.ok(q.stars() >= 1);
    times.push(`${l.id}:${q.t.toFixed(0)}s/${q.stars()}*`);
  }
  console.log(times.join(' '));
});

test('easy mode (auto loader) also completes every level', () => {
  for (const l of LEVELS) assert.equal(play(l.id, true).state, 'won');
});

test('overflow never loses coins and crates are conserved', () => {
  const q = new Quarry({ level: 5 });
  let last = q.coins; let overflowed = false;
  for (let i = 0; i < 30 * 200; i++) {
    q.step(1 / 30); // nobody taps: the pile fills up
    assert.ok(q.coins >= last, 'coins never go down');
    last = q.coins;
    assert.ok(q.pile <= q.pileCap());
    if (q.isFull()) overflowed = true;
    assert.equal(q.produced, q.pile + q.onTrucks() + q.shipped);
  }
  assert.ok(overflowed && q.overflowT > 0);
  assert.equal(q.shipped, 0);
  assert.equal(q.state, 'play');
});

test('production resumes after the pile is emptied', () => {
  const q = new Quarry({ level: 1 });
  for (let i = 0; i < 30 * 100; i++) q.step(1 / 30);
  assert.ok(q.isFull());
  q.tapLoad();
  const p = q.produced;
  for (let i = 0; i < 60; i++) q.step(1 / 30);
  assert.ok(q.produced > p);
});

function shippedIn(q, secs) {
  for (let i = 0, n = secs * 30; i < n; i++) { if (i % 10 === 0) q.tapLoad(); q.step(1 / 30); if (q.state !== 'play') break; }
  return q.shipped + q.pile;
}

test('upgrades increase throughput', () => {
  const mk = () => { const q = new Quarry({ level: 10, easy: true }); q.cfg = { ...q.cfg, goal: 1e9 }; q.coins = 1e7; return q; };
  const base = shippedIn(mk(), 60);
  const withTrucks = mk(); withTrucks.buy('trucks'); withTrucks.buy('trucks'); withTrucks.buy('truckCap'); withTrucks.buy('road');
  const withDig = mk(); withDig.buy('diggers'); withDig.buy('diggers'); withDig.buy('mine2');
  const both = mk(); for (const k of ['diggers', 'diggers', 'mine2', 'trucks', 'trucks', 'truckCap', 'road']) both.buy(k);
  const a = shippedIn(withTrucks, 60); const b = shippedIn(both, 60);
  assert.ok(a >= base * 0.95, `trucks ${a} vs base ${base}`);
  const hl = () => { const q = new Quarry({ level: 4 }); q.coins = 1e7; for (let i = 0; i < 4; i++) q.buy('diggers'); return q; };
  const h2 = hl(); h2.buy('trucks'); h2.buy('trucks'); h2.buy('truckCap');
  assert.ok(shippedIn(h2, 60) > shippedIn(hl(), 60), 'trucks help when hauling is the bottleneck');
  assert.ok(b > base, `both ${b} vs base ${base}`);
  assert.ok(shippedIn(withDig, 60) >= base);
  // each upgrade also lifts its own number
  const q = mk();
  const before = { prod: q.prodRate(), haul: q.haulRate(), val: q.crateValue(), cap: q.pileCap(), tcap: q.truckCap(), trip: q.tripT() };
  for (const k of KINDS) q.buy(k);
  assert.ok(q.prodRate() > before.prod && q.haulRate() > before.haul && q.crateValue() > before.val);
  assert.ok(q.pileCap() > before.cap && q.truckCap() > before.tcap && q.tripT() < before.trip);
});

test('cannot buy without coins or locked tools', () => {
  const q = new Quarry({ level: 1 });
  assert.equal(q.buy('diggers'), false);
  q.coins = 1e6;
  assert.equal(q.buy('mine2'), false);
  assert.equal(q.buy('diggers'), true);
  assert.ok(q.coins < 1e6);
});

test('price tags follow the video: 150 diggers, 300 trucks, 1350 second mine', () => {
  const q = new Quarry({ level: 1 });
  assert.equal(q.cost('diggers'), 150);
  assert.equal(q.cost('trucks'), 300);
  assert.equal(q.cost('mine2'), 1350);
});

test('stars follow collection, never overflow time; saves normalise', () => {
  const q = new Quarry({ level: 1 }); q.state = 'won';
  q.shipped = q.goal; q.pile = 0;
  q.overflowT = 0; assert.equal(q.stars(), 1);
  q.overflowT = 600; assert.equal(q.stars(), 1); // a full pile for ages changes nothing
  q.pile = 6; assert.equal(q.stars(), 2);
  q.pile = 15; assert.equal(q.stars(), 3);
  q.pile = 0; q.overflowT = 2; assert.equal(q.stars(), 1); // fast and tidy but nothing extra collected
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, muted: false });
  const s = normalizeSave({ unlocked: 99, stars: { 1: 9, x: 1, 12: 3 }, muted: 'yes' });
  assert.equal(s.unlocked, 15); assert.deepEqual(s.stars, { 1: 3, 12: 3 }); assert.equal(s.muted, false);
  const r = recordWin(null, 3, 2);
  assert.equal(r.unlocked, 4); assert.equal(recordWin(r, 3, 1).stars[3], 2);
});

test('Aswan Quarries anchor: ten quarry sites, ids and goals unchanged', () => {
  assert.equal(LEVELS[0].en, 'Quarry Gate');
  assert.equal(LEVELS[6].en, 'Obelisk Quarry');
  assert.equal(LEVELS[9].en, 'Master of Aswan Quarries');
  assert.equal(LEVELS[0].goal, 30);
  assert.equal(LEVELS[9].goal, 320);
});

// ---- Phase 2G: freeze, Tura second quarry, museum, migration, campaign -------------------------------------------

const FROZEN_1_10 = [
  [1, 30, 10, 0.68, 3.5, 0, 'Quarry Gate'], [2, 45, 11, 0.69, 3.6, 60, 'Pink Granite Hill'],
  [3, 60, 12, 0.71, 3.9, 80, 'Granite Crates'], [4, 80, 13, 0.72, 4.1, 100, 'Nile Road'],
  [5, 100, 14, 0.74, 4.2, 120, 'Quarry Helper'], [6, 130, 15, 0.75, 4.3, 150, 'Polish Shop'],
  [7, 160, 16, 0.75, 4.5, 200, 'Obelisk Quarry'], [8, 200, 18, 0.78, 4.6, 250, 'The Great Quarry'],
  [9, 250, 20, 0.81, 4.8, 300, 'Gem Flood'], [10, 320, 22, 0.84, 4.9, 400, 'Master of Aswan Quarries'],
];

test('FREEZE: Aswan levels 1-10 data unchanged (Phase 2G append-only)', () => {
  for (const [id, goal, price, rate, trip, coins, en] of FROZEN_1_10) {
    const L = LEVELS[id - 1];
    assert.equal(L.id, id); assert.equal(L.goal, goal); assert.equal(L.price, price);
    assert.equal(L.rate, rate); assert.equal(L.trip, trip); assert.equal(L.coins, coins); assert.equal(L.en, en);
    assert.equal(chapterOf(L), 'aswan');
  }
});

test('Tura second quarry: levels 11-15 appended, gently rising, existing mechanics only', () => {
  assert.equal(LEVELS.length, 15);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const tura = LEVELS.slice(10);
  assert.deepEqual(tura.map((l) => l.en), ['Tura Gate', 'White Limestone', 'Pyramid Casing', 'Great Tura Quarry', 'Master of Tura']);
  for (const L of tura) {
    assert.equal(chapterOf(L), 'tura');
    assert.ok(L.ar && L.en, 'bilingual name');
    for (const k of Object.keys(L.up)) assert.ok(KINDS.includes(k), `no new mechanic: ${k}`);
    for (const t of L.tools) assert.ok(KINDS.includes(t));
  }
  for (let i = 1; i < tura.length; i++) {
    assert.ok(tura[i].goal > tura[i - 1].goal, 'goals rise');
    assert.ok(tura[i].price >= tura[i - 1].price, 'prices never drop');
    assert.ok(tura[i].trip >= tura[i - 1].trip, 'trips never shorten');
  }
  assert.ok(tura[0].goal > LEVELS[9].goal, 'Tura continues past the Aswan finale');
});

test('campaign proof: recordWin chain walks first to last, Tura unlocks only after Aswan', () => {
  let save = normalizeSave(null);
  for (let id = 1; id <= 15; id++) {
    assert.equal(save.unlocked, id, `level ${id} is the frontier`);
    assert.equal(play(id).state, 'won', `level ${id} robot-completes in the chain`);
    save = recordWin(save, id, 2);
  }
  assert.equal(save.unlocked, 15);
  assert.equal(Object.keys(save.stars).length, 15);
});

test('museum: exhibits lock/unlock purely from the save stars', () => {
  const fresh = museumEntries(null);
  assert.equal(fresh.length, 15);
  assert.ok(fresh.every((e) => !e.complete && e.stars === 0));
  assert.equal(EXHIBITS.length, 15);
  for (const e of fresh) { assert.ok(e.fact[0] && e.fact[1], 'fact ar+en'); assert.ok(e.icon); }
  const mid = museumEntries({ unlocked: 11, stars: { 1: 3, 7: 2, 10: 1 } });
  assert.equal(mid.filter((e) => e.complete).length, 3);
  assert.equal(mid[0].stars, 3); assert.equal(mid[6].en, 'Obelisk Quarry');
  assert.ok(mid.slice(10).every((e) => !e.complete), 'Tura exhibits stay locked until played');
  const full = museumEntries(recordWin(recordWin(null, 14, 3), 15, 3));
  assert.ok(full[13].complete && full[14].complete && full[14].chapter === 'tura');
});

test('old-save migration: a finished 10-level Aswan save keeps progress, Tura opens at 11', () => {
  const old = { unlocked: 10, stars: { 1: 3, 2: 3, 3: 2, 4: 2, 5: 3, 6: 1, 7: 2, 8: 3, 9: 2, 10: 3 }, muted: true };
  const s = normalizeSave(old);
  assert.deepEqual(s.stars, old.stars);
  assert.equal(s.unlocked, 11, 'beating level 10 already opened the road to Tura');
  assert.equal(s.muted, true);
  const entries = museumEntries(old);
  assert.equal(entries.filter((e) => e.complete).length, 10);
  assert.ok(entries.slice(10).every((e) => !e.complete));
  const capped = normalizeSave({ unlocked: 99, stars: {} });
  assert.equal(capped.unlocked, 15);
});
