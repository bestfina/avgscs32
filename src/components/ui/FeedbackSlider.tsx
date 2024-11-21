"use client";
import { Navigation } from "swiper/modules";
import FeedbackCard from "../ui/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FEEDBACKS } from "@/constants";
import { useEffect, useState } from "react";

const FeedbackSlider = () => {
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth <= 600
        ? setSlides(1)
        : window.innerWidth <= 1024
        ? setSlides(2)
        : window.innerWidth <= 1600
        ? setSlides(3)
        : setSlides(4);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={slides}
      navigation={{
        prevEl: ".slider-button-prev",
        nextEl: ".slider-button-next",
      }}
      className="mt-xxs"
    >
      {FEEDBACKS.map(({ id, name, avatar, poster, video }) => (
        <SwiperSlide key={id}>
          <FeedbackCard avatar={avatar} poster={poster} video={video}>
            {name}
          </FeedbackCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackSlider;
