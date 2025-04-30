"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FEEDBACKS } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import InnerIcon from "./InnerIcon";
import { usePopup } from "@/context/PopupContext";
import { useTranslations } from "next-intl";

const FeedbackSlider = () => {
  const t = useTranslations()
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
          <div className="flex flex-col border border-TextDark rounded-3xl h-[650px] xxl:h-[550px] xl:h-[600px] lg:h-[480px] sm:h-[550px] xs:h-[480px] overflow-hidden">
            <div className="flex items-center gap-xxxs pl-md xl:pl-sm sm:pl-xxs sm:gap-xxxxs py-3 border-b border-TextDark">
              <div className="w-11 h-11 sm:w-9 sm:h-9 bg-black overflow-hidden rounded-full">
                <Image src={avatar} alt={"аватар клиента:" + name} width={44} height={44} priority={false} />
              </div>
              {t(name)}
            </div>
            <div className="flex items-center justify-center bg-cover bg-left-bottom h-full overflow-hidden relative">
              <Image
                src={poster}
                alt=""
                width={800}
                height={650}
                priority={false}
                className="absolute w-full h-full object-cover"
              />
              <InnerIcon
                className="pl-1 bg-AccentDark hover:scale-[1.20] z-10"
                onClick={() =>
                  openPopup(
                    video ? (
                      <video
                        className="max-h-[650px] xxl:max-h-[550px] sm:max-h-[400px] w-full object-contain"
                        autoPlay
                        controls
                        playsInline
                      >
                        <source src={video[0]} type="video/webm" />
                        <source src={video[1]} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={poster}
                        width={1000}
                        height={650}
                        alt="постер"
                        priority={false}
                        className="w-full h-full max-h-[650px] lg:max-h-[500px] object-contain"
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
                    priority={false}
                    className="lg:w-4 lg:h-6"
                  />
                ) : (
                  <Image
                    src="/assets/icons/loupe.svg"
                    width={30}
                    height={28}
                    alt="приблизить"
                    priority={false}
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
