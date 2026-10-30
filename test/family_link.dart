import 'package:kids_app/family/memory_family_repository.dart';

/// Links a relative to the parent the way the app does it: the parent sends a request to the relative's user name
/// and the relative accepts. The relative is active at once and may talk with [children].
Future<void> linkRelative(
  FakeFamilyRepository parent,
  String relUid, {
  String name = 'Nana',
  String relation = 'grandma',
  Map<String, String> children = const {'c1': 'Lina'},
}) async {
  final userName = '${relUid}_name';
  final rel = FakeFamilyRepository(parent.server, relUid, username: userName);
  final req = await parent.sendConnectRequest(parentName: 'Sara', toName: userName, relation: relation, children: children);
  await rel.respondToRequest(req, accept: true, name: name);
}
