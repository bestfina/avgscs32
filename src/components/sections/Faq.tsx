import { useTranslations } from "next-intl";
import Questions from "../ui/Questions";

const Faq = () => {
  const t = useTranslations("main.faq");

  return (
    <section id="faq">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <Questions />
      </div>
    </section>
  );
};

export default Faq;