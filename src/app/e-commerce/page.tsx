// import Advantages from "@/components/sections/Advantages";
import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Tariffs from "@/components/sections/Tariffs";

// const ADVANTAGES = [
//   {
//     id: 1,
//     icon: "/assets/icons/puzzle.svg",
//     title: "Персонализированные решения",
//     description: "Разработка сайтов и дизайна на основе глубокого понимания Вашего бизнеса, аудитории и целей.",
//   },
//   {
//     id: 2,
//     icon: "/assets/icons/clock.svg",
//     title: "Транспарентность и ясные сроки",
//     description:
//       "Чёткое и понятное описание всех этапов разработки, включая установку реальных сроков и регулярные отчёты о ходе работы.",
//   },
//   {
//     id: 3,
//     icon: "/assets/icons/document-settings.svg",
//     title: "Полный цикл услуг",
//     description:
//       "Мы устраняем необходимость для Вас искать разные агентства и других специалистов под отдельные задачи.",
//   },
//   {
//     id: 4,
//     icon: "/assets/icons/tree.svg",
//     title: "Экологичная разработка",
//     description: "Мы сделаем Вам экологичный продукт по принципам устойчивого и удобного развития.",
//   },
//   {
//     id: 5,
//     icon: "/assets/icons/tree.svg",
//     title: "Экологичная разработка",
//     description: "Мы сделаем Вам экологичный продукт по принципам устойчивого и удобного развития.",
//   },
//   {
//     id: 6,
//     icon: "/assets/icons/tree.svg",
//     title: "Экологичная разработка",
//     description: "Мы сделаем Вам экологичный продукт по принципам устойчивого и удобного развития.",
//   },
// ];

const Ecommerce = () => {
  return (
    <>
      <Hero
        video={["/video/webm/bg-ecommerce.webm", "/video/mp4/bg-ecommerce.mp4"]}
        description="Мы создаём интернет-магазин под ключ, полностью сопровождая процесс. От анализа ниши, разработки дизайна и функционала
         до интеграции с системами, настройки рекламы и дальнейшей поддержки."
        title="Интернет-магазин под ключ: от идеи до первой продажи"
        poster="/assets/images/poster/e-commerce.webp"
      />
      <Tariffs priceTemplate="От 190.000 руб./40 дней" priceCustom="От 700.000 руб./90 дней" />
      <Portfolio />
      {/* <Advantages ADVANTAGES={ADVANTAGES} /> */}
      <Steps />
      <Forma />
      <Faq />
      <Feedback />
    </>
  );
};

export default Ecommerce;
