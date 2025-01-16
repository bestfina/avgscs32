import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Tariffs from "@/components/sections/Tariffs";

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
      <Tariffs priceTemplate="От 50.000 руб./5 дней" priceCustom="От 240.000 руб./30 дней" />
      <Portfolio />
      <Forma />
      <Faq />
      <Feedback />
    </>
  );
};

export default Ecommerce;
