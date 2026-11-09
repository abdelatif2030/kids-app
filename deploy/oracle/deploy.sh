#!/usr/bin/env bash
# Builds the web demo, compresses it, and copies it to the Oracle VM. NOT tested against a real VM yet.
# Needs on THIS computer: flutter, brotli, gzip, rsync, ssh. Needs the same FIREBASE_* / LESSONS_BASE_URL variables as
# tool/build_demo_login.sh. Usage:  SERVER=ubuntu@1.2.3.4 deploy/oracle/deploy.sh
set -euo pipefail
: "${SERVER:?set SERVER=user@ip}"
root="$(cd "$(dirname "$0")/../.." && pwd)"
out="$root/build/oracle_site"
rm -rf "$out"
"$root/tool/build_demo_login.sh" "$out"
python3 "$root/deploy/oracle/headers_to_caddy.py" "$root/tool/headers_login" > "$out/../headers.caddy"
rm -f "$out/_headers"
# brotli (level 11) and gzip copies next to each compressible file; Caddy sends the smallest one the browser accepts.
find "$out" -type f \( -name '*.js' -o -name '*.mjs' -o -name '*.wasm' -o -name '*.json' -o -name '*.html' -o -name '*.otf' -o -name '*.ttf' -o -name '*.svg' -o -name 'NOTICES' \) | while read -r f; do
  brotli -q 11 -f -k "$f" -o "$f.br"
  gzip -9 -f -k "$f"
done
rsync -az --delete "$out/" "$SERVER:/srv/rehlaty/"
rsync -az "$out/../headers.caddy" "$SERVER:/tmp/headers.caddy"
ssh "$SERVER" 'sudo mv /tmp/headers.caddy /etc/caddy/headers.caddy && sudo systemctl reload caddy'
echo "done: https://\$DOMAIN"
