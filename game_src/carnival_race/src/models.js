// Every model in the game is built here from simple shapes: bumper cars, the six animals, and the carnival rides.
// Original art: cute, round, bright. Lambert materials keep it fast on phones.
import * as THREE from 'three';

const geo = {
  sphere: new THREE.SphereGeometry(1, 14, 10),
  sphereLo: new THREE.SphereGeometry(1, 8, 6),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 16),
  cylLo: new THREE.CylinderGeometry(1, 1, 1, 10),
  cone: new THREE.ConeGeometry(1, 1, 16),
  box: new THREE.BoxGeometry(1, 1, 1),
  torus: new THREE.TorusGeometry(1, 0.22, 7, 22),
};

const matCache = new Map();
export function mat(color, emissive = 0, emissiveIntensity = 1) {
  const key = `${color}|${emissive}|${emissiveIntensity}`;
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity }));
  }
  return matCache.get(key);
}
export function glow(color) {
  const key = `glow|${color}`;
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  return matCache.get(key);
}

function part(g, m, sx, sy, sz, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(g, m);
  mesh.scale.set(sx, sy, sz);
  mesh.position.set(x, y, z);
  return mesh;
}

// A soft round glow texture, for the pink light under every car and for sparkles.
let _glowTex;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  _glowTex = new THREE.CanvasTexture(c);
  return _glowTex;
}

export function glowSprite(color, size, opacity = 1) {
  const m = new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
  const s = new THREE.Sprite(m);
  s.scale.set(size, size, size);
  return s;
}

/** A flat glow lying on the road (the light under a bumper car). */
export function groundGlow(color, size) {
  const m = new THREE.MeshBasicMaterial({ map: glowTexture(), color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(size, size), m);
  p.rotation.x = -Math.PI / 2;
  return p;
}

// ---- Animals --------------------------------------------------------------------------------------------------

const ANIMAL = {
  raccoon: { fur: 0x9aa0a8, belly: 0xe9ecef, dark: 0x343a40, ear: 'round', mask: true, tail: 'striped' },
  bunny: { fur: 0xfff0f6, belly: 0xffffff, dark: 0xff8fab, ear: 'long', tail: 'puff' },
  cat: { fur: 0xffa94d, belly: 0xfff4e6, dark: 0xd9480f, ear: 'pointy', tail: 'long' },
  bear: { fur: 0xa0522d, belly: 0xe6c49a, dark: 0x5c3317, ear: 'round', tail: 'puff' },
  fox: { fur: 0xff7a1a, belly: 0xffffff, dark: 0x2b2b2b, ear: 'pointy', tail: 'fox' },
  panda: { fur: 0xffffff, belly: 0xffffff, dark: 0x222222, ear: 'round', patches: true, tail: 'puff' },
};

export function makeAnimal(kind) {
  const a = ANIMAL[kind] ?? ANIMAL.raccoon;
  const g = new THREE.Group();
  const fur = mat(a.fur);
  const dark = mat(a.dark);
  const belly = mat(a.belly);
  const black = mat(0x111111);
  const white = glow(0xffffff);
  // body (sitting in the seat) and head
  g.add(part(geo.sphere, fur, 0.42, 0.45, 0.38, 0, 0.45, 0));
  g.add(part(geo.sphere, belly, 0.3, 0.32, 0.2, 0, 0.42, 0.22));
  const head = new THREE.Group();
  head.position.set(0, 1.08, 0.04);
  g.add(head);
  head.add(part(geo.sphere, fur, 0.5, 0.46, 0.46));
  // snout and nose
  head.add(part(geo.sphere, belly, 0.24, 0.17, 0.18, 0, -0.1, 0.38));
  head.add(part(geo.sphere, black, 0.08, 0.06, 0.06, 0, -0.04, 0.55));
  // eyes: big and shiny
  for (const sx of [-1, 1]) {
    if (a.mask) head.add(part(geo.sphere, dark, 0.2, 0.12, 0.1, sx * 0.19, 0.06, 0.36));
    if (a.patches) head.add(part(geo.sphere, dark, 0.13, 0.16, 0.08, sx * 0.19, 0.04, 0.38));
    head.add(part(geo.sphere, black, 0.085, 0.1, 0.06, sx * 0.18, 0.06, 0.42));
    head.add(part(geo.sphereLo, white, 0.03, 0.035, 0.02, sx * 0.16, 0.1, 0.47));
    // cheeks
    head.add(part(geo.sphereLo, mat(0xff8fab), 0.07, 0.04, 0.03, sx * 0.3, -0.1, 0.36));
    // ears
    if (a.ear === 'round') {
      head.add(part(geo.sphere, a.patches ? dark : fur, 0.16, 0.16, 0.08, sx * 0.34, 0.36, 0));
      head.add(part(geo.sphere, a.patches ? dark : belly, 0.09, 0.09, 0.05, sx * 0.34, 0.36, 0.05));
    } else if (a.ear === 'long') {
      const e = part(geo.sphere, fur, 0.1, 0.42, 0.07, sx * 0.17, 0.72, -0.02);
      e.rotation.z = sx * -0.15;
      head.add(e);
      const inner = part(geo.sphere, dark, 0.05, 0.32, 0.03, sx * 0.17, 0.72, 0.04);
      inner.rotation.z = sx * -0.15;
      head.add(inner);
    } else {
      const e = part(geo.cone, fur, 0.17, 0.32, 0.1, sx * 0.3, 0.46, 0);
      e.rotation.z = sx * -0.35;
      head.add(e);
      const tip = part(geo.cone, a.dark === 0x2b2b2b ? dark : belly, 0.08, 0.14, 0.05, sx * 0.33, 0.54, 0.04);
      tip.rotation.z = sx * -0.35;
      head.add(tip);
    }
    // little arms holding the wheel
    const arm = part(geo.sphereLo, fur, 0.1, 0.1, 0.28, sx * 0.28, 0.58, 0.3);
    g.add(arm);
  }
  // tail behind the seat
  if (a.tail === 'striped' || a.tail === 'long' || a.tail === 'fox') {
    const n = a.tail === 'striped' ? 4 : 3;
    for (let i = 0; i < n; i++) {
      const m = a.tail === 'striped' ? (i % 2 ? dark : fur) : a.tail === 'fox' && i === n - 1 ? belly : fur;
      g.add(part(geo.sphere, m, 0.16 - i * 0.01, 0.16, 0.16, 0.22 + i * 0.06, 0.35 + i * 0.13, -0.42 - i * 0.05));
    }
  } else {
    g.add(part(geo.sphere, belly, 0.14, 0.14, 0.14, 0, 0.35, -0.42));
  }
  g.userData.head = head;
  return g;
}

// ---- Bumper car -----------------------------------------------------------------------------------------------

export function makeBumperCar(racer) {
  const car = new THREE.Group();
  const body = mat(racer.body, racer.body, 0.08);
  const accent = mat(racer.accent);
  const rubber = mat(0x2b2350);
  const chrome = mat(0xdee2e6);
  // base plate and fat rubber bumper ring
  car.add(part(geo.cyl, mat(0x3b2f6b), 1.15, 0.25, 1.35, 0, 0.32, 0));
  const ring = new THREE.Mesh(geo.torus, rubber);
  ring.rotation.x = Math.PI / 2;
  ring.scale.set(1.2, 1.42, 1.2);
  ring.position.y = 0.35;
  car.add(ring);
  // shell: a rounded tub, higher at the back
  car.add(part(geo.sphere, body, 1.0, 0.5, 1.2, 0, 0.55, 0));
  car.add(part(geo.sphere, body, 0.85, 0.62, 0.6, 0, 0.75, -0.45));
  // racing stripe down the middle
  car.add(part(geo.box, accent, 0.28, 0.06, 1.9, 0, 1.02, 0.05));
  // headlights and tail lights glow
  for (const sx of [-1, 1]) {
    car.add(part(geo.sphereLo, glow(0xfff3bf), 0.13, 0.1, 0.06, sx * 0.48, 0.66, 1.08));
    car.add(part(geo.sphereLo, glow(0xff4d8d), 0.1, 0.08, 0.05, sx * 0.55, 0.85, -0.98));
  }
  // seat cushion and steering wheel
  car.add(part(geo.sphere, accent, 0.5, 0.15, 0.42, 0, 0.92, -0.12));
  const wheel = new THREE.Mesh(geo.torus, chrome);
  wheel.scale.set(0.2, 0.2, 0.2);
  wheel.position.set(0, 1.2, 0.48);
  wheel.rotation.x = -0.9;
  car.add(wheel);
  car.add(part(geo.cylLo, chrome, 0.04, 0.4, 0.04, 0, 1.05, 0.6));
  // the bumper-car pole with a sparkling tip at the back
  car.add(part(geo.cylLo, chrome, 0.05, 1.7, 0.05, 0, 1.75, -0.95));
  const spark = part(geo.sphereLo, glow(0xfff066), 0.12, 0.12, 0.12, 0, 2.62, -0.95);
  car.add(spark);
  const sparkGlow = glowSprite(0xffe066, 0.9, 0.9);
  sparkGlow.position.copy(spark.position);
  car.add(sparkGlow);
  // the driver
  const animal = makeAnimal(racer.animal);
  animal.position.set(0, 0.62, -0.1);
  animal.scale.setScalar(0.95);
  car.add(animal);
  // light under the car
  const under = groundGlow(0xff4fd8, 4.2);
  under.position.y = 0.05;
  car.add(under);
  car.userData = { animal, spark: sparkGlow, under };
  return car;
}

/** The magic bubble of the shield item. */
export function makeShieldBubble() {
  const m = new THREE.MeshBasicMaterial({ color: 0x74c0fc, transparent: true, opacity: 0.28, depthWrite: false, blending: THREE.AdditiveBlending });
  const s = new THREE.Mesh(geo.sphere, m);
  s.scale.setScalar(2.1);
  s.position.y = 1.1;
  return s;
}

// ---- Pickups --------------------------------------------------------------------------------------------------

export function makeItemBox() {
  const g = new THREE.Group();
  const box = part(geo.box, mat(0x845ef7, 0x845ef7, 0.5), 1.1, 1.1, 1.1, 0, 1.2, 0);
  box.rotation.set(0.6, 0.6, 0);
  g.add(box);
  // gift ribbon
  const r1 = part(geo.box, glow(0xffd43b), 1.16, 0.22, 0.22, 0, 0, 0);
  const r2 = part(geo.box, glow(0xffd43b), 0.22, 0.22, 1.16, 0, 0, 0);
  box.add(r1, r2);
  r1.scale.set(1.06, 0.2, 0.2);
  r2.scale.set(0.2, 0.2, 1.06);
  const q = glowSprite(0xb197fc, 2.6, 0.7);
  q.position.y = 1.2;
  g.add(q);
  g.userData.spin = box;
  return g;
}

let _ticketTex;
export function ticketTexture() {
  if (_ticketTex) return _ticketTex;
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 72;
  const g = c.getContext('2d');
  g.fillStyle = '#ffd43b';
  g.beginPath();
  g.roundRect(4, 4, 120, 64, 10);
  g.fill();
  g.fillStyle = '#e8590c';
  for (const y of [14, 36, 58]) {
    g.beginPath();
    g.arc(4, y, 6, 0, Math.PI * 2);
    g.arc(124, y, 6, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = '#e8590c';
  g.lineWidth = 4;
  g.setLineDash([6, 5]);
  g.strokeRect(20, 14, 88, 44);
  g.fillStyle = '#e8590c';
  g.font = 'bold 34px sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('★', 64, 38);
  _ticketTex = new THREE.CanvasTexture(c);
  _ticketTex.colorSpace = THREE.SRGBColorSpace;
  return _ticketTex;
}

export function makeTicket() {
  const m = new THREE.SpriteMaterial({ map: ticketTexture(), transparent: true });
  const s = new THREE.Sprite(m);
  s.scale.set(1.4, 0.8, 1);
  s.position.y = 1.1;
  const g = new THREE.Group();
  g.add(s);
  const halo = glowSprite(0xffd43b, 2.2, 0.55);
  halo.position.y = 1.1;
  g.add(halo);
  return g;
}

// ---- Rides (hazards) ------------------------------------------------------------------------------------------

/** A giant toy hammer hanging from a frame over the road. Its head swings across the road. */
export function makeHammer(width) {
  const g = new THREE.Group();
  const frame = mat(0x7048e8, 0x7048e8, 0.15);
  const H = 10;
  for (const sx of [-1, 1]) g.add(part(geo.cylLo, frame, 0.35, H, 0.35, sx * (width / 2 + 1), H / 2, 0));
  const beam = part(geo.cylLo, frame, 0.35, width + 2.6, 0.35, 0, H, 0);
  beam.rotation.z = Math.PI / 2;
  g.add(beam);
  const pivot = new THREE.Group();
  pivot.position.y = H;
  g.add(pivot);
  pivot.add(part(geo.cylLo, mat(0xffd43b), 0.2, H - 2, 0.2, 0, -(H - 2) / 2, 0));
  const head = new THREE.Group();
  head.position.y = -(H - 1.2);
  pivot.add(head);
  const h = part(geo.cyl, mat(0xff6b6b, 0xff6b6b, 0.2), 1.1, 2.6, 1.1);
  h.rotation.z = Math.PI / 2;
  head.add(h);
  for (const sx of [-1, 1]) {
    const cap = part(geo.cyl, mat(0xffffff), 1.15, 0.3, 1.15, sx * 1.35, 0, 0);
    cap.rotation.z = Math.PI / 2;
    head.add(cap);
  }
  // bulbs along the frame top
  for (let i = -3; i <= 3; i++) g.add(part(geo.sphereLo, glow(i % 2 ? 0xffe066 : 0xff8cc6), 0.22, 0.22, 0.22, (i / 3) * (width / 2), H + 0.45, 0));
  g.userData.pivot = pivot;
  return g;
}

/** A swinging boat ride: a big boat on two arms, swinging across the road. */
export function makeSwingBoat(width) {
  const g = new THREE.Group();
  const H = 13;
  const frame = mat(0x4263eb, 0x4263eb, 0.15);
  for (const sz of [-1, 1]) {
    for (const sx of [-1, 1]) {
      const leg = part(geo.cylLo, frame, 0.35, H * 1.15, 0.35, sx * (width / 2 + 2), H / 2, sz * 4.5);
      leg.rotation.z = sx * 0.18;
      g.add(leg);
    }
  }
  const axle = part(geo.cylLo, frame, 0.3, 10, 0.3, 0, H, 0);
  axle.rotation.x = Math.PI / 2;
  g.add(axle);
  const pivot = new THREE.Group();
  pivot.position.y = H;
  g.add(pivot);
  for (const sz of [-1, 1]) pivot.add(part(geo.cylLo, mat(0xffd43b), 0.18, H - 2.5, 0.18, 0, -(H - 2.5) / 2, sz * 2.4));
  const boat = new THREE.Group();
  boat.position.y = -(H - 1.6);
  pivot.add(boat);
  const hull = part(geo.sphere, mat(0xe03131, 0xe03131, 0.15), 2.2, 1.0, 3.6);
  boat.add(hull);
  boat.add(part(geo.box, mat(0xffd43b), 4.2, 0.3, 6.6, 0, 0.55, 0));
  for (let i = -2; i <= 2; i++) boat.add(part(geo.sphereLo, glow(0xfff3bf), 0.18, 0.18, 0.18, 2.1, 0.2, i * 1.2), part(geo.sphereLo, glow(0xfff3bf), 0.18, 0.18, 0.18, -2.1, 0.2, i * 1.2));
  g.userData.pivot = pivot;
  return g;
}

/** A spinning teacup (three of them twirl around on the road). */
export function makeTeacup(color) {
  const g = new THREE.Group();
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.05, 1.5, 22, 1, true), mat(color, color, 0.15));
  cup.material = cup.material.clone();
  cup.material.side = THREE.DoubleSide;
  cup.position.y = 0.85;
  g.add(cup);
  g.add(part(geo.cyl, mat(0xffffff), 1.05, 0.15, 1.05, 0, 0.12, 0));
  const rim = new THREE.Mesh(geo.torus, mat(0xffffff));
  rim.rotation.x = Math.PI / 2;
  rim.scale.set(1.5, 1.5, 0.6);
  rim.position.y = 1.6;
  g.add(rim);
  const handle = new THREE.Mesh(geo.torus, mat(0xffffff));
  handle.scale.set(0.45, 0.45, 0.6);
  handle.position.set(1.65, 0.95, 0);
  g.add(handle);
  // polka dots
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.add(part(geo.sphereLo, mat(0xffffff), 0.18, 0.18, 0.08, Math.cos(a) * 1.3, 0.9, Math.sin(a) * 1.3));
  }
  return g;
}

// ---- Podium ---------------------------------------------------------------------------------------------------

export function makePodium() {
  const g = new THREE.Group();
  const heights = [2.2, 1.5, 1.0];
  const xs = [0, -3.4, 3.4];
  const colors = [0xffd43b, 0xced4da, 0xff922b];
  for (let i = 0; i < 3; i++) {
    const b = part(geo.box, mat(0x364fc7, 0x364fc7, 0.1), 3.2, heights[i], 3.2, xs[i], heights[i] / 2, 0);
    g.add(b);
    g.add(part(geo.box, mat(colors[i], colors[i], 0.3), 3.25, 0.25, 3.25, xs[i], heights[i] - 0.1, 0));
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle = '#ffffff';
    x.font = 'bold 96px sans-serif';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    x.fillText(String(i + 1), 64, 70);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const label = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.6), new THREE.MeshBasicMaterial({ map: t, transparent: true }));
    label.position.set(xs[i], heights[i] / 2, 1.62);
    g.add(label);
  }
  g.userData = { heights, xs };
  return g;
}
