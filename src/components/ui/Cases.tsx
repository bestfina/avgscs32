"use client";
import { CASE } from "@/constants";
<<<<<<< HEAD
import ArrowIcon from "./icon/ArrowIcon";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Cases = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" }); // Срабатывание за 100px до появления

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
        {CASE.map(({ id, title, video, url, description }) => (
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
            {/* <div className="absolute inset-0 bg-black bg-opacity-80 sm:hidden flex items-center justify-center gap-xxxs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-TextLight text-4xl font-semibold xl:text-3xl">Посмотреть</span>
              <Image src="/assets/icons/eye.svg" alt="" width={40} height={40} />
            </div> */}
          </motion.a>
        ))}
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
      </div>
=======
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Cases = () => {
  return (
    <>
      {CASE.map(({ id, title, description, image, url, data, advantages }) => {
        return (
          <div
            key={id}
            className={twMerge(
              "flex md:flex-col gap-sm sm:gap-xs justify-between items-center mb-sm",
              id % 2 === 0 ? "flex-row-reverse" : null
            )}
          >
            <div className="w-2/4 md:w-full flex flex-col gap-xxs">
              <div>
                <span>{data}</span>
                <h3>{title}</h3>
              </div>
              <Link href={url} target="_blank" className="w-fit underline">
                {url}
              </Link>
              <div className="flex flex-wrap gap-xxxs">
                {advantages.map((item, index) => (
                  <span key={index} className="bg-black font-bold px-2 py-1 text-TextLight rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              {description.map(({ subject, text }, index) => (
                <p key={index}>
                  <b>{subject} </b>
                  {text}
                </p>
              ))}
              <Button type="blue">Хочу так же!</Button>
            </div>
            <Image
              src={image}
              alt=""
              width={1000}
              height={600}
              loading="lazy"
              className="rounded-3xl object-cover h-full w-2/4 border-4 border-dotted border-black md:w-full"
            />
          </div>
        );
      })}
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
    </>
  );
};

export default Cases;
