import 'dart:js_interop';
import 'dart:js_interop_unsafe';

/// Keeps the page's `lang` and `dir` in step with the interface language, so browsers, translation tools
/// and screen readers read the page in the right language.
void setDocumentLanguage(String code) {
  try {
    final doc = globalContext.getProperty<JSObject?>('document'.toJS);
    final root = doc?.getProperty<JSObject?>('documentElement'.toJS);
    root?.setProperty('lang'.toJS, code.toJS);
    root?.setProperty('dir'.toJS, (code == 'ar' ? 'rtl' : 'ltr').toJS);
  } catch (_) {
    // A page without a normal document (an embed, a test host): nothing to update.
  }
}
