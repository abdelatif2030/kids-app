// Every model of «مغامرة الذيل الذهبي», built from shapes in code: the plush green dinosaur with a red bandana (as on
// the owner's card), plush animal rivals (raccoon, bear, fox, bunny, cat), the glowing golden tail, and the treetop
// playground: round tree-house decks, rope bridges, ramps, slides and bouncy mushrooms. Soft, round, toy-like.
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

/** The golden tail: a fluffy striped tail that glows; it hangs from the wearer's back. */
export function makeGoldenTail() {
  const g = new THREE.Group();
  const gold = mat(0xffc21a, 0xff9a00, 0.55);
  const light = mat(0xffe680, 0xffc21a, 0.6);
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const seg = ball(0.15 - i * 0.012, i % 2 ? light : gold, 0, -i * 0.04, -0.12 - i * 0.17, 1, 1, 1.25, 12);
    g.add(seg);
    parts.push(seg);
  }
  const tip = ball(0.1, mat(0xfff6c8, 0xffe680, 0.8), 0, -0.26, -1.15, 1, 1, 1.3, 10);
  g.add(tip);
  parts.push(tip);
  return { root: g, parts };
}

// ---- the playground -------------------------------------------------------------------------------------------------

const WOOD = 0xc08a52;
const WOOD_DARK = 0x9a6a3a;

/** A round tree-house deck around a big trunk, with posts, a railing ring and a leafy crown above. */
export function makeDeck(p, low) {
  const g = new THREE.Group();
  g.position.set(p.x, 0, p.z);
  const trunk = cyl(0.55, 0.95, p.y + 1.3, mat(0x7a4e2a), 0, (p.y + 1.3) / 2, 0, 12);
  g.add(trunk);
  // planks: a ring of wedges in two shades
  const n = 18;
  for (let i = 0; i < n; i++) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r, 0.18, 4, 1, false, (i / n) * Math.PI * 2, ((Math.PI * 2) / n) * 0.96), mat(i % 2 ? WOOD : 0xb27c46));
    w.position.y = p.y - 0.09;
    g.add(w);
  }
  g.add(cyl(p.r * 0.32, p.r * 0.32, 0.2, mat(0x8a5a30), 0, p.y - 0.08, 0, 16));
  const rim = new THREE.Mesh(new THREE.TorusGeometry(p.r, 0.08, 6, 36), mat(WOOD_DARK));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = p.y - 0.05;
  g.add(rim);
  // support struts
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    const s = cyl(0.08, 0.08, p.y * 0.75, mat(WOOD_DARK), Math.cos(a) * p.r * 0.45, p.y * 0.62, Math.sin(a) * p.r * 0.45, 6);
    s.rotation.z = Math.cos(a) * 0.5;
    s.rotation.x = -Math.sin(a) * 0.5;
    g.add(s);
  }
  // a small leafy tuft on top of the trunk (big crowns would hide the chase from the camera)
  if (!low) {
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 8), mat(0x4fae4a)).translateY(p.y + 1.5));
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 9, 7), mat(0x6cc44f)).translateY(p.y + 1.2).translateX(0.55));
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 9, 7), mat(0x6cc44f)).translateY(p.y + 1.25).translateX(-0.5).translateZ(0.2));
  }
  return g;
}

/** A plank strip (bridge / ramp / slide) with rope rails; returns its group in world space. */
export function makeStrip(s) {
  const g = new THREE.Group();
  const dx = s.bx - s.ax;
  const dy = s.by - s.ay;
  const dz = s.bz - s.az;
  const len = Math.hypot(dx, dy, dz);
  const flat = Math.hypot(dx, dz);
  const mid = new THREE.Vector3((s.ax + s.bx) / 2, (s.ay + s.by) / 2, (s.az + s.bz) / 2);
  const holder = new THREE.Group();
  holder.position.copy(mid);
  holder.rotation.order = 'YXZ';
  holder.rotation.y = Math.atan2(dx, dz);
  holder.rotation.x = -Math.atan2(dy, flat);
  g.add(holder);
  if (s.kind === 'slide') {
    const c1 = 0xff6a4a;
    holder.add(box(s.w, 0.1, len, mat(c1), 0, -0.05, 0));
    for (const side of [-1, 1]) holder.add(box(0.12, 0.35, len, mat(0xffc23a), (side * s.w) / 2, 0.1, 0));
    // little rungs of a ladder look at the top
  } else {
    const n = Math.max(3, Math.round(len / 0.32));
    for (let i = 0; i < n; i++) holder.add(box(s.w, 0.08, (len / n) * 0.82, mat(i % 2 ? WOOD : 0xb27c46), 0, -0.04, -len / 2 + (i + 0.5) * (len / n)));
    if (s.rails) {
      for (const side of [-1, 1]) {
        const rope = cyl(0.035, 0.035, len, mat(0xe8d4a0), (side * s.w) / 2, 0.75, 0, 6);
        rope.rotation.x = Math.PI / 2;
        holder.add(rope);
        const posts = Math.max(2, Math.round(len / 1.4));
        for (let i = 0; i <= posts; i++) holder.add(cyl(0.05, 0.05, 0.8, mat(WOOD_DARK), (side * s.w) / 2, 0.38, -len / 2 + (i * len) / posts, 6));
      }
    }
  }
  // stilts under ramps and slides
  if (s.kind !== 'bridge') {
    for (const t of [0.35, 0.7]) {
      const h = s.ay + (s.by - s.ay) * t;
      if (h < 0.4) continue;
      g.add(cyl(0.07, 0.07, h, mat(WOOD_DARK), s.ax + dx * t, h / 2, s.az + dz * t, 6));
    }
  }
  return g;
}

export function makeMushroom() {
  const g = new THREE.Group();
  g.add(cyl(0.28, 0.36, 0.5, mat(0xfff4dc), 0, 0.25, 0, 12));
  const cap = ball(0.8, mat(0xe8342a), 0, 0.5, 0, 1, 0.5, 1, 18);
  g.add(cap);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const r = i === 0 ? 0 : 0.48;
    g.add(ball(0.11, mat(0xffffff), Math.cos(a) * r, 0.86 - (r ? 0.12 : 0), Math.sin(a) * r, 1, 0.4, 1, 8));
  }
  return { root: g, cap };
}

export function makeTree(s = 1) {
  const g = new THREE.Group();
  g.add(cyl(0.3 * s, 0.45 * s, 4 * s, mat(0x6a4426), 0, 2 * s, 0, 8));
  const l = mat(0x3f9a46);
  const l2 = mat(0x5cb84c);
  g.add(ball(1.8 * s, l, 0, 4.6 * s, 0, 1, 0.85, 1, 10));
  g.add(ball(1.2 * s, l2, 1 * s, 4 * s, 0.5 * s, 1, 0.85, 1, 9));
  g.add(ball(1.3 * s, l2, -1 * s, 4.3 * s, -0.4 * s, 1, 0.85, 1, 9));
  return g;
}

export function makeBush(s = 1) {
  const g = new THREE.Group();
  const m = mat(0x56b04a);
  g.add(ball(0.7 * s, m, 0, 0.4 * s, 0, 1, 0.7, 1, 10));
  g.add(ball(0.5 * s, mat(0x6cc456), 0.5 * s, 0.35 * s, 0.2 * s, 1, 0.7, 1, 9));
  return g;
}
