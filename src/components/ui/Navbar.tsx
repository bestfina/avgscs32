"use client";
import { LINK } from "@/constants";
import smoothFn from "@/lib/smoothFn";
import Link from "next/link";
<<<<<<< HEAD
import { usePathname } from "next/navigation"; // Для получения текущего пути
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
  atTop?: boolean;
  classNameList?: string;
  classNameItem?: string;
  onClick?: () => void;
}

const Navbar = ({ className, classNameList, atTop, onClick, classNameItem }: NavbarProps) => {
  const currentPath = usePathname();

  return (
    <nav className={className}>
      <ul className={twMerge("flex gap-md lg:gap-sm", classNameList)}>
        {LINK.map(({ title, id, url }) => (
          <li key={id} className="hover:-translate-y-[6px] md:hover:translate-y-0 duration-500">
            <Link
              href={url}
              className={twMerge(classNameItem, atTop ? "text-TextLight" : "text-TextDark")}
              scroll={false}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
                smoothFn(url, currentPath);
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
=======
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
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc

export default Navbar;
