#!/bin/bash
cd /c/dev/rehlaty/game_src
for d in */; do d=${d%/}; [ -f "$d/package.json" ] || continue
  grep -q '"build"' "$d/package.json" || continue
  out=$(cd $d && npm run build --silent 2>&1); rc=$?
  echo "$d rc=$rc"
  [ $rc -ne 0 ] && echo "$out" | tail -3
done
