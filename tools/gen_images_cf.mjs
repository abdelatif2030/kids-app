// Generates the pictures listed in docs/ALL_GAMES_IMAGE_SCRIPTS.md with Cloudflare Workers AI (FLUX.1 schnell, free daily allowance).
// Keys come ONLY from the environment: CLOUDFLARE_AI_TOKEN and CLOUDFLARE_ACCOUNT_ID (never written to a file).
// Run: node tools/gen_images_cf.mjs [--limit N] [--game N] [--steps 4]
// Output: game_src/_generated_images/<game>/<name>.jpg ; existing files are skipped, so a re-run continues where it stopped.
// Stops by itself when the daily allowance is used up. FLUX makes square 1024 pictures with a plain background; transparent
// sprites need a background-removal step afterwards (rembg), landscape scenes need a crop or outpaint.
import fs from 'node:fs';
import path from 'node:path';

const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
const LIMIT = Number(arg('limit', 1e9));
const ONLY = arg('game', null);
const STEPS = Number(arg('steps', 4));
const TOKEN = process.env.CLOUDFLARE_AI_TOKEN;
const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!TOKEN || !ACCOUNT) { console.error('Set CLOUDFLARE_AI_TOKEN and CLOUDFLARE_ACCOUNT_ID first.'); process.exit(1); }

const md = fs.readFileSync('docs/ALL_GAMES_IMAGE_SCRIPTS.md', 'utf8');
const sections = md.split(/^## (?=\d+\. )/m).slice(1);
const jobs = [];
for (const sec of sections) {
  const head = sec.split('\n')[0];
  const num = head.match(/^(\d+)\./)[1];
  const en = (head.match(/— (.+?) \(/) || [, 'game'])[1].replace(/[^A-Za-z0-9]+/g, '_').toLowerCase();
  const style = (sec.match(/```\n([\s\S]*?)\n```/) || [, ''])[1].trim();
  for (const line of sec.split('\n')) {
    const m = line.match(/^\d+\. `([^`]+?)\.png` — (.+)$/);
    if (!m) continue;
    let [, name, text] = m;
    // make the background plain so it can be removed afterwards; drop the sizing boilerplate
    text = text.replace(/Single subject, centered[^.]*\./, 'Single subject, centered, full object visible, plain white background, no text.')
      .replace(/transparent background/g, 'plain white background')
      .replace(/Clean game UI element[^.]*\./, 'Clean glossy rounded game UI icon on a plain white background, no text.')
      .replace(/Wide scene[^.]*\.[^.]*\./, 'Wide scene, no characters, no text, no UI.')
      .replace(/\d{3,4}x\d{3,4}[^.]*\./g, '');
    const range = name.match(/^(.*?)(\d+)\.\.(\d+)$/);
    const names = range ? Array.from({ length: Number(range[3]) - Number(range[2]) + 1 }, (_, i) => [range[1] + (Number(range[2]) + i), ` IMPORTANT: draw ONLY number ${i + 1} of the ${range[3]} described, ONE single subject alone in the picture (never a group), clearly different from the others.`]) : [[name, '']];
    const parens = (text.match(/\(([^)]+)\)/) || [])[1];
    const items = parens ? parens.split(/,\s*|\s+and\s+/).map((s) => s.trim()).filter(Boolean) : [];
    names.forEach(([n, extra], i) => {
      let t = text;
      if (range && items.length >= names.length) {
        // pick only item i of the "(a, b, c ...)" list so the picture shows ONE subject, not the whole set
        t = t.replace(/\(([^)]+)\)/, '').replace(/\b(Five|Six|Four|Three|Two|Seven|Eight) different /i, 'One ').replace(/\bs\b(?= in )/, '');
        t += ` This one: ${items[i]}.`;
      }
      jobs.push({ game: `${num.padStart(2, '0')}_${en}`, num, name: n, prompt: `${style} ${t}${extra}`.slice(0, 2000) });
    });
  }
}

// --jobs tools/art_jobs/<game>.json : hand-written prompts for one game, saved as game_src/_generated_images/<game>/<name>.jpg
const JOBS = arg('jobs', null);
if (JOBS) {
  const spec = JSON.parse(fs.readFileSync(JOBS, 'utf8'));
  const game = path.basename(JOBS, '.json');
  jobs.length = 0;
  for (const j of spec.jobs) jobs.push({ game, num: '0', name: j.name, prompt: `${spec.style} ${j.prompt} ${j.kind === 'sprite' ? spec.kind_sprite : (spec.suffix || 'No characters unless described, no text, no UI.')}` });
}
let done = 0, skipped = 0;
for (const j of jobs) {
  if (ONLY && j.num !== ONLY) continue;
  if (done >= LIMIT) break;
  const dir = path.join('game_src', '_generated_images', j.game);
  const file = path.join(dir, j.name.replace(/[^A-Za-z0-9_.-]/g, '_') + '.jpg');
  if (fs.existsSync(file)) { skipped++; continue; }
  fs.mkdirSync(dir, { recursive: true });
  let ok = false;
  for (let attempt = 0; attempt < 3 && !ok; attempt++) {
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/ai/run/@cf/black-forest-labs/flux-1-schnell`, {
      method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: j.prompt, steps: STEPS }),
    });
    const body = await res.json().catch(() => ({}));
    if (body.success && body.result?.image) { fs.writeFileSync(file, Buffer.from(body.result.image, 'base64')); ok = true; done++; console.log(`ok   ${j.game}/${j.name}`); break; }
    const msg = JSON.stringify(body.errors || body).slice(0, 200);
    if (res.status === 429 || /limit|quota|neurons|4006/i.test(msg)) { console.log(`STOP daily allowance reached (${msg}). Generated ${done} this run. Run again tomorrow.`); process.exit(0); }
    if (/NSFW|flagged/i.test(msg)) { console.log(`skip ${j.game}/${j.name}: ${msg}`); break; }
    console.log(`retry ${j.game}/${j.name}: HTTP ${res.status} ${msg}`);
    await new Promise((r) => setTimeout(r, 2000));
  }
}
console.log(`Finished. generated ${done}, already existed ${skipped}, total jobs ${jobs.length}.`);
