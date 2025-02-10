import { TAboutInNumber, TAdvantages, TCase, TFaq, TFeedbacks, TFields, TLink, TService, TSteps } from "@/types";

export const LINK: TLink[] = [
  {
    title: "Услуги",
    url: "/#service",
    id: 1,
  },
  {
    title: "Портфолио",
    url: "/portfolio",
    id: 2,
  },
  {
    title: "О нас",
    url: "/#about",
    id: 3,
  },
  {
    title: "Отзывы",
    url: "/#feedback",
    id: 4,
  },
  {
    title: "Контакты",
    url: "/contacts",
    id: 5,
  },
];

export const ADVANTAGES: TAdvantages[] = [
  {
    id: 1,
    icon: "/assets/icons/puzzle.svg",
    title: "Персонализированные решения",
    description: "Разработка сайтов и дизайна на основе глубокого понимания Вашего бизнеса, аудитории и целей.",
  },
  {
    id: 2,
    icon: "/assets/icons/clock.svg",
    title: "Транспарентность и ясные сроки",
    description:
      "Чёткое и понятное описание всех этапов разработки, включая установку реальных сроков и регулярные отчёты о ходе работы.",
  },
  {
    id: 3,
    icon: "/assets/icons/document-settings.svg",
    title: "Полный цикл услуг",
    description:
      "Мы устраняем необходимость для Вас искать разные агентства и других специалистов под отдельные задачи.",
  },
  {
    id: 4,
    icon: "/assets/icons/tree.svg",
    title: "Экологичная разработка",
    description: "Мы сделаем Вам экологичный продукт по принципам устойчивого и удобного развития.",
  },
];

export const SERVICE: TService[] = [
  {
    id: 1,
    title: "Интернет-магазин",
    icon: "/assets/icons/store.svg",
    price: "От 190.000 руб./30 дней",
    description: `Мы разрабатываем современные интернет-магазины, которые увеличивают продажи минимум на 30% за счет удобного дизайна, SEO-оптимизации и 
    различных интеграции.`,
    url: "/e-commerce",
  },
  {
    id: 2,
    title: "Корпоративный сайт",
    icon: "/assets/icons/office-briefcase.svg",
    price: "От 120.000 руб./21 дня",
    description: `Создаём корпоративные сайты, которые отражают стиль и ценности вашей компании, обеспечивая удобство для любых посетителей сайта.`,
    url: "/corporate",
  },
  {
    id: 3,
    title: "Лендинг",
    icon: "/assets/icons/web-page.svg",
    price: "От 50.000 руб./10 дней",
    description: `Мы делаем эффективные лендинги, которые дают конверсию от 4% до 15%.`,
    url: "/landing-page",
  },
  {
    id: 4,
    title: "Другое",
    icon: "/assets/icons/business-card.svg",
    price: "От 25.000 руб./14 дней",
    description: `Предоставим комплексный маркетинг или техническую поддержку сайта.`,
    url: "",
  },
];

export const FAQ: TFaq[] = [
  {
    id: 1,
    title: "Как я могу следить за прогрессом разработки?",
    description: [
      {
        subject: "",
        text: `Мы обеспечиваем прозрачность всех этапов разработки проекта и предоставляем нашим клиентам удобные способы отслеживания текущего
        состояния работы. Вот как это происходит:`,
      },
      {
        subject: "1. Регулярные отчеты. ",
        text: `Они включают: Список выполненных задач, текущий прогресс по этапам, оставшиеся задачи и их статус, возможные риски или задержки.
        Частота отчетов обсуждается заранее — это может быть ежедневно, еженедельно или по завершении ключевых этапов.`,
      },
      {
        subject: "2. Доступ к проектным инструментам. ",
        text: `Используем современные инструменты управления проектами, такие как Trello ( для отслеживания задач в виде досок и карточек ), 
        Asana ( для ведения списка задач и назначенных исполнителей ), Jira ( для более сложных технических проектов ). Вы получаете доступ 
        к этим инструментам, где сможете видеть все задачи и их статусы, а так же оставлять комментарии или предложения`,
      },
      {
        subject: "3. Личный менеджер проекта. ",
        text: `С вами работает выделенный менеджер проекта. Вы можете связаться с менеджером по телефону, электронной почте или в мессенджерах.`,
      },
      {
        subject: "4. Тестовый сервер. ",
        text: `Предоставляем доступ к тестовому серверу, где размещается промежуточная версия сайта.`,
      },
      {
        subject: "",
        text: `Наша не маловажная задача - заботимся о том, чтобы вы были в курсе всех процессов разработки. Это позволяет не только обеспечить 
        прозрачность, но и дает возможность своевременно вносить коррективы для достижения наилучшего результата.`,
      },
    ],
  },
  {
    id: 2,
    title: "Что мне нужно подготовить для начала работы?",
    description: [
      {
        subject: "",
        text: `Для начала работы нам понадобится ваше описание проекта, цели сайта, аудитория, примерная структура страниц и референсы. 
        Если у вас есть готовый контент (тексты, изображения, логотип), это ускорит процесс, но мы также можем помочь с его созданием.`,
      },
    ],
  },
  {
    id: 3,
    title: "Какие гарантии вы даёте на свою работу?",
    description: [
      {
        subject: "",
        text: `Мы предоставляем гарантию от 1 до 12 месяцев на любую нашу работу. В течение этого времени мы бесплатно исправляем выявленные баги, 
        ошибки верстки или программной логики, если они возникли по нашей вине. Сроки гарантии зависят от сложности и функциональности проект. `,
      },
    ],
  },
  {
    id: 4,
    title: "Какие способы сотрудничества и оплаты у вас?",
    description: [
      {
        subject: "",
        text: `Мы практически всегда работаем по договору, чтобы обеспечить прозрачность и комфорт сотрудничества. Исключение можем сделать только для малых проектов и доработок. 
        Заключение договора и гибкая система оплаты обеспечат комфортное и безопасное сотрудничество. Мы ценим доверие наших клиентов и делаем процесс максимально удобным.`,
      },
      {
        subject: "Мы принимаем оплату через: ",
        text: `Онлайн-платежи, безопасная сделка через сервисы, криптовалюту и другие удобные для вас способы :)`,
      },
    ],
  },
  {
    id: 5,
    title: "Можно ли заказать срочную разработку сайта?",
    description: [
      {
        subject: "Да, ",
        text: `мы принимаем заказы на срочную разработку сайтов! Мы понимаем, что иногда проекты требуют быстрого запуска. В таких случаях мы: Ускоряем 
        процессы, увеличиваем ресурсы команды, сохраняем качество, обсуждаем реалистичные сроки. Если вам нужен сайт в кратчайшие сроки, свяжитесь 
        с нами, и мы предложим лучшее решение.`,
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "Что делать, если у меня нет контента?",
  //   description: [
  //     {
  //       subject: "",
  //       text: `Мы можем помочь: у нас есть копирайтеры для написания текстов и дизайнеры, которые подберут изображения или создадут их с нуля.`,
  //     },
  //   ],
  // },
];

export const FEEDBACKS: TFeedbacks[] = [
  {
    id: 1,
    name: "Glassen-IT",
    avatar: "/assets/images/reviews/avatar/glassenIT.webp",
    poster: "/assets/images/reviews/poster/glassenIT.webp",
    video: ["/video/mp4/reviews/GlassenIT.mp4", ""],
  },
  {
    id: 2,
    name: "Vintage",
    avatar: "/assets/images/reviews/avatar/ramis.webp",
    poster: "/assets/images/reviews/poster/ramis.webp",
  },
  {
    id: 3,
    name: "Рамис Хуснуллин",
    avatar: "/assets/images/reviews/avatar/semenov.webp",
    poster: "/assets/images/reviews/poster/ramis-video.webp",
    video: ["/video/mp4/reviews/ramis.mp4", ""],
  },
  {
    id: 4,
    name: "yavrep",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/yavrep.webp",
  },
  {
    id: 5,
    name: "Citisit",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/citisit.webp",
  },
  {
    id: 6,
    name: "A.Д.Семенов",
    avatar: "/assets/images/reviews/avatar/vintage.webp",
    poster: "/assets/images/reviews/poster/vintage.webp",
  },
  {
    id: 7,
    name: "az-web",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/az_web.webp",
  },
  {
    id: 8,
    name: "denisE82",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/denis.webp",
  },
];

export const FIELDS: TFields[] = [
  {
    id: 1,
    type: "text",
    placeholder: "Имя",
  },
  {
    id: 2,
    type: "tel",
    placeholder: "Телефон*",
  },
  {
    id: 3,
    type: "email",
    placeholder: "Почта",
  },
];

export const CASE: TCase[] = [
  {
    id: 1,
    title: "Бизнес Совет",
    video: ["/video/mp4/project/bisovet.mp4", ""],
    poster: "/assets/images/poster/bisovet.webp",
    url: "https://bisovet.pro",
    category: "Корпоративные сайты",
    description:
      "Корпоративный сайт для юридической компании (B2B). Сделан на cms wordpress с кастомными полями для удобства наполнения.",
  },
  {
    id: 2,
    title: "TRadeCDB",
    video: ["/video/mp4/project/TRadeCDB.mp4", "/video/webm/project/TRadeCDB.webm"],
    poster: "/assets/images/poster/tradeCDB.webp",
    url: "https://tradecdb.com",
    category: "Лендинги",
    description:
      "Разработали личный кабинет (админу, менеджеру и пользователю) и доработали лендинг для международной инвестиционной компании.",
  },
  {
    id: 3,
    title: "CyberTribe",
    video: ["/video/mp4/project/cybertribe.mp4", ""],
    poster: "/assets/images/poster/cyber.webp",
    url: "https://www.cybertribe.uk",
    category: "Лендинги",
    description:
      "Лендинг для крупной маркетинговой компании. Разработан на чистом коде без трудного функционала, но зато с хорошим ux/ui для ЦА.",
  },
  {
    id: 4,
    title: "МЦОиП",
    video: ["/video/mp4/project/moip.mp4", ""],
    poster: "/assets/images/poster/moip.webp",
    url: "https://mcoip.ru",
    category: "Корпоративные сайты",
    description:
      "Частичная доработка образовательной платформы. Реализовали вёрстку некоторых блоков, исправили баги, дали рекомендации.",
  },
  {
    id: 5,
    title: "Denis Sanko",
    video: ["/video/mp4/project/denisSanko.mp4", "/video/webm/project/denisSanko.webm"],
    poster: "/assets/images/poster/denisSanko.webp",
    url: "https://denissanko.com/kouching-pervyh-licz/",
    category: "Лендинги",
    description:
      "Сделали отдельную страницу и интегрировали её на wordress в корпоративный сайт бизнес-коуча Дениса Санько.",
  },
  {
    id: 6,
    title: "Vintage Cottage",
    video: ["/video/mp4/project/vintageCottage.mp4", "/video/webm/project/vintageCottage.webm"],
    poster: "/assets/images/poster/vintage.webp",
    url: "https://vintage-cottage.eu",
    category: "Интернет-магазины",
    description:
      "Международный интернет-магазин с товарами для дома. Сделан на площадке woocommerce, мультивалютный и мультиязычный.",
  },
  {
    id: 7,
    title: "ФГОС",
    video: ["/video/mp4/project/fgos.mp4", ""],
    poster: "/assets/images/poster/fgos.webp",
    url: "https://fgosonline.ru",
    category: "Корпоративные сайты",
    description:
      'Улучшения сайта для услуг "Повышения квалификации". Разработали на главной странице первый баннер, поправили некоторые баги в вёрстке сайта.',
  },
  {
    id: 8,
    title: "Антон Бавин",
    video: ["/video/mp4/project/bavin.mp4", ""],
    poster: "/assets/images/poster/bavin.webp",
    url: "https://bavin.pro",
    category: "Визитки",
    description:
      'Сайт-визитка для продажи услуг "Освобождение от долгов" на голом коде с интеграциями различных аналитик и настройкой заявок на bitrix24.',
  },
  {
    id: 9,
    title: "Sattva YOGA",
    video: ["/video/mp4/project/satva.mp4", ""],
    poster: "/assets/images/poster/sattva.webp",
    url: "https://sattva-centr.ru",
    category: "Интернет-магазины",
    description:
      "Разработали сайт с функционал бронирования занятия йогой со специалистом. Сделан на чистом коде с натяжкой на wordress.",
  },
  {
    id: 10,
    title: "Магазин ФОП",
    video: ["/video/mp4/project/fop.mp4", ""],
    poster: "/assets/images/poster/fop.webp",
    url: "https://fop.solncesvet.ru",
    category: "Интернет-магазины",
    description:
      "Доработка интернет-магазина для Международного педагогического портала. Сделали каталог, акции, главные баннеры и многое другое.",
  },
  {
    id: 11,
    title: "Гипсокартон и малярка",
    video: ["/video/mp4/project/all-all.mp4", ""],
    poster: "/assets/images/poster/all.webp",
    url: "https://all-all.ru/",
    category: "Визитки",
    description:
      "Сайт-визитка для малярщика. Пародия на инстаграмм, с функционалом подписчиков и бесконечным авто-парсингом историй из ТГ.",
  },
  {
    id: 12,
    title: "ACHARGE",
    video: ["/video/mp4/project/acharge.mp4", ""],
    poster: "/assets/images/poster/acharge.webp",
    url: "https://www.zolotarevka.ru",
    category: "Корпоративные сайты",
    description:
      "Вёрстка сайта для продажи зарядных станций в РФ. Сайт сделан на чистом коде с отправкой писем на почту через php.",
  },
  {
    id: 13,
    title: "Trava-murava",
    video: ["/video/mp4/project/trava-murava.mp4", ""],
    poster: "/assets/images/poster/trava-murava.webp",
    url: "https://hotel-divnogorie.ru",
    category: "Корпоративные сайты",
    description:
      "Сайт для бронирования гостевых домов в Воронеже. Сделан на плагинах wp, а так же была проведена seo оптимизация.",
  },
  {
    id: 14,
    title: "GloSkin",
    video: ["/video/mp4/project/gloSkin.mp4", "/video/webm/project/gloSkin.webm"],
    poster: "/assets/images/poster/gloskin.webp",
    url: "https://gloskin.ru",
    category: "Интернет-магазины",
    description:
      "Корректировка и добавления функционала для магазина косметики. Сделали функционал доставки с добавлением стоимости, главный баннер и др.",
  },
  {
    id: 15,
    title: "ТЦ Малибу",
    video: ["/video/mp4/project/malibu.mp4", "/video/webm/project/malibu.webm"],
    poster: "/assets/images/poster/malibu.webp",
    url: "https://malibu-trc.ru",
    category: "Корпоративные сайты",
    description:
      "Корпоративный сайт для огромного торгового центра в Липецке. Сделан на wordress с помощью конструктора elementor и кастомного функционала.",
  },
  {
    id: 16,
    title: "Курсы от Татьяны Величко",
    video: ["/video/mp4/project/tatyanaVelichko.mp4", "/video/webm/project/tatyanaVelichko.webm"],
    poster: "/assets/images/poster/tatyanaVelichko.webp",
    url: "https://tatyana-velichko.ru/",
    category: "Интернет-магазины",
    description:
      "С полного нуля сделали сайт с возможностью покупки и просмотра онлайн курсов по массажу от Татьяны Величко.",
  },
  {
    id: 17,
    title: "CortexDigital",
    video: ["/video/mp4/project/cortexDigital.mp4", "/video/webm/project/cortexDigital.webm"],
    poster: "/assets/images/poster/cortexDigital.webp",
    url: "/",
    category: "Корпоративные сайты",
    description:
      "Наш сайт отражает весь наш накопленный опыт и нам не стыдно добавить его в портфолио. Разработан на современных технологиях ( next.js, ts и др. )",
  },
  // https://nataliy-beate.ru/
  // https://beatris-odegda.ru/
  // https://cortexdigital.net/
  // https://www.g-mc.ru/kosmetologiya-i-dermatologiya/
];

export const ABOUT_IN_NUMBERS: TAboutInNumber[] = [
  {
    id: 1,
    title: "+",
    count: 110,
    text: "постоянных клиентов",
  },
  {
    id: 2,
    title: " лет",
    count: 6,
    text: "средний опыт сотрудников",
  },
  {
    id: 3,
    title: "Около ",
    count: 400,
    text: "успешно завершённых проектов",
  },
  {
    id: 4,
    title: "Более ",
    count: 30,
    text: "используемых нами технологий",
  },
];

export const STEPS: TSteps[] = [
  {
    id: 1,
    title: "Анализ и брифинг",
    icon: "/assets/icons/document-tick.svg",
    description: "Изучаем бизнес клиента, целевую аудиторию, конкурентов и цели проекта.",
  },
  {
    id: 2,
    title: "Проектирование (UX-дизайн)",
    icon: "/assets/icons/maths.svg",
    description: "Разрабатываем структуру сайта, создаем схемы (wireframes) для каждой страницы.",
  },
  {
    id: 3,
    title: "Дизайн и наполнение (UI-дизайн)",
    icon: "/assets/icons/palette.svg",
    description:
      "Создаем визуальный стиль сайта: подбираем цвета, шрифты, текста, иконки, иллюстрации и анимации, делая сайт уникальным на 100%.",
  },
  {
    id: 4,
    title: "Разработка",
    icon: "/assets/icons/code.svg",
    description:
      "Делаем вёрстку макета, добавляем интерактивные элементы (анимации, выпадающие меню). Интегрируем с CMS (например, Tilda, WordPress, 1С-Битрикс).",
  },
  {
    id: 5,
    title: "Тестирование",
    icon: "/assets/icons/checklist.svg",
    description:
      "Проверяем работу сайта на разных устройствах и браузерах. Исправляем баги, тестируем формы, ссылки, загрузку страниц.",
  },
  {
    id: 6,
    title: "Запуск и поддержка",
    icon: "/assets/icons/rocket.svg",
    description:
      "Переносим сайт на сервер (хостинг), подключаем домен, настраиваем SSL-сертификат. Даём гарантию от 2-х недель до 6 месяцев.",
  },
];
