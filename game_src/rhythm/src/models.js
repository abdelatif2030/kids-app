// Models for «البقاء على الإيقاع», built from shapes in code: twelve soft plush animals (the bear with headphones
// from the owner's card, bunny, fox, cat, raccoon, panda, sheep, chick, frog, mouse, pig, koala), the giant record on
// its turntable with a red label and grooves, candy-striped sweeping bars, the silver tonearm, and a retro diner.
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

/** Big friendly eyes looking forward (+z): white, dark pupil and a shine. */
function eyes(head, y, z, spread, r = 0.11) {
  for (const s of [-1, 1]) {
    head.add(ball(r, mat(0xffffff), s * spread, y, z, 1, 1.15, 0.6, 12));
    head.add(ball(r * 0.62, mat(0x2a1a10), s * spread, y - r * 0.05, z + r * 0.35, 1, 1.15, 0.5, 10));
    head.add(ball(r * 0.22, mat(0xffffff, 0xffffff, 0.6), s * spread + r * 0.2, y + r * 0.3, z + r * 0.62, 1, 1, 0.5, 6));
  }
}

/** The plush dinosaur: round green body, cream belly, spikes along the back, red bandana with a paw print. */
export function makeDino() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const green = mat(0x5cc84a);
  const dark = mat(0x3aa03a);
  const cream = mat(0xf2f0b8);
  const legs = [];
  for (const x of [-0.2, 0.2]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.36, 0);
    leg.add(cyl(0.13, 0.15, 0.3, green, 0, -0.16, 0, 10));
    leg.add(ball(0.16, green, 0, -0.33, 0.06, 1, 0.55, 1.3, 10));
    for (const tx of [-0.07, 0, 0.07]) leg.add(ball(0.035, cream, tx, -0.34, 0.24, 1, 0.8, 1, 6));
    body.add(leg);
    legs.push(leg);
  }
  body.add(ball(0.42, green, 0, 0.72, 0, 1, 1.05, 0.95, 18));
  body.add(ball(0.3, cream, 0, 0.66, 0.2, 1, 1.15, 0.6, 14));
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.38, 0.85, 0.08);
    arm.add(ball(0.1, green, 0, -0.1, 0.05, 1, 1.4, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  // tail with spikes
  const tail = new THREE.Group();
  tail.position.set(0, 0.6, -0.36);
  tail.add(cone(0.22, 0.75, green, 0, 0, -0.3, 12).rotateX(-Math.PI / 2 - 0.35));
  body.add(tail);
  // head: big, round, wide smile
  const head = new THREE.Group();
  head.position.set(0, 1.32, 0.05);
  head.add(ball(0.4, green, 0, 0, 0, 1.05, 0.95, 1, 18));
  head.add(ball(0.3, green, 0, -0.1, 0.26, 1.15, 0.75, 0.9, 14)); // snout
  eyes(head, 0.1, 0.33, 0.17, 0.12);
  for (const s of [-1, 1]) head.add(ball(0.03, dark, s * 0.08, -0.04, 0.53, 1, 1, 0.5, 6)); // nostrils
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.03, 6, 16, Math.PI), mat(0x8a2a2a));
  smile.position.set(0, -0.16, 0.44);
  smile.rotation.z = Math.PI;
  head.add(smile);
  head.add(ball(0.08, mat(0xff8a9a), 0, -0.22, 0.44, 1.2, 0.5, 0.6, 8)); // tongue
  for (const s of [-1, 1]) head.add(ball(0.07, mat(0xff9aa8), s * 0.3, -0.06, 0.32, 1, 0.6, 0.4, 8));
  body.add(head);
  // the spikes along the head and back
  const spike = mat(0x3aa03a);
  for (let i = 0; i < 7; i++) {
    const a = -0.2 + i * 0.32;
    const sp = cone(0.09 - i * 0.004, 0.2, spike, 0, 0, 0, 6);
    sp.position.set(0, 1.32 + Math.cos(a) * 0.42 - (i > 2 ? (i - 2) * 0.22 : 0), Math.sin(-a) * 0.42 - (i > 2 ? 0.1 : 0));
    sp.rotation.x = -a;
    body.add(sp);
  }
  // red bandana with a white paw print
  const red = mat(0xe8342a);
  const band = cyl(0.36, 0.4, 0.12, red, 0, 1.0, 0.02, 16);
  body.add(band);
  const flap = cone(0.24, 0.32, red, 0, 0.86, 0.33, 3);
  flap.rotation.x = Math.PI;
  flap.rotation.y = Math.PI;
  flap.scale.z = 0.35;
  body.add(flap);
  const paw = new THREE.Group();
  paw.add(ball(0.045, mat(0xffffff), 0, 0, 0, 1, 0.8, 0.3, 8));
  for (const [x, y] of [[-0.05, 0.05], [0, 0.07], [0.05, 0.05]]) paw.add(ball(0.018, mat(0xffffff), x, y, 0, 1, 1, 0.3, 6));
  paw.position.set(0, 0.87, 0.42);
  body.add(paw);
  const back = new THREE.Group();
  back.position.set(0, 0.6, -0.4);
  body.add(back);
  return { root, body, legs, arms, head, back, tail };
}

const PLUSH = {
  panda: { fur: 0xf6f6f2, belly: 0xffffff, ear: 0x1e1e24 },
  sheep: { fur: 0xfaf6ee, belly: 0xf2d8c8, ear: 0x3a3030 },
  chick: { fur: 0xffd84a, belly: 0xfff0a8, ear: 0xff9a2a },
  frog: { fur: 0x5ac85a, belly: 0xd8f0a8, ear: 0x3a9a3a },
  mouse: { fur: 0xb8b8c4, belly: 0xf2e8ee, ear: 0xffb6c8 },
  pig: { fur: 0xffb6c8, belly: 0xffd8e2, ear: 0xff8aa8 },
  koala: { fur: 0x9aa0aa, belly: 0xe8e8ee, ear: 0xd8d8e0 },
  raccoon: { fur: 0x8f949c, belly: 0xe8e8e8, ear: 0x5a5e66 },
  bear: { fur: 0xa86a3a, belly: 0xe8c08a, ear: 0x7a4a26 },
  fox: { fur: 0xf07a2a, belly: 0xfff4e6, ear: 0x3a2a20 },
  bunny: { fur: 0xf6f2f0, belly: 0xffdbe6, ear: 0xffb6c8 },
  cat: { fur: 0xd8d8e8, belly: 0xffffff, ear: 0xffb6c8 },
};

/** A plush animal rival, round and soft like a toy. */
export function makeAnimal(kind) {
  const c = PLUSH[kind] ?? PLUSH.bear;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const fur = mat(c.fur);
  const belly = mat(c.belly);
  const legs = [];
  for (const x of [-0.17, 0.17]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.34, 0);
    leg.add(cyl(0.11, 0.13, 0.3, fur, 0, -0.15, 0, 10));
    leg.add(ball(0.14, kind === 'raccoon' ? mat(0x3a3a40) : fur, 0, -0.32, 0.05, 1, 0.55, 1.3, 10));
    body.add(leg);
    legs.push(leg);
  }
  body.add(ball(0.36, fur, 0, 0.68, 0, 1, 1.05, 0.95, 16));
  body.add(ball(0.25, belly, 0, 0.64, 0.18, 1, 1.15, 0.6, 12));
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.34, 0.84, 0.05);
    arm.add(ball(0.09, kind === 'raccoon' ? mat(0x3a3a40) : fur, 0, -0.12, 0.04, 1, 1.5, 1, 8));
    body.add(arm);
    arms.push(arm);
  }
  const head = new THREE.Group();
  head.position.set(0, 1.25, 0.03);
  head.add(ball(0.38, fur, 0, 0, 0, 1.08, 0.95, 1, 16));
  head.add(ball(0.17, belly, 0, -0.1, 0.29, 1.25, 0.85, 0.75, 12)); // muzzle
  head.add(ball(0.06, mat(0x2a1a1a), 0, -0.03, 0.44, 1.2, 0.85, 0.8, 8)); // nose
  if (kind === 'raccoon') {
    // the bandit mask and the striped tail
    head.add(ball(0.24, mat(0x3a3a40), 0, 0.07, 0.22, 1.45, 0.48, 0.6, 12));
  }
  eyes(head, 0.08, 0.31, 0.15, 0.1);
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 5, 12, Math.PI), mat(0x6a2a2a));
  mouth.position.set(0, -0.17, 0.42);
  mouth.rotation.z = Math.PI;
  head.add(mouth);
  for (const s of [-1, 1]) {
    if (kind === 'bunny') {
      const e = ball(0.09, fur, s * 0.13, 0.5, -0.02, 1, 3, 0.6, 10);
      e.rotation.z = -s * 0.15;
      head.add(e);
      head.add(ball(0.05, mat(c.ear), s * 0.13, 0.5, 0.03, 1, 2.6, 0.4, 8));
    } else if (kind === 'fox' || kind === 'cat') {
      const e = cone(0.13, 0.3, fur, s * 0.22, 0.34, 0, 4);
      e.rotation.z = -s * 0.3;
      head.add(e);
      if (kind === 'fox') {
        const tip = cone(0.06, 0.12, mat(c.ear), s * 0.27, 0.46, 0.0, 4);
        tip.rotation.z = -s * 0.3;
        head.add(tip);
      }
    } else {
      head.add(ball(0.12, fur, s * 0.26, 0.29, 0, 1, 1, 0.6, 10));
      head.add(ball(0.07, mat(c.ear), s * 0.26, 0.29, 0.04, 1, 1, 0.4, 8));
    }
    head.add(ball(0.06, mat(0xff9aa8), s * 0.26, -0.08, 0.3, 1, 0.6, 0.4, 8));
  }
  if (kind === 'cat') for (const s of [-1, 1]) for (const k of [-1, 1]) head.add(box(0.2, 0.012, 0.012, mat(0x6a6a7a), s * 0.25, -0.06 + k * 0.03, 0.4).rotateZ(s * k * 0.15));
  body.add(head);
  // own short tail (the golden tail is separate and moves to whoever wears it)
  if (kind === 'raccoon') {
    const t = new THREE.Group();
    for (let i = 0; i < 4; i++) t.add(ball(0.13 - i * 0.012, mat(i % 2 ? 0x3a3a40 : 0x9a9ea6), 0, 0, -i * 0.16, 1, 1, 1, 10));
    t.position.set(0, 0.55, -0.35);
    t.rotation.x = 0.4;
    body.add(t);
  } else if (kind === 'fox') {
    const t = ball(0.15, fur, 0, 0.5, -0.45, 1, 1, 2.2, 10);
    t.rotation.x = 0.5;
    body.add(t);
  } else body.add(ball(0.1, kind === 'bunny' ? mat(0xffffff) : fur, 0, 0.5, -0.36, 1, 1, 1, 8));
  const back = new THREE.Group();
  back.position.set(0, 0.6, -0.38);
  body.add(back);
  return { root, body, legs, arms, head, back };
}


/** Big padded headphones for the child's bear. */
export function addHeadphones(m) {
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 8, 20, Math.PI), mat(0x2a2c34));
  band.position.y = 0.05;
  m.head.add(band);
  for (const s of [-1, 1]) {
    m.head.add(cyl(0.16, 0.16, 0.12, mat(0xe8342a), s * 0.4, 0.02, 0, 14).rotateZ(Math.PI / 2));
    m.head.add(cyl(0.12, 0.12, 0.13, mat(0x2a2c34), s * 0.42, 0.02, 0, 12).rotateZ(Math.PI / 2));
  }
}

/** The record: black vinyl with grooves, a shine and a red centre label (a canvas texture). */
export function recordTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = '#121216';
  g.beginPath();
  g.arc(512, 512, 512, 0, Math.PI * 2);
  g.fill();
  for (let r = 150; r < 505; r += 6) {
    g.strokeStyle = r % 36 === 0 ? 'rgba(80,80,96,0.55)' : 'rgba(46,46,58,0.6)';
    g.lineWidth = r % 36 === 0 ? 2 : 1;
    g.beginPath();
    g.arc(512, 512, r, 0, Math.PI * 2);
    g.stroke();
  }
  const sh = g.createLinearGradient(0, 0, 1024, 1024);
  sh.addColorStop(0.35, 'rgba(255,255,255,0)');
  sh.addColorStop(0.5, 'rgba(255,255,255,0.13)');
  sh.addColorStop(0.65, 'rgba(255,255,255,0)');
  g.fillStyle = sh;
  g.beginPath();
  g.arc(512, 512, 505, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#e8342a';
  g.beginPath();
  g.arc(512, 512, 140, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#ffd23a';
  g.lineWidth = 8;
  g.beginPath();
  g.arc(512, 512, 120, 0, Math.PI * 2);
  g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** A candy-striped bar from the spindle to the edge, along +x. Low bars sit on the vinyl, high bars at head height. */
export function makeBar(length, high) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 16;
  const x = c.getContext('2d');
  for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? '#ffffff' : (high ? '#2a6ae8' : '#e8342a'); x.fillRect(i * 16, 0, 16, 16); }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.set(3, 1);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(high ? 0.16 : 0.22, high ? 0.16 : 0.22, length, 14), new THREE.MeshLambertMaterial({ map: tex }));
  bar.rotation.z = Math.PI / 2;
  bar.position.set(length / 2 + 1.0, high ? 1.25 : 0.32, 0);
  g.add(bar);
  g.add(ball(high ? 0.2 : 0.26, mat(high ? 0x2a6ae8 : 0xe8342a), length + 1.0, high ? 1.25 : 0.32, 0, 1, 1, 1, 10));
  if (high) g.add(cyl(0.05, 0.05, 1.2, mat(0xdcdce4), length + 1.0, 0.62, 0, 6));
  return g;
}

export function makeTonearm() {
  const g = new THREE.Group(); // pivot at the origin, the arm points along +x
  g.add(cyl(0.7, 0.85, 0.9, mat(0xc8ccd4), 0, 0.45, 0, 20));
  g.add(cyl(0.4, 0.4, 0.4, mat(0x9aa0aa), 0, 1.0, 0, 16));
  const arm = cyl(0.13, 0.13, 10, mat(0xe0e4ea), 5, 1.05, 0, 10);
  arm.rotation.z = Math.PI / 2;
  g.add(arm);
  g.add(box(0.9, 0.3, 0.6, mat(0x2a2c34), 10.1, 0.95, 0));
  g.add(box(0.2, 0.3, 0.2, mat(0xffd23a), 10.2, 0.7, 0));
  g.add(cyl(0.35, 0.35, 0.8, mat(0x6a6e78), -1.0, 1.05, 0, 14).rotateZ(Math.PI / 2));
  return g;
}

/** The turntable deck around the record: cream with red stripes, like a diner jukebox. */
export function makeDeck(radius) {
  const g = new THREE.Group();
  g.add(cyl(radius + 2.2, radius + 2.6, 1.6, mat(0xf4e8d0), 0, -0.85, 0, 64));
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius + 1.0 + i * 0.45, 0.13, 8, 72), mat(i % 2 ? 0xffffff : 0xe8342a));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.02;
    g.add(ring);
  }
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    g.add(ball(0.12, mat(0xffd23a, 0xaa8800, 0.5), Math.cos(a) * (radius + 2.0), 0.0, Math.sin(a) * (radius + 2.0), 1, 1, 1, 8));
  }
  return g;
}

/** A diner around it: teal and cream tiles, red booths, walls with a teal stripe, a glowing jukebox. */
export function makeDiner() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#7ad0c8' : '#f4ead6'; x.fillRect(i * 32, j * 32, 32, 32); }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(10, 10);
  tex.colorSpace = THREE.SRGBColorSpace;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshLambertMaterial({ map: tex }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.7;
  g.add(floor);
  for (const [x0, z0, ry] of [[-16, -9, 0.4], [16, -9, -0.4], [-16, 9, 2.7], [16, 9, -2.7], [-18, 0, Math.PI / 2], [18, 0, -Math.PI / 2]]) {
    const booth = new THREE.Group();
    booth.add(box(4.5, 1.2, 1.4, mat(0xd8343a), 0, -1.1, -1.6));
    booth.add(box(4.5, 2.4, 0.5, mat(0xd8343a), 0, -0.5, -2.3));
    booth.add(box(3.6, 0.15, 2.2, mat(0xf4f4f4), 0, -0.6, 0.2));
    booth.add(cyl(0.12, 0.12, 1.0, mat(0xc8ccd4), 0, -1.15, 0.2, 8));
    booth.position.set(x0, 0, z0);
    booth.rotation.y = ry;
    g.add(booth);
  }
  for (const [x0, z0, w, ry] of [[0, -22, 60, 0], [-26, 0, 50, Math.PI / 2], [26, 0, 50, Math.PI / 2]]) {
    const wall = box(w, 10, 0.5, mat(0xf2dcc0), x0, 3, z0);
    wall.rotation.y = ry;
    g.add(wall);
    const stripe = box(w, 0.8, 0.55, mat(0x7ad0c8), x0, -0.6, z0);
    stripe.rotation.y = ry;
    g.add(stripe);
  }
  const jb = new THREE.Group();
  jb.add(box(3, 4.5, 1.6, mat(0xb84a2a), 0, 0.55, 0));
  jb.add(cyl(1.5, 1.5, 1.6, mat(0xffd23a, 0xaa7700, 0.4), 0, 2.8, 0, 24).rotateX(Math.PI / 2));
  jb.add(box(2.2, 1.6, 0.2, mat(0xffe8a8, 0xffb040, 0.6), 0, 0.9, 0.85));
  jb.position.set(0, 0, -20.5);
  g.add(jb);
  return g;
}
