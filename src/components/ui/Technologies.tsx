"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Technologies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const technologies = [
    "HTML",
    "CSS",
    "Scss/Less",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript/TypeScript",
    "React/Next",
    "Vue/Nuxt",
    "Node.js/NestJS",
    "Wordpress/Bitrix/Joomla",
    "Tilda/Webflow",
    "Python/Django",
    "Php/Laravel",
  ];
  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const width = element.scrollWidth / 2;

      gsap.fromTo(
        element,
        { x: 0 },
        {
          x: -width,
          repeat: -1,
          duration: 20,
          ease: "linear",
        }
      );
    }
  }, []);
  return (
    <div className="relative overflow-hidden w-full">
      <div ref={scrollRef} className="flex gap-xxs sm:gap-xxxs w-max" style={{ display: "inline-flex" }}>
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="bg-slate-100 text-gray-800 px-6 py-2 rounded-lg shadow-sm text-lg lg:text-base sm:px-4 sm:py-1 xs:text-sm"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
