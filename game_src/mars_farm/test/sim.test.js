import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Colony, normalizeSave, isSave, LEVELS, REGIONS, CROPS, GOODS, ARRIVAL_TIME, BUILD, GRID, HQ, MAX_LEVEL, CAP, levelBonus, regionOf,
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

test('a hand-built early colony: every open order is deliverable with what can be produced', () => {
  const c = new Colony({ seed: 21 });
  for (let i = 0; i < 100; i++) {
    c.orders = []; c.fillOrders();
    for (const o of c.orders) for (const k of Object.keys(o.need)) assert.ok(c.orderable(k), k);
  }
});
