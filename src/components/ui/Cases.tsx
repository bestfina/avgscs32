"use client";
import { CASE } from "@/constants";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "./Button";
import Image from "next/image";

const Cases = () => {
  return (
    <>
      {CASE.map(({ id, title, description, image, url, data, advantages }) => {
        return (
          <motion.div
            key={id}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={twMerge(
              "flex md:flex-col gap-sm justify-between pb-xs",
              id % 2 === 0 ? "flex-row-reverse" : null
            )}
          >
            <div className="w-2/4 md:w-full flex flex-col gap-xxs">
              <div>
                <span>{data}</span>
                <h3>{title}</h3>
              </div>
              <Link href={url} target="_blank" className="w-fit">
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
            <div className="flex flex-wrap gap-xs lg:gap-xxs xs:gap-xxxs justify-between w-2/4 md:w-full">
              <Swiper spaceBetween={30} slidesPerView={1} navigation className="mt-xxs rounded-3xl">
                {image.map((item, index) => (
                  <SwiperSlide key={index} className="cursor-grab">
                    <Image
                      src={item}
                      alt=""
                      width={1000}
                      height={600}
                      loading="lazy"
                      className="rounded-3xl object-cover h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Cases;
