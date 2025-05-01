import type { Metadata } from "next";
import { Nunito, Exo_2 } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Popup from "@/components/ui/Popup";
import YandexMetrika from "@/components/sections/YandexMetrika";
import MobileLink from "@/components/ui/MobileLink";
import { ReactNode } from "react";
import { TLocales } from "@/types";
import { getMessages, getTranslations } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Providers } from "./providers";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

// export const dynamicParams = true;

type Props = {
  children: ReactNode;
  params: { locale: TLocales };
};

const raleway = Nunito({
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

// export const metadata: Metadata = {
//   title: {
//     default: "layout.metadata.title", // Will be resolved by next-intl
//     template: "%s | CortexDigital",
//   },
//   description: "layout.metadata.description", // Will be resolved by next-intl
//   keywords: "layout.metadata.keywords", // Will be resolved by next-intl
//   icons: "/favicon.ico",
//   other: {
//     "yandex-verification": "8cf8659d30ac0744",
//   },
// };

export async function generateMetadata(
  { params: { locale } }: { params: { locale: TLocales } },
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "layout.metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | CortexDigital`,
    },
    description: t("description"),
    keywords: t("keywords"),
    icons: "/favicon.ico",
    other: {
      "yandex-verification": "8cf8659d30ac0744",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const messages = await getMessages();
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className={twMerge(raleway.className, Exo2.variable, "antialiased text-TextDark")}>
        <YandexMetrika />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header locale={params.locale} />
            <main>{children}</main>
            <Footer />
            <MobileLink />
            <Popup />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
