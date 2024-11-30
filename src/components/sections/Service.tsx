import { SERVICE } from "@/constants";
import Button from "../ui/Button";
import AdvantagesBlock from "../ui/AdvantagesBlock";
import { twMerge } from "tailwind-merge";

const Service = () => (
  <section id="service">
    <div className="container flex flex-col">
      <h2>Наши услуги и цены</h2>
      <div className="flex flex-wrap gap-sm lg:gap-xs justify-between">
        {SERVICE.map(({ id, image, title, advantages }) => (
          <div
            key={id}
            style={{ backgroundImage: `url('${image}')` }}
            className="relative min-h-[405px] xl:min-h-[350px] lg:min-h-72 rounded-3xl bg-cover bg-no-repeat bg-center w-[49%] 
            xxl:w-[48.5%] md:w-full p-md xl:p-sm lg:p-xs xs:p-xxs flex flex-col justify-between sm:gap-xs"
          >
            <h3 className="text-TextLight">{title}</h3>
            <div className="flex flex-wrap gap-xxs lg:gap-xxxs md:max-w-lg">
              {advantages.map((item, index) => (
                <AdvantagesBlock
                  className={twMerge(index === 0 || index === 1 ? "bg-BgLight text-AccentDark" : null)}
                  key={index}
                >
                  {item}
                </AdvantagesBlock>
              ))}
            </div>
            <Button type="lightBlue" className="ml-auto">
              Обсудить проект
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
