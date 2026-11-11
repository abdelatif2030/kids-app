// Every model of «سيف الساموراي», built from shapes in code: the little samurai (Adam or Nour), cartoon ninjas,
// the big ninja, the star thrower, the giant oni with a spiked club (round and funny, not scary), the courtyard with
// torii gates, cherry trees, stone lanterns and the temple. Lambert materials keep phones fast.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}
export function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  return o;
}
export function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 14) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  o.position.set(x, y, z);
  return o;
}
export function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 14) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  return o;
}
export function cone(r, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m);
  o.position.set(x, y, z);
  return o;
}

/** A katana: the blade glows a little. Points along +z from the hand. */
function katana() {
  const g = new THREE.Group();
  g.add(cyl(0.04, 0.04, 0.32, mat(0x2a1a2a), 0, 0, 0.12, 6).rotateX(Math.PI / 2));
  g.add(cyl(0.09, 0.09, 0.03, mat(0xd8a830), 0, 0, 0.29, 10).rotateX(Math.PI / 2));
  const blade = box(0.05, 0.02, 1.15, mat(0xeaf4ff, 0x9fd0ff, 0.45), 0, 0, 0.88);
  g.add(blade);
  g.add(cone(0.025, 0.12, mat(0xeaf4ff, 0x9fd0ff, 0.45), 0, 0, 1.5, 4).rotateX(Math.PI / 2));
  return g;
}

/** The little samurai. The sword arm swings with `swing` (0..1). */
export function makeSamurai(kind = 'boy') {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = mat(0xf6c9a0);
  const gi = mat(kind === 'girl' ? 0xe8507a : 0xd23a32);
  const dark = mat(0x2a2030);
  const hair = mat(0x1e1622);
  const legs = [];
  for (const x of [-0.14, 0.14]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.48, 0);
    leg.add(cyl(0.12, 0.15, 0.42, dark, 0, -0.2, 0, 8)); // hakama
    leg.add(ball(0.1, mat(0xf2ead8), 0, -0.43, 0.04, 1, 0.6, 1.4, 8));
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.27, 0.34, 0.55, gi, 0, 0.76, 0));
  body.add(box(0.6, 0.09, 0.62, mat(0xf2c84a), 0, 0.56, 0)); // belt
  body.add(box(0.1, 0.5, 0.05, mat(0xf2ead8), -0.06, 0.82, 0.29).rotateZ(0.5)); // collar
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.33, 0.95, 0);
    arm.add(cyl(0.08, 0.1, 0.36, gi, 0, -0.17, 0, 8));
    arm.add(ball(0.08, skin, 0, -0.37, 0, 1, 1, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  const sword = katana();
  sword.position.set(0, -0.37, 0);
  arms[1].add(sword);
  const head = new THREE.Group();
  head.position.y = 1.36;
  head.add(ball(0.33, skin));
  head.add(ball(0.345, hair, 0, 0.07, -0.07, 1, 0.9, 0.95));
  for (const s of [-1, 1]) {
    head.add(ball(0.05, mat(0x1a1010), s * 0.12, 0.02, 0.3, 1, 1.3, 0.6, 8));
    head.add(box(0.12, 0.03, 0.03, mat(0x1a1010), s * 0.12, 0.12, 0.3).rotateZ(-s * 0.25)); // brave eyebrows
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 5, 10, Math.PI), mat(0x8a3a2a));
  smile.position.set(0, -0.1, 0.31);
  smile.rotation.z = Math.PI;
  head.add(smile);
  // headband with long tails
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.04, 6, 24), mat(kind === 'girl' ? 0xffffff : 0xffffff));
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.1;
  head.add(band);
  for (const s of [-1, 1]) {
    const tail = box(0.07, 0.03, 0.4, mat(0xffffff), s * 0.06, 0.06, -0.48);
    tail.rotation.x = 0.4;
    head.add(tail);
  }
  if (kind === 'girl') head.add(ball(0.17, hair, 0, -0.02, -0.38, 1, 1.5, 1)); // ponytail
  else head.add(ball(0.13, hair, 0, 0.4, -0.08, 1, 0.8, 1)); // topknot
  body.add(head);
  return { root, body, legs, arms, head, sword };
}

/** A cartoon ninja: kind ninja / big / thrower. */
export function makeNinja(kind = 'ninja') {
  const big = kind === 'big';
  const s = big ? 1.4 : 1;
  const cloth = mat(big ? 0x5a3a8a : kind === 'thrower' ? 0x2f5a5a : 0x34405a);
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.scale.setScalar(s);
  root.add(body);
  const legs = [];
  for (const x of [-0.13, 0.13]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.42, 0);
    leg.add(cyl(0.09, 0.1, 0.4, cloth, 0, -0.2, 0, 8));
    leg.add(ball(0.1, mat(0x1e2230), 0, -0.4, 0.04, 1, 0.6, 1.4, 8));
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.24, 0.3, 0.5, cloth, 0, 0.68, 0));
  body.add(box(0.52, 0.07, 0.56, mat(0xc23a3a), 0, 0.5, 0));
  const arms = [];
  for (const sd of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sd * 0.29, 0.86, 0);
    arm.add(cyl(0.07, 0.08, 0.34, cloth, 0, -0.16, 0, 8));
    body.add(arm);
    arms.push(arm);
  }
  if (kind === 'thrower') {
    const st = makeShuriken();
    st.scale.setScalar(0.7);
    st.position.set(0, -0.36, 0.05);
    arms[1].add(st);
  } else {
    const blade = box(0.05, 0.02, big ? 0.7 : 0.55, mat(0xcfd8e8), 0, -0.36, big ? 0.32 : 0.25);
    arms[1].add(blade);
  }
  const head = new THREE.Group();
  head.position.y = 1.18;
  head.add(ball(0.3, cloth));
  head.add(box(0.44, 0.13, 0.1, mat(0xf6c9a0), 0, 0.02, 0.25)); // eye slit
  for (const sd of [-1, 1]) head.add(ball(0.045, mat(0x1a1010), sd * 0.1, 0.02, 0.31, 1, 1.2, 0.5, 8));
  const knot = box(0.06, 0.05, 0.3, cloth, 0.08, 0.05, -0.38);
  knot.rotation.x = 0.5;
  head.add(knot);
  body.add(head);
  return { root, body, legs, arms, head };
}

export function makeShuriken() {
  const g = new THREE.Group();
  const m = mat(0xbfc8d8, 0x404858, 0.4);
  for (let i = 0; i < 4; i++) {
    const p = cone(0.08, 0.36, m, 0, 0, 0, 4);
    p.rotation.z = Math.PI / 2;
    p.rotation.y = (i * Math.PI) / 2;
    p.translateY(-0.16);
    const holder = new THREE.Group();
    holder.rotation.y = (i * Math.PI) / 2;
    const blade = cone(0.07, 0.3, m, 0.18, 0, 0, 4);
    blade.rotation.z = -Math.PI / 2;
    holder.add(blade);
    g.add(holder);
  }
  g.add(cyl(0.07, 0.07, 0.04, mat(0x5a6070), 0, 0, 0, 10));
  return g;
}

/** The giant oni: round, red, two horns, big grin, tiger-striped belt and a spiked club. */
export function makeOni() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const red = mat(0xe0483a);
  const dark = mat(0xb02e26);
  const legs = [];
  for (const x of [-0.45, 0.45]) {
    const leg = new THREE.Group();
    leg.position.set(x, 1.0, 0);
    leg.add(cyl(0.3, 0.34, 0.9, red, 0, -0.45, 0, 10));
    leg.add(ball(0.34, dark, 0, -0.92, 0.1, 1, 0.5, 1.3, 10));
    body.add(leg);
    legs.push(leg);
  }
  body.add(ball(1.0, red, 0, 1.75, 0, 1, 1.0, 0.9, 18));
  body.add(ball(0.68, mat(0xf07a5a), 0, 1.65, 0.42, 1, 1.0, 0.55, 14)); // belly
  const belt = cyl(0.98, 1.0, 0.42, mat(0xf2c12e), 0, 1.0, 0, 18);
  body.add(belt);
  for (let i = 0; i < 8; i++) {
    const st = box(0.1, 0.44, 0.08, mat(0x2a1a10), Math.sin((i / 8) * Math.PI * 2) * 0.99, 1.0, Math.cos((i / 8) * Math.PI * 2) * 0.99);
    st.rotation.y = (i / 8) * Math.PI * 2;
    body.add(st);
  }
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 1.0, 2.2, 0);
    arm.add(cyl(0.22, 0.26, 1.0, red, 0, -0.5, 0, 10));
    arm.add(ball(0.28, red, 0, -1.02, 0, 1, 1, 1, 10));
    body.add(arm);
    arms.push(arm);
  }
  // the club (kanabo) with studs
  const club = new THREE.Group();
  club.add(cyl(0.08, 0.08, 0.5, mat(0x5a3a1a), 0, 0, 0.1, 8).rotateX(Math.PI / 2));
  const head = cyl(0.3, 0.2, 1.7, mat(0x6b4a2a), 0, 0, 1.15, 10);
  head.rotation.x = Math.PI / 2;
  club.add(head);
  for (let i = 0; i < 18; i++) {
    const a = (i % 6) * (Math.PI / 3);
    const z = 0.6 + Math.floor(i / 6) * 0.5;
    const r = 0.28 - Math.floor(i / 6) * 0.03;
    const sp = cone(0.06, 0.18, mat(0xd8d0c0), Math.cos(a) * r, Math.sin(a) * r, z, 5);
    sp.lookAt(Math.cos(a) * 2, Math.sin(a) * 2, z);
    sp.rotateX(Math.PI / 2);
    club.add(sp);
  }
  club.position.set(0, -1.05, 0);
  club.rotation.x = 0.4;
  arms[1].add(club);
  const headG = new THREE.Group();
  headG.position.y = 3.0;
  headG.add(ball(0.72, red, 0, 0, 0, 1, 0.92, 0.95, 16));
  headG.add(ball(0.74, mat(0x2a1a2a), 0, 0.22, -0.1, 1, 0.65, 0.95, 14)); // wild hair
  for (const s of [-1, 1]) {
    const horn = cone(0.16, 0.6, mat(0xfff3d6), s * 0.38, 0.72, 0.05, 10);
    horn.rotation.z = -s * 0.35;
    headG.add(horn);
    headG.add(ball(0.17, mat(0xffffff), s * 0.25, 0.12, 0.6, 1, 1.1, 0.5, 10));
    headG.add(ball(0.08, mat(0x1a1010), s * 0.24, 0.1, 0.68, 1, 1.1, 0.5, 8));
    headG.add(box(0.3, 0.07, 0.06, mat(0x2a1a2a), s * 0.26, 0.36, 0.62).rotateZ(s * 0.35));
  }
  headG.add(ball(0.16, mat(0xc0362c), 0, -0.05, 0.72, 1, 0.8, 0.6, 10)); // nose
  headG.add(box(0.6, 0.18, 0.1, mat(0x5a1a1a), 0, -0.34, 0.6)); // grin
  for (const s of [-1, 1]) headG.add(cone(0.06, 0.16, mat(0xffffff), s * 0.2, -0.26, 0.66, 5));
  body.add(headG);
  return { root, body, legs, arms, head: headG, club };
}

export function makeTorii(w = 3.6, hgt = 3.2) {
  const g = new THREE.Group();
  const red = mat(0xe0402a);
  for (const s of [-1, 1]) g.add(cyl(0.15, 0.18, hgt, red, (s * w) / 2, hgt / 2, 0, 10));
  g.add(box(w + 1.2, 0.22, 0.32, mat(0x2a1a1a), 0, hgt + 0.1, 0));
  g.add(box(w + 0.6, 0.16, 0.24, red, 0, hgt - 0.5, 0));
  g.add(box(0.2, 0.5, 0.2, red, 0, hgt - 0.2, 0));
  return g;
}

export function makeLantern(glow) {
  const g = new THREE.Group();
  const stone = mat(0xb8b0a0);
  g.add(cyl(0.35, 0.45, 0.2, stone, 0, 0.1, 0, 8));
  g.add(cyl(0.12, 0.14, 0.7, stone, 0, 0.55, 0, 8));
  g.add(box(0.55, 0.45, 0.55, stone, 0, 1.12, 0));
  g.add(box(0.36, 0.28, 0.6, mat(0xffd27a, 0xffb040, glow ? 1 : 0.3), 0, 1.12, 0));
  g.add(cone(0.55, 0.38, stone, 0, 1.52, 0, 4).rotateY(Math.PI / 4));
  return g;
}

export function makeCherryTree(s = 1, color = 0xffaacb) {
  const g = new THREE.Group();
  const bark = mat(0x5a3a3a);
  const trunk = cyl(0.18 * s, 0.28 * s, 1.8 * s, bark, 0, 0.9 * s, 0, 8);
  trunk.rotation.z = 0.1;
  g.add(trunk);
  const bl = mat(color);
  const bl2 = mat(0xffc7dc);
  for (const [x, y, z, r] of [[0, 2.3, 0, 1.0], [0.8, 2.1, 0.2, 0.7], [-0.8, 2.15, -0.1, 0.75], [0.2, 2.8, -0.3, 0.7], [-0.3, 2.0, 0.6, 0.6]]) {
    g.add(ball(r * s, (x > 0 ? bl : bl2), x * s, y * s, z * s, 1, 0.85, 1, 10));
  }
  return g;
}

export function makeTemple() {
  const g = new THREE.Group();
  g.add(box(10, 0.6, 4.4, mat(0xa89a88), 0, 0.3, 0));
  g.add(box(9, 2.6, 3.4, mat(0xf3e6d0), 0, 1.9, 0));
  for (let i = -4; i <= 4; i += 1) g.add(box(0.18, 2.6, 0.18, mat(0xc23a2a), i, 1.9, 1.75));
  for (let i = -3; i <= 3; i += 2) g.add(box(1.4, 1.6, 0.05, mat(0xfff8ea), i + 0.5, 1.9, 1.72));
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 7.4, 1.8, 4, 1), mat(0x3a3048));
  roof.rotation.y = Math.PI / 4;
  roof.scale.set(1, 1, 0.55);
  roof.position.y = 4.1;
  g.add(roof);
  const roof2 = roof.clone();
  roof2.scale.set(0.55, 0.8, 0.32);
  roof2.position.y = 5.3;
  g.add(roof2);
  for (let i = 0; i < 3; i++) g.add(box(10 - i * 0.6, 0.25, 0.8, mat(0xb8ac9a), 0, 0.12 + i * 0.25, 2.6 + (2 - i) * 0.6));
  return g;
}

/** The round courtyard floor with stone tiles and a big cherry blossom in the middle (painted on a canvas). */
export function courtyardTexture(night) {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = night ? '#8a8496' : '#d8c8b0';
  g.fillRect(0, 0, 1024, 1024);
  // tiles
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const off = y % 2 ? 32 : 0;
      const sh = ((x * 7 + y * 13) % 5) * 5;
      g.fillStyle = night ? `rgb(${130 + sh},${124 + sh},${142 + sh})` : `rgb(${206 + sh},${188 + sh},${160 + sh})`;
      g.fillRect(x * 64 + off + 2, y * 64 + 2, 60, 60);
    }
  }
  // the ring and the blossom
  g.strokeStyle = night ? '#5a4a6a' : '#8a6a4a';
  g.lineWidth = 26;
  g.beginPath();
  g.arc(512, 512, 250, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = night ? '#e8a8c8' : '#f6b8cc';
  g.strokeStyle = night ? '#a04870' : '#c0466e';
  g.lineWidth = 10;
  for (let i = 0; i < 5; i++) {
    g.save();
    g.translate(512, 512);
    g.rotate((i * Math.PI * 2) / 5);
    g.beginPath();
    g.moveTo(0, 0);
    g.bezierCurveTo(-120, -60, -90, -200, -18, -210);
    g.lineTo(0, -180);
    g.lineTo(18, -210);
    g.bezierCurveTo(90, -200, 120, -60, 0, 0);
    g.fill();
    g.stroke();
    g.restore();
  }
  g.fillStyle = '#ffd25a';
  g.beginPath();
  g.arc(512, 512, 40, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function petalGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.08);
  s.quadraticCurveTo(0.09, 0, 0.02, 0.09);
  s.lineTo(0, 0.06);
  s.lineTo(-0.02, 0.09);
  s.quadraticCurveTo(-0.09, 0, 0, -0.08);
  return new THREE.ShapeGeometry(s, 3);
}
