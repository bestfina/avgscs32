"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface TariffsProps {
  priceTemplate: string;
  priceCustom: string;
}

const Tariffs = ({ priceTemplate, priceCustom }: TariffsProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="tariffs">
      <div className="container flex flex-col">
        <h2>Стоимость разработки</h2>
        <div className="flex justify-between flex-wrap gap-md xl:gap-sm md:gap-xs">
          <motion.div
            className="flex flex-col gap-sm justify-between rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Оптимальный</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceTemplate} ( -15% скидка )</h4>
            </div>
            <Button type="blue">Обсудить проект</Button>
            <div className="h-px bg-black"></div>
            <p>
              Идеальное решение для тех, кто хочет запустить готовый сайт с базовым функционалом и индивидуальным
              дизайном по доступной цене.
            </p>
            <div className="flex flex-col gap-xxs">
              <ul className="list-disc flex flex-col gap-xxxs pl-xs">
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-sm justify-between rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Премиум</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceCustom}</h4>
            </div>
            <Button type="black">Обсудить проект</Button>
            <div className="h-px bg-black"></div>
            <p>
              Отличный выбор для тех, кому нужна эксклюзивность: уникальный дизайн, сложный функционал, интеграции и
              премиальные технологии.
            </p>
            <div className="flex gap-md">
              <ul className="list-disc flex flex-col gap-xxxs pl-xs">
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
              </ul>
              <ul className="list-disc flex flex-col gap-xxxs pl-xs">
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
                <li>Уникальный дизайн</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
