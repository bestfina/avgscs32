import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import TopIcon from 'public/assets/icons/to-top.svg'

interface FirstSectionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean;
}

const FirstSection = ({ children, withIcon = false, ...props }: FirstSectionProps) => {
  const scrollToTop = () => {
    const topElement = document.getElementById("global-top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      {...props}
      onClick={e => {
        scrollToTop();
        props.onClick?.(e);
      }}
      className={cn("flex items-center w-fit text-base sm:text-sm", props.className , withIcon && 'gap-4')}
    >
      {children}
      {withIcon && (
        <TopIcon/>
      )}
    </button>
  );
};

export default FirstSection;
