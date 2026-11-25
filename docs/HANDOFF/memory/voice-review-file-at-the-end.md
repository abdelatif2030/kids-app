---
name: voice-review-file-at-the-end
description: "Owner wants ONE listening file with every new, not-yet-reviewed/deployed voice clip, but only at the very end when he says so"
metadata:
  node_type: memory
  type: feedback
  originSessionId: d15d89a8-4495-416f-ab2d-a88b962dd6c0
  modified: 2026-11-17T21:16:48.658Z
---

While the learning-game content grows (numbers, colours, shapes, letters, animals, new levels), the owner does NOT want a listening file after each step.
Keep recording new Fatima clips as the work goes, and keep a list of which clips are new since his last review.

**Why:** he wants to review all the new voices once, at the end, after everything he asked for is added (his words: "دا فالاخر خالص بعد ما نضيف كل حاجه عاوزينها، أنا اللي هقولك عليه").

**How to apply:** do not build or send a listening page until he asks. When he asks, build ONE page with all clips made since the last review (`node tools/game_voice/listening_page.mjs --new --hours N`, adjust N, or list by file time) and send it with SendUserFile; then fix the clips he marks. Earlier pages already heard: animals (28, replaced) and numbers (29_new_number_voices.html, sent, not yet marked).
See [[use-all-existing-pictures]].
