import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import PriceMini from "@/components/ui/PriceMini";

const Ecommerce = () => {
  return (
    <>
      <Hero
        video={["/video/webm/bg-ecommerce.webm", "/video/mp4/bg-ecommerce.mp4"]}
        description="Мы создаём интернет-магазин под ключ, полностью сопровождая процесс. От анализа ниши, разработки дизайна и функционала
         до интеграции с системами, настройки рекламы и дальнейшей поддержки."
        title="Интернет-магазин под ключ: от идеи до первой продажи"
        poster="/assets/images/poster/e-commerce.webp"
      >
        <PriceMini minPrice="45.000" maxPrice="240.000" />
      </Hero>
      <Portfolio />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default Ecommerce;
