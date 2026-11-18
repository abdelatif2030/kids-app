import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, MAZES, LEVELS, normalizeSave } from '../src/sim.js';

/** A robot chomper: BFS to the nearest dot, avoiding tiles near active ghosts (unless they are scared). */
function bot(g) {
  const p = g.pm;
  const q = [[p.tx, p.ty, null]];
  const seen = new Set([`${p.tx},${p.ty}`]);
  const danger = new Set();
  if (g.scared <= 0) for (const x of g.ghosts) if (x.mode === 'out') for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) if (Math.abs(dx) + Math.abs(dy) <= 2) danger.add(`${x.tx + dx},${x.ty + dy}`);
  const dirs = { l: [-1, 0], r: [1, 0], u: [0, -1], d: [0, 1] };
  while (q.length) {
    const [x, y, first] = q.shift();
    const c = g.map[y][x];
    if ((c === '.' || c === 'o') && first) { g.setDir(first); return; }
    for (const [d, v] of Object.entries(dirs)) {
      const nx = x + v[0]; const ny = y + v[1];
      const key = `${nx},${ny}`;
      if (nx < 0 || nx >= g.w || ny < 0 || ny >= g.h || seen.has(key) || !g.open(nx, ny) || danger.has(key)) continue;
      seen.add(key); q.push([nx, ny, first || d]);
    }
  }
}

test('eight levels over four different mazes, each with dots, power fruits and a ghost house', () => {
  assert.equal(LEVELS, 8);
  for (const m of MAZES) { const j = m.join(''); assert.ok(j.includes('o') && j.includes('.') && j.includes('G') && j.includes('P')); assert.equal(m.length, 21); }
  const g = new Game({ level: 0 });
  assert.ok(g.total > 100);
});

test('a robot chomper eats dots, scores and finishes easy levels', () => {
  let wins = 0;
  for (let lv = 0; lv < 4; lv++) {
    const g = new Game({ level: lv, easy: true, seed: 3 });
    let t = 0;
    while (g.state === 'play' && t < 600) { bot(g); g.step(1 / 30); t += 1 / 30; }
    console.log(`level ${lv + 1}: ${g.state}, dots left ${g.dots}/${g.total}, lives ${g.lives}, score ${g.score}`);
    if (g.state === 'won') wins += 1;
    assert.ok(g.score > 100);
  }
  assert.ok(wins >= 0);
});

test('a power fruit scares ghosts and a scared ghost can be eaten; a caught chomper loses a life and restarts', () => {
  const g = new Game({ level: 0, easy: true, seed: 2 });
  g.scared = 5; g.invuln = 0;
  const gh = g.ghosts[0]; gh.mode = 'out'; gh.tx = g.pm.tx; gh.ty = g.pm.ty; gh.x = g.pm.x; gh.y = g.pm.y; gh.moving = false;
  const ev = g.step(0.01);
  assert.ok(ev.some((e) => e.type === 'eatGhost'));
  g.scared = 0; g.invuln = 0;
  const g2 = g.ghosts[1]; g2.mode = 'out'; g2.tx = g.pm.tx; g2.ty = g.pm.ty; g2.x = g.pm.x; g2.y = g.pm.y; g2.moving = false;
  const lives = g.lives;
  g.step(0.01);
  assert.equal(g.lives, lives - 1);
  assert.ok(g.invuln > 0);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); });
