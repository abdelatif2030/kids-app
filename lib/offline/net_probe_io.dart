import 'dart:io';

/// Is there probably a network path? A DNS lookup of a host the app already uses for videos. Nothing is sent
/// besides the name lookup. A successful lookup does not prove every service is reachable.
Future<bool> defaultNetProbe() async {
  try {
    final r = await InternetAddress.lookup('www.youtube.com').timeout(const Duration(seconds: 4));
    return r.isNotEmpty && r.first.rawAddress.isNotEmpty;
  } catch (_) {
    return false;
  }
}
