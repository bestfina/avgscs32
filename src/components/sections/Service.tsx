"use client";
import { useTranslations } from "next-intl";
import ServiceCard from "../ui/ServiceCard";
import { SERVICE } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TransitionLink } from "@/lib/link";

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
  const t = useTranslations("");
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
            <TransitionLink href="/portfolio" className="font-semibold underline md:text-[13px]">
              {t("main.service.portfolio_link")}
            </TransitionLink>
            <h2>{t("main.service.title")}</h2>
          </div>
          <motion.div className="flex flex-wrap justify-between gap-xxxs h-full" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, price }) =>
              id === 1 ? (
                <motion.div key={id} className="md:w-[49%] sm:w-full" variants={cardVariants}>
                  <ServiceCard title={t(title)} description={t(description)} url={url} icon={icon} price={t(price)} />
                </motion.div>
              ) : (
                <motion.div key={id} variants={cardVariants} className="md:w-[49%] sm:w-full hidden md:block">
                  <ServiceCard title={t(title)} description={t(description)} url={url} icon={icon} price={t(price)} />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
        <div className="w-2/3 flex flex-col gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs md:hidden">
          <motion.div variants={cardVariants}>
            <ServiceCard
              title={t("main.service.corporate.title")}
              description={t("main.service.corporate.description")}
              url="/corporate"
              price={t("main.service.corporate.price")}
              icon="/assets/icons/office-briefcase.svg"
              // iconAlt={t("corporate.icon_alt")}
            />
          </motion.div>
          <motion.div className="flex gap-md xxl:gap-sm xl:gap-xs lg:gap-xxs" variants={containerVariants}>
            {SERVICE.map(({ id, title, description, url, icon, price }) =>
              id === 3 || id === 4 ? (
                <motion.div key={id} variants={cardVariants} className="w-2/4">
                  <ServiceCard title={t(title)} description={t(description)} url={url} icon={icon} price={t(price)} />
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