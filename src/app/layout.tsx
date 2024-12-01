import type { Metadata } from "next";
import { Raleway, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { PopupProvider } from "@/context/PopupContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Popup from "@/components/ui/Popup";

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
}>) => {
  return (
    <html lang="ru">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                  k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(12345678, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `,
          }}
        ></script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/12345678" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        <meta name="yandex-verification" content="8cf8659d30ac0744" />
      </head>
      <body className={twMerge(raleway.className, pressStart2P.variable, "antialiased text-TextDark")}>
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
