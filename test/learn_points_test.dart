import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:kids_app/journey/learn_points.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('points and stars add up per child, never for nothing', () async {
    expect((await LearnPoints.of('a')).points, 0);
    await LearnPoints.add('a', points: 23, stars: 3, level: 'shapes');
    await LearnPoints.add('a', points: 14, stars: 1, level: 'shapes');
    await LearnPoints.add('b', points: 10, stars: 1);
    final a = await LearnPoints.of('a');
    expect((a.points, a.plays, a.stars), (37, 2, 4));
    expect((await LearnPoints.of('b')).points, 10);
  });

  test('values outside the rules are ignored, damaged data starts again, forget erases one child', () async {
    await LearnPoints.add('a', points: 500, stars: 3); // too many points
    await LearnPoints.add('a', points: 5, stars: 9); // too many stars
    await LearnPoints.add('a', points: -1, stars: 1);
    expect((await LearnPoints.of('a')).plays, 0);
    SharedPreferences.setMockInitialValues({LearnPoints.key: '{not json'});
    expect((await LearnPoints.of('a')).points, 0);
    await LearnPoints.add('a', points: 12, stars: 2);
    await LearnPoints.add('b', points: 7, stars: 1);
    await LearnPoints.forget('a');
    expect((await LearnPoints.of('a')).plays, 0);
    expect((await LearnPoints.of('b')).points, 7);
  });
}
