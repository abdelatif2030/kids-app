#!/bin/bash
# Waits for Cloudflare's daily free allowance to reset (00:00 UTC), then generates the menu pictures (cards.json) and cuts them
# into assets/games/<game>/card.webp and assets/games/sections/<id>.webp. Safe to run again: pictures that exist are skipped.
# Keys come from the Windows user environment (CLOUDFLARE_AI_TOKEN, CLOUDFLARE_ACCOUNT_ID); nothing is written to a file.
cd "$(dirname "$0")/.." || exit 1
[ -n "$CLOUDFLARE_AI_TOKEN" ] || export CLOUDFLARE_AI_TOKEN="$(powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('CLOUDFLARE_AI_TOKEN','User')" | tr -d '\r')"
[ -n "$CLOUDFLARE_ACCOUNT_ID" ] || export CLOUDFLARE_ACCOUNT_ID="$(powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('CLOUDFLARE_ACCOUNT_ID','User')" | tr -d '\r')"
for attempt in 1 2 3 4 5 6; do
  out=$(node tools/gen_images_cf.mjs --jobs tools/art_jobs/cards.json --steps 5 2>&1 | tail -3)
  echo "$out"
  if echo "$out" | grep -q "STOP daily\|Set CLOUDFLARE"; then
    # not reset yet: wait until a few minutes after 00:00 UTC
    now=$(date -u +%s); next=$(date -u -d "tomorrow 00:05" +%s 2>/dev/null || echo $((now + 3600)))
    [ "$(date -u +%H)" -ge 1 ] || next=$((now + 600))
    wait=$((next - now)); [ $wait -lt 300 ] && wait=300
    echo "waiting ${wait}s"; sleep "$wait"
  else
    break
  fi
done
python tools/process_art.py cards --keep 2>&1 | tail -60
echo DONE
