# Interactive stories (2026-10-29)

## Existing
`Story`, `StoryChapter`, `StoryChoice(label, goTo)`, `StoryPlayerController` (device voice or file audio, `waitingChoice` state, resume by chapter, sleep timer), library filters (including interactive), comprehension questions that
count as understanding (listening alone is exposure only), one branching story (`choice_island`). Audio goes through the existing `AudioGate` / device voice path; no second playback system was added.
In a branching story the player ends the story at any chapter without choices, so such a chapter must be marked `ending`.

## Added
- `lib/stories/story_validation.dart`: `validateStory` / `storyIsSound`. Checks: text present, at least two choices with different targets, labels present, no broken or self links, all chapters reachable, every chapter can reach an ending (no trap loops), at least two reachable endings (replay can end differently), no chapter without choices that is not an ending.
- `filterStories` leaves out any story that fails validation, so malformed content cannot crash or trap a child.
- Two new original interactive stories (ages 4–8 «بسبس في الحديقة», 6–10 «يوم المطر»), non-punitive: every ending is positive or gently reflective; no ending removes anything (stars/stickers never depend on an ending). Each has comprehension questions. **Arabic text written by the assistant: needs your or a native reviewer's approval (docs/CONTENT_REVIEW.md).** English UI shows translated titles/descriptions; chapter text stays Arabic like all stories.
- Tests: `test/story_validation_test.dart` (15) and `test/story_graph_test.dart`: shipped stories sound; each defect type is caught; walk-through reaches every ending; malformed stories are filtered.

## Not built
Pictures inside chapters, in-story learning activities (counting/ordering inside a chapter), sentence highlighting (device voice has no word timing, so passage-level only), parental story-by-story controls beyond the existing library, authoring tool. Branch choice is not stored for resume mid-chapter beyond the existing chapter resume.
