"use client";
import { usePopup } from "@/context/PopupContext";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import PopupForm from "./PopupForm";

interface ButtonProps {
  children: ReactNode;
<<<<<<< HEAD
  type: "white" | "blue" | "black" | "blue-light" | "border-white" | string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, type, className, onClick }: ButtonProps) => {
=======
  type: "white" | "blue" | "lightBlue" | "black" | "none";
  className?: string;
}

const Button = ({ children, type, className }: ButtonProps) => {
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
  const { openPopup } = usePopup();
  let color = null;
  if (type === "white") {
    color = "bg-TextLight text-TextDark";
  } else if (type === "blue") {
<<<<<<< HEAD
    color = "bg-AccentDark";
  } else if (type === "black") {
    color = "bg-black/80 hover:bg-black hover:opacity-1";
  } else if (type === "blue-light") {
    color = "bg-AccentLight";
  } else if (type === "border-white") {
    color = "border-2 hover:bg-TextLight hover:text-TextDark hover:opacity-1";
=======
    color = "text-TextLight bg-AccentDark";
  } else if (type === "lightBlue") {
    color = "text-TextLight bg-AccentLight";
  } else if (type === "black") {
    color = "text-TextLight bg-black";
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
  }

  return (
    <button
<<<<<<< HEAD
      onClick={() => {
        if (onClick) {
          onClick();
        }
        openPopup(<PopupForm />);
      }}
      className={twMerge(
        "text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2",
=======
      onClick={() => openPopup(<PopupForm />)}
      className={twMerge(
        type !== "none"
          ? "rounded-full font-semibold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 xl:py-2"
          : "",
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
