import Image from "next/image";
import InnerSpan from "../ui/InnerSpan";
import NextSection from "../ui/NextSection";
import TaimerBlock from "../ui/TaimerBlock";

const Hero = () => (
  <section id="hero" className="relative bg-black flex items-center bg-no-repeat bg-cover">
    <video
      className="absolute top-0 left-0 h-full w-full object-cover"
      autoPlay
      controls={false}
      muted
      playsInline
      loop
    >
      <source src="/video/webm/bg-hero.webm" type="video/webm" />
      <source src="/video/mp4/5778-185369732.mp4" type="video/mp4" />
    </video>
    <div
      className="relative flex items-center w-full h-screen bg-opacity-40
       bg-black min-h-[800px] max-h-[1180px] xl:min-h-[630px] md:h-fit md:min-h-fit md:pt-32 md:pb-sm xs:pt-24"
    >
      <div className="container gap-sm md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-3/5 lg:w-[55%] gap-md xl:gap-sm md:w-full">
          <h1 className="text-TextLight">
            Создаём{" "}
            <InnerSpan className="text-7xl pb-3 lg:pb-2 xxl:text-6xl xl:text-5xl lg:text-[39px] sm:text-4xl">
              прибыльные
            </InnerSpan>{" "}
            сайты – от идеи до запуска
          </h1>
          <div className="flex flex-wrap justify-between gap-xs xl:gap-xxs sm:gap-xxxs">
            <ul className="flex flex-col gap-xs xl:gap-xxs">
              <li className="advantages-main">
                <Image
                  src="/assets/icons/document.svg"
                  alt=""
                  width={50}
                  height={50}
                  loading="eager"
                  className="advantages-main-image"
                />{" "}
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
                />{" "}
                Индивидуальные решения для роста и масштабирования бизнеса
              </li>
              <li className="advantages-main">
                <Image
                  src="/assets/icons/chart.svg"
                  alt=""
                  width={50}
                  height={50}
                  loading="eager"
                  className="advantages-main-image"
                />{" "}
                Гарантируем рост клиентов на 20-50% уже с первого месяца, иначе вернём деньги
              </li>
            </ul>
          </div>
        </div>
        <TaimerBlock
          title="Скидка 15% до 1 января"
          text="Успейте запустить прибыльный сайт и начните зарабатывать уже в следующем месяце!"
          textBtn="Забронировать скидку"
        />
        <NextSection />
      </div>
    </div>
  </section>
);

export default Hero;
