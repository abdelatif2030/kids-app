import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Maze, MazeSet, mazePlan, N, E, S, W } from '../src/maze/sim.js';

test('every maze is perfect: all cells reachable, walls agree on both sides', () => {
  for (let size = 3; size <= 7; size++) {
    for (let seed = 1; seed < 30; seed++) {
      const m = new Maze(size, seed);
      const seen = new Set(['0,0']);
      const q = [[0, 0]];
      let edges = 0;
      while (q.length) {
        const [x, y] = q.shift();
        for (const d of m.exits(x, y)) {
          edges++;
          const nx = x + [0, 1, 0, -1][d];
          const ny = y + [-1, 0, 1, 0][d];
          assert.ok(m.canMove(nx, ny, (d + 2) % 4), 'the wall is open from both sides');
          if (!seen.has(`${nx},${ny}`)) { seen.add(`${nx},${ny}`); q.push([nx, ny]); }
        }
      }
      assert.equal(seen.size, size * size);
      assert.equal(edges / 2, size * size - 1, 'a tree: one way between two cells');
    }
  }
});

test('the way out starts at the mouse and ends at the cheese, one step at a time', () => {
  const m = new Maze(6, 42);
  const p = m.solve();
  assert.deepEqual(p[0], [0, 0]);
  assert.deepEqual(p[p.length - 1], [5, 5]);
  for (let i = 1; i < p.length; i++) assert.equal(Math.abs(p[i][0] - p[i - 1][0]) + Math.abs(p[i][1] - p[i - 1][1]), 1);
});

test('a run stops at a crossing, a corner or a dead end, and never goes through walls', () => {
  const m = new Maze(7, 3);
  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 7; x++) {
      for (const d of [N, E, S, W]) {
        const cells = m.run(x, y, d);
        if (!m.canMove(x, y, d)) { assert.equal(cells.length, 0); continue; }
        let [px, py] = [x, y];
        for (const [cx, cy] of cells) {
          assert.ok(m.canMove(px, py, d));
          [px, py] = [cx, cy];
        }
        const [lx, ly] = cells[cells.length - 1];
        const ex = m.exits(lx, ly);
        const goal = lx === 6 && ly === 6;
        assert.ok(goal || ex.length !== 2 || !ex.includes(d), 'stopped where the corridor changes');
      }
    }
  }
});

test('five mazes a set for every age, bigger for older children', () => {
  for (let a = 1; a <= 12; a++) assert.equal(mazePlan(a).length, 5);
  assert.ok(Math.max(...mazePlan(3)) < Math.max(...mazePlan(6)));
});

test('a robot that follows the hint finishes the whole set; bumping is harmless', () => {
  for (const age of [3, 4, 5, 6]) {
    const s = new MazeSet(age, 1234 + age);
    let guard = 0;
    while (!s.finished && guard++ < 500) {
      // bump into a wall now and then: nothing is lost
      const wall = [N, E, S, W].find((d) => !s.maze.canMove(s.x, s.y, d));
      if (wall !== undefined && guard % 3 === 0) assert.equal(s.move(wall).type, 'bump');
      const ev = s.move(s.hintDir());
      assert.equal(ev.type, 'move');
      if (ev.won) s.next();
    }
    assert.ok(s.finished, `age ${age} finished`);
    assert.equal(s.round, 5);
  }
});
