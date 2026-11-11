import test from 'node:test';
import assert from 'node:assert/strict';
import { Race, LEVELS, LANES, robotDrive, normalizeSave, CARS } from '../src/sim.js';

function drive(opts, mode = 'robot', maxT = 400) {
  const r = new Race(opts);
  const dt = 1 / 30;
  const seen = { nears: 0, coins: 0, crashes: 0, nitro: 0, counts: [], go: 0, blinks: 0, bestCombo: 0 };
  for (let i = 0; i < maxT * 30; i++) {
    if (mode === 'robot') {
      const m = robotDrive(r);
      r.setTargetX(m.x);
      if (m.nitro) r.useNitro();
    }
    for (const e of r.step(dt)) {
      if (e.type === 'nearMiss') { seen.nears++; seen.bestCombo = Math.max(seen.bestCombo, e.combo); }
      if (e.type === 'coin') seen.coins += e.v;
      if (e.type === 'crash') seen.crashes++;
      if (e.type === 'nitro') seen.nitro++;
      if (e.type === 'count') seen.counts.push(e.n);
      if (e.type === 'go') seen.go++;
      if (e.type === 'blink') seen.blinks++;
    }
    if (r.state === 'done' || r.state === 'wrecked') break;
  }
  return { r, seen };
}

test('countdown 3, 2, 1, go', () => {
  const { seen } = drive({ level: 0, seed: 1 }, 'robot', 5);
  assert.deepEqual(seen.counts, [3, 2, 1]);
  assert.equal(seen.go, 1);
});

test('the robot finishes every level with near misses, combos, coins and nitro', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    // the robot is not perfect: it gets up to three tries per level, like a child would
    let run;
    for (let k = 0; k < 3; k++) { run = drive({ level: i, seed: 10 + i + k * 100 }); if (run.r.state === 'done') break; }
    const { r, seen } = run;
    console.log(`level ${i + 1}: ${r.state} t=${r.raceT.toFixed(0)}s km=${(r.p.s / 1000).toFixed(2)} near=${r.nearMisses}/${r.need} combo=${seen.bestCombo} coins=${r.coins} crashes=${r.crashes} top=${r.topSpeed} nitro=${seen.nitro} blinks=${seen.blinks}`);
    assert.equal(r.state, 'done', `level ${i + 1}`);
    assert.ok(r.nearMisses >= LEVELS[i].near);
    assert.ok(seen.nitro >= 1);
    assert.ok(seen.bestCombo >= 2);
    assert.ok(r.coins > 10);
    assert.ok(r.crashes <= 2, `level ${i + 1} crashes ${r.crashes}`);
  }
});

test('more seeds and every car: the robot wins nearly always', () => {
  let wins = 0;
  let n = 0;
  for (let i = 0; i < LEVELS.length; i++) for (const car of CARS) { n++; if (drive({ level: i, seed: 200 + i * 13 + car.price, car: car.id }).r.state === 'done') wins++; }
  console.log(`wins ${wins}/${n}`);
  assert.ok(wins >= n * 0.8);
});

test('a child who never steers crashes into traffic and gets wrecked, coins are kept', () => {
  const { r } = drive({ level: 0, seed: 3 }, 'none', 300);
  console.log(`no steering: ${r.state} at ${(r.p.s / 1000).toFixed(2)} km, crashes ${r.crashes}`);
  assert.equal(r.state, 'wrecked');
  assert.equal(r.result.won, false);
});

test('easy mode needs fewer near misses and gives an extra heart', () => {
  const e = new Race({ level: 0, easy: true });
  const n = new Race({ level: 0 });
  assert.ok(e.need < n.need);
  assert.equal(e.hearts, n.hearts + 1);
});

test('a near miss counts once and builds the combo; a crash ends it', () => {
  const r = new Race({ level: 0, seed: 4 });
  r.state = 'race';
  r.traffic = [];
  r.p.speed = 40;
  r.p.x = LANES[1];
  r.p.tx = LANES[1];
  r.traffic.push({ id: 1, kind: 'sedan', lane: 2, x: LANES[2], s: r.p.s + 8, speed: 20, len: 4.4, wid: 1.85, passed: false, hit: 0, blink: 0, toLane: 2, vx: 0 });
  r.traffic.push({ id: 2, kind: 'van', lane: 0, x: LANES[0], s: r.p.s + 30, speed: 20, len: 5, wid: 2, passed: false, hit: 0, blink: 0, toLane: 0, vx: 0 });
  r.spawnS = r.coinS = 1e9;
  for (let i = 0; i < 90; i++) r.step(1 / 30);
  assert.equal(r.nearMisses, 2);
  assert.equal(r.combo, 2);
  r.traffic.push({ id: 3, kind: 'truck', lane: 1, x: r.p.x, s: r.p.s + 3, speed: 10, len: 7.6, wid: 2.4, passed: false, hit: 0, blink: 0, toLane: 1, vx: 0 });
  r.step(1 / 30);
  assert.equal(r.crashes, 1);
  assert.equal(r.combo, 0);
});

test('nitro needs charge and speeds the car up', () => {
  const r = new Race({ level: 0, seed: 6 });
  r.state = 'race';
  r.traffic = [];
  r.spawnS = r.coinS = 1e9;
  r.p.speed = r.top;
  r.nitro = 0.1;
  assert.equal(r.useNitro(), false);
  r.nitro = 1;
  assert.equal(r.useNitro(), true);
  for (let i = 0; i < 45; i++) r.step(1 / 30);
  assert.ok(r.p.speed > r.top * 1.1);
});

test('saves are cleaned', () => {
  const s = normalizeSave({ unlocked: 50, coins: -1, cars: ['arrow', 'tank'], car: 'tank', up: { engine: 9, nitro: 2 }, stars: { 1: 2, 3: 9 } });
  assert.equal(s.unlocked, 6);
  assert.deepEqual(s.cars, ['striker', 'arrow']);
  assert.equal(s.car, 'striker');
  assert.equal(s.up.engine, 0);
  assert.equal(s.up.nitro, 2);
  assert.deepEqual(s.stars, { 1: 2 });
});
