#!/usr/bin/env node
// Rehlaty shared build helper for three.js games.
//
// Usage (from a game package directory):
//   node ../cozy_kit/build_game.mjs <entry> <outfile>
//
// Bundles the game with esbuild (same settings as the old per-package CLI
// builds: bundle, minify, iife, es2019) except that the bare 'three' import
// resolves to cozy_kit/three_shim.js, so the finished game.js uses the
// shared engine (window.__THREE__ from assets/games/three_shared.js)
// instead of carrying a private copy of three.js. Imports of
// 'three/examples/jsm/...' addons are NOT matched by the shim filter and
// stay bundled per game, as before.
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const kitDir = path.dirname(fileURLToPath(import.meta.url));
const shimPath = path.join(kitDir, 'three_shim.js');

// esbuild is loaded from the CALLING package: every game package keeps its
// own esbuild devDependency, and createRequire anchored at the package's
// package.json resolves that copy.
const require = createRequire(path.join(process.cwd(), 'package.json'));
const esbuild = require('esbuild');

const [entry, outfile] = process.argv.slice(2);
if (!entry || !outfile) {
  console.error('usage: node ../cozy_kit/build_game.mjs <entry> <outfile>');
  process.exit(2);
}

const threeShimPlugin = {
  name: 'rehlaty-three-shim',
  setup(build) {
    build.onResolve({ filter: /^three$/ }, () => ({ path: shimPath }));
  },
};

await esbuild.build({
  entryPoints: [entry],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2019',
  outfile,
  plugins: [threeShimPlugin],
  logLevel: 'info',
});
