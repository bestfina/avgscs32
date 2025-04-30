"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const MiniForma = () => {
  const t = useTranslations("main.mini_forma");

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col px-xs w-2/5 lg:w-[45%] md:w-full h-fit gap-sm xl:gap-xs lg:gap-xxs md:gap-xxs
         items-center py-12 xl:py-[18px] xl:px-10 md:p-3 text-TextLight bg-white/15 backdrop-blur-sm rounded-3xl"
    >
      <h5>{t("title")}</h5>
      <p>{t("description")}</p>
    </motion.div>
  );
};

export default MiniForma;