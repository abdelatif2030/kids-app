import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildRoad, levelLen, LEVELS, HALF, UPG, upgradeCost, normalizeSave } from '../src/sim.js';

/** A robot driver: heads for piles and the best gate, around walls. */
function drive(r) {
  let tx = 0;
  let bd = 1e9;
  for (const t of r.things) {
    if (t.done || t.z < r.z - 0.3 || t.z - r.z > 22) continue;
    const d = t.z - r.z;
    if (t.kind === 'gate') {
      const gs = r.things.filter((o) => o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01 && !o.done);
      const score = (g) => (g.op === 'mul' ? r.balls * (g.v - 1) : g.v);
      const best = gs.sort((a, b) => score(b) - score(a))[0];
      if (best && score(best) > 0 && d < bd) { bd = d; tx = best.x; }
      else if (best && d < bd) { bd = d; tx = best.x > 0 ? -3 : 3; }
    } else if (t.kind === 'pile' && d < bd) { bd = d; tx = t.x; }
    else if (t.kind === 'wall' && d < 7 && Math.abs(t.x - r.x) < t.w / 2 + 1.2) { tx = t.x > 0 ? t.x - t.w / 2 - 1.4 : t.x + t.w / 2 + 1.4; bd = 0; }
  }
  r.steer(tx / (HALF - 0.6));
}

function play(level, up) {
  const r = new Run({ level, seed: 5, up });
  let t = 0;
  while (r.state !== 'done' && t < 300) { drive(r); r.step(1 / 30); t += 1 / 30; }
  return { r, t };
}

test('twelve levels, each road longer and crazier, ending at the bank', () => {
  assert.equal(LEVELS, 12);
  for (let i = 0; i < 12; i++) { const road = buildRoad(i, 5); assert.equal(road.L, levelLen(i)); assert.ok(road.things.some((t) => t.kind === 'gate')); assert.ok(road.things.some((t) => t.kind === 'pile')); }
  assert.ok(levelLen(11) > levelLen(0) * 2);
});

test('a robot driver banks balls and coins on every level', () => {
  let prev = 0;
  for (let i = 0; i < 12; i++) {
    const { r } = play(i, { start: Math.min(8, i >> 1) });
    console.log(`level ${i + 1}: balls ${r.balls} (peak ${r.peak}), coins ${r.coins}`);
    assert.equal(r.state, 'done');
    assert.ok(r.coins > 0);
    prev = r.coins;
  }
  assert.ok(prev > 0);
});

test('piles add balls, x3 multiplies, a wall knocks some out but never all; upgrades widen and cost coins', () => {
  const r = new Run({ level: 0, seed: 1 });
  r.things = [{ id: 1, kind: 'pile', x: 0, z: 3, n: 30, w: 1.6 }, { id: 2, kind: 'gate', x: 0, z: 6, w: 3, op: 'mul', v: 3 }, { id: 3, kind: 'wall', x: 0, z: 9, w: 3, loss: 0.2 }];
  const b0 = r.balls;
  for (let i = 0; i < 30 * 2; i++) r.step(1 / 30);
  assert.equal(r.balls, (b0 + 30) * 3 - Math.round((b0 + 30) * 3 * 0.2));
  assert.ok(r.balls > 0);
  assert.equal(upgradeCost('wide', 0), UPG[1].base);
  assert.equal(upgradeCost('wide', 99), null);
  const w = new Run({ up: { wide: 3 } });
  assert.ok(w.reach > new Run().reach);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 12); });
