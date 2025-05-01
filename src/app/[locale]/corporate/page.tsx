import { useTranslations } from "next-intl";
import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Tariffs from "@/components/sections/Tariffs";

const Corporate = () => {
  const t = useTranslations("corporate");

  return (
    <>
      <Hero
        title={t("hero.title")}
        video={["/video/webm/bg-corporate.webm", "/video/mp4/bg-corporate.mp4"]}
        description={t("hero.description")}
        poster="/assets/images/poster/corporate.webp"
      />
      <Partners />
      <Tariffs priceTemplate={t("tariffs.priceTemplate")} priceCustom={t("tariffs.priceCustom")} />
      <Portfolio />
      <Steps />
      <Faq />
      <Feedback />
    </>
  );
};

export default Corporate;