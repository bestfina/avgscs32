import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import PriceMini from "@/components/ui/PriceMini";

const Landing = () => {
  return (
    <>
      <Hero
        title="Создаём лендинги для мгновенных продаж и заявок"
        video={["/video/webm/bg-landing.webm", "/video/mp4/bg-landing.mp4"]}
        description="Разрабатываем лендинги, идеально подходящие вашей аудитории: уникальный дизайн, продуманный текст, настроенная аналитика и 
        готовность к запуску рекламы для максимальной конверсии."
        poster="/assets/images/poster/langing.webp"
      >
        <PriceMini minPrice="20.000" maxPrice="80.000" />
      </Hero>
      <Portfolio />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default Landing;
