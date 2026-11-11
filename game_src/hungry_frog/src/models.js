// Every model of «لعبة الضفدع الجائع», built from shapes in code: the funny green frog (big eyes on top, a wide smile,
// a throat that puffs, spots after it evolves and a little crown at the last stage), bully frogs (brown, a pink collar;
// Big Bo with a crown), Sly the snake, the Grand Heron, flies, mosquitoes, beetles, dragonflies, fish, lily pads with
// their notch, pink lotus flowers, cattails and reeds, and the misty water. Round and cartoon, nothing scary.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, emissive = 0, ei = 1) {
  const k = `${color}|${emissive}|${ei}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return cache.get(k);
}
export function shiny(color) {
  const k = `p${color}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshPhongMaterial({ color, shininess: 60, specular: 0x667766 }));
  return cache.get(k);
}
export const basic = (color, opts = {}) => new THREE.MeshBasicMaterial({ color, ...opts });
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
export function ball(r, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 16) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), m);
  o.position.set(x, y, z);
  o.scale.set(sx, sy, sz);
  return o;
}

function eyes(g, x, y, z, r, lids) {
  const out = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Group();
    e.position.set(s * x, y, z);
    e.add(ball(r, mat(lids), 0, 0, 0, 1, 1, 1, 14));
    e.add(ball(r * 0.86, mat(0xffffff), 0, r * 0.15, r * 0.25, 1, 1, 1, 14));
    e.add(ball(r * 0.45, mat(0x111111), s * r * 0.05, r * 0.2, r * 0.75, 1, 1, 0.6, 10));
    e.add(ball(r * 0.15, mat(0xffffff), s * r * 0.05 + r * 0.15, r * 0.4, r * 0.95, 1, 1, 0.5, 6));
    const lid = ball(r * 1.02, mat(lids), 0, 0, 0, 1, 1, 1, 14);
    lid.scale.y = 0.05;
    lid.position.y = r * 0.95;
    e.add(lid);
    g.add(e);
    out.push({ e, lid });
  }
  return out;
}

/** The player's frog, about 1 unit wide at scale 1, facing +z. */
export function makeFrog(colors = { body: 0x6ad83a, belly: 0xd8f8a8, dark: 0x3a9a2a }) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = shiny(colors.body);
  body.add(ball(0.5, skin, 0, 0.42, 0, 1.05, 0.72, 1.0, 20));
  body.add(ball(0.42, mat(colors.belly), 0, 0.32, 0.12, 1, 0.6, 0.9));
  const throat = ball(0.26, mat(colors.belly), 0, 0.3, 0.38, 1.2, 0.8, 0.9);
  body.add(throat);
  // head bump and the wide smile
  body.add(ball(0.42, skin, 0, 0.6, 0.2, 1.1, 0.7, 0.9, 18));
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.025, 6, 20, Math.PI), mat(colors.dark));
  mouth.rotation.set(0.2, 0, Math.PI);
  mouth.position.set(0, 0.52, 0.5);
  body.add(mouth);
  for (const s of [-1, 1]) body.add(ball(0.06, mat(0xff9ab0), s * 0.32, 0.55, 0.47, 1, 0.6, 0.4)); // rosy cheeks
  const eyeL = eyes(body, 0.25, 0.86, 0.22, 0.17, colors.body);
  // legs: big back legs folded, small front legs
  const legs = [];
  for (const s of [-1, 1]) {
    const back = new THREE.Group();
    back.position.set(s * 0.42, 0.18, -0.2);
    back.add(ball(0.22, skin, 0, 0.05, 0, 1, 0.8, 1.6));
    back.add(ball(0.14, skin, s * 0.08, -0.05, 0.3, 1.4, 0.5, 1.2));
    body.add(back);
    legs.push(back);
    const front = new THREE.Group();
    front.position.set(s * 0.3, 0.12, 0.35);
    front.add(ball(0.09, skin, 0, 0.05, 0, 1, 1.5, 1));
    front.add(ball(0.1, skin, s * 0.03, -0.05, 0.06, 1.4, 0.4, 1.3));
    body.add(front);
    legs.push(front);
  }
  // spots (shown after evolving) and a crown (last stage)
  const spots = new THREE.Group();
  for (const [x, z, r] of [[0.2, -0.15, 0.09], [-0.25, -0.05, 0.08], [0.05, -0.3, 0.07], [-0.1, 0.05, 0.06]]) spots.add(ball(r, mat(colors.dark), x, 0.75, z, 1, 0.3, 1));
  spots.visible = false;
  body.add(spots);
  const crown = new THREE.Group();
  crown.add(cyl(0.16, 0.18, 0.1, mat(0xffc21a, 0x7a5000, 0.4), 0, 0, 0, 10));
  for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; const c = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 5), mat(0xffc21a, 0x7a5000, 0.4)); c.position.set(Math.sin(a) * 0.15, 0.1, Math.cos(a) * 0.15); crown.add(c); }
  crown.position.set(0, 0.92, 0.0);
  crown.visible = false;
  body.add(crown);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 20), basic(0x1a2a3a, { transparent: true, opacity: 0.25, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);
  return { root, body, throat, eyes: eyeL, legs, spots, crown, shadow, mouthY: 0.5 };
}

/** A bully frog: brown-green, grumpy brows and a pink collar; Big Bo gets a crown. */
export function makeBully(big = false) {
  const f = makeFrog({ body: big ? 0x8a8a4a : 0x9aa05a, belly: 0xe8e0a8, dark: 0x5a5a2a });
  f.spots.visible = true;
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 24), mat(0xff5a9a));
  collar.rotation.x = Math.PI / 2 - 0.3;
  collar.position.set(0, 0.36, 0.12);
  f.body.add(collar);
  for (const s of [-1, 1]) { const br = box(0.22, 0.05, 0.05, mat(0x3a3a1a), s * 0.25, 1.06, 0.3); br.rotation.z = s * 0.4; f.body.add(br); }
  if (big) f.crown.visible = true;
  return f;
}

export function makeSnake(color = 0x8ac83a) {
  const root = new THREE.Group();
  const segs = [];
  for (let i = 0; i < 9; i++) {
    const r = 0.22 - i * 0.015;
    const s = ball(r, shiny(i % 2 ? color : 0xd8c83a), 0, r * 0.8, -i * 0.3, 1, 0.8, 1.3, 12);
    root.add(s);
    segs.push(s);
  }
  const head = new THREE.Group();
  head.add(ball(0.28, shiny(color), 0, 0.22, 0.18, 1.1, 0.7, 1.3));
  for (const s of [-1, 1]) { head.add(ball(0.08, mat(0xffffff), s * 0.13, 0.36, 0.3)); head.add(ball(0.04, mat(0x111111), s * 0.14, 0.38, 0.36)); }
  const tongue = box(0.03, 0.01, 0.25, mat(0xe8325a), 0, 0.18, 0.55);
  head.add(tongue);
  root.add(head);
  return { root, segs, head, tongue };
}

export function makeHeron() {
  const root = new THREE.Group();
  const grey = mat(0xb8c0c8);
  const white = mat(0xf2f2f2);
  root.add(ball(0.6, grey, 0, 2.4, 0, 1, 0.8, 1.5));
  for (const s of [-1, 1]) { const w = ball(0.5, mat(0x8a96a2), s * 0.5, 2.5, -0.1, 0.3, 0.6, 1.4); root.add(w); }
  for (const s of [-1, 1]) root.add(cyl(0.04, 0.04, 2, mat(0xe8a83a), s * 0.2, 1, 0, 6));
  const neck = new THREE.Group();
  neck.position.set(0, 2.7, 0.6);
  neck.add(cyl(0.12, 0.15, 1.2, white, 0, 0.5, 0, 8));
  const head = new THREE.Group();
  head.position.y = 1.15;
  head.add(ball(0.25, white, 0, 0, 0));
  head.add(box(0.05, 0.05, 0.5, mat(0x2a2a2a), 0, 0.15, -0.3)); // the crest
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.8, 8), mat(0xffb21a));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, -0.02, 0.5);
  head.add(beak);
  for (const s of [-1, 1]) { head.add(ball(0.06, mat(0xffffff), s * 0.14, 0.06, 0.12)); head.add(ball(0.035, mat(0x111111), s * 0.16, 0.06, 0.16)); }
  neck.add(head);
  root.add(neck);
  return { root, neck, head };
}

export function makeFly(kind) {
  const g = new THREE.Group();
  const wings = [];
  if (kind === 'dragonfly') {
    const tail = cyl(0.05, 0.03, 1.0, shiny(0x3ab8e8), 0, 0, -0.2, 8);
    tail.rotation.x = Math.PI / 2;
    g.add(tail);
    g.add(ball(0.12, shiny(0x2a8ad8), 0, 0, 0.3));
    for (const s of [-1, 1]) for (const z of [0.18, 0]) { const w = ball(0.3, basic(0xd8f4ff, { transparent: true, opacity: 0.65 }), s * 0.32, 0.03, z, 1.2, 0.05, 0.35); g.add(w); wings.push(w); }
  } else if (kind === 'beetle') {
    g.add(ball(0.25, shiny(0xc8282a), 0, 0.15, 0, 1, 0.6, 1.2));
    g.add(box(0.02, 0.02, 0.5, mat(0x111111), 0, 0.31, 0));
    for (const [x, z] of [[0.1, 0.1], [-0.12, -0.05], [0.08, -0.15]]) g.add(ball(0.05, mat(0x111111), x, 0.29, z, 1, 0.3, 1));
    g.add(ball(0.12, mat(0x111111), 0, 0.12, 0.28));
  } else if (kind === 'fish') {
    g.add(ball(0.35, shiny(0xff8a3a), 0, 0, 0, 0.6, 0.8, 1.2));
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.35, 4), shiny(0xffb05a));
    tail.rotation.x = -Math.PI / 2;
    tail.position.z = -0.5;
    g.add(tail);
    wings.push(tail);
    for (const s of [-1, 1]) { g.add(ball(0.06, mat(0xffffff), s * 0.16, 0.08, 0.25)); g.add(ball(0.03, mat(0x111111), s * 0.18, 0.08, 0.28)); }
  } else {
    // fly (dark) or mosquito (thin, grey)
    const mosq = kind === 'mosquito';
    g.add(ball(mosq ? 0.08 : 0.13, mat(mosq ? 0x6a6a7a : 0x2a2a34), 0, 0, 0, 1, 1, mosq ? 2 : 1.3));
    g.add(ball(mosq ? 0.06 : 0.09, mat(0x8a2a2a), 0, 0.02, mosq ? 0.16 : 0.14));
    for (const s of [-1, 1]) { const w = ball(0.14, basic(0xe8f4ff, { transparent: true, opacity: 0.7 }), s * 0.13, 0.08, -0.02, 1.1, 0.08, 0.6); g.add(w); wings.push(w); }
  }
  return { root: g, wings };
}

/** A label of a number above a critter is drawn in HTML; this is the lily pad (with its notch). */
export function makePad(r, color) {
  const g = new THREE.Group();
  const geo = new THREE.CircleGeometry(r, 28, 0.35, Math.PI * 2 - 0.35);
  geo.rotateX(-Math.PI / 2);
  g.add(new THREE.Mesh(geo, mat(color)));
  // veins
  for (let i = 0; i < 7; i++) {
    const a = 0.6 + i * 0.8;
    const v = box(0.03, 0.005, r * 0.85, mat(new THREE.Color(color).multiplyScalar(1.15).getHex()), Math.sin(a) * r * 0.42, 0.01, Math.cos(a) * r * 0.42);
    v.rotation.y = a;
    g.add(v);
  }
  const rim = new THREE.Mesh(new THREE.RingGeometry(r * 0.94, r, 28, 1, 0.35, Math.PI * 2 - 0.35), mat(new THREE.Color(color).multiplyScalar(0.8).getHex()));
  rim.rotation.x = -Math.PI / 2;
  rim.position.y = 0.005;
  g.add(rim);
  return g;
}

export function makeLotus() {
  const g = new THREE.Group();
  const pink = mat(0xffa8c8);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const p = ball(0.16, i % 2 ? pink : mat(0xff8ab8), Math.sin(a) * 0.12, 0.16, Math.cos(a) * 0.12, 0.5, 1.2, 0.9);
    p.rotation.set(Math.cos(a) * 0.5, 0, -Math.sin(a) * 0.5);
    g.add(p);
  }
  g.add(ball(0.08, mat(0xffe23a), 0, 0.22, 0));
  return g;
}

export function makeCattail(h = 2.2) {
  const g = new THREE.Group();
  g.add(cyl(0.025, 0.035, h, mat(0x5a8a3a), 0, h / 2, 0, 6));
  g.add(cyl(0.08, 0.08, 0.45, mat(0x7a4a22), 0, h - 0.3, 0, 8));
  for (let i = 0; i < 2; i++) { const l = box(0.06, h * 0.8, 0.01, mat(0x6a9a3a), (i ? 0.08 : -0.06), h * 0.4, 0); l.rotation.z = i ? -0.15 : 0.12; g.add(l); }
  return g;
}

export function waterTexture(c1, c2) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = c1;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 70; i++) {
    g.strokeStyle = c2;
    g.globalAlpha = 0.25;
    g.lineWidth = 2;
    g.beginPath();
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    g.ellipse(x, y, 10 + Math.random() * 30, 3 + Math.random() * 6, 0, 0, Math.PI * 2);
    g.stroke();
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
