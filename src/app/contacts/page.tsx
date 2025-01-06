import Button from "@/components/ui/Button";
import Contact from "@/components/ui/Contact";
import Social from "@/components/ui/Social";
import Image from "next/image";

const Contacts = () => {
  return (
    <section className="pt-48 pb-20 lg:pt-40 lg:pb-14 md:pt-32 md:pb-11 x:pt-28 x:pb-10 flex items-center">
      <div className="container flex items-center md:flex-col md:items-start">
        <div className="flex flex-col justify-center gap-xs xl:gap-xxxs w-2/4 md:w-full">
          <h1>Контакты</h1>
          <p>
            Для связи с нами выберите удобный для вас способ: позвоните, напишите на email, или отправьте сообщение
            через Telegram или WhatsApp. Мы обязательно ответим вам в течение рабочего дня!
          </p>
          <div className="flex items-center gap-xxs text-4xl xl:text-3xl lg:gap-xxxs lg:text-2xl x:text-xl xs:text-lg mt-xs md:mt-xxxs">
            <Image
              src="/assets/icons/clock-contact.svg"
              alt=""
              width={40}
              height={40}
              className="xl:w-9 xl:h-9 lg:w-8 lg:h-8"
            />
            Ежедневно: с 9:00 до 21:00 (Мск)
          </div>
          <Contact className="flex-col xl:my-xxxs md:my-xxxxs md:gap-xxxxs x:my-0s" size="x:text-base" />
          <Social />
          <Button type="blue" className="mt-xs md:mt-xxxs x:w-full">
            Оставить заявку
          </Button>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A65e590b90a2e998c208acbf7a6acdfcf16f8d0d5dde35ef30da86ae7ea7e6cb9&amp;source=constructor"
          width="100%"
          height="400"
          className="w-2/4 rounded-3xl md:w-full x:h-80"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacts;
