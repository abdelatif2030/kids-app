#!/bin/sh
# Serve the book_stories demo locally (from the repo's assets/ root so the
# shared Tajawal fonts at ../fonts resolve exactly like in the app).
cd "$(dirname "$0")/../../assets" || exit 1
echo "Open: http://127.0.0.1:8123/book_stories/index.html"
python3 -m http.server 8123
