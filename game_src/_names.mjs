import path from 'node:path'; import { pathToFileURL } from 'node:url';
const list = { nutmeg_rush: 'sim.js:LEVELS', ocean_defense: 'sim.js:LEVELS', rhythm: 'sim.js:TRACKS', highway_race: 'sim.js:STAGES', samurai: 'sim.js:STAGES', splash_race: 'sim.js:ROUNDS', moto_race: 'sim.js:ROUNDS', rain_circuit: 'sim.js:ROUNDS', dune_titans: 'sim.js:ROUNDS', air_race: 'sim.js:COURSES', summit_rush: 'sim.js:COURSES', carnival_race: 'data.js:TRACKS', hero_tower: 'sim.js:CHAPTERS', winter_camp: 'sim.js:BUILDS', fox_family: 'sim.js:LEVELS', ice_dragon: 'sim.js:LEVELS', deep_sea: 'sim.js:LEVELS', hungry_frog: 'sim.js:LEVELS', jungle_adventure: 'levels.js:LEVELS', trick_or_treat: 'sim.js:LEVELS', coastal_drive: 'sim.js:LEVELS', golden_tail: 'sim.js:LEVELS', castaway_raft: 'sim.js:LEVELS', temple_army: 'sim.js:LEVELS', course_race: 'game.js:ROUNDS', dino_grow: 'sim.js:LEVELS' };
for (const [g, spec] of Object.entries(list)) {
  const [f, k] = spec.split(':');
  try {
    const m = await import(pathToFileURL(path.resolve(g, 'src', f)).href);
    const arr = m[k];
    console.log(g, arr.map((x) => (x.id || '') + (x.ar ? '/' + x.ar : '') + (x.name ? '/' + (x.name.ar || x.name) : '')).join(' | '));
  } catch (e) { console.log(g, 'ERR', e.message.slice(0, 60)); }
}
