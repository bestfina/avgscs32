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
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("main.footer");

  return (
    <footer className="bg-[#0E202C] text-white" id="contact">
      <div className="container">
        {/* Upper Section */}
        <div className="grid grid-cols-4 gap-8 py-16 lg:grid-cols-2 md:grid-cols-1 md:gap-12">
          {/* Logo */}
          <div>
            <Logo big light />
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[20px] font-semibold text-[#FFFFFF] mb-6"
              style={{ fontFamily: "var(--font-nunito) !important" }}
            >
              Услуги
            </h3>
            <nav className="space-y-3">
              <TransitionLink
                href="/landing-page"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors"
              >
                Landing Page
              </TransitionLink>
              <TransitionLink
                href="/corporate"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors"
              >
                Корпоративный сайт
              </TransitionLink>
              <TransitionLink
                href="/e-commerce"
                className="block text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors"
              >
                Интернет-магазин
              </TransitionLink>
            </nav>
          </div>

          {/* Pages */}
          <div>
            <nav className="space-y-3">
              <TransitionLink
                href="/portfolio"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors"
              >
                Кейсы
              </TransitionLink>
              <TransitionLink
                href="/#about"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors"
              >
                О компании
              </TransitionLink>
              <TransitionLink
                href="/#feedback"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors"
              >
                Отзывы
              </TransitionLink>
              <TransitionLink
                href="/contacts"
                className="block text-[18px] text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors"
              >
                Контакты
              </TransitionLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <a
                href="tel:+79999999999"
                target="_blank"
                className="text-[24px] font-semibold text-[#FFFFFF] mb-2"
                // style={{ fontFamily: "var(--font-nunito) !important" }}
              >
                + 7 (999) 999-99-99
              </a>
              <p className="text-[18px] text-[#FFFFFF66]">Позвоните нам</p>
            </div>

            <div>
              <a
                href="mailto:info@cortexdigital.net&body=привет"
                target="_blank"
                className="text-[20px] font-semibold text-[#FFFFFF] mb-2"
                // style={{ fontFamily: "var(--font-nunito) !important" }}
              >
                info@cortexdigital.net
              </a>
              <p className="text-[18px] text-[#FFFFFF66]">Напишите нам</p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-4 gap-8 py-12 lg:grid-cols-2 md:grid-cols-1 md:gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-2">
            <p className="text-[18px] text-[#FFFFFF66]">ИП Волков Александр</p>
            <p className="text-[18px] text-[#FFFFFF66]">Александрович</p>
            <p className="text-[18px] text-[#FFFFFF66]">ОГРН 000000000000</p>
            <p className="text-[18px] text-[#FFFFFF66]">ИНН 000000000000</p>
          </div>

          {/* Address */}
          <div>
            <h3
              style={{ fontFamily: "var(--font-nunito) !important" }}
              className="text-[20px] font-semibold text-[#FFFFFF] mb-6"
            >
              Адресс
            </h3>
            <p className="text-[18px] text-[#FFFFFF66]">г. Москва, ул. Московская</p>
            <p className="text-[18px] text-[#FFFFFF66]">205, оф. 205</p>
          </div>

          <div>
            <button className="flex items-center gap-2 bg-transparent rounded-lg text-[#FFFFFF] px-4 py-2 rounded text-[18px] hover:bg-[#FFFFFF66] transition-colors">
              <FolderIcon width={16} height={16} alt="Download" className="w-4 h-4" />
              Скачать презентацию
            </button>
          </div>

          {/* Download Button & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <SocialFooter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF66] py-8 grid grid-cols-4 gap-8 lg:grid-cols-2 md:grid-cols-1 md:gap-4 md:text-center">
          {/* Copyright */}
          <div className="text-[18px] text-[#FFFFFF66] flex flex-col">
            <span className="text-white">CortexDigital © {new Date().getFullYear()}</span>
            <span>All Rights Reserved</span>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center">
            <TransitionLink
              href="/privacy"
              className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors max-w-[200px]"
            >
              Политика конфиденциальности
            </TransitionLink>
          </div>

          {/* Privacy Consent */}
          <div className="flex items-center">
            <TransitionLink
              href="/privacy-consent"
              className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors max-w-[200px]"
            >
              Согласие на обработку персональных данных
            </TransitionLink>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center items">
            <FirstSection className="text-[18px] text-[#FFFFFF66] hover:text-[#FFFFFF] transition-colors">
              {t("to_top")}
            </FirstSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
