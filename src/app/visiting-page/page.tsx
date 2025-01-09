import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";

import Portfolio from "@/components/sections/Portfolio";

const VisitingPage = () => {
  return (
    <>
      <Hero
        title="Сайт-визитка, который выгодно представляет ваш бизнес"
        video={["", "/video/mp4/bg-visiting.mp4"]}
        description="Ваш бизнес заслуживает профессионального представительства в интернете. Мы создаём сайты-визитки, которые
          выглядят стильно и легко воспринимаются."
        poster="/assets/images/poster/visiting-page.png"
      >
        <div className="text-TextLight flex gap-xxs">
          <div>
            Шаблон:
            <div className="font-bold"> от 18.000 рублей</div>
          </div>
          <div className="w-px bg-white"></div>
          <div>
            Под ключ:
            <div className="font-bold"> от 60.000 рублей</div>
          </div>
        </div>
      </Hero>
      <Portfolio />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default VisitingPage;
