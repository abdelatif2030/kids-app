// The two heroes of the learning world, drawn in 3D after the owner's master reference sheet (2026-11-12): a boy with curly
// dark-brown hair, a yellow hoodie with a star, a blue backpack, jeans and red sneakers; a girl with a brown ponytail and a
// pink bow, a pink hoodie with a flower, a blue skirt and pink sneakers. Big brown eyes, rosy cheeks, a warm smile.
// `kid.act(name)` plays an action (wave, clap, jump, think, point, celebrate, sad, talk); `kid.face(name)` sets the
// expression (happy, excited, think, surprised, sad); `kid.setLook({hair, cloth})` changes the colours; `kid.update(dt, t)`.
import * as THREE from 'three';
import { shapeGeo } from './shapes3d.js';

const m = (c, r = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const sph = (r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 16), mat); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };
const cap = (r, hh, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.CapsuleGeometry(r, hh, 6, 12), mat); o.position.set(x, y, z); o.castShadow = true; return o; };

export const HAIR_COLORS = [0x3a1e12, 0x14110f, 0x8a5a32, 0xc8501a, 0xe8c050];
export const CLOTH_COLORS = { boy: [0xffc81a, 0x3a9ae8, 0x4ac85a, 0xe8502a, 0x9a5ad8], girl: [0xff7ab8, 0x9a5ad8, 0x3a9ae8, 0xffc81a, 0x4ac85a] };

export function makeKid(kind) {
  const girl = kind === 'girl';
  const g = new THREE.Group();
  const skin = m(0xf2c090, 0.7), blk = m(0x24160e, 0.3), white = m(0xffffff, 0.4);
  const hairM = m(girl ? 0x6a3a22 : 0x3a1e12, 0.85);
  const clothM = m(girl ? 0xff7ab8 : 0xffc81a, 0.75);
  const pantsM = m(0x3a6ab8, 0.8), skirtM = m(0x3a8ae8, 0.8);
  const shoeM = m(girl ? 0xff6aa8 : 0xe8302a, 0.5);
  // legs, skirt and shoes
  const legs = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(s * 0.17, 0.62, 0);
    leg.add(cap(0.14, 0.34, girl ? skin : pantsM, 0, -0.2, 0));
    if (girl) leg.add(sph(0.15, white, 0, -0.5, 0, 1, 0.6, 1));
    leg.add(sph(0.2, shoeM, 0, -0.62, 0.07, 1, 0.65, 1.45));
    leg.add(sph(0.2, white, 0, -0.7, 0.07, 1.02, 0.3, 1.47));
    g.add(leg);
    legs.push(leg);
  }
  if (girl) {
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.58, 0.42, 24), skirtM);
    skirt.position.y = 0.72;
    skirt.castShadow = true;
    g.add(skirt);
  }
  // body: a hoodie with a hood ring and an emblem
  const body = sph(0.5, clothM, 0, 1.05, 0, 1, 1.05, 0.85);
  g.add(body);
  const hood = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.1, 10, 24), clothM);
  hood.position.set(0, 1.5, -0.02); hood.rotation.x = Math.PI / 2.4; hood.castShadow = true;
  g.add(hood);
  let emblem;
  if (girl) {
    emblem = new THREE.Group();
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; emblem.add(sph(0.06, white, Math.cos(a) * 0.085, Math.sin(a) * 0.085, 0, 1, 1, 0.4)); }
    emblem.add(sph(0.045, m(0xffc81a), 0, 0, 0.02, 1, 1, 0.5));
  } else {
    emblem = new THREE.Mesh(shapeGeo('star', 0.1, 0.02), m(0xffe8a0, 0.5));
    emblem.scale.setScalar(0.18);
  }
  emblem.position.set(0, 1.05, 0.42);
  g.add(emblem);
  // backpack straps and the backpack behind
  const packM = m(girl ? 0xff9ac8 : 0x3a7ae8, 0.6);
  const pack = sph(0.36, packM, 0, 1.0, -0.42, 1, 1.15, 0.7);
  g.add(pack);
  for (const s of [-1, 1]) { const strap = cap(0.035, 0.5, packM, s * 0.25, 1.1, 0.3); strap.rotation.z = s * 0.15; g.add(strap); }
  // head
  const head = new THREE.Group();
  head.position.y = 1.95;
  head.add(sph(0.62, skin, 0, 0, 0, 1.05, 1, 0.98));
  for (const s of [-1, 1]) {
    head.add(sph(0.1, skin, s * 0.62, -0.02, 0, 0.6, 1, 0.8)); // ears
    const eye = new THREE.Group();
    eye.position.set(s * 0.22, 0.02, 0.55);
    eye.add(sph(0.13, white, 0, 0, 0, 1, 1.15, 0.5));
    const iris = sph(0.1, m(0x4a2a14, 0.3), 0, -0.01, 0.05, 1, 1.1, 0.5);
    iris.add(sph(0.05, blk, 0, 0, 0.04));
    iris.add(sph(0.03, new THREE.MeshBasicMaterial({ color: 0xffffff }), 0.03, 0.04, 0.07));
    eye.add(iris);
    head.add(eye);
    head.add(sph(0.1, m(0xff9a9a, 0.9), s * 0.4, -0.2, 0.46, 1, 0.65, 0.5));
    const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.025, 0.14, 4, 6), hairM);
    brow.rotation.z = Math.PI / 2 + s * 0.1; brow.position.set(s * 0.22, 0.24, 0.55);
    head.add(brow);
    g.userData['brow' + (s < 0 ? 'L' : 'R')] = brow;
    g.userData['eye' + (s < 0 ? 'L' : 'R')] = eye;
  }
  head.add(sph(0.05, m(0xe8a070, 0.7), 0, -0.07, 0.62, 1, 0.8, 0.8));
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), m(0x8a1a1a, 0.5));
  mouth.position.set(0, -0.28, 0.55); mouth.scale.set(1, 0.9, 0.5); mouth.rotation.x = 0.1;
  head.add(mouth);
  const tongue = sph(0.06, m(0xff7a8a), 0, -0.33, 0.58, 1.2, 0.6, 0.6);
  head.add(tongue);
  // hair
  const hair = new THREE.Group();
  if (girl) {
    hair.add(sph(0.66, hairM, 0, 0.1, -0.06, 1.05, 0.95, 1));
    for (const s of [-1, 1]) hair.add(sph(0.2, hairM, s * 0.55, -0.12, 0.05, 0.8, 1.5, 0.9));
    hair.add(sph(0.5, hairM, 0, 0.46, 0.22, 1.1, 0.5, 0.7)); // fringe
    // a ponytail swinging at the back with a pink bow
    const tail = new THREE.Group();
    tail.position.set(0.4, 0.5, -0.45);
    for (let i = 0; i < 4; i++) tail.add(sph(0.2 - i * 0.025, hairM, 0.15 + i * 0.12, -0.15 - i * 0.2, -0.05, 1, 1.4, 1));
    hair.add(tail);
    g.userData.tail = tail;
    const bow = new THREE.Group();
    bow.position.set(0.36, 0.62, 0.1);
    for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.26, 10), m(0xff4a9a, 0.4)); w.rotation.z = s * Math.PI / 2; w.position.x = s * 0.14; bow.add(w); }
    bow.add(sph(0.06, m(0xff4a9a, 0.4)));
    hair.add(bow);
  } else {
    // a mop of dark curls
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2, r = 0.5 + (i % 2) * 0.07;
      hair.add(sph(0.2 + (i % 3) * 0.02, hairM, Math.cos(a) * r, 0.34 + (i % 2) * 0.12, Math.sin(a) * r * 0.9 - 0.08));
    }
    for (let i = 0; i < 6; i++) hair.add(sph(0.22, hairM, (i - 2.5) * 0.17, 0.62, 0.08 - Math.abs(i - 2.5) * 0.04));
    hair.add(sph(0.2, hairM, -0.28, 0.5, 0.42)); hair.add(sph(0.18, hairM, 0.1, 0.55, 0.45)); hair.add(sph(0.16, hairM, 0.34, 0.48, 0.38));
  }
  head.add(hair);
  g.add(head);
  // arms
  const arms = [];
  for (const s of [-1, 1]) {
    const a = new THREE.Group();
    a.position.set(s * 0.52, 1.35, 0);
    a.add(cap(0.13, 0.3, clothM, 0, -0.25, 0));
    a.add(sph(0.14, skin, 0, -0.55, 0));
    a.rotation.z = s * 0.35;
    g.add(a);
    arms.push(a);
  }
  g.userData.arms = arms;
  g.userData.legs = legs;
  g.userData.head = head;
  g.userData.mouth = mouth;
  g.userData.tongue = tongue;
  g.userData.parts = { hair: hairM, cloth: clothM };
  g.userData.state = { act: null, t: 0, lookX: 0, blink: 2, face: 'happy', base: 0 };

  g.face = (name) => {
    const u = g.userData;
    u.state.face = name;
    const open = { happy: [1, 0.9, 1], excited: [1.2, 1.4, 1], think: [0.5, 0.35, 1], surprised: [0.6, 1.5, 1], sad: [0.8, 0.5, -1] }[name] || [1, 0.9, 1];
    u.mouth.scale.set(open[0], open[1] * 0.9, 0.5);
    u.mouth.rotation.x = open[2] < 0 ? Math.PI + 0.1 : 0.1; // a soft frown flips the smile
    u.mouth.position.y = open[2] < 0 ? -0.36 : -0.28;
    u.tongue.visible = name === 'happy' || name === 'excited';
    const tilt = { happy: 0.1, excited: 0.2, think: -0.25, surprised: 0.45, sad: -0.3 }[name] || 0.1;
    u.browL.rotation.z = Math.PI / 2 - 0.1 + tilt * (name === 'think' ? 1.5 : 0.6);
    u.browR.rotation.z = Math.PI / 2 + 0.1 - tilt * (name === 'think' ? 0.2 : 0.6);
    u.browL.position.y = u.browR.position.y = 0.24 + (name === 'surprised' ? 0.1 : name === 'sad' ? -0.02 : 0);
  };
  g.setLook = ({ hair: hc, cloth: cc }) => { if (hc != null) hairM.color.setHex(hc); if (cc != null) clothM.color.setHex(cc); };
  g.act = (name) => { g.userData.state.act = name; g.userData.state.t = 0; if (name === 'think') g.face('think'); else if (name === 'sad') g.face('sad'); else if (name === 'celebrate' || name === 'jump') g.face('excited'); else g.face('happy'); };
  g.look = (x) => { g.userData.state.lookX = x; };
  g.update = (dt, time) => {
    const u = g.userData, S = u.state;
    S.t += dt;
    const [aL, aR] = arms;
    let by = Math.sin(time * 1.8) * 0.015;
    let zL = -0.35 + Math.sin(time * 1.5) * 0.02, zR = 0.35 - Math.sin(time * 1.5) * 0.02, xL = 0, xR = 0, hz = Math.sin(time * 0.9) * 0.03, hx = 0;
    const k = S.t;
    switch (S.act) {
      case 'wave': if (k < 2.4) { zR = 2.6; xR = 0; zR += Math.sin(k * 12) * 0.35; hz = 0.08; } break;
      case 'clap': if (k < 1.8) { const c = Math.abs(Math.sin(k * 11)); zL = -0.5 - c * 0.5; zR = 0.5 + c * 0.5; xL = xR = -1.1; by = Math.abs(Math.sin(k * 5.5)) * 0.06; } break;
      case 'jump': if (k < 0.9) { by = Math.sin(k / 0.9 * Math.PI) * 0.55; zL = -2.4; zR = 2.4; } break;
      case 'celebrate': if (k < 2.6) { by = Math.abs(Math.sin(k * 5)) * 0.5; zL = -2.5 + Math.sin(k * 14) * 0.3; zR = 2.5 - Math.sin(k * 14) * 0.3; g.rotation.y = Math.sin(k * 4) * 0.5; hz = Math.sin(k * 9) * 0.1; } else g.rotation.y *= 0.9; break;
      case 'think': if (k < 2.6) { zR = 1.0; xR = -2.0; hx = 0.05; hz = 0.18 + Math.sin(k * 3) * 0.05; } break;
      case 'point': if (k < 1.8) { zR = 1.55; xR = -0.3; hz = -0.1; } break;
      case 'talk': if (k < 2.4) { by = Math.sin(k * 8) * 0.02; zR = 0.9 + Math.sin(k * 6) * 0.2; hx = Math.sin(k * 7) * 0.05; } break;
      case 'run': if (k < 1.4) { by = Math.abs(Math.sin(k * 15)) * 0.14; zL = -0.9 + Math.sin(k * 15) * 0.6; zR = 0.9 - Math.sin(k * 15) * 0.6; xL = Math.sin(k * 15) * 0.7; xR = -Math.sin(k * 15) * 0.7; hx = 0.08; } break;
      case 'sad': if (k < 2.2) { hx = 0.18; zL = -0.15; zR = 0.15; } break;
      default:
    }
    if (S.act && k > 2.8) { S.act = null; g.face('happy'); }
    g.position.y = S.base + by;
    const ease = Math.min(1, dt * 14);
    aL.rotation.z += (zL - aL.rotation.z) * ease; aR.rotation.z += (zR - aR.rotation.z) * ease;
    aL.rotation.x += (xL - aL.rotation.x) * ease; aR.rotation.x += (xR - aR.rotation.x) * ease;
    u.head.rotation.z += (hz - u.head.rotation.z) * Math.min(1, dt * 10);
    u.head.rotation.x += (hx - u.head.rotation.x) * Math.min(1, dt * 10);
    const ty = Math.max(-0.6, Math.min(0.6, (S.lookX - g.position.x) * 0.07));
    if (S.act !== 'celebrate') u.head.rotation.y += (ty - u.head.rotation.y) * Math.min(1, dt * 6);
    if (u.tail) u.tail.rotation.z = Math.sin(time * 3) * 0.12 + (S.act === 'celebrate' ? Math.sin(time * 14) * 0.3 : 0);
    for (let i = 0; i < 2; i++) u.legs[i].rotation.x = S.act === 'jump' || S.act === 'celebrate' ? Math.sin(time * 14 + i * Math.PI) * 0.25 : S.act === 'run' ? Math.sin(time * 15 + i * Math.PI) * 0.8 : 0;
    S.blink -= dt;
    const closed = S.blink < 0.1 && S.blink > 0;
    if (S.blink <= 0) S.blink = 2 + Math.random() * 3;
    u.eyeL.scale.y = u.eyeR.scale.y = closed ? 0.12 : 1;
  };
  g.face('happy');
  return g;
}
