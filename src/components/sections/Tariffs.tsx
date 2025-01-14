import Button from "../ui/Button";

interface TariffsProps {
  priceTemplate: string;
  priceCustom: string;
}

const Tariffs = ({ priceTemplate, priceCustom }: TariffsProps) => {
  return (
    <section id="tariffs">
      <div className="container flex flex-col">
        <h2>Цены на разработку</h2>
        <div className="flex justify-between flex-wrap gap-md xl:gap-sm md:gap-xs">
          <div className="flex flex-col justify-between rounded-3xl bg-slate-100 p-sm xl:p-xs w-[48%] sm:w-full">
            <div>
              <h3>Разработка на шаблоне</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceTemplate}</h4>
              <p className="mt-sm mb-md xl:mt-xs xl:mb-10 lg:mt-xxs lg:mb-sm sm:mt-xxxs sm:mb-xs">
                Это идеальный выбор для тех, кто хочет максимально быстро и недорого запуститься онлайн с базовым
                функционалом
              </p>
            </div>
            <Button type="blue">Обсудить проект</Button>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-black/80 text-TextLight p-sm xl:p-xs w-[48%] sm:w-full">
            <div>
              <h3>Кастомная разработка</h3>
              <h4 className="mt-xxs xl:mt-xxxxs">{priceCustom}</h4>
              <p className="mt-sm mb-md xl:mt-xs xl:mb-10 lg:mt-xxs lg:mb-sm sm:mt-xxxs sm:mb-xs">
                Подойдет для тех, кто хочет получить уникальный дизайн, полностью адаптированный под бизнес-задачи и
                более сложный функционал.
              </p>
            </div>
            <Button type="blue">Обсудить проект</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
