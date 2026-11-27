#!/usr/bin/env node
/* build.mjs — copy the player source into assets/book_stories/.
   Usage: node build.mjs [--standalone <dir>]
   --standalone also copies the Tajawal fonts and the pilot story folder into
   <dir> so the demo can be zipped and run anywhere with a static server. */
import { cpSync, copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..', '..');
const out = join(repo, 'assets', 'book_stories', 'index.html');
mkdirSync(dirname(out), { recursive: true });
copyFileSync(join(here, 'src', 'index.html'), out);
console.log('built', out);

const si = process.argv.indexOf('--standalone');
if (si > -1) {
  const dir = process.argv[si + 1];
  mkdirSync(join(dir, 'fonts'), { recursive: true });
  copyFileSync(out, join(dir, 'index.html'));
  for (const f of ['Tajawal-Regular.ttf', 'Tajawal-Bold.ttf'])
    copyFileSync(join(repo, 'assets', 'fonts', f), join(dir, 'fonts', f));
  cpSync(join(repo, 'assets', 'book_stories', 's01_thirsty_dog'),
         join(dir, 's01_thirsty_dog'), { recursive: true });
  console.log('standalone bundle ->', dir);
}
