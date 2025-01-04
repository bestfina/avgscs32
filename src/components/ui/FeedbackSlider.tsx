"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FEEDBACKS } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import InnerIcon from "./InnerIcon";
import { usePopup } from "@/context/PopupContext";

const FeedbackSlider = () => {
  const { openPopup } = usePopup();
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
      loop
      slidesPerView={slides}
      navigation={{
        prevEl: ".slider-button-prev",
        nextEl: ".slider-button-next",
      }}
      className="mt-xxs cursor-grab"
    >
      {FEEDBACKS.map(({ id, name, avatar, poster, video }) => (
        <SwiperSlide key={id}>
<<<<<<< HEAD
          <div className="flex flex-col border border-TextDark rounded-3xl h-[650px] xxl:h-[550px] lg:h-[480px] sm:h-[400px] overflow-hidden">
=======
          <div className="flex flex-col border-2 border-TextDark rounded-3xl h-[650px] xxl:h-[550px] lg:h-[480px] sm:h-[400px] overflow-hidden">
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
            <div className="flex items-center gap-xxxs pl-md xl:pl-sm sm:pl-xxs sm:gap-xxxxs py-3 border-b-2 border-TextDark">
              <div
                style={{ backgroundImage: `url("${avatar}")` }}
                className="w-11 h-11 sm:w-9 sm:h-9 bg-black rounded-full bg-center bg-cover"
              ></div>
              {name}
            </div>
            <div
              style={{ backgroundImage: `url("${poster}")` }}
<<<<<<< HEAD
              className="flex items-center justify-center bg-cover bg-left-bottom h-full"
            >
              <InnerIcon
                className="pl-1 bg-AccentDark hover:scale-[1.20]"
                onClick={() =>
                  openPopup(
                    video ? (
                      <video
                        className="max-h-[650px] xxl:max-h-[550px] sm:max-h-[400px] w-full object-contain"
                        autoPlay
                        controls
                        playsInline
                      >
=======
              className="flex items-center justify-center bg-cover h-full"
            >
              <InnerIcon
                className="pl-1"
                onClick={() =>
                  openPopup(
                    video ? (
                      <video className="h-full w-full object-contain" autoPlay controls playsInline>
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
                        <source src={video[0]} type="video/webm" />
                        <source src={video[1]} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={poster}
                        width={1000}
                        height={650}
                        alt="постер"
                        className="w-full h-full max-h-[650px] lg:max-h-[500px] object-contain "
                      />
                    )
                  )
                }
              >
                {video ? (
                  <Image
                    src="/assets/icons/play.svg"
                    width={20}
                    height={28}
                    alt="проигрыватель"
                    className="lg:w-4 lg:h-6"
                  />
                ) : (
                  <Image
                    src="/assets/icons/loupe.svg"
                    width={30}
                    height={28}
                    alt="приблизить"
                    className="lg:w-7 lg:h-6"
                  />
                )}
              </InnerIcon>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackSlider;
