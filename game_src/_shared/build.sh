#!/bin/bash
# build one game with any available esbuild: _shared/build.sh <game>
cd "$(dirname "$0")/../$1" || exit 1
[ -d node_modules/three ] || npm ci --silent >/dev/null 2>&1
CMD=$(node -e "console.log(require('./package.json').scripts.build)")
E=$(ls node_modules/.bin/esbuild 2>/dev/null || echo /home/sandbox/kids-app/game_src/moto_race/node_modules/.bin/esbuild)
eval "${CMD/esbuild/$E}"
