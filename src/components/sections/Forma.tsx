import { useTranslations } from "next-intl";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import TaimerBlock from "../ui/TaimerBlock";

const Forma = () => {
  const t = useTranslations("main.forma");

  return (
    <section>
      <div className="container">
        <div className="flex gap-28 p-md xl:p-sm xl:gap-20 md:gap-sm md:flex-wrap sm:p-xs rounded-3xl overflow-hidden bg-AccentDark/80 bg-[url('/assets/images/show.webp')]">
          <div className="flex flex-col w-2/4 md:w-full">
            <h2 className="text-TextLight">{t("title")}</h2>
            <p
              className="text-TextLight text-lg xl:text-base md:text-sm xs:text-xs mt-xxxxs sm:mt-xxxs"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            />
            <Social className="my-sm md:my-xs xs:my-xxxs" />
            <Contact className="text-TextLight" />
          </div>
          <TaimerBlock className="w-2/4" />
        </div>
      </div>
    </section>
  );
};

export default Forma;