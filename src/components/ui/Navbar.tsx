"use client";
import { LINK } from "@/constants";
import { TransitionLink } from "@/lib/link";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import ArrowLow from "./icon/ArrowLow";
import ArrowIcon from "./icon/ArrowIcon";

interface NavbarProps {
  className?: string;
  ifSubMenu?: boolean;
  atTop?: boolean;
  classNameList?: string;
  classNameItem?: string;
  onClick?: () => void;
}

const Navbar = ({ className, classNameList, atTop, onClick, classNameItem, ifSubMenu }: NavbarProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <nav className={className}>
      <ul className={twMerge("flex gap-md lg:gap-sm md:gap-[12px] sm:gap-xs relative", classNameList)}>
        {LINK.map(({ title, id, url, subMenu }) => (
          <li
            key={id}
            className="relative group hover:-translate-y-[6px] md:hover:translate-y-0 transition-transform duration-300"
          >
            <div className="flex items-center gap-1">
              <TransitionLink
                locale={locale}
                href={url}
                className={twMerge(classNameItem, atTop ? "text-TextLight" : "text-TextDark")}
                onClick={() => onClick?.()}
              >
                {t(title)}
              </TransitionLink>

              {subMenu && !ifSubMenu && (
                <ArrowLow
                  className={twMerge(
                    atTop ? "text-white" : "text-TextDark",
                    "w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180 sm:hidden"
                  )}
                />
              )}
            </div>

            {subMenu && !ifSubMenu && (
              <ul
                className={twMerge(
                  "absolute left-0 top-full mt-2 w-max z-50 sm:hidden",
                  "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                  "transition-all duration-200",
                  "rounded-md shadow-lg bg-white border border-black p-xs flex flex-col gap-xs"
                )}
              >
                {subMenu.map(({ id, title, url }) => (
                  <li key={id} className="group flex items-center px-2 py-1 rounded-md transition-colors animateSvg">
                    <TransitionLink
                      locale={locale}
                      href={url}
                      className={twMerge(
                        classNameItem,
                        "text-TextDark inline-flex flex-shrink-0 group-hover:text-primary"
                      )}
                      onClick={() => onClick?.()}
                    >
                      {t(title)}
                    </TransitionLink>

                    <ArrowIcon className="w-4 h-4 -rotate-90 text-primary transition-all duration-300 opacity-0" />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
