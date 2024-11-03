import { useEffect, useState, useRef } from "react";
import Button from "./ui/Button";

// Константы для секунд в днях, часах и минутах
const SECONDS_IN_A_DAY = 86400;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

const TaimerBlock = () => {
  const initialTime: number = 604799; // 6 дней 23 часа 59 минут 59 секунд
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Устанавливаем начальное значение timeLeft из localStorage только на клиенте
    const savedTime = localStorage.getItem("countdown");
    if (savedTime) {
      setTimeLeft(JSON.parse(savedTime));
    }
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownRef.current!);
          localStorage.removeItem("countdown");
          return 0;
        }

        const newTimeLeft = prevTime - 1;
        localStorage.setItem("countdown", JSON.stringify(newTimeLeft));
        return newTimeLeft;
      });
    };

    countdownRef.current = setInterval(updateCountdown, 1000);

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [timeLeft]);

  // Функция для форматирования времени
  const formatTime = (totalSeconds: number) => {
    const days: number = Math.floor(totalSeconds / SECONDS_IN_A_DAY);
    const hours: number = Math.floor((totalSeconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR);
    const minutes: number = Math.floor((totalSeconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE);
    const seconds: number = totalSeconds % SECONDS_IN_A_MINUTE;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div
      className="flex flex-col w-2/4 md:w-full gap-sm lg:gap-xs md:gap-xxs xs:gap-xxxs items-center 
      py-16 xxl:py-14 xl:p-6 lg:py-10 md:px-4 md:p-3 text-TextLight bg-AccentLight/55 rounded-3xl"
    >
      <div className="flex flex-col items-center gap-3 xxl:gap-2 xs:gap-xxxxs">
        <h6 className="font-semibold text-3xl lg:text-2xl md:text-xl xs:text-lg">Бесплатный аудит сайта</h6>
        <p className="max-w-[550px] xxl:max-w-[450px] xl:max-w-[583px] text-center xxl:text-[17px] md:text-sm lg:text-sm">
          Ваш сайт не даёт нужных результатов? Мы проведём бесплатный аудит и покажем, что можно улучшить!
        </p>
      </div>
      <div className="flex items-center gap-md xxl:gap-sm lg:gap-xs md:gap-xxs sm:gap-2 text-center text-TextLight timer-text">
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
      <Button type="white">Получить аудит</Button>
    </div>
  );
};

export default TaimerBlock;
