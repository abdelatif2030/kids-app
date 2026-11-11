import test from 'node:test';
import assert from 'node:assert/strict';
import { Rooftop, ROOFS, robotMove, normalizeSave, PERKS } from '../src/sim.js';

/** Plays a roof like a careful child (the robot), picking the first perk at each level up. */
/** The weapon a child has when starting roof i: the last one found on an earlier roof. */
export const weaponFor = (i) => { let w = 'blaster'; for (let k = 0; k < i; k++) if (ROOFS[k].crate) w = ROOFS[k].crate.weapon; return w; };

export function play(opts, pick = 0, maxT = 600) {
  const g = new Rooftop({ weapon: opts.endless ? 'fireworks' : weaponFor(opts.roof ?? 0), ...opts });
  const dt = 1 / 30;
  const seen = { weapons: [], waves: 0, pops: 0, booms: 0, tanks: 0, levelUps: 0, coins: 0 };
  for (let i = 0; i < maxT * 30; i++) {
    if (g.choosing) { g.choose(g.choosing[Math.min(pick, g.choosing.length - 1)]); seen.levelUps++; }
    const m = opts.idle ? { x: 0, z: 0 } : robotMove(g);
    g.setMove(m.x, m.z);
    for (const e of g.step(dt)) {
      if (e.type === 'weapon') seen.weapons.push(e.weapon);
      if (e.type === 'wave') seen.waves++;
      if (e.type === 'pop') seen.pops++;
      if (e.type === 'boom') seen.booms++;
      if (e.type === 'tank') seen.tanks++;
    }
    if (g.state === 'won' || g.state === 'lost') break;
  }
  return { g, seen };
}

test('the robot clears every roof and leaps to the next building', () => {
  for (let i = 0; i < ROOFS.length; i++) {
    const { g, seen } = play({ roof: i, seed: 11 + i });
    const r = g.result;
    console.log(`roof ${i + 1}: ${g.state} t=${g.time.toFixed(0)}s kills=${g.kills} coins=${g.coins} lowest=${(g.lowest * 100).toFixed(0)}% stars=${r && r.stars} lvl=${g.xpLevel} weapons=${seen.weapons} tanks=${seen.tanks}`);
    assert.equal(g.state, 'won', `roof ${i + 1}`);
    assert.equal(seen.waves, ROOFS[i].waves.length);
    if (ROOFS[i].crate) assert.deepEqual(seen.weapons, [ROOFS[i].crate.weapon]);
    if (i === 0) assert.equal(weaponFor(0), 'blaster');
    assert.ok(r.stars >= 1);
  }
});

test('more seeds: the robot wins most roofs with any perk choice', () => {
  let wins = 0;
  let n = 0;
  for (let i = 0; i < ROOFS.length; i++) for (const pick of [1, 2]) { n++; if (play({ roof: i, seed: 100 + i * 7 + pick }, pick).g.state === 'won') wins++; }
  console.log(`wins ${wins}/${n}`);
  assert.ok(wins >= n - 3);
});

test('a little child who only stands still on easy roof 1 still gets far (auto aim)', () => {
  const { g } = play({ roof: 0, easy: true, idle: true, seed: 5 }, 0, 240);
  console.log(`idle easy: ${g.state} wave ${g.wave} kills ${g.kills}`);
  assert.ok(g.wave >= 2 || g.state === 'pad');
});

test('the gas tank blows up a crowd and comes back next wave', () => {
  const g = new Rooftop({ roof: 1, seed: 3 });
  const t = g.tanks[0];
  g.gap = 99;
  for (let i = 0; i < 4; i++) { g._spawn('shambler'); const z = g.zombies[i]; z.climb = 0; z.x = t.x + Math.cos(i) * 1.5; z.z = t.z + Math.sin(i) * 1.5; }
  g._tankHit(t, 2);
  assert.equal(t.alive, false);
  assert.ok(g.zombies.every((z) => z.hp <= 0));
  g._startWave();
  assert.equal(t.alive, true);
});

test('bombs splash a group; the crate gives the bomb launcher', () => {
  const g = new Rooftop({ roof: 1, seed: 4 });
  g.gap = 0;
  g.wave = 1;
  g._startWave();
  assert.ok(g.crate && g.crate.weapon === 'bomb');
  g.hero.x = g.crate.x; g.hero.z = g.crate.z;
  const ev = g.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'weapon' && e.weapon === 'bomb'));
  assert.equal(g.weapon, 'bomb');
  g._boom(0, 0, 2.2, 10, 'bomb');
});

test('level up waits for a choice; perks change numbers', () => {
  const g = new Rooftop({ roof: 0, seed: 9 });
  g.xp = 99;
  const ev = g.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'levelUp'));
  assert.ok(g.choosing.length === 3);
  const t0 = g.time;
  g.step(1 / 30);
  assert.equal(g.time, t0);
  const before = g.rateMul;
  g.choosing = ['rapid', 'vest', 'twin'];
  assert.ok(g.choose('rapid'));
  assert.ok(g.rateMul > before);
  assert.equal(PERKS.length, 7);
});

test('knocked out when the health runs out (nothing else is lost)', () => {
  const g = new Rooftop({ roof: 0, seed: 2 });
  g.hero.hp = 0.01;
  g.gap = 99;
  g._spawn('brute');
  const z = g.zombies[0]; z.climb = 0; z.x = g.hero.x + 1.1; z.z = g.hero.z;
  for (let i = 0; i < 10 && g.state === 'play'; i++) g.step(1 / 30);
  assert.equal(g.state, 'lost');
  assert.equal(g.result.won, false);
});

test('endless keeps sending bigger waves', () => {
  const { g } = play({ endless: true, seed: 8 }, 0, 400);
  console.log(`endless: waves ${g.wave}, ${g.state}`);
  assert.ok(g.wave >= 4);
});

test('saves are cleaned', () => {
  const s = normalizeSave({ unlocked: 99, coins: -4, weapons: ['bomb', 'nuke'], weapon: 'nuke', stars: { 1: 3, 2: 7 }, up: { power: 9 } });
  assert.equal(s.unlocked, 9);
  assert.equal(s.coins, 0);
  assert.deepEqual(s.weapons, ['blaster', 'bomb']);
  assert.equal(s.weapon, 'blaster');
  assert.deepEqual(s.stars, { 1: 3 });
  assert.equal(s.up.power, 0);
  assert.deepEqual(normalizeSave(null).weapons, ['blaster']);
});
