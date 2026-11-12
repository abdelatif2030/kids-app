// Prepares text for making the clips on the ElevenLabs WEBSITE (no API needed): the sentences that still have no
// clip, split into a few parts, each sentence followed by a pause tag so it can be cut apart again.
//   node tools/game_voice/batch_text.mjs [--per 55]
// Writes docs/voice_batch/part1.txt, part2.txt ... (paste each into Text to Speech with the chosen voice, model
// "Multilingual v2", generate, download the mp3) and docs/voice_batch/part1.json ... (the ids in order).
// Then:  node tools/game_voice/import_batch.mjs docs/voice_batch/part1.json <the mp3 you downloaded>
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const per = Number(process.argv[process.argv.indexOf('--per') + 1]) || 55;
const lines = JSON.parse(readFileSync(join(ROOT, 'assets', 'games', 'learn_voice', 'lines.json'), 'utf8'))
  .filter((l) => l.lang === 'ar' && !existsSync(join(ROOT, 'assets', 'games', 'learn_voice', 'ar', `${l.id}.mp3`)));
const out = join(ROOT, 'docs', 'voice_batch');
mkdirSync(out, { recursive: true });
const PAUSE = '<break time="1.5s" />';
let n = 0;
for (let i = 0; i < lines.length; i += per) {
  const part = lines.slice(i, i + per);
  n++;
  writeFileSync(join(out, `part${n}.txt`), part.map((l) => `${l.text} ${PAUSE}`).join('\n') + '\n');
  writeFileSync(join(out, `part${n}.json`), JSON.stringify(part.map((l) => ({ id: l.id, text: l.text })), null, 1) + '\n');
  console.log(`part${n}: ${part.length} sentences, ${part.reduce((s, l) => s + l.text.length, 0)} characters (plus the pause tags)`);
}
if (!n) console.log('every sentence already has a clip');
