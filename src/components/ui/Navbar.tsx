"use client";
import { LINK } from "@/constants";
import smoothFn from "@/lib/smoothFn";
import Link from "next/link";
import { RefObject } from "react";

interface NavbarProps {
  className?: string;
  targetButtonRef?: RefObject<HTMLLabelElement>;
}

const Navbar = ({ className, targetButtonRef }: NavbarProps) => (
  <nav className={className}>
    <ul className="flex gap-sm xl:gap-xs lg:gap-xxs">
      {LINK.map(({ title, id, url }) => (
        <li key={id} className=" hover:-translate-y-1 duration-500">
          <Link
            href={"#" + url}
            className="text-[19px] xl:text-[17px] lg:text-[15px] md:text-TextLight md:text-xl"
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
