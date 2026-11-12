// Cuts one long recording (made from docs/voice_batch/partN.txt) into the games' voice clips.
//   node tools/game_voice/import_batch.mjs docs/voice_batch/part1.json <downloaded mp3 or wav>
// The number of sentences found must equal the number in the .json, otherwise nothing is written (see split.mjs).
// Each clip is levelled to the same loudness and written to assets/games/learn_voice/ar/<id>.mp3.
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { splitBySilence } from './split.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const [listFile, audioFile] = process.argv.slice(2);
if (!listFile || !audioFile) { console.error('Usage: node tools/game_voice/import_batch.mjs <partN.json> <audio file>'); process.exit(1); }
const part = JSON.parse(readFileSync(listFile, 'utf8'));
const tmp = mkdtempSync(join(tmpdir(), 'gvb-'));
try {
  const wavPath = join(tmp, 'all.wav');
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', audioFile, '-ac', '1', '-ar', '24000', wavPath]);
  if (r.status !== 0) throw new Error(`ffmpeg: ${r.stderr}`);
  const clips = splitBySilence(readFileSync(wavPath), part.length);
  const dir = join(ROOT, 'assets', 'games', 'learn_voice', 'ar');
  mkdirSync(dir, { recursive: true });
  clips.forEach((c, i) => {
    const raw = join(tmp, `${i}.mp3`);
    writeFileSync(raw, c);
    const o = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=7,apad=pad_dur=0.1', '-ac', '1', '-ar', '24000', '-b:a', '64k', join(dir, `${part[i].id}.mp3`)]);
    if (o.status !== 0) throw new Error(`ffmpeg: ${o.stderr}`);
    console.log(`${part[i].id}  ${part[i].text}`);
  });
  console.log(`${clips.length} clips written`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
spawnSync(process.execPath, [join(ROOT, 'tools', 'game_voice', 'generate.mjs'), '--manifest'], { stdio: 'inherit' });
