"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

const SECONDS_IN_A_DAY = 86400;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

interface TaimerBlockProps {
  className?: string;
  text?: string;
  title?: string;
  textBtn?: string;
}

const TaimerBlock = ({
  className,
  text = "Ваш сайт не даёт нужных результатов? Мы проведём бесплатный аудит и покажем, что можно улучшить!",
  title = "Бесплатный аудит сайта",
  textBtn = "Получить аудит",
}: TaimerBlockProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextYear = now.getFullYear();
    const newYear = new Date(`January 15, ${nextYear} 00:00:00`).getTime();
    const currentTime = now.getTime();
    return Math.max(0, Math.floor((newYear - currentTime) / 1000));
  };

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / SECONDS_IN_A_DAY);
    const hours = Math.floor((totalSeconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR);
    const minutes = Math.floor((totalSeconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE);
    const seconds = totalSeconds % SECONDS_IN_A_MINUTE;
    return { days, hours, minutes, seconds };
  };

  // Если таймер ещё не готов, возвращаем заглушку
  const { days, hours, minutes, seconds } =
    timeLeft !== null ? formatTime(timeLeft) : { days: "--", hours: "--", minutes: "--", seconds: "--" };

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={twMerge(
        `flex flex-col px-xs w-2/5 lg:w-[45%] md:w-full h-fit gap-sm xl:gap-xs lg:gap-xxs md:gap-xxs xs:gap-xxxs
         items-center py-8 xl:p-[18px] md:p-3 text-TextLight bg-white/15 backdrop-blur-sm rounded-3xl`,
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 xxl:gap-2 xs:gap-xxxxs">
        <Image
          src="/assets/icons/santa.svg"
          alt=""
          width={50}
          height={50}
          loading="eager"
          className="sm:w-10 sm:h-10"
        />
        <h6 className="font-semibold text-center text-3xl xl:text-2xl xl:text-[22px] md:text-xl sm:text-xl">{title}</h6>
        <p className="max-w-[580px] xl:max-w-[500px] text-center xl:text-base sm:text-sm">{text}</p>
      </div>
      <div
        className="flex items-center gap-sm xl:gap-xs md:gap-xxs sm:gap-3 text-center text-TextLight timer-text"
        style={{ minHeight: "40px" }}
      >
        <div className="timer-text">
          {days} <div>Дней</div>
        </div>
        :
        <div className="timer-text">
          {hours} <div>Часов</div>
        </div>
        :
        <div className="timer-text">
          {minutes} <div>Минут</div>
        </div>
        :
        <div className="timer-text">
          {seconds} <div>Секунд</div>
        </div>
      </div>
      <Button type="blue" className="x:w-full">
        {textBtn}
      </Button>
    </motion.div>
  );
};

export default TaimerBlock;
