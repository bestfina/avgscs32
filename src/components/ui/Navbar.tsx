"use client";
import { LINK } from "@/constants";
import { TransitionLink } from "@/lib/link";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
  atTop?: boolean;
  classNameList?: string;
  classNameItem?: string;
  onClick?: () => void;
}

const Navbar = ({ className, classNameList, atTop, onClick, classNameItem }: NavbarProps) => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <nav className={className}>
      <ul className={twMerge("flex gap-md lg:gap-sm xs825:gap-[9px] sm:gap-sm", classNameList)}>
        {LINK.map(({ title, id, url }) => (
          <li key={id} className="hover:-translate-y-[6px] md:hover:translate-y-0 duration-500">
            <TransitionLink
              locale={locale}
              href={url}
              className={twMerge(classNameItem, atTop ? "text-TextLight" : "text-TextDark")}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}
            >
              {t(title)}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
