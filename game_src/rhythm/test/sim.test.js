import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Show, TRACKS, R, normalizeSave } from '../src/sim.js';

const wrap = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };

/** A robot: stays on the middle rings away from gaps and the tonearm, hops low bars and ducks high ones. */
function robot(s) {
  const p = s.player;
  const r = Math.hypot(p.x, p.z) || 1;
  const ang = Math.atan2(p.z, p.x);
  for (const arm of s.arms) {
    const d = wrap(ang - arm.a);
    if (d > 0 && d * r < 0.9 + arm.w * r * 0.12) { if (arm.type === 'low') s.jump(); else s.duck(); }
  }
  if (s.tonearm.state === 'sweep') {
    const sg = s.tonearmSegment();
    const vx = sg.x1 - sg.x0;
    const vz = sg.z1 - sg.z0;
    const l2 = vx * vx + vz * vz;
    const t = Math.max(0, Math.min(1, ((p.x - sg.x0) * vx + (p.z - sg.z0) * vz) / l2));
    if (Math.hypot(sg.x0 + vx * t - p.x, sg.z0 + vz * t - p.z) < 1.0) s.jump();
  }
  // aim for a spot at radius 4 that is not in a gap and away from the tonearm
  let tx = p.x * (4 / r);
  let tz = p.z * (4 / r);
  const bad = (x, z) => s.gaps.some((g) => s._inGap(g, { x, z })) || (s.tonearm.state !== 'rest' && Math.hypot(x - 7, z + 5) < 6.5);
  if (bad(tx, tz)) {
    for (let k = 1; k < 12; k++) {
      const a = ang + k * 0.5;
      const x = Math.cos(a) * 4;
      const z = Math.sin(a) * 4;
      if (!bad(x, z)) { tx = x; tz = z; break; }
    }
  }
  const dx = tx - p.x;
  const dz = tz - p.z;
  const l = Math.hypot(dx, dz);
  return l > 0.3 ? { x: dx / l, z: dz / l } : { x: 0, z: 0 };
}

test('a robot survives every track of the world tour', () => {
  for (const [i, tk] of TRACKS.entries()) {
    let wins = 0;
    const line = [];
    for (let seed = 1; seed <= 4; seed++) {
      const s = new Show({ track: i, seed });
      let t = 0;
      while ((s.state === 'intro' || s.state === 'play') && t < 200) { s.step(1 / 30, robot(s)); t += 1 / 30; }
      if (s.state === 'won') wins++;
      line.push(`${s.state} left ${s.left} bumps ${s.bumps}`);
    }
    console.log(`track ${tk.id}: ${wins}/4 | ${line.join(' | ')}`);
    assert.ok(wins >= 2, `track ${tk.id} too hard`);
  }
});

test('standing still and never jumping gets you knocked off', () => {
  const s = new Show({ track: 0, seed: 3 });
  let t = 0;
  while ((s.state === 'intro' || s.state === 'play') && t < 200) { s.step(1 / 30, { x: 0, z: 0 }); t += 1 / 30; }
  assert.equal(s.state, 'out');
});

test('a low bar is cleared by a hop, a high bar by ducking; hit otherwise', () => {
  for (const type of ['low', 'high']) {
    for (const ok of [true, false]) {
      const s = new Show({ track: 1, seed: 2 });
      s.state = 'play';
      s.arms = [{ type, period: 8, a: -0.6, warn: 0 }];
      s.spin = s.spinTarget = 0;
      for (const a of s.animals.slice(1)) a.out = true;
      Object.assign(s.player, { x: 4, z: 0 });
      let hit = false;
      for (let i = 0; i < 30; i++) {
        if (ok && i === 5) { if (type === 'low') s.jump(); else s.duck(); }
        for (const e of s.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'hit') hit = true;
      }
      assert.equal(hit, !ok, `${type} ${ok ? 'cleared' : 'missed'}`);
    }
  }
});

test('the record carries you round, flips direction, gaps drop you, the edge drops you', () => {
  const s = new Show({ track: 3, seed: 5 });
  s.state = 'play';
  s.arms = [];
  for (const a of s.animals.slice(1)) a.out = true;
  Object.assign(s.player, { x: 5, z: 0 });
  for (let i = 0; i < 30; i++) s.step(1 / 30, { x: 0, z: 0 });
  assert.ok(Math.atan2(s.player.z, s.player.x) > 0.2, 'carried round');
  let flipped = false;
  for (let i = 0; i < 30 * 30 && !flipped; i++) for (const e of s.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'flip') flipped = true;
  assert.ok(flipped);
  // a gap under you
  const g = new Show({ track: 2, seed: 1 });
  g.state = 'play';
  g.arms = [];
  Object.assign(g.player, { x: 3, z: 0 });
  g.gaps = [{ r0: 2, r1: 4, a0: -0.3, span: 0.6, warn: 0.01, openT: 2, open: false, phi0: g.phi }];
  let out = false;
  for (let i = 0; i < 10; i++) for (const e of g.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'out' && e.id === 0) out = true;
  assert.ok(out, 'fell through the gap');
  // the edge
  const e = new Show({ track: 0, seed: 1 });
  e.state = 'play';
  e.arms = [];
  Object.assign(e.player, { x: R - 0.5, z: 0 });
  let off = false;
  for (let i = 0; i < 30; i++) for (const ev of e.step(1 / 30, { x: 1, z: 0 })) if (ev.type === 'out' && ev.id === 0) off = true;
  assert.ok(off, 'ran off the edge');
});

test('bumping sends a rival away; the youngest get extra lives', () => {
  const s = new Show({ track: 0, seed: 1 });
  s.state = 'play';
  s.arms = [];
  s.spin = s.spinTarget = 0;
  const q = s.animals[1];
  for (const a of s.animals.slice(2)) a.out = true;
  Object.assign(s.player, { x: 2, z: 0, vx: 0, vz: 0 });
  Object.assign(q, { x: 3, z: 0, vx: 0, vz: 0, think: 99, tx: 3, tz: 0 });
  let bump = false;
  let far = 0;
  for (let i = 0; i < 20; i++) { for (const e of s.step(1 / 30, { x: 1, z: 0 })) if (e.type === 'bump') bump = true; far = Math.max(far, q.x); }
  assert.ok(bump && far > 3.15, `bump ${bump} far ${far}`);
  const easy = new Show({ track: 0, seed: 1, easy: true });
  easy.state = 'play';
  Object.assign(easy.player, { x: R + 1, z: 0 });
  let saved = false;
  for (const e of easy.step(1 / 30)) if (e.type === 'saved') saved = true;
  assert.ok(saved && easy.state === 'play' && easy.lives === 2);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 2, 'x', { unlocked: 9, stars: { 1: 4, 2: 2 } }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= TRACKS.length);
    for (const v of Object.values(s.stars)) assert.ok(v >= 1 && v <= 3);
  }
});
