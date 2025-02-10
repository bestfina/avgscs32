import Link from "next/link";
import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
  return (
    <Link href="#hero" className="flex gap-xxxxs items-center w-fit text-base sm:text-sm">
      {children}
    </Link>
  );
};

export default FirstSection;
