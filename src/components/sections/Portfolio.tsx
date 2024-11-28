import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { CASE } from "@/constants";
import { twMerge } from "tailwind-merge";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container flex flex-col gap-md">
        <h2>Наши реализованные кейсы</h2>
        {CASE.map(({ id, title, description, image, url, data, advantages }) => (
          <div
            key={id}
            className={twMerge(
              "border-b-2 border-black flex md:flex-col gap-sm justify-between pb-xs",
              id % 2 === 0 ? "flex-row-reverse" : null
            )}
          >
            <div className="w-2/4 md:w-full flex flex-col gap-xxs">
              <div>
                <span>{data}</span>
                <h3>{title}</h3>
              </div>
              <Link href={url} target="_blank">
                {url}
              </Link>
              <div className="flex flex-wrap gap-xxxs">
                {advantages.map((item, index) => (
                  <span key={index} className="bg-black font-bold px-2 py-1 text-TextLight rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              {description.map(({ subject, text }, index) => (
                <p key={index}>
                  <b>{subject} </b>
                  {text}
                </p>
              ))}
              <Button type="black">Хочу так же!</Button>
            </div>
            <div className="flex flex-wrap gap-xs lg:gap-xxs xs:gap-xxxs justify-between w-2/4 md:w-full">
              {image.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt=""
                  width={200}
                  height={100}
                  loading="lazy"
                  className="w-[48%] lg:w-[47.5%] object-contain rounded-3xl border-2 border-black"
                />
              ))}
            </div>
          </div>
        ))}
        <Button type="lightBlue" className="m-auto block">
          Смотреть ещё
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
