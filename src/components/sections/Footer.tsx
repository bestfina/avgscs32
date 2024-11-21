import Link from "next/link";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import FirstSection from "../ui/FirstSection";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-TextDark">
    <div className="container flex sm:flex-col sm:gap-xxs justify-between items-center py-sm xl:py-xs">
      <div className="flex flex-col h-36 sm:h-fit justify-between sm:justify-start sm:gap-xxxxs sm:items-center sm:order-3">
        <p className="sm:text-center max-w-64 xl:max-w-[230px] lg:max-w-[205px] sm:hidden">
          Режим работы: Ежедневно с 9:00 до 19:00
        </p>
        <FirstSection>
          Наверх
          <Image
            src="/assets/icons/arrow-up.svg"
            width={22}
            height={22}
            alt="стрелка вверх"
            className="xl:w-4 xl:h-4"
          />
        </FirstSection>
        <p className="sm:text-center">CortexDigital © {new Date().getFullYear()}</p>
      </div>
      <div
        className="flex flex-col h-36 sm:h-fit justify-between sm:justify-start items-center absolute left-1/2 -translate-x-1/2
       sm:relative sm:left-0 sm:translate-x-0 sm:order-1"
      >
        <Logo big />
        <button className="w-fit underline">Заполнить бриф</button>
      </div>
      <div className="flex flex-col h-36 sm:h-fit justify-between sm:gap-xxxxs sm:justify-start items-end sm:items-center sm:order-2">
        <div className="flex items-end sm:items-center gap-xxxs flex-col sm:gap-xxxxs">
          <div className="flex flex-col items-end sm:items-center sm:gap-xxxxs">
            <p className="text-center max-w-[205px] hidden sm:block">Режим работы: Ежедневно с 9:00 до 19:00</p>
            <Link href="mailto:info@CortexDigital">info@CortexDigital</Link>
            <Link href="tel:+7 999 999 99 99">+7 999 999 99 99</Link>
          </div>
          <Social className="hidden md:flex" />
        </div>
        <div className="flex gap-xxxs md:hidden">
          <Link href="mailto:info@CortexDigital">Телеграм</Link>
          <Link href="tel:+7 999 999 99 99">Вацап</Link>
        </div>
        <Link href="/privacy" scroll={false} className="font-semibold">
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
