import type { Metadata } from "next";
import { Raleway, Exo_2 } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { PopupProvider } from "@/context/PopupContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Popup from "@/components/ui/Popup";
import YandexMetrika from "@/components/sections/YandexMetrika";
import MobileLink from "@/components/ui/MobileLink";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  preload: true,
  adjustFontFallback: false,
});

const Exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-press",
  preload: true,
});

export const metadata: Metadata = {
  title: "Разработка сайта полным циклом - CortexDigital",
  description:
    "Бесплатные консультации и аудиты. Огромное портфолио. Контекстная реклама и SEO. Создание сайта полным циклом!",
  keywords: "Разработка сайта ключ",
  icons: "/favicon.ico",
  other: {
    "yandex-verification": "8cf8659d30ac0744",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={twMerge(raleway.className, Exo2.variable, "antialiased text-TextDark")}>
        <YandexMetrika />
        <PopupProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileLink />
          <Popup />
        </PopupProvider>
      </body>
    </html>
  );
};

export default RootLayout;
