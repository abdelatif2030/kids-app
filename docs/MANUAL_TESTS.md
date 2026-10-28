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
- **Preconditions:** A release APK (`flutter build apk --release`). The main `AndroidManifest.xml` currently declares no `INTERNET` permission (only the debug and profile manifests do), so a release build may not reach YouTube or Firebase.
- **Steps:**
  1. Install the release APK on a phone with a working connection.
  2. Open a video from the list and look at the thumbnails.
- **Expected result:** If videos and thumbnails fail only in the release build, the missing permission is the cause and the manifest needs a decision from the owner before it is changed.
- **Actual result:** Not tested
- **Status:** Not tested
- **Device or environment:** Device model, Android version: 
- **Notes:** Found by reading the manifests, not yet confirmed on a device.

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
