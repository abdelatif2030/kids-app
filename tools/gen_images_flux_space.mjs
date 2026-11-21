// Free image generator: the public FLUX.1-schnell Space on Hugging Face (no key; real FLUX, follows "rear view" and "pure white background").
//   node tools/gen_images_flux_space.mjs --jobs tools/art_jobs/x.json [--only a,b] [--size 768] [--limit N]
// Same job file format as gen_images_horde.mjs. Output: game_src/_generated_images/<jobs file name>/<name>.jpg (existing files are skipped).
// Only the prompt text is sent (no personal data). The Space has a free GPU quota per IP: when it runs out the script stops with "STOP".
import fs from 'node:fs';
import path from 'node:path';
const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
const JOBS = arg('jobs', null); const ONLY = arg('only', '') ? arg('only', '').split(',') : null; const SIZE = Number(arg('size', 768)); const LIMIT = Number(arg('limit', 1e9));
const spec = JSON.parse(fs.readFileSync(JOBS, 'utf8'));
const game = path.basename(JOBS, '.json');
const dir = path.join('game_src', '_generated_images', game); fs.mkdirSync(dir, { recursive: true });
const HOST = 'https://black-forest-labs-flux-1-schnell.hf.space';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ok = 0, fail = 0;
for (const j of spec.jobs) {
  if (ok >= LIMIT) break;
  if (ONLY && !ONLY.includes(j.name)) continue;
  const file = path.join(dir, j.name + '.jpg');
  if (fs.existsSync(file)) continue;
  const sprite = j.kind === 'sprite';
  const prompt = `${spec.style} ${j.prompt} ${sprite ? spec.kind_sprite : (spec.suffix || '')}`.replace(/\s+/g, ' ').trim();
  const w = j.kind === 'bg' ? Math.round(SIZE * 1.78 / 64) * 64 : SIZE, h = j.kind === 'bg' ? Math.round(SIZE / 64) * 64 : SIZE;
  let done = false;
  for (let attempt = 0; attempt < 3 && !done; attempt++) {
    try {
      const sub = await fetch(`${HOST}/gradio_api/call/infer`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: [prompt, Math.floor(Math.random() * 1e6), false, w, h, 4] }), signal: AbortSignal.timeout(60000) });
      const sj = await sub.json();
      if (!sj.event_id) throw new Error(JSON.stringify(sj).slice(0, 120));
      const ev = await fetch(`${HOST}/gradio_api/call/infer/${sj.event_id}`, { signal: AbortSignal.timeout(180000) });
      const text = await ev.text();
      if (/quota|exceeded your/i.test(text)) { console.log('STOP quota:', text.slice(0, 160).replace(/\n/g, ' ')); process.exit(0); }
      const m = /"url": "([^"]+)"/.exec(text);
      if (!m) throw new Error(text.slice(0, 140).replace(/\n/g, ' '));
      const img = await fetch(m[1], { signal: AbortSignal.timeout(60000) });
      const buf = Buffer.from(await img.arrayBuffer());
      if (buf.length < 5000) throw new Error('too small');
      // the Space returns WebP; keep it as is under the .jpg name (PIL reads both)
      fs.writeFileSync(file, buf); ok++; done = true;
      console.log('ok  ', game + '/' + j.name, Math.round(buf.length / 1024) + ' KB');
    } catch (e) { console.log('retry', j.name, String(e.message || e).slice(0, 100)); await sleep(5000 * (attempt + 1)); }
  }
  if (!done) fail++;
}
console.log(`Finished: ${ok} new, ${fail} failed`);
