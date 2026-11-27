@echo off
REM Serve the book_stories demo locally (from the repo's assets\ root so the
REM shared Tajawal fonts resolve exactly like in the app).
cd /d "%~dp0..\..\assets"
echo Open: http://127.0.0.1:8123/book_stories/index.html
python -m http.server 8123
