import { TAdvantages, TAdvantagesMain, TFaq, TFeedbacks, TFields, TLink, TPages, TService } from "@/types";

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
    url: "feedback",
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
    image: "/assets/images/bg-personalised-solution.webp",
    title: "Персонализированное решение",
    advantages: ["От 100.000 руб.", "Сроки от 7 дней", "Для крупных компаний", "Максимальное качество"],
  },
  {
    id: 2,
    image: "/assets/images/bg-tilda.webp",
    title: "Сайт на готовом решении",
    advantages: ["От 10.000 руб.", "Сроки от 1 дня", "Для малых бизнесов", "Для срочных задач"],
  },
  {
    id: 3,
    image: "/assets/images/bg-support.webp",
    title: "Техническая поддержка",
    advantages: ["От 1.200 руб.", "Сроки от 1 часа", "Любые доработки", "Доп. функционал"],
  },
  {
    id: 4,
    image: "/assets/images/bg-design.webp",
    title: "Дизайн и прототипирование",
    advantages: ["От 5.000 руб.", "Сроки от 5 часов", "Уникальный дизайн", "Редизайны"],
  },
  {
    id: 5,
    image: "/assets/images/bg-promotion.webp",
    title: "Продвижение сайта",
    advantages: ["От 12.000 руб.", "Сроки от 2 дней", "Seo продвижение и аудиты", "Яндекс Директ"],
  },
  {
    id: 6,
    image: "/assets/images/bg-promotion.webp",
    title: "Другое",
    advantages: ["Цена и сроки договорные", "Crm/Erp сервисы", "Яндекс", "Яндекс Директ"],
  },
];

export const PAGES: TPages[] = [
  {
    id: 10,
    image: "/assets/images/work-2.webp",
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
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "01.05.2024",
  },
  {
    id: 9,
    image: "/assets/images/work-2.webp",
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
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "01.05.2024",
  },
  {
    id: 8,
    image: "/assets/images/work-2.webp",
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
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "01.05.2024",
  },
  {
    id: 7,
    image: "/assets/images/work-2.webp",
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
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "01.05.2024",
  },
  {
    id: 6,
    image: "/assets/images/work-2.webp",
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
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "01.05.2024",
  },
  {
    id: 5,
    image: "/assets/images/work-3.webp",
    title: "Vintage cottage",
    url: "https://vintage-cottage.eu",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Нужно было сделать вёрстку, а сам сайт интегрировать на удобную систему управления контентом.`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores `,
      },
    ],
    data: "01.05.2024",
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
    data: "01.05.2024",
  },
  {
    id: 3,
    image: "/assets/images/work-3.webp",
    title: "Тц Малибу",
    url: "https://malibu-trc.ru",
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
    data: "01.05.2024",
  },
  {
    id: 2,
    image: "/assets/images/work-2.webp",
    title: "Cybertribe",
    url: "https://www.cybertribe.uk",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Вёрстку корпоративного сайта с посадкой на cms`,
      },
      {
        subject: "Стек:",
        text: `Wordpress, php, woocommerce, javaScript`,
      },
      {
        subject: "Результат:",
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet,
         repellendus harum quibusdam architecto maiores ad quaerat quis sit eligendi aspernatur cumque,
          perferendis labore illum odio officia vel fugit incidunt!`,
      },
    ],
    data: "25.03.2024",
  },
  {
    id: 1,
    image: "/assets/images/work-1.webp",
    title: "Бизнес совет",
    url: "https://bisovet.pro",
    description: [
      {
        subject: "Поставленная задача:",
        text: `Вёрстка корпоративного сайта по уже готовому макету в фигма. Натяжка на удобную cms.`,
      },
      {
        subject: "Стек:",
        text: `Html, css, javaScript, wordpress, php`,
      },
      {
        subject: "Результат:",
        text: `Данный сайт планировался для выступления на закрытом форуме и будущей раскрутки компании "Бизнес совет" 
        с её юридицескими услугами. Вся работа была готова раньше срока, чтобы было важно покупателю. 
        Сам форум по словам заказчика прошёл вполне себе успешно :)`,
      },
    ],
    data: "14.10.2023",
  },
];

export const FAQ: TFaq[] = [
  {
    id: 1,
    title: "Какие этапы работы есть ?",
    text: `1. Seo - Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.
    1. Вёрстка - Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
  {
    id: 2,
    title: "Какими способами происходит оплата ?",
    text: `Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
  {
    id: 3,
    title: "Какой у вас стек технологий ?",
    text: `Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
  {
    id: 4,
    title: "Какой у вас стек технологий ?",
    text: `Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
  {
    id: 5,
    title: "Какой у вас стек технологий ?",
    text: `Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
  {
    id: 6,
    title: "Какой у вас стек технологий ?",
    text: `Веб-сайт, который нельзя обнаружить в Интернете, фактически не считается существующим. 
    По этой причине крайне важно обращать внимание не только на визуальную привлекательность сайта, но и на его оптимизацию 
    для поисковых систем. Это обеспечивает легкий доступ пользователей к сайту и, в определенных случаях, помогает поднять его 
    на лидирующие позиции в поисковой выдаче.`,
  },
];

export const FEEDBACKS: TFeedbacks[] = [
  {
    id: 1,
    name: "Андрей2",
    avatar: "/assets/images/avatar.webp",
    poster: "/assets/images/work-4.webp",
    video: [
      "/video/webm/mixkit-code-on-green-letters-on-screen-49122-hd-ready.webm",
      "mixkit-code-on-green-letters-on-screen-49122-hd-ready.mp4",
    ],
  },
  {
    id: 2,
    name: "Андрей",
    avatar: "/assets/images/work-4.webp",
    poster: "/assets/images/work-4.webp",
  },
  {
    id: 3,
    name: "Андрей",
    avatar: "/assets/images/work-4.webp",
    poster: "",
    video: [
      "/video/webm/mixkit-code-on-green-letters-on-screen-49122-hd-ready.webm",
      "mixkit-code-on-green-letters-on-screen-49122-hd-ready.mp4",
    ],
  },
  {
    id: 4,
    name: "Андрей",
    avatar: "/assets/images/work-4.webp",
    poster: "",
  },
  {
    id: 5,
    name: "Андрей",
    avatar: "/assets/images/work-4.webp",
    poster: "",
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
