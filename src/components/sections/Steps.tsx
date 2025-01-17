import Image from "next/image";
import Technologies from "../ui/Technologies";
import { STEPS } from "@/constants";

const Steps = () => (
  <section id="steps">
    <div className="container flex flex-col">
      <h2>Этапы разработки: от идеи до запуска</h2>
      <Technologies />
      <div className="flex flex-wrap gap-xs gap-y-md sm:gap-sm justify-between w-full">
        {STEPS.map(({ id, title, description, icon }) => (
          <div key={id} className="w-[48%] sm:w-full flex flex-col gap-xxs xl:gap-xxxs">
            <Image
              src={icon}
              alt=""
              priority={false}
              width={60}
              height={60}
              className="xl:w-md xl:h-md sm:w-10 sm:h-10"
            />
            <h3>
              {id}. {title}
            </h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
