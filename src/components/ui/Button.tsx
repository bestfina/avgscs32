"use client";
import { usePopup } from "@/context/PopupContext";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PopupForm from "./PopupForm";

interface ButtonProps {
  children: ReactNode;
  type: "white" | "blue" | "black" | "blue-light" | "border-white" | "border-black" | string;
  className?: string;
  onClick?: () => void;
  openPopupAfterClick?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, className, onClick, openPopupAfterClick = true }) => {
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
    color = "border hover:bg-TextLight hover:text-TextDark hover:opacity-1";
  } else if (type === "border-black") {
    color = "border text-TextDark border-black hover:bg-black/80 hover:text-TextLight hover:opacity-1";
  }

  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }

        if (openPopupAfterClick) {
          openPopup(<PopupForm />);
        }
      }}
      className={twMerge(
        "text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 md:w-56 xl:py-2",
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
