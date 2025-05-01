"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState, useCallback, FC } from "react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import Social from "../ui/Social";
import { twMerge } from "tailwind-merge";
import Contact from "../ui/Contact";
import CloseIcon from "../ui/icon/CloseIcon";
import BurgerMenuIcon from "../ui/icon/BurgerMenuIcon";
import LanguageSelector from "../ui/LanguageSelector";
import { TLocales } from "@/types";
import { usePathname } from "@/i18n/navigation";

type Props = {
  locale: TLocales;
};

const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations("header");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const knownPaths = [
    "/",
    "/contacts",
    "/portfolio",
    "/privacy",
    "/e-commerce",
    "/corporate",
    "/landing-page",
    "/visiting-page",
  ];
  const is404Page = !knownPaths.includes(pathname);

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
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (is404Page) {
      setAtTop(false);
    } else if (pathname === "/contacts" || pathname === "/portfolio" || pathname === "/privacy") {
      setAtTop(false);
    } else {
      setAtTop(window.scrollY < 120);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, pathname, is404Page]);

  useEffect(() => {
    if (!isOpen && !is404Page && pathname !== "/contacts" && pathname !== "/portfolio" && pathname !== "/privacy") {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isOpen, pathname, is404Page]);

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
          "container flex items-center justify-between py-4 xl:py-xxs md:py-xxxs transition-colors duration-300 ",
          isOpen && "sm:bg-slate-100 sm:border-b sm:border-black"
        )}
      >
        <div className="flex items-center gap-md md:gap-xs">
          <Logo atTop={atTop} isOpen={isOpen} />
          <Navbar className="sm:hidden" classNameItem="md:text-sm" classNameList="md:gap-[23px]" atTop={atTop} />
        </div>
        <div className="flex items-center gap-xxxs">
          <div className="flex flex-col items-end gap-xxxxs">
            <div className="flex gap-xs xl:gap-xxs lg:gap-xxxs items-center">
              <LanguageSelector locale={locale} />
              <Button className="sm:hidden" type={twMerge(atTop ? "border-white" : "black")}>
                {t("consultation")}
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
            {isOpen ? (
              <CloseIcon />
            ) : (
              <BurgerMenuIcon className={twMerge(atTop ? "text-TextLight" : "text-TextDark")} />
            )}
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "fixed container inset-0 hidden sm:flex bg-slate-100 -z-10 h-screen overflow-y-auto pt-32 pb-sm flex-col gap-8 md:gap-xs transform transition-transform duration-500",
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
          {t("consultation")}
        </Button>
      </div>
    </header>
  );
};

export default Header;
