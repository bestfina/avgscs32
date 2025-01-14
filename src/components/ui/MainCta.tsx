"use client";
import Link from "next/link";
import Button from "./Button";
import smoothFn from "@/lib/smoothFn";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MainCta = () => {
  const [isMain, setIsMain] = useState(true);
  const currentPath = usePathname();
  useEffect(() => {
    if (currentPath !== "/") {
      setIsMain(false);
    }
  }, [currentPath]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex gap-sm xl:gap-xs md:gap-xxs x:gap-xxxs x:flex-col mt-md xl:mt-10 lg:mt-sm"
    >
      <Button type="blue" className="x:w-full btn-grow">
        Рассчитать стоимость
      </Button>
      {isMain ? (
        <Link
          href="/"
          scroll={false}
          onClick={() => smoothFn("/#service", currentPath)}
          className="bg-TextLight text-center rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full"
        >
          Смотреть все услуги
        </Link>
      ) : (
        <Link
          href="/portfolio"
          className="bg-TextLight text-center rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full"
        >
          Смотреть портфолио
        </Link>
      )}
    </motion.div>
  );
};

export default MainCta;
