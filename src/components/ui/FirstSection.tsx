"use client";
import smoothFn from "@/lib/smoothFn";
<<<<<<< HEAD
import { usePathname } from "next/navigation";
=======
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
<<<<<<< HEAD
  const currentPath = usePathname();
  return (
    <button
      onClick={() => smoothFn("hero", currentPath)}
      className="flex gap-xxxxs items-center w-fit text-base sm:text-sm"
    >
=======
  return (
    <button onClick={() => smoothFn("hero")} className="flex gap-xxxs items-center w-fit">
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
      {children}
    </button>
  );
};

export default FirstSection;
