import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";

const Forma = () => (
  <section>
    <div className="container">
      <div className="rounded-3xl overflow-hidden bg-[url('/assets/images/bg-forma.png')] bg-fixed bg-cover bg-center">
        <div className="flex gap-md p-md bg-black/40">
          <div className="flex flex-col gap-sm w-2/4">
            <h5 className="text-6xl leading-tight text-TextLight">
              Оставьте заявку, после чего вы получите{" "}
              <span className="text-6xl bg-AccentDark px-2 rounded-full">бесплатный</span> аудит и скидку 5% на любую
              услугу
            </h5>
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
