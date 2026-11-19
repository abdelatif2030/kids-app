import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Village, UPGRADES, LANTERN_AT, SPRING, SIZE, normalizeSave } from '../src/sim.js';

const go = (me, tx, ty) => { const d = Math.hypot(tx - me.x, ty - me.y); return d < 0.5 ? { dx: 0, dy: 0 } : { dx: (tx - me.x) / d, dy: (ty - me.y) / d }; };

/** A robot caretaker: buys the next upgrade when it can, fetches slices, feeds the spring, picks up coins. */
function robot(v) {
  const me = v.me;
  const u = v.nextUpgrade;
  if (u && v.coins >= u.cost) return go(me, u.x, u.y);
  const want = Math.min(v.stackMax, 5);
  if (me.stack >= want || (me.stack > 0 && v.heat < 0.35)) return go(me, SPRING.x, SPRING.y + SPRING.r + 0.8);
  if (v.piles.length) {
    let best = null; let bd = 1e9;
    for (const p of v.piles) { const d = Math.hypot(p.x - me.x, p.y - me.y); if (d < bd) { bd = d; best = p; } }
    if (bd < 14 && (me.stack >= 2 || v.heat > 0.55)) return go(me, best.x, best.y);
  }
  let m = v.mills[0]; let bt = -1;
  for (const k of v.mills) { const score = k.tray - Math.hypot(k.pad.x - me.x, k.pad.y - me.y) * 0.1; if (score > bt) { bt = score; m = k; } }
  if (me.stack > 0 && m.tray === 0) return go(me, SPRING.x, SPRING.y + SPRING.r + 0.8);
  return go(me, m.pad.x, m.pad.y);
}

function run(seed, easy = false, limit = 1500) {
  const v = new Village({ seed, easy });
  let t = 0;
  while (v.state !== 'done' && t < limit) { v.step(1 / 30, robot(v)); t += 1 / 30; }
  return { v, t };
}

test('a robot caretaker lights all 10 lanterns and finishes the village', () => {
  const { v, t } = run(3);
  assert.equal(v.state, 'done', `not done after ${t | 0}s, lit ${v.lit}, thawed ${v.thawed}, up ${v.up}`);
  assert.equal(v.lit, LANTERN_AT.length);
  assert.ok(v.thawed >= LANTERN_AT[LANTERN_AT.length - 1]);
  console.log(`finished in ${t.toFixed(0)}s, thawed ${v.thawed}, coins earned ${v.coinsTotal}, upgrades ${v.up}/${UPGRADES.length}`);
  assert.ok(t < 600, `too slow: ${t}`);
});

test('the easy mode (ages 3-4) finishes too, and for several seeds', () => {
  for (const seed of [1, 2, 5, 11]) {
    const { v, t } = run(seed, seed % 2 === 0);
    assert.equal(v.state, 'done', `seed ${seed} not done after ${t | 0}s`);
  }
});

test('deterministic with a seed', () => {
  const a = run(9).v;
  const b = run(9).v;
  assert.equal(a.time, b.time);
  assert.equal(a.coinsTotal, b.coinsTotal);
});

test('the mill tray fills up, standing at the tray picks slices into the stack', () => {
  const v = new Village({ seed: 1 });
  const m = v.mills[0];
  v.me.x = m.pad.x; v.me.y = m.pad.y;
  for (let i = 0; i < 90; i++) v.step(1 / 30);
  assert.ok(v.me.stack > 0);
  assert.ok(v.me.stack <= v.stackMax);
  // away from the mill it fills up again by itself, but only up to the tray limit
  v.me.stack = 0; v.me.x = 3; v.me.y = 3;
  for (let i = 0; i < 30 * 40; i++) v.step(1 / 30);
  assert.equal(m.tray, 8);
});

test('slices dropped at the spring heat the water; heat falls slowly and nothing breaks at zero', () => {
  const v = new Village({ seed: 1 });
  v.heat = 0.2;
  v.me.stack = 5;
  v.me.x = SPRING.x; v.me.y = SPRING.y + SPRING.r + 0.5;
  for (let i = 0; i < 30; i++) v.step(1 / 30);
  assert.equal(v.me.stack, 0);
  assert.ok(v.heat > 0.45);
  v.me.x = 2; v.me.y = 2;
  for (let i = 0; i < 30 * 200; i++) v.step(1 / 30);
  assert.ok(v.heat >= 0 && v.heat < 0.01);
});

test('guests thaw even in cold water (slowly), then leave coins; nobody is lost', () => {
  const v = new Village({ seed: 2 });
  v.heat = 0;
  v.me.x = 2; v.me.y = 2;
  for (let i = 0; i < 30 * 120; i++) v.step(1 / 30);
  assert.ok(v.thawed >= 1, 'a cold spring still thaws, slowly');
  assert.ok(v.piles.length >= 1 || v.coins > 0);
  const hot = new Village({ seed: 2 });
  hot.me.x = 2; hot.me.y = 2;
  let h = 0;
  for (let i = 0; i < 30 * 120; i++) { hot.heat = 1; hot.step(1 / 30); h++; }
  assert.ok(hot.thawed > v.thawed);
  void h;
});

test('walking onto the glowing pad with enough coins buys the next upgrade; without coins nothing happens', () => {
  const v = new Village({ seed: 1 });
  const u = UPGRADES[0];
  v.me.x = u.x; v.me.y = u.y;
  v.step(0.1);
  assert.equal(v.up, 0);
  v.coins = 20;
  v.step(0.1);
  assert.equal(v.up, 1);
  assert.equal(v.teahouse, true);
  assert.equal(v.coins, 20 - u.cost);
});

test('the tea house adds a second coin pile per visitor', () => {
  const v = new Village({ seed: 4 });
  v.teahouse = true;
  v.heat = 1;
  v.me.x = 2; v.me.y = 2;
  let tea = 0;
  for (let i = 0; i < 30 * 90; i++) { v.heat = 1; for (const e of v.step(1 / 30)) if (e.type === 'tea') tea++; }
  assert.ok(tea >= 1);
});

test('lanterns light when enough visitors have thawed; the player never leaves the field or the pool', () => {
  const v = new Village({ seed: 1 });
  v.thawed = LANTERN_AT[2];
  const ev = v.step(0.05);
  assert.equal(v.lit, 3);
  assert.equal(ev.filter((e) => e.type === 'lantern').length, 3);
  v.me.x = SPRING.x; v.me.y = SPRING.y;
  v.step(0.05, { dx: 1, dy: 0 });
  assert.ok(Math.hypot(v.me.x - SPRING.x, v.me.y - SPRING.y) > SPRING.r - 0.9);
  for (let i = 0; i < 200; i++) v.step(1 / 30, { dx: -1, dy: -1 });
  assert.ok(v.me.x >= 1.5 && v.me.y >= 1.5);
  for (let i = 0; i < 400; i++) v.step(1 / 30, { dx: 1, dy: 1 });
  assert.ok(v.me.x <= SIZE.w - 1.5 && v.me.y <= SIZE.h - 1.5);
});

test('the helper fox carries slices from a tray to the spring', () => {
  const v = new Village({ seed: 1 });
  v.coins = 500; v.up = UPGRADES.findIndex((u) => u.id === 'helper');
  const u = v.nextUpgrade;
  v.me.x = u.x; v.me.y = u.y;
  v.step(0.1);
  assert.ok(v.helper);
  v.me.x = 3; v.me.y = 3;
  v.heat = 0.1;
  let drops = 0;
  for (let i = 0; i < 30 * 30; i++) for (const e of v.step(1 / 30)) if (e.type === 'drop') drops++;
  assert.ok(drops > 0);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).finished, 0);
  assert.equal(normalizeSave({ bestTime: 'x', finished: -4 }).bestTime, 0);
  assert.equal(normalizeSave({ bestTime: 200.7 }).bestTime, 200);
});
