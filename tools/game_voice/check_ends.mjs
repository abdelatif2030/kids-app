// Finds clips that end abruptly (the last 25 ms is still loud = the word was cut off). Used as a quality check.
//   node tools/game_voice/check_ends.mjs [dir]        -> prints the ids of clips whose ending is cut, with the text
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = process.argv[2] || path.join(ROOT, 'assets/games/learn_voice/ar');
const text = new Map(JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).map((l) => [l.id, l.text]));
const RATE = 16000, WIN = Math.round(RATE * 0.025);
const out = [];
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.mp3'))) {
  const r = spawnSync('ffmpeg', ['-v', 'error', '-i', path.join(DIR, f), '-ac', '1', '-ar', String(RATE), '-f', 's16le', '-'], { maxBuffer: 1 << 26 });
  const b = r.stdout, n = Math.floor(b.length / 2);
  if (n < WIN * 4) continue;
  const rms = (s) => { let a = 0; for (let i = s; i < s + WIN; i++) { const v = b.readInt16LE(i * 2); a += v * v; } return Math.sqrt(a / WIN); };
  let peak = 0; for (let s = 0; s + WIN <= n; s += WIN) peak = Math.max(peak, rms(s));
  const tail = rms(n - WIN), tail2 = rms(n - 2 * WIN);
  const ratio = Math.max(tail, tail2) / (peak || 1);
  out.push({ id: f.slice(0, -4), ratio, dur: n / RATE });
}
out.sort((a, b) => b.ratio - a.ratio);
const cut = out.filter((o) => o.ratio > 0.18);
console.log(`${cut.length} of ${out.length} clips look cut at the end (tail loudness > 18 % of the loudest part)`);
for (const o of cut.slice(0, 80)) console.log(`${o.ratio.toFixed(2)}  ${o.dur.toFixed(1)}s  ${o.id}  ${text.get(o.id) || ''}`);
