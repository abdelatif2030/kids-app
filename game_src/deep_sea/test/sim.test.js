import test from 'node:test';
import assert from 'node:assert/strict';
import { Sea, LEVELS, robotSwim, normalizeSave, albumEntries, SPECIES, EAT } from '../src/sim.js';

function swim(opts, mode = 'robot') {
  const s = new Sea(opts);
  const dt = 1 / 30;
  const seen = { eat: 0, bitten: 0, warn: 0, dash: 0, bait: 0, boss: 0, ink: 0, kinds: new Set(), maxCombo: 0 };
  for (let i = 0; i < 400 * 30; i++) {
    if (mode === 'robot') { const m = robotSwim(s); s.setMove(m.x, m.z); if (m.dash) s.dash(); }
    for (const e of s.step(dt)) {
      if (e.type === 'eat') { seen.eat++; seen.kinds.add(e.kind); seen.maxCombo = Math.max(seen.maxCombo, e.combo); }
      if (e.type in seen && typeof seen[e.type] === 'number') seen[e.type]++;
    }
    if (s.state === 'won') break;
  }
  return { s, seen };
}

/** Put a lunging predator's mouth right on the fish and step once, so a bite lands. */
function forceBite(s) {
  const f = s.fish;
  f.invul = 0;
  f.dashT = 0;
  const cm = Math.max(60, f.cm * 2);
  const cr = (cm / 10) * 0.5;
  s.creatures = [{ id: 990, kind: 'grouper', x: f.x, z: f.z - cr * 0.8, cm, a: 0, t: 0, y: 0, warn: 0, lunge: 0.5, cool: 9, ink: 0 }];
  s.rand = () => 0.99;
  return s.step(1 / 30);
}

test('the robot clears all eight Red Sea stops (Hurghada, Ras Mohammed squid hunt, the Blue Hole shark)', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    let run;
    for (let k = 0; k < 3; k++) { run = swim({ level: i, seed: 3 + i + k * 40 }); if (run.s.state === 'won') break; }
    const { s, seen } = run;
    console.log(`level ${i + 1} (${s.level.en}): ${s.state} t=${s.t.toFixed(0)}s cm=${s.fish.cm.toFixed(0)} eaten=${seen.eat} kinds=${[...seen.kinds]} bitten=${seen.bitten} warns=${seen.warn} dashes=${seen.dash} baits=${seen.bait} combo=${seen.maxCombo} stars=${s.result.stars}`);
    assert.equal(s.state, 'won', `level ${i + 1}`);
    if (i === 1) assert.ok(s.squid >= 1, 'hunted squid');
    if (i === 2) { assert.equal(seen.boss, 1); assert.ok(seen.kinds.has('shark'), 'devoured the shark'); }
    if (i === 7) { assert.ok(s.squid >= LEVELS[7].task.n, 'Hamata squid hunt done'); assert.equal(seen.boss, 1); assert.ok(seen.kinds.has('shark'), 'devoured the Hamata shark'); }
  }
});

test('eight stops: ids 1..8 appended, the first six gameplay fields unchanged', () => {
  assert.equal(LEVELS.length, 8);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8]);
  const first6 = [
    { id: 1, ar: 'شعاب الغردقة', en: 'Hurghada Reef', biome: 'reef', look: undefined, start: 10, goal: 45, star3: 90, star2: 120, half: 48, halfY: 9, bait: 'sardine', task: undefined, boss: undefined, mix: [['plankton', 4], ['shrimp', 3], ['damsel', 4], ['jelly', 2], ['butterfly', 3], ['puffer', 2], ['grouper', 1]] },
    { id: 2, ar: 'رأس محمد', en: 'Ras Mohammed', biome: 'kelp', look: undefined, start: 30, goal: 110, star3: 70, star2: 95, half: 75, halfY: 13, bait: 'mackerel', task: { kind: 'squid', n: 3 }, boss: undefined, mix: [['butterfly', 3], ['puffer', 2], ['mackerel', 4], ['squid', 4], ['barracuda', 1]] },
    { id: 3, ar: 'الثقب الأزرق', en: 'The Blue Hole', biome: 'trench', look: undefined, start: 70, goal: 250, star3: 85, star2: 115, half: 120, halfY: 20, bait: 'lantern', task: undefined, boss: 'shark', mix: [['lantern', 4], ['squid', 3], ['tuna', 3], ['angler', 1], ['barracuda', 1]] },
    { id: 4, ar: 'بيت الدلافين', en: 'Dolphin House', biome: 'reef', look: 'night', start: 60, goal: 180, star3: 80, star2: 105, half: 60, halfY: 11, bait: 'mackerel', task: undefined, boss: undefined, mix: [['butterfly', 3], ['jelly', 3], ['mackerel', 3], ['squid', 3], ['barracuda', 2], ['grouper', 1]] },
    { id: 5, ar: 'السفينة الغارقة', en: 'The Great Wreck', biome: 'kelp', look: 'wreck', start: 90, goal: 300, star3: 75, star2: 100, half: 85, halfY: 15, bait: 'mackerel', task: { kind: 'squid', n: 5 }, boss: undefined, mix: [['mackerel', 3], ['squid', 4], ['tuna', 3], ['barracuda', 2]] },
    { id: 6, ar: 'إلفينستون', en: 'Elphinstone', biome: 'trench', look: 'abyss', start: 130, goal: 450, star3: 95, star2: 125, half: 130, halfY: 22, bait: 'tuna', task: undefined, boss: 'shark', mix: [['lantern', 3], ['tuna', 3], ['squid', 3], ['angler', 2], ['barracuda', 2]] },
  ];
  for (let i = 0; i < 6; i++) {
    const lv = LEVELS[i];
    const pick = { id: lv.id, ar: lv.ar, en: lv.en, biome: lv.biome, look: lv.look, start: lv.start, goal: lv.goal, star3: lv.star3, star2: lv.star2, half: lv.half, halfY: lv.halfY, bait: lv.bait, task: lv.task, boss: lv.boss, mix: lv.mix };
    assert.deepEqual(pick, first6[i], `stop ${i + 1} gameplay fields unchanged`);
  }
  // the two appended stops differ in more than numbers
  assert.equal(LEVELS[6].en, 'Wadi El Gemal');
  assert.ok(!LEVELS[6].task && !LEVELS[6].boss, 'Wadi El Gemal is the calm breather: no task, no boss');
  assert.equal(LEVELS[7].en, 'Hamata Islands');
  assert.ok(LEVELS[7].task && LEVELS[7].boss, 'Hamata combines the squid hunt and the shark boss — the only stop that does');
  assert.ok(LEVELS[6].goal > LEVELS[5].goal && LEVELS[7].goal > LEVELS[6].goal, 'the growth curve keeps rising gently');
});

test('the reef album locks and unlocks with stop completion', () => {
  const fresh = albumEntries(null);
  assert.equal(fresh.length, 8);
  assert.ok(fresh.every((e) => !e.unlocked), 'a fresh save shows every card locked');
  const mid = albumEntries({ stars: { 1: 1, 3: 2, 8: 3 } });
  assert.deepEqual(mid.filter((e) => e.unlocked).map((e) => e.level.id), [1, 3, 8]);
  const full = albumEntries({ stars: Object.fromEntries(LEVELS.map((l) => [l.id, 1])) });
  assert.ok(full.every((e) => e.unlocked), 'finishing every stop completes the album');
  for (const lv of LEVELS) {
    assert.ok(SPECIES[lv.species], `stop ${lv.id} features a real species`);
    assert.ok(lv.mix.some(([k]) => k === lv.species) || lv.boss === lv.species, `stop ${lv.id}'s featured species is met there`);
    assert.ok(lv.fact.ar.length > 10 && lv.fact.en.length > 10, `stop ${lv.id} has a fact in both languages`);
    assert.ok(SPECIES[lv.species].ar && SPECIES[lv.species].en, `stop ${lv.id}'s species has both names`);
  }
});

test('an old finished 6-stop save migrates: stops 1–6 open in the album, 7–8 still to sail', () => {
  const old = { unlocked: 7, stars: { 1: 3, 2: 2, 3: 3, 4: 1, 5: 2, 6: 3 }, best: { 6: 460 } };
  const v = normalizeSave(old);
  assert.equal(v.unlocked, 7, 'stop 7 is the next stop to sail');
  assert.deepEqual(v.stars, old.stars);
  const entries = albumEntries(old);
  assert.deepEqual(entries.map((e) => e.unlocked), [true, true, true, true, true, true, false, false]);
  assert.equal(normalizeSave({ stars: { 6: 1 } }).unlocked, 7, 'stars alone derive the unlock, as before');
});

test('a scripted campaign sails stop 1 → 8 in order, unlocking the chain and completing the album', () => {
  let save = normalizeSave(null);
  assert.equal(save.unlocked, 1);
  for (let i = 0; i < LEVELS.length; i++) {
    const lv = LEVELS[i];
    assert.equal(save.unlocked, lv.id, `stop ${lv.id} is unlocked when the campaign reaches it`);
    let run;
    for (let k = 0; k < 3; k++) { run = swim({ level: i, seed: 900 + i * 17 + k * 40 }); if (run.s.state === 'won') break; }
    assert.equal(run.s.state, 'won', `campaign stop ${lv.id}`);
    // the same bookkeeping _results() does in main.js: record stars/best, unlock the next stop
    save = normalizeSave({ ...save, stars: { ...save.stars, [lv.id]: Math.max(save.stars[lv.id] ?? 0, run.s.result.stars) }, best: { ...save.best, [lv.id]: Math.round(run.s.result.cm) }, unlocked: Math.min(LEVELS.length, lv.id + 1) });
  }
  assert.equal(save.unlocked, 8);
  assert.ok(albumEntries(save).every((e) => e.unlocked), 'the album is complete at the end of the campaign');
});

test('the robot wins most runs', () => {
  let wins = 0;
  let n = 0;
  for (let i = 0; i < LEVELS.length; i++) for (let k = 0; k < 6; k++) { n++; if (swim({ level: i, seed: 500 + i * 31 + k }).s.state === 'won') wins++; }
  console.log(`wins ${wins}/${n}`);
  assert.ok(wins >= n * 0.75);
});

test('a fish that does not swim can idle forever — no timer, no lives, no fail', () => {
  const s = new Sea({ level: 0, seed: 2 });
  const dt = 1 / 30;
  for (let i = 0; i < 200 * 30; i++) s.step(dt); // far beyond every old per-level time limit
  assert.equal(s.state, 'play');
  assert.equal(s.result, undefined);
  assert.ok(s.t >= 199);
  assert.ok(!('lives' in s) && !('left' in s), 'the sim has no lives and no countdown at all');
});

test('a slow, patient swim still wins — with one star, never a fail', () => {
  const dt = 1 / 30;
  let s;
  for (let k = 0; k < 3; k++) {
    s = new Sea({ level: 0, seed: 500 + k });
    for (let i = 0; i < 160 * 30; i++) s.step(dt); // dawdle well past the old 150 s limit and both star thresholds
    assert.equal(s.state, 'play', 'dawdling must not end the run');
    for (let i = 0; i < 200 * 30 && s.state !== 'won'; i++) { const m = robotSwim(s); s.setMove(m.x, m.z); if (m.dash) s.dash(); s.step(dt); }
    if (s.state === 'won') break;
  }
  assert.equal(s.state, 'won');
  assert.equal(s.result.stars, 1);
  assert.ok(s.result.time > LEVELS[0].star2);
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

test('a predator warns before it lunges; dashing helps', () => {
  const s = new Sea({ level: 0, seed: 1 });
  s.creatures = [];
  const g = { id: 950, kind: 'grouper', x: s.fish.x + 5, z: s.fish.z, cm: 60, a: -Math.PI / 2, t: 0, y: 0, warn: 0, lunge: 0, cool: 0, ink: 0 };
  s.creatures.push(g);
  s.rand = () => 0.99;
  s.t = 20; // hunters wait a little at the start of a level
  const ev = s.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'warn'));
  assert.equal(s.bites, 0);
  assert.equal(s.dash(), true);
  assert.equal(s.dash(), false);
});

test('a bite is a bump plus a small growth cost — never a fail, however many bites', () => {
  const s = new Sea({ level: 0, seed: 1 });
  s.fish.cm = 40;
  const before = s.fish.cm;
  const ev = forceBite(s);
  assert.ok(ev.some((e) => e.type === 'bitten'), 'the bite lands');
  assert.ok(s.fish.cm < before && s.fish.cm >= s.startCm, 'a bite costs a little growth only');
  for (let i = 0; i < 30; i++) forceBite(s);
  assert.equal(s.state, 'play', 'thirty bites still cannot end the run');
  assert.equal(s.result, undefined);
  assert.ok(s.bites >= 10, `bites counted (${s.bites})`);
  assert.ok(s.fish.cm >= s.startCm, 'growth never drops below the starting size');
});

test('easy mode is gentler: a bigger starting size and a smaller bite cost', () => {
  const hard = new Sea({ level: 0, seed: 1 });
  const easy = new Sea({ level: 0, seed: 1, easy: true });
  assert.ok(easy.startCm > hard.startCm, 'easy starts bigger');
  assert.equal(easy.fish.cm, easy.startCm);
  hard.fish.cm = 40;
  easy.fish.cm = 40;
  forceBite(hard);
  forceBite(easy);
  assert.ok(easy.fish.cm > hard.fish.cm, `easy loses less growth (easy ${easy.fish.cm} vs hard ${hard.fish.cm})`);
  assert.equal(easy.state, 'play');
  assert.equal(hard.state, 'play');
});

test('saves are cleaned', () => {
  const v = normalizeSave({ unlocked: 7, stars: { 1: 3, 2: 9 }, best: { 1: 44.6 } });
  assert.equal(v.unlocked, 7);
  assert.equal(normalizeSave({ unlocked: 3, stars: { 3: 1 } }).unlocked, 4);
  assert.deepEqual(v.stars, { 1: 3 });
  assert.deepEqual(v.best, { 1: 45 });
});

void SPECIES;
