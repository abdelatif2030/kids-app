// Turns your recordings into the games' voice clips.
//   node tools/game_voice/import_recordings.mjs <folder with <id>.webm / .mp4 / .m4a / .wav / .mp3 files>
// (unzip the zip from the recording page first). Each file becomes assets/games/learn_voice/ar/<id>.mp3:
// quiet at the start and end trimmed, the volume levelled so every sentence is equally loud, mono 24 kHz.
// Files whose name is not a known sentence id are skipped and reported. Then the clip list is rebuilt.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const dir = process.argv[2];
if (!dir || !existsSync(dir)) { console.error('Usage: node tools/game_voice/import_recordings.mjs <folder with the recordings>'); process.exit(1); }
const ids = new Set(JSON.parse(readFileSync(join(ROOT, 'assets', 'games', 'learn_voice', 'lines.json'), 'utf8')).filter((l) => l.lang === 'ar').map((l) => l.id));
const out = join(ROOT, 'assets', 'games', 'learn_voice', 'ar');
mkdirSync(out, { recursive: true });
let ok = 0;
const skipped = [];
for (const f of readdirSync(dir)) {
  const id = basename(f, extname(f));
  if (!/\.(webm|mp4|m4a|wav|mp3|ogg|aac)$/i.test(f)) continue;
  if (!ids.has(id)) { skipped.push(f); continue; }
  const filter = 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,loudnorm=I=-16:TP=-1.5:LRA=7';
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', join(dir, f), '-af', `${filter},apad=pad_dur=0.12`, '-ac', '1', '-ar', '24000', '-b:a', '64k', join(out, `${id}.mp3`)]);
  if (r.status === 0) { ok++; console.log('ok', id); } else console.error('FAILED', f, r.stderr.toString().slice(0, 200));
}
console.log(`${ok} clips imported${skipped.length ? `, ${skipped.length} files skipped (unknown name): ${skipped.slice(0, 5).join(', ')}` : ''}`);
spawnSync(process.execPath, [join(ROOT, 'tools', 'game_voice', 'generate.mjs'), '--manifest'], { stdio: 'inherit' });
