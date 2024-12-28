"use client";
import { useEffect, useState, useCallback } from "react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import Social from "../ui/Social";
import { twMerge } from "tailwind-merge";
import Contact from "../ui/Contact";
import CloseIcon from "../ui/icon/CloseIcon";
import BurgerMenuIcon from "../ui/icon/BurgerMenuIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = currentScrollPos < prevScrollPos;

    setIsVisible(isScrollingUp || currentScrollPos < 120);
    setAtTop(currentScrollPos < 120);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isOpen]);

  const handleToggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header
      className={twMerge(
        "fixed z-10 w-full transition-transform duration-300",
        isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible",
        atTop ? "bg-transparent" : "bg-white border-b-2 border-black",
        isOpen && "bg-white border-b-2 border-black"
      )}
    >
      <div
        className={twMerge(
          "container flex items-center justify-between py-4 xl:py-[10px] transition-colors duration-300",
          isOpen && "bg-white border-b-2 border-black"
        )}
      >
        <div className="flex items-center gap-md">
          <Logo scroll atTop={atTop} isOpen={isOpen} />
          <Navbar className="md:hidden" atTop={atTop} />
        </div>
        <div className="flex flex-col items-end gap-xxxxs md:hidden">
          <div className="flex gap-xs xl:gap-xxs lg:gap-xxxs items-center">
            <Button type={twMerge(atTop ? "border-white" : "black")}>Получить консультацию</Button>
            <Social />
          </div>
          <Contact size="text-lg lg:text-base" atTop={atTop} />
        </div>
        <button
          className={twMerge(
            "z-20 focus:outline-none hidden md:block transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          onClick={handleToggleMenu}
        >
          {isOpen ? <CloseIcon /> : <BurgerMenuIcon className={twMerge(atTop ? "text-TextLight" : "text-TextDark")} />}
        </button>
      </div>
      <div
        className={twMerge(
          "fixed container inset-0 hidden md:flex bg-white -z-10 h-screen overflow-y-auto pt-28 pb-sm flex-col gap-8 transform transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Navbar classNameList="flex-col" />
        <Social />
        <Contact />
        <Button type="blue">Получить консультацию</Button>
      </div>
    </header>
  );
};

export default Header;
