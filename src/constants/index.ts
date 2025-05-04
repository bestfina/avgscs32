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
  "corporate#feedback": "nav.feedback",
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
    poster: "/assets/images/project/bisovet.png",
    url: "https://bisovet.ru",
    category: "main.portfolio.bisovet.category",
    description: "main.portfolio.bisovet.description",
  },
  {
    id: 2,
    title: "main.portfolio.cyberTribe.title",
    poster: "/assets/images/project/cyber.png",
    url: "https://www.cybertribe.uk",
    category: "main.portfolio.cyberTribe.category",
    description: "main.portfolio.cyberTribe.description",
  },
  {
    id: 3,
    title: "main.portfolio.denisSanko.title",
    poster: "/assets/images/project/denisSanko.png",
    url: "https://denissanko.com/kouching-pervyh-licz/",
    category: "main.portfolio.denisSanko.category",
    description: "main.portfolio.denisSanko.description",
  },
  {
    id: 4,
    title: "main.portfolio.moip.title",
    poster: "/assets/images/project/moip.png",
    url: "https://mcoip.ru",
    category: "main.portfolio.moip.category",
    description: "main.portfolio.moip.description",
  },
  {
    id: 5,
    title: "main.portfolio.klikmi.title",
    poster: "/assets/images/project/klikmi.png",
    url: "https://lombio.pl",
    category: "main.portfolio.klikmi.category",
    description: "main.portfolio.klikmi.description",
  },
  {
    id: 6,
    title: "main.portfolio.altAcva.title",
    poster: "/assets/images/project/altAcva.png",
    url: "https://altaqua.ru/product/membrany_hynamo/",
    category: "main.portfolio.altAcva.category",
    description: "main.portfolio.altAcva.description",
  },
  {
    id: 7,
    title: "main.portfolio.vintageCottage.title",
    poster: "/assets/images/project/vintageCottage.png",
    url: "https://vintage-cottage.eu",
    category: "main.portfolio.vintageCottage.category",
    description: "main.portfolio.vintageCottage.description",
  },
  {
    id: 8,
    title: "main.portfolio.fgos.title",
    poster: "/assets/images/project/fgos.png",
    url: "https://fgosonline.ru",
    category: "main.portfolio.fgos.category",
    description: "main.portfolio.fgos.description",
  },
  {
    id: 9,
    title: "main.portfolio.bavin.title",
    poster: "/assets/images/project/bavin.png",
    url: "https://bavin.pro",
    category: "main.portfolio.bavin.category",
    description: "main.portfolio.bavin.description",
  },
  {
    id: 10,
    title: "main.portfolio.tradeCDB.title",
    poster: "/assets/images/project/tradeCDB.png",
    url: "https://tradecdb.com",
    category: "main.portfolio.tradeCDB.category",
    description: "main.portfolio.tradeCDB.description",
  },
  {
    id: 11,
    title: "main.portfolio.bzTitan.title",
    poster: "/assets/images/project/titan.png",
    url: "https://bz-titan.ru",
    category: "main.portfolio.bzTitan.category",
    description: "main.portfolio.bzTitan.description",
  },
  {
    id: 12,
    title: "main.portfolio.taxi.title",
    poster: "/assets/images/project/taxi.png",
    url: "https://klicktaxi.ru/",
    category: "main.portfolio.taxi.category",
    description: "main.portfolio.taxi.description",
  },
  {
    id: 13,
    title: "main.portfolio.sattva.title",
    poster: "/assets/images/project/sattva.png",
    url: "https://sattva-centr.ru",
    category: "main.portfolio.sattva.category",
    description: "main.portfolio.sattva.description",
  },
  {
    id: 14,
    title: "main.portfolio.acharge.title",
    poster: "/assets/images/project/acharge.png",
    url: "https://www.zolotarevka.ru",
    category: "main.portfolio.acharge.category",
    description: "main.portfolio.acharge.description",
  },
  {
    id: 15,
    title: "main.portfolio.pride.title",
    poster: "/assets/images/project/praid.png",
    url: "https://pride-beton.ru",
    category: "main.portfolio.pride.category",
    description: "main.portfolio.pride.description",
  },
  {
    id: 16,
    title: "main.portfolio.malibu.title",
    poster: "/assets/images/project/malibu.png",
    url: "https://malibu-trc.ru",
    category: "main.portfolio.malibu.category",
    description: "main.portfolio.malibu.description",
  },
  {
    id: 17,
    title: "main.portfolio.tatyanaVelichko.title",
    poster: "/assets/images/project/tatianaVelichko.png",
    url: "https://tatyana-velichko.ru/",
    category: "main.portfolio.tatyanaVelichko.category",
    description: "main.portfolio.tatyanaVelichko.description",
  },
  {
    id: 18,
    title: "main.portfolio.cortexDigital.title",
    poster: "/assets/images/project/cortexDigital.png",
    url: "/",
    category: "main.portfolio.cortexDigital.category",
    description: "main.portfolio.cortexDigital.description",
  },
  {
    id: 19,
    title: "main.portfolio.meteorex.title",
    poster: "/assets/images/project/meteorex.png",
    url: "https://meteorex.net",
    category: "main.portfolio.meteorex.category",
    description: "main.portfolio.meteorex.description",
  },
  {
    id: 20,
    title: "main.portfolio.proxyLuxe.title",
    poster: "/assets/images/project/proxyLuxe.png",
    url: "https://proxy.luxe",
    category: "main.portfolio.proxyLuxe.category",
    description: "main.portfolio.proxyLuxe.description",
  },
  {
    id: 21,
    title: "main.portfolio.gloSkin.title",
    poster: "/assets/images/project/gloskin.png",
    url: "https://gloskin.ru",
    category: "main.portfolio.gloSkin.category",
    description: "main.portfolio.gloSkin.description",
  },
  {
    id: 22,
    title: "main.portfolio.infisol.title",
    poster: "/assets/images/project/infisol.png",
    url: "https://infisol.net",
    category: "main.portfolio.infisol.category",
    description: "main.portfolio.infisol.description",
  },
  {
    id: 23,
    title: "main.portfolio.runa.title",
    poster: "/assets/images/project/runa.png",
    url: "https://runabeton.ru",
    category: "main.portfolio.runa.category",
    description: "main.portfolio.runa.description",
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
