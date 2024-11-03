import Link from "next/link";
import Logo from "../ui/Logo";
import Social from "../ui/Social";

const Footer = () => (
  <footer className="border-t border-TextDark">
    <div className="container flex md:flex-col md:gap-xxs justify-between items-center py-sm xl:py-xs">
      <div className="flex flex-col gap-xs md:gap-xxxs md:order-3">
        <p className="md:text-center max-w-64 xl:max-w-[230px] lg:max-w-[205px] md:hidden">
          Режим работы: Ежедневно с 9:00 до 19:00
        </p>
        <p className="xl:text-sm md:text-center">
          CortexDigital © {new Date().getFullYear()} | ИП &quot;CortexDigital&quot; ИНН: 7735172030
        </p>
      </div>
      <Logo big className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 md:order-1" />
      <div className="flex flex-col items-end md:items-center gap-xs md:gap-xxxxs md:order-2">
        <div className="flex items-center gap-xs md:flex-col md:gap-xxxxs">
          <div className="flex flex-col items-end md:items-center md:gap-0">
            <p className="text-center max-w-[205px] hidden md:block">Режим работы: Ежедневно с 9:00 до 19:00</p>
            <Link href="mailto:info@CortexDigital" className="text-big-semibold">
              info@CortexDigital
            </Link>
            <Link href="tel:+7 999 999 99 99" className="text-big-semibold">
              +7 999 999 99 99
            </Link>
          </div>
          <Social className="hidden md:flex" />
        </div>
        <Link href="/privacy" scroll={false} className="font-semibold text-lg xl:text-sm">
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
