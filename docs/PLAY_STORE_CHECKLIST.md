# Google Play checklist (draft; verify every answer against the current Play Console wording)

## Store listing
- [ ] Name: رحلتي | Rehlaty. Short and full description in Arabic and English (do not promise results or "mastery").
- [ ] Icon 512x512, feature graphic 1024x500, at least 2 phone screenshots (take real ones from the device).
- [ ] Category: Education. Content rating questionnaire (IARC): answer honestly (no violence, no chat, no purchases).
- [ ] Contact email and a privacy policy URL.

## Target audience and Families
- [ ] Declare the child age groups the app is for (ages 1-6; Google may require choosing bands such as 5 and under,
      6-8, 9-12). Apps for children must not contain ads and must not use advertising or analytics SDKs that are not
      approved for children.
- [ ] Reviewer notes: the parent area is behind a PIN; no accounts for children; the optional teacher service is OFF in
      this release (`kFirebaseEnabled=false`).

## Data safety (what the app does today; confirm before submitting)
| Question | Answer for this release |
|---|---|
| Collects or shares user data? | Collects: none sent off the device. Everything is stored locally. |
| Data shared with third parties | No. (YouTube's official player loads videos from YouTube; Google may process playback requests under its own policy. State this in the privacy policy.) |
| Encrypted in transit | Yes for network requests (HTTPS). |
| Deletion | Parent can delete one child or all data inside the app. |
| Ads / analytics SDK | None. |
| Permissions | INTERNET and network state. **RECORD_AUDIO** for parent dictation only (asked when the dictation button is pressed). MODIFY_AUDIO_SETTINGS (audio playback; candidate for later removal, not required to be verified). **No CAMERA, no location, no contacts.** Photo picking uses the system picker. |
| Camera | Not used and not declared in Release 1 (offline). |
| Voice messages | Short recordings (<= 30 s) are stored on Firebase for 14 days, then deleted; declare as audio data collected and shared with the parent and the approved relative. |
| Audio | Voice is transmitted in real time between devices during a call; not recorded, not stored. Answer the Data safety form accordingly and mention it in the privacy policy. |

If the teacher service OR the family chat is turned on later (Firebase), the answers CHANGE (account email, teacher profile data,
bookings, messages). Redo this form and the privacy policy first.

## Before pressing "Publish"
- [ ] Every video that a child can see was approved by a parent after watching it (Parent settings -> Lesson library; see `docs/VIDEO_REVIEW_WORKFLOW.md`). The 157 bundled entries are unverified candidates and none is approved by default.
- [ ] Audio honesty: no screen claims recorded voices (none exist; device voice only).
- [ ] Internal test on at least 2 real phones (one small, one large) and one tablet if you list tablets.
- [ ] `docs/MANUAL_TESTS.md` items for Android filled in (not just "Not tested").
