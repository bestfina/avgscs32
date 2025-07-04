"use client";

import { useTranslations } from "next-intl";
import Logo from "../ui/Logo";
import { TransitionLink } from "@/lib/link";
import SocialFooter from "../ui/SocialFooter";

import FolderIcon from "public/assets/icons/folder.svg";
import FirstSection from "../ui/FirstSection";
import { FOOTER_PAGE_LINKS, SERVICE_SUB_MENU } from "@/constants";

const Footer = () => {
  const t = useTranslations();

  const downloadPresentationWithFetch = async () => {
    try {
      const response = await fetch("/assets/files/презентация_CortexDigital.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "презентация_CortexDigital.pdf";
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
      <div className="container ">
        {/* Upper Section - Main Content */}
        <div className="flex flex-wrap justify-between py-16 gap-8 lg:py-12 sm:py-8 sm:flex-col">
          {/* Logo Column */}
          <div className="flex-1 min-w-[200px] max-w-[300px] sm:max-w-none sm:mb-6">
            <Logo big light />
          </div>

          {/* Services Column */}
          <div className="flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-6">
            <h3
              className="text-[20px] font-semibold text-white mb-4 leading-tight sm:text-[18px] sm:mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {t("main.footer.services")}
            </h3>
            <nav className="space-y-3 sm:space-y-2">
              {SERVICE_SUB_MENU?.map(item => (
                <TransitionLink
                  key={item.id}
                  href={item.url}
                  className="block text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed sm:text-[15px]"
                >
                  {t(item.title)}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Pages Column */}
          <div className="flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-6">
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

          {/* Contact Info Column */}
          <div className="flex-1 min-w-[250px] max-w-[300px] sm:max-w-none">
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

        {/* Social Media - Mobile Only */}
        <div className="hidden sm:block py-2">
          <div className="w-full flex items-end justify-start gap-4 sm:mb-6">
            <SocialFooter />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-between py-8 gap-8 lg:py-8 sm:py-4 sm:flex-col">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px] max-w-[300px] sm:max-w-none sm:mb-2">
            <div className="space-y-2 sm:space-y-1">
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">
                ИП Волков Александр <br className="sm:hidden"/> Александрович
              </p>
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">ОГРН 000000000000</p>
              <p className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">ИНН 000000000000</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-6">
            <h3
              style={{ fontFamily: "var(--font-nunito)" }}
              className="text-[18px] font-semibold text-white mb-1 leading-tight sm:text-[16px] sm:mb-2"
            >
              {t("main.footer.company_address")}
            </h3>
            <div className="space-y-1">
              <a
                href="https://yandex.uz/maps/-/CHsgaCO6"
                target="_blank"
                aria-label="Адресс: г. Москва, ул. Московская 205, оф. 205"
                className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]"
              >
                г. Москва, ул. Московская <br /> 205, оф. 205
              </a>
            </div>
          </div>

          {/* Download Presentation Button */}
          <div className="flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-6 sm:flex sm:justify-center">
            <button
              onClick={downloadPresentationWithFetch}
              className="flex items-center justify-center gap-3 bg-transparent text-white text-[16px] hover:opacity-[0.7] transition-opacity duration-300 sm:text-[18px] bg-[#263641] px-[20px] rounded-lg h-[60px] w-full"
            >
              <FolderIcon width={16} height={16} alt="Download" className="w-4 h-4 flex-shrink-0" />
              {t("main.footer.download_presentation")}
            </button>
          </div>

          {/* Social Icons - Desktop Only */}
          <div className="flex-1 min-w-[200px] max-w-[300px] sm:hidden">
            <div className="flex items-center justify-end gap-4">
              <SocialFooter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-wrap justify-between py-16 gap-8 lg:py-12 sm:py-8 sm:flex-col border-t border-[#FFFFFF33] relative">
          <div className="w-full flex flex-wrap justify-between items-center gap-6 sm:flex-col sm:gap-4 sm:items-start">
            {/* Copyright */}
            <div className="order-1 sm:order-3 flex-1 min-w-[200px] max-w-[300px] sm:max-w-none sm:mb-3 sm:w-3/5">
              <div className="text-[16px] text-[#FFFFFF99] leading-relaxed sm:text-[14px]">
                <span className="text-white font-medium">CortexDigital © {new Date().getFullYear()}</span>
                <br />
                <span>All Rights Reserved</span>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="order-2 flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-3 sm:w-1/2">
              <TransitionLink
                href="/privacy"
                className="text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed sm:text-[14px]"
              >
                {t("main.footer.privacy_policy")}
              </TransitionLink>
            </div>

            {/* Privacy Consent */}
            <div className="order-3 sm:order-1 flex-1 min-w-[200px] max-w-[250px] sm:max-w-none sm:mb-3 sm:w-3/5">
              <TransitionLink
                href="/"
                className="text-[16px] text-[#FFFFFF99] hover:text-white transition-colors duration-300 leading-relaxed sm:text-[14px]"
              >
                {t("main.footer.privacy_consent")}
              </TransitionLink>
            </div>

            {/* Back to Top */}
            <div className="order-4 flex w-full justify-end min-w-[250px] max-w-[300px] sm:max-w-none sm:absolute sm:bottom-10 sm:right-[3px]">
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
