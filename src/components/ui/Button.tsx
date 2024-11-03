import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  type: "white" | "blue" | "lightBlue";
  className?: string;
  onclick?: () => void;
}

const Button = ({ children, type, className, onclick }: ButtonProps) => {
  let color = null;

  if (type === "white") {
    color = "text-TextDark bg-BgLight";
  } else if (type === "blue") {
    color = "text-TextLight bg-AccentDark";
  } else if (type === "lightBlue") {
    color = "text-TextLight bg-AccentLight";
  }

  return (
    <button
      onClick={onclick}
      className={twMerge(
        "rounded-full font-semibold w-80 py-3 hover:opacity-85 duration-300 xl:w-72 lg:w-60 lg:py-2",
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
