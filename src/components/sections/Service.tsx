import { SERVICE } from "@/constants";
import Button from "../ui/Button";
import AdvantagesBlock from "../ui/AdvantagesBlock";

const Service = () => (
  <section id="service">
    <div className="container flex flex-col gap-md">
      <h2>Наши услуги и цены</h2>
      <div className="flex flex-wrap gap-sm justify-center">
        {SERVICE.map(({ id, image, title, advantages }) => (
          <div
            key={id}
            style={{ backgroundImage: `url('${image}')` }}
            className="h-[405px] rounded-3xl bg-cover bg-no-repeat w-[49%] p-md flex flex-col justify-between"
          >
            <h5 className="text-TextLight">{title}</h5>
            <div className="flex flex-wrap  gap-xxs">
              {advantages.map((item, index) => (
                <AdvantagesBlock key={index}>{item}</AdvantagesBlock>
              ))}
            </div>
            <Button type={id === 1 ? "blue" : "lightBlue"} className="ml-auto">
              Узнать больше
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
