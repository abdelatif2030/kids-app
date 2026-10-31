# Rehlaty — security and privacy review (features F1-F7)

Reviewed by reading the new code; no penetration test and no Strix scan was run.

| Area | Finding |
|---|---|
| Network | None of the seven features makes a network call. The only new outbound data is zero. |
| Companion | Says only ids from `kDialogue` (test: every returned id exists and belongs to the asked character). No free text, no model, no child input reaches it. |
| Child data | New records are keyed by child id and listed in export, delete-one-child and delete-all (`test/new_features_privacy_test.dart`). The parent's companion on/off switch is a device setting and survives a data reset. |
| Isolation | Each store reads `store[childId]` only; museum, world, adventures and family time tests check a second child sees nothing of the first. |
| Reward abuse | Companion events, adventures and everyday tasks are claimed once (per child, per week or per day). Replays give no second star or celebration. |
| Everyday tasks | Every task shows a supervision level; kitchen, outings and safety tasks need a grown-up present; none uses knives, stoves or ovens; none asks for photos, addresses or phone numbers. |
| Parent gate | The multiplication question is a speed bump for small children, not authentication; confirmations are low-risk records. |
| Family Time | No chat, call or contact is created. Remote family stays in the existing parent-approved family button. |
| Stories | The companion never speaks at the end of a story when sleep-at-end is on. |
| Damaged storage | Every new store catches decode errors and starts empty. |

Open: Firestore rules and family features still need re-publishing and real-Firebase testing (earlier work). The existing parent question is not a security boundary.

## Update 2026-10-31: video library
| Area | Finding |
|---|---|
| Child exposure | A video reaches a child only if a parent approved it (after a preview), it is not rejected/pending/disabled, and it is in the bundled list or was added by exact link. Default: none. |
| Added links | Strict parser (`parseYoutubeUrl`, tested against playlists, channels, searches, shorts, other hosts, ports, credentials, look-alike hosts); only the 11-character id is stored; the link is never opened; at most 60. |
| Playback | Official YouTube iframe only; related videos only from the approved list; preview writes no watch history. |
| Thumbnails | The child list requests `img.youtube.com` thumbnails only for approved lessons (a third-party request; no cookies or account). |
| Not done | No check that a video is embeddable, safe or licensed; the parent's preview is the only review and the app does not record it as verification. |
