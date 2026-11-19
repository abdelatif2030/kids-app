# Review: carnival_race against the owner's brief #1

Video: the recording path in docs/ORIGINAL_BRIEFS.md (brief 1) does not exist on this machine, so the video could not be compared frame by frame. This review uses the prompt text only.

## Brief checklist (prompt text vs code/play)
- Cute animals in glowing bumper cars, carnival at sunset: present (screenshots show animals, glow, sunset sky, Ferris wheels, tents).
- Beat five rivals, finish first: 6 cars, position HUD ("4/6"), podium.
- Hold to accelerate, release to slow, drag to steer: checked with real pointer events in headless Chrome.
- Drift boosts, spins in jumps: implemented (race.js, docs/CARNIVAL_RACE.md).
- Loops and tubes: loop-the-loop on track 3 and tunnels on tracks 2-3 in data.js.
- Swinging boats, giant hammers, spinning teacups: all three hazards placed on tracks 2-3.
- Rocket boost, shield, bumper blast items: present (item button visible in HUD).
- Tickets to upgrade the car and unlock racers: garage with 3 upgrades and 5 extra animals.
- Increasingly hard tracks: 3 tracks, locked until top-3.

## Result
No code differences found, so nothing was changed and the bundle was not rebuilt. `npm test`: 7/7 pass. Headless Chrome run (menu, start race, hold + steer for 14 s): no console errors or exceptions.

## Not verified / still open
- Video not available: camera angle, HUD layout and feel could not be matched against the original.
- One screenshot out of ~20 was blank (white) apart from the HUD; not reproduced in a second 14-frame run, probably a software-GL (swiftshader) frame. Worth a look on a real device.
- Loops, tunnels and the other tracks were not driven to in this session (tracks 2-3 are locked until earlier ones are finished); not played on a real phone, sound not listened to.
