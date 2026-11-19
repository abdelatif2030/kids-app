import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Quarry, LEVELS, KINDS, normalizeSave, recordWin } from '../src/sim.js';

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

test('a robot completes all 10 levels', () => {
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

test('stars follow overflow time, saves normalise', () => {
  const q = new Quarry({ level: 1 }); q.state = 'won';
  q.overflowT = 2; assert.equal(q.stars(), 3);
  q.overflowT = 10; assert.equal(q.stars(), 2);
  q.overflowT = 60; assert.equal(q.stars(), 1);
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, muted: false });
  const s = normalizeSave({ unlocked: 99, stars: { 1: 9, x: 1, 12: 3 }, muted: 'yes' });
  assert.equal(s.unlocked, 10); assert.deepEqual(s.stars, { 1: 3 }); assert.equal(s.muted, false);
  const r = recordWin(null, 3, 2);
  assert.equal(r.unlocked, 4); assert.equal(recordWin(r, 3, 1).stars[3], 2);
});
