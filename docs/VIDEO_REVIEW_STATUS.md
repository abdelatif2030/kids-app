# Video candidates: what has actually been reviewed

Updated 2026-10-31 (later the same day). **Reviewed by the owner: 157 of 157.** The owner of the app stated that he watched all of them and they are fine, and asked for them to be shown to children by age and subject. The assistant did not watch, check or verify any video: `"verification": "unverified"` stays, and each entry now carries `"ownerReviewed": true` (the owner's decision, recorded in `assets/videos.json`). The per-video five-check form was not filled in the app for these 157.

How it works now: a bundled video is shown to children of its age when `ownerReviewed` is true. A parent can still hide any video on their device (Parent settings -> video review), and videos a parent adds by link still need the parent's own preview and five checks. The text below is the earlier state (before the owner's statement) and is kept for the record.

Earlier state: **reviewed, approved and rejected by a human: 0 of 157.** Still unreviewed: 157 of 157.

- The 157 bundled entries are unverified candidates (`"verification": "unverified"` in `assets/videos.json`). Titles, ages and categories were written from search-result titles by the assistant.
- Nobody watched them; the development environment cannot reach YouTube. Channels, licences, advertisements, end-screen suggestions and embedding behaviour were NOT checked.
- The app stores each decision (status, date, five checks) on the parent's device only (`video_reviews`); there is no central record. When you review lessons, keep your own record in `docs/VIDEO_CANDIDATES.csv` (columns for watched / plays in the app / suitable / decision / notes).
- This file is not updated by the app. After you review, edit the line above with the real numbers, or tell the developer the numbers; do not write numbers that were not actually reviewed.
