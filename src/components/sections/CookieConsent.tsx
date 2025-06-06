"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/cn";
import Button from "../ui/Button";

interface CookieConsentProps {
  className?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieConsent: FC<CookieConsentProps> = ({ className, onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("agreement");
  const [cookiesList, setCookiesList] = useState<string[]>([]);
  const contentRefs = {
    agreement: useRef<HTMLDivElement>(null),
    cookies: useRef<HTMLDivElement>(null),
    all: useRef<HTMLDivElement>(null), // Изменили название ref
  };
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
      scanCookies();
    }
  }, []);

  // Сканируем куки при открытии вкладки
  useEffect(() => {
    scanCookies();
  }, [activeTab]);

  // Функция для сканирования ВСЕХ кук
  const scanCookies = () => {
    if (typeof document === "undefined") return;

    const cookies = document.cookie.split(";");
    const allCookies: string[] = [];

    cookies.forEach(cookie => {
      const [name] = cookie.trim().split("=");
      allCookies.push(`${name}`);
    });

    setCookiesList(allCookies.filter(i => !!i));
  };

  // Обновляем высоту контента
  useEffect(() => {
    const updateHeight = () => {
      if (contentRefs[activeTab as keyof typeof contentRefs]?.current) {
        const contentElement = contentRefs[activeTab as keyof typeof contentRefs].current!;
        const height = contentElement.scrollHeight;
        setContentHeight(height);
      }
    };

    updateHeight();
    const timeoutId = setTimeout(updateHeight, 50);
    return () => clearTimeout(timeoutId);
  }, [activeTab, cookiesList]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    // Удаляем ВСЕ куки
    document.cookie.split(";").forEach(cookie => {
      const [name] = cookie.trim().split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
    onDecline?.();
  };

  const tabs = [
    {
      id: "agreement",
      title: "Соглашение",
      active: activeTab === "agreement",
    },
    {
      id: "cookies",
      title: "О cookie",
      active: activeTab === "cookies",
    },
    {
      id: "all", // Изменили id на "all"
      title: `Заблокированные cookie (${cookiesList.length})`,
      active: activeTab === "all", // Обновили условие
    },
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className={cn(
          "container-margin sm:m-0 sm:container",
          "fixed bottom-0 left-0 right-0 bg-black text-white p-6 z-50 mb-4 rounded-lg sm:rounded-none shadow-2xl",
          className
        )}
      >
        <LayoutGroup>
          <div className="flex space-x-1 mb-6 relative pb-1 border-b border-gray-700">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative z-10",
                  tab.active ? "text-white" : "text-gray-400 hover:text-gray-300",
                  "text-md sm:text-sm xs:text-[13px]"
                )}
              >
                {tab.title}
                {tab.active && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </LayoutGroup>

        <div className="w-full grid grid-cols-[70%_30%] gap-4 sm:grid-cols-1">
          <motion.div
            animate={{ height: contentHeight, maxHeight: 250 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden overflow-y-auto"
          >
            <div ref={contentRefs.agreement} className={cn(activeTab !== "agreement" && "hidden")}>
              <h2 className="text-xl font-semibold mb-4">Мы ценим вашу конфиденциальность</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Сайт использует файлы Cookie для улучшения качества вашего просмотра, показа контента и анализа трафика.
                Нажимая &quot;Принять&quot;, вы даете согласие на использование файлов cookie. Используя сайт, вы
                предоставляете согласие на обработку ваших персональных данных в том числе с помощью сервисов
                веб-аналитики.
              </p>
              <p className="text-gray-400 text-xs italic">
                * При отказе некоторые функции сайта могут стать недоступными.
              </p>
            </div>

            <div ref={contentRefs.cookies} className={cn(activeTab !== "cookies" && "hidden")}>
              {/* <h3 className="text-lg font-semibold mb-3">О файлах Cookie</h3> */}
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Сookie – это небольшой текстовый фрагмент, который передаётся с посещаемого сайта в ваш браузер. Они
                помогают пользователям эффективно ориентироваться и выполнять определенные функции. Некоторые файлы
                cookie необходимы для правильной работы веб-сайта.
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-white">Обязательные</h4>
                  <p className="text-gray-400 text-xs">
                    Эти куки файлы необходимы для корректной работы сайта. Без них сайт не сможет функционировать
                    должным образом. Обычно они используются для: навигации по сайту, доступа к защищённым областям,
                    запоминания содержимого корзины и так далее.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Функциональные</h4>
                  <p className="text-gray-400 text-xs">
                    Позволяют сайту запоминать выборы пользователя, например, имя, язык, регион, чтобы персонализировать
                    интерфейс. Не обязательны, но повышают удобство использования сайта.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Аналитические</h4>
                  <p className="text-gray-400 text-xs">
                    Аналитические файлы cookie используются для понимания того, как посетители взаимодействуют с
                    веб-сайтом. Эти файлы cookie помогают получить информацию о таких показателях, как количество
                    посетителей, показатель отказов, источник трафика. Используются для улучшения работы сайта.
                  </p>
                </div>
              </div>
            </div>

            <div ref={contentRefs.all} className={cn(activeTab !== "all" && "hidden")}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 ">
                Сookie – это небольшой текстовый фрагмент, который передаётся с посещаемого сайта в ваш браузер. Они
                помогают пользователям эффективно ориентироваться и выполнять определенные функции. Некоторые файлы
                cookie необходимы для правильной работы веб-сайта.
              </p>
              <h4 className="text-lg font-semibold mb-3">Заблокированные куки</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Файлы cookie, которые временно отключены и не активируются до тех пор, пока пользователь не даст явное
                согласие на их использование.
              </p>

              <div className="bg-gray-800 rounded p-4 max-h-[300px] overflow-y-auto">
                {cookiesList.length > 0 ? (
                  <table className="w-full text-sm">
                    {/* <thead>
                      <tr>
                        <th className="text-left text-gray-400 pb-2">Имя и значение</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      {cookiesList.map((cookie, index) => (
                        <tr key={index} className="border-b border-gray-700 last:border-0">
                          <td className="py-2">
                            <div className="font-mono text-gray-300 break-all">{cookie}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-400 text-sm italic">Cookie не обнаружены.</p>
                )}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 md:space-y-2 sm:space-y-0 sm:gap-2">
            <Button
              type="blue"
              onClick={handleAccept}
              className="order-1 sm:order-2 !w-full sm:!w-[60%]"
              openPopupAfterClick={false}
            >
              ПРИНЯТЬ
            </Button>
            <Button
              onClick={handleDecline}
              type="white"
              className="order-2 sm:order-1 !w-full sm:!w-[40%]"
              openPopupAfterClick={false}
            >
              ОТКЛОНИТЬ
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
