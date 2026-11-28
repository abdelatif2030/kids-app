import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Colony, normalizeSave, isSave, LEVELS, REGIONS, CROPS, GOODS, ARRIVAL_TIME, BUILD, GRID, HQ, MAX_LEVEL, CAP, levelBonus, regionOf, RESEARCH, researchDef, LEVEL_THEMES, themeForLevel,
} from '../src/sim.js';

/** A robot colonist: plays only through the public API, level after level, until the shuttle lands. */
function robot(c, log) {
  const lvStart = {};
  let guard = 0;
  while (!c.won && c.time < 4 * 3600 && guard++ < 1e6) {
    // 1. farm
    c.harvestAll();
    for (const b of c.blds) {
      if (b.k === 'pen') c.tapPen(b);
      if (b.q !== undefined) c.tapFactory(b);
    }
    const want = { wheat: 14, carrot: c.level >= 2 ? 8 : -99, corn: c.level >= 4 ? (c.level === 4 ? 12 : 6) : -99 };
    const growing = {};
    for (const b of c.blds) if (b.k === 'field' && b.crop) growing[b.crop] = (growing[b.crop] || 0) + 2;
    for (const b of c.blds) {
      if (b.k !== 'field' || b.crop) continue;
      let best = 'wheat'; let bestScore = -1e9;
      for (const k of Object.keys(CROPS)) {
        const score = want[k] - c.inv[k] - (growing[k] || 0);
        if (score > bestScore) { bestScore = score; best = k; }
      }
      if (c.plant(b, best)) growing[best] = (growing[best] || 0) + 2;
    }
    // 2. orders (always, they are the income)
    for (const o of [...c.orders]) if (c.canSend(o)) c.sendOrder(o.id);
    // 3. spending that serves the open tasks, then general growth
    const tasks = c.tasks().filter((t) => !t.done);
    const buildAny = (kind) => { const s = c.spots(kind)[0]; return s ? c.build(kind, s.x, s.y).ok : false; };
    for (const t of tasks) {
      if (t.k === 'have') { if (c.count(t.b) < t.n) buildAny(t.b); }
      else if (t.k === 'regions') {
        const next = REGIONS.filter((r) => !c.regions[r.id] && r.level <= c.level).sort((a, b) => a.cost - b.cost)[0];
        if (next) c.unlockRegion(next.id);
      } else if (t.k === 'goats') { if (!c.buyGoat().ok && c.buyGoat().why === 'pen') buildAny('pen'); }
      else if (t.k === 'colonists') { if (c.capacity() < t.n) buildAny('home'); }
    }
    if (c.level >= 2 && c.goatCount() < 3) c.buyGoat();
    const fields = c.count('field');
    if (fields < 8 && c.coins > 40) buildAny('field');
    else if (c.level >= 4 && fields < 12 && c.coins > 120) buildAny('field');
    if (c.level >= 8 && c.capacity() < 12 && c.coins > 300) buildAny('home');
    // 4. levels
    if (c.levelReady) {
      const lvl = c.level;
      lvStart[lvl] = Math.round(c.time);
      log.push(`level ${lvl} done at ${Math.round(c.time)}s (coins ${c.coins})`);
      assert.ok(c.advance());
    }
    c.step(0.5);
  }
}

test('a robot plays all 12 levels and the first shuttle arrives', () => {
  const c = new Colony({ seed: 5 });
  const log = [];
  robot(c, log);
  console.log(log.join('\n'));
  console.log(`won after ${Math.round(c.time)}s (${(c.time / 60).toFixed(1)} min), delivered ${c.delivered}, colonists ${c.colonists}, coins ${c.coins}`);
  assert.equal(c.won, true, 'shuttle must arrive');
  assert.equal(log.length, MAX_LEVEL);
  assert.ok(c.shuttle && c.shuttle.t >= 0);
  assert.ok(c.count('spaceport') === 1);
  assert.ok(c.colonists >= 12);
  assert.equal(c.regionsOpen(), REGIONS.length);
  assert.ok(c.time < 3 * 3600, 'a full game should not take more than 3 hours of play');
  assert.ok(c.time > 600, 'and should not be over in a few minutes (a perfect robot; children are much slower)');
});

test('the same seed plays the same game', () => {
  const a = new Colony({ seed: 9 }); const b = new Colony({ seed: 9 });
  robot(a, []); robot(b, []);
  assert.equal(a.time, b.time);
  assert.deepEqual(a.toSave(), b.toSave());
});

test('a new colony starts small and level 1 is not finished', () => {
  const c = new Colony();
  assert.equal(c.level, 1);
  assert.equal(c.regionsOpen(), 1);
  assert.equal(c.count('field'), 4);
  assert.equal(c.count('pen'), 1);
  assert.equal(c.levelReady, false);
  assert.equal(c.orders.length, 2);
  assert.ok(c.tasks().every((t) => !t.done));
});

test('planting, growing and harvesting a crop', () => {
  const c = new Colony();
  const f = c.blds.find((b) => b.k === 'field');
  assert.equal(c.plant(f, 'carrot'), false, 'carrots are locked at level 1');
  assert.equal(c.plant(f, 'wheat'), true);
  assert.equal(c.harvest(f), 0, 'not ripe yet');
  c.step(CROPS.wheat.time + 0.1);
  assert.equal(c.cropReady(f), true);
  const before = c.inv.wheat;
  assert.equal(c.harvest(f), 2);
  assert.equal(c.inv.wheat, before + 2);
  assert.equal(f.crop, null);
});

test('crops wait ripe forever (nothing is lost)', () => {
  const c = new Colony();
  const f = c.blds.find((b) => b.k === 'field');
  c.plant(f, 'wheat');
  c.step(5000);
  assert.equal(c.cropReady(f), true);
  assert.equal(c.harvest(f), 2);
});

test('goats: feed, wait, collect milk', () => {
  const c = new Colony();
  const pen = c.blds.find((b) => b.k === 'pen');
  c.inv.wheat = 0;
  let r = c.tapPen(pen);
  assert.equal(r.hungryNoFood, true);
  c.inv.wheat = 1;
  r = c.tapPen(pen);
  assert.equal(r.fed, 1);
  assert.equal(c.inv.wheat, 0);
  c.step(20);
  assert.equal(pen.goats[0].s, 'milk');
  c.inv.wheat = 3;
  r = c.tapPen(pen);
  assert.equal(r.milk, 1);
  assert.equal(c.inv.milk, 1);
  assert.equal(r.fed, 1, 'collecting also feeds the goat again');
});

test('factories turn ingredients into goods and never lose them', () => {
  const c = new Colony();
  c.level = 3;
  c.coins = 500;
  const s = c.spots('bakery')[0];
  const res = c.build('bakery', s.x, s.y);
  assert.ok(res.ok);
  const bk = res.b;
  c.inv.wheat = 5;
  let r = c.tapFactory(bk);
  assert.equal(r.loaded, 2);
  assert.equal(c.inv.wheat, 1);
  assert.equal(r.missing, 'wheat');
  c.step(GOODS.bread.time + 0.1);
  assert.equal(bk.out, 1);
  c.step(GOODS.bread.time + 0.1);
  assert.equal(bk.out, 2);
  r = c.tapFactory(bk);
  assert.equal(r.out, 2);
  assert.equal(c.inv.bread, 2);
  assert.equal(c.lv.make.bread, 2);
});

test('building rules: level, region, spot, coins, maximum', () => {
  const c = new Colony();
  c.coins = 1000;
  assert.equal(c.canBuild('bakery', 3, 3).why, 'level');
  assert.equal(c.canBuild('field', 0, 0).why, 'spot', 'closed region');
  assert.equal(c.canBuild('field', 4, 4).why, 'spot', 'occupied');
  assert.equal(c.canBuild('field', -1, 0).why, 'spot');
  assert.equal(c.canBuild('field', 3, 3).ok, true);
  c.coins = 1;
  assert.equal(c.canBuild('field', 3, 3).why, 'coins');
  c.level = 12; c.coins = 5000;
  assert.equal(c.canBuild('spaceport', 8, 8).why, 'spot', 'a 2x2 spaceport must fit');
  const sp = c.spots('spaceport')[0];
  assert.ok(c.build('spaceport', sp.x, sp.y).ok);
  assert.equal(c.canBuild('spaceport', 5, 7).why, 'max');
  const fresh = new Colony();
  assert.equal(fresh.bldAt(HQ.x, HQ.y).k, 'hq');
  assert.equal(fresh.bldAt(HQ.x + 1, HQ.y + 1).k, 'hq');
});

test('regions: level and coins are required, and they open land to build on', () => {
  const c = new Colony();
  assert.equal(c.unlockRegion(1).why, 'level');
  c.level = 2; c.coins = 10;
  assert.equal(c.unlockRegion(1).why, 'coins');
  c.coins = 100;
  assert.ok(c.unlockRegion(1).ok);
  assert.equal(c.coins, 100 - REGIONS[1].cost);
  assert.equal(c.unlockRegion(1).why, 'open');
  assert.equal(c.canBuild('field', 4, 1).ok, true);
  assert.equal(regionOf(4, 1), 1);
  assert.equal(regionOf(20, 1), -1);
});

test('orders: filled up, sendable only with the goods, paid in coins, replaced', () => {
  const c = new Colony();
  const o = c.orders[0];
  assert.deepEqual(Object.keys(o.need), ['wheat']);
  c.inv.wheat = 0;
  assert.equal(c.sendOrder(o.id).why, 'items');
  c.inv.wheat = 20;
  const coins = c.coins;
  const r = c.sendOrder(o.id);
  assert.ok(r.ok && r.reward === o.reward);
  assert.equal(c.coins, coins + o.reward);
  assert.equal(c.orders.length, 2, 'a new order replaces it');
  assert.equal(c.lv.deliver, 1);
  assert.equal(c.sendOrder(o.id).why, 'gone');
});

test('orders only ask for goods that are unlocked', () => {
  const c = new Colony({ seed: 11 });
  for (let i = 0; i < 300; i++) {
    c.orders = [];
    c.fillOrders();
    for (const o of c.orders) for (const k of Object.keys(o.need)) assert.ok(k === 'wheat' || k === 'milk', k);
  }
});

test('colonists arrive only while there are homes with room', () => {
  const c = new Colony();
  c.step(100);
  assert.equal(c.colonists, 0);
  c.level = 2; c.coins = 200;
  const s = c.spots('home')[0];
  c.build('home', s.x, s.y);
  c.step(ARRIVAL_TIME + 0.1);
  assert.equal(c.colonists, 1);
  c.step(ARRIVAL_TIME * 4);
  assert.equal(c.colonists, 2);
});

test('level tasks: level 1 completes, shows ready, advances and pays a bonus', () => {
  const c = new Colony();
  c.inv.wheat = 50;
  for (let i = 0; i < 6; i++) { const s = c.spots('field')[0]; c.coins = 100; c.build('field', s.x, s.y); }
  for (let i = 0; i < 5; i++) { c.harvestAll(); c.plantAll('wheat'); c.step(9); }
  c.harvestAll();
  assert.equal(c.levelReady, false, 'the delivery is still open');
  c.inv.wheat = 40;
  c.orders.forEach((o) => { if (c.canSend(o)) c.sendOrder(o.id); });
  assert.equal(c.levelReady, true);
  const coins = c.coins;
  assert.equal(c.advance(), true);
  assert.equal(c.level, 2);
  assert.equal(c.coins, coins + levelBonus(1));
  assert.equal(c.levelReady, false);
  assert.equal(c.lv.deliver, 0, 'per-level counters reset');
});

test('every level has three tasks of known kinds and some per-level action', () => {
  assert.equal(LEVELS.length, MAX_LEVEL);
  const perLevel = ['harvest', 'make', 'deliver', 'milk', 'earn'];
  for (const [i, lv] of LEVELS.entries()) {
    assert.equal(lv.tasks.length, 3, `level ${i + 1}`);
    assert.ok(lv.tasks.some((t) => perLevel.includes(t.k)), `level ${i + 1} needs an action task`);
    for (const t of lv.tasks) assert.ok(t.n > 0);
  }
  assert.ok(LEVELS[11].tasks.some((t) => t.k === 'have' && t.b === 'spaceport'));
  assert.ok(BUILD.spaceport.level <= 12);
});

test('advance does nothing until the tasks are done', () => {
  const c = new Colony();
  assert.equal(c.advance(), false);
  assert.equal(c.level, 1);
});

// ---------- save ----------
test('save round trip keeps everything', () => {
  const c = new Colony({ seed: 3 });
  robot(Object.assign(c, {}), []); // play it all the way, then reload the finished game
  const s = c.toSave();
  assert.ok(isSave(s));
  const d = Colony.fromSave(JSON.parse(JSON.stringify(s)), { seed: 3 });
  assert.deepEqual(d.toSave(), s);
  assert.equal(d.won, true);
});

test('save round trip in the middle of a game keeps timers', () => {
  const c = new Colony({ seed: 4 });
  const f = c.blds.find((b) => b.k === 'field');
  c.plant(f, 'wheat');
  c.step(3);
  const pen = c.blds.find((b) => b.k === 'pen');
  c.tapPen(pen);
  c.step(2);
  const s = JSON.parse(JSON.stringify(c.toSave()));
  const d = Colony.fromSave(s);
  assert.deepEqual(d.toSave(), c.toSave());
  const g = d.blds.find((b) => b.k === 'field' && b.crop);
  assert.ok(Math.abs(g.t - 5) < 0.2);
});

test('normalizeSave: garbage never crashes and gives a playable start', () => {
  for (const bad of [undefined, null, 0, 'x', [], {}, { v: 1 }, { v: 2 }, { v: 1, blds: 'no', inv: 5, regions: 3, orders: 7, lv: 'x' }]) {
    const s = normalizeSave(bad);
    assert.equal(s.v, 1);
    assert.equal(s.level, 1);
    assert.ok(s.blds.length >= 5, 'starting outpost is given back');
    assert.ok(s.regions.includes(0));
    const c = Colony.fromSave(s);
    c.step(1);
    assert.ok(c.orders.length >= 2);
  }
});

test('normalizeSave: clamps numbers, drops bad buildings and overlaps, keeps good ones', () => {
  const s = normalizeSave({
    v: 1, level: 99, coins: -50, inv: { wheat: 500, corn: 'a', milk: -4, fake: 9 }, colonists: 1e9, won: 'yes',
    regions: [0, 1, 77, 'a'],
    blds: [
      { k: 'field', x: 4, y: 4, crop: 'wheat', t: 3 },
      { k: 'field', x: 4, y: 4, crop: 'corn', t: 1 }, // overlap
      { k: 'field', x: 7, y: 7 }, // on the HQ
      { k: 'field', x: 99, y: 1 }, // outside
      { k: 'rocket', x: 1, y: 1 }, // unknown
      { k: 'field', x: 3, y: 1, crop: 'tomato', t: 5 }, // region 1 (open), bad crop
      null, 5, 'x',
      { k: 'pen', x: 7, y: 4, goats: [{ s: 'milk' }, { s: 'zzz' }, { s: 'eat', t: 999 }, {}, {}] },
      { k: 'bakery', x: 5, y: 3, q: 99, t: -3, out: 1e9 },
      { k: 'spaceport', x: 4, y: 3 }, // overlaps the bakery tile? no: 4,3 is free; 2x2 covers (4..5,3..4) -> overlaps bakery/field
    ],
    orders: [{ need: { wheat: 3, bread: 4 }, reward: 1e12 }, { need: {} }, { need: { fake: 3 } }],
  });
  assert.equal(s.level, MAX_LEVEL);
  assert.equal(s.coins, 0);
  assert.equal(s.inv.wheat, CAP);
  assert.equal(s.inv.corn, 0);
  assert.equal(s.inv.milk, 0);
  assert.equal(s.inv.fake, undefined);
  assert.ok(s.colonists <= 99);
  const tiles = new Set();
  for (const b of s.blds) {
    const d = BUILD[b.k];
    assert.ok(d, `known kind ${b.k}`);
    for (let y = b.y; y < b.y + d.h; y++) for (let x = b.x; x < b.x + d.w; x++) {
      assert.ok(x >= 0 && y >= 0 && x < GRID && y < GRID);
      const key = `${x},${y}`;
      assert.ok(!tiles.has(key), `overlap at ${key}`);
      assert.ok(!(x >= HQ.x && x < HQ.x + 2 && y >= HQ.y && y < HQ.y + 2), 'nothing on the HQ');
      tiles.add(key);
      assert.ok(s.regions.includes(regionOf(x, y)), 'buildings stand on open regions');
    }
  }
  const field = s.blds.find((b) => b.k === 'field' && b.x === 4 && b.y === 4);
  assert.equal(field.crop, 'wheat');
  const bad = s.blds.find((b) => b.k === 'field' && b.x === 3 && b.y === 1);
  assert.equal(bad.crop, null);
  const pen = s.blds.find((b) => b.k === 'pen');
  assert.equal(pen.goats.length, 3);
  assert.deepEqual(pen.goats.map((g) => g.s), ['milk', 'hungry', 'eat']);
  const bk = s.blds.find((b) => b.k === 'bakery');
  assert.ok(bk.q <= 4 && bk.out <= CAP);
  assert.ok(s.orders.length >= 1 && s.orders.length <= 4);
  assert.equal(s.orders[0].reward, 99999);
  assert.equal(s.orders[0].need.wheat, 3);
  // normalising twice changes nothing
  assert.deepEqual(normalizeSave(s), s);
});

test('a finished game loads as won, with the shuttle already landed', () => {
  const c = Colony.fromSave({ v: 1, level: 12, won: true });
  assert.equal(c.won, true);
  assert.equal(c.shuttle.done, true);
  assert.equal(c.levelReady, false);
});

test('orders in a save never ask for goods that are still locked', () => {
  const s = normalizeSave({ v: 1, level: 1, orders: [{ need: { wheat: 3, bread: 4, cheese: 1 }, reward: 20 }, { need: { juice: 2 }, reward: 9 }] });
  for (const o of s.orders) for (const k of Object.keys(o.need)) assert.ok(k === 'wheat' || k === 'milk', k);
  assert.equal(s.orders[0].need.wheat, 3);
});

test('no seed can soft-lock the game (orders always ask for things that can be made)', () => {
  for (let seed = 1; seed <= 12; seed++) {
    const c = new Colony({ seed });
    robot(c, []);
    assert.equal(c.won, true, `seed ${seed}`);
  }
});

// ---------- Phase 2F: stars, research, Olympus chapter ----------

const TASKS_1_12 = [
  [{ k: 'harvest', item: 'wheat', n: 8 }, { k: 'have', b: 'field', n: 6 }, { k: 'deliver', n: 1 }],
  [{ k: 'harvest', item: 'carrot', n: 6 }, { k: 'have', b: 'home', n: 1 }, { k: 'milk', n: 3 }],
  [{ k: 'have', b: 'bakery', n: 1 }, { k: 'make', item: 'bread', n: 4 }, { k: 'deliver', n: 3 }],
  [{ k: 'harvest', item: 'corn', n: 8 }, { k: 'colonists', n: 2 }, { k: 'regions', n: 3 }],
  [{ k: 'have', b: 'dairy', n: 1 }, { k: 'make', item: 'cheese', n: 3 }, { k: 'have', b: 'pen', n: 2 }],
  [{ k: 'have', b: 'juicer', n: 1 }, { k: 'make', item: 'juice', n: 4 }, { k: 'colonists', n: 4 }],
  [{ k: 'deliver', n: 5 }, { k: 'have', b: 'home', n: 3 }, { k: 'earn', n: 250 }],
  [{ k: 'regions', n: 5 }, { k: 'goats', n: 5 }, { k: 'make', item: 'bread', n: 8 }],
  [{ k: 'colonists', n: 8 }, { k: 'deliver', n: 6 }, { k: 'make', item: 'cheese', n: 5 }],
  [{ k: 'regions', n: 7 }, { k: 'make', item: 'juice', n: 8 }, { k: 'earn', n: 500 }],
  [{ k: 'have', b: 'home', n: 5 }, { k: 'regions', n: 9 }, { k: 'earn', n: 700 }],
  [{ k: 'have', b: 'spaceport', n: 1 }, { k: 'colonists', n: 12 }, { k: 'deliver', n: 8 }],
];

test('Phase 2F: 16 levels, levels 1-12 task data unchanged, Olympus chapter appended with names', () => {
  assert.equal(MAX_LEVEL, 16);
  assert.equal(LEVELS.length, 16);
  for (let i = 0; i < 12; i++) assert.deepEqual(LEVELS[i].tasks, TASKS_1_12[i], `level ${i + 1} tasks must be identical`);
  for (let i = 12; i < 16; i++) {
    assert.ok(Array.isArray(LEVELS[i].name) && LEVELS[i].name[0] && LEVELS[i].name[1], `level ${i + 1} has ar/en names`);
    assert.equal(LEVELS[i].tasks.length, 3);
  }
  for (const [i, lv] of LEVELS.entries()) {
    assert.ok(lv.bonus && lv.bonus.n > 0, `level ${i + 1} has a bonus objective`);
    assert.ok(lv.milestone && lv.milestone.n > 0, `level ${i + 1} has a milestone`);
  }
});

/** Sets up a level-1 colony whose required tasks are done; wheatHarvest/fields steer bonus + milestone. */
function level1Ready({ wheat = 8, fields = 6 } = {}) {
  const c = new Colony({ seed: 5 });
  c.coins = 500;
  while (c.count('field') < fields) { const s = c.spots('field')[0]; assert.ok(c.build('field', s.x, s.y).ok); }
  c.lv.harvest.wheat = wheat;
  c.lv.deliver = 1;
  c.step(0.1);
  assert.equal(c.levelReady, true);
  return c;
}

test('stars: completion only = 1 star, +bonus = 2, +milestone = 3, and waiting never changes stars', () => {
  const a = level1Ready({ wheat: 8, fields: 6 });
  assert.equal(a.currentStars(), 1);
  assert.ok(a.advance());
  assert.equal(a.starsFor(1), 1);

  const b = level1Ready({ wheat: 16, fields: 6 });
  assert.equal(b.bonusTask().done, true);
  assert.equal(b.currentStars(), 2);
  b.advance();
  assert.equal(b.starsFor(1), 2);

  const d = level1Ready({ wheat: 16, fields: 8 });
  assert.equal(d.milestoneTask().done, true);
  assert.equal(d.currentStars(), 3);
  d.advance();
  assert.equal(d.starsFor(1), 3);
  assert.equal(d.totalStars(), 3);

  // No time input: idling for a very long time before advancing earns exactly the same stars.
  const slow = level1Ready({ wheat: 16, fields: 8 });
  slow.step(100000);
  assert.equal(slow.currentStars(), 3);
  slow.advance();
  assert.equal(slow.starsFor(1), 3);
  const fresh = new Colony();
  assert.equal(fresh.currentStars(), 0, 'no stars before the tasks are done');
});

test('research: prerequisites, coins, ownership and persistence', () => {
  const c = new Colony();
  assert.equal(c.buyResearch('nope').why, 'unknown');
  assert.equal(c.buyResearch('drone').why, 'locked', 'tier 2 needs its prerequisite first');
  c.coins = 10;
  assert.equal(c.buyResearch('sprouts').why, 'coins');
  c.coins = 500;
  assert.ok(c.buyResearch('sprouts').ok);
  assert.equal(c.coins, 500 - researchDef('sprouts').cost);
  assert.equal(c.buyResearch('sprouts').why, 'owned');
  assert.ok(c.buyResearch('drone').ok, 'prerequisite now met');
  const s = JSON.parse(JSON.stringify(c.toSave()));
  const d = Colony.fromSave(s);
  assert.deepEqual(d.research, ['sprouts', 'drone']);
  assert.deepEqual(d.toSave(), s);
});

test('research effects actually wire into the sim', () => {
  // sprouts: crops grow 25% faster
  const fast = new Colony(); fast.research = ['sprouts'];
  const slow = new Colony();
  const ff = fast.blds.find((b) => b.k === 'field'); const fs = slow.blds.find((b) => b.k === 'field');
  fast.plant(ff, 'wheat'); slow.plant(fs, 'wheat');
  fast.step(8.1); slow.step(8.1);
  assert.equal(fast.cropReady(ff), true);
  assert.equal(slow.cropReady(fs), false);
  // ovens: factories run 30% faster
  const mk = (res) => { const c = new Colony(); c.level = 3; c.coins = 500; c.research = res; const s = c.spots('bakery')[0]; const bk = c.build('bakery', s.x, s.y).b; c.inv.wheat = 4; c.tapFactory(bk); return [c, bk]; };
  const [oc, ob] = mk(['ovens']); const [pc, pb] = mk([]);
  oc.step(10); pc.step(10);
  assert.equal(ob.out, 1, 'bread done in 10s with ovens (12 / 1.3 < 10)');
  assert.equal(pb.out, 0);
  // drone: +1 order slot
  const dc = new Colony(); assert.equal(dc.maxOrders(), 2);
  dc.research = ['sprouts', 'drone']; dc.fillOrders();
  assert.equal(dc.maxOrders(), 3);
  assert.equal(dc.orders.length, 3);
  // bargain: buildings 15% cheaper
  const bc = new Colony(); assert.equal(bc.costOf('field'), BUILD.field.cost);
  bc.research = ['ovens', 'bargain'];
  assert.equal(bc.costOf('field'), Math.ceil(BUILD.field.cost * 0.85));
  // welcome: colonists arrive after 70% of the usual wait
  const wc = new Colony(); wc.research = ['sprouts', 'drone', 'welcome'];
  wc.level = 2; wc.coins = 200; const hs = wc.spots('home')[0]; wc.build('home', hs.x, hs.y);
  wc.step(ARRIVAL_TIME * 0.7 + 0.1);
  assert.equal(wc.colonists, 1);
  const nc = new Colony(); nc.level = 2; nc.coins = 200; const hs2 = nc.spots('home')[0]; nc.build('home', hs2.x, hs2.y);
  nc.step(ARRIVAL_TIME * 0.7 + 0.1);
  assert.equal(nc.colonists, 0);
  // bigorders: deliveries pay 25% more
  const gc = new Colony(); gc.research = ['ovens', 'bargain', 'bigorders'];
  const o = gc.orders[0]; gc.inv.wheat = 20;
  const r = gc.sendOrder(o.id);
  assert.equal(r.reward, o.reward + Math.round(o.reward * 0.25));
});

test('the whole campaign completes with zero research (research is a bonus, never a requirement)', () => {
  const c = new Colony({ seed: 5 });
  robot(c, []);
  assert.equal(c.won, true);
  assert.deepEqual(c.research, []);
});

test('old saves migrate: stars default to the completion star, research empty, progress intact', () => {
  const mid = Colony.fromSave({ v: 1, level: 5, coins: 321, colonists: 3, delivered: 7 });
  assert.equal(mid.level, 5);
  assert.equal(mid.coins, 321);
  assert.equal(mid.colonists, 3);
  assert.deepEqual(mid.research, []);
  for (let l = 1; l <= 4; l++) assert.equal(mid.starsFor(l), 1, `finished level ${l} keeps its completion star`);
  assert.equal(mid.starsFor(5), 0);
  const wonOld = Colony.fromSave({ v: 1, level: 12, won: true });
  assert.equal(wonOld.won, true);
  for (let l = 1; l <= 12; l++) assert.equal(wonOld.starsFor(l), 1);
  // saved stars are clamped and unknown levels dropped; migration never lowers a saved star count
  const clamped = Colony.fromSave({ v: 1, level: 3, stars: { 1: 9, 2: 2, 99: 3 } });
  assert.equal(clamped.starsFor(1), 3);
  assert.equal(clamped.starsFor(2), 2);
  assert.equal(clamped.starsFor(99), 0);
  assert.deepEqual(normalizeSave(clamped.toSave()), clamped.toSave(), 'migration is idempotent');
});

test('scripted campaign 1→16: level 12 is mid-campaign now, the win lands only after level 16', () => {
  const c = new Colony({ seed: 5 });
  const seen = [];
  const orig = c.advance.bind(c);
  c.advance = () => { const r = orig(); seen.push([c.level, c.won]); return r; };
  robot(c, []);
  assert.equal(seen.length, 16);
  assert.deepEqual(seen[11], [13, false], 'advancing past level 12 moves to level 13, not the win');
  assert.deepEqual(seen[15], [16, true], 'the shuttle lands only after level 16');
  assert.equal(c.totalStars() >= 16, true, 'at least the completion star per level');
  for (let l = 1; l <= 16; l++) assert.ok(c.starsFor(l) >= 1 && c.starsFor(l) <= 3);
});

test('a hand-built early colony: every open order is deliverable with what can be produced', () => {
  const c = new Colony({ seed: 21 });
  for (let i = 0; i < 100; i++) {
    c.orders = []; c.fillOrders();
    for (const o of c.orders) for (const k of Object.keys(o.need)) assert.ok(c.orderable(k), k);
  }
});

test('Cert Sweep A: every level has a DISTINCT background theme (no two levels share a sky or soil)', () => {
  assert.equal(LEVEL_THEMES.length, MAX_LEVEL, 'one theme per level');
  const skies = new Set(LEVEL_THEMES.map((t) => t.sky.join('|')));
  const soils = new Set(LEVEL_THEMES.map((t) => t.open.join('|')));
  const dunes = new Set(LEVEL_THEMES.map((t) => t.dune.join('|')));
  assert.equal(skies.size, MAX_LEVEL, 'all 16 skies differ');
  assert.equal(soils.size, MAX_LEVEL, 'all 16 open-soil pairs differ');
  assert.equal(dunes.size, MAX_LEVEL, 'all 16 dune pairs differ');
  for (let l = 1; l <= MAX_LEVEL; l++) assert.equal(themeForLevel(l), LEVEL_THEMES[l - 1], `level ${l} maps to its own theme`);
  for (const t of LEVEL_THEMES) {
    assert.equal(t.sky.length, 4);
    assert.ok(t.name && t.planet && t.moon && t.pebble, 'theme is complete');
  }
});
