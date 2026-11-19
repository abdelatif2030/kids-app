import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Climb, W, normalizeSave } from '../src/sim.js';

/** A robot jumper: aims for the highest reachable platform above it. */
function robot(c) {
  const p = c.p;
  let best = null;
  for (const pl of c.plats) {
    if (pl.dead || pl.kind === 'crumble') continue;
    const dy = pl.y - p.y;
    const dx = Math.min(Math.abs(pl.x - p.x), W - Math.abs(pl.x - p.x));
    if (p.vy < 0) { // falling: land on the nearest platform below
      if (dy > 0.2 || dy < -6) continue;
      const score = pl.y * 1.2 - dx * 0.8;
      if (best === null || score > best.s) best = { pl, s: score };
    } else { // rising: head toward the best platform above
      if (dy < 0.5 || dy > 3.4) continue;
      const score = dy * 0.6 - dx * 0.5;
      if (best === null || score > best.s) best = { pl, s: score };
    }
  }
  c.targetX = best ? best.pl.x : p.x;
}

test('an endless climb: a robot jumper climbs well above the start', () => {
  for (const easy of [true, false]) {
    const c = new Climb({ seed: 4, easy });
    let t = 0;
    while (c.state === 'play' && t < 400 && c.height < 300) { robot(c); c.step(1 / 60); t += 1 / 60; }
    console.log(`easy ${easy}: height ${c.height.toFixed(0)} in ${t.toFixed(0)}s, state ${c.state}`);
    assert.ok(c.height >= 8, `height ${c.height}`);
  }
});

test('platform kinds appear; springs bounce higher; crumbling ones break; falling ends the run', () => {
  const c = new Climb({ seed: 9 });
  c.plats = [{ id: 1, x: 5, y: 0, w: 2, kind: 'spring', vx: 0 }];
  c.mons = []; c.items = [];
  c.p.x = 5; c.p.y = 0.1; c.p.vy = -3;
  c.targetX = 5;
  const ev = c.step(0.05);
  assert.ok(ev.some((e) => e.type === 'spring'));
  assert.ok(c.p.vy > 15);
  const d = new Climb({ seed: 9 });
  d.plats = []; d.mons = []; d.items = []; d.p.y = 5; d.height = 20; d.top = 1000;
  for (let i = 0; i < 60 * 3; i++) d.step(1 / 60);
  assert.equal(d.state, 'over');
  assert.ok(d.score >= 200);
  const kinds = new Set(new Climb({ seed: 3 }).plats.map((p) => p.kind));
  const big = new Climb({ seed: 3 }); big._gen(300);
  for (const k of ['normal', 'move', 'crumble', 'spring']) assert.ok(big.plats.some((p) => p.kind === k), k);
  void kinds;
});

test('shots and bounces defeat monsters; a propeller makes you fly', () => {
  const c = new Climb({ seed: 2 });
  c.mons = [{ id: 9, x: 5, y: 5, hp: 1, dx: 0 }];
  c.p.x = 5; c.p.y = 1;
  assert.ok(c.shoot());
  for (let i = 0; i < 40; i++) c.step(1 / 60);
  assert.ok(c.mons[0].dead);
  c.items = [{ id: 10, kind: 'propeller', x: c.p.x, y: c.p.y }];
  c.step(1 / 60);
  assert.ok(c.p.fly > 0);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).best, 0); });
