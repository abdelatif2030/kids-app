// Teacher Boom, a friendly cartoon owl in 3D (code-drawn): round brown body, cream belly, big glasses, a graduation cap,
// wings that point, toss and clap. He stands on the bank of the games and is the one who "picks" and "arranges" the
// pictures. `owl.act(name)` plays a short action; `owl.look(x)` turns his head toward a world x; `owl.update(dt, time)`
// must be called every frame.
import * as THREE from 'three';

const m = (c, r = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const sph = (r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 16), mat); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };

export function makeOwl() {
  const g = new THREE.Group();
  const brown = m(0x3a6ad8), tan = m(0x2a4ab0), cream = m(0xfffaf0), white = m(0xffffff, 0.3), blk = m(0x1a1a24, 0.3), org = m(0xff9a2a);
  const body = sph(0.8, brown, 0, 1.0, 0, 1, 1.12, 0.9);
  const belly = sph(0.56, cream, 0, 0.92, 0.38, 1, 1.15, 0.5);
  g.add(body, belly);
  // belly feathers
  for (const [x, y] of [[-0.18, 1.1], [0.18, 1.1], [0, 0.88], [-0.28, 0.82], [0.28, 0.82], [0, 0.62]]) g.add(sph(0.09, m(0xdde4ff), x, y, 0.8, 1.3, 0.8, 0.4));
  const head = new THREE.Group();
  head.position.set(0, 2.05, 0.05);
  head.add(sph(0.72, brown, 0, 0, 0, 1.08, 0.95, 0.95));
  head.add(sph(0.5, cream, 0, -0.08, 0.35, 1.2, 0.9, 0.5));
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Group();
    e.position.set(s * 0.3, 0.12, 0.55);
    e.add(sph(0.26, white, 0, 0, 0));
    const pupil = sph(0.12, blk, 0, 0, 0.2);
    pupil.add(sph(0.04, new THREE.MeshBasicMaterial({ color: 0xffffff }), 0.04, 0.05, 0.1));
    e.add(pupil);
    e.userData.pupil = pupil;
    const lid = sph(0.27, brown, 0, 0.1, 0.03, 1, 0.1, 1);
    lid.position.y = 0.3;
    e.add(lid);
    e.userData.lid = lid;
    // round glasses
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.035, 8, 24), m(0x3a2a1a, 0.4));
    rim.position.z = 0.1;
    e.add(rim);
    head.add(e);
    eyes.push(e);
    // ear tufts
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 8), brown);
    tuft.position.set(s * 0.52, 0.72, 0);
    tuft.rotation.z = -s * 0.4;
    tuft.castShadow = true;
    head.add(tuft);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.06, 0.06), m(0x1a2a6a));
    brow.position.set(s * 0.3, 0.5, 0.62);
    brow.rotation.z = s * 0.2;
    head.add(brow);
  }
  const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 6), m(0x3a2a1a));
  bridge.rotation.z = Math.PI / 2; bridge.position.set(0, 0.14, 0.64); head.add(bridge);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 10), org);
  beak.rotation.x = Math.PI / 2; beak.position.set(0, -0.12, 0.78); beak.castShadow = true;
  head.add(beak);
  // graduation cap
  const cap = new THREE.Group();
  cap.position.y = 0.72;
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 1.0), m(0x16161f, 0.5));
  board.rotation.y = Math.PI / 4; board.position.y = 0.16;
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 0.2, 16), m(0x16161f, 0.5));
  const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.4, 5), m(0xffc81a));
  tassel.position.set(0.45, 0.0, 0.45); tassel.rotation.x = 0.1;
  const tip = sph(0.05, m(0xffc81a), 0.45, -0.22, 0.46);
  cap.add(board, crown, tassel, tip);
  head.add(cap);
  g.add(head);
  // a red bow tie, as in the owner's reference sheet
  for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.36, 10), m(0xe8302a, 0.4)); w.rotation.z = s * Math.PI / 2; w.position.set(s * 0.2, 1.42, 0.7); g.add(w); }
  g.add(sph(0.09, m(0xe8302a, 0.4), 0, 1.42, 0.72));
  // wings (pivot at the shoulder)
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new THREE.Group();
    w.position.set(s * 0.78, 1.45, 0);
    const wing = sph(0.34, tan, 0, -0.5, 0, 0.55, 1.5, 0.7);
    wing.castShadow = true;
    w.add(wing);
    for (let i = 0; i < 3; i++) w.add(sph(0.1, m(0x1a3a90), 0, -0.95 - i * 0.02, 0.0 + (i - 1) * 0.1, 0.9, 1.1, 0.6));
    w.rotation.z = s * 0.25;
    if (s === 1) {
      // a magic wand with a golden star in the right wing
      const wand = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.9, 8), m(0xc8a050, 0.4));
      wand.position.set(0.1, -0.95, 0.15); wand.rotation.z = -0.5; w.add(wand);
      w.add(sph(0.12, new THREE.MeshBasicMaterial({ color: 0xffd23a }), 0.35, -0.55, 0.15, 1, 1, 0.5));
    }
    g.add(w);
    wings.push(w);
  }
  // feet
  for (const s of [-1, 1]) {
    for (const x of [-0.12, 0, 0.12]) {
      const t = sph(0.07, org, s * 0.3 + x, 0.06, 0.55, 0.8, 0.6, 1.8);
      g.add(t);
    }
  }
  g.userData = { head, wings, eyes, t: 0, act: null, actT: 0, lookX: 0, blink: 2, base: 0 };
  g.userData.api = true;
  g.act = (name) => { g.userData.act = name; g.userData.actT = 0; };
  g.look = (x) => { g.userData.lookX = x; };
  g.update = (dt, time) => {
    const u = g.userData;
    u.actT += dt;
    const [wl, wr] = u.wings;
    // idle: breathing and a gentle wing sway, head following the look target
    let by = Math.sin(time * 1.8) * 0.025;
    let wLz = -0.25 + Math.sin(time * 1.5) * 0.03, wRz = 0.25 - Math.sin(time * 1.5) * 0.03;
    let wLx = 0, wRx = 0;
    let headZ = Math.sin(time * 0.9) * 0.03;
    const ty = Math.max(-0.7, Math.min(0.7, (u.lookX - g.position.x) * 0.08));
    head.rotation.y += (ty - head.rotation.y) * Math.min(1, dt * 6);
    const k = u.actT;
    if (u.act === 'cheer' && k < 1.8) {
      by = Math.abs(Math.sin(k * 9)) * 0.45;
      wLz = -2.5 + Math.sin(k * 16) * 0.3; wRz = 2.5 - Math.sin(k * 16) * 0.3;
      headZ = Math.sin(k * 9) * 0.1;
    } else if (u.act === 'point' && k < 1.6) {
      wRz = 1.35; wRx = -0.2; wLz = -0.25;
      headZ = -0.12;
    } else if (u.act === 'toss' && k < 0.8) {
      wRz = 0.4 + Math.sin(Math.min(1, k / 0.8) * Math.PI) * 2.1; wRx = -0.4;
      by = Math.sin(Math.min(1, k / 0.8) * Math.PI) * 0.12;
    } else if (u.act === 'think' && k < 2.2) {
      headZ = Math.sin(k * 3) * 0.18 + 0.12;
      wRz = 1.9; wRx = -0.9;
    } else if (u.act === 'clap' && k < 1.6) {
      const c = Math.abs(Math.sin(k * 12));
      wLz = -0.2 - c * 0.55; wRz = 0.2 + c * 0.55; wLx = wRx = -0.9;
      by = Math.abs(Math.sin(k * 6)) * 0.1;
    }
    g.position.y = u.base + by;
    head.rotation.z += (headZ - head.rotation.z) * Math.min(1, dt * 10);
    wl.rotation.z += (wLz - wl.rotation.z) * Math.min(1, dt * 14);
    wr.rotation.z += (wRz - wr.rotation.z) * Math.min(1, dt * 14);
    wl.rotation.x += (wLx - wl.rotation.x) * Math.min(1, dt * 14);
    wr.rotation.x += (wRx - wr.rotation.x) * Math.min(1, dt * 14);
    // blinking
    u.blink -= dt;
    const closed = u.blink < 0.12 && u.blink > 0;
    if (u.blink <= 0) u.blink = 2 + Math.random() * 3;
    for (const e of u.eyes) e.userData.lid.position.y = closed ? 0.0 : 0.3;
  };
  return g;
}
