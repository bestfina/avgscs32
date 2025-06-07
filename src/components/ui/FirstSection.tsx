import { ReactNode } from "react";

interface FirstSectionProps {
  children: ReactNode;
}

const FirstSection = ({ children }: FirstSectionProps) => {
  const scrollToTop = () => {
    const topElement = document.getElementById("global-top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={scrollToTop} className="flex gap-xxxxs items-center w-fit text-base sm:text-sm">
      {children}
    </button>
  );
};

export default FirstSection;