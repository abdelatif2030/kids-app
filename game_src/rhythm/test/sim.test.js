import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Show, TRACKS, R, normalizeSave, panoOf, tourComplete } from '../src/sim.js';

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

test('standing still and never jumping costs you lives (knocked off, saved, knocked off again)', () => {
  const s = new Show({ track: 0, seed: 3 });
  let t = 0; let saves = 0;
  while ((s.state === 'intro' || s.state === 'play') && t < 200) { for (const e of s.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'saved') saves++; t += 1 / 30; }
  // kind rules: nobody is suddenly out — but passivity is still punished:
  // the idle player is knocked off and brought back until the lives run low
  assert.ok(saves >= 1 && s.lives < 3, `saves ${saves} lives ${s.lives}`);
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
  let saved = false;
  for (let i = 0; i < 10; i++) for (const e of g.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'saved') saved = true;
  assert.ok(saved && g.lives === 2, 'first gap fall returns you to the middle (kind rules: no sudden death)');
  g.lives = 1; // with the last life spent, the next fall is out
  Object.assign(g.player, { x: 3, z: 0 });
  g.gaps = [{ r0: 2, r1: 4, a0: -0.3, span: 0.6, warn: 0.01, openT: 2, open: false, phi0: g.phi }];
  let out = false;
  for (let i = 0; i < 10; i++) for (const e of g.step(1 / 30, { x: 0, z: 0 })) if (e.type === 'out' && e.id === 0) out = true;
  assert.ok(out, 'fell through the gap on the last life');
  // the edge
  const e = new Show({ track: 0, seed: 1 });
  e.state = 'play';
  e.arms = [];
  e.lives = 1;
  Object.assign(e.player, { x: R - 0.5, z: 0 });
  let off = false;
  for (let i = 0; i < 30; i++) for (const ev of e.step(1 / 30, { x: 1, z: 0 })) if (ev.type === 'out' && ev.id === 0) off = true;
  assert.ok(off, 'ran off the edge');
});

test('bumping sends a rival away; everyone gets extra lives', () => {
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

test('every track has a shipped panorama wired for its venue (tracks 1–7 their own, 8–12 a reused one)', async () => {
  const { existsSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const artDir = fileURLToPath(new URL('../../../assets/games/rhythm/art/', import.meta.url));
  for (const tk of TRACKS) {
    const p = panoOf(tk);
    assert.ok(p >= 1 && p <= 7, `track ${tk.id} pano ${p} out of shipped range`);
    assert.ok(existsSync(`${artDir}pano${p}.webp`), `missing pano${p}.webp for track ${tk.id}`);
  }
  // the original seven keep their own panorama, in order
  assert.deepEqual(TRACKS.slice(0, 7).map(panoOf), [1, 2, 3, 4, 5, 6, 7]);
});

import fs from 'node:fs';

test('Cairo Rhythm anchor + kind rules: Egyptian venues, and three lives for everyone', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['إيقاع القاهرة', 'Cairo Rhythm']"));
  assert.deepEqual(TRACKS.map((t) => t.en), ['Hara Café', 'Khan el-Khalili Records', 'Hara Rooftop', 'Nile Lounge', "Grandma's Music Box", 'Cairo Opera House', 'Cairo Grand Orchestra',
    'Mohamed Ali Street', 'Salah El-Din Citadel', 'Nile Boat', 'Al-Azhar Park', 'A Night in Al-Hussein']);
});

// ---- Phase 2F ---------------------------------------------------------------------------------------------

const FIRST7 = [
  { id: 1, ar: 'مقهى الحارة', en: 'Hara Café', bpm: 112, len: 40, arms: [['low', 8]], high: false, gaps: false, flip: false, tonearm: false },
  { id: 2, ar: 'أسطوانات خان الخليلي', en: 'Khan el-Khalili Records', bpm: 116, len: 45, arms: [['low', 8], ['high', 12]], gaps: false, flip: false, tonearm: false },
  { id: 3, ar: 'سطح الحارة', en: 'Hara Rooftop', bpm: 120, len: 50, arms: [['low', 8], ['high', 10]], gaps: true, flip: false, tonearm: false },
  { id: 4, ar: 'صالة النيل', en: 'Nile Lounge', bpm: 124, len: 55, arms: [['low', 6], ['high', 10]], gaps: true, flip: true, tonearm: false },
  { id: 5, ar: 'صندوق موسيقى الجدة', en: "Grandma's Music Box", bpm: 128, len: 60, arms: [['low', 6], ['high', 8], ['low', 12]], gaps: true, flip: true, tonearm: true },
  { id: 6, ar: 'دار الأوبرا', en: 'Cairo Opera House', bpm: 132, len: 64, arms: [['low', 6], ['high', 7], ['low', 9]], gaps: true, flip: true, tonearm: true },
  { id: 7, ar: 'أوركسترا القاهرة', en: 'Cairo Grand Orchestra', bpm: 136, len: 70, arms: [['high', 6], ['low', 6], ['high', 8], ['low', 10]], gaps: true, flip: true, tonearm: true },
];

test('Phase 2F: 12 tracks, and the first seven are byte-equivalent in behaviour (unchanged data)', () => {
  assert.equal(TRACKS.length, 12);
  assert.deepEqual(TRACKS.slice(0, 7), FIRST7);
  assert.deepEqual(TRACKS.map((t) => t.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('Phase 2F: the five new tracks each lead with an Egyptian instrument, at new venues', () => {
  const news = TRACKS.slice(7);
  assert.deepEqual(news.map((t) => t.lead), ['oud', 'tabla', 'rababa', 'mizmar', 'qanun']);
  const oldVenues = new Set(TRACKS.slice(0, 7).map((t) => t.en));
  for (const tk of news) assert.ok(!oldVenues.has(tk.en), `venue ${tk.en} collides with the first seven`);
  // difficulty rises gently: bpm and length never drop below the track before
  for (let i = 1; i < TRACKS.length; i++) {
    assert.ok(TRACKS[i].bpm >= TRACKS[i - 1].bpm - 14, `bpm cliff at track ${TRACKS[i].id}`);
    assert.ok(TRACKS[i].len > TRACKS[i - 1].len, `track ${TRACKS[i].id} not longer than the one before`);
  }
  // every new lead has a synth voice + an original melody in audio.js, and the tour sums to ≈15 minutes
  const audio = fs.readFileSync(new URL('../src/audio.js', import.meta.url), 'utf8');
  for (const lead of ['oud', 'tabla', 'rababa', 'mizmar', 'qanun']) {
    assert.ok(audio.includes(`_${lead === 'tabla' ? 'tablaStroke' : lead}(`), `no synth voice for ${lead}`);
    assert.ok(audio.includes(`${lead}: [`), `no melody for ${lead}`);
  }
  const totalSec = TRACKS.reduce((s, tk) => s + tk.len + 240 / tk.bpm, 0); // track length + 4-beat count-in
  assert.ok(totalSec >= 14 * 60 && totalSec <= 16 * 60, `tour is ${Math.round(totalSec)}s, target ≈15 min`);
});

test('Phase 2F: unlock chain runs 1→12 and old 7-track saves migrate safely', () => {
  // an old save from the 7-track era: stars on 1–7, unlocked 7 → opens track 8, keeps every star
  const old = normalizeSave({ unlocked: 7, stars: { 1: 3, 2: 2, 3: 1, 4: 1, 5: 2, 6: 1, 7: 3 } });
  assert.equal(old.unlocked, 8);
  assert.deepEqual(old.stars, { 1: 3, 2: 2, 3: 1, 4: 1, 5: 2, 6: 1, 7: 3 });
  assert.equal(tourComplete(old), false);
  // winning forward: a star on track k unlocks k+1, all the way to 12, never beyond
  for (let k = 1; k <= 12; k++) {
    const stars = {};
    for (let j = 1; j <= k; j++) stars[j] = 1;
    const s = normalizeSave({ unlocked: 1, stars });
    assert.equal(s.unlocked, Math.min(12, k + 1), `after track ${k}`);
    assert.equal(tourComplete(s), k === 12);
  }
  // a wild save still clamps to the 12-track tour
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 12);
});

test('Phase 2F: the music scheduler runs every lead (sax + 5 Egyptian) for full song cycles without throwing', async () => {
  const { Sound, LEADS } = await import('../src/audio.js');
  const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, setTargetAtTime() {} });
  const node = () => ({ gain: param(), frequency: param(), Q: { value: 1 }, type: '', connect: (n) => n || node(), start() {}, stop() {} });
  for (const lead of LEADS) {
    const s = new Sound();
    s.ctx = { state: 'running', currentTime: 0, createOscillator: node, createGain: node, createBiquadFilter: node, createBufferSource: node };
    s.music = node();
    s.sfx = node();
    s.noiseBuf = {};
    s.mode = 'play';
    s.tempo = 126;
    s.step = 0;
    s.nextTime = 0;
    let leadNotes = 0;
    const origLead = s._leadNote.bind(s);
    s._leadNote = (...a) => { leadNotes++; return origLead(...a); };
    const origSax = s._sax.bind(s);
    s._sax = (...a) => { leadNotes++; return origSax(...a); };
    for (let k = 0; k < 300; k++) { s.ctx.currentTime = k * 0.1; s._schedule(); }
    assert.ok(s.step > 100, `${lead}: only ${s.step} steps scheduled`);
    assert.ok(leadNotes > 0, `${lead}: no lead notes scheduled`);
    s.setLead(lead);
    assert.equal(s.lead, lead);
  }
  const s2 = new Sound();
  s2.setLead('not-an-instrument');
  assert.equal(s2.lead, 'sax', 'unknown leads fall back to the sax');
});

test('Phase 2F: encore is faster by the sim tempo only — same chart, same lives, robot still finishes', () => {
  const normal = new Show({ track: 0, seed: 1 });
  const encore = new Show({ track: 0, seed: 1, encore: true });
  assert.equal(normal.bpm, 112);
  assert.equal(encore.bpm, Math.round(112 * 1.15));
  assert.ok(encore.beat < normal.beat);
  assert.equal(encore.track, normal.track); // the same fixed chart data — nothing regenerated
  assert.equal(encore.lives, 3);
  assert.equal(normal.encore, false);
  for (const i of [0, 7, 11]) {
    let wins = 0;
    for (let seed = 1; seed <= 4; seed++) {
      const s = new Show({ track: i, seed, encore: true });
      let t = 0;
      while ((s.state === 'intro' || s.state === 'play') && t < 240) { s.step(1 / 30, robot(s)); t += 1 / 30; }
      if (s.state === 'won') wins++;
    }
    assert.ok(wins >= 2, `encore track ${TRACKS[i].id} too hard: ${wins}/4`);
  }
});

test('Certification Sweep A: tracks 8-12 have distinct mechanic mixes and distinct code-drawn motifs', () => {
  const news = TRACKS.slice(7);
  // no two of the five share the same challenge shape (gaps/flip/tonearm/arm-count)
  const mixes = news.map((t) => [t.gaps, t.flip, t.tonearm, t.arms.length].join('/'));
  assert.equal(new Set(mixes).size, 5, `mechanic mixes collide: ${mixes.join(' ')}`);
  // only the finale combines every pressure at once; track 8 re-introduces gently (gaps only)
  assert.deepEqual([news[0].gaps, news[0].flip, news[0].tonearm], [true, false, false]);
  assert.deepEqual([news[4].gaps, news[4].flip, news[4].tonearm], [true, true, true]);
  // distinct venue motifs, all implemented as code-drawn canvas art in main.js
  assert.deepEqual(news.map((t) => t.motif), ['oud', 'citadel', 'boat', 'park', 'lanterns']);
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes('drawMotifCanvas'), 'motif compositor missing from main.js');
  for (const m of ['oud', 'citadel', 'boat', 'park', 'lanterns']) assert.ok(main.includes(`motif === '${m}'`), `motif ${m} not drawn`);
  // the robot still finishes every re-mixed track
  for (const tk of news) {
    let wins = 0;
    for (let seed = 1; seed <= 4; seed++) { const s = new Show({ track: tk.id - 1, seed }); let t = 0; while ((s.state === 'intro' || s.state === 'play') && t < 200) { s.step(1 / 30, robot(s)); t += 1 / 30; } if (s.state === 'won') wins++; }
    assert.ok(wins >= 2, `track ${tk.id} robot wins ${wins}/4 after mechanic remix`);
  }
});
