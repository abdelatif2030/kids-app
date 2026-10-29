import 'dart:js_interop';
import 'dart:js_interop_unsafe';

/// In a browser: `navigator.onLine`. Browsers report "offline" reliably, but "online" only means a network
/// interface is up.
Future<bool> defaultNetProbe() async {
  try {
    final nav = globalContext.getProperty<JSObject?>('navigator'.toJS);
    final v = nav?.getProperty<JSBoolean?>('onLine'.toJS);
    return v?.toDart ?? true;
  } catch (_) {
    return true;
  }
}
