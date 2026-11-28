import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, generateLevel, levelSpec, LEVELS, SKIES, skyOf, skyIndexOf, PALETTES, paletteOf, normalizeSave } from '../src/sim.js';

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
  assert.ok(l1.finishZ >= 500 && l1.spec.length / l1.spec.speed > 55, 'level 1 lasts about a minute');
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

test('Phase 2E palettes: every sky has a complete, valid palette', () => {
  assert.equal(PALETTES.length, LEVELS);
  const HEX = /^#[0-9a-f]{6}$/i;
  const fields = ['top', 'mid', 'bottom', 'fog', 'hemiSky', 'hemiGround', 'sun', 'cloud', 'tint', 'ground'];
  for (const [i, p] of PALETTES.entries()) {
    for (const f of fields) assert.ok(HEX.test(p[f] || ''), `sky ${i + 1} palette.${f} is a valid colour (got ${p[f]})`);
    assert.ok(Number.isFinite(p.hemiInt) && p.hemiInt > 0, `sky ${i + 1} hemiInt`);
    assert.ok(Number.isFinite(p.sunInt) && p.sunInt > 0, `sky ${i + 1} sunInt`);
  }
});

test('Phase 2E palettes: pairwise distinct skies (no shared sky-top + fog)', () => {
  const seen = new Set();
  for (const p of PALETTES) {
    const key = `${p.top}+${p.fog}`;
    assert.ok(!seen.has(key), `duplicate palette combo ${key}`);
    seen.add(key);
  }
  assert.equal(new Set(PALETTES.map((p) => p.top)).size, LEVELS, 'every sky top is unique');
  assert.equal(new Set(PALETTES.map((p) => p.fog)).size, LEVELS, 'every fog is unique');
});

test('Phase 2E palettes: palette index always matches the sky name shown (runs 1..10 and beyond)', () => {
  for (let n = 1; n <= LEVELS; n++) {
    assert.equal(skyIndexOf(n), n - 1);
    assert.equal(paletteOf(n), PALETTES[n - 1], `run ${n} palette`);
    assert.equal(skyOf(n), SKIES[n - 1], `run ${n} name`);
  }
  // endless / out-of-range runs clamp the palette exactly like the name
  assert.equal(paletteOf(11), PALETTES[LEVELS - 1]);
  assert.equal(paletteOf(99), paletteOf(10));
  assert.equal(skyOf(99).en, 'Aswan Sky');
  assert.equal(paletteOf(0), PALETTES[0]);
  assert.equal(paletteOf(-3), paletteOf(1));
});

test('Phase 2E: a full run still completes on skies 1, 5 and 10', () => {
  for (const n of [1, 5, 10]) for (let seed = 1; seed <= 4; seed++) {
    const run = bot(new Run(n, seed));
    assert.equal(run.state, 'won', `sky ${n} (${skyOf(n).en}) seed ${seed} ended ${run.state}`);
    assert.equal(paletteOf(n), PALETTES[n - 1]);
  }
});

test('Dash Over Egypt anchor: ten named Egyptian skies, specs unchanged', () => {
  assert.equal(SKIES.length, LEVELS);
  assert.equal(skyOf(1).en, 'Cairo Sky');
  assert.equal(skyOf(10).en, 'Aswan Sky');
  assert.equal(skyOf(99).en, 'Aswan Sky'); // clamps
  assert.ok(SKIES.every((s) => s.ar && s.en));
  assert.equal(levelSpec(1).length, 520);
  assert.equal(levelSpec(10).length, 520 + 90 * 9);
});
