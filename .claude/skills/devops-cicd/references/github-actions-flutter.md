# GitHub Actions for a Flutter app

Save as `.github/workflows/ci.yml` (adapt versions; pin them).

```yaml
name: ci
on:
  pull_request:
  push:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          channel: stable
          cache: true
      - run: flutter pub get
      - run: dart format --output=none --set-exit-if-changed lib test
      - run: flutter analyze
      - run: flutter test
  rules:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - uses: actions/setup-java@v4
        with: { distribution: temurin, java-version: 17 }
      - run: cd rules_test && npm ci && npm test
  build-apk:
    needs: check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with: { channel: stable, cache: true }
      - run: flutter build apk --release
```

Notes: add a signing step only with secrets from the repository secret store. Upload artifacts with `actions/upload-artifact`.

## Release checklist
- [ ] Version and build number bumped.
- [ ] CI green on the release commit.
- [ ] Rules published and tested.
- [ ] Release build installed on a real device and the main flows run.
- [ ] Permissions in the manifest match what the app does.
- [ ] No debug flags, test keys or sample data.
- [ ] Release notes written; rollback = previous artifact kept.

## Secrets handling
- Secrets live in the CI secret store; read them as environment variables in the step that needs them.
- Rotate any secret that was ever committed. Do not rely on deleting it from history.
- Scan before pushing: look for `key`, `token`, `password`, private key headers.
