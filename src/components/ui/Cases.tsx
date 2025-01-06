"use client";
import ArrowIcon from "./icon/ArrowIcon";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TCase } from "@/types";

interface CasesProps {
  caseArr: TCase[];
  main?: boolean;
}

const Cases = ({ caseArr, main }: CasesProps) => {
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
    <>
      <div ref={containerRef} className="flex flex-wrap justify-between gap-md xxl:gap-sm md:gap-xs">
        {caseArr.map(({ id, title, video, url, description }) => (
          <motion.a
            href={url}
            key={id}
            target="_blank"
            className="relative w-[48.5%] lg:w-[48.4%] md:w-[48%] sm:w-full duration-300 rounded-3xl p-sm xl:p-xs md:p-xxs bg-slate-100 group overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="sm:underline">{title}</h3>
            <p className="mb-xs mt-xxxs xl:mt-xxxxs xl:mb-xxs xl:text-base md:text-sm">{description}</p>
            <video className="w-full object-cover rounded-3xl" autoPlay controls={false} muted playsInline loop>
              <source src={video} type="video/mp4" />
            </video>
          </motion.a>
        ))}
        {!main && (
          <motion.a
            href="/portfolio"
            className="w-[48.5%] lg:w-[48.4%] md:w-[48%] sm:w-full sm:p-2 bg-black/80 hover:bg-black duration-300 rounded-3xl flex justify-center gap-xxs md:gap-xxxxs items-center text-TextLight text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:rounded-full sm:text-xl sm:h-fit"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            Смотреть ещё <ArrowIcon className="-rotate-90 w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6" />
          </motion.a>
        )}
      </div>
    </>
  );
};

export default Cases;
