import Image from "next/image";
import { ADVANTAGES } from "@/constants";
import AboutInCount from "../ui/AboutInCount";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col gap-md">
        <h2>Немного о нас</h2>
        <div className="flex gap-md xxl:gap-sm md:flex-col">
          <div className="flex flex-col justify-center gap-sm w-3/5 xl:gap-xs md:w-full">
            <p className="leading-10 lg:leading-8">
              CortexDigital — веб-студия, создающая сайты, которые работают на результат. Мы специализируемся на
              разработке современных и уникальных решений для бизнеса: от ярких лендингов до сложных корпоративных
              порталов. Наш подход основан на глубоком анализе и понимании задач клиента. Мы объединяем креативный
              дизайн, удобный интерфейс и передовые технологии, чтобы ваши проекты привлекали клиентов, повышали
              конверсии и выделяли ваш бренд среди конкурентов. Мы создаем сайты, которые вдохновляют и работают для
              вашего успеха. Давайте воплотим вашу идею в жизнь вместе!
            </p>
            <AboutInCount />
          </div>
          <Image
            className="rounded-3xl w-2/5 md:w-full"
            src="/assets/images/bg-personalised-solution.webp"
            width={700}
            height={200}
            loading="lazy"
            alt="Наша компания"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-md">
            {ADVANTAGES.map(({ id, icon, title, description }) => (
              <div className="w-[30.9%] xl:w-[30%] lg:w-[47%] md:w-[46%] sm:w-full" key={id}>
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
