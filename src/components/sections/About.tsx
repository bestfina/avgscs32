import { useTranslations } from "next-intl";
import AboutInCount from "../ui/AboutInCount";
import Technologies from "../ui/Technologies";

const About = () => {
  const t = useTranslations("main.about");

  return (
    <section id="about">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <div className="flex flex-col justify-center gap-md xl:gap-sm">
          {/* <p className="leading-9 xl:leading-8 lg:leading-6 xs:leading-5">{t("description")}</p>*/}
          <Technologies />
          <AboutInCount />
        </div>
      </div>
    </section>
  );
};

export default About;
