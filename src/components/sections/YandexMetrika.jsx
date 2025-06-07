"use client";
import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    // Функция инициализации метрики
    const initYandexMetrika = () => {
      if (typeof window === "undefined" || window.ym) return;
      
      console.log("Yandex Metrika initialized");
      
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode?.insertBefore(k, a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      window.ym(99095541, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    };

    // Проверяем при загрузке компонента
    const checkAndInit = () => {
      try {
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (cookieConsent) {
          const consent = JSON.parse(cookieConsent);
          console.log("Cookie consent:", consent);
          if (consent?.analytics) {
            initYandexMetrika();
          }
        }
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
      }
    };

    // Проверяем сразу при монтировании
    checkAndInit();

    // Обработчик изменений в localStorage
    const handleStorageChange = (e) => {
      // Проверяем изменения в localStorage через событие storage
      if (e.key === "cookieConsent") {
        try {
          const newConsent = JSON.parse(e.newValue);
          console.log("Storage changed - new consent:", newConsent);
          if (newConsent?.analytics && !window.ym) {
            initYandexMetrika();
          }
        } catch (error) {
          console.error("Error parsing new cookie consent:", error);
        }
      }
    };

    // Обработчик кастомного события (если используется)
    const handleCustomStorageChange = () => {
      checkAndInit();
    };

    // Подписываемся на оба события
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("localStorageChange", handleCustomStorageChange);

    // Дополнительно проверяем через интервал (fallback)
    const interval = setInterval(() => {
      checkAndInit();
    }, 1000);

    // Очистка через 10 секунд (чтобы не проверять бесконечно)
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    // Отписка при размонтировании
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageChange", handleCustomStorageChange);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <noscript>
      <div>
        <img 
          src="https://mc.yandex.ru/watch/99095541" 
          style={{ position: "absolute", left: "-9999px" }} 
          alt="" 
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;