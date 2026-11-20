// Concept pictures for the levels «المتضادات» and friends (2026-11-20), drawn from shapes in code like the other 3D things (no files, no network):
// a ball on / under / beside a table, a ball in / out of a box, a glass full / half / empty, a door open / closed, arrows up / down / right / left,
// and a plate with 1-9 apples (more / fewer). Each is a builder (group) that stands on y = 0, about one unit tall, and faces +z.
// The ids are generated: rel_<on|under|beside>_<colour>, box_<in|out>_<colour>, cup_<full|half|empty>_<colour>, door_<open|closed>_<colour>,
// arrow_<up|down|right|left>_<colour>, plate_<1..9>.
import * as THREE from 'three';

export const CONCEPT_COLORS = { red: 0xe8302a, blue: 0x2a8ae8, yellow: 0xffd21a, green: 0x2aa84a, orange: 0xff8a1a, purple: 0x9a4ad8 };
const m = (c, r = 0.45) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const glass = () => new THREE.MeshStandardMaterial({ color: 0xdff4ff, roughness: 0.1, transparent: true, opacity: 0.38, depthWrite: false });
const add = (g, geo, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
const WOOD = 0xc08a4a;
const R = 0.17; // the ball

function ball(g, col, x, y, z) {
  add(g, new THREE.SphereGeometry(R, 22, 16), m(col, 0.3), x, y, z);
  add(g, new THREE.SphereGeometry(R * 0.28, 10, 8), m(0xffffff, 0.2), x - R * 0.35, y + R * 0.4, z + R * 0.7); // shine
}
function table(g) {
  add(g, new THREE.BoxGeometry(1.1, 0.1, 0.7), m(WOOD), 0, 0.62, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, new THREE.CylinderGeometry(0.05, 0.045, 0.6, 10), m(0x9a6a32), sx * 0.46, 0.3, sz * 0.26);
}
function openBox(g) {
  const w = m(WOOD);
  add(g, new THREE.BoxGeometry(0.8, 0.05, 0.8), m(0x9a6a32), 0, 0.025, 0);
  add(g, new THREE.BoxGeometry(0.8, 0.34, 0.05), w, 0, 0.17, 0.375);
  add(g, new THREE.BoxGeometry(0.8, 0.34, 0.05), w, 0, 0.17, -0.375);
  add(g, new THREE.BoxGeometry(0.05, 0.34, 0.7), w, 0.375, 0.17, 0);
  add(g, new THREE.BoxGeometry(0.05, 0.34, 0.7), w, -0.375, 0.17, 0);
}
function cup(g, col, level) {
  add(g, new THREE.CylinderGeometry(0.34, 0.27, 0.85, 24, 1, true), glass(), 0, 0.45, 0);
  add(g, new THREE.CylinderGeometry(0.27, 0.27, 0.04, 24), m(0xbfe6ff, 0.2), 0, 0.03, 0);
  add(g, new THREE.TorusGeometry(0.34, 0.025, 8, 28), m(0xffffff, 0.2), 0, 0.875, 0).rotation.x = Math.PI / 2;
  if (level > 0) {
    const h = 0.78 * level;
    const top = 0.27 + (0.34 - 0.27) * (h / 0.85);
    add(g, new THREE.CylinderGeometry(top, 0.265, h, 24), m(col, 0.15), 0, 0.05 + h / 2, 0);
  }
}
function door(g, col, open) {
  add(g, new THREE.BoxGeometry(0.95, 1.4, 0.1), m(0x8a5a32), 0, 0.7, 0); // the frame
  if (open) {
    add(g, new THREE.BoxGeometry(0.75, 1.25, 0.06), m(0x2a2036, 0.9), 0, 0.68, 0.04); // the dark room
    const hinge = new THREE.Group();
    hinge.position.set(-0.37, 0, 0.08);
    hinge.rotation.y = -1.0; // swung towards the viewer
    add(hinge, new THREE.BoxGeometry(0.72, 1.22, 0.06), m(col, 0.4), 0.36, 0.68, 0);
    add(hinge, new THREE.SphereGeometry(0.05, 10, 8), m(0xffd23a, 0.25), 0.62, 0.65, 0.05);
    g.add(hinge);
  } else {
    add(g, new THREE.BoxGeometry(0.75, 1.25, 0.08), m(col, 0.4), 0, 0.68, 0.07);
    add(g, new THREE.BoxGeometry(0.5, 0.45, 0.02), m(0xffffff, 0.5), 0, 0.98, 0.115).material.opacity = 1;
    add(g, new THREE.SphereGeometry(0.055, 10, 8), m(0xffd23a, 0.25), 0.26, 0.62, 0.13);
  }
}
function arrow(g, col, dir) {
  add(g, new THREE.CylinderGeometry(0.52, 0.52, 0.08, 32), m(0xffffff, 0.35), 0, 0.55, 0).rotation.x = Math.PI / 2;
  const a = new THREE.Group();
  add(a, new THREE.CylinderGeometry(0.1, 0.1, 0.46, 14), m(col, 0.3), 0, -0.1, 0);
  add(a, new THREE.ConeGeometry(0.24, 0.32, 18), m(col, 0.3), 0, 0.26, 0);
  a.position.set(0, 0.55, 0.08);
  a.rotation.z = { up: 0, left: Math.PI / 2, down: Math.PI, right: -Math.PI / 2 }[dir];
  g.add(a);
}
const SPOTS = [[0, 0], [-0.2, -0.12], [0.2, 0.12], [-0.2, 0.14], [0.2, -0.14], [0, -0.26], [0, 0.26], [-0.34, 0], [0.34, 0]];
function plate(g, n) {
  add(g, new THREE.CylinderGeometry(0.55, 0.42, 0.07, 32), m(0xffffff, 0.3), 0, 0.035, 0);
  add(g, new THREE.TorusGeometry(0.55, 0.03, 8, 32), m(0xffd23a, 0.3), 0, 0.075, 0).rotation.x = Math.PI / 2;
  const pos = n <= 5 ? [[0, 0], [-0.22, 0], [0.22, 0], [0, -0.22], [0, 0.22]].slice(0, n) : SPOTS.slice(0, n);
  const p = n === 1 ? [[0, 0]] : n === 2 ? [[-0.2, 0], [0.2, 0]] : n === 3 ? [[-0.25, 0.1], [0.25, 0.1], [0, -0.2]] : n === 4 ? [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]] : pos;
  for (const [x, z] of p) {
    add(g, new THREE.SphereGeometry(0.13, 16, 12), m(0xe8302a, 0.35), x, 0.2, z);
    add(g, new THREE.CylinderGeometry(0.01, 0.012, 0.07, 6), m(0x6a3a1a), x, 0.34, z);
  }
}

export const CONCEPTS = {};
for (const [name, hex] of Object.entries(CONCEPT_COLORS)) {
  CONCEPTS[`rel_on_${name}`] = (g) => { table(g); ball(g, hex, 0, 0.67 + R, 0); };
  CONCEPTS[`rel_under_${name}`] = (g) => { table(g); ball(g, hex, 0, R, 0.05); };
  CONCEPTS[`rel_beside_${name}`] = (g) => { table(g); ball(g, hex, 0.86, R, 0.05); };
  CONCEPTS[`box_in_${name}`] = (g) => { openBox(g); ball(g, hex, 0, 0.05 + R, 0); };
  CONCEPTS[`box_out_${name}`] = (g) => { openBox(g); ball(g, hex, 0.72, R, 0.1); };
  CONCEPTS[`cup_full_${name}`] = (g) => cup(g, hex, 1);
  CONCEPTS[`cup_half_${name}`] = (g) => cup(g, hex, 0.5);
  CONCEPTS[`cup_empty_${name}`] = (g) => cup(g, hex, 0);
  CONCEPTS[`door_open_${name}`] = (g) => door(g, hex, true);
  CONCEPTS[`door_closed_${name}`] = (g) => door(g, hex, false);
  for (const d of ['up', 'down', 'right', 'left']) CONCEPTS[`arrow_${d}_${name}`] = (g) => arrow(g, hex, d);
}
for (let n = 1; n <= 9; n++) CONCEPTS[`plate_${n}`] = (g) => plate(g, n);
export const CONCEPT_IDS = Object.keys(CONCEPTS);
