import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildStage, buildStop, STOPS, BADGES, checkBadges, BOSS_KINDS, normalizeSave, buyUpgrade, buyPaint, qualifies, addScore, planeStats, ENEMY, UPGRADES, PAINTS, W } from '../src/sim.js';

/** A robot: slides under the nearest pirate and keeps firing; collects cages and capsules on the way. */
function bot(run, maxSec = 400, dt = 1 / 30) {
  let t = 0;
  while (run.state === 'play' && t < maxSec) {
    let target = run.pickups.find((p) => p.kind === 'cage' || p.kind === 'capsule');
    if (!target) target = run.enemies.slice().sort((a, b) => b.y - a.y)[0];
    const tx = target ? target.x : W / 2;
    const ty = target && (target.kind === 'cage' || target.kind === 'capsule') ? target.y : 125;
    run.step(dt, { tx, ty: Math.max(ty, 110), fire: true });
    t += dt;
  }
  return t;
}

test('every stage has a sorted timeline; stage 3 ends with the pirate captain; every stage frees a different songbird', () => {
  const birds = [];
  for (const n of [1, 2, 3]) {
    const ev = buildStage(n, 0, 5);
    assert.ok(ev.length > 12);
    for (let i = 1; i < ev.length; i++) assert.ok(ev[i].t >= ev[i - 1].t);
    birds.push(...ev.filter((e) => e.type === 'cage').map((e) => e.bird));
    assert.equal(ev.some((e) => e.type === 'boss'), n === 3);
    assert.ok(ev.some((e) => e.type === 'capsule'));
  }
  assert.deepEqual(birds.sort(), ['canary', 'jay', 'robin']);
  assert.ok(buildStage(1, 2, 5).length > buildStage(1, 0, 5).length, 'the loop adds pirates');
});

test('an invulnerable robot clears all three stages, defeats the boss, gets a rank each time and starts the harder loop', () => {
  const run = new Run(normalizeSave(null), 11);
  run.hp = 1e9; run.stats.maxHp = 1e9;
  let stages = 0;
  for (let guard = 0; guard < 8 && stages < 4; guard++) {
    const secs = bot(run);
    assert.ok(secs < 399, `stage ${run.stage} should end (state ${run.state})`);
    if (run.state === 'stageclear') { stages++; assert.ok(['S', 'A', 'B', 'C'].includes(run.ranks.at(-1).rank)); run.nextStage(); }
  }
  assert.equal(stages, 4);
  assert.equal(run.loop, 1);
  assert.equal(run.stage, 2);
  assert.ok(run.score > 5000 && run.feathers > 0 && run.pearls > 0);
  assert.ok(run.wings.length >= 1, 'a caged songbird was rescued');
});

test('the Bubble Storm clears enemy bullets and hurts every pirate; combos raise the multiplier and a hit resets it', () => {
  const run = new Run(normalizeSave(null), 3);
  run.eb.push({ id: 1, x: 50, y: 50, vx: 0, vy: 10, r: 1.6 });
  run._spawn({ type: 'balloon', x: 30 }); run._spawn({ type: 'balloon', x: 70 });
  run.enemies.forEach((e) => { e.y = 40; });
  assert.ok(run.storm());
  assert.equal(run.eb.length, 0);
  assert.equal(run.enemies.length, 0, 'a storm pops weak pirates');
  assert.equal(run.storms, 0);
  assert.equal(run.storm(), false);
  const r2 = new Run(normalizeSave(null), 4);
  const ev = [];
  for (let i = 0; i < 12; i++) { r2._spawn({ type: 'balloon', x: 50 }); const e = r2.enemies.pop(); e.hp = 0; r2._pop(e, ev); }
  assert.ok(r2.mult >= 3 && r2.combo === 12);
  r2._hurt(10, ev);
  assert.equal(r2.mult, 1);
});

test('a caged songbird joins as a wing (two at most), each bird has its own power, and the canary heals', () => {
  const run = new Run(normalizeSave(null), 5);
  for (const bird of ['robin', 'jay', 'canary']) run._collect({ kind: 'cage', bird }, []);
  assert.equal(run.wings.length, 2);
  run.wings = [{ type: 'canary', t: 0, x: 0, y: 0 }];
  run.hp = 50;
  run.step(0.1, {});
  assert.ok(run.hp > 50);
  run.wings = [{ type: 'robin', t: 0, x: 0, y: 0 }, { type: 'jay', t: 0, x: 0, y: 0 }];
  run._spawn({ type: 'balloon', x: 50 }); run.enemies[0].y = 20;
  const n0 = run.bullets.length;
  run.step(0.05, {});
  assert.ok(run.bullets.length > n0 + 1, 'the wings shoot on their own');
  assert.ok(run.bullets.some((b) => b.kind === 'homing') && run.bullets.some((b) => b.kind === 'dart'));
});

test('weapon capsules: spread fires three streams, pierce goes through pirates, rapid fires faster; they time out', () => {
  const run = new Run(normalizeSave(null), 6);
  run._collect({ kind: 'capsule', cap: 'spread' }, []);
  run.step(0.01, {});
  assert.ok(run.bullets.length >= 3);
  run._collect({ kind: 'capsule', cap: 'pierce' }, []);
  assert.equal(run.weapon, 'pierce');
  run.weaponT = 0.05; run.step(0.1, {});
  assert.equal(run.weapon, null);
});

test('hangar: feathers buy upgrades (3 levels) and paint jobs; the plane gets stronger; saves are safe', () => {
  const save = normalizeSave({ feathers: 3000 });
  for (const u of UPGRADES) { assert.ok(buyUpgrade(save, u.id).ok); }
  assert.equal(buyUpgrade(save, 'engine').ok, true);
  assert.equal(buyUpgrade(save, 'engine').ok, true);
  assert.equal(buyUpgrade(save, 'engine').why, 'max');
  const st = planeStats(save);
  assert.ok(st.maxHp > 100 && st.interval < 0.24 && st.damage > 1 && st.storms >= 2);
  const poor = normalizeSave({ feathers: 10 });
  assert.equal(buyUpgrade(poor, 'armor').why, 'poor');
  assert.equal(buyPaint(poor, 'midnight').why, 'poor');
  assert.ok(buyPaint(save, 'royal').ok);
  assert.equal(save.paint, 'royal');
  assert.ok(planeStats({ paint: 'bogus' }).paint === 'bogus', 'planeStats only reads');
  assert.equal(normalizeSave({ paint: 'bogus', owned: ['nope'] }).paint, 'lagoon');
  assert.equal(normalizeSave({ feathers: -5, up: { engine: 9 } }).up.engine, 3);
});

test('the top 10: sorted, three-letter arcade initials, only good scores get in', () => {
  let top = [];
  for (let i = 1; i <= 10; i++) top = addScore(top, { name: 'AAA', score: i * 1000, stage: 1 });
  assert.equal(top.length, 10);
  assert.equal(qualifies(top, 500), false);
  assert.equal(qualifies(top, 5500), true);
  top = addScore(top, { name: 'CAP', score: 5500, stage: 2 });
  assert.equal(top.length, 10);
  assert.equal(top.at(-1).score, 2000);
  assert.deepEqual(normalizeSave({ top: [{ name: 'a$b', score: 3 }, { name: 12, score: 1 }] }).top.map((e) => e.name), ['AB']);
});

test('every enemy type has stats; younger children get softer pirates and more health', () => {
  for (const k of Object.keys(ENEMY)) assert.ok(ENEMY[k].hp > 0 && ENEMY[k].r > 0);
  assert.ok(planeStats({}, true).maxHp > planeStats({}, false).maxHp);
  assert.ok(PAINTS.length >= 7);
});

test('the thief carries the village feathers: popping him drops a bundle of feathers and says so', () => {
  const run = new Run(normalizeSave(null), 7, false);
  run.t = 0; run.events = [{ t: 0, type: 'thief', x: 50 }]; run.ei = 0;
  const ev = run.step(0.05, { tx: 50, ty: 140, fire: false });
  assert.ok(ev.some((e) => e.type === 'thief'));
  assert.ok(run.thief && run.thief.k >= 0 && run.thief.k <= 1);
  const th = run.enemies.find((e) => e.type === 'thief');
  const before = run.pickups.filter((p) => p.kind === 'feather').length;
  const ev2 = [];
  run._pop(th, ev2);
  assert.ok(ev2.some((e) => e.type === 'loot'));
  assert.ok(run.pickups.filter((p) => p.kind === 'feather').length >= before + 6);
});

// ---- Phase 2E (Batch F): the Nile Journey, Migration Season, 20 badges, save migration ----

test('journey: 8 Nile stops south→north with names, rising difficulty, each timeline ending in a boss', () => {
  assert.equal(STOPS.length, 8);
  assert.deepEqual(STOPS.map((s) => s.en), ['Lake Nasser', 'Aswan', 'Kom Ombo', 'Edfu', 'Luxor', 'Qena', 'Cairo', 'Alexandria']);
  for (const s of STOPS) assert.ok(s.ar.length > 1 && s.en.length > 1);
  const kinds = new Set(STOPS.map((s) => s.boss));
  assert.ok(kinds.has('captain') && kinds.has('heron'), 'two boss kinds across the journey');
  let prevHp = 0; let prevLen = 0;
  for (let i = 1; i <= 8; i++) {
    const ev = buildStop(i, 0, 5);
    for (let k = 1; k < ev.length; k++) assert.ok(ev[k].t >= ev[k - 1].t, 'sorted');
    const last = ev.at(-1);
    assert.equal(last.type, 'boss', `stop ${i} ends with a boss event`);
    assert.equal(last.bossKind, STOPS[i - 1].boss);
    assert.ok(last.bossHp > prevHp, `boss hp rises (stop ${i})`);
    prevHp = last.bossHp;
    if (i === 1) prevLen = ev.length;
    if (i === 8) assert.ok(ev.length > prevLen, 'the finale stop is denser than the first');
    assert.ok(ev.some((e) => e.type === 'cage') && ev.some((e) => e.type === 'capsule'));
  }
  assert.ok(BOSS_KINDS.heron.hp > BOSS_KINDS.captain.hp, 'the Storm Heron is the tougher second boss');
});

test('journey playthrough: stops 1→8 complete in order, the finale ends the journey (no silent loop), migration unlocks', () => {
  const save = normalizeSave(null);
  const run = new Run(save, 21, false, { mode: 'journey', stop: 1 });
  run.hp = 1e9; run.stats.maxHp = 1e9;
  assert.equal(run.stageCount, 8);
  let stops = 0;
  for (let guard = 0; guard < 12 && run.state !== 'journeycomplete'; guard++) {
    if (stops === 2) assert.ok(run.storm(), 'a storm is available mid-journey');
    const secs = bot(run, 600);
    assert.ok(secs < 599, `stop ${run.stage} should end (state ${run.state})`);
    if (run.state === 'stageclear') {
      stops++;
      // completing stop k persists progress k and unlocks k+1
      save.journeyStops = Math.max(save.journeyStops, run.stage);
      assert.equal(save.journeyStops, stops);
      run.nextStage();
      assert.equal(run.stage, stops + 1);
    } else if (run.state === 'journeycomplete') { stops++; }
  }
  assert.equal(stops, 8);
  assert.equal(run.state, 'journeycomplete');
  assert.equal(run.ranks.length, 8);
  save.journeyStops = 8; save.journeyDone = true;
  const stats = run.badgeStats(save);
  assert.equal(stats.journeyStops, 8);
  assert.equal(stats.journeyComplete, true);
  assert.equal(stats.bosses, 8, 'one boss per stop');
  // migration season: the legacy loop still loops after the journey
  const mig = new Run(save, 21, false, { mode: 'migration' });
  assert.equal(mig.stageCount, 3);
  assert.equal(mig.mode, 'migration');
});

test('journey failure keeps progress: a failed stop is retried, completed stops stay completed', () => {
  const save = normalizeSave({ journeyStops: 3 });
  const run = new Run(save, 9, false, { mode: 'journey', stop: save.journeyStops + 1 });
  assert.equal(run.stage, 4, 'the run resumes at the first uncompleted stop');
  run.hp = 1; run.inv = 0;
  run._hurt(50, []);
  assert.equal(run.state, 'play'); // hurt alone does not end it mid-step; hp clamps in step
  run.step(0.05, {});
  assert.equal(run.state, 'dead');
  assert.equal(save.journeyStops, 3, 'progress unchanged after a failed stop');
  assert.equal(normalizeSave(save).journeyStops, 3);
});

test('all 20 badges are awardable across journey + migration play', () => {
  assert.equal(BADGES.length, 20);
  assert.equal(new Set(BADGES.map((b) => b.id)).size, 20);
  const save = normalizeSave(null);
  // journey run (invulnerable robot, one storm used)
  const run = new Run(save, 33, false, { mode: 'journey', stop: 1 });
  run.hp = 1e9; run.stats.maxHp = 1e9;
  for (let guard = 0; guard < 12 && run.state !== 'journeycomplete'; guard++) {
    if (run.stage === 1 && run.c.storms === 0) run.storm();
    bot(run, 600);
    if (run.state === 'stageclear') { save.journeyStops = Math.max(save.journeyStops, run.stage); checkBadges(save, run.badgeStats(save)); run.nextStage(); }
  }
  assert.equal(run.state, 'journeycomplete');
  save.journeyStops = 8; save.journeyDone = true;
  checkBadges(save, run.badgeStats(save));
  // migration run: complete one legacy loop (4 stage clears, as the old test does)
  const mig = new Run(save, 11, false, { mode: 'migration' });
  mig.hp = 1e9; mig.stats.maxHp = 1e9;
  let clears = 0;
  for (let guard = 0; guard < 8 && clears < 4; guard++) { bot(mig); if (mig.state === 'stageclear') { clears++; mig.nextStage(); } }
  assert.equal(mig.loop, 1);
  checkBadges(save, mig.badgeStats(save));
  // combo20: the bot takes hits (each resets the combo), so drive the real _pop
  // mechanic directly — 20 unbroken pops, exactly as a skilled run earns it.
  const cr = new Run(save, 5, false, { mode: 'journey', stop: 1 });
  const ev20 = [];
  for (let i = 0; i < 20; i++) { cr._spawn({ type: 'balloon', x: 50 }); const e = cr.enemies.pop(); e.hp = 0; cr._pop(e, ev20); }
  assert.equal(cr.c.maxCombo, 20);
  checkBadges(save, { ...run.badgeStats(save), maxCombo: cr.c.maxCombo, maxMult: cr.c.maxMult });
  const missing = BADGES.map((b) => b.id).filter((id) => !save.badges.includes(id));
  assert.deepEqual(missing, [], `every badge earned; counters journey=${JSON.stringify(run.c)} mig=${JSON.stringify(mig.c)} score=${run.score + mig.score}`);
});

test('save migration: an old save gains journey 0/done false and keeps everything else exactly', () => {
  const old = { feathers: 321, up: { engine: 2, armor: 1 }, owned: ['royal', 'grape'], paint: 'royal', top: [{ name: 'cap', score: 1234, stage: 2 }], muted: true, best: 4321, badges: ['firstpop'] };
  const s = normalizeSave(old);
  assert.equal(s.journeyStops, 0);
  assert.equal(s.journeyDone, false);
  assert.equal(s.feathers, 321);
  assert.equal(s.up.engine, 2); assert.equal(s.up.armor, 1);
  assert.deepEqual([...s.owned].sort(), ['grape', 'lagoon', 'royal']);
  assert.equal(s.paint, 'royal');
  assert.equal(s.best, 4321);
  assert.equal(s.muted, true);
  assert.deepEqual(s.badges, ['firstpop']);
  assert.equal(s.top[0].score, 1234);
  const s2 = normalizeSave({ journeyStops: 99, journeyDone: 1 });
  assert.equal(s2.journeyStops, 8, 'journey progress clamps to the 8 stops');
  assert.equal(s2.journeyDone, true);
});
