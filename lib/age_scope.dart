/// The product is for children aged 1 to 6. Older profiles, content and teacher ranges saved by earlier versions (ages
/// 7-12) are kept and still load; they are just no longer offered as a choice for anything new.
const kProductMinAge = 1;
const kProductMaxAge = 6;

/// The ages a picker offers: 1-6, plus [current] when it is an older legacy value, so editing never silently changes it.
List<int> ageChoices({int? current}) => [
      for (var a = kProductMinAge; a <= kProductMaxAge; a++) a,
      if (current != null && current > kProductMaxAge) current,
    ];
