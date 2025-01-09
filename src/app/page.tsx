import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Button from "@/components/ui/Button";

const Home = () => (
  <>
    <Hero
      video={["/video/webm/bg-hero.webm", "/video/mp4/bg-hero.mp4"]}
      title="Создаём любые виды сайтов – от идеи до запуска"
      description="Доступные цены на сайты с профессиональным подходом. Инвестируйте в инструмент, который окупается с первого
        месяца. Работаем прозрачно: от брифа до результата. Гарантируем поддержку 24/7"
      poster="/assets/images/poster/hero-block.webp"
    >
      <Button type="blue">Рассчитать стоимость</Button>
    </Hero>
    <Portfolio />
    <Service />
    <About />
    <Forma />
    <Feedback />
  </>
);

export default Home;
