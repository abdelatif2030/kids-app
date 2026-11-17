#!/usr/bin/env bash
# Builds the web demo and publishes it to the Cloudflare Pages branch `demo-site` (https://demo-site-e3g.pages.dev).
#   FIREBASE_API_KEY=... FIREBASE_APP_ID=... FIREBASE_SENDER_ID=... FIREBASE_PROJECT_ID=... FIREBASE_AUTH_DOMAIN=... LESSONS_BASE_URL=... \
#     bash tools/deploy_demo.sh "message"
# The values are NOT in the repository: ask the owner (Firebase console web app of project kids-app-2361e, and his lesson-video storage URL).
# The web build needs several free GB of RAM (close Chrome tabs if dart2js dies with "Could not start thread").
set -e
MSG="${1:-update}"
for v in FIREBASE_API_KEY FIREBASE_APP_ID FIREBASE_SENDER_ID FIREBASE_PROJECT_ID FIREBASE_AUTH_DOMAIN LESSONS_BASE_URL; do
  [ -n "${!v}" ] || { echo "Set $v in the environment first (see the header of this file)"; exit 1; }
done
cd "$(dirname "$0")/.."
WORK="${TMPDIR:-/tmp}/deploy_work"; mkdir -p "$WORK"
bash tool/build_demo_login.sh build/demo_login > "$WORK/build.log" 2>&1 || { tail -20 "$WORK/build.log"; exit 1; }
git fetch -q origin demo-site
git worktree remove --force "$WORK/demo_wt" 2>/dev/null || true
git worktree add -q "$WORK/demo_wt" origin/demo-site
( cd "$WORK/demo_wt" && cp _headers "$WORK/headers_old" && find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} + \
  && cp -r "$OLDPWD/build/demo_login/." . && git add -A >/dev/null 2>&1 && git commit -qm "Demo: $MSG" && git push -q origin HEAD:demo-site )
git worktree remove --force "$WORK/demo_wt"
echo "PUSHED - live in 1-3 minutes: https://demo-site-e3g.pages.dev"
