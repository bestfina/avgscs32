import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import PriceMini from "@/components/ui/PriceMini";

const Corporate = () => {
  return (
    <>
      <Hero
        title="Корпоративный сайт под ключ: всё в одном решении"
        video={["/video/webm/bg-corporate.webm", "/video/mp4/bg-corporate.mp4"]}
        description="Берём на себя весь процесс: от анализа бизнеса и проектирования структуры до создания современного дизайна 
        и интеграции с внутренними системами компании."
        poster="/assets/images/poster/corporate.webp"
      >
        <PriceMini minPrice="30.000" maxPrice="120.000" />
      </Hero>
      <Portfolio />
      <Faq />
      <Forma />
      <Feedback />
    </>
  );
};

export default Corporate;
