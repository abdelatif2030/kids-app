// Shared three.js engine entry point.
// The built file (assets/games/three_shared.js) is loaded once by the app
// shell / game page before any game.js, and exposes the whole three module
// as window.__THREE__. Game bundles pick it up through cozy_kit/three_shim.js.
import * as THREE from 'three';

window.__THREE__ = THREE;
