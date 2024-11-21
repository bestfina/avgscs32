"use client";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PAGES } from "@/constants";
import SliderNav from "../ui/SliderNav";
import Book from "../ui/Book/Book";

const Portfolio = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <h2>История о наших проектов</h2>
        {!isMobileView ? null : <SliderNav />}
        {!isMobileView ? (
          <Book />
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".slider-button-prev",
              nextEl: ".slider-button-next",
            }}
            className="mt-xxs"
          >
            {PAGES.map(({ id, title, url, image, description, data }) => (
              <SwiperSlide key={id} aria-labelledby={`slide-${id}`}>
                <div className="flex flex-col gap-xxxs">
                  <h5>{title}</h5>
                  <Link href={url} target="_blank" className="underline">
                    {url}
                  </Link>
                  <Image
                    src={image}
                    alt={"главный экран сайта " + url}
                    width={768}
                    height={250}
                    priority={id === PAGES[0].id}
                    className="rounded-3xl w-full"
                  />
                  {description.map(({ subject, text }, index) => (
                    <p key={index}>
                      <b>{subject}</b> {text}
                    </p>
                  ))}
                  <div>{data}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
