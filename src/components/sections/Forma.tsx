"use client";
import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import { motion } from "framer-motion";
import InnerSpan from "../ui/InnerSpan";

const Forma = () => (
  <section>
    <div className="container">
      <motion.div
        animate={{ y: [0, -20, 0] }} // Поднимается вверх и возвращается
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-3xl overflow-hidden bg-[url('/assets/images/bg-forma.webp')] bg-cover bg-center"
      >
        <div className="flex gap-md p-md xl:p-sm xl:gap-sm md:flex-wrap sm:p-xxs bg-black/40">
          <div className="flex flex-col gap-sm w-2/4 md:w-full md:gap-xxs">
            <h5 className="text-6xl xxl:text-5xl xxl:leading-tight xl:text-4xl xl:leading-tight lg:text-3xl sm:text-2xl leading-tight text-TextLight">
              Оставьте заявку, после чего вы получите{" "}
              <InnerSpan className="text-6xl xxl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl">бесплатный</InnerSpan>{" "}
              аудит и скидку 5% на любую услугу
            </h5>
            <Social />
            <Contact />
          </div>
          <TaimerBlock />
        </div>
      </motion.div>
    </div>
  </section>
);
export default Forma;
