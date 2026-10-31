---
name: devops-cicd
description: Use when setting up or fixing build pipelines, CI/CD, release builds, signing, environments, secrets handling, deployments or rollbacks, or Git workflow rules. Includes GitHub Actions and Flutter (Android, iOS, web) guidance.
---

# DevOps and CI/CD

## Workflow
1. Write down the pipeline stages for the project: check -> test -> build -> (optionally) deploy.
2. Make CI the single gate: formatting, `flutter analyze`, tests (and rules tests) on every push and PR; a red build blocks merge.
3. Make builds reproducible: pinned Flutter/Dart versions, committed lockfile, no network side effects in tests.
4. Keep secrets out of the repo; inject them from the CI secret store at build time.
5. Release in small steps with a rollback plan; automate what you do twice.

## Rules
- Branches: short-lived feature branches; protect the main branch; PRs run CI; squash or rebase per the repo convention.
- Cache dependencies (pub cache) to keep CI fast; fail fast (analyze before the long test job).
- Separate environments (dev, staging, production) with separate config and keys.
- Versioning: semantic version plus a monotonically increasing build number.
- Never commit signing keys, keystores, `google-services.json` with private data decisions unchecked, `.env` files or tokens. Check `.gitignore`.
- Deployments are repeatable commands, not manual clicks; log what was deployed.

## Flutter specifics
- Commands: `flutter pub get`, `dart format --set-exit-if-changed .`, `flutter analyze`, `flutter test`, `flutter build apk --release` / `appbundle`, `flutter build web --release`.
- Android release: signing config reads from `key.properties` or CI secrets (never committed); build an App Bundle for Play; run on a physical device before release; check `AndroidManifest` permissions.
- iOS needs macOS runners and Apple signing (certificates and provisioning profiles as encrypted secrets).
- Web: `--no-web-resources-cdn` when the app must not depend on a third-party CDN; note that Flutter's default service worker does not provide offline use.
- Firebase: deploy rules separately from the app; test rules with the emulator in CI.
- Do not add a package or service without approval.

## When to read more
- A ready GitHub Actions workflow and a release checklist: `references/github-actions-flutter.md`.
