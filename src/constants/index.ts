import { TAdvantages, TAdvantagesMain, TLink, TPages, TService } from "@/types";

export const LINK: TLink[] = [
  {
    title: "Портфолио",
    url: "portfolio",
    id: 1,
  },
  {
    title: "О компании",
    url: "about",
    id: 2,
  },
  {
    title: "Услуги и цены",
    url: "service",
    id: 3,
  },
  {
    title: "Отзывы",
    url: "reviews",
    id: 4,
  },
  {
    title: "Контакты",
    url: "/#faq",
    id: 5,
  },
];

export const MAIN_ADVANTAGES: TAdvantagesMain[] = [
  {
    id: 1,
    title: "Реализуем всё в срок",
  },
  {
    id: 2,
    title: "Гарантии и качество",
  },
  {
    id: 3,
    title: "Поддержка после запуска",
  },
];

export const FAQ: TFaq[] = [
  {
    id: 1,
    icon: "/assets/icons/personalised.svg",
    title: "Персонализированные решения",
    description: "Разработка сайтов и дизайна на основе глубокого понимания Вашего бизнеса, аудитории и целей.",
  },
  {
    id: 2,
    icon: "/assets/icons/transparency.svg",
    title: "Транспарентность и ясные сроки",
    description:
      "Чёткое и понятное описание всех этапов разработки, включая установку реальных сроков и регулярные отчёты о ходе работы.",
  },
  {
    id: 3,
    icon: "/assets/icons/full-cycle.svg",
    title: "Полный цикл услуг",
    description:
      "Мы устраняем необходимость для Вас искать разные агентства и других специалистов под отдельные задачи.",
  },
  {
    id: 4,
    icon: "/assets/icons/quality-development.svg",
    title: "Экологичная разработка",
    description: "Мы сделаем Вам экологичный продукт по принципам устойчивого и удобного развития.",
  },
  {
    id: 5,
    icon: "/assets/icons/guarantees.svg",
    title: "Гарантийные условия",
    description: "Предоставим гарантии на устранение багов в течение определённого времени после сдачи проекта.",
  },
  {
    id: 6,
    icon: "/assets/icons/tilda.svg",
    title: "Использование no-code решений для малого бизнеса",
    description:
      "Внедрение no-code платформ для быстрого создания сайтов без написания кода, что может значительно сократить расходы на разработку.",
  },
];

export const FEEDBACKS: TFeedbacks[] = [
  {
    id: 1,
    image: "/assets/images/bg-personalised-solution.png",
    title: "Персонализированное решение - от 70.000 руб.",
    advantages: ["От 70.000 руб.", "Сроки от 7 дней", "Для крупных компаний", "Максимальное качество"],
    buttonFocus: true,
  },
  {
    id: 2,
    image: "/assets/images/bg-tilda.png",
    title: "No code или шаблон",
    advantages: ["От 10.000 руб.", "Сроки от 1 дня", "Для малых бизнесов", "Для срочных задач"],
  },
  {
    id: 3,
    image: "/assets/images/bg-support.png",
    title: "Техническая поддержка",
    advantages: ["От 1.500 руб.", "Сроки от 1 часа", "Любые доработки", "Доп. функционал"],
  },
  {
    id: 4,
    image: "/assets/images/bg-design.png",
    title: "Дизайн и прототипирование",
    advantages: ["От 5.000 руб.", "Сроки от 5 часов", "Уникальный дизайн", "Редизайны"],
  },
  {
    id: 5,
    image: "/assets/images/bg-promotion.png",
    title: "Продвижение сайта",
    advantages: ["От 12.000 руб.", "Сроки от 2 дней", "Seo продвижение и аудиты", "Яндекс Директ"],
  },
];

export const PAGES: TPages[] = [
  {
    id: 5,
    image: "/assets/images/bg-personalised-solution.png",
    title: "Vintage cottage",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом. 
        В качестве cms выбрали Wordpress со специальным плагином woocommerce.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
    ],
    advantages: ["HTML", "SCSS", "JAVASCRIPT", "CRM BITRIX"],
    data: "15.09.2024",
  },
  {
    id: 4,
    image: "/assets/images/bg-personalised-solution.png",
    title: "Vintage cottage",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом. 
        В качестве cms выбрали Wordpress со специальным плагином woocommerce.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
    ],
  },
  {
    id: 3,
    image: "/assets/images/bg-personalised-solution.png",
    title: "Vintage cottage",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом. 
        В качестве cms выбрали Wordpress со специальным плагином woocommerce.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
    ],
  },
  {
    id: 2,
    image: "/assets/images/work-2.png",
    title: "Vintage cottage 2",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом. 
        В качестве cms выбрали Wordpress со специальным плагином woocommerce.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
    ],
    advantages: ["JAVASCRIPT", "HTML", "CSS", "PHP"],
    data: "01.04.2021",
  },
];

export const ABOUT_IN_NUMBERS: TAboutInNumber[] = [
  {
    id: 1,
    image: "/assets/images/work-1.png",
    title: "Vintage cottage",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом. 
        В качестве cms выбрали Wordpress со специальным плагином woocommerce.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
    ],
  },
];

export const FEEDBACKS: TFeedbacks[] = [
  {
    id: 1,
    name: "Citisit",
    avatar: "/assets/images/avatar-kwork.webp",
    poster: "/assets/images/poster-citisit.webp",
  },
  {
    id: 2,
    name: "Glassen-IT",
    avatar: "/assets/images/avatar.webp",
    poster: "/assets/images/reviews/glassenIT.png",
    video: ["/video/mp4/reviews/GlassenIT.mp4", ""],
  },
  {
    id: 3,
    name: "yavrep",
    avatar: "/assets/images/avatar-kwork.webp",
    poster: "/assets/images/poster-yavrep.webp",
  },
  {
    id: 4,
    name: "Vintage",
    avatar: "/assets/images/avatar-semenov.webp",
    poster: "/assets/images/poster-semenov.webp",
  },
  {
    id: 5,
    name: "az-web",
    avatar: "/assets/images/avatar-kwork.webp",
    poster: "/assets/images/poster-az_web.webp",
  },
  {
    id: 6,
    name: "denisE82",
    avatar: "/assets/images/avatar-kwork.webp",
    poster: "/assets/images/poster-denis.webp",
  },
  {
    id: 7,
    name: "A.Д.Семенов",
    avatar: "/assets/images/avatar-vintage.webp",
    poster: "/assets/images/poster-vintage.webp",
  },
  {
    id: 8,
    name: "Рамис Хуснуллин",
    avatar: "/assets/images/avatar-ramis.webp",
    poster: "/assets/images/poster-ramis.webp",
  },
];

export const FIELDS: TFields[] = [
  {
    id: 1,
    type: "text",
    placeholder: "Имя",
    icon: "/assets/icons/person.svg",
  },
  {
    id: 2,
    type: "tel",
    placeholder: "Телефон*",
    icon: "/assets/icons/phone.svg",
  },
  {
    id: 3,
    type: "email",
    placeholder: "Почта",
    icon: "/assets/icons/email.svg",
  },
];

export const CASE: TCase[] = [
  {
    id: 1,
    title: "Антон Бавин",
    video: "/video/mp4/project/bavin.mp4",
    url: "https://bavin.pro",
    description:
      'Лендинг для продажи услуг "Освобождение от долгов" на голом коде с интеграциями различных аналитик и настройкой заявок на bitrix24.',
  },
  {
    id: 2,
    title: "Бизнес Совет",
    video: "/video/mp4/project/bisovet.mp4",
    url: "https://bisovet.pro",
    description:
      "Корпоративный сайт для B2B юридической компании. Сайт сделан на wordpress с кастомными полями для удобства наполнения.",
  },
  {
    id: 3,
    title: "Vintage Cottage",
    video: "/video/mp4/project/vintageCottage.mp4",
    url: "https://vintage-cottage.eu",
    description:
      "Международный интернет-магазин с товарами для дома. Сделан на площадке woocommerce, мультивалютный и мультиязычный.",
  },
  {
    id: 4,
    title: "Vintage Cottage",
    video: "/video/mp4/project/vintageCottage.mp4",
    url: "https://vintage-cottage.eu",
    description:
      "Международный интернет-магазин с товарами для дома. Сделан на площадке woocommerce, мультивалютный и мультиязычный.",
  },
  {
    id: 5,
    title: "Vintage Cottage",
    video: "/video/mp4/project/vintageCottage.mp4",
    url: "https://vintage-cottage.eu",
    description:
      "Международный интернет-магазин с товарами для дома. Сделан на площадке woocommerce, мультивалютный и мультиязычный.",
  },
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
