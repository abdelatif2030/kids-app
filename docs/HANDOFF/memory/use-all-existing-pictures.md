---
name: use-all-existing-pictures
description: "Owner wants every existing picture (604 art files, ~190 unused) used to enrich every related learning level; content is age-free, age only picks what comes first"
metadata:
  node_type: memory
  type: feedback
  originSessionId: d15d89a8-4495-416f-ab2d-a88b962dd6c0
  modified: 2026-11-17T21:16:53.171Z
---

The owner wants the learning game to cover everything children 2-6 learn, with no gaps, and to use ALL pictures already in `assets/games/art` in every level they relate to
(animals, colours-of-things, counting objects, fruits, vehicles, shapes-in-things, letter words, new topic levels). Content is NOT locked by age: age only decides what comes first
(tiers) and how many choices are shown; each level should hold many things and show new ones on each visit (freshness memory in `letters/fresh.js`).

**Why:** he said children from 2 to 6 can learn all of it, the app knows the age and adapts, and he does not want any gap. He will make new pictures from prompts when asked (docs/CONTENT_GAPS_AND_PROMPTS.md).

**How to apply:** before adding a level or content, check which unused pictures fit (the inventory script idea: art names minus things used in levels/words/animals/foods); prefer them over asking for new pictures; ask for new pictures with a prompt only when none fits. Order agreed 2026-11-17: numbers (done), colours, shapes, letters, animals, remove age limits, new topic levels.
See [[voice-review-file-at-the-end]].
