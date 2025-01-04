import Image from "next/image";
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
      <source src="/video/mp4/bg-hero.mp4" type="video/mp4" />
    </video>
    <div
      className="relative flex items-center w-full h-screen bg-opacity-50
       bg-black min-h-[800px] max-h-[1180px] xl:min-h-[630px] md:h-fit md:min-h-fit md:pt-28 sm:pt-24 md:pb-sm"
    >
      <div className="container gap-sm md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-3/5 lg:w-[55%] gap-md xl:gap-sm md:w-full">
          <h1 className="text-TextLight xxl:max-w-[900px] xl:max-w-[775px] lg:max-w-[625px] md:max-w-full">
            Создаём прибыльные сайты – от идеи до запуска
          </h1>
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
        </div>
        <TaimerBlock
          title="Нг скидка 15% до 15 января"
          text="Успейте запустить прибыльный сайт и начните зарабатывать уже в следующем месяце!"
          textBtn="Забронировать скидку"
        />
        <NextSection />
      </div>
    </div>
  </section>
);

export default Hero;
