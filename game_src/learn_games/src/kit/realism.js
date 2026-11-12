// What makes the 3D worlds look real instead of flat (owner 2026-11-12): film-style tone mapping, reflections from a
// soft studio environment (so glossy things shine and shadows are not black), a gradient sky with fluffy 3D clouds, and
// natural scenery (trees, bushes, flowers, rocks). Everything is built from shapes in code; nothing is downloaded.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/** Tone mapping + image-based light on the scene. Call once, after the renderer and the scene exist. */
export function polish(renderer, scene, { env = 0.35, exposure = 0.95 } = {}) {
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = exposure;
  try {
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = env;
    pm.dispose();
  } catch (_) { /* a device without float textures keeps the plain light */ }
}

/** A sky dome with a soft gradient (and a warm horizon) behind everything. */
export function addSky(scene, { top = '#5ab4ff', horizon = '#d8f0ff' } = {}) {
  const c = document.createElement('canvas');
  c.width = 8; c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, top); gr.addColorStop(0.6, horizon); gr.addColorStop(1, '#fff6e0');
  g.fillStyle = gr; g.fillRect(0, 0, 8, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(new THREE.SphereGeometry(90, 24, 16), new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -10;
  scene.add(sky);
  scene.background = null;
  return sky;
}

/** Fluffy clouds made of soft spheres; returns a group whose children drift when [drift](dt) is called. */
export function addClouds(scene, n = 7, { y = 11, spread = 36, z = -22 } = {}) {
  const grp = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, emissive: 0xffffff, emissiveIntensity: 0.35 });
  for (let i = 0; i < n; i++) {
    const cl = new THREE.Group();
    const puffs = 4 + (i % 3);
    for (let k = 0; k < puffs; k++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(1.2 + (k % 3) * 0.45, 14, 10), mat);
      s.position.set((k - puffs / 2) * 1.5, Math.sin(k * 1.7) * 0.4, (k % 2) * 0.5);
      s.scale.y = 0.7;
      cl.add(s);
    }
    cl.position.set((i / n - 0.5) * spread + Math.sin(i * 3) * 3, y + (i % 3) * 1.6, z - (i % 2) * 6);
    cl.userData.v = 0.08 + (i % 4) * 0.03;
    grp.add(cl);
  }
  scene.add(grp);
  grp.userData.drift = (dt) => { for (const c of grp.children) { c.position.x += c.userData.v * dt; if (c.position.x > spread / 2 + 6) c.position.x = -spread / 2 - 6; } };
  return grp;
}

/** A round tree: brown trunk and a cluster of leafy balls. */
export function makeTree(h = 3, leaf = 0x3aa84a) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * h / 3, 0.26 * h / 3, h * 0.55, 10), new THREE.MeshStandardMaterial({ color: 0x7a4a22, roughness: 1 }));
  trunk.position.y = h * 0.27;
  trunk.castShadow = true;
  g.add(trunk);
  const lm = new THREE.MeshStandardMaterial({ color: leaf, roughness: 0.85 });
  for (const [x, y, z, r] of [[0, h * 0.8, 0, 0.62], [-0.45, h * 0.66, 0.1, 0.45], [0.45, h * 0.68, -0.1, 0.46], [0.05, h * 1.02, 0.05, 0.42], [-0.1, h * 0.7, 0.4, 0.4]]) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(r * h / 3 * 1.5, 14, 11), lm);
    b.position.set(x * h / 3 * 1.5, y, z * h / 3 * 1.5);
    b.castShadow = true;
    g.add(b);
  }
  return g;
}

export function makeBush(r = 0.7, c = 0x3a9a48) {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 });
  for (const [x, y, z, k] of [[0, 0.5, 0, 1], [-0.7, 0.35, 0.1, 0.7], [0.7, 0.38, -0.05, 0.75]]) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(r * k, 12, 9), m);
    b.position.set(x * r, y * r, z * r);
    b.castShadow = true;
    g.add(b);
  }
  return g;
}

export function makeFlower(color = 0xff6a9a, h = 0.55) {
  const g = new THREE.Group();
  const st = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, h, 6), new THREE.MeshStandardMaterial({ color: 0x3a9a3a }));
  st.position.y = h / 2;
  g.add(st);
  const pm = new THREE.MeshStandardMaterial({ color, roughness: 0.6 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), pm);
    p.position.set(Math.cos(a) * 0.11, h, Math.sin(a) * 0.11);
    p.scale.set(1, 0.5, 1);
    g.add(p);
  }
  const c = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffe05a }));
  c.position.y = h + 0.02;
  g.add(c);
  return g;
}

export function makeRock(r = 0.5) {
  const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 1), new THREE.MeshStandardMaterial({ color: 0x9a9aa4, roughness: 0.95, flatShading: true }));
  m.scale.set(1.2, 0.7, 1);
  m.castShadow = true;
  return m;
}

/** Scatters natural things around the edges of a scene: [{type, x, z, s}] in world units, standing on y = [y]. */
export function scatter(scene, list, y = 0) {
  const flowerCols = [0xff6a9a, 0xffd23a, 0xffffff, 0xb86aff, 0xff8a3a];
  list.forEach((o, i) => {
    let m;
    if (o.t === 'tree') m = makeTree(o.s || 3.4, o.c || [0x3aa84a, 0x4ab85a, 0x2f9a45][i % 3]);
    else if (o.t === 'bush') m = makeBush(o.s || 0.7);
    else if (o.t === 'rock') m = makeRock(o.s || 0.5);
    else m = makeFlower(flowerCols[i % flowerCols.length], o.s || 0.55);
    m.position.set(o.x, y, o.z);
    m.rotation.y = i * 1.3;
    scene.add(m);
  });
}
