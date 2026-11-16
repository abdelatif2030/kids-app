# Design and video skills (installed 2026-11-16)

Three open-source skills were added under `.claude/skills/` after reading their code. Reviewed: no hidden network code in the UI UX Pro Max core, no hooks in HyperFrames, and the taste skill's Stop hook is inert unless a taste build is armed. NOT reviewed line by line: the 40 MB of taste-skill assets and HyperFrames' registry blocks.

| Skill | Source | What it is for here |
|---|---|---|
| ui-ux-pro-max | github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT, v2.15.0, core skill only; path edited to `$CLAUDE_PROJECT_DIR`) | Review and improve app and game screens against searchable UX rules |
| design-taste-frontend | github.com/Leonxlnx/taste-skill (MIT, v2.5.1) | A public landing page for the web demo (static HTML), not Flutter screens |
| hyperframes, hyperframes-cli, hyperframes-registry, media-use, figma, slideshow, style-sampling, reverse-any-video, remotion-to-hyperframes | github.com/heygen-com/hyperframes (Apache-2.0, v0.9.58) | Render promo/explainer videos from HTML on this machine |

## Where each one helps (and its limits)

**Games and app screens: UI UX Pro Max.** Useful checks: touch targets (Android 48 dp), text contrast 4.5:1 (labels sitting on the owner's pictures are the main risk), reduced motion, visible focus, meaning never carried by colour alone (a wrong answer must not be only a fade), loading states (the on-demand Games and Settings parts show a spinner). Run one search per concern, then verify on the real screen; the rules are guidance, not proof. The skill's "recommended design system" for a kids app (claymorphism, blue/yellow/pink, Baloo 2) is a suggestion only: Rehlaty's tokens (`lib/design/tokens.dart`) and the owner's pictures win.

**Deployment: taste skill.** The web demo has no marketing page. A short static landing page (what the app is, safety promises, a link to the demo) could be built with it and hosted next to the demo. Rules: no analytics, no third-party hosts for fonts or photos on any page a child can reach, no stock photos of children.

**Videos: HyperFrames.** A 15-30 s app promo or a lesson animation draft can be rendered locally with Chromium and ffmpeg. Lesson videos that children watch stay the owner's own material.

## Not installed
UI UX Pro Max's brand, logo, slides, banner and design sub-skills (they call external image APIs with keys), and the hosted HeyGen/MCP features of HyperFrames.
