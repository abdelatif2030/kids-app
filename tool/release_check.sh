#!/usr/bin/env bash
# Runs every release check that needs no credentials and no device. Exit code 0 only when all pass.
# It does NOT build for Android/iOS (needs the SDK / Xcode) and does NOT prove a release is ready.
# Usage: tool/release_check.sh   (from the project root, with `flutter` on PATH)
set -u
fail=0
step() { echo; echo "== $1"; }
step "analyze (errors fail the check; infos and warnings are listed)"
out=$(flutter analyze 2>&1); echo "$out" | tail -3
echo "$out" | grep -q " error •" && { echo "FAIL: analyzer errors"; fail=1; }
step "tests"
flutter test 2>&1 | tail -2 | tee /tmp/rehlaty_test_tail.txt
grep -q "All tests passed" /tmp/rehlaty_test_tail.txt || { echo "FAIL: tests"; fail=1; }
step "web release build"
flutter build web --release 2>&1 | tail -2 | tee /tmp/rehlaty_web_tail.txt
grep -q "Built build/web" /tmp/rehlaty_web_tail.txt || { echo "FAIL: web build"; fail=1; }
step "Firestore rules (current + proposed) and backend-function logic tests on the LOCAL emulator (optional: needs Java and rules_test/node_modules)"
if command -v java >/dev/null 2>&1 && [ -d rules_test/node_modules ]; then
  (cd rules_test && npm run test:all 2>&1 | grep -E "^# (tests|pass|fail)|Script exited") | tee /tmp/rehlaty_rules_tail.txt
  grep -q "^# fail 0" /tmp/rehlaty_rules_tail.txt || { echo "FAIL: rules / functions tests"; fail=1; }
  grep -q "^# fail [1-9]" /tmp/rehlaty_rules_tail.txt && { echo "FAIL: a rules or functions test failed"; fail=1; }
else
  echo "SKIPPED: Java or rules_test/node_modules not available (cd rules_test && npm install)"
fi
step "no key material and no verified-video claim in the repo"
if git ls-files | grep -Ei '\.(jks|keystore)$|key\.properties$' | grep -q .; then echo "FAIL: key file is tracked"; fail=1; fi
if grep -q '"verification": "verified"' assets/videos.json; then echo "FAIL: a bundled video is marked verified"; fail=1; fi
step "known open blockers (informational)"
grep -q "PRODUCT_BUNDLE_IDENTIFIER = com.example" ios/Runner.xcodeproj/project.pbxproj && { echo "FAIL: iOS bundle id is still the template placeholder"; fail=1; }
echo "OPEN: iOS bundle id is set to com.rehlaty.app in the project but has never been built in Xcode (needs a Mac, your Apple team and signing)"
if [ -n "$(grep -rn "FAMILY_DEMO" .github 2>/dev/null)" ]; then echo "FAIL: a pipeline defines FAMILY_DEMO"; fail=1; fi
[ -f android/key.properties ] || echo "OPEN: android/key.properties absent (release builds would be signed with the debug key)"
echo; [ $fail -eq 0 ] && echo "ALL AUTOMATIC CHECKS PASSED" || echo "SOME CHECKS FAILED"
exit $fail
