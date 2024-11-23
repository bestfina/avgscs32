"use client";

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
    <div ref={sectionRef} className="flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs md:flex-col">
      <div className="text-6xl xxl:text-5xl lg:text-4xl font-bold">
        {startCount ? <CountUp className="text-6xl xxl:text-5xl lg:text-4xl" end={100} duration={4} /> : "0"}+
        <div className="xxl:text-base lg:text-sm">постоянных клиентов</div>
      </div>
      <div className="text-6xl xxl:text-5xl  lg:text-4xl font-bold">
        {startCount ? <CountUp className="text-6xl lg:text-4xl xxl:text-5xl" end={5} duration={4} /> : "0"} лет
        <div className="xxl:text-base lg:text-sm">средний опыт сотрудников</div>
      </div>
      <div className="text-6xl xxl:text-5xl lg:text-4xl font-bold">
        Более {startCount ? <CountUp className="text-6xl xxl:text-5xl lg:text-4xl" end={500} duration={4} /> : "0"}
        <div className="xxltext-base lg:text-sm">успешно завершённых проектов</div>
      </div>
    </div>
  );
};

export default AboutInCount;
