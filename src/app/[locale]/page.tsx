import { useTranslations } from "next-intl";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Feedback from "@/components/sections/Feedback";
import Partners from "@/components/sections/Partners";

const Home = () => {
  const t = useTranslations("main.hero");

  return (
    <>
      <Hero
        video={["/video/webm/bg-hero.webm", "/video/mp4/bg-hero.mp4"]}
        title={t("title")}
        description={t("description")}
        poster="/assets/images/poster/hero-block.webp"
      />
      <Partners />
      <Service />
      <Portfolio />
      <Feedback />
      <About />
    </>
  );
};

export default Home;
