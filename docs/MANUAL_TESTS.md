# Rehlaty manual test checklist

Every test below starts as **Not tested**. Nothing here has been run by a person yet. When you run a test, change its checkbox, fill in *Actual result* and *Status* (Passed / Failed / Blocked / Not applicable), and note the device. Do not tick a box on someone else's behalf.

Status legend: `Not tested` - `Passed` - `Failed` - `Blocked` - `Not applicable`

Automated tests (`flutter test`) are separate and do not replace these.

## A. Android installation and startup

Run on a physical Android device.

### A1 - Fresh install and first launch

- [ ] Not tested
- **Test ID:** A1
- **Preconditions:** A physical Android phone; the app is not installed.
- **Steps:**
  1. Build a release or debug APK and install it.
  2. Open the app.
- **Expected result:** The app opens to the first screen without crashing; Arabic or English choice is shown.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device model, Android version: 
- **Notes:** 

### A2 - Onboarding

- [ ] Not tested
- **Test ID:** A2
- **Preconditions:** Fresh install.
- **Steps:**
  1. Choose a language.
  2. Add a child (name, age) and set a PIN when asked.
  3. Finish the 5 onboarding steps.
- **Expected result:** Each step can be completed and the child home opens.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device model, Android version: 
- **Notes:** 

### A3 - Screen sizing

- [ ] Not tested
- **Test ID:** A3
- **Preconditions:** App open on the child home.
- **Steps:**
  1. Look at the home, Games, Create and Me tabs.
  2. Rotate the phone if rotation is allowed.
- **Expected result:** Nothing is cut off; buttons are reachable; no text overlaps.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Screen size / density: 
- **Notes:** 

### A4 - Back navigation

- [ ] Not tested
- **Test ID:** A4
- **Preconditions:** Inside any lesson or game.
- **Steps:**
  1. Press the system Back button.
  2. From the child home press Back.
- **Expected result:** Back goes one step up; on the child home it asks for the parent PIN (or exits if no PIN is set); it never closes the app silently.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### A5 - Application restart

- [ ] Not tested
- **Test ID:** A5
- **Preconditions:** A child with some progress.
- **Steps:**
  1. Fully close the app from the recent-apps list.
  2. Open it again.
- **Expected result:** Children, plans and progress are still there.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### A6 - Permissions

- [ ] Not tested
- **Test ID:** A6
- **Preconditions:** Fresh install.
- **Steps:**
  1. Open Android Settings > Apps > Rehlaty > Permissions.
- **Expected result:** No unrelated permission is requested (no camera, microphone, contacts, location).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, Android version: 
- **Notes:** 

### A7 - Restart after finishing an activity

- [ ] Not tested
- **Test ID:** A7
- **Preconditions:** Finish one game or lesson.
- **Steps:**
  1. Note the result shown.
  2. Close and reopen the app.
  3. Check the Games list and the parent dashboard.
- **Expected result:** The finished game shows its check mark; the dashboard shows the activity; no extra star appears.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### A8 - Release build and the network permission

- [ ] Not tested
- **Test ID:** A8
- **Preconditions:** A release APK (`flutter build apk --release`). The main `AndroidManifest.xml` now declares the `INTERNET` permission (it was missing before, so release builds could not reach YouTube or Firebase). This test confirms the fix on a device.
- **Steps:**
  1. Install the release APK on a phone with a working connection.
  2. Open a video from the list and look at the thumbnails.
- **Expected result:** Videos play and thumbnails load in the release build. In A6, INTERNET is the only permission listed.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device model, Android version: 
- **Notes:** Fixed by reading the manifests, not yet confirmed on a device.

## B. Audio listening

A person must listen. Playback succeeding does not prove a voice sounds natural or is pronounced correctly.

### B1 - Arabic letter names

- [ ] Not tested
- **Test ID:** B1
- **Preconditions:** Device voice allowed (Parent settings > Sound and learning). A letter lesson open.
- **Steps:**
  1. Open the letter ب lesson.
  2. Press the listen button for the letter name.
- **Expected result:** A voice says the letter's name (باء) or a clear message says there is no sound. Write down what you hear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, Android version, voice engine: 
- **Notes:** 

### B2 - Arabic letter sounds

- [ ] Not tested
- **Test ID:** B2
- **Preconditions:** Same.
- **Steps:**
  1. Open the letter sound buttons in the guided lesson.
  2. Press each sound button.
- **Expected result:** No device voice reads an isolated sound; the screen says the sound has not been recorded yet.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B3 - Representative Arabic words

- [ ] Not tested
- **Test ID:** B3
- **Preconditions:** Letter lesson with picture words.
- **Steps:**
  1. Press listen on three words (e.g. قمر, باب, شمس).
- **Expected result:** Words are read, or a clear message is shown. Judge pronunciation yourself and write it down; a native Arabic speaker should confirm.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, listener: 
- **Notes:** 

### B4 - English words

- [ ] Not tested
- **Test ID:** B4
- **Preconditions:** Child with English learning language.
- **Steps:**
  1. Open the word library, English category.
  2. Press listen on 5 words.
- **Expected result:** English words are read by an English voice, or a message says there is no voice. Never an Arabic voice reading English.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B5 - Replay

- [ ] Not tested
- **Test ID:** B5
- **Preconditions:** A word with audio.
- **Steps:**
  1. Press listen, wait, press listen again.
  2. Press the slow button.
- **Expected result:** The sound plays again each time; slow mode is audibly slower.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B6 - No overlapping playback

- [ ] Not tested
- **Test ID:** B6
- **Preconditions:** Two listen buttons on one screen.
- **Steps:**
  1. Press one, then immediately press another.
- **Expected result:** The first stops when the second starts; two voices never overlap.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B7 - Missing audio

- [ ] Not tested
- **Test ID:** B7
- **Preconditions:** An item with no recording and device voice off.
- **Steps:**
  1. Switch off 'Allow device demo voice'.
  2. Press a listen button.
- **Expected result:** A clear 'not recorded' message appears; the button never shows a playing state.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B8 - Audio failure handling

- [ ] Not tested
- **Test ID:** B8
- **Preconditions:** Device with no Arabic voice installed (or voice data removed), if possible.
- **Steps:**
  1. Press a listen button for an Arabic word.
- **Expected result:** A 'no voice for this language' message appears; the app does not crash or stay stuck.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, language settings: 
- **Notes:** 

### B9 - Parent audio status accuracy

- [ ] Not tested
- **Test ID:** B9
- **Preconditions:** Parent settings > Sound and learning > Lesson audio status.
- **Steps:**
  1. Read the counts.
  2. Open three items and compare with what you hear in the lesson.
  3. Switch the device voice off and read the counts again.
- **Expected result:** The status matches what is heard: device voice items are labelled device voice (synthesized); with the voice off they show 'No audio available'; nothing is called a human recording or approved.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### B10 - Naturalness and approval

- [ ] Not tested
- **Test ID:** B10
- **Preconditions:** A person listening.
- **Steps:**
  1. Listen to 10 names and 10 words on two phones.
  2. Fill in the voice comparison sheet if used.
- **Expected result:** Record your judgement. Do NOT mark a voice as natural or approved just because it plays; approval needs the review workflow.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, listener, date: 
- **Notes:** 

## C. Video review

The app has video playback (official YouTube player, whitelist in assets/videos.json), so these tests apply.

### C1 - Video list

- [ ] Not tested
- **Test ID:** C1
- **Preconditions:** Child home > Videos.
- **Steps:**
  1. Open the videos list for the child's age.
- **Expected result:** Only videos from the whitelist appear, with thumbnails or the color-block fallback.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, network: 
- **Notes:** 

### C2 - Each video loads

- [ ] Not tested
- **Test ID:** C2
- **Preconditions:** Online.
- **Steps:**
  1. Open each video you have reviewed (note the ones that fail).
- **Expected result:** The video plays in the official player. A video that cannot be embedded shows a clear message, not a blank player. List failures in Notes.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, network: 
- **Notes:** 

### C3 - Pause, resume, restart

- [ ] Not tested
- **Test ID:** C3
- **Preconditions:** A playing video.
- **Steps:**
  1. Pause, resume, then seek to the start.
- **Expected result:** The controls work; time counting stops while paused.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### C4 - Orientation

- [ ] Not tested
- **Test ID:** C4
- **Preconditions:** A playing video.
- **Steps:**
  1. Rotate the phone.
- **Expected result:** The player stays usable; the app does not crash.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### C5 - Unavailable or removed video

- [ ] Not tested
- **Test ID:** C5
- **Preconditions:** Online, a video that was removed or is region-blocked (if you have one).
- **Steps:**
  1. Open it.
- **Expected result:** A friendly message is shown; no fake player; the child can go back.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### C6 - Offline behaviour

- [ ] Not tested
- **Test ID:** C6
- **Preconditions:** Airplane mode.
- **Steps:**
  1. Open the videos list and a video.
- **Expected result:** A clear 'no internet' state; the rest of the app still works.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### C7 - Hand review of the whitelist

- [ ] Not tested
- **Test ID:** C7
- **Preconditions:** The full list in assets/videos.json.
- **Steps:**
  1. Watch each video once.
  2. Check title, age range and suitability.
- **Expected result:** Unsuitable videos are removed from videos.json. Nothing is approved automatically.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Reviewer, date: 
- **Notes:** 

## D. Printer and printable activities

The app has 7 printable worksheet kinds (Parent settings > Printable worksheets).

### D1 - Open a printable activity

- [ ] Not tested
- **Test ID:** D1
- **Preconditions:** Parent settings > Printable worksheets.
- **Steps:**
  1. Choose each of the 7 worksheet kinds one by one.
- **Expected result:** A preview appears for each kind.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device / browser: 
- **Notes:** 

### D2 - Preview quality

- [ ] Not tested
- **Test ID:** D2
- **Preconditions:** A preview open.
- **Steps:**
  1. Check Arabic letters are joined and run right to left.
  2. Check the header, name/date lines and footer.
- **Expected result:** Arabic is shaped correctly; nothing is cut off.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device / browser: 
- **Notes:** 

### D3 - Print on paper

- [ ] Not tested
- **Test ID:** D3
- **Preconditions:** A physical printer.
- **Steps:**
  1. Print a worksheet (A4).
  2. Print the answer page.
- **Expected result:** Margins are even; one page per sheet plus the answer page; text and pictures are not clipped.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Printer model: 
- **Notes:** 

### D4 - English worksheet

- [ ] Not tested
- **Test ID:** D4
- **Preconditions:** Language switched to English on the screen.
- **Steps:**
  1. Preview and print an English sheet.
- **Expected result:** English text is left to right and readable.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Printer model: 
- **Notes:** 

### D5 - Grayscale readability

- [ ] Not tested
- **Test ID:** D5
- **Preconditions:** A black-and-white printer or mode.
- **Steps:**
  1. Print a sheet in grayscale.
- **Expected result:** Lines, shapes and letters are still readable.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Printer model: 
- **Notes:** 

### D6 - PDF export / share

- [ ] Not tested
- **Test ID:** D6
- **Preconditions:** Preview open.
- **Steps:**
  1. Use the share or save option.
- **Expected result:** A PDF file is produced and opens in a PDF viewer with the same content.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### D7 - Variations

- [ ] Not tested
- **Test ID:** D7
- **Preconditions:** Preview open.
- **Steps:**
  1. Press 'New variation' three times.
- **Expected result:** The questions change; each sheet is still correct (counts, answers).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

## E. Game testing

The six learning games under Games > Learning games.

### E1a - Match identical pictures: start and finish

- [ ] Not tested
- **Test ID:** E1a
- **Preconditions:** Child profile in the age range 3-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E1b - Match identical pictures: age filter and instructions

- [ ] Not tested
- **Test ID:** E1b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E1c - Match identical pictures: wrong attempts

- [ ] Not tested
- **Test ID:** E1c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E1d - Match identical pictures: stars only on completion

- [ ] Not tested
- **Test ID:** E1d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E2a - Letter fishing: start and finish

- [ ] Not tested
- **Test ID:** E2a
- **Preconditions:** Child profile in the age range 4-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E2b - Letter fishing: age filter and instructions

- [ ] Not tested
- **Test ID:** E2b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E2c - Letter fishing: wrong attempts

- [ ] Not tested
- **Test ID:** E2c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E2d - Letter fishing: stars only on completion

- [ ] Not tested
- **Test ID:** E2d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E3a - Four in a row (two players): start and finish

- [ ] Not tested
- **Test ID:** E3a
- **Preconditions:** Child profile in the age range 5-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E3b - Four in a row (two players): age filter and instructions

- [ ] Not tested
- **Test ID:** E3b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E3c - Four in a row (two players): wrong attempts

- [ ] Not tested
- **Test ID:** E3c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E3d - Four in a row (two players): stars only on completion

- [ ] Not tested
- **Test ID:** E3d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E4a - Western / Arabic-Indic numerals: start and finish

- [ ] Not tested
- **Test ID:** E4a
- **Preconditions:** Child profile in the age range 4-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E4b - Western / Arabic-Indic numerals: age filter and instructions

- [ ] Not tested
- **Test ID:** E4b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E4c - Western / Arabic-Indic numerals: wrong attempts

- [ ] Not tested
- **Test ID:** E4c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E4d - Western / Arabic-Indic numerals: stars only on completion

- [ ] Not tested
- **Test ID:** E4d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E5a - Trace the letter: start and finish

- [ ] Not tested
- **Test ID:** E5a
- **Preconditions:** Child profile in the age range 4-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E5b - Trace the letter: age filter and instructions

- [ ] Not tested
- **Test ID:** E5b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E5c - Trace the letter: wrong attempts

- [ ] Not tested
- **Test ID:** E5c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E5d - Trace the letter: stars only on completion

- [ ] Not tested
- **Test ID:** E5d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E6a - Word picture book: start and finish

- [ ] Not tested
- **Test ID:** E6a
- **Preconditions:** Child profile in the age range 2-6.
- **Steps:**
  1. Open Games, find the game card.
  2. Play until the game ends.
- **Expected result:** The game can be finished; the finish screen shows kind words.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E6b - Word picture book: age filter and instructions

- [ ] Not tested
- **Test ID:** E6b
- **Preconditions:** Child profiles of different ages.
- **Steps:**
  1. Open Games with a child inside the range, then one outside it.
  2. Read the instruction line.
- **Expected result:** The card appears only inside the age range and appears once; the instruction is short and clear.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E6c - Word picture book: wrong attempts

- [ ] Not tested
- **Test ID:** E6c
- **Preconditions:** A game in progress.
- **Steps:**
  1. Make several wrong choices (or taps that do not match).
- **Expected result:** Nothing negative: no failure screen, no scolding text, no lost progress.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E6d - Word picture book: stars only on completion

- [ ] Not tested
- **Test ID:** E6d
- **Preconditions:** A new child who has not finished this game.
- **Steps:**
  1. Play without finishing; leave.
  2. Finish the game.
  3. Play again and finish again.
- **Expected result:** No star before finishing; one star the first time it is finished; no new star on the replay.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E7 - Back and restart inside games

- [ ] Not tested
- **Test ID:** E7
- **Preconditions:** Any new game open.
- **Steps:**
  1. Press Back mid-game, reopen the game.
  2. Close the app mid-game and reopen.
- **Expected result:** The game restarts cleanly; no crash; no star from the unfinished attempt.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E8 - Small screen

- [ ] Not tested
- **Test ID:** E8
- **Preconditions:** A small Android phone (about 5 inch) or a narrow window.
- **Steps:**
  1. Open each of the 6 games; set the system font size to large.
- **Expected result:** No overflow stripes; every button can be tapped.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Screen size: 
- **Notes:** 

### E9 - Touch targets and accessibility

- [ ] Not tested
- **Test ID:** E9
- **Preconditions:** Any game.
- **Steps:**
  1. Check cards, fish, columns and answer buttons are large enough for a small finger.
  2. Turn on TalkBack and open one game.
- **Expected result:** Targets are comfortable; TalkBack reads sensible labels.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, TalkBack: 
- **Notes:** 

### E10 - Tracing: no false completion

- [ ] Not tested
- **Test ID:** E10
- **Preconditions:** Trace the letter game.
- **Steps:**
  1. Press the Done button without drawing.
  2. Draw a short line only.
  3. Draw along the letter, press Clear, draw again.
- **Expected result:** Done stays disabled until real drawing; Clear works; the guide is only a right-to-left cue. A teacher should review whether any stroke-order guidance is wanted.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device, teacher: 
- **Notes:** 

### E11 - Four in a row rules

- [ ] Not tested
- **Test ID:** E11
- **Preconditions:** Two people.
- **Steps:**
  1. Play a vertical, horizontal and diagonal win.
  2. Fill the board for a draw if you can.
- **Expected result:** Wins and the draw are recognised; the round ends and no more moves are accepted.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### E12 - Word picture book

- [ ] Not tested
- **Test ID:** E12
- **Preconditions:** Child aged 2-6.
- **Steps:**
  1. Open words from every category.
  2. Press the Arabic and English listen buttons.
  3. Open all 50 words over several visits.
- **Expected result:** The truthful audio status is shown on each card; the book finishes only when all 50 were opened; nothing says 'recorded' for device speech.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 


### E13 - Four more learning games (odd one out, pattern, more/fewer, sort)

- [ ] Not tested
- **Test ID:** E13
- **Preconditions:** Child profiles aged 3, 4, 5 and 6.
- **Steps:**
  1. Open Games > Learning games and check each of the four games appears only in its age range (odd one out 3-6, pattern 4-6, more/fewer 3-6, sort 4-6).
  2. Play each one to the end, making wrong choices on purpose.
  3. Finish each once, then play it again.
- **Expected result:** wrong choices only fade; no failure screen; one star the first time only; the pictures are clear; the odd-one-out groups make sense to a child (e.g. 3 animals and 1 food); the patterns repeat correctly; the group with more or fewer is the right one; sorting puts each picture in its true group.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device model, Android version: 
- **Notes:** 

## F. Parent experience

### F1 - Audio status accuracy

- [ ] Not tested
- **Test ID:** F1
- **Preconditions:** Parent settings > Sound and learning > Lesson audio status.
- **Steps:**
  1. Compare counts with the files in assets/audio.
- **Expected result:** Counts equal the real number of files and approvals (today none are approved).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### F2 - Missing audio visibility

- [ ] Not tested
- **Test ID:** F2
- **Preconditions:** Same screen.
- **Steps:**
  1. Filter by 'No audio available'.
- **Expected result:** Items without any usable sound are listed.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### F3 - Recorded vs device speech

- [ ] Not tested
- **Test ID:** F3
- **Preconditions:** Same screen.
- **Steps:**
  1. Open an item and read its detail.
- **Expected result:** The detail separates source, license and the two reviews.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### F4 - Parent and child separation

- [ ] Not tested
- **Test ID:** F4
- **Preconditions:** Child mode.
- **Steps:**
  1. Try to reach Parent settings from the child home without the PIN.
- **Expected result:** The PIN is required; no parent screen opens without it.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### F5 - Language and direction

- [ ] Not tested
- **Test ID:** F5
- **Preconditions:** Parent settings.
- **Steps:**
  1. Switch the app language between Arabic and English on several screens.
- **Expected result:** Every screen follows the language and direction; no mixed screens.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### F6 - Progress and completion information

- [ ] Not tested
- **Test ID:** F6
- **Preconditions:** Parent dashboard.
- **Steps:**
  1. Play a game and finish a letter lesson.
  2. Open the dashboard.
- **Expected result:** Only real activity is shown; no invented scores; the adaptive plan explains its reasons.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

## G. Regression testing

### G1 - Lesson navigation

- [ ] Not tested
- **Test ID:** G1
- **Preconditions:** Child with a plan.
- **Steps:**
  1. Open the learning map, a land and an activity.
- **Expected result:** Navigation works as before.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G2 - Teacher profiles

- [ ] Not tested
- **Test ID:** G2
- **Preconditions:** Firebase enabled (only if you set it up).
- **Steps:**
  1. Open Teachers from Parent settings.
- **Expected result:** Existing profiles load; booking and reports behave as before. Not applicable while Firebase is off.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G3 - Existing games

- [ ] Not tested
- **Test ID:** G3
- **Preconditions:** Child of age 1-3.
- **Steps:**
  1. Play balloons, 'Where is the animal?', colors, memory.
- **Expected result:** They still work and finish with their star.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G4 - Saved progress

- [ ] Not tested
- **Test ID:** G4
- **Preconditions:** A child with progress from an older version.
- **Steps:**
  1. Install the new build over the old one.
- **Expected result:** Children, stars, plans and notes are still there.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G5 - Content and assets

- [ ] Not tested
- **Test ID:** G5
- **Preconditions:** Any lesson.
- **Steps:**
  1. Open stories, letters, vocabulary and drawing.
- **Expected result:** All content loads; no missing images or fonts.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G6 - Existing audio playback

- [ ] Not tested
- **Test ID:** G6
- **Preconditions:** Letter lesson.
- **Steps:**
  1. Play names and words as in section B.
- **Expected result:** Playback behaves as before.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### G7 - Restart and persistence

- [ ] Not tested
- **Test ID:** G7
- **Preconditions:** After G1-G6.
- **Steps:**
  1. Close and reopen the app.
- **Expected result:** Everything persisted.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

## H. Accessibility and usability

### H1 - Text readability

- [ ] Not tested
- **Test ID:** H1
- **Preconditions:** Normal and large text sizes.
- **Steps:**
  1. Set the text size in Parent settings; browse the main screens.
- **Expected result:** Text stays readable and nothing overlaps.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### H2 - Contrast

- [ ] Not tested
- **Test ID:** H2
- **Preconditions:** Bright daylight and a dark room.
- **Steps:**
  1. View the child home and a game.
- **Expected result:** Text and buttons are clearly visible.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### H3 - Touch target size

- [ ] Not tested
- **Test ID:** H3
- **Preconditions:** Child's hand.
- **Steps:**
  1. Let a child aged 3-6 tap the main buttons.
- **Expected result:** A child can tap them without mistakes.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Child, device: 
- **Notes:** 

### H4 - Reduced motion

- [ ] Not tested
- **Test ID:** H4
- **Preconditions:** Parent settings > reduced motion on.
- **Steps:**
  1. Open the child home and a game.
- **Expected result:** Animations are calmer or off.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### H5 - Orientation and screen sizes

- [ ] Not tested
- **Test ID:** H5
- **Preconditions:** Phone and, if available, a tablet.
- **Steps:**
  1. Open the child home and each game.
- **Expected result:** Layouts adapt; nothing is cut off.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

### H6 - Instructions for young children

- [ ] Not tested
- **Test ID:** H6
- **Preconditions:** A child aged 3-6.
- **Steps:**
  1. Open a game without help.
- **Expected result:** The instruction is understood (with a parent reading it aloud if needed).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Child: 
- **Notes:** 

### H7 - No punitive or failure screens

- [ ] Not tested
- **Test ID:** H7
- **Preconditions:** Play every game.
- **Steps:**
  1. Make mistakes on purpose.
- **Expected result:** No failure, game-over, shaming or negative message appears anywhere.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device: 
- **Notes:** 

## I. Web, tablet and wide-screen UI

### I1 - Keyboard-only play on the web

- [ ] Not tested
- **Test ID:** I1
- **Preconditions:** A desktop browser with the web build open; a child profile exists.
- **Steps:**
  1. Press Tab repeatedly on the child home and watch the focus ring.
  2. Open a learning game with Enter.
  3. Choose answers with Tab and Enter or Space until the game ends.
- **Expected result:** Every tile and answer can be reached and activated with the keyboard; the focus ring is clearly visible; nothing traps the focus.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I2 - Mouse hover and cursor

- [ ] Not tested
- **Test ID:** I2
- **Preconditions:** Desktop browser.
- **Steps:**
  1. Move the mouse over tiles, answers and navigation items.
- **Expected result:** The cursor becomes a pointer and the item shows a light hover tint.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I3 - Mouse drag and scrollbars

- [ ] Not tested
- **Test ID:** I3
- **Preconditions:** Desktop browser with a mouse.
- **Steps:**
  1. Scroll long lists (parent settings, library) with the wheel, with a scrollbar and by dragging.
- **Expected result:** All three ways scroll; the scrollbar appears on hover.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I4 - Browser resize

- [ ] Not tested
- **Test ID:** I4
- **Preconditions:** Desktop browser.
- **Steps:**
  1. Resize the window from 360 px wide to 1400 px and back while on the child home, a game and the parent settings.
- **Expected result:** The layout switches between bottom bar, side rail and two columns; no overflow stripes; the game or form state is kept.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I5 - Browser Back / Forward and refresh

- [ ] Not tested
- **Test ID:** I5
- **Preconditions:** Desktop browser.
- **Steps:**
  1. Open a game from the child home, press the browser Back button.
  2. Press Forward.
  3. Refresh the page on a game.
- **Expected result:** Record what happens (leaves the site, goes back one page, or restarts). This behaviour was NOT verified; if Back leaves the app, a router change is needed.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I6 - Wide layouts

- [ ] Not tested
- **Test ID:** I6
- **Preconditions:** A 1366 x 768 window.
- **Steps:**
  1. Open the child home, the parent settings, the library and a teacher page with a portfolio.
- **Expected result:** Content is centred with a readable width; the child home shows two columns; the portfolio shows two columns; nothing is stretched across the window.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I7 - Tablet and landscape

- [ ] Not tested
- **Test ID:** I7
- **Preconditions:** A real tablet or a 820 x 1180 window, portrait and landscape.
- **Steps:**
  1. Open the child home and three games.
- **Expected result:** A side rail is used instead of the bottom bar; games stay centred and readable.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I8 - Arabic and English layout

- [ ] Not tested
- **Test ID:** I8
- **Preconditions:** Wide window.
- **Steps:**
  1. Switch the interface between Arabic and English on the child home, parent settings and a teacher page.
- **Expected result:** The rail sits on the right in Arabic and on the left in English; the column order mirrors; no cut-off text.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I9 - Page title and install

- [ ] Not tested
- **Test ID:** I9
- **Preconditions:** Desktop Chrome.
- **Steps:**
  1. Look at the browser tab title and install the web app.
- **Expected result:** The title is 'رحلتي | Rehlaty' and the installed app is not locked to portrait.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I10 - Screen reader on the web

- [ ] Not tested
- **Test ID:** I10
- **Preconditions:** NVDA, VoiceOver or TalkBack with the web build or the app.
- **Steps:**
  1. Navigate the child home and one game.
- **Expected result:** Tiles are announced as buttons with names; selected tabs are announced. Web accessibility has not been verified.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I11 - Document language and title follow the app language

- [ ] Not tested
- **Test ID:** I11
- **Preconditions:** Web build; open DevTools.
- **Steps:**
  1. Switch the interface between Arabic and English in Parent settings.
  2. Read `document.documentElement.lang`, `.dir` and `document.title`.
- **Expected result:** `ar`/`rtl`/'رحلتي' and `en`/`ltr`/'Rehlaty'.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I12 - Leave a half-played game

- [ ] Not tested
- **Test ID:** I12
- **Preconditions:** Any learning game.
- **Steps:**
  1. Make one move, then press Back (phone or browser) and then Escape on the dialog.
- **Expected result:** A "Leave the game?" dialog appears; Escape and "Keep playing" stay in the game; "Leave" goes back. An untouched game closes at once.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I13 - Parent settings groups and Saved toast

- [ ] Not tested
- **Test ID:** I13
- **Preconditions:** Parent settings open.
- **Steps:**
  1. Change the text size and the daily limit.
- **Expected result:** Five headed groups; a "Saved" message after each change; the change is still there after reopening.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### I14 - Teacher work samples filter and preview

- [ ] Not tested
- **Test ID:** I14
- **Preconditions:** A teacher with at least two kinds of published works and a picture.
- **Steps:**
  1. Open the teacher page as a parent, use the kind chips, tap a work.
- **Expected result:** The list filters; the preview shows the full picture and description and the "not reviewed by the app" note.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### A1 - First install on a real Android phone

- [ ] Not tested
- **Test ID:** A1
- **Preconditions:** `docs/ANDROID_RELEASE.md` step 2 done, phone connected.
- **Steps:**
  1. Run the "Quick device checks" list in `docs/ANDROID_RELEASE.md`.
- **Expected result:** All 7 checks pass; note phone model and Android version.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Phone and Android version: 
- **Notes:** 

### F1 - Family chat with two real phones

- [ ] Not tested
- **Test ID:** F1
- **Preconditions:** Firebase connected and rules published (`docs/FAMILY_CHAT_DESIGN.md`), a parent account on phone A, a relative account on phone B.
- **Steps:**
  1. Parent: Parent settings -> Family chat -> Invite a relative -> pick a child -> note the code.
  2. Relative (phone B): «أنا من العائلة» -> create account -> enter the code. Check it says waiting for approval and cannot write.
  3. Parent: approve. Switch chat on for the child (typing stays off). Open child mode -> «عائلتي» -> send a phrase and a sticker.
  4. Relative: reply with text, then try a text with a link.
  5. Parent: read all conversations, pause the relative, delete the conversation.
- **Expected result:** Nothing is possible before approval; the link is refused; paused relative cannot send; parent sees every message.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Phones and Android versions: 
- **Notes:** 

### F2 - Family voice call with two real devices

- [ ] Not tested
- **Test ID:** F2
- **Preconditions:** F1 passed; rules re-published; two browsers/phones with a microphone each; headphones to avoid echo.
- **Steps:**
  1. Parent: Family chat -> turn on «السماح بالمكالمات الصوتية» for the relative.
  2. Parent: tap «اتصل (الطفل)». Allow the microphone. The relative's screen should show the call within a few seconds.
  3. Relative: answer. Speak on both sides. Try mute. Hang up from one side; the other side should end too.
  4. Relative calls the parent: the call shows in the parent's Family screen only. Decline it, then try again and answer.
  5. Turn calls off: no call button, and the server refuses a call.
  6. Deny the microphone once: a clear message, no stuck call.
- **Expected result:** Voice both ways, nothing recorded, microphone light off after the call. If it never connects on mobile data, a TURN server is needed (see docs/FAMILY_CHAT_DESIGN.md).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Devices, browsers, networks: 
- **Notes:** 

### F3 - Family button, unread count and next-call note

- [ ] Not tested
- **Test ID:** F3
- **Preconditions:** F1 passed, rules re-published, chat on for a child.
- **Steps:**
  1. Open the child's home: the round bubble with a heart is in the header, with no number.
  2. As the relative, send two messages. Wait up to 20 s on the child home (or reopen it): a red 2 appears on the bubble.
  3. Tap the bubble: the contact shows the last message and a badge. Open the chat: back on the list the badge is gone.
  4. Parent: in Family chat set «مكالمة قادمة» to "Friday 6 pm" for the relative. Child list and relative screen show it.
  5. In the child's chat, «أنهيت درساً اليوم» appears only after finishing a lesson or game that day.
- **Expected result:** As described; nothing rings and no notification is sent.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browser and OS: 
- **Notes:** 

### F4 - Request by user name (replaces invite codes and, from 2026-10-30, the e-mail)

- [ ] Not tested
- **Test ID:** F4
- **Preconditions:** Rules re-published (they now include `usernames`); a relative account registered in a second browser.
- **Steps:**
  0. Relative: open «أنا من العائلة»: choose a user name (try a taken one, a short one, one with a space: each shows a message), save, see it with a copy button.
  1. Parent: Family chat -> «إضافة قريب» -> that exact user name (try an unknown name and a partial name: nothing is sent), relation, children -> Send.
  2. The request shows as «@name» under "waiting for an answer" with a cancel button.
  3. Relative: open «أنا من العائلة»: a card «طلب من ...» with Accept / Decline.
  4. Accept: the parent's list shows the relative as active (no second approval). Try Decline and Cancel on other requests.
- **Expected result:** Nothing is possible before Accept; only the right person sees the request; no e-mail is asked for anywhere.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browsers: 
- **Notes:** 

### F5 - Voice messages

- [ ] Not tested
- **Test ID:** F5
- **Preconditions:** F4 passed; microphone available.
- **Steps:**
  1. Parent: turn on «السماح بالرسائل الصوتية» for the relative and, under the child, «السماح بتسجيل الصوت».
  2. Relative: open the chat, tap «رسالة صوتية», allow the microphone, speak 5 s, send.
  3. Child chat (or the parent's "Read all conversations"): press play; you hear it.
  4. Record 30 s: it stops and sends by itself. Cancel once: nothing is sent.
- **Expected result:** Sound plays on both web and Android; with the switches off there is no microphone button.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Browsers/phones: 
- **Notes:** 

### F6 - Video call

- [ ] Not tested
- **Test ID:** F6
- **Preconditions:** F2 passed; camera available on both devices.
- **Steps:**
  1. Parent: with calls on, turn on «السماح بمكالمات الفيديو».
  2. Tap «فيديو (child)» (or the camera icon in the chat). Allow camera and microphone.
  3. The relative answers an incoming video call. Both see each other; try mute and camera off; hang up.
- **Expected result:** Pictures both ways, nothing recorded, camera light off after the call. Without the video switch no video option appears.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Devices/browsers/networks: 
- **Notes:** 

## A-audio - Audio and calls on real devices (all unchecked)

Environments to cover: Android phone, iPhone/iPad (if supported), Chrome desktop, a mobile browser. Use the 92-sample
set in `assets/audio/eval_set.json` for pronunciation. Do not mark anything done unless you did it.

### AU1 - Voices available

- [ ] Not tested
- **Steps:** Parent settings -> Sound -> voice comparison / audio status. Note per device: Arabic voice present? English?
- **Expected result:** A device without an Arabic voice shows a clear message and the text; it never reads Arabic with another language's voice.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU2 - Arabic voice quality

- [ ] Not tested
- **Steps:** Listen to letter names, words with shadda, tanween, sukoon, long vowels, numbers, similar letters.
- **Expected result:** Understandable; write down every word that sounds wrong (these stay "needs review").
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU3 - English voice quality

- [ ] Not tested
- **Steps:** Letter names, words, a sentence; check that one accent is used consistently.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU4 - Listening games

- [ ] Not tested
- **Steps:** Games -> «اسمع واختر الصورة», «اسمع واختر الكلمة», «اسمع واختر الحرف». Tap Listen, Slowly, answer wrong then right.
- **Expected result:** The caption is always visible; a wrong answer only fades; with the voice off or no voice a message appears and the game still works; one star on the first finish only.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU5 - Call interrupts lessons

- [ ] Not tested
- **Steps:** Start a story and a listening game, then start (or answer) a family call.
- **Expected result:** Lesson sound and the story stop at once; after the call nothing starts by itself; the listen button says a call is on while it lasts.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU6 - App in the background

- [ ] Not tested
- **Steps:** Play a story, press Home or lock the screen, return.
- **Expected result:** The story is paused and does not restart by itself.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU7 - Call quality and interruptions

- [ ] Not tested
- **Steps:** During a call: switch Wi-Fi to mobile data, plug/unplug headphones, receive a phone call, deny the microphone once, mute, camera off.
- **Expected result:** "Reconnecting" appears and recovers or ends with a message; no stuck screen; the banner always says whether the microphone and camera are on; the microphone/camera light is off after the call.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### AU8 - Screen readers

- [ ] Not tested
- **Steps:** TalkBack (Android), VoiceOver (iOS), NVDA or VoiceOver on the web: listen buttons, call controls, call banner, voice message play button.
- **Expected result:** Every control has a spoken name; changes of state (playing, reconnecting) are announced.
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 


## J. Added on 2026-10-30 (all unchecked: nobody has run these on a device)

"Automated evidence" says what the assistant ran in the cloud session (unit/widget tests, the rules emulator, a desktop Chromium). That is not a device test: leave the boxes for the person who tests.

### J1 - Island map home

- [ ] Not tested
- **Test ID:** J1
- **Steps:** Child home -> the map icon in the header. Look at the island, tap every badge, switch back to the list, close and reopen the app, test Arabic and English, a 360 px phone and a tablet, reduce motion on.
- **Expected result:** One island with a winding path and a badge plus name for each section (letters, numbers when the age has them, words, stories, games, create, videos, my library, with family, my wins). Every badge opens its section. The choice is remembered. Arabic starts on the right. Nothing overlaps or is cut off. Badges do not bob with reduce motion.
- **Automated evidence:** layout tests (no overlap, inside the canvas, mirrored for Arabic, 6 widths), widget and semantics tests, one rendered test image. Never seen on a real screen or a browser by the owner.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J2 - List home: «أراضيّ» is one collapsed card

- [ ] Not tested
- **Test ID:** J2
- **Steps:** Child home (list). Tap «أراضيّ» to open it, tap again to hide it.
- **Expected result:** Closed by default; opens to the lands; hides again; spoken as "tap to show / hide".
- **Automated evidence:** `test/journey_flow_test.dart`, `test/accessibility_test.dart`.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J3 - Video fills the phone screen

- [ ] Not tested
- **Test ID:** J3
- **Preconditions:** A real Android phone (this does nothing on the web or on tablets).
- **Steps:** Open any video from the list.
- **Expected result:** The phone turns to landscape, the video fills the whole screen with a round back button; pressing back returns to portrait with the normal bars; a paused video is still closed when time is up.
- **Automated evidence:** none for the rotation itself (only that the screens still build). Never run on a phone.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J4 - Logo: first screen, background, launcher icon

- [ ] Not tested
- **Test ID:** J4
- **Steps:** Open the app (language screen shows the logo), the 2-second opening animation, look behind the home, games, stories and parent lists, check the launcher icon and the web favicon (hard refresh).
- **Expected result:** The new logo (two children over «رحلتي / Rehlaty») everywhere; faint behind child screens; very faint behind adult lists; the text on top stays readable; no old flat-drawing logo.
- **Automated evidence:** `test/logo_backdrop_test.dart`, `test/app_logo_test.dart`.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** The launcher icon is small: check the name is readable.

### J5 - Permissions screen

- [ ] Not tested
- **Test ID:** J5
- **Steps:** Parent settings -> الأذونات. Read the three cards in both languages. On the phone, refuse the microphone once when recording a voice message and check the message.
- **Expected result:** Microphone, camera, files and photos: why, when asked, if refused, what is never done. The screen itself asks for nothing. Nothing is asked when the app opens.
- **Automated evidence:** `test/permissions_screen_test.dart` (also checks the Android manifest: only microphone and camera are declared).
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J6 - Four weeks side by side (parent dashboard)

- [ ] Not tested
- **Test ID:** J6
- **Steps:** Parent settings -> dashboard. On a new device: empty message. After using the app over two or more weeks: switch Time / Lessons / Games.
- **Expected result:** Four weeks next to each other with dates and counts only, no percentages or verdicts; "not enough data" until two weeks have data; the device keeps only about 4 weeks.
- **Automated evidence:** `test/progress_trend_test.dart`.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J7 - Pictures and small activities in the stories

- [ ] Not tested
- **Test ID:** J7
- **Steps:** Open each story. Look at the picture on each chapter. Do the small activity (wrong tap, then right tap).
- **Expected result:** One picture per chapter; the story text is unchanged; a wrong tap only fades the choice; the right tap says well done; no stars; a native Arabic speaker reads every new line (list in `docs/CONTENT_REVIEW.md`).
- **Automated evidence:** `test/story_extras_test.dart` (content, widgets, 6 sizes). Arabic wording NOT reviewed by a native speaker.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J8 - Family chat offline queue

- [ ] Not tested
- **Test ID:** J8
- **Preconditions:** Firebase on, rules re-published, a linked relative.
- **Steps:** Switch the phone to airplane mode, send a phrase, a sticker and a typed message. Look at the chat. Switch the internet back on and wait up to 15 seconds. Repeat with the app closed in between (messages must still be there when you reopen). Make the parent pause the relative and send again.
- **Expected result:** Messages show "Waiting to send", then go once, in order, with no duplicates; after a pause they show "Not sent" with Try again / Delete; nothing is sent while the app is closed; the other side sees each message once.
- **Automated evidence:** `test/family_outbox_test.dart` (queue, retry, duplicates, chat screen) and one rules-emulator test. Not run against real Firebase or a real network.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 

### J9 - Web offline

- [ ] Not tested by a person
- **Test ID:** J9
- **Steps:** See `docs/WEB_OFFLINE.md`.
- **Expected result:** Stated honestly in that file.
- **Assistant run (desktop Chromium, 2026-10-30):** the web build has no service worker, so it cannot start with no internet; it works if the internet drops after it loaded (one tap tried); a default build needs Google's CanvasKit CDN. Emoji offline, a full walk-through and Android offline were NOT run.
- **Actual result:** See the assistant run above.
- **Status:** Failed for "opens with no internet" (by design today); the rest Not tested
- **Device or environment:** Desktop Chromium in the cloud session
- **Notes:** 

### J10 - Add a relative by user name

- [ ] Not tested
- **Test ID:** J10
- **Steps:** See F4 above (the same flow). Also: refuse a taken name, a name with a space, an unknown name and a partial name.
- **Expected result:** Only an exact user name finds the relative; no e-mail is asked anywhere; no list or search of people.
- **Automated evidence:** `test/family_test.dart`, `test/family_screens_test.dart`, 61 rules tests on the emulator. Not tested with real Firebase.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** Re-publish `firestore.rules` first.

### J11 - Privacy wording about the microphone

- [ ] Not tested
- **Test ID:** J11
- **Steps:** Parent settings -> الخصوصية والبيانات, and the audio settings screen.
- **Expected result:** The texts say the microphone and camera are used only for family messages and calls that the parent switches on; reading aloud itself needs neither.
- **Automated evidence:** `test/dashboard_library_test.dart`, `test/english_coverage_test.dart`.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** 
- **Notes:** 
