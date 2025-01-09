import Image from "next/image";
import NextSection from "../ui/NextSection";
import { ReactNode } from "react";

interface HeroProps {
  video: string[];
  title: string;
  description: string;
  poster: string;
  children: ReactNode;
}

const Hero = ({ video, title, description, children, poster }: HeroProps) => (
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
      <source src={video[0]} type="video/webm" />
      <source src={video[1]} type="video/mp4" />
    </video>
    <div
      className="relative flex items-center w-full h-screen bg-opacity-45
       bg-black min-h-[800px] max-h-[1180px] xl:min-h-[630px] md:h-fit"
    >
      <div className="container gap-20 md:flex-col md:items-start sm:h-fit h-full flex items-center">
        <div className="flex flex-col w-3/5 md:w-3/4 sm:w-full">
          <h1 className="text-TextLight xxl:max-w-[900px] xl:max-w-[775px] lg:max-w-[625px] md:max-w-full">{title}</h1>
          <p className="text-TextLight mt-xs mb-md xl:mt-xxs md:mb-sm">{description}</p>
          {children}
        </div>
        <NextSection />
      </div>
    </div>
  </section>
);

export default Hero;
