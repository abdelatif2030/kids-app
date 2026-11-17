#!/usr/bin/env bash
# One command to get a fresh machine / Claude account up to date and to see what is left.
#   First time:   git clone https://github.com/abdelatif2030/kids-app.git rehlaty && cd rehlaty && git checkout feature/rehlaty && bash tools/sync_and_status.sh
#   Next times:   bash tools/sync_and_status.sh
# It pulls the latest, checks the tools, builds and tests the learning game, and prints the status of pictures, packs and voices.
# It never needs (and never prints) a secret key.
set -e
cd "$(dirname "$0")/.."
echo "== 1. git: latest on feature/rehlaty =="
git fetch -q origin
git checkout -q feature/rehlaty
git pull --no-edit -q origin feature/rehlaty || echo "!! pull needs attention (conflict?): fix it, then run this again"
git log -1 --format="latest commit: %h %s (%cr)"

echo "== 2. tools =="
for t in git node npm python ffmpeg ffprobe; do
  if command -v "$t" >/dev/null 2>&1; then echo "ok   $t"; else echo "MISSING $t  (install it)"; fi
done
command -v flutter >/dev/null 2>&1 && echo "ok   flutter" || echo "note: flutter is only needed to build/deploy the demo"

echo "== 3. learning game: build + tests =="
( cd game_src/learn_games && { [ -d node_modules ] || npm install --silent; } && npm run build:letters 2>&1 | tail -1 && npm test 2>&1 | grep -E "^(ℹ|#) (pass|fail)" || true )

echo "== 4. voices =="
node -e "
const fs=require('fs');
const L=JSON.parse(fs.readFileSync('assets/games/learn_voice/lines.json','utf8')).filter(l=>l.lang==='ar');
const miss=L.filter(l=>!fs.existsSync('assets/games/learn_voice/ar/'+l.id+'.mp3'));
console.log('Arabic sentences:',L.length,'| without a recorded clip:',miss.length);
miss.slice(0,10).forEach(l=>console.log('  -',l.text));
"

echo "== 5. picture packs (a pack turns on only when all its 12 pictures exist) =="
PYTHONUTF8=1 python - <<'EOF'
import json, glob, os
art = 'assets/games/art'
for f in sorted(glob.glob('tools/game_voice/packs/*.json')):
    p = json.load(open(f, encoding='utf-8'))
    have = sum(os.path.exists(os.path.join(art, i['thing'] + '.webp')) for i in p['items'])
    print(f"  {p['pack']:9s} {have}/{len(p['items'])} pictures  {'ON' if have == len(p['items']) else 'waiting for the sheet'}  (prefix {p['prefix']}_)")
pads = sorted(glob.glob(os.path.join(art, 'h_pad_*.webp')))
src = open('game_src/learn_games/src/kit/worlds3d.js', encoding='utf-8').read()
import re
m = re.search(r"padPics:\s*\[([^\]]*h_pad_[^\]]*)\]", src)
wired = re.findall(r"'(h_pad_\w+)'", m.group(1)) if m else []
missing = [w for w in wired if not os.path.exists(os.path.join(art, w + '.webp'))]
if pads and wired and not missing:
    print(f"  home pads (h_pad_*): {len(pads)} pictures, wired in worlds3d.js padPics ({', '.join(wired)})")
elif pads and not wired:
    print(f"  home pads (h_pad_*): {len(pads)} pictures exist but padPics in worlds3d.js does not use them")
elif missing:
    print('  home pads (h_pad_*): padPics names files that do not exist: ' + ', '.join(missing))
else:
    print('  home pads (h_pad_*): MISSING - the home world uses the plain raft')
EOF

echo
echo "== NEXT =="
echo "1) Read docs/README_FULL_HANDOVER.md (Part C = what remains, Appendix 1 = the picture prompts)."
echo "2) When the owner sends a sheet:  PYTHONUTF8=1 python tools/art/cut_pack.py <pack> <sheet no.> \"<images folder>\""
echo "   then: PYTHONUTF8=1 python tools/game_voice/make_more_words.py && node tools/game_voice/lines.mjs && PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py"
echo "   then new voices (key only in the environment):  ELEVENLABS_API_KEY=... node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar"
echo "   then: cd game_src/learn_games && npm run build:letters && npm test ; commit, push, deploy."
