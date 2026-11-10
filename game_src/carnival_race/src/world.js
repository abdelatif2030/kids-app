// The carnival at sunset: sky, water, the glowing road, barriers with bulbs, arches, tunnels, rides and fireworks.
// Static things are merged into a few meshes per material so phones draw them quickly.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mat, glow, glowSprite, glowTexture, ticketTexture, makeHammer, makeSwingBoat, makeTeacup } from './models.js';

/** Many soft glows in one draw: additive points that shrink with distance. */
export function glowPoints(positions, colors, size, opacity = 0.9, map = glowTexture()) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const m = new THREE.PointsMaterial({ size, map, vertexColors: true, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return pts;
}

/** Bakes every mesh under `root` into one mesh per material (sprites are kept as they are). */
export function mergeByMaterial(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const keep = [];
  root.traverse((o) => {
    if (o.isMesh && !o.userData.noMerge) {
      const g = o.geometry.index ? o.geometry.clone() : o.geometry.clone();
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
      for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
      if (!g.index) g.setIndex([...Array(g.attributes.position.count).keys()]);
      if (!buckets.has(o.material)) buckets.set(o.material, []);
      buckets.get(o.material).push(g);
    } else if (o.isSprite || (o.isMesh && o.userData.noMerge)) {
      keep.push(o);
    }
  });
  const out = new THREE.Group();
  out.position.copy(root.position);
  out.quaternion.copy(root.quaternion);
  out.scale.copy(root.scale);
  for (const [m, gs] of buckets) {
    const merged = mergeGeometries(gs, false);
    if (merged) out.add(new THREE.Mesh(merged, m));
  }
  for (const k of keep) {
    const w = new THREE.Vector3();
    k.getWorldPosition(w);
    w.applyMatrix4(inv);
    k.removeFromParent();
    k.position.copy(w);
    out.add(k);
  }
  return out;
}

function at(o, x, y, z) {
  o.position.set(x, y, z);
  return o;
}

// ---- Sky ------------------------------------------------------------------------------------------------------

export const SKY = { top: new THREE.Color(0x1d1250), mid: new THREE.Color(0x7b2f8f), horizon: new THREE.Color(0xff9a6b), fog: new THREE.Color(0x8a3f8f) };

export function makeSky() {
  const g = new THREE.Group();
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: { top: { value: SKY.top }, mid: { value: SKY.mid }, horizon: { value: SKY.horizon } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
      void main(){ float h = vP.y; vec3 c = h > 0.18 ? mix(mid, top, smoothstep(0.18, 0.75, h)) : mix(horizon, mid, smoothstep(-0.05, 0.18, h));
        gl_FragColor = vec4(c, 1.0); }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), m);
  dome.renderOrder = -10;
  g.add(dome);
  // sun sinking at the horizon, and the moon already up
  const sun = glowSprite(0xffb36b, 260, 0.9);
  sun.position.set(-300, 40, 700);
  sun.material.fog = false;
  g.add(sun);
  const sunCore = glowSprite(0xfff3bf, 90, 1);
  sunCore.position.copy(sun.position);
  sunCore.material.fog = false;
  g.add(sunCore);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(26, 32), new THREE.MeshBasicMaterial({ color: 0xfff6e0, fog: false }));
  moon.position.set(250, 330, 650);
  moon.lookAt(0, 0, 0);
  g.add(moon);
  // stars
  const n = 500;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const y = 0.25 + Math.random() * 0.75;
    const r = Math.sqrt(1 - y * y);
    pos.set([Math.cos(a) * r * 850, y * 850, Math.sin(a) * r * 850], i * 3);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.85 })));
  return g;
}

// ---- Road -----------------------------------------------------------------------------------------------------

function roadTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 256, 0);
  grd.addColorStop(0, '#3a2470');
  grd.addColorStop(0.5, '#2a1a58');
  grd.addColorStop(1, '#3a2470');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  // tiny sparkles like a wet, shiny pier at dusk
  for (let i = 0; i < 260; i++) {
    g.fillStyle = `rgba(255,${150 + Math.random() * 100},${200 + Math.random() * 55},${Math.random() * 0.35})`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  // edge lines and the dashed centre line, painted into the texture (no overlapping surfaces)
  g.fillStyle = '#ffd6f5';
  g.fillRect(6, 0, 6, 256);
  g.fillRect(244, 0, 6, 256);
  g.fillStyle = 'rgba(255,255,255,0.55)';
  g.fillRect(124, 0, 8, 120);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

/** A strip following the track: columns are offsets (x, h) across it, rows go along s. */
function stripGeometry(track, cols, vScale, every = 1) {
  const rows = Math.ceil(track.count / every);
  const pos = [];
  const nor = [];
  const uv = [];
  const idx = [];
  const P = new THREE.Vector3();
  const R = new THREE.Vector3();
  const U = new THREE.Vector3();
  for (let r = 0; r <= rows; r++) {
    const s = (r / rows) * track.length;
    track.point(s, P);
    track.rightAt(s, R);
    track.upAt(s, U);
    cols.forEach(([x, h, n], c) => {
      pos.push(P.x + R.x * x + U.x * h, P.y + R.y * x + U.y * h, P.z + R.z * x + U.z * h);
      const N = n === 'up' ? U : n === 'right' ? R : R.clone().negate();
      nor.push(N.x, N.y, N.z);
      uv.push(c / (cols.length - 1), s / vScale);
    });
  }
  const C = cols.length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < C - 1; c++) {
      const a = r * C + c;
      const b = a + C;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

function makeRoad(track) {
  const g = new THREE.Group();
  const w = track.width / 2;
  const road = new THREE.Mesh(
    stripGeometry(track, [[-w, 0, 'up'], [w, 0, 'up']], 14),
    new THREE.MeshLambertMaterial({ map: roadTexture(), side: THREE.DoubleSide, emissive: 0x2a1250, emissiveIntensity: 0.6 }),
  );
  g.add(road);
  // soft cushion walls on both sides, with a glowing rail on top
  const wallM = new THREE.MeshLambertMaterial({ color: 0xc2255c, emissive: 0x5c0f3a, side: THREE.DoubleSide });
  for (const sx of [-1, 1]) {
    const x = sx * (w + 0.15);
    g.add(new THREE.Mesh(stripGeometry(track, [[x, -0.2, sx > 0 ? 'left' : 'right'], [x, 0.75, sx > 0 ? 'left' : 'right']], 4, 2), wallM));
    g.add(new THREE.Mesh(stripGeometry(track, [[x - 0.25, 0.8, 'up'], [x + 0.25, 0.8, 'up']], 4, 2), glow(sx > 0 ? 0xff8cc6 : 0xffd43b)));
  }
  // bulbs every 3 m along both rails
  const step = 3;
  const n = Math.floor(track.length / step);
  const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), n * 2);
  const m = new THREE.Matrix4();
  const p = new THREE.Vector3();
  const colors = [new THREE.Color(0xfff3bf), new THREE.Color(0xff8cc6), new THREE.Color(0x74c0fc)];
  for (let i = 0; i < n; i++) {
    for (const [k, sx] of [[0, -1], [1, 1]]) {
      track.world(i * step, sx * (w + 0.15), 1.05, p);
      m.makeTranslation(p.x, p.y, p.z);
      bulbs.setMatrixAt(i * 2 + k, m);
      bulbs.setColorAt(i * 2 + k, colors[i % 3]);
    }
  }
  g.add(bulbs);
  // pier posts down into the water where the road is flat enough
  const postGeos = [];
  for (let s = 0; s < track.length; s += 18) {
    if (track.upAt(s).y < 0.9) continue;
    for (const sx of [-1, 1]) {
      track.world(s, sx * (w - 0.5), 0, p);
      const hgt = p.y + 9;
      if (hgt < 1) continue;
      const c = new THREE.CylinderGeometry(0.45, 0.6, hgt, 8);
      c.translate(p.x, p.y - hgt / 2, p.z);
      postGeos.push(c);
    }
  }
  if (postGeos.length) g.add(new THREE.Mesh(mergeGeometries(postGeos), mat(0x4b2d7f)));
  return g;
}

// ---- Arches, tunnels, ramps -----------------------------------------------------------------------------------

function signTexture(text, sub) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 160;
  const g = c.getContext('2d');
  g.fillStyle = '#3b1f7a';
  g.beginPath();
  g.roundRect(6, 6, 500, 148, 26);
  g.fill();
  g.lineWidth = 8;
  g.strokeStyle = '#ffd43b';
  g.stroke();
  for (let i = 0; i < 18; i++) {
    g.fillStyle = i % 2 ? '#ff8cc6' : '#fff3bf';
    g.beginPath();
    g.arc(30 + i * 26.5, 18, 5, 0, Math.PI * 2);
    g.arc(30 + i * 26.5, 142, 5, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#ffe066';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = '900 64px Tajawal, sans-serif';
  g.fillText(text, 256, sub ? 70 : 82);
  if (sub) {
    g.font = '700 30px Tajawal, sans-serif';
    g.fillStyle = '#ffffff';
    g.fillText(sub, 256, 120);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function placeOnTrack(obj, track, s, x = 0, h = 0) {
  const p = track.world(s, x, h);
  const t = track.tangent(s);
  const u = track.upAt(s);
  const r = new THREE.Vector3().crossVectors(u, t);
  obj.position.copy(p);
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(r, u, t));
  return obj;
}

function makeStartArch(track, labels) {
  const w = track.width / 2 + 1.5;
  const g = new THREE.Group();
  const tower = mat(0x5f3dc4, 0x5f3dc4, 0.2);
  for (const sx of [-1, 1]) {
    g.add(at(new THREE.Mesh(new THREE.BoxGeometry(1.6, 9, 1.6), tower), sx * w, 4.5, 0));
    g.add(at(new THREE.Mesh(new THREE.ConeGeometry(1.3, 2, 4), mat(0xff6b6b)), sx * w, 10, 0));
  }
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(w * 2 + 1.6, 4.4), new THREE.MeshBasicMaterial({ map: signTexture(labels.start, labels.sub), side: THREE.DoubleSide }));
  sign.position.set(0, 9.6, 0);
  sign.rotation.y = Math.PI; // readable when driving towards it
  sign.userData.noMerge = true;
  g.add(sign);
  // checkered line on the road
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 16;
  const x = c.getContext('2d');
  for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) {
    x.fillStyle = (i + j) % 2 ? '#ffffff' : '#222222';
    x.fillRect(i * 8, j * 8, 8, 8);
  }
  const ct = new THREE.CanvasTexture(c);
  ct.magFilter = THREE.NearestFilter;
  const line = new THREE.Mesh(new THREE.PlaneGeometry(track.width, 1.4), new THREE.MeshBasicMaterial({ map: ct, polygonOffset: true, polygonOffsetFactor: -2 }));
  line.rotation.x = -Math.PI / 2;
  line.position.y = 0.02;
  line.userData.noMerge = true;
  g.add(line);
  return placeOnTrack(g, track, 0);
}

function makeBalloonArch(track, s) {
  const g = new THREE.Group();
  const R = track.width / 2 + 2.5;
  const cols = [0xff6b6b, 0xffd43b, 0x74c0fc, 0xb197fc, 0xff8cc6, 0x69db7c];
  const geos = new Map();
  for (let i = 0; i <= 26; i++) {
    const a = (i / 26) * Math.PI;
    const color = cols[i % cols.length];
    for (const off of [-0.6, 0.6]) {
      const sg = new THREE.SphereGeometry(1.05, 12, 10);
      sg.translate(Math.cos(a) * R, Math.sin(a) * R * 0.95, off);
      if (!geos.has(color)) geos.set(color, []);
      geos.get(color).push(sg);
    }
  }
  for (const [c, gs] of geos) g.add(new THREE.Mesh(mergeGeometries(gs), mat(c, c, 0.25)));
  return placeOnTrack(g, track, s);
}

function makeTunnel(track, a, b) {
  const g = new THREE.Group();
  const cols = [0xff8cc6, 0xb197fc, 0x74c0fc, 0xffd43b];
  const ringGeo = new THREE.TorusGeometry(track.width / 2 + 1.4, 0.35, 6, 28, Math.PI * 1.15);
  ringGeo.rotateZ(-Math.PI * 0.075);
  const byColor = cols.map(() => []);
  const tmp = new THREE.Object3D();
  let i = 0;
  for (let s = a; s <= b; s += 4, i++) {
    placeOnTrack(tmp, track, s, 0, 0.2);
    tmp.updateMatrix();
    byColor[i % cols.length].push(ringGeo.clone().applyMatrix4(tmp.matrix));
  }
  byColor.forEach((gs, k) => gs.length && g.add(new THREE.Mesh(mergeGeometries(gs), glow(cols[k]))));
  // a see-through tube skin following the road, in one piece
  const skinGeo = new THREE.CylinderGeometry(track.width / 2 + 1.3, track.width / 2 + 1.3, 2.05, 20, 1, true, Math.PI * 0.42, Math.PI * 1.16);
  skinGeo.rotateX(Math.PI / 2);
  const pieces = [];
  for (let s = a; s < b; s += 2) {
    placeOnTrack(tmp, track, s + 1, 0, 0.2);
    tmp.updateMatrix();
    pieces.push(skinGeo.clone().applyMatrix4(tmp.matrix));
  }
  g.add(new THREE.Mesh(mergeGeometries(pieces), new THREE.MeshBasicMaterial({ color: 0x9775fa, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false })));
  return g;
}

function makeRamp(track, s) {
  const g = new THREE.Group();
  const w = track.width * 0.62;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(6, 0);
  shape.lineTo(6, 1.3);
  shape.lineTo(0, 0);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: w, bevelEnabled: false });
  geo.translate(-6, 0, -w / 2);
  geo.rotateY(-Math.PI / 2);
  const ramp = new THREE.Mesh(geo, mat(0xffd43b, 0xff922b, 0.35));
  g.add(ramp);
  // chevrons glow on the ramp
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(w * 0.9, 0.08, 0.35), glow(0xff4d8d));
    c.position.set(0, 0.25 + i * 0.4, -4.6 + i * 1.8);
    c.rotation.x = -0.21;
    g.add(c);
  }
  return placeOnTrack(g, track, s);
}

// ---- Scenery --------------------------------------------------------------------------------------------------

function stripedTexture(a, b, n = 8) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 8;
  const g = c.getContext('2d');
  for (let i = 0; i < n; i++) {
    g.fillStyle = i % 2 ? a : b;
    g.fillRect((i * 128) / n, 0, 128 / n + 1, 8);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const tentMats = [
  ['#ff6b6b', '#fff5f5'],
  ['#845ef7', '#fff3bf'],
  ['#ffa94d', '#ffffff'],
  ['#4dabf7', '#fff0f6'],
].map(([a, b]) => new THREE.MeshLambertMaterial({ map: stripedTexture(a, b), emissive: 0x331144 }));

function makeTent(i) {
  const g = new THREE.Group();
  const m = tentMats[i % tentMats.length];
  const r = 5 + (i % 3);
  g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(r, r, 4, 16, 1, true), m), 0, 2, 0));
  g.add(at(new THREE.Mesh(new THREE.ConeGeometry(r * 1.08, 4.5, 16), m), 0, 6.2, 0));
  g.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.6, 6), mat(0xffd43b)), 0, 9.2, 0));
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 4), glow(k % 2 ? 0xfff3bf : 0xff8cc6)), Math.cos(a) * r * 1.02, 4.1, Math.sin(a) * r * 1.02));
  }
  return mergeByMaterial(g);
}

function makeFerrisWheel() {
  const g = new THREE.Group();
  const R = 18;
  const legM = mat(0x5f3dc4, 0x3b1f7a, 0.4);
  for (const sz of [-1.5, 1.5]) for (const sx of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, R + 4, 6), legM);
    leg.position.set(sx * 5, (R + 4) / 2, sz);
    leg.rotation.z = sx * 0.27;
    g.add(leg);
  }
  const wheel = new THREE.Group();
  wheel.position.y = R + 3;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.35, 6, 48), glow(0xff8cc6));
  wheel.add(rim);
  const rim2 = new THREE.Mesh(new THREE.TorusGeometry(R * 0.55, 0.25, 6, 36), glow(0xffd43b));
  wheel.add(rim2);
  const spokes = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const sp = new THREE.CylinderGeometry(0.12, 0.12, R, 4);
    sp.translate(0, R / 2, 0);
    sp.rotateZ(a);
    spokes.push(sp);
  }
  wheel.add(new THREE.Mesh(mergeGeometries(spokes), glow(0x74c0fc)));
  const cabCols = [0xff6b6b, 0xffd43b, 0x69db7c, 0x4dabf7, 0xb197fc, 0xff922b];
  const cabins = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const c = new THREE.Mesh(new THREE.SphereGeometry(1.3, 10, 8), mat(cabCols[i % 6], cabCols[i % 6], 0.35));
    c.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    wheel.add(c);
    cabins.push(c);
  }
  const legs = mergeByMaterial(g);
  const turning = mergeByMaterial(wheel);
  const out = new THREE.Group();
  out.add(legs, turning);
  out.userData = { wheel: turning };
  return out;
}

function makeLampPost() {
  const g = new THREE.Group();
  g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 7, 6), mat(0x3b1f7a)), 0, 3.5, 0));
  g.add(at(new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.8, 8), mat(0xff6b6b, 0xff6b6b, 0.3)), 0, 7.4, 0));
  g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), glow(0xfff3bf)), 0, 6.9, 0));
  return g;
}

function farFromTrack(track, x, z, min) {
  const p = new THREE.Vector3();
  for (let s = 0; s < track.length; s += 6) {
    track.point(s, p);
    if ((p.x - x) ** 2 + (p.z - z) ** 2 < min * min) return false;
  }
  return true;
}

function bounds(track) {
  const b = new THREE.Box3();
  const p = new THREE.Vector3();
  for (let s = 0; s < track.length; s += 5) b.expandByPoint(track.point(s, p));
  return b;
}

// ---- Fireworks ------------------------------------------------------------------------------------------------

class Fireworks {
  constructor(scene, center, radius) {
    this.center = center;
    this.radius = radius;
    this.bursts = [];
    this.timer = 1;
    const n = 70;
    for (let i = 0; i < 5; i++) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
      const m = new THREE.PointsMaterial({ size: 1.6, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, map: null, fog: false });
      const pts = new THREE.Points(g, m);
      pts.visible = false;
      pts.frustumCulled = false;
      scene.add(pts);
      this.bursts.push({ pts, vel: new Float32Array(n * 3), life: 0, n });
    }
  }
  spawn(color) {
    const b = this.bursts.find((x) => x.life <= 0);
    if (!b) return;
    const a = Math.random() * Math.PI * 2;
    const c = new THREE.Vector3(this.center.x + Math.cos(a) * this.radius, 70 + Math.random() * 50, this.center.z + Math.sin(a) * this.radius);
    const pos = b.pts.geometry.attributes.position.array;
    for (let i = 0; i < b.n; i++) {
      const u = Math.random() * 2 - 1;
      const t = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const sp = 14 + Math.random() * 4;
      b.vel.set([Math.cos(t) * r * sp, u * sp, Math.sin(t) * r * sp], i * 3);
      pos.set([c.x, c.y, c.z], i * 3);
    }
    b.pts.material.color.set(color ?? [0xff8cc6, 0xffd43b, 0x74c0fc, 0x69db7c, 0xb197fc][Math.floor(Math.random() * 5)]);
    b.pts.material.opacity = 1;
    b.pts.visible = true;
    b.life = 1.8;
    if (this.onSpawn) this.onSpawn();
  }
  update(dt, rate = 1) {
    this.timer -= dt * rate;
    if (this.timer <= 0) {
      this.spawn();
      this.timer = 0.9 + Math.random() * 1.6;
    }
    for (const b of this.bursts) {
      if (b.life <= 0) continue;
      b.life -= dt;
      const pos = b.pts.geometry.attributes.position.array;
      for (let i = 0; i < b.n * 3; i++) {
        pos[i] += b.vel[i] * dt;
        b.vel[i] *= 1 - dt * 1.2;
      }
      for (let i = 0; i < b.n; i++) b.vel[i * 3 + 1] -= 6 * dt;
      b.pts.geometry.attributes.position.needsUpdate = true;
      b.pts.material.opacity = Math.max(0, b.life / 1.8);
      if (b.life <= 0) b.pts.visible = false;
    }
  }
}

// ---- The whole world ------------------------------------------------------------------------------------------

export class World {
  constructor(scene, track, race, labels, quality) {
    this.scene = scene;
    this.track = track;
    this.race = race;
    this.root = new THREE.Group();
    scene.add(this.root);
    scene.fog = new THREE.Fog(SKY.fog, 70, 420);
    scene.background = SKY.mid;
    const hemi = new THREE.HemisphereLight(0xffc2e8, 0x2a1650, 1.6);
    this.root.add(hemi);
    const sun = new THREE.DirectionalLight(0xffd0a0, 1.3);
    sun.position.set(-1, 0.6, 1.5);
    this.root.add(sun);

    this.sky = makeSky();
    this.root.add(this.sky);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: 0x2b1660, emissive: 0x3a1a6e, emissiveIntensity: 0.6 }));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -9;
    this.root.add(water);

    this.root.add(makeRoad(track));
    this.root.add(mergeByMaterial(makeStartArch(track, labels)));
    for (const f of track.def.arches) this.root.add(makeBalloonArch(track, f * track.length));
    for (const [a, b] of race.tunnels) this.root.add(makeTunnel(track, a, b));
    for (const r of race.ramps) this.root.add(mergeByMaterial(makeRamp(track, r.s)));

    // lamp posts just outside the barriers
    const lampSrc = makeLampPost();
    const lamps = new THREE.Group();
    const lampGlow = [];
    const lampCol = [];
    for (let s = 10; s < track.length; s += 26) {
      if (track.upAt(s).y < 0.9 || race.inTunnel(s)) continue;
      const side = (Math.floor(s / 26) % 2) * 2 - 1;
      const l = lampSrc.clone();
      const p = track.world(s, side * (track.width / 2 + 1.6), 0);
      l.position.copy(p);
      lamps.add(l);
      lampGlow.push(p.x, p.y + 6.9, p.z);
      lampCol.push(1, 0.85, 0.66);
    }
    this.root.add(mergeByMaterial(lamps));
    if (lampGlow.length) this.root.add(glowPoints(lampGlow, lampCol, 4.5, 0.85));

    // rides and tents around the track
    const box = bounds(track);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const R = Math.max(size.x, size.z) / 2;
    this.wheels = [];
    const nWheels = quality.low ? 2 : 3;
    let placed = 0;
    for (let k = 0; k < 40 && placed < nWheels; k++) {
      const a = (k / 40) * Math.PI * 2 * 3.1;
      const d = R + 45 + (k % 3) * 25;
      const x = c.x + Math.cos(a) * d;
      const z = c.z + Math.sin(a) * d;
      if (!farFromTrack(track, x, z, 40)) continue;
      const w = makeFerrisWheel();
      w.position.set(x, -9, z);
      w.lookAt(c.x, -9, c.z);
      this.root.add(w);
      this.wheels.push(w);
      placed++;
    }
    let tents = 0;
    const tentGroup = new THREE.Group();
    const maxTents = quality.low ? 8 : 14;
    for (let k = 0; k < 200 && tents < maxTents; k++) {
      const a = Math.random() * Math.PI * 2;
      const d = R * (0.3 + Math.random() * 1.1);
      const x = c.x + Math.cos(a) * d;
      const z = c.z + Math.sin(a) * d;
      if (!farFromTrack(track, x, z, track.width / 2 + 10)) continue;
      const t = makeTent(tents);
      t.position.set(x, -9 + 0.01, z);
      // a little island deck under each tent
      const deck = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 1, 16), mat(0x5c3a9e));
      deck.position.set(x, -9, z);
      tentGroup.add(deck);
      t.position.y = -8.5;
      tentGroup.add(t);
      tents++;
    }
    this.root.add(mergeByMaterial(tentGroup));

    // hazards
    this.hazardObjs = race.hazards.map((h) => {
      if (h.type === 'teacups') {
        const cups = [0xff8cc6, 0x74c0fc, 0xffd43b].map((col) => makeTeacup(col));
        for (const cup of cups) this.root.add(cup);
        // a round, glowing ride floor painted on the road
        const floor = new THREE.Mesh(new THREE.CircleGeometry(track.width * 0.48, 36), new THREE.MeshBasicMaterial({ color: 0xffd6f5, transparent: true, opacity: 0.18, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
        placeOnTrack(floor, track, h.s, 0, 0.03);
        floor.rotateX(-Math.PI / 2);
        this.root.add(floor);
        return { h, cups };
      }
      const obj = h.type === 'boat' ? makeSwingBoat(track.width) : makeHammer(track.width);
      placeOnTrack(obj, track, h.s);
      this.root.add(obj);
      return { h, obj };
    });

    // pickups: all item boxes in two instanced draws, glows and tickets as points
    const nb = race.boxes.length;
    this.boxMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), mat(0x845ef7, 0x845ef7, 0.5), nb);
    const rib = mergeGeometries([new THREE.BoxGeometry(1.17, 0.24, 0.24), new THREE.BoxGeometry(0.24, 0.24, 1.17), new THREE.BoxGeometry(0.24, 1.17, 0.24)]);
    this.ribMesh = new THREE.InstancedMesh(rib, glow(0xffd43b), nb);
    this.boxMesh.frustumCulled = false;
    this.ribMesh.frustumCulled = false;
    this.boxBase = race.boxes.map((bx) => {
      const o = placeOnTrack(new THREE.Object3D(), track, bx.s, bx.x, 1.2);
      o.updateMatrix();
      return o.matrix.clone();
    });
    this.root.add(this.boxMesh, this.ribMesh);
    const bp = [];
    const bc = [];
    for (const m of this.boxBase) {
      const v = new THREE.Vector3().setFromMatrixPosition(m);
      bp.push(v.x, v.y, v.z);
      bc.push(0.7, 0.6, 1);
    }
    this.boxGlow = glowPoints(bp, bc, 3.2, 0.8);
    this.root.add(this.boxGlow);
    const tp = [];
    const tc = [];
    const hc = [];
    this.ticketBase = race.tickets.map((tk) => {
      const v = track.world(tk.s, tk.x, 1.1);
      tp.push(v.x, v.y, v.z);
      tc.push(1, 1, 1);
      hc.push(1, 0.83, 0.23);
      return { v, up: track.upAt(tk.s) };
    });
    this.ticketHalo = glowPoints(tp.slice(), hc, 2.6, 0.5);
    this.ticketPts = glowPoints(tp, tc, 1.7, 1, ticketTexture());
    this.ticketPts.material.blending = THREE.NormalBlending;
    this.ticketPts.material.alphaTest = 0.3;
    this.ticketPts.material.depthWrite = true;
    this.root.add(this.ticketHalo, this.ticketPts);

    this.fireworks = new Fireworks(this.root, c, R + 60);
    this.time = 0;
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    for (const w of this.wheels) w.userData.wheel.rotation.z = t * 0.12;
    for (const ho of this.hazardObjs) {
      if (ho.cups) {
        this.race.teacups(ho.h).forEach((p, i) => {
          placeOnTrack(ho.cups[i], this.track, p.s, p.x, 0);
          ho.cups[i].rotateY(t * 2.4 + i);
        });
      } else {
        // the swing puts the heavy end exactly where the simulation checks for hits (track x = -local x)
        const L = ho.h.type === 'boat' ? 11.4 : 8.8;
        const x = this.race._hazardX(ho.h);
        ho.obj.userData.pivot.rotation.z = Math.asin(Math.max(-1, Math.min(1, -x / L)));
      }
    }
    const spin = new THREE.Matrix4().makeRotationY(t * 2).multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0.6, 0, 0.6)));
    const hidden = new THREE.Matrix4().makeScale(0, 0, 0);
    const m = new THREE.Matrix4();
    const v = new THREE.Vector3();
    const gp = this.boxGlow.geometry.attributes.position;
    this.race.boxes.forEach((bx, i) => {
      if (bx.live) m.multiplyMatrices(this.boxBase[i], spin);
      else m.copy(hidden);
      this.boxMesh.setMatrixAt(i, m);
      this.ribMesh.setMatrixAt(i, m);
      v.setFromMatrixPosition(this.boxBase[i]);
      gp.setXYZ(i, v.x, bx.live ? v.y : -999, v.z);
    });
    this.boxMesh.instanceMatrix.needsUpdate = true;
    this.ribMesh.instanceMatrix.needsUpdate = true;
    gp.needsUpdate = true;
    const tp = this.ticketPts.geometry.attributes.position;
    const hp = this.ticketHalo.geometry.attributes.position;
    this.race.tickets.forEach((tk, i) => {
      const { v: base, up } = this.ticketBase[i];
      const bob = Math.sin(t * 3 + tk.s) * 0.15;
      if (tk.live) {
        tp.setXYZ(i, base.x + up.x * bob, base.y + up.y * bob, base.z + up.z * bob);
        hp.setXYZ(i, base.x, base.y, base.z);
      } else {
        tp.setXYZ(i, 0, -999, 0);
        hp.setXYZ(i, 0, -999, 0);
      }
    });
    tp.needsUpdate = true;
    hp.needsUpdate = true;
    this.fireworks.update(dt);
  }

  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
  }
}
