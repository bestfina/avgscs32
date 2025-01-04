"use client";
import Navbar from "../Navbar";
import Button from "../Button";
import Social from "../Social";
import Contact from "../Contact";
import { useRef } from "react";
import "./mob-menu.css";

const MobMenu = () => {
  const targetButtonRef = useRef<HTMLLabelElement>(null);

  return (
    <div className="hidden md:block">
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label ref={targetButtonRef} htmlFor="menu-icon"></label>
      <div
        className="nav fixed top-7 xs:top-4 xs:right-4 right-6 flex gap-xs flex-col items-center justify-center 
    z-10 overflow-hidden bg-AccentLight w-16 h-16 xs:w-14 xs:h-14 m-0"
      >
        <Navbar targetButtonRef={targetButtonRef} />
        <Button type="blue">Бесплатная консультация</Button>
        <Social className="burger-soc" />
        <Contact className="burger-contact items-center" />
      </div>
    </div>
  );
};

export default MobMenu;
