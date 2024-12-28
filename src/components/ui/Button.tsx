"use client";
import { usePopup } from "@/context/PopupContext";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PopupForm from "./PopupForm";

interface ButtonProps {
  children: ReactNode;
  type: "white" | "blue" | "black" | "border-white" | "none" | string;
  className?: string;
}

const Button = ({ children, type, className }: ButtonProps) => {
  const { openPopup } = usePopup();
  let color = null;
  if (type === "white") {
    color = "bg-TextLight text-TextDark";
  } else if (type === "blue") {
    color = "bg-AccentDark";
  } else if (type === "black") {
    color = "bg-black";
  } else if (type === "border-white") {
    color = "border-2 hover:bg-TextLight hover:text-TextDark hover:opacity-1";
  }

  return (
    <button
      onClick={() => openPopup(<PopupForm />)}
      className={twMerge(
        type !== "none"
          ? "text-TextLight rounded-full font-semibold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 xl:py-2"
          : "",
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
