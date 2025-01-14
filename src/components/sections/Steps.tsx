import Image from "next/image";

const Steps = () => {
  return (
    <section id="steps">
      <div className="container flex flex-col">
        <h2>Этапы разработки: от идеи до запуска</h2>
        <div className="flex flex-wrap gap-md gap-y-20 justify-between">
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">1.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">3.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">4.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">5.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
          <div className="w-[31%] flex flex-col gap-xxs">
            <Image src="/assets/icons/store.svg" alt="" priority={false} width={60} height={60} />
            <p>
              <span className="text-3xl font-bold">6.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, accusamus inventore quam asperiores est dolore iusto aliquam incidunt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
