
import { spawnSync } from 'node:child_process';
test('the list of sentences is current: every word a game can say is in lines.json (run tools/game_voice/lines.mjs after adding words, then make their clips)', () => {
  const r = spawnSync(process.execPath, [new URL('../../../tools/game_voice/lines.mjs', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'), '--check'], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
});
