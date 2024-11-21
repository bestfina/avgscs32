import TaimerBlock from "../ui/TaimerBlock";
import Social from "../ui/Social";
import Contact from "../ui/Contact";

const Forma = () => (
  <section>
    <div className="container flex gap-md">
      <div className="flex flex-col gap-sm w-2/4">
        <h5 className="text-6xl">
          Оставьте заявку, после чего вы получите бесплатный аудит и скидку 5% на любую услугу
        </h5>
        <Social />
        <Contact />
      </div>
      <TaimerBlock className="bg-AccentDark" />
    </div>
  </section>
);
export default Forma;
