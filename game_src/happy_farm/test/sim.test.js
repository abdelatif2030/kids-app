import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, CELL, normalizeSave, emptySave, buyUpgrade, finishLevel, upgradeCost, barnSpot } from '../src/data.js';
import { Farm } from '../src/sim.js';

// A robot farmer: lawnmower passes over each field, around rocks, to the grate when the trailer is full, then a sweep
// for whatever is left.
function robotPlay(level, up = {}, maxTime = 900) {
  const farm = new Farm(level, up);
  const wps = [];
  const gap = farm.cutter * 0.8;
  for (const [fx, fz, fw, fd] of level.fields) {
    let k = 0;
    for (let z = fz + gap / 2; z < fz + fd; z += gap, k++) {
      const a = [fx - 2.2, z];
      const b = [fx + fw + 2.2, z];
      wps.push(...(k % 2 ? [b, a] : [a, b]));
    }
  }
  let wi = 0;
  let t = 0;
  let mode = 'mow';
  const dt = 1 / 30;
  const pad = farm.pad;
  let stuck = 0;
  let last = [farm.t.x, farm.t.z];
  while (!farm.done && t < maxTime) {
    let target;
    if (farm.full || mode === 'unload' || (farm.progress >= 0.95 && farm.load > 0)) {
      mode = 'unload';
      target = Math.hypot(farm.t.x - pad.x, farm.t.z - (pad.z - 3)) > 2 && farm.t.z < pad.z - 3 ? [pad.x, pad.z - 3] : [pad.x, pad.z];
      if (farm.load === 0) mode = 'mow';
    } else if (wi < wps.length) {
      target = wps[wi];
      if (Math.hypot(farm.t.x - target[0], farm.t.z - target[1]) < 1) wi++;
    } else {
      // sweep: the nearest uncut cell
      let best = null;
      let bd = 1e9;
      for (const c of farm.cells) {
        if (c.cut) continue;
        const d = (c.x - farm.t.x) ** 2 + (c.z - farm.t.z) ** 2;
        if (d < bd) { bd = d; best = c; }
      }
      if (!best) target = [pad.x, pad.z];
      else {
        // aim so that the cutter (1.8 m ahead) passes over the cell
        const dx = best.x - farm.t.x;
        const dz = best.z - farm.t.z;
        const d = Math.hypot(dx, dz) || 1;
        target = d < 2.2 ? [best.x + (dx / d) * 2, best.z + (dz / d) * 2] : [best.x, best.z];
      }
    }
    let ix = target[0] - farm.t.x;
    let iz = target[1] - farm.t.z;
    const l = Math.hypot(ix, iz) || 1;
    ix /= l;
    iz /= l;
    // steer around rocks: if one lies close to the line ahead, aim beside it (the side it is not on)
    for (const r of farm.rocks) {
      const rx = r.x - farm.t.x;
      const rz = r.z - farm.t.z;
      const ahead = rx * ix + rz * iz;
      const side = -rx * iz + rz * ix;
      if (ahead > -0.5 && ahead < 5 && Math.abs(side) < 2.2) {
        const s = side >= 0 ? -1 : 1; // perpendicular, away from the rock
        const px = -iz * s;
        const pz = ix * s;
        const w = (2.2 - Math.abs(side)) / 2.2;
        ix = ix * (1 - w) + px * (0.4 + w);
        iz = iz * (1 - w) + pz * (0.4 + w);
      }
    }
    farm.step(dt, { x: ix, z: iz });
    t += dt;
    // unstick: if it hardly moved for 3 s, skip this waypoint
    if (Math.hypot(farm.t.x - last[0], farm.t.z - last[1]) > 0.5) { last = [farm.t.x, farm.t.z]; stuck = 0; } else if ((stuck += dt) > 3) { stuck = 0; if (mode === 'mow' && wi < wps.length) wi++; }
  }
  return { farm, t };
}

for (let i = 0; i < LEVELS.length; i++) {
  const lv = LEVELS[i];
  test(`farm ${lv.id} (${lv.en}): fields, rocks, pen and barn fit inside the fence`, () => {
    const { barn, pad } = barnSpot(lv);
    const inside = (x, z) => Math.abs(x) <= lv.w / 2 && Math.abs(z) <= lv.d / 2;
    for (const [x, z, w, d] of lv.fields) assert.ok(inside(x, z) && inside(x + w, z + d), 'field inside');
    for (const [x, z] of lv.rocks) assert.ok(inside(x, z));
    assert.ok(inside(barn.x, barn.z) && inside(pad.x + pad.w / 2, pad.z + pad.d / 2));
    if (lv.pen) assert.ok(inside(lv.pen[0], lv.pen[1]) && inside(lv.pen[0] + lv.pen[2], lv.pen[1] + lv.pen[3]), 'pen inside');
    // nothing overlaps the grate
    for (const [x, z, w, d] of lv.fields) assert.ok(z + d < pad.z - pad.d, 'fields stay above the grate');
    const farm = new Farm(lv);
    assert.ok(farm.total > 400, `${farm.total} crop cells`);
  });

  test(`farm ${lv.id} (${lv.en}): a robot farmer harvests it all and finishes`, () => {
    // later farms are played with a few upgrades, as a child would have by then
    const u = Math.min(4, i);
    const { farm, t } = robotPlay(lv, { cutter: u, engine: u, trailer: u, barn: 0 });
    console.log(`  farm ${lv.id}: ${farm.done ? 'done' : 'NOT done'} in ${t.toFixed(0)} s, ${(farm.progress * 100).toFixed(1)}% cut, ${farm.coins} coins, ${farm.bumps} bumps, ${farm.total} cells, cutter ${farm.cutter} m, trailer ${farm.capacity}`);
    assert.ok(farm.done, `${(farm.progress * 100).toFixed(1)}% cut, load ${farm.load.toFixed(0)}`);
    assert.ok(farm.coins > 50);
  });
}

test('the trailer stops taking crop when full, and the grate empties it for coins', () => {
  const farm = new Farm(LEVELS[0]);
  farm.capacity = 30;
  farm.t.x = -6;
  farm.t.z = -6;
  farm.t.heading = 0;
  for (let i = 0; i < 400 && !farm.full; i++) farm.step(1 / 30, { x: 1, z: 0 });
  assert.ok(farm.full);
  assert.equal(farm.load, 30);
  const cut = farm.cutCount;
  for (let i = 0; i < 60; i++) farm.step(1 / 30, { x: 1, z: 0 });
  assert.equal(farm.cutCount, cut, 'no cutting while full');
  farm.t.x = farm.pad.x;
  farm.t.z = farm.pad.z;
  for (let i = 0; i < 120; i++) farm.step(1 / 30, { x: 0, z: 0 });
  assert.equal(farm.load, 0);
  assert.ok(farm.coins >= 4);
  assert.equal(farm.full, false);
});

test('rocks only bump (never damage), and animals step away and can be penned', () => {
  const farm = new Farm(LEVELS[2]);
  const r = farm.rocks[0];
  farm.t.x = r.x - 6;
  farm.t.z = r.z;
  farm.t.heading = 0;
  for (let i = 0; i < 200; i++) farm.step(1 / 30, { x: 1, z: 0 });
  assert.ok(farm.bumps >= 1);
  assert.ok(farm.t.x < r.x, 'it never drives through a rock');
  const a = farm.animals[0];
  farm.t.x = a.x - 2;
  farm.t.z = a.z;
  const before = a.x;
  for (let i = 0; i < 30; i++) farm.step(1 / 30, { x: 0, z: 0 });
  assert.ok(a.x > before, 'the sheep stepped away');
  a.x = farm.pen.x + 1;
  a.z = farm.pen.z + 1;
  farm.step(1 / 30, { x: 0, z: 0 });
  assert.ok(a.penned);
});

test('save: damaged data loads safely; upgrades cost coins; farms open one by one', () => {
  assert.deepEqual(normalizeSave(42), emptySave());
  const s = normalizeSave({ coins: -1, unlocked: 99, up: { cutter: 50 }, stars: { 1: 9 } });
  assert.equal(s.coins, 0);
  assert.equal(s.unlocked, LEVELS.length);
  assert.equal(s.up.cutter, 6);
  assert.equal(s.stars[1], 3);
  const save = emptySave();
  assert.equal(buyUpgrade(save, 'cutter'), 'poor');
  save.coins = upgradeCost('cutter', 0);
  assert.equal(buyUpgrade(save, 'cutter'), 'bought');
  assert.equal(save.coins, 0);
  assert.equal(finishLevel(save, 0, 2).opened, true);
  assert.equal(save.unlocked, 2);
  finishLevel(save, 0, 1);
  assert.equal(save.stars[1], 2, 'best stars kept');
  assert.equal(CELL, 0.5);
});
