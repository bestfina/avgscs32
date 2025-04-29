import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Tariffs from "@/components/sections/Tariffs";

const Landing = () => {
  return (
    <>
      <Hero
        title="Создаём лендинги для мгновенных продаж и заявок"
        video={["/video/webm/bg-landing.webm", "/video/mp4/bg-landing.mp4"]}
        description="Разрабатываем лендинги, идеально подходящие вашей аудитории: уникальный дизайн, продуманный текст, настроенная аналитика и 
        готовность к запуску рекламы для максимальной конверсии."
        poster="/assets/images/poster/langing.webp"
      />
      <Partners />
      <Tariffs priceTemplate="От 50.000 руб./10 дней" priceCustom="От 120.000 руб./21 дня" />
      <Portfolio />
      <Steps />
      <Faq />
      <Feedback />
    </>
  );
};

export default Landing;
