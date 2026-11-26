import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, STAGES } from '../src/sim.js';

test('the sunset race is faster than before (cruise about 130 km/h, 112 km/h for the youngest) and the rival keeps up', () => {
  for (const [easy, minKmh] of [[false, 125], [true, 108]]) {
    const r = new Race({ stage: 0, easy, seed: 3 });
    for (let i = 0; i < 60 * 14; i++) r.step(1 / 60); // the count-down (3 s), then 11 s of driving
    assert.ok(r.p.v * 3.6 >= minKmh, `easy=${easy}: ${(r.p.v * 3.6).toFixed(0)} km/h`);
  }
  for (const s of STAGES) assert.ok(s.rival >= 35, `rival ${s.id}`);
});
