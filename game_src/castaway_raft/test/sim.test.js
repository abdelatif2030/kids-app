import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Voyage, LEVELS, COST, normalizeSave } from '../src/sim.js';

/** A robot castaway: hooks the item closest to the raft, builds what the level needs, scares the shark. */
function play(level, opts = {}) {
  const v = new Voyage({ level, easy: opts.easy, seed: opts.seed ?? 3 });
  let t = 0;
  while (v.state !== 'done' && t < 900) {
    if (v.hook.phase === 'idle') {
      const sh = v.shark;
      if (v.level.shark && (sh.state === 'circle' || sh.state === 'bite')) v.throwHook(sh.x, sh.y);
      else {
        const cand = v.items.filter((i) => i.y > 0.15 && i.y < 0.85 && !i.grabbed).sort((a, b) => Math.hypot(a.x - 0.5, a.y - 0.7) - Math.hypot(b.x - 0.5, b.y - 0.7))[0];
        if (cand) v.throwHook(cand.x, cand.y + 0.01);
      }
    }
    const need = v.level.need;
    for (const k of ['sail', 'fish', 'hut']) if (need[k] && !v.built[k]) v.build(k);
    if (need.tile && v.extra.tile < need.tile) v.build('tile');
    v.step(1 / 30);
    t += 1 / 30;
  }
  return { v, t };
}

test('eight levels, each a new stretch of sea that ends at an island', () => {
  assert.equal(LEVELS.length, 8);
  for (const l of LEVELS) assert.ok(l.len > 30 && l.need && l.ar && l.en);
});

test('a robot castaway reaches every island with stars', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const { v, t } = play(i);
    assert.equal(v.state, 'done', `level ${i + 1} not finished after ${t | 0}s`);
    assert.ok(v.stars >= 1);
    assert.ok(v.mustDone);
    console.log(`level ${i + 1}: ${t.toFixed(0)}s, stars ${v.stars}, bottles ${v.bottles}/${v.level.bottles}, lost ${v.lost}`);
  }
});

test('the raft waits at the island until the building list is done', () => {
  const v = new Voyage({ level: 0 });
  for (let i = 0; i < 30 * 60; i++) v.step(1 / 30);
  assert.equal(v.progress, 1);
  assert.equal(v.state, 'sail');
  v.res.wood = 3;
  assert.ok(v.build('tile'));
  for (let i = 0; i < 30 * 4; i++) v.step(1 / 30);
  assert.equal(v.state, 'done');
});

test('a hook grabs what is near and brings it to the raft', () => {
  const v = new Voyage({ level: 0 });
  v.items.push({ id: 99, kind: 'plank', x: 0.5, y: 0.4, vy: 0, ph: 0 });
  assert.ok(v.throwHook(0.5, 0.4));
  assert.equal(v.throwHook(0.2, 0.2), false); // already out
  for (let i = 0; i < 90; i++) v.step(1 / 30);
  assert.equal(v.res.wood, 1);
  assert.equal(v.hook.phase, 'idle');
});

test('building costs resources, a sail speeds the raft, the shark takes one log and can be scared', () => {
  const v = new Voyage({ level: 2 });
  assert.equal(v.canBuild('sail'), false);
  v.res.wood = 5;
  v.res.crate = 1;
  assert.ok(v.build('sail'));
  assert.equal(v.res.wood, 3);
  assert.equal(v.speed, 1.6);
  assert.equal(v.build('sail'), false);
  assert.deepEqual(COST.tile, { wood: 3 });
  // bitten
  v.progress = 0.5;
  v.shark.state = 'bite';
  v.shark.t = 1.7;
  v.step(0.2);
  assert.equal(v.res.wood, 2);
  assert.equal(v.lost, 1);
  // scared
  const w = new Voyage({ level: 2 });
  w.progress = 0.5;
  w.shark.state = 'circle';
  w.shark.x = 0.7;
  w.shark.y = 0.6;
  w.throwHook(0.7, 0.6);
  for (let i = 0; i < 40; i++) w.step(1 / 30);
  assert.equal(w.shark.state === 'flee' || w.shark.state === 'none', true);
  assert.equal(w.lost, 0);
});

test('damaged saves load safely', () => {
  assert.deepEqual(normalizeSave(null).stars, {});
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 8);
  assert.equal(normalizeSave({ unlocked: 'x', stars: { 1: 9 } }).unlocked, 1);
});
