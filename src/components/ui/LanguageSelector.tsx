import { useState, useEffect, FC, SVGProps, useTransition } from "react";
import { TLocales } from "@/types";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/constants";
import EnglishIcon from "public/assets/icons/uk_rounded_icon.svg?svg";
import RussiaIcon from "public/assets/icons/russia_rounded_icon.svg?svg";
import { useParams } from "next/navigation";
import clsx from "clsx";

type Props = {
  className?: string;
  locale: TLocales;
  fullWidth?: boolean;
};

const LOCALES_MAP = {
  en: "English",
  ru: "Русский",
};

const LanguageSelector: FC<Props> = ({ className, locale, fullWidth }) => {
  const [currentLanguage, setCurrentLanguage] = useState(LOCALES_MAP[locale]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: TLocales) => {
    if (!LOCALES_MAP[lang]) return;

    setCurrentLanguage(LOCALES_MAP[lang]);
    setIsOpen(false);

    router.replace({ pathname }, { locale: lang });
  };

  const languageProps: SVGProps<SVGElement> = { width: 20, height: 20 };

  return (
    <div className={clsx("relative inline-block text-left", className, fullWidth ? "w-full" : "w-auto")}>
      <button
        onClick={toggleDropdown}
        className={clsx(
          "flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-200 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
          fullWidth ? "w-full" : "w-auto"
        )}
      >
        {locale === "ru" ? <RussiaIcon {...languageProps} /> : <EnglishIcon {...languageProps} />}
        <span>{currentLanguage}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none origin-top-right right-0 z-10 animate-fadeIn">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map(lang => {
              return (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  disabled={isPending || locale === lang}
                  className={`${"text-gray-700"} flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                    isPending && "transition-opacity [&:disabled]:opacity-30"
                  }`}
                  role="menuitem"
                >
                  {LOCALES_MAP[lang]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
