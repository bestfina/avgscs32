import AboutInCount from "../ui/AboutInCount";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col">
        <h2>Немного о нас</h2>
        <div className="flex flex-col justify-center gap-sm w-full xl:gap-xs md:w-full">
          <p className="leading-8 lg:leading-6">
            CortexDigital — веб-студия, создающая сайты, которые работают на результат. Мы специализируемся на
            разработке современных и уникальных решений для бизнеса: от ярких лендингов до сложных корпоративных
            порталов. Наш подход основан на глубоком анализе и понимании задач клиента. Мы объединяем креативный дизайн,
            удобный интерфейс и передовые технологии, чтобы ваши проекты привлекали клиентов, повышали конверсии и
            выделяли ваш бренд среди конкурентов. Мы создаем сайты, которые вдохновляют и работают для вашего успеха.
            Давайте воплотим вашу идею в жизнь вместе!
          </p>
          <AboutInCount />
        </div>
      </div>
    </section>
  );
};

export default About;
