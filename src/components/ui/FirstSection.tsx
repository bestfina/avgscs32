"use client";
import smoothFn from "@/lib/smoothFn";
import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
  return (
    <button onClick={() => smoothFn("hero")} className="flex gap-xxxs items-center w-fit">
      {children}
    </button>
  );
};

export default FirstSection;
