// Cuts one long recording (several sentences said one after another with pauses) into one mp3 per sentence.
// Used when the voice service only allows a few requests a day: many sentences go in ONE request, with a clear
// pause between them, and this finds the pauses. It only accepts a cut when it finds exactly the expected number of
// sentences (so no clip can end up with the wrong words); it tries stricter and softer pause settings first.
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const ff = (args, input) => spawnSync('ffmpeg', args, { input, maxBuffer: 256 * 1024 * 1024 });

/** Speech ranges [[start, end], ...] in seconds, found by looking for silences of at least [minSilence] seconds. */
export function speechRanges(wavPath, minSilence, noiseDb) {
  const r = ff(['-v', 'info', '-i', wavPath, '-af', `silencedetect=noise=${noiseDb}dB:d=${minSilence}`, '-f', 'null', '-']);
  const log = r.stderr.toString();
  const dur = Number((/Duration: (\d+):(\d+):([\d.]+)/.exec(log) || []).slice(1).reduce((s, v, i) => s + Number(v) * [3600, 60, 1][i], 0));
  const starts = [...log.matchAll(/silence_start: ([\d.]+)/g)].map((m) => Number(m[1]));
  const ends = [...log.matchAll(/silence_end: ([\d.]+)/g)].map((m) => Number(m[1]));
  const ranges = [];
  let from = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] - from > 0.12) ranges.push([from, starts[i]]);
    from = ends[i] ?? dur;
  }
  if (dur - from > 0.12) ranges.push([from, dur]);
  return { ranges, dur };
}

/** [wav] is a WAV buffer. Returns [mp3 Buffer, ...] of length [expected], or throws with what was found. */
export function splitBySilence(wav, expected) {
  const dir = mkdtempSync(join(tmpdir(), 'gv-'));
  try {
    const wavPath = join(dir, 'in.wav');
    writeFileSync(wavPath, wav);
    let found = [];
    let best = null;
    for (const noise of [-38, -34, -30, -42]) {
      for (const minSilence of [0.7, 0.55, 0.9, 0.45, 0.35, 1.2]) {
        const { ranges, dur } = speechRanges(wavPath, minSilence, noise);
        found.push(ranges.length);
        if (ranges.length === expected) { best = { ranges, dur }; break; }
      }
      if (best) break;
    }
    if (!best) throw new Error(`split: expected ${expected} sentences but found ${[...new Set(found)].join('/')} with every setting`);
    return best.ranges.map(([a, b], i) => {
      const out = join(dir, `${i}.mp3`);
      const r = ff(['-v', 'error', '-y', '-ss', String(Math.max(0, a - 0.06)), '-to', String(Math.min(best.dur, b + 0.14)), '-i', wavPath, '-ac', '1', '-ar', '24000', '-b:a', '64k', out]);
      if (r.status !== 0) throw new Error(`ffmpeg: ${r.stderr}`);
      return readFileSync(out);
    });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
