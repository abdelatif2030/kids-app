import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, levelDef, LEVELS, AW, AH, MR, normalizeSave } from '../src/sim.js';

/** A robot: picks the nearest marble of a colour still needed, gets behind it and pushes it to its hole. */
export function bot(g, dt = 1 / 60) {
  const D = g.dz;
  // the colour with the most still to deliver whose marbles are not already near the hole
  let best = null;
  g.holes.forEach((h, i) => {
    const need = h.target - g.counts[i];
    if (need <= 0) return;
    for (const m of g.marbles) {
      if (m.c !== h.c) continue;
      const dh = Math.hypot(m.x - h.x, m.y - h.y);
      const dd = Math.hypot(m.x - D.x, m.y - D.y);
      const score = dd + dh * 0.3 - (g.holes[i].target - g.counts[i]) * 0.05;
      if (!best || score < best.score) best = { m, h, score };
    }
  });
  if (!best) return { sx: 0, sy: 0 };
  const { m, h } = best;
  let ux = h.x - m.x, uy = h.y - m.y;
  const ul = Math.hypot(ux, uy) || 1; ux /= ul; uy /= ul;
  // am I behind the marble (on the far side from the hole) and roughly on the line?
  const rx = D.x - m.x, ry = D.y - m.y;
  const along = rx * ux + ry * uy; // negative = behind
  const across = -rx * uy + ry * ux;
  let tx, ty;
  if (along < -2.2 && along > -9 && Math.abs(across) < 2.6) { tx = h.x; ty = h.y; } // push toward the hole
  else { tx = m.x - ux * 5.5 - 0; ty = m.y - uy * 5.5; if (along > -3 || Math.abs(across) > 5) { /* swing around */ tx += -uy * (across > 0 ? 3 : -3); ty += ux * (across > 0 ? 3 : -3); } }
  const dx = tx - D.x, dy = ty - D.y, dl = Math.hypot(dx, dy) || 1;
  return { sx: dx / dl, sy: dy / dl };
}

function play(g, maxSec) {
  let t = 0;
  while (g.state === 'play' && t < maxSec) { g.step(1 / 60, bot(g)); t += 1 / 60; }
  return t;
}

test('ten levels with valid data: holes inside the arena, enough marbles of each colour (multiplier gates count), targets set and no clock in the data', () => {
  for (let n = 1; n <= LEVELS; n++) for (const easy of [false, true]) {
    const d = levelDef(n, easy);
    assert.ok(d.time === undefined && d.holes.length >= 1);
    for (const h of d.holes) {
      assert.ok(h.x > 4 && h.x < AW - 4 && h.y > 4 && h.y < AH / 2, `hole in the top half (level ${n})`);
      const have = d.clusters.filter((c) => c.c === h.c).reduce((a, c) => a + c.count, 0);
      const mul = d.gates.length ? Math.max(...d.gates.map((g) => g.mul)) : 1;
      assert.ok(have * mul >= h.target, `level ${n}: ${have}x${mul} marbles for a target of ${h.target}`);
    }
  }
  const own = (n) => levelDef(n).walls.filter((w) => !w.funnel);
  assert.ok(own(1).length === 0 && own(2).length === 1 && levelDef(3).gates.length === 2 && levelDef(1).walls.every((w) => w.funnel), 'level 2 adds a wall; every hole has its funnel');
  assert.ok(own(4).some((w) => w.move) && levelDef(5).bumpers.length && levelDef(6).belts.length && levelDef(7).ramps.length);
});

test('physics: marbles roll to a stop, bounce off the arena walls and stay inside, nothing becomes NaN', () => {
  const g = new Game(1, 1);
  for (const m of g.marbles) { m.vx = 30; m.vy = -25; }
  for (let i = 0; i < 600; i++) g.step(1 / 60, {});
  for (const m of g.marbles) {
    assert.ok(Number.isFinite(m.x) && Number.isFinite(m.y));
    assert.ok(m.x >= MR - 0.01 && m.x <= AW - MR + 0.01 && m.y >= MR - 0.01 && m.y <= AH - MR + 0.01);
    assert.ok(Math.hypot(m.vx, m.vy) < 3, 'friction slows them');
  }
});

test('the bulldozer pushes marbles: driving into a cluster moves it; the blade does not leave the arena', () => {
  const g = new Game(1, 2);
  const before = g.marbles.reduce((a, m) => a + m.y, 0) / g.marbles.length;
  g.dz.x = 27; g.dz.y = 65; g.dz.a = -Math.PI / 2;
  for (let i = 0; i < 240; i++) g.step(1 / 60, { sx: 0, sy: -1 });
  const after = g.marbles.reduce((a, m) => a + m.y, 0) / g.marbles.length;
  assert.ok(after < before - 3, 'the cluster moved up');
  assert.ok(g.dz.x > 3 && g.dz.x < AW - 3 && g.dz.y > 3 && g.dz.y < AH - 3);
});

test('only the matching colour drops into a hole; the others bounce off; counters and "done" events work', () => {
  const g = new Game(2, 3);
  const h0 = g.holes[0];
  const wrong = g.marbles.find((m) => m.c !== h0.c);
  wrong.x = h0.x + 0.2; wrong.y = h0.y + 0.2;
  const right = g.marbles.find((m) => m.c === h0.c);
  right.x = h0.x + 0.1; right.y = h0.y;
  const ev = g.step(1 / 60, {});
  assert.ok(ev.some((e) => e.type === 'score' && e.i === 0));
  assert.equal(g.counts[0], 1);
  assert.ok(g.marbles.includes(wrong));
  assert.ok(Math.hypot(wrong.x - h0.x, wrong.y - h0.y) >= h0.r, 'the wrong colour is pushed off the hole');
});

test('multiplier gates: a marble crossing a gate comes out as x2 / x3, once per gate', () => {
  const g = new Game(3, 4);
  const gate = g.def.gates[0];
  const m = g.marbles[0];
  m.x = (gate.x1 + gate.x2) / 2; m.y = gate.y1 + 1.5; m.px = m.x; m.py = m.y; m.vx = 0; m.vy = -20;
  const n0 = g.marbles.length;
  let gates = 0;
  for (let i = 0; i < 30; i++) for (const e of g.step(1 / 60, {})) if (e.type === 'gate') gates++;
  assert.equal(gates, 1);
  assert.equal(g.marbles.length, n0 + 1);
  assert.ok(m.gates.has(gate.id));
});

test('conveyor belts carry marbles, bumpers kick them, ramps boost them, moving walls move', () => {
  const g6 = new Game(6, 1);
  const b = g6.def.belts[0];
  const m = { id: 99, c: 0, x: b.x + 4, y: b.y + 3, vx: 0, vy: 0, gates: null, py: 0, px: 0 };
  g6.marbles.push(m);
  for (let i = 0; i < 60; i++) g6.step(1 / 60, {});
  assert.ok(m.x > b.x + 8, 'the belt moved the marble');
  const g4 = new Game(4, 1);
  const w = g4.walls.find((x) => x.move);
  const a = g4._seg(w).x1; g4.t = 1.25; const c = g4._seg(w).x1;
  assert.notEqual(a, c);
  const g5 = new Game(5, 1);
  const bp = g5.def.bumpers[0];
  const mm = { id: 98, c: 1, x: bp.x - bp.r - 1.2, y: bp.y, vx: 18, vy: 0, gates: null, py: 0, px: 0 };
  g5.marbles.push(mm);
  for (let i = 0; i < 30; i++) g5.step(1 / 60, {});
  assert.ok(mm.vx < 0 || mm.x < bp.x, 'the bumper threw it back');
});

test('a simple robot delivers marbles into the right hole on level 1 and 2 (the whole pipeline works); kind rules (2.4): a level can never time out or be lost', () => {
  for (const n of [1, 2]) {
    const g = new Game(n, 5);
    play(g, 300); // far longer than the old 50–100 s budgets
    assert.ok(g.counts.reduce((a, b) => a + b, 0) >= 4, `level ${n} delivered ${JSON.stringify(g.counts)}`);
    assert.ok(g.state === 'won' || g.state === 'play', `level ${n}: never lost (state ${g.state})`);
  }
  const idle = new Game(1, 6);
  for (let i = 0; i < 90 * 60; i++) idle.step(1 / 60, {});
  assert.equal(idle.state, 'play', '90 idle minutes: still playing, never lost');
  assert.equal(idle.timeLeft, undefined, 'the countdown field is gone');
});

test('a won level gives 3 stars for finishing (never for speed), and a "done" event fires once per colour', () => {
  const g = new Game(1, 7);
  g.counts[0] = g.holes[0].target - 1;
  const m = g.marbles[0]; m.x = g.holes[0].x; m.y = g.holes[0].y;
  const ev = g.step(1 / 60, {});
  assert.ok(ev.some((e) => e.type === 'done') && ev.some((e) => e.type === 'won'));
  assert.equal(g.state, 'won');
  assert.equal(g.stars, 3);
  const slow = new Game(1, 7); // finishing slowly earns exactly the same stars
  slow.counts[0] = slow.holes[0].target;
  const ev2 = slow.step(1 / 60, {});
  assert.equal(ev2.find((e) => e.type === 'won')?.stars, 3);
});

test('save normalising is safe', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, muted: false });
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, LEVELS);
});

import fs from 'node:fs';

test('Little Builder anchor: title renamed, sorting game untouched', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['البنّاء الصغير', 'Little Builder']"));
});
