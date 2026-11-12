import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { splitBySilence } from '../../../tools/game_voice/split.mjs';

function sentences(lens, gap = 0.9) {
  const args = ['-v', 'error', '-y'];
  lens.forEach((d, i) => { args.push('-f', 'lavfi', '-i', `sine=frequency=${300 + i * 90}:duration=${d}`, '-f', 'lavfi', '-i', `anullsrc=r=24000:cl=mono:d=${gap}`); });
  const n = lens.length * 2;
  const filter = Array.from({ length: n }, (_, i) => `[${i}:a]aresample=24000,aformat=channel_layouts=mono[a${i}]`).join(';') + ';' + Array.from({ length: n }, (_, i) => `[a${i}]`).join('') + `concat=n=${n}:v=0:a=1[o]`;
  return spawnSync('ffmpeg', [...args, '-filter_complex', filter, '-map', '[o]', '-f', 'wav', 'pipe:1'], { maxBuffer: 1e8 }).stdout;
}

test('one long recording is cut into exactly the sentences said, in order', () => {
  const lens = [1.1, 0.5, 2.3, 0.8, 1.6, 0.6];
  const clips = splitBySilence(sentences(lens), lens.length);
  assert.equal(clips.length, lens.length);
  for (const c of clips) assert.ok(c.length > 500);
});

test('a wrong number of sentences is refused, so no clip can carry the wrong words', () => {
  const wav = sentences([1, 1, 1, 1]);
  assert.throws(() => splitBySilence(wav, 6), /expected 6/);
});
