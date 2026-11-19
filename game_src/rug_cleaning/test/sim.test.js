import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Job, LEVELS, normalizeSave, payout, starsFor, upgradeCost, circularity, straightness, READY, MAX_LEVEL, UPGRADES } from '../src/logic.js';

/** A robot cleaner that does all five stages with sweeping paths. */
function sweep(j, fn, r, vertical = false) {
  const step = r * 1.2;
  let dir = 1;
  if (!vertical) {
    for (let y = r * 0.6; y < j.rows + r * 0.6; y += step) { const a = dir > 0 ? 0 : j.cols; const b = dir > 0 ? j.cols : 0; fn(a, y, b, y); dir = -dir; }
  } else {
    for (let x = r * 0.6; x < j.cols + r * 0.6; x += step) { fn(x, 0, x, j.rows); }
  }
}
function robot(j, until = 5) {
  if (until > 0) {
    j.beginStage(0);
    for (let pass = 0; pass < 2; pass++) for (let y = 2; y < j.rows + 4; y += j.radius('beat') * 0.9) for (let x = 2; x < j.cols + 4; x += j.radius('beat') * 0.9) j.beat(x, y);
  }
  if (until > 1) { j.beginStage(1); sweep(j, (a, b, c, d) => j.spray(a, b, c, d), j.radius('foam')); }
  if (until > 2) {
    j.beginStage(2);
    const r = j.radius('brush');
    for (let y = 0; y < j.rows + r; y += r * 1.1) for (let x = 0; x < j.cols + r; x += r * 1.1) {
      for (let loop = 0; loop < 3; loop++) for (let k = 0; k < 8; k++) { const a0 = (k / 8) * 6.28; const a1 = ((k + 1) / 8) * 6.28; j.scrub(x + Math.cos(a0) * r * 0.5, y + Math.sin(a0) * r * 0.5, x + Math.cos(a1) * r * 0.5, y + Math.sin(a1) * r * 0.5, 1); }
    }
  }
  if (until > 3) { j.beginStage(3); sweep(j, (a, b, c, d) => j.jet(a, b, c, d, 0.5), j.radius('jet')); }
  if (until > 4) { j.beginStage(4); sweep(j, (a, b, c, d) => { j.newStroke(); j.squeegee(a, b, c, d, 1); }, j.radius('squeegee') * 0.2, true); }
}

test('normalizeSave survives garbage and opens the next rug after a finished one', () => {
  for (const bad of [null, undefined, 5, 'x', [], { coins: 'abc', upg: 7, stars: { 1: 99, x: 2 } }]) {
    const s = normalizeSave(bad);
    assert.ok(s.coins >= 0 && s.unlocked >= 1 && s.unlocked <= LEVELS.length);
    for (const id of UPGRADES) assert.ok(s.upg[id] >= 0 && s.upg[id] <= MAX_LEVEL);
  }
  const s = normalizeSave({ coins: 50.7, stars: { 1: 3, 2: 1 }, upg: { jet: 2, nozzle: 9 } });
  assert.equal(s.coins, 50); assert.equal(s.unlocked, 3); assert.equal(s.upg.jet, 2); assert.equal(s.upg.nozzle, MAX_LEVEL);
});

test('twelve rugs of growing difficulty', () => {
  assert.equal(LEVELS.length, 12);
  assert.equal(new Set(LEVELS.map((l) => l.id)).size, 12);
  for (let i = 1; i < 12; i++) { assert.ok(LEVELS[i].reward > LEVELS[i - 1].reward); assert.ok(LEVELS[i].coffee + LEVELS[i].mud >= LEVELS[i - 1].coffee + LEVELS[i - 1].mud); }
});

test('dirt generation is deterministic and in range', () => {
  const a = new Job(LEVELS[7]); const b = new Job(LEVELS[7]);
  assert.deepEqual(Array.from(a.stain), Array.from(b.stain));
  assert.ok(a.dust0 > 0 && a.stain0 > 0);
  for (const arr of [a.dust, a.stain, a.dull]) for (const v of arr) assert.ok(v >= 0 && v <= 1);
  assert.ok(a.kind.includes(1) && a.kind.includes(2));
  const p = new Job(LEVELS[0], 72, 112); assert.ok(p.stain0 > 0);
  assert.equal(new Job(LEVELS[0]).cleanliness(), 0);
});

test('a robot cleaner finishes every rug and every stage reaches READY', () => {
  for (const def of LEVELS) {
    const j = new Job(def);
    robot(j, 0 + 1); assert.ok(j.progress(0) >= READY, `beat ${def.id}`);
    robot(j, 5);
    j.beginStage(4);
    const c = j.cleanliness();
    assert.ok(c > 0.88, `rug ${def.id} cleanliness ${c}`);
    assert.ok(j.water > 0 && j.water < def.parWater * 4, `water ${j.water} par ${def.parWater}`);
  }
});

test('stage progress is reached at each step on a medium rug', () => {
  const j = new Job(LEVELS[5]);
  j.beginStage(0); for (let y = 2; y < 80; y += 7) for (let x = 2; x < 120; x += 7) j.beat(x, y);
  assert.ok(j.progress(0) > 0.5);
  robot(j, 5);
  j.beginStage(4);
  assert.ok(j.progress(2) >= READY); assert.ok(j.progress(3) >= READY);
});

test('skipping steps costs cleanliness; each step adds to it', () => {
  const vals = [1, 2, 3, 4, 5].map((u) => { const j = new Job(LEVELS[4]); robot(j, u); return j.cleanliness(); });
  for (let i = 3; i < vals.length; i++) assert.ok(vals[i] >= vals[i - 1] - 1e-9, `step ${i}: ${vals}`);
  assert.ok(vals[4] - vals[0] > 0.4 && vals[2] > vals[0]);
  const noScrub = new Job(LEVELS[4]);
  noScrub.beginStage(0); for (let y = 2; y < 80; y += 5) for (let x = 2; x < 120; x += 5) noScrub.beat(x, y);
  noScrub.beginStage(3); sweep(noScrub, (a, b, c, d) => noScrub.jet(a, b, c, d, 0.5), 5);
  noScrub.beginStage(4); sweep(noScrub, (a, b, c, d) => { noScrub.newStroke(); noScrub.squeegee(a, b, c, d, 1); }, 3, true);
  const full = new Job(LEVELS[4]); robot(full, 5);
  assert.ok(noScrub.cleanliness() < full.cleanliness() - 0.2);
});

test('squeegee on a dry rug and scrubbing without foam do almost nothing', () => {
  const j = new Job(LEVELS[2]);
  assert.equal(j.squeegee(0, 10, 100, 10, 1), 0);
  const before = j.stain0;
  for (let k = 0; k < 20; k++) j.scrub(30, 30, 40, 36, 1);
  let s = 0; for (const v of j.stain) s += v;
  assert.ok(s > before * 0.9);
});

test('the jet costs water; the water-saving nozzle costs less; standing still still uses water', () => {
  const a = new Job(LEVELS[0]); const b = new Job(LEVELS[0], 144, 92, { nozzle: 3 });
  a.jet(0, 10, 100, 10, 1); b.jet(0, 10, 100, 10, 1);
  assert.ok(b.water < a.water * 0.6);
  const c = new Job(LEVELS[0]); c.jet(20, 20, 20, 20, 3); assert.ok(c.water > 0);
});

test('bigger tools clean faster', () => {
  const small = new Job(LEVELS[3]); const big = new Job(LEVELS[3], 144, 92, { beat: 3 });
  assert.ok(big.radius('beat') > small.radius('beat') * 1.8);
  const hits = (j) => { let n = 0; for (let y = 2; y < 80; y += 3) for (let x = 2; x < 120; x += 3) { j.beat(x, y); n++; if (j.progress(0) > 0.8) return n; } return n; };
  assert.ok(hits(big) < hits(small));
});

test('payout rewards cleanliness, speed and little water; stars; upgrade costs', () => {
  const d = LEVELS[3];
  const good = payout(d, 0.95, d.parTime * 0.6, d.parWater * 0.7); const slow = payout(d, 0.95, d.parTime * 3, d.parWater * 3); const dirty = payout(d, 0.5, d.parTime * 0.6, d.parWater * 0.7);
  assert.ok(good.total > slow.total && good.total > dirty.total);
  assert.equal(slow.speed, 0); assert.equal(slow.water, 0);
  assert.equal(starsFor(0.95), 3); assert.equal(starsFor(0.8), 2); assert.equal(starsFor(0.5), 1); assert.equal(starsFor(0.1), 0);
  for (const id of UPGRADES) for (let l = 1; l < MAX_LEVEL; l++) assert.ok(upgradeCost(id, l) > upgradeCost(id, l - 1));
});

test('circularity and straightness', () => {
  const circle = []; for (let i = 0; i < 14; i++) circle.push({ x: Math.cos(i * 0.6) * 10, y: Math.sin(i * 0.6) * 10 });
  const line = []; for (let i = 0; i < 14; i++) line.push({ x: i * 3, y: 0 });
  const zig = []; for (let i = 0; i < 14; i++) zig.push({ x: i * 3, y: i % 2 ? 6 : 0 });
  assert.ok(circularity(circle) > 0.8); assert.ok(circularity(line) < 0.1); assert.ok(circularity(zig) < 0.4);
  assert.ok(straightness(line) > 0.99); assert.ok(straightness(circle) < 0.5); assert.ok(straightness(zig) < 0.5);
});

test('tools can be picked in any order and a baseline never shrinks (rings do not jump back)', () => {
  const j = new Job(LEVELS[0], 60, 92, { beat: 0, foam: 0, brush: 0, jet: 0, squeegee: 0, nozzle: 0 });
  j.beginStage(3); assert.ok(j.progress(3) >= 0); // rinse first, nothing to rinse
  j.beginStage(1); sweep(j, (a, b, c, d) => j.spray(a, b, c, d), j.radius('foam'));
  j.beginStage(3); const p0 = j.progress(3);
  j.beginStage(2); j.beginStage(3);
  assert.ok(j.progress(3) <= p0 + 1e-9 && j.progress(3) >= 0 && j.progress(3) <= 1);
});
