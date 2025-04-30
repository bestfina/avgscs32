import { useTranslations } from "next-intl";
import { CASE } from "@/constants";
import Cases from "../ui/Cases";

const Portfolio = () => {
  const t = useTranslations("main.portfolio");

  return (
    <section id="portfolio">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <Cases caseArr={CASE.slice(0, 5)} />
      </div>
    </section>
  );
};

export default Portfolio;