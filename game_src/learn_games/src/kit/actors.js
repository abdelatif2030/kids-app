// The owner's own character art (2026-11-12): the boy, the girl and Lulu the owl, and the animals, fruit and vehicles of the
// reference sheets, cut out one by one (assets/games/art/<name>.png, transparent) and stood up in the 3D world as
// pictures that face the child, with life added by code: breathing, bouncing, leaning, hopping and turning to look.
// `makeActor(kind)` returns a Group with the same small API the 3D characters had: act(name), look(x), update(dt, time).
// `artThing(id)` returns a picture of a thing (an apple, a bus, a cow...) for the things the sheets have, else null.
import * as THREE from 'three';
import DIMS from './art_dims.json';
import { makeRig, hasRig, setRigBase } from './rig.js';
import { withClips, setClipsBase } from './clips.js';

let BASE = '../art/';
export const setArtBase = (b) => { BASE = b; setRigBase(b); setClipsBase(`${b}../clips/`); };
const cache = new Map();

function tex(name) {
  if (cache.has(name)) return cache.get(name);
  const t = new THREE.TextureLoader().load(`${BASE}${name}.webp`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  cache.set(name, t);
  return t;
}

/** A picture plane [h] tall standing on y = 0, as wide as the picture is. With [layers] > 1 it is stacked into a thin
 *  figurine: darker copies sit behind the front picture, so when the figure turns or sways it has a real thickness and
 *  edge instead of looking like a flat sheet. */
function pic(name, h, layers = 1) {
  if (layers > 1) {
    const grp = new THREE.Group();
    for (let i = layers - 1; i >= 0; i--) {
      const m = pic(name, h, 1);
      m.position.z = -i * 0.028;
      const shade = i === 0 ? 1 : Math.max(0.35, 0.78 - i * 0.07);
      m.material = m.material.clone();
      m.material.color.setScalar(shade);
      grp.add(m);
    }
    return grp;
  }
  const [w, hh] = DIMS[name];
  const g = new THREE.PlaneGeometry((h * w) / hh, h);
  g.translate(0, h / 2, 0);
  const m = new THREE.MeshBasicMaterial({ map: tex(name), transparent: true, alphaTest: 0.08, toneMapped: false, side: THREE.DoubleSide });
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

// The part-by-part rig (rig.js) made the faces look wrong (owner, 2026-11-12), so the heroes use the full pictures again;
// flip this only after the rig faces are redone. Real animations come from the clips (clips.js).
const USE_RIG = false;

export function makeActor(kind) {
  if (USE_RIG && hasRig(kind)) return withClips(kind, makeRig(kind), HEIGHT[kind]);
  const poses = POSES[kind];
  const g = new THREE.Group();
  const holder = new THREE.Group();
  g.add(holder);
  const meshes = {};
  for (const [pose, name] of Object.entries(poses)) {
    if (!meshes[name]) { meshes[name] = pic(name, HEIGHT[kind], 7); meshes[name].visible = false; holder.add(meshes[name]); }
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
  shadow.rotation.x = -Math.PI / 2; shadow.position.set(0, 0.03, -0.05); shadow.scale.set(1, 0.45, 1);
  g.add(shadow);
  const S = { act: null, t: 0, lookX: 0, base: 0, squash: 0, micro: null, microT: 0, nextMicro: 2 + Math.random() * 3 };
  g.userData.state = S;
  g.act = (name) => { S.act = name; S.t = 0; };
  g.look = (x) => { S.lookX = x; };
  g.face = () => {};
  g.setLook = () => {};
  g.update = (dt, time) => {
    S.t += dt;
    const k = S.t;
    let rzLook = 0, ryLook = 0, byMicro = 0;
    // when nothing else is happening, now and then do something small and different (never the same rhythm twice)
    if (!S.act) {
      S.nextMicro -= dt;
      if (S.nextMicro <= 0) {
        const pick = ['look', 'look', 'hop', 'wave', 'excited'][Math.floor(Math.random() * 5)];
        S.nextMicro = 2.5 + Math.random() * 4.5;
        if (pick === 'look') { S.micro = 'look'; S.microT = 0; S.lookDir = Math.random() < 0.5 ? -1 : 1; } else if (pick === 'wave') g.act('wave'); else { S.micro = pick; S.microT = 0; }
      }
    }
    if (S.micro) {
      S.microT += dt;
      const m = S.microT;
      if (S.micro === 'look') { if (m < 1.6) { rzLook = Math.sin((m / 1.6) * Math.PI) * 0.07 * S.lookDir; ryLook = Math.sin((m / 1.6) * Math.PI) * 0.3 * S.lookDir; } else S.micro = null; }
      else if (S.micro === 'hop') { if (m < 0.6) byMicro = Math.sin((m / 0.6) * Math.PI) * 0.22; else S.micro = null; }
      else if (S.micro === 'excited') { if (m < 1.1) { byMicro = Math.abs(Math.sin(m * 9)) * 0.14; rzLook = Math.sin(m * 18) * 0.03; } else S.micro = null; }
    }
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
      case 'walk': { pose = 'idle'; by = Math.abs(Math.sin(k * 7.4)) * 0.1; rz = Math.sin(k * 7.4) * 0.06; sy = 1 + Math.sin(k * 14.8) * 0.012; break; }
      case 'sad': if (k < 2.2) { pose = 'idle'; rz = 0.05; by = -0.05; sy = 0.97; } break;
      default:
    }
    if (S.act && S.act !== 'walk' && k > 2.8) S.act = null;
    if (!S.act) { by += byMicro; rz += rzLook; ry += ryLook; }
    show(pose);
    // face the way the child is looking (a little turn only: the picture is flat)
    const ty = Math.max(-0.35, Math.min(0.35, (S.lookX - g.position.x) * 0.04));
    holder.rotation.y += (ty + ry - holder.rotation.y) * Math.min(1, dt * 6);
    holder.rotation.z += (rz - holder.rotation.z) * Math.min(1, dt * 10);
    holder.position.y += (by - holder.position.y) * Math.min(1, dt * 14);
    holder.scale.set(sx, sy, 1);
    shadow.scale.set(1 - by * 0.5, 0.45 - by * 0.2, 1);
  };
  return kind === 'owl' ? g : withClips(kind, g, HEIGHT[kind]); // a hero plays the owner's clips when they exist
}

/** Picture of a thing for the ids the reference sheets have; the group is about 1 unit tall, standing on y = 0. */
// our thing ids -> the picture to use (the owner's reference art), where the sheets have one
const ART_FILE = {
  apple: 'apple', banana: 'banana', orange: 'orange', grapes: 'grapes', strawberry: 'strawberry', watermelon: 'watermelon', pineapple: 'pineapple', mango: 'mango', carrot: 'carrot',
  cow: 'cow', sheep: 'sheep', dog: 'dog', cat: 'cat', giraffe: 'giraffe', lion: 'lion', elephant: 'elephant2', // the first elephant cut was missing its back legs croc: 'croc',
  horse: 'horse', pig: 'pig', bunny: 'rabbit', rabbit: 'rabbit', duck: 'mallard', hen: 'hen', chick: 'chick', bee: 'bee', butterfly: 'butterfly', monkey: 'monkey',
  fish: 'clownfish', dove: 'pigeon', frog: 'frog', panda: 'panda', tiger: 'tiger', zebra: 'zebra', penguin: 'penguin', parrot: 'parrot',
  fox: 'fox', camel: 'camel', sun: 'sun', rose: 'rose', pomegranate: 'pomegranate', rocket: 'rocket', // the owner's ChatGPT sheet 1 (level 1)
  car: 'car', bus: 'bus', train: 'train', plane: 'plane', boat: 'boat', firetruck: 'firetruck', ambulance: 'ambulance', police: 'police', helicopter: 'helicopter',
};
const BIG = new Set(['cow', 'sheep', 'dog', 'cat', 'giraffe', 'lion', 'elephant', 'elephant2', 'fox', 'camel', 'croc', 'horse', 'pig', 'rabbit', 'mallard', 'hen', 'chick', 'bee', 'butterfly', 'monkey', 'clownfish', 'pigeon', 'frog', 'panda', 'tiger', 'zebra', 'penguin', 'parrot']);
export const hasArt = (id) => !!ART_FILE[id] && !!DIMS[ART_FILE[id]];
export function artThing(id) {
  if (!hasArt(id)) return null;
  const g = new THREE.Group();
  const file = ART_FILE[id];
  const h = BIG.has(file) ? 1.5 : 1.0;
  g.add(pic(file, h));
  g.userData.id = id;
  g.userData.art = true;
  g.userData.inner = new THREE.Group();
  return g;
}
