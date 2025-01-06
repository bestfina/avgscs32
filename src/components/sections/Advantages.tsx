"use client";
import Technologies from "../ui/Technologies";

const Advantages = () => {
  return (
    <section id="price">
      <div className="container flex flex-col">
        <div className="bg-black/80 rounded-3xl p-sm h-44 mt-md">
          <h3 className="text-TextLight">Цены</h3>
          <div>Шаблон: 20.000 рублей</div>
        </div>
        <Technologies />
      </div>
    </section>
  );
};

export default Advantages;
