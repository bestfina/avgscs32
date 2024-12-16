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
       border-BgLight font-semibold py-4 px-6 text-center flex items-center justify-center rounded-full xxl:px-4 xxl:py-3 xl:px-3 lg:p-2 xs:text-[13px]`,
      className
    )}
  >
    {children}
  </div>
);

export default AdvantagesBlock;
