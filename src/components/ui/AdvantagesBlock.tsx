import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AdvantagesBlockProps {
  children: ReactNode;
  className?: string;
}

const AdvantagesBlock = ({ children, className }: AdvantagesBlockProps) => (
  <div
    className={twMerge(
      `bg-transparent text-TextLight border-[1px]
       border-BgLight font-semibold py-2 px-5 xxl:px-4 text-center flex items-center justify-center rounded-full`,
      className
    )}
  >
    {children}
  </div>
);

export default AdvantagesBlock;
