import Image from "next/image";
import { ADVANTAGES } from "@/constants";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col gap-md">
        <h2>Немного о компании</h2>
        <div className="flex gap-md">
          <div className="flex flex-col gap-xs">
            <p className="leading-10">
              С 2017 года вместе с командой ответственных ребят разрабатываем сайты под ключ на Tilda, связки из сайтов
              и многостраничные ресурсы для компаниий под различные маркетинговые задачи. Cреди заказчиков ТОПы рынка -
              Тимур Кадыров, Антон Тум, Слава Молостов, TodayPrice, школа безопасного инвестирования SPI, и другие
            </p>
            <div className="flex gap-md">
              <div className="text-6xl font-bold">
                100+ <div>постоянных клиентов</div>
              </div>
              <div className="text-6xl font-bold">
                5 лет <div>средний опыт сотрудников</div>
              </div>
              <div className="text-6xl font-bold">
                Более 500 <div>успешно завершённых проектов</div>
              </div>
            </div>
          </div>
          <Image className="rounded-3xl" src="/assets/images/bg-hero.png" width={700} height={200} alt="" />
        </div>
        <div>
          <h5 className="text-4xl font-bold rotate-6">Наши принципы в работе:</h5>
          <div className="flex flex-wrap gap-md">
            {ADVANTAGES.map(({ id, icon, title, description }) => (
              <div className="w-[31%]" key={id}>
                <Image src={icon} width={80} height={80} alt="Иконка преимущества" className="w-auto h-16" />
                <h5 className="mt-xxxs mb-xxxxs">{title}</h5>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
