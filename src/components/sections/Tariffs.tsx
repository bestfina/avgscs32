"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { TransitionLink } from "@/lib/link";

interface TariffsProps {
  priceTemplate: string;
  priceCustom: string;
}

const Tariffs = ({ priceTemplate, priceCustom }: TariffsProps) => {
  const t = useTranslations("main.tariffs");
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="tariffs">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <div className="flex justify-between flex-wrap gap-md xl:gap-sm md:gap-xs">
          <motion.div
            className="flex flex-col gap-sm xl:gap-xs sm:gap-xxs rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>{t("optimal.title")}</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceTemplate}</h4>
            </div>
            <Button type="blue">{t("discuss_project")}</Button>
            <div className="h-px bg-black"></div>
            <p>{t("optimal.description")}</p>
            <div className="flex justify-between mt-auto flex-wrap gap-xxxs">
              <TransitionLink href="#steps" className="underline">
                {t("steps_link")}
              </TransitionLink>
              <TransitionLink href="#faq" className="underline">
                {t("terms_link")}
              </TransitionLink>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-sm xl:gap-xs sm:gap-xxs rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>{t("premium.title")}</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceCustom}</h4>
            </div>
            <Button type="border-black">{t("discuss_project")}</Button>
            <div className="h-px bg-black"></div>
            <p>{t("premium.description")}</p>
            <div className="flex justify-between mt-auto flex-wrap gap-xxxs">
              <TransitionLink href="#steps" className="underline">
                {t("steps_link")}
              </TransitionLink>
              <TransitionLink href="#faq" className="underline">
                {t("terms_link")}
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;