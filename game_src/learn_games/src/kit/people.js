// Mama and Baba: friendly round cartoon grown-ups in 3D (code-drawn). They stand on the bank in the habits level and
// say what to do ("let's brush our teeth"). `p.act('talk')` makes them nod and gesture; `p.update(dt, time)` each frame.
import * as THREE from 'three';

const m = (c, r = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const sph = (r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 14), mat); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };

export function makePerson(who) {
  const mama = who === 'mama';
  const g = new THREE.Group();
  const skin = m(0xf0c090), blk = m(0x1a1a24, 0.3);
  const cloth = m(mama ? 0xe86aa0 : 0x3a7ae8, 0.7);
  const body = new THREE.Mesh(mama ? new THREE.CylinderGeometry(0.5, 0.85, 1.6, 20) : new THREE.CapsuleGeometry(0.62, 0.9, 8, 16), cloth);
  body.position.y = mama ? 1.0 : 1.3;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Group();
  head.position.y = 2.25;
  head.add(sph(0.52, skin));
  if (mama) {
    // a soft headscarf
    const sc = sph(0.58, m(0x7a5ac8, 0.8), 0, 0.04, -0.04, 1, 1.02, 1.02);
    head.add(sc);
    head.add(sph(0.44, skin, 0, -0.04, 0.2, 1, 1, 0.8));
  } else {
    head.add(sph(0.54, m(0x2a1a10, 0.9), 0, 0.12, -0.12, 1, 0.8, 1));
  }
  for (const s of [-1, 1]) {
    head.add(sph(0.06, blk, s * 0.2, 0.05, 0.46));
    head.add(sph(0.1, m(0xff9a9a), s * 0.33, -0.12, 0.4, 1, 0.7, 0.5));
  }
  const sm = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.025, 6, 14, Math.PI), m(0xb83a3a));
  sm.position.set(0, -0.2, 0.5); sm.rotation.z = Math.PI;
  head.add(sm);
  if (!mama) {
    // a friendly moustache
    head.add(sph(0.14, m(0x2a1a10), -0.1, -0.1, 0.5, 1.3, 0.5, 0.6));
    head.add(sph(0.14, m(0x2a1a10), 0.1, -0.1, 0.5, 1.3, 0.5, 0.6));
  }
  g.add(head);
  const arms = [];
  for (const s of [-1, 1]) {
    const a = new THREE.Group();
    a.position.set(s * (mama ? 0.62 : 0.72), mama ? 1.7 : 1.9, 0);
    const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.7, 6, 10), cloth);
    limb.position.y = -0.45;
    limb.castShadow = true;
    a.add(limb, sph(0.17, skin, 0, -1.0, 0));
    a.rotation.z = s * 0.25;
    g.add(a);
    arms.push(a);
  }
  if (!mama) for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.5, 6, 10), m(0x2a3a5a)); l.position.set(s * 0.28, 0.35, 0); l.castShadow = true; g.add(l); }
  g.userData = { head, arms, act: null, t: 0 };
  g.act = (name) => { g.userData.act = name; g.userData.t = 0; };
  g.update = (dt, time) => {
    const u = g.userData;
    u.t += dt;
    head.rotation.z = Math.sin(time * 1.1) * 0.03;
    let raise = 0;
    if (u.act === 'talk' && u.t < 2.4) { head.rotation.x = Math.sin(u.t * 7) * 0.06; raise = 0.9 + Math.sin(u.t * 6) * 0.25; } else head.rotation.x *= 0.9;
    arms[1].rotation.z += (0.25 + raise - arms[1].rotation.z) * Math.min(1, dt * 10);
    g.position.y = Math.sin(time * 1.6) * 0.02;
  };
  return g;
}
