/* IPS Inspire Public School — sample site script (vanilla JS, no build step) */
(function () {
  "use strict";
  var LS_KEY = "ips-lang";

  /* ---------- Urdu dictionary ---------- */
  var UR = {
    "ph": "عارضی",
    "skip": "مرکزی مواد پر جائیں",
    "tb.tag": "جہاں آپ کے خواب پورے ہوتے ہیں",
    "brand.name": "آئی پی ایس انسپائر پبلک اسکول قمبر",
    "brand.sub": "اینڈ دی سائنٹیفک اکیڈمی — انگلش کوچنگ سینٹر",
    "nav.home": "ہوم", "nav.about": "ہمارے بارے میں", "nav.admissions": "داخلے",
    "nav.fees": "فیس اور اوقات", "nav.gallery": "گیلری", "nav.contact": "رابطہ", "nav.apply": "ابھی اپلائی کریں",
    "menu": "مینو",
    "chat.lbl": "ہم سے بات کریں", "chat.soon": "جلد آ رہا ہے",
    "chat.tip": "داخلہ معاون چیٹ بوٹ جلد دستیاب ہوگا۔ ابھی کے لیے براہ کرم واٹس ایپ پر رابطہ کریں۔",
    "wa": "واٹس ایپ پر بات کریں",

    "hero.eyebrow": "معیار، تحریک اور جدت",
    "hero.title": "آئی پی ایس انسپائر پبلک اسکول قمبر",
    "hero.sub": "اینڈ دی سائنٹیفک اکیڈمی — انگلش کوچنگ سینٹر",
    "hero.lead": "جہاں آپ کے خواب پورے ہوتے ہیں۔ نرسری سے آٹھویں جماعت تک معیاری تعلیم، حفظ و ناظرہ، اور دوستانہ اسلامی ماحول میں کردار سازی۔",
    "hero.b1": "نرسری تا مڈل", "hero.b2": "حفظ و ناظرہ", "hero.b3": "مفت داخلہ",
    "btn.apply": "داخلے کے لیے اپلائی کریں", "btn.whatsapp": "واٹس ایپ کریں", "btn.call": "کال کریں",
    "btn.more": "مزید پڑھیں", "btn.gallery": "مکمل گیلری دیکھیں", "btn.contact": "ہم سے رابطہ کریں",
    "btn.fees": "فیس اور اوقات دیکھیں", "btn.directions": "راستہ معلوم کریں", "btn.submit": "انکوائری بھیجیں",

    "strip.title": "داخلے جاری ہیں!",
    "strip.text": "نرسری سے مڈل تک داخلے جاری ہیں۔ داخلہ مفت — صرف مناسب ماہانہ فیس۔",

    "why.eyebrow": "ہمیں کیوں منتخب کریں", "why.title": "تعلیم و تربیت ساتھ ساتھ",
    "why.intro": "ہم دنیاوی اور دینی تعلیم کو ساتھ لے کر چلتے ہیں تاکہ بچے علم کے ساتھ اچھے کردار کے بھی مالک بنیں۔",
    "why.1t": "تجربہ کار تربیت یافتہ اساتذہ", "why.1p": "محنتی اور تربیت یافتہ اساتذہ جو ہر بچے پر توجہ دیتے ہیں۔",
    "why.2t": "دوستانہ اسلامی ماحول", "why.2p": "محفوظ، باادب اور دوستانہ اسلامی ماحول۔",
    "why.3t": "دنیاوی و دینی تعلیم", "why.3p": "جدید نصاب کے ساتھ قرآنی تعلیم، حفظ اور ناظرہ۔",
    "why.4t": "سرگرمی پر مبنی تعلیم", "why.4p": "عملی سرگرمیوں کے ذریعے سیکھنا تاکہ سمجھ پختہ ہو۔",
    "why.5t": "انفرادی توجہ", "why.5p": "ہر طالب علم کی انفرادی ضروریات پر خصوصی توجہ۔",
    "why.6t": "نقل سے پاک ماحول", "why.6p": "طلبہ امتحانی پرچے خود حل کرتے ہیں — نقل کلچر نہیں۔",
    "why.7t": "حوصلہ افزا لیکچرز اور کیریئر کونسلنگ", "why.7p": "طلبہ کی رہنمائی اور مستقبل کی منصوبہ بندی۔",
    "why.8t": "نتائج پر یقین", "why.8p": "کردار سازی اور محنت — ہم نتائج پر یقین رکھتے ہیں۔",

    "classes.eyebrow": "جماعتیں", "classes.title": "ہماری جماعتیں اور پروگرام",
    "classes.intro": "نرسری سے آٹھویں جماعت (مڈل) تک، ساتھ میں حفظ و ناظرہ اور سائنٹیفک اکیڈمی۔",
    "cl.1t": "ابتدائی جماعتیں", "cl.1p": "نرسری، کے جی اور ابتدائی جماعتیں — کھیل اور سرگرمیوں کے ذریعے مضبوط بنیاد۔",
    "cl.2t": "پرائمری و مڈل", "cl.2p": "جماعت اول سے آٹھویں تک — انگریزی، سائنس، ریاضی، اردو، سندھی اور اسلامیات۔",
    "cl.3t": "حفظ و ناظرہ", "cl.3p": "قرآنِ پاک کی ناظرہ اور حفظ کلاسز، تجوید کے ساتھ۔",
    "cl.4t": "دی سائنٹیفک اکیڈمی", "cl.4p": "انگلش گرامر، سائنس و ریاضی، انگریزی↔سندھی ترجمہ کی مشق۔ انگلش گرامر شفٹ سہ پہر 3:30 بجے۔",

    "pr.eyebrow": "پرنسپل کا پیغام", "pr.title": "خوش آمدید",
    "pr.msg": "آئی پی ایس انسپائر پبلک اسکول میں خوش آمدید۔ ہمارا مقصد ہر بچے کو معیاری تعلیم کے ساتھ اچھی تربیت دینا ہے تاکہ وہ اپنے خاندان، معاشرے اور ملک کے لیے مفید شہری بنے۔ ہم والدین کے ساتھ مل کر بچوں کے روشن مستقبل کے لیے کوشاں ہیں۔",
    "pr.name": "مفتی عبدالوہاب گوپانگ", "pr.role": "پرنسپل، آئی پی ایس انسپائر پبلک اسکول قمبر",

    "ev.eyebrow": "تقریبات اور کامیابیاں", "ev.title": "حالیہ سرگرمیاں",
    "ev.1t": "یومِ آزادی کی تقریب", "ev.1p": "14 اگست 2026 کو طلبہ نے تقاریر، ملی نغموں اور انعامات کے ساتھ یومِ آزادی منایا۔",
    "ev.2t": "سالانہ امتحانات", "ev.2p": "جولائی 2026 میں سالانہ امتحانات منعقد ہوئے — طلبہ نے پرچے خود حل کیے۔",
    "ev.3t": "مڈٹرم امتحان کے پوزیشن ہولڈرز", "ev.3p": "مڈٹرم امتحان 2025/26 میں نمایاں پوزیشن حاصل کرنے والے طلبہ کو مبارکباد۔",
    "ev.4t": "آٹھویں جماعت کی الوداعی تقریب", "ev.4p": "آٹھویں جماعت کے طلبہ کے لیے پُروقار الوداعی تقریب۔",
    "ev.aug": "اگست", "ev.jul": "جولائی", "ev.mid": "مڈٹرم", "ev.fw": "الوداع",

    "gal.eyebrow": "گیلری", "gal.title": "اسکول کی جھلکیاں",
    "gal.intro": "ہماری تقریبات اور سرگرمیوں کی چند تصاویر۔",
    "gal.more": "مزید تصاویر جلد", "gal.note": "اصل تصاویر چھوٹے سائز میں ہیں — اعلیٰ معیار کی تصاویر جلد شامل کی جائیں گی۔",
    "cap.1": "یومِ آزادی 2026 — انعامات", "cap.2": "یومِ آزادی 2026 — طلبہ",
    "cap.3": "یومِ آزادی 2026 — شرکاء", "cap.4": "یومِ آزادی 2026 — اسٹیج تقریر",
    "cap.5": "سالانہ امتحانات جولائی 2026", "cap.6": "سالانہ امتحانات — کلاس روم",

    "cta.title": "اپنے بچے کا روشن مستقبل آج سے شروع کریں",
    "cta.text": "داخلے جاری ہیں — داخلہ مفت، صرف مناسب ماہانہ فیس۔ مزید معلومات کے لیے ہم سے رابطہ کریں۔",

    "about.title": "ہمارے بارے میں", "about.sub": "تعلیم و تربیت ساتھ ساتھ",
    "about.h": "آئی پی ایس انسپائر پبلک اسکول قمبر",
    "about.p1": "آئی پی ایس انسپائر پبلک اسکول اینڈ دی سائنٹیفک اکیڈمی — انگلش کوچنگ سینٹر، مستوئی چوک، میرو خان روڈ، قمبر (سندھ) میں واقع ہے۔ ہم نرسری سے آٹھویں جماعت تک تعلیم، حفظ و ناظرہ کلاسز، اور انگلش، سائنس و ریاضی کی کوچنگ فراہم کرتے ہیں۔",
    "about.p2": "ہمارا نعرہ \"معیار، تحریک اور جدت\" ہے۔ ہم دنیاوی اور دینی تعلیم کو ساتھ لے کر بچوں کی کردار سازی پر یقین رکھتے ہیں۔",
    "about.founded": "سنِ قیام", "about.students": "طلبہ", "about.teachers": "اساتذہ", "about.classes": "جماعتیں",
    "mission.t": "ہمارا مشن", "mission.p": "دوستانہ اسلامی ماحول میں معیاری، سرگرمی پر مبنی تعلیم کے ذریعے ہر بچے کی صلاحیتوں کو اجاگر کرنا اور اچھا کردار بنانا۔",
    "vision.t": "ہمارا وژن", "vision.p": "ایسی نسل تیار کرنا جو علم، دیانت داری اور اعتماد کے ساتھ اپنے خواب پورے کرے — جہاں آپ کے خواب پورے ہوتے ہیں۔",
    "values.t": "ہماری اقدار", "values.l": "<li>معیار</li><li>تحریک</li><li>جدت</li><li>دیانت داری — نقل سے پاک</li><li>ادب اور کردار</li>",
    "aboutpr.title": "پرنسپل کا پیغام",

    "adm.title": "داخلے", "adm.sub": "نرسری سے مڈل تک داخلے جاری ہیں",
    "adm.free.t": "داخلہ مفت!", "adm.free.p": "آئی پی ایس میں داخلہ بالکل مفت ہے — صرف مناسب ماہانہ فیس ادا کرنی ہوتی ہے۔",
    "steps.title": "داخلے کا طریقہ کار",
    "st.1t": "رابطہ کریں", "st.1p": "کال، واٹس ایپ یا نیچے دیا گیا فارم استعمال کریں۔",
    "st.2t": "اسکول کا دورہ", "st.2p": "مستوئی چوک، میرو خان روڈ قمبر پر اسکول تشریف لائیں۔",
    "st.3t": "جائزہ / انٹرویو", "st.3p": "مناسب جماعت کے تعین کے لیے بچے کا مختصر جائزہ۔",
    "st.4t": "داخلہ مکمل", "st.4p": "فارم جمع کرائیں — داخلہ مفت، کلاسز شروع!",
    "docs.t": "مطلوبہ دستاویزات", "docs.p": "دستاویزات کی حتمی فہرست اسکول سے تصدیق کے بعد شامل کی جائے گی۔",
    "docs.l": "<li>بچے کا ب فارم / پیدائشی سرٹیفکیٹ</li><li>والد/سرپرست کا شناختی کارڈ</li><li>پاسپورٹ سائز تصاویر</li><li>سابقہ اسکول کا سرٹیفکیٹ (اگر ہو)</li>",
    "form.t": "داخلہ انکوائری فارم", "form.demo": "ڈیمو فارم — کوئی ڈیٹا نہیں بھیجا جاتا",
    "f.student": "طالب علم کا نام", "f.parent": "والد/سرپرست کا نام", "f.phone": "فون / واٹس ایپ",
    "f.class": "مطلوبہ جماعت", "f.msg": "پیغام", "f.choose": "جماعت منتخب کریں",
    "f.ok": "شکریہ! یہ ڈیمو فارم ہے — کوئی ڈیٹا نہیں بھیجا گیا۔ براہ کرم واٹس ایپ یا فون پر رابطہ کریں۔",
    "sessions.t": "تعلیمی سیشن", "sessions.p": "سیشن کی تاریخیں:", "board.t": "بورڈ / الحاق",

    "fees.title": "فیس اور اوقات", "fees.sub": "داخلہ مفت — صرف مناسب ماہانہ فیس",
    "fees.h": "ماہانہ فیس کا شیڈول", "fees.class": "جماعت", "fees.adm": "داخلہ فیس", "fees.monthly": "ماہانہ فیس",
    "fees.free": "مفت", "fees.note": "فیس کی اصل رقم اسکول سے تصدیق کے بعد شامل کی جائے گی۔ تازہ معلومات کے لیے کال یا واٹس ایپ کریں۔",
    "fees.nursery": "نرسری / کے جی", "fees.primary": "جماعت 1 تا 5", "fees.middle": "جماعت 6 تا 8", "fees.hifz": "حفظ / ناظرہ", "fees.academy": "سائنٹیفک اکیڈمی",
    "tim.h": "اسکول کے اوقات", "tim.season": "موسم", "tim.days": "دن", "tim.time": "اوقات",
    "tim.summer": "گرمیاں", "tim.winter": "سردیاں", "tim.mon": "پیر تا ہفتہ",
    "acad.h": "دی سائنٹیفک اکیڈمی — انگلش کوچنگ سینٹر", "acad.subj": "مضمون", "acad.time": "وقت",
    "acad.eng": "انگلش گرامر", "acad.sci": "سائنس و ریاضی", "acad.tr": "انگریزی↔سندھی ترجمہ کی مشق",
    "acad.330": "سہ پہر 3:30 بجے",

    "gp.title": "گیلری", "gp.sub": "تقریبات، امتحانات اور سرگرمیاں",
    "gp.ph": "تصویر جلد آ رہی ہے",

    "ct.title": "رابطہ کریں", "ct.sub": "ہم آپ کی مدد کے لیے حاضر ہیں",
    "ct.h": "رابطے کی تفصیلات", "ct.addr": "پتہ", "ct.addr.v": "مستوئی چوک، میرو خان روڈ، قمبر، سندھ، پاکستان",
    "ct.phone": "فون", "ct.wa": "واٹس ایپ", "ct.email": "ای میل", "ct.hours": "دفتری اوقات",
    "ct.map": "نقشہ",

    "ft.about": "تعلیم و تربیت ساتھ ساتھ۔ نرسری سے مڈل تک معیاری تعلیم، حفظ و ناظرہ، اور سائنٹیفک اکیڈمی۔",
    "ft.links": "فوری لنکس", "ft.programs": "پروگرام", "ft.contact": "رابطہ",
    "ft.p1": "نرسری تا مڈل", "ft.p2": "حفظ و ناظرہ", "ft.p3": "انگلش کوچنگ", "ft.p4": "سائنس و ریاضی",
    "ft.rights": "آئی پی ایس انسپائر پبلک اسکول قمبر۔ جملہ حقوق محفوظ ہیں۔"
  };

  function applyLang(lang) {
    var html = document.documentElement;
    html.lang = lang === "ur" ? "ur" : "en";
    html.dir = lang === "ur" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!el.hasAttribute("data-en")) el.setAttribute("data-en", el.innerHTML);
      if (lang === "ur" && UR[k] != null) el.innerHTML = UR[k];
      else el.innerHTML = el.getAttribute("data-en");
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // format: "attr:key"
      var parts = el.getAttribute("data-i18n-attr").split(":");
      var attr = parts[0], k = parts[1], store = "data-en-" + attr;
      if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(attr) || "");
      el.setAttribute(attr, lang === "ur" && UR[k] ? UR[k] : el.getAttribute(store));
    });
    var t = document.querySelector(".lang-toggle");
    if (t) {
      t.textContent = lang === "ur" ? "English" : "اردو";
      t.setAttribute("aria-label", lang === "ur" ? "Switch to English" : "اردو میں دیکھیں (Switch to Urdu)");
      t.setAttribute("lang", lang === "ur" ? "en" : "ur");
    }
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem(LS_KEY) || "en"; } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(saved);

    var toggle = document.querySelector(".lang-toggle");
    if (toggle) toggle.addEventListener("click", function () {
      applyLang(document.documentElement.lang === "ur" ? "en" : "ur");
    });

    /* Mobile menu */
    var btn = document.querySelector(".menu-btn"), nav = document.getElementById("main-nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); });
      });
    }

    /* Chat bubble (coming soon) */
    var chat = document.querySelector(".chat-bubble"), tip = document.querySelector(".chat-tip");
    if (chat && tip) {
      chat.addEventListener("click", function () {
        var s = tip.classList.toggle("show");
        chat.setAttribute("aria-expanded", s ? "true" : "false");
        if (s) setTimeout(function () { tip.classList.remove("show"); chat.setAttribute("aria-expanded", "false"); }, 5000);
      });
    }

    /* Demo form */
    var form = document.querySelector("form[data-demo]");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.querySelector(".form-msg");
      if (msg) { msg.classList.add("show"); msg.focus(); }
      form.reset();
    });

    /* Lightbox */
    var tiles = Array.prototype.slice.call(document.querySelectorAll(".tile[data-full]"));
    var lb = document.querySelector(".lightbox");
    if (lb && tiles.length) {
      var img = lb.querySelector("img"), cap = lb.querySelector(".lb-cap"), idx = 0, last = null;
      function show(i) {
        idx = (i + tiles.length) % tiles.length;
        var t = tiles[idx];
        img.src = t.getAttribute("data-full");
        var c = t.querySelector(".cap");
        img.alt = c ? c.textContent : "";
        cap.textContent = c ? c.textContent : "";
      }
      function open(i) { last = document.activeElement; show(i); lb.classList.add("open"); lb.querySelector(".lb-close").focus(); }
      function close() { lb.classList.remove("open"); if (last) last.focus(); }
      tiles.forEach(function (t, i) { t.addEventListener("click", function () { open(i); }); });
      lb.querySelector(".lb-close").addEventListener("click", close);
      lb.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
      lb.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") show(document.dir === "rtl" ? idx - 1 : idx + 1);
        if (e.key === "ArrowLeft") show(document.dir === "rtl" ? idx + 1 : idx - 1);
      });
    }

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
