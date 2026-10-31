# Rehlaty — audit of the seven features working together

Method: read the code paths and wrote `test/features_integration_test.dart`, `test/new_features_privacy_test.dart` and per-feature tests. No real-device run.

## Single sources of truth (no duplicate reward systems)
| Fact | Source | Used by |
|---|---|---|
| A game was finished / its star | `GameRewards` (first finish earns the star; `doneIds`, `doneBetween`, `detail`) | stars, adventures, collectibles, museum, notifications |
| Story heard to the end | `StoryStore.history` (`completed`), including `branch_<id>` for choose-your-path stories | garden count, collectibles, museum, adventures |
| The count of real finished things | `finishedCount` = garden flowers = activities + games + stories | stickers, world places, museum stickers room |
| Adventure of a week | `AdventureStore` (once per child per week) | collectibles, museum, notification |
| Everyday / family time | `EverydayStore`, `FamilyTimeStore` (once per day per child, parent confirmed) | collectibles, museum |
| Companion celebration | `CompanionStore.claim(eventId)` | a celebration only; it grants nothing |

Collectibles (`world_collectibles.dart`) are a derived view: 20 for the games plus 6 for stories, adventures, everyday and family time. They have no counter of their own, so they cannot
disagree with the records they come from. Stickers (24, by the shared count) and collectibles (by specific source) are two views of the same facts, not two currencies.
The adventure gives no extra star (tested). A replay of a game changes none of the counts (tested).

## Per-child isolation
All stores are keyed by child id; export, delete-one-child and reset include every new key (`world_seen`, `world_look`, `companion_state`, `adventures`, `everyday_done`, `family_time`).
Device-wide on purpose (family curation, not child data): the lesson approval lists, `video_hidden`, `video_added`, and the companion on/off switch.

## Known overlaps and gaps
- Stickers use emoji pictures (older design); collectibles use code-drawn pictures. Not unified.
- The museum shows the last finish day of a game, not the first (not stored).
- The Me tab now has eight cards in one long list; no grouping or navigation design was done for it.
- The garden count includes activities from the journey that the museum does not list as exhibits.
