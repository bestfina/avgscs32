import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AdvantagesBlockProps {
  children: ReactNode;
  className?: string;
}

const AdvantagesBlock = ({ children, className }: AdvantagesBlockProps) => (
  <div
    className={twMerge(
      `font-semibold py-2 px-5 xxl:px-4 text-center rounded-full border border-black w-fit text-[22px] xxl:text-[20px] xl:text-[17px] lg:text-sm lg:leading-4  xl:py-1 xl:px-3 lg:px-2`,
      className
    )}
  >
    {children}
  </div>
);

export default AdvantagesBlock;
