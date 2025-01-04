"use client";
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
              url="/"
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
              url="/"
              advantages={["Тех. поддержка", "Seo", "Яндекс директ", "Erp"]}
              icon="/assets/icons/support.svg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
