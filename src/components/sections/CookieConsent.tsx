"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import Button from "../ui/Button";
import { LocaleLink } from "@/i18n/navigation";

interface CookieConsentProps {
  className?: string;
  onAccept?: (settings: CookieSettings) => void;
  onDecline?: () => void;
}

interface CookieSettings {
  technical: boolean;
  analytics: boolean;
}

const CookieConsent: FC<CookieConsentProps> = ({ className, onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    technical: true,
    analytics: true,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const closeModal = () => setShowModal(false);

  const handleQuickAccept = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookieSettings));

    // Генерируем кастомное событие для уведомления других компонентов
    window.dispatchEvent(
      new CustomEvent("localStorageChange", {
        detail: { key: "cookieConsent", newValue: cookieSettings },
      })
    );

    closeModal();
    setIsVisible(false);
    onAccept?.(cookieSettings);
  };

  const toggleCookieSetting = (type: keyof CookieSettings) => {
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 shadow-lg",
            className
          )}
        >
          <div className="max-w-7xl mx-auto flex x:flex-col items-center justify-between gap-4">
            <div className="flex-1 min-w-0 w-2/3 x:w-full">
              <p className="text-sm text-gray-700">
                Мы используем{" "}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  cookie
                </button>
                . Они помогают нам понять, как вы взаимодействуете с сайтом.{" "}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  Изменить настройки
                </button>
              </p>
            </div>
            <div className="flex gap-2 w-1/3 x:w-full">
              <Button
                onClick={handleQuickAccept}
                type="blue"
                className="!px-6 !py-2 text-sm !w-full"
                openPopupAfterClick={false}
              >
                ОК
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
            onClick={e => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[20px] shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Настройка cookie-файлов</h2>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Технические куки */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={cookieSettings.technical}
                          onChange={() => toggleCookieSetting("technical")}
                          className="sr-only"
                        />
                        <div
                          className={cn(
                            "w-12 h-6 rounded-full shadow-inner relative cursor-pointer transition-colors duration-200",
                            cookieSettings.technical ? "bg-green-500" : "bg-gray-300"
                          )}
                          onClick={() => toggleCookieSetting("technical")}
                        >
                          <div
                            className={cn(
                              "w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform duration-200",
                              cookieSettings.technical ? "right-0.5" : "left-0.5"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">Технические cookie-файлы</h4>
                      {/* <p className="text-sm text-gray-600">
                        Эти файлы cookie необходимы для корректной работы сайта. Без них сайт не сможет функционировать должным образом. Обычно они используются для навигации по сайту, доступа к защищённым областям, запоминания содержимого корзины.
                      </p> */}
                    </div>
                  </div>

                  {/* Аналитические куки */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={cookieSettings.analytics}
                          onChange={() => toggleCookieSetting("analytics")}
                          className="sr-only"
                        />
                        <div
                          className={cn(
                            "w-12 h-6 rounded-full shadow-inner relative cursor-pointer transition-colors duration-200",
                            cookieSettings.analytics ? "bg-green-500" : "bg-gray-300"
                          )}
                          onClick={() => toggleCookieSetting("analytics")}
                        >
                          <div
                            className={cn(
                              "w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform duration-200",
                              cookieSettings.analytics ? "right-0.5" : "left-0.5"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">Аналитические cookie-файлы</h4>
                      {/* <p className="text-sm text-gray-600">
                        Аналитические файлы cookie используются для понимания того, как посетители взаимодействуют с веб-сайтом. Эти файлы cookie помогают получить информацию о количестве посетителей, показателе отказов, источнике трафика. Используются Яндекс.Метрика для улучшения работы сайта.
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-6">
                  Подробнее в{" "}
                  <LocaleLink
                    href="/privacy"
                    onClick={closeModal}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Политике ООО «CortexDigital» в отношении cookie-файлов
                  </LocaleLink>
                </div>

                {/* <div className="flex justify-end">
                  <Button
                    onClick={handleModalAccept}
                    type="blue"
                    className="!px-6"
                    openPopupAfterClick={false}
                  >
                    ОК
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
