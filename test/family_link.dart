import 'package:kids_app/family/memory_family_repository.dart';

/// Links a relative to the parent the way the app does it: the parent sends a request to the relative's e-mail
/// and the relative accepts. The relative is active at once and may talk with [children].
Future<void> linkRelative(
  FakeFamilyRepository parent,
  String relUid, {
  String name = 'Nana',
  String relation = 'grandma',
  Map<String, String> children = const {'c1': 'Lina'},
}) async {
  final email = '$relUid@test.com';
  final req = await parent.sendConnectRequest(parentName: 'Sara', toEmail: email, relation: relation, children: children);
  await FakeFamilyRepository(parent.server, relUid, email: email).respondToRequest(req, accept: true, name: name);
}
