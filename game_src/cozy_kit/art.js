// Shared "picture with fallback" loader for the web games.
// A game asks for its pictures once; every picture that is missing (or fails to load) is simply null, and the game keeps drawing
// that thing in code, exactly as before. So a game never breaks because a picture is not there yet.
//   const art = await loadArt(base, ['hero', 'monster_1']);   // base = the game folder (config.base), pictures in <base>art/<name>.webp
//   if (art.hero) ... else ...
export function loadArt(base, names) {
  const root = (base || './').replace(/\/?$/, '/');
  return Promise.all(names.map((n) => new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const fin = (v) => { if (!done) { done = true; resolve([n, v]); } };
    img.onload = () => fin(img.naturalWidth > 0 ? img : null);
    img.onerror = () => fin(null);
    setTimeout(() => fin(null), 6000); // never hold the game up
    img.src = `${root}art/${n}.webp`;
  }))).then((pairs) => Object.fromEntries(pairs));
}

/** A 3D game's backdrop picture: loads <base>art/<name>.webp and, if it is there, makes it the scene background.
 *  [stillWanted] is asked once the picture is ready (a level may have changed meanwhile); missing picture = the colour stays. */
export function applyBackdrop(THREE, scene, base, name, stillWanted) {
  if (!name) return;
  const root = (base || './').replace(/\/?$/, '/');
  try {
    new THREE.TextureLoader().load(`${root}art/${name}.webp`, (tex) => {
      if (stillWanted && !stillWanted()) { tex.dispose(); return; }
      tex.colorSpace = THREE.SRGBColorSpace;
      scene.background = tex;
    }, undefined, () => {});
  } catch (_) { /* keep the colour */ }
}
