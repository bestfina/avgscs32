"use client";
import { cardVariants, SERVICE } from "@/constants";
import Button from "../ui/Button";
import InnerSpan from "../ui/InnerSpan";
import { motion } from "framer-motion";

const Service = () => (
  <section id="service">
    <div className="container flex flex-col">
      <h2>Наши услуги и цены</h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-AccentDark rounded-3xl px-md xl:px-sm md:p-xs sm:p-xxs py-xs flex justify-between items-center gap-xxxs sm:flex-col sm:items-start"
      >
        <div className="flex items-center gap-md md:gap-sm sm:flex-col sm:items-start sm:gap-xxxxs">
          <h5 className="text-TextLight md:max-w-36 sm:max-w-fit">Бесплатная консультация</h5>
          <p className="text-TextLight w-2/4 md:w-[64%] text-center md:text-sm sm:w-full sm:text-start">
            Оставьте заявку и получите ответы на вопросы, советы экспертов и чёткий план действий.
          </p>
        </div>
        <Button type="white">Попробовать</Button>
      </motion.div>
      <div className="flex flex-wrap gap-sm xl:gap-xs justify-center">
        {SERVICE.map(({ id, title, price, advantages, deadline }, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            animate={{ transition: { delay: index * 0.15 } }}
            key={id}
            className="w-[27%] xxl:p-xs xl:w-[31.7%] md:w-[48%] sm:w-full flex flex-col gap-xxs p-md border-dotted justify-between border-4 border-black rounded-3xl"
          >
            <h5>{title}</h5>
            <div className="flex flex-col gap-xxxxs">
              <InnerSpan className="text-2xl bg-black font-bold lg:text-xl">{price}</InnerSpan>
              <i className="text-base">Сроки: {deadline}</i>
            </div>
            <ul className="list-disc flex flex-col gap-xxxs">
              {advantages.map((item, index) => (
                <li key={index} className="ml-xxs text-lg lg:text-base">
                  {item}
                </li>
              ))}
            </ul>
            <Button type="black" className="xs:w-full">
              Получить услугу
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
