import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, ROWS } from '../src/levels.js';
import { Sim, P } from '../src/sim.js';
import { normalizeSave, applyLevel, emptySave } from '../src/save.js';

// A simple robot player: jumps (holding) at pits, walls, spikes, beetles and low bats, and kicks in shafts.
function robot(sim) {
  const p = sim.p;
  const solidAt = (x, y) => sim.solid(x, y);
  let want = false;
  if (p.onGround) {
    const front = p.x + P.W / 2;
    // a pit ahead
    for (let d = 0.2; d <= 1.3; d += 0.2) if (!solidAt(front + d, p.y + 0.5) && sim.tile(Math.floor(front + d), Math.floor(p.y + 0.01)) !== '=') want = true;
    // a wall or step ahead
    for (let d = 0.05; d <= 0.9; d += 0.15) if (solidAt(front + d, p.y - 0.5)) want = true;
    // spikes ahead
    for (let d = 0; d <= 1.6; d += 0.2) if (sim.tile(Math.floor(front + d), Math.floor(p.y - 0.5)) === '^') want = true;
    for (const b of sim.beetles) if (b.alive && b.x - p.x > 0.8 && b.x - p.x < 2.3 && Math.abs(b.y - p.y) < 1) want = true;
    for (const bat of sim.bats) if (bat.x0 - p.x > 0.5 && bat.x0 - p.x < 3.2 && bat.y0 > p.y - 2.5) want = true;
  } else if (p.wall !== 0 && p.vy > -2) want = true;
  const pressed = want && !robot.prev;
  robot.prev = want;
  if (pressed) robot.holdFor = 0.3;
  const down = robot.holdFor > 0;
  robot.holdFor = Math.max(0, (robot.holdFor ?? 0) - 1 / 60);
  return { down, pressed };
}

for (const lvl of LEVELS) {
  test(`level ${lvl.id}: grid is ${ROWS} rows, has a start, a goal, three relics and flags`, () => {
    assert.equal(lvl.rows.length, ROWS);
    for (const r of lvl.rows) assert.equal(r.length, lvl.width);
    const sim = new Sim(lvl);
    assert.ok(sim.goal, 'goal');
    assert.equal(sim.relicTotal, 3);
    assert.ok(sim.flags.length >= 2);
    assert.ok(sim.items.filter((i) => i.kind === 'coin').length >= 40);
  });

  test(`level ${lvl.id}: the robot reaches the goal`, () => {
    const sim = new Sim(lvl);
    robot.prev = false;
    robot.holdFor = 0;
    const seen = new Set();
    let t = 0;
    let maxX = 0;
    while (sim.phase === 'play' && t < 200) {
      sim.step(1 / 60, robot(sim));
      for (const e of sim.events) seen.add(e.type);
      maxX = Math.max(maxX, sim.p.x);
      t += 1 / 60;
    }
    console.log(`  ${lvl.id}: ${sim.phase} in ${t.toFixed(1)} s, x ${maxX.toFixed(1)}/${sim.endX}, hearts ${sim.hearts}, coins ${sim.coins}, relics ${sim.relics.length}, time left ${sim.timeLeft.toFixed(0)}, events ${[...seen].join(',')}`);
    assert.equal(sim.phase, 'won', `stuck near x=${sim.p.x.toFixed(1)} y=${sim.p.y.toFixed(1)} (max x ${maxX.toFixed(1)})`);
    assert.ok(sim.timeLeft > 0, 'finished before the clock ran out');
  });
}

test('easy mode: a child who never taps loses no hearts and is never stuck forever', () => {
  const sim = new Sim(LEVELS[0], { easy: true });
  for (let i = 0; i < 60 * 20; i++) sim.step(1 / 60, { down: false, pressed: false });
  assert.equal(sim.hearts, 3);
  assert.equal(sim.phase, 'play');
});

test('holding jumps higher than tapping', () => {
  const peak = (hold) => {
    const sim = new Sim(LEVELS[0]);
    const y0 = sim.p.y;
    let min = y0;
    sim.step(1 / 60, { down: true, pressed: true });
    for (let i = 0; i < 60; i++) {
      sim.step(1 / 60, { down: hold, pressed: false });
      min = Math.min(min, sim.p.y);
    }
    return y0 - min;
  };
  const tap = peak(false);
  const hold = peak(true);
  assert.ok(tap > 1.8 && tap < 2.6, `tap ${tap}`);
  assert.ok(hold > tap + 1, `hold ${hold} vs tap ${tap}`);
});

test('save: damaged data loads safely; levels open one by one; best results are kept', () => {
  assert.deepEqual(normalizeSave('junk'), emptySave());
  const s = normalizeSave({ unlocked: 99, coins: -4, best: { trail: { relics: 9, coins: 'x' } } });
  assert.equal(s.unlocked, 3);
  assert.equal(s.coins, 0);
  assert.equal(s.best.trail.relics, 3);
  const save = emptySave();
  const r = applyLevel(save, 0, { won: true, coins: 40, relics: 2, bonus: 12 });
  assert.equal(save.unlocked, 2);
  assert.equal(r.unlockedNext, true);
  assert.equal(save.coins, 52);
  applyLevel(save, 0, { won: true, coins: 10, relics: 1, bonus: 0 });
  assert.equal(save.best.trail.relics, 2, 'the best relic count stays');
  applyLevel(save, 1, { won: false, coins: 5, relics: 0, bonus: 0 });
  assert.equal(save.unlocked, 2, 'a lost level opens nothing');
});

test('every relic can be reached: a wall to kick from, or a floor at most a high jump below it', () => {
  for (const lvl of LEVELS) {
    const sim = new Sim(lvl);
    for (const r of sim.items.filter((i) => i.kind === 'relic')) {
      const rx = Math.floor(r.x);
      const ry = Math.floor(r.y);
      const wallNear = [-2, -1, 1, 2].some((d) => sim.solid(rx + d + 0.5, ry + 0.5));
      let best = 99;
      for (const dx of [-2, -1, 0, 1, 2]) {
        for (let y = ry + 1; y < ROWS; y++) {
          const c = sim.tile(rx + dx, y);
          if (c === '#' || c === '=') { best = Math.min(best, y - r.y); break; }
        }
      }
      // highest point of the body above the feet on a held jump: about 3.7 + body height 1.35, reach 1.0
      assert.ok(wallNear || best <= 3.7 + 1.35, `${lvl.id} relic at (${rx},${ry}) is ${best.toFixed(1)} above the floor`);
    }
  }
});

test('landing on a beetle from any jump squashes it and gives a coin; running into it hurts', () => {
  for (const startAbove of [0.3, 1.0, 2.5]) {
    const sim = new Sim(LEVELS[0]);
    const b = sim.beetles[0];
    sim.p.x = b.x;
    sim.p.y = b.y - startAbove;
    sim.p.vy = 4;
    sim.p.onGround = false;
    b.vx = 0;
    const coins = sim.coins;
    let stomped = false;
    for (let i = 0; i < 60 && !stomped; i++) {
      b.x = sim.p.x; // keep the beetle right under her (she keeps running while she falls)
      sim.step(1 / 60, { down: false, pressed: false });
      stomped = sim.events.some((e) => e.type === 'stomp');
    }
    assert.ok(stomped, `landing from ${startAbove} tiles above squashes it`);
    assert.ok(sim.coins >= coins + 1, "the beetle gave a coin");
    assert.equal(sim.hearts, 3);
  }
  const sim = new Sim(LEVELS[0]);
  const b = sim.beetles[0];
  sim.p.x = b.x - 1.2;
  sim.p.y = b.y;
  b.vx = 0;
  for (let i = 0; i < 30; i++) sim.step(1 / 60, { down: false, pressed: false });
  assert.equal(sim.hearts, 2, 'running into it costs a heart');
});

test('shop: coins buy clothes, free outfits are always there, a hero only wears what was bought', async () => {
  const { buy, wear, lookOf, SHOP, DEFAULT_LOOK } = await import('../src/shop.js');
  const save = emptySave();
  assert.deepEqual(lookOf(save, 'boy'), DEFAULT_LOOK.boy);
  assert.equal(buy(save, 'hat_crown'), 'poor');
  assert.equal(wear(save, 'boy', 'hat_crown'), false, 'not owned');
  save.coins = 200;
  assert.equal(buy(save, 'hat_crown'), 'bought');
  assert.equal(save.coins, 50);
  assert.equal(buy(save, 'hat_crown'), 'owned', 'no double charge');
  assert.equal(save.coins, 50);
  assert.ok(wear(save, 'boy', 'hat_crown'));
  assert.ok(wear(save, 'girl', 'hat_helmet'), 'free items need no buying');
  assert.equal(lookOf(save, 'boy').hat, 'hat_crown');
  // a tampered save cannot wear what it did not buy
  const s2 = normalizeSave({ coins: 5, owned: ['nope'], looks: { girl: { top: 'top_hero', hat: 'hat_crown' } }, hero: 'dragon' });
  assert.equal(s2.looks.girl.top, DEFAULT_LOOK.girl.top);
  assert.equal(s2.looks.girl.hat, DEFAULT_LOOK.girl.hat);
  assert.equal(s2.hero, 'girl');
  assert.deepEqual(s2.owned, []);
  assert.ok(SHOP.every((i) => i.price >= 0 && i.ar && i.en));
});
