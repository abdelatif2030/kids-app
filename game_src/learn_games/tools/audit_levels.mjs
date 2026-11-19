// Audit of «عالم رحلتي التعليمي»: for every level, how many DIFFERENT things (pictures / prompts) a child can meet, found by playing
// many games with a fresh memory per child until nothing new appears. Also checks that no game repeats a thing inside itself.
// Run: node tools/audit_levels.mjs
// node tools/audit_levels.mjs --assume-voiced   counts what the levels could offer once EVERY sentence of the extra questions has a recorded clip
if (process.argv.includes('--assume-voiced')) globalThis.__LEARN_ASSUME_VOICED = true;
const { ALL_LEVELS, LevelPlay, PICKS } = await import('../src/letters/levels.js');
const { FreshMemory } = await import('../src/letters/fresh.js');
const { ROUNDS } = await import('../src/letters/sim.js');

const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];
const rows = [];
let repeatsInside = 0;
for (const lv of ALL_LEVELS) {
  const mem = new FreshMemory(null, 99999);
  const seen = new Set();
  const answers = new Set();
  const prompts = new Set();
  let stale = 0;
  let g = 0;
  while (g < 600 && stale < 40) {
    mem.begin(lv.id);
    const p = new LevelPlay(lv.id, 5, 100 + g * 7, mem, WORLDS[g % 12]);
    const ks = p.rounds.map((r) => r.key || r.answer);
    const inside = new Set();
    for (const k of ks) { if (inside.has(k)) repeatsInside += 1; inside.add(k); }
    let fresh = 0;
    for (const r of p.rounds) {
      const k = r.key || r.answer;
      if (!seen.has(k)) { seen.add(k); fresh += 1; }
      answers.add(r.answer);
      if (r.prompt || r.question || r.say) prompts.add(r.prompt || r.question || r.say);
    }
    ks.forEach((k) => mem.note(k));
    stale = fresh === 0 ? stale + 1 : 0;
    g += 1;
  }
  const bank = lv.topic && PICKS[lv.table] ? PICKS[lv.table].items.length : null;
  rows.push({ id: lv.id, ar: lv.ar, things: seen.size, answers: answers.size, prompts: prompts.size, games: g, bank });
}
rows.sort((a, b) => a.things - b.things);
console.log('level | distinct things | distinct answers | picture bank | games played');
for (const r of rows) console.log(`${r.id.padEnd(16)} ${r.ar.padEnd(24)} ${String(r.things).padStart(4)} ${String(r.answers).padStart(4)} ${String(r.bank ?? '-').padStart(4)} ${String(r.games).padStart(4)}${r.things < 100 ? '   <100' : ''}`);
console.log(`below 100: ${rows.filter((r) => r.things < 100).length} of ${rows.length}; repeats inside one game: ${repeatsInside}`);
