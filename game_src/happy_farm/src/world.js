// The 3D farm: grass, field soil, swaying crops (one instanced draw per crop kind), stubble, rocks, fence, trees,
// house, pond, windmill, barn, the unloading grate, the pen and the animals.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CELL } from './data.js';
import { mat, makeBarn, makeGrate, makeArrow, makeRock, makeTree, makeAnimal, makeHouse, makeWindmill, cropGeometry, stubbleGeometry } from './models.js';

function grassTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#6cc04a';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1400; i++) {
    const v = Math.random();
    g.fillStyle = v < 0.5 ? 'rgba(80,160,50,0.6)' : v < 0.85 ? 'rgba(140,215,90,0.6)' : 'rgba(255,255,255,0.5)';
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, v < 0.97 ? 3 : 2);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function soilTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#b8864f';
  g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 8) {
    g.fillStyle = 'rgba(120,80,40,0.35)';
    g.fillRect(0, y, 128, 3);
  }
  for (let i = 0; i < 300; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(90,60,30,0.4)' : 'rgba(220,180,120,0.4)';
    g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** A crop material that sways a little in the wind (bending more at the top). */
function swayMaterial(uniforms) {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uniforms.uTime;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       #ifdef USE_INSTANCING
         float ph = instanceMatrix[3].x * 0.45 + instanceMatrix[3].z * 0.3;
         float bend = position.y * position.y * 0.06;
         transformed.x += sin(uTime * 1.6 + ph) * bend;
         transformed.z += cos(uTime * 1.3 + ph) * bend * 0.6;
       #endif`,
    );
  };
  return m;
}

export class FarmWorld {
  constructor(scene, farm, quality) {
    this.scene = scene;
    this.farm = farm;
    this.root = new THREE.Group();
    scene.add(this.root);
    const lv = farm.level;
    scene.background = new THREE.Color(0x9fdcff);
    scene.fog = new THREE.Fog(0xbfe8ff, 40, 110);
    this.root.add(new THREE.HemisphereLight(0xfff4d6, 0x5f8f3a, 1.7));
    const sun = new THREE.DirectionalLight(0xfff0d0, 1.5);
    sun.position.set(-10, 25, 12);
    this.root.add(sun);

    // grass, a bit larger than the farm so the edges never show
    const grassT = grassTexture();
    grassT.repeat.set(lv.w / 4 + 10, lv.d / 4 + 10);
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(lv.w + 40, lv.d + 40), new THREE.MeshLambertMaterial({ map: grassT }));
    grass.rotation.x = -Math.PI / 2;
    this.root.add(grass);

    // field soil and a dirt patch by the barn
    const soilT = soilTexture();
    for (const [fx, fz, fw, fd] of lv.fields) {
      const t = soilT.clone();
      t.needsUpdate = true;
      t.repeat.set(fw / 3, fd / 3);
      const p = new THREE.Mesh(new THREE.PlaneGeometry(fw + 0.6, fd + 0.6), new THREE.MeshLambertMaterial({ map: t }));
      p.rotation.x = -Math.PI / 2;
      p.position.set(fx + fw / 2, 0.02, fz + fd / 2);
      this.root.add(p);
    }
    const yard = new THREE.Mesh(new THREE.CircleGeometry(7.5, 28), mat(0xb08a5a));
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(farm.pad.x - 2, 0.015, farm.pad.z);
    this.root.add(yard);

    // crops: one instanced mesh per kind, plus stubble that appears where a crop was cut
    this.uniforms = { uTime: { value: 0 } };
    this.crops = {};
    const counts = {};
    for (const c of farm.cells) counts[c.crop] = (counts[c.crop] ?? 0) + 1;
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    this.cellIndex = new Int32Array(farm.cells.length);
    this.baseMatrix = [];
    for (const kind of Object.keys(counts)) {
      const mesh = new THREE.InstancedMesh(cropGeometry(kind), swayMaterial(this.uniforms), counts[kind]);
      mesh.frustumCulled = false;
      this.crops[kind] = { mesh, n: 0 };
      this.root.add(mesh);
    }
    const stubble = new THREE.InstancedMesh(stubbleGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true }), farm.cells.length);
    stubble.frustumCulled = false;
    this.stubble = stubble;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    farm.cells.forEach((c, i) => {
      const k = this.crops[c.crop];
      const r = (Math.sin(i * 12.9898) * 43758.5453) % 1;
      q.setFromAxisAngle(up, r * Math.PI * 2);
      const s = 0.85 + Math.abs(r) * 0.3;
      m4.compose(new THREE.Vector3(c.x + (r - 0.5) * 0.12, 0, c.z + ((r * 7) % 1 - 0.5) * 0.12), q, new THREE.Vector3(s, s, s));
      k.mesh.setMatrixAt(k.n, m4);
      this.cellIndex[i] = k.n;
      this.baseMatrix.push(m4.clone());
      k.n++;
      stubble.setMatrixAt(i, zero);
    });
    this.root.add(stubble);
    this.falling = []; // crops being cut: a quick, juicy squash-and-tumble

    // rocks
    for (const r of farm.rocks) {
      const o = makeRock();
      o.position.set(r.x, 0, r.z);
      o.rotation.y = r.x * 1.3;
      this.root.add(o);
    }

    // white fence around the farm (one instanced draw for posts, one for rails)
    const posts = [];
    const rails = [];
    const W = lv.w / 2;
    const D = lv.d / 2;
    const add = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const n = Math.ceil(len / 2.5);
      for (let i = 0; i <= n; i++) posts.push([x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n]);
      for (let i = 0; i < n; i++) {
        const xa = x0 + ((x1 - x0) * i) / n;
        const za = z0 + ((z1 - z0) * i) / n;
        const xb = x0 + ((x1 - x0) * (i + 1)) / n;
        const zb = z0 + ((z1 - z0) * (i + 1)) / n;
        rails.push([(xa + xb) / 2, (za + zb) / 2, Math.hypot(xb - xa, zb - za), Math.atan2(zb - za, xb - xa)]);
      }
    };
    add(-W, -D, W, -D);
    add(-W, D, W, D);
    add(-W, -D, -W, D);
    add(W, -D, W, D);
    const pg = new THREE.BoxGeometry(0.18, 1.1, 0.18);
    pg.translate(0, 0.55, 0);
    const pm = new THREE.InstancedMesh(pg, mat(0xffffff), posts.length);
    posts.forEach(([x, z], i) => pm.setMatrixAt(i, new THREE.Matrix4().makeTranslation(x, 0, z)));
    this.root.add(pm);
    const rg = new THREE.BoxGeometry(1, 0.1, 0.08);
    const rm = new THREE.InstancedMesh(rg, mat(0xffffff), rails.length * 2);
    rails.forEach(([x, z, len, a], i) => {
      for (const [k, y] of [[0, 0.5], [1, 0.9]]) {
        rm.setMatrixAt(i * 2 + k, new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(up, -a), new THREE.Vector3(len, 1, 1)));
      }
    });
    this.root.add(rm);

    // trees outside the fence, a pond, the house and a windmill
    const treeCount = quality.low ? 14 : 26;
    for (let i = 0; i < treeCount; i++) {
      const a = (i / treeCount) * Math.PI * 2;
      const rx = (W + 4 + (i % 3) * 3) * Math.cos(a);
      const rz = (D + 4 + (i % 4) * 2.5) * Math.sin(a);
      const t = makeTree(0.9 + (i % 3) * 0.25);
      t.position.set(rx, 0, rz);
      this.root.add(t);
    }
    const pond = new THREE.Mesh(new THREE.CircleGeometry(3, 28), new THREE.MeshLambertMaterial({ color: 0x4fb3e8, emissive: 0x1a5a8a, emissiveIntensity: 0.3 }));
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(W - 5, 0.03, -D + 5);
    pond.scale.set(1.4, 1, 1);
    this.root.add(pond);
    const house = makeHouse();
    house.position.set(-W - 5, 0, D - 8);
    house.rotation.y = Math.PI / 2;
    this.root.add(house);
    this.windmill = makeWindmill();
    this.windmill.position.set(W + 6, 0, D - 10);
    this.windmill.rotation.y = -Math.PI / 2;
    this.root.add(this.windmill);

    // barn, grate and the arrow over it
    const barn = makeBarn();
    barn.position.set(farm.barn.x, 0, farm.barn.z);
    this.root.add(barn);
    this.root.add(Object.assign(makeGrate(farm.pad.w, farm.pad.d), {}).translateX(farm.pad.x).translateZ(farm.pad.z));
    this.arrow = makeArrow();
    this.arrow.position.set(farm.pad.x, 1.5, farm.pad.z);
    this.arrow.visible = false;
    this.root.add(this.arrow);
    // product stacks next to the barn grow as the harvest is sold
    this.stacks = new THREE.Group();
    this.stacks.position.set(farm.barn.x + 4.6, 0, farm.barn.z + 3.6);
    this.root.add(this.stacks);

    // the pen
    if (farm.pen) {
      const p = farm.pen;
      const wood = mat(0xa0602d);
      const parts = [];
      const plank = (x0, z0, x1, z1) => {
        const len = Math.hypot(x1 - x0, z1 - z0);
        for (const y of [0.4, 0.8]) {
          const g = new THREE.BoxGeometry(len, 0.12, 0.1);
          g.rotateY(-Math.atan2(z1 - z0, x1 - x0));
          g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
          parts.push(g);
        }
        const n = Math.ceil(len / 1.5);
        for (let i = 0; i <= n; i++) {
          const g = new THREE.BoxGeometry(0.14, 1.0, 0.14);
          g.translate(x0 + ((x1 - x0) * i) / n, 0.5, z0 + ((z1 - z0) * i) / n);
          parts.push(g);
        }
      };
      // an open gate on the top side (towards the fields)
      const gate = Math.min(3, p.w / 2);
      plank(p.x, p.z, p.x + (p.w - gate) / 2, p.z);
      plank(p.x + (p.w + gate) / 2, p.z, p.x + p.w, p.z);
      plank(p.x, p.z + p.d, p.x + p.w, p.z + p.d);
      plank(p.x, p.z, p.x, p.z + p.d);
      plank(p.x + p.w, p.z, p.x + p.w, p.z + p.d);
      this.root.add(new THREE.Mesh(mergeGeometries(parts), wood));
      const hay = new THREE.Mesh(new THREE.CircleGeometry(Math.min(p.w, p.d) * 0.4, 20), mat(0xe8c25a));
      hay.rotation.x = -Math.PI / 2;
      hay.position.set(p.x + p.w / 2, 0.03, p.z + p.d / 2);
      this.root.add(hay);
      this.penSign = { x: p.x + p.w / 2, z: p.z - 0.5 };
    }
    this.animals = farm.animals.map((a) => {
      const o = makeAnimal(a.kind);
      this.root.add(o);
      return o;
    });
  }

  /** Starts the cut animation for these cells. */
  cut(cellIdxs) {
    for (const i of cellIdxs) this.falling.push({ i, t: 0 });
  }

  update(dt, time) {
    this.uniforms.uTime.value = time;
    if (this.windmill) this.windmill.userData.blades.rotation.z = time * 0.6;
    // juicy cut: the crop squashes down and tips over, then becomes stubble
    if (this.falling.length) {
      const m = new THREE.Matrix4();
      const tip = new THREE.Matrix4();
      const dirty = new Set();
      this.falling = this.falling.filter((f) => {
        f.t += dt;
        const c = this.farm.cells[f.i];
        const k = this.crops[c.crop];
        const p = Math.min(1, f.t / 0.22);
        if (p >= 1) {
          k.mesh.setMatrixAt(this.cellIndex[f.i], m.makeScale(0, 0, 0));
          const s = 0.9 + ((f.i * 7) % 5) * 0.05;
          this.stubble.setMatrixAt(f.i, m.compose(new THREE.Vector3(c.x, 0, c.z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), f.i), new THREE.Vector3(s, s, s)));
          this.stubble.instanceMatrix.needsUpdate = true;
        } else {
          tip.makeRotationZ(p * 1.2).premultiply(new THREE.Matrix4().makeScale(1 + p * 0.3, 1 - p * 0.85, 1 + p * 0.3));
          m.multiplyMatrices(this.baseMatrix[f.i], tip);
          k.mesh.setMatrixAt(this.cellIndex[f.i], m);
        }
        dirty.add(k.mesh);
        return p < 1;
      });
      for (const mesh of dirty) mesh.instanceMatrix.needsUpdate = true;
    }
    // animals
    this.farm.animals.forEach((a, i) => {
      const o = this.animals[i];
      o.position.set(a.x, Math.abs(Math.sin(time * 6 + i)) * (Math.hypot(a.vx, a.vz) > 0.3 ? 0.08 : 0), a.z);
      o.rotation.y = -a.heading;
    });
    // the arrow bounces over the grate while the trailer is full
    this.arrow.visible = this.farm.full;
    this.arrow.position.y = 1.5 + Math.abs(Math.sin(time * 4)) * 0.7;
  }

  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}
