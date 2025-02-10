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
            className="flex flex-col justify-between rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Оптимальный</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceTemplate}</h4>
              <p className="mt-sm mb-md xl:mt-xs xl:mb-10 lg:mt-xxs lg:mb-sm sm:mt-xxxs sm:mb-xs">
                Идеальное решение для тех, кто хочет запустить готовый сайт с базовым функционалом и индивидуальным
                дизайном по доступной цене.
              </p>
            </div>
            <Button type="black">Обсудить проект</Button>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between rounded-3xl bg-black/80 text-TextLight p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Премиум</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceCustom}</h4>
              <p className="mt-sm xl:mt-xs lg:mt-xxs lg:mb-sm sm:mt-xxxs sm:mb-xs">
                Отличный выбор для тех, кому нужна эксклюзивность: уникальный дизайн, сложный функционал, интеграции и
                премиальные технологии.
              </p>
            </div>
            <Button type="blue">Обсудить проект</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
