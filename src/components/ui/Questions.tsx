"use client";

import { FAQ } from "@/constants";
import { useEffect, useState } from "react";
import InnerIcon from "../ui/InnerIcon";
import { twMerge } from "tailwind-merge";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  useEffect(() => {
    setActiveIndex(window.innerWidth > 1022 ? 1 : 0);
  }, []);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-xs md:gap-xxxs">
      {FAQ.map(({ id, title, description }) => (
        <div key={id} className="border-2 border-black rounded-3xl shadow-sm">
          <div
            onClick={() => toggleAccordion(id)}
            className="w-full cursor-pointer flex gap-xxxxs justify-between items-center p-4 md:p-3 text-left text-TextDark font-medium"
          >
            <h5 className="w-fit">{title}</h5>
            <InnerIcon className={activeIndex === id ? "bg-AccentDark pb-[6px]" : ""}>
              {activeIndex === id ? "−" : "+"}
            </InnerIcon>
          </div>
          <div
            className={`overflow-x-hidden faq-rewiew rounded-b-[22px] duration-500 ${
              activeIndex === id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className={twMerge("border-t-2 border-black", activeIndex !== id ? "border-0 duration-100" : null)}>
              {description.map(({ subject, text }, index) => (
                <p key={index} className="px-4 py-2 first:pt-4 last:pb-4 text-TextDark">
                  {subject && <b>{subject}</b>}
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
