"use client";

import { useTranslations } from "next-intl";
import Logo from "../ui/Logo";
import { TransitionLink } from "@/lib/link";
import SocialFooter from "../ui/SocialFooter";
import FolderIcon from "public/assets/icons/folder.svg";
import FirstSection from "../ui/FirstSection";
import { FOOTER_PAGE_LINKS, SERVICE_SUB_MENU } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations();

  const downloadPresentationWithFetch = async () => {
    try {
      const response = await fetch("/assets/files/CortexDigital.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CortexDigital.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  };

  return (
    <footer className="bg-[#0E202C] text-white" id="contact">
      <div className="container">
        {/* Upper Section */}
        <div className="flex flex-wrap justify-between py-16 gap-8 lg:py-12 md:py-10 md:flex-wrap md:gap-x-6 md:[&>div]:mb-4 sm:pt-8 sm:pb-4 sm:flex-col">
          <div className="flex-1 min-w-[200px] max-w-[300px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none sm:hidden">
            <Logo big light />
          </div>

          <div className="flex-1 min-w-[200px] max-w-[250px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none sm:mb-6">
            <h3
              className="text-[20px] font-semibold text-white mb-4 leading-tight sm:text-[18px] md:text-end sm:text-start sm:mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {t("main.footer.services")}
            </h3>
            <nav className="space-y-3 sm:space-y-2">
              {SERVICE_SUB_MENU?.map(item => (
                <TransitionLink
                  key={item.id}
                  href={item.url}
                  className="block text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed sm:text-[15px] md:text-end sm:text-start"
                >
                  {t(item.title)}
                </TransitionLink>
              ))}
            </nav>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[250px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none sm:mb-6">
            <nav className="space-y-3 sm:space-y-2">
              {FOOTER_PAGE_LINKS.map(link => (
                <TransitionLink
                  key={link.url}
                  href={link.url}
                  className="block text-[16px] text-white hover:text-[#FFFFFF99] transition-colors duration-300 leading-relaxed sm:text-[15px]"
                >
                  {t(link.label)}
                </TransitionLink>
              ))}
            </nav>
          </div>

          <div className="flex-1 min-w-[250px] max-w-[300px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none">
            <div className="space-y-6 sm:space-y-4">
              <div className="text-end sm:text-start">
                <a
                  href="tel:+79950203385"
                  target="_blank"
                  className="text-[22px] font-semibold text-white mb-2 block leading-tight hover:text-[#FFFFFF99] transition-colors duration-300 sm:text-[18px]"
                >
                  +7 (995) 020-33-85
                </a>
                <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">
                  {t("main.footer.call_us")}
                </p>
              </div>

              <div className="text-end sm:text-start">
                <a
                  href="mailto:info@cortexdigital.net"
                  target="_blank"
                  className="text-[18px] font-semibold text-white mb-2 block leading-tight hover:text-[#FFFFFF99] transition-colors duration-300 sm:text-[16px]"
                >
                  info@cortexdigital.net
                </a>
                <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">
                  {t("main.footer.write_us")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block py-2">
          <div className="w-full flex items-end justify-start gap-4 sm:mb-6">
            <SocialFooter />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-between py-8 gap-8 lg:py-8 md:py-6 md:flex-wrap md:gap-x-6 md:[&>div]:mb-4 sm:py-4 sm:flex-col">
          <div className="flex-1 min-w-[200px] max-w-[300px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none sm:mb-2">
            <div className="space-y-2 sm:space-y-1">
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">ИП Власов Герман Максимович</p>
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">ИНН 325003067839</p>
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">ОГРНИП 325320000006073</p>
            </div>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[250px] md:min-w-[45%] md:max-w-[45%] md:text-end sm:text-start sm:max-w-none sm:mb-6">
            <h3
              className="text-[18px] font-semibold text-white mb-1 leading-tight sm:text-[16px] sm:mb-2"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {t("main.footer.company_address")}
            </h3>
            <div className="space-y-1">
              <Link
                href="https://yandex.ru/maps/-/CHs2JWyZ"
                target="_blank"
                aria-label="Адресс: г. Москва, ул. Московская 205, оф. 205"
                className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]"
              >
                г. Брянск
                <br /> ул. Советская 49/1
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[250px] md:min-w-[45%] md:max-w-[45%] sm:max-w-none sm:mb-6 sm:flex sm:justify-center">
            <button
              onClick={downloadPresentationWithFetch}
              className="flex items-center justify-center gap-3 bg-[#263641] text-white text-[16px] hover:opacity-[0.7] transition-opacity duration-300 sm:text-[18px] bg-[#263641] px-[20px] rounded-lg h-[60px] md:h-[50px] md:text-[15px] sm:h-[60px] sm:text-[18px] w-full text-start"
            >
              <FolderIcon width={16} height={16} alt="Download" className="w-4 h-4 flex-shrink-0" />
              {t("main.footer.download_presentation")}
            </button>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[300px] md:min-w-[45%] md:max-w-[45%] sm:hidden">
            <div className="flex items-center justify-end gap-4">
              <SocialFooter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-wrap justify-between py-8 gap-8 lg:py-12 md:py-8 md:flex-wrap md:gap-x-6 sm:py-6 sm:flex-col border-t border-[#FFFFFF33] relative">
          <div className="w-full flex flex-wrap justify-between items-center gap-6 sm:flex-col sm:gap-4 sm:items-start">
            <div className="order-1 sm:order-3 sm:max-w-none sm:w-3/5">
              <div className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">
                <span className="text-white font-medium">CortexDigital © {new Date().getFullYear()}</span>
                <br />
                <span>All Rights Reserved</span>
              </div>
            </div>

            <div className="order-2 sm:max-w-none md:text-end sm:text-start">
              <TransitionLink
                href="/privacy"
                className="text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed sm:text-[14px]"
              >
                {t("main.footer.privacy_policy")}
              </TransitionLink>
            </div>

            <div className="order-4 justify-end sm:max-w-none">
              <FirstSection
                withIcon
                className="text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed"
              >
                <span className="sm:hidden">{t("main.footer.to_top")}</span>
              </FirstSection>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
