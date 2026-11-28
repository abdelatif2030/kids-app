import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Swim, ROUNDS, HALF, normalizeSave, STAMPS, stampEntries } from '../src/sim.js';

/** A robot swimmer: strokes on the beat (with a little human wobble), dives under noodles, leaps walls by stroking
 * in front of them, steers round bumpers. */
function robot(w, dt, wobble = 0.06) {
  const p = w.player;
  const off = w.beatOffset(w.time + (Math.sin(w.time * 3.7) * wobble));
  if (Math.abs(off) < 0.035) w.stroke();
  const c = w.course;
  const noodle = c.noodles.find((n) => n.s - p.s > -1.2 && n.s - p.s < n.len + 2.2 + p.v * 0.3 && Math.abs(n.x - p.x) < n.len + 1);
  let want = 0;
  for (const b of c.bumpers) { const d = b.s - p.s; if (d > 0 && d < 8 + p.v * 1.2 && Math.abs(b.x - p.x) < 1.7) want = b.x + (p.x > b.x ? 2.5 : -2.5); }
  return { x: Math.max(-1, Math.min(1, (want - p.x) * 0.8)), dive: !!noodle && p.breath > 0.2 };
}

function run(w, wobble) {
  let t = 0;
  while (w.state !== 'done' && t < 300) { w.step(1 / 30, robot(w, 1 / 30, wobble)); t += 1 / 30; }
  return t;
}

test('a robot swimmer qualifies through every round and can win the final', () => {
  for (const [i, rd] of ROUNDS.entries()) {
    let q = 0;
    const line = [];
    for (let seed = 1; seed <= 4; seed++) {
      const w = new Swim({ round: i, seed });
      const t = run(w, 0.05);
      const r = w.result;
      if (r.qualified) q++;
      line.push(`${r.qualified ? 'Q' : '-'} place ${r.place} ${Math.round(t)}s perfect ${w.perfects} bonks ${w.bonks}`);
    }
    console.log(`round ${rd.id}: ${q}/4 | ${line.join(' | ')}`);
    assert.ok(q >= 2, `round ${rd.id} too hard`);
  }
});

test('off-beat strokes are slow; never stroking loses', () => {
  const lazy = new Swim({ round: 0, seed: 2 });
  let t = 0;
  while (lazy.state !== 'done' && t < 400) { lazy.step(1 / 30, {}); t += 1 / 30; }
  assert.equal(lazy.result.qualified, false);
  const w = new Swim({ round: 0, seed: 2 });
  w.state = 'race';
  w.time = w.beat * 3; // exactly on a beat
  assert.equal(w.stroke(), 'perfect');
  w.time += w.beat * 0.5; // halfway between beats
  w.player.lastStroke = -9;
  assert.equal(w.stroke(), 'off');
});

test('diving goes under a noodle and uses breath; a good stroke leaps a wall', () => {
  const w = new Swim({ round: 1, seed: 3 });
  w.state = 'race';
  w.course = { bumpers: [], noodles: [{ s: 10, x: 0, len: 4.2, w: 0, a: Math.PI / 2 }], walls: [], waves: [], slides: [] };
  Object.assign(w.player, { x: 0, s: 3, v: 4 });
  for (const s of w.swimmers.slice(1)) s.s = -50;
  let bonk = false;
  for (let i = 0; i < 90; i++) for (const e of w.step(1 / 30, { dive: true })) if (e.type === 'bonk' && e.id === 0) bonk = true;
  assert.ok(!bonk, 'dived under');
  assert.ok(w.player.breath < 1);
  const v = new Swim({ round: 1, seed: 3 });
  v.state = 'race';
  v.course = { bumpers: [], noodles: [], walls: [{ s: 8, x0: -HALF, x1: HALF }], waves: [], slides: [] };
  Object.assign(v.player, { x: 0, s: 4.5, v: 3 });
  for (const s of v.swimmers.slice(1)) s.s = -50;
  v.time = v.beat * 2;
  v.stroke();
  let hit = false;
  for (let i = 0; i < 40; i++) for (const e of v.step(1 / 30, {})) if (e.type === 'bonk' && e.id === 0) hit = true;
  assert.ok(!hit && v.player.s > 8, 'leapt the wall');
  const x = new Swim({ round: 1, seed: 3 });
  x.state = 'race';
  x.course = { bumpers: [], noodles: [], walls: [{ s: 8, x0: -HALF, x1: HALF }], waves: [], slides: [] };
  Object.assign(x.player, { x: 0, s: 6, v: 3 });
  let hit2 = false;
  for (let i = 0; i < 40; i++) for (const e of x.step(1 / 30, {})) if (e.type === 'bonk' && e.id === 0) hit2 = true;
  assert.ok(hit2 && x.player.s < 8, 'swam into the wall');
});

test('a slide is a shortcut, waves push, bumpers bonk, breath runs out', () => {
  const w = new Swim({ round: 0, seed: 1 });
  w.state = 'race';
  w.course = { bumpers: [], noodles: [], walls: [], waves: [], slides: [{ s: 20, side: 1, len: 26 }] };
  Object.assign(w.player, { x: HALF - 0.6, s: 18.5, v: 3 });
  for (let i = 0; i < 60; i++) w.step(1 / 30, { x: 1 });
  assert.ok(w.player.s > 40, `slid to ${w.player.s}`);
  const b = new Swim({ round: 0, seed: 1 });
  b.state = 'race';
  b.course = { bumpers: [{ s: 10, x: 0, r: 0.9 }], noodles: [], walls: [], waves: [], slides: [] };
  Object.assign(b.player, { x: 0, s: 8, v: 4 });
  let bonk = false;
  for (let i = 0; i < 30; i++) for (const e of b.step(1 / 30, {})) if (e.type === 'bonk') bonk = true;
  assert.ok(bonk);
  const d = new Swim({ round: 0, seed: 1 });
  d.state = 'race';
  d.course = { bumpers: [], noodles: [], walls: [], waves: [], slides: [] };
  let out = false;
  for (let i = 0; i < 30 * 6; i++) for (const e of d.step(1 / 30, { dive: true })) if (e.type === 'breath') out = true;
  assert.ok(out, 'came up for air');
});

test('everyone stays between the ropes', () => {
  const w = new Swim({ round: 3, seed: 4 });
  for (let i = 0; i < 30 * 60; i++) {
    w.step(1 / 30, { x: Math.sin(i / 25) * 2 });
    for (const s of w.swimmers) if (!s.slide) assert.ok(Math.abs(s.x) <= HALF);
  }
});

test('damaged saves load safely', () => {
  for (const bad of [null, 1, 'x', { unlocked: 12, stars: { 1: 9 } }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= ROUNDS.length);
  }
});

test('Phase 2H freeze (pin updated by Director Protocol, see below): tour content fields', () => {
  // The album is a collection layer only — no round, course number or swimmer changed by 2H.
  // DIRECTOR PROTOCOL PIN UPDATE (2026-11-27): round 4's obstacle mix was changed
  // deliberately — rounds 3 and 4 shipped with IDENTICAL mixes (12/3/3/2/2), i.e. the
  // same level with different numbers, which the protocol forbids. Round 4 (Moses
  // Springs) is now spring rapids: 10 bumpers / 4 noodles / 2 walls / 3 waves / 1 slide.
  // Names, swimmers, qualify, lengths and bpm of every round are unchanged.
  assert.deepEqual(ROUNDS.map((r) => [r.id, r.ar, r.en, r.swimmers, r.qualify, r.len, r.bpm, r.bumpers, r.noodles, r.walls, r.waves, r.slides]), [
    [1, 'حمّام النيل', 'Nile Pool', 12, 8, 250, 100, 10, 1, 1, 1, 1],
    [2, 'بركة الفيوم', 'Faiyum Pool', 10, 6, 280, 104, 10, 3, 2, 1, 1],
    [3, 'بحيرة قارون', 'Qarun Lake', 8, 4, 300, 108, 12, 3, 3, 2, 2],
    [4, 'عيون موسى', 'Moses Springs', 8, 4, 310, 110, 10, 4, 2, 3, 1],
    [5, 'جزيرة أسوان', 'Aswan Island', 7, 3, 320, 112, 14, 4, 3, 2, 2],
    [6, 'نهائي البحر الأحمر', 'Red Sea Final', 6, 1, 340, 114, 14, 4, 3, 3, 2],
  ]);
  // One stamp definition per round, aligned by id, each with a true fact + hint in both languages.
  assert.deepEqual(STAMPS.map((s) => s.roundId), ROUNDS.map((r) => r.id));
  for (const s of STAMPS) {
    assert.ok(s.icon && s.fact.ar.length > 10 && s.fact.en.length > 10, `stamp ${s.roundId} fact`);
    assert.ok(s.hint.ar.length > 5 && s.hint.en.length > 5, `stamp ${s.roundId} hint`);
    assert.notEqual(s.fact.ar, s.fact.en);
  }
});

test('Phase 2H album derivation: stamps (and pre-stamp stars) earn entries; facts never leak locked', () => {
  // Fresh save: everything locked, and a locked entry carries no fact/icon/round at all.
  const fresh = stampEntries(null);
  assert.equal(fresh.length, ROUNDS.length);
  for (const e of fresh) {
    assert.equal(e.unlocked, false);
    assert.deepEqual(Object.keys(e).sort(), ['hint', 'roundId', 'unlocked']);
    const blob = JSON.stringify(e);
    for (const s of STAMPS) { assert.ok(!blob.includes(s.fact.ar) && !blob.includes(s.fact.en), 'locked fact leaked'); assert.ok(!blob.includes(s.icon), 'locked icon leaked'); }
  }
  assert.deepEqual(stampEntries({}), fresh.map((e) => ({ ...e, hint: e.hint }))); // empty save == fresh
  // Finisher stamps earn exactly their rounds, with the round's own fact + icon.
  const got = stampEntries({ stamps: { 1: true, 3: true } });
  assert.deepEqual(got.map((e) => e.unlocked), [true, false, true, false, false, false]);
  assert.equal(got[0].round.en, 'Nile Pool');
  assert.equal(got[0].fact.en, STAMPS[0].fact.en);
  assert.equal(got[2].icon, STAMPS[2].icon);
  // Old-save migration: a pre-Phase-2D save with stars but no stamps field still
  // shows the stamps for the rounds it finished and qualified in.
  const old = stampEntries({ unlocked: 3, stars: { 1: 2, 2: 1 } });
  assert.deepEqual(old.map((e) => e.unlocked), [true, true, false, false, false, false]);
  // A full tour earns the whole album.
  const full = stampEntries({ stamps: { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true } });
  assert.ok(full.every((e) => e.unlocked && e.fact && e.round));
  // Derivation is pure: the input save is not mutated and normalizeSave is untouched by it.
  const save = { stamps: { 2: true }, stars: { 4: 3 } };
  const before = JSON.stringify(save);
  stampEntries(save);
  assert.equal(JSON.stringify(save), before);
  assert.deepEqual(normalizeSave(save), { unlocked: 5, stars: { 4: 3 }, stamps: { 2: true }, muted: false });
  // Garbage in the stamps/stars fields earns nothing extra.
  const junk = stampEntries({ stamps: { 9: true, x: true }, stars: { 1: 0, 2: -1 } });
  assert.ok(junk.every((e) => !e.unlocked));
});

test('Director Protocol: every round has a distinct obstacle mix (no reskinned levels)', () => {
  const mixes = ROUNDS.map((r) => [r.bumpers, r.noodles, r.walls, r.waves, r.slides].join('/'));
  assert.equal(new Set(mixes).size, ROUNDS.length, `duplicate mixes: ${mixes.join(' | ')}`);
  // and the full challenge signature (field size + qualify + length + tempo) differs too
  const sigs = ROUNDS.map((r) => [r.swimmers, r.qualify, r.len, r.bpm, ...mixes].join('|'));
  assert.equal(new Set(sigs).size, ROUNDS.length);
});

test('Egypt Waters Tour anchor + stamps: tour places, and a stamp unlocks like a star', () => {
  assert.deepEqual(ROUNDS.map((r) => r.en), ['Nile Pool', 'Faiyum Pool', 'Qarun Lake', 'Moses Springs', 'Aswan Island', 'Red Sea Final']);
  assert.deepEqual(ROUNDS.map((r) => r.qualify), [8, 6, 4, 4, 3, 1]); // qualifying still earns the stars
  const s = normalizeSave({ stamps: { 1: true, 2: true } });
  assert.deepEqual(s.stamps, { 1: true, 2: true });
  assert.equal(s.unlocked, 3); // stamped rounds open the next one — nobody is eliminated
  assert.deepEqual(normalizeSave(null).stamps, {});
});
