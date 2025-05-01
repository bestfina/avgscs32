import { useTranslations } from "next-intl";
import PartnersScroll from "../ui/PartnersScroll";

const Partners = () => {
  const t = useTranslations("main.partners");

  return (
    <section id="partners">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <div className="flex flex-col justify-center gap-md xl:gap-sm">
          <PartnersScroll />
        </div>
      </div>
    </section>
  );
};

export default Partners;