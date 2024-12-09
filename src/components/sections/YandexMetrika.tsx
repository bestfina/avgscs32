"use client";
import Script from "next/script";

const YandexMetrika = ({ counterId }: { counterId: number }) => {
  return (
    <>
      <Script
        id="yandex-metrika"
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof ym !== "undefined") {
            ym(counterId, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            });
          }
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;
