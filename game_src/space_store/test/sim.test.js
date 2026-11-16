import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Store, PADS, DISPENSER, RACKS, CHECKOUTS, BOUNDS, normalizeSave } from '../src/sim.js';

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

/** A robot manager: pays for pads, keeps the racks stocked, serves at the till when someone waits, gathers coins. */
function robot(st) {
  const p = st.p;
  if (p.stack === 0) st._unload = false;
  if (p.stack >= st.capacity) st._unload = true;
  const pad = st.pads.find((pd) => st.save.coins >= Math.min(pd.cost - (st.save.paid[pd.id] ?? 0), 20));
  const main = st.checkouts[0];
  const waiting = st._queue(main).some((s) => s.front) && !st.has('hyper');
  const rack = st.racks.filter((r) => st.open(r)).sort((a, b) => a.n - b.n)[0];
  const coins = st.checkouts.filter((c) => c.cash >= 6).sort((a, b) => b.cash - a.cash)[0];
  let target;
  if (pad) target = pad;
  else if (waiting && rack.n > 2) target = main.till;
  else if (coins && p.stack === 0) target = coins.coins;
  else if (st._unload || (p.stack > 0 && st.dispenser === 0)) target = { x: rack.x, z: rack.z + 0.9 };
  else if (rack.n < 6 || p.stack > 0) target = DISPENSER;
  else if (waiting) target = main.till;
  else target = coins ? coins.coins : main.till;
  return steer(st, target);
}

/** Grid path-finding round counters, racks and shelves: a distance map from the target, then downhill. */
const CELL = 0.5;
let FIELD = { key: '', d: null };
function steer(st, target) {
  const p = st.p;
  const W = Math.round((BOUNDS.x1 - BOUNDS.x0) / CELL);
  const H = Math.round((BOUNDS.z1 - BOUNDS.z0) / CELL);
  const solids = st._solids();
  const key = `${target.x.toFixed(1)},${target.z.toFixed(1)},${solids.length}`;
  const ci = (x, z) => [Math.max(0, Math.min(W - 1, Math.floor((x - BOUNDS.x0) / CELL))), Math.max(0, Math.min(H - 1, Math.floor((z - BOUNDS.z0) / CELL)))];
  if (FIELD.key !== key) {
    const blocked = new Uint8Array(W * H);
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const x = BOUNDS.x0 + (i + 0.5) * CELL;
      const z = BOUNDS.z0 + (j + 0.5) * CELL;
      if (solids.some(([x0, z0, x1, z1]) => x > x0 - 0.45 && x < x1 + 0.45 && z > z0 - 0.45 && z < z1 + 0.45)) blocked[j * W + i] = 1;
    }
    const d = new Float32Array(W * H).fill(1e9);
    const [ti, tj] = ci(target.x, target.z);
    d[tj * W + ti] = 0;
    const q = [[ti, tj]];
    while (q.length) {
      const [i, j] = q.shift();
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di;
        const nj = j + dj;
        if (ni < 0 || nj < 0 || ni >= W || nj >= H || blocked[nj * W + ni]) continue;
        if (d[nj * W + ni] > d[j * W + i] + 1) { d[nj * W + ni] = d[j * W + i] + 1; q.push([ni, nj]); }
      }
    }
    FIELD = { key, d };
  }
  const dx = target.x - p.x;
  const dz = target.z - p.z;
  const l = Math.hypot(dx, dz);
  if (l < 0.25) return { x: 0, z: 0 };
  const [i, j] = ci(p.x, p.z);
  if (FIELD.d[j * W + i] <= 1) return { x: dx / l, z: dz / l };
  let best = null;
  let bd = FIELD.d[j * W + i];
  for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const ni = i + di;
    const nj = j + dj;
    if (ni < 0 || nj < 0 || ni >= W || nj >= H) continue;
    const v = FIELD.d[nj * W + ni];
    if (v < bd) { bd = v; best = [ni, nj]; }
  }
  if (!best) return { x: dx / l, z: dz / l };
  const tx = BOUNDS.x0 + (best[0] + 0.5) * CELL - p.x;
  const tz = BOUNDS.z0 + (best[1] + 0.5) * CELL - p.z;
  const tl = Math.hypot(tx, tz) || 1;
  return { x: tx / tl, z: tz / tl };
}

test('a robot manager builds the whole space supermarket and the hyper checkout', () => {
  const save = normalizeSave(null);
  const st = new Store(save, 2);
  let t = 0;
  const at = {};
  while (!save.complete && t < 1500) {
    for (const e of st.step(1 / 30, robot(st))) if (e.type === 'unlock') at[e.pad] = Math.round(t);
    t += 1 / 30;
  }
  console.log('unlocked at (s):', JSON.stringify(at), 'served', save.served);
  assert.ok(save.complete, `not finished in ${Math.round(t)} s: ${save.unlocked.join(',')}`);
  assert.ok(t < 1200);
});

test('baskets: picked at the dispenser, stacked on the rack, taken by shoppers', () => {
  const save = normalizeSave(null);
  const st = new Store(save, 1);
  Object.assign(st.p, { x: DISPENSER.x, z: DISPENSER.z });
  for (let i = 0; i < 20; i++) st.step(0.1);
  assert.equal(st.p.stack, st.capacity);
  Object.assign(st.p, { x: RACKS[0].x, z: RACKS[0].z + 0.9 });
  for (let i = 0; i < 20; i++) st.step(0.1);
  assert.equal(st.p.stack, 0);
  assert.ok(st.racks[0].n > 0);
  let took = false;
  for (let i = 0; i < 300 && !took; i++) for (const e of st.step(0.1)) if (e.type === 'takeBasket') took = true;
  assert.ok(took);
});

test('the main till only works with the child there; robots work alone; coins pile up and are gathered', () => {
  const save = normalizeSave(null);
  const st = new Store(save, 4);
  st.racks[0].n = 12;
  Object.assign(st.p, { x: -8, z: -1 });
  let sold = 0;
  for (let i = 0; i < 600; i++) for (const e of st.step(0.1)) if (e.type === 'sold') sold++;
  assert.equal(sold, 0, 'nobody at the till');
  Object.assign(st.p, CHECKOUTS[0].till);
  for (let i = 0; i < 100; i++) for (const e of st.step(0.1)) if (e.type === 'sold') sold++;
  assert.ok(sold > 0, 'served with the child at the till');
  assert.ok(st.checkouts[0].cash > 0, 'coins on the pile');
  Object.assign(st.p, CHECKOUTS[0].coins);
  const before = save.coins;
  for (let i = 0; i < 30; i++) st.step(0.1);
  assert.ok(save.coins > before, `gathered ${save.coins} vs ${before}`);
  const r = new Store(normalizeSave({ unlocked: ['robot1'] }), 4);
  r.racks[0].n = 12;
  Object.assign(r.p, { x: -8, z: -1 });
  let robotSold = 0;
  for (let i = 0; i < 900; i++) for (const e of r.step(0.1)) if (e.type === 'sold' && e.by === 'robot') robotSold++;
  assert.ok(robotSold > 0, 'the robot cashier served');
});

test('pads keep partial payments; the stack grows with the upgrade; nobody leaves the station', () => {
  const save = normalizeSave({ coins: 10 });
  const st = new Store(save, 1);
  Object.assign(st.p, { x: PADS[0].x, z: PADS[0].z });
  for (let i = 0; i < 40; i++) st.step(0.1);
  assert.equal(save.paid.rack2, 10);
  assert.ok(!st.has('rack2'));
  assert.equal(new Store(normalizeSave({ unlocked: ['bigstack'] })).capacity, 10);
  for (let i = 0; i < 400; i++) {
    st.step(0.05, { x: Math.sin(i / 20), z: Math.cos(i / 31) });
    assert.ok(st.p.x >= BOUNDS.x0 && st.p.x <= BOUNDS.x1 && st.p.z >= BOUNDS.z0 && st.p.z <= BOUNDS.z1);
  }
});

test('damaged saves load safely', () => {
  for (const bad of [null, 3, 'x', { coins: -1, unlocked: 'x', paid: 4 }, { unlocked: ['nope', 'rack2', 'rack2'], paid: { hyper: 9999, robot1: 3 }, complete: true }]) {
    const s = normalizeSave(bad);
    assert.ok(s.coins >= 0 && Array.isArray(s.unlocked) && s.complete === false);
  }
  assert.deepEqual(normalizeSave({ unlocked: ['nope', 'rack2', 'rack2'], paid: { hyper: 9999, robot1: 3 } }).paid, { robot1: 3 });
});
