import { useTranslations } from "next-intl";
import Image from "next/image";
import Technologies from "../ui/Technologies";
import { STEPS } from "@/constants";

const Steps = () => {
  const t = useTranslations();

  return (
    <section id="steps">
      <div className="container flex flex-col">
        <h2>{t("main.steps.title")}</h2>
        <Technologies />
        <div className="flex flex-wrap gap-xs gap-y-md sm:gap-sm justify-between w-full">
          {STEPS.map(({ id, title, description, icon }) => (
            <div key={id} className="w-[48%] sm:w-full flex flex-col gap-xxs xl:gap-xxxs">
              <Image
                src={icon}
                // alt={t("icon_alt", { id })}
                alt={""}
                priority={false}
                width={60}
                height={60}
                className="xl:w-md xl:h-md sm:w-10 sm:h-10"
              />
              <h3>
                {id}. {t(title)}
              </h3>
              <p>{t(description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;