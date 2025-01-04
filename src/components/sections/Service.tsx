"use client";
<<<<<<< HEAD
import Link from "next/link";
import ServiceCard from "../ui/ServiceCard";
import { SERVICE } from "@/constants";
import { motion } from "framer-motion";

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
  return (
    <section id="service">
      <motion.div
        className="container flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-1/3 flex flex-col gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs md:w-full">
          <div>
            <Link href="/portfolio" className="font-semibold underline md:text-[13px]">
              более 110 успешных проектов
            </Link>
            <h2>Наши услуги в веб-разработке</h2>
          </div>
          <motion.div className="flex flex-wrap justify-between gap-xxxs h-full" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, advantages }) =>
              id === 1 ? (
                <motion.div key={id} variants={cardVariants}>
                  <ServiceCard
                    title={title}
                    description={description}
                    url={url}
                    advantages={advantages}
                    icon={icon}
                    active
                  />
                </motion.div>
              ) : (
                <motion.div key={id} variants={cardVariants} className="md:w-[49%] x:w-full hidden md:block">
                  <ServiceCard title={title} description={description} url={url} advantages={advantages} icon={icon} />
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
              url=""
              advantages={["Фирменный стиль", "Интеграция с CRM", "Сайт для бизнеса"]}
              icon="/assets/icons/office-briefcase.svg"
            />
          </motion.div>
          <motion.div className="flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, advantages }) =>
              id === 3 || id === 4 ? (
                <motion.div key={id} variants={cardVariants} className="w-2/4">
                  <ServiceCard title={title} description={description} url={url} advantages={advantages} icon={icon} />
                </motion.div>
              ) : null
            )}
          </motion.div>
          <motion.div variants={cardVariants}>
            <ServiceCard
              title="Другое"
              description="Так же мы предлагаем широкий спектр дополнительных услуг для развития вашего бизнеса в интернете. От технической поддержки до маркетинга — решаем задачи любой сложности."
              url=""
              advantages={["Тех. поддержка", "Seo", "Яндекс директ", "Erp"]}
              icon="/assets/icons/support.svg"
            />
          </motion.div>
        </div>
      </motion.div>
=======
import { motion } from "framer-motion";
import { SERVICE } from "@/constants";
import Button from "../ui/Button";
import InnerSpan from "../ui/InnerSpan";
import Image from "next/image";

const Service = () => {
  // Анимация карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Анимация контейнера
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
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
        <motion.div
          className="flex flex-wrap gap-sm xl:gap-xs justify-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {SERVICE.map(({ id, title, price, advantages, deadline, icon }) => (
            <motion.div
              key={id}
              className="w-[27%] xxl:p-xs xl:w-[31.7%] md:w-[48%] sm:w-full flex flex-col gap-xxs p-sm border-dotted justify-between border-4 border-black rounded-3xl"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.05 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
    </section>
  );
};

export default Service;
