import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Camp, BUILDS, SUMMIT_START, SITE, FIRE, normalizeSave } from '../src/sim.js';

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

test('a lone survivor with helpers builds all nine buildings (cabin to summit beacon) and opens the gate', () => {
  const c = new Camp({ seed: 4 });
  let t = 0;
  while (c.state !== 'done' && t < 2400) {
    c.hireHelper();
    if (c.coins > 60) c.upgradeBag();
    c.step(1 / 30, robot(c));
    t += 1 / 30;
  }
  assert.equal(c.state, 'done', `not done after ${t | 0}s, stage ${c.stage}`);
  assert.equal(c.stage, BUILDS.length);
  assert.equal(c.logsTotal, 374); // 170 original + 204 summit camp
  console.log(`finished in ${t.toFixed(0)}s, helpers ${c.helpers.length}, logs ${c.logsTotal}`);
  assert.ok(t < 1500);
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

import fs from 'node:fs';

test('Saint Catherine Camp anchor: title placed on Egypt\'s snowy mountain', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['معسكر سانت كاترين', 'Saint Catherine Camp']"));
  assert.equal(BUILDS[0].logs, 8);
});

// ---- Phase 2G: the summit camp (append-only finale) ----

const ORIGINAL_SIX = [
  { id: 'cabin', ar: 'الكوخ الخشبي', en: 'Log cabin', logs: 8 },
  { id: 'workshop', ar: 'الورشة', en: 'Workshop', logs: 14 },
  { id: 'sawmill', ar: 'المنشرة', en: 'Sawmill', logs: 20 },
  { id: 'greenhouse', ar: 'الصوبة الزجاجية', en: 'Glass greenhouse', logs: 34 },
  { id: 'tower', ar: 'برج المراقبة', en: 'Watch tower', logs: 42 },
  { id: 'sled', ar: 'زلاجة المؤن', en: 'Supply sled', logs: 52 },
];

test('freeze: the original six builds are byte-identical and the summit tier is appended after them', () => {
  assert.deepEqual(BUILDS.slice(0, 6), ORIGINAL_SIX);
  assert.equal(BUILDS.length, 9);
  assert.deepEqual(BUILDS.slice(SUMMIT_START).map((b) => b.id), ['trail', 'shelter', 'beacon']);
  assert.equal(SUMMIT_START, 6);
});

test('unlock chain: builds complete strictly in order, the summit opens only after the sled, the gate only after the beacon', () => {
  const c = new Camp({ seed: 7 });
  const builtOrder = [];
  let summitEvents = 0;
  let gateBeforeBeacon = false;
  const watch = (evs) => {
    for (const e of evs) {
      if (e.type === 'built') builtOrder.push(e.id);
      if (e.type === 'summit') summitEvents += 1;
      if (e.type === 'gate' && !builtOrder.includes('beacon')) gateBeforeBeacon = true;
    }
  };
  while (c.state === 'play') {
    const b = c.build;
    assert.ok(b, 'a build is always available while playing');
    c.me.x = SITE.x; c.me.y = SITE.y;
    c.me.bag = Math.min(c.bagMax, b.logs - c.progress);
    watch(c.step(0.1));
    if (c.stage < SUMMIT_START) assert.equal(c.atSummit, false);
    if (builtOrder.length > 0 && builtOrder.length < BUILDS.length) assert.notEqual(c.state, 'gate');
  }
  assert.equal(c.state, 'gate'); // the gate phase follows the beacon, then done
  assert.equal(c.build, null);
  while (c.state !== 'done') watch(c.step(0.1));
  assert.deepEqual(builtOrder, BUILDS.map((b) => b.id));
  assert.equal(summitEvents, 1); // announced exactly once, when the sled is done
  assert.equal(gateBeforeBeacon, false);
  assert.equal(c.atSummit, true);
});

test('the summit tier is the gentle finale of the same curve (no spike, no new harsh mechanic)', () => {
  for (let i = SUMMIT_START; i < BUILDS.length; i++) {
    assert.ok(BUILDS[i].logs > BUILDS[i - 1].logs, 'each summit build costs a little more');
    assert.ok(BUILDS[i].logs - BUILDS[i - 1].logs <= 10, 'increments stay as gentle as the existing ladder');
  }
  const total = BUILDS.reduce((s, b) => s + b.logs, 0);
  assert.equal(total, 374);
});

test('old saves migrate: a pre-summit save keeps best/finished and gains summits = 0', () => {
  const old = normalizeSave({ best: 170, finished: 1, muted: true });
  assert.equal(old.best, 170);
  assert.equal(old.finished, 1);
  assert.equal(old.summits, 0);
  assert.equal(old.muted, true);
  assert.equal(normalizeSave({ summits: 3 }).summits, 3);
  assert.equal(normalizeSave({ summits: 'x' }).summits, 0);
  assert.equal(normalizeSave(undefined).summits, 0);
});
