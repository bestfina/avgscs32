import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";

const Ecommerce = () => {
  return (
    <>
      <Hero
        video="/video/mp4/bg-ecommerce.mp4"
        title="Разработаем интернет-магазин, который действительно продает"
        poster="/assets/images/poster/e-commerce.png"
      >
        <p className="text-TextLight">
          Мы разрабатываем интернет-магазины, которые идеально подходят вашему бизнесу: от современных интерфейсов до
          автоматизации продаж. Вы получите уникальный дизайн, высокую скорость и максимальную прибыль.
        </p>
        <div className="text-TextLight flex gap-xxs">
          <div>
            Шаблон:
            <div className="font-bold"> от 50.000 рублей</div>
          </div>
          <div className="w-px bg-white"></div>
          <div>
            Под ключ:
            <div className="font-bold"> от 240.000 рублей</div>
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

export default Ecommerce;
