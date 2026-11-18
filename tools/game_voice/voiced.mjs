// Writes game_src/learn_games/src/letters/voiced.json: the sentences that already have a recorded clip. The topic levels only ask facts and
// pictures whose sentence is in this list, so a question is never silent. Run again after new clips are made.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const lines = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const have = lines.filter((l) => fs.existsSync(path.join(ROOT, 'assets/games/learn_voice/ar', `${l.id}.mp3`))).map((l) => l.text);
fs.writeFileSync(path.join(ROOT, 'game_src/learn_games/src/letters/voiced.json'), JSON.stringify(have));
console.log(have.length, 'of', lines.length, 'sentences have a clip');
