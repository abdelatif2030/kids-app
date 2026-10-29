import 'dart:js_interop';
import 'dart:js_interop_unsafe';

/// Keeps the page's `lang` in step with the interface language, so browsers, translation tools and screen
/// readers read the page in the right language.
///
/// The document's `dir` is deliberately kept `ltr` in both languages: Flutter lays out right-to-left itself
/// (Directionality), and a right-to-left `<html>` makes the browser place embedded platform views, such as the
/// YouTube player, in the wrong spot (shifted by the free width, so the video looked cut off).
void setDocumentLanguage(String code) {
  try {
    final doc = globalContext.getProperty<JSObject?>('document'.toJS);
    final root = doc?.getProperty<JSObject?>('documentElement'.toJS);
    root?.setProperty('lang'.toJS, code.toJS);
    root?.setProperty('dir'.toJS, 'ltr'.toJS);
  } catch (_) {
    // A page without a normal document (an embed, a test host): nothing to update.
  }
}
