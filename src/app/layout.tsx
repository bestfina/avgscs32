import type { Metadata } from "next";
import { Raleway, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

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

export const metadata: Metadata = {
  title: "Разработка сайта полным циклом - CortexDigital",
  description:
    "Бесплатные консультации и аудиты. Огромное портфолио. Контекстная реклама и SEO. Создание сайта полным циклом!",
  keywords: "Разработка сайта ключ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="ru">
    <body className={twMerge(raleway.className, pressStart2P.variable, "antialiased text-TextDark")}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
