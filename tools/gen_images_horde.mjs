// Free fallback image generator: AI Horde (stablehorde.net, volunteer GPUs, anonymous key). Same job file format as gen_images_cf.mjs.
// Run: node tools/gen_images_horde.mjs --jobs tools/art_jobs/cards.json [--limit N] [--only name1,name2] [--par 4]
// Output: game_src/_generated_images/<jobs file name>/<name>.jpg ; existing files are skipped, so a re-run continues.
// Only the picture prompt text is sent (no personal data). Slower (a minute or two each) but free.
import fs from 'node:fs';
import path from 'node:path';

const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
const JOBS = arg('jobs', null); const LIMIT = Number(arg('limit', 1e9)); const ONLY = arg('only', '') ? arg('only', '').split(',') : null; const PAR = Number(arg('par', 4));
if (!JOBS) { console.error('--jobs file required'); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(JOBS, 'utf8'));
const game = path.basename(JOBS, '.json');
const API = 'https://stablehorde.net/api/v2';
const KEY = process.env.HORDE_API_KEY || '0000000000';
const H = { apikey: KEY, 'Content-Type': 'application/json', 'Client-Agent': 'rehlaty-art:1:none' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const dir = path.join('game_src', '_generated_images', game); fs.mkdirSync(dir, { recursive: true });

const queue = spec.jobs.filter((j) => (!ONLY || ONLY.includes(j.name)) && !fs.existsSync(path.join(dir, j.name + '.jpg'))).slice(0, LIMIT);
let done = 0, failed = 0;

async function one(j) {
  const file = path.join(dir, j.name + '.jpg');
  const sprite = j.kind === 'sprite';
  const prompt = `${spec.style} ${j.prompt} ${sprite ? spec.kind_sprite : (spec.suffix || '')}`.trim();
  const wide = j.kind === 'bg' || j.kind === 'section';
  const body = { prompt: `${prompt} ### text, letters, words, watermark, logo, blurry, deformed, ugly, scary, gore`, params: { sampler_name: 'k_euler_a', cfg_scale: 6.5, width: wide ? 1024 : 768, height: wide ? 576 : 768, steps: 28, n: 1 }, nsfw: false, censor_nsfw: true, models: ['AlbedoBase XL (SDXL)', 'SDXL 1.0', 'Juggernaut XL', 'Dreamshaper XL'], r2: true, shared: false, slow_workers: true };
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const sub = await (await fetch(`${API}/generate/async`, { method: 'POST', headers: H, body: JSON.stringify(body) })).json();
      if (!sub.id) { console.log(`submit failed ${j.name}: ${JSON.stringify(sub).slice(0, 160)}`); await sleep(8000); continue; }
      let img = null;
      for (let i = 0; i < 150; i++) {
        await sleep(6000);
        const st = await (await fetch(`${API}/generate/status/${sub.id}`, { headers: H })).json().catch(() => ({}));
        if (st.done && st.generations && st.generations[0]) { img = st.generations[0].img; break; }
        if (st.faulted) break;
      }
      if (!img) { console.log(`no image ${j.name} (attempt ${attempt + 1})`); continue; }
      const data = Buffer.from(await (await fetch(img)).arrayBuffer());
      fs.writeFileSync(file, data); done++; console.log(`ok   ${game}/${j.name} (${data.length >> 10} KB) [${done}/${queue.length}]`); return;
    } catch (e) { console.log(`error ${j.name}: ${e.message}`); await sleep(5000); }
  }
  failed++;
}
async function worker() { while (queue.length) { const j = queue.shift(); await one(j); } }
const total = queue.length;
await Promise.all(Array.from({ length: PAR }, worker));
console.log(`Finished: ${done} new of ${total}, failed ${failed}`);
