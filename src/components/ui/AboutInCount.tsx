"use client";

import { ABOUT_IN_NUMBERS } from "@/constants";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

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
    <div ref={sectionRef} className="flex gap-md xxl:gap-sm xl:gap-xs md:flex-wrap md:m-0 lg:gap-xxs m-auto">
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
    </div>
  );
};

export default AboutInCount;
