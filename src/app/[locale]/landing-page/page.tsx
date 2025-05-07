import { useTranslations } from "next-intl";
import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Tariffs from "@/components/sections/Tariffs";

const Landing = () => {
  const t = useTranslations("landing");

  return (
    <>
      <Hero
        title={t("hero.title")}
        video={["/video/webm/bg-landing.webm", "/video/mp4/bg-landing.mp4"]}
        description={t("hero.description")}
        poster="/assets/images/poster/langing.webp"
      />
      <Partners />
      <Tariffs priceTemplate={t("tariffs.priceTemplate")} priceCustom={t("tariffs.priceCustom")} />
      <Portfolio />
      <Steps />
      <Feedback />
      <Faq />
    </>
  );
};

export default Landing;
