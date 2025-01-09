"use client";
import { motion } from "framer-motion";

const MiniForma = () => {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col px-xs w-2/5 lg:w-[45%] md:w-full h-fit gap-sm xl:gap-xs lg:gap-xxs md:gap-xxs
         items-center py-12 xl:py-[18px] xl:px-10 md:p-3 text-TextLight bg-white/15 backdrop-blur-sm rounded-3xl"
    >
      <h5>Получите полную консультацию в 1 клик</h5>
      <p>
        Вы можете не терять время на сайте, а сразу узнать ответы на все интересующие Вас вопросы от наших менеджеров в
        течении рабочего дня.
      </p>
    </motion.div>
  );
};

export default MiniForma;
