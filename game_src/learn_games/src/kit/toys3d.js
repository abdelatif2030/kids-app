// Shared 3D things for the learning games, all built from shapes in code (no files): fruit, toys, animals and
// vehicles in a bright glossy toy style. Every model stands on y = 0, fits in about 0.9 x 0.9 x 0.9 and faces +z.
// makeItem(id) returns a THREE.Group. Words for each id are in words.js.
import * as THREE from 'three';

const cache = new Map();
export function mat(color, rough = 0.45) {
  const k = `${color}|${rough}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0.02 }));
  return cache.get(k);
}
function mesh(geo, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(geo, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  return o;
}
const sph = (r, m, x, y, z, sx = 1, sy = 1, sz = 1, seg = 18) => { const o = mesh(new THREE.SphereGeometry(r, seg, Math.max(10, seg - 4)), m, x, y, z); o.scale.set(sx, sy, sz); return o; };
const cyl = (rt, rb, h, m, x, y, z, seg = 18) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m, x, y, z);
const bx = (w, h, d, m, x, y, z) => mesh(new THREE.BoxGeometry(w, h, d), m, x, y, z);
const BLACK = 0x1a1a24;
const WHITE = 0xffffff;

function eyes(g, x, y, z, s = 1, gap = 0.08) {
  for (const k of [-1, 1]) {
    g.add(sph(0.045 * s, mat(WHITE, 0.3), x + k * gap * s, y, z));
    g.add(sph(0.026 * s, mat(BLACK, 0.2), x + k * gap * s, y, z + 0.03 * s));
    g.add(sph(0.009 * s, mat(WHITE, 0.2), x + k * gap * s + 0.01 * s, y + 0.012 * s, z + 0.05 * s));
  }
}

function leaf(g, x, y, z, rz = 0.6) {
  const l = sph(0.09, mat(0x3ab84a, 0.5), x, y, z, 1, 0.35, 0.6);
  l.rotation.z = rz;
  g.add(l);
}

const BUILD = {
  apple(g) {
    g.add(sph(0.34, mat(0xe8302a, 0.35), 0, 0.34, 0, 1, 0.92, 1));
    g.add(cyl(0.02, 0.025, 0.14, mat(0x6a3a1a), 0, 0.7, 0));
    leaf(g, 0.08, 0.72, 0);
    g.add(sph(0.06, mat(0xffffff, 0.2), -0.13, 0.48, 0.24, 1, 1.4, 0.5)); // shine
  },
  banana(g) {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.38, 0.42, 0), new THREE.Vector3(-0.2, 0.18, 0), new THREE.Vector3(0.1, 0.12, 0), new THREE.Vector3(0.36, 0.34, 0)]);
    const m = mesh(new THREE.TubeGeometry(curve, 24, 0.11, 12), mat(0xffd23a, 0.4));
    g.add(m);
    g.add(sph(0.05, mat(0x6a4a1a), -0.4, 0.45, 0));
    g.add(sph(0.04, mat(0x4a3a1a), 0.38, 0.37, 0));
  },
  orange(g) {
    g.add(sph(0.33, mat(0xff8a1a, 0.5), 0, 0.33, 0));
    g.add(cyl(0.015, 0.02, 0.06, mat(0x4a7a2a), 0, 0.66, 0));
    leaf(g, 0.06, 0.66, 0, 0.3);
  },
  strawberry(g) {
    const body = mesh(new THREE.ConeGeometry(0.3, 0.5, 18), mat(0xf0283a, 0.4), 0, 0.3, 0);
    body.rotation.x = Math.PI;
    g.add(body);
    g.add(sph(0.3, mat(0xf0283a, 0.4), 0, 0.5, 0, 1, 0.45, 1));
    for (let i = 0; i < 14; i++) {
      const a = i * 2.4;
      const y = 0.25 + (i % 4) * 0.07;
      const r = 0.22 - (0.55 - y) * 0.2;
      g.add(sph(0.018, mat(0xffe27a, 0.3), Math.cos(a) * r, y, Math.sin(a) * r));
    }
    for (let i = 0; i < 5; i++) { const l = sph(0.1, mat(0x3ab84a), Math.cos(i * 1.26) * 0.12, 0.62, Math.sin(i * 1.26) * 0.12, 1, 0.25, 0.5); l.rotation.y = -i * 1.26; g.add(l); }
  },
  pear(g) {
    g.add(sph(0.3, mat(0xa8d83a, 0.45), 0, 0.3, 0));
    g.add(sph(0.2, mat(0xa8d83a, 0.45), 0, 0.58, 0));
    g.add(cyl(0.02, 0.025, 0.12, mat(0x6a3a1a), 0.02, 0.8, 0));
    leaf(g, 0.1, 0.8, 0);
  },
  grapes(g) {
    const m = mat(0x8a3ad8, 0.3);
    let k = 0;
    for (const [n, y, r] of [[4, 0.62, 0.16], [4, 0.46, 0.14], [3, 0.31, 0.1], [1, 0.17, 0]]) {
      for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 + k; g.add(sph(0.1, m, Math.cos(a) * r, y, Math.sin(a) * r)); }
      k += 0.5;
    }
    g.add(cyl(0.02, 0.02, 0.14, mat(0x6a4a1a), 0, 0.78, 0));
    leaf(g, 0.1, 0.8, 0);
  },
  watermelon(g) {
    // a slice: half disc standing up
    const shape = new THREE.Shape();
    shape.absarc(0, 0, 0.42, 0, Math.PI, false);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.18, bevelEnabled: false, curveSegments: 24 });
    geo.translate(0, 0, -0.09);
    const rind = mesh(geo, mat(0x2a9a3a));
    rind.rotation.x = Math.PI;
    rind.position.y = 0.44;
    g.add(rind);
    const s2 = new THREE.Shape();
    s2.absarc(0, 0, 0.36, 0, Math.PI, false);
    const flesh = mesh(new THREE.ExtrudeGeometry(s2, { depth: 0.2, bevelEnabled: false, curveSegments: 24 }), mat(0xff4a5a));
    flesh.geometry.translate(0, 0, -0.1);
    flesh.rotation.x = Math.PI;
    flesh.position.y = 0.44;
    g.add(flesh);
    for (const [x, y] of [[-0.18, 0.3], [0, 0.22], [0.18, 0.3], [-0.08, 0.36], [0.1, 0.36]]) g.add(sph(0.025, mat(BLACK), x, y, 0.105, 1, 1.5, 0.5));
  },
  ball(g) {
    g.add(sph(0.34, mat(0xffffff, 0.3), 0, 0.34, 0));
    const stripe = mesh(new THREE.TorusGeometry(0.34, 0.06, 10, 36), mat(0xff3a4a, 0.3), 0, 0.34, 0);
    g.add(stripe);
    const s2 = mesh(new THREE.TorusGeometry(0.34, 0.06, 10, 36), mat(0x3a8aff, 0.3), 0, 0.34, 0);
    s2.rotation.y = Math.PI / 2;
    g.add(s2);
    const s3 = mesh(new THREE.TorusGeometry(0.34, 0.06, 10, 36), mat(0xffd23a, 0.3), 0, 0.34, 0);
    s3.rotation.x = Math.PI / 2;
    g.add(s3);
  },
  teddy(g) {
    const fur = mat(0xc8844a, 0.8);
    const light = mat(0xf0c890, 0.8);
    g.add(sph(0.22, fur, 0, 0.26, 0, 1, 1.05, 0.9));
    g.add(sph(0.14, light, 0, 0.25, 0.14, 1, 1.1, 0.6));
    g.add(sph(0.19, fur, 0, 0.6, 0));
    g.add(sph(0.08, light, 0, 0.56, 0.16, 1, 0.8, 0.8));
    g.add(sph(0.03, mat(BLACK), 0, 0.58, 0.23));
    for (const k of [-1, 1]) {
      g.add(sph(0.07, fur, k * 0.15, 0.76, 0));
      g.add(sph(0.04, light, k * 0.15, 0.76, 0.04));
      g.add(sph(0.025, mat(BLACK, 0.2), k * 0.07, 0.65, 0.17));
      g.add(sph(0.08, fur, k * 0.22, 0.32, 0.06));
      g.add(sph(0.09, fur, k * 0.13, 0.07, 0.08, 1, 0.8, 1.2));
    }
    const bow = sph(0.05, mat(0xff3a6a), 0, 0.44, 0.17, 2, 0.8, 0.6);
    g.add(bow);
  },
  blocks(g) {
    const cols = [0xff4a4a, 0x4aa8ff, 0xffc83a];
    [[-0.18, 0.13, 0], [0.18, 0.13, 0.02], [0, 0.39, 0]].forEach(([x, y, z], i) => {
      const b = bx(0.26, 0.26, 0.26, mat(cols[i], 0.4), x, y, z);
      b.rotation.y = (i - 1) * 0.2;
      g.add(b);
      const lt = bx(0.14, 0.14, 0.01, mat(WHITE, 0.4), x, y, z + 0.135);
      lt.rotation.y = b.rotation.y;
      g.add(lt);
    });
  },
  drum(g) {
    g.add(cyl(0.3, 0.3, 0.34, mat(0xe8402a, 0.4), 0, 0.2, 0, 24));
    g.add(cyl(0.31, 0.31, 0.04, mat(0xffd23a, 0.3), 0, 0.38, 0, 24));
    g.add(cyl(0.31, 0.31, 0.04, mat(0xffd23a, 0.3), 0, 0.03, 0, 24));
    g.add(cyl(0.29, 0.29, 0.02, mat(0xf8f4ea, 0.6), 0, 0.4, 0, 24));
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const z = cyl(0.012, 0.012, 0.36, mat(WHITE), Math.cos(a) * 0.3, 0.2, Math.sin(a) * 0.3, 6); z.rotation.z = (i % 2 ? 0.5 : -0.5); g.add(z); }
    for (const k of [-1, 1]) { const st = cyl(0.02, 0.02, 0.42, mat(0xd8a86a), k * 0.14, 0.55, 0.05, 8); st.rotation.z = k * 0.8; g.add(st); g.add(sph(0.04, mat(0xd8a86a), k * 0.3, 0.7, 0.05)); }
  },
  yoyo(g) {
    for (const k of [-1, 1]) { const d = cyl(0.3, 0.3, 0.1, mat(k < 0 ? 0x3ac8a8 : 0xff6ab8, 0.35), 0, 0.32, k * 0.08, 24); d.rotation.x = Math.PI / 2; g.add(d); }
    const ax = cyl(0.08, 0.08, 0.08, mat(WHITE), 0, 0.32, 0);
    ax.rotation.x = Math.PI / 2;
    g.add(ax);
    g.add(cyl(0.008, 0.008, 0.4, mat(WHITE), 0, 0.68, 0, 6));
    g.add(sph(0.04, mat(0xffd23a), 0, 0.88, 0));
  },
  cat(g) {
    const fur = mat(0xffa84a, 0.7);
    g.add(sph(0.22, fur, 0, 0.24, -0.05, 1, 0.95, 1.1));
    g.add(sph(0.18, fur, 0, 0.52, 0.12));
    for (const k of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.07, 0.13, 12), fur, k * 0.1, 0.68, 0.1);
      ear.rotation.z = -k * 0.25;
      g.add(ear);
      g.add(sph(0.06, fur, k * 0.12, 0.05, 0.12, 1, 0.7, 1.3));
    }
    eyes(g, 0, 0.55, 0.26, 1, 0.065);
    g.add(sph(0.025, mat(0xff7a9a), 0, 0.49, 0.29));
    const tail = mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.2, -0.3), new THREE.Vector3(0.1, 0.35, -0.42), new THREE.Vector3(0.05, 0.55, -0.38)]), 12, 0.04, 8), fur);
    g.add(tail);
    for (let i = 0; i < 3; i++) g.add(bx(0.12, 0.02, 0.01, mat(0xd8782a), 0, 0.62 + i * 0.03 - 0.03, 0.29 - i * 0.02));
  },
  fish(g) {
    const body = mat(0xff8a2a, 0.35);
    g.add(sph(0.26, body, 0, 0.36, 0, 0.6, 0.85, 1.3));
    const tail = mesh(new THREE.ConeGeometry(0.18, 0.24, 4), body, 0, 0.36, -0.42);
    tail.rotation.x = -Math.PI / 2;
    tail.scale.set(0.3, 1, 1.2);
    g.add(tail);
    for (const z of [-0.08, 0.1]) g.add(sph(0.2, mat(WHITE, 0.4), 0, 0.36, z, 0.62, 0.84, 0.12));
    for (const k of [-1, 1]) { g.add(sph(0.05, mat(WHITE, 0.3), k * 0.14, 0.42, 0.2)); g.add(sph(0.028, mat(BLACK), k * 0.17, 0.42, 0.22)); }
    const fin = mesh(new THREE.ConeGeometry(0.1, 0.18, 4), body, 0, 0.6, -0.05);
    fin.scale.set(0.2, 1, 1);
    g.add(fin);
  },
  chick(g) {
    const y = mat(0xffd83a, 0.6);
    g.add(sph(0.22, y, 0, 0.24, 0));
    g.add(sph(0.16, y, 0, 0.5, 0.04));
    eyes(g, 0, 0.53, 0.17, 0.9, 0.06);
    const beak = mesh(new THREE.ConeGeometry(0.04, 0.09, 8), mat(0xff8a1a), 0, 0.48, 0.21);
    beak.rotation.x = Math.PI / 2;
    g.add(beak);
    for (const k of [-1, 1]) { const w = sph(0.1, y, k * 0.2, 0.26, 0, 0.4, 0.8, 1); w.rotation.z = k * 0.4; g.add(w); g.add(bx(0.06, 0.02, 0.1, mat(0xff8a1a), k * 0.07, 0.01, 0.06)); }
    g.add(sph(0.04, y, 0, 0.68, 0.02, 0.6, 1.2, 0.6));
  },
  bunny(g) {
    const fur = mat(0xf4f0f4, 0.8);
    g.add(sph(0.22, fur, 0, 0.24, -0.02, 1, 0.95, 1.05));
    g.add(sph(0.16, fur, 0, 0.5, 0.1));
    for (const k of [-1, 1]) {
      const ear = sph(0.06, fur, k * 0.07, 0.78, 0.06, 0.8, 2.6, 0.6);
      ear.rotation.z = -k * 0.12;
      g.add(ear);
      g.add(sph(0.035, mat(0xffa8c0), k * 0.07, 0.78, 0.1, 0.8, 2.2, 0.4));
      g.add(sph(0.06, fur, k * 0.1, 0.04, 0.14, 1, 0.6, 1.4));
    }
    eyes(g, 0, 0.53, 0.23, 0.85, 0.06);
    g.add(sph(0.025, mat(0xff8aa8), 0, 0.47, 0.26));
    g.add(sph(0.07, fur, 0, 0.22, -0.26));
  },
  frog(g) {
    const gr = mat(0x5ac83a, 0.45);
    g.add(sph(0.26, gr, 0, 0.2, 0, 1.1, 0.75, 1));
    for (const k of [-1, 1]) {
      g.add(sph(0.1, gr, k * 0.12, 0.38, 0.1));
      g.add(sph(0.065, mat(WHITE, 0.3), k * 0.12, 0.42, 0.16));
      g.add(sph(0.035, mat(BLACK), k * 0.12, 0.43, 0.21));
      g.add(sph(0.09, gr, k * 0.24, 0.05, 0.12, 1, 0.4, 1.4));
    }
    const smile = mesh(new THREE.TorusGeometry(0.1, 0.012, 6, 16, Math.PI), mat(0x2a6a1a), 0, 0.24, 0.24);
    smile.rotation.z = Math.PI;
    g.add(smile);
    g.add(sph(0.18, mat(0xc8f08a, 0.5), 0, 0.13, 0.08, 1, 0.5, 1));
  },
  car(g) {
    g.add(bx(0.74, 0.22, 0.4, mat(0xe8302a, 0.3), 0, 0.22, 0));
    g.add(bx(0.4, 0.2, 0.36, mat(0xe8302a, 0.3), -0.05, 0.42, 0));
    for (const k of [-1, 1]) g.add(bx(0.17, 0.14, 0.37, mat(0x9ad8ff, 0.1), -0.05 + k * 0.1, 0.43, 0));
    for (const x of [-0.24, 0.24]) for (const z of [-0.21, 0.21]) { const w = cyl(0.1, 0.1, 0.07, mat(BLACK, 0.6), x, 0.1, z); w.rotation.x = Math.PI / 2; g.add(w); g.add(cyl(0.045, 0.045, 0.075, mat(0xd8d8e0, 0.3), x, 0.1, z).rotateX(Math.PI / 2)); }
    for (const z of [-0.12, 0.12]) g.add(sph(0.035, mat(0xfff2a8, 0.2), 0.37, 0.25, z));
    g.rotation.y = -Math.PI / 2;
  },
  bus(g) {
    g.add(bx(0.86, 0.42, 0.4, mat(0xffc23a, 0.35), 0, 0.33, 0));
    for (let i = 0; i < 4; i++) for (const k of [-1, 1]) g.add(bx(0.15, 0.12, 0.01, mat(0x9ad8ff, 0.1), -0.3 + i * 0.19, 0.42, k * 0.205));
    g.add(bx(0.01, 0.16, 0.3, mat(0x9ad8ff, 0.1), 0.435, 0.42, 0));
    g.add(bx(0.88, 0.04, 0.41, mat(0x3a3a4a), 0, 0.22, 0));
    for (const x of [-0.28, 0.28]) for (const z of [-0.21, 0.21]) { const w = cyl(0.09, 0.09, 0.07, mat(BLACK, 0.6), x, 0.1, z); w.rotation.x = Math.PI / 2; g.add(w); }
    g.rotation.y = -Math.PI / 2;
  },
  boat(g) {
    const shape = new THREE.Shape();
    shape.moveTo(-0.42, 0.2);
    shape.lineTo(0.42, 0.2);
    shape.lineTo(0.3, 0);
    shape.lineTo(-0.3, 0);
    shape.closePath();
    const hull = mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 }), mat(0x3a7ae8, 0.35), 0, 0.02, -0.15);
    g.add(hull);
    g.add(bx(0.86, 0.04, 0.32, mat(WHITE, 0.4), 0, 0.22, 0));
    g.add(cyl(0.015, 0.015, 0.62, mat(0x8a5a2a), 0, 0.53, 0, 8));
    const sail = new THREE.Shape();
    sail.moveTo(0, 0);
    sail.lineTo(0.3, 0);
    sail.lineTo(0, 0.5);
    sail.closePath();
    const s = mesh(new THREE.ShapeGeometry(sail), new THREE.MeshStandardMaterial({ color: 0xff5a5a, side: THREE.DoubleSide, roughness: 0.6 }), 0.02, 0.28, 0);
    g.add(s);
    g.rotation.y = -Math.PI / 2;
  },
  plane(g) {
    const body = mat(0xf4f4fa, 0.3);
    const b = cyl(0.1, 0.07, 0.8, body, 0, 0.32, 0);
    b.rotation.z = Math.PI / 2;
    g.add(b);
    g.add(sph(0.1, body, 0.4, 0.32, 0, 1, 1, 1));
    g.add(bx(0.22, 0.03, 0.86, mat(0x3a8aff, 0.35), 0.02, 0.3, 0));
    g.add(bx(0.12, 0.02, 0.32, mat(0x3a8aff, 0.35), -0.36, 0.34, 0));
    g.add(bx(0.12, 0.18, 0.02, mat(0xff4a4a, 0.35), -0.36, 0.44, 0));
    for (let i = 0; i < 3; i++) for (const k of [-1, 1]) g.add(sph(0.025, mat(0x6ac8ff, 0.1), 0.1 - i * 0.12, 0.37, k * 0.09));
    const prop = bx(0.02, 0.26, 0.04, mat(0x3a3a4a), 0.5, 0.32, 0);
    g.add(prop);
    g.userData.prop = prop;
    g.rotation.y = -Math.PI / 2;
  },
  train(g) {
    g.add(bx(0.5, 0.3, 0.36, mat(0x3ac86a, 0.35), -0.12, 0.25, 0));
    g.add(bx(0.26, 0.24, 0.36, mat(0xe8402a, 0.35), -0.24, 0.52, 0));
    g.add(bx(0.18, 0.1, 0.38, mat(0x9ad8ff, 0.1), -0.24, 0.56, 0));
    const boiler = cyl(0.14, 0.14, 0.36, mat(0x3a7ae8, 0.35), 0.24, 0.27, 0);
    boiler.rotation.z = Math.PI / 2;
    g.add(boiler);
    g.add(cyl(0.05, 0.07, 0.18, mat(0x3a3a4a), 0.3, 0.48, 0));
    g.add(sph(0.06, mat(0xffd23a), 0.42, 0.27, 0));
    for (const x of [-0.26, 0, 0.26]) for (const z of [-0.19, 0.19]) { const w = cyl(0.09, 0.09, 0.05, mat(0xffc23a, 0.4), x, 0.1, z); w.rotation.x = Math.PI / 2; g.add(w); }
    g.rotation.y = -Math.PI / 2;
  },
};

export const ITEM_IDS = Object.keys(BUILD);

/** A fresh model of [id] (wrapped so the item's own turn stays inside). */
export function makeItem(id) {
  const outer = new THREE.Group();
  const inner = new THREE.Group();
  (BUILD[id] || BUILD.ball)(inner);
  outer.add(inner);
  outer.userData.id = id;
  outer.userData.inner = inner;
  return outer;
}
