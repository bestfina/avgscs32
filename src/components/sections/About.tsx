import AboutInCount from "../ui/AboutInCount";
import Technologies from "../ui/Technologies";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col">
        <h2>Немного о нас</h2>
        <div className="flex flex-col justify-center gap-md xl:gap-sm">
          <p className="leading-9 xl:leading-8 lg:leading-6 xs:leading-5">
            CortexDigital — дижитал-агентство, создающая сайты, которые работают на результат. Мы специализируемся на
            разработке современных и уникальных решений для бизнеса: от ярких лендингов до сложных корпоративных
            порталов. Наш подход основан на глубоком анализе и понимании задач клиента. Мы объединяем креативный дизайн,
            удобный интерфейс и передовые технологии, чтобы ваши проекты привлекали клиентов, повышали конверсии и
            выделяли ваш бренд среди конкурентов. Мы создаем сайты, которые вдохновляют и работают для вашего успеха.
            Давайте воплотим вашу идею в жизнь вместе!
          </p>
          <Technologies />
          <AboutInCount />
        </div>
      </div>
    </section>
  );
};

export default About;
