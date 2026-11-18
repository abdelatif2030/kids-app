import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { LEVELS, LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';

// "nothing is silent": every sentence a question or a right answer can say has a recorded clip (the narrator's voice, not the device voice)
// and a diacritized reading, for every level, every age and every world.
const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];
const lines = JSON.parse(readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8')).filter((l) => l.lang === 'ar');
const byText = new Map(lines.map((l) => [l.text, l.id]));
const tashkeel = JSON.parse(readFileSync(new URL('../../../tools/game_voice/tashkeel.json', import.meta.url), 'utf8'));
const CLIPS = new URL('../../../assets/games/learn_voice/ar/', import.meta.url);

test('every question and every sentence said after a right answer has a clip and a diacritized reading', () => {
  const missing = new Set();
  const noClip = new Set();
  const noMarks = new Set();
  for (const age of [2, 3, 4, 5, 6]) {
    const mem = new FreshMemory(null, 2900);
    for (let v = 0; v < 30; v++) for (const lv of LEVELS) {
      mem.begin(lv.id);
      const p = new LevelPlay(lv.id, age, 4099 * v + age * 31 + lv.id.length, mem, WORLDS[(v * 5) % 12]);
      for (const r of p.rounds) {
        for (const t of [r.prompt, r.reward]) {
          if (!t) continue;
          if (!byText.has(t)) { missing.add(t); continue; }
          if (!existsSync(new URL(`${byText.get(t)}.mp3`, CLIPS))) noClip.add(t);
          if (!tashkeel[t]) noMarks.add(t);
          else if (!/[ً-ْ]/.test(tashkeel[t])) noMarks.add(t);
        }
        if (r.key) mem.note(r.key);
      }
    }
  }
  assert.deepEqual([...missing], [], `not in the voice list: ${[...missing].slice(0, 8).join(' | ')}`);
  assert.deepEqual([...noClip], [], `no recording: ${[...noClip].slice(0, 8).join(' | ')}`);
  // a handful of sounds (buzzing, onomatopoeia) may carry few marks, but every sentence must have at least one vowel mark
  assert.deepEqual([...noMarks], [], `no diacritics: ${[...noMarks].slice(0, 8).join(' | ')}`);
});
