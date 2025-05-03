import {
  TAboutInNumber,
  TAdvantages,
  TCase,
  TFaq,
  TFeedbacks,
  TFields,
  TLink,
  TLocales,
  TService,
  TSteps,
} from "@/types";

export const locales: TLocales[] = ["en", "ru"] as const;
export const defaultLocale: TLocales = "ru";

export const LINK: TLink[] = [
  { title: "nav.service", url: "/#service", id: 1 },
  { title: "nav.portfolio", url: "/portfolio", id: 2 },
  { title: "nav.about", url: "/#about", id: 3 },
  { title: "nav.feedback", url: "/#feedback", id: 4 },
  { title: "nav.contacts", url: "/contacts", id: 5 },
];

export const ROUTE_TRANSLATE = {
  "/": "link.main",
  "#hero": "link.main",
  portfolio: "nav.portfolio",
  "e-commerce": "link.ecommerce",
  "#service": "nav.service",
  "landing-page": "link.landing",
  contacts: "nav.contacts",
  "#about": "nav.about",
  "#feedback": "nav.feedback",
  "corporate#steps": "link.steps",
  "corporate#faq": "link.faq",
  corporate: "link.corporate",
  privacy: "link.privacy",
  "not-found": "link.notfound",
};
// [
//   {
//     value: "/", translated : "link.main",
//   },
//   {
//     value: "#hero", translated : "link.main",
//   },
//   {
//     value: "portfolio", translated : "nav.portfolio",
//   },
//   {
//     value: "e-commerce", translated : "link.ecommerce",
//   },
//   {
//     value: "#service", translated : "nav.service",
//   },
//   {
//     value: "landing-page", translated : "link.landing",
//   },
//   {
//     value: "contacts", translated : "nav.contacts",
//   },
//   {
//     value: "#about", translated : "nav.about",
//   },
//   {
//     value: "#feedback", translated : "nav.feedback",
//   },
//   {
//     value : "corporate" , translated : "link.corporate",
//   },
//   {
//     value : "privacy" , translated : "link.privacy",
//   },
//   {
//     value : "not-found" , translated : "link.notfound",
//   }
// ]

export const ADVANTAGES: TAdvantages[] = [
  {
    id: 1,
    icon: "/assets/icons/puzzle.svg",
    title: "main.advantages.personalizedSolutions.title",
    description: "main.advantages.personalizedSolutions.description",
  },
  {
    id: 2,
    icon: "/assets/icons/clock.svg",
    title: "main.advantages.transparency.title",
    description: "main.advantages.transparency.description",
  },
  {
    id: 3,
    icon: "/assets/icons/document-settings.svg",
    title: "main.advantages.fullCycle.title",
    description: "main.advantages.fullCycle.description",
  },
  {
    id: 4,
    icon: "/assets/icons/tree.svg",
    title: "main.advantages.ecoFriendly.title",
    description: "main.advantages.ecoFriendly.description",
  },
];
export const SERVICE: TService[] = [
  {
    id: 1,
    title: "main.service.ecommerce.title",
    icon: "/assets/icons/store.svg",
    price: "main.service.ecommerce.price",
    description: "main.service.ecommerce.description",
    url: "/e-commerce",
  },
  {
    id: 2,
    title: "main.service.corporate.title",
    icon: "/assets/icons/office-briefcase.svg",
    price: "main.service.corporate.price",
    description: "main.service.corporate.description",
    url: "/corporate",
  },
  {
    id: 3,
    title: "main.service.landing.title",
    icon: "/assets/icons/web-page.svg",
    price: "main.service.landing.price",
    description: "main.service.landing.description",
    url: "/landing-page",
  },
  {
    id: 4,
    title: "main.service.other.title",
    icon: "/assets/icons/business-card.svg",
    price: "main.service.other.price",
    description: "main.service.other.description",
    url: "",
  },
];
export const FAQ: TFaq[] = [
  {
    id: 1,
    title: "main.faq.progressTracking.title",
    description: [
      {
        subject: "",
        text: "main.faq.progressTracking.description.1.text",
      },
      {
        subject: "main.faq.progressTracking.description.2.subject",
        text: "main.faq.progressTracking.description.2.text",
      },
      {
        subject: "main.faq.progressTracking.description.3.subject",
        text: "main.faq.progressTracking.description.3.text",
      },
      {
        subject: "main.faq.progressTracking.description.4.subject",
        text: "main.faq.progressTracking.description.4.text",
      },
      {
        subject: "main.faq.progressTracking.description.5.subject",
        text: "main.faq.progressTracking.description.5.text",
      },
      {
        subject: "",
        text: "main.faq.progressTracking.description.6.text",
      },
    ],
  },
  {
    id: 2,
    title: "main.faq.preparation.title",
    description: [
      {
        subject: "",
        text: "main.faq.preparation.description.1.text",
      },
    ],
  },
  {
    id: 3,
    title: "main.faq.guarantees.title",
    description: [
      {
        subject: "",
        text: "main.faq.guarantees.description.1.text",
      },
    ],
  },
  {
    id: 4,
    title: "main.faq.collaboration.title",
    description: [
      {
        subject: "",
        text: "main.faq.collaboration.description.1.text",
      },
      {
        subject: "main.faq.collaboration.description.2.subject",
        text: "main.faq.collaboration.description.2.text",
      },
    ],
  },
  {
    id: 5,
    title: "main.faq.urgentDevelopment.title",
    description: [
      {
        subject: "main.faq.urgentDevelopment.description.1.subject",
        text: "main.faq.urgentDevelopment.description.1.text",
      },
    ],
  },
  {
    id: 6,
    title: "main.faq.noContent.title",
    description: [
      {
        subject: "",
        text: "main.faq.noContent.description.1.text",
      },
    ],
  },
];
export const FEEDBACKS: TFeedbacks[] = [
  {
    id: 1,
    name: "main.feedback.glassenIT.name",
    avatar: "/assets/images/reviews/avatar/glassenIT.webp",
    poster: "/assets/images/reviews/poster/glassenIT.webp",
    video: ["/video/mp4/reviews/GlassenIT.mp4", ""],
  },
  {
    id: 2,
    name: "main.feedback.vintage.name",
    avatar: "/assets/images/reviews/avatar/ramis.webp",
    poster: "/assets/images/reviews/poster/ramis.webp",
  },
  {
    id: 3,
    name: "main.feedback.ramis.name",
    avatar: "/assets/images/reviews/avatar/semenov.webp",
    poster: "/assets/images/reviews/poster/ramis-video.webp",
    video: ["/video/mp4/reviews/ramis.mp4", ""],
  },
  {
    id: 4,
    name: "main.feedback.yavrep.name",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/yavrep.webp",
  },
  {
    id: 5,
    name: "main.feedback.citisit.name",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/citisit.webp",
  },
  {
    id: 6,
    name: "main.feedback.semenov.name",
    avatar: "/assets/images/reviews/avatar/vintage.webp",
    poster: "/assets/images/reviews/poster/vintage.webp",
  },
  {
    id: 7,
    name: "main.feedback.azWeb.name",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/az_web.webp",
  },
  {
    id: 8,
    name: "main.feedback.denisE82.name",
    avatar: "/assets/images/reviews/avatar/kwork.webp",
    poster: "/assets/images/reviews/poster/denis.webp",
  },
];
export const FIELDS: TFields[] = [
  {
    id: 1,
    type: "text",
    placeholder: "popup_form.fields.name_placeholder",
  },
  {
    id: 2,
    type: "tel",
    placeholder: "popup_form.fields.phone_placeholder",
  },
  {
    id: 3,
    type: "email",
    placeholder: "popup_form.fields.email_placeholder",
  },
];
export const CASE: TCase[] = [
  {
    id: 1,
    title: "main.portfolio.bisovet.title",
    video: ["/video/mp4/project/bisovet.mp4", ""],
    poster: "/assets/images/poster/bisovet.webp",
    url: "https://bisovet.pro",
    category: "main.portfolio.bisovet.category",
    description: "main.portfolio.bisovet.description",
  },
  {
    id: 2,
    title: "main.portfolio.altAcva.title",
    video: ["/video/mp4/project/altAcva.mp4", ""],
    poster: "/assets/images/poster/alrAcva.png",
    url: "https://altaqua.ru/product/membrany_hynamo/",
    category: "main.portfolio.altAcva.category",
    description: "main.portfolio.altAcva.description",
  },
  {
    id: 3,
    title: "main.portfolio.denisSanko.title",
    video: ["/video/mp4/project/denisSanko.mp4", "/video/webm/project/denisSanko.webm"],
    poster: "/assets/images/poster/denisSanko.webp",
    url: "https://denissanko.com/kouching-pervyh-licz/",
    category: "main.portfolio.denisSanko.category",
    description: "main.portfolio.denisSanko.description",
  },
  {
    id: 4,
    title: "main.portfolio.gloSkin.title",
    video: ["/video/mp4/project/gloSkin.mp4", "/video/webm/project/gloSkin.webm"],
    poster: "/assets/images/poster/gloskin.webp",
    url: "https://gloskin.ru",
    category: "main.portfolio.gloSkin.category",
    description: "main.portfolio.gloSkin.description",
  },
  {
    id: 5,
    title: "main.portfolio.moip.title",
    video: ["/video/mp4/project/moip.mp4", ""],
    poster: "/assets/images/poster/moip.webp",
    url: "https://mcoip.ru",
    category: "main.portfolio.moip.category",
    description: "main.portfolio.moip.description",
  },
  {
    id: 6,
    title: "main.portfolio.cyberTribe.title",
    video: ["/video/mp4/project/cybertribe.mp4", ""],
    poster: "/assets/images/poster/cyber.webp",
    url: "https://www.cybertribe.uk",
    category: "main.portfolio.cyberTribe.category",
    description: "main.portfolio.cyberTribe.description",
  },
  {
    id: 7,
    title: "main.portfolio.vintageCottage.title",
    video: ["/video/mp4/project/vintageCottage.mp4", "/video/webm/project/vintageCottage.webm"],
    poster: "/assets/images/poster/vintage.webp",
    url: "https://vintage-cottage.eu",
    category: "main.portfolio.vintageCottage.category",
    description: "main.portfolio.vintageCottage.description",
  },
  {
    id: 8,
    title: "main.portfolio.fgos.title",
    video: ["/video/mp4/project/fgos.mp4", ""],
    poster: "/assets/images/poster/fgos.webp",
    url: "https://fgosonline.ru",
    category: "main.portfolio.fgos.category",
    description: "main.portfolio.fgos.description",
  },
  {
    id: 9,
    title: "main.portfolio.bavin.title",
    video: ["/video/mp4/project/bavin.mp4", ""],
    poster: "/assets/images/poster/bavin.webp",
    url: "https://bavin.pro",
    category: "main.portfolio.bavin.category",
    description: "main.portfolio.bavin.description",
  },
  {
    id: 10,
    title: "main.portfolio.tradeCDB.title",
    video: ["/video/mp4/project/TRadeCDB.mp4", "/video/webm/project/TRadeCDB.webm"],
    poster: "/assets/images/poster/tradeCDB.webp",
    url: "https://tradecdb.com",
    category: "main.portfolio.tradeCDB.category",
    description: "main.portfolio.tradeCDB.description",
  },
  {
    id: 11,
    title: "main.portfolio.fop.title",
    video: ["/video/mp4/project/fop.mp4", ""],
    poster: "/assets/images/poster/fop.webp",
    url: "https://fop.solncesvet.ru",
    category: "main.portfolio.fop.category",
    description: "main.portfolio.fop.description",
  },
  {
    id: 12,
    title: "main.portfolio.allAll.title",
    video: ["/video/mp4/project/all-all.mp4", ""],
    poster: "/assets/images/poster/all.webp",
    url: "https://all-all.ru/",
    category: "main.portfolio.allAll.category",
    description: "main.portfolio.allAll.description",
  },
  {
    id: 13,
    title: "main.portfolio.acharge.title",
    video: ["/video/mp4/project/acharge.mp4", ""],
    poster: "/assets/images/poster/acharge.webp",
    url: "https://www.zolotarevka.ru",
    category: "main.portfolio.acharge.category",
    description: "main.portfolio.acharge.description",
  },
  {
    id: 14,
    title: "main.portfolio.sattva.title",
    video: ["/video/mp4/project/satva.mp4", ""],
    poster: "/assets/images/poster/sattva.webp",
    url: "https://sattva-centr.ru",
    category: "main.portfolio.sattva.category",
    description: "main.portfolio.sattva.description",
  },
  {
    id: 15,
    title: "main.portfolio.malibu.title",
    video: ["/video/mp4/project/malibu.mp4", "/video/webm/project/malibu.webm"],
    poster: "/assets/images/poster/malibu.webp",
    url: "https://malibu-trc.ru",
    category: "main.portfolio.malibu.category",
    description: "main.portfolio.malibu.description",
  },
  {
    id: 16,
    title: "main.portfolio.tatyanaVelichko.title",
    video: ["/video/mp4/project/tatyanaVelichko.mp4", "/video/webm/project/tatyanaVelichko.webm"],
    poster: "/assets/images/poster/tatyanaVelichko.webp",
    url: "https://tatyana-velichko.ru/",
    category: "main.portfolio.tatyanaVelichko.category",
    description: "main.portfolio.tatyanaVelichko.description",
  },
  {
    id: 17,
    title: "main.portfolio.cortexDigital.title",
    video: ["/video/mp4/project/cortexDigital.mp4", "/video/webm/project/cortexDigital.webm"],
    poster: "/assets/images/poster/cortexDigital.webp",
    url: "/",
    category: "main.portfolio.cortexDigital.category",
    description: "main.portfolio.cortexDigital.description",
  },
  {
    id: 18,
    title: "main.portfolio.travaMurava.title",
    video: ["/video/mp4/project/trava-murava.mp4", ""],
    poster: "/assets/images/poster/trava-murava.webp",
    url: "https://hotel-divnogorie.ru",
    category: "main.portfolio.travaMurava.category",
    description: "main.portfolio.travaMurava.description",
  },
];
export const ABOUT_IN_NUMBERS: TAboutInNumber[] = [
  {
    id: 1,
    title: "main.aboutInNumbers.clients.title",
    count: 110,
    text: "main.aboutInNumbers.clients.text",
  },
  {
    id: 2,
    title: "main.aboutInNumbers.experience.title",
    count: 6,
    text: "main.aboutInNumbers.experience.text",
  },
  {
    id: 3,
    title: "main.aboutInNumbers.projects.title",
    count: 400,
    text: "main.aboutInNumbers.projects.text",
  },
  {
    id: 4,
    title: "main.aboutInNumbers.technologies.title",
    count: 30,
    text: "main.aboutInNumbers.technologies.text",
  },
];
export const STEPS: TSteps[] = [
  {
    id: 1,
    title: "main.steps.analysis.title",
    icon: "/assets/icons/document-tick.svg",
    description: "main.steps.analysis.description",
  },
  {
    id: 2,
    title: "main.steps.uxDesign.title",
    icon: "/assets/icons/maths.svg",
    description: "main.steps.uxDesign.description",
  },
  {
    id: 3,
    title: "main.steps.uiDesign.title",
    icon: "/assets/icons/palette.svg",
    description: "main.steps.uiDesign.description",
  },
  {
    id: 4,
    title: "main.steps.development.title",
    icon: "/assets/icons/code.svg",
    description: "main.steps.development.description",
  },
  {
    id: 5,
    title: "main.steps.testing.title",
    icon: "/assets/icons/checklist.svg",
    description: "main.steps.testing.description",
  },
  {
    id: 6,
    title: "main.steps.launch.title",
    icon: "/assets/icons/rocket.svg",
    description: "main.steps.launch.description",
  },
];
