"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CallbackWidget = () => {
  const t = useTranslations("callback_widget");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const attentionVariants = {
    normal: { rotate: 0 },
    attention: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 1, repeat: Infinity, repeatDelay: 4 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <div className="hidden fixed md:block bottom-7 right-16 xl:right-9 lg:right-4 lg:bottom-5 xs:right-[15px] xs:bottom-[15px] z-[100000]">
      <motion.div
        className="relative bg-AccentLight w-16 h-16 xs:w-14 xs:h-14 rounded-full flex justify-center items-center cursor-pointer"
        onClick={toggleMenu}
        initial="normal"
        animate="attention"
        variants={attentionVariants}
      >
        <div className="absolute inset-0 z-[-1] rounded-full animate-pulseRing"></div>
        <Image src="/assets/icons/message.svg" alt={t("message_icon_alt")} priority width={35} height={35} />
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute w-48 bottom-20 right-0 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-lg p-4 flex flex-col gap-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link
              href="https://t.me/CORTEX_DIGITAL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Image src="/assets/icons/telegram.svg" alt={t("telegram_icon_alt")} width={24} height={24} />
              {t("telegram")}
            </Link>
            {/* <a
              href="https://wa.me/79950203385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Image src="/assets/icons/whatsApp.svg" alt={t("whatsapp_icon_alt")} width={24} height={24} />
              {t("whatsapp")}
            </a> */}
            {/* <a
              target="_blank"
              href="tel:+7(995)020-33-85"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Image src="/assets/icons/phone.svg" alt={t("phone_icon_alt")} width={24} height={24} />
              {t("phone")}
            </a> */}
            <Link
              target="_blank"
              href="mailto:info@cortexdigital.net"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Image src="/assets/icons/email.svg" alt={t("email_icon_alt")} width={24} height={24} />
              {t("email")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CallbackWidget;
