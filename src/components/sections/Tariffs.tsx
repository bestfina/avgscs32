import Button from "../ui/Button";

const Tariffs = () => {
  return (
    <section id="tariffs">
      <div className="container flex flex-col">
        <h2>Цены на разработку</h2>
        <div className="flex justify-between flex-wrap gap-md xl:gap-sm md:gap-xs">
          <div className="flex flex-col justify-between bg-slate-100 rounded-3xl p-sm xl:p-xs w-[48%] sm:w-full">
            <div>
              <h3>Разработка на шаблоне</h3>
              <h3 className="text-AccentDark mt-xxs xl:mt-xxxxs">От 50.000 руб./5 дней</h3>
              <p className="mt-sm mb-md xl:mt-xs xl:mb-10 lg:mt-xxxs lg:mb-sm">
                Это идеальный выбор для тех, кто хочет максимально быстро и недорого запустить интернет-магазин с
                базовым функционалом.
              </p>
            </div>
            <Button type="blue">Обсудить проект</Button>
          </div>
          <div className="flex flex-col justify-between bg-black/80 rounded-3xl p-sm xl:p-xs w-[48%] sm:w-full text-TextLight">
            <div>
              <h3>Кастомная разработка</h3>
              <h3 className="mt-xxs xl:mt-xxxxs">От 240.000 руб./30 дней</h3>
              <p className="mt-sm mb-md xl:mt-xs xl:mb-10 lg:mt-xxxs lg:mb-sm">
                Подойдет для тех, кто хочет получить уникальный интернет-магазин, полностью адаптированный под
                бизнес-задачи, с индивидуальным дизайном.
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
