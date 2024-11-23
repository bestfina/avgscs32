"use client";
import { usePopup } from "@/context/PopupContext";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PopupForm from "./PopupForm";

interface ButtonProps {
  children: ReactNode;
  type: "white" | "blue" | "lightBlue" | "none";
  className?: string;
}

const Button = ({ children, type, className }: ButtonProps) => {
  const { openPopup } = usePopup();
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
      onClick={() => openPopup(<PopupForm />)}
      className={twMerge(
        type !== "none"
          ? "rounded-full font-semibold w-80 py-3 hover:opacity-80 duration-500 xl:w-72 lg:w-60 xl:py-2"
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
