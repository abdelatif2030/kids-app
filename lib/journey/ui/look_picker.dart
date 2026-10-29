import '../../design/focusable_tap.dart';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import '../../l10n/strings.dart';
import '../../media_picker.dart';
import '../../teachers_models.dart' show AccountException;
import '../avatars.dart';
import 'kit.dart';
import 'profile_forms.dart';

/// Age in whole years from a 'YYYY-MM' birth month, or null when it cannot be read.
int? ageFromBirth(String? ym, DateTime now) {
  if (ym == null) return null;
  final parts = ym.split('-');
  if (parts.length != 2) return null;
  final y = int.tryParse(parts[0]);
  final m = int.tryParse(parts[1]);
  if (y == null || m == null || m < 1 || m > 12) return null;
  var age = now.year - y;
  if (now.month < m) age--;
  return age < 0 ? null : age;
}

/// The optional parts of a child's profile: gender (never required), a cartoon avatar, an
/// optional real photo that needs the parent's consent and stays on this device, and a birth
/// month that only sets the age.
class ProfileLookPicker extends StatefulWidget {
  final ProfileDraft draft;
  final VoidCallback onChanged;
  const ProfileLookPicker({
    super.key,
    required this.draft,
    required this.onChanged,
  });

  @override
  State<ProfileLookPicker> createState() => _ProfileLookPickerState();
}

class _ProfileLookPickerState extends State<ProfileLookPicker> {
  String? _photoError;

  void _changed(VoidCallback f) {
    setState(f);
    widget.onChanged();
  }

  Future<void> _pickPhoto() async {
    try {
      final Uint8List? bytes = await mediaPicker.pickPhoto();
      if (bytes == null) return;
      _changed(() {
        widget.draft.photoBytes = bytes;
        widget.draft.removePhoto = false;
        _photoError = null;
      });
    } on AccountException catch (e) {
      setState(() => _photoError = e.message);
    } catch (_) {
      setState(
        () => _photoError = tr2(
          'تعذّر اختيار الصورة',
          'Could not pick the photo',
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.draft;
    final now = DateTime.now();
    final year = d.birth == null
        ? null
        : int.tryParse(d.birth!.split('-').first);
    final month = d.birth == null
        ? null
        : int.tryParse(d.birth!.split('-').last);
    final hasPhoto = d.photoBytes != null || (d.hadPhoto && !d.removePhoto);
    TextStyle h() => const TextStyle(
      fontSize: 18,
      fontWeight: FontWeight.bold,
      color: RC.ink,
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(tr2('اختر صورة كرتونية', 'Pick a cartoon picture'), style: h()),
        const SizedBox(height: 8),
        Wrap(
          spacing: 10,
          runSpacing: 10,
          children: [
            for (final a in kAvatars)
              Semantics(
                button: true,
                selected: d.avatar == a.id,
                label: a.name(),
                child: FocusableTap(
                  key: ValueKey('avatar_${a.id}'),
                  onTap: () => _changed(() => d.avatar = a.id),
                  child: AvatarFace(
                    id: a.id,
                    size: 64,
                    selected: d.avatar == a.id,
                  ),
                ),
              ),
          ],
        ),
        const SizedBox(height: 16),
        Text(
          tr2('ولد أم بنت؟ (اختياري)', 'Boy or girl? (optional)'),
          style: h(),
        ),
        const SizedBox(height: 6),
        Wrap(
          spacing: 8,
          children: [
            ChoiceChip(
              label: Text(tr2('بنت', 'Girl')),
              selected: d.gender == 'girl',
              onSelected: (_) => _changed(() => d.gender = 'girl'),
            ),
            ChoiceChip(
              label: Text(tr2('ولد', 'Boy')),
              selected: d.gender == 'boy',
              onSelected: (_) => _changed(() => d.gender = 'boy'),
            ),
            ChoiceChip(
              label: Text(tr2('لا أفضّل أن أقول', 'Prefer not to say')),
              selected: d.gender == null,
              onSelected: (_) => _changed(() => d.gender = null),
            ),
          ],
        ),
        const SizedBox(height: 16),
        Text(
          tr2('تاريخ الميلاد (اختياري)', 'Birth month (optional)'),
          style: h(),
        ),
        const SizedBox(height: 4),
        Text(
          tr2(
            'يُستخدم فقط لتحديد العمر المناسب ولا يُرسل إلى أي مكان.',
            'Used only to set the right age. It is not sent anywhere.',
          ),
          style: const TextStyle(fontSize: 13, color: RC.ink),
        ),
        const SizedBox(height: 6),
        Wrap(
          spacing: 16,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            DropdownButton<int>(
              key: const ValueKey('birth_year'),
              value: year,
              hint: Text(tr2('السنة', 'Year')),
              items: [
                for (var y = now.year; y >= now.year - 13; y--)
                  DropdownMenuItem(value: y, child: Text('$y')),
              ],
              onChanged: (y) => _changed(() => d.setBirth(y, month ?? 1, now)),
            ),
            DropdownButton<int>(
              key: const ValueKey('birth_month'),
              value: month,
              hint: Text(tr2('الشهر', 'Month')),
              items: [
                for (var m = 1; m <= 12; m++)
                  DropdownMenuItem(value: m, child: Text('$m')),
              ],
              onChanged: (m) =>
                  _changed(() => d.setBirth(year ?? now.year, m ?? 1, now)),
            ),
            if (d.birth != null)
              IconButton(
                tooltip: tr2('مسح', 'Clear'),
                icon: const Icon(Icons.clear_rounded),
                onPressed: () => _changed(() => d.birth = null),
              ),
          ],
        ),
        const SizedBox(height: 16),
        Text(
          tr2(
            'صورة حقيقية للطفل (اختياري)',
            'A real photo of the child (optional)',
          ),
          style: h(),
        ),
        const SizedBox(height: 4),
        Text(
          tr2(
            'تُحفظ على هذا الجهاز فقط، ولا تُرفع ولا تُشارك، وتظهر كصورة الطفل داخل التطبيق فقط.',
            'It stays on this device only. It is never uploaded or shared, and is used only as the child\'s picture in this app.',
          ),
          style: const TextStyle(fontSize: 13, color: RC.ink),
        ),
        Material(
          type: MaterialType.transparency,
          child: SwitchListTile(
            key: const ValueKey('photo_consent'),
            contentPadding: EdgeInsets.zero,
            title: Text(
              tr2(
                'أوافق على استخدام صورة حقيقية لطفلي على هذا الجهاز',
                'I agree to use a real photo of my child on this device',
              ),
            ),
            value: d.photoConsent,
            onChanged: (v) => _changed(() {
              d.photoConsent = v;
              if (!v) {
                d.photoBytes = null;
                if (d.hadPhoto) d.removePhoto = true;
              }
            }),
          ),
        ),
        if (d.photoConsent)
          Wrap(
            spacing: 12,
            runSpacing: 8,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              if (hasPhoto && d.photoBytes != null)
                ClipOval(
                  child: Image.memory(
                    d.photoBytes!,
                    width: 64,
                    height: 64,
                    fit: BoxFit.cover,
                  ),
                ),
              OutlinedButton.icon(
                key: const ValueKey('pick_photo'),
                onPressed: _pickPhoto,
                icon: const Icon(Icons.photo_library_rounded),
                label: Text(
                  hasPhoto
                      ? tr2('تغيير الصورة', 'Change the photo')
                      : tr2('اختيار صورة', 'Choose a photo'),
                ),
              ),
              if (hasPhoto)
                TextButton(
                  onPressed: () => _changed(() {
                    d.photoBytes = null;
                    d.removePhoto = true;
                  }),
                  child: Text(tr2('إزالة', 'Remove')),
                ),
            ],
          ),
        if (_photoError != null)
          Text(_photoError!, style: const TextStyle(color: Colors.red)),
      ],
    );
  }
}
