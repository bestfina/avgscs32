"use client";
import { useTranslations } from "next-intl";
import ArrowIcon from "./icon/ArrowIcon";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TCase } from "@/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ArrowLink from "./icon/ArrowLink";

interface CasesProps {
  caseArr: TCase[];
  main?: boolean;
}

const Cases = ({ caseArr, main }: CasesProps) => {
  const t = useTranslations();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div ref={containerRef} className="flex flex-wrap justify-between gap-md xxl:gap-sm md:gap-xs">
      {caseArr.map(({ id, title, url, description, poster }) => {
        return (
          <motion.a
            href={url}
            key={id}
            target="_blank"
            className="relative w-[48.5%] lg:w-[48.4%] md:w-[48%] service-item sm:w-full duration-300 rounded-3xl p-sm xl:p-xs md:p-xxs bg-slate-100 group overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center md:items-end">
              <h3 className="relative w-fit">
                {t(title)}
                <span
                  className={twMerge(
                    "absolute -mb-[3px] bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-[105%]"
                  )}
                ></span>
              </h3>
              <div className="service-link text-TextDark duration-300 rounded-3xl w-11 h-11 xxl:h-9 xxl:w-9 lg:w-7 lg:h-7 flex justify-center items-center ml-auto">
                <ArrowLink />
              </div>
            </div>
            <p className="mb-xs mt-xxxs xl:mt-xxxxs xl:mb-xxs xl:text-base md:text-sm">{t(description)}</p>
            <Image
              src={poster}
              width={800}
              height={300}
              alt={title}
              priority
              className="rounded-3xl h-96 w-full object-cover lg:h-80 md:h-60"
            />
          </motion.a>
        );
      })}
      <motion.a
        href={!main ? "/portfolio" : "/contacts"}
        className="w-[48.5%] lg:w-[48.4%] md:w-[48%] sm:w-full sm:p-2 bg-[#0E202C] duration-300 rounded-3xl flex justify-center 
        gap-xxs md:gap-xxxxs items-center text-TextLight text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl sm:h-[320px] xs:h-[280px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
      >
        {t("main.portfolio.view_more")} <ArrowIcon className="-rotate-90 w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6" />
      </motion.a>
    </div>
  );
};

export default Cases;
