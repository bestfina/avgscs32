// import type { Metadata } from "next";
"use client";
import { Raleway, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Popup from "@/components/ui/Popup";
import { PopupProvider } from "@/context/PopupContext";
import Loader from "@/components/ui/Loader";
import { useEffect, useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-press",
});

// export const metadata: Metadata = {
//   title: "Разработка сайта полным циклом - CortexDigital",
//   description:
//     "Бесплатные консультации и аудиты. Огромное портфолио. Контекстная реклама и SEO. Создание сайта полным циклом!",
//   keywords: "Разработка сайта ключ",
// };

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontsLoaded(true);
    });
  }, []);
  return (
    <html lang="ru">
      <body className={twMerge(raleway.className, pressStart2P.variable, "antialiased text-TextDark")}>
        {!isFontsLoaded && <Loader />}
        <PopupProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Popup />
        </PopupProvider>
      </body>
    </html>
  );
};

export default RootLayout;
