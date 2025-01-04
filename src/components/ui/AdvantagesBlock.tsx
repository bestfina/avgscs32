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
<<<<<<< HEAD
       border-BgLight font-semibold py-2 px-5 xxl:px-4 text-center flex items-center justify-center rounded-full`,
=======
       border-BgLight font-semibold py-4 px-6 text-center flex items-center justify-center rounded-full xxl:px-4 xxl:py-3 xl:px-3 lg:p-2 xs:text-[13px]`,
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
      className
    )}
  >
    {children}
  </div>
);

export default AdvantagesBlock;
