import AdvantagesMiniBlock from "../ui/AdvantagesBlock";
import NextSection from "../ui/NextSection";
import TaimerBlock from "../ui/TaimerBlock";
import { MAIN_ADVANTAGES } from "@/constants";
import { twMerge } from "tailwind-merge";

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
      <source src="/video/mp4/bg-hero.mp4" type="video/mp4" />
    </video>
    <div
      className="relative flex items-center px-[25px] lg:p-xxxs xs:px-xxxxs w-full h-screen bg-opacity-50
       bg-black min-h-[700px] max-h-[1000px] lg:min-h-[600px] md:h-fit md:min-h-fit md:pt-32 md:pb-sm xs:pt-24"
    >
      <div className="container md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-2/4 xxl:w-4/6 gap-sm xxl:gap-xs md:w-full">
          <h1 className="text-TextLight max-w-4xl">Создаём проекты, которые работают на Вас 24/7</h1>
          <div className="flex flex-wrap justify-between gap-xs xl:gap-xxs sm:gap-xxxs">
            {MAIN_ADVANTAGES.map(({ id, title }) => (
              <AdvantagesMiniBlock
                key={id}
                className={twMerge(
                  "w-[48%] sm:w-full",
                  id === 3 ? "w-full" : null,
                  id === 2 ? "sm:bg-BgLight sm:text-AccentDark" : "sm:hover:bg-transparent sm:hover:text-TextLight"
                )}
              >
                {title}
              </AdvantagesMiniBlock>
            ))}
          </div>
        </div>
        <TaimerBlock />
        <NextSection />
      </div>
    </div>
  </section>
);

export default Hero;
