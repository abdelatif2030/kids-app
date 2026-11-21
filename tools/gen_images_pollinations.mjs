// Free image generator: pollinations.ai (no key). Same job file format as gen_images_horde.mjs.
//   node tools/gen_images_pollinations.mjs --jobs tools/art_jobs/x.json [--only a,b] [--size 768] [--chroma green|magenta]
// Output: game_src/_generated_images/<jobs file name>/<name>.jpg (existing files are skipped, so a re-run continues).
// Only the picture prompt text is sent (no personal data). The bottom-right "pollinations.ai" mark is cropped away afterwards by tools/cut_sprite.py (crop_mark).
import fs from 'node:fs';
import path from 'node:path';
const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
const JOBS = arg('jobs', null); const ONLY = arg('only', '') ? arg('only', '').split(',') : null; const SIZE = Number(arg('size', 768));
const spec = JSON.parse(fs.readFileSync(JOBS, 'utf8'));
const game = path.basename(JOBS, '.json');
const dir = path.join('game_src', '_generated_images', game); fs.mkdirSync(dir, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ok = 0, fail = 0;
for (const j of spec.jobs) {
  if (ONLY && !ONLY.includes(j.name)) continue;
  const file = path.join(dir, j.name + '.jpg');
  if (fs.existsSync(file)) continue;
  const sprite = j.kind === 'sprite';
  const chroma = j.chroma || (sprite ? 'green' : null);
  const bg = chroma ? (chroma === 'magenta' ? 'on a solid flat bright magenta (#FF00FF) background' : 'on a solid flat bright green (#00FF00) background') : '';
  const prompt = `${spec.style} ${j.prompt} ${sprite ? spec.kind_sprite : (spec.suffix || '')} ${bg}`.replace(/\s+/g, ' ').trim();
  const w = j.kind === 'bg' ? Math.round(SIZE * 1.6 / 8) * 8 : SIZE, h = SIZE;
  let done = false;
  for (let attempt = 0; attempt < 3 && !done; attempt++) {
    try {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&model=flux&nologo=true&seed=${Math.floor(Math.random() * 1e6)}`;
      const r = await fetch(url, { signal: AbortSignal.timeout(150000) });
      if (!r.ok || !(r.headers.get('content-type') || '').includes('image')) throw new Error('http ' + r.status);
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 8000) throw new Error('too small');
      fs.writeFileSync(file, buf); ok++; done = true;
      console.log('ok  ', game + '/' + j.name, Math.round(buf.length / 1024) + ' KB');
    } catch (e) { console.log('retry', j.name, String(e.message || e).slice(0, 60)); await sleep(4000 * (attempt + 1)); }
  }
  if (!done) fail++;
  await sleep(1500);
}
console.log(`Finished: ${ok} new, ${fail} failed`);
