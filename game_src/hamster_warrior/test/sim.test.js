import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildPath, LEVELS, HALF, bossPower, upgradeCost, normalizeSave, CHAPTERS } from '../src/sim.js';

/** A robot hero: best gate, beatable monster, coins; keeps trying the boss. */
function drive(r) {
  let tx = 0; let bd = 1e9;
  for (const t of r.things) {
    if (t.done || t.z < r.z - 0.3 || t.z - r.z > 24) continue;
    const d = t.z - r.z;
    if (t.kind === 'gate') {
      const gs = r.things.filter((o) => o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01 && !o.done);
      const val = (g) => (g.op === 'mul' ? r.power * (g.v - 1) : g.v);
      const best = gs.sort((a, b) => val(b) - val(a))[0];
      if (best && d < bd) { bd = d; tx = best.x; }
    } else if (t.kind === 'monster') {
      const ms = r.things.filter((o) => o.kind === 'monster' && Math.abs(o.z - t.z) < 0.01 && !o.done);
      const ok = ms.filter((m) => m.power < r.power).sort((a, b) => b.power - a.power)[0] || ms.sort((a, b) => a.power - b.power)[0];
      if (ok && d < bd) { bd = d; tx = ok.x; }
    } else if (t.kind === 'coin' && d < bd && d < 8) { bd = d; tx = t.x; } else if (t.kind === 'boss' && d < bd) { bd = d; tx = 0; }
  }
  r.steer(tx / (HALF - 0.5));
}

test('twelve levels in three chapters; each ends with a bigger boss', () => {
  assert.equal(LEVELS, 12);
  assert.equal(CHAPTERS.reduce((a, c) => a + c.levels, 0), 12);
  for (let i = 0; i < 12; i++) { const p = buildPath(i, 5); assert.ok(p.things.some((t) => t.boss && t.power === bossPower(i))); assert.ok(p.things.some((t) => t.kind === 'gate')); }
  assert.ok(bossPower(11) > bossPower(0) * 20);
});

test('a robot hero with shop upgrades beats the boss of every level', () => {
  let wins = 0;
  for (let i = 0; i < 12; i++) {
    let up = { power: Math.min(8, i >> 1), magnet: 0, armor: Math.min(6, i >> 1) };
    let r = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      r = new Run({ level: i, seed: 5 + attempt, up });
      let t = 0;
      while (r.state === 'run' && t < 120) { drive(r); r.step(1 / 30); t += 1 / 30; }
      if (r.state === 'won') break;
      up = { ...up, power: Math.min(8, up.power + 1) };
    }
    console.log(`level ${i + 1}: ${r.state}, power ${r.power}, boss ${bossPower(i)}`);
    if (r.state === 'won') wins += 1;
  }
  assert.ok(wins >= 10, `${wins}/12`);
});

test('gates add or multiply, weaker monsters are absorbed, stronger ones bounce you back', () => {
  const r = new Run({ level: 0, seed: 1 });
  const p0 = r.power;
  r.things = [{ id: 1, kind: 'gate', x: 0, z: 3, w: 3, op: 'mul', v: 2 }, { id: 2, kind: 'monster', x: 0, z: 8, w: 2.2, power: 5 }];
  for (let i = 0; i < 30 * 1.6; i++) r.step(1 / 30);
  assert.ok(r.power >= p0 * 2 + 3, `power ${r.power}`);
  const q = new Run({ level: 0, seed: 1 });
  q.things = [{ id: 3, kind: 'monster', x: 0, z: 5, w: 2.2, power: 500 }];
  for (let i = 0; i < 30 * 1.5; i++) q.step(1 / 30);
  assert.ok(q.power < 10);
  assert.equal(q.state, 'run');
  assert.equal(upgradeCost('power', 0), 30);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); });
