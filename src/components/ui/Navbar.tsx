"use client";
import { LINK } from "@/constants";
import smoothFn from "@/lib/smoothFn";
import Link from "next/link";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
  targetButtonRef?: RefObject<HTMLLabelElement>;
  atTop?: boolean;
  classNameList?: string;
}

const Navbar = ({ className, classNameList, targetButtonRef, atTop }: NavbarProps) => (
  <nav className={className}>
    <ul className={twMerge("flex gap-md lg:gap-sm", classNameList)}>
      {LINK.map(({ title, id, url }) => (
        <li key={id} className="hover:-translate-y-1 duration-500">
          <Link
            href={"#" + url}
            className={twMerge("md:text-xl", atTop ? "text-TextLight" : "text-TextDark")}
            scroll={false}
            onClick={() => {
              if (targetButtonRef?.current) {
                targetButtonRef.current.click();
              }
              smoothFn(url);
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
