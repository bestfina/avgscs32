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

const CookieConsent: FC<CookieConsentProps> = ({ className, onAccept, onDecline }) => {
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

  // Функция для удаления всех куков
  const clearAllCookies = () => {
    // Удаляем все куки для текущего домена
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

      // Удаляем куки для разных путей и доменов
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
    });

    // Очищаем localStorage от аналитических данных
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.includes("yandex") || key.includes("_ym") || key.includes("analytics"))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    // Очищаем sessionStorage от аналитических данных
    const sessionKeysToRemove = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && (key.includes("yandex") || key.includes("_ym") || key.includes("analytics"))) {
        sessionKeysToRemove.push(key);
      }
    }
    sessionKeysToRemove.forEach(key => sessionStorage.removeItem(key));
  };

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

  const handleDecline = () => {
    const declinedSettings: CookieSettings = {
      technical: false,
      analytics: false,
    };

    // Сохраняем отклоненные настройки
    localStorage.setItem("cookieConsent", JSON.stringify(declinedSettings));

    // Удаляем все существующие куки
    clearAllCookies();

    // Генерируем кастомное событие для уведомления других компонентов
    window.dispatchEvent(
      new CustomEvent("localStorageChange", {
        detail: { key: "cookieConsent", newValue: declinedSettings },
      })
    );

    closeModal();
    setIsVisible(false);
    onDecline?.();
  };

  const handleModalAccept = () => {
    // Если любые куки отключены, удаляем существующие
    if (!cookieSettings.analytics || !cookieSettings.technical) {
      clearAllCookies();
    }

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
          <div className="max-w-7xl mx-auto flex sm:flex-col items-center justify-between gap-4">
            <div className="flex-1 min-w-0 w-2/3 sm:w-full">
              <p className="text-base sm:text-sm xs:text-xs text-gray-700">
                Мы используем{" "}
                {/* <button
                  onClick={() => setShowModal(true)}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors"
                > */}
                cookie
                {/* </button> */}. Они помогают нам понять, как вы взаимодействуете с сайтом.{" "}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors !text-base xs:!text-xs"
                >
                  Изменить настройки
                </button>
              </p>
            </div>
            <Button
              onClick={handleQuickAccept}
              type="blue"
              className="!px-6 !py-2 text-sm !w-1/3 sm:!w-full"
              openPopupAfterClick={false}
            >
              Принять все
            </Button>
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
                  <div className="flex items-start gap-3 x:flex-col x:gap-1">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={cookieSettings.technical}
                          disabled
                          // onChange={() => toggleCookieSetting("technical")}
                          className="sr-only"
                        />
                        <div
                          className="w-12 h-6 rounded-full shadow-inner relative bg-green-500 transition-colors duration-200
                         cursor-not-allowed opacity-60"
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
                      <h4 className="text-xl x:text-lg text-gray-900 mb-1">Технические cookie-файлы</h4>
                      <p className="text-base x:text-sm text-gray-600">Необходимы для корректной работы сайта</p>
                    </div>
                  </div>

                  {/* Аналитические куки */}
                  <div className="flex items-start gap-3 x:flex-col x:gap-1">
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
                      <h4 className="text-xl x:text-lg text-gray-900 mb-1">Аналитические cookie-файлы</h4>
                      <p className="text-base x:text-sm text-gray-600">
                        Помогают понять, как вы взаимодействуете с сайтом
                      </p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleModalAccept} type="blue" className="!w-full" openPopupAfterClick={false}>
                  Сохранить
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
