// The owner's own character art (2026-11-12): the boy, the girl and Lulu the owl, and the animals, fruit and vehicles of the
// reference sheets, cut out one by one (assets/games/art/<name>.png, transparent) and stood up in the 3D world as
// pictures that face the child, with life added by code: breathing, bouncing, leaning, hopping and turning to look.
// `makeActor(kind)` returns a Group with the same small API the 3D characters had: act(name), look(x), update(dt, time).
// `artThing(id)` returns a picture of a thing (an apple, a bus, a cow...) for the things the sheets have, else null.
import * as THREE from 'three';
import DIMS from './art_dims.json';

let BASE = '../art/';
export const setArtBase = (b) => { BASE = b; };
const cache = new Map();

function tex(name) {
  if (cache.has(name)) return cache.get(name);
  const t = new THREE.TextureLoader().load(`${BASE}${name}.png`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  cache.set(name, t);
  return t;
}

/** A picture plane [h] tall standing on y = 0, as wide as the picture is. */
function pic(name, h) {
  const [w, hh] = DIMS[name];
  const g = new THREE.PlaneGeometry((h * w) / hh, h);
  g.translate(0, h / 2, 0);
  const m = new THREE.MeshBasicMaterial({ map: tex(name), transparent: true, alphaTest: 0.35, toneMapped: false, side: THREE.DoubleSide });
  const o = new THREE.Mesh(g, m);
  o.userData.name = name;
  return o;
}

// the pictures each hero or the owl uses for its poses
const POSES = {
  boy: { idle: 'boy_idle', wave: 'boy_wave', point: 'boy_point', read: 'boy_read', cheer: 'boy_wave' },
  girl: { idle: 'girl_idle', wave: 'girl_wave', point: 'girl_wave', read: 'girl_stand_read', cheer: 'girl_cheer' },
  owl: { idle: 'owl', wave: 'owl', point: 'owl', read: 'owl', cheer: 'owl' },
};
const HEIGHT = { boy: 3.6, girl: 3.6, owl: 3.0 };

export function makeActor(kind) {
  const poses = POSES[kind];
  const g = new THREE.Group();
  const holder = new THREE.Group();
  g.add(holder);
  const meshes = {};
  for (const [pose, name] of Object.entries(poses)) {
    if (!meshes[name]) { meshes[name] = pic(name, HEIGHT[kind]); meshes[name].visible = false; holder.add(meshes[name]); }
  }
  let current = null;
  const show = (pose) => {
    const m = meshes[poses[pose] || poses.idle];
    if (m === current) return;
    if (current) current.visible = false;
    current = m; m.visible = true;
  };
  show('idle');
  // a soft shadow under the feet
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02; shadow.scale.set(1, 0.45, 1);
  g.add(shadow);
  const S = { act: null, t: 0, lookX: 0, base: 0, squash: 0 };
  g.userData.state = S;
  g.act = (name) => { S.act = name; S.t = 0; };
  g.look = (x) => { S.lookX = x; };
  g.face = () => {};
  g.setLook = () => {};
  g.update = (dt, time) => {
    S.t += dt;
    const k = S.t;
    let by = Math.sin(time * 1.8) * 0.025, rz = Math.sin(time * 1.1) * 0.012, sy = 1 + Math.sin(time * 1.8) * 0.008, sx = 1, ry = 0;
    let pose = 'idle';
    switch (S.act) {
      case 'wave': if (k < 2.4) { pose = 'wave'; rz = Math.sin(k * 9) * 0.05; by = Math.abs(Math.sin(k * 4)) * 0.05; } break;
      case 'point': if (k < 1.8) { pose = 'point'; rz = -0.04; } break;
      case 'talk': if (k < 2.4) { pose = 'wave'; by = Math.abs(Math.sin(k * 7)) * 0.04; rz = Math.sin(k * 5) * 0.03; } break;
      case 'clap': if (k < 1.8) { pose = 'wave'; by = Math.abs(Math.sin(k * 11)) * 0.12; rz = Math.sin(k * 11) * 0.04; } break;
      case 'cheer': case 'jump': if (k < 1.3) { pose = 'cheer'; by = Math.abs(Math.sin(k * 7)) * 0.55; sy = 1 + Math.sin(k * 14) * 0.04; sx = 1 - Math.sin(k * 14) * 0.03; } break;
      case 'celebrate': if (k < 2.6) { pose = 'cheer'; by = Math.abs(Math.sin(k * 5)) * 0.6; rz = Math.sin(k * 10) * 0.08; ry = Math.sin(k * 4) * 0.5; } break;
      case 'think': if (k < 2.4) { pose = 'idle'; rz = 0.12 + Math.sin(k * 3) * 0.04; by = 0; } break;
      case 'run': if (k < 1.4) { pose = 'idle'; by = Math.abs(Math.sin(k * 15)) * 0.16; rz = 0.1 + Math.sin(k * 15) * 0.05; } break;
      case 'sad': if (k < 2.2) { pose = 'idle'; rz = 0.05; by = -0.05; sy = 0.97; } break;
      default:
    }
    if (S.act && k > 2.8) S.act = null;
    show(pose);
    // face the way the child is looking (a little turn only: the picture is flat)
    const ty = Math.max(-0.35, Math.min(0.35, (S.lookX - g.position.x) * 0.04));
    holder.rotation.y += (ty + ry - holder.rotation.y) * Math.min(1, dt * 6);
    holder.rotation.z += (rz - holder.rotation.z) * Math.min(1, dt * 10);
    holder.position.y += (by - holder.position.y) * Math.min(1, dt * 14);
    holder.scale.set(sx, sy, 1);
    shadow.scale.set(1 - by * 0.5, 0.45 - by * 0.2, 1);
  };
  return g;
}

/** Picture of a thing for the ids the reference sheets have; the group is about 1 unit tall, standing on y = 0. */
const THING_ART = new Set(['apple', 'banana', 'orange', 'grapes', 'strawberry', 'watermelon', 'pineapple', 'mango', 'carrot', 'cow', 'sheep', 'dog', 'cat', 'giraffe', 'lion', 'elephant', 'croc', 'car', 'bus', 'train', 'plane', 'boat', 'firetruck', 'ambulance', 'police', 'helicopter']);
export const hasArt = (id) => THING_ART.has(id) && !!DIMS[id];
export function artThing(id) {
  if (!hasArt(id)) return null;
  const g = new THREE.Group();
  const h = ['cow', 'sheep', 'dog', 'cat', 'giraffe', 'lion', 'elephant', 'croc'].includes(id) ? 1.5 : 1.0;
  g.add(pic(id, h));
  g.userData.id = id;
  g.userData.art = true;
  g.userData.inner = new THREE.Group();
  return g;
}
