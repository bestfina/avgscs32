import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InnerSpan {
  children: ReactNode;
  className?: string;
}

const InnerSpan = ({ className, children }: InnerSpan) => {
  return (
    <span
      className={twMerge(
<<<<<<< HEAD
        "bg-AccentDark text-TextLight px-3 w-fit whitespace-nowrap inline-block rounded-full",
=======
        "bg-AccentDark text-TextLight px-3 py-1 w-fit whitespace-nowrap inline-block rounded-full",
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
        className
      )}
    >
      {children}
    </span>
  );
};

export default InnerSpan;
