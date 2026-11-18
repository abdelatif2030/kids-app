// Checks a (new) ElevenLabs key before continuing the game voices: is the key valid, how many credits are left, and is the game's voice
// (Fatima, id I3u6waC588j43py1kDN2 unless --voice is given) usable with THIS account?
//   ELEVENLABS_API_KEY=... node tools/game_voice/check_voice.mjs [--voice <id>]
// A voice id belongs to the account that made or added it. If the check says "not found", see docs/VOICE_CONTINUITY.md (add it from the voice
// library, or clone it from the clips we already have).
const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i > 0 ? process.argv[i + 1] : d; };
const KEY = process.env.ELEVENLABS_API_KEY;
const VOICE = arg('voice', 'I3u6waC588j43py1kDN2');
if (!KEY) { console.error('Set ELEVENLABS_API_KEY in the environment first.'); process.exit(1); }
const get = async (path) => { const r = await fetch(`https://api.elevenlabs.io${path}`, { headers: { 'xi-api-key': KEY } }); return { status: r.status, body: await r.json().catch(() => ({})) }; };
const sub = await get('/v1/user/subscription');
if (sub.status !== 200) { console.log(`KEY problem: HTTP ${sub.status} ${JSON.stringify(sub.body).slice(0, 200)}`); process.exit(2); }
const left = (sub.body.character_limit ?? 0) - (sub.body.character_count ?? 0);
console.log(`plan: ${sub.body.tier}; credits used ${sub.body.character_count} of ${sub.body.character_limit} (left ${left})`);
const v = await get(`/v1/voices/${VOICE}`);
if (v.status === 200) console.log(`voice OK: "${v.body.name}" (${VOICE}), category ${v.body.category}`);
else console.log(`voice NOT usable with this account (HTTP ${v.status}). Add it from the voice library or clone it: docs/VOICE_CONTINUITY.md`);
const sentences = 2800 * 22; // the approximate size of what is still to record (characters), for planning
console.log(`about ${sentences} characters are still to record at most; the new account has ${left}.`);
