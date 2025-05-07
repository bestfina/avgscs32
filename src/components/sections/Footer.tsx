"use client";

import { useTranslations } from "next-intl";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import Navbar from "../ui/Navbar";
import FirstSection from "../ui/FirstSection";
import Image from "next/image";
import { TransitionLink } from "@/lib/link";

const Footer = () => {
  const t = useTranslations("main.footer");

  return (
    <footer className="border-t border-black" id="contact">
      <div className="container flex flex-col gap-xxs py-sm xl:py-xs sm:gap-xs">
        <div className="flex justify-between items-center sm:flex-col sm:gap-xs">
          <Logo big />
          <Navbar classNameList="md:gap-sm sm:gap-xxs xs:gap-xxxs" classNameItem="xs:text-[13px]" ifSubMenu />
          <div className="flex items-center gap-xxxs sm:items-center">
            <Contact
              className="md:flex-col md:gap-xxxxs"
              size="text-2xl xl:text-xl lg:text-base text-end sm:text-center"
            />
            <Social />
          </div>
        </div>
        <div className="flex justify-between items-end sm:flex-col sm:gap-xxxxs sm:items-center">
          <div className="text-base sm:order-3 sm:text-sm">{t("copyright", { year: new Date().getFullYear() })}</div>
          <FirstSection>
            {t("to_top")}
            <Image
              src="/assets/icons/arrow-up.svg"
              width={15}
              height={15}
              alt={t("arrow_up_alt")}
              className="md:w-3 md:h-3"
            />
          </FirstSection>
          {/* <div className="flex flex-col gap-xxxxs items-end sm:items-center"> */}
          <TransitionLink href="/privacy" className="font-semibold text-base sm:text-sm">
            {t("privacy_policy")}
          </TransitionLink>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
