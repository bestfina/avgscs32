"use client";

import { FAQ } from "@/constants";
import { useState } from "react";
import InnerIcon from "../ui/InnerIcon";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section id="faq">
      <div className="container flex flex-col gap-md lg:gap-xs">
        <h2>Ответы на частые вопросы</h2>
        <div className="flex flex-col gap-xs md:gap-xxxs">
          {FAQ.map(({ id, title, text }) => (
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
                <p className="p-4 md:p-3 bg-gray-50">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
