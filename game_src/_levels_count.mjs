import fs from 'node:fs'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const out = {};
for (const d of fs.readdirSync('.', { withFileTypes: true })) {
  if (!d.isDirectory() || d.name === 'node_modules') continue;
  const srcdir = path.join(d.name, 'src'); if (!fs.existsSync(srcdir)) continue;
  for (const f of fs.readdirSync(srcdir).filter((x) => /\.js$/.test(x))) {
    if (!/(sim|game|levels|race|data|world)/.test(f)) continue;
    try {
      const m = await import(pathToFileURL(path.resolve(srcdir, f)).href);
      for (const k of Object.keys(m)) if (/^(LEVELS|STAGES|COURSES|TRACKS|ROUNDS|CHAPTERS|MAPS|RACES|LEVEL_DEFS|BUILDS|ROOMS|FARMS|ISLANDS|ZONES|PUZZLES)$/.test(k) && Array.isArray(m[k])) (out[d.name] ||= []).push(`${f}:${k}=${m[k].length}`);
    } catch (e) { /* skip */ }
  }
}
for (const [k, v] of Object.entries(out)) console.log(k.padEnd(20), v.join(' '));
