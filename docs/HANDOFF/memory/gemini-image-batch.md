---
name: gemini-image-batch
description: "How the Gemini image batch works (queue file, helper script, Chrome coordinates) so it can resume after a context reset"
metadata:
  node_type: memory
  type: project
  originSessionId: d15d89a8-4495-416f-ab2d-a88b962dd6c0
  modified: 2026-11-22T10:36:29.292Z
---

Owner approved (2026-11-22) generating art with Gemini in Claude-in-Chrome (his Chrome is signed in; the built-in browser is NOT) and downloading every image.

**Pipeline:** `tools/gemini_queue.json` (141 prompts, bg_wide + hero_sheet first, ground_tile last; field `done`), `python tools/gemini_art.py status|show N|take N`. Per item: Chrome tab 619763858 (check with tabs_context_mcp), navigate https://gemini.google.com/app, click (700,368), type the prompt, Return, wait ~40 s, click download icon at (1060,292), wait 3 s, then `take N` copies the newest `~/Downloads/Gemini_Generated_Image_*.jpg` to `assets/games/<game>/art/<kind>_gemini.jpg`. `NO NEW FILE` = still generating: wait and click download again.

**Not committed/deployed yet and not wired into the games** (images ~800 KB each; wire only the ones actually used, convert to WebP, never commit unused ones). The owner must not be asked again for download permission (given 2026-11-22). Passwords: never type them; the owner signs in himself.

**Why:** he wants every fun game to look professional.
**How to apply:** run `python tools/gemini_art.py status` to see where it stopped and continue.

**Status 2026-11-22:** 23/141 done (air_race, moto_race, hungry_frog, samurai, happy_farm, zombie_rooftop, coastal_drive, rain_circuit, carnival_race, cloud_dash, jungle_adventure: bg + hero; air_race/moto ground tile too except moto). Gemini free-tier daily limit hit ("Resets 2:56 PM" shown in the box): resume after that. Next item = golden_tail bg_wide (index 23).

**Update 2026-11-22 (later):** 41/141 done; backgrounds installed as poster + menu backdrop for 20 games (tools/install_gemini_art.py; originals kept in build/gemini_art, NOT in assets). The pane (built-in browser tab-1, account #2) hit its limit (resets 5:51 PM): ask the owner to open another account. In the built-in pane the download icon is at (727,326) and downloads land as <uuid>.tmp (take handles it; only files < 150 s old are accepted, aspect must be 16:9; check dups with md5 + contact sheet tools/gemini_contact.py). Prompts that name a trademarked character (clownfish) get refused: reword. Next = ball_scoop bg (index 41).

**Update 2026-11-22 ~14:00:** 61/141 done, 3rd account hit its limit (resets 6:21 PM). Installed posters/menu backdrops for 30 games. Next = ice_rink bg (index 61). Built-in pane viewport changed to 800x559: prompt box (400,512); after ~38 s click image (300,400) to open the viewer, then click download icon (613,31) twice (3 s apart); take N after ~10 s. Tool guards: md5 duplicate + 150 s freshness. Cut pack sheet: build/cut/gemini_packs (146 sprites from the owner's own Gemini pack sheet; not wired).
