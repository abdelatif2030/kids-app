// Puts the owner's own recordings (zip files made by the recorder pages in web/voice) into the learning game.
//   node tools/voice_recorder/import.mjs rehlaty_voice_01_letters.zip [more.zip ...] [--dry]
// For every recording: trims the silence at both ends, evens out the loudness, converts it to mp3 (mono, 44.1 kHz, 64 kbps) and saves it as
// assets/games/learn_voice/ar/<id>.mp3 (the old clip is kept in tools/voice_recorder/backup/ first), then rebuilds the list the game reads.
// Needs ffmpeg on the PATH. Nothing is sent anywhere.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DEST = path.join(ROOT, 'assets/games/learn_voice/ar');
const BACKUP = path.join(ROOT, 'tools/voice_recorder/backup');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const zips = args.filter((a) => a.endsWith('.zip'));
if (!zips.length) { console.error('Usage: node tools/voice_recorder/import.mjs file.zip [...] [--dry]'); process.exit(1); }

function unzip(file) {
  const b = fs.readFileSync(file);
  const out = new Map();
  let p = 0;
  while (p + 30 <= b.length && b.readUInt32LE(p) === 0x04034b50) {
    const method = b.readUInt16LE(p + 8);
    const csize = b.readUInt32LE(p + 18);
    const nlen = b.readUInt16LE(p + 26);
    const elen = b.readUInt16LE(p + 28);
    const name = b.toString('utf8', p + 30, p + 30 + nlen);
    const data = b.subarray(p + 30 + nlen + elen, p + 30 + nlen + elen + csize);
    out.set(name, method === 8 ? zlib.inflateRawSync(data) : Buffer.from(data));
    p += 30 + nlen + elen + csize;
  }
  return out;
}

fs.mkdirSync(BACKUP, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rehlaty_voice_'));
let ok = 0, bad = 0;
for (const z of zips) {
  const files = unzip(z);
  const mf = files.get('manifest.json');
  if (!mf) { console.error(`${z}: no manifest.json`); continue; }
  const { items } = JSON.parse(mf.toString('utf8'));
  for (const it of items) {
    const raw = files.get(it.file);
    if (!raw || !/^[0-9a-f]{8}$/.test(it.id)) { bad++; continue; }
    const src = path.join(tmp, it.file);
    fs.writeFileSync(src, raw);
    const out = path.join(tmp, `${it.id}.mp3`);
    const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', src, '-af', 'silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-48dB:start_silence=0.12,areverse,loudnorm=I=-18:TP=-2:LRA=9,apad=pad_dur=0.15', '-ar', '44100', '-ac', '1', '-b:a', '64k', out], { encoding: 'utf8' });
    if (r.status !== 0 || !fs.existsSync(out)) { console.error(`  ✗ ${it.id} ${it.text}: ${(r.stderr || '').split('\n')[0]}`); bad++; continue; }
    if (!DRY) {
      const target = path.join(DEST, `${it.id}.mp3`);
      const bk = path.join(BACKUP, `${it.id}.mp3`);
      if (fs.existsSync(target) && !fs.existsSync(bk)) fs.copyFileSync(target, bk);
      fs.copyFileSync(out, target);
    }
    ok++;
  }
  console.log(`${path.basename(z)}: ${items.length} recordings`);
}
console.log(`${ok} converted${DRY ? ' (dry run: nothing written)' : ' and saved'}, ${bad} problems`);
if (!DRY && ok) {
  const r = spawnSync(process.execPath, [path.join(ROOT, 'tools/game_voice/generate.mjs'), '--manifest'], { encoding: 'utf8' });
  console.log((r.stdout || '').trim().split('\n').pop());
  console.log('Next: node tools/game_voice/verify_voice.mjs --hours 1   (optional listening check), then rebuild/push.');
}
fs.rmSync(tmp, { recursive: true, force: true });
