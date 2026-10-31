# Rehlaty — age scope (official: ages 1-6)

Changed to 1-6: `pubspec.yaml` description, `README.md`, `CLAUDE.md` (first line), `docs/PLAY_STORE_CHECKLIST.md`, `docs/RELEASE_READINESS.md`; the age pickers for a new child (onboarding,
profile form), the teacher age range, the parent's request and filter age pickers (`lib/age_scope.dart`: `ageChoices`), the printable-worksheet slider (3-6); the video review screen
shows only lessons for ages 1-6 and bands 1-2 / 3-4 / 5-6; added lessons are limited to ages 1-6.

Kept on purpose (legacy, still loads): a saved profile or teacher range with an age above 6 (the picker adds that value so editing never rewrites it; storage still clamps to 1-12),
26 bundled videos for ages 7-12 (hidden from the 1-6 review list), the older math/story/games tables (`games_screen.dart` math 4-12, 5 stories up to age 10-12), the AI-advisor age bands
(`ageBandOf`, it can still classify an older profile), and `docs/CONTENT_REVIEW.md` history. None of these is offered for new use.

Not changed: other documents that describe past work (for example `docs/AUDIT_AND_ROADMAP.md`) and CLAUDE.md's historical status log; they describe what existed at the time.
