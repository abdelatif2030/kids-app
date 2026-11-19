// Small 3D things built from primitives (no model files).
import * as THREE from 'three';

export const GRP_COL = [0xe0405a, 0x2ec4d6, 0x3ec46a, 0xa05ae0];
export const GRP_CSS = ['#e0405a', '#2ec4d6', '#3ec46a', '#a05ae0'];

const geo = {
  sphere: new THREE.SphereGeometry(0.5, 16, 12), cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 18), box: new THREE.BoxGeometry(1, 1, 1),
  cone: new THREE.ConeGeometry(0.5, 1, 12), torus: new THREE.TorusGeometry(0.5, 0.12, 8, 20), plane: new THREE.PlaneGeometry(1, 1),
};
const mats = new Map();
export const M = (c, em = 0, extra = {}) => { const k = `${c}|${em}|${JSON.stringify(extra)}`; if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: c, emissive: em, ...extra })); return mats.get(k); };
export function mesh(g, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
export { geo };

/** Merges quads into one BufferGeometry (used for the static floor, carpet and walls). */
export class Mesher {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.idx = []; }
  quad(a, b, c, d, n, uvs = [[0, 0], [1, 0], [1, 1], [0, 1]]) {
    const i = this.pos.length / 3;
    [a, b, c, d].forEach((v, k) => { this.pos.push(v[0], v[1], v[2]); this.nor.push(n[0], n[1], n[2]); this.uv.push(uvs[k][0], uvs[k][1]); });
    this.idx.push(i, i + 1, i + 2, i, i + 2, i + 3);
  }
  get empty() { return !this.pos.length; }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    return g;
  }
}

export function makeExplorer() {
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  const skin = M(0xf0be88); const shirt = M(0x6aa0c8); const khaki = M(0xb98a45); const dark = M(0x2a1a10); const red = M(0xd8383a);
  body.add(mesh(geo.cyl, shirt, 0, 0.42, 0, 0.36, 0.34, 0.3)); // torso
  body.add(mesh(geo.cyl, red, 0, 0.58, 0, 0.38, 0.07, 0.32)); // scarf
  body.add(mesh(geo.box, M(0x8a5a2a), 0, 0.42, -0.2, 0.26, 0.3, 0.12)); // backpack
  const head = new THREE.Group(); head.position.set(0, 0.8, 0); body.add(head);
  head.add(mesh(geo.sphere, skin, 0, 0, 0, 0.42, 0.4, 0.4));
  head.add(mesh(geo.sphere, dark, -0.09, 0.0, 0.17, 0.07, 0.09, 0.05), mesh(geo.sphere, dark, 0.09, 0.0, 0.17, 0.07, 0.09, 0.05));
  head.add(mesh(geo.sphere, M(0xe88a7a), 0, -0.07, 0.18, 0.1, 0.05, 0.05));
  head.add(mesh(geo.cyl, khaki, 0, 0.13, 0, 0.62, 0.04, 0.62)); // hat brim
  head.add(mesh(geo.sphere, khaki, 0, 0.14, 0, 0.4, 0.34, 0.4)); // dome
  head.add(mesh(geo.cyl, red, 0, 0.15, 0, 0.42, 0.06, 0.42)); // band
  g.userData.legL = new THREE.Group(); g.userData.legR = new THREE.Group();
  for (const [grp, x] of [[g.userData.legL, -0.09], [g.userData.legR, 0.09]]) { grp.position.set(x, 0.26, 0); grp.add(mesh(geo.cyl, M(0x6a4a2a), 0, -0.1, 0, 0.12, 0.2, 0.12), mesh(geo.box, dark, 0, -0.2, 0.04, 0.14, 0.07, 0.2)); body.add(grp); }
  g.userData.armL = new THREE.Group(); g.userData.armR = new THREE.Group();
  g.userData.armL.position.set(-0.22, 0.52, 0); g.userData.armL.add(mesh(geo.cyl, shirt, 0, -0.1, 0, 0.1, 0.22, 0.1), mesh(geo.sphere, skin, 0, -0.22, 0, 0.1, 0.1, 0.1));
  g.userData.armR.position.set(0.22, 0.52, 0); g.userData.armR.add(mesh(geo.cyl, shirt, 0, -0.1, 0, 0.1, 0.22, 0.1), mesh(geo.sphere, skin, 0, -0.22, 0, 0.1, 0.1, 0.1));
  body.add(g.userData.armL, g.userData.armR);
  // the torch in the right hand
  const torch = new THREE.Group(); torch.position.set(0.3, 0.42, 0.12); body.add(torch);
  torch.add(mesh(geo.cyl, M(0x6a4018), 0, 0.12, 0, 0.05, 0.4, 0.05));
  const fl = mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xffb030 }), 0, 0.42, 0, 0.14, 0.26, 0.14); torch.add(fl);
  const fl2 = mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xfff0a0 }), 0, 0.39, 0, 0.08, 0.16, 0.08); torch.add(fl2);
  g.userData.flame = [fl, fl2]; g.userData.torch = torch; g.userData.head = head; g.userData.body = body;
  return g;
}

export function makeBlock(blockTex) {
  const g = new THREE.Group();
  const m = new THREE.MeshLambertMaterial({ map: blockTex });
  g.add(mesh(geo.box, m, 0, 0.42, 0, 0.9, 0.84, 0.9));
  return g;
}

export function makeKey() {
  const g = new THREE.Group();
  const gold = M(0xf4c430, 0x6a4a00);
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.05, 8, 20), gold); loop.position.y = 0.36; g.add(loop);
  g.add(mesh(geo.box, gold, 0, 0.0, 0, 0.09, 0.42, 0.07), mesh(geo.box, gold, 0, 0.1, 0, 0.34, 0.08, 0.07));
  g.userData.pivot = g;
  return g;
}

export function makeBrazier() {
  const g = new THREE.Group();
  const stone = M(0x8a7a66);
  g.add(mesh(geo.cyl, stone, 0, 0.1, 0, 0.5, 0.2, 0.5), mesh(geo.cyl, stone, 0, 0.42, 0, 0.18, 0.5, 0.18), mesh(geo.cyl, M(0x5a4a3a), 0, 0.72, 0, 0.52, 0.18, 0.52), mesh(geo.cyl, M(0x1a0f08), 0, 0.82, 0, 0.42, 0.02, 0.42));
  const flame = new THREE.Group(); flame.position.y = 0.84;
  flame.add(mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xff8a20 }), 0, 0.22, 0, 0.36, 0.55, 0.36), mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xffe070 }), 0, 0.18, 0, 0.2, 0.34, 0.2));
  g.add(flame); g.userData.flame = flame; flame.visible = false;
  return g;
}

export function makePlate(tex, col) {
  const g = new THREE.Group();
  g.add(mesh(geo.cyl, M(0x5a4a38), 0, 0.01, 0, 0.9, 0.04, 0.9));
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.06, 28), [new THREE.MeshLambertMaterial({ color: col, emissive: col, emissiveIntensity: 0.25 }), new THREE.MeshLambertMaterial({ map: tex, emissive: 0x553300, emissiveIntensity: 0.6 }), new THREE.MeshLambertMaterial({ color: col })]);
  top.position.y = 0.06; g.add(top); g.userData.top = top;
  const glow = new THREE.Mesh(geo.plane, new THREE.MeshBasicMaterial({ color: 0xffe080, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.12; glow.scale.set(1.5, 1.5, 1); g.add(glow); g.userData.glow = glow;
  return g;
}

export function makeDoor(tex, col) {
  const g = new THREE.Group();
  const slab = mesh(geo.box, new THREE.MeshLambertMaterial({ map: tex }), 0, 0.55, 0, 0.98, 1.1, 0.98); g.add(slab);
  g.add(mesh(geo.box, M(col, 0), 0, 1.14, 0, 1.0, 0.1, 1.0));
  g.userData.slab = slab;
  return g;
}

export function makeExit(glowTex) {
  const g = new THREE.Group();
  const gold = M(0xf0c040, 0x553a00); const stone = M(0x9a8466);
  g.add(mesh(geo.box, stone, -0.42, 0.7, -0.05, 0.16, 1.4, 0.3), mesh(geo.box, stone, 0.42, 0.7, -0.05, 0.16, 1.4, 0.3), mesh(geo.box, gold, 0, 1.45, -0.05, 1.1, 0.18, 0.34));
  const disc = mesh(geo.cyl, gold, 0, 1.7, -0.05, 0.3, 0.05, 0.3); disc.rotation.x = Math.PI / 2; g.add(disc);
  const portal = new THREE.Mesh(geo.plane, new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xfff0b0 }));
  portal.position.set(0, 0.7, -0.02); portal.scale.set(1.5, 1.7, 1); g.add(portal);
  const floorGlow = new THREE.Mesh(geo.plane, new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffe080 }));
  floorGlow.rotation.x = -Math.PI / 2; floorGlow.position.y = 0.03; floorGlow.scale.set(1.8, 1.8, 1); g.add(floorGlow);
  g.userData.portal = portal; g.userData.floorGlow = floorGlow;
  return g;
}

export function makeArrow(tex) {
  const m = new THREE.Mesh(geo.plane, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  return m;
}

export function makePit() {
  const g = new THREE.Group();
  const dark = new THREE.MeshLambertMaterial({ color: 0x120a06 });
  const side = new THREE.MeshLambertMaterial({ color: 0x4a3420 });
  g.add(mesh(geo.box, dark, 0, -0.95, 0, 1, 0.1, 1));
  g.add(mesh(geo.box, side, 0, -0.45, -0.49, 1, 0.9, 0.02), mesh(geo.box, side, 0, -0.45, 0.49, 1, 0.9, 0.02), mesh(geo.box, side, -0.49, -0.45, 0, 0.02, 0.9, 1), mesh(geo.box, side, 0.49, -0.45, 0, 0.02, 0.9, 1));
  return g;
}
