// Rehlaty shared-engine shim.
//
// Game bundles are built with cozy_kit/build_game.mjs, which resolves the
// bare 'three' import to this file. At runtime the page must have loaded
// assets/games/three_shared.js first (it sets window.__THREE__), so every
// game shares ONE copy of three.js instead of bundling its own (~600 KB).
// Addon imports (three/examples/jsm/...) are still bundled per game and
// resolve their own 'three' import through this same shim.
if (typeof window === 'undefined' || !window.__THREE__) {
  throw new Error(
    'Rehlaty: shared three.js engine is not loaded. ' +
    'assets/games/three_shared.js must be loaded before game.js.'
  );
}
module.exports = window.__THREE__;
