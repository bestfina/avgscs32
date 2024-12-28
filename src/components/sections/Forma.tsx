import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";
import InnerSpan from "../ui/InnerSpan";

const Forma = () => (
  <section>
    <div className="container">
      <div className="rounded-3xl overflow-hidden bg-[url('/assets/images/bg-forma.webp')] bg-cover bg-center">
        <div className="flex gap-md p-md xl:p-sm xl:gap-sm md:flex-wrap sm:p-xxs bg-black/40">
          <div className="flex flex-col gap-sm w-3/5 md:w-full md:gap-xxs">
            <h2 className="text-TextLight">
              Оставьте заявку, после чего вы получите{" "}
              <InnerSpan className="text-6xl xxl:text-5xl xl:text-4xl md:text-3xl xs:text-2xl pb-2 xl:pb-1">
                бесплатный
              </InnerSpan>{" "}
              аудит или скидку 15% на любую услугу
            </h2>
            <Social />
            <Contact className="text-TextLight" />
          </div>
          <TaimerBlock />
        </div>
      </div>
    </div>
  </section>
);
export default Forma;
