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
    title: "Вопросы и ответы",
    url: "faq",
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

export const ADVANTAGES: TAdvantages[] = [
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

export const SERVICE: TService[] = [
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
  },
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
