"use client";
import smoothFn from "@/lib/smoothFn";
import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
  return (
    <button onClick={() => smoothFn("hero")} className="flex gap-xxxxs items-center w-fit text-base sm:text-sm">
      {children}
    </button>
  );
};

export default FirstSection;
