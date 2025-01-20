import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ArrowLink from "./icon/ArrowLink";
import AdvantagesBlock from "./AdvantagesBlock";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  advantages?: string[];
  price: string;
  className?: string;
}

const ServiceCard = ({ title, description, url, icon, className, price, advantages }: ServiceCardProps) => (
  <Link
    href={url}
    aria-label={`Подробнее об услуге "${title}"`}
    className={twMerge("rounded-3xl overflow-hidden bg-center bg-cover service-item group", className)}
  >
    <div
      className="bg-slate-100 rounded-3xl hover:bg-black/10 duration-500 p-[25px] xl:p-xs lg:p-xxs flex flex-col gap-sm 
          xxl:gap-xs xl:gap-xxs sm:gap-xxxs h-full"
    >
      <div className="flex items-center md:items-end">
        <div className="flex items-center gap-xxs md:flex-col md:items-start md:gap-px">
          <Image
            src={icon}
            alt={"иконка " + title}
            width={60}
            height={60}
            priority
            className="xxl:w-12 xxl:h-12 lg:w-9 lg:h-9"
          />
          <h3>{title}</h3>
        </div>
        <div className="service-link text-TextDark duration-300 rounded-3xl w-11 h-11 xxl:h-9 xxl:w-9 lg:w-7 lg:h-7 flex justify-center items-center ml-auto">
          <ArrowLink />
        </div>
      </div>
      <div className="flex gap-xxs xxl:gap-xxxs lg:gap-[8px] flex-wrap">
        {advantages &&
          advantages.map((item, index) => (
            <AdvantagesBlock
              key={index}
              className="border border-black w-fit font-semibold text-[22px] xxl:text-[20px] xl:text-[17px] lg:text-[14.7px] xl:py-1 xl:px-3 lg:px-2"
            >
              {item}
            </AdvantagesBlock>
          ))}
      </div>
      <p className="leading-9 text-2xl xxl:leading-8 xxl:text-[22px] xl:text-[19px] xl:leading-7 lg:text-base text-TextDark font-extralight">
        {description}
      </p>
      <h4 className="mt-auto">{price}</h4>
    </div>
  </Link>
);

export default ServiceCard;
