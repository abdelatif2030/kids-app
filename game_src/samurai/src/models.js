// Every model of «حارس المعبد» — Guardian of the Temple, built from shapes in code: the young temple guardian
// (Adam or Nour) with a khopesh, shadow-raider tomb robbers wrapped in dark linen, the big raider, the scarab
// thrower, and the giant stone golem — a temple guardian statue that wakes up (stone, round and funny, not
// scary) — plus the temple arena with pylon gates, palm trees, stone braziers and the temple itself.
// Lambert materials keep phones fast. All sizes, hitbox-relevant proportions and proportions match the
// original models exactly; only colours, shapes' identity and names changed in the Batch E reskin.
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

/** A khopesh: the curved Egyptian sword. The blade glows a little. Points along +z from the hand. */
function khopesh() {
  const g = new THREE.Group();
  g.add(cyl(0.04, 0.04, 0.32, mat(0x5a3a1a), 0, 0, 0.12, 6).rotateX(Math.PI / 2)); // wooden grip
  g.add(cyl(0.09, 0.09, 0.03, mat(0xd8a830), 0, 0, 0.29, 10).rotateX(Math.PI / 2)); // gold guard
  // the sickle blade: a flat khopesh silhouette, extruded thin — straight shank, then the famous forward curve
  const s = new THREE.Shape();
  s.moveTo(-0.035, 0);
  s.lineTo(0.035, 0);
  s.lineTo(0.045, 0.34);
  s.quadraticCurveTo(0.3, 0.52, 0.36, 0.82);
  s.lineTo(0.13, 0.94);
  s.quadraticCurveTo(0.05, 0.58, -0.03, 0.34);
  s.closePath();
  const blade = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: 0.026, bevelEnabled: false }), mat(0xf4e2b0, 0xffc84a, 0.4));
  blade.rotation.x = Math.PI / 2; // shape +y becomes +z (forward), thickness becomes vertical
  blade.position.set(0, 0.013, 0.3);
  blade.scale.setScalar(1.25);
  g.add(blade);
  return g;
}

/** The young temple guardian. The sword arm swings with `swing` (0..1). */
export function makeGuardian(kind = 'boy') {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = mat(0xf6c9a0);
  const linen = mat(kind === 'girl' ? 0x1f8a8a : 0xf2ead8); // girl: teal tunic; boy: white linen
  const accent = mat(kind === 'girl' ? 0xf2ead8 : 0x1f8a8a);
  const dark = mat(0x14586a); // deep teal trousers
  const legs = [];
  for (const x of [-0.14, 0.14]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.48, 0);
    leg.add(cyl(0.12, 0.15, 0.42, dark, 0, -0.2, 0, 8)); // linen trousers
    leg.add(ball(0.1, mat(0xf2ead8), 0, -0.43, 0.04, 1, 0.6, 1.4, 8)); // sandals
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.27, 0.34, 0.55, linen, 0, 0.76, 0));
  body.add(box(0.6, 0.09, 0.62, mat(0xf2c84a), 0, 0.56, 0)); // gold belt
  body.add(box(0.1, 0.5, 0.05, accent, -0.06, 0.82, 0.29).rotateZ(0.5)); // sash / collar
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.33, 0.95, 0);
    arm.add(cyl(0.08, 0.1, 0.36, linen, 0, -0.17, 0, 8));
    arm.add(ball(0.08, skin, 0, -0.37, 0, 1, 1, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  const sword = khopesh();
  sword.position.set(0, -0.37, 0);
  arms[1].add(sword);
  const head = new THREE.Group();
  head.position.y = 1.36;
  head.add(ball(0.33, skin));
  for (const s of [-1, 1]) {
    head.add(ball(0.05, mat(0x1a1010), s * 0.12, 0.02, 0.3, 1, 1.3, 0.6, 8));
    head.add(box(0.12, 0.03, 0.03, mat(0x1a1010), s * 0.12, 0.12, 0.3).rotateZ(-s * 0.25)); // brave eyebrows
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 5, 10, Math.PI), mat(0x8a3a2a));
  smile.position.set(0, -0.1, 0.31);
  smile.rotation.z = Math.PI;
  head.add(smile);
  // nemes-style headcloth: striped gold/teal cloth over the top, with side and back flaps — the face stays bare
  const clothMain = mat(kind === 'girl' ? 0x1f8a8a : 0xd8a830);
  const clothBand = mat(kind === 'girl' ? 0xd8a830 : 0x1f8a8a);
  head.add(ball(0.345, clothMain, 0, 0.09, -0.05, 1, 0.88, 0.98));
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.335, 0.035, 6, 24), clothBand);
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.12;
  head.add(band);
  for (const s of [-1, 1]) head.add(box(0.09, 0.34, 0.3, clothMain, s * 0.31, -0.08, -0.02)); // side flaps
  head.add(box(0.52, 0.38, 0.09, clothMain, 0, -0.06, -0.31)); // back flap
  head.add(cyl(0.05, 0.05, 0.03, mat(0xf2c84a, 0xffc84a, 0.5), 0, 0.16, 0.32, 10).rotateX(Math.PI / 2)); // little sun disc
  body.add(head);
  return { root, body, legs, arms, head, sword };
}

/** A shadow raider (tomb robber): kind ninja / big / thrower. Dark linen wraps, no hood — a wrapped headcloth. */
export function makeRaider(kind = 'ninja') {
  const big = kind === 'big';
  const s = big ? 1.4 : 1;
  const cloth = mat(big ? 0x37302a : kind === 'thrower' ? 0x5f4630 : 0x4a3b2c); // dark sandstone / linen browns
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.scale.setScalar(s);
  root.add(body);
  const legs = [];
  for (const x of [-0.13, 0.13]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.42, 0);
    leg.add(cyl(0.09, 0.1, 0.4, cloth, 0, -0.2, 0, 8));
    leg.add(ball(0.1, mat(0x2a2118), 0, -0.4, 0.04, 1, 0.6, 1.4, 8));
    body.add(leg);
    legs.push(leg);
  }
  body.add(cyl(0.24, 0.3, 0.5, cloth, 0, 0.68, 0));
  body.add(box(0.52, 0.07, 0.56, mat(0x7a2a20), 0, 0.5, 0)); // worn red sash
  const arms = [];
  for (const sd of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sd * 0.29, 0.86, 0);
    arm.add(cyl(0.07, 0.08, 0.34, cloth, 0, -0.16, 0, 8));
    body.add(arm);
    arms.push(arm);
  }
  if (kind === 'thrower') {
    const st = makeScarab();
    st.scale.setScalar(0.7);
    st.position.set(0, -0.36, 0.05);
    arms[1].add(st);
  } else {
    const blade = box(0.05, 0.02, big ? 0.7 : 0.55, mat(0xd8a860), 0, -0.36, big ? 0.32 : 0.25); // bronze dagger
    arms[1].add(blade);
  }
  const head = new THREE.Group();
  head.position.y = 1.18;
  const skin = mat(0xe8b088);
  head.add(ball(0.3, skin));
  head.add(ball(0.31, cloth, 0, 0.1, -0.04, 1, 0.82, 0.95)); // wrapped headcloth cap
  head.add(box(0.5, 0.09, 0.52, cloth, 0, 0.14, 0)); // wrap band
  head.add(box(0.34, 0.14, 0.06, cloth, 0, -0.13, 0.26)); // lower-face wrap (shadowy, not scary)
  for (const sd of [-1, 1]) head.add(ball(0.045, mat(0x1a1010), sd * 0.1, 0.02, 0.29, 1, 1.2, 0.5, 8));
  const tail = box(0.06, 0.05, 0.3, cloth, 0.08, 0.05, -0.38);
  tail.rotation.x = 0.5;
  head.add(tail);
  body.add(head);
  return { root, body, legs, arms, head };
}

/** A spinning scarab: gold body, teal wing shells — the throwers fling these, and they can be cut out of the air. */
export function makeScarab() {
  const g = new THREE.Group();
  g.add(ball(0.16, mat(0xd8a830, 0xffc84a, 0.35), 0, 0, 0, 1, 0.38, 1.35, 12)); // gold body, flat oval
  for (const s of [-1, 1]) {
    const wing = ball(0.13, mat(0x1f8a8a), s * 0.09, 0.01, -0.03, 0.75, 0.3, 1.15, 10); // teal wing shells
    wing.rotation.y = s * 0.25;
    g.add(wing);
    for (let i = 0; i < 3; i++) { // little legs
      const leg = box(0.16, 0.03, 0.04, mat(0x8a6a20), s * 0.2, -0.02, -0.1 + i * 0.1);
      leg.rotation.y = s * 0.5;
      g.add(leg);
    }
  }
  g.add(ball(0.07, mat(0x3a2c14), 0, 0, 0.22, 1, 0.7, 1, 8)); // head
  return g;
}

/** The giant stone golem: a temple guardian statue that woke up. Round stone body, gold belt, carved headband
 *  with a sun disc, glowing amber eyes, a pharaonic false beard and a big stone pillar club with gold knobs. */
export function makeGolem() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const stone = mat(0x8a8378);
  const dark = mat(0x665f55);
  const legs = [];
  for (const x of [-0.45, 0.45]) {
    const leg = new THREE.Group();
    leg.position.set(x, 1.0, 0);
    leg.add(cyl(0.3, 0.34, 0.9, stone, 0, -0.45, 0, 10));
    leg.add(ball(0.34, dark, 0, -0.92, 0.1, 1, 0.5, 1.3, 10));
    body.add(leg);
    legs.push(leg);
  }
  body.add(ball(1.0, stone, 0, 1.75, 0, 1, 1.0, 0.9, 18));
  body.add(ball(0.68, mat(0xa89a80), 0, 1.65, 0.42, 1, 1.0, 0.55, 14)); // sandstone belly plate
  const belt = cyl(0.98, 1.0, 0.42, mat(0xd8a830), 0, 1.0, 0, 18); // gold belt
  body.add(belt);
  for (let i = 0; i < 8; i++) { // dark glyph stripes on the belt
    const st = box(0.1, 0.44, 0.08, mat(0x3a342c), Math.sin((i / 8) * Math.PI * 2) * 0.99, 1.0, Math.cos((i / 8) * Math.PI * 2) * 0.99);
    st.rotation.y = (i / 8) * Math.PI * 2;
    body.add(st);
  }
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 1.0, 2.2, 0);
    arm.add(cyl(0.22, 0.26, 1.0, stone, 0, -0.5, 0, 10));
    arm.add(ball(0.28, stone, 0, -1.02, 0, 1, 1, 1, 10));
    body.add(arm);
    arms.push(arm);
  }
  // the stone pillar club with gold knobs
  const club = new THREE.Group();
  club.add(cyl(0.08, 0.08, 0.5, mat(0x5a3a1a), 0, 0, 0.1, 8).rotateX(Math.PI / 2));
  const head = cyl(0.3, 0.2, 1.7, mat(0x7a7268), 0, 0, 1.15, 10);
  head.rotation.x = Math.PI / 2;
  club.add(head);
  for (let i = 0; i < 18; i++) {
    const a = (i % 6) * (Math.PI / 3);
    const z = 0.6 + Math.floor(i / 6) * 0.5;
    const r = 0.28 - Math.floor(i / 6) * 0.03;
    const sp = ball(0.07, mat(0xd8a830), Math.cos(a) * r, Math.sin(a) * r, z, 1, 1, 1, 6); // gold knobs, not spikes
    club.add(sp);
  }
  club.position.set(0, -1.05, 0);
  club.rotation.x = 0.4;
  arms[1].add(club);
  const headG = new THREE.Group();
  headG.position.y = 3.0;
  headG.add(ball(0.72, stone, 0, 0, 0, 1, 0.92, 0.95, 16));
  headG.add(ball(0.74, dark, 0, 0.22, -0.1, 1, 0.65, 0.95, 14)); // carved stone cap
  // gold headband with a sun disc — no horns, nothing demonic: this is a guardian statue
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.07, 6, 24), mat(0xd8a830));
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.3;
  headG.add(band);
  headG.add(cyl(0.14, 0.14, 0.05, mat(0xf2c84a, 0xffb040, 0.8), 0, 0.34, 0.62, 14).rotateX(Math.PI / 2)); // sun disc
  for (const s of [-1, 1]) {
    headG.add(ball(0.17, mat(0xffc860, 0xff9a20, 0.9), s * 0.25, 0.12, 0.6, 1, 1.1, 0.5, 10)); // glowing amber eyes
    headG.add(ball(0.08, mat(0x2a1a08), s * 0.24, 0.1, 0.68, 1, 1.1, 0.5, 8));
    headG.add(box(0.3, 0.07, 0.06, mat(0x3a342c), s * 0.26, 0.36, 0.62).rotateZ(s * 0.35)); // carved brows
  }
  headG.add(ball(0.16, dark, 0, -0.05, 0.72, 1, 0.8, 0.6, 10)); // stone nose
  headG.add(box(0.5, 0.07, 0.08, mat(0x3a342c), 0, -0.34, 0.62)); // carved mouth line
  headG.add(box(0.16, 0.34, 0.08, mat(0x14586a), 0, -0.52, 0.55)); // pharaonic false beard
  body.add(headG);
  return { root, body, legs, arms, head: headG, club };
}

/** A pylon gate: two tapered sandstone pylons with a lintel and a gold sun disc — raiders slip in through these. */
export function makePylonGate(w = 3.6, hgt = 3.2) {
  const g = new THREE.Group();
  const stone = mat(0xc8a878);
  const trim = mat(0x1f8a8a);
  for (const s of [-1, 1]) {
    const p = cyl(0.62, 0.95, hgt, stone, (s * w) / 2, hgt / 2, 0, 4); // 4-sided tapered pylon
    p.rotation.y = Math.PI / 4;
    g.add(p);
    g.add(box(1.15, 0.16, 1.15, trim, (s * w) / 2, hgt - 0.35, 0)); // teal band near the top
  }
  g.add(box(w + 1.2, 0.26, 0.5, stone, 0, hgt + 0.08, 0)); // lintel
  g.add(cyl(0.34, 0.34, 0.1, mat(0xf2c84a, 0xffb040, 0.6), 0, hgt + 0.08, 0.28, 16).rotateX(Math.PI / 2)); // sun disc
  return g;
}

export function makeBrazier(glow) {
  const g = new THREE.Group();
  const stone = mat(0xb8a888);
  g.add(cyl(0.35, 0.45, 0.2, stone, 0, 0.1, 0, 8));
  g.add(cyl(0.12, 0.14, 0.7, stone, 0, 0.55, 0, 8));
  g.add(box(0.55, 0.45, 0.55, stone, 0, 1.12, 0));
  g.add(box(0.36, 0.28, 0.6, mat(0xffd27a, 0xffb040, glow ? 1 : 0.3), 0, 1.12, 0));
  g.add(cone(0.55, 0.38, stone, 0, 1.52, 0, 4).rotateY(Math.PI / 4));
  return g;
}

/** A date palm: leaning trunk, a crown of drooping fronds and clusters of golden dates. */
export function makePalmTree(s = 1) {
  const g = new THREE.Group();
  const bark = mat(0x8a6a48);
  const trunk = cyl(0.16 * s, 0.26 * s, 2.7 * s, bark, 0, 1.35 * s, 0, 8);
  trunk.rotation.z = 0.08;
  g.add(trunk);
  const leaf = mat(0x4a8a3a);
  const leaf2 = mat(0x5da24a);
  for (let i = 0; i < 7; i++) {
    const holder = new THREE.Group();
    holder.position.set(0.2 * s, 2.75 * s, 0);
    holder.rotation.y = (i / 7) * Math.PI * 2;
    const frond = cone(0.16 * s, 1.9 * s, i % 2 ? leaf : leaf2, 0.75 * s, 0.25 * s, 0, 6);
    frond.rotation.z = -1.15; // lean out and droop
    frond.scale.set(1, 1, 0.35); // flatten into a frond
    holder.add(frond);
    g.add(holder);
  }
  for (const sd of [-1, 1]) { // date clusters
    const cluster = new THREE.Group();
    cluster.position.set(0.2 * s + sd * 0.3 * s, 2.45 * s, 0.15 * s);
    for (let i = 0; i < 4; i++) cluster.add(ball(0.09 * s, mat(0xe8a83a), (i % 2) * 0.1 * s, -Math.floor(i / 2) * 0.12 * s, 0, 1, 1, 1, 6));
    g.add(cluster);
  }
  return g;
}

/** The Pharaonic temple behind the arena: a colonnade of tall columns, side pylons, two obelisks with gold
 *  tips, a flat roof slab and a great gold sun disc. */
export function makeTemple() {
  const g = new THREE.Group();
  const stone = mat(0xc8a878);
  const pale = mat(0xe8d5ae);
  g.add(box(11, 0.6, 4.6, mat(0xa8906a), 0, 0.3, 0)); // platform
  g.add(box(9.6, 2.8, 3.2, pale, 0, 2.0, -0.5)); // back wall
  for (let i = -4; i <= 4; i += 1) { // the colonnade
    g.add(cyl(0.17, 0.21, 2.8, stone, i * 1.05, 2.0, 1.15, 10));
    g.add(box(0.5, 0.22, 0.5, mat(0x1f8a8a), i * 1.05, 3.5, 1.15)); // teal capitals
  }
  g.add(box(10.4, 0.4, 4.0, stone, 0, 3.85, 0)); // flat roof slab
  g.add(cyl(0.55, 0.55, 0.12, mat(0xf2c84a, 0xffb040, 0.55), 0, 4.35, 0.6, 18)); // great sun disc on the roof
  for (const s of [-1, 1]) { // side pylons
    const p = cyl(0.8, 1.25, 3.4, stone, s * 5.6, 1.7, 0.6, 4);
    p.rotation.y = Math.PI / 4;
    g.add(p);
    const ob = cyl(0.02, 0.3, 2.6, pale, s * 4.4, 1.3, 2.2, 4); // obelisk
    ob.rotation.y = Math.PI / 4;
    g.add(ob);
    g.add(cone(0.3, 0.4, mat(0xf2c84a), s * 4.4, 2.8, 2.2, 4).rotateY(Math.PI / 4)); // gold pyramidion
  }
  for (let i = 0; i < 3; i++) g.add(box(10 - i * 0.6, 0.25, 0.8, mat(0xb8a078), 0, 0.12 + i * 0.25, 2.6 + (2 - i) * 0.6)); // steps
  return g;
}

/** The round arena floor with sandstone tiles and a great sun disc in the middle (painted on a canvas). */
export function templeFloorTexture(night) {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = night ? '#6a6058' : '#8a7458';
  g.fillRect(0, 0, 1024, 1024);
  // tiles
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const off = y % 2 ? 32 : 0;
      const sh = ((x * 7 + y * 13) % 5) * 5;
      g.fillStyle = night ? `rgb(${118 + sh},${108 + sh},${96 + sh})` : `rgb(${178 + sh},${152 + sh},${112 + sh})`; // warm sandstone
      g.fillRect(x * 64 + off + 2, y * 64 + 2, 60, 60);
    }
  }
  // the ring and the sun disc
  g.strokeStyle = night ? '#14586a' : '#1f8a8a';
  g.lineWidth = 26;
  g.beginPath();
  g.arc(512, 512, 250, 0, Math.PI * 2);
  g.stroke();
  // rays
  g.fillStyle = night ? '#c89838' : '#e8a83a';
  for (let i = 0; i < 12; i++) {
    g.save();
    g.translate(512, 512);
    g.rotate((i * Math.PI * 2) / 12);
    g.beginPath();
    g.moveTo(-26, -120);
    g.lineTo(26, -120);
    g.lineTo(0, -215);
    g.closePath();
    g.fill();
    g.restore();
  }
  g.fillStyle = '#ffd25a';
  g.strokeStyle = night ? '#8a6a20' : '#b07818';
  g.lineWidth = 10;
  g.beginPath();
  g.arc(512, 512, 118, 0, Math.PI * 2);
  g.fill();
  g.stroke();
  g.fillStyle = '#fff3c8';
  g.beginPath();
  g.arc(512, 512, 62, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** A tiny four-point sparkle — golden sand motes burst in this shape and drift in the air. */
export function moteGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.13);
  s.lineTo(0.035, 0.035);
  s.lineTo(0.13, 0);
  s.lineTo(0.035, -0.035);
  s.lineTo(0, -0.13);
  s.lineTo(-0.035, -0.035);
  s.lineTo(-0.13, 0);
  s.lineTo(-0.035, 0.035);
  s.closePath();
  return new THREE.ShapeGeometry(s, 2);
}
