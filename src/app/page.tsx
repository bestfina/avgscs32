import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";

const Home = () => (
  <>
    <Hero
      video={["/video/webm/bg-hero.webm", "/video/mp4/bg-hero.mp4"]}
      title="Создаём любые виды сайтов – от идеи до запуска"
      description="Наша команда реализует проекты любого уровня сложности по доступным ценам – от креативной концепции до запуска и дальнейшего
       сопровождения. Мы гарантируем высококачественную работу на каждом этапе разработки, сдачу задачи в срок и последующую поддержку проекта."
      poster="/assets/images/poster/hero-block.webp"
    ></Hero>
    <Service />
    <Portfolio />
    <About />
    <Forma />
    <Feedback />
  </>
);

export default Home;
