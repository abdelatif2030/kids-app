import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Swim, ROUNDS, HALF, normalizeSave } from '../src/sim.js';

/** A robot swimmer: strokes on the beat (with a little human wobble), dives under noodles, leaps walls by stroking
 * in front of them, steers round bumpers. */
function robot(w, dt, wobble = 0.06) {
  const p = w.player;
  const off = w.beatOffset(w.time + (Math.sin(w.time * 3.7) * wobble));
  if (Math.abs(off) < 0.035) w.stroke();
  const c = w.course;
  const noodle = c.noodles.find((n) => n.s - p.s > -1.2 && n.s - p.s < n.len + 2.2 && Math.abs(n.x - p.x) < n.len + 1);
  let want = 0;
  for (const b of c.bumpers) { const d = b.s - p.s; if (d > 0 && d < 8 && Math.abs(b.x - p.x) < 1.7) want = b.x + (p.x > b.x ? 2.5 : -2.5); }
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
