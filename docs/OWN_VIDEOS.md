# The owner's own lesson videos (streamed from your own storage)

The 60 lesson videos made by the owner's family are shown in the app under **تعلّم واكتشف → دروس الفيديو**. They are NOT
bundled in the app (about 540 MB) and they are NOT from YouTube. They sit in your own free Cloudflare storage and the app
streams them. Adding or fixing a video needs no new app version: change the files and `lessons.json`.

## 1. Prepare the files on your laptop (once)
```powershell
winget install ffmpeg          # once, then close and reopen PowerShell
cd C:\dev\rehlaty
.\tools\prepare_videos.ps1 -In "$HOME\Downloads" -Out "$HOME\rehlaty_videos"
```
Point `-In` at the folder that holds only the lesson `.mp4` files (copy them into one folder first if Downloads has other videos).
It makes, in `rehlaty_videos`:
- `videos\lesson_01.mp4` ... 720p, small, and starts playing before the whole file has downloaded
- `posters\lesson_01.jpg` ... thumbnails for the cards
- `lessons.json` ... a draft list. **Open it and fix the Arabic titles and the categories** (`letters`, `numbers`, `words`,
  `animals`, `shapes`, `body`, `songs`, `general`). Every video is set to ages 1 to 6; change `minAge` / `maxAge` per video if you like.

Expect roughly 120–180 MB in total.

## 2. Put them online (Cloudflare R2, free tier)
1. Cloudflare dashboard -> **R2 Object Storage** -> create a bucket, for example `rehlaty-lessons`. (R2 may ask you to add a
   payment card to switch it on; the free allowance, 10 GB, is far more than you need.)
2. Upload the three things: the folder `videos`, the folder `posters`, and the file `lessons.json` (drag and drop in the bucket page).
3. Bucket -> **Settings** -> **Public access**: connect a **custom domain** (for example `lessons.yourdomain.com`) — this is the
   proper way. (`r2.dev` addresses also work for testing but are rate-limited.)
4. Bucket -> **Settings** -> **CORS policy**: allow `GET` and `HEAD` from your site addresses (`https://demo-site-e3g.pages.dev`
   and your own domain). Thumbnails need it on the web version. Example:
```json
[{"AllowedOrigins": ["https://demo-site-e3g.pages.dev"], "AllowedMethods": ["GET", "HEAD"], "AllowedHeaders": ["*"], "MaxAgeSeconds": 3600}]
```
5. Open `https://lessons.yourdomain.com/lessons.json` in a browser: you should see the list.

## 3. Tell the app where they are
The address is set when the app is built and is never written in the code:
```bash
export LESSONS_BASE_URL=https://lessons.yourdomain.com
tool/build_demo_login.sh build/demo_login        # adds the address to the page security headers too
```
For an Android build: `flutter build apk --release --dart-define=LESSONS_BASE_URL=https://lessons.yourdomain.com`.
Until the address is set the page says "Videos are coming soon" and the app contacts nobody.

## What the app does
- Reads `lessons.json` (and keeps a copy on the device so the list still shows without internet; the videos themselves need internet).
- Shows the lessons for the child's age with big thumbnails, the Arabic title, the length and category tabs.
- Plays them full screen with big play/pause, a seek bar, previous/next and replay. A video that is playing is never cut off by the
  daily limit; a paused or finished one closes when time is up.
- Only addresses inside the lessons address are ever requested. No ads, no tracking, no YouTube.

## Limits
- Needs internet to watch. (Offline downloads can be added later.)
- Nothing here checks the videos themselves: you decide what is in `lessons.json`.
