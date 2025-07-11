import { useTranslations } from "next-intl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
  size?: string;
  atTop?: boolean;
}

const Contact = ({ className, size, atTop }: ContactProps) => {
  const t = useTranslations("contacts");

  return (
    <div
      className={twMerge(
        "flex gap-xxs w-fit sm:flex-col sm:gap-xxxxs text-TextLight",
        atTop ? "text-TextLight" : "text-TextDark",
        className
      )}
    >
      <Link href={`mailto:${t("email")}`} className={twMerge("text-xl xl:text-base", size)}>
        {t("email")}
      </Link>
      <Link href="tel:+79951396206" className={twMerge("text-xl xl:text-base", size)}>
        +7 (995) 139-62-06
      </Link>
    </div>
  );
};

export default Contact;