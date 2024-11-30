import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InnerSpan {
  children: ReactNode;
  className?: string;
}

const InnerSpan = ({ className, children }: InnerSpan) => {
  return (
    <span className={twMerge("bg-AccentDark text-TextLight px-2 py-1 whitespace-nowrap rounded-full", className)}>
      {children}
    </span>
  );
};

export default InnerSpan;
