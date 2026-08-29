const CONFIG = {
  twitch: { channel: "ganzisquad", clientId: "", accessToken: "" },
  telegram: { username: "ganzisquad" },
  donation: {
    title: "Сбор на GTA 6 + PS 5 PRO + оборудование для стрима",
    description: "Цель: для улучшения качества стримов и поднять онлайн",
    collected: 144,
    target: 1000,
    currency: "€",
  },
  amazon: {
    gpu: "https://link.amazon/B0gexae8W",
    cpu: "https://link.amazon/B009SceGY",
    monitor: "https://link.amazon/B0cMjxMGE",
    mic: "https://link.amazon/B059M44e3",
    mouse: "https://link.amazon/B03Ky1cSb",
    ram: "https://link.amazon/B038VnSL4",
    keyboard: "https://link.amazon/B0fbFJ1T8",
  },
  formEndpoint: null,
};

const T = {
  ru: {
    "nav.about": "Обо мне",
    "nav.schedule": "Расписание",
    "nav.services": "Услуги",
    "nav.setup": "ПК",
    "nav.social": "Соцсети",
    "nav.support": "Поддержка",
    "nav.contact": "Контакты",
    "hero.badge": "Онлайн",
    "hero.text":
      "Креативное пространство для тех, кто создаёт будущее. Гейминг, стриминг, технологии и AI — на одном дыхании.",
    "hero.twitch": "Смотреть Twitch",
    "hero.support": "Поддержать",
    "hero.bell": "Написать в Telegram",
    "about.tag": "О проекте",
    "about.title": "GANZI SQUAD",
    "about.text":
      "GANZI (Andrei) — стример, игрок в жизнь из Молдовы. Строю долгосрочный проект вокруг себя, живое комьюнити и игровой контент: с 2022 года совмещаю гейминг с технологиями и AI-автоматизацией.",
    "about.text2":
      "Основной формат — кооперативные стримы: тактические шутеры, MMO и игры с активным взаимодействием, а не соло-прохождения. Атмосферу держим — дружелюбной, экспертной и адекватной. Хочется — Shorts с автоматизацией.",
    "timeline.pastLabel": "Пройденный путь",
    "timeline.futureLabel": "Планы и амбиции",
    "timeline.one": "Первый стрим",
    "timeline.two": "GearUP партнёрство",
    "timeline.three": "1.000 подписчиков",
    "timeline.four": "Запуск сайта",
    "timeline.f1": "10K подписчиков",
    "timeline.f2": "Стрим GTA VI в день выхода",
    "timeline.f3": "Полная автоматизация Shorts",
    "timeline.f4": "Субтитры на EN/DE",
    "stats.followers": "Подписчиков",
    "stats.views": "Просмотров",
    "stats.streams": "Стримов",
    "stats.active": "В движении",
    "schedule.title": "Расписание стримов",
    "schedule.fallback": "Статус Twitch появится после подключения API.",
    "services.tag": "Услуги",
    "services.title": "Моя подработка",
    "services.obs":
      "OBS, звук, камеры, алерты, overlay и настройка трансляции.",
    "services.pc":
      "FPS, задержки, Windows оптимизация, драйверы и игровые настройки.",
    "services.chat.title": "Оформление чата",
    "services.chat":
      "Twitch chat, overlay, алерты, авто-сообщения и команды ботов.",
    "services.audit.title": "Аудит канала",
    "services.audit":
      "Разбор оформления и контента с понятным планом улучшений.",
    "services.web": "Сайты, лендинги и веб-приложения с адаптивным дизайном.",
    "services.brand": "Логотип, айдентика, overlay-пакет и стиль канала.",
    "services.order": "Заказать",
    "setup.tag": "Мой ПК",
    "setup.title": "Комплектующие",
    "setup.text":
      "Клик по компоненту ведёт на Amazon через партнёрскую ссылку что-бы поддержать меня.",
    "partners.tag": "Партнёры",
    "partners.title": "Промокоды и ссылки",
    "partners.gearup": "Снижение пинга и стабильное соединение.",
    "partners.promocode": "Промокод:",
    "partners.donatov": "Платформа для пополнения баланса в играх.",
    "partners.pc": "ПК версия",
    "partners.mobile": "Мобильная",
    "partners.open": "Перейти",
    "partners.slot": "Партнёрский слот",
    "partners.slottext": "Твой бренд может быть здесь.",
    "partners.contact": "Связаться",
    "support.tag": "Поддержка",
    "support.title": "Поддержать GANZI SQUAD",
    "support.text":
      "Твоя поддержка помогает улучшать качество контента и покупать новое оборудование.",
    "support.paypal": "Поддержка картой или балансом PayPal",
    "support.revolut": "Быстрый перевод",
    "support.alerts": "Карты, крипто и телефон",
    "discord.title": "Мои сервера",
    "discord.check": "● проверка онлайна",
    "social.tag": "Все площадки",
    "social.title": "Найди меня везде",
    "social.text": "Стримы, короткие видео и новости — выбирай платформу.",
    "social.twitch": "Прямые эфиры и live-чат",
    "social.youtube": "Видео, Shorts, обзоры и Гайды",
    "social.tiktok": "Короткие ролики и клипы",
    "social.telegram": "Новости и анонсы",
    "faq.tag": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Как попасть на стрим?",
    "faq.a1":
      "Зайди на Twitch-канал во время эфира — ссылка в шапке сайта. Расписание обновляется еженедельно.",
    "faq.q2": "Какое железо ты используешь?",
    "faq.a2":
      "Актуальный сетап есть в разделе «ПК» — там все комплектующие с прямыми ссылками.",
    "faq.q3": "Как заказать услугу?",
    "faq.a3":
      "Выбери услугу в разделе «Услуги» и нажми «Заказать» — заполни форму и отправь заявку прямо мне.",
    "contact.tag": "Контакты",
    "contact.title": "Присоединяйся к GANZI SQUAD",
    "contact.text": "Опиши задачу — отвечу в Discord или по электронной почте.",
    "contact.send": "Отправить заявку",
    "legal.tag": "Правовая информация",
    "legal.title": "Юридическая информация",
    "legal.impressum.h": "Impressum (§ 5 TMG)",
    "legal.impressum.contact": "Контакт",
    "legal.impressum.rstv":
      "Ответственный за содержание согласно § 18 Abs. 2 MStV: GANZI, адрес указан выше.",
    "legal.impressum.disclaimer":
      "Несмотря на тщательную проверку контента, мы не несём ответственности за содержание внешних ссылок. За контент связанных сайтов несут ответственность исключительно их владельцы.",
    "legal.privacy.h": "Политика конфиденциальности",
    "legal.privacy.p1":
      "Ответственный по смыслу GDPR: GANZI, Obermarkt 21, 99998 Thüringen, Germany, E-Mail: GanziDESpam@outlook.com.",
    "legal.privacy.p2":
      "Мы обрабатываем персональные данные (имя, контактные данные), которые вы сообщаете через контактную форму или email, исключительно для обработки вашего запроса. Правовое основание — Art. 6 Abs. 1 lit. b и f DSGVO.",
    "legal.privacy.p3":
      "Этот сайт не использует аналитические, трекинговые или рекламные cookies. Внешний контент (Twitch-плеер, Discord-виджеты) может передавать данные соответствующим провайдерам при загрузке; действуют их отдельные политики конфиденциальности.",
    "legal.privacy.p4":
      "Ваши данные хранятся только столько, сколько необходимо для обработки запроса, максимум 6 месяцев, если не установлена законная обязанность хранения.",
    "legal.privacy.p5":
      "Вы имеете право на доступ (Art. 15), исправление (Art. 16), удаление (Art. 17), ограничение обработки (Art. 18), перенос данных (Art. 20) и возражение (Art. 21 DSGVO), а также право на жалобу в надзорный орган (Art. 77 DSGVO).",
    "legal.cookies.h": "Уведомление о Cookies",
    "legal.cookies.p1":
      "Этот сайт использует только технически необходимые функции хранения (localStorage) для выбора языка. Трекинговые, маркетинговые или аналитические cookies не устанавливаются.",
    "legal.cookies.p2":
      "При будущем подключении аналитики или рекламных сервисов будет добавлен полноценный cookie-баннер согласно TTDSG.",
    "legal.terms.h": "Условия использования",
    "legal.terms.p1":
      "Используя этот сайт, вы соглашаетесь соблюдать действующее законодательство и не нарушать работу сайта.",
    "legal.terms.p2":
      "Весь контент, тексты, графика и дизайн этого сайта являются собственностью GANZI SQUAD, если не указано иное. Копирование без согласия не допускается.",
    "legal.terms.p3":
      "Предлагаемые услуги оказываются по индивидуальной договорённости; цены на этой странице являются ориентировочными.",
  },
  en: {
    "nav.about": "About",
    "nav.schedule": "Schedule",
    "nav.services": "Services",
    "nav.setup": "PC",
    "nav.social": "Social",
    "nav.support": "Support",
    "nav.contact": "Contact",
    "hero.badge": "Online",
    "hero.text":
      "A creative space for those building the future. Gaming, streaming, technology and AI — in one breath.",
    "hero.twitch": "Watch Twitch",
    "hero.support": "Support",
    "hero.bell": "Message on Telegram",
    "about.tag": "About the project",
    "about.title": "GANZI SQUAD",
    "about.text":
      "GANZI (Andrei) is a streamer and a player in life from Moldova. Building a long-term project around himself, a live community and gaming content — since 2022 combining gaming with technology and AI automation.",
    "about.text2":
      "The main format is co-op streaming: tactical shooters, MMOs and games with active interaction, not solo playthroughs. We keep the vibe friendly, expert and down-to-earth. Also aiming for automated Shorts.",
    "timeline.pastLabel": "Journey so far",
    "timeline.futureLabel": "Plans & ambitions",
    "timeline.one": "First stream",
    "timeline.two": "GearUP partnership",
    "timeline.three": "1,000 followers",
    "timeline.four": "Website launch",
    "timeline.f1": "10K followers",
    "timeline.f2": "Stream GTA VI on release day",
    "timeline.f3": "Full Shorts automation",
    "timeline.f4": "EN/DE subtitles",
    "stats.followers": "Followers",
    "stats.views": "Views",
    "stats.streams": "Streams",
    "stats.active": "Always active",
    "schedule.title": "Stream Schedule",
    "schedule.fallback": "Twitch status appears after API configuration.",
    "services.tag": "Services",
    "services.title": "My side gigs",
    "services.obs":
      "OBS, sound, cameras, alerts, overlays and full stream setup.",
    "services.pc":
      "FPS, latency, Windows optimization, drivers and game settings.",
    "services.chat.title": "Chat Design",
    "services.chat":
      "Twitch chat, overlay, alerts, auto messages and bot commands.",
    "services.audit.title": "Channel Audit",
    "services.audit":
      "Channel and content review with a clear improvement plan.",
    "services.web": "Websites, landing pages and responsive web apps.",
    "services.brand": "Logo, identity, overlay package and channel style.",
    "services.order": "Order",
    "setup.tag": "My PC",
    "setup.title": "Components",
    "setup.text":
      "Clicking a component takes you to Amazon via an affiliate link to support me.",
    "partners.tag": "Partners",
    "partners.title": "Promo codes & links",
    "partners.gearup": "Lower ping and a stable connection.",
    "partners.promocode": "Promo code:",
    "partners.donatov": "Platform for adding funds to game accounts.",
    "partners.pc": "PC version",
    "partners.mobile": "Mobile",
    "partners.open": "Open",
    "partners.slot": "Partner slot",
    "partners.slottext": "Your brand could be here.",
    "partners.contact": "Contact",
    "support.tag": "Support",
    "support.title": "Support GANZI SQUAD",
    "support.text":
      "Your support helps improve content quality and buy new equipment.",
    "support.paypal": "Support via PayPal card or balance",
    "support.revolut": "Fast transfer",
    "support.alerts": "Cards, crypto and phone",
    "discord.title": "My Servers",
    "discord.check": "● checking online",
    "social.tag": "All platforms",
    "social.title": "Find me everywhere",
    "social.text": "Streams, short videos and news — pick your platform.",
    "social.twitch": "Live streams and chat",
    "social.youtube": "Videos, Shorts, reviews and guides",
    "social.tiktok": "Short clips and highlights",
    "social.telegram": "News and announcements",
    "faq.tag": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How do I join the stream?",
    "faq.a1":
      "Visit the Twitch channel while live — link is in the site header. Schedule updates weekly.",
    "faq.q2": "What hardware do you use?",
    "faq.a2":
      'The current setup is listed in the "PC" section, with direct links to everything.',
    "faq.q3": "How do I order a service?",
    "faq.a3":
      'Pick a service in the "Services" section and click "Order" — fill out the form and send the request directly to me.',
    "contact.tag": "Contact",
    "contact.title": "Join GANZI SQUAD",
    "contact.text": "Describe the task — I will reply on Discord or by email.",
    "contact.send": "Send request",
    "legal.tag": "Legal Information",
    "legal.title": "Legal Information",
    "legal.impressum.h": "Impressum (§ 5 TMG)",
    "legal.impressum.contact": "Contact",
    "legal.impressum.rstv":
      "Responsible for content under § 18 Abs. 2 MStV: GANZI, address as stated above.",
    "legal.impressum.disclaimer":
      "Despite careful content review, we assume no liability for the content of external links. The operators of linked sites are solely responsible for their content.",
    "legal.privacy.h": "Privacy Policy",
    "legal.privacy.p1":
      "Controller within the meaning of the GDPR: GANZI, Obermarkt 21, 99998 Thüringen, Germany, Email: GanziDESpam@outlook.com.",
    "legal.privacy.p2":
      "We process personal data (name, contact details) that you provide via the contact form or email solely to handle your request. The legal basis is Art. 6(1)(b) and (f) GDPR.",
    "legal.privacy.p3":
      "This site does not use analytics, tracking or advertising cookies. External content (Twitch player, Discord widgets) may transmit data to their respective providers on load; their own separate privacy policies apply.",
    "legal.privacy.p4":
      "Your data is stored only for as long as necessary to process your request, up to a maximum of 6 months, unless a legal retention obligation applies.",
    "legal.privacy.p5":
      "You have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21 GDPR), as well as the right to lodge a complaint with a supervisory authority (Art. 77 GDPR).",
    "legal.cookies.h": "Cookie Notice",
    "legal.cookies.p1":
      "This site uses only technically necessary storage functions (localStorage) for language selection. No tracking, marketing or analytics cookies are set.",
    "legal.cookies.p2":
      "If analytics or advertising services are added in the future, a full cookie consent banner compliant with TTDSG will be included.",
    "legal.terms.h": "Terms of Use",
    "legal.terms.p1":
      "By using this site, you agree to comply with applicable law and not to disrupt the operation of the site.",
    "legal.terms.p2":
      "All content, text, graphics and design of this site are the property of GANZI SQUAD unless stated otherwise. Reproduction without consent is not permitted.",
    "legal.terms.p3":
      "The offered services are provided by individual arrangement; prices on this page are non-binding estimates.",
  },
  de: {
    "nav.about": "Über mich",
    "nav.schedule": "Zeitplan",
    "nav.services": "Dienste",
    "nav.setup": "PC",
    "nav.social": "Social",
    "nav.support": "Support",
    "nav.contact": "Kontakt",
    "hero.badge": "Online",
    "hero.text":
      "Ein kreativer Raum für alle, die die Zukunft gestalten. Gaming, Streaming, Technik und KI — in einem Atemzug.",
    "hero.twitch": "Twitch ansehen",
    "hero.support": "Unterstützen",
    "hero.bell": "Auf Telegram schreiben",
    "about.tag": "Über das Projekt",
    "about.title": "GANZI SQUAD",
    "about.text":
      "GANZI (Andrei) ist Streamer und ein Spieler im Leben, aus Moldawien. Er baut ein langfristiges Projekt rund um sich selbst, eine lebendige Community und Gaming-Content — seit 2022 kombiniert er Gaming mit Technik und KI-Automatisierung.",
    "about.text2":
      "Hauptformat ist Koop-Streaming: taktische Shooter, MMOs und Spiele mit aktiver Interaktion, keine Solo-Durchspiele. Die Atmosphäre bleibt freundlich, fachkundig und bodenständig. Angestrebt wird zudem automatisierter Shorts-Content.",
    "timeline.pastLabel": "Bisheriger Weg",
    "timeline.futureLabel": "Pläne & Ambitionen",
    "timeline.one": "Erster Stream",
    "timeline.two": "GearUP Partnerschaft",
    "timeline.three": "1.000 Follower",
    "timeline.four": "Website-Start",
    "timeline.f1": "10K Follower",
    "timeline.f2": "GTA VI am Release-Tag streamen",
    "timeline.f3": "Vollständige Shorts-Automatisierung",
    "timeline.f4": "EN/DE-Untertitel",
    "stats.followers": "Follower",
    "stats.views": "Aufrufe",
    "stats.streams": "Streams",
    "stats.active": "Immer aktiv",
    "schedule.title": "Stream-Zeitplan",
    "schedule.fallback": "Twitch-Status erscheint nach API-Konfiguration.",
    "services.tag": "Dienste",
    "services.title": "Meine Nebentätigkeit",
    "services.obs":
      "OBS, Sound, Kameras, Alerts, Overlays und vollständiges Streaming-Setup.",
    "services.pc":
      "FPS, Latenz, Windows-Optimierung, Treiber und Spieleinstellungen.",
    "services.chat.title": "Chat-Design",
    "services.chat":
      "Twitch-Chat, Overlay, Alerts, Auto-Nachrichten und Bot-Befehle.",
    "services.audit.title": "Kanal-Audit",
    "services.audit":
      "Kanal- und Content-Analyse mit klarem Verbesserungsplan.",
    "services.web": "Websites, Landingpages und responsive Web-Apps.",
    "services.brand": "Logo, Identität, Overlay-Paket und Kanalstil.",
    "services.order": "Bestellen",
    "setup.tag": "Mein PC",
    "setup.title": "Komponenten",
    "setup.text":
      "Ein Klick auf eine Komponente führt über meinen Amazon-Affiliate-Link, um mich zu unterstützen.",
    "partners.tag": "Partner",
    "partners.title": "Promo-Codes & Links",
    "partners.gearup": "Weniger Ping und stabile Verbindung.",
    "partners.promocode": "Promo-Code:",
    "partners.donatov": "Plattform zum Aufladen des Guthabens in Spielen.",
    "partners.pc": "PC-Version",
    "partners.mobile": "Mobil",
    "partners.open": "Öffnen",
    "partners.slot": "Partner-Slot",
    "partners.slottext": "Deine Marke könnte hier stehen.",
    "partners.contact": "Kontakt",
    "support.tag": "Support",
    "support.title": "GANZI SQUAD unterstützen",
    "support.text":
      "Deine Unterstützung verbessert die Content-Qualität und hilft beim Kauf neuer Ausrüstung.",
    "support.paypal": "Unterstützung per PayPal-Karte oder Guthaben",
    "support.revolut": "Schnelle Überweisung",
    "support.alerts": "Karten, Krypto und Telefon",
    "discord.title": "Meine Server",
    "discord.check": "● Online-Status wird geprüft",
    "social.tag": "Alle Plattformen",
    "social.title": "Finde mich überall",
    "social.text": "Streams, kurze Videos und News — wähle deine Plattform.",
    "social.twitch": "Live-Streams und Chat",
    "social.youtube": "Videos, Shorts, Reviews und Guides",
    "social.tiktok": "Kurze Clips und Highlights",
    "social.telegram": "News und Ankündigungen",
    "faq.tag": "FAQ",
    "faq.title": "Häufige Fragen",
    "faq.q1": "Wie komme ich zum Stream?",
    "faq.a1":
      "Besuche den Twitch-Kanal während des Streams — Link im Header der Website. Der Zeitplan wird wöchentlich aktualisiert.",
    "faq.q2": "Welche Hardware nutzt du?",
    "faq.a2":
      'Das aktuelle Setup findest du im Bereich "PC" mit direkten Links zu allem.',
    "faq.q3": "Wie bestelle ich eine Dienstleistung?",
    "faq.a3":
      'Wähle einen Dienst im Bereich "Dienste" und klicke auf "Bestellen" — fülle das Formular aus und sende die Anfrage direkt an mich.',
    "contact.tag": "Kontakt",
    "contact.title": "GANZI SQUAD beitreten",
    "contact.text":
      "Beschreibe deine Aufgabe — ich antworte über Discord oder per E-Mail.",
    "contact.send": "Anfrage senden",
    "legal.tag": "Rechtliche Hinweise",
    "legal.title": "Rechtliche Hinweise",
    "legal.impressum.h": "Impressum (§ 5 TMG)",
    "legal.impressum.contact": "Kontakt",
    "legal.impressum.rstv":
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: GANZI, Anschrift wie oben.",
    "legal.impressum.disclaimer":
      "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
    "legal.privacy.h": "Datenschutzerklärung",
    "legal.privacy.p1":
      "Verantwortlicher im Sinne der DSGVO: GANZI, Obermarkt 21, 99998 Thüringen, Germany, E-Mail: GanziDESpam@outlook.com.",
    "legal.privacy.p2":
      "Wir verarbeiten personenbezogene Daten (z. B. Name, Kontaktdaten), die du uns über das Kontaktformular oder per E-Mail mitteilst, ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.",
    "legal.privacy.p3":
      "Diese Website nutzt keine Analyse-, Tracking- oder Werbe-Cookies. Externe Inhalte (Twitch-Player, Discord-Widgets) können beim Laden Daten an die jeweiligen Anbieter übertragen; deren eigene Datenschutzerklärungen gelten zusätzlich.",
    "legal.privacy.p4":
      "Deine Daten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage nötig ist, maximal 6 Monate, sofern keine gesetzliche Aufbewahrungspflicht besteht.",
    "legal.privacy.p5":
      "Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO) sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO).",
    "legal.cookies.h": "Cookie-Hinweis",
    "legal.cookies.p1":
      "Diese Website verwendet ausschließlich technisch notwendige Speicherfunktionen (localStorage) zur Sprachauswahl. Es werden keine Tracking-, Marketing- oder Analyse-Cookies gesetzt.",
    "legal.cookies.p2":
      "Bei zukünftiger Einbindung von Analyse- oder Werbediensten wird ein rechtskonformes Consent-Banner nach TTDSG ergänzt.",
    "legal.terms.h": "Nutzungsbedingungen",
    "legal.terms.p1":
      "Mit der Nutzung dieser Website erklärst du dich mit den geltenden Gesetzen einverstanden und verpflichtest dich, den Betrieb der Seite nicht zu stören.",
    "legal.terms.p2":
      "Alle Inhalte, Texte, Grafiken und das Design dieser Website sind Eigentum von GANZI SQUAD, soweit nicht anders gekennzeichnet. Eine Vervielfältigung ohne Zustimmung ist nicht gestattet.",
    "legal.terms.p3":
      "Angebotene Dienstleistungen werden nach individueller Absprache erbracht; Preise auf dieser Seite sind unverbindliche Richtwerte.",
  },
};

async function discordIcons() {
  const invites = {
    "820446262972907541": "FrJbZvfPfm",
    "1490463085029228614": "U347WWhjUj",
  };
  for (const [guildId, code] of Object.entries(invites)) {
    try {
      const r = await fetch(
        `https://discord.com/api/v10/invites/${code}?with_counts=true`,
      );
      const j = await r.json();
      const icon = j.guild?.icon;
      if (icon) {
        const ext = icon.startsWith("a_") ? "gif" : "png";
        const url = `https://cdn.discordapp.com/icons/${guildId}/${icon}.${ext}`;
        document
          .querySelectorAll(`[data-discord-icon="${guildId}"]`)
          .forEach((img) => (img.src = url));
      }
    } catch (e) {}
  }
}

function setLanguage(lang) {
  localStorage.setItem("ganziLang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = T[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document
    .querySelectorAll("[data-lang]")
    .forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
}

function buildSchedule() {
  const data = [
    ["Пн", "17:00", "Стрим"],
    ["Вт", "17:00", "Стрим"],
    ["Ср", "—", "Выходной"],
    ["Чт", "17:00", "Стрим"],
    ["Пт", "17:00", "Стрим"],
    ["Сб", "18:00", "Стрим"],
    ["Вс", "—", "Выходной"],
  ];
  const day = (new Date().getDay() + 6) % 7;
  document.getElementById("scheduleGrid").innerHTML = data
    .map(
      (x, i) =>
        `<article class="${i === day ? "today" : ""}"><b>${x[0]}</b><strong>${x[1]}</strong><span>${x[2]}${i === day ? " · Сегодня" : ""}</span></article>`,
    )
    .join("");
}

async function twitchStatus() {
  const out = document.getElementById("twitchState");
  try {
    const r = await fetch("status.json?t=" + Date.now());
    const j = await r.json();
    const stream = j.data?.[0];
    out.textContent = stream
      ? `● LIVE · ${stream.game_name} · ${stream.viewer_count} viewers`
      : "● OFFLINE";
  } catch (e) {
    out.textContent = "Статус временно недоступен";
  }
}

async function discordStatus() {
  document.querySelectorAll("[data-discord]").forEach(async (el) => {
    try {
      const r = await fetch(
        `https://discord.com/api/guilds/${el.dataset.discord}/widget.json`,
      );
      const j = await r.json();
      el.textContent = `● ${j.presence_count || 0} online`;
    } catch (e) {}
  });
}

function applyConfig() {
  document.querySelectorAll("[data-amazon]").forEach((el) => {
    const link = CONFIG.amazon[el.dataset.amazon];
    if (link && link !== "#") el.href = link;
  });
  const d = CONFIG.donation;
  document.getElementById("goalTitle").textContent = d.title;
  document.getElementById("goalDescription").textContent = d.description;
  document.getElementById("goalCollected").textContent =
    d.collected + d.currency;
  document.getElementById("goalTarget").textContent = d.target + d.currency;
  requestAnimationFrame(
    () =>
      (document.getElementById("goalBar").style.width =
        Math.min(100, (d.collected / d.target) * 100) + "%"),
  );
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const duration = 1800;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target * eased;
    el.textContent =
      (decimals > 0 ? val.toFixed(decimals) : Math.round(val)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else {
      el.textContent =
        (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
      el.classList.add("counted");
    }
  }
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("ganziLang") || "ru");
  discordStatus();
  discordIcons();
  buildSchedule();
  applyConfig();
  twitchStatus();
  discordStatus();
  document
    .querySelectorAll("[data-lang]")
    .forEach((b) =>
      b.addEventListener("click", () => setLanguage(b.dataset.lang)),
    );
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  const menu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  if (closeBtn)
    closeBtn.addEventListener("click", () => menu.classList.remove("open"));
  document
    .getElementById("menuBtn")
    .addEventListener("click", () => menu.classList.toggle("open"));
  menu
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("open")),
    );

  document.querySelectorAll(".faq-h").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const body = item.querySelector(".faq-b");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-b").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  document.querySelectorAll(".legal-h").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".legal-item");
      const body = item.querySelector(".legal-b");
      const isOpen = item.classList.contains("open");
      if (isOpen) {
        item.classList.remove("open");
        body.style.maxHeight = null;
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  const btt = document.getElementById("btt");
  addEventListener(
    "scroll",
    () => btt.classList.toggle("show", scrollY > 500),
    { passive: true },
  );
  btt.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const bell = document.getElementById("telegramBell");
  if (bell)
    bell.addEventListener("click", () =>
      window.open(
        `https://t.me/${CONFIG.telegram.username}`,
        "_blank",
        "noopener",
      ),
    );

  const cg = document.getElementById("cg");
  if (cg && matchMedia("(hover:hover)").matches) {
    addEventListener("mousemove", (e) => {
      cg.style.left = e.clientX + "px";
      cg.style.top = e.clientY + "px";
      cg.style.opacity = 1;
    });
    addEventListener("mouseleave", () => (cg.style.opacity = 0));
  }

  const counters = document.querySelectorAll(".counter");
  const cio = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cio.unobserve(e.target);
        }
      }),
    { threshold: 0.4 },
  );
  counters.forEach((c) => cio.observe(c));

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const contact = form.contact.value.trim();
      const message = form.message.value.trim();
      if (CONFIG.formEndpoint) {
        try {
          const res = await fetch(CONFIG.formEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ name, contact, message }),
          });
          if (res.ok) {
            form.reset();
            alert("Заявка отправлена!");
            return;
          }
        } catch (err) {}
      }
      const subject = encodeURIComponent("Заявка с сайта GANZI SQUAD");
      const body = encodeURIComponent(
        `Имя: ${name}\nКонтакт: ${contact}\n\n${message}`,
      );
      window.location.href = `mailto:GanziDESpam@outlook.com?subject=${subject}&body=${body}`;
    });
  }

  const canvas = document.getElementById("stars");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let stars = [];
    function resize() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      stars = Array.from(
        { length: Math.floor((innerWidth * innerHeight) / 9500) },
        () => ({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          r: Math.random() * 1.2 + 0.2,
          a: Math.random(),
          d: Math.random() * 0.004 + 0.0012,
          dir: Math.random() > 0.5 ? 1 : -1,
        }),
      );
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.d * s.dir;
        if (s.a <= 0.15 || s.a >= 1) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.283);
        ctx.fillStyle = `rgba(242,239,232,${Math.max(0.12, Math.min(1, s.a))})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    resize();
    addEventListener("resize", resize);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
    else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.283);
        ctx.fillStyle = "rgba(242,239,232,.5)";
        ctx.fill();
      });
    }
  }

  const sections = document.querySelectorAll("main > section, .marquee");
  function fadeOnScroll() {
    const vh = innerHeight;
    sections.forEach((s) => {
      const r = s.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const dist = Math.abs(mid - vh / 2);
      const fade = Math.max(0, 1 - dist / (vh * 0.9));
      s.style.opacity = Math.max(0.4, fade);
    });
  }
  addEventListener("scroll", fadeOnScroll, { passive: true });
  fadeOnScroll();
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    e.preventDefault();
  }
});

document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());
