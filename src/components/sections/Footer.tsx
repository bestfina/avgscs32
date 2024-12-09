import Link from "next/link";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import FirstSection from "../ui/FirstSection";
import Image from "next/image";
import Button from "../ui/Button";

const Footer = () => (
  <footer className="border-t border-TextDark">
    <div className="container flex sm:flex-col sm:gap-xxs justify-between items-center py-sm xl:py-xs">
      <div className="flex flex-col h-36 sm:h-fit justify-between sm:justify-start sm:gap-xxxxs sm:items-center sm:order-3">
        <p className="sm:text-center max-w-64 xl:max-w-[230px] lg:max-w-[205px] sm:hidden sm:mb-xxxxs">
          Режим работы: Ежедневно с 8:00 до 22:00
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
        <Button type="none" className="underline">
          Заполнить бриф
        </Button>
      </div>
      <div className="flex flex-col h-36 sm:h-fit justify-between sm:gap-xxxs sm:justify-start items-end sm:items-center sm:order-2">
        <div className="flex items-end sm:items-center gap-xxxs flex-col sm:gap-xxxxs">
          <div className="flex flex-col items-end sm:items-center sm:gap-xxxxs">
            <p className="text-center max-w-[205px] hidden sm:block xs:max-w-[180px]">
              Режим работы: Ежедневно с 8:00 до 22:00
            </p>
            <Link href="mailto:info@cortexdigital.net">info@cortexdigital.net</Link>
            <Link href="tel:+7(995)020-33-85">+7 (995) 020-33-85</Link>
          </div>
          <Social className="hidden md:flex" />
        </div>
        <div className="flex gap-xxxs md:hidden">
          <Link href="https://t.me/CORTEX_DIGITAL" target="_blank">
            Телеграм
          </Link>
          <Link
            href="https://wa.me/79950203385?text=%D0%95%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%BE%20%D1%81%209%3A00%20%D0%B4%D0%BE%2019%3A00"
            target="_blank"
          >
            Вацап
          </Link>
        </div>
        <Link href="/privacy" className="font-semibold">
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
