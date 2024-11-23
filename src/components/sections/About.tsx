import Image from "next/image";
import { ADVANTAGES } from "@/constants";
import AboutInCount from "../ui/AboutInCount";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col gap-md">
        <h2>Немного о компании</h2>
        <div className="flex gap-md xxl:gap-sm md:flex-col">
          <div className="flex flex-col justify-center gap-sm w-3/5 xl:gap-xs md:w-full">
            <p className="leading-10 lg:leading-8">
              С 2017 года вместе с командой{" "}
              <span className="bg-AccentDark font-bold p-1 text-TextLight rounded-full">cответственных</span> ребят
              разрабатываем сайты под ключ на Tilda, связки из сайтов и многостраничные ресурсы для компаниий под
              различные маркетинговые задачи. Cреди заказчиков{" "}
              <span className="bg-AccentDark font-bold p-1 text-TextLight rounded-full">ТОПЫ рынка</span> - Тимур
              Кадыров, Антон Тум, Слава Молостов, TodayPrice, школа безопасного инвестирования SPI, и другие
            </p>
            <AboutInCount />
          </div>
          <Image
            className="rounded-3xl w-2/5 md:w-full"
            src="/assets/images/bg-hero.png"
            width={700}
            height={200}
            alt="Наша компания"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-md">
            {ADVANTAGES.map(({ id, icon, title, description }) => (
              <div className="w-[30.9%] xl:w-[30%] lg:w-[47%] md:w-[46%] sm:w-full" key={id}>
                <Image src={icon} width={80} height={80} alt="Иконка преимущества" className="w-auto h-16" />
                <h5 className="mt-xxxs mb-xxxxs">{title}</h5>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
