"use client";

import { FAQ } from "@/constants";
import { useState } from "react";
import InnerIcon from "../ui/InnerIcon";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };
  return (
    <div className="flex flex-col gap-xs md:gap-xxxs">
      {FAQ.map(({ id, title, description }) => (
        <div key={id} className="border border-gray-200 rounded-3xl shadow-sm">
          <div
            onClick={() => toggleAccordion(id)}
            className="w-full cursor-pointer flex gap-xxxxs justify-between items-center p-4 md:p-3 text-left text-gray-800 font-medium"
          >
            <h5 className="w-fit">{title}</h5>
            <InnerIcon className={activeIndex === id ? "bg-AccentDark pb-[6px]" : ""}>
              {activeIndex === id ? "−" : "+"}
            </InnerIcon>
          </div>
          <div
            className={`overflow-hidden rounded-b-3xl transition-max-height duration-500 ease-in-out ${
              activeIndex === id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div>
              {description.map(({ subject, text }, index) => (
                <p key={index} className="px-4 py-2 first:pt-4 last:pb-4 bg-gray-50">
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
