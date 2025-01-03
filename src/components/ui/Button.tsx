"use client";
import { usePopup } from "@/context/PopupContext";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PopupForm from "./PopupForm";

interface ButtonProps {
  children: ReactNode;
  type: "white" | "blue" | "black" | "blue-light" | "border-white" | string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, type, className, onClick }: ButtonProps) => {
  const { openPopup } = usePopup();
  let color = null;
  if (type === "white") {
    color = "bg-TextLight text-TextDark";
  } else if (type === "blue") {
    color = "bg-AccentDark";
  } else if (type === "black") {
    color = "bg-black/80 hover:bg-black hover:opacity-1";
  } else if (type === "blue-light") {
    color = "bg-AccentLight";
  } else if (type === "border-white") {
    color = "border-2 hover:bg-TextLight hover:text-TextDark hover:opacity-1";
  }

  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        openPopup(<PopupForm />);
      }}
      className={twMerge(
        "text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2",
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
