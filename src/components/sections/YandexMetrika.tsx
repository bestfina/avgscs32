"use client";
import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    const initYandexMetrika = () => {
      if (typeof window === "undefined" || !window.ym) {
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

        window.ym &&
          window.ym(99095541, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
      }
    };

    initYandexMetrika();
  }, []);

  return (
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/99095541" style={{ position: "absolute", left: "-9999px" }} alt="" />
      </div>
    </noscript>
  );
};

export default YandexMetrika;
