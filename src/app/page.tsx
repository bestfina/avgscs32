import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Image from "next/image";

const Home = () => (
  <>
    <Hero
      video="/video/mp4/bg-hero.mp4"
      title="Создаём прибыльные сайты – от идеи до запуска"
      poster="/assets/images/bg.png"
    >
      <div className="flex flex-wrap justify-between gap-xs xl:gap-xxs sm:gap-xxxs">
        <ul className="flex flex-col gap-xs">
          <li className="advantages-main">
            <Image
              src="/assets/icons/document.svg"
              alt=""
              width={50}
              height={50}
              loading="eager"
              className="advantages-main-image"
            />
            Подробный отчёт по каждому этапу проекта без скрытых доплат
          </li>
          <li className="advantages-main">
            <Image
              src="/assets/icons/target.svg"
              alt=""
              width={50}
              height={50}
              loading="eager"
              className="advantages-main-image"
            />
            Индивидуальные решения для роста и масштабирования бизнеса
          </li>
          <li className="advantages-main">
            <Image
              src="/assets/icons/growth.svg"
              alt=""
              width={50}
              height={50}
              loading="eager"
              className="advantages-main-image"
            />
            Гарантируем рост клиентов на 20-50% уже с первого месяца, иначе вернём деньги
          </li>
        </ul>
      </div>
    </Hero>
    <Service />
    <Portfolio />
    <About />
    <Forma />
    <Feedback />
  </>
);

export default Home;
