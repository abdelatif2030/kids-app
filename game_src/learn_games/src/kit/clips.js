// Plays the owner's character animations (transparent sprite sheets made by tools/clips/make_clip.mjs) in the 3D scene.
// A clip replaces the code-made rig while it plays; with no clip file for an act the rig keeps working, so nothing breaks
// when a clip is missing. assets/games/clips/clips.json lists what exists.
import * as THREE from 'three';

let BASE = '../clips/';
let MANIFEST = null;
let loading = null;
const textures = new Map();

export function setClipsBase(b) { BASE = b; }
/** Loads the list of clips once; resolves to {} when there are none. */
export function loadClips() {
  if (!loading) {
    loading = fetch(`${BASE}clips.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({})).then((j) => { MANIFEST = j || {}; return MANIFEST; });
  }
  return loading;
}

// which clip each act uses (an act with no clip keeps the rig)
const CLIP_FOR = { celebrate: 'jump', cheer: 'jump', jump: 'jump', giggle: 'laugh', clap: 'clap', wave: 'wave', walk: 'walk', run: 'walk' };

function sheet(entry) {
  if (textures.has(entry.file)) return textures.get(entry.file);
  const t = new THREE.TextureLoader().load(`${BASE}${entry.file}`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.repeat.set(1 / entry.cols, 1 / entry.rows);
  textures.set(entry.file, t);
  return t;
}

/** Wraps an actor (the rig) so its acts play the matching clip when one exists. [height] = world height of the character. */
export function withClips(kind, actor, height = 3.6) {
  const rigRoot = actor.children[0];
  const holder = new THREE.Group();
  actor.add(holder);
  let cur = null; // { entry, mesh, t, loop }
  const meshes = new Map();
  const meshFor = (entry) => {
    if (meshes.has(entry.file)) return meshes.get(entry.file);
    // world size per picture pixel: the usual (median) height of the character in the clip = the hero's height;
    // the ground line (feet) of the clip is placed on y = 0
    const sc = height / (entry.px || entry.h * 0.9);
    const cw = entry.w * sc, ch = entry.h * sc, ground = entry.ground != null ? entry.ground : entry.h;
    const geo = new THREE.PlaneGeometry(cw, ch);
    geo.translate(0, ch / 2 - (entry.h - ground) * sc, 0);
    const mat = new THREE.MeshBasicMaterial({ map: sheet(entry).clone(), transparent: true, alphaTest: 0.06, toneMapped: false, side: THREE.DoubleSide });
    mat.map.repeat.set(1 / entry.cols, 1 / entry.rows);
    mat.map.needsUpdate = true;
    const m = new THREE.Mesh(geo, mat);
    m.visible = false;
    m.position.z = 0.05;
    holder.add(m);
    meshes.set(entry.file, m);
    return m;
  };
  const stop = () => { if (cur) { cur.mesh.visible = false; cur = null; } rigRoot.visible = true; };
  const play = (entry, loop) => {
    if (cur) cur.mesh.visible = false;
    cur = { entry, mesh: meshFor(entry), t: 0, loop };
    cur.mesh.visible = true;
    rigRoot.visible = false;
  };
  const baseAct = actor.act;
  const baseUpdate = actor.update;
  actor.act = (name) => {
    baseAct(name);
    const entry = MANIFEST && MANIFEST[`${kind}_${CLIP_FOR[name]}`];
    if (entry) play(entry, !!entry.loop); else stop();
  };
  actor.update = (dt, time) => {
    baseUpdate(dt, time);
    if (!cur) return;
    cur.t += dt;
    const e = cur.entry;
    let f = Math.floor(cur.t * e.fps);
    if (f >= e.frames) { if (cur.loop) f %= e.frames; else { stop(); return; } }
    const col = f % e.cols, row = Math.floor(f / e.cols);
    cur.mesh.material.map.offset.set(col / e.cols, 1 - (row + 1) / e.rows);
  };
  loadClips();
  return actor;
}
