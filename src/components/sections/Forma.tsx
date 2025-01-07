import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";

const Forma = () => (
  <section>
    <div className="container">
      <div className="rounded-3xl overflow-hidden bg-[url('/assets/images/96430.jpg')] bg-cover bg-fixed bg-center">
        <div className="flex gap-28 p-md xl:p-sm xl:gap-20 md:gap-sm md:flex-wrap sm:p-xs bg-black/65">
          <div className="flex flex-col w-3/5 md:w-full">
            <h2 className="text-TextLight">Бесплатный аудит сайта</h2>
            <p className="text-TextLight text-lg xl:text-base md:text-sm xs:text-xs mt-xxxxs sm:mt-xxxs">
              Оставьте заявку и получите бесплатный аудит вашего сайта, чтобы узнать, как повысить его эффективность.
              Начните привлекать больше клиентов уже сегодня!
            </p>
            <Social className="my-sm md:my-xs xs:my-xxxs" />
            <Contact className="text-TextLight" />
          </div>
          <TaimerBlock />
        </div>
      </div>
    </div>
  </section>
);
export default Forma;
