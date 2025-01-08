import Image from "next/image";
import NextSection from "../ui/NextSection";
import TaimerBlock from "../ui/TaimerBlock";
import { ReactNode } from "react";

interface HeroProps {
  video: string;
  title: string;
  poster: string;
  children: ReactNode;
}

const Hero = ({ video, title, children, poster }: HeroProps) => (
  <section id="hero" className="relative bg-black flex items-center bg-no-repeat bg-cover">
    <Image
      src={poster}
      priority
      alt="фон главного блока"
      width={1000}
      height={800}
      className="absolute top-0 left-0 h-full w-full object-cover"
    />
    <video
      className="absolute top-0 left-0 h-full w-full object-cover"
      autoPlay
      controls={false}
      muted
      playsInline
      loop
      preload="none"
    >
      <source src={video} type="video/mp4" />
    </video>
    <div
      className="relative flex items-center w-full h-screen bg-opacity-60
       bg-black min-h-[800px] max-h-[1180px] xl:min-h-[630px] md:h-fit md:min-h-fit md:pt-28 sm:pt-24 md:pb-sm"
    >
      <div className="container gap-20 md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-3/5 lg:w-[55%] gap-md xl:gap-sm sm:gap-xs md:w-full">
          {/* <div className="flex gap-xs">
            <div className="bg-slate-100 rounded-full px-xxs py-xxxxs">Скорость</div>
            <div className="bg-slate-100 rounded-full px-xxs py-xxxxs">Качество</div>
            <div className="bg-slate-100 rounded-full px-xxs py-xxxxs">Надежность</div>
          </div> */}
          <h1 className="text-TextLight xxl:max-w-[900px] xl:max-w-[775px] lg:max-w-[625px] md:max-w-full">{title}</h1>
          {children}
        </div>
        <TaimerBlock title="Новогодняя скидка 15%" textBtn="Забронировать скидку" />
        <NextSection />
      </div>
    </div>
  </section>
);

export default Hero;
