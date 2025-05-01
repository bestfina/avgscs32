import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ArrowLink from "./icon/ArrowLink";
import Button from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  price: string;
  className?: string;
  iconAlt?: string;
}

const ServiceCard = ({ title, description, url, icon, className, price, iconAlt }: ServiceCardProps) => {
  const t = useTranslations("main.service");

  return (
    <div
      aria-label={t("card_aria_label", { title })}
      className={twMerge(
        "rounded-3xl overflow-hidden bg-center bg-cover service-item flex flex-col h-full group",
        className
      )}
    >
      <div className="bg-slate-100 rounded-3xl p-[25px] xl:p-xs lg:p-xxs flex flex-col h-full">
        <div className="flex items-center md:items-end">
          <Link
            href={url}
            scroll={url ? true : false}
            className="flex items-center gap-xxs md:flex-col md:items-start md:gap-xxxxs"
          >
            <Image
              src={icon}
              alt={iconAlt || ""}
              width={60}
              height={60}
              priority
              className="xxl:w-12 xxl:h-12 lg:w-9 lg:h-9"
            />
            <h3 className="relative">
              {title}
              {url && (
                <span className="absolute -mb-[3px] bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-[102%]"></span>
              )}
            </h3>
          </Link>
          {url && (
            <Link
              href={url}
              className="service-link text-TextDark duration-300 rounded-3xl w-11 h-11 xxl:h-9 xxl:w-9 lg:w-7 lg:h-7 flex justify-center items-center ml-auto"
            >
              <ArrowLink />
            </Link>
          )}
        </div>
        <p className="mt-xxxs leading-9 text-2xl xxl:leading-8 xxl:text-[22px] xl:text-[19px] xl:leading-7 lg:text-base text-TextDark font-extralight">
          {description}
        </p>
        <div className="mt-auto">
          <div className="mt-6 mb-xxs lg:mt-4 lg:mb-xxxs text-3xl xxl:text-[28px] xl:text-xl lg:text-lg xs:text-base font-bold">
            {price}
          </div>
          <div onClick={e => e.stopPropagation()}>
            <Button type="border-black">{t("order_button")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;