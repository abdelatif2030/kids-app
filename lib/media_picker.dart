import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:image_picker/image_picker.dart';

import 'teachers_models.dart';

/// Size limits so a photo and a CV fit in Firestore (1 MB per document) on the
/// free Spark plan, where Firebase Storage is not available.
const kMaxPhotoBytes = 100 * 1024;
const kMaxCvBytes = 500 * 1024;

/// Picking and saving files, behind an interface so tests can use a fake.
abstract class MediaPicker {
  /// A small photo, or null if the user cancelled.
  Future<Uint8List?> pickPhoto();

  /// A CV (pdf, jpg or png), or null if the user cancelled.
  Future<CvFile?> pickCv();

  /// Lets the user keep a copy of a CV on their device.
  Future<void> saveCv(CvFile cv);
}

/// Replaced in tests.
MediaPicker mediaPicker = DeviceMediaPicker();

class DeviceMediaPicker implements MediaPicker {
  @override
  Future<Uint8List?> pickPhoto() async {
    final picked = await ImagePicker().pickImage(
      source: ImageSource.gallery,
      maxWidth: 360,
      maxHeight: 360,
      imageQuality: 70,
    );
    if (picked == null) return null;
    final bytes = await picked.readAsBytes();
    if (bytes.length > kMaxPhotoBytes) {
      throw const AccountException('الصورة كبيرة، اختر صورة أصغر');
    }
    return bytes;
  }

  @override
  Future<CvFile?> pickCv() async {
    final file = await FilePicker.pickFile(
      type: FileType.custom,
      allowedExtensions: const ['pdf', 'jpg', 'jpeg', 'png'],
    );
    if (file == null) return null;
    final bytes = await file.readAsBytes();
    if (bytes.length > kMaxCvBytes) {
      throw const AccountException('ملف السيرة الذاتية كبير (الحد الأقصى 500 كيلوبايت)');
    }
    return CvFile(file.name, bytes);
  }

  @override
  Future<void> saveCv(CvFile cv) async {
    final lower = cv.name.toLowerCase();
    final mime = lower.endsWith('.pdf')
        ? 'application/pdf'
        : lower.endsWith('.png')
            ? 'image/png'
            : 'image/jpeg';
    await FilePicker.saveFile(fileName: cv.name, bytes: cv.bytes, mimeType: mime);
  }
}
