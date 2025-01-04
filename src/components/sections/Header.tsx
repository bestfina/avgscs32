"use client";
import { useEffect, useState, useCallback } from "react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
<<<<<<< HEAD
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
    if (window.innerWidth > 1200) {
      setIsVisible(isScrollingUp || currentScrollPos < 120);
      setAtTop(currentScrollPos < 120);
    } else {
      setIsVisible(isScrollingUp || currentScrollPos < 30);
      setAtTop(currentScrollPos < 30);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const currentScrollPos = window.scrollY;
    setAtTop(currentScrollPos < 120);
  }, []);

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
        atTop ? "bg-transparent" : "bg-white border-b border-black"
      )}
    >
      <div
        className={twMerge(
          "container flex items-center justify-between py-4 xl:py-xxs md:py-xxxs transition-colors duration-300",
          isOpen && "sm:bg-slate-100 sm:border-b-2 sm:border-black"
        )}
      >
        <div className="flex items-center gap-md md:gap-xs">
          <Logo atTop={atTop} isOpen={isOpen} />
          <Navbar className="sm:hidden" classNameItem="md:text-sm" classNameList="md:gap-[23px]" atTop={atTop} />
        </div>
        <div className="flex flex-col items-end gap-xxxxs">
          <div className="flex gap-xs xl:gap-xxs lg:gap-xxxs items-center">
            <Button className="sm:hidden" type={twMerge(atTop ? "border-white" : "black")}>
              Получить консультацию
            </Button>
            <Social className="md:hidden" />
          </div>
          <Contact size="text-lg lg:text-base md:hidden" atTop={atTop} />
        </div>
        <button
          className={twMerge(
            "z-20 focus:outline-none hidden sm:block transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          onClick={handleToggleMenu}
        >
          {isOpen ? <CloseIcon /> : <BurgerMenuIcon className={twMerge(atTop ? "text-TextLight" : "text-TextDark")} />}
        </button>
      </div>
      <div
        className={twMerge(
          "fixed container inset-0 hidden sm:flex bg-slate-100 -z-10 h-screen overflow-y-auto pt-28 pb-sm flex-col gap-8 md:gap-xs transform transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Navbar classNameList="flex-col" classNameItem="text-2xl" onClick={() => setIsOpen(!isOpen)} />
        <Social />
        <Contact />
        <Button
          type="blue"
          className="x:w-full"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Получить консультацию
        </Button>
      </div>
=======
import MobMenu from "../ui/MobMenu/MobMenu";
import Social from "../ui/Social";
const Header = () => {
  return (
    <header className="fixed z-10 w-full p-sm xl:p-xs lg:p-xxxs xs:p-xxxxs">
      {/* <Image src="/assets/images/new-year.jpeg" width={2000} height={100} alt="" className="absolute" /> */}
      <div
        className="container bg-BgLight flex items-center justify-between rounded-full py-4 xl:py-[10px]
         xs:py-xxxxs shadow-[0px_0px_50px_0px_rgba(0,0,0,0.25)]"
      >
        <Logo scroll />
        <Navbar className="md:hidden" />
        <div className="flex gap-xs xl:gap-xxs lg:gap-xxxs items-center md:hidden">
          <Button type="black">Бесплатная консультация</Button>
          <Social />
        </div>
        <MobMenu />
      </div>
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
    </header>
  );
};

export default Header;
