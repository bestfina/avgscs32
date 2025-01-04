"use client";
import smoothFn from "@/lib/smoothFn";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
  const currentPath = usePathname();
  return (
    <button
      onClick={() => smoothFn("hero", currentPath)}
      className="flex gap-xxxxs items-center w-fit text-base sm:text-sm"
    >
      {children}
    </button>
  );
};

export default FirstSection;
