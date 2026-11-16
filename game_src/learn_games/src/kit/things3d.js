// More cute round 3D things (drawn from shapes in code, no files): animals, fruit-free objects and foods for the letters
// and animals games. Every model stands on y = 0, about one unit tall, facing +z. `makeThing(id)` returns a Group;
// ids not here fall back to the toy models in toys3d.js.
import * as THREE from 'three';
import { makeItem } from './toys3d.js';
import { shapeGeo } from './shapes3d.js';
import { artThing } from './actors.js';

const m = (c, r = 0.55) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const sph = (r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 14), mat); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };
const cyl = (rt, rb, hh, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, hh, 14), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const cone = (r, hh, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.ConeGeometry(r, hh, 14), mat); o.position.set(x, y, z); o.castShadow = true; return o; };
const eyes = (g, y, z, dx = 0.12, r = 0.05) => {
  for (const s of [-1, 1]) {
    g.add(sph(r, m(0x1a1a24, 0.3), s * dx, y, z));
    g.add(sph(r * 0.35, new THREE.MeshBasicMaterial({ color: 0xffffff }), s * dx + r * 0.3, y + r * 0.4, z + r * 0.7));
  }
};
const legs = (g, mat, xs, zs, h = 0.28, r = 0.07) => { for (const x of xs) for (const z of zs) g.add(cyl(r, r * 0.9, h, mat, x, h / 2, z)); };

const BUILD = {
  duck(g) {
    const yel = m(0xffd83a, 0.4), org = m(0xff8a2a);
    g.add(sph(0.42, yel, 0, 0.45, 0, 1, 0.9, 1.15));
    g.add(sph(0.27, yel, 0, 0.9, 0.3));
    const beak = sph(0.13, org, 0, 0.84, 0.55, 1.3, 0.5, 1.1);
    g.add(beak);
    eyes(g, 0.97, 0.5, 0.12);
    g.add(sph(0.2, m(0xffc21a), 0.38, 0.5, -0.02, 0.4, 0.8, 1));
    g.add(sph(0.2, m(0xffc21a), -0.38, 0.5, -0.02, 0.4, 0.8, 1));
    g.add(cone(0.14, 0.3, yel, 0, 0.62, -0.5)).rotation.x = -1.1;
  },
  butterfly(g) {
    g.add(cyl(0.05, 0.05, 0.6, m(0x4a3a5a), 0, 0.5, 0)).rotation.x = Math.PI / 2;
    g.children[0].rotation.x = 0;
    g.add(sph(0.09, m(0x4a3a5a), 0, 0.85, 0));
    const wings = new THREE.Group();
    for (const [s, up, c] of [[-1, 1, 0xff6ab8], [1, 1, 0xff6ab8], [-1, -1, 0xb87aff], [1, -1, 0xb87aff]]) {
      const w = sph(0.38, m(c, 0.4), s * 0.36, 0.62 + up * 0.18, 0, 1, 1, 0.12);
      wings.add(w, sph(0.1, m(0xffffff), s * 0.42, 0.62 + up * 0.2, 0.06, 1, 1, 0.3));
    }
    g.add(wings);
    g.userData.wings = wings;
    for (const s of [-1, 1]) { const a = cyl(0.012, 0.012, 0.3, m(0x4a3a5a), s * 0.08, 1.05, 0); a.rotation.z = -s * 0.4; g.add(a); }
  },
  fox(g) {
    const org = m(0xf08a2a), wh = m(0xfff4e8), dk = m(0x4a2a1a);
    g.add(sph(0.4, org, 0, 0.5, -0.05, 0.9, 0.85, 1.25));
    g.add(sph(0.3, org, 0, 0.88, 0.38, 1.1, 0.95, 1));
    g.add(sph(0.2, wh, 0, 0.8, 0.55, 1.2, 0.7, 1));
    g.add(sph(0.05, dk, 0, 0.84, 0.72));
    for (const s of [-1, 1]) { const e = cone(0.11, 0.32, org, s * 0.2, 1.2, 0.34); e.rotation.z = -s * 0.2; g.add(e); g.add(cone(0.05, 0.2, dk, s * 0.2, 1.18, 0.37)).rotation.z = -s * 0.2; }
    eyes(g, 0.95, 0.62, 0.12);
    g.add(sph(0.18, org, 0, 0.55, -0.62, 0.8, 0.8, 1.7)).rotation.x = 0.5;
    g.add(sph(0.14, wh, 0, 0.78, -0.95, 0.9, 0.9, 1.2));
    legs(g, dk, [-0.2, 0.2], [0.25, -0.35], 0.3);
  },
  camel(g) {
    const tan = m(0xd8a868), dk = m(0xb88848);
    g.add(sph(0.42, tan, 0, 0.78, 0, 0.85, 0.8, 1.35));
    g.add(sph(0.22, tan, 0, 1.2, -0.2));
    g.add(sph(0.2, tan, 0, 1.18, 0.28));
    const neck = cyl(0.12, 0.17, 0.62, tan, 0, 1.2, 0.58); neck.rotation.x = 0.5; g.add(neck);
    g.add(sph(0.17, tan, 0, 1.55, 0.78, 0.9, 0.9, 1.3));
    g.add(sph(0.05, m(0x1a1a24), 0, 1.6, 0.93));
    eyes(g, 1.6, 0.76, 0.1, 0.035);
    legs(g, dk, [-0.22, 0.22], [0.42, -0.42], 0.55, 0.08);
    g.add(cyl(0.025, 0.025, 0.35, dk, 0, 0.7, -0.62)).rotation.x = 0.3;
  },
  horse(g) {
    const br = m(0xa86a3a), dk = m(0x3a2418), wh = m(0xfff4e8);
    g.add(sph(0.38, br, 0, 0.78, 0, 0.8, 0.8, 1.4));
    const neck = cyl(0.14, 0.2, 0.6, br, 0, 1.15, 0.5); neck.rotation.x = 0.55; g.add(neck);
    g.add(sph(0.2, br, 0, 1.5, 0.7, 0.85, 0.95, 1.5));
    g.add(sph(0.12, wh, 0, 1.45, 0.88, 0.8, 0.7, 1));
    for (const s of [-1, 1]) g.add(cone(0.07, 0.2, br, s * 0.1, 1.72, 0.58));
    eyes(g, 1.55, 0.74, 0.14, 0.035);
    g.add(sph(0.1, dk, 0, 1.55, 0.45, 0.5, 1.6, 0.9)).rotation.x = 0.55;
    legs(g, br, [-0.2, 0.2], [0.42, -0.45], 0.55, 0.075);
    g.add(cone(0.1, 0.55, dk, 0, 0.85, -0.75)).rotation.x = 2.6;
  },
  sheep(g) {
    const wh = m(0xfffaf0, 0.9), dk = m(0x3a3a44);
    for (const [x, y, z, r] of [[0, 0.62, 0, 0.42], [-0.28, 0.6, 0.1, 0.3], [0.28, 0.6, 0.1, 0.3], [0, 0.85, 0.05, 0.3], [-0.2, 0.6, -0.3, 0.3], [0.2, 0.6, -0.3, 0.3], [0, 0.52, 0.3, 0.3]]) g.add(sph(r, wh, x, y, z));
    g.add(sph(0.22, dk, 0, 0.72, 0.5, 0.95, 1.05, 1.1));
    for (const s of [-1, 1]) g.add(sph(0.1, dk, s * 0.24, 0.8, 0.45, 1.4, 0.7, 0.5));
    eyes(g, 0.78, 0.68, 0.09, 0.03);
    legs(g, dk, [-0.18, 0.18], [0.22, -0.25], 0.3, 0.06);
  },
  hen(g) {
    const wh = m(0xfff4e8, 0.7), red = m(0xe8302a), org = m(0xffa02a);
    g.add(sph(0.42, wh, 0, 0.55, 0, 1, 0.95, 1.1));
    g.add(sph(0.24, wh, 0, 1.0, 0.32));
    g.add(sph(0.12, org, 0, 0.95, 0.56, 0.9, 0.7, 1.4));
    for (let i = 0; i < 3; i++) g.add(sph(0.07, red, 0, 1.28 - Math.abs(i - 1) * 0.04, 0.3 + (i - 1) * 0.1));
    g.add(sph(0.06, red, 0, 0.82, 0.55, 0.7, 1.4, 0.7));
    eyes(g, 1.03, 0.5, 0.11, 0.035);
    g.add(cone(0.22, 0.5, wh, 0, 0.85, -0.5)).rotation.x = -0.6;
    g.add(sph(0.2, m(0xf0e0c8), 0.4, 0.55, 0, 0.35, 0.8, 1));
    g.add(sph(0.2, m(0xf0e0c8), -0.4, 0.55, 0, 0.35, 0.8, 1));
    legs(g, org, [-0.12, 0.12], [0], 0.2, 0.03);
  },
  sun(g) {
    const yel = m(0xffd21a, 0.3);
    g.add(sph(0.45, yel, 0, 0.7, 0));
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const r = cone(0.09, 0.32, m(0xffa81a), Math.cos(a) * 0.68, 0.7 + Math.sin(a) * 0.68, 0);
      r.rotation.z = a - Math.PI / 2;
      g.add(r);
    }
    eyes(g, 0.78, 0.42, 0.15, 0.045);
    const sm = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.025, 6, 14, Math.PI), m(0xb83a1a));
    sm.position.set(0, 0.6, 0.43); sm.rotation.z = Math.PI; g.add(sm);
    for (const s of [-1, 1]) g.add(sph(0.07, m(0xff9a6a), s * 0.28, 0.62, 0.38, 1, 0.7, 0.5));
  },
  bee(g) {
    const yel = m(0xffd21a), blk = m(0x2a2a2a);
    g.add(sph(0.4, yel, 0, 0.5, 0, 0.9, 0.85, 1.25));
    for (const z of [-0.1, 0.2, -0.38]) { const st = sph(0.37 - Math.abs(z) * 0.2, blk, 0, 0.5, z, 0.9, 0.85, 0.2); g.add(st); }
    g.add(sph(0.22, yel, 0, 0.62, 0.52));
    eyes(g, 0.68, 0.68, 0.1, 0.05);
    for (const s of [-1, 1]) {
      g.add(sph(0.22, m(0xcfeeff, 0.2), s * 0.32, 0.95, 0, 0.9, 0.35, 1.1)).userData.wing = s;
      const a = cyl(0.012, 0.012, 0.3, blk, s * 0.08, 0.95, 0.62); a.rotation.z = -s * 0.4; a.rotation.x = 0.3; g.add(a);
    }
    g.add(cone(0.06, 0.2, blk, 0, 0.45, -0.62)).rotation.x = -Math.PI / 2;
  },
  heart(g) {
    const h = new THREE.Mesh(shapeGeo('heart', 0.4, 0.09), new THREE.MeshStandardMaterial({ color: 0xff3a6a, roughness: 0.25 }));
    h.scale.setScalar(0.62); h.position.y = 0.55; h.castShadow = true; g.add(h);
    g.add(sph(0.07, new THREE.MeshBasicMaterial({ color: 0xffd0dc }), -0.2, 0.72, 0.28, 1, 1.4, 0.5));
  },
  rose(g) {
    const red = m(0xe8284a, 0.45), grn = m(0x3aa84a);
    g.add(cyl(0.04, 0.05, 0.75, grn, 0, 0.38, 0));
    for (const [s, y] of [[-1, 0.35], [1, 0.5]]) { const l = sph(0.16, grn, s * 0.2, y, 0, 1.6, 0.3, 0.8); l.rotation.z = s * 0.4; g.add(l); }
    g.add(sph(0.3, red, 0, 0.95, 0, 1, 0.9, 1));
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; g.add(sph(0.18, m(0xff4a6a, 0.45), Math.cos(a) * 0.24, 0.98, Math.sin(a) * 0.24, 1, 1.1, 0.6)).rotation.y = -a; }
    g.add(sph(0.14, m(0xc81a3a), 0, 1.05, 0));
  },
  dog(g) {
    const br = m(0xc8904a), wh = m(0xfff4e8), dk = m(0x7a4a22);
    g.add(sph(0.4, br, 0, 0.55, -0.05, 0.85, 0.8, 1.3));
    g.add(sph(0.3, br, 0, 0.95, 0.4));
    g.add(sph(0.18, wh, 0, 0.88, 0.62, 1, 0.8, 1.1));
    g.add(sph(0.06, m(0x1a1a24), 0, 0.93, 0.78));
    for (const s of [-1, 1]) g.add(sph(0.13, dk, s * 0.3, 0.95, 0.35, 0.6, 1.5, 0.9));
    eyes(g, 1.02, 0.62, 0.12, 0.045);
    legs(g, br, [-0.2, 0.2], [0.28, -0.38], 0.32, 0.08);
    g.add(cone(0.07, 0.4, br, 0, 0.8, -0.65)).rotation.x = -2.2;
    g.add(sph(0.1, m(0xff7a9a), 0, 0.74, 0.7, 0.8, 0.4, 1.2));
  },
  monkey(g) {
    const br = m(0x9a6a3a), tan = m(0xf0d0a0);
    g.add(sph(0.38, br, 0, 0.55, 0, 0.9, 1, 0.9));
    g.add(sph(0.3, br, 0, 1.05, 0.05));
    g.add(sph(0.2, tan, 0, 0.98, 0.25, 1.2, 0.9, 0.6));
    g.add(sph(0.05, m(0x3a2a1a), 0, 1.0, 0.36));
    eyes(g, 1.12, 0.27, 0.1, 0.04);
    for (const s of [-1, 1]) { g.add(sph(0.14, br, s * 0.33, 1.08, 0)); g.add(sph(0.09, tan, s * 0.33, 1.08, 0.05)); g.add(sph(0.1, br, s * 0.5, 0.45, 0.12, 0.8, 1.6, 0.8)); }
    g.add(sph(0.24, tan, 0, 0.5, 0.25, 0.9, 1, 0.5));
    legs(g, br, [-0.18, 0.18], [0.05], 0.3, 0.09);
    const tail = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 8, 16, Math.PI * 1.4), br);
    tail.position.set(0, 0.5, -0.4); tail.rotation.y = Math.PI / 2; g.add(tail);
  },
  cow(g) {
    const wh = m(0xfffaf0), blk = m(0x2a2a2a), pk = m(0xffb0b8);
    g.add(sph(0.45, wh, 0, 0.78, 0, 0.9, 0.85, 1.4));
    g.add(sph(0.18, blk, -0.15, 0.95, 0.1, 1, 1, 0.9)); g.add(sph(0.15, blk, 0.2, 0.7, -0.2, 1, 1, 0.9));
    g.add(sph(0.3, wh, 0, 1.0, 0.62));
    g.add(sph(0.2, pk, 0, 0.9, 0.85, 1.1, 0.8, 0.8));
    for (const s of [-1, 1]) { g.add(sph(0.04, m(0x1a1a24), s * 0.08, 0.92, 1.0)); g.add(cone(0.05, 0.2, m(0xf8e8c0), s * 0.2, 1.38, 0.62)).rotation.z = -s * 0.4; g.add(sph(0.11, blk, s * 0.32, 1.12, 0.6, 1.4, 0.6, 0.8)); }
    eyes(g, 1.12, 0.84, 0.15, 0.04);
    legs(g, wh, [-0.22, 0.22], [0.4, -0.45], 0.45, 0.09);
    g.add(cyl(0.025, 0.025, 0.5, wh, 0, 0.7, -0.7)).rotation.x = 0.3;
  },
  bear(g) {
    const br = m(0x8a5a3a), tan = m(0xe8c898);
    g.add(sph(0.46, br, 0, 0.55, 0, 1, 1, 0.9));
    g.add(sph(0.32, br, 0, 1.15, 0.05));
    g.add(sph(0.18, tan, 0, 1.08, 0.28, 1.1, 0.8, 0.8));
    g.add(sph(0.06, m(0x1a1a24), 0, 1.13, 0.42, 1.2, 0.8, 1));
    for (const s of [-1, 1]) { g.add(sph(0.12, br, s * 0.26, 1.42, 0)); g.add(sph(0.07, tan, s * 0.26, 1.42, 0.07)); g.add(sph(0.14, br, s * 0.45, 0.3, 0.25, 0.8, 1, 1.2)); }
    eyes(g, 1.22, 0.3, 0.11, 0.045);
    g.add(sph(0.3, tan, 0, 0.5, 0.35, 0.9, 1, 0.5));
    for (const s of [-1, 1]) g.add(sph(0.12, br, s * 0.42, 0.55, 0.15, 0.8, 1.6, 0.8));
  },
  mouse(g) {
    const gr = m(0xb8b8c8), pk = m(0xffb0c0);
    g.add(sph(0.32, gr, 0, 0.36, 0, 0.9, 0.85, 1.3));
    g.add(sph(0.22, gr, 0, 0.45, 0.35, 0.9, 0.9, 1.2));
    g.add(sph(0.05, pk, 0, 0.44, 0.58));
    for (const s of [-1, 1]) { g.add(sph(0.14, gr, s * 0.2, 0.68, 0.22, 1, 1, 0.3)); g.add(sph(0.09, pk, s * 0.2, 0.68, 0.25, 1, 1, 0.3)); }
    eyes(g, 0.52, 0.5, 0.09, 0.035);
    const tail = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.025, 6, 16, Math.PI * 1.2), pk);
    tail.position.set(0, 0.15, -0.55); tail.rotation.set(0, Math.PI / 2, 0); g.add(tail);
    legs(g, gr, [-0.15, 0.15], [0.15, -0.2], 0.12, 0.05);
  },
  carrot(g) {
    const o = cone(0.22, 0.95, m(0xff8a1a), 0, 0.5, 0); o.rotation.z = Math.PI; g.add(o);
    for (const x of [-0.07, 0, 0.07]) g.add(cone(0.06, 0.3, m(0x3aa84a), x, 1.15, 0)).rotation.z = x * 3;
  },
  bone(g) {
    const wh = m(0xfff4e0);
    g.add(cyl(0.1, 0.1, 0.8, wh, 0, 0.3, 0)).rotation.z = Math.PI / 2;
    for (const x of [-0.42, 0.42]) for (const z of [-0.1, 0.1]) g.add(sph(0.14, wh, x, 0.3, z));
  },
  grass(g) {
    for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2; const b = cone(0.07, 0.8 + (i % 3) * 0.15, m(i % 2 ? 0x4ac85a : 0x3aa84a), Math.cos(a) * 0.18, 0.4, Math.sin(a) * 0.18); b.rotation.z = Math.cos(a) * 0.3; b.rotation.x = Math.sin(a) * 0.3; g.add(b); }
  },
  honey(g) {
    g.add(cyl(0.32, 0.36, 0.55, m(0xffb81a, 0.2), 0, 0.3, 0));
    g.add(cyl(0.34, 0.34, 0.08, m(0x8a5a2a), 0, 0.6, 0));
    g.add(sph(0.13, m(0xffc83a, 0.2), 0.2, 0.55, 0.1, 1, 0.6, 1));
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.28), m(0xfff4d8)); lab.position.set(0, 0.32, 0.37); g.add(lab);
  },
  cheese(g) {
    const ch = m(0xffd23a, 0.5);
    const w = cyl(0.5, 0.5, 0.4, ch, 0, 0.25, 0); g.add(w);
    w.geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 3);
    w.rotation.y = 0.5;
    for (const [x, y, z] of [[0.1, 0.3, 0.3], [-0.2, 0.2, 0.2], [0.25, 0.45, 0], [-0.05, 0.46, -0.1]]) g.add(sph(0.07, m(0xe8a81a), x, y, z));
  },
  seeds(g) {
    for (let i = 0; i < 18; i++) g.add(sph(0.06, m(i % 3 ? 0xc8a050 : 0xe8d078), Math.cos(i * 2.4) * 0.28 * (0.4 + (i % 5) / 6), 0.07 + (i % 4) * 0.05, Math.sin(i * 2.4) * 0.28 * (0.4 + (i % 5) / 6), 1, 0.7, 1.4));
  },
  pomegranate(g) {
    const red = m(0xc8183a, 0.35);
    g.add(sph(0.42, red, 0, 0.45, 0));
    g.add(cyl(0.12, 0.16, 0.12, m(0x8a1228), 0, 0.88, 0));
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; g.add(cone(0.05, 0.14, m(0x8a1228), Math.cos(a) * 0.1, 0.98, Math.sin(a) * 0.1)); }
    g.add(sph(0.08, new THREE.MeshBasicMaterial({ color: 0xff8aa0 }), -0.15, 0.62, 0.34, 1, 1.3, 0.5));
  },
  giraffe(g) {
    const yel = m(0xffcf4a), br = m(0xb8782a);
    g.add(sph(0.38, yel, 0, 0.78, 0, 0.8, 0.8, 1.3));
    for (const [x, y, z] of [[0.2, 0.85, 0.1], [-0.2, 0.7, -0.2], [0.18, 0.7, -0.3], [-0.15, 0.9, 0.25]]) g.add(sph(0.09, br, x, y, z, 1, 1, 0.5));
    const neck = cyl(0.12, 0.17, 0.95, yel, 0, 1.35, 0.4); neck.rotation.x = 0.18; g.add(neck);
    g.add(sph(0.2, yel, 0, 1.88, 0.5, 0.9, 0.95, 1.3));
    g.add(sph(0.11, m(0xf0d098), 0, 1.82, 0.7, 1, 0.8, 1));
    for (const s of [-1, 1]) { g.add(cyl(0.02, 0.02, 0.2, br, s * 0.09, 2.1, 0.45)); g.add(sph(0.04, br, s * 0.09, 2.22, 0.45)); g.add(sph(0.07, yel, s * 0.2, 1.95, 0.4, 1.3, 0.6, 0.5)); }
    eyes(g, 1.92, 0.64, 0.12, 0.035);
    for (const s of [-1, 1]) g.add(sph(0.09, br, s * 0.06, 1.5, 0.45, 1, 1, 0.4));
    legs(g, yel, [-0.2, 0.2], [0.32, -0.38], 0.55, 0.07);
  },
  corn(g) {
    g.add(sph(0.26, m(0xffd21a, 0.4), 0, 0.55, 0, 1, 1.9, 1));
    for (let r = 0; r < 7; r++) for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2 + r * 0.4; g.add(sph(0.055, m(0xffbe0a, 0.4), Math.cos(a) * 0.25, 0.15 + r * 0.14, Math.sin(a) * 0.25)); }
    for (const a of [0.3, 2.4, 4.4]) { const l = cone(0.18, 0.7, m(0x4aa84a), Math.cos(a) * 0.2, 0.35, Math.sin(a) * 0.2); l.rotation.z = Math.cos(a) * 0.35; l.rotation.x = Math.sin(a) * 0.35; l.scale.z = 0.35; g.add(l); }
  },
  rocket(g) {
    const wh = m(0xf4f4ff, 0.3), red = m(0xe8302a, 0.4);
    g.add(cyl(0.26, 0.3, 1.0, wh, 0, 0.7, 0));
    g.add(cone(0.26, 0.45, red, 0, 1.43, 0));
    g.add(sph(0.12, m(0x4aa8ff, 0.1), 0, 0.85, 0.24, 1, 1, 0.5));
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2; const f = sph(0.2, red, Math.cos(a) * 0.3, 0.3, Math.sin(a) * 0.3, 0.4, 1.4, 1); f.rotation.y = -a; g.add(f); }
    g.add(cone(0.15, 0.4, new THREE.MeshBasicMaterial({ color: 0xffa81a }), 0, 0.02, 0)).rotation.x = Math.PI;
  },
  envelope(g) {
    // a paper envelope drawn on its front: the V of the flap, the folds and a red heart seal
    const c = document.createElement('canvas'); c.width = 256; c.height = 168;
    const x = c.getContext('2d');
    x.fillStyle = '#fff6e0'; x.fillRect(0, 0, 256, 168);
    x.strokeStyle = '#d8c8a0'; x.lineWidth = 4;
    x.beginPath(); x.moveTo(0, 0); x.lineTo(128, 96); x.lineTo(256, 0); x.stroke();
    x.beginPath(); x.moveTo(0, 168); x.lineTo(96, 80); x.moveTo(256, 168); x.lineTo(160, 80); x.stroke();
    x.fillStyle = '#e8304a'; x.beginPath(); x.arc(128, 96, 22, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#ffd0d8'; x.font = '900 28px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('♥', 128, 97);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const paper = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.7, 0.07), [m(0xf0e4c8), m(0xf0e4c8), m(0xf0e4c8), m(0xf0e4c8), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 }), m(0xe8dcc0)]);
    paper.position.y = 0.5; paper.rotation.x = -0.12; paper.castShadow = true;
    g.add(paper);
  },
  crow(g) {
    // a proper crow in profile: glossy blue-black body, big head with a thick beak, white-ringed eye, folded wings, a wedge tail
    const blk = m(0x1c1e2e, 0.25), wing = m(0x2a3050, 0.3), beakM = m(0x4a4a58, 0.4);
    g.add(sph(0.42, blk, 0, 0.62, 0, 0.85, 0.8, 1.35));
    g.add(sph(0.3, blk, 0, 1.0, 0.5));
    g.add(sph(0.13, beakM, 0, 0.93, 0.86, 0.9, 0.8, 1.9));
    for (const s of [-1, 1]) {
      g.add(sph(0.075, m(0xffffff, 0.2), s * 0.2, 1.07, 0.66));
      g.add(sph(0.04, m(0x000000, 0.1), s * 0.22, 1.07, 0.71));
      const w = sph(0.3, wing, s * 0.34, 0.62, -0.05, 0.38, 0.85, 1.5);
      w.rotation.z = -s * 0.25;
      g.add(w);
    }
    const tail = cone(0.2, 0.75, wing, 0, 0.5, -0.75, 4);
    tail.rotation.x = -1.7; tail.scale.set(1, 1, 0.3);
    g.add(tail);
    legs(g, m(0x3a3a48), [-0.1, 0.1], [0.05], 0.3, 0.03);
  },
  lemon(g) {
    const y = m(0xffe84a, 0.4);
    g.add(sph(0.4, y, 0, 0.4, 0, 1.25, 0.95, 0.95));
    g.add(sph(0.1, y, 0.5, 0.4, 0, 1, 0.8, 0.8)); g.add(sph(0.1, y, -0.5, 0.4, 0, 1, 0.8, 0.8));
    const l = sph(0.2, m(0x3aa84a), 0.1, 0.82, 0, 1.6, 0.25, 0.8); l.rotation.z = 0.4; g.add(l);
  },
  crescent(g) {
    const gold = new THREE.MeshStandardMaterial({ color: 0xffd84a, roughness: 0.3, emissive: 0xffb81a, emissiveIntensity: 0.35 });
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.17, 12, 28, Math.PI * 1.5), gold);
    t.position.y = 0.65; t.rotation.z = Math.PI * 0.75; t.castShadow = true; g.add(t);
    g.add(sph(0.12, gold, 0.55, 0.95, 0));
  },
  dove(g) {
    const wh = m(0xfffaf4, 0.5);
    g.add(sph(0.38, wh, 0, 0.5, 0, 0.9, 0.9, 1.25));
    g.add(sph(0.22, wh, 0, 0.92, 0.3));
    g.add(cone(0.06, 0.2, m(0xffa21a), 0, 0.9, 0.55)).rotation.x = Math.PI / 2;
    eyes(g, 0.97, 0.45, 0.1, 0.035);
    for (const s of [-1, 1]) { const w = sph(0.28, wh, s * 0.36, 0.78, -0.05, 0.4, 1.4, 1.1); w.rotation.z = -s * 0.5; g.add(w); }
    g.add(cone(0.16, 0.5, wh, 0, 0.5, -0.5)).rotation.x = -1.4;
  },
  bed(g) {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.25, 0.95), m(0xc8864a)).translateY(0.2));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.2, 0.88), m(0xfff4e8)).translateY(0.42));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.16, 0.9), m(0x4aa8ff)).translateX(0.18).translateY(0.55));
    g.add(sph(0.28, m(0xffffff), -0.5, 0.62, 0, 1.2, 0.5, 1.4));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.7, 0.95), m(0xa86a3a)).translateX(-0.75).translateY(0.5));
  },
  soap(g) {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.28, 0.45), m(0xff9ac8, 0.3)).translateY(0.2));
    for (const [x, y, z, r] of [[0.2, 0.6, 0.1, 0.18], [-0.15, 0.78, 0, 0.13], [0.35, 0.85, -0.1, 0.1], [-0.35, 0.55, 0.15, 0.1], [0.05, 1.0, 0.05, 0.09]]) g.add(sph(r, new THREE.MeshStandardMaterial({ color: 0xcfeeff, transparent: true, opacity: 0.6, roughness: 0.05 }), x, y, z));
  },
  bowl(g) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.5, 20, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x4aa8ff, roughness: 0.3, side: THREE.DoubleSide }));
    b.position.y = 0.55; g.add(b);
    g.add(cyl(0.5, 0.5, 0.03, m(0xffffff), 0, 0.55, 0));
    g.add(cyl(0.46, 0.46, 0.03, m(0xfff4d8), 0, 0.52, 0));
    for (let i = 0; i < 7; i++) g.add(sph(0.09, m(0xe8b04a), Math.cos(i * 2.1) * 0.25, 0.6, Math.sin(i * 2.1) * 0.25, 1, 0.7, 1));
    const sp = cyl(0.025, 0.025, 0.6, m(0xc8c8d0), 0.35, 0.75, 0.1); sp.rotation.z = -0.6; g.add(sp);
  },
  backpack(g) {
    g.add(sph(0.45, m(0xff5a4a, 0.5), 0, 0.5, 0, 1, 1.1, 0.7));
    g.add(sph(0.3, m(0xffb82a, 0.5), 0, 0.35, 0.28, 1, 0.8, 0.5));
    for (const s of [-1, 1]) g.add(new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 8, 14, Math.PI), m(0x3a3a4a))).position.set(s * 0.35, 0.55, 0.25);
    const h2 = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 14, Math.PI), m(0x3a3a4a)); h2.position.set(0, 1.0, 0); g.add(h2);
  },
  pot(g) {
    g.add(cyl(0.45, 0.4, 0.55, m(0xc8c8d4, 0.25), 0, 0.35, 0));
    g.add(cyl(0.47, 0.47, 0.06, m(0xe8e8f0, 0.25), 0, 0.66, 0));
    g.add(sph(0.08, m(0xff5a4a), 0, 0.74, 0));
    for (const s of [-1, 1]) g.add(new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 10), m(0x3a3a4a))).position.set(s * 0.5, 0.45, 0);
    for (const [x, z] of [[0.1, 0], [-0.12, 0.08], [0.02, -0.1]]) g.add(sph(0.13, new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }), x, 1.0 + x, z));
  },
  plate(g) {
    g.add(cyl(0.55, 0.45, 0.07, m(0xffffff, 0.25), 0, 0.2, 0));
    g.add(new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 8, 24), m(0x4aa8ff)).rotateX(Math.PI / 2).translateZ(-0.25));
    g.add(sph(0.2, m(0xd89a4a), 0.12, 0.35, 0.05, 1.1, 0.8, 1));
    g.add(sph(0.14, m(0x4aa84a), -0.2, 0.32, -0.08));
    g.add(sph(0.1, m(0xe8302a), -0.15, 0.3, 0.22));
    const f = cyl(0.015, 0.015, 0.6, m(0xc8c8d0), 0.7, 0.28, 0); f.rotation.x = Math.PI / 2; g.add(f);
  },
  tub(g) {
    const wh = m(0xffffff, 0.25);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.8), wh).translateY(0.15));
    for (const [w, d, x, z] of [[1.5, 0.1, 0, 0.4], [1.5, 0.1, 0, -0.4], [0.1, 0.8, 0.75, 0], [0.1, 0.8, -0.75, 0]]) g.add(new THREE.Mesh(new THREE.BoxGeometry(w, 0.55, d), wh)).position.set(x, 0.4, z);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.04, 0.7), m(0x8ad8ff, 0.1)).translateY(0.5));
    for (const [x, y, z, r] of [[-0.3, 0.62, 0.1, 0.16], [0.1, 0.7, -0.1, 0.2], [0.4, 0.62, 0.15, 0.13], [-0.1, 0.8, 0.05, 0.12]]) g.add(sph(r, new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 }), x, y, z));
    for (const x of [-0.6, 0.6]) g.add(cyl(0.06, 0.06, 0.12, m(0xc8c8d0), x, 0.05, 0.3));
  },
  toothbrush(g) {
    const h2 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 1.0, 0.08), m(0x4aa8ff)); h2.position.set(0, 0.55, 0); h2.rotation.z = 0.25; g.add(h2);
    const hd = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.34, 0.1), m(0x4aa8ff)); hd.position.set(-0.22, 1.06, 0); hd.rotation.z = 0.25; g.add(hd);
    const br = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.3, 0.1), m(0xffffff)); br.position.set(-0.24, 1.07, 0.08); br.rotation.z = 0.25; g.add(br);
    g.add(sph(0.09, m(0xffffff), -0.2, 1.14, 0.12, 1.5, 0.8, 0.8));
  },
};

/** A fresh model of [id]: one of the extra things above, else a toy from toys3d. */
export function makeThing(id) {
  const art = artThing(id); // the owner's reference art where the sheets have it
  if (art) return art;
  if (!BUILD[id]) return makeItem(id);
  const outer = new THREE.Group();
  const inner = new THREE.Group();
  // many models write `g.add(part).rotation.x = ...` meaning the PART; Group.add returns the group, which turned the whole
  // model upside down or sideways (the horse, the rocket, the fox...). Here add() returns the part it added.
  inner.add = function addPart(...objs) { THREE.Group.prototype.add.apply(this, objs); return objs[0]; };
  BUILD[id](inner);
  if (PROFILE.has(id)) inner.rotation.y = -0.85;
  inner.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  outer.add(inner);
  outer.userData.id = id;
  outer.userData.inner = inner;
  return outer;
}
const PROFILE = new Set(['crow', 'fox', 'camel', 'monkey', 'bear', 'mouse', 'dog', 'giraffe', 'sheep', 'hen', 'duck', 'cow', 'dove']);
export const THING_IDS = Object.keys(BUILD);
