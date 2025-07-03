import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface FirstSectionProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const FirstSection = ({ children, ...props }: FirstSectionProps) => {
  const scrollToTop = () => {
    const topElement = document.getElementById("global-top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      {...props}
      onClick={(e) => {
        scrollToTop();
        props.onClick?.(e);
      }}
      className={cn("flex gap-xxxxs items-center w-fit text-base sm:text-sm" , props.className)}
    >
      {children}
    </button>
  );
};

export default FirstSection;
