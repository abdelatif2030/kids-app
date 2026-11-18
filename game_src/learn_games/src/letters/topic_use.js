// «بنستخدمه في إيه؟» — one question per game in each topic level asks what a thing is FOR (body parts, clothes, jobs...).
// Each question has exactly one right picture among the topic's pictures (checked by test/topic_use.test.js).
export const TOPIC_USE = {
  t_body: [
    ['بنشم بإيه؟', 'y_nose'], ['بنسمع بإيه؟', 'y_ear'], ['بنشوف بإيه؟', 'y_eye'], ['بناكل بإيه؟', 'y_mouth'],
    ['بنمشي بإيه؟', 'y_foot'], ['بنمسك الحاجة بإيه؟', 'y_hand'],
  ],
  t_clothes: [
    ['بنلبس إيه في رجلينا؟', 'l_socks'], ['بنلبس إيه عشان ننام؟', 'l_pajamas'], ['بنلبس إيه لما تمطر؟', 'l_raincoat'],
    ['بنلبس إيه في إيدينا؟', 'l_gloves'], ['بنلبس إيه عشان نشوف كويس؟', 'l_glasses'], ['بنلف إيه حوالين رقبتنا؟', 'l_scarf'],
  ],
  t_jobs: [
    ['مين بيعالجنا لما نتعب؟', 'z_doctor'], ['مين بيعلمنا في المدرسة؟', 'z_teacher'], ['مين بيطفي الحريقة؟', 'z_firefighter'],
    ['مين بيزرع الأرض؟', 'z_farmer'], ['مين بيطبخ الأكل؟', 'z_cook'], ['مين بيسوق الطيارة؟', 'z_pilot'], ['مين بيغني؟', 'z_singer'],
  ],
  t_school: [
    ['بنكتب بإيه في الكراسة؟', 'e_pencil'], ['بنقص الورقة بإيه؟', 'e_scissors'], ['بنمسح بإيه؟', 'e_eraser'], ['بنقيس بإيه؟', 'e_ruler'],
  ],
  t_music: [['بنغني في إيه؟', 'm_mic'], ['بنسمع الموسيقى بإيه؟', 'm_headphones']],
  t_food: [['الفرخة بتجيب لنا إيه؟', 'o_egg'], ['البقرة بتدينا إيه؟', 'o_milk'], ['النحلة بتعمل إيه؟', 'o_honey']],
  t_weather: [['لما تمطر بنفتح إيه؟', 't_umbrella'], ['إيه اللي بينزل من السحاب؟', 't_rain']],
  t_bugs: [['مين بيعمل خيوط؟', 'i_spider'], ['مين بيطير بالليل؟', 'i_bat'], ['مين بيمشي ببطء ومعاه بيته؟', 'i_snail'], ['مين ريشه حلو وبيفرده؟', 'i_peacock']],
  t_sea: [['إيه اللي بيدل المراكب؟', 'b_lighthouse'], ['مين بيمشي على جنبه؟', 'u_crab']],
  t_home: [
    ['بننام على إيه؟', 'h_bed'], ['بنغسل سناننا بإيه؟', 'h_toothbrush'], ['بننشف إيدينا بإيه؟', 'h_towel'],
    ['بنعرف الوقت من إيه؟', 'h_clock'], ['بنكنس بإيه؟', 'h_broom'], ['بنتأرجح على إيه؟', 'h_swing'],
  ],
  t_wild: [['مين ملك الغابة؟', 'j_lion'], ['مين خرطومه طويل؟', 'j_elephant'], ['مين بيغير لونه؟', 'j_chameleon'], ['مين بيصحينا الصبح؟', 'f_rooster']],
  t_places: [['فين بنتعالج؟', 'c_hospital'], ['إيه اللي لونه أحمر وبيوقف العربيات؟', 'c_light'], ['إيه اللي في مصر وشكله مثلث كبير؟', 'd_pyramid']],
};
export const allTopicUseSentences = () => Object.values(TOPIC_USE).flatMap((l) => l.map((x) => x[0]));
