import { useTranslations } from "next-intl";
import Image from "next/image";
import NextSection from "../ui/NextSection";
import MainCta from "../ui/MainCta";

interface HeroProps {
  video: string[];
  title: string;
  description: string;
  poster: string;
}

const Hero = ({ video, title, description, poster }: HeroProps) => {
  const t = useTranslations("main.hero");

  return (
    <section id="hero" className="relative bg-black flex items-center bg-no-repeat bg-cover">
      <Image
        src={poster}
        priority
        alt={t("poster_alt")}
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
      <div className="relative flex items-center w-full h-screen bg-opacity-60 bg-black min-h-[800px] max-h-[1180px] xl:min-h-[680px] md:h-fit">
        <div className="container gap-20 md:flex-col md:items-start sm:h-fit h-full flex items-center">
          <div className="flex flex-col w-[73%] xl:w-full">
            <h1 className="text-TextLight xxl:max-w-[1020px] xl:max-w-[930px] lg:max-w-[680px] sm:max-w-full">
              {title}
            </h1>
            <p className="text-TextLight max-w-[1030px] xxl:max-w-[960px] xl:max-w-[756px] lg:max-w-[640px] leading-8 xl:leading-7 lg:leading-6 x:leading-5 xs:leading-[18px] mt-xs xl:mt-xxs">
              {description}
            </p>
            <MainCta />
          </div>
          <NextSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
