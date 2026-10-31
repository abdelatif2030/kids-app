# Rehlaty — video lesson library

## Rules enforced in code
- A child sees a video only if ALL are true: it is listed (`assets/videos.json` or added by a parent by exact link), its owner status is not `pending`/`rejected`,
  **a parent reviewed and approved it on this device (review record with the complete five-point checklist and a date)**, it was not rejected, and it is not disabled. Default for every video: not approved, so a new install shows children no videos.
- A parent can approve a lesson only after opening it in the preview player (`LessonStore.setApproved` refuses otherwise). Opening the preview is a prerequisite, **not proof the
  parent watched it**; the app never records a lesson as "reviewed" or "verified".
- Adding by link accepts only one exact YouTube video (`parseYoutubeUrl`): youtube.com/watch?v=, youtu.be/, /embed/ on YouTube's own hosts, an 11-character id. Playlists,
  channels, searches, shorts, other sites, ports, credentials and extra paths are refused. Only the id is stored; the link is never opened. Added lessons start unapproved.
- Playback is only the official YouTube iframe player with `strictRelatedVideos`; "related" videos come only from the approved list for the age. The player has loading, ended,
  error ("not available right now", retry, back) and offline ("needs internet", retry, back) states. Preview does not write watch history.
- Parent controls (Parent settings -> Lesson library): search, age-band filter (1-2, 3-4, 5-6), category filter, preview, approve, withdraw approval, disable/enable, add by link,
  remove (parent-added only; bundled lessons can be disabled but not deleted).
- Child list: category chips, an offline notice (the list stays), and a friendly empty state telling the child to ask a grown-up. No external link anywhere.

## Content status (honest)
- 157 bundled entries (131 for ages 1-6, 26 for ages 7-12 kept as legacy and hidden from the 1-6 review list). Their ids were copied from web-search results by the assistant; **none was
  watched, none was checked for embedding, titles and age ranges are the assistant's wording, none is verified.** YouTube was unreachable from the build environment.
- No licence or channel-ownership check was done. Treat every bundled entry as a candidate list for the parent to review.

## What is still missing
- Verified, curated 1-6 lessons with licence/source records; a lesson-to-activity link (video then matching game); per-lesson progress.
- Real-device playback tests (embed errors, orientation, audio focus).

## Release 1 update (2026-10-31)
Reviewed/approved/rejected by a human: **0 of 157** (`VIDEO_REVIEW_STATUS.md`). Review records live in `video_reviews` (status, date, five checks); rejection, withdrawal and disabling remove a lesson from children immediately. The player blocks other videos and links out (`safe_player.dart`; device verification pending). The decision about a starting list is the parent's, lesson by lesson; no list was selected or approved on anyone's behalf.
