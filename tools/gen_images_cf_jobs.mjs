// Cloudflare Workers AI FLUX.1-schnell for a JOB FILE (same format as gen_images_horde.mjs): node tools/gen_images_cf_jobs.mjs --jobs tools/art_jobs/x.json [--only a,b] [--limit N]
// Keys only from the environment (CLOUDFLARE_AI_TOKEN, CLOUDFLARE_ACCOUNT_ID). Output game_src/_generated_images/<jobs name>/<name>.jpg (1024x1024; scenes are cropped to 16:9 later). Stops by itself when the free allowance is used up.
import fs from 'node:fs';
import path from 'node:path';
const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
const JOBS = arg('jobs', null); const ONLY = arg('only', '') ? arg('only', '').split(',') : null; const LIMIT = Number(arg('limit', 1e9));
const TOKEN = process.env.CLOUDFLARE_AI_TOKEN; const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!JOBS || !TOKEN || !ACCOUNT) { console.error('need --jobs and the env keys'); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(JOBS, 'utf8'));
const game = path.basename(JOBS, '.json');
const dir = path.join('game_src', '_generated_images', game); fs.mkdirSync(dir, { recursive: true });
let ok = 0, fail = 0;
for (const j of spec.jobs) {
  if (ok >= LIMIT) break;
  if (ONLY && !ONLY.includes(j.name)) continue;
  const file = path.join(dir, j.name + '.jpg'); if (fs.existsSync(file)) continue;
  const sprite = j.kind === 'sprite';
  const prompt = `${spec.style} ${j.prompt} ${sprite ? spec.kind_sprite : (spec.suffix || '')}`.replace(/\s+/g, ' ').trim();
  let done = false;
  for (let a = 0; a < 3 && !done; a++) {
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/ai/run/@cf/black-forest-labs/flux-1-schnell`, { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, steps: 4 }) });
    const body = await res.json().catch(() => ({}));
    if (body.success && body.result?.image) { fs.writeFileSync(file, Buffer.from(body.result.image, 'base64')); ok++; done = true; console.log('ok  ', game + '/' + j.name); break; }
    const msg = JSON.stringify(body.errors || body).slice(0, 200);
    if (res.status === 429 || /limit|quota|neurons|4006/i.test(msg)) { console.log('STOP daily allowance reached; made', ok); process.exit(0); }
    if (/NSFW|flagged/i.test(msg)) { console.log('skip', j.name, msg); break; }
    console.log('retry', j.name, msg); await new Promise((r) => setTimeout(r, 2000));
  }
  if (!done) fail++;
}
console.log(`Finished: ${ok} new, ${fail} failed`);
