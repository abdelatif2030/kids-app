import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adaptive/skill_state.dart';
import 'package:kids_app/progress_store.dart';

SkillEvent ev(String day, bool ok, {String skill = 'counting'}) => SkillEvent(day: day, skill: skill, ok: ok, childId: 'c');

void main() {
  final now = DateTime(2026, 10, 29);
  test('no events: not started', () {
    expect(computeSkillState('counting', [], now: now).level, SkillLevel.notStarted);
  });
  test('few rounds: exploring, never a weakness', () {
    final s = computeSkillState('counting', [for (var i = 0; i < 4; i++) ev('2026-10-29', false)], now: now);
    expect(s.level, SkillLevel.exploring);
    expect(s.hasEvidence, isFalse);
  });
  test('low accuracy: practising', () {
    final s = computeSkillState('counting', [for (var i = 0; i < 6; i++) ev('2026-10-29', i == 0)], now: now);
    expect(s.level, SkillLevel.practising);
  });
  test('high accuracy on one day only: building, not demonstrated', () {
    final s = computeSkillState('counting', [for (var i = 0; i < 10; i++) ev('2026-10-29', true)], now: now);
    expect(s.level, SkillLevel.building);
  });
  test('high accuracy over two days: demonstrated', () {
    final s = computeSkillState('counting', [
      for (var i = 0; i < 5; i++) ev('2026-10-27', true),
      for (var i = 0; i < 5; i++) ev('2026-10-29', true),
    ], now: now);
    expect(s.level, SkillLevel.demonstrated);
    expect(s.days, 2);
  });
  test('old events outside the window are ignored; other skills ignored', () {
    final s = computeSkillState('counting', [for (var i = 0; i < 9; i++) ev('2026-09-01', true), ev('2026-10-29', true, skill: 'colors')], now: now);
    expect(s.level, SkillLevel.notStarted);
  });
  test('states are per child', () {
    final m = computeSkillStates([ev('2026-10-29', true), SkillEvent(day: '2026-10-29', skill: 'colors', ok: true, childId: 'other')], childId: 'c', now: now);
    expect(m.keys, ['counting']);
  });
}
