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
        `text-6xl duration-500 rounded-full w-16 h-16 xl:w-14 xl:h-14 lg:min-w-12 lg:min-h-12 lg:max-w-12 lg:max-h-12 
        lg:text-4xl flex justify-center items-center`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default InnerIcon;
