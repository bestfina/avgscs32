"use client";

<<<<<<< HEAD
import { ABOUT_IN_NUMBERS, ADVANTAGES } from "@/constants";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";
=======
import { ABOUT_IN_NUMBERS } from "@/constants";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc

const AboutInCount = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
<<<<<<< HEAD
    <div ref={sectionRef} className="flex sm:flex-col justify-between gap-md xl:gap-sm w-full lg:gap-xxs">
      <div className="flex justify-between gap-md xl:gap-sm flex-wrap w-2/4 lg:w-3/12 sm:w-full sm:gap-xxs sm:gap-y-sm">
        {ABOUT_IN_NUMBERS.map(({ id, count, text, title }) => (
          <div
            key={id}
            className={twMerge(
              "flex flex-col justify-center font-bold w-[46%] lg:w-full sm:w-[47.5%]",
              id % 2 === 0 ? "items-end lg:items-start" : null
            )}
          >
            {id === 1 || id === 2 ? (
              <div className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl">
                {startCount ? (
                  <CountUp
                    className={twMerge("text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl")}
                    end={count}
                    duration={2}
                  />
                ) : (
                  "0"
                )}
                {title}
              </div>
            ) : (
              <div className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl">
                {title}
                {startCount ? (
                  <CountUp
                    className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl"
                    end={count}
                    duration={2}
                  />
                ) : (
                  "0"
                )}
              </div>
            )}
            <div className="xxl:text-base lg:text-sm md:text-xs xs:text-[10.9px]">{text}</div>
          </div>
        ))}
      </div>
      <div className="bg-black w-px flex sm:w-full sm:h-px"></div>
      <div className="flex justify-between flex-wrap gap-sm xl:gap-xs w-2/4 lg:w-9/12 sm:w-full">
        {ADVANTAGES.map(({ id, title, description, icon }) => (
          <div key={id} className="w-[48%] xxl:w-[47.8%] sm:w-[47%] x:w-full xl:text-base md:text-sm">
            <div className="lg:flex lg:items-center lg:gap-xxxs md:gap-xxxxs lg:mb-xxxxs x:gap-xxxs">
              <Image src={icon} alt="" width={60} height={60} className="xxl:w-12 xxl:h-12 lg:w-9 lg:h-9" />
              <h5 className="my-xxxs lg:m-0">{title}</h5>
            </div>
            {description}
          </div>
        ))}
      </div>
=======
    <div ref={sectionRef} className="flex gap-md md:flex-wrap md:m-0 lg:gap-xxs m-auto">
      {ABOUT_IN_NUMBERS.map(({ id, count, text, title }) => (
        <div key={id} className="text-6xl xxl:text-5xl lg:text-4xl font-bold md:w-[48%] sm:w-full">
          {id === 1 || id === 2 ? (
            <>
              {startCount ? <CountUp className="text-6xl xxl:text-5xl lg:text-4xl" end={count} duration={2} /> : "0"}
              {title}
            </>
          ) : (
            <>
              {title}
              {startCount ? <CountUp className="text-6xl xxl:text-5xl lg:text-4xl" end={count} duration={2} /> : "0"}
            </>
          )}
          <div className="xxl:text-base lg:text-sm">{text}</div>
        </div>
      ))}
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
    </div>
  );
};

export default AboutInCount;
