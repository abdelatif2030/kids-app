# Acceptance status (2026-10-30)

What "done" means here, per item. **Built** = code exists. **Automated** = tests ran in the cloud session (1068 app tests pass; 61 Firestore-rules tests pass on the emulator; `flutter analyze` shows only old lints). **On a device** = a person ran the matching test in `docs/MANUAL_TESTS.md`: **nothing has been run on a device yet**, so nothing below is accepted. Items in "Needs you" are not done and are not counted as done.

## Items from the numbered brief

| Step | What | Built | Automated | On a device | Notes |
|---|---|---|---|---|---|
| 1 | Run tests and analyze | yes | yes | n/a | 1068 pass; old lints only (J-section tests added) |
| 2 | Gallery tabs All / Drawings / Words / Stories, rename kept | yes | yes (`gallery_tabs_test`) | no | |
| 3 | Call screen layout (big mute / camera / end, status pill) | yes | yes (`family_calls_test`, 14 layout tests) | no | Call logic untouched. Real audio/video never tested |
| 4 | Permissions summary for parents | yes | yes (`permissions_screen_test`, checks the manifest) | no | Asks for nothing itself |
| 5 | Four weeks side by side in the dashboard | yes | yes (`progress_trend_test`) | no | Counts only; empty state under two weeks |
| 6 | Pictures and small activities in the stories | yes | yes (`story_extras_test`) | no | Story text untouched. **Every new line needs native review** (`docs/CONTENT_REVIEW.md`) |
| 7 | Offline queue for family chat | yes | yes (`family_outbox_test` + 1 rules test) | no | Not run against real Firebase. Text/phrases/stickers only; no background sending |
| 8 | Web offline check | run | yes (scripts in `tools/`) | n/a | **Result: the web build cannot start with no internet** (`docs/WEB_OFFLINE.md`) |
| 9 | Manual tests and this file | yes | n/a | n/a | New section J in `docs/MANUAL_TESTS.md` |

## Other work done on 2026-10-30
Opening animation (2 s) · new logo everywhere (in-app, background, launcher and web icons) · island map home as a switchable view · lands collapsed into one card · full-screen video on phones · family requests by user name (not e-mail) · privacy wording about the microphone fixed · README with status.

## Needs you (not done, not counted as done)
1. **Firebase**: create the project, turn it on (`kFirebaseEnabled`), re-publish `firestore.rules` (user names, message ids), then run J8 and J10 and F1–F6 with real accounts. Nothing involving Firebase has run against the real service.
2. **TURN server** for family calls (the app uses STUN only): calls behind strict networks will fail. Choose a provider and add its address; test J-calls on two real phones.
3. **AI server**: the plan assistant's AI suggestions are off; they need your own HTTPS endpoint (`kAiEndpoint`). Without it the app works with plain rules.
4. **Native audio review**: 0 of 360 lesson sounds are approved; recordings or a reviewed voice are needed, with an Arabic and a language reviewer (`docs/AUDIO_QA.md`).
5. **Native text review**: story texts, letters and every new line in `docs/CONTENT_REVIEW.md`.
6. **Real devices**: build the Android app (no Android SDK in the cloud session), run `docs/MANUAL_TESTS.md`, especially J1, J3, J8.
7. **Videos**: watch and prune the 157 whitelisted videos (IDs were copied from search results, never embed-checked).
8. **Logo**: confirm you own the rights; supply a higher-resolution file for the Play Store.
9. **Web offline**: decide whether the web version must work offline (needs a service worker, CanvasKit and fonts bundled). Today it does not.
10. **Cartoon video**: Higgsfield Plus subscription (or another route) to finish «الفانوس بتاعي!» with Kling 3.0; voices must be judged by a person who can listen (`rehlaty_ramadan_poc/README.md`).
