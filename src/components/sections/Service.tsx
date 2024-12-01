"use client";
import { cardVariants, SERVICE } from "@/constants";
import Button from "../ui/Button";
import InnerSpan from "../ui/InnerSpan";
import { motion } from "framer-motion";

const Service = () => (
  <section id="service" className="lg:hidden">
    <div className="container flex flex-col">
      <h2>Наши услуги и цены</h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-AccentDark rounded-3xl px-md xl:px-sm py-xs flex justify-between items-center"
      >
        <h5 className="text-TextLight">Бесплатная консультация</h5>
        <p className="text-TextLight w-1/3 xl:w-2/5 text-center">
          Оставьте заявку и получите ответы на вопросы, советы экспертов и чёткий план действий.
        </p>
        <Button type="white">Попробовать</Button>
      </motion.div>
      <div className="flex flex-wrap gap-sm justify-center">
        {SERVICE.map(({ id, title, price, advantages, deadline }, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            animate={{ transition: { delay: index * 0.15 } }}
            key={id}
            className="w-1/4 flex flex-col gap-xxs p-md xl:p-sm xl:w-[31%] border-dotted justify-between border-4 border-black rounded-3xl"
          >
            <h5>{title}</h5>
            <div className="flex flex-col gap-xxxxs">
              <InnerSpan className="text-2xl bg-black font-bold">{price}</InnerSpan>
              <i className="text-base">Сроки: {deadline}</i>
              {/* <i className="text-base">Виды: лендинги, корпоративные сайты, интернет-магазины, каталоги, визитки</i> */}
            </div>
            <ul className="list-disc flex flex-col gap-xxxs">
              {advantages.map((item, index) => (
                <li key={index} className="ml-xxs text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <Button type="black">Оставить заявку</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
