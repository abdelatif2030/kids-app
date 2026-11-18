import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, generateLevel, levelSpec, LEVELS, normalizeSave } from '../src/sim.js';

/** A simple robot: looks ahead in its own lane; jumps over low hazards and gaps, slides under bars. */
function bot(run, dt = 1 / 60, maxSec = 400) {
  let t = 0;
  while (run.state === 'run' && t < maxSec) {
    const look = run.speed * 0.42;
    for (const it of run.level.items) {
      if (it.z < run.z - 2) continue;
      if (it.z > run.z + look + 1) break;
      if (it.lane !== run.lane) continue;
      const d = it.z - run.z;
      if (['barrier', 'slime', 'spike'].includes(it.type) && d > 0 && d < look) run.jump();
      if ((it.type === 'gap' || it.type === 'crumble') && d > -0.6 && d < look * 0.55 + 0.3) run.jump();
      if (it.type === 'bar' && d > 0 && d < run.speed * 0.28) run.doSlide();
    }
    run.step(dt);
    t += dt;
  }
  return run;
}

test('levels: ten, a calm start, a finish gate, hazards only from the levels that introduce them', () => {
  assert.equal(LEVELS, 10);
  const l1 = generateLevel(1, 5);
  assert.ok(l1.items.some((i) => i.type === 'barrier') && !l1.items.some((i) => ['slime', 'bar', 'gap', 'crumble', 'spike', 'wind'].includes(i.type)));
  assert.ok(l1.items.filter((i) => i.type === 'coin').length > 30);
  const l10 = generateLevel(10, 5);
  for (const k of ['slime', 'bar', 'spike']) assert.ok(l10.items.some((i) => i.type === k), k);
  assert.ok(l10.walls.length >= 1);
  assert.ok(l10.finishZ > l1.finishZ);
  assert.ok(l1.items.every((i) => i.z >= 30), 'nothing in the first 30 m');
  assert.equal(JSON.stringify(generateLevel(3, 9)), JSON.stringify(generateLevel(3, 9)));
});

for (const easy of [false, true]) {
  test(`a robot that jumps and slides finishes every level with its hearts (${easy ? 'easy' : 'normal'})`, () => {
    for (let n = 1; n <= LEVELS; n++) for (let seed = 1; seed <= 12; seed++) {
      const run = bot(new Run(n, seed, easy));
      assert.equal(run.state, 'won', `level ${n} seed ${seed} ended ${run.state} with ${run.hearts} hearts at z=${run.z.toFixed(0)}`);
      assert.ok(run.coins > 0);
    }
  });
}

test('standing still in a hazard lane costs a heart; three hits end the run; a shield takes one hit; a heart is lost only once per hit', () => {
  const run = new Run(1, 3);
  const bar = run.level.items.find((i) => i.type === 'barrier');
  run.lane = bar.lane;
  let hit = 0;
  while (run.state === 'run' && run.z < bar.z + 1) for (const e of run.step(1 / 60)) if (e.type === 'hit') hit++;
  assert.equal(hit, 1);
  assert.equal(run.hearts, run.spec.hearts - 1);
  const run2 = new Run(3, 3);
  run2.shield = true;
  const b2 = run2.level.items.find((i) => i.type === 'barrier');
  run2.lane = b2.lane;
  const ev = [];
  while (run2.z < b2.z + 1) ev.push(...run2.step(1 / 60));
  assert.ok(ev.some((e) => e.type === 'shieldpop'));
  assert.equal(run2.hearts, run2.spec.hearts);
});

test('a gap swallows a kid who does not jump: a heart is lost and the kid lands after the gap', () => {
  const run = new Run(3, 11);
  const gap = run.level.items.find((i) => i.type === 'gap');
  assert.ok(gap);
  run.lane = gap.lane;
  let fell = false;
  while (run.state === 'run' && run.z < gap.z + gap.len + 2) for (const e of run.step(1 / 60)) if (e.type === 'fall') fell = true;
  assert.ok(fell);
  assert.ok(run.z >= gap.z + gap.len);
});

test('side walls only exist in their segment; magnet pulls the coins of the next lane; slow motion slows the run', () => {
  const run = new Run(6, 4);
  assert.equal(run.moveLane(-1), true);
  assert.equal(run.moveLane(-1), false, 'no wall at the start');
  const w = run.level.walls[0];
  assert.ok(w);
  run.z = w.z0 + 1; run.lane = -1;
  assert.equal(run.moveLane(-1), true);
  assert.equal(run.lane, -2);
  const s0 = run.speed;
  run.slow = 3;
  assert.ok(run.speed < s0);
});

test('save normalising is safe', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, coins: 0, muted: false });
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, LEVELS);
  assert.equal(levelSpec(1, true).hearts, 5);
});
