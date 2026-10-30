# Rehlaty Ramadan proof of concept («الفانوس بتاعي!»)

Production assets for the experimental cartoon video. Kept apart from the Flutter app; nothing in `lib/` uses this folder.

## Where things are
- `01_brand_reference/` — the supplied logo, unmodified.
- `02_character_sheets/` — Adam and Nour sheets (8 views each).
- `03_environment_reference/` — living room (more painterly than the characters).
- `04_storyboard/` — composed start frame, last frame of clip 1.
- `05_generated_shots/` — clip 1 (Adam), clip 2 (Nour reacts), Nour close-up, logo end card.
- `06_audio/` — Nour's line in the girl voice (ElevenLabs, voice "Mini").
- `07_final_video/` — trial cuts 02–05. Latest: `rehlaty_ramadan_trial_05_nour_closeup.mp4` (6 s, 854×480).
- `08_quality_report/reference_review.md` — what was looked at and what was NOT verified.

## State (2026-10-30)
Trial only: about 4 s of the 30 s story. Not made: hanging the lantern together, the pull-back shot, music, a 20–30 s cut.
Models used: image `nano_banana_pro` (the job reports `nano_banana_2`), video Higgsfield `wan3_0`, voice ElevenLabs `eleven_v3` + "Mini". Not tried: Kling, any lip-sync model.
Open problems: Nour's lips do not match her voice; the voice's accent is not Egyptian; no one on the assistant side can listen, so audio is unverified.

## Next
After a Higgsfield Plus subscription: Kling 3.0 (`kling3_0`) with sound on, a 3-second Nour clip first (about 6 credits); judge voice, accent and lips before the other shots.
