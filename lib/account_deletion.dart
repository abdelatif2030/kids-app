import 'package:shared_preferences/shared_preferences.dart';

import 'auth/account_extras.dart';
import 'data_reset.dart';
import 'firebase_config.dart' show teacherRepository;
import 'teachers_models.dart';

/// «حذف حسابي وبياناتي» (store rule: an account made in the app can be deleted in the app). Deletes the signed-in account (when
/// there is one), then everything this app kept on the device: the children's data and what was typed at sign-up.
/// Throws [AccountException] when the store/account service needs a fresh sign-in first (nothing local is erased in that case).
Future<void> deleteAccountAndData({TeacherRepository? repo}) async {
  final r = repo ?? teacherRepository;
  if (r != null && r.currentUser != null) await r.deleteAccount();
  await deleteChildData();
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove(AccountExtras.key);
}
