import PartnersScroll from "../ui/PartnersScroll";

const Partners = () => {
  return (
    <section id="partners">
      <div className="container flex flex-col">
        <h2>Наши клиенты и партнёры</h2>
        <div className="flex flex-col justify-center gap-md xl:gap-sm">
          <PartnersScroll />
        </div>
      </div>
    </section>
  );
};

export default Partners;
