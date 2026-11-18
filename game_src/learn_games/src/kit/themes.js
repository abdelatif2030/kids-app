// One tune for every place of the learning world (pure data, no audio here): each world has its own key, scale, tempo, instrument and chord
// progression, so the child HEARS where he is (a slow bell tune in space, a bouncing marimba in the jungle, a desert scale with a flute, a
// plucked country tune on the farm...). Same format as THEME_GARDEN in sound.js: tempo, chords [bass, [three notes]] x 8 bars, melody [bar, eighth, midi],
// lead instrument and shaker. The tunes are built from a short rule (scale + progression + rhythm) and a fixed seed, so they are always the same and
// always in tune. Written by code on 2026-11-18; no person has listened to them yet.

const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11],
  pent: [0, 2, 4, 7, 9],
  minorPent: [0, 3, 5, 7, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  hijaz: [0, 1, 4, 5, 7, 8, 10], // the desert: a half step, a step and a half
  minor: [0, 2, 3, 5, 7, 8, 10],
};

// each world: key (midi of the tonic near the middle), scale, tempo, lead, progression (scale degrees, one per bar), rhythm (eighths of a bar that carry a note)
const PLACES = {
  meadow: { root: 65, scale: 'major', tempo: 108, lead: 'marimba', shaker: true, prog: [0, 4, 5, 3, 0, 4, 3, 0], rhythm: [0, 2, 4, 6], seed: 11 },
  farm: { root: 62, scale: 'pent', tempo: 120, lead: 'pluck', shaker: true, prog: [0, 3, 0, 4, 0, 3, 4, 0], rhythm: [0, 3, 4, 6], seed: 23 },
  beach: { root: 67, scale: 'lydian', tempo: 100, lead: 'flute', shaker: true, prog: [0, 1, 4, 0, 5, 1, 4, 0], rhythm: [0, 3, 6], seed: 37 },
  space: { root: 64, scale: 'lydian', tempo: 80, lead: 'bell', shaker: false, prog: [0, 5, 3, 1, 0, 5, 1, 0], rhythm: [0, 4], seed: 41 },
  rainbow: { root: 69, scale: 'major', tempo: 124, lead: 'bell', shaker: true, prog: [0, 3, 4, 0, 0, 3, 4, 0], rhythm: [0, 1, 2, 4, 6], seed: 53 },
  city: { root: 60, scale: 'dorian', tempo: 118, lead: 'pluck', shaker: true, prog: [0, 3, 0, 4, 1, 3, 4, 0], rhythm: [0, 2, 3, 6], seed: 61 },
  snow: { root: 67, scale: 'pent', tempo: 72, lead: 'bell', shaker: false, prog: [0, 3, 1, 4, 0, 3, 4, 0], rhythm: [0, 4], seed: 71 },
  castle: { root: 62, scale: 'minor', tempo: 96, lead: 'flute', shaker: false, prog: [0, 5, 3, 4, 0, 5, 4, 0], rhythm: [0, 3, 4, 6], seed: 83 },
  underwater: { root: 65, scale: 'pent', tempo: 78, lead: 'flute', shaker: false, prog: [0, 2, 3, 1, 0, 2, 4, 0], rhythm: [0, 2, 5], seed: 97 },
  jungle: { root: 64, scale: 'minorPent', tempo: 112, lead: 'marimba', shaker: true, prog: [0, 0, 3, 4, 0, 0, 3, 0], rhythm: [0, 1, 3, 4, 6], seed: 103 },
  desert: { root: 62, scale: 'hijaz', tempo: 92, lead: 'flute', shaker: true, prog: [0, 0, 3, 0, 4, 3, 0, 0], rhythm: [0, 2, 3, 5, 6], seed: 113 },
  home: { root: 64, scale: 'major', tempo: 92, lead: 'marimba', shaker: false, prog: [0, 5, 3, 4, 0, 5, 4, 0], rhythm: [0, 2, 4, 6], seed: 127 },
};

/** A small, repeatable pseudo-random generator (no Math.random: a world must always sound the same). */
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
}

/** The note [deg] steps above the tonic in the scale (degrees may run above the scale: they continue in the next octave). */
function degreeNote(root, scale, deg) {
  const n = scale.length;
  const oct = Math.floor(deg / n);
  return root + scale[((deg % n) + n) % n] + 12 * oct;
}

export function buildTheme(place) {
  const scale = SCALES[place.scale];
  const r = rng(place.seed);
  // chords: the bass note two octaves under the lead's range, three chord notes stacked in thirds of the scale (one octave under the melody)
  const chords = place.prog.map((d) => {
    const bass = degreeNote(place.root, scale, d) - 24;
    const tones = [0, 2, 4].map((k) => degreeNote(place.root, scale, d + k) - 12);
    return [bass, tones];
  });
  // melody: on the beats of the rhythm, a note of the bar's chord (strong beats) or a step of the scale (the others), kept in one octave and a half
  const melody = [];
  let prev = place.root + 12;
  place.prog.forEach((d, bar) => {
    place.rhythm.forEach((eighth, k) => {
      const chordTone = (k % 2 === 0);
      const options = chordTone ? [0, 2, 4].map((o) => degreeNote(place.root + 12, scale, d + o)) : [0, 1, 2, 3, 4].map((o) => degreeNote(place.root + 12, scale, d + o));
      const near = options.filter((m) => Math.abs(m - prev) <= 7 && m >= place.root + 5 && m <= place.root + 26);
      const pool = near.length ? near : options;
      let m = pool[Math.floor(r() * pool.length)];
      if (bar === 7 && k === place.rhythm.length - 1) m = degreeNote(place.root + 12, scale, 0); // the tune ends at home
      melody.push([bar, eighth, m]);
      prev = m;
    });
  });
  return { tempo: place.tempo, chords, melody, lead: place.lead, shaker: place.shaker };
}

export const WORLD_THEMES = Object.fromEntries(Object.entries(PLACES).map(([id, p]) => [id, buildTheme(p)]));
/** The tune of a world (the garden tune for a world that has none). */
export const themeForWorld = (id) => WORLD_THEMES[id] || null;
