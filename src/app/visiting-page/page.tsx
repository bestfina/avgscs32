import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import PriceMini from "@/components/ui/PriceMini";

const VisitingPage = () => {
  return (
    <>
      <Hero
        title="Стильный и функциональный сайт-визитка под ключ"
        video={["/video/webm/bg-visiting.webm", "/video/mp4/bg-visiting.mp4"]}
        description="Ваш бизнес заслуживает профессионального представительства в интернете. Мы создаём сайты-визитки, которые
          выглядят стильно и легко воспринимаются."
        poster="/assets/images/poster/visiting-page.webp"
      >
        <PriceMini minPrice="18.000" maxPrice="60.000" />
      </Hero>
      <Portfolio />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default VisitingPage;
