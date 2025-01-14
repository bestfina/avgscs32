import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Tariffs from "@/components/sections/Tariffs";

const VisitingPage = () => {
  return (
    <>
      <Hero
        title="Стильный и функциональный сайт-визитка под ключ"
        video={["/video/webm/bg-visiting.webm", "/video/mp4/bg-visiting.mp4"]}
        description="Ваш бизнес заслуживает профессионального представительства в интернете. Мы создаём сайты-визитки, которые
          выглядят стильно и легко воспринимаются."
        poster="/assets/images/poster/visiting-page.webp"
      />
      <Portfolio />
      <Tariffs priceTemplate="От 18.000 руб./3 дней" priceCustom="От 60.000 руб./12 дней" />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default VisitingPage;
