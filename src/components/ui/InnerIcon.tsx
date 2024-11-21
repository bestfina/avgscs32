import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InnerIconProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const InnerIcon = ({ children, onClick, className }: InnerIconProps) => {
  return (
    <button
      className={twMerge(
        `text-6xl bg-AccentDark/60 backdrop-blur-sm hover:bg-AccentDark duration-500 rounded-full min-w-16 max-w-16 
        max-h-16 min-h-16 lg:min-w-11 lg:min-h-11 lg:max-w-11 lg:max-h-11 lg:text-4xl flex justify-center items-center text-TextLight`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default InnerIcon;
