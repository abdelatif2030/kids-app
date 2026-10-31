# Publishing as an individual: what you must do yourself

I cannot create accounts, pay, verify identity or enter personal data, and I have not invented any of it. Numbers below are what was publicly known when this was written; **check the current amounts and rules on the official pages during sign-up**.

## What you enter directly in the official consoles
| Item | Google Play Console (personal account) | Apple Developer Program (individual) |
|---|---|---|
| Legal name | your legal name (as on your ID) | your legal name; this becomes the seller name on the App Store |
| Address | your postal address (verification; may be shown publicly if you are a "trader" for EU distribution) | same (EU trader status shows address/phone/e-mail publicly) |
| Phone and e-mail | required and verified; a public support e-mail is shown on the store page | required; a support URL and contact are required in App Store Connect |
| Identity verification | government-issued ID and sometimes a verification video/selfie, done by Google | Apple verifies identity through the Apple Developer app with a government ID |
| Fee | one-time registration fee (about US$25) | yearly membership (about US$99; fee waivers exist in some cases) |
| Tax and payments | needed only for paid apps/in-app purchases (none planned) | same; the free app needs no banking details, but Apple's agreements must be accepted in the account |
| Two-step sign-in | required | required (two-factor on the Apple ID) |
| D-U-N-S number | not needed for personal accounts | not needed for individuals (organisations only) |
| Developer name shown | the name you choose for the store listing (may differ from the legal name; check Google's current rule) | your legal name |

## Process and typical waits
1. **Google Play:** create the account, pay, verify identity (days). Create the app, fill store listing, content rating, **Target audience and content** (ages), **Data safety**, privacy policy URL, **Families** declarations. New personal accounts must run a **closed test with a minimum number of testers for a minimum time before production access** (Google's current numbers are in the Console; they have been 12 to 20 testers for 14 days). Then apply for production.
2. **Apple:** enroll, accept agreements, create the App ID/bundle id `com.rehlaty.app`, create the app record, privacy answers, age rating, screenshots, then TestFlight and submit for review. Apple review of an app for children may ask for a demonstration of the parental gate and of how external content is controlled.
3. **Both:** a hosted privacy policy URL; support contact; screenshots from real devices; both languages (Arabic, English) for the listing.

## EU/UK distribution note (decide)
If you distribute in the EU, the Digital Services Act asks you to say whether you are a "trader"; a trader's address, phone and e-mail become public. If you do not want that, restrict countries or check the exemption rules in each console.

## Do not
Share your passwords, ID images, keystore or recovery codes with anyone, including me. Do not put them in this repository or in chat.
