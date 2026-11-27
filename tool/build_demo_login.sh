#!/usr/bin/env bash
# Builds the hosted web demo WITH login (Google + e-mail). The Firebase web identifiers are PUBLIC values from
# Firebase console -> Project settings -> Your apps -> Web app; pass them as environment variables (never commit them):
#   FIREBASE_API_KEY FIREBASE_APP_ID FIREBASE_SENDER_ID FIREBASE_PROJECT_ID FIREBASE_AUTH_DOMAIN
# Usage: tool/build_demo_login.sh [output-dir]   (default build/demo_login)
set -euo pipefail
out="${1:-build/demo_login}"
for v in FIREBASE_API_KEY FIREBASE_APP_ID FIREBASE_SENDER_ID FIREBASE_PROJECT_ID FIREBASE_AUTH_DOMAIN; do
  if [ -z "${!v:-}" ]; then echo "missing $v" >&2; exit 1; fi
done
flutter build web --release --no-web-resources-cdn -o "$out" \
  --dart-define=DEMO=true --dart-define=DEMO_FULL=true --dart-define=DEMO_LOGIN=true \
  --dart-define=FIREBASE_API_KEY="$FIREBASE_API_KEY" --dart-define=FIREBASE_APP_ID="$FIREBASE_APP_ID" \
  --dart-define=FIREBASE_SENDER_ID="$FIREBASE_SENDER_ID" --dart-define=FIREBASE_PROJECT_ID="$FIREBASE_PROJECT_ID" \
  --dart-define=FIREBASE_AUTH_DOMAIN="$FIREBASE_AUTH_DOMAIN" \
  --dart-define=LESSONS_BASE_URL="${LESSONS_BASE_URL:-}"
cp tool/headers_login "$out/_headers"
# Start downloading the Firebase scripts at once, while the big app files download (the app would otherwise fetch them one
# after another only after it has started, and the first screen waits for them). Same files and version the plugin loads
# (firebase_core_web 4.1.0 -> SDK 13.1.0; keep in step with tool/csp_hashes.py).
fb=https://www.gstatic.com/firebasejs/13.1.0
sed -i "s#</head>#<link rel=\"preload\" as=\"fetch\" href=\"assets/assets/auth/login.webp\" crossorigin><link rel=\"modulepreload\" href=\"$fb/firebase-app.js\" crossorigin><link rel=\"modulepreload\" href=\"$fb/firebase-auth.js\" crossorigin><link rel=\"modulepreload\" href=\"$fb/firebase-firestore-pipelines.js\" crossorigin></head>#" "$out/index.html"
# The owner's lesson videos come from one host (docs/OWN_VIDEOS.md): allow it, and only it, for video, thumbnails and the list.
if [ -n "${LESSONS_BASE_URL:-}" ]; then
  host="$(printf '%s' "$LESSONS_BASE_URL" | sed -E 's#^(https?://[^/]+).*#\1#')"
  sed -i -E "s#media-src 'self'#media-src 'self' $host#; s#img-src 'self'#img-src 'self' $host#; s#connect-src 'self'#connect-src 'self' $host#" "$out/_headers"
fi
# Learn-world voice clips come from the R2 bucket (docs/LEARNING_MASTER_PLAN_V2.md, D4): Cloudflare Pages allows 20,000 files per deploy.
# The clips are NOT shipped in the demo: window.__learnVoiceBase (appended to manifest.js) points the game at the bucket, the CSP allows that host
# for media, and the local clip files are removed from the output. Set LEARN_VOICE_R2_URL="" to keep the clips inside the demo.
vr="${LEARN_VOICE_R2_URL-https://pub-0be2a52cbdc9457abd633a86141df8da.r2.dev}"
if [ -n "$vr" ]; then
  vdir="$out/assets/assets/games/learn_voice"
  if [ -d "$vdir" ]; then
    printf 'window.__learnVoiceBase=%s;
' "\"${vr%/}/learn_voice/\"" >> "$vdir/manifest.js"
    for l in ar en de fr it; do rm -rf "$vdir/$l"; done
    sed -i -E "s#media-src 'self'#media-src 'self' ${vr%/}#; s#connect-src 'self'#connect-src 'self' ${vr%/}#" "$out/_headers"
    echo "learn voices: served from $vr (local clips removed from the build)"
  fi
fi
echo "built $out (login headers installed)"
