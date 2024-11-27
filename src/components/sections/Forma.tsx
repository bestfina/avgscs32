import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";

const Forma = () => (
  <section>
    <div className="container">
      <div className="rounded-3xl overflow-hidden bg-[url('/assets/images/bg-forma.webp')] bg-fixed bg-cover bg-center">
        <div className="flex gap-md p-md xl:p-sm xl:gap-sm md:flex-wrap sm:p-xxs bg-black/40">
          <div className="flex flex-col gap-sm w-2/4 md:w-full md:gap-xxs">
            <h5 className="text-6xl xxl:text-5xl xxl:leading-tight xl:text-4xl xl:leading-tight sm:text-2xl leading-tight text-TextLight">
              Оставьте заявку, после чего вы получите{" "}
              <span className="text-6xl xxl:text-5xl xl:text-4xl sm:text-2xl bg-AccentDark px-2 rounded-full">
                бесплатный
              </span>{" "}
              аудит и скидку 5% на любую услугу
            </h5>
            <Social />
            <Contact className="text-TextLight sm:flex-col sm:gap-xxxs" />
          </div>
          <TaimerBlock />
        </div>
      </div>
    </div>
  </section>
);
export default Forma;
