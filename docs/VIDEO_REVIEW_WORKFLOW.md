# Video review: how a parent safely approves lessons

**Where things stand.** The app contains 157 *candidate* videos (`assets/videos.json`). Every one is marked `"verification": "unverified"`.
Nobody (not the app, not its developer) has watched them, checked that they play inside the app, or checked their licence or channel.
Titles and age ranges were written from search-result titles. **None is approved. A child sees none of them until you approve it.**

## What the app guarantees (all covered by automated tests)
- A fresh install shows a child **no videos at all**.
- A video reaches a child only when ALL are true: it is in the list (bundled or added by you), you opened its **Preview**, you ticked the **five checks** in the review sheet and pressed **Approve**, it was not **Rejected**, and it is not **Disabled**. A hand-edited record without the complete checklist does not count.
- Nothing can approve a video behind your back: approvals are stored only by your taps; the bundled file contains no approvals.
- No search, no recommendations outside the approved list for that age, no comments, no ads from the app, no links out. Videos play in YouTube's official player.
- Opening Preview does **not** mean the app has verified the video. It only unlocks the Approve button for you.

## Step by step (about 3-5 minutes per video; start with 5-10, not all 157)
1. Open the app, open the **Parent settings** (enter your PIN), then **Lesson library**.
2. Pick your child's age group (1-2, 3-4 or 5-6) and, if you like, a category. Choose the status **Waiting for approval**.
3. Tap **Preview** on one lesson. **Watch it all the way through, with sound on.** Look for: wrong language, bad audio, scary or confusing parts, ads or end-screen suggestions you are not happy with, content that is not right for the age, or content you do not agree with (for example religious teaching in a style your family does not follow).
4. Go back and tap **Review and decide**. A sheet shows the title, ages, language, category and the exact video address (to check the channel in your own browser; the app never opens it) and five checks: watched fully with sound; suits the age and level; language right; no unwanted ads, links, suggestions or frightening parts; suits your values and teaches something. Tick all five and press **Approve: show to the child**, or press **Reject** (you can **Reopen review** later), or **Later**. The decision and its date are saved on this device. Later you can **Disable** (hide, keep approval) or **Withdraw approval** (back to previewed): both take effect at once. Write the decision on your sheet (below).
5. Open the child's video list on the child's side to check that it appears and plays. If it shows "This video is not available right now", withdraw approval and note it.
6. Repeat. You can come back any time; nothing is approved unless you tapped it.
7. Every few weeks, repeat step 3 for a few approved lessons: YouTube videos can be changed or removed by their owners. Use **Withdraw approval** or **Disable** at once if something is wrong.

## A review sheet
`docs/VIDEO_CANDIDATES.csv` lists all 157 candidates with empty columns for what you watched and decided (open it in a spreadsheet). It is only a sheet for you: the app does not read it.

## Adding a lesson you chose yourself
Lesson library -> **Add a lesson by link**. Paste the address of ONE video (a normal YouTube video link). Playlists, channels, searches, shorts and other websites are refused. The lesson is saved as **not approved**; preview and approve it like any other.

## Where the app's help ends
The app cannot tell whether a video is safe, accurate, licensed, or still available. The preview-and-approve step is **your** review. If you are not sure about a video, do not approve it.

## For the project owner
- To ship a smaller, curated list: add real, watched, licence-checked entries to `assets/videos.json` yourself (never invent ids). Keep `"verification": "unverified"` unless a documented human review process exists and the code and tests are changed to record it (the current tests forbid `"verified"`).
- Record each review (who, when, source, licence) in a document; the app does not store this.


## States (what the app records, per lesson)
| State | Meaning | Visible to the child |
|---|---|---|
| Candidate | listed (bundled or added by link); never opened | no |
| Previewed | you opened the preview; no decision | no |
| Approved | checklist complete, date saved | **yes, unless disabled** |
| Disabled | approved but hidden by you | no |
| Rejected | you decided it is not suitable | no |
Filters in the Lesson library: Waiting for approval, Available to the child now, Disabled, Rejected, plus age band and category. The header shows how many are not previewed, previewed-undecided, approved and rejected.

## About the player (child safety, not verified on a device)
YouTube's own player contains links (the title, the logo, "Watch on YouTube", end-screen and related-video suggestions). The package used would load such a suggestion INTO the player (a video nobody approved) or open the link outside the app. `lib/safe_player.dart` replaces those rules: such navigations are refused; advertisements and YouTube's branding are not removed. It was written without a device and must be verified in `docs/REAL_DEVICE_TEST_GUIDE.md` round E.
