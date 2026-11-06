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
# The owner's lesson videos come from one host (docs/OWN_VIDEOS.md): allow it, and only it, for video, thumbnails and the list.
if [ -n "${LESSONS_BASE_URL:-}" ]; then
  host="$(printf '%s' "$LESSONS_BASE_URL" | sed -E 's#^(https?://[^/]+).*#\1#')"
  sed -i -E "s#media-src 'self'#media-src 'self' $host#; s#img-src 'self'#img-src 'self' $host#; s#connect-src 'self'#connect-src 'self' $host#" "$out/_headers"
fi
echo "built $out (login headers installed)"
