"use client";
import Link from "next/link";
import ServiceCard from "../ui/ServiceCard";
import { SERVICE } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Service = () => {
  const [amount, setAmount] = useState(0.2);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setAmount(0.1);
    }
  }, []);
  return (
    <section id="service">
      <motion.div
        className="container flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
      >
        <div className="w-1/3 flex flex-col gap-md xxl:gap-sm xl:gap-xs xs:gap-xxs md:w-full">
          <div>
            <Link href="/portfolio" className="font-semibold underline md:text-[13px]">
              более 110 успешных проектов
            </Link>
            <h2>Наши услуги в веб-разработке</h2>
          </div>
          <motion.div className="flex flex-wrap justify-between gap-xxxs h-full" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, price, advantages }) =>
              id === 1 ? (
                <motion.div key={id} className="md:w-[49%] sm:w-full" variants={cardVariants}>
                  <ServiceCard
                    title={title}
                    description={description}
                    url={url}
                    icon={icon}
                    price={price}
                    advantages={advantages}
                  />
                </motion.div>
              ) : (
                <motion.div key={id} variants={cardVariants} className="md:w-[49%] sm:w-full hidden md:block">
                  <ServiceCard
                    title={title}
                    description={description}
                    url={url}
                    icon={icon}
                    price={price}
                    advantages={advantages}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
        <div className="w-2/3 flex flex-col gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs md:hidden">
          <motion.div variants={cardVariants}>
            <ServiceCard
              title="Корпоративный сайт"
              description="Создаём корпоративные сайты, которые отражают стиль и ценности вашей компании, обеспечивая удобство для клиентов и партнёров."
              url="/corporate"
              price="От 45.000 руб./4 дней"
              icon="/assets/icons/office-briefcase.svg"
              advantages={["Фирменный стиль", "Интеграция с CRM", "Сайт для бизнеса"]}
            />
          </motion.div>
          <motion.div className="flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, price, advantages }) =>
              id === 3 || id === 4 ? (
                <motion.div key={id} variants={cardVariants} className="w-2/4">
                  <ServiceCard
                    title={title}
                    description={description}
                    url={url}
                    icon={icon}
                    price={price}
                    advantages={advantages}
                  />
                </motion.div>
              ) : null
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
