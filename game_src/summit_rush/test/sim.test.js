import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, COURSES, LANES, HALF, PEAKS, SLED_LEN, normalizeSave, layCourse, COURSE_VIS } from '../src/sim.js';

/** A careful robot: steps away from anything rolling at it, otherwise runs to crystals, pads and orbs. */
function robot(race) {
  const me = race.me;
  if (race.state === 'sled') { // ride home: chase the nearest home crystal below
    const next = race.sledLay.filter((c) => !c.got && c.s < me.s + 1).sort((a, b) => b.s - a.s)[0];
    if (next) race.steer(next.x);
    return;
  }
  if (race.gust) { race.steer(me.x - race.gust.dir * 1.8); return; } // lean into the Abbas wind
  const threat = race.hazards.filter((h) => h.s > me.s - 0.5 && h.s - me.s < 22 && Math.abs(h.x - me.x) < h.half + 1.1).sort((a, b) => a.s - b.s)[0];
  if (threat) {
    const free = LANES.filter((l) => race.hazards.every((h) => !(h.s > me.s - 1 && h.s - me.s < 24 && Math.abs(h.x - l) < h.half + 0.9)));
    if (free.length) race.steer(free.sort((a, b) => Math.abs(a - me.x) - Math.abs(b - me.x))[0]);
    return;
  }
  const want = [...race.lay.orbs.filter((o) => !o.got), ...race.lay.pads, ...race.lay.crystals.filter((c) => !c.got)].filter((o) => o.s > me.s + 1 && o.s < me.s + 12)
    .filter((o) => race.hazards.every((h) => !(h.s > me.s - 1 && h.s - me.s < 30 && Math.abs(h.x - o.x) < h.half + 1.2)))
    .sort((a, b) => a.s - b.s)[0];
  if (want) race.steer(want.x);
}

function play(ci, opts, steer = robot, maxT = 300) {
  const r = new Race(ci, opts);
  const seen = new Set();
  for (let i = 0; i < maxT * 30 && (r.state === 'count' || r.state === 'run' || r.state === 'sled'); i++) {
    steer(r);
    for (const e of r.step(1 / 30)) seen.add(e.type);
  }
  return { r, seen };
}

test('a 3-2-1 countdown, then GO', () => {
  const r = new Race(0, { seed: 3 });
  const counts = [];
  let go = false;
  for (let i = 0; i < 120; i++) for (const e of r.step(1 / 30)) { if (e.type === 'count') counts.push(e.n); if (e.type === 'go') go = true; }
  assert.deepEqual(counts, [2, 1]);
  assert.ok(go);
  assert.equal(r.state, 'run');
});

test('a careful robot reaches the summit in time on every course, in the top two', () => {
  for (let ci = 0; ci < COURSES.length; ci++) {
    for (const seed of [1, 2, 3, 4]) {
      const { r, seen } = play(ci, { seed });
      assert.equal(r.state, 'won', `course ${ci + 1} seed ${seed}: ${r.state} at ${Math.round(r.me.s)}/${r.course.len}, lives ${r.me.lives}`);
      assert.ok(r.place <= 2, `course ${ci + 1} seed ${seed} place ${r.place}`);
      assert.ok(seen.has('crystal'));
      assert.ok(r.me.score > 0);
    }
  }
});

test('standing still in the middle gets hit again and again — but kind rules: the race can never be lost', () => {
  const { r, seen } = play(1, { seed: 5 }, (race) => race.steer(race.me.x));
  assert.ok(seen.has('wipeout'));
  assert.ok(!seen.has('out') && !seen.has('timeup'), 'no fail endings exist');
  assert.notEqual(r.state, 'timeup');
});

test('the summit lanterns light at the course moment (a celebration that restores hearts, not a deadline)', () => {
  const r = new Race(0, { seed: 1 });
  r.state = 'run';
  r.me.lives = 1;
  r.t = r.time - 0.01;
  const ev = r.step(0.05);
  assert.ok(ev.some((e) => e.type === 'lanterns'));
  assert.equal(r.lanterns, true);
  assert.equal(r.me.lives, 3, 'lantern light warms everyone back to full hearts');
  assert.equal(r.state, 'run', 'the race continues past the lantern moment');
  const ev2 = r.step(0.05);
  assert.ok(!ev2.some((e) => e.type === 'lanterns'), 'lanterns fire once only');
});

test('easy mode (age 4): hits cost no heart', () => {
  const { r, seen } = play(1, { seed: 5, easy: true }, (race) => race.steer(race.me.x));
  assert.ok(seen.has('wipeout'));
  assert.equal(r.me.lives, 3);
});

test('a wipeout puts the runner on the ground, pushes them back, then they get up', () => {
  const r = new Race(0, { seed: 1 });
  r.state = 'run';
  r.me.s = 100;
  r.hazards.push({ id: 99, kind: 'boulder', s: 100.2, x: r.me.x, v: 0, r: 1, half: 1, roll: 0 });
  const ev = r.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'wipeout'));
  assert.ok(r.me.s < 95);
  assert.equal(r.me.lives, 2);
  const s0 = r.me.s;
  for (let i = 0; i < 20; i++) r.step(1 / 30);
  assert.equal(r.me.s, s0, 'lies still while down');
  for (let i = 0; i < 40; i++) r.step(1 / 30);
  assert.ok(r.me.s > s0, 'up and running again');
});

test('a shield takes one hit', () => {
  const r = new Race(0, { seed: 1 });
  r.state = 'run';
  r.me.s = 100;
  r.me.shield = 5;
  r.hazards.push({ id: 99, kind: 'snowball', s: 100.2, x: r.me.x, v: 0, r: 1, half: 1, roll: 0 });
  const ev = r.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'blocked'));
  assert.equal(r.me.lives, 3);
  assert.equal(r.me.down, 0);
});

test('boost pads and tailwind make the runner faster', () => {
  const a = new Race(0, { seed: 1 });
  a.state = 'run';
  a.me.s = 10;
  a.me.boost = 1.5;
  a.lay.crystals.length = 0;
  a.step(0.1);
  const b = new Race(0, { seed: 1 });
  b.state = 'run';
  b.me.s = 10;
  b.lay.crystals.length = 0;
  b.step(0.1);
  assert.ok(a.me.s - 10 > (b.me.s - 10) * 1.4);
});

test('the course: crystals inside the run, orbs of both kinds, pads', () => {
  for (const c of COURSES) {
    const l = layCourse(c, 7);
    assert.ok(l.crystals.length > 40);
    for (const cr of l.crystals) assert.ok(Math.abs(cr.x) <= HALF);
    assert.ok(l.orbs.some((o) => o.kind === 'tailwind') && l.orbs.some((o) => o.kind === 'shield'));
    assert.equal(l.pads.length, c.pads);
  }
});

test('progress is cleaned when loaded', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, best: {}, crystals: 0, muted: false });
  // Phase 2H: the cap is now 13 courses (was 5) — an old unlocked:9 save is valid progress, not damage
  assert.deepEqual(normalizeSave({ unlocked: 9, best: { 1: 2, 2: 7 }, crystals: -3, muted: 1 }), { unlocked: 9, best: { 1: 2 }, crystals: 0, muted: true });
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, COURSES.length);
});

import fs from 'node:fs';

test('Catherine Summit anchor: all five courses climb Mount Catherine', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['قمة سانت كاترين', 'Catherine Summit']"));
  assert.ok(i18n.includes('Wadi El-Arbaein'));
  assert.ok(i18n.includes('Mount Catherine Summit'));
  assert.ok(!i18n.includes('Kilimanjaro') && !i18n.includes('Alps'));
  assert.equal(COURSES.length, 13); // Phase 2H: 5 Catherine + 4 Abbas + 4 Safsafa
});

// ---------- Phase 2H: three peaks + base camp ----------

test('Phase 2H freeze: the five Catherine courses are byte-identical to before the expansion', () => {
  assert.deepEqual(COURSES.slice(0, 5), [
    { id: 1, len: 520, time: 60, gap: [34, 46], speed: [4.5, 6], logs: 0.15, orbs: 3, pads: 5, rival: 0.92 },
    { id: 2, len: 555, time: 60, gap: [28, 40], speed: [5, 7], logs: 0.3, orbs: 3, pads: 5, rival: 0.97 },
    { id: 3, len: 585, time: 60, gap: [24, 34], speed: [6, 8], logs: 0.4, orbs: 4, pads: 6, rival: 1.02 },
    { id: 4, len: 615, time: 62, gap: [22, 31], speed: [6.5, 8.5], logs: 0.45, orbs: 4, pads: 6, rival: 1.04 },
    { id: 5, len: 645, time: 64, gap: [20, 29], speed: [7, 9], logs: 0.5, orbs: 4, pads: 7, rival: 1.06 },
  ]);
  // and their laid-out courses did not move (same seed → same first crystals)
  const l = layCourse(COURSES[0], 7);
  assert.equal(l.crystals.length, 66);
  assert.deepEqual(l.crystals[0], { s: 30, x: -3.6, got: false });
});

test('Phase 2H peaks: structure, append-only ids, distinct twists per peak', () => {
  assert.deepEqual(PEAKS, [
    { id: 'catherine', courses: [1, 2, 3, 4, 5], final: 5 },
    { id: 'abbas', courses: [6, 7, 8, 9], final: 9 },
    { id: 'safsafa', courses: [10, 11, 12, 13], final: 13 },
  ]);
  assert.deepEqual(COURSES.map((c) => c.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  for (const c of COURSES.slice(5, 9)) { assert.equal(c.peak, 'abbas'); assert.equal(c.gusts, true); }
  for (const c of COURSES.slice(9)) {
    assert.equal(c.peak, 'safsafa');
    assert.ok(c.crysGap, 'Safsafa courses carry the crystal-trail spacing');
    // the crystal trail is real: a Safsafa course lays far more crystals than a Catherine one
    assert.ok(layCourse(c, 7).crystals.length > layCourse(COURSES[0], 7).crystals.length * 1.5);
    // and its rolling things are gentler (wider gaps) than the Abbas course before it
    assert.ok(c.gap[0] > COURSES[8].gap[0] - 4);
  }
  // gentle difficulty continuation: lengths grow inside a peak; a new peak may restart a little
  // shorter (its own twist carries the challenge), never by more than 70 m
  for (let i = 1; i < COURSES.length; i++) {
    const newPeak = COURSES[i].peak !== COURSES[i - 1].peak;
    assert.ok(COURSES[i].len >= COURSES[i - 1].len - (newPeak ? 70 : 0), `course ${i + 1} length`);
  }
});

test('Phase 2H unlock chain + old-save migration: a finished Catherine opens Abbas, and so on', () => {
  // a pre-2H save: all five Catherine courses won, unlocked capped at 5 back then
  const old = normalizeSave({ unlocked: 5, best: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 2 }, crystals: 120, muted: false });
  assert.equal(old.unlocked, 6, 'winning course 5 opens Abbas course 6');
  assert.deepEqual(old.best, { 1: 1, 2: 2, 3: 1, 4: 3, 5: 2 });
  assert.equal(normalizeSave({ best: { 9: 1 } }).unlocked, 10, 'winning the Abbas final opens Safsafa');
  assert.equal(normalizeSave({ best: { 13: 4 } }).unlocked, 13, 'the last course caps at the campaign end');
  // sequential chain: winning course n (and only n) opens exactly n+1
  for (let n = 1; n < 13; n++) assert.equal(normalizeSave({ best: { [n]: 2 } }).unlocked, n + 1);
});

test('Phase 2H Abbas gusts: the wind shoves the runner sideways, fires once per gust, and can never end a run', () => {
  const r = new Race(5, { seed: 2 }); // course 6, the first Abbas course
  r.state = 'run';
  r.gustNext = 0.01;
  let gustEvents = 0;
  let maxShift = 0;
  const x0 = r.me.x;
  for (let i = 0; i < 30 * 4 && gustEvents === 0; i++) for (const e of r.step(1 / 30)) if (e.type === 'gust') gustEvents++;
  assert.equal(gustEvents, 1);
  assert.ok(r.gust, 'a gust is blowing');
  for (let i = 0; i < 30 * 2; i++) { r.step(1 / 30); maxShift = Math.max(maxShift, Math.abs(r.me.x - x0)); }
  assert.ok(maxShift > 0.3, `the gust pushed the runner (${maxShift.toFixed(2)} m)`); // ~0.4 m measured against full steering resistance — a visible wobble, never a shove into a hazard
  assert.equal(r.state, 'run');
  // Catherine courses never gust
  const c = new Race(0, { seed: 2 });
  c.state = 'run';
  let any = false;
  for (let i = 0; i < 30 * 30; i++) for (const e of c.step(1 / 30)) if (e.type === 'gust') any = true;
  assert.equal(any, false);
});

test('Phase 2H sled ride home: only peak finals sled, crystals are gathered, then the race is won', () => {
  const { r, seen } = play(4, { seed: 3 }); // course 5 = the Catherine final
  assert.ok(seen.has('sledstart'), 'the summit of a peak final starts the sled ride');
  assert.ok(seen.has('sledcrystal'));
  assert.ok(r.sledGot > 0, `robot gathered ${r.sledGot} home crystals`);
  assert.equal(r.state, 'won');
  assert.ok(r.place >= 1 && r.place <= 4);
  assert.ok(Math.abs(r.me.s - (r.course.len - SLED_LEN)) < SLED_LEN * 0.02 + 1, 'the ride ends SLED_LEN below the summit');
  const plain = play(0, { seed: 3 }); // course 1 is not a final
  assert.ok(!plain.seen.has('sledstart'));
  assert.equal(plain.r.state, 'won');
});

test('Phase 2H: a careful robot wins every new course (Abbas + Safsafa)', () => {
  for (let ci = 5; ci < COURSES.length; ci++) {
    for (const seed of [1, 2]) {
      const { r } = play(ci, { seed });
      assert.equal(r.state, 'won', `course ${ci + 1} seed ${seed}: ${r.state} at ${Math.round(r.me.s)}/${r.course.len}`);
      assert.ok(r.place <= 3, `course ${ci + 1} seed ${seed} place ${r.place}`);
    }
  }
});

test('Director Protocol: every course has its OWN background — no two courses share a look', () => {
  // the peak base looks main.js merges COURSE_VIS over (kept in step with PEAK_VIS there)
  const PEAK_BASE = {
    catherine: { bg: 0xd8dcf0, sun: 0xfff4e8, flag: 0xe8b02a, arch: 0xe8402a },
    abbas: { bg: 0xf0dcbc, sun: 0xffdfae, flag: 0xc8402a, arch: 0x9a8a72 },
    safsafa: { bg: 0xdcead2, sun: 0xffe3c2, flag: 0x3f9e4d, arch: 0x2f7a5a },
  };
  const peakId = (id) => (id <= 5 ? 'catherine' : id <= 9 ? 'abbas' : 'safsafa');
  const look = (id) => {
    const v = { ...PEAK_BASE[peakId(id)], ...(COURSE_VIS[id] || {}) };
    return { bg: v.bg, pano: v.pano ?? ((id - 1) % 3) + 1, panoOff: v.panoOff ?? 0, panoTint: v.panoTint ?? 0xffffff, sun: v.sun, flag: v.flag, arch: v.arch };
  };
  // every course carries an explicit entry (no silent fall back to a shared look)
  assert.deepEqual(Object.keys(COURSE_VIS).map(Number).sort((a, b) => a - b), COURSES.map((c) => c.id));
  const sig = (l) => `${l.bg}|${l.pano}|${l.panoOff}|${l.panoTint}`;
  const seen = new Map();
  for (const c of COURSES) {
    const l = look(c.id);
    assert.ok(!seen.has(sig(l)), `course ${c.id} shares its background signature with course ${seen.get(sig(l))}`);
    seen.set(sig(l), c.id);
    // the backdrop window itself (image + offset + tint) is unique per course
    assert.ok(l.pano >= 1 && l.pano <= 3 && l.panoOff >= 0 && l.panoOff < 1);
  }
  // neighbours inside a peak must differ in sky colour too — palette family is fine, clones are not
  for (let id = 2; id <= 13; id++) {
    if (peakId(id) === peakId(id - 1)) assert.notEqual(look(id).bg, look(id - 1).bg, `courses ${id - 1} and ${id} share a sky`);
  }
  // presentation only: the frozen Catherine gameplay data is untouched by the look table
  assert.deepEqual(COURSES[0], { id: 1, len: 520, time: 60, gap: [34, 46], speed: [4.5, 6], logs: 0.15, orbs: 3, pads: 5, rival: 0.92 });
});

test('Phase 2H scripted campaign: first course to last, in unlock order, every summit reached', () => {
  let save = normalizeSave(null);
  for (let ci = 0; ci < COURSES.length; ci++) {
    assert.ok(COURSES[ci].id <= save.unlocked, `course ${ci + 1} is locked before its turn (unlocked=${save.unlocked})`);
    const { r } = play(ci, { seed: 7 });
    assert.equal(r.state, 'won', `campaign course ${ci + 1}`);
    save = normalizeSave({ ...save, best: { ...save.best, [COURSES[ci].id]: r.place } });
  }
  assert.equal(save.unlocked, 13);
  assert.equal(Object.keys(save.best).length, 13, 'all thirteen summits in the camp album');
});
