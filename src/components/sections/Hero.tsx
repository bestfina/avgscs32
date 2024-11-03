"use client";
import AdvantagesMiniBlock from "../ui/AdvantagesBlock";
import TaimerBlock from "../TaimerBlock";
import smoothFn from "@/lib/smoothFn";
import { MAIN_ADVANTAGES } from "@/constants";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Hero = () => (
  <section
    id="hero"
    className="relative bg-[url('/assets/images/bg-hero.png')] bg-black flex items-center bg-no-repeat bg-cover"
  >
    <video
      className="absolute top-0 left-0 h-full w-full object-cover"
      autoPlay
      controls={false}
      muted
      playsInline
      loop
    >
      <source src="/video/webm/mixkit-code-on-green-letters-on-screen-49122-hd-ready.webm" type="video/webm" />
      <source src="/video/mp4/mixkit-code-on-green-letters-on-screen-49122-hd-ready.mp4" type="video/mp4" />
    </video>
    <div
      className="relative flex items-center px-sm lg:p-xxxs xs:px-xxxxs w-full h-screen bg-opacity-50
       bg-black min-h-[700px] max-h-[1000px] lg:max-h-[700px] md:h-fit md:min-h-fit md:pt-32 md:pb-sm xs:pt-24"
    >
      <div className="container gap-md xxl:gap-xs md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-2/4 xxl:w-4/6 gap-sm xxl:gap-xs md:w-full">
          <h1 className="text-TextLight max-w-3xl">Создаём сайты, которые работают на Вас 24/7</h1>
          <div className="flex flex-wrap justify-between gap-xs xl:gap-xxs sm:hidden">
            {MAIN_ADVANTAGES.map(({ id, title }) => (
              <AdvantagesMiniBlock key={id} className={twMerge("w-[48%] sm:w-full", id === 3 ? "w-full" : null)}>
                {title}
              </AdvantagesMiniBlock>
            ))}
          </div>
        </div>
        <TaimerBlock />
        <button
          className="next-section-btn flex items-center gap-xs xl:gap-xxs md:hidden
           text-TextLight absolute bottom-sm xl:bottom-xs"
          onClick={() => smoothFn("portfolio")}
        >
          <div className="bg-BgLight w-12 h-12 rounded-full flex items-center justify-center xl:w-10 xl:h-10">
            <Image
              src="/assets/icons/arrow-bottom.svg"
              alt="стрелка"
              width={10}
              height={20}
              className="bounce xl:w-2 xl:h-4"
            />
          </div>
          Далее
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
