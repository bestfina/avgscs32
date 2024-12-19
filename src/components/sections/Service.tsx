import { SERVICE } from "@/constants";
import Button from "../ui/Button";
import InnerSpan from "../ui/InnerSpan";
import Image from "next/image";

const Service = () => (
  <section id="service">
    <div className="container flex flex-col">
      <h2>Наши услуги и цены</h2>
      <div className="bg-AccentDark rounded-3xl px-sm xl:px-sm md:p-xs sm:p-xxs py-xs flex justify-between items-center gap-xxxs sm:flex-col sm:items-start">
        <div className="flex items-center gap-md md:gap-sm sm:flex-col sm:items-start sm:gap-xxxxs">
          <h5 className="text-TextLight md:max-w-36 sm:max-w-fit">Бесплатная консультация</h5>
          <p className="text-TextLight w-2/4 md:w-[64%] text-center md:text-sm sm:w-full sm:text-start">
            Оставьте заявку и получите ответы на вопросы, советы экспертов и чёткий план действий.
          </p>
        </div>
        <Button type="white">Попробовать</Button>
      </div>
      <div className="flex flex-wrap gap-sm xl:gap-xs justify-center">
        {SERVICE.map(({ id, title, price, advantages, deadline, icon }) => (
          <div
            key={id}
            className="w-[27%] xxl:p-xs xl:w-[31.7%] md:w-[48%] sm:w-full flex flex-col gap-xxs p-sm border-dotted justify-between border-4 border-black rounded-3xl"
          >
            <Image src={icon} alt="" width={50} height={50} />
            <h5 className="sm:text-[22px] xs:text-xl">{title}</h5>
            <div className="flex flex-col gap-xxxxs">
              <InnerSpan className="text-2xl bg-black font-bold lg:text-xl">{price}</InnerSpan>
              <i className="text-base">Сроки: {deadline}</i>
            </div>
            <ul className="list-disc flex flex-col gap-xxxs">
              {advantages.map((item, index) => (
                <li key={index} className="ml-xxs text-lg lg:text-base sm:text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <Button type="black" className="xs:w-full">
              Узнать подробнее
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
