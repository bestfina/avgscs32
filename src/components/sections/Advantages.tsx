import Image from "next/image";

interface AdvantagesProps {
  ADVANTAGES: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];
}

const Advantages = ({ ADVANTAGES }: AdvantagesProps) => {
  return (
    <section id="advantages">
      <div className="container flex flex-col">
        <h2>Наши преимущества</h2>
        <div className="flex flex-wrap gap-x-md gap-y-20">
          {ADVANTAGES.map(({ id, icon, title, description }) => (
            <div key={id} className="w-[31%]">
              <div className="flex items-center gap-xxs">
                <Image
                  src={icon}
                  alt=""
                  priority={false}
                  width={60}
                  height={60}
                  className="xl:w-md xl:h-md sm:w-10 sm:h-10"
                />
                <h4>{title}</h4>
              </div>

              <p className="mt-xxxs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
