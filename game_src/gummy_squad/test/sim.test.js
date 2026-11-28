import test from 'node:test';
import assert from 'node:assert/strict';
import { Run, ARENA, BEAR_R, KINDS, MIN_WARN, normalizeSave, buyUpgrade, applyResult, upgradeCost, STAGES, STAGE_PLACES, BOSSES, placeOf, bossOf, RECIPES, recipeOf } from '../src/sim.js';

// A simple robot player: dodges telegraphed hazards, kites the nearest enemy, picks up mints, uses the super.
export function robot(run) {
  const sq = run.squad;
  let ax = 0; let ay = 0; let danger = false;
  for (const b of run.aliveBears) {
    for (const h of run.hazards) {
      if (h.done) continue;
      if (h.kind === 'path') {
        const px = b.x - h.x; const py = b.y - h.y;
        const s = px * h.dx + py * h.dy;
        const perp = px * -h.dy + py * h.dx;
        if (s > -h.width && s < h.len + h.width && Math.abs(perp) < h.width / 2 + 1.6) { const sg = perp >= 0 ? 1 : -1; ax += -h.dy * sg * 3; ay += h.dx * sg * 3; danger = true; }
      } else {
        const d = Math.hypot(b.x - h.x, b.y - h.y);
        if (d < h.r + 1.6) { const k = 3 / (d || 1); ax += (b.x - h.x) * k; ay += (b.y - h.y) * k; danger = true; }
      }
    }
    for (const p of run.projectiles) if (p.from === 'enemy') {
      const d = Math.hypot(b.x - p.x, b.y - p.y);
      if (d < 3) { ax += -p.vy * 0.2; ay += p.vx * 0.2; }
    }
  }
  if (!danger) {
    const mint = run.pickups.find((p) => p.type === 'mint');
    const ts = run.targets();
    const n = run.nearest(sq.x, sq.y, ts);
    if (mint && run.fallenBears.length) { ax = mint.x - sq.x; ay = mint.y - sq.y; } else if (n) {
      const dx = n.e.x - sq.x; const dy = n.e.y - sq.y; const d = Math.hypot(dx, dy) || 1;
      const want = n.e.kind === 'boss' ? 3.9 + n.e.r : 4.0;
      const dist = d;
      if (dist > want + 0.6) { ax = dx / d; ay = dy / d; } else if (dist < want - 1.0) { ax = -dx / d; ay = -dy / d; }
      const c = run.pickups.find((p) => p.type === 'candy');
      if (c && Math.hypot(ax, ay) < 0.1 && Math.hypot(c.x - sq.x, c.y - sq.y) < 5) { ax = c.x - sq.x; ay = c.y - sq.y; }
    }
  }
  // stay away from walls
  if (sq.x > ARENA.hx - 3) ax -= 1; if (sq.x < -ARENA.hx + 3) ax += 1; if (sq.y > ARENA.hy - 3) ay -= 1; if (sq.y < -ARENA.hy + 3) ay += 1;
  const m = Math.hypot(ax, ay) || 1;
  const k = Math.min(1, m) / m;
  const crowd = run.targets().filter((e) => Math.hypot(e.x - sq.x, e.y - sq.y) < 6).length;
  return { x: ax * k, y: ay * k, super: run.charge >= 100 && (crowd >= 3 || run.bossFight) };
}

export function play(seed, upgrades, maxT = 240, hook) {
  const run = new Run({ seed, upgrades });
  const dt = 1 / 60;
  while (!run.over && run.t < maxT) { run.step(dt, robot(run)); if (hook) hook(run); }
  return run;
}

const DECENT = { damage: 2, health: 2, charge: 2 };

test('a robot beats King Donut in at least 8 of 10 seeds with decent upgrades', () => {
  let wins = 0;
  for (let s = 1; s <= 10; s++) { const r = play(s, DECENT); if (r.state === 'won') wins++; }
  assert.ok(wins >= 8, `won ${wins}/10`);
});

test('every hazard shows a warning of at least 0.8 s before it hurts', () => {
  const hits = [];
  for (let s = 1; s <= 6; s++) {
    const seenWarn = [];
    const r = play(s, { damage: 0, health: 0, charge: 0 }, 200, (run) => { for (const h of run.hazards) if (!seenWarn.includes(h)) seenWarn.push(h); });
    for (const h of seenWarn) assert.ok(h.warn >= MIN_WARN && h.warn >= 0.8, `warn ${h.warn}`);
    hits.push(...r.hazardHits);
  }
  assert.ok(hits.length > 0, 'robot at base level should get hit by a hazard at least once');
  for (const h of hits) assert.ok(h.age >= 0.8 && h.age >= h.warn - 1e-6, `hit after ${h.age}`);
});

test('a hazard whose age is below its warning never damages a bear', () => {
  const run = new Run({ seed: 3 });
  run.hazards.push({ kind: 'circle', from: 'rain', x: run.bears[0].x, y: run.bears[0].y, r: 3, warn: 1.2, t: 0, dmg: 50, done: false });
  const hp = run.bears[0].hp;
  for (let i = 0; i < 70; i++) run.step(1 / 60, {}); // 1.17 s
  assert.equal(run.bears[0].hp, hp);
  for (let i = 0; i < 10; i++) run.step(1 / 60, {});
  assert.ok(run.bears[0].hp < hp);
});

test('a mint revives a fallen bear', () => {
  const run = new Run({ seed: 5 });
  const b = run.bears[1];
  run.hurtBear(b, 9999);
  assert.equal(b.alive, false);
  assert.equal(run.stars, 2);
  run._mint(run.squad.x, run.squad.y);
  run.step(1 / 60, {});
  assert.equal(b.alive, true);
  assert.ok(b.hp > 0 && b.hp <= b.maxHp * 0.5 + 1);
  assert.equal(run.stars, 3);
});

test('a mint heals the living when nobody has fallen', () => {
  const run = new Run({ seed: 5 });
  run.bears[0].hp = 10;
  run._mint(run.squad.x, run.squad.y);
  run.step(1 / 60, {});
  assert.ok(run.bears[0].hp > 10);
});

test('stars equal the bears still standing at the end', () => {
  const run = new Run({ seed: 2 });
  run.bears[0].alive = false; run.bears[0].hp = 0;
  run._spawnBoss(); run.state = 'boss'; run.boss.state = 'idle';
  run.hurtEnemy(run.boss, 1e6);
  run.step(1 / 60, {});
  assert.equal(run.state, 'won');
  assert.equal(run.result.stars, 2);
  assert.equal(run.result.bonus, 40);
});

test('all bears down means the run is lost', () => {
  const run = new Run({ seed: 2 });
  for (const b of run.bears) run.hurtBear(b, 99999);
  run.step(1 / 60, {});
  assert.equal(run.state, 'lost');
  assert.equal(run.result.win, false);
});

test('the super drops a jawbreaker that damages the crowd', () => {
  const run = new Run({ seed: 4 });
  const es = [];
  for (let i = 0; i < 4; i++) es.push(run.spawn('gummy', { x: 2 + i * 0.5, y: -3 }));
  run.charge = 100;
  const before = es.map((e) => e.hp);
  assert.ok(run.useSuper());
  assert.equal(run.charge, 0);
  for (let i = 0; i < 70; i++) run.step(1 / 60, {});
  es.forEach((e, i) => assert.ok(e.hp < before[i], 'enemy hurt'));
  assert.ok(run.drain().some((e) => e.type === 'jawLand'));
});

test('the super needs a full charge and a target', () => {
  const run = new Run({ seed: 4 });
  run.charge = 100;
  assert.equal(run.useSuper(), false); // nobody to hit yet
  run.spawn('gummy', { x: 0, y: 0 });
  run.charge = 50;
  assert.equal(run.useSuper(), false);
});

test('bears attack the nearest enemy on their own', () => {
  const run = new Run({ seed: 4 });
  const e = run.spawn('tank', { x: run.squad.x, y: run.squad.y - 6 });
  for (let i = 0; i < 120; i++) run.step(1 / 60, {});
  assert.ok(e.hp < e.maxHp);
  assert.ok(run.charge > 0);
});

test('defeated sweets drop candies that are collected', () => {
  const run = new Run({ seed: 6 });
  const e = run.spawn('sour', { x: run.squad.x + 2, y: run.squad.y - 2 });
  run.hurtEnemy(e, 1e5);
  assert.ok(run.pickups.some((p) => p.type === 'candy'));
  for (let i = 0; i < 240; i++) run.step(1 / 60, {});
  assert.ok(run.candies >= KINDS.sour.reward);
});

test('a bomber blast is cancelled if the bomber is popped during its fuse', () => {
  const run = new Run({ seed: 7 });
  const e = run.spawn('bomber', { x: run.squad.x, y: run.squad.y - 1.2 });
  run.step(1 / 60, {});
  run.step(1 / 60, {});
  assert.ok(run.hazards.some((h) => h.kind === 'blast'));
  run.hurtEnemy(e, 1e5);
  const hp = run.bears.map((b) => b.hp);
  for (let i = 0; i < 90; i++) run.step(1 / 60, {});
  assert.deepEqual(run.bears.map((b) => b.hp), hp);
});

test('same seed, same battle (deterministic)', () => {
  const a = play(9, DECENT, 60); const b = play(9, DECENT, 60);
  assert.equal(a.t, b.t); assert.equal(a.kills, b.kills); assert.equal(a.candies, b.candies);
});

test('save normalisation, upgrades and results', () => {
  const s = normalizeSave({ candies: 'x', upgrades: { damage: 99, health: -3 }, bestStars: 7, muted: 1 });
  assert.equal(s.candies, 0); assert.equal(s.upgrades.damage, 5); assert.equal(s.upgrades.health, 0); assert.equal(s.bestStars, 3);
  assert.deepEqual(normalizeSave(null).upgrades, { damage: 0, health: 0, charge: 0 });
  assert.equal(buyUpgrade(normalizeSave({ candies: 5 }), 'damage'), null);
  const rich = normalizeSave({ candies: 100 });
  const b = buyUpgrade(rich, 'health');
  assert.equal(b.upgrades.health, 1); assert.equal(b.candies, 100 - upgradeCost(rich, 'health'));
  const r = applyResult(b, { win: true, stars: 2, candies: 10, bonus: 40 });
  assert.equal(r.candies, b.candies + 50); assert.equal(r.bestStars, 2); assert.equal(r.wins, 1);
  assert.equal(upgradeCost(normalizeSave({ upgrades: { damage: 5 } }), 'damage'), null);
});

test('bears stay inside the arena', () => {
  const run = new Run({ seed: 1 });
  for (let i = 0; i < 600; i++) run.step(1 / 60, { x: 1, y: 1 });
  for (const b of run.bears) { assert.ok(Math.abs(b.x) <= ARENA.hx && Math.abs(b.y) <= ARENA.hy); }
  assert.ok(BEAR_R > 0);
});

test('ten stages: every stage is winnable by the robot with upgrades that grow, later stages are tougher', () => {
  const ups = [{ damage: 2, health: 2, charge: 2 }, { damage: 2, health: 2, charge: 2 }, { damage: 3, health: 3, charge: 3 }, { damage: 3, health: 3, charge: 3 }, { damage: 4, health: 4, charge: 4 }, { damage: 5, health: 5, charge: 5 }, { damage: 5, health: 5, charge: 5 }, { damage: 5, health: 5, charge: 5 }, { damage: 5, health: 5, charge: 5 }, { damage: 5, health: 5, charge: 5 }];
  let prevBoss = 0;
  for (let st = 0; st < STAGES; st++) {
    let won = 0;
    for (let seed = 1; seed <= 6; seed++) { const r = new Run({ seed, upgrades: ups[st], stage: st }); while (!r.over && r.t < 700) r.step(1 / 60, robot(r)); if (r.state === 'won') won++; }
    console.log(`stage ${st + 1}: won ${won}/6`);
    assert.ok(won >= 3, `stage ${st + 1} won ${won}/6`);
    const b = new Run({ seed: 1, stage: st }); b._spawnBoss(); assert.ok(b.boss.maxHp > prevBoss); prevBoss = b.boss.maxHp;
  }
});
test('stages open one by one, all the way to stage 10', () => {
  let s = normalizeSave(null); assert.equal(s.stage, 0);
  s = applyResult(s, { win: true, stars: 2, candies: 5, bonus: 0, stage: 0 }); assert.equal(s.stage, 1);
  s = applyResult(s, { win: true, stars: 2, candies: 5, bonus: 0, stage: 0 }); assert.equal(s.stage, 1, 'replaying an old stage opens nothing new');
  assert.equal(normalizeSave({ stage: 99 }).stage, 9);
  // full unlock chain: winning the highest opened stage opens the next, up to the finale
  let c = normalizeSave(null);
  for (let st = 0; st < STAGES; st++) { assert.equal(c.stage, st); c = applyResult(c, { win: true, stars: 3, candies: 5, bonus: 0, stage: st }); }
  assert.equal(c.stage, STAGES - 1, 'the chain stops at the finale');
  assert.deepEqual(c.recipes, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'a full campaign collects every recipe');
});

test('Sweet Shop anchor: ten Egyptian places and a rotating boss roster', () => {
  assert.equal(STAGES, 10);
  assert.equal(STAGE_PLACES.length, STAGES);
  assert.equal(BOSSES.length, STAGES);
  for (let st = 0; st < STAGES; st++) { assert.ok(placeOf(st).ar && placeOf(st).en, `place ${st + 1}`); assert.ok(bossOf(st).ar && bossOf(st).en, `boss ${st + 1}`); }
  assert.equal(placeOf(1).ar, 'خيمة رمضان');
  assert.equal(placeOf(4).en, 'Eid Night');
  assert.equal(placeOf(9).en, 'The Grand Eid Banquet');
  // three distinct bosses rotate across stages 1-9 (was: King Donut x6); the finale is all three together
  assert.deepEqual([...new Set(BOSSES.slice(0, 9).map((b) => b.en))], ['Date King', 'Honey Queen', 'Kunafa Giant']);
  assert.equal(bossOf(9).en, 'The Three Sweet Champions');
  assert.equal(bossOf(99).en, 'The Three Sweet Champions'); // clamped, never undefined
  assert.equal(placeOf(-3).en, 'The Sweet Shop'); // clamped low too
});

test('wave count grows with the tour: 2 waves, then a third, a fourth, and the richest finale opening', () => {
  const waves = (st) => new Run({ seed: 1, stage: st }).waves.length;
  assert.equal(waves(0), 2);
  assert.equal(waves(1), 2);
  assert.equal(waves(2), 3);
  assert.equal(waves(5), 3);
  assert.equal(waves(6), 4);
  assert.equal(waves(8), 4);
  assert.equal(waves(9), 5);
  // the finale opening is the richest single wave of the game
  const finale = new Run({ seed: 1, stage: 9 }).waves[0];
  const finaleCount = finale.reduce((n, [, , c]) => n + c, 0);
  for (let st = 0; st < 9; st++) for (const w of new Run({ seed: 1, stage: st }).waves) assert.ok(w.reduce((n, [, , c]) => n + c, 0) <= finaleCount, `stage ${st + 1} wave richer than the finale opening`);
});

test('recipe cards: one readable card per stage, collected on a win, never duplicated', () => {
  assert.equal(RECIPES.length, STAGES);
  for (let st = 0; st < STAGES; st++) { const r = recipeOf(st); assert.ok(r.ar && r.en && r.ingAr && r.ingEn, `recipe ${st + 1}`); }
  assert.equal(recipeOf(0).en, 'Kunafa');
  assert.equal(recipeOf(99).en, 'The Grand Sweet Feast'); // clamped
  let s = normalizeSave(null);
  assert.deepEqual(s.recipes, []);
  s = applyResult(s, { win: true, stars: 2, candies: 5, bonus: 0, stage: 0 });
  assert.deepEqual(s.recipes, [0], 'winning stage 1 collects recipe 1');
  s = applyResult(s, { win: true, stars: 3, candies: 5, bonus: 0, stage: 0 });
  assert.deepEqual(s.recipes, [0], 'replaying a stage adds no duplicate');
  s = applyResult(s, { win: false, stars: 0, candies: 5, bonus: 0, stage: 1 });
  assert.deepEqual(s.recipes, [0], 'a lost run collects nothing');
  s = applyResult(s, { win: true, stars: 1, candies: 5, bonus: 0, stage: 4 });
  assert.deepEqual(s.recipes, [0, 4], 'recipes stay sorted by stage');
});

test('save migration: a six-stage save opens safely in the ten-stage game', () => {
  // a finished old save: stage 5 was the old finale, no recipes field existed
  const old = normalizeSave({ candies: 500, upgrades: { damage: 5, health: 5, charge: 5 }, bestStars: 3, stage: 5, wins: 9, runs: 12 });
  assert.equal(old.stage, 5, 'the old highest opened stage is preserved');
  assert.deepEqual(old.recipes, [0, 1, 2, 3, 4], 'recipes derive from the stages already beaten');
  const wonFinale = applyResult(old, { win: true, stars: 3, candies: 5, bonus: 0, stage: 5 });
  assert.equal(wonFinale.stage, 6, 'the tour continues past the old finale');
  assert.ok(wonFinale.recipes.includes(5));
  // garbage in the recipes field can never crash or poison the save
  assert.deepEqual(normalizeSave({ recipes: 'junk' }).recipes, []);
  assert.deepEqual(normalizeSave({ stage: 2, recipes: [3, 3, 99, -1, 'x', 0] }).recipes, [0, 3]);
  assert.deepEqual(normalizeSave(null).recipes, []);
});
