import Link from "next/link";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import Navbar from "../ui/Navbar";
import FirstSection from "../ui/FirstSection";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-black" id="contact">
    <div className="container flex flex-col gap-xxs py-sm xl:py-xs sm:gap-xs">
      <div className="flex justify-between items-center sm:flex-col sm:gap-xs">
        <Logo big />
        <Navbar classNameList="md:gap-sm sm:gap-xxs xs:gap-xxxs" classNameItem="xs:text-[13px]" />
        <div className="flex flex-col items-end gap-xxxs md:gap-xxxxs sm:items-center">
          <Contact className="md:flex-col md:gap-xxxxs" size="text-xl lg:text-base text-end sm:text-center" />
          <Social />
        </div>
      </div>

      <div className="flex justify-between sm:flex-col sm:gap-xxxxs sm:items-center">
        <p className="text-base sm:order-3 sm:text-sm">CortexDigital © {new Date().getFullYear()}</p>
        <FirstSection>
          наверх
          <Image
            src="/assets/icons/arrow-up.svg"
            width={15}
            height={15}
            alt="стрелка вверх"
            className="md:w-3 md:h-3"
          />
        </FirstSection>
        <Link href="/privacy" className="font-semibold text-base sm:text-sm">
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
