import 'design/layout.dart';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'l10n/strings.dart';
import 'media_picker.dart';
import 'teachers_models.dart';
import 'teachers_portfolio.dart';

/// What parents see before booking: the teacher's published work samples and the intro video link.
class PortfolioSection extends StatefulWidget {
  final TeacherRepository repo;
  final TeacherProfile teacher;
  const PortfolioSection({super.key, required this.repo, required this.teacher});

  @override
  State<PortfolioSection> createState() => _PortfolioSectionState();
}

class _PortfolioSectionState extends State<PortfolioSection> {
  late Future<List<PortfolioItem>> _items = widget.repo.portfolioOf(widget.teacher.uid);

  @override
  Widget build(BuildContext context) {
    final link = widget.teacher.introVideoUrl;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (link.isNotEmpty) IntroVideoTile(url: link),
        FutureBuilder<List<PortfolioItem>>(
          future: _items,
          builder: (context, snap) {
            if (snap.connectionState != ConnectionState.done) return const Padding(padding: EdgeInsets.all(8), child: LinearProgressIndicator());
            if (snap.hasError) {
              return Row(children: [
                Expanded(child: Text(tr2('تعذّر تحميل الأعمال', 'Could not load the work samples'))),
                TextButton(
                  onPressed: () {
                    final next = widget.repo.portfolioOf(widget.teacher.uid);
                    setState(() {
                      _items = next;
                    });
                  },
                  child: Text(tr2('إعادة المحاولة', 'Try again')),
                ),
              ]);
            }
            final items = [for (final i in snap.data ?? const <PortfolioItem>[]) if (i.published) i];
            if (items.isEmpty) {
              return Text(tr2('لم يضف المدرس نماذج من أعماله بعد.', 'The teacher has not added work samples yet.'), style: const TextStyle(fontSize: 14));
            }
            // One column on a phone, two on a wide page.
            return LayoutBuilder(
              builder: (context, box) {
                final cols = columnsFor(box.maxWidth, minTileWidth: 320, maxColumns: 2);
                if (cols == 1) return Column(children: [for (final i in items) PortfolioCard(item: i)]);
                final w = (box.maxWidth - 12) / 2;
                return Wrap(spacing: 12, runSpacing: 0, children: [for (final i in items) SizedBox(width: w, child: PortfolioCard(item: i))]);
              },
            );
          },
        ),
        Text(
          tr2('هذه نماذج كتبها المدرس بنفسه ولم يراجعها التطبيق.', 'These samples were written by the teacher and have not been reviewed by the app.'),
          style: const TextStyle(fontSize: 12),
        ),
      ],
    );
  }
}

/// The intro video as a link to copy: no player, no autoplay, nothing opens by itself.
class IntroVideoTile extends StatelessWidget {
  final String url;
  const IntroVideoTile({super.key, required this.url});

  @override
  Widget build(BuildContext context) => Card(
        child: ListTile(
          leading: const Icon(Icons.play_circle_outline_rounded),
          title: Text(tr2('فيديو تعريفي قصير', 'Short intro video')),
          subtitle: Text(url, maxLines: 2, overflow: TextOverflow.ellipsis, textDirection: TextDirection.ltr),
          trailing: IconButton(
            tooltip: tr2('نسخ الرابط', 'Copy the link'),
            icon: const Icon(Icons.copy_rounded),
            onPressed: () async {
              await Clipboard.setData(ClipboardData(text: url));
              if (context.mounted) {
                ScaffoldMessenger.of(context)
                  ..hideCurrentSnackBar()
                  ..showSnackBar(SnackBar(content: Text(tr2('نُسخ الرابط. افتحه في المتصفح عندما تكون مع طفلك.', 'Link copied. Open it in a browser while you are with your child.'))));
              }
            },
          ),
        ),
      );
}

class PortfolioCard extends StatelessWidget {
  final PortfolioItem item;
  final Widget? trailing;
  const PortfolioCard({super.key, required this.item, this.trailing});

  @override
  Widget build(BuildContext context) {
    final img = item.imageBytes;
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (img != null)
              Padding(
                padding: const EdgeInsetsDirectional.only(end: 12),
                child: ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.memory(img, width: 72, height: 72, fit: BoxFit.cover)),
              ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Wrap(spacing: 8, crossAxisAlignment: WrapCrossAlignment.center, children: [
                    Chip(label: Text(portfolioTypeLabel(item.type)), visualDensity: VisualDensity.compact),
                  ]),
                  Text(item.title, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                  if (item.description.isNotEmpty) Text(item.description),
                ],
              ),
            ),
            ?trailing,
          ],
        ),
      ),
    );
  }
}

String portfolioStatusLabel(PortfolioItem i) =>
    i.hidden ? tr2('مخفي من صاحب التطبيق', 'Hidden by the app owner') : (i.published ? tr2('منشور', 'Published') : tr2('مسودة', 'Draft'));

/// The teacher's own list of work samples: add, edit, publish or keep as a draft, delete.
class TeacherPortfolioScreen extends StatefulWidget {
  final TeacherRepository repo;
  const TeacherPortfolioScreen({super.key, required this.repo});

  @override
  State<TeacherPortfolioScreen> createState() => _TeacherPortfolioScreenState();
}

class _TeacherPortfolioScreenState extends State<TeacherPortfolioScreen> {
  late Future<List<PortfolioItem>> _items = widget.repo.portfolioOf(widget.repo.currentUser!.uid);

  void _reload() {
    final next = widget.repo.portfolioOf(widget.repo.currentUser!.uid);
    setState(() {
      _items = next;
    });
  }

  Future<void> _edit(PortfolioItem? item, int count) async {
    if (item == null && count >= kPortfolioMaxItems) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('وصلت إلى الحد الأقصى ($kPortfolioMaxItems عملاً).', 'You reached the limit ($kPortfolioMaxItems items).'))));
      return;
    }
    final saved = await Navigator.push<bool>(context, MaterialPageRoute(builder: (_) => PortfolioEditScreen(repo: widget.repo, item: item)));
    if (saved == true) _reload();
  }

  Future<void> _delete(PortfolioItem i) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(tr2('حذف هذا العمل؟', 'Delete this work?')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(tr2('إلغاء', 'Cancel'))),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(tr2('حذف', 'Delete'))),
        ],
      ),
    );
    if (ok != true) return;
    await widget.repo.deletePortfolioItem(i.id);
    _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('معرض أعمالي', 'My portfolio'))),
      floatingActionButton: FutureBuilder<List<PortfolioItem>>(
        future: _items,
        builder: (context, snap) => FloatingActionButton.extended(
          key: const ValueKey('add_work'),
          onPressed: () => _edit(null, snap.data?.length ?? 0),
          icon: const Icon(Icons.add_rounded),
          label: Text(tr2('إضافة عمل', 'Add a work')),
        ),
      ),
      body: FutureBuilder<List<PortfolioItem>>(
        future: _items,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) {
            return Center(child: TextButton(onPressed: _reload, child: Text(tr2('تعذّر التحميل. أعد المحاولة', 'Could not load. Try again'))));
          }
          final items = snap.data ?? const <PortfolioItem>[];
          return CenteredList(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 96),
            children: [
              Text(
                tr2('أضف نماذج من عملك: ورقة عمل، خطة حصة، نشاط أو قصة. «المسودة» لا يراها إلا أنت، و«المنشور» يراه الأهل قبل أن يحجزوا. لا ترفع صور الأطفال ولا بياناتهم.',
                    'Add samples of your work: a worksheet, a lesson plan, an activity or a story. A draft is seen only by you; published items are seen by parents before they book. Never upload children\'s photos or details.'),
                style: const TextStyle(fontSize: 14),
              ),
              const SizedBox(height: 8),
              if (items.isEmpty) Padding(padding: const EdgeInsets.all(24), child: Text(tr2('لا توجد أعمال بعد.', 'No work yet.'), textAlign: TextAlign.center)),
              for (final i in items)
                PortfolioCard(
                  item: i,
                  trailing: Column(
                    children: [
                      Text(portfolioStatusLabel(i), style: TextStyle(fontSize: 12, color: i.hidden ? Colors.red : (i.published ? Colors.green.shade700 : Colors.orange.shade800))),
                      IconButton(tooltip: tr2('تعديل', 'Edit'), icon: const Icon(Icons.edit_rounded), onPressed: () => _edit(i, items.length)),
                      IconButton(tooltip: tr2('حذف', 'Delete'), icon: const Icon(Icons.delete_outline_rounded), onPressed: () => _delete(i)),
                    ],
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}

class PortfolioEditScreen extends StatefulWidget {
  final TeacherRepository repo;
  final PortfolioItem? item;
  const PortfolioEditScreen({super.key, required this.repo, this.item});

  @override
  State<PortfolioEditScreen> createState() => _PortfolioEditScreenState();
}

class _PortfolioEditScreenState extends State<PortfolioEditScreen> {
  late final _title = TextEditingController(text: widget.item?.title ?? '');
  late final _desc = TextEditingController(text: widget.item?.description ?? '');
  late String _type = widget.item?.type ?? 'worksheet';
  late bool _publish = widget.item?.published ?? false;
  String? _image;
  String? _error;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _image = widget.item?.imageB64;
  }

  @override
  void dispose() {
    _title.dispose();
    _desc.dispose();
    super.dispose();
  }

  Future<void> _pickImage() async {
    try {
      final Uint8List? b = await mediaPicker.pickPhoto();
      if (b != null) setState(() => _image = base64Encode(b));
    } on AccountException catch (e) {
      setState(() => _error = e.message);
    }
  }

  Future<void> _save() async {
    final base = widget.item;
    final item = PortfolioItem(
      id: base?.id ?? '',
      teacherUid: widget.repo.currentUser!.uid,
      type: _type,
      title: _title.text.trim(),
      description: _desc.text.trim(),
      imageB64: _image,
      status: base != null && base.hidden ? portfolioHidden : (_publish ? portfolioPublished : portfolioDraft),
    );
    final problem = base != null && base.hidden ? null : validatePortfolioItem(item);
    if (problem != null) {
      setState(() => _error = problem);
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.repo.savePortfolioItem(item);
      if (mounted) Navigator.pop(context, true);
    } on AccountException catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = e.message;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final hidden = widget.item?.hidden ?? false;
    return Scaffold(
      appBar: AppBar(title: Text(widget.item == null ? tr2('عمل جديد', 'New work') : tr2('تعديل العمل', 'Edit work'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          if (hidden)
            Card(color: Colors.red.shade50, child: Padding(padding: const EdgeInsets.all(12), child: Text(tr2('أخفى صاحب التطبيق هذا العمل. لا يمكنك إظهاره من هنا.', 'The app owner hid this item. You cannot show it from here.')))),
          Wrap(spacing: 8, runSpacing: 4, children: [
            for (final t in kPortfolioTypes) ChoiceChip(label: Text(portfolioTypeLabel(t)), selected: _type == t, onSelected: (_) => setState(() => _type = t)),
          ]),
          const SizedBox(height: 12),
          TextField(
            key: const ValueKey('work_title'),
            controller: _title,
            maxLength: kPortfolioTitleMax,
            decoration: InputDecoration(labelText: tr2('العنوان', 'Title')),
          ),
          TextField(
            key: const ValueKey('work_desc'),
            controller: _desc,
            maxLines: 4,
            maxLength: kPortfolioDescriptionMax,
            decoration: InputDecoration(labelText: tr2('وصف قصير', 'Short description')),
          ),
          const SizedBox(height: 8),
          Row(children: [
            if (_image != null) ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.memory(base64Decode(_image!), width: 72, height: 72, fit: BoxFit.cover)),
            if (_image != null) const SizedBox(width: 12),
            Expanded(
              child: Wrap(spacing: 8, children: [
                OutlinedButton.icon(
                  key: const ValueKey('work_image'),
                  onPressed: _pickImage,
                  icon: const Icon(Icons.image_outlined),
                  label: Text(_image == null ? tr2('إضافة صورة صغيرة', 'Add a small picture') : tr2('تغيير الصورة', 'Change the picture')),
                ),
                if (_image != null) TextButton(onPressed: () => setState(() => _image = null), child: Text(tr2('إزالة', 'Remove'))),
              ]),
            ),
          ]),
          Text(tr2('الصورة حتى 100 كيلوبايت. لا تضع وجوه أطفال أو أسماءهم.', 'Pictures up to 100 KB. No children\'s faces or names.'), style: const TextStyle(fontSize: 12)),
          SwitchListTile(
            key: const ValueKey('work_publish'),
            contentPadding: EdgeInsets.zero,
            title: Text(tr2('انشره ليراه الأهل', 'Publish so parents can see it')),
            subtitle: Text(_publish ? tr2('منشور', 'Published') : tr2('مسودة: لا يراها إلا أنت', 'Draft: only you can see it')),
            value: _publish,
            onChanged: hidden ? null : (v) => setState(() => _publish = v),
          ),
          if (_error != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(_error!, style: const TextStyle(color: Colors.red))),
          const SizedBox(height: 12),
          FilledButton(key: const ValueKey('work_save'), onPressed: _busy ? null : _save, child: Text(tr2('حفظ', 'Save'))),
        ],
      ),
    );
  }
}
