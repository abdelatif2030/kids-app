// The places of the learning world (owner 2026-11-12: "the start is in one place and after each level we move to another,
// different place", like the environment cards of the reference sheet). Each world is a THREE.Group built from shapes in
// code: sky, ground, scenery and the look of the floating pads the pictures stand on. `buildWorld(id)` returns
// { group, pad, update(dt, time) }. Nothing is downloaded.
import * as THREE from 'three';
import { addSky, addClouds, scatter, makeTree } from './realism.js';
import { makeThing } from './things3d.js';

const m = (c, r = 0.8, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: r, ...o });
const box = (w, h, d, mat, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; return o; };
const cyl = (rt, rb, h, mat, x, y, z, seg = 16) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const cone = (r, h, mat, x, y, z, seg = 16) => { const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const sph = (r, mat, x, y, z) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 14), mat); o.position.set(x, y, z); o.castShadow = true; return o; };

function ground(g, color, stripColor, y = -0.2) {
  const f = new THREE.Mesh(new THREE.PlaneGeometry(80, 44), m(color, 1));
  f.rotation.x = -Math.PI / 2; f.position.y = y; f.receiveShadow = true; g.add(f);
  const strip = box(16, 0.4, 3.4, m(stripColor, 1), 0, -0.05, 3.2);
  g.add(strip);
}

// ---- the pads the pictures float or stand on ------------------------------------------------------------------------
export const PADS = {
  float: { ring: [0xff8a3a, 0xff5a8a, 0x4ac8ff, 0xffc93a, 0x7ad86a], disc: 0xfff4d8 },
  wood: { ring: [0xb8763a, 0xc8864a, 0xa86a3a, 0xd8964a, 0xb8763a], disc: 0xe8c890 },
  cloud: { ring: [0xffffff, 0xf0f4ff, 0xffffff, 0xfff0f8, 0xf0fff8], disc: 0xe8f4ff },
  rock: { ring: [0x8a8aa0, 0x7a7a90, 0x9a9ab0, 0x8a8aa0, 0x7a7a90], disc: 0xc8c8d8 },
  ice: { ring: [0x8ad8ff, 0xa8e8ff, 0x7ac8f0, 0xb8f0ff, 0x8ad8ff], disc: 0xeafaff },
  stone: { ring: [0x9a9a9a, 0xaaaaaa, 0x8a8a8a, 0xb0b0b0, 0x9a9a9a], disc: 0xe0e0e0 },
};

// ---- the worlds -----------------------------------------------------------------------------------------------------
const BUILD = {
  // 1. the sunny pond (the first place)
  meadow(g) {
    addSky(g);
    const clouds = addClouds(g, 7, { y: 9, z: -18 });
    scatter(g, [
      { t: 'tree', x: -9.5, z: -5, s: 5.2 }, { t: 'tree', x: 9.8, z: -4.5, s: 4.6 }, { t: 'tree', x: -13, z: -2, s: 4.2 }, { t: 'tree', x: 13.5, z: -2.5, s: 5 },
      { t: 'bush', x: -8, z: 3.8, s: 0.9 }, { t: 'bush', x: 8.6, z: 3.5, s: 0.8 }, { t: 'rock', x: -7.4, z: 4.8, s: 0.55 },
      ...Array.from({ length: 22 }, (_, i) => ({ t: 'flower', x: -12 + i * 1.12 + Math.sin(i) * 0.4, z: 6 + (i % 4) * 0.6 + Math.cos(i * 2) * 0.5 })),
    ], -0.2);
    ground(g, 0x8ad070, 0x7ac860);
    const bank = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.6, 0.3, 48), m(0xc8a070, 1)); bank.scale.z = 0.62; bank.position.y = -0.12; g.add(bank);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(6.1, 6.1, 0.3, 48), new THREE.MeshStandardMaterial({ color: 0x3aaae8, roughness: 0.2, metalness: 0.1 }));
    water.scale.z = 0.58; water.position.y = -0.08; g.add(water);
    for (const [x, z, r] of [[-5.1, -1.7, 0.5], [4.9, -1.9, 0.6], [-4.6, 1.2, 0.45], [5.2, 1.0, 0.5], [-1.6, -2.6, 0.5], [2.4, -2.5, 0.42]]) g.add(cyl(r, r, 0.04, m(0x3aa84a), x, 0.1, z, 20));
    for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 1.1 + Math.PI * 1.05; g.add(cyl(0.03, 0.05, 1.5, m(0x4a9a3a), Math.cos(a) * 6.5, 0.5, Math.sin(a) * 3.9, 6)); }
    return { pad: 'float', update: (dt, t) => { clouds.userData.drift(dt); water.rotation.y = Math.sin(t * 0.3) * 0.02; } };
  },
  // 2. the farm: red barn, silo, fence, hay, cows
  farm(g) {
    addSky(g, { top: '#4aa8f0', horizon: '#ffeec8' });
    const clouds = addClouds(g, 6, { y: 9, z: -18 });
    ground(g, 0x9ad060, 0x8ac050);
    const red = m(0xd8302a, 0.7), wh = m(0xffffff, 0.6);
    g.add(box(5, 3.2, 3.6, red, -7.5, 1.6, -6));
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 2.9, 1.6, 4, 1), m(0x6a3a2a, 0.8)); roof.rotation.y = Math.PI / 4; roof.scale.set(1.25, 1, 0.9); roof.position.set(-7.5, 4.0, -6); roof.castShadow = true; g.add(roof);
    g.add(box(1.6, 2.2, 0.1, wh, -7.5, 1.1, -4.15)); g.add(box(0.12, 2.2, 0.12, red, -7.5, 1.1, -4.1));
    g.add(cyl(1.0, 1.0, 5, m(0xc8c8d0, 0.5), -3.2, 2.5, -7.5)); g.add(sph(1.0, m(0xb8b8c0, 0.5), -3.2, 5.0, -7.5));
    for (let i = -8; i <= 8; i++) { g.add(box(0.2, 1.2, 0.15, wh, i * 1.1, 0.6, -3.4)); }
    g.add(box(19, 0.14, 0.1, wh, 0, 0.5, -3.4), box(19, 0.14, 0.1, wh, 0, 1.0, -3.4));
    for (const [x, z] of [[8, -4], [10, -6], [6, -7]]) { const b = cyl(0.8, 0.8, 1.0, m(0xe8c050, 0.9), x, 0.5, z, 20); b.rotation.z = Math.PI / 2; g.add(b); }
    const cow = makeThing('cow'); cow.scale.setScalar(1.8); cow.position.set(7.5, -0.2, -2.2); cow.rotation.y = -0.5; g.add(cow);
    const sheep = makeThing('sheep'); sheep.scale.setScalar(1.6); sheep.position.set(-3.5, -0.2, -2.6); sheep.rotation.y = 0.4; g.add(sheep);
    scatter(g, [{ t: 'tree', x: 11, z: -9, s: 5 }, { t: 'tree', x: -12, z: -9, s: 4.6 }, ...Array.from({ length: 16 }, (_, i) => ({ t: 'flower', x: -11 + i * 1.4, z: 6 + (i % 3) * 0.6 }))], -0.2);
    return { pad: 'wood', update: (dt, t) => { clouds.userData.drift(dt); cow.position.y = -0.2 + Math.abs(Math.sin(t * 1.2)) * 0.03; } };
  },
  // 3. the beach and the sea
  beach(g) {
    addSky(g, { top: '#3aa0f0', horizon: '#bfeaff' });
    const clouds = addClouds(g, 6, { y: 8, z: -18 });
    ground(g, 0xf0d8a0, 0xe8c888);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(80, 18), new THREE.MeshStandardMaterial({ color: 0x2aa0e0, roughness: 0.15, metalness: 0.15 }));
    sea.rotation.x = -Math.PI / 2; sea.position.set(0, -0.15, -11); g.add(sea);
    for (const x of [-9, -5, 9, 12]) {
      const t = new THREE.Group();
      const trunk = cyl(0.18, 0.28, 4.2, m(0x8a5a2a), 0, 2.1, 0, 8); trunk.rotation.z = x > 0 ? -0.15 : 0.15; t.add(trunk);
      for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; const leaf = cone(0.35, 2.4, m(0x2aa84a), Math.cos(a) * 1.0, 4.3, Math.sin(a) * 1.0, 6); leaf.rotation.z = Math.cos(a) * 1.2; leaf.rotation.x = -Math.sin(a) * 1.2; t.add(leaf); }
      t.position.set(x, -0.2, -5); g.add(t);
    }
    const um = new THREE.Group(); um.add(cyl(0.05, 0.05, 2.2, m(0xffffff), 0, 1.1, 0, 6)); um.add(cone(1.5, 0.7, m(0xff4a4a), 0, 2.4, 0, 12)); um.position.set(-7, -0.2, 2.2); g.add(um);
    const boat = makeThing('boat'); boat.scale.setScalar(2.2); boat.position.set(4, -0.1, -9); g.add(boat);
    for (let i = 0; i < 10; i++) g.add(sph(0.12, m([0xff9ab8, 0xfff0e0, 0xffb870][i % 3]), -10 + i * 2.2, -0.05, 5.5 + (i % 3) * 0.5));
    return { pad: 'float', update: (dt, t) => { clouds.userData.drift(dt); boat.position.y = -0.1 + Math.sin(t) * 0.12; boat.rotation.z = Math.sin(t * 0.8) * 0.05; } };
  },
  // 4. space: stars, planets, a rocket
  space(g) {
    addSky(g, { top: '#07072a', horizon: '#2a1a5a' });
    ground(g, 0x6a6a86, 0x5a5a76);
    const stars = new THREE.Group();
    for (let i = 0; i < 90; i++) { const s = sph(0.05 + (i % 3) * 0.03, new THREE.MeshBasicMaterial({ color: 0xffffe0, toneMapped: false }), (Math.random() - 0.5) * 60, 3 + Math.random() * 18, -20 - Math.random() * 10); s.userData.ph = Math.random() * 6; stars.add(s); }
    g.add(stars);
    const planet = (r, c, x, y, z, ring) => { const p = new THREE.Group(); p.add(sph(r, m(c, 0.5), 0, 0, 0)); if (ring) { const rg = new THREE.Mesh(new THREE.TorusGeometry(r * 1.6, r * 0.12, 6, 40), m(0xe8d0a0, 0.6)); rg.rotation.x = 1.2; p.add(rg); } p.position.set(x, y, z); g.add(p); return p; };
    const p1 = planet(2.2, 0xe8a05a, -9, 8, -16, true), p2 = planet(1.4, 0x5aa8e8, 8, 11, -18), p3 = planet(0.9, 0xe85a8a, 3, 6, -14);
    const rocket = makeThing('rocket'); rocket.scale.setScalar(3.2); rocket.position.set(9, -0.2, -3.5); g.add(rocket);
    for (const [x, z, r] of [[-8, -3, 1.2], [-5, -5, 0.8], [6, 4.4, 0.6]]) { const c = cyl(r, r * 1.1, 0.25, m(0x555570, 1), x, -0.1, z, 20); g.add(c); }
    return { pad: 'rock', update: (dt, t) => { for (const s of stars.children) s.scale.setScalar(0.7 + Math.sin(t * 2 + s.userData.ph) * 0.4); p1.rotation.y = t * 0.1; p2.position.y = 11 + Math.sin(t * 0.5) * 0.3; p3.position.y = 6 + Math.sin(t * 0.7) * 0.2; rocket.position.y = -0.2 + Math.sin(t * 1.5) * 0.04; } };
  },
  // 5. the rainbow playground
  rainbow(g) {
    addSky(g, { top: '#8ad0ff', horizon: '#ffe0f0' });
    const clouds = addClouds(g, 9, { y: 7, z: -14 });
    ground(g, 0xb8e890, 0xa8d880);
    const cols = [0xe8302a, 0xff8a1a, 0xffd21a, 0x2aa84a, 0x2a8ae8, 0x9a4ad8];
    cols.forEach((c, i) => { const arc = new THREE.Mesh(new THREE.TorusGeometry(7.5 - i * 0.55, 0.28, 10, 48, Math.PI), m(c, 0.5)); arc.position.set(0, -0.2, -8); g.add(arc); });
    for (let i = 0; i < 8; i++) { const s = cone(0.4, 0.8, m([0xffd21a, 0xff7ab8, 0x7ad8ff][i % 3], 0.4), -11 + i * 3.2, 1 + (i % 3) * 0.6, -5.5, 5); s.rotation.z = Math.PI; g.add(s); }
    scatter(g, Array.from({ length: 26 }, (_, i) => ({ t: 'flower', x: -12 + i * 0.95, z: 5.6 + (i % 4) * 0.5 })), -0.2);
    scatter(g, [{ t: 'tree', x: -10, z: -4, s: 4.4 }, { t: 'tree', x: 10, z: -4.5, s: 4.8, c: 0xff8ab8 }], -0.2);
    return { pad: 'cloud', update: (dt) => clouds.userData.drift(dt) };
  },
  // 6. the city street with a school bus
  city(g) {
    addSky(g, { top: '#6ab8f0', horizon: '#e0f0ff' });
    const clouds = addClouds(g, 5, { y: 10, z: -18 });
    ground(g, 0x7a7a86, 0x6a6a76);
    const cols = [0xe86a5a, 0xf0b84a, 0x5ab0e8, 0xa86ad8, 0x6ad8a0, 0xf08ab8];
    for (let i = 0; i < 9; i++) {
      const h = 4 + (i * 7) % 5, x = -13 + i * 3.3;
      g.add(box(2.8, h, 2.4, m(cols[i % 6], 0.7), x, h / 2 - 0.2, -8));
      for (let r = 0; r < Math.floor(h / 1.2); r++) for (let c = -1; c <= 1; c++) g.add(box(0.5, 0.6, 0.05, m(0xcfe8ff, 0.2), x + c * 0.8, 0.7 + r * 1.2, -6.78));
    }
    g.add(box(40, 0.05, 3, m(0x3a3a46, 0.9), 0, -0.17, -3.8));
    for (let i = 0; i < 12; i++) g.add(box(1.0, 0.06, 0.2, m(0xffe05a), -12 + i * 2.2, -0.13, -3.8));
    const bus = makeThing('bus'); bus.scale.setScalar(2.6); bus.position.set(-4, -0.1, -3.8); bus.rotation.y = Math.PI / 2; g.add(bus);
    const car = makeThing('car'); car.scale.setScalar(2.2); car.position.set(7, -0.1, -3.8); car.rotation.y = -Math.PI / 2; g.add(car);
    scatter(g, [{ t: 'tree', x: -11, z: -2, s: 3.4 }, { t: 'tree', x: 11, z: -1.5, s: 3.2 }], -0.2);
    return { pad: 'wood', update: (dt, t) => { clouds.userData.drift(dt); bus.position.x = -4 + Math.sin(t * 0.3) * 6; car.position.x = 7 - Math.sin(t * 0.3 + 1) * 6; } };
  },
  // 7. the snowy mountains and pines
  snow(g) {
    addSky(g, { top: '#8ac0e8', horizon: '#f0f8ff' });
    const clouds = addClouds(g, 5, { y: 11, z: -18 });
    ground(g, 0xf4f8ff, 0xe8f0fa);
    for (const [x, s] of [[-9, 6], [-2, 7.5], [7, 6.5], [13, 5]]) { g.add(cone(s * 0.7, s, m(0x7a8ab0, 0.9), x, s / 2 - 0.2, -12, 6)); g.add(cone(s * 0.3, s * 0.38, m(0xffffff, 0.6), x, s * 0.82 - 0.2, -12, 6)); }
    for (const [x, z, s] of [[-8, -4, 3.6], [-6, -5, 3], [8, -4.5, 3.8], [10, -3.6, 3], [-11, -2, 3.2]]) {
      const t = new THREE.Group(); for (let i = 0; i < 3; i++) t.add(cone(1.1 - i * 0.25, 1.6, m(0x2a8a4a, 0.85), 0, 1.4 + i * 0.9, 0)); t.add(cyl(0.18, 0.2, 1, m(0x6a4a2a), 0, 0.5, 0)); t.scale.setScalar(s / 3.2); t.position.set(x, -0.2, z); g.add(t);
    }
    const snowman = new THREE.Group(); snowman.add(sph(0.7, m(0xffffff, 0.5), 0, 0.7, 0), sph(0.5, m(0xffffff, 0.5), 0, 1.6, 0), sph(0.35, m(0xffffff, 0.5), 0, 2.25, 0), cone(0.07, 0.4, m(0xff7a1a), 0, 2.25, 0.35, 8)); snowman.children[3].rotation.x = Math.PI / 2; snowman.position.set(7, -0.2, 2.6); g.add(snowman);
    const flakes = new THREE.Group();
    for (let i = 0; i < 80; i++) { const f = sph(0.06, new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), (Math.random() - 0.5) * 30, Math.random() * 12, -6 + Math.random() * 12); f.userData.v = 0.5 + Math.random(); flakes.add(f); }
    g.add(flakes);
    return { pad: 'ice', update: (dt, t) => { clouds.userData.drift(dt); for (const f of flakes.children) { f.position.y -= f.userData.v * dt; f.position.x += Math.sin(t + f.userData.v * 7) * dt * 0.3; if (f.position.y < 0) f.position.y = 12; } } };
  },
  // 8. the castle at sunset
  castle(g) {
    addSky(g, { top: '#ff9a6a', horizon: '#ffe8a0' });
    const clouds = addClouds(g, 6, { y: 9, z: -18 });
    ground(g, 0x7ac860, 0x6ab850);
    const stone = m(0xe8dcc8, 0.8), roofM = m(0xd8302a, 0.6);
    g.add(box(7, 4.2, 3, stone, 0, 2.1 - 0.2, -9));
    for (const x of [-4.2, 4.2]) { g.add(cyl(1.2, 1.2, 5.6, stone, x, 2.6, -9, 20)); g.add(cone(1.5, 2.2, roofM, x, 6.5, -9, 20)); }
    g.add(cyl(1.0, 1.0, 6.8, stone, 0, 3.2, -10, 20)); g.add(cone(1.3, 2.4, roofM, 0, 7.8, -10, 20));
    g.add(box(1.6, 2.4, 0.1, m(0x6a3a2a, 0.8), 0, 1.0, -7.45)); g.add(cyl(0.8, 0.8, 0.1, m(0x6a3a2a, 0.8), 0, 2.2, -7.45, 16));
    for (const x of [-4.2, 0, 4.2]) { const f = box(0.05, 0.9, 0.05, m(0x6a4a2a), x, 9.4, -9); g.add(f); g.add(box(0.7, 0.4, 0.04, m(0xff4a7a), x + 0.35, 9.6, -9)); }
    for (let i = 0; i < 6; i++) g.add(box(0.3, 0.9, 0.3, stone, -8 + i * 3.2, 0.3, -5.2));
    scatter(g, [{ t: 'tree', x: -10, z: -5, s: 4.6 }, { t: 'tree', x: 10.5, z: -5, s: 4.4 }, ...Array.from({ length: 18 }, (_, i) => ({ t: 'flower', x: -12 + i * 1.4, z: 6 + (i % 3) * 0.6 }))], -0.2);
    return { pad: 'stone', update: (dt) => clouds.userData.drift(dt) };
  },
};

export const WORLD_IDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle'];
export const WORLD_NAMES = { meadow: 'البركة', farm: 'المزرعة', beach: 'الشاطئ', space: 'الفضاء', rainbow: 'ملعب قوس قزح', city: 'المدينة', snow: 'جبال الثلج', castle: 'القلعة' };

export function buildWorld(id) {
  const group = new THREE.Group();
  const info = BUILD[id](group);
  group.visible = false;
  return { id, group, pad: info.pad, update: info.update };
}
export { makeTree };
