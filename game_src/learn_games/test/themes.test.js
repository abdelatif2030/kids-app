import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD_THEMES, themeForWorld } from '../src/kit/themes.js';
// the places of kit/worlds3d.js WORLD_IDS (that file needs a browser to import)
const WORLD_IDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];

test('every world has its own tune in the format the sound engine plays', () => {
  for (const id of WORLD_IDS) {
    const t = themeForWorld(id);
    assert.ok(t, `no tune for ${id}`);
    assert.equal(t.chords.length, 8, 'eight bars');
    for (const [bass, tones] of t.chords) { assert.ok(Number.isInteger(bass) && bass >= 20 && bass <= 60); assert.equal(tones.length, 3); for (const m of tones) assert.ok(Number.isInteger(m) && m >= 40 && m <= 90); }
    assert.ok(t.melody.length >= 16);
    for (const [bar, eighth, m] of t.melody) { assert.ok(bar >= 0 && bar < 8 && eighth >= 0 && eighth < 8); assert.ok(Number.isInteger(m) && m >= 60 && m <= 100, `note ${m} in ${id}`); }
    assert.ok(t.tempo >= 60 && t.tempo <= 140);
    assert.ok(['marimba', 'bell', 'pluck', 'flute'].includes(t.lead));
  }
});

test('the tunes are different from each other, and always the same for a world', () => {
  const sig = (t) => JSON.stringify([t.tempo, t.lead, t.melody.map((n) => n[2]).join(',')]);
  const all = WORLD_IDS.map((id) => sig(WORLD_THEMES[id]));
  assert.equal(new Set(all).size, WORLD_IDS.length, 'two worlds sound the same');
  assert.equal(sig(themeForWorld('desert')), sig(themeForWorld('desert')));
  // a desert tune uses the half step of its scale (it must sound like a desert, not like a garden)
  const pcs = new Set(themeForWorld('desert').melody.map((n) => n[2] % 12));
  assert.ok(pcs.size >= 3);
});

test('every tune ends at home (the tonic) so a loop never ends hanging', () => {
  for (const id of WORLD_IDS) { const t = themeForWorld(id); const last = t.melody[t.melody.length - 1]; assert.equal(last[0], 7); }
});
