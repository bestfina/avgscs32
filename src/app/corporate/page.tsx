import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";

const Corporate = () => {
  return (
    <>
      <Hero
        title="Корпоративные сайты, которые работают на ваш бизнес"
        video={["", "/video/mp4/bg-corporate.mp4"]}
        description="Корпоративный сайт — это лицо вашей компании в интернете. Мы делаем его привлекательным, функциональным и
          запоминающимся."
        poster="/assets/images/poster/corporate.png"
      >
        <div className="text-TextLight flex gap-xxs">
          <div>
            Шаблон:
            <div className="font-bold"> от 30.000 рублей</div>
          </div>
          <div className="w-px bg-white"></div>
          <div>
            Под ключ:
            <div className="font-bold"> от 120.000 рублей</div>
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

export default Corporate;
