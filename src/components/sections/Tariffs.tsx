"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

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
            className="flex flex-col gap-sm rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Оптимальный</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceTemplate}</h4>
            </div>
            <Button type="blue">Обсудить проект</Button>
            <div className="h-px bg-black"></div>
            <p>
              Идеальное решение для тех, кто хочет запустить готовый сайт с базовым функционалом и индивидуальным
              дизайном по доступной цене. Включает всё необходимое для быстрого старта: адаптивный дизайн, базовую
              SEO-оптимизацию и простоту в управлении контентом, что позволяет малому и среднему бизнесу сфокусироваться
              на развитии без лишних затрат и технических сложностей.
            </p>
            <div className="flex justify-between mt-auto">
              <Link href="#steps" className="underline">
                Этапы разработки
              </Link>
              <Link href="#faq" className="underline">
                Условия оплаты и гарантии
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-sm rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <h3>Премиум</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceCustom}</h4>
            </div>
            <Button type="border-black">Обсудить проект</Button>
            <div className="h-px bg-black"></div>
            <p>
              Отличный выбор для тех, кто ищет эксклюзивность и высокий уровень качества: уникальный дизайн, сложный
              функционал, индивидуальные интеграции и премиальные технологии, которые обеспечат вашему бизнесу
              конкурентное преимущество и максимальную эффективность.
            </p>
            <div className="flex justify-between mt-auto">
              <Link href="#steps" className="underline">
                Этапы разработки
              </Link>
              <Link href="#faq" className="underline">
                Условия оплаты и гарантии
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
