"use client";

import { useTranslations } from "next-intl";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import Image from "next/image";
import { TransitionLink } from "@/lib/link";
import SocialFooter from "../ui/SocialFooter";

import FolderIcon from "public/assets/icons/folder.svg";
import FirstSection from "../ui/FirstSection";

const Footer = () => {
  const t = useTranslations("main.footer");

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
      <div className="container">
        {/* Upper Section */}
        <div className="grid grid-cols-4 gap-8 py-16 lg:grid-cols-2 sm:grid-cols-1 sm:gap-6 sm:py-8">
          {/* Logo */}
          <div className="sm:mb-4">
            <Logo big light />
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[20px] font-semibold text-[#FFFFFF] mb-6 sm:text-[18px] sm:mb-4"
              style={{ fontFamily: "var(--font-nunito) !important" }}
            >
              Услуги
            </h3>
            <nav className="space-y-3 sm:space-y-2">
              <TransitionLink
                href="/landing-page"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Landing Page
              </TransitionLink>
              <TransitionLink
                href="/corporate"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Корпоративный сайт
              </TransitionLink>
              <TransitionLink
                href="/e-commerce"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Интернет-магазин
              </TransitionLink>
            </nav>
          </div>

          {/* Pages */}
          <div>
            <nav className="space-y-3 sm:space-y-2 sm:my-8">
              <TransitionLink
                href="/portfolio"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Кейсы
              </TransitionLink>
              <TransitionLink
                href="/#about"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                О компании
              </TransitionLink>
              <TransitionLink
                href="/#feedback"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Отзывы
              </TransitionLink>
              <TransitionLink
                href="/contacts"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors sm:text-[16px]"
              >
                Контакты
              </TransitionLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-4 sm:mt-4">
            <div className="sm:mb-8">
              <a
                href="tel:+79950203385"
                target="_blank"
                className="text-[24px] font-semibold text-[#FFFFFF] mb-2 sm:text-[20px] block "
              >
                + 7 (995) 020-33-85
              </a>
              <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">Позвоните нам</p>
            </div>

            <div>
              <a
                href="mailto:info@cortexdigital.net&body=привет"
                target="_blank"
                className="text-[20px] font-semibold text-[#FFFFFF] mb-2 sm:text-[16px] block"
              >
                info@cortexdigital.net
              </a>
              <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">Напишите нам</p>
            </div>
          </div>
        </div>

        {/* Social Media - Mobile Only */}
        <div className="hidden sm:block py-6 border-t border-[#FFFFFF66]">
          <div className="flex items-center gap-4">
            <SocialFooter />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-4 gap-8 py-12 lg:grid-cols-2 sm:grid-cols-1 sm:gap-6 sm:py-6 items-center">
          {/* Company Info */}
          <div className="space-y-2 sm:space-y-1">
            <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">
              ИП Волков Александр <br className="sm:hidden" />
              <span>Александрович</span>
            </p>
            {/* <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px] sm:inline sm:ml-1">
              <span className="hidden sm:inline">Александрович</span>
            </p> */}
            <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">ОГРН 000000000000</p>
            <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">ИНН 000000000000</p>
          </div>

          {/* Address */}
          <div>
            <h3
              style={{ fontFamily: "var(--font-nunito) !important" }}
              className="text-[20px] font-semibold text-[#FFFFFF] mb-6 sm:text-[18px] sm:mb-2"
            >
              <span className="sm:hidden">Адресс</span>
              <span className="hidden sm:inline">Адрес компании:</span>
            </h3>
            <p className="text-[18px] text-[#FFFFFF66] sm:text-[14px]">
              г. Москва, ул. Московская
              <span className="sm:inline"> 205, оф. 205</span>
            </p>
            <p className="text-[18px] text-[#FFFFFF66] sm:hidden">205, оф. 205</p>
          </div>

          <div className="sm:w-full my-6 sm:flex sm:justify-center">
            <button
              onClick={downloadPresentationWithFetch}
              className="flex items-center gap-2 bg-transparent rounded-lg text-[#FFFFFF] px-4 py-2 text-[18px] hover:bg-[#FFFFFF66] transition-colors sm:text-[16px] sm:px-0"
            >
              <FolderIcon width={16} height={16} alt="Download" className="w-4 h-4" />
              Скачать презентацию
            </button>
          </div>

          {/* Social - Desktop Only */}
          <div className="space-y-6 sm:hidden">
            <div className="flex items-center gap-4">
              <SocialFooter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF66] py-8 grid grid-cols-4 gap-8 lg:grid-cols-2 sm:grid-cols-1 sm:gap-4 sm:py-6">
          {/* Copyright */}
          <div className="text-[18px] text-[#FFFFFF66] flex flex-col sm:order-3 sm:text-[14px]">
            <span className="text-white">CortexDigital © {new Date().getFullYear()}</span>
            <span>All Rights Reserved</span>
          </div>
          {/* Privacy Policy */}
          <div className="flex items-center sm:order-1">
            <TransitionLink
              href="/privacy"
              className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors max-w-[200px] sm:max-w-1/2 sm:text-[14px]"
            >
              Политика конфиденциальности
            </TransitionLink>
          </div>

          {/* Privacy Consent */}
          <div className="flex items-center sm:order-2 sm:my-2">
            <TransitionLink
              href="/"
              className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors max-w-[200px] sm-max-1/2 sm:text-[14px]"
            >
              Согласие на обработку персональных данных
            </TransitionLink>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center items sm:order-4">
            <FirstSection className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors sm:hidden">
              {t("to_top")}
            </FirstSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
