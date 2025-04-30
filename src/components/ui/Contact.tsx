import { useTranslations } from "next-intl";
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
      <a
        target="_blank"
        href={`mailto:${t("email")}`}
        className={twMerge("text-2xl lg:text-xl sm:text-lg xs:text-base", size)}
      >
        {t("email")}
      </a>
      {/* <Link href={`tel:${t("phone")}`} className={twMerge("text-2xl lg:text-xl sm:text-lg xs:text-base", size)}>
        {t("phone")}
      </Link> */}
    </div>
  );
};

export default Contact;
