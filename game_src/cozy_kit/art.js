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

// ---- picture vehicles for the 3D games ---------------------------------------------------------------------------------------
// A cut-out picture of a vehicle seen from behind (transparent WebP made by tools/cut_sprite.py) becomes a camera-facing upright
// plane standing on the road. The camera of a chase game always looks along the road, so a rear-view picture is always right.

/** Loads <base>art/<name>.webp as textures: { name: { tex, aspect } } (a missing picture is simply absent). */
export function loadSprites(THREE, base, names) {
  const root = (base || './').replace(/\/?$/, '/');
  const loader = new THREE.TextureLoader();
  return Promise.all(names.map((n) => new Promise((resolve) => {
    let done = false;
    const fin = (v) => { if (!done) { done = true; resolve([n, v]); } };
    setTimeout(() => fin(null), 6000);
    try {
      loader.load(`${root}art/${n}.webp`, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;
        const im = tex.image;
        fin({ tex, aspect: im && im.height ? im.width / im.height : 1.3 });
      }, undefined, () => fin(null));
    } catch (_) { fin(null); }
  }))).then((pairs) => Object.fromEntries(pairs.filter(([, v]) => v)));
}

/** An upright picture plane [width] metres wide whose bottom edge is on the ground, with a soft shadow. Same fields the games'
 *  3D vehicles have (body, wheels, blinkers, tail, flames) so the game code does not care which one it holds. */
export function makeSpriteVehicle(THREE, sprite, width) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const h = width / sprite.aspect;
  const mat = new THREE.MeshBasicMaterial({ map: sprite.tex, transparent: true, alphaTest: 0.06, toneMapped: false, fog: false });
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, h), mat);
  plane.position.y = h / 2;
  plane.renderOrder = 2;
  body.add(plane);
  const sc = document.createElement('canvas'); sc.width = sc.height = 64;
  const sx = sc.getContext('2d'); const sg = sx.createRadialGradient(32, 32, 2, 32, 32, 31);
  sg.addColorStop(0, 'rgba(0,0,0,0.55)'); sg.addColorStop(0.6, 'rgba(0,0,0,0.3)'); sg.addColorStop(1, 'rgba(0,0,0,0)');
  sx.fillStyle = sg; sx.fillRect(0, 0, 64, 64); // a soft round shadow, not a dark box
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(width * 1.2, width * 0.7), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, 0.03, -width * 0.12);
  root.add(shadow);
  const blinkMat = new THREE.MeshBasicMaterial({ color: 0xffb21a });
  const blinkers = [-1, 1].map((s) => { const b = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.12), blinkMat); b.position.set(s * (width / 2 - 0.12), h * 0.38, 0.02); b.visible = false; body.add(b); return b; });
  return { root, body, wheels: [], blinkers, tail: { emissiveIntensity: 0 }, flames: [], len: width * 2.2, sprite: true };
}

/** A recoloured copy of a picture vehicle (same pixels, channels mixed): { tex, aspect }. [mix] maps (r, g, b) to a new [r, g, b].
 *  If the browser will not let the pixels be read, the original is returned, so a car is never missing. */
export function recolorSprite(THREE, sprite, mix) {
  try {
    const im = sprite.tex.image;
    const c = document.createElement('canvas');
    c.width = im.width; c.height = im.height;
    const x = c.getContext('2d');
    x.drawImage(im, 0, 0);
    const d = x.getImageData(0, 0, c.width, c.height);
    const px = d.data;
    for (let i = 0; i < px.length; i += 4) {
      const m = mix(px[i], px[i + 1], px[i + 2]);
      px[i] = Math.max(0, Math.min(255, m[0])); px[i + 1] = Math.max(0, Math.min(255, m[1])); px[i + 2] = Math.max(0, Math.min(255, m[2]));
    }
    x.putImageData(d, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return { tex, aspect: sprite.aspect };
  } catch (_) { return sprite; }
}
