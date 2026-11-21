#!/bin/bash
cd /c/dev/rehlaty/game_src
for d in */; do d=${d%/}; [ -f "$d/package.json" ] || continue
  if grep -q '"test"' "$d/package.json"; then
    out=$(cd $d && timeout 280 npm test --silent 2>&1); rc=$?
    p=$(echo "$out" | grep -E '^ℹ pass' | awk '{print $3}'); f=$(echo "$out" | grep -E '^ℹ fail' | awk '{print $3}')
    echo "$d rc=$rc pass=$p fail=$f"
    [ $rc -ne 0 ] && echo "$out" | grep -E 'not ok|Error|assert' | head -5
  else echo "$d NO_TEST"; fi
done
