import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Camp, BUILDS, SITE, FIRE, normalizeSave } from '../src/sim.js';

/** A robot survivor: walks to the nearest tree, chops, carries to the site; buys helpers and bags when it can. */
function robot(c) {
  const me = c.me;
  const full = me.bag >= c.bagMax || (me.bag > 0 && c.trees.every((t) => !t.alive));
  let tx;
  let ty;
  if (full || (me.bag > 0 && Math.hypot(me.x - SITE.x, me.y - SITE.y) < 6)) { tx = SITE.x; ty = SITE.y; } else {
    let bd = 1e9;
    for (const t of c.trees) if (t.alive) { const d = Math.hypot(t.x - me.x, t.y - me.y); if (d < bd) { bd = d; tx = t.x; ty = t.y; } }
    if (tx === undefined) { tx = SITE.x; ty = SITE.y; }
  }
  const d = Math.hypot(tx - me.x, ty - me.y);
  return d < 1.2 ? { dx: 0, dy: 0 } : { dx: (tx - me.x) / d, dy: (ty - me.y) / d };
}

test('a lone survivor with helpers builds cabin, workshop, sawmill and sled and opens the gate', () => {
  const c = new Camp({ seed: 4 });
  let t = 0;
  while (c.state !== 'done' && t < 1500) {
    c.hireHelper();
    if (c.coins > 60) c.upgradeBag();
    c.step(1 / 30, robot(c));
    t += 1 / 30;
  }
  assert.equal(c.state, 'done', `not done after ${t | 0}s, stage ${c.stage}`);
  assert.equal(c.stage, BUILDS.length);
  console.log(`finished in ${t.toFixed(0)}s, helpers ${c.helpers.length}, logs ${c.logsTotal}`);
  assert.ok(t < 900);
});

test('logs go in the bag, then to the site: one coin per log; the build advances', () => {
  const c = new Camp({ seed: 1 });
  c.me.bag = 3;
  c.me.x = SITE.x;
  c.me.y = SITE.y;
  c.step(0.1);
  assert.equal(c.me.bag, 0);
  assert.equal(c.progress, 3);
  assert.equal(c.coins, 3);
});

test('the fire warms, being away chills, a blizzard comes and nothing is lost for good', () => {
  const c = new Camp({ seed: 2 });
  c.me.x = 5; c.me.y = 5;
  for (let i = 0; i < 30 * 40; i++) c.step(1 / 30);
  assert.ok(c.me.cold < 1);
  assert.ok(c.me.cold >= 0);
  c.me.x = FIRE.x; c.me.y = FIRE.y;
  for (let i = 0; i < 30 * 10; i++) c.step(1 / 30);
  assert.equal(c.me.cold, 1);
  const s = new Camp({ seed: 3 });
  let storm = false;
  for (let i = 0; i < 30 * 90 && !storm; i++) for (const e of s.step(1 / 30)) if (e.type === 'storm') storm = true;
  assert.ok(storm);
});

test('helpers and the bag cost coins', () => {
  const c = new Camp();
  assert.equal(c.hireHelper(), false);
  c.coins = 100;
  assert.equal(c.hireHelper(), true);
  assert.equal(c.coins, 90);
  assert.equal(c.upgradeBag(), true);
  assert.equal(c.bagMax, 6);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).best, 0);
  assert.equal(normalizeSave({ best: 'x' }).best, 0);
});
