"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";

const MainCta = () => {
  const t = useTranslations("main.hero.cta");
  const downloadPresentationWithFetch = async () => {
    try {
      const response = await fetch("/assets/files/CortexDigital.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CortexDigital.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex gap-sm xl:gap-xs md:gap-xxs x:gap-xxxs x:flex-col mt-md xl:mt-10 lg:mt-sm"
    >
      <Button type="blue" className="x:w-full btn-grow">
        {t("calculate_cost")}
      </Button>
      <button
        onClick={downloadPresentationWithFetch}
        className="bg-TextLight text-center rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full"
      >
        {t("view_presentation")}
      </button>
    </motion.div>
  );
};

export default MainCta;
