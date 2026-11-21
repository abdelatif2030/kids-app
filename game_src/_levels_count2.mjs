import fs from 'node:fs'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const want = ['hot_spring','pearl_divers','sky_capy','creator_tycoon','honey_farm','fizz_runner','chomp_maze','pin_puzzle','marble_dozer','rug_cleaning','sky_jumper','sky_ace','sweet_tray','ball_scoop','hop_world','space_store','pumpkin_pie','gum_ball','zombie_rooftop','card_battle','lane_shooter','highway_race','barrel_knights','trick_or_treat','fashion_queen','hamster_warrior'];
for (const g of want) {
  const dir = path.join(g, 'src'); if (!fs.existsSync(dir)) { console.log(g, 'nosrc'); continue; }
  const found = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    try { const m = await import(pathToFileURL(path.resolve(dir, f)).href); for (const [k, v] of Object.entries(m)) if (Array.isArray(v) && v.length >= 3 && v.length <= 60 && /^[A-Z_]+$/.test(k)) found.push(`${k}=${v.length}`); } catch {}
  }
  console.log(g.padEnd(18), found.join(' '));
}
