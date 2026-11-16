import test from 'node:test';
import assert from 'node:assert/strict';
import { Sea, LEVELS, robotSwim, normalizeSave, SPECIES, EAT } from '../src/sim.js';

function swim(opts, mode = 'robot') {
  const s = new Sea(opts);
  const dt = 1 / 30;
  const seen = { eat: 0, bitten: 0, warn: 0, dash: 0, bait: 0, boss: 0, ink: 0, kinds: new Set(), maxCombo: 0 };
  for (let i = 0; i < 200 * 30; i++) {
    if (mode === 'robot') { const m = robotSwim(s); s.setMove(m.x, m.z); if (m.dash) s.dash(); }
    for (const e of s.step(dt)) {
      if (e.type === 'eat') { seen.eat++; seen.kinds.add(e.kind); seen.maxCombo = Math.max(seen.maxCombo, e.combo); }
      if (e.type in seen && typeof seen[e.type] === 'number') seen[e.type]++;
    }
    if (s.state === 'won' || s.state === 'lost') break;
  }
  return { s, seen };
}

test('the robot clears all three timed levels (reef, kelp squid hunt, the shark)', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    let run;
    for (let k = 0; k < 3; k++) { run = swim({ level: i, seed: 3 + i + k * 40 }); if (run.s.state === 'won') break; }
    const { s, seen } = run;
    console.log(`level ${i + 1}: ${s.state} t=${s.t.toFixed(0)}s cm=${s.fish.cm.toFixed(0)} eaten=${seen.eat} kinds=${[...seen.kinds]} bitten=${seen.bitten} warns=${seen.warn} dashes=${seen.dash} baits=${seen.bait} combo=${seen.maxCombo} stars=${s.result.stars}`);
    assert.equal(s.state, 'won', `level ${i + 1}`);
    if (i === 1) assert.ok(s.squid >= 1, 'hunted squid');
    if (i === 2) { assert.equal(seen.boss, 1); assert.ok(seen.kinds.has('shark'), 'devoured the shark'); }
  }
});

test('the robot wins most runs', () => {
  let wins = 0;
  let n = 0;
  for (let i = 0; i < LEVELS.length; i++) for (let k = 0; k < 6; k++) { n++; if (swim({ level: i, seed: 500 + i * 31 + k }).s.state === 'won') wins++; }
  console.log(`wins ${wins}/${n}`);
  assert.ok(wins >= n * 0.75);
});

test('a fish that does not swim runs out of time (try again, nothing is lost)', () => {
  const { s } = swim({ level: 0, seed: 2 }, 'none');
  assert.equal(s.state, 'lost');
  assert.ok(s.result.by === 'time' || SPECIES[s.result.by].predator);
});

test('eating smaller creatures grows the fish; bigger ones cannot be eaten', () => {
  const s = new Sea({ level: 0, seed: 1 });
  s.creatures = [];
  s.rand = () => 0.99;
  const f = s.fish;
  s.creatures.push({ id: 900, kind: 'damsel', x: f.x + Math.sin(f.a) * 0.6, z: f.z + Math.cos(f.a) * 0.6, cm: 8, a: 0, t: 0, y: 0, warn: 0, lunge: 0, cool: 9, ink: 0 });
  s.creatures.push({ id: 901, kind: 'puffer', x: f.x - 0.5, z: f.z, cm: 20, a: 0, t: 0, y: 0, warn: 0, lunge: 0, cool: 9, ink: 0 });
  const before = f.cm;
  s.step(1 / 30);
  assert.ok(f.cm > before);
  assert.ok(s.creatures.some((c) => c.id === 901));
  assert.ok(8 <= 10 * EAT);
});

test('a predator warns before it lunges; dashing helps; easy mode is gentler', () => {
  const s = new Sea({ level: 0, seed: 1 });
  s.creatures = [];
  const g = { id: 950, kind: 'grouper', x: s.fish.x + 5, z: s.fish.z, cm: 60, a: -Math.PI / 2, t: 0, y: 0, warn: 0, lunge: 0, cool: 0, ink: 0 };
  s.creatures.push(g);
  s.rand = () => 0.99;
  s.t = 20; // hunters wait a little at the start of a level
  const ev = s.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'warn'));
  assert.equal(s.lives, 3);
  assert.equal(new Sea({ easy: true }).lives, 4);
  assert.equal(s.dash(), true);
  assert.equal(s.dash(), false);
});

test('saves are cleaned', () => {
  const v = normalizeSave({ unlocked: 7, stars: { 1: 3, 2: 9 }, best: { 1: 44.6 } });
  assert.equal(v.unlocked, 3);
  assert.deepEqual(v.stars, { 1: 3 });
  assert.deepEqual(v.best, { 1: 45 });
});
