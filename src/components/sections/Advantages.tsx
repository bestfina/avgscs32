import { useTranslations } from "next-intl";
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
  const t = useTranslations();

  return (
    <section id="advantages">
      <div className="container flex flex-col">
        <h2>{t("main.advantages.title")}</h2>
        <div className="flex flex-wrap gap-x-md gap-y-20">
          {ADVANTAGES.map(({ id, icon, title, description }) => (
            <div key={id} className="w-[31%]">
              <div className="flex items-center gap-xxs">
                <Image
                  src={icon}
                  // alt={t("icon_alt", { id })}
                  alt={""}
                  priority={false}
                  width={60}
                  height={60}
                  className="xl:w-md xl:h-md sm:w-10 sm:h-10"
                />
                <h4>{t(title)}</h4>
              </div>
              <p className="mt-xxxs">{t(description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;