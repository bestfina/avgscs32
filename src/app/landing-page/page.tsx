import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";

const Landing = () => {
  return (
    <>
      <Hero
        title="Эффективные лендинги для мгновенных продаж и заявок"
        video="/video/mp4/bg-landing.mp4"
        poster="/assets/images/poster/langing.webp"
      >
        <p className="text-TextLight">
          Доверяйте нам создание лендинга, который не просто выглядит красиво, а работает на результат для вас 24 на 7.
        </p>
        <div className="text-TextLight flex gap-xxs">
          <div>
            Шаблон:
            <div className="font-bold"> от 20.000 рублей</div>
          </div>
          <div className="w-px bg-white"></div>
          <div>
            Под ключ:
            <div className="font-bold"> от 80.000 рублей</div>
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

export default Landing;
